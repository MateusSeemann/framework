# Referência de Comandos Customizados

## Métodos de CLICK

### `cy.clickBySelector(selector, options)`
Click em elemento por seletor CSS.
```javascript
cy.clickBySelector('button.btn-primary');
cy.clickBySelector('#submit-btn', { force: true });
```

### `cy.clickByText(text, selector)`
Click em elemento por texto exato.
```javascript
cy.clickByText('Enviar');
cy.clickByText('Delete', 'span.action-button');
```

### `cy.clickByTestId(testId)`
Click em elemento por data-testid (recomendado para testes).
```javascript
cy.clickByTestId('modal-close');
cy.clickByTestId('submit-form');
```

### `cy.clickForce(selector)`
Click com força (útil para elementos ocultos ou com obstáculos).
```javascript
cy.clickForce('button.hidden');
cy.clickForce('[aria-hidden="false"] button');
```

### `cy.clickIfExists(selector)`
Click apenas se elemento existir (não gera erro se não existir).
```javascript
cy.clickIfExists('button.optional');
cy.clickIfExists('.notification-close');
```

### `cy.doubleClick(selector)`
Duplo clique (double click).
```javascript
cy.doubleClick('input[type="text"]');
cy.doubleClick('.editable-cell');
```

### `cy.clickWithRetry(selector, attempts)`
Click com múltiplas tentativas (padrão: 3).
```javascript
cy.clickWithRetry('button.flaky');
cy.clickWithRetry('a.nav-link', 5); // 5 tentativas
```

### `cy.clickAndWait(selector)`
Click e aguarda mudança de URL/carregamento.
```javascript
cy.clickAndWait('a.next-page');
cy.clickAndWait('button[type="submit"]');
```

---

## Métodos GERAIS

### `cy.fillField(selector, text, clear)`
Preencher campo de texto.
```javascript
cy.fillField('input[name="email"]', 'user@email.com');
cy.fillField('textarea', 'Descrição...', true); // clear=true (padrão)
```

### `cy.shouldContainText(selector, text)`
Validar que elemento contém texto específico.
```javascript
cy.shouldContainText('h1', 'Bem-vindo');
cy.shouldContainText('.error', 'Campo obrigatório');
```

### `cy.waitForElement(selector, timeout)`
Aguardar elemento estar visível (timeout padrão: 5000ms).
```javascript
cy.waitForElement('form#contact');
cy.waitForElement('.modal', 10000); // 10 segundos
```

### `cy.login(email, password)`
Fazer login (exemplo personalizável).
```javascript
cy.login('admin@email.com', 'senha123');
```

---

## Configurações do Framework

**Arquivo**: `cypress.config.js`

- **baseUrl**: `http://localhost:3000` (alterar conforme necessário)
- **viewportWidth**: 1280px
- **viewportHeight**: 720px
- **defaultCommandTimeout**: 5 segundos
- **Reporter**: Mochawesome (HTML reports em `/cypress/reports`)

---

## Exemplo de Teste Completo

```javascript
describe('Testes de Exemplo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve fazer login e navegar', () => {
    // Fazer login
    cy.login('user@email.com', 'senha123');
    
    // Aguardar carregamento
    cy.waitForElement('.dashboard-title');
    
    // Validar título
    cy.shouldContainText('h1', 'Dashboard');
    
    // Clicar em botão
    cy.clickByText('Configurações');
    
    // Preencher formulário
    cy.fillField('input[name="telefone"]', '11999999999');
    
    // Enviar com retry
    cy.clickWithRetry('button[type="submit"]');
    
    // Validar sucesso
    cy.shouldContainText('.alert-success', 'Salvo com sucesso');
  });
});
```

---

## Boas Práticas

1. **Use `data-testid`** sempre que possível - mais estável que seletores CSS
2. **Evite clicks forçados** - use apenas quando necessário
3. **Aguarde elementos** com `waitForElement` antes de interagir
4. **Use `clickIfExists`** para elementos opcionais
5. **Mantenha testes pequenos** e focados
6. **Use `beforeEach`** para setup comum