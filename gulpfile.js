var gulp = require('gulp')
var sync = require('browser-sync')
var minify = require('gulp-html-minifier')

gulp.task('build', function (done) {
  gulp.src(['src/index.html'])
      .pipe(minify({collapseWhitespace: true}))
      .pipe(gulp.dest('bundle'))
      .on('end', function () {
        done()
      })
})

gulp.task('reload', function (done) {
  sync.reload()
  done()
})

gulp.task('serve', ['build'], function () {
  sync.init({ server: { baseDir: 'bundle' } })

  gulp.watch('src/index.html', ['build', 'reload'])
})
