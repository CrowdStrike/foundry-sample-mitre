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
  timeout: 60 * 1000, // 60 seconds for entire test
  expect: {
    timeout: 10 * 1000, // 10 seconds for assertions
  },
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test-selector',
    trace: 'on-first-retry',
    actionTimeout: 15 * 1000, // 15 seconds for actions
    navigationTimeout: 30 * 1000, // 30 seconds for navigation
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
