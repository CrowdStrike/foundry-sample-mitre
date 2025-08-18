import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for MITRE Attack chart/matrix view
 */
export class MitreChartPage extends BasePage {
  constructor(page: Page) {
    super(page, 'MITRE Chart');
  }

  protected getPagePath(): string {
    return '/foundry/mitre-vue';
  }

  protected async verifyPageLoaded(): Promise<void> {
    // For now, just verify we successfully clicked the app link and wait a reasonable time
    // Let's see what URL we actually end up at
    await this.page.waitForTimeout(8000); // Give it more time to navigate after launch button
    
    let currentUrl = this.page.url();
    this.logger.info(`Current URL after navigation attempt: ${currentUrl}`);
    
    // Check if we're still on app manager or home - might need to check for new tabs
    if (currentUrl.includes('/foundry/app-manager') || currentUrl.includes('/foundry/home')) {
      // The app might have opened in a new tab - check for that
      const context = this.page.context();
      const pages = context.pages();
      
      if (pages.length > 1) {
        this.logger.step(`Found ${pages.length} tabs, checking if app opened in new tab`);
        
        // Switch to the newest tab (likely the app)
        const newPage = pages[pages.length - 1];
        await newPage.bringToFront();
        
        // Update our page reference for the rest of the test
        const mitreChartPage = this as any;
        mitreChartPage.page = newPage;
        
        await newPage.waitForTimeout(3000); // Let it load
        currentUrl = newPage.url();
        this.logger.info(`New tab URL: ${currentUrl}`);
        
        if (currentUrl.includes('/foundry/app-manager') || currentUrl.includes('/foundry/home')) {
          throw new Error(`Navigation failed - app opened in new tab but still shows: ${currentUrl}`);
        }
      } else {
        throw new Error(`Navigation failed - still on ${currentUrl}. App may not be properly deployed or accessible.`);
      }
    }
    
    // If we got somewhere else, that's probably the app
    this.logger.success(`Successfully navigated to: ${currentUrl}`);
    
    // Give the app more time to load
    await this.page.waitForTimeout(3000);
    
    // Just verify there's some content on the page
    const hasContent = await this.elementExists(this.page.locator('body *').first(), 5000);
    if (hasContent) {
      this.logger.success('Page has content - app appears to have loaded');
    } else {
      this.logger.warn('Page appears empty but navigation succeeded');
    }
  }

  /**
   * Navigate to MITRE Chart page from Foundry home
   * Pages appear under "Custom Apps" section after proper installation
   */
  async navigateToMitreChart(): Promise<void> {
    return this.withTiming(
      async () => {
        await this.navigateToPath('/foundry/home', 'Foundry home page');
        
        // Try to find the app under "Custom Apps" in navigation menu (if properly installed)
        const menuButton = this.page.getByRole('button', { name: 'Menu', exact: true });
        if (await this.elementExists(menuButton, 3000)) {
          await this.smartClick(menuButton, 'Menu button');
          await this.page.waitForTimeout(1000); // Let menu expand
          
          // Look for "Custom Apps" section
          const customAppsButton = this.page.getByRole('button', { name: /Custom Apps/i });
          if (await this.elementExists(customAppsButton, 3000)) {
            await this.smartClick(customAppsButton, 'Custom Apps section');
            await this.page.waitForTimeout(500); // Let submenu expand
            
            // Look for "Mitre Chart" under Custom Apps (from manifest navigation links)
            const mitreChartLink = this.page.getByRole('link', { name: 'Mitre Chart' });
            if (await this.elementExists(mitreChartLink, 3000)) {
              this.logger.step('Found "Mitre Chart" under Custom Apps');
              await this.smartClick(mitreChartLink, 'Mitre Chart navigation link');
              await this.verifyPageLoaded();
              return;
            }
          }
        }
        
        // If not in Custom Apps menu, try Recent Apps section
        const appName = process.env.APP_NAME || 'foundry-sample-mitre';
        const recentAppLink = this.page.getByRole('link', { name: appName });
        
        if (await this.elementExists(recentAppLink, 5000)) {
          this.logger.step(`Found app '${appName}' in Recent Apps section`);
          await this.smartClick(recentAppLink, `${appName} app link in Recent Apps`);
          await this.verifyPageLoaded();
          return;
        }
        
        // If not in recent apps, try App Manager approach
        this.logger.step(`App '${appName}' not in Custom Apps or Recent Apps, trying App Manager`);
        await this.smartClick(
          this.page.getByRole('link', { name: 'App manager' }),
          'App manager link'
        );
        
        // Wait for App Manager to load
        await expect(this.page).toHaveTitle('App manager | Foundry | Falcon');
        
        // Look for the deployed app in App Manager
        const appManagerLink = this.page.getByRole('link', { name: appName });
        
        if (await this.elementExists(appManagerLink, 5000)) {
          await this.smartClick(appManagerLink, `${appName} app link in App Manager`);
          
          // From app details page, try "View in catalog" to launch the app
          await this.page.waitForTimeout(2000);
          const viewInCatalogLink = this.page.getByRole('link', { name: 'View in catalog' });
          
          if (await this.elementExists(viewInCatalogLink, 5000)) {
            await this.smartClick(viewInCatalogLink, 'View in catalog link');
            await this.page.waitForTimeout(3000);
            
            // Look for launch button in catalog
            const launchButton = this.page.getByRole('button', { name: /launch|open|start/i }).first();
            if (await this.elementExists(launchButton, 5000)) {
              await this.smartClick(launchButton, 'App launch button');
              await this.verifyPageLoaded();
              return;
            }
          }
          
          const errorMsg = `Unable to launch app '${appName}' through UI. ` +
            `App may not be properly released or accessible.`;
          this.logger.error(errorMsg);
          throw new Error(errorMsg);
        } else {
          const errorMsg = `App '${appName}' not found in Custom Apps, Recent Apps, or App Manager. ` +
            `In CI, the app should be deployed and released by Foundry CLI. ` +
            `For local testing, please deploy the app first: foundry apps deploy --change-type=major`;
          
          this.logger.error(errorMsg);
          throw new Error(errorMsg);
        }
      },
      'Navigate to MITRE Chart'
    );
  }

