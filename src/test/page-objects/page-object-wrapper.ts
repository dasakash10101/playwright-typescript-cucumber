import { Locator, Page } from "playwright";

export default abstract class PageObjectWrapper {
  readonly page: Page;
  readonly rootLocator: Locator;

  constructor(page: Page, rootLocator: Locator) {
    this.page = page;
    this.rootLocator = rootLocator;
  }

  async launchURL(url: string) {
    await this.page.goto(url, { waitUntil: "load" });
  }
}
