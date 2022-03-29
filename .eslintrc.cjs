'use strict';

module.exports = {
  extends: 'ash-nazg/sauron-node-overrides',
  env: {
    es2022: true
  },
  settings: {
    polyfills: [
      'console'
    ]
  },
  parserOptions: {
    ecamVersion: 2022
  }
};
