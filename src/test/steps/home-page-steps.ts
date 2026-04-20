import { Given, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { HomePage } from "../page-objects/ui/home-page";

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

Then(
  "I should {string} see the home page URL",
  async function (action: string) {
    const homepage = new HomePage(pageFixture.page);
    await homepage.verifyUrl();
  },
);

Then("I should see the {string} menu item availabe", async function (string) {
  const homepage = new HomePage(pageFixture.page);
  // await homepage.verifyMenuItem(string);
});
