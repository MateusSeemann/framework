const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({

  projectId: "framework",

  scrollBehavior: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 5000,

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  numTestsKeptInMemory: 0,
  watchForFileChanges: false,

  e2e: {
    specPattern: "cypress/features/**/*.feature",

    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});