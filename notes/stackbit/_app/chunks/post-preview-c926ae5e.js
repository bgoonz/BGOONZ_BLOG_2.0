import {
    S as e,
    i as l,
    s as a,
    e as s,
    c as t,
    a as r,
    d as o,
    b as c,
    f as i,
    G as n,
    k as h,
    t as f,
    j as u,
    n as d,
    g,
    m as v,
    I as m,
    o as x,
    h as p,
    v as b,
    r as k,
    w
} from './index-0a115175.js';
import { A as $, a as y } from './avatars-7c72c4bb.js';
function E(e) {
    let l, a, h, f, u, d;
    return {
        c() {
            (l = s('a')), (a = s('div')), this.h();
        },
        l(e) {
            l = t(e, 'A', { href: !0, 'sveltekit:prefetch': !0, class: !0 });
            var s = r(l);
            (a = t(s, 'DIV', { 'aria-label': !0, class: !0, style: !0 })), r(a).forEach(o), s.forEach(o), this.h();
        },
        h() {
            c(a, 'aria-label', (h = `${'blog' === e[2] ? 'Blog post' : 'Guide'}: ${e[0].title}`)),
                c(
                    a,
                    'class',
                    (f =
                        'object-cover m-auto overflow-hidden rounded-t-xl bg-center bg-cover w-full h-64 ' +
                        ('blog' === e[2] ? '' : 'lg:rounded-l-xl lg:rounded-t-none lg:w-60 lg:h-full'))
                ),
                c(a, 'style', (u = `background-image: url(/images/${e[2]}/${e[0].slug}/${e[0].image});`)),
                c(l, 'href', (d = '/' + e[2] + '/' + e[0].slug)),
                c(l, 'sveltekit:prefetch', ''),
                c(l, 'class', 'svelte-i5xvka');
        },
        m(e, s) {
            i(e, l, s), n(l, a);
        },
        p(e, s) {
            5 & s && h !== (h = `${'blog' === e[2] ? 'Blog post' : 'Guide'}: ${e[0].title}`) && c(a, 'aria-label', h),
                4 & s &&
                    f !==
                        (f =
                            'object-cover m-auto overflow-hidden rounded-t-xl bg-center bg-cover w-full h-64 ' +
                            ('blog' === e[2] ? '' : 'lg:rounded-l-xl lg:rounded-t-none lg:w-60 lg:h-full')) &&
                    c(a, 'class', f),
                5 & s && u !== (u = `background-image: url(/images/${e[2]}/${e[0].slug}/${e[0].image});`) && c(a, 'style', u),
                5 & s && d !== (d = '/' + e[2] + '/' + e[0].slug) && c(l, 'href', d);
        },
        d(e) {
            e && o(l);
        }
    };
}
function D(e) {
    let l,
        a,
        h,
        u,
        d = e[0].title + '';
    return {
        c() {
            (l = s('h2')), (a = s('a')), (h = f(d)), this.h();
        },
        l(e) {
            l = t(e, 'H2', { class: !0 });
            var s = r(l);
            a = t(s, 'A', { href: !0, 'sveltekit:prefetch': !0, class: !0 });
            var c = r(a);
            (h = g(c, d)), c.forEach(o), s.forEach(o), this.h();
        },
        h() {
            c(a, 'href', (u = '/' + e[2] + '/' + e[0].slug)), c(a, 'sveltekit:prefetch', ''), c(a, 'class', 'svelte-i5xvka'), c(l, 'class', 'svelte-i5xvka');
        },
        m(e, s) {
            i(e, l, s), n(l, a), n(a, h);
        },
        p(e, l) {
            1 & l && d !== (d = e[0].title + '') && p(h, d), 5 & l && u !== (u = '/' + e[2] + '/' + e[0].slug) && c(a, 'href', u);
        },
        d(e) {
            e && o(l);
        }
    };
}
function j(e) {
    let l,
        a,
        h,
        u,
        d = e[0].title + '';
    return {
        c() {
            (l = s('h3')), (a = s('a')), (h = f(d)), this.h();
        },
        l(e) {
            l = t(e, 'H3', { class: !0 });
            var s = r(l);
            a = t(s, 'A', { href: !0, 'sveltekit:prefetch': !0, class: !0 });
            var c = r(a);
            (h = g(c, d)), c.forEach(o), s.forEach(o), this.h();
        },
        h() {
            c(a, 'href', (u = '/' + e[2] + '/' + e[0].slug)), c(a, 'sveltekit:prefetch', ''), c(a, 'class', 'svelte-i5xvka'), c(l, 'class', 'h2 svelte-i5xvka');
        },
        m(e, s) {
            i(e, l, s), n(l, a), n(a, h);
        },
        p(e, l) {
            1 & l && d !== (d = e[0].title + '') && p(h, d), 5 & l && u !== (u = '/' + e[2] + '/' + e[0].slug) && c(a, 'href', u);
        },
        d(e) {
            e && o(l);
        }
    };
}
function A(e) {
    let l,
        a,
        A,
        M,
        I,
        L,
        O,
        P,
        R,
        S,
        V,
        G,
        B,
        H,
        C,
        N,
        q,
        z,
        F = e[0].excerpt + '',
        J = new Date(Date.parse(e[0].date)).toLocaleDateString(void 0, { year: 'numeric', month: 'short', day: 'numeric' }) + '',
        K = e[1] && E(e);
    function Q(e, l) {
        return 'h3' === e[3] ? j : D;
    }
    let T = Q(e),
        U = T(e);
    return (
        (V = new $({ props: { usernames: e[0].author, socialMediaLinks: y, socialMediaLinkClasses: 'filter hover:drop-shadow' } })),
        {
            c() {
                (l = s('div')),
                    K && K.c(),
                    (a = h()),
                    (A = s('div')),
                    (M = s('div')),
                    U.c(),
                    (I = h()),
                    (L = s('p')),
                    (O = f(F)),
                    (P = h()),
                    (R = s('p')),
                    (S = s('span')),
                    u(V.$$.fragment),
                    (G = h()),
                    (B = s('a')),
                    (H = f(J)),
                    this.h();
            },
            l(e) {
                l = t(e, 'DIV', { class: !0 });
                var s = r(l);
                K && K.l(s), (a = d(s)), (A = t(s, 'DIV', { class: !0 }));
                var c = r(A);
                M = t(c, 'DIV', { class: !0 });
                var i = r(M);
                U.l(i), (I = d(i)), (L = t(i, 'P', { class: !0 }));
                var n = r(L);
                (O = g(n, F)), n.forEach(o), i.forEach(o), (P = d(c)), (R = t(c, 'P', { class: !0 }));
                var h = r(R);
                S = t(h, 'SPAN', {});
                var f = r(S);
                v(V.$$.fragment, f), (G = d(f)), (B = t(f, 'A', { href: !0, class: !0, 'sveltekit:prefetch': !0 }));
                var u = r(B);
                (H = g(u, J)), u.forEach(o), f.forEach(o), h.forEach(o), c.forEach(o), s.forEach(o), this.h();
            },
            h() {
                c(L, 'class', 'svelte-i5xvka'),
                    c(M, 'class', 'svelte-i5xvka'),
                    c(B, 'href', (C = '/' + e[2] + '/' + e[0].slug)),
                    c(B, 'class', 'date no-underline text-p-small ml-macro'),
                    c(B, 'sveltekit:prefetch', ''),
                    c(R, 'class', 'svelte-i5xvka'),
                    c(
                        A,
                        'class',
                        (N = 'blurb ' + ('blog' === e[2] ? 'flex-col h-full' : '') + ' flex flex-wrap lg:justify-between p-x-small pt-small svelte-i5xvka')
                    ),
                    c(
                        l,
                        'class',
                        (q =
                            e[2] +
                            ' flex flex-col max-w-sm lg:max-w-none ' +
                            ('blog' === e[2] ? '' : 'lg:flex-row lg:max-w-max mx-auto') +
                            ' rounded-xl bg-off-white svelte-i5xvka')
                    ),
                    m(l, 'bg-sand-dark', !e[1]);
            },
            m(e, s) {
                i(e, l, s),
                    K && K.m(l, null),
                    n(l, a),
                    n(l, A),
                    n(A, M),
                    U.m(M, null),
                    n(M, I),
                    n(M, L),
                    n(L, O),
                    n(A, P),
                    n(A, R),
                    n(R, S),
                    x(V, S, null),
                    n(S, G),
                    n(S, B),
                    n(B, H),
                    (z = !0);
            },
            p(e, [s]) {
                e[1] ? (K ? K.p(e, s) : ((K = E(e)), K.c(), K.m(l, a))) : K && (K.d(1), (K = null)),
                    T === (T = Q(e)) && U ? U.p(e, s) : (U.d(1), (U = T(e)), U && (U.c(), U.m(M, I))),
                    (!z || 1 & s) && F !== (F = e[0].excerpt + '') && p(O, F);
                const t = {};
                1 & s && (t.usernames = e[0].author),
                    V.$set(t),
                    (!z || 1 & s) &&
                        J !== (J = new Date(Date.parse(e[0].date)).toLocaleDateString(void 0, { year: 'numeric', month: 'short', day: 'numeric' }) + '') &&
                        p(H, J),
                    (!z || (5 & s && C !== (C = '/' + e[2] + '/' + e[0].slug))) && c(B, 'href', C),
                    (!z ||
                        (4 & s &&
                            N !==
                                (N =
                                    'blurb ' +
                                    ('blog' === e[2] ? 'flex-col h-full' : '') +
                                    ' flex flex-wrap lg:justify-between p-x-small pt-small svelte-i5xvka'))) &&
                        c(A, 'class', N),
                    (!z ||
                        (4 & s &&
                            q !==
                                (q =
                                    e[2] +
                                    ' flex flex-col max-w-sm lg:max-w-none ' +
                                    ('blog' === e[2] ? '' : 'lg:flex-row lg:max-w-max mx-auto') +
                                    ' rounded-xl bg-off-white svelte-i5xvka'))) &&
                        c(l, 'class', q),
                    6 & s && m(l, 'bg-sand-dark', !e[1]);
            },
            i(e) {
                z || (b(V.$$.fragment, e), (z = !0));
            },
            o(e) {
                k(V.$$.fragment, e), (z = !1);
            },
            d(e) {
                e && o(l), K && K.d(), U.d(), w(V);
            }
        }
    );
}
function M(e, l, a) {
    let { post: s } = l,
        { isMostRecent: t = !1 } = l,
        { type: r } = l,
        { headlineOrder: o } = l;
    return (
        (e.$$set = (e) => {
            'post' in e && a(0, (s = e.post)),
                'isMostRecent' in e && a(1, (t = e.isMostRecent)),
                'type' in e && a(2, (r = e.type)),
                'headlineOrder' in e && a(3, (o = e.headlineOrder));
        }),
        [s, t, r, o]
    );
}
class I extends e {
    constructor(e) {
        super(), l(this, e, M, A, a, { post: 0, isMostRecent: 1, type: 2, headlineOrder: 3 });
    }
}
export { I as P };
