/**
 * Created by weineel on 2017/3/16.
 */
import {join} from 'path';

export default (server, path) => {
    server.route({
        method: 'GET',
        path: join(path, 'user'),
        handler: (request, reply) => {
            let key = {
                id: 'user',
                segment: 'weineel-server'
            };
            server.catbox.get(key, (err, cached) => {
                server.catbox.set(key, cached.item, 10 * 1000, (err) => {
                    if (err) {
                        console.log(err.message);
                    }
                });
                reply(`name: ${cached.item.name}, age: ${cached.item.age}, ttl: ${cached.ttl}`);
            });
        }
    });
}
