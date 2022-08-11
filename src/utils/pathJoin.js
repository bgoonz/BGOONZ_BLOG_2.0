/**
 * It joins the given path parts, removes any empty parts, and replaces any double slashes with a
 * single slash
 * @param pathParts - An array of strings to join together.
 * @returns the result of joining the path parts with a slash, and then replacing any double slashes
 * with a single slash. If the result is an empty string, it returns a single dot.
 */
import _ from 'lodash';

export default function pathJoin(...pathParts) {
    const result = _.compact(pathParts).join('/').replace(/\/{2,}/g, '/');
    return result || '.';
}