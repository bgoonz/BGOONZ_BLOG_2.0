import {
    S as e,
    i as t,
    s,
    D as a,
    z as r,
    E as l,
    e as c,
    c as o,
    a as n,
    d as i,
    b as f,
    f as h,
    F as v,
    v as d,
    r as u,
    t as g,
    g as m,
    G as p,
    H as $,
    C as w,
    I as x,
    J as b,
    k as y,
    j as E,
    n as k,
    m as I,
    o as L,
    w as A,
    B as D,
    u as N,
    K as _,
    l as S,
    L as j,
    M as C,
    N as B,
    O as T,
    P as G,
    Q as F,
    R as V,
    T as H
} from '../chunks/index-0a115175.js';
import { p as P } from '../chunks/stores-6ede6f6c.js';
import { r as z } from '../chunks/singletons-6b53f818.js';
import { s as M } from '../chunks/helper-7638eca7.js';
import { w as R } from '../chunks/index-ab5856d2.js';
import { L as K } from '../chunks/logo-60efa4e2.js';
import { f as O } from '../chunks/index-05581432.js';
function U(e, t, s) {
    let l;
    var c;
    a(e, P, (e) => s(1, (l = e)));
    const o =
        'undefined' != typeof window && 'www.gitpod.io' === window.location.hostname ? '5aJzy2ASNbqx8I0kwppRflDZpL7pS1GO' : 'Xe5zR3MbnyxHsveZr4HvrY35PL9iT0EH';
    return (
        r(async () => {
            var e = (window.analytics = window.analytics || []);
            if (!e.initialize)
                if (e.invoked) window.console && console.error && console.error('Segment snippet included twice.');
                else {
                    (e.invoked = !0),
                        (e.methods = [
                            'trackSubmit',
                            'trackClick',
                            'trackLink',
                            'trackForm',
                            'pageview',
                            'identify',
                            'reset',
                            'group',
                            'track',
                            'ready',
                            'alias',
                            'debug',
                            'page',
                            'once',
                            'off',
                            'on',
                            'addSourceMiddleware',
                            'addIntegrationMiddleware',
                            'setAnonymousId',
                            'addDestinationMiddleware'
                        ]),
                        (e.factory = function (t) {
                            return function () {
                                var s = Array.prototype.slice.call(arguments);
                                return s.unshift(t), e.push(s), e;
                            };
                        });
                    for (var t = 0; t < e.methods.length; t++) {
                        var s = e.methods[t];
                        e[s] = e.factory(s);
                    }
                    (e.load = function (t, s) {
                        var a = document.createElement('script');
                        (a.type = 'text/javascript'), (a.async = !0), (a.src = 'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js');
                        var r = document.getElementsByTagName('script')[0];
                        r.parentNode.insertBefore(a, r), (e._loadOptions = s);
                    }),
                        (e._writeKey = o),
                        (e.SNIPPET_VERSION = '4.13.2'),
                        'undefined' == typeof navigator ||
                        (1 !== parseInt(navigator.doNotTrack) &&
                            1 !== parseInt(window.doNotTrack) &&
                            1 !== parseInt(navigator.msDoNotTrack) &&
                            'yes' !== navigator.doNotTrack)
                            ? e.load(o)
                            : (e.initialize = !0),
                        e.page();
                }
        }),
        (e.$$.update = () => {
            3 & e.$$.dirty && (l.path, 'undefined' != typeof window && (null === s(0, (c = window.analytics)) || void 0 === c || c.page()));
        }),
        [c, l]
    );
}
class q extends e {
    constructor(e) {
        super(), t(this, e, U, null, s, {});
    }
}
function J(e) {
    let t, s;
    const a = e[1].default,
        r = l(a, e, e[0], null);
    return {
        c() {
            (t = c('main')), r && r.c(), this.h();
        },
        l(e) {
            t = o(e, 'MAIN', { class: !0 });
            var s = n(t);
            r && r.l(s), s.forEach(i), this.h();
        },
        h() {
            f(t, 'class', 'svelte-1c2lq7w');
        },
        m(e, a) {
            h(e, t, a), r && r.m(t, null), (s = !0);
        },
        p(e, [t]) {
            r && r.p && 1 & t && v(r, a, e, e[0], t, null, null);
        },
        i(e) {
            s || (d(r, e), (s = !0));
        },
        o(e) {
            u(r, e), (s = !1);
        },
        d(e) {
            e && i(t), r && r.d(e);
        }
    };
}
function Y(e, t, s) {
    let { $$slots: a = {}, $$scope: r } = t;
    return (
        (e.$$set = (e) => {
            '$$scope' in e && s(0, (r = e.$$scope));
        }),
        [r, a]
    );
}
class Z extends e {
    constructor(e) {
        super(), t(this, e, Y, J, s, {});
    }
}
function Q(e) {
    let t, s;
    const a = e[1].default,
        r = l(a, e, e[0], null);
    return {
        c() {
            (t = c('div')), r && r.c(), this.h();
        },
        l(e) {
            t = o(e, 'DIV', { class: !0 });
            var s = n(t);
            r && r.l(s), s.forEach(i), this.h();
        },
        h() {
            f(t, 'class', 'svelte-expkgt');
        },
        m(e, a) {
            h(e, t, a), r && r.m(t, null), (s = !0);
        },
        p(e, [t]) {
            r && r.p && 1 & t && v(r, a, e, e[0], t, null, null);
        },
        i(e) {
            s || (d(r, e), (s = !0));
        },
        o(e) {
            u(r, e), (s = !1);
        },
        d(e) {
            e && i(t), r && r.d(e);
        }
    };
}
function X(e, t, s) {
    let { $$slots: a = {}, $$scope: r } = t;
    return (
        (e.$$set = (e) => {
            '$$scope' in e && s(0, (r = e.$$scope));
        }),
        [r, a]
    );
}
class W extends e {
    constructor(e) {
        super(), t(this, e, X, Q, s, {});
    }
}
const ee = async function (e, t) {
    return z.goto(e, t, []);
};
function te(e) {
    let t, s, a, r;
    return {
        c() {
            (t = c('a')), (s = g('Login')), this.h();
        },
        l(e) {
            t = o(e, 'A', { href: !0, class: !0 });
            var a = n(t);
            (s = m(a, 'Login')), a.forEach(i), this.h();
        },
        h() {
            f(t, 'href', 'https://gitpod.io/login/'),
                f(
                    t,
                    'class',
                    'flex items-center justify-center h-8 w-20 rounded-xl bg-black font-bold text-off-white text-sm focus:text-off-white focus:bg-black-hover hover:text-off-white hover:bg-black-hover'
                );
        },
        m(l, c) {
            h(l, t, c), p(t, s), a || ((r = $(t, 'click', e[0])), (a = !0));
        },
        p: w,
        i: w,
        o: w,
        d(e) {
            e && i(t), (a = !1), r();
        }
    };
}
function se(e) {
    return [() => window.analytics.track('dashboard_clicked', { context: 'header_button' })];
}
class ae extends e {
    constructor(e) {
        super(), t(this, e, se, te, s, {});
    }
}
function re(e) {
    let t, s, a, r;
    return {
        c() {
            (t = c('a')), (s = g(e[3])), this.h();
        },
        l(a) {
            t = o(a, 'A', { href: !0, 'sveltekit:prefetch': !0, class: !0 });
            var r = n(t);
            (s = m(r, e[3])), r.forEach(i), this.h();
        },
        h() {
            f(t, 'href', e[1]),
                f(t, 'sveltekit:prefetch', ''),
                f(t, 'class', 'text-black text-p-large sm:text-dark-grey sm:hover:text-black sm:focus:text-black svelte-qtdv9u'),
                x(t, 'active', e[0]),
                x(t, 'highlighted', e[2]);
        },
        m(l, c) {
            h(l, t, c), p(t, s), a || ((r = $(t, 'click', e[6])), (a = !0));
        },
        p(e, [s]) {
            1 & s && x(t, 'active', e[0]);
        },
        i: w,
        o: w,
        d(e) {
            e && i(t), (a = !1), r();
        }
    };
}
function le(e, t, s) {
    let r, l;
    a(e, P, (e) => s(5, (l = e)));
    let { navItem: c } = t;
    const { href: o, isHighlighted: n, label: i } = c;
    return (
        (e.$$set = (e) => {
            'navItem' in e && s(4, (c = e.navItem));
        }),
        (e.$$.update = () => {
            32 & e.$$.dirty && s(0, (r = '/' === l.path ? /\/$/.test(o) : o.indexOf(l.path) >= 0));
        }),
        [
            r,
            o,
            n,
            i,
            c,
            l,
            function (t) {
                b(e, t);
            }
        ]
    );
}
class ce extends e {
    constructor(e) {
        super(), t(this, e, le, re, s, { navItem: 4 });
    }
}
var oe = R(!1);
function ne(e, t, s) {
    const a = e.slice();
    return (a[3] = t[s]), a;
}
function ie(e) {
    let t,
        s,
        a,
        r,
        l = e[0],
        v = [];
    for (let c = 0; c < l.length; c += 1) v[c] = fe(ne(e, l, c));
    const g = (e) =>
        u(v[e], 1, 1, () => {
            v[e] = null;
        });
    return (
        (a = new ae({})),
        {
            c() {
                t = c('div');
                for (let e = 0; e < v.length; e += 1) v[e].c();
                (s = y()), E(a.$$.fragment), this.h();
            },
            l(e) {
                t = o(e, 'DIV', { class: !0 });
                var r = n(t);
                for (let t = 0; t < v.length; t += 1) v[t].l(r);
                (s = k(r)), I(a.$$.fragment, r), r.forEach(i), this.h();
            },
            h() {
                f(t, 'class', 'nav-items absolute flex flex-col pt-10 pb-16 w-screen items-center bg-off-white space-y-xx-small z-10 shadow-md svelte-1aoyuzy');
            },
            m(e, l) {
                h(e, t, l);
                for (let s = 0; s < v.length; s += 1) v[s].m(t, null);
                p(t, s), L(a, t, null), (r = !0);
            },
            p(e, a) {
                if (3 & a) {
                    let r;
                    for (l = e[0], r = 0; r < l.length; r += 1) {
                        const c = ne(e, l, r);
                        v[r] ? (v[r].p(c, a), d(v[r], 1)) : ((v[r] = fe(c)), v[r].c(), d(v[r], 1), v[r].m(t, s));
                    }
                    for (D(), r = l.length; r < v.length; r += 1) g(r);
                    N();
                }
            },
            i(e) {
                if (!r) {
                    for (let e = 0; e < l.length; e += 1) d(v[e]);
                    d(a.$$.fragment, e), (r = !0);
                }
            },
            o(e) {
                v = v.filter(Boolean);
                for (let t = 0; t < v.length; t += 1) u(v[t]);
                u(a.$$.fragment, e), (r = !1);
            },
            d(e) {
                e && i(t), _(v, e), A(a);
            }
        }
    );
}
function fe(e) {
    let t, s;
    return (
        (t = new ce({ props: { navItem: e[3] } })),
        t.$on('click', e[2]),
        {
            c() {
                E(t.$$.fragment);
            },
            l(e) {
                I(t.$$.fragment, e);
            },
            m(e, a) {
                L(t, e, a), (s = !0);
            },
            p(e, s) {
                const a = {};
                1 & s && (a.navItem = e[3]), t.$set(a);
            },
            i(e) {
                s || (d(t.$$.fragment, e), (s = !0));
            },
            o(e) {
                u(t.$$.fragment, e), (s = !1);
            },
            d(e) {
                A(t, e);
            }
        }
    );
}
function he(e) {
    let t,
        s,
        a = e[1] && ie(e);
    return {
        c() {
            a && a.c(), (t = S());
        },
        l(e) {
            a && a.l(e), (t = S());
        },
        m(e, r) {
            a && a.m(e, r), h(e, t, r), (s = !0);
        },
        p(e, [s]) {
            e[1]
                ? a
                    ? (a.p(e, s), 2 & s && d(a, 1))
                    : ((a = ie(e)), a.c(), d(a, 1), a.m(t.parentNode, t))
                : a &&
                  (D(),
                  u(a, 1, 1, () => {
                      a = null;
                  }),
                  N());
        },
        i(e) {
            s || (d(a), (s = !0));
        },
        o(e) {
            u(a), (s = !1);
        },
        d(e) {
            a && a.d(e), e && i(t);
        }
    };
}
function ve(e, t, s) {
    let l;
    a(e, oe, (e) => s(1, (l = e)));
    let { navItems: c = [] } = t;
    r(() => {
        window.matchMedia('(min-width: 931px)').addEventListener('change', (e) => {
            e.matches && (j(oe, (l = !1), l), M(!1));
        });
    });
    return (
        (e.$$set = (e) => {
            'navItems' in e && s(0, (c = e.navItems));
        }),
        [
            c,
            l,
            () => {
                j(oe, (l = !l), l), M(!1);
            }
        ]
    );
}
class de extends e {
    constructor(e) {
        super(), t(this, e, ve, he, s, { navItems: 0 });
    }
}
function ue(e) {
    let t, s, a;
    return {
        c() {
            (t = C('svg')), (s = C('rect')), (a = C('rect')), this.h();
        },
        l(e) {
            t = o(e, 'svg', { width: !0, height: !0, viewBox: !0, fill: !0, xmlns: !0 }, 1);
            var r = n(t);
            (s = o(r, 'rect', { width: !0, height: !0, rx: !0, fill: !0 }, 1)),
                n(s).forEach(i),
                (a = o(r, 'rect', { y: !0, width: !0, height: !0, rx: !0, fill: !0 }, 1)),
                n(a).forEach(i),
                r.forEach(i),
                this.h();
        },
        h() {
            f(s, 'width', '16'),
                f(s, 'height', '2'),
                f(s, 'rx', '1'),
                f(s, 'fill', '#F4F2F1'),
                f(a, 'y', '6'),
                f(a, 'width', '16'),
                f(a, 'height', '2'),
                f(a, 'rx', '1'),
                f(a, 'fill', '#F3F1F0'),
                f(t, 'width', '16'),
                f(t, 'height', '8'),
                f(t, 'viewBox', '0 0 16 8'),
                f(t, 'fill', 'none'),
                f(t, 'xmlns', 'http://www.w3.org/2000/svg');
        },
        m(e, r) {
            h(e, t, r), p(t, s), p(t, a);
        },
        d(e) {
            e && i(t);
        }
    };
}
function ge(e) {
    let t, s;
    return {
        c() {
            (t = C('svg')), (s = C('path')), this.h();
        },
        l(e) {
            t = o(e, 'svg', { xmlns: !0, fill: !0, width: !0, height: !0, viewBox: !0 }, 1);
            var a = n(t);
            (s = o(a, 'path', { fill: !0, 'fill-rule': !0, d: !0, 'clip-rule': !0 }, 1)), n(s).forEach(i), a.forEach(i), this.h();
        },
        h() {
            f(s, 'fill', '#F3F1F0'),
                f(s, 'fill-rule', 'evenodd'),
                f(
                    s,
                    'd',
                    'M10.242 11.657a1 1 0 001.414-1.414L7.413 6l4.243-4.243A1 1 0 0010.242.343L5.999 4.586 1.757.343A1 1 0 10.342 1.757L4.585 6 .342 10.243a1 1 0 001.415 1.414l4.242-4.243 4.243 4.243z'
                ),
                f(s, 'clip-rule', 'evenodd'),
                f(t, 'xmlns', 'http://www.w3.org/2000/svg'),
                f(t, 'fill', 'none'),
                f(t, 'width', '12'),
                f(t, 'height', '12'),
                f(t, 'viewBox', '0 0 12 12');
        },
        m(e, a) {
            h(e, t, a), p(t, s);
        },
        d(e) {
            e && i(t);
        }
    };
}
function me(e) {
    let t, s, a;
    function r(e, t) {
        return e[0] ? ge : ue;
    }
    let l = r(e),
        v = l(e);
    return {
        c() {
            (t = c('button')), v.c(), this.h();
        },
        l(e) {
            t = o(e, 'BUTTON', { 'aria-label': !0, class: !0 });
            var s = n(t);
            v.l(s), s.forEach(i), this.h();
        },
        h() {
            f(t, 'aria-label', 'Show / hiide nav items'), f(t, 'class', 'flex justify-center items-center h-6 w-12 rounded-xl bg-black svelte-z7a2ag');
        },
        m(r, l) {
            h(r, t, l), v.m(t, null), s || ((a = $(t, 'click', e[1])), (s = !0));
        },
        p(e, [s]) {
            l !== (l = r(e)) && (v.d(1), (v = l(e)), v && (v.c(), v.m(t, null)));
        },
        i: w,
        o: w,
        d(e) {
            e && i(t), v.d(), (s = !1), a();
        }
    };
}
function pe(e, t, s) {
    let r;
    a(e, oe, (e) => s(0, (r = e)));
    return [
        r,
        () => {
            j(oe, (r = !r), r), M(!!r);
        }
    ];
}
class $e extends e {
    constructor(e) {
        super(), t(this, e, pe, me, s, {});
    }
}
function we(e, t, s) {
    const a = e.slice();
    return (a[5] = t[s]), a;
}
function xe(e) {
    let t, s;
    return (
        (t = new ce({ props: { navItem: e[5] } })),
        t.$on('click', e[4]),
        {
            c() {
                E(t.$$.fragment);
            },
            l(e) {
                I(t.$$.fragment, e);
            },
            m(e, a) {
                L(t, e, a), (s = !0);
            },
            p: w,
            i(e) {
                s || (d(t.$$.fragment, e), (s = !0));
            },
            o(e) {
                u(t.$$.fragment, e), (s = !1);
            },
            d(e) {
                A(t, e);
            }
        }
    );
}
function be(e) {
    let t, s, a, r, l, v, g, m, w, x, b, S, j, C, F, V, H;
    r = new K({});
    let P = e[1],
        z = [];
    for (let c = 0; c < P.length; c += 1) z[c] = xe(we(e, P, c));
    const M = (e) =>
        u(z[e], 1, 1, () => {
            z[e] = null;
        });
    return (
        (w = new ae({})),
        (b = new $e({})),
        (j = new de({ props: { navItems: e[1] } })),
        {
            c() {
                (t = c('nav')), (s = c('div')), (a = c('a')), E(r.$$.fragment), (l = y()), (v = c('div'));
                for (let e = 0; e < z.length; e += 1) z[e].c();
                (g = y()), (m = c('div')), E(w.$$.fragment), (x = y()), E(b.$$.fragment), (S = y()), E(j.$$.fragment), this.h();
            },
            l(e) {
                t = o(e, 'NAV', { id: !0, class: !0 });
                var c = n(t);
                s = o(c, 'DIV', { class: !0 });
                var f = n(s);
                a = o(f, 'A', { href: !0, 'aria-label': !0 });
                var h = n(a);
                I(r.$$.fragment, h), h.forEach(i), (l = k(f)), (v = o(f, 'DIV', { class: !0 }));
                var d = n(v);
                for (let t = 0; t < z.length; t += 1) z[t].l(d);
                d.forEach(i), (g = k(f)), (m = o(f, 'DIV', { class: !0 }));
                var u = n(m);
                I(w.$$.fragment, u), u.forEach(i), (x = k(f)), I(b.$$.fragment, f), f.forEach(i), (S = k(c)), I(j.$$.fragment, c), c.forEach(i), this.h();
            },
            h() {
                f(a, 'href', '/'),
                    f(a, 'aria-label', 'Gitpod'),
                    f(v, 'class', 'nav-items hidden px-2 space-x-6 items-center md:space-x-12 svelte-tcyliy'),
                    f(m, 'class', 'login-wrapper hidden svelte-tcyliy'),
                    f(s, 'class', 'flex items-center justify-between h-20 px-4 sm:px-8'),
                    f(t, 'id', 'choose-project-observer-target-top'),
                    f(t, 'class', (C = B((e[0] ? 'bg-off-white ' : '') + 'mx-auto w-full') + ' svelte-tcyliy'));
            },
            m(c, o) {
                h(c, t, o), p(t, s), p(s, a), L(r, a, null), p(s, l), p(s, v);
                for (let e = 0; e < z.length; e += 1) z[e].m(v, null);
                p(s, g),
                    p(s, m),
                    L(w, m, null),
                    p(s, x),
                    L(b, s, null),
                    p(t, S),
                    L(j, t, null),
                    (F = !0),
                    V || ((H = [$(a, 'contextmenu', T(e[2])), $(a, 'click', e[3])]), (V = !0));
            },
            p(e, [s]) {
                if (3 & s) {
                    let t;
                    for (P = e[1], t = 0; t < P.length; t += 1) {
                        const a = we(e, P, t);
                        z[t] ? (z[t].p(a, s), d(z[t], 1)) : ((z[t] = xe(a)), z[t].c(), d(z[t], 1), z[t].m(v, null));
                    }
                    for (D(), t = P.length; t < z.length; t += 1) M(t);
                    N();
                }
                (!F || (1 & s && C !== (C = B((e[0] ? 'bg-off-white ' : '') + 'mx-auto w-full') + ' svelte-tcyliy'))) && f(t, 'class', C);
            },
            i(e) {
                if (!F) {
                    d(r.$$.fragment, e);
                    for (let e = 0; e < P.length; e += 1) d(z[e]);
                    d(w.$$.fragment, e), d(b.$$.fragment, e), d(j.$$.fragment, e), (F = !0);
                }
            },
            o(e) {
                u(r.$$.fragment, e), (z = z.filter(Boolean));
                for (let t = 0; t < z.length; t += 1) u(z[t]);
                u(w.$$.fragment, e), u(b.$$.fragment, e), u(j.$$.fragment, e), (F = !1);
            },
            d(e) {
                e && i(t), A(r), _(z, e), A(w), A(b), A(j), (V = !1), G(H);
            }
        }
    );
}
function ye(e, t, s) {
    let r;
    a(e, oe, (e) => s(0, (r = e)));
    return [
        r,
        [
            { href: '/features', label: 'Features' },
            { href: '/screencasts', label: 'Screencasts', isHighlighted: !0 },
            { href: '/blog', label: 'Blog' },
            { href: '/docs', label: 'Docs' },
            { href: '/changelog', label: 'Changelog' },
            { href: '/pricing', label: 'Pricing' }
        ],
        () => ee('/media-kit'),
        () => {
            j(oe, (r = !oe), r), M(!1);
        },
        () => j(oe, (r = !r), r)
    ];
}
class Ee extends e {
    constructor(e) {
        super(), t(this, e, ye, be, s, {});
    }
}
function ke(e, t, s) {
    const a = e.slice();
    return (a[5] = t[s]), a;
}
function Ie(e) {
    let t, s, a, r, l, v;
    function d() {
        return e[4](e[5]);
    }
    return {
        c() {
            (t = c('a')), (s = c('img')), (r = y()), this.h();
        },
        l(e) {
            t = o(e, 'A', { href: !0, class: !0 });
            var a = n(t);
            (s = o(a, 'IMG', { src: !0, alt: !0, height: !0, width: !0 })), (r = k(a)), a.forEach(i), this.h();
        },
        h() {
            s.src !== (a = e[5].icon) && f(s, 'src', a),
                f(s, 'alt', e[5].alt),
                f(s, 'height', '24'),
                f(s, 'width', '24'),
                f(t, 'href', e[5].href),
                f(t, 'class', 'footer__social-link svelte-1ivs93t');
        },
        m(e, a) {
            h(e, t, a), p(t, s), p(t, r), l || ((v = $(t, 'click', d)), (l = !0));
        },
        p(t, s) {
            e = t;
        },
        d(e) {
            e && i(t), (l = !1), v();
        }
    };
}
function Le(e) {
    let t,
        s,
        a,
        r,
        l,
        v,
        d,
        u,
        x,
        b,
        E,
        I,
        L,
        A,
        D,
        N,
        S,
        j,
        C,
        B,
        T,
        F,
        V,
        H,
        P,
        z,
        M,
        R,
        K,
        O,
        U,
        q,
        J,
        Y,
        Z,
        Q,
        X,
        W,
        ee,
        te,
        se,
        ae,
        re,
        le,
        ce,
        oe,
        ne,
        ie,
        fe,
        he,
        ve,
        de,
        ue,
        ge,
        me,
        pe,
        $e,
        we,
        xe,
        be,
        ye,
        Ee,
        Le,
        Ae,
        De,
        Ne,
        _e,
        Se,
        je,
        Ce,
        Be,
        Te,
        Ge,
        Fe,
        Ve,
        He,
        Pe,
        ze,
        Me,
        Re,
        Ke,
        Oe,
        Ue,
        qe,
        Je,
        Ye,
        Ze,
        Qe,
        Xe,
        We,
        et,
        tt,
        st,
        at,
        rt,
        lt,
        ct,
        ot,
        nt,
        it,
        ft,
        ht,
        vt,
        dt,
        ut,
        gt,
        mt,
        pt,
        $t,
        wt,
        xt,
        bt,
        yt,
        Et,
        kt,
        It,
        Lt = new Date().getFullYear() + '',
        At = e[0],
        Dt = [];
    for (let c = 0; c < At.length; c += 1) Dt[c] = Ie(ke(e, At, c));
    return {
        c() {
            (t = c('div')),
                (s = c('footer')),
                (a = c('div')),
                (r = c('ul')),
                (l = c('li')),
                (v = g('Gitpod')),
                (d = y()),
                (u = c('li')),
                (x = c('a')),
                (b = g('Home')),
                (E = y()),
                (I = c('li')),
                (L = c('a')),
                (A = g('Features')),
                (D = y()),
                (N = c('li')),
                (S = c('a')),
                (j = g('Pricing')),
                (C = y()),
                (B = c('li')),
                (T = c('a')),
                (F = g('Changelog')),
                (V = y()),
                (H = c('li')),
                (P = c('a')),
                (z = g('Self-Hosted')),
                (M = y()),
                (R = c('li')),
                (K = c('a')),
                (O = g('Gitpod vs GitHub ')),
                (U = c('br')),
                (q = g('Codespaces')),
                (J = y()),
                (Y = c('li')),
                (Z = c('a')),
                (Q = g('Status')),
                (X = y()),
                (W = c('ul')),
                (ee = c('li')),
                (te = g('Developer')),
                (se = y()),
                (ae = c('li')),
                (re = c('a')),
                (le = g('Getting started')),
                (ce = y()),
                (oe = c('li')),
                (ne = c('a')),
                (ie = g('Screencasts')),
                (fe = y()),
                (he = c('li')),
                (ve = c('a')),
                (de = g('Blog')),
                (ue = y()),
                (ge = c('li')),
                (me = c('a')),
                (pe = g('Documentation')),
                ($e = y()),
                (we = c('li')),
                (xe = c('a')),
                (be = g('Report a bug')),
                (ye = y()),
                (Ee = c('li')),
                (Le = c('a')),
                (Ae = g('Community')),
                (De = y()),
                (Ne = c('ul')),
                (_e = c('li')),
                (Se = g('Company')),
                (je = y()),
                (Ce = c('li')),
                (Be = c('a')),
                (Te = g('About')),
                (Ge = y()),
                (Fe = c('li')),
                (Ve = c('a')),
                (He = g('Careers')),
                (Pe = y()),
                (ze = c('li')),
                (Me = c('a')),
                (Re = g('Contact')),
                (Ke = y()),
                (Oe = c('li')),
                (Ue = c('a')),
                (qe = g('Media Kit')),
                (Je = y()),
                (Ye = c('ul')),
                (Ze = c('li')),
                (Qe = g('Legal')),
                (Xe = y()),
                (We = c('li')),
                (et = c('a')),
                (tt = g('Imprint')),
                (st = y()),
                (at = c('li')),
                (rt = c('a')),
                (lt = g('Terms of Service')),
                (ct = y()),
                (ot = c('li')),
                (nt = c('a')),
                (it = g('Privacy Policy')),
                (ft = y()),
                (ht = c('div')),
                (vt = c('div')),
                (dt = c('a')),
                (ut = c('div')),
                (gt = c('img')),
                (pt = y()),
                ($t = c('span')),
                (wt = g('Copyright © ')),
                (xt = g(Lt)),
                (bt = g(' Gitpod')),
                (yt = y()),
                (Et = c('div'));
            for (let e = 0; e < Dt.length; e += 1) Dt[e].c();
            this.h();
        },
        l(e) {
            t = o(e, 'DIV', { class: !0 });
            var c = n(t);
            s = o(c, 'FOOTER', { class: !0 });
            var f = n(s);
            a = o(f, 'DIV', { class: !0 });
            var h = n(a);
            r = o(h, 'UL', { class: !0 });
            var g = n(r);
            l = o(g, 'LI', { class: !0 });
            var p = n(l);
            (v = m(p, 'Gitpod')), p.forEach(i), (d = k(g)), (u = o(g, 'LI', { class: !0 }));
            var $ = n(u);
            x = o($, 'A', { href: !0, class: !0 });
            var w = n(x);
            (b = m(w, 'Home')), w.forEach(i), $.forEach(i), (E = k(g)), (I = o(g, 'LI', { class: !0 }));
            var y = n(I);
            L = o(y, 'A', { href: !0, class: !0 });
            var _ = n(L);
            (A = m(_, 'Features')), _.forEach(i), y.forEach(i), (D = k(g)), (N = o(g, 'LI', { class: !0 }));
            var G = n(N);
            S = o(G, 'A', { href: !0, class: !0 });
            var ke = n(S);
            (j = m(ke, 'Pricing')), ke.forEach(i), G.forEach(i), (C = k(g)), (B = o(g, 'LI', { class: !0 }));
            var Ie = n(B);
            T = o(Ie, 'A', { href: !0, class: !0 });
            var mt = n(T);
            (F = m(mt, 'Changelog')), mt.forEach(i), Ie.forEach(i), (V = k(g)), (H = o(g, 'LI', { class: !0 }));
            var kt = n(H);
            P = o(kt, 'A', { href: !0, class: !0 });
            var It = n(P);
            (z = m(It, 'Self-Hosted')), It.forEach(i), kt.forEach(i), (M = k(g)), (R = o(g, 'LI', { class: !0 }));
            var At = n(R);
            K = o(At, 'A', { href: !0, class: !0 });
            var Nt = n(K);
            (O = m(Nt, 'Gitpod vs GitHub ')),
                (U = o(Nt, 'BR', {})),
                (q = m(Nt, 'Codespaces')),
                Nt.forEach(i),
                At.forEach(i),
                (J = k(g)),
                (Y = o(g, 'LI', { class: !0 }));
            var _t = n(Y);
            Z = o(_t, 'A', { href: !0, target: !0, class: !0 });
            var St = n(Z);
            (Q = m(St, 'Status')), St.forEach(i), _t.forEach(i), g.forEach(i), (X = k(h)), (W = o(h, 'UL', { class: !0 }));
            var jt = n(W);
            ee = o(jt, 'LI', { class: !0 });
            var Ct = n(ee);
            (te = m(Ct, 'Developer')), Ct.forEach(i), (se = k(jt)), (ae = o(jt, 'LI', { class: !0 }));
            var Bt = n(ae);
            re = o(Bt, 'A', { href: !0, class: !0 });
            var Tt = n(re);
            (le = m(Tt, 'Getting started')), Tt.forEach(i), Bt.forEach(i), (ce = k(jt)), (oe = o(jt, 'LI', { class: !0 }));
            var Gt = n(oe);
            ne = o(Gt, 'A', { href: !0, class: !0 });
            var Ft = n(ne);
            (ie = m(Ft, 'Screencasts')), Ft.forEach(i), Gt.forEach(i), (fe = k(jt)), (he = o(jt, 'LI', { class: !0 }));
            var Vt = n(he);
            ve = o(Vt, 'A', { href: !0, class: !0 });
            var Ht = n(ve);
            (de = m(Ht, 'Blog')), Ht.forEach(i), Vt.forEach(i), (ue = k(jt)), (ge = o(jt, 'LI', { class: !0 }));
            var Pt = n(ge);
            me = o(Pt, 'A', { href: !0, class: !0 });
            var zt = n(me);
            (pe = m(zt, 'Documentation')), zt.forEach(i), Pt.forEach(i), ($e = k(jt)), (we = o(jt, 'LI', { class: !0 }));
            var Mt = n(we);
            xe = o(Mt, 'A', { href: !0, target: !0, rel: !0, class: !0 });
            var Rt = n(xe);
            (be = m(Rt, 'Report a bug')), Rt.forEach(i), Mt.forEach(i), (ye = k(jt)), (Ee = o(jt, 'LI', { class: !0 }));
            var Kt = n(Ee);
            Le = o(Kt, 'A', { href: !0, target: !0, rel: !0, class: !0 });
            var Ot = n(Le);
            (Ae = m(Ot, 'Community')), Ot.forEach(i), Kt.forEach(i), jt.forEach(i), (De = k(h)), (Ne = o(h, 'UL', { class: !0 }));
            var Ut = n(Ne);
            _e = o(Ut, 'LI', { class: !0 });
            var qt = n(_e);
            (Se = m(qt, 'Company')), qt.forEach(i), (je = k(Ut)), (Ce = o(Ut, 'LI', { class: !0 }));
            var Jt = n(Ce);
            Be = o(Jt, 'A', { href: !0, class: !0 });
            var Yt = n(Be);
            (Te = m(Yt, 'About')), Yt.forEach(i), Jt.forEach(i), (Ge = k(Ut)), (Fe = o(Ut, 'LI', { class: !0 }));
            var Zt = n(Fe);
            Ve = o(Zt, 'A', { href: !0, class: !0 });
            var Qt = n(Ve);
            (He = m(Qt, 'Careers')), Qt.forEach(i), Zt.forEach(i), (Pe = k(Ut)), (ze = o(Ut, 'LI', { class: !0 }));
            var Xt = n(ze);
            Me = o(Xt, 'A', { href: !0, class: !0 });
            var Wt = n(Me);
            (Re = m(Wt, 'Contact')), Wt.forEach(i), Xt.forEach(i), (Ke = k(Ut)), (Oe = o(Ut, 'LI', { class: !0 }));
            var es = n(Oe);
            Ue = o(es, 'A', { href: !0, class: !0 });
            var ts = n(Ue);
            (qe = m(ts, 'Media Kit')), ts.forEach(i), es.forEach(i), Ut.forEach(i), (Je = k(h)), (Ye = o(h, 'UL', { class: !0 }));
            var ss = n(Ye);
            Ze = o(ss, 'LI', { class: !0 });
            var as = n(Ze);
            (Qe = m(as, 'Legal')), as.forEach(i), (Xe = k(ss)), (We = o(ss, 'LI', { class: !0 }));
            var rs = n(We);
            et = o(rs, 'A', { href: !0, class: !0 });
            var ls = n(et);
            (tt = m(ls, 'Imprint')), ls.forEach(i), rs.forEach(i), (st = k(ss)), (at = o(ss, 'LI', { class: !0 }));
            var cs = n(at);
            rt = o(cs, 'A', { href: !0, class: !0 });
            var os = n(rt);
            (lt = m(os, 'Terms of Service')), os.forEach(i), cs.forEach(i), (ct = k(ss)), (ot = o(ss, 'LI', { class: !0 }));
            var ns = n(ot);
            nt = o(ns, 'A', { href: !0, class: !0 });
            var is = n(nt);
            (it = m(is, 'Privacy Policy')), is.forEach(i), ns.forEach(i), ss.forEach(i), h.forEach(i), (ft = k(f)), (ht = o(f, 'DIV', { class: !0 }));
            var fs = n(ht);
            vt = o(fs, 'DIV', { class: !0 });
            var hs = n(vt);
            dt = o(hs, 'A', { href: !0, class: !0 });
            var vs = n(dt);
            ut = o(vs, 'DIV', { class: !0 });
            var ds = n(ut);
            (gt = o(ds, 'IMG', { src: !0, alt: !0, height: !0, width: !0 })), (pt = k(ds)), ds.forEach(i), vs.forEach(i), ($t = o(hs, 'SPAN', { class: !0 }));
            var us = n($t);
            (wt = m(us, 'Copyright © ')),
                (xt = m(us, Lt)),
                (bt = m(us, ' Gitpod')),
                us.forEach(i),
                hs.forEach(i),
                (yt = k(fs)),
                (Et = o(fs, 'DIV', { class: !0 }));
            var gs = n(Et);
            for (let t = 0; t < Dt.length; t += 1) Dt[t].l(gs);
            gs.forEach(i), fs.forEach(i), f.forEach(i), c.forEach(i), this.h();
        },
        h() {
            f(l, 'class', 'svelte-1ivs93t'),
                f(x, 'href', '/'),
                f(x, 'class', 'svelte-1ivs93t'),
                f(u, 'class', 'svelte-1ivs93t'),
                f(L, 'href', '/features'),
                f(L, 'class', 'svelte-1ivs93t'),
                f(I, 'class', 'svelte-1ivs93t'),
                f(S, 'href', '/pricing'),
                f(S, 'class', 'svelte-1ivs93t'),
                f(N, 'class', 'svelte-1ivs93t'),
                f(T, 'href', '/changelog'),
                f(T, 'class', 'svelte-1ivs93t'),
                f(B, 'class', 'svelte-1ivs93t'),
                f(P, 'href', '/self-hosted'),
                f(P, 'class', 'svelte-1ivs93t'),
                f(H, 'class', 'svelte-1ivs93t'),
                f(K, 'href', '/gitpod-vs-github-codespaces'),
                f(K, 'class', 'svelte-1ivs93t'),
                f(R, 'class', 'svelte-1ivs93t'),
                f(Z, 'href', 'https://www.gitpodstatus.com/'),
                f(Z, 'target', '_blank'),
                f(Z, 'class', 'svelte-1ivs93t'),
                f(Y, 'class', 'svelte-1ivs93t'),
                f(r, 'class', 'svelte-1ivs93t'),
                f(ee, 'class', 'svelte-1ivs93t'),
                f(re, 'href', '/#get-started'),
                f(re, 'class', 'svelte-1ivs93t'),
                f(ae, 'class', 'svelte-1ivs93t'),
                f(ne, 'href', '/screencasts'),
                f(ne, 'class', 'svelte-1ivs93t'),
                f(oe, 'class', 'svelte-1ivs93t'),
                f(ve, 'href', '/blog'),
                f(ve, 'class', 'svelte-1ivs93t'),
                f(he, 'class', 'svelte-1ivs93t'),
                f(me, 'href', '/docs'),
                f(me, 'class', 'svelte-1ivs93t'),
                f(ge, 'class', 'svelte-1ivs93t'),
                f(xe, 'href', 'https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md'),
                f(xe, 'target', '_blank'),
                f(xe, 'rel', 'noopener'),
                f(xe, 'class', 'svelte-1ivs93t'),
                f(we, 'class', 'svelte-1ivs93t'),
                f(Le, 'href', 'https://community.gitpod.io'),
                f(Le, 'target', '_blank'),
                f(Le, 'rel', 'noopener'),
                f(Le, 'class', 'svelte-1ivs93t'),
                f(Ee, 'class', 'svelte-1ivs93t'),
                f(W, 'class', 'svelte-1ivs93t'),
                f(_e, 'class', 'svelte-1ivs93t'),
                f(Be, 'href', '/about'),
                f(Be, 'class', 'svelte-1ivs93t'),
                f(Ce, 'class', 'svelte-1ivs93t'),
                f(Ve, 'href', '/careers'),
                f(Ve, 'class', 'highlighted svelte-1ivs93t'),
                f(Fe, 'class', 'svelte-1ivs93t'),
                f(Me, 'href', '/contact'),
                f(Me, 'class', 'svelte-1ivs93t'),
                f(ze, 'class', 'svelte-1ivs93t'),
                f(Ue, 'href', '/media-kit'),
                f(Ue, 'class', 'svelte-1ivs93t'),
                f(Oe, 'class', 'svelte-1ivs93t'),
                f(Ne, 'class', 'svelte-1ivs93t'),
                f(Ze, 'class', 'svelte-1ivs93t'),
                f(et, 'href', '/imprint'),
                f(et, 'class', 'svelte-1ivs93t'),
                f(We, 'class', 'svelte-1ivs93t'),
                f(rt, 'href', '/terms'),
                f(rt, 'class', 'svelte-1ivs93t'),
                f(at, 'class', 'svelte-1ivs93t'),
                f(nt, 'href', '/privacy'),
                f(nt, 'class', 'svelte-1ivs93t'),
                f(ot, 'class', 'svelte-1ivs93t'),
                f(Ye, 'class', 'svelte-1ivs93t'),
                f(a, 'class', 'flex justify-between flex-wrap pb-micro md:pb-small'),
                gt.src !== (mt = '/svg/logo-textless.svg') && f(gt, 'src', '/svg/logo-textless.svg'),
                f(gt, 'alt', 'Gitpod'),
                f(gt, 'height', '24'),
                f(gt, 'width', '24'),
                f(ut, 'class', 'relative -top-px z-0'),
                f(dt, 'href', '/'),
                f(dt, 'class', 'svelte-1ivs93t'),
                f($t, 'class', 'ml-macro'),
                f(vt, 'class', 'footer__copy flex items-center svelte-1ivs93t'),
                f(Et, 'class', 'flex'),
                f(ht, 'class', 'footer__bottom flex justify-between border-t border-solid border-sand-dark pt-xx-small md:pt-x-small svelte-1ivs93t'),
                f(s, 'class', 'footer py-large m-auto px-xx-small md:max-w-3xl md:py-small md:px-xx-small svelte-1ivs93t'),
                f(t, 'class', 'pb-8 bg-gray-100 text-p-footer');
        },
        m(c, o) {
            h(c, t, o),
                p(t, s),
                p(s, a),
                p(a, r),
                p(r, l),
                p(l, v),
                p(r, d),
                p(r, u),
                p(u, x),
                p(x, b),
                p(r, E),
                p(r, I),
                p(I, L),
                p(L, A),
                p(r, D),
                p(r, N),
                p(N, S),
                p(S, j),
                p(r, C),
                p(r, B),
                p(B, T),
                p(T, F),
                p(r, V),
                p(r, H),
                p(H, P),
                p(P, z),
                p(r, M),
                p(r, R),
                p(R, K),
                p(K, O),
                p(K, U),
                p(K, q),
                p(r, J),
                p(r, Y),
                p(Y, Z),
                p(Z, Q),
                p(a, X),
                p(a, W),
                p(W, ee),
                p(ee, te),
                p(W, se),
                p(W, ae),
                p(ae, re),
                p(re, le),
                p(W, ce),
                p(W, oe),
                p(oe, ne),
                p(ne, ie),
                p(W, fe),
                p(W, he),
                p(he, ve),
                p(ve, de),
                p(W, ue),
                p(W, ge),
                p(ge, me),
                p(me, pe),
                p(W, $e),
                p(W, we),
                p(we, xe),
                p(xe, be),
                p(W, ye),
                p(W, Ee),
                p(Ee, Le),
                p(Le, Ae),
                p(a, De),
                p(a, Ne),
                p(Ne, _e),
                p(_e, Se),
                p(Ne, je),
                p(Ne, Ce),
                p(Ce, Be),
                p(Be, Te),
                p(Ne, Ge),
                p(Ne, Fe),
                p(Fe, Ve),
                p(Ve, He),
                p(Ne, Pe),
                p(Ne, ze),
                p(ze, Me),
                p(Me, Re),
                p(Ne, Ke),
                p(Ne, Oe),
                p(Oe, Ue),
                p(Ue, qe),
                p(a, Je),
                p(a, Ye),
                p(Ye, Ze),
                p(Ze, Qe),
                p(Ye, Xe),
                p(Ye, We),
                p(We, et),
                p(et, tt),
                p(Ye, st),
                p(Ye, at),
                p(at, rt),
                p(rt, lt),
                p(Ye, ct),
                p(Ye, ot),
                p(ot, nt),
                p(nt, it),
                p(s, ft),
                p(s, ht),
                p(ht, vt),
                p(vt, dt),
                p(dt, ut),
                p(ut, gt),
                p(ut, pt),
                p(vt, $t),
                p($t, wt),
                p($t, xt),
                p($t, bt),
                p(ht, yt),
                p(ht, Et);
            for (let e = 0; e < Dt.length; e += 1) Dt[e].m(Et, null);
            kt || ((It = [$(Z, 'click', e[1]), $(xe, 'click', e[2]), $(Le, 'click', e[3])]), (kt = !0));
        },
        p(e, [t]) {
            if (1 & t) {
                let s;
                for (At = e[0], s = 0; s < At.length; s += 1) {
                    const a = ke(e, At, s);
                    Dt[s] ? Dt[s].p(a, t) : ((Dt[s] = Ie(a)), Dt[s].c(), Dt[s].m(Et, null));
                }
                for (; s < Dt.length; s += 1) Dt[s].d(1);
                Dt.length = At.length;
            }
        },
        i: w,
        o: w,
        d(e) {
            e && i(t), _(Dt, e), (kt = !1), G(It);
        }
    };
}
function Ae(e) {
    return [
        [
            { href: 'https://twitter.com/gitpod', alt: 'Twitter', icon: '/svg/brands/twitter.svg', trackingName: 'twitter' },
            { href: 'https://github.com/gitpod-io', alt: 'GitHub', icon: '/svg/brands/github.svg', trackingName: 'github' },
            { href: 'https://community.gitpod.io/', alt: 'Discourse', icon: '/svg/brands/discourse.svg', trackingName: 'discourse' },
            { href: 'https://www.gitpod.io/chat', alt: 'Discord', icon: '/svg/brands/discord.svg', trackingName: 'discord' }
        ],
        () => window.analytics.track('external_resource_clicked', { context: 'footer', name: 'status', url: 'https://www.gitpodstatus.com/' }),
        () =>
            window.analytics.track('external_resource_clicked', {
                context: 'footer',
                name: 'bug-report',
                url: 'https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md'
            }),
        () => window.analytics.track('social_opened', { context: 'footer', platform: 'discourse' }),
        (e) => window.analytics.track('social_opened', { context: 'footer-logo', platform: e.trackingName })
    ];
}
class De extends e {
    constructor(e) {
        super(), t(this, e, Ae, Le, s, {});
    }
}
const Ne = (e) => ({}),
    _e = (e) => ({ closeBanner: e[2] });
