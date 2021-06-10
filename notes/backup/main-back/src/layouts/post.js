import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { toStyleObj, withPrefix, htmlToReact, markdownify } from '../utils';

export default class Post extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const backgroundImage = _.get(page, 'image');
        const date = _.get(page, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%A, %B %e, %Y');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <article className="post post-full">
                    <header className="post-header has-gradient outer">
                        {backgroundImage && (
                            <div
                                className="bg-img"
                                style={{
                                    backgroundImage: `url('${withPrefix(backgroundImage)}')`
                                }}
                            />
                        )}
                        <div className="inner-sm">
                            <div className="post-meta">
                                <time className="published" dateTime={dateTimeAttr}>
                                    {formattedDate}
                                </time>
                            </div>
                            <h1 className="post-title">{title}</h1>
                            {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                        </div>
                    </header>
                    {markdownContent && (
                        <div className="inner-md outer">
                            <div className="post-content">{markdownify(markdownContent)}</div>
                        </div>
                    )}
                </article>
            </Layout>
        );
    }
}
