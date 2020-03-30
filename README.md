# electerm-locales

[![Build Status](https://travis-ci.org/electerm/electerm-locales.svg?branch=release)](https://travis-ci.org/electerm/electerm-locales)

[electerm](https://electerm.html5beta.com) multi-language support pack.

🇺🇸 🇨🇳 🇧🇷 🇷🇺 🇪🇸 🇫🇷 🇹🇷

## Dev

```bash
git clone git://github.com/electerm/electerm-locales.git
cd electerm-locales
npm i
cp config.sample.js config.js
npm start
# automatic sync locales/* to ../electerm/node_modules/electerm-locales/locales/ for test
# and add pre-push hook, do lint and test before every push
```

## Test

```bash
npm run test
# test only make sure all locale file keys and orders are match.
```

## Contribute

Just use `locales/en_us.js` as a example, fork this repo, add your edit, then submit a pull request.

Make sure you run `npm run test` before push.

## Add a new entry using google translate api

You can certainly translate it one by one, but I also provide a script to do it.

```bash
# entry="{level one entry name}" name="{the prop name}" text="{the text in original language}" original="{language code, default is en}"node bin/add-new-entry.js
# check https://github.com/hua1995116/google-translate-open-api/blob/master/src/language.ts for language code
# example:
entry=setting name=saveTerminalLogToFile text="save terminal log to file" original=en node bin/add-new-entry.js
```

## Supported languages & creators

- 🇺🇸[English](locales/en_us.js): [@zxdong262](https://github.com/zxdong262)
- 🇨🇳[中文](locales/zh_cn.js): [@zxdong262](https://github.com/zxdong262)
- 🇧🇷[Português do Brasil](locales/pt_br.js): [@Meirinaldo Júnior](https://github.com/meirinaldojunior)
- 🇷🇺[русский](locales/ru_ru.js): [@Vasiliy](https://github.com/TheLetslook)
- 🇪🇸[Español](locales/es_es.js): Federico Pereira <fpereira@cnsoluciones.com>
- 🇫🇷[Français](locales/fr_fr.js): [@Damien Mosse](https://github.com/damosse31)
- 🇹🇷[Türkçe](locales/tr_tr.js): [@Nazım Gediz Aydındoğmuş](https://github.com/gediz)

## Contributors

[https://github.com/electerm/electerm-locales/graphs/contributors](https://github.com/electerm/electerm-locales/graphs/contributors)
