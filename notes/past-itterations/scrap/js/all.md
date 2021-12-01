# main.js

```js
window.onGatsbyInitialClientRender = function () {
    /**
     * Main JS file for theme behaviours
     */
    // Responsive video embeds
    let videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
    reframe(videoEmbeds.join(','));

    // Handle main navigation menu toggling on small screens
    function menuToggleHandler(e) {
        e.preventDefault();
        document.body.classList.toggle('menu--opened');
    }

    // Handle docs navigation menu toggling on small screens
    function docsNavToggleHandler(e) {
        e.preventDefault();
        document.body.classList.toggle('docs-menu--opened');
    }

    // Handle submenu toggling
    function submenuToggleHandler(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
    }

    window.addMainNavigationHandlers = function () {
        const menuToggle = document.querySelectorAll('.menu-toggle');
        if (menuToggle) {
            for (let i = 0; i < menuToggle.length; i++) {
                menuToggle[i].addEventListener('click', menuToggleHandler, false);
            }
        }

        const submenuToggle = document.querySelectorAll('.submenu-toggle');
        if (submenuToggle) {
            for (let i = 0; i < submenuToggle.length; i++) {
                submenuToggle[i].addEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.removeMainNavigationHandlers = function () {
        // Remove nav related classes on page load
        document.body.classList.remove('menu--opened');

        const menuToggle = document.querySelectorAll('.menu-toggle');
        if (menuToggle) {
            for (let i = 0; i < menuToggle.length; i++) {
                menuToggle[i].removeEventListener('click', menuToggleHandler, false);
            }
        }

        const submenuToggle = document.querySelectorAll('.submenu-toggle');
        if (submenuToggle) {
            for (let i = 0; i < submenuToggle.length; i++) {
                submenuToggle[i].removeEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.addDocsNavigationHandlers = function () {
        const docsNavToggle = document.getElementById('docs-nav-toggle');
        if (docsNavToggle) {
            docsNavToggle.addEventListener('click', docsNavToggleHandler, false);
        }

        const docsSubmenuToggle = document.querySelectorAll('.docs-submenu-toggle');
        if (docsSubmenuToggle) {
            for (let i = 0; i < docsSubmenuToggle.length; i++) {
                docsSubmenuToggle[i].addEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.removeDocsNavigationHandlers = function () {
        // Remove docs nav related classes on page load
        document.body.classList.remove('docs-menu--opened');

        const docsNavToggle = document.getElementById('docs-nav-toggle');
        if (docsNavToggle) {
            docsNavToggle.removeEventListener('click', docsNavToggleHandler, false);
        }

        const docsSubmenuToggle = document.querySelectorAll('.docs-submenu-toggle');
        if (docsSubmenuToggle) {
            for (let i = 0; i < docsSubmenuToggle.length; i++) {
                docsSubmenuToggle[i].removeEventListener('click', submenuToggleHandler, false);
            }
        }
    };

    window.addPageNavLinks = function () {
        const pageToc = document.getElementById('page-nav-inside');
        const pageTocContainer = document.getElementById('page-nav-link-container');

        if (pageToc && pageTocContainer) {
            const pageContent = document.querySelector('.type-docs .post-content');

            // Create in-page navigation
            const headerLinks = getHeaderLinks({
                root: pageContent
            });
            if (headerLinks.length > 0) {
                pageToc.classList.add('has-links');
                renderHeaderLinks(pageTocContainer, headerLinks);
            }

            // Scroll to anchors
            let scroll = new SmoothScroll('[data-scroll]');
            let hash = window.decodeURI(location.hash.replace('#', ''));
            if (hash !== '') {
                window.setTimeout(function () {
                    let anchor = document.getElementById(hash);
                    if (anchor) {
                        scroll.animateScroll(anchor);
                    }
                }, 0);
            }

            // Highlight current anchor
            let pageTocLinks = pageTocContainer.getElementsByTagName('a');
            if (pageTocLinks.length > 0) {
                let spy = new Gumshoe('#page-nav-inside a', {
                    nested: true,
                    nestedClass: 'active-parent'
                });
            }

            // Add link to page content headings
            let pageHeadings = getElementsByTagNames(pageContent, ['h2', 'h3']);
            for (let i = 0; i < pageHeadings.length; i++) {
                let heading = pageHeadings[i];
                if (typeof heading.id !== 'undefined' && heading.id !== '') {
                    heading.insertBefore(anchorForId(heading.id), heading.firstChild);
                }
            }

            // Copy link url
            let clipboard = new ClipboardJS('.hash-link', {
                text: function (trigger) {
                    return window.location.href.replace(window.location.hash, '') + trigger.getAttribute('href');
                }
            });
        }
    };

    window.removePageNavLinks = function () {
        const pageToc = document.getElementById('page-nav-inside');
        const pageTocContainer = document.getElementById('page-nav-link-container');

        if (pageToc && pageTocContainer) {
            pageToc.classList.remove('has-links');
            while (pageTocContainer.firstChild) {
                pageTocContainer.removeChild(pageTocContainer.firstChild);
            }
        }
    };

    function getElementsByTagNames(root, tagNames) {
        let elements = [];
        for (let i = 0; i < root.children.length; i++) {
            let element = root.children[i];
            let tagName = element.nodeName.toLowerCase();
            if (tagNames.includes(tagName)) {
                elements.push(element);
            }
            elements = elements.concat(getElementsByTagNames(element, tagNames));
        }
        return elements;
    }

    function createLinksForHeaderElements(elements) {
        let result = [];
        let stack = [
            {
                level: 0,
                children: result
            }
        ];
        let re = /^h(\d)$/;
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let tagName = element.nodeName.toLowerCase();
            let match = re.exec(tagName);
            if (!match) {
                console.warn('can not create links to non header element');
                continue;
            }
            let headerLevel = parseInt(match[1], 10);
            if (!element.id) {
                if (!element.textContent) {
                    console.warn('can not create link to element without id and without text content');
                    continue;
                }
                element.id = element.textContent
                    .toLowerCase()
                    .replace(/[^\w]+/g, '_')
                    .replace(/^_/, '')
                    .replace(/_$/, '');
            }
            let link = document.createElement('a');
            link.href = '#' + element.id;
            link.setAttribute('data-scroll', '');
            link.appendChild(document.createTextNode(element.textContent));
            let obj = {
                id: element.id,
                level: headerLevel,
                textContent: element.textContent,
                element: element,
                link: link,
                children: []
            };
            if (headerLevel > stack[stack.length - 1].level) {
                stack[stack.length - 1].children.push(obj);
                stack.push(obj);
            } else {
                while (headerLevel <= stack[stack.length - 1].level && stack.length > 1) {
                    stack.pop();
                }
                stack[stack.length - 1].children.push(obj);
                stack.push(obj);
            }
        }
        return result;
    }

    function getHeaderLinks(options = {}) {
        let tagNames = options.tagNames || ['h2', 'h3'];
        let root = options.root || document.body;
        let headerElements = getElementsByTagNames(root, tagNames);
        return createLinksForHeaderElements(headerElements);
    }

    function renderHeaderLinks(element, links) {
        if (links.length === 0) {
            return;
        }
        let ulElm = document.createElement('ul');
        for (let i = 0; i < links.length; i++) {
            let liElm = document.createElement('li');
            liElm.append(links[i].link);
            if (links[i].children.length > 0) {
                renderHeaderLinks(liElm, links[i].children);
            }
            ulElm.appendChild(liElm);
        }
        element.appendChild(ulElm);
    }

    function anchorForId(id) {
        let anchor = document.createElement('a');
        anchor.setAttribute('class', 'hash-link');
        anchor.setAttribute('data-scroll', '');
        anchor.href = '#' + id;
        anchor.innerHTML = '<span class="screen-reader-text">Copy</span>';
        return anchor;
    }

    // Syntax Highlighter
    // Prism.highlightAll();
};

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//--------------------------------New----------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
```

---

---

# Page Load JS

```js
window.onGatsbyRouteUpdate = function () {
    window.addMainNavigationHandlers();
    window.addDocsNavigationHandlers();
    window.addPageNavLinks();
};
```

---

---

# PageUnload.js

