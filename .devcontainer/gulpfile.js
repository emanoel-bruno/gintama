'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var gulpCopy = require('gulp-copy');


const browserslist = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10',
];

gulp.task('styles', function () {
  return gulp
    .src(
      [
        'node_modules/animate.css/*.min.css',
        'node_modules/tooltipster/dist/css/*.min.css',
      ],
      { base: 'node_modules' }
    )
    .pipe(autoprefixer({ browsers: browserslist }))
    .pipe(concatCss('bundle.css'))
    .pipe(csso())
    .pipe(gulp.dest('src/css'))
    .pipe(gulpCopy('/home/dev/src/dist'));
});

gulp.task('scripts', function () {
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/waypoints/lib/jquery.waypoints.min.js',
      'node_modules/tooltipster/dist/js/tooltipster.bundle.min.js',
      'node_modules/tooltipster/dist/js/plugins/tooltipster/SVG/tooltipster-SVG.min.js',
      'node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
      'node_modules/normalize/lib/normalize.js',
      'node_modules/respond.js/dest/respond.matchmedia.addListener.min.js',
      'node_modules/respond.js/dest/respond.min.js',
      'node_modules/selectivizr/selectivizr.js',
      'node_modules/html5shiv/dist/html5shiv.min.js',
    ])
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(gulpCopy('/home/dev/src/dist'))
});

gulp.task('pages', function () {
  return gulp
    .src(['./src/**/*.html'])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest('src/dist/src'));
});

gulp.task('clean', () => del(['src/dist']));

gulp.task('copy', ['clean'], function () {
  return gulp.src('src/**/*').pipe(gulp.dest('src/dist/src'));
});

gulp.task('default', ['copy'], function () {
  runSequence('styles', 'scripts', 'pages');
});
