
module.exports = function(grunt) {

	/// 注册多个tasks
	grunt.registerTask('task1', '第一个task', function(){
		grunt.log.write('task1');
	});

	grunt.registerTask('task3', '第一个task', function(){
		grunt.log.write('task3');
	});
}
