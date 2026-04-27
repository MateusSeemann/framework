// ***********************************************
// Métodos customizados de CLICK
/**
 * Click apenas se o elemento existir
 * @param {string} selector - Seletor CSS do elemento
 */
Cypress.Commands.add('clickIfExists', (selector) => {
  cy.get('body').then((body) => {
    if (body.find(selector).length > 0) {
      cy.get(selector).click();
    }
  });
});

/**
 * Click duplo (double click)
 * @param {string} selector - Seletor CSS do elemento
 */
Cypress.Commands.add('doubleClick', (selector) => {
  cy.get(selector).dblclick();
});

/**
 * Click com múltiplas tentativas
 * @param {string} selector - Seletor CSS do elemento
 * @param {number} attempts - Número de tentativas (padrão: 3)
 */
Cypress.Commands.add('clickWithRetry', (selector, attempts = 3) => {
  cy.get(selector).should('be.visible');
  cy.get(selector).click().then(() => {
    cy.log(`Clicked successfully on ${selector}`);
  }).catch(() => {
    if (attempts > 1) {
      cy.wait(1000);
      cy.clickWithRetry(selector, attempts - 1);
    } else {
      throw new Error(`Failed to click on ${selector} after ${attempts} attempts`);
    }
  });
});

/**
 * Click e aguarda carregamento da próxima página
 * @param {string} selector - Seletor CSS do elemento
 */
Cypress.Commands.add('clickAndWait', (selector) => {
  cy.get(selector).click();
  cy.url().should('not.be.empty');
});

// ***********************************************
// Métodos customizados GERAIS
// ***********************************************

/**
 * Preencher campo de texto
 * @param {string} selector - Seletor CSS do campo
 * @param {string} text - Texto a digitar
 * @param {boolean} clear - Limpar antes de digitar (padrão: true)
 */
Cypress.Commands.add('fillField', (selector, text, clear = true) => {
  const field = cy.get(selector);
  if (clear) field.clear();
  field.type(text);
});

/**
 * Validar que elemento contém texto
 * @param {string} selector - Seletor CSS do elemento
 * @param {string} text - Texto esperado
 */
Cypress.Commands.add('shouldContainText', (selector, text) => {
  cy.get(selector).should('contain', text);
});

/**
 * Aguardar elemento estar visível
 * @param {string} selector - Seletor CSS do elemento
 * @param {number} timeout - Timeout em ms (padrão: 5000)
 */
Cypress.Commands.add('waitForElement', (selector, timeout = 5000) => {
  cy.get(selector, { timeout }).should('be.visible');
});