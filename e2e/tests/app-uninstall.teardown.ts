import { test as teardown } from '@playwright/test';
import { MitreChartPage } from '../src/pages/MitreChartPage';

teardown('uninstall MITRE app', async ({ page }) => {
  const mitreChartPage = new MitreChartPage(page);
  
  // Clean up by uninstalling the app after all tests complete
  await mitreChartPage.uninstallApp();
});