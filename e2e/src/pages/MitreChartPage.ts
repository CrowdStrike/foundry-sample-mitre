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
    await this.verifyUrl(/\/foundry\/mitre-vue/, 'MITRE Chart page loaded');
    
    // Wait for chart/matrix elements to be visible
    await this.waiter.waitForVisible(
      this.page.locator('[data-testid="mitre-matrix"], .mitre-chart, .attack-matrix').first(),
      { description: 'MITRE chart/matrix container' }
    );
  }

  /**
   * Navigate to MITRE Chart page from Foundry home
   */
  async navigateToMitreChart(): Promise<void> {
    return this.withTiming(
      async () => {
        await this.navigateToPath('/foundry/home', 'Foundry home page');
        
        // Click on MITRE app in the app grid
        await this.smartClick(
          this.page.getByRole('link', { name: /mitre/i }).or(
            this.page.getByText(/triage with mitre/i)
          ),
          'MITRE app link'
        );
        
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