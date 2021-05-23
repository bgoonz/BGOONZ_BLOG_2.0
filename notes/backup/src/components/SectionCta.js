import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block block-cta outer">
                <div className="inner">
                    <div className="has-gradient">
                        <div className="grid grid-middle grid-center">
                            {(title || subtitle) && (
                                <div className="grid-item block-header">
                                    {title && <h2 className="block-title">{title}</h2>}
                                    {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                                </div>
                            )}
                            {!_.isEmpty(actions) && (
                                <div className="grid-item block-buttons">
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
