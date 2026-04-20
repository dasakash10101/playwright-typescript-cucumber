import { Given, Then, When } from "@cucumber/cucumber";
import { ProductsAPI } from "../page-objects/api/products-api";
import { expect } from "playwright/test";
import Ajv from "ajv";
import { productSchema } from "../../helper/schemas/product-api-json-schema";

let apiResponse: any;

Given("The api endpoint is {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("I send a GET request", async function () {
  const productsAPI = new ProductsAPI(this.page);
  apiResponse = await productsAPI.getProducts();
});

Then(
  "The response status code should be {int}",
  async function (expectedStatus: number) {
    const productsAPI = new ProductsAPI(this.page);
    await productsAPI.productResponseStatus(apiResponse.status, expectedStatus);
  },
);

Then("The response should contain a list of products", async function () {
  const productsAPI = new ProductsAPI(this.page);
  await productsAPI.validateProductSchema(apiResponse.body.products[0]);
});
