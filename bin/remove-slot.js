import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const localesDir = path.join(__dirname, '..', 'locales')

const { entry = '', name = '' } = process.env

if (!entry || !name) {
  console.error('Please provide both entry and name as environment variables.')
  process.exit(1)
}

async function removeSlot () {
  try {
    const files = await fs.readdir(localesDir)

    for (const file of files) {
      if (path.extname(file) === '.js') {
        const filePath = path.join(localesDir, file)

        try {
          let content = await fs.readFile(filePath, 'utf8')

          // Find the specified entry
          const entryRegex = new RegExp(`${entry}:\\s*{([^}]+)}`, 'g')
          content = content.replace(entryRegex, (match, entryContent) => {
            // Remove the specified name from the entry
            const lines = entryContent.split('\n')
            const filteredLines = lines.filter(line => !line.trim().startsWith(`${name}:`))
            return `${entry}: {\n${filteredLines.join('\n')}}`
          })

          await fs.writeFile(filePath, content, 'utf8')
          console.log(`Updated ${file}: removed '${name}' from '${entry}'`)
        } catch (err) {
          console.error(`Error processing file ${file}:`, err)
        }
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err)
  }
}

removeSlot()
