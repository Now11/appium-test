const { config } = require('../shared.config');

config.capabilities = [
  {
    platformName: 'Android',
    automationName: 'UIAutomator2',
    maxInstances: 1,
    noReset: true,
    fullReset: false,
    deviceName: 'AT_pixel_3',
    platformVersion: '9.0',
    app: './src/apps/sample_app.apk',
  },
];

config.specs = ['./specs/**/*.spec.ts'];

exports.config = config;