import { type Page } from "playwright";
import { expect, Locator } from "playwright/test";
import PageObjectWrapper from "./page-object-wrapper";
import { homepageData } from "../../../helper/testdata";

export class HomePage extends PageObjectWrapper {
  readonly logoutLink: Locator;
  readonly deleteProfileLink: Locator;

  constructor(page: Page) {
    super(page, page.locator(".nav"));
    this.logoutLink = this.rootLocator.getByRole("link", { name: "Logout" });
    this.deleteProfileLink = this.rootLocator.getByRole("link", {
      name: "Delete Account",
    });
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
  async verifyLoggedInStatus() {
    await expect(this.logoutLink).toBeVisible();
    await expect(this.deleteProfileLink).toBeVisible();
  }
}
