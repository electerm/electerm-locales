# electerm-locales

[![Test](https://github.com/electerm/electerm-locales/actions/workflows/test.yml/badge.svg)](https://github.com/electerm/electerm-locales/actions/workflows/test.yml)

[English](./README.md) | 简体中文

[electerm](https://electerm.org) 多语言支持包。


## 开发

```bash
git clone git://github.com/electerm/electerm-locales.git
cd electerm-locales
npm i
cp config.sample.js config.js
npm start
# 自动同步 locales/* 到 ../electerm/node_modules/electerm-locales/locales/ 以便测试
# 并添加 pre-push 钩子，在每次推送前执行 lint 和 test
```

## 测试

```bash
npm run test
# 测试只是确保所有语言文件的键和顺序匹配
```

## 贡献

只需使用 `locales/en_us.js` 作为示例，fork 此仓库，添加你的编辑，然后提交 pull request。

确保在推送前运行 `npm run test`。


## 支持的语言和创建者

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

## 贡献者

[https://github.com/electerm/electerm-locales/graphs/contributors](https://github.com/electerm/electerm-locales/graphs/contributors)
