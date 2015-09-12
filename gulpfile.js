var gulp = require('gulp');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var htmlreplace = require('gulp-html-replace');

gulp.task('bundle', function(cb) {
	var Builder = require('systemjs-builder');
	var builder = new Builder();
	builder.reset();

	builder.loadConfig("./config.js")
		.then(function() {
			return builder.buildSFX("app", "dist/build.min.js", { minify: true })
				.then(function() { // Inject minified script into index
      				return gulp.src('dist/index.html')
        				.pipe(htmlreplace({'js': 'build.min.js'}))
        		.pipe(gulp.dest('dist/'));
    		});
		})		
		.then(function() {
			cb();
		})
		.catch(function(err) {
			console.log(err);
			cb(err);
		});
});

gulp.task('index', function(){
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('basic-bundle', function(){
	return gulp.src(['favicon.ico', 'robots.txt'])
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./",
		middleware: [historyApiFallback()],
		browser: "google chrome"
    });

    gulp.watch("./app/**/*.*").on('change', browserSync.reload);
});

gulp.task('dist', gulp.series('index', gulp.parallel('bundle', 'basic-bundle')));

gulp.task('serve-dist', gulp.series('dist', function(){
	browserSync.init({
        server: "./dist",
		middleware: [historyApiFallback()],
		browser: "google chrome",
		minify: true
    });
}))

gulp.task('default', gulp.series('serve'));