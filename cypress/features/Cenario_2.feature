Feature: amazon

  Scenario Outline: Validando pagina da amazon
    Given acesso a pagina "<pagina>"
    When pesquiso pelo "<celular>"

    Examples:
      | pagina                     | celular   |
      | https://www.amazon.com.br/ | Iphone 17 |
