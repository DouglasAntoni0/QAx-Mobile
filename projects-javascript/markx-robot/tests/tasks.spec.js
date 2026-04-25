const base = require('../resources/base.resource');

describe('Tasks', () => {
    it('Deve poder cadastrar uma nova tarefa', async () => {
        const taskName = 'Estudar Python';
        await base.removeTaskFromDatabase(taskName);

        await base.getStarted();
        await base.doLogin();
        await base.createANewTask(taskName);

        await base.shouldHaveTask(taskName);
    });

    it('Deve poder remover uma tarefa', async () => {
        const taskName = 'Comprar refrigerante';
        await base.removeTaskFromDatabase(taskName);

        await base.getStarted();
        await base.doLogin();
        await base.createANewTask(taskName);
        await base.shouldHaveTask(taskName);

        await base.removeTaskByName(taskName);

        const taskElement = await $(`//*[@text="${taskName}"]`);
        await taskElement.waitForDisplayed({ reverse: true, timeout: 5000 });
    });

    it('Deve poder concluir uma tarefa', async () => {
        const taskName = 'Estudar Xpath';
        await base.removeTaskFromDatabase(taskName);

        await base.getStarted();
        await base.doLogin();
        await base.createANewTask(taskName);
        await base.shouldHaveTask(taskName);

        await base.finishTask(taskName);
        await base.taskShouldBeDone(taskName);
    });
});
