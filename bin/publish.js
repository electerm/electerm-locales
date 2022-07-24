/**
 * build to json6
 */

import pkg from 'shelljs'
import { readFileSync, writeFileSync } from 'fs'

const { cp, exec } = pkg

async function run () {
  const from = 'package.json'
  const tar = 'package-.json.bak.tar.gz'
  cp(from, tar)
  const f = readFileSync(from).toString().replace('"type": "module"', '"type": "commonjs"')
  writeFileSync(from, f)
  exec('bin/publish')
  cp(tar, from)
}

run()
