/**
 * Created by cinos81 on 16. 1. 12..
 */
var gulp = require('gulp');
var server = require('gulp-server-livereload');
var jasmine = require('gulp-jasmine');

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(server({
			livereload: true,
			directoryListing: true,
			open: true
		}));
});

gulp.task('jasmine_unitTesting', function () {
	return gulp.src('./spec/demospec.js')
		.pipe(jasmine({
			verbose:true
		}));
});

gulp.task('watch', function () {
	gulp.watch('./*.js',['jasmine_unitTesting']);
});

gulp.task('default', ['webserver','watch']);