import {
    S as t,
    i as e,
    s as l,
    E as s,
    A as n,
    e as r,
    c,
    a,
    d as o,
    ab as i,
    I as h,
    f as u,
    F as f,
    p as d,
    v as $,
    r as p,
    D as m,
    aa as g,
    b as v,
    j as b,
    k as w,
    m as E,
    n as k,
    o as x,
    G as I,
    w as y,
    B as M,
    u as j,
    K as N,
    t as U,
    g as _,
    h as S,
    H as D,
    T as V,
    L as C,
    N as L,
    l as A,
    W as q,
    C as B,
    P as T,
    z as K,
    X as P
} from '../../chunks/index-0a115175.js';
import { d as G, M as O } from '../../chunks/menu-62fb98ae.js';
import { p as z } from '../../chunks/stores-6ede6f6c.js';
import { w as F } from '../../chunks/index-ab5856d2.js';
/* empty css                                    */ function H(t) {
    let e, l;
    const m = t[6].default,
        g = s(m, t, t[5], null);
    let v = [{ href: t[0] }, { 'sveltekit:prefetch': '' }, t[2]],
        b = {};
    for (let s = 0; s < v.length; s += 1) b = n(b, v[s]);
    return {
        c() {
            (e = r('a')), g && g.c(), this.h();
        },
        l(t) {
            e = c(t, 'A', { href: !0, 'sveltekit:prefetch': !0 });
            var l = a(e);
            g && g.l(l), l.forEach(o), this.h();
        },
        h() {
            i(e, b), h(e, 'active', t[1]), h(e, 'svelte-gpq0pb', !0);
        },
        m(t, s) {
            u(t, e, s), g && g.m(e, null), (l = !0);
        },
        p(t, [s]) {
            g && g.p && 32 & s && f(g, m, t, t[5], s, null, null),
                i(e, (b = d(v, [(!l || 1 & s) && { href: t[0] }, { 'sveltekit:prefetch': '' }, 4 & s && t[2]]))),
                h(e, 'active', t[1]),
                h(e, 'svelte-gpq0pb', !0);
        },
        i(t) {
            l || ($(g, t), (l = !0));
        },
        o(t) {
            p(g, t), (l = !1);
        },
        d(t) {
            t && o(e), g && g.d(t);
        }
    };
}
function Q(t, e, l) {
    let s, r, c;
    m(t, z, (t) => l(4, (c = t)));
    let { $$slots: a = {}, $$scope: o } = e,
        { href: i } = e;
    return (
        (t.$$set = (t) => {
            l(2, (e = n(n({}, e), g(t)))), 'href' in t && l(0, (i = t.href)), '$$scope' in t && l(5, (o = t.$$scope));
        }),
        (t.$$.update = () => {
            16 & t.$$.dirty && l(3, (s = /self-hosted\/\d\.\d\.\d/.test(c.path) ? c.path.replace(/\d\.\d\.\d/, 'latest') : c.path)),
                9 & t.$$.dirty && l(1, (r = i === s || i === `${s}/`));
        }),
        (e = g(e)),
        [i, r, e, s, c, o, a]
    );
}
class R extends t {
    constructor(t) {
        super(), e(this, t, Q, H, l, { href: 0 });
    }
}
function W(t, e, l) {
    const s = t.slice();
    return (s[3] = e[l]), s;
}
function X(t) {
    let e,
        l = t[0].title + '';
    return {
        c() {
            e = U(l);
        },
        l(t) {
            e = _(t, l);
        },
        m(t, l) {
            u(t, e, l);
        },
        p(t, s) {
            1 & s && l !== (l = t[0].title + '') && S(e, l);
        },
        d(t) {
            t && o(e);
        }
    };
}
function J(t) {
    let e,
        l,
        s = t[0].subMenu,
        n = [];
    for (let r = 0; r < s.length; r += 1) n[r] = Z(W(t, s, r));
    const i = (t) =>
        p(n[t], 1, 1, () => {
            n[t] = null;
        });
    return {
        c() {
            e = r('ul');
            for (let t = 0; t < n.length; t += 1) n[t].c();
            this.h();
        },
        l(t) {
            e = c(t, 'UL', { class: !0 });
            var l = a(e);
            for (let e = 0; e < n.length; e += 1) n[e].l(l);
            l.forEach(o), this.h();
        },
        h() {
            v(e, 'class', 'submenu svelte-kua03s');
        },
        m(t, s) {
            u(t, e, s);
            for (let l = 0; l < n.length; l += 1) n[l].m(e, null);
            l = !0;
        },
        p(t, l) {
            if (1 & l) {
                let r;
                for (s = t[0].subMenu, r = 0; r < s.length; r += 1) {
                    const c = W(t, s, r);
                    n[r] ? (n[r].p(c, l), $(n[r], 1)) : ((n[r] = Z(c)), n[r].c(), $(n[r], 1), n[r].m(e, null));
                }
                for (M(), r = s.length; r < n.length; r += 1) i(r);
                j();
            }
        },
        i(t) {
            if (!l) {
                for (let t = 0; t < s.length; t += 1) $(n[t]);
                l = !0;
            }
        },
        o(t) {
            n = n.filter(Boolean);
            for (let e = 0; e < n.length; e += 1) p(n[e]);
            l = !1;
        },
        d(t) {
            t && o(e), N(n, t);
        }
    };
}
function Y(t) {
    let e,
        l = t[3].title + '';
    return {
        c() {
            e = U(l);
        },
        l(t) {
            e = _(t, l);
        },
        m(t, l) {
            u(t, e, l);
        },
        p(t, s) {
            1 & s && l !== (l = t[3].title + '') && S(e, l);
        },
        d(t) {
            t && o(e);
        }
    };
}
function Z(t) {
    let e, l, s, n;
    return (
        (l = new R({ props: { href: t[3].path, $$slots: { default: [Y] }, $$scope: { ctx: t } } })),
        {
            c() {
                (e = r('li')), b(l.$$.fragment), (s = w()), this.h();
            },
            l(t) {
                e = c(t, 'LI', { class: !0 });
                var n = a(e);
                E(l.$$.fragment, n), (s = k(n)), n.forEach(o), this.h();
            },
            h() {
                v(e, 'class', 'menu-item svelte-kua03s');
            },
            m(t, r) {
                u(t, e, r), x(l, e, null), I(e, s), (n = !0);
            },
            p(t, e) {
                const s = {};
                1 & e && (s.href = t[3].path), 65 & e && (s.$$scope = { dirty: e, ctx: t }), l.$set(s);
            },
            i(t) {
                n || ($(l.$$.fragment, t), (n = !0));
            },
            o(t) {
                p(l.$$.fragment, t), (n = !1);
            },
            d(t) {
                t && o(e), y(l);
            }
        }
    );
}
function tt(t) {
    let e, l, s, n, i;
    s = new R({ props: { href: t[0].path, class: 'text-large', $$slots: { default: [X] }, $$scope: { ctx: t } } });
    let f = t[0].subMenu && t[1] && J(t);
    return {
        c() {
            (e = r('li')), (l = r('div')), b(s.$$.fragment), (n = w()), f && f.c(), this.h();
        },
        l(t) {
            e = c(t, 'LI', { class: !0 });
            var r = a(e);
            l = c(r, 'DIV', { class: !0 });
            var i = a(l);
            E(s.$$.fragment, i), (n = k(i)), f && f.l(i), i.forEach(o), r.forEach(o), this.h();
        },
        h() {
            v(l, 'class', 'menu-container svelte-kua03s'), h(l, 'isActiveSection', t[1]), v(e, 'class', 'menu-item svelte-kua03s');
        },
        m(t, r) {
            u(t, e, r), I(e, l), x(s, l, null), I(l, n), f && f.m(l, null), (i = !0);
        },
        p(t, [e]) {
            const n = {};
            1 & e && (n.href = t[0].path),
                65 & e && (n.$$scope = { dirty: e, ctx: t }),
                s.$set(n),
                t[0].subMenu && t[1]
                    ? f
                        ? (f.p(t, e), 3 & e && $(f, 1))
                        : ((f = J(t)), f.c(), $(f, 1), f.m(l, null))
                    : f &&
                      (M(),
                      p(f, 1, 1, () => {
                          f = null;
                      }),
                      j()),
                2 & e && h(l, 'isActiveSection', t[1]);
        },
        i(t) {
            i || ($(s.$$.fragment, t), $(f), (i = !0));
        },
        o(t) {
            p(s.$$.fragment, t), p(f), (i = !1);
        },
        d(t) {
            t && o(e), y(s), f && f.d();
        }
    };
}
function et(t, e, l) {
    let s, n;
    m(t, G, (t) => l(2, (n = t)));
    let { menuItem: r } = e;
    return (
        (t.$$set = (t) => {
            'menuItem' in t && l(0, (r = t.menuItem));
        }),
        (t.$$.update = () => {
            5 & t.$$.dirty &&
                l(1, (s = n ? r.path.indexOf(/self-hosted\/\d\.\d\.\d/.test(n) ? n.replace(/\d\.\d\.\d/, 'latest') : n) >= 0 : /\/docs\/?$/.test(r.path)));
        }),
        [r, s, n]
    );
}
class lt extends t {
    constructor(t) {
        super(), e(this, t, et, tt, l, { menuItem: 0 });
    }
}
function st(t, e, l) {
    const s = t.slice();
    return (s[1] = e[l]), s;
}
function nt(t) {
    let e, l;
    return (
        (e = new lt({ props: { menuItem: t[1] } })),
        {
            c() {
                b(e.$$.fragment);
            },
            l(t) {
                E(e.$$.fragment, t);
            },
            m(t, s) {
                x(e, t, s), (l = !0);
            },
            p(t, l) {
                const s = {};
                1 & l && (s.menuItem = t[1]), e.$set(s);
            },
            i(t) {
                l || ($(e.$$.fragment, t), (l = !0));
            },
            o(t) {
                p(e.$$.fragment, t), (l = !1);
            },
            d(t) {
                y(e, t);
            }
        }
    );
}
function rt(t) {
    let e,
        l,
        s = t[0],
        n = [];
    for (let r = 0; r < s.length; r += 1) n[r] = nt(st(t, s, r));
    const i = (t) =>
        p(n[t], 1, 1, () => {
            n[t] = null;
        });
    return {
        c() {
            e = r('ul');
            for (let t = 0; t < n.length; t += 1) n[t].c();
            this.h();
        },
        l(t) {
            e = c(t, 'UL', { class: !0 });
            var l = a(e);
            for (let e = 0; e < n.length; e += 1) n[e].l(l);
            l.forEach(o), this.h();
        },
        h() {
            v(e, 'class', 'space-y-8');
        },
        m(t, s) {
            u(t, e, s);
            for (let l = 0; l < n.length; l += 1) n[l].m(e, null);
            l = !0;
        },
        p(t, [l]) {
            if (1 & l) {
                let r;
                for (s = t[0], r = 0; r < s.length; r += 1) {
                    const c = st(t, s, r);
                    n[r] ? (n[r].p(c, l), $(n[r], 1)) : ((n[r] = nt(c)), n[r].c(), $(n[r], 1), n[r].m(e, null));
                }
                for (M(), r = s.length; r < n.length; r += 1) i(r);
                j();
            }
        },
        i(t) {
            if (!l) {
                for (let t = 0; t < s.length; t += 1) $(n[t]);
                l = !0;
            }
        },
        o(t) {
            n = n.filter(Boolean);
            for (let e = 0; e < n.length; e += 1) p(n[e]);
            l = !1;
        },
        d(t) {
            t && o(e), N(n, t);
        }
    };
}
function ct(t, e, l) {
    let { MENU: s } = e;
    return (
        (t.$$set = (t) => {
            'MENU' in t && l(0, (s = t.MENU));
        }),
        [s]
    );
}
class at extends t {
    constructor(t) {
        super(), e(this, t, ct, rt, l, { MENU: 0 });
    }
}
var ot = F(!1);
function it(t) {
    let e, l, s;
    return {
        c() {
            (e = r('div')), (l = r('img')), this.h();
        },
        l(t) {
            e = c(t, 'DIV', { class: !0, 'aria-hidden': !0 });
            var s = a(e);
            (l = c(s, 'IMG', { class: !0, src: !0, alt: !0, width: !0, height: !0 })), s.forEach(o), this.h();
        },
        h() {
            v(l, 'class', 'menu-item__icon-arrow svelte-q983vv'),
                l.src !== (s = '/arrow.svg') && v(l, 'src', '/arrow.svg'),
                v(l, 'alt', 'See more'),
                v(l, 'width', '12'),
                v(l, 'height', '7'),
                v(e, 'class', 'menu-item__icon svelte-q983vv'),
                v(e, 'aria-hidden', 'true');
        },
        m(t, s) {
            u(t, e, s), I(e, l);
        },
        d(t) {
            t && o(e);
        }
    };
}
function ht(t) {
    let e, l, n, i, h, d, m;
    const g = t[4].default,
        b = s(g, t, t[3], null);
    let E = t[2] && it();
    return {
        c() {
            (e = r('li')), (l = r('a')), (n = r('div')), b && b.c(), (i = w()), E && E.c(), this.h();
        },
        l(t) {
            e = c(t, 'LI', { class: !0 });
            var s = a(e);
            l = c(s, 'A', { href: !0, class: !0 });
            var r = a(l);
            n = c(r, 'DIV', { class: !0 });
            var h = a(n);
            b && b.l(h), h.forEach(o), (i = k(r)), E && E.l(r), r.forEach(o), s.forEach(o), this.h();
        },
        h() {
            v(n, 'class', 'menu-item__label svelte-q983vv'),
                v(l, 'href', t[0]),
                v(l, 'class', 'menu-item__link svelte-q983vv'),
                v(e, 'class', 'menu-item svelte-q983vv');
        },
        m(s, r) {
            u(s, e, r),
                I(e, l),
                I(l, n),
                b && b.m(n, null),
                I(l, i),
                E && E.m(l, null),
                (h = !0),
                d ||
                    ((m = D(l, 'click', function () {
                        V(t[1]) && t[1].apply(this, arguments);
                    })),
                    (d = !0));
        },
        p(e, [s]) {
            (t = e),
                b && b.p && 8 & s && f(b, g, t, t[3], s, null, null),
                t[2] ? E || ((E = it()), E.c(), E.m(l, null)) : E && (E.d(1), (E = null)),
                (!h || 1 & s) && v(l, 'href', t[0]);
        },
        i(t) {
            h || ($(b, t), (h = !0));
        },
        o(t) {
            p(b, t), (h = !1);
        },
        d(t) {
            t && o(e), b && b.d(t), E && E.d(), (d = !1), m();
        }
    };
}
function ut(t, e, l) {
    let { $$slots: s = {}, $$scope: n } = e,
        { href: r } = e,
        { onClick: c } = e,
        { showIcon: a = !1 } = e;
    return (
        (t.$$set = (t) => {
            'href' in t && l(0, (r = t.href)),
                'onClick' in t && l(1, (c = t.onClick)),
                'showIcon' in t && l(2, (a = t.showIcon)),
                '$$scope' in t && l(3, (n = t.$$scope));
        }),
        [r, c, a, n, s]
    );
}
class ft extends t {
    constructor(t) {
        super(), e(this, t, ut, ht, l, { href: 0, onClick: 1, showIcon: 2 });
    }
}
function dt(t, e, l) {
    const s = t.slice();
    return (s[3] = e[l]), s;
}
function $t(t) {
    let e,
        l,
        s = t[3].title + '';
    return {
        c() {
            (e = U(s)), (l = w());
        },
        l(t) {
            (e = _(t, s)), (l = k(t));
        },
        m(t, s) {
            u(t, e, s), u(t, l, s);
        },
        p(t, l) {
            1 & l && s !== (s = t[3].title + '') && S(e, s);
        },
        d(t) {
            t && o(e), t && o(l);
        }
    };
}
function pt(t) {
    let e, l;
    return (
        (e = new ft({ props: { href: t[3].path, showIcon: !0, onClick: t[2], $$slots: { default: [$t] }, $$scope: { ctx: t } } })),
        {
            c() {
                b(e.$$.fragment);
            },
            l(t) {
                E(e.$$.fragment, t);
            },
            m(t, s) {
                x(e, t, s), (l = !0);
            },
            p(t, l) {
                const s = {};
                1 & l && (s.href = t[3].path), 2 & l && (s.onClick = t[2]), 65 & l && (s.$$scope = { dirty: l, ctx: t }), e.$set(s);
            },
            i(t) {
                l || ($(e.$$.fragment, t), (l = !0));
            },
            o(t) {
                p(e.$$.fragment, t), (l = !1);
            },
            d(t) {
                y(e, t);
            }
        }
    );
}
function mt(t) {
    let e,
        l,
        s,
        n = t[0],
        i = [];
    for (let r = 0; r < n.length; r += 1) i[r] = pt(dt(t, n, r));
    const h = (t) =>
        p(i[t], 1, 1, () => {
            i[t] = null;
        });
    return {
        c() {
            (e = r('div')), (l = r('ul'));
            for (let t = 0; t < i.length; t += 1) i[t].c();
            this.h();
        },
        l(t) {
            e = c(t, 'DIV', { role: !0, 'aria-label': !0 });
            var s = a(e);
            l = c(s, 'UL', {});
            var n = a(l);
            for (let e = 0; e < i.length; e += 1) i[e].l(n);
            n.forEach(o), s.forEach(o), this.h();
        },
        h() {
            v(e, 'role', 'navigation'), v(e, 'aria-label', 'All topics');
        },
        m(t, n) {
            u(t, e, n), I(e, l);
            for (let e = 0; e < i.length; e += 1) i[e].m(l, null);
            s = !0;
        },
        p(t, [e]) {
            if (3 & e) {
                let s;
                for (n = t[0], s = 0; s < n.length; s += 1) {
                    const r = dt(t, n, s);
                    i[s] ? (i[s].p(r, e), $(i[s], 1)) : ((i[s] = pt(r)), i[s].c(), $(i[s], 1), i[s].m(l, null));
                }
                for (M(), s = n.length; s < i.length; s += 1) h(s);
                j();
            }
        },
        i(t) {
            if (!s) {
                for (let t = 0; t < n.length; t += 1) $(i[t]);
                s = !0;
            }
        },
        o(t) {
            i = i.filter(Boolean);
            for (let e = 0; e < i.length; e += 1) p(i[e]);
            s = !1;
        },
        d(t) {
            t && o(e), N(i, t);
        }
    };
}
function gt(t, e, l) {
    let s;
    m(t, ot, (t) => l(1, (s = t)));
    let { MENU: n } = e;
    return (
        (t.$$set = (t) => {
            'MENU' in t && l(0, (n = t.MENU));
        }),
        [n, s, () => C(ot, (s = !1), s)]
    );
}
class vt extends t {
    constructor(t) {
        super(), e(this, t, gt, mt, l, { MENU: 0 });
    }
}
var bt = F(!1);
function wt(t, e, l) {
    const s = t.slice();
    return (s[6] = e[l]), s;
}
function Et(t) {
    var e, l;
    let s,
        n,
        i,
        h,
        f,
        d,
        m,
        g,
        b,
        E,
        x,
        y,
        V,
        C,
        A,
        q,
        B,
        T = (null == (e = t[0]) ? void 0 : e.title) + '',
        K = null == (l = t[0]) ? void 0 : l.subMenu,
        P = [];
    for (let r = 0; r < K.length; r += 1) P[r] = xt(wt(t, K, r));
    const G = (t) =>
        p(P[t], 1, 1, () => {
            P[t] = null;
        });
    return {
        c() {
            (s = r('div')), (n = r('button')), (i = r('div')), (h = U(T)), (f = w()), (d = r('div')), (m = r('img')), (E = w()), (x = r('div')), (y = r('ul'));
            for (let t = 0; t < P.length; t += 1) P[t].c();
            this.h();
        },
        l(t) {
            s = c(t, 'DIV', { class: !0 });
            var e = a(s);
            n = c(e, 'BUTTON', { class: !0, type: !0, 'aria-controls': !0, 'aria-expanded': !0 });
            var l = a(n);
            i = c(l, 'DIV', { class: !0 });
            var r = a(i);
            (h = _(r, T)), r.forEach(o), (f = k(l)), (d = c(l, 'DIV', { class: !0 }));
            var u = a(d);
            (m = c(u, 'IMG', { class: !0, src: !0, alt: !0, width: !0, height: !0 })),
                u.forEach(o),
                l.forEach(o),
                (E = k(e)),
                (x = c(e, 'DIV', { 'aria-label': !0, role: !0, class: !0, id: !0 }));
            var $ = a(x);
            y = c($, 'UL', {});
            var p = a(y);
            for (let s = 0; s < P.length; s += 1) P[s].l(p);
            p.forEach(o), $.forEach(o), e.forEach(o), this.h();
        },
        h() {
            var e;
            v(i, 'class', 'toggle-button__label svelte-1dtjh89'),
                v(m, 'class', (g = L('toggle-button__icon-arrow ' + (t[2] ? 'open' : '')) + ' svelte-1dtjh89')),
                m.src !== (b = '/arrow.svg') && v(m, 'src', '/arrow.svg'),
                v(m, 'alt', 'Toggle sub menu'),
                v(m, 'width', '12'),
                v(m, 'height', '7'),
                v(d, 'class', 'toggle-button__icon svelte-1dtjh89'),
                v(n, 'class', 'toggle-button w-full svelte-1dtjh89'),
                v(n, 'type', 'button'),
                v(n, 'aria-controls', 'sub-menu'),
                v(n, 'aria-expanded', t[2]),
                v(x, 'aria-label', (V = null == (e = t[0]) ? void 0 : e.title)),
                v(x, 'role', 'navigation'),
                v(x, 'class', (C = L('px-4 ' + (t[2] ? 'block' : 'hidden')) + ' svelte-1dtjh89')),
                v(x, 'id', 'sub-menu'),
                v(s, 'class', 'sub-menu-container bg-white svelte-1dtjh89');
        },
        m(e, l) {
            u(e, s, l), I(s, n), I(n, i), I(i, h), I(n, f), I(n, d), I(d, m), I(s, E), I(s, x), I(x, y);
            for (let t = 0; t < P.length; t += 1) P[t].m(y, null);
            (A = !0), q || ((B = D(n, 'click', t[4])), (q = !0));
        },
        p(t, e) {
            var l, s, r;
            if (
                ((!A || 1 & e) && T !== (T = (null == (l = t[0]) ? void 0 : l.title) + '') && S(h, T),
                (!A || (4 & e && g !== (g = L('toggle-button__icon-arrow ' + (t[2] ? 'open' : '')) + ' svelte-1dtjh89'))) && v(m, 'class', g),
                (!A || 4 & e) && v(n, 'aria-expanded', t[2]),
                5 & e)
            ) {
                let l;
                for (K = null == (s = t[0]) ? void 0 : s.subMenu, l = 0; l < K.length; l += 1) {
                    const s = wt(t, K, l);
                    P[l] ? (P[l].p(s, e), $(P[l], 1)) : ((P[l] = xt(s)), P[l].c(), $(P[l], 1), P[l].m(y, null));
                }
                for (M(), l = K.length; l < P.length; l += 1) G(l);
                j();
            }
            (!A || (1 & e && V !== (V = null == (r = t[0]) ? void 0 : r.title))) && v(x, 'aria-label', V),
                (!A || (4 & e && C !== (C = L('px-4 ' + (t[2] ? 'block' : 'hidden')) + ' svelte-1dtjh89'))) && v(x, 'class', C);
        },
        i(t) {
            if (!A) {
                for (let t = 0; t < K.length; t += 1) $(P[t]);
                A = !0;
            }
        },
        o(t) {
            P = P.filter(Boolean);
            for (let e = 0; e < P.length; e += 1) p(P[e]);
            A = !1;
        },
        d(t) {
            t && o(s), N(P, t), (q = !1), B();
        }
    };
}
function kt(t) {
    let e,
        l,
        s = t[6].title + '';
    return {
        c() {
            (e = U(s)), (l = w());
        },
        l(t) {
            (e = _(t, s)), (l = k(t));
        },
        m(t, s) {
            u(t, e, s), u(t, l, s);
        },
        p(t, l) {
            1 & l && s !== (s = t[6].title + '') && S(e, s);
        },
        d(t) {
            t && o(e), t && o(l);
        }
    };
}
function xt(t) {
    let e, l;
    return (
        (e = new ft({ props: { href: t[6].path, onClick: t[5], $$slots: { default: [kt] }, $$scope: { ctx: t } } })),
        {
            c() {
                b(e.$$.fragment);
            },
            l(t) {
                E(e.$$.fragment, t);
            },
            m(t, s) {
                x(e, t, s), (l = !0);
            },
            p(t, l) {
                const s = {};
                1 & l && (s.href = t[6].path), 4 & l && (s.onClick = t[5]), 513 & l && (s.$$scope = { dirty: l, ctx: t }), e.$set(s);
            },
            i(t) {
                l || ($(e.$$.fragment, t), (l = !0));
            },
            o(t) {
                p(e.$$.fragment, t), (l = !1);
            },
            d(t) {
                y(e, t);
            }
        }
    );
}
function It(t) {
    var e;
    let l,
        s,
        n,
        i,
        h,
        f,
        d,
        m,
        g,
        b,
        E = (null == (e = t[0]) ? void 0 : e.subMenu) && Et(t);
    return {
        c() {
            (l = r('button')), (s = r('div')), (n = r('img')), (h = U('\n  All topics')), (f = w()), E && E.c(), (d = A()), this.h();
        },
        l(t) {
            l = c(t, 'BUTTON', { class: !0, type: !0 });
            var e = a(l);
            s = c(e, 'DIV', { class: !0 });
            var r = a(s);
            (n = c(r, 'IMG', { class: !0, src: !0, alt: !0, width: !0, height: !0 })),
                r.forEach(o),
                (h = _(e, '\n  All topics')),
                e.forEach(o),
                (f = k(t)),
                E && E.l(t),
                (d = A()),
                this.h();
        },
        h() {
            v(n, 'class', 'back-button__icon-arrow svelte-1dtjh89'),
                n.src !== (i = '/arrow.svg') && v(n, 'src', '/arrow.svg'),
                v(n, 'alt', 'See all topics'),
                v(n, 'width', '12'),
                v(n, 'height', '7'),
                v(s, 'class', 'back-button__icon svelte-1dtjh89'),
                v(l, 'class', 'back-button svelte-1dtjh89'),
                v(l, 'type', 'button');
        },
        m(e, r) {
            u(e, l, r), I(l, s), I(s, n), I(l, h), u(e, f, r), E && E.m(e, r), u(e, d, r), (m = !0), g || ((b = D(l, 'click', t[3])), (g = !0));
        },
        p(t, [e]) {
            var l;
            (null == (l = t[0]) ? void 0 : l.subMenu)
                ? E
                    ? (E.p(t, e), 1 & e && $(E, 1))
                    : ((E = Et(t)), E.c(), $(E, 1), E.m(d.parentNode, d))
                : E &&
                  (M(),
                  p(E, 1, 1, () => {
                      E = null;
                  }),
                  j());
        },
        i(t) {
            m || ($(E), (m = !0));
        },
        o(t) {
            p(E), (m = !1);
        },
        d(t) {
            t && o(l), t && o(f), E && E.d(t), t && o(d), (g = !1), b();
        }
    };
}
function yt(t, e, l) {
    let s, n;
    m(t, ot, (t) => l(1, (s = t))), m(t, bt, (t) => l(2, (n = t)));
    let { currentSection: r = null } = e;
    return (
        (t.$$set = (t) => {
            'currentSection' in t && l(0, (r = t.currentSection));
        }),
        [
            r,
            s,
            n,
            () => {
                C(ot, (s = !0), s), C(bt, (n = !1), n);
            },
            () => C(bt, (n = !n), n),
            () => C(bt, (n = !1), n)
        ]
    );
}
class Mt extends t {
    constructor(t) {
        super(), e(this, t, yt, It, l, { currentSection: 0 });
    }
}
function jt(t) {
    let e, l;
    return (
        (e = new Mt({ props: { currentSection: t[1] } })),
        {
            c() {
                b(e.$$.fragment);
            },
            l(t) {
                E(e.$$.fragment, t);
            },
            m(t, s) {
                x(e, t, s), (l = !0);
            },
            p(t, l) {
                const s = {};
                2 & l && (s.currentSection = t[1]), e.$set(s);
            },
            i(t) {
                l || ($(e.$$.fragment, t), (l = !0));
            },
            o(t) {
                p(e.$$.fragment, t), (l = !1);
            },
            d(t) {
                y(e, t);
            }
        }
    );
}
function Nt(t) {
    let e, l;
    return (
        (e = new vt({ props: { MENU: t[0] } })),
        {
            c() {
                b(e.$$.fragment);
            },
            l(t) {
                E(e.$$.fragment, t);
            },
            m(t, s) {
                x(e, t, s), (l = !0);
            },
            p(t, l) {
                const s = {};
                1 & l && (s.MENU = t[0]), e.$set(s);
            },
            i(t) {
                l || ($(e.$$.fragment, t), (l = !0));
            },
            o(t) {
                p(e.$$.fragment, t), (l = !1);
            },
            d(t) {
                y(e, t);
            }
        }
    );
}
function Ut(t) {
    let e, l, s, n;
    const i = [Nt, jt],
        h = [];
    function f(t, e) {
        return t[2] ? 0 : 1;
    }
    return (
        (l = f(t)),
        (s = h[l] = i[l](t)),
        {
            c() {
                (e = r('div')), s.c(), this.h();
            },
            l(t) {
                e = c(t, 'DIV', { class: !0 });
                var l = a(e);
                s.l(l), l.forEach(o), this.h();
            },
            h() {
                v(e, 'class', 'mobile-menu svelte-17tjvcy');
            },
            m(t, s) {
                u(t, e, s), h[l].m(e, null), (n = !0);
            },
            p(t, [n]) {
                let r = l;
                (l = f(t)),
                    l === r
                        ? h[l].p(t, n)
                        : (M(),
                          p(h[r], 1, 1, () => {
                              h[r] = null;
                          }),
                          j(),
                          (s = h[l]),
                          s ? s.p(t, n) : ((s = h[l] = i[l](t)), s.c()),
                          $(s, 1),
                          s.m(e, null));
            },
            i(t) {
                n || ($(s), (n = !0));
            },
            o(t) {
                p(s), (n = !1);
            },
            d(t) {
                t && o(e), h[l].d();
            }
        }
    );
}
function _t(t, e, l) {
    let s, n, r;
    m(t, G, (t) => l(3, (n = t))), m(t, ot, (t) => l(2, (r = t)));
    let { MENU: c } = e;
    return (
        (t.$$set = (t) => {
            'MENU' in t && l(0, (c = t.MENU));
        }),
        (t.$$.update = () => {
            9 & t.$$.dirty &&
                l(
                    1,
                    (s = c.find(({ path: t }) =>
                        n ? t.indexOf(/self-hosted\/\d\.\d\.\d/.test(n) ? n.replace(/\d\.\d\.\d/, 'latest') : n) >= 0 : /\/docs$/.test(t)
                    ))
                );
        }),
        [c, s, r, n]
    );
}
class St extends t {
    constructor(t) {
        super(), e(this, t, _t, Ut, l, { MENU: 0 });
    }
}
function Dt(t) {
    let e, l, s, n, i, h, f, d, $, p, m, g, b, E, x, y;
    return {
        c() {
            (e = r('link')),
                (l = r('script')),
                (n = w()),
                (i = w()),
                (h = r('div')),
                (f = r('label')),
                (d = U('Search')),
                ($ = w()),
                (p = r('img')),
                (g = w()),
                (b = r('input')),
                this.h();
        },
        l(t) {
            const s = q('[data-svelte="svelte-tfslqk"]', document.head);
            (e = c(s, 'LINK', { rel: !0, href: !0 })),
                (l = c(s, 'SCRIPT', { src: !0 })),
                a(l).forEach(o),
                s.forEach(o),
                (n = k(t)),
                (i = k(t)),
                (h = c(t, 'DIV', { class: !0 }));
            var r = a(h);
            f = c(r, 'LABEL', { for: !0, class: !0 });
            var u = a(f);
            (d = _(u, 'Search')),
                u.forEach(o),
                ($ = k(r)),
                (p = c(r, 'IMG', { class: !0, src: !0, alt: !0, 'aria-hidden': !0 })),
                (g = k(r)),
                (b = c(r, 'INPUT', { type: !0, placeholder: !0, id: !0, class: !0 })),
                r.forEach(o),
                this.h();
        },
        h() {
            v(e, 'rel', 'stylesheet'),
                v(e, 'href', 'https://cdn.jsdelivr.net/npm/docsearch.js@' + Vt + '/dist/cdn/docsearch.min.css'),
                l.src !== (s = 'https://cdn.jsdelivr.net/npm/docsearch.js@' + Vt + '/dist/cdn/docsearch.min.js') && v(l, 'src', s),
                v(f, 'for', Ct),
                v(f, 'class', 'sr-only'),
                v(p, 'class', 'input-icon svelte-123f4xb'),
                p.src !== (m = '/svg/mag-glass.svg') && v(p, 'src', '/svg/mag-glass.svg'),
                v(p, 'alt', 'Search'),
                v(p, 'aria-hidden', 'true'),
                v(b, 'type', 'search'),
                v(b, 'placeholder', t[2]),
                v(b, 'id', Ct),
                v(
                    b,
                    'class',
                    'box-border block w-full pl-11 pr-3 py-2 border border-transparent leading-5 text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-none focus:border-white focus:ring-white focus:text-gray-900 svelte-123f4xb'
                ),
                v(h, 'class', (E = L('input-container relative bg-white rounded-xl w-full mb-12 ' + (t[3] ? 'topics-active' : '')) + ' svelte-123f4xb'));
        },
        m(s, r) {
            I(document.head, e),
                I(document.head, l),
                t[7](l),
                u(s, n, r),
                u(s, i, r),
                u(s, h, r),
                I(h, f),
                I(f, d),
                I(h, $),
                I(h, p),
                I(h, g),
                I(h, b),
                t[8](b),
                x || ((y = [D(l, 'load', t[4]), D(document.body, 'keydown', t[5])]), (x = !0));
        },
        p(t, [e]) {
            4 & e && v(b, 'placeholder', t[2]),
                8 & e &&
                    E !== (E = L('input-container relative bg-white rounded-xl w-full mb-12 ' + (t[3] ? 'topics-active' : '')) + ' svelte-123f4xb') &&
                    v(h, 'class', E);
        },
        i: B,
        o: B,
        d(s) {
            o(e), o(l), t[7](null), s && o(n), s && o(i), s && o(h), t[8](null), (x = !1), T(y);
        }
    };
}
const Vt = '2.6.3',
    Ct = 'search-doc-input';
