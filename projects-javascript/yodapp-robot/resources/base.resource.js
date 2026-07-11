const APP_READY_TIMEOUT = 60000;

class BaseResource {
    async getStarted() {
        const startSelector = 'android=new UiSelector().text("Get started")';
        const homeSelector = '//android.widget.ImageButton[@content-desc="Open navigation drawer"]';

        await driver.waitUntil(
            async () => {
                const startButton = await $(startSelector);
                const homeMenu = await $(homeSelector);

                return (await startButton.isDisplayed()) || (await homeMenu.isDisplayed());
            },
            {
                timeout: APP_READY_TIMEOUT,
                interval: 500,
                timeoutMsg: 'A tela inicial do Yodapp não ficou disponível em 60 segundos.'
            }
        );

        const startButton = await $(startSelector);
        if (await startButton.isDisplayed()) {
            await startButton.click();
        }

        const homeMenu = await $(homeSelector);
        await homeMenu.waitForDisplayed({
            timeout: APP_READY_TIMEOUT,
            timeoutMsg: 'A tela principal do Yodapp não ficou disponível em 60 segundos.'
        });
    }

    async navigateTo(itemText) {
        const hamburger = await $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
        await hamburger.waitForDisplayed({ timeout: 15000 });
        await hamburger.click();

        const menuItem = await $(`//*[@resource-id="com.qaxperience.yodapp:id/navView"]//*[@text="${itemText}"]`);
        await menuItem.waitForDisplayed({ timeout: 15000 });
        await menuItem.click();
    }

    async goToItem(item, checkpoint) {
        const itemElement = await $(`android=new UiSelector().text("${item}")`);
        await itemElement.waitForDisplayed({ timeout: 15000 });
        await itemElement.click();

        const checkpointElement = await $(`android=new UiSelector().text("${checkpoint}")`);
        await checkpointElement.waitForDisplayed({ timeout: 15000 });
    }
}

module.exports = new BaseResource();
