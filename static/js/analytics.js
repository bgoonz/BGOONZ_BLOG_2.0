(function(sttc) {
        /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var aa;
        var ba;
        function ca(a) {
            var b = 0;
            return () =>
                b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {}
            done: !0
        };
    }
    var da =
        'function' == typeof Object.defineProperties ?
        Object.defineProperty :
        (a, b, c) => {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
        };
    function ea(a) {
        a = [
            'object' == typeof globalThis && globalThis,
            a,
            'object' == typeof window && window,
            'object' == typeof self && self,
            'object' == typeof global && global
        ];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error('Cannot find global object');
    }
    var fa = ea(this);
    var ha = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
    var n = {};
    var ia = {};
    function p(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b];
    }
    function ja(a, b, c) {
        if (b)
            a: {
                var d = a.split('.');
                a = 1 === d.length;
                var e = d[0];
                var f;!a && e in n ? (f = n) : (f = fa);
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g];
                }
                d = d[d.length - 1];
                c = ha && 'es6' === c ? f[d] : null;
                b = b(c);
                null != b &&
                (a ?
                    da(n, d, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    }) :
                    b !== c &&
                    (void 0 === ia[d] && ((a = (1e9 * Math.random()) >>> 0), (ia[d] = ha ? fa.Symbol(d) : '$jscp$' + a + '$' + d)),
                        da(f, ia[d], {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })));
            }
    }
    ja(
        'Symbol',
        (a) => {
            function b(f) {
                if (this instanceof b) throw new TypeError('Symbol is not a constructor');
                return new c(d + (f || '') + '_' + e++, f);
            }
            function c(f, g) {
                this.h = f;
                da(this, 'description', {
                    configurable: !0,
                    writable: !0,
                    value: g
                });
            }
            if (a) return a;
            c.prototype.toString = function() {
                return this.h;
            };
            var d = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_';
            var e = 0;
            return b;
        },
        'es6'
    ); ja(
        'Symbol.iterator',
        (a) => {
            if (a) return a;
            a = (0, n.Symbol)('Symbol.iterator');
            for (
                var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '),
                    c = 0; c < b.length; c++
            ) {
                var d = fa[b[c]];
                'function' === typeof d &&
                    'function' != typeof d.prototype[a] &&
                    da(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value() {
                            return ka(ca(this));
                        }
                    });
            }
            return a;
        },
        'es6'
    );
    function ka(a) {
        a = {
            next: a
        };
        a[p(n.Symbol, 'iterator')] = function() {
            return this;
        };
        return a;
    }
    function la(a) {
        return (a.raw = a);
    }
    function q(a) {
        var b = 'undefined' != typeof n.Symbol && p(n.Symbol, 'iterator') && a[p(n.Symbol, 'iterator')];
        return b ?
            b.call(a) : {
                next: ca(a)
            };
    }
    function ma(a) {
        if (!(a instanceof Array)) {
            a = q(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c;
        }
        return a;
    }
    var na =
        'function' == typeof Object.create ?
        Object.create :
        (a) => {
            function b() {}
            b.prototype = a;
            return new b();
        };
    var oa;
    if (ha && 'function' == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                a: !0
            };
            var ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a;
            } catch (a) {}
            pa = !1;
        }
        oa = pa ?
            (a, b) => {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                return a;
            } :
            null;
    }
    var sa = oa;
    function u(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ('prototype' != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
        a.xb = b.prototype;
    }
    function ta(...args) {
        for (var a = Number(this), b = [], c = a; c < args.length; c++) b[c - a] = args[c];
        return b;
    }
    ja(
        'Promise',
        (a) => {
            function b(g) {
                this.h = 0;
                this.j = void 0;
                this.i = [];
                this.D = !1;
                var h = this.l();
                try {
                    g(h.resolve, h.reject);
                } catch (k) {
                    h.reject(k);
                }
            }
            function c() {
                this.h = null;
            }
            function d(g) {
                return g instanceof b ?
                    g :
                    new b((h) => {
                        h(g);
                    });
            }
            if (a) return a;
            c.prototype.i = function(g) {
                if (null == this.h) {
                    this.h = [];
                    var h = this;
                    this.j(() => {
                        h.m();
                    });
                }
                this.h.push(g);
            };
            var e = fa.setTimeout;
            c.prototype.j = (g) => {
                e(g, 0);
            };
            c.prototype.m = function() {
                for (; this.h && this.h.length;) {
                    var g = this.h;
                    this.h = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k = g[h];
                        g[h] = null;
                        try {
                            k();
                        } catch (l) {
                            this.l(l);
                        }
                    }
                }
                this.h = null;
            };
            c.prototype.l = function(g) {
                this.j(() => {
                    throw g;
                });
            };
            b.prototype.l = function() {
                function g(l) {
                    return (m) => {
                        k || ((k = !0), l.call(h, m));
                    };
                }
                var h = this;
                var k = !1;
                return {
                    resolve: g(this.O),
                    reject: g(this.m)
                };
            };
            b.prototype.O = function(g) {
                if (g === this) this.m(new TypeError('A Promise cannot resolve to itself'));
                else if (g instanceof b) this.R(g);
                else {
                    a: switch (typeof g) {
                        case 'object':
                            var h = null != g;
                            break a;
                        case 'function':
                            h = !0;
                            break a;
                        default:
                            h = !1;
                    }
                    h ? this.N(g) : this.v(g);
                }
            };
            b.prototype.N = function(g) {
                var h = void 0;
                try {
                    h = g.then;
                } catch (k) {
                    this.m(k);
                    return;
                }
                'function' == typeof h ? this.ea(h, g) : this.v(g);
            };
            b.prototype.m = function(g) {
                this.A(2, g);
            };
            b.prototype.v = function(g) {
                this.A(1, g);
            };
            b.prototype.A = function(g, h) {
                if (0 != this.h) throw Error('Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.h);
                this.h = g;
                this.j = h;
                2 === this.h && this.P();
                this.H();
            };
            b.prototype.P = function() {
                var g = this;
                e(() => {
                    if (g.M()) {
                        var h = fa.console;
                        'undefined' !== typeof h && h.error(g.j);
                    }
                }, 1);
            };
            b.prototype.M = function() {
                if (this.D) return !1;
                var g = fa.CustomEvent;
                var h = fa.Event;
                var k = fa.dispatchEvent;
                if ('undefined' === typeof k) return !0;
                'function' === typeof g
                    ?
                    (g = new g('unhandledrejection', {
                        cancelable: !0
                    })) :
                    'function' === typeof h ?
                    (g = new h('unhandledrejection', {
                        cancelable: !0
                    })) :
                    ((g = fa.document.createEvent('CustomEvent')), g.initCustomEvent('unhandledrejection', !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g);
            };
            b.prototype.H = function() {
                if (null != this.i) {
                    for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                    this.i = null;
                }
            };
            var f = new c();
            b.prototype.R = function(g) {
                var h = this.l();
                g.ga(h.resolve, h.reject);
            };
            b.prototype.ea = function(g, h) {
                var k = this.l();
                try {
                    g.call(h, k.resolve, k.reject);
                } catch (l) {
                    k.reject(l);
                }
            };
            b.prototype.then = function(g, h) {
                function k(t, x) {
                    return 'function' == typeof t ?
                        (E) => {
                            try {
                                l(t(E));
                            } catch (B) {
                                m(B);
                            }
                        } :
                        x;
                }
                var l;
                var m;
                var r = new b((t, x) => {
                    l = t;
                    m = x;
                });
                this.ga(k(g, l), k(h, m));
                return r;
            };
            b.prototype.catch = function(g) {
                return this.then(void 0, g);
            };
            b.prototype.ga = function(g, h) {
                function k() {
                    switch (l.h) {
                        case 1:
                            g(l.j);
                            break;
                        case 2:
                            h(l.j);
                            break;
                        default:
                            throw Error('Unexpected state: ' + l.h);
                    }
                }
                var l = this;
                null == this.i ? f.i(k) : this.i.push(k);
                this.D = !0;
            };
            b.resolve = d;
            b.reject = (g) =>
                new b((h, k) => {
                    k(g);
                });
            b.race = (g) =>
                new b((h, k) => {
                    for (var l = q(g), m = l.next(); !m.done; m = l.next()) d(m.value).ga(h, k);
                });
            b.all = (g) => {
                var h = q(g);
                var k = h.next();
                return k.done ?
                    d([]) :
                    new b((l, m) => {
                        function r(E) {
                            return (B) => {
                                t[E] = B;
                                x--;
                                0 == x && l(t);
                            };
                        }
                        var t = [];
                        var x = 0;
                        do t.push(void 0), x++, d(k.value).ga(r(t.length - 1), m), (k = h.next());
                        while (!k.done);
                    });
            };
            return b;
        },
        'es6'
    ); ja(
        'Array.prototype.find',
        (a) =>
        a ?
        a :
        function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a;
                    }
                }
                b = void 0;
            }
            return b;
        },
        'es6'
    );
    function ua(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    ja(
        'WeakMap',
        (a) => {
            function b(g) {
                this.h = (f += Math.random() + 1).toString();
                if (g) {
                    g = q(g);
                    for (var h; !(h = g.next()).done;)(h = h.value), this.set(h[0], h[1]);
                }
            }
            function c() {}
            function d(g) {
                var h = typeof g;
                return ('object' === h && null !== g) || 'function' === h;
            }
            if (
                (() => {
                    if (!a || !Object.seal) return !1;
                    try {
                        var g = Object.seal({});
                        var h = Object.seal({});
                        var k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                        if (2 != k.get(g) || 3 != k.get(h)) return !1;
                        k.delete(g);
                        k.set(h, 4);
                        return !k.has(g) && 4 == k.get(h);
                    } catch (l) {
                        return !1;
                    }
                })()
            )
                return a;
            var e = '$jscomp_hidden_' + Math.random();
            var f = 0;
            b.prototype.set = function(g, h) {
                if (!d(g)) throw Error('Invalid WeakMap key');
                if (!ua(g, e)) {
                    var k = new c();
                    da(g, e, {
                        value: k
                    });
                }
                if (!ua(g, e)) throw Error('WeakMap key fail: ' + g);
                g[e][this.h] = h;
                return this;
            };
            b.prototype.get = function(g) {
                return d(g) && ua(g, e) ? g[e][this.h] : void 0;
            };
            b.prototype.has = function(g) {
                return d(g) && ua(g, e) && ua(g[e], this.h);
            };
            b.prototype.delete = function(g) {
                return d(g) && ua(g, e) && ua(g[e], this.h) ? delete g[e][this.h] : !1;
            };
            return b;
        },
        'es6'
    ); ja(
        'Map',
        (a) => {
            function b() {
                var h = {};
                return (h.L = h.next = h.head = h);
            }
            function c(h, k) {
                var l = h.h;
                return ka(() => {
                    if (l) {
                        for (; l.head != h.h;) l = l.L;
                        for (; l.next != l.head;)
                            return (
                                (l = l.next), {
                                    done: !1,
                                    value: k(l)
                                }
                            );
                        l = null;
                    }
                    return {
                        done: !0,
                        value: void 0
                    };
                });
            }
            function d(h, k) {
                var l = k && typeof k;
                'object' == l || 'function' == l ? (f.has(k) ? (l = f.get(k)) : ((l = '' + ++g), f.set(k, l))) : (l = 'p_' + k);
                var m = h.i[l];
                if (m && ua(h.i, l))
                    for (h = 0; h < m.length; h++) {
                        var r = m[h];
                        if ((k !== k && r.key !== r.key) || k === r.key)
                            return {
                                id: l,
                                list: m,
                                index: h,
                                u: r
                            };
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    u: void 0
                };
            }
            function e(h) {
                this.i = {};
                this.h = b();
                this.size = 0;
                if (h) {
                    h = q(h);
                    for (var k; !(k = h.next()).done;)(k = k.value), this.set(k[0], k[1]);
                }
            }
            if (
                (() => {
                    if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
                    try {
                        var h = Object.seal({
                            x: 4
                        });
                        var k = new a(q([
                            [h, 's']
                        ]));
                        if (
                            's' != k.get(h) ||
                            1 != k.size ||
                            k.get({
                                x: 4
                            }) ||
                            k.set({
                                    x: 4
                                },
                                't'
                            ) != k ||
                            2 != k.size
                        )
                            return !1;
                        var l = k.entries();
                        var m = l.next();
                        if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
                        m = l.next();
                        return m.done || 4 != m.value[0].x || 't' != m.value[1] || !l.next().done ? !1 : !0;
                    } catch (r) {
                        return !1;
                    }
                })()
            )
                return a;
            var f = new n.WeakMap();
            e.prototype.set = function(h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.i[l.id] = []);
                l.u ?
                    (l.u.value = k) :
                    ((l.u = {
                            next: this.h,
                            L: this.h.L,
                            head: this.h,
                            key: h,
                            value: k
                        }),
                        l.list.push(l.u),
                        (this.h.L.next = l.u),
                        (this.h.L = l.u),
                        this.size++);
                return this;
            };
            e.prototype.delete = function(h) {
                h = d(this, h);
                return h.u && h.list ?
                    (h.list.splice(h.index, 1),
                        h.list.length || delete this.i[h.id],
                        (h.u.L.next = h.u.next),
                        (h.u.next.L = h.u.L),
                        (h.u.head = null),
                        this.size--,
                        !0) :
                    !1;
            };
            e.prototype.clear = function() {
                this.i = {};
                this.h = this.h.L = b();
                this.size = 0;
            };
            e.prototype.has = function(h) {
                return !!d(this, h).u;
            };
            e.prototype.get = function(h) {
                return (h = d(this, h).u) && h.value;
            };
            e.prototype.entries = function() {
                return c(this, (h) => [h.key, h.value]);
            };
            e.prototype.keys = function() {
                return c(this, (h) => h.key);
            };
            e.prototype.values = function() {
                return c(this, (h) => h.value);
            };
            e.prototype.forEach = function(h, k) {
                for (var l = this.entries(), m; !(m = l.next()).done;)(m = m.value), h.call(k, m[1], m[0], this);
            };
            e.prototype[p(n.Symbol, 'iterator')] = e.prototype.entries;
            var g = 0;
            return e;
        },
        'es6'
    );
    function wa(a, b) {
        a instanceof String && (a += '');
        var c = 0;
        var d = !1;
        var e = {
            next() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    };
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                };
            }
        };
        e[p(n.Symbol, 'iterator')] = () => e;
        return e;
    }
    var xa =
        ha && 'function' == typeof p(Object, 'assign') ?
        p(Object, 'assign') :
        function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ua(d, e) && (a[e] = d[e]);
            }
            return a;
        }; ja('Object.assign', (a) => a || xa, 'es6'); ja(
        'Set',
        (a) => {
            function b(c) {
                this.h = new n.Map();
                if (c) {
                    c = q(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value);
                }
                this.size = this.h.size;
            }
            if (
                (() => {
                    if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
                    try {
                        var c = Object.seal({
                            x: 4
                        });
                        var d = new a(q([c]));
                        if (
                            !d.has(c) ||
                            1 != d.size ||
                            d.add(c) != d ||
                            1 != d.size ||
                            d.add({
                                x: 4
                            }) != d ||
                            2 != d.size
                        )
                            return !1;
                        var e = d.entries();
                        var f = e.next();
                        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                        f = e.next();
                        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
                    } catch (g) {
                        return !1;
                    }
                })()
            )
                return a;
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.h.set(c, c);
                this.size = this.h.size;
                return this;
            };
            b.prototype.delete = function(c) {
                c = this.h.delete(c);
                this.size = this.h.size;
                return c;
            };
            b.prototype.clear = function() {
                this.h.clear();
                this.size = 0;
            };
            b.prototype.has = function(c) {
                return this.h.has(c);
            };
            b.prototype.entries = function() {
                return this.h.entries();
            };
            b.prototype.values = function() {
                return p(this.h, 'values').call(this.h);
            };
            b.prototype.keys = p(b.prototype, 'values');
            b.prototype[p(n.Symbol, 'iterator')] = p(b.prototype, 'values');
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.h.forEach((f) => c.call(d, f, f, e));
            };
            return b;
        },
        'es6'
    ); ja(
        'String.prototype.startsWith',
        (a) =>
        a ?
        a :
        function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
            var d = this.length;
            var e = b.length;
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var f = 0; f < e && c < d;)
                if (this[c++] != b[f++]) return !1;
            return f >= e;
        },
        'es6'
    ); ja('globalThis', (a) => a || fa, 'es_2020'); ja(
        'Array.prototype.keys',
        (a) =>
        a ?
        a :
        function() {
            return wa(this, (b) => b);
        },
        'es6'
    ); ja(
        'Array.prototype.values',
        (a) =>
        a ?
        a :
        function() {
            return wa(this, (b, c) => c);
        },
        'es8'
    ); ja(
        'Promise.prototype.finally',
        (a) =>
        a ?
        a :
        function(b) {
            return this.then(
                (c) => n.Promise.resolve(b()).then(() => c),
                (c) =>
                n.Promise.resolve(b()).then(() => {
                    throw c;
                })
            );
        },
        'es9'
    );
    var v = this || self;
    function ya(a) {
        a = a.split('.');
        for (var b = v, c = 0; c < a.length; c++)
            if (((b = b[a[c]]), null == b)) return null;
        return b;
    }
    function za(a) {
        var b = typeof a;
        return ('object' == b && null != a) || 'function' == b;
    }
    function Aa(a) {
        return (Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba]) || (a[Ba] = ++Ca);
    }
    var Ba = 'closure_uid_' + ((1e9 * Math.random()) >>> 0);
    var Ca = 0;
    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }
    function Ea(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function(...args) {
                var e = Array.prototype.slice.call(args);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function(...args) {
            return a.apply(b, args);
        };
    }
    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? (Fa = Da) : (Fa = Ea);
        return Fa(...arguments);
    }
    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function(...args) {
            var d = c.slice();
            d.push(...args);
            return a.apply(this, d);
        };
    }
    function Ha(a) {
        var b = ['__uspapi'];
        var c = v;
        b[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + b[0]);
        for (var d; b.length && (d = b.shift());)
            b.length || void 0 === a ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = a);
    }
    function Ia(a) {
        return a;
    }
    var Ja = new Date().getTime();
    function Ka(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    }
    function La(a, b) {
        var c = 0;
        a = Ka(String(a)).split('.');
        b = Ka(String(b)).split('.');
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || '';
            var g = b[e] || '';
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                if (0 == f[0].length && 0 == g[0].length) break;
                c =
                    Ma(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
                    Ma(0 == f[2].length, 0 == g[2].length) ||
                    Ma(f[2], g[2]);
                f = f[3];
                g = g[3];
            } while (0 == c);
        }
        return c;
    }
    function Ma(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
    var Na; a: {
        var Oa = v.navigator;
        if (Oa) {
            var Pa = Oa.userAgent;
            if (Pa) {
                Na = Pa;
                break a;
            }
        }
        Na = '';
    }
    function w(a) {
        return -1 != Na.indexOf(a);
    }
    function Qa() {
        return w('Trident') || w('MSIE');
    }
    function Ra() {
        return ((w('Chrome') || w('CriOS')) && !w('Edge')) || w('Silk');
    }
    function Sa(a) {
        var b = {};
        a.forEach((c) => {
            b[c[0]] = c[1];
        });
        return (c) => b[p(c, 'find').call(c, (d) => d in b)] || '';
    }
    function Ta() {
        var a = Na;
        if (Qa()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = '';
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (((a = /Trident\/(\d.\d)/.exec(a)), '7.0' == c[1]))
                        if (a && a[1])
                            switch (a[1]) {
                                case '4.0':
                                    b = '8.0';
                                    break;
                                case '5.0':
                                    b = '9.0';
                                    break;
                                case '6.0':
                                    b = '10.0';
                                    break;
                                case '7.0':
                                    b = '11.0';
                            }
                else b = '7.0';
                else b = c[1];
                a = b;
            }
            return a;
        }
        c = RegExp('([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?', 'g');
        b = [];
        for (var d;
            (d = c.exec(a));) b.push([d[1], d[2], d[3] || void 0]);
        a = Sa(b);
        return w('Opera') ?
            a(['Version', 'Opera']) :
            w('Edge') ?
            a(['Edge']) :
            w('Edg/') ?
            a(['Edg']) :
            w('Silk') ?
            a(['Silk']) :
            Ra() ?
            a(['Chrome', 'CriOS', 'HeadlessChrome']) :
            ((a = b[2]) && a[1]) || '';
    }
    function Ua(a, b) {
        for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
    }
    function Va(a, b) {
        for (var c = a.length, d = [], e = 0, f = 'string' === typeof a ? a.split('') : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h);
            }
        return d;
    }
    function Wa(a, b) {
        for (var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d;
    }
    function Xa(a, b) {
        for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1;
    }
    function Ya(a, b) {
        a: {
            for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a;
                }
            b = -1;
        }
        return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
    }
    function Za(a, b) {
        a: {
            for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a;
                }
            b = -1;
        }
        return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
    }
    function $a(a, b) {
        a: if ('string' === typeof a) a = 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a;
                    }
                a = -1;
            }
        return 0 <= a;
    }
    function ab(a) {
        ab[' '](a);
        return a;
    }
    ab[' '] = () => {};
    var bb = Qa(); !w('Android') || Ra(); Ra(); !w('Safari') || Ra();
    var cb = {};
    var db = null;
    var eb = 'function' === typeof Uint8Array;
    var fb = 'function' === typeof n.Symbol && 'symbol' === typeof(0, n.Symbol)() ? (0, n.Symbol)(void 0) : void 0;
    function hb(a) {
        Object.isFrozen(a) ||
            (fb ?
                (a[fb] |= 1) :
                void 0 !== a.h ?
                (a.h |= 1) :
                Object.defineProperties(a, {
                    h: {
                        value: 1,
                        configurable: !0,
                        writable: !0,
                        enumerable: !1
                    }
                }));
        return a;
    }
    function ib(a) {
        return null !== a && 'object' === typeof a && a.constructor === Object;
    }
    var jb;
    function kb(a) {
        switch (typeof a) {
            case 'number':
                return isFinite(a) ? a : String(a);
            case 'object':
                if (eb && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    if (!db) {
                        db = {};
                        for (
                            var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), d = ['+/=', '+/', '-_=', '-_.', '-_'], e = 0; 5 > e; e++
                        ) {
                            var f = c.concat(d[e].split(''));
                            cb[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === db[h] && (db[h] = g);
                            }
                        }
                    }
                    b = cb[b];
                    c = Array(Math.floor(a.length / 3));
                    d = b[64] || '';
                    for (e = f = 0; f < a.length - 2; f += 3) {
                        var k = a[f];
                        var l = a[f + 1];
                        h = a[f + 2];
                        g = b[k >> 2];
                        k = b[((k & 3) << 4) | (l >> 4)];
                        l = b[((l & 15) << 2) | (h >> 6)];
                        h = b[h & 63];
                        c[e++] = g + k + l + h;
                    }
                    g = 0;
                    h = d;
                    switch (a.length - f) {
                        case 2:
                            (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
                        case 1:
                            (a = a[f]), (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
                    }
                    return c.join('');
                }
        }
        return a;
    }
    function lb(a, b) {
        if (null != a) return Array.isArray(a) || ib(a) ? mb(a, b) : b(a);
    }
    function mb(a, b) {
        if (Array.isArray(a)) {
            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = lb(a[d], b);
            if ((b = Array.isArray(a))) {
                var e;
                fb ? (e = a[fb]) : (e = a.h);
                b = (null == e ? 0 : e) & 1;
            }
            b && hb(c);
            return c;
        }
        e = {};
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (e[c] = lb(a[c], b));
        return e;
    }
    function nb(a) {
        a = kb(a);
        return Array.isArray(a) ? mb(a, nb) : a;
    }
    var ob;
    function pb(a, b) {
        ob = b;
        a = new a(b);
        ob = null;
        return a;
    }
    function y(a, b, c) {
        var d = ob;
        ob = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.l = (d ? 0 : -1) - (this.constructor.tb || 0);
        this.h = null;
        this.i = a;
        a: {
            d = this.i.length;
            a = d - 1;
            if (d && ((d = this.i[a]), ib(d))) {
                this.m = a - this.l;
                this.j = d;
                break a;
            }
            void 0 !== b && -1 < b ? ((this.m = Math.max(b, a + 1 - this.l)), (this.j = null)) : (this.m = Number.MAX_VALUE);
        }
        if (c)
            for (b = 0; b < c.length; b++)
                (a = c[b]),
                a < this.m ?
                ((a += this.l), (d = this.i[a]) ? Array.isArray(d) && hb(d) : (this.i[a] = qb)) :
                (rb(this), (d = this.j[a]) ? Array.isArray(d) && hb(d) : (this.j[a] = qb));
    }
    var qb = Object.freeze(hb([]));
    function rb(a) {
        var b = a.m + a.l;
        a.i[b] || (a.j = a.i[b] = {});
    }
    function z(a, b, c) {
        return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.m ? (a.j ? a.j[b] : void 0) : a.i[b + a.l];
    }
    function sb(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = z(a, b, c);
        null == d && (d = qb);
        d === qb && ((d = hb(d.slice())), A(a, b, d, c));
        return d;
    }
    function tb(a, b) {
        a = z(a, b);
        return null == a ? a : !!a;
    }
    function C(a, b, c) {
        a = z(a, b);
        return null == a ? c : a;
    }
    function D(a, b, c) {
        a = tb(a, b);
        return null == a ? (void 0 === c ? !1 : c) : a;
    }
    function ub(a, b, c) {
        a = z(a, b);
        a = null == a ? a : +a;
        return null == a ? (void 0 === c ? 0 : c) : a;
    }
    function A(a, b, c, d) {
        (void 0 === d ? 0 : d) || b >= a.m ? (rb(a), (a.j[b] = c)) : (a.i[b + a.l] = c);
        return a;
    }
    function vb(a, b, c) {
        0 !== c ? A(a, b, c) : A(a, b, void 0, !1);
        return a;
    }
    function wb(a, b, c, d) {
        (c = xb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), A(a, c, void 0));
        return A(a, b, d);
    }
    function xb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != z(a, e) && (0 !== c && A(a, c, void 0, !1), (c = e));
        }
        return c;
    }
    function G(a, b, c) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        var d = a.h[c];
        if (d) return d;
        var e = z(a, c, !1);
        if (null == e) return d;
        b = new b(e);
        return (a.h[c] = b);
    }
    function H(a, b, c) {
        a.h || (a.h = {});
        var d = a.h[c];
        if (!d) {
            var e = sb(a, c, !1);
            d = [];
            for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
            a.h[c] = d;
        }
        return d;
    }
    function yb(a, b, c) {
        var d = zb;
        a.h || (a.h = {});
        var e = c ? c.i : c;
        a.h[b] = c;
        return wb(a, b, d, e);
    }
    function Ab(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (c) {
            var e = hb([]);
            for (var f = 0; f < c.length; f++) e[f] = c[f].i;
            a.h || (a.h = {});
            a.h[b] = c;
        } else a.h && (a.h[b] = void 0), (e = qb);
        return A(a, b, e, d);
    }
    y.prototype.toJSON = function() {
        var a = this.i;
        return jb ? a : mb(a, nb);
    };
    function Bb(a, b) {
        return kb(b);
    }
    function Cb(a) {
        jb = !0;
        try {
            return JSON.stringify(a.toJSON(), Bb);
        } finally {
            jb = !1;
        }
    }
    function Db(a, b, c) {
        return xb(a, b) === c ? c : -1;
    }
    function Eb(a, b, c) {
        return C(a, b, void 0 === c ? '' : c);
    }
    function Fb(a, b, c) {
        return C(a, Db(a, c, b), 0);
    }
    function Gb(a, b, c, d) {
        return G(a, b, Db(a, d, c));
    }
    function Hb(a) {
        y.call(this, a, -1, Ib);
    }
    u(Hb, y);
    function Jb(a) {
        y.call(this, a);
    }
    u(Jb, y);
    var Ib = [2, 3];
    function Kb(a, b) {
        this.i = (a === Lb && b) || '';
        this.h = Mb;
    }
    var Mb = {};
    var Lb = {};
    function Nb(a, b) {
        var c = {};
        var d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c;
    }
    function Ob(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1;
    }
    function Pb(a) {
        var b = {};
        var c;
        for (c in a) b[c] = a[c];
        return b;
    }
    var Qb;
    function Rb(a, b) {
        this.h = b === Sb ? a : '';
    }
    function Tb(a, b) {
        a = Ub.exec(Vb(a).toString());
        var c = a[3] || '';
        return Wb(a[1] + Xb('?', a[2] || '', b) + Xb('#', c, void 0));
    }
    Rb.prototype.toString = function() {
        return this.h + '';
    };
    function Vb(a) {
        return a instanceof Rb && a.constructor === Rb ? a.h : 'type_error:TrustedResourceUrl';
    }
    var Ub = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    var Sb = {};
    function Wb(a) {
        if (void 0 === Qb) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy('goog#html', {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    });
                } catch (d) {
                    v.console && v.console.error(d.message);
                }
                Qb = b;
            } else Qb = b;
        }
        a = (b = Qb) ? b.createScriptURL(a) : a;
        return new Rb(a, Sb);
    }
    function Xb(a, b, c) {
        if (null == c) return b;
        if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), (b += (b.length > a.length ? '&' : '') + encodeURIComponent(d) + '=' + encodeURIComponent(String(g))));
                }
            }
        return b;
    }
    /*
    SPDX-License-Identifier: Apache-2.0
    */
    var Yb = {};
    function Zb() {
        var a = 'undefined' !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null;
    }
    var $b;
    function ac() {
        var a;
        var b;
        if (void 0 === $b)
            try {
                $b =
                    null !==
                    (b =
                        null === (a = Zb()) || void 0 === a ?
                        void 0 :
                        a.createPolicy('google#safe', {
                            createHTML(c) {
                                return c;
                            },
                            createScript(c) {
                                return c;
                            },
                            createScriptURL(c) {
                                return c;
                            }
                        })) && void 0 !== b ?
                    b :
                    null;
            } catch (c) {}
        $b = null;
    }
    return $b;
}
function bc() {}
function cc(a) {
    this.h = a;
}
u(cc, bc);
cc.prototype.toString = function() {
    return this.h.toString();
};
function dc(a) {
    var b;
    var c = null === (b = ac()) || void 0 === b ? void 0 : b.createScriptURL(a);
    return new cc(null !== c && void 0 !== c ? c : a, Yb);
}
function ec(a) {
    if (a instanceof cc) return a.h;
    throw Error('');
}
function fc(a) {
    var b = ta.apply(1, arguments);
    if (0 === b.length) return dc(a[0]);
    for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return dc(c.join(''));
}
function gc(a) {
    return a instanceof bc ? ec(a) : Vb(a);
}
function hc(a) {
    return function(...args) {
        return !a.apply(this, args);
    };
}
function ic(a) {
    var b = !1;
    var c;
    return () => {
        b || ((c = a()), (b = !0));
        return c;
    };
}
function jc(a) {
    var b = a;
    return () => {
        if (b) {
            var c = b;
            b = null;
            c();
        }
    };
}
function kc(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
}
function lc(a, b) {
    a.removeEventListener && a.removeEventListener('message', b, !1);
}
function mc(a) {
    return String(a).replace(/\-([a-z])/g, (b, c) => c.toUpperCase());
}
function nc(a, b) {
    b = String(b);
    'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
}
function oc(a) {
    this.h = a || v.document || document;
}
oc.prototype.contains = (a, b) => {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ('undefined' != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a;
};
function rc() {
    return !sc() && (w('iPod') || w('iPhone') || w('Android') || w('IEMobile'));
}
function sc() {
    return w('iPad') || (w('Android') && !w('Mobile')) || w('Silk');
}
var tc = RegExp('^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$');
var uc = /#|$/;
function vc(a) {
    var b = a.search(uc);
    var c;
    a: {
        for (c = 0; 0 <= (c = a.indexOf('client', c)) && c < b;) {
            var d = a.charCodeAt(c - 1);
            if (38 == d || 63 == d)
                if (((d = a.charCodeAt(c + 6)), !d || 61 == d || 38 == d || 35 == d)) break a;
            c += 7;
        }
        c = -1;
    }
    if (0 > c) return null;
    d = a.indexOf('&', c);
    if (0 > d || d > b) d = b;
    c += 7;
    return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, ' '));
}
function wc(a) {
    try {
        var b;
        if ((b = !!a && null != a.location.href))
            a: {
                try {
                    ab(a.foo);
                    b = !0;
                    break a;
                } catch (c) {}
                b = !1;
            }
        return b;
    } catch (c) {
        return !1;
    }
}
function xc(a, b) {
    var c = yc('SCRIPT', a);
    c.src = gc(b);
    var d;
    b = ((c.ownerDocument && c.ownerDocument.defaultView) || window).document;
    var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, 'script[nonce]');
    (d = e ? e.nonce || e.getAttribute('nonce') || '' : '') && c.setAttribute('nonce', d);
    return (a = a.getElementsByTagName('script')[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
}
function zc(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
}
function Ac(a, b) {
    if (!Bc() && !Cc()) {
        var c = Math.random();
        if (c < b) return (c = Dc()), a[Math.floor(c * a.length)];
    }
    return null;
}
function Dc() {
    if (!n.globalThis.crypto) return Math.random();
    try {
        var a = new Uint32Array(1);
        n.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
    } catch (b) {
        return Math.random();
    }
}
function Ec(a, b) {
    if (a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
}
function Fc(a) {
    var b = a.length;
    if (0 == b) return 0;
    for (var c = 305419896, d = 0; d < b; d++) c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
}
var Cc = ic(() => Xa(['Google Web Preview', 'Mediapartners-Google', 'Google-Read-Aloud', 'Google-Adwords'], Gc) || 1e-4 > Math.random());
function Hc(a, b) {
    var c = -1;
    try {
        a && (c = parseInt(a.getItem(b), 10));
    } catch (d) {
        return null;
    }
    return 0 <= c && 1e3 > c ? c : null;
}
function Ic(a, b) {
    var c = Cc() ? null : Math.floor(1e3 * Dc());
    var d;
    if ((d = null != c && a))
        a: {
            var e = String(c);
            try {
                if (a) {
                    a.setItem(b, e);
                    d = e;
                    break a;
                }
            } catch (f) {}
            d = null;
        }
    return d ? c : null;
}
var Bc = ic(() => Gc('MSIE'));
function Gc(a) {
    return -1 != Na.indexOf(a);
}
var Jc = /^([0-9.]+)px$/;
var Kc = /^(-?[0-9.]{1,30})$/;
function Lc(a) {
    return Kc.test(a) && ((a = Number(a)), !isNaN(a)) ? a : null;
}
function I(a) {
    return (a = Jc.exec(a)) ? +a[1] : null;
}
function Mc(a, b) {
    for (var c = 0; 50 > c; ++c) {
        try {
            var d = !(!a.frames || !a.frames[b]);
        } catch (g) {}
        d = !1;
    }
    if (d) return a;
    a: {
        try {
            var e = a.parent;
            if (e && e != a) {
                var f = e;
                break a;
            }
        } catch (g) {}
        f = null;
    }
    if (!(a = f)) break;
}
return null;
}
var Nc = ic(() => (rc() ? 2 : sc() ? 1 : 0));
function Oc(a) {
    Ec({
            display: 'none'
        },
        (b, c) => {
            a.style.setProperty(c, b, 'important');
        }
    );
}
var Pc = [];
function Qc() {
    var a = Pc;
    Pc = [];
    a = q(a);
    for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
            b();
        } catch (c) {}
    }
}
function Rc(a, b) {
    b = void 0 === b ? window.document : b;
    0 != a.length &&
        b.head &&
        a.forEach((c) => {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = yc('META');
                    d.head.appendChild(e);
                    e.httpEquiv = 'origin-trial';
                    e.content = c;
                }
            }
        });
}
function Sc(a) {
    if ('number' !== typeof a.goog_pvsid)
        try {
            Object.defineProperty(a, 'goog_pvsid', {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            });
        } catch (b) {}
    return Number(a.goog_pvsid) || -1;
}
function Tc(a) {
    var b = Uc;
    'complete' === b.readyState || 'interactive' === b.readyState ?
        (Pc.push(a), 1 == Pc.length && (n.Promise ? n.Promise.resolve().then(Qc) : window.setImmediate ? setImmediate(Qc) : setTimeout(Qc, 0))) :
        b.addEventListener('DOMContentLoaded', a);
}
function yc(a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
}
var Vc = null;
var Uc = document;
var J = window;
function Wc(a) {
    a = void 0 === a ? v : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
        try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
        } catch (c) {}
    try {
        if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
}
function Xc(a) {
    return (a = a || Wc()) ? (wc(a.master) ? a.master : null) : null;
}
function Yc(a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = yc('IMG', a.document);
    c.src = b;
    a.google_image_requests.push(c);
}
function Zc(a, b) {
    var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
    Ec(a, (d, e) => {
        d && (c += '&' + e + '=' + encodeURIComponent(d));
    });
    $c(c);
}
function $c(a) {
    var b = window;
    b.fetch ?
        b.fetch(a, {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors'
        }) :
        Yc(b, a);
}
function ad(a) {
    return !(!a || !a.call) && 'function' === typeof a;
}
function bd(a) {
    var b = void 0 === b ? 1 : b;
    a = Xc(Wc(a)) || a;
    a.google_unique_id = (a.google_unique_id || 0) + b;
    return a.google_unique_id;
}
function cd(a) {
    a = a.google_unique_id;
    return 'number' === typeof a ? a : 0;
}
var dd = !!window.google_async_iframe_id;
var ed = (dd && window.parent) || window;
function fd() {
    if (dd && !wc(ed)) {
        0.01 > Math.random() &&
            Zc({
                    stack: Error().stack
                },
                'badpubwin'
            );
        var a = '.' + Uc.domain;
        try {
            for (; 2 < a.split('.').length && !wc(ed);)(Uc.domain = a = a.substr(a.indexOf('.') + 1)), (ed = window.parent);
        } catch (b) {}
        wc(ed) || (ed = window);
    }
    return ed;
}
function gd() {
    var a = void 0 === a ? J : a;
    if (!a) return !1;
    try {
        return !(!a.navigator.standalone && !a.top.navigator.standalone);
    } catch (b) {
        return !1;
    }
}
function hd(a) {
    a = a.top;
    return wc(a) ? a : null;
}
function id(a) {
    if (!a) return '';
    a = a.toLowerCase();
    'ca-' != a.substring(0, 3) && (a = 'ca-' + a);
    return a;
}
var jd = null;
function kd(a, b) {
    b = void 0 === b ? [] : b;
    var c = !1;
    v.google_logging_queue || ((c = !0), (v.google_logging_queue = []));
    v.google_logging_queue.push([a, b]);
    if ((a = c)) {
        if (null == jd) {
            jd = !1;
            try {
                var d = hd(v);
                d && -1 !== d.location.hash.indexOf('google_logging') && (jd = !0);
                v.localStorage.getItem('google_logging') && (jd = !0);
            } catch (e) {}
        }
        a = jd;
    }
    a &&
        ((d = v.document),
            (a = new Kb(Lb, 'https://pagead2.googlesyndication.com/pagead/js/logging_library.js')),
            (a = Wb(a instanceof Kb && a.constructor === Kb && a.h === Mb ? a.i : 'type_error:Const')),
            xc(d, a));
}
function ld(a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || '';
    this.id = b.id || 'jserror';
    this.meta = c;
}
function md(a) {
    return !!(a.error && a.meta && a.id);
}
var nd = RegExp('^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)');
function od(a, b) {
    this.h = a;
    this.i = b;
}
function pd(a, b, c) {
    this.url = a;
    this.ba = b;
    this.Ia = !!c;
    this.depth = null;
}
function qd() {
    this.j = '&';
    this.i = {};
    this.l = 0;
    this.h = [];
}
function rd(a, b) {
    var c = {};
    c[a] = b;
    return [c];
}
function sd(a, b, c, d, e) {
    var f = [];
    Ec(a, (g, h) => {
        (g = td(g, b, c, d, e)) && f.push(h + '=' + g);
    });
    return f.join(b);
}
function td(a, b, c, d, e) {
    if (null == a) return '';
    b = b || '&';
    c = c || ',$';
    'string' == typeof c && (c = c.split(''));
    if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
            for (var f = [], g = 0; g < a.length; g++) f.push(td(a[g], b, c, d + 1, e));
            return f.join(c[d]);
        }
    } else if ('object' == typeof a) return (e = e || 0), 2 > e ? encodeURIComponent(sd(a, b, c, d, e + 1)) : '...';
    return encodeURIComponent(String(a));
}
function ud(a, b) {
    var c = 'https://pagead2.googlesyndication.com' + b;
    var d = vd(a) - b.length;
    if (0 > d) return '';
    a.h.sort((m, r) => m - r);
    b = null;
    for (var e = '', f = 0; f < a.h.length; f++)
        for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
            if (!d) {
                b = null == b ? g : b;
                break;
            }
            var l = sd(h[k], a.j, ',$');
            if (l) {
                l = e + l;
                if (d >= l.length) {
                    d -= l.length;
                    c += l;
                    e = a.j;
                    break;
                }
                b = null == b ? g : b;
            }
        }
    a = '';
    null != b && (a = e + 'trn=' + b);
    return c + a;
}
function vd(a) {
    var b = 1;
    var c;
    for (c in a.i) b = c.length > b ? c.length : b;
    return 3997 - b - a.j.length - 1;
}
function wd() {
    this.h = Math.random();
}
function xd() {
    var a = yd;
    var b = v.google_srt;
    0 <= b && 1 >= b && (a.h = b);
}
function zd(a, b, c, d, e) {
    if ((d ? a.h : Math.random()) < (e || 0.01))
        try {
            if (c instanceof qd) var f = c;
            else
                (f = new qd()),
                Ec(c, (h, k) => {
                    var l = f;
                    var m = l.l++;
                    h = rd(k, h);
                    l.h.push(m);
                    l.i[m] = h;
                });
            var g = ud(f, '/pagead/gen_204?id=' + b + '&');
            g && Yc(v, g);
        } catch (h) {}
}
var Ad = null;
function Bd() {
    if (null === Ad) {
        Ad = '';
        try {
            var a = '';
            try {
                a = v.top.location.hash;
            } catch (c) {
                a = v.location.hash;
            }
            if (a) {
                var b = a.match(/\bdeid=([\d,]+)/);
                Ad = b ? b[1] : '';
            }
        } catch (c) {}
    }
    return Ad;
}
function Cd() {
    var a = v.performance;
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
}
function Dd() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now ? a.now() : null;
}
function Ed(a, b) {
    var c = Dd() || Cd();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = Math.random();
    this.slotId = void 0;
}
var Fd = v.performance;
var Gd = !!(Fd && Fd.mark && Fd.measure && Fd.clearMarks);
var Hd = ic(() => {
    var a;
    if ((a = Gd))(a = Bd()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
    return a;
});
function Id() {
    this.events = [];
    this.i = v || v;
    var a = null;
    v && ((v.google_js_reporting_queue = v.google_js_reporting_queue || []), (this.events = v.google_js_reporting_queue), (a = v.google_measure_js_timing));
    this.h = Hd() || (null != a ? a : 1 > Math.random());
}
function Jd(a) {
    a && Fd && Hd() && (Fd.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), Fd.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
}
Id.prototype.start = function(a, b) {
    if (!this.h) return null;
    a = new Ed(a, b);
    b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
    Fd && Hd() && Fd.mark(b);
    return a;
};
Id.prototype.end = function(a) {
    if (this.h && 'number' === typeof a.value) {
        a.duration = (Dd() || Cd()) - a.value;
        var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
        Fd && Hd() && Fd.mark(b);
        !this.h || 2048 < this.events.length || this.events.push(a);
    }
};
function Kd() {
    var a = Ld;
    this.m = yd;
    this.i = null;
    this.l = this.I;
    this.h = void 0 === a ? null : a;
    this.j = !1;
}
aa = Kd.prototype;
aa.Pa = function(a) {
    this.l = a;
};
aa.Oa = function(a) {
    this.i = a;
};
aa.Qa = function(a) {
    this.j = a;
};
aa.ma = function(a, b, c) {
    try {
        if (this.h && this.h.h) {
            var d = this.h.start(a.toString(), 3);
            var e = b();
            this.h.end(d);
        } else e = b();
    } catch (h) {
        b = !0;
        try {
            Jd(d),
                (b = this.l(
                    a,
                    new ld(h, {
                        message: Md(h)
                    }),
                    void 0,
                    c
                ));
        } catch (k) {}
        this.I(217, k);
    }
    if (b) {
        var f;
        var g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
    } else throw h;
}
return e;
};
aa.La = function(a, b, c, d) {
    var e = this;
    return function(...args) {
        var f = ta.apply(0, args);
        return e.ma(a, () => b.apply(c, f), d);
    };
};
aa.I = function(a, b, c, d, e) {
    e = e || 'jserror';
    try {
        var f = new qd();
        f.h.push(1);
        f.i[1] = rd('context', a);
        md(b) ||
            (b = new ld(b, {
                message: Md(b)
            }));
        if (b.msg) {
            var g = b.msg.substring(0, 512);
            f.h.push(2);
            f.i[2] = rd('msg', g);
        }
        var h = b.meta || {};
        if (this.i)
            try {
                this.i(h);
            } catch (pc) {}
        if (d)
            try {
                d(h);
            } catch (pc) {}
        b = [h];
        f.h.push(3);
        f.i[3] = b;
        d = v;
        b = [];
        g = null;
        do {
            var k = d;
            if (wc(k)) {
                var l = k.location.href;
                g = (k.document && k.document.referrer) || null;
            } else(l = g), (g = null);
            b.push(new pd(l || '', k));
            try {
                d = k.parent;
            } catch (pc) {
                d = null;
            }
        } while (d && k != d);
        l = 0;
        for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
        k = v;
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
            for (m = 1; m < b.length; ++m) {
                var r = b[m];
                r.url || ((r.url = k.location.ancestorOrigins[m - 1] || ''), (r.Ia = !0));
            }
        var t = new pd(v.location.href, v, !1);
        k = null;
        var x = b.length - 1;
        for (r = x; 0 <= r; --r) {
            var E = b[r];
            !k && nd.test(E.url) && (k = E);
            if (E.url && !E.Ia) {
                t = E;
                break;
            }
        }
        E = null;
        var B = b.length && b[x].url;
        0 != t.depth && B && (E = b[x]);
        var F = new od(t, E);
        if (F.i) {
            var va = F.i.url || '';
            f.h.push(4);
            f.i[4] = rd('top', va);
        }
        var gb = {
            url: F.h.url || ''
        };
        if (F.h.url) {
            var qc = F.h.url.match(tc);
            var Ef = qc[1];
            var Ff = qc[3];
            var Gf = qc[4];
            t = '';
            Ef && (t += Ef + ':');
            Ff && ((t += '//'), (t += Ff), Gf && (t += ':' + Gf));
            var Hf = t;
        } else Hf = '';
        gb = [
            gb,
            {
                url: Hf
            }
        ];
        f.h.push(5);
        f.i[5] = gb;
        zd(this.m, e, f, this.j, c);
    } catch (pc) {
        try {
            zd(
                this.m,
                e, {
                    context: 'ecmserr',
                    rctx: a,
                    msg: Md(pc),
                    url: F && F.h.url
                },
                this.j,
                c
            );
        } catch (qo) {}
    }
    return !0;
};
function Md(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
    if (a.stack) {
        a = a.stack;
        try {
            -1 == a.indexOf(b) && (a = b + '\n' + a);
            for (var c; a != c;)(c = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
            b = a.replace(/\n */g, '\n');
        } catch (d) {}
    }
    return b;
}
function K(a) {
    a = void 0 === a ? '' : a;
    var b = Error.call(this);
    this.message = b.message;
    'stack' in b && (this.stack = b.stack);
    this.name = 'TagError';
    this.message = a ? 'adsbygoogle.push() error: ' + a : '';
    Error.captureStackTrace ? Error.captureStackTrace(this, K) : (this.stack = Error().stack || '');
}
u(K, Error);
function Nd(a) {
    return null !== a && void 0 !== a;
}
function Od(a, b) {
    if (!b(a)) throw Error(String(a));
}
function Pd(a) {
    return 'string' === typeof a;
}
function Qd(a) {
    return void 0 === a;
}
function Rd(a) {
    y.call(this, a, -1, Sd);
}
u(Rd, y);
var Sd = [2, 8];
var Td = [3, 4, 5];
var Ud = [6, 7];
var Vd;
Vd = {
    sb: 0,
    Ta: 3,
    Ua: 4,
    Va: 5
};
var Wd = Vd.Ta;
var Xd = Vd.Ua;
var Yd = Vd.Va;
function Zd(a) {
    return null != a ? !a : a;
}
function $d(a, b) {
    for (var c = !1, d = 0; d < a.length; d++) {
        var e = a[d]();
        if (e === b) return e;
        null == e && (c = !0);
    }
    if (!c) return !b;
}
function ae(a, b) {
    var c = H(a, Rd, 2);
    if (!c.length) return be(a, b);
    a = C(a, 1, 0);
    if (1 === a) return Zd(ae(c[0], b));
    c = Wa(c, (d) => () => ae(d, b));
    switch (a) {
        case 2:
            return $d(c, !1);
        case 3:
            return $d(c, !0);
    }
}
function be(a, b) {
    var c = xb(a, Td);
    a: {
        switch (c) {
            case Wd:
                var d = Fb(a, 3, Td);
                break a;
            case Xd:
                d = Fb(a, 4, Td);
                break a;
            case Yd:
                d = Fb(a, 5, Td);
                break a;
        }
        d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
        try {
            var e = b(...ma(sb(a, 8)));
        } catch (f) {}
        return;
    }
    b = C(a, 1, 0);
    if (4 === b) return !!e;
    d = null != e;
    if (5 === b) return d;
    if (12 === b) a = Eb(a, Db(a, Ud, 7), void 0);
    else
        a: {
            switch (c) {
                case Xd:
                    a = ub(a, Db(a, Ud, 6), void 0);
                    break a;
                case Yd:
                    a = Eb(a, Db(a, Ud, 7), void 0);
                    break a;
            }
            a = void 0;
        }
    if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === La(String(e), a);
        if (d)
            switch (b) {
                case 7:
                    return e < a;
                case 8:
                    return e > a;
                case 12:
                    return Pd(a) && Pd(e) && new RegExp(a).test(e);
                case 10:
                    return null != e && -1 === La(String(e), a);
                case 11:
                    return null != e && 1 === La(String(e), a);
            }
    }
}
}
function ce(a, b) {
    return !a || !(!b || !ae(a, b));
}
function de(a) {
    y.call(this, a, -1, ee);
}
u(de, y);
var ee = [4];
function fe(a) {
    y.call(this, a);
}
u(fe, y);
function ge(a) {
    y.call(this, a, -1, he);
}
u(ge, y);
var he = [5];
var ie = [1, 2, 3, 6, 7];
function je(a) {
    a.ib(
        ...ma(
            ta.apply(1, arguments).map((b) => ({
                pb: 4,
                message: b
            }))
        )
    );
}
function ke(a) {
    return function(...args) {
        var b = ta.apply(0, args);
        try {
            return a.apply(this, b);
        } catch (c) {}
    };
}
var le = ke((a) => {
    var b = [];
    var c = {};
    a = q(a);
    for (
        var d = a.next(); !d.done; c = {
            ca: c.ca
        },
        d = a.next()
    )
        (c.ca = d.value),
        ke(
            ((e) => () => {
                b.push('[{"' + e.ca.pb + '":' + Cb(e.ca.message) + '}]');
            })(c)
        )();
    return '[[' + b.join(',') + ']]';
});
function me(a, b) {
    if (n.globalThis.fetch)
        n.globalThis.fetch(a, {
            method: 'POST',
            body: b,
            keepalive: 65536 > b.length,
            credentials: 'omit',
            mode: 'no-cors',
            redirect: 'follow'
        });
    else {
        var c = new XMLHttpRequest();
        c.open('POST', a, !0);
        c.send(b);
    }
}
function ne(a) {
    var b = void 0 === b ? me : b;
    this.l = void 0 === a ? 1e3 : a;
    this.j = b;
    this.i = [];
    this.h = null;
}
ne.prototype.ib = function(...args) {
    var a = ta.apply(0, args);
    var b = this;
    ke(() => {
        b.i.push(...ma(a));
        var c = ke(() => {
            var d = le(b.i);
            b.j('https://pagead2.googlesyndication.com/pagead/ping?e=1', d);
            b.i = [];
            b.h = null;
        });
        100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), (b.h = setTimeout(c, 0))) : null === b.h && (b.h = setTimeout(c, b.l));
    })();
};
function oe(a) {
    y.call(this, a, -1, pe);
}
u(oe, y);
function qe(a) {
    y.call(this, a);
}
u(qe, y);
qe.prototype.$ = function() {
    return C(this, 1, 0);
};
function re(a) {
    y.call(this, a);
}
u(re, y);
var pe = [2, 4, 5];
var se = [1, 2];
function te(a) {
    y.call(this, a, -1, ue);
}
u(te, y);
function ve(a) {
    y.call(this, a);
}
u(ve, y);
var ue = [2, 3];
var we = [1, 2, 3, 4];
function xe(a) {
    y.call(this, a);
}
u(xe, y);
xe.prototype.getTagSessionCorrelator = function() {
    return C(this, 2, 0);
};
var zb = [4, 5, 7];
function ye(a, b, c) {
    var d = void 0 === d ? new ne(b) : d;
    this.i = a;
    this.m = c;
    this.j = d;
    this.h = [];
    this.l = 0 < this.i && Dc() < 1 / this.i;
}
function ze(a, b, c, d, e, f) {
    var g = new qe();
    b = vb(g, 1, b);
    c = vb(b, 2, c);
    b = new oe();
    var h = void 0 === h ? !1 : h;
    d = A(b, 4, null == d ? hb([]) : Array.isArray(d) ? hb(d) : d, h);
    e = Ab(d, 5, e);
    e.h || (e.h = {});
    d = c ? c.i : c;
    e.h[1] = c;
    var k = A(e, 1, d, void 0 === k ? !1 : k);
    k = Ab(k, 2, a.h);
    f = vb(k, 6, f);
    k = new xe();
    f = yb(k, 4, f);
    a.l && je(a.j, Ae(a, f));
    a.h.push(c);
    100 < a.h.length && a.h.shift();
}
function Be(a, b, c, d) {
    if (a.m) {
        var e = new te();
        b = Ab(e, 2, b);
        c = Ab(b, 3, c);
        d && vb(c, 1, d);
        d = new xe();
        d = yb(d, 7, c);
        a.l && je(a.j, Ae(a, d));
    }
}
function Ae(a, b) {
    b = vb(b, 1, Date.now());
    var c = Sc(window);
    b = vb(b, 2, c);
    return vb(b, 6, a.i);
}
function L(a) {
    var b = 'qa';
    if (a.qa && a.hasOwnProperty(b)) return a.qa;
    b = new a();
    return (a.qa = b);
}
function Ce() {
    var a = {};
    this.h = ((a[Wd] = {}), (a[Xd] = {}), (a[Yd] = {}), a);
}
var De = /^true$/.test('false');
function Ee(a, b) {
    switch (b) {
        case 1:
            return Fb(a, 1, ie);
        case 2:
            return Fb(a, 2, ie);
        case 3:
            return Fb(a, 3, ie);
        case 6:
            return Fb(a, 6, ie);
        default:
            return null;
    }
}
function Fe(a, b) {
    if (!a) return null;
    switch (b) {
        case 1:
            return D(a, 1);
        case 7:
            return Eb(a, 3);
        case 2:
            return ub(a, 2);
        case 3:
            return Eb(a, 3);
        case 6:
            return sb(a, 4);
        default:
            return null;
    }
}
var Ge = ic(() => {
    if (!De) return {};
    try {
        var a = window.sessionStorage && window.sessionStorage.getItem('GGDFSSK');
        if (a) return JSON.parse(a);
    } catch (b) {}
    return {};
});
function He(a, b, c, d) {
    var e = (d = void 0 === d ? 0 : d);
    var f;
    var g;
    L(Ie).j[e] = null != (g = null == (f = L(Ie).j[e]) ? void 0 : f.add(b)) ? g : new n.Set().add(b);
    e = Ge();
    if (null != e[b]) return e[b];
    b = Je(d)[b];
    if (!b) return c;
    b = new ge(b);
    b = Ke(b);
    a = Fe(b, a);
    return null != a ? a : c;
}
function Ke(a) {
    var b = L(Ce).h;
    if (b) {
        var c = Za(H(a, fe, 5), (d) => ce(G(d, Rd, 1), b));
        if (c) return G(c, de, 2);
    }
    return G(a, de, 4);
}
function Ie() {
    this.h = {};
    this.l = [];
    this.j = {};
    this.i = {};
}
function Le(a, b, c) {
    return !!He(1, a, void 0 === b ? !1 : b, c);
}
function Me(a, b, c) {
    b = void 0 === b ? 0 : b;
    a = Number(He(2, a, b, c));
    return isNaN(a) ? b : a;
}
function Ne(a, b, c) {
    return He(3, a, void 0 === b ? '' : b, c);
}
function Oe(a, b, c) {
    b = void 0 === b ? [] : b;
    return He(6, a, b, c);
}
function Je(a) {
    return L(Ie).h[a] || (L(Ie).h[a] = {});
}
function Pe(a, b) {
    var c = Je(b);
    Ec(a, (d, e) => (c[e] = d));
}
function Qe(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = [];
    var g = [];
    Ua(b, (h) => {
        var k = Je(h);
        Ua(a, (l) => {
            var m = xb(l, ie);
            var r = Ee(l, m);
            if (r) {
                a: {
                    var t = new ve();
                    switch (m) {
                        case 1:
                            wb(t, 1, we, r);
                            break;
                        case 2:
                            wb(t, 2, we, r);
                            break;
                        case 3:
                            wb(t, 3, we, r);
                            break;
                        case 6:
                            wb(t, 4, we, r);
                            break;
                        default:
                            m = void 0;
                            break a;
                    }
                    m = t;
                }
                if ((t = m)) {
                    var x;
                    t = !(null == (x = L(Ie).j[h]) || !x.has(r));
                }
                t && f.push(m);
                if ((x = m)) {
                    var E;
                    x = !(null == (E = L(Ie).i[h]) || !E.has(r));
                }
                x && g.push(m);
                if (!e) {
                    var B;
                    var F;
                    L(Ie).i[h] = null != (F = null == (B = L(Ie).i[h]) ? void 0 : B.add(r)) ? F : new n.Set().add(r);
                }
                k[r] = l.toJSON();
            }
        });
    });
    (f.length || g.length) && Be(c, f, g, null != d ? d : void 0);
}
function Re(a, b) {
    var c = Je(b);
    Ua(a, (d) => {
        var e = new ge(d);
        var f = xb(e, ie);
        (e = Ee(e, f)) && (c[e] || (c[e] = d));
    });
}
function Se() {
    return Wa(p(Object, 'keys').call(Object, L(Ie).h), (a) => Number(a));
}
function Te(a) {
    $a(L(Ie).l, a) || Pe(Je(4), a);
}
function M(a) {
    this.methodName = a;
}
var Ue = new M(1);
var Ve = new M(16);
var We = new M(15);
var Xe = new M(2);
var Ye = new M(3);
var Ze = new M(4);
var $e = new M(5);
var af = new M(6);
var bf = new M(7);
var cf = new M(8);
var df = new M(9);
var ef = new M(10);
var ff = new M(11);
var gf = new M(12);
var hf = new M(13);
var jf = new M(14);
function N(a, b, c) {
    c.hasOwnProperty(a.methodName) ||
        Object.defineProperty(c, String(a.methodName), {
            value: b
        });
}
function kf(a, b, c) {
    return b[a.methodName] || c || (() => {});
}
function lf(a) {
    N($e, Le, a);
    N(af, Me, a);
    N(bf, Ne, a);
    N(cf, Oe, a);
    N(hf, Re, a);
    N(We, Te, a);
}
function mf(a) {
    N(
        Ze,
        (b) => {
            L(Ce).h = b;
        },
        a
    );
    N(
        df,
        (b, c) => {
            var d = L(Ce);
            d.h[Wd][b] || (d.h[Wd][b] = c);
        },
        a
    );
    N(
        ef,
        (b, c) => {
            var d = L(Ce);
            d.h[Xd][b] || (d.h[Xd][b] = c);
        },
        a
    );
    N(
        ff,
        (b, c) => {
            var d = L(Ce);
            d.h[Yd][b] || (d.h[Yd][b] = c);
        },
        a
    );
    N(
        jf,
        (b) => {
            for (var c = L(Ce), d = q([Wd, Xd, Yd]), e = d.next(); !e.done; e = d.next())(e = e.value), p(Object, 'assign').call(Object, c.h[e], b[e]);
        },
        a
    );
}
function nf(a) {
    a.hasOwnProperty('init-done') ||
        Object.defineProperty(a, 'init-done', {
            value: !0
        });
}
function of () {
    this.l = () => {};
    this.j = () => {};
    this.i = () => {};
    this.h = () => [];
}
function pf(a, b, c) {
    a.l = kf(Ue, b, () => {});
    a.i = (d) => {
        kf(Xe, b, () => [])(d, c);
    };
    a.h = () => kf(Ye, b, () => [])(c);
    a.j = (d) => {
        kf(Ve, b, () => {})(d, c);
    };
}
var yd;
var qf;
var Ld = new Id();
function rf(a) {
    null != a && (v.google_measure_js_timing = a);
    v.google_measure_js_timing || ((a = Ld), (a.h = !1), a.events != a.i.google_js_reporting_queue && (Hd() && Ua(a.events, Jd), (a.events.length = 0)));
}
((a) => {
    yd = a || new wd();
    'number' !== typeof v.google_srt && (v.google_srt = Math.random());
    xd();
    qf = new Kd();
    qf.Qa(!0);
    'complete' == v.document.readyState ?
        rf() :
        Ld.h &&
        kc(v, 'load', () => {
            rf();
        });
})();
function sf(a, b, c) {
    return qf.ma(a, b, c);
}
function tf(a, b) {
    return qf.La(a, b, void 0, void 0);
}
function uf(a, b, c) {
    var d = L( of ).h();
    !b.eid && d.length && (b.eid = d.toString());
    zd(yd, a, b, !0, c);
}
function vf(a) {
    return (b) => {
        null != b || (b = 'unnamed rejection');
        qf.I(a, b instanceof Error ? b : Error(b), void 0, void 0);
    };
}
function wf(a, b, c, d) {
    var e;
    md(b) ? (e = b.msg || Md(b.error)) : (e = Md(b));
    return 0 == e.indexOf('TagError') ?
        ((c = b instanceof ld ? b.error : b), c.pbr || ((c.pbr = !0), qf.I(a, b, 0.1, d, 'puberror')), !1) :
        qf.I(a, b, c, d);
}
var xf = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5
};
function yf() {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.wasReactiveTagRequestSent = !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.messageValidationEnabled = !1;
    this.floatingAdsStacking = new zf();
}
function Af(a) {
    a.google_reactive_ads_global_state ?
        null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new zf()) :
        (a.google_reactive_ads_global_state = new yf());
    return a.google_reactive_ads_global_state;
}
function zf() {
    this.maxZIndexRestrictions = {};
    this.nextRestrictionId = 0;
    this.maxZIndexListeners = [];
}
function Bf(a) {
    a = a.document;
    var b = {};
    a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
    return b || {};
}
function Cf(a) {
    return Bf(a).clientWidth;
}
bb || !w('Safari') || Ra();
function Df() {
    this.i = new If(this);
    this.h = 0;
}
Df.prototype.resolve = function(a) {
    Jf(this);
    this.h = 1;
    this.l = a;
    Kf(this.i);
};
Df.prototype.reject = function(a) {
    Jf(this);
    this.h = 2;
    this.j = a;
    Kf(this.i);
};
function Jf(a) {
    if (0 != a.h) throw Error('Already resolved/rejected.');
}
function If(a) {
    this.h = a;
}
If.prototype.then = function(a, b) {
    if (this.i) throw Error('Then functions already set.');
    this.i = a;
    this.j = b;
    Kf(this);
};
function Kf(a) {
    switch (a.h.h) {
        case 0:
            break;
        case 1:
            a.i && a.i(a.h.l);
            break;
        case 2:
            a.j && a.j(a.h.j);
            break;
        default:
            throw Error('Unhandled deferred state.');
    }
}
function Lf(a) {
    this.h = a.slice(0);
}
Lf.prototype.apply = function(a) {
    return new Lf(a(this.h.slice(0)));
};
Lf.prototype.get = function(a) {
    return this.h[a];
};
Lf.prototype.add = function(a) {
    var b = this.h.slice(0);
    b.push(a);
    return new Lf(b);
};
function Mf(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
}
function Nf() {
    this.h = {};
    this.i = {};
}
Nf.prototype.set = function(a, b) {
    var c = Of(a);
    this.h[c] = b;
    this.i[c] = a;
};
Nf.prototype.get = function(a, b) {
    a = Of(a);
    return void 0 !== this.h[a] ? this.h[a] : b;
};
Nf.prototype.clear = function() {
    this.h = {};
    this.i = {};
};
function Of(a) {
    return a instanceof Object ? String(Aa(a)) : a + '';
}
function Pf(a, b) {
    this.h = a;
    this.i = b;
}
function Qf(a) {
    return null != a.h ? a.h.value : null;
}
function Rf(a, b) {
    null != a.h && b(a.h.value);
    return a;
}
Pf.prototype.map = function(a) {
    return null != this.h ? ((a = a(this.h.value)), a instanceof Pf ? a : Sf(a)) : this;
};
function Tf(a, b) {
    null != a.h || b(a.i);
    return a;
}
function Sf(a) {
    return new Pf({
            value: a
        },
        null
    );
}
function Uf(a) {
    return new Pf(null, a);
}
function Vf(a) {
    try {
        return Sf(a());
    } catch (b) {
        return Uf(b);
    }
}
function Wf(a) {
    this.h = new Nf();
    if (a)
        for (var b = 0; b < a.length; ++b) this.add(a[b]);
}
Wf.prototype.add = function(a) {
    this.h.set(a, !0);
};
Wf.prototype.contains = function(a) {
    return void 0 !== this.h.h[Of(a)];
};
function Xf() {
    this.h = new Nf();
}
Xf.prototype.set = function(a, b) {
    var c = this.h.get(a);
    c || ((c = new Wf()), this.h.set(a, c));
    c.add(b);
};
function Yf(a) {
    y.call(this, a, -1, Zf);
}
u(Yf, y);
Yf.prototype.getId = function() {
    return z(this, 3);
};
var Zf = [4];
function $f(a) {
    var b = void 0 === a.Ea ? void 0 : a.Ea;
    var c = void 0 === a.ab ? void 0 : a.ab;
    var d = void 0 === a.Na ? void 0 : a.Na;
    this.h = void 0 === a.Xa ? void 0 : a.Xa;
    this.l = new Lf(b || []);
    this.j = d;
    this.i = c;
}
function ag(a) {
    var b = [];
    var c = a.l;
    c &&
        c.h.length &&
        b.push({
            U: 'a',
            Z: bg(c)
        });
    null != a.h &&
        b.push({
            U: 'as',
            Z: a.h
        });
    null != a.i &&
        b.push({
            U: 'i',
            Z: String(a.i)
        });
    null != a.j &&
        b.push({
            U: 'rp',
            Z: String(a.j)
        });
    b.sort((d, e) => d.U.localeCompare(e.U));
    b.unshift({
        U: 't',
        Z: 'aa'
    });
    return b;
}
function bg(a) {
    a = a.h.slice(0).map(cg);
    a = JSON.stringify(a);
    return Fc(a);
}
function cg(a) {
    var b = {};
    null != z(a, 7) && (b.q = z(a, 7));
    null != z(a, 2) && (b.o = z(a, 2));
    null != z(a, 5) && (b.p = z(a, 5));
    return b;
}
function dg(a) {
    y.call(this, a);
}
u(dg, y);
dg.prototype.setLocation = function(a) {
    return A(this, 1, a);
};
function eg(a, b) {
    this.Ga = a;
    this.Ma = b;
}
function fg(a) {
    var b = [].slice.call(arguments).filter(hc((e) => null === e));
    if (!b.length) return null;
    var c = [];
    var d = {};
    b.forEach((e) => {
        c = c.concat(e.Ga || []);
        d = p(Object, 'assign').call(Object, d, e.Ma);
    });
    return new eg(c, d);
}
function gg(a) {
    switch (a) {
        case 1:
            return new eg(null, {
                google_ad_semantic_area: 'mc'
            });
        case 2:
            return new eg(null, {
                google_ad_semantic_area: 'h'
            });
        case 3:
            return new eg(null, {
                google_ad_semantic_area: 'f'
            });
        case 4:
            return new eg(null, {
                google_ad_semantic_area: 's'
            });
        default:
            return null;
    }
}
function hg(a) {
    if (null == a) a = null;
    else {
        var b = ag(a);
        a = [];
        b = q(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = String(c.Z);
            a.push(c.U + '.' + (20 >= d.length ? d : d.slice(0, 19) + '_'));
        }
        a = new eg(null, {
            google_placement_id: a.join('~')
        });
    }
    return a;
}
var ig = {};
var jg = new eg(['google-auto-placed'], ((ig.google_reactive_ad_format = 40), (ig.google_tag_origin = 'qs'), ig));
function kg(a) {
    y.call(this, a);
}
u(kg, y);
function lg(a) {
    y.call(this, a);
}
u(lg, y);
lg.prototype.getName = function() {
    return z(this, 4);
};
function mg(a) {
    y.call(this, a);
}
u(mg, y);
function ng(a) {
    y.call(this, a);
}
u(ng, y);
function og(a) {
    y.call(this, a);
}
u(og, y);
var pg = [1, 2, 3];
function qg(a) {
    y.call(this, a);
}
u(qg, y);
function rg(a) {
    y.call(this, a, -1, sg);
}
u(rg, y);
var sg = [6, 7, 9, 10, 11];
function tg(a) {
    y.call(this, a, -1, ug);
}
u(tg, y);
function vg(a) {
    y.call(this, a);
}
u(vg, y);
function wg(a) {
    y.call(this, a);
}
u(wg, y);
var ug = [1];
var xg = [1, 2];
function yg(a) {
    y.call(this, a, -1, zg);
}
u(yg, y);
function Ag(a) {
    y.call(this, a);
}
u(Ag, y);
function Bg(a) {
    y.call(this, a, -1, Cg);
}
u(Bg, y);
function Dg(a) {
    y.call(this, a);
}
u(Dg, y);
function Eg(a) {
    y.call(this, a);
}
u(Eg, y);
function Fg(a) {
    y.call(this, a);
}
u(Fg, y);
function Gg(a) {
    y.call(this, a);
}
u(Gg, y);
var zg = [1, 2, 5, 7];
var Cg = [2, 5, 6, 11];
function Hg(a) {
    y.call(this, a);
}
u(Hg, y);
function Ig(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = 'INS' == a.tagName))
        a: {
            b = ['adsbygoogle-placeholder'];
            a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a;
                }
            b = !0;
        }
    return b;
}
function Jg(a, b, c) {
    switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if ((c = b.parentNode)) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType;) d = d.nextSibling;
                c.insertBefore(a, d);
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a);
    }
    Ig(b) && (b.setAttribute('data-init-display', b.style.display), (b.style.display = 'block'));
}
function O(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
}
function P(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? 0 : b;
}
function Kg(a, b) {
    b = void 0 === b ? [] : b;
    this.h = a;
    this.defaultValue = b;
}
var Lg = new O(1084);
var Mg = new O(1082);
var Ng = new P(62, 0.001);
var Og = new(function(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? '' : b;
})(14);
var Pg = new P(1114, 1);
var Qg = new P(1110);
var Rg = new P(1111);
var Sg = new P(1112);
var Tg = new P(1113);
var Ug = new P(1104);
var Vg = new P(1108);
var Wg = new P(1106);
var Xg = new P(1107);
var Yg = new P(1105);
var Zg = new P(1115, 1);
var $g = new O(1121);
var ah = new O(316);
var bh = new O(313);
var ch = new O(369);
var dh = new O(1093);
var eh = new P(1098);
var fh = new O(1026);
var gh = new O(1090);
var hh = new O(1053);
var ih = new O(1120);
var jh = new O(1100, !0);
var kh = new O(1109);
var lh = new P(1046);
var mh = new O(1102, !0);
var nh = new O(218);
var oh = new O(216);
var ph = new O(217);
var qh = new O(1125);
var rh = new O(227);
var sh = new O(208);
var th = new O(282);
var uh = new O(1086);
var vh = new P(1079, 5);
var wh = new O(251);
var xh = new O(1124);
var yh = new Kg(1939);
var zh = new Kg(1934, [
    'A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9',
    'A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9',
    'A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9'
]);
var Ah = new O(203);
var Bh = new O(241);
var Ch = new O(84);
var Dh = new P(1929, 50);
var Eh = new P(1905);
var Fh = new O(1956);
var Gh = new O(240);
var Hh = new O(1928);
var Ih = new O(1941);
var Jh = new O(370946349);
var Kh = new O(392736476);
var Lh = new O(397079674);
var Mh = new P(406149835);
var Nh = new Kg(1932, [
    'AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
    'Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    'A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    'AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    'A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='
]);
var Oh = new O(401243724);
var Ph = new P(1935);
function Qh() {
    var a = {};
    this.i = (b, c) => (null != a[b] ? a[b] : c);
    this.j = (b, c) => (null != a[b] ? a[b] : c);
    this.l = (b, c) => (null != a[b] ? a[b] : c);
    this.h = (b, c) => (null != a[b] ? a[b] : c);
    this.m = () => {};
}
function Q(a) {
    return L(Qh).i(a.h, a.defaultValue);
}
function R(a) {
    return L(Qh).j(a.h, a.defaultValue);
}
function Rh() {
    return L(Qh).l(Og.h, Og.defaultValue);
}
function Sh(a, b, c) {
    function d(f) {
        f = Th(f);
        return null == f ? !1 : c > f;
    }
    function e(f) {
        f = Th(f);
        return null == f ? !1 : c < f;
    }
    switch (b) {
        case 0:
            return {
                init: Uh(a.previousSibling, e),
                    ha(f) {
                        return Uh(f.previousSibling, e);
                    },
                    la: 0
            };
        case 2:
            return {
                init: Uh(a.lastChild, e),
                    ha(f) {
                        return Uh(f.previousSibling, e);
                    },
                    la: 0
            };
        case 3:
            return {
                init: Uh(a.nextSibling, d),
                    ha(f) {
                        return Uh(f.nextSibling, d);
                    },
                    la: 3
            };
        case 1:
            return {
                init: Uh(a.firstChild, d),
                    ha(f) {
                        return Uh(f.nextSibling, d);
                    },
                    la: 3
            };
    }
    throw Error('Un-handled RelativePosition: ' + b);
}
function Th(a) {
    return a.hasOwnProperty('google-ama-order-assurance') ? a['google-ama-order-assurance'] : null;
}
function Uh(a, b) {
    return a && b(a) ? a : null;
}
var Vh = {
    rectangle: 1,
    horizontal: 2,
    vertical: 4
};
function Wh(a, b) {
    do {
        var c = zc(a, b);
        if (c && 'fixed' == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
}
function Xh(a, b) {
    for (var c = ['width', 'height'], d = 0; d < c.length; d++) {
        var e = 'google_ad_' + c[d];
        if (!b.hasOwnProperty(e)) {
            var f = I(a[c[d]]);
            f = null === f ? null : Math.round(f);
            null != f && (b[e] = f);
        }
    }
}
function Yh(a, b) {
    return !((Kc.test(b.google_ad_width) || Jc.test(a.style.width)) && (Kc.test(b.google_ad_height) || Jc.test(a.style.height)));
}
function Zh(a, b) {
    return (a = $h(a, b)) ? a.y : 0;
}
function $h(a, b) {
    try {
        var c = b.document.documentElement.getBoundingClientRect();
        var d = a.getBoundingClientRect();
        return {
            x: d.left - c.left,
            y: d.top - c.top
        };
    } catch (e) {
        return null;
    }
}
function ai(a) {
    var b = 0;
    var c;
    for (c in Vh) - 1 != a.indexOf(c) && (b |= Vh[c]);
    return b;
}
function bi(a, b, c, d, e) {
    if (a.top != a) return hd(a) ? 3 : 16;
    if (!(488 > Cf(a))) return 4;
    if (!(a.innerHeight >= a.innerWidth)) return 5;
    var f = Cf(a);
    if (!f || (f - c) / f > d) a = 6;
    else {
        if ((c = 'true' != e.google_full_width_responsive))
            a: {
                c = Cf(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = zc(b, a)) && (e = I(d.width)) && !(e >= c) && 'visible' != d.overflow) {
                        c = !0;
                        break a;
                    }
                c = !1;
            }
        a = c ? 7 : !0;
    }
    return a;
}
function ci(a, b, c, d) {
    var e = bi(b, c, a, 0.3, d);
    !0 !== e ?
        (a = e) :
        'true' == d.google_full_width_responsive || Wh(c, b) ?
        ((b = Cf(b)), (a = b - a), (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10)) :
        (a = 9);
    return a;
}
function di(a, b, c) {
    a = a.style;
    'rtl' == b
        ?
        Q(wh) ?
        a.setProperty('margin-right', c, 'important') :
        (a.marginRight = c) :
        Q(wh) ?
        a.setProperty('margin-left', c, 'important') :
        (a.marginLeft = c);
}
function ei(a, b) {
    if (3 == b.nodeType) return /\S/.test(b.data);
    if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        try {
            var c = zc(b, a);
        } catch (d) {}
        return !c || ('none' != c.display && !('absolute' == c.position && ('hidden' == c.visibility || 'collapse' == c.visibility)));
    }
    return !1;
}
function fi(a, b, c) {
    a = $h(b, a);
    return 'rtl' == c ? -a.x : a.x;
}
function gi(a, b) {
    var c;
    c = (c = b.parentElement) ? ((c = zc(c, a)) ? c.direction : '') : '';
    if (c) {
        b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = 'none';
        b.style.borderSpacing = b.style.padding = '0';
        di(b, c, '0px');
        b.style.width = Cf(a) + 'px';
        if (0 !== fi(a, b, c)) {
            di(b, c, '0px');
            var d = fi(a, b, c);
            di(b, c, -1 * d + 'px');
            a = fi(a, b, c);
            0 !== a && a !== d && di(b, c, (d / (a - d)) * d + 'px');
        }
        b.style.zIndex = 30;
    }
}
function S(a, b) {
    this.l = a;
    this.j = b;
}
S.prototype.minWidth = function() {
    return this.l;
};
S.prototype.height = function() {
    return this.j;
};
S.prototype.h = function(a) {
    return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a));
};
S.prototype.i = () => {};
function hi(a, b, c, d) {
    d = void 0 === d ? (f) => f : d;
    var e;
    return (a.style && a.style[c] && d(a.style[c])) || ((e = zc(a, b)) && e[c] && d(e[c])) || null;
}
function ii(a) {
    return (b) => b.minWidth() <= a;
}
function ji(a, b, c, d) {
    var e = a && ki(c, b);
    var f = li(b, d);
    return (g) => !(e && g.height() >= f);
}
function mi(a) {
    return (b) => b.height() <= a;
}
function ki(a, b) {
    return Zh(a, b) < Bf(b).clientHeight - 100;
}
function ni(a, b) {
    var c = hi(b, a, 'height', I);
    if (c) return c;
    var d = b.style.height;
    b.style.height = 'inherit';
    c = hi(b, a, 'height', I);
    b.style.height = d;
    if (c) return c;
    c = Infinity;
    do(d = b.style && I(b.style.height)) && (c = Math.min(c, d)), (d = hi(b, a, 'maxHeight', I)) && (c = Math.min(c, d));
    while ((b = b.parentElement) && 'HTML' != b.tagName);
    return c;
}
function li(a, b) {
    var c = 0 == cd(a);
    return b && c ? Math.max(250, (2 * Bf(a).clientHeight) / 3) : 250;
}
var T = {};
var oi =
    ((T.google_ad_channel = !0),
        (T.google_ad_client = !0),
        (T.google_ad_host = !0),
        (T.google_ad_host_channel = !0),
        (T.google_adtest = !0),
        (T.google_tag_for_child_directed_treatment = !0),
        (T.google_tag_for_under_age_of_consent = !0),
        (T.google_tag_partner = !0),
        (T.google_restrict_data_processing = !0),
        (T.google_page_url = !0),
        (T.google_debug_params = !0),
        (T.google_adbreak_test = !0),
        (T.google_ad_frequency_hint = !0),
        (T.google_admob_interstitial_slot = !0),
        (T.google_admob_rewarded_slot = !0),
        (T.google_max_ad_content_rating = !0),
        T);
var pi = RegExp('(^| )adsbygoogle($| )');
function qi(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        var e = mc(d.ub);
        a[e] = d.value;
    }
}
function ri(a, b, c, d) {
    this.l = a;
    this.i = b;
    this.j = c;
    this.h = d;
}
function si(a, b) {
    var c = [];
    try {
        c = b.querySelectorAll(a.l);
    } catch (g) {}
    if (!c.length) return [];
    b = c;
    c = b.length;
    if (0 < c) {
        for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
        b = d;
    } else b = [];
    b = ti(a, b);
    'number' === typeof a.i && ((c = a.i), 0 > c && (c += b.length), (b = 0 <= c && c < b.length ? [b[c]] : []));
    if ('number' === typeof a.j) {
        c = [];
        for (d = 0; d < b.length; d++) {
            e = ui(b[d]);
            var f = a.j;
            0 > f && (f += e.length);
            0 <= f && f < e.length && c.push(e[f]);
        }
        b = c;
    }
    return b;
}
ri.prototype.toString = function() {
    return JSON.stringify({
        nativeQuery: this.l,
        occurrenceIndex: this.i,
        paragraphIndex: this.j,
        ignoreMode: this.h
    });
};
function ti(a, b) {
    if (null == a.h) return b;
    switch (a.h) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error('Unknown ignore mode: ' + a.h);
    }
}
function ui(a) {
    var b = [];
    Mf(a.getElementsByTagName('p'), (c) => {
        100 <= vi(c) && b.push(c);
    });
    return b;
}
function vi(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || 'SCRIPT' == a.tagName) return 0;
    var b = 0;
    Mf(a.childNodes, (c) => {
        b += vi(c);
    });
    return b;
}
function wi(a) {
    return 0 == a.length || isNaN(a[0]) ? a : '\\' + (30 + parseInt(a[0], 10)) + ' ' + a.substring(1);
}
function xi(a) {
    if (!a) return null;
    var b = z(a, 7);
    if (z(a, 1) || a.getId() || 0 < sb(a, 4).length) {
        var c = a.getId();
        b = sb(a, 4);
        var d = z(a, 1);
        var e = '';
        d && (e += d);
        c && (e += '#' + wi(c));
        if (b)
            for (c = 0; c < b.length; c++) e += '.' + wi(b[c]);
        a = (b = e) ? new ri(b, z(a, 2), z(a, 5), yi(z(a, 6))) : null;
    } else a = b ? new ri(b, z(a, 2), z(a, 5), yi(z(a, 6))) : null;
    return a;
}
var zi = {
    1: 1,
    2: 2,
    3: 3,
    0: 0
};
function yi(a) {
    return null == a ? a : zi[a];
}
var Ai = {
    1: 0,
    2: 1,
    3: 2,
    4: 3
};
function Bi(a) {
    return (a.google_ama_state = a.google_ama_state || {});
}
function Ci(a) {
    a = Bi(a);
    return (a.optimization = a.optimization || {});
}
function Di(a) {
    switch (z(a, 8)) {
        case 1:
        case 2:
            if (null == a) var b = null;
            else
                (b = G(a, Yf, 1)),
                null == b ?
                (b = null) :
                ((a = z(a, 2)),
                    (b =
                        null == a ?
                        null :
                        new $f({
                            Ea: [b],
                            Na: a
                        })));
            return null != b ? Sf(b) : Uf(Error('Missing dimension when creating placement id'));
        case 3:
            return Uf(Error('Missing dimension when creating placement id'));
        default:
            return Uf(Error('Invalid type: ' + z(a, 8)));
    }
}
function Ei(a, b) {
    function c() {
        d.push({
            anchor: e.anchor,
            position: e.position
        });
        return e.anchor == b.anchor && e.position == b.position;
    }
    for (var d = [], e = a; e;) {
        switch (e.position) {
            case 1:
                if (c()) return d;
                e.position = 2;
            case 2:
                if (c()) return d;
                if (e.anchor.firstChild) {
                    e = {
                        anchor: e.anchor.firstChild,
                        position: 1
                    };
                    continue;
                } else e.position = 3;
            case 3:
                if (c()) return d;
                e.position = 4;
            case 4:
                if (c()) return d;
        }
        for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
            e = {
                anchor: e.anchor.parentNode,
                position: 3
            };
            if (c()) return d;
            e.position = 4;
            if (c()) return d;
        }
        e && e.anchor.nextSibling ?
            (e = {
                anchor: e.anchor.nextSibling,
                position: 1
            }) :
            (e = null);
    }
    return d;
}
function Fi(a, b) {
    this.i = a;
    this.h = b;
}
function Gi(a, b) {
    var c = new Xf();
    var d = new Wf();
    b.forEach((e) => {
        if (Gb(e, mg, 1, pg)) {
            e = Gb(e, mg, 1, pg);
            if (G(e, kg, 1) && G(G(e, kg, 1), Yf, 1) && G(e, kg, 2) && G(G(e, kg, 2), Yf, 1)) {
                var f = Hi(a, G(G(e, kg, 1), Yf, 1));
                var g = Hi(a, G(G(e, kg, 2), Yf, 1));
                if (f && g)
                    for (
                        f = q(
                            Ei({
                                anchor: f,
                                position: z(G(e, kg, 1), 2)
                            }, {
                                anchor: g,
                                position: z(G(e, kg, 2), 2)
                            })
                        ),
                        g = f.next(); !g.done; g = f.next()
                    )
                        (g = g.value), c.set(Aa(g.anchor), g.position);
            }
            G(e, kg, 3) && G(G(e, kg, 3), Yf, 1) && (f = Hi(a, G(G(e, kg, 3), Yf, 1))) && c.set(Aa(f), z(G(e, kg, 3), 2));
        } else Gb(e, ng, 2, pg) ? Ii(a, Gb(e, ng, 2, pg), c) : Gb(e, og, 3, pg) && Ji(a, Gb(e, og, 3, pg), d);
    });
    return new Fi(c, d);
}
function Ii(a, b, c) {
    G(b, Yf, 1) &&
        (a = Ki(a, G(b, Yf, 1))) &&
        a.forEach((d) => {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
        });
}
function Ji(a, b, c) {
    G(b, Yf, 1) &&
        (a = Ki(a, G(b, Yf, 1))) &&
        a.forEach((d) => {
            c.add(Aa(d));
        });
}
function Hi(a, b) {
    return (a = Ki(a, b)) && 0 < a.length ? a[0] : null;
}
function Ki(a, b) {
    return (b = xi(b)) ? si(b, a) : null;
}
function Li(a, b) {
    if (!a) return !1;
    a = zc(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return 'left' == a || 'right' == a;
}
function Mi(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
    return a ? a : null;
}
function Ni(a) {
    return !!a.nextSibling || (!!a.parentNode && Ni(a.parentNode));
}
function Oi(a) {
    var b = {};
    a &&
        sb(a, 6).forEach((c) => {
            b[c] = !0;
        });
    return b;
}
function Pi(a, b, c, d, e) {
    this.h = a;
    this.A = b;
    this.j = c;
    this.m = e || null;
    this.v = (this.D = d) ? Gi(a.document, H(d, lg, 5)) : Gi(a.document, []);
    this.i = 0;
    this.l = !1;
}
function Qi(a, b) {
    if (a.l) return !0;
    a.l = !0;
    var c = H(a.j, rg, 1);
    a.i = 0;
    var d = Oi(a.D);
    try {
        var e = a.h.localStorage.getItem('google_ama_settings');
        var f = e ? pb(Hg, e ? JSON.parse(e) : null) : null;
    } catch (m) {
        f = null;
    }
    if (null !== f && D(f, 2, !1)) return (Bi(a.h).eatf = !0), kd(7, [!0, 0, !1]), !0;
    f = new Wf([2]);
    for (e = 0; e < c.length; e++) {
        var g = a;
        var h = c[e];
        var k = e;
        var l = b;
        if (!G(h, dg, 4) || !f.contains(z(G(h, dg, 4), 1)) || 1 !== z(h, 8) || (h && null != z(h, 4) && d[z(G(h, dg, 4), 2)])) g = null;
        else {
            g.i++;
            if ((h = Ri(g, h, l, d)))
                (l = Bi(g.h)),
                l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0),
                null == l.placed && (l.placed = []),
                l.numAutoAdsPlaced++,
                l.placed.push({
                    index: k,
                    element: h.fa
                }),
                kd(7, [!1, g.i, !0]);
            g = h;
        }
        if (g) return !0;
    }
    kd(7, [!1, a.i, !1]);
    return !1;
}
function Ri(a, b, c, d) {
    if ((b && null != z(b, 4) && d[z(G(b, dg, 4), 2)]) || 1 != z(b, 8)) return null;
    d = G(b, Yf, 1);
    if (!d) return null;
    d = xi(d);
    if (!d) return null;
    d = si(d, a.h.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = Ai[z(b, 2)];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
        a: {
            f = a.h;
            switch (e) {
                case 0:
                    f = Li(Mi(d), f);
                    break a;
                case 3:
                    f = Li(d, f);
                    break a;
                case 2:
                    var g = d.lastChild;
                    f = Li(g ? (1 == g.nodeType ? g : Mi(g)) : null, f);
                    break a;
            }
            f = !1;
        }
        if ((c = !f && !(!c && 2 == e && !Ni(d))))(c = 1 == e || 2 == e ? d : d.parentNode),
        (c = !(c && !Ig(c) && 0 >= c.offsetWidth));
        f = !c;
    }
    if (!(c = f)) {
        c = a.v;
        f = z(b, 2);
        g = Aa(d);
        g = c.i.h.get(g);
        if (!(g = g ? g.contains(f) : !1))
            a: {
                if (c.h.contains(Aa(d)))
                    switch (f) {
                        case 2:
                        case 3:
                            g = !0;
                            break a;
                        default:
                            g = !1;
                            break a;
                    }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(Aa(f))) {
                        g = !0;
                        break a;
                    }
                    f = f.parentElement;
                }
                g = !1;
            }
        c = g;
    }
    if (c) return null;
    c = G(b, qg, 3);
    f = {};
    c && ((f.Sa = z(c, 1)), (f.Fa = z(c, 2)), (f.Za = !!tb(c, 3)));
    c = G(b, dg, 4) && z(G(b, dg, 4), 2) ? z(G(b, dg, 4), 2) : null;
    c = gg(c);
    g = null == z(b, 12) ? null : z(b, 12);
    g =
        null == g ?
        null :
        new eg(null, {
            google_ml_rank: g
        });
    b = Si(a, b);
    b = fg(a.m, c, g, b);
    c = a.h;
    a = a.A;
    var h = c.document;
    var k = f.Za || !1;
    g = nc(new oc(h).h, 'DIV');
    var l = g.style;
    l.width = '100%';
    l.height = 'auto';
    l.clear = k ? 'both' : 'none';
    k = g.style;
    k.textAlign = 'center';
    f.gb && qi(k, f.gb);
    h = nc(new oc(h).h, 'INS');
    k = h.style;
    k.display = 'block';
    k.margin = 'auto';
    k.backgroundColor = 'transparent';
    f.Sa && (k.marginTop = f.Sa);
    f.Fa && (k.marginBottom = f.Fa);
    f.Wa && qi(k, f.Wa);
    g.appendChild(h);
    f = {
        pa: g,
        fa: h
    };
    f.fa.setAttribute('data-ad-format', 'auto');
    g = [];
    if ((h = b && b.Ga)) f.pa.className = h.join(' ');
    h = f.fa;
    h.className = 'adsbygoogle';
    h.setAttribute('data-ad-client', a);
    g.length && h.setAttribute('data-ad-channel', g.join('+'));
    a: {
        try {
            var m = f.pa;
            var r = void 0 === r ? 0 : r;
            if (Q(bh)) {
                r = void 0 === r ? 0 : r;
                var t = Sh(d, e, r);
                if (t.init) {
                    var x = t.init;
                    for (d = x;
                        (d = t.ha(d));) x = d;
                    var E = {
                        anchor: x,
                        position: t.la
                    };
                } else
                    E = {
                        anchor: d,
                        position: e
                    };
                m['google-ama-order-assurance'] = r;
                Jg(m, E.anchor, E.position);
            } else Jg(m, d, e);
            b: {
                var B = f.fa;
                B.dataset.adsbygoogleStatus = 'reserved';
                B.className += ' adsbygoogle-noablate';
                m = {
                    element: B
                };
                var F = b && b.Ma;
                if (B.hasAttribute('data-pub-vars')) {
                    try {
                        F = JSON.parse(B.getAttribute('data-pub-vars'));
                    } catch (va) {
                        break b;
                    }
                    B.removeAttribute('data-pub-vars');
                }
                F && (m.params = F);
                (c.adsbygoogle = c.adsbygoogle || []).push(m);
            }
        } catch (va) {
            (B = f.pa) &&
            B.parentNode &&
                ((F = B.parentNode), F.removeChild(B), Ig(F) && (F.style.display = F.getAttribute('data-init-display') || 'none'));
            B = !1;
            break a;
        }
        B = !0;
    }
    return B ? f : null;
}
function Si(a, b) {
    return Qf(
        Tf(Di(b).map(hg), (c) => {
            Bi(a.h).exception = c;
        })
    );
}
function Ti(a) {
    if (Q(ah)) var b = null;
    else
        try {
            b = a.getItem('google_ama_config');
        } catch (d) {}
    b = null;
}
try {
    var c = b ? pb(yg, b ? JSON.parse(b) : null) : null;
} catch (d) {
    c = null;
}
return c;
}
function Ui(a) {
    y.call(this, a);
}
u(Ui, y);
function Vi(a) {
    try {
        var b = a.localStorage.getItem('google_auto_fc_cmp_setting') || null;
    } catch (d) {
        b = null;
    }
    var c = b;
    return c ? Vf(() => pb(Ui, c ? JSON.parse(c) : null)) : Sf(null);
}
function Wi() {
    this.S = {};
}
function Xi() {
    if (Yi) return Yi;
    var a = Xc() || fd();
    var b = a.google_persistent_state_async;
    return null != b && 'object' == typeof b && null != b.S && 'object' == typeof b.S ? (Yi = b) : (a.google_persistent_state_async = Yi = new Wi());
}
function Zi(a) {
    return $i[a] || 'google_ps_' + a;
}
function aj(a, b, c) {
    b = Zi(b);
    a = a.S;
    var d = a[b];
    return void 0 === d ? (a[b] = c) : d;
}
var Yi = null;
var bj = {};
var $i = ((bj[8] = 'google_prev_ad_formats_by_region'), (bj[9] = 'google_prev_ad_slotnames_by_region'), bj);
function cj(a) {
    this.h = a || {
        cookie: ''
    };
}
cj.prototype.set = function(a, b, c) {
    var d = !1;
    if ('object' === typeof c) {
        var e = c.vb;
        d = c.wb || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.eb;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.h.cookie =
        a +
        '=' +
        b +
        (f ? ';domain=' + f : '') +
        (g ? ';path=' + g : '') +
        (0 > h ? '' : 0 == h ? ';expires=' + new Date(1970, 1, 1).toUTCString() : ';expires=' + new Date(Date.now() + 1e3 * h).toUTCString()) +
        (d ? ';secure' : '') +
        (null != e ? ';samesite=' + e : '');
};
cj.prototype.get = function(a, b) {
    for (var c = a + '=', d = (this.h.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
        f = Ka(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return '';
    }
    return b;
};
cj.prototype.isEmpty = function() {
    return !this.h.cookie;
};
cj.prototype.clear = function() {
    for (var a = (this.h.cookie || '').split(';'), b = [], c = [], d, e, f = 0; f < a.length; f++)
        (e = Ka(a[f])), (d = e.indexOf('=')), -1 == d ? (b.push(''), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
        (c = b[a]),
        this.get(c),
        this.set(c, '', {
            eb: 0,
            path: void 0,
            domain: void 0
        });
};
function dj(a) {
    y.call(this, a);
}
u(dj, y);
function ej(a) {
    var b = new dj();
    return A(b, 5, a);
}
function fj() {
    this.v = this.v;
    this.D = this.D;
}
fj.prototype.v = !1;
fj.prototype.j = function() {
    if (this.D)
        for (; this.D.length;) this.D.shift()();
};
function gj(a) {
    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && 'string' !== typeof a.tcString) || (void 0 !== a.listenerId && 'number' !== typeof a.listenerId) ?
        2 :
        a.cmpStatus && 'error' !== a.cmpStatus ?
        0 :
        3;
}
function hj(a, b) {
    b = void 0 === b ? 500 : b;
    fj.call(this);
    this.h = a;
    this.i = null;
    this.m = {};
    this.H = 0;
    this.A = b;
    this.l = null;
}
u(hj, fj);
hj.prototype.j = function() {
    this.m = {};
    this.l && (lc(this.h, this.l), delete this.l);
    delete this.m;
    delete this.h;
    delete this.i;
    fj.prototype.j.call(this);
};
function ij(a) {
    return 'function' === typeof a.h.__tcfapi || null != jj(a);
}
hj.prototype.addEventListener = function(a) {
    function b(f, g) {
        clearTimeout(e);
        f
            ?
            ((c = f),
                (c.internalErrorState = gj(c)),
                (g && 0 === c.internalErrorState) || ((c.tcString = 'tcunavailable'), g || (c.internalErrorState = 3))) :
            ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
        a(c);
    }
    var c = {};
    var d = jc(() => a(c));
    var e = 0; -
    1 !== this.A &&
        (e = setTimeout(() => {
            c.tcString = 'tcunavailable';
            c.internalErrorState = 1;
            d();
        }, this.A));
    try {
        kj(this, 'addEventListener', b);
    } catch (f) {
        (c.tcString = 'tcunavailable'), (c.internalErrorState = 3), e && (clearTimeout(e), (e = 0)), d();
    }
};
hj.prototype.removeEventListener = function(a) {
    a && a.listenerId && kj(this, 'removeEventListener', null, a.listenerId);
};
function kj(a, b, c, d) {
    c || (c = () => {});
    if ('function' === typeof a.h.__tcfapi)(a = a.h.__tcfapi), a(b, 2, c, d);
    else if (jj(a)) {
        lj(a);
        var e = ++a.H;
        a.m[e] = c;
        a.i &&
            ((c = {}),
                a.i.postMessage(
                    ((c.__tcfapiCall = {
                            command: b,
                            version: 2,
                            callId: e,
                            parameter: d
                        }),
                        c),
                    '*'
                ));
    } else c({}, !1);
}
function jj(a) {
    if (a.i) return a.i;
    a.i = Mc(a.h, '__tcfapiLocator');
    return a.i;
}
function lj(a) {
    a.l ||
        ((a.l = (b) => {
                try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                } catch (d) {}
            }),
            kc(a.h, 'message', a.l));
}
function mj(a) {
    var b = a.ba;
    var c = a.Ra;
    var d = a.Ya;
    a = nj({
        ba: b,
        ka: a.ka,
        ia: void 0 === a.ia ? !1 : a.ia,
        ja: void 0 === a.ja ? !1 : a.ja
    });
    null != a.h || 'tcunav' != a.i.message ?
        d(a) :
        oj(b, c)
        .then((e) => e.map(pj))
        .then((e) => e.map((f) => qj(b, f)))
        .then(d);
}
function nj(a) {
    var b = a.ba;
    var c = a.ka;
    var d = void 0 === a.ia ? !1 : a.ia;
    if (!(a = !(void 0 === a.ja ? 0 : a.ja) && ij(new hj(b)))) {
        if ((d = !d)) {
            if (c) {
                c = Vi(b);
                if (null == c.h) qf.I(806, c.i, void 0, void 0), (c = !1);
                else if ((c = c.h.value) && null != z(c, 1))
                    b: switch (((c = z(c, 1)), c)) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error('Unhandled AutoGdprFeatureStatus: ' + c);
                    }
                else c = !1;
                c = !c;
            }
            d = c;
        }
        a = d;
    }
    if (!a) return qj(b, ej(!0));
    c = Xi();
    return (c = aj(c, 24, void 0)) ? qj(b, pj(c)) : Uf(Error('tcunav'));
}
function oj(a, b) {
    return n.Promise.race([rj(), sj(a, b)]);
}
function rj() {
    return new n.Promise((a) => {
        var b = Xi();
        a = {
            resolve: a
        };
        var c = aj(b, 25, []);
        c.push(a);
        b.S[Zi(25)] = c;
    }).then(tj);
}
function sj(a, b) {
    return new n.Promise((c) => {
        a.setTimeout(c, b, Uf(Error('tcto')));
    });
}
function tj(a) {
    return a ? Sf(a) : Uf(Error('tcnull'));
}
function pj(a) {
    var b = void 0 === b ? !1 : b;
    if (!1 === a.gdprApplies) var c = !0;
    else
        void 0 === a.internalErrorState && (a.internalErrorState = gj(a)),
        (c =
            'error' === a.cmpStatus ||
            0 !== a.internalErrorState ||
            ('loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus)) ?
            !0 :
            !1);
    if (c)
        if (
            !1 === a.gdprApplies ||
            'tcunavailable' === a.tcString ||
            (void 0 === a.gdprApplies && !b) ||
            'string' !== typeof a.tcString ||
            !a.tcString.length
        )
            a = !0;
        else {
            var d = void 0 === d ? '755' : d;
            b: {
                if (a.publisher && a.publisher.restrictions && ((b = a.publisher.restrictions['1']), void 0 !== b)) {
                    b = b[void 0 === d ? '755' : d];
                    break b;
                }
                b = void 0;
            }
            0 === b ?
                (a = !1) :
                a.purpose && a.vendor ?
                ((b = a.vendor.consents),
                    (d = !(!b || !b[void 0 === d ? '755' : d])) && a.purposeOneTreatment && ((Q(Fh) ? 0 : 'DE' === a.publisherCC) || 'CH' === a.publisherCC) ?
                    (a = !0) :
                    (d && ((a = a.purpose.consents), (d = !(!a || !a['1']))), (a = d))) :
                (a = !0);
        }
    else a = !1;
    return ej(a);
}
function qj(a, b) {
    a: {
        a = void 0 === a ? window : a;
        if (tb(b, 5))
            try {
                var c = a.localStorage;
                break a;
            } catch (d) {}
        c = null;
    }
    return (b = c) ? Sf(b) : Uf(Error('unav'));
}
function uj(a) {
    this.exception = a;
}
function vj(a, b, c) {
    this.j = a;
    this.h = b;
    this.i = c;
}
vj.prototype.start = function() {
    this.l();
};
vj.prototype.l = function() {
    try {
        switch (this.j.document.readyState) {
            case 'complete':
            case 'interactive':
                Qi(this.h, !0);
                wj(this);
                break;
            default:
                Qi(this.h, !1) ? wj(this) : this.j.setTimeout(Fa(this.l, this), 100);
        }
    } catch (a) {
        wj(this, a);
    }
};
function wj(a, b) {
    try {
        var c = a.i;
        var d = c.resolve;
        var e = a.h;
        Bi(e.h);
        H(e.j, rg, 1);
        d.call(c, new uj(b));
    } catch (f) {
        a.i.reject(f);
    }
}
function xj(a) {
    y.call(this, a, -1, yj);
}
u(xj, y);
var yj = [6];
function zj(a) {
    y.call(this, a, -1, Aj);
}
u(zj, y);
function Bj(a) {
    y.call(this, a);
}
u(Bj, y);
function Cj(a) {
    y.call(this, a);
}
u(Cj, y);
var Aj = [7];
function Dj(a) {
    a = (a = new cj(a).get('FCCDCF', '')) ? a : null;
    try {
        return a ? pb(zj, a ? JSON.parse(a) : null) : null;
    } catch (b) {
        return null;
    }
}
function Ej(a) {
    function b() {
        if (!a.frames.__uspapiLocator)
            if (c.body) {
                var d = yc('IFRAME', c);
                d.style.display = 'none';
                d.style.width = '0px';
                d.style.height = '0px';
                d.style.border = 'none';
                d.style.zIndex = '-1000';
                d.style.left = '-1000px';
                d.style.top = '-1000px';
                d.name = '__uspapiLocator';
                c.body.appendChild(d);
            } else a.setTimeout(b, 5);
    }
    var c = a.document;
    b();
}
function Fj(a) {
    this.h = a;
    this.i = a.document;
    this.j = (a = (a = Dj(this.i)) ? G(a, Cj, 5) || null : null) ? z(a, 2) : null;
    (a = Dj(this.i)) && G(a, Bj, 4);
    (a = Dj(this.i)) && G(a, Bj, 4);
}
function Gj() {
    var a = window;
    a.__uspapi || a.frames.__uspapiLocator || ((a = new Fj(a)), Hj(a));
}
function Hj(a) {
    !a.j ||
        a.h.__uspapi ||
        a.h.frames.__uspapiLocator ||
        ((a.h.__uspapiManager = 'fc'),
            Ej(a.h),
            Ha(function(...args) {
                return a.l(...ma(ta.apply(0, args)));
            }));
}
Fj.prototype.l = function(a, b, c) {
    'function' === typeof c &&
        'getUSPData' === a &&
        c({
                version: 1,
                uspString: this.j
            },
            !0
        );
};
function Ij(a) {
    var b = /[a-zA-Z0-9._~-]/;
    var c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, (d) => {
        if (!d.match(c)) {
            var e = decodeURIComponent(d);
            if (e.match(b)) return e;
        }
        return d.toUpperCase();
    });
}
function Jj(a) {
    for (var b = '', c = /[/%?&=]/, d = 0; d < a.length; ++d) {
        var e = a[d];
        b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
}
function Kj(a, b) {
    a = Jj(Ij(a.location.pathname)).replace(/(^\/)|(\/$)/g, '');
    var c = Fc(a);
    var d = Lj(a);
    return (
        p(b, 'find').call(b, (e) => {
            var f = null != z(e, 7) ? z(G(e, Dg, 7), 1) : z(e, 1);
            e = null != z(e, 7) ? z(G(e, Dg, 7), 2) : 2;
            if ('number' !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1;
            }
            return !1;
        }) || null
    );
}
function Lj(a) {
    for (var b = {};;) {
        b[Fc(a)] = !0;
        if (!a) return b;
        a = a.substring(0, a.lastIndexOf('/'));
    }
}
var Mj = {};
var Nj = ((Mj.google_ad_channel = !0), (Mj.google_ad_host = !0), Mj);
function Oj(a, b) {
    a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
    uf('ama', b, 0.01);
}
function Pj(a) {
    var b = {};
    Ec(Nj, (c, d) => {
        d in a && (b[d] = a[d]);
    });
    return b;
}
function Qj(a) {
    a = G(a, Ag, 3);
    return !a || z(a, 1) <= Date.now() ? !1 : !0;
}
function Rj(a) {
    return (a = Ti(a)) ? (Qj(a) ? a : null) : null;
}
function Sj(a, b) {
    try {
        b.removeItem('google_ama_config');
    } catch (c) {
        Oj(a, {
            lserr: 1
        });
    }
}
function Tj(a) {
    Oj(a, {
        atf: 1
    });
}
function Uj(a, b) {
    (a.google_ama_state = a.google_ama_state || {}).exception = b;
    Oj(a, {
        atf: 0
    });
}
function U(a) {
    a.google_ad_modifications || (a.google_ad_modifications = {});
    return a.google_ad_modifications;
}
function Vj(a) {
    a = U(a);
    var b = a.space_collapsing || 'none';
    return a.remove_ads_by_default ? {
            Da: !0,
            ob: b,
            oa: a.ablation_viewport_offset
        } :
        null;
}
function Wj(a, b) {
    a = U(a);
    a.tag_partners = a.tag_partners || [];
    a.tag_partners.push(b);
}
function Xj(a, b) {
    a = U(a);
    a.remove_ads_by_default = !0;
    a.space_collapsing = 'slot';
    a.ablation_viewport_offset = b;
}
function Yj(a) {
    U(J).allow_second_reactive_tag = a;
}
function Zj() {
    var a = U(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
}
function ak(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = bk(b);
    return 'go' != b && -1 != a.indexOf(b) ? !0 : !1;
}
function bk(a) {
    var b = '';
    Ec(a.split('_'), (c) => {
        b += c.substr(0, 2);
    });
    return b;
}
function ck() {
    var a = this;
    this.promise = new n.Promise((b, c) => {
        a.resolve = b;
        a.reject = c;
    });
}
function dk() {
    var a = new ck();
    this.promise = a.promise;
    this.resolve = a.resolve;
}
function ek(a) {
    v.google_llp || (v.google_llp = {});
    var b = v.google_llp;
    b[7] || ((b[7] = new dk()), a && a());
    return b[7];
}
function fk(a) {
    return ek(() => {
        xc(v.document, a);
    }).promise;
}
function gk(a) {
    var b = {};
    return {
        enable_page_level_ads: ((b.pltais = !0), b),
        google_ad_client: a
    };
}
function hk(a) {
    if (v.google_apltlad || v.top != v || !a.google_ad_client) return null;
    v.google_apltlad = !0;
    var b = gk(a.google_ad_client);
    var c = b.enable_page_level_ads;
    Ec(a, (d, e) => {
        oi[e] && 'google_ad_client' !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    if ('google_ad_section' in a || 'google_ad_region' in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
}
function ik(a) {
    return za(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive;
}
function jk(a, b) {
    this.h = v;
    this.j = a;
    this.i = b;
}
function kk(a) {
    mj({
        ba: a.h,
        ka: a.i,
        Ra: 50,
        Ya(b) {
            return lk(a, b);
        }
    });
}
function lk(a, b) {
    Tf(
        Rf(b, (c) => {
            mk('ok');
            nk(a.h, a.j, c);
        }),
        (c) => mk(c.message)
    );
}
function mk(a) {
    uf(
        'abg::amalserr', {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: 0.01
        },
        0.01
    );
}
function nk(a, b, c) {
    if (!U(J).ama_ran_on_page) {
        var d = Rj(c);
        if (d) {
            if (null != z(d, 24)) {
                c = Ci(a);
                c.availableAbg = !0;
                var e;
                var f;
                c.ablationFromStorage = !!(null == (e = G(d, tg, 24)) ? 0 : null == (f = G(e, vg, 3)) ? 0 : Gb(f, wg, 2, xg));
            }
            if (ik(b) && ((e = Kj(a, H(d, Bg, 7))), !e || !tb(e, 8))) return;
            U(J).ama_ran_on_page = !0;
            var g;
            if (null == (g = G(d, Gg, 15)) ? 0 : tb(g, 23)) U(a).enable_overlap_observer = !0;
            if ((g = G(d, Eg, 13)) && 1 === z(g, 1)) {
                var h = 0;
                var k = G(g, Fg, 6);
                k && z(k, 3) && (h = z(k, 3) || 0);
                Xj(a, h);
            } else if (null == (h = G(d, tg, 24)) ? 0 : null == (k = G(h, vg, 3)) ? 0 : Gb(k, wg, 2, xg))(Ci(a).ablatingThisPageview = !0), Xj(a, 1);
            kd(3, [d.toJSON()]);
            var l = b.google_ad_client || '';
            b = Pj(za(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
            var m = fg(jg, new eg(null, b));
            sf(782, () => {
                var r = m;
                try {
                    var t = Kj(a, H(d, Bg, 7));
                    var x;
                    if ((x = t))
                        a: {
                            var E = sb(t, 2);
                            if (E)
                                for (var B = 0; B < E.length; B++)
                                    if (1 == E[B]) {
                                        x = !0;
                                        break a;
                                    }
                            x = !1;
                        }
                    if (x) {
                        if (z(t, 4)) {
                            x = {};
                            var F = new eg(null, ((x.google_package = z(t, 4)), x));
                            r = fg(r, F);
                        }
                        var va = new Pi(a, l, d, t, r);
                        var gb = new Df();
                        new vj(a, va, gb).start();
                        gb.i.then(Ga(Tj, a), Ga(Uj, a));
                    }
                } catch (qc) {
                    Oj(a, {
                        atf: -1
                    });
                }
            });
        } else Sj(a, c);
    }
}
function ok(a, b, c) {
    a = a.style;
    a.border = 'none';
    a.height = c + 'px';
    a.width = b + 'px';
    a.margin = 0;
    a.padding = 0;
    a.position = 'relative';
    a.visibility = 'visible';
    a.backgroundColor = 'transparent';
}
var pk = {
    '120x90': !0,
    '160x90': !0,
    '180x90': !0,
    '200x90': !0,
    '468x15': !0,
    '728x15': !0
};
function qk(a, b) {
    if (15 == b) {
        if (728 <= a) return 728;
        if (468 <= a) return 468;
    } else if (90 == b) {
        if (200 <= a) return 200;
        if (180 <= a) return 180;
        if (160 <= a) return 160;
        if (120 <= a) return 120;
    }
    return null;
}
function V(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    S.call(this, a, b);
    this.aa = c;
    this.cb = d;
}
u(V, S);
V.prototype.na = function() {
    return this.aa;
};
V.prototype.i = function(a, b, c) {
    b.google_ad_resize || ((c.style.height = this.height() + 'px'), (b.rpe = !0));
};
function rk(a) {
    return (b) => !!(b.aa & a);
}
var sk = ab('script');
function tk(a, b, c, d, e, f, g, h, k, l, m, r) {
    this.v = a;
    this.R = b;
    this.aa = void 0 === c ? null : c;
    this.h = void 0 === d ? null : d;
    this.O = void 0 === e ? null : e;
    this.i = void 0 === f ? null : f;
    this.j = void 0 === g ? null : g;
    this.H = void 0 === h ? null : h;
    this.M = void 0 === k ? null : k;
    this.l = void 0 === l ? null : l;
    this.m = void 0 === m ? null : m;
    this.N = void 0 === r ? null : r;
    this.P = this.A = this.D = null;
}
tk.prototype.size = function() {
    return this.R;
};
function uk(a, b, c) {
    null != a.aa && (c.google_responsive_formats = a.aa);
    null != a.O && (c.google_safe_for_responsive_override = a.O);
    null != a.i && (!0 === a.i ? (c.google_full_width_responsive_allowed = !0) : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.i)));
    null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
    var d = a.m || c.google_ad_width;
    null != d && (c.google_resizing_width = d);
    d = a.l || c.google_ad_height;
    null != d && (c.google_resizing_height = d);
    d = a.size().h(b);
    var e = a.size().height();
    if (!c.google_ad_resize) {
        c.google_ad_width = d;
        c.google_ad_height = e;
        var f = a.size();
        b = f.h(b) + 'x' + f.height();
        c.google_ad_format = b;
        c.google_responsive_auto_format = a.v;
        null != a.h && (c.armr = a.h);
        c.google_ad_resizable = !0;
        c.google_override_format = 1;
        c.google_loader_features_used = 128;
        !0 === a.i && (c.gfwrnh = a.size().height() + 'px');
    }
    null != a.H && (c.gfwroml = a.H);
    null != a.M && (c.gfwromr = a.M);
    null != a.l && (c.gfwroh = a.l);
    null != a.m && (c.gfwrow = a.m);
    null != a.N && (c.gfwroz = a.N);
    null != a.D && (c.gml = a.D);
    null != a.A && (c.gmr = a.A);
    null != a.P && (c.gzi = a.P);
    b = fd();
    b = hd(b) || b;
    ak(b.location, 'google_responsive_dummy_ad') &&
        ($a([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) &&
        2 !== a.h &&
        ((a = JSON.stringify({
                googMsgType: 'adpnt',
                key_value: [{
                    key: 'qid',
                    value: 'DUMMY_AD'
                }]
            })),
            (c.dash =
                '<' +
                sk +
                ">window.top.postMessage('" +
                a +
                "', '*');\n          </" +
                sk +
                '>\n          <div id="dummyAd" style="width:' +
                d +
                'px;height:' +
                e +
                'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
                d +
                'x' +
                e +
                '</p>\n            <p>Rendered size:' +
                d +
                'x' +
                e +
                '</p>\n          </div>'));
}
/*
Copyright 2019 The AMP HTML Authors. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var vk = {};
var wk =
    ((vk.image_stacked = 1 / 1.91),
        (vk.image_sidebyside = 1 / 3.82),
        (vk.mobile_banner_image_sidebyside = 1 / 3.82),
        (vk.pub_control_image_stacked = 1 / 1.91),
        (vk.pub_control_image_sidebyside = 1 / 3.82),
        (vk.pub_control_image_card_stacked = 1 / 1.91),
        (vk.pub_control_image_card_sidebyside = 1 / 3.74),
        (vk.pub_control_text = 0),
        (vk.pub_control_text_card = 0),
        vk);
var xk = {};
var yk =
    ((xk.image_stacked = 80),
        (xk.image_sidebyside = 0),
        (xk.mobile_banner_image_sidebyside = 0),
        (xk.pub_control_image_stacked = 80),
        (xk.pub_control_image_sidebyside = 0),
        (xk.pub_control_image_card_stacked = 85),
        (xk.pub_control_image_card_sidebyside = 0),
        (xk.pub_control_text = 80),
        (xk.pub_control_text_card = 80),
        xk);
var zk = {};
var Ak =
    ((zk.pub_control_image_stacked = 100),
        (zk.pub_control_image_sidebyside = 200),
        (zk.pub_control_image_card_stacked = 150),
        (zk.pub_control_image_card_sidebyside = 250),
        (zk.pub_control_text = 100),
        (zk.pub_control_text_card = 150),
        zk);
function Bk(a) {
    var b = 0;
    a.K && b++;
    a.F && b++;
    a.G && b++;
    if (3 > b)
        return {
            J: 'Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.'
        };
    b = a.K.split(',');
    var c = a.G.split(',');
    a = a.F.split(',');
    if (b.length !== c.length || b.length !== a.length)
        return {
            J: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
    if (2 < b.length)
        return {
            J: 'The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing ' +
                (b.length +
                    ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
    for (var d = [], e = [], f = 0; f < b.length; f++) {
        var g = Number(c[f]);
        if (isNaN(g) || 0 === g)
            return {
                J: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
        d.push(g);
        g = Number(a[f]);
        if (isNaN(g) || 0 === g)
            return {
                J: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
        e.push(g);
    }
    return {
        G: d,
        F: e,
        Ka: b
    };
}
function Ck(a) {
    return 1200 <= a ? {
            width: 1200,
            height: 600
        } :
        850 <= a ? {
            width: a,
            height: Math.floor(0.5 * a)
        } :
        550 <= a ? {
            width: a,
            height: Math.floor(0.6 * a)
        } :
        468 <= a ? {
            width: a,
            height: Math.floor(0.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        };
}
var Dk = ['google_content_recommendation_ui_type', 'google_content_recommendation_columns_num', 'google_content_recommendation_rows_num'];
function Ek(a, b) {
    S.call(this, a, b);
}
u(Ek, S);
Ek.prototype.h = function(a) {
    return Math.min(1200, Math.max(this.minWidth(), Math.round(a)));
};
function Fk(a, b) {
    Gk(a, b);
    if ('pedestal' == b.google_content_recommendation_ui_type) return new tk(9, new Ek(a, Math.floor(a * b.google_phwr)));
    var c = rc();
    468 > a ?
        c ?
        ((c = a - 8 - 8),
            (c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * wk.mobile_banner_image_sidebyside + yk.mobile_banner_image_sidebyside) + 96)),
            (a = {
                X: a,
                V: c,
                F: 1,
                G: 12,
                K: 'mobile_banner_image_sidebyside'
            })) :
        ((a = Ck(a)),
            (a = {
                X: a.width,
                V: a.height,
                F: 1,
                G: 13,
                K: 'image_sidebyside'
            })) :
        ((a = Ck(a)),
            (a = {
                X: a.width,
                V: a.height,
                F: 4,
                G: 2,
                K: 'image_stacked'
            }));
    Hk(b, a);
    return new tk(9, new Ek(a.X, a.V));
}
function Ik(a, b) {
    Gk(a, b);
    var c = Bk({
        G: b.google_content_recommendation_rows_num,
        F: b.google_content_recommendation_columns_num,
        K: b.google_content_recommendation_ui_type
    });
    if (c.J)
        a = {
            X: 0,
            V: 0,
            F: 0,
            G: 0,
            K: 'image_stacked',
            J: c.J
        };
    else {
        var d = 2 === c.Ka.length && 468 <= a ? 1 : 0;
        var e = c.Ka[d];
        e = 0 === e.indexOf('pub_control_') ? e : 'pub_control_' + e;
        var f = Ak[e];
        for (var g = c.F[d]; a / g < f && 1 < g;) g--;
        f = g;
        c = c.G[d];
        d = Math.floor((((a - 8 * f - 8) / f) * wk[e] + yk[e]) * c + 8 * c + 8);
        a =
            1500 < a ? {
                width: 0,
                height: 0,
                ra: 'Calculated slot width is too large: ' + a
            } :
            1500 < d ? {
                width: 0,
                height: 0,
                ra: 'Calculated slot height is too large: ' + d
            } : {
                width: a,
                height: d
            };
        a = a.ra ? {
            X: 0,
            V: 0,
            F: 0,
            G: 0,
            K: e,
            J: a.ra
        } : {
            X: a.width,
            V: a.height,
            F: f,
            G: c,
            K: e
        };
    }
    if (a.J) throw new K(a.J);
    Hk(b, a);
    return new tk(9, new Ek(a.X, a.V));
}
function Gk(a, b) {
    if (0 >= a)
        throw new K(
            'Invalid responsive width from Matched Content slot ' +
            b.google_ad_slot +
            ': ' +
            a +
            '. Please ensure to put this Matched Content slot into a non-zero width div container.'
        );
}
function Hk(a, b) {
    a.google_content_recommendation_ui_type = b.K;
    a.google_content_recommendation_columns_num = b.F;
    a.google_content_recommendation_rows_num = b.G;
}
function Jk(a, b) {
    S.call(this, a, b);
}
u(Jk, S);
Jk.prototype.h = function() {
    return this.minWidth();
};
Jk.prototype.i = function(a, b, c) {
    gi(a, c);
    b.google_ad_resize || ((c.style.height = this.height() + 'px'), (b.rpe = !0));
};
var Kk = {
    'image-top': function(a) {
        return 600 >= a ? 284 + 0.414 * (a - 250) : 429;
    },
    'image-middle': function(a) {
        return 500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500);
    },
    'image-side': function(a) {
        return 500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500);
    },
    'text-only': function(a) {
        return 500 >= a ? 187 - 0.228 * (a - 250) : 130;
    },
    'in-article': function(a) {
        return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200;
    }
};
function Lk(a, b) {
    S.call(this, a, b);
}
u(Lk, S);
Lk.prototype.h = function() {
    return Math.min(1200, this.minWidth());
};
function Mk(a, b, c, d, e) {
    var f = e.google_ad_layout || 'image-top';
    if ('in-article' == f) {
        var g = a;
        if ('false' == e.google_full_width_responsive) a = g;
        else if (((a = bi(b, c, g, 0.2, e)), !0 !== a))(e.gfwrnwer = a), (a = g);
        else if ((a = Cf(b)))
            if (((e.google_full_width_responsive_allowed = !0), c.parentElement)) {
                b: {
                    g = c;
                    for (var h = 0; 100 > h && g.parentElement; ++h) {
                        for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                            var m = k[l];
                            if (m != g && ei(b, m)) break b;
                        }
                        g = g.parentElement;
                        g.style.width = '100%';
                        g.style.height = 'auto';
                    }
                }
                gi(b, c);
            }
        else a = g;
        else a = g;
    }
    if (250 > a) throw new K('Fluid responsive ads must be at least 250px wide: availableWidth=' + a);
    a = Math.min(1200, Math.floor(a));
    if (d && 'in-article' != f) {
        f = Math.ceil(d);
        if (50 > f) throw new K('Fluid responsive ads must be at least 50px tall: height=' + f);
        return new tk(11, new S(a, f));
    }
    if ('in-article' != f && (d = e.google_ad_layout_key)) {
        f = '' + d;
        b = Math.pow(10, 3);
        if ((d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)) {
            e = [];
            for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
            b = e;
        } else b = null;
        if (!b) throw new K('Invalid data-ad-layout-key value: ' + f);
        f = (a + -725) / 1e3;
        c = 0;
        d = 1;
        e = b.length;
        for (g = 0; g < e; g++)(c += b[g] * d), (d *= f);
        f = Math.ceil(1e3 * c - -725 + 10);
        if (isNaN(f)) throw new K('Invalid height: height=' + f);
        if (50 > f) throw new K('Fluid responsive ads must be at least 50px tall: height=' + f);
        if (1200 < f) throw new K('Fluid responsive ads must be at most 1200px tall: height=' + f);
        return new tk(11, new S(a, f));
    }
    d = Kk[f];
    if (!d) throw new K('Invalid data-ad-layout value: ' + f);
    c = ki(c, b);
    b = Cf(b);
    b = 'in-article' !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
    return new tk(11, 'in-article' == f ? new Lk(a, b) : new S(a, b));
}
function Nk(a) {
    return (b) => {
        for (var c = a.length - 1; 0 <= c; --c)
            if (!a[c](b)) return !1;
        return !0;
    };
}
function Ok(a, b) {
    for (var c = Pk.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
        var g = c[f];
        if (a(g)) {
            if (!b || b(g)) return g;
            null === e && (e = g);
        }
    }
    return e;
}
var W = [
    new V(970, 90, 2),
    new V(728, 90, 2),
    new V(468, 60, 2),
    new V(336, 280, 1),
    new V(320, 100, 2),
    new V(320, 50, 2),
    new V(300, 600, 4),
    new V(300, 250, 1),
    new V(250, 250, 1),
    new V(234, 60, 2),
    new V(200, 200, 1),
    new V(180, 150, 1),
    new V(160, 600, 4),
    new V(125, 125, 1),
    new V(120, 600, 4),
    new V(120, 240, 4),
    new V(120, 120, 1, !0)
];
var Pk = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];
function Qk(a, b, c, d, e) {
    'false' == e.google_full_width_responsive ?
        (c = {
            B: a,
            C: 1
        }) :
        ('autorelaxed' == b && e.google_full_width_responsive) || Rk(b) || e.google_ad_resize ?
        ((b = ci(a, c, d, e)),
            (c = !0 !== b ? {
                B: a,
                C: b
            } : {
                B: Cf(c) || a,
                C: !0
            })) :
        (c = {
            B: a,
            C: 2
        });
    b = c.C;
    return !0 !== b ? {
            B: a,
            C: b
        } :
        d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        };
}
function Sk(a, b, c, d, e) {
    var f = sf(247, () => Qk(a, b, c, d, e));
    var g = f.B;
    f = f.C;
    var h = !0 === f;
    var k = I(d.style.width);
    var l = I(d.style.height);
    var m = Tk(g, b, c, d, e, h);
    g = m.W;
    h = m.T;
    var r = m.na;
    m = m.Ja;
    var t = Uk(b, r);
    var x;
    var E = (x = hi(d, c, 'marginLeft', I)) ? x + 'px' : '';
    var B = (x = hi(d, c, 'marginRight', I)) ? x + 'px' : '';
    x = hi(d, c, 'zIndex') || '';
    return new tk(t, g, r, null, m, f, h, E, B, l, k, x);
}
function Rk(a) {
    return 'auto' == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a);
}
function Tk(a, b, c, d, e, f) {
    b = 'auto' == b ? (0.25 >= a / Math.min(1200, Cf(c)) ? 4 : 3) : ai(b);
    var g = !1;
    var h = !1;
    if (488 > Cf(c)) {
        var k = Wh(d, c);
        var l = ki(d, c);
        g = !l && k;
        h = l && k;
    }
    l = [ii(a), rk(b)];
    l.push(ji(488 > Cf(c), c, d, h));
    null != e.google_max_responsive_height && l.push(mi(e.google_max_responsive_height));
    var m = [(t) => !t.cb];
    if (g || h)(g = ni(c, d)), m.push(mi(g));
    var r = Ok(Nk(l), Nk(m));
    if (!r) throw new K('No slot size for availableWidth=' + a);
    l = sf(248, () => {
        var t;
        a: if (f) {
            if (e.gfwrnh && (t = I(e.gfwrnh))) {
                t = {
                    W: new Jk(a, t),
                    T: !0
                };
                break a;
            }
            t = a / 1.2;
            var x = Math;
            var E = x.min;
            if (e.google_resizing_allowed || 'true' == e.google_full_width_responsive) var B = Infinity;
            else {
                B = d;
                var F = Infinity;
                do {
                    var va = hi(B, c, 'height', I);
                    va && (F = Math.min(F, va));
                    (va = hi(B, c, 'maxHeight', I)) && (F = Math.min(F, va));
                } while ((B = B.parentElement) && 'HTML' != B.tagName);
                B = F;
            }
            x = E.call(x, t, B);
            if (x < 0.5 * t || 100 > x) x = t;
            Q(th) && !ki(d, c) && (x = Math.max(x, 0.5 * Bf(c).clientHeight));
            t = {
                W: new Jk(a, Math.floor(x)),
                T: x < t ? 102 : !0
            };
        } else
            t = {
                W: r,
                T: 100
            };
        return t;
    });
    g = l.W;
    l = l.T;
    return 'in-article' === e.google_ad_layout && Vk(c) ? {
        W: Wk(a, c, d, g, e),
        T: !1,
        na: b,
        Ja: k
    } : {
        W: g,
        T: l,
        na: b,
        Ja: k
    };
}
function Uk(a, b) {
    if ('auto' == a) return 1;
    switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
    }
    throw Error('bad mask');
}
function Wk(a, b, c, d, e) {
    var f = e.google_ad_height || hi(c, b, 'height', I);
    b = Mk(a, b, c, f, e).size();
    return b.minWidth() * b.height() > a * d.height() ? new V(b.minWidth(), b.height(), 1) : d;
}
function Vk(a) {
    return Q(rh) || (a.location && '#hffwroe2etoq' == a.location.hash);
}
function Xk(a, b, c, d, e) {
    var f;
    (f = Cf(b)) ?
    488 > Cf(b) ?
        b.innerHeight >= b.innerWidth ?
        ((e.google_full_width_responsive_allowed = !0),
            gi(b, c),
            (f = {
                B: f,
                C: !0
            })) :
        (f = {
            B: a,
            C: 5
        }) :
        (f = {
            B: a,
            C: 4
        }): (f = {
            B: a,
            C: 10
        });
    var g = f;
    f = g.B;
    g = g.C;
    if (!0 !== g || a == f) return new tk(12, new S(a, d), null, null, !0, g, 100);
    a = Tk(f, 'auto', b, c, e, !0);
    return new tk(1, a.W, a.na, 2, !0, g, a.T);
}
function Yk(a, b) {
    var c = b.google_ad_format;
    if ('autorelaxed' == c) {
        a: {
            if ('pedestal' != b.google_content_recommendation_ui_type)
                for (a = q(Dk), c = a.next(); !c.done; c = a.next())
                    if (null != b[c.value]) {
                        b = !0;
                        break a;
                    }
            b = !1;
        }
        return b ? 9 : 5;
    }
    if (Rk(c)) return 1;
    if ('link' === c) return 4;
    if ('fluid' == c) {
        if ((c = 'in-article' === b.google_ad_layout))
            c = Q(sh) || Q(rh) || (a.location && ('#hffwroe2etop' == a.location.hash || '#hffwroe2etoq' == a.location.hash));
        return c ? (Zk(b), 1) : 8;
    }
    if (27 === b.google_reactive_ad_format) return Zk(b), 1;
}
function $k(a, b, c, d, e) {
    e = b.offsetWidth || ((c.google_ad_resize || (void 0 === e ? !1 : e)) && hi(b, d, 'width', I)) || c.google_ad_width || 0;
    4 === a && ((c.google_ad_format = 'auto'), (a = 1));
    var f = (f = al(a, e, b, c, d)) ? f : Sk(e, c.google_ad_format, d, b, c);
    f.size().i(d, c, b);
    uk(f, e, c);
    1 != a && ((a = f.size().height()), (b.style.height = a + 'px'));
}
function al(a, b, c, d, e) {
    var f = d.google_ad_height || hi(c, e, 'height', I);
    switch (a) {
        case 5:
            return (
                (f = sf(247, () => Qk(b, d.google_ad_format, e, c, d))),
                (a = f.B),
                (f = f.C),
                !0 === f && b != a && gi(e, c),
                !0 === f ? (d.google_full_width_responsive_allowed = !0) : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = f)),
                Fk(a, d)
            );
        case 9:
            return Ik(b, d);
        case 8:
            return Mk(b, e, c, f, d);
        case 10:
            return Xk(b, e, c, f, d);
    }
}
function Zk(a) {
    a.google_ad_format = 'auto';
    a.armr = 3;
}
function bl(a, b) {
    var c = hd(b);
    if (c) {
        c = Cf(c);
        var d = zc(a, b) || {};
        var e = d.direction;
        if ('0px' === d.width && 'none' !== d.cssFloat) return -1;
        if ('ltr' === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
        if ('rtl' === e && c)
            return (
                (a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right),
                Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
            );
    }
    return -1;
}
var cl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/slotcar_library', '.js']);
var dl = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/slotcar_library', '.js']);
var el = la(['https://googleads.g.doubleclick.net/pagead/html/', '/', '/zrt_lookup.html']);
var fl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/show_ads_impl', '.js']);
var gl = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/show_ads_impl', '.js']);
var hl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/show_ads_impl_with_ama', '.js']);
var il = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/show_ads_impl_with_ama', '.js']);
var jl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/show_ads_impl_instrumented', '.js']);
var kl = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/show_ads_impl_instrumented', '.js']);
function ll(a) {
    y.call(this, a);
}
u(ll, y);
function ml(a) {
    y.call(this, a, -1, nl);
}
u(ml, y);
var nl = [1];
function ol(a) {
    y.call(this, a, -1, pl);
}
u(ol, y);
ol.prototype.getId = function() {
    return C(this, 1, 0);
};
ol.prototype.$ = function() {
    return C(this, 7, 0);
};
var pl = [2];
function ql(a) {
    y.call(this, a, -1, rl);
}
u(ql, y);
ql.prototype.$ = function() {
    return C(this, 5, 0);
};
var rl = [2];
function sl(a) {
    y.call(this, a, -1, tl);
}
u(sl, y);
function ul(a) {
    y.call(this, a, -1, vl);
}
u(ul, y);
ul.prototype.$ = function() {
    return C(this, 1, 0);
};
function wl(a) {
    y.call(this, a);
}
u(wl, y);
var tl = [1, 4, 2, 3];
var vl = [2];
function xl(a) {
    y.call(this, a);
}
u(xl, y);
var yl = [13, 14];
var zl = void 0;
function Al() {
    Od(zl, Nd);
    return zl;
}
function Bl(a) {
    Od(zl, Qd);
    zl = a;
}
function Cl(a, b, c, d) {
    c = void 0 === c ? '' : c;
    d = void 0 === d ? null : d;
    return Dl(a, c, (e) => Xa(H(e, Jb, 2), (f) => z(f, 1) === b)) ? !0 : 1 === b ? El(c, d) : !1;
}
function El(a, b) {
    return b ?
        13 === xb(b, yl) ?
        D(Gb(b, ll, 13, yl), 1) :
        14 === xb(b, yl) && '' !== a && 1 === sb(Gb(b, ml, 14, yl), 1).length && sb(Gb(b, ml, 14, yl), 1)[0] === a ?
        D(G(Gb(b, ml, 14, yl), ll, 2), 1) :
        !1 :
        !1;
}
function Fl(a, b) {
    b = C(b, 18, 0); -
    1 !== b && (a.tmod = b);
}
function Gl(a) {
    var b = void 0 === b ? '' : b;
    var c = hd(J) || J;
    return Hl(c, a) ? !0 : Dl(J, b, (d) => Xa(sb(d, 3), (e) => e === a));
}
function Il(a) {
    return Dl(v, void 0 === a ? '' : a, () => !0);
}
function Hl(a, b) {
    a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && $a(a.split(','), b.toString());
}
function Dl(a, b, c) {
    a = hd(a) || a;
    var d = Jl(a);
    b && (b = id(String(b)));
    return Ob(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e));
}
function Jl(a) {
    a = Kl(a);
    var b = {};
    Ec(a, (c, d) => {
        try {
            var e = new Hb(c);
            b[d] = e;
        } catch (f) {}
    });
    return b;
}
function Kl(a) {
    return Q(Mg) ?
        ((a = nj({
                ba: a,
                ka: Al()
            })),
            null != a.h ? (Ll('ok'), (a = Ml(a.h.value))) : (Ll(a.i.message), (a = {})),
            a) :
        Ml(a.localStorage);
}
function Ml(a) {
    try {
        var b = a.getItem('google_adsense_settings');
        if (!b) return {};
        var c = JSON.parse(b);
        return c !== Object(c) ? {} : Nb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && 'string' === typeof e && Array.isArray(d));
    } catch (d) {
        return {};
    }
}
function Ll(a) {
    Q(Lg) &&
        uf(
            'abg_adsensesettings_lserr', {
                s: a,
                g: Q(Mg),
                c: Al(),
                r: 0.01
            },
            0.01
        );
}
function Nl(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
}
function Ol(a) {
    var b = J.document;
    if (b.currentScript) return Nl(b.currentScript, a);
    b = q(b.scripts);
    for (var c = b.next(); !c.done; c = b.next())
        if (0 === Nl(c.value, a)) return 0;
    return 1;
}
function Pl(a, b) {
    var c = {};
    var d = {};
    var e = {};
    var f = {};
    return (
        (f[Wd] =
            ((c[55] = () => 0 === a),
                (c[23] = (g) => Cl(J, Number(g))),
                (c[24] = (g) => Gl(Number(g))),
                (c[61] = () => D(b, 6)),
                (c[63] = () => D(b, 6) || '.google.ch' === Eb(b, 8)),
                c)),
        (f[Xd] =
            ((d[7] = (g) => {
                    try {
                        var h = window.localStorage;
                    } catch (l) {
                        h = null;
                    }
                    g = Number(g);
                    g = void 0 === g ? 0 : g;
                    g = 0 != g ? 'google_experiment_mod' + g : 'google_experiment_mod';
                    var k = Hc(h, g);
                    h = null === k ? Ic(h, g) : k;
                    return null !== h && void 0 !== h ? h : void 0;
                }),
                d)),
        (f[Yd] = ((e[6] = () => Eb(b, 15)), e)),
        f
    );
}
function Ql(a) {
    a = void 0 === a ? v : a;
    return a.ggeac || (a.ggeac = {});
}
function Rl(a, b) {
    try {
        var c = a.split('.');
        a = v;
        for (var d = 0, e; null != a && d < c.length; d++)(e = a), (a = a[c[d]]), 'function' === typeof a && (a = e[c[d]]());
        var f = a;
        if (typeof f === b) return f;
    } catch (g) {}
}
function Sl() {
    var a = {};
    this[Wd] =
        ((a[8] = (b) => {
                try {
                    return null != ya(b);
                } catch (c) {}
            }),
            (a[9] = (b) => {
                try {
                    var c = ya(b);
                } catch (d) {
                    return;
                }
                if ((b = 'function' === typeof c))(c = c && c.toString && c.toString()), (b = 'string' === typeof c && -1 != c.indexOf('[native code]'));
                return b;
            }),
            (a[10] = () => window == window.top),
            (a[6] = (b) => $a(L( of ).h(), parseInt(b, 10))),
            (a[27] = (b) => {
                b = Rl(b, 'boolean');
                return void 0 !== b ? b : void 0;
            }),
            (a[60] = (b) => {
                try {
                    return !!v.document.querySelector(b);
                } catch (c) {}
            }),
            a);
    a = {};
    this[Xd] =
        ((a[3] = () => Nc()),
            (a[6] = (b) => {
                b = Rl(b, 'number');
                return void 0 !== b ? b : void 0;
            }),
            (a[11] = (b) => {
                b = void 0 === b ? '' : b;
                var c = v;
                b = void 0 === b ? '' : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(tc)[3] || null) ? decodeURI(c) : c) ? Fc(c + b) : null;
                return null == b ? void 0 : b % 1e3;
            }),
            a);
    a = {};
    this[Yd] =
        ((a[2] = () => window.location.href),
            (a[3] = () => {
                try {
                    return window.top.location.hash;
                } catch (b) {
                    return '';
                }
            }),
            (a[4] = (b) => {
                b = Rl(b, 'string');
                return void 0 !== b ? b : void 0;
            }),
            a);
}
var Tl = [12, 13, 20];
function Ul() {}
Ul.prototype.init = function(a, b, c, d) {
    var e = this;
    d = void 0 === d ? {} : d;
    var f = void 0 === d.Ha ? !1 : d.Ha;
    var g = void 0 === d.fb ? {} : d.fb;
    d = void 0 === d.hb ? [] : d.hb;
    this.l = a;
    this.v = {};
    this.D = f;
    this.m = g;
    a = {};
    this.h = ((a[b] = []), (a[4] = []), a);
    this.j = {};
    (b = Bd()) &&
    Ua(b.split(',') || [], (h) => {
        (h = parseInt(h, 10)) && (e.j[h] = !0);
    });
    Ua(d, (h) => {
        e.j[h] = !0;
    });
    this.i = c;
    return this;
};
function Vl(a, b, c) {
    var d = [];
    var e = Wl(a.l, b);
    var f;
    if ((f = 9 !== b)) a.v[b] ? (f = !0) : ((a.v[b] = !0), (f = !1));
    if (f || !e.length) {
        var g;
        null == (g = a.i) || ze(g, b, c, d, [], 2);
        return d;
    }
    var h = $a(Tl, b);
    var k = [];
    Ua(e, (m) => {
        var r = new re();
        if ((m = Xl(a, m, c, r)))
            0 !== xb(r, se) && k.push(r),
            (r = m.getId()),
            d.push(r),
            Yl(a, r, h ? 4 : c),
            (m = H(m, ge, 2)) && (h ? Qe(m, Se(), a.i, r) : Qe(m, [c], a.i, r));
    });
    var l;
    null == (l = a.i) || ze(l, b, c, d, k, 1);
    return d;
}
function Yl(a, b, c) {
    a.h[c] || (a.h[c] = []);
    a = a.h[c];
    $a(a, b) || a.push(b);
}
function Zl(a, b) {
    a.l.push(
        ...ma(
            Va(
                Wa(b, (c) => new ul(c)),
                (c) => !$a(Tl, c.$())
            )
        )
    );
}
function Xl(a, b, c, d) {
    var e = L(Ce).h;
    if (!ce(G(b, Rd, 3), e)) return null;
    var f = H(b, ol, 2);
    var g = C(b, 6, 0);
    if (g) {
        wb(d, 1, se, g);
        f = e[Xd];
        switch (c) {
            case 2:
                var h = f[8];
                break;
            case 1:
                h = f[7];
        }
        c = void 0;
        if (h)
            try {
                (c = h(g)), vb(d, 3, c);
            } catch (k) {}
        return (b = $l(b, c)) ? am(a, [b], 1) : null;
    }
    if ((g = C(b, 10, 0))) {
        wb(d, 2, se, g);
        h = null;
        switch (c) {
            case 1:
                h = e[Xd][9];
                break;
            case 2:
                h = e[Xd][10];
                break;
            default:
                return null;
        }
        c = h ? h(String(g)) : void 0;
        if (void 0 === c && 1 === C(b, 11, 0)) return null;
        void 0 !== c && vb(d, 3, c);
        return (b = $l(b, c)) ? am(a, [b], 1) : null;
    }
    d = e ? Va(f, (k) => ce(G(k, Rd, 3), e)) : f;
    if (!d.length) return null;
    c = d.length * C(b, 1, 0);
    return (b = C(b, 4, 0)) ? bm(a, b, c, d) : am(a, d, c / 1e3);
}
function bm(a, b, c, d) {
    var e = null != a.m[b] ? a.m[b] : 1e3;
    if (0 >= e) return null;
    d = am(a, d, c / e);
    a.m[b] = d ? 0 : e - c;
    return d;
}
function am(a, b, c) {
    var d = a.j;
    var e = Ya(b, (f) => !!d[f.getId()]);
    return e ? e : a.D ? null : Ac(b, c);
}
function cm(a, b) {
    N(
        Ue,
        (c) => {
            a.j[c] = !0;
        },
        b
    );
    N(Xe, (c, d) => Vl(a, c, d), b);
    N(Ye, (c) => (a.h[c] || []).concat(a.h[4]), b);
    N(gf, (c) => Zl(a, c), b);
    N(Ve, (c, d) => Yl(a, c, d), b);
}
function Wl(a, b) {
    return ((a = Ya(a, (c) => c.$() == b)) && H(a, ql, 2)) || [];
}
function $l(a, b) {
    var c = H(a, ol, 2);
    var d = c.length;
    var e = C(a, 8, 0);
    a = d * C(a, 1, 0) - 1;
    b = void 0 !== b ? b : Math.floor(1e3 * Dc());
    d = (b - e) % d;
    if (b < e || b - e - d >= a) return null;
    c = c[d];
    e = L(Ce).h;
    return !c || (e && !ce(G(c, Rd, 3), e)) ? null : c;
}
function dm() {
    this.h = () => {};
}
function em(a) {
    L(dm).h(a);
}
var fm;
var gm;
var hm;
var im;
var jm;
var km;
function lm(a, b, c, d) {
    var e = 1;
    d = void 0 === d ? Ql() : d;
    e = void 0 === e ? 0 : e;
    var f =
        void 0 === f ?
        new ye(
            null != (im = null == (fm = G(a, wl, 5)) ? void 0 : C(fm, 2, 0)) ? im : 0,
            null != (jm = null == (gm = G(a, wl, 5)) ? void 0 : C(gm, 4, 0)) ? jm : 0,
            null != (km = null == (hm = G(a, wl, 5)) ? void 0 : D(hm, 3)) ? km : !1
        ) :
        f;
    d.hasOwnProperty('init-done') ?
        (kf(gf, d)(Wa(H(a, ul, 2), (g) => g.toJSON())),
            kf(hf, d)(
                Wa(H(a, ge, 1), (g) => g.toJSON()),
                e
            ),
            b && kf(jf, d)(b),
            mm(d, e)) :
        (cm(L(Ul).init(H(a, ul, 2), e, f, c), d),
            lf(d),
            mf(d),
            nf(d),
            mm(d, e),
            Qe(H(a, ge, 1), [e], f, void 0, !0),
            (De = De || !(!c || !c.bb)),
            em(L(Sl)),
            b && em(b));
}
function mm(a, b) {
    a = void 0 === a ? Ql() : a;
    b = void 0 === b ? 0 : b;
    var c = a;
    var d = b;
    d = void 0 === d ? 0 : d;
    pf(L( of ), c, d);
    nm(a, b);
    L(dm).h = kf(jf, a);
    L(Qh).m();
}
function nm(a, b) {
    var c = L(Qh);
    c.i = (d, e) => kf($e, a, () => !1)(d, e, b);
    c.j = (d, e) => kf(af, a, () => 0)(d, e, b);
    c.l = (d, e) => kf(bf, a, () => '')(d, e, b);
    c.h = (d, e) => kf(cf, a, () => [])(d, e, b);
    c.m = () => {
        kf(We, a)(b);
    };
}
function om(a, b, c) {
    var d = U(a);
    if (d.plle) mm(Ql(a), 1);
    else {
        d.plle = !0;
        try {
            var e = a.localStorage;
        } catch (f) {}
        e = null;
    }
    d = e;
    null == Hc(d, 'goog_pem_mod') && Ic(d, 'goog_pem_mod');
    d = G(b, sl, 12);
    e = D(b, 9);
    lm(
        d,
        Pl(c, b), {
            Ha: e && !!a.google_disable_experiments,
            bb: e
        },
        Ql(a)
    );
    if ((c = Eb(b, 15)))(c = Number(c)), L( of ).l(c);
    if ((b = Eb(b, 10)))(b = Number(b)), L( of ).j(b);
    L( of ).i(12);
    L( of ).i(10);
    a = hd(a) || a;
    ak(a.location, 'google_mc_lab') && L( of ).j(44738307);
}
}
function pm(a) {
    qf.Oa((b) => {
        b.shv = String(a);
        b.mjsv = 'm202111110101';
        var c = L( of ).h();
        var d = U(v);
        d.eids || (d.eids = []);
        b.eid = c.concat(d.eids).join(',');
    });
}
function qm(a) {
    var b = a.jb;
    return a.$a || ('dev' === b ? 'dev' : '');
}
var rm = {};
var sm =
    ((rm.google_ad_modifications = !0),
        (rm.google_analytics_domain_name = !0),
        (rm.google_analytics_uacct = !0),
        (rm.google_pause_ad_requests = !0),
        (rm.google_user_agent_client_hint = !0),
        rm);
function tm(a) {
    return (a = a.innerText || a.innerHTML) &&
        (a = a
            .replace(/^\s+/, '')
            .split(/\r?\n/, 1)[0]
            .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
        RegExp('google_ad_client').test(a[1]) ?
        a[1] :
        null;
}
function um(a) {
    if ((a = a.innerText || a.innerHTML))
        if (
            ((a = a.replace(/^\s+|\s+$/g, '').replace(/\s*(\r?\n)+\s*/g, ';')),
                (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp('google_ad_client').test(a[1]))
        )
            return a[1];
    return null;
}
function vm(a) {
    switch (a) {
        case 'true':
            return !0;
        case 'false':
            return !1;
        case 'null':
            return null;
        case 'undefined':
            break;
        default:
            try {
                var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b) return b[1] || b[2] || '';
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    var c = parseFloat(a);
                    return c === c ? c : void 0;
                }
            } catch (d) {}
    }
}
var wm = 'undefined' === typeof sttc ? void 0 : sttc;
function xm(a) {
    var b = qf;
    try {
        return Od(a, Pd), new xl(JSON.parse(a));
    } catch (c) {
        b.I(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
            d.jspb = String(a);
        });
    }
    return new xl();
}
var ym = L(Qh).h(yh.h, yh.defaultValue);
function zm() {
    var a = J.document;
    a = void 0 === a ? window.document : a;
    Rc(ym, a);
}
var Am = L(Qh).h(zh.h, zh.defaultValue);
function Bm() {
    var a = J.document;
    a = void 0 === a ? window.document : a;
    Rc(Am, a);
}
var Cm = la(['https://pagead2.googlesyndication.com/pagead/js/err_rep.js']);
function Dm() {
    this.h = null;
    this.j = !1;
    this.l = Math.random();
    this.i = this.I;
    this.m = null;
}
aa = Dm.prototype;
aa.Oa = function(a) {
    this.h = a;
};
aa.Qa = function(a) {
    this.j = a;
};
aa.Pa = function(a) {
    this.i = a;
};
aa.I = function(a, b, c, d, e) {
    if ((this.j ? this.l : Math.random()) > (void 0 === c ? 0.01 : c)) return !1;
    md(b) ||
        (b = new ld(b, {
            context: a,
            id: void 0 === e ? 'jserror' : e
        }));
    if (d || this.h)(b.meta = {}), this.h && this.h(b.meta), d && d(b.meta);
    v.google_js_errors = v.google_js_errors || [];
    v.google_js_errors.push(b);
    if (!v.error_rep_loaded) {
        a = fc(Cm);
        var f;
        xc(v.document, null != (f = this.m) ? f : Wb(gc(a).toString()));
        v.error_rep_loaded = !0;
    }
    return !1;
};
aa.ma = function(a, b, c) {
    try {
        var d = b();
    } catch (e) {
        if (!this.i(a, e, 0.01, c, 'jserror')) throw e;
    }
    return d;
};
aa.La = function(a, b, c, d) {
    var e = this;
    return function(...args) {
        var f = ta.apply(0, args);
        return e.ma(a, () => b.apply(c, f), d);
    };
};
function Em(a, b, c) {
    var d = window;
    return function(...args) {
        var e = Dd();
        var f = 3;
        try {
            var g = b.apply(this, args);
        } catch (h) {
            f = 13;
            if (c) return c(a, h), g;
            throw h;
        } finally {
            d.google_measure_js_timing &&
                e &&
                ((e = {
                        label: a.toString(),
                        value: e,
                        duration: (Dd() || 0) - e,
                        type: f
                    }),
                    (f = d.google_js_reporting_queue = d.google_js_reporting_queue || []),
                    2048 > f.length && f.push(e));
        }
        return g;
    };
}
function Fm(a, b) {
    return Em(a, b, (c, d) => {
        new Dm().I(c, d);
    });
}
function Gm(a, b) {
    return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
}
function Hm(a, b) {
    return '&' + a + '=' + b.toFixed(3);
}
function Im() {
    var a = new n.Set();
    try {
        if ('undefined' === typeof googletag || !googletag.pubads) return a;
        for (var b = googletag.pubads(), c = q(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId());
    } catch (e) {}
    return a;
}
function Jm(a) {
    a = a.id;
    return null != a && (Im().has(a) || p(a, 'startsWith').call(a, 'google_ads_iframe_') || p(a, 'startsWith').call(a, 'aswift'));
}
function Km(a, b, c) {
    if (!a.sources) return !1;
    var d = R(Dh);
    switch (Lm(a)) {
        case 2:
            var e = Mm(a);
            if (e) return c.some((g) => Nm(e, g, d));
        case 1:
            var f = Om(a);
            if (f) return b.some((g) => Nm(f, g, d));
    }
    return !1;
}
function Lm(a) {
    if (!a.sources) return 0;
    a = a.sources.filter((b) => b.previousRect && b.currentRect);
    if (1 <= a.length) {
        a = a[0];
        if (a.previousRect.top < a.currentRect.top) return 2;
        if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
}
function Om(a) {
    return Pm(a, (b) => b.currentRect);
}
function Mm(a) {
    return Pm(a, (b) => b.previousRect);
}
function Pm(a, b) {
    return a.sources.reduce((c, d) => {
        d = b(d);
        return c ? (d && 0 !== d.width * d.height ? (d.top < c.top ? d : c) : c) : d;
    }, null);
}
function Qm() {
    fj.call(this);
    this.i = this.h = this.O = this.N = this.H = 0;
    this.za = this.wa = Number.NEGATIVE_INFINITY;
    this.sa = this.ua = this.va = this.xa = this.Ca = this.m = this.Ba = this.R = 0;
    this.ta = !1;
    this.P = this.M = this.A = 0;
    var a = document.querySelector('[data-google-query-id]');
    this.Aa = a ? a.getAttribute('data-google-query-id') : null;
    this.l = null;
    this.ya = !1;
    this.ea = () => {};
}
u(Qm, fj);
function Rm() {
    var a = new Qm();
    if (Q(Ah) && !window.google_plmetrics && window.PerformanceObserver) {
        window.google_plmetrics = !0;
        for (var b = q(['layout-shift', 'largest-contentful-paint', 'first-input', 'longtask']), c = b.next(); !c.done; c = b.next())
            (c = c.value),
            Sm(a).observe({
                type: c,
                buffered: !Q(Gh)
            });
        Tm(a);
    }
}
function Sm(a) {
    a.l ||
        (a.l = new PerformanceObserver(
            Fm(640, (b) => {
                var c = Um !== window.scrollX || Vm !== window.scrollY ? [] : Wm;
                var d = Xm();
                b = q(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next())
                    switch (((e = e.value), e.entryType)) {
                        case 'layout-shift':
                            var f = a;
                            if (!e.hadRecentInput && (!Q(Bh) || 0.01 < e.value)) {
                                f.H += Number(e.value);
                                Number(e.value) > f.N && (f.N = Number(e.value));
                                f.O += 1;
                                var g = Km(e, c, d);
                                g && ((f.m += e.value), f.xa++);
                                if (5e3 < e.startTime - f.wa || 1e3 < e.startTime - f.za)(f.wa = e.startTime), (f.h = 0), (f.i = 0);
                                f.za = e.startTime;
                                f.h += e.value;
                                g && (f.i += e.value);
                                f.h > f.R && ((f.R = f.h), (f.Ca = f.i), (f.Ba = e.startTime + e.duration));
                            }
                            break;
                        case 'largest-contentful-paint':
                            a.va = Math.floor(e.renderTime || e.loadTime);
                            a.ua = e.size;
                            break;
                        case 'first-input':
                            a.sa = Number((e.processingStart - e.startTime).toFixed(3));
                            a.ta = !0;
                            break;
                        case 'longtask':
                            (e = Math.max(0, e.duration - 50)), (a.A += e), (a.M = Math.max(a.M, e)), (a.P += 1);
                    }
            })
        ));
    return a.l;
}
function Tm(a) {
    var b = Fm(641, () => {
        var f = document;
        2 ==
            ({
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            } [f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ''] || 0) && Ym(a);
    });
    var c = Fm(641, () => void Ym(a));
    document.addEventListener('visibilitychange', b);
    document.addEventListener('unload', c);
    var d = R(Eh);
    var e;
    0 < d && (e = setTimeout(c, 1e3 * d));
    a.ea = () => {
        document.removeEventListener('visibilitychange', b);
        document.removeEventListener('unload', c);
        Sm(a).disconnect();
        e && clearTimeout(e);
    };
}
Qm.prototype.j = function() {
    fj.prototype.j.call(this);
    this.ea();
};
function Ym(a) {
    if (!a.ya) {
        a.ya = !0;
        Sm(a).takeRecords();
        var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
        window.LayoutShift &&
            ((b += Hm('cls', a.H)),
                (b += Hm('mls', a.N)),
                (b += Gm('nls', a.O)),
                window.LayoutShiftAttribution && ((b += Hm('cas', a.m)), (b += Gm('nas', a.xa))),
                (b += Hm('wls', a.R)),
                (b += Hm('tls', a.Ba)),
                window.LayoutShiftAttribution && (b += Hm('was', a.Ca)));
        window.LargestContentfulPaint && ((b += Gm('lcp', a.va)), (b += Gm('lcps', a.ua)));
        window.PerformanceEventTiming && a.ta && (b += Gm('fid', a.sa));
        window.PerformanceLongTaskTiming && ((b += Gm('cbt', a.A)), (b += Gm('mbt', a.M)), (b += Gm('nlt', a.P)));
        for (var c = 0, d = q(document.getElementsByTagName('iframe')), e = d.next(); !e.done; e = d.next()) Jm(e.value) && c++;
        b += Gm('nif', c);
        b += Gm('ifi', cd(window));
        c = L( of ).h();
        b += '&eid=' + encodeURIComponent(c.join());
        b += '&top=' + (v === v.top ? 1 : 0);
        b += a.Aa ? '&qqid=' + encodeURIComponent(a.Aa) : Gm('pvsid', Sc(v));
        window.googletag && (b += '&gpt=1');
        window.fetch(b, {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors'
        });
        a.v || ((a.v = !0), a.j());
    }
}
function Nm(a, b, c) {
    if (0 === c) return !0;
    var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= d || 0 >= a ? !1 : (100 * d * a) / ((b.right - b.left) * (b.bottom - b.top)) >= c;
}
function Xm() {
    var a = [].concat(ma(document.getElementsByTagName('iframe'))).filter(Jm);
    var b = []
        .concat(ma(Im()))
        .map((c) => document.getElementById(c))
        .filter((c) => null !== c);
    Um = window.scrollX;
    Vm = window.scrollY;
    return (Wm = [].concat(ma(a), ma(b)).map((c) => c.getBoundingClientRect()));
}
var Um = void 0;
var Vm = void 0;
var Wm = [];
function Zm(a) {
    a = void 0 === a ? window : a;
    return !a.PeriodicSyncManager;
}
function $m() {
    var a = void 0 === a ? window : a;
    if ((!Zm(a) && Q(Hh)) || (Zm(a) && Q(Ih))) {
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b;
    }
    return !1;
}
var X = {
    issuerOrigin: 'https://attestation.android.com',
    issuancePath: '/att/i',
    redemptionPath: '/att/r',
    shouldRedeemToken() {
        return $m();
    },
    shouldRequestToken() {
        return $m();
    }
};
var Y = {
    issuerOrigin: 'https://pagead2.googlesyndication.com',
    issuancePath: '/dtt/i',
    redemptionPath: '/dtt/r',
    getStatePath: '/dtt/s',
    shouldRedeemToken() {
        return !0;
    },
    shouldRequestToken() {
        return !0;
    }
};
var an = L(Qh).h(Nh.h, Nh.defaultValue);
function bn(a) {
    a = void 0 === a ? !1 : a;
    fj.call(this);
    var b = this;
    this.h = a;
    a = [];
    $m() && a.push(X);
    Q(Kh) && a.push(Y);
    if (document.hasTrustToken && !Q(Jh) && !Array.isArray(window.goog_tt_state)) {
        var c = a.map((d) => ({
            issuerOrigin: d.issuerOrigin,
            state: b.h ? 1 : 12
        }));
        Object.defineProperty(window, 'goog_tt_state', {
            configurable: !1,
            get() {
                return c.slice();
            }
        });
    }
}
u(bn, fj);
function cn() {
    var a = void 0 === a ? window.document : a;
    Rc(an, a);
}
function dn(a, b) {
    return Q(Lh) || (a && (Q(Oh) || '.google.de' != b)) || '.google.ch' === b || 'function' === typeof J.__tcfapi;
}
function Z(a, b, c) {
    var d = p(window.goog_tt_state, 'find').call(window.goog_tt_state, (e) => e.issuerOrigin === a);
    d && ((d.state = b), void 0 != c && (d.hasRedemptionRecord = c));
}
function en() {
    var a = window.goog_tt_state;
    return Array.isArray(a) && a.some((b) => 1 != b.state);
}
function fn() {
    var a = X.issuerOrigin + X.redemptionPath;
    var b = {
        keepalive: !0,
        trustToken: {
            type: 'token-redemption',
            issuer: X.issuerOrigin,
            refreshPolicy: 'none'
        }
    };
    Z(X.issuerOrigin, 2);
    return window
        .fetch(a, b)
        .then((c) => {
            if (!c.ok) throw Error(c.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 6, !0);
        })
        .catch((c) => {
            c && 'NoModificationAllowedError' === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5);
        });
}
function gn() {
    var a = X.issuerOrigin + X.issuancePath;
    Z(X.issuerOrigin, 8);
    return window
        .fetch(a, {
            keepalive: !0,
            trustToken: {
                type: 'token-request'
            }
        })
        .then((b) => {
            if (!b.ok) throw Error(b.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 10);
            return fn();
        })
        .catch((b) => {
            if (b && 'NoModificationAllowedError' === b.name) return Z(X.issuerOrigin, 10), fn();
            Z(X.issuerOrigin, 9);
        });
}
function hn() {
    Z(X.issuerOrigin, 13);
    return document.hasTrustToken(X.issuerOrigin).then((a) => (a ? fn() : gn()));
}
function jn() {
    Z(Y.issuerOrigin, 13);
    if (n.Promise) {
        var a = document
            .hasTrustToken(Y.issuerOrigin)
            .then((e) => e)
            .catch((e) =>
                n.Promise.reject({
                    state: 19,
                    error: e
                })
            );
        var b = Y.issuerOrigin + Y.redemptionPath;
        var c = {
            keepalive: !0,
            trustToken: {
                type: 'token-redemption',
                refreshPolicy: 'none'
            }
        };
        Z(Y.issuerOrigin, 16);
        a = a
            .then((e) =>
                window
                .fetch(b, c)
                .then((f) => {
                    if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                    Z(Y.issuerOrigin, 18, !0);
                })
                .catch((f) => {
                    if (f && 'NoModificationAllowedError' === f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e)
                            return n.Promise.reject({
                                state: 17,
                                error: f
                            });
                        Z(Y.issuerOrigin, 17);
                    }
                })
            )
            .then(() =>
                document
                .hasTrustToken(Y.issuerOrigin)
                .then((e) => e)
                .catch((e) =>
                    n.Promise.reject({
                        state: 19,
                        error: e
                    })
                )
            )
            .then((e) => {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window
                    .fetch(f + '?ht=' + e, {
                        trustToken: {
                            type: 'send-redemption-record',
                            issuers: [Y.issuerOrigin]
                        }
                    })
                    .then((g) => {
                        if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                        Z(Y.issuerOrigin, 22);
                        return g.text().then((h) => JSON.parse(h));
                    })
                    .catch((g) =>
                        n.Promise.reject({
                            state: 21,
                            error: g
                        })
                    );
            });
        var d = Sc(window);
        return a
            .then((e) => {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ?
                    (Z(Y.issuerOrigin, 23),
                        window
                        .fetch(f + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-request'
                            }
                        })
                        .then((g) => {
                            if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 25);
                            return e;
                        })
                        .catch((g) =>
                            n.Promise.reject({
                                state: 24,
                                error: g
                            })
                        )) :
                    e;
            })
            .then((e) => {
                if (e && e.srdt && e.cs)
                    return (
                        Z(Y.issuerOrigin, 26),
                        window
                        .fetch(b + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-redemption',
                                refreshPolicy: 'refresh'
                            }
                        })
                        .then((f) => {
                            if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 28, !0);
                        })
                        .catch((f) =>
                            n.Promise.reject({
                                state: 27,
                                error: f
                            })
                        )
                    );
            })
            .then(() => {
                Z(Y.issuerOrigin, 29);
            })
            .catch((e) => {
                if (e instanceof Object && e.hasOwnProperty('state') && e.hasOwnProperty('error'))
                    if ('number' === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(Mh);
                        Math.random() <= f &&
                            Zc({
                                    state: e.state,
                                    err: e.error.toString()
                                },
                                'dtt_err'
                            );
                    } else throw Error(e);
                else throw e;
            });
    }
}
function kn(a) {
    if (document.hasTrustToken && !Q(Jh) && a.h) {
        if (en()) return window.goog_tt_promise;
        a = [];
        $m() && a.push(hn());
        Q(Kh) && a.push(jn());
        if (n.Promise && n.Promise.all)
            return (
                (a = n.Promise.all(a)),
                'object' != typeof window.goog_tt_promise &&
                Object.defineProperty(window, 'goog_tt_promise', {
                    configurable: !1,
                    value: a,
                    writable: !1
                }),
                a
            );
    }
}
var ln = 'platform platformVersion architecture model uaFullVersion bitness'.split(' ');
function mn() {
    return J.navigator && J.navigator.userAgentData && 'function' === typeof J.navigator.userAgentData.getHighEntropyValues ?
        J.navigator.userAgentData.getHighEntropyValues(ln).then((a) => {
            var b = new xj();
            b = A(b, 1, a.platform);
            b = A(b, 2, a.platformVersion);
            b = A(b, 3, a.architecture);
            b = A(b, 4, a.model);
            b = A(b, 5, a.uaFullVersion);
            return A(b, 9, a.bitness);
        }) :
        null;
}
function nn(a, b) {
    b.google_ad_host || ((a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute('content')));
}
function on(a, b, c) {
    c = void 0 === c ? '' : c;
    J.google_sa_impl && !J.document.getElementById('google_shimpl') && ((J.google_sa_queue = null), (J.google_sl_win = null), (J.google_sa_impl = null));
    J.google_sa_queue ||
        ((J.google_sa_queue = []),
            (J.google_sl_win = J),
            (J.google_process_slots = tf(215, () => pn(J))),
            (a = qn(c, a, b)),
            (xc(J.document, a).id = 'google_shimpl'));
}
function pn(a) {
    var b = a.google_sa_queue;
    var c = b.shift();
    a.google_sa_impl ||
        uf('shimpl', {
            t: 'no_fn'
        });
    'function' === typeof c && sf(216, c);
    b.length &&
        a.setTimeout(
            tf(215, () => pn(a)),
            0
        );
}
function rn(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
}
function qn(a, b, c) {
    var d = Math.random() < R(lh) ? Wb(gc(b.lb).toString()) : null;
    b = D(c, 4) ? b.kb : b.mb;
    d = d ? d : Wb(gc(b).toString());
    b = {};
    a: {
        if (D(c, 4)) {
            if ((c = a || sn())) {
                var e = {};
                c = ((e.client = c), (e.plah = J.location.host), e);
                break a;
            }
            throw Error('PublisherCodeNotFoundForAma');
        }
        c = {};
    }
    tn(c, b);
    a: {
        if (Q(ih) && (a = a || sn())) {
            c = {};
            a =
                ((c.client = a),
                    (c.plah = J.location.host),
                    (c.ama_t = 'adsense'),
                    (c.asntp = R(Ug)),
                    (c.asntpv = R(Yg)),
                    (c.asntpl = R(Wg)),
                    (c.asntpm = R(Xg)),
                    (c.asntpc = R(Vg)),
                    (c.asna = R(Qg)),
                    (c.asnd = R(Rg)),
                    (c.asnp = R(Sg)),
                    (c.asns = R(Tg)),
                    (c.asmat = R(Pg)),
                    (c.asptt = R(Zg)),
                    (c.easpi = Q(ih)),
                    (c.asro = Q($g)),
                    c);
            break a;
        }
        a = {};
    }
    tn(a, b);
    tn(
        Rh() ? {
            bust: Rh()
        } : {},
        b
    );
    return Tb(d, b);
}
function tn(a, b) {
    Ec(a, (c, d) => {
        void 0 === b[d] && (b[d] = c);
    });
}
function sn() {
    if (J.google_ad_client) return J.google_ad_client;
    var a = U(J).head_tag_slot_vars;
    if (a && a.google_ad_client) return a.google_ad_client;
    if ((a = J.document.querySelector('.adsbygoogle[data-ad-client]'))) return a.getAttribute('data-ad-client');
    b: {
        a = J.document.getElementsByTagName('script');
        var b = (J.navigator && J.navigator.userAgent) || '';
        b =
        RegExp(
            'appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube',
            'i'
        ).test(b) ||
        (/i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !gd()) ?
        tm : um;
        for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            if (!d.google_parsed_script_for_pub_code && ((d.google_parsed_script_for_pub_code = !0), (d = b(d)))) {
                a = d;
                break b;
            }
        }
        a = null;
    }
    if (a) {
        b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        for (c = {};
            (d = b.exec(a));) c[d[1]] = vm(d[2]);
        a = c.google_ad_client ? c.google_ad_client : '';
    } else a = '';
    return a ? a : '';
}
function un(a) {
    a: {
        for (var b = [v.top], c = [], d = 0, e;
            (e = b[d++]);) {
            c.push(e);
            try {
                if (e.frames)
                    for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g]);
            } catch (l) {}
        }
        for (b = 0; b < c.length; b++)
            try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Vc = h;
                    break a;
                }
            } catch (l) {}
        Vc = null;
    }
    if (Vc) return null;
    c = yc('IFRAME');
    c.id = 'google_esf';
    c.name = 'google_esf';
    a = a.rb;
    if (a instanceof bc) {
        var k;
        h = ec(a);
        a = (null === (k = Zb()) || void 0 === k ? 0 : k.isScriptURL(h)) ? TrustedScriptURL.prototype.toString.apply(h) : h;
    } else a = Vb(a).toString();
    c.src = a;
    c.style.display = 'none';
    return c;
}
function vn(a, b, c, d) {
    wn(a, b, c, d, (e, f) => {
        e = e.document;
        for (var g = void 0, h = 0; !g || e.getElementById(g + '_anchor');) g = 'aswift_' + h++;
        e = g;
        g = Number(f.google_ad_width || 0);
        f = Number(f.google_ad_height || 0);
        h = yc('INS');
        h.id = e + '_anchor';
        ok(h, g, f);
        h.style.display = 'block';
        var k = yc('INS');
        k.id = e + '_expand';
        ok(k, g, f);
        k.style.display = 'inline-table';
        k.appendChild(h);
        c.appendChild(k);
        return e;
    });
}
function wn(a, b, c, d, e) {
    var f = e(a, b);
    xn(a, c, b);
    c = Ja;
    e = new Date().getTime();
    b.google_lrv = Eb(d, 2);
    b.google_async_iframe_id = f;
    b.google_start_time = c;
    b.google_bpp = e > c ? e - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[f] = b;
    b.dninfo = b.google_loader_used;
    c = (d = !!a.document.getElementById(f + '_anchor')) ? (h) => h() : (h) => window.setTimeout(h, 0);
    b.dninfo += '_' + d;
    var g = {
        pubWin: a,
        iframeWin: null,
        vars: b
    };
    rn(
        a,
        () => {
            var h = !!a.document.getElementById(f + '_anchor');
            b.dninfo += '_' + h;
            (h = a.google_sa_impl(g)) && h.catch && h.catch(vf(911));
        },
        c
    );
}
function xn(a, b, c) {
    var d = c.google_ad_output;
    var e = c.google_ad_format;
    var f = c.google_ad_width || 0;
    var g = c.google_ad_height || 0;
    e || ('html' != d && null != d) || (e = f + 'x' + g);
    d = !c.google_ad_slot || c.google_override_format || (!pk[c.google_ad_width + 'x' + c.google_ad_height] && 'aa' == c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = '');
    c.google_ad_format = e;
    if ('number' !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
        e = [
            c.google_ad_slot,
            c.google_orig_ad_format || c.google_ad_format,
            c.google_ad_type,
            c.google_orig_ad_width || c.google_ad_width,
            c.google_orig_ad_height || c.google_ad_height
        ];
        d = [];
        f = 0;
        for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push('') : d.push(g.id);
        (d = d.join()) && e.push(d);
        c.google_ad_unit_key = Fc(e.join(':')).toString();
        var h = void 0 === h ? !1 : h;
        e = [];
        for (d = 0; b && 25 > d; ++d) {
            f = '';
            (void 0 !== h && h) || (f = (f = 9 !== b.nodeType && b.id) ? '/' + f : '');
            a: {
                if (b && b.nodeName && b.parentElement) {
                    g = b.nodeName.toString().toLowerCase();
                    for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                        var r = k[m];
                        if (r.nodeName && r.nodeName.toString().toLowerCase() === g) {
                            if (b === r) {
                                g = '.' + l;
                                break a;
                            }
                            ++l;
                        }
                    }
                }
                g = '';
            }
            e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
            b = b.parentElement;
        }
        h = e.join() + ':';
        b = [];
        if (a)
            try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var x = t.frames;
                    for (d = 0; d < x.length; ++d)
                        if (a === x[d]) {
                            b.push(d);
                            break;
                        }
                    a = t;
                    t = a.parent;
                }
            } catch (E) {}
        c.google_ad_dom_fingerprint = Fc(h + b.join()).toString();
    }
}
function yn() {
    var a = hd(v);
    a &&
        ((a = Af(a)),
            a.tagSpecificState[1] ||
            (a.tagSpecificState[1] = {
                debugCard: null,
                debugCardRequested: !1
            }));
}
function zn(a) {
    cn();
    dn(Al(), Eb(a, 8)) ||
        tf(779, () => {
            var b = new bn(!0);
            0 < R(Ph) ? (J.google_trust_token_operation_promise = kn(b)) : kn(b);
        })();
    a = mn();
    null != a &&
        a.then((b) => {
            J.google_user_agent_client_hint = Cb(b);
        });
    Bm();
    zm();
}
function An(a, b) {
    switch (a) {
        case 'google_reactive_ad_format':
            return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
        case 'google_allow_expandable_ads':
            return /^true$/.test(b);
        default:
            return b;
    }
}
function Bn(a, b) {
    if (a.getAttribute('src')) {
        var c = a.getAttribute('src') || '';
        (c = vc(c)) && (b.google_ad_client = An('google_ad_client', c));
    }
    a = a.attributes;
    c = a.length;
    for (var d = 0; d < c; d++) {
        var e = a[d];
        if (/data-/.test(e.name)) {
            var f = Ka(e.name.replace('data-matched-content', 'google_content_recommendation').replace('data', 'google').replace(/-/g, '_'));
            b.hasOwnProperty(f) || ((e = An(f, e.value)), null !== e && (b[f] = e));
        }
    }
}
function Cn(a) {
    if ((a = Wc(a)))
        switch (a.data && a.data.autoFormat) {
            case 'rspv':
                return 13;
            case 'mcrspv':
                return 15;
            default:
                return 14;
        }
    else return 12;
}
function Dn(a, b, c, d) {
    Bn(a, b);
    if (c.document && c.document.body && !Yk(c, b) && !b.google_reactive_ad_format) {
        var e = parseInt(a.style.width, 10);
        var f = bl(a, c);
        if (0 < f && e > f) {
            var g = parseInt(a.style.height, 10);
            e = !!pk[e + 'x' + g];
            var h = f;
            if (e) {
                var k = qk(f, g);
                if (k)(h = k), (b.google_ad_format = k + 'x' + g + '_0ads_al');
                else throw new K('No slot size for availableWidth=' + f);
            }
            b.google_ad_resize = !0;
            b.google_ad_width = h;
            e || ((b.google_ad_format = null), (b.google_override_format = !0));
            f = h;
            a.style.width = f + 'px';
            g = Sk(f, 'auto', c, a, b);
            h = f;
            g.size().i(c, b, a);
            uk(g, h, b);
            g = g.size();
            b.google_responsive_formats = null;
            g.minWidth() > f && !e && ((b.google_ad_width = g.minWidth()), (a.style.width = g.minWidth() + 'px'));
        }
    }
    e = a.offsetWidth || hi(a, c, 'width', I) || b.google_ad_width || 0;
    f = Ga(Sk, e, 'auto', c, a, b, !1, !0);
    !(g = Q(gh) || (!(488 > Cf(c)) && !Q(oh))) &&
    (g = Q(qh)) &&
    ((g = c.top == c), g || (wc(c.top) && c.top ? (b.gfwrnwer = 3) : (b.gfwrnwer = 16), (g = !1)), (g = !g));
    if (g) d = !1;
    else {
        g = hd(c) || c;
        h = b.google_ad_client;
        d =
            g.location && '#ftptohbh' === g.location.hash ?
            2 :
            ak(g.location, 'google_responsive_slot_preview') || Q(ph) ?
            1 :
            Q(nh) ?
            2 :
            Cl(g, 1, h, d) ?
            1 :
            0;
        if ((g = 0 !== d))
            b: if (b.google_reactive_ad_format || Yk(c, b) || Yh(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = zc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b;
                    }
                    if (!$a(['static', 'relative'], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b;
                    }
                }
                if (!Q(oh) && ((g = bi(c, a, e, 0.3, b)), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b;
                }
                g = c.top == c ? !0 : !1;
            }
        g
            ?
            ((b.google_resizing_allowed = !0),
                (b.ovlp = !0),
                2 === d ?
                ((d = {}),
                    uk(f(), e, d),
                    (b.google_resizing_width = d.google_ad_width),
                    (b.google_resizing_height = d.google_ad_height),
                    (b.iaaso = !1)) :
                ((b.google_ad_format = 'auto'), (b.iaaso = !0), (b.armr = 1)),
                (d = !0)) :
            (d = !1);
    }
    if ((e = Yk(c, b))) $k(e, a, b, c, d);
    else {
        if (Yh(a, b)) {
            if ((d = zc(a, c)))(a.style.width = d.width), (a.style.height = d.height), Xh(d, b);
            b.google_ad_width || (b.google_ad_width = a.offsetWidth);
            b.google_ad_height || (b.google_ad_height = a.offsetHeight);
            b.google_loader_features_used = 256;
            b.google_responsive_auto_format = Cn(c);
        } else Xh(a.style, b);
        (c.location && '#gfwmrp' == c.location.hash) || (12 == b.google_responsive_auto_format && 'true' == b.google_full_width_responsive) ?
        $k(10, a, b, c, !1): 0.01 > Math.random() &&
            12 === b.google_responsive_auto_format &&
            ((a = ci(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b)),
                !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
}
function En(a) {
    var b = window;
    var c = void 0 === c ? null : c;
    kc(b, 'message', (d) => {
            try {
                var e = JSON.parse(d.data);
            } catch (f) {}
            return;
        }!e || 'sc-cnf' !== e.googMsgType || (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) || a(e, d);
    });
}
function Fn(a, b) {
    b = void 0 === b ? 500 : b;
    fj.call(this);
    this.i = a;
    this.Ra = b;
    this.h = null;
    this.m = {};
    this.l = null;
}
u(Fn, fj);
Fn.prototype.j = function() {
    this.m = {};
    this.l && (lc(this.i, this.l), delete this.l);
    delete this.m;
    delete this.i;
    delete this.h;
    fj.prototype.j.call(this);
};
function Gn(a) {
    fj.call(this);
    this.h = a;
    this.i = null;
    this.l = !1;
}
u(Gn, fj);
var Hn = null;
var In = [];
var Jn = new n.Map();
var Kn = -1;
function Ln(a) {
    return pi.test(a.className) && 'done' != a.dataset.adsbygoogleStatus;
}
function Mn(a, b, c) {
    a.dataset.adsbygoogleStatus = 'done';
    Nn(a, b, c);
}
function Nn(a, b, c) {
    var d = window;
    var e = fd();
    e.google_spfd || (e.google_spfd = Dn);
    (e = b.google_reactive_ads_config) || Dn(a, b, d, c);
    nn(d, b);
    if (!On(a, b, d)) {
        e || (d.google_lpabyc = Zh(a, d) + hi(a, d, 'height', I));
        if (e) {
            e = e.page_level_pubvars || {};
            if (U(J).page_contains_reactive_tag && !U(J).allow_second_reactive_tag) {
                if (e.pltais) {
                    Yj(!1);
                    return;
                }
                throw new K("Only one 'enable_page_level_ads' allowed per page.");
            }
            U(J).page_contains_reactive_tag = !0;
            Yj(7 === e.google_pgb_reactive);
        }
        b.google_unique_id = bd(d);
        Ec(sm, (f, g) => {
            b[g] = b[g] || d[g];
        });
        b.google_loader_used = 'aa';
        b.google_reactive_tag_first = 1 === (U(J).first_tag_on_page || 0);
        sf(164, () => {
            vn(d, b, a, c);
        });
    }
}
function On(a, b, c) {
    var d = b.google_reactive_ads_config;
    var e = 'string' === typeof a.className && RegExp('(\\W|^)adsbygoogle-noablate(\\W|$)').test(a.className);
    var f = Vj(c);
    if (f && f.Da && 'on' != b.google_adtest && !e) {
        e = Zh(a, c);
        var g = Bf(c).clientHeight;
        if (!f.oa || (f.oa && ((0 == g ? null : e / g) || 0) >= f.oa))
            return (
                (a.className += ' adsbygoogle-ablated-ad-slot'),
                (c = c.google_sv_map = c.google_sv_map || {}),
                (d = Aa(a)),
                (b.google_element_uid = d),
                (c[b.google_element_uid] = b),
                a.setAttribute('google_element_uid', d),
                'slot' == f.ob &&
                (null !== Lc(a.getAttribute('width')) && a.setAttribute('width', 0),
                    null !== Lc(a.getAttribute('height')) && a.setAttribute('height', 0),
                    (a.style.width = '0px'),
                    (a.style.height = '0px')),
                !0
            );
    }
    if ((f = zc(a, c)) && 'none' == f.display && !('on' == b.google_adtest || 0 < b.google_reactive_ad_format || d))
        return c.document.createComment && a.appendChild(c.document.createComment('No ad requested because of display:none on the adsbygoogle tag')), !0;
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format) || !a ?
        !1 :
        (v.console &&
            v.console.warn(
                'Adsbygoogle tag with data-reactive-ad-format=' +
                b.google_reactive_ad_format +
                ' is deprecated. Check out page-level ads at https://www.google.com/adsense'
            ),
            !0);
}
function Pn(a) {
    var b = document.getElementsByTagName('INS');
    for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
        var e = d;
        if (Ln(e) && 'reserved' != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d;
    }
    return null;
}
function Qn(a, b, c) {
    if (a && a.shift)
        for (var d = 20; 0 < a.length && 0 < d;) {
            try {
                Rn(a.shift(), b, c);
            } catch (e) {
                setTimeout(() => {
                    throw e;
                });
            }
            --d;
        }
}
function Sn() {
    var a = yc('INS');
    a.className = 'adsbygoogle';
    a.className += ' adsbygoogle-noablate';
    Oc(a);
    return a;
}
function Tn(a, b) {
    var c = {};
    Ec(xf, (f, g) => {
        !1 === a.enable_page_level_ads ? (c[g] = !1) : a.hasOwnProperty(g) && (c[g] = a[g]);
    });
    za(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
    var d = Sn();
    Uc.body.appendChild(d);
    var e = {};
    e = ((e.google_reactive_ads_config = c), (e.google_ad_client = a.google_ad_client), e);
    e.google_pause_ad_requests = !!U(J).pause_ad_requests;
    Mn(d, e, b);
}
function Un(a, b) {
    function c() {
        return Tn(a, b);
    }
    Af(v).wasPlaTagProcessed = !0;
    var d = v.document;
    if (d.body || 'complete' == d.readyState || 'interactive' == d.readyState) c();
    else {
        var e = jc(tf(191, c));
        kc(d, 'DOMContentLoaded', e);
        new v.MutationObserver((f, g) => {
            d.body && (e(), g.disconnect());
        }).observe(d, {
            childList: !0,
            subtree: !0
        });
    }
}
function Rn(a, b, c) {
    var d = {};
    sf(
        165,
        () => {
            Vn(a, d, b, c);
        },
        (e) => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin;
        }
    );
}
function Wn(a) {
    delete a.google_checked_head;
    Ec(a, (b, c) => {
        oi[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace('google', 'data').replace(/_/g, '-') + ' attribute.'));
    });
}
function Xn(a, b) {
    var c =
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') ||
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
    if (c) {
        c.setAttribute('data-checked-head', 'true');
        var d = U(window);
        if (d.head_tag_slot_vars) {
            if (Q(kh)) {
                Yn(c);
                return;
            }
            throw new K('Only one AdSense head tag supported per page. The second tag is ignored.');
        }
        var e = {};
        Bn(c, e);
        Wn(e);
        var f = Pb(e);
        d.head_tag_slot_vars = f;
        c = {
            google_ad_client: e.google_ad_client,
            enable_page_level_ads: e
        };
        J.adsbygoogle || (J.adsbygoogle = []);
        d = J.adsbygoogle;
        d.loaded ? d.push(c) : d.splice(0, 0, c);
        var g;
        e.google_adbreak_test || ((null == (g = Gb(b, ll, 13, yl)) ? 0 : D(g, 3)) && Q(uh)) ?
            Zn(f, a) :
            En(() => {
                Zn(f, a);
            });
    }
}
function Yn(a) {
    var b = U(window).head_tag_slot_vars;
    var c = a.getAttribute('src') || '';
    if ((a = vc(c) || a.getAttribute('data-ad-client') || '') && a !== b.google_ad_client)
        throw new K(
            'Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page ' +
            a +
            ', ' +
            b.google_ad_client
        );
}
function $n(a) {
    if ('object' === typeof a && null != a) {
        if ('string' === typeof a.type) return 2;
        if ('string' === typeof a.sound || 'string' === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
}
function Vn(a, b, c, d) {
    if (null == a) throw new K('push() called with no parameters.');
    14 === xb(d, yl) && ao(a, sb(Gb(d, ml, 14, yl), 1), Eb(d, 2));
    var e = $n(a);
    if (0 !== e)
        Q(jh) &&
        ((d = Zj()),
            d.first_slotcar_request_processing_time || ((d.first_slotcar_request_processing_time = Date.now()), (d.adsbygoogle_execution_start_time = Ja))),
        null == Hn ?
        (bo(a), In.push(a)) :
        3 === e ?
        sf(787, () => {
            Hn.handleAdConfig(a);
        }) :
        Hn.handleAdBreak(a).catch(vf(730));
    else {
        Ja = new Date().getTime();
        on(c, d, co(a));
        eo();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ('string' === typeof a.google_ad_client) {
                    e = !0;
                    break a;
                }
                throw new K("'google_ad_client' is missing from the tag config.");
            }
            e = !1;
        }
        if (e) fo(a, d, b);
        else if (
            ((e = a.params) &&
                Ec(e, (g, h) => {
                    b[h] = g;
                }),
                'js' === b.google_ad_output)
        )
            console.warn(
                "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
            );
        else {
            e = go(a.element);
            Bn(e, b);
            c = U(v).head_tag_slot_vars || {};
            Ec(c, (g, h) => {
                b.hasOwnProperty(h) || (b[h] = g);
            });
            if (e.hasAttribute('data-require-head') && !U(v).head_tag_slot_vars)
                throw new K(
                    "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
                );
            if (!b.google_ad_client) throw new K('Ad client is missing from the slot.');
            b.google_apsail = Il(b.google_ad_client);
            var f = (c = 0 === (U(J).first_tag_on_page || 0) && hk(b)) && ik(c);
            c && !f && (fo(c, d), (U(J).skip_next_reactive_tag = !0));
            0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 2);
            b.google_pause_ad_requests = !!U(J).pause_ad_requests;
            Mn(e, b, d);
            c && f && ho(c);
        }
    }
}
var io = !1;
function ao(a, b, c) {
    Q(hh) &&
        !io &&
        ((io = !0),
            (a = co(a)) || (a = sn()),
            uf(
                'predictive_abg', {
                    a_c: a,
                    p_c: b,
                    b_v: c
                },
                0.01
            ));
}
function co(a) {
    return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : '';
}
function eo() {
    if (Q(ch)) {
        var a = Vj(J);
        if (!(a = a && a.Da)) {
            try {
                var b = J.localStorage;
            } catch (c) {
                b = null;
            }
            b = b ? Ti(b) : null;
            a = !(b && Qj(b) && b);
        }
        a || Xj(J, 1);
    }
}
function ho(a) {
    Tc(() => {
        Af(v).wasPlaTagProcessed || (v.adsbygoogle && v.adsbygoogle.push(a));
    });
}
function fo(a, b, c) {
    U(J).skip_next_reactive_tag ?
        (U(J).skip_next_reactive_tag = !1) :
        (0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 1),
            c && a.tag_partner && (Wj(v, a.tag_partner), Wj(c, a.tag_partner)),
            (c = D(b, 6)),
            U(J).ama_ran_on_page || kk(new jk(a, c)),
            Un(a, b));
}
function go(a) {
    if (a) {
        if (!Ln(a) && (a.id ? (a = Pn(a.id)) : (a = null), !a)) throw new K("'element' has already been filled.");
        if (!('innerHTML' in a)) throw new K("'element' is not a good DOM element.");
    } else if (((a = Pn()), !a)) throw new K('All ins elements in the DOM with class=adsbygoogle already have ads in them.');
    return a;
}
function jo() {
    var a = new hj(J);
    var b = new Fn(J);
    var c = new Gn(J);
    var d = J.__cmp ? 1 : 0;
    a = ij(a) ? 1 : 0;
    var e;
    var f;
    (f = 'function' === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) ||
    (b.h ? (b = b.h) : ((b.h = Mc(b.i, '__uspapiLocator')), (b = b.h)), (f = null != b));
    c.l || (c.i || (c.i = c.h.googlefc ? c.h : Mc(c.h, 'googlefcPresent')), (c.l = !0));
    uf(
        'cmpMet', {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        },
        R(Ng)
    );
}
function ko(a) {
    a = {
        value: D(a, 16)
    };
    var b = 0.01;
    R(eh) && ((a.eid = R(eh)), (b = 1));
    a.frequency = b;
    uf('new_abg_tag', a, b);
}
function lo(a) {
    Xi().S[Zi(26)] = !!Number(a);
}
function mo(a) {
    Number(a) ?
        (U(J).pause_ad_requests = !0) :
        ((U(J).pause_ad_requests = !1),
            (a = () => {
                if (!U(J).pause_ad_requests)
                    if (Q(xh)) {
                        var b = void 0 === b ? {} : b;
                        if ('function' === typeof window.CustomEvent) var c = new CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', b);
                        else
                            (c = document.createEvent('CustomEvent')),
                            c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !!b.bubbles, !!b.cancelable, b.detail);
                        J.dispatchEvent(c);
                    } else {
                        b = fd();
                        var d = fd();
                        try {
                            if (Uc.createEvent)
                                (c = Uc.createEvent('CustomEvent')),
                                c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !1, !1, ''),
                                b.dispatchEvent(c);
                            else if (ad(d.CustomEvent)) {
                                var e = new d.CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: ''
                                });
                                b.dispatchEvent(e);
                            } else if (ad(d.Event)) {
                                var f = new Event('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1
                                });
                                b.dispatchEvent(f);
                            }
                        } catch (g) {}
                    }
            }),
            v.setTimeout(a, 0),
            v.setTimeout(a, 1e3));
}
function no(a) {
    uf(
        'adsenseGfpKnob', {
            value: a,
            ptt: 9
        },
        0.1
    );
    switch (a) {
        case 0:
        case 2:
            a = !0;
            break;
        case 1:
            a = !1;
            break;
        default:
            throw Error('Illegal value of cookieOptions: ' + a);
    }
    J._gfp_a_ = a;
}
function oo(a) {
    ad(a) && window.setTimeout(a, 0);
}
function Zn(a, b) {
    ((ba = fk(
                Tb(
                    Wb(gc(b.nb).toString()),
                    Rh() ? {
                        bust: Rh()
                    } : {}
                )
            )
            .then((c) => {
                null == Hn && (c.init(a), (Hn = c), po());
            })
            .catch(vf(723))),
        p(ba, 'finally')).call(ba, () => {
        In.length = 0;
        uf('slotcar', {
            event: 'api_ld',
            time: Date.now() - Ja,
            time_pr: Date.now() - Kn
        });
    });
}
function po() {
    for (var a = q(p(Jn, 'keys').call(Jn)), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = Jn.get(b); -
        1 !== c && (v.clearTimeout(c), Jn.delete(b));
    }
    a = {};
    for (
        b = 0; b < In.length; a = {
            da: a.da,
            Y: a.Y
        },
        b++
    )
        Jn.has(b) ||
        ((a.Y = In[b]),
            (a.da = $n(a.Y)),
            sf(
                723,
                ((d) => () => {
                    3 === d.da ? Hn.handleAdConfig(d.Y) : 2 === d.da && Hn.handleAdBreakBeforeReady(d.Y).catch(vf(730));
                })(a)
            ));
}
function bo(a) {
    var b = In.length;
    if (2 === $n(a) && 'preroll' === a.type && null != a.adBreakDone) {
        -1 === Kn && (Kn = Date.now());
        var c = v.setTimeout(() => {
            try {
                (0, a.adBreakDone)({
                    breakType: 'preroll',
                    breakName: a.name,
                    breakFormat: 'preroll',
                    breakStatus: 'timeout'
                }),
                Jn.set(b, -1),
                    uf('slotcar', {
                        event: 'pr_to',
                        source: 'adsbygoogle'
                    });
            } catch (d) {
                console.error('[Ad Placement API] adBreakDone callback threw an error:', d instanceof Error ? d : Error(String(d)));
            }
        }, 1e3 * R(vh));
        Jn.set(b, c);
    }
}
((a, b, c, d) => {
    d = void 0 === d ? () => {} : d;
    qf.Pa(wf);
    sf(166, () => {
        var e = xm(b);
        pm(Eb(e, 2));
        Bl(D(e, 6));
        d();
        kd(16, [1, e.toJSON()]);
        var f = Xc(Wc(J)) || J;
        var g = c(
            qm({
                $a: a,
                jb: Eb(e, 2)
            }),
            e
        );
        Q(mh) && Fl(f, e);
        om(f, e, null === J.document.currentScript ? 1 : Ol(g.qb));
        if ((!Qa() || 0 <= La(Ta(), 11)) && (null == (J.Prototype || {}).Version || !Q(fh))) {
            rf(Q(Ch));
            zn(e);
            Gj();
            try {
                Rm();
            } catch (r) {}
            yn();
            Xn(g, e);
            f = window;
            var h = f.adsbygoogle;
            if (!h || !h.loaded) {
                if (Q(dh) && !D(e, 16))
                    try {
                        if (J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return;
                    } catch (r) {}
                ko(e);
                R(Ng) && jo();
                var k = {
                    push(r) {
                        Rn(r, g, e);
                    },
                    loaded: !0
                };
                try {
                    Object.defineProperty(k, 'requestNonPersonalizedAds', {
                            set: lo
                        }),
                        Object.defineProperty(k, 'pauseAdRequests', {
                            set: mo
                        }),
                        Object.defineProperty(k, 'cookieOptions', {
                            set: no
                        }),
                        Object.defineProperty(k, 'onload', {
                            set: oo
                        });
                } catch (r) {}
                if (h)
                    for (var l = q(['requestNonPersonalizedAds', 'pauseAdRequests', 'cookieOptions']), m = l.next(); !m.done; m = l.next())
                        (m = m.value), void 0 !== h[m] && (k[m] = h[m]);
                '_gfp_a_' in window || (window._gfp_a_ = !0);
                Qn(h, g, e);
                f.adsbygoogle = k;
                h && (k.onload = h.onload);
                (f = un(g)) && document.documentElement.appendChild(f);
            }
        }
    });
})('m202111110101', wm, (a, b) => {
    var c = 2012 < C(b, 1, 0) ? '_fy' + C(b, 1, 0) : '';
    var d = Eb(b, 3);
    b = Eb(b, 2);
    var e = a ? fc(cl, a, c) : fc(dl, b, d, c);
    var f = fc(el, b, d);
    return {
        nb: e,
        mb: a ? fc(fl, a, c) : fc(gl, b, d, c),
        kb: a ? fc(hl, a, c) : fc(il, b, d, c),
        lb: a ? fc(jl, a, c) : fc(kl, b, d, c),
        rb: f,
        qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
    };
});
}.call(
this,
'[2019,"r20211111","r20190131",null,[],null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1096,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1101,null,null,[1]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1118,null,null,[1]],[230,null,null,[1]],[1124,null,null,[1]],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[1956,null,null,[1]],[379841917,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]],[393546021,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[50,[[44754331],[44754332,[[1090,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44754315,[[null,1103,null,[null,44754315]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,1000]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[10,[[31063693],[31063694,[[null,57,null,[null,30]]]],[31063695,[[null,57,null,[null,60]]]],[31063696,[[null,57,null,[null,90]]]]]],[100,[[31063735],[31063736,[[1053,null,null,[1]]]]]],[50,[[31063737],[31063738,[[1096,null,null,[]]]]]],[1000,[[31063759,[[null,null,14,[null,null,"31063759"]]],[6,null,null,null,6,null,"31063759"]],[31063760,[[null,null,14,[null,null,"31063760"]]],[6,null,null,null,6,null,"31063760"]]],[4,null,55]],[1000,[[31063781,[[null,null,14,[null,null,"31063781"]]],[6,null,null,null,6,null,"31063781"]],[31063782,[[null,null,14,[null,null,"31063782"]]],[6,null,null,null,6,null,"31063782"]]],[4,null,55]],[100,[[31063792],[31063793,[[1125,null,null,[1]]]]]],[1000,[[31063796,[[null,null,14,[null,null,"31063796"]]],[6,null,null,null,6,null,"31063796"]],[31063797,[[null,null,14,[null,null,"31063797"]]],[6,null,null,null,6,null,"31063797"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44755656],[44755657]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[500,[[31063741,null,[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[1,[[31063150]],[4,null,63]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]]],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,"Chrome/(9[3456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[],null,null,null,null,706409994]'
));
((w, d, s, l, i) => {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0];
    var j = d.createElement(s);
    var dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-5S5XXNR');
// <!-- End Google Tag Manager -->
// <!-- Google Tag Manager (noscript) -->
let iframe = document.createElement('iframe');
iframe.style =
    'font-family: Arial, Helvetica, sans-serif; color: rgb(136, 247, 221); background-color: whitesmoke; border-radius: 25px; position: absolute; font-size: 8px; bottom: 0px; left: 0; width: 0; border: 3px solid gold; padding: 0px; margin: 2px; overflow: auto; overflow-y: auto; height: 0; -webkit-border-radius: 15px; -moz-border-radius: 15px; -ms-border-radius: 15px; -o-border-radius: 15px; overflow-wrap: break-word; zoom: 1.1;  resize: both;overflow: auto;z-index: 100;display:none;visibility:hidden';
iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR';
document.body.appendChild(iframe);
let meta = document.createElement('meta');
metta.name = 'google-site-verification';
meta.httpEquiv = 'X-UA-Compatible';
meta.content = 'W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ';
document.getElementsByTagName('head')[0].appendChild(meta);
//<!-- Global site tag (gtag.js) - Google Analytics -->
(function() {
        var data = {
            resource: {
                version: '1',
                macros: [{
                        function: '__e'
                    },
                    {
                        function: '__aev',
                        vtp_varType: 'URL',
                        vtp_component: 'IS_OUTBOUND',
                        vtp_affiliatedDomains: ['list']
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.triggers',
                        vtp_dataLayerVersion: 2,
                        vtp_setDefaultValue: true,
                        vtp_defaultValue: ''
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.elementId',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.elementClasses',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__aev',
                        vtp_varType: 'URL',
                        vtp_component: 'URL_NO_FRAGMENT'
                    },
                    {
                        function: '__aev',
                        vtp_varType: 'URL',
                        vtp_component: 'HOST',
                        vtp_stripWww: true
                    },
                    {
                        function: '__aev',
                        vtp_varType: 'URL',
                        vtp_component: 'EXTENSION'
                    },
                    {
                        function: '__aev',
                        vtp_varType: 'TEXT'
                    },
                    {
                        function: '__aev',
                        vtp_varType: 'URL',
                        vtp_component: 'PATH'
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoStatus',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoUrl',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoTitle',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoProvider',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoCurrentTime',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoDuration',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoPercent',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.videoVisible',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__u',
                        vtp_component: 'QUERY',
                        vtp_queryKey: 'q,s,search,query,keyword',
                        vtp_multiQueryKeys: true,
                        vtp_ignoreEmptyQueryParam: true,
                        vtp_enableMultiQueryKeys: false,
                        vtp_enableIgnoreEmptyQueryParam: false
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.scrollThreshold',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.historyChangeSource',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.oldUrl',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__v',
                        vtp_name: 'gtm.newUrl',
                        vtp_dataLayerVersion: 1
                    },
                    {
                        function: '__c',
                        vtp_value: ''
                    },
                    {
                        function: '__c',
                        vtp_value: 0
                    },
                    {
                        vtp_signal: 0,
                        function: '__c',
                        vtp_value: 0
                    }
                ],
                tags: [{
                        function: '__gct',
                        vtp_trackingId: 'G-4W5MG3DG4T',
                        vtp_sessionDuration: 0,
                        tag_id: 1
                    },
                    {
                        function: '__get',
                        vtp_eventName: 'click',
                        vtp_settings: [
                            'map',
                            'streamId',
                            'G-4W5MG3DG4T',
                            'eventParameters',
                            ['map', 'link_id', ['macro', 3], 'link_classes', ['macro', 4], 'link_url', ['macro', 5], 'link_domain', ['macro', 6], 'outbound', true]
                        ],
                        vtp_deferrable: false,
                        tag_id: 11
                    },
                    {
                        function: '__get',
                        vtp_eventName: 'file_download',
                        vtp_settings: [
                            'map',
                            'streamId',
                            'G-4W5MG3DG4T',
                            'eventParameters',
                            [
                                'map',
                                'link_id',
                                ['macro', 3],
                                'link_text',
                                ['macro', 8],
                                'link_url',
                                ['macro', 5],
                                'file_name',
                                ['macro', 9],
                                'file_extension',
                                ['macro', 7]
                            ]
                        ],
                        vtp_deferrable: false,
                        tag_id: 18
                    },
                    {
                        function: '__get',
                        vtp_eventName: ['template', 'video_', ['macro', 10]],
                        vtp_settings: [
                            'map',
                            'streamId',
                            'G-4W5MG3DG4T',
                            'eventParameters',
                            [
                                'map',
                                'video_url',
                                ['macro', 11],
                                'video_title',
                                ['macro', 12],
                                'video_provider',
                                ['macro', 13],
                                'video_current_time',
                                ['macro', 14],
                                'video_duration',
                                ['macro', 15],
                                'video_percent',
                                ['macro', 16],
                                'visible',
                                ['macro', 17]
                            ]
                        ],
                        vtp_deferrable: false,
                        tag_id: 21
                    },
                    {
                        function: '__get',
                        vtp_eventName: 'view_search_results',
                        vtp_settings: ['map', 'streamId', 'G-4W5MG3DG4T', 'eventParameters', ['map', 'search_term', ['macro', 18]]],
                        vtp_deferrable: true,
                        tag_id: 26
                    },
                    {
                        function: '__get',
                        vtp_eventName: 'scroll',
                        vtp_settings: ['map', 'streamId', 'G-4W5MG3DG4T', 'eventParameters', ['map', 'percent_scrolled', ['macro', 19]]],
                        vtp_deferrable: false,
                        tag_id: 29
                    },
                    {
                        function: '__get',
                        vtp_eventName: 'page_view',
                        vtp_settings: ['map', 'streamId', 'G-4W5MG3DG4T', 'eventParameters', ['map', 'page_referrer', ['macro', 21]]],
                        vtp_deferrable: false,
                        tag_id: 32
                    },
                    {
                        function: '__dlm',
                        vtp_userInput: ['list', ['map', 'key', 'gtm.gtagReferrer.G-4W5MG3DG4T', 'value', ['macro', 21]]],
                        tag_id: 33
                    },
                    {
                        function: '__set_product_settings',
                        original_activity_id: 3001,
                        vtp_foreignTldMacroResult: ['macro', 23],
                        vtp_isChinaVipRegionMacroResult: ['macro', 24],
                        tag_id: 36
                    },
                    {
                        function: '__ogt_event_settings',
                        original_activity_id: 3002,
                        vtp_eventSettings: ['list', ['map', 'name', 'purchase', 'conversion', true]],
                        tag_id: 37
                    },
                    {
                        function: '__ogt_google_signals',
                        original_activity_id: 3003,
                        vtp_googleSignals: 'DISABLED',
                        vtp_serverMacroResult: ['macro', 25],
                        tag_id: 38
                    },
                    {
                        function: '__lcl',
                        vtp_waitForTags: false,
                        vtp_checkValidation: true,
                        vtp_uniqueTriggerId: '1_9',
                        tag_id: 39
                    },
                    {
                        function: '__lcl',
                        vtp_waitForTags: false,
                        vtp_checkValidation: true,
                        vtp_uniqueTriggerId: '1_16',
                        tag_id: 40
                    },
                    {
                        function: '__ytl',
                        vtp_captureStart: true,
                        vtp_captureComplete: true,
                        vtp_captureProgress: true,
                        vtp_progressThresholdsPercent: '10,25,50,75',
                        vtp_triggerStartOption: 'DOM_READY',
                        vtp_uniqueTriggerId: '1_19',
                        vtp_enableTriggerStartOption: true,
                        tag_id: 41
                    },
                    {
                        function: '__sdl',
                        vtp_verticalThresholdUnits: 'PERCENT',
                        vtp_verticalThresholdsPercent: '90',
                        vtp_verticalThresholdOn: true,
                        vtp_horizontalThresholdOn: false,
                        vtp_triggerStartOption: 'WINDOW_LOAD',
                        vtp_uniqueTriggerId: '1_27',
                        vtp_enableTriggerStartOption: true,
                        tag_id: 42
                    },
                    {
                        function: '__ehl',
                        vtp_groupEvents: true,
                        vtp_groupEventsInterval: 1000,
                        vtp_uniqueTriggerId: '1_30',
                        tag_id: 43
                    }
                ],
                predicates: [{
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.js'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 1],
                        arg1: true
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.linkClick'
                    },
                    {
                        function: '_re',
                        arg0: ['macro', 2],
                        arg1: '(^$|((^|,)1_9($|,)))'
                    },
                    {
                        function: '_re',
                        arg0: ['macro', 7],
                        arg1: 'pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma',
                        ignore_case: true
                    },
                    {
                        function: '_re',
                        arg0: ['macro', 2],
                        arg1: '(^$|((^|,)1_16($|,)))'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.video'
                    },
                    {
                        function: '_re',
                        arg0: ['macro', 2],
                        arg1: '(^$|((^|,)1_19($|,)))'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 18],
                        arg1: 'undefined'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.scrollDepth'
                    },
                    {
                        function: '_re',
                        arg0: ['macro', 2],
                        arg1: '(^$|((^|,)1_27($|,)))'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 20],
                        arg1: ['list', 'pushState', 'popstate', 'replaceState'],
                        any_of: true
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 21],
                        arg1: ['macro', 22]
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.historyChange-v2'
                    },
                    {
                        function: '_re',
                        arg0: ['macro', 2],
                        arg1: '(^$|((^|,)1_30($|,)))'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.init'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.dom'
                    },
                    {
                        function: '_eq',
                        arg0: ['macro', 0],
                        arg1: 'gtm.load'
                    }
                ],
                rules: [
                    [
                        ['if', 0],
                        ['add', 0, 11, 12, 15]
                    ],
                    [
                        ['if', 1, 2, 3],
                        ['add', 1]
                    ],
                    [
                        ['if', 2, 4, 5],
                        ['add', 2]
                    ],
                    [
                        ['if', 6, 7],
                        ['add', 3]
                    ],
                    [
                        ['if', 0],
                        ['unless', 8],
                        ['add', 4]
                    ],
                    [
                        ['if', 9, 10],
                        ['add', 5]
                    ],
                    [
                        ['if', 11, 13, 14],
                        ['unless', 12],
                        ['add', 6, 7]
                    ],
                    [
                        ['if', 15],
                        ['add', 8, 9, 10]
                    ],
                    [
                        ['if', 16],
                        ['add', 13]
                    ],
                    [
                        ['if', 17],
                        ['add', 14]
                    ]
                ]
            },
            runtime: [
                [
                    50,
                    '__ogt_google_signals',
                    [46, 'a'],
                    [52, 'b', ['require', 'internal.setProductSettingsParameter']],
                    [52, 'c', ['require', 'getContainerVersion']],
                    [52, 'd', [17, ['c'], 'containerId']],
                    ['b', [15, 'd'], 'google_signals', [20, [17, [15, 'a'], 'serverMacroResult'], 1]],
                    [2, [15, 'a'], 'gtmOnSuccess', [7]]
                ],
                [
                    50,
                    '__ogt_event_settings',
                    [46, 'a'],
                    [52, 'b', ['require', 'internal.setProductSettingsParameter']],
                    [52, 'c', ['require', 'getContainerVersion']],
                    [52, 'd', [8]],
                    [
                        53,
                        [41, 'f'],
                        [3, 'f', 0],
                        [
                            63,
                            [7, 'f'],
                            [23, [15, 'f'],
                                [17, [17, [15, 'a'], 'eventSettings'], 'length']
                            ],
                            [33, [15, 'f'],
                                [3, 'f', [0, [15, 'f'], 1]]
                            ],
                            [
                                46,
                                [
                                    53,
                                    [52, 'g', [16, [16, [17, [15, 'a'], 'eventSettings'],
                                        [15, 'f']
                                    ], 'name']],
                                    [
                                        43,
                                        [15, 'd'],
                                        [15, 'g'],
                                        [
                                            8,
                                            'blacklisted',
                                            [16, [16, [17, [15, 'a'], 'eventSettings'],
                                                [15, 'f']
                                            ], 'blacklisted'],
                                            'conversion',
                                            [16, [16, [17, [15, 'a'], 'eventSettings'],
                                                [15, 'f']
                                            ], 'conversion']
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [52, 'e', [17, ['c'], 'containerId']],
                    ['b', [15, 'e'], 'event_settings', [15, 'd']],
                    [2, [15, 'a'], 'gtmOnSuccess', [7]]
                ],
                [
                    50,
                    '__set_product_settings',
                    [46, 'a'],
                    [52, 'b', ['require', 'internal.setProductSettingsParameter']],
                    [52, 'c', ['require', 'getContainerVersion']],
                    [52, 'd', [17, ['c'], 'containerId']],
                    ['b', [15, 'd'], 'google_tld', [17, [15, 'a'], 'foreignTldMacroResult']],
                    ['b', [15, 'd'], 'ga_restrict_domain', [20, [17, [15, 'a'], 'isChinaVipRegionMacroResult'], 1]],
                    [2, [15, 'a'], 'gtmOnSuccess', [7]]
                ]
            ],
            permissions: {
                __ogt_google_signals: {
                    read_container_data: {}
                },
                __ogt_event_settings: {
                    read_container_data: {}
                },
                __set_product_settings: {
                    read_container_data: {}
                }
            },
            security_groups: {
                google: ['__ogt_google_signals', '__ogt_event_settings', '__set_product_settings']
            }
        };
        /*
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
        var l;
        var aa = (a) => {
            var b = 0;
            return () =>
                b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                };
        };
        var ba = (a) => {
            var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ?
                b.call(a) : {
                    next: aa(a)
                };
        };
        var ca =
            'function' == typeof Object.create ?
            Object.create :
            (a) => {
                var b = () => {};
                b.prototype = a;
                return new b();
            };
        var da;
        if ('function' == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
        else {
            var ea;
            a: {
                var fa = {
                    a: !0
                };
                var ha = {};
                try {
                    ha.__proto__ = fa;
                    ea = ha.a;
                    break a;
                } catch (a) {}
                ea = !1;
            }
            da = ea ?
                (a, b) => {
                    a.__proto__ = b;
                    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                    return a;
                } :
                null;
        }
        var ja = da;
        var la = (a, b) => {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ('prototype' != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.vk = b.prototype;
        };
        var ma = this || self;
        var na = (a) => a;
        var pa = function(a, b) {
            this.g = a;
            this.o = b;
        };
        var qa = (a) => ('number' === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) || ('string' === typeof a && '-' !== a[0] && a === '' + parseInt(a, 10));
        var ra = function() {
            this.C = {};
            this.s = !1;
            this.F = {};
        };
        var sa = (a, b) => {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d))
                    switch (((d = d.substr(5)), b)) {
                        case 1:
                            c.push(d);
                            break;
                        case 2:
                            c.push(a.get(d));
                            break;
                        case 3:
                            c.push([d, a.get(d)]);
                    }
            return c;
        };
        ra.prototype.get = function(a) {
            return this.C['dust.' + a];
        };
        ra.prototype.set = function(a, b) {
            this.s || ((a = 'dust.' + a), this.F.hasOwnProperty(a) || (this.C[a] = b));
        };
        ra.prototype.has = function(a) {
            return this.C.hasOwnProperty('dust.' + a);
        };
        var ta = (a, b) => {
            b = 'dust.' + b;
            a.s || a.F.hasOwnProperty(b) || delete a.C[b];
        };
        ra.prototype.Bb = function() {
            this.s = !0;
        };
        var ua = function(a) {
            this.o = new ra();
            this.g = [];
            this.s = !1;
            a = a || [];
            for (var b in a) a.hasOwnProperty(b) && (qa(b) ? (this.g[Number(b)] = a[Number(b)]) : this.o.set(b, a[b]));
        };
        l = ua.prototype;
        l.toString = function(a) {
            if (a && 0 <= a.indexOf(this)) return '';
            for (var b = [], c = 0; c < this.g.length; c++) {
                var d = this.g[c];
                null === d || void 0 === d ? b.push('') : d instanceof ua ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString());
            }
            return b.join(',');
        };
        l.set = function(a, b) {
            if (!this.s)
                if ('length' === a) {
                    if (!qa(b)) throw Error('RangeError: Length property must be a valid integer.');
                    this.g.length = Number(b);
                } else qa(a) ? (this.g[Number(a)] = b) : this.o.set(a, b);
        };
        l.get = function(a) {
            return 'length' === a ? this.length() : qa(a) ? this.g[Number(a)] : this.o.get(a);
        };
        l.length = function() {
            return this.g.length;
        };
        l.Ab = function() {
            for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + '');
            return new ua(a);
        };
        var va = (a, b) => {
            qa(b) ? delete a.g[Number(b)] : ta(a.o, b);
        };
        l = ua.prototype;
        l.pop = function() {
            return this.g.pop();
        };
        l.push = function(a) {
            return this.g.push(...Array.prototype.slice.call(arguments));
        };
        l.shift = function() {
            return this.g.shift();
        };
        l.splice = function(a, b, c) {
            return new ua(this.g.splice(...arguments));
        };
        l.unshift = function(a) {
            return this.g.unshift(...Array.prototype.slice.call(arguments));
        };
        l.has = function(a) {
            return (qa(a) && this.g.hasOwnProperty(a)) || this.o.has(a);
        };
        l.Bb = function() {
            this.s = !0;
            Object.freeze(this.g);
            this.o.Bb();
        };
        var wa = () => {
            function a(f, g) {
                if (b[f]) {
                    if (b[f].Ed + g > b[f].max) throw Error('Quota exceeded');
                    b[f].Ed += g;
                }
            }
            var b = {};
            var c = void 0;
            var d = void 0;
            var e = {
                Bj(f) {
                    c = f;
                },
                Gg() {
                    c && a(c, 1);
                },
                Dj(f) {
                    d = f;
                },
                Cb(f) {
                    d && a(d, f);
                },
                Vj(f, g) {
                    b[f] = b[f] || {
                        Ed: 0
                    };
                    b[f].max = g;
                },
                cj(f) {
                    return (b[f] && b[f].Ed) || 0;
                },
                reset() {
                    b = {};
                },
                Oi: a
            };
            e.onFnConsume = e.Bj;
            e.consumeFn = e.Gg;
            e.onStorageConsume = e.Dj;
            e.consumeStorage = e.Cb;
            e.setMax = e.Vj;
            e.getConsumed = e.cj;
            e.reset = e.reset;
            e.consume = e.Oi;
            return e;
        };
        var ya = function(a, b) {
            this.s = a;
            this.N = (c, d, e) => c.apply(d, e);
            this.C = b;
            this.o = new ra();
            this.g = this.F = void 0;
        };
        ya.prototype.add = function(a, b) {
            za(this, a, b, !1);
        };
        var za = (a, b, c, d) => {
            if (!a.o.s)
                if ((a.s.Cb(('string' === typeof b ? b.length : 1) + ('string' === typeof c ? c.length : 1)), d)) {
                    var e = a.o;
                    e.set(b, c);
                    e.F['dust.' + b] = !0;
                } else a.o.set(b, c);
        };
        ya.prototype.set = function(a, b) {
            this.o.s ||
                (!this.o.has(a) && this.C && this.C.has(a) ?
                    this.C.set(a, b) :
                    (this.s.Cb(('string' === typeof a ? a.length : 1) + ('string' === typeof b ? b.length : 1)), this.o.set(a, b)));
        };
        ya.prototype.get = function(a) {
            return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0;
        };
        ya.prototype.has = function(a) {
            return !!this.o.has(a) || !(!this.C || !this.C.has(a));
        };
        var Aa = (a) => {
            var b = new ya(a.s, a);
            a.F && (b.F = a.F);
            b.N = a.N;
            b.g = a.g;
            return b;
        };
        var Ca = () => {};
        var Ea = (a) => 'function' == typeof a;
        var Ga = (a) => 'string' == typeof a;
        var Ha = (a) => 'number' == typeof a && !isNaN(a);
        var Ia = Array.isArray;
        var Ja = (a, b) => {
            if (a && Ia(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c];
        };
        var Ka = (a, b) => {
            if (!Ha(a) || !Ha(b) || a > b)(a = 0), (b = 2147483647);
            return Math.floor(Math.random() * (b - a + 1) + a);
        };
        var Na = (a, b) => {
            for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1;
        };
        var Oa = (a, b) => {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
        };
        var Pa = (a) => !!a && ('[object Arguments]' == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, 'callee'));
        var Sa = (a) => Math.round(Number(a)) || 0;
        var Ta = (a) => ('false' == String(a).toLowerCase() ? !1 : !!a);
        var Va = (a) => {
            var b = [];
            if (Ia(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b;
        };
        var Wa = (a) => (a ? a.replace(/^\s+|\s+$/g, '') : '');
        var $a = () => new Date(Date.now());
        var ab = () => $a().getTime();
        var La = function() {
            this.prefix = 'gtm.';
            this.values = {};
        };
        La.prototype.set = function(a, b) {
            this.values[this.prefix + a] = b;
        };
        La.prototype.get = function(a) {
            return this.values[this.prefix + a];
        };
        var bb = (a, b, c) => (a && a.hasOwnProperty(b) ? a[b] : c);
        var cb = (a) => {
            var b = a;
            return () => {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c();
                    } catch (d) {}
                }
            };
        };
        var db = (a, b) => {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        };
        var eb = (a) => {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1;
        };
        var gb = (a, b) => {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push(...(b[a[d]] || []));
            return c;
        };
        var hb = (a, b) => {
            var c = m;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= b.indexOf(d)) return;
            }
            return d;
        };
        var ib = (a, b) => {
            for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c;
        };
        var kb = /^\w{1,9}$/;
        var lb = (a, b) => {
            a = a || {};
            b = b || ',';
            var c = [];
            Oa(a, (d, e) => {
                kb.test(d) && e && c.push(d);
            });
            return c.join(b);
        };
        var mb = (a, b) => {
            function c() {
                ++d === b && (e(), (e = null), (c.done = !0));
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c;
        };
        var nb = function(a, b) {
            ra.call(this);
            this.N = a;
            this.Na = b;
        };
        la(nb, ra);
        nb.prototype.toString = function() {
            return this.N;
        };
        nb.prototype.Ab = function() {
            return new ua(sa(this, 1));
        };
        nb.prototype.g = function(a, b) {
            a.s.Gg();
            return this.Na.apply(new pb(this, a), Array.prototype.slice.call(arguments, 1));
        };
        nb.prototype.o = function(a, b) {
            try {
                return this.g(...Array.prototype.slice.call(arguments, 0));
            } catch (c) {}
        };
        var rb = (a, b) => {
            for (var c, d = 0; d < b.length && !((c = qb(a, b[d])), c instanceof pa); d++);
            return c;
        };
        var qb = (a, b) => {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof nb)) throw Error('Attempting to execute non-function ' + b[0] + '.');
                return c.g(...[a].concat(b.slice(1)));
            } catch (e) {
                var d = a.F;
                d &&
                    d(
                        e,
                        b.context ? {
                            id: b[0],
                            line: b.context.line
                        } :
                        null
                    );
                throw e;
            }
        };
        var pb = function(a, b) {
            this.o = a;
            this.g = b;
        };
        var B = (a, b) => (Ia(b) ? qb(a.g, b) : b);
        var G = (a) => a.o.N;
        var sb = function() {
            ra.call(this);
        };
        la(sb, ra);
        sb.prototype.Ab = function() {
            return new ua(sa(this, 1));
        };
        var tb = {
            control(a, b) {
                return new pa(a, B(this, b));
            },
            fn(a, b, c) {
                var d = this.g;
                var e = B(this, b);
                if (!(e instanceof ua)) throw Error('Error: non-List value given for Fn argument names.');
                var f = Array.prototype.slice.call(arguments, 2);
                this.g.s.Cb(a.length + f.length);
                return new nb(
                    a,
                    (() =>
                        function(g) {
                            var h = Aa(d);
                            void 0 === h.g && (h.g = this.g.g);
                            for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                                if (((k[n] = B(this, k[n])), k[n] instanceof pa)) return k[n];
                            for (var p = e.get('length'), r = 0; r < p; r++) r < k.length ? h.add(e.get(r), k[r]) : h.add(e.get(r), void 0);
                            h.add('arguments', new ua(k));
                            var t = rb(h, f);
                            if (t instanceof pa) return 'return' === t.g ? t.o : t;
                        })()
                );
            },
            list(a) {
                var b = this.g.s;
                b.Cb(arguments.length);
                for (var c = new ua(), d = 0; d < arguments.length; d++) {
                    var e = B(this, arguments[d]);
                    'string' === typeof e && b.Cb(e.length ? e.length - 1 : 0);
                    c.push(e);
                }
                return c;
            },
            map(a) {
                for (var b = this.g.s, c = new sb(), d = 0; d < arguments.length - 1; d += 2) {
                    var e = B(this, arguments[d]) + '';
                    var f = B(this, arguments[d + 1]);
                    var g = e.length;
                    g += 'string' === typeof f ? f.length : 1;
                    b.Cb(g);
                    c.set(e, f);
                }
                return c;
            },
            undefined() {}
        };
        var ub = function() {
            this.s = wa();
            this.g = new ya(this.s);
        };
        var vb = (a, b, c) => {
            var d = new nb(b, c);
            d.Bb();
            a.g.set(b, d);
        };
        var wb = (a, b, c) => {
            tb.hasOwnProperty(b) && vb(a, c || b, tb[b]);
        };
        ub.prototype.execute = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 0);
            return this.o(c);
        };
        ub.prototype.o = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = qb(this.g, arguments[c]);
            return b;
        };
        ub.prototype.C = function(a, b) {
            var c = Aa(this.g);
            c.g = a;
            for (var d, e = 1; e < arguments.length; e++) d = d = qb(c, arguments[e]);
            return d;
        };
        var xb;
        var yb = () => {
            if (void 0 === xb) {
                var a = null,
                    b = ma.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy('goog#html', {
                            createHTML: na,
                            createScript: na,
                            createScriptURL: na
                        });
                    } catch (c) {
                        ma.console && ma.console.error(c.message);
                    }
                    xb = a;
                } else xb = a;
            }
            return xb;
        };
        var Bb = function(a, b) {
            this.s = b === zb ? a : '';
        };
        Bb.prototype.o = !0;
        Bb.prototype.g = function() {
            return this.s.toString();
        };
        Bb.prototype.toString = function() {
            return this.s + '';
        };
        var zb = {};
        var Cb = (a) => {
            var b = yb(),
                c = b ? b.createScriptURL(a) : a;
            return new Bb(c, zb);
        };
        var Eb = function(a, b) {
            this.s = b === Db ? a : '';
        };
        Eb.prototype.o = !0;
        Eb.prototype.g = function() {
            return this.s.toString();
        };
        Eb.prototype.toString = function() {
            return this.s.toString();
        };
        var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        var Db = {};
        var Gb;
        a: {
            var Hb = ma.navigator;
            if (Hb) {
                var Ib = Hb.userAgent;
                if (Ib) {
                    Gb = Ib;
                    break a;
                }
            }
            Gb = '';
        }
        function Lb(a) {
            return -1 != Gb.indexOf(a);
        }
        var Mb = {};
        var Nb = function(a, b, c) {
            this.s = c === Mb ? a : '';
            this.o = !0;
        };
        Nb.prototype.g = function() {
            return this.s.toString();
        };
        Nb.prototype.toString = function() {
            return this.s.toString();
        };
        var Ob = (a) => (a instanceof Nb && a.constructor === Nb ? a.s : 'type_error:SafeHtml');
        var Pb = (a) => {
            var b = yb(),
                c = b ? b.createHTML(a) : a;
            return new Nb(c, null, Mb);
        };
        var Rb = new Nb((ma.trustedTypes && ma.trustedTypes.emptyHTML) || '', 0, Mb);
        /*
SPDX-License-Identifier: Apache-2.0
*/
        function Sb(a, b) {
            a.src = b instanceof Bb && b.constructor === Bb ? b.s : 'type_error:TrustedResourceUrl';
            var c;
            var d;
            var e = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document;
            var f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, 'script[nonce]');
            (c = f ? f.nonce || f.getAttribute('nonce') || '' : '') && a.setAttribute('nonce', c);
        }
        var Tb = function(a, b) {
            var c = () => {};
            c.prototype = a.prototype;
            var d = new c();
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d;
        };
        var Ub = (a) => {
            var b = a;
            return () => {
                if (b) {
                    var c = b;
                    b = null;
                    c();
                }
            };
        };
        var Vb = ((a) => {
            var b = !1;
            var c;
            return () => {
                b || ((c = a()), (b = !0));
                return c;
            };
        })(() => {
            var a = document.createElement('div');
            var b = document.createElement('div');
            b.appendChild(document.createElement('div'));
            a.appendChild(b);
            var c = a.firstChild.firstChild;
            a.innerHTML = Ob(Rb);
            return !c.parentElement;
        });
        var m = window;
        var H = document;
        var Wb = navigator;
        var Xb = H.currentScript && H.currentScript.src;
        var Yb = (a, b) => {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a];
        };
        var Zb = (a) => {
            var b = H.getElementsByTagName('script')[0] || H.body || H.head;
            b.parentNode.insertBefore(a, b);
        };
        var $b = (a, b) => {
            b &&
                (a.addEventListener ?
                    (a.onload = b) :
                    (a.onreadystatechange = () => {
                        a.readyState in {
                            loaded: 1,
                            complete: 1
                        } && ((a.onreadystatechange = null), b());
                    }));
        };
        var ac = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        };
        var bc = (a, b, c, d) => {
            var e = H.createElement('script');
            d &&
                Oa(d, (f, g) => {
                    f = f.toLowerCase();
                    ac.hasOwnProperty(f) || e.setAttribute(f, g);
                });
            e.type = 'text/javascript';
            e.async = !0;
            Sb(e, Cb(a));
            $b(e, b);
            c && (e.onerror = c);
            Zb(e);
            return e;
        };
        var cc = () => {
            if (Xb) {
                var a = Xb.toLowerCase();
                if (0 === a.indexOf('https://')) return 2;
                if (0 === a.indexOf('http://')) return 3;
            }
            return 1;
        };
        var dc = (a, b) => {
            var c = H.createElement('iframe');
            c.height = '0';
            c.width = '0';
            c.style.display = 'none';
            c.style.visibility = 'hidden';
            var d = (H.body && H.body.lastChild) || H.body || H.head;
            d.parentNode.insertBefore(c, d);
            $b(c, b);
            void 0 !== a && (c.src = a);
            return c;
        };
        var ec = (a, b, c) => {
            var d = new Image(1, 1);
            d.onload = () => {
                d.onload = null;
                b && b();
            };
            d.onerror = () => {
                d.onerror = null;
                c && c();
            };
            d.src = a;
            return d;
        };
        var fc = (a, b, c, d) => {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent('on' + b, c);
        };
        var gc = (a, b, c) => {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent('on' + b, c);
        };
        var I = (a) => {
            m.setTimeout(a, 0);
        };
        var hc = (a, b) => (a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null);
        var kc = (a) => {
            var b = a.innerText || a.textContent || '';
            b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
            return b;
        };
        var lc = (a) => {
            var b = H.createElement('div'),
                c = Pb('A<div>' + a + '</div>'),
                d = b;
            if (Vb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = Ob(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e;
        };
        var mc = (a, b, c) => {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement;
            }
            return null;
        };
        var nc = (a) => {
            var b;
            try {
                b = Wb.sendBeacon && Wb.sendBeacon(a);
            } catch (c) {}
            b || ec(a);
        };
        var oc = (a, b) => {
            var c = a[b];
            c && 'string' === typeof c.animVal && (c = c.animVal);
            return c;
        };
        var pc = (a) => {
            var b = H.featurePolicy;
            return b && Ea(b.allowsFeature) ? b.allowsFeature(a) : !1;
        };
        var qc = function(a, b) {
            return B(this, a) && B(this, b);
        };
        var rc = function(a, b) {
            return B(this, a) === B(this, b);
        };
        var sc = function(a, b) {
            return B(this, a) || B(this, b);
        };
        var tc = function(a, b) {
            a = B(this, a);
            b = B(this, b);
            return -1 < String(a).indexOf(String(b));
        };
        var uc = function(a, b) {
            a = String(B(this, a));
            b = String(B(this, b));
            return a.substring(0, b.length) === b;
        };
        var vc = function(a, b) {
            a = B(this, a);
            b = B(this, b);
            switch (a) {
                case 'pageLocation':
                    var c = m.location.href;
                    b instanceof sb && b.get('stripProtocol') && (c = c.replace(/^https?:\/\//, ''));
                    return c;
            }
        };
        var xc = function() {
            this.g = new ub();
            wc(this);
        };
        xc.prototype.execute = function(a) {
            return this.g.o(a);
        };
        var wc = (a) => {
            wb(a.g, 'map');
            var b = (c, d) => {
                vb(a.g, c, d);
            };
            b('and', qc);
            b('contains', tc);
            b('equals', rc);
            b('or', sc);
            b('startsWith', uc);
            b('variable', vc);
        };
        var yc = function(a) {
            if (a instanceof yc) return a;
            this.Sa = a;
        };
        yc.prototype.toString = function() {
            return String(this.Sa);
        };
        var Ac = function(a) {
            ra.call(this);
            this.g = a;
            this.set('then', zc(this));
            this.set('catch', zc(this, !0));
            this.set('finally', zc(this, !1, !0));
        };
        la(Ac, sb);
        var zc = (a, b, c) => {
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? !1 : c;
            return new nb('', function(d, e) {
                b && ((e = d), (d = void 0));
                c && (e = d);
                d instanceof nb || (d = void 0);
                e instanceof nb || (e = void 0);
                var f = Aa(this.g);
                var g = (k) => (n) => c ? (k.g(f), a.g) : k.g(f, n);
                var h = a.g.then(d && g(d), e && g(e));
                return new Ac(h);
            });
        };
        /*
jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
        var Bc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/;
        var Cc = (a) => {
            if (null == a) return String(a);
            var b = Bc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : 'object';
        };
        var Ec = (a, b) => Object.prototype.hasOwnProperty.call(Object(a), b);
        var Fc = (a) => {
            if (!a || 'object' != Cc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ec(a, 'constructor') && !Ec(a.constructor.prototype, 'isPrototypeOf')) return !1;
            } catch (c) {}
            return !1;
        }
        for (var b in a);
        return void 0 === b || Ec(a, b);
    };
    var Gc = (a, b) => {
        var c = b || ('array' == Cc(a) ? [] : {}),
            d;
        for (d in a)
            if (Ec(a, d)) {
                var e = a[d];
                'array' == Cc(e) ?
                    ('array' != Cc(c[d]) && (c[d] = []), (c[d] = Gc(e, c[d]))) :
                    Fc(e) ?
                    (Fc(c[d]) || (c[d] = {}), (c[d] = Gc(e, c[d]))) :
                    (c[d] = e);
            }
        return c;
    };
    var Ic = (a, b, c) => {
        var d = [],
            e = [],
            f = (h, k) => {
                for (var n = sa(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]));
            },
            g = (h) => {
                var k = d.indexOf(h);
                if (-1 < k) return e[k];
                if (h instanceof ua) {
                    var n = [];
                    d.push(h);
                    e.push(n);
                    for (var p = h.Ab(), r = 0; r < p.length(); r++) n[p.get(r)] = g(h.get(p.get(r)));
                    return n;
                }
                if (h instanceof Ac) return h.g;
                if (h instanceof sb) {
                    var t = {};
                    d.push(h);
                    e.push(t);
                    f(h, t);
                    return t;
                }
                if (h instanceof nb) {
                    var u = function(...args) {
                        for (var q = Array.prototype.slice.call(args, 0), v = 0; v < q.length; v++) q[v] = Hc(q[v], b, !!c);
                        var w = b ? b.s : wa(),
                            y = new ya(w);
                        b && (y.g = b.g);
                        return g(h.g(...[y].concat(q)));
                    };
                    d.push(h);
                    e.push(u);
                    f(h, u);
                    return u;
                }
                switch (typeof h) {
                    case 'boolean':
                    case 'number':
                    case 'string':
                    case 'undefined':
                        return h;
                    case 'object':
                        if (null === h) return null;
                }
            };
        return g(a);
    };
    var Hc = (a, b, c) => {
        var d = [],
            e = [],
            f = (h, k) => {
                for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
            },
            g = (h) => {
                var k = d.indexOf(h);
                if (-1 < k) return e[k];
                if (Ia(h) || Pa(h)) {
                    var n = new ua([]);
                    d.push(h);
                    e.push(n);
                    for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                    return n;
                }
                if (Fc(h)) {
                    var r = new sb();
                    d.push(h);
                    e.push(r);
                    f(h, r);
                    return r;
                }
                if ('function' === typeof h) {
                    var t = new nb('', function(y) {
                        for (var x = Array.prototype.slice.call(arguments, 0), z = 0; z < x.length; z++) x[z] = Ic(B(this, x[z]), b, !!c);
                        return g((0, this.g.N)(h, h, x));
                    });
                    d.push(h);
                    e.push(t);
                    f(h, t);
                    return t;
                }
                var w = typeof h;
                if (null === h || 'string' === w || 'number' === w || 'boolean' === w) return h;
            };
        return g(a);
    };
    var Jc = (a) => {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b;
    };
    var Kc = (a) => {
        if (void 0 === a || Ia(a) || Fc(a)) return !0;
        switch (typeof a) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'function':
                return !0;
        }
        return !1;
    };
    var Lc = {
        supportedMethods: 'concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString'.split(
            ' '
        ),
        concat(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof ua)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new ua(c);
        },
        every(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0;
        },
        filter(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ua(d);
        },
        forEach(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this);
        },
        hasOwnProperty(a, b) {
            return this.has(b);
        },
        indexOf(a, b, c) {
            var d = this.length();
            var e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1;
        },
        join(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b);
        },
        lastIndexOf(a, b, c) {
            var d = this.length();
            var e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1;
        },
        map(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ua(d);
        },
        pop() {
            return this.pop();
        },
        push(a, b) {
            return this.push(...Array.prototype.slice.call(arguments, 1));
        },
        reduce(a, b, c) {
            var d = this.length();
            var e;
            var f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error('TypeError: Reduce on List with no elements.');
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break;
                    }
                if (g === d) throw Error('TypeError: Reduce on List with no elements.');
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e;
        },
        reduceRight(a, b, c) {
            var d = this.length();
            var e;
            var f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error('TypeError: ReduceRight on List with no elements.');
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break;
                    }
                if (g > d) throw Error('TypeError: ReduceRight on List with no elements.');
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e;
        },
        reverse() {
            for (var a = Jc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
            return this;
        },
        shift() {
            return this.shift();
        },
        slice(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ua(e);
        },
        some(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1;
        },
        sort(a, b) {
            var c = Jc(this);
            void 0 === b ? c.sort() : c.sort((e, f) => Number(b.g(a, e, f)));
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
            return this;
        },
        splice(a, b, c, d) {
            return this.splice(...Array.prototype.splice.call(arguments, 1, arguments.length - 1));
        },
        toString() {
            return this.toString();
        },
        unshift(a, b) {
            return this.unshift(...Array.prototype.slice.call(arguments, 1));
        }
    };
    var Mc =
        'charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim'.split(
            ' '
        );
    var Nc = new pa('break');
    var Oc = new pa('continue');
    var Pc = function(a, b) {
        return B(this, a) + B(this, b);
    };
    var Qc = function(a, b) {
        return B(this, a) && B(this, b);
    };
    var Uc = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        if (!(c instanceof ua)) throw Error('Error: Non-List argument given to Apply instruction.');
        if (null === a || void 0 === a) throw Error("TypeError: Can't read property " + b + ' of ' + a + '.');
        var d = 'number' === typeof a;
        if ('boolean' === typeof a || d) {
            if ('toString' === b) {
                if (d && c.length()) {
                    var e = Ic(c.get(0));
                    try {
                        return a.toString(e);
                    } catch (r) {}
                }
                return a.toString();
            }
            throw Error('TypeError: ' + a + '.' + b + ' is not a function.');
        }
        if ('string' === typeof a) {
            if (0 <= Mc.indexOf(b)) {
                var f = Ic(c);
                return Hc(a[b](...f), this.g);
            }
            throw Error('TypeError: ' + b + ' is not a function');
        }
        if (a instanceof ua) {
            if (a.has(b)) {
                var g = a.get(b);
                if (g instanceof nb) {
                    var h = Jc(c);
                    h.unshift(this.g);
                    return g.g(...h);
                }
                throw Error('TypeError: ' + b + ' is not a function');
            }
            if (0 <= Lc.supportedMethods.indexOf(b)) {
                var k = Jc(c);
                k.unshift(this.g);
                return Lc[b].apply(a, k);
            }
        }
        if (a instanceof nb || a instanceof sb) {
            if (a.has(b)) {
                var n = a.get(b);
                if (n instanceof nb) {
                    var p = Jc(c);
                    p.unshift(this.g);
                    return n.g(...p);
                }
                throw Error('TypeError: ' + b + ' is not a function');
            }
            if ('toString' === b) return a instanceof nb ? a.N : a.toString();
            if ('hasOwnProperty' === b) return a.has(...Jc(c));
        }
        if (a instanceof yc && 'toString' === b) return a.toString();
        throw Error("TypeError: Object has no '" + b + "' property.");
    };
    var Vc = function(a, b) {
        a = B(this, a);
        if ('string' !== typeof a) throw Error('Invalid key name given for assignment.');
        var c = this.g;
        if (!c.has(a)) throw Error('Attempting to assign to undefined value ' + b);
        var d = B(this, b);
        c.set(a, d);
        return d;
    };
    var Wc = function(a) {
        var b = Aa(this.g),
            c = rb(b, Array.prototype.slice.apply(arguments));
        if (c instanceof pa) return c;
    };
    var Xc = () => Nc;
    var Yc = function(a) {
        for (var b = B(this, a), c = 0; c < b.length; c++) {
            var d = B(this, b[c]);
            if (d instanceof pa) return d;
        }
    };
    var Zc = function(a) {
        for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ('string' === typeof d) {
                var e = B(this, arguments[c + 1]);
                za(b, d, e, !0);
            }
        }
    };
    var $c = () => Oc;
    var ad = function(a, b, c) {
        var d = new ua();
        b = B(this, b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.g.add(a, B(this, f));
    };
    var bd = function(a, b) {
        return B(this, a) / B(this, b);
    };
    var cd = function(a, b) {
        a = B(this, a);
        b = B(this, b);
        var c = a instanceof yc,
            d = b instanceof yc;
        return c || d ? (c && d ? a.Sa == b.Sa : !1) : a == b;
    };
    var dd = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = B(this, arguments[c]);
        return b;
    };
    function ed(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e));
            var g = rb(f, d);
            if (g instanceof pa) {
                if ('break' === g.g) break;
                if ('return' === g.g) return g;
            }
        }
    }
    function fd(a, b, c) {
        if ('string' === typeof b)
            return ed(
                a,
                () => b.length,
                (f) => f,
                c
            );
        if (b instanceof sb || b instanceof ua || b instanceof nb) {
            var d = b.Ab();
            var e = d.length();
            return ed(
                a,
                () => e,
                (f) => d.get(f),
                c
            );
        }
    }
    var gd = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        var d = this.g;
        return fd(
            (e) => {
                d.set(a, e);
                return d;
            },
            b,
            c
        );
    };
    var hd = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        var d = this.g;
        return fd(
            (e) => {
                var f = Aa(d);
                za(f, a, e, !0);
                return f;
            },
            b,
            c
        );
    };
    var id = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        var d = this.g;
        return fd(
            (e) => {
                var f = Aa(d);
                f.add(a, e);
                return f;
            },
            b,
            c
        );
    };
    var kd = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        var d = this.g;
        return jd(
            (e) => {
                d.set(a, e);
                return d;
            },
            b,
            c
        );
    };
    var ld = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        var d = this.g;
        return jd(
            (e) => {
                var f = Aa(d);
                za(f, a, e, !0);
                return f;
            },
            b,
            c
        );
    };
    var sd = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        var d = this.g;
        return jd(
            (e) => {
                var f = Aa(d);
                f.add(a, e);
                return f;
            },
            b,
            c
        );
    };
    function jd(a, b, c) {
        if ('string' === typeof b)
            return ed(
                a,
                () => b.length,
                (d) => b[d],
                c
            );
        if (b instanceof ua)
            return ed(
                a,
                () => b.length(),
                (d) => b.get(d),
                c
            );
        throw new TypeError('The value is not iterable.');
    }
    var td = function(a, b, c, d) {
        function e(p, r) {
            for (var t = 0; t < f.length(); t++) {
                var u = f.get(t);
                r.add(u, p.get(u));
            }
        }
        var f = B(this, a);
        if (!(f instanceof ua)) throw Error('TypeError: Non-List argument given to ForLet instruction.');
        var g = this.g;
        d = B(this, d);
        var h = Aa(g);
        for (e(g, h); qb(h, b);) {
            var k = rb(h, d);
            if (k instanceof pa) {
                if ('break' === k.g) break;
                if ('return' === k.g) return k;
            }
            var n = Aa(g);
            e(h, n);
            qb(n, c);
            h = n;
        }
    };
    var ud = function(a) {
        a = B(this, a);
        var b = this.g,
            c = !1;
        if (c && !b.has(a)) throw new ReferenceError(a + ' is not defined.');
        return b.get(a);
    };
    var vd = function(a, b) {
        var c;
        a = B(this, a);
        b = B(this, b);
        if (void 0 === a || null === a) throw Error('TypeError: cannot access property of ' + a + '.');
        if (a instanceof sb || a instanceof ua || a instanceof nb) c = a.get(b);
        else if ('string' === typeof a) 'length' === b ? (c = a.length) : qa(b) && (c = a[b]);
        else if (a instanceof yc) return;
        return c;
    };
    var wd = function(a, b) {
        return B(this, a) > B(this, b);
    };
    var xd = function(a, b) {
        return B(this, a) >= B(this, b);
    };
    var yd = function(a, b) {
        a = B(this, a);
        b = B(this, b);
        a instanceof yc && (a = a.Sa);
        b instanceof yc && (b = b.Sa);
        return a === b;
    };
    var zd = function(a, b) {
        return !yd.call(this, a, b);
    };
    var Ad = function(a, b, c) {
        var d = [];
        B(this, a) ? (d = B(this, b)) : c && (d = B(this, c));
        var e = rb(this.g, d);
        if (e instanceof pa) return e;
    };
    var Bd = function(a, b) {
        return B(this, a) < B(this, b);
    };
    var Cd = function(a, b) {
        return B(this, a) <= B(this, b);
    };
    var Dd = function(a, b) {
        return B(this, a) % B(this, b);
    };
    var Ed = function(a, b) {
        return B(this, a) * B(this, b);
    };
    var Fd = function(a) {
        return -B(this, a);
    };
    var Gd = function(a) {
        return !B(this, a);
    };
    var Hd = function(a, b) {
        return !cd.call(this, a, b);
    };
    var Id = () => null;
    var Jd = function(a, b) {
        return B(this, a) || B(this, b);
    };
    var Kd = function(a, b) {
        var c = B(this, a);
        B(this, b);
        return c;
    };
    var Ld = function(a) {
        return B(this, a);
    };
    var Md = function(a) {
        return Array.prototype.slice.apply(arguments);
    };
    var Nd = function(a) {
        return new pa('return', B(this, a));
    };
    var Od = function(a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + ' of ' + a + '.');
        (a instanceof nb || a instanceof ua || a instanceof sb) && a.set(b, c);
        return c;
    };
    var Pd = function(a, b) {
        return B(this, a) - B(this, b);
    };
    var $d = function(a, b, c) {
        a = B(this, a);
        var d = B(this, b),
            e = B(this, c);
        if (!Ia(d) || !Ia(e)) throw Error('Error: Malformed switch instruction.');
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === B(this, d[h]))
                if (((f = B(this, e[h])), f instanceof pa)) {
                    var k = f.g;
                    if ('break' === k) return;
                    if ('return' === k || 'continue' === k) return f;
                } else g = !0;
        if (e.length === d.length + 1 && ((f = B(this, e[e.length - 1])), f instanceof pa && ('return' === f.g || 'continue' === f.g))) return f;
    };
    var ae = function(a, b, c) {
        return B(this, a) ? B(this, b) : B(this, c);
    };
    var be = function(a) {
        a = B(this, a);
        return a instanceof nb ? 'function' : typeof a;
    };
    var ce = function(a) {
        for (var b = this.g, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            'string' !== typeof d || b.add(d, void 0);
        }
    };
    var de = function(a, b, c, d) {
        var e = B(this, d);
        if (B(this, c)) {
            var f = rb(this.g, e);
            if (f instanceof pa) {
                if ('break' === f.g) return;
                if ('return' === f.g) return f;
            }
        }
        for (; B(this, a);) {
            var g = rb(this.g, e);
            if (g instanceof pa) {
                if ('break' === g.g) break;
                if ('return' === g.g) return g;
            }
            B(this, b);
        }
    };
    var ee = function(a) {
        return ~Number(B(this, a));
    };
    var fe = function(a, b) {
        return Number(B(this, a)) << Number(B(this, b));
    };
    var ge = function(a, b) {
        return Number(B(this, a)) >> Number(B(this, b));
    };
    var he = function(a, b) {
        return Number(B(this, a)) >>> Number(B(this, b));
    };
    var ie = function(a, b) {
        return Number(B(this, a)) & Number(B(this, b));
    };
    var je = function(a, b) {
        return Number(B(this, a)) ^ Number(B(this, b));
    };
    var ke = function(a, b) {
        return Number(B(this, a)) | Number(B(this, b));
    };
    var me = function() {
        this.g = new ub();
        le(this);
    }; me.prototype.execute = function(a) {
        return ne(this.g.o(a));
    };
    var oe = (a, b, c) => ne(a.g.C(b, c));
    var le = (a) => {
        var b = (d, e) => {
            wb(a.g, d, String(e));
        };
        b('control', 49);
        b('fn', 51);
        b('list', 7);
        b('map', 8);
        b('undefined', 44);
        var c = (d, e) => {
            vb(a.g, String(d), e);
        };
        c(0, Pc);
        c(1, Qc);
        c(2, Uc);
        c(3, Vc);
        c(53, Wc);
        c(4, Xc);
        c(5, Yc);
        c(52, Zc);
        c(6, $c);
        c(9, Yc);
        c(50, ad);
        c(10, bd);
        c(12, cd);
        c(13, dd);
        c(47, gd);
        c(54, hd);
        c(55, id);
        c(63, td);
        c(64, kd);
        c(65, ld);
        c(66, sd);
        c(15, ud);
        c(16, vd);
        c(17, vd);
        c(18, wd);
        c(19, xd);
        c(20, yd);
        c(21, zd);
        c(22, Ad);
        c(23, Bd);
        c(24, Cd);
        c(25, Dd);
        c(26, Ed);
        c(27, Fd);
        c(28, Gd);
        c(29, Hd);
        c(45, Id);
        c(30, Jd);
        c(32, Kd);
        c(33, Kd);
        c(34, Ld);
        c(35, Ld);
        c(46, Md);
        c(36, Nd);
        c(43, Od);
        c(37, Pd);
        c(38, $d);
        c(39, ae);
        c(40, be);
        c(41, ce);
        c(42, de);
        c(58, ee);
        c(57, fe);
        c(60, ge);
        c(61, he);
        c(56, ie);
        c(62, je);
        c(59, ke);
    };
    function ne(a) {
        if (
            a instanceof pa ||
            a instanceof nb ||
            a instanceof ua ||
            a instanceof sb ||
            a instanceof yc ||
            null === a ||
            void 0 === a ||
            'string' === typeof a ||
            'number' === typeof a ||
            'boolean' === typeof a
        )
            return a;
    }
    var pe = (() => {
        var a = (b) => ({
            toString() {
                return b;
            }
        });
        return {
            Ch: a('consent'),
            Xd: a('consent_always_fire'),
            Ff: a('convert_case_to'),
            Gf: a('convert_false_to'),
            Hf: a('convert_null_to'),
            If: a('convert_true_to'),
            Jf: a('convert_undefined_to'),
            fk: a('debug_mode_metadata'),
            gk: a('event_data_overrides'),
            zb: a('function'),
            li: a('instance_name'),
            ri: a('live_only'),
            si: a('malware_disabled'),
            ui: a('metadata'),
            jk: a('original_activity_id'),
            kk: a('original_vendor_template_id'),
            yi: a('once_per_event'),
            mg: a('once_per_load'),
            mk: a('priority_override'),
            nk: a('respected_consent_types'),
            qg: a('setup_tags'),
            rg: a('tag_id'),
            sg: a('teardown_tags')
        };
    })();
    var Te;
    var Ue = [];
    var Ve = [];
    var We = [];
    var Xe = [];
    var Ye = [];
    var Ze = {};
    var $e;
    var af;
    var bf;
    var cf = (a, b) => {
        var c = {};
        c['function'] = '__' + a;
        for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d]);
        return c;
    };
    var df = (a, b) => {
        var c = a['function'],
            d = b && b.event;
        if (!c) throw Error('Error: No function name given for function call.');
        var e = Ze[c],
            f = {},
            g;
        for (g in a)
            if (a.hasOwnProperty(g))
                if (0 === g.indexOf('vtp_')) e && d && d.Fg && d.Fg(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]);
                else if (g === pe.Xd.toString() && a[g]) {}
        e && d && d.Eg && (f.vtp_gtmCachedValues = d.Eg);
        return void 0 !== e ? e(f) : Te(c, f, b);
    };
    var ff = (a, b, c) => {
        c = c || [];
        var d = {},
            e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = ef(a[e], b, c));
        return d;
    };
    var ef = (a, b, c) => {
        if (Ia(a)) {
            var d;
            switch (a[0]) {
                case 'function_id':
                    return a[1];
                case 'list':
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(ef(a[e], b, c));
                    return d;
                case 'macro':
                    var f = a[1];
                    if (c[f]) return;
                    var g = Ue[f];
                    if (!g || b.hf(g)) return;
                    c[f] = !0;
                    try {
                        var h = ff(g, b, c);
                        h.vtp_gtmEventId = b.id;
                        d = df(h, {
                            event: b,
                            index: f,
                            type: 2
                        });
                        bf && (d = bf.Pi(d, h));
                    } catch (y) {
                        b.Zg && b.Zg(y, Number(f)), (d = !1);
                    }
                    c[f] = !1;
                    return d;
                case 'map':
                    d = {};
                    for (var k = 1; k < a.length; k += 2) d[ef(a[k], b, c)] = ef(a[k + 1], b, c);
                    return d;
                case 'template':
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                        var r = ef(a[p], b, c);
                        af && (n = n || r === af.ud);
                        d.push(r);
                    }
                    return af && n ? af.Ti(d) : d.join('');
                case 'escape':
                    d = ef(a[1], b, c);
                    if (af && Ia(a[1]) && 'macro' === a[1][0] && af.oj(a)) return af.Gj(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) qe[a[t]] && (d = qe[a[t]](d));
                    return d;
                case 'tag':
                    var u = a[1];
                    if (!Xe[u]) throw Error('Unable to resolve tag reference ' + u + '.');
                    return (d = {
                        Og: a[2],
                        index: u
                    });
                case 'zb':
                    var q = {
                        arg0: a[2],
                        arg1: a[3],
                        ignore_case: a[5]
                    };
                    q['function'] = a[1];
                    var v = gf(q, b, c),
                        w = !!a[4];
                    return w || 2 !== v ? w !== (1 === v) : null;
                default:
                    throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
            }
        }
        return a;
    };
    var gf = (a, b, c) => {
        try {
            return $e(ff(a, b, c));
        } catch (d) {}
        JSON.stringify(a);
    }
    return 2;
};
var hf = function(a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    'stack' in d && (this.stack = d.stack);
    this.o = a;
    this.g = c;
};
la(hf, Error);
function jf(a, b) {
    if (Ia(a)) {
        Object.defineProperty(a, 'context', {
            value: {
                line: b[0]
            }
        });
        for (var c = 1; c < a.length; c++) jf(a[c], b[c]);
    }
}
var kf = function(a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    'stack' in c && (this.stack = c.stack);
    this.s = a;
    this.o = b;
    this.g = [];
};
la(kf, Error);
var mf = () => (a, b) => {
    a instanceof kf || (a = new kf(a, lf));
    b && a.g.push(b);
    throw a;
};
function lf(a) {
    if (!a.length) return a;
    a.push({
        id: 'main',
        line: 0
    });
    for (var b = a.length - 1; 0 < b; b--) Ha(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
}
var pf = (a) => {
    function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
    }
    for (var c = [], d = [], e = nf(a), f = 0; f < Ve.length; f++) {
        var g = Ve[f],
            h = of (g, e);
        if (h) {
            for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
            b(g.block || []);
        } else null === h && b(g.block || []);
    }
    for (var p = [], r = 0; r < Xe.length; r++) c[r] && !d[r] && (p[r] = !0);
    return p;
};
var of = (a, b) => {
    for (var c = a['if'] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
    }
    return !0;
};
var nf = (a) => {
    var b = [];
    return (c) => {
        void 0 === b[c] && (b[c] = gf(We[c], a));
        return b[c];
    };
};
var qf = {
    Pi(a, b) {
        b[pe.Ff] && 'string' === typeof a && (a = 1 == b[pe.Ff] ? a.toLowerCase() : a.toUpperCase());
        b.hasOwnProperty(pe.Hf) && null === a && (a = b[pe.Hf]);
        b.hasOwnProperty(pe.Jf) && void 0 === a && (a = b[pe.Jf]);
        b.hasOwnProperty(pe.If) && !0 === a && (a = b[pe.If]);
        b.hasOwnProperty(pe.Gf) && !1 === a && (a = b[pe.Gf]);
        return a;
    }
};
var rf = function() {
    this.g = {};
};
function sf(a, b, c, d) {
    if (a)
        for (var e = 0; e < a.length; e++) {
            var f = void 0;
            var g = 'A policy function denied the permission request';
            try {
                (f = a[e].call(void 0, b, c, d)), (g += '.');
            } catch (h) {
                g = 'string' === typeof h ? g + (': ' + h) : h instanceof Error ? g + (': ' + h.message) : g + '.';
            }
            if (!f) throw new hf(c, d, g);
        }
}
function tf(a, b, c) {
    return function(...args) {
        var d = args[0];
        if (d) {
            var e = a.g[d];
            var f = a.g.all;
            if (e || f) {
                var g = c.apply(void 0, Array.prototype.slice.call(args, 0));
                sf(e, b, d, g);
                sf(f, b, d, g);
            }
        }
    };
}
var wf = function() {
    var a = data.permissions || {},
        b = J.J,
        c = this;
    this.o = new rf();
    this.g = {};
    var d = {},
        e = tf(this.o, b, function(...args) {
            var f = args[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(args, 0)) : {};
        });
    Oa(a, (f, g) => {
        var h = {};
        Oa(g, (k, n) => {
            var p = uf(k, n);
            h[k] = p.assert;
            d[k] || (d[k] = p.P);
        });
        c.g[f] = function(k, n) {
            var p = h[k];
            if (!p) throw vf(k, {}, 'The requested permission ' + k + ' is not configured.');
            var r = Array.prototype.slice.call(arguments, 0);
            p.apply(void 0, r);
            e.apply(void 0, r);
        };
    });
};
var yf = (a) => xf.g[a] || (() => {});
function uf(a, b) {
    var c = cf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = vf;
    try {
        return df(c);
    } catch (d) {
        return {
            assert(e) {
                throw new hf(e, {}, 'Permission ' + e + ' is unknown.');
            },
            P(...args) {
                for (var e = {}, f = 0; f < args.length; ++f) e['arg' + (f + 1)] = args[f];
                return e;
            }
        };
    }
}
function vf(a, b, c) {
    return new hf(a, b, c);
}
var zf = !1;
var Af = {};
Af.dk = Ta('');
Af.Xi = Ta('');
var Bf = zf;
var Cf = Af.Xi;
var Df = Af.dk;
var Ef = (a, b) => {
    var c = String(a);
    return c;
};
var Jf = (a) => {
    var b = {},
        c = 0;
    Oa(a, (e, f) => {
        if (void 0 !== f)
            if (((f = Ef(f, 100)), Ff.hasOwnProperty(e))) b[Ff[e]] = Gf(f);
            else if (Hf.hasOwnProperty(e)) {
            var g = Hf[e],
                h = Gf(f);
            b.hasOwnProperty(g) || (b[g] = h);
        } else if ('category' === e)
            for (var k = Gf(f).split('/', 5), n = 0; n < k.length; n++) {
                var p = If[n],
                    r = k[n];
                b.hasOwnProperty(p) || (b[p] = r);
            }
        else 10 > c && ((b['k' + c] = Gf(Ef(e, 40))), (b['v' + c] = Gf(f)), c++);
    });
    var d = [];
    Oa(b, (e, f) => {
        d.push('' + e + f);
    });
    return d.join('~');
};
var Gf = (a) => ('' + a).replace(/~/g, () => '~~');
var Ff = {
    item_id: 'id',
    item_name: 'nm',
    item_brand: 'br',
    item_category: 'ca',
    item_category2: 'c2',
    item_category3: 'c3',
    item_category4: 'c4',
    item_category5: 'c5',
    item_variant: 'va',
    price: 'pr',
    quantity: 'qt',
    coupon: 'cp',
    item_list_name: 'ln',
    index: 'lp',
    item_list_id: 'li',
    discount: 'ds',
    affiliation: 'af',
    promotion_id: 'pi',
    promotion_name: 'pn',
    creative_name: 'cn',
    creative_slot: 'cs',
    location_id: 'lo'
};
var Hf = {
    id: 'id',
    name: 'nm',
    brand: 'br',
    variant: 'va',
    list_name: 'ln',
    list_position: 'lp',
    list: 'ln',
    position: 'lp',
    creative: 'cn'
};
var If = ['ca', 'c2', 'c3', 'c4', 'c5'];
var Kf = (a) => {
    var b = [];
    Oa(a, (c, d) => {
        null != d && b.push(encodeURIComponent(c) + '=' + encodeURIComponent(String(d)));
    });
    return b.join('&');
};
var Lf = function(a, b, c, d) {
    this.Wa = a.Wa;
    this.Ib = a.Ib;
    this.K = a.K;
    this.o = b;
    this.C = c;
    this.s = Kf(a.Wa);
    this.g = Kf(a.K);
    this.F = d ? this.g.length : 0;
    if (16384 < this.F) throw Error('EVENT_TOO_LARGE');
};
var Mf = function() {
    this.events = [];
    this.g = this.Wa = '';
    this.s = 0;
    this.o = !1;
};
Mf.prototype.add = function(a) {
    return this.C(a) ? (this.events.push(a), (this.Wa = a.s), (this.g = a.o), (this.s += a.F), (this.o = a.C), !0) : !1;
};
Mf.prototype.C = function(a) {
    var b = 20 > this.events.length && 16384 > a.F + this.s;
    var c = this.Wa === a.s && this.g === a.o && this.o === a.C;
    return 0 == this.events.length || (b && c);
};
var Nf = (a, b) => {
    Oa(a, (c, d) => {
        null != d && b.push(encodeURIComponent(c) + '=' + encodeURIComponent(d));
    });
};
var Uf = (a, b) => {
    var c = [];
    a.s && c.push(a.s);
    b && c.push('_s=' + b);
    Nf(a.Ib, c);
    var d = !1;
    a.g && (c.push(a.g), (d = !0));
    var e = c.join('&'),
        f = '',
        g = e.length + a.o.length + 1;
    d && 2048 < g && ((f = c.pop()), (e = c.join('&')));
    return {
        tf: e,
        body: f
    };
};
var Vf = (a, b) => {
    var c = a.events;
    if (1 == c.length) return Uf(c[0], b);
    var d = [];
    a.Wa && d.push(a.Wa);
    for (var e = {}, f = 0; f < c.length; f++)
        Oa(c[f].Ib, (u, q) => {
            null != q && ((e[u] = e[u] || {}), (e[u][String(q)] = e[u][String(q)] + 1 || 1));
        });
    var g = {};
    Oa(e, (u, q) => {
        var v,
            w = -1,
            y = 0;
        Oa(q, (x, z) => {
            y += z;
            var A = (x.length + u.length + 2) * (z - 1);
            A > w && ((v = x), (w = A));
        });
        y == c.length && (g[u] = v);
    });
    Nf(g, d);
    b && d.push('_s=' + b);
    for (
        var h = d.join('&'), k = [], n = {}, p = 0; p < c.length; n = {
            ad: n.ad
        },
        p++
    ) {
        var r = [];
        n.ad = {};
        Oa(
            c[p].Ib,
            ((u) => (q, v) => {
                g[q] != '' + v && (u.ad[q] = v);
            })(n)
        );
        c[p].g && r.push(c[p].g);
        Nf(n.ad, r);
        k.push(r.join('&'));
    }
    var t = k.join('\r\n');
    return {
        tf: h,
        body: t
    };
};
var dg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i;
var eg = {
    Fn: 'function',
    DustMap: 'Object',
    List: 'Array'
};
var Q = (a, b, c) => {
    for (var d = 0; d < b.length; d++) {
        var e = dg.exec(b[d]);
        if (!e) throw Error('Internal Error in ' + a);
        var f = e[1],
            g = '!' === e[2],
            h = e[3],
            k = c[d],
            n = typeof k;
        if (null === k || 'undefined' === n) {
            if (g) throw Error('Error in ' + a + '. Required argument ' + f + ' not supplied.');
        } else if ('*' !== h) {
            var p = typeof k;
            k instanceof nb ? (p = 'Fn') : k instanceof ua ? (p = 'List') : k instanceof sb ? (p = 'DustMap') : k instanceof yc && (p = 'OpaqueValue');
            if (p != h) throw Error('Error in ' + a + '. Argument ' + f + ' has type ' + p + ', which does not match required type ' + (eg[h] || h) + '.');
        }
    }
};
function fg(a) {
    return '' + a;
}
function gg(a, b) {
    var c = [];
    return c;
}
var hg = (a, b) => {
    var c = new nb(a, function(...args) {
        for (var d = Array.prototype.slice.call(args, 0), e = 0; e < d.length; e++) d[e] = B(this, d[e]);
        return b.apply(this, d);
    });
    c.Bb();
    return c;
};
var ig = (a, b) => {
    var c = new sb(),
        d;
    for (d in b)
        if (b.hasOwnProperty(d)) {
            var e = b[d];
            Ea(e) ? c.set(d, hg(a + '_' + d, e)) : (Ha(e) || Ga(e) || 'boolean' == typeof e) && c.set(d, e);
        }
    c.Bb();
    return c;
};
var jg = function(a, b) {
    Q(G(this), ['apiName:!string', 'message:?string'], arguments);
    var c = {};
    var d = new sb();
    return (d = ig('AssertApiSubject', c));
};
var kg = function(a, b) {
    Q(G(this), ['actual:?*', 'message:?string'], arguments);
    var c = {};
    var d = new sb();
    return (d = ig('AssertThatSubject', c));
};
function lg(a) {
    return function(...args) {
        for (var b = [], c = this.g, d = 0; d < args.length; ++d) b.push(Ic(args[d], c));
        return Hc(a(...b));
    };
}
var ng = () => {
    for (var a = Math, b = mg, c = {}, d = 0; d < b.length; d++) {
        var e = b[d];
        a.hasOwnProperty(e) && (c[e] = lg(a[e].bind(a)));
    }
    return c;
};
var og = (a) => {
    var b;
    return b;
};
var pg = (a) => {
    var b;
    return b;
};
var qg = (a) => encodeURI(a);
var rg = (a) => encodeURIComponent(a);
var sg = function(a) {
    Q(G(this), ['message:?string'], arguments);
};
var tg = function(a, b) {
    Q(G(this), ['min:!number', 'max:!number'], arguments);
    return Ka(a, b);
};
var ug = function(a, b, c) {
    var d = a.g.g;
    if (!d) throw Error('Missing program state.');
    d.Ii.apply(null, Array.prototype.slice.call(arguments, 1));
};
var vg = function() {
    ug(this, 'read_container_data');
    var a = new sb();
    a.set('containerId', 'G-4W5MG3DG4T');
    a.set('version', '1');
    a.set('environmentName', '');
    a.set('debugMode', Bf);
    a.set('previewMode', Df);
    a.set('environmentMode', Cf);
    a.Bb();
    return a;
};
var wg = {};
wg.sstECEnableData = !0;
wg.enableAdsEc = !0;
wg.enableCrossDomain = !1;
wg.enableCrossDomain = !0;
wg.sstFFConversionEnabled = !0;
wg.sstEnableAuid = !0;
wg.enableGbraidUpdate = !0;
wg.requireGtagUserDataTos = !0;
wg.enableGlobalEventDeveloperIds = !1;
function xg() {
    return Hc(wg);
}
var yg = () => new Date().getTime();
var zg = (a) => {
    if (null === a) return 'null';
    if (a instanceof ua) return 'array';
    if (a instanceof nb) return 'function';
    if (a instanceof yc) {
        a = a.Sa;
        if (void 0 === a.constructor || void 0 === a.constructor.name) {
            var b = String(a);
            return b.substring(8, b.length - 1);
        }
        return String(a.constructor.name);
    }
    return typeof a;
};
var Ag = (a) => {
    function b(c) {
        return function(d) {
            try {
                return c(d);
            } catch (e) {
                (Bf || Df) && a.call(this, e.message);
            }
        };
    }
    return {
        parse: b((c) => Hc(JSON.parse(c))),
        stringify: b((c) => JSON.stringify(Ic(c)))
    };
};
var Bg = function(a) {
    return Sa(Ic(a, this.g));
};
var Cg = function(a) {
    return Number(Ic(a, this.g));
};
var Dg = (a) => (null === a ? 'null' : void 0 === a ? 'undefined' : a.toString());
var Eg = (a, b, c) => {
    var d = null;
    var e = !1;
    return e ? d : null;
};
var mg = 'floor ceil round max min abs pow sqrt'.split(' ');
var Fg = () => {
    var a = {};
    return {
        dj(b) {
            return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Wj(b, c) {
            a[b] = c;
        },
        reset() {
            a = {};
        }
    };
};
var Gg = function(a, b) {
    Q(G(this), ['apiName:!string', 'mock:?*'], arguments);
};
var Hg = {};
Hg.keys = (a) => new ua();
Hg.values = (a) => new ua();
Hg.entries = (a) => new ua();
Hg.freeze = (a) => a;
Hg.delete = (a, b) => !1;
var Jg = function() {
    this.g = {};
    this.o = {};
};
Jg.prototype.get = function(a, b) {
    var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
    return c;
};
Jg.prototype.add = function(a, b, c) {
    if (this.g.hasOwnProperty(a)) throw 'Attempting to add a function which already exists: ' + a + '.';
    if (this.o.hasOwnProperty(a)) throw 'Attempting to add an API with an existing private API name: ' + a + '.';
    this.g[a] = c ? void 0 : Ea(b) ? hg(a, b) : ig(a, b);
};
var Lg = (a, b, c) => {
    if (a.o.hasOwnProperty(b)) throw 'Attempting to add a private function which already exists: ' + b + '.';
    if (a.g.hasOwnProperty(b)) throw 'Attempting to add a private function with an existing API name: ' + b + '.';
    a.o[b] = Ea(c) ? hg(b, c) : ig(b, c);
};
function Kg(a, b) {
    var c = void 0;
    return c;
}
function Mg() {
    var a = {};
    return a;
}
var R = {
    Wb: '_ee',
    Ad: '_syn_or_mod',
    qk: '_uei',
    Ae: '_eu',
    lk: '_pci',
    Rb: 'event_callback',
    hd: 'event_timeout',
    za: 'gtag.config',
    Oa: 'gtag.get',
    xa: 'purchase',
    Ob: 'refund',
    pb: 'begin_checkout',
    Mb: 'add_to_cart',
    Nb: 'remove_from_cart',
    Lh: 'view_cart',
    Lf: 'add_to_wishlist',
    ya: 'view_item',
    qb: 'view_promotion',
    dd: 'select_promotion',
    ae: 'select_item',
    $a: 'view_item_list',
    Kf: 'add_payment_info',
    Kh: 'add_shipping_info',
    Pa: 'value_key',
    cb: 'value_callback',
    Fa: 'allow_ad_personalization_signals',
    uc: 'restricted_data_processing',
    nc: 'allow_google_signals',
    qa: 'cookie_expires',
    Qb: 'cookie_update',
    vc: 'session_duration',
    od: 'session_engaged_time',
    Ra: 'user_properties',
    sa: 'transport_url',
    V: 'ads_data_redaction',
    Aa: 'user_data',
    sc: 'first_party_collection',
    D: 'ad_storage',
    I: 'analytics_storage',
    Yd: 'region',
    Ef: 'wait_for_update',
    oa: 'conversion_linker',
    Ga: 'conversion_cookie_prefix',
    fa: 'value',
    da: 'currency',
    ig: 'trip_type',
    aa: 'items',
    ag: 'passengers',
    de: 'allow_custom_scripts',
    wc: 'session_id',
    fg: 'quantity',
    fb: 'transaction_id',
    ub: 'language',
    fd: 'country',
    ed: 'allow_enhanced_conversions',
    je: 'aw_merchant_id',
    he: 'aw_feed_country',
    ie: 'aw_feed_language',
    fe: 'discount',
    X: 'developer_id',
    pd: 'delivery_postal_code',
    qe: 'estimated_delivery_date',
    oe: 'shipping',
    we: 'new_customer',
    ke: 'customer_lifetime_value',
    pe: 'enhanced_conversions',
    mc: 'page_view',
    ja: 'linker',
    O: 'domains',
    vb: 'decorate_forms',
    Xf: 'enhanced_conversions_automatic_settings',
    Uh: 'auto_detection_enabled',
    Yf: 'ga_temp_client_id',
    be: 'user_engagement',
    Fh: 'app_remove',
    Gh: 'app_store_refund',
    Hh: 'app_store_subscription_cancel',
    Ih: 'app_store_subscription_convert',
    Jh: 'app_store_subscription_renew',
    Mh: 'first_open',
    Nh: 'first_visit',
    Oh: 'in_app_purchase',
    Ph: 'session_start',
    Qh: 'user_data_login',
    Rh: 'user_data_logout',
    Sh: 'allow_display_features',
    oc: 'campaign',
    Nf: 'campaign_content',
    Of: 'campaign_id',
    Pf: 'campaign_medium',
    Qf: 'campaign_name',
    Rf: 'campaign_source',
    Sf: 'campaign_term',
    rb: 'client_id',
    ia: 'cookie_domain',
    Pb: 'cookie_name',
    ab: 'cookie_path',
    Ha: 'cookie_flags',
    qc: 'custom_map',
    te: 'groups',
    $f: 'non_interaction',
    wb: 'page_location',
    xe: 'page_path',
    Qa: 'page_referrer',
    md: 'page_title',
    Vb: 'send_page_view',
    xb: 'send_to',
    ye: 'session_engaged',
    ld: '_logged_in_state',
    ze: 'session_number',
    hi: 'tracking_id',
    hb: 'url_passthrough',
    Tb: 'accept_incoming',
    Ub: 'url_position',
    dg: 'phone_conversion_number',
    bg: 'phone_conversion_callback',
    cg: 'phone_conversion_css_class',
    eg: 'phone_conversion_options',
    ei: 'phone_conversion_ids',
    di: 'phone_conversion_country_code',
    Mf: 'aw_remarketing',
    ee: 'aw_remarketing_only',
    ce: 'gclid',
    Th: 'auid',
    Zh: 'affiliation',
    Wf: 'tax',
    ne: 'list_name',
    Vf: 'checkout_step',
    Uf: 'checkout_option',
    $h: 'coupon',
    ai: 'promotions',
    yb: 'user_id',
    fi: 'retoken',
    ra: 'cookie_prefix',
    Tf: 'disable_merchant_reported_purchases',
    Yh: 'dc_natural_search',
    Xh: 'dc_custom_params',
    Zf: 'method',
    gi: 'search_term',
    Wh: 'content_type',
    ci: 'optimize_id',
    bi: 'experiments',
    eb: 'google_signals',
    kd: 'google_tld',
    rd: 'update',
    se: 'firebase_id',
    Sb: 'ga_restrict_domain',
    gd: 'event_settings',
    me: 'dynamic_event_settings',
    xc: 'user_data_settings',
    gg: 'screen_name',
    tb: '_x_19',
    sb: '_ecid',
    jd: '_x_20',
    ve: 'internal_traffic_results',
    hg: 'traffic_type',
    nd: 'referral_exclusion_definition',
    ue: 'ignore_referrer',
    Vh: 'content_group'
};
var Ng = {};
R.ii = Object.freeze(
    ((Ng[R.Fa] = 1),
        (Ng[R.ed] = 1),
        (Ng[R.nc] = 1),
        (Ng[R.aa] = 1),
        (Ng[R.ia] = 1),
        (Ng[R.qa] = 1),
        (Ng[R.Ha] = 1),
        (Ng[R.Pb] = 1),
        (Ng[R.ab] = 1),
        (Ng[R.ra] = 1),
        (Ng[R.Qb] = 1),
        (Ng[R.qc] = 1),
        (Ng[R.X] = 1),
        (Ng[R.me] = 1),
        (Ng[R.Rb] = 1),
        (Ng[R.gd] = 1),
        (Ng[R.hd] = 1),
        (Ng[R.sc] = 1),
        (Ng[R.Sb] = 1),
        (Ng[R.eb] = 1),
        (Ng[R.kd] = 1),
        (Ng[R.te] = 1),
        (Ng[R.ve] = 1),
        (Ng[R.ja] = 1),
        (Ng[R.nd] = 1),
        (Ng[R.uc] = 1),
        (Ng[R.Vb] = 1),
        (Ng[R.xb] = 1),
        (Ng[R.vc] = 1),
        (Ng[R.od] = 1),
        (Ng[R.pd] = 1),
        (Ng[R.sa] = 1),
        (Ng[R.rd] = 1),
        (Ng[R.xc] = 1),
        (Ng[R.Ra] = 1),
        (Ng[R.Ae] = 1),
        Ng)
);
R.jg = Object.freeze([R.wb, R.Qa, R.md, R.ub, R.gg, R.yb, R.se, R.Vh]);
var Og = {};
R.ki = Object.freeze(
    ((Og[R.Fh] = 1),
        (Og[R.Gh] = 1),
        (Og[R.Hh] = 1),
        (Og[R.Ih] = 1),
        (Og[R.Jh] = 1),
        (Og[R.Mh] = 1),
        (Og[R.Nh] = 1),
        (Og[R.Oh] = 1),
        (Og[R.Ph] = 1),
        (Og[R.be] = 1),
        Og)
);
var Pg = {};
R.kg = Object.freeze(
    ((Pg[R.Kf] = 1),
        (Pg[R.Kh] = 1),
        (Pg[R.Mb] = 1),
        (Pg[R.Nb] = 1),
        (Pg[R.Lh] = 1),
        (Pg[R.pb] = 1),
        (Pg[R.ae] = 1),
        (Pg[R.$a] = 1),
        (Pg[R.dd] = 1),
        (Pg[R.qb] = 1),
        (Pg[R.xa] = 1),
        (Pg[R.Ob] = 1),
        (Pg[R.ya] = 1),
        (Pg[R.Lf] = 1),
        Pg)
);
R.Ce = Object.freeze([R.Fa, R.nc, R.Qb]);
R.wi = Object.freeze([].concat(R.Ce));
R.De = Object.freeze([R.qa, R.hd, R.vc, R.od]);
R.xi = Object.freeze([].concat(R.De));
var Rg = {};
var Sg = (a, b) => {
    Rg[a] = Rg[a] || [];
    Rg[a][b] = !0;
};
var Tg = (a) => {
    for (var b = [], c = Rg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
    for (var e = 0; e < b.length; e++) b[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(b[e] || 0);
    return b.join('');
};
var Ug = (a) => {
    Sg('GTM', a);
};
var J = {};
var Vg = null;
var Wg = Math.random();
J.J = 'G-4W5MG3DG4T';
J.yd = 'ba1';
J.W = 'dataLayer';
J.Eh = 'ChEIgMuHjQYQ6auAt+KMqta9ARIlAAai/dXD98B8b5appURw8YZvQjvOBYao+bTswv4OmJIDjb9oMxoCGlo\x3d';
var Xg = {
    __cl: !0,
    __ecl: !0,
    __ehl: !0,
    __evl: !0,
    __fal: !0,
    __fil: !0,
    __fsl: !0,
    __hl: !0,
    __jel: !0,
    __lcl: !0,
    __sdl: !0,
    __tl: !0,
    __ytl: !0
};
var Yg = {
    __paused: !0,
    __tg: !0
};
var Zg;
for (Zg in Xg) Xg.hasOwnProperty(Zg) && (Yg[Zg] = !0);
J.Zd = 'www.googletagmanager.com';
var $g = J.Zd + '/gtm.js';
$g = J.Zd + '/gtag/js';
var ah = $g;
var bh = Ta('');
var ch = null;
var dh = null;
var eh = 'https://www.googletagmanager.com/a?id=' + J.J + '&cv=1';
var fh = {};
var gh = {};
var hh = () => {
    var a = Vg.sequence || 1;
    Vg.sequence = a + 1;
    return a;
};
J.Dh = '';
var ih = '';
J.zd = ih;
var jh = {};
var kh = new La();
var lh = {};
var mh = {};
var ph = {
    name: J.W,
    set(a, b) {
        Gc(ib(a, b), lh);
        nh();
    },
    get(a) {
        return oh(a, 2);
    },
    reset() {
        kh = new La();
        lh = {};
        nh();
    }
};
var oh = (a, b) => (2 != b ? kh.get(a) : qh(a));
var qh = (a, b) => {
    var c = a.split('.');
    b = b || [];
    for (var d = lh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
    }
    return d;
};
var rh = (a, b) => {
    mh.hasOwnProperty(a) || (kh.set(a, b), Gc(ib(a, b), lh), nh());
};
var sh = () => {
    for (var a = ['gtm.allowlist', 'gtm.blocklist', 'gtm.whitelist', 'gtm.blacklist', 'tagTypeBlacklist'], b = 0; b < a.length; b++) {
        var c = a[b],
            d = oh(c, 1);
        if (Ia(d) || Fc(d)) d = Gc(d);
        mh[c] = d;
    }
};
var nh = (a) => {
    Oa(mh, (b, c) => {
        kh.set(b, c);
        Gc(ib(b, void 0), lh);
        Gc(ib(b, c), lh);
        a && delete mh[b];
    });
};
var uh = (a, b, c) => {
    jh[a] = jh[a] || {};
    jh[a][b] = th(b, c);
};
var th = (a, b) => {
    var c,
        d = 1 !== (void 0 === b ? 2 : b) ? qh(a) : kh.get(a);
    'array' === Cc(d) || 'object' === Cc(d) ? (c = Gc(d)) : (c = d);
    return c;
};
var vh = (a, b) => {
    if (jh[a]) return jh[a][b];
};
var wh = (a, b) => {
    jh[a] && delete jh[a][b];
};
var xh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/);
var yh = {
    cl: ['ecl'],
    customPixels: ['nonGooglePixels'],
    ecl: ['cl'],
    ehl: ['hl'],
    hl: ['ehl'],
    html: ['customScripts', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes'],
    customScripts: ['html', 'customPixels', 'nonGooglePixels', 'nonGoogleScripts', 'nonGoogleIframes'],
    nonGooglePixels: [],
    nonGoogleScripts: ['nonGooglePixels'],
    nonGoogleIframes: ['nonGooglePixels']
};
var zh = {
    cl: ['ecl'],
    customPixels: ['customScripts', 'html'],
    ecl: ['cl'],
    ehl: ['hl'],
    hl: ['ehl'],
    html: ['customScripts'],
    customScripts: ['html'],
    nonGooglePixels: ['customPixels', 'customScripts', 'html', 'nonGoogleScripts', 'nonGoogleIframes'],
    nonGoogleScripts: ['customScripts', 'html'],
    nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts']
};
var Ah = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(' ');
var Bh = () => {
    var a = !1;
    a = !0;
    return a;
};
var Dh = (a) => {
    var b = oh('gtm.allowlist') || oh('gtm.whitelist');
    b && Ug(9);
    Bh() && (b = 'google gtagfl lcl zone oid op'.split(' '));
    var c = b && gb(Va(b), yh),
        d = oh('gtm.blocklist') || oh('gtm.blacklist');
    d || ((d = oh('tagTypeBlacklist')) && Ug(3));
    d ? Ug(8) : (d = []);
    Ch() && ((d = Va(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
    0 <= Va(d).indexOf('google') && Ug(2);
    var e = d && gb(Va(d), zh),
        f = {};
    return (g) => {
        var h = g && g[pe.zb];
        if (!h || 'string' != typeof h) return !0;
        h = h.replace(/^_*/, '');
        if (void 0 !== f[h]) return f[h];
        var k = gh[h] || [],
            n = a(h, k);
        if (b) {
            var p;
            if ((p = n))
                a: {
                    if (0 > c.indexOf(h))
                        if (k && 0 < k.length)
                            for (var r = 0; r < k.length; r++) {
                                if (0 > c.indexOf(k[r])) {
                                    Ug(11);
                                    p = !1;
                                    break a;
                                }
                            }
                    else {
                        p = !1;
                        break a;
                    }
                    p = !0;
                }
            n = p;
        }
        var t = !1;
        if (d) {
            var u = 0 <= e.indexOf(h);
            if (u) t = u;
            else {
                var q = Na(e, k || []);
                q && Ug(10);
                t = q;
            }
        }
        var v = !n || t;
        v || !(0 <= k.indexOf('sandboxedScripts')) || (c && -1 !== c.indexOf('sandboxedScripts')) || (v = Na(e, Ah));
        return (f[h] = v);
    };
};
var Ch = () => xh.test(m.location && m.location.hostname);
var Eh = {
    active: !0,
    isAllowed() {
        return !0;
    }
};
var Fh = (a) => {
    var b = Vg.zones;
    return b ? b.checkState(J.J, a) : Eh;
};
var Gh = (a) => {
    var b = Vg.zones;
    !b && a && (b = Vg.zones = a());
    return b;
};
var Hh = function(a) {
    this.g = a;
    this.defaultValue = !1;
};
var Ih = new Hh(1933);
var Jh = new Hh(1956);
var Nh = () => {
    var a = Kh;
    var b = 'ef';
    if (a.ef && a.hasOwnProperty(b)) return a.ef;
    var c = new a();
    a.ef = c;
    a.hasOwnProperty(b);
    return c;
};
var Kh = function() {
    var a = {};
    this.o = (b, c) => (null != a[b] ? a[b] : c);
    this.g = (b) => {
        a[b] = !0;
    };
};
var Oh = (a) => Nh().o(a.g, a.defaultValue);
var Ph = [];
function Qh() {
    var a = Yb('google_tag_data', {});
    a.ics ||
        (a.ics = {
            entries: {},
            set: Rh,
            update: Sh,
            addListener: Th,
            notifyListeners: Uh,
            active: !1,
            usedDefault: !1
        });
    return a.ics;
}
function Rh(a, b, c, d, e, f) {
    var g = Qh();
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
        var h = g.entries;
        var k = h[a] || {};
        var n = k.region;
        var p = c && Ga(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
            var r = !!(f && 0 < f && void 0 === k.update);
            var t = {
                region: p,
                initial: 'granted' === b,
                update: k.update,
                quiet: r
            };
            if ('' !== d || !1 !== k.initial) h[a] = t;
            r &&
                m.setTimeout(() => {
                    h[a] === t && t.quiet && ((t.quiet = !1), Vh(a), Uh(), Sg('TAGGING', 2));
                }, f);
        }
    }
}
function Sh(a, b) {
    var c = Qh();
    c.active = !0;
    if (void 0 != b) {
        var d = Wh(a);
        var e = c.entries;
        var f = (e[a] = e[a] || {});
        f.update = 'granted' === b;
        var g = Wh(a);
        f.quiet ? ((f.quiet = !1), Vh(a)) : g !== d && Vh(a);
    }
}
function Th(a, b) {
    Ph.push({
        Ve: a,
        $i: b
    });
}
function Vh(a) {
    for (var b = 0; b < Ph.length; ++b) {
        var c = Ph[b];
        Ia(c.Ve) && -1 !== c.Ve.indexOf(a) && (c.dh = !0);
    }
}
function Uh(a) {
    for (var b = 0; b < Ph.length; ++b) {
        var c = Ph[b];
        if (c.dh) {
            c.dh = !1;
            try {
                c.$i({
                    consentEventId: a
                });
            } catch (d) {}
        }
    }
}
var Wh = (a) => {
    var b = Qh().entries[a] || {};
    return void 0 !== b.update ? b.update : b.initial;
};
var Xh = (a) => (Qh().entries[a] || {}).initial;
var Yh = (a) => !(Qh().entries[a] || {}).quiet;
var Zh = () => (Oh(Ih) ? Qh().active : !1);
var $h = () => Qh().usedDefault;
var ai = (a, b) => {
    Qh().addListener(a, b);
};
var bi = (a) => {
    Qh().notifyListeners(a);
};
var ci = (a, b) => {
    function c() {
        for (var e = 0; e < b.length; e++)
            if (!Yh(b[e])) return !0;
        return !1;
    }
    if (c()) {
        var d = !1;
        ai(b, (e) => {
            d || c() || ((d = !0), a(e));
        });
    } else a({});
};
var di = (a, b) => {
    function c() {
        for (var f = [], g = 0; g < d.length; g++) {
            var h = d[g];
            !1 === Wh(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
    }
    var d = Ga(b) ? [b] : b,
        e = {};
    c().length !== d.length &&
        ai(d, (f) => {
            var g = c();
            0 < g.length && ((f.Ve = g), a(f));
        });
};
function ei() {}
function fi() {}
function gi(a) {
    for (var b = [], c = 0; c < hi.length; c++) {
        var d = a(hi[c]);
        b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
    }
    return b.join('');
}
var hi = [R.D, R.I];
var ii = (a) => {
var b = a[R.Yd];
b && Ug(40);
var c = a[R.Ef];
c && Ug(41);
for (
    var d = Ia(b) ? b : [b],
        e = {
            hc: 0 = {};e.hc < d.length;e = {
                hc: e.hc
            },
            ++e.hc
        )
    Oa(
        a,
        ((f) => (g, h) => {
            if (g !== R.Yd && g !== R.Ef) {
                var k = d[f.hc];
                Qh().set(g, h, k, 'US', 'US-NJ', c);
            }
        })(e)
    );
};
var ji = 0;
var ki = (a, b) => {
    Oa(a, (e, f) => {
        Qh().update(e, f);
    });
    bi(b);
    var c = ab(),
        d = c - ji;
    ji && 0 <= d && 1e3 > d && Ug(66);
    ji = c;
};
var li = (a) => {
    var b = Wh(a);
    return void 0 != b ? b : !0;
};
var mi = () => 'G1' + gi(Wh);
var ni = () => 'G1' + gi(Xh);
var oi = (a, b) => {
    ai(a, b);
};
var pi = (a, b) => {
    di(a, b);
};
var qi = (a, b) => {
    ci(a, b);
};
var si = (a) => (ri ? H.querySelectorAll(a) : null);
var ti = (a, b) => {
    if (!ri) return null;
    if (Element.prototype.closest)
        try {
            return a.closest(b);
        } catch (e) {
            return null;
        }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
        d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
        try {
            if (c.call(d, b)) return d;
        } catch (e) {
            break;
        }
        d = d.parentElement || d.parentNode;
    } while (null !== d && 1 === d.nodeType);
    return null;
};
var ui = !1;
if (H.querySelectorAll)
    try {
        var vi = H.querySelectorAll(':root');
        vi && 1 == vi.length && vi[0] == H.documentElement && (ui = !0);
    } catch (a) {}
var ri = ui;
var wi = (a) => (void 0 === a || null === a ? '' : Ga(a) ? Wa(String(a)) : 'e0');
var yi = (a) => a.replace(xi, '');
var Ai = (a) => zi(a.replace(/\s/g, ''));
var zi = (a) => Wa(a.replace(Bi, '').toLowerCase());
var Di = (a) => {
    a = a.replace(/[\s-()/.]/g, '');
    '+' !== a.charAt(0) && (a = '+' + a);
    return Ci.test(a) ? a : 'e0';
};
var Fi = (a) => {
    var b = a.toLowerCase().split('@');
    if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
        c = c + '@' + b[1];
        if (Ei.test(c)) return c;
    }
    return 'e0';
};
var Ii = (a, b) => {
    window.Promise || b([]);
    Promise.all(
            a.map((c) =>
                c.value && -1 !== Gi.indexOf(c.name) ?
                Hi(c.value).then((d) => {
                    c.value = d;
                }) :
                Promise.resolve()
            )
        )
        .then(() => {
            b(a);
        })
        .catch(() => {
            b([]);
        });
};
var Hi = (a) => {
    if ('' === a || 'e0' === a) return Promise.resolve(a);
    if (m.crypto && m.crypto.subtle)
        try {
            var b = Ji(a);
            return m.crypto.subtle
                .digest('SHA-256', b)
                .then((c) => {
                    var d = Array.from(new Uint8Array(c))
                        .map((e) => String.fromCharCode(e))
                        .join('');
                    return m.btoa(d).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
                })
                .catch(() => 'e2');
        } catch (c) {
            return Promise.resolve('e2');
        }
    else return Promise.resolve('e1');
};
var Ji = (a) => {
    var b;
    if (m.TextEncoder) b = new m.TextEncoder('utf-8').encode(a);
    else {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ?
                c.push(e) :
                2048 > e ?
                c.push(192 | (e >> 6), 128 | (e & 63)) :
                55296 > e || 57344 <= e ?
                c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63)) :
                ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
                    c.push(240 | (e >> 18), 128 | ((e >> 12) & 63), 128 | ((e >> 6) & 63), 128 | (e & 63)));
        }
        b = new Uint8Array(c);
    }
    return b;
};
var Bi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g;
var Ei = /^\S+@\S+\.\S+$/;
var Ci = /^\+\d{11,15}$/;
var xi = /[.~]/g;
var Ki = {};
var Li =
    ((Ki.email = 'em'),
        (Ki.phone_number = 'pn'),
        (Ki.first_name = 'fn'),
        (Ki.last_name = 'ln'),
        (Ki.street = 'sa'),
        (Ki.city = 'ct'),
        (Ki.region = 'rg'),
        (Ki.country = 'co'),
        (Ki.postal_code = 'pc'),
        (Ki.error_code = 'ec'),
        Ki);
var Mi = (a, b) => {
    function c(n, p, r) {
        var t = n[p];
        Ia(t) || (t = [t]);
        for (var u = 0; u < t.length; ++u) {
            var q = wi(t[u]);
            '' !== q &&
                f.push({
                    name: p,
                    value: r(q),
                    index: void 0
                });
        }
    }
    function d(n, p, r, t) {
        var u = wi(n[p]);
        '' !== u &&
            f.push({
                name: p,
                value: r(u),
                index: t
            });
    }
    function e(n) {
        return (p) => {
            Ug(64);
            return n(p);
        };
    }
    var f = [];
    if ('https:' === m.location.protocol) {
        c(a, 'email', Fi);
        c(a, 'phone_number', Di);
        c(a, 'first_name', e(Ai));
        c(a, 'last_name', e(Ai));
        var g = a.home_address || {};
        c(g, 'street', e(zi));
        c(g, 'city', e(zi));
        c(g, 'postal_code', e(yi));
        c(g, 'region', e(zi));
        c(g, 'country', e(yi));
        var h = a.address || {};
        Ia(h) || (h = [h]);
        for (var k = 0; k < h.length; k++)
            d(h[k], 'first_name', Ai, k),
            d(h[k], 'last_name', Ai, k),
            d(h[k], 'street', zi, k),
            d(h[k], 'city', zi, k),
            d(h[k], 'postal_code', yi, k),
            d(h[k], 'region', zi, k),
            d(h[k], 'country', yi, k);
        Ii(f, b);
    } else
        f.push({
            name: 'error_code',
            value: 'e3',
            index: void 0
        }),
        b(f);
};
var Ni = (a, b) => {
    Mi(a, (c) => {
        for (var d = ['tv.1'], e = 0, f = 0; f < c.length; ++f) {
            var g = c[f].name,
                h = c[f].value,
                k = c[f].index,
                n = Li[g];
            n && h && (-1 === Gi.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + '.' + h), e++);
        }
        1 === c.length && 'error_code' === c[0].name && (e = 0);
        b(encodeURIComponent(d.join('~')), e);
    });
};
var Oi = (a) => {
    if (m.Promise)
        try {
            return new Promise((b) => {
                Ni(a, (c, d) => {
                    b({
                        Pc: c,
                        uk: d
                    });
                });
            });
        } catch (b) {}
};
var Gi = Object.freeze(['email', 'phone_number', 'first_name', 'last_name', 'street']);
var Pi = function() {
    this.eventModel = {};
    this.targetConfig = {};
    this.containerConfig = {};
    this.globalConfig = {};
    this.remoteConfig = {};
    this.onSuccess = () => {};
    this.onFailure = () => {};
    this.setContainerTypeLoaded = () => {};
    this.getContainerTypeLoaded = () => {};
    this.eventId = void 0;
    this.isGtmEvent = !1;
};
var Qi = (a) => {
    var b = new Pi();
    b.eventModel = a;
    return b;
};
var Ri = (a, b) => {
    a.targetConfig = b;
    return a;
};
var Si = (a, b) => {
    a.containerConfig = b;
    return a;
};
var Ti = (a, b) => {
    a.globalConfig = b;
    return a;
};
var Ui = (a, b) => {
    a.remoteConfig = b;
    return a;
};
var Vi = (a, b) => {
    a.onSuccess = b;
    return a;
};
var Wi = (a, b) => {
    a.setContainerTypeLoaded = b;
    return a;
};
var Xi = (a, b) => {
    a.getContainerTypeLoaded = b;
    return a;
};
var Yi = (a, b) => {
    a.onFailure = b;
    return a;
};
Pi.prototype.getWithConfig = function(a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
};
var Zi = (a) => {
    function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
    }
    var c = {};
    b(a.eventModel);
    b(a.targetConfig);
    b(a.containerConfig);
    b(a.globalConfig);
    return Object.keys(c);
};
var $i = (a, b, c) => {
    function d(g) {
        Fc(g) &&
            Oa(g, (h, k) => {
                f = !0;
                e[h] = k;
            });
    }
    var e = {},
        f = !1;
    (c && 1 !== c) || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
    (c && 2 !== c) || d(a.eventModel[b]);
    return f ? e : void 0;
};
var aj = (a) => {
    var b = [R.oc, R.Nf, R.Of, R.Pf, R.Qf, R.Rf, R.Sf],
        c = {},
        d = !1,
        e = (f) => {
            for (var g = 0; g < b.length; g++) void 0 !== f[b[g]] && ((c[b[g]] = f[b[g]]), (d = !0));
            return d;
        };
    if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
    e(a.remoteConfig);
    return c;
};
var bj = (a) => {
    var b = [],
        c;
    for (c in a.eventModel) c !== R.Wb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
    return b;
};
var cj;
var dj = !1;
function ej() {
    dj = !0;
    cj = cj || {};
}
var fj = (a) => {
    dj || ej();
    return cj[a];
};
var gj = (a) => {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
    var c = m.getComputedStyle(a, null);
    if ('hidden' === c.visibility) return !0;
    for (var d = a, e = c; d;) {
        if ('none' === e.display) return !0;
        var f = e.opacity;
        var g = e.filter;
        if (g) {
            var h = g.indexOf('opacity(');
            0 <= h &&
                ((g = g.substring(h + 8, g.indexOf(')', h))), '%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = m.getComputedStyle(d, null));
    }
    return !1;
};
var hj = () => {
    var a = H.body,
        b = H.documentElement || (a && a.parentElement),
        c,
        d;
    if (H.compatMode && 'BackCompat' !== H.compatMode)(c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
    else {
        var e = (f, g) => (f && g ? Math.min(f, g) : Math.max(f, g));
        Ug(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
    }
    return {
        width: d,
        height: c
    };
};
var ij = (a) => {
    var b = hj(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
    return f && g ?
        (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) *
        (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) :
        0;
};
var pj = /:[0-9]+$/;
var qj = (a, b, c, d) => {
    for (var e = [], f = a.split('&'), g = 0; g < f.length; g++) {
        var h = f[g].split('=');
        if (decodeURIComponent(h[0]).replace(/\+/g, ' ') === b) {
            var k = h.slice(1).join('=');
            if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, ' ');
            e.push(d ? k : decodeURIComponent(k).replace(/\+/g, ' '));
        }
    }
    return c ? e : void 0;
};
var tj = (a, b, c, d, e) => {
    b && (b = String(b).toLowerCase());
    if ('protocol' === b || 'port' === b) a.protocol = rj(a.protocol) || rj(m.location.protocol);
    'port' === b
        ?
        (a.port = String(Number(a.hostname ? a.port : m.location.port) || ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : ''))) :
        'host' === b && (a.hostname = (a.hostname || m.location.hostname).replace(pj, '').toLowerCase());
    return sj(a, b, c, d, e);
};
var sj = (a, b, c, d, e) => {
    var f,
        g = rj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
        case 'url_no_fragment':
            f = uj(a);
            break;
        case 'protocol':
            f = g;
            break;
        case 'host':
            f = a.hostname.replace(pj, '').toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length));
            }
            break;
        case 'port':
            f = String(Number(a.port) || ('http' == g ? 80 : 'https' == g ? 443 : ''));
            break;
        case 'path':
            a.pathname || a.hostname || Sg('TAGGING', 1);
            f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
            var k = f.split('/');
            0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = '');
            f = k.join('/');
            break;
        case 'query':
            f = a.search.replace('?', '');
            e && (f = qj(f, e, !1, void 0));
            break;
        case 'extension':
            var n = a.pathname.split('.');
            f = 1 < n.length ? n[n.length - 1] : '';
            f = f.split('/')[0];
            break;
        case 'fragment':
            f = a.hash.replace('#', '');
            break;
        default:
            f = a && a.href;
    }
    return f;
};
var rj = (a) => (a ? a.replace(':', '').toLowerCase() : '');
var uj = (a) => {
    var b = '';
    if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
    }
    return b;
};
var vj = (a) => {
    var b = H.createElement('a');
    a && (b.href = a);
    var c = b.pathname;
    '/' !== c[0] && (a || Sg('TAGGING', 1), (c = '/' + c));
    var d = b.hostname.replace(pj, '');
    return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
    };
};
var wj = (a) => {
    function b(n) {
        var p = n.split('=')[0];
        return 0 > d.indexOf(p) ? n : p + '=0';
    }
    function c(n) {
        return n
            .split('&')
            .map(b)
            .filter((p) => void 0 != p)
            .join('&');
    }
    var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '),
        e = vj(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
    '?' === g[0] && (g = g.substring(1));
    '#' === h[0] && (h = h.substring(1));
    g = c(g);
    h = c(h);
    '' !== g && (g = '?' + g);
    '' !== h && (h = '#' + h);
    var k = '' + f + g + h;
    '/' === k[k.length - 1] && (k = k.substring(0, k.length - 1));
    return k;
};
var xj = {};
var Aj = (a) => {
    if (0 == a.length) return null;
    var b;
    b = yj(a, (c) => !zj.test(c.La));
    b = yj(b, (c) => 'INPUT' === c.element.tagName.toUpperCase());
    b = yj(b, (c) => !gj(c.element));
    return b[0];
};
var yj = (a, b) => {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
};
var Bj = (a) => {
    var b;
    if (a === H.body) b = 'body';
    else {
        var c;
        if (a.id) c = '#' + a.id;
        else {
            var d;
            if (a.parentElement) {
                var e;
                a: {
                    var f = a.parentElement;
                    if (f) {
                        for (var g = 0; g < f.childElementCount; g++)
                            if (f.children[g] === a) {
                                e = g + 1;
                                break a;
                            }
                        e = -1;
                    } else e = 1;
                }
                d = Bj(a.parentElement) + '>:nth-child(' + e + ')';
            } else d = '';
            c = d;
        }
        b = c;
    }
    return b;
};
var Cj = !0;
var Dj = !1;
xj.Ah = 'true';
var Ej = (a) => {
    if ('false' === xj.Ah || !Cj) return !1;
    if (Dj) return !0;
    var b = fj('AW-' + a);
    return !!b && !!b.preAutoPii;
};
var Fj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
var Gj = new RegExp(/@(gmail|googlemail)\./i);
var zj = new RegExp(/support|noreply/i);
var Hj = 'SCRIPT STYLE IMG SVG PATH BR'.split(' ');
var Ij = ['BR'];
var Jj = {};
var Kj = (a) => {
    a = a || {
        Pd: !0,
        Qd: !0
    };
    a.lb = a.lb || {
        email: !0,
        phone: !0,
        Bg: !0
    };
    var b,
        c = a,
        d = !!c.Pd + '.' + !!c.Qd;
    c && c.Fc && c.Fc.length && (d += '.' + c.Fc.join('.'));
    c && c.lb && (d += '.' + c.lb.email + '.' + c.lb.phone + '.' + c.lb.Bg);
    b = d;
    var e = Jj[b];
    if (e && 200 > ab() - e.timestamp) return e.result;
    var f;
    var g = [],
        h = H.body;
    if (h) {
        for (var k = h.querySelectorAll('*'), n = 0; n < k.length && 1e4 > n; n++) {
            var p = k[n];
            if (!(0 <= Hj.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                for (var r = !1, t = 0; t < p.childElementCount && 1e4 > t; t++)
                    if (!(0 <= Ij.indexOf(p.children[t].tagName.toUpperCase()))) {
                        r = !0;
                        break;
                    }
                r || g.push(p);
            }
        }
        f = {
            elements: g,
            status: 1e4 < k.length ? '2' : '1'
        };
    } else
        f = {
            elements: g,
            status: '4'
        };
    var u = f,
        q = u.status,
        v;
    if (a.lb && a.lb.email) {
        for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
            var z = w[x],
                A = z.textContent;
            'INPUT' === z.tagName.toUpperCase() && z.value && (A = z.value);
            if (A) {
                var C = A.match(Fj);
                if (C) {
                    var E = C[0],
                        D;
                    if (m.location) {
                        var F = sj(m.location, 'host', !0);
                        D = 0 <= E.toLowerCase().indexOf(F);
                    } else D = !1;
                    D ||
                        y.push({
                            element: z,
                            La: E
                        });
                }
            }
        }
        var N;
        var M = a && a.Fc;
        if (M && 0 !== M.length) {
            for (var P = [], O = 0; O < y.length; O++) {
                for (var K = !0, L = 0; L < M.length; L++) {
                    var T = M[L];
                    if (T && ti(y[O].element, T)) {
                        K = !1;
                        break;
                    }
                }
                K && P.push(y[O]);
            }
            N = P;
        } else N = y;
        v = Aj(N);
        10 < y.length && (q = '3');
    }
    var Z = [];
    if (v) {
        var ia = v.element,
            Da = {
                La: v.La,
                tagName: ia.tagName,
                type: 1
            };
        a.Pd && (Da.querySelector = Bj(ia));
        a.Qd && (Da.isVisible = !gj(ia));
        Z.push(Da);
    }
    var Ba = {
        elements: Z,
        status: q
    };
    Jj[b] = {
        timestamp: ab(),
        result: Ba
    };
    return Ba;
};
var Lj = (a) => a.tagName + ':' + a.isVisible + ':' + a.La.length + ':' + Gj.test(a.La);
var Mj = (a, b, c) => {
    if (c) {
        var d = c.selector_type,
            e = String(c.value),
            f;
        if ('js_variable' === d) {
            e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
            for (var g = e.split(','), h = 0; h < g.length; h++) {
                var k = g[h].trim();
                if (k) {
                    if (0 === k.indexOf('dataLayer.')) f = oh(k.substring(10));
                    else {
                        var n = k.split('.');
                        f = m[n.shift()];
                        for (var p = 0; p < n.length; p++) f = f && f[n[p]];
                    }
                    if (void 0 !== f) break;
                }
            }
        } else if ('css_selector' === d && ri) {
            var r = si(e);
            r && 0 < r.length && (f = kc(r[0]) || Wa(r[0].value));
        }
        f && (a[b] = f);
    }
};
var Nj = (a) => {
    if (a) {
        var b = {};
        Mj(b, 'email', a.email);
        Mj(b, 'phone_number', a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
            var e = {};
            Mj(e, 'first_name', c[d].first_name);
            Mj(e, 'last_name', c[d].last_name);
            Mj(e, 'street', c[d].street);
            Mj(e, 'city', c[d].city);
            Mj(e, 'region', c[d].region);
            Mj(e, 'country', c[d].country);
            Mj(e, 'postal_code', c[d].postal_code);
            b.address.push(e);
        }
        return b;
    }
};
var Oj = (a) => {
    if (a)
        switch (a.mode) {
            case 'selectors':
                return Nj(a.selectors);
            case 'auto_detect':
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = Kj({
                            Pd: !1,
                            Qd: !1,
                            Fc: c.exclude_element_selectors,
                            lb: {
                                email: !!c.email,
                                phone: !!c.phone,
                                Bg: !!c.address
                            }
                        }).elements,
                        e = {};
                    if (0 < d.length)
                        for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            if (1 === g.type) {
                                e.email = g.La;
                                break;
                            }
                        }
                    b = e;
                } else b = void 0;
                return b;
        }
};
var Pj = (a) => {
    switch (a.enhanced_conversions_mode) {
        case 'manual':
            var b = a.enhanced_conversions_manual_var;
            return void 0 !== b ? b : m.enhanced_conversion_data;
        case 'automatic':
            return Nj(a[R.Xf]);
    }
};
var Qj = {};
var Rj = (a, b) => {
    if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
    void 0 === Qj[a] && (Qj[a] = Math.floor(Math.random() * b));
    return Qj[a];
};
var Sj = (a) => {
    var b = 1;
    var c;
    var d;
    var e;
    if (a)
        for (b = 0, d = a.length - 1; 0 <= d; d--)
            (e = a.charCodeAt(d)), (b = ((b << 6) & 268435455) + e + (e << 14)), (c = b & 266338304), (b = 0 != c ? b ^ (c >> 21) : b);
    return b;
};
var Tj = (a, b, c) => {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
        var g = e[f].split('=');
        var h = g[0].replace(/^\s*|\s*$/g, '');
        if (h && h == a) {
            var k = g
                .slice(1)
                .join('=')
                .replace(/^\s*|\s*$/g, '');
            k && c && (k = decodeURIComponent(k));
            d.push(k);
        }
    }
    return d;
};
function Uj(a) {
    return 'null' !== a.origin;
}
var Xj = (a, b, c, d) => (Vj(d) ? Tj(a, String(b || Wj()), c) : []);
var ak = (a, b, c, d, e) => {
    if (Vj(e)) {
        var f = Yj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
            f = Zj(f, (g) => g.Hd, b);
            if (1 === f.length) return f[0].id;
            f = Zj(f, (g) => g.Qc, c);
            return f[0] ? f[0].id : void 0;
        }
    }
};
function bk(a, b, c, d) {
    var e = Wj();
    var f = window;
    Uj(f) && (f.document.cookie = a);
    var g = Wj();
    return e != g || (void 0 != c && 0 <= Xj(b, g, !1, d).indexOf(c));
}
var fk = (a, b, c, d) => {
    function e(w, y, x) {
        if (null == x) return delete h[y], w;
        h[y] = x;
        return w + '; ' + y + '=' + x;
    }
    function f(w, y) {
        if (null == y) return delete h[y], w;
        h[y] = !0;
        return w + '; ' + y;
    }
    if (!Vj(c.Ka)) return 2;
    var g;
    void 0 == b ? (g = a + '=deleted; expires=' + new Date(0).toUTCString()) : (c.encode && (b = encodeURIComponent(b)), (b = ck(b)), (g = a + '=' + b));
    var h = {};
    g = e(g, 'path', c.path);
    var k;
    c.expires instanceof Date ? (k = c.expires.toUTCString()) : null != c.expires && (k = '' + c.expires);
    g = e(g, 'expires', k);
    g = e(g, 'max-age', c.yj);
    g = e(g, 'samesite', c.Qj);
    c.Sj && (g = f(g, 'secure'));
    var n = c.domain;
    if (n && 'auto' === n.toLowerCase()) {
        for (var p = dk(), r = void 0, t = !1, u = 0; u < p.length; ++u) {
            var q = 'none' !== p[u] ? p[u] : void 0,
                v = e(g, 'domain', q);
            v = f(v, c.flags);
            try {
                d && d(a, h);
            } catch (w) {
                r = w;
                continue;
            }
            t = !0;
            if (!ek(q, c.path) && bk(v, a, b, c.Ka)) return 0;
        }
        if (r && !t) throw r;
        return 1;
    }
    n && 'none' !== n.toLowerCase() && (g = e(g, 'domain', n));
    g = f(g, c.flags);
    d && d(a, h);
    return ek(n, c.path) ? 1 : bk(g, a, b, c.Ka) ? 0 : 1;
};
var gk = (a, b, c) => {
    null == c.path && (c.path = '/');
    c.domain || (c.domain = 'auto');
    return fk(a, b, c);
};
function Zj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
        var h = a[g];
        var k = b(h);
        k === c ? d.push(h) : void 0 === f || k < f ? ((e = [h]), (f = k)) : k === f && e.push(h);
    }
    return 0 < d.length ? d : e;
}
function Yj(a, b, c) {
    for (var d = [], e = Xj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
        var g = e[f].split('.');
        var h = g.shift();
        if (!b || -1 !== b.indexOf(h)) {
            var k = g.shift();
            k &&
                ((k = k.split('-')),
                    d.push({
                        id: g.join('.'),
                        Hd: 1 * k[0] || 1,
                        Qc: 1 * k[1] || 1
                    }));
        }
    }
    return d;
}
var ck = (a) => {
    a && 1200 < a.length && (a = a.substring(0, 1200));
    return a;
};
var hk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/;
var ik = /(^|\.)doubleclick\.net$/i;
var ek = (a, b) => ik.test(window.document.location.hostname) || ('/' === b && hk.test(a));
var Wj = () => (Uj(window) ? window.document.cookie : '');
var dk = () => {
    var a = [],
        b = window.document.location.hostname.split('.');
    if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ['none'];
    }
    for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
    var e = window.document.location.hostname;
    ik.test(e) || hk.test(e) || a.push('none');
    return a;
};
var Vj = (a) => {
    if (!Oh(Ih) || !a || !Zh()) return !0;
    if (!Yh(a)) return !1;
    var b = Wh(a);
    return null == b ? !0 : !!b;
};
var jk = (a) => {
    var b = Math.round(2147483647 * Math.random()),
        c = b;
    a && (c = b ^ (Sj(a) & 2147483647));
    return [c, Math.round(ab() / 1e3)].join('.');
};
var mk = (a, b, c, d, e) => {
    var f = kk(b);
    return ak(a, f, lk(c), d, e);
};
var nk = (a, b, c, d) => {
    var e = '' + kk(c),
        f = lk(d);
    1 < f && (e += '-' + f);
    return [b, e, a].join('.');
};
var kk = (a) => {
    if (!a) return 1;
    a = 0 === a.indexOf('.') ? a.substr(1) : a;
    return a.split('.').length;
};
var lk = (a) => {
    if (!a || '/' === a) return 1;
    '/' !== a[0] && (a = '/' + a);
    '/' !== a[a.length - 1] && (a += '/');
    return a.split('/').length - 1;
};
function ok(a, b, c) {
    var d;
    var e = Number(null != a.mb ? a.mb : void 0);
    0 !== e && (d = new Date((b || ab()) + 1e3 * (e || 7776e3)));
    return {
        path: a.path,
        domain: a.domain,
        flags: a.flags,
        encode: !!c,
        expires: d
    };
}
var pk = ['1'];
var qk = {};
var tk = (a, b) => {
    b = void 0 === b ? !0 : b;
    var c = rk(a.prefix);
    if (!qk[c] && !sk(c, a.path, a.domain) && b) {
        var d = rk(a.prefix),
            e = jk(),
            f = nk(e, '1', a.domain, a.path),
            g = ok(a, void 0);
        g.Ka = 'ad_storage';
        if (0 === gk(d, f, g)) {
            var h = Yb('google_tag_data', {});
            h._gcl_au ? Sg('GTM', 57) : (h._gcl_au = e);
        }
        sk(c, a.path, a.domain);
    }
};
function sk(a, b, c) {
    var d = mk(a, b, c, pk, 'ad_storage');
    if (!d) return !1;
    var e = d.split('.');
    5 === e.length ? ((qk[a] = e.slice(0, 2).join('.')), e.slice(2, 4).join('.')) : 3 === e.length ? e.slice(0, 2).join('.') : (qk[a] = d);
    return !0;
}
function rk(a) {
    return (a || '_gcl') + '_au';
}
var uk = (a) => {
    for (var b = [], c = H.cookie.split(';'), d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'), e = 0; e < c.length; e++) {
        var f = c[e].match(d);
        f &&
            b.push({
                Bf: f[1],
                value: f[2],
                timestamp: Number(f[2].split('.')[1]) || 0
            });
    }
    b.sort((g, h) => h.timestamp - g.timestamp);
    return b;
};
function vk(a, b) {
    var c = uk(a);
    var d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
        var f = c[e].value.split('.');
        if (!('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
            d[c[e].Bf] || (d[c[e].Bf] = []);
            var g = {
                version: f[0],
                timestamp: 1e3 * Number(f[1]),
                va: f[2]
            };
            b && 3 < f.length && (g.labels = f.slice(3));
            d[c[e].Bf].push(g);
        }
    }
    return d;
}
function wk() {
    for (var a = xk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
}
function yk() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
}
var xk;
var zk;
function Ak(a) {
    xk = xk || yk();
    zk = zk || wk();
    for (var b = [], c = 0; c < a.length; c += 3) {
        var d = c + 1 < a.length;
        var e = c + 2 < a.length;
        var f = a.charCodeAt(c);
        var g = d ? a.charCodeAt(c + 1) : 0;
        var h = e ? a.charCodeAt(c + 2) : 0;
        var k = f >> 2;
        var n = ((f & 3) << 4) | (g >> 4);
        var p = ((g & 15) << 2) | (h >> 6);
        var r = h & 63;
        e || ((r = 64), d || (p = 64));
        b.push(xk[k], xk[n], xk[p], xk[r]);
    }
    return b.join('');
}
function Bk(a) {
    function b(k) {
        for (; d < a.length;) {
            var n = a.charAt(d++);
            var p = zk[n];
            if (null != p) return p;
            if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n);
        }
        return k;
    }
    xk = xk || yk();
    zk = zk || wk();
    for (var c = '', d = 0;;) {
        var e = b(-1);
        var f = b(0);
        var g = b(64);
        var h = b(64);
        if (64 === h && -1 === e) return c;
        c += String.fromCharCode((e << 2) | (f >> 4));
        64 != g && ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))), 64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
}
var Ck;
var Dk = {
    ek: 0,
    pk: 1,
    ik: 2,
    hk: 3
};
var Ek = void 0;
var Ik = () => {
    var a = Fk,
        b = Gk,
        c = Hk(),
        d = (g) => {
            a(g.target || g.srcElement || {});
        },
        e = (g) => {
            b(g.target || g.srcElement || {});
        };
    if (!c.init) {
        fc(H, 'mousedown', d);
        fc(H, 'keyup', d);
        fc(H, 'submit', e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function() {
            b(this);
            f.call(this);
        };
        c.init = !0;
    }
};
var Jk = (a, b, c, d, e) => {
    var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
    };
    Hk().decorators.push(f);
};
var Kk = (a, b, c) => {
    for (var d = Hk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
            h;
        if ((h = !c || g.forms))
            a: {
                var k = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (k && (p || n !== H.location.hostname))
                    for (var r = 0; r < k.length; r++)
                        if (k[r] instanceof RegExp) {
                            if (k[r].test(n)) {
                                h = !0;
                                break a;
                            }
                        } else if (0 <= n.indexOf(k[r]) || (p && 0 <= k[r].indexOf(n))) {
                    h = !0;
                    break a;
                }
                h = !1;
            }
        if (h) {
            var t = g.placement;
            void 0 == t && (t = g.fragment ? 2 : 1);
            t === b && db(e, g.callback());
        }
    }
    return e;
};
function Hk() {
    var a = Yb('google_tag_data', {});
    var b = a.gl;
    (b && b.decorators) ||
    ((b = {
            decorators: []
        }),
        (a.gl = b));
    return b;
}
var Lk = /(.*?)\*(.*?)\*(.*)/;
var Mk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/;
var Nk = /^(?:www\.|m\.|amp\.)+/;
var Ok = /\*?xp_[0-3]\*?/;
var Pk = /([^?#]+)(\?[^#]*)?(#.*)?/;
function Qk(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
}
var Tk = (a, b) => {
    var c = [];
    var d;
    for (d in a)
        if (a.hasOwnProperty(d)) {
            var e = a[d];
            void 0 !== e && e === e && null !== e && '[object Object]' !== e.toString() && (c.push(d), c.push(Ak(String(e))));
        }
    var f = c.join('*');
    if (void 0 !== b) {
        var g = 'xp_' + b;
        var h = Rk[b](f);
        f = [f, g, Ak(String(h))].join('*');
    }
    return ['1', Sk(f), f].join('*');
};
function Sk(a, b) {
    var c = [
        m.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Wb.userLanguage || Wb.language,
        Math.floor(ab() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a
    ].join('*');
    var d;
    if (!(d = Ck)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
            for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
            e[f] = g;
        }
        d = e;
    }
    Ck = d;
    for (var k = 4294967295, n = 0; n < c.length; n++) k = (k >>> 8) ^ Ck[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36);
}
var Uk = {};
var Rk = ((Uk[0] = () => 'BASELINE'), (Uk[1] = Vk), (Uk[2] = Wk), (Uk[3] = Xk), Uk);
function Vk() {
    return 'CHECKSUM_EXP_DISABLED';
}
function Wk() {
    return 'CHECKSUM_EXP_DISABLED';
}
function Yk() {
    Wb.userAgentData && Wb.userAgentData.getHighEntropyValues(['architecture', 'model', 'bitness', 'platformVersion', 'uaFullVersion']).then(() => {});
}
function Xk() {
    return 'CHECKSUM_EXP_DISABLED';
}
function Zk() {
    return (a) => {
        var b = vj(m.location.href);
        var c = b.search.replace('?', '');
        var d = qj(c, '_gl', !1, !0) || '';
        a.query = $k(d) || {};
        var e = tj(b, 'fragment').match(Qk('_gl'));
        a.fragment = $k((e && e[3]) || '') || {};
    };
}
var al = (a) => {
    var b = Zk(),
        c = Hk();
    c.data ||
        ((c.data = {
                query: {},
                fragment: {}
            }),
            b(c.data));
    var d = {},
        e = c.data;
    e && (db(d, e.query), a && db(d, e.fragment));
    return d;
};
var $k = (a) => {
    var b;
    b = void 0 === b ? 3 : b;
    try {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Lk.exec(d);
                    if (f) {
                        c = f;
                        break a;
                    }
                    d = decodeURIComponent(d);
                }
                c = void 0;
            }
            var g = c;
            if (g && '1' === g[1]) {
                var h = g[2],
                    k = g[3],
                    n = null !== k.match(Ok),
                    p;
                a: {
                    for (var r = 0; r < b; ++r)
                        if (h === Sk(k, r)) {
                            p = !0;
                            break a;
                        }
                    p = !1;
                }
                var t = p;
                if (t || n) {
                    for (var u = {}, q = k ? k.split('*') : [], v = 0; v + 1 < q.length; v += 2) {
                        var w = q[v],
                            y = null !== w.match(Ok);
                        if (t || y) {
                            var x = Bk(q[v + 1]);
                            u[w] = x;
                        }
                        if (y) {
                            var z = w.split('_')[1];
                            if (!(Number(z) < Object.keys(Dk).length)) return;
                            var A = b,
                                C = u[w],
                                E = k.slice(0, k.indexOf('*xp')),
                                D = t;
                            if (0 !== Number(z))
                                a: {
                                    var F = C,
                                        N = E,
                                        M = A;
                                    if ('undefined' !== F && 'UA_DATA_NOT_PRESENT' !== F && 'UACH_ACCESSED_TOO_EARLY' !== F)
                                        for (var P = 0; P < M; ++P)
                                            if (F === Rk[z](N, P)) {
                                                D = !0;
                                                break a;
                                            }
                                    D = !1;
                                }
                            u._z = 'uaxp.' + (t ? (D === t ? '' + z + 0 : '' + z + 3) : D === t ? '' + z + 1 : '' + z + 2);
                        }
                    }
                    return u;
                }
            }
        }
    } catch (O) {}
};
function bl(a, b, c, d) {
    function e(p) {
        var r = p;
        var t = Qk(a).exec(r);
        var u = r;
        if (t) {
            var q = t[2];
            var v = t[4];
            u = t[1];
            v && (u = u + q + v);
        }
        p = u;
        var w = p.charAt(p.length - 1);
        p && '&' !== w && (p += '&');
        return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Pk.exec(c);
    if (!f) return '';
    var g = f[1];
    var h = f[2] || '';
    var k = f[3] || '';
    var n = a + '=' + b;
    d ? (k = '#' + e(k.substring(1))) : (h = '?' + e(h.substring(1)));
    return '' + g + h + k;
}
function cl(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase();
    var d = Kk(b, 1, c);
    var e = Kk(b, 2, c);
    var f = Kk(b, 3, c);
    var g = Ek;
    if (eb(d)) {
        var h = Tk(d, g);
        c ? dl('_gl', h, a) : el('_gl', h, a, !1);
    }
    if (!c && eb(e)) {
        var k = Tk(e);
        el('_gl', k, a, !0);
    }
    for (var n in f)
        if (f.hasOwnProperty(n))
            a: {
                var p = n;
                var r = f[n];
                var t = a;
                if (t.tagName) {
                    if ('a' === t.tagName.toLowerCase()) {
                        el(p, r, t, void 0);
                        break a;
                    }
                    if ('form' === t.tagName.toLowerCase()) {
                        dl(p, r, t);
                        break a;
                    }
                }
                'string' == typeof t && bl(p, r, t, void 0);
            }
}
function el(a, b, c, d) {
    if (c.href) {
        var e = bl(a, b, c.href, void 0 === d ? !1 : d);
        Fb.test(e) && (c.href = e);
    }
}
function dl(a, b, c) {
    if (c && c.action) {
        var d = (c.method || '').toLowerCase();
        if ('get' === d) {
            for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                var h = e[g];
                if (h.name === a) {
                    h.setAttribute('value', b);
                    f = !0;
                    break;
                }
            }
            if (!f) {
                var k = H.createElement('input');
                k.setAttribute('type', 'hidden');
                k.setAttribute('name', a);
                k.setAttribute('value', b);
                c.appendChild(k);
            }
        } else if ('post' === d) {
            var n = bl(a, b, c.action);
            Fb.test(n) && (c.action = n);
        }
    }
}
function Fk(a) {
    try {
        var b;
        a: {
            for (var c = a, d = 100; c && 0 < d;) {
                if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                    b = c;
                    break a;
                }
                c = c.parentNode;
                d--;
            }
            b = null;
        }
        var e = b;
        if (e) {
            var f = e.protocol;
            ('http:' !== f && 'https:' !== f) || cl(e, e.hostname);
        }
    } catch (g) {}
}
function Gk(a) {
    try {
        if (a.action) {
            var b = tj(vj(a.action), 'host');
            cl(a, b);
        }
    } catch (c) {}
}
var fl = (a, b, c, d, e) => {
    Ik();
    void 0 !== e && (Ek = e);
    3 === e && Yk();
    Jk(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
};
var gl = (a, b) => {
    Ik();
    Jk(a, [sj(m.location, 'host', !0)], b, !0, !0);
};
var hl = () => {
    var a = H.location.hostname,
        b = Mk.exec(H.referrer);
    if (!b) return !1;
    var c = b[2],
        d = b[1],
        e = '';
    if (c) {
        var f = c.split('/'),
            g = f[1];
        e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
        if (0 === d.indexOf('xn--')) return !1;
        e = d.replace(/-/g, '.').replace(/\.\./g, '-');
    }
    var h = a.replace(Nk, ''),
        k = e.replace(Nk, ''),
        n;
    if (!(n = h === k)) {
        var p = '.' + k;
        n = h.substring(h.length - p.length, h.length) === p;
    }
    return n;
};
var il = (a, b) => (!1 === a ? !1 : a || b || hl());
var jl = {};
var kl = /^\w+$/;
var ll = /^[\w-]+$/;
var ml = {
    aw: '_aw',
    dc: '_dc',
    gf: '_gf',
    ha: '_ha',
    gp: '_gp',
    gb: '_gb'
};
var nl = () => {
    if (!Oh(Ih) || !Zh()) return !0;
    var a = Wh('ad_storage');
    return null == a ? !0 : !!a;
};
var ol = (a, b) => {
    Yh('ad_storage') ?
        nl() ?
        a() :
        di(a, 'ad_storage') :
        b ?
        Sg('TAGGING', 3) :
        ci(() => {
            ol(a, !0);
        }, ['ad_storage']);
};
var ql = (a) => pl(a).map((b) => b.va);
var pl = (a) => {
    var b = [];
    if (!Uj(m) || !H.cookie) return b;
    var c = Xj(a, H.cookie, void 0, 'ad_storage');
    if (!c || 0 == c.length) return b;
    for (
        var d = {}, e = 0; e < c.length; d = {
            $c: d.$c
        },
        e++
    ) {
        var f = rl(c[e]);
        if (null != f) {
            var g = f,
                h = g.version;
            d.$c = g.va;
            var k = g.timestamp,
                n = g.labels,
                p = Ja(
                    b,
                    (
                        (r) => (t) =>
                        t.va === r.$c
                    )(d)
                );
            p
                ?
                ((p.timestamp = Math.max(p.timestamp, k)), (p.labels = sl(p.labels, n || []))) :
                b.push({
                    version: h,
                    va: d.$c,
                    timestamp: k,
                    labels: n
                });
        }
    }
    b.sort((r, t) => t.timestamp - r.timestamp);
    return tl(b);
};
function sl(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)(c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
}
function ul(a) {
    return a && 'string' == typeof a && a.match(kl) ? a : '_gcl';
}
var wl = () => {
    var a = vj(m.location.href),
        b = tj(a, 'query', !1, void 0, 'gclid'),
        c = tj(a, 'query', !1, void 0, 'gclsrc'),
        d = tj(a, 'query', !1, void 0, 'wbraid'),
        e = tj(a, 'query', !1, void 0, 'dclid');
    if (!b || !c || !d) {
        var f = a.hash.replace('#', '');
        b = b || qj(f, 'gclid', !1, void 0);
        c = c || qj(f, 'gclsrc', !1, void 0);
        d = d || qj(f, 'wbraid', !1, void 0);
    }
    return vl(b, c, e, d);
};
var vl = (a, b, c, d) => {
    var e = {},
        f = (g, h) => {
            e[h] || (e[h] = []);
            e[h].push(g);
        };
    e.gclid = a;
    e.gclsrc = b;
    e.dclid = c;
    void 0 !== d && ll.test(d) && ((e.gbraid = d), f(d, 'gb'));
    if (void 0 !== a && a.match(ll))
        switch (b) {
            case void 0:
                f(a, 'aw');
                break;
            case 'aw.ds':
                f(a, 'aw');
                f(a, 'dc');
                break;
            case 'ds':
                f(a, 'dc');
                break;
            case '3p.ds':
                f(a, 'dc');
                break;
            case 'gf':
                f(a, 'gf');
                break;
            case 'ha':
                f(a, 'ha');
        }
    c && f(c, 'dc');
    return e;
};
var yl = (a) => {
    var b = wl();
    ol(() => {
        xl(b, !1, a);
    });
};
function xl(a, b, c, d, e) {
    function f(w, y) {
        var x = zl(w, g);
        x && (gk(x, y, h), (k = !0));
    }
    c = c || {};
    e = e || [];
    var g = ul(c.prefix);
    d = d || ab();
    var h = ok(c, d, !0);
    h.Ka = 'ad_storage';
    var k = !1;
    var n = Math.round(d / 1e3);
    var p = (w) => {
        var y = ['GCL', n, w];
        0 < e.length && y.push(e.join('.'));
        return y.join('.');
    };
    a.aw && f('aw', p(a.aw[0]));
    a.dc && f('dc', p(a.dc[0]));
    a.gf && f('gf', p(a.gf[0]));
    a.ha && f('ha', p(a.ha[0]));
    a.gp && f('gp', p(a.gp[0]));
    if ((void 0 == jl.enable_gbraid_cookie_write ? 0 : jl.enable_gbraid_cookie_write) && !k && a.gb) {
        var r = a.gb[0];
        var t = zl('gb', g);
        var u = !1;
        if (!b)
            for (var q = pl(t), v = 0; v < q.length; v++) q[v].va === r && q[v].labels && 0 < q[v].labels.length && (u = !0);
        u || f('gb', p(r));
    }
}
var Bl = (a, b) => {
    var c = al(!0);
    ol(() => {
        for (var d = ul(b.prefix), e = 0; e < a.length; ++e) {
            var f = a[e];
            if (void 0 !== ml[f]) {
                var g = zl(f, d),
                    h = c[g];
                if (h) {
                    var k = Math.min(Al(h), ab()),
                        n;
                    b: {
                        var p = k;
                        if (Uj(m))
                            for (var r = Xj(g, H.cookie, void 0, 'ad_storage'), t = 0; t < r.length; ++t)
                                if (Al(r[t]) > p) {
                                    n = !0;
                                    break b;
                                }
                        n = !1;
                    }
                    if (!n) {
                        var u = ok(b, k, !0);
                        u.Ka = 'ad_storage';
                        gk(g, h, u);
                    }
                }
            }
        }
        xl(vl(c.gclid, c.gclsrc), !1, b);
    });
};
var zl = (a, b) => {
    var c = ml[a];
    if (void 0 !== c) return b + c;
};
var Al = (a) => (0 !== Cl(a.split('.')).length ? 1e3 * (Number(a.split('.')[1]) || 0) : 0);
function rl(a) {
    var b = Cl(a.split('.'));
    return 0 === b.length ?
        null : {
            version: b[0],
            va: b[2],
            timestamp: 1e3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        };
}
function Cl(a) {
    return 3 > a.length || ('GCL' !== a[0] && '1' !== a[0]) || !/^\d+$/.test(a[1]) || !ll.test(a[2]) ? [] : a;
}
var Dl = (a, b, c, d, e) => {
    if (Ia(b) && Uj(m)) {
        var f = ul(e),
            g = () => {
                for (var h = {}, k = 0; k < a.length; ++k) {
                    var n = zl(a[k], f);
                    if (n) {
                        var p = Xj(n, H.cookie, void 0, 'ad_storage');
                        p.length && (h[n] = p.sort()[p.length - 1]);
                    }
                }
                return h;
            };
        ol(() => {
            fl(g, b, c, d);
        });
    }
};
var tl = (a) => a.filter((b) => ll.test(b.va));
var El = (a, b) => {
    if (Uj(m)) {
        for (var c = ul(b.prefix), d = {}, e = 0; e < a.length; e++) ml[a[e]] && (d[a[e]] = ml[a[e]]);
        ol(() => {
            Oa(d, (f, g) => {
                var h = Xj(c + g, H.cookie, void 0, 'ad_storage');
                h.sort((u, q) => Al(q) - Al(u));
                if (h.length) {
                    var k = h[0],
                        n = Al(k),
                        p = 0 !== Cl(k.split('.')).length ? k.split('.').slice(3) : [],
                        r = {},
                        t;
                    t = 0 !== Cl(k.split('.')).length ? k.split('.')[2] : void 0;
                    r[f] = [t];
                    xl(r, !0, b, n, p);
                }
            });
        });
    }
};
function Fl(a, b) {
    for (var c = 0; c < b.length; ++c)
        if (a[b[c]]) return !0;
    return !1;
}
var Gl = (a) => {
    function b(e, f, g) {
        g && (e[f] = g);
    }
    if (Zh()) {
        var c = wl();
        if (Fl(c, a)) {
            var d = {};
            b(d, 'gclid', c.gclid);
            b(d, 'dclid', c.dclid);
            b(d, 'gclsrc', c.gclsrc);
            b(d, 'wbraid', c.gbraid);
            gl(() => d, 3);
            gl(() => {
                var e = {};
                return (e._up = '1'), e;
            }, 1);
        }
    }
};
function Hl(a, b) {
    var c = ul(b);
    var d = zl(a, c);
    if (!d) return 0;
    for (var e = pl(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
}
function Il(a) {
    var b = 0;
    var c;
    for (c in a)
        for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
}
var dm = !1;
var em = 0;
var fm = [];
function gm(a) {
    if (!dm) {
        var b = H.createEventObject;
        var c = 'complete' == H.readyState;
        var d = 'interactive' == H.readyState;
        if (!a || 'readystatechange' != a.type || c || (!b && d)) {
            dm = !0;
            for (var e = 0; e < fm.length; e++) I(fm[e]);
        }
        fm.push = function(...args) {
            for (var f = 0; f < args.length; f++) I(args[f]);
            return 0;
        };
    }
}
function hm() {
    if (!dm && 140 > em) {
        em++;
        try {
            H.documentElement.doScroll('left'), gm();
        } catch (a) {
            m.setTimeout(hm, 50);
        }
    }
}
var im = (a) => {
    dm ? a() : fm.push(a);
};
var km = function(a, b) {
    this.g = !1;
    this.C = [];
    this.F = {
        tags: []
    };
    this.N = !1;
    this.o = this.s = 0;
    jm(this, a, b);
};
var lm = (a, b, c, d) => {
    if (Yg.hasOwnProperty(b) || '__zone' === b) return -1;
    var e = {};
    Fc(d) && (e = Gc(d, e));
    e.id = c;
    e.status = 'timeout';
    return a.F.tags.push(e) - 1;
};
var mm = (a, b, c, d) => {
    var e = a.F.tags[b];
    e && ((e.status = c), (e.executionTime = d));
};
var nm = (a) => {
    if (!a.g) {
        for (var b = a.C, c = 0; c < b.length; c++) b[c]();
        a.g = !0;
        a.C.length = 0;
    }
};
var jm = (a, b, c) => {
    Ea(b) && a.Ac(b);
    c && m.setTimeout(() => nm(a), Number(c));
};
km.prototype.Ac = function(a) {
    var b = this;
    var c = cb(() =>
        I(() => {
            a(J.J, b.F);
        })
    );
    this.g ? c() : this.C.push(c);
};
var om = (a) => {
    a.s++;
    return cb(() => {
        a.o++;
        a.N && a.o >= a.s && nm(a);
    });
};
var pm = () => {
    function a(d) {
        return !Ha(d) || 0 > d ? 0 : d;
    }
    if (!Vg._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
            c = Ha(ph.get('gtm.start')) ? ph.get('gtm.start') : 0;
        Vg._li = {
            cst: a(c - b),
            cbt: a(dh - b)
        };
    }
};
var qm = (a) => {
    m.performance && m.performance.mark(J.J + '_' + a + '_start');
};
var rm = (a) => {
    if (m.performance) {
        var b = J.J + '_' + a + '_start',
            c = J.J + '_' + a + '_duration';
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = Vg._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Vg._p = e));
        return d.duration;
    }
};
var sm = () => {
    if (m.performance && m.performance.now) {
        var a = Vg._p || {};
        a.PAGEVIEW = m.performance.now();
        Vg._p = a;
    }
};
var tm = {};
var um = () => m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
var vm = !1;
function zm() {
    return m.GoogleAnalyticsObject || 'ga';
}
var Am = (a) => {};
var Bm = (a, b) => () => {
    var c = um(),
        d = c && c.getByName && c.getByName(a);
    if (d) {
        var e = d.get('sendHitTask');
        d.set('sendHitTask', (f) => {
            var g = f.get('hitPayload'),
                h = f.get('hitCallback'),
                k = 0 > g.indexOf('&tid=' + b);
            k && (f.set('hitPayload', g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0), f.set('hitCallback', void 0, !0));
            e(f);
            k && (f.set('hitPayload', g, !0), f.set('hitCallback', h, !0), f.set('_x_19', void 0, !0), e(f));
        });
    }
};
var Im = (a) => {};
var Mm = (a) => {};
var Nm = () => '&tc=' + Xe.filter((a) => a).length;
var Qm = () => {
    2022 <= Om().length && Pm();
};
var Rm = (a) => (0 === a.indexOf('gtm.') ? encodeURIComponent(a) : '*');
var Tm = () => {
    Sm || (Sm = m.setTimeout(Pm, 500));
};
var Pm = () => {
    Sm && (m.clearTimeout(Sm), (Sm = void 0));
    void 0 === Um ||
        (Vm[Um] && !Wm && !Xm) ||
        (Ym[Um] || Zm.pj() || 0 >= $m-- ? (Ug(1), (Ym[Um] = !0)) : (Zm.Lj(), ec(Om(!0)), (Vm[Um] = !0), (an = bn = cn = Xm = Wm = '')));
};
var Om = (a) => {
    var b = Um;
    if (void 0 === b) return '';
    var c = Tg('GTM'),
        d = Tg('TAGGING');
    return [dn, Vm[b] ? '' : '&es=1', en[b], Im(b), c ? '&u=' + c : '', d ? '&ut=' + d : '', Nm(), Wm, Xm, cn, bn, Mm(a), an, '&z=0'].join('');
};
var gn = () => {
    dn = fn();
};
var fn = () => [eh, '&v=3&t=t', '&pid=' + Ka(), '&rv=' + J.yd].join('');
var Lm = ['L', 'S', 'Y'];
var Hm = ['S', 'E'];
var hn = {
    sampleRate: '0.005000',
    wh: '',
    vh: Number('5')
};
var jn = 0 <= H.location.search.indexOf('?gtm_latency=') || 0 <= H.location.search.indexOf('&gtm_latency=');
var kn;
if (!(kn = jn)) {
    var ln = Math.random();
    var mn = hn.sampleRate;
    kn = ln < mn;
}
var nn = kn;
var on = {
    label: J.J + ' Container',
    children: [{
        label: 'Initialization',
        children: []
    }]
};
var dn = fn();
var Vm = {};
var Wm = '';
var Xm = '';
var an = '';
var bn = '';
var Km = {};
var Jm = !1;
var Gm = {};
var pn = {};
var cn = '';
var Um = void 0;
var en = {};
var Ym = {};
var Sm = void 0;
var qn = 5;
0 < hn.vh && (qn = hn.vh);
var Zm = ((a, b) => {
    for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
    return {
        pj() {
            return c < a ? !1 : ab() - d[c % a] < b;
        },
        Lj() {
            var f = c++ % a;
            d[f] = ab();
        }
    };
})(qn, 1e3);
var $m = 1e3;
var sn = (a, b) => {
    if (nn && !Ym[a] && Um !== a) {
        Pm();
        Um = a;
        an = Wm = '';
        en[a] = '&e=' + Rm(b) + '&eid=' + a;
        Tm();
    }
};
var tn = (a, b, c, d) => {
    if (nn && b) {
        var e,
            f = String(b[pe.zb] || '').replace(/_/g, '');
        0 === f.indexOf('cvt') && (f = 'cvt');
        e = f;
        var g = c + e;
        if (!Ym[a]) {
            a !== Um && (Pm(), (Um = a));
            Wm = Wm ? Wm + '.' + g : '&tr=' + g;
            var h = b['function'];
            if (!h) throw Error('Error: No function name given for function call.');
            var k = (Ze[h] ? '1' : '2') + e;
            an = an ? an + '.' + k : '&ti=' + k;
            Tm();
            Qm();
        }
    }
};
var An = (a, b, c) => {
    if (nn && !Ym[a]) {
        a !== Um && (Pm(), (Um = a));
        var d = c + b;
        Xm = Xm ? Xm + '.' + d : '&epr=' + d;
        Tm();
        Qm();
    }
};
var Bn = (a, b, c) => {};
function Cn(a, b, c, d) {
    var e = Xe[a];
    var f = Dn(a, b, c, d);
    if (!f) return null;
    var g = ef(e[pe.qg], c, []);
    if (g && g.length) {
        var h = g[0];
        f = Cn(
            h.index, {
                onSuccess: f,
                onFailure: 1 === h.Og ? b.terminate : f,
                terminate: b.terminate
            },
            c,
            d
        );
    }
    return f;
}
function Dn(a, b, c, d) {
    function e() {
        if (f[pe.si]) h();
        else {
            var w = ff(f, c, []);
            var y = w[pe.Ch];
            if (null != y)
                for (var x = 0; x < y.length; x++)
                    if (!li(y[x])) {
                        h();
                        return;
                    }
            var z = lm(c.kb, String(f[pe.zb]), Number(f[pe.rg]), w[pe.ui]);
            var A = !1;
            w.vtp_gtmOnSuccess = () => {
                if (!A) {
                    A = !0;
                    var D = ab() - E;
                    tn(c.id, Xe[a], '5', D);
                    mm(c.kb, z, 'success', D);
                    g();
                }
            };
            w.vtp_gtmOnFailure = () => {
                if (!A) {
                    A = !0;
                    var D = ab() - E;
                    tn(c.id, Xe[a], '6', D);
                    mm(c.kb, z, 'failure', D);
                    h();
                }
            };
            w.vtp_gtmTagId = f.tag_id;
            w.vtp_gtmEventId = c.id;
            tn(c.id, f, '1');
            var C = () => {
                var D = ab() - E;
                tn(c.id, f, '7', D);
                mm(c.kb, z, 'exception', D);
                A || ((A = !0), h());
            };
            var E = ab();
            try {
                df(w, {
                    event: c,
                    index: a,
                    type: 1
                });
            } catch (D) {
                C(D);
            }
        }
    }
    var f = Xe[a];
    var g = b.onSuccess;
    var h = b.onFailure;
    var k = b.terminate;
    if (c.hf(f)) return null;
    var n = ef(f[pe.sg], c, []);
    if (n && n.length) {
        var p = n[0];
        var r = Cn(
            p.index, {
                onSuccess: g,
                onFailure: h,
                terminate: k
            },
            c,
            d
        );
        if (!r) return null;
        g = r;
        h = 2 === p.Og ? k : r;
    }
    if (f[pe.mg] || f[pe.yi]) {
        var t = f[pe.mg] ? Ye : c.Xj;
        var u = g;
        var q = h;
        if (!t[a]) {
            e = cb(e);
            var v = En(a, t, e);
            g = v.onSuccess;
            h = v.onFailure;
        }
        return () => {
            t[a](u, q);
        };
    }
    return e;
}
function En(a, b, c) {
    var d = [];
    var e = [];
    b[a] = Fn(d, e, c);
    return {
        onSuccess() {
            b[a] = Gn;
            for (var f = 0; f < d.length; f++) d[f]();
        },
        onFailure() {
            b[a] = Hn;
            for (var f = 0; f < e.length; f++) e[f]();
        }
    };
}
function Fn(a, b, c) {
    return (d, e) => {
        a.push(d);
        b.push(e);
        c();
    };
}
function Gn(a) {
    a();
}
function Hn(a, b) {
    b();
}
var Kn = (a, b) => {
    for (var c = [], d = 0; d < Xe.length; d++)
        if (a[d]) {
            var e = Xe[d];
            var f = om(b.kb);
            try {
                var g = Cn(
                    d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    },
                    b,
                    d
                );
                if (g) {
                    var h = c;
                    var k = h.push;
                    var n = d;
                    var p = e['function'];
                    if (!p) throw 'Error: No function name given for function call.';
                    var r = Ze[p];
                    k.call(h, {
                        oh: n,
                        eh: r ? r.priorityOverride || 0 : 0,
                        execute: g
                    });
                } else In(d, b), f();
            } catch (q) {
                f();
            }
        }
    var t = b.kb;
    t.N = !0;
    t.o >= t.s && nm(t);
    c.sort(Jn);
    for (var u = 0; u < c.length; u++) c[u].execute();
    return 0 < c.length;
};
function Jn(a, b) {
    var c;
    var d = b.eh;
    var e = a.eh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
        var g = a.oh;
        var h = b.oh;
        f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
}
function In(a, b) {
    if (!nn) return;
    var c = (d) => {
        var e = b.hf(Xe[d]) ? '3' : '4';
        var f = ef(Xe[d][pe.qg], b, []);
        f && f.length && c(f[0].index);
        tn(b.id, Xe[d], e);
        var g = ef(Xe[d][pe.sg], b, []);
        g && g.length && c(g[0].index);
    };
    c(a);
}
var Ln = !1;
var Rn = (a) => {
    var b = ab(),
        c = a['gtm.uniqueEventId'],
        d = a.event;
    if ('gtm.js' === d) {
        if (Ln) return !1;
        Ln = !0;
    }
    var g = Fh(c),
        h = !1;
    if (!g.active) {
        if ('gtm.js' !== d) return !1;
        h = !0;
        g = Fh(Number.MAX_SAFE_INTEGER);
    }
    sn(c, d);
    var k = a.eventCallback,
        n = a.eventTimeout,
        p = k;
    var r = {
        id: c,
        name: d,
        hf: Dh(g.isAllowed),
        Xj: [],
        Zg() {
            Ug(6);
        },
        Fg: Mn(c),
        kb: new km(p, n)
    };
    r.Eg = Nn();
    On(c, r.kb);
    var t = pf(r);
    h && (t = Pn(t));
    var u = Kn(t, r);
    ('gtm.js' !== d && 'gtm.sync' !== d) || Am(J.J);
    return Qn(t, u);
};
function Mn(a) {
    return (b) => {
        nn && (Kc(b) || Bn(a, 'input', b));
    };
}
function On(a, b) {
    uh(a, 'event', 1);
    uh(a, 'ecommerce', 1);
    uh(a, 'gtm');
    uh(a, 'eventModel');
}
function Nn() {
    var a = {};
    a.event = th('event', 1);
    a.ecommerce = th('ecommerce', 1);
    a.gtm = th('gtm');
    a.eventModel = th('eventModel');
    return a;
}
function Pn(a) {
    for (var b = [], c = 0; c < a.length; c++) a[c] && Xg[String(Xe[c][pe.zb])] && (b[c] = !0);
    return b;
}
function Qn(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
        if (a[c] && Xe[c] && !Yg[String(Xe[c][pe.zb])]) return !0;
    return !1;
}
function Sn(a, b) {
    if (a) {
        var c = '' + a;
        0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
        '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
        return vj('' + c + b).href;
    }
}
function Tn(a, b) {
    return Un() ? Sn(a, b) : void 0;
}
function Un() {
    var a = !1;
    return a;
}
function Vn() {
    return !!J.zd && 'SGTM_TOKEN' !== J.zd.replaceAll('@@', '');
}
var Wn = () => {
    var a = !1;
    return a;
};
var Xn;
if (3 === J.yd.length) Xn = 'g';
else {
    var Yn = 'G';
    Yn = 'g';
    Xn = Yn;
}
var Zn = {
    '': 'n',
    UA: 'u',
    AW: 'a',
    DC: 'd',
    G: 'e',
    GF: 'f',
    HA: 'h',
    GTM: Xn,
    OPT: 'o'
};
var $n = (a) => {
    var b = J.J.split('-'),
        c = b[0].toUpperCase(),
        d = Zn[c] || 'i',
        e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        f;
    if (3 === J.yd.length) {
        var g = 'w';
        g = Wn() ? 's' : 'o';
        f = '2' + g;
    } else f = '';
    return f + d + J.yd + e;
};
function ao(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
}
var bo = (a, b) => {
    a.addEventListener && a.addEventListener.call(a, 'message', b, !1);
};
function co() {
    return Lb('iPhone') && !Lb('iPod') && !Lb('iPad');
}
Lb('Opera');
Lb('Trident') || Lb('MSIE');
Lb('Edge');
!Lb('Gecko') || (-1 != Gb.toLowerCase().indexOf('webkit') && !Lb('Edge')) || Lb('Trident') || Lb('MSIE') || Lb('Edge'); -
1 != Gb.toLowerCase().indexOf('webkit') && !Lb('Edge') && Lb('Mobile');
Lb('Macintosh');
Lb('Windows');
Lb('Linux') || Lb('CrOS');
var eo = ma.navigator || null;
eo && (eo.appVersion || '').indexOf('X11');
Lb('Android');
co();
Lb('iPad');
Lb('iPod');
co() || Lb('iPad') || Lb('iPod');
Gb.toLowerCase().indexOf('kaios');
var fo = (a, b) => {
    for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
            e = !(!c.frames || !c.frames[b]);
        } catch (h) {
            e = !1;
        }
        if (e) return c;
        var f;
        a: {
            try {
                var g = c.parent;
                if (g && g != c) {
                    f = g;
                    break a;
                }
            } catch (h) {}
            f = null;
        }
        if (!(c = f)) break;
    }
    return null;
};
var go = (a) => {
    var b = H;
    b = void 0 === b ? window.document : b;
    if (!a || !b.head) return null;
    var c, d;
    d = void 0 === d ? document : d;
    c = d.createElement('meta');
    b.head.appendChild(c);
    c.httpEquiv = 'origin-trial';
    c.content = a;
    return c;
};
var ho = () => {};
var io = (a) => {
    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && 'string' !== typeof a.tcString) || (void 0 !== a.listenerId && 'number' !== typeof a.listenerId) ?
        2 :
        a.cmpStatus && 'error' !== a.cmpStatus ?
        0 :
        3;
};
var jo = function(a, b) {
    this.o = a;
    this.g = null;
    this.C = {};
    this.N = 0;
    this.F = void 0 === b ? 500 : b;
    this.s = null;
};
la(jo, ho);
var lo = (a) => 'function' === typeof a.o.__tcfapi || null != ko(a);
jo.prototype.addEventListener = function(a) {
    var b = {};
    var c = Ub(() => a(b));
    var d = 0; -
    1 !== this.F &&
        (d = setTimeout(() => {
            b.tcString = 'tcunavailable';
            b.internalErrorState = 1;
            c();
        }, this.F));
    var e = (f, g) => {
        clearTimeout(d);
        f
            ?
            ((b = f),
                (b.internalErrorState = io(b)),
                (g && 0 === b.internalErrorState) || ((b.tcString = 'tcunavailable'), g || (b.internalErrorState = 3))) :
            ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
        a(b);
    };
    try {
        mo(this, 'addEventListener', e);
    } catch (f) {
        (b.tcString = 'tcunavailable'), (b.internalErrorState = 3), d && (clearTimeout(d), (d = 0)), c();
    }
};
jo.prototype.removeEventListener = function(a) {
    a && a.listenerId && mo(this, 'removeEventListener', null, a.listenerId);
};
var oo = (a, b, c) => {
    var d;
    d = void 0 === d ? '755' : d;
    var e;
    a: {
        if (a.publisher && a.publisher.restrictions) {
            var f = a.publisher.restrictions[b];
            if (void 0 !== f) {
                e = f[void 0 === d ? '755' : d];
                break a;
            }
        }
        e = void 0;
    }
    var g = e;
    if (0 === g) return !1;
    var h = c;
    2 === c ? ((h = 0), 2 === g && (h = 1)) : 3 === c && ((h = 1), 1 === g && (h = 0));
    var k;
    if (0 === h)
        if (a.purpose && a.vendor) {
            var n = no(a.vendor.consents, void 0 === d ? '755' : d);
            k =
                n && '1' === b && a.purposeOneTreatment && ((Oh(Jh) ? 0 : 'DE' === a.publisherCC) || 'CH' === a.publisherCC) ?
                !0 :
                n && no(a.purpose.consents, b);
        } else k = !0;
    else
        k =
        1 === h ?
        a.purpose && a.vendor ?
        no(a.purpose.legitimateInterests, b) && no(a.vendor.legitimateInterests, void 0 === d ? '755' : d) :
        !0 :
        !0;
    return k;
};
var no = (a, b) => !(!a || !a[b]);
var mo = (a, b, c, d) => {
    c || (c = () => {});
    if ('function' === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
    } else if (ko(a)) {
        po(a);
        var f = ++a.N;
        a.C[f] = c;
        if (a.g) {
            var g = {};
            a.g.postMessage(
                ((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }),
                    g),
                '*'
            );
        }
    } else c({}, !1);
};
var ko = (a) => {
    if (a.g) return a.g;
    a.g = fo(a.o, '__tcfapiLocator');
    return a.g;
};
var po = (a) => {
    a.s ||
        ((a.s = (b) => {
                try {
                    var c;
                    c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success);
                } catch (d) {}
            }),
            bo(a.o, a.s));
};
var qo = !0;
qo = !1;
Nh().g(Jh.g);
var ro = {
    1: 0,
    3: 0,
    4: 0,
    7: 3,
    9: 3,
    10: 3
};
var so = ao('', 550);
var to = ao('', 500);
function uo() {
    var a = Vg.tcf || {};
    return (Vg.tcf = a);
}
var vo = function(a, b) {
    this.s = a;
    this.g = b;
    this.o = ab();
};
var wo = (a) => {};
var xo = (a) => {};
var Do = () => {
    var a = uo(),
        b = new jo(m, qo ? 3e3 : -1),
        c = new vo(b, a);
    if ((yo() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ('function' === typeof m.__tcfapi || lo(b))) {
        a.active = !0;
        a.Tc = {};
        zo();
        var d = null;
        qo
            ?
            (d = m.setTimeout(() => {
                Ao(a);
                Bo(a);
                d = null;
            }, to)) :
            (a.tcString = 'tcunavailable');
        try {
            b.addEventListener((e) => {
                    d && (clearTimeout(d), (d = null));
                    if (0 !== e.internalErrorState) Ao(a), Bo(a), wo(c);
                    else {
                        var f;
                        a.gdprApplies = e.gdprApplies;
                        if (!1 === e.gdprApplies)(f = Co()), b.removeEventListener(e);
                        else if ('tcloaded' === e.eventStatus || 'useractioncomplete' === e.eventStatus || 'cmpuishown' === e.eventStatus) {
                            var g = {},
                                h;
                            for (h in ro)
                                if (ro.hasOwnProperty(h))
                                    if ('1' === h) {
                                        var k,
                                            n = e,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        var r;
                                        var t = n;
                                        !1 === t.gdprApplies ?
                                            (r = !0) :
                                            (void 0 === t.internalErrorState && (t.internalErrorState = io(t)),
                                                (r =
                                                    'error' === t.cmpStatus ||
                                                    0 !== t.internalErrorState ||
                                                    ('loaded' === t.cmpStatus && ('tcloaded' === t.eventStatus || 'useractioncomplete' === t.eventStatus)) ?
                                                    !0 :
                                                    !1));
                                        k = r ?
                                            !1 === n.gdprApplies ||
                                            'tcunavailable' === n.tcString ||
                                            (void 0 === n.gdprApplies && !p) ||
                                            'string' !== typeof n.tcString ||
                                            !n.tcString.length ?
                                            !0 :
                                            oo(n, '1', 0) :
                                            !1;
                                        g['1'] = k;
                                    } else g[h] = oo(e, h, ro[h]);
                            f = g;
                        }
                        f && ((a.tcString = e.tcString || 'tcempty'), (a.Tc = f), Bo(a), wo(c));
                    }
                }),
                xo(c);
        } catch (e) {
            d && (clearTimeout(d), (d = null)), Ao(a), Bo(a);
        }
    }
};
function Ao(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
    qo && (a.Tc = Co());
}
function zo() {
    var a = {};
    var b = ((a.ad_storage = 'denied'), (a.wait_for_update = so), a);
    ii(b);
}
var yo = () => {
    var a = !1;
    a = !0;
    return a;
};
function Co() {
    var a = {};
    var b;
    for (b in ro) ro.hasOwnProperty(b) && (a[b] = !0);
    return a;
}
function Bo(a) {
    var b = {};
    var c = ((b.ad_storage = a.Tc['1'] ? 'granted' : 'denied'), b);
    ki(c, 0, {
        gdprApplies: a ? a.gdprApplies : void 0,
        tcString: Eo()
    });
}
var Fo = () => {
    var a = uo();
    if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
};
var Eo = () => {
    var a = uo();
    return a.active ? a.tcString || '' : '';
};
var Go = () => {
    var a = uo();
    return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? '1' : '0') : '';
};
var Ho = (a) => {
    if (!ro.hasOwnProperty(String(a))) return !0;
    var b = uo();
    return b.active && b.Tc ? !!b.Tc[String(a)] : !0;
};
var Qo = !1;
Qo = !0;
var Ro = !1;
var So = function() {
    this.g = {};
};
var To = (a, b, c) => {
    null != c && (a.g[b] = c);
};
var Uo = (a) =>
    Object.keys(a.g)
    .map((b) => encodeURIComponent(b) + '=' + encodeURIComponent(a.g[b]))
    .join('&');
var Wo = (a, b, c, d, e) => {};
var Yo = /[A-Z]+/;
var Zo = /\s/;
var $o = (a) => {
    if (Ga(a)) {
        a = Wa(a);
        var b = a.indexOf('-');
        if (!(0 > b)) {
            var c = a.substring(0, b);
            if (Yo.test(c)) {
                var d = !1;
                d = !0;
                for (var e = a.substring(b + 1).split('/'), f = 0; f < e.length; f++)
                    if (!e[f] || (Zo.test(e[f]) && ('AW' !== c || 1 !== f || !d))) return;
                return {
                    id: a,
                    prefix: c,
                    containerId: c + '-' + e[0],
                    M: e
                };
            }
        }
    }
};
var bp = (a) => {
    for (var b = {}, c = 0; c < a.length; ++c) {
        var d = $o(a[c]);
        d && (b[d.id] = d);
    }
    ap(b);
    var e = [];
    Oa(b, (f, g) => {
        e.push(g);
    });
    return e;
};
function ap(a) {
    var b = [];
    var c;
    for (c in a)
        if (a.hasOwnProperty(c)) {
            var d = a[c];
            'AW' === d.prefix && d.M[1] && b.push(d.containerId);
        }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
}
var dp = (a, b, c, d) => (2 === cp() || d || 'http:' != m.location.protocol ? a : b) + c;
var cp = () => {
    var a = cc(),
        b;
    if (1 === a)
        a: {
            var c = ah;
            c = c.toLowerCase();
            for (var d = 'https://' + c, e = 'http://' + c, f = 1, g = H.getElementsByTagName('script'), h = 0; h < g.length && 100 > h; h++) {
                var k = g[h].src;
                if (k) {
                    k = k.toLowerCase();
                    if (0 === k.indexOf(e)) {
                        b = 3;
                        break a;
                    }
                    1 === f && 0 === k.indexOf(d) && (f = 2);
                }
            }
            b = f;
        }
    else b = a;
    return b;
};
var vq = () => {
    var a = !0;
    (Ho(7) && Ho(9) && Ho(10)) || (a = !1);
    var b = !0;
    b = !1;
    b && !uq() && (a = !1);
    return a;
};
var uq = () => {
    var a = !0;
    (Ho(3) && Ho(4)) || (a = !1);
    return a;
};
var pr = !1;
pr = !0;
function qr() {
    var a = Vg;
    return (a.gcq = a.gcq || new rr());
}
var sr = (a, b, c) => {
    qr().register(a, b, c);
};
var tr = (a, b, c, d) => {
    qr().push('event', [b, a], c, d);
};
var ur = (a, b) => {
    qr().push('config', [a], b);
};
var vr = (a, b, c, d) => {
    qr().push('get', [a, b], c, d);
};
var wr = (a) => qr().getRemoteConfig(a);
var xr = {};
var yr = function() {
    this.status = 1;
    this.containerConfig = {};
    this.targetConfig = {};
    this.remoteConfig = {};
    this.o = {};
    this.s = null;
    this.g = !1;
};
var zr = function(a, b, c, d, e) {
    this.type = a;
    this.s = b;
    this.U = c || '';
    this.g = d;
    this.o = e;
};
var rr = function() {
    this.o = {};
    this.s = {};
    this.g = [];
    this.C = {
        AW: !1,
        UA: !1
    };
};
var Ar = (a, b) => {
    var c = $o(b);
    return (a.o[c.containerId] = a.o[c.containerId] || new yr());
};
var Br = (a, b, c) => {
    if (b) {
        var d = $o(b);
        if (d && 1 === Ar(a, b).status) {
            Ar(a, b).status = 2;
            var e = {};
            nn &&
                (e.timeoutId = m.setTimeout(() => {
                    Ug(38);
                    Tm();
                }, 3e3));
            a.push('require', [e], d.containerId);
            xr[d.containerId] = ab();
            if (Wn()) {} else {
                var g = '/gtag/js?id=' + encodeURIComponent(d.containerId) + '&l=' + J.W + '&cx=c';
                Vn() && (g += '&sign=' + J.zd);
                var h = ('http:' != m.location.protocol ? 'https:' : 'http:') + ('//www.googletagmanager.com' + g),
                    k = Tn(c, g) || h;
                bc(k);
            }
        }
    }
};
var Cr = (a, b, c, d) => {
    if (d.U) {
        var e = Ar(a, d.U),
            f = e.s;
        if (f) {
            var g = Gc(c),
                h = Gc(e.targetConfig[d.U]),
                k = Gc(e.containerConfig),
                n = Gc(e.remoteConfig),
                p = Gc(a.s),
                r = oh('gtm.uniqueEventId'),
                t = $o(d.U).prefix,
                u = cb(() => {
                    var v = g[R.Rb];
                    v && I(v);
                }),
                q = Xi(
                    Wi(
                        Yi(
                            Vi(Ti(Ui(Si(Ri(Qi(g), h), k), n), p), () => {
                                An(r, t, '2');
                                pr && u();
                            }),
                            () => {
                                An(r, t, '3');
                                pr && u();
                            }
                        ),
                        (v, w) => {
                            a.C[v] = w;
                        }
                    ),
                    (v) => a.C[v]
                );
            try {
                An(r, t, '1');
                f(d.U, b, d.s, q);
            } catch (v) {
                An(r, t, '4');
            }
        }
    }
};
rr.prototype.register = function(a, b, c) {
    var d = Ar(this, a);
    if (3 !== d.status) {
        d.s = b;
        d.status = 3;
        c && (Gc(d.remoteConfig, c), (d.remoteConfig = c));
        var e = $o(a);
        var f = xr[e.containerId];
        if (void 0 !== f) {
            var g = Vg[e.containerId].bootstrap;
            var h = e.prefix.toUpperCase();
            Vg[e.containerId]._spx && (h = h.toLowerCase());
            var k = oh('gtm.uniqueEventId');
            var n = h;
            var p = ab() - g;
            if (nn && !Ym[k]) {
                k !== Um && (Pm(), (Um = k));
                var r = n + '.' + Math.floor(g - f) + '.' + Math.floor(p);
                bn = bn ? bn + ',' + r : '&cl=' + r;
            }
            delete xr[e.containerId];
        }
        this.flush();
    }
};
rr.prototype.push = function(a, b, c, d) {
    var e = Math.floor(ab() / 1e3);
    Br(this, c, b[0][R.sa] || this.s[R.sa]);
    c && Ar(this, c).g && (d = !1);
    this.g.push(new zr(a, e, c, b, d));
    d || this.flush();
};
rr.prototype.insert = function(a, b, c) {
    var d = Math.floor(ab() / 1e3);
    0 < this.g.length ? this.g.splice(1, 0, new zr(a, d, c, b, !1)) : this.g.push(new zr(a, d, c, b, !1));
};
rr.prototype.flush = function(a) {
    for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
        var f = this.g[0];
        if (f.o) !f.U || Ar(this, f.U).g ? ((f.o = !1), this.g.push(f)) : c.push(f), this.g.shift();
        else {
            switch (f.type) {
                case 'require':
                    if (3 !== Ar(this, f.U).status && !a) {
                        this.g.push(...c);
                        return;
                    }
                    nn && m.clearTimeout(f.g[0].timeoutId);
                    break;
                case 'set':
                    Oa(f.g[0], (t, u) => {
                        Gc(ib(t, u), b.s);
                    });
                    break;
                case 'config':
                    e.Ma = {};
                    Oa(
                        f.g[0],
                        ((t) => (u, q) => {
                            Gc(ib(u, q), t.Ma);
                        })(e)
                    );
                    var g = !!e.Ma[R.rd];
                    delete e.Ma[R.rd];
                    var h = Ar(this, f.U);
                    var k = $o(f.U);
                    var n = k.containerId === k.id;
                    g || (n ? (h.containerConfig = {}) : (h.targetConfig[f.U] = {}));
                    (h.g && g) || Cr(this, R.za, e.Ma, f);
                    h.g = !0;
                    delete e.Ma[R.Wb];
                    n ? Gc(e.Ma, h.containerConfig) : Gc(e.Ma, h.targetConfig[f.U]);
                    d = !0;
                    break;
                case 'event':
                    e.Zc = {};
                    Oa(
                        f.g[0],
                        ((t) => (u, q) => {
                            Gc(ib(u, q), t.Zc);
                        })(e)
                    );
                    Cr(this, f.g[1], e.Zc, f);
                    break;
                case 'get':
                    var p = {};
                    var r = ((p[R.Pa] = f.g[0]), (p[R.cb] = f.g[1]), p);
                    Cr(this, R.Oa, r, f);
            }
            this.g.shift();
            Dr(this, f);
        }
        e = {
            Ma: e.Ma,
            Zc: e.Zc
        };
    }
    this.g.push(...c);
    d && this.flush();
};
var Dr = (a, b) => {
    if ('require' !== b.type)
        if (b.U)
            for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++) c[d]();
        else
            for (var e in a.o)
                if (a.o.hasOwnProperty(e)) {
                    var f = a.o[e];
                    if (f && f.o)
                        for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]();
                }
};
rr.prototype.getRemoteConfig = function(a) {
    return Ar(this, a).remoteConfig;
};
rr.prototype.getCommandListeners = function(a) {
    return Ar(this, a).o;
};
var xf;
var Er = {};
var Fr = (a, b) => {
    b = b.toString().split(',');
    for (var c = 0; c < b.length; c++) {
        var d = Er[b[c]] || [];
        Er[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
    }
};
var Gr = (a) => {
    Oa(Er, (b, c) => {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
    });
};
var Hr = 'HA GF G UA AW DC'.split(' ');
var Ir = !1;
Ir = !0;
var Jr = !1;
var Kr = !1;
var Lr = 0;
function Mr(a, b) {
    var c = {
        event: a
    };
    b && ((c.eventModel = Gc(b)), b[R.Rb] && (c.eventCallback = b[R.Rb]), b[R.hd] && (c.eventTimeout = b[R.hd]));
    return c;
}
function Nr(a) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
        Object.defineProperty(a, 'gtm.uniqueEventId', {
            value: hh()
        });
    return a['gtm.uniqueEventId'];
}
function Or() {
    if (!Jr && !Vg.gtagRegistered) {
        Jr = Vg.gtagRegistered = !0;
        Vg.addTargetToGroup = (c) => {
            Fr(c, 'default');
        };
        var a = Vg.pendingDefaultTargets;
        delete Vg.pendingDefaultTargets;
        if (Ia(a))
            for (var b = 0; b < a.length; ++b) Fr(a[b], 'default');
    }
    return Jr;
}
var Pr = {
    config(a) {
        var b,
            c = Nr(a);
        if (2 > a.length || !Ga(a[1])) return;
        var d = {};
        if (2 < a.length) {
            if ((void 0 != a[2] && !Fc(a[2])) || 3 < a.length) return;
            d = a[2];
        }
        var e = $o(a[1]);
        if (!e) return;
        Gr(e.id);
        Fr(e.id, d[R.te] || 'default');
        delete d[R.te];
        Kr || Ug(43);
        if (Or() && -1 !== Hr.indexOf(e.prefix)) {
            'G' === e.prefix && (d[R.Wb] = !0);
            Ir && delete d[R.Rb];
            e.id === e.containerId && (Vg.configCount = ++Lr);
            ur(d, e.id);
            return;
        }
        rh('gtag.targets.' + e.id, void 0);
        rh('gtag.targets.' + e.id, Gc(d));
        var f = {};
        f[R.xb] = e.id;
        b = Mr(R.za, f);
        b['gtm.uniqueEventId'] = c;
        return b;
    },
    consent(a) {
        function b() {
            Or() &&
                Gc(a[2], {
                    subcommand: a[1]
                });
        }
        if (3 === a.length) {
            Ug(39);
            var c = hh(),
                d = a[1];
            'default' === d ? (b(), ii(a[2])) : 'update' === d && (b(), ki(a[2], c));
        }
    },
    event(a) {
        var b = a[1];
        if (!(2 > a.length) && Ga(b)) {
            var c;
            if (2 < a.length) {
                if ((!Fc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                c = a[2];
            }
            var d = Mr(b, c),
                e = Nr(a);
            d['gtm.uniqueEventId'] = e;
            var f;
            var g = c && c[R.xb];
            void 0 === g && ((g = oh(R.xb, 2)), void 0 === g && (g = 'default'));
            if (Ga(g) || Ia(g)) {
                for (var h = g.toString().replace(/\s+/g, '').split(','), k = [], n = 0; n < h.length; n++)
                    if (0 <= h[n].indexOf('-')) k.push(h[n]);
                    else {
                        var p = Er[h[n]];
                        p && p.length && (k = k.concat(p));
                    }
                f = bp(k);
            } else f = void 0;
            var r = f;
            if (!r) return;
            for (var t = Or(), u = [], q = 0; t && q < r.length; q++) {
                var v = r[q];
                if (-1 !== Hr.indexOf(v.prefix)) {
                    var w = Gc(c);
                    'G' === v.prefix && (w[R.Wb] = !0);
                    Ir && delete w[R.Rb];
                    tr(b, w, v.id);
                }
                u.push(v.id);
            }
            d.eventModel = d.eventModel || {};
            0 < r.length ? (d.eventModel[R.xb] = u.join()) : delete d.eventModel[R.xb];
            Kr || Ug(43);
            return d;
        }
    },
    get(a) {
        Ug(53);
        if (4 !== a.length || !Ga(a[1]) || !Ga(a[2]) || !Ea(a[3])) return;
        var b = $o(a[1]),
            c = String(a[2]),
            d = a[3];
        if (!b) return;
        Kr || Ug(43);
        if (!Or() || -1 === Hr.indexOf(b.prefix)) return;
        hh();
        var e = {};
        ei(Gc(((e[R.Pa] = c), (e[R.cb] = d), e)));
        vr(
            c,
            (f) => {
                I(() => d(f));
            },
            b.id
        );
    },
    js(a) {
        if (2 == a.length && a[1].getTime) {
            Kr = !0;
            Or();
            var b = {};
            return (b.event = 'gtm.js'), (b['gtm.start'] = a[1].getTime()), (b['gtm.uniqueEventId'] = Nr(a)), b;
        }
    },
    policy(a) {
        if (3 === a.length) {
            var b = a[1],
                c = a[2],
                d = xf.o;
            d.g[b] ? d.g[b].push(c) : (d.g[b] = [c]);
        }
    },
    set(a) {
        var b;
        2 == a.length && Fc(a[1]) ?
            (b = Gc(a[1])) :
            3 == a.length && Ga(a[1]) && ((b = {}), Fc(a[2]) || Ia(a[2]) ? (b[a[1]] = Gc(a[2])) : (b[a[1]] = a[2]));
        if (b) {
            if ((hh(), Or())) {
                Gc(b);
                var c = Gc(b);
                qr().push('set', [c]);
            }
            b._clear = !0;
            return b;
        }
    }
};
var Qr = {
    policy: !0
};
var Rr = (a) => {
    var b = m[J.W].hide;
    if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
            d;
        for (d in b)
            if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1;
                break;
            }
        c && (b.end(), (b.end = null));
    }
};
var Sr = (a) => {
    var b = m[J.W],
        c = b && b.hide;
    c && c.end && (c[a] = !0);
};
var Tr = !1;
var Ur = [];
function Vr() {
    if (!Tr) {
        Tr = !0;
        for (var a = 0; a < Ur.length; a++) I(Ur[a]);
    }
}
var Wr = (a) => {
    Tr ? I(a) : Ur.push(a);
};
var ms = function(a) {
    if (ls(a)) return a;
    this.g = a;
};
ms.prototype.ij = function() {
    return this.g;
};
var ls = (a) => (!a || 'object' !== Cc(a) || Fc(a) ? !1 : 'getUntrustedUpdateValue' in a);
ms.prototype.getUntrustedUpdateValue = ms.prototype.ij;
var ns = [];
var os = !1;
var ps = !1;
var qs = (a) => m[J.W].push(a);
var rs = (a, b, c) => {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return qs(a);
};
var ss = (a, b) => {
    var c = Vg[J.W],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
    b &&
        (g = m.setTimeout(() => {
            f || ((f = !0), a());
            g = void 0;
        }, b));
    return () => {
        ++e === d && (g && (m.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
    };
};
function ts(a) {
    var b = a._clear;
    Oa(a, (d, e) => {
        '_clear' !== d && (b && rh(d, void 0), rh(d, e));
    });
    ch || (ch = a['gtm.start']);
    var c = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    c || ((c = hh()), (a['gtm.uniqueEventId'] = c), rh('gtm.uniqueEventId', c));
    return Rn(a);
}
function us() {
    var a = ns[0];
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (Pa(a)) {
        var b = a[0];
        if ('config' === b || 'event' === b || 'js' === b) return !0;
    }
    return !1;
}
function vs() {
    for (var a = !1; !ps && 0 < ns.length;) {
        if (!os && us()) {
            var b = {};
            var c = ((b.event = 'gtm.init_consent'), b);
            var d = {};
            var e = ((d.event = 'gtm.init'), d);
            var f = ns[0]['gtm.uniqueEventId'];
            f && ((c['gtm.uniqueEventId'] = f - 2), (e['gtm.uniqueEventId'] = f - 1));
            ns.unshift(c, e);
            os = !0;
        }
        ps = !0;
        delete lh.eventModel;
        nh();
        var g = ns.shift();
        if (null != g) {
            var h = ls(g);
            if (h) {
                var k = g;
                g = ls(k) ? k.getUntrustedUpdateValue() : void 0;
                sh();
            }
            try {
                if (Ea(g))
                    try {
                        g.call(ph);
                    } catch (w) {}
                else if (Ia(g)) {
                    var n = g;
                    if (Ga(n[0])) {
                        var p = n[0].split('.');
                        var r = p.pop();
                        var t = n.slice(1);
                        var u = oh(p.join('.'), 2);
                        if (void 0 !== u && null !== u)
                            try {
                                u[r](...t);
                            } catch (w) {}
                    }
                } else {
                    if (Pa(g)) {
                        a: {
                            var q = g;
                            if (q.length && Ga(q[0])) {
                                var v = Pr[q[0]];
                                if (v && (!h || !Qr[q[0]])) {
                                    g = v(q);
                                    break a;
                                }
                            }
                            g = void 0;
                        }
                        if (!g) {
                            ps = !1;
                            continue;
                        }
                    }
                    a = ts(g) || a;
                }
            } finally {
                h && nh(!0);
            }
        }
        ps = !1;
    }
    return !a;
}
function ws() {
    var b = vs();
    try {
        Rr(J.J);
    } catch (c) {}
    return b;
}
var ys = () => {
    var a = Yb(J.W, []),
        b = Yb('google_tag_manager', {});
    b = b[J.W] = b[J.W] || {};
    im(() => {
        b.gtmDom ||
            ((b.gtmDom = !0),
                a.push({
                    event: 'gtm.dom'
                }));
    });
    Wr(() => {
        b.gtmLoad ||
            ((b.gtmLoad = !0),
                a.push({
                    event: 'gtm.load'
                }));
    });
    b.subscribers = (b.subscribers || 0) + 1;
    var c = a.push;
    a.push = function(...args) {
        var e;
        if (0 < Vg.SANDBOXED_JS_SEMAPHORE) {
            e = [];
            for (var f = 0; f < args.length; f++) e[f] = new ms(args[f]);
        } else e = [].slice.call(args, 0);
        var g,
            h = !0;
        h = !1;
        g = h;
        !g && ns.push(...e);
        var k = c.apply(a, e);
        g && ns.push(...e);
        if (300 < this.length)
            for (Ug(4); 300 < this.length;) this.shift();
        var n = 'boolean' !== typeof k || k;
        return vs() && n;
    };
    var d = a.slice(0);
    ns.push(...d);
    if (xs()) {
        I(ws);
    }
};
var xs = () => {
    var a = !0;
    return a;
};
function zs(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a);
    var c = ab();
    return b < c + 3e5 && b > c - 9e5;
}
var As = (a) => {
    Vg.addTargetToGroup ? Vg.addTargetToGroup(a) : ((Vg.pendingDefaultTargets = Vg.pendingDefaultTargets || []), Vg.pendingDefaultTargets.push(a));
};
var Bs = () => {
    var a = [];
    return a;
};
var Cs = {};
Cs.ud = new String('undefined');
var Fs = (a, b, c) => {
    var d = {
        event: b,
        'gtm.element': a,
        'gtm.elementClasses': oc(a, 'className'),
        'gtm.elementId': a['for'] || hc(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || oc(a, 'target') || ''
    };
    c && (d['gtm.triggers'] = c.join(','));
    d['gtm.elementUrl'] = (a.attributes && a.attributes.formaction ? a.formAction : '') || a.action || oc(a, 'href') || a.src || a.code || a.codebase || '';
    return d;
};
var Gs = (a) => {
    Vg.hasOwnProperty('autoEventsSettings') || (Vg.autoEventsSettings = {});
    var b = Vg.autoEventsSettings;
    b.hasOwnProperty(a) || (b[a] = {});
    return b[a];
};
var Hs = (a, b, c) => {
    Gs(a)[b] = c;
};
var Is = (a, b, c, d) => {
    var e = Gs(a),
        f = bb(e, b, d);
    e[b] = c(f);
};
var Js = (a, b, c) => {
    var d = Gs(a);
    return bb(d, b, c);
};
var Ps = !!m.MutationObserver;
var Qs = void 0;
var Rs = (a) => {
    if (!Qs) {
        var b = () => {
            var c = H.body;
            if (c)
                if (Ps)
                    new MutationObserver(() => {
                        for (var e = 0; e < Qs.length; e++) I(Qs[e]);
                    }).observe(c, {
                        childList: !0,
                        subtree: !0
                    });
                else {
                    var d = !1;
                    fc(c, 'DOMNodeInserted', () => {
                        d ||
                            ((d = !0),
                                I(() => {
                                    d = !1;
                                    for (var e = 0; e < Qs.length; e++) I(Qs[e]);
                                }));
                    });
                }
        };
        Qs = [];
        H.body ? b() : I(b);
    }
    Qs.push(a);
};
var bt = (a, b, c) => {
    function d() {
        var g = a();
        f += e ? ((ab() - e) * g.playbackRate) / 1e3 : 0;
        e = ab();
    }
    var e = 0;
    var f = 0;
    return {
        createEvent(g, h, k) {
            var n = a();
            var p = n.Ze;
            var r = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(n.Ze * h) : Math.round(n.Jg);
            var t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round((r / p) * 100);
            var u = H.hidden ? !1 : 0.5 <= ij(c);
            d();
            var q = void 0;
            void 0 !== b && (q = [b]);
            var v = Fs(c, 'gtm.video', q);
            v['gtm.videoProvider'] = 'youtube';
            v['gtm.videoStatus'] = g;
            v['gtm.videoUrl'] = n.url;
            v['gtm.videoTitle'] = n.title;
            v['gtm.videoDuration'] = Math.round(p);
            v['gtm.videoCurrentTime'] = Math.round(r);
            v['gtm.videoElapsedTime'] = Math.round(f);
            v['gtm.videoPercent'] = t;
            v['gtm.videoVisible'] = u;
            return v;
        },
        jh() {
            e = ab();
        },
        Zb() {
            d();
        }
    };
};
var ct = m.clearTimeout;
var dt = m.setTimeout;
var S = (a, b, c, d) => {
    if (Wn()) {
        b && I(b);
    } else return bc(a, b, c, d);
};
var et = () => new Date();
var ft = () => m.location.href;
var gt = (a) => tj(vj(a), 'fragment');
var ht = (a) => uj(vj(a));
var it = (a, b) => oh(a, b || 2);
var jt = (a, b, c) => (b ? rs(a, b, c) : qs(a));
var kt = (a, b) => {
    m[a] = b;
};
var V = (a, b, c) => {
    b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
    return m[a];
};
var lt = (a, b, c) => Xj(a, b, void 0 === c ? !0 : !!c);
var mt = (a, b, c) => 0 === gk(a, b, c);
var nt = (a, b) => {
    if (Wn()) {
        b && I(b);
    } else dc(a, b);
};
var ot = (a) => !!Js(a, 'init', !1);
var pt = (a) => {
    Hs(a, 'init', !0);
};
var qt = (a) => {
    var b = ah,
        c = '?id=' + encodeURIComponent(a) + '&l=' + J.W;
    Vn() && ((c += '&sign=' + J.zd), Xb && (b = Xb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0]));
    var d = dp('https://', 'http://', b + c);
    S(d);
};
var rt = (a, b, c) => {
    nn && (Kc(a) || Bn(c, b, a));
};
function Pt(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
}
var Qt = new La();
function Rt(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
        var e = String(b) + d;
        var f = Qt.get(e);
        f || ((f = new RegExp(b, d)), Qt.set(e, f));
        return f.test(a);
    } catch (g) {
        return !1;
    }
}
function St(a, b) {
    function c(g) {
        var h = vj(g);
        var k = tj(h, 'protocol');
        var n = tj(h, 'host', !0);
        var p = tj(h, 'port');
        var r = tj(h, 'path').toLowerCase().replace(/\/$/, '');
        if (void 0 === k || ('http' == k && '80' == p) || ('https' == k && '443' == p))(k = 'web'), (p = 'default');
        return [k, n, p, r];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
        if (d[f] !== e[f]) return !1;
    return !0;
}
function Tt(a) {
    return Ut(a) ? 1 : 0;
}
function Ut(a) {
    var b = a.arg0;
    var c = a.arg1;
    if (a.any_of && Ia(c)) {
        for (var d = 0; d < c.length; d++) {
            var e = Gc(a, {});
            Gc({
                    arg1: c[d],
                    any_of: void 0
                },
                e
            );
            if (Tt(e)) return !0;
        }
        return !1;
    }
    switch (a['function']) {
        case '_cn':
            return 0 <= String(b).indexOf(String(c));
        case '_css':
            var f;
            a: {
                if (b) {
                    var g = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'];
                    try {
                        for (var h = 0; h < g.length; h++)
                            if (b[g[h]]) {
                                f = b[g[h]](c);
                                break a;
                            }
                    } catch (k) {}
                }
                f = !1;
            }
            return f;
        case '_ew':
            return Pt(b, c);
        case '_eq':
            return String(b) == String(c);
        case '_ge':
            return Number(b) >= Number(c);
        case '_gt':
            return Number(b) > Number(c);
        case '_lc':
            return 0 <= String(b).split(',').indexOf(String(c));
        case '_le':
            return Number(b) <= Number(c);
        case '_lt':
            return Number(b) < Number(c);
        case '_re':
            return Rt(b, c, a.ignore_case);
        case '_sw':
            return 0 == String(b).indexOf(String(c));
        case '_um':
            return St(b, c);
    }
    return !1;
}
function Vt(a, b) {
    var c = this;
}
function Wt(a, b, c) {}
function Xt(a, b, c, d) {}
function Yt(a) {}
function bu(a) {}
var cu = {};
var du = [];
var eu = {};
var fu = 0;
var gu = 0;
function nu(a, b) {}
function uu(a, b) {}
function zu(a) {}
var Au = {};
var Bu = [];
var Iu = (a, b) => {};
function Pu(a, b) {}
var Qu = /^\s*$/;
var Ru;
var Su = !1;
function cv(a, b) {}
function dv(a, b, c) {}
var ev = ['www.youtube.com', 'www.youtube-nocookie.com'];
var fv;
var gv = !1;
var hv = 0;
function rv(a, b) {}
function sv(a, b) {
    return !0;
}
function tv(a, b, c) {}
function uv(a, b) {
    var c;
    return c;
}
function vv(a) {}
function wv(a) {}
function xv(a) {
    Q(G(this), ['listener:!Fn'], arguments);
    ug(this, 'process_dom_events', 'window', 'load');
    Wr(Ic(a));
}
function yv(a) {
    var b;
    return b;
}
function zv(a, b) {
    var c;
    var d = !1;
    var e = Hc(c, this.g, d);
    void 0 === e && void 0 !== c && Ug(45);
    return e;
}
function Av(a) {
    var b;
    return b;
}
function Bv(a, b) {
    var c = null;
    var d = !1;
    return Hc(c, this.g, d);
}
function Cv(a) {
    var b;
    var g = !1;
    return Hc(b, this.g, g);
}
function Hv(a, b) {
    return b;
}
function Iv(a) {
    return !1;
}
var Jv;
function Kv(a) {
    var b = !1;
    return b;
}
var Lv = (a) => {
    var b;
    return b;
};
function Mv(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
}
function Nv() {
    var a = [];
    return Hc(a);
}
function Ov(a) {
    var b = null;
    return b;
}
function Pv(a, b) {
    var c;
    return c;
}
function Qv(a, b) {
    var c;
    return c;
}
function Rv(a, b) {
    var c;
    return c;
}
function Sv(a) {
    var b = '';
    return b;
}
function Tv(a, b) {
    var c;
    return c;
}
function Uv(a) {
    var b = '';
    return b;
}
function Vv() {
    ug(this, 'get_user_agent');
    return m.navigator.userAgent;
}
function Wv(a, b) {}
var Xv = {};
function Yv(a, b, c, d, e, f) {
    f
        ?
        e[f] ?
        (e[f][0].push(c), e[f][1].push(d)) :
        ((e[f] = [
                [c],
                [d]
            ]),
            bc(
                a,
                () => {
                    for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
                    g.push = (k) => {
                        I(k);
                        return 0;
                    };
                },
                () => {
                    for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
                    e[f] = null;
                },
                b
            )) :
        bc(a, c, d, b);
}
function Zv(a, b, c, d) {}
var $v = Object.freeze({
    dl: 1,
    id: 1
});
var aw = {};
function bw(a, b, c, d) {}
function cw(a) {
    var b = !0;
    return b;
}
var dw = () => !1;
var ew = {
    getItem(a) {
        var b = null;
        return b;
    },
    setItem(a, b) {
        return !1;
    },
    removeItem(a) {}
};
var fw = ['textContent', 'value', 'tagName', 'children', 'childElementCount'];
function gw(a) {
    var b;
    return b;
}
function hw() {}
function iw(a, b) {
    var c;
    return c;
}
function jw(a) {
    var b = void 0;
    return b;
}
function kw(a, b) {
    var c = !1;
    return c;
}
function lw() {
    var a = '';
    return a;
}
function mw() {
    var a = '';
    return a;
}
var nw = Object.freeze(['config', 'event', 'get', 'set']);
function ow(a, b, c) {}
function pw() {}
function qw(a, b, c, d) {
    d = void 0 === d ? !1 : d;
}
function rw(a, b, c) {}
function sw(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
}
function tw(a) {
    Q(G(this), ['consentSettings:!DustMap'], arguments);
    for (var b = a.Ab(), c = b.length(), d = 0; d < c; d++) {
        var e = b.get(d);
        e !== R.Yd && ug(this, 'access_consent', e, 'write');
    }
    ii(Ic(a));
}
function uw(a, b, c) {
    return !1;
}
function vw(a, b, c) {
    Q(G(this), ['targetId:!string', 'name:!string', 'value:!*'], arguments);
    var d = fj(a) || {};
    d[b] = Ic(c, this.g);
    var e = a;
    dj || ej();
    cj[e] = d;
}
function ww(a, b, c) {}
var xw = (a) => {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        128 > e ?
            (b[c++] = e) :
            (2048 > e ?
                (b[c++] = (e >> 6) | 192) :
                (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ?
                    ((e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)), (b[c++] = (e >> 18) | 240), (b[c++] = ((e >> 12) & 63) | 128)) :
                    (b[c++] = (e >> 12) | 224),
                    (b[c++] = ((e >> 6) & 63) | 128)),
                (b[c++] = (e & 63) | 128));
    }
    return b;
};
function yw(a, b, c, d) {
    var e = this;
}
function zw(a, b, c) {}
var Aw = {};
var Bw = {};
Aw.getItem = (a) => {
    var b = null;
    return b;
};
Aw.setItem = (a, b) => {};
Aw.removeItem = (a) => {};
Aw.clear = () => {};
var Cw = (a) => {
    var b;
    return b;
};
function Dw(a) {
    Q(G(this), ['consentSettings:!DustMap'], arguments);
    var b = Ic(a);
    var c;
    for (c in b) b.hasOwnProperty(c) && ug(this, 'access_consent', c, 'write');
    var d = this.g.g;
    ki(b, d && d.eventId);
}
var Ew = () => {
    var a = new Jg();
    Wn() ? (a.add('injectHiddenIframe', Ca), a.add('injectScript', Ca)) : (a.add('injectHiddenIframe', Wv), a.add('injectScript', Zv));
    var b = rw;
    a.add('Math', ng());
    a.add('Object', Hg);
    a.add('TestHelper', Mg());
    a.add('addConsentListener', Vt);
    a.add('addEventCallback', Yt);
    a.add('aliasInWindow', sv);
    a.add('assertApi', jg);
    a.add('assertThat', kg);
    a.add('callInWindow', uv);
    a.add('callLater', vv);
    a.add('copyFromDataLayer', zv);
    a.add('copyFromWindow', Av);
    a.add('createArgumentsQueue', Bv);
    a.add('createQueue', Cv);
    a.add('decodeUri', og);
    a.add('decodeUriComponent', pg);
    a.add('encodeUri', qg);
    a.add('encodeUriComponent', rg);
    a.add('fail', sg);
    a.add('fromBase64', Lv, !('atob' in m));
    a.add('generateRandom', tg);
    a.add('getContainerVersion', vg);
    a.add('getCookieValues', Mv);
    a.add('getQueryParameters', Qv);
    a.add('getReferrerQueryParameters', Rv);
    a.add('getReferrerUrl', Sv);
    a.add('getTimestamp', yg);
    a.add('getTimestampMillis', yg);
    a.add('getType', zg);
    a.add('getUrl', Uv);
    a.add('localStorage', ew, !dw());
    a.add('isConsentGranted', cw);
    a.add('logToConsole', hw);
    a.add('makeInteger', Bg);
    a.add('makeNumber', Cg);
    a.add('makeString', Dg);
    a.add('makeTableMap', Eg);
    a.add('mock', Gg);
    a.add('parseUrl', jw);
    a.add('queryPermission', kw);
    a.add('readCharacterSet', lw);
    a.add('readTitle', mw);
    a.add('sendPixel', b);
    a.add('setCookie', sw);
    a.add('setDefaultConsentState', tw);
    a.add('setInWindow', uw);
    a.add('sha256', yw);
    a.add('templateStorage', Aw);
    a.add('toBase64', Cw, !('btoa' in m));
    a.add('updateConsentState', Dw);
    Lg(a, 'callOnWindowLoad', xv);
    a.add(
        'JSON',
        Ag(function(c) {
            var d = this.g.g;
            d && d.log.call(this, 'error', c);
        })
    );
    Lg(a, 'internal.appendRemoteConfigParameter', tv);
    Lg(a, 'internal.getRemoteConfigParameter', Tv);
    Lg(a, 'internal.setRemoteConfigParameter', ww);
    Lg(a, 'internal.sortRemoteConfigParameters', zw);
    Lg(a, 'internal.evaluateMatchingRules', Kv), Lg(a, 'internal.registerGtagCommandListener', ow);
    Lg(a, 'internal.addGaSendListener', zu);
    Lg(a, 'internal.evaluateFilteringRules', Iv);
    Lg(a, 'internal.getProductSettingsParameter', Pv);
    Lg(a, 'internal.setProductSettingsParameter', vw);
    Lg(a, 'internal.addHistoryChangeListener', Iu);
    Lg(a, 'internal.sendGtagEvent', qw);
    Wn() ? Lg(a, 'internal.injectScript', Ca) : Lg(a, 'internal.injectScript', bw);
    Lg(a, 'internal.locateUserData', gw);
    Lg(a, 'internal.addFormInteractionListener', nu);
    Lg(a, 'internal.addFormSubmitListener', uu);
    Lg(a, 'internal.getFlags', xg);
    return function(c) {
        var d;
        if (a.g.hasOwnProperty(c)) d = a.get(c, this);
        else {
            var e;
            if ((e = a.o.hasOwnProperty(c))) {
                var f = !1;
                var g = this.g.g;
                if (g) {
                    var h = g.Jc();
                    if (h) {
                        0 !== h.indexOf('__cvt_') && (f = !0);
                    }
                }
                e = f;
            }
            if (e) {
                var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                d = k;
            } else throw Error(c + ' is not a valid API name.');
        }
        return d;
    };
};
var Fw = () => !1;
var Gw = () => {
    var a = {};
    return (b, c, d) => {};
};
var Hw;
function Iw() {
    var a = Hw;
    return (b, c, d) => {
        var e = d && d.event;
        Jw(c);
        var f = new sb();
        Oa(c, (r, t) => {
            var u = Hc(t);
            void 0 === u && void 0 !== t && Ug(44);
            f.set(r, u);
        });
        a.g.g.F = mf();
        var g = {
            Ii: yf(b),
            eventId: void 0 !== e ? e.id : void 0,
            Ac: void 0 !== e ? (r) => e.kb.Ac(r) : void 0,
            Jc() {
                return b;
            },
            log() {},
            tk: {
                index: d && d.index,
                type: d && d.type
            }
        };
        if (Fw()) {
            var h = Gw();
            var k = void 0;
            var n = void 0;
            g.Ea = {
                Bc: {},
                bc(r, t, u) {
                    1 === t && (k = r);
                    7 === t && (n = u);
                    h(r, t, u);
                },
                pf: Fg()
            };
            g.log = function(r, t) {
                if (k) {
                    var u = Array.prototype.slice.call(arguments, 1);
                    h(k, 4, {
                        level: r,
                        source: n,
                        message: u
                    });
                }
            };
        }
        var p = oe(a, g, [b, f]);
        a.g.g.F = void 0;
        p instanceof pa && 'return' === p.g && (p = p.o);
        return Ic(p);
    };
}
function Jw(a) {
    var b = a.gtmOnSuccess;
    var c = a.gtmOnFailure;
    Ea(b) &&
        (a.gtmOnSuccess = () => {
            I(b);
        });
    Ea(c) &&
        (a.gtmOnFailure = () => {
            I(c);
        });
}
function Kw() {
    Hw.g.g.N = (a, b, c) => {
        Vg.SANDBOXED_JS_SEMAPHORE = Vg.SANDBOXED_JS_SEMAPHORE || 0;
        Vg.SANDBOXED_JS_SEMAPHORE++;
        try {
            return a.apply(b, c);
        } finally {
            Vg.SANDBOXED_JS_SEMAPHORE--;
        }
    };
}
function Lw(a) {
    void 0 !== a &&
        Oa(a, (b, c) => {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, '');
                gh[e] = gh[e] || [];
                gh[e].push(b);
            }
        });
}
var Mw = encodeURI;
var X = encodeURIComponent;
var Nw = ec;
var Ow = (a, b) => {
    if (!a) return !1;
    var c = tj(vj(a), 'host');
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
            var f = c.length - e.length;
            0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
            if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
    }
    return !1;
};
var Pw = (a, b, c) => {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
};
var Zx = {};
Zx[R.Pb] = '';
Zx[R.ra] = '';
Zx[R.Ha] = '';
Zx[R.ia] = 'auto';
Zx[R.ab] = '/';
Zx[R.qa] = 63072e3;
Zx[R.vc] = 30;
Zx[R.od] = 1e4;
Zx[R.Vb] = !0;
var $x = function(a, b, c, d, e, f) {
    f = void 0 === f ? !1 : f;
    this.s = a;
    this.eventName = b;
    this.C = c;
    this.K = d.eventModel;
    this.Bi = d.containerConfig;
    this.o = d;
    this.Na = d.getWithConfig(R.rb) ? 1 : 7;
    this.Ge = d.getWithConfig(R.sb) ? 1 : 7;
    this.N = e;
    this.ob = this.Fe = this.zg = this.F = this.vg = this.xg = this.td = !1;
    this.Gb = 0;
    this.Ke = this.Le = this.sd = !1;
    this.Oe = void 0;
    this.Xb = 0;
    this.ug = this.Je = this.yg = this.g = this.Ie = this.He = void 0;
    this.Ji = f;
};
l = $x.prototype;
l.Ia = function(a, b) {
    void 0 === this.B(a) && (this.K[a] = b);
};
l.lh = function(a, b) {
    b <= this.Na && ((this.K[R.rb] = a), (this.Na = b));
};
l.mh = function(a, b) {
    b <= this.Ge && ((this.K[R.sb] = a), (this.Ge = b));
};
l.B = function(a) {
    return void 0 !== this.K[a] ? this.K[a] : void 0 !== this.o.getWithConfig(a) ? this.o.getWithConfig(a) : void 0 !== this.N[a] ? this.N[a] : Zx[a];
};
l.getRemoteConfig = function(a) {
    return void 0 !== this.o.remoteConfig[a] ? this.o.remoteConfig[a] : this.N[a];
};
l.Md = function(a) {
    var b = this.Fb(R.gd, this.N[R.gd]);
    if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName];
};
l.Fb = function(a, b) {
    var c = fj(this.s);
    if (c && c.hasOwnProperty(a)) return c[a];
    return b;
};
l.Rg = function() {
    var a = this.B(R.Aa);
    if ('object' === typeof a) return a;
};
l.Sg = function() {
    return !!this.Rg();
};
l.abort = () => {
    throw 'ABORT';
};
l.Ua = function() {
    return !((!0 !== this.B(R.sc) && 'true' !== this.B(R.sc)) || !this.B(R.sa));
};
l.Aj = function() {
    return this.F || !!this.B(R.Yf);
};
var ay = !1;
var by = () => {
    ay = !0;
    ay = !0;
};
var cy = (a) => {
    var b = !1;
    b = a.eventName === R.mc && Zh() && a.Ua();
    return !(!Wb.sendBeacon || a.sd || a.Le || a.F || a.Fe || a.ob || b || ay);
};
var dy = (a) => {
    Sg('GA4_EVENT', a);
};
var fy = (a) => !a || ey.test(a) || R.ki.hasOwnProperty(a);
var gy = (a) => {
    var b = a[R.xe];
    if (b) return b;
    var c = a[R.wb];
    if (Ga(c)) {
        if ('function' === typeof URL)
            try {
                return new URL(c).pathname;
            } catch (e) {
                return;
            }
        var d = vj(c);
        return d.hostname ? tj(d, 'path') : void 0;
    }
};
var hy = (a, b, c) => {
    if (c)
        switch (c.type) {
            case 'event_name':
                return a;
            case 'const':
                return c.const_value;
            case 'event_param':
                var d = c.event_param.param_name,
                    e = b[d];
                return e;
        }
};
var iy = (a, b, c) => {
    for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
            var g = f.edit_param.param_name,
                h = hy(a, b, f.edit_param.param_value),
                k;
            if (h) {
                var n = Number(h);
                k = isNaN(n) ? h : n;
            } else k = h;
            b[g] = k;
        } else f.delete_param && delete b[f.delete_param.param_name];
    }
};
var jy = (a, b) => {
    var c = b.values || [],
        d = hy(a.eventName, a.K, c[0]),
        e = hy(a.eventName, a.K, c[1]),
        f = b.type;
    if ('eqi' === f || 'swi' === f || 'ewi' === f || 'cni' === f)
        (d = 'string' === typeof d ? d.toLowerCase() : d), (e = 'string' === typeof e ? e.toLowerCase() : e);
    var g = !1;
    switch (f) {
        case 'eq':
        case 'eqi':
            g = String(d) == String(e);
            break;
        case 'sw':
        case 'swi':
            g = 0 == String(d).indexOf(String(e));
            break;
        case 'ew':
        case 'ewi':
            g = Pt(d, e);
            break;
        case 'cn':
        case 'cni':
            g = 0 <= String(d).indexOf(String(e));
            break;
        case 'lt':
            g = Number(d) < Number(e);
            break;
        case 'le':
            g = Number(d) <= Number(e);
            break;
        case 'gt':
            g = Number(d) > Number(e);
            break;
        case 'ge':
            g = Number(d) >= Number(e);
            break;
        case 're':
        case 'rei':
            g = Rt(d, e, 'rei' === f);
    }
    return !!b.negate !== g;
};
var ky = (a, b) => {
    var c = b.event_name_predicate;
    if (c && !jy(a, c)) return !1;
    var d = b.conditions || [];
    if (0 === d.length) return !0;
    for (var e = 0; e < d.length; e++) {
        for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
            if (!jy(a, f[h])) {
                g = !1;
                break;
            }
        if (g) return !0;
    }
    return !1;
};
var ey = /^(_|ga_|google_|gtag\.|firebase_).*$/;
var ly = !1;
ly = !0;
var my = (a) => {
    var b = 0,
        c = 0;
    return {
        start() {
            b = ab();
        },
        stop() {
            c = this.get();
        },
        get() {
            var d = 0;
            a.kf() && (d = ab() - b);
            return d + c;
        }
    };
};
var ny = function() {
    this.g = void 0;
    this.o = 0;
    this.isActive = this.isVisible = this.s = !1;
    this.F = this.C = void 0;
};
l = ny.prototype;
l.ni = function(a) {
    var b = this;
    if (!this.g) {
        this.s = H.hasFocus();
        this.isVisible = !H.hidden;
        this.isActive = !0;
        var c = (d, e, f) => {
            fc(d, e, (g) => {
                b.g.stop();
                f(g);
                b.kf() && b.g.start();
            });
        };
        c(m, 'focus', () => {
            b.s = !0;
        });
        c(m, 'blur', () => {
            b.s = !1;
        });
        c(m, 'pageshow', (d) => {
            b.isActive = !0;
            d.persisted && Ug(56);
            b.F && b.F();
        });
        c(m, 'pagehide', () => {
            b.isActive = !1;
            b.C && b.C();
        });
        c(H, 'visibilitychange', () => {
            b.isVisible = !H.hidden;
        });
        a.Ua() &&
            -1 === (Wb.userAgent || '').indexOf('Firefox') &&
            -1 === (Wb.userAgent || '').indexOf('FxiOS') &&
            c(m, 'beforeunload', () => {
                by();
            });
        this.xf();
        this.o = 0;
    }
};
l.xf = function() {
    this.o += this.Ld();
    this.g = my(this);
    this.kf() && this.g.start();
};
l.Zj = function(a) {
    a.Xb = this.Ld();
};
l.lj = function(a) {
    a.Xb = 0;
    this.xf();
    this.o = 0;
};
l.kf = function() {
    return this.s && this.isVisible && this.isActive;
};
l.fj = function() {
    return this.o + this.Ld();
};
l.Ld = function() {
    return (this.g && this.g.get()) || 0;
};
l.Nj = function(a) {
    this.C = a;
};
l.hh = function(a) {
    this.F = a;
};
function oy() {
    return (m.gaGlobal = m.gaGlobal || {});
}
var py = () => {
    var a = oy();
    a.hid = a.hid || Ka();
    return a.hid;
};
var qy = (a, b) => {
    var c = oy();
    if (void 0 == c.vid || (b && !c.from_cookie))(c.vid = a), (c.from_cookie = b);
};
var ty = (a, b) => {
    var c = !0;
    return c;
};
var vy = (a) => {
    var b;
    return b;
};
var ry = (a, b, c) => {
    var d = String(c.B(R.ia)),
        e = String(c.B(R.ab)),
        f = Number(c.B(R.qa)),
        g = c.B(R.Qb),
        h = {
            Ka: R.I,
            domain: d,
            path: e,
            expires: f ? new Date(ab() + 1e3 * f) : void 0,
            flags: '' + c.B(R.Ha)
        };
    if (!1 === g && wy(c) === b) return !0;
    var k = nk(b, xy[0], d, e);
    return 1 !== gk(a, k, h);
};
var uy = (a, b) => {
    var c = '' + b.B(R.ia),
        d = '' + b.B(R.ab),
        e = mk(a, c, d, xy, R.I);
    if (!e) {
        var f = String(b.B(R.Pb));
        f && f != a && (e = mk(f, c, d, xy, R.I));
    }
    return e;
};
var sy = (a) => a.B(R.ra) + '_ga_ecid';
var zy = (a, b) => ry(yy(b), a, b);
var wy = (a) => uy(yy(a), a);
var yy = (a) => String(a.B(R.ra)) + '_ga';
var xy = ['GA1'];
var Cy = (a, b) => {
    var c = Ay(b),
        d = String(b.B(R.ia)),
        e = String(b.B(R.ab)),
        f = Number(b.B(R.qa)),
        g = nk(a, By[0], d, e),
        h = {
            Ka: R.I,
            domain: d,
            path: e,
            expires: f ? new Date(ab() + 1e3 * f) : void 0,
            flags: String(b.B(R.Ha))
        };
    return 1 !== gk(c, g, h);
};
var Dy = (a) => {
    var b = Ay(a),
        c = String(a.B(R.ia)),
        d = String(a.B(R.ab));
    return mk(b, c, d, By, R.I);
};
var By = ['GS1'];
var Ay = (a) => String(a.B(R.ra)) + '_ga_' + a.s.substr(2);
var Ey = (a) => {
    var b;
    var c = a.K[R.wc],
        d = a.K[R.ze],
        e = !!a.K[R.ld];
    if (c && d) {
        var f = [c, d, Sa(a.K[R.ye]), a.C, a.Gb];
        b = f.join('.');
    } else b = void 0;
    return b;
};
var Fy = (a) => {
    var b = a.B(R.ja),
        c = a.getRemoteConfig(R.ja);
    if (c === b) return c;
    var d = Gc(b);
    c && c[R.O] && (d[R.O] = (d[R.O] || []).concat(c[R.O]));
    return d;
};
var Gy = (a, b, c, d) => {
    var e = al(!0);
    if ('1' !== e._up) return {};
    var f = e[b],
        g = e[d],
        h;
    a.g && (h = e[c]);
    return {
        clientId: f,
        Mg: h,
        kh: g
    };
};
var Hy = (a, b, c, d) => {
    var e = al(!0),
        f = e[b];
    f && (a.lh(f, 2), zy(f, a));
    var g = e._z;
    g && (a.Ie = g);
    var h = e[c];
    a.g && h && (a.mh(h, 2), ty(h, a));
    var k = e[d];
    k && Cy(k, a);
    return a.g ? !!(f && h && k) : !(!f || !k);
};
var Iy;
var Jy = !1;
var Ky = [0, 1, 2, 3];
var Ly = !1;
var My = (a) => {
    var b = Fy(a) || {},
        c = yy(a),
        d = sy(a),
        e = Ay(a);
    il(b[R.Tb], !!b[R.O]) && Hy(a, c, d, e) && (Ly = !0);
    if (b[R.O]) {
        var f = () => {
            var g = {},
                h = wy(a);
            h && (g[c] = h);
            if (a.g) {
                var k = vy(a);
                k && (g[d] = k);
            }
            var n = Dy(a);
            n && (g[e] = n);
            var p = Xj('FPLC', void 0, void 0, R.I);
            p.length && (g._fplc = p[0]);
            return g;
        };
        Jy ? fl(f, b[R.O], b[R.Ub], !!b[R.vb], Iy) : fl(f, b[R.O], b[R.Ub], !!b[R.vb]);
    }
};
var Oy = (a) => {
    if (!a.B(R.hb)) return {};
    var b = yy(a),
        c = sy(a),
        d = Ay(a);
    gl(() => {
        var e;
        if (li('analytics_storage')) e = {};
        else {
            var f = {},
                g = ((f._up = '1'), (f[b] = a.K[R.rb]), (f[d] = Ey(a)), f);
            a.g && (g[c] = a.K[R.sb]);
            e = g;
        }
        return e;
    }, 1);
    if (!li('analytics_storage') && Ny()) return Gy(a, b, c, d);
    return {};
};
var Ny = () => {
    var a = sj(m.location, 'host'),
        b = sj(vj(H.referrer), 'host');
    return a && b ? (a === b || 0 <= a.indexOf('.' + b) || 0 <= b.indexOf('.' + a) ? !0 : !1) : !1;
};
var Py = () => {
    var a = ab();
    var b = a + 864e5;
    var c = 20;
    var d = 5e3;
    return () => {
        var e = ab();
        e >= b && ((b = e + 864e5), (d = 5e3));
        if (1 > d) return !1;
        c = Math.min(c + ((e - a) / 1e3) * 5, 20);
        a = e;
        if (1 > c) return !1;
        d--;
        c--;
        return !0;
    };
};
var Qy = !1;
Qy = !0;
var Ry = '' + Ka();
var Sy = !1;
var Ty = void 0;
var Uy = () => {
    if (Ea(m.__uspapi)) {
        var a = '';
        try {
            m.__uspapi('getUSPData', 1, (b, c) => {
                if (c && b) {
                    var d = b.uspString;
                    d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d);
                }
            });
        } catch (b) {}
        return a;
    }
};
var Vy = (a, b) => {
    if (b.Ua()) {
        var c = Uy();
        c && (a.us_privacy = c);
        var d = Go();
        d && (a.gdpr = d);
        var e = Eo();
        e && (a.gdpr_consent = e);
    }
};
var Xy = (a, b) => {
    if (Zh() && ((a.gcs = mi()), b.Je && (a.gcu = '1'), b.Ua())) {
        $h() && (a.gcd = ni());
        var c = b.B(R.V);
        a.adr = void 0 !== c && !1 !== c ? '1' : '0';
        b.Je && (a.gcut = Wy[b.ug || '']);
    }
};
var Yy = (a, b, c) => {
    void 0 === c && (c = {});
    if ('object' === typeof b)
        for (var d in b) Yy(a + '.' + d, b[d], c);
    else c[a] = b;
    return c;
};
var Zy = (a) => {
    var b = 'https://www.google-analytics.com/g/collect',
        c = Sn(a.B(R.sa), '/g/collect');
    if (c) return c;
    var d = !0;
    (li(R.D) && li(R.I)) || (d = !1);
    var e = !1 !== a.B(R.Fa);
    e = !0;
    var f = a.Fb(R.eb, a.B(R.eb)),
        g = a.Fb(R.Sb, a.B(R.Sb));
    f && !g && e && !1 !== a.B(R.nc) && vq() && d && (b = 'https://analytics.google.com/g/collect');
    return b;
};
var $y = !1;
$y = !0;
var az = {};
var Wy = ((az[R.D] = '1'), (az[R.I] = '2'), az);
var bz = {};
bz[R.hi] = 'tid';
bz[R.rb] = 'cid';
bz[R.ub] = 'ul';
bz[R.se] = '_fid';
bz[R.hg] = 'tt';
bz[R.ue] = 'ir';
var cz = {};
cz[R.wc] = 'sid';
cz[R.ze] = 'sct';
cz[R.ye] = 'seg';
cz[R.wb] = 'dl';
cz[R.Qa] = 'dr';
cz[R.md] = 'dt';
cz[R.da] = 'cu';
cz[R.yb] = 'uid';
var dz = {};
dz[R.Nf] = 'cc';
dz[R.Of] = 'ci';
dz[R.Pf] = 'cm';
dz[R.Qf] = 'cn';
dz[R.Rf] = 'cs';
dz[R.Sf] = 'ck';
var ez = function(a, b, c) {
    function d(z, A) {
        if (void 0 !== A && !R.ii.hasOwnProperty(z)) {
            null === A && (A = '');
            var C;
            if ('_' === z.charAt(0)) {
                e[z] = Ef(A, 300);
            } else if (bz[z])(C = bz[z]), (e[C] = Ef(A, 300));
            else if (cz[z])(C = cz[z]), (g[C] = Ef(A, 300));
            else if (!t(z, A)) {
                r(z, A);
            }
        }
    }
    var e = {};
    var f = {};
    var g = {};
    e.v = '2';
    e.tid = a.s;
    e.gtm = $n();
    e._p = py();
    a.Oe && (e.sr = a.Oe);
    a.Ie && (e._z = a.Ie);
    c && (e.em = c);
    a.ob && (e._gaz = 1);
    Xy(e, a);
    Vy(e, a);
    a.yg && (e.gtm_up = '1');
    if ($y) {
        var h = lb($i(a.o, R.X, 1), '.');
        h && (e.gdid = h);
    }
    f.en = Ef(a.eventName, 40);
    a.td && (f._fv = a.xg ? 2 : 1);
    a.vg && (f._nsi = 1);
    a.F && (f._ss = a.zg ? 2 : 1);
    a.sd && (f._c = 1);
    0 < a.Xb && (f._et = a.Xb);
    if (a.Ke) {
        var k = a.B(R.aa);
        if (Ia(k))
            for (var n = 0; n < k.length && 200 > n; n++) f['pr' + (n + 1)] = Jf(k[n]);
    }
    a.He && (f._eu = a.He);
    if ($y) {
        var p = lb($i(a.o, R.X, 2), '.');
        p && (f.edid = p);
    }
    for (
        var r = (z, A) => {
                z = Ef(z, 40);
                var C = 'ep.' + z,
                    E = 'epn.' + z;
                z = Ha(A) ? E : C;
                var D = Ha(A) ? C : E;
                f.hasOwnProperty(D) && delete f[D];
                f[z] = Ef(A, 100);
            },
            t = (z, A) => {
                var C = z.split('.');
                if (z === R.Aa && 'object' !== typeof A) return r(z, A), !0;
                if (C[0] === R.Aa) {
                    if ((1 < C.length || 'object' === typeof A) && a.Ua()) {
                        var E = Yy(z, A);
                        Oa(E, (D, F) => void r(D, F));
                    }
                    return !0;
                }
                return !1;
            },
            u = 0; u < R.jg.length;
        ++u
    ) {
        var q = R.jg[u];
        d(q, a.B(q));
    }
    a.Ke && d(R.da, a.B(R.da));
    Oa(a.Bi, d);
    Oa(a.K, d);
    var y = a.B(R.Ra) || {};
    (!1 !== a.B(R.Fa) && uq()) || (y._npa = '1');
    Oa(y, (z, A) => {
        if (void 0 !== A && (null === A && (A = ''), b[z] !== A)) {
            if (z !== R.yb || g.uid) {
                var C = (Ha(A) ? 'upn.' : 'up.') + Ef(z, 24);
                f[C] = Ef(A, 36);
            } else g.uid = Ef(A, 36);
            b[z] = A;
        }
    });
    var x = !1;
    return (
        Lf.call(
            this, {
                Wa: e,
                Ib: g,
                K: f
            },
            Zy(a),
            a.Ua(),
            x
        ) || this
    );
};
la(ez, Lf);
var fz = (a, b) => a.replace(/\$\{([^\}]+)\}/g, (c, d) => b[d] || c);
var gz = (a) => {
    var b = a.search;
    return a.protocol + '//' + a.hostname + a.pathname + (b ? b + '&richsstsse' : '?richsstsse');
};
var hz = (a) => {
    var b = {},
        c = '',
        d = a.pathname.indexOf('/g/collect');
    0 <= d && (c = a.pathname.substring(0, d));
    b.transport_url = a.protocol + '//' + a.hostname + c;
    return b;
};
var iz = (a, b) => {
    var c = new m.XMLHttpRequest();
    c.withCredentials = !0;
    var d = b ? 'POST' : 'GET',
        e = '',
        f = 0,
        g = vj(a),
        h = hz(g),
        k = gz(g);
    c.onprogress = (n) => {
        if (200 === c.status) {
            e += c.responseText.substring(f);
            f = n.loaded;
            for (var p = fz(e, h), r = p.indexOf('\n\n'); - 1 !== r;) {
                var t;
                a: {
                    var u = ba(p.substring(0, r).split('\n')),
                        q = u.next().value,
                        v = u.next().value;
                    if (q.startsWith('event: message') && v.startsWith('data: '))
                        try {
                            t = JSON.parse(v.substring(v.indexOf(':') + 1));
                            break a;
                        } catch (N) {}
                    t = void 0;
                }
                if (t) {
                    var w = t.send_pixel || [];
                    if (Array.isArray(w))
                        for (var y = 0; y < w.length; y++) {
                            var x = w[y],
                                z = ao('', 0);
                            if (1 === z) {
                                var A = Math.floor(2 * Math.random()) + 1,
                                    C,
                                    E = x,
                                    D = A,
                                    F = 0 < E.indexOf('?') ? '&' : '?';
                                C = '' + E + F + 'gtmexpsb=' + D;
                                2 === A ? nc(C) : ec(C);
                            } else 2 === z ? nc(x) : ec(x);
                        }
                }
                p = p.substring(r + 2);
                r = p.indexOf('\n\n');
            }
            e = p;
        }
    };
    c.open(d, k);
    c.send(b);
};
var mz = (a, b, c, d) => {
    var e = a + '?' + b;
    jz && (d = !(0 === e.indexOf('https://www.google-analytics.com/g/collect') || 0 === e.indexOf('https://analytics.google.com/g/collect')));
    kz && d && !ay ? iz(e, c) : lz(a, b, c);
};
var nz = (a) => (a && 0 === a.indexOf('google.') && 'google.com' != a ? 'https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&'.replace('%', a) : void 0);
var kz = !1;
kz = !0;
var jz = !1;
var oz = function() {
    this.C = 1;
    this.F = {};
    this.g = new Mf();
    this.o = -1;
};
oz.prototype.s = function(a, b) {
    var c = this;
    var d;
    try {
        d = new ez(a, this.F, b);
    } catch (n) {
        a.abort();
    }
    var e = cy(a);
    (e && this.g.C(d)) || this.flush();
    if (e && this.g.add(d)) {
        if (0 > this.o) {
            var f = m;
            var g = f.setTimeout;
            var h;
            a.Ua() ? (pz ? ((pz = !1), (h = qz)) : (h = rz)) : (h = 5e3);
            this.o = g.call(f, () => c.flush(), h);
        }
    } else {
        var k = Uf(d, this.C++);
        mz(d.o, k.tf, k.body, d.C);
        sz(d, a.Fe, a.ob, String(a.Fb(R.kd, a.B(R.kd))));
    }
};
oz.prototype.add = function(a) {
    a.Le ? this.N(a) : this.s(a);
};
oz.prototype.flush = function() {
    if (this.g.events.length) {
        var a = Vf(this.g, this.C++);
        mz(this.g.g, a.tf, a.body, this.g.o);
        this.g = new Mf();
        0 <= this.o && (m.clearTimeout(this.o), (this.o = -1));
    }
};
oz.prototype.N = function(a) {
    var b = this;
    var c = a.Rg();
    c
        ?
        Ni(c, (d) => {
            b.s(a, d);
        }) :
        this.s(a);
};
var sz = (a, b, c, d) => {
    function e(h) {
        f.push(h + '=' + encodeURIComponent('' + a.Wa[h]));
    }
    if (b || c) {
        var f = [];
        e('tid');
        e('cid');
        e('gtm');
        f.push('aip=1');
        a.Ib.uid && f.push('uid=' + encodeURIComponent('' + a.Ib.uid));
        b && (lz('https://stats.g.doubleclick.net/g/collect', 'v=2&' + f.join('&')), fi('https://stats.g.doubleclick.net/g/collect?v=2&' + f.join('&')));
        if (c) {
            f.push('z=' + Ka());
            var g = nz(d);
            g && ec(g + f.join('&'));
        }
    }
};
var lz = (a, b, c) => {
    var d = a + '?' + b;
    c ? Wb.sendBeacon && Wb.sendBeacon(d, c) : nc(d);
};
var qz = ao('', 500);
var rz = ao('', 5e3);
var pz = !0;
var tz = window;
var uz = document;
var vz = (a) => {
    var b = tz._gaUserPrefs;
    if ((b && b.ioo && b.ioo()) || (a && !0 === tz['ga-disable-' + a])) return !0;
    try {
        var c = tz.external;
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
    } catch (f) {}
    for (var d = Tj('AMP_TOKEN', String(uz.cookie), !0), e = 0; e < d.length; e++)
        if ('$OPT_OUT' == d[e]) return !0;
    return uz.getElementById('__gaOptOutExtension') ? !0 : !1;
};
var wz = {};
var xz = (a, b) => {
    var c = R.D;
    li(c) ||
        pi(() => {
            b.Je = !0;
            b.ug = c;
            a.Ag(b);
        }, c);
};
wz.ji = '';
var yz = function(a, b) {
    this.ob = a;
    this.Xb = b;
    this.Na = new oz();
    this.o = void 0;
    this.F = new ny();
    this.g = this.C = this.s = void 0;
    this.N = !1;
};
l = yz.prototype;
l.Hj = function(a, b, c) {
    var d = this;
    var e = !1;
    if (c.eventModel[R.Wb]) {
        e = !0;
        if ('_' === a.charAt(0)) return;
        a !== R.za && a !== R.Oa && fy(a) && Ug(58);
        zz(c);
    }
    var f = new $x(this.ob, a, b, c, this.Xb, e);
    var g = [R.I];
    var h = !1;
    h = f.Ua();
    (f.Fb(R.eb, f.B(R.eb)) || h) && g.push(R.D);
    qi(() => {
        d.Ij(f);
    }, g);
};
l.Ij = function(a) {
    this.g = a;
    try {
        vz(a.s) && (Ug(28), a.abort());
        0 <= wz.ji.replace(/\s+/g, '').split(',').indexOf(a.eventName) && (Ug(33), a.abort());
        var b = a.Md();
        b && b.blacklisted && (Ug(34), a.abort());
        var c = H.location.protocol;
        'http:' != c && 'https:' != c && (Ug(29), a.abort());
        Wb && 'preview' == Wb.loadPurpose && (Ug(30), a.abort());
        var d = Vg.grl;
        d || ((d = Py()), (Vg.grl = d));
        d() || (Ug(35), a.abort());
        this.oi(a);
        this.F.Zj(a);
        var g = this.gh;
        var h;
        b: {
            if (!a.B(R.hb) || li(R.I) || 1 === a.Na) break b;
            a.yg = !0;
        }
        a.eventName === R.za ? (a.B(R.hb) && Gl(['aw', 'dc']), My(a), (h = Oy(a))) : (h = {});
        g.call(this, h);
        a.eventName == R.za &&
            (a.Ji && 0 < bj(a.o).length && (Ug(68), 1 < Vg.configCount && Ug(69)),
                a.B(R.Vb) || a.abort(),
                a.o.eventModel[R.X] && ((a.o.containerConfig[R.X] = a.o.eventModel[R.X]), (a.o.eventModel[R.X] = void 0)),
                (a.eventName = R.mc));
        var k = this.o;
        var n = this.s;
        var p = this.C;
        var r = this.F;
        var t = Dy(a);
        t || (t = p);
        var u = Sa(a.B(R.vc));
        var q;
        q = Sa(a.B(R.od));
        var v;
        a: {
            if (t) {
                var w = t.split('.');
                if (!(5 > w.length || 6 < w.length)) {
                    v = {
                        sessionId: w[0],
                        Af: Number(w[1]),
                        Td: !!Number(w[2]),
                        lf: Number(w[3]),
                        Gb: Number(w[4] || 0),
                        Oc: '1' === w[5]
                    };
                    break a;
                }
            }
            v = void 0;
        }
        v && v.Gb && (a.Gb = Math.max(0, v.Gb - Math.max(0, a.C - v.lf)));
        var y = !1;
        v ||
            ((y = a.td = !0),
                (v = {
                    sessionId: String(a.C),
                    Af: 1,
                    Td: !1,
                    lf: a.C,
                    Oc: !1
                }));
        a.C > v.lf + 60 * u && ((y = !0), (v.sessionId = String(a.C)), v.Af++, (v.Td = !1));
        if (y)(a.F = !0), r.lj(a);
        else if (r.fj() > q || a.eventName == R.mc) v.Td = !0;
        a.Ia(R.wc, v.sessionId);
        a.Ia(R.ze, v.Af);
        a.Ia(R.ye, v.Td ? 1 : 0);
        var x = a.B(R.rb);
        var z = a.Na;
        x || ((x = wy(a)), (z = 3));
        x || ((x = k), (z = 4));
        if (!x) {
            var A = li(R.I);
            var C = oy();
            x = !C.from_cookie || A ? C.vid : void 0;
            z = 5;
        }
        x ? (x = '' + x) : ((a.td = a.vg = !0), (x = jk()), (z = 6));
        a.lh(x, z);
        a: {}
        var F = '';
        var N = H.location;
        if (N) {
            var M = N.pathname || '';
            '/' != M.charAt(0) && (M = '/' + M);
            F = N.protocol + '//' + N.hostname + M + N.search;
        }
        a.Ia(R.wb, F);
        var P;
        a: {
            var O = Xj('_opt_expid', void 0, void 0, R.I)[0];
            if (O) {
                var K = decodeURIComponent(O).split('$');
                if (3 === K.length) {
                    P = K[2];
                    break a;
                }
            }
            if (void 0 !== Vg.ga4_referrer_override) P = Vg.ga4_referrer_override;
            else {
                var L = oh('gtm.gtagReferrer.' + a.s);
                P = L ? '' + L : H.referrer;
            }
        }
        var T = P;
        T && a.Ia(R.Qa, T);
        a.Ia(R.md, H.title);
        a.Ia(R.ub, (Wb.language || '').toLowerCase());
        var Z = m.screen;
        var ia = Z ? Z.width : 0;
        var Da = Z ? Z.height : 0;
        a.Oe = ia + 'x' + Da;
        var Ba = !1 !== a.B(R.Fa);
        Ba = !0;
        if (Ba && !1 !== a.B(R.nc) && vq() && li(R.D)) {
            var U = a.Fb(R.eb, a.B(R.eb));
            var ka = a.Fb(R.Sb, a.B(R.Sb));
            a.Aj() && (a.Fe = !!U);
            U && !ka && 0 === a.Gb && ((a.Gb = 60), (a.ob = !0));
        }
        Az(a);
        a.Ke = R.kg.hasOwnProperty(a.eventName);
        for (var Fa = a.B(R.ve) || [], Qa = 0; Qa < Fa.length; Qa++) {
            var jb = Fa[Qa];
            if (jb.rule_result) {
                a.Ia(R.hg, jb.traffic_type);
                dy(3);
                break;
            }
        }
        if (a.B(R.sa)) {
            var Ya = Fy(a) || {};
            var Fe = il(Ya[R.Tb], !!Ya[R.O]) ? al(!0)._fplc : void 0;
            a.K._fplc = Fe || (0 < Xj('FPLC', void 0, void 0, R.I).length ? void 0 : '0');
        }
        if (void 0 === a.B(R.ue)) {
            var ic = a.B(R.nd);
            var Ge;
            var Qd;
            a: {
                if (Ly) {
                    var He = Fy(a) || {};
                    if (He && He[R.O])
                        for (var Rc = tj(vj(a.B(R.Qa)), 'host', !0), Rd = He[R.O], md = 0; md < Rd.length; md++)
                            if (Rd[md] instanceof RegExp) {
                                if (Rd[md].test(Rc)) {
                                    Qd = !0;
                                    break a;
                                }
                            } else if (0 <= Rc.indexOf(Rd[md])) {
                        Qd = !0;
                        break a;
                    }
                }
                Qd = !1;
            }
            var nd;
            if (!(nd = Qd))
                if (Qy) nd = !1;
                else {
                    var Sd = tj(vj(a.B(R.Qa)), 'host', !0);
                    var Td;
                    var Sc = String(a.B(R.ia));
                    if ('none' !== Sc)
                        if ('auto' !== Sc) Td = Sc;
                        else {
                            if (!Sy) {
                                for (var Of = String(a.B(R.ab)), Ud = dk(), jc = 0; jc < Ud.length; jc++)
                                    if ('none' !== Ud[jc]) {
                                        var Pf = String(a.B(R.ra)) + '_ga_autodomain';
                                        if (
                                            0 ===
                                            gk(Pf, Ry, {
                                                Ka: R.I,
                                                domain: Ud[jc],
                                                path: Of
                                            })
                                        ) {
                                            gk(Pf, void 0, {
                                                Ka: R.I,
                                                domain: Ud[jc],
                                                path: Of
                                            });
                                            Ty = Ud[jc];
                                            break;
                                        }
                                    }
                                Sy = !0;
                            }
                            Td = Ty;
                        }
                    else Td = void 0;
                    var Lh = Td;
                    nd = Lh ? 0 <= Sd.indexOf(Lh) : !1;
                }
            if (!(Ge = nd)) {
                var xa;
                if ((xa = ic))
                    a: {
                        for (var oa = ic.include_conditions || [], Za = 0; Za < oa.length; Za++)
                            if (oa[Za].test(a.B(R.Qa))) {
                                xa = !0;
                                break a;
                            }
                        xa = !1;
                    }
                Ge = xa;
            }
            Ge && (a.Ia(R.ue, 1), dy(4));
        }
        if (a.eventName == R.Oa) {
            var Vd = a.B(R.Pa);
            a.B(R.cb)(a.B(Vd));
            a.abort();
        }
        if (a.K[R.Ad]) delete a.K[R.Ad];
        else {
            var Dc = a.B(R.me);
            if (Dc) {
                for (var Jb = Dc.edit_rules || [], Qb = 0; Qb < Jb.length; Qb++)
                    a: {
                        var Ua = a;
                        var ob = Jb[Qb];
                        if (ky(Ua, ob)) {
                            if (ob.new_event_name) {
                                var W = 'string' === typeof ob.new_event_name ? String(ob.new_event_name) : hy(Ua.eventName, Ua.K, ob.new_event_name);
                                if (fy(W)) break a;
                                Ua.eventName = String(W);
                            }
                            iy(Ua.eventName, Ua.K, ob);
                            if (ly) {
                                Ua.K[R.Ad] = !0;
                                var Ie = Ua.eventName;
                                var Je = Ua.K;
                                var Ma = Ua.s;
                                qr().insert('event', [Je, Ie], Ma);
                                dy(2);
                                Ua.abort();
                            } else dy(2);
                        }
                    }
                for (var Ke = Dc.synthesis_rules || [], od = 0; od < Ke.length; od++) {
                    var pd = a;
                    var Wd = Ke[od];
                    if (ky(pd, Wd)) {
                        var qd = Wd.new_event_name;
                        if (!fy(qd)) {
                            var Le = Wd.merge_source_event_params ? Gc(pd.K) : {};
                            Le[R.Ad] = !0;
                            iy(qd, Le, Wd);
                            var Xd = qd;
                            var Yd = Le;
                            var Qf = pd.s;
                            qr().insert('event', [Yd, Xd], Qf);
                            dy(1);
                        }
                    }
                }
            }
        }
        var Me = a.K[R.Ae];
        if (Ia(Me))
            for (var Ab = 0; Ab < Me.length; Ab++) dy(Me[Ab]);
        var fb = Tg('GA4_EVENT');
        fb && (a.He = fb);
        var Xa = this.gh;
        var Ra = this.o;
        var Kb = this.s;
        var Zd;
        var Tc = Ey(a);
        Tc ? (Cy(Tc, a) || (Ug(25), a.abort()), (Zd = Tc)) : (Zd = void 0);
        var Rf = Zd;
        var Mh;
        var rd = a.K[R.rb];
        Ra && rd === Ra ? (Mh = rd) : rd ? ((rd = '' + rd), zy(rd, a) || (Ug(31), a.abort()), qy(rd, li(R.I)), (Mh = rd)) : (Ug(32), a.abort(), (Mh = ''));
        var Hz = Mh;
        var Sf;
        a: {
            Sf = void 0;
        }
        Xa.call(this, {
            clientId: Hz,
            Mg: Sf,
            kh: Rf
        });
        this.Yj();
        a.Ua() && ('page_view' === a.eventName || a.sd) && xz(this, a);
        this.F.xf();
        this.Ag(a);
        a.o.onSuccess();
    } catch (Mz) {
        a.o.onFailure();
    }
    delete Rg.GA4_EVENT;
};
l.Ag = function(a) {
    this.Na.add(a);
};
l.gh = function(a) {
    var b = a.clientId;
    var c = a.Mg;
    var d = a.kh;
    b && d && ((this.o = b), (this.s = c), (this.C = d));
};
l.flush = function() {
    this.Na.flush();
};
l.Yj = function() {
    var a = this;
    if (!this.N) {
        var b = li(R.I);
        oi([R.I], () => {
            var c = li(R.I);
            if (b ^ c && a.g && a.C && a.o) {
                var d = a.o;
                if (c) {
                    var e = wy(a.g);
                    e ? ((a.o = e), (a.C = Dy(a.g)), a.g.g && (a.s = vy(a.g))) : (zy(a.o, a.g), Cy(a.C, a.g), qy(a.o, !0), a.g.g && a.s && ty(a.s, a.g));
                } else {
                    a.C = void 0;
                    a.o = void 0;
                    a.s = void 0;
                }
                b = c;
            }
        });
        this.N = !0;
    }
};
l.oi = function(a) {
    a.eventName !== R.Oa && this.F.ni(a);
};
var Az = (a) => {
    var b = (c) => !!c && c.conversion;
    a.sd = b(a.Md());
    a.td && (a.xg = b(a.Md('first_visit')));
    a.F && (a.zg = b(a.Md('session_start')));
};
function zz(a) {
    delete a.eventModel[R.Wb];
    Bz(a.eventModel);
}
var Bz = (a) => {
    Oa(a, (c) => {
        '_' === c.charAt(0) && delete a[c];
    });
    var b = a[R.Ra] || {};
    Oa(b, (c) => {
        '_' === c.charAt(0) && delete b[c];
    });
};
var Cz = (a) => {
    if ('prerender' == H.visibilityState) return !1;
    a();
    return !0;
};
var Dz = (a) => {
    if (!Cz(a)) {
        var b = !1,
            c = () => {
                !b && Cz(a) && ((b = !0), gc(H, 'visibilitychange', c), Ug(55));
            };
        fc(H, 'visibilitychange', c);
        Ug(54);
    }
};
var Ez = (a, b, c) => {
    tr(b, c, a);
};
var Fz = (a, b, c) => {
    tr(b, c, a, !0);
};
var Iz = (a, b) => {
    var c = new yz(a, b);
    Dz(() => {
        Gz(a, c);
    });
};
function Gz(a, b) {
    var c = b.F;
    sr(a, (d, e, f, g) => {
        b.Hj(e, f, g);
    });
    c.Nj(() => {
        qr().flush();
        1e3 <= c.Ld() && Wb.sendBeacon && Ez(a, R.be, {});
        by();
        b.flush();
        c.hh(() => {
            ay = !1;
            ay = !1;
            c.hh(void 0);
        });
    });
}
var Y = {
    h: {}
};
(Y.h.ehl = ['google']),
(() => {
    function a(k) {
        return k.target && k.target.location && k.target.location.href ? k.target.location.href : ft();
    }
    function b(k, n) {
        fc(k, 'hashchange', (p) => {
            var r = a(p);
            n({
                source: 'hashchange',
                state: null,
                url: ht(r),
                R: gt(r)
            });
        });
    }
    function c(k, n) {
        fc(k, 'popstate', (p) => {
            var r = a(p);
            n({
                source: 'popstate',
                state: p.state,
                url: ht(r),
                R: gt(r)
            });
        });
    }
    function d(k, n, p) {
        var r = n.history;
        var t = r[k];
        if (Ea(t))
            try {
                r[k] = function(u, q, v) {
                    t.apply(r, [].slice.call(arguments, 0));
                    p({
                        source: k,
                        state: u,
                        url: ht(ft()),
                        R: gt(ft())
                    });
                };
            } catch (u) {}
    }
    function e() {
        var k = {
            source: null,
            state: V('history').state || null,
            url: ht(ft()),
            R: gt(ft())
        };
        return (n, p) => {
            var r = k;
            var t = {};
            t[r.source] = !0;
            t[n.source] = !0;
            if (!t.popstate || !t.hashchange || r.R != n.R) {
                var u = {
                    event: 'gtm.historyChange-v2',
                    'gtm.historyChangeSource': n.source,
                    'gtm.oldUrlFragment': k.R,
                    'gtm.newUrlFragment': n.R,
                    'gtm.oldHistoryState': k.state,
                    'gtm.newHistoryState': n.state,
                    'gtm.oldUrl': k.url,
                    'gtm.newUrl': n.url,
                    'gtm.triggers': p.join(',')
                };
                k = n;
                jt(u);
            }
        };
    }
    function f(k, n) {
        var p = '' + n;
        if (g[p]) g[p].push(k);
        else {
            var r = [k];
            g[p] = r;
            var t = e();
            var u = -1;
            h.push((q) => {
                0 <= u && ct(u);
                n
                    ?
                    (u = dt(() => {
                        t(q, r);
                        u = -1;
                    }, n)) :
                    t(q, r);
            });
        }
    }
    var g = {};
    var h = [];
    ((k) => {
        Y.__ehl = k;
        Y.__ehl.m = 'ehl';
        Y.__ehl.isVendorTemplate = !0;
        Y.__ehl.priorityOverride = 0;
    })((k) => {
        var n = V('self');
        var p = k.vtp_uniqueTriggerId || '0';
        var r = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
        0 > r ? (r = 0) : isNaN(r) && (r = 1e3);
        if (ot('ehl')) {
            var t = Js('ehl', 'reg');
            t ? (t(p, r), I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure);
        } else {
            var u = (q) => {
                for (var v = 0; v < h.length; v++) h[v](q);
            };
            b(n, u);
            c(n, u);
            d('pushState', n, u);
            d('replaceState', n, u);
            f(p, r);
            Hs('ehl', 'reg', f);
            pt('ehl');
            I(k.vtp_gtmOnSuccess);
        }
    });
})();
(Y.h.sdl = ['google']),
(() => {
    function a() {
        return !!(
            Object.keys(k('horiz.pix')).length ||
            Object.keys(k('horiz.pct')).length ||
            Object.keys(k('vert.pix')).length ||
            Object.keys(k('vert.pct')).length
        );
    }
    function b(x) {
        for (var z = [], A = x.split(','), C = 0; C < A.length; C++) {
            var E = Number(A[C]);
            if (isNaN(E)) return [];
            p.test(A[C]) || z.push(E);
        }
        return z;
    }
    function c() {
        var x = 0;
        var z = 0;
        return () => {
            var A = hj();
            var C = A.height;
            x = Math.max(v.scrollLeft + A.width, x);
            z = Math.max(v.scrollTop + C, z);
            return {
                Xe: x,
                Ye: z
            };
        };
    }
    function d() {
        u = V('self');
        q = u.document;
        v = q.scrollingElement || (q.body && q.body.parentNode);
        y = c();
    }
    function e(x, z, A, C) {
        var E = k(z);
        var D = {};
        var F;
        for (F in E) {
            D.Lb = F;
            if (E.hasOwnProperty(D.Lb)) {
                var N = Number(D.Lb);
                x < N ||
                    (jt({
                            event: 'gtm.scrollDepth',
                            'gtm.scrollThreshold': N,
                            'gtm.scrollUnits': A.toLowerCase(),
                            'gtm.scrollDirection': C,
                            'gtm.triggers': E[D.Lb].join(',')
                        }),
                        Is(
                            'sdl',
                            z,
                            ((M) => (P) => {
                                delete P[M.Lb];
                                return P;
                            })(D), {}
                        ));
            }
            D = {
                Lb: D.Lb
            };
        }
    }
    function f() {
        var x = y();
        var z = x.Xe;
        var A = x.Ye;
        var C = (z / v.scrollWidth) * 100;
        var E = (A / v.scrollHeight) * 100;
        e(z, 'horiz.pix', r.wd, t.lg);
        e(C, 'horiz.pct', r.vd, t.lg);
        e(A, 'vert.pix', r.wd, t.wg);
        e(E, 'vert.pct', r.vd, t.wg);
        Hs('sdl', 'pending', !1);
    }
    function g() {
        var x = 250;
        var z = !1;
        q.scrollingElement && q.documentElement && u.addEventListener && ((x = 50), (z = !0));
        var A = 0;
        var C = !1;
        var E = () => {
            C ? (A = dt(E, x)) : ((A = 0), f(), ot('sdl') && !a() && (gc(u, 'scroll', D), gc(u, 'resize', D), Hs('sdl', 'init', !1)));
            C = !1;
        };
        var D = () => {
            z && y();
            A ? (C = !0) : ((A = dt(E, x)), Hs('sdl', 'pending', !0));
        };
        return D;
    }
    function h(x, z, A) {
        if (z) {
            var C = b(String(x));
            Is(
                'sdl',
                A,
                (E) => {
                    for (var D = 0; D < C.length; D++) {
                        var F = String(C[D]);
                        E.hasOwnProperty(F) || (E[F] = []);
                        E[F].push(z);
                    }
                    return E;
                }, {}
            );
        }
    }
    function k(x) {
        return Js('sdl', x, {});
    }
    function n(x) {
        I(x.vtp_gtmOnSuccess);
        var z = x.vtp_uniqueTriggerId;
        var A = x.vtp_horizontalThresholdsPixels;
        var C = x.vtp_horizontalThresholdsPercent;
        var E = x.vtp_verticalThresholdUnits;
        var D = x.vtp_verticalThresholdsPixels;
        var F = x.vtp_verticalThresholdsPercent;
        switch (x.vtp_horizontalThresholdUnits) {
            case r.wd:
                h(A, z, 'horiz.pix');
                break;
            case r.vd:
                h(C, z, 'horiz.pct');
        }
        switch (E) {
            case r.wd:
                h(D, z, 'vert.pix');
                break;
            case r.vd:
                h(F, z, 'vert.pct');
        }
        ot('sdl') ?
            Js('sdl', 'pending') || (w || (d(), (w = !0)), I(() => f())) :
            (d(),
                (w = !0),
                v &&
                (pt('sdl'),
                    Hs('sdl', 'pending', !0),
                    I(() => {
                        f();
                        if (a()) {
                            var N = g();
                            fc(u, 'scroll', N);
                            fc(u, 'resize', N);
                        } else Hs('sdl', 'init', !1);
                    })));
    }
    var p = /^\s*$/;
    var r = {
        vd: 'PERCENT',
        wd: 'PIXELS'
    };
    var t = {
        wg: 'vertical',
        lg: 'horizontal'
    };
    var u;
    var q;
    var v;
    var w = !1;
    var y;
    ((x) => {
        Y.__sdl = x;
        Y.__sdl.m = 'sdl';
        Y.__sdl.isVendorTemplate = !0;
        Y.__sdl.priorityOverride = 0;
    })((x) => {
        x.vtp_triggerStartOption ?
            n(x) :
            Wr(() => {
                n(x);
            });
    });
})();
(Y.h.read_container_data = ['google']),
(() => {
    ((a) => {
        Y.__read_container_data = a;
        Y.__read_container_data.m = 'read_container_data';
        Y.__read_container_data.isVendorTemplate = !0;
        Y.__read_container_data.priorityOverride = 0;
    })(() => ({
        assert() {},
        P() {
            return {};
        }
    }));
})();
(Y.h.c = ['google']),
(() => {
    ((a) => {
        Y.__c = a;
        Y.__c.m = 'c';
        Y.__c.isVendorTemplate = !0;
        Y.__c.priorityOverride = 0;
    })((a) => {
        rt(a.vtp_value, 'c', a.vtp_gtmEventId);
        return a.vtp_value;
    });
})();
(Y.h.e = ['google']),
(() => {
    ((a) => {
        Y.__e = a;
        Y.__e.m = 'e';
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
    })((a) => {
        var b = String(vh(a.vtp_gtmEventId, 'event'));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
    });
})();
(Y.h.u = ['google']),
(() => {
    var a = (b) => ({
        toString() {
            return b;
        }
    });
    ((b) => {
        Y.__u = b;
        Y.__u.m = 'u';
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
    })((b) => {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : it('gtm.url', 1)) || ft();
        var d = b[a('vtp_component')];
        if (!d || 'URL' == d) return ht(String(c));
        var e = vj(String(c));
        var f;
        if ('QUERY' === d)
            a: {
                var g = b[a('vtp_multiQueryKeys').toString()];
                var h = b[a('vtp_queryKey').toString()] || '';
                var k = b[a('vtp_ignoreEmptyQueryParam').toString()];
                var n;
                g ? (Ia(h) ? (n = h) : (n = String(h).replace(/\s+/g, '').split(','))) : (n = [String(h)]);
                for (var p = 0; p < n.length; p++) {
                    var r = tj(e, 'QUERY', void 0, void 0, n[p]);
                    if (void 0 != r && (!k || '' !== r)) {
                        f = r;
                        break a;
                    }
                }
                f = void 0;
            }
        else f = tj(e, d, 'HOST' == d ? b[a('vtp_stripWww')] : void 0, 'PATH' == d ? b[a('vtp_defaultPages')] : void 0, void 0);
        return f;
    });
})();
(Y.h.v = ['google']),
(() => {
    ((a) => {
        Y.__v = a;
        Y.__v.m = 'v';
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
    })((a) => {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = it(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1);
        var d = void 0 !== c ? c : a.vtp_defaultValue;
        rt(d, 'v', a.vtp_gtmEventId);
        return d;
    });
})();
(Y.h.ytl = ['google']),
(() => {
    function a() {
        var q = Math.round(1e9 * Math.random()) + '';
        return H.getElementById(q) ? a() : q;
    }
    function b(q, v) {
        if (!q) return !1;
        for (var w = 0; w < p.length; w++)
            if (0 <= q.indexOf('//' + p[w] + '/' + v)) return !0;
        return !1;
    }
    function c(q, v) {
        var w = q.getAttribute('src');
        if (b(w, 'embed/')) {
            if (0 < w.indexOf('enablejsapi=1')) return !0;
            if (v) {
                var y = q.setAttribute;
                var x;
                var z = -1 !== w.indexOf('?') ? '&' : '?';
                if (-1 < w.indexOf('origin=')) x = w + z + 'enablejsapi=1';
                else {
                    if (!t) {
                        var A = V('document');
                        t = A.location.protocol + '//' + A.location.hostname;
                        A.location.port && (t += ':' + A.location.port);
                    }
                    x = w + z + 'enablejsapi=1&origin=' + encodeURIComponent(t);
                }
                y.call(q, 'src', x);
                return !0;
            }
        }
        return !1;
    }
    function d(q, v) {
        if (!q.getAttribute('data-gtm-yt-inspected-' + v.Cf) && (q.setAttribute('data-gtm-yt-inspected-' + v.Cf, 'true'), c(q, v.Ic))) {
            q.id || (q.id = a());
            var w = V('YT');
            var y = w.get(q.id);
            y || (y = new w.Player(q.id));
            var x = f(y, v);
            var z = {};
            var A;
            for (A in x)
                (z.kc = A),
                x.hasOwnProperty(z.kc) &&
                y.addEventListener(
                    z.kc,
                    (
                        (C) => (E) =>
                        x[C.kc](E.data)
                    )(z)
                ),
                (z = {
                    kc: z.kc
                });
        }
    }
    function e(q) {
        I(() => {
            function v() {
                for (var y = w.getElementsByTagName('iframe'), x = y.length, z = 0; z < x; z++) d(y[z], q);
            }
            var w = V('document');
            v();
            Rs(v);
        });
    }
    function f(q, v) {
        var w;
        var y;
        function x() {
            P = bt(
                () => ({
                    url: L,
                    title: T,
                    Ze: K,
                    Jg: q.getCurrentTime(),
                    playbackRate: Z
                }),
                v.Cf,
                q.getIframe()
            );
            K = 0;
            T = L = '';
            Z = 1;
            return z;
        }
        function z(U) {
            switch (U) {
                case r.PLAYING:
                    K = Math.round(q.getDuration());
                    L = q.getVideoUrl();
                    if (q.getVideoData) {
                        var ka = q.getVideoData();
                        T = ka ? ka.title : '';
                    }
                    Z = q.getPlaybackRate();
                    v.Te ? jt(P.createEvent('start')) : P.Zb();
                    O = k(v.vf, v.uf, q.getDuration());
                    return A(U);
                default:
                    return z;
            }
        }
        function A() {
            ia = q.getCurrentTime();
            Da = et().getTime();
            P.jh();
            M();
            return C;
        }
        function C(U) {
            var ka;
            switch (U) {
                case r.ENDED:
                    return D(U);
                case r.PAUSED:
                    ka = 'pause';
                case r.BUFFERING:
                    var Fa = q.getCurrentTime() - ia;
                    ka = 1 < Math.abs(((et().getTime() - Da) / 1e3) * Z - Fa) ? 'seek' : ka || 'buffering';
                    q.getCurrentTime() && (v.Se ? jt(P.createEvent(ka)) : P.Zb());
                    N();
                    return E;
                case r.UNSTARTED:
                    return x(U);
                default:
                    return C;
            }
        }
        function E(U) {
            switch (U) {
                case r.ENDED:
                    return D(U);
                case r.PLAYING:
                    return A(U);
                case r.UNSTARTED:
                    return x(U);
                default:
                    return E;
            }
        }
        function D() {
            for (; y;) {
                var U = w;
                ct(y);
                U();
            }
            v.Re && jt(P.createEvent('complete', 1));
            return x(r.UNSTARTED);
        }
        function F() {}
        function N() {
            y && (ct(y), (y = 0), (w = F));
        }
        function M() {
            if (O.length && 0 !== Z) {
                var U = -1;
                var ka;
                do {
                    ka = O[0];
                    if (ka.ca > q.getDuration()) return;
                    U = (ka.ca - q.getCurrentTime()) / Z;
                    if (0 > U && (O.shift(), 0 === O.length)) return;
                } while (0 > U);
                w = () => {
                    y = 0;
                    w = F;
                    0 < O.length && O[0].ca === ka.ca && (O.shift(), jt(P.createEvent('progress', ka.Rc, ka.Uc)));
                    M();
                };
                y = dt(w, 1e3 * U);
            }
        }
        var P;
        var O = [];
        var K;
        var L;
        var T;
        var Z;
        var ia;
        var Da;
        var Ba = x(r.UNSTARTED);
        y = 0;
        w = F;
        return {
            onStateChange(U) {
                Ba = Ba(U);
            },
            onPlaybackRateChange(U) {
                ia = q.getCurrentTime();
                Da = et().getTime();
                P.Zb();
                Z = U;
                N();
                M();
            }
        };
    }
    function g(q) {
        for (var v = q.split(','), w = v.length, y = [], x = 0; x < w; x++) {
            var z = parseInt(v[x], 10);
            isNaN(z) || 100 < z || 0 > z || y.push(z / 100);
        }
        y.sort((A, C) => A - C);
        return y;
    }
    function h(q) {
        for (var v = q.split(','), w = v.length, y = [], x = 0; x < w; x++) {
            var z = parseInt(v[x], 10);
            isNaN(z) || 0 > z || y.push(z);
        }
        y.sort((A, C) => A - C);
        return y;
    }
    function k(q, v, w) {
        var y = q.map((A) => ({
            ca: A,
            Uc: A,
            Rc: void 0
        }));
        if (!v.length) return y;
        var x = v.map((A) => ({
            ca: A * w,
            Uc: void 0,
            Rc: A
        }));
        if (!y.length) return x;
        var z = y.concat(x);
        z.sort((A, C) => A.ca - C.ca);
        return z;
    }
    function n(q) {
        var v = !!q.vtp_captureStart;
        var w = !!q.vtp_captureComplete;
        var y = !!q.vtp_capturePause;
        var x = g(q.vtp_progressThresholdsPercent + '');
        var z = h(q.vtp_progressThresholdsTimeInSeconds + '');
        var A = !!q.vtp_fixMissingApi;
        if (v || w || y || x.length || z.length) {
            var C = {
                Te: v,
                Re: w,
                Se: y,
                uf: x,
                vf: z,
                Ic: A,
                Cf: void 0 === q.vtp_uniqueTriggerId ? '' : q.vtp_uniqueTriggerId
            };
            var E = V('YT');
            var D = () => {
                e(C);
            };
            I(q.vtp_gtmOnSuccess);
            if (E) E.ready && E.ready(D);
            else {
                var F = V('onYouTubeIframeAPIReady');
                kt('onYouTubeIframeAPIReady', () => {
                    F && F();
                    D();
                });
                I(() => {
                    for (var N = V('document'), M = N.getElementsByTagName('script'), P = M.length, O = 0; O < P; O++) {
                        var K = M[O].getAttribute('src');
                        if (b(K, 'iframe_api') || b(K, 'player_api')) return;
                    }
                    for (var L = N.getElementsByTagName('iframe'), T = L.length, Z = 0; Z < T; Z++)
                        if (!u && c(L[Z], C.Ic)) {
                            S('https://www.youtube.com/iframe_api');
                            u = !0;
                            break;
                        }
                });
            }
        } else I(q.vtp_gtmOnSuccess);
    }
    var p = ['www.youtube.com', 'www.youtube-nocookie.com'];
    var r = {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5
    };
    var t;
    var u = !1;
    ((q) => {
        Y.__ytl = q;
        Y.__ytl.m = 'ytl';
        Y.__ytl.isVendorTemplate = !0;
        Y.__ytl.priorityOverride = 0;
    })((q) => {
        q.vtp_triggerStartOption ?
            n(q) :
            im(() => {
                n(q);
            });
    });
})();
(Y.h.aev = ['google']),
(() => {
    function a(u, q, v) {
        var w = u || vh(q, 'gtm');
        if (w) return w[v];
    }
    function b(u, q, v, w, y) {
        y || (y = 'element');
        var x = q + '.' + v;
        var z;
        if (p.hasOwnProperty(x)) z = p[x];
        else {
            var A = a(u, q, y);
            if (A && ((z = w(A)), (p[x] = z), r.push(x), 35 < r.length)) {
                var C = r.shift();
                delete p[C];
            }
        }
        return z;
    }
    function c(u, q, v, w) {
        var y = a(u, q, t[v]);
        return void 0 !== y ? y : w;
    }
    function d(u, q) {
        if (!u) return !1;
        var v = e(ft());
        Ia(q) ||
            (q = String(q || '')
                .replace(/\s+/g, '')
                .split(','));
        for (var w = [v], y = 0; y < q.length; y++) {
            var x = q[y];
            if (x.hasOwnProperty('is_regex'))
                if (x.is_regex)
                    try {
                        x = new RegExp(x.domain);
                    } catch (A) {
                        continue;
                    }
            else x = x.domain;
            if (x instanceof RegExp) {
                if (x.test(u)) return !1;
            } else {
                var z = x;
                if (0 != z.length) {
                    if (0 <= e(u).indexOf(z)) return !1;
                    w.push(e(z));
                }
            }
        }
        return !Ow(u, w);
    }
    function e(u) {
        n.test(u) || (u = 'http://' + u);
        return tj(vj(u), 'HOST', !0);
    }
    function f(u, q, v, w) {
        switch (u) {
            case 'SUBMIT_TEXT':
                return b(q, v, 'FORM.' + u, g, 'formSubmitElement') || w;
            case 'LENGTH':
                var y = b(q, v, 'FORM.' + u, h);
                return void 0 === y ? w : y;
            case 'INTERACTED_FIELD_ID':
                return k(q, v, 'id', w);
            case 'INTERACTED_FIELD_NAME':
                return k(q, v, 'name', w);
            case 'INTERACTED_FIELD_TYPE':
                return k(q, v, 'type', w);
            case 'INTERACTED_FIELD_POSITION':
                var x = a(q, v, 'interactedFormFieldPosition');
                return void 0 === x ? w : x;
            case 'INTERACT_SEQUENCE_NUMBER':
                var z = a(q, v, 'interactSequenceNumber');
                return void 0 === z ? w : z;
            default:
                return w;
        }
    }
    function g(u) {
        switch (u.tagName.toLowerCase()) {
            case 'input':
                return hc(u, 'value');
            case 'button':
                return kc(u);
            default:
                return null;
        }
    }
    function h(u) {
        if ('form' === u.tagName.toLowerCase() && u.elements) {
            for (var q = 0, v = 0; v < u.elements.length; v++) Ms(u.elements[v]) && q++;
            return q;
        }
    }
    function k(u, q, v, w) {
        var y = a(u, q, 'interactedFormField');
        return (y && hc(y, v)) || w;
    }
    var n = /^https?:\/\//i;
    var p = {};
    var r = [];
    var t = {
        ATTRIBUTE: 'elementAttribute',
        CLASSES: 'elementClasses',
        ELEMENT: 'element',
        ID: 'elementId',
        HISTORY_CHANGE_SOURCE: 'historyChangeSource',
        HISTORY_NEW_STATE: 'newHistoryState',
        HISTORY_NEW_URL_FRAGMENT: 'newUrlFragment',
        HISTORY_OLD_STATE: 'oldHistoryState',
        HISTORY_OLD_URL_FRAGMENT: 'oldUrlFragment',
        TARGET: 'elementTarget'
    };
    ((u) => {
        Y.__aev = u;
        Y.__aev.m = 'aev';
        Y.__aev.isVendorTemplate = !0;
        Y.__aev.priorityOverride = 0;
    })((u) => {
        var q = u.vtp_gtmEventId;
        var v = u.vtp_defaultValue;
        var w = u.vtp_varType;
        var y;
        u.vtp_gtmCachedValues && (y = u.vtp_gtmCachedValues.gtm);
        switch (w) {
            case 'TAG_NAME':
                var x = a(y, q, 'element');
                return (x && x.tagName) || v;
            case 'TEXT':
                return b(y, q, w, kc) || v;
            case 'URL':
                var z;
                a: {
                    var A = String(a(y, q, 'elementUrl') || v || '');
                    var C = vj(A);
                    var E = String(u.vtp_component || 'URL');
                    switch (E) {
                        case 'URL':
                            z = A;
                            break a;
                        case 'IS_OUTBOUND':
                            z = d(A, u.vtp_affiliatedDomains);
                            break a;
                        default:
                            z = tj(C, E, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey);
                    }
                }
                return z;
            case 'ATTRIBUTE':
                var D;
                if (void 0 === u.vtp_attribute) D = c(y, q, w, v);
                else {
                    var F = u.vtp_attribute;
                    var N = a(y, q, 'element');
                    D = (N && hc(N, F)) || v || '';
                }
                return D;
            case 'MD':
                var M = u.vtp_mdValue;
                var P = b(y, q, 'MD', Ys);
                return M && P ? at(P, M) || v : P || v;
            case 'FORM':
                return f(String(u.vtp_component || 'SUBMIT_TEXT'), y, q, v);
            default:
                var O = c(y, q, w, v);
                rt(O, 'aev', u.vtp_gtmEventId);
                return O;
        }
    });
})();
(Y.h.dlm = ['google']),
(() => {
    ((a) => {
        Y.__dlm = a;
        Y.__dlm.m = 'dlm';
        Y.__dlm.isVendorTemplate = !0;
        Y.__dlm.priorityOverride = 0;
    })((a) => {
        var b = Pw(a.vtp_userInput || [], 'key', 'value') || {};
        a.vtp_synchronousWrite ?
            Oa(b, (c, d) => {
                rh(c, d);
            }) :
            jt(b);
        I(a.vtp_gtmOnSuccess);
    });
})();
(Y.h.gct = ['google']),
(() => {
    function a(d) {
        for (var e = [], f = 0; f < d.length; f++)
            try {
                e.push(new RegExp(d[f]));
            } catch (g) {}
        return e;
    }
    function b(d) {
        return d.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    }
    function c(d) {
        for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].matchValue;
            var h;
            switch (d[f].matchType) {
                case 'BEGINS_WITH':
                    h = '^' + b(g);
                    break;
                case 'ENDS_WITH':
                    h = b(g) + '$';
                    break;
                case 'EQUALS':
                    h = '^' + b(g) + '$';
                    break;
                case 'REGEX':
                    h = g;
                    break;
                default:
                    h = b(g);
            }
            e.push(h);
        }
        return e;
    }
    ((d) => {
        Y.__gct = d;
        Y.__gct.m = 'gct';
        Y.__gct.isVendorTemplate = !0;
        Y.__gct.priorityOverride = 0;
    })((d) => {
        var e = {};
        0 < d.vtp_sessionDuration && (e[R.vc] = d.vtp_sessionDuration);
        e[R.gd] = d.vtp_eventSettings;
        e[R.me] = d.vtp_dynamicEventSettings;
        e[R.eb] = 1 === d.vtp_googleSignals;
        e[R.kd] = d.vtp_foreignTld;
        e[R.Sb] = 1 === d.vtp_restrictDomain;
        e[R.ve] = d.vtp_internalTrafficResults;
        var f = R.ja;
        var g = d.vtp_linker;
        g && g[R.O] && (g[R.O] = a(g[R.O]));
        e[f] = g;
        var h = R.nd;
        var k = d.vtp_referralExclusionDefinition;
        k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
        e[h] = k;
        var n = wr(d.vtp_trackingId);
        var p = n.referral_exclusion_conditions;
        p &&
            (p.length && 'object' === typeof p[0] && (p = c(p)),
                (e[R.nd] = {
                    include_conditions: a(p)
                }));
        var r = n.cross_domain_conditions;
        if (r) {
            r.length && 'object' === typeof r[0] && (r = c(r));
            var t = {};
            e[R.ja] = ((t[R.O] = a(r)), (t[R.vb] = !0), (t[R.Tb] = !0), (t[R.Ub] = 'query'), t);
        }
        Iz(d.vtp_trackingId, e);
        I(d.vtp_gtmOnSuccess);
    });
})();
(Y.h.get = ['google']),
(() => {
    ((a) => {
        Y.__get = a;
        Y.__get.m = 'get';
        Y.__get.isVendorTemplate = !0;
        Y.__get.priorityOverride = 0;
    })((a) => {
        var b = a.vtp_settings;
        (a.vtp_deferrable ? Fz : Ez)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
    });
})();
(Y.h.lcl = []),
(() => {
    function a() {
        var c = V('document');
        var d = 0;
        var e = (f) => {
            var g = f.target;
            if (g && 3 !== f.which && !(f.jf || (f.timeStamp && f.timeStamp === d))) {
                d = f.timeStamp;
                g = mc(g, ['a', 'area'], 100);
                if (!g) return f.returnValue;
                var h = f.defaultPrevented || !1 === f.returnValue,
                    k = Js('lcl', h ? 'nv.mwt' : 'mwt', 0),
                    n;
                n = h ? Js('lcl', 'nv.ids', []) : Js('lcl', 'ids', []);
                if (n.length) {
                    var p = Fs(g, 'gtm.linkClick', n);
                    if (b(f, g, c) && !h && k && g.href) {
                        var r = !!Ja(String(oc(g, 'rel') || '').split(' '), (v) => 'noreferrer' === v.toLowerCase());
                        r && Ug(36);
                        var t = V((oc(g, 'target') || '_self').substring(1)),
                            u = !0,
                            q = ss(() => {
                                var v;
                                if ((v = u && t)) {
                                    var w;
                                    a: if (r) {
                                        var y;
                                        try {
                                            y = new MouseEvent(f.type, {
                                                bubbles: !0
                                            });
                                        } catch (x) {
                                            if (!c.createEvent) {
                                                w = !1;
                                                break a;
                                            }
                                            y = c.createEvent('MouseEvents');
                                            y.initEvent(f.type, !0, !0);
                                        }
                                        y.jf = !0;
                                        f.target.dispatchEvent(y);
                                        w = !0;
                                    } else w = !1;
                                    v = !w;
                                }
                                v && (t.location.href = oc(g, 'href'));
                            }, k);
                        if (jt(p, q, k)) u = !1;
                        else return f.preventDefault && f.preventDefault(), (f.returnValue = !1);
                    } else jt(p, () => {}, k || 2e3);
                    return !0;
                }
            }
        };
        fc(c, 'click', e, !1);
        fc(c, 'auxclick', e, !1);
    }
    function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
        var f = oc(d, 'href');
        var g = f.indexOf('#');
        var h = oc(d, 'target');
        if ((h && '_self' !== h && '_parent' !== h && '_top' !== h) || 0 === g) return !1;
        if (0 < g) {
            var k = ht(f);
            var n = ht(e.location);
            return k !== n;
        }
        return !0;
    }
    ((c) => {
        Y.__lcl = c;
        Y.__lcl.m = 'lcl';
        Y.__lcl.isVendorTemplate = !0;
        Y.__lcl.priorityOverride = 0;
    })((c) => {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags;
        var e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation;
        var f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var g = c.vtp_uniqueTriggerId || '0';
        if (d) {
            var h = (n) => Math.max(f, n);
            Is('lcl', 'mwt', h, 0);
            e || Is('lcl', 'nv.mwt', h, 0);
        }
        var k = (n) => {
            n.push(g);
            return n;
        };
        Is('lcl', 'ids', k, []);
        e || Is('lcl', 'nv.ids', k, []);
        ot('lcl') || (a(), pt('lcl'));
        I(c.vtp_gtmOnSuccess);
    });
})();
var Jz = {};
Jz.dataLayer = ph;
Jz.callback = (a) => {
    fh.hasOwnProperty(a) && Ea(fh[a]) && fh[a]();
    delete fh[a];
};
Jz.bootstrap = 0;
Jz._spx = !1;
function Kz() {
    Vg[J.J] = Jz;
    db(gh, Y.h);
    bf = qf;
}
function Lz() {
    var a = !1;
    a && qm('INIT');
    Nh().g(Ih.g);
    Vg = m.google_tag_manager = m.google_tag_manager || {};
    Do();
    jl.enable_gbraid_cookie_write = !0;
    var b = !!Vg[J.J];
    if (b) {
        var c = Vg.zones;
        c && c.unregisterChild(J.J);
    } else {
        for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) Ue.push(g[h]);
        for (var k = f.tags || [], n = 0; n < k.length; n++) Xe.push(k[n]);
        for (var p = f.predicates || [], r = 0; r < p.length; r++) We.push(p[r]);
        for (var t = f.rules || [], u = 0; u < t.length; u++) {
            for (var q = t[u], v = {}, w = 0; w < q.length; w++) v[q[w][0]] = Array.prototype.slice.call(q[w], 1);
            Ve.push(v);
        }
        Ze = Y;
        $e = Tt;
        xf = new wf();
        var y = data.sandboxed_scripts;
        var x = data.security_groups;
        var z = data.runtime || [];
        var A = data.runtime_lines;
        Hw = new me();
        Kw();
        Te = Iw();
        var C = Hw;
        var E = Ew();
        vb(C.g, 'require', E);
        for (var D = 0; D < z.length; D++) {
            var F = z[D];
            if (!Ia(F) || 3 > F.length) {
                if (0 === F.length) continue;
                break;
            }
            A && A[D] && A[D].length && jf(F, A[D]);
            Hw.execute(F);
        }
        if (void 0 !== y)
            for (var N = ['sandboxedScripts'], M = 0; M < y.length; M++) {
                var P = y[M].replace(/^_*/, '');
                gh[P] = N;
            }
        Lw(x);
        Kz();
        ys();
        dm = !1;
        em = 0;
        if (('interactive' == H.readyState && !H.createEventObject) || 'complete' == H.readyState) gm();
        else {
            fc(H, 'DOMContentLoaded', gm);
            fc(H, 'readystatechange', gm);
            if (H.createEventObject && H.documentElement.doScroll) {
                var O = !0;
                try {
                    O = !m.frameElement;
                } catch (ia) {}
                O && hm();
            }
            fc(m, 'load', gm);
        }
        Tr = !1;
        'complete' === H.readyState ? Vr() : fc(m, 'load', Vr);
        nn && m.setInterval(gn, 864e5);
        dh = new Date().getTime();
        Jz.bootstrap = dh;
        if (a) {
            var Z = rm('INIT');
        }
    }
}
((a) => {
    if (!m['__TAGGY_INSTALLED']) {
        var b = !1;
        if (H.referrer) {
            var c = vj(H.referrer);
            b = 'cct.google' === sj(c, 'host');
        }
        if (!b) {
            var d = Xj('googTaggyReferrer');
            b = d.length && d[0].length;
        }
        b && ((m['__TAGGY_INSTALLED'] = !0), bc('https://cct.google/taggy/agent.js'));
    }
    var f = (r) => {
        var t = 'GTM',
            u = 'GTM';
        (t = 'OGT'), (u = 'GTAG');
        var q = m['google.tagmanager.debugui2.queue'];
        q ||
            ((q = []),
                (m['google.tagmanager.debugui2.queue'] = q),
                bc('https://' + J.Zd + '/debug/bootstrap?id=' + J.J + '&src=' + u + '&cond=' + r + '&gtm=' + $n()));
        var v = {
            messageType: 'CONTAINER_STARTING',
            data: {
                scriptSource: Xb,
                containerProduct: t,
                debug: !1,
                id: J.J
            }
        };
        v.data.resume = () => {
            a();
        };
        J.Dh && (v.data.initialPublish = !0);
        q.push(v);
    };
    var g = void 0;
    var h = tj(m.location, 'query', !1, void 0, 'gtm_debug');
    zs(h) && (g = 2);
    if (!g && H.referrer) {
        var k = vj(H.referrer);
        'tagassistant.google.com' === sj(k, 'host') && (g = 3);
    }
    if (!g) {
        var n = Xj('__TAG_ASSISTANT');
        n.length && n[0].length && (g = 4);
    }
    if (!g) {
        var p = H.documentElement.getAttribute('data-tag-assistant-present');
        zs(p) && (g = 5);
    }
    g && Xb ? f(g) : a();
})(Lz);
})();
window.dataLayer = window.dataLayer || [];
function gtag(...args) {
    dataLayer.push(args);
}
gtag('js', new Date());
gtag('config', 'G-4W5MG3DG4T');
(function(sttc) {
        /*
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
        var aa;
        var ba;
        function ca(a) {
            var b = 0;
            return () =>
                b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                };
        }
        var da =
            'function' == typeof Object.defineProperties ?
            Object.defineProperty :
            (a, b, c) => {
                if (a == Array.prototype || a == Object.prototype) return a;
                a[b] = c.value;
                return a;
            };
        function ea(a) {
            a = [
                'object' == typeof globalThis && globalThis,
                a,
                'object' == typeof window && window,
                'object' == typeof self && self,
                'object' == typeof global && global
            ];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c;
            }
            throw Error('Cannot find global object');
        }
        var fa = ea(this);
        var ha = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
        var n = {};
        var ia = {};
        function p(a, b) {
            var c = ia[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b];
        }
        function ja(a, b, c) {
            if (b)
                a: {
                    var d = a.split('.');
                    a = 1 === d.length;
                    var e = d[0];
                    var f;!a && e in n ? (f = n) : (f = fa);
                    for (e = 0; e < d.length - 1; e++) {
                        var g = d[e];
                        if (!(g in f)) break a;
                        f = f[g];
                    }
                    d = d[d.length - 1];
                    c = ha && 'es6' === c ? f[d] : null;
                    b = b(c);
                    null != b &&
                    (a ?
                        da(n, d, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        }) :
                        b !== c &&
                        (void 0 === ia[d] && ((a = (1e9 * Math.random()) >>> 0), (ia[d] = ha ? fa.Symbol(d) : '$jscp$' + a + '$' + d)),
                            da(f, ia[d], {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })));
                }
        }
        ja(
            'Symbol',
            (a) => {
                function b(f) {
                    if (this instanceof b) throw new TypeError('Symbol is not a constructor');
                    return new c(d + (f || '') + '_' + e++, f);
                }
                function c(f, g) {
                    this.h = f;
                    da(this, 'description', {
                        configurable: !0,
                        writable: !0,
                        value: g
                    });
                }
                if (a) return a;
                c.prototype.toString = function() {
                    return this.h;
                };
                var d = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_';
                var e = 0;
                return b;
            },
            'es6'
        );
        ja(
            'Symbol.iterator',
            (a) => {
                if (a) return a;
                a = (0, n.Symbol)('Symbol.iterator');
                for (
                    var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '),
                        c = 0; c < b.length; c++
                ) {
                    var d = fa[b[c]];
                    'function' === typeof d &&
                        'function' != typeof d.prototype[a] &&
                        da(d.prototype, a, {
                            configurable: !0,
                            writable: !0,
                            value() {
                                return ka(ca(this));
                            }
                        });
                }
                return a;
            },
            'es6'
        );
        function ka(a) {
            a = {
                next: a
            };
            a[p(n.Symbol, 'iterator')] = function() {
                return this;
            };
            return a;
        }
        function la(a) {
            return (a.raw = a);
        }
        function q(a) {
            var b = 'undefined' != typeof n.Symbol && p(n.Symbol, 'iterator') && a[p(n.Symbol, 'iterator')];
            return b ?
                b.call(a) : {
                    next: ca(a)
                };
        }
        function ma(a) {
            if (!(a instanceof Array)) {
                a = q(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c;
            }
            return a;
        }
        var na =
            'function' == typeof Object.create ?
            Object.create :
            (a) => {
                function b() {}
                b.prototype = a;
                return new b();
            };
        var oa;
        if (ha && 'function' == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
        else {
            var pa;
            a: {
                var qa = {
                    a: !0
                };
                var ra = {};
                try {
                    ra.__proto__ = qa;
                    pa = ra.a;
                    break a;
                } catch (a) {}
                pa = !1;
            }
            oa = pa ?
                (a, b) => {
                    a.__proto__ = b;
                    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                    return a;
                } :
                null;
        }
        var sa = oa;
        function u(a, b) {
            a.prototype = na(b.prototype);
            a.prototype.constructor = a;
            if (sa) sa(a, b);
            else
                for (var c in b)
                    if ('prototype' != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.xb = b.prototype;
        }
        function ta(...args) {
            for (var a = Number(this), b = [], c = a; c < args.length; c++) b[c - a] = args[c];
            return b;
        }
        ja(
            'Promise',
            (a) => {
                function b(g) {
                    this.h = 0;
                    this.j = void 0;
                    this.i = [];
                    this.D = !1;
                    var h = this.l();
                    try {
                        g(h.resolve, h.reject);
                    } catch (k) {
                        h.reject(k);
                    }
                }
                function c() {
                    this.h = null;
                }
                function d(g) {
                    return g instanceof b ?
                        g :
                        new b((h) => {
                            h(g);
                        });
                }
                if (a) return a;
                c.prototype.i = function(g) {
                    if (null == this.h) {
                        this.h = [];
                        var h = this;
                        this.j(() => {
                            h.m();
                        });
                    }
                    this.h.push(g);
                };
                var e = fa.setTimeout;
                c.prototype.j = (g) => {
                    e(g, 0);
                };
                c.prototype.m = function() {
                    for (; this.h && this.h.length;) {
                        var g = this.h;
                        this.h = [];
                        for (var h = 0; h < g.length; ++h) {
                            var k = g[h];
                            g[h] = null;
                            try {
                                k();
                            } catch (l) {
                                this.l(l);
                            }
                        }
                    }
                    this.h = null;
                };
                c.prototype.l = function(g) {
                    this.j(() => {
                        throw g;
                    });
                };
                b.prototype.l = function() {
                    function g(l) {
                        return (m) => {
                            k || ((k = !0), l.call(h, m));
                        };
                    }
                    var h = this;
                    var k = !1;
                    return {
                        resolve: g(this.O),
                        reject: g(this.m)
                    };
                };
                b.prototype.O = function(g) {
                    if (g === this) this.m(new TypeError('A Promise cannot resolve to itself'));
                    else if (g instanceof b) this.R(g);
                    else {
                        a: switch (typeof g) {
                            case 'object':
                                var h = null != g;
                                break a;
                            case 'function':
                                h = !0;
                                break a;
                            default:
                                h = !1;
                        }
                        h ? this.N(g) : this.v(g);
                    }
                };
                b.prototype.N = function(g) {
                    var h = void 0;
                    try {
                        h = g.then;
                    } catch (k) {
                        this.m(k);
                        return;
                    }
                    'function' == typeof h ? this.ea(h, g) : this.v(g);
                };
                b.prototype.m = function(g) {
                    this.A(2, g);
                };
                b.prototype.v = function(g) {
                    this.A(1, g);
                };
                b.prototype.A = function(g, h) {
                    if (0 != this.h) throw Error('Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.h);
                    this.h = g;
                    this.j = h;
                    2 === this.h && this.P();
                    this.H();
                };
                b.prototype.P = function() {
                    var g = this;
                    e(() => {
                        if (g.M()) {
                            var h = fa.console;
                            'undefined' !== typeof h && h.error(g.j);
                        }
                    }, 1);
                };
                b.prototype.M = function() {
                    if (this.D) return !1;
                    var g = fa.CustomEvent;
                    var h = fa.Event;
                    var k = fa.dispatchEvent;
                    if ('undefined' === typeof k) return !0;
                    'function' === typeof g
                        ?
                        (g = new g('unhandledrejection', {
                            cancelable: !0
                        })) :
                        'function' === typeof h ?
                        (g = new h('unhandledrejection', {
                            cancelable: !0
                        })) :
                        ((g = fa.document.createEvent('CustomEvent')), g.initCustomEvent('unhandledrejection', !1, !0, g));
                    g.promise = this;
                    g.reason = this.j;
                    return k(g);
                };
                b.prototype.H = function() {
                    if (null != this.i) {
                        for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                        this.i = null;
                    }
                };
                var f = new c();
                b.prototype.R = function(g) {
                    var h = this.l();
                    g.ga(h.resolve, h.reject);
                };
                b.prototype.ea = function(g, h) {
                    var k = this.l();
                    try {
                        g.call(h, k.resolve, k.reject);
                    } catch (l) {
                        k.reject(l);
                    }
                };
                b.prototype.then = function(g, h) {
                    function k(t, x) {
                        return 'function' == typeof t ?
                            (E) => {
                                try {
                                    l(t(E));
                                } catch (B) {
                                    m(B);
                                }
                            } :
                            x;
                    }
                    var l;
                    var m;
                    var r = new b((t, x) => {
                        l = t;
                        m = x;
                    });
                    this.ga(k(g, l), k(h, m));
                    return r;
                };
                b.prototype.catch = function(g) {
                    return this.then(void 0, g);
                };
                b.prototype.ga = function(g, h) {
                    function k() {
                        switch (l.h) {
                            case 1:
                                g(l.j);
                                break;
                            case 2:
                                h(l.j);
                                break;
                            default:
                                throw Error('Unexpected state: ' + l.h);
                        }
                    }
                    var l = this;
                    null == this.i ? f.i(k) : this.i.push(k);
                    this.D = !0;
                };
                b.resolve = d;
                b.reject = (g) =>
                    new b((h, k) => {
                        k(g);
                    });
                b.race = (g) =>
                    new b((h, k) => {
                        for (var l = q(g), m = l.next(); !m.done; m = l.next()) d(m.value).ga(h, k);
                    });
                b.all = (g) => {
                    var h = q(g);
                    var k = h.next();
                    return k.done ?
                        d([]) :
                        new b((l, m) => {
                            function r(E) {
                                return (B) => {
                                    t[E] = B;
                                    x--;
                                    0 == x && l(t);
                                };
                            }
                            var t = [];
                            var x = 0;
                            do t.push(void 0), x++, d(k.value).ga(r(t.length - 1), m), (k = h.next());
                            while (!k.done);
                        });
                };
                return b;
            },
            'es6'
        );
        ja(
            'Array.prototype.find',
            (a) =>
            a ?
            a :
            function(b, c) {
                a: {
                    var d = this;
                    d instanceof String && (d = String(d));
                    for (var e = d.length, f = 0; f < e; f++) {
                        var g = d[f];
                        if (b.call(c, g, f, d)) {
                            b = g;
                            break a;
                        }
                    }
                    b = void 0;
                }
                return b;
            },
            'es6'
        );
        function ua(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        }
        ja(
            'WeakMap',
            (a) => {
                function b(g) {
                    this.h = (f += Math.random() + 1).toString();
                    if (g) {
                        g = q(g);
                        for (var h; !(h = g.next()).done;)(h = h.value), this.set(h[0], h[1]);
                    }
                }
                function c() {}
                function d(g) {
                    var h = typeof g;
                    return ('object' === h && null !== g) || 'function' === h;
                }
                if (
                    (() => {
                        if (!a || !Object.seal) return !1;
                        try {
                            var g = Object.seal({});
                            var h = Object.seal({});
                            var k = new a([
                                [g, 2],
                                [h, 3]
                            ]);
                            if (2 != k.get(g) || 3 != k.get(h)) return !1;
                            k.delete(g);
                            k.set(h, 4);
                            return !k.has(g) && 4 == k.get(h);
                        } catch (l) {
                            return !1;
                        }
                    })()
                )
                    return a;
                var e = '$jscomp_hidden_' + Math.random();
                var f = 0;
                b.prototype.set = function(g, h) {
                    if (!d(g)) throw Error('Invalid WeakMap key');
                    if (!ua(g, e)) {
                        var k = new c();
                        da(g, e, {
                            value: k
                        });
                    }
                    if (!ua(g, e)) throw Error('WeakMap key fail: ' + g);
                    g[e][this.h] = h;
                    return this;
                };
                b.prototype.get = function(g) {
                    return d(g) && ua(g, e) ? g[e][this.h] : void 0;
                };
                b.prototype.has = function(g) {
                    return d(g) && ua(g, e) && ua(g[e], this.h);
                };
                b.prototype.delete = function(g) {
                    return d(g) && ua(g, e) && ua(g[e], this.h) ? delete g[e][this.h] : !1;
                };
                return b;
            },
            'es6'
        );
        ja(
            'Map',
            (a) => {
                function b() {
                    var h = {};
                    return (h.L = h.next = h.head = h);
                }
                function c(h, k) {
                    var l = h.h;
                    return ka(() => {
                        if (l) {
                            for (; l.head != h.h;) l = l.L;
                            for (; l.next != l.head;)
                                return (
                                    (l = l.next), {
                                        done: !1,
                                        value: k(l)
                                    }
                                );
                            l = null;
                        }
                        return {
                            done: !0,
                            value: void 0
                        };
                    });
                }
                function d(h, k) {
                    var l = k && typeof k;
                    'object' == l || 'function' == l ? (f.has(k) ? (l = f.get(k)) : ((l = '' + ++g), f.set(k, l))) : (l = 'p_' + k);
                    var m = h.i[l];
                    if (m && ua(h.i, l))
                        for (h = 0; h < m.length; h++) {
                            var r = m[h];
                            if ((k !== k && r.key !== r.key) || k === r.key)
                                return {
                                    id: l,
                                    list: m,
                                    index: h,
                                    u: r
                                };
                        }
                    return {
                        id: l,
                        list: m,
                        index: -1,
                        u: void 0
                    };
                }
                function e(h) {
                    this.i = {};
                    this.h = b();
                    this.size = 0;
                    if (h) {
                        h = q(h);
                        for (var k; !(k = h.next()).done;)(k = k.value), this.set(k[0], k[1]);
                    }
                }
                if (
                    (() => {
                        if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
                        try {
                            var h = Object.seal({
                                x: 4
                            });
                            var k = new a(q([
                                [h, 's']
                            ]));
                            if (
                                's' != k.get(h) ||
                                1 != k.size ||
                                k.get({
                                    x: 4
                                }) ||
                                k.set({
                                        x: 4
                                    },
                                    't'
                                ) != k ||
                                2 != k.size
                            )
                                return !1;
                            var l = k.entries();
                            var m = l.next();
                            if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
                            m = l.next();
                            return m.done || 4 != m.value[0].x || 't' != m.value[1] || !l.next().done ? !1 : !0;
                        } catch (r) {
                            return !1;
                        }
                    })()
                )
                    return a;
                var f = new n.WeakMap();
                e.prototype.set = function(h, k) {
                    h = 0 === h ? 0 : h;
                    var l = d(this, h);
                    l.list || (l.list = this.i[l.id] = []);
                    l.u ?
                        (l.u.value = k) :
                        ((l.u = {
                                next: this.h,
                                L: this.h.L,
                                head: this.h,
                                key: h,
                                value: k
                            }),
                            l.list.push(l.u),
                            (this.h.L.next = l.u),
                            (this.h.L = l.u),
                            this.size++);
                    return this;
                };
                e.prototype.delete = function(h) {
                    h = d(this, h);
                    return h.u && h.list ?
                        (h.list.splice(h.index, 1),
                            h.list.length || delete this.i[h.id],
                            (h.u.L.next = h.u.next),
                            (h.u.next.L = h.u.L),
                            (h.u.head = null),
                            this.size--,
                            !0) :
                        !1;
                };
                e.prototype.clear = function() {
                    this.i = {};
                    this.h = this.h.L = b();
                    this.size = 0;
                };
                e.prototype.has = function(h) {
                    return !!d(this, h).u;
                };
                e.prototype.get = function(h) {
                    return (h = d(this, h).u) && h.value;
                };
                e.prototype.entries = function() {
                    return c(this, (h) => [h.key, h.value]);
                };
                e.prototype.keys = function() {
                    return c(this, (h) => h.key);
                };
                e.prototype.values = function() {
                    return c(this, (h) => h.value);
                };
                e.prototype.forEach = function(h, k) {
                    for (var l = this.entries(), m; !(m = l.next()).done;)(m = m.value), h.call(k, m[1], m[0], this);
                };
                e.prototype[p(n.Symbol, 'iterator')] = e.prototype.entries;
                var g = 0;
                return e;
            },
            'es6'
        );
        function wa(a, b) {
            a instanceof String && (a += '');
            var c = 0;
            var d = !1;
            var e = {
                next() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        };
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    };
                }
            };
            e[p(n.Symbol, 'iterator')] = () => e;
            return e;
        }
        var xa =
            ha && 'function' == typeof p(Object, 'assign') ?
            p(Object, 'assign') :
            function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d) ua(d, e) && (a[e] = d[e]);
                }
                return a;
            };
        ja('Object.assign', (a) => a || xa, 'es6');
        ja(
            'Set',
            (a) => {
                function b(c) {
                    this.h = new n.Map();
                    if (c) {
                        c = q(c);
                        for (var d; !(d = c.next()).done;) this.add(d.value);
                    }
                    this.size = this.h.size;
                }
                if (
                    (() => {
                        if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
                        try {
                            var c = Object.seal({
                                x: 4
                            });
                            var d = new a(q([c]));
                            if (
                                !d.has(c) ||
                                1 != d.size ||
                                d.add(c) != d ||
                                1 != d.size ||
                                d.add({
                                    x: 4
                                }) != d ||
                                2 != d.size
                            )
                                return !1;
                            var e = d.entries();
                            var f = e.next();
                            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                            f = e.next();
                            return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
                        } catch (g) {
                            return !1;
                        }
                    })()
                )
                    return a;
                b.prototype.add = function(c) {
                    c = 0 === c ? 0 : c;
                    this.h.set(c, c);
                    this.size = this.h.size;
                    return this;
                };
                b.prototype.delete = function(c) {
                    c = this.h.delete(c);
                    this.size = this.h.size;
                    return c;
                };
                b.prototype.clear = function() {
                    this.h.clear();
                    this.size = 0;
                };
                b.prototype.has = function(c) {
                    return this.h.has(c);
                };
                b.prototype.entries = function() {
                    return this.h.entries();
                };
                b.prototype.values = function() {
                    return p(this.h, 'values').call(this.h);
                };
                b.prototype.keys = p(b.prototype, 'values');
                b.prototype[p(n.Symbol, 'iterator')] = p(b.prototype, 'values');
                b.prototype.forEach = function(c, d) {
                    var e = this;
                    this.h.forEach((f) => c.call(d, f, f, e));
                };
                return b;
            },
            'es6'
        );
        ja(
            'String.prototype.startsWith',
            (a) =>
            a ?
            a :
            function(b, c) {
                if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
                if (b instanceof RegExp) throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
                var d = this.length;
                var e = b.length;
                c = Math.max(0, Math.min(c | 0, this.length));
                for (var f = 0; f < e && c < d;)
                    if (this[c++] != b[f++]) return !1;
                return f >= e;
            },
            'es6'
        );
        ja('globalThis', (a) => a || fa, 'es_2020');
        ja(
            'Array.prototype.keys',
            (a) =>
            a ?
            a :
            function() {
                return wa(this, (b) => b);
            },
            'es6'
        );
        ja(
            'Array.prototype.values',
            (a) =>
            a ?
            a :
            function() {
                return wa(this, (b, c) => c);
            },
            'es8'
        );
        ja(
            'Promise.prototype.finally',
            (a) =>
            a ?
            a :
            function(b) {
                return this.then(
                    (c) => n.Promise.resolve(b()).then(() => c),
                    (c) =>
                    n.Promise.resolve(b()).then(() => {
                        throw c;
                    })
                );
            },
            'es9'
        );
        var v = this || self;
        function ya(a) {
            a = a.split('.');
            for (var b = v, c = 0; c < a.length; c++)
                if (((b = b[a[c]]), null == b)) return null;
            return b;
        }
        function za(a) {
            var b = typeof a;
            return ('object' == b && null != a) || 'function' == b;
        }
        function Aa(a) {
            return (Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba]) || (a[Ba] = ++Ca);
        }
        var Ba = 'closure_uid_' + ((1e9 * Math.random()) >>> 0);
        var Ca = 0;
        function Da(a, b, c) {
            return a.call.apply(a.bind, arguments);
        }
        function Ea(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function(...args) {
                    var e = Array.prototype.slice.call(args);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e);
                };
            }
            return function(...args) {
                return a.apply(b, args);
            };
        }
        function Fa(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? (Fa = Da) : (Fa = Ea);
            return Fa(...arguments);
        }
        function Ga(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function(...args) {
                var d = c.slice();
                d.push(...args);
                return a.apply(this, d);
            };
        }
        function Ha(a) {
            var b = ['__uspapi'];
            var c = v;
            b[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + b[0]);
            for (var d; b.length && (d = b.shift());)
                b.length || void 0 === a ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = a);
        }
        function Ia(a) {
            return a;
        }
        var Ja = new Date().getTime();
        function Ka(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        }
        function La(a, b) {
            var c = 0;
            a = Ka(String(a)).split('.');
            b = Ka(String(b)).split('.');
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || '';
                var g = b[e] || '';
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c =
                        Ma(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
                        Ma(0 == f[2].length, 0 == g[2].length) ||
                        Ma(f[2], g[2]);
                    f = f[3];
                    g = g[3];
                } while (0 == c);
            }
            return c;
        }
        function Ma(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }
        var Na;
        a: {
            var Oa = v.navigator;
            if (Oa) {
                var Pa = Oa.userAgent;
                if (Pa) {
                    Na = Pa;
                    break a;
                }
            }
            Na = '';
        }
        function w(a) {
            return -1 != Na.indexOf(a);
        }
        function Qa() {
            return w('Trident') || w('MSIE');
        }
        function Ra() {
            return ((w('Chrome') || w('CriOS')) && !w('Edge')) || w('Silk');
        }
        function Sa(a) {
            var b = {};
            a.forEach((c) => {
                b[c[0]] = c[1];
            });
            return (c) => b[p(c, 'find').call(c, (d) => d in b)] || '';
        }
        function Ta() {
            var a = Na;
            if (Qa()) {
                var b = /rv: *([\d\.]*)/.exec(a);
                if (b && b[1]) a = b[1];
                else {
                    b = '';
                    var c = /MSIE +([\d\.]+)/.exec(a);
                    if (c && c[1])
                        if (((a = /Trident\/(\d.\d)/.exec(a)), '7.0' == c[1]))
                            if (a && a[1])
                                switch (a[1]) {
                                    case '4.0':
                                        b = '8.0';
                                        break;
                                    case '5.0':
                                        b = '9.0';
                                        break;
                                    case '6.0':
                                        b = '10.0';
                                        break;
                                    case '7.0':
                                        b = '11.0';
                                }
                    else b = '7.0';
                    else b = c[1];
                    a = b;
                }
                return a;
            }
            c = RegExp('([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?', 'g');
            b = [];
            for (var d;
                (d = c.exec(a));) b.push([d[1], d[2], d[3] || void 0]);
            a = Sa(b);
            return w('Opera') ?
                a(['Version', 'Opera']) :
                w('Edge') ?
                a(['Edge']) :
                w('Edg/') ?
                a(['Edg']) :
                w('Silk') ?
                a(['Silk']) :
                Ra() ?
                a(['Chrome', 'CriOS', 'HeadlessChrome']) :
                ((a = b[2]) && a[1]) || '';
        }
        function Ua(a, b) {
            for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
        }
        function Va(a, b) {
            for (var c = a.length, d = [], e = 0, f = 'string' === typeof a ? a.split('') : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h);
                }
            return d;
        }
        function Wa(a, b) {
            for (var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d;
        }
        function Xa(a, b) {
            for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1;
        }
        function Ya(a, b) {
            a: {
                for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a;
                    }
                b = -1;
            }
            return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
        }
        function Za(a, b) {
            a: {
                for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; d--)
                    if (d in c && b.call(void 0, c[d], d, a)) {
                        b = d;
                        break a;
                    }
                b = -1;
            }
            return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
        }
        function $a(a, b) {
            a: if ('string' === typeof a) a = 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
                else {
                    for (var c = 0; c < a.length; c++)
                        if (c in a && a[c] === b) {
                            a = c;
                            break a;
                        }
                    a = -1;
                }
            return 0 <= a;
        }
        function ab(a) {
            ab[' '](a);
            return a;
        }
        ab[' '] = () => {};
        var bb = Qa();
        !w('Android') || Ra();
        Ra();
        !w('Safari') || Ra();
        var cb = {};
        var db = null;
        var eb = 'function' === typeof Uint8Array;
        var fb = 'function' === typeof n.Symbol && 'symbol' === typeof(0, n.Symbol)() ? (0, n.Symbol)(void 0) : void 0;
        function hb(a) {
            Object.isFrozen(a) ||
                (fb ?
                    (a[fb] |= 1) :
                    void 0 !== a.h ?
                    (a.h |= 1) :
                    Object.defineProperties(a, {
                        h: {
                            value: 1,
                            configurable: !0,
                            writable: !0,
                            enumerable: !1
                        }
                    }));
            return a;
        }
        function ib(a) {
            return null !== a && 'object' === typeof a && a.constructor === Object;
        }
        var jb;
        function kb(a) {
            switch (typeof a) {
                case 'number':
                    return isFinite(a) ? a : String(a);
                case 'object':
                    if (eb && null != a && a instanceof Uint8Array) {
                        var b;
                        void 0 === b && (b = 0);
                        if (!db) {
                            db = {};
                            for (
                                var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), d = ['+/=', '+/', '-_=', '-_.', '-_'], e = 0; 5 > e; e++
                            ) {
                                var f = c.concat(d[e].split(''));
                                cb[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var h = f[g];
                                    void 0 === db[h] && (db[h] = g);
                                }
                            }
                        }
                        b = cb[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || '';
                        for (e = f = 0; f < a.length - 2; f += 3) {
                            var k = a[f];
                            var l = a[f + 1];
                            h = a[f + 2];
                            g = b[k >> 2];
                            k = b[((k & 3) << 4) | (l >> 4)];
                            l = b[((l & 15) << 2) | (h >> 6)];
                            h = b[h & 63];
                            c[e++] = g + k + l + h;
                        }
                        g = 0;
                        h = d;
                        switch (a.length - f) {
                            case 2:
                                (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
                            case 1:
                                (a = a[f]), (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
                        }
                        return c.join('');
                    }
            }
            return a;
        }
        function lb(a, b) {
            if (null != a) return Array.isArray(a) || ib(a) ? mb(a, b) : b(a);
        }
        function mb(a, b) {
            if (Array.isArray(a)) {
                for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = lb(a[d], b);
                if ((b = Array.isArray(a))) {
                    var e;
                    fb ? (e = a[fb]) : (e = a.h);
                    b = (null == e ? 0 : e) & 1;
                }
                b && hb(c);
                return c;
            }
            e = {};
            for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (e[c] = lb(a[c], b));
            return e;
        }
        function nb(a) {
            a = kb(a);
            return Array.isArray(a) ? mb(a, nb) : a;
        }
        var ob;
        function pb(a, b) {
            ob = b;
            a = new a(b);
            ob = null;
            return a;
        }
        function y(a, b, c) {
            var d = ob;
            ob = null;
            a || (a = d);
            d = this.constructor.messageId;
            a || (a = d ? [d] : []);
            this.l = (d ? 0 : -1) - (this.constructor.tb || 0);
            this.h = null;
            this.i = a;
            a: {
                d = this.i.length;
                a = d - 1;
                if (d && ((d = this.i[a]), ib(d))) {
                    this.m = a - this.l;
                    this.j = d;
                    break a;
                }
                void 0 !== b && -1 < b ? ((this.m = Math.max(b, a + 1 - this.l)), (this.j = null)) : (this.m = Number.MAX_VALUE);
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    (a = c[b]),
                    a < this.m ?
                    ((a += this.l), (d = this.i[a]) ? Array.isArray(d) && hb(d) : (this.i[a] = qb)) :
                    (rb(this), (d = this.j[a]) ? Array.isArray(d) && hb(d) : (this.j[a] = qb));
        }
        var qb = Object.freeze(hb([]));
        function rb(a) {
            var b = a.m + a.l;
            a.i[b] || (a.j = a.i[b] = {});
        }
        function z(a, b, c) {
            return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.m ? (a.j ? a.j[b] : void 0) : a.i[b + a.l];
        }
        function sb(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = z(a, b, c);
            null == d && (d = qb);
            d === qb && ((d = hb(d.slice())), A(a, b, d, c));
            return d;
        }
        function tb(a, b) {
            a = z(a, b);
            return null == a ? a : !!a;
        }
        function C(a, b, c) {
            a = z(a, b);
            return null == a ? c : a;
        }
        function D(a, b, c) {
            a = tb(a, b);
            return null == a ? (void 0 === c ? !1 : c) : a;
        }
        function ub(a, b, c) {
            a = z(a, b);
            a = null == a ? a : +a;
            return null == a ? (void 0 === c ? 0 : c) : a;
        }
        function A(a, b, c, d) {
            (void 0 === d ? 0 : d) || b >= a.m ? (rb(a), (a.j[b] = c)) : (a.i[b + a.l] = c);
            return a;
        }
        function vb(a, b, c) {
            0 !== c ? A(a, b, c) : A(a, b, void 0, !1);
            return a;
        }
        function wb(a, b, c, d) {
            (c = xb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), A(a, c, void 0));
            return A(a, b, d);
        }
        function xb(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != z(a, e) && (0 !== c && A(a, c, void 0, !1), (c = e));
            }
            return c;
        }
        function G(a, b, c) {
            if (-1 === c) return null;
            a.h || (a.h = {});
            var d = a.h[c];
            if (d) return d;
            var e = z(a, c, !1);
            if (null == e) return d;
            b = new b(e);
            return (a.h[c] = b);
        }
        function H(a, b, c) {
            a.h || (a.h = {});
            var d = a.h[c];
            if (!d) {
                var e = sb(a, c, !1);
                d = [];
                for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
                a.h[c] = d;
            }
            return d;
        }
        function yb(a, b, c) {
            var d = zb;
            a.h || (a.h = {});
            var e = c ? c.i : c;
            a.h[b] = c;
            return wb(a, b, d, e);
        }
        function Ab(a, b, c) {
            var d = void 0 === d ? !1 : d;
            if (c) {
                var e = hb([]);
                for (var f = 0; f < c.length; f++) e[f] = c[f].i;
                a.h || (a.h = {});
                a.h[b] = c;
            } else a.h && (a.h[b] = void 0), (e = qb);
            return A(a, b, e, d);
        }
        y.prototype.toJSON = function() {
            var a = this.i;
            return jb ? a : mb(a, nb);
        };
        function Bb(a, b) {
            return kb(b);
        }
        function Cb(a) {
            jb = !0;
            try {
                return JSON.stringify(a.toJSON(), Bb);
            } finally {}
            jb = !1;
        }
    }
    function Db(a, b, c) {
        return xb(a, b) === c ? c : -1;
    }
    function Eb(a, b, c) {
        return C(a, b, void 0 === c ? '' : c);
    }
    function Fb(a, b, c) {
        return C(a, Db(a, c, b), 0);
    }
    function Gb(a, b, c, d) {
        return G(a, b, Db(a, d, c));
    }
    function Hb(a) {
        y.call(this, a, -1, Ib);
    }
    u(Hb, y);
    function Jb(a) {
        y.call(this, a);
    }
    u(Jb, y);
    var Ib = [2, 3];
    function Kb(a, b) {
        this.i = (a === Lb && b) || '';
        this.h = Mb;
    }
    var Mb = {};
    var Lb = {};
    function Nb(a, b) {
        var c = {};
        var d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c;
    }
    function Ob(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1;
    }
    function Pb(a) {
        var b = {};
        var c;
        for (c in a) b[c] = a[c];
        return b;
    }
    var Qb;
    function Rb(a, b) {
        this.h = b === Sb ? a : '';
    }
    function Tb(a, b) {
        a = Ub.exec(Vb(a).toString());
        var c = a[3] || '';
        return Wb(a[1] + Xb('?', a[2] || '', b) + Xb('#', c, void 0));
    }
    Rb.prototype.toString = function() {
        return this.h + '';
    };
    function Vb(a) {
        return a instanceof Rb && a.constructor === Rb ? a.h : 'type_error:TrustedResourceUrl';
    }
    var Ub = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    var Sb = {};
    function Wb(a) {
        if (void 0 === Qb) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy('goog#html', {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    });
                } catch (d) {
                    v.console && v.console.error(d.message);
                }
                Qb = b;
            } else Qb = b;
        }
        a = (b = Qb) ? b.createScriptURL(a) : a;
        return new Rb(a, Sb);
    }
    function Xb(a, b, c) {
        if (null == c) return b;
        if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), (b += (b.length > a.length ? '&' : '') + encodeURIComponent(d) + '=' + encodeURIComponent(String(g))));
                }
            }
        return b;
    }
    /*
    SPDX-License-Identifier: Apache-2.0
    */
    var Yb = {};
    function Zb() {
        var a = 'undefined' !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null;
    }
    var $b;
    function ac() {
        var a;
        var b;
        if (void 0 === $b)
            try {
                $b =
                    null !==
                    (b =
                        null === (a = Zb()) || void 0 === a ?
                        void 0 :
                        a.createPolicy('google#safe', {
                            createHTML(c) {
                                return c;
                            },
                            createScript(c) {
                                return c;
                            },
                            createScriptURL(c) {
                                return c;
                            }
                        })) && void 0 !== b ?
                    b :
                    null;
            } catch (c) {
                $b = null;
            }
        return $b;
    }
    function bc() {}
    function cc(a) {
        this.h = a;
    }
    u(cc, bc); cc.prototype.toString = function() {
        return this.h.toString();
    };
    function dc(a) {
        var b;
        var c = null === (b = ac()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new cc(null !== c && void 0 !== c ? c : a, Yb);
    }
    function ec(a) {
        if (a instanceof cc) return a.h;
        throw Error('');
    }
    function fc(a) {
        var b = ta.apply(1, arguments);
        if (0 === b.length) return dc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return dc(c.join(''));
    }
    function gc(a) {
        return a instanceof bc ? ec(a) : Vb(a);
    }
    function hc(a) {
        return function(...args) {
            return !a.apply(this, args);
        };
    }
    function ic(a) {
        var b = !1;
        var c;
        return () => {
            b || ((c = a()), (b = !0));
            return c;
        };
    }
    function jc(a) {
        var b = a;
        return () => {
            if (b) {
                var c = b;
                b = null;
                c();
            }
        };
    }
    function kc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1);
    }
    function lc(a, b) {
        a.removeEventListener && a.removeEventListener('message', b, !1);
    }
    function mc(a) {
        return String(a).replace(/\-([a-z])/g, (b, c) => c.toUpperCase());
    }
    function nc(a, b) {
        b = String(b);
        'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
        return a.createElement(b);
    }
    function oc(a) {
        this.h = a || v.document || document;
    }
    oc.prototype.contains = (a, b) => {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ('undefined' != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a;
    };
    function rc() {
        return !sc() && (w('iPod') || w('iPhone') || w('Android') || w('IEMobile'));
    }
    function sc() {
        return w('iPad') || (w('Android') && !w('Mobile')) || w('Silk');
    }
    var tc = RegExp('^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$');
    var uc = /#|$/;
    function vc(a) {
        var b = a.search(uc);
        var c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf('client', c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (((d = a.charCodeAt(c + 6)), !d || 61 == d || 38 == d || 35 == d)) break a;
                c += 7;
            }
            c = -1;
        }
        if (0 > c) return null;
        d = a.indexOf('&', c);
        if (0 > d || d > b) d = b;
        c += 7;
        return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, ' '));
    }
    function wc(a) {
        try {
            var b;
            if ((b = !!a && null != a.location.href))
                a: {
                    try {
                        ab(a.foo);
                        b = !0;
                        break a;
                    } catch (c) {}
                    b = !1;
                }
            return b;
        } catch (c) {}
        return !1;
    }
}
function xc(a, b) {
    var c = yc('SCRIPT', a);
    c.src = gc(b);
    var d;
    b = ((c.ownerDocument && c.ownerDocument.defaultView) || window).document;
    var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, 'script[nonce]');
    (d = e ? e.nonce || e.getAttribute('nonce') || '' : '') && c.setAttribute('nonce', d);
    return (a = a.getElementsByTagName('script')[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
}
function zc(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
}
function Ac(a, b) {
    if (!Bc() && !Cc()) {
        var c = Math.random();
        if (c < b) return (c = Dc()), a[Math.floor(c * a.length)];
    }
    return null;
}
function Dc() {
    if (!n.globalThis.crypto) return Math.random();
    try {
        var a = new Uint32Array(1);
        n.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
    } catch (b) {}
    return Math.random();
}
}
function Ec(a, b) {
    if (a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
}
function Fc(a) {
    var b = a.length;
    if (0 == b) return 0;
    for (var c = 305419896, d = 0; d < b; d++) c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
}
var Cc = ic(() => Xa(['Google Web Preview', 'Mediapartners-Google', 'Google-Read-Aloud', 'Google-Adwords'], Gc) || 1e-4 > Math.random());
function Hc(a, b) {
    var c = -1;
    try {
        a && (c = parseInt(a.getItem(b), 10));
    } catch (d) {}
    return null;
}
return 0 <= c && 1e3 > c ? c : null;
}
function Ic(a, b) {
    var c = Cc() ? null : Math.floor(1e3 * Dc());
    var d;
    if ((d = null != c && a))
        a: {
            var e = String(c);
            try {
                if (a) {
                    a.setItem(b, e);
                    d = e;
                    break a;
                }
            } catch (f) {}
            d = null;
        }
    return d ? c : null;
}
var Bc = ic(() => Gc('MSIE'));
function Gc(a) {
    return -1 != Na.indexOf(a);
}
var Jc = /^([0-9.]+)px$/;
var Kc = /^(-?[0-9.]{1,30})$/;
function Lc(a) {
    return Kc.test(a) && ((a = Number(a)), !isNaN(a)) ? a : null;
}
function I(a) {
    return (a = Jc.exec(a)) ? +a[1] : null;
}
function Mc(a, b) {
    for (var c = 0; 50 > c; ++c) {
        try {
            var d = !(!a.frames || !a.frames[b]);
        } catch (g) {
            d = !1;
        }
        if (d) return a;
        a: {
            try {
                var e = a.parent;
                if (e && e != a) {
                    var f = e;
                    break a;
                }
            } catch (g) {}
            f = null;
        }
        if (!(a = f)) break;
    }
    return null;
}
var Nc = ic(() => (rc() ? 2 : sc() ? 1 : 0));
function Oc(a) {
    Ec({
            display: 'none'
        },
        (b, c) => {
            a.style.setProperty(c, b, 'important');
        }
    );
}
var Pc = [];
function Qc() {
    var a = Pc;
    Pc = [];
    a = q(a);
    for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
            b();
        } catch (c) {}
    }
}
function Rc(a, b) {
    b = void 0 === b ? window.document : b;
    0 != a.length &&
        b.head &&
        a.forEach((c) => {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = yc('META');
                    d.head.appendChild(e);
                    e.httpEquiv = 'origin-trial';
                    e.content = c;
                }
            }
        });
}
function Sc(a) {
    if ('number' !== typeof a.goog_pvsid)
        try {
            Object.defineProperty(a, 'goog_pvsid', {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            });
        } catch (b) {}
    return Number(a.goog_pvsid) || -1;
}
function Tc(a) {
    var b = Uc;
    'complete' === b.readyState || 'interactive' === b.readyState ?
        (Pc.push(a), 1 == Pc.length && (n.Promise ? n.Promise.resolve().then(Qc) : window.setImmediate ? setImmediate(Qc) : setTimeout(Qc, 0))) :
        b.addEventListener('DOMContentLoaded', a);
}
function yc(a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
}
var Vc = null;
var Uc = document;
var J = window;
function Wc(a) {
    a = void 0 === a ? v : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
        try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
        } catch (c) {}
    try {
        if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
}
function Xc(a) {
    return (a = a || Wc()) ? (wc(a.master) ? a.master : null) : null;
}
function Yc(a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = yc('IMG', a.document);
    c.src = b;
    a.google_image_requests.push(c);
}
function Zc(a, b) {
    var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
    Ec(a, (d, e) => {
        d && (c += '&' + e + '=' + encodeURIComponent(d));
    });
    $c(c);
}
function $c(a) {
    var b = window;
    b.fetch ?
        b.fetch(a, {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors'
        }) :
        Yc(b, a);
}
function ad(a) {
    return !(!a || !a.call) && 'function' === typeof a;
}
function bd(a) {
    var b = void 0 === b ? 1 : b;
    a = Xc(Wc(a)) || a;
    a.google_unique_id = (a.google_unique_id || 0) + b;
    return a.google_unique_id;
}
function cd(a) {
    a = a.google_unique_id;
    return 'number' === typeof a ? a : 0;
}
var dd = !!window.google_async_iframe_id;
var ed = (dd && window.parent) || window;
function fd() {
    if (dd && !wc(ed)) {
        0.01 > Math.random() &&
            Zc({
                    stack: Error().stack
                },
                'badpubwin'
            );
        var a = '.' + Uc.domain;
        try {
            for (; 2 < a.split('.').length && !wc(ed);)(Uc.domain = a = a.substr(a.indexOf('.') + 1)), (ed = window.parent);
        } catch (b) {}
        wc(ed) || (ed = window);
    }
    return ed;
}
function gd() {
    var a = void 0 === a ? J : a;
    if (!a) return !1;
    try {
        return !(!a.navigator.standalone && !a.top.navigator.standalone);
    } catch (b) {}
    return !1;
}
}
function hd(a) {
    a = a.top;
    return wc(a) ? a : null;
}
function id(a) {
    if (!a) return '';
    a = a.toLowerCase();
    'ca-' != a.substring(0, 3) && (a = 'ca-' + a);
    return a;
}
var jd = null;
function kd(a, b) {
    b = void 0 === b ? [] : b;
    var c = !1;
    v.google_logging_queue || ((c = !0), (v.google_logging_queue = []));
    v.google_logging_queue.push([a, b]);
    if ((a = c)) {
        if (null == jd) {
            jd = !1;
            try {
                var d = hd(v);
                d && -1 !== d.location.hash.indexOf('google_logging') && (jd = !0);
                v.localStorage.getItem('google_logging') && (jd = !0);
            } catch (e) {}
        }
        a = jd;
    }
    a &&
        ((d = v.document),
            (a = new Kb(Lb, 'https://pagead2.googlesyndication.com/pagead/js/logging_library.js')),
            (a = Wb(a instanceof Kb && a.constructor === Kb && a.h === Mb ? a.i : 'type_error:Const')),
            xc(d, a));
}
function ld(a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || '';
    this.id = b.id || 'jserror';
    this.meta = c;
}
function md(a) {
    return !!(a.error && a.meta && a.id);
}
var nd = RegExp('^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)');
function od(a, b) {
    this.h = a;
    this.i = b;
}
function pd(a, b, c) {
    this.url = a;
    this.ba = b;
    this.Ia = !!c;
    this.depth = null;
}
function qd() {
    this.j = '&';
    this.i = {};
    this.l = 0;
    this.h = [];
}
function rd(a, b) {
    var c = {};
    c[a] = b;
    return [c];
}
function sd(a, b, c, d, e) {
    var f = [];
    Ec(a, (g, h) => {
        (g = td(g, b, c, d, e)) && f.push(h + '=' + g);
    });
    return f.join(b);
}
function td(a, b, c, d, e) {
    if (null == a) return '';
    b = b || '&';
    c = c || ',$';
    'string' == typeof c && (c = c.split(''));
    if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
            for (var f = [], g = 0; g < a.length; g++) f.push(td(a[g], b, c, d + 1, e));
            return f.join(c[d]);
        }
    } else if ('object' == typeof a) return (e = e || 0), 2 > e ? encodeURIComponent(sd(a, b, c, d, e + 1)) : '...';
    return encodeURIComponent(String(a));
}
function ud(a, b) {
    var c = 'https://pagead2.googlesyndication.com' + b;
    var d = vd(a) - b.length;
    if (0 > d) return '';
    a.h.sort((m, r) => m - r);
    b = null;
    for (var e = '', f = 0; f < a.h.length; f++)
        for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
            if (!d) {
                b = null == b ? g : b;
                break;
            }
            var l = sd(h[k], a.j, ',$');
            if (l) {
                l = e + l;
                if (d >= l.length) {
                    d -= l.length;
                    c += l;
                    e = a.j;
                    break;
                }
                b = null == b ? g : b;
            }
        }
    a = '';
    null != b && (a = e + 'trn=' + b);
    return c + a;
}
function vd(a) {
    var b = 1;
    var c;
    for (c in a.i) b = c.length > b ? c.length : b;
    return 3997 - b - a.j.length - 1;
}
function wd() {
    this.h = Math.random();
}
function xd() {
    var a = yd;
    var b = v.google_srt;
    0 <= b && 1 >= b && (a.h = b);
}
function zd(a, b, c, d, e) {
    if ((d ? a.h : Math.random()) < (e || 0.01))
        try {
            if (c instanceof qd) var f = c;
            else
                (f = new qd()),
                Ec(c, (h, k) => {
                    var l = f;
                    var m = l.l++;
                    h = rd(k, h);
                    l.h.push(m);
                    l.i[m] = h;
                });
            var g = ud(f, '/pagead/gen_204?id=' + b + '&');
            g && Yc(v, g);
        } catch (h) {}
}
var Ad = null;
function Bd() {
    if (null === Ad) {
        Ad = '';
        try {
            var a = '';
            try {
                a = v.top.location.hash;
            } catch (c) {
                a = v.location.hash;
            }
            if (a) {
                var b = a.match(/\bdeid=([\d,]+)/);
                Ad = b ? b[1] : '';
            }
        } catch (c) {}
    }
    return Ad;
}
function Cd() {
    var a = v.performance;
    return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
}
function Dd() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now ? a.now() : null;
}
function Ed(a, b) {
    var c = Dd() || Cd();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = Math.random();
    this.slotId = void 0;
}
var Fd = v.performance;
var Gd = !!(Fd && Fd.mark && Fd.measure && Fd.clearMarks);
var Hd = ic(() => {
    var a;
    if ((a = Gd))(a = Bd()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
    return a;
});
function Id() {
    this.events = [];
    this.i = v || v;
    var a = null;
    v && ((v.google_js_reporting_queue = v.google_js_reporting_queue || []), (this.events = v.google_js_reporting_queue), (a = v.google_measure_js_timing));
    this.h = Hd() || (null != a ? a : 1 > Math.random());
}
function Jd(a) {
    a && Fd && Hd() && (Fd.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), Fd.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
}
Id.prototype.start = function(a, b) {
    if (!this.h) return null;
    a = new Ed(a, b);
    b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
    Fd && Hd() && Fd.mark(b);
    return a;
};
Id.prototype.end = function(a) {
    if (this.h && 'number' === typeof a.value) {
        a.duration = (Dd() || Cd()) - a.value;
        var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
        Fd && Hd() && Fd.mark(b);
        !this.h || 2048 < this.events.length || this.events.push(a);
    }
};
function Kd() {
    var a = Ld;
    this.m = yd;
    this.i = null;
    this.l = this.I;
    this.h = void 0 === a ? null : a;
    this.j = !1;
}
aa = Kd.prototype;
aa.Pa = function(a) {
    this.l = a;
};
aa.Oa = function(a) {
    this.i = a;
};
aa.Qa = function(a) {
    this.j = a;
};
aa.ma = function(a, b, c) {
    try {
        if (this.h && this.h.h) {
            var d = this.h.start(a.toString(), 3);
            var e = b();
            this.h.end(d);
        } else e = b();
    } catch (h) {
        b = !0;
        try {
            Jd(d),
                (b = this.l(
                    a,
                    new ld(h, {
                        message: Md(h)
                    }),
                    void 0,
                    c
                ));
        } catch (k) {
            this.I(217, k);
        }
        if (b) {
            var f;
            var g;
            null == (f = window.console) || null == (g = f.error) || g.call(f, h);
        } else throw h;
    }
    return e;
};
aa.La = function(a, b, c, d) {
    var e = this;
    return function(...args) {
        var f = ta.apply(0, args);
        return e.ma(a, () => b.apply(c, f), d);
    };
};
aa.I = function(a, b, c, d, e) {
    e = e || 'jserror';
    try {
        var f = new qd();
        f.h.push(1);
        f.i[1] = rd('context', a);
        md(b) ||
            (b = new ld(b, {
                message: Md(b)
            }));
        if (b.msg) {
            var g = b.msg.substring(0, 512);
            f.h.push(2);
            f.i[2] = rd('msg', g);
        }
        var h = b.meta || {};
        if (this.i)
            try {
                this.i(h);
            } catch (pc) {}
        if (d)
            try {
                d(h);
            } catch (pc) {}
        b = [h];
        f.h.push(3);
        f.i[3] = b;
        d = v;
        b = [];
        g = null;
        do {
            var k = d;
            if (wc(k)) {
                var l = k.location.href;
                g = (k.document && k.document.referrer) || null;
            } else(l = g), (g = null);
            b.push(new pd(l || '', k));
            try {
                d = k.parent;
            } catch (pc) {
                d = null;
            }
        } while (d && k != d);
        l = 0;
        for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
        k = v;
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
            for (m = 1; m < b.length; ++m) {
                var r = b[m];
                r.url || ((r.url = k.location.ancestorOrigins[m - 1] || ''), (r.Ia = !0));
            }
        var t = new pd(v.location.href, v, !1);
        k = null;
        var x = b.length - 1;
        for (r = x; 0 <= r; --r) {
            var E = b[r];
            !k && nd.test(E.url) && (k = E);
            if (E.url && !E.Ia) {
                t = E;
                break;
            }
        }
        E = null;
        var B = b.length && b[x].url;
        0 != t.depth && B && (E = b[x]);
        var F = new od(t, E);
        if (F.i) {
            var va = F.i.url || '';
            f.h.push(4);
            f.i[4] = rd('top', va);
        }
        var gb = {
            url: F.h.url || ''
        };
        if (F.h.url) {
            var qc = F.h.url.match(tc);
            var Ef = qc[1];
            var Ff = qc[3];
            var Gf = qc[4];
            t = '';
            Ef && (t += Ef + ':');
            Ff && ((t += '//'), (t += Ff), Gf && (t += ':' + Gf));
            var Hf = t;
        } else Hf = '';
        gb = [
            gb,
            {
                url: Hf
            }
        ];
        f.h.push(5);
        f.i[5] = gb;
        zd(this.m, e, f, this.j, c);
    } catch (pc) {
        try {
            zd(
                this.m,
                e, {
                    context: 'ecmserr',
                    rctx: a,
                    msg: Md(pc),
                    url: F && F.h.url
                },
                this.j,
                c
            );
        } catch (qo) {}
    }
    return !0;
};
function Md(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
    if (a.stack) {
        a = a.stack;
        try {
            -1 == a.indexOf(b) && (a = b + '\n' + a);
            for (var c; a != c;)(c = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
            b = a.replace(/\n */g, '\n');
        } catch (d) {}
    }
    return b;
}
function K(a) {
    a = void 0 === a ? '' : a;
    var b = Error.call(this);
    this.message = b.message;
    'stack' in b && (this.stack = b.stack);
    this.name = 'TagError';
    this.message = a ? 'adsbygoogle.push() error: ' + a : '';
    Error.captureStackTrace ? Error.captureStackTrace(this, K) : (this.stack = Error().stack || '');
}
u(K, Error);
function Nd(a) {
    return null !== a && void 0 !== a;
}
function Od(a, b) {
    if (!b(a)) throw Error(String(a));
}
function Pd(a) {
    return 'string' === typeof a;
}
function Qd(a) {
    return void 0 === a;
}
function Rd(a) {
    y.call(this, a, -1, Sd);
}
u(Rd, y);
var Sd = [2, 8];
var Td = [3, 4, 5];
var Ud = [6, 7];
var Vd;
Vd = {
    sb: 0,
    Ta: 3,
    Ua: 4,
    Va: 5
};
var Wd = Vd.Ta;
var Xd = Vd.Ua;
var Yd = Vd.Va;
function Zd(a) {
    return null != a ? !a : a;
}
function $d(a, b) {
    for (var c = !1, d = 0; d < a.length; d++) {
        var e = a[d]();
        if (e === b) return e;
        null == e && (c = !0);
    }
    if (!c) return !b;
}
function ae(a, b) {
    var c = H(a, Rd, 2);
    if (!c.length) return be(a, b);
    a = C(a, 1, 0);
    if (1 === a) return Zd(ae(c[0], b));
    c = Wa(c, (d) => () => ae(d, b));
    switch (a) {
        case 2:
            return $d(c, !1);
        case 3:
            return $d(c, !0);
    }
}
function be(a, b) {
    var c = xb(a, Td);
    a: {
        switch (c) {
            case Wd:
                var d = Fb(a, 3, Td);
                break a;
            case Xd:
                d = Fb(a, 4, Td);
                break a;
            case Yd:
                d = Fb(a, 5, Td);
                break a;
        }
        d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
        try {
            var e = b(...ma(sb(a, 8)));
        } catch (f) {
            return;
        }
        b = C(a, 1, 0);
        if (4 === b) return !!e;
        d = null != e;
        if (5 === b) return d;
        if (12 === b) a = Eb(a, Db(a, Ud, 7), void 0);
        else
            a: {
                switch (c) {
                    case Xd:
                        a = ub(a, Db(a, Ud, 6), void 0);
                        break a;
                    case Yd:
                        a = Eb(a, Db(a, Ud, 7), void 0);
                        break a;
                }
                a = void 0;
            }
        if (null != a) {
            if (6 === b) return e === a;
            if (9 === b) return null != e && 0 === La(String(e), a);
            if (d)
                switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Pd(a) && Pd(e) && new RegExp(a).test(e);
                    case 10:
                        return null != e && -1 === La(String(e), a);
                    case 11:
                        return null != e && 1 === La(String(e), a);
                }
        }
    }
}
function ce(a, b) {
    return !a || !(!b || !ae(a, b));
}
function de(a) {
    y.call(this, a, -1, ee);
}
u(de, y);
var ee = [4];
function fe(a) {
    y.call(this, a);
}
u(fe, y);
function ge(a) {
    y.call(this, a, -1, he);
}
u(ge, y);
var he = [5];
var ie = [1, 2, 3, 6, 7];
function je(a) {
    a.ib(
        ...ma(
            ta.apply(1, arguments).map((b) => ({
                pb: 4,
                message: b
            }))
        )
    );
}
function ke(a) {
    return function(...args) {
        var b = ta.apply(0, args);
        try {
            return a.apply(this, b);
        } catch (c) {}
    };
}
var le = ke((a) => {
    var b = [];
    var c = {};
    a = q(a);
    for (
        var d = a.next(); !d.done; c = {
            ca: c.ca
        },
        d = a.next()
    )
        (c.ca = d.value),
        ke(
            ((e) => () => {
                b.push('[{"' + e.ca.pb + '":' + Cb(e.ca.message) + '}]');
            })(c)
        )();
    return '[[' + b.join(',') + ']]';
});
function me(a, b) {
    if (n.globalThis.fetch)
        n.globalThis.fetch(a, {
            method: 'POST',
            body: b,
            keepalive: 65536 > b.length,
            credentials: 'omit',
            mode: 'no-cors',
            redirect: 'follow'
        });
    else {
        var c = new XMLHttpRequest();
        c.open('POST', a, !0);
        c.send(b);
    }
}
function ne(a) {
    var b = void 0 === b ? me : b;
    this.l = void 0 === a ? 1e3 : a;
    this.j = b;
    this.i = [];
    this.h = null;
}
ne.prototype.ib = function(...args) {
    var a = ta.apply(0, args);
    var b = this;
    ke(() => {
        b.i.push(...ma(a));
        var c = ke(() => {
            var d = le(b.i);
            b.j('https://pagead2.googlesyndication.com/pagead/ping?e=1', d);
            b.i = [];
            b.h = null;
        });
        100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), (b.h = setTimeout(c, 0))) : null === b.h && (b.h = setTimeout(c, b.l));
    })();
};
function oe(a) {
    y.call(this, a, -1, pe);
}
u(oe, y);
function qe(a) {
    y.call(this, a);
}
u(qe, y);
qe.prototype.$ = function() {
    return C(this, 1, 0);
};
function re(a) {
    y.call(this, a);
}
u(re, y);
var pe = [2, 4, 5];
var se = [1, 2];
function te(a) {
    y.call(this, a, -1, ue);
}
u(te, y);
function ve(a) {
    y.call(this, a);
}
u(ve, y);
var ue = [2, 3];
var we = [1, 2, 3, 4];
function xe(a) {
    y.call(this, a);
}
u(xe, y);
xe.prototype.getTagSessionCorrelator = function() {
    return C(this, 2, 0);
};
var zb = [4, 5, 7];
function ye(a, b, c) {
    var d = void 0 === d ? new ne(b) : d;
    this.i = a;
    this.m = c;
    this.j = d;
    this.h = [];
    this.l = 0 < this.i && Dc() < 1 / this.i;
}
function ze(a, b, c, d, e, f) {
    var g = new qe();
    b = vb(g, 1, b);
    c = vb(b, 2, c);
    b = new oe();
    var h = void 0 === h ? !1 : h;
    d = A(b, 4, null == d ? hb([]) : Array.isArray(d) ? hb(d) : d, h);
    e = Ab(d, 5, e);
    e.h || (e.h = {});
    d = c ? c.i : c;
    e.h[1] = c;
    var k = A(e, 1, d, void 0 === k ? !1 : k);
    k = Ab(k, 2, a.h);
    f = vb(k, 6, f);
    k = new xe();
    f = yb(k, 4, f);
    a.l && je(a.j, Ae(a, f));
    a.h.push(c);
    100 < a.h.length && a.h.shift();
}
function Be(a, b, c, d) {
    if (a.m) {
        var e = new te();
        b = Ab(e, 2, b);
        c = Ab(b, 3, c);
        d && vb(c, 1, d);
        d = new xe();
        d = yb(d, 7, c);
        a.l && je(a.j, Ae(a, d));
    }
}
function Ae(a, b) {
    b = vb(b, 1, Date.now());
    var c = Sc(window);
    b = vb(b, 2, c);
    return vb(b, 6, a.i);
}
function L(a) {
    var b = 'qa';
    if (a.qa && a.hasOwnProperty(b)) return a.qa;
    b = new a();
    return (a.qa = b);
}
function Ce() {
    var a = {};
    this.h = ((a[Wd] = {}), (a[Xd] = {}), (a[Yd] = {}), a);
}
var De = /^true$/.test('false');
function Ee(a, b) {
    switch (b) {
        case 1:
            return Fb(a, 1, ie);
        case 2:
            return Fb(a, 2, ie);
        case 3:
            return Fb(a, 3, ie);
        case 6:
            return Fb(a, 6, ie);
        default:
            return null;
    }
}
function Fe(a, b) {
    if (!a) return null;
    switch (b) {
        case 1:
            return D(a, 1);
        case 7:
            return Eb(a, 3);
        case 2:
            return ub(a, 2);
        case 3:
            return Eb(a, 3);
        case 6:
            return sb(a, 4);
        default:
            return null;
    }
}
var Ge = ic(() => {
    if (!De) return {};
    try {
        var a = window.sessionStorage && window.sessionStorage.getItem('GGDFSSK');
        if (a) return JSON.parse(a);
    } catch (b) {}
    return {};
});
function He(a, b, c, d) {
    var e = (d = void 0 === d ? 0 : d);
    var f;
    var g;
    L(Ie).j[e] = null != (g = null == (f = L(Ie).j[e]) ? void 0 : f.add(b)) ? g : new n.Set().add(b);
    e = Ge();
    if (null != e[b]) return e[b];
    b = Je(d)[b];
    if (!b) return c;
    b = new ge(b);
    b = Ke(b);
    a = Fe(b, a);
    return null != a ? a : c;
}
function Ke(a) {
    var b = L(Ce).h;
    if (b) {
        var c = Za(H(a, fe, 5), (d) => ce(G(d, Rd, 1), b));
        if (c) return G(c, de, 2);
    }
    return G(a, de, 4);
}
function Ie() {
    this.h = {};
    this.l = [];
    this.j = {};
    this.i = {};
}
function Le(a, b, c) {
    return !!He(1, a, void 0 === b ? !1 : b, c);
}
function Me(a, b, c) {
    b = void 0 === b ? 0 : b;
    a = Number(He(2, a, b, c));
    return isNaN(a) ? b : a;
}
function Ne(a, b, c) {
    return He(3, a, void 0 === b ? '' : b, c);
}
function Oe(a, b, c) {
    b = void 0 === b ? [] : b;
    return He(6, a, b, c);
}
function Je(a) {
    return L(Ie).h[a] || (L(Ie).h[a] = {});
}
function Pe(a, b) {
    var c = Je(b);
    Ec(a, (d, e) => (c[e] = d));
}
function Qe(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = [];
    var g = [];
    Ua(b, (h) => {
        var k = Je(h);
        Ua(a, (l) => {
            var m = xb(l, ie);
            var r = Ee(l, m);
            if (r) {
                a: {
                    var t = new ve();
                    switch (m) {
                        case 1:
                            wb(t, 1, we, r);
                            break;
                        case 2:
                            wb(t, 2, we, r);
                            break;
                        case 3:
                            wb(t, 3, we, r);
                            break;
                        case 6:
                            wb(t, 4, we, r);
                            break;
                        default:
                            m = void 0;
                            break a;
                    }
                    m = t;
                }
                if ((t = m)) {
                    var x;
                    t = !(null == (x = L(Ie).j[h]) || !x.has(r));
                }
                t && f.push(m);
                if ((x = m)) {
                    var E;
                    x = !(null == (E = L(Ie).i[h]) || !E.has(r));
                }
                x && g.push(m);
                if (!e) {
                    var B;
                    var F;
                    L(Ie).i[h] = null != (F = null == (B = L(Ie).i[h]) ? void 0 : B.add(r)) ? F : new n.Set().add(r);
                }
                k[r] = l.toJSON();
            }
        });
    });
    (f.length || g.length) && Be(c, f, g, null != d ? d : void 0);
}
function Re(a, b) {
    var c = Je(b);
    Ua(a, (d) => {
        var e = new ge(d);
        var f = xb(e, ie);
        (e = Ee(e, f)) && (c[e] || (c[e] = d));
    });
}
function Se() {
    return Wa(p(Object, 'keys').call(Object, L(Ie).h), (a) => Number(a));
}
function Te(a) {
    $a(L(Ie).l, a) || Pe(Je(4), a);
}
function M(a) {
    this.methodName = a;
}
var Ue = new M(1);
var Ve = new M(16);
var We = new M(15);
var Xe = new M(2);
var Ye = new M(3);
var Ze = new M(4);
var $e = new M(5);
var af = new M(6);
var bf = new M(7);
var cf = new M(8);
var df = new M(9);
var ef = new M(10);
var ff = new M(11);
var gf = new M(12);
var hf = new M(13);
var jf = new M(14);
function N(a, b, c) {
    c.hasOwnProperty(a.methodName) ||
        Object.defineProperty(c, String(a.methodName), {
            value: b
        });
}
function kf(a, b, c) {
    return b[a.methodName] || c || (() => {});
}
function lf(a) {
    N($e, Le, a);
    N(af, Me, a);
    N(bf, Ne, a);
    N(cf, Oe, a);
    N(hf, Re, a);
    N(We, Te, a);
}
function mf(a) {
    N(
        Ze,
        (b) => {
            L(Ce).h = b;
        },
        a
    );
    N(
        df,
        (b, c) => {
            var d = L(Ce);
            d.h[Wd][b] || (d.h[Wd][b] = c);
        },
        a
    );
    N(
        ef,
        (b, c) => {
            var d = L(Ce);
            d.h[Xd][b] || (d.h[Xd][b] = c);
        },
        a
    );
    N(
        ff,
        (b, c) => {
            var d = L(Ce);
            d.h[Yd][b] || (d.h[Yd][b] = c);
        },
        a
    );
    N(
        jf,
        (b) => {
            for (var c = L(Ce), d = q([Wd, Xd, Yd]), e = d.next(); !e.done; e = d.next())(e = e.value), p(Object, 'assign').call(Object, c.h[e], b[e]);
        },
        a
    );
}
function nf(a) {
    a.hasOwnProperty('init-done') ||
        Object.defineProperty(a, 'init-done', {
            value: !0
        });
}
function of () {
    this.l = () => {};
    this.j = () => {};
    this.i = () => {};
    this.h = () => [];
}
function pf(a, b, c) {
    a.l = kf(Ue, b, () => {});
    a.i = (d) => {
        kf(Xe, b, () => [])(d, c);
    };
    a.h = () => kf(Ye, b, () => [])(c);
    a.j = (d) => {
        kf(Ve, b, () => {})(d, c);
    };
}
var yd;
var qf;
var Ld = new Id();
function rf(a) {
    null != a && (v.google_measure_js_timing = a);
    v.google_measure_js_timing || ((a = Ld), (a.h = !1), a.events != a.i.google_js_reporting_queue && (Hd() && Ua(a.events, Jd), (a.events.length = 0)));
}
((a) => {
    yd = a || new wd();
    'number' !== typeof v.google_srt && (v.google_srt = Math.random());
    xd();
    qf = new Kd();
    qf.Qa(!0);
    'complete' == v.document.readyState ?
        rf() :
        Ld.h &&
        kc(v, 'load', () => {
            rf();
        });
})();
function sf(a, b, c) {
    return qf.ma(a, b, c);
}
function tf(a, b) {
    return qf.La(a, b, void 0, void 0);
}
function uf(a, b, c) {
    var d = L( of ).h();
    !b.eid && d.length && (b.eid = d.toString());
    zd(yd, a, b, !0, c);
}
function vf(a) {
    return (b) => {
        null != b || (b = 'unnamed rejection');
        qf.I(a, b instanceof Error ? b : Error(b), void 0, void 0);
    };
}
function wf(a, b, c, d) {
    var e;
    md(b) ? (e = b.msg || Md(b.error)) : (e = Md(b));
    return 0 == e.indexOf('TagError') ?
        ((c = b instanceof ld ? b.error : b), c.pbr || ((c.pbr = !0), qf.I(a, b, 0.1, d, 'puberror')), !1) :
        qf.I(a, b, c, d);
}
var xf = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5
};
function yf() {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.wasReactiveTagRequestSent = !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.messageValidationEnabled = !1;
    this.floatingAdsStacking = new zf();
}
function Af(a) {
    a.google_reactive_ads_global_state ?
        null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new zf()) :
        (a.google_reactive_ads_global_state = new yf());
    return a.google_reactive_ads_global_state;
}
function zf() {
    this.maxZIndexRestrictions = {};
    this.nextRestrictionId = 0;
    this.maxZIndexListeners = [];
}
function Bf(a) {
    a = a.document;
    var b = {};
    a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
    return b || {};
}
function Cf(a) {
    return Bf(a).clientWidth;
}
bb || !w('Safari') || Ra();
function Df() {
    this.i = new If(this);
    this.h = 0;
}
Df.prototype.resolve = function(a) {
    Jf(this);
    this.h = 1;
    this.l = a;
    Kf(this.i);
};
Df.prototype.reject = function(a) {
    Jf(this);
    this.h = 2;
    this.j = a;
    Kf(this.i);
};
function Jf(a) {
    if (0 != a.h) throw Error('Already resolved/rejected.');
}
function If(a) {
    this.h = a;
}
If.prototype.then = function(a, b) {
    if (this.i) throw Error('Then functions already set.');
    this.i = a;
    this.j = b;
    Kf(this);
};
function Kf(a) {
    switch (a.h.h) {
        case 0:
            break;
        case 1:
            a.i && a.i(a.h.l);
            break;
        case 2:
            a.j && a.j(a.h.j);
            break;
        default:
            throw Error('Unhandled deferred state.');
    }
}
function Lf(a) {
    this.h = a.slice(0);
}
Lf.prototype.apply = function(a) {
    return new Lf(a(this.h.slice(0)));
};
Lf.prototype.get = function(a) {
    return this.h[a];
};
Lf.prototype.add = function(a) {
    var b = this.h.slice(0);
    b.push(a);
    return new Lf(b);
};
function Mf(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
}
function Nf() {
    this.h = {};
    this.i = {};
}
Nf.prototype.set = function(a, b) {
    var c = Of(a);
    this.h[c] = b;
    this.i[c] = a;
};
Nf.prototype.get = function(a, b) {
    a = Of(a);
    return void 0 !== this.h[a] ? this.h[a] : b;
};
Nf.prototype.clear = function() {
    this.h = {};
    this.i = {};
};
function Of(a) {
    return a instanceof Object ? String(Aa(a)) : a + '';
}
function Pf(a, b) {
    this.h = a;
    this.i = b;
}
function Qf(a) {
    return null != a.h ? a.h.value : null;
}
function Rf(a, b) {
    null != a.h && b(a.h.value);
    return a;
}
Pf.prototype.map = function(a) {
    return null != this.h ? ((a = a(this.h.value)), a instanceof Pf ? a : Sf(a)) : this;
};
function Tf(a, b) {
    null != a.h || b(a.i);
    return a;
}
function Sf(a) {
    return new Pf({
            value: a
        },
        null
    );
}
function Uf(a) {
    return new Pf(null, a);
}
function Vf(a) {
    try {
        return Sf(a());
    } catch (b) {}
    return Uf(b);
}
}
function Wf(a) {
    this.h = new Nf();
    if (a)
        for (var b = 0; b < a.length; ++b) this.add(a[b]);
}
Wf.prototype.add = function(a) {
    this.h.set(a, !0);
};
Wf.prototype.contains = function(a) {
    return void 0 !== this.h.h[Of(a)];
};
function Xf() {
    this.h = new Nf();
}
Xf.prototype.set = function(a, b) {
    var c = this.h.get(a);
    c || ((c = new Wf()), this.h.set(a, c));
    c.add(b);
};
function Yf(a) {
    y.call(this, a, -1, Zf);
}
u(Yf, y);
Yf.prototype.getId = function() {
    return z(this, 3);
};
var Zf = [4];
function $f(a) {
    var b = void 0 === a.Ea ? void 0 : a.Ea;
    var c = void 0 === a.ab ? void 0 : a.ab;
    var d = void 0 === a.Na ? void 0 : a.Na;
    this.h = void 0 === a.Xa ? void 0 : a.Xa;
    this.l = new Lf(b || []);
    this.j = d;
    this.i = c;
}
function ag(a) {
    var b = [];
    var c = a.l;
    c &&
        c.h.length &&
        b.push({
            U: 'a',
            Z: bg(c)
        });
    null != a.h &&
        b.push({
            U: 'as',
            Z: a.h
        });
    null != a.i &&
        b.push({
            U: 'i',
            Z: String(a.i)
        });
    null != a.j &&
        b.push({
            U: 'rp',
            Z: String(a.j)
        });
    b.sort((d, e) => d.U.localeCompare(e.U));
    b.unshift({
        U: 't',
        Z: 'aa'
    });
    return b;
}
function bg(a) {
    a = a.h.slice(0).map(cg);
    a = JSON.stringify(a);
    return Fc(a);
}
function cg(a) {
    var b = {};
    null != z(a, 7) && (b.q = z(a, 7));
    null != z(a, 2) && (b.o = z(a, 2));
    null != z(a, 5) && (b.p = z(a, 5));
    return b;
}
function dg(a) {
    y.call(this, a);
}
u(dg, y);
dg.prototype.setLocation = function(a) {
    return A(this, 1, a);
};
function eg(a, b) {
    this.Ga = a;
    this.Ma = b;
}
function fg(a) {
    var b = [].slice.call(arguments).filter(hc((e) => null === e));
    if (!b.length) return null;
    var c = [];
    var d = {};
    b.forEach((e) => {
        c = c.concat(e.Ga || []);
        d = p(Object, 'assign').call(Object, d, e.Ma);
    });
    return new eg(c, d);
}
function gg(a) {
    switch (a) {
        case 1:
            return new eg(null, {
                google_ad_semantic_area: 'mc'
            });
        case 2:
            return new eg(null, {
                google_ad_semantic_area: 'h'
            });
        case 3:
            return new eg(null, {
                google_ad_semantic_area: 'f'
            });
        case 4:
            return new eg(null, {
                google_ad_semantic_area: 's'
            });
        default:
            return null;
    }
}
function hg(a) {
    if (null == a) a = null;
    else {
        var b = ag(a);
        a = [];
        b = q(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = String(c.Z);
            a.push(c.U + '.' + (20 >= d.length ? d : d.slice(0, 19) + '_'));
        }
        a = new eg(null, {
            google_placement_id: a.join('~')
        });
    }
    return a;
}
var ig = {};
var jg = new eg(['google-auto-placed'], ((ig.google_reactive_ad_format = 40), (ig.google_tag_origin = 'qs'), ig));
function kg(a) {
    y.call(this, a);
}
u(kg, y);
function lg(a) {
    y.call(this, a);
}
u(lg, y);
lg.prototype.getName = function() {
    return z(this, 4);
};
function mg(a) {
    y.call(this, a);
}
u(mg, y);
function ng(a) {
    y.call(this, a);
}
u(ng, y);
function og(a) {
    y.call(this, a);
}
u(og, y);
var pg = [1, 2, 3];
function qg(a) {
    y.call(this, a);
}
u(qg, y);
function rg(a) {
    y.call(this, a, -1, sg);
}
u(rg, y);
var sg = [6, 7, 9, 10, 11];
function tg(a) {
    y.call(this, a, -1, ug);
}
u(tg, y);
function vg(a) {
    y.call(this, a);
}
u(vg, y);
function wg(a) {
    y.call(this, a);
}
u(wg, y);
var ug = [1];
var xg = [1, 2];
function yg(a) {
    y.call(this, a, -1, zg);
}
u(yg, y);
function Ag(a) {
    y.call(this, a);
}
u(Ag, y);
function Bg(a) {
    y.call(this, a, -1, Cg);
}
u(Bg, y);
function Dg(a) {
    y.call(this, a);
}
u(Dg, y);
function Eg(a) {
    y.call(this, a);
}
u(Eg, y);
function Fg(a) {
    y.call(this, a);
}
u(Fg, y);
function Gg(a) {
    y.call(this, a);
}
u(Gg, y);
var zg = [1, 2, 5, 7];
var Cg = [2, 5, 6, 11];
function Hg(a) {
    y.call(this, a);
}
u(Hg, y);
function Ig(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = 'INS' == a.tagName))
        a: {
            b = ['adsbygoogle-placeholder'];
            a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a;
                }
            b = !0;
        }
    return b;
}
function Jg(a, b, c) {
    switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if ((c = b.parentNode)) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType;) d = d.nextSibling;
                c.insertBefore(a, d);
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a);
    }
    Ig(b) && (b.setAttribute('data-init-display', b.style.display), (b.style.display = 'block'));
}
function O(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
}
function P(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? 0 : b;
}
function Kg(a, b) {
    b = void 0 === b ? [] : b;
    this.h = a;
    this.defaultValue = b;
}
var Lg = new O(1084);
var Mg = new O(1082);
var Ng = new P(62, 0.001);
var Og = new(function(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? '' : b;
})(14);
var Pg = new P(1114, 1);
var Qg = new P(1110);
var Rg = new P(1111);
var Sg = new P(1112);
var Tg = new P(1113);
var Ug = new P(1104);
var Vg = new P(1108);
var Wg = new P(1106);
var Xg = new P(1107);
var Yg = new P(1105);
var Zg = new P(1115, 1);
var $g = new O(1121);
var ah = new O(316);
var bh = new O(313);
var ch = new O(369);
var dh = new O(1093);
var eh = new P(1098);
var fh = new O(1026);
var gh = new O(1090);
var hh = new O(1053);
var ih = new O(1120);
var jh = new O(1100, !0);
var kh = new O(1109);
var lh = new P(1046);
var mh = new O(1102, !0);
var nh = new O(218);
var oh = new O(216);
var ph = new O(217);
var qh = new O(1125);
var rh = new O(227);
var sh = new O(208);
var th = new O(282);
var uh = new O(1086);
var vh = new P(1079, 5);
var wh = new O(251);
var xh = new O(1124);
var yh = new Kg(1939);
var zh = new Kg(1934, [
    'A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9',
    'A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9',
    'A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9'
]);
var Ah = new O(203);
var Bh = new O(241);
var Ch = new O(84);
var Dh = new P(1929, 50);
var Eh = new P(1905);
var Fh = new O(1956);
var Gh = new O(240);
var Hh = new O(1928);
var Ih = new O(1941);
var Jh = new O(370946349);
var Kh = new O(392736476);
var Lh = new O(397079674);
var Mh = new P(406149835);
var Nh = new Kg(1932, [
    'AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
    'Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    'A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    'AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
    'A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='
]);
var Oh = new O(401243724);
var Ph = new P(1935);
function Qh() {
    var a = {};
    this.i = (b, c) => (null != a[b] ? a[b] : c);
    this.j = (b, c) => (null != a[b] ? a[b] : c);
    this.l = (b, c) => (null != a[b] ? a[b] : c);
    this.h = (b, c) => (null != a[b] ? a[b] : c);
    this.m = () => {};
}
function Q(a) {
    return L(Qh).i(a.h, a.defaultValue);
}
function R(a) {
    return L(Qh).j(a.h, a.defaultValue);
}
function Rh() {
    return L(Qh).l(Og.h, Og.defaultValue);
}
function Sh(a, b, c) {
    function d(f) {
        f = Th(f);
        return null == f ? !1 : c > f;
    }
    function e(f) {
        f = Th(f);
        return null == f ? !1 : c < f;
    }
    switch (b) {
        case 0:
            return {
                init: Uh(a.previousSibling, e),
                    ha(f) {
                        return Uh(f.previousSibling, e);
                    },
                    la: 0
            };
        case 2:
            return {
                init: Uh(a.lastChild, e),
                    ha(f) {
                        return Uh(f.previousSibling, e);
                    },
                    la: 0
            };
        case 3:
            return {
                init: Uh(a.nextSibling, d),
                    ha(f) {
                        return Uh(f.nextSibling, d);
                    },
                    la: 3
            };
        case 1:
            return {
                init: Uh(a.firstChild, d),
                    ha(f) {
                        return Uh(f.nextSibling, d);
                    },
                    la: 3
            };
    }
    throw Error('Un-handled RelativePosition: ' + b);
}
function Th(a) {
    return a.hasOwnProperty('google-ama-order-assurance') ? a['google-ama-order-assurance'] : null;
}
function Uh(a, b) {
    return a && b(a) ? a : null;
}
var Vh = {
    rectangle: 1,
    horizontal: 2,
    vertical: 4
};
function Wh(a, b) {
    do {
        var c = zc(a, b);
        if (c && 'fixed' == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
}
function Xh(a, b) {
    for (var c = ['width', 'height'], d = 0; d < c.length; d++) {
        var e = 'google_ad_' + c[d];
        if (!b.hasOwnProperty(e)) {
            var f = I(a[c[d]]);
            f = null === f ? null : Math.round(f);
            null != f && (b[e] = f);
        }
    }
}
function Yh(a, b) {
    return !((Kc.test(b.google_ad_width) || Jc.test(a.style.width)) && (Kc.test(b.google_ad_height) || Jc.test(a.style.height)));
}
function Zh(a, b) {
    return (a = $h(a, b)) ? a.y : 0;
}
function $h(a, b) {
    try {
        var c = b.document.documentElement.getBoundingClientRect();
        var d = a.getBoundingClientRect();
        return {
            x: d.left - c.left,
            y: d.top - c.top
        };
    } catch (e) {}
    return null;
}
}
function ai(a) {
    var b = 0;
    var c;
    for (c in Vh) - 1 != a.indexOf(c) && (b |= Vh[c]);
    return b;
}
function bi(a, b, c, d, e) {
    if (a.top != a) return hd(a) ? 3 : 16;
    if (!(488 > Cf(a))) return 4;
    if (!(a.innerHeight >= a.innerWidth)) return 5;
    var f = Cf(a);
    if (!f || (f - c) / f > d) a = 6;
    else {
        if ((c = 'true' != e.google_full_width_responsive))
            a: {
                c = Cf(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = zc(b, a)) && (e = I(d.width)) && !(e >= c) && 'visible' != d.overflow) {
                        c = !0;
                        break a;
                    }
                c = !1;
            }
        a = c ? 7 : !0;
    }
    return a;
}
function ci(a, b, c, d) {
    var e = bi(b, c, a, 0.3, d);
    !0 !== e ?
        (a = e) :
        'true' == d.google_full_width_responsive || Wh(c, b) ?
        ((b = Cf(b)), (a = b - a), (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10)) :
        (a = 9);
    return a;
}
function di(a, b, c) {
    a = a.style;
    'rtl' == b
        ?
        Q(wh) ?
        a.setProperty('margin-right', c, 'important') :
        (a.marginRight = c) :
        Q(wh) ?
        a.setProperty('margin-left', c, 'important') :
        (a.marginLeft = c);
}
function ei(a, b) {
    if (3 == b.nodeType) return /\S/.test(b.data);
    if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        try {
            var c = zc(b, a);
        } catch (d) {}
        return !c || ('none' != c.display && !('absolute' == c.position && ('hidden' == c.visibility || 'collapse' == c.visibility)));
    }
    return !1;
}
function fi(a, b, c) {
    a = $h(b, a);
    return 'rtl' == c ? -a.x : a.x;
}
function gi(a, b) {
    var c;
    c = (c = b.parentElement) ? ((c = zc(c, a)) ? c.direction : '') : '';
    if (c) {
        b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = 'none';
        b.style.borderSpacing = b.style.padding = '0';
        di(b, c, '0px');
        b.style.width = Cf(a) + 'px';
        if (0 !== fi(a, b, c)) {
            di(b, c, '0px');
            var d = fi(a, b, c);
            di(b, c, -1 * d + 'px');
            a = fi(a, b, c);
            0 !== a && a !== d && di(b, c, (d / (a - d)) * d + 'px');
        }
        b.style.zIndex = 30;
    }
}
function S(a, b) {
    this.l = a;
    this.j = b;
}
S.prototype.minWidth = function() {
    return this.l;
};
S.prototype.height = function() {
    return this.j;
};
S.prototype.h = function(a) {
    return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a));
};
S.prototype.i = () => {};
function hi(a, b, c, d) {
    d = void 0 === d ? (f) => f : d;
    var e;
    return (a.style && a.style[c] && d(a.style[c])) || ((e = zc(a, b)) && e[c] && d(e[c])) || null;
}
function ii(a) {
    return (b) => b.minWidth() <= a;
}
function ji(a, b, c, d) {
    var e = a && ki(c, b);
    var f = li(b, d);
    return (g) => !(e && g.height() >= f);
}
function mi(a) {
    return (b) => b.height() <= a;
}
function ki(a, b) {
    return Zh(a, b) < Bf(b).clientHeight - 100;
}
function ni(a, b) {
    var c = hi(b, a, 'height', I);
    if (c) return c;
    var d = b.style.height;
    b.style.height = 'inherit';
    c = hi(b, a, 'height', I);
    b.style.height = d;
    if (c) return c;
    c = Infinity;
    do(d = b.style && I(b.style.height)) && (c = Math.min(c, d)), (d = hi(b, a, 'maxHeight', I)) && (c = Math.min(c, d));
    while ((b = b.parentElement) && 'HTML' != b.tagName);
    return c;
}
function li(a, b) {
    var c = 0 == cd(a);
    return b && c ? Math.max(250, (2 * Bf(a).clientHeight) / 3) : 250;
}
var T = {};
var oi =
    ((T.google_ad_channel = !0),
        (T.google_ad_client = !0),
        (T.google_ad_host = !0),
        (T.google_ad_host_channel = !0),
        (T.google_adtest = !0),
        (T.google_tag_for_child_directed_treatment = !0),
        (T.google_tag_for_under_age_of_consent = !0),
        (T.google_tag_partner = !0),
        (T.google_restrict_data_processing = !0),
        (T.google_page_url = !0),
        (T.google_debug_params = !0),
        (T.google_adbreak_test = !0),
        (T.google_ad_frequency_hint = !0),
        (T.google_admob_interstitial_slot = !0),
        (T.google_admob_rewarded_slot = !0),
        (T.google_max_ad_content_rating = !0),
        T);
var pi = RegExp('(^| )adsbygoogle($| )');
function qi(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        var e = mc(d.ub);
        a[e] = d.value;
    }
}
function ri(a, b, c, d) {
    this.l = a;
    this.i = b;
    this.j = c;
    this.h = d;
}
function si(a, b) {
    var c = [];
    try {
        c = b.querySelectorAll(a.l);
    } catch (g) {}
    if (!c.length) return [];
    b = c;
    c = b.length;
    if (0 < c) {
        for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
        b = d;
    } else b = [];
    b = ti(a, b);
    'number' === typeof a.i && ((c = a.i), 0 > c && (c += b.length), (b = 0 <= c && c < b.length ? [b[c]] : []));
    if ('number' === typeof a.j) {
        c = [];
        for (d = 0; d < b.length; d++) {
            e = ui(b[d]);
            var f = a.j;
            0 > f && (f += e.length);
            0 <= f && f < e.length && c.push(e[f]);
        }
        b = c;
    }
    return b;
}
ri.prototype.toString = function() {
    return JSON.stringify({
        nativeQuery: this.l,
        occurrenceIndex: this.i,
        paragraphIndex: this.j,
        ignoreMode: this.h
    });
};
function ti(a, b) {
    if (null == a.h) return b;
    switch (a.h) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error('Unknown ignore mode: ' + a.h);
    }
}
function ui(a) {
    var b = [];
    Mf(a.getElementsByTagName('p'), (c) => {
        100 <= vi(c) && b.push(c);
    });
    return b;
}
function vi(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || 'SCRIPT' == a.tagName) return 0;
    var b = 0;
    Mf(a.childNodes, (c) => {
        b += vi(c);
    });
    return b;
}
function wi(a) {
    return 0 == a.length || isNaN(a[0]) ? a : '\\' + (30 + parseInt(a[0], 10)) + ' ' + a.substring(1);
}
function xi(a) {
    if (!a) return null;
    var b = z(a, 7);
    if (z(a, 1) || a.getId() || 0 < sb(a, 4).length) {
        var c = a.getId();
        b = sb(a, 4);
        var d = z(a, 1);
        var e = '';
        d && (e += d);
        c && (e += '#' + wi(c));
        if (b)
            for (c = 0; c < b.length; c++) e += '.' + wi(b[c]);
        a = (b = e) ? new ri(b, z(a, 2), z(a, 5), yi(z(a, 6))) : null;
    } else a = b ? new ri(b, z(a, 2), z(a, 5), yi(z(a, 6))) : null;
    return a;
}
var zi = {
    1: 1,
    2: 2,
    3: 3,
    0: 0
};
function yi(a) {
    return null == a ? a : zi[a];
}
var Ai = {
    1: 0,
    2: 1,
    3: 2,
    4: 3
};
function Bi(a) {
    return (a.google_ama_state = a.google_ama_state || {});
}
function Ci(a) {
    a = Bi(a);
    return (a.optimization = a.optimization || {});
}
function Di(a) {
    switch (z(a, 8)) {
        case 1:
        case 2:
            if (null == a) var b = null;
            else
                (b = G(a, Yf, 1)),
                null == b ?
                (b = null) :
                ((a = z(a, 2)),
                    (b =
                        null == a ?
                        null :
                        new $f({
                            Ea: [b],
                            Na: a
                        })));
            return null != b ? Sf(b) : Uf(Error('Missing dimension when creating placement id'));
        case 3:
            return Uf(Error('Missing dimension when creating placement id'));
        default:
            return Uf(Error('Invalid type: ' + z(a, 8)));
    }
}
function Ei(a, b) {
    function c() {
        d.push({
            anchor: e.anchor,
            position: e.position
        });
        return e.anchor == b.anchor && e.position == b.position;
    }
    for (var d = [], e = a; e;) {
        switch (e.position) {
            case 1:
                if (c()) return d;
                e.position = 2;
            case 2:
                if (c()) return d;
                if (e.anchor.firstChild) {
                    e = {
                        anchor: e.anchor.firstChild,
                        position: 1
                    };
                    continue;
                } else e.position = 3;
            case 3:
                if (c()) return d;
                e.position = 4;
            case 4:
                if (c()) return d;
        }
        for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
            e = {
                anchor: e.anchor.parentNode,
                position: 3
            };
            if (c()) return d;
            e.position = 4;
            if (c()) return d;
        }
        e && e.anchor.nextSibling ?
            (e = {
                anchor: e.anchor.nextSibling,
                position: 1
            }) :
            (e = null);
    }
    return d;
}
function Fi(a, b) {
    this.i = a;
    this.h = b;
}
function Gi(a, b) {
    var c = new Xf();
    var d = new Wf();
    b.forEach((e) => {
        if (Gb(e, mg, 1, pg)) {
            e = Gb(e, mg, 1, pg);
            if (G(e, kg, 1) && G(G(e, kg, 1), Yf, 1) && G(e, kg, 2) && G(G(e, kg, 2), Yf, 1)) {
                var f = Hi(a, G(G(e, kg, 1), Yf, 1));
                var g = Hi(a, G(G(e, kg, 2), Yf, 1));
                if (f && g)
                    for (
                        f = q(
                            Ei({
                                anchor: f,
                                position: z(G(e, kg, 1), 2)
                            }, {
                                anchor: g,
                                position: z(G(e, kg, 2), 2)
                            })
                        ),
                        g = f.next(); !g.done; g = f.next()
                    )
                        (g = g.value), c.set(Aa(g.anchor), g.position);
            }
            G(e, kg, 3) && G(G(e, kg, 3), Yf, 1) && (f = Hi(a, G(G(e, kg, 3), Yf, 1))) && c.set(Aa(f), z(G(e, kg, 3), 2));
        } else Gb(e, ng, 2, pg) ? Ii(a, Gb(e, ng, 2, pg), c) : Gb(e, og, 3, pg) && Ji(a, Gb(e, og, 3, pg), d);
    });
    return new Fi(c, d);
}
function Ii(a, b, c) {
    G(b, Yf, 1) &&
        (a = Ki(a, G(b, Yf, 1))) &&
        a.forEach((d) => {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
        });
}
function Ji(a, b, c) {
    G(b, Yf, 1) &&
        (a = Ki(a, G(b, Yf, 1))) &&
        a.forEach((d) => {
            c.add(Aa(d));
        });
}
function Hi(a, b) {
    return (a = Ki(a, b)) && 0 < a.length ? a[0] : null;
}
function Ki(a, b) {
    return (b = xi(b)) ? si(b, a) : null;
}
function Li(a, b) {
    if (!a) return !1;
    a = zc(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return 'left' == a || 'right' == a;
}
function Mi(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
    return a ? a : null;
}
function Ni(a) {
    return !!a.nextSibling || (!!a.parentNode && Ni(a.parentNode));
}
function Oi(a) {
    var b = {};
    a &&
        sb(a, 6).forEach((c) => {
            b[c] = !0;
        });
    return b;
}
function Pi(a, b, c, d, e) {
    this.h = a;
    this.A = b;
    this.j = c;
    this.m = e || null;
    this.v = (this.D = d) ? Gi(a.document, H(d, lg, 5)) : Gi(a.document, []);
    this.i = 0;
    this.l = !1;
}
function Qi(a, b) {
    if (a.l) return !0;
    a.l = !0;
    var c = H(a.j, rg, 1);
    a.i = 0;
    var d = Oi(a.D);
    try {
        var e = a.h.localStorage.getItem('google_ama_settings');
        var f = e ? pb(Hg, e ? JSON.parse(e) : null) : null;
    } catch (m) {}
    f = null;
}
if (null !== f && D(f, 2, !1)) return (Bi(a.h).eatf = !0), kd(7, [!0, 0, !1]), !0;
f = new Wf([2]);
for (e = 0; e < c.length; e++) {
    var g = a;
    var h = c[e];
    var k = e;
    var l = b;
    if (!G(h, dg, 4) || !f.contains(z(G(h, dg, 4), 1)) || 1 !== z(h, 8) || (h && null != z(h, 4) && d[z(G(h, dg, 4), 2)])) g = null;
    else {
        g.i++;
        if ((h = Ri(g, h, l, d)))
            (l = Bi(g.h)),
            l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0),
            null == l.placed && (l.placed = []),
            l.numAutoAdsPlaced++,
            l.placed.push({
                index: k,
                element: h.fa
            }),
            kd(7, [!1, g.i, !0]);
        g = h;
    }
    if (g) return !0;
}
kd(7, [!1, a.i, !1]);
return !1;
}
function Ri(a, b, c, d) {
    if ((b && null != z(b, 4) && d[z(G(b, dg, 4), 2)]) || 1 != z(b, 8)) return null;
    d = G(b, Yf, 1);
    if (!d) return null;
    d = xi(d);
    if (!d) return null;
    d = si(d, a.h.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = Ai[z(b, 2)];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
        a: {
            f = a.h;
            switch (e) {
                case 0:
                    f = Li(Mi(d), f);
                    break a;
                case 3:
                    f = Li(d, f);
                    break a;
                case 2:
                    var g = d.lastChild;
                    f = Li(g ? (1 == g.nodeType ? g : Mi(g)) : null, f);
                    break a;
            }
            f = !1;
        }
        if ((c = !f && !(!c && 2 == e && !Ni(d))))(c = 1 == e || 2 == e ? d : d.parentNode),
        (c = !(c && !Ig(c) && 0 >= c.offsetWidth));
        f = !c;
    }
    if (!(c = f)) {
        c = a.v;
        f = z(b, 2);
        g = Aa(d);
        g = c.i.h.get(g);
        if (!(g = g ? g.contains(f) : !1))
            a: {
                if (c.h.contains(Aa(d)))
                    switch (f) {
                        case 2:
                        case 3:
                            g = !0;
                            break a;
                        default:
                            g = !1;
                            break a;
                    }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(Aa(f))) {
                        g = !0;
                        break a;
                    }
                    f = f.parentElement;
                }
                g = !1;
            }
        c = g;
    }
    if (c) return null;
    c = G(b, qg, 3);
    f = {};
    c && ((f.Sa = z(c, 1)), (f.Fa = z(c, 2)), (f.Za = !!tb(c, 3)));
    c = G(b, dg, 4) && z(G(b, dg, 4), 2) ? z(G(b, dg, 4), 2) : null;
    c = gg(c);
    g = null == z(b, 12) ? null : z(b, 12);
    g =
        null == g ?
        null :
        new eg(null, {
            google_ml_rank: g
        });
    b = Si(a, b);
    b = fg(a.m, c, g, b);
    c = a.h;
    a = a.A;
    var h = c.document;
    var k = f.Za || !1;
    g = nc(new oc(h).h, 'DIV');
    var l = g.style;
    l.width = '100%';
    l.height = 'auto';
    l.clear = k ? 'both' : 'none';
    k = g.style;
    k.textAlign = 'center';
    f.gb && qi(k, f.gb);
    h = nc(new oc(h).h, 'INS');
    k = h.style;
    k.display = 'block';
    k.margin = 'auto';
    k.backgroundColor = 'transparent';
    f.Sa && (k.marginTop = f.Sa);
    f.Fa && (k.marginBottom = f.Fa);
    f.Wa && qi(k, f.Wa);
    g.appendChild(h);
    f = {
        pa: g,
        fa: h
    };
    f.fa.setAttribute('data-ad-format', 'auto');
    g = [];
    if ((h = b && b.Ga)) f.pa.className = h.join(' ');
    h = f.fa;
    h.className = 'adsbygoogle';
    h.setAttribute('data-ad-client', a);
    g.length && h.setAttribute('data-ad-channel', g.join('+'));
    a: {
        try {
            var m = f.pa;
            var r = void 0 === r ? 0 : r;
            if (Q(bh)) {
                r = void 0 === r ? 0 : r;
                var t = Sh(d, e, r);
                if (t.init) {
                    var x = t.init;
                    for (d = x;
                        (d = t.ha(d));) x = d;
                    var E = {
                        anchor: x,
                        position: t.la
                    };
                } else
                    E = {
                        anchor: d,
                        position: e
                    };
                m['google-ama-order-assurance'] = r;
                Jg(m, E.anchor, E.position);
            } else Jg(m, d, e);
            b: {
                var B = f.fa;
                B.dataset.adsbygoogleStatus = 'reserved';
                B.className += ' adsbygoogle-noablate';
                m = {
                    element: B
                };
                var F = b && b.Ma;
                if (B.hasAttribute('data-pub-vars')) {
                    try {
                        F = JSON.parse(B.getAttribute('data-pub-vars'));
                    } catch (va) {
                        break b;
                    }
                    B.removeAttribute('data-pub-vars');
                }
                F && (m.params = F);
                (c.adsbygoogle = c.adsbygoogle || []).push(m);
            }
        } catch (va) {
            (B = f.pa) &&
            B.parentNode &&
                ((F = B.parentNode), F.removeChild(B), Ig(F) && (F.style.display = F.getAttribute('data-init-display') || 'none'));
            B = !1;
            break a;
        }
        B = !0;
    }
    return B ? f : null;
}
function Si(a, b) {
    return Qf(
        Tf(Di(b).map(hg), (c) => {
            Bi(a.h).exception = c;
        })
    );
}
function Ti(a) {
    if (Q(ah)) var b = null;
    else
        try {
            b = a.getItem('google_ama_config');
        } catch (d) {
            b = null;
        }
    try {
        var c = b ? pb(yg, b ? JSON.parse(b) : null) : null;
    } catch (d) {}
    c = null;
}
return c;
}
function Ui(a) {
    y.call(this, a);
}
u(Ui, y);
function Vi(a) {
    try {
        var b = a.localStorage.getItem('google_auto_fc_cmp_setting') || null;
    } catch (d) {}
    b = null;
}
var c = b;
return c ? Vf(() => pb(Ui, c ? JSON.parse(c) : null)) : Sf(null);
}
function Wi() {
    this.S = {};
}
function Xi() {
    if (Yi) return Yi;
    var a = Xc() || fd();
    var b = a.google_persistent_state_async;
    return null != b && 'object' == typeof b && null != b.S && 'object' == typeof b.S ? (Yi = b) : (a.google_persistent_state_async = Yi = new Wi());
}
function Zi(a) {
    return $i[a] || 'google_ps_' + a;
}
function aj(a, b, c) {
    b = Zi(b);
    a = a.S;
    var d = a[b];
    return void 0 === d ? (a[b] = c) : d;
}
var Yi = null;
var bj = {};
var $i = ((bj[8] = 'google_prev_ad_formats_by_region'), (bj[9] = 'google_prev_ad_slotnames_by_region'), bj);
function cj(a) {
    this.h = a || {
        cookie: ''
    };
}
cj.prototype.set = function(a, b, c) {
    var d = !1;
    if ('object' === typeof c) {
        var e = c.vb;
        d = c.wb || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.eb;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.h.cookie =
        a +
        '=' +
        b +
        (f ? ';domain=' + f : '') +
        (g ? ';path=' + g : '') +
        (0 > h ? '' : 0 == h ? ';expires=' + new Date(1970, 1, 1).toUTCString() : ';expires=' + new Date(Date.now() + 1e3 * h).toUTCString()) +
        (d ? ';secure' : '') +
        (null != e ? ';samesite=' + e : '');
};
cj.prototype.get = function(a, b) {
    for (var c = a + '=', d = (this.h.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
        f = Ka(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return '';
    }
    return b;
};
cj.prototype.isEmpty = function() {
    return !this.h.cookie;
};
cj.prototype.clear = function() {
    for (var a = (this.h.cookie || '').split(';'), b = [], c = [], d, e, f = 0; f < a.length; f++)
        (e = Ka(a[f])), (d = e.indexOf('=')), -1 == d ? (b.push(''), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
        (c = b[a]),
        this.get(c),
        this.set(c, '', {
            eb: 0,
            path: void 0,
            domain: void 0
        });
};
function dj(a) {
    y.call(this, a);
}
u(dj, y);
function ej(a) {
    var b = new dj();
    return A(b, 5, a);
}
function fj() {
    this.v = this.v;
    this.D = this.D;
}
fj.prototype.v = !1;
fj.prototype.j = function() {
    if (this.D)
        for (; this.D.length;) this.D.shift()();
};
function gj(a) {
    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && 'string' !== typeof a.tcString) || (void 0 !== a.listenerId && 'number' !== typeof a.listenerId) ?
        2 :
        a.cmpStatus && 'error' !== a.cmpStatus ?
        0 :
        3;
}
function hj(a, b) {
    b = void 0 === b ? 500 : b;
    fj.call(this);
    this.h = a;
    this.i = null;
    this.m = {};
    this.H = 0;
    this.A = b;
    this.l = null;
}
u(hj, fj);
hj.prototype.j = function() {
    this.m = {};
    this.l && (lc(this.h, this.l), delete this.l);
    delete this.m;
    delete this.h;
    delete this.i;
    fj.prototype.j.call(this);
};
function ij(a) {
    return 'function' === typeof a.h.__tcfapi || null != jj(a);
}
hj.prototype.addEventListener = function(a) {
    function b(f, g) {
        clearTimeout(e);
        f
            ?
            ((c = f),
                (c.internalErrorState = gj(c)),
                (g && 0 === c.internalErrorState) || ((c.tcString = 'tcunavailable'), g || (c.internalErrorState = 3))) :
            ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
        a(c);
    }
    var c = {};
    var d = jc(() => a(c));
    var e = 0; -
    1 !== this.A &&
        (e = setTimeout(() => {
            c.tcString = 'tcunavailable';
            c.internalErrorState = 1;
            d();
        }, this.A));
    try {
        kj(this, 'addEventListener', b);
    } catch (f) {}(c.tcString = 'tcunavailable'), (c.internalErrorState = 3), e && (clearTimeout(e), (e = 0)), d();
}
};
hj.prototype.removeEventListener = function(a) {
    a && a.listenerId && kj(this, 'removeEventListener', null, a.listenerId);
};
function kj(a, b, c, d) {
    c || (c = () => {});
    if ('function' === typeof a.h.__tcfapi)(a = a.h.__tcfapi), a(b, 2, c, d);
    else if (jj(a)) {
        lj(a);
        var e = ++a.H;
        a.m[e] = c;
        a.i &&
            ((c = {}),
                a.i.postMessage(
                    ((c.__tcfapiCall = {
                            command: b,
                            version: 2,
                            callId: e,
                            parameter: d
                        }),
                        c),
                    '*'
                ));
    } else c({}, !1);
}
function jj(a) {
    if (a.i) return a.i;
    a.i = Mc(a.h, '__tcfapiLocator');
    return a.i;
}
function lj(a) {
    a.l ||
        ((a.l = (b) => {
                try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                } catch (d) {}
            }),
            kc(a.h, 'message', a.l));
}
function mj(a) {
    var b = a.ba;
    var c = a.Ra;
    var d = a.Ya;
    a = nj({
        ba: b,
        ka: a.ka,
        ia: void 0 === a.ia ? !1 : a.ia,
        ja: void 0 === a.ja ? !1 : a.ja
    });
    null != a.h || 'tcunav' != a.i.message ?
        d(a) :
        oj(b, c)
        .then((e) => e.map(pj))
        .then((e) => e.map((f) => qj(b, f)))
        .then(d);
}
function nj(a) {
    var b = a.ba;
    var c = a.ka;
    var d = void 0 === a.ia ? !1 : a.ia;
    if (!(a = !(void 0 === a.ja ? 0 : a.ja) && ij(new hj(b)))) {
        if ((d = !d)) {
            if (c) {
                c = Vi(b);
                if (null == c.h) qf.I(806, c.i, void 0, void 0), (c = !1);
                else if ((c = c.h.value) && null != z(c, 1))
                    b: switch (((c = z(c, 1)), c)) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error('Unhandled AutoGdprFeatureStatus: ' + c);
                    }
                else c = !1;
                c = !c;
            }
            d = c;
        }
        a = d;
    }
    if (!a) return qj(b, ej(!0));
    c = Xi();
    return (c = aj(c, 24, void 0)) ? qj(b, pj(c)) : Uf(Error('tcunav'));
}
function oj(a, b) {
    return n.Promise.race([rj(), sj(a, b)]);
}
function rj() {
    return new n.Promise((a) => {
        var b = Xi();
        a = {
            resolve: a
        };
        var c = aj(b, 25, []);
        c.push(a);
        b.S[Zi(25)] = c;
    }).then(tj);
}
function sj(a, b) {
    return new n.Promise((c) => {
        a.setTimeout(c, b, Uf(Error('tcto')));
    });
}
function tj(a) {
    return a ? Sf(a) : Uf(Error('tcnull'));
}
function pj(a) {
    var b = void 0 === b ? !1 : b;
    if (!1 === a.gdprApplies) var c = !0;
    else
        void 0 === a.internalErrorState && (a.internalErrorState = gj(a)),
        (c =
            'error' === a.cmpStatus ||
            0 !== a.internalErrorState ||
            ('loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus)) ?
            !0 :
            !1);
    if (c)
        if (
            !1 === a.gdprApplies ||
            'tcunavailable' === a.tcString ||
            (void 0 === a.gdprApplies && !b) ||
            'string' !== typeof a.tcString ||
            !a.tcString.length
        )
            a = !0;
        else {
            var d = void 0 === d ? '755' : d;
            b: {
                if (a.publisher && a.publisher.restrictions && ((b = a.publisher.restrictions['1']), void 0 !== b)) {
                    b = b[void 0 === d ? '755' : d];
                    break b;
                }
                b = void 0;
            }
            0 === b ?
                (a = !1) :
                a.purpose && a.vendor ?
                ((b = a.vendor.consents),
                    (d = !(!b || !b[void 0 === d ? '755' : d])) && a.purposeOneTreatment && ((Q(Fh) ? 0 : 'DE' === a.publisherCC) || 'CH' === a.publisherCC) ?
                    (a = !0) :
                    (d && ((a = a.purpose.consents), (d = !(!a || !a['1']))), (a = d))) :
                (a = !0);
        }
    else a = !1;
    return ej(a);
}
function qj(a, b) {
    a: {
        a = void 0 === a ? window : a;
        if (tb(b, 5))
            try {
                var c = a.localStorage;
                break a;
            } catch (d) {}
        c = null;
    }
    return (b = c) ? Sf(b) : Uf(Error('unav'));
}
function uj(a) {
    this.exception = a;
}
function vj(a, b, c) {
    this.j = a;
    this.h = b;
    this.i = c;
}
vj.prototype.start = function() {
    this.l();
};
vj.prototype.l = function() {
    try {
        switch (this.j.document.readyState) {
            case 'complete':
            case 'interactive':
                Qi(this.h, !0);
                wj(this);
                break;
            default:
                Qi(this.h, !1) ? wj(this) : this.j.setTimeout(Fa(this.l, this), 100);
        }
    } catch (a) {}
    wj(this, a);
}
};
function wj(a, b) {
    try {
        var c = a.i;
        var d = c.resolve;
        var e = a.h;
        Bi(e.h);
        H(e.j, rg, 1);
        d.call(c, new uj(b));
    } catch (f) {}
    a.i.reject(f);
}
}
function xj(a) {
    y.call(this, a, -1, yj);
}
u(xj, y);
var yj = [6];
function zj(a) {
    y.call(this, a, -1, Aj);
}
u(zj, y);
function Bj(a) {
    y.call(this, a);
}
u(Bj, y);
function Cj(a) {
    y.call(this, a);
}
u(Cj, y);
var Aj = [7];
function Dj(a) {
    a = (a = new cj(a).get('FCCDCF', '')) ? a : null;
    try {
        return a ? pb(zj, a ? JSON.parse(a) : null) : null;
    } catch (b) {}
    return null;
}
}
function Ej(a) {
    function b() {
        if (!a.frames.__uspapiLocator)
            if (c.body) {
                var d = yc('IFRAME', c);
                d.style.display = 'none';
                d.style.width = '0px';
                d.style.height = '0px';
                d.style.border = 'none';
                d.style.zIndex = '-1000';
                d.style.left = '-1000px';
                d.style.top = '-1000px';
                d.name = '__uspapiLocator';
                c.body.appendChild(d);
            } else a.setTimeout(b, 5);
    }
    var c = a.document;
    b();
}
function Fj(a) {
    this.h = a;
    this.i = a.document;
    this.j = (a = (a = Dj(this.i)) ? G(a, Cj, 5) || null : null) ? z(a, 2) : null;
    (a = Dj(this.i)) && G(a, Bj, 4);
    (a = Dj(this.i)) && G(a, Bj, 4);
}
function Gj() {
    var a = window;
    a.__uspapi || a.frames.__uspapiLocator || ((a = new Fj(a)), Hj(a));
}
function Hj(a) {
    !a.j ||
        a.h.__uspapi ||
        a.h.frames.__uspapiLocator ||
        ((a.h.__uspapiManager = 'fc'),
            Ej(a.h),
            Ha(function(...args) {
                return a.l(...ma(ta.apply(0, args)));
            }));
}
Fj.prototype.l = function(a, b, c) {
    'function' === typeof c &&
        'getUSPData' === a &&
        c({
                version: 1,
                uspString: this.j
            },
            !0
        );
};
function Ij(a) {
    var b = /[a-zA-Z0-9._~-]/;
    var c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, (d) => {
        if (!d.match(c)) {
            var e = decodeURIComponent(d);
            if (e.match(b)) return e;
        }
        return d.toUpperCase();
    });
}
function Jj(a) {
    for (var b = '', c = /[/%?&=]/, d = 0; d < a.length; ++d) {
        var e = a[d];
        b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
}
function Kj(a, b) {
    a = Jj(Ij(a.location.pathname)).replace(/(^\/)|(\/$)/g, '');
    var c = Fc(a);
    var d = Lj(a);
    return (
        p(b, 'find').call(b, (e) => {
            var f = null != z(e, 7) ? z(G(e, Dg, 7), 1) : z(e, 1);
            e = null != z(e, 7) ? z(G(e, Dg, 7), 2) : 2;
            if ('number' !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1;
            }
            return !1;
        }) || null
    );
}
function Lj(a) {
    for (var b = {};;) {
        b[Fc(a)] = !0;
        if (!a) return b;
        a = a.substring(0, a.lastIndexOf('/'));
    }
}
var Mj = {};
var Nj = ((Mj.google_ad_channel = !0), (Mj.google_ad_host = !0), Mj);
function Oj(a, b) {
    a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
    uf('ama', b, 0.01);
}
function Pj(a) {
    var b = {};
    Ec(Nj, (c, d) => {
        d in a && (b[d] = a[d]);
    });
    return b;
}
function Qj(a) {
    a = G(a, Ag, 3);
    return !a || z(a, 1) <= Date.now() ? !1 : !0;
}
function Rj(a) {
    return (a = Ti(a)) ? (Qj(a) ? a : null) : null;
}
function Sj(a, b) {
    try {
        b.removeItem('google_ama_config');
    } catch (c) {
        Oj(a, {
            lserr: 1
        });
    }
}
function Tj(a) {
    Oj(a, {
        atf: 1
    });
}
function Uj(a, b) {
    (a.google_ama_state = a.google_ama_state || {}).exception = b;
    Oj(a, {
        atf: 0
    });
}
function U(a) {
    a.google_ad_modifications || (a.google_ad_modifications = {});
    return a.google_ad_modifications;
}
function Vj(a) {
    a = U(a);
    var b = a.space_collapsing || 'none';
    return a.remove_ads_by_default ? {
            Da: !0,
            ob: b,
            oa: a.ablation_viewport_offset
        } :
        null;
}
function Wj(a, b) {
    a = U(a);
    a.tag_partners = a.tag_partners || [];
    a.tag_partners.push(b);
}
function Xj(a, b) {
    a = U(a);
    a.remove_ads_by_default = !0;
    a.space_collapsing = 'slot';
    a.ablation_viewport_offset = b;
}
function Yj(a) {
    U(J).allow_second_reactive_tag = a;
}
function Zj() {
    var a = U(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
}
function ak(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = bk(b);
    return 'go' != b && -1 != a.indexOf(b) ? !0 : !1;
}
function bk(a) {
    var b = '';
    Ec(a.split('_'), (c) => {
        b += c.substr(0, 2);
    });
    return b;
}
function ck() {
    var a = this;
    this.promise = new n.Promise((b, c) => {
        a.resolve = b;
        a.reject = c;
    });
}
function dk() {
    var a = new ck();
    this.promise = a.promise;
    this.resolve = a.resolve;
}
function ek(a) {
    v.google_llp || (v.google_llp = {});
    var b = v.google_llp;
    b[7] || ((b[7] = new dk()), a && a());
    return b[7];
}
function fk(a) {
    return ek(() => {
        xc(v.document, a);
    }).promise;
}
function gk(a) {
    var b = {};
    return {
        enable_page_level_ads: ((b.pltais = !0), b),
        google_ad_client: a
    };
}
function hk(a) {
    if (v.google_apltlad || v.top != v || !a.google_ad_client) return null;
    v.google_apltlad = !0;
    var b = gk(a.google_ad_client);
    var c = b.enable_page_level_ads;
    Ec(a, (d, e) => {
        oi[e] && 'google_ad_client' !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    if ('google_ad_section' in a || 'google_ad_region' in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
}
function ik(a) {
    return za(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive;
}
function jk(a, b) {
    this.h = v;
    this.j = a;
    this.i = b;
}
function kk(a) {
    mj({
        ba: a.h,
        ka: a.i,
        Ra: 50,
        Ya(b) {
            return lk(a, b);
        }
    });
}
function lk(a, b) {
    Tf(
        Rf(b, (c) => {
            mk('ok');
            nk(a.h, a.j, c);
        }),
        (c) => mk(c.message)
    );
}
function mk(a) {
    uf(
        'abg::amalserr', {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: 0.01
        },
        0.01
    );
}
function nk(a, b, c) {
    if (!U(J).ama_ran_on_page) {
        var d = Rj(c);
        if (d) {
            if (null != z(d, 24)) {
                c = Ci(a);
                c.availableAbg = !0;
                var e;
                var f;
                c.ablationFromStorage = !!(null == (e = G(d, tg, 24)) ? 0 : null == (f = G(e, vg, 3)) ? 0 : Gb(f, wg, 2, xg));
            }
            if (ik(b) && ((e = Kj(a, H(d, Bg, 7))), !e || !tb(e, 8))) return;
            U(J).ama_ran_on_page = !0;
            var g;
            if (null == (g = G(d, Gg, 15)) ? 0 : tb(g, 23)) U(a).enable_overlap_observer = !0;
            if ((g = G(d, Eg, 13)) && 1 === z(g, 1)) {
                var h = 0;
                var k = G(g, Fg, 6);
                k && z(k, 3) && (h = z(k, 3) || 0);
                Xj(a, h);
            } else if (null == (h = G(d, tg, 24)) ? 0 : null == (k = G(h, vg, 3)) ? 0 : Gb(k, wg, 2, xg))(Ci(a).ablatingThisPageview = !0), Xj(a, 1);
            kd(3, [d.toJSON()]);
            var l = b.google_ad_client || '';
            b = Pj(za(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
            var m = fg(jg, new eg(null, b));
            sf(782, () => {
                var r = m;
                try {
                    var t = Kj(a, H(d, Bg, 7));
                    var x;
                    if ((x = t))
                        a: {
                            var E = sb(t, 2);
                            if (E)
                                for (var B = 0; B < E.length; B++)
                                    if (1 == E[B]) {
                                        x = !0;
                                        break a;
                                    }
                            x = !1;
                        }
                    if (x) {
                        if (z(t, 4)) {
                            x = {};
                            var F = new eg(null, ((x.google_package = z(t, 4)), x));
                            r = fg(r, F);
                        }
                        var va = new Pi(a, l, d, t, r);
                        var gb = new Df();
                        new vj(a, va, gb).start();
                        gb.i.then(Ga(Tj, a), Ga(Uj, a));
                    }
                } catch (qc) {
                    Oj(a, {
                        atf: -1
                    });
                }
            });
        } else Sj(a, c);
    }
}
function ok(a, b, c) {
    a = a.style;
    a.border = 'none';
    a.height = c + 'px';
    a.width = b + 'px';
    a.margin = 0;
    a.padding = 0;
    a.position = 'relative';
    a.visibility = 'visible';
    a.backgroundColor = 'transparent';
}
var pk = {
    '120x90': !0,
    '160x90': !0,
    '180x90': !0,
    '200x90': !0,
    '468x15': !0,
    '728x15': !0
};
function qk(a, b) {
    if (15 == b) {
        if (728 <= a) return 728;
        if (468 <= a) return 468;
    } else if (90 == b) {
        if (200 <= a) return 200;
        if (180 <= a) return 180;
        if (160 <= a) return 160;
        if (120 <= a) return 120;
    }
    return null;
}
function V(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    S.call(this, a, b);
    this.aa = c;
    this.cb = d;
}
u(V, S);
V.prototype.na = function() {
    return this.aa;
};
V.prototype.i = function(a, b, c) {
    b.google_ad_resize || ((c.style.height = this.height() + 'px'), (b.rpe = !0));
};
function rk(a) {
    return (b) => !!(b.aa & a);
}
var sk = ab('script');
function tk(a, b, c, d, e, f, g, h, k, l, m, r) {
    this.v = a;
    this.R = b;
    this.aa = void 0 === c ? null : c;
    this.h = void 0 === d ? null : d;
    this.O = void 0 === e ? null : e;
    this.i = void 0 === f ? null : f;
    this.j = void 0 === g ? null : g;
    this.H = void 0 === h ? null : h;
    this.M = void 0 === k ? null : k;
    this.l = void 0 === l ? null : l;
    this.m = void 0 === m ? null : m;
    this.N = void 0 === r ? null : r;
    this.P = this.A = this.D = null;
}
tk.prototype.size = function() {
    return this.R;
};
function uk(a, b, c) {
    null != a.aa && (c.google_responsive_formats = a.aa);
    null != a.O && (c.google_safe_for_responsive_override = a.O);
    null != a.i && (!0 === a.i ? (c.google_full_width_responsive_allowed = !0) : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.i)));
    null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
    var d = a.m || c.google_ad_width;
    null != d && (c.google_resizing_width = d);
    d = a.l || c.google_ad_height;
    null != d && (c.google_resizing_height = d);
    d = a.size().h(b);
    var e = a.size().height();
    if (!c.google_ad_resize) {
        c.google_ad_width = d;
        c.google_ad_height = e;
        var f = a.size();
        b = f.h(b) + 'x' + f.height();
        c.google_ad_format = b;
        c.google_responsive_auto_format = a.v;
        null != a.h && (c.armr = a.h);
        c.google_ad_resizable = !0;
        c.google_override_format = 1;
        c.google_loader_features_used = 128;
        !0 === a.i && (c.gfwrnh = a.size().height() + 'px');
    }
    null != a.H && (c.gfwroml = a.H);
    null != a.M && (c.gfwromr = a.M);
    null != a.l && (c.gfwroh = a.l);
    null != a.m && (c.gfwrow = a.m);
    null != a.N && (c.gfwroz = a.N);
    null != a.D && (c.gml = a.D);
    null != a.A && (c.gmr = a.A);
    null != a.P && (c.gzi = a.P);
    b = fd();
    b = hd(b) || b;
    ak(b.location, 'google_responsive_dummy_ad') &&
        ($a([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) &&
        2 !== a.h &&
        ((a = JSON.stringify({
                googMsgType: 'adpnt',
                key_value: [{
                    key: 'qid',
                    value: 'DUMMY_AD'
                }]
            })),
            (c.dash =
                '<' +
                sk +
                ">window.top.postMessage('" +
                a +
                "', '*');\n          </" +
                sk +
                '>\n          <div id="dummyAd" style="width:' +
                d +
                'px;height:' +
                e +
                'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
                d +
                'x' +
                e +
                '</p>\n            <p>Rendered size:' +
                d +
                'x' +
                e +
                '</p>\n          </div>'));
}
/*
Copyright 2019 The AMP HTML Authors. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var vk = {};
var wk =
    ((vk.image_stacked = 1 / 1.91),
        (vk.image_sidebyside = 1 / 3.82),
        (vk.mobile_banner_image_sidebyside = 1 / 3.82),
        (vk.pub_control_image_stacked = 1 / 1.91),
        (vk.pub_control_image_sidebyside = 1 / 3.82),
        (vk.pub_control_image_card_stacked = 1 / 1.91),
        (vk.pub_control_image_card_sidebyside = 1 / 3.74),
        (vk.pub_control_text = 0),
        (vk.pub_control_text_card = 0),
        vk);
var xk = {};
var yk =
    ((xk.image_stacked = 80),
        (xk.image_sidebyside = 0),
        (xk.mobile_banner_image_sidebyside = 0),
        (xk.pub_control_image_stacked = 80),
        (xk.pub_control_image_sidebyside = 0),
        (xk.pub_control_image_card_stacked = 85),
        (xk.pub_control_image_card_sidebyside = 0),
        (xk.pub_control_text = 80),
        (xk.pub_control_text_card = 80),
        xk);
var zk = {};
var Ak =
    ((zk.pub_control_image_stacked = 100),
        (zk.pub_control_image_sidebyside = 200),
        (zk.pub_control_image_card_stacked = 150),
        (zk.pub_control_image_card_sidebyside = 250),
        (zk.pub_control_text = 100),
        (zk.pub_control_text_card = 150),
        zk);
function Bk(a) {
    var b = 0;
    a.K && b++;
    a.F && b++;
    a.G && b++;
    if (3 > b)
        return {
            J: 'Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.'
        };
    b = a.K.split(',');
    var c = a.G.split(',');
    a = a.F.split(',');
    if (b.length !== c.length || b.length !== a.length)
        return {
            J: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
    if (2 < b.length)
        return {
            J: 'The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing ' +
                (b.length +
                    ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
    for (var d = [], e = [], f = 0; f < b.length; f++) {
        var g = Number(c[f]);
        if (isNaN(g) || 0 === g)
            return {
                J: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
        d.push(g);
        g = Number(a[f]);
        if (isNaN(g) || 0 === g)
            return {
                J: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
        e.push(g);
    }
    return {
        G: d,
        F: e,
        Ka: b
    };
}
function Ck(a) {
    return 1200 <= a ? {
            width: 1200,
            height: 600
        } :
        850 <= a ? {
            width: a,
            height: Math.floor(0.5 * a)
        } :
        550 <= a ? {
            width: a,
            height: Math.floor(0.6 * a)
        } :
        468 <= a ? {
            width: a,
            height: Math.floor(0.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        };
}
var Dk = ['google_content_recommendation_ui_type', 'google_content_recommendation_columns_num', 'google_content_recommendation_rows_num'];
function Ek(a, b) {
    S.call(this, a, b);
}
u(Ek, S);
Ek.prototype.h = function(a) {
    return Math.min(1200, Math.max(this.minWidth(), Math.round(a)));
};
function Fk(a, b) {
    Gk(a, b);
    if ('pedestal' == b.google_content_recommendation_ui_type) return new tk(9, new Ek(a, Math.floor(a * b.google_phwr)));
    var c = rc();
    468 > a ?
        c ?
        ((c = a - 8 - 8),
            (c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * wk.mobile_banner_image_sidebyside + yk.mobile_banner_image_sidebyside) + 96)),
            (a = {
                X: a,
                V: c,
                F: 1,
                G: 12,
                K: 'mobile_banner_image_sidebyside'
            })) :
        ((a = Ck(a)),
            (a = {
                X: a.width,
                V: a.height,
                F: 1,
                G: 13,
                K: 'image_sidebyside'
            })) :
        ((a = Ck(a)),
            (a = {
                X: a.width,
                V: a.height,
                F: 4,
                G: 2,
                K: 'image_stacked'
            }));
    Hk(b, a);
    return new tk(9, new Ek(a.X, a.V));
}
function Ik(a, b) {
    Gk(a, b);
    var c = Bk({
        G: b.google_content_recommendation_rows_num,
        F: b.google_content_recommendation_columns_num,
        K: b.google_content_recommendation_ui_type
    });
    if (c.J)
        a = {
            X: 0,
            V: 0,
            F: 0,
            G: 0,
            K: 'image_stacked',
            J: c.J
        };
    else {
        var d = 2 === c.Ka.length && 468 <= a ? 1 : 0;
        var e = c.Ka[d];
        e = 0 === e.indexOf('pub_control_') ? e : 'pub_control_' + e;
        var f = Ak[e];
        for (var g = c.F[d]; a / g < f && 1 < g;) g--;
        f = g;
        c = c.G[d];
        d = Math.floor((((a - 8 * f - 8) / f) * wk[e] + yk[e]) * c + 8 * c + 8);
        a =
            1500 < a ? {
                width: 0,
                height: 0,
                ra: 'Calculated slot width is too large: ' + a
            } :
            1500 < d ? {
                width: 0,
                height: 0,
                ra: 'Calculated slot height is too large: ' + d
            } : {
                width: a,
                height: d
            };
        a = a.ra ? {
            X: 0,
            V: 0,
            F: 0,
            G: 0,
            K: e,
            J: a.ra
        } : {
            X: a.width,
            V: a.height,
            F: f,
            G: c,
            K: e
        };
    }
    if (a.J) throw new K(a.J);
    Hk(b, a);
    return new tk(9, new Ek(a.X, a.V));
}
function Gk(a, b) {
    if (0 >= a)
        throw new K(
            'Invalid responsive width from Matched Content slot ' +
            b.google_ad_slot +
            ': ' +
            a +
            '. Please ensure to put this Matched Content slot into a non-zero width div container.'
        );
}
function Hk(a, b) {
    a.google_content_recommendation_ui_type = b.K;
    a.google_content_recommendation_columns_num = b.F;
    a.google_content_recommendation_rows_num = b.G;
}
function Jk(a, b) {
    S.call(this, a, b);
}
u(Jk, S);
Jk.prototype.h = function() {
    return this.minWidth();
};
Jk.prototype.i = function(a, b, c) {
    gi(a, c);
    b.google_ad_resize || ((c.style.height = this.height() + 'px'), (b.rpe = !0));
};
var Kk = {
    'image-top': function(a) {
        return 600 >= a ? 284 + 0.414 * (a - 250) : 429;
    },
    'image-middle': function(a) {
        return 500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500);
    },
    'image-side': function(a) {
        return 500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500);
    },
    'text-only': function(a) {
        return 500 >= a ? 187 - 0.228 * (a - 250) : 130;
    },
    'in-article': function(a) {
        return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200;
    }
};
function Lk(a, b) {
    S.call(this, a, b);
}
u(Lk, S);
Lk.prototype.h = function() {
    return Math.min(1200, this.minWidth());
};
function Mk(a, b, c, d, e) {
    var f = e.google_ad_layout || 'image-top';
    if ('in-article' == f) {
        var g = a;
        if ('false' == e.google_full_width_responsive) a = g;
        else if (((a = bi(b, c, g, 0.2, e)), !0 !== a))(e.gfwrnwer = a), (a = g);
        else if ((a = Cf(b)))
            if (((e.google_full_width_responsive_allowed = !0), c.parentElement)) {
                b: {
                    g = c;
                    for (var h = 0; 100 > h && g.parentElement; ++h) {
                        for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                            var m = k[l];
                            if (m != g && ei(b, m)) break b;
                        }
                        g = g.parentElement;
                        g.style.width = '100%';
                        g.style.height = 'auto';
                    }
                }
                gi(b, c);
            }
        else a = g;
        else a = g;
    }
    if (250 > a) throw new K('Fluid responsive ads must be at least 250px wide: availableWidth=' + a);
    a = Math.min(1200, Math.floor(a));
    if (d && 'in-article' != f) {
        f = Math.ceil(d);
        if (50 > f) throw new K('Fluid responsive ads must be at least 50px tall: height=' + f);
        return new tk(11, new S(a, f));
    }
    if ('in-article' != f && (d = e.google_ad_layout_key)) {
        f = '' + d;
        b = Math.pow(10, 3);
        if ((d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)) {
            e = [];
            for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
            b = e;
        } else b = null;
        if (!b) throw new K('Invalid data-ad-layout-key value: ' + f);
        f = (a + -725) / 1e3;
        c = 0;
        d = 1;
        e = b.length;
        for (g = 0; g < e; g++)(c += b[g] * d), (d *= f);
        f = Math.ceil(1e3 * c - -725 + 10);
        if (isNaN(f)) throw new K('Invalid height: height=' + f);
        if (50 > f) throw new K('Fluid responsive ads must be at least 50px tall: height=' + f);
        if (1200 < f) throw new K('Fluid responsive ads must be at most 1200px tall: height=' + f);
        return new tk(11, new S(a, f));
    }
    d = Kk[f];
    if (!d) throw new K('Invalid data-ad-layout value: ' + f);
    c = ki(c, b);
    b = Cf(b);
    b = 'in-article' !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
    return new tk(11, 'in-article' == f ? new Lk(a, b) : new S(a, b));
}
function Nk(a) {
    return (b) => {
        for (var c = a.length - 1; 0 <= c; --c)
            if (!a[c](b)) return !1;
        return !0;
    };
}
function Ok(a, b) {
    for (var c = Pk.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
        var g = c[f];
        if (a(g)) {
            if (!b || b(g)) return g;
            null === e && (e = g);
        }
    }
    return e;
}
var W = [
    new V(970, 90, 2),
    new V(728, 90, 2),
    new V(468, 60, 2),
    new V(336, 280, 1),
    new V(320, 100, 2),
    new V(320, 50, 2),
    new V(300, 600, 4),
    new V(300, 250, 1),
    new V(250, 250, 1),
    new V(234, 60, 2),
    new V(200, 200, 1),
    new V(180, 150, 1),
    new V(160, 600, 4),
    new V(125, 125, 1),
    new V(120, 600, 4),
    new V(120, 240, 4),
    new V(120, 120, 1, !0)
];
var Pk = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];
function Qk(a, b, c, d, e) {
    'false' == e.google_full_width_responsive ?
        (c = {
            B: a,
            C: 1
        }) :
        ('autorelaxed' == b && e.google_full_width_responsive) || Rk(b) || e.google_ad_resize ?
        ((b = ci(a, c, d, e)),
            (c = !0 !== b ? {
                B: a,
                C: b
            } : {
                B: Cf(c) || a,
                C: !0
            })) :
        (c = {
            B: a,
            C: 2
        });
    b = c.C;
    return !0 !== b ? {
            B: a,
            C: b
        } :
        d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        };
}
function Sk(a, b, c, d, e) {
    var f = sf(247, () => Qk(a, b, c, d, e));
    var g = f.B;
    f = f.C;
    var h = !0 === f;
    var k = I(d.style.width);
    var l = I(d.style.height);
    var m = Tk(g, b, c, d, e, h);
    g = m.W;
    h = m.T;
    var r = m.na;
    m = m.Ja;
    var t = Uk(b, r);
    var x;
    var E = (x = hi(d, c, 'marginLeft', I)) ? x + 'px' : '';
    var B = (x = hi(d, c, 'marginRight', I)) ? x + 'px' : '';
    x = hi(d, c, 'zIndex') || '';
    return new tk(t, g, r, null, m, f, h, E, B, l, k, x);
}
function Rk(a) {
    return 'auto' == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a);
}
function Tk(a, b, c, d, e, f) {
    b = 'auto' == b ? (0.25 >= a / Math.min(1200, Cf(c)) ? 4 : 3) : ai(b);
    var g = !1;
    var h = !1;
    if (488 > Cf(c)) {
        var k = Wh(d, c);
        var l = ki(d, c);
        g = !l && k;
        h = l && k;
    }
    l = [ii(a), rk(b)];
    l.push(ji(488 > Cf(c), c, d, h));
    null != e.google_max_responsive_height && l.push(mi(e.google_max_responsive_height));
    var m = [(t) => !t.cb];
    if (g || h)(g = ni(c, d)), m.push(mi(g));
    var r = Ok(Nk(l), Nk(m));
    if (!r) throw new K('No slot size for availableWidth=' + a);
    l = sf(248, () => {
        var t;
        a: if (f) {
            if (e.gfwrnh && (t = I(e.gfwrnh))) {
                t = {
                    W: new Jk(a, t),
                    T: !0
                };
                break a;
            }
            t = a / 1.2;
            var x = Math;
            var E = x.min;
            if (e.google_resizing_allowed || 'true' == e.google_full_width_responsive) var B = Infinity;
            else {
                B = d;
                var F = Infinity;
                do {
                    var va = hi(B, c, 'height', I);
                    va && (F = Math.min(F, va));
                    (va = hi(B, c, 'maxHeight', I)) && (F = Math.min(F, va));
                } while ((B = B.parentElement) && 'HTML' != B.tagName);
                B = F;
            }
            x = E.call(x, t, B);
            if (x < 0.5 * t || 100 > x) x = t;
            Q(th) && !ki(d, c) && (x = Math.max(x, 0.5 * Bf(c).clientHeight));
            t = {
                W: new Jk(a, Math.floor(x)),
                T: x < t ? 102 : !0
            };
        } else
            t = {
                W: r,
                T: 100
            };
        return t;
    });
    g = l.W;
    l = l.T;
    return 'in-article' === e.google_ad_layout && Vk(c) ? {
        W: Wk(a, c, d, g, e),
        T: !1,
        na: b,
        Ja: k
    } : {
        W: g,
        T: l,
        na: b,
        Ja: k
    };
}
function Uk(a, b) {
    if ('auto' == a) return 1;
    switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
    }
    throw Error('bad mask');
}
function Wk(a, b, c, d, e) {
    var f = e.google_ad_height || hi(c, b, 'height', I);
    b = Mk(a, b, c, f, e).size();
    return b.minWidth() * b.height() > a * d.height() ? new V(b.minWidth(), b.height(), 1) : d;
}
function Vk(a) {
    return Q(rh) || (a.location && '#hffwroe2etoq' == a.location.hash);
}
function Xk(a, b, c, d, e) {
    var f;
    (f = Cf(b)) ?
    488 > Cf(b) ?
        b.innerHeight >= b.innerWidth ?
        ((e.google_full_width_responsive_allowed = !0),
            gi(b, c),
            (f = {
                B: f,
                C: !0
            })) :
        (f = {
            B: a,
            C: 5
        }) :
        (f = {
            B: a,
            C: 4
        }): (f = {
            B: a,
            C: 10
        });
    var g = f;
    f = g.B;
    g = g.C;
    if (!0 !== g || a == f) return new tk(12, new S(a, d), null, null, !0, g, 100);
    a = Tk(f, 'auto', b, c, e, !0);
    return new tk(1, a.W, a.na, 2, !0, g, a.T);
}
function Yk(a, b) {
    var c = b.google_ad_format;
    if ('autorelaxed' == c) {
        a: {
            if ('pedestal' != b.google_content_recommendation_ui_type)
                for (a = q(Dk), c = a.next(); !c.done; c = a.next())
                    if (null != b[c.value]) {
                        b = !0;
                        break a;
                    }
            b = !1;
        }
        return b ? 9 : 5;
    }
    if (Rk(c)) return 1;
    if ('link' === c) return 4;
    if ('fluid' == c) {
        if ((c = 'in-article' === b.google_ad_layout))
            c = Q(sh) || Q(rh) || (a.location && ('#hffwroe2etop' == a.location.hash || '#hffwroe2etoq' == a.location.hash));
        return c ? (Zk(b), 1) : 8;
    }
    if (27 === b.google_reactive_ad_format) return Zk(b), 1;
}
function $k(a, b, c, d, e) {
    e = b.offsetWidth || ((c.google_ad_resize || (void 0 === e ? !1 : e)) && hi(b, d, 'width', I)) || c.google_ad_width || 0;
    4 === a && ((c.google_ad_format = 'auto'), (a = 1));
    var f = (f = al(a, e, b, c, d)) ? f : Sk(e, c.google_ad_format, d, b, c);
    f.size().i(d, c, b);
    uk(f, e, c);
    1 != a && ((a = f.size().height()), (b.style.height = a + 'px'));
}
function al(a, b, c, d, e) {
    var f = d.google_ad_height || hi(c, e, 'height', I);
    switch (a) {
        case 5:
            return (
                (f = sf(247, () => Qk(b, d.google_ad_format, e, c, d))),
                (a = f.B),
                (f = f.C),
                !0 === f && b != a && gi(e, c),
                !0 === f ? (d.google_full_width_responsive_allowed = !0) : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = f)),
                Fk(a, d)
            );
        case 9:
            return Ik(b, d);
        case 8:
            return Mk(b, e, c, f, d);
        case 10:
            return Xk(b, e, c, f, d);
    }
}
function Zk(a) {
    a.google_ad_format = 'auto';
    a.armr = 3;
}
function bl(a, b) {
    var c = hd(b);
    if (c) {
        c = Cf(c);
        var d = zc(a, b) || {};
        var e = d.direction;
        if ('0px' === d.width && 'none' !== d.cssFloat) return -1;
        if ('ltr' === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
        if ('rtl' === e && c)
            return (
                (a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right),
                Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
            );
    }
    return -1;
}
var cl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/slotcar_library', '.js']);
var dl = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/slotcar_library', '.js']);
var el = la(['https://googleads.g.doubleclick.net/pagead/html/', '/', '/zrt_lookup.html']);
var fl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/show_ads_impl', '.js']);
var gl = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/show_ads_impl', '.js']);
var hl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/show_ads_impl_with_ama', '.js']);
var il = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/show_ads_impl_with_ama', '.js']);
var jl = la(['https://pagead2.googlesyndication.com/pagead/managed/js/adsense/', '/show_ads_impl_instrumented', '.js']);
var kl = la(['https://pagead2.googlesyndication.com/pagead/js/', '/', '/show_ads_impl_instrumented', '.js']);
function ll(a) {
    y.call(this, a);
}
u(ll, y);
function ml(a) {
    y.call(this, a, -1, nl);
}
u(ml, y);
var nl = [1];
function ol(a) {
    y.call(this, a, -1, pl);
}
u(ol, y);
ol.prototype.getId = function() {
    return C(this, 1, 0);
};
ol.prototype.$ = function() {
    return C(this, 7, 0);
};
var pl = [2];
function ql(a) {
    y.call(this, a, -1, rl);
}
u(ql, y);
ql.prototype.$ = function() {
    return C(this, 5, 0);
};
var rl = [2];
function sl(a) {
    y.call(this, a, -1, tl);
}
u(sl, y);
function ul(a) {
    y.call(this, a, -1, vl);
}
u(ul, y);
ul.prototype.$ = function() {
    return C(this, 1, 0);
};
function wl(a) {
    y.call(this, a);
}
u(wl, y);
var tl = [1, 4, 2, 3];
var vl = [2];
function xl(a) {
    y.call(this, a);
}
u(xl, y);
var yl = [13, 14];
var zl = void 0;
function Al() {
    Od(zl, Nd);
    return zl;
}
function Bl(a) {
    Od(zl, Qd);
    zl = a;
}
function Cl(a, b, c, d) {
    c = void 0 === c ? '' : c;
    d = void 0 === d ? null : d;
    return Dl(a, c, (e) => Xa(H(e, Jb, 2), (f) => z(f, 1) === b)) ? !0 : 1 === b ? El(c, d) : !1;
}
function El(a, b) {
    return b ?
        13 === xb(b, yl) ?
        D(Gb(b, ll, 13, yl), 1) :
        14 === xb(b, yl) && '' !== a && 1 === sb(Gb(b, ml, 14, yl), 1).length && sb(Gb(b, ml, 14, yl), 1)[0] === a ?
        D(G(Gb(b, ml, 14, yl), ll, 2), 1) :
        !1 :
        !1;
}
function Fl(a, b) {
    b = C(b, 18, 0); -
    1 !== b && (a.tmod = b);
}
function Gl(a) {
    var b = void 0 === b ? '' : b;
    var c = hd(J) || J;
    return Hl(c, a) ? !0 : Dl(J, b, (d) => Xa(sb(d, 3), (e) => e === a));
}
function Il(a) {
    return Dl(v, void 0 === a ? '' : a, () => !0);
}
function Hl(a, b) {
    a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && $a(a.split(','), b.toString());
}
function Dl(a, b, c) {
    a = hd(a) || a;
    var d = Jl(a);
    b && (b = id(String(b)));
    return Ob(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e));
}
function Jl(a) {
    a = Kl(a);
    var b = {};
    Ec(a, (c, d) => {
        try {
            var e = new Hb(c);
            b[d] = e;
        } catch (f) {}
    });
    return b;
}
function Kl(a) {
    return Q(Mg) ?
        ((a = nj({
                ba: a,
                ka: Al()
            })),
            null != a.h ? (Ll('ok'), (a = Ml(a.h.value))) : (Ll(a.i.message), (a = {})),
            a) :
        Ml(a.localStorage);
}
function Ml(a) {
    try {
        var b = a.getItem('google_adsense_settings');
        if (!b) return {};
        var c = JSON.parse(b);
        return c !== Object(c) ? {} : Nb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && 'string' === typeof e && Array.isArray(d));
    } catch (d) {}
    return {};
}
}
function Ll(a) {
    Q(Lg) &&
        uf(
            'abg_adsensesettings_lserr', {
                s: a,
                g: Q(Mg),
                c: Al(),
                r: 0.01
            },
            0.01
        );
}
function Nl(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
}
function Ol(a) {
    var b = J.document;
    if (b.currentScript) return Nl(b.currentScript, a);
    b = q(b.scripts);
    for (var c = b.next(); !c.done; c = b.next())
        if (0 === Nl(c.value, a)) return 0;
    return 1;
}
function Pl(a, b) {
    var c = {};
    var d = {};
    var e = {};
    var f = {};
    return (
        (f[Wd] =
            ((c[55] = () => 0 === a),
                (c[23] = (g) => Cl(J, Number(g))),
                (c[24] = (g) => Gl(Number(g))),
                (c[61] = () => D(b, 6)),
                (c[63] = () => D(b, 6) || '.google.ch' === Eb(b, 8)),
                c)),
        (f[Xd] =
            ((d[7] = (g) => {
                    try {
                        var h = window.localStorage;
                    } catch (l) {
                        h = null;
                    }
                    g = Number(g);
                    g = void 0 === g ? 0 : g;
                    g = 0 != g ? 'google_experiment_mod' + g : 'google_experiment_mod';
                    var k = Hc(h, g);
                    h = null === k ? Ic(h, g) : k;
                    return null !== h && void 0 !== h ? h : void 0;
                }),
                d)),
        (f[Yd] = ((e[6] = () => Eb(b, 15)), e)),
        f
    );
}
function Ql(a) {
    a = void 0 === a ? v : a;
    return a.ggeac || (a.ggeac = {});
}
function Rl(a, b) {
    try {
        var c = a.split('.');
        a = v;
        for (var d = 0, e; null != a && d < c.length; d++)(e = a), (a = a[c[d]]), 'function' === typeof a && (a = e[c[d]]());
        var f = a;
        if (typeof f === b) return f;
    } catch (g) {}
}
function Sl() {
    var a = {};
    this[Wd] =
        ((a[8] = (b) => {
                try {
                    return null != ya(b);
                } catch (c) {}
            }),
            (a[9] = (b) => {
                try {
                    var c = ya(b);
                } catch (d) {
                    return;
                }
                if ((b = 'function' === typeof c))(c = c && c.toString && c.toString()), (b = 'string' === typeof c && -1 != c.indexOf('[native code]'));
                return b;
            }),
            (a[10] = () => window == window.top),
            (a[6] = (b) => $a(L( of ).h(), parseInt(b, 10))),
            (a[27] = (b) => {
                b = Rl(b, 'boolean');
                return void 0 !== b ? b : void 0;
            }),
            (a[60] = (b) => {
                try {
                    return !!v.document.querySelector(b);
                } catch (c) {}
            }),
            a);
    a = {};
    this[Xd] =
        ((a[3] = () => Nc()),
            (a[6] = (b) => {
                b = Rl(b, 'number');
                return void 0 !== b ? b : void 0;
            }),
            (a[11] = (b) => {
                b = void 0 === b ? '' : b;
                var c = v;
                b = void 0 === b ? '' : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(tc)[3] || null) ? decodeURI(c) : c) ? Fc(c + b) : null;
                return null == b ? void 0 : b % 1e3;
            }),
            a);
    a = {};
    this[Yd] =
        ((a[2] = () => window.location.href),
            (a[3] = () => {
                try {
                    return window.top.location.hash;
                } catch (b) {
                    return '';
                }
            }),
            (a[4] = (b) => {
                b = Rl(b, 'string');
                return void 0 !== b ? b : void 0;
            }),
            a);
}
var Tl = [12, 13, 20];
function Ul() {}
Ul.prototype.init = function(a, b, c, d) {
    var e = this;
    d = void 0 === d ? {} : d;
    var f = void 0 === d.Ha ? !1 : d.Ha;
    var g = void 0 === d.fb ? {} : d.fb;
    d = void 0 === d.hb ? [] : d.hb;
    this.l = a;
    this.v = {};
    this.D = f;
    this.m = g;
    a = {};
    this.h = ((a[b] = []), (a[4] = []), a);
    this.j = {};
    (b = Bd()) &&
    Ua(b.split(',') || [], (h) => {
        (h = parseInt(h, 10)) && (e.j[h] = !0);
    });
    Ua(d, (h) => {
        e.j[h] = !0;
    });
    this.i = c;
    return this;
};
function Vl(a, b, c) {
    var d = [];
    var e = Wl(a.l, b);
    var f;
    if ((f = 9 !== b)) a.v[b] ? (f = !0) : ((a.v[b] = !0), (f = !1));
    if (f || !e.length) {
        var g;
        null == (g = a.i) || ze(g, b, c, d, [], 2);
        return d;
    }
    var h = $a(Tl, b);
    var k = [];
    Ua(e, (m) => {
        var r = new re();
        if ((m = Xl(a, m, c, r)))
            0 !== xb(r, se) && k.push(r),
            (r = m.getId()),
            d.push(r),
            Yl(a, r, h ? 4 : c),
            (m = H(m, ge, 2)) && (h ? Qe(m, Se(), a.i, r) : Qe(m, [c], a.i, r));
    });
    var l;
    null == (l = a.i) || ze(l, b, c, d, k, 1);
    return d;
}
function Yl(a, b, c) {
    a.h[c] || (a.h[c] = []);
    a = a.h[c];
    $a(a, b) || a.push(b);
}
function Zl(a, b) {
    a.l.push(
        ...ma(
            Va(
                Wa(b, (c) => new ul(c)),
                (c) => !$a(Tl, c.$())
            )
        )
    );
}
function Xl(a, b, c, d) {
    var e = L(Ce).h;
    if (!ce(G(b, Rd, 3), e)) return null;
    var f = H(b, ol, 2);
    var g = C(b, 6, 0);
    if (g) {
        wb(d, 1, se, g);
        f = e[Xd];
        switch (c) {
            case 2:
                var h = f[8];
                break;
            case 1:
                h = f[7];
        }
        c = void 0;
        if (h)
            try {
                (c = h(g)), vb(d, 3, c);
            } catch (k) {}
        return (b = $l(b, c)) ? am(a, [b], 1) : null;
    }
    if ((g = C(b, 10, 0))) {
        wb(d, 2, se, g);
        h = null;
        switch (c) {
            case 1:
                h = e[Xd][9];
                break;
            case 2:
                h = e[Xd][10];
                break;
            default:
                return null;
        }
        c = h ? h(String(g)) : void 0;
        if (void 0 === c && 1 === C(b, 11, 0)) return null;
        void 0 !== c && vb(d, 3, c);
        return (b = $l(b, c)) ? am(a, [b], 1) : null;
    }
    d = e ? Va(f, (k) => ce(G(k, Rd, 3), e)) : f;
    if (!d.length) return null;
    c = d.length * C(b, 1, 0);
    return (b = C(b, 4, 0)) ? bm(a, b, c, d) : am(a, d, c / 1e3);
}
function bm(a, b, c, d) {
    var e = null != a.m[b] ? a.m[b] : 1e3;
    if (0 >= e) return null;
    d = am(a, d, c / e);
    a.m[b] = d ? 0 : e - c;
    return d;
}
function am(a, b, c) {
    var d = a.j;
    var e = Ya(b, (f) => !!d[f.getId()]);
    return e ? e : a.D ? null : Ac(b, c);
}
function cm(a, b) {
    N(
        Ue,
        (c) => {
            a.j[c] = !0;
        },
        b
    );
    N(Xe, (c, d) => Vl(a, c, d), b);
    N(Ye, (c) => (a.h[c] || []).concat(a.h[4]), b);
    N(gf, (c) => Zl(a, c), b);
    N(Ve, (c, d) => Yl(a, c, d), b);
}
function Wl(a, b) {
    return ((a = Ya(a, (c) => c.$() == b)) && H(a, ql, 2)) || [];
}
function $l(a, b) {
    var c = H(a, ol, 2);
    var d = c.length;
    var e = C(a, 8, 0);
    a = d * C(a, 1, 0) - 1;
    b = void 0 !== b ? b : Math.floor(1e3 * Dc());
    d = (b - e) % d;
    if (b < e || b - e - d >= a) return null;
    c = c[d];
    e = L(Ce).h;
    return !c || (e && !ce(G(c, Rd, 3), e)) ? null : c;
}
function dm() {
    this.h = () => {};
}
function em(a) {
    L(dm).h(a);
}
var fm;
var gm;
var hm;
var im;
var jm;
var km;
function lm(a, b, c, d) {
    var e = 1;
    d = void 0 === d ? Ql() : d;
    e = void 0 === e ? 0 : e;
    var f =
        void 0 === f ?
        new ye(
            null != (im = null == (fm = G(a, wl, 5)) ? void 0 : C(fm, 2, 0)) ? im : 0,
            null != (jm = null == (gm = G(a, wl, 5)) ? void 0 : C(gm, 4, 0)) ? jm : 0,
            null != (km = null == (hm = G(a, wl, 5)) ? void 0 : D(hm, 3)) ? km : !1
        ) :
        f;
    d.hasOwnProperty('init-done') ?
        (kf(gf, d)(Wa(H(a, ul, 2), (g) => g.toJSON())),
            kf(hf, d)(
                Wa(H(a, ge, 1), (g) => g.toJSON()),
                e
            ),
            b && kf(jf, d)(b),
            mm(d, e)) :
        (cm(L(Ul).init(H(a, ul, 2), e, f, c), d),
            lf(d),
            mf(d),
            nf(d),
            mm(d, e),
            Qe(H(a, ge, 1), [e], f, void 0, !0),
            (De = De || !(!c || !c.bb)),
            em(L(Sl)),
            b && em(b));
}
function mm(a, b) {
    a = void 0 === a ? Ql() : a;
    b = void 0 === b ? 0 : b;
    var c = a;
    var d = b;
    d = void 0 === d ? 0 : d;
    pf(L( of ), c, d);
    nm(a, b);
    L(dm).h = kf(jf, a);
    L(Qh).m();
}
function nm(a, b) {
    var c = L(Qh);
    c.i = (d, e) => kf($e, a, () => !1)(d, e, b);
    c.j = (d, e) => kf(af, a, () => 0)(d, e, b);
    c.l = (d, e) => kf(bf, a, () => '')(d, e, b);
    c.h = (d, e) => kf(cf, a, () => [])(d, e, b);
    c.m = () => {
        kf(We, a)(b);
    };
}
function om(a, b, c) {
    var d = U(a);
    if (d.plle) mm(Ql(a), 1);
    else {
        d.plle = !0;
        try {
            var e = a.localStorage;
        } catch (f) {
            e = null;
        }
        d = e;
        null == Hc(d, 'goog_pem_mod') && Ic(d, 'goog_pem_mod');
        d = G(b, sl, 12);
        e = D(b, 9);
        lm(
            d,
            Pl(c, b), {
                Ha: e && !!a.google_disable_experiments,
                bb: e
            },
            Ql(a)
        );
        if ((c = Eb(b, 15)))(c = Number(c)), L( of ).l(c);
        if ((b = Eb(b, 10)))(b = Number(b)), L( of ).j(b);
        L( of ).i(12);
        L( of ).i(10);
        a = hd(a) || a;
        ak(a.location, 'google_mc_lab') && L( of ).j(44738307);
    }
}
function pm(a) {
    qf.Oa((b) => {
        b.shv = String(a);
        b.mjsv = 'm202111110101';
        var c = L( of ).h();
        var d = U(v);
        d.eids || (d.eids = []);
        b.eid = c.concat(d.eids).join(',');
    });
}
function qm(a) {
    var b = a.jb;
    return a.$a || ('dev' === b ? 'dev' : '');
}
var rm = {};
var sm =
    ((rm.google_ad_modifications = !0),
        (rm.google_analytics_domain_name = !0),
        (rm.google_analytics_uacct = !0),
        (rm.google_pause_ad_requests = !0),
        (rm.google_user_agent_client_hint = !0),
        rm);
function tm(a) {
    return (a = a.innerText || a.innerHTML) &&
        (a = a
            .replace(/^\s+/, '')
            .split(/\r?\n/, 1)[0]
            .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
        RegExp('google_ad_client').test(a[1]) ?
        a[1] :
        null;
}
function um(a) {
    if ((a = a.innerText || a.innerHTML))
        if (
            ((a = a.replace(/^\s+|\s+$/g, '').replace(/\s*(\r?\n)+\s*/g, ';')),
                (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp('google_ad_client').test(a[1]))
        )
            return a[1];
    return null;
}
function vm(a) {
    switch (a) {
        case 'true':
            return !0;
        case 'false':
            return !1;
        case 'null':
            return null;
        case 'undefined':
            break;
        default:
            try {
                var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b) return b[1] || b[2] || '';
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    var c = parseFloat(a);
                    return c === c ? c : void 0;
                }
            } catch (d) {}
    }
}
var wm = 'undefined' === typeof sttc ? void 0 : sttc;
function xm(a) {
    var b = qf;
    try {
        return Od(a, Pd), new xl(JSON.parse(a));
    } catch (c) {
        b.I(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
            d.jspb = String(a);
        });
    }
    return new xl();
}
var ym = L(Qh).h(yh.h, yh.defaultValue);
function zm() {
    var a = J.document;
    a = void 0 === a ? window.document : a;
    Rc(ym, a);
}
var Am = L(Qh).h(zh.h, zh.defaultValue);
function Bm() {
    var a = J.document;
    a = void 0 === a ? window.document : a;
    Rc(Am, a);
}
var Cm = la(['https://pagead2.googlesyndication.com/pagead/js/err_rep.js']);
function Dm() {
    this.h = null;
    this.j = !1;
    this.l = Math.random();
    this.i = this.I;
    this.m = null;
}
aa = Dm.prototype;
aa.Oa = function(a) {
    this.h = a;
};
aa.Qa = function(a) {
    this.j = a;
};
aa.Pa = function(a) {
    this.i = a;
};
aa.I = function(a, b, c, d, e) {
    if ((this.j ? this.l : Math.random()) > (void 0 === c ? 0.01 : c)) return !1;
    md(b) ||
        (b = new ld(b, {
            context: a,
            id: void 0 === e ? 'jserror' : e
        }));
    if (d || this.h)(b.meta = {}), this.h && this.h(b.meta), d && d(b.meta);
    v.google_js_errors = v.google_js_errors || [];
    v.google_js_errors.push(b);
    if (!v.error_rep_loaded) {
        a = fc(Cm);
        var f;
        xc(v.document, null != (f = this.m) ? f : Wb(gc(a).toString()));
        v.error_rep_loaded = !0;
    }
    return !1;
};
aa.ma = function(a, b, c) {
    try {
        var d = b();
    } catch (e) {}
    if (!this.i(a, e, 0.01, c, 'jserror')) throw e;
}
return d;
};
aa.La = function(a, b, c, d) {
    var e = this;
    return function(...args) {
        var f = ta.apply(0, args);
        return e.ma(a, () => b.apply(c, f), d);
    };
};
function Em(a, b, c) {
    var d = window;
    return function(...args) {
        var e = Dd();
        var f = 3;
        try {
            var g = b.apply(this, args);
        } catch (h) {
            f = 13;
            if (c) return c(a, h), g;
            throw h;
        } finally {
            d.google_measure_js_timing &&
                e &&
                ((e = {
                        label: a.toString(),
                        value: e,
                        duration: (Dd() || 0) - e,
                        type: f
                    }),
                    (f = d.google_js_reporting_queue = d.google_js_reporting_queue || []),
                    2048 > f.length && f.push(e));
        }
        return g;
    };
}
function Fm(a, b) {
    return Em(a, b, (c, d) => {
        new Dm().I(c, d);
    });
}
function Gm(a, b) {
    return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
}
function Hm(a, b) {
    return '&' + a + '=' + b.toFixed(3);
}
function Im() {
    var a = new n.Set();
    try {
        if ('undefined' === typeof googletag || !googletag.pubads) return a;
        for (var b = googletag.pubads(), c = q(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId());
    } catch (e) {}
    return a;
}
function Jm(a) {
    a = a.id;
    return null != a && (Im().has(a) || p(a, 'startsWith').call(a, 'google_ads_iframe_') || p(a, 'startsWith').call(a, 'aswift'));
}
function Km(a, b, c) {
    if (!a.sources) return !1;
    var d = R(Dh);
    switch (Lm(a)) {
        case 2:
            var e = Mm(a);
            if (e) return c.some((g) => Nm(e, g, d));
        case 1:
            var f = Om(a);
            if (f) return b.some((g) => Nm(f, g, d));
    }
    return !1;
}
function Lm(a) {
    if (!a.sources) return 0;
    a = a.sources.filter((b) => b.previousRect && b.currentRect);
    if (1 <= a.length) {
        a = a[0];
        if (a.previousRect.top < a.currentRect.top) return 2;
        if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
}
function Om(a) {
    return Pm(a, (b) => b.currentRect);
}
function Mm(a) {
    return Pm(a, (b) => b.previousRect);
}
function Pm(a, b) {
    return a.sources.reduce((c, d) => {
        d = b(d);
        return c ? (d && 0 !== d.width * d.height ? (d.top < c.top ? d : c) : c) : d;
    }, null);
}
function Qm() {
    fj.call(this);
    this.i = this.h = this.O = this.N = this.H = 0;
    this.za = this.wa = Number.NEGATIVE_INFINITY;
    this.sa = this.ua = this.va = this.xa = this.Ca = this.m = this.Ba = this.R = 0;
    this.ta = !1;
    this.P = this.M = this.A = 0;
    var a = document.querySelector('[data-google-query-id]');
    this.Aa = a ? a.getAttribute('data-google-query-id') : null;
    this.l = null;
    this.ya = !1;
    this.ea = () => {};
}
u(Qm, fj);
function Rm() {
    var a = new Qm();
    if (Q(Ah) && !window.google_plmetrics && window.PerformanceObserver) {
        window.google_plmetrics = !0;
        for (var b = q(['layout-shift', 'largest-contentful-paint', 'first-input', 'longtask']), c = b.next(); !c.done; c = b.next())
            (c = c.value),
            Sm(a).observe({
                type: c,
                buffered: !Q(Gh)
            });
        Tm(a);
    }
}
function Sm(a) {
    a.l ||
        (a.l = new PerformanceObserver(
            Fm(640, (b) => {
                var c = Um !== window.scrollX || Vm !== window.scrollY ? [] : Wm;
                var d = Xm();
                b = q(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next())
                    switch (((e = e.value), e.entryType)) {
                        case 'layout-shift':
                            var f = a;
                            if (!e.hadRecentInput && (!Q(Bh) || 0.01 < e.value)) {
                                f.H += Number(e.value);
                                Number(e.value) > f.N && (f.N = Number(e.value));
                                f.O += 1;
                                var g = Km(e, c, d);
                                g && ((f.m += e.value), f.xa++);
                                if (5e3 < e.startTime - f.wa || 1e3 < e.startTime - f.za)(f.wa = e.startTime), (f.h = 0), (f.i = 0);
                                f.za = e.startTime;
                                f.h += e.value;
                                g && (f.i += e.value);
                                f.h > f.R && ((f.R = f.h), (f.Ca = f.i), (f.Ba = e.startTime + e.duration));
                            }
                            break;
                        case 'largest-contentful-paint':
                            a.va = Math.floor(e.renderTime || e.loadTime);
                            a.ua = e.size;
                            break;
                        case 'first-input':
                            a.sa = Number((e.processingStart - e.startTime).toFixed(3));
                            a.ta = !0;
                            break;
                        case 'longtask':
                            (e = Math.max(0, e.duration - 50)), (a.A += e), (a.M = Math.max(a.M, e)), (a.P += 1);
                    }
            })
        ));
    return a.l;
}
function Tm(a) {
    var b = Fm(641, () => {
        var f = document;
        2 ==
            ({
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            } [f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ''] || 0) && Ym(a);
    });
    var c = Fm(641, () => void Ym(a));
    document.addEventListener('visibilitychange', b);
    document.addEventListener('unload', c);
    var d = R(Eh);
    var e;
    0 < d && (e = setTimeout(c, 1e3 * d));
    a.ea = () => {
        document.removeEventListener('visibilitychange', b);
        document.removeEventListener('unload', c);
        Sm(a).disconnect();
        e && clearTimeout(e);
    };
}
Qm.prototype.j = function() {
    fj.prototype.j.call(this);
    this.ea();
};
function Ym(a) {
    if (!a.ya) {
        a.ya = !0;
        Sm(a).takeRecords();
        var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
        window.LayoutShift &&
            ((b += Hm('cls', a.H)),
                (b += Hm('mls', a.N)),
                (b += Gm('nls', a.O)),
                window.LayoutShiftAttribution && ((b += Hm('cas', a.m)), (b += Gm('nas', a.xa))),
                (b += Hm('wls', a.R)),
                (b += Hm('tls', a.Ba)),
                window.LayoutShiftAttribution && (b += Hm('was', a.Ca)));
        window.LargestContentfulPaint && ((b += Gm('lcp', a.va)), (b += Gm('lcps', a.ua)));
        window.PerformanceEventTiming && a.ta && (b += Gm('fid', a.sa));
        window.PerformanceLongTaskTiming && ((b += Gm('cbt', a.A)), (b += Gm('mbt', a.M)), (b += Gm('nlt', a.P)));
        for (var c = 0, d = q(document.getElementsByTagName('iframe')), e = d.next(); !e.done; e = d.next()) Jm(e.value) && c++;
        b += Gm('nif', c);
        b += Gm('ifi', cd(window));
        c = L( of ).h();
        b += '&eid=' + encodeURIComponent(c.join());
        b += '&top=' + (v === v.top ? 1 : 0);
        b += a.Aa ? '&qqid=' + encodeURIComponent(a.Aa) : Gm('pvsid', Sc(v));
        window.googletag && (b += '&gpt=1');
        window.fetch(b, {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors'
        });
        a.v || ((a.v = !0), a.j());
    }
}
function Nm(a, b, c) {
    if (0 === c) return !0;
    var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= d || 0 >= a ? !1 : (100 * d * a) / ((b.right - b.left) * (b.bottom - b.top)) >= c;
}
function Xm() {
    var a = [].concat(ma(document.getElementsByTagName('iframe'))).filter(Jm);
    var b = []
        .concat(ma(Im()))
        .map((c) => document.getElementById(c))
        .filter((c) => null !== c);
    Um = window.scrollX;
    Vm = window.scrollY;
    return (Wm = [].concat(ma(a), ma(b)).map((c) => c.getBoundingClientRect()));
}
var Um = void 0;
var Vm = void 0;
var Wm = [];
function Zm(a) {
    a = void 0 === a ? window : a;
    return !a.PeriodicSyncManager;
}
function $m() {
    var a = void 0 === a ? window : a;
    if ((!Zm(a) && Q(Hh)) || (Zm(a) && Q(Ih))) {
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b;
    }
    return !1;
}
var X = {
    issuerOrigin: 'https://attestation.android.com',
    issuancePath: '/att/i',
    redemptionPath: '/att/r',
    shouldRedeemToken() {
        return $m();
    },
    shouldRequestToken() {
        return $m();
    }
};
var Y = {
    issuerOrigin: 'https://pagead2.googlesyndication.com',
    issuancePath: '/dtt/i',
    redemptionPath: '/dtt/r',
    getStatePath: '/dtt/s',
    shouldRedeemToken() {
        return !0;
    },
    shouldRequestToken() {
        return !0;
    }
};
var an = L(Qh).h(Nh.h, Nh.defaultValue);
function bn(a) {
    a = void 0 === a ? !1 : a;
    fj.call(this);
    var b = this;
    this.h = a;
    a = [];
    $m() && a.push(X);
    Q(Kh) && a.push(Y);
    if (document.hasTrustToken && !Q(Jh) && !Array.isArray(window.goog_tt_state)) {
        var c = a.map((d) => ({
            issuerOrigin: d.issuerOrigin,
            state: b.h ? 1 : 12
        }));
        Object.defineProperty(window, 'goog_tt_state', {
            configurable: !1,
            get() {
                return c.slice();
            }
        });
    }
}
u(bn, fj);
function cn() {
    var a = void 0 === a ? window.document : a;
    Rc(an, a);
}
function dn(a, b) {
    return Q(Lh) || (a && (Q(Oh) || '.google.de' != b)) || '.google.ch' === b || 'function' === typeof J.__tcfapi;
}
function Z(a, b, c) {
    var d = p(window.goog_tt_state, 'find').call(window.goog_tt_state, (e) => e.issuerOrigin === a);
    d && ((d.state = b), void 0 != c && (d.hasRedemptionRecord = c));
}
function en() {
    var a = window.goog_tt_state;
    return Array.isArray(a) && a.some((b) => 1 != b.state);
}
function fn() {
    var a = X.issuerOrigin + X.redemptionPath;
    var b = {
        keepalive: !0,
        trustToken: {
            type: 'token-redemption',
            issuer: X.issuerOrigin,
            refreshPolicy: 'none'
        }
    };
    Z(X.issuerOrigin, 2);
    return window
        .fetch(a, b)
        .then((c) => {
            if (!c.ok) throw Error(c.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 6, !0);
        })
        .catch((c) => {
            c && 'NoModificationAllowedError' === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5);
        });
}
function gn() {
    var a = X.issuerOrigin + X.issuancePath;
    Z(X.issuerOrigin, 8);
    return window
        .fetch(a, {
            keepalive: !0,
            trustToken: {
                type: 'token-request'
            }
        })
        .then((b) => {
            if (!b.ok) throw Error(b.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 10);
            return fn();
        })
        .catch((b) => {
            if (b && 'NoModificationAllowedError' === b.name) return Z(X.issuerOrigin, 10), fn();
            Z(X.issuerOrigin, 9);
        });
}
function hn() {
    Z(X.issuerOrigin, 13);
    return document.hasTrustToken(X.issuerOrigin).then((a) => (a ? fn() : gn()));
}
function jn() {
    Z(Y.issuerOrigin, 13);
    if (n.Promise) {
        var a = document
            .hasTrustToken(Y.issuerOrigin)
            .then((e) => e)
            .catch((e) =>
                n.Promise.reject({
                    state: 19,
                    error: e
                })
            );
        var b = Y.issuerOrigin + Y.redemptionPath;
        var c = {
            keepalive: !0,
            trustToken: {
                type: 'token-redemption',
                refreshPolicy: 'none'
            }
        };
        Z(Y.issuerOrigin, 16);
        a = a
            .then((e) =>
                window
                .fetch(b, c)
                .then((f) => {
                    if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                    Z(Y.issuerOrigin, 18, !0);
                })
                .catch((f) => {
                    if (f && 'NoModificationAllowedError' === f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e)
                            return n.Promise.reject({
                                state: 17,
                                error: f
                            });
                        Z(Y.issuerOrigin, 17);
                    }
                })
            )
            .then(() =>
                document
                .hasTrustToken(Y.issuerOrigin)
                .then((e) => e)
                .catch((e) =>
                    n.Promise.reject({
                        state: 19,
                        error: e
                    })
                )
            )
            .then((e) => {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window
                    .fetch(f + '?ht=' + e, {
                        trustToken: {
                            type: 'send-redemption-record',
                            issuers: [Y.issuerOrigin]
                        }
                    })
                    .then((g) => {
                        if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                        Z(Y.issuerOrigin, 22);
                        return g.text().then((h) => JSON.parse(h));
                    })
                    .catch((g) =>
                        n.Promise.reject({
                            state: 21,
                            error: g
                        })
                    );
            });
        var d = Sc(window);
        return a
            .then((e) => {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ?
                    (Z(Y.issuerOrigin, 23),
                        window
                        .fetch(f + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-request'
                            }
                        })
                        .then((g) => {
                            if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 25);
                            return e;
                        })
                        .catch((g) =>
                            n.Promise.reject({
                                state: 24,
                                error: g
                            })
                        )) :
                    e;
            })
            .then((e) => {
                if (e && e.srdt && e.cs)
                    return (
                        Z(Y.issuerOrigin, 26),
                        window
                        .fetch(b + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-redemption',
                                refreshPolicy: 'refresh'
                            }
                        })
                        .then((f) => {
                            if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 28, !0);
                        })
                        .catch((f) =>
                            n.Promise.reject({
                                state: 27,
                                error: f
                            })
                        )
                    );
            })
            .then(() => {
                Z(Y.issuerOrigin, 29);
            })
            .catch((e) => {
                if (e instanceof Object && e.hasOwnProperty('state') && e.hasOwnProperty('error'))
                    if ('number' === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(Mh);
                        Math.random() <= f &&
                            Zc({
                                    state: e.state,
                                    err: e.error.toString()
                                },
                                'dtt_err'
                            );
                    } else throw Error(e);
                else throw e;
            });
    }
}
function kn(a) {
    if (document.hasTrustToken && !Q(Jh) && a.h) {
        if (en()) return window.goog_tt_promise;
        a = [];
        $m() && a.push(hn());
        Q(Kh) && a.push(jn());
        if (n.Promise && n.Promise.all)
            return (
                (a = n.Promise.all(a)),
                'object' != typeof window.goog_tt_promise &&
                Object.defineProperty(window, 'goog_tt_promise', {
                    configurable: !1,
                    value: a,
                    writable: !1
                }),
                a
            );
    }
}
var ln = 'platform platformVersion architecture model uaFullVersion bitness'.split(' ');
function mn() {
    return J.navigator && J.navigator.userAgentData && 'function' === typeof J.navigator.userAgentData.getHighEntropyValues ?
        J.navigator.userAgentData.getHighEntropyValues(ln).then((a) => {
            var b = new xj();
            b = A(b, 1, a.platform);
            b = A(b, 2, a.platformVersion);
            b = A(b, 3, a.architecture);
            b = A(b, 4, a.model);
            b = A(b, 5, a.uaFullVersion);
            return A(b, 9, a.bitness);
        }) :
        null;
}
function nn(a, b) {
    b.google_ad_host || ((a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute('content')));
}
function on(a, b, c) {
    c = void 0 === c ? '' : c;
    J.google_sa_impl && !J.document.getElementById('google_shimpl') && ((J.google_sa_queue = null), (J.google_sl_win = null), (J.google_sa_impl = null));
    J.google_sa_queue ||
        ((J.google_sa_queue = []),
            (J.google_sl_win = J),
            (J.google_process_slots = tf(215, () => pn(J))),
            (a = qn(c, a, b)),
            (xc(J.document, a).id = 'google_shimpl'));
}
function pn(a) {
    var b = a.google_sa_queue;
    var c = b.shift();
    a.google_sa_impl ||
        uf('shimpl', {
            t: 'no_fn'
        });
    'function' === typeof c && sf(216, c);
    b.length &&
        a.setTimeout(
            tf(215, () => pn(a)),
            0
        );
}
function rn(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
}
function qn(a, b, c) {
    var d = Math.random() < R(lh) ? Wb(gc(b.lb).toString()) : null;
    b = D(c, 4) ? b.kb : b.mb;
    d = d ? d : Wb(gc(b).toString());
    b = {};
    a: {
        if (D(c, 4)) {
            if ((c = a || sn())) {
                var e = {};
                c = ((e.client = c), (e.plah = J.location.host), e);
                break a;
            }
            throw Error('PublisherCodeNotFoundForAma');
        }
        c = {};
    }
    tn(c, b);
    a: {
        if (Q(ih) && (a = a || sn())) {
            c = {};
            a =
                ((c.client = a),
                    (c.plah = J.location.host),
                    (c.ama_t = 'adsense'),
                    (c.asntp = R(Ug)),
                    (c.asntpv = R(Yg)),
                    (c.asntpl = R(Wg)),
                    (c.asntpm = R(Xg)),
                    (c.asntpc = R(Vg)),
                    (c.asna = R(Qg)),
                    (c.asnd = R(Rg)),
                    (c.asnp = R(Sg)),
                    (c.asns = R(Tg)),
                    (c.asmat = R(Pg)),
                    (c.asptt = R(Zg)),
                    (c.easpi = Q(ih)),
                    (c.asro = Q($g)),
                    c);
            break a;
        }
        a = {};
    }
    tn(a, b);
    tn(
        Rh() ? {
            bust: Rh()
        } : {},
        b
    );
    return Tb(d, b);
}
function tn(a, b) {
    Ec(a, (c, d) => {
        void 0 === b[d] && (b[d] = c);
    });
}
function sn() {
    if (J.google_ad_client) return J.google_ad_client;
    var a = U(J).head_tag_slot_vars;
    if (a && a.google_ad_client) return a.google_ad_client;
    if ((a = J.document.querySelector('.adsbygoogle[data-ad-client]'))) return a.getAttribute('data-ad-client');
    b: {
        a = J.document.getElementsByTagName('script');
        var b = (J.navigator && J.navigator.userAgent) || '';
        b =
        RegExp(
            'appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube',
            'i'
        ).test(b) ||
        (/i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !gd()) ?
        tm : um;
        for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            if (!d.google_parsed_script_for_pub_code && ((d.google_parsed_script_for_pub_code = !0), (d = b(d)))) {
                a = d;
                break b;
            }
        }
        a = null;
    }
    if (a) {
        b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        for (c = {};
            (d = b.exec(a));) c[d[1]] = vm(d[2]);
        a = c.google_ad_client ? c.google_ad_client : '';
    } else a = '';
    return a ? a : '';
}
function un(a) {
    a: {
        for (var b = [v.top], c = [], d = 0, e;
            (e = b[d++]);) {
            c.push(e);
            try {
                if (e.frames)
                    for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g]);
            } catch (l) {}
        }
        for (b = 0; b < c.length; b++)
            try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Vc = h;
                    break a;
                }
            } catch (l) {}
        Vc = null;
    }
    if (Vc) return null;
    c = yc('IFRAME');
    c.id = 'google_esf';
    c.name = 'google_esf';
    a = a.rb;
    if (a instanceof bc) {
        var k;
        h = ec(a);
        a = (null === (k = Zb()) || void 0 === k ? 0 : k.isScriptURL(h)) ? TrustedScriptURL.prototype.toString.apply(h) : h;
    } else a = Vb(a).toString();
    c.src = a;
    c.style.display = 'none';
    return c;
}
function vn(a, b, c, d) {
    wn(a, b, c, d, (e, f) => {
        e = e.document;
        for (var g = void 0, h = 0; !g || e.getElementById(g + '_anchor');) g = 'aswift_' + h++;
        e = g;
        g = Number(f.google_ad_width || 0);
        f = Number(f.google_ad_height || 0);
        h = yc('INS');
        h.id = e + '_anchor';
        ok(h, g, f);
        h.style.display = 'block';
        var k = yc('INS');
        k.id = e + '_expand';
        ok(k, g, f);
        k.style.display = 'inline-table';
        k.appendChild(h);
        c.appendChild(k);
        return e;
    });
}
function wn(a, b, c, d, e) {
    var f = e(a, b);
    xn(a, c, b);
    c = Ja;
    e = new Date().getTime();
    b.google_lrv = Eb(d, 2);
    b.google_async_iframe_id = f;
    b.google_start_time = c;
    b.google_bpp = e > c ? e - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[f] = b;
    b.dninfo = b.google_loader_used;
    c = (d = !!a.document.getElementById(f + '_anchor')) ? (h) => h() : (h) => window.setTimeout(h, 0);
    b.dninfo += '_' + d;
    var g = {
        pubWin: a,
        iframeWin: null,
        vars: b
    };
    rn(
        a,
        () => {
            var h = !!a.document.getElementById(f + '_anchor');
            b.dninfo += '_' + h;
            (h = a.google_sa_impl(g)) && h.catch && h.catch(vf(911));
        },
        c
    );
}
function xn(a, b, c) {
    var d = c.google_ad_output;
    var e = c.google_ad_format;
    var f = c.google_ad_width || 0;
    var g = c.google_ad_height || 0;
    e || ('html' != d && null != d) || (e = f + 'x' + g);
    d = !c.google_ad_slot || c.google_override_format || (!pk[c.google_ad_width + 'x' + c.google_ad_height] && 'aa' == c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = '');
    c.google_ad_format = e;
    if ('number' !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
        e = [
            c.google_ad_slot,
            c.google_orig_ad_format || c.google_ad_format,
            c.google_ad_type,
            c.google_orig_ad_width || c.google_ad_width,
            c.google_orig_ad_height || c.google_ad_height
        ];
        d = [];
        f = 0;
        for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push('') : d.push(g.id);
        (d = d.join()) && e.push(d);
        c.google_ad_unit_key = Fc(e.join(':')).toString();
        var h = void 0 === h ? !1 : h;
        e = [];
        for (d = 0; b && 25 > d; ++d) {
            f = '';
            (void 0 !== h && h) || (f = (f = 9 !== b.nodeType && b.id) ? '/' + f : '');
            a: {
                if (b && b.nodeName && b.parentElement) {
                    g = b.nodeName.toString().toLowerCase();
                    for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                        var r = k[m];
                        if (r.nodeName && r.nodeName.toString().toLowerCase() === g) {
                            if (b === r) {
                                g = '.' + l;
                                break a;
                            }
                            ++l;
                        }
                    }
                }
                g = '';
            }
            e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
            b = b.parentElement;
        }
        h = e.join() + ':';
        b = [];
        if (a)
            try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var x = t.frames;
                    for (d = 0; d < x.length; ++d)
                        if (a === x[d]) {
                            b.push(d);
                            break;
                        }
                    a = t;
                    t = a.parent;
                }
            } catch (E) {}
        c.google_ad_dom_fingerprint = Fc(h + b.join()).toString();
    }
}
function yn() {
    var a = hd(v);
    a &&
        ((a = Af(a)),
            a.tagSpecificState[1] ||
            (a.tagSpecificState[1] = {
                debugCard: null,
                debugCardRequested: !1
            }));
}
function zn(a) {
    cn();
    dn(Al(), Eb(a, 8)) ||
        tf(779, () => {
            var b = new bn(!0);
            0 < R(Ph) ? (J.google_trust_token_operation_promise = kn(b)) : kn(b);
        })();
    a = mn();
    null != a &&
        a.then((b) => {
            J.google_user_agent_client_hint = Cb(b);
        });
    Bm();
    zm();
}
function An(a, b) {
    switch (a) {
        case 'google_reactive_ad_format':
            return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
        case 'google_allow_expandable_ads':
            return /^true$/.test(b);
        default:
            return b;
    }
}
function Bn(a, b) {
    if (a.getAttribute('src')) {
        var c = a.getAttribute('src') || '';
        (c = vc(c)) && (b.google_ad_client = An('google_ad_client', c));
    }
    a = a.attributes;
    c = a.length;
    for (var d = 0; d < c; d++) {
        var e = a[d];
        if (/data-/.test(e.name)) {
            var f = Ka(e.name.replace('data-matched-content', 'google_content_recommendation').replace('data', 'google').replace(/-/g, '_'));
            b.hasOwnProperty(f) || ((e = An(f, e.value)), null !== e && (b[f] = e));
        }
    }
}
function Cn(a) {
    if ((a = Wc(a)))
        switch (a.data && a.data.autoFormat) {
            case 'rspv':
                return 13;
            case 'mcrspv':
                return 15;
            default:
                return 14;
        }
    else return 12;
}
function Dn(a, b, c, d) {
    Bn(a, b);
    if (c.document && c.document.body && !Yk(c, b) && !b.google_reactive_ad_format) {
        var e = parseInt(a.style.width, 10);
        var f = bl(a, c);
        if (0 < f && e > f) {
            var g = parseInt(a.style.height, 10);
            e = !!pk[e + 'x' + g];
            var h = f;
            if (e) {
                var k = qk(f, g);
                if (k)(h = k), (b.google_ad_format = k + 'x' + g + '_0ads_al');
                else throw new K('No slot size for availableWidth=' + f);
            }
            b.google_ad_resize = !0;
            b.google_ad_width = h;
            e || ((b.google_ad_format = null), (b.google_override_format = !0));
            f = h;
            a.style.width = f + 'px';
            g = Sk(f, 'auto', c, a, b);
            h = f;
            g.size().i(c, b, a);
            uk(g, h, b);
            g = g.size();
            b.google_responsive_formats = null;
            g.minWidth() > f && !e && ((b.google_ad_width = g.minWidth()), (a.style.width = g.minWidth() + 'px'));
        }
    }
    e = a.offsetWidth || hi(a, c, 'width', I) || b.google_ad_width || 0;
    f = Ga(Sk, e, 'auto', c, a, b, !1, !0);
    !(g = Q(gh) || (!(488 > Cf(c)) && !Q(oh))) &&
    (g = Q(qh)) &&
    ((g = c.top == c), g || (wc(c.top) && c.top ? (b.gfwrnwer = 3) : (b.gfwrnwer = 16), (g = !1)), (g = !g));
    if (g) d = !1;
    else {
        g = hd(c) || c;
        h = b.google_ad_client;
        d =
            g.location && '#ftptohbh' === g.location.hash ?
            2 :
            ak(g.location, 'google_responsive_slot_preview') || Q(ph) ?
            1 :
            Q(nh) ?
            2 :
            Cl(g, 1, h, d) ?
            1 :
            0;
        if ((g = 0 !== d))
            b: if (b.google_reactive_ad_format || Yk(c, b) || Yh(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = zc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b;
                    }
                    if (!$a(['static', 'relative'], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b;
                    }
                }
                if (!Q(oh) && ((g = bi(c, a, e, 0.3, b)), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b;
                }
                g = c.top == c ? !0 : !1;
            }
        g
            ?
            ((b.google_resizing_allowed = !0),
                (b.ovlp = !0),
                2 === d ?
                ((d = {}),
                    uk(f(), e, d),
                    (b.google_resizing_width = d.google_ad_width),
                    (b.google_resizing_height = d.google_ad_height),
                    (b.iaaso = !1)) :
                ((b.google_ad_format = 'auto'), (b.iaaso = !0), (b.armr = 1)),
                (d = !0)) :
            (d = !1);
    }
    if ((e = Yk(c, b))) $k(e, a, b, c, d);
    else {
        if (Yh(a, b)) {
            if ((d = zc(a, c)))(a.style.width = d.width), (a.style.height = d.height), Xh(d, b);
            b.google_ad_width || (b.google_ad_width = a.offsetWidth);
            b.google_ad_height || (b.google_ad_height = a.offsetHeight);
            b.google_loader_features_used = 256;
            b.google_responsive_auto_format = Cn(c);
        } else Xh(a.style, b);
        (c.location && '#gfwmrp' == c.location.hash) || (12 == b.google_responsive_auto_format && 'true' == b.google_full_width_responsive) ?
        $k(10, a, b, c, !1): 0.01 > Math.random() &&
            12 === b.google_responsive_auto_format &&
            ((a = ci(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b)),
                !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
}
function En(a) {
    var b = window;
    var c = void 0 === c ? null : c;
    kc(b, 'message', (d) => {
        try {
            var e = JSON.parse(d.data);
        } catch (f) {
            return;
        }!e || 'sc-cnf' !== e.googMsgType || (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) || a(e, d);
    });
}
function Fn(a, b) {
    b = void 0 === b ? 500 : b;
    fj.call(this);
    this.i = a;
    this.Ra = b;
    this.h = null;
    this.m = {};
    this.l = null;
}
u(Fn, fj);
Fn.prototype.j = function() {
    this.m = {};
    this.l && (lc(this.i, this.l), delete this.l);
    delete this.m;
    delete this.i;
    delete this.h;
    fj.prototype.j.call(this);
};
function Gn(a) {
    fj.call(this);
    this.h = a;
    this.i = null;
    this.l = !1;
}
u(Gn, fj);
var Hn = null;
var In = [];
var Jn = new n.Map();
var Kn = -1;
function Ln(a) {
    return pi.test(a.className) && 'done' != a.dataset.adsbygoogleStatus;
}
function Mn(a, b, c) {
    a.dataset.adsbygoogleStatus = 'done';
    Nn(a, b, c);
}
function Nn(a, b, c) {
    var d = window;
    var e = fd();
    e.google_spfd || (e.google_spfd = Dn);
    (e = b.google_reactive_ads_config) || Dn(a, b, d, c);
    nn(d, b);
    if (!On(a, b, d)) {
        e || (d.google_lpabyc = Zh(a, d) + hi(a, d, 'height', I));
        if (e) {
            e = e.page_level_pubvars || {};
            if (U(J).page_contains_reactive_tag && !U(J).allow_second_reactive_tag) {
                if (e.pltais) {
                    Yj(!1);
                    return;
                }
                throw new K("Only one 'enable_page_level_ads' allowed per page.");
            }
            U(J).page_contains_reactive_tag = !0;
            Yj(7 === e.google_pgb_reactive);
        }
        b.google_unique_id = bd(d);
        Ec(sm, (f, g) => {
            b[g] = b[g] || d[g];
        });
        b.google_loader_used = 'aa';
        b.google_reactive_tag_first = 1 === (U(J).first_tag_on_page || 0);
        sf(164, () => {
            vn(d, b, a, c);
        });
    }
}
function On(a, b, c) {
    var d = b.google_reactive_ads_config;
    var e = 'string' === typeof a.className && RegExp('(\\W|^)adsbygoogle-noablate(\\W|$)').test(a.className);
    var f = Vj(c);
    if (f && f.Da && 'on' != b.google_adtest && !e) {
        e = Zh(a, c);
        var g = Bf(c).clientHeight;
        if (!f.oa || (f.oa && ((0 == g ? null : e / g) || 0) >= f.oa))
            return (
                (a.className += ' adsbygoogle-ablated-ad-slot'),
                (c = c.google_sv_map = c.google_sv_map || {}),
                (d = Aa(a)),
                (b.google_element_uid = d),
                (c[b.google_element_uid] = b),
                a.setAttribute('google_element_uid', d),
                'slot' == f.ob &&
                (null !== Lc(a.getAttribute('width')) && a.setAttribute('width', 0),
                    null !== Lc(a.getAttribute('height')) && a.setAttribute('height', 0),
                    (a.style.width = '0px'),
                    (a.style.height = '0px')),
                !0
            );
    }
    if ((f = zc(a, c)) && 'none' == f.display && !('on' == b.google_adtest || 0 < b.google_reactive_ad_format || d))
        return c.document.createComment && a.appendChild(c.document.createComment('No ad requested because of display:none on the adsbygoogle tag')), !0;
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format) || !a ?
        !1 :
        (v.console &&
            v.console.warn(
                'Adsbygoogle tag with data-reactive-ad-format=' +
                b.google_reactive_ad_format +
                ' is deprecated. Check out page-level ads at https://www.google.com/adsense'
            ),
            !0);
}
function Pn(a) {
    var b = document.getElementsByTagName('INS');
    for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
        var e = d;
        if (Ln(e) && 'reserved' != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d;
    }
    return null;
}
function Qn(a, b, c) {
    if (a && a.shift)
        for (var d = 20; 0 < a.length && 0 < d;) {
            try {
                Rn(a.shift(), b, c);
            } catch (e) {
                setTimeout(() => {
                    throw e;
                });
            }
            --d;
        }
}
function Sn() {
    var a = yc('INS');
    a.className = 'adsbygoogle';
    a.className += ' adsbygoogle-noablate';
    Oc(a);
    return a;
}
function Tn(a, b) {
    var c = {};
    Ec(xf, (f, g) => {
        !1 === a.enable_page_level_ads ? (c[g] = !1) : a.hasOwnProperty(g) && (c[g] = a[g]);
    });
    za(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
    var d = Sn();
    Uc.body.appendChild(d);
    var e = {};
    e = ((e.google_reactive_ads_config = c), (e.google_ad_client = a.google_ad_client), e);
    e.google_pause_ad_requests = !!U(J).pause_ad_requests;
    Mn(d, e, b);
}
function Un(a, b) {
    function c() {
        return Tn(a, b);
    }
    Af(v).wasPlaTagProcessed = !0;
    var d = v.document;
    if (d.body || 'complete' == d.readyState || 'interactive' == d.readyState) c();
    else {
        var e = jc(tf(191, c));
        kc(d, 'DOMContentLoaded', e);
        new v.MutationObserver((f, g) => {
            d.body && (e(), g.disconnect());
        }).observe(d, {
            childList: !0,
            subtree: !0
        });
    }
}
function Rn(a, b, c) {
    var d = {};
    sf(
        165,
        () => {
            Vn(a, d, b, c);
        },
        (e) => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin;
        }
    );
}
function Wn(a) {
    delete a.google_checked_head;
    Ec(a, (b, c) => {
        oi[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace('google', 'data').replace(/_/g, '-') + ' attribute.'));
    });
}
function Xn(a, b) {
    var c =
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') ||
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
    if (c) {
        c.setAttribute('data-checked-head', 'true');
        var d = U(window);
        if (d.head_tag_slot_vars) {
            if (Q(kh)) {
                Yn(c);
                return;
            }
            throw new K('Only one AdSense head tag supported per page. The second tag is ignored.');
        }
        var e = {};
        Bn(c, e);
        Wn(e);
        var f = Pb(e);
        d.head_tag_slot_vars = f;
        c = {
            google_ad_client: e.google_ad_client,
            enable_page_level_ads: e
        };
        J.adsbygoogle || (J.adsbygoogle = []);
        d = J.adsbygoogle;
        d.loaded ? d.push(c) : d.splice(0, 0, c);
        var g;
        e.google_adbreak_test || ((null == (g = Gb(b, ll, 13, yl)) ? 0 : D(g, 3)) && Q(uh)) ?
            Zn(f, a) :
            En(() => {
                Zn(f, a);
            });
    }
}
function Yn(a) {
    var b = U(window).head_tag_slot_vars;
    var c = a.getAttribute('src') || '';
    if ((a = vc(c) || a.getAttribute('data-ad-client') || '') && a !== b.google_ad_client)
        throw new K(
            'Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page ' +
            a +
            ', ' +
            b.google_ad_client
        );
}
function $n(a) {
    if ('object' === typeof a && null != a) {
        if ('string' === typeof a.type) return 2;
        if ('string' === typeof a.sound || 'string' === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
}
function Vn(a, b, c, d) {
    if (null == a) throw new K('push() called with no parameters.');
    14 === xb(d, yl) && ao(a, sb(Gb(d, ml, 14, yl), 1), Eb(d, 2));
    var e = $n(a);
    if (0 !== e)
        Q(jh) &&
        ((d = Zj()),
            d.first_slotcar_request_processing_time || ((d.first_slotcar_request_processing_time = Date.now()), (d.adsbygoogle_execution_start_time = Ja))),
        null == Hn ?
        (bo(a), In.push(a)) :
        3 === e ?
        sf(787, () => {
            Hn.handleAdConfig(a);
        }) :
        Hn.handleAdBreak(a).catch(vf(730));
    else {
        Ja = new Date().getTime();
        on(c, d, co(a));
        eo();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ('string' === typeof a.google_ad_client) {
                    e = !0;
                    break a;
                }
                throw new K("'google_ad_client' is missing from the tag config.");
            }
            e = !1;
        }
        if (e) fo(a, d, b);
        else if (
            ((e = a.params) &&
                Ec(e, (g, h) => {
                    b[h] = g;
                }),
                'js' === b.google_ad_output)
        )
            console.warn(
                "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
            );
        else {
            e = go(a.element);
            Bn(e, b);
            c = U(v).head_tag_slot_vars || {};
            Ec(c, (g, h) => {
                b.hasOwnProperty(h) || (b[h] = g);
            });
            if (e.hasAttribute('data-require-head') && !U(v).head_tag_slot_vars)
                throw new K(
                    "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
                );
            if (!b.google_ad_client) throw new K('Ad client is missing from the slot.');
            b.google_apsail = Il(b.google_ad_client);
            var f = (c = 0 === (U(J).first_tag_on_page || 0) && hk(b)) && ik(c);
            c && !f && (fo(c, d), (U(J).skip_next_reactive_tag = !0));
            0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 2);
            b.google_pause_ad_requests = !!U(J).pause_ad_requests;
            Mn(e, b, d);
            c && f && ho(c);
        }
    }
}
var io = !1;
function ao(a, b, c) {
    Q(hh) &&
        !io &&
        ((io = !0),
            (a = co(a)) || (a = sn()),
            uf(
                'predictive_abg', {
                    a_c: a,
                    p_c: b,
                    b_v: c
                },
                0.01
            ));
}
function co(a) {
    return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : '';
}
function eo() {
    if (Q(ch)) {
        var a = Vj(J);
        if (!(a = a && a.Da)) {
            try {
                var b = J.localStorage;
            } catch (c) {
                b = null;
            }
            b = b ? Ti(b) : null;
            a = !(b && Qj(b) && b);
        }
        a || Xj(J, 1);
    }
}
function ho(a) {
    Tc(() => {
        Af(v).wasPlaTagProcessed || (v.adsbygoogle && v.adsbygoogle.push(a));
    });
}
function fo(a, b, c) {
    U(J).skip_next_reactive_tag ?
        (U(J).skip_next_reactive_tag = !1) :
        (0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 1),
            c && a.tag_partner && (Wj(v, a.tag_partner), Wj(c, a.tag_partner)),
            (c = D(b, 6)),
            U(J).ama_ran_on_page || kk(new jk(a, c)),
            Un(a, b));
}
function go(a) {
    if (a) {
        if (!Ln(a) && (a.id ? (a = Pn(a.id)) : (a = null), !a)) throw new K("'element' has already been filled.");
        if (!('innerHTML' in a)) throw new K("'element' is not a good DOM element.");
    } else if (((a = Pn()), !a)) throw new K('All ins elements in the DOM with class=adsbygoogle already have ads in them.');
    return a;
}
function jo() {
    var a = new hj(J);
    var b = new Fn(J);
    var c = new Gn(J);
    var d = J.__cmp ? 1 : 0;
    a = ij(a) ? 1 : 0;
    var e;
    var f;
    (f = 'function' === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) ||
    (b.h ? (b = b.h) : ((b.h = Mc(b.i, '__uspapiLocator')), (b = b.h)), (f = null != b));
    c.l || (c.i || (c.i = c.h.googlefc ? c.h : Mc(c.h, 'googlefcPresent')), (c.l = !0));
    uf(
        'cmpMet', {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        },
        R(Ng)
    );
}
function ko(a) {
    a = {
        value: D(a, 16)
    };
    var b = 0.01;
    R(eh) && ((a.eid = R(eh)), (b = 1));
    a.frequency = b;
    uf('new_abg_tag', a, b);
}
function lo(a) {
    Xi().S[Zi(26)] = !!Number(a);
}
function mo(a) {
    Number(a) ?
        (U(J).pause_ad_requests = !0) :
        ((U(J).pause_ad_requests = !1),
            (a = () => {
                if (!U(J).pause_ad_requests)
                    if (Q(xh)) {
                        var b = void 0 === b ? {} : b;
                        if ('function' === typeof window.CustomEvent) var c = new CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', b);
                        else
                            (c = document.createEvent('CustomEvent')),
                            c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !!b.bubbles, !!b.cancelable, b.detail);
                        J.dispatchEvent(c);
                    } else {
                        b = fd();
                        var d = fd();
                        try {
                            if (Uc.createEvent)
                                (c = Uc.createEvent('CustomEvent')),
                                c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !1, !1, ''),
                                b.dispatchEvent(c);
                            else if (ad(d.CustomEvent)) {
                                var e = new d.CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: ''
                                });
                                b.dispatchEvent(e);
                            } else if (ad(d.Event)) {
                                var f = new Event('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1
                                });
                                b.dispatchEvent(f);
                            }
                        } catch (g) {}
                    }
            }),
            v.setTimeout(a, 0),
            v.setTimeout(a, 1e3));
}
function no(a) {
    uf(
        'adsenseGfpKnob', {
            value: a,
            ptt: 9
        },
        0.1
    );
    switch (a) {
        case 0:
        case 2:
            a = !0;
            break;
        case 1:
            a = !1;
            break;
        default:
            throw Error('Illegal value of cookieOptions: ' + a);
    }
    J._gfp_a_ = a;
}
function oo(a) {
    ad(a) && window.setTimeout(a, 0);
}
function Zn(a, b) {
    ((ba = fk(
                Tb(
                    Wb(gc(b.nb).toString()),
                    Rh() ? {
                        bust: Rh()
                    } : {}
                )
            )
            .then((c) => {
                null == Hn && (c.init(a), (Hn = c), po());
            })
            .catch(vf(723))),
        p(ba, 'finally')).call(ba, () => {
        In.length = 0;
        uf('slotcar', {
            event: 'api_ld',
            time: Date.now() - Ja,
            time_pr: Date.now() - Kn
        });
    });
}
function po() {
    for (var a = q(p(Jn, 'keys').call(Jn)), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = Jn.get(b); -
        1 !== c && (v.clearTimeout(c), Jn.delete(b));
    }
    a = {};
    for (
        b = 0; b < In.length; a = {
            da: a.da,
            Y: a.Y
        },
        b++
    )
        Jn.has(b) ||
        ((a.Y = In[b]),
            (a.da = $n(a.Y)),
            sf(
                723,
                ((d) => () => {
                    3 === d.da ? Hn.handleAdConfig(d.Y) : 2 === d.da && Hn.handleAdBreakBeforeReady(d.Y).catch(vf(730));
                })(a)
            ));
}
function bo(a) {
    var b = In.length;
    if (2 === $n(a) && 'preroll' === a.type && null != a.adBreakDone) {
        -1 === Kn && (Kn = Date.now());
        var c = v.setTimeout(() => {
            try {
                (0, a.adBreakDone)({
                    breakType: 'preroll',
                    breakName: a.name,
                    breakFormat: 'preroll',
                    breakStatus: 'timeout'
                }),
                Jn.set(b, -1),
                    uf('slotcar', {
                        event: 'pr_to',
                        source: 'adsbygoogle'
                    });
            } catch (d) {
                console.error('[Ad Placement API] adBreakDone callback threw an error:', d instanceof Error ? d : Error(String(d)));
            }
        }, 1e3 * R(vh));
        Jn.set(b, c);
    }
}
((a, b, c, d) => {
    d = void 0 === d ? () => {} : d;
    qf.Pa(wf);
    sf(166, () => {
        var e = xm(b);
        pm(Eb(e, 2));
        Bl(D(e, 6));
        d();
        kd(16, [1, e.toJSON()]);
        var f = Xc(Wc(J)) || J;
        var g = c(
            qm({
                $a: a,
                jb: Eb(e, 2)
            }),
            e
        );
        Q(mh) && Fl(f, e);
        om(f, e, null === J.document.currentScript ? 1 : Ol(g.qb));
        if ((!Qa() || 0 <= La(Ta(), 11)) && (null == (J.Prototype || {}).Version || !Q(fh))) {
            rf(Q(Ch));
            zn(e);
            Gj();
            try {
                Rm();
            } catch (r) {}
            yn();
            Xn(g, e);
            f = window;
            var h = f.adsbygoogle;
            if (!h || !h.loaded) {
                if (Q(dh) && !D(e, 16))
                    try {
                        if (J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return;
                    } catch (r) {}
                ko(e);
                R(Ng) && jo();
                var k = {
                    push(r) {
                        Rn(r, g, e);
                    },
                    loaded: !0
                };
                try {
                    Object.defineProperty(k, 'requestNonPersonalizedAds', {
                            set: lo
                        }),
                        Object.defineProperty(k, 'pauseAdRequests', {
                            set: mo
                        }),
                        Object.defineProperty(k, 'cookieOptions', {
                            set: no
                        }),
                        Object.defineProperty(k, 'onload', {
                            set: oo
                        });
                } catch (r) {}
                if (h)
                    for (var l = q(['requestNonPersonalizedAds', 'pauseAdRequests', 'cookieOptions']), m = l.next(); !m.done; m = l.next())
                        (m = m.value), void 0 !== h[m] && (k[m] = h[m]);
                '_gfp_a_' in window || (window._gfp_a_ = !0);
                Qn(h, g, e);
                f.adsbygoogle = k;
                h && (k.onload = h.onload);
                (f = un(g)) && document.documentElement.appendChild(f);
            }
        }
    });
})('m202111110101', wm, (a, b) => {
    var c = 2012 < C(b, 1, 0) ? '_fy' + C(b, 1, 0) : '';
    var d = Eb(b, 3);
    b = Eb(b, 2);
    var e = a ? fc(cl, a, c) : fc(dl, b, d, c);
    var f = fc(el, b, d);
    return {
        nb: e,
        mb: a ? fc(fl, a, c) : fc(gl, b, d, c),
        kb: a ? fc(hl, a, c) : fc(il, b, d, c),
        lb: a ? fc(jl, a, c) : fc(kl, b, d, c),
        rb: f,
        qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
    };
});
}.call(
this,
'[2019,"r20211111","r20190131",null,[],null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1096,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1101,null,null,[1]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1118,null,null,[1]],[230,null,null,[1]],[1124,null,null,[1]],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[1956,null,null,[1]],[379841917,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]],[393546021,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[50,[[44754331],[44754332,[[1090,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44754315,[[null,1103,null,[null,44754315]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,1000]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[10,[[31063693],[31063694,[[null,57,null,[null,30]]]],[31063695,[[null,57,null,[null,60]]]],[31063696,[[null,57,null,[null,90]]]]]],[100,[[31063735],[31063736,[[1053,null,null,[1]]]]]],[50,[[31063737],[31063738,[[1096,null,null,[]]]]]],[1000,[[31063759,[[null,null,14,[null,null,"31063759"]]],[6,null,null,null,6,null,"31063759"]],[31063760,[[null,null,14,[null,null,"31063760"]]],[6,null,null,null,6,null,"31063760"]]],[4,null,55]],[1000,[[31063781,[[null,null,14,[null,null,"31063781"]]],[6,null,null,null,6,null,"31063781"]],[31063782,[[null,null,14,[null,null,"31063782"]]],[6,null,null,null,6,null,"31063782"]]],[4,null,55]],[100,[[31063792],[31063793,[[1125,null,null,[1]]]]]],[1000,[[31063796,[[null,null,14,[null,null,"31063796"]]],[6,null,null,null,6,null,"31063796"]],[31063797,[[null,null,14,[null,null,"31063797"]]],[6,null,null,null,6,null,"31063797"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44755656],[44755657]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[500,[[31063741,null,[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[1,[[31063150]],[4,null,63]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]]],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,"Chrome/(9[3456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[],null,null,null,null,706409994]'
));
function dn(a, b) {
    return Q(Lh) || (a && (Q(Oh) || '.google.de' != b)) || '.google.ch' === b || 'function' === typeof J.__tcfapi;
}
function Z(a, b, c) {
    var d = p(window.goog_tt_state, 'find').call(window.goog_tt_state, (e) => e.issuerOrigin === a);
    d && ((d.state = b), void 0 != c && (d.hasRedemptionRecord = c));
}
function en() {
    var a = window.goog_tt_state;
    return Array.isArray(a) && a.some((b) => 1 != b.state);
}
function fn() {
    var a = X.issuerOrigin + X.redemptionPath;
    var b = {
        keepalive: !0,
        trustToken: {
            type: 'token-redemption',
            issuer: X.issuerOrigin,
            refreshPolicy: 'none'
        }
    };
    Z(X.issuerOrigin, 2);
    return window
        .fetch(a, b)
        .then((c) => {
            if (!c.ok) throw Error(c.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 6, !0);
        })
        .catch((c) => {
            c && 'NoModificationAllowedError' === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5);
        });
}
function gn() {
    var a = X.issuerOrigin + X.issuancePath;
    Z(X.issuerOrigin, 8);
    return window
        .fetch(a, {
            keepalive: !0,
            trustToken: {
                type: 'token-request'
            }
        })
        .then((b) => {
            if (!b.ok) throw Error(b.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 10);
            return fn();
        })
        .catch((b) => {
            if (b && 'NoModificationAllowedError' === b.name) return Z(X.issuerOrigin, 10), fn();
            Z(X.issuerOrigin, 9);
        });
}
function hn() {
    Z(X.issuerOrigin, 13);
    return document.hasTrustToken(X.issuerOrigin).then((a) => (a ? fn() : gn()));
}
function jn() {
    Z(Y.issuerOrigin, 13);
    if (n.Promise) {
        var a = document
            .hasTrustToken(Y.issuerOrigin)
            .then((e) => e)
            .catch((e) =>
                n.Promise.reject({
                    state: 19,
                    error: e
                })
            );
        var b = Y.issuerOrigin + Y.redemptionPath;
        var c = {
            keepalive: !0,
            trustToken: {
                type: 'token-redemption',
                refreshPolicy: 'none'
            }
        };
        Z(Y.issuerOrigin, 16);
        a = a
            .then((e) =>
                window
                .fetch(b, c)
                .then((f) => {
                    if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                    Z(Y.issuerOrigin, 18, !0);
                })
                .catch((f) => {
                    if (f && 'NoModificationAllowedError' === f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e)
                            return n.Promise.reject({
                                state: 17,
                                error: f
                            });
                        Z(Y.issuerOrigin, 17);
                    }
                })
            )
            .then(() =>
                document
                .hasTrustToken(Y.issuerOrigin)
                .then((e) => e)
                .catch((e) =>
                    n.Promise.reject({
                        state: 19,
                        error: e
                    })
                )
            )
            .then((e) => {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window
                    .fetch(f + '?ht=' + e, {
                        trustToken: {
                            type: 'send-redemption-record',
                            issuers: [Y.issuerOrigin]
                        }
                    })
                    .then((g) => {
                        if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                        Z(Y.issuerOrigin, 22);
                        return g.text().then((h) => JSON.parse(h));
                    })
                    .catch((g) =>
                        n.Promise.reject({
                            state: 21,
                            error: g
                        })
                    );
            });
        var d = Sc(window);
        return a
            .then((e) => {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ?
                    (Z(Y.issuerOrigin, 23),
                        window
                        .fetch(f + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-request'
                            }
                        })
                        .then((g) => {
                            if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 25);
                            return e;
                        })
                        .catch((g) =>
                            n.Promise.reject({
                                state: 24,
                                error: g
                            })
                        )) :
                    e;
            })
            .then((e) => {
                if (e && e.srdt && e.cs)
                    return (
                        Z(Y.issuerOrigin, 26),
                        window
                        .fetch(b + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-redemption',
                                refreshPolicy: 'refresh'
                            }
                        })
                        .then((f) => {
                            if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 28, !0);
                        })
                        .catch((f) =>
                            n.Promise.reject({
                                state: 27,
                                error: f
                            })
                        )
                    );
            })
            .then(() => {
                Z(Y.issuerOrigin, 29);
            })
            .catch((e) => {
                if (e instanceof Object && e.hasOwnProperty('state') && e.hasOwnProperty('error'))
                    if ('number' === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(Mh);
                        Math.random() <= f &&
                            Zc({
                                    state: e.state,
                                    err: e.error.toString()
                                },
                                'dtt_err'
                            );
                    } else throw Error(e);
                else throw e;
            });
    }
}
function kn(a) {
    if (document.hasTrustToken && !Q(Jh) && a.h) {
        if (en()) return window.goog_tt_promise;
        a = [];
        $m() && a.push(hn());
        Q(Kh) && a.push(jn());
        if (n.Promise && n.Promise.all)
            return (
                (a = n.Promise.all(a)),
                'object' != typeof window.goog_tt_promise &&
                Object.defineProperty(window, 'goog_tt_promise', {
                    configurable: !1,
                    value: a,
                    writable: !1
                }),
                a
            );
    }
}
var ln = 'platform platformVersion architecture model uaFullVersion bitness'.split(' ');
function mn() {
    return J.navigator && J.navigator.userAgentData && 'function' === typeof J.navigator.userAgentData.getHighEntropyValues ?
        J.navigator.userAgentData.getHighEntropyValues(ln).then((a) => {
            var b = new xj();
            b = A(b, 1, a.platform);
            b = A(b, 2, a.platformVersion);
            b = A(b, 3, a.architecture);
            b = A(b, 4, a.model);
            b = A(b, 5, a.uaFullVersion);
            return A(b, 9, a.bitness);
        }) :
        null;
}
function nn(a, b) {
    b.google_ad_host || ((a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute('content')));
}
function on(a, b, c) {
    c = void 0 === c ? '' : c;
    J.google_sa_impl && !J.document.getElementById('google_shimpl') && ((J.google_sa_queue = null), (J.google_sl_win = null), (J.google_sa_impl = null));
    J.google_sa_queue ||
        ((J.google_sa_queue = []),
            (J.google_sl_win = J),
            (J.google_process_slots = tf(215, () => pn(J))),
            (a = qn(c, a, b)),
            (xc(J.document, a).id = 'google_shimpl'));
}
function pn(a) {
    var b = a.google_sa_queue;
    var c = b.shift();
    a.google_sa_impl ||
        uf('shimpl', {
            t: 'no_fn'
        });
    'function' === typeof c && sf(216, c);
    b.length &&
        a.setTimeout(
            tf(215, () => pn(a)),
            0
        );
}
function rn(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
}
function qn(a, b, c) {
    var d = Math.random() < R(lh) ? Wb(gc(b.lb).toString()) : null;
    b = D(c, 4) ? b.kb : b.mb;
    d = d ? d : Wb(gc(b).toString());
    b = {};
    a: {
        if (D(c, 4)) {
            if ((c = a || sn())) {
                var e = {};
                c = ((e.client = c), (e.plah = J.location.host), e);
                break a;
            }
            throw Error('PublisherCodeNotFoundForAma');
        }
        c = {};
    }
    tn(c, b);
    a: {
        if (Q(ih) && (a = a || sn())) {
            c = {};
            a =
                ((c.client = a),
                    (c.plah = J.location.host),
                    (c.ama_t = 'adsense'),
                    (c.asntp = R(Ug)),
                    (c.asntpv = R(Yg)),
                    (c.asntpl = R(Wg)),
                    (c.asntpm = R(Xg)),
                    (c.asntpc = R(Vg)),
                    (c.asna = R(Qg)),
                    (c.asnd = R(Rg)),
                    (c.asnp = R(Sg)),
                    (c.asns = R(Tg)),
                    (c.asmat = R(Pg)),
                    (c.asptt = R(Zg)),
                    (c.easpi = Q(ih)),
                    (c.asro = Q($g)),
                    c);
            break a;
        }
        a = {};
    }
    tn(a, b);
    tn(
        Rh() ? {
            bust: Rh()
        } : {},
        b
    );
    return Tb(d, b);
}
function tn(a, b) {
    Ec(a, (c, d) => {
        void 0 === b[d] && (b[d] = c);
    });
}
function sn() {
    if (J.google_ad_client) return J.google_ad_client;
    var a = U(J).head_tag_slot_vars;
    if (a && a.google_ad_client) return a.google_ad_client;
    if ((a = J.document.querySelector('.adsbygoogle[data-ad-client]'))) return a.getAttribute('data-ad-client');
    b: {
        a = J.document.getElementsByTagName('script');
        var b = (J.navigator && J.navigator.userAgent) || '';
        b =
        RegExp(
            'appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube',
            'i'
        ).test(b) ||
        (/i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !gd()) ?
        tm : um;
        for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            if (!d.google_parsed_script_for_pub_code && ((d.google_parsed_script_for_pub_code = !0), (d = b(d)))) {
                a = d;
                break b;
            }
        }
        a = null;
    }
    if (a) {
        b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        for (c = {};
            (d = b.exec(a));) c[d[1]] = vm(d[2]);
        a = c.google_ad_client ? c.google_ad_client : '';
    } else a = '';
    return a ? a : '';
}
function un(a) {
    a: {
        for (var b = [v.top], c = [], d = 0, e;
            (e = b[d++]);) {
            c.push(e);
            try {
                if (e.frames)
                    for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g]);
            } catch (l) {}
        }
        for (b = 0; b < c.length; b++)
            try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Vc = h;
                    break a;
                }
            } catch (l) {}
        Vc = null;
    }
    if (Vc) return null;
    c = yc('IFRAME');
    c.id = 'google_esf';
    c.name = 'google_esf';
    a = a.rb;
    if (a instanceof bc) {
        var k;
        h = ec(a);
        a = (null === (k = Zb()) || void 0 === k ? 0 : k.isScriptURL(h)) ? TrustedScriptURL.prototype.toString.apply(h) : h;
    } else a = Vb(a).toString();
    c.src = a;
    c.style.display = 'none';
    return c;
}
function vn(a, b, c, d) {
    wn(a, b, c, d, (e, f) => {
        e = e.document;
        for (var g = void 0, h = 0; !g || e.getElementById(g + '_anchor');) g = 'aswift_' + h++;
        e = g;
        g = Number(f.google_ad_width || 0);
        f = Number(f.google_ad_height || 0);
        h = yc('INS');
        h.id = e + '_anchor';
        ok(h, g, f);
        h.style.display = 'block';
        var k = yc('INS');
        k.id = e + '_expand';
        ok(k, g, f);
        k.style.display = 'inline-table';
        k.appendChild(h);
        c.appendChild(k);
        return e;
    });
}
function wn(a, b, c, d, e) {
    var f = e(a, b);
    xn(a, c, b);
    c = Ja;
    e = new Date().getTime();
    b.google_lrv = Eb(d, 2);
    b.google_async_iframe_id = f;
    b.google_start_time = c;
    b.google_bpp = e > c ? e - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[f] = b;
    b.dninfo = b.google_loader_used;
    c = (d = !!a.document.getElementById(f + '_anchor')) ? (h) => h() : (h) => window.setTimeout(h, 0);
    b.dninfo += '_' + d;
    var g = {
        pubWin: a,
        iframeWin: null,
        vars: b
    };
    rn(
        a,
        () => {
            var h = !!a.document.getElementById(f + '_anchor');
            b.dninfo += '_' + h;
            (h = a.google_sa_impl(g)) && h.catch && h.catch(vf(911));
        },
        c
    );
}
function xn(a, b, c) {
    var d = c.google_ad_output;
    var e = c.google_ad_format;
    var f = c.google_ad_width || 0;
    var g = c.google_ad_height || 0;
    e || ('html' != d && null != d) || (e = f + 'x' + g);
    d = !c.google_ad_slot || c.google_override_format || (!pk[c.google_ad_width + 'x' + c.google_ad_height] && 'aa' == c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = '');
    c.google_ad_format = e;
    if ('number' !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
        e = [
            c.google_ad_slot,
            c.google_orig_ad_format || c.google_ad_format,
            c.google_ad_type,
            c.google_orig_ad_width || c.google_ad_width,
            c.google_orig_ad_height || c.google_ad_height
        ];
        d = [];
        f = 0;
        for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push('') : d.push(g.id);
        (d = d.join()) && e.push(d);
        c.google_ad_unit_key = Fc(e.join(':')).toString();
        var h = void 0 === h ? !1 : h;
        e = [];
        for (d = 0; b && 25 > d; ++d) {
            f = '';
            (void 0 !== h && h) || (f = (f = 9 !== b.nodeType && b.id) ? '/' + f : '');
            a: {
                if (b && b.nodeName && b.parentElement) {
                    g = b.nodeName.toString().toLowerCase();
                    for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                        var r = k[m];
                        if (r.nodeName && r.nodeName.toString().toLowerCase() === g) {
                            if (b === r) {
                                g = '.' + l;
                                break a;
                            }
                            ++l;
                        }
                    }
                }
                g = '';
            }
            e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
            b = b.parentElement;
        }
        h = e.join() + ':';
        b = [];
        if (a)
            try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var x = t.frames;
                    for (d = 0; d < x.length; ++d)
                        if (a === x[d]) {
                            b.push(d);
                            break;
                        }
                    a = t;
                    t = a.parent;
                }
            } catch (E) {}
        c.google_ad_dom_fingerprint = Fc(h + b.join()).toString();
    }
}
function yn() {
    var a = hd(v);
    a &&
        ((a = Af(a)),
            a.tagSpecificState[1] ||
            (a.tagSpecificState[1] = {
                debugCard: null,
                debugCardRequested: !1
            }));
}
function zn(a) {
    cn();
    dn(Al(), Eb(a, 8)) ||
        tf(779, () => {
            var b = new bn(!0);
            0 < R(Ph) ? (J.google_trust_token_operation_promise = kn(b)) : kn(b);
        })();
    a = mn();
    null != a &&
        a.then((b) => {
            J.google_user_agent_client_hint = Cb(b);
        });
    Bm();
    zm();
}
function An(a, b) {
    switch (a) {
        case 'google_reactive_ad_format':
            return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
        case 'google_allow_expandable_ads':
            return /^true$/.test(b);
        default:
            return b;
    }
}
function Bn(a, b) {
    if (a.getAttribute('src')) {
        var c = a.getAttribute('src') || '';
        (c = vc(c)) && (b.google_ad_client = An('google_ad_client', c));
    }
    a = a.attributes;
    c = a.length;
    for (var d = 0; d < c; d++) {
        var e = a[d];
        if (/data-/.test(e.name)) {
            var f = Ka(e.name.replace('data-matched-content', 'google_content_recommendation').replace('data', 'google').replace(/-/g, '_'));
            b.hasOwnProperty(f) || ((e = An(f, e.value)), null !== e && (b[f] = e));
        }
    }
}
function Cn(a) {
    if ((a = Wc(a)))
        switch (a.data && a.data.autoFormat) {
            case 'rspv':
                return 13;
            case 'mcrspv':
                return 15;
            default:
                return 14;
        }
    else return 12;
}
function Dn(a, b, c, d) {
    Bn(a, b);
    if (c.document && c.document.body && !Yk(c, b) && !b.google_reactive_ad_format) {
        var e = parseInt(a.style.width, 10);
        var f = bl(a, c);
        if (0 < f && e > f) {
            var g = parseInt(a.style.height, 10);
            e = !!pk[e + 'x' + g];
            var h = f;
            if (e) {
                var k = qk(f, g);
                if (k)(h = k), (b.google_ad_format = k + 'x' + g + '_0ads_al');
                else throw new K('No slot size for availableWidth=' + f);
            }
            b.google_ad_resize = !0;
            b.google_ad_width = h;
            e || ((b.google_ad_format = null), (b.google_override_format = !0));
            f = h;
            a.style.width = f + 'px';
            g = Sk(f, 'auto', c, a, b);
            h = f;
            g.size().i(c, b, a);
            uk(g, h, b);
            g = g.size();
            b.google_responsive_formats = null;
            g.minWidth() > f && !e && ((b.google_ad_width = g.minWidth()), (a.style.width = g.minWidth() + 'px'));
        }
    }
    e = a.offsetWidth || hi(a, c, 'width', I) || b.google_ad_width || 0;
    f = Ga(Sk, e, 'auto', c, a, b, !1, !0);
    !(g = Q(gh) || (!(488 > Cf(c)) && !Q(oh))) &&
    (g = Q(qh)) &&
    ((g = c.top == c), g || (wc(c.top) && c.top ? (b.gfwrnwer = 3) : (b.gfwrnwer = 16), (g = !1)), (g = !g));
    if (g) d = !1;
    else {
        g = hd(c) || c;
        h = b.google_ad_client;
        d =
            g.location && '#ftptohbh' === g.location.hash ?
            2 :
            ak(g.location, 'google_responsive_slot_preview') || Q(ph) ?
            1 :
            Q(nh) ?
            2 :
            Cl(g, 1, h, d) ?
            1 :
            0;
        if ((g = 0 !== d))
            b: if (b.google_reactive_ad_format || Yk(c, b) || Yh(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = zc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b;
                    }
                    if (!$a(['static', 'relative'], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b;
                    }
                }
                if (!Q(oh) && ((g = bi(c, a, e, 0.3, b)), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b;
                }
                g = c.top == c ? !0 : !1;
            }
        g
            ?
            ((b.google_resizing_allowed = !0),
                (b.ovlp = !0),
                2 === d ?
                ((d = {}),
                    uk(f(), e, d),
                    (b.google_resizing_width = d.google_ad_width),
                    (b.google_resizing_height = d.google_ad_height),
                    (b.iaaso = !1)) :
                ((b.google_ad_format = 'auto'), (b.iaaso = !0), (b.armr = 1)),
                (d = !0)) :
            (d = !1);
    }
    if ((e = Yk(c, b))) $k(e, a, b, c, d);
    else {
        if (Yh(a, b)) {
            if ((d = zc(a, c)))(a.style.width = d.width), (a.style.height = d.height), Xh(d, b);
            b.google_ad_width || (b.google_ad_width = a.offsetWidth);
            b.google_ad_height || (b.google_ad_height = a.offsetHeight);
            b.google_loader_features_used = 256;
            b.google_responsive_auto_format = Cn(c);
        } else Xh(a.style, b);
        (c.location && '#gfwmrp' == c.location.hash) || (12 == b.google_responsive_auto_format && 'true' == b.google_full_width_responsive) ?
        $k(10, a, b, c, !1): 0.01 > Math.random() &&
            12 === b.google_responsive_auto_format &&
            ((a = ci(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b)),
                !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
}
function En(a) {
    var b = window;
    var c = void 0 === c ? null : c;
    kc(b, 'message', (d) => {
            try {
                var e = JSON.parse(d.data);
            } catch (f) {}
            return;
        }!e || 'sc-cnf' !== e.googMsgType || (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) || a(e, d);
    });
}
function Fn(a, b) {
    b = void 0 === b ? 500 : b;
    fj.call(this);
    this.i = a;
    this.Ra = b;
    this.h = null;
    this.m = {};
    this.l = null;
}
u(Fn, fj);
Fn.prototype.j = function() {
    this.m = {};
    this.l && (lc(this.i, this.l), delete this.l);
    delete this.m;
    delete this.i;
    delete this.h;
    fj.prototype.j.call(this);
};
function Gn(a) {
    fj.call(this);
    this.h = a;
    this.i = null;
    this.l = !1;
}
u(Gn, fj);
var Hn = null;
var In = [];
var Jn = new n.Map();
var Kn = -1;
function Ln(a) {
    return pi.test(a.className) && 'done' != a.dataset.adsbygoogleStatus;
}
function Mn(a, b, c) {
    a.dataset.adsbygoogleStatus = 'done';
    Nn(a, b, c);
}
function Nn(a, b, c) {
    var d = window;
    var e = fd();
    e.google_spfd || (e.google_spfd = Dn);
    (e = b.google_reactive_ads_config) || Dn(a, b, d, c);
    nn(d, b);
    if (!On(a, b, d)) {
        e || (d.google_lpabyc = Zh(a, d) + hi(a, d, 'height', I));
        if (e) {
            e = e.page_level_pubvars || {};
            if (U(J).page_contains_reactive_tag && !U(J).allow_second_reactive_tag) {
                if (e.pltais) {
                    Yj(!1);
                    return;
                }
                throw new K("Only one 'enable_page_level_ads' allowed per page.");
            }
            U(J).page_contains_reactive_tag = !0;
            Yj(7 === e.google_pgb_reactive);
        }
        b.google_unique_id = bd(d);
        Ec(sm, (f, g) => {
            b[g] = b[g] || d[g];
        });
        b.google_loader_used = 'aa';
        b.google_reactive_tag_first = 1 === (U(J).first_tag_on_page || 0);
        sf(164, () => {
            vn(d, b, a, c);
        });
    }
}
function On(a, b, c) {
    var d = b.google_reactive_ads_config;
    var e = 'string' === typeof a.className && RegExp('(\\W|^)adsbygoogle-noablate(\\W|$)').test(a.className);
    var f = Vj(c);
    if (f && f.Da && 'on' != b.google_adtest && !e) {
        e = Zh(a, c);
        var g = Bf(c).clientHeight;
        if (!f.oa || (f.oa && ((0 == g ? null : e / g) || 0) >= f.oa))
            return (
                (a.className += ' adsbygoogle-ablated-ad-slot'),
                (c = c.google_sv_map = c.google_sv_map || {}),
                (d = Aa(a)),
                (b.google_element_uid = d),
                (c[b.google_element_uid] = b),
                a.setAttribute('google_element_uid', d),
                'slot' == f.ob &&
                (null !== Lc(a.getAttribute('width')) && a.setAttribute('width', 0),
                    null !== Lc(a.getAttribute('height')) && a.setAttribute('height', 0),
                    (a.style.width = '0px'),
                    (a.style.height = '0px')),
                !0
            );
    }
    if ((f = zc(a, c)) && 'none' == f.display && !('on' == b.google_adtest || 0 < b.google_reactive_ad_format || d))
        return c.document.createComment && a.appendChild(c.document.createComment('No ad requested because of display:none on the adsbygoogle tag')), !0;
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format) || !a ?
        !1 :
        (v.console &&
            v.console.warn(
                'Adsbygoogle tag with data-reactive-ad-format=' +
                b.google_reactive_ad_format +
                ' is deprecated. Check out page-level ads at https://www.google.com/adsense'
            ),
            !0);
}
function Pn(a) {
    var b = document.getElementsByTagName('INS');
    for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
        var e = d;
        if (Ln(e) && 'reserved' != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d;
    }
    return null;
}
function Qn(a, b, c) {
    if (a && a.shift)
        for (var d = 20; 0 < a.length && 0 < d;) {
            try {
                Rn(a.shift(), b, c);
            } catch (e) {
                setTimeout(() => {
                    throw e;
                });
            }
            --d;
        }
}
function Sn() {
    var a = yc('INS');
    a.className = 'adsbygoogle';
    a.className += ' adsbygoogle-noablate';
    Oc(a);
    return a;
}
function Tn(a, b) {
    var c = {};
    Ec(xf, (f, g) => {
        !1 === a.enable_page_level_ads ? (c[g] = !1) : a.hasOwnProperty(g) && (c[g] = a[g]);
    });
    za(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
    var d = Sn();
    Uc.body.appendChild(d);
    var e = {};
    e = ((e.google_reactive_ads_config = c), (e.google_ad_client = a.google_ad_client), e);
    e.google_pause_ad_requests = !!U(J).pause_ad_requests;
    Mn(d, e, b);
}
function Un(a, b) {
    function c() {
        return Tn(a, b);
    }
    Af(v).wasPlaTagProcessed = !0;
    var d = v.document;
    if (d.body || 'complete' == d.readyState || 'interactive' == d.readyState) c();
    else {
        var e = jc(tf(191, c));
        kc(d, 'DOMContentLoaded', e);
        new v.MutationObserver((f, g) => {
            d.body && (e(), g.disconnect());
        }).observe(d, {
            childList: !0,
            subtree: !0
        });
    }
}
function Rn(a, b, c) {
    var d = {};
    sf(
        165,
        () => {
            Vn(a, d, b, c);
        },
        (e) => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin;
        }
    );
}
function Wn(a) {
    delete a.google_checked_head;
    Ec(a, (b, c) => {
        oi[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace('google', 'data').replace(/_/g, '-') + ' attribute.'));
    });
}
function Xn(a, b) {
    var c =
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') ||
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
    if (c) {
        c.setAttribute('data-checked-head', 'true');
        var d = U(window);
        if (d.head_tag_slot_vars) {
            if (Q(kh)) {
                Yn(c);
                return;
            }
            throw new K('Only one AdSense head tag supported per page. The second tag is ignored.');
        }
        var e = {};
        Bn(c, e);
        Wn(e);
        var f = Pb(e);
        d.head_tag_slot_vars = f;
        c = {
            google_ad_client: e.google_ad_client,
            enable_page_level_ads: e
        };
        J.adsbygoogle || (J.adsbygoogle = []);
        d = J.adsbygoogle;
        d.loaded ? d.push(c) : d.splice(0, 0, c);
        var g;
        e.google_adbreak_test || ((null == (g = Gb(b, ll, 13, yl)) ? 0 : D(g, 3)) && Q(uh)) ?
            Zn(f, a) :
            En(() => {
                Zn(f, a);
            });
    }
}
function Yn(a) {
    var b = U(window).head_tag_slot_vars;
    var c = a.getAttribute('src') || '';
    if ((a = vc(c) || a.getAttribute('data-ad-client') || '') && a !== b.google_ad_client)
        throw new K(
            'Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page ' +
            a +
            ', ' +
            b.google_ad_client
        );
}
function $n(a) {
    if ('object' === typeof a && null != a) {
        if ('string' === typeof a.type) return 2;
        if ('string' === typeof a.sound || 'string' === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
}
function Vn(a, b, c, d) {
    if (null == a) throw new K('push() called with no parameters.');
    14 === xb(d, yl) && ao(a, sb(Gb(d, ml, 14, yl), 1), Eb(d, 2));
    var e = $n(a);
    if (0 !== e)
        Q(jh) &&
        ((d = Zj()),
            d.first_slotcar_request_processing_time || ((d.first_slotcar_request_processing_time = Date.now()), (d.adsbygoogle_execution_start_time = Ja))),
        null == Hn ?
        (bo(a), In.push(a)) :
        3 === e ?
        sf(787, () => {
            Hn.handleAdConfig(a);
        }) :
        Hn.handleAdBreak(a).catch(vf(730));
    else {
        Ja = new Date().getTime();
        on(c, d, co(a));
        eo();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ('string' === typeof a.google_ad_client) {
                    e = !0;
                    break a;
                }
                throw new K("'google_ad_client' is missing from the tag config.");
            }
            e = !1;
        }
        if (e) fo(a, d, b);
        else if (
            ((e = a.params) &&
                Ec(e, (g, h) => {
                    b[h] = g;
                }),
                'js' === b.google_ad_output)
        )
            console.warn(
                "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
            );
        else {
            e = go(a.element);
            Bn(e, b);
            c = U(v).head_tag_slot_vars || {};
            Ec(c, (g, h) => {
                b.hasOwnProperty(h) || (b[h] = g);
            });
            if (e.hasAttribute('data-require-head') && !U(v).head_tag_slot_vars)
                throw new K(
                    "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
                );
            if (!b.google_ad_client) throw new K('Ad client is missing from the slot.');
            b.google_apsail = Il(b.google_ad_client);
            var f = (c = 0 === (U(J).first_tag_on_page || 0) && hk(b)) && ik(c);
            c && !f && (fo(c, d), (U(J).skip_next_reactive_tag = !0));
            0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 2);
            b.google_pause_ad_requests = !!U(J).pause_ad_requests;
            Mn(e, b, d);
            c && f && ho(c);
        }
    }
}
var io = !1;
function ao(a, b, c) {
    Q(hh) &&
        !io &&
        ((io = !0),
            (a = co(a)) || (a = sn()),
            uf(
                'predictive_abg', {
                    a_c: a,
                    p_c: b,
                    b_v: c
                },
                0.01
            ));
}
function co(a) {
    return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : '';
}
function eo() {
    if (Q(ch)) {
        var a = Vj(J);
        if (!(a = a && a.Da)) {
            try {
                var b = J.localStorage;
            } catch (c) {
                b = null;
            }
            b = b ? Ti(b) : null;
            a = !(b && Qj(b) && b);
        }
        a || Xj(J, 1);
    }
}
function ho(a) {
    Tc(() => {
        Af(v).wasPlaTagProcessed || (v.adsbygoogle && v.adsbygoogle.push(a));
    });
}
function fo(a, b, c) {
    U(J).skip_next_reactive_tag ?
        (U(J).skip_next_reactive_tag = !1) :
        (0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 1),
            c && a.tag_partner && (Wj(v, a.tag_partner), Wj(c, a.tag_partner)),
            (c = D(b, 6)),
            U(J).ama_ran_on_page || kk(new jk(a, c)),
            Un(a, b));
}
function go(a) {
    if (a) {
        if (!Ln(a) && (a.id ? (a = Pn(a.id)) : (a = null), !a)) throw new K("'element' has already been filled.");
        if (!('innerHTML' in a)) throw new K("'element' is not a good DOM element.");
    } else if (((a = Pn()), !a)) throw new K('All ins elements in the DOM with class=adsbygoogle already have ads in them.');
    return a;
}
function jo() {
    var a = new hj(J);
    var b = new Fn(J);
    var c = new Gn(J);
    var d = J.__cmp ? 1 : 0;
    a = ij(a) ? 1 : 0;
    var e;
    var f;
    (f = 'function' === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) ||
    (b.h ? (b = b.h) : ((b.h = Mc(b.i, '__uspapiLocator')), (b = b.h)), (f = null != b));
    c.l || (c.i || (c.i = c.h.googlefc ? c.h : Mc(c.h, 'googlefcPresent')), (c.l = !0));
    uf(
        'cmpMet', {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        },
        R(Ng)
    );
}
function ko(a) {
    a = {
        value: D(a, 16)
    };
    var b = 0.01;
    R(eh) && ((a.eid = R(eh)), (b = 1));
    a.frequency = b;
    uf('new_abg_tag', a, b);
}
function lo(a) {
    Xi().S[Zi(26)] = !!Number(a);
}
function mo(a) {
    Number(a) ?
        (U(J).pause_ad_requests = !0) :
        ((U(J).pause_ad_requests = !1),
            (a = () => {
                if (!U(J).pause_ad_requests)
                    if (Q(xh)) {
                        var b = void 0 === b ? {} : b;
                        if ('function' === typeof window.CustomEvent) var c = new CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', b);
                        else
                            (c = document.createEvent('CustomEvent')),
                            c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !!b.bubbles, !!b.cancelable, b.detail);
                        J.dispatchEvent(c);
                    } else {
                        b = fd();
                        var d = fd();
                        try {
                            if (Uc.createEvent)
                                (c = Uc.createEvent('CustomEvent')),
                                c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !1, !1, ''),
                                b.dispatchEvent(c);
                            else if (ad(d.CustomEvent)) {
                                var e = new d.CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: ''
                                });
                                b.dispatchEvent(e);
                            } else if (ad(d.Event)) {
                                var f = new Event('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1
                                });
                                b.dispatchEvent(f);
                            }
                        } catch (g) {}
                    }
            }),
            v.setTimeout(a, 0),
            v.setTimeout(a, 1e3));
}
function no(a) {
    uf(
        'adsenseGfpKnob', {
            value: a,
            ptt: 9
        },
        0.1
    );
    switch (a) {
        case 0:
        case 2:
            a = !0;
            break;
        case 1:
            a = !1;
            break;
        default:
            throw Error('Illegal value of cookieOptions: ' + a);
    }
    J._gfp_a_ = a;
}
function oo(a) {
    ad(a) && window.setTimeout(a, 0);
}
function Zn(a, b) {
    ((ba = fk(
                Tb(
                    Wb(gc(b.nb).toString()),
                    Rh() ? {
                        bust: Rh()
                    } : {}
                )
            )
            .then((c) => {
                null == Hn && (c.init(a), (Hn = c), po());
            })
            .catch(vf(723))),
        p(ba, 'finally')).call(ba, () => {
        In.length = 0;
        uf('slotcar', {
            event: 'api_ld',
            time: Date.now() - Ja,
            time_pr: Date.now() - Kn
        });
    });
}
function po() {
    for (var a = q(p(Jn, 'keys').call(Jn)), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = Jn.get(b); -
        1 !== c && (v.clearTimeout(c), Jn.delete(b));
    }
    a = {};
    for (
        b = 0; b < In.length; a = {
            da: a.da,
            Y: a.Y
        },
        b++
    )
        Jn.has(b) ||
        ((a.Y = In[b]),
            (a.da = $n(a.Y)),
            sf(
                723,
                ((d) => () => {
                    3 === d.da ? Hn.handleAdConfig(d.Y) : 2 === d.da && Hn.handleAdBreakBeforeReady(d.Y).catch(vf(730));
                })(a)
            ));
}
function bo(a) {
    var b = In.length;
    if (2 === $n(a) && 'preroll' === a.type && null != a.adBreakDone) {
        -1 === Kn && (Kn = Date.now());
        var c = v.setTimeout(() => {
            try {
                (0, a.adBreakDone)({
                    breakType: 'preroll',
                    breakName: a.name,
                    breakFormat: 'preroll',
                    breakStatus: 'timeout'
                }),
                Jn.set(b, -1),
                    uf('slotcar', {
                        event: 'pr_to',
                        source: 'adsbygoogle'
                    });
            } catch (d) {
                console.error('[Ad Placement API] adBreakDone callback threw an error:', d instanceof Error ? d : Error(String(d)));
            }
        }, 1e3 * R(vh));
        Jn.set(b, c);
    }
}
((a, b, c, d) => {
    d = void 0 === d ? () => {} : d;
    qf.Pa(wf);
    sf(166, () => {
        var e = xm(b);
        pm(Eb(e, 2));
        Bl(D(e, 6));
        d();
        kd(16, [1, e.toJSON()]);
        var f = Xc(Wc(J)) || J;
        var g = c(
            qm({
                $a: a,
                jb: Eb(e, 2)
            }),
            e
        );
        Q(mh) && Fl(f, e);
        om(f, e, null === J.document.currentScript ? 1 : Ol(g.qb));
        if ((!Qa() || 0 <= La(Ta(), 11)) && (null == (J.Prototype || {}).Version || !Q(fh))) {
            rf(Q(Ch));
            zn(e);
            Gj();
            try {
                Rm();
            } catch (r) {}
            yn();
            Xn(g, e);
            f = window;
            var h = f.adsbygoogle;
            if (!h || !h.loaded) {
                if (Q(dh) && !D(e, 16))
                    try {
                        if (J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return;
                    } catch (r) {}
                ko(e);
                R(Ng) && jo();
                var k = {
                    push(r) {
                        Rn(r, g, e);
                    },
                    loaded: !0
                };
                try {
                    Object.defineProperty(k, 'requestNonPersonalizedAds', {
                            set: lo
                        }),
                        Object.defineProperty(k, 'pauseAdRequests', {
                            set: mo
                        }),
                        Object.defineProperty(k, 'cookieOptions', {
                            set: no
                        }),
                        Object.defineProperty(k, 'onload', {
                            set: oo
                        });
                } catch (r) {}
                if (h)
                    for (var l = q(['requestNonPersonalizedAds', 'pauseAdRequests', 'cookieOptions']), m = l.next(); !m.done; m = l.next())
                        (m = m.value), void 0 !== h[m] && (k[m] = h[m]);
                '_gfp_a_' in window || (window._gfp_a_ = !0);
                Qn(h, g, e);
                f.adsbygoogle = k;
                h && (k.onload = h.onload);
                (f = un(g)) && document.documentElement.appendChild(f);
            }
        }
    });
})('m202111110101', wm, (a, b) => {
    var c = 2012 < C(b, 1, 0) ? '_fy' + C(b, 1, 0) : '';
    var d = Eb(b, 3);
    b = Eb(b, 2);
    var e = a ? fc(cl, a, c) : fc(dl, b, d, c);
    var f = fc(el, b, d);
    return {
        nb: e,
        mb: a ? fc(fl, a, c) : fc(gl, b, d, c),
        kb: a ? fc(hl, a, c) : fc(il, b, d, c),
        lb: a ? fc(jl, a, c) : fc(kl, b, d, c),
        rb: f,
        qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
    };
});
}.call(
this,
'[2019,"r20211111","r20190131",null,[],null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1096,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1101,null,null,[1]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1118,null,null,[1]],[230,null,null,[1]],[1124,null,null,[1]],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[1956,null,null,[1]],[379841917,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]],[393546021,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[50,[[44754331],[44754332,[[1090,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44754315,[[null,1103,null,[null,44754315]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,1000]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[10,[[31063693],[31063694,[[null,57,null,[null,30]]]],[31063695,[[null,57,null,[null,60]]]],[31063696,[[null,57,null,[null,90]]]]]],[100,[[31063735],[31063736,[[1053,null,null,[1]]]]]],[50,[[31063737],[31063738,[[1096,null,null,[]]]]]],[1000,[[31063759,[[null,null,14,[null,null,"31063759"]]],[6,null,null,null,6,null,"31063759"]],[31063760,[[null,null,14,[null,null,"31063760"]]],[6,null,null,null,6,null,"31063760"]]],[4,null,55]],[1000,[[31063781,[[null,null,14,[null,null,"31063781"]]],[6,null,null,null,6,null,"31063781"]],[31063782,[[null,null,14,[null,null,"31063782"]]],[6,null,null,null,6,null,"31063782"]]],[4,null,55]],[100,[[31063792],[31063793,[[1125,null,null,[1]]]]]],[1000,[[31063796,[[null,null,14,[null,null,"31063796"]]],[6,null,null,null,6,null,"31063796"]],[31063797,[[null,null,14,[null,null,"31063797"]]],[6,null,null,null,6,null,"31063797"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44755656],[44755657]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[500,[[31063741,null,[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[1,[[31063150]],[4,null,63]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]]],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,"Chrome/(9[3456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[],null,null,null,null,706409994]'
));
function dn(a, b) {
    return Q(Lh) || (a && (Q(Oh) || '.google.de' != b)) || '.google.ch' === b || 'function' === typeof J.__tcfapi;
}
function Z(a, b, c) {
    var d = p(window.goog_tt_state, 'find').call(window.goog_tt_state, (e) => e.issuerOrigin === a);
    d && ((d.state = b), void 0 != c && (d.hasRedemptionRecord = c));
}
function en() {
    var a = window.goog_tt_state;
    return Array.isArray(a) && a.some((b) => 1 != b.state);
}
function fn() {
    var a = X.issuerOrigin + X.redemptionPath;
    var b = {
        keepalive: !0,
        trustToken: {
            type: 'token-redemption',
            issuer: X.issuerOrigin,
            refreshPolicy: 'none'
        }
    };
    Z(X.issuerOrigin, 2);
    return window
        .fetch(a, b)
        .then((c) => {
            if (!c.ok) throw Error(c.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 6, !0);
        })
        .catch((c) => {
            c && 'NoModificationAllowedError' === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5);
        });
}
function gn() {
    var a = X.issuerOrigin + X.issuancePath;
    Z(X.issuerOrigin, 8);
    return window
        .fetch(a, {
            keepalive: !0,
            trustToken: {
                type: 'token-request'
            }
        })
        .then((b) => {
            if (!b.ok) throw Error(b.status + ': Network response was not ok!');
            Z(X.issuerOrigin, 10);
            return fn();
        })
        .catch((b) => {
            if (b && 'NoModificationAllowedError' === b.name) return Z(X.issuerOrigin, 10), fn();
            Z(X.issuerOrigin, 9);
        });
}
function hn() {
    Z(X.issuerOrigin, 13);
    return document.hasTrustToken(X.issuerOrigin).then((a) => (a ? fn() : gn()));
}
function jn() {
    Z(Y.issuerOrigin, 13);
    if (n.Promise) {
        var a = document
            .hasTrustToken(Y.issuerOrigin)
            .then((e) => e)
            .catch((e) =>
                n.Promise.reject({
                    state: 19,
                    error: e
                })
            );
        var b = Y.issuerOrigin + Y.redemptionPath;
        var c = {
            keepalive: !0,
            trustToken: {
                type: 'token-redemption',
                refreshPolicy: 'none'
            }
        };
        Z(Y.issuerOrigin, 16);
        a = a
            .then((e) =>
                window
                .fetch(b, c)
                .then((f) => {
                    if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                    Z(Y.issuerOrigin, 18, !0);
                })
                .catch((f) => {
                    if (f && 'NoModificationAllowedError' === f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e)
                            return n.Promise.reject({
                                state: 17,
                                error: f
                            });
                        Z(Y.issuerOrigin, 17);
                    }
                })
            )
            .then(() =>
                document
                .hasTrustToken(Y.issuerOrigin)
                .then((e) => e)
                .catch((e) =>
                    n.Promise.reject({
                        state: 19,
                        error: e
                    })
                )
            )
            .then((e) => {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window
                    .fetch(f + '?ht=' + e, {
                        trustToken: {
                            type: 'send-redemption-record',
                            issuers: [Y.issuerOrigin]
                        }
                    })
                    .then((g) => {
                        if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                        Z(Y.issuerOrigin, 22);
                        return g.text().then((h) => JSON.parse(h));
                    })
                    .catch((g) =>
                        n.Promise.reject({
                            state: 21,
                            error: g
                        })
                    );
            });
        var d = Sc(window);
        return a
            .then((e) => {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ?
                    (Z(Y.issuerOrigin, 23),
                        window
                        .fetch(f + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-request'
                            }
                        })
                        .then((g) => {
                            if (!g.ok) throw Error(g.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 25);
                            return e;
                        })
                        .catch((g) =>
                            n.Promise.reject({
                                state: 24,
                                error: g
                            })
                        )) :
                    e;
            })
            .then((e) => {
                if (e && e.srdt && e.cs)
                    return (
                        Z(Y.issuerOrigin, 26),
                        window
                        .fetch(b + '?cs=' + e.cs + '&correlator=' + d, {
                            keepalive: !0,
                            trustToken: {
                                type: 'token-redemption',
                                refreshPolicy: 'refresh'
                            }
                        })
                        .then((f) => {
                            if (!f.ok) throw Error(f.status + ': Network response was not ok!');
                            Z(Y.issuerOrigin, 28, !0);
                        })
                        .catch((f) =>
                            n.Promise.reject({
                                state: 27,
                                error: f
                            })
                        )
                    );
            })
            .then(() => {
                Z(Y.issuerOrigin, 29);
            })
            .catch((e) => {
                if (e instanceof Object && e.hasOwnProperty('state') && e.hasOwnProperty('error'))
                    if ('number' === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = R(Mh);
                        Math.random() <= f &&
                            Zc({
                                    state: e.state,
                                    err: e.error.toString()
                                },
                                'dtt_err'
                            );
                    } else throw Error(e);
                else throw e;
            });
    }
}
function kn(a) {
    if (document.hasTrustToken && !Q(Jh) && a.h) {
        if (en()) return window.goog_tt_promise;
        a = [];
        $m() && a.push(hn());
        Q(Kh) && a.push(jn());
        if (n.Promise && n.Promise.all)
            return (
                (a = n.Promise.all(a)),
                'object' != typeof window.goog_tt_promise &&
                Object.defineProperty(window, 'goog_tt_promise', {
                    configurable: !1,
                    value: a,
                    writable: !1
                }),
                a
            );
    }
}
var ln = 'platform platformVersion architecture model uaFullVersion bitness'.split(' ');
function mn() {
    return J.navigator && J.navigator.userAgentData && 'function' === typeof J.navigator.userAgentData.getHighEntropyValues ?
        J.navigator.userAgentData.getHighEntropyValues(ln).then((a) => {
            var b = new xj();
            b = A(b, 1, a.platform);
            b = A(b, 2, a.platformVersion);
            b = A(b, 3, a.architecture);
            b = A(b, 4, a.model);
            b = A(b, 5, a.uaFullVersion);
            return A(b, 9, a.bitness);
        }) :
        null;
}
function nn(a, b) {
    b.google_ad_host || ((a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute('content')));
}
function on(a, b, c) {
    c = void 0 === c ? '' : c;
    J.google_sa_impl && !J.document.getElementById('google_shimpl') && ((J.google_sa_queue = null), (J.google_sl_win = null), (J.google_sa_impl = null));
    J.google_sa_queue ||
        ((J.google_sa_queue = []),
            (J.google_sl_win = J),
            (J.google_process_slots = tf(215, () => pn(J))),
            (a = qn(c, a, b)),
            (xc(J.document, a).id = 'google_shimpl'));
}
function pn(a) {
    var b = a.google_sa_queue;
    var c = b.shift();
    a.google_sa_impl ||
        uf('shimpl', {
            t: 'no_fn'
        });
    'function' === typeof c && sf(216, c);
    b.length &&
        a.setTimeout(
            tf(215, () => pn(a)),
            0
        );
}
function rn(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
}
function qn(a, b, c) {
    var d = Math.random() < R(lh) ? Wb(gc(b.lb).toString()) : null;
    b = D(c, 4) ? b.kb : b.mb;
    d = d ? d : Wb(gc(b).toString());
    b = {};
    a: {
        if (D(c, 4)) {
            if ((c = a || sn())) {
                var e = {};
                c = ((e.client = c), (e.plah = J.location.host), e);
                break a;
            }
            throw Error('PublisherCodeNotFoundForAma');
        }
        c = {};
    }
    tn(c, b);
    a: {
        if (Q(ih) && (a = a || sn())) {
            c = {};
            a =
                ((c.client = a),
                    (c.plah = J.location.host),
                    (c.ama_t = 'adsense'),
                    (c.asntp = R(Ug)),
                    (c.asntpv = R(Yg)),
                    (c.asntpl = R(Wg)),
                    (c.asntpm = R(Xg)),
                    (c.asntpc = R(Vg)),
                    (c.asna = R(Qg)),
                    (c.asnd = R(Rg)),
                    (c.asnp = R(Sg)),
                    (c.asns = R(Tg)),
                    (c.asmat = R(Pg)),
                    (c.asptt = R(Zg)),
                    (c.easpi = Q(ih)),
                    (c.asro = Q($g)),
                    c);
            break a;
        }
        a = {};
    }
    tn(a, b);
    tn(
        Rh() ? {
            bust: Rh()
        } : {},
        b
    );
    return Tb(d, b);
}
function tn(a, b) {
    Ec(a, (c, d) => {
        void 0 === b[d] && (b[d] = c);
    });
}
function sn() {
    if (J.google_ad_client) return J.google_ad_client;
    var a = U(J).head_tag_slot_vars;
    if (a && a.google_ad_client) return a.google_ad_client;
    if ((a = J.document.querySelector('.adsbygoogle[data-ad-client]'))) return a.getAttribute('data-ad-client');
    b: {
        a = J.document.getElementsByTagName('script');
        var b = (J.navigator && J.navigator.userAgent) || '';
        b =
        RegExp(
            'appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube',
            'i'
        ).test(b) ||
        (/i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !gd()) ?
        tm : um;
        for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            if (!d.google_parsed_script_for_pub_code && ((d.google_parsed_script_for_pub_code = !0), (d = b(d)))) {
                a = d;
                break b;
            }
        }
        a = null;
    }
    if (a) {
        b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        for (c = {};
            (d = b.exec(a));) c[d[1]] = vm(d[2]);
        a = c.google_ad_client ? c.google_ad_client : '';
    } else a = '';
    return a ? a : '';
}
function un(a) {
    a: {
        for (var b = [v.top], c = [], d = 0, e;
            (e = b[d++]);) {
            c.push(e);
            try {
                if (e.frames)
                    for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g]);
            } catch (l) {}
        }
        for (b = 0; b < c.length; b++)
            try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Vc = h;
                    break a;
                }
            } catch (l) {}
        Vc = null;
    }
    if (Vc) return null;
    c = yc('IFRAME');
    c.id = 'google_esf';
    c.name = 'google_esf';
    a = a.rb;
    if (a instanceof bc) {
        var k;
        h = ec(a);
        a = (null === (k = Zb()) || void 0 === k ? 0 : k.isScriptURL(h)) ? TrustedScriptURL.prototype.toString.apply(h) : h;
    } else a = Vb(a).toString();
    c.src = a;
    c.style.display = 'none';
    return c;
}
function vn(a, b, c, d) {
    wn(a, b, c, d, (e, f) => {
        e = e.document;
        for (var g = void 0, h = 0; !g || e.getElementById(g + '_anchor');) g = 'aswift_' + h++;
        e = g;
        g = Number(f.google_ad_width || 0);
        f = Number(f.google_ad_height || 0);
        h = yc('INS');
        h.id = e + '_anchor';
        ok(h, g, f);
        h.style.display = 'block';
        var k = yc('INS');
        k.id = e + '_expand';
        ok(k, g, f);
        k.style.display = 'inline-table';
        k.appendChild(h);
        c.appendChild(k);
        return e;
    });
}
function wn(a, b, c, d, e) {
    var f = e(a, b);
    xn(a, c, b);
    c = Ja;
    e = new Date().getTime();
    b.google_lrv = Eb(d, 2);
    b.google_async_iframe_id = f;
    b.google_start_time = c;
    b.google_bpp = e > c ? e - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[f] = b;
    b.dninfo = b.google_loader_used;
    c = (d = !!a.document.getElementById(f + '_anchor')) ? (h) => h() : (h) => window.setTimeout(h, 0);
    b.dninfo += '_' + d;
    var g = {
        pubWin: a,
        iframeWin: null,
        vars: b
    };
    rn(
        a,
        () => {
            var h = !!a.document.getElementById(f + '_anchor');
            b.dninfo += '_' + h;
            (h = a.google_sa_impl(g)) && h.catch && h.catch(vf(911));
        },
        c
    );
}
function xn(a, b, c) {
    var d = c.google_ad_output;
    var e = c.google_ad_format;
    var f = c.google_ad_width || 0;
    var g = c.google_ad_height || 0;
    e || ('html' != d && null != d) || (e = f + 'x' + g);
    d = !c.google_ad_slot || c.google_override_format || (!pk[c.google_ad_width + 'x' + c.google_ad_height] && 'aa' == c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = '');
    c.google_ad_format = e;
    if ('number' !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
        e = [
            c.google_ad_slot,
            c.google_orig_ad_format || c.google_ad_format,
            c.google_ad_type,
            c.google_orig_ad_width || c.google_ad_width,
            c.google_orig_ad_height || c.google_ad_height
        ];
        d = [];
        f = 0;
        for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push('') : d.push(g.id);
        (d = d.join()) && e.push(d);
        c.google_ad_unit_key = Fc(e.join(':')).toString();
        var h = void 0 === h ? !1 : h;
        e = [];
        for (d = 0; b && 25 > d; ++d) {
            f = '';
            (void 0 !== h && h) || (f = (f = 9 !== b.nodeType && b.id) ? '/' + f : '');
            a: {
                if (b && b.nodeName && b.parentElement) {
                    g = b.nodeName.toString().toLowerCase();
                    for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                        var r = k[m];
                        if (r.nodeName && r.nodeName.toString().toLowerCase() === g) {
                            if (b === r) {
                                g = '.' + l;
                                break a;
                            }
                            ++l;
                        }
                    }
                }
                g = '';
            }
            e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
            b = b.parentElement;
        }
        h = e.join() + ':';
        b = [];
        if (a)
            try {
                var t = a.parent;
                for (e = 0; t && t !== a && 25 > e; ++e) {
                    var x = t.frames;
                    for (d = 0; d < x.length; ++d)
                        if (a === x[d]) {
                            b.push(d);
                            break;
                        }
                    a = t;
                    t = a.parent;
                }
            } catch (E) {}
        c.google_ad_dom_fingerprint = Fc(h + b.join()).toString();
    }
}
function yn() {
    var a = hd(v);
    a &&
        ((a = Af(a)),
            a.tagSpecificState[1] ||
            (a.tagSpecificState[1] = {
                debugCard: null,
                debugCardRequested: !1
            }));
}
function zn(a) {
    cn();
    dn(Al(), Eb(a, 8)) ||
        tf(779, () => {
            var b = new bn(!0);
            0 < R(Ph) ? (J.google_trust_token_operation_promise = kn(b)) : kn(b);
        })();
    a = mn();
    null != a &&
        a.then((b) => {
            J.google_user_agent_client_hint = Cb(b);
        });
    Bm();
    zm();
}
function An(a, b) {
    switch (a) {
        case 'google_reactive_ad_format':
            return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
        case 'google_allow_expandable_ads':
            return /^true$/.test(b);
        default:
            return b;
    }
}
function Bn(a, b) {
    if (a.getAttribute('src')) {
        var c = a.getAttribute('src') || '';
        (c = vc(c)) && (b.google_ad_client = An('google_ad_client', c));
    }
    a = a.attributes;
    c = a.length;
    for (var d = 0; d < c; d++) {
        var e = a[d];
        if (/data-/.test(e.name)) {
            var f = Ka(e.name.replace('data-matched-content', 'google_content_recommendation').replace('data', 'google').replace(/-/g, '_'));
            b.hasOwnProperty(f) || ((e = An(f, e.value)), null !== e && (b[f] = e));
        }
    }
}
function Cn(a) {
    if ((a = Wc(a)))
        switch (a.data && a.data.autoFormat) {
            case 'rspv':
                return 13;
            case 'mcrspv':
                return 15;
            default:
                return 14;
        }
    else return 12;
}
function Dn(a, b, c, d) {
    Bn(a, b);
    if (c.document && c.document.body && !Yk(c, b) && !b.google_reactive_ad_format) {
        var e = parseInt(a.style.width, 10);
        var f = bl(a, c);
        if (0 < f && e > f) {
            var g = parseInt(a.style.height, 10);
            e = !!pk[e + 'x' + g];
            var h = f;
            if (e) {
                var k = qk(f, g);
                if (k)(h = k), (b.google_ad_format = k + 'x' + g + '_0ads_al');
                else throw new K('No slot size for availableWidth=' + f);
            }
            b.google_ad_resize = !0;
            b.google_ad_width = h;
            e || ((b.google_ad_format = null), (b.google_override_format = !0));
            f = h;
            a.style.width = f + 'px';
            g = Sk(f, 'auto', c, a, b);
            h = f;
            g.size().i(c, b, a);
            uk(g, h, b);
            g = g.size();
            b.google_responsive_formats = null;
            g.minWidth() > f && !e && ((b.google_ad_width = g.minWidth()), (a.style.width = g.minWidth() + 'px'));
        }
    }
    e = a.offsetWidth || hi(a, c, 'width', I) || b.google_ad_width || 0;
    f = Ga(Sk, e, 'auto', c, a, b, !1, !0);
    !(g = Q(gh) || (!(488 > Cf(c)) && !Q(oh))) &&
    (g = Q(qh)) &&
    ((g = c.top == c), g || (wc(c.top) && c.top ? (b.gfwrnwer = 3) : (b.gfwrnwer = 16), (g = !1)), (g = !g));
    if (g) d = !1;
    else {
        g = hd(c) || c;
        h = b.google_ad_client;
        d =
            g.location && '#ftptohbh' === g.location.hash ?
            2 :
            ak(g.location, 'google_responsive_slot_preview') || Q(ph) ?
            1 :
            Q(nh) ?
            2 :
            Cl(g, 1, h, d) ?
            1 :
            0;
        if ((g = 0 !== d))
            b: if (b.google_reactive_ad_format || Yk(c, b) || Yh(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = zc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b;
                    }
                    if (!$a(['static', 'relative'], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b;
                    }
                }
                if (!Q(oh) && ((g = bi(c, a, e, 0.3, b)), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b;
                }
                g = c.top == c ? !0 : !1;
            }
        g
            ?
            ((b.google_resizing_allowed = !0),
                (b.ovlp = !0),
                2 === d ?
                ((d = {}),
                    uk(f(), e, d),
                    (b.google_resizing_width = d.google_ad_width),
                    (b.google_resizing_height = d.google_ad_height),
                    (b.iaaso = !1)) :
                ((b.google_ad_format = 'auto'), (b.iaaso = !0), (b.armr = 1)),
                (d = !0)) :
            (d = !1);
    }
    if ((e = Yk(c, b))) $k(e, a, b, c, d);
    else {
        if (Yh(a, b)) {
            if ((d = zc(a, c)))(a.style.width = d.width), (a.style.height = d.height), Xh(d, b);
            b.google_ad_width || (b.google_ad_width = a.offsetWidth);
            b.google_ad_height || (b.google_ad_height = a.offsetHeight);
            b.google_loader_features_used = 256;
            b.google_responsive_auto_format = Cn(c);
        } else Xh(a.style, b);
        (c.location && '#gfwmrp' == c.location.hash) || (12 == b.google_responsive_auto_format && 'true' == b.google_full_width_responsive) ?
        $k(10, a, b, c, !1): 0.01 > Math.random() &&
            12 === b.google_responsive_auto_format &&
            ((a = ci(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b)),
                !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
}
function En(a) {
    var b = window;
    var c = void 0 === c ? null : c;
    kc(b, 'message', (d) => {
        try {
            var e = JSON.parse(d.data);
        } catch (f) {
            return;
        }!e || 'sc-cnf' !== e.googMsgType || (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) || a(e, d);
    });
}
function Fn(a, b) {
    b = void 0 === b ? 500 : b;
    fj.call(this);
    this.i = a;
    this.Ra = b;
    this.h = null;
    this.m = {};
    this.l = null;
}
u(Fn, fj);
Fn.prototype.j = function() {
    this.m = {};
    this.l && (lc(this.i, this.l), delete this.l);
    delete this.m;
    delete this.i;
    delete this.h;
    fj.prototype.j.call(this);
};
function Gn(a) {
    fj.call(this);
    this.h = a;
    this.i = null;
    this.l = !1;
}
u(Gn, fj);
var Hn = null;
var In = [];
var Jn = new n.Map();
var Kn = -1;
function Ln(a) {
    return pi.test(a.className) && 'done' != a.dataset.adsbygoogleStatus;
}
function Mn(a, b, c) {
    a.dataset.adsbygoogleStatus = 'done';
    Nn(a, b, c);
}
function Nn(a, b, c) {
    var d = window;
    var e = fd();
    e.google_spfd || (e.google_spfd = Dn);
    (e = b.google_reactive_ads_config) || Dn(a, b, d, c);
    nn(d, b);
    if (!On(a, b, d)) {
        e || (d.google_lpabyc = Zh(a, d) + hi(a, d, 'height', I));
        if (e) {
            e = e.page_level_pubvars || {};
            if (U(J).page_contains_reactive_tag && !U(J).allow_second_reactive_tag) {
                if (e.pltais) {
                    Yj(!1);
                    return;
                }
                throw new K("Only one 'enable_page_level_ads' allowed per page.");
            }
            U(J).page_contains_reactive_tag = !0;
            Yj(7 === e.google_pgb_reactive);
        }
        b.google_unique_id = bd(d);
        Ec(sm, (f, g) => {
            b[g] = b[g] || d[g];
        });
        b.google_loader_used = 'aa';
        b.google_reactive_tag_first = 1 === (U(J).first_tag_on_page || 0);
        sf(164, () => {
            vn(d, b, a, c);
        });
    }
}
function On(a, b, c) {
    var d = b.google_reactive_ads_config;
    var e = 'string' === typeof a.className && RegExp('(\\W|^)adsbygoogle-noablate(\\W|$)').test(a.className);
    var f = Vj(c);
    if (f && f.Da && 'on' != b.google_adtest && !e) {
        e = Zh(a, c);
        var g = Bf(c).clientHeight;
        if (!f.oa || (f.oa && ((0 == g ? null : e / g) || 0) >= f.oa))
            return (
                (a.className += ' adsbygoogle-ablated-ad-slot'),
                (c = c.google_sv_map = c.google_sv_map || {}),
                (d = Aa(a)),
                (b.google_element_uid = d),
                (c[b.google_element_uid] = b),
                a.setAttribute('google_element_uid', d),
                'slot' == f.ob &&
                (null !== Lc(a.getAttribute('width')) && a.setAttribute('width', 0),
                    null !== Lc(a.getAttribute('height')) && a.setAttribute('height', 0),
                    (a.style.width = '0px'),
                    (a.style.height = '0px')),
                !0
            );
    }
    if ((f = zc(a, c)) && 'none' == f.display && !('on' == b.google_adtest || 0 < b.google_reactive_ad_format || d))
        return c.document.createComment && a.appendChild(c.document.createComment('No ad requested because of display:none on the adsbygoogle tag')), !0;
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format) || !a ?
        !1 :
        (v.console &&
            v.console.warn(
                'Adsbygoogle tag with data-reactive-ad-format=' +
                b.google_reactive_ad_format +
                ' is deprecated. Check out page-level ads at https://www.google.com/adsense'
            ),
            !0);
}
function Pn(a) {
    var b = document.getElementsByTagName('INS');
    for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
        var e = d;
        if (Ln(e) && 'reserved' != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d;
    }
    return null;
}
function Qn(a, b, c) {
    if (a && a.shift)
        for (var d = 20; 0 < a.length && 0 < d;) {
            try {
                Rn(a.shift(), b, c);
            } catch (e) {
                setTimeout(() => {
                    throw e;
                });
            }
            --d;
        }
}
function Sn() {
    var a = yc('INS');
    a.className = 'adsbygoogle';
    a.className += ' adsbygoogle-noablate';
    Oc(a);
    return a;
}
function Tn(a, b) {
    var c = {};
    Ec(xf, (f, g) => {
        !1 === a.enable_page_level_ads ? (c[g] = !1) : a.hasOwnProperty(g) && (c[g] = a[g]);
    });
    za(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
    var d = Sn();
    Uc.body.appendChild(d);
    var e = {};
    e = ((e.google_reactive_ads_config = c), (e.google_ad_client = a.google_ad_client), e);
    e.google_pause_ad_requests = !!U(J).pause_ad_requests;
    Mn(d, e, b);
}
function Un(a, b) {
    function c() {
        return Tn(a, b);
    }
    Af(v).wasPlaTagProcessed = !0;
    var d = v.document;
    if (d.body || 'complete' == d.readyState || 'interactive' == d.readyState) c();
    else {
        var e = jc(tf(191, c));
        kc(d, 'DOMContentLoaded', e);
        new v.MutationObserver((f, g) => {
            d.body && (e(), g.disconnect());
        }).observe(d, {
            childList: !0,
            subtree: !0
        });
    }
}
function Rn(a, b, c) {
    var d = {};
    sf(
        165,
        () => {
            Vn(a, d, b, c);
        },
        (e) => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin;
        }
    );
}
function Wn(a) {
    delete a.google_checked_head;
    Ec(a, (b, c) => {
        oi[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace('google', 'data').replace(/_/g, '-') + ' attribute.'));
    });
}
function Xn(a, b) {
    var c =
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') ||
        J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
    if (c) {
        c.setAttribute('data-checked-head', 'true');
        var d = U(window);
        if (d.head_tag_slot_vars) {
            if (Q(kh)) {
                Yn(c);
                return;
            }
            throw new K('Only one AdSense head tag supported per page. The second tag is ignored.');
        }
        var e = {};
        Bn(c, e);
        Wn(e);
        var f = Pb(e);
        d.head_tag_slot_vars = f;
        c = {
            google_ad_client: e.google_ad_client,
            enable_page_level_ads: e
        };
        J.adsbygoogle || (J.adsbygoogle = []);
        d = J.adsbygoogle;
        d.loaded ? d.push(c) : d.splice(0, 0, c);
        var g;
        e.google_adbreak_test || ((null == (g = Gb(b, ll, 13, yl)) ? 0 : D(g, 3)) && Q(uh)) ?
            Zn(f, a) :
            En(() => {
                Zn(f, a);
            });
    }
}
function Yn(a) {
    var b = U(window).head_tag_slot_vars;
    var c = a.getAttribute('src') || '';
    if ((a = vc(c) || a.getAttribute('data-ad-client') || '') && a !== b.google_ad_client)
        throw new K(
            'Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page ' +
            a +
            ', ' +
            b.google_ad_client
        );
}
function $n(a) {
    if ('object' === typeof a && null != a) {
        if ('string' === typeof a.type) return 2;
        if ('string' === typeof a.sound || 'string' === typeof a.preloadAdBreaks) return 3;
    }
    return 0;
}
function Vn(a, b, c, d) {
    if (null == a) throw new K('push() called with no parameters.');
    14 === xb(d, yl) && ao(a, sb(Gb(d, ml, 14, yl), 1), Eb(d, 2));
    var e = $n(a);
    if (0 !== e)
        Q(jh) &&
        ((d = Zj()),
            d.first_slotcar_request_processing_time || ((d.first_slotcar_request_processing_time = Date.now()), (d.adsbygoogle_execution_start_time = Ja))),
        null == Hn ?
        (bo(a), In.push(a)) :
        3 === e ?
        sf(787, () => {
            Hn.handleAdConfig(a);
        }) :
        Hn.handleAdBreak(a).catch(vf(730));
    else {
        Ja = new Date().getTime();
        on(c, d, co(a));
        eo();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ('string' === typeof a.google_ad_client) {
                    e = !0;
                    break a;
                }
                throw new K("'google_ad_client' is missing from the tag config.");
            }
            e = !1;
        }
        if (e) fo(a, d, b);
        else if (
            ((e = a.params) &&
                Ec(e, (g, h) => {
                    b[h] = g;
                }),
                'js' === b.google_ad_output)
        )
            console.warn(
                "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
            );
        else {
            e = go(a.element);
            Bn(e, b);
            c = U(v).head_tag_slot_vars || {};
            Ec(c, (g, h) => {
                b.hasOwnProperty(h) || (b[h] = g);
            });
            if (e.hasAttribute('data-require-head') && !U(v).head_tag_slot_vars)
                throw new K(
                    "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
                );
            if (!b.google_ad_client) throw new K('Ad client is missing from the slot.');
            b.google_apsail = Il(b.google_ad_client);
            var f = (c = 0 === (U(J).first_tag_on_page || 0) && hk(b)) && ik(c);
            c && !f && (fo(c, d), (U(J).skip_next_reactive_tag = !0));
            0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 2);
            b.google_pause_ad_requests = !!U(J).pause_ad_requests;
            Mn(e, b, d);
            c && f && ho(c);
        }
    }
}
var io = !1;
function ao(a, b, c) {
    Q(hh) &&
        !io &&
        ((io = !0),
            (a = co(a)) || (a = sn()),
            uf(
                'predictive_abg', {
                    a_c: a,
                    p_c: b,
                    b_v: c
                },
                0.01
            ));
}
function co(a) {
    return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : '';
}
function eo() {
    if (Q(ch)) {
        var a = Vj(J);
        if (!(a = a && a.Da)) {
            try {
                var b = J.localStorage;
            } catch (c) {}
            b = null;
        }
        b = b ? Ti(b) : null;
        a = !(b && Qj(b) && b);
    }
    a || Xj(J, 1);
}
}
function ho(a) {
    Tc(() => {
        Af(v).wasPlaTagProcessed || (v.adsbygoogle && v.adsbygoogle.push(a));
    });
}
function fo(a, b, c) {
    U(J).skip_next_reactive_tag ?
        (U(J).skip_next_reactive_tag = !1) :
        (0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 1),
            c && a.tag_partner && (Wj(v, a.tag_partner), Wj(c, a.tag_partner)),
            (c = D(b, 6)),
            U(J).ama_ran_on_page || kk(new jk(a, c)),
            Un(a, b));
}
function go(a) {
    if (a) {
        if (!Ln(a) && (a.id ? (a = Pn(a.id)) : (a = null), !a)) throw new K("'element' has already been filled.");
        if (!('innerHTML' in a)) throw new K("'element' is not a good DOM element.");
    } else if (((a = Pn()), !a)) throw new K('All ins elements in the DOM with class=adsbygoogle already have ads in them.');
    return a;
}
function jo() {
    var a = new hj(J);
    var b = new Fn(J);
    var c = new Gn(J);
    var d = J.__cmp ? 1 : 0;
    a = ij(a) ? 1 : 0;
    var e;
    var f;
    (f = 'function' === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) ||
    (b.h ? (b = b.h) : ((b.h = Mc(b.i, '__uspapiLocator')), (b = b.h)), (f = null != b));
    c.l || (c.i || (c.i = c.h.googlefc ? c.h : Mc(c.h, 'googlefcPresent')), (c.l = !0));
    uf(
        'cmpMet', {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        },
        R(Ng)
    );
}
function ko(a) {
    a = {
        value: D(a, 16)
    };
    var b = 0.01;
    R(eh) && ((a.eid = R(eh)), (b = 1));
    a.frequency = b;
    uf('new_abg_tag', a, b);
}
function lo(a) {
    Xi().S[Zi(26)] = !!Number(a);
}
function mo(a) {
    Number(a) ?
        (U(J).pause_ad_requests = !0) :
        ((U(J).pause_ad_requests = !1),
            (a = () => {
                if (!U(J).pause_ad_requests)
                    if (Q(xh)) {
                        var b = void 0 === b ? {} : b;
                        if ('function' === typeof window.CustomEvent) var c = new CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', b);
                        else
                            (c = document.createEvent('CustomEvent')),
                            c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !!b.bubbles, !!b.cancelable, b.detail);
                        J.dispatchEvent(c);
                    } else {
                        b = fd();
                        var d = fd();
                        try {
                            if (Uc.createEvent)
                                (c = Uc.createEvent('CustomEvent')),
                                c.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !1, !1, ''),
                                b.dispatchEvent(c);
                            else if (ad(d.CustomEvent)) {
                                var e = new d.CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: ''
                                });
                                b.dispatchEvent(e);
                            } else if (ad(d.Event)) {
                                var f = new Event('adsbygoogle-pub-unpause-ad-requests-event', {
                                    bubbles: !1,
                                    cancelable: !1
                                });
                                b.dispatchEvent(f);
                            }
                        } catch (g) {}
                    }
            }),
            v.setTimeout(a, 0),
            v.setTimeout(a, 1e3));
}
function no(a) {
    uf(
        'adsenseGfpKnob', {
            value: a,
            ptt: 9
        },
        0.1
    );
    switch (a) {
        case 0:
        case 2:
            a = !0;
            break;
        case 1:
            a = !1;
            break;
        default:
            throw Error('Illegal value of cookieOptions: ' + a);
    }
    J._gfp_a_ = a;
}
function oo(a) {
    ad(a) && window.setTimeout(a, 0);
}
function Zn(a, b) {
    ((ba = fk(
                Tb(
                    Wb(gc(b.nb).toString()),
                    Rh() ? {
                        bust: Rh()
                    } : {}
                )
            )
            .then((c) => {
                null == Hn && (c.init(a), (Hn = c), po());
            })
            .catch(vf(723))),
        p(ba, 'finally')).call(ba, () => {
        In.length = 0;
        uf('slotcar', {
            event: 'api_ld',
            time: Date.now() - Ja,
            time_pr: Date.now() - Kn
        });
    });
}
function po() {
    for (var a = q(p(Jn, 'keys').call(Jn)), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = Jn.get(b); -
        1 !== c && (v.clearTimeout(c), Jn.delete(b));
    }
    a = {};
    for (
        b = 0; b < In.length; a = {
            da: a.da,
            Y: a.Y
        },
        b++
    )
        Jn.has(b) ||
        ((a.Y = In[b]),
            (a.da = $n(a.Y)),
            sf(
                723,
                ((d) => () => {
                    3 === d.da ? Hn.handleAdConfig(d.Y) : 2 === d.da && Hn.handleAdBreakBeforeReady(d.Y).catch(vf(730));
                })(a)
            ));
}
function bo(a) {
    var b = In.length;
    if (2 === $n(a) && 'preroll' === a.type && null != a.adBreakDone) {
        -1 === Kn && (Kn = Date.now());
        var c = v.setTimeout(() => {
                    try {
                        (0, a.adBreakDone)({
                            breakType: 'preroll',
                            breakName: a.name,
                            breakFormat: 'preroll',
                            breakStatus: 'timeout'
                        }),
                        Jn.set(b, -1),
                            uf('slotcar', {
                                event: 'pr_to',
                                source: 'adsbygoogle'
                            });
                    } catch (d) {}
                    console.error('[Ad Placement API] adBreakDone callback threw an error:', d instanceof Error ? d : Error(String(d)));
                }
            },
            1e3 * R(vh));
    Jn.set(b, c);
}
}
((a, b, c, d) => {
    d = void 0 === d ? () => {} : d;
    qf.Pa(wf);
    sf(166, () => {
        var e = xm(b);
        pm(Eb(e, 2));
        Bl(D(e, 6));
        d();
        kd(16, [1, e.toJSON()]);
        var f = Xc(Wc(J)) || J;
        var g = c(
            qm({
                $a: a,
                jb: Eb(e, 2)
            }),
            e
        );
        Q(mh) && Fl(f, e);
        om(f, e, null === J.document.currentScript ? 1 : Ol(g.qb));
        if ((!Qa() || 0 <= La(Ta(), 11)) && (null == (J.Prototype || {}).Version || !Q(fh))) {
            rf(Q(Ch));
            zn(e);
            Gj();
            try {
                Rm();
            } catch (r) {}
            yn();
            Xn(g, e);
            f = window;
            var h = f.adsbygoogle;
            if (!h || !h.loaded) {
                if (Q(dh) && !D(e, 16))
                    try {
                        if (J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return;
                    } catch (r) {}
                ko(e);
                R(Ng) && jo();
                var k = {
                    push(r) {
                        Rn(r, g, e);
                    },
                    loaded: !0
                };
                try {
                    Object.defineProperty(k, 'requestNonPersonalizedAds', {
                            set: lo
                        }),
                        Object.defineProperty(k, 'pauseAdRequests', {
                            set: mo
                        }),
                        Object.defineProperty(k, 'cookieOptions', {
                            set: no
                        }),
                        Object.defineProperty(k, 'onload', {
                            set: oo
                        });
                } catch (r) {}
                if (h)
                    for (var l = q(['requestNonPersonalizedAds', 'pauseAdRequests', 'cookieOptions']), m = l.next(); !m.done; m = l.next())
                        (m = m.value), void 0 !== h[m] && (k[m] = h[m]);
                '_gfp_a_' in window || (window._gfp_a_ = !0);
                Qn(h, g, e);
                f.adsbygoogle = k;
                h && (k.onload = h.onload);
                (f = un(g)) && document.documentElement.appendChild(f);
            }
        }
    });
})('m202111110101', wm, (a, b) => {
    var c = 2012 < C(b, 1, 0) ? '_fy' + C(b, 1, 0) : '';
    var d = Eb(b, 3);
    b = Eb(b, 2);
    var e = a ? fc(cl, a, c) : fc(dl, b, d, c);
    var f = fc(el, b, d);
    return {
        nb: e,
        mb: a ? fc(fl, a, c) : fc(gl, b, d, c),
        kb: a ? fc(hl, a, c) : fc(il, b, d, c),
        lb: a ? fc(jl, a, c) : fc(kl, b, d, c),
        rb: f,
        qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
    };
});
}.call(
this,
'[2019,"r20211111","r20190131",null,[],null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1096,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1101,null,null,[1]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1118,null,null,[1]],[230,null,null,[1]],[1124,null,null,[1]],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[1956,null,null,[1]],[379841917,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]],[393546021,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[50,[[44754331],[44754332,[[1090,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44754315,[[null,1103,null,[null,44754315]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,1000]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[10,[[31063693],[31063694,[[null,57,null,[null,30]]]],[31063695,[[null,57,null,[null,60]]]],[31063696,[[null,57,null,[null,90]]]]]],[100,[[31063735],[31063736,[[1053,null,null,[1]]]]]],[50,[[31063737],[31063738,[[1096,null,null,[]]]]]],[1000,[[31063759,[[null,null,14,[null,null,"31063759"]]],[6,null,null,null,6,null,"31063759"]],[31063760,[[null,null,14,[null,null,"31063760"]]],[6,null,null,null,6,null,"31063760"]]],[4,null,55]],[1000,[[31063781,[[null,null,14,[null,null,"31063781"]]],[6,null,null,null,6,null,"31063781"]],[31063782,[[null,null,14,[null,null,"31063782"]]],[6,null,null,null,6,null,"31063782"]]],[4,null,55]],[100,[[31063792],[31063793,[[1125,null,null,[1]]]]]],[1000,[[31063796,[[null,null,14,[null,null,"31063796"]]],[6,null,null,null,6,null,"31063796"]],[31063797,[[null,null,14,[null,null,"31063797"]]],[6,null,null,null,6,null,"31063797"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44755656],[44755657]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[500,[[31063741,null,[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[1,[[31063150]],[4,null,63]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]]],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,"Chrome/(9[3456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[],null,null,null,null,706409994]'
));
var e = a ? fc(cl, a, c) : fc(dl, b, d, c);
var f = fc(el, b, d);
return {
    nb: e,
    mb: a ? fc(fl, a, c) : fc(gl, b, d, c),
    kb: a ? fc(hl, a, c) : fc(il, b, d, c),
    lb: a ? fc(jl, a, c) : fc(kl, b, d, c),
    rb: f,
    qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
};
});
}.call(
this,
'[2019,"r20211111","r20190131",null,[],null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1096,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1101,null,null,[1]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1118,null,null,[1]],[230,null,null,[1]],[1124,null,null,[1]],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[1956,null,null,[1]],[379841917,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]],[393546021,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[50,[[44754331],[44754332,[[1090,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44754315,[[null,1103,null,[null,44754315]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,1000]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[10,[[31063693],[31063694,[[null,57,null,[null,30]]]],[31063695,[[null,57,null,[null,60]]]],[31063696,[[null,57,null,[null,90]]]]]],[100,[[31063735],[31063736,[[1053,null,null,[1]]]]]],[50,[[31063737],[31063738,[[1096,null,null,[]]]]]],[1000,[[31063759,[[null,null,14,[null,null,"31063759"]]],[6,null,null,null,6,null,"31063759"]],[31063760,[[null,null,14,[null,null,"31063760"]]],[6,null,null,null,6,null,"31063760"]]],[4,null,55]],[1000,[[31063781,[[null,null,14,[null,null,"31063781"]]],[6,null,null,null,6,null,"31063781"]],[31063782,[[null,null,14,[null,null,"31063782"]]],[6,null,null,null,6,null,"31063782"]]],[4,null,55]],[100,[[31063792],[31063793,[[1125,null,null,[1]]]]]],[1000,[[31063796,[[null,null,14,[null,null,"31063796"]]],[6,null,null,null,6,null,"31063796"]],[31063797,[[null,null,14,[null,null,"31063797"]]],[6,null,null,null,6,null,"31063797"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44755656],[44755657]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[500,[[31063741,null,[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[1,[[31063150]],[4,null,63]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]]],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,"Chrome/(9[3456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[],null,null,null,null,706409994]'
));
b = Eb(b, 2);
var e = a ? fc(cl, a, c) : fc(dl, b, d, c);
var f = fc(el, b, d);
return {
    nb: e,
    mb: a ? fc(fl, a, c) : fc(gl, b, d, c),
    kb: a ? fc(hl, a, c) : fc(il, b, d, c),
    lb: a ? fc(jl, a, c) : fc(kl, b, d, c),
    rb: f,
    qb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
};
});
}.call(
this,
'[2019,"r20211111","r20190131",null,[],null,null,null,null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[null,1010,null,[null,1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1096,null,null,[1]],[1089,null,null,[1]],[1097,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1101,null,null,[1]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1118,null,null,[1]],[230,null,null,[1]],[1124,null,null,[1]],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[1956,null,null,[1]],[379841917,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[396382471,null,null,[1]],[393546021,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[10,[[44753738,[[290,null,null,[]]]],[44753739,[[null,1072,null,[null,0.5]],[290,null,null,[]]]],[44753740,[[null,1072,null,[null,0.75]],[290,null,null,[]]]],[44753741,[[null,1072,null,[null,0.9]],[290,null,null,[]]]],[44753742,[[null,1072,null,[null,1]],[290,null,null,[]]]],[44753743,[[null,1072,null,[null,1.01]],[290,null,null,[]]]]],null,null,null,53,null,200],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1033,null,null,[1]]]],[44755594,[[1033,null,null,[1]]]],[44755653,[[1033,null,null,[1]]]]]],[50,[[44754331],[44754332,[[1090,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062937],[31062938,[[1095,null,null,[1]]]]]],[1,[[31063331,[[null,1103,null,[null,31063331]],[1121,null,null,[1]]]],[31063332,[[null,1103,null,[null,31063332]],[1121,null,null,[1]],[1120,null,null,[1]]]],[31063333,[[null,1103,null,[null,31063333]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44754313,[[null,1103,null,[null,44754313]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,100]],[1120,null,null,[1]]]],[44754314,[[null,1103,null,[null,44754314]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,500]],[1120,null,null,[1]]]],[44754315,[[null,1103,null,[null,44754315]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,1000]],[1120,null,null,[1]]]],[44755514,[[null,1103,null,[null,44755514]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755515,[[null,1103,null,[null,44755515]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755516,[[null,1103,null,[null,44755516]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]],[44755517,[[null,1103,null,[null,44755517]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[1120,null,null,[1]]]]]],[10,[[31063693],[31063694,[[null,57,null,[null,30]]]],[31063695,[[null,57,null,[null,60]]]],[31063696,[[null,57,null,[null,90]]]]]],[100,[[31063735],[31063736,[[1053,null,null,[1]]]]]],[50,[[31063737],[31063738,[[1096,null,null,[]]]]]],[1000,[[31063759,[[null,null,14,[null,null,"31063759"]]],[6,null,null,null,6,null,"31063759"]],[31063760,[[null,null,14,[null,null,"31063760"]]],[6,null,null,null,6,null,"31063760"]]],[4,null,55]],[1000,[[31063781,[[null,null,14,[null,null,"31063781"]]],[6,null,null,null,6,null,"31063781"]],[31063782,[[null,null,14,[null,null,"31063782"]]],[6,null,null,null,6,null,"31063782"]]],[4,null,55]],[100,[[31063792],[31063793,[[1125,null,null,[1]]]]]],[1000,[[31063796,[[null,null,14,[null,null,"31063796"]]],[6,null,null,null,6,null,"31063796"]],[31063797,[[null,null,14,[null,null,"31063797"]]],[6,null,null,null,6,null,"31063797"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44754319,[[null,1103,null,[null,44754319]]]],[44754320,[[null,1103,null,[null,44754320]],[1120,null,null,[1]]]],[44754321,[[null,1103,null,[null,44754321]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754322,[[null,1103,null,[null,44754322]],[null,1114,null,[null,0.9]],[null,1108,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754323,[[null,1103,null,[null,44754323]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754324,[[null,1103,null,[null,44754324]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]],[44754325,[[null,1103,null,[null,44754325]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1120,null,null,[1]]]]]],[10,[[44755656],[44755657]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]]],[10,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[500,[[31063741,null,[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,["top.frames.google_ads_top_frame"]]]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063122]],[4,null,61]],[1,[[31063150]],[4,null,63]],[50,[[31063182],[31063183,[[1956,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]]],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,"Chrome/(9[3456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[13,[[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[],null,null,null,null,706409994]'
));
