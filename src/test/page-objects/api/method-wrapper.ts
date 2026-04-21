import { Page, request } from "playwright";
import { expect } from "playwright/test";

export default class MethodWrapper {
  readonly page: Page;
  readonly endpoint: string;

  constructor(page: Page, endpoint: string) {
    this.page = page;
    this.endpoint = endpoint;
  }

  async getRequest() {
    const response = await (await request.newContext()).get(this.endpoint);
    return response;
  }

  async postRequest(payload: object) {
    const response = await (
      await request.newContext()
    ).post(this.endpoint, {
      data: payload,
    });
    return response;
  }

  async validateRequestStatus(response: string) {
    expect(response).toBe(200);
  }

  async validateResponseStatus(response: string, expectedStatus: number) {
    expect(response).toBe(expectedStatus);
  }

  async validateResponseMessage(message: any, expectedData: any) {
    expect(message).toBe(expectedData);
  }
}
