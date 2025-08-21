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
  let initialAppState: 'installed' | 'not_installed' | 'unknown' = 'unknown';

  // Global setup for the entire test suite
  test.beforeAll(async ({ browser }) => {
    config.logSummary();
    
    if (!config.isCI) {
      logger.info('Starting MITRE Attack app E2E test suite');
      
      // Detect initial app state to restore it later
      try {
        const context = await browser.newContext();
        const detectionPage = await context.newPage();
        const detectionMitreChartPage = new MitreChartPage(detectionPage);
        
        // Perform login for detection page
        const foundryHomePage = new FoundryHomePage(detectionPage);
        await foundryHomePage.goto();
        
        // Detect current app installation state
        initialAppState = await detectionMitreChartPage.detectAppInstallationState();
        logger.info(`Initial app state detected: ${initialAppState}`);
        
        // Clean up the detection context
        await context.close();
      } catch (error) {
        logger.warn('Failed to detect initial app state:', error);
        initialAppState = 'unknown';
      }
      
      // Log test environment info (only in local dev)
      logger.info('Test Environment', {
        isCI: config.isCI,
        baseUrl: config.falconBaseUrl,
        appName: process.env.APP_NAME || 'foundry-sample-mitre',
        initialAppState
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
      
      await foundryHomePage.goto();
      await foundryHomePage.verifyLoaded();
      await mitreChartPage.navigateToMitreChart();
    });

    test('should navigate to MITRE chart and verify matrix elements', async () => {
      test.info().annotations.push({
        type: 'feature',
        description: 'Tests core app navigation and page loading'
      });
      
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
      
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.clickMitreTechnique();
      await mitreChartPage.verifyInteractionResponse();
    });
  });

  test.describe('App Configuration', () => {
    test('should access MITRE wizard configuration', async () => {
      test.info().annotations.push({
        type: 'configuration',
        description: 'Tests app configuration pages accessibility'
      });
      
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.navigateToWizard();
      await mitreChartPage.verifyWizardForm();
    });
  });

  test.describe('UI Verification', () => {
    test('should verify MITRE app UI components render correctly', async ({ page }) => {
      test.info().annotations.push({
        type: 'ui',
        description: 'Tests UI rendering and visual elements'
      });
      
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.takeScreenshot('mitre-chart-full-view.png', {
        test: 'ui-verification'
      });
      await mitreChartPage.verifyMitreMatrixElements();
      
      await expect(
        page.locator('.loading, .spinner, [data-testid="loading"], [aria-label*="loading"]')
      ).toHaveCount(0, { timeout: 5000 });
    });
  });

  // Global cleanup for the entire test suite
  test.afterAll(async ({ browser }) => {
    // Restore initial app state
    if (!config.isCI && browser && initialAppState !== 'unknown') {
      try {
        const context = await browser.newContext();
        const cleanupPage = await context.newPage();
        const cleanupMitreChartPage = new MitreChartPage(cleanupPage);
        
        // Perform login for cleanup page
        const foundryHomePage = new FoundryHomePage(cleanupPage);
        await foundryHomePage.goto();
        
        // Get current state and restore to initial state
        const currentState = await cleanupMitreChartPage.detectAppInstallationState();
        logger.info(`Current app state: ${currentState}, Initial app state: ${initialAppState}`);
        
        if (currentState !== initialAppState) {
          if (initialAppState === 'installed' && currentState === 'not_installed') {
            logger.info('Restoring app to installed state...');
            await cleanupMitreChartPage.ensureAppIsInstalled();
          } else if (initialAppState === 'not_installed' && currentState === 'installed') {
            logger.info('Restoring app to uninstalled state...');
            await cleanupMitreChartPage.uninstallApp();
          }
          logger.success(`Successfully restored app to initial state: ${initialAppState}`);
        } else {
          logger.info('App is already in the correct initial state');
        }
        
        // Clean up the context
        await context.close();
      } catch (error) {
        // Don't fail tests due to cleanup issues
        logger.warn('Failed to restore app state during cleanup:', error);
      }
    }
    
    if (!config.isCI) {
      logger.info('MITRE Attack app E2E test suite completed');
    }
  });
});
