module.exports = function(grunt) {
	
	grunt.initConfig((function() {
		
		var TEST_COUNT = 1;
		
		var config = {
			clean: {
				tests: ['build', 'tmp']
			},
			kapocs: {
				tests: {
					assets: [{
						expand: true,
						cwd: 'test/assets',
						dot: true,
						src: ['**'],
						dest: 'build'
					}],
					assetTemplates: [{
						expand: true,
						cwd: 'test/asset_templates',
						dot: true,
						src: ['**'],
						dest: 'build'
					}, {
						expand: true,
						cwd: 'tmp/asset_templates',
						dot: true,
						src: ['**'],
						dest: 'build'
					}],
					templates: [{
						expand: true,
						cwd: 'test/templates',
						dot: true,
						src: ['**'],
						dest: 'build'
					}]
				}
			},
			less: {
				tests: {
					files: {}
				}
			},
			sas: {
				update: {}
			},
			shell: {
				tests: {
					command: ''
				},
				update: {
					command: ['bower prune', 'bower update', 'bower install'].join('&&')
				}
			}
		};
		
		for (var i = 1; i <= TEST_COUNT; i++) {
			var folderPath = 'tmp/asset_templates/test' + i;
			var jsPath = folderPath + '/script/test.js';
			var cssPath = folderPath + '/style/test.css';
			
			config.less.tests.files[cssPath] = 'test/test' + i + '/_style.less';
			
			if (config.shell.tests.command) config.shell.tests.command += '&&';
			config.shell.tests.command += '"node_modules/.bin/tsc" --out "' + jsPath + '" "test/test' + i + '/Main.ts"';
		}
		
		return config;
	})());
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-kapocs');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-sas');
	
	grunt.registerTask('update', ['shell:update', 'sas:update']);
	grunt.registerTask('compile', ['clean:tests', 'shell:tests', 'less:tests', 'kapocs:tests']);
	grunt.registerTask('default', ['compile']);
};