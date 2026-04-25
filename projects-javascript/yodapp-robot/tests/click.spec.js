const base = require('../resources/base.resource');

describe('Click', () => {
    it('Deve realizar um clique simples', async () => {
        await base.getStarted();
        await base.navigateTo('Clique em Botões');
        await base.goToItem('Clique simples', 'Botão clique simples');

        const btnCliqueSimples = await $(`android=new UiSelector().text("CLIQUE SIMPLES")`);
        await btnCliqueSimples.click();

        const toast = await $(`//android.widget.Toast[@text="Isso é um clique simples"]`);
        await toast.waitForDisplayed({ timeout: 5000 });
    });

    it('Deve realizar um clique longo', async () => {
        await base.getStarted();
        await base.navigateTo('Clique em Botões');
        await base.goToItem('Clique longo', 'Botão clique longo');

        const btnCliqueLongo = await $('id=com.qaxperience.yodapp:id/long_click');
        
        await driver.action('pointer')
            .move({ duration: 0, origin: btnCliqueLongo, x: 0, y: 0 })
            .down({ button: 0 })
            .pause(1000)
            .up({ button: 0 })
            .perform();

        const toast = await $(`//android.widget.Toast[@text="Isso é um clique longo"]`);
        await toast.waitForDisplayed({ timeout: 5000 });
    });
});
