exports.config = {
    runner: 'local',

    specs: [
        './tests/**/*.spec.js'
    ],
    exclude: [],

    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:app': './app/yodapp-beta.apk'
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

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
        await driver.terminateApp('com.qaxperience.yodapp');
    }
}