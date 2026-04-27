/**
 * GIVEN - Pré-condições e Setup
 * Arquivo base para você montar seus próprios passos
 */

import { Given } from '@badeball/cypress-cucumber-preprocessor';

// ============================================
// Exemplos de GIVEN
// ============================================

/**
 * Exemplo simples
 * Feature: Dado que abro a aplicação
 */
Given('que abro a aplicação', () => {
  cy.visit('/');
});

/**
 * Exemplo com parâmetro string
 * Feature: Dado que estou na página "{página}"
 */
Given('que estou na página {string}', (pagina) => {
  const urls = {
    'login': '/login',
    'cadastro': '/cadastro',
    'dashboard': '/dashboard',
  };
  cy.visit(urls[pagina] || pagina);
});

// ============================================
// ADICIONE SEUS PASSOS AQUI
// ============================================

// Exemplo de novo passo:
// Given('que tenho um usuário cadastrado', () => {
//   cy.createUser({ name: 'João', email: 'joao@test.com' });
// });

// Given('que estou logado como {string}', (tipo) => {
//   if (tipo === 'admin') {
//     cy.login('admin@email.com', 'admin123');
//   } else {
//     cy.login('usuario@email.com', 'senha123');
//   }
// });

// Given('que a página tem {int} segundos de delay', (segundos) => {
//   cy.intercept('/', (req) => {
//     req.destroy();
//     setTimeout(() => req.continue(), segundos * 1000);
//   });
// });