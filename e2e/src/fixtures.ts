import { test as baseTest } from '@playwright/test';
import { MitreChartPage } from './pages/MitreChartPage';
import { MitreRemediationPage } from './pages/MitreRemediationPage';

type FoundryFixtures = {
  mitreChartPage: MitreChartPage;
  mitreRemediationPage: MitreRemediationPage;
};

export const test = baseTest.extend<FoundryFixtures>({
  mitreChartPage: async ({ page }, use) => {
    await use(new MitreChartPage(page));
  },
  mitreRemediationPage: async ({ page }, use) => {
    await use(new MitreRemediationPage(page));
  },
});

export { expect } from '@playwright/test';
