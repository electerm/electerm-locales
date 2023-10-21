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
    const tt = resolve(dist, f)
    fs.writeFileSync(tt, prefix + json5.stringify(js.default))
    const tt1 = resolve(esm, f)
    const pref = `export const ${name} = `
    fs.writeFileSync(tt1, pref + json5.stringify(js.default))
    esmStr += `export * from './${f}'\n`
  }
  const ap = resolve(dist, 'list.json')
  fs.writeFileSync(ap, JSON.stringify(arr))
  const ap1 = resolve(esm, 'index.js')
  fs.writeFileSync(ap1, esmStr)
}

run()
