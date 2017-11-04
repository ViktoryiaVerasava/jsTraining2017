/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'firefox'
    },
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec.ts'],
  //  noGlobals: true
};*/
//# sourceMappingURL=conf.js.map

exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'spec.ts'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};