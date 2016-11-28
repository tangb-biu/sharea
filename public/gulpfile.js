var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function(){
	gulp.src('./js/*.js')
		.pipe(jsgint())
		.pipe(jshint.reporter('default'));
});

gulp.task('sass', function(){
	gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));
})

gulp.task('scripts', function(){
	gulp.src('./js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
})

gulp.task('default', function(){
	gulp.run('link', 'sass', 'script');

	gulp.watch('./js/*js', function(){
		gulp.run('lint', 'sass', 'script'); 
	})
})