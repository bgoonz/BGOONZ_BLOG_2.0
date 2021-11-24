import {
    S as t,
    i as e,
    s as a,
    e as s,
    c as r,
    a as o,
    d as n,
    f as l,
    G as i,
    t as c,
    g as h,
    b as d,
    l as f,
    C as p,
    D as u,
    M as m,
    j as $,
    k as g,
    m as v,
    n as x,
    o as E,
    H as w,
    v as b,
    r as k,
    w as y,
    E as G,
    W as D,
    F as j,
    L as A
} from './index-0a115175.js';
import { p as N } from './stores-6ede6f6c.js';
import { O as P } from './open-graph-b11e873e.js';
import { F as V } from './feedback-widget-3009e59d.js';
import { g as B, d as I } from './menu-62fb98ae.js';
function S(t) {
    let e,
        a,
        c = t[0] && _();
    return {
        c() {
            (e = s('div')), (a = s('blockquote')), c && c.c();
        },
        l(t) {
            e = r(t, 'DIV', {});
            var s = o(e);
            a = r(s, 'BLOCKQUOTE', {});
            var l = o(a);
            c && c.l(l), l.forEach(n), s.forEach(n);
        },
        m(t, s) {
            l(t, e, s), i(e, a), c && c.m(a, null);
        },
        p(t, e) {
            t[0] ? c || ((c = _()), c.c(), c.m(a, null)) : c && (c.d(1), (c = null));
        },
        d(t) {
            t && n(e), c && c.d();
        }
    };
}
function _(t) {
    let e, a, f, p, u, m, $;
    return {
        c() {
            (e = s('p')),
                (a = s('strong')),
                (f = c('Beta Docs')),
                (p = c('\n        Welcome to the next version of the docs 🎉. We are actively working on this\n        page, please\n        ')),
                (u = s('a')),
                (m = c('provide feedback on GitHub')),
                ($ = c(' 🙏.')),
                this.h();
        },
        l(t) {
            e = r(t, 'P', {});
            var s = o(e);
            a = r(s, 'STRONG', {});
            var l = o(a);
            (f = h(l, 'Beta Docs')),
                l.forEach(n),
                s.forEach(n),
                (p = h(t, '\n        Welcome to the next version of the docs 🎉. We are actively working on this\n        page, please\n        ')),
                (u = r(t, 'A', { href: !0, target: !0 }));
            var i = o(u);
            (m = h(i, 'provide feedback on GitHub')), i.forEach(n), ($ = h(t, ' 🙏.')), this.h();
        },
        h() {
            d(u, 'href', 'https://github.com/gitpod-io/website/issues/461'), d(u, 'target', '__self');
        },
        m(t, s) {
            l(t, e, s), i(e, a), i(a, f), l(t, p, s), l(t, u, s), i(u, m), l(t, $, s);
        },
        d(t) {
            t && n(e), t && n(p), t && n(u), t && n($);
        }
    };
}
function F(t) {
    let e,
        a = t[0] && S(t);
    return {
        c() {
            a && a.c(), (e = f());
        },
        l(t) {
            a && a.l(t), (e = f());
        },
        m(t, s) {
            a && a.m(t, s), l(t, e, s);
        },
        p(t, [s]) {
            t[0] ? (a ? a.p(t, s) : ((a = S(t)), a.c(), a.m(e.parentNode, e))) : a && (a.d(1), (a = null));
        },
        i: p,
        o: p,
        d(t) {
            a && a.d(t), t && n(e);
        }
    };
}
function H(t, e, a) {
    let s, r;
    return (
        u(t, N, (t) => a(1, (r = t))),
        (t.$$.update = () => {
            2 & t.$$.dirty && a(0, (s = r.path.startsWith('/docs/beta')));
        }),
        [s, r]
    );
}
class W extends t {
    constructor(t) {
        super(), e(this, t, H, F, a, {});
    }
}
function O(t) {
    let e, a, s, c, h, f, u, $, g;
    return {
        c() {
            (e = m('svg')),
                (a = m('g')),
                (s = m('path')),
                (c = m('defs')),
                (h = m('linearGradient')),
                (f = m('stop')),
                (u = m('stop')),
                ($ = m('clipPath')),
                (g = m('path')),
                this.h();
        },
        l(t) {
            e = r(t, 'svg', { viewBox: !0, height: !0, width: !0, fill: !0, xmlns: !0 }, 1);
            var l = o(e);
            a = r(l, 'g', { 'clip-path': !0 }, 1);
            var i = o(a);
            (s = r(i, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 }, 1)), o(s).forEach(n), i.forEach(n), (c = r(l, 'defs', {}, 1));
            var d = o(c);
            h = r(d, 'linearGradient', { id: !0, x1: !0, y1: !0, x2: !0, y2: !0, gradientUnits: !0 }, 1);
            var p = o(h);
            (f = r(p, 'stop', { 'stop-color': !0 }, 1)),
                o(f).forEach(n),
                (u = r(p, 'stop', { offset: !0, 'stop-color': !0 }, 1)),
                o(u).forEach(n),
                p.forEach(n),
                ($ = r(d, 'clipPath', { id: !0 }, 1));
            var m = o($);
            (g = r(m, 'path', { fill: !0, d: !0 }, 1)), o(g).forEach(n), m.forEach(n), d.forEach(n), l.forEach(n), this.h();
        },
        h() {
            d(s, 'fill-rule', 'evenodd'),
                d(s, 'clip-rule', 'evenodd'),
                d(
                    s,
                    'd',
                    'M14.07 1.195a2.364 2.364 0 01-.887 3.236l-7.11 4.04a.6.6 0 00-.304.52v6.343a.6.6 0 00.304.52l5.628 3.199a.605.605 0 00.598 0l5.628-3.198a.6.6 0 00.304-.521V11.39l-5.06 2.838a2.392 2.392 0 01-3.248-.9 2.364 2.364 0 01.905-3.23l7.239-4.062C20.272 4.8 23 6.383 23 8.901v6.914c0 1.62-.873 3.115-2.287 3.919l-6.461 3.671a4.56 4.56 0 01-4.504 0l-6.461-3.671A4.509 4.509 0 011 15.815V8.51c0-1.62.873-3.115 2.287-3.918l7.53-4.28a2.392 2.392 0 013.253.883z'
                ),
                d(s, 'fill', 'url(#paint0_linear)'),
                d(a, 'clip-path', 'url(#clip0)'),
                d(f, 'stop-color', '#FFB45B'),
                d(u, 'offset', '1'),
                d(u, 'stop-color', '#FF8A00'),
                d(h, 'id', 'paint0_linear'),
                d(h, 'x1', '17.558'),
                d(h, 'y1', '3.629'),
                d(h, 'x2', '6.356'),
                d(h, 'y2', '21.34'),
                d(h, 'gradientUnits', 'userSpaceOnUse'),
                d(g, 'fill', '#fff'),
                d(g, 'd', 'M0 0h24v24H0z'),
                d($, 'id', 'clip0'),
                d(e, 'viewBox', '0 0 24 24'),
                d(e, 'height', '24'),
                d(e, 'width', '24'),
                d(e, 'fill', 'none'),
                d(e, 'xmlns', 'http://www.w3.org/2000/svg');
        },
        m(t, r) {
            l(t, e, r), i(e, a), i(a, s), i(e, c), i(c, h), i(h, f), i(h, u), i(c, $), i($, g);
        },
        p: p,
        i: p,
        o: p,
        d(t) {
            t && n(e);
        }
    };
}
class U extends t {
    constructor(t) {
        super(), e(this, t, null, O, a, {});
    }
}
function z(t) {
    let e, a, f, u, m, G, D, j, A, N;
    return (
        (u = new U({})),
        {
            c() {
                (e = s('div')), (a = s('a')), (f = s('span')), $(u.$$.fragment), (m = g()), (G = s('span')), (D = c('Edit in Gitpod')), this.h();
            },
            l(t) {
                e = r(t, 'DIV', { class: !0 });
                var s = o(e);
                a = r(s, 'A', { href: !0, target: !0, class: !0 });
                var l = o(a);
                f = r(l, 'SPAN', { class: !0 });
                var i = o(f);
                v(u.$$.fragment, i), i.forEach(n), (m = x(l)), (G = r(l, 'SPAN', { class: !0 }));
                var c = o(G);
                (D = h(c, 'Edit in Gitpod')), c.forEach(n), l.forEach(n), s.forEach(n), this.h();
            },
            h() {
                d(f, 'class', 'logo svelte-164hpj2'),
                    d(G, 'class', 'ml-macro'),
                    d(a, 'href', t[0]),
                    d(a, 'target', '_blank'),
                    d(a, 'class', 'btn-otherbrand svelte-164hpj2'),
                    d(e, 'class', 'flex justify-end mb-micro');
            },
            m(s, r) {
                l(s, e, r), i(e, a), i(a, f), E(u, f, null), i(a, m), i(a, G), i(G, D), (j = !0), A || ((N = w(a, 'click', t[1])), (A = !0));
            },
            p: p,
            i(t) {
                j || (b(u.$$.fragment, t), (j = !0));
            },
            o(t) {
                k(u.$$.fragment, t), (j = !1);
            },
            d(t) {
                t && n(e), y(u), (A = !1), N();
            }
        }
    );
}
function C(t, e, a) {
    let s;
    u(t, N, (t) => a(2, (s = t)));
    return [
        `https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes${'/docs' === s.path ? `${s.path}/index` : s.path}.md`,
        () => window.analytics.track('gitpod_editor_clicked', { context: 'docs' })
    ];
}
class L extends t {
    constructor(t) {
        super(), e(this, t, C, z, a, {});
    }
}
function M(t) {
    let e;
    return {
        c() {
            e = s('div');
        },
        l(t) {
            (e = r(t, 'DIV', {})), o(e).forEach(n);
        },
        m(t, a) {
            l(t, e, a);
        },
        p: p,
        d(t) {
            t && n(e);
        }
    };
}
function K(t) {
    let e, a;
    return {
        c() {
            (e = s('a')), (a = c('Previous')), this.h();
        },
        l(t) {
            e = r(t, 'A', { href: !0, title: !0, class: !0 });
            var s = o(e);
            (a = h(s, 'Previous')), s.forEach(n), this.h();
        },
        h() {
            d(e, 'href', t[0].prev.path), d(e, 'title', `Previous: ${t[0].prev.title}`), d(e, 'class', 'svelte-1kanmwt');
        },
        m(t, s) {
            l(t, e, s), i(e, a);
        },
        p: p,
        d(t) {
            t && n(e);
        }
    };
}
function T(t) {
    let e;
    return {
        c() {
            e = s('div');
        },
        l(t) {
            (e = r(t, 'DIV', {})), o(e).forEach(n);
        },
        m(t, a) {
            l(t, e, a);
        },
        p: p,
        d(t) {
            t && n(e);
        }
    };
}
function q(t) {
    let e, a;
    return {
        c() {
            (e = s('a')), (a = c('Next')), this.h();
        },
        l(t) {
            e = r(t, 'A', { href: !0, title: !0, class: !0 });
            var s = o(e);
            (a = h(s, 'Next')), s.forEach(n), this.h();
        },
        h() {
            d(e, 'href', t[0].next.path), d(e, 'title', `Next: ${t[0].next.title}`), d(e, 'class', 'svelte-1kanmwt');
        },
        m(t, s) {
            l(t, e, s), i(e, a);
        },
        p: p,
        d(t) {
            t && n(e);
        }
    };
}
function Q(t) {
    let e, a;
    let c = (t[0].prev ? K : M)(t);
    let h = (function (t, e) {
        return t[0].next ? q : T;
    })(t)(t);
    return {
        c() {
            (e = s('div')), c.c(), (a = g()), h.c(), this.h();
        },
        l(t) {
            e = r(t, 'DIV', { class: !0 });
            var s = o(e);
            c.l(s), (a = x(s)), h.l(s), s.forEach(n), this.h();
        },
        h() {
            d(e, 'class', 'flex justify-between pt-xx-small border-t border-solid border-gray-400');
        },
        m(t, s) {
            l(t, e, s), c.m(e, null), i(e, a), h.m(e, null);
        },
        p(t, [e]) {
            c.p(t, e), h.p(t, e);
        },
        i: p,
        o: p,
        d(t) {
            t && n(e), c.d(), h.d();
        }
    };
}
function R(t, e, a) {
    let s;
    u(t, N, (t) => a(1, (s = t)));
    return [B(s.path)];
}
class J extends t {
    constructor(t) {
        super(), e(this, t, R, Q, a, {});
    }
}
function X(t) {
    let e, a, c, h, f, p, u, m, w, A, N, B, I, S;
    (c = new P({
        props: {
            data: {
                description: 'Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.',
                title: t[0] ? t[0] : 'Gitpod Documentation'
            }
        }
    })),
        (p = new W({})),
        (m = new L({}));
    const _ = t[3].default,
        F = G(_, t, t[2], null);
    return (
        (N = new V({ props: { type: 'docs', class: 'my-huge' } })),
        (I = new J({})),
        {
            c() {
                (e = s('link')),
                    (a = g()),
                    $(c.$$.fragment),
                    (h = g()),
                    (f = s('div')),
                    $(p.$$.fragment),
                    (u = g()),
                    $(m.$$.fragment),
                    (w = g()),
                    F && F.c(),
                    (A = g()),
                    $(N.$$.fragment),
                    (B = g()),
                    $(I.$$.fragment),
                    this.h();
            },
            l(t) {
                const s = D('[data-svelte="svelte-1idk49p"]', document.head);
                (e = r(s, 'LINK', { rel: !0, href: !0 })), s.forEach(n), (a = x(t)), v(c.$$.fragment, t), (h = x(t)), (f = r(t, 'DIV', { class: !0 }));
                var l = o(f);
                v(p.$$.fragment, l),
                    (u = x(l)),
                    v(m.$$.fragment, l),
                    (w = x(l)),
                    F && F.l(l),
                    (A = x(l)),
                    v(N.$$.fragment, l),
                    (B = x(l)),
                    v(I.$$.fragment, l),
                    l.forEach(n),
                    this.h();
            },
            h() {
                d(e, 'rel', 'stylesheet'), d(e, 'href', '/prism-solarized-light.min.css'), d(f, 'class', 'content-docs');
            },
            m(t, s) {
                i(document.head, e),
                    l(t, a, s),
                    E(c, t, s),
                    l(t, h, s),
                    l(t, f, s),
                    E(p, f, null),
                    i(f, u),
                    E(m, f, null),
                    i(f, w),
                    F && F.m(f, null),
                    i(f, A),
                    E(N, f, null),
                    i(f, B),
                    E(I, f, null),
                    (S = !0);
            },
            p(t, [e]) {
                const a = {};
                1 & e &&
                    (a.data = {
                        description: 'Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.',
                        title: t[0] ? t[0] : 'Gitpod Documentation'
                    }),
                    c.$set(a),
                    F && F.p && 4 & e && j(F, _, t, t[2], e, null, null);
            },
            i(t) {
                S || (b(c.$$.fragment, t), b(p.$$.fragment, t), b(m.$$.fragment, t), b(F, t), b(N.$$.fragment, t), b(I.$$.fragment, t), (S = !0));
            },
            o(t) {
                k(c.$$.fragment, t), k(p.$$.fragment, t), k(m.$$.fragment, t), k(F, t), k(N.$$.fragment, t), k(I.$$.fragment, t), (S = !1);
            },
            d(t) {
                n(e), t && n(a), y(c, t), t && n(h), t && n(f), y(p), y(m), F && F.d(t), y(N), y(I);
            }
        }
    );
}
function Y(t, e, a) {
    let s;
    u(t, I, (t) => a(4, (s = t)));
    let { $$slots: r = {}, $$scope: o } = e,
        { section: n } = e,
        { title: l } = e;
    return (
        (t.$$set = (t) => {
            'section' in t && a(1, (n = t.section)), 'title' in t && a(0, (l = t.title)), '$$scope' in t && a(2, (o = t.$$scope));
        }),
        (t.$$.update = () => {
            2 & t.$$.dirty && A(I, (s = n), s);
        }),
        [l, n, o, r]
    );
}
class Z extends t {
    constructor(t) {
        super(), e(this, t, Y, X, a, { section: 1, title: 0 });
    }
}
export { Z as D };
