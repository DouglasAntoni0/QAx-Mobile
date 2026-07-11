const base = require('../resources/base.resource');

describe('Home', () => {
    it('Deve abrir a tela principal', async () => {
        await base.getStarted();

        const navigationDrawer = await $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
        await navigationDrawer.waitForDisplayed({ timeout: 5000 });

        const toolbarTitle = await $('id=com.qaxperience.yodapp:id/toolbarTitle');
        await toolbarTitle.waitForDisplayed({ timeout: 5000 });

        const simpleClickItem = await $(`android=new UiSelector().text("Clique simples")`);
        await simpleClickItem.waitForDisplayed({ timeout: 5000 });
    });
});
