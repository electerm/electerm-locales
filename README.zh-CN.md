# electerm-locales

[![Build Status](https://travis-ci.org/electerm/electerm-locales.svg?branch=release)](https://travis-ci.org/electerm/electerm-locales)

[English](./README.md) | 简体中文

[electerm](https://electerm.html5beta.com) 多语言支持包。

🇺🇸 🇨🇳 🇧🇷 🇷🇺 🇪🇸 🇫🇷 🇹🇷 🇯🇵 🇰🇷 🇹🇼 🇩🇪 🇮🇩

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

## 创建新语言文件的脚本

为了让工作更轻松，我创建了一个脚本来帮助创建语言文件，它使用 AI API 翻译所有条目并创建新的语言文件。

```bash
# 从 siliconflow.cn 或 deepseek.com 获取 apiKey
# lang={语言代码} url="{api 地址}" model="{模型名称}" apiKey={apiKey} node bin/create-new-language-file-with-ai.js
# 然后它会在 locales 文件夹中创建 {语言代码}_{语言代码}.js

# 例如：
# 这将创建德语语言文件 `locales/de_de.js`
lang=de url='https://api.siliconflow.cn/v1/chat/completions' model='deepseek-ai/DeepSeek-V2.5' apiKey=xxxx node bin/create-new-language-file-with-ai.js
# 然后你可以审查和编辑以确保每个条目都正确
```

## 使用 AI API 添加新条目

你当然可以逐个翻译，我也提供了一个脚本来完成它。

```bash
# entry="{一级条目名称}" name="{属性名称}" text="{原始语言的文本}" url="{api 地址}" model="{模型名称}" apiKey={apiKey} node bin/translate-with-ai.js

# 示例：
entry=setting name=saveTerminalLogToFile text="save terminal log to file" url='https://api.siliconflow.cn/v1/chat/completions' model='deepseek-ai/DeepSeek-V2.5' apiKey=xxxx node bin/translate-with-ai.js

# 然后它会使用 AI 翻译将 saveTerminalLogToFile 条目添加到 setting 命名空间下的所有语言文件中

## 从所有文件中删除条目
entry=setting name=disableSshHistory node bin/remove-slot.js

```

## 更新所有文件中的现有条目

要更新所有语言文件中现有条目的值（针对给定的命名空间和键），请使用提供的脚本：

```bash
# entry="{命名空间}" name="{键}" data='{"en":"new English text", "zh-CN":"新的中文", ...}' node bin/update-entry.js

# 示例：更新 "setting" 命名空间下键 "saveTerminalLogToFile" 的值
entry=setting name=saveTerminalLogToFile data='{"en":"Save terminal log to file (updated)", "zh-CN":"保存终端日志到文件（已更新）"}' node bin/update-entry.js

# 仅限更新特定语言（例如，仅英语和中文）：
entry=setting name=saveTerminalLogToFile to="en,zh-CN" data='{"en":"Save terminal log to file (updated)", "zh-CN":"保存终端日志到文件（已更新）"}' node bin/update-entry.js
```

如果键在任何文件中不存在，脚本将抛出错误。

## 使用代理

```bash
cp sample.env .env
# 然后编辑 .env，添加 socks 代理
```

## 支持的语言和创建者

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

## 贡献者

[https://github.com/electerm/electerm-locales/graphs/contributors](https://github.com/electerm/electerm-locales/graphs/contributors)
