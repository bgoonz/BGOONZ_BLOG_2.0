import React from 'react';
import _ from 'lodash';

import { classNames, htmlToReact, withPrefix, Link, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionGrid extends React.Component {
    renderGridItem(gridItem, index) {
        const title = _.get(gridItem, 'title');
        const titleUrl = _.get(gridItem, 'title_url');
        const content = _.get(gridItem, 'content');
        const image = _.get(gridItem, 'image');
        const imageAlt = _.get(gridItem, 'image_alt', '');
        const actions = _.get(gridItem, 'actions');

        return (
            <div key={index} className="grid-item">
                <div className="grid-item-inside">
                    {image && (
                        <div className="grid-item-image">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    {title && <h3 className="grid-item-title line-left">{titleUrl ? <Link href={withPrefix(titleUrl)}>{title}</Link> : title}</h3>}
                    {content && <div className="grid-item-content">{markdownify(content)}</div>}
                    {!_.isEmpty(actions) && (
                        <div className="grid-item-buttons">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const gridItems = _.get(section, 'grid_items');
        const colNumber = _.get(section, 'col_number', 'three');

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
                    {!_.isEmpty(gridItems) && (
                        <div className="block-content">
                            <div
                                className={classNames('grid', {
                                    'grid-col-2': colNumber === 'two',
                                    'grid-col-3': colNumber === 'three'
                                })}
                            >
                                {_.map(gridItems, (gridItem, index) => this.renderGridItem(gridItem, index))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
