var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var karma = require('gulp-karma');

var paths = {
	build: 'build/',
	scripts: {
		src: 'src/*.js',
		dest: 'scripts.js',
		dest_min: 'scripts.min.js',
		tests: {
			src: 'test/*.js'
		}
	},
	styles: {}
};

gulp.task('clean',function(){
	return gulp
		.src(paths.build,{read:false})
		.pipe(clean())
	;
});

gulp.task('build',function(){
	return gulp
		.src(paths.scripts.src)
		.pipe(concat(paths.scripts.dest))
		.pipe(gulp.dest(paths.build))
		.pipe(concat(paths.scripts.dest_min))
		.pipe(uglify())
		.pipe(gulp.dest(paths.build))
	;
});

gulp.task('watch',function(){
	return gulp.watch(paths.scripts.src,['build']);
});

gulp.task('dev',function(){
	return gulp.watch([
		paths.scripts.src,
		paths.scripts.tests.src
	],['karma','build']);
});

gulp.task('karma',function(){
	return gulp
		.src('foobar/')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error',function(e){
			console.log(e);
			this.emit('end');
		})
	;
});

gulp.task('default',['clean','karma','build']);

