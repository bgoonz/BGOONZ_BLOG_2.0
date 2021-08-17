import {
    S as e,
    i,
    s as n,
    e as a,
    k as s,
    c as t,
    a as o,
    n as r,
    d as l,
    b as d,
    I as c,
    f as h,
    G as m,
    t as u,
    g as p,
    h as f,
    C as g,
    K as v
} from './index-0a115175.js';
const k = {
        svenefftinge: {
            name: 'Sven Efftinge',
            socialProfiles: { github: 'svenefftinge', twitter: 'svenefftinge', linkedin: 'efftinge' },
            description:
                'Sven loves finding sweet spots in product development. Always keeping an eye on pragmatism and the real benefit for the end user, he has proven to be a creative source for many successful technologies. He is a co-founder of TypeFox, co-lead of Eclipse Theia and product manager of Gitpod.'
        },
        meysholdt: {
            name: 'Moritz Eysholdt',
            socialProfiles: { github: 'meysholdt', twitter: 'meysholdt', linkedin: 'moritzeysholdt' },
            description: 'Moritz loves to make things works. He is a co-founder of TypeFox and Gitpod.'
        },
        akosyakov: {
            name: 'Anton Kosyakov',
            socialProfiles: { github: 'akosyakov', twitter: 'akosyakov', linkedin: 'anton-kosyakov-4093b610' },
            description:
                'Anton is core committer and co-architect of Eclipse Theia. He is an exceptionally productive coder and a great team player. At the moment he works primarily on Theia, Gitpod, the monaco language client and various associated satellite projects. He also is committer of Xtext.'
        },
        geropl: {
            name: 'Gero Posmyk-Leinemann',
            socialProfiles: { github: 'geropl', twitter: 'geropl2' },
            description:
                'Gero is a passionate software developer with a strong interest in programming languages. He likes to learn new stuff but somehow always turns out to work on the backend side of things. His current pet peeve is Kubernetes and everything around it.'
        },
        csweichel: {
            name: 'Christian Weichel',
            socialProfiles: { github: 'csweichel', twitter: 'csweichel', linkedin: 'christian-weichel-740b4224' },
            description:
                'Christian loves building things, systems and software. Ever keen to solve cross-cutting problems, he has experience in human-computer interaction, embedded software development, and the backend side of things (Kubernetes, Docker). He is also co-leading Eclipse Mita.'
        },
        jankeromnes: {
            name: 'Jan Keromnes',
            socialProfiles: { github: 'jankeromnes', twitter: 'jankeromnes', linkedin: 'jankeromnes' },
            description:
                'Jan is the creator of Janitor, and he has been automating development environments for almost a decade. He is passionate about making software development saner, easier, and more accessible for all humans.'
        },
        nisarhassan12: {
            name: 'Nisar Hassan',
            socialProfiles: { github: 'nisarhassan12', twitter: 'nisarhassan12', linkedin: 'nisar-hassan-naqvi-413466199' },
            description: 'Nisar is a web developer who creates UX rich performant websites and web applications.'
        },
        anudeepreddy: {
            name: 'Anudeep Reddy',
            socialProfiles: { github: 'anudeepreddy', twitter: '', linkedin: '' },
            description: 'Anudeep is a developer advocate at Gitpod.'
        },
        spoenemann: {
            name: 'Miro Spönemann',
            socialProfiles: { github: 'spoenemann', twitter: 'sponemann', linkedin: 'mirospoenemann' },
            description: 'Miro is thrilled about innovation on programming languages, DSLs, graphical modeling and web technologies.'
        },
        JesterOrNot: {
            name: 'Sean Hellum',
            socialProfiles: { github: 'JesterOrNot', twitter: '', linkedin: 'sean-hellum-84ba401a2' },
            description: 'Sean is a developer advocate and rustacean with a passion for Docker, Linux, Bash, Rust, and CLIs'
        },
        JohannesLandgraf: {
            name: 'Johannes Landgraf',
            socialProfiles: { github: 'JohannesLandgraf', twitter: 'jolandgraf', linkedin: 'johanneslandgraf' },
            description:
                'Johannes is CCO at Gitpod and helps professional development teams to embrace fully set-up, remote dev environments. Before that he worked in Venture Capital focusing on everything around open source and developer tools.'
        },
        corneliusludmann: {
            name: 'Cornelius Ludmann',
            socialProfiles: { github: 'corneliusludmann', twitter: 'ludmann', linkedin: 'corneliusludmann' },
            description: ''
        },
        ghuntley: {
            name: 'Geoffrey Huntley',
            socialProfiles: { github: 'ghuntley', twitter: 'geoffreyhuntley', linkedin: 'geoffreyhuntley' },
            description:
                "After many previous adventures involving cycling through many countries on a unicycle Geoff now lives a minimalist lifestyle in a van that is slowly working its' way around Australia. On an average day™ at Gitpod you'll find him shipping features along side the engineering team, crafting code examples and authoring documentation."
        },
        mikenikles: {
            name: 'Mike Nikles',
            socialProfiles: { github: 'mikenikles', twitter: 'mikenikles', linkedin: 'mikenikles' },
            description:
                'Mike is a software architect who values developer experience, productivity and team morale. He is on a journey to help developers let go of their local development environments and embrace automated, ephemeral development environments.'
        },
        arthursens: {
            name: 'Arthur Sens',
            socialProfiles: { github: 'arthursens', twitter: 'ArthurSilvaSens', linkedin: 'arthursilvasens' },
            description:
                "A big open-source fan, Arthur is a SRE focused on cloud-native observability. When not training backflips and gymnastics, you can find him chit-chatting at CNCF's slack channels."
        },
        christinfrohne: {
            name: 'Christin Frohne',
            socialProfiles: { github: 'ChristinFrohne', twitter: 'christinfrohne', linkedin: 'christin-frohne-91a4b0173' },
            description:
                'Christin is our Marketing Manager at Gitpod. She is eager to create a great brand experience and favors going the unconventional way. In her free time, she loves to be out in the nature, climbing rocks and practising yoga.'
        },
        pawlean: { name: 'Pauline Narvas', socialProfiles: { github: 'pawlean', twitter: 'paulienuh', linkedin: 'pnarvas' }, description: '' },
        'rl-gitpod': {
            name: 'Robert Leftwich',
            socialProfiles: { github: 'rl-gitpod', twitter: '', linkedin: 'robert-leftwich' },
            description:
                "Robert loves to code and lives off-grid... although the other way around is probably more accurate. Engineering systems of all shapes and sizes with many different teams highlighted the need for Gitpod's blazingly fast, ephemeral and secure development environments time and time again - he is helping make that happen."
        }
    },
    w = Object.entries(k).reduce(
        (e, [i, n]) => (
            (e[i] = n.socialProfiles.twitter
                ? `https://twitter.com/${n.socialProfiles.twitter}`
                : n.socialProfiles.linkedin
                ? `https://www.linkedin.com/in/${n.socialProfiles.linkedin}`
                : `https://github.com/${n.socialProfiles.github}`),
            e
        ),
        {}
    );
