import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { RetryHandler } from '../utils/SmartWaiter';

export class EndpointDetectionsPage extends BasePage {
  constructor(page: Page) {
    super(page, 'EndpointDetectionsPage');
  }

  protected getPagePath(): string {
    return '/activity-v2/detections';
  }

  protected async verifyPageLoaded(): Promise<void> {
    await this.verifyUrl(/.*activity-v2\/detections.*/, 'Endpoint detections page');
  }

  async navigateToEndpointDetections(): Promise<void> {
    return this.withTiming(
      async () => {
        // Start from Foundry home to ensure consistent navigation context
        this.logger.step('Navigate to Foundry home for consistent context');
        await this.navigateToPath('/foundry/home', 'Foundry home page');
        
        // Open main navigation menu
        this.logger.step('Open navigation menu');
        await this.smartClick(
          this.page.getByRole('button', { name: 'Menu', exact: true }),
          'Menu button',
          { timeout: 15000 }
        );
        
        // Wait for menu to expand
        await this.waiter.waitForMenuExpansion();
        
        // Navigate to Endpoint security section
        this.logger.step('Navigate to Endpoint security');
        await this.smartClick(
          this.page.getByRole('button', { name: /Endpoint security/ }),
          'Endpoint security button'
        );
        
        // Wait for submenu to expand and navigate to Endpoint detections
        this.logger.step('Navigate to Endpoint detections');
        await this.smartClick(
          this.page.getByRole('link', { name: 'Endpoint detections' }),
          'Endpoint detections link'
        );
        
        // Verify we reached the correct page
        await this.verifyPageLoaded();
        this.logger.success('Successfully navigated to Endpoint detections page');
      },
      'Navigate to Endpoint detections'
    );
  }

  async verifyUIExtensionText(expectedText: string): Promise<boolean> {
    this.logger.step(`Look for UI extension text: '${expectedText}'`);
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        const textLocator = this.page.locator(`text=${expectedText}`);
        
        // First attempt: look for text immediately
        if (await this.elementExists(textLocator, 8000)) {
          await expect(textLocator).toBeVisible();
          this.logger.success(`Found '${expectedText}' text - UI extension is working!`);
          return true;
        }
        
        // Second attempt: click on a detection to trigger UI extension
        this.logger.debug('Text not immediately visible, trying detection click...');
        
        const firstDetection = this.page.locator('gridcell button').first();
        if (await this.elementExists(firstDetection, 5000)) {
          await firstDetection.click();
          
          // Wait for UI extension to load
          await this.waiter.waitForCondition(
            async () => await this.elementExists(textLocator, 1000),
            'UI extension text to appear after detection click',
            { timeout: 5000 }
          );
          
          await expect(textLocator).toBeVisible();
          this.logger.success(`Found '${expectedText}' text after clicking detection!`);
          return true;
        }
        
        this.logger.info(`'${expectedText}' text not found - may require specific detection data`);
        return false;
      },
      `Verify UI extension text: ${expectedText}`,
      {
        maxAttempts: 1, // Don't retry this - it's data dependent
        shouldRetry: () => false
      }
    );
  }

  async takeScreenshot(filename: string): Promise<void> {
    await super.takeScreenshot(filename, { 
      page: 'EndpointDetectionsPage',
      action: 'screenshot' 
    });
  }
}