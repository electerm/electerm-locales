/**
 * build to json6
 */

import fs from 'fs'
import pkg from 'shelljs'
import { resolve } from 'path'
import json5 from 'json5'

const { rm, mkdir } = pkg
const cwd = process.cwd()
const p = resolve(cwd, 'locales')
const dist = resolve(cwd, 'dist')
const esm = resolve(dist, 'esm')
const cjs = resolve(dist, 'cjs')

function flattenLangObject (obj) {
  return Object.keys(obj).reduce((pre, k) => {
    const v = obj[k]
    return {
      ...pre,
      ...v
    }
  }, {})
}

async function run () {
  rm('-rf', dist)
  mkdir(dist)
  mkdir(esm)
  mkdir(cjs)
  const list = fs.readdirSync(p)
  const prefix = 'module.exports=exports.default='
  const arr = []
  let esmStr = ''
  let cjsExports = ''
  for (const f of list) {
    const name = f.replace('.js', '')
    const pp = resolve(p, f)
    arr.push(f)
    const js = await import(pp)
    js.default.lang = flattenLangObject(js.default.lang)
    const tt = resolve(cjs, f)
    fs.writeFileSync(tt, prefix + json5.stringify(js.default))
    const tt1 = resolve(esm, f.replace('.js', '.mjs'))
    const pref = `export const ${name} = `
    fs.writeFileSync(tt1, pref + json5.stringify(js.default))
    esmStr += `export * from './${f.replace('.js', '.mjs')}'\n`
    cjsExports += `module.exports.${name} = require('./${f}')\n`
  }
  const ap = resolve(cjs, 'list.json')
  fs.writeFileSync(ap, JSON.stringify(arr))
  const ap1 = resolve(esm, 'index.mjs')
  fs.writeFileSync(ap1, esmStr)
  const cjsPackageJson = {
    type: 'commonjs'
  }
  fs.writeFileSync(resolve(cjs, 'package.json'), JSON.stringify(cjsPackageJson, null, 2))
  fs.writeFileSync(resolve(cjs, 'index.js'), cjsExports)
  fs.writeFileSync(resolve(esm, 'index.mjs'), esmStr + '\nexport { default } from \'./en_us.mjs\'\n')
}

run()
