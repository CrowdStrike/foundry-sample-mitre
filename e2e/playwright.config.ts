import { defineConfig, devices } from '@playwright/test';
import { AuthFile } from './constants/AuthFile';

if (!process.env.CI) {
  require("dotenv").config({ path: ".env", quiet: true });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, // More retries in CI for flaky environments
  workers: process.env.CI ? 1 : undefined,
  timeout: process.env.CI ? 90 * 1000 : 60 * 1000, // Longer timeout in CI
  expect: {
    timeout: process.env.CI ? 15 * 1000 : 10 * 1000, // Longer expectation timeout in CI
  },
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test-selector',
    trace: 'on-first-retry',
    actionTimeout: process.env.CI ? 20 * 1000 : 15 * 1000, // Longer action timeout in CI
    navigationTimeout: process.env.CI ? 45 * 1000 : 30 * 1000, // Longer navigation timeout in CI
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
