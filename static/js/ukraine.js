!(function () {
    function e(e) {
        return e && e.__esModule ? e.default : e;
    }
    function t(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    function i(e, t, i) {
        return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                w = Object.keys(r);
            'function' == typeof Object.getOwnPropertySymbols &&
                (w = w.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })
                )),
                w.forEach(function (t) {
                    i(e, t, r[t]);
                });
        }
        return e;
    }
    function w(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i;
                }
            })(e) ||
            (function (e) {
                if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e);
            })(e) ||
            (function () {
                throw new TypeError('Invalid attempt to spread non-iterable instance');
            })()
        );
    }
    var a;
    a =
        '@import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";.huww-widget{bottom:auto;left:auto;overflow:hidden;pointer-events:none;position:fixed;right:auto;top:auto}.huww-widget.huww-widget-top-left{left:0;top:0}.huww-widget.huww-widget-top-right{right:0;top:0}.huww-widget.huww-widget-bottom-left{bottom:0;left:0}.huww-widget.huww-widget-bottom-right{bottom:0;right:0}.huww-widget.huww-widget-middle-left{left:0;top:50%;transform:translateY(-50%)}.huww-widget.huww-widget-middle-right{right:0;top:50%;transform:translateY(-50%)}.huww-slider{display:flex;flex-wrap:nowrap;transition:.35s ease}.huww-slider,.huww-slider.huww-slider-direction-vertical{flex-direction:column!important}[data-huww-slide=collapsed] .huww-slider,[data-huww-slide=collapsed] .huww-slider.huww-slider-direction-vertical{transform:translateY(0)}.huww-slider,.huww-slider.huww-slider-direction-vertical,[data-huww-slide=main] .huww-slider,[data-huww-slide=main] .huww-slider.huww-slider-direction-vertical{transform:translateY(-100%)}[data-huww-slide=expanded] .huww-slider,[data-huww-slide=expanded] .huww-slider.huww-slider-direction-vertical{transform:translateY(-200%)}.huww-slider.huww-slider-direction-horizontal{flex-direction:row!important}[data-huww-slide=collapsed] .huww-slider.huww-slider-direction-horizontal{transform:translateX(0)}.huww-slider.huww-slider-direction-horizontal,[data-huww-slide=main] .huww-slider.huww-slider-direction-horizontal{transform:translateX(-100%)}[data-huww-slide=expanded] .huww-slider.huww-slider-direction-horizontal{transform:translateX(-200%)}.huww-slide-container{pointer-events:none}.huww-slide{display:flex;flex:1 0 100%!important;opacity:0;transition:.35s ease}.huww-widget:not([data-huww-slide]) .huww-slide[data-huww-slide=main],[data-huww-slide=collapsed] .huww-slide[data-huww-slide=collapsed]{opacity:1}.huww-widget:not([data-huww-slide]) .huww-slide[data-huww-slide=main] .huww-slide-container,[data-huww-slide=collapsed] .huww-slide[data-huww-slide=collapsed] .huww-slide-container{pointer-events:all}.huww-widget:not([data-huww-slide]) .huww-slide[data-huww-slide=main],[data-huww-slide=main] .huww-slide[data-huww-slide=main]{opacity:1}.huww-widget:not([data-huww-slide]) .huww-slide[data-huww-slide=main] .huww-slide-container,[data-huww-slide=main] .huww-slide[data-huww-slide=main] .huww-slide-container{pointer-events:all}.huww-widget:not([data-huww-slide]) .huww-slide[data-huww-slide=main],[data-huww-slide=expanded] .huww-slide[data-huww-slide=expanded]{opacity:1}.huww-widget:not([data-huww-slide]) .huww-slide[data-huww-slide=main] .huww-slide-container,[data-huww-slide=expanded] .huww-slide[data-huww-slide=expanded] .huww-slide-container{pointer-events:all}.huww-widget-top-left .huww-slide{align-items:flex-start;justify-content:flex-start}.huww-widget-top-right .huww-slide{align-items:flex-start;justify-content:flex-end}.huww-widget-bottom-left .huww-slide{align-items:flex-end;justify-content:flex-start}.huww-widget-bottom-right .huww-slide{align-items:flex-end;justify-content:flex-end}.huww-widget-middle-left .huww-slide{align-items:center;justify-content:flex-start}.huww-widget-middle-right .huww-slide{align-items:center;justify-content:flex-end}.huww-trigger{cursor:pointer}.huww-widget{padding:17.92px;z-index:99999999}@media screen and (min-width:1024px){.huww-widget{padding:23.04px}}.huww-slide-container{background-color:#fff;border-radius:12.8px;box-shadow:0 4px 12px rgba(0,0,0,.1);position:relative;z-index:99999}@media screen and (max-width:1023px){.huww-slide-container{transition:.35s ease}.huww-widget-top-left .huww-slider[data-huww-slide=collapsed] .huww-slide-container{border-radius:0 0 12.8px 0;transform:translate(-17.92px,-17.92px)}.huww-widget-top-right .huww-slider[data-huww-slide=collapsed] .huww-slide-container{border-radius:0 0 0 12.8px;transform:translate(17.92px,-17.92px)}.huww-widget-bottom-left .huww-slider[data-huww-slide=collapsed] .huww-slide-container{border-radius:0 12.8px 0 0;transform:translate(-17.92px,17.92px)}.huww-widget-bottom-right .huww-slider[data-huww-slide=collapsed] .huww-slide-container{border-radius:12.8px 0 0 0;transform:translate(17.92px,17.92px)}.huww-widget-middle-left .huww-slider[data-huww-slide=collapsed] .huww-slide-container{border-radius:0 12.8px 12.8px 0;transform:translateX(-17.92px)}.huww-widget-middle-right .huww-slider[data-huww-slide=collapsed] .huww-slide-container{border-radius:12.8px 0 0 12.8px;transform:translateX(17.92px)}}.huww-button-collapse{background:#505050;border-radius:100%;cursor:pointer;display:block!important;height:19.2px;position:absolute;right:0;top:0;transform:translate(40%,-30%);transition:.2s ease;width:19.2px}.huww-button-collapse:after,.huww-button-collapse:before{background:#fff;content:"";height:10.24px;left:50%;position:absolute;top:50%;width:2px}.huww-button-collapse:before{transform:translate(-50%,-50%) rotate(-45deg)}.huww-button-collapse:after{transform:translate(-50%,-50%) rotate(45deg)}.huww-button-collapse:hover{background:#2559b5}.huww-widget-four{padding:19.2px 12.8px 12.8px 25.6px}.huww-widget-four .huww-half-flag{bottom:0;left:0;position:absolute;top:0;width:12.8px}.huww-widget-four .huww-hashtag{margin-bottom:12.8px;margin-top:3.2px}.huww-widget-three{padding:25.6px 12.8px 12.8px;text-align:center}.huww-widget-three .huww-title{color:#2559b5;font-size:22.4px;line-height:28.8px}.huww-widget-three .huww-subtitle{color:#f7d648;padding-bottom:12.8px}.huww-widget-two{margin-top:25.6px;padding:25.6px 12.8px 12.8px;text-align:center}.huww-widget-two .huww-divider{background:#e5e5e5;display:block;height:1px;margin:12.8px 0;width:100%}.huww-widget-two .huww-flag{margin:-51.2px auto 12.8px}.huww-widget-one{margin-right:19.2px;padding:12.8px 12.8px 12.8px 76.8px}.huww-widget-one .huww-flag{bottom:12.8px;height:57.6px;left:12.8px;position:absolute;top:12.8px}.huww-flag{width:51.2px}.huww-flag .huww-flag-top{background:#2559b5;border-radius:12.8px 12.8px 0 0;display:block;height:25.6px;width:51.2px}.huww-flag .huww-flag-bottom{background:#f7d648;border-radius:0 0 12.8px 12.8px;display:block;height:25.6px;width:51.2px}.huww-half-flag .huww-half-flag-top{background:#2559b5;border-radius:12.8px 0 0 0;display:block;height:25.6px;height:50%;width:51.2px;width:100%}.huww-half-flag .huww-half-flag-bottom{background:#f7d648;border-radius:0 0 0 12.8px;display:block;height:25.6px;height:50%;width:51.2px;width:100%}.huww-title{font-size:20.8px;line-height:25.6px}.huww-subtitle,.huww-title{font-family:Roboto,sans-serif;font-weight:700;margin:0;opacity:.8}.huww-subtitle{font-size:22.4px;line-height:28.8px}.huww-link{color:#2559b5;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:500;line-height:22.4px;padding-right:1em;position:relative;text-decoration:none}.huww-link:after{border-bottom:solid;border-left:solid;border-color:currentColor;border-right:2px;border-top:none;border-width:2px;color:inherit;content:"";display:block;font-size:inherit;height:.3em;position:absolute;right:.5em;top:50%;transform:translate(50%,-60%) rotate(-45deg);width:.3em}.huww-button{background:rgba(55,152,206,.12);border-radius:6.4px;color:#2559b5;display:block;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:500;line-height:41.6px;text-align:center;text-decoration:none}.huww-button:after{border-bottom:solid;border-left:solid;border-color:currentColor;border-right:2px;border-top:none;border-width:2px;color:inherit;content:"";display:inline-block;font-size:inherit;height:.3em;right:.5em;transform:translate(30%,-25%) rotate(-135deg);width:.3em}.huww-button:hover{text-decoration:underline}.huww-hashtag{color:#000;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:400;margin:0;opacity:.6}.huww-flag-wrapper{align-items:center;display:flex;flex-direction:column;height:70.4px;justify-content:center;width:70.4px}.huww-flag-wrapper .huww-separeted-flag-top{background:#2559b5;border-radius:12.8px 12.8px 0 0;display:block;height:25.6px;width:51.2px}.huww-flag-wrapper .huww-separeted-flag-bottom{background:#f7d648;border-radius:0 0 12.8px 12.8px;display:block;height:25.6px;width:51.2px}.huww-expended-widget-wrapper{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;height:auto;padding:6.4px;position:relative;width:328.96px}.huww-expended-widget-wrapper .huww-divider{background:#e5e5e5;display:block;height:.5px;margin:6.4px 0;width:100%}.huww-expended-widget-wrapper-small{padding:12.8px;width:246.4px}.huww-expended-widget-wrapper-small .huww-action{font-size:17.92px;padding:20.48px;width:246.4px}.huww-expended-widget-wrapper-small .huww-expended-widget-hide{font-size:16.64px}.huww-action{align-items:center;box-sizing:border-box;color:#2559b5;display:flex;font-family:Roboto,sans-serif;font-size:20.8px;font-weight:500;height:38.4px;justify-content:space-between;padding:25.6px;text-decoration:none;width:325.12px}.huww-action:hover{background:#2559b514;border-radius:3px}.huww-expended-widget-hide{align-items:center;color:#272727;cursor:pointer;display:flex;font-family:Roboto,sans-serif;font-size:19.2px;font-weight:500;justify-content:center;position:relative;width:100%}.huww-expended-widget-hide:after{border-bottom:solid;border-left:solid;border-color:currentColor;border-right:1px;border-top:none;border-width:1px;color:inherit;content:"";display:inline-block;font-size:inherit;height:.3em;margin-left:.3em;right:.5em;transform:translate(50%,30%) rotate(135deg);width:.3em}.huww-expended-widget-hide:hover{color:#2559b5}.huww-expended-widget-hide-button{align-self:end;background:#505050;border:none;border-radius:50%;bottom:0;cursor:pointer;display:flex;height:19.2px;position:absolute;right:0;transform:translate(40%,30%);width:19.2px}.huww-expended-widget-hide-button:before{border-bottom:2px #fff;border-left:solid;border-left-color:#fff;border-right:#fff;border-top:solid;border-top-color:#fff;border-width:2px;content:"";height:5.12px;left:50%;position:absolute;top:50%;transform:translate(-35%,-55%) rotate(-45deg);transition:.2s ease;width:5.12px}.huww-expended-widget-hide-button:hover{background:#2559b5}.huww-heart{color:#ff3f30}';
    var o = 'https://helpukrainewinwidget.org',
        n = ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'middle-left', 'middle-right'],
        d = ['collapsed', 'main', 'expanded'],
        l = ['one', 'two', 'three', 'four'],
        s = 'three',
        u = 'bottom-right',
        h = 'main',
        p = 'data-layout';
    function c(e, t, i) {
        return e && 'string' == typeof e && -1 !== t.indexOf(e) ? e : i;
    }
    function g() {
        return (
            document.currentScript ||
            document.getElementById('help-ukraine-win') ||
            Array.from(document.querySelectorAll('script')).find(function (e) {
                var t = e.getAttribute('src');
                if (t) {
                    var i = new URL(t, o);
                    return '/cdn/widget.js' === i.pathname && i.searchParams.has('type') && i.searchParams.has('position');
                }
                return !1;
            }) ||
            null
        );
    }
    function f() {
        var e = arguments[0];
        'string' == typeof e && (e = document.createElement(e));
        var t = 1,
            i = arguments[1];
        if (i && 'object' == typeof i && null == i.nodeType && !Array.isArray(i)) {
            for (var r in i)
                if (Object.prototype.hasOwnProperty.call(i, r)) {
                    var w = i[r];
                    'string' == typeof w ? e.setAttribute(r, w) : null != w && (e[r] = w);
                }
            t++;
        }
        for (; t < arguments.length; t++) b(e, arguments[t]);
        return e;
    }
    function b(e, t) {
        if ('string' == typeof t) e.appendChild(document.createTextNode(t));
        else if (null == t);
        else if (null != t.nodeType) e.appendChild(t);
        else {
            if (!Array.isArray(t)) throw new RangeError('Unsupported child node: ' + t);
            for (var i = 0; i < t.length; i++) b(e, t[i]);
        }
    }
    function x(e, t) {
        return k(
            e,
            t,
            'vertical',
            f(
                'div',
                { class: 'huww-slide-container huww-widget-one' },
                E(),
                f('p', { class: 'huww-title' }, 'Stop Russian Aggression!'),
                f('a', { class: 'huww-link huww-trigger', 'data-huww-trigger': d[2], href: '#' }, 'See what you can do'),
                S()
            ),
            j(),
            f(
                'div',
                { class: 'huww-expended-widget-wrapper huww-slide-container' },
                P(),
                f('div', { class: 'huww-divider' }),
                f('div', { class: 'huww-expended-widget-hide huww-trigger', 'data-huww-trigger': d[1] }, 'Hide')
            )
        );
    }
    function m(e, t) {
        return k(
            e,
            t,
            'vertical',
            f(
                'div',
                { class: 'huww-slide-container huww-widget-two' },
                E(),
                f('p', { class: 'huww-title' }, 'Stop War! You can help!'),
                f('div', { class: 'huww-divider' }),
                f('a', { class: 'huww-link huww-trigger', 'data-huww-trigger': d[2], href: '#' }, 'See what you can do'),
                S()
            ),
            j(),
            z()
        );
    }
    function y(e, t) {
        return k(
            e,
            t,
            'horizontal',
            f(
                'div',
                { class: 'huww-slide-container huww-widget-three' },
                f('p', { class: 'huww-title' }, 'Stop War!'),
                f('p', { class: 'huww-subtitle' }, 'Help Ukraine!'),
                f('a', { class: 'huww-button huww-trigger', 'data-huww-trigger': d[2], href: '#' }, 'See how'),
                S()
            ),
            j(),
            f(
                'div',
                { class: 'huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container' },
                P(),
                f('button', { class: 'huww-expended-widget-hide-button huww-trigger', 'data-huww-trigger': d[1] })
            )
        );
    }
    function v(e, t) {
        return k(
            e,
            t,
            'vertical',
            f(
                'div',
                { class: 'huww-slide-container huww-widget-four' },
                f('p', { class: 'huww-title' }, 'Help 🇺🇦 Ukraine win!'),
                f('p', { class: 'huww-hashtag' }, '#StandWithUkraine'),
                f('a', { class: 'huww-link huww-trigger', 'data-huww-trigger': d[2], href: '#' }, 'See how to help'),
                S(),
                f('div', { class: 'huww-half-flag' }, f('div', { class: 'huww-half-flag-top' }), f('div', { class: 'huww-half-flag-bottom' }))
            ),
            j(),
            z()
        );
    }
    function k(e, t, i, r, w, a) {
        return f(
            'div',
            { class: 'huww-widget huww-widget-'.concat(e), 'data-huww-slide': t },
            f(
                'div',
                { class: 'huww-slider huww-slider-direction-'.concat(i), style: 'width:'.concat(400, 'px;height:').concat(250, 'px;') },
                A('collapsed', w),
                A('main', r),
                A('expanded', a)
            )
        );
    }
    function A(e, t) {
        return f('div', { class: 'huww-slide', 'data-huww-slide': e }, t);
    }
    function S() {
        return f('div', { class: 'huww-button-collapse huww-trigger', 'data-huww-trigger': d[0] });
    }
    function E() {
        return f('div', { class: 'huww-flag' }, f('div', { class: 'huww-flag-top' }), f('div', { class: 'huww-flag-bottom' }));
    }
    function j() {
        return f(
            'div',
            { class: 'huww-flag-wrapper huww-trigger huww-slide-container', 'data-huww-trigger': d[1] },
            f('div', { class: 'huww-separeted-flag-top' }),
            f('div', { class: 'huww-separeted-flag-bottom' })
        );
    }
    function z() {
        return f(
            'div',
            { class: 'huww-expended-widget-wrapper huww-expended-widget-wrapper-small huww-slide-container' },
            P(),
            f('div', { class: 'huww-divider' }),
            f('div', { class: 'huww-expended-widget-hide huww-trigger', 'data-huww-trigger': d[1] }, 'Hide')
        );
    }
    function P() {
        return f(
            'div',
            { class: 'huww-action-list' },
            L('https://uahelp.monobank.ua', 'Donate', '💸', 'Donate'),
            L('https://war.ukraine.ua', 'Support Ukraine', '❤', 'Info', 'huww-heart'),
            L(o, 'Share this widget', '📌', 'GetWidget')
        );
    }
    function L(e, t, i, r, w) {
        return f(
            'a',
            { class: 'huww-action', target: '_blank', 'data-huww-action': r, href: e, rel: 'nofollow noopener' },
            f('span', {}, t),
            f('span', { class: w }, i)
        );
    }
    function O() {
        document.querySelectorAll('.huww-widget').forEach(function (e) {
            return (function (e) {
                var t = e.querySelectorAll('.huww-trigger'),
                    i = e.querySelectorAll('.huww-widget a'),
                    r = T.get();
                !window.__HELPUKRAINEWIDGET_DISABLE_PERSISTENCE && r && (e.dataset.huwwSlide = r);
                t.forEach(function (t) {
                    t.addEventListener('click', function (i) {
                        i.preventDefault();
                        var r = t.dataset.huwwTrigger;
                        (e.dataset.huwwSlide = r), T.set(r);
                        try {
                            window.plausible && window.plausible('ChangeState', { props: { state: r } });
                        } catch (e) {}
                    });
                }),
                    i.forEach(function (e) {
                        e.addEventListener('click', function (t) {
                            if (e.hasAttribute('href'))
                                try {
                                    window.plausible && window.plausible('Outbound Link: Click', { props: { url: e.getAttribute('href') } });
                                } catch (e) {}
                        });
                    });
            })(e);
        });
    }
    var T = new ((function () {
        'use strict';
        function e(t) {
            !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
                (this.key = t);
        }
        var i, r, w;
        return (
            (i = e),
            (r = [
                {
                    key: 'get',
                    value: function () {
                        return 'true' === localStorage.getItem(this.key) ? 'collapsed' : 'false' === localStorage.getItem(this.key) ? 'main' : null;
                    }
                },
                {
                    key: 'set',
                    value: function (e) {
                        localStorage.setItem(this.key, ('collapsed' === e).toString());
                    }
                }
            ]) && t(i.prototype, r),
            w && t(i, w),
            e
        );
    })())('huww-slider-state');
    'loading' !== document.readyState ? setTimeout(R) : document.addEventListener('DOMContentLoaded', R);
    var C,
        D,
        I = (function () {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : { widgetType: s, widgetPosition: u, widgetLayout: h, widgetDomain: window.location.hostname },
                t = g(),
                i = null == t ? void 0 : t.getAttribute('src'),
                w = r({}, e);
            if (!i) return w;
            try {
                var a = new URL(i, o);
                (w.widgetType = c(a.searchParams.get('type'), l, e.widgetType)),
                    (w.widgetPosition = c(a.searchParams.get('position'), n, e.widgetPosition)),
                    (w.widgetLayout = c(a.searchParams.get('layout'), d, e.widgetLayout)),
                    (w.widgetDomain = a.searchParams.get('domain') || e.widgetDomain);
            } catch (e) {
                console.error(e);
            }
            return w;
        })(
            ((C = g()),
            (D = c(null == C ? void 0 : C.getAttribute('data-type'), l, s)),
            {
                widgetPosition: c(null == C ? void 0 : C.getAttribute('data-position'), n, u),
                widgetType: D,
                widgetLayout: c(null == C ? void 0 : C.getAttribute(p), d, h),
                widgetDomain: (null == C ? void 0 : C.getAttribute(p)) || window.location.hostname
            })
        );
    function R() {
        var t, i, r, o;
        !(function () {
            if (window.__HELPUKRAINEWIDGET_DISABLE_ANALYICS) return;
            var e = document.createElement('script');
            e.setAttribute('src', 'https://analytics.helpukrainewinwidget.org/js/script.js'),
                e.setAttribute('defer', ''),
                e.setAttribute('data-domain', w(I.widgetDomain.split(',')).concat(['rollup-analytics.helpukrainewinwidget.org']).join(',')),
                document.head.appendChild(e);
        })(),
            (t = document.createElement('style')),
            document.head.appendChild(t),
            t.appendChild(document.createTextNode(e(a))),
            document.body.append(((i = I.widgetType), (r = I.widgetPosition), (o = I.widgetLayout), { one: x, two: m, three: y, four: v }[i](r, o))),
            O();
    }
})();
//# sourceMappingURL=index.js.map
