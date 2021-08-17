import {
    S as s,
    i as e,
    s as t,
    e as r,
    j as a,
    k as n,
    t as c,
    c as o,
    a as l,
    m as f,
    n as $,
    g as i,
    d as m,
    b as h,
    f as u,
    o as g,
    G as p,
    h as d,
    v as b,
    r as v,
    w,
    C as E,
    u as j,
    K as k,
    B as N
} from '../../chunks/index-0a115175.js';
import { O as x } from '../../chunks/open-graph-b11e873e.js';
import { P as G, s as S } from '../../chunks/screencasts-59531849.js';
import { S as y } from '../../chunks/section-16fe1b30.js';
import { E as C } from '../../chunks/explore-b6eff64d.js';
import '../../chunks/stores-6ede6f6c.js';
import '../../chunks/logo-60efa4e2.js';
function I(s) {
    let e,
        t,
        E,
        j,
        k,
        N,
        x,
        S,
        y,
        C,
        I,
        T,
        B,
        D = s[0].description + '';
    return (
        (t = new G({ props: { screencast: s[0], screencastNumber: s[1] } })),
        {
            c() {
                (e = r('article')),
                    a(t.$$.fragment),
                    (E = n()),
                    (j = r('time')),
                    (k = c('Duration: ')),
                    (N = c(s[2])),
                    (x = c('m ')),
                    (S = c(s[3])),
                    (y = c('s')),
                    (C = n()),
                    (I = r('p')),
                    (T = c(D)),
                    this.h();
            },
            l(r) {
                e = o(r, 'ARTICLE', { class: !0 });
                var a = l(e);
                f(t.$$.fragment, a), (E = $(a)), (j = o(a, 'TIME', { class: !0 }));
                var n = l(j);
                (k = i(n, 'Duration: ')),
                    (N = i(n, s[2])),
                    (x = i(n, 'm ')),
                    (S = i(n, s[3])),
                    (y = i(n, 's')),
                    n.forEach(m),
                    (C = $(a)),
                    (I = o(a, 'P', { class: !0 }));
                var c = l(I);
                (T = i(c, D)), c.forEach(m), a.forEach(m), this.h();
            },
            h() {
                h(j, 'class', 'svelte-1gv8tr3'), h(I, 'class', 'svelte-1gv8tr3'), h(e, 'class', 'svelte-1gv8tr3');
            },
            m(s, r) {
                u(s, e, r), g(t, e, null), p(e, E), p(e, j), p(j, k), p(j, N), p(j, x), p(j, S), p(j, y), p(e, C), p(e, I), p(I, T), (B = !0);
            },
            p(s, [e]) {
                const r = {};
                1 & e && (r.screencast = s[0]),
                    2 & e && (r.screencastNumber = s[1]),
                    t.$set(r),
                    (!B || 4 & e) && d(N, s[2]),
                    (!B || 8 & e) && d(S, s[3]),
                    (!B || 1 & e) && D !== (D = s[0].description + '') && d(T, D);
            },
            i(s) {
                B || (b(t.$$.fragment, s), (B = !0));
            },
            o(s) {
                v(t.$$.fragment, s), (B = !1);
            },
            d(s) {
                s && m(e), w(t);
            }
        }
    );
}
function T(s, e, t) {
    let r,
        a,
        { screencast: n } = e,
        { screencastNumber: c } = e;
    return (
        (s.$$set = (s) => {
            'screencast' in s && t(0, (n = s.screencast)), 'screencastNumber' in s && t(1, (c = s.screencastNumber));
        }),
        (s.$$.update = () => {
            1 & s.$$.dirty && t(2, (r = Math.floor(n.duration / 60))), 1 & s.$$.dirty && t(3, (a = n.duration % 60));
        }),
        [n, c, r, a]
    );
}
class B extends s {
    constructor(s) {
        super(), e(this, s, T, I, t, { screencast: 0, screencastNumber: 1 });
    }
}
function D(s, e, t) {
    const r = s.slice();
    return (r[0] = e[t]), (r[2] = t), r;
}
function L(s) {
    let e, t;
    return {
        c() {
            (e = r('h1')), (t = c('Get started with a screencast')), this.h();
        },
        l(s) {
            e = o(s, 'H1', { class: !0 });
            var r = l(e);
            (t = i(r, 'Get started with a screencast')), r.forEach(m), this.h();
        },
        h() {
            h(e, 'class', 'h2 svelte-1idb770');
        },
        m(s, r) {
            u(s, e, r), p(e, t);
        },
        d(s) {
            s && m(e);
        }
    };
}
function M(s) {
    let e, t;
    return (
        (e = new B({ props: { screencast: s[0], screencastNumber: s[2] + 1 } })),
        {
            c() {
                a(e.$$.fragment);
            },
            l(s) {
                f(e.$$.fragment, s);
            },
            m(s, r) {
                g(e, s, r), (t = !0);
            },
            p: E,
            i(s) {
                t || (b(e.$$.fragment, s), (t = !0));
            },
            o(s) {
                v(e.$$.fragment, s), (t = !1);
            },
            d(s) {
                w(e, s);
            }
        }
    );
}
function O(s) {
    let e, t, c, i, p, d, E, G;
    (e = new x({ props: { data: { description: 'Learn more about Gitpod with these short screencasts.', title: 'Screencasts' } } })),
        (c = new y({ props: { $$slots: { default: [L] }, $$scope: { ctx: s } } }));
    let I = S,
        T = [];
    for (let r = 0; r < I.length; r += 1) T[r] = M(D(s, I, r));
    const B = (s) =>
        v(T[s], 1, 1, () => {
            T[s] = null;
        });
    return (
        (E = new C({})),
        {
            c() {
                a(e.$$.fragment), (t = n()), a(c.$$.fragment), (i = n()), (p = r('section'));
                for (let s = 0; s < T.length; s += 1) T[s].c();
                (d = n()), a(E.$$.fragment), this.h();
            },
            l(s) {
                f(e.$$.fragment, s), (t = $(s)), f(c.$$.fragment, s), (i = $(s)), (p = o(s, 'SECTION', { class: !0 }));
                var r = l(p);
                for (let e = 0; e < T.length; e += 1) T[e].l(r);
                r.forEach(m), (d = $(s)), f(E.$$.fragment, s), this.h();
            },
            h() {
                h(p, 'class', 'screencasts');
            },
            m(s, r) {
                g(e, s, r), u(s, t, r), g(c, s, r), u(s, i, r), u(s, p, r);
                for (let e = 0; e < T.length; e += 1) T[e].m(p, null);
                u(s, d, r), g(E, s, r), (G = !0);
            },
            p(s, [e]) {
                const t = {};
                if ((8 & e && (t.$$scope = { dirty: e, ctx: s }), c.$set(t), 0 & e)) {
                    let t;
                    for (I = S, t = 0; t < I.length; t += 1) {
                        const r = D(s, I, t);
                        T[t] ? (T[t].p(r, e), b(T[t], 1)) : ((T[t] = M(r)), T[t].c(), b(T[t], 1), T[t].m(p, null));
                    }
                    for (N(), t = I.length; t < T.length; t += 1) B(t);
                    j();
                }
            },
            i(s) {
                if (!G) {
                    b(e.$$.fragment, s), b(c.$$.fragment, s);
                    for (let s = 0; s < I.length; s += 1) b(T[s]);
                    b(E.$$.fragment, s), (G = !0);
                }
            },
            o(s) {
                v(e.$$.fragment, s), v(c.$$.fragment, s), (T = T.filter(Boolean));
                for (let e = 0; e < T.length; e += 1) v(T[e]);
                v(E.$$.fragment, s), (G = !1);
            },
            d(s) {
                w(e, s), s && m(t), w(c, s), s && m(i), s && m(p), k(T, s), s && m(d), w(E, s);
            }
        }
    );
}
export default class extends s {
    constructor(s) {
        super(), e(this, s, null, O, t, {});
    }
}
