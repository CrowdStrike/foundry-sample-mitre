import { test as baseTest } from '@playwright/test';
import {
  FoundryHomePage, AppManagerPage, AppCatalogPage, config,
} from '@crowdstrike/foundry-playwright';
import { MitreChartPage } from './pages/MitreChartPage';
import { MitreRemediationPage } from './pages/MitreRemediationPage';

type FoundryFixtures = {
  foundryHomePage: FoundryHomePage;
  appManagerPage: AppManagerPage;
  appCatalogPage: AppCatalogPage;
  mitreChartPage: MitreChartPage;
  mitreRemediationPage: MitreRemediationPage;
  appName: string;
};

export const test = baseTest.extend<FoundryFixtures>({
  foundryHomePage: async ({ page }, use) => { await use(new FoundryHomePage(page)); },
  appManagerPage: async ({ page }, use) => { await use(new AppManagerPage(page)); },
  appCatalogPage: async ({ page }, use) => { await use(new AppCatalogPage(page)); },
  mitreChartPage: async ({ page }, use) => { await use(new MitreChartPage(page)); },
  mitreRemediationPage: async ({ page }, use) => { await use(new MitreRemediationPage(page)); },
  appName: async ({}, use) => { await use(config.appName); },
});

export { expect } from '@playwright/test';
