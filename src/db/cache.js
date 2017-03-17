/**
 * Created by weineel on 2017/3/17.
 */
import _ from 'lodash';

const Client = require('catbox').Client;

const creatCatch = _.once(() => {
    /// 在代码实现里可以找到支持的所有参数
    let catbox = new Client(require('catbox-memory'), {
        partition: 'weineel-server'
    });
    catbox.start((err) => {
        if (err) {
            console.log(err.message);
        }
    });
    return catbox;
});

module.exports = creatCatch();

