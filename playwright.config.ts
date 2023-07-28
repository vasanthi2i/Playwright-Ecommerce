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
headless: false
},
timeout: 3 * 60 * 1000,
//reporter: 'html'
reporter: [['html', { open: 'always' , outputFolder: 'Test-reports' }]]
});
