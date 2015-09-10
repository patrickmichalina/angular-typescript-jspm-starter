var gulp = require('gulp');

/*
	Bundle the example project
*/
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
		.pipe(gulp.dest('dist'));
});

gulp.task('dist', gulp.parallel('bundle', 'index'));