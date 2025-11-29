# electerm-locales

[![Test](https://github.com/electerm/electerm-locales/actions/workflows/test.yml/badge.svg)](https://github.com/electerm/electerm-locales/actions/workflows/test.yml)

English | [简体中文](./README.zh-CN.md)

[electerm](https://electerm.html5beta.com) multi-language support pack.

🇺🇸 🇨🇳 🇧🇷 🇷🇺 🇪🇸 🇫🇷 🇹🇷 🇯🇵 🇰🇷 🇹🇼 🇩🇪 🇮🇩

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

## Script to create a new language file

To make the work easier, I have created a script to help creating a language file, it uses AI API translate API to translate all entry and create a new language file.

```bash
# get apiKey from siliconflow.cn or deepseek.com
# lang={language code} url="{api url}" model="{model name}" apiKey={apiKey} node bin/create-new-language-file-with-ai.js
# then it will create a {language code}_{language code}.js in locales folder

# for example:
# this will create a German language file `locales/de_de.js`
lang=de url='https://api.siliconflow.cn/v1/chat/completions' model='deepseek-ai/DeepSeek-V2.5' apiKey=xxxx node bin/create-new-language-file-with-ai.js
# then you can review and edit to make sure every entry is right
```

## Add a new entry using AI api

You can certainly translate it one by one, I also provide a script to do it.

```bash
# entry="{level one entry name}" name="{the prop name}" text="{the text in original language}" url="{api url}" model="{model name}" apiKey={apiKey} node bin/translate-with-ai.js

# example:
entry=setting name=saveTerminalLogToFile text="save terminal log to file" url='https://api.siliconflow.cn/v1/chat/completions' model='deepseek-ai/DeepSeek-V2.5' apiKey=xxxx node bin/translate-with-ai.js

# then it will add saveTerminalLogToFile entry to all language file in setting namespace with AI translate

## remove a entry from all files
entry=setting name=disableSshHistory node bin/remove-slot.js

```

## Update an existing entry in all files

To update the value of an existing entry in all language files (for a given namespace and key), use the provided script:

```bash
# entry="{namespace}" name="{key}" data='{"en":"new English text", "zh-CN":"新的中文", ...}' node bin/update-entry.js

# Example: update the value for key "saveTerminalLogToFile" under "setting" namespace
entry=setting name=saveTerminalLogToFile data='{"en":"Save terminal log to file (updated)", "zh-CN":"保存终端日志到文件（已更新）"}' node bin/update-entry.js

# To limit update to specific languages (e.g., only English and Chinese):
entry=setting name=saveTerminalLogToFile to="en,zh-CN" data='{"en":"Save terminal log to file (updated)", "zh-CN":"保存终端日志到文件（已更新）"}' node bin/update-entry.js
```

The script will throw an error if the key does not exist in any file.

## Use proxy

```bash
cp sample.env .env
# then edit .env, add socks proxy
```

## Supported languages & creators

- 🇺🇸 [English](locales/en_us.js): [@zxdong262](https://github.com/zxdong262)
- 🇨🇳 [简体中文](locales/zh_cn.js): [@zxdong262](https://github.com/zxdong262)
- 🇧🇷 [Português do Brasil](locales/pt_br.js): [@Meirinaldo Júnior](https://github.com/meirinaldojunior)
- 🇷🇺 [русский](locales/ru_ru.js): [@Vasiliy](https://github.com/TheLetslook)
- 🇪🇸 [Español](locales/es_es.js): Federico Pereira <fpereira@cnsoluciones.com>
- 🇫🇷 [Français](locales/fr_fr.js): [@Damien Mosse](https://github.com/damosse31)
- 🇹🇷 [Türkçe](locales/tr_tr.js): [@Nazım Gediz Aydınoğmuş](https://github.com/gediz)
- 🇹🇼 [繁體中文](locales/zh_tw.js): [@ycku](https://github.com/ycku)
- 🇯🇵 [日本語](locales/ja_jp.js): [@hououinkami](https://github.com/hououinkami)
- 🇰🇷 [한국어](locales/ko_kr.js): [@jooy2](https://github.com/jooy2)
- 🇩🇪 [german](locales/de_de.js): [@Hope-IT-Works](https://github.com/Hope-IT-Works)
- 🇮🇩 [Bahasa Indonesia](locales/id_id.js): [@hazekezia](https://github.com/hazekezia)
- 🇵🇱 [Polski](locales/pl_pl.js): [@milocha](https://github.com/milocha)

## Contributors

[https://github.com/electerm/electerm-locales/graphs/contributors](https://github.com/electerm/electerm-locales/graphs/contributors)
