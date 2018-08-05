'use strict';

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

const development = {
  NODE_ENV: '"development"',
  API_HOST: '"http://localhost:8000"',
};

module.exports = merge(prodEnv, development);
