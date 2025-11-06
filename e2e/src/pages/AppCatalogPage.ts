import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { RetryHandler } from '../utils/SmartWaiter';
import { config } from '../config/TestConfig';

export class AppCatalogPage extends BasePage {
  constructor(page: Page) {
    super(page, 'AppCatalogPage');
  }

  protected getPagePath(): string {
    return '/foundry/app-catalog';
  }

  protected async verifyPageLoaded(): Promise<void> {
    await this.waiter.waitForPageLoad('App catalog page');
  }

  async isAppInstalled(appName: string): Promise<boolean> {
    this.logger.step(`Check if app '${appName}' is installed`);
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        await this.waiter.waitForPageLoad();
        
        const appLink = this.page.getByRole('link', { name: appName });
        
        if (!(await this.elementExists(appLink, 5000))) {
          this.logger.debug(`App '${appName}' not found in catalog`);
          return false;
        }
        
        const appCard = appLink.locator('xpath=../..');
        const installedIndicators = [
          appCard.locator('text=Installed'),
          appCard.locator('[data-testid="app-status"]:has-text("Installed")'),
          appCard.locator('.installed, [class*="installed"]'),
          appCard.getByRole('button', { name: 'Open menu' })
        ];
        
        for (const indicator of installedIndicators) {
          if (await this.elementExists(indicator, 2000)) {
            this.logger.success(`App '${appName}' is installed`);
            return true;
          }
        }
        
        return false;
      },
      `Check installation status for ${appName}`
    );
  }

  async uninstallApp(appName: string): Promise<void> {
    this.logger.step(`Uninstall app '${appName}'`);
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        const appLink = await this.waiter.waitForVisible(
          this.page.getByRole('link', { name: appName }),
          { description: `App '${appName}' link`, timeout: 10000 }
        );
        
        const appCard = appLink.locator('xpath=../..');
        
        await this.smartClick(
          appCard.getByRole('button', { name: 'Open menu' }),
          'App menu button'
        );
        
        await this.smartClick(
          this.page.getByRole('menuitem', { name: 'Uninstall app' }),
          'Uninstall menu item'
        );
        
        await this.smartClick(
          this.page.getByRole('button', { name: 'Uninstall' }),
          'Confirm uninstall button'
        );

        await this.waiter.waitForPageLoad();

        // Wait for first "uninstalling" message
        const uninstallingMessage = this.page.getByText(/uninstalling/i).first();

        try {
          await uninstallingMessage.waitFor({ state: 'visible', timeout: 30000 });
          this.logger.success('Uninstallation started - "uninstalling" message appeared');
        } catch (error) {
          throw new Error(`Uninstallation failed to start for app '${appName}' - "uninstalling" message never appeared. Uninstallation may have failed immediately.`);
        }

        // Wait for second toast with final status (uninstalled or error)
        const uninstalledMessage = this.page.getByText(/uninstalled/i).first();
        const errorMessage = this.page.getByText(/error.*uninstall/i).first();

        try {
          await Promise.race([
            uninstalledMessage.waitFor({ state: 'visible', timeout: 60000 }).then(() => 'success'),
            errorMessage.waitFor({ state: 'visible', timeout: 60000 }).then(() => 'error')
          ]).then(result => {
            if (result === 'error') {
              throw new Error(`Uninstallation failed for app '${appName}' - error message appeared`);
            }
            this.logger.success('Uninstallation completed successfully - "uninstalled" message appeared');
          });
        } catch (error) {
          if (error.message.includes('Uninstallation failed')) {
            throw error;
          }
          throw new Error(`Uninstallation status unclear for app '${appName}' - timed out waiting for "uninstalled" or "error" message after 60 seconds`);
        }

        // Additional wait: toast appears before app is fully uninstalled in backend
        // Verify uninstallation status by checking app catalog
        this.logger.info('Verifying uninstallation status in app catalog...');

        // Navigate directly to app catalog with search query
        const baseUrl = new URL(this.page.url()).origin;
        await this.page.goto(`${baseUrl}/foundry/app-catalog?q=${appName}`);
        await this.page.waitForLoadState('networkidle');

        // Poll for status every 5 seconds (up to 60 seconds)
        const statusText = this.page.locator('[data-test-selector="status-text"]').filter({ hasText: /not installed/i });
        const maxAttempts = 12; // 12 attempts = up to 60 seconds

        for (let attempt = 0; attempt < maxAttempts; attempt++) {
          const isVisible = await statusText.isVisible().catch(() => false);

          if (isVisible) {
            this.logger.success('Uninstallation verified - app status shows Not installed in catalog');
            this.logger.success(`App '${appName}' uninstalled successfully`);
            return;
          }

          if (attempt < maxAttempts - 1) {
            this.logger.info(`Status not yet updated, waiting 5s before refresh (attempt ${attempt + 1}/${maxAttempts})...`);
            await this.waiter.delay(5000);
            await this.page.reload({ waitUntil: 'domcontentloaded' });
          }
        }

        throw new Error(`Uninstallation verification failed - status did not show 'Not installed' after ${maxAttempts * 5} seconds`);
      },
      `Uninstall app ${appName}`
    );
  }

  async navigateToAppDetails(appName: string): Promise<void> {
    this.logger.step(`Navigate to app details for '${appName}'`);
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        await this.waiter.waitForPageLoad();
        
        let appLink = this.page.getByRole('link', { name: appName });
        
        // First attempt: wait for app link
        if (!(await this.elementExists(appLink, 15000))) {
          // Second attempt: refresh page (for CI deployment timing)
          this.logger.debug(`App '${appName}' not immediately visible, refreshing page...`);
          await this.page.reload();
          await this.waiter.waitForPageLoad();
          
          appLink = this.page.getByRole('link', { name: appName });
          if (!(await this.elementExists(appLink, 20000))) {
            const errorMessage = this.buildAppNotFoundError(appName);
            throw new Error(errorMessage);
          }
        }
        
        await appLink.click();
        await this.waiter.waitForPageLoad();
        
        this.logger.success(`Navigated to ${appName} details page`);
      },
      `Navigate to ${appName} details`
    );
  }

  async installApp(): Promise<void> {
    this.logger.step('Install app via UI');
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        // Check if already installed
        const installedStatus = this.page.locator('text=Installed').first();
        if (await this.elementExists(installedStatus, 3000)) {
          this.logger.info('App is already installed, skipping installation');
          return;
        }
        
        await this.smartClick(
          this.page.getByTestId('app-details-page__install-button'),
          'Install button',
          { timeout: 15000 }
        );
        
        await this.waiter.waitForPageLoad();
        
        await this.smartClick(
          this.page.getByTestId('submit'),
          'Submit installation button'
        );
        
        await this.waiter.waitForPageLoad();
        
        // Wait for installation to complete
        const statusElement = await this.waiter.waitForVisible(
          this.page.getByTestId('status-text'),
          { description: 'Installation status', timeout: 10000 }
        );
        
        await expect(statusElement).toHaveText('Installed', { timeout: 60000 });
        
        this.logger.success('App installation completed successfully');
      },
      'Install app'
    );
  }

  async ensureAppUninstalled(appName: string): Promise<void> {
    this.logger.step(`Ensure app '${appName}' is uninstalled`);
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        await this.waiter.waitForPageLoad();
        
        const appLink = this.page.getByRole('link', { name: appName });
        
        if (!(await this.elementExists(appLink, 10000))) {
          const errorMessage = this.buildAppNotFoundError(appName);
          throw new Error(errorMessage);
        }
        
        if (await this.isAppInstalled(appName)) {
          this.logger.info(`App '${appName}' is installed, uninstalling...`);
          await this.uninstallApp(appName);
          this.logger.success(`App '${appName}' uninstalled successfully`);
        } else {
          this.logger.success(`App '${appName}' is not installed`);
        }
      },
      `Ensure ${appName} is uninstalled`
    );
  }

  private buildAppNotFoundError(appName: string): string {
    return [
      `❌ App "${appName}" is not available in the app catalog.\n`,
      `This could mean:`,
      `1. In LOCAL environment: The app needs to be manually deployed first using the Foundry CLI`,
      `2. In CI environment: The app deployment step may have failed\n`,
      `To fix this locally:`,
      `- Run: foundry apps deploy`,
      `- Then run: foundry apps release`,
      `- Make sure your APP_NAME in .env matches your deployed app name\n`,
      `Current APP_NAME from .env: ${appName}`
    ].join('\n');
  }
}