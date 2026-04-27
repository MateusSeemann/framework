import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Hook executado ANTES de cada cenário
 */
Before(function() {
  cy.log('Iniciando novo cenário');
  
  // Limpar localStorage e sessionStorage
  cy.window().then((window) => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });
  
  // Opcionalmente fazer login automaticamente
  // cy.login('usuario@email.com', 'senha123');
});

/**
 * Hook executado DEPOIS de cada cenário
 */
After(function() {
  cy.log('Cenário finalizado');
  
  // Tirar screenshot em caso de falha
  if (this.currentTest?.state === 'failed') {
    cy.screenshot(`screenshots/failed/${this.currentTest.title}`);
  }
});

/**
 * Hook antes de cenários com tag específica
 */
Before({ tags: '@smoke' }, function() {
  cy.log('Executando teste SMOKE');
});

/**
 * Hook antes de cenários com tag específica
 */
Before({ tags: '@slow' }, { timeout: 60000 }, function() {
  cy.log('Teste LENTO - Timeout aumentado para 60s');
});