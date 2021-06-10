import _ from 'lodash';

/**
 * Get the page at the provided `filePath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} filePath The file path to find the page by
 * @return {Object}
 */
export default function getPageByFilePath(pages, filePath) {
    filePath = _.trim(filePath, '.md');
    const urlPath = filePath.replace(/^\/?content\/pages\//, '');

<<<<<<< HEAD
    return _.find(pages, (page) => {
=======
    return _.find(pages, page => {
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
        const pageUrlPath = _.trim(_.get(page, '__metadata.urlPath'), '/');
        return urlPath === pageUrlPath;
    });
}
