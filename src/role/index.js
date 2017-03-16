/**
 * Created by weineel on 2017/3/16.
 */
import role from './role';
import manger from './manger';

let path = '/role';

export default async(server) => {
    role(server, path);
    manger(server, path);
}
