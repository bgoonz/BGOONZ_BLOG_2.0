import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');
        const backgroundImage = _.get(section, 'image');

        return (
            <section id={sectionId} className="block block-hero has-gradient outer">
                {backgroundImage && (
                    <div
                        className="bg-img"
                        style={{
                            backgroundImage: `url('${withPrefix(backgroundImage)}')`
                        }}
                    />
                )}
                <div className="inner-sm">
                    {title && (
                        <div className="block-header">
                            <h1 className="block-title">{title}</h1>
                        </div>
                    )}
                    {content && <div className="block-content">{markdownify(content)}</div>}
                    {!_.isEmpty(actions) && (
                        <div className="block-buttons">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
