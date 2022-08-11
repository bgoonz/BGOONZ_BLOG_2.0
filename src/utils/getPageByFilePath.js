/**
 * It takes an array of page objects and a file path, and returns the page object that matches the file
 * path
 * @param pages - An array of page objects. All pages must have 'url' field.
 * @param filePath - The file path of the page you want to find.
 * @returns The page object that matches the filePath.
 */
import _ from 'lodash';


export default function getPageByFilePath(pages, filePath) {
    filePath = _.trim(filePath, '.md');
    const urlPath = filePath.replace(/^\/?src\/pages\//, '');

    return _.find(pages, page => {
        const pageUrlPath = _.trim(_.get(page, 'url'), '/');
        return urlPath === pageUrlPath;
    });
}