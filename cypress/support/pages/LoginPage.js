/**
 * Page Object - Login Page
 * Encapsula todos os elementos e ações da página de login
 */
export class LoginPage {
  // Seletores
  get inputEmail() {
    return cy.get('input[type="email"], input[name="email"]');
  }

  get inputSenha() {
    return cy.get('input[type="password"], input[name="senha"]');
  }

  get btnEntrar() {
    return cy.contains('button', 'Entrar');
  }

  get mensagemSucesso() {
    return cy.get('.alert-success, .success-message, .toast-success');
  }

  get mensagemErro() {
    return cy.get('.alert-danger, .error-message, .toast-error, .form-error');
  }

  get linkCadastro() {
    return cy.contains('a', 'Cadastro');
  }

  // Ações
  visit() {
    cy.visit('/login');
  }

  preencherEmail(email) {
    this.inputEmail.clear().type(email);
  }

  preencherSenha(senha) {
    this.inputSenha.clear().type(senha);
  }

  clicarBotao(nomeBotao) {
    cy.contains('button', nomeBotao).click();
  }

  validarMensagem(mensagem) {
    this.mensagemSucesso.should('contain', mensagem);
  }

  validarMensagemErro(mensagem) {
    this.mensagemErro.should('contain', mensagem);
  }

  clicarCadastro() {
    this.linkCadastro.click();
  }
}