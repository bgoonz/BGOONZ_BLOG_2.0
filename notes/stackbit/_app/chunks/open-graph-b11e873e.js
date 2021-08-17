import { S as t, i as e, s as n, e as o, c as a, b as d, f as c, d as m, W as i, G as r, C as s, D as p } from './index-0a115175.js';
import { p as h } from './stores-6ede6f6c.js';
function u(t) {
    let e, n, p, h, u, l, g, w, y, E, T, A;
    document.title = e = t[2];
    let M =
        t[5] &&
        (function (t) {
            let e;
            return {
                c() {
                    (e = o('meta')), this.h();
                },
                l(t) {
                    (e = a(t, 'META', { name: !0, content: !0 })), this.h();
                },
                h() {
                    d(e, 'name', 'robots'), d(e, 'content', 'noindex');
                },
                m(t, n) {
                    c(t, e, n);
                },
                d(t) {
                    t && m(e);
                }
            };
        })();
    return {
        c() {
            (n = o('meta')),
                (p = o('meta')),
                M && M.c(),
                (h = o('meta')),
                (u = o('meta')),
                (l = o('meta')),
                (g = o('meta')),
                (w = o('meta')),
                (y = o('meta')),
                (E = o('meta')),
                (T = o('meta')),
                (A = o('meta')),
                this.h();
        },
        l(t) {
            const e = i('[data-svelte="svelte-15a2dzw"]', document.head);
            (n = a(e, 'META', { name: !0, content: !0 })),
                (p = a(e, 'META', { name: !0, content: !0 })),
                M && M.l(e),
                (h = a(e, 'META', { property: !0, content: !0 })),
                (u = a(e, 'META', { property: !0, content: !0 })),
                (l = a(e, 'META', { property: !0, content: !0 })),
                (g = a(e, 'META', { property: !0, content: !0 })),
                (w = a(e, 'META', { property: !0, content: !0 })),
                (y = a(e, 'META', { name: !0, content: !0 })),
                (E = a(e, 'META', { name: !0, content: !0 })),
                (T = a(e, 'META', { name: !0, content: !0 })),
                (A = a(e, 'META', { name: !0, content: !0 })),
                e.forEach(m),
                this.h();
        },
        h() {
            d(n, 'name', 'keywords'),
                d(
                    n,
                    'content',
                    'dev environment, development environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review'
                ),
                d(p, 'name', 'description'),
                d(p, 'content', t[0]),
                d(h, 'property', 'og:image'),
                d(h, 'content', 'https://www.gitpod.io/' + t[1]),
                d(u, 'property', 'og:description'),
                d(u, 'content', t[0]),
                d(l, 'property', 'og:title'),
                d(l, 'content', t[2]),
                d(g, 'property', 'og:type'),
                d(g, 'content', t[3]),
                d(w, 'property', 'og:url'),
                d(w, 'content', t[6]),
                d(y, 'name', 'twitter:card'),
                d(y, 'content', 'summary'),
                d(E, 'name', 'twitter:site'),
                d(E, 'content', '@gitpod'),
                d(T, 'name', 'twitter:creator'),
                d(T, 'content', '@gitpod'),
                d(A, 'name', 'twitter:image'),
                d(A, 'content', 'https://www.gitpod.io/' + t[4]);
        },
        m(t, e) {
            r(document.head, n),
                r(document.head, p),
                M && M.m(document.head, null),
                r(document.head, h),
                r(document.head, u),
                r(document.head, l),
                r(document.head, g),
                r(document.head, w),
                r(document.head, y),
                r(document.head, E),
                r(document.head, T),
                r(document.head, A);
        },
        p(t, [n]) {
            4 & n && e !== (e = t[2]) && (document.title = e);
        },
        i: s,
        o: s,
        d(t) {
            m(n), m(p), M && M.d(t), m(h), m(u), m(l), m(g), m(w), m(y), m(E), m(T), m(A);
        }
    };
}
function l(t, e, n) {
    let o;
    p(t, h, (t) => n(8, (o = t)));
    let { data: a } = e;
    const {
            description: d,
            image: c = 'images/media-image.jpg',
            title: m,
            type: i = 'website',
            imageTwitter: r = 'images/twitter-preview.jpg',
            norobots: s = !1
        } = a || {},
        u = `https://${o.host}${o.path}`;
    return (
        (t.$$set = (t) => {
            'data' in t && n(7, (a = t.data));
        }),
        [d, c, m, i, r, s, u, a]
    );
}
class g extends t {
    constructor(t) {
        super(), e(this, t, l, u, n, { data: 7 });
    }
}
export { g as O };
