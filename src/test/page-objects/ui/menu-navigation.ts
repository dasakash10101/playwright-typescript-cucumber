import { Page } from "playwright";
import PageObjectWrapper from "./page-object-wrapper";
import { expect } from "playwright/test";

export class MenuNav extends PageObjectWrapper {
  constructor(page: Page) {
    super(page, page.locator(".nav"));
  }

  async clickMenuItem(menuItem: string, landingPageTitle: string) {
    const menuItemLocator = this.rootLocator.getByRole("link", {
      name: menuItem,
    });
    await menuItemLocator.click();
    expect(await this.page.title()).toBe(landingPageTitle);
  }
}
