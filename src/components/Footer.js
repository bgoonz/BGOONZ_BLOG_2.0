import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

const FileUploadForm = React.createClass({
    render: function () {
        return (
            <div>
                <form name="fileForm" encType="multipart/form-data" data-netlify="true">
                    <p>
                        <label>
                            <span>Name:</span>
                            <input name="name" type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>
                            <span>Add file:</span>
                            <input name="file" type="file"/>
                        </label>
                    </p>
                    <button>Submit</button>
                </form>
                <p className="result"/>
            </div>
        );
    }
});


export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer outer">
                <div className="inner">
                    <div className="site-footer-inside">
                        <p className="site-info">
                            {
                            _.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                                <span className="copyright">
                                    {
                                    htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))
                                }</span>
                            )
                        }
                            {
                            _.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                                <ActionLink key={action_idx}
                                    {...this.props}
                                    action={action}/>
                            ))
                        } </p>
                        {
                        _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                            <div className="social-links">
                                {
                                _.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                                    <ActionLink key={action_idx}
                                        {...this.props}
                                        action={action}/>
                                ))
                            } </div>
                        )
                    } </div>
                </div>
                <div id='tawk_613041ecd6e7610a49b3326a'></div>
                <FileUploadForm></FileUploadForm>
            </footer>
        );
    }
}
