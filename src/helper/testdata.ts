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
export const loginData = {
  url: `${config.baseURL}/login`,
  title: "Automation Exercise - Signup / Login",
};
export const signupData = {
  url: `${config.baseURL}/signup`,
  title: "Automation Exercise - Signup",
  name: "Test User",
  email: `testuser${Date.now()}@yopmail.com`,
  titleChecker: "Mr",
  password: "Test@1234",
  day: "10",
  month: "May",
  year: "1990",
  newsletter: true,
  offers: false,
  firstName: "Test",
  lastName: "User",
  company: "Test Company",
  address1: "123 Test Street",
  address2: "Test Area",
  country: "United States",
  state: "Test State",
  city: "Test City",
  zipcode: "12345",
  mobileNumber: "1234567890",
  successText: [
    "Congratulations! Your new account has been successfully created!",
    "You can now take advantage of member privileges to enhance your online shopping experience with us.",
  ],
};
