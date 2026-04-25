*** Settings ***

Library    AppiumLibrary

Resource    ../resources/base.resource

*** Test Cases ***
Deve realizar um clique simples

    Start session
    Get started
    Navigate to    Clique em Botões
    Go to item     Clique simples   Botão clique simples

    Click Text                  CLIQUE SIMPLES
    Wait Until Page Contains    Isso é um clique simples

    Close session

Deve realizar um clique longo

    [Tags]     long

    Start session
    Get started
    Navigate to    Clique em Botões
    Go to item     Clique longo   Botão clique longo

    ${locator}     Set Variable   id=com.qaxperience.yodapp:id/long_click

    ${positions}  Get Element Location    ${locator}

    ${finger}     Create List    ${positions}[x]    ${positions}[y]
    Tap With Positions        1000ms     ${finger}
    Wait Until Page Contains  Isso é um clique longo

    Close session
