import { config } from "./config";

export const timeout = {
  default: 30 * 1000,
  action: 10 * 1000,
  expect: 15 * 1000,
};
export const homepageData = {
  url: `${config.baseURL}`,
  title: "Automation Exercise",
};
export const loginSignupData = {
  url: `${config.baseURL}/login`,
  title: "Automation Exercise - Signup / Login",
};
