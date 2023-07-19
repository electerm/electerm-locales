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

async function run () {
  rm('-rf', dist)
  mkdir(dist)
  const list = fs.readdirSync(p)
  const prefix = 'module.exports=exports.default='
  const arr = []
  for (const f of list) {
    const pp = resolve(p, f)
    arr.push(f)
    const js = await import(pp)
    const tt = resolve(dist, f)
    fs.writeFileSync(tt, prefix + json5.stringify(js.default))
  }
  const ap = resolve(dist, 'list.json')
  fs.writeFileSync(ap, JSON.stringify(arr))
}

run()
