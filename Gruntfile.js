module.exports = function(grunt) {
	
	grunt.initConfig((function() {
		
		var TEST_COUNT = 1;
		
		var config = {
			clean: {
				tests: []
			},
			kapocs: {
				tests: {
					options: {
						srcName: 'test/',
						cleanTmp: false
					}
				}
			},
			less: {
				tests: {
					files: {}
				}
			},
			typescript: {
				tests: {
					files: {}
				}
			},
			sas: {
				update: {}
			},
			shell: {
				update: {
					command: [
						'bower update',
						'bower prune',
						'bower install'
					].join('&&')
				}
			}
		};
		
		for (var i = 1; i <= TEST_COUNT; i++) {
			var folderPath = 'tmp/kapocs_asset_template/test' + i;
			var jsPath = folderPath + '/script/test.js';
			var cssPath = folderPath + '/style/test.css';
			
			config.clean.tests.push(jsPath);
			config.clean.tests.push(cssPath);
			
			config.less.tests.files[cssPath] = 'test/test' + i + '/_style.less';
			
			config.typescript.tests.files[jsPath] = 'test/test' + i + '/Main.ts';
		}
		
		return config;
	})());

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-kapocs');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-sas');
	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask('update', ['shell:update','sas:update']);
	grunt.registerTask('compile', ['clean:test1','typescript:test1','less:test1']);
	grunt.registerTask('default', ['compile']);
};