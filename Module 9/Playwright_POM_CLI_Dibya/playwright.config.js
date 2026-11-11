// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Folder where Playwright looks for test files
  testDir: './tests',

  // Maximum time (in ms) a single test may run before it fails
  timeout: 30 * 1000,

  // Settings for the expect() assertions
  expect: {
    // Maximum time (in ms) an assertion waits for its condition to be true
    timeout: 5000,
  },

  // Number of times to retry a failed test (traces are captured on these retries)
  retries: 1,

  // Reporter used to print results in the terminal (one line per test)
  reporter: 'list',

  // Shared settings applied to all tests
  use: {
    // Run the browser without a visible window
    headless: true,

    // Take a screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Record a trace only when a failed test is retried
    trace: 'on-first-retry',
  },

  // Browsers to run the tests in
  projects: [
    {
      // Name shown in the test report
      name: 'chromium',

      // Use the built-in Chromium desktop browser settings
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});