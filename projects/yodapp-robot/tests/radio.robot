*** Settings ***

Library    AppiumLibrary

Resource    ../resources/base.resource

Test Setup       Start session
Test Teardown    Close session

*** Test Cases ***
Deve selecionar a opção Javascript

    Get started
    Navigate to    Check e Radio
    Go to item     Botões de radio    Escolha sua linguagem preferida

    Click Element   xpath=//android.widget.RadioButton[contains(@text, "Javascript")]

    Sleep  3


