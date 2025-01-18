/**
 * Create a new language file using AI translation
 */
import { resolve } from 'path'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import countryFlagEmoji from 'country-flag-emoji'
import json5 from 'json5'

// Languages already supported in translate-with-ai.js
const existingSupportedLangs = {
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
  ko: 'ko_kr'
}

// Top 10 languages not yet supported but widely used
const newSupportedLangs = {
  it: 'it_it', // Italian
  nl: 'nl_nl', // Dutch
  pl: 'pl_pl', // Polish
  sv: 'sv_se', // Swedish
  vi: 'vi_vn', // Vietnamese
  id: 'id_id', // Indonesian
  th: 'th_th', // Thai
  hi: 'hi_in', // Hindi
  bn: 'bn_bd', // Bengali
  fa: 'fa_ir' // Persian
}

const {
  lang = 'en', // target language
  apiKey,
  baseUrl = 'https://api.deepseek.com/v1/chat/completions',
  model = 'deepseek-chat'
} = process.env

// Verify if the language is supported and not already translated
if (!newSupportedLangs[lang]) {
  if (existingSupportedLangs[lang]) {
    console.error(`Language '${lang}' is already supported. Please choose a new language to translate.`)
  } else {
    console.error(`Language '${lang}' is not in the list of new languages to support. Supported new languages are: ${Object.keys(newSupportedLangs).join(', ')}`)
  }
  process.exit(1)
}

// Load the English base file
const enFile = resolve(__dirname, '../locales/en_us.js')
const enContent = readFileSync(enFile, 'utf-8')
const enMatch = enContent.match(/const\s+lang\s*=\s*(\{[\s\S]*?\n\})/)
if (!enMatch) {
  throw new Error('Unable to parse English language file')
}
const baseContent = json5.parse(enMatch[1])

async function chatWithAI (prompt) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  })

  if (!response.ok) {
    throw new Error(`AI API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

async function translateSection (namespace, content) {
  const prompt = `As a professional translator, please translate this JSON section for a terminal application UI.
This is the "${namespace}" section of the UI.
Source content:
${JSON.stringify(content, null, 2)}

Requirements:
1. Translate all values (right side of colons) to ${lang} language
2. Keep all keys (left side of colons) unchanged
3. Maintain JSON structure exactly
4. Keep technical terms consistent
5. Preserve any variables or placeholders (like {name}, %s, etc.)
6. Replace any single quotes (') with backticks (\`) in translations
7. Keep translations concise and suitable for UI
8. Return only the translated JSON object, no explanations

Translate to ${lang} and return only the JSON object.`

  try {
    const result = await chatWithAI(prompt)
    // Clean the response to ensure it's valid JSON
    const cleanResult = result.replace(/'/g, "'").replace(/^\{|\}$/g, '').trim()
    // Parse and validate
    const parsed = json5.parse(`{${cleanResult}}`)
    return parsed
  } catch (err) {
    console.error(`Error translating ${namespace}:`, err)
    throw err
  }
}

async function create () {
  if (!apiKey) {
    throw new Error('API key is required. Set it in env variable apiKey')
  }

  const targetPath = resolve(__dirname, '..', `locales/${newSupportedLangs[lang]}.js`)
  if (existsSync(targetPath)) {
    console.error(`Target file ${targetPath} already exists. Please remove it first if you want to recreate.`)
    process.exit(1)
  }

  console.log(`Creating ${lang} language file using ${baseUrl} (${model})`)
  console.log('This may take a while, please wait...')

  const translatedContent = {}
  const namespaces = Object.keys(baseContent)

  for (const namespace of namespaces) {
    console.log(`Translating namespace: ${namespace}`)
    translatedContent[namespace] = await translateSection(namespace, baseContent[namespace])
    // Add a delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  // Get language name based on code
  const langNames = {
    it: 'Italiano',
    nl: 'Nederlands',
    pl: 'Polski',
    sv: 'Svenska',
    vi: 'Tiếng Việt',
    id: 'Bahasa Indonesia',
    th: 'ไทย',
    hi: 'हिन्दी',
    bn: 'বাংলা',
    fa: 'فارسی'
  }

  // Get flag emoji
  let emo = countryFlagEmoji.get(lang.toUpperCase())
  emo = emo ? emo.emoji : ''

  // Create the new language file content
  const fileContent = `
/**
 * language: ${langNames[lang] || lang}
 */
const lang = ${json5.stringify(translatedContent, null, 2)}

module.exports = {
  lang,
  name: '${langNames[lang] || lang}',
  match: '${lang}',
  flag: '${emo}'
}
`

  // Write the file
  writeFileSync(targetPath, fileContent)
  console.log(`Successfully created: ${targetPath}`)
}

// Run with error handling
create().catch(err => {
  console.error('Failed to create language file:', err)
  process.exit(1)
})
