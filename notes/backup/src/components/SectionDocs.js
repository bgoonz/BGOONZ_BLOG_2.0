import React from 'react';
import _ from 'lodash';

import { classNames, htmlToReact, pathJoin, getPage, getPageUrl, Link, withPrefix } from '../utils';

export default class SectionDocs extends React.Component {
    renderDocsSection(docsSection, index, docs, docsRootPath) {
        const docsSectionPath = pathJoin(docsRootPath, docsSection);
        const docsSectionPage = getPage(docs, docsSectionPath);
        const docsSectionPageUrl = getPageUrl(docsSectionPage);
        const docsSectionPageTitle = _.get(docsSectionPage, 'title');
        const docsSectionPageExcerpt = _.get(docsSectionPage, 'excerpt');

        return (
            <div key={index} className="grid-item">
                <div className="grid-item-inside">
                    <h3 className="grid-item-title line-left">
                        <Link href={withPrefix(docsSectionPageUrl)}>{docsSectionPageTitle}</Link>
                    </h3>
                    {docsSectionPageExcerpt && (
                        <div className="grid-item-content">
                            <p>{docsSectionPageExcerpt}</p>
                        </div>
                    )}
                    <div className="grid-item-buttons">
                        <Link href={withPrefix(docsSectionPageUrl)}>Learn More</Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const colNumber = _.get(section, 'col_number', 'three');
        const data = _.get(this.props, 'data');
        const docsConfig = _.get(data, 'doc_sections');
        const docsRootPath = _.get(docsConfig, 'root_docs_path');
        const docSections = _.get(docsConfig, 'sections');
        const docs = _.get(this.props, 'docs');

        return (
            <section
                id={sectionId}
                className={classNames('block', 'block-grid', 'outer', {
                    'has-header': title || subtitle
                })}
            >
                <div className="inner">
                    {(title || subtitle) && (
                        <div className="block-header inner-sm">
                            {title && <h2 className="block-title">{title}</h2>}
                            {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                        </div>
                    )}
                    <div className="block-content">
                        <div
                            className={classNames('grid', {
                                'grid-col-2': colNumber === 'two',
                                'grid-col-3': colNumber === 'three'
                            })}
                        >
                            {_.map(docSections, (docsSection, index) => this.renderDocsSection(docsSection, index, docs, docsRootPath))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
