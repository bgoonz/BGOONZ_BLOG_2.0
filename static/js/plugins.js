/*
 * reframe.js - Reframe.js: responsive iframes for embedded content
 * @version v3.0.2
 * @link https://github.com/yowainwright/reframe.ts#readme
 * @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
 * @license MIT
 */
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).reframe = t());
})(this, function () {
    'use strict';
    function t() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var i = Array(e), o = 0, t = 0; t < n; t++) for (var r = arguments[t], f = 0, d = r.length; f < d; f++, o++) i[o] = r[f];
        return i;
    }
    return function (e, s) {
        return (
            void 0 === s && (s = 'js-reframe'),
            ('string' == typeof e ? t(document.querySelectorAll(e)) : 'length' in e ? t(e) : [e]).forEach(function (e) {
                var t, n, i, o, r, f, d, l;
                -1 !== e.className.split(' ').indexOf(s) ||
                    -1 < e.style.width.indexOf('%') ||
                    ((i = e.getAttribute('height') || e.offsetHeight),
                    (o = e.getAttribute('width') || e.offsetWidth),
                    (r = (('string' == typeof i ? parseInt(i) : i) / ('string' == typeof o ? parseInt(o) : o)) * 100),
                    ((f = document.createElement('div')).className = s),
                    ((d = f.style).position = 'relative'),
                    (d.width = '100%'),
                    (d.paddingTop = r + '%'),
                    ((l = e.style).position = 'absolute'),
                    (l.width = '100%'),
                    (l.height = '100%'),
                    (l.left = '0'),
                    (l.top = '0'),
                    null !== (t = e.parentNode) && void 0 !== t && t.insertBefore(f, e),
                    null !== (n = e.parentNode) && void 0 !== n && n.removeChild(e),
                    f.appendChild(e));
            })
        );
    };
});

