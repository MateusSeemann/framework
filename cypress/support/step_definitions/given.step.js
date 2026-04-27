import { Given } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Passo: Dado que abro a aplicação
 * Feature: Dado que abro a aplicação
 */
Given('acesso a pagina {string}', (pagina) => {
  cy.visit(pagina);
  cy.log('Aplicação aberta com sucesso');
});
