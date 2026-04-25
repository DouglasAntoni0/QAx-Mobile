const base = require('../resources/base.resource');

describe('Radio', () => {
    it('Deve selecionar a opção Javascript', async () => {
        await base.getStarted();
        await base.navigateTo('Check e Radio');
        await base.goToItem('Botões de radio', 'Escolha sua linguagem preferida');

        const radioButton = await $('//android.widget.RadioButton[contains(@text, "Javascript")]');
        await radioButton.click();

        await driver.pause(3000);
    });
});
