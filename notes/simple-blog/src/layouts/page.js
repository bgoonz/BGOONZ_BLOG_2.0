import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
<<<<<<< HEAD
                <article className="page">
                    <div className="container container--md">
                        <header className="page__header">
                            <h1 className="page__title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                <div className="page__copy">
                  {markdownify(_.get(this.props, 'page.markdown', null))}
                </div>
              </div>
            </article>
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
            </Layout>
        );
    }
}
