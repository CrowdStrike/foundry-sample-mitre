import { defineConfig, devices } from '@playwright/test';
import { AuthFile } from './constants/AuthFile';

if (!process.env.CI) {
  require("dotenv").config({ path: ".env" });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test-selector',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /authenticate.setup.ts/,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: AuthFile
      },
      dependencies: ["setup"]
    },
  ],
});
