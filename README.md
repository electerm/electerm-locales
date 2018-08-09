# electerm-locales

[![Build Status](https://travis-ci.org/electerm/electerm-locales.svg?branch=release)](https://travis-ci.org/electerm/electerm-locales)

electerm multi-language support pack

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
## test
```bash
npm run test
# test only make sure all locale file keys and orders are match.
```

## contribute

just use `locales/en_us.js` as a example, fork this repo, add your edit, then submit a pull request.

make sure you run `npm run test` before push.

## contributors
- Português do Brasil (pt_br.js): [@Meirinaldo Júnior](https://github.com/meirinaldojunior)
