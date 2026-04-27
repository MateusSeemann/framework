import { Then, And } from '@badeball/cypress-cucumber-preprocessor';
import { CadastroPage } from '../pages/CadastroPage';

Then('Devo clicar no formulário', () => {
    const cadastroPage = new CadastroPage();
    cadastroPage.clickInForms();
});