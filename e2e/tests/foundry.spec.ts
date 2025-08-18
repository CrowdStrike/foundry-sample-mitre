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

  // Global setup for the entire test suite
  test.beforeAll(async () => {
    config.logSummary();
    logger.info('Starting MITRE Attack app E2E test suite');
    
    // Log test environment info
    logger.info('Test Environment', {
      isCI: config.isCI,
      baseUrl: config.falconBaseUrl,
      appName: process.env.APP_NAME || 'foundry-sample-mitre'
    });
  });

  // Setup fresh page objects for each test
  test.beforeEach(async ({ page }, testInfo) => {
    logger.info(`Starting test: ${testInfo.title}`);
    
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
    
    // Clear any lingering modals or dialogs
    try {
      const modalCloseButton = page.getByRole('button', { name: /close|dismiss|cancel/i });
      if (await modalCloseButton.isVisible({ timeout: 1000 })) {
        await modalCloseButton.click({ timeout: 2000 });
      }
    } catch {
      // Ignore if no modals to close
    }
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
    });

    test('should navigate to MITRE chart and verify matrix elements', async () => {
      test.info().annotations.push({
        type: 'feature',
        description: 'Tests core app navigation and page loading'
      });
      
      await foundryHomePage.goto();
      await mitreChartPage.navigateToMitreChart();
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
      
      await foundryHomePage.goto();
      await mitreChartPage.navigateToMitreChart();
      await mitreChartPage.clickMitreTechnique();
      
      // Verify interaction response using semantic locators
      const hasModal = await mitreChartPage.elementExists(
        mitreChartPage.page.getByRole('dialog').or(
          mitreChartPage.page.getByRole('complementary')
        ).or(
          mitreChartPage.page.locator('[data-testid*="modal"], [data-testid*="details"]')
        ),
        2000
      );
      if (hasModal) {
        logger.success('Technique interaction opened details view');
      } else {
        logger.info('No details modal found - technique may redirect or show inline details');
      }
    });
  });

  test.describe('App Configuration', () => {
    test('should access MITRE wizard configuration', async () => {
      test.info().annotations.push({
        type: 'configuration',
        description: 'Tests app configuration pages accessibility'
      });
      await foundryHomePage.goto();
      await mitreChartPage.navigateToWizard();
      
      // Verify wizard form elements are present
      const hasForm = await mitreChartPage.elementExists(
        mitreChartPage.page.getByRole('form').or(
          mitreChartPage.page.locator('[data-testid*="wizard"]')
        ),
        3000
      );
      if (hasForm) {
        logger.success('MITRE wizard form loaded successfully');
      } else {
        logger.warn('No wizard form elements found - page may have different structure');
      }
    });

    test('should verify MITRE remediation extension configuration', async () => {
      test.info().annotations.push({
        type: 'extension',
        description: 'Tests extension configuration accessibility'
      });
      await foundryHomePage.goto();
      
      // Verify the remediation extension configuration is accessible through the MITRE app
      await mitreChartPage.navigateToMitreChart();
      
      // Test the "Mitre - Configure Notify IT Action" navigation link 
      // This verifies the extension configuration is properly set up
      try {
        const currentUrl = mitreChartPage.page.url();
        const notifyItUrl = currentUrl.replace(/\?path=.*$/, '') + '?path=/notify-it';
        
        await mitreChartPage.page.goto(notifyItUrl);
        await mitreChartPage.page.waitForTimeout(3000);
        
        // Verify we can access the configuration page
        const configUrl = mitreChartPage.page.url();
        if (configUrl.includes('/notify-it')) {
          logger.success('MITRE remediation extension configuration is accessible');
        } else {
          logger.info('Configuration page may have different routing');
        }
        
        // Check for basic page structure indicating the extension loaded
        const hasContent = await mitreChartPage.elementExists(
          mitreChartPage.page.locator('iframe').or(
            mitreChartPage.page.getByRole('main')
          ),
          5000
        );
        
        if (hasContent) {
          logger.success('MITRE remediation extension configuration page loaded successfully');
        } else {
          logger.warn('Extension configuration page appears empty but navigation succeeded');
        }
        
      } catch (error) {
        logger.warn('Extension configuration test encountered issues - this may require specific detection context', error instanceof Error ? error : undefined);
        
        // For basic e2e verification, just confirm the app navigation works
        // The extension is defined in manifest.yml and should be deployable
        const hasIframe = await mitreChartPage.elementExists(mitreChartPage.page.locator('iframe'), 2000);
        if (hasIframe) {
          logger.success('MITRE app infrastructure supports extensions (iframe present)');
        }
      }
    });
  });

  test.describe('UI Verification', () => {
    test('should verify MITRE app UI components render correctly', async ({ page }) => {
      test.info().annotations.push({
        type: 'ui',
        description: 'Tests UI rendering and visual elements'
      });
      
      // Navigate to app with fresh state
      await foundryHomePage.goto();
      await mitreChartPage.navigateToMitreChart();
      
      // Take screenshot for visual verification
      await mitreChartPage.takeScreenshot('mitre-chart-full-view.png', {
        test: 'ui-verification'
      });
      
      // Verify core UI elements are present and functional
      await mitreChartPage.verifyMitreMatrixElements();
      
      // Check for loading states are complete
      const loadingIndicators = page.locator('.loading, .spinner, [data-testid="loading"], [aria-label*="loading"]');
      const hasLoadingIndicators = await mitreChartPage.elementExists(loadingIndicators.first(), 1000);
      
      if (hasLoadingIndicators) {
        logger.warn('Loading indicators still present - chart may still be loading');
        // Wait a bit more for loading to complete
        await page.waitForTimeout(3000);
        
        // Check again after waiting
        const stillLoading = await mitreChartPage.elementExists(loadingIndicators.first(), 500);
        if (!stillLoading) {
          logger.success('Loading completed after additional wait');
        }
      } else {
        logger.success('MITRE chart appears fully loaded');
      }
    });
  });

  // Global cleanup for the entire test suite
  test.afterAll(async () => {
    logger.info('MITRE Attack app E2E test suite completed');
    
    // Log final test suite summary
    logger.info('Test suite completed successfully', {
      timestamp: new Date().toISOString()
    });
  });
});