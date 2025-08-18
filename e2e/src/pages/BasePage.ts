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
    options: { timeout?: number } = {}
  ): Promise<void> {
    this.logger.step(`Click ${description}`, { 
      element: typeof locator === 'string' ? locator : 'locator',
      timeout: options.timeout 
    });

    await RetryHandler.withPlaywrightRetry(
      async () => {
        const element = await this.waiter.waitForVisible(locator, {
          timeout: options.timeout,
          description
        });
        await element.click();
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
    options: { timeout?: number } = {}
  ): Promise<T> {
    this.logger.debug(`Wait and act: ${description}`);
    
    return RetryHandler.withPlaywrightRetry(
      async () => {
        const element = await this.waiter.waitForVisible(locator, {
          timeout: options.timeout,
          description
        });
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
      const fullPath = `${screenshotConfig.path}/${filename}`;
      
      await this.page.screenshot({ 
        path: fullPath,
        ...screenshotConfig 
      });
      
      this.logger.debug(`Screenshot saved: ${filename}`, { 
        ...context, 
        path: fullPath 
      });
    } catch (error) {
      this.logger.warn(`Failed to take screenshot: ${filename}`, error instanceof Error ? error : undefined, context);
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
  protected async elementExists(locator: Locator | string, timeout: number = 3000): Promise<boolean> {
    try {
      const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
      await element.waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
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