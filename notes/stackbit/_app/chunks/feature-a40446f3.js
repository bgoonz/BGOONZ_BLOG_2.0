import {
    S as t,
    i as e,
    s as r,
    e as a,
    t as n,
    c as s,
    a as l,
    g as i,
    d as c,
    b as o,
    f as u,
    G as h,
    h as f,
    k as p,
    n as d,
    I as m,
    C as g,
    z as $,
    X as x,
    j as v,
    m as w,
    o as b,
    v as k,
    r as E,
    w as y,
    N as I,
    l as T,
    B as F,
    u as D
} from './index-0a115175.js';
import { S as V } from './section-16fe1b30.js';
function z(t) {
    let e, r;
    return {
        c() {
            (e = a('figcaption')), (r = n(t[3])), this.h();
        },
        l(a) {
            e = s(a, 'FIGCAPTION', { class: !0 });
            var n = l(e);
            (r = i(n, t[3])), n.forEach(c), this.h();
        },
        h() {
            o(e, 'class', 'svelte-zxn9ex');
        },
        m(t, a) {
            u(t, e, a), h(e, r);
        },
        p(t, e) {
            8 & e && f(r, t[3]);
        },
        d(t) {
            t && c(e);
        }
    };
}
function A(t) {
    let e,
        r,
        n,
        i,
        f,
        $,
        x = t[3] && z(t);
    return {
        c() {
            (e = a('div')), (r = a('figure')), (n = a('div')), (i = p()), (f = a('canvas')), ($ = p()), x && x.c(), this.h();
        },
        l(t) {
            e = s(t, 'DIV', { class: !0 });
            var a = l(e);
            r = s(a, 'FIGURE', { class: !0 });
            var o = l(r);
            (n = s(o, 'DIV', { class: !0 })),
                l(n).forEach(c),
                (i = d(o)),
                (f = s(o, 'CANVAS', {})),
                l(f).forEach(c),
                ($ = d(o)),
                x && x.l(o),
                o.forEach(c),
                a.forEach(c),
                this.h();
        },
        h() {
            o(n, 'class', 'titlebar svelte-zxn9ex'),
                o(r, 'class', 'wrapper svelte-zxn9ex'),
                m(r, 'dark', t[0]),
                m(r, 'shadowGrey', 'grey' === t[1]),
                m(r, 'shadowBrand', 'brand' === t[1]),
                o(e, 'class', 'aspect svelte-zxn9ex'),
                m(e, 'narrow', t[2]);
        },
        m(a, s) {
            u(a, e, s), h(e, r), h(r, n), h(r, i), h(r, f), t[8](f), h(r, $), x && x.m(r, null), t[9](r);
        },
        p(t, [a]) {
            t[3] ? (x ? x.p(t, a) : ((x = z(t)), x.c(), x.m(r, null))) : x && (x.d(1), (x = null)),
                1 & a && m(r, 'dark', t[0]),
                2 & a && m(r, 'shadowGrey', 'grey' === t[1]),
                2 & a && m(r, 'shadowBrand', 'brand' === t[1]),
                4 & a && m(e, 'narrow', t[2]);
        },
        i: g,
        o: g,
        d(r) {
            r && c(e), t[8](null), x && x.d(), t[9](null);
        }
    };
}
function C(t, e, r) {
    let a,
        n,
        s,
        { source: l = '' } = e,
        { dark: i = !1 } = e,
        { shadow: c = 'grey' } = e,
        { narrow: o = !1 } = e,
        { skipToEnd: u = !1 } = e,
        { alt: h = '' } = e;
    return (
        $(() => {
            let t,
                e,
                i,
                c,
                h,
                f,
                p,
                d,
                m = s.getContext('2d');
            function g() {
                (c = n.clientWidth), (h = n.clientHeight);
                let l = devicePixelRatio > 1 ? 2 : 1;
                r(5, (s.width = l * c), s),
                    r(5, (s.height = l * h), s),
                    r(5, (s.style.width = c + 'px'), s),
                    r(5, (s.style.height = h + 'px'), s),
                    m.scale(l, l),
                    c < 500
                        ? ((t = 12), (e = 19), (i = { top: 52 + e, right: 10, bottom: 15, left: 15 }))
                        : ((t = o ? 16 : 18), (e = o ? 28 : 33), (i = { top: 52 + e, right: o ? 20 : 40, bottom: o ? 20 : 48, left: o ? 20 : 40 })),
                    (m.font = `${t}px SF Mono, monospace`),
                    (m.fillStyle = a.black),
                    (f = m.measureText(' '.repeat(64)).width / 64),
                    (p = Math.floor((c - i.left - i.right) / f));
            }
            function $() {
                let t = (function (t) {
                    let e,
                        r = a.black,
                        n = [],
                        s = 0;
                    function l() {
                        (s = 0), (e = { input: [], output: [] }), n.push(e);
                    }
                    function i(t, n) {
                        n.replace(
                            /(\u001b\[30m)|(\u001b\[31m)|(\u001b\[32m)|(\u001b\[33m)|(\u001b\[34m)|(\u001b\[39m)|([^\u001b]+)/g,
                            (n, i, c, o, u, h, f, d) => {
                                if (
                                    (i && (r = a.black), c && (r = a.orange), o && (r = a.green), u && (r = a.orange), h && (r = a.blue), f && (r = a.black), d)
                                ) {
                                    let a,
                                        n = 0,
                                        i = Math.min(d.length, p - s);
                                    for (; (a = d.slice(n, i)); )
                                        e[t].push({ type: t, color: r, text: a }),
                                            (s += i - n),
                                            s >= p && i < d.length && l(),
                                            (n = i),
                                            (i = Math.min(d.length, i + p - s));
                                }
                            }
                        );
                    }
                    for (let a of t.split('\n'))
                        if ((l(), -1 !== a.indexOf('$') || -1 !== a.indexOf('>') || -1 !== a.indexOf('#'))) {
                            let [, t, e] = a.match(/([^$>#]+(?:[$>#]))(.*)/);
                            i('output', t), i('input', e);
                        } else i('output', a);
                    function c(t) {
                        return t.reduce((t, e) => t + e.text.length, 0);
                    }
                    for (let a of n) (a.input.characters = c(a.input)), (a.output.characters = c(a.output));
                    return n;
                })(l);
                d = u
                    ? { tick: -1, line: t.length - 1, character: t[t.length - 1].input.characters - 1, lines: t, triggers: { line: 0, character: -1 } }
                    : { tick: -1, line: -1, character: -1, lines: t, triggers: { line: 0, character: -1 } };
            }
            function x(t) {
                return d.tick === t;
            }
            function v(t, e) {
                return Math.floor(t + (e - t) * Math.random());
            }
            g(), $();
            let w =
                ((b = () => {
                    c !== n.clientWidth && (g(), $());
                }),
                (k = 1e3),
                (E = !1),
                function () {
                    if (!k) return b.apply(this, arguments);
                    var t = this,
                        e = arguments,
                        r = E && !y;
                    return (
                        clearTimeout(y),
                        (y = setTimeout(function () {
                            if (((y = null), !r)) return b.apply(t, e);
                        }, k)),
                        r ? b.apply(this, arguments) : void 0
                    );
                });
            var b, k, E, y;
            window.addEventListener('resize', w);
            let I = !0,
                T = !1;
            const F = new IntersectionObserver(([t]) => {
                T = t.isIntersecting;
            });
            return (
                F.observe(n),
                requestAnimationFrame(function t(r) {
                    I &&
                        (requestAnimationFrame(t),
                        T &&
                            ((d.tick += 1),
                            x(d.triggers.line) &&
                                d.line < d.lines.length - 1 &&
                                ((d.line += 1),
                                (d.character = 0),
                                d.character < d.lines[d.line].input.characters - 1
                                    ? (d.triggers.character = d.tick + v(2, 3))
                                    : (d.triggers.line = d.tick + v(1, 2))),
                            x(d.triggers.character) &&
                                (d.character < d.lines[d.line].input.characters - 1
                                    ? ((d.character += 1), (d.triggers.character = d.tick + v(2, 3)))
                                    : d.line < d.lines.length - 1 &&
                                      (d.lines[d.line + 1].output.characters ? (d.triggers.line = d.tick + v(20, 30)) : (d.triggers.line = d.tick + v(2, 3)))),
                            (function (t) {
                                m.clearRect(0, 0, c, h);
                                let r = 0;
                                d.line * e + i.top >= h - i.bottom && (r = d.line * e - h + i.top + i.bottom);
                                for (let a = 0; a <= d.line; a++) {
                                    let n = 0;
                                    for (let t of d.lines[a].output)
                                        (m.fillStyle = t.color), m.fillText(t.text, i.left + n * f, i.top + e * a - r), (n += t.text.length);
                                    let s = n;
                                    for (let l of d.lines[a].input) {
                                        if (((m.fillStyle = l.color), a === d.line)) {
                                            let c = d.character - (n - s) + 1;
                                            m.fillText(l.text.slice(0, c), i.left + n * f, i.top + e * a - r),
                                                t % 1e3 < 500 && m.fillRect(i.left + (n + c) * f + 0.5, i.top + e * a - r - 0.575 * e, f, 0.7 * e);
                                        } else m.fillText(l.text, i.left + n * f, i.top + e * a - r);
                                        n += l.text.length;
                                    }
                                }
                            })(r)));
                }),
                () => {
                    (I = !1), window.removeEventListener('resize', w), F.disconnect();
                }
            );
        }),
        (t.$$set = (t) => {
            'source' in t && r(6, (l = t.source)),
                'dark' in t && r(0, (i = t.dark)),
                'shadow' in t && r(1, (c = t.shadow)),
                'narrow' in t && r(2, (o = t.narrow)),
                'skipToEnd' in t && r(7, (u = t.skipToEnd)),
                'alt' in t && r(3, (h = t.alt));
        }),
        (t.$$.update = () => {
            1 & t.$$.dirty &&
                (a = i
                    ? { black: '#F9F9F9', orange: '#fc8800', green: '#57c700', blue: '#FFE4BC' }
                    : { black: 'rgba(18, 16, 12, 0.7)', orange: '#fc8800', green: '#57c700', blue: '#0099EF' });
        }),
        [
            i,
            c,
            o,
            h,
            n,
            s,
            l,
            u,
            function (t) {
                x[t ? 'unshift' : 'push'](() => {
                    (s = t), r(5, s);
                });
            },
            function (t) {
                x[t ? 'unshift' : 'push'](() => {
                    (n = t), r(4, n);
                });
            }
        ]
    );
}
class M extends t {
    constructor(t) {
        super(), e(this, t, C, A, r, { source: 6, dark: 0, shadow: 1, narrow: 2, skipToEnd: 7, alt: 3 });
    }
}
function S(t) {
    let e,
        r,
        f,
        m,
        $ = t[1].text + '',
        x =
            t[0] &&
            (function (t) {
                let e, r;
                return {
                    c() {
                        (e = a('a')), (r = n('Documentation')), this.h();
                    },
                    l(t) {
                        e = s(t, 'A', { href: !0, class: !0 });
                        var a = l(e);
                        (r = i(a, 'Documentation')), a.forEach(c), this.h();
                    },
                    h() {
                        o(e, 'href', t[0]), o(e, 'class', 'btn-secondary');
                    },
                    m(t, a) {
                        u(t, e, a), h(e, r);
                    },
                    p: g,
                    d(t) {
                        t && c(e);
                    }
                };
            })(t);
    return {
        c() {
            (e = a('div')), (r = a('a')), (f = n($)), (m = p()), x && x.c(), this.h();
        },
        l(t) {
            e = s(t, 'DIV', { class: !0 });
            var a = l(e);
            r = s(a, 'A', { href: !0, class: !0 });
            var n = l(r);
            (f = i(n, $)), n.forEach(c), (m = d(a)), x && x.l(a), a.forEach(c), this.h();
        },
        h() {
            o(r, 'href', t[1].href), o(r, 'class', I(`btn-${t[1].type || 'primary'}`) + ' svelte-1i79qs2'), o(e, 'class', 'mt-xx-small md:mt-x-large');
        },
        m(t, a) {
            u(t, e, a), h(e, r), h(r, f), h(e, m), x && x.m(e, null);
        },
        p(t, e) {
            t[0] && x.p(t, e);
        },
        d(t) {
            t && c(e), x && x.d();
        }
    };
}
function G(t) {
    let e,
        r,
        f,
        m,
        $,
        x,
        I,
        V,
        z,
        A,
        C,
        G,
        B,
        N,
        O = (t[1] || t[0]) && S(t),
        j =
            t[4] &&
            (function (t) {
                let e, r;
                return (
                    (e = new M({ props: { source: t[4].source, skipToEnd: t[4].skipToEnd } })),
                    {
                        c() {
                            v(e.$$.fragment);
                        },
                        l(t) {
                            w(e.$$.fragment, t);
                        },
                        m(t, a) {
                            b(e, t, a), (r = !0);
                        },
                        p: g,
                        i(t) {
                            r || (k(e.$$.fragment, t), (r = !0));
                        },
                        o(t) {
                            E(e.$$.fragment, t), (r = !1);
                        },
                        d(t) {
                            y(e, t);
                        }
                    }
                );
            })(t),
        q =
            t[5] &&
            (function (t) {
                let e, r;
                return {
                    c() {
                        (e = a('img')), this.h();
                    },
                    l(t) {
                        (e = s(t, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
                    },
                    h() {
                        e.src !== (r = t[5].src) && o(e, 'src', r), o(e, 'alt', t[5].alt), o(e, 'class', 'block rounded-2xl shadow-medium');
                    },
                    m(t, r) {
                        u(t, e, r);
                    },
                    p: g,
                    d(t) {
                        t && c(e);
                    }
                };
            })(t),
        R =
            t[6] &&
            (function (t) {
                let e, r, a;
                var n = t[6];
                return (
                    n && (e = new n({})),
                    {
                        c() {
                            e && v(e.$$.fragment), (r = T());
                        },
                        l(t) {
                            e && w(e.$$.fragment, t), (r = T());
                        },
                        m(t, n) {
                            e && b(e, t, n), u(t, r, n), (a = !0);
                        },
                        p(t, a) {
                            if (n !== (n = t[6])) {
                                if (e) {
                                    F();
                                    const t = e;
                                    E(t.$$.fragment, 1, 0, () => {
                                        y(t, 1);
                                    }),
                                        D();
                                }
                                n ? ((e = new n({})), v(e.$$.fragment), k(e.$$.fragment, 1), b(e, r.parentNode, r)) : (e = null);
                            }
                        },
                        i(t) {
                            a || (e && k(e.$$.fragment, t), (a = !0));
                        },
                        o(t) {
                            e && E(e.$$.fragment, t), (a = !1);
                        },
                        d(t) {
                            t && c(r), e && y(e, t);
                        }
                    }
                );
            })(t);
    return {
        c() {
            (e = a('div')),
                (r = a('div')),
                (f = a('div')),
                (m = a('h2')),
                ($ = n(t[3])),
                (x = p()),
                (I = a('p')),
                (V = n(t[2])),
                (z = p()),
                O && O.c(),
                (A = p()),
                (C = a('div')),
                j && j.c(),
                (G = p()),
                q && q.c(),
                (B = p()),
                R && R.c(),
                this.h();
        },
        l(a) {
            e = s(a, 'DIV', { class: !0 });
            var n = l(e);
            r = s(n, 'DIV', { class: !0 });
            var o = l(r);
            f = s(o, 'DIV', { class: !0 });
            var u = l(f);
            m = s(u, 'H2', { class: !0 });
            var h = l(m);
            ($ = i(h, t[3])), h.forEach(c), (x = d(u)), (I = s(u, 'P', {}));
            var p = l(I);
            (V = i(p, t[2])), p.forEach(c), u.forEach(c), (z = d(o)), O && O.l(o), o.forEach(c), (A = d(n)), (C = s(n, 'DIV', { class: !0 }));
            var g = l(C);
            j && j.l(g), (G = d(g)), q && q.l(g), (B = d(g)), R && R.l(g), g.forEach(c), n.forEach(c), this.h();
        },
        h() {
            o(m, 'class', 'h3'),
                o(f, 'class', 'text-large'),
                o(r, 'class', 'my-xx-small md:my-0'),
                o(C, 'class', 'preview w-full col-start-1 row-start-1 md:col-start-auto md:row-start-auto svelte-1i79qs2'),
                o(e, 'class', 'feature grid justify-center items-center md:grid-cols-2 lg:gap-32 gap-small');
        },
        m(t, a) {
            u(t, e, a),
                h(e, r),
                h(r, f),
                h(f, m),
                h(m, $),
                h(f, x),
                h(f, I),
                h(I, V),
                h(r, z),
                O && O.m(r, null),
                h(e, A),
                h(e, C),
                j && j.m(C, null),
                h(C, G),
                q && q.m(C, null),
                h(C, B),
                R && R.m(C, null),
                (N = !0);
        },
        p(t, e) {
            (t[1] || t[0]) && O.p(t, e), t[4] && j.p(t, e), t[5] && q.p(t, e), t[6] && R.p(t, e);
        },
        i(t) {
            N || (k(j), k(R), (N = !0));
        },
        o(t) {
            E(j), E(R), (N = !1);
        },
        d(t) {
            t && c(e), O && O.d(), j && j.d(), q && q.d(), R && R.d();
        }
    };
}
function B(t) {
    let e, r;
    return (
        (e = new V({ props: { className: 'feature-container-section', $$slots: { default: [G] }, $$scope: { ctx: t } } })),
        {
            c() {
                v(e.$$.fragment);
            },
            l(t) {
                w(e.$$.fragment, t);
            },
            m(t, a) {
                b(e, t, a), (r = !0);
            },
            p(t, [r]) {
                const a = {};
                256 & r && (a.$$scope = { dirty: r, ctx: t }), e.$set(a);
            },
            i(t) {
                r || (k(e.$$.fragment, t), (r = !0));
            },
            o(t) {
                E(e.$$.fragment, t), (r = !1);
            },
            d(t) {
                y(e, t);
            }
        }
    );
}
function N(t, e, r) {
    let { feature: a } = e;
    const { documentationLink: n, moreButton: s, paragraph: l, title: i, terminal: c, image: o, previewComponent: u } = a;
    return (
        (t.$$set = (t) => {
            'feature' in t && r(7, (a = t.feature));
        }),
        [n, s, l, i, c, o, u, a]
    );
}
class O extends t {
    constructor(t) {
        super(), e(this, t, N, B, r, { feature: 7 });
    }
}
export { M as C, O as F };
