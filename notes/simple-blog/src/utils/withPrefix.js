const _ = require('lodash');
const pathPrefix = require('../../content/data/config.json').path_prefix;

<<<<<<< HEAD
=======

>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
export default function withPrefix(url) {
    if (!url) {
        return url;
    }

    if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
        return url;
    }
    const basePath = _.trim(pathPrefix, '/');
    return '/' + _.compact([basePath, _.trimStart(url, '/')]).join('/');
}
