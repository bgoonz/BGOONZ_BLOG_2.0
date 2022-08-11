/**
 * It takes a string like `color: red; font-size: 12px;` and returns an object like `{color: 'red',
 * fontSize: '12px'}`
 * @param styleAttr - The style attribute string to convert to an object.
 * @returns An object with the style attributes as keys and the values as values.
 */
import _ from "lodash";

export default function toStyleObj(styleAttr) {
    return styleAttr.split(';').reduce((accumulator, pair) => {
        pair = pair.trim();
        if (_.isEmpty(pair)) {
            return accumulator;
        }
        const index = pair.indexOf(':');
        if (index === -1) {
            throw new Error('Could not split style attribute into names and values');
        }
        const name = _.camelCase(pair.substring(0, index).trim());
        accumulator[name] = pair.substring(index + 1).trim();
        return accumulator;
    }, {});
}
