import React from 'react';
let NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <table cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                        <tr>
                            <td style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt' }}>
                                <center>
                                    <table
                                        width="90%"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        border={0}
                                        style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt' }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt' }} align="left">
                                                    <a href="https://search.freefind.com/siteindex.html?si=14588965">index</a>
                                                </td>
                                                <td style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt' }} align="center">
                                                    <a href="https://search.freefind.com/find.html?si=14588965&m=0&p=0">sitemap</a>
                                                </td>
                                                <td style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt' }} align="right">
                                                    <a href="https://search.freefind.com/find.html?si=14588965&pid=a">advanced</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </center>
                                <form
                                    style={{ margin: '0px', marginTop: '4px' }}
                                    action="https://search.freefind.com/find.html"
                                    method="get"
                                    acceptCharset="utf-8"
                                    target="_self"
                                >
                                    <input type="hidden" name="si" defaultValue={14588965} />
                                    <input type="hidden" name="pid" defaultValue="r" />
                                    <input type="hidden" name="n" defaultValue={0} />
                                    <input type="hidden" name="_charset_" defaultValue />
                                    <input type="hidden" name="bcd" defaultValue="÷" />
                                    <input type="text" name="query" size={15} />
                                    <input type="submit" defaultValue="search" />
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt', paddingTop: '4px' }}>
                                <a style={{ textDecoration: 'none', color: 'transparent' }} href="https://www.freefind.com" rel="nofollow">
                                    search engine
                                </a>
                                <a style={{ textDecoration: 'none', color: 'transparent' }} href="https://www.freefind.com" rel="nofollow">
                                    by
                                    <span style={{ color: 'transparent' }}>freefind</span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
                <h1>Algolia Instant Search Client</h1>
                <div id="search" />
                <h1>Google Search</h1>
                <div className="gcse-search" />
            </div>
        );
    }
});
