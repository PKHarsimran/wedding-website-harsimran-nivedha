'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ basename: 'styles.min' }))
        .pipe(gulp.dest('./css'));
});

// Minify JS
gulp.task('minify-js', function () {
    return gulp.src('./js/scripts.js')
        .pipe(uglify())
        .pipe(rename({ basename: 'scripts.min' }))
        .pipe(gulp.dest('./js'));
});

// Watch SCSS files for changes
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

// Default task to run both 'sass' and 'minify-js'
gulp.task('default', gulp.series('sass', 'minify-js'));
