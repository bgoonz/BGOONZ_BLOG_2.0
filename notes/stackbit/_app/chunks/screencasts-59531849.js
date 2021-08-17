import {
    S as e,
    i as t,
    s as a,
    e as r,
    t as s,
    k as o,
    j as n,
    c as i,
    a as c,
    g as l,
    d,
    n as u,
    m as p,
    b as h,
    f,
    G as g,
    o as m,
    h as b,
    v as y,
    r as w,
    w as v
} from './index-0a115175.js';
import { L as k } from './logo-60efa4e2.js';
function S(e) {
    let t,
        a,
        o = e[0].title + '';
    return {
        c() {
            (t = r('h2')), (a = s(o));
        },
        l(e) {
            t = i(e, 'H2', {});
            var r = c(t);
            (a = l(r, o)), r.forEach(d);
        },
        m(e, r) {
            f(e, t, r), g(t, a);
        },
        p(e, t) {
            1 & t && o !== (o = e[0].title + '') && b(a, o);
        },
        d(e) {
            e && d(t);
        }
    };
}
function j(e) {
    let t,
        a,
        o = e[0].title + '';
    return {
        c() {
            (t = r('h3')), (a = s(o)), this.h();
        },
        l(e) {
            t = i(e, 'H3', { class: !0 });
            var r = c(t);
            (a = l(r, o)), r.forEach(d), this.h();
        },
        h() {
            h(t, 'class', 'h2');
        },
        m(e, r) {
            f(e, t, r), g(t, a);
        },
        p(e, t) {
            1 & t && o !== (o = e[0].title + '') && b(a, o);
        },
        d(e) {
            e && d(t);
        }
    };
}
function x(e) {
    let t, a, x, $, D, C, I, E, P, Y;
    function H(e, t) {
        return 'h3' === e[1] ? j : S;
    }
    let G = H(e),
        N = G(e);
    return (
        (E = new k({})),
        {
            c() {
                (t = r('a')), (a = r('div')), (x = r('data')), ($ = s('Screencast ')), (D = s(e[2])), (C = o()), N.c(), (I = o()), n(E.$$.fragment), this.h();
            },
            l(r) {
                t = i(r, 'A', { href: !0, class: !0 });
                var s = c(t);
                a = i(s, 'DIV', {});
                var o = c(a);
                x = i(o, 'DATA', {});
                var n = c(x);
                ($ = l(n, 'Screencast ')),
                    (D = l(n, e[2])),
                    n.forEach(d),
                    (C = u(o)),
                    N.l(o),
                    (I = u(o)),
                    p(E.$$.fragment, o),
                    o.forEach(d),
                    s.forEach(d),
                    this.h();
            },
            h() {
                h(t, 'href', (P = '/screencasts/' + e[0].title.toLowerCase().replace(/\s/g, '-'))), h(t, 'class', 'cast min-w-full');
            },
            m(e, r) {
                f(e, t, r), g(t, a), g(a, x), g(x, $), g(x, D), g(a, C), N.m(a, null), g(a, I), m(E, a, null), (Y = !0);
            },
            p(e, [r]) {
                (!Y || 4 & r) && b(D, e[2]),
                    G === (G = H(e)) && N ? N.p(e, r) : (N.d(1), (N = G(e)), N && (N.c(), N.m(a, I))),
                    (!Y || (1 & r && P !== (P = '/screencasts/' + e[0].title.toLowerCase().replace(/\s/g, '-')))) && h(t, 'href', P);
            },
            i(e) {
                Y || (y(E.$$.fragment, e), (Y = !0));
            },
            o(e) {
                w(E.$$.fragment, e), (Y = !1);
            },
            d(e) {
                e && d(t), N.d(), v(E);
            }
        }
    );
}
function $(e, t, a) {
    let r,
        { screencast: s } = t,
        { screencastNumber: o } = t,
        { headlineOrder: n } = t;
    return (
        (e.$$set = (e) => {
            'screencast' in e && a(0, (s = e.screencast)),
                'screencastNumber' in e && a(3, (o = e.screencastNumber)),
                'headlineOrder' in e && a(1, (n = e.headlineOrder));
        }),
        (e.$$.update = () => {
            8 & e.$$.dirty && a(2, (r = `${o}`.padStart(3, '0')));
        }),
        [s, n, r, o]
    );
}
class D extends e {
    constructor(e) {
        super(), t(this, e, $, x, a, { screencast: 0, screencastNumber: 3, headlineOrder: 1 });
    }
}
let C = 1;
const I = [
    {
        nextScreencast: C++,
        title: 'Always Ready-To-Code',
        description: 'How to get a full dev environment in your browser with the click of a button and be immediately ready-to-code.',
        duration: 120,
        tile: 'screencast-1.jpg',
        youtubeId: 'w65POyu3ZUQ',
        relatedDocs: [
            { path: '', title: 'Introduction to Gitpod' },
            { path: '/getting-started', title: 'Getting Started' },
            { path: '/context-urls', title: 'Context URLs' }
        ]
    },
    {
        nextScreencast: C++,
        title: 'Navigating Your Workspace',
        description: 'Your workspace is running, now what?',
        duration: 201,
        tile: 'screencast-2.jpg',
        youtubeId: '4495YOMhhgo',
        relatedDocs: [{ path: '/life-of-workspace', title: 'Life of a Workspace' }]
    },
    {
        nextScreencast: C++,
        title: 'Fully Automate Your Dev Setup',
        description: 'Understanding the automation benefits that arise from the concept of dev-environment-as-code.',
        duration: 264,
        tile: 'screencast-3.jpg',
        youtubeId: 'fA2fpqP1xaM',
        relatedDocs: [
            { path: '/configuration', title: 'Configure Your Project' },
            { path: '/config-gitpod-file', title: '.gitpod.yml' },
            { path: '/config-docker', title: 'Docker Configuration' },
            { path: '/config-start-tasks', title: 'Start Tasks' }
        ]
    },
    {
        nextScreencast: C++,
        title: 'Personalize Your Workspace',
        description: 'How to customize and configure Gitpod for your personal needs and those of your team.',
        duration: 123,
        tile: 'screencast-4.jpg',
        youtubeId: 'VYHsd1zI_tE',
        relatedDocs: [
            { path: '/vscode-extensions', title: 'VS Code Extensions' },
            { path: '/environment-variables', title: 'Environment Variables' }
        ]
    },
    {
        nextScreencast: C++,
        title: 'Continuously Prebuild Your Project',
        description: 'How to make Gitpod load in a blink by prebuilding your project ahead-of-time, continuously.',
        duration: 128,
        tile: 'screencast-5.jpg',
        youtubeId: 'ZtlJ0PakUHQ',
        relatedDocs: [{ path: '/prebuilds', title: 'Prebuilt Workspaces' }]
    },
    {
        nextScreencast: C++,
        title: 'Fresh Dev Environments For Each New Task',
        description: 'Discover ephemeral/disposable workspaces and start fresh for each new task with just a single click. Pure magic!',
        duration: 195,
        tile: 'screencast-6.jpg',
        youtubeId: 'n7Ca3jHFtZg',
        relatedDocs: [{ path: '', title: 'Introduction to Gitpod' }]
    },
    {
        nextScreencast: C++,
        title: 'Collaborating With Your Team',
        description: "How to collaborate effectively with Gitpod's Shared Workspaces and Snapshots.",
        duration: 189,
        tile: 'screencast-7.jpg',
        youtubeId: 'TrY15zN98p8',
        relatedDocs: [{ path: '/sharing-and-collaboration', title: 'Collaboration & Sharing' }]
    }
];
export { D as P, I as s };
