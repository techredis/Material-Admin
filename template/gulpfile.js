'use strict'
var gulp = require('gulp');
var requireDir = require('require-dir');
// var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
requireDir('gulp-tasks');



gulp.task('mdc-default', function () {
    return gulp.src('./assets/scss/**/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded', includePaths: './node_modules'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./assets/css'));
  });
  gulp.task('components', function () {
    return gulp.src('./assets/scss/**/components.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded', includePaths: './node_modules'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./assets/css'));
  });

  gulp.task('mdc-layout', function () {
    return gulp.src('./assets/scss/**/mdc-layout.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded', includePaths: './node_modules'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./assets/css'));
  });

  gulp.task('default', gulp.series('mdc-default', 'components','mdc-layout'));
  
  // gulp.task('default', gulp.series('mdc-layout'));
// gulp.task('default', gulp.series('serve'));