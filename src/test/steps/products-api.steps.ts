import { Given, Then, When } from "@cucumber/cucumber";
import { ProductsAPI } from "../page-objects/api/products-api";
import { productApiTestData } from "../../helper/api-testdata";

let apiResponse: any;

Given("The api endpoint is {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("I send a GET request", async function () {
  const productsAPI = new ProductsAPI(this.page);
  apiResponse = await productsAPI.getProducts();
});

When("I send a POST request", async function () {
  const productsAPI = new ProductsAPI(this.page);
  apiResponse = await productsAPI.postProducts(productApiTestData.postPayload);
});

Then(
  "The response status code should be {int}",
  async function (expectedStatus: number) {
    const productsAPI = new ProductsAPI(this.page);
    await productsAPI.ProductRequestStatus(apiResponse.status);
    await productsAPI.productResponseStatus(
      apiResponse.body.responseCode,
      expectedStatus,
    );
  },
);

Then("The response should contain a list of products", async function () {
  const productsAPI = new ProductsAPI(this.page);
  await productsAPI.validateProductSchema(apiResponse.body.products[0]);
});

Then("The response should contain a message", async function () {
  const productsAPI = new ProductsAPI(this.page);
  await productsAPI.productResponseMessage(
    apiResponse.body.message,
    productApiTestData.postMessage,
  );
});
