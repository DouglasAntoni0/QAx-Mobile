const base = require('../resources/base.resource');

describe('Home', () => {
    it('Deve abrir a tela principal', async () => {
        const yodappText = await $(`android=new UiSelector().text("Yodapp")`);
        await yodappText.waitForDisplayed({ timeout: 5000 });

        const subtitleText = await $(`android=new UiSelector().text("Mobile Training")`);
        await subtitleText.waitForDisplayed({ timeout: 5000 });

        const authorText = await $(`android=new UiSelector().text("by Papito")`);
        await authorText.waitForDisplayed({ timeout: 5000 });
    });
});
