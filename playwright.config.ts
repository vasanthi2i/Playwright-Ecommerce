import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
],
use:
{
headless: true
},
timeout: 10 * 60 * 1000,
reporter: 'html'
});
