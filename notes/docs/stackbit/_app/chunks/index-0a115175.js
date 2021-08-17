function t() {}
const n = (t) => t;
function e(t, n) {
    for (const e in n) t[e] = n[e];
    return t;
}
function o(t) {
    return t();
}
function s() {
    return Object.create(null);
}
function r(t) {
    t.forEach(o);
}
function c(t) {
    return 'function' == typeof t;
}
function i(t, n) {
    return t != t ? n == n : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
}
function u(n, e, o) {
    n.$$.on_destroy.push(
        (function (n, ...e) {
            if (null == n) return t;
            const o = n.subscribe(...e);
            return o.unsubscribe ? () => o.unsubscribe() : o;
        })(e, o)
    );
}
function a(t, n, e, o) {
    if (t) {
        const s = l(t, n, e, o);
        return t[0](s);
    }
}
function l(t, n, o, s) {
    return t[1] && s ? e(o.ctx.slice(), t[1](s(n))) : o.ctx;
}
function f(t, n, e, o, s, r, c) {
    const i = (function (t, n, e, o) {
        if (t[2] && o) {
            const s = t[2](o(e));
            if (void 0 === n.dirty) return s;
            if ('object' == typeof s) {
                const t = [],
                    e = Math.max(n.dirty.length, s.length);
                for (let o = 0; o < e; o += 1) t[o] = n.dirty[o] | s[o];
                return t;
            }
            return n.dirty | s;
        }
        return n.dirty;
    })(n, o, s, r);
    if (i) {
        const s = l(n, e, o, c);
        t.p(s, i);
    }
}
function d(t) {
    const n = {};
    for (const e in t) '$' !== e[0] && (n[e] = t[e]);
    return n;
}
function h(t, n) {
    const e = {};
    n = new Set(n);
    for (const o in t) n.has(o) || '$' === o[0] || (e[o] = t[o]);
    return e;
}
function p(t) {
    return null == t ? '' : t;
}
function $(t, n, e = n) {
    return t.set(e), n;
}
const m = 'undefined' != typeof window;
let g = m ? () => window.performance.now() : () => Date.now(),
    y = m ? (t) => requestAnimationFrame(t) : t;
