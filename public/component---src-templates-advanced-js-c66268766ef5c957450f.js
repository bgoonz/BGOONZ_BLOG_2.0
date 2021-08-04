(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        vi9J: function (t, n, e) {
            'use strict';
            e.r(n),
                e.d(n, 'default', function () {
                    return h;
                });
            var r = e('dI71'),
                o = e('u6S6'),
                p = e.n(o),
                s = e('gQMU'),
                i = e.n(s),
                a = e('mwIZ'),
                u = e.n(a),
                c = e('3WF5'),
                f = e.n(c),
                l = e('q1tI'),
                w = e.n(l),
                d = e('Kvkj'),
                h = (function (t) {
                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    return (
                        Object(r.a)(n, t),
                        (n.prototype.render = function () {
                            var t = this;
                            return w.a.createElement(
                                d.a,
                                this.props,
                                f()(u()(this.props, 'pageContext.frontmatter.sections', null), function (n, e) {
                                    var r = i()(p()(u()(n, 'type', null))),
                                        o = d.b[r];
                                    return w.a.createElement(o, Object.assign({ key: e }, t.props, { section: n, site: t.props.pageContext.site }));
                                })
                            );
                        }),
                        n
                    );
                })(w.a.Component);
        }
    }
]);
//# sourceMappingURL=component---src-templates-advanced-js-c66268766ef5c957450f.js.map
