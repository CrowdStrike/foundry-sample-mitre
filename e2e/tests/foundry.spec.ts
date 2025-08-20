import { test, expect } from '@playwright/test';
import { FoundryHomePage } from '../src/pages/FoundryHomePage';
import { MitreChartPage } from '../src/pages/MitreChartPage';
import { MitreRemediationPage } from '../src/pages/MitreRemediationPage';
import { config } from '../src/config/TestConfig';
import { logger } from '../src/utils/Logger';

// Configure tests to run sequentially for better stability with Foundry apps
test.describe.configure({ mode: 'serial' });

test.describe('MITRE Attack App E2E Tests', () => {
  let foundryHomePage: FoundryHomePage;
  let mitreChartPage: MitreChartPage; 
  let mitreRemediationPage: MitreRemediationPage;
  let sharedAppId: string; // Cache app ID across tests

  // Global setup for the entire test suite
  test.beforeAll(async () => {
    config.logSummary();
    
    if (!config.isCI) {
      logger.info('Starting MITRE Attack app E2E test suite');
      
      // Log test environment info (only in local dev)
      logger.info('Test Environment', {
        isCI: config.isCI,
        baseUrl: config.falconBaseUrl,
        appName: process.env.APP_NAME || 'foundry-sample-mitre'
      });
    }
  });

  // Setup fresh page objects for each test
  test.beforeEach(async ({ page }, testInfo) => {
    if (!config.isCI) {
      logger.info(`Starting test: ${testInfo.title}`);
    }
    
    foundryHomePage = new FoundryHomePage(page);
    mitreChartPage = new MitreChartPage(page);
    mitreRemediationPage = new MitreRemediationPage(page);
    
    // Set test-specific page context if needed
    await page.setExtraHTTPHeaders({
      'X-Test-Name': testInfo.title.replace(/\s+/g, '-').toLowerCase()
    });
  });

  // Clean up after each test
  test.afterEach(async ({ page }, testInfo) => {
    // Take screenshot on failure for debugging
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = `test-failure-${testInfo.title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
      await page.screenshot({ 
        path: `test-results/${screenshotPath}`, 
        fullPage: true 
      });
      logger.error(`Test failed: ${testInfo.title}`, undefined, { 
        screenshot: screenshotPath,
        duration: testInfo.duration
      });
    } else {
      logger.success(`Test passed: ${testInfo.title}`, { duration: testInfo.duration });
    }
    
    // Clear any lingering modals or dialogs using page object method
    await mitreChartPage.cleanupModals();
  });

  test.describe('App Installation and Basic Navigation', () => {
    test('should install and verify MITRE app in Foundry', async () => {
      test.info().annotations.push({
        type: 'prerequisite',
        description: 'Requires app to be deployed via Foundry CLI in CI or manually locally'
      });
      
      if (!config.isCI) {
        logger.warn('Running in local environment - app should be manually deployed first');
        logger.info('To deploy locally: foundry apps deploy --change-type=major');
      }

      await foundryHomePage.goto();
      await foundryHomePage.verifyLoaded();
      // Install app and cache the successful installation
      await mitreChartPage.navigateToMitreChart();
    });

    test('should navigate to MITRE chart and verify matrix elements', async () => {
      test.info().annotations.push({
        type: 'feature',
        description: 'Tests core app navigation and page loading'
      });
      
      // App is already installed from previous test, navigate directly
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.verifyMitreMatrixElements();
      await mitreChartPage.verifyDetectionData();
    });
  });

  test.describe('App Functionality', () => {

    test('should interact with MITRE techniques', async () => {
      test.info().annotations.push({
        type: 'interaction',
        description: 'Tests app interaction capabilities'
      });
      
      // App is already installed, navigate directly to it
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.clickMitreTechnique();
      
      // Verify interaction response using page object method
      await mitreChartPage.verifyInteractionResponse();
    });
  });

  test.describe('App Configuration', () => {
    test('should access MITRE wizard configuration', async () => {
      test.info().annotations.push({
        type: 'configuration',
        description: 'Tests app configuration pages accessibility'
      });
      // App is already installed, navigate directly to it
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.navigateToWizard();
      
      // Verify wizard form elements are present using page object method
      await mitreChartPage.verifyWizardForm();
    });
  });

  test.describe('UI Verification', () => {
    test('should verify MITRE app UI components render correctly', async ({ page }) => {
      test.info().annotations.push({
        type: 'ui',
        description: 'Tests UI rendering and visual elements'
      });
      
      // App is already installed, navigate directly to it
      await mitreChartPage.navigateToInstalledApp();
      
      // Take screenshot for visual verification
      await mitreChartPage.takeScreenshot('mitre-chart-full-view.png', {
        test: 'ui-verification'
      });
      
      // Verify core UI elements are present and functional
      await mitreChartPage.verifyMitreMatrixElements();
      
      // Verify loading is complete using expect
      await expect(
        page.locator('.loading, .spinner, [data-testid="loading"], [aria-label*="loading"]')
      ).toHaveCount(0, { timeout: 5000 });
    });
  });

  // Global cleanup for the entire test suite
  test.afterAll(async () => {
    if (!config.isCI) {
      logger.info('MITRE Attack app E2E test suite completed');
      
      // Log final test suite summary
      logger.info('Test suite completed successfully', {
        timestamp: new Date().toISOString()
      });
    }
  });
});
