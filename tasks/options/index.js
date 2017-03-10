var glob = require('glob'),
	path = require('path'),
    join = path.join;

module.exports = function(grunt){
    var config = {
  	    // 可以直接引用到package.json
  	    pkg: grunt.file.readJSON('package.json')
    };

    var configPath = 'tasks/options';
    glob.sync('*', {cwd: configPath})
        .forEach(function(configFile) {
        var prop = configFile.replace(/\.js$/, '');
        if (prop != 'index')  config[prop] = require(join(__dirname, configFile));
    });
    return config;
}