function b(e, i, n) {
    const a = e.slice();
    return (a[8] = i[n]), a;
}
function y(e) {
    let i, n, s;
    return {
        c() {
            (i = a('img')), this.h();
        },
        l(e) {
            (i = t(e, 'IMG', { src: !0, alt: !0, height: !0, width: !0, class: !0 })), this.h();
        },
        h() {
            i.src !== (n = 'https://github.com/' + e[8] + '.png') && d(i, 'src', n),
                d(i, 'alt', 'Avatar of ' + e[8]),
                d(i, 'height', '24'),
                d(i, 'width', '24'),
                d(i, 'class', (s = 'inline rounded-full border border-solid border-off-white ' + e[2]));
        },
        m(e, n) {
            h(e, i, n);
        },
        p(e, n) {
            4 & n && s !== (s = 'inline rounded-full border border-solid border-off-white ' + e[2]) && d(i, 'class', s);
        },
        d(e) {
            e && l(i);
        }
    };
}
function P(e) {
    let i,
        n = e[0][e[8]] + '';
    return {
        c() {
            i = u(n);
        },
        l(e) {
            i = p(e, n);
        },
        m(e, n) {
            h(e, i, n);
        },
        p(e, a) {
            1 & a && n !== (n = e[0][e[8]] + '') && f(i, n);
        },
        d(e) {
            e && l(i);
        }
    };
}
function A(e) {
    let i,
        n,
        u,
        p,
        f = e[3] && y(e),
        g = e[0] && P(e);
    return {
        c() {
            (i = a('a')), f && f.c(), (n = s()), g && g.c(), (u = s()), this.h();
        },
        l(e) {
            i = t(e, 'A', { href: !0, target: !0, class: !0 });
            var a = o(i);
            f && f.l(a), (n = r(a)), g && g.l(a), (u = r(a)), a.forEach(l), this.h();
        },
        h() {
            d(i, 'href', e[5](e[8])), d(i, 'target', '_blank'), d(i, 'class', (p = 'no-underline transition-none ' + e[1])), c(i, 'showAvatar', e[3]);
        },
        m(e, a) {
            h(e, i, a), f && f.m(i, null), m(i, n), g && g.m(i, null), m(i, u);
        },
        p(e, a) {
            e[3] ? (f ? f.p(e, a) : ((f = y(e)), f.c(), f.m(i, n))) : f && (f.d(1), (f = null)),
                e[0] ? (g ? g.p(e, a) : ((g = P(e)), g.c(), g.m(i, u))) : g && (g.d(1), (g = null)),
                2 & a && p !== (p = 'no-underline transition-none ' + e[1]) && d(i, 'class', p),
                10 & a && c(i, 'showAvatar', e[3]);
        },
        d(e) {
            e && l(i), f && f.d(), g && g.d();
        }
    };
}
function M(e) {
    let i,
        n = e[4],
        s = [];
    for (let a = 0; a < n.length; a += 1) s[a] = A(b(e, n, a));
    return {
        c() {
            i = a('span');
            for (let e = 0; e < s.length; e += 1) s[e].c();
            this.h();
        },
        l(e) {
            i = t(e, 'SPAN', { class: !0 });
            var n = o(i);
            for (let i = 0; i < s.length; i += 1) s[i].l(n);
            n.forEach(l), this.h();
        },
        h() {
            d(i, 'class', 'avatars');
        },
        m(e, n) {
            h(e, i, n);
            for (let a = 0; a < s.length; a += 1) s[a].m(i, null);
        },
        p(e, [a]) {
            if (63 & a) {
                let t;
                for (n = e[4], t = 0; t < n.length; t += 1) {
                    const o = b(e, n, t);
                    s[t] ? s[t].p(o, a) : ((s[t] = A(o)), s[t].c(), s[t].m(i, null));
                }
                for (; t < s.length; t += 1) s[t].d(1);
                s.length = n.length;
            }
        },
        i: g,
        o: g,
        d(e) {
            e && l(i), v(s, e);
        }
    };
}
function C(e, i, n) {
    let { usernames: a } = i,
        { displayNames: s = null } = i,
        { socialMediaLinks: t = null } = i,
        { socialMediaLinkClasses: o = '' } = i,
        { socialMediaImgClasses: r = '' } = i,
        { showAvatar: l = !0 } = i;
    const d = a.split(',').map((e) => e.trim());
    return (
        (e.$$set = (e) => {
            'usernames' in e && n(6, (a = e.usernames)),
                'displayNames' in e && n(0, (s = e.displayNames)),
                'socialMediaLinks' in e && n(7, (t = e.socialMediaLinks)),
                'socialMediaLinkClasses' in e && n(1, (o = e.socialMediaLinkClasses)),
                'socialMediaImgClasses' in e && n(2, (r = e.socialMediaImgClasses)),
                'showAvatar' in e && n(3, (l = e.showAvatar));
        }),
        [s, o, r, l, d, (e) => (t ? t[e] : `https://github.com/${e}`), a, t]
    );
}
class L extends e {
    constructor(e) {
        super(),
            i(this, e, C, M, n, { usernames: 6, displayNames: 0, socialMediaLinks: 7, socialMediaLinkClasses: 1, socialMediaImgClasses: 2, showAvatar: 3 });
    }
}
export { L as A, w as a, k as b };
