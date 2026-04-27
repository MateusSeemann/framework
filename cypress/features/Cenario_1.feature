Feature: login

  Scenario Outline: Validando login
    Given acesso a pagina "<pagina>"
    When Devo ver
    Then Devo clicar no formulário

  Examples:
    | pagina                                                   |
    | https://playground.bondaracademy.com/pages/iot-dashboard |