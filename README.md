# electerm-locales

[![Build Status](https://travis-ci.org/electerm/electerm-locales.svg?branch=release)](https://travis-ci.org/electerm/electerm-locales)

[electerm](https://electerm.html5beta.com) multi-language support pack.

## dev

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

## Supported languages & Contributors

- [English](locales/en_us.js): [@zxdong262](https://github.com/zxdong262)
- [Chinese](locales/zh_cn.js): [@zxdong262](https://github.com/zxdong262)
- [Português do Brasil](locales/pt_br.js): [@Meirinaldo Júnior](https://github.com/meirinaldojunior)
- [русский](locales/ru_ru.js): [@Vasiliy](https://github.com/TheLetslook)
- [Español](locales/es_es.js): Federico Pereira <fpereira@cnsoluciones.com>
