var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: {
    source: ['./scss/**/*.scss'],
    main: './scss/ionic.app.scss',
    dest: './www/css/',
    ext: '.min.css'
  },
  fac: {
    source: './src-lib/**/*.js',
    main: './src-lib/fac_fire.js',
    dest: './www/lib/facfire-ng1/',
    output: 'facfire-ng1.js',
    ext: '.min.js',
    prod: {
      output: 'facfire-ng1.js',
      dest: './dist/'
    }
  }
};

gulp.task('default', ['sass', 'fac']);

gulp.task('sass', function(done) {
  gulp.src(paths.sass.main)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: paths.sass.ext }))
    .pipe(gulp.dest(paths.sass.dest))
    .on('end', done);
});

gulp.task('fac', function(done) {
  // Dev ENV
  gulp.src(paths.fac.source)
    .pipe(concat(paths.fac.output))
    .pipe(minify())
    .pipe(gulp.dest(paths.fac.dest))
    .on('end', done);

  // Prod ENV
  gulp.src(paths.fac.source)
    .pipe(concat(paths.fac.prod.output))
    .pipe(minify())
    .pipe(gulp.dest(paths.fac.prod.dest))
    .on('end', done);
});

gulp.task('watch', ['sass', 'fac'], function() {
  gulp.watch(paths.sass.source, ['sass']);
  gulp.watch(paths.fac.source, ['fac']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

// fix ionic2 CLI Gulp bug
gulp.task('serve:before', ['default', 'watch']);