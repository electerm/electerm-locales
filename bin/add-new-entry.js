/**
 * add new entry with this script
 */

const { resolve } = require('path')
const { writeFileSync, readFileSync } = require('fs')
const {
  entry = 'app',
  name = 'test1',
  text = 'whatever',
  original = 'en',
  to = ''
} = process.env
const { translate } = require('./translate')

const supported = {
  en: 'en_us',
  'zh-CN': 'zh_cn',
  es: 'es_es',
  ru: 'ru_ru',
  tr: 'tr_tr',
  fr: 'fr_fr',
  pt: 'pt_br',
  'zh-TW': 'zh_tw',
  ja: 'ja_jp',
  ar: 'ar_ar',
  de: 'de_de'
}

async function run () {
  const keys = to
    ? to.split(',')
    : Object.keys(supported)
  for (const k of keys) {
    const v = supported[k]
    if (k === original) {
      console.log(k, text)
      await add(v, text)
    } else {
      let translated = false
      while (!translated) {
        translated = await translate({
          text,
          from: 'en',
          to: k,
          reusePage: false
        }).catch(e => {
          console.log('trans error', e)
        })
      }
      console.log(k, translated)
      await add(v, translated)
    }
  }
}

function add (fileName, txt) {
  const p = resolve(__dirname, '..', 'locales', fileName + '.js')
  let str = readFileSync(p).toString()
  const reg = new RegExp(`${entry}: {([^{}]+)}`, 'm')
  const arr = str.match(reg)
  if (!arr) {
    throw new Error('no match')
  }
  const tar = arr[1]
  const rep = `${tar.replace(/\n[ ]{2}$/, '')},
    ${name}: '${txt}'
  `
  str = str.replace(tar, rep)
  writeFileSync(p, str)
}

run()
