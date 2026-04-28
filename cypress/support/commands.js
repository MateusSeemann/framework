export const highlight = ($el) => {
  $el[0].style.outline = '3px solid red';
  $el[0].style.boxShadow = '0 0 10px red';
  $el[0].style.background = 'rgba(255, 0, 0, 0.1)';
};

let screenshotCounter = 1;

beforeEach(() => {
  screenshotCounter = 1;
});

const getScreenshotName = (name, action) => {
  return `${String(screenshotCounter++).padStart(2, '0')}-${
    name || `${Cypress.currentTest.title}-${action}`
  }`;
};

Cypress.Commands.add('clickObject', (selector, name) => {

  const screenshotName = getScreenshotName(name, 'click');

  const element = typeof selector === 'string' ? cy.get(selector) : selector;

  element
    .should('be.visible')
    .then(($el) => {
      highlight($el);
    });

  cy.wait(2000);

  element.click();

  cy.screenshot(screenshotName, { capture: 'runner' });
});

Cypress.Commands.add('validateObject', (selector, name) => {

  const screenshotName = getScreenshotName(name, 'validate');

  cy.get(selector)
    .should('be.visible')
    .then(($el) => {
      highlight($el);
    });

  cy.screenshot(screenshotName, { capture: 'runner' });
});

Cypress.Commands.add('visitApp', (url, name) => {

  cy.visit(url);

  cy.get('body').should('be.visible');

  const screenshotName = getScreenshotName(name, 'visit');

  cy.screenshot(screenshotName, { capture: 'runner' });
});

Cypress.Commands.add('setText', (selector, text, name) => {

  const screenshotName = getScreenshotName(name, 'type');

  cy.get(selector)
    .should('be.visible')
    .then(($el) => {
      highlight($el);
    });

    cy.get(selector)
    .type(text, { scrollBehavior: false });

  cy.screenshot(screenshotName, { capture: 'runner' });
});

Cypress.Commands.add('waitObject', (time, name) => {

  const screenshotName = getScreenshotName(name, 'wait');

  cy.wait(time);

  cy.screenshot(screenshotName, { capture: 'runner' });
});