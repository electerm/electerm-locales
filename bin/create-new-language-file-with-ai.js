/**
 * Create a new language file using AI translation
 */
import { resolve } from 'path'
import { writeFileSync } from 'fs'
import countryFlagEmoji from 'country-flag-emoji'
import json5 from 'json5'

const {
  lang = 'en', // target language
  apiKey,
  baseURL = 'https://api.openai.com/v1',
  model = 'gpt-3.5-turbo'
} = process.env

// Load the English base file
const enFile = resolve(__dirname, '../locales/en_us.js')
const en = require(enFile)
const baseContent = en.lang

async function chatWithAI (prompt) {
  const response = await fetch(`${baseURL}/chat/completions`, {
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
    const cleanResult = result.replace(/'/g, '`').replace(/^\{|\}$/g, '').trim()
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

  console.log(`Creating ${lang} language file using ${baseURL} (${model})`)
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
    en: 'English',
    'zh-CN': '简体中文',
    es: 'Español',
    ru: 'Русский',
    tr: 'Türkçe',
    fr: 'Français',
    pt: 'Português',
    'zh-TW': '繁體中文',
    ja: '日本語',
    ar: 'العربية',
    de: 'Deutsch',
    ko: '한국어'
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
  const targetPath = resolve(__dirname, '..', `locales/${lang}_${lang}.js`)
  writeFileSync(targetPath, fileContent)

  console.log(`Successfully created: ${targetPath}`)
}

// Run with error handling
create().catch(err => {
  console.error('Failed to create language file:', err)
  process.exit(1)
})
