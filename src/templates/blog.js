import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { getPageUrl, withPrefix, Link } from '../utils';

export default class Blog extends React.Component {
    renderPost(post, index, hasMoreLink, moreLinkText) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_image');
        const thumbImageAlt = _.get(post, 'thumb_image_alt', '');
        const excerpt = _.get(post, 'excerpt');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        const postUrl = getPageUrl(post, { withPrefix: true });

        return (
            <article key={index} className="post">
                {thumbImage && (
                    <Link className="post-thumbnail" href={postUrl}>
                        <img src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                    </Link>
                )}
                <header className="post-header">
                    <div className="post-meta">
                        <time className="published" dateTime={dateTimeAttr}>
                            {formattedDate}
                        </time>
                    </div>
                    <h2 className="post-title line-left">
                        <Link href={postUrl}>{title}</Link>
                    </h2>
                </header>
                {excerpt && (
                    <React.Fragment>
                        <p className="post-excerpt">{excerpt}</p>
                        {hasMoreLink && moreLinkText && (
                            <p className="read-more">
                                <Link className="read-more-link" href={postUrl}>
                                    {moreLinkText}
                                </Link>
                            </p>
                        )}
                    </React.Fragment>
                )}
            </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const backgroundImage = _.get(page, 'image');
        const hasMoreLink = _.get(page, 'has_more_link');
        const moreLinkText = _.get(page, 'more_link_text');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <header className="page-header has-gradient outer">
                    {backgroundImage && (
                        <div
                            className="bg-img"
                            style={{
                                backgroundImage: `url('${withPrefix(backgroundImage)}')`
                            }}
                        />
                    )}
                    <div className="inner-sm">
                        <h1 className="page-title">{title}</h1>
                        {subtitle && <p className="page-subtitle">{subtitle}</p>}
                    </div>
                </header>
                <div className="inner-md outer">
                    <div className="post-feed">{_.map(posts, (post, index) => this.renderPost(post, index, hasMoreLink, moreLinkText))}</div>
                </div>
            </Layout>
        );
    }
}
