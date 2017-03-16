/**
 * Created by weineel on 2017/3/16.
 */
import {join} from 'path';

export default (server, path) => {
    server.route({
        method: 'GET',
        path: join(path, 'user'),
        handler: (request, reply) => {
            return reply('user rasdfs');
        }
    });
}
