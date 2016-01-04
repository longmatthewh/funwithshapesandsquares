var gulp = require('gulp');
var less = require('gulp-less');
var nano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var transpile = require('gulp-es6-transpiler');
var jshint = require('gulp-jshint');
var lesshint = require('gulp-lesshint');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('less', function () {
    return gulp.src('src/less/**/*.less')
        .pipe(less())
        .pipe(nano())
        .pipe(gulp.dest('css'));
});

gulp.task('jsmin', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(transpile())
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('jshint', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('lesshint', function () {
    return gulp.src('src/less/**/*.less')
        .pipe(lesshint())
        .pipe(lesshint.reporter())
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['jshint','jsmin']);
    gulp.watch('src/less/**/*.less', ['lesshint', 'less']);
});