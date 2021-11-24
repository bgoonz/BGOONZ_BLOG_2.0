import {
    S as s,
    i as a,
    s as t,
    j as e,
    m as r,
    o as l,
    v as c,
    r as o,
    w as i,
    e as n,
    t as p,
    k as h,
    c as f,
    a as m,
    g as d,
    d as u,
    n as g,
    b as $,
    f as v,
    G as x,
    C as E
} from './index-0a115175.js';
import { S as j } from './section-16fe1b30.js';
function G(s) {
    let a,
        t,
        e,
        r,
        l,
        c,
        o,
        i,
        j,
        G,
        _,
        I,
        b,
        D,
        S,
        V,
        k,
        w = s[2].text + '';
    return {
        c() {
            (a = n('div')),
                (t = n('div')),
                (e = n('h2')),
                (r = p(s[0])),
                (l = h()),
                (c = n('p')),
                (o = p(s[1])),
                (i = h()),
                (j = n('a')),
                (G = p(w)),
                (_ = h()),
                (I = n('div')),
                (b = n('img')),
                (S = h()),
                (V = n('img')),
                this.h();
        },
        l(n) {
            a = f(n, 'DIV', { class: !0 });
            var p = m(a);
            t = f(p, 'DIV', { class: !0 });
            var h = m(t);
            e = f(h, 'H2', { class: !0 });
            var $ = m(e);
            (r = d($, s[0])), $.forEach(u), (l = g(h)), (c = f(h, 'P', { class: !0 }));
            var v = m(c);
            (o = d(v, s[1])), v.forEach(u), (i = g(h)), (j = f(h, 'A', { href: !0, class: !0 }));
            var x = m(j);
            (G = d(x, w)), x.forEach(u), h.forEach(u), (_ = g(p)), (I = f(p, 'DIV', { class: !0 }));
            var E = m(I);
            (b = f(E, 'IMG', { src: !0, alt: !0 })), (S = g(E)), (V = f(E, 'IMG', { src: !0, class: !0, alt: !0 })), E.forEach(u), p.forEach(u), this.h();
        },
        h() {
            $(e, 'class', 'h1'),
                $(c, 'class', 'explore__paragraph h4'),
                $(j, 'href', s[2].href),
                $(j, 'class', 'btn-conversion'),
                $(t, 'class', 'explore__text'),
                b.src !== (D = '/images/illustration-grid.jpg') && $(b, 'src', '/images/illustration-grid.jpg'),
                $(b, 'alt', 'Gitpod in a Nutshell'),
                V.src !== (k = '/images/illustration-small.jpg') && $(V, 'src', '/images/illustration-small.jpg'),
                $(V, 'class', 'small'),
                $(V, 'alt', 'Gitpod in a Nutshell'),
                $(I, 'class', 'explore__illustration'),
                $(a, 'class', 'explore');
        },
        m(s, n) {
            v(s, a, n), x(a, t), x(t, e), x(e, r), x(t, l), x(t, c), x(c, o), x(t, i), x(t, j), x(j, G), x(a, _), x(a, I), x(I, b), x(I, S), x(I, V);
        },
        p: E,
        d(s) {
            s && u(a);
        }
    };
}
function _(s) {
    let a, t;
    return (
        (a = new j({ props: { $$slots: { default: [G] }, $$scope: { ctx: s } } })),
        {
            c() {
                e(a.$$.fragment);
            },
            l(s) {
                r(a.$$.fragment, s);
            },
            m(s, e) {
                l(a, s, e), (t = !0);
            },
            p(s, [t]) {
                const e = {};
                16 & t && (e.$$scope = { dirty: t, ctx: s }), a.$set(e);
            },
            i(s) {
                t || (c(a.$$.fragment, s), (t = !0));
            },
            o(s) {
                o(a.$$.fragment, s), (t = !1);
            },
            d(s) {
                i(a, s);
            }
        }
    );
}
function I(s, a, t) {
    let { contents: e } = a;
    const {
        title: r = 'Explore Gitpod',
        description: l = 'Automated and ephemeral dev environments in the cloud.',
        link: c = { text: 'See Features', href: '/features' }
    } = e || {};
    return (
        (s.$$set = (s) => {
            'contents' in s && t(3, (e = s.contents));
        }),
        [r, l, c, e]
    );
}
class b extends s {
    constructor(s) {
        super(), a(this, s, I, _, t, { contents: 3 });
    }
}
export { b as E };
