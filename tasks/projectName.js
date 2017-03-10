
module.exports = function(grunt){
	grunt.registerTask('projectName', 'app.js 保存', function(){
		// 输出项目名
		grunt.log.write('app.js 保存: ' + grunt.config.get('pkg').name);
	});
}
