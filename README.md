# electerm-locales

[![Test](https://github.com/electerm/electerm-locales/actions/workflows/test.yml/badge.svg)](https://github.com/electerm/electerm-locales/actions/workflows/test.yml)

English | [简体中文](./README.zh-CN.md)

[electerm](https://electerm.org) multi-language support pack.

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

## Supported languages & creators

- 🇺🇸 [English](locales/en_us.js): [@zxdong262](https://github.com/zxdong262)
- 🇨🇳 [简体中文](locales/zh_cn.js): [@zxdong262](https://github.com/zxdong262)
- 🇧🇷 [Português do Brasil](locales/pt_br.js): [@Meirinaldo Júnior](https://github.com/meirinaldojunior)
- 🇷🇺 [русский](locales/ru_ru.js): [@Vasiliy](https://github.com/TheLetslook)
- 🇪🇸 [Español](locales/es_es.js): Federico Pereira <fpereira@cnsoluciones.com>
- 🇫🇷 [Français](locales/fr_fr.js): [@Damien Mosse](https://github.com/damosse31)
- 🇹🇷 [Türkçe](locales/tr_tr.js): [@Nazım Gediz Aydınoğmuş](https://github.com/gediz)
- 🇭🇰 [繁體中文](locales/zh_tw.js): [@ycku](https://github.com/ycku)
- 🇯🇵 [日本語](locales/ja_jp.js): [@hououinkami](https://github.com/hououinkami)
- 🇰🇷 [한국어](locales/ko_kr.js): [@jooy2](https://github.com/jooy2)
- 🇩🇪 [german](locales/de_de.js): [@Hope-IT-Works](https://github.com/Hope-IT-Works)
- 🇮🇩 [Bahasa Indonesia](locales/id_id.js): [@hazekezia](https://github.com/hazekezia)
- 🇵🇱 [Polski](locales/pl_pl.js): [@milocha](https://github.com/milocha)
- 🇭🇺 [Magyar](locales/hu_hu.js): [@palsanyi](https://github.com/palsanyi)

## Contributors

[https://github.com/electerm/electerm-locales/graphs/contributors](https://github.com/electerm/electerm-locales/graphs/contributors)
