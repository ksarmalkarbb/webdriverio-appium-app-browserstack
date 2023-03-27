exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'ksarmalkar_xsNtUj',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'nePzDoPbAoKrDLWpvQRx',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/basic_validation_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "Horseshoe Webdriverio iOS Project",
    build: 'Webdriverio iOS',
    name: 'basic_validation_test',
    device: 'iPhone 13 Pro',
    os_version: "15",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://1b44c590f80ee99353c924218b16db44e09f4148',
    'browserstack.debug': true,
    'browserstack.resignApp': false,
    'browserstack.autoAcceptAlerts': true,
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
    timeout: 40000
  }
};
