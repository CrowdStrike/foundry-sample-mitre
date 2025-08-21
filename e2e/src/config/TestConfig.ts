/**
 * Centralized configuration management for Foundry E2E tests
 * Centralizes all environment variables, validation, and defaults
 */
export class TestConfig {
  private static _instance: TestConfig;
  
  // Core URLs and endpoints
  public readonly falconBaseUrl: string;
  public readonly apiBaseUrl: string;
  
  // Authentication
  public readonly falconUsername: string;
  public readonly falconPassword: string;
  public readonly authSecret: string;
  
  // App configuration
  public readonly appName: string;
  
  // Test configuration
  public readonly defaultTimeout: number;
  public readonly navigationTimeout: number;
  public readonly retryAttempts: number;
  public readonly screenshotPath: string;
  
  // Environment detection
  public readonly isCI: boolean;
  public readonly isDebugMode: boolean;
  
  private constructor() {
    // Validate all required environment variables first
    this.validateEnvironment();
    
    // Core URLs
    this.falconBaseUrl = process.env.FALCON_BASE_URL || 'https://falcon.us-2.crowdstrike.com';
    this.apiBaseUrl = `${this.falconBaseUrl}/api/v2`;
    
    // Authentication (required)
    this.falconUsername = this.getRequiredEnv('FALCON_USERNAME');
    this.falconPassword = this.getRequiredEnv('FALCON_PASSWORD');
    this.authSecret = this.getRequiredEnv('FALCON_AUTH_SECRET');
    
    // App configuration
    this.appName = this.getRequiredEnv('APP_NAME');
    
    // Test timeouts (configurable defaults - longer in CI due to slower hardware)
    this.defaultTimeout = parseInt(process.env.DEFAULT_TIMEOUT || (this.isCI ? '45000' : '30000'));
    this.navigationTimeout = parseInt(process.env.NAVIGATION_TIMEOUT || (this.isCI ? '30000' : '15000'));
    this.retryAttempts = parseInt(process.env.RETRY_ATTEMPTS || (this.isCI ? '3' : '2'));
    
    // Paths
    this.screenshotPath = process.env.SCREENSHOT_PATH || 'test-results';
    
    // Environment detection
    this.isCI = !!process.env.CI;
    this.isDebugMode = process.env.DEBUG === 'true' || process.env.NODE_ENV === 'debug';
  }
  
  public static getInstance(): TestConfig {
    if (!TestConfig._instance) {
      TestConfig._instance = new TestConfig();
    }
    return TestConfig._instance;
  }
  
  private validateEnvironment(): void {
    const required = [
      'FALCON_USERNAME',
      'FALCON_PASSWORD', 
      'FALCON_AUTH_SECRET',
      'APP_NAME'
    ];
    
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      throw new Error(
        `❌ Missing required environment variables: ${missing.join(', ')}\n` +
        `Please check your .env file or environment setup.`
      );
    }
  }
  
  private getRequiredEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`❌ Required environment variable ${key} is not set`);
    }
    return value;
  }
  
  /**
   * Get environment-aware configuration for Playwright timeouts
   */
  public getPlaywrightTimeouts() {
    return {
      timeout: this.defaultTimeout,
      navigationTimeout: this.navigationTimeout,
      actionTimeout: this.isCI ? 15000 : 10000, // Longer in CI for slower hardware
    };
  }
  
  /**
   * Get screenshot configuration
   */
  public getScreenshotConfig() {
    return {
      path: this.screenshotPath,
      fullPage: true,
      type: 'png' as const
      // Note: quality parameter is not supported for PNG screenshots
    };
  }
  
  /**
   * Get retry configuration for flaky operations
   */
  public getRetryConfig() {
    return {
      attempts: this.retryAttempts,
      delay: this.isCI ? 2000 : 1000,
      backoff: 'exponential' as const
    };
  }
  
  /**
   * Log configuration summary (safe for logs)
   */
  public logSummary(): void {
    if (this.isCI) {
      // Very minimal logging in CI
      console.log(`E2E Test Config: ${this.isCI ? 'CI' : 'Local'} | ${this.appName}`);
    } else {
      // Detailed logging for local development
      console.log('🔧 Test Configuration:');
      console.log(`  Environment: ${this.isCI ? 'CI' : 'Local'}`);
      console.log(`  Base URL: ${this.falconBaseUrl}`);
      console.log(`  App Name: ${this.appName}`);
      console.log(`  Default Timeout: ${this.defaultTimeout}ms`);
      console.log(`  Retry Attempts: ${this.retryAttempts}`);
      console.log(`  Debug Mode: ${this.isDebugMode}${this.isDebugMode ? '' : ' (enable with DEBUG=true npm test or npm run test:debug)'}`);
    }
  }
}

// Singleton instance export
export const config = TestConfig.getInstance();
