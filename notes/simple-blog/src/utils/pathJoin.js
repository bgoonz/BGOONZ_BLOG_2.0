import _ from 'lodash';

export default function pathJoin(...pathParts) {
<<<<<<< HEAD
    const result = _.compact(pathParts)
        .join('/')
        .replace(/\/{2,}/g, '/');
=======
    const result = _.compact(pathParts).join('/').replace(/\/{2,}/g, '/');
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
    return result || '.';
}
