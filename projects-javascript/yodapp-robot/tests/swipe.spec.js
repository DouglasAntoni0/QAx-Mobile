const base = require('../resources/base.resource');

describe('Swipe', () => {
    it('Deve poder remover o Darth Vader', async () => {
        await base.getStarted();
        await base.navigateTo('Star Wars');
        await base.goToItem('Lista', 'Darth Vader');

        const indicator = await $('//android.widget.TextView[@text="@darthvader"]/../../..//*[contains(@resource-id, "indicator")]');
        
        const location = await indicator.getLocation();
        const startX = location.x;
        const startY = location.y;
        const endX = startX - 650;
        const endY = startY;

        await driver.action('pointer')
            .move({ duration: 0, x: startX, y: startY })
            .down({ button: 0 })
            .move({ duration: 1000, x: endX, y: endY })
            .up({ button: 0 })
            .perform();

        const btnRemove = await $('id=com.qaxperience.yodapp:id/btnRemove');
        await btnRemove.click();

        const darthVaderText = await $(`android=new UiSelector().text("Darth Vader")`);
        await darthVaderText.waitForDisplayed({ reverse: true, timeout: 5000 });
    });
});
