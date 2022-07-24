/**
 * with this script to create a new language file with google-translate-open-api
 */

import { resolve } from 'path'
import { writeFileSync } from 'fs'
import _ from 'lodash'
import json5 from 'json5'
import countryFlagEmoji from 'country-flag-emoji'
import { translate, endTranslate } from './translate.js'

// from https://github.com/hua1995116/google-translate-open-api/blob/master/src/language.ts
const supportedLangs = {
  Automatic: 'auto',
  Afrikaans: 'af',
  Albanian: 'sq',
  Amharic: 'am',
  Arabic: 'ar',
  Armenian: 'hy',
  Azerbaijani: 'az',
  Basque: 'eu',
  Belarusian: 'be',
  Bengali: 'bn',
  Bosnian: 'bs',
  Bulgarian: 'bg',
  Catalan: 'ca',
  Cebuano: 'ceb',
  Chichewa: 'ny',
  'Chinese Simplified': 'zh-CN',
  'Chinese Traditional': 'zh-TW',
  Corsican: 'co',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Dutch: 'nl',
  English: 'en',
  Esperanto: 'eo',
  Estonian: 'et',
  Filipino: 'tl',
  Finnish: 'fi',
  French: 'fr',
  Frisian: 'fy',
  Galician: 'gl',
  Georgian: 'ka',
  German: 'de',
  Greek: 'el',
  Gujarati: 'gu',
  'Haitian Creole': 'ht',
  Hausa: 'ha',
  Hawaiian: 'haw',
  Hebrew: 'iw',
  Hindi: 'hi',
  Hmong: 'hmn',
  Hungarian: 'hu',
  Icelandic: 'is',
  Igbo: 'ig',
  Indonesian: 'id',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Javanese: 'jw',
  Kannada: 'kn',
  Kazakh: 'kk',
  Khmer: 'km',
  Korean: 'ko',
  'Kurdish (Kurmanji)': 'ku',
  Kyrgyz: 'ky',
  Lao: 'lo',
  Latin: 'la',
  Latvian: 'lv',
  Lithuanian: 'lt',
  Luxembourgish: 'lb',
  Macedonian: 'mk',
  Malagasy: 'mg',
  Malay: 'ms',
  Malayalam: 'ml',
  Maltese: 'mt',
  Maori: 'mi',
  Marathi: 'mr',
  Mongolian: 'mn',
  'Myanmar (Burmese)': 'my',
  Nepali: 'ne',
  Norwegian: 'no',
  Pashto: 'ps',
  Persian: 'fa',
  Polish: 'pl',
  Portuguese: 'pt',
  Punjabi: 'ma',
  Romanian: 'ro',
  Russian: 'ru',
  Samoan: 'sm',
  'Scots Gaelic': 'gd',
  Serbian: 'sr',
  Sesotho: 'st',
  Shona: 'sn',
  Sindhi: 'sd',
  Sinhala: 'si',
  Slovak: 'sk',
  Slovenian: 'sl',
  Somali: 'so',
  Spanish: 'es',
  Sundanese: 'su',
  Swahili: 'sw',
  Swedish: 'sv',
  Tajik: 'tg',
  Tamil: 'ta',
  Telugu: 'te',
  Thai: 'th',
  Turkish: 'tr',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uzbek: 'uz',
  Vietnamese: 'vi',
  Welsh: 'cy',
  Xhosa: 'xh',
  Yiddish: 'yi',
  Yoruba: 'yo',
  Zulu: 'zu'
}
const dict = _.invert(supportedLangs)
const { lang = 'en', from = 'en' } = process.env

function getLangName (code) {
  return dict[code]
}

function delay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

async function create () {
  console.log('creating, please wait')
  const langName = getLangName(lang)
  if (!langName) {
    throw new Error('lang not right, please check https://github.com/hua1995116/google-translate-open-api/blob/master/src/language.ts for language code')
  }
  const en = require('../locales/en_us')
  const tr = en.lang
  const keys = Object.keys(tr)
  for (const k of keys) {
    console.log('namespace:', k)
    const obj = tr[k]
    const ks = Object.keys(obj)
    for (const kk of ks) {
      const v = obj[kk]
      const txt = await translate({
        text: v,
        from,
        to: lang
      })
      // txt = txt.data
      console.log(`[${kk}]`, '==>', txt)
      obj[k] = txt
      await delay(1000)
    }
  }
  let emo = countryFlagEmoji.get(lang.toUpperCase())
  if (emo) {
    emo = emo.emoji
  }
  const tow = `
/**
 * language: ${langName}
 */
const lang = ${json5.stringify(tr, null, 2)}

module.exports = {
  lang,
  name: '${langName}',
  match: '${lang}',
  flag: '${emo}'
}

`
  const p = resolve(__dirname, '..', `locales/${lang}_${lang}.js`)
  writeFileSync(p, tow)
  console.log('done => ', p)
  endTranslate()
}

create()
