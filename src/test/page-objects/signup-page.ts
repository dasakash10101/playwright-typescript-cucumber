import { Page } from "playwright";
import PageObjectWrapper from "./page-object-wrapper";
import { homepageData, loginSignupData } from "../../helper/testdata";
import { expect } from "playwright/test";

export class SignUpPage extends PageObjectWrapper {
  constructor(page: Page) {
    super(page, page.locator(".signup-form"));
  }

  async launch() {
    await this.launchURL(loginSignupData.url);
  }

  async verifyTitle() {
    expect(await this.page.title()).toBe(loginSignupData.title);
  }

  async verifyUrl() {
    expect(this.page.url()).toBe(loginSignupData.url);
  }
}
