module.exports = function (grunt) {

	//Builds external libraries minified js 
	grunt.registerTask('buildlib', 'Create lib.min.js asset', [
		'clean:baseLibs',
		'curl-dir:test',
		'concat:lib',
		'uglify:lib'
	]);


	//Builds everything
	grunt.registerTask('build', 'Creates minified libraries version', function () {
		grunt.task.run(['buildlib']);
	});

}