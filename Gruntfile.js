module.exports = function(grunt) {
	grunt.initConfig({
		browserify:{
			dist:{
				options:{
					transform: [['babelify', {presets: ['es2015']}]],
					browserifyOptions: {
						debug: true
					}
				},
				files: {
					'src/webapp/dist/appbuild.js': 'src/webapp/index.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify']);
};
