*** Settings ***
Library    AppiumLibrary

*** Keywords ***
Dismiss Compatibility Dialog If Present
    ${popup_visible}=    Run Keyword And Return Status
    ...    Wait Until Element Is Visible
    ...    xpath=//*[@text="Android App Compatibility"]
    ...    5s
    IF    ${popup_visible}
        Click Element    id=android:id/button1
    END
