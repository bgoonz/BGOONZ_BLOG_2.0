/**
 * A short example showing how to reverse a string.
 */
function ReverseStringIterative(string) {
    if (typeof string !== 'string') {
        throw new TypeError('The given value is not a string');
    }
    let reversedString = '';
    let index;

    for (index = string.length - 1; index >= 0; index--) {
        reversedString += string[index];
    }

    return reversedString;
}

/**
 * JS disallows string mutation so we're actually a bit slower.
 *
 * @complexity O(n)
 */
function ReverseStringIterativeInplace(string) {
    if (typeof string !== 'string') {
        throw new TypeError('The given value is not a string');
    }

    const _string = string.split('');

    for (let i = 0; i < Math.floor(_string.length / 2); i++) {
        const first = _string[i];
        _string[i] = _string[_string.length - 1 - i];
        _string[_string.length - 1 - i] = first;
    }

    return _string.join('');
}

export { ReverseStringIterative, ReverseStringIterativeInplace };
