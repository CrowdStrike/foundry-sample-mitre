import { Page, expect, Locator } from '@playwright/test';
import { config } from '../config/TestConfig';
import { logger, LogContext } from '../utils/Logger';
import { SmartWaiter, RetryHandler } from '../utils/SmartWaiter';

/**
 * Base page class
 * Eliminates duplication and provides consistent patterns
 */
export abstract class BasePage {
  protected readonly page: Page;
  protected readonly waiter: SmartWaiter;
  protected readonly logger: ReturnType<typeof logger.forPage>;
  protected readonly pageName: string;

  constructor(page: Page, pageName: string) {
    this.page = page;
    this.pageName = pageName;
    this.waiter = new SmartWaiter(page, pageName);
    this.logger = logger.forPage(pageName);
    
    // Set page-level timeouts from config
    const timeouts = config.getPlaywrightTimeouts();
    page.setDefaultTimeout(timeouts.timeout);
  }

  /**
   * Get the base URL from centralized config
   */
  protected getBaseURL(): string {
    return config.falconBaseUrl;
  }

  /**
   * Navigate to a specific path with retry logic
   */
  protected async navigateToPath(path: string, description?: string): Promise<void> {
    const url = `${this.getBaseURL()}${path}`;
    const desc = description || `Navigate to ${path}`;
    
    this.logger.step(desc, { url });
    
    await RetryHandler.withPlaywrightRetry(
      async () => {
        await this.page.goto(url);
        await this.waiter.waitForPageLoad(desc);
      },
      desc
    );
  }

  /**
   * Click an element with smart waiting and retry
   */
  protected async smartClick(
    locator: Locator | string, 
    description: string,
    options: { timeout?: number; force?: boolean } = {}
  ): Promise<void> {
    const defaultTimeout = config.getPlaywrightTimeouts().actionTimeout;
    const actualTimeout = options.timeout || defaultTimeout;
    
    this.logger.step(`Click ${description}`, { 
      element: typeof locator === 'string' ? locator : 'locator',
      timeout: actualTimeout,
      force: options.force
    });

    await RetryHandler.withPlaywrightRetry(
      async () => {
        const element = await this.waiter.waitForVisible(locator, {
          timeout: actualTimeout,
          description
        });
        await element.click({ force: options.force, timeout: actualTimeout });
      },
      `Click ${description}`
    );
  }

  /**
   * Wait for an element and perform actions on it
   */
  protected async waitAndAct<T>(
    locator: Locator | string,
    action: (element: Locator) => Promise<T>,
    description: string,
    options: { timeout?: number; state?: 'visible' | 'attached' } = {}
  ): Promise<T> {
    const defaultTimeout = config.getPlaywrightTimeouts().actionTimeout;
    const actualTimeout = options.timeout || defaultTimeout;
    const state = options.state || 'visible';
    
    this.logger.debug(`Wait and act: ${description}`, { timeout: actualTimeout, state });
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        const element = state === 'visible' 
          ? await this.waiter.waitForVisible(locator, { timeout: actualTimeout, description })
          : typeof locator === 'string' 
            ? this.page.locator(locator) 
            : locator;
            
        if (state === 'attached') {
          await element.waitFor({ state: 'attached', timeout: actualTimeout });
        }
        
        return await action(element);
      },
      description
    );
  }

  /**
   * Take a screenshot with consistent naming and error handling
   */
  protected async takeScreenshot(filename: string, context: LogContext = {}): Promise<void> {
    try {
      const screenshotConfig = config.getScreenshotConfig();
      
      // Ensure the directory exists
      const fs = require('fs');
      const path = require('path');
      const screenshotDir = screenshotConfig.path;
      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
      }
      
      // Create full path for the screenshot file
      const fullPath = path.join(screenshotDir, filename);
      
      await this.page.screenshot({ 
        path: fullPath,
        fullPage: screenshotConfig.fullPage,
        type: screenshotConfig.type
      });
      
      this.logger.debug(`Screenshot saved: ${filename}`, { 
        ...context, 
        path: fullPath 
      });
      this.logger.success(`Screenshot saved: ${filename}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      this.logger.warn(`Failed to take screenshot: ${filename} - ${errorMessage}`, error instanceof Error ? error : undefined, context);
    }
  }

  /**
   * Verify page URL matches expected pattern
   */
  protected async verifyUrl(urlPattern: RegExp, description: string): Promise<void> {
    this.logger.step(`Verify URL: ${description}`, { pattern: urlPattern.toString() });
    
    await expect(this.page).toHaveURL(urlPattern, { 
      timeout: config.navigationTimeout 
    });
    
    this.logger.success(`URL verification passed: ${description}`);
  }

  /**
   * Wait for specific page to be loaded based on URL pattern
   */
  protected async waitForPageUrl(urlPattern: RegExp, description: string): Promise<void> {
    await this.waiter.waitForCondition(
      async () => urlPattern.test(this.page.url()),
      description,
      { timeout: config.navigationTimeout }
    );
  }

  /**
   * Check if element exists without throwing
   */
  protected async elementExists(
    locator: Locator | string, 
    timeout: number = 3000,
    state: 'visible' | 'attached' | 'detached' | 'hidden' = 'visible'
  ): Promise<boolean> {
    try {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor({ state, timeout });
      return true;
    } catch (error) {
      this.logger.debug(`Element not found in expected state '${state}': ${typeof locator === 'string' ? locator : 'locator'}`, error instanceof Error ? error : undefined);
      return false;
    }
  }

  /**
   * Clean up any lingering modals or dialogs using semantic locators
   */
  async cleanupModals(): Promise<void> {
    try {
      const modalCloseButton = this.page.getByRole('button', { name: /close|dismiss|cancel/i });
      if (await this.elementExists(modalCloseButton, 1000)) {
        await this.smartClick(modalCloseButton, 'Close modal dialog');
        this.logger.debug('Cleaned up lingering modal');
      }
    } catch (error) {
      // Ignore cleanup errors - they're not critical
      this.logger.debug('Modal cleanup completed (no modals found)');
    }
  }

  /**
   * Execute operation with performance timing
   */
  protected async withTiming<T>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<T> {
    const startTime = Date.now();
    
    try {
      const result = await operation();
      const duration = Date.now() - startTime;
      
      logger.performance(operationName, duration, { page: this.pageName });
      
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.logger.error(`${operationName} failed after ${duration}ms`, error instanceof Error ? error : undefined);
      throw error;
    }
  }

  /**
   * Abstract method for page-specific verification
   */
  protected abstract verifyPageLoaded(): Promise<void>;

  /**
   * Navigate to this page and verify it loaded
   */
  async goto(): Promise<void> {
    await this.withTiming(
      async () => {
        await this.navigateToPath(this.getPagePath());
        await this.verifyPageLoaded();
      },
      `Navigate to ${this.pageName}`
    );
  }

  /**
   * Abstract method to get the page path
   */
  protected abstract getPagePath(): string;
}