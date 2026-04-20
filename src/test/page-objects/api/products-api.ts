import { Page } from "playwright";
import MethodWrapper from "./method-wrapper";
import Ajv from "ajv";
import { productSchema } from "../../../helper/schemas/product-api-json-schema";
import { config } from "../../../helper/config";

export class ProductsAPI extends MethodWrapper {
  constructor(page: Page) {
    super(page, `${config.baseURL}api/productsList`);
  }

  async getProducts() {
    const response = await this.getRequest();
    const body = await response.json();
    return {
      status: response.status(),
      body: body,
    };
  }

  async productResponseStatus(response: string, expectedStatus: number) {
    await this.validateResponseStatus(response, expectedStatus);
  }

  async productResponseBodyLength(responseBody: any, expectedData: any) {
    await this.validateResponseBodyLength(responseBody, expectedData);
  }

  async validateProductSchema(responseBody: any) {
    const ajv = new Ajv({ allErrors: true });
    const schema = ajv.compile(productSchema);
    const valid = schema(responseBody);
    if (!valid) {
      // Formatting errors into a readable string
      const errors = schema.errors
        ?.map((err) => `${err.instancePath} ${err.message}`)
        .join(", ");
      throw new Error(`Schema validation failed: ${errors}`);
    }
  }
}
