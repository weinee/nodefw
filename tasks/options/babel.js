/// 用于转换代码
module.exports = {
    options: {
        sourceMap: true,
        presets: ['es2015', 'stage-0']
    },
    dist: {
        files: {
          "dist/app.js": "./app.js"
        }
    }
}
