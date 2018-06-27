/**
 * makesure all lang files has matched keys
 */

const { equal } = require('assert')
const pack = require('../package.json')
const {readdirSync} = require('fs')
const {resolve} = require('path')
const _ = require('lodash')

/**
 * compare object makesure they has same shape
 * @param {*} obj1
 * @param {*} pbj2 
 */
function compareObject(obj1, obj2) {
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if (
    !_.isEqual(keys1, keys2)
  ) {
    console.log('not the same shape')
    return false
  }
  for (let k of keys1) {
    let v1 = obj1[k]
    let v2 = obj2[k]
    if (_.isString(v1)) {
      if(!_.isString(v2)) {
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

  it('all langs should have same shape', function () {
    let files = readdirSync(
      resolve(__dirname, '../locales')
    )
    let langs = files.reduce((pre, f) => {
      let pp = resolve(
        __dirname, '../locales', f
      )
      let content = require(pp)
      pre[pp] = {
        path: pp,
        ...content
      }
      return pre
    }, {})
    let keys = Object.keys(langs)
    let len = keys.length
    for (let i = 0;i < len - 1; i++) {
      let k1 = keys[i]
      let k2 = keys[i + 1]
      let c1 = langs[k1]
      let c2 = langs[k2]
      let eq = compareObject(
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
      equal(eq, true)
    }
  })

})