const _ = new Set();
function b(t) {
    _.forEach((n) => {
        n.c(t) || (_.delete(n), n.f());
    }),
        0 !== _.size && y(b);
}
function v(t) {
    let n;
    return (
        0 === _.size && y(b),
        {
            promise: new Promise((e) => {
                _.add((n = { c: t, f: e }));
            }),
            abort() {
                _.delete(n);
            }
        }
    );
}
function w(t, n) {
    t.appendChild(n);
}
function k(t, n, e) {
    t.insertBefore(n, e || null);
}
function x(t) {
    t.parentNode.removeChild(t);
}
function E(t, n) {
    for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function A(t) {
    return document.createElement(t);
}
function S(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function j(t) {
    return document.createTextNode(t);
}
function M() {
    return j(' ');
}
function N() {
    return j('');
}
function O(t, n, e, o) {
    return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function C(t) {
    return function (n) {
        return n.preventDefault(), t.call(this, n);
    };
}
function P(t) {
    return function (n) {
        return n.stopPropagation(), t.call(this, n);
    };
}
function T(t, n, e) {
    null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function q(t, n) {
    const e = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const o in n)
        null == n[o]
            ? t.removeAttribute(o)
            : 'style' === o
            ? (t.style.cssText = n[o])
            : '__value' === o
            ? (t.value = t[o] = n[o])
            : e[o] && e[o].set
            ? (t[o] = n[o])
            : T(t, o, n[o]);
}
function D(t, n, e) {
    const o = new Set();
    for (let s = 0; s < t.length; s += 1) t[s].checked && o.add(t[s].__value);
    return e || o.delete(n), Array.from(o);
}
function L(t) {
    return '' === t ? null : +t;
}
function R(t) {
    return Array.from(t.childNodes);
}
function z(t, n, e, o) {
    for (let s = 0; s < t.length; s += 1) {
        const o = t[s];
        if (o.nodeName === n) {
            let n = 0;
            const r = [];
            for (; n < o.attributes.length; ) {
                const t = o.attributes[n++];
                e[t.name] || r.push(t.name);
            }
            for (let t = 0; t < r.length; t++) o.removeAttribute(r[t]);
            return t.splice(s, 1)[0];
        }
    }
    return o ? S(n) : A(n);
}
function F(t, n) {
    for (let e = 0; e < t.length; e += 1) {
        const o = t[e];
        if (3 === o.nodeType) return (o.data = '' + n), t.splice(e, 1)[0];
    }
    return j(n);
}
function B(t) {
    return F(t, ' ');
}
function H(t, n) {
    (n = '' + n), t.wholeText !== n && (t.data = n);
}
function G(t, n) {
    t.value = null == n ? '' : n;
}
function I(t, n, e, o) {
    t.style.setProperty(n, e, o ? 'important' : '');
}
function J(t, n) {
    for (let e = 0; e < t.options.length; e += 1) {
        const o = t.options[e];
        if (o.__value === n) return void (o.selected = !0);
    }
}
function K(t) {
    const n = t.querySelector(':checked') || t.options[0];
    return n && n.__value;
}
function Q(t, n, e) {
    t.classList[e ? 'add' : 'remove'](n);
}
function U(t, n) {
    const e = document.createEvent('CustomEvent');
    return e.initCustomEvent(t, !1, !1, n), e;
}
function V(t, n = document.body) {
    return Array.from(n.querySelectorAll(t));
}
class W {
    constructor(t = null) {
        (this.a = t), (this.e = this.n = null);
    }
    m(t, n, e = null) {
        this.e || ((this.e = A(n.nodeName)), (this.t = n), this.h(t)), this.i(e);
    }
    h(t) {
        (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
    }
    i(t) {
        for (let n = 0; n < this.n.length; n += 1) k(this.t, this.n[n], t);
    }
    p(t) {
        this.d(), this.h(t), this.i(this.a);
    }
    d() {
        this.n.forEach(x);
    }
}
const X = new Set();
let Y,
    Z = 0;
function tt(t, n, e, o, s, r, c, i = 0) {
    const u = 16.666 / o;
    let a = '{\n';
    for (let m = 0; m <= 1; m += u) {
        const t = n + (e - n) * r(m);
        a += 100 * m + `%{${c(t, 1 - t)}}\n`;
    }
    const l = a + `100% {${c(e, 1 - e)}}\n}`,
        f = `__svelte_${(function (t) {
            let n = 5381,
                e = t.length;
            for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
            return n >>> 0;
        })(l)}_${i}`,
        d = t.ownerDocument;
    X.add(d);
    const h = d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(A('style')).sheet),
        p = d.__svelte_rules || (d.__svelte_rules = {});
    p[f] || ((p[f] = !0), h.insertRule(`@keyframes ${f} ${l}`, h.cssRules.length));
    const $ = t.style.animation || '';
    return (t.style.animation = `${$ ? `${$}, ` : ''}${f} ${o}ms linear ${s}ms 1 both`), (Z += 1), f;
}
function nt(t, n) {
    const e = (t.style.animation || '').split(', '),
        o = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
        s = e.length - o.length;
    s &&
        ((t.style.animation = o.join(', ')),
        (Z -= s),
        Z ||
            y(() => {
                Z ||
                    (X.forEach((t) => {
                        const n = t.__svelte_stylesheet;
                        let e = n.cssRules.length;
                        for (; e--; ) n.deleteRule(e);
                        t.__svelte_rules = {};
                    }),
                    X.clear());
            }));
}
function et(t) {
    Y = t;
}
function ot() {
    if (!Y) throw new Error('Function called outside component initialization');
    return Y;
}
function st(t) {
    ot().$$.on_mount.push(t);
}
function rt(t) {
    ot().$$.after_update.push(t);
}
function ct() {
    const t = ot();
    return (n, e) => {
        const o = t.$$.callbacks[n];
        if (o) {
            const s = U(n, e);
            o.slice().forEach((n) => {
                n.call(t, s);
            });
        }
    };
}
function it(t, n) {
    ot().$$.context.set(t, n);
}
function ut(t) {
    return ot().$$.context.get(t);
}
function at(t, n) {
    const e = t.$$.callbacks[n.type];
    e && e.slice().forEach((t) => t(n));
}
const lt = [],
    ft = [],
    dt = [],
    ht = [],
    pt = Promise.resolve();
let $t = !1;
function mt(t) {
    dt.push(t);
}
let gt = !1;
const yt = new Set();
function _t() {
    if (!gt) {
        gt = !0;
        do {
            for (let t = 0; t < lt.length; t += 1) {
                const n = lt[t];
                et(n), bt(n.$$);
            }
            for (et(null), lt.length = 0; ft.length; ) ft.pop()();
            for (let t = 0; t < dt.length; t += 1) {
                const n = dt[t];
                yt.has(n) || (yt.add(n), n());
            }
            dt.length = 0;
        } while (lt.length);
        for (; ht.length; ) ht.pop()();
        ($t = !1), (gt = !1), yt.clear();
    }
}
function bt(t) {
    if (null !== t.fragment) {
        t.update(), r(t.before_update);
        const n = t.dirty;
        (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(mt);
    }
}
let vt;
function wt() {
    return (
        vt ||
            ((vt = Promise.resolve()),
            vt.then(() => {
                vt = null;
            })),
        vt
    );
}
function kt(t, n, e) {
    t.dispatchEvent(U(`${n ? 'intro' : 'outro'}${e}`));
}
const xt = new Set();
let Et;
function At() {
    Et = { r: 0, c: [], p: Et };
}
function St() {
    Et.r || r(Et.c), (Et = Et.p);
}
function jt(t, n) {
    t && t.i && (xt.delete(t), t.i(n));
}
function Mt(t, n, e, o) {
    if (t && t.o) {
        if (xt.has(t)) return;
        xt.add(t),
            Et.c.push(() => {
                xt.delete(t), o && (e && t.d(1), o());
            }),
            t.o(n);
    }
}
const Nt = { duration: 0 };
function Ot(e, o, s) {
    let r,
        i,
        u = o(e, s),
        a = !1,
        l = 0;
    function f() {
        r && nt(e, r);
    }
    function d() {
        const { delay: o = 0, duration: s = 300, easing: c = n, tick: d = t, css: h } = u || Nt;
        h && (r = tt(e, 0, 1, s, o, c, h, l++)), d(0, 1);
        const p = g() + o,
            $ = p + s;
        i && i.abort(),
            (a = !0),
            mt(() => kt(e, !0, 'start')),
            (i = v((t) => {
                if (a) {
                    if (t >= $) return d(1, 0), kt(e, !0, 'end'), f(), (a = !1);
                    if (t >= p) {
                        const n = c((t - p) / s);
                        d(n, 1 - n);
                    }
                }
                return a;
            }));
    }
    let h = !1;
    return {
        start() {
            h || (nt(e), c(u) ? ((u = u()), wt().then(d)) : d());
        },
        invalidate() {
            h = !1;
        },
        end() {
            a && (f(), (a = !1));
        }
    };
}
function Ct(e, o, s) {
    let i,
        u = o(e, s),
        a = !0;
    const l = Et;
    function f() {
        const { delay: o = 0, duration: s = 300, easing: c = n, tick: f = t, css: d } = u || Nt;
        d && (i = tt(e, 1, 0, s, o, c, d));
        const h = g() + o,
            p = h + s;
        mt(() => kt(e, !1, 'start')),
            v((t) => {
                if (a) {
                    if (t >= p) return f(0, 1), kt(e, !1, 'end'), --l.r || r(l.c), !1;
                    if (t >= h) {
                        const n = c((t - h) / s);
                        f(1 - n, n);
                    }
                }
                return a;
            });
    }
    return (
        (l.r += 1),
        c(u)
            ? wt().then(() => {
                  (u = u()), f();
              })
            : f(),
        {
            end(t) {
                t && u.tick && u.tick(1, 0), a && (i && nt(e, i), (a = !1));
            }
        }
    );
}
function Pt(e, o, s, i) {
    let u = o(e, s),
        a = i ? 0 : 1,
        l = null,
        f = null,
        d = null;
    function h() {
        d && nt(e, d);
    }
    function p(t, n) {
        const e = t.b - a;
        return (n *= Math.abs(e)), { a: a, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group };
    }
    function $(o) {
        const { delay: s = 0, duration: c = 300, easing: i = n, tick: $ = t, css: m } = u || Nt,
            y = { start: g() + s, b: o };
        o || ((y.group = Et), (Et.r += 1)),
            l || f
                ? (f = y)
                : (m && (h(), (d = tt(e, a, o, c, s, i, m))),
                  o && $(0, 1),
                  (l = p(y, c)),
                  mt(() => kt(e, o, 'start')),
                  v((t) => {
                      if ((f && t > f.start && ((l = p(f, c)), (f = null), kt(e, l.b, 'start'), m && (h(), (d = tt(e, a, l.b, l.duration, 0, i, u.css)))), l))
                          if (t >= l.end) $((a = l.b), 1 - a), kt(e, l.b, 'end'), f || (l.b ? h() : --l.group.r || r(l.group.c)), (l = null);
                          else if (t >= l.start) {
                              const n = t - l.start;
                              (a = l.a + l.d * i(n / l.duration)), $(a, 1 - a);
                          }
                      return !(!l && !f);
                  }));
    }
    return {
        run(t) {
            c(u)
                ? wt().then(() => {
                      (u = u()), $(t);
                  })
                : $(t);
        },
        end() {
            h(), (l = f = null);
        }
    };
}
function Tt(t, n) {
    Mt(t, 1, 1, () => {
        n.delete(t.key);
    });
}
function qt(t, n, e, o, s, r, c, i, u, a, l, f) {
    let d = t.length,
        h = r.length,
        p = d;
    const $ = {};
    for (; p--; ) $[t[p].key] = p;
    const m = [],
        g = new Map(),
        y = new Map();
    for (p = h; p--; ) {
        const t = f(s, r, p),
            i = e(t);
        let u = c.get(i);
        u ? o && u.p(t, n) : ((u = a(i, t)), u.c()), g.set(i, (m[p] = u)), i in $ && y.set(i, Math.abs(p - $[i]));
    }
    const _ = new Set(),
        b = new Set();
    function v(t) {
        jt(t, 1), t.m(i, l), c.set(t.key, t), (l = t.first), h--;
    }
    for (; d && h; ) {
        const n = m[h - 1],
            e = t[d - 1],
            o = n.key,
            s = e.key;
        n === e
            ? ((l = n.first), d--, h--)
            : g.has(s)
            ? !c.has(o) || _.has(o)
                ? v(n)
                : b.has(s)
                ? d--
                : y.get(o) > y.get(s)
                ? (b.add(o), v(n))
                : (_.add(s), d--)
            : (u(e, c), d--);
    }
    for (; d--; ) {
        const n = t[d];
        g.has(n.key) || u(n, c);
    }
    for (; h; ) v(m[h - 1]);
    return m;
}
function Dt(t, n) {
    const e = {},
        o = {},
        s = { $$scope: 1 };
    let r = t.length;
    for (; r--; ) {
        const c = t[r],
            i = n[r];
        if (i) {
            for (const t in c) t in i || (o[t] = 1);
            for (const t in i) s[t] || ((e[t] = i[t]), (s[t] = 1));
            t[r] = i;
        } else for (const t in c) s[t] = 1;
    }
    for (const c in o) c in e || (e[c] = void 0);
    return e;
}
function Lt(t) {
    return 'object' == typeof t && null !== t ? t : {};
}
function Rt(t) {
    t && t.c();
}
function zt(t, n) {
    t && t.l(n);
}
function Ft(t, n, e, s) {
    const { fragment: i, on_mount: u, on_destroy: a, after_update: l } = t.$$;
    i && i.m(n, e),
        s ||
            mt(() => {
                const n = u.map(o).filter(c);
                a ? a.push(...n) : r(n), (t.$$.on_mount = []);
            }),
        l.forEach(mt);
}
function Bt(t, n) {
    const e = t.$$;
    null !== e.fragment && (r(e.on_destroy), e.fragment && e.fragment.d(n), (e.on_destroy = e.fragment = null), (e.ctx = []));
}
function Ht(t, n) {
    -1 === t.$$.dirty[0] && (lt.push(t), $t || (($t = !0), pt.then(_t)), t.$$.dirty.fill(0)), (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Gt(n, e, o, c, i, u, a = [-1]) {
    const l = Y;
    et(n);
    const f = (n.$$ = {
        fragment: null,
        ctx: null,
        props: u,
        update: t,
        not_equal: i,
        bound: s(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(l ? l.$$.context : e.context || []),
        callbacks: s(),
        dirty: a,
        skip_bound: !1
    });
    let d = !1;
    if (
        ((f.ctx = o
            ? o(n, e.props || {}, (t, e, ...o) => {
                  const s = o.length ? o[0] : e;
                  return f.ctx && i(f.ctx[t], (f.ctx[t] = s)) && (!f.skip_bound && f.bound[t] && f.bound[t](s), d && Ht(n, t)), e;
              })
            : []),
        f.update(),
        (d = !0),
        r(f.before_update),
        (f.fragment = !!c && c(f.ctx)),
        e.target)
    ) {
        if (e.hydrate) {
            const t = R(e.target);
            f.fragment && f.fragment.l(t), t.forEach(x);
        } else f.fragment && f.fragment.c();
        e.intro && jt(n.$$.fragment), Ft(n, e.target, e.anchor, e.customElement), _t();
    }
    et(l);
}
class It {
    $destroy() {
        Bt(this, 1), (this.$destroy = t);
    }
    $on(t, n) {
        const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
            e.push(n),
            () => {
                const t = e.indexOf(n);
                -1 !== t && e.splice(t, 1);
            }
        );
    }
    $set(t) {
        var n;
        this.$$set && ((n = t), 0 !== Object.keys(n).length) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
}
export {
    L as $,
    e as A,
    At as B,
    t as C,
    u as D,
    a as E,
    f as F,
    w as G,
    O as H,
    Q as I,
    at as J,
    E as K,
    $ as L,
    S as M,
    p as N,
    C as O,
    r as P,
    mt as Q,
    Pt as R,
    It as S,
    c as T,
    ut as U,
    n as V,
    V as W,
    ft as X,
    W as Y,
    G as Z,
    D as _,
    R as a,
    K as a0,
    J as a1,
    P as a2,
    ct as a3,
    I as a4,
    Ot as a5,
    Ct as a6,
    qt as a7,
    Tt as a8,
    h as a9,
    d as aa,
    q as ab,
    T as b,
    z as c,
    x as d,
    A as e,
    k as f,
    F as g,
    H as h,
    Gt as i,
    Rt as j,
    M as k,
    N as l,
    zt as m,
    B as n,
    Ft as o,
    Dt as p,
    Lt as q,
    Mt as r,
    i as s,
    j as t,
    St as u,
    jt as v,
    Bt as w,
    it as x,
    rt as y,
    st as z
};
