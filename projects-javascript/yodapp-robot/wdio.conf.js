const fs = require('node:fs/promises');
const path = require('node:path');

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
        'appium:app': '../../projects/yodapp-robot/app/yodapp-beta.apk',
        
        'appium:uiautomator2ServerInstallTimeout': 600000,
        'appium:uiautomator2ServerLaunchTimeout': 600000,
        'appium:adbExecTimeout': 600000
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    
    waitforTimeout: 60000, 
    
    connectionRetryTimeout: 600000, 
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000 
    },

    before: async function (capabilities, specs) {
    },

    beforeTest: async function (test, context) {
        await driver.activateApp('com.qaxperience.yodapp');
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            const artifactDirectory = path.resolve('ci-artifacts');
            const artifactName = Date.now() + '-' + test.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

            await fs.mkdir(artifactDirectory, { recursive: true });
            await driver.saveScreenshot(path.join(artifactDirectory, artifactName + '.png'));
            await fs.writeFile(
                path.join(artifactDirectory, artifactName + '.xml'),
                await driver.getPageSource(),
                'utf8'
            );
        }

        await driver.terminateApp('com.qaxperience.yodapp');
    }
}
