/* eslint-env jest */

/**
 * makesure all lang files has matched keys
 */

import { readdirSync, readFileSync } from 'fs'
import { resolve } from 'path'
import _ from 'lodash'

const cwd = process.cwd()

const pack = JSON.parse(
  readFileSync(
    resolve(
      cwd, 'package.json'
    )
  )
)

/**
 * compare object makesure they has same shape
 * @param {*} obj1
 * @param {*} pbj2
 */
function compareObject (obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (
    !_.isEqual(keys1, keys2)
  ) {
    console.log('not the same shape')
    return false
  }
  for (const k of keys1) {
    const v1 = obj1[k]
    const v2 = obj2[k]
    if (_.isString(v1)) {
      if (!_.isString(v2)) {
        console.log('prop:', k, 'not the same shape', v1, v2)
        return false
      }
    } else if (_.isArray(v1)) {
      if (
        !_.isArray(v2) || v1.length !== v2.length
      ) {
        console.log('prop:', k, 'not the same shape', v1, v2)
        return false
      }
    } else {
      if (
        !_.isPlainObject(v1) ||
        !_.isPlainObject(v2) ||
        !_.isEqual(
          Object.keys(v1),
          Object.keys(v2)
        )
      ) {
        console.log('prop:', `"${k}"`, 'not the same shape', v1, v2)
        return false
      }
    }
  }
  return true
}

describe(pack.name, function () {
  it('all langs should have same shape', async function () {
    const files = readdirSync(
      resolve(cwd, 'locales')
    )
    const langs = {}
    for (const f of files) {
      const pp = resolve(
        cwd, 'locales', f
      )
      const content = await import(pp)
      langs[pp] = {
        path: pp,
        ...content.default
      }
    }
    // const langs = files.reduce(async (pre, f) => {
    //   const pp = resolve(
    //     cwd, 'locales', f
    //   )
    //   const content = await import(pp)
    //   pre[pp] = {
    //     path: pp,
    //     ...content
    //   }
    //   return pre
    // }, {})
    const keys = Object.keys(langs)
    const len = keys.length
    for (let i = 0; i < len - 1; i++) {
      const k1 = keys[i]
      const k2 = keys[i + 1]
      const c1 = langs[k1]
      const c2 = langs[k2]
      const eq = compareObject(
        c1.lang,
        c2.lang
      )
      if (!eq) {
        console.log(
          c1.path,
          c2.path,
          'do not match'
        )
      }
      expect(eq).toBe(true)
    }
  })
})
