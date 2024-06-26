import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: "src/**/*.spec.{js,jsx,ts,tsx}",
    testIsolation: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
