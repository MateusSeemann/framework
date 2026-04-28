import { When } from '@badeball/cypress-cucumber-preprocessor';
import { CadastroPage } from '../pages/CadastroPage';

When('Devo ver', () => {
  const cadastroPage = new CadastroPage();
  cadastroPage.validarCadastroVisivel();
});

When('pesquiso pelo {string}', (celular) => {
  const pageCadastro = new CadastroPage();
  pageCadastro.writeText(celular);
});