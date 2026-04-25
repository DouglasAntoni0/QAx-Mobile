class BaseResource {
    async getStarted() {
        const startText = await $(`android=new UiSelector().text("QAX")`);
        await startText.waitForDisplayed({ timeout: 5000 });
        await startText.click();
    }

    async navigateTo(itemText) {
        const hamburger = await $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
        await hamburger.waitForDisplayed({ timeout: 5000 });
        await hamburger.click();

        const menuItem = await $(`//*[@resource-id="com.qaxperience.yodapp:id/navView"]//*[@text="${itemText}"]`);
        await menuItem.waitForDisplayed({ timeout: 5000 });
        await menuItem.click();
    }

    async goToItem(item, checkpoint) {
        const itemElement = await $(`android=new UiSelector().text("${item}")`);
        await itemElement.waitForDisplayed({ timeout: 5000 });
        await itemElement.click();

        const checkpointElement = await $(`android=new UiSelector().text("${checkpoint}")`);
        await checkpointElement.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = new BaseResource();
