/**
 * add new entry with this script
 */

import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'

const cwd = process.cwd()
const {
  entry = 'app',
  name = 'test1',
  to = ''
} = process.env

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
  de: 'de_de',
  ko: 'ko_kr',
  id: 'id_id', // Indonesian
  pl: 'pl_pl' // Polish
}

const mapper = {
  en: 'English',
  'zh-CN': '简体中文',
  es: 'Español',
  ru: 'русский',
  tr: 'Türkçe',
  fr: 'Français',
  pt: 'Português',
  'zh-TW': '繁體中文',
  ja: '日本語',
  ar: 'العربية',
  de: 'Deutsch',
  ko: '한국어',
  id: 'Bahasa Indonesia',
  pl: 'Polski'
}

async function run () {
  const data = process.env.data ? JSON.parse(process.env.data) : {}
  const keys = to
    ? to.split(',')
    : Object.keys(supported)
  for (const k of keys) {
    const v = supported[k]
    const translated = data[k]
    console.log(k, mapper[k], '==>', translated)
    await add(v, translated)
  }
}

function add (fileName, txt) {
  const p = resolve(cwd, 'locales', fileName + '.js')
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
