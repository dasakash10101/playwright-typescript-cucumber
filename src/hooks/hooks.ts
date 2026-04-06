import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  Status,
  BeforeStep,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  chromium,
  firefox,
  webkit,
} from "@playwright/test";
import { pageFixture } from "./pageFixture";
import config from "../helper/config";
import { timeout } from "../helper/testdata";

let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(timeout.default);

BeforeAll(async () => {
  if (config.browser === "chromium") {
    browser = await chromium.launch({ headless: config.headless });
  } else if (config.browser === "firefox") {
    browser = await firefox.launch({ headless: config.headless });
  } else if (config.browser === "webkit") {
    browser = await webkit.launch({ headless: config.headless });
  } else {
    throw new Error(`Unsupported browser: ${config.browser}`);
  }

  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

Before(async ({ pickle }) => {
  console.log(
    `================= Starting scenario: ${pickle.name} =====================`,
  );
});

BeforeStep(async ({ pickleStep }) => {
  console.log(`==> ${pickleStep.text}`);
});

After(async ({ pickle, result }) => {
  console.log("==> Screenshot and close page and context");
  // screenshot
  if (result?.status == Status.FAILED) {
    const screenshot = await pageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
  }
});

AfterAll(async () => {
  console.log("==> Close Browser");
  console.log("=============================================================");
  await pageFixture.page.close();
  await context.close();
  await browser.close();
});
