<<<<<<< HEAD
<<<<<<< HEAD
(function(opts_) {
=======
(function (opts_) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
    /*

      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
     */
    var g = this || self,
        k = function(a, b) {
=======
(function (opts_) {
    /*
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
    var g = this || self,
        k = function (a, b) {
<<<<<<< HEAD
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            function d() {}
            d.prototype = b.prototype;
            a.l = b.prototype;
            a.prototype = new d();
            a.prototype.constructor = a;
<<<<<<< HEAD
<<<<<<< HEAD
            a.j = function(e, c, f) {
=======
            a.j = function (e, c, f) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
            a.j = function (e, c, f) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
                for (var h = Array(arguments.length - 2), q = 2; q < arguments.length; q++) h[q - 2] = arguments[q];
                return b.prototype[c].apply(e, h);
            };
        },
<<<<<<< HEAD
<<<<<<< HEAD
        l = function(a) {
=======
        l = function (a) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
            return a;
        };

=======
        l = function (a) {
            return a;
        };
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
    function m(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, m);
        else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    }
    k(m, Error);
    m.prototype.name = 'CustomError';
<<<<<<< HEAD
<<<<<<< HEAD
    var n = function(a, b) {
=======
    var n = function (a, b) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
    var n = function (a, b) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        a = a.split('%s');
        for (var d = '', e = a.length - 1, c = 0; c < e; c++) d += a[c] + (c < b.length ? b[c] : '%s');
        m.call(this, d + a[e]);
    };
    k(n, m);
    n.prototype.name = 'AssertionError';
<<<<<<< HEAD
<<<<<<< HEAD
    var p = function(a, b, d) {
=======
    var p = function (a, b, d) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
    var p = function (a, b, d) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            if (!a) {
                var e = 'Assertion failed';
                if (b) {
                    e += ': ' + b;
                    var c = Array.prototype.slice.call(arguments, 2);
                }
                throw new n('' + e, c || []);
            }
        },
<<<<<<< HEAD
<<<<<<< HEAD
        r = function(a, b) {
            throw new n('Failure' + (a ? ': ' + a : ''), Array.prototype.slice.call(arguments, 1));
        };
    var t;
    var w = function(a, b) {
        this.h = (a === u && b) || '';
        this.i = v;
    };
    w.prototype.toString = function() {
        return 'Const{' + this.h + '}';
    };
    var x = function(a) {
=======
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        r = function (a, b) {
            throw new n('Failure' + (a ? ': ' + a : ''), Array.prototype.slice.call(arguments, 1));
        };
    var t;
    var w = function (a, b) {
        this.h = (a === u && b) || '';
        this.i = v;
    };
    w.prototype.toString = function () {
        return 'Const{' + this.h + '}';
    };
    var x = function (a) {
<<<<<<< HEAD
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            if (a instanceof w && a.constructor === w && a.i === v) return a.h;
            r("expected object of type Const, got '" + a + "'");
            return 'type_error:Const';
        },
        v = {},
        u = {};
<<<<<<< HEAD
<<<<<<< HEAD
    var z = function(a, b) {
        this.g = b === y ? a : '';
    };
    z.prototype.toString = function() {
        return this.g + '';
    };
    var A = function(a) {
=======
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
    var z = function (a, b) {
        this.g = b === y ? a : '';
    };
    z.prototype.toString = function () {
        return this.g + '';
    };
    var A = function (a) {
<<<<<<< HEAD
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            if (a instanceof z && a.constructor === z) return a.g;
            var b = typeof a;
            r("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ('object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null'));
            return 'type_error:TrustedResourceUrl';
        },
<<<<<<< HEAD
<<<<<<< HEAD
        E = function(a, b) {
            var d = x(a);
            if (!B.test(d)) throw Error('Invalid TrustedResourceUrl format: ' + d);
            a = d.replace(C, function(e, c) {
=======
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        E = function (a, b) {
            var d = x(a);
            if (!B.test(d)) throw Error('Invalid TrustedResourceUrl format: ' + d);
            a = d.replace(C, function (e, c) {
<<<<<<< HEAD
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
                if (!Object.prototype.hasOwnProperty.call(b, c))
                    throw Error('Found marker, "' + c + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                e = b[c];
                return e instanceof w ? x(e) : encodeURIComponent(String(e));
            });
            return D(a);
        },
        C = /%{(\w+)}/g,
        B = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        F = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
<<<<<<< HEAD
<<<<<<< HEAD
        J = function(a) {
=======
        J = function (a) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
        J = function (a) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            var b = G;
            a = E(H, a);
            a = A(a).toString();
            a = F.exec(a);
            var d = a[3] || '';
            return D(a[1] + I('?', a[2] || '', b) + I('#', d, void 0));
        },
        y = {},
<<<<<<< HEAD
<<<<<<< HEAD
        D = function(a) {
=======
        D = function (a) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
        D = function (a) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            if (void 0 === t) {
                var b = null;
                var d = g.trustedTypes;
                if (d && d.createPolicy)
                    try {
                        b = d.createPolicy('goog#html', {
                            createHTML: l,
                            createScript: l,
                            createScriptURL: l
                        });
                    } catch (e) {
                        g.console && g.console.error(e.message);
                    }
                t = b;
            }
            a = (b = t) ? b.createScriptURL(a) : a;
            return new z(a, y);
        },
<<<<<<< HEAD
<<<<<<< HEAD
        I = function(a, b, d) {
=======
        I = function (a, b, d) {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
        I = function (a, b, d) {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            if (null == d) return b;
            if ('string' === typeof d) return d ? a + encodeURIComponent(d) : '';
            for (var e in d)
                if (Object.prototype.hasOwnProperty.call(d, e)) {
                    var c = d[e];
                    c = Array.isArray(c) ? c : [c];
                    for (var f = 0; f < c.length; f++) {
                        var h = c[f];
                        null != h && (b || (b = a), (b += (b.length > a.length ? '&' : '') + encodeURIComponent(e) + '=' + encodeURIComponent(String(h))));
                    }
                }
            return b;
        };
    var aa = /^[\w+/_-]+[=]{0,2}$/;
    var ba = new w(u, 'https://www.google.com/cse/static/style/look/%{versionDir}%{versionSlash}%{theme}.css'),
        K = new w(u, 'https://www.google.com/cse/static/element/%{versionDir}%{versionSlash}default%{experiment}+%{lang}.css'),
        H = new w(u, 'https://www.google.com/cse/static/element/%{versionDir}%{versionSlash}cse_element__%{lang}.js'),
        L = new w(u, '/');
    window.__gcse = window.__gcse || {};
    window.__gcse.ct = Date.now();
<<<<<<< HEAD
<<<<<<< HEAD
    window.__gcse.scb = function() {
=======
    window.__gcse.scb = function () {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
    window.__gcse.scb = function () {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        var a = window.__gcse;
        M() || delete opts_.rawCss;
        var b = ca(a.initializationCallback || a.callback);
        google.search.cse.element.init(opts_) &&
<<<<<<< HEAD
<<<<<<< HEAD
            ('explicit' !== a.parsetags ?
                'complete' === document.readyState || 'interactive' === document.readyState ?
                (google.search.cse.element.go(), b && b()) :
                google.setOnLoadCallback(function() {
                    google.search.cse.element.go();
                    b && b();
                }, !0) :
                b && b());
=======
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
            ('explicit' !== a.parsetags
                ? 'complete' === document.readyState || 'interactive' === document.readyState
                    ? (google.search.cse.element.go(), b && b())
                    : google.setOnLoadCallback(function () {
                          google.search.cse.element.go();
                          b && b();
                      }, !0)
                : b && b());
<<<<<<< HEAD
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
    };

    function ca(a) {
        return 'function' === typeof a ? a : 'string' === typeof a && 'function' === typeof window[a] ? window[a] : null;
    }

    function M() {
        return !(window.__gcse && window.__gcse.plainStyle);
    }

=======
    };
    function ca(a) {
        return 'function' === typeof a ? a : 'string' === typeof a && 'function' === typeof window[a] ? window[a] : null;
    }
    function M() {
        return !(window.__gcse && window.__gcse.plainStyle);
    }
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
    function N(a) {
        var b = document.createElement('link');
        b.type = 'text/css';
        a: {
            try {
                var d = b && b.ownerDocument,
                    e = d && (d.defaultView || d.parentWindow);
                e = e || g;
                if (e.Element && e.Location) {
                    var c = e;
                    break a;
                }
            } catch (h) {}
            c = null;
        }
        if (
            c &&
            'undefined' != typeof c.HTMLLinkElement &&
            (!b || (!(b instanceof c.HTMLLinkElement) && (b instanceof c.Location || b instanceof c.Element)))
        ) {
            c = typeof b;
            if (('object' == c && null != b) || 'function' == c)
                try {
                    var f = b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b);
                } catch (h) {
                    f = '<object could not be stringified>';
                }
            else f = void 0 === b ? 'undefined' : null === b ? 'null' : typeof b;
            r('Argument is not a %s (or a non-Element, non-Location mock); got: %s', 'HTMLLinkElement', f);
        }
        b.rel = 'stylesheet';
        p(a instanceof z, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"');
        b.href = A(a).toString();
        a: {
            a = ((b.ownerDocument && b.ownerDocument.defaultView) || g).document;
            if (
                a.querySelector &&
                (a = a.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) &&
                (a = a.nonce || a.getAttribute('nonce')) &&
                aa.test(a)
            )
                break a;
            a = '';
        }
        a && b.setAttribute('nonce', a);
        return b;
    }
    var O,
<<<<<<< HEAD
<<<<<<< HEAD
        G = opts_.usqp ? {
            usqp: opts_.usqp
        } : {},
        P = opts_.language.toLowerCase();
    O = opts_.cselibVersion ? J({
        versionDir: opts_.cselibVersion,
        versionSlash: L,
        lang: P
    }) : J({
        versionDir: '',
        versionSlash: '',
        lang: P
    });
=======
        G = opts_.usqp
            ? {
                  usqp: opts_.usqp
              }
            : {},
        P = opts_.language.toLowerCase();
    O = opts_.cselibVersion
        ? J({
              versionDir: opts_.cselibVersion,
              versionSlash: L,
              lang: P
          })
        : J({
              versionDir: '',
              versionSlash: '',
              lang: P
          });
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
        G = opts_.usqp ? { usqp: opts_.usqp } : {},
        P = opts_.language.toLowerCase();
    O = opts_.cselibVersion ? J({ versionDir: opts_.cselibVersion, versionSlash: L, lang: P }) : J({ versionDir: '', versionSlash: '', lang: P });
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
    var Q = window.__gcse.scb,
        R = document.createElement('script');
    R.src = A(O);
    var S,
        T,
        U = ((R.ownerDocument && R.ownerDocument.defaultView) || window).document,
        V = null === (T = U.querySelector) || void 0 === T ? void 0 : T.call(U, 'script[nonce]');
    (S = V ? V.nonce || V.getAttribute('nonce') || '' : '') && R.setAttribute('nonce', S);
    R.type = 'text/javascript';
    Q && (R.onload = Q);
    document.getElementsByTagName('head')[0].appendChild(R);
    if (M()) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        document
            .getElementsByTagName('head')[0]
            .appendChild(
                N(
<<<<<<< HEAD
                    opts_.cselibVersion ?
                    E(K, {
                        versionDir: opts_.cselibVersion,
                        versionSlash: L,
                        experiment: '',
                        lang: opts_.language
                    }) :
                    E(K, {
                        versionDir: '',
                        versionSlash: '',
                        experiment: '',
                        lang: opts_.language
                    })
                )
            );
=======
        document.getElementsByTagName('head')[0].appendChild(
            N(
                opts_.cselibVersion
                    ? E(K, {
                          versionDir: opts_.cselibVersion,
                          versionSlash: L,
                          experiment: '',
                          lang: opts_.language
                      })
                    : E(K, {
                          versionDir: '',
                          versionSlash: '',
                          experiment: '',
                          lang: opts_.language
                      })
            )
        );
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
                    opts_.cselibVersion
                        ? E(K, { versionDir: opts_.cselibVersion, versionSlash: L, experiment: '', lang: opts_.language })
                        : E(K, { versionDir: '', versionSlash: '', experiment: '', lang: opts_.language })
                )
            );
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        var W,
            X = opts_.uiOptions.cssThemeVersion || 2,
            Y = opts_.theme.toLowerCase(),
            Z = X ? 'v' + X : Y.match(/v2_/g) ? 'v2' : '',
            da = Y.replace('v2_', '');
<<<<<<< HEAD
        W = E(ba, {
            versionDir: Z,
            versionSlash: Z ? L : '',
            theme: da
        });
=======
        W = E(ba, { versionDir: Z, versionSlash: Z ? L : '', theme: da });
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
        document.getElementsByTagName('head')[0].appendChild(N(W));
    }
})({
    cx: '54896af6e2f16ea45',
    language: 'en',
    theme: 'V2_DEFAULT',
    uiOptions: {
        resultsUrl: '',
        enableAutoComplete: true,
        enableImageSearch: true,
        imageSearchLayout: 'popup',
        resultSetSize: 'filtered_cse',
        enableOrderBy: true,
<<<<<<< HEAD
<<<<<<< HEAD
        orderByOptions: [{
=======
        orderByOptions: [
            {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
        orderByOptions: [
            {
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
                label: 'Relevance',
                key: ''
            },
            {
                label: 'Date',
                key: 'date'
            }
        ],
        overlayResults: true,
        numTopRefinements: -1,
        hideElementBranding: false,
        cssThemeVersion: 4,
        isSafeSearchActive: true
    },
    protocol: 'https',
    rawCss: '.gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))}',
    cse_token: 'AJvRUv0-sBpklfS8nj5FY16GCTPF:1638319172452',
    isHostedPage: false,
    exp: ['csqr', 'cc'],
    cselibVersion: '54e62135847a1703',
    usqp: 'CAI\u003d'
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
});
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
