const config = {
  runner: 'local',

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'warn',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      'appium',
      {
        command: 'appium',
        args: {
          address: '127.0.0.1',
          port: 4723,
          basePath: '/wd/hub',
        },
      },
    ],
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000,
    require: ['ts-node/register'],
  },
  outputDir: './output',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableMochaHooks: true,
        disableWebdriverScreenshotsReporting: false,
        disableWebdriverStepsReporting: true,
      },
    ],
  ],

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (error) await browser.takeScreenshot();
  },
};

module.exports = { config };
