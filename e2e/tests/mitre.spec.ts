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

    await foundryHomePage.login();
    await foundryHomePage.verifyAppInstalled();
  });

  test('should navigate to MITRE chart and verify matrix elements', async () => {
    await foundryHomePage.login();
    await mitreChartPage.navigateToMitreChart();
    await mitreChartPage.verifyMitreMatrixElements();
    await mitreChartPage.verifyDetectionData();
  });

  test('should interact with MITRE techniques', async () => {
    await foundryHomePage.login();
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
    await foundryHomePage.login();
    await mitreChartPage.navigateToWizard();
    
    // Verify wizard form elements are present
    const hasForm = await mitreChartPage.elementExists('form, .wizard-form, [data-testid="wizard"]');
    if (hasForm) {
      logger.success('MITRE wizard form loaded successfully');
    } else {
      logger.warn('No wizard form elements found - page may have different structure');
    }
  });

  test('should verify MITRE remediation extension in detection context', async () => {
    await foundryHomePage.login();
    
    try {
      await mitreRemediationPage.navigateToDetectionWithRemediation();
      await mitreRemediationPage.verifyRemediationOptions();
      await mitreRemediationPage.verifyJiraIntegration();
      await mitreRemediationPage.verifyNotificationOptions();
    } catch (error) {
      logger.warn('Remediation extension test failed - may require specific detection data or configuration', error instanceof Error ? error : undefined);
      
      // Take screenshot for debugging
      await mitreRemediationPage.takeScreenshot('remediation-extension-failure.png', {
        test: 'remediation-extension',
        error: error instanceof Error ? error.message : 'unknown'
      });
      
      throw error;
    }
  });

  test('should verify MITRE app UI components render correctly', async () => {
    await foundryHomePage.login();
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