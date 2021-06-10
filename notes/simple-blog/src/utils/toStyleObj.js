<<<<<<< HEAD
import _ from 'lodash';
=======
import _ from "lodash";
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

export default function toStyleObj(styleAttr) {
    return styleAttr.split(';').reduce((accumulator, pair) => {
        pair = pair.trim();
        if (_.isEmpty(pair)) {
            return accumulator;
        }
        let index = pair.indexOf(':');
        if (index === -1) {
            throw 'could not split style attribute into names and values';
        }
        let name = _.camelCase(pair.substring(0, index).trim());
        accumulator[name] = pair.substring(index + 1).trim();
        return accumulator;
    }, {});
}
