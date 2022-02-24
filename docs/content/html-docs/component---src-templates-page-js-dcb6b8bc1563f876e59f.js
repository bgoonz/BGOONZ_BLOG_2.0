(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
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
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        var s = this,
                            u = function () {
                                (o = null), n || e.apply(s, i);
                            },
                            d = n && !o;
                        window.clearTimeout(o), (o = setTimeout(u, t)), d && e.apply(s, i);
                    };
                }),
                (t.isReactElement = a),
                (t.shallowComparison = function e(t, n) {
                    var o,
                        i = new Set(Object.keys(t).concat(Object.keys(n)));
                    return (
                        0 !==
                        (o = []).concat.apply(o, (0, r.default)(i)).filter(function (o) {
                            if ('object' == typeof t[o]) {
                                if (e(t[o], n[o])) return !0;
                            } else if (t[o] !== n[o] && !a(t[o])) return !0;
                            return !1;
                        }).length
                    );
                });
            var r = o(n('RIqP')),
                i = o(n('q1tI'));

            function a(e) {
                return (
                    !!i.default.isValidElement(e) ||
                    (!!Array.isArray(e) &&
                        e.some(function (e) {
                            return i.default.isValidElement(e);
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
            var i = o(n('qASQ'));
            t.CommentCount = i.default;
            var a = o(n('vAJ3'));
            t.CommentEmbed = a.default;
            var s = r.default;
            t.default = s;
        },
        RIqP: function (e, t, n) {
            var o = n('Ijbi'),
                r = n('EbDI'),
                i = n('ZhPi'),
                a = n('Bnag');
            (e.exports = function (e) {
                return o(e) || r(e) || i(e) || a();
            }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0);
        },
        VUT9: function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0), (t.default = void 0);
            var r = o(n('pVnL')),
                i = o(n('8OQS')),
                a = o(n('VbXa')),
                s = o(n('q1tI')),
                u = o(n('17x9')),
                d = n('4M6O'),
                l = (function (e) {
                    function t(t) {
                        var n;
                        return ((n = e.call(this, t) || this).shortname = 'webdevhub-1'), (n.embedUrl = 'https://' + n.shortname + '.disqus.com/embed.js'), n;
                    }
                    (0, a.default)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.loadInstance();
                        }),
                        (n.shouldComponentUpdate = function (e) {
                            return this.props !== e && (0, d.shallowComparison)(this.props, e);
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
                                    : (0, d.insertScript)(this.embedUrl, 'dsq-embed-scr', window.document.body));
                        }),
                        (n.reloadInstance = function () {
                            window &&
                                window.DISQUS &&
                                window.DISQUS.reset({
                                    reload: !0
                                });
                        }),
                        (n.cleanInstance = function () {
                            (0, d.removeScript)('dsq-embed-scr', window.document.body);
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
                                t = (e.config, (0, i.default)(e, ['config']));
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
                    config: u.default.shape({
                        identifier: u.default.string,
                        title: u.default.string,
                        url: u.default.string,
                        language: u.default.string,
                        remoteAuthS3: u.default.string,
                        apiKey: u.default.string
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
                i = o(n('8OQS')),
                a = o(n('VbXa')),
                s = o(n('q1tI')),
                u = o(n('17x9')),
                d = n('4M6O'),
                l = (0, d.debounce)(
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
                    (0, a.default)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.loadInstance();
                        }),
                        (n.shouldComponentUpdate = function (e) {
                            return this.props !== e && (0, d.shallowComparison)(this.props, e);
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
                                : (0, d.insertScript)('https://' + this.shortname + '.disqus.com/count.js', 'dsq-count-scr', window.document.body);
                        }),
                        (n.cleanInstance = function () {
                            (0, d.removeScript)('dsq-count-scr', window.document.body), (window.DISQUSWIDGETS = void 0);
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = e.config,
                                n = e.className,
                                o = e.placeholder,
                                a = (0, i.default)(e, ['config', 'className', 'placeholder']),
                                u = 'disqus-comment-count' + (n ? ' ' + n : '');
                            return s.default.createElement(
                                'span',
                                (0, r.default)(
                                    {
                                        className: u,
                                        'data-disqus-identifier': t.identifier,
                                        'data-disqus-url': t.url
                                    },
                                    a
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
                    config: u.default.shape({
                        identifier: u.default.string,
                        title: u.default.string,
                        url: u.default.string
                    }),
                    placeholder: u.default.string,
                    className: u.default.string
                });
        },
        sweJ: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'default', function () {
                    return c;
                });
            var o = n('dI71'),
                r = n('mwIZ'),
                i = n.n(r),
                a = n('q1tI'),
                s = n.n(a),
                u = n('ORnI'),
                d = n('Kvkj'),
                l = n('7Qib'),
                c = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    return (
                        Object(o.a)(t, e),
                        (t.prototype.render = function () {
                            return s.a.createElement(
                                d.a,
                                this.props,
                                s.a.createElement(
                                    'article',
                                    {
                                        className: 'post post-full'
                                    },
                                    s.a.createElement(
                                        'header',
                                        {
                                            className: 'post-header has-gradient outer'
                                        },
                                        i()(this.props, 'pageContext.frontmatter.image', null) &&
                                            s.a.createElement('div', {
                                                className: 'bg-img',
                                                style: Object(l.i)(
                                                    "background-image: url('" + Object(l.j)(i()(this.props, 'pageContext.frontmatter.image', null)) + "')"
                                                )
                                            }),
                                        s.a.createElement(
                                            'div',
                                            {
                                                className: 'inner-sm'
                                            },
                                            s.a.createElement(
                                                'h1',
                                                {
                                                    className: 'post-title'
                                                },
                                                i()(this.props, 'pageContext.frontmatter.title', null)
                                            ),
                                            i()(this.props, 'pageContext.frontmatter.subtitle', null) &&
                                                s.a.createElement(
                                                    'div',
                                                    {
                                                        className: 'post-subtitle'
                                                    },
                                                    Object(l.f)(i()(this.props, 'pageContext.frontmatter.subtitle', null))
                                                )
                                        )
                                    ),
                                    s.a.createElement(
                                        'div',
                                        {
                                            className: 'inner-md outer'
                                        },
                                        s.a.createElement(
                                            'div',
                                            {
                                                className: 'post-content'
                                            },
                                            Object(l.f)(i()(this.props, 'pageContext.html', null))
                                        )
                                    ),
                                    s.a.createElement(u.Disqus, null)
                                )
                            );
                        }),
                        t
                    );
                })(s.a.Component);
        },
        vAJ3: function (e, t, n) {
            'use strict';
            var o = n('TqRt');
            (t.__esModule = !0), (t.default = void 0);
            var r = o(n('pVnL')),
                i = o(n('8OQS')),
                a = o(n('VbXa')),
                s = o(n('q1tI')),
                u = o(n('17x9')),
                d = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    (0, a.default)(t, e);
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
                                t = (e.commentId, e.showMedia, e.showParentComment, (0, i.default)(e, ['commentId', 'showMedia', 'showParentComment']));
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
            (t.default = d),
                (d.defaultProps = {
                    width: 420,
                    height: 320,
                    showMedia: !0,
                    showParentComment: !0
                }),
                (d.propTypes = {
                    commentId: u.default.oneOfType([u.default.number, u.default.string]).isRequired,
                    width: u.default.number,
                    height: u.default.number,
                    showMedia: u.default.bool,
                    showParentComment: u.default.bool
                });
        }
    }
]);
//# sourceMappingURL=component---src-templates-page-js-dcb6b8bc1563f876e59f.js.map
