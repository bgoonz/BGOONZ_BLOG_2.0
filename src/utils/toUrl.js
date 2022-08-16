/**
 * If the url starts with a hash, http, or https, return the url as is. Otherwise, use the
 * gatsbyWithPrefix function
 * @param url - The URL to be prefixed.
 * @returns A function that takes a url as an argument and returns the url if it is falsy, starts with
 * a #, or starts with http:// or https://. Otherwise, it returns the url with the gatsby prefix.
 */
import _ from 'lodash';
import getPage from './getPage';

export default function toUrl(pages, pagePath) {
    if (_.startsWith(pagePath, '#')) {
        return pagePath;
    }
    // remove extension
    pagePath = pagePath.replace(/\.\w+$/, '');
    const page = getPage(pages, pagePath);
    if (!page) {
        throw new Error(`could not find page with path: ${pagePath}`);
    }
    return page.url;
}
