/**
 * WHEN - Ações Básicas
 * Arquivo base para você montar seus próprios passos
 */

import { When, And } from '@badeball/cypress-cucumber-preprocessor';

// ============================================
// Exemplos de WHEN - Cliques
// ============================================

/**
 * Exemplo simples de clique
 * Feature: Quando clico em "Enviar"
 */
When('clico em {string}', (texto) => {
  cy.contains('button', texto).click();
});

/**
 * Exemplo clique por seletor
 * Feature: Quando clico no elemento ".btn-primary"
 */
When('clico no elemento {string}', (seletor) => {
  cy.get(seletor).click();
});

// ============================================
// Exemplos de WHEN - Preenchimento
// ============================================

/**
 * Exemplo de preencher campo
 * Feature: Quando digito "João" no campo "input[name='nome']"
 */
When('digito {string} no campo {string}', (texto, campo) => {
  cy.get(campo).clear().type(texto);
});

// ============================================
// ADICIONE SEUS PASSOS AQUI
// ============================================

// Exemplo de novo passo:
// When('faço login com "{email}" e "{senha}"', (email, senha) => {
//   cy.get('input[type="email"]').type(email);
//   cy.get('input[type="password"]').type(senha);
//   cy.contains('button', 'Entrar').click();
// });

// When('seleciono {string} no dropdown', (opcao) => {
//   cy.get('select').select(opcao);
// });

// When('marco o checkbox {string}', (label) => {
//   cy.contains('label', label).parent().find('input[type="checkbox"]').check();
// });