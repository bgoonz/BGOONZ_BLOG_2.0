import _ from 'lodash';
import React from 'react';
import { htmlToReact } from '../utils';
import ActionLink from './ActionLink';
export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer outer">
                <div>
                        <table cellPadding={0}
                            cellSpacing={0}
                            border={0}>
                            <tbody>
                                <tr>
                                    <td style={
                                        {
                                            fontFamily: 'Arial, Helvetica, sans-serif',
                                            fontSize: '7.5pt'
                                        }
                                    }>
                                            <table width="95%"
                                                cellPadding={0}
                                                cellSpacing={0}
                                                border={0}
                                                style={
                                                    {
                                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                                        fontSize: '7.5pt'
                                                    }
                                                }>
                                                <tbody>
                                                    <tr>
                                                        <td style={
                                                            {
                                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                                fontSize: '7.5pt'
                                                            }
                                                        }
                                                            align="left">
                                                            <a target="_blank" href="https://search.freefind.com/siteindex.html?si=14588965">
                                                                index
                                                            </a>
                                                        </td>
                                                        <td style={
                                                            {
                                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                                fontSize: '7.5pt'
                                                            }
                                                        }
                                                            align="center">
                                                            <a target="_blank" href="https://search.freefind.com/find.html?si=14588965&m=0&p=0">
                                                                sitemap
                                                            </a>
                                                        </td>
                                                        <td style={
                                                            {
                                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                                fontSize: '7.5pt'
                                                            }
                                                        }
                                                            align="right">
                                                            <a target="_blank" href="https://search.freefind.com/find.html?si=14588965&pid=a">
                                                                advanced
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        <form style={
                                            {
                                                margin: '0px',
                                                marginTop: '2px'
                                            }
                                        }
                                            action="https://search.freefind.com/find.html"
                                            method="get"
                                            acceptCharset="utf-8"
                                            target="_self">
                                            <input type="hidden" name="si"
                                                defaultValue={14588965} />
                                            <input type="hidden" name="pid" defaultValue="r" />
                                            <input type="hidden" name="n"
                                                defaultValue={0} />
                                            <input type="hidden" name="_charset_" defaultValue />
                                            <input type="hidden" name="bcd" defaultValue="÷" />
                                            <input type="text" name="query"
                                                size={15} />
                                            <input type="submit" defaultValue="search" />
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={
                                        {
                                            textAlign: 'center',
                                            fontFamily: 'Arial, Helvetica, sans-serif',
                                            fontSize: '7.5pt',
                                            paddingTop: '4px'
                                        }
                                    }>
                                        <a style={
                                            {
                                                textDecoration: 'none',
                                                color: 'transparent'
                                            }
                                        }
                                            href="https://www.freefind.com"
                                            rel="nofollow">
                                            search engine
                                        </a>
                                        <a style={
                                            {
                                                textDecoration: 'none',
                                                color: 'transparent'
                                            }
                                        }
                                            href="https://www.freefind.com"
                                            rel="nofollow">
                                            by
                                            <span style={
                                                { color: 'transparent' }
                                            }>freefind</span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
<a href = "//pdfcrowd.com/url_to_pdf/?" onclick = {`if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1`} > Save to PDF </a>
                </div>
                <div className="inner">
                    <div id="search" className="inner"></div>
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
                                        action={action}></ActionLink>
                                ))
                            }
                          </p>
                        {
                            _.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                                <div className="social-links">
                                    {
                                        _.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => {
                                            return <ActionLink key={action_idx}
                                                {...this.props}
                                                action={action} />;
                                        })
                                    }
                                    </div>
                            )
                        }
                     </div>
                </div>
            </footer>
        );
    }
}
