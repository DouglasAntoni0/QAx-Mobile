*** Settings ***

Library    AppiumLibrary

Resource    ../resources/base.resource

Test Setup       Start session
Test Teardown    Close session

*** Test Cases ***
Deve marcas as techs que usam appium

    Get started
    Navigate to    Check e Radio
    Go to item     Checkbox   Marque as techs que usam Appium

    @{techs}      Create List    Ruby    Python    Java    Javascript    C#  Robot Framework

    FOR  ${tech}  IN  @{techs}

    Click Element                 xpath=//android.widget.CheckBox[contains(@text, "${tech}")]
    Sleep  3

    END

    Sleep  3