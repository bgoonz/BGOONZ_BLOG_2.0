import {
    S as t,
    i as e,
    s as a,
    e as s,
    j as n,
    c as o,
    a as r,
    m as l,
    d as i,
    b as c,
    f as h,
    o as g,
    v as p,
    r as d,
    w as f,
    z as u,
    N as m,
    t as v,
    g as w,
    I as b,
    G as $,
    h as k,
    K as y,
    k as x,
    n as E,
    H as j,
    C as I,
    P as G,
    X as _,
    E as D,
    F as C,
    B as H,
    u as L,
    Y as V,
    l as N,
    M as A
} from '../chunks/index-0a115175.js';
import { t as M, F as P } from '../chunks/features-bac9de74.js';
import { S } from '../chunks/section-16fe1b30.js';
import { _ as B } from '../chunks/preload-helper-9f12a5fd.js';
import { O as R } from '../chunks/open-graph-b11e873e.js';
import '../chunks/feature-a40446f3.js';
import '../chunks/stores-6ede6f6c.js';
const z = [
        { alt: 'GitLab', href: 'https://about.gitlab.com/', logo: 'svg/brands/gitlab-logo.svg', className: 'grey-logo' },
        { alt: 'freeCodeCamp', href: 'https://www.freecodecamp.org/', logo: 'svg/brands/freecodecamp.svg', className: 'fcc' },
        { alt: 'D-Wave', href: 'https://www.dwavesys.com/', logo: 'svg/brands/dwave.svg', transform: 'scale(1.3)', className: 'dwave-logo' },
        { alt: 'Google', href: 'https://about.google/', logo: 'svg/brands/google.svg', transform: 'scale(0.9)', className: 'grey-logo' },
        { alt: 'Amazon', href: 'https://www.aboutamazon.com', logo: 'svg/brands/amazon.svg', transform: 'scale(0.9) translateY(5px)', className: 'grey-logo' },
        { alt: 'Facebook', href: 'https://about.fb.com/', logo: 'svg/brands/facebook.svg', className: 'grey-logo' },
        { alt: 'Uber', href: 'https://www.uber.com', logo: 'svg/brands/uber.svg', className: 'grey-logo' },
        { alt: 'OpenAI', href: 'https://openai.com/', logo: 'svg/brands/openai.svg', transform: 'scale(1.1)', className: 'grey-logo' },
        { alt: 'Sauce Labs', href: 'https://saucelabs.com/', logo: 'svg/brands/sauce-labs.svg', className: 'grey-logo' },
        { alt: 'Intel', href: 'https://www.intel.com', logo: 'svg/brands/intel.svg', transform: 'scale(0.8)', className: 'grey-logo' },
        { alt: 'Eclipse Theia', href: 'https://theia-ide.org', logo: 'svg/brands/theia.svg', transform: 'scale(1.1)', className: 'grey-logo' },
        { alt: 'Code Institute', href: 'https://codeinstitute.net/', logo: 'svg/brands/code-institute.svg', className: 'grey-logo' },
        { alt: '4Geeks Academy', href: 'https://www.4geeksacademy.co/', logo: 'svg/brands/4-geeks-academy.png', className: 'four-geeks grey-logo' }
    ],
    O = [
        {
            logo: 'svg/projects/ts.svg',
            title: 'Node or TypeScript',
            githubUrl: 'https://github.com/gitpod-io/example-typescript-node',
            alt: 'Node or TypeScript',
            trackingName: 'node-typescript'
        },
        {
            logo: 'svg/projects/python.svg',
            title: 'Python',
            githubUrl: 'https://github.com/gitpod-io/example-python-django',
            alt: 'Python',
            trackingName: 'python'
        },
        {
            logo: 'svg/projects/go.svg',
            title: 'Go',
            githubUrl: 'https://github.com/gitpod-io/example-golang-cli',
            alt: 'Go Programming Language',
            trackingName: 'go'
        },
        { logo: 'svg/projects/rust.svg', title: 'Rust', githubUrl: 'https://github.com/gitpod-io/example-rust-cli', alt: 'Rust', trackingName: 'rust' },
        {
            logo: 'svg/projects/java.svg',
            title: 'Java',
            githubUrl: 'https://github.com/gitpod-io/spring-petclinic',
            gitlabUrl: 'https://gitlab.com/gitpod/spring-petclinic',
            bitbucketUrl: 'https://bitbucket.org/gitpod/spring-petclinic',
            alt: 'Java',
            trackingName: 'java'
        },
        { logo: 'svg/projects/svelte.svg', title: 'Svelte', githubUrl: 'https://github.com/gitpod-io/sveltejs-template', alt: 'Svelte', trackingName: 'svelte' }
    ],
    T = [
        {
            name: 'Ben Halpern',
            avatar: 'ben-halpern.jpg',
            org: '<span>\n          @forem\n        </span>\n        and\n        <span>\n          @ThePracticalDev\n        </span>',
            role: 'Creator and Co-founder',
            text: "\n      <p>GitPod is incredibly cool.</p>\n      <p>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>\n    ",
            twitterHandle: 'bendhalpern',
            tweetId: '1115274432958930946'
        },
        {
            name: 'Michael Friedrich',
            avatar: 'michael-friedrich.jpg',
            org: '<span>\n        @GitLab\n      </span>',
            role: 'Developer Evangelist',
            text: "\n        <p>\n          Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.\n        </p>\n        <p>\n          Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)\n        </p>\n      ",
            twitterHandle: 'dnsmichi',
            tweetId: '1311560585717460992'
        },
        {
            name: 'Julius Volz',
            avatar: 'julius-volz.jpg',
            org: '<span>\n        @PrometheusIO\n      </span>',
            role: 'Creator',
            text: '\n      <p>\n        Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!\n      </p>\n      ',
            twitterHandle: 'juliusvolz',
            tweetId: '1298972181708275717'
        },
        {
            name: 'David Ressler',
            avatar: 'david-ressler.jpg',
            org: '\n      <span>\n        @instagram\n      </span>\n    ',
            role: 'Engineering Manager',
            text: '\n        <p>\n          I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week\n          just from stumbling across Github repos that interest me and appending\n          “http://gitpod.io/#” to the URL. A+ tool all around.\n        </p>\n      ',
            twitterHandle: 'DavidRessler',
            tweetId: '1191710936605831169'
        },
        {
            name: 'Bartłomiej Płotka',
            avatar: 'bwplotka.jpg',
            org: '\n      <span>\n        @RedHat\n      </span>\n    ',
            role: 'Principal Software Engineer',
            text: '\n        <div>\n          <p>\n            This @gitpod thing is magic! Pretty cool, without any extra configuration. Good work!\n          </p>\n\n          <p>https://gitpod.io/#https://github.com/thanos-io/thanos</p>\n        </div>\n      ',
            twitterHandle: 'bwplotka',
            tweetId: '1387735880853606402'
        },
        {
            name: 'Mrugesh Mohapatra',
            avatar: 'mrugesh-mohapatra.jpg',
            org: '\n      <span>\n        @freeCodeCamp\n      </span>\n    ',
            role: 'Technology & Community',
            text: "\n      <p>\n          Ya'all @gitpod is freaking amazing! We integrated it into our workflow for working on @freeCodeCamp's codebase and I am honestly loving it. 🔥🔥!\n          <br />\n          Go check it out on our repo https://github.com/freeCodeCamp/f... now!\n        </p>\n    ",
            twitterHandle: 'raisedadead',
            tweetId: '1167463499779338243'
        },
        {
            name: 'Sven Peters',
            avatar: 'sven-peters.jpg',
            org: '\n      <span>\n        @MongoDB\n      </span>\n    ',
            role: 'Dev Advocate',
            text: '\n      <p>\n          Huge time saver, less frustrations for devs: Automated ready-to-code\n          dev environments with pre-build workspaces. #gitpod #cloudide\n        </p>\n    ',
            twitterHandle: 'svenpet',
            tweetId: '1159698330764611584'
        },
        {
            name: 'Jonathan Lister Parsons',
            avatar: 'jonathan-lister-parsons.jpg',
            org: '\n      <span>\n        @PensionBee\n      </span>\n    ',
            role: 'CTO',
            text: "\n        <p>\n          I'm really enjoying @gitpod - for me, it's made full-stack development in the browser (yes,including mobile) a reality\n        </p>\n      ",
            twitterHandle: 'jayfresh',
            tweetId: '1217728632887611397'
        },
        {
            name: 'Alejandro',
            avatar: 'alejandro-sanchez.jpeg',
            org: '\n      <span>\n        @4GeeksAcademy\n      </span>\n    ',
            role: 'Co-Founder',
            text: '\n        <p>\n          My setup is on @gitpod, just like Christopher McCandless, where I go my code goes with me,\n          no setup whatsoever Smiling face with sunglasses 😎 #IntoTheWild\n        </p>\n      ',
            twitterHandle: 'alesanchezr',
            tweetId: '1247219573767667715'
        },
        {
            name: 'ROKU',
            avatar: 'roman-kuba.jpg',
            org: '\n      <span>\n        @GitLab\n      </span>\n    ',
            role: 'Engineering Manager',
            text: '\n        <p>\n          Have to say that @gitpod is just super nice to use. Very impressed by the performance!\n        </p>\n    ',
            twitterHandle: 'Codebryo',
            tweetId: '1331252316255768578'
        },
        {
            name: 'Hugh Durkin',
            avatar: 'hugh-durkin.jpg',
            org: '\n      <span>\n        @HubSpot\n      </span>\n    ',
            role: 'Platform Ecosystem',
            text: '\n        <p>\n          I\'ve been playing around with the "next generation" of Cloud IDEs\n          lately, and @gitpodio is quickly emerging as one of the best 👨‍💻 <br /> Awesome @github integration, slick Chrome extension, and super fast 🚀\n          https://gitpod.io/index.html\n        </p>\n      ',
            twitterHandle: 'hughdurkin',
            tweetId: '1102215129696010240'
        },
        {
            name: 'Marcel van Remmerden',
            avatar: 'marcel-van-remmerden.jpg',
            org: '\n      <span>\n        @GitLab\n      </span>\n    ',
            role: 'Product Design Manager',
            text: '<p>\n          Can only agree, opening a GitLab repository in gitpod is a magical\n          experience, thanks for the integration @gitpod!\n        </p>',
            twitterHandle: 'MvRemmerden',
            tweetId: '1215707492740739072'
        },
        {
            name: 'Brendan O’Leary',
            avatar: 'brendan-o-leary.jpg',
            org: '\n      <span>\n        @GitLab\n      </span>\n    ',
            role: 'Dev. Evangelist',
            text: "\n        <p>\n          I just discovered the @gitlab @gitpod integration is alive on http://GitLab.com (released in 13.4 behind a feature flag). And it's AMAZING https://docs.gitlab.com/ee/integration....\n          .\n        </p>\n        <p>Now I can code from *anywhere*</p>\n      ",
            twitterHandle: 'olearycrew',
            tweetId: '1310376245629198341'
        },
        {
            name: 'Joonas Lehtinen',
            avatar: 'joonas-lehtinen.png',
            org: '\n      <span>\n        @vaadin\n      </span>\n    ',
            role: 'Co-founder',
            text: '\n        <p>\n          Wow - @gitpod is a brilliant way of evaluating a framework without installing anything.\n        </p>\n        <p>\n          Launch gitpod for @vaadin at https://vaadin.com/start/v14 ("Online workspace" tab). You\'ll have app running and will be editing code in 3min from clicking "Launch" button.\n        </p>\n    ',
            twitterHandle: 'joonaslehtinen',
            tweetId: '1238597160121200640'
        },
        {
            name: 'Yo',
            avatar: 'yogi.jpg',
            org: '\n      <span>\n        @Taskord\n      </span>\n    ',
            role: 'Creator',
            text: '\n        <p>\n          Now contributing to @gitlab is a cakewalk with @gitpod 🎉!\n        </p>\n        <p>Already started my game! #100DaysOfCode</p>\n      ',
            twitterHandle: 'big1nt',
            tweetId: '1317483426421776385'
        },
        {
            name: 'Senior Enterprise Geek',
            avatar: 'k33g.jpg',
            org: '\n      <span>\n        @GitLab\n      </span>\n    ',
            role: 'Senior Technical Account Manager',
            text: '\n        <p>\n          Today is a great day, we added the @gitpod support to the @golo_lang repository. So now you can start hacking @golo_lang in almost only one click. Enjoy 🎉\n        </p>\n        <p>gitpod.io/#https://githu...</p>\n      ',
            twitterHandle: 'k33g_org',
            tweetId: '1329461150422065152'
        }
    ],
    U = [
        {
            title: 'Think CI/CD for dev environments',
            paragraph:
                'We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.',
            moreButton: { text: 'More on prebuilds', href: '/docs/prebuilds' },
            documentationLink: '/docs',
            terminal: { source: M }
        }
    ];
