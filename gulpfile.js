
var gulp 		= require('gulp'),
	browserSync = require('browser-sync'),
	stylus 		= require('gulp-stylus'),
	nib 		= require('nib'),
	reload 		= browserSync.reload;


// styles
gulp.task('styles', function () {
	return gulp.src('styl/*.styl')
	.pipe(stylus({use: [nib()]}))
	.pipe(gulp.dest('css'));
});


// js
gulp.task('js', function () {
	return gulp.src('js/*js')
	.pipe(browserSync.reload({stream:true}));
});


// img
gulp.task('img', function () {
	return gulp.src('img/*')
	.pipe(browserSync.reload({stream:true}));
});


// start server
gulp.task('browser-sync', function() {
	browserSync.init(["*html"],{
		logLevel: "info",
		logConnections: true,
		notify: false,
		host: "192.123.456",
		port: 8000,
		open: true,
		//files: "app/css/*.css",	// BrowserSync can watch your files as you work
		server: {
			baseDir: "./" 			// Serve files
		}
	});
});


// refresh all browser
gulp.task('refresh', function () {
	browserSync.reload();
});


// task default
gulp.task('default', ['browser-sync'], function(){
	gulp.watch("styl/*.styl", ['styles']);
	gulp.watch("js/*", ['js']);
	gulp.watch("img/*", ['img']);
});