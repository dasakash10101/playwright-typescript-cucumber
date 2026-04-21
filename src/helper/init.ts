const fs = require("fs-extra");
const path = require("path");

try {
  const testResultsPath = path.join(__dirname, "../../test-results");

  // Remove the entire test-results directory
  if (fs.existsSync(testResultsPath)) {
    fs.removeSync(testResultsPath);
  }

  // Create fresh directories
  fs.ensureDir(testResultsPath);
  fs.ensureDir(path.join(testResultsPath, "screenshots"));

  console.log("✓ Test results directory cleaned and initialized");
} catch (error) {
  console.error("Error cleaning test-results folder:", error);
}
