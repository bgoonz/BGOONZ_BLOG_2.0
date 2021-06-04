import React from 'react';
import _ from 'lodash';

import {getData, Link, withPrefix} from '../utils';

export default class BlogPostCategories extends React.Component {
    render() {
        let categories = _.get(this.props, 'categories', null);
        let container_class = _.get(this.props, 'container_class', null);
        let category_len = _.size(categories);
        return (
            <div className={container_class}>
              <span>In </span>
              {
              _.map(categories, (category, category_idx) => {
                  let category_data = getData(this.props.data, category);
                  return (
                    category_data.link ? (<React.Fragment key={category_idx + '.1'}>
                      <Link key={category_idx} href={withPrefix(category_data.link)}>{category_data.title}</Link>{(!(category_idx === category_len - 1)) && (', ')}
                    </React.Fragment>) : <React.Fragment key={category_idx + '.3'}>
                      <span key={category_idx + '.2'}>{category_data.title}</span>{(!(category_idx === category_len - 1)) && (', ')}
                    </React.Fragment>
                  )
              })}
            </div>
        );
    }
}
