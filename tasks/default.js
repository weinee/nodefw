  /// 自定义任务
  
module.exports = function(grunt){
	grunt.registerTask('default', '默认执行的任务', function(){
        grunt.log.write('Logging default...').ok();
    });
}
  