/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element &&
    !Element.prototype.closest &&
    (Element.prototype.closest = function (e) {
        var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            o = this;
        do {
            for (t = n.length; 0 <= --t && n.item(t) !== o; );
        } while (t < 0 && (o = o.parentElement));
        return o;
    }),
    (function () {
        if ('function' == typeof window.CustomEvent) return;
        function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }
        (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })(),
    (function () {
        for (var r = 0, e = ['ms', 'moz', 'webkit', 'o'], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
            (window.requestAnimationFrame = window[e[t] + 'RequestAnimationFrame']),
                (window.cancelAnimationFrame = window[e[t] + 'CancelAnimationFrame'] || window[e[t] + 'CancelRequestAnimationFrame']);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e, t) {
                var n = new Date().getTime(),
                    o = Math.max(0, 16 - (n - r)),
                    a = window.setTimeout(function () {
                        e(n + o);
                    }, o);
                return (r = n + o), a;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e);
                });
    })(),
    (function (e, t) {
        'function' == typeof define && define.amd
            ? define([], function () {
                  return t(e);
              })
            : 'object' == typeof exports
            ? (module.exports = t(e))
            : (e.SmoothScroll = t(e));
    })('undefined' != typeof global ? global : 'undefined' != typeof window ? window : this, function (q) {
        'use strict';
        var I = {
                ignore: '[data-scroll-ignore]',
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                speedAsDuration: !1,
                durationMax: null,
                durationMin: null,
                clip: !0,
                offset: 0,
                easing: 'easeInOutCubic',
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0
            },
            F = function () {
                var n = {};
                return (
                    Array.prototype.forEach.call(arguments, function (e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    }),
                    n
                );
            },
            r = function (e) {
                '#' === e.charAt(0) && (e = e.substr(1));
                for (var t, n = String(e), o = n.length, a = -1, r = '', i = n.charCodeAt(0); ++a < o; ) {
                    if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
                    (1 <= t && t <= 31) || 127 == t || (0 === a && 48 <= t && t <= 57) || (1 === a && 48 <= t && t <= 57 && 45 === i)
                        ? (r += '\\' + t.toString(16) + ' ')
                        : (r +=
                              128 <= t || 45 === t || 95 === t || (48 <= t && t <= 57) || (65 <= t && t <= 90) || (97 <= t && t <= 122)
                                  ? n.charAt(a)
                                  : '\\' + n.charAt(a));
                }
                return '#' + r;
            },
            L = function () {
                return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                );
            },
            x = function (e) {
                return e ? ((t = e), parseInt(q.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                var t;
            },
            H = function (e, t, n, o) {
                if (t.emitEvents && 'function' == typeof q.CustomEvent) {
                    var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } });
                    document.dispatchEvent(a);
                }
            };
        return function (o, e) {
            var A,
                a,
                O,
                C,
                M = {};
            (M.cancelScroll = function (e) {
                cancelAnimationFrame(C), (C = null), e || H('scrollCancel', A);
            }),
                (M.animateScroll = function (i, c, e) {
                    M.cancelScroll();
                    var s = F(A || I, e || {}),
                        u = '[object Number]' === Object.prototype.toString.call(i),
                        t = u || !i.tagName ? null : i;
                    if (u || t) {
                        var l = q.pageYOffset;
                        s.header && !O && (O = document.querySelector(s.header));
                        var n,
                            o,
                            a,
                            m,
                            r,
                            d,
                            f,
                            h,
                            p = x(O),
                            g = u
                                ? i
                                : (function (e, t, n, o) {
                                      var a = 0;
                                      if (e.offsetParent) for (; (a += e.offsetTop), (e = e.offsetParent); );
                                      return (a = Math.max(a - t - n, 0)), o && (a = Math.min(a, L() - q.innerHeight)), a;
                                  })(t, p, parseInt('function' == typeof s.offset ? s.offset(i, c) : s.offset, 10), s.clip),
                            y = g - l,
                            v = L(),
                            w = 0,
                            S =
                                ((n = y),
                                (a = (o = s).speedAsDuration ? o.speed : Math.abs((n / 1e3) * o.speed)),
                                o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)),
                            E = function (e, t) {
                                var n,
                                    o,
                                    a,
                                    r = q.pageYOffset;
                                if (e == t || r == t || (l < t && q.innerHeight + r) >= v)
                                    return (
                                        M.cancelScroll(!0),
                                        (o = t),
                                        (a = u),
                                        0 === (n = i) && document.body.focus(),
                                        a ||
                                            (n.focus(),
                                            document.activeElement !== n && (n.setAttribute('tabindex', '-1'), n.focus(), (n.style.outline = 'none')),
                                            q.scrollTo(0, o)),
                                        H('scrollStop', s, i, c),
                                        !(C = m = null)
                                    );
                            },
                            b = function (e) {
                                var t, n, o;
                                m || (m = e),
                                    (w += e - m),
                                    (d =
                                        l +
                                        y *
                                            ((n = r = 1 < (r = 0 === S ? 0 : w / S) ? 1 : r),
                                            'easeInQuad' === (t = s).easing && (o = n * n),
                                            'easeOutQuad' === t.easing && (o = n * (2 - n)),
                                            'easeInOutQuad' === t.easing && (o = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                                            'easeInCubic' === t.easing && (o = n * n * n),
                                            'easeOutCubic' === t.easing && (o = --n * n * n + 1),
                                            'easeInOutCubic' === t.easing && (o = n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                                            'easeInQuart' === t.easing && (o = n * n * n * n),
                                            'easeOutQuart' === t.easing && (o = 1 - --n * n * n * n),
                                            'easeInOutQuart' === t.easing && (o = n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                                            'easeInQuint' === t.easing && (o = n * n * n * n * n),
                                            'easeOutQuint' === t.easing && (o = 1 + --n * n * n * n * n),
                                            'easeInOutQuint' === t.easing && (o = n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n),
                                            t.customEasing && (o = t.customEasing(n)),
                                            o || n)),
                                    q.scrollTo(0, Math.floor(d)),
                                    E(d, g) || ((C = q.requestAnimationFrame(b)), (m = e));
                            };
                        0 === q.pageYOffset && q.scrollTo(0, 0),
                            (f = i),
                            (h = s),
                            u ||
                                (history.pushState &&
                                    h.updateURL &&
                                    history.pushState(
                                        { smoothScroll: JSON.stringify(h), anchor: f.id },
                                        document.title,
                                        f === document.documentElement ? '#top' : '#' + f.id
                                    )),
                            'matchMedia' in q && q.matchMedia('(prefers-reduced-motion)').matches
                                ? q.scrollTo(0, Math.floor(g))
                                : (H('scrollStart', s, i, c), M.cancelScroll(!0), q.requestAnimationFrame(b));
                    }
                });
            var t = function (e) {
                    if (
                        !e.defaultPrevented &&
                        !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
                        'closest' in e.target &&
                        (a = e.target.closest(o)) &&
                        'a' === a.tagName.toLowerCase() &&
                        !e.target.closest(A.ignore) &&
                        a.hostname === q.location.hostname &&
                        a.pathname === q.location.pathname &&
                        /#/.test(a.href)
                    ) {
                        var t,
                            n = r(a.hash);
                        if ('#' === n) {
                            if (!A.topOnEmptyHash) return;
                            t = document.documentElement;
                        } else t = document.querySelector(n);
                        (t = t || '#top' !== n ? t : document.documentElement) &&
                            (e.preventDefault(),
                            (function (e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = q.location.hash;
                                    (t = t || ''),
                                        history.replaceState(
                                            { smoothScroll: JSON.stringify(e), anchor: t || q.pageYOffset },
                                            document.title,
                                            t || q.location.href
                                        );
                                }
                            })(A),
                            M.animateScroll(t, a));
                    }
                },
                n = function (e) {
                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(A)) {
                        var t = history.state.anchor;
                        ('string' == typeof t && t && !(t = document.querySelector(r(history.state.anchor)))) || M.animateScroll(t, null, { updateURL: !1 });
                    }
                };
            M.destroy = function () {
                A && (document.removeEventListener('click', t, !1), q.removeEventListener('popstate', n, !1), M.cancelScroll(), (C = O = a = A = null));
            };
            return (
                (function () {
                    if (!('querySelector' in document && 'addEventListener' in q && 'requestAnimationFrame' in q && 'closest' in q.Element.prototype))
                        throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';
                    M.destroy(),
                        (A = F(I, e || {})),
                        (O = A.header ? document.querySelector(A.header) : null),
                        document.addEventListener('click', t, !1),
                        A.updateURL && A.popstate && q.addEventListener('popstate', n, !1);
                })(),
                M
            );
        };
    });

