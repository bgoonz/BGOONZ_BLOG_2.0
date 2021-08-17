import {
    S as s,
    i as t,
    s as e,
    e as o,
    j as l,
    k as r,
    c as n,
    a,
    m as c,
    n as i,
    d as f,
    b as h,
    f as p,
    o as g,
    G as u,
    v as m,
    r as $,
    w as v,
    t as d,
    g as b,
    u as E,
    K as x,
    B as w
} from '../../chunks/index-0a115175.js';
import { O as j } from '../../chunks/open-graph-b11e873e.js';
import { P as k } from '../../chunks/post-preview-c926ae5e.js';
import { N as I } from '../../chunks/newsletter-signup-bc5a1629.js';
import '../../chunks/stores-6ede6f6c.js';
import '../../chunks/avatars-7c72c4bb.js';
function B(s, t, e) {
    const o = s.slice();
    return (o[1] = t[e]), o;
}
function V(s, t, e) {
    const o = s.slice();
    return (o[1] = t[e]), o;
}
function D(s) {
    let t, e, d, b;
    return (
        (e = new k({ props: { post: s[1], type: 'blog', isMostRecent: !0 } })),
        {
            c() {
                (t = o('div')), l(e.$$.fragment), (d = r()), this.h();
            },
            l(s) {
                t = n(s, 'DIV', { class: !0 });
                var o = a(t);
                c(e.$$.fragment, o), (d = i(o)), o.forEach(f), this.h();
            },
            h() {
                h(t, 'class', 'posts-grid__item');
            },
            m(s, o) {
                p(s, t, o), g(e, t, null), u(t, d), (b = !0);
            },
            p(s, t) {
                const o = {};
                1 & t && (o.post = s[1]), e.$set(o);
            },
            i(s) {
                b || (m(e.$$.fragment, s), (b = !0));
            },
            o(s) {
                $(e.$$.fragment, s), (b = !1);
            },
            d(s) {
                s && f(t), v(e);
            }
        }
    );
}
function y(s) {
    let t, e, d, b;
    return (
        (e = new k({ props: { post: s[1], type: 'blog' } })),
        {
            c() {
                (t = o('div')), l(e.$$.fragment), (d = r()), this.h();
            },
            l(s) {
                t = n(s, 'DIV', { class: !0 });
                var o = a(t);
                c(e.$$.fragment, o), (d = i(o)), o.forEach(f), this.h();
            },
            h() {
                h(t, 'class', 'posts-grid__item');
            },
            m(s, o) {
                p(s, t, o), g(e, t, null), u(t, d), (b = !0);
            },
            p(s, t) {
                const o = {};
                1 & t && (o.post = s[1]), e.$set(o);
            },
            i(s) {
                b || (m(e.$$.fragment, s), (b = !0));
            },
            o(s) {
                $(e.$$.fragment, s), (b = !1);
            },
            d(s) {
                s && f(t), v(e);
            }
        }
    );
}
function _(s) {
    let t, e, k, _, N, O, P, S, C, G, H, T, K, M, R, q, z;
    e = new j({ props: { data: { description: 'Visit the Gitpod blog to learn about releases, tutorials, news and more.', title: 'Blog' } } });
    let A = s[0].slice(0, 6),
        F = [];
    for (let o = 0; o < A.length; o += 1) F[o] = D(V(s, A, o));
    const J = (s) =>
        $(F[s], 1, 1, () => {
            F[s] = null;
        });
    let L = s[0].slice(6),
        Q = [];
    for (let o = 0; o < L.length; o += 1) Q[o] = y(B(s, L, o));
    const U = (s) =>
        $(Q[s], 1, 1, () => {
            Q[s] = null;
        });
    return (
        (q = new I({ props: { class: 'mx-auto mt-large mb-huge' } })),
        {
            c() {
                (t = o('div')), l(e.$$.fragment), (k = r()), (_ = o('section')), (N = o('h1')), (O = d('Blog')), (P = r()), (S = o('div'));
                for (let s = 0; s < F.length; s += 1) F[s].c();
                (C = r()), (G = o('section')), (H = o('h2')), (T = d('Previous posts')), (K = r()), (M = o('div'));
                for (let s = 0; s < Q.length; s += 1) Q[s].c();
                (R = r()), l(q.$$.fragment), this.h();
            },
            l(s) {
                t = n(s, 'DIV', { class: !0 });
                var o = a(t);
                c(e.$$.fragment, o), (k = i(o)), (_ = n(o, 'SECTION', { class: !0 }));
                var l = a(_);
                N = n(l, 'H1', {});
                var r = a(N);
                (O = b(r, 'Blog')), r.forEach(f), l.forEach(f), (P = i(o)), (S = n(o, 'DIV', { class: !0 }));
                var h = a(S);
                for (let t = 0; t < F.length; t += 1) F[t].l(h);
                h.forEach(f), (C = i(o)), (G = n(o, 'SECTION', { class: !0 }));
                var p = a(G);
                H = n(p, 'H2', { class: !0 });
                var g = a(H);
                (T = b(g, 'Previous posts')), g.forEach(f), p.forEach(f), (K = i(o)), (M = n(o, 'DIV', { class: !0 }));
                var u = a(M);
                for (let t = 0; t < Q.length; t += 1) Q[t].l(u);
                u.forEach(f), o.forEach(f), (R = i(s)), c(q.$$.fragment, s), this.h();
            },
            h() {
                h(_, 'class', 'svelte-iup35x'),
                    h(S, 'class', 'posts-grid'),
                    h(H, 'class', 'svelte-iup35x'),
                    h(G, 'class', 'svelte-iup35x'),
                    h(M, 'class', 'posts-grid previous'),
                    h(t, 'class', 'blog-layout svelte-iup35x');
            },
            m(s, o) {
                p(s, t, o), g(e, t, null), u(t, k), u(t, _), u(_, N), u(N, O), u(t, P), u(t, S);
                for (let t = 0; t < F.length; t += 1) F[t].m(S, null);
                u(t, C), u(t, G), u(G, H), u(H, T), u(t, K), u(t, M);
                for (let t = 0; t < Q.length; t += 1) Q[t].m(M, null);
                p(s, R, o), g(q, s, o), (z = !0);
            },
            p(s, [t]) {
                if (1 & t) {
                    let e;
                    for (A = s[0].slice(0, 6), e = 0; e < A.length; e += 1) {
                        const o = V(s, A, e);
                        F[e] ? (F[e].p(o, t), m(F[e], 1)) : ((F[e] = D(o)), F[e].c(), m(F[e], 1), F[e].m(S, null));
                    }
                    for (w(), e = A.length; e < F.length; e += 1) J(e);
                    E();
                }
                if (1 & t) {
                    let e;
                    for (L = s[0].slice(6), e = 0; e < L.length; e += 1) {
                        const o = B(s, L, e);
                        Q[e] ? (Q[e].p(o, t), m(Q[e], 1)) : ((Q[e] = y(o)), Q[e].c(), m(Q[e], 1), Q[e].m(M, null));
                    }
                    for (w(), e = L.length; e < Q.length; e += 1) U(e);
                    E();
                }
            },
            i(s) {
                if (!z) {
                    m(e.$$.fragment, s);
                    for (let s = 0; s < A.length; s += 1) m(F[s]);
                    for (let s = 0; s < L.length; s += 1) m(Q[s]);
                    m(q.$$.fragment, s), (z = !0);
                }
            },
            o(s) {
                $(e.$$.fragment, s), (F = F.filter(Boolean));
                for (let t = 0; t < F.length; t += 1) $(F[t]);
                Q = Q.filter(Boolean);
                for (let t = 0; t < Q.length; t += 1) $(Q[t]);
                $(q.$$.fragment, s), (z = !1);
            },
            d(s) {
                s && f(t), v(e), x(F, s), x(Q, s), s && f(R), v(q, s);
            }
        }
    );
}
const N = !0;
async function O({ session: s }) {
    return { props: { posts: s.posts } };
}
function P(s, t, e) {
    let { posts: o } = t;
    return (
        (s.$$set = (s) => {
            'posts' in s && e(0, (o = s.posts));
        }),
        [o]
    );
}
export default class extends s {
    constructor(s) {
        super(), t(this, s, P, _, e, { posts: 0 });
    }
}
export { O as load, N as prerender };
