/**
 * Created by weineel on 2017/3/16.
 */
import {join} from 'path';

export default (server, path) => {
    server.route({
        method: 'GET',
        path: join(path, 'manger'),
        handler: (request, reply) => {
            return reply('mange rasdfs');
        }
    });

    server.route({
        method: 'GET',
        path: join(path, 'manger1'),
        handler: (request, reply) => {
            return reply('manger122222');
        }
    });

    server.route({
        method: 'POST',
        path: join(path, 'manger'),
        handler: (request, reply) => {
            return reply('happy');
        }
    });
}
