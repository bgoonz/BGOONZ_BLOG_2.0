import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import ActionLink from './ActionLink';

export default class Submenu extends React.Component {
    render() {
        const page = _.get(this.props, 'page', null);
        return (
            <ul className={_.get(this.props, 'menu_class', null)}>
            {_.map(_.get(this.props, 'submenu', null), (action, action_idx) => {
                const page_url = _.trim(_.get(page, 'url', null), '/');
                const action_url = _.trim(_.get(action, 'url', null), '/');
                return (
                  <li key={action_idx} className={classNames('menu-item', {'current': page_url === action_url, 'menu-button': _.get(action, 'style', null) !== 'link'})}>
                    <ActionLink {...this.props} action={action} />
                  </li>
                )
            })}
            </ul>
        );
    }
}
