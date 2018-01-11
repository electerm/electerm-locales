const gulp = require('gulp')
const syncy = require('syncy')
const {syncTo} = require('./config.default')
const mkdirp = require('mkdirp')
const fs = require('fs')
const watch = require('gulp-watch')
const run = require('run-sequence')

console.log('syncTo', syncTo)
gulp.task('sync', function() {
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
    './locales/*'
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
    //base: 'base_path',
    // Remove all files from dest that are not found in src. Default: true
    //updateAndDelete: true,
    // Never remove js files from destination. Default: false
    //ignoreInDest: './src/**/*'
  })
    .then(() => console.log('sync ok'))
    .catch(e => console.log(e))
})

gulp.task('watch-extend', function() {
  watch(['./locales/*'], function() {
    run('sync')
  })
})

gulp.task('watch', ['watch-extend'])

gulp.task('default', ['sync', 'watch'])
