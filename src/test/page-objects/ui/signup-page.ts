import { Page } from "playwright";
import PageObjectWrapper from "./page-object-wrapper";
import { expect, Locator } from "playwright/test";
import { signupData } from "../../../helper/testdata";

export class SignUpPage extends PageObjectWrapper {
  readonly nameTextBox: Locator;
  readonly emailTextBox: Locator;
  readonly signupButton: Locator;
  readonly titleRadioBtn_Mr: Locator;
  readonly titleRadioBtn_Mrs: Locator;
  readonly passwordTextBox: Locator;
  readonly dayDropdown: Locator;
  readonly monthDropdown: Locator;
  readonly yearDropdown: Locator;
  readonly newsletterCheckbox: Locator;
  readonly offersCheckbox: Locator;
  readonly firstNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly companyTextBox: Locator;
  readonly address1TextBox: Locator;
  readonly address2TextBox: Locator;
  readonly countryDropdown: Locator;
  readonly stateTextBox: Locator;
  readonly cityTextBox: Locator;
  readonly zipcodeTextBox: Locator;
  readonly mobileNumberTextBox: Locator;
  readonly createAccountButton: Locator;
  readonly successMessageLocator: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page, page.locator(".signup-form"));
    this.nameTextBox = this.rootLocator.getByPlaceholder("Name");
    this.emailTextBox = this.rootLocator.getByPlaceholder("Email Address");
    this.signupButton = this.rootLocator.getByRole("button", {
      name: "Signup",
    });
    this.titleRadioBtn_Mr = this.page.getByLabel("Mr.");
    this.titleRadioBtn_Mrs = this.page.getByLabel("Mrs.");
    this.passwordTextBox = this.page.getByLabel("Password *");
    this.dayDropdown = this.page.locator("#days");
    this.monthDropdown = this.page.locator("#months");
    this.yearDropdown = this.page.locator("#years");
    this.newsletterCheckbox = this.page.getByLabel(
      "Sign up for our newsletter!",
    );
    this.offersCheckbox = this.page.getByLabel(
      "Receive special offers from our partners!",
    );
    this.firstNameTextBox = this.page.getByLabel("First name *");
    this.lastNameTextBox = this.page.getByLabel("Last name *");
    this.companyTextBox = this.page.getByLabel("Company", { exact: true });
    this.address1TextBox = this.page.getByLabel("Address *");
    this.address2TextBox = this.page.getByLabel("Address 2");
    this.countryDropdown = this.page.locator("#country");
    this.stateTextBox = this.page.getByLabel("State *");
    this.cityTextBox = this.page.getByLabel("City *");
    this.zipcodeTextBox = this.page.locator("#zipcode");
    this.mobileNumberTextBox = this.page.getByLabel("Mobile Number *");
    this.createAccountButton = this.page.getByRole("button", {
      name: "Create Account",
    });
    this.successMessageLocator = this.page.getByText("Account Created!");
    this.continueButton = this.page.getByRole("link", { name: "Continue" });
  }

  async launch() {
    await this.launchURL(signupData.url);
  }

  async verifyTitle() {
    await this.page.waitForLoadState("load");
    expect(await this.page.title()).toBe(signupData.title);
  }

  async verifyUrl() {
    await this.page.waitForLoadState("load");
    expect(this.page.url()).toBe(signupData.url);
  }

  async enterCredentials(name: string, email: string) {
    await this.nameTextBox.fill(name);
    await this.emailTextBox.fill(email);
    await this.signupButton.click();
  }

  async fillFormAndSubmit() {
    if (signupData.titleChecker === "Mr") {
      await this.titleRadioBtn_Mr.check();
    } else if (signupData.titleChecker === "Mrs") {
      await this.titleRadioBtn_Mrs.check();
    }
    await this.passwordTextBox.fill(signupData.password);
    await this.dayDropdown.selectOption(signupData.day);
    await this.monthDropdown.selectOption(signupData.month);
    await this.yearDropdown.selectOption(signupData.year);
    if (signupData.newsletter) {
      await this.newsletterCheckbox.check();
    }
    if (signupData.offers) {
      await this.offersCheckbox.check();
    }
    await this.firstNameTextBox.fill(signupData.firstName);
    await this.lastNameTextBox.fill(signupData.lastName);
    await this.companyTextBox.fill(signupData.company);
    await this.address1TextBox.fill(signupData.address1);
    await this.address2TextBox.fill(signupData.address2);
    await this.countryDropdown.selectOption(signupData.country);
    await this.stateTextBox.fill(signupData.state);
    await this.cityTextBox.fill(signupData.city);
    await this.zipcodeTextBox.fill(signupData.zipcode);
    await this.mobileNumberTextBox.fill(signupData.mobileNumber);
    await this.createAccountButton.click();
  }

  async verifyAccountCreationSuccess() {
    await expect(this.successMessageLocator).toBeVisible();
    await expect(this.page.getByText(signupData.successText[0])).toBeVisible();
    await expect(this.page.getByText(signupData.successText[1])).toBeVisible();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }
}
