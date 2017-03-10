
module.exports = function(grunt) {

  /// 配置插件选项
  grunt.initConfig(require('./tasks/options')(grunt));

/** 所有tasks下的目录引用都是相对于Gruntfile所在目录的 */
  /// load-grunt-tasks插件会从package.json中查找所有的 'grunt-' 开头的依赖并加载到grunt
  /// 批量执行grunt.loadNpmTasks()方法，
  require('load-grunt-tasks')(grunt);

  // 引用tasks目录，注册所有自定义任务
  grunt.loadTasks('./tasks');

/// 以下代码被 require('load-grunt-tasks')(grunt); 替代
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-concat');

/// 以下代码被移到tasks目录下
/// 注册任务序列, 添加任务
  // grunt.registerTask('test', ['jshint', 'qunit']);
  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};