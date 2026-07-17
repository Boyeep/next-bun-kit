import { defineConfig, devices } from '@playwright/test'

const host = '127.0.0.1'
const port = 3100
const baseURL = `http://${host}:${port}`
const startCommand = 'bun run start'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: process.env.CI ? startCommand : `bun run build && ${startCommand}`,
    env: {
      HOSTNAME: host,
      PORT: String(port),
    },
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