/*! gumshoejs v5.1.1 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
Element.prototype.closest ||
    (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    (Element.prototype.closest = function (t) {
        var e = this;
        if (!document.documentElement.contains(this)) return null;
        do {
            if (e.matches(t)) return e;
            e = e.parentElement;
        } while (null !== e);
        return null;
    })),
    (function () {
        if ('function' == typeof window.CustomEvent) return !1;
        function t(t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
        }
        (t.prototype = window.Event.prototype), (window.CustomEvent = t);
    })(),
    (function (t, e) {
        'function' == typeof define && define.amd
            ? define([], function () {
                  return e(t);
              })
            : 'object' == typeof exports
            ? (module.exports = e(t))
            : (t.Gumshoe = e(t));
    })('undefined' != typeof global ? global : 'undefined' != typeof window ? window : this, function (t) {
        'use strict';
        var e = { navClass: 'active', contentClass: 'active', nested: !1, nestedClass: 'active', offset: 0, reflow: !1, events: !0 },
            n = function (t, e, n) {
                if (n.settings.events) {
                    var o = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: n });
                    e.dispatchEvent(o);
                }
            },
            o = function (t) {
                var e = 0;
                if (t.offsetParent) for (; t; ) (e += t.offsetTop), (t = t.offsetParent);
                return e >= 0 ? e : 0;
            },
            s = function (t) {
                t &&
                    t.sort(function (t, e) {
                        return o(t.content) < o(e.content) ? -1 : 1;
                    });
            },
            c = function (e, n, o) {
                var s = e.getBoundingClientRect(),
                    c = (function (t) {
                        return 'function' == typeof t.offset ? parseFloat(t.offset()) : parseFloat(t.offset);
                    })(n);
                return o ? parseInt(s.bottom, 10) < (t.innerHeight || document.documentElement.clientHeight) : parseInt(s.top, 10) <= c;
            },
            r = function () {
                return (
                    t.innerHeight + t.pageYOffset >=
                    Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.body.clientHeight,
                        document.documentElement.clientHeight
                    )
                );
            },
            i = function (t, e) {
                var n = t[t.length - 1];
                if (
                    (function (t, e) {
                        return !(!r() || !c(t.content, e, !0));
                    })(n, e)
                )
                    return n;
                for (var o = t.length - 1; o >= 0; o--) if (c(t[o].content, e)) return t[o];
            },
            l = function (t, e) {
                if (e.nested) {
                    var n = t.parentNode.closest('li');
                    n && (n.classList.remove(e.nestedClass), l(n, e));
                }
            },
            a = function (t, e) {
                if (t) {
                    var o = t.nav.closest('li');
                    o &&
                        (o.classList.remove(e.navClass),
                        t.content.classList.remove(e.contentClass),
                        l(o, e),
                        n('gumshoeDeactivate', o, { link: t.nav, content: t.content, settings: e }));
                }
            },
            u = function (t, e) {
                if (e.nested) {
                    var n = t.parentNode.closest('li');
                    n && (n.classList.add(e.nestedClass), u(n, e));
                }
            };
        return function (o, c) {
            var r,
                l,
                f,
                d,
                m,
                v = {};
            (v.setup = function () {
                (r = document.querySelectorAll(o)),
                    (l = []),
                    Array.prototype.forEach.call(r, function (t) {
                        var e = document.getElementById(decodeURIComponent(t.hash.substr(1)));
                        e && l.push({ nav: t, content: e });
                    }),
                    s(l);
            }),
                (v.detect = function () {
                    var t = i(l, m);
                    t
                        ? (f && t.content === f.content) ||
                          (a(f, m),
                          (function (t, e) {
                              if (t) {
                                  var o = t.nav.closest('li');
                                  o &&
                                      (o.classList.add(e.navClass),
                                      t.content.classList.add(e.contentClass),
                                      u(o, e),
                                      n('gumshoeActivate', o, { link: t.nav, content: t.content, settings: e }));
                              }
                          })(t, m),
                          (f = t))
                        : f && (a(f, m), (f = null));
                });
            var p = function (e) {
                    d && t.cancelAnimationFrame(d), (d = t.requestAnimationFrame(v.detect));
                },
                h = function (e) {
                    d && t.cancelAnimationFrame(d),
                        (d = t.requestAnimationFrame(function () {
                            s(l), v.detect();
                        }));
                };
            v.destroy = function () {
                f && a(f, m),
                    t.removeEventListener('scroll', p, !1),
                    m.reflow && t.removeEventListener('resize', h, !1),
                    (l = null),
                    (r = null),
                    (f = null),
                    (d = null),
                    (m = null);
            };
            return (
                (m = (function () {
                    var t = {};
                    return (
                        Array.prototype.forEach.call(arguments, function (e) {
                            for (var n in e) {
                                if (!e.hasOwnProperty(n)) return;
                                t[n] = e[n];
                            }
                        }),
                        t
                    );
                })(e, c || {})),
                v.setup(),
                v.detect(),
                t.addEventListener('scroll', p, !1),
                m.reflow && t.addEventListener('resize', h, !1),
                v
            );
        };
    });

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define([], e)
        : 'object' == typeof exports
        ? (exports.ClipboardJS = e())
        : (t.ClipboardJS = e());
})(this, function () {
    return (function (n) {
        var o = {};
        function r(t) {
            if (o[t]) return o[t].exports;
            var e = (o[t] = { i: t, l: !1, exports: {} });
            return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
        }
        return (
            (r.m = n),
            (r.c = o),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
                    for (var o in e)
                        r.d(
                            n,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return n;
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return r.d(e, 'a', e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ''),
            r((r.s = 0))
        );
    })([
        function (t, e, n) {
            'use strict';
            var r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                          },
                i = (function () {
                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    return function (t, e, n) {
                        return e && o(t.prototype, e), n && o(t, n), t;
                    };
                })(),
                a = o(n(1)),
                c = o(n(3)),
                u = o(n(4));
            function o(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var l = (function (t) {
                function o(t, e) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                    })(this, o);
                    var n = (function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
                    })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                    return n.resolveOptions(e), n.listenClick(t), n;
                }
                return (
                    (function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                    })(o, c.default),
                    i(
                        o,
                        [
                            {
                                key: 'resolveOptions',
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    (this.action = 'function' == typeof t.action ? t.action : this.defaultAction),
                                        (this.target = 'function' == typeof t.target ? t.target : this.defaultTarget),
                                        (this.text = 'function' == typeof t.text ? t.text : this.defaultText),
                                        (this.container = 'object' === r(t.container) ? t.container : document.body);
                                }
                            },
                            {
                                key: 'listenClick',
                                value: function (t) {
                                    var e = this;
                                    this.listener = (0, u.default)(t, 'click', function (t) {
                                        return e.onClick(t);
                                    });
                                }
                            },
                            {
                                key: 'onClick',
                                value: function (t) {
                                    var e = t.delegateTarget || t.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null),
                                        (this.clipboardAction = new a.default({
                                            action: this.action(e),
                                            target: this.target(e),
                                            text: this.text(e),
                                            container: this.container,
                                            trigger: e,
                                            emitter: this
                                        }));
                                }
                            },
                            {
                                key: 'defaultAction',
                                value: function (t) {
                                    return s('action', t);
                                }
                            },
                            {
                                key: 'defaultTarget',
                                value: function (t) {
                                    var e = s('target', t);
                                    if (e) return document.querySelector(e);
                                }
                            },
                            {
                                key: 'defaultText',
                                value: function (t) {
                                    return s('text', t);
                                }
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                }
                            }
                        ],
                        [
                            {
                                key: 'isSupported',
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ['copy', 'cut'],
                                        e = 'string' == typeof t ? [t] : t,
                                        n = !!document.queryCommandSupported;
                                    return (
                                        e.forEach(function (t) {
                                            n = n && !!document.queryCommandSupported(t);
                                        }),
                                        n
                                    );
                                }
                            }
                        ]
                    ),
                    o
                );
            })();
            function s(t, e) {
                var n = 'data-clipboard-' + t;
                if (e.hasAttribute(n)) return e.getAttribute(n);
            }
            t.exports = l;
        },
        function (t, e, n) {
            'use strict';
            var o,
                r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                          },
                i = (function () {
                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    return function (t, e, n) {
                        return e && o(t.prototype, e), n && o(t, n), t;
                    };
                })(),
                a = n(2),
                c = (o = a) && o.__esModule ? o : { default: o };
            var u = (function () {
                function e(t) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        this.resolveOptions(t),
                        this.initSelection();
                }
                return (
                    i(e, [
                        {
                            key: 'resolveOptions',
                            value: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                (this.action = t.action),
                                    (this.container = t.container),
                                    (this.emitter = t.emitter),
                                    (this.target = t.target),
                                    (this.text = t.text),
                                    (this.trigger = t.trigger),
                                    (this.selectedText = '');
                            }
                        },
                        {
                            key: 'initSelection',
                            value: function () {
                                this.text ? this.selectFake() : this.target && this.selectTarget();
                            }
                        },
                        {
                            key: 'selectFake',
                            value: function () {
                                var t = this,
                                    e = 'rtl' == document.documentElement.getAttribute('dir');
                                this.removeFake(),
                                    (this.fakeHandlerCallback = function () {
                                        return t.removeFake();
                                    }),
                                    (this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || !0),
                                    (this.fakeElem = document.createElement('textarea')),
                                    (this.fakeElem.style.fontSize = '12pt'),
                                    (this.fakeElem.style.border = '0'),
                                    (this.fakeElem.style.padding = '0'),
                                    (this.fakeElem.style.margin = '0'),
                                    (this.fakeElem.style.position = 'absolute'),
                                    (this.fakeElem.style[e ? 'right' : 'left'] = '-9999px');
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                (this.fakeElem.style.top = n + 'px'),
                                    this.fakeElem.setAttribute('readonly', ''),
                                    (this.fakeElem.value = this.text),
                                    this.container.appendChild(this.fakeElem),
                                    (this.selectedText = (0, c.default)(this.fakeElem)),
                                    this.copyText();
                            }
                        },
                        {
                            key: 'removeFake',
                            value: function () {
                                this.fakeHandler &&
                                    (this.container.removeEventListener('click', this.fakeHandlerCallback),
                                    (this.fakeHandler = null),
                                    (this.fakeHandlerCallback = null)),
                                    this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                            }
                        },
                        {
                            key: 'selectTarget',
                            value: function () {
                                (this.selectedText = (0, c.default)(this.target)), this.copyText();
                            }
                        },
                        {
                            key: 'copyText',
                            value: function () {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action);
                                } catch (t) {
                                    e = !1;
                                }
                                this.handleResult(e);
                            }
                        },
                        {
                            key: 'handleResult',
                            value: function (t) {
                                this.emitter.emit(t ? 'success' : 'error', {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                });
                            }
                        },
                        {
                            key: 'clearSelection',
                            value: function () {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                            }
                        },
                        {
                            key: 'destroy',
                            value: function () {
                                this.removeFake();
                            }
                        },
                        {
                            key: 'action',
                            set: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'copy';
                                if (((this._action = t), 'copy' !== this._action && 'cut' !== this._action))
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            },
                            get: function () {
                                return this._action;
                            }
                        },
                        {
                            key: 'target',
                            set: function (t) {
                                if (void 0 !== t) {
                                    if (!t || 'object' !== (void 0 === t ? 'undefined' : r(t)) || 1 !== t.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ('copy' === this.action && t.hasAttribute('disabled'))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ('cut' === this.action && (t.hasAttribute('readonly') || t.hasAttribute('disabled')))
                                        throw new Error(
                                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                        );
                                    this._target = t;
                                }
                            },
                            get: function () {
                                return this._target;
                            }
                        }
                    ]),
                    e
                );
            })();
            t.exports = u;
        },
        function (t, e) {
            t.exports = function (t) {
                var e;
                if ('SELECT' === t.nodeName) t.focus(), (e = t.value);
                else if ('INPUT' === t.nodeName || 'TEXTAREA' === t.nodeName) {
                    var n = t.hasAttribute('readonly');
                    n || t.setAttribute('readonly', ''), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute('readonly'), (e = t.value);
                } else {
                    t.hasAttribute('contenteditable') && t.focus();
                    var o = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), (e = o.toString());
                }
                return e;
            };
        },
        function (t, e) {
            function n() {}
            (n.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
                },
                once: function (t, e, n) {
                    var o = this;
                    function r() {
                        o.off(t, r), e.apply(n, arguments);
                    }
                    return (r._ = e), this.on(t, r, n);
                },
                emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this;
                },
                off: function (t, e) {
                    var n = this.e || (this.e = {}),
                        o = n[t],
                        r = [];
                    if (o && e) for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? (n[t] = r) : delete n[t], this;
                }
            }),
                (t.exports = n);
        },
        function (t, e, n) {
            var d = n(5),
                h = n(6);
            t.exports = function (t, e, n) {
                if (!t && !e && !n) throw new Error('Missing required arguments');
                if (!d.string(e)) throw new TypeError('Second argument must be a String');
                if (!d.fn(n)) throw new TypeError('Third argument must be a Function');
                if (d.node(t))
                    return (
                        (s = e),
                        (f = n),
                        (l = t).addEventListener(s, f),
                        {
                            destroy: function () {
                                l.removeEventListener(s, f);
                            }
                        }
                    );
                if (d.nodeList(t))
                    return (
                        (a = t),
                        (c = e),
                        (u = n),
                        Array.prototype.forEach.call(a, function (t) {
                            t.addEventListener(c, u);
                        }),
                        {
                            destroy: function () {
                                Array.prototype.forEach.call(a, function (t) {
                                    t.removeEventListener(c, u);
                                });
                            }
                        }
                    );
                if (d.string(t)) return (o = t), (r = e), (i = n), h(document.body, o, r, i);
                throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                var o, r, i, a, c, u, l, s, f;
            };
        },
        function (t, n) {
            (n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
            }),
                (n.nodeList = function (t) {
                    var e = Object.prototype.toString.call(t);
                    return void 0 !== t && ('[object NodeList]' === e || '[object HTMLCollection]' === e) && 'length' in t && (0 === t.length || n.node(t[0]));
                }),
                (n.string = function (t) {
                    return 'string' == typeof t || t instanceof String;
                }),
                (n.fn = function (t) {
                    return '[object Function]' === Object.prototype.toString.call(t);
                });
        },
        function (t, e, n) {
            var a = n(7);
            function i(t, e, n, o, r) {
                var i = function (e, n, t, o) {
                    return function (t) {
                        (t.delegateTarget = a(t.target, n)), t.delegateTarget && o.call(e, t);
                    };
                }.apply(this, arguments);
                return (
                    t.addEventListener(n, i, r),
                    {
                        destroy: function () {
                            t.removeEventListener(n, i, r);
                        }
                    }
                );
            }
            t.exports = function (t, e, n, o, r) {
                return 'function' == typeof t.addEventListener
                    ? i.apply(null, arguments)
                    : 'function' == typeof n
                    ? i.bind(null, document).apply(null, arguments)
                    : ('string' == typeof t && (t = document.querySelectorAll(t)),
                      Array.prototype.map.call(t, function (t) {
                          return i(t, e, n, o, r);
                      }));
            };
        },
        function (t, e) {
            if ('undefined' != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
            }
            t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType; ) {
                    if ('function' == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode;
                }
            };
        }
    ]);
});
