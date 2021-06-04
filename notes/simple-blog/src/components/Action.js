import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class Action extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        return (
            <Link href={withPrefix(_.get(action, 'url', null))}
              {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
              {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
              className={classNames({'btn': _.get(action, 'style', null) !== 'link', 'btn--secondary': _.get(action, 'style', null) === 'secondary'})}>{_.get(action, 'label', null)}</Link>
        );
    }
}