```js
window.onGatsbyPreRouteUpdate = function () {
    window.removeMainNavigationHandlers();
    window.removeDocsNavigationHandlers();
    window.removePageNavLinks();
};
```

---

---

# Plugins.js

```js
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).reframe = t());
})(this, function () {
    'use strict';
    function t() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var i = Array(e), o = 0, t = 0; t < n; t++) for (var r = arguments[t], f = 0, d = r.length; f < d; f++, o++) i[o] = r[f];
        return i;
    }
    return function (e, s) {
        return (
            void 0 === s && (s = 'js-reframe'),
            ('string' == typeof e ? t(document.querySelectorAll(e)) : 'length' in e ? t(e) : [e]).forEach(function (e) {
                var t, n, i, o, r, f, d, l;
                -1 !== e.className.split(' ').indexOf(s) ||
                    -1 < e.style.width.indexOf('%') ||
                    ((i = e.getAttribute('height') || e.offsetHeight),
                    (o = e.getAttribute('width') || e.offsetWidth),
                    (r = (('string' == typeof i ? parseInt(i) : i) / ('string' == typeof o ? parseInt(o) : o)) * 100),
                    ((f = document.createElement('div')).className = s),
                    ((d = f.style).position = 'relative'),
                    (d.width = '100%'),
                    (d.paddingTop = r + '%'),
                    ((l = e.style).position = 'absolute'),
                    (l.width = '100%'),
                    (l.height = '100%'),
                    (l.left = '0'),
                    (l.top = '0'),
                    null !== (t = e.parentNode) && void 0 !== t && t.insertBefore(f, e),
                    null !== (n = e.parentNode) && void 0 !== n && n.removeChild(e),
                    f.appendChild(e));
            })
        );
    };
});

/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element &&
    !Element.prototype.closest &&
    (Element.prototype.closest = function (e) {
        var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            o = this;
        do {
            for (t = n.length; 0 <= --t && n.item(t) !== o; );
        } while (t < 0 && (o = o.parentElement));
        return o;
    }),
    (function () {
        if ('function' == typeof window.CustomEvent) return;
        function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }
        (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })(),
    (function () {
        for (var r = 0, e = ['ms', 'moz', 'webkit', 'o'], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
            (window.requestAnimationFrame = window[e[t] + 'RequestAnimationFrame']),
                (window.cancelAnimationFrame = window[e[t] + 'CancelAnimationFrame'] || window[e[t] + 'CancelRequestAnimationFrame']);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e, t) {
                var n = new Date().getTime(),
                    o = Math.max(0, 16 - (n - r)),
                    a = window.setTimeout(function () {
                        e(n + o);
                    }, o);
                return (r = n + o), a;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e);
                });
    })(),
    (function (e, t) {
        'function' == typeof define && define.amd
            ? define([], function () {
                  return t(e);
              })
            : 'object' == typeof exports
            ? (module.exports = t(e))
            : (e.SmoothScroll = t(e));
    })('undefined' != typeof global ? global : 'undefined' != typeof window ? window : this, function (q) {
        'use strict';
        var I = {
                ignore: '[data-scroll-ignore]',
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                speedAsDuration: !1,
                durationMax: null,
                durationMin: null,
                clip: !0,
                offset: 0,
                easing: 'easeInOutCubic',
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0
            },
            F = function () {
                var n = {};
                return (
                    Array.prototype.forEach.call(arguments, function (e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    }),
                    n
                );
            },
            r = function (e) {
                '#' === e.charAt(0) && (e = e.substr(1));
                for (var t, n = String(e), o = n.length, a = -1, r = '', i = n.charCodeAt(0); ++a < o; ) {
                    if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
                    (1 <= t && t <= 31) || 127 == t || (0 === a && 48 <= t && t <= 57) || (1 === a && 48 <= t && t <= 57 && 45 === i)
                        ? (r += '\\' + t.toString(16) + ' ')
                        : (r +=
                              128 <= t || 45 === t || 95 === t || (48 <= t && t <= 57) || (65 <= t && t <= 90) || (97 <= t && t <= 122)
                                  ? n.charAt(a)
                                  : '\\' + n.charAt(a));
                }
                return '#' + r;
            },
            L = function () {
                return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                );
            },
            x = function (e) {
                return e ? ((t = e), parseInt(q.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                var t;
            },
            H = function (e, t, n, o) {
                if (t.emitEvents && 'function' == typeof q.CustomEvent) {
                    var a = new CustomEvent(e, {
                        bubbles: !0,
                        detail: { anchor: n, toggle: o }
                    });
                    document.dispatchEvent(a);
                }
            };
        return function (o, e) {
            var A,
                a,
                O,
                C,
                M = {};
            (M.cancelScroll = function (e) {
                cancelAnimationFrame(C), (C = null), e || H('scrollCancel', A);
            }),
                (M.animateScroll = function (i, c, e) {
                    M.cancelScroll();
                    var s = F(A || I, e || {}),
                        u = '[object Number]' === Object.prototype.toString.call(i),
                        t = u || !i.tagName ? null : i;
                    if (u || t) {
                        var l = q.pageYOffset;
                        s.header && !O && (O = document.querySelector(s.header));
                        var n,
                            o,
                            a,
                            m,
                            r,
                            d,
                            f,
                            h,
                            p = x(O),
                            g = u
                                ? i
                                : (function (e, t, n, o) {
                                      var a = 0;
                                      if (e.offsetParent) for (; (a += e.offsetTop), (e = e.offsetParent); );
                                      return (a = Math.max(a - t - n, 0)), o && (a = Math.min(a, L() - q.innerHeight)), a;
                                  })(t, p, parseInt('function' == typeof s.offset ? s.offset(i, c) : s.offset, 10), s.clip),
                            y = g - l,
                            v = L(),
                            w = 0,
                            S =
                                ((n = y),
                                (a = (o = s).speedAsDuration ? o.speed : Math.abs((n / 1e3) * o.speed)),
                                o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)),
                            E = function (e, t) {
                                var n,
                                    o,
                                    a,
                                    r = q.pageYOffset;
                                if (e == t || r == t || (l < t && q.innerHeight + r) >= v)
                                    return (
                                        M.cancelScroll(!0),
                                        (o = t),
                                        (a = u),
                                        0 === (n = i) && document.body.focus(),
                                        a ||
                                            (n.focus(),
                                            document.activeElement !== n && (n.setAttribute('tabindex', '-1'), n.focus(), (n.style.outline = 'none')),
                                            q.scrollTo(0, o)),
                                        H('scrollStop', s, i, c),
                                        !(C = m = null)
                                    );
                            },
                            b = function (e) {
                                var t, n, o;
                                m || (m = e),
                                    (w += e - m),
                                    (d =
                                        l +
                                        y *
                                            ((n = r = 1 < (r = 0 === S ? 0 : w / S) ? 1 : r),
                                            'easeInQuad' === (t = s).easing && (o = n * n),
                                            'easeOutQuad' === t.easing && (o = n * (2 - n)),
                                            'easeInOutQuad' === t.easing && (o = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                                            'easeInCubic' === t.easing && (o = n * n * n),
                                            'easeOutCubic' === t.easing && (o = --n * n * n + 1),
                                            'easeInOutCubic' === t.easing && (o = n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                                            'easeInQuart' === t.easing && (o = n * n * n * n),
                                            'easeOutQuart' === t.easing && (o = 1 - --n * n * n * n),
                                            'easeInOutQuart' === t.easing && (o = n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                                            'easeInQuint' === t.easing && (o = n * n * n * n * n),
                                            'easeOutQuint' === t.easing && (o = 1 + --n * n * n * n * n),
                                            'easeInOutQuint' === t.easing && (o = n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n),
                                            t.customEasing && (o = t.customEasing(n)),
                                            o || n)),
                                    q.scrollTo(0, Math.floor(d)),
                                    E(d, g) || ((C = q.requestAnimationFrame(b)), (m = e));
                            };
                        0 === q.pageYOffset && q.scrollTo(0, 0),
                            (f = i),
                            (h = s),
                            u ||
                                (history.pushState &&
                                    h.updateURL &&
                                    history.pushState(
                                        { smoothScroll: JSON.stringify(h), anchor: f.id },
                                        document.title,
                                        f === document.documentElement ? '#top' : '#' + f.id
                                    )),
                            'matchMedia' in q && q.matchMedia('(prefers-reduced-motion)').matches
                                ? q.scrollTo(0, Math.floor(g))
                                : (H('scrollStart', s, i, c), M.cancelScroll(!0), q.requestAnimationFrame(b));
                    }
                });
            var t = function (e) {
                    if (
                        !e.defaultPrevented &&
                        !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
                        'closest' in e.target &&
                        (a = e.target.closest(o)) &&
                        'a' === a.tagName.toLowerCase() &&
                        !e.target.closest(A.ignore) &&
                        a.hostname === q.location.hostname &&
                        a.pathname === q.location.pathname &&
                        /#/.test(a.href)
                    ) {
                        var t,
                            n = r(a.hash);
                        if ('#' === n) {
                            if (!A.topOnEmptyHash) return;
                            t = document.documentElement;
                        } else t = document.querySelector(n);
                        (t = t || '#top' !== n ? t : document.documentElement) &&
                            (e.preventDefault(),
                            (function (e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = q.location.hash;
                                    (t = t || ''),
                                        history.replaceState(
                                            {
                                                smoothScroll: JSON.stringify(e),
                                                anchor: t || q.pageYOffset
                                            },
                                            document.title,
                                            t || q.location.href
                                        );
                                }
                            })(A),
                            M.animateScroll(t, a));
                    }
                },
                n = function (e) {
                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(A)) {
                        var t = history.state.anchor;
                        ('string' == typeof t && t && !(t = document.querySelector(r(history.state.anchor)))) || M.animateScroll(t, null, { updateURL: !1 });
                    }
                };
            M.destroy = function () {
                A && (document.removeEventListener('click', t, !1), q.removeEventListener('popstate', n, !1), M.cancelScroll(), (C = O = a = A = null));
            };
            return (
                (function () {
                    if (!('querySelector' in document && 'addEventListener' in q && 'requestAnimationFrame' in q && 'closest' in q.Element.prototype))
                        throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';
                    M.destroy(),
                        (A = F(I, e || {})),
                        (O = A.header ? document.querySelector(A.header) : null),
                        document.addEventListener('click', t, !1),
                        A.updateURL && A.popstate && q.addEventListener('popstate', n, !1);
                })(),
                M
            );
        };
    });

/*! gumshoejs v5.1.1 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
Element.prototype.closest ||
    (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    (Element.prototype.closest = function (t) {
        var e = this;
        if (!document.documentElement.contains(this)) return null;
        do {
            if (e.matches(t)) return e;
            e = e.parentElement;
        } while (null !== e);
        return null;
    })),
    (function () {
        if ('function' == typeof window.CustomEvent) return !1;
        function t(t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
        }
        (t.prototype = window.Event.prototype), (window.CustomEvent = t);
    })(),
    (function (t, e) {
        'function' == typeof define && define.amd
            ? define([], function () {
                  return e(t);
              })
            : 'object' == typeof exports
            ? (module.exports = e(t))
            : (t.Gumshoe = e(t));
    })('undefined' != typeof global ? global : 'undefined' != typeof window ? window : this, function (t) {
        'use strict';
        var e = {
                navClass: 'active',
                contentClass: 'active',
                nested: !1,
                nestedClass: 'active',
                offset: 0,
                reflow: !1,
                events: !0
            },
            n = function (t, e, n) {
                if (n.settings.events) {
                    var o = new CustomEvent(t, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: n
                    });
                    e.dispatchEvent(o);
                }
            },
            o = function (t) {
                var e = 0;
                if (t.offsetParent) for (; t; ) (e += t.offsetTop), (t = t.offsetParent);
                return e >= 0 ? e : 0;
            },
            s = function (t) {
                t &&
                    t.sort(function (t, e) {
                        return o(t.content) < o(e.content) ? -1 : 1;
                    });
            },
            c = function (e, n, o) {
                var s = e.getBoundingClientRect(),
                    c = (function (t) {
                        return 'function' == typeof t.offset ? parseFloat(t.offset()) : parseFloat(t.offset);
                    })(n);
                return o ? parseInt(s.bottom, 10) < (t.innerHeight || document.documentElement.clientHeight) : parseInt(s.top, 10) <= c;
            },
            r = function () {
                return (
                    t.innerHeight + t.pageYOffset >=
                    Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.body.clientHeight,
                        document.documentElement.clientHeight
                    )
                );
            },
            i = function (t, e) {
                var n = t[t.length - 1];
                if (
                    (function (t, e) {
                        return !(!r() || !c(t.content, e, !0));
                    })(n, e)
                )
                    return n;
                for (var o = t.length - 1; o >= 0; o--) if (c(t[o].content, e)) return t[o];
            },
            l = function (t, e) {
                if (e.nested) {
                    var n = t.parentNode.closest('li');
                    n && (n.classList.remove(e.nestedClass), l(n, e));
                }
            },
            a = function (t, e) {
                if (t) {
                    var o = t.nav.closest('li');
                    o &&
                        (o.classList.remove(e.navClass),
                        t.content.classList.remove(e.contentClass),
                        l(o, e),
                        n('gumshoeDeactivate', o, {
                            link: t.nav,
                            content: t.content,
                            settings: e
                        }));
                }
            },
            u = function (t, e) {
                if (e.nested) {
                    var n = t.parentNode.closest('li');
                    n && (n.classList.add(e.nestedClass), u(n, e));
                }
            };
        return function (o, c) {
            var r,
                l,
                f,
                d,
                m,
                v = {};
            (v.setup = function () {
                (r = document.querySelectorAll(o)),
                    (l = []),
                    Array.prototype.forEach.call(r, function (t) {
                        var e = document.getElementById(decodeURIComponent(t.hash.substr(1)));
                        e && l.push({ nav: t, content: e });
                    }),
                    s(l);
            }),
                (v.detect = function () {
                    var t = i(l, m);
                    t
                        ? (f && t.content === f.content) ||
                          (a(f, m),
                          (function (t, e) {
                              if (t) {
                                  var o = t.nav.closest('li');
                                  o &&
                                      (o.classList.add(e.navClass),
                                      t.content.classList.add(e.contentClass),
                                      u(o, e),
                                      n('gumshoeActivate', o, {
                                          link: t.nav,
                                          content: t.content,
                                          settings: e
                                      }));
                              }
                          })(t, m),
                          (f = t))
                        : f && (a(f, m), (f = null));
                });
            var p = function (e) {
                    d && t.cancelAnimationFrame(d), (d = t.requestAnimationFrame(v.detect));
                },
                h = function (e) {
                    d && t.cancelAnimationFrame(d),
                        (d = t.requestAnimationFrame(function () {
                            s(l), v.detect();
                        }));
                };
            v.destroy = function () {
                f && a(f, m),
                    t.removeEventListener('scroll', p, !1),
                    m.reflow && t.removeEventListener('resize', h, !1),
                    (l = null),
                    (r = null),
                    (f = null),
                    (d = null),
                    (m = null);
            };
            return (
                (m = (function () {
                    var t = {};
                    return (
                        Array.prototype.forEach.call(arguments, function (e) {
                            for (var n in e) {
                                if (!e.hasOwnProperty(n)) return;
                                t[n] = e[n];
                            }
                        }),
                        t
                    );
                })(e, c || {})),
                v.setup(),
                v.detect(),
                t.addEventListener('scroll', p, !1),
                m.reflow && t.addEventListener('resize', h, !1),
                v
            );
        };
    });

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define([], e)
        : 'object' == typeof exports
        ? (exports.ClipboardJS = e())
        : (t.ClipboardJS = e());
})(this, function () {
    return (function (n) {
        var o = {};
        function r(t) {
            if (o[t]) return o[t].exports;
            var e = (o[t] = { i: t, l: !1, exports: {} });
            return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
        }
        return (
            (r.m = n),
            (r.c = o),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (
                    (r.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var o in e)
                        r.d(
                            n,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return n;
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return r.d(e, 'a', e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ''),
            r((r.s = 0))
        );
    })([
        function (t, e, n) {
            'use strict';
            var r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                          },
                i = (function () {
                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    return function (t, e, n) {
                        return e && o(t.prototype, e), n && o(t, n), t;
                    };
                })(),
                a = o(n(1)),
                c = o(n(3)),
                u = o(n(4));
            function o(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var l = (function (t) {
                function o(t, e) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                    })(this, o);
                    var n = (function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
                    })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                    return n.resolveOptions(e), n.listenClick(t), n;
                }
                return (
                    (function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
                        (t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                    })(o, c.default),
                    i(
                        o,
                        [
                            {
                                key: 'resolveOptions',
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    (this.action = 'function' == typeof t.action ? t.action : this.defaultAction),
                                        (this.target = 'function' == typeof t.target ? t.target : this.defaultTarget),
                                        (this.text = 'function' == typeof t.text ? t.text : this.defaultText),
                                        (this.container = 'object' === r(t.container) ? t.container : document.body);
                                }
                            },
                            {
                                key: 'listenClick',
                                value: function (t) {
                                    var e = this;
                                    this.listener = (0, u.default)(t, 'click', function (t) {
                                        return e.onClick(t);
                                    });
                                }
                            },
                            {
                                key: 'onClick',
                                value: function (t) {
                                    var e = t.delegateTarget || t.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null),
                                        (this.clipboardAction = new a.default({
                                            action: this.action(e),
                                            target: this.target(e),
                                            text: this.text(e),
                                            container: this.container,
                                            trigger: e,
                                            emitter: this
                                        }));
                                }
                            },
                            {
                                key: 'defaultAction',
                                value: function (t) {
                                    return s('action', t);
                                }
                            },
                            {
                                key: 'defaultTarget',
                                value: function (t) {
                                    var e = s('target', t);
                                    if (e) return document.querySelector(e);
                                }
                            },
                            {
                                key: 'defaultText',
                                value: function (t) {
                                    return s('text', t);
                                }
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                }
                            }
                        ],
                        [
                            {
                                key: 'isSupported',
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ['copy', 'cut'],
                                        e = 'string' == typeof t ? [t] : t,
                                        n = !!document.queryCommandSupported;
                                    return (
                                        e.forEach(function (t) {
                                            n = n && !!document.queryCommandSupported(t);
                                        }),
                                        n
                                    );
                                }
                            }
                        ]
                    ),
                    o
                );
            })();
            function s(t, e) {
                var n = 'data-clipboard-' + t;
                if (e.hasAttribute(n)) return e.getAttribute(n);
            }
            t.exports = l;
        },
        function (t, e, n) {
            'use strict';
            var o,
                r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                          },
                i = (function () {
                    function o(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    return function (t, e, n) {
                        return e && o(t.prototype, e), n && o(t, n), t;
                    };
                })(),
                a = n(2),
                c = (o = a) && o.__esModule ? o : { default: o };
            var u = (function () {
                function e(t) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        this.resolveOptions(t),
                        this.initSelection();
                }
                return (
                    i(e, [
                        {
                            key: 'resolveOptions',
                            value: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                (this.action = t.action),
                                    (this.container = t.container),
                                    (this.emitter = t.emitter),
                                    (this.target = t.target),
                                    (this.text = t.text),
                                    (this.trigger = t.trigger),
                                    (this.selectedText = '');
                            }
                        },
                        {
                            key: 'initSelection',
                            value: function () {
                                this.text ? this.selectFake() : this.target && this.selectTarget();
                            }
                        },
                        {
                            key: 'selectFake',
                            value: function () {
                                var t = this,
                                    e = 'rtl' == document.documentElement.getAttribute('dir');
                                this.removeFake(),
                                    (this.fakeHandlerCallback = function () {
                                        return t.removeFake();
                                    }),
                                    (this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || !0),
                                    (this.fakeElem = document.createElement('textarea')),
                                    (this.fakeElem.style.fontSize = '12pt'),
                                    (this.fakeElem.style.border = '0'),
                                    (this.fakeElem.style.padding = '0'),
                                    (this.fakeElem.style.margin = '0'),
                                    (this.fakeElem.style.position = 'absolute'),
                                    (this.fakeElem.style[e ? 'right' : 'left'] = '-9999px');
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                (this.fakeElem.style.top = n + 'px'),
                                    this.fakeElem.setAttribute('readonly', ''),
                                    (this.fakeElem.value = this.text),
                                    this.container.appendChild(this.fakeElem),
                                    (this.selectedText = (0, c.default)(this.fakeElem)),
                                    this.copyText();
                            }
                        },
                        {
                            key: 'removeFake',
                            value: function () {
                                this.fakeHandler &&
                                    (this.container.removeEventListener('click', this.fakeHandlerCallback),
                                    (this.fakeHandler = null),
                                    (this.fakeHandlerCallback = null)),
                                    this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                            }
                        },
                        {
                            key: 'selectTarget',
                            value: function () {
                                (this.selectedText = (0, c.default)(this.target)), this.copyText();
                            }
                        },
                        {
                            key: 'copyText',
                            value: function () {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action);
                                } catch (t) {
                                    e = !1;
                                }
                                this.handleResult(e);
                            }
                        },
                        {
                            key: 'handleResult',
                            value: function (t) {
                                this.emitter.emit(t ? 'success' : 'error', {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                });
                            }
                        },
                        {
                            key: 'clearSelection',
                            value: function () {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                            }
                        },
                        {
                            key: 'destroy',
                            value: function () {
                                this.removeFake();
                            }
                        },
                        {
                            key: 'action',
                            set: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'copy';
                                if (((this._action = t), 'copy' !== this._action && 'cut' !== this._action))
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            },
                            get: function () {
                                return this._action;
                            }
                        },
                        {
                            key: 'target',
                            set: function (t) {
                                if (void 0 !== t) {
                                    if (!t || 'object' !== (void 0 === t ? 'undefined' : r(t)) || 1 !== t.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ('copy' === this.action && t.hasAttribute('disabled'))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ('cut' === this.action && (t.hasAttribute('readonly') || t.hasAttribute('disabled')))
                                        throw new Error(
                                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                        );
                                    this._target = t;
                                }
                            },
                            get: function () {
                                return this._target;
                            }
                        }
                    ]),
                    e
                );
            })();
            t.exports = u;
        },
        function (t, e) {
            t.exports = function (t) {
                var e;
                if ('SELECT' === t.nodeName) t.focus(), (e = t.value);
                else if ('INPUT' === t.nodeName || 'TEXTAREA' === t.nodeName) {
                    var n = t.hasAttribute('readonly');
                    n || t.setAttribute('readonly', ''), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute('readonly'), (e = t.value);
                } else {
                    t.hasAttribute('contenteditable') && t.focus();
                    var o = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), (e = o.toString());
                }
                return e;
            };
        },
        function (t, e) {
            function n() {}
            (n.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
                },
                once: function (t, e, n) {
                    var o = this;
                    function r() {
                        o.off(t, r), e.apply(n, arguments);
                    }
                    return (r._ = e), this.on(t, r, n);
                },
                emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this;
                },
                off: function (t, e) {
                    var n = this.e || (this.e = {}),
                        o = n[t],
                        r = [];
                    if (o && e) for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? (n[t] = r) : delete n[t], this;
                }
            }),
                (t.exports = n);
        },
        function (t, e, n) {
            var d = n(5),
                h = n(6);
            t.exports = function (t, e, n) {
                if (!t && !e && !n) throw new Error('Missing required arguments');
                if (!d.string(e)) throw new TypeError('Second argument must be a String');
                if (!d.fn(n)) throw new TypeError('Third argument must be a Function');
                if (d.node(t))
                    return (
                        (s = e),
                        (f = n),
                        (l = t).addEventListener(s, f),
                        {
                            destroy: function () {
                                l.removeEventListener(s, f);
                            }
                        }
                    );
                if (d.nodeList(t))
                    return (
                        (a = t),
                        (c = e),
                        (u = n),
                        Array.prototype.forEach.call(a, function (t) {
                            t.addEventListener(c, u);
                        }),
                        {
                            destroy: function () {
                                Array.prototype.forEach.call(a, function (t) {
                                    t.removeEventListener(c, u);
                                });
                            }
                        }
                    );
                if (d.string(t)) return (o = t), (r = e), (i = n), h(document.body, o, r, i);
                throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                var o, r, i, a, c, u, l, s, f;
            };
        },
        function (t, n) {
            (n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
            }),
                (n.nodeList = function (t) {
                    var e = Object.prototype.toString.call(t);
                    return void 0 !== t && ('[object NodeList]' === e || '[object HTMLCollection]' === e) && 'length' in t && (0 === t.length || n.node(t[0]));
                }),
                (n.string = function (t) {
                    return 'string' == typeof t || t instanceof String;
                }),
                (n.fn = function (t) {
                    return '[object Function]' === Object.prototype.toString.call(t);
                });
        },
        function (t, e, n) {
            var a = n(7);
            function i(t, e, n, o, r) {
                var i = function (e, n, t, o) {
                    return function (t) {
                        (t.delegateTarget = a(t.target, n)), t.delegateTarget && o.call(e, t);
                    };
                }.apply(this, arguments);
                return (
                    t.addEventListener(n, i, r),
                    {
                        destroy: function () {
                            t.removeEventListener(n, i, r);
                        }
                    }
                );
            }
            t.exports = function (t, e, n, o, r) {
                return 'function' == typeof t.addEventListener
                    ? i.apply(null, arguments)
                    : 'function' == typeof n
                    ? i.bind(null, document).apply(null, arguments)
                    : ('string' == typeof t && (t = document.querySelectorAll(t)),
                      Array.prototype.map.call(t, function (t) {
                          return i(t, e, n, o, r);
                      }));
            };
        },
        function (t, e) {
            if ('undefined' != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
            }
            t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType; ) {
                    if ('function' == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode;
                }
            };
        }
    ]);
});
```

