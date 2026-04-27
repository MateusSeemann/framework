const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor, isStep } = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  projectId: "framework",
  
  // Configurações gerais
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  
  // Comportamento
  numTestsKeptInMemory: 0,
  watchForFileChanges: true,
  
  // Reporter
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportDir: "cypress/reports",
    reportFilename: "report.html",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.feature"],
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
    
    async setupNodeEvents(on, config) {
      // Implementar listeners de eventos aqui
      require("cypress-mochawesome-reporter/plugin")(on);
      
      // Adicionar suporte a Cucumber
      await addCucumberPreprocessorPlugin(on, config);
      
      on(
        "file:preprocessor",
        preprocessor(config, {
          typescript: require("typescript"),
        })
      );
      
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
