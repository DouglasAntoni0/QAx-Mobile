const base = require('../resources/base.resource');

describe('Login', () => {
    it('Deve logar com sucesso', async () => {
        await base.getStarted();
        await base.doLogin();
        
        const taskList = await $('//*[@resource-id="taskList"]');
        await taskList.waitForDisplayed({ timeout: 5000 });
    });
});
