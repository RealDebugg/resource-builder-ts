const client = require('../../webpack/webpack.client');
const server = require('../../webpack/webpack.server');
const shared = require('../../webpack/webpack.shared');

module.exports = [
  client(),  
  server(),
  shared()
]