exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'ksarmalkar_xsNtUj',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'nePzDoPbAoKrDLWpvQRx',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/basic_validation_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "Horseshoe Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'basic_validation_test',
    device: 'Google Pixel 7',
    os_version: "13.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://fab06eda593df341ffca904bcd135e704d2f4904',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
