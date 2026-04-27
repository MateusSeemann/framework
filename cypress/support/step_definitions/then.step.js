/**
 * THEN - Validações Básicas
 * Arquivo base para você montar seus próprios passos
 */

import { Then } from '@badeball/cypress-cucumber-preprocessor';

// ============================================
// Exemplos de THEN - Texto
// ============================================

/**
 * Exemplo simples - ver texto
 * Feature: Então devo ver "Bem-vindo"
 */
Then('devo ver {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});

/**
 * Exemplo - não ver texto
 * Feature: Então não devo ver "Erro"
 */
Then('não devo ver {string}', (texto) => {
  cy.contains(texto).should('not.exist');
});

// ============================================
// Exemplos de THEN - Elementos
// ============================================

/**
 * Exemplo - ver elemento
 * Feature: Então devo ver o elemento ".success-message"
 */
Then('devo ver o elemento {string}', (seletor) => {
  cy.get(seletor).should('be.visible');
});

/**
 * Exemplo - elemento deve estar habilitado
 * Feature: Então o botão deve estar habilitado
 */
Then('o elemento {string} deve estar habilitado', (seletor) => {
  cy.get(seletor).should('not.be.disabled');
});

// ============================================
// ADICIONE SEUS PASSOS AQUI
// ============================================

// Exemplo de novo passo:
// Then('devo estar na página "{url}"', (url) => {
//   cy.url().should('include', url);
// });

// Then('o título da página deve ser "{titulo}"', (titulo) => {
//   cy.title().should('eq', titulo);
// });

// Then('devo ver um modal com "{titulo}"', (titulo) => {
//   cy.get('[role="dialog"]').should('contain', titulo);
// });