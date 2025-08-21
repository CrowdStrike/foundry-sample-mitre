import { test as setup } from '@playwright/test';
import { FoundryHomePage } from '../src/pages/FoundryHomePage';
import { MitreChartPage } from '../src/pages/MitreChartPage';

setup('install MITRE app', async ({ page }) => {
  const foundryHomePage = new FoundryHomePage(page);
  const mitreChartPage = new MitreChartPage(page);

  // Navigate to Foundry and install the app once for all tests
  await foundryHomePage.goto();
  await foundryHomePage.verifyLoaded();
  await mitreChartPage.navigateToMitreChart();
  
  // App is now installed and ready for all parallel tests
});