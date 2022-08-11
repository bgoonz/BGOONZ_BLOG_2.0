/**
 * If classnames returns a string, return it, otherwise return null
 * @param args - The arguments passed to the function.
 * @returns The function classNames is being returned.
 */
import classnames from 'classnames';

// A simple wrapper around classNames to return null, if no classes were generated
// Otherwise, original classNames returns empty string which causes class="" to be generated
export default function classNames(...args) {
    return classnames.call(this, ...args) || null;
}