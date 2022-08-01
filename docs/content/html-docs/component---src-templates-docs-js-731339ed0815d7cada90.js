(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        '4M6O': function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0),
                (t.insertScript = function (e, t, n) {
                    var o = window.document.createElement('script');
                    return (o.async = !0), (o.src = e), (o.id = t), n.appendChild(o), o;
                }),
                (t.removeScript = function (e, t) {
                    var n = window.document.getElementById(e);
                    n && t.removeChild(n);
                }),
                (t.debounce = function (e, t, n) {
                    var o;
                    return function () {
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        var s = this,
                            d = function () {
                                (o = null), n || e.apply(s, a);
                            },
                            u = n && !o;
                        window.clearTimeout(o), (o = setTimeout(d, t)), u && e.apply(s, a);
                    };
                }),
                (t.isReactElement = i),
                (t.shallowComparison = function e(t, n) {
                    var o,
                        a = new Set(Object.keys(t).concat(Object.keys(n)));
                    return (
                        0 !==
                        (o = []).concat.apply(o, (0, r.default)(a)).filter(function (o) {
                            if ('object' == typeof t[o]) {
                                if (e(t[o], n[o])) return !0;
                            } else if (t[o] !== n[o] && !i(t[o])) return !0;
                            return !1;
                        }).length
                    );
                });
            var r = o(n('RIqP')),
                a = o(n('q1tI'));

            function i(e) {
                return (
                    !!a.default.isValidElement(e) ||
                    (!!Array.isArray(e) &&
                        e.some(function (e) {
                            return a.default.isValidElement(e);
                        }))
                );
            }
        },
        Bnag: function (e, t) {
            (e.exports = function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        EbDI: function (e, t) {
            (e.exports = function (e) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        Ijbi: function (e, t, n) {
            var o = n('WkPL');
            (e.exports = function (e) {
                if (Array.isArray(e)) return o(e);
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        ORnI: function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0), (t.default = void 0);
            var r = o(n('VUT9'));
            t.Disqus = r.default;
            var a = o(n('qASQ'));
            t.CommentCount = a.default;
            var i = o(n('vAJ3'));
            t.CommentEmbed = i.default;
            var s = r.default;
            t.default = s;
        },
        RIqP: function (e, t, n) {
            var o = n('Ijbi'),
                r = n('EbDI'),
                a = n('ZhPi'),
                i = n('Bnag');
            (e.exports = function (e) {
                return o(e) || r(e) || a(e) || i();
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        RJKl: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'default', function () {
                    return y;
                });
            var o = n('dI71'),
                r = n('3WF5'),
                a = n.n(r),
                i = n('1iNE'),
                s = n.n(i),
                d = n('k8Y/'),
                u = n.n(d),
                l = n('mwIZ'),
                c = n.n(l),
                p = n('Zsd2'),
                m = n.n(p),
                f = n('q1tI'),
                h = n.n(f),
                g = n('ORnI'),
                w = n('Kvkj'),
                v = n('bTmn'),
                b = n('7Qib'),
                y = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    return (
                        Object(o.a)(t, e),
                        (t.prototype.render = function () {
                            var e,
                                t,
                                n = this,
                                o = m()(c()(this.props, 'pageContext.site.data.doc_sections.root_docs_path', null), '/'),
                                r = m()(c()(this.props, 'pageContext.url', null), '/');
                            return h.a.createElement(
                                w.a,
                                this.props,
                                h.a.createElement(
                                    'div',
                                    {
                                        className: 'inner outer'
                                    },
                                    h.a.createElement(
                                        'div',
                                        {
                                            className: 'docs-content'
                                        },
                                        h.a.createElement(
                                            v.a,
                                            Object.assign({}, this.props, {
                                                page: this.props.pageContext,
                                                site: this.props.pageContext.site
                                            })
                                        ),
                                        h.a.createElement(
                                            'article',
                                            {
                                                className: 'post type-docs'
                                            },
                                            h.a.createElement(
                                                'div',
                                                {
                                                    className: 'post-inside'
                                                },
                                                h.a.createElement(
                                                    'header',
                                                    {
                                                        className: 'post-header'
                                                    },
                                                    h.a.createElement(
                                                        'h1',
                                                        {
                                                            className: 'post-title line-left'
                                                        },
                                                        c()(this.props, 'pageContext.frontmatter.title', null)
                                                    )
                                                ),
                                                h.a.createElement(
                                                    'div',
                                                    {
                                                        className: 'post-content'
                                                    },
                                                    Object(b.f)(c()(this.props, 'pageContext.html', null)),
                                                    o !== r &&
                                                        ((e = u()(Object(b.e)(n.props.pageContext.pages, r), 'frontmatter.weight')),
                                                        (t = s()(e) > 0),
                                                        h.a.createElement(
                                                            h.a.Fragment,
                                                            null,
                                                            t &&
                                                                h.a.createElement(
                                                                    'ul',
                                                                    {
                                                                        id: 'docs-section-items',
                                                                        className: 'docs-section-items'
                                                                    },
                                                                    a()(e, function (e, t) {
                                                                        return h.a.createElement(
                                                                            'li',
                                                                            {
                                                                                key: t,
                                                                                className: 'docs-section-item'
                                                                            },
                                                                            h.a.createElement(
                                                                                b.a,
                                                                                {
                                                                                    to: Object(b.j)(c()(e, 'url', null)),
                                                                                    className: 'docs-item-link'
                                                                                },
                                                                                c()(e, 'frontmatter.title', null),
                                                                                h.a.createElement('span', {
                                                                                    className: 'icon-angle-right',
                                                                                    'aria-hidden': 'true'
                                                                                })
                                                                            )
                                                                        );
                                                                    })
                                                                )
                                                        ))
                                                )
                                            )
                                        ),
                                        h.a.createElement(
                                            'nav',
                                            {
                                                id: 'page-nav',
                                                className: 'page-nav'
                                            },
                                            h.a.createElement(
                                                'div',
                                                {
                                                    id: 'page-nav-inside',
                                                    className: 'page-nav-inside sticky'
                                                },
                                                h.a.createElement(
                                                    'h2',
                                                    {
                                                        className: 'page-nav-title'
                                                    },
                                                    'Jump to Section'
                                                ),
                                                h.a.createElement('div', {
                                                    id: 'page-nav-link-container'
                                                })
                                            )
                                        )
                                    ),
                                    h.a.createElement(g.Disqus, null),
                                    h.a.createElement('div', {
                                        'data-sheet2site': '1c4ZMBRKv7mwotLxfd_5-Q_XxC2_Dkc3NLfFQMmEV7Vo&g=1&e=1'
                                    })
                                )
                            );
                        }),
                        t
                    );
                })(h.a.Component);
        },
        VUT9: function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0), (t.default = void 0);
            var r = o(n('pVnL')),
                a = o(n('8OQS')),
                i = o(n('VbXa')),
                s = o(n('q1tI')),
                d = o(n('17x9')),
                u = n('4M6O'),
                l = (function (e) {
                    function t(t) {
                        var n;
                        return ((n = e.call(this, t) || this).shortname = 'webdevhub-1'), (n.embedUrl = 'https://' + n.shortname + '.disqus.com/embed.js'), n;
                    }
                    (0, i.default)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.loadInstance();
                        }),
                        (n.shouldComponentUpdate = function (e) {
                            return this.props !== e && (0, u.shallowComparison)(this.props, e);
                        }),
                        (n.componentDidUpdate = function () {
                            this.loadInstance();
                        }),
                        (n.componentWillUnmount = function () {
                            this.cleanInstance();
                        }),
                        (n.getDisqusConfig = function (e) {
                            return function () {
                                (this.page.identifier = e.identifier),
                                    (this.page.url = e.url),
                                    (this.page.title = e.title),
                                    (this.page.remote_auth_s3 = e.remoteAuthS3),
                                    (this.page.api_key = e.apiKey),
                                    (this.language = e.language);
                            };
                        }),
                        (n.loadInstance = function () {
                            'undefined' != typeof window &&
                                window.document &&
                                ((window.disqus_config = this.getDisqusConfig(this.props.config)),
                                window.document.getElementById('dsq-embed-scr')
                                    ? this.reloadInstance()
                                    : (0, u.insertScript)(this.embedUrl, 'dsq-embed-scr', window.document.body));
                        }),
                        (n.reloadInstance = function () {
                            window &&
                                window.DISQUS &&
                                window.DISQUS.reset({
                                    reload: !0
                                });
                        }),
                        (n.cleanInstance = function () {
                            (0, u.removeScript)('dsq-embed-scr', window.document.body);
                            try {
                                delete window.DISQUS;
                            } catch (o) {
                                window.DISQUS = void 0;
                            }
                            var e = window.document.getElementById('disqus_thread');
                            if (e) for (; e.hasChildNodes(); ) e.removeChild(e.firstChild);
                            var t = window.document.querySelector('[id^="dsq-app"]');
                            if (t) {
                                var n = window.document.getElementById(t.id);
                                n.parentNode.removeChild(n);
                            }
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = (e.config, (0, a.default)(e, ['config']));
                            return s.default.createElement(
                                'div',
                                (0, r.default)(
                                    {
                                        id: 'disqus_thread'
                                    },
                                    t
                                )
                            );
                        }),
                        t
                    );
                })(s.default.Component);
            (t.default = l),
                (l.propTypes = {
                    config: d.default.shape({
                        identifier: d.default.string,
                        title: d.default.string,
                        url: d.default.string,
                        language: d.default.string,
                        remoteAuthS3: d.default.string,
                        apiKey: d.default.string
                    })
                });
        },
        WkPL: function (e, t) {
            (e.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        ZhPi: function (e, t, n) {
            var o = n('WkPL');
            (e.exports = function (e, t) {
                if (e) {
                    if ('string' == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                    );
                }
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        qASQ: function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0), (t.default = void 0);
            var r = o(n('pVnL')),
                a = o(n('8OQS')),
                i = o(n('VbXa')),
                s = o(n('q1tI')),
                d = o(n('17x9')),
                u = n('4M6O'),
                l = (0, u.debounce)(
                    function () {
                        window.DISQUSWIDGETS &&
                            window.DISQUSWIDGETS.getCount({
                                reset: !0
                            });
                    },
                    300,
                    !1
                ),
                c = (function (e) {
                    function t(t) {
                        var n;
                        return ((n = e.call(this, t) || this).shortname = 'webdevhub-1'), n;
                    }
                    (0, i.default)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.loadInstance();
                        }),
                        (n.shouldComponentUpdate = function (e) {
                            return this.props !== e && (0, u.shallowComparison)(this.props, e);
                        }),
                        (n.componentDidUpdate = function () {
                            this.loadInstance();
                        }),
                        (n.componentWillUnmount = function () {
                            this.cleanInstance();
                        }),
                        (n.loadInstance = function () {
                            window.document.getElementById('dsq-count-scr')
                                ? l()
                                : (0, u.insertScript)('https://' + this.shortname + '.disqus.com/count.js', 'dsq-count-scr', window.document.body);
                        }),
                        (n.cleanInstance = function () {
                            (0, u.removeScript)('dsq-count-scr', window.document.body), (window.DISQUSWIDGETS = void 0);
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = e.config,
                                n = e.className,
                                o = e.placeholder,
                                i = (0, a.default)(e, ['config', 'className', 'placeholder']),
                                d = 'disqus-comment-count' + (n ? ' ' + n : '');
                            return s.default.createElement(
                                'span',
                                (0, r.default)(
                                    {
                                        className: d,
                                        'data-disqus-identifier': t.identifier,
                                        'data-disqus-url': t.url
                                    },
                                    i
                                ),
                                o
                            );
                        }),
                        t
                    );
                })(s.default.Component);
            (t.default = c),
                (c.defaultProps = {
                    placeholder: '...'
                }),
                (c.propTypes = {
                    config: d.default.shape({
                        identifier: d.default.string,
                        title: d.default.string,
                        url: d.default.string
                    }),
                    placeholder: d.default.string,
                    className: d.default.string
                });
        },
        vAJ3: function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0), (t.default = void 0);
            var r = o(n('pVnL')),
                a = o(n('8OQS')),
                i = o(n('VbXa')),
                s = o(n('q1tI')),
                d = o(n('17x9')),
                u = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    (0, i.default)(t, e);
                    var n = t.prototype;
                    return (
                        (n.getSrc = function () {
                            return (
                                'https://embed.disqus.com/p/' +
                                Number(this.props.commentId).toString(36) +
                                '?p=' +
                                (this.props.showParentComment ? '1' : '0') +
                                '&m=' +
                                (this.props.showMedia ? '1' : '0')
                            );
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = (e.commentId, e.showMedia, e.showParentComment, (0, a.default)(e, ['commentId', 'showMedia', 'showParentComment']));
                            return s.default.createElement(
                                'iframe',
                                (0, r.default)(
                                    {
                                        src: this.getSrc(),
                                        width: this.props.width,
                                        height: this.props.height,
                                        seamless: 'seamless',
                                        scrolling: 'no',
                                        frameBorder: '0',
                                        title: 'embedded-comment'
                                    },
                                    t
                                )
                            );
                        }),
                        t
                    );
                })(s.default.Component);
            (t.default = u),
                (u.defaultProps = {
                    width: 420,
                    height: 320,
                    showMedia: !0,
                    showParentComment: !0
                }),
                (u.propTypes = {
                    commentId: d.default.oneOfType([d.default.number, d.default.string]).isRequired,
                    width: d.default.number,
                    height: d.default.number,
                    showMedia: d.default.bool,
                    showParentComment: d.default.bool
                });
        }
    }
]);
//# sourceMappingURL=component---src-templates-docs-js-731339ed0815d7cada90.js.map
