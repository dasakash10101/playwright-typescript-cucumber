import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { loginData, signupData } from "../../helper/ui-testdata";
import { SignUpPage } from "../page-objects/ui/signup-page";
import { MenuNav } from "../page-objects/ui/menu-navigation";
import { HomePage } from "../page-objects/ui/home-page";

Given("I Navigate to the login-sign-up page", async function () {
  const menu = new MenuNav(pageFixture.page);
  await menu.clickMenuItem("Signup / Login", loginData.title);
});
When("I enter valid credentials in sign-up form and submit", async function () {
  const signupPage = new SignUpPage(pageFixture.page);
  await signupPage.enterCredentials(signupData.name, signupData.email);
});
Then("I should land on sign up page", async function () {
  const signupPage = new SignUpPage(pageFixture.page);
  await signupPage.verifyTitle();
  await signupPage.verifyUrl();
});
When("I fill out the sign up form and submit", async function () {
  const signupPage = new SignUpPage(pageFixture.page);
  await signupPage.fillFormAndSubmit();
});
Then("I should see the account creation success message", async function () {
  const signupPage = new SignUpPage(pageFixture.page);
  await signupPage.verifyAccountCreationSuccess();
});
When("I click on continue button", async function () {
  const signupPage = new SignUpPage(pageFixture.page);
  await signupPage.clickContinueButton();
});
Then("I should land on the home page as signed in user", async function () {
  const homePage = new HomePage(pageFixture.page);
  await homePage.verifyLoggedInStatus();
});
