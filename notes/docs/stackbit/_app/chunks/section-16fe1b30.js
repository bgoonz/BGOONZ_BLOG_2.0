import { S as s, i as a, s as e, E as l, e as c, c as t, a as i, d as n, b as d, N as o, f as r, F as u, v as $, r as m } from './index-0a115175.js';
function p(s) {
    let a, e, p;
    const h = s[3].default,
        f = l(h, s, s[2], null);
    return {
        c() {
            (a = c('section')), f && f.c(), this.h();
        },
        l(s) {
            a = t(s, 'SECTION', { id: !0, class: !0 });
            var e = i(a);
            f && f.l(e), e.forEach(n), this.h();
        },
        h() {
            d(a, 'id', s[0]), d(a, 'class', (e = o(s[1]) + ' svelte-15d98kd'));
        },
        m(s, e) {
            r(s, a, e), f && f.m(a, null), (p = !0);
        },
        p(s, [l]) {
            f && f.p && 4 & l && u(f, h, s, s[2], l, null, null),
                (!p || 1 & l) && d(a, 'id', s[0]),
                (!p || (2 & l && e !== (e = o(s[1]) + ' svelte-15d98kd'))) && d(a, 'class', e);
        },
        i(s) {
            p || ($(f, s), (p = !0));
        },
        o(s) {
            m(f, s), (p = !1);
        },
        d(s) {
            s && n(a), f && f.d(s);
        }
    };
}
function h(s, a, e) {
    let { $$slots: l = {}, $$scope: c } = a,
        { id: t = '' } = a,
        { className: i = '' } = a;
    return (
        (s.$$set = (s) => {
            'id' in s && e(0, (t = s.id)), 'className' in s && e(1, (i = s.className)), '$$scope' in s && e(2, (c = s.$$scope));
        }),
        [t, i, c, l]
    );
}
class f extends s {
    constructor(s) {
        super(), a(this, s, h, p, e, { id: 0, className: 1 });
    }
}
export { f as S };