function Lt(t, e, l) {
    let s, n, r;
    m(t, ot, (t) => l(3, (s = t)));
    let c = !1,
        a = 'Quick search';
    return (
        K(() => {
            if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
                const t = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl';
                l(2, (a += ` ${t}+K`));
            }
        }),
        (t.$$.update = () => {
            67 & t.$$.dirty &&
                n &&
                (r || c) &&
                window.docsearch &&
                window.docsearch({ apiKey: '1a880f3060e9ff81ff84087fc90878fc', indexName: 'gitpod', inputSelector: `#${Ct}`, debug: !1 });
        }),
        [
            n,
            r,
            a,
            s,
            () => {
                l(6, (c = !0));
            },
            (t) => {
                (t.ctrlKey || t.metaKey) && 'k' === t.key && n.focus();
            },
            c,
            function (t) {
                P[t ? 'unshift' : 'push'](() => {
                    (r = t), l(1, r);
                });
            },
            function (t) {
                P[t ? 'unshift' : 'push'](() => {
                    (n = t), l(0, n);
                });
            }
        ]
    );
}
class At extends t {
    constructor(t) {
        super(), e(this, t, Lt, Dt, l, {});
    }
}
function qt(t) {
    let e, l, n, i, h, d, m, g, M, j;
    (n = new at({ props: { MENU: O } })), (d = new At({})), (g = new St({ props: { MENU: O } }));
    const N = t[1].default,
        U = s(N, t, t[0], null);
    return {
        c() {
            (e = r('div')),
                (l = r('div')),
                b(n.$$.fragment),
                (i = w()),
                (h = r('div')),
                b(d.$$.fragment),
                (m = w()),
                b(g.$$.fragment),
                (M = w()),
                U && U.c(),
                this.h();
        },
        l(t) {
            e = c(t, 'DIV', { class: !0 });
            var s = a(e);
            l = c(s, 'DIV', { class: !0 });
            var r = a(l);
            E(n.$$.fragment, r), r.forEach(o), (i = k(s)), (h = c(s, 'DIV', { class: !0 }));
            var u = a(h);
            E(d.$$.fragment, u), (m = k(u)), E(g.$$.fragment, u), (M = k(u)), U && U.l(u), u.forEach(o), s.forEach(o), this.h();
        },
        h() {
            v(l, 'class', 'menu svelte-ynf0i0'), v(h, 'class', 'doc-contents svelte-ynf0i0'), v(e, 'class', 'docs-layout row svelte-ynf0i0');
        },
        m(t, s) {
            u(t, e, s), I(e, l), x(n, l, null), I(e, i), I(e, h), x(d, h, null), I(h, m), x(g, h, null), I(h, M), U && U.m(h, null), (j = !0);
        },
        p(t, [e]) {
            U && U.p && 1 & e && f(U, N, t, t[0], e, null, null);
        },
        i(t) {
            j || ($(n.$$.fragment, t), $(d.$$.fragment, t), $(g.$$.fragment, t), $(U, t), (j = !0));
        },
        o(t) {
            p(n.$$.fragment, t), p(d.$$.fragment, t), p(g.$$.fragment, t), p(U, t), (j = !1);
        },
        d(t) {
            t && o(e), y(n), y(d), y(g), U && U.d(t);
        }
    };
}
function Bt(t, e, l) {
    let { $$slots: s = {}, $$scope: n } = e;
    return (
        (t.$$set = (t) => {
            '$$scope' in t && l(0, (n = t.$$scope));
        }),
        [n, s]
    );
}
export default class extends t {
    constructor(t) {
        super(), e(this, t, Bt, qt, l, {});
    }
}
