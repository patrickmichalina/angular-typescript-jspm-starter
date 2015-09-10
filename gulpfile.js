var gulp = require('gulp');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();

gulp.task('bundle', function(cb) {
	var Builder = require('systemjs-builder');
	var builder = new Builder();
	builder.reset();

	builder.loadConfig("./config.js")
		.then(function() {
			return builder.buildSFX("app", "dist/build.min.js", { minify: true });
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
	return gulp.src('index-bundle.html')
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./app/**/*.*").on('change', browserSync.reload);
});

gulp.task('dist', gulp.parallel('bundle', 'index'));

gulp.task('serve-dist', gulp.series('dist', function(){
	browserSync.init({
        server: "./dist"
    });
}))

gulp.task('default', gulp.series('serve'));