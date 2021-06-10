import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import SectionActions from './SectionActions';

export default class CtaSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--cta">
              <div className="container container--lg">
                <div className={classNames('section__body', 'align-center', {'inverse bg-blue': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'gray')})}>
                  <div className="container container--md">
                    {_.get(section, 'title', null) && (
                    <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
