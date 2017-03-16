/**
 * Created by weineel on 2017/3/16.
 */

import user from './user';

let path = '/user';

export default async(server) => {
    user(server, path);
}
