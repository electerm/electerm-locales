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
const esm = resolve(cwd, 'esm')

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
  rm('-rf', esm)
  mkdir(dist)
  mkdir(esm)
  const list = fs.readdirSync(p)
  const prefix = 'module.exports=exports.default='
  const arr = []
  let esmStr = ''
  for (const f of list) {
    const name = f.replace('.js', '')
    const pp = resolve(p, f)
    arr.push(f)
    const js = await import(pp)
    js.default.lang = flattenLangObject(js.default.lang)
    const tt = resolve(dist, f)
    fs.writeFileSync(tt, prefix + json5.stringify(js.default))
    const tt1 = resolve(esm, f.replace('.js', '.mjs'))
    const pref = `export const ${name} = `
    fs.writeFileSync(tt1, pref + json5.stringify(js.default))
    esmStr += `export * from './${f.replace('.js', '.mjs')}'\n`
  }
  const ap = resolve(dist, 'list.json')
  fs.writeFileSync(ap, JSON.stringify(arr))
  const ap1 = resolve(esm, 'index.mjs')
  fs.writeFileSync(ap1, esmStr)
}

run()
