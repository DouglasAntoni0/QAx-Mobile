const base = require('../resources/base.resource');

describe('Checkbox', () => {
    it('Deve marcas as techs que usam appium', async () => {
        await base.getStarted();
        await base.navigateTo('Check e Radio');
        await base.goToItem('Checkbox', 'Marque as techs que usam Appium');

        const techs = ['Ruby', 'Python', 'Java', 'Javascript', 'C#', 'Robot Framework'];

        for (const tech of techs) {
            const checkbox = await $(`//android.widget.CheckBox[contains(@text, "${tech}")]`);
            await checkbox.click();
            await driver.pause(3000);
        }

        await driver.pause(3000);
    });
});
