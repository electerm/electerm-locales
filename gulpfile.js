const gulp = require('gulp')
const syncy = require('syncy')
const { syncTo } = require('./config.default')
const mkdirp = require('mkdirp')
const fs = require('fs')
const watch = require('gulp-watch')

console.log('syncTo', syncTo)
gulp.task('sync', function (done) {
  try {
    let state = fs.statSync(syncTo)
    if (!state.isDirectory()) {
      mkdirp(syncTo)
    }
  } catch (e) {
    console.log(e)
    mkdirp(syncTo)
  }

  syncy([
    './locales/*',
    './package.js*'
  ], syncTo, {
    // // Display log messages when copying and removing files
    verbose: true
    // // Or create your own function.
    // verbose: (stamp) => {
    //   // action - `copy` or `remove`
    //   // to - only for `copy` action
    //   console.log(stamp.action + ' | ' + stamp.from + ' | ' + stamp.to);
    // },
    // The base path to be removed from the path. Default: none
    // base: 'base_path',
    // Remove all files from dest that are not found in src. Default: true
    // updateAndDelete: true,
    // Never remove js files from destination. Default: false
    // ignoreInDest: './src/**/*'
  })
    .then(() => {
      console.log('sync ok')
      done()
    })
    .catch(e => {
      console.log(e)
      done()
    })
})

gulp.task('watch-extend', function () {
  watch(['./locales/*', './package.js*'], function () {
    gulp.task('sync')
  })
})

gulp.task('watch', gulp.series('watch-extend'))

gulp.task('default', gulp.series('sync', 'watch'))
