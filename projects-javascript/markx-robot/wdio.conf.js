const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './tests/**/*.spec.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), '../../projects/markx-robot/apps/markx.apk'),
        'appium:udid': 'emulator-5554',
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    waitforTimeout: 5000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.terminateApp('com.qaxperience.markx');
    },
    beforeTest: async function (test, context) {
        await driver.activateApp('com.qaxperience.markx');
    }
}
