/**
 * auto translate with aws tranlate api, and create language file
 */

const {exec} = require('child_process')
const en = require('../locales/en_us')
const _ = require('lodash')

const targets = {
  'ar': {
    name: 'Arabic',
    match: /ar/
  },
  'zh-TW': {
    name: 'Traditional Chinese',
    match: /zh_?!(cn|sg)/
  },
  'cs': 'Czech',
  'da': 'Danish',
  'nl': {
    name: 'Dutch',
    match: /nl/
  },
  'fi': 'Finnish',
  'fr': {
    name: 'French',
    match: /fr/
  },
  'de': {
    name: 'German',
    match: /de/
  },
  'he': 'Hebrew',
  'id': 'Indonesian',
  'it': {
    name: 'Italian',
    match: /it/
  },
  'ja': 'Japanese',
  'ko': 'Korean',
  'pl': 'Polish',
  'es': {
    name: 'Spanish',
    match: 'es'
  },
  'sv': {
    name: 'Swedish',
    match: /sv/
  },
  'tr': 'Turkish'
}

function trans({
  tar,
  txt
}) {
  return new Promise((resolve) => {
    let cmd = `tar=${tar} txt="${txt}" python3 bin/batch-translate.py`
    exec(cmd, (err, out, e) => {
      if (err || e) {
        resolve('')
      } else {
        let s = out || ''
        resolve(
          s.trim()
        )
      }
    })
  })
}

async function loop() {
  let keys = Object.keys(targets)
  for (let key of keys) {
    await translate(key, targets[key])
  }
}

async function translate(tar, def) {
  let name = _.isString(def)
    ? def
    : def.name

}
