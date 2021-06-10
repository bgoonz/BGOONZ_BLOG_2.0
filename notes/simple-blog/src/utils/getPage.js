import _ from 'lodash';

/**
 * Get the page at the provided `urlPath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */
export default function getPage(pages, urlPath) {
    urlPath = _.trim(urlPath, '/');
<<<<<<< HEAD
    return _.find(pages, (page) => {
=======
    return _.find(pages, page => {
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
        const pageUrlPath = _.trim(_.get(page, '__metadata.urlPath'), '/');
        return urlPath === pageUrlPath;
    });
}
