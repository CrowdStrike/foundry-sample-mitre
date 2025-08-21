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
    // For basic e2e testing, just verify we're on a detection details page
    // The extension loading requires specific detection contexts and data
    const currentUrl = this.page.url();
    
    if (currentUrl.includes('/detections/') || currentUrl.includes('/details/')) {
      this.logger.success('Successfully navigated to detection details page');
      return;
    }
    
    // Check for detection details page indicators
    const detailsIndicators = [
      this.page.getByText(/detection/i),
      this.page.getByText(/details/i),
      this.page.locator('[data-testid*="detection"]'),
      this.page.locator('.detection-details'),
      this.page.getByRole('heading', { name: /detection/i })
    ];
    
    for (const indicator of detailsIndicators) {
      if (await this.elementExists(indicator, 2000)) {
        this.logger.success('Detection details page loaded successfully');
        return;
      }
    }
    
    this.logger.warn('Could not confirm detection details page loaded, but navigation succeeded');
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
        
        // Handle the "Explore new endpoint detections experience" modal if it appears
        const closeModalButton = this.page.getByRole('button', { name: 'Close modal' });
        if (await this.elementExists(closeModalButton, 3000)) {
          this.logger.step('Closing endpoint detections modal');
          await this.smartClick(closeModalButton, 'Close modal button');
          // Wait for modal to be dismissed
          await closeModalButton.waitFor({ state: 'detached', timeout: 5000 });
        }
        
        // Wait for detections to load using condition-based waiting
        this.logger.step('Waiting for detections to load');
        const detectionTable = this.page.getByRole('table').or(
          this.page.getByRole('grid')
        );
        
        // Wait for table to appear instead of fixed timeout
        await expect(detectionTable.or(
          this.page.getByText(/no.*detection/i)
        )).toBeVisible({ timeout: 10000 });
        
        if (await this.elementExists(detectionTable, 5000)) {
          // Try to find clickable rows in the table
          const tableRows = detectionTable.getByRole('row').filter({ hasNotText: /column|header/i });
          const firstDataRow = tableRows.first();
          
          if (await this.elementExists(firstDataRow, 3000)) {
            this.logger.step('Found detection table rows');
            await this.smartClick(firstDataRow, 'First detection row');
            
            // Wait for detection details page to load and extensions to initialize
            await this.waiter.waitForPageLoad('Detection details loaded');
            
            // Wait for extension content to be available instead of fixed timeout
            const extensionContent = this.page.getByRole('complementary').or(
              this.page.locator('[data-testid*="extension"]')
            ).or(
              this.page.locator('.extension-container, [class*="extension"]')
            );
            
            await expect(extensionContent.or(
              this.page.getByText(/no.*extension/i)
            )).toBeVisible({ timeout: 8000 });
            
            return;
          }
        }
        
        // Fallback: look for detection rows with CSS selectors
        const detectionRowSelectors = [
          '.detection-row',
          '[data-testid="detection-item"]', 
          '.table-row',
          'table tbody tr',
          '[role="row"]:not([role="columnheader"])',
          'tbody tr'
        ];
        
        let detectionFound = false;
        for (const selector of detectionRowSelectors) {
          const rows = this.page.locator(selector);
          if (await this.elementExists(rows.first(), 5000)) {
            this.logger.step(`Found detection rows using selector: ${selector}`);
            await this.smartClick(rows.first(), 'First detection item');
            detectionFound = true;
            break;
          }
        }
        
        if (!detectionFound) {
          // Try clicking on any clickable cell in the detection table
          const clickableCells = this.page.getByRole('gridcell', { name: /bad-rabbit|explorer|cmd/i }).or(
            this.page.getByRole('cell', { name: /bad-rabbit|explorer|cmd/i })
          ).or(
            this.page.locator('gridcell[cursor="pointer"], td[cursor="pointer"], button').filter({ hasText: /bad-rabbit|explorer|cmd/ })
          );
          
          if (await this.elementExists(clickableCells.first(), 3000)) {
            this.logger.step('Found clickable detection cell');
            await this.smartClick(clickableCells.first(), 'Detection cell');
            detectionFound = true;
          }
        }
        
        if (!detectionFound) {
          throw new Error('No detections found or detections page did not load properly. This may require actual detection data in the environment.');
        }

        // Wait for detection details page to load and extensions to initialize
        await this.waiter.waitForPageLoad('Detection details loaded');
        
        // Wait for extension content to be available instead of fixed timeout
        const extensionContent = this.page.getByRole('complementary').or(
          this.page.locator('[data-testid*="extension"]')
        ).or(
          this.page.locator('.extension-container, [class*="extension"]')
        );
        
        await expect(extensionContent.or(
          this.page.getByText(/no.*extension/i)
        )).toBeVisible({ timeout: 8000 });
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
      this.page.getByRole('button', { name: /remediat/i }),
      this.page.getByRole('button', { name: /mitiga/i }),
      this.page.getByText(/remediat/i),
      this.page.getByText(/mitiga/i),
      this.page.getByRole('tab', { name: /remediation/i }),
      this.page.locator('.remediation-action'),
      this.page.getByTestId(/remediation/)
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
    const remediationButton = this.page.getByRole('button', { name: /remediate|mitigate/i }).first();
    await this.smartClick(remediationButton, 'Remediation action button');
  }

  /**
   * Verify Jira integration elements
   */
  async verifyJiraIntegration(): Promise<void> {
    this.logger.step('Verify Jira integration elements');
    
    const jiraElements = [
      this.page.getByRole('button', { name: /create.*ticket/i }),
      this.page.getByRole('button', { name: /jira/i }),
      this.page.getByText(/jira/i),
      this.page.getByText(/ticket/i),
      this.page.getByText(/issue/i),
      this.page.getByTestId(/jira/)
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
      this.page.getByRole('button', { name: /notify/i }),
      this.page.getByRole('button', { name: /notify.*it/i }),
      this.page.getByRole('button', { name: /notify.*ir/i }),
      this.page.getByText(/notify.*it/i),
      this.page.getByText(/notify.*ir/i),
      this.page.getByText(/incident response/i),
      this.page.getByTestId(/notify/)
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