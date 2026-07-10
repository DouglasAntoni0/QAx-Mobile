const APP_READY_TIMEOUT = 60000;

class BaseResource {
    async getStarted() {
        const startSelector = 'android=new UiSelector().text("QAX")';
        const homeSelector = 'android=new UiSelector().text("Yodapp")';

        await driver.waitUntil(
            async () => {
                const startText = await $(startSelector);
                const homeTitle = await $(homeSelector);

                return (await startText.isDisplayed()) || (await homeTitle.isDisplayed());
            },
            {
                timeout: APP_READY_TIMEOUT,
                interval: 500,
                timeoutMsg: 'A tela inicial do Yodapp não ficou disponível em 60 segundos.'
            }
        );

        const startText = await $(startSelector);
        if (await startText.isDisplayed()) {
            await startText.click();
        }

        const homeTitle = await $(homeSelector);
        await homeTitle.waitForDisplayed({
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
