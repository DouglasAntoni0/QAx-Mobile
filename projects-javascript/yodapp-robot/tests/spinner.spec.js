const base = require('../resources/base.resource');

describe('Spinner', () => {
    async function selectLevel(level) {
        const spinner = await $('id=com.qaxperience.yodapp:id/spinnerJob');
        await spinner.click();

        const listView = await $('class=android.widget.ListView');
        await listView.waitForDisplayed({ timeout: 5000 });

        const levelElement = await $(`android=new UiSelector().text("${level}")`);
        await levelElement.click();
    }

    it('Deve escolher o nivel Padawan', async () => {
        await base.getStarted();
        await base.navigateTo('Formulários');
        await base.goToItem('Cadastro', 'Crie sua conta.');
        await selectLevel('Padawan');
    });

    it('Deve escolher o nivel Jedi', async () => {
        await base.getStarted();
        await base.navigateTo('Formulários');
        await base.goToItem('Cadastro', 'Crie sua conta.');
        await selectLevel('Jedi');
    });

    it('Deve escolher o nivel Sith', async () => {
        await base.getStarted();
        await base.navigateTo('Formulários');
        await base.goToItem('Cadastro', 'Crie sua conta.');
        await selectLevel('Sith');
    });

    it('Deve escolher o nivel Outros', async () => {
        await base.getStarted();
        await base.navigateTo('Formulários');
        await base.goToItem('Cadastro', 'Crie sua conta.');
        await selectLevel('Outros');
    });
});
