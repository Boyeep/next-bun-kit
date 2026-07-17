import { expect, test } from '@playwright/test'

test.use({ viewport: { width: 375, height: 812 } })

test('home page exposes the starter foundation and theme control', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Next Bun Kit')
  await expect(page.locator('link[rel="icon"][href^="/icon.svg"]')).toHaveCount(1)
  await expect(page.locator('header img[src="/logo.svg"]')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1, name: 'Next-Bun Kit' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Github Repo' })).toHaveAttribute(
    'href',
    'https://github.com/Boyeep/next-bun-kit',
  )

  const getStartedLink = page.getByRole('link', { name: 'Get started' })
  await getStartedLink.click()
  await expect(page).toHaveURL(/#getting-started$/)
  await expect(page.locator('#getting-started')).toBeInViewport()

  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect(page.locator('html')).toHaveClass(/dark/)

  const undersizedTouchTargets = await page
    .locator('[data-slot="button"]')
    .evaluateAll((elements) => {
      const visibleElements = elements.filter((element) => element.getClientRects().length > 0)

      return visibleElements
        .map((element) => {
          const { height, width } = element.getBoundingClientRect()

          return {
            label:
              element.getAttribute('aria-label') ?? element.textContent?.trim() ?? element.tagName,
            height,
            width,
          }
        })
        .filter(({ height, width }) => height < 44 || width < 44)
    })
  expect(undersizedTouchTargets).toEqual([])

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )
  expect(hasHorizontalOverflow).toBe(false)
})
