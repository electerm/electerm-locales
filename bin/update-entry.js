/**
 * Update an existing entry with this script
 * Usage: entry=<entry> name=<name> text=<newText> to=<langs> node bin/update-entry.js
 *   - entry: the section in the locale file (e.g., "app")
 *   - name: the key to update
 *   - text: the new value
 *   - to: optional, comma-separated language codes (e.g., "en,zh-CN"), defaults to all supported
 */

import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'

const cwd = process.cwd()
const {
  entry = 'app',
  name = 'test1',
  text = '',
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
  const keys = to
    ? to.split(',')
    : Object.keys(supported)
  for (const k of keys) {
    const v = supported[k]
    const translated = text
    console.log('Updating:', k, mapper[k], '==>', translated)
    await update(v, translated)
  }
}

function update (fileName, txt) {
  const p = resolve(cwd, 'locales', fileName + '.js')
  let str = readFileSync(p).toString()
  // Find the entry section
  const entryReg = new RegExp(`${entry}: {([^{}]+)}`, 'm')
  const arr = str.match(entryReg)
  if (!arr) {
    throw new Error('no match')
  }
  let tar = arr[1]
  // Replace the line with the matching key
  const keyReg = new RegExp(`\\b${name}:\\s*['\`"].*?['\`"]`, 'm')
  if (!keyReg.test(tar)) {
    throw new Error('no such key in entry: ' + name)
  }
  tar = tar.replace(keyReg, `${name}: '${txt}'`)
  const rep = tar
  str = str.replace(arr[1], rep)
  writeFileSync(p, str)
}

run()
