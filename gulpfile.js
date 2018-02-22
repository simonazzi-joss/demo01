//jshint ignore:start
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
	"use strict";
	return gulp.src('source/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('moveFiles', function() {
	"use strict";
	gulp.src('source/html/*.html').pipe(gulp.dest('dist/html'));	//copia html
	gulp.src('source/css/*.css').pipe(gulp.dest('dist/css'));		//copia css
	gulp.src('source/js/*.js').pipe(gulp.dest('dist/js'));			//copia js

	gulp.src('source/img/*.*').pipe(gulp.dest('dist/img'));			//copia img
});
