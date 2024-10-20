const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 120000,  // Global timeout for all tests
  use: {
    headless: false, // Set to true for headless execution
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  workers: 2, // Run tests in parallel using 2 workers
  retries: 1, // Retry failed tests once
});
