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