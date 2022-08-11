/**
 * If the url starts with a hash, http, or https, return the url as is. Otherwise, use the
 * gatsbyWithPrefix function
 * @param url - The URL to be prefixed.
 * @returns A function that takes a url as an argument and returns the url if it is falsy, starts with
 * a #, or starts with http:// or https://. Otherwise, it returns the url with the gatsby prefix.
 */
const {
    withPrefix: gatsbyWithPrefix
} = require("gatsby");
const _ = require('lodash');

export default function withPrefix(url) {
    if (!url) {
        return url;
    }

    if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
        return url;
    }
    return gatsbyWithPrefix(url);
}