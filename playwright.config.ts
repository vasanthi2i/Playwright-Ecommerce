import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

export default defineConfig({
  testMatch: '/tests/Loginwithcredentails-TC1.test.ts',
  workers: process.env.CI ? 1 : undefined,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
    },
],
use:
{
headless: true,
screenshot: 'only-on-failure',
video: 'on',
deviceScaleFactor: 2,
    viewport: { width: 800, height: 800 } 
},
timeout: 3 * 60 * 1000,
//reporter: 'html'
reporter: [['html', { open: 'always' , outputFolder: 'Test-reports' }]],
});
