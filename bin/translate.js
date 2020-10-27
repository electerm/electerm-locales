
const puppeteer = require('puppeteer')

const glob = {
  browser: null,
  page: null
}

async function init (from, lang, reusePage) {
  if (reusePage && glob.page) {
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
  await page.waitFor(2000)
  glob.browser = browser
  glob.page = page
  return glob
}

async function clear (page, selector) {
  await page.evaluate(selector => {
    document.querySelector(selector).value = ''
  }, selector)
}

exports.translate = async function ({
  text, from, to, reusePage = true
}) {
  const {
    page
  } = await init(from, to, reusePage)
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
  if (!reusePage) {
    glob.browser.close()
  }
  return translatedResult
}

exports.endTranslate = () => {
  glob.browser.close()
}
