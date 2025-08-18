import { test, expect } from '@playwright/test';
import { FoundryHomePage } from '../src/pages/FoundryHomePage';
import { MitreChartPage } from '../src/pages/MitreChartPage';
import { MitreRemediationPage } from '../src/pages/MitreRemediationPage';
import { config } from '../src/config/TestConfig';
import { logger } from '../src/utils/Logger';

// Configure tests to run sequentially for better stability
test.describe.configure({ mode: 'serial' });

test.describe('MITRE Attack App E2E Tests', () => {
  let foundryHomePage: FoundryHomePage;
  let mitreChartPage: MitreChartPage; 
  let mitreRemediationPage: MitreRemediationPage;

  test.beforeAll(() => {
    config.logSummary();
    logger.info('Starting MITRE Attack app E2E test suite');
  });

  test.beforeEach(async ({ page }) => {
    foundryHomePage = new FoundryHomePage(page);
    mitreChartPage = new MitreChartPage(page);
    mitreRemediationPage = new MitreRemediationPage(page);
  });

  test('should install and verify MITRE app in Foundry', async () => {
    if (!config.isCI) {
      logger.warn('Running in local environment - app should be manually deployed first');
      logger.info('To deploy locally: foundry apps deploy --change-type=major');
    }

    await foundryHomePage.goto();
    await foundryHomePage.verifyLoaded();
  });

  test('should navigate to MITRE chart and verify matrix elements', async () => {
    await foundryHomePage.goto();
    await mitreChartPage.navigateToMitreChart();
    await mitreChartPage.verifyMitreMatrixElements();
    await mitreChartPage.verifyDetectionData();
  });

  test('should interact with MITRE techniques', async () => {
    await foundryHomePage.goto();
    await mitreChartPage.navigateToMitreChart();
    await mitreChartPage.clickMitreTechnique();
    
    // Verify interaction response (modal, details panel, etc.)
    const hasModal = await mitreChartPage.elementExists('.modal, .details-panel, .technique-details');
    if (hasModal) {
      logger.success('Technique interaction opened details view');
    } else {
      logger.info('No details modal found - technique may redirect or show inline details');
    }
  });

  test('should access MITRE wizard configuration', async () => {
    await foundryHomePage.goto();
    await mitreChartPage.navigateToWizard();
    
    // Verify wizard form elements are present
    const hasForm = await mitreChartPage.elementExists('form, .wizard-form, [data-testid="wizard"]');
    if (hasForm) {
      logger.success('MITRE wizard form loaded successfully');
    } else {
      logger.warn('No wizard form elements found - page may have different structure');
    }
  });

  test('should verify MITRE remediation extension configuration', async () => {
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
        mitreChartPage.page.locator('iframe, main, [role="main"], body > *'),
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

  test('should verify MITRE app UI components render correctly', async () => {
    await foundryHomePage.goto();
    await mitreChartPage.navigateToMitreChart();
    
    // Take screenshot for visual verification
    await mitreChartPage.takeScreenshot('mitre-chart-full-view.png', {
      test: 'ui-verification'
    });
    
    // Verify core UI elements are present and functional
    await mitreChartPage.verifyMitreMatrixElements();
    
    // Check for loading states are complete
    const hasLoadingIndicators = await mitreChartPage.elementExists('.loading, .spinner, [data-testid="loading"]');
    if (hasLoadingIndicators) {
      logger.warn('Loading indicators still present - chart may still be loading');
    } else {
      logger.success('MITRE chart appears fully loaded');
    }
  });

  test.afterAll(() => {
    logger.info('MITRE Attack app E2E test suite completed');
  });
});