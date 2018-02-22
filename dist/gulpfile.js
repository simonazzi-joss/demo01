//jshint ignore:start
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
	"use strict";
	return gulp.src('source/javascript/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('readyFile', function() {
	"use strict";
	gulp.src('*.html').pipe(gulp.dest('dist'));		//copia html
	gulp.src('*.css').pipe(gulp.dest('dist'));		//copia css
	gulp.src('*.js').pipe(gulp.dest('dist'));		//copia js

	gulp.src('img/*.*').pipe(gulp.dest('dist/img'));
});
