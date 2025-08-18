import { test as baseTest } from '@playwright/test';
import { FoundryHomePage } from './pages/FoundryHomePage';
import { AppManagerPage } from './pages/AppManagerPage';
import { AppCatalogPage } from './pages/AppCatalogPage';
import { config } from './config/TestConfig';
import { logger } from './utils/Logger';

type FoundryFixtures = {
  foundryHomePage: FoundryHomePage;
  appManagerPage: AppManagerPage;
  appCatalogPage: AppCatalogPage;
  appName: string;
};

export const test = baseTest.extend<FoundryFixtures>({
  // Configure page with centralized settings
  page: async ({ page }, use) => {
    const timeouts = config.getPlaywrightTimeouts();
    page.setDefaultTimeout(timeouts.timeout);
    
    // Log configuration on first use
    if (!process.env.CONFIG_LOGGED) {
      config.logSummary();
      process.env.CONFIG_LOGGED = 'true';
    }
    
    await use(page);
  },

  // Page object fixtures with dependency injection
  foundryHomePage: async ({ page }, use) => {
    await use(new FoundryHomePage(page));
  },

  appManagerPage: async ({ page }, use) => {
    await use(new AppManagerPage(page));
  },

  appCatalogPage: async ({ page }, use) => {
    await use(new AppCatalogPage(page));
  },


  // App name from centralized config
  appName: async ({}, use) => {
    await use(config.appName);
  },
});

export { expect } from '@playwright/test';