import { type Page } from "playwright";
import { homepageData } from "../../helper/testdata";
import { expect } from "playwright/test";
import PageObjectWrapper from "./page-object-wrapper";

export class HomePage extends PageObjectWrapper {
  constructor(page: Page) {
    super(page, page.locator(".nav"));
  }

  async launch() {
    await this.launchURL(homepageData.url);
  }
  async verifyTitle() {
    const pageTitle = await this.page.title();
    expect(pageTitle).toBe(homepageData.title);
  }
  async verifyUrl() {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(homepageData.url);
  }
  async verifyMenuItem(menuItem: string) {
    const menuItemLocator = this.rootLocator.getByRole("link", {
      name: menuItem,
    });
    await expect(menuItemLocator).toBeVisible();
    expect(await menuItemLocator.getAttribute("href")).toContain(
      menuItem.toLowerCase(),
    );
  }
}
