'use strict';

module.exports = {
  extends: 'ash-nazg/sauron-node-overrides',
  parser: '@babel/eslint-parser',
  env: {
    es2022: true
  },
  globals: {
    document: 'off',
    fetch: 'off'
  },
  settings: {
    polyfills: [
      'console',
      'Promise'
    ]
  },
  parserOptions: {
    ecamVersion: 2022
  }
};
