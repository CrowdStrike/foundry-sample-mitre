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
    // Wait for the page to navigate away from Foundry home/app-manager
    await this.waiter.waitForCondition(
      async () => {
        const currentUrl = this.page.url();
        return !currentUrl.includes('/foundry/home') && !currentUrl.includes('/foundry/app-manager');
      },
      'Page to navigate away from Foundry home/app-manager',
      { timeout: 15000 }
    );
    
    // Wait for basic page content to load - look for any content that indicates the app loaded
    const appContentIndicators = [
      // Look for common page elements
      this.page.locator('main, .main-content, .app-content, .page-content'),
      this.page.locator('h1, h2, h3, .title, .page-title'),
      this.page.locator('.chart, .matrix, .grid, .table'),
      this.page.locator('[class*="app"], [class*="mitre"], [class*="chart"]'),
      // Look for Vue.js app root
      this.page.locator('#app, .vue-app, [data-v-]')
    ];
    
    let contentFound = false;
    for (const indicator of appContentIndicators) {
      if (await this.elementExists(indicator.first(), 3000)) {
        this.logger.success('App content loaded successfully');
        contentFound = true;
        break;
      }
    }
    
    if (!contentFound) {
      this.logger.warn('No clear app content indicators found, but page navigation succeeded');
    }
  }

  /**
   * Navigate to MITRE Chart page from Foundry home
   */
  async navigateToMitreChart(): Promise<void> {
    return this.withTiming(
      async () => {
        await this.navigateToPath('/foundry/home', 'Foundry home page');
        
        // Get the app name from config (set by CI environment)
        const appName = process.env.APP_NAME || 'foundry-sample-mitre';
        
        // First try to find the deployed app in Recent Apps section
        const recentAppLink = this.page.getByRole('link', { name: appName });
        
        if (await this.elementExists(recentAppLink, 5000)) {
          this.logger.step(`Found app '${appName}' in Recent Apps section`);
          await this.smartClick(recentAppLink, `${appName} app link in Recent Apps`);
        } else {
          // If not in recent apps, try App Manager
          this.logger.step(`App '${appName}' not in Recent Apps, trying App Manager`);
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
          } else {
            const errorMsg = `App '${appName}' not found in Recent Apps or App Manager. ` +
              `In CI, the app should be deployed by Foundry CLI. ` +
              `For local testing, please deploy the app first: foundry apps deploy --change-type=major`;
            
            this.logger.error(errorMsg);
            throw new Error(errorMsg);
          }
        }
        
        await this.verifyPageLoaded();
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