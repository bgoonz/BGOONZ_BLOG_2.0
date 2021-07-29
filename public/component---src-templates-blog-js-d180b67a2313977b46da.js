(window.webpackJsonp = window.webpackJsonp || []).push([
    [8],
    {
        c851: function (e, t, a) {
            'use strict';
            a.r(t),
                a.d(t, 'default', function () {
                    return h;
                });
            var r = a('dI71'),
                n = a('3WF5'),
                l = a.n(n),
                m = a('mwIZ'),
                s = a.n(m),
                o = a('k8Y/'),
                c = a.n(o),
                p = a('q1tI'),
                i = a.n(p),
                u = a('O+Ac'),
                d = a.n(u),
                f = a('Kvkj'),
                g = a('7Qib'),
                h = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    return (
                        Object(r.a)(t, e),
                        (t.prototype.render = function () {
                            var e = this,
                                t = c()(Object(g.e)(this.props.pageContext.pages, '/blog'), 'frontmatter.date', 'desc');
                            return i.a.createElement(
                                f.a,
                                this.props,
                                i.a.createElement(
                                    'header',
                                    { className: 'page-header has-gradient outer' },
                                    s()(this.props, 'pageContext.frontmatter.image', null) &&
                                        i.a.createElement('div', {
                                            className: 'bg-img',
                                            style: Object(g.i)(
                                                "background-image: url('" + Object(g.j)(s()(this.props, 'pageContext.frontmatter.image', null)) + "')"
                                            )
                                        }),
                                    i.a.createElement(
                                        'div',
                                        { className: 'inner-sm' },
                                        i.a.createElement('h1', { className: 'page-title' }, s()(this.props, 'pageContext.frontmatter.title', null)),
                                        s()(this.props, 'pageContext.frontmatter.subtitle', null) &&
                                            i.a.createElement('p', { className: 'page-subtitle' }, s()(this.props, 'pageContext.frontmatter.subtitle', null))
                                    )
                                ),
                                i.a.createElement(
                                    'div',
                                    { className: 'inner-md outer' },
                                    i.a.createElement(
                                        'div',
                                        { className: 'post-feed' },
                                        l()(t, function (t, a) {
                                            return i.a.createElement(
                                                'article',
                                                { key: a, className: 'post' },
                                                s()(t, 'frontmatter.thumb_image', null) &&
                                                    i.a.createElement(
                                                        g.a,
                                                        { className: 'post-thumbnail', to: Object(g.j)(s()(t, 'url', null)) },
                                                        i.a.createElement('img', {
                                                            src: Object(g.j)(s()(t, 'frontmatter.thumb_image', null)),
                                                            alt: s()(e.props, 'pageContext.frontmatter.thumb_image_alt', null)
                                                        })
                                                    ),
                                                i.a.createElement(
                                                    'header',
                                                    { className: 'post-header' },
                                                    i.a.createElement(
                                                        'div',
                                                        { className: 'post-meta' },
                                                        i.a.createElement(
                                                            'time',
                                                            {
                                                                className: 'published',
                                                                dateTime: d()(s()(t, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')
                                                            },
                                                            d()(s()(t, 'frontmatter.date', null)).strftime('%B %d, %Y')
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        'h2',
                                                        { className: 'post-title line-left' },
                                                        i.a.createElement(
                                                            g.a,
                                                            { to: Object(g.j)(s()(t, 'url', null)), rel: 'bookmark' },
                                                            s()(t, 'frontmatter.title', null)
                                                        )
                                                    )
                                                ),
                                                s()(t, 'frontmatter.excerpt', null) &&
                                                    i.a.createElement(
                                                        i.a.Fragment,
                                                        null,
                                                        i.a.createElement('p', { className: 'post-excerpt' }, s()(t, 'frontmatter.excerpt', null)),
                                                        !0 === s()(e.props, 'pageContext.frontmatter.has_more_link', null) &&
                                                            s()(e.props, 'pageContext.frontmatter.more_link_text', null) &&
                                                            i.a.createElement(
                                                                'p',
                                                                { className: 'read-more' },
                                                                i.a.createElement(
                                                                    g.a,
                                                                    { className: 'read-more-link', to: Object(g.j)(s()(t, 'url', null)) },
                                                                    s()(e.props, 'pageContext.frontmatter.more_link_text', null)
                                                                )
                                                            )
                                                    )
                                            );
                                        })
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(i.a.Component);
        }
    }
]);
//# sourceMappingURL=component---src-templates-blog-js-d180b67a2313977b46da.js.map
