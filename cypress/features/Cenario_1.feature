Feature: login

  Scenario Outline: Validando login
    Given acesso a pagina "<pagina>"

  Examples:
    | pagina                                                   |
    | https://playground.bondaracademy.com/pages/iot-dashboard |