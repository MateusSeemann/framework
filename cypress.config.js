const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: "framework",

  // Configurações gerais
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

  // Comportamento
  numTestsKeptInMemory: 0,
  watchForFileChanges: true,

  e2e: {
    specPattern: "cypress/features/**/*.feature",

    async setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on("after:run", async () => {
        console.log("Gerando relatório HTML...");
        try {
          const marge = require("mochawesome-report-generator");

          await marge.create("cypress/reports/*.json", {
            reportDir: "cypress/reports",
            overwrite: false,
            charts: true,
          });

          console.log("HTML gerado com sucesso!");
        } catch (error) {
          console.error("Erro ao gerar HTML:", error);
        }
      });

      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});