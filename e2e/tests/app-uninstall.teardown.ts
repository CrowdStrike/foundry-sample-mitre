import { test as teardown } from '@playwright/test';
import { AppCatalogPage } from '../src/pages/AppCatalogPage';

teardown('uninstall MITRE app', async ({ page }) => {
  const appCatalogPage = new AppCatalogPage(page);
  const appName = process.env.APP_NAME || 'foundry-sample-mitre';

  // Clean up by uninstalling the app after all tests complete
  await appCatalogPage.navigateToPath('/foundry/app-catalog', 'App Catalog');
  await appCatalogPage.uninstallApp(appName);
});