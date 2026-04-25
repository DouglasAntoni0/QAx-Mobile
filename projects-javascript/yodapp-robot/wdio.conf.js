exports.config = {

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',

    specs: [
        './tests/**/*.spec.js'
    ],
    exclude: [],



    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'storage:filename=yodapp-beta.apk',

        'appium:deviceName': '.*',
        'appium:platformVersion': '.*',

        'sauce:options': {
            build: 'appium-build-qax-yodapp',
            name: 'Teste Cabuloso do Yodapp',
            deviceOrientation: 'portrait'
        }
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['sauce'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


    before: async function (capabilities, specs) {
    },

    beforeTest: async function (test, context) {
        await driver.activateApp('com.qaxperience.yodapp');
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.execute('sauce:job-result=failed');
        } else {
            await browser.execute('sauce:job-result=passed');
        }
        await driver.terminateApp('com.qaxperience.yodapp');
    }
}