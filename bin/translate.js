
const puppeteer = require('puppeteer')

const glob = {
  browser: null,
  page: null
}
async function init (from, lang, reusePage) {
  if (reusePage && glob.page) {
    return glob
  }
  const launchOptions = {
    headless: false,
    args: ['--start-maximized']
  }
  const { PROXY } = process.env
  if (PROXY) {
    launchOptions.args.push(`--proxy-server=${PROXY}`)
  }
  const browser = await puppeteer.launch(launchOptions)
  const page = await browser.newPage()

  // set viewport and user agent (just in case for nice viewing)
  await page.setViewport({ width: 1366, height: 768 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  await page.goto(`https://translate.google.com/?sl=${from}&tl=${lang}&text=d&op=translate`)

  // detect the source textarea for input data (source string)
  await page.waitFor(() => {
    const srcSelector = ['[aria-label="Source text"]', '#source']
    return document.querySelectorAll(srcSelector.join(', ')).length
  })
  await page.waitFor(1000)
  glob.browser = browser
  glob.page = page
  return glob
}

async function clear (page, selector) {
  await page.evaluate(selector => {
    document.querySelectorAll(selector)[0].value = ''
  }, selector)
}

exports.translate = async function ({
  text, from, to, reusePage = true
}) {
  const srcSelector = ['[aria-label="Source text"]', '#source']
  const {
    page
  } = await init(from, to, reusePage)
  const sel = srcSelector.join(', ')
  await clear(page, sel)
  await page.waitFor(1000)
  try {
    await page.type(srcSelector[0], text)
  } catch (e) {
    await page.type(srcSelector[1], text)
  }

  // wait for the result container available
  await page.waitFor(() => {
    const tarSelectror = ['[data-phrase-index] span', '.result-shield-container']
    return document.querySelectorAll(tarSelectror.join(', ')).length
  })
  await page.waitFor(3000)

  // get the result string (translated text)
  const translatedResult = await page.evaluate(() => {
    const tarSelectror = ['[data-phrase-index] span', '.result-shield-container']
    return document.querySelectorAll(tarSelectror.join(', '))[0].textContent
  })
  if (!reusePage) {
    glob.browser.close()
  }
  return translatedResult
}

exports.endTranslate = () => {
  glob.browser.close()
}
