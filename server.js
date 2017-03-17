import {red} from 'ansicolors';
import Hapi from 'hapi';
import {join} from 'path';
import role from './src/role';
import user from './src/user';

const server = new Hapi.Server({});

server.connection({
    host: 'localhost',
    port: 8000
});

// 注册插件
server.register([
    require('vision'),
    require('inert')
], (err) => {
    if (err) {
        console.log(red('error'), '注册出错', err.message);
        throw err;
    }

    // console.log('jade view path', join(__dirname, 'views'));
    // 初始化
    server.views({
        engines: {jade: require('jade')},
        path: join(__dirname, 'views')
    });

});

server.filters = [];
server.decorate('server', 'addFilter', (filter) => {
    server.filters.push(filter);
});

// 添加扩展，监听全局事件
server.ext('onRequest', async (request, reply) => {
    // request.setUrl('/happy');
    // console.log(red("error")); // 显示红色 log

    async function doFilters(reply) {
        if (server.filters.length > 0) {
            for (let filter of server.filters) {
                await filter(request, reply);
            }
        }
    }
    await doFilters();
    // 定义了filters字段和addFilter方法, 调用过滤器

    return reply.continue();
});

server.addFilter((req, reply) => {
    console.log('******* add filter 1');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('******* filter 1');
            resolve();
        }, 5 * 1000);
    });
});

server.addFilter(async (req, reply) => {
    console.log('******* add filter 2');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('******* filter 2');
            resolve();
        }, 10 * 1000);
    });
});

// 缓存
let catbox = require('./src/db/cache');
catbox.set({
    id: 'user',
    segment: 'weineel-server'
}, {
    name: 'weineel',
    age: 25
}, 10 * 60 * 1000, (err) => {
    if (err) {
        console.log(red('error'), err.message)
    }
});

/**
 * 路由 模块
 * */
role(server);
user(server);








server.route({
    method: 'GET',
    path: '/happy',
    handler: (request, reply) => {
        return reply('happy');
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

server.route({
    method: 'GET',
    path: '/views/jindex',
    handler: function (req, reply) {
        return reply.view('jindex');
    }
});

server.route({
    method: 'GET',
    path: '/views/index',
    handler: function (req, reply) {
        return reply.view('index');
    }
});


// 静态文件 inert
server.route({
    method: 'GET',
    path: '/asset/{param*}',
    handler: {
        directory: {
            path: join(__dirname, 'asset'), // 文件路径
            redirectToSlash: true,
            index: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/html/{param*}',
    handler: {
        directory: {
            path: join(__dirname, 'views'), // 文件路径
            redirectToSlash: true,
            index: true
        }
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
