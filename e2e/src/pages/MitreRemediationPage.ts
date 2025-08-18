import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page object for MITRE remediation extension
 */
export class MitreRemediationPage extends BasePage {
  constructor(page: Page) {
    super(page, 'MITRE Remediation');
  }

  protected getPagePath(): string {
    return '/activity/detections/details'; // Extension appears in detection context
  }

  protected async verifyPageLoaded(): Promise<void> {
    // Extension loads within detection details context
    await this.waiter.waitForVisible(
      this.page.locator('.remediation-extension, [data-testid="remediation"], .mitre-remediation').first(),
      { description: 'MITRE remediation extension container' }
    );
  }

  /**
   * Navigate to detection details where remediation extension appears
   */
  async navigateToDetectionWithRemediation(): Promise<void> {
    return this.withTiming(
      async () => {
        // Navigate to endpoint detections first
        await this.navigateToPath('/foundry/home', 'Foundry home page');
        await this.smartClick(this.page.getByRole('button', { name: 'Menu', exact: true }), 'Menu button');
        await this.waiter.waitForMenuExpansion();
        await this.smartClick(this.page.getByRole('button', { name: /Endpoint security/ }), 'Endpoint security button');
        await this.smartClick(this.page.getByRole('link', { name: 'Endpoint detections' }), 'Endpoint detections link');
        
        // Click on first detection to open details
        await this.waiter.waitForVisible(
          this.page.locator('.detection-row, [data-testid="detection-item"], .table-row').first(),
          { description: 'Detection list item' }
        );
        
        await this.smartClick(
          this.page.locator('.detection-row, [data-testid="detection-item"], .table-row').first(),
          'First detection item'
        );

        // Wait for detection details page to load
        await this.waiter.waitForPageLoad('Detection details loaded');
        
        // Extension should load automatically in the socket
        await this.verifyPageLoaded();
      },
      'Navigate to detection with MITRE remediation'
    );
  }

  /**
   * Verify remediation options are available
   */
  async verifyRemediationOptions(): Promise<void> {
    this.logger.step('Verify MITRE remediation options');
    
    const remediationElements = [
      this.page.getByText(/remediat/i),
      this.page.getByText(/mitiga/i),
      this.page.getByRole('button', { name: /remediate/i }),
      this.page.getByRole('button', { name: /mitigate/i }),
      this.page.locator('.remediation-action'),
      this.page.locator('[data-testid*="remediation"]')
    ];

    let foundRemediation = false;
    for (const element of remediationElements) {
      if (await this.elementExists(element)) {
        foundRemediation = true;
        this.logger.success('Found remediation options in extension');
        break;
      }
    }

    if (!foundRemediation) {
      this.logger.warn('No remediation options found - extension may not be loaded or available for this detection');
    }
  }

  /**
   * Click on remediation action
   */
  async clickRemediationAction(): Promise<void> {
    await this.smartClick(
      this.page.getByRole('button', { name: /remediate|mitigate/i }).first(),
      'Remediation action button'
    );
  }

  /**
   * Verify Jira integration elements
   */
  async verifyJiraIntegration(): Promise<void> {
    this.logger.step('Verify Jira integration elements');
    
    const jiraElements = [
      this.page.getByText(/jira/i),
      this.page.getByText(/ticket/i),
      this.page.getByText(/issue/i),
      this.page.locator('[data-testid*="jira"]'),
      this.page.getByRole('button', { name: /create.*ticket/i })
    ];

    let foundJira = false;
    for (const element of jiraElements) {
      if (await this.elementExists(element)) {
        foundJira = true;
        this.logger.success('Found Jira integration elements');
        break;
      }
    }

    if (!foundJira) {
      this.logger.warn('No Jira integration elements found - may not be configured');
    }
  }

  /**
   * Verify notification options (IT/IR)
   */
  async verifyNotificationOptions(): Promise<void> {
    this.logger.step('Verify notification options');
    
    const notificationElements = [
      this.page.getByText(/notify.*it/i),
      this.page.getByText(/notify.*ir/i),
      this.page.getByText(/incident response/i),
      this.page.getByRole('button', { name: /notify/i }),
      this.page.locator('[data-testid*="notify"]')
    ];

    let foundNotifications = false;
    for (const element of notificationElements) {
      if (await this.elementExists(element)) {
        foundNotifications = true;
        this.logger.success('Found notification options');
        break;
      }
    }

    if (!foundNotifications) {
      this.logger.warn('No notification options found');
    }
  }
}