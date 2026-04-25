async function dismissCompatibilityDialogIfPresent() {
    const popup = await $('//*[@text="Android App Compatibility"]');
    if (await popup.isExisting()) {
        const button = await $('id=android:id/button1');
        await button.click();
    }
}

module.exports = {
    dismissCompatibilityDialogIfPresent
};
