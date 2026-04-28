export class CadastroPage {

  validarCadastroVisivel() {
    cy.get('.logo > span')
      .should('be.visible')
      .validateObject('.logo > span', 'agora-estou-na-pagina-de-cadastro');
  }

   clickInForms() {
    cy.get('a[title="Forms"]')
    .clickObject('a[title="Forms"]', 'click-in-forms');
  }

    writeText(celular) {
    cy.get('.nav-search-field')
      .waitObject(2000, 'Aguardando campo de pesquisa')
      .setText('.nav-search-field', celular, 'Escrevendo celular no campo de pesquisa')
      .clickObject('#sac-suggestion-row-1-cell-1 > .s-suggestion', 'Clicando na primeira opção de pesquisa');
  }

}