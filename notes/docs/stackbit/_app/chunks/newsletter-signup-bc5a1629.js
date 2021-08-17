import {
    S as s,
    i as a,
    s as e,
    e as l,
    t,
    k as r,
    c as n,
    a as o,
    g as c,
    d as i,
    n as u,
    b as m,
    f as h,
    G as d,
    H as p,
    O as f,
    a2 as x,
    C as w,
    P as y,
    J as b,
    Z as v,
    h as g
} from './index-0a115175.js';
function E(s) {
    let a, e, f, x, w, y, b, g, E, S;
    return {
        c() {
            (a = l('p')),
                (e = t('Sign up now for our newsletter.')),
                (f = r()),
                (x = l('div')),
                (w = l('input')),
                (y = r()),
                (b = l('button')),
                (g = t('Sign up')),
                this.h();
        },
        l(s) {
            a = n(s, 'P', { class: !0 });
            var l = o(a);
            (e = c(l, 'Sign up now for our newsletter.')), l.forEach(i), (f = u(s)), (x = n(s, 'DIV', { class: !0 }));
            var t = o(x);
            (w = n(t, 'INPUT', { type: !0, required: !0, autocomplete: !0, placeholder: !0, class: !0 })),
                (y = u(t)),
                (b = n(t, 'BUTTON', { class: !0, type: !0, disabled: !0 }));
            var r = o(b);
            (g = c(r, 'Sign up')), r.forEach(i), t.forEach(i), this.h();
        },
        h() {
            m(a, 'class', 'text-medium'),
                m(w, 'type', 'email'),
                (w.required = !0),
                m(w, 'autocomplete', 'email'),
                m(w, 'placeholder', 'Enter your email'),
                m(w, 'class', 'mr-macro sm:mr-xx-small svelte-t932bl'),
                m(b, 'class', 'btn-primary svelte-t932bl'),
                m(b, 'type', 'submit'),
                (b.disabled = s[3]),
                m(x, 'class', 'flex mt-x-small');
        },
        m(l, t) {
            h(l, a, t), d(a, e), h(l, f, t), h(l, x, t), d(x, w), v(w, s[1]), d(x, y), d(x, b), d(b, g), E || ((S = p(w, 'input', s[6])), (E = !0));
        },
        p(s, a) {
            2 & a && w.value !== s[1] && v(w, s[1]), 8 & a && (b.disabled = s[3]);
        },
        d(s) {
            s && i(a), s && i(f), s && i(x), (E = !1), S();
        }
    };
}
function S(s) {
    let a, e;
    return {
        c() {
            (a = l('p')), (e = t(s[2])), this.h();
        },
        l(l) {
            a = n(l, 'P', { class: !0 });
            var t = o(a);
            (e = c(t, s[2])), t.forEach(i), this.h();
        },
        h() {
            m(a, 'class', 'my-medium');
        },
        m(s, l) {
            h(s, a, l), d(a, e);
        },
        p(s, a) {
            4 & a && g(e, s[2]);
        },
        d(s) {
            s && i(a);
        }
    };
}
function k(s) {
    let a, e, b, v, g, k, O;
    function P(s, a) {
        return s[2] ? S : E;
    }
    let T = P(s),
        N = T(s);
    return {
        c() {
            (a = l('form')), (e = l('h2')), (b = t('Stay updated')), (v = r()), N.c(), this.h();
        },
        l(s) {
            a = n(s, 'FORM', { class: !0, id: !0 });
            var l = o(a);
            e = n(l, 'H2', { class: !0 });
            var t = o(e);
            (b = c(t, 'Stay updated')), t.forEach(i), (v = u(l)), N.l(l), l.forEach(i), this.h();
        },
        h() {
            m(e, 'class', 'h3'),
                m(a, 'class', (g = 'bg-white shadow-normal rounded-2xl max-w-lg py-small px-xx-small sm:px-small ' + s[0] + ' relative')),
                m(a, 'id', 'newsletter');
        },
        m(l, t) {
            h(l, a, t), d(a, e), d(e, b), d(a, v), N.m(a, null), k || ((O = [p(a, 'submit', f(s[4])), p(a, 'click', x(s[5]))]), (k = !0));
        },
        p(s, [e]) {
            T === (T = P(s)) && N ? N.p(s, e) : (N.d(1), (N = T(s)), N && (N.c(), N.m(a, null))),
                1 & e && g !== (g = 'bg-white shadow-normal rounded-2xl max-w-lg py-small px-xx-small sm:px-small ' + s[0] + ' relative') && m(a, 'class', g);
        },
        i: w,
        o: w,
        d(s) {
            s && i(a), N.d(), (k = !1), y(O);
        }
    };
}
function O(s, a, e) {
    let l,
        { class: t = '' } = a,
        r = '',
        n = !1;
    return (
        (s.$$set = (s) => {
            'class' in s && e(0, (t = s.class));
        }),
        [
            t,
            l,
            r,
            n,
            async () => {
                e(3, (n = !0));
                try {
                    (await fetch('/.netlify/functions/newsletter', { method: 'post', body: l })).ok
                        ? e(2, (r = 'Thanks you are now signed up for our newsletter.'))
                        : e(2, (r = 'Oh no, something went wrong :(.'));
                } catch (s) {
                    console.error(s);
                }
            },
            function (a) {
                b(s, a);
            },
            function () {
                (l = this.value), e(1, l);
            }
        ]
    );
}
class P extends s {
    constructor(s) {
        super(), a(this, s, O, k, e, { class: 0 });
    }
}
export { P as N };
