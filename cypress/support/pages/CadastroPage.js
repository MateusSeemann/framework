export class CadastroPage {

  validarCadastroVisivel() {
    cy.get('.logo > span')
      .should('be.visible')
      .validateObject('.logo > span');
  }

   clickInForms() {
    cy.get('a[title="Forms"]')
    .clickObject('a[title="Forms"]', 'click-in-forms');
  }

}