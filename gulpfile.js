var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var karma = require('gulp-karma');
var protractor = require('gulp-protractor');

var paths = require('./paths.js');

gulp.task('clean',function(){
	return gulp
		.src(paths().build,{read:false})
		.pipe(clean())
	;
});

gulp.task('build',function(){
	return gulp
		.src(paths().scripts.src)
		.pipe(concat(paths().scripts.dest))
		.pipe(gulp.dest(paths().build))
		.pipe(concat(paths().scripts.dest_min))
		.pipe(uglify())
		.pipe(gulp.dest(paths().build))
	;
});

gulp.task('watch',function(){
	return gulp.watch(paths().scripts.src,['build']);
});

gulp.task('dev',function(){
	return gulp.watch([
		paths().scripts.src,
		paths().scripts.tests.unit.src
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

gulp.task('e2e',function(){
  return gulp
    .src(paths().scripts.tests.e2e.src)
    .pipe(protractor.protractor({
      configFile: 'protractor.config.js',
      args: ['--baseUrl', 'http://localhost:30000']
    }))
    .on('error',function(error){throw new Error(error);});
})

gulp.task('default',['clean','karma','build']);

