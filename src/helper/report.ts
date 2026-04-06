const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results",
  reportName: "Playwright Automation Report",
  pageTitle: "Ecomm App test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Akash - PC",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Ecomm App" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});
