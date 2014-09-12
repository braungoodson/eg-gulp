module.exports = function () {
	return {
		build: 'build/',
		scripts: {
			src: ['src/*.js'],
			dest: 'scripts.js',
			dest_min: 'scripts.min.js',
			tests: {
				unit: {
          src: ['test/*Spec.js']
        },
        e2e: {
          src: ['test/*Suite.js']
        }
			}
		},
		styles: {}
	};
};
