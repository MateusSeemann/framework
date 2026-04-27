import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('acesso a pagina {string}', (pagina) => {
  cy.visitApp(pagina);
  cy.log('Aplicação aberta com sucesso');
});
