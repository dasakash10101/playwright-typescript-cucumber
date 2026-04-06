import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
  console.log("==> Launch Browser using Playwright and Chromium browser");
  browser = await chromium.launch({ headless: false });
});

Before(async () => {
  console.log("==> Creating new browser context and page");
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async ({ pickle, result }) => {
  console.log("==> Screenshot and close page and context");
  // screenshot
  if (result?.status == Status.FAILED) {
    await pageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
  }

  await pageFixture.page.close();
  await context.close();
});

AfterAll(async () => {
  console.log("==> Close Browser");
  await browser.close();
});
