import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const config = {
  baseURL: process.env.BASE_URL || "https://automationexercise.com/",
  environment: process.env.ENVIRONMENT || "prod",
  headless: process.env.HEADLESS === "true",
};

export default config;
