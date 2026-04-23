import { test, expect } from '../src/fixtures';

test.describe.configure({ mode: 'parallel' });

test.describe('MITRE Attack App E2E Tests', () => {
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = `test-failure-${testInfo.title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
      await page.screenshot({
        path: `test-results/${screenshotPath}`,
        fullPage: true
      });
    }
  });

  test.describe('App Installation and Basic Navigation', () => {
    test('should verify MITRE app accessibility', async ({ mitreChartPage }) => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.verifyMitreMatrixElements();
    });

    test('should navigate to MITRE chart and verify matrix elements', async ({ mitreChartPage }) => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.verifyMitreMatrixElements();
      await mitreChartPage.verifyDetectionData();
    });
  });

  test.describe('App Functionality', () => {
    test('should interact with MITRE techniques', async ({ mitreChartPage }) => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.clickMitreTechnique();
      await mitreChartPage.verifyInteractionResponse();
    });
  });

  test.describe('App Configuration', () => {
    test('should access MITRE wizard configuration', async ({ mitreChartPage }) => {
      await mitreChartPage.navigateToInstalledApp();
      await mitreChartPage.navigateToWizard();
      await mitreChartPage.verifyWizardForm();
    });
  });

  test.describe('UI Verification', () => {
    test('should verify MITRE app UI components render correctly', async ({ page, mitreChartPage }) => {
      await mitreChartPage.navigateToInstalledApp();
      await page.screenshot({
        path: 'test-results/mitre-chart-full-view.png',
        fullPage: true
      });
      await mitreChartPage.verifyMitreMatrixElements();

      await expect(
        page.locator('.loading, .spinner, [data-testid="loading"], [aria-label*="loading"]')
      ).toHaveCount(0, { timeout: 3000 });
    });
  });
});
