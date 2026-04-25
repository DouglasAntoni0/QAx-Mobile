async function createANewTask(taskName) {
    const newTaskInput = await $('//*[contains(@text, "nova tarefa")]');
    await newTaskInput.waitForDisplayed({ timeout: 5000 });
    await newTaskInput.setValue(taskName);

    const createButton = await $('//*[@resource-id="createTask"]');
    await createButton.click();
}

async function shouldHaveTask(taskName) {
    const taskElement = await $(`//*[@resource-id="taskText"][@text="${taskName}"]`);
    await taskElement.waitForDisplayed({ timeout: 5000 });
}

async function removeTaskByName(taskName) {
    const removeIcon = await $(`//*[@text="${taskName}"]/../..//*[@resource-id="removeTask"]`);
    await removeIcon.click();

    const simButton = await $('//android.widget.Button[@text="SIM"]');
    await simButton.waitForDisplayed({ timeout: 5000 });
    await simButton.click();
}

async function finishTask(taskName) {
    const taskContainer = await $(`//*[@text="${taskName}"]/..`);
    await taskContainer.click();
}

async function taskShouldBeDone(taskName) {
    const doneImage = await $(`//*[@text="${taskName}"]/..//android.widget.ImageView`);
    await doneImage.waitForDisplayed({ timeout: 5000 });
}

module.exports = {
    createANewTask,
    shouldHaveTask,
    removeTaskByName,
    finishTask,
    taskShouldBeDone
};
