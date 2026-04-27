/**
 * Page Object - Cadastro Page
 * Encapsula todos os elementos e ações da página de cadastro
 */
export class CadastroPage {
  // Seletores
  get inputNome() {
    return cy.get('input[type="text"][name="nome"], input[placeholder*="Nome"]');
  }

  get inputEmail() {
    return cy.get('input[type="email"], input[name="email"]');
  }

  get inputSenha() {
    return cy.get('input[type="password"][name="senha"]');
  }

  get inputConfirmarSenha() {
    return cy.get('input[type="password"][name="confirmar_senha"], input[placeholder*="Confirmar"]');
  }

  get checkboxTermos() {
    return cy.get('input[type="checkbox"]');
  }

  get btnCadastrar() {
    return cy.contains('button', 'Cadastrar');
  }

  get mensagemSucesso() {
    return cy.get('.alert-success, .success-message, .toast-success');
  }

  get mensagemErro() {
    return cy.get('.alert-danger, .error-message, .toast-error, .form-error');
  }

  // Ações
  visit() {
    cy.visit('/cadastro');
  }

  preencherNome(nome) {
    this.inputNome.clear().type(nome);
  }

  preencherEmail(email) {
    this.inputEmail.clear().type(email);
  }

  preencherSenha(senha) {
    this.inputSenha.clear().type(senha);
  }

  confirmarSenha(senha) {
    this.inputConfirmarSenha.clear().type(senha);
  }

  aceitarTermos() {
    this.checkboxTermos.check();
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
}