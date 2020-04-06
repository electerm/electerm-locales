/**
 * with this script to create a new language file with google-translate-open-api
 */

const { resolve } = require('path')
const { writeFileSync } = require('fs')
const _ = require('lodash')
const json5 = require('json5')
const countryFlagEmoji = require('country-flag-emoji')
const puppeteer = require('puppeteer')

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
  'Chinese Simplified': 'zh-cn',
  'Chinese Traditional': 'zh-tw',
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

const glob = {
  browser: null,
  page: null
}

async function init () {
  if (glob.page) {
    return glob
  }
  const launchOptions = { headless: false, args: ['--start-maximized'] }
  const browser = await puppeteer.launch(launchOptions)
  const page = await browser.newPage()

  // set viewport and user agent (just in case for nice viewing)
  await page.setViewport({ width: 1366, height: 768 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  await page.goto(`https://translate.google.com/#view=home&op=translate&sl=${from}&tl=${lang}`)

  // detect the source textarea for input data (source string)
  await page.waitForSelector('#source')
  await page.waitFor(1000)
  glob.browser = browser
  glob.page = page
  return glob
}

async function clear (page, selector) {
  await page.evaluate(selector => {
    document.querySelector(selector).value = ''
  }, selector)
}

async function translate ({
  text, from, to
}) {
  const {
    page
  } = await init()
  const sel = '#source'
  await clear(page, sel)
  await page.type(sel, text)

  // wait for the result container available
  await page.waitForSelector('.result-shield-container')
  await page.waitFor(3000)

  // get the result string (translated text)
  const translatedResult = await page.evaluate(() => {
    return document.querySelectorAll('.result-shield-container')[0].textContent
  })

  return translatedResult
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
      let txt = await translate({
        text: v,
        from: 'en',
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
  match: /${lang}/,
  flag: '${emo}'
}

`
  const p = resolve(__dirname, '..', `locales/${lang}_${lang}.js`)
  writeFileSync(p, tow)
  console.log('done => ', p)
  glob.browser.close()
}

create()
