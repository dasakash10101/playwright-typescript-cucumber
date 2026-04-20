import { debug } from "console";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const config = {
  baseURL: process.env.BASE_URL,
  environment: process.env.ENVIRONMENT || "prod",
  headless: process.env.HEADLESS === "true",
  browser: process.env.BROWSER || "chromium",
  debug: process.env.DEBUG === "true",
};

export default config;
