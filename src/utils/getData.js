/**
 * It takes a data path and returns the data
 * @param siteData - The site data object.
 * @param dataPath - The path to the data file, relative to the src/data directory.
 * @returns The data from the dataPath
 */
import _ from 'lodash';

export default function getData(siteData, dataPath) {
    dataPath = _.trim(dataPath, '/');
    if (_.startsWith(dataPath, 'src/data/')) {
        dataPath = dataPath.replace('src/data/', '');
    }
    // remove extension
    dataPath = dataPath.replace(/\.\w+$/, '');
    const path = dataPath.split('/');
    return _.get(siteData, path);
}