function Se(e) {
    let t, s, a, r;
    const g = e[5].default,
        m = l(g, e, e[4], _e);
    return {
        c() {
            (t = c('div')), m && m.c(), this.h();
        },
        l(e) {
            t = o(e, 'DIV', { class: !0 });
            var s = n(t);
            m && m.l(s), s.forEach(i), this.h();
        },
        h() {
            f(
                t,
                'class',
                (s = e[0] + ' px-4 py-2 flex justify-between items-center w-full bg-sand-dark shadow-sm text-xs sm:text-sm md:text-base svelte-1xzd5em')
            );
        },
        m(e, s) {
            h(e, t, s), m && m.m(t, null), (r = !0);
        },
        p(e, a) {
            m && m.p && 16 & a && v(m, g, e, e[4], a, Ne, _e),
                (!r ||
                    (1 & a &&
                        s !==
                            (s =
                                e[0] +
                                ' px-4 py-2 flex justify-between items-center w-full bg-sand-dark shadow-sm text-xs sm:text-sm md:text-base svelte-1xzd5em'))) &&
                    f(t, 'class', s);
        },
        i(e) {
            r ||
                (d(m, e),
                F(() => {
                    a || (a = V(t, O, {}, !0)), a.run(1);
                }),
                (r = !0));
        },
        o(e) {
            u(m, e), a || (a = V(t, O, {}, !1)), a.run(0), (r = !1);
        },
        d(e) {
            e && i(t), m && m.d(e), e && a && a.end();
        }
    };
}
function je(e) {
    let t,
        s,
        a = e[1] && Se(e);
    return {
        c() {
            a && a.c(), (t = S());
        },
        l(e) {
            a && a.l(e), (t = S());
        },
        m(e, r) {
            a && a.m(e, r), h(e, t, r), (s = !0);
        },
        p(e, [s]) {
            e[1]
                ? a
                    ? (a.p(e, s), 2 & s && d(a, 1))
                    : ((a = Se(e)), a.c(), d(a, 1), a.m(t.parentNode, t))
                : a &&
                  (D(),
                  u(a, 1, 1, () => {
                      a = null;
                  }),
                  N());
        },
        i(e) {
            s || (d(a), (s = !0));
        },
        o(e) {
            u(a), (s = !1);
        },
        d(e) {
            a && a.d(e), e && i(t);
        }
    };
}
function Ce(e, t, s) {
    let { $$slots: a = {}, $$scope: l } = t,
        { storageKey: c } = t,
        { location: o = 'top' } = t,
        n = !1;
    return (
        r(() => {
            s(1, (n = !window.localStorage.getItem(c)));
        }),
        (e.$$set = (e) => {
            'storageKey' in e && s(3, (c = e.storageKey)), 'location' in e && s(0, (o = e.location)), '$$scope' in e && s(4, (l = e.$$scope));
        }),
        [
            o,
            n,
            () => {
                s(1, (n = !1)), window.localStorage.setItem(c, 'true');
            },
            c,
            l,
            a
        ]
    );
}
class Be extends e {
    constructor(e) {
        super(), t(this, e, Ce, je, s, { storageKey: 3, location: 0 });
    }
}
function Te(e) {
    let t, s, a, r, l, v, d, u, w, x;
    return {
        c() {
            (t = c('p')),
                (s = g('This website uses cookies to enhance the user experience. Read our ')),
                (a = c('a')),
                (r = g('privacy policy')),
                (l = g(' for more info.')),
                (v = y()),
                (d = c('button')),
                (u = g('Accept Cookies')),
                this.h();
        },
        l(e) {
            t = o(e, 'P', { class: !0 });
            var c = n(t);
            (s = m(c, 'This website uses cookies to enhance the user experience. Read our ')), (a = o(c, 'A', { href: !0 }));
            var f = n(a);
            (r = m(f, 'privacy policy')), f.forEach(i), (l = m(c, ' for more info.')), c.forEach(i), (v = k(e)), (d = o(e, 'BUTTON', { class: !0 }));
            var h = n(d);
            (u = m(h, 'Accept Cookies')), h.forEach(i), this.h();
        },
        h() {
            f(a, 'href', '/privacy'), f(t, 'class', 'w-7/12 md:w-9/12'), f(d, 'class', 'px-3 py-1 bg-off-white rounded-lg md:px-6 hover:bg-white');
        },
        m(c, o) {
            h(c, t, o),
                p(t, s),
                p(t, a),
                p(a, r),
                p(t, l),
                h(c, v, o),
                h(c, d, o),
                p(d, u),
                w ||
                    ((x = $(d, 'click', function () {
                        H(e[0]) && e[0].apply(this, arguments);
                    })),
                    (w = !0));
        },
        p(t, s) {
            e = t;
        },
        d(e) {
            e && i(t), e && i(v), e && i(d), (w = !1), x();
        }
    };
}
function Ge(e) {
    let t, s;
    return (
        (t = new Be({
            props: {
                location: 'bottom',
                storageKey: 'cookie-consent',
                $$slots: { default: [Te, ({ closeBanner: e }) => ({ 0: e }), ({ closeBanner: e }) => (e ? 1 : 0)] },
                $$scope: { ctx: e }
            }
        })),
        {
            c() {
                E(t.$$.fragment);
            },
            l(e) {
                I(t.$$.fragment, e);
            },
            m(e, a) {
                L(t, e, a), (s = !0);
            },
            p(e, [s]) {
                const a = {};
                3 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
            },
            i(e) {
                s || (d(t.$$.fragment, e), (s = !0));
            },
            o(e) {
                u(t.$$.fragment, e), (s = !1);
            },
            d(e) {
                A(t, e);
            }
        }
    );
}
class Fe extends e {
    constructor(e) {
        super(), t(this, e, null, Ge, s, {});
    }
}
function Ve(e) {
    let t;
    const s = e[0].default,
        a = l(s, e, e[1], null);
    return {
        c() {
            a && a.c();
        },
        l(e) {
            a && a.l(e);
        },
        m(e, s) {
            a && a.m(e, s), (t = !0);
        },
        p(e, t) {
            a && a.p && 2 & t && v(a, s, e, e[1], t, null, null);
        },
        i(e) {
            t || (d(a, e), (t = !0));
        },
        o(e) {
            u(a, e), (t = !1);
        },
        d(e) {
            a && a.d(e);
        }
    };
}
function He(e) {
    let t, s, a, r, l, c;
    return (
        (t = new Ee({})),
        (a = new Z({ props: { $$slots: { default: [Ve] }, $$scope: { ctx: e } } })),
        (l = new De({})),
        {
            c() {
                E(t.$$.fragment), (s = y()), E(a.$$.fragment), (r = y()), E(l.$$.fragment);
            },
            l(e) {
                I(t.$$.fragment, e), (s = k(e)), I(a.$$.fragment, e), (r = k(e)), I(l.$$.fragment, e);
            },
            m(e, o) {
                L(t, e, o), h(e, s, o), L(a, e, o), h(e, r, o), L(l, e, o), (c = !0);
            },
            p(e, t) {
                const s = {};
                2 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
            },
            i(e) {
                c || (d(t.$$.fragment, e), d(a.$$.fragment, e), d(l.$$.fragment, e), (c = !0));
            },
            o(e) {
                u(t.$$.fragment, e), u(a.$$.fragment, e), u(l.$$.fragment, e), (c = !1);
            },
            d(e) {
                A(t, e), e && i(s), A(a, e), e && i(r), A(l, e);
            }
        }
    );
}
function Pe(e) {
    let t, s, a, r, l, c;
    return (
        (t = new W({ props: { $$slots: { default: [He] }, $$scope: { ctx: e } } })),
        (a = new Fe({})),
        (l = new q({})),
        {
            c() {
                E(t.$$.fragment), (s = y()), E(a.$$.fragment), (r = y()), E(l.$$.fragment);
            },
            l(e) {
                I(t.$$.fragment, e), (s = k(e)), I(a.$$.fragment, e), (r = k(e)), I(l.$$.fragment, e);
            },
            m(e, o) {
                L(t, e, o), h(e, s, o), L(a, e, o), h(e, r, o), L(l, e, o), (c = !0);
            },
            p(e, [s]) {
                const a = {};
                2 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
            },
            i(e) {
                c || (d(t.$$.fragment, e), d(a.$$.fragment, e), d(l.$$.fragment, e), (c = !0));
            },
            o(e) {
                u(t.$$.fragment, e), u(a.$$.fragment, e), u(l.$$.fragment, e), (c = !1);
            },
            d(e) {
                A(t, e), e && i(s), A(a, e), e && i(r), A(l, e);
            }
        }
    );
}
function ze(e, t, s) {
    let { $$slots: a = {}, $$scope: r } = t;
    return (
        (e.$$set = (e) => {
            '$$scope' in e && s(1, (r = e.$$scope));
        }),
        [a, r]
    );
}
export default class extends e {
    constructor(e) {
        super(), t(this, e, ze, Pe, s, {});
    }
}
