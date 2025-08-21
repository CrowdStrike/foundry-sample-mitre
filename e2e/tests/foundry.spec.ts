import { test, expect } from '@playwright/test';
import { FoundryHomePage } from '../src/pages/FoundryHomePage';
import { MitreChartPage } from '../src/pages/MitreChartPage';
import { MitreRemediationPage } from '../src/pages/MitreRemediationPage';
import { config } from '../src/config/TestConfig';
import { logger } from '../src/utils/Logger';

// Use parallel mode for better performance - app state is stable after setup
test.describe.configure({ mode: 'parallel' });

test.describe('MITRE Attack App E2E Tests', () => {
  let foundryHomePage: FoundryHomePage;
  let mitreChartPage: MitreChartPage; 
  let mitreRemediationPage: MitreRemediationPage;

  // Lightweight setup - only create page objects
  test.beforeEach(async ({ page }, testInfo) => {
    foundryHomePage = new FoundryHomePage(page);
    mitreChartPage = new MitreChartPage(page);
    mitreRemediationPage = new MitreRemediationPage(page);
  });

  // Minimal cleanup - only screenshot on failure
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = `test-failure-${testInfo.title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
      await page.screenshot({ 
        path: `test-results/${screenshotPath}`, 
        fullPage: true 
      });
    }
    
    // Quick modal cleanup without complex state management
    await mitreChartPage.cleanupModals();
  });

  test.describe('App Installation and Basic Navigation', () => {
    test('should install and verify MITRE app in Foundry', async () => {
      await foundryHomePage.goto();
      await foundryHomePage.verifyLoaded();
      await mitreChartPage.navigateToMitreChart();
    });

    test('should navigate to MITRE chart and verify matrix elements', async () => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.verifyMitreMatrixElements();
      await mitreChartPage.verifyDetectionData();
    });
  });

  test.describe('App Functionality', () => {
    test('should interact with MITRE techniques', async () => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.clickMitreTechnique();
      await mitreChartPage.verifyInteractionResponse();
    });
  });

  test.describe('App Configuration', () => {
    test('should access MITRE wizard configuration', async () => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.navigateToWizard();
      await mitreChartPage.verifyWizardForm();
    });
  });

  test.describe('UI Verification', () => {
    test('should verify MITRE app UI components render correctly', async ({ page }) => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.takeScreenshot('mitre-chart-full-view.png', {
        test: 'ui-verification'
      });
      await mitreChartPage.verifyMitreMatrixElements();
      
      // Quick loading check
      await expect(
        page.locator('.loading, .spinner, [data-testid="loading"], [aria-label*="loading"]')
      ).toHaveCount(0, { timeout: 3000 });
    });
  });
});
