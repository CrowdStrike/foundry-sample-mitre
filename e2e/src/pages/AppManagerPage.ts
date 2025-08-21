import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { RetryHandler } from '../utils/SmartWaiter';

export class AppManagerPage extends BasePage {
  constructor(page: Page) {
    super(page, 'AppManagerPage');
  }

  protected getPagePath(): string {
    return '/foundry/app-manager';
  }

  protected async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle('App manager | Foundry | Falcon');
  }

  async findAndNavigateToApp(appName: string): Promise<void> {
    this.logger.step(`Find and navigate to app '${appName}'`);

    return RetryHandler.withPlaywrightRetry(
      async () => {
        const appList = await this.waiter.waitForVisible(
          this.page.getByTestId('custom-apps-list'),
          { description: 'Custom apps list' }
        );

        const appText = await this.waiter.waitForVisible(
          appList.getByText(appName),
          { description: `App '${appName}' text` }
        );

        const parent = appText.locator('../../../../..');
        await this.smartClick(parent.locator('button'), 'App menu button');

        await this.smartClick(
          this.page.getByText('View in app catalog'),
          'View in app catalog'
        );

        await expect(this.page).toHaveTitle('App catalog | Foundry | Falcon');
        await this.waiter.waitForPageLoad();

        // Wait for app to appear in catalog with retry
        const appLink = this.page.getByRole('link', { name: appName });

        if (!(await this.elementExists(appLink, 15000))) {
          this.logger.debug(`App '${appName}' not immediately visible, refreshing page...`);
          await this.page.reload();
          await this.waiter.waitForPageLoad();

          await this.waiter.waitForVisible(appLink, {
            description: `App link for '${appName}'`,
            timeout: 15000
          });
        }

        await appLink.click();
        await this.waiter.waitForPageLoad();

        this.logger.success(`Successfully navigated to ${appName} from App manager`);
      },
      `Find and navigate to ${appName}`
    );
  }
}
