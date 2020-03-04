/**
 * build to json6
 */

const fs = require('fs')
const { rm, mkdir } = require('shelljs')
const { resolve } = require('path')
const p = resolve(__dirname, '../locales')
const dist = resolve(__dirname, '../dist')

function run () {
  rm('-rf', dist)
  mkdir(dist)
  const list = fs.readdirSync(p)
  for (const f of list) {
    const pp = resolve(p, f)
    const js = require(pp)
    const tt = resolve(dist, f + 'on')
    fs.writeFileSync(tt, JSON.stringify(js))
  }
}

run()
