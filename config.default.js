const extend = require('recursive-assign')
const {resolve} = require('path')
let config = {
  syncTo: resolve(__dirname, '../electerm/node_modules/electerm-locales')
}

let custom = {}
try {
  custom = require('./config')
  extend(config, custom)
} catch(e) {
  console.log('no config.js, but it is ok')
}

module.exports = exports.default = config
