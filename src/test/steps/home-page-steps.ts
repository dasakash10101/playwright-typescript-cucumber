import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { HomePage } from "../page-objects/home-page";

Given("I am on the home page", async function () {
  const homepage = new HomePage(pageFixture.page);
  await homepage.launch();
});

Then("I should see the home page title", async function () {
  const homepage = new HomePage(pageFixture.page);
  await homepage.verifyTitle();
});

Then("I should see the home page URL", async function () {
  const homepage = new HomePage(pageFixture.page);
  await homepage.verifyUrl();
});
