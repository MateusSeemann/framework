import { When } from '@badeball/cypress-cucumber-preprocessor';
import { CadastroPage } from '../pages/CadastroPage';

When('Devo ver', () => {
  const cadastroPage = new CadastroPage();
  cadastroPage.validarCadastroVisivel();
});