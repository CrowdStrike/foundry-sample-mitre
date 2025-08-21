import { Page, Locator, expect } from '@playwright/test';
import { logger } from './Logger';
import { config } from '../config/TestConfig';

/**
 * Waiting and retry utilities
 * Eliminates hard-coded timeouts with intelligent waiting strategies
 */

export interface WaitOptions {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  description?: string;
}

export interface RetryOptions {
  maxAttempts?: number;
  delay?: number;
  backoff?: 'linear' | 'exponential';
  shouldRetry?: (error: Error) => boolean;
}

export class SmartWaiter {
  constructor(private page: Page, private pageName: string = 'Unknown') {}

  /**
   * Wait for an element to be visible with smart retry logic
   */
  async waitForVisible(
    locator: Locator | string, 
    options: WaitOptions = {}
  ): Promise<Locator> {
    const actualLocator = typeof locator === 'string' 
      ? this.page.locator(locator) 
      : locator;
    
    const { timeout = config.navigationTimeout, description } = options;
    const elementDesc = description || 'element';
    
    logger.debug(`Waiting for ${elementDesc} to be visible`, {
      page: this.pageName,
      timeout,
      selector: typeof locator === 'string' ? locator : 'locator'
    });
    
    await actualLocator.waitFor({ 
      state: 'visible', 
      timeout 
    });
    
    return actualLocator;
  }

  /**
   * Wait for page to be fully loaded with network idle
   */
  async waitForPageLoad(description: string = 'page load'): Promise<void> {
    logger.debug(`Waiting for ${description}`, { page: this.pageName });
    
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.page.waitForLoadState('domcontentloaded')
    ]);
  }

  /**
   * Wait for a condition to be true with custom polling
   */
  async waitForCondition(
    condition: () => Promise<boolean>,
    description: string,
    options: WaitOptions = {}
  ): Promise<void> {
    const { timeout = config.defaultTimeout, retryDelay = 500 } = options;
    
    logger.debug(`Waiting for condition: ${description}`, {
      page: this.pageName,
      timeout
    });
    
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      try {
        if (await condition()) {
          return;
        }
      } catch (error) {
        // Continue polling on errors
      }
      
      await this.page.waitForTimeout(retryDelay);
    }
    
    throw new Error(`Timeout waiting for condition: ${description} after ${timeout}ms`);
  }

  /**
   * Smart wait for navigation menu to expand
   */
  async waitForMenuExpansion(): Promise<void> {
    await this.waitForCondition(
      async () => {
        const expandedMenus = await this.page.locator('[expanded], [aria-expanded="true"]').count();
        return expandedMenus > 0;
      },
      'navigation menu to expand',
      { timeout: 5000 }
    );
  }

  /**
   * Smart wait for app installation status
   */
  async waitForAppInstallationStatus(appName: string, expectedStatus: 'installed' | 'not-installed'): Promise<void> {
    await this.waitForCondition(
      async () => {
        const statusElements = await this.page.locator(`text=${appName}`).locator('../..').locator('text=Installed').count();
        const isInstalled = statusElements > 0;
        return expectedStatus === 'installed' ? isInstalled : !isInstalled;
      },
      `app ${appName} to be ${expectedStatus}`,
      { timeout: 60000 } // App operations can take time
    );
  }
}

export class RetryHandler {
  /**
   * Execute an operation with exponential backoff retry
   */
  static async withRetry<T>(
    operation: () => Promise<T>,
    operationName: string,
    options: RetryOptions = {}
  ): Promise<T> {
    const {
      maxAttempts = config.retryAttempts,
      delay = config.getRetryConfig().delay,
      backoff = 'exponential',
      shouldRetry = () => true
    } = options;

    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const result = await operation();
        
        if (attempt > 1) {
          logger.success(`${operationName} succeeded on attempt ${attempt}`);
        }
        
        return result;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        if (attempt === maxAttempts || !shouldRetry(lastError)) {
          logger.error(`${operationName} failed after ${attempt} attempts`, lastError);
          throw lastError;
        }
        
        const currentDelay = backoff === 'exponential' 
          ? delay * Math.pow(2, attempt - 1)
          : delay;
          
        logger.retry(operationName, attempt, maxAttempts, lastError);
        
        await new Promise(resolve => setTimeout(resolve, currentDelay));
      }
    }
    
    throw lastError!;
  }

  /**
   * Retry specifically for Playwright operations
   */
  static async withPlaywrightRetry<T>(
    operation: () => Promise<T>,
    operationName: string,
    options: RetryOptions = {}
  ): Promise<T> {
    return this.withRetry(
      operation,
      operationName,
      {
        ...options,
        shouldRetry: (error) => {
          // Don't retry on assertion errors - these are test failures
          if (error.message.includes('expect(')) {
            return false;
          }
          
          // Retry on timeout and network errors
          return error.message.includes('timeout') || 
                 error.message.includes('waiting for') ||
                 error.message.includes('not found') ||
                 (options.shouldRetry ? options.shouldRetry(error) : true);
        }
      }
    );
  }
}