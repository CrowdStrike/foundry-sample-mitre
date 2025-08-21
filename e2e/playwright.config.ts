import { defineConfig, devices } from '@playwright/test';
import { AuthFile } from './constants/AuthFile';

if (!process.env.CI) {
  require("dotenv").config({ path: ".env" });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0, // Reduced retries for faster feedback
  workers: process.env.CI ? 2 : 4, // Allow more parallelism in CI for speed
  timeout: process.env.CI ? 60 * 1000 : 45 * 1000, // Reduced timeouts for faster execution
  expect: {
    timeout: process.env.CI ? 10 * 1000 : 8 * 1000, // Shorter expectation timeouts
  },
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test-selector',
    trace: 'on-first-retry',
    actionTimeout: process.env.CI ? 15 * 1000 : 10 * 1000, // Faster action timeouts
    navigationTimeout: process.env.CI ? 30 * 1000 : 20 * 1000, // Faster navigation
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
