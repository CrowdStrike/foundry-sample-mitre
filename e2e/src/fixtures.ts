import { test as baseTest } from '@playwright/test';
import { MitreChartPage } from './pages/MitreChartPage';

type FoundryFixtures = {
  mitreChartPage: MitreChartPage;
};

export const test = baseTest.extend<FoundryFixtures>({
  mitreChartPage: async ({ page }, use) => {
    await use(new MitreChartPage(page));
  },
});

export { expect } from '@playwright/test';