---

---

# Prism.js

      ```js
      /* PrismJS 1.16.0

https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript&plugins=toolbar+copy-to-clipboard _/
var \_self = 'undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
Prism = (function (g) {
var c = /\blang(?:uage)?-([\w-]+)\b/i,
a = 0,
C = {
manual: g.Prism && g.Prism.manual,
disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
util: {
encode: function (e) {
return e instanceof M
? new M(e.type, C.util.encode(e.content), e.alias)
: Array.isArray(e)
? e.map(C.util.encode)
: e
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/\u00a0/g, ' ');
},
type: function (e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function (e) {
return e.**id || Object.defineProperty(e, '**id', { value: ++a }), e.\_\_id;
},
clone: function n(e, t) {
var r,
a,
i = C.util.type(e);
switch (((t = t || {}), i)) {
case 'Object':
if (((a = C.util.objId(e)), t[a])) return t[a];
for (var l in ((r = {}), (t[a] = r), e)) e.hasOwnProperty(l) && (r[l] = n(e[l], t));
return r;
case 'Array':
return (
(a = C.util.objId(e)),
t[a]
? t[a]
: ((r = []),
(t[a] = r),
e.forEach(function (e, a) {
r[a] = n(e, t);
}),
r)
);
default:
return e;
}
}
},
languages: {
extend: function (e, a) {
var n = C.util.clone(C.languages[e]);
for (var t in a) n[t] = a[t];
return n;
},
insertBefore: function (n, e, a, t) {
var r = (t = t || C.languages)[n],
i = {};
for (var l in r)
if (r.hasOwnProperty(l)) {
if (l == e) for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
a.hasOwnProperty(l) || (i[l] = r[l]);
}
var s = t[n];
return (
(t[n] = i),
C.languages.DFS(C.languages, function (e, a) {
a === s && e != n && (this[e] = i);
}),
i
);
},
DFS: function e(a, n, t, r) {
r = r || {};
var i = C.util.objId;
for (var l in a)
if (a.hasOwnProperty(l)) {
n.call(a, l, a[l], t || l);
var o = a[l],
s = C.util.type(o);
'Object' !== s || r[i(o)] ? 'Array' !== s || r[i(o)] || ((r[i(o)] = !0), e(o, n, l, r)) : ((r[i(o)] = !0), e(o, n, null, r));
}
}
},
plugins: {},
highlightAll: function (e, a) {
C.highlightAllUnder(document, e, a);
},
highlightAllUnder: function (e, a, n) {
var t = {
callback: n,
selector: 'code[class_="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
C.hooks.run('before-highlightall', t);
for (var r, i = t.elements || e.querySelectorAll(t.selector), l = 0; (r = i[l++]); ) C.highlightElement(r, !0 === a, t.callback);
},
highlightElement: function (e, a, n) {
for (var t, r = 'none', i = e; i && !c.test(i.className); ) i = i.parentNode;
i && ((r = (i.className.match(c) || [, 'none'])[1].toLowerCase()), (t = C.languages[r])),
(e.className = e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r),
e.parentNode &&
((i = e.parentNode), /pre/i.test(i.nodeName) && (i.className = i.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r));
var l = { element: e, language: r, grammar: t, code: e.textContent },
o = function (e) {
(l.highlightedCode = e),
C.hooks.run('before-insert', l),
(l.element.innerHTML = l.highlightedCode),
C.hooks.run('after-highlight', l),
C.hooks.run('complete', l),
n && n.call(l.element);
};
if ((C.hooks.run('before-sanity-check', l), l.code))
if ((C.hooks.run('before-highlight', l), l.grammar))
if (a && g.Worker) {
var s = new Worker(C.filename);
(s.onmessage = function (e) {
o(e.data);
}),
s.postMessage(
JSON.stringify({
language: l.language,
code: l.code,
immediateClose: !0
})
);
} else o(C.highlight(l.code, l.grammar, l.language));
else o(C.util.encode(l.code));
else C.hooks.run('complete', l);
},
highlight: function (e, a, n) {
var t = { code: e, grammar: a, language: n };
return (
C.hooks.run('before-tokenize', t),
(t.tokens = C.tokenize(t.code, t.grammar)),
C.hooks.run('after-tokenize', t),
M.stringify(C.util.encode(t.tokens), t.language)
);
},
matchGrammar: function (e, a, n, t, r, i, l) {
for (var o in n)
if (n.hasOwnProperty(o) && n[o]) {
if (o == l) return;
var s = n[o];
s = 'Array' === C.util.type(s) ? s : [s];
for (var g = 0; g < s.length; ++g) {
var c = s[g],
u = c.inside,
h = !!c.lookbehind,
f = !!c.greedy,
d = 0,
m = c.alias;
if (f && !c.pattern.global) {
var p = c.pattern.toString().match(/[imuy]_$/)[0];
c.pattern = RegExp(c.pattern.source, p + 'g');
}
c = c.pattern || c;
for (var y = t, v = r; y < a.length; v += a[y].length, ++y) {
var k = a[y];
if (a.length > e.length) return;
if (!(k instanceof M)) {
if (f && y != a.length - 1) {
if (((c.lastIndex = v), !(x = c.exec(e)))) break;
for (
var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length;
A < O && (P < w || (!a[A].type && !a[A - 1].greedy));
++A
)
(P += a[A].length) <= b && (++y, (v = P));
if (a[y] instanceof M) continue;
(N = A - y), (k = e.slice(v, P)), (x.index -= v);
} else {
c.lastIndex = 0;
var x = c.exec(k),
N = 1;
}
if (x) {
h && (d = x[1] ? x[1].length : 0);
w = (b = x.index + d) + (x = x[0].slice(d)).length;
var j = k.slice(0, b),
S = k.slice(w),
E = [y, N];
j && (++y, (v += j.length), E.push(j));
var * = new M(o, u ? C.tokenize(x, u) : x, m, x, f);
if (
(E.push(*),
S && E.push(S),
Array.prototype.splice.apply(a, E),
1 != N && C.matchGrammar(e, a, n, y, v, !0, o),
i)
)
break;
} else if (i) break;
}
}
}
}
},
tokenize: function (e, a) {
var n = [e],
t = a.rest;
if (t) {
for (var r in t) a[r] = t[r];
delete a.rest;
}
return C.matchGrammar(e, n, a, 0, 0, !1), n;
},
hooks: {
all: {},
add: function (e, a) {
var n = C.hooks.all;
(n[e] = n[e] || []), n[e].push(a);
},
run: function (e, a) {
var n = C.hooks.all[e];
if (n && n.length) for (var t, r = 0; (t = n[r++]); ) t(a);
}
},
Token: M
};
function M(e, a, n, t, r) {
(this.type = e), (this.content = a), (this.alias = n), (this.length = 0 | (t || '').length), (this.greedy = !!r);
}
if (
((g.Prism = C),
(M.stringify = function (e, a) {
if ('string' == typeof e) return e;
if (Array.isArray(e))
return e
.map(function (e) {
return M.stringify(e, a);
})
.join('');
var n = {
type: e.type,
content: M.stringify(e.content, a),
tag: 'span',
classes: ['token', e.type],
attributes: {},
language: a
};
if (e.alias) {
var t = Array.isArray(e.alias) ? e.alias : [e.alias];
Array.prototype.push.apply(n.classes, t);
}
C.hooks.run('wrap', n);
var r = Object.keys(n.attributes)
.map(function (e) {
return e + '="' + (n.attributes[e] || '').replace(/"/g, '&quot;') + '"';
})
.join(' ');
return '<' + n.tag + ' class="' + n.classes.join(' ') + '"' + (r ? ' ' + r : '') + '>' + n.content + '</' + n.tag + '>';
}),
!g.document)
)
return (
g.addEventListener &&
(C.disableWorkerMessageHandler ||
g.addEventListener(
'message',
function (e) {
var a = JSON.parse(e.data),
n = a.language,
t = a.code,
r = a.immediateClose;
g.postMessage(C.highlight(t, C.languages[n], n)), r && g.close();
},
!1
)),
C
);
var e = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop();
return (
e &&
((C.filename = e.src),
C.manual ||
e.hasAttribute('data-manual') ||
('loading' !== document.readyState
? window.requestAnimationFrame
? window.requestAnimationFrame(C.highlightAll)
: window.setTimeout(C.highlightAll, 16)
: document.addEventListener('DOMContentLoaded', C.highlightAll))),
C
);
})(\_self);
'undefined' != typeof module && module.exports && (module.exports = Prism), 'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
comment: /<!--[\s\S]_?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]_?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s_[^\s>\/=]+(?:\s*=\s*(?:"[^"]_"|'[^']_'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
},
'attr-value': {
pattern: /=\s*(?:"[^"]_"|'[^']_'|[^\s'">=]+)/i,
inside: {
punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }]
                }
            },
            punctuation: /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}),
    (Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity),
    Prism.hooks.add('wrap', function (a) {
        'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        value: function (a, e) {
            var s = {};
            (s['language-' + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: Prism.languages[e]
}),
(s.cdata = /^<!\[CDATA\[|\]\]>$/i);
var n = {
'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s }
};
n['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
var i = {};
(i[a] = {
pattern: RegExp('(<**[\\s\\S]_?>)(?:<!\\[CDATA\\[[\\s\\S]_?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/**>)'.replace(/**/g, a), 'i'),
lookbehind: !0,
greedy: !0,
inside: n
}),
Prism.languages.insertBefore('markup', 'cdata', i);
}
}),
(Prism.languages.xml = Prism.languages.extend('markup', {})),
(Prism.languages.html = Prism.languages.markup),
(Prism.languages.mathml = Prism.languages.markup),
(Prism.languages.svg = Prism.languages.markup);
!(function (s) {
var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])_\1/;
(s.languages.css = {
comment: /\/\*[\s\S]_?\*\//,
atrule: {
pattern: /@[\w-]+[\s\S]_?(?:;|(?=\s_\{))/,
inside: { rule: /@[\w-]+/ }
},
url: {
pattern: RegExp('url\\((?:' + t.source + '|[^\n\r()]_)\\)', 'i'),
inside: { function: /^url/i, punctuation: /^\(|\)$/ }
},
selector: RegExp('[^{}\\s](?:[^{};"\']|' + t.source + ')_?(?=\\s*\\{)'),
string: { pattern: t, greedy: !0 },
property: /[-\_a-z\xA0-\uFFFF][-\w\xa0-\uffff]*(?=\s*:)/i,
important: /!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:,]/
}),
(s.languages.css.atrule.inside.rest = s.languages.css);
var e = s.languages.markup;
e &&
(e.tag.addInlined('style', 'css'),
s.languages.insertBefore(
'inside',
'attr-value',
{
'style-attr': {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
inside: {
'attr-name': { pattern: /^\s*style/i, inside: e.tag.inside },
punctuation: /^\s*=\s*['"]|['"]\s*$/,
'attr-value': { pattern: /.+/i, inside: s.languages.css }
},
alias: 'language-css'
}
},
e.tag
));
})(Prism);
Prism.languages.clike = {
comment: [
{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    'class-name': {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
        Prism.languages.clike['class-name'],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])[\_$A-Z\xA0-\uFFFF][$\w\xa0-\uffff]_(?=\.(?:prototype|constructor))/,
lookbehind: !0
}
],
keyword: [
{ pattern: /((?:^|})\s_)(?:catch|finally)\b/, lookbehind: !0 },
{
pattern:
/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
}
],
number: /\b(?:(?:0[xX](<?:[\dA-Fa-f](?:_[\dA-Fa-f])?>)+|0[bB](<?:[01](?:_[01])?>)+|0[oO](<?:[0-7](?:_[0-7])?>)+)n?|(?:\d(?:*\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:\_\d)?)_|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
function: /[\_$a-zA-Z\xA0-\uFFFF][$\w\xa0-\uffff]_(?=\s_(?:\.\s*(?:apply|bind|call)\s*)?\()/,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
})),
(Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
Prism.languages.insertBefore('javascript', 'keyword', {
regex: {
pattern: /((?:^|[^$\w\xa0-\uffff."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0
        },
        'function-variable': {
            pattern:
                /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))_\)|[\_$a-zA-Z\xA0-\uFFFF][$\w\xa0-\uffff]_)\s*=>))/,
alias: 'function'
},
parameter: [
{
pattern: /(function(?:\s+[\_$A-Za-z\xA0-\uFFFF][$\w\xa0-\uffff]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]_\))+?(?=\s_\))/,
lookbehind: !0,
inside: Prism.languages.javascript
},
{
pattern: /[\_$a-z\xA0-\uFFFF][$\w\xa0-\uffff]_(?=\s_=>)/i,
inside: Prism.languages.javascript
},
{
pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: Prism.languages.javascript
},
{
pattern:
/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[\_$A-Za-z\xA0-\uFFFF][$\w\xa0-\uffff]_\s_)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
}
],
constant: /\b[A-Z](?:[A-Z_]|\dx?)_\b/
}),
Prism.languages.insertBefore('javascript', 'string', {
'template-string': {
pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]_})_})+}|[^\\`])_`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${(?:[^{}]|{(?:[^{}]|{[^}]_})_})+}/,
inside: {
'interpolation-punctuation': {
pattern: /^\${|}$/,
alias: 'punctuation'
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
}
}),
Prism.languages.markup && Prism.languages.markup.tag.addInlined('script', 'javascript'),
(Prism.languages.js = Prism.languages.javascript);
!(function () {
if ('undefined' != typeof self && self.Prism && self.document) {
var r = [],
i = {},
n = function () {};
Prism.plugins.toolbar = {};
var t = (Prism.plugins.toolbar.registerButton = function (t, n) {
var e;
(e =
'function' == typeof n
? n
: function (t) {
var e;
return (
'function' == typeof n.onClick
? (((e = document.createElement('button')).type = 'button'),
e.addEventListener('click', function () {
n.onClick.call(this, t);
}))
: 'string' == typeof n.url
? ((e = document.createElement('a')).href = n.url)
: (e = document.createElement('span')),
(e.textContent = n.text),
e
);
}),
t in i ? console.warn('There is a button with the key "' + t + '" registered already.') : r.push((i[t] = e));
}),
e = (Prism.plugins.toolbar.hook = function (a) {
var t = a.element.parentNode;
if (t && /pre/i.test(t.nodeName) && !t.parentNode.classList.contains('code-toolbar')) {
var e = document.createElement('div');
e.classList.add('code-toolbar'), t.parentNode.insertBefore(e, t), e.appendChild(t);
var o = document.createElement('div');
o.classList.add('toolbar'),
document.body.hasAttribute('data-toolbar-order') &&
(r = document.body
.getAttribute('data-toolbar-order')
.split(',')
.map(function (t) {
return i[t] || n;
})),
r.forEach(function (t) {
var e = t(a);
if (e) {
var n = document.createElement('div');
n.classList.add('toolbar-item'), n.appendChild(e), o.appendChild(n);
}
}),
e.appendChild(o);
}
});
t('label', function (t) {
var e = t.element.parentNode;
if (e && /pre/i.test(e.nodeName) && e.hasAttribute('data-label')) {
var n,
a,
o = e.getAttribute('data-label');
try {
a = document.querySelector('template#' + o);
} catch (t) {}
return (
a
? (n = a.content)
: (e.hasAttribute('data-url')
? ((n = document.createElement('a')).href = e.getAttribute('data-url'))
: (n = document.createElement('span')),
(n.textContent = o)),
n
);
}
}),
Prism.hooks.add('complete', e);
}
})();
!(function () {
if ('undefined' != typeof self && self.Prism && self.document)
if (Prism.plugins.toolbar) {
var r = window.ClipboardJS || void 0;
r || 'function' != typeof require || (r = require('clipboard'));
var i = [];
if (!r) {
var o = document.createElement('script'),
e = document.querySelector('head');
(o.onload = function () {
if ((r = window.ClipboardJS)) for (; i.length; ) i.pop()();
}),
(o.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js'),
e.appendChild(o);
}
Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (e) {
var t = document.createElement('a');
return (t.textContent = 'Copy'), r ? o() : i.push(o), t;
function o() {
var o = new r(t, {
text: function () {
return e.code;
}
});
o.on('success', function () {
(t.textContent = 'Copied'), n();
}),
o.on('error', function () {
(t.textContent = 'Press Ctrl+C to copy'), n();
});
}
function n() {
setTimeout(function () {
t.textContent = 'Copy';
}, 5e3);
}
});
} else console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
})();
/_ PrismJS 1.24.1
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript _/
var \_self = 'undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
Prism = (function (u) {
var c = /\blang(?:uage)?-([\w-]+)\b/i,
n = 0,
e = {},
M = {
manual: u.Prism && u.Prism.manual,
disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
util: {
encode: function e(n) {
return n instanceof W
? new W(n.type, e(n.content), n.alias)
: Array.isArray(n)
? n.map(e)
: n
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/\u00a0/g, ' ');
},
type: function (e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function (e) {
return e.**id || Object.defineProperty(e, '**id', { value: ++n }), e.**id;
},
clone: function t(e, r) {
var a, n;
switch (((r = r || {}), M.util.type(e))) {
case 'Object':
if (((n = M.util.objId(e)), r[n])) return r[n];
for (var i in ((a = {}), (r[n] = a), e)) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
return a;
case 'Array':
return (
(n = M.util.objId(e)),
r[n]
? r[n]
: ((a = []),
(r[n] = a),
e.forEach(function (e, n) {
a[n] = t(e, r);
}),
a)
);
default:
return e;
}
},
getLanguage: function (e) {
for (; e && !c.test(e.className); ) e = e.parentElement;
return e ? (e.className.match(c) || [, 'none'])[1].toLowerCase() : 'none';
},
currentScript: function () {
if ('undefined' == typeof document) return null;
if ('currentScript' in document) return document.currentScript;
try {
throw new Error();
} catch (e) {
var n = (/at [^(\r\n]_\((._):.+:.+\)$/i.exec(e.stack) || [])[1];
                            if (n) {
                                var t = document.getElementsByTagName('script');
                                for (var r in t) if (t[r].src == n) return t[r];
                            }
                            return null;
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = 'no-' + n; e; ) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement;
                        }
                        return !!t;
                    }
                },
                languages: {
                    plain: e,
                    plaintext: e,
                    text: e,
                    txt: e,
                    extend: function (e, n) {
                        var t = M.util.clone(M.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t;
                    },
                    insertBefore: function (t, e, n, r) {
                        var a = (r = r || M.languages)[t],
                            i = {};
                        for (var l in a)
                            if (a.hasOwnProperty(l)) {
                                if (l == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                                n.hasOwnProperty(l) || (i[l] = a[l]);
                            }
                        var s = r[t];
                        return (
                            (r[t] = i),
                            M.languages.DFS(M.languages, function (e, n) {
                                n === s && e != t && (this[e] = i);
                            }),
                            i
                        );
                    },
                    DFS: function e(n, t, r, a) {
                        a = a || {};
                        var i = M.util.objId;
                        for (var l in n)
                            if (n.hasOwnProperty(l)) {
                                t.call(n, l, n[l], r || l);
                                var o = n[l],
                                    s = M.util.type(o);
                                'Object' !== s || a[i(o)] ? 'Array' !== s || a[i(o)] || ((a[i(o)] = !0), e(o, t, l, a)) : ((a[i(o)] = !0), e(o, t, null, a));
                            }
                    }
                },
                plugins: {},
                highlightAll: function (e, n) {
                    M.highlightAllUnder(document, e, n);
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    M.hooks.run('before-highlightall', r),
                        (r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))),
                        M.hooks.run('before-all-elements-highlight', r);
                    for (var a, i = 0; (a = r.elements[i++]); ) M.highlightElement(a, !0 === n, r.callback);
                },
                highlightElement: function (e, n, t) {
                    var r = M.util.getLanguage(e),
                        a = M.languages[r];
                    e.className = e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r;
                    var i = e.parentElement;
                    i && 'pre' === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r);
                    var l = { element: e, language: r, grammar: a, code: e.textContent };
                    function o(e) {
                        (l.highlightedCode = e),
                            M.hooks.run('before-insert', l),
                            (l.element.innerHTML = l.highlightedCode),
                            M.hooks.run('after-highlight', l),
                            M.hooks.run('complete', l),
                            t && t.call(l.element);
                    }
                    if (
                        (M.hooks.run('before-sanity-check', l),
                        (i = l.element.parentElement) && 'pre' === i.nodeName.toLowerCase() && !i.hasAttribute('tabindex') && i.setAttribute('tabindex', '0'),
                        !l.code)
                    )
                        return M.hooks.run('complete', l), void (t && t.call(l.element));
                    if ((M.hooks.run('before-highlight', l), l.grammar))
                        if (n && u.Worker) {
                            var s = new Worker(M.filename);
                            (s.onmessage = function (e) {
                                o(e.data);
                            }),
                                s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 }));
                        } else o(M.highlight(l.code, l.grammar, l.language));
                    else o(M.util.encode(l.code));
                },
                highlight: function (e, n, t) {
                    var r = { code: e, grammar: n, language: t };
                    return (
                        M.hooks.run('before-tokenize', r),
                        (r.tokens = M.tokenize(r.code, r.grammar)),
                        M.hooks.run('after-tokenize', r),
                        W.stringify(M.util.encode(r.tokens), r.language)
                    );
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest;
                    }
                    var a = new i();
                    return (
                        I(a, a.head, e),
                        (function e(n, t, r, a, i, l) {
                            for (var o in r)
                                if (r.hasOwnProperty(o) && r[o]) {
                                    var s = r[o];
                                    s = Array.isArray(s) ? s : [s];
                                    for (var u = 0; u < s.length; ++u) {
                                        if (l && l.cause == o + ',' + u) return;
                                        var c = s[u],
                                            g = c.inside,
                                            f = !!c.lookbehind,
                                            h = !!c.greedy,
                                            d = c.alias;
                                        if (h && !c.pattern.global) {
                                            var p = c.pattern.toString().match(/[imsuy]*$/)[0];
c.pattern = RegExp(c.pattern.source, p + 'g');
}
for (var v = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
var b = m.value;
if (t.length > n.length) return;
if (!(b instanceof W)) {
var k,
x = 1;
if (h) {
if (!(k = z(v, y, n, f))) break;
var w = k.index,
A = k.index + k[0].length,
P = y;
for (P += m.value.length; P <= w; ) (m = m.next), (P += m.value.length);
if (((P -= m.value.length), (y = P), m.value instanceof W)) continue;
for (var E = m; E !== t.tail && (P < A || 'string' == typeof E.value); E = E.next)
x++, (P += E.value.length);
x--, (b = n.slice(y, P)), (k.index -= y);
} else if (!(k = z(v, 0, b, f))) continue;
var w = k.index,
S = k[0],
O = b.slice(0, w),
L = b.slice(w + S.length),
N = y + b.length;
l && N > l.reach && (l.reach = N);
var j = m.prev;
O && ((j = I(t, j, O)), (y += O.length)), q(t, j, x);
var C = new W(o, g ? M.tokenize(S, g) : S, d, S);
if (((m = I(t, j, C)), L && I(t, m, L), 1 < x)) {
var _ = { cause: o + ',' + u, reach: N };
e(n, t, r, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach);
}
}
}
}
}
})(e, a, n, a.head, 0),
(function (e) {
var n = [],
t = e.head.next;
for (; t !== e.tail; ) n.push(t.value), (t = t.next);
return n;
})(a)
);
},
hooks: {
all: {},
add: function (e, n) {
var t = M.hooks.all;
(t[e] = t[e] || []), t[e].push(n);
},
run: function (e, n) {
var t = M.hooks.all[e];
if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n);
}
},
Token: W
};
function W(e, n, t, r) {
(this.type = e), (this.content = n), (this.alias = t), (this.length = 0 | (r || '').length);
}
function z(e, n, t, r) {
e.lastIndex = n;
var a = e.exec(t);
if (a && r && a[1]) {
var i = a[1].length;
(a.index += i), (a[0] = a[0].slice(i));
}
return a;
}
function i() {
var e = { value: null, prev: null, next: null },
n = { value: null, prev: e, next: null };
(e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
}
function I(e, n, t) {
var r = n.next,
a = { value: t, prev: n, next: r };
return (n.next = a), (r.prev = a), e.length++, a;
}
function q(e, n, t) {
for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
((n.next = r).prev = n), (e.length -= a);
}
if (
((u.Prism = M),
(W.stringify = function n(e, t) {
if ('string' == typeof e) return e;
if (Array.isArray(e)) {
var r = '';
return (
e.forEach(function (e) {
r += n(e, t);
}),
r
);
}
var a = { type: e.type, content: n(e.content, t), tag: 'span', classes: ['token', e.type], attributes: {}, language: t },
i = e.alias;
i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run('wrap', a);
var l = '';
for (var o in a.attributes) l += ' ' + o + '="' + (a.attributes[o] || '').replace(/"/g, '&quot;') + '"';
return '<' + a.tag + ' class="' + a.classes.join(' ') + '"' + l + '>' + a.content + '</' + a.tag + '>';
}),
!u.document)
)
return (
u.addEventListener &&
(M.disableWorkerMessageHandler ||
u.addEventListener(
'message',
function (e) {
var n = JSON.parse(e.data),
t = n.language,
r = n.code,
a = n.immediateClose;
u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close();
},
!1
)),
M
);
var t = M.util.currentScript();
function r() {
M.manual || M.highlightAll();
}
if ((t && ((M.filename = t.src), t.hasAttribute('data-manual') && (M.manual = !0)), !M.manual)) {
var a = document.readyState;
'loading' === a || ('interactive' === a && t && t.defer)
? document.addEventListener('DOMContentLoaded', r)
: window.requestAnimationFrame
? window.requestAnimationFrame(r)
: window.setTimeout(r, 16);
}
return M;
})(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism), 'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: {
pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
greedy: !0,
inside: {
'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
punctuation: /^<!|>$|[[\]]/,
'doctype-tag': /^DOCTYPE/,
name: /[^\s<>'"]+/
}
},
cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
greedy: !0,
inside: {
tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
'special-attr': [],
'attr-value': { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] } },
punctuation: /\/?>/,
'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
}
},
entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
}),
(Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity),
(Prism.languages.markup.doctype.inside['internal-subset'].inside = Prism.languages.markup),
Prism.hooks.add('wrap', function (a) {
'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
}),
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
value: function (a, e) {
var s = {};
(s['language-' + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
var t = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
t['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
var n = {};
(n[a] = {
pattern: RegExp(
'(<**[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])\*?(?=</**>)'.replace(/\_\_/g, function () {
return a;
}),
'i'
),
lookbehind: !0,
greedy: !0,
inside: t
}),
Prism.languages.insertBefore('markup', 'cdata', n);
}
}),
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
value: function (a, e) {
Prism.languages.markup.tag.inside['special-attr'].push({
pattern: RegExp('(^|["\'\\s])(?:' + a + ')\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s\'">=]+(?=[\\s>]))', 'i'),
lookbehind: !0,
inside: {
'attr-name': /^[^\s=]+/,
'attr-value': {
pattern: /=[\s\S]+/,
inside: {
value: {
pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, 'language-' + e],
                                inside: Prism.languages[e]
                            },
                            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
                        }
                    }
                }
            });
        }
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend('markup', {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: 'selector'
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
            }
        },
        url: {
            pattern: RegExp('\\burl\\((?:' + e.source + '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)', 'i'),
            greedy: !0,
            inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' } }
        },
        selector: { pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + e.source + ')*(?=\\s*\\{)'), lookbehind: !0 },
        string: { pattern: e, greedy: !0 },
        property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 },
        important: /!important\b/i,
        function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
        punctuation: /[(){};:,]/
    }),
        (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
})(Prism);
Prism.languages.clike = {
    comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
],
string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
'class-name': {
pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
lookbehind: !0,
inside: { punctuation: /[.\\]/ }
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /\b\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
punctuation: /[{}[\];(),.:]/
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
'class-name': [
Prism.languages.clike['class-name'],
{ pattern: /(^|[^$\w\xa0-\uffff])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])_(?=\.(?:prototype|constructor))/, lookbehind: !0 }
],
keyword: [
{ pattern: /((?:^|\})\s_)catch\b/, lookbehind: !0 },
{
pattern:
/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
number: /\b(?:(?:0[xX](<?:[\dA-Fa-f](?:_[\dA-Fa-f])?>)+|0[bB](<?:[01](?:_[01])?>)+|0[oO](<?:[0-7](?:_[0-7])?>)+)n?|(?:\d(?:*\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:\_\d)?)_|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
})),
(Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
Prism.languages.insertBefore('javascript', 'keyword', {
regex: {
pattern:
/((?:^|[^$\w\xa0-\uffff."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))_\*\/)_(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                'regex-source': { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: 'language-regex', inside: Prism.languages.regex },
'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/
}
},
'function-variable': {
pattern:
/#?(?!\s)[\_$a-zA-Z\xA0-\uFFFF](<?:(?!\s)[$\w\xA0-\uFFFF]>)_(?=\s_[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]_\))_\)|(?!\s)[\_$a-zA-Z\xA0-\uFFFF](<?:(?!\s)[$\w\xA0-\uFFFF]>)_)\s_=>))/,
alias: 'function'
},
parameter: [
{
pattern: /(function(?:\s+(?!\s)[\_$a-zA-Z\xA0-\uFFFF](<?:(?!\s)[$\w\xA0-\uFFFF]>)_)?\s_\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
lookbehind: !0,
inside: Prism.languages.javascript
},
{
pattern: /(^|[^$\w\xa0-\uffff])(?!\s)[\_$a-z\xA0-\uFFFF](<?:(?!\s)[$\w\xA0-\uFFFF]>)*(?=\s*=>)/i,
lookbehind: !0,
inside: Prism.languages.javascript
},
{ pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]_\))+(?=\s_\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript },
{
pattern:
/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[\_$a-zA-Z\xA0-\uFFFF](<?:(?!\s)[$\w\xA0-\uFFFF]>)*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]_\))+(?=\s_\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
}
],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}),
Prism.languages.insertBefore('javascript', 'string', {
hashbang: { pattern: /^#!._/, greedy: !0, alias: 'comment' },
'template-string': {
pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]_\})_\})+\}|(?!\$\{)[^\\`])_`/, greedy: !0, inside: { 'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: { 'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' }, rest: Prism.languages.javascript }
},
string: /[\s\S]+/
}
}
}),
Prism.languages.markup &&
(Prism.languages.markup.tag.addInlined('script', 'javascript'),
Prism.languages.markup.tag.addAttribute(
'on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)',
'javascript'
)),
(Prism.languages.js = Prism.languages.javascript);

```

```
