(function (sttc) {
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var aa, ba;
    function ca(a) {
        var b = 0;
        return function () {
            return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        };
    }
    var da =
        'function' == typeof Object.defineProperties
            ? Object.defineProperty
            : function (a, b, c) {
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
    var fa = ea(this),
        ha = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x'),
        n = {},
        ia = {};
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
                var e = d[0],
                    f;
                !a && e in n ? (f = n) : (f = fa);
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g];
                }
                d = d[d.length - 1];
                c = ha && 'es6' === c ? f[d] : null;
                b = b(c);
                null != b &&
                    (a
                        ? da(n, d, { configurable: !0, writable: !0, value: b })
                        : b !== c &&
                          (void 0 === ia[d] && ((a = (1e9 * Math.random()) >>> 0), (ia[d] = ha ? fa.Symbol(d) : '$jscp$' + a + '$' + d)),
                          da(f, ia[d], { configurable: !0, writable: !0, value: b })));
            }
    }
    ja(
        'Symbol',
        function (a) {
            function b(f) {
                if (this instanceof b) throw new TypeError('Symbol is not a constructor');
                return new c(d + (f || '') + '_' + e++, f);
            }
            function c(f, g) {
                this.h = f;
                da(this, 'description', { configurable: !0, writable: !0, value: g });
            }
            if (a) return a;
            c.prototype.toString = function () {
                return this.h;
            };
            var d = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
                e = 0;
            return b;
        },
        'es6'
    );
    ja(
        'Symbol.iterator',
        function (a) {
            if (a) return a;
            a = (0, n.Symbol)('Symbol.iterator');
            for (
                var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '),
                    c = 0;
                c < b.length;
                c++
            ) {
                var d = fa[b[c]];
                'function' === typeof d &&
                    'function' != typeof d.prototype[a] &&
                    da(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return ka(ca(this));
                        }
                    });
            }
            return a;
        },
        'es6'
    );
    function ka(a) {
        a = { next: a };
        a[p(n.Symbol, 'iterator')] = function () {
            return this;
        };
        return a;
    }
    function la(a) {
        return (a.raw = a);
    }
    function q(a) {
        var b = 'undefined' != typeof n.Symbol && p(n.Symbol, 'iterator') && a[p(n.Symbol, 'iterator')];
        return b ? b.call(a) : { next: ca(a) };
    }
    function ma(a) {
        if (!(a instanceof Array)) {
            a = q(a);
            for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
            a = c;
        }
        return a;
    }
    var na =
            'function' == typeof Object.create
                ? Object.create
                : function (a) {
                      function b() {}
                      b.prototype = a;
                      return new b();
                  },
        oa;
    if (ha && 'function' == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = { a: !0 },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a;
            } catch (a) {}
            pa = !1;
        }
        oa = pa
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
              }
            : null;
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
    function ta() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b;
    }
    ja(
        'Promise',
        function (a) {
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
                return g instanceof b
                    ? g
                    : new b(function (h) {
                          h(g);
                      });
            }
            if (a) return a;
            c.prototype.i = function (g) {
                if (null == this.h) {
                    this.h = [];
                    var h = this;
                    this.j(function () {
                        h.m();
                    });
                }
                this.h.push(g);
            };
            var e = fa.setTimeout;
            c.prototype.j = function (g) {
                e(g, 0);
            };
            c.prototype.m = function () {
                for (; this.h && this.h.length; ) {
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
            c.prototype.l = function (g) {
                this.j(function () {
                    throw g;
                });
            };
            b.prototype.l = function () {
                function g(l) {
                    return function (m) {
                        k || ((k = !0), l.call(h, m));
                    };
                }
                var h = this,
                    k = !1;
                return { resolve: g(this.O), reject: g(this.m) };
            };
            b.prototype.O = function (g) {
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
            b.prototype.N = function (g) {
                var h = void 0;
                try {
                    h = g.then;
                } catch (k) {
                    this.m(k);
                    return;
                }
                'function' == typeof h ? this.ea(h, g) : this.v(g);
            };
            b.prototype.m = function (g) {
                this.A(2, g);
            };
            b.prototype.v = function (g) {
                this.A(1, g);
            };
            b.prototype.A = function (g, h) {
                if (0 != this.h) throw Error('Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.h);
                this.h = g;
                this.j = h;
                2 === this.h && this.P();
                this.H();
            };
            b.prototype.P = function () {
                var g = this;
                e(function () {
                    if (g.M()) {
                        var h = fa.console;
                        'undefined' !== typeof h && h.error(g.j);
                    }
                }, 1);
            };
            b.prototype.M = function () {
                if (this.D) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ('undefined' === typeof k) return !0;
                'function' === typeof g
                    ? (g = new g('unhandledrejection', { cancelable: !0 }))
                    : 'function' === typeof h
                    ? (g = new h('unhandledrejection', { cancelable: !0 }))
                    : ((g = fa.document.createEvent('CustomEvent')), g.initCustomEvent('unhandledrejection', !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g);
            };
            b.prototype.H = function () {
                if (null != this.i) {
                    for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                    this.i = null;
                }
            };
            var f = new c();
            b.prototype.R = function (g) {
                var h = this.l();
                g.ga(h.resolve, h.reject);
            };
            b.prototype.ea = function (g, h) {
                var k = this.l();
                try {
                    g.call(h, k.resolve, k.reject);
                } catch (l) {
                    k.reject(l);
                }
            };
            b.prototype.then = function (g, h) {
                function k(t, x) {
                    return 'function' == typeof t
                        ? function (E) {
                              try {
                                  l(t(E));
                              } catch (B) {
                                  m(B);
                              }
                          }
                        : x;
                }
                var l,
                    m,
                    r = new b(function (t, x) {
                        l = t;
                        m = x;
                    });
                this.ga(k(g, l), k(h, m));
                return r;
            };
            b.prototype.catch = function (g) {
                return this.then(void 0, g);
            };
            b.prototype.ga = function (g, h) {
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
            b.reject = function (g) {
                return new b(function (h, k) {
                    k(g);
                });
            };
            b.race = function (g) {
                return new b(function (h, k) {
                    for (var l = q(g), m = l.next(); !m.done; m = l.next()) d(m.value).ga(h, k);
                });
            };
            b.all = function (g) {
                var h = q(g),
                    k = h.next();
                return k.done
                    ? d([])
                    : new b(function (l, m) {
                          function r(E) {
                              return function (B) {
                                  t[E] = B;
                                  x--;
                                  0 == x && l(t);
                              };
                          }
                          var t = [],
                              x = 0;
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
        function (a) {
            return a
                ? a
                : function (b, c) {
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
                  };
        },
        'es6'
    );
    function ua(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    ja(
        'WeakMap',
        function (a) {
            function b(g) {
                this.h = (f += Math.random() + 1).toString();
                if (g) {
                    g = q(g);
                    for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
                }
            }
            function c() {}
            function d(g) {
                var h = typeof g;
                return ('object' === h && null !== g) || 'function' === h;
            }
            if (
                (function () {
                    if (!a || !Object.seal) return !1;
                    try {
                        var g = Object.seal({}),
                            h = Object.seal({}),
                            k = new a([
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
            var e = '$jscomp_hidden_' + Math.random(),
                f = 0;
            b.prototype.set = function (g, h) {
                if (!d(g)) throw Error('Invalid WeakMap key');
                if (!ua(g, e)) {
                    var k = new c();
                    da(g, e, { value: k });
                }
                if (!ua(g, e)) throw Error('WeakMap key fail: ' + g);
                g[e][this.h] = h;
                return this;
            };
            b.prototype.get = function (g) {
                return d(g) && ua(g, e) ? g[e][this.h] : void 0;
            };
            b.prototype.has = function (g) {
                return d(g) && ua(g, e) && ua(g[e], this.h);
            };
            b.prototype.delete = function (g) {
                return d(g) && ua(g, e) && ua(g[e], this.h) ? delete g[e][this.h] : !1;
            };
            return b;
        },
        'es6'
    );
    ja(
        'Map',
        function (a) {
            function b() {
                var h = {};
                return (h.L = h.next = h.head = h);
            }
            function c(h, k) {
                var l = h.h;
                return ka(function () {
                    if (l) {
                        for (; l.head != h.h; ) l = l.L;
                        for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
                        l = null;
                    }
                    return { done: !0, value: void 0 };
                });
            }
            function d(h, k) {
                var l = k && typeof k;
                'object' == l || 'function' == l ? (f.has(k) ? (l = f.get(k)) : ((l = '' + ++g), f.set(k, l))) : (l = 'p_' + k);
                var m = h.i[l];
                if (m && ua(h.i, l))
                    for (h = 0; h < m.length; h++) {
                        var r = m[h];
                        if ((k !== k && r.key !== r.key) || k === r.key) return { id: l, list: m, index: h, u: r };
                    }
                return { id: l, list: m, index: -1, u: void 0 };
            }
            function e(h) {
                this.i = {};
                this.h = b();
                this.size = 0;
                if (h) {
                    h = q(h);
                    for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                }
            }
            if (
                (function () {
                    if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
                    try {
                        var h = Object.seal({ x: 4 }),
                            k = new a(q([[h, 's']]));
                        if ('s' != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, 't') != k || 2 != k.size) return !1;
                        var l = k.entries(),
                            m = l.next();
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
            e.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.i[l.id] = []);
                l.u
                    ? (l.u.value = k)
                    : ((l.u = { next: this.h, L: this.h.L, head: this.h, key: h, value: k }),
                      l.list.push(l.u),
                      (this.h.L.next = l.u),
                      (this.h.L = l.u),
                      this.size++);
                return this;
            };
            e.prototype.delete = function (h) {
                h = d(this, h);
                return h.u && h.list
                    ? (h.list.splice(h.index, 1),
                      h.list.length || delete this.i[h.id],
                      (h.u.L.next = h.u.next),
                      (h.u.next.L = h.u.L),
                      (h.u.head = null),
                      this.size--,
                      !0)
                    : !1;
            };
            e.prototype.clear = function () {
                this.i = {};
                this.h = this.h.L = b();
                this.size = 0;
            };
            e.prototype.has = function (h) {
                return !!d(this, h).u;
            };
            e.prototype.get = function (h) {
                return (h = d(this, h).u) && h.value;
            };
            e.prototype.entries = function () {
                return c(this, function (h) {
                    return [h.key, h.value];
                });
            };
            e.prototype.keys = function () {
                return c(this, function (h) {
                    return h.key;
                });
            };
            e.prototype.values = function () {
                return c(this, function (h) {
                    return h.value;
                });
            };
            e.prototype.forEach = function (h, k) {
                for (var l = this.entries(), m; !(m = l.next()).done; ) (m = m.value), h.call(k, m[1], m[0], this);
            };
            e.prototype[p(n.Symbol, 'iterator')] = e.prototype.entries;
            var g = 0;
            return e;
        },
        'es6'
    );
    function wa(a, b) {
        a instanceof String && (a += '');
        var c = 0,
            d = !1,
            e = {
                next: function () {
                    if (!d && c < a.length) {
                        var f = c++;
                        return { value: b(f, a[f]), done: !1 };
                    }
                    d = !0;
                    return { done: !0, value: void 0 };
                }
            };
        e[p(n.Symbol, 'iterator')] = function () {
            return e;
        };
        return e;
    }
    var xa =
        ha && 'function' == typeof p(Object, 'assign')
            ? p(Object, 'assign')
            : function (a, b) {
                  for (var c = 1; c < arguments.length; c++) {
                      var d = arguments[c];
                      if (d) for (var e in d) ua(d, e) && (a[e] = d[e]);
                  }
                  return a;
              };
    ja(
        'Object.assign',
        function (a) {
            return a || xa;
        },
        'es6'
    );
    ja(
        'Set',
        function (a) {
            function b(c) {
                this.h = new n.Map();
                if (c) {
                    c = q(c);
                    for (var d; !(d = c.next()).done; ) this.add(d.value);
                }
                this.size = this.h.size;
            }
            if (
                (function () {
                    if (!a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal) return !1;
                    try {
                        var c = Object.seal({ x: 4 }),
                            d = new a(q([c]));
                        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
                        var e = d.entries(),
                            f = e.next();
                        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                        f = e.next();
                        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
                    } catch (g) {
                        return !1;
                    }
                })()
            )
                return a;
            b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.h.set(c, c);
                this.size = this.h.size;
                return this;
            };
            b.prototype.delete = function (c) {
                c = this.h.delete(c);
                this.size = this.h.size;
                return c;
            };
            b.prototype.clear = function () {
                this.h.clear();
                this.size = 0;
            };
            b.prototype.has = function (c) {
                return this.h.has(c);
            };
            b.prototype.entries = function () {
                return this.h.entries();
            };
            b.prototype.values = function () {
                return p(this.h, 'values').call(this.h);
            };
            b.prototype.keys = p(b.prototype, 'values');
            b.prototype[p(n.Symbol, 'iterator')] = p(b.prototype, 'values');
            b.prototype.forEach = function (c, d) {
                var e = this;
                this.h.forEach(function (f) {
                    return c.call(d, f, f, e);
                });
            };
            return b;
        },
        'es6'
    );
    ja(
        'String.prototype.startsWith',
        function (a) {
            return a
                ? a
                : function (b, c) {
                      if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
                      if (b instanceof RegExp) throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
                      var d = this.length,
                          e = b.length;
                      c = Math.max(0, Math.min(c | 0, this.length));
                      for (var f = 0; f < e && c < d; ) if (this[c++] != b[f++]) return !1;
                      return f >= e;
                  };
        },
        'es6'
    );
    ja(
        'globalThis',
        function (a) {
            return a || fa;
        },
        'es_2020'
    );
    ja(
        'Array.prototype.keys',
        function (a) {
            return a
                ? a
                : function () {
                      return wa(this, function (b) {
                          return b;
                      });
                  };
        },
        'es6'
    );
    ja(
        'Array.prototype.values',
        function (a) {
            return a
                ? a
                : function () {
                      return wa(this, function (b, c) {
                          return c;
                      });
                  };
        },
        'es8'
    );
    ja(
        'Promise.prototype.finally',
        function (a) {
            return a
                ? a
                : function (b) {
                      return this.then(
                          function (c) {
                              return n.Promise.resolve(b()).then(function () {
                                  return c;
                              });
                          },
                          function (c) {
                              return n.Promise.resolve(b()).then(function () {
                                  throw c;
                              });
                          }
                      );
                  };
        },
        'es9'
    );
    var v = this || self;
    function ya(a) {
        a = a.split('.');
        for (var b = v, c = 0; c < a.length; c++) if (((b = b[a[c]]), null == b)) return null;
        return b;
    }
    function za(a) {
        var b = typeof a;
        return ('object' == b && null != a) || 'function' == b;
    }
    function Aa(a) {
        return (Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba]) || (a[Ba] = ++Ca);
    }
    var Ba = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
        Ca = 0;
    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }
    function Ea(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    }
    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? (Fa = Da) : (Fa = Ea);
        return Fa.apply(null, arguments);
    }
    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    }
    function Ha(a) {
        var b = ['__uspapi'],
            c = v;
        b[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + b[0]);
        for (var d; b.length && (d = b.shift()); )
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
            var f = a[e] || '',
                g = b[e] || '';
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
        a.forEach(function (c) {
            b[c[0]] = c[1];
        });
        return function (c) {
            return (
                b[
                    p(c, 'find').call(c, function (d) {
                        return d in b;
                    })
                ] || ''
            );
        };
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
        for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
        a = Sa(b);
        return w('Opera')
            ? a(['Version', 'Opera'])
            : w('Edge')
            ? a(['Edge'])
            : w('Edg/')
            ? a(['Edg'])
            : w('Silk')
            ? a(['Silk'])
            : Ra()
            ? a(['Chrome', 'CriOS', 'HeadlessChrome'])
            : ((a = b[2]) && a[1]) || '';
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
        for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
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
    ab[' '] = function () {};
    var bb = Qa();
    !w('Android') || Ra();
    Ra();
    !w('Safari') || Ra();
    var cb = {},
        db = null;
    var eb = 'function' === typeof Uint8Array;
    var fb = 'function' === typeof n.Symbol && 'symbol' === typeof (0, n.Symbol)() ? (0, n.Symbol)(void 0) : void 0;
    function hb(a) {
        Object.isFrozen(a) ||
            (fb ? (a[fb] |= 1) : void 0 !== a.h ? (a.h |= 1) : Object.defineProperties(a, { h: { value: 1, configurable: !0, writable: !0, enumerable: !1 } }));
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
                            var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), d = ['+/=', '+/', '-_=', '-_.', '-_'], e = 0;
                            5 > e;
                            e++
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
                        var k = a[f],
                            l = a[f + 1];
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
                    a < this.m
                        ? ((a += this.l), (d = this.i[a]) ? Array.isArray(d) && hb(d) : (this.i[a] = qb))
                        : (rb(this), (d = this.j[a]) ? Array.isArray(d) && hb(d) : (this.j[a] = qb));
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
    y.prototype.toJSON = function () {
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
    var Mb = {},
        Lb = {};
    function Nb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c;
    }
    function Ob(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1;
    }
    function Pb(a) {
        var b = {},
            c;
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
    Rb.prototype.toString = function () {
        return this.h + '';
    };
    function Vb(a) {
        return a instanceof Rb && a.constructor === Rb ? a.h : 'type_error:TrustedResourceUrl';
    }
    var Ub = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Sb = {};
    function Wb(a) {
        if (void 0 === Qb) {
            var b = null;
            var c = v.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy('goog#html', { createHTML: Ia, createScript: Ia, createScriptURL: Ia });
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
    } /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    var Yb = {};
    function Zb() {
        var a = 'undefined' !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null;
    }
    var $b;
    function ac() {
        var a, b;
        if (void 0 === $b)
            try {
                $b =
                    null !==
                        (b =
                            null === (a = Zb()) || void 0 === a
                                ? void 0
                                : a.createPolicy('google#safe', {
                                      createHTML: function (c) {
                                          return c;
                                      },
                                      createScript: function (c) {
                                          return c;
                                      },
                                      createScriptURL: function (c) {
                                          return c;
                                      }
                                  })) && void 0 !== b
                        ? b
                        : null;
            } catch (c) {
                $b = null;
            }
        return $b;
    }
    function bc() {}
    function cc(a) {
        this.h = a;
    }
    u(cc, bc);
    cc.prototype.toString = function () {
        return this.h.toString();
    };
    function dc(a) {
        var b,
            c = null === (b = ac()) || void 0 === b ? void 0 : b.createScriptURL(a);
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
        return function () {
            return !a.apply(this, arguments);
        };
    }
    function ic(a) {
        var b = !1,
            c;
        return function () {
            b || ((c = a()), (b = !0));
            return c;
        };
    }
    function jc(a) {
        var b = a;
        return function () {
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
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase();
        });
    }
    function nc(a, b) {
        b = String(b);
        'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
        return a.createElement(b);
    }
    function oc(a) {
        this.h = a || v.document || document;
    }
    oc.prototype.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ('undefined' != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; ) b = b.parentNode;
        return b == a;
    };
    function rc() {
        return !sc() && (w('iPod') || w('iPhone') || w('Android') || w('IEMobile'));
    }
    function sc() {
        return w('iPad') || (w('Android') && !w('Mobile')) || w('Silk');
    }
    var tc = RegExp('^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'),
        uc = /#|$/;
    function vc(a) {
        var b = a.search(uc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf('client', c)) && c < b; ) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d) if (((d = a.charCodeAt(c + 6)), !d || 61 == d || 38 == d || 35 == d)) break a;
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
        if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
    }
    function Fc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
        return 0 < c ? c : 4294967296 + c;
    }
    var Cc = ic(function () {
        return Xa(['Google Web Preview', 'Mediapartners-Google', 'Google-Read-Aloud', 'Google-Adwords'], Gc) || 1e-4 > Math.random();
    });
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
    var Bc = ic(function () {
        return Gc('MSIE');
    });
    function Gc(a) {
        return -1 != Na.indexOf(a);
    }
    var Jc = /^([0-9.]+)px$/,
        Kc = /^(-?[0-9.]{1,30})$/;
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
    var Nc = ic(function () {
        return rc() ? 2 : sc() ? 1 : 0;
    });
    function Oc(a) {
        Ec({ display: 'none' }, function (b, c) {
            a.style.setProperty(c, b, 'important');
        });
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
            a.forEach(function (c) {
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
                Object.defineProperty(a, 'goog_pvsid', { value: Math.floor(Math.random() * Math.pow(2, 52)), configurable: !1 });
            } catch (b) {}
        return Number(a.goog_pvsid) || -1;
    }
    function Tc(a) {
        var b = Uc;
        'complete' === b.readyState || 'interactive' === b.readyState
            ? (Pc.push(a), 1 == Pc.length && (n.Promise ? n.Promise.resolve().then(Qc) : window.setImmediate ? setImmediate(Qc) : setTimeout(Qc, 0)))
            : b.addEventListener('DOMContentLoaded', a);
    }
    function yc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase());
    }
    var Vc = null;
    var Uc = document,
        J = window;
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
        Ec(a, function (d, e) {
            d && (c += '&' + e + '=' + encodeURIComponent(d));
        });
        $c(c);
    }
    function $c(a) {
        var b = window;
        b.fetch ? b.fetch(a, { keepalive: !0, credentials: 'include', redirect: 'follow', method: 'get', mode: 'no-cors' }) : Yc(b, a);
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
    var dd = !!window.google_async_iframe_id,
        ed = (dd && window.parent) || window;
    function fd() {
        if (dd && !wc(ed)) {
            0.01 > Math.random() && Zc({ stack: Error().stack }, 'badpubwin');
            var a = '.' + Uc.domain;
            try {
                for (; 2 < a.split('.').length && !wc(ed); ) (Uc.domain = a = a.substr(a.indexOf('.') + 1)), (ed = window.parent);
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
        Ec(a, function (g, h) {
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
        var c = 'https://pagead2.googlesyndication.com' + b,
            d = vd(a) - b.length;
        if (0 > d) return '';
        a.h.sort(function (m, r) {
            return m - r;
        });
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
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1;
    }
    function wd() {
        this.h = Math.random();
    }
    function xd() {
        var a = yd,
            b = v.google_srt;
        0 <= b && 1 >= b && (a.h = b);
    }
    function zd(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || 0.01))
            try {
                if (c instanceof qd) var f = c;
                else
                    (f = new qd()),
                        Ec(c, function (h, k) {
                            var l = f,
                                m = l.l++;
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
    var Fd = v.performance,
        Gd = !!(Fd && Fd.mark && Fd.measure && Fd.clearMarks),
        Hd = ic(function () {
            var a;
            if ((a = Gd)) (a = Bd()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
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
    Id.prototype.start = function (a, b) {
        if (!this.h) return null;
        a = new Ed(a, b);
        b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
        Fd && Hd() && Fd.mark(b);
        return a;
    };
    Id.prototype.end = function (a) {
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
    aa.Pa = function (a) {
        this.l = a;
    };
    aa.Oa = function (a) {
        this.i = a;
    };
    aa.Qa = function (a) {
        this.j = a;
    };
    aa.ma = function (a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d);
            } else e = b();
        } catch (h) {
            b = !0;
            try {
                Jd(d), (b = this.l(a, new ld(h, { message: Md(h) }), void 0, c));
            } catch (k) {
                this.I(217, k);
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h);
            } else throw h;
        }
        return e;
    };
    aa.La = function (a, b, c, d) {
        var e = this;
        return function () {
            var f = ta.apply(0, arguments);
            return e.ma(
                a,
                function () {
                    return b.apply(c, f);
                },
                d
            );
        };
    };
    aa.I = function (a, b, c, d, e) {
        e = e || 'jserror';
        try {
            var f = new qd();
            f.h.push(1);
            f.i[1] = rd('context', a);
            md(b) || (b = new ld(b, { message: Md(b) }));
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
                } else (l = g), (g = null);
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
            var gb = { url: F.h.url || '' };
            if (F.h.url) {
                var qc = F.h.url.match(tc),
                    Ef = qc[1],
                    Ff = qc[3],
                    Gf = qc[4];
                t = '';
                Ef && (t += Ef + ':');
                Ff && ((t += '//'), (t += Ff), Gf && (t += ':' + Gf));
                var Hf = t;
            } else Hf = '';
            gb = [gb, { url: Hf }];
            f.h.push(5);
            f.i[5] = gb;
            zd(this.m, e, f, this.j, c);
        } catch (pc) {
            try {
                zd(this.m, e, { context: 'ecmserr', rctx: a, msg: Md(pc), url: F && F.h.url }, this.j, c);
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
                for (var c; a != c; ) (c = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
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
    var Sd = [2, 8],
        Td = [3, 4, 5],
        Ud = [6, 7];
    var Vd;
    Vd = { sb: 0, Ta: 3, Ua: 4, Va: 5 };
    var Wd = Vd.Ta,
        Xd = Vd.Ua,
        Yd = Vd.Va;
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
        c = Wa(c, function (d) {
            return function () {
                return ae(d, b);
            };
        });
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
                var e = b.apply(null, ma(sb(a, 8)));
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
    var he = [5],
        ie = [1, 2, 3, 6, 7];
    function je(a) {
        a.ib.apply(
            a,
            ma(
                ta.apply(1, arguments).map(function (b) {
                    return { pb: 4, message: b };
                })
            )
        );
    }
    function ke(a) {
        return function () {
            var b = ta.apply(0, arguments);
            try {
                return a.apply(this, b);
            } catch (c) {}
        };
    }
    var le = ke(function (a) {
        var b = [],
            c = {};
        a = q(a);
        for (var d = a.next(); !d.done; c = { ca: c.ca }, d = a.next())
            (c.ca = d.value),
                ke(
                    (function (e) {
                        return function () {
                            b.push('[{"' + e.ca.pb + '":' + Cb(e.ca.message) + '}]');
                        };
                    })(c)
                )();
        return '[[' + b.join(',') + ']]';
    });
    function me(a, b) {
        if (n.globalThis.fetch)
            n.globalThis.fetch(a, { method: 'POST', body: b, keepalive: 65536 > b.length, credentials: 'omit', mode: 'no-cors', redirect: 'follow' });
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
    ne.prototype.ib = function () {
        var a = ta.apply(0, arguments),
            b = this;
        ke(function () {
            b.i.push.apply(b.i, ma(a));
            var c = ke(function () {
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
    qe.prototype.$ = function () {
        return C(this, 1, 0);
    };
    function re(a) {
        y.call(this, a);
    }
    u(re, y);
    var pe = [2, 4, 5],
        se = [1, 2];
    function te(a) {
        y.call(this, a, -1, ue);
    }
    u(te, y);
    function ve(a) {
        y.call(this, a);
    }
    u(ve, y);
    var ue = [2, 3],
        we = [1, 2, 3, 4];
    function xe(a) {
        y.call(this, a);
    }
    u(xe, y);
    xe.prototype.getTagSessionCorrelator = function () {
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
    var Ge = ic(function () {
        if (!De) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem('GGDFSSK');
            if (a) return JSON.parse(a);
        } catch (b) {}
        return {};
    });
    function He(a, b, c, d) {
        var e = (d = void 0 === d ? 0 : d),
            f,
            g;
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
            var c = Za(H(a, fe, 5), function (d) {
                return ce(G(d, Rd, 1), b);
            });
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
        Ec(a, function (d, e) {
            return (c[e] = d);
        });
    }
    function Qe(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ua(b, function (h) {
            var k = Je(h);
            Ua(a, function (l) {
                var m = xb(l, ie),
                    r = Ee(l, m);
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
                        var B, F;
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
        Ua(a, function (d) {
            var e = new ge(d),
                f = xb(e, ie);
            (e = Ee(e, f)) && (c[e] || (c[e] = d));
        });
    }
    function Se() {
        return Wa(p(Object, 'keys').call(Object, L(Ie).h), function (a) {
            return Number(a);
        });
    }
    function Te(a) {
        $a(L(Ie).l, a) || Pe(Je(4), a);
    }
    function M(a) {
        this.methodName = a;
    }
    var Ue = new M(1),
        Ve = new M(16),
        We = new M(15),
        Xe = new M(2),
        Ye = new M(3),
        Ze = new M(4),
        $e = new M(5),
        af = new M(6),
        bf = new M(7),
        cf = new M(8),
        df = new M(9),
        ef = new M(10),
        ff = new M(11),
        gf = new M(12),
        hf = new M(13),
        jf = new M(14);
    function N(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), { value: b });
    }
    function kf(a, b, c) {
        return b[a.methodName] || c || function () {};
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
            function (b) {
                L(Ce).h = b;
            },
            a
        );
        N(
            df,
            function (b, c) {
                var d = L(Ce);
                d.h[Wd][b] || (d.h[Wd][b] = c);
            },
            a
        );
        N(
            ef,
            function (b, c) {
                var d = L(Ce);
                d.h[Xd][b] || (d.h[Xd][b] = c);
            },
            a
        );
        N(
            ff,
            function (b, c) {
                var d = L(Ce);
                d.h[Yd][b] || (d.h[Yd][b] = c);
            },
            a
        );
        N(
            jf,
            function (b) {
                for (var c = L(Ce), d = q([Wd, Xd, Yd]), e = d.next(); !e.done; e = d.next()) (e = e.value), p(Object, 'assign').call(Object, c.h[e], b[e]);
            },
            a
        );
    }
    function nf(a) {
        a.hasOwnProperty('init-done') || Object.defineProperty(a, 'init-done', { value: !0 });
    }
    function of() {
        this.l = function () {};
        this.j = function () {};
        this.i = function () {};
        this.h = function () {
            return [];
        };
    }
    function pf(a, b, c) {
        a.l = kf(Ue, b, function () {});
        a.i = function (d) {
            kf(Xe, b, function () {
                return [];
            })(d, c);
        };
        a.h = function () {
            return kf(Ye, b, function () {
                return [];
            })(c);
        };
        a.j = function (d) {
            kf(Ve, b, function () {})(d, c);
        };
    }
    var yd,
        qf,
        Ld = new Id();
    function rf(a) {
        null != a && (v.google_measure_js_timing = a);
        v.google_measure_js_timing || ((a = Ld), (a.h = !1), a.events != a.i.google_js_reporting_queue && (Hd() && Ua(a.events, Jd), (a.events.length = 0)));
    }
    (function (a) {
        yd = a || new wd();
        'number' !== typeof v.google_srt && (v.google_srt = Math.random());
        xd();
        qf = new Kd();
        qf.Qa(!0);
        'complete' == v.document.readyState
            ? rf()
            : Ld.h &&
              kc(v, 'load', function () {
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
        var d = L(of).h();
        !b.eid && d.length && (b.eid = d.toString());
        zd(yd, a, b, !0, c);
    }
    function vf(a) {
        return function (b) {
            null != b || (b = 'unnamed rejection');
            qf.I(a, b instanceof Error ? b : Error(b), void 0, void 0);
        };
    }
    function wf(a, b, c, d) {
        var e;
        md(b) ? (e = b.msg || Md(b.error)) : (e = Md(b));
        return 0 == e.indexOf('TagError')
            ? ((c = b instanceof ld ? b.error : b), c.pbr || ((c.pbr = !0), qf.I(a, b, 0.1, d, 'puberror')), !1)
            : qf.I(a, b, c, d);
    }
    var xf = { overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5 };
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
        a.google_reactive_ads_global_state
            ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new zf())
            : (a.google_reactive_ads_global_state = new yf());
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
    Df.prototype.resolve = function (a) {
        Jf(this);
        this.h = 1;
        this.l = a;
        Kf(this.i);
    };
    Df.prototype.reject = function (a) {
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
    If.prototype.then = function (a, b) {
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
    Lf.prototype.apply = function (a) {
        return new Lf(a(this.h.slice(0)));
    };
    Lf.prototype.get = function (a) {
        return this.h[a];
    };
    Lf.prototype.add = function (a) {
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
    Nf.prototype.set = function (a, b) {
        var c = Of(a);
        this.h[c] = b;
        this.i[c] = a;
    };
    Nf.prototype.get = function (a, b) {
        a = Of(a);
        return void 0 !== this.h[a] ? this.h[a] : b;
    };
    Nf.prototype.clear = function () {
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
    Pf.prototype.map = function (a) {
        return null != this.h ? ((a = a(this.h.value)), a instanceof Pf ? a : Sf(a)) : this;
    };
    function Tf(a, b) {
        null != a.h || b(a.i);
        return a;
    }
    function Sf(a) {
        return new Pf({ value: a }, null);
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
        if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    Wf.prototype.add = function (a) {
        this.h.set(a, !0);
    };
    Wf.prototype.contains = function (a) {
        return void 0 !== this.h.h[Of(a)];
    };
    function Xf() {
        this.h = new Nf();
    }
    Xf.prototype.set = function (a, b) {
        var c = this.h.get(a);
        c || ((c = new Wf()), this.h.set(a, c));
        c.add(b);
    };
    function Yf(a) {
        y.call(this, a, -1, Zf);
    }
    u(Yf, y);
    Yf.prototype.getId = function () {
        return z(this, 3);
    };
    var Zf = [4];
    function $f(a) {
        var b = void 0 === a.Ea ? void 0 : a.Ea,
            c = void 0 === a.ab ? void 0 : a.ab,
            d = void 0 === a.Na ? void 0 : a.Na;
        this.h = void 0 === a.Xa ? void 0 : a.Xa;
        this.l = new Lf(b || []);
        this.j = d;
        this.i = c;
    }
    function ag(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({ U: 'a', Z: bg(c) });
        null != a.h && b.push({ U: 'as', Z: a.h });
        null != a.i && b.push({ U: 'i', Z: String(a.i) });
        null != a.j && b.push({ U: 'rp', Z: String(a.j) });
        b.sort(function (d, e) {
            return d.U.localeCompare(e.U);
        });
        b.unshift({ U: 't', Z: 'aa' });
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
    dg.prototype.setLocation = function (a) {
        return A(this, 1, a);
    };
    function eg(a, b) {
        this.Ga = a;
        this.Ma = b;
    }
    function fg(a) {
        var b = [].slice.call(arguments).filter(
            hc(function (e) {
                return null === e;
            })
        );
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function (e) {
            c = c.concat(e.Ga || []);
            d = p(Object, 'assign').call(Object, d, e.Ma);
        });
        return new eg(c, d);
    }
    function gg(a) {
        switch (a) {
            case 1:
                return new eg(null, { google_ad_semantic_area: 'mc' });
            case 2:
                return new eg(null, { google_ad_semantic_area: 'h' });
            case 3:
                return new eg(null, { google_ad_semantic_area: 'f' });
            case 4:
                return new eg(null, { google_ad_semantic_area: 's' });
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
            a = new eg(null, { google_placement_id: a.join('~') });
        }
        return a;
    }
    var ig = {},
        jg = new eg(['google-auto-placed'], ((ig.google_reactive_ad_format = 40), (ig.google_tag_origin = 'qs'), ig));
    function kg(a) {
        y.call(this, a);
    }
    u(kg, y);
    function lg(a) {
        y.call(this, a);
    }
    u(lg, y);
    lg.prototype.getName = function () {
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
    var ug = [1],
        xg = [1, 2];
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
    var zg = [1, 2, 5, 7],
        Cg = [2, 5, 6, 11];
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
                    if (d && d.parentNode != c) for (; d && 8 == d.nodeType; ) d = d.nextSibling;
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
    var Lg = new O(1084),
        Mg = new O(1082),
        Ng = new P(62, 0.001),
        Og = new (function (a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? '' : b;
        })(14),
        Pg = new P(1114, 1),
        Qg = new P(1110),
        Rg = new P(1111),
        Sg = new P(1112),
        Tg = new P(1113),
        Ug = new P(1104),
        Vg = new P(1108),
        Wg = new P(1106),
        Xg = new P(1107),
        Yg = new P(1105),
        Zg = new P(1115, 1),
        $g = new O(1121),
        ah = new O(316),
        bh = new O(313),
        ch = new O(369),
        dh = new O(1093),
        eh = new P(1098),
        fh = new O(1026),
        gh = new O(1090),
        hh = new O(1053),
        ih = new O(1120),
        jh = new O(1100, !0),
        kh = new O(1109),
        lh = new P(1046),
        mh = new O(1102, !0),
        nh = new O(218),
        oh = new O(216),
        ph = new O(217),
        qh = new O(1125),
        rh = new O(227),
        sh = new O(208),
        th = new O(282),
        uh = new O(1086),
        vh = new P(1079, 5),
        wh = new O(251),
        xh = new O(1124),
        yh = new Kg(1939),
        zh = new Kg(1934, [
            'A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9',
            'A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9',
            'A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9'
        ]),
        Ah = new O(203),
        Bh = new O(241),
        Ch = new O(84),
        Dh = new P(1929, 50),
        Eh = new P(1905),
        Fh = new O(1956),
        Gh = new O(240),
        Hh = new O(1928),
        Ih = new O(1941),
        Jh = new O(370946349),
        Kh = new O(392736476),
        Lh = new O(397079674),
        Mh = new P(406149835),
        Nh = new Kg(1932, [
            'AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
            'Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
            'A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
            'AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
            'A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='
        ]),
        Oh = new O(401243724),
        Ph = new P(1935);
    function Qh() {
        var a = {};
        this.i = function (b, c) {
            return null != a[b] ? a[b] : c;
        };
        this.j = function (b, c) {
            return null != a[b] ? a[b] : c;
        };
        this.l = function (b, c) {
            return null != a[b] ? a[b] : c;
        };
        this.h = function (b, c) {
            return null != a[b] ? a[b] : c;
        };
        this.m = function () {};
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
                    ha: function (f) {
                        return Uh(f.previousSibling, e);
                    },
                    la: 0
                };
            case 2:
                return {
                    init: Uh(a.lastChild, e),
                    ha: function (f) {
                        return Uh(f.previousSibling, e);
                    },
                    la: 0
                };
            case 3:
                return {
                    init: Uh(a.nextSibling, d),
                    ha: function (f) {
                        return Uh(f.nextSibling, d);
                    },
                    la: 3
                };
            case 1:
                return {
                    init: Uh(a.firstChild, d),
                    ha: function (f) {
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
    var Vh = { rectangle: 1, horizontal: 2, vertical: 4 };
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
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return { x: d.left - c.left, y: d.top - c.top };
        } catch (e) {
            return null;
        }
    }
    function ai(a) {
        var b = 0,
            c;
        for (c in Vh) -1 != a.indexOf(c) && (b |= Vh[c]);
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
        !0 !== e
            ? (a = e)
            : 'true' == d.google_full_width_responsive || Wh(c, b)
            ? ((b = Cf(b)), (a = b - a), (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
            : (a = 9);
        return a;
    }
    function di(a, b, c) {
        a = a.style;
        'rtl' == b
            ? Q(wh)
                ? a.setProperty('margin-right', c, 'important')
                : (a.marginRight = c)
            : Q(wh)
            ? a.setProperty('margin-left', c, 'important')
            : (a.marginLeft = c);
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
    S.prototype.minWidth = function () {
        return this.l;
    };
    S.prototype.height = function () {
        return this.j;
    };
    S.prototype.h = function (a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a));
    };
    S.prototype.i = function () {};
    function hi(a, b, c, d) {
        d =
            void 0 === d
                ? function (f) {
                      return f;
                  }
                : d;
        var e;
        return (a.style && a.style[c] && d(a.style[c])) || ((e = zc(a, b)) && e[c] && d(e[c])) || null;
    }
    function ii(a) {
        return function (b) {
            return b.minWidth() <= a;
        };
    }
    function ji(a, b, c, d) {
        var e = a && ki(c, b),
            f = li(b, d);
        return function (g) {
            return !(e && g.height() >= f);
        };
    }
    function mi(a) {
        return function (b) {
            return b.height() <= a;
        };
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
        do (d = b.style && I(b.style.height)) && (c = Math.min(c, d)), (d = hi(b, a, 'maxHeight', I)) && (c = Math.min(c, d));
        while ((b = b.parentElement) && 'HTML' != b.tagName);
        return c;
    }
    function li(a, b) {
        var c = 0 == cd(a);
        return b && c ? Math.max(250, (2 * Bf(a).clientHeight) / 3) : 250;
    }
    var T = {},
        oi =
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
            T),
        pi = RegExp('(^| )adsbygoogle($| )');
    function qi(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = mc(d.ub);
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
    ri.prototype.toString = function () {
        return JSON.stringify({ nativeQuery: this.l, occurrenceIndex: this.i, paragraphIndex: this.j, ignoreMode: this.h });
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
        Mf(a.getElementsByTagName('p'), function (c) {
            100 <= vi(c) && b.push(c);
        });
        return b;
    }
    function vi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || 'SCRIPT' == a.tagName) return 0;
        var b = 0;
        Mf(a.childNodes, function (c) {
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
            var d = z(a, 1),
                e = '';
            d && (e += d);
            c && (e += '#' + wi(c));
            if (b) for (c = 0; c < b.length; c++) e += '.' + wi(b[c]);
            a = (b = e) ? new ri(b, z(a, 2), z(a, 5), yi(z(a, 6))) : null;
        } else a = b ? new ri(b, z(a, 2), z(a, 5), yi(z(a, 6))) : null;
        return a;
    }
    var zi = { 1: 1, 2: 2, 3: 3, 0: 0 };
    function yi(a) {
        return null == a ? a : zi[a];
    }
    var Ai = { 1: 0, 2: 1, 3: 2, 4: 3 };
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
                else (b = G(a, Yf, 1)), null == b ? (b = null) : ((a = z(a, 2)), (b = null == a ? null : new $f({ Ea: [b], Na: a })));
                return null != b ? Sf(b) : Uf(Error('Missing dimension when creating placement id'));
            case 3:
                return Uf(Error('Missing dimension when creating placement id'));
            default:
                return Uf(Error('Invalid type: ' + z(a, 8)));
        }
    }
    function Ei(a, b) {
        function c() {
            d.push({ anchor: e.anchor, position: e.position });
            return e.anchor == b.anchor && e.position == b.position;
        }
        for (var d = [], e = a; e; ) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = { anchor: e.anchor.firstChild, position: 1 };
                        continue;
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d;
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body; ) {
                e = { anchor: e.anchor.parentNode, position: 3 };
                if (c()) return d;
                e.position = 4;
                if (c()) return d;
            }
            e && e.anchor.nextSibling ? (e = { anchor: e.anchor.nextSibling, position: 1 }) : (e = null);
        }
        return d;
    }
    function Fi(a, b) {
        this.i = a;
        this.h = b;
    }
    function Gi(a, b) {
        var c = new Xf(),
            d = new Wf();
        b.forEach(function (e) {
            if (Gb(e, mg, 1, pg)) {
                e = Gb(e, mg, 1, pg);
                if (G(e, kg, 1) && G(G(e, kg, 1), Yf, 1) && G(e, kg, 2) && G(G(e, kg, 2), Yf, 1)) {
                    var f = Hi(a, G(G(e, kg, 1), Yf, 1)),
                        g = Hi(a, G(G(e, kg, 2), Yf, 1));
                    if (f && g)
                        for (
                            f = q(Ei({ anchor: f, position: z(G(e, kg, 1), 2) }, { anchor: g, position: z(G(e, kg, 2), 2) })), g = f.next();
                            !g.done;
                            g = f.next()
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
            a.forEach(function (d) {
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
            a.forEach(function (d) {
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
        for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
        return a ? a : null;
    }
    function Ni(a) {
        return !!a.nextSibling || (!!a.parentNode && Ni(a.parentNode));
    }
    function Oi(a) {
        var b = {};
        a &&
            sb(a, 6).forEach(function (c) {
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
            var h = c[e],
                k = e,
                l = b;
            if (!G(h, dg, 4) || !f.contains(z(G(h, dg, 4), 1)) || 1 !== z(h, 8) || (h && null != z(h, 4) && d[z(G(h, dg, 4), 2)])) g = null;
            else {
                g.i++;
                if ((h = Ri(g, h, l, d)))
                    (l = Bi(g.h)),
                        l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0),
                        null == l.placed && (l.placed = []),
                        l.numAutoAdsPlaced++,
                        l.placed.push({ index: k, element: h.fa }),
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
            if ((c = !f && !(!c && 2 == e && !Ni(d)))) (c = 1 == e || 2 == e ? d : d.parentNode), (c = !(c && !Ig(c) && 0 >= c.offsetWidth));
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
                    for (f = d.parentElement; f; ) {
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
        g = null == g ? null : new eg(null, { google_ml_rank: g });
        b = Si(a, b);
        b = fg(a.m, c, g, b);
        c = a.h;
        a = a.A;
        var h = c.document,
            k = f.Za || !1;
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
        f = { pa: g, fa: h };
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
                        for (d = x; (d = t.ha(d)); ) x = d;
                        var E = { anchor: x, position: t.la };
                    } else E = { anchor: d, position: e };
                    m['google-ama-order-assurance'] = r;
                    Jg(m, E.anchor, E.position);
                } else Jg(m, d, e);
                b: {
                    var B = f.fa;
                    B.dataset.adsbygoogleStatus = 'reserved';
                    B.className += ' adsbygoogle-noablate';
                    m = { element: B };
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
            Tf(Di(b).map(hg), function (c) {
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
        return c
            ? Vf(function () {
                  return pb(Ui, c ? JSON.parse(c) : null);
              })
            : Sf(null);
    }
    function Wi() {
        this.S = {};
    }
    function Xi() {
        if (Yi) return Yi;
        var a = Xc() || fd(),
            b = a.google_persistent_state_async;
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
    var Yi = null,
        bj = {},
        $i = ((bj[8] = 'google_prev_ad_formats_by_region'), (bj[9] = 'google_prev_ad_slotnames_by_region'), bj);
    function cj(a) {
        this.h = a || { cookie: '' };
    }
    cj.prototype.set = function (a, b, c) {
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
    cj.prototype.get = function (a, b) {
        for (var c = a + '=', d = (this.h.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
            f = Ka(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return '';
        }
        return b;
    };
    cj.prototype.isEmpty = function () {
        return !this.h.cookie;
    };
    cj.prototype.clear = function () {
        for (var a = (this.h.cookie || '').split(';'), b = [], c = [], d, e, f = 0; f < a.length; f++)
            (e = Ka(a[f])), (d = e.indexOf('=')), -1 == d ? (b.push(''), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) (c = b[a]), this.get(c), this.set(c, '', { eb: 0, path: void 0, domain: void 0 });
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
    fj.prototype.j = function () {
        if (this.D) for (; this.D.length; ) this.D.shift()();
    };
    function gj(a) {
        void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return (void 0 !== a.tcString && 'string' !== typeof a.tcString) || (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
            ? 2
            : a.cmpStatus && 'error' !== a.cmpStatus
            ? 0
            : 3;
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
    hj.prototype.j = function () {
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
    hj.prototype.addEventListener = function (a) {
        function b(f, g) {
            clearTimeout(e);
            f
                ? ((c = f),
                  (c.internalErrorState = gj(c)),
                  (g && 0 === c.internalErrorState) || ((c.tcString = 'tcunavailable'), g || (c.internalErrorState = 3)))
                : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
            a(c);
        }
        var c = {},
            d = jc(function () {
                return a(c);
            }),
            e = 0;
        -1 !== this.A &&
            (e = setTimeout(function () {
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
    hj.prototype.removeEventListener = function (a) {
        a && a.listenerId && kj(this, 'removeEventListener', null, a.listenerId);
    };
    function kj(a, b, c, d) {
        c || (c = function () {});
        if ('function' === typeof a.h.__tcfapi) (a = a.h.__tcfapi), a(b, 2, c, d);
        else if (jj(a)) {
            lj(a);
            var e = ++a.H;
            a.m[e] = c;
            a.i && ((c = {}), a.i.postMessage(((c.__tcfapiCall = { command: b, version: 2, callId: e, parameter: d }), c), '*'));
        } else c({}, !1);
    }
    function jj(a) {
        if (a.i) return a.i;
        a.i = Mc(a.h, '__tcfapiLocator');
        return a.i;
    }
    function lj(a) {
        a.l ||
            ((a.l = function (b) {
                try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                } catch (d) {}
            }),
            kc(a.h, 'message', a.l));
    }
    function mj(a) {
        var b = a.ba,
            c = a.Ra,
            d = a.Ya;
        a = nj({ ba: b, ka: a.ka, ia: void 0 === a.ia ? !1 : a.ia, ja: void 0 === a.ja ? !1 : a.ja });
        null != a.h || 'tcunav' != a.i.message
            ? d(a)
            : oj(b, c)
                  .then(function (e) {
                      return e.map(pj);
                  })
                  .then(function (e) {
                      return e.map(function (f) {
                          return qj(b, f);
                      });
                  })
                  .then(d);
    }
    function nj(a) {
        var b = a.ba,
            c = a.ka,
            d = void 0 === a.ia ? !1 : a.ia;
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
        return new n.Promise(function (a) {
            var b = Xi();
            a = { resolve: a };
            var c = aj(b, 25, []);
            c.push(a);
            b.S[Zi(25)] = c;
        }).then(tj);
    }
    function sj(a, b) {
        return new n.Promise(function (c) {
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
                    ('loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus))
                        ? !0
                        : !1);
        if (c)
            if (
                !1 === a.gdprApplies ||
                'tcuna