module.exports = function () {
	return {
		build: 'build/',
		scripts: {
			src: ['src/*.js'],
			dest: 'scripts.js',
			dest_min: 'scripts.min.js',
			tests: {
				src: ['test/*.js']
			}
		},
		styles: {
			src: 'less/**/*.less'
		}
	};
};
