import {
    S as t,
    i as e,
    s as a,
    e as s,
    t as l,
    k as c,
    c as r,
    a as o,
    g as n,
    d as i,
    n as h,
    b as f,
    N as u,
    f as d,
    G as p,
    C as m,
    D as b,
    I as v,
    H as y,
    O as g,
    Z as w,
    K as x,
    h as E
} from './index-0a115175.js';
import { p as k } from './stores-6ede6f6c.js';
function I(t, e, a) {
    const s = t.slice();
    return (s[10] = e[a]), (s[12] = a), s;
}
function T(t) {
    let e,
        a,
        l,
        n,
        u,
        m = new Array(4),
        b = [];
    for (let s = 0; s < m.length; s += 1) b[s] = D(I(t, m, s));
    let v = t[1] && F(t);
    return {
        c() {
            (e = s('form')), (a = s('div'));
            for (let t = 0; t < b.length; t += 1) b[t].c();
            (l = c()), v && v.c(), this.h();
        },
        l(t) {
            e = r(t, 'FORM', {});
            var s = o(e);
            a = r(s, 'DIV', { class: !0 });
            var c = o(a);
            for (let e = 0; e < b.length; e += 1) b[e].l(c);
            c.forEach(i), (l = h(s)), v && v.l(s), s.forEach(i), this.h();
        },
        h() {
            f(a, 'class', 'flex justify-center space-x-6');
        },
        m(s, c) {
            d(s, e, c), p(e, a);
            for (let t = 0; t < b.length; t += 1) b[t].m(a, null);
            p(e, l), v && v.m(e, null), n || ((u = y(e, 'submit', g(t[5]))), (n = !0));
        },
        p(t, s) {
            if (2 & s) {
                let e;
                for (m = new Array(4), e = 0; e < m.length; e += 1) {
                    const l = I(t, m, e);
                    b[e] ? b[e].p(l, s) : ((b[e] = D(l)), b[e].c(), b[e].m(a, null));
                }
                for (; e < b.length; e += 1) b[e].d(1);
                b.length = m.length;
            }
            t[1] ? (v ? v.p(t, s) : ((v = F(t)), v.c(), v.m(e, null))) : v && (v.d(1), (v = null));
        },
        d(t) {
            t && i(e), x(b, t), v && v.d(), (n = !1), u();
        }
    };
}
function A(t) {
    let e, a;
    return {
        c() {
            (e = s('p')), (a = l(t[3])), this.h();
        },
        l(s) {
            e = r(s, 'P', { class: !0 });
            var l = o(e);
            (a = n(l, t[3])), l.forEach(i), this.h();
        },
        h() {
            f(e, 'class', 'text-center');
        },
        m(t, s) {
            d(t, e, s), p(e, a);
        },
        p(t, e) {
            8 & e && E(a, t[3]);
        },
        d(t) {
            t && i(e);
        }
    };
}
function D(t) {
    let e, a, l, n, u, m;
    function b() {
        return t[7](t[12]);
    }
    return {
        c() {
            (e = s('button')), (a = s('img')), (n = c()), this.h();
        },
        l(t) {
            e = r(t, 'BUTTON', { class: !0 });
            var s = o(e);
            (a = r(s, 'IMG', { src: !0, alt: !0, title: !0, class: !0 })), (n = h(s)), s.forEach(i), this.h();
        },
        h() {
            a.src !== (l = '/images/docs/feedback-widget/' + (t[12] + 1) + '.svg') && f(a, 'src', l),
                f(a, 'alt', 'Feedback ' + (t[12] + 1) + ' of 4'),
                f(a, 'title', 'Feedback ' + (t[12] + 1) + ' of 4'),
                f(a, 'class', 'h-6 w-6'),
                f(e, 'class', 'filter grayscale transform transition duration-150 hover:grayscale-0 hover:scale-150 svelte-xb3wsu'),
                v(e, 'selected', t[1] === t[12] + 1);
        },
        m(t, s) {
            d(t, e, s), p(e, a), p(e, n), u || ((m = y(e, 'click', g(b))), (u = !0));
        },
        p(a, s) {
            (t = a), 2 & s && v(e, 'selected', t[1] === t[12] + 1);
        },
        d(t) {
            t && i(e), (u = !1), m();
        }
    };
}
function F(t) {
    let e, a, u, m, b, v, g, x, E, k, I, T, A, D;
    return {
        c() {
            (e = s('div')),
                (a = s('label')),
                (u = l('Feedback')),
                (m = c()),
                (b = s('div')),
                (v = s('textarea')),
                (g = c()),
                (x = s('div')),
                (E = s('span')),
                (k = s('button')),
                (I = s('span')),
                (T = l('Send')),
                this.h();
        },
        l(t) {
            e = r(t, 'DIV', { class: !0 });
            var s = o(e);
            a = r(s, 'LABEL', { for: !0 });
            var l = o(a);
            (u = n(l, 'Feedback')), l.forEach(i), (m = h(s)), (b = r(s, 'DIV', {}));
            var c = o(b);
            (v = r(c, 'TEXTAREA', {
                id: !0,
                width: !0,
                placeholder: !0,
                'aria-label': !0,
                autocapitalize: !0,
                autocomplete: !0,
                autocorrect: !0,
                type: !0,
                class: !0
            })),
                o(v).forEach(i),
                c.forEach(i),
                (g = h(s)),
                (x = r(s, 'DIV', {}));
            var f = o(x);
            E = r(f, 'SPAN', {});
            var d = o(E);
            k = r(d, 'BUTTON', { role: !0, type: !0, disabled: !0, class: !0 });
            var p = o(k);
            I = r(p, 'SPAN', {});
            var y = o(I);
            (T = n(y, 'Send')), y.forEach(i), p.forEach(i), d.forEach(i), f.forEach(i), s.forEach(i), this.h();
        },
        h() {
            f(a, 'for', 'note'),
                f(v, 'id', 'note'),
                f(v, 'width', '100%'),
                f(v, 'placeholder', 'Your feedback...'),
                f(v, 'aria-label', 'Feedback input'),
                f(v, 'autocapitalize', 'off'),
                f(v, 'autocomplete', 'off'),
                f(v, 'autocorrect', 'off'),
                f(v, 'type', 'text'),
                f(v, 'class', 'mb-0'),
                f(k, 'role', 'button'),
                f(k, 'type', 'submit'),
                (k.disabled = t[4]),
                f(k, 'class', 'btn-primary mt-micro'),
                f(e, 'class', 'mt-x-small');
        },
        m(s, l) {
            d(s, e, l),
                p(e, a),
                p(a, u),
                p(e, m),
                p(e, b),
                p(b, v),
                w(v, t[2]),
                p(e, g),
                p(e, x),
                p(x, E),
                p(E, k),
                p(k, I),
                p(I, T),
                A || ((D = y(v, 'input', t[8])), (A = !0));
        },
        p(t, e) {
            4 & e && w(v, t[2]), 16 & e && (k.disabled = t[4]);
        },
        d(t) {
            t && i(e), (A = !1), D();
        }
    };
}
function N(t) {
    let e, a, b, v, y, g;
    function w(t, e) {
        return t[3] ? A : T;
    }
    let x = w(t),
        E = x(t);
    return {
        c() {
            (e = s('div')), (a = s('div')), (b = s('h5')), (v = l('Was this helpful?')), (y = c()), E.c(), this.h();
        },
        l(t) {
            e = r(t, 'DIV', { class: !0 });
            var s = o(e);
            a = r(s, 'DIV', { class: !0 });
            var l = o(a);
            b = r(l, 'H5', { class: !0 });
            var c = o(b);
            (v = n(c, 'Was this helpful?')), c.forEach(i), (y = h(l)), E.l(l), l.forEach(i), s.forEach(i), this.h();
        },
        h() {
            f(b, 'class', 'mb-6 text-center justify-center w-full'),
                f(a, 'class', 'bg-white shadow-normal rounded-2xl max-w-md py-small px-xx-small m-auto'),
                f(e, 'class', (g = u(t[0]) + ' svelte-xb3wsu'));
        },
        m(t, s) {
            d(t, e, s), p(e, a), p(a, b), p(b, v), p(a, y), E.m(a, null);
        },
        p(t, [s]) {
            x === (x = w(t)) && E ? E.p(t, s) : (E.d(1), (E = x(t)), E && (E.c(), E.m(a, null))),
                1 & s && g !== (g = u(t[0]) + ' svelte-xb3wsu') && f(e, 'class', g);
        },
        i: m,
        o: m,
        d(t) {
            t && i(e), E.d();
        }
    };
}
function O(t, e, a) {
    let s, l;
    b(t, k, (t) => a(9, (s = t)));
    let c,
        r = '',
        o = !1,
        { class: n = '' } = e,
        { type: i } = e;
    return (
        (t.$$set = (t) => {
            'class' in t && a(0, (n = t.class)), 'type' in t && a(6, (i = t.type));
        }),
        [
            n,
            l,
            r,
            c,
            o,
            async () => {
                a(4, (o = !0)), window.analytics.track('feedback_submitted', { score: l, feedback: r });
                201 ===
                (
                    await fetch('/.netlify/functions/feedback', {
                        method: 'post',
                        body: JSON.stringify({ type: i, emotion: l, note: r, url: `https://${s.host + s.path}` })
                    })
                ).status
                    ? a(3, (c = 'Thanks for your feedback, we appreciate it.'))
                    : a(3, (c = 'Oh no, something went wrong :(.')),
                    setTimeout(() => {
                        a(1, (l = void 0)), a(2, (r = '')), a(3, (c = ''));
                    }, 5e3);
            },
            i,
            (t) => a(1, (l = t + 1)),
            function () {
                (r = this.value), a(2, r);
            }
        ]
    );
}
class S extends t {
    constructor(t) {
        super(), e(this, t, O, N, a, { class: 0, type: 6 });
    }
}
export { S as F };
