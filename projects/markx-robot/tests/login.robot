*** Settings ***
Documentation       Testes de Login

Resource     ../resources/base.resource

Test Setup      Start session
Test Teardown   Finish session

*** Test Cases ***
Deve logar com sucesso

    Do login

    Wait Until Element Is Visible    xpath=//*[@resource-id="taskList"]       5s
    
    
