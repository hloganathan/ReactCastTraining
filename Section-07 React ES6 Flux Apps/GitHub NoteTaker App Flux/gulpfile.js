var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify  = require('gulp-uglify');
var minify = require('gulp-minify-css');

var SRC = 'src/js/main.js';
var CSS_SRC = './src/css/*.css'
var OUT = 'build.js';
var DEST = 'dist/js';

gulp.task('build', function(){
     gulp.src(SRC)
    .pipe(browserify({transform: 'reactify'})) // bundeling & transforming 
    .pipe(concat(OUT))
    .pipe(gulp.dest(DEST));
});

gulp.task('copyIndex', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copyCSS', function(){
  gulp.src('./src/css/*.css')
     .pipe(concat('main.css'))
    .pipe(minify({ keepBreaks: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'copyIndex', 'copyCSS']);
gulp.task('watch', function(){
  gulp.watch('src/**/*.*', ['default']);
});