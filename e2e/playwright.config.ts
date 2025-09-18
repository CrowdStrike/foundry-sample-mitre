import { defineConfig, devices } from '@playwright/test';
import { AuthFile } from './constants/AuthFile';

if (!process.env.CI) {
  require("dotenv").config({ path: ".env", quiet: true });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0, 
  workers: process.env.CI ? 2 : 4,
  timeout: process.env.CI ? 60 * 1000 : 45 * 1000, 
  expect: {
    timeout: process.env.CI ? 10 * 1000 : 8 * 1000,
  },
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test-selector',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: process.env.CI ? 15 * 1000 : 10 * 1000,
    navigationTimeout: process.env.CI ? 30 * 1000 : 20 * 1000, 
  },

  projects: [
    {
      name: 'setup',
      testMatch: /authenticate.setup.ts/,
    },
    {
      name: 'app-install',
      testMatch: /app-install.setup.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: AuthFile
      },
      dependencies: ["setup"]
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: AuthFile
      },
      dependencies: ["setup", "app-install"]
    },
    {
      name: 'app-uninstall',
      testMatch: /app-uninstall.teardown.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: AuthFile
      },
      dependencies: ["chromium"]
    },
  ],
});
