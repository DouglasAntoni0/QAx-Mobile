const { dismissCompatibilityDialogIfPresent } = require('./dialogs.resource');
const { doLogin } = require('./screens/login.resource');
const { createANewTask, shouldHaveTask, removeTaskByName, finishTask, taskShouldBeDone } = require('./screens/tasks.resource');
const { removeTaskFromDatabase } = require('./libs/mongo');

async function getStarted() {
    await dismissCompatibilityDialogIfPresent();
    const addressElement = await $(`android=new UiSelector().text("Endereço IP da Api")`);
    await addressElement.waitForDisplayed({ timeout: 10000 });
}

module.exports = {
    getStarted,
    dismissCompatibilityDialogIfPresent,
    doLogin,
    createANewTask,
    shouldHaveTask,
    removeTaskByName,
    finishTask,
    taskShouldBeDone,
    removeTaskFromDatabase
};
