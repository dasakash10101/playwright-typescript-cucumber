import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { SignUpPage } from "../page-objects/ui/signup-page";

Given("I am on the login page", async function () {
  const loginPage = new SignUpPage(pageFixture.page);
  await loginPage.launch();
  await loginPage.verifyTitle();
  await loginPage.verifyUrl();
});
When("I enter valid credentials", async function () {
  const loginPage = new SignUpPage(pageFixture.page);
});
Then("I should be redirected to the dashboard", async function () {
  const loginPage = new SignUpPage(pageFixture.page);
});
