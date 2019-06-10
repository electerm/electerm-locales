/**
 * post install script
 */
const { cp } = require('shelljs')
const { existsSync } = require('fs')
const { resolve } = require('path')
const prePushPath = resolve(__dirname, '../.git/hooks/pre-push')
const prePushPathFrom = resolve(__dirname, 'pre-push')

if (!existsSync(prePushPath)) {
  cp(prePushPathFrom, prePushPath)
}
