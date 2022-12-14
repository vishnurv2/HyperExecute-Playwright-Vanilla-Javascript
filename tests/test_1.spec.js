const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines 1', () => {
  test('Search LambdaTest on Bing', async ({ page }, testInfo) => {

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
    await page.click('text=Get Started');
    await expect(page.locator('text=Installation').first()).toBeVisible();
    await page.click('text=Trace Viewer');
    await page.click('text=Test Generator');
    await page.click('text=Release notes');
    await page.click('text=Annotations');
    await page.click('text=API testing');
    await page.click('text=Authentication');
    await page.click('text=Command line');
    await page.click('text=Configuration');
    await page.click('text=Page Object Model');
    await page.click('text=Parallelism and sharding');
    await page.click('text=Parametrize tests');
    await page.click('text=Reporters');
    await page.click('text=Test retry');
    await page.click('text=Timeouts');
    await page.click('text=Visual comparisons');
    await page.click('text=Advanced: configuration');
    await page.click('text=Advanced: fixtures');
    await page.click('text=TypeScript');
    await page.click('text=Experimental: components');
    await page.click('text=Library');
    await page.click('text=Auto-waiting');
    await page.click('text=Authentication');
    await page.click('text=Browsers');
    await page.click('text=Chrome Extensions');
    await page.click('text=Command line tools');
    await page.click('text=Dialogs');
    await page.click('text=Downloads');
    await page.click('text=Emulation');
    await page.click('text=Evaluating JavaScript');
    await page.click('text=Events');
    await page.click('text=Extensibility');
    await page.click('text=Frames');
    await page.click('text=Handles');
    await page.click('text=Locators');
    await page.click('text=Navigations');
    await page.click('text=Network');
    await page.click('text=Pages');
    await page.click('text=Page Object Models');
    await page.click('text=Screenshots');
    await page.click('text=Selectors');
    await page.click('text=Videos');
    await page.click('text=Migration');
    await page.click('text=Migrating from Protractor');
    await page.click('text=Integrations');
    await page.click('text=Docker');
    await page.click('text=Continuous Integration');
    await page.click('text=Third party runners');
    await page.click('text=Selenium Grid');
    await page.click('text=Supported languages');
    await page.goto('https://playwright.dev/docs/intro');
    await page.click('text=Trace Viewer');
    await page.click('text=Test Generator');
    await page.click('text=Release notes');
    await page.click('text=Annotations');
    await page.click('text=API testing');
    await page.click('text=Authentication');
    await page.click('text=Command line');
    await page.click('text=Configuration');
    await page.click('text=Page Object Model');
    await page.click('text=Parallelism and sharding');
    await page.click('text=Parametrize tests');
    await page.click('text=Reporters');
    await page.click('text=Test retry');
    await page.click('text=Timeouts');
    await page.click('text=Visual comparisons');
    await page.click('text=Advanced: configuration');
    await page.click('text=Advanced: fixtures');
    await page.click('text=TypeScript');
    const title = await page.title()

    console.log('Page title:: ', title)
    // Create new browserContext
    const newPage = await page._browserContext._browser.newPage(testInfo.project.use)
    await newPage.goto('https://www.duckduckgo.com')
    const searchElement = await newPage.$("[name=\"q\"]");
    await searchElement.click();
    await searchElement.type("LambdaTest");
    await searchElement.press("Enter");
    const title2 = await newPage.title()


    const newPage1 = await page._browserContext._browser.newPage(testInfo.project.use)
    await newPage1.goto('https://www.google.com')
    const searchElement1 = await newPage1.$("[name=\"q\"]");
    await searchElement1.click();
    await searchElement1.type("LambdaTest");
    await searchElement1.press("Enter");
    const title3 = await newPage1.title()


    console.log('Page title:: ', title, title2, title3)

    // Use the expect API for assertions provided by playwright
    // expect(title).toEqual(expect.stringContaining('LambdaTest'))
    // expect(title2).toEqual(expect.stringContaining('LambdaTest'))

  })
})