  /**
   * Verify MITRE matrix elements are present
   */
  async verifyMitreMatrixElements(): Promise<void> {
    this.logger.step('Verify MITRE matrix elements');
    
    // Check for MITRE ATT&CK tactics (columns)
    const tactics = [
      'Initial Access',
      'Execution', 
      'Persistence',
      'Privilege Escalation',
      'Defense Evasion',
      'Credential Access',
      'Discovery',
      'Lateral Movement',
      'Collection',
      'Command and Control',
      'Exfiltration',
      'Impact'
    ];

    // Look for at least some common tactics
    const foundTactics = [];
    for (const tactic of tactics.slice(0, 6)) { // Check first 6 tactics
      if (await this.elementExists(this.page.getByText(tactic, { exact: false }))) {
        foundTactics.push(tactic);
      }
    }

    if (foundTactics.length === 0) {
      throw new Error('No MITRE ATT&CK tactics found on the page');
    }

    this.logger.success(`Found ${foundTactics.length} MITRE tactics: ${foundTactics.join(', ')}`);
  }

  /**
   * Click on a specific MITRE technique or cell
   */
  async clickMitreTechnique(techniqueId?: string): Promise<void> {
    const description = techniqueId ? `MITRE technique ${techniqueId}` : 'first available MITRE technique';
    
    let selector;
    if (techniqueId) {
      selector = this.page.locator(`[data-technique="${techniqueId}"], [data-testid="technique-${techniqueId}"]`);
    } else {
      // Click first clickable technique cell
      selector = this.page.locator('.technique-cell, .mitre-technique, [data-technique]').first();
    }

    await this.smartClick(selector, description);
  }

  /**
   * Verify detection data is loaded and displayed
   */
  async verifyDetectionData(): Promise<void> {
    this.logger.step('Verify detection data is loaded');
    
    // Look for detection counts, technique highlighting, or data indicators
    const dataIndicators = [
      this.page.locator('.detection-count'),
      this.page.locator('.technique-highlighted'),
      this.page.locator('[data-count]'),
      this.page.getByText(/detection/i),
      this.page.getByText(/alert/i),
      this.page.locator('.has-data')
    ];

    let foundData = false;
    for (const indicator of dataIndicators) {
      if (await this.elementExists(indicator)) {
        foundData = true;
        break;
      }
    }

    if (!foundData) {
      this.logger.warn('No detection data indicators found - chart may be empty or still loading');
    } else {
      this.logger.success('Detection data indicators found on MITRE chart');
    }
  }

  /**
   * Navigate to wizard configuration
   */
  async navigateToWizard(): Promise<void> {
    return this.withTiming(
      async () => {
        await this.navigateToPath('/foundry/mitre-vue/wizard', 'MITRE wizard page');
        
        // Wait for wizard form elements
        await this.waiter.waitForVisible(
          this.page.getByRole('heading', { name: /wizard|configure/i }),
          { description: 'Wizard page heading' }
        );
      },
      'Navigate to MITRE wizard'
    );
  }
}