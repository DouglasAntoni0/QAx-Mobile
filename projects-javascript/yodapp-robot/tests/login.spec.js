const base = require('../resources/base.resource');

describe('Login', () => {
    it('Deve fazer login com sucesso', async () => {
        await base.getStarted();
        await base.navigateTo('Formulários');
        await base.goToItem('Login', 'Olá Padawan, vamos testar o login?');

        const etEmail = await $('id=com.qaxperience.yodapp:id/etEmail');
        await etEmail.setValue('yoda@qax.com');

        const etPassword = await $('id=com.qaxperience.yodapp:id/etPassword');
        await etPassword.setValue('jedi');

        const btnSubmit = await $('id=com.qaxperience.yodapp:id/btnSubmit');
        await btnSubmit.click();

        const successMessage = await $(`android=new UiSelector().text("Boas vindas, logado você está.")`);
        await successMessage.waitForDisplayed({ timeout: 5000 });
    });

    it('Não deve logar com senha incorreta', async () => {
        await base.getStarted();
        await base.navigateTo('Formulários');
        await base.goToItem('Login', 'Olá Padawan, vamos testar o login?');

        const etEmail = await $('id=com.qaxperience.yodapp:id/etEmail');
        await etEmail.setValue('yoda@qax.com');

        const etPassword = await $('id=com.qaxperience.yodapp:id/etPassword');
        await etPassword.setValue('nada');

        const btnSubmit = await $('id=com.qaxperience.yodapp:id/btnSubmit');
        await btnSubmit.click();

        const errorMessage = await $(`android=new UiSelector().text("Oops! Credenciais incorretas.")`);
        await errorMessage.waitForDisplayed({ timeout: 5000 });
    });
});