function F(t, e, a) {
    const s = t.slice();
    return (s[6] = e[a][0]), (s[7] = e[a][1]), s;
}
function q(t, e, a) {
    const s = t.slice();
    return (s[10] = e[a].isVisible), (s[11] = e[a].text), s;
}
function Y(t) {
    let e,
        a,
        n = t[11] + '';
    return {
        c() {
            (e = s('span')), (a = v(n)), this.h();
        },
        l(t) {
            e = o(t, 'SPAN', { class: !0 });
            var s = r(e);
            (a = w(s, n)), s.forEach(i), this.h();
        },
        h() {
            c(e, 'class', 'svelte-rpsjvw'), b(e, 'strikethrough', t[10]);
        },
        m(t, s) {
            h(t, e, s), $(e, a);
        },
        p(t, s) {
            1 & s && n !== (n = t[11] + '') && k(a, n), 1 & s && b(e, 'strikethrough', t[10]);
        },
        d(t) {
            t && i(e);
        }
    };
}
function J(t) {
    let e,
        a,
        n = t[7],
        l = [];
    for (let s = 0; s < n.length; s += 1) l[s] = Y(q(t, n, s));
    return {
        c() {
            e = s('del');
            for (let t = 0; t < l.length; t += 1) l[t].c();
            this.h();
        },
        l(t) {
            e = o(t, 'DEL', { class: !0 });
            var a = r(e);
            for (let e = 0; e < l.length; e += 1) l[e].l(a);
            a.forEach(i), this.h();
        },
        h() {
            c(e, 'class', (a = m(t[6]) + ' svelte-rpsjvw'));
        },
        m(t, a) {
            h(t, e, a);
            for (let s = 0; s < l.length; s += 1) l[s].m(e, null);
        },
        p(t, s) {
            if (1 & s) {
                let a;
                for (n = t[7], a = 0; a < n.length; a += 1) {
                    const o = q(t, n, a);
                    l[a] ? l[a].p(o, s) : ((l[a] = Y(o)), l[a].c(), l[a].m(e, null));
                }
                for (; a < l.length; a += 1) l[a].d(1);
                l.length = n.length;
            }
            1 & s && a !== (a = m(t[6]) + ' svelte-rpsjvw') && c(e, 'class', a);
        },
        d(t) {
            t && i(e), y(l, t);
        }
    };
}
function W(t) {
    let e,
        a,
        n,
        l,
        g,
        p,
        d,
        f = Object.entries(t[0]),
        u = [];
    for (let s = 0; s < f.length; s += 1) u[s] = J(F(t, f, s));
    return {
        c() {
            (e = s('h2')), (a = v('Select project,\n      ')), (n = s('br')), (l = x());
            for (let t = 0; t < u.length; t += 1) u[t].c();
            (g = x()), (p = s('br')), (d = v('\n      start coding.')), this.h();
        },
        l(t) {
            e = o(t, 'H2', { class: !0 });
            var s = r(e);
            (a = w(s, 'Select project,\n      ')), (n = o(s, 'BR', {})), (l = E(s));
            for (let e = 0; e < u.length; e += 1) u[e].l(s);
            (g = E(s)), (p = o(s, 'BR', {})), (d = w(s, '\n      start coding.')), s.forEach(i), this.h();
        },
        h() {
            c(e, 'class', 'h1 svelte-rpsjvw');
        },
        m(t, s) {
            h(t, e, s), $(e, a), $(e, n), $(e, l);
            for (let a = 0; a < u.length; a += 1) u[a].m(e, null);
            $(e, g), $(e, p), $(e, d);
        },
        p(t, a) {
            if (1 & a) {
                let s;
                for (f = Object.entries(t[0]), s = 0; s < f.length; s += 1) {
                    const n = F(t, f, s);
                    u[s] ? u[s].p(n, a) : ((u[s] = J(n)), u[s].c(), u[s].m(e, g));
                }
                for (; s < u.length; s += 1) u[s].d(1);
                u.length = f.length;
            }
        },
        d(t) {
            t && i(e), y(u, t);
        }
    };
}
function K(t) {
    let e, a, u;
    return (
        (a = new S({ props: { $$slots: { default: [W] }, $$scope: { ctx: t } } })),
        {
            c() {
                (e = s('div')), n(a.$$.fragment), this.h();
            },
            l(t) {
                e = o(t, 'DIV', { class: !0 });
                var s = r(e);
                l(a.$$.fragment, s), s.forEach(i), this.h();
            },
            h() {
                c(e, 'class', 'row svelte-rpsjvw');
            },
            m(t, s) {
                h(t, e, s), g(a, e, null), (u = !0);
            },
            p(t, [e]) {
                const s = {};
                16385 & e && (s.$$scope = { dirty: e, ctx: t }), a.$set(s);
            },
            i(t) {
                u || (p(a.$$.fragment, t), (u = !0));
            },
            o(t) {
                d(a.$$.fragment, t), (u = !1);
            },
            d(t) {
                t && i(e), f(a);
            }
        }
    );
}
function X(t, e, a) {
    let s = {
            desktop: [
                { isVisible: !1, text: 'check dependencies, checkout branch, view' },
                { isVisible: !1, text: 'readme.txt, install tools, run build, run test,' }
            ],
            mobile: [
                { isVisible: !1, text: 'check dependencies,' },
                { isVisible: !1, text: 'checkout branch, view' },
                { isVisible: !1, text: 'readme.txt, install tools,' },
                { isVisible: !1, text: 'run build, run test,' }
            ]
        },
        n = !1,
        o = !1,
        r = !1;
    const l = () => {
        n &&
            o &&
            !r &&
            (() => {
                let t = 0;
                Object.entries(s).forEach(([, e]) =>
                    e.forEach((e) => {
                        setTimeout(() => {
                            (e.isVisible = !0), a(0, s);
                        }, t),
                            (t += 400);
                    })
                ),
                    (r = !0);
            })();
    };
    return (
        u(() => {
            const t = new IntersectionObserver(
                    (t) => {
                        t.forEach((t) => {
                            n = !t.isIntersecting;
                        }),
                            l();
                    },
                    { threshold: [0.9] }
                ),
                e = new IntersectionObserver(
                    (t) => {
                        t.forEach((t) => {
                            o = t.isIntersecting;
                        }),
                            l();
                    },
                    { threshold: [0] }
                ),
                a = document.querySelector('#choose-project-observer-target-top'),
                s = document.querySelector('#choose-project-observer-target-bottom');
            return (
                t.observe(a),
                e.observe(s),
                () => {
                    t.disconnect(), e.disconnect();
                }
            );
        }),
        [s]
    );
}
class Z extends t {
    constructor(t) {
        super(), e(this, t, X, K, a, {});
    }
}
function Q(t) {
    let e, a, n, l, g, p, d, f, u, m, b, k, y, _, D, C, H, L, V, N, A, M, P, S, B, R, z, O, T, U, F, q, Y, J, W, K, X, Z, Q, tt, et, at, st;
    return {
        c() {
            (e = s('div')),
                (a = s('div')),
                (n = s('h1')),
                (l = v('Always')),
                (g = s('br')),
                (p = v(' Ready to Code.')),
                (d = x()),
                (f = s('p')),
                (u = v('Spin up fresh, automated dev environments')),
                (m = s('br')),
                (b = v('\n      for each task, in the cloud, in seconds.')),
                (k = x()),
                (y = s('div')),
                (_ = s('div')),
                (D = s('div')),
                (C = s('a')),
                (H = v('Try Now')),
                (L = x()),
                (V = s('p')),
                (N = v('Open a workspace.\n          ')),
                (A = s('br')),
                (M = v('\n          Start from any Git context.')),
                (P = x()),
                (S = s('div')),
                (B = s('div')),
                (R = s('img')),
                (O = x()),
                (T = s('img')),
                (F = x()),
                (q = s('img')),
                (J = x()),
                (W = s('div')),
                (K = s('a')),
                (X = v('Star')),
                (Z = x()),
                (Q = s('div')),
                (tt = s('img')),
                this.h();
        },
        l(t) {
            e = o(t, 'DIV', { class: !0 });
            var s = r(e);
            a = o(s, 'DIV', { class: !0 });
            var c = r(a);
            n = o(c, 'H1', { class: !0 });
            var h = r(n);
            (l = w(h, 'Always')), (g = o(h, 'BR', {})), (p = w(h, ' Ready to Code.')), h.forEach(i), (d = E(c)), (f = o(c, 'P', { id: !0, class: !0 }));
            var v = r(f);
            (u = w(v, 'Spin up fresh, automated dev environments')),
                (m = o(v, 'BR', {})),
                (b = w(v, '\n      for each task, in the cloud, in seconds.')),
                v.forEach(i),
                (k = E(c)),
                (y = o(c, 'DIV', { class: !0 }));
            var $ = r(y);
            _ = o($, 'DIV', { class: !0 });
            var x = r(_);
            D = o(x, 'DIV', { class: !0 });
            var j = r(D);
            C = o(j, 'A', { href: !0, class: !0 });
            var I = r(C);
            (H = w(I, 'Try Now')), I.forEach(i), j.forEach(i), (L = E(x)), (V = o(x, 'P', { class: !0 }));
            var G = r(V);
            (N = w(G, 'Open a workspace.\n          ')),
                (A = o(G, 'BR', { class: !0 })),
                (M = w(G, '\n          Start from any Git context.')),
                G.forEach(i),
                x.forEach(i),
                (P = E($)),
                (S = o($, 'DIV', { class: !0 }));
            var z = r(S);
            B = o(z, 'DIV', { class: !0 });
            var U = r(B);
            (R = o(U, 'IMG', { src: !0, alt: !0, width: !0, height: !0, class: !0 })),
                (O = E(U)),
                (T = o(U, 'IMG', { src: !0, alt: !0, width: !0, height: !0, class: !0 })),
                (F = E(U)),
                (q = o(U, 'IMG', { src: !0, alt: !0, width: !0, height: !0, class: !0 })),
                U.forEach(i),
                (J = E(z)),
                (W = o(z, 'DIV', { class: !0 }));
            var Y = r(W);
            K = o(Y, 'A', { class: !0, href: !0, 'data-icon': !0, 'data-size': !0, 'data-show-count': !0, 'aria-label': !0 });
            var et = r(K);
            (X = w(et, 'Star')), et.forEach(i), Y.forEach(i), z.forEach(i), $.forEach(i), c.forEach(i), (Z = E(s)), (Q = o(s, 'DIV', { class: !0 }));
            var at = r(Q);
            (tt = o(at, 'IMG', { src: !0, alt: !0, width: !0, height: !0 })), at.forEach(i), s.forEach(i), this.h();
        },
        h() {
            c(n, 'class', 'homeh1'),
                c(f, 'id', 'choose-project-observer-target'),
                c(f, 'class', 'hero__intro-text text-large svelte-191brlw'),
                c(C, 'href', '#get-started'),
                c(C, 'class', 'btn-conversion'),
                c(D, 'class', 'svelte-191brlw'),
                c(A, 'class', 'svelte-191brlw'),
                c(V, 'class', 'svelte-191brlw'),
                c(_, 'class', 'hero__try-now text-small svelte-191brlw'),
                R.src !== (z = '/svg/gitlab.svg') && c(R, 'src', '/svg/gitlab.svg'),
                c(R, 'alt', 'GitLab logo'),
                c(R, 'width', '30'),
                c(R, 'height', '30'),
                c(R, 'class', 'svelte-191brlw'),
                T.src !== (U = '/svg/github.svg') && c(T, 'src', '/svg/github.svg'),
                c(T, 'alt', 'GitHub logo'),
                c(T, 'width', '30'),
                c(T, 'height', '30'),
                c(T, 'class', 'svelte-191brlw'),
                q.src !== (Y = '/svg/bitbucket.svg') && c(q, 'src', '/svg/bitbucket.svg'),
                c(q, 'alt', 'Bitbucket logo'),
                c(q, 'width', '30'),
                c(q, 'height', '30'),
                c(q, 'class', 'svelte-191brlw'),
                c(B, 'class', 'hero__icons svelte-191brlw'),
                c(K, 'class', 'github-button'),
                c(K, 'href', 'https://github.com/gitpod-io/gitpod'),
                c(K, 'data-icon', 'octicon-star'),
                c(K, 'data-size', 'large'),
                c(K, 'data-show-count', 'true'),
                c(K, 'aria-label', 'Star the Gitpod Repo on GitHub'),
                c(W, 'class', 'hero__stars svelte-191brlw'),
                c(S, 'class', 'svelte-191brlw'),
                c(y, 'class', 'hero__action svelte-191brlw'),
                c(a, 'class', 'hero__text svelte-191brlw'),
                tt.src !== (et = '/images/illustration-large.jpg') && c(tt, 'src', '/images/illustration-large.jpg'),
                c(tt, 'alt', 'Gitpod in a Nutshell'),
                c(tt, 'width', '700'),
                c(tt, 'height', '724'),
                c(Q, 'class', 'hero__illustration svelte-191brlw'),
                c(e, 'class', 'hero svelte-191brlw');
        },
        m(s, o) {
            h(s, e, o),
                $(e, a),
                $(a, n),
                $(n, l),
                $(n, g),
                $(n, p),
                $(a, d),
                $(a, f),
                $(f, u),
                $(f, m),
                $(f, b),
                $(a, k),
                $(a, y),
                $(y, _),
                $(_, D),
                $(D, C),
                $(C, H),
                $(_, L),
                $(_, V),
                $(V, N),
                $(V, A),
                $(V, M),
                $(y, P),
                $(y, S),
                $(S, B),
                $(B, R),
                $(B, O),
                $(B, T),
                $(B, F),
                $(B, q),
                $(S, J),
                $(S, W),
                $(W, K),
                $(K, X),
                t[2](K),
                $(e, Z),
                $(e, Q),
                $(Q, tt),
                at || ((st = [j(C, 'click', t[1]), j(K, 'click', t[3])]), (at = !0));
        },
        p: I,
        i: I,
        o: I,
        d(a) {
            a && i(e), t[2](null), (at = !1), G(st);
        }
    };
}
function tt(t, e, a) {
    let s;
    u(async () => {
        (await B(() => import('../chunks/buttons.esm-5c49e7fd.js'), void 0)).render(s, (t) => {
            s.parentNode.replaceChild(t, s);
        });
    });
    return [
        s,
        () => window.analytics.track('product_cta_clicked', { context: 'hero', destination: '#get-started' }),
        function (t) {
            _[t ? 'unshift' : 'push'](() => {
                (s = t), a(0, s);
            });
        },
        () => window.analytics.track('social_opened', { platform: 'github', context: 'hero' })
    ];
}
class et extends t {
    constructor(t) {
        super(), e(this, t, tt, Q, a, {});
    }
}
function at(t, e, a) {
    const s = t.slice();
    return (s[2] = e[a].name), (s[3] = e[a].href), (s[4] = e[a].icon), (s[5] = e[a].text), s;
}
function st(t) {
    let e,
        a,
        n,
        l,
        g,
        p,
        d,
        f,
        u = t[5] + '';
    function m() {
        return t[1](t[2], t[3]);
    }
    return {
        c() {
            (e = s('a')), (a = s('img')), (l = x()), (g = v(u)), (p = x()), this.h();
        },
        l(t) {
            e = o(t, 'A', { href: !0, target: !0, rel: !0, class: !0 });
            var s = r(e);
            (a = o(s, 'IMG', { src: !0, alt: !0, width: !0, height: !0 })), (l = E(s)), (g = w(s, u)), (p = E(s)), s.forEach(i), this.h();
        },
        h() {
            a.src !== (n = `/${t[4]}`) && c(a, 'src', n),
                c(a, 'alt', t[5]),
                c(a, 'width', '24'),
                c(a, 'height', '24'),
                c(e, 'href', t[3]),
                c(e, 'target', '_blank'),
                c(e, 'rel', 'noopener'),
                c(e, 'class', 'btn-otherbrand text-medium svelte-1l5wi43');
        },
        m(t, s) {
            h(t, e, s), $(e, a), $(e, l), $(e, g), $(e, p), d || ((f = j(e, 'click', m)), (d = !0));
        },
        p(e, a) {
            t = e;
        },
        d(t) {
            t && i(e), (d = !1), f();
        }
    };
}
function nt(t) {
    let e,
        a,
        n,
        l,
        g,
        p,
        d,
        f,
        u,
        m,
        b,
        k,
        j = t[0],
        I = [];
    for (let s = 0; s < j.length; s += 1) I[s] = st(at(t, j, s));
    return {
        c() {
            (e = s('div')),
                (a = s('h2')),
                (n = v('Remote-first. Secure by design.')),
                (l = x()),
                (g = s('img')),
                (d = x()),
                (f = s('div')),
                (u = s('p')),
                (m = v(
                    'You no longer need an over-powered laptop to code, Gitpod works just as\n        smoothly on a Chromebook or iPad. All you need is a browser. Gitpod\n        centralizes all source code and never stores it on insecure machines and\n        networks.'
                )),
                (b = x()),
                (k = s('div'));
            for (let t = 0; t < I.length; t += 1) I[t].c();
            this.h();
        },
        l(t) {
            e = o(t, 'DIV', { class: !0 });
            var s = r(e);
            a = o(s, 'H2', { class: !0 });
            var c = r(a);
            (n = w(c, 'Remote-first. Secure by design.')),
                c.forEach(i),
                (l = E(s)),
                (g = o(s, 'IMG', { class: !0, src: !0, alt: !0, height: !0, width: !0 })),
                (d = E(s)),
                (f = o(s, 'DIV', { class: !0 }));
            var h = r(f);
            u = o(h, 'P', { class: !0 });
            var p = r(u);
            (m = w(
                p,
                'You no longer need an over-powered laptop to code, Gitpod works just as\n        smoothly on a Chromebook or iPad. All you need is a browser. Gitpod\n        centralizes all source code and never stores it on insecure machines and\n        networks.'
            )),
                p.forEach(i),
                (b = E(h)),
                (k = o(h, 'DIV', { class: !0 }));
            var v = r(k);
            for (let e = 0; e < I.length; e += 1) I[e].l(v);
            v.forEach(i), h.forEach(i), s.forEach(i), this.h();
        },
        h() {
            c(a, 'class', 'mb-small text-center text-h2'),
                c(g, 'class', 'screenshot shadow-brand svelte-1l5wi43'),
                g.src !== (p = '/images/gitpod-editor.jpg') && c(g, 'src', '/images/gitpod-editor.jpg'),
                c(g, 'alt', 'Gitpod'),
                c(g, 'height', '819'),
                c(g, 'width', '1269'),
                c(u, 'class', 'text-large svelte-1l5wi43'),
                c(k, 'class', 'buttons-wrapper'),
                c(f, 'class', 'content svelte-1l5wi43'),
                c(e, 'class', 'row');
        },
        m(t, s) {
            h(t, e, s), $(e, a), $(a, n), $(e, l), $(e, g), $(e, d), $(e, f), $(f, u), $(u, m), $(f, b), $(f, k);
            for (let e = 0; e < I.length; e += 1) I[e].m(k, null);
        },
        p(t, e) {
            if (1 & e) {
                let a;
                for (j = t[0], a = 0; a < j.length; a += 1) {
                    const s = at(t, j, a);
                    I[a] ? I[a].p(s, e) : ((I[a] = st(s)), I[a].c(), I[a].m(k, null));
                }
                for (; a < I.length; a += 1) I[a].d(1);
                I.length = j.length;
            }
        },
        d(t) {
            t && i(e), y(I, t);
        }
    };
}
function ot(t) {
    let e, a;
    return (
        (e = new S({ props: { $$slots: { default: [nt] }, $$scope: { ctx: t } } })),
        {
            c() {
                n(e.$$.fragment);
            },
            l(t) {
                l(e.$$.fragment, t);
            },
            m(t, s) {
                g(e, t, s), (a = !0);
            },
            p(t, [a]) {
                const s = {};
                256 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
            },
            i(t) {
                a || (p(e.$$.fragment, t), (a = !0));
            },
            o(t) {
                d(e.$$.fragment, t), (a = !1);
            },
            d(t) {
                f(e, t);
            }
        }
    );
}
function rt(t) {
    return [
        [
            {
                name: 'chrome-extension',
                icon: 'svg/browsers/chrome.svg',
                text: 'Chrome Extension',
                href: 'https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki'
            },
            { name: 'firefox-extension', icon: 'svg/browsers/firefox.svg', text: 'Firefox Extension', href: 'https://addons.mozilla.org/firefox/addon/gitpod/' }
        ],
        (t, e) => window.analytics.track('feature_clicked', { type: t, url: e })
    ];
}
class lt extends t {
    constructor(t) {
        super(), e(this, t, rt, ot, a, {});
    }
}
function it(t) {
    let e, a;
    const n = t[1].default,
        l = D(n, t, t[0], null);
    return {
        c() {
            (e = s('div')), l && l.c(), this.h();
        },
        l(t) {
            e = o(t, 'DIV', { class: !0, dir: !0 });
            var a = r(e);
            l && l.l(a), a.forEach(i), this.h();
        },
        h() {
            c(e, 'class', 'flex overflow-x-scroll space-x-6 svelte-13fysql'), c(e, 'dir', 'ltr');
        },
        m(t, s) {
            h(t, e, s), l && l.m(e, null), (a = !0);
        },
        p(t, [e]) {
            l && l.p && 1 & e && C(l, n, t, t[0], e, null, null);
        },
        i(t) {
            a || (p(l, t), (a = !0));
        },
        o(t) {
            d(l, t), (a = !1);
        },
        d(t) {
            t && i(e), l && l.d(t);
        }
    };
}
function ct(t, e, a) {
    let { $$slots: s = {}, $$scope: n } = e;
    return (
        (t.$$set = (t) => {
            '$$scope' in t && a(0, (n = t.$$scope));
        }),
        [n, s]
    );
}
class ht extends t {
    constructor(t) {
        super(), e(this, t, ct, it, a, {});
    }
}
function gt(t) {
    let e, a, n, l, g;
    return {
        c() {
            (e = s('a')), (a = s('img')), this.h();
        },
        l(t) {
            e = o(t, 'A', { href: !0, target: !0, rel: !0, class: !0 });
            var s = r(e);
            (a = o(s, 'IMG', { src: !0, alt: !0, style: !0, class: !0 })), s.forEach(i), this.h();
        },
        h() {
            a.src !== (n = `/${t[1]}`) && c(a, 'src', n),
                c(a, 'alt', t[2]),
                c(a, 'style', `transform: ${t[3]}`),
                c(a, 'class', m(t[4]) + ' svelte-ttwl4d'),
                c(e, 'href', t[0]),
                c(e, 'target', '_blank'),
                c(e, 'rel', 'noopener'),
                c(e, 'class', 'brand svelte-ttwl4d');
        },
        m(s, n) {
            h(s, e, n), $(e, a), l || ((g = j(e, 'click', t[6])), (l = !0));
        },
        p: I,
        i: I,
        o: I,
        d(t) {
            t && i(e), (l = !1), g();
        }
    };
}
function pt(t, e, a) {
    let { brand: s } = e;
    const { href: n, logo: o, alt: r, transform: l, className: i } = s;
    return (
        (t.$$set = (t) => {
            'brand' in t && a(5, (s = t.brand));
        }),
        [n, o, r, l, i, s, () => window.analytics.track('socialproof_clicked', { type: 'logo', url: n })]
    );
}
class dt extends t {
    constructor(t) {
        super(), e(this, t, pt, gt, a, { brand: 5 });
    }
}
function ft(t, e, a) {
    const s = t.slice();
    return (s[0] = e[a]), s;
}
function ut(t) {
    let e, a;
    return (
        (e = new dt({ props: { brand: t[0] } })),
        {
            c() {
                n(e.$$.fragment);
            },
            l(t) {
                l(e.$$.fragment, t);
            },
            m(t, s) {
                g(e, t, s), (a = !0);
            },
            p: I,
            i(t) {
                a || (p(e.$$.fragment, t), (a = !0));
            },
            o(t) {
                d(e.$$.fragment, t), (a = !1);
            },
            d(t) {
                f(e, t);
            }
        }
    );
}
function mt(t) {
    let e,
        a,
        n = z,
        l = [];
    for (let s = 0; s < n.length; s += 1) l[s] = ut(ft(t, n, s));
    const g = (t) =>
        d(l[t], 1, 1, () => {
            l[t] = null;
        });
    return {
        c() {
            e = s('div');
            for (let t = 0; t < l.length; t += 1) l[t].c();
            this.h();
        },
        l(t) {
            e = o(t, 'DIV', { class: !0 });
            var a = r(e);
            for (let e = 0; e < l.length; e += 1) l[e].l(a);
            a.forEach(i), this.h();
        },
        h() {
            c(e, 'class', 'brands svelte-1w1yam6');
        },
        m(t, s) {
            h(t, e, s);
            for (let a = 0; a < l.length; a += 1) l[a].m(e, null);
            a = !0;
        },
        p(t, [a]) {
            if (0 & a) {
                let s;
                for (n = z, s = 0; s < n.length; s += 1) {
                    const o = ft(t, n, s);
                    l[s] ? (l[s].p(o, a), p(l[s], 1)) : ((l[s] = ut(o)), l[s].c(), p(l[s], 1), l[s].m(e, null));
                }
                for (H(), s = n.length; s < l.length; s += 1) g(s);
                L();
            }
        },
        i(t) {
            if (!a) {
                for (let t = 0; t < n.length; t += 1) p(l[t]);
                a = !0;
            }
        },
        o(t) {
            l = l.filter(Boolean);
            for (let e = 0; e < l.length; e += 1) d(l[e]);
            a = !1;
        },
        d(t) {
            t && i(e), y(l, t);
        }
    };
}
class vt extends t {
    constructor(t) {
        super(), e(this, t, null, mt, a, {});
    }
}
function wt(t) {
    let e, a, n, l, g, p, d, f, u, m, b, k, y, G, _, D, C, H;
    return {
        c() {
            (e = s('a')),
                (a = s('div')),
                (n = s('div')),
                (l = x()),
                (g = s('div')),
                (p = s('img')),
                (f = x()),
                (u = s('div')),
                (m = s('p')),
                (b = v(t[1])),
                (k = x()),
                (y = s('p')),
                (G = v(t[3])),
                (_ = x()),
                this.h();
        },
        l(s) {
            e = o(s, 'A', { href: !0, target: !0, class: !0 });
            var c = r(e);
            a = o(c, 'DIV', { class: !0 });
            var h = r(a);
            (n = o(h, 'DIV', {})), r(n).forEach(i), (l = E(h)), (g = o(h, 'DIV', { class: !0 }));
            var d = r(g);
            (p = o(d, 'IMG', { src: !0, alt: !0, class: !0, width: !0, height: !0 })), (f = E(d)), (u = o(d, 'DIV', { class: !0 }));
            var v = r(u);
            m = o(v, 'P', { class: !0 });
            var $ = r(m);
            (b = w($, t[1])), $.forEach(i), (k = E(v)), (y = o(v, 'P', { class: !0 }));
            var x = r(y);
            (G = w(x, t[3])), (_ = E(x)), x.forEach(i), v.forEach(i), d.forEach(i), h.forEach(i), c.forEach(i), this.h();
        },
        h() {
            p.src !== (d = `/images/avatars/${t[2]}`) && c(p, 'src', d),
                c(p, 'alt', t[1]),
                c(p, 'class', 'w-12 h-12 rounded-full'),
                c(p, 'width', '48'),
                c(p, 'height', '48'),
                c(m, 'class', 'mb-0 font-semibold text-small leading-6'),
                (D = new V(null)),
                c(y, 'class', 'role svelte-18sw0qh'),
                c(u, 'class', 'ml-3'),
                c(g, 'class', 'mt-4 flex'),
                c(
                    a,
                    'class',
                    'testimonial w-96 p-6 overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out svelte-18sw0qh'
                ),
                c(e, 'href', `https://twitter.com/${t[6]}/status/${t[7]}`),
                c(e, 'target', '_blank'),
                c(e, 'class', 'my-2 text-small');
        },
        m(s, o) {
            h(s, e, o),
                $(e, a),
                $(a, n),
                (n.innerHTML = t[5]),
                $(a, l),
                $(a, g),
                $(g, p),
                $(g, f),
                $(g, u),
                $(u, m),
                $(m, b),
                $(u, k),
                $(u, y),
                $(y, G),
                $(y, _),
                D.m(t[4], y),
                C || ((H = j(e, 'click', t[9])), (C = !0));
        },
        p: I,
        i: I,
        o: I,
        d(t) {
            t && i(e), (C = !1), H();
        }
    };
}
function bt(t, e, a) {
    let { testimonial: s } = e;
    const { name: n, avatar: o, role: r, org: l, text: i, twitterHandle: c, tweetId: h } = s;
    let { position: g } = e;
    return (
        (t.$$set = (t) => {
            'testimonial' in t && a(8, (s = t.testimonial)), 'position' in t && a(0, (g = t.position));
        }),
        [
            g,
            n,
            o,
            r,
            l,
            i,
            c,
            h,
            s,
            () => window.analytics.track('socialproof_clicked', { type: 'tweet', url: `https://twitter.com/${c}/status/${h}`, position: g })
        ]
    );
}
class $t extends t {
    constructor(t) {
        super(), e(this, t, bt, wt, a, { testimonial: 8, position: 0 });
    }
}
function kt(t, e, a) {
    const s = t.slice();
    return (s[1] = e[a]), (s[3] = a), s;
}
function yt(t) {
    let e, a;
    return (
        (e = new $t({ props: { testimonial: t[1], position: t[3] } })),
        {
            c() {
                n(e.$$.fragment);
            },
            l(t) {
                l(e.$$.fragment, t);
            },
            m(t, s) {
                g(e, t, s), (a = !0);
            },
            p(t, a) {
                const s = {};
                1 & a && (s.testimonial = t[1]), e.$set(s);
            },
            i(t) {
                a || (p(e.$$.fragment, t), (a = !0));
            },
            o(t) {
                d(e.$$.fragment, t), (a = !1);
            },
            d(t) {
                f(e, t);
            }
        }
    );
}
function xt(t) {
    let e,
        a,
        s = t[0],
        n = [];
    for (let r = 0; r < s.length; r += 1) n[r] = yt(kt(t, s, r));
    const o = (t) =>
        d(n[t], 1, 1, () => {
            n[t] = null;
        });
    return {
        c() {
            for (let t = 0; t < n.length; t += 1) n[t].c();
            e = N();
        },
        l(t) {
            for (let e = 0; e < n.length; e += 1) n[e].l(t);
            e = N();
        },
        m(t, s) {
            for (let e = 0; e < n.length; e += 1) n[e].m(t, s);
            h(t, e, s), (a = !0);
        },
        p(t, a) {
            if (1 & a) {
                let r;
                for (s = t[0], r = 0; r < s.length; r += 1) {
                    const o = kt(t, s, r);
                    n[r] ? (n[r].p(o, a), p(n[r], 1)) : ((n[r] = yt(o)), n[r].c(), p(n[r], 1), n[r].m(e.parentNode, e));
                }
                for (H(), r = s.length; r < n.length; r += 1) o(r);
                L();
            }
        },
        i(t) {
            if (!a) {
                for (let t = 0; t < s.length; t += 1) p(n[t]);
                a = !0;
            }
        },
        o(t) {
            n = n.filter(Boolean);
            for (let e = 0; e < n.length; e += 1) d(n[e]);
            a = !1;
        },
        d(t) {
            y(n, t), t && i(e);
        }
    };
}
function Et(t) {
    let e, a, u, m, b, k, y, j;
    return (
        (b = new ht({ props: { $$slots: { default: [xt] }, $$scope: { ctx: t } } })),
        (y = new vt({})),
        {
            c() {
                (e = s('div')), (a = s('h2')), (u = v('Used by 400,000+ developers.')), (m = x()), n(b.$$.fragment), (k = x()), n(y.$$.fragment), this.h();
            },
            l(t) {
                e = o(t, 'DIV', { class: !0 });
                var s = r(e);
                a = o(s, 'H2', { class: !0 });
                var n = r(a);
                (u = w(n, 'Used by 400,000+ developers.')),
                    n.forEach(i),
                    (m = E(s)),
                    l(b.$$.fragment, s),
                    (k = E(s)),
                    l(y.$$.fragment, s),
                    s.forEach(i),
                    this.h();
            },
            h() {
                c(a, 'class', 'h1 svelte-1ezeqa1'), c(e, 'class', 'row');
            },
            m(t, s) {
                h(t, e, s), $(e, a), $(a, u), $(e, m), g(b, e, null), $(e, k), g(y, e, null), (j = !0);
            },
            p(t, e) {
                const a = {};
                17 & e && (a.$$scope = { dirty: e, ctx: t }), b.$set(a);
            },
            i(t) {
                j || (p(b.$$.fragment, t), p(y.$$.fragment, t), (j = !0));
            },
            o(t) {
                d(b.$$.fragment, t), d(y.$$.fragment, t), (j = !1);
            },
            d(t) {
                t && i(e), f(b), f(y);
            }
        }
    );
}
function jt(t) {
    let e, a;
    return (
        (e = new S({ props: { $$slots: { default: [Et] }, $$scope: { ctx: t } } })),
        {
            c() {
                n(e.$$.fragment);
            },
            l(t) {
                l(e.$$.fragment, t);
            },
            m(t, s) {
                g(e, t, s), (a = !0);
            },
            p(t, [a]) {
                const s = {};
                17 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
            },
            i(t) {
                a || (p(e.$$.fragment, t), (a = !0));
            },
            o(t) {
                d(e.$$.fragment, t), (a = !1);
            },
            d(t) {
                f(e, t);
            }
        }
    );
}
function It(t, e, a) {
    let { testimonials: s } = e;
    return (
        (t.$$set = (t) => {
            'testimonials' in t && a(0, (s = t.testimonials));
        }),
        [s]
    );
}
class Gt extends t {
    constructor(t) {
        super(), e(this, t, It, jt, a, { testimonials: 0 });
    }
}
function _t(t) {
    let e, a, n, l, g, p, d, f, u, m, b, k;
    return {
        c() {
            (e = s('a')),
                (a = s('div')),
                (n = s('img')),
                (g = x()),
                (p = s('p')),
                (d = v(t[2])),
                (f = x()),
                (u = s('span')),
                (m = v('Launch workspace')),
                this.h();
        },
        l(s) {
            e = o(s, 'A', { href: !0, target: !0, 'aria-label': !0, class: !0 });
            var l = r(e);
            a = o(l, 'DIV', { class: !0 });
            var c = r(a);
            (n = o(c, 'IMG', { src: !0, alt: !0, class: !0, width: !0, height: !0 })), (g = E(c)), (p = o(c, 'P', { class: !0 }));
            var h = r(p);
            (d = w(h, t[2])), h.forEach(i), c.forEach(i), (f = E(l)), (u = o(l, 'SPAN', { class: !0 }));
            var v = r(u);
            (m = w(v, 'Launch workspace')), v.forEach(i), l.forEach(i), this.h();
        },
        h() {
            n.src !== (l = `/${t[0]}`) && c(n, 'src', l),
                c(n, 'alt', t[1]),
                c(n, 'class', 'project__logo svelte-h7c295'),
                c(n, 'width', '27'),
                c(n, 'height', '27'),
                c(p, 'class', 'leading-5 text-h6 text-gray-800 font-semibold transition duration-200 group-focus:text-black group-hover:text-black'),
                c(a, 'class', 'project__left svelte-h7c295'),
                c(u, 'class', 'btn-tertiary svelte-h7c295'),
                c(e, 'href', `https://gitpod.io#${t[3]}`),
                c(e, 'target', '_blank'),
                c(e, 'aria-label', t[1]),
                c(e, 'class', 'project group svelte-h7c295');
        },
        m(s, o) {
            h(s, e, o), $(e, a), $(a, n), $(a, g), $(a, p), $(p, d), $(e, f), $(e, u), $(u, m), b || ((k = j(e, 'click', t[6])), (b = !0));
        },
        p: I,
        i: I,
        o: I,
        d(t) {
            t && i(e), (b = !1), k();
        }
    };
}
function Dt(t, e, a) {
    let { project: s } = e;
    const { logo: n, alt: o, title: r, githubUrl: l, trackingName: i } = s;
    return (
        (t.$$set = (t) => {
            'project' in t && a(5, (s = t.project));
        }),
        [n, o, r, l, i, s, () => window.analytics.track('example_workspace_clicked', { name: i, repo_url: l })]
    );
}
class Ct extends t {
    constructor(t) {
        super(), e(this, t, Dt, _t, a, { project: 5 });
    }
}
function Ht(t, e, a) {
    const s = t.slice();
    return (s[0] = e[a]), s;
}
function Lt(t) {
    let e, a;
    return (
        (e = new Ct({ props: { project: t[0] } })),
        {
            c() {
                n(e.$$.fragment);
            },
            l(t) {
                l(e.$$.fragment, t);
            },
            m(t, s) {
                g(e, t, s), (a = !0);
            },
            p: I,
            i(t) {
                a || (p(e.$$.fragment, t), (a = !0));
            },
            o(t) {
                d(e.$$.fragment, t), (a = !1);
            },
            d(t) {
                f(e, t);
            }
        }
    );
}
function Vt(t) {
    let e,
        a,
        n,
        l,
        g,
        f,
        u,
        m,
        b = O,
        k = [];
    for (let s = 0; s < b.length; s += 1) k[s] = Lt(Ht(t, b, s));
    const j = (t) =>
        d(k[t], 1, 1, () => {
            k[t] = null;
        });
    return {
        c() {
            (e = s('h3')),
                (a = v('Launch an example workspace')),
                (n = x()),
                (l = s('p')),
                (g = v('Dive into one of our example workspaces')),
                (f = x()),
                (u = s('div'));
            for (let t = 0; t < k.length; t += 1) k[t].c();
            this.h();
        },
        l(t) {
            e = o(t, 'H3', {});
            var s = r(e);
            (a = w(s, 'Launch an example workspace')), s.forEach(i), (n = E(t)), (l = o(t, 'P', { class: !0 }));
            var c = r(l);
            (g = w(c, 'Dive into one of our example workspaces')), c.forEach(i), (f = E(t)), (u = o(t, 'DIV', { class: !0 }));
            var h = r(u);
            for (let e = 0; e < k.length; e += 1) k[e].l(h);
            h.forEach(i), this.h();
        },
        h() {
            c(l, 'class', 'text-large'), c(u, 'class', 'projects svelte-1norl3b');
        },
        m(t, s) {
            h(t, e, s), $(e, a), h(t, n, s), h(t, l, s), $(l, g), h(t, f, s), h(t, u, s);
            for (let e = 0; e < k.length; e += 1) k[e].m(u, null);
            m = !0;
        },
        p(t, [e]) {
            if (0 & e) {
                let a;
                for (b = O, a = 0; a < b.length; a += 1) {
                    const s = Ht(t, b, a);
                    k[a] ? (k[a].p(s, e), p(k[a], 1)) : ((k[a] = Lt(s)), k[a].c(), p(k[a], 1), k[a].m(u, null));
                }
                for (H(), a = b.length; a < k.length; a += 1) j(a);
                L();
            }
        },
        i(t) {
            if (!m) {
                for (let t = 0; t < b.length; t += 1) p(k[t]);
                m = !0;
            }
        },
        o(t) {
            k = k.filter(Boolean);
            for (let e = 0; e < k.length; e += 1) d(k[e]);
            m = !1;
        },
        d(t) {
            t && i(e), t && i(n), t && i(l), t && i(f), t && i(u), y(k, t);
        }
    };
}
class Nt extends t {
    constructor(t) {
        super(), e(this, t, null, Vt, a, {});
    }
}
function At(t) {
    let e, a, n, l, g, p, d, f, u, m, b, k, y, _, D, C, H, L, V, N, M, P, S, B, R, z, O, T, U, F, q, Y, J, W, K, X, Z, Q, tt, et, at, st;
    return {
        c() {
            (e = s('h3')),
                (a = v('Connect Git repository')),
                (n = x()),
                (l = s('p')),
                (g = v('Select a Git provider to start with an existing project from any Git context.')),
                (p = x()),
                (d = s('div')),
                (f = s('a')),
                (u = A('svg')),
                (m = A('title')),
                (b = v('Bitbucket')),
                (k = A('path')),
                (y = A('path')),
                (_ = A('path')),
                (D = A('path')),
                (C = A('path')),
                (H = A('path')),
                (L = A('path')),
                (V = v('\n    Continue with GitLab')),
                (N = x()),
                (M = s('a')),
                (P = A('svg')),
                (S = A('title')),
                (B = v('GitHub Octocat')),
                (R = A('path')),
                (z = v('\n    Continue with GitHub')),
                (O = x()),
                (T = s('a')),
                (U = A('svg')),
                (F = A('title')),
                (q = v('Bitbucket')),
                (Y = A('path')),
                (J = v('\n    Continue with Bitbucket')),
                (W = x()),
                (K = s('p')),
                (X = v('Or prefix any GitLab, GitHub or Bitbucket URL with\n  ')),
                (Z = s('br')),
                (Q = x()),
                (tt = s('span')),
                (et = v('gitpod.io/#')),
                this.h();
        },
        l(t) {
            e = o(t, 'H3', {});
            var s = r(e);
            (a = w(s, 'Connect Git repository')), s.forEach(i), (n = E(t)), (l = o(t, 'P', { class: !0 }));
            var c = r(l);
            (g = w(c, 'Select a Git provider to start with an existing project from any Git context.')),
                c.forEach(i),
                (p = E(t)),
                (d = o(t, 'DIV', { class: !0 }));
            var h = r(d);
            f = o(h, 'A', { href: !0, class: !0 });
            var v = r(f);
            u = o(v, 'svg', { viewBox: !0, fill: !0, xmlns: !0, class: !0 }, 1);
            var $ = r(u);
            m = o($, 'title', {}, 1);
            var x = r(m);
            (b = w(x, 'Bitbucket')),
                x.forEach(i),
                (k = o($, 'path', { d: !0, fill: !0 }, 1)),
                r(k).forEach(i),
                (y = o($, 'path', { d: !0, fill: !0, 'fill-opacity': !0 }, 1)),
                r(y).forEach(i),
                (_ = o($, 'path', { d: !0, fill: !0 }, 1)),
                r(_).forEach(i),
                (D = o($, 'path', { d: !0, fill: !0, 'fill-opacity': !0 }, 1)),
                r(D).forEach(i),
                (C = o($, 'path', { d: !0, fill: !0 }, 1)),
                r(C).forEach(i),
                (H = o($, 'path', { d: !0, fill: !0, 'fill-opacity': !0 }, 1)),
                r(H).forEach(i),
                (L = o($, 'path', { d: !0, fill: !0, 'fill-opacity': !0 }, 1)),
                r(L).forEach(i),
                $.forEach(i),
                (V = w(v, '\n    Continue with GitLab')),
                v.forEach(i),
                (N = E(h)),
                (M = o(h, 'A', { href: !0, class: !0 }));
            var j = r(M);
            P = o(j, 'svg', { viewBox: !0, fill: !0, xmlns: !0, class: !0 }, 1);
            var I = r(P);
            S = o(I, 'title', {}, 1);
            var G = r(S);
            (B = w(G, 'GitHub Octocat')),
                G.forEach(i),
                (R = o(I, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 }, 1)),
                r(R).forEach(i),
                I.forEach(i),
                (z = w(j, '\n    Continue with GitHub')),
                j.forEach(i),
                (O = E(h)),
                (T = o(h, 'A', { href: !0, class: !0 }));
            var A = r(T);
            U = o(A, 'svg', { viewBox: !0, fill: !0, xmlns: !0, class: !0 }, 1);
            var at = r(U);
            F = o(at, 'title', {}, 1);
            var st = r(F);
            (q = w(st, 'Bitbucket')),
                st.forEach(i),
                (Y = o(at, 'path', { d: !0, fill: !0 }, 1)),
                r(Y).forEach(i),
                at.forEach(i),
                (J = w(A, '\n    Continue with Bitbucket')),
                A.forEach(i),
                h.forEach(i),
                (W = E(t)),
                (K = o(t, 'P', { class: !0 }));
            var nt = r(K);
            (X = w(nt, 'Or prefix any GitLab, GitHub or Bitbucket URL with\n  ')), (Z = o(nt, 'BR', {})), (Q = E(nt)), (tt = o(nt, 'SPAN', { class: !0 }));
            var ot = r(tt);
            (et = w(ot, 'gitpod.io/#')), ot.forEach(i), nt.forEach(i), this.h();
        },
        h() {
            c(l, 'class', 'text-large'),
                c(k, 'd', 'M14.583 27.214L9.21 10.954h10.738l-5.365 16.26z'),
                c(k, 'fill', '#fff'),
                c(y, 'd', 'M27.476 10.954l1.637 4.94c.148.449-.012.944-.403 1.223L14.584 27.214l12.892-16.26z'),
                c(y, 'fill', '#fff'),
                c(y, 'fill-opacity', '.65'),
                c(_, 'd', 'M27.476 10.954h-7.527l3.24-9.793c.165-.5.888-.5 1.06 0l3.227 9.793z'),
                c(_, 'fill', '#fff'),
                c(D, 'd', 'M1.685 10.954l-1.63 4.94c-.148.449.012.944.403 1.223l14.127 10.097-12.9-16.26z'),
                c(D, 'fill', '#fff'),
                c(D, 'fill-opacity', '.65'),
                c(C, 'd', 'M1.685 10.954H9.21L5.978 1.161c-.166-.5-.888-.5-1.06 0l-3.233 9.793z'),
                c(C, 'fill', '#fff'),
                c(H, 'd', 'M14.585 27.214l-5.373-16.26H1.685l12.9 16.26z'),
                c(H, 'fill', '#fff'),
                c(H, 'fill-opacity', '.85'),
                c(L, 'd', 'M14.584 27.214l12.892-16.26h-7.527l-5.365 16.26z'),
                c(L, 'fill', '#fff'),
                c(L, 'fill-opacity', '.85'),
                c(u, 'viewBox', '0 0 30 28'),
                c(u, 'fill', 'none'),
                c(u, 'xmlns', 'http://www.w3.org/2000/svg'),
                c(u, 'class', 'svelte-m1vok9'),
                c(f, 'href', 'https://gitpod.io/login'),
                c(f, 'class', 'btn btn--gitlab svelte-m1vok9'),
                c(R, 'fill-rule', 'evenodd'),
                c(R, 'clip-rule', 'evenodd'),
                c(
                    R,
                    'd',
                    'M14.57.5a14.374 14.374 0 00-9.442 3.54 14.947 14.947 0 00-4.94 8.946A15.133 15.133 0 002.106 23.07a14.615 14.615 0 007.862 6.406c.733.137.992-.329.992-.721v-2.528c-4.065.903-4.923-1.999-4.923-1.999a3.97 3.97 0 00-1.617-2.181c-1.314-.913.107-.913.107-.913.46.067.9.24 1.285.505.386.265.707.617.94 1.029.197.366.464.688.784.949a3.047 3.047 0 003.45.292c.057-.751.374-1.457.894-1.99-3.234-.374-6.63-1.652-6.63-7.3a5.82 5.82 0 011.493-3.989 5.529 5.529 0 01.143-3.933s1.224-.402 4.002 1.524a13.49 13.49 0 017.291 0c2.779-1.926 3.994-1.524 3.994-1.524.536 1.233.6 2.627.179 3.906a5.82 5.82 0 011.492 3.988c0 5.713-3.404 6.963-6.648 7.3.348.358.617.787.788 1.26.17.472.24.976.204 1.479v4.079c0 .484.26.858 1 .712a14.623 14.623 0 007.752-6.43 15.134 15.134 0 001.87-10.019 14.949 14.949 0 00-4.89-8.892A14.377 14.377 0 0014.57.5z'
                ),
                c(R, 'fill', '#F9F9F9'),
                c(P, 'viewBox', '0 0 29 30'),
                c(P, 'fill', 'none'),
                c(P, 'xmlns', 'http://www.w3.org/2000/svg'),
                c(P, 'class', 'svelte-m1vok9'),
                c(M, 'href', 'https://gitpod.io/login'),
                c(M, 'class', 'btn btn--github svelte-m1vok9'),
                c(
                    Y,
                    'd',
                    'M.848.25h-.01a.841.841 0 00-.827.971L3.565 22.8c.091.543.563.945 1.114.95h17.053a.84.84 0 00.837-.703l3.554-21.822a.841.841 0 00-.826-.971h-.011L.848.25zm14.968 15.595h-5.443L8.899 8.146h8.236l-1.32 7.7z'
                ),
                c(Y, 'fill', '#fff'),
                c(U, 'viewBox', '0 0 27 24'),
                c(U, 'fill', 'none'),
                c(U, 'xmlns', 'http://www.w3.org/2000/svg'),
                c(U, 'class', 'svelte-m1vok9'),
                c(T, 'href', 'https://gitpod.io/login'),
                c(T, 'class', 'btn btn--bitbucket svelte-m1vok9'),
                c(d, 'class', 'buttons svelte-m1vok9'),
                c(tt, 'class', 'prefix svelte-m1vok9'),
                c(K, 'class', 'text-large');
        },
        m(s, o) {
            h(s, e, o),
                $(e, a),
                h(s, n, o),
                h(s, l, o),
                $(l, g),
                h(s, p, o),
                h(s, d, o),
                $(d, f),
                $(f, u),
                $(u, m),
                $(m, b),
                $(u, k),
                $(u, y),
                $(u, _),
                $(u, D),
                $(u, C),
                $(u, H),
                $(u, L),
                $(f, V),
                $(d, N),
                $(d, M),
                $(M, P),
                $(P, S),
                $(S, B),
                $(P, R),
                $(M, z),
                $(d, O),
                $(d, T),
                $(T, U),
                $(U, F),
                $(F, q),
                $(U, Y),
                $(T, J),
                h(s, W, o),
                h(s, K, o),
                $(K, X),
                $(K, Z),
                $(K, Q),
                $(K, tt),
                $(tt, et),
                at || ((st = [j(f, 'click', t[0]), j(M, 'click', t[1]), j(T, 'click', t[2])]), (at = !0));
        },
        p: I,
        i: I,
        o: I,
        d(t) {
            t && i(e), t && i(n), t && i(l), t && i(p), t && i(d), t && i(W), t && i(K), (at = !1), G(st);
        }
    };
}
function Mt(t) {
    return [
        () => window.analytics.track('dashboard_clicked', { context: 'continue_gitlab' }),
        () => window.analytics.track('dashboard_clicked', { context: 'continue_github' }),
        () => window.analytics.track('dashboard_clicked', { context: 'continue_bitbucket' })
    ];
}
class Pt extends t {
    constructor(t) {
        super(), e(this, t, Mt, At, a, {});
    }
}
function St(t) {
    let e, a, u, m, b, k, y, j, I, G;
    return (
        (k = new Pt({})),
        (I = new Nt({})),
        {
            c() {
                (e = s('h2')),
                    (a = v('Get started now')),
                    (u = x()),
                    (m = s('div')),
                    (b = s('div')),
                    n(k.$$.fragment),
                    (y = x()),
                    (j = s('div')),
                    n(I.$$.fragment),
                    this.h();
            },
            l(t) {
                e = o(t, 'H2', { class: !0 });
                var s = r(e);
                (a = w(s, 'Get started now')), s.forEach(i), (u = E(t)), (m = o(t, 'DIV', { class: !0 }));
                var n = r(m);
                b = o(n, 'DIV', { class: !0 });
                var c = r(b);
                l(k.$$.fragment, c), c.forEach(i), (y = E(n)), (j = o(n, 'DIV', { class: !0 }));
                var h = r(j);
                l(I.$$.fragment, h), h.forEach(i), n.forEach(i), this.h();
            },
            h() {
                c(e, 'class', 'mb-small text-center text-h2'),
                    c(b, 'class', 'card svelte-g9vucl'),
                    c(j, 'class', 'card svelte-g9vucl'),
                    c(m, 'class', 'cards-container svelte-g9vucl');
            },
            m(t, s) {
                h(t, e, s), $(e, a), h(t, u, s), h(t, m, s), $(m, b), g(k, b, null), $(m, y), $(m, j), g(I, j, null), (G = !0);
            },
            i(t) {
                G || (p(k.$$.fragment, t), p(I.$$.fragment, t), (G = !0));
            },
            o(t) {
                d(k.$$.fragment, t), d(I.$$.fragment, t), (G = !1);
            },
            d(t) {
                t && i(e), t && i(u), t && i(m), f(k), f(I);
            }
        }
    );
}
function Bt(t) {
    let e, a;
    return (
        (e = new S({ props: { id: 'get-started', $$slots: { default: [St] }, $$scope: { ctx: t } } })),
        {
            c() {
                n(e.$$.fragment);
            },
            l(t) {
                l(e.$$.fragment, t);
            },
            m(t, s) {
                g(e, t, s), (a = !0);
            },
            p(t, [a]) {
                const s = {};
                1 & a && (s.$$scope = { dirty: a, ctx: t }), e.$set(s);
            },
            i(t) {
                a || (p(e.$$.fragment, t), (a = !0));
            },
            o(t) {
                d(e.$$.fragment, t), (a = !1);
            },
            d(t) {
                f(e, t);
            }
        }
    );
}
class Rt extends t {
    constructor(t) {
        super(), e(this, t, null, Bt, a, {});
    }
}
function zt(t) {
    let e, a, u, m, v, w, b, $, k, y, j, G, _, D, C;
    return (
        (e = new R({
            props: {
                data: {
                    description:
                        'Gitpod streamlines developer workflows by providing prebuilt, collaborative development environments in your browser - powered by VS Code.',
                    title: 'Gitpod - Always ready to code'
                }
            }
        })),
        (u = new et({})),
        (v = new Z({})),
        ($ = new P({ props: { features: U } })),
        (y = new lt({})),
        (G = new Gt({ props: { testimonials: T } })),
        (D = new Rt({})),
        {
            c() {
                n(e.$$.fragment),
                    (a = x()),
                    n(u.$$.fragment),
                    (m = x()),
                    n(v.$$.fragment),
                    (w = x()),
                    (b = s('div')),
                    n($.$$.fragment),
                    (k = x()),
                    n(y.$$.fragment),
                    (j = x()),
                    n(G.$$.fragment),
                    (_ = x()),
                    n(D.$$.fragment),
                    this.h();
            },
            l(t) {
                l(e.$$.fragment, t), (a = E(t)), l(u.$$.fragment, t), (m = E(t)), l(v.$$.fragment, t), (w = E(t)), (b = o(t, 'DIV', { id: !0 }));
                var s = r(b);
                l($.$$.fragment, s), s.forEach(i), (k = E(t)), l(y.$$.fragment, t), (j = E(t)), l(G.$$.fragment, t), (_ = E(t)), l(D.$$.fragment, t), this.h();
            },
            h() {
                c(b, 'id', 'choose-project-observer-target-bottom');
            },
            m(t, s) {
                g(e, t, s),
                    h(t, a, s),
                    g(u, t, s),
                    h(t, m, s),
                    g(v, t, s),
                    h(t, w, s),
                    h(t, b, s),
                    g($, b, null),
                    h(t, k, s),
                    g(y, t, s),
                    h(t, j, s),
                    g(G, t, s),
                    h(t, _, s),
                    g(D, t, s),
                    (C = !0);
            },
            p: I,
            i(t) {
                C ||
                    (p(e.$$.fragment, t),
                    p(u.$$.fragment, t),
                    p(v.$$.fragment, t),
                    p($.$$.fragment, t),
                    p(y.$$.fragment, t),
                    p(G.$$.fragment, t),
                    p(D.$$.fragment, t),
                    (C = !0));
            },
            o(t) {
                d(e.$$.fragment, t),
                    d(u.$$.fragment, t),
                    d(v.$$.fragment, t),
                    d($.$$.fragment, t),
                    d(y.$$.fragment, t),
                    d(G.$$.fragment, t),
                    d(D.$$.fragment, t),
                    (C = !1);
            },
            d(t) {
                f(e, t), t && i(a), f(u, t), t && i(m), f(v, t), t && i(w), t && i(b), f($), t && i(k), f(y, t), t && i(j), f(G, t), t && i(_), f(D, t);
            }
        }
    );
}
const Ot = !0;
export default class extends t {
    constructor(t) {
        super(), e(this, t, null, zt, a, {});
    }
}
export { Ot as prerender };
