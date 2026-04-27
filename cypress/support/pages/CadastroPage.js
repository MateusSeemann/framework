
export class CadastroPage {
  // Seletores
  get inputNome() {
    return cy.get('input[type="text"][name="nome"], input[placeholder*="Nome"]');
  }
}