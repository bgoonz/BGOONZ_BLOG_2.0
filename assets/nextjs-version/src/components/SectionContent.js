import React from 'react';
import _ from 'lodash';

import { classNames, withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const image = _.get(section, 'image');
        const imageAlt = _.get(section, 'image_alt', '');
        const imagePosition = _.get(section, 'image_position', 'left');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block block-text outer">
                <div className="inner">
                    <div
                        className={classNames('grid', 'grid-middle', 'grid-center', {
                            'grid-swap': image && imagePosition === 'right'
                        })}
                    >
                        {image && (
                            <div className="grid-item block-image">
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        <div className="grid-item block-body">
                            {title && (
                                <div className="block-header">
                                    <h2 className="block-title">{title}</h2>
                                </div>
                            )}
                            {content && <div className="block-content">{markdownify(content)}</div>}
                            {!_.isEmpty(actions) && (
                                <div className="block-buttons">
                                    <CtaButtons actions={actions} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
