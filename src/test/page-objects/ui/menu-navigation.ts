import { Page } from "playwright";
import PageObjectWrapper from "./page-object-wrapper";
import { expect } from "playwright/test";

export class MenuNav extends PageObjectWrapper {
  constructor(page: Page) {
    super(page, page.locator(".nav"));
  }

  async clickMenuItem(menuItem: string, landingPageTitle: string) {
    //locate
    const menuItemLocator = this.rootLocator.getByRole("link", {
      name: menuItem,
    });
    //act
    await menuItemLocator.click();
    //assert
    expect(await this.page.title()).toBe(landingPageTitle);
  }
}
