/**
 * Update an entry in all language files using AI translation (single request).
 * Usage: entry=<entry> name=<key> text=<sourceText> url=<apiURL> model=<modelName> apiKey=<apiKey> to=<langs> node bin/update-translate-with-ai.js
 *   - entry: the section in the locale file (e.g., "app")
 *   - name: the key to update
 *   - text: the source value for translation
 *   - url, model, apiKey: for AI translation API
 *   - to: optional, comma-separated language codes (e.g., "en,zh-CN"), defaults to all supported
 */

import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

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
  pl: 'pl_pl'
}

const {
  entry = 'app',
  name = 'test1',
  text = 'whatever',
  url = 'https://api.deepseek.com/v1/chat/completions',
  model = 'deepseek-chat',
  apiKey,
  to = ''
} = process.env

async function chatWithAI (prompt) {
  const response = await fetch(url, {
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

async function getTranslations (text) {
  const prompt = `As a professional translator, please translate the following UI string for a terminal application:
Source text: "${text}"
Target languages:
${JSON.stringify(supported, null, 2)}
Please respond with ONLY a single-line JSON object in this exact format:
{"en": "original text", "zh-CN": "translation", ...}
No explanation or additional text needed.`

  try {
    const r = await chatWithAI(prompt)
    const result = r.replace(/'/g, '`')
    // Validate that the response is valid JSON
    JSON.parse(result)
    return result.trim()
  } catch (err) {
    console.error('Translation error:', err)
    throw new Error('Failed to get valid translations')
  }
}

async function updateEntries (translations) {
  // Only update specified languages if 'to' is set
  const keys = to ? to.split(',') : Object.keys(supported)
  const data = JSON.parse(translations)
  for (const k of keys) {
    if (!(k in data)) {
      console.error(`No translation for language ${k}`)
      continue
    }
    const cmd = `entry=${entry} name=${name} text='${data[k]}' to=${k} node bin/update-entry.js`
    try {
      const { stdout, stderr } = await execAsync(cmd)
      if (stderr) console.error('Command stderr:', stderr)
      if (stdout) console.log('Command output:', stdout)
    } catch (err) {
      console.error('Failed to execute command:', err)
      throw err
    }
  }
}

async function run () {
  if (!apiKey) {
    throw new Error('API key is required. Set it in env variable apiKey')
  }

  try {
    console.log('Getting translations...')
    const translations = await getTranslations(text)
    console.log('Translations received:', translations)

    console.log('Updating entries in language files...')
    await updateEntries(translations)

    console.log('Successfully updated entries in all language files')
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

run()
