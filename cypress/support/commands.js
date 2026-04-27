export const highlight = ($el) => {
  $el[0].style.outline = '3px solid red';
  $el[0].style.boxShadow = '0 0 10px red';
  $el[0].style.background = 'rgba(255, 0, 0, 0.1)';
};

Cypress.Commands.add('clickObject', (selector, name) => {

  const screenshotName =
    name || `${Cypress.currentTest.title}-validate`;

  cy.get(selector)
    .should('be.visible')
    .then(($el) => {
      highlight($el);
      cy.wrap($el).click();
    });

  cy.screenshot(screenshotName, { capture: 'viewport' });
});

Cypress.Commands.add('validateObject', (selector, name) => {

  const screenshotName =
    name || `${Cypress.currentTest.title}-validate`;

  cy.get(selector)
    .should('be.visible')
    .then(($el) => {
      highlight($el);
    });

  cy.screenshot(screenshotName, { capture: 'viewport' });
});

Cypress.Commands.add('visitApp', (url, name) => {

  cy.visit(url);

  cy.get('body').should('be.visible');

  const screenshotName =
    name || `${Cypress.currentTest.title}-visit`;

  cy.screenshot(screenshotName, { capture: 'viewport' });
});