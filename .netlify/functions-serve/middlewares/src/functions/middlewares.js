var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// functions/middlewares.ts
var middlewares_exports = {};
__export(middlewares_exports, {
  onRequest: () => onRequest2
});

// node_modules/@cloudflare/pages-plugin-cloudflare-access/index.js
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
var require_jsrsasign = __commonJS({
  "../../node_modules/jsrsasign/lib/jsrsasign.js"(exports) {
    init_functionsRoutes();
    var navigator = {};
    navigator.userAgent = false;
    var window = {};
    var CryptoJS = CryptoJS || function(e, g) {
      var a = {};
      var b = a.lib = {};
      var j = b.Base = function() {
        function n() {
        }
        return { extend: function(p) {
          n.prototype = this;
          var o = new n();
          if (p) {
            o.mixIn(p);
          }
          if (!o.hasOwnProperty("init")) {
            o.init = function() {
              o.$super.init.apply(this, arguments);
            };
          }
          o.init.prototype = o;
          o.$super = this;
          return o;
        }, create: function() {
          var o = this.extend();
          o.init.apply(o, arguments);
          return o;
        }, init: function() {
        }, mixIn: function(p) {
          for (var o in p) {
            if (p.hasOwnProperty(o)) {
              this[o] = p[o];
            }
          }
          if (p.hasOwnProperty("toString")) {
            this.toString = p.toString;
          }
        }, clone: function() {
          return this.init.prototype.extend(this);
        } };
      }();
      var l = b.WordArray = j.extend({ init: function(o, n) {
        o = this.words = o || [];
        if (n != g) {
          this.sigBytes = n;
        } else {
          this.sigBytes = o.length * 4;
        }
      }, toString: function(n) {
        return (n || h).stringify(this);
      }, concat: function(t2) {
        var q = this.words;
        var p = t2.words;
        var n = this.sigBytes;
        var s = t2.sigBytes;
        this.clamp();
        if (n % 4) {
          for (var r = 0; r < s; r++) {
            var o = p[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            q[n + r >>> 2] |= o << 24 - (n + r) % 4 * 8;
          }
        } else {
          for (var r = 0; r < s; r += 4) {
            q[n + r >>> 2] = p[r >>> 2];
          }
        }
        this.sigBytes += s;
        return this;
      }, clamp: function() {
        var o = this.words;
        var n = this.sigBytes;
        o[n >>> 2] &= 4294967295 << 32 - n % 4 * 8;
        o.length = e.ceil(n / 4);
      }, clone: function() {
        var n = j.clone.call(this);
        n.words = this.words.slice(0);
        return n;
      }, random: function(p) {
        var o = [];
        for (var n = 0; n < p; n += 4) {
          o.push(e.random() * 4294967296 | 0);
        }
        return new l.init(o, p);
      } });
      var m = a.enc = {};
      var h = m.Hex = { stringify: function(p) {
        var r = p.words;
        var o = p.sigBytes;
        var q = [];
        for (var n = 0; n < o; n++) {
          var s = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
          q.push((s >>> 4).toString(16));
          q.push((s & 15).toString(16));
        }
        return q.join("");
      }, parse: function(p) {
        var n = p.length;
        var q = [];
        for (var o = 0; o < n; o += 2) {
          q[o >>> 3] |= parseInt(p.substr(o, 2), 16) << 24 - o % 8 * 4;
        }
        return new l.init(q, n / 2);
      } };
      var d = m.Latin1 = { stringify: function(q) {
        var r = q.words;
        var p = q.sigBytes;
        var n = [];
        for (var o = 0; o < p; o++) {
          var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          n.push(String.fromCharCode(s));
        }
        return n.join("");
      }, parse: function(p) {
        var n = p.length;
        var q = [];
        for (var o = 0; o < n; o++) {
          q[o >>> 2] |= (p.charCodeAt(o) & 255) << 24 - o % 4 * 8;
        }
        return new l.init(q, n);
      } };
      var c = m.Utf8 = { stringify: function(n) {
        try {
          return decodeURIComponent(escape(d.stringify(n)));
        } catch (o) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(n) {
        return d.parse(unescape(encodeURIComponent(n)));
      } };
      var i = b.BufferedBlockAlgorithm = j.extend({ reset: function() {
        this._data = new l.init();
        this._nDataBytes = 0;
      }, _append: function(n) {
        if (typeof n == "string") {
          n = c.parse(n);
        }
        this._data.concat(n);
        this._nDataBytes += n.sigBytes;
      }, _process: function(w) {
        var q = this._data;
        var x = q.words;
        var n = q.sigBytes;
        var t2 = this.blockSize;
        var v = t2 * 4;
        var u = n / v;
        if (w) {
          u = e.ceil(u);
        } else {
          u = e.max((u | 0) - this._minBufferSize, 0);
        }
        var s = u * t2;
        var r = e.min(s * 4, n);
        if (s) {
          for (var p = 0; p < s; p += t2) {
            this._doProcessBlock(x, p);
          }
          var o = x.splice(0, s);
          q.sigBytes -= r;
        }
        return new l.init(o, r);
      }, clone: function() {
        var n = j.clone.call(this);
        n._data = this._data.clone();
        return n;
      }, _minBufferSize: 0 });
      var f = b.Hasher = i.extend({ cfg: j.extend(), init: function(n) {
        this.cfg = this.cfg.extend(n);
        this.reset();
      }, reset: function() {
        i.reset.call(this);
        this._doReset();
      }, update: function(n) {
        this._append(n);
        this._process();
        return this;
      }, finalize: function(n) {
        if (n) {
          this._append(n);
        }
        var o = this._doFinalize();
        return o;
      }, blockSize: 512 / 32, _createHelper: function(n) {
        return function(p, o) {
          return new n.init(o).finalize(p);
        };
      }, _createHmacHelper: function(n) {
        return function(p, o) {
          return new k.HMAC.init(n, o).finalize(p);
        };
      } });
      var k = a.algo = {};
      return a;
    }(Math);
    (function(g) {
      var a = CryptoJS, f = a.lib, e = f.Base, h = f.WordArray, a = a.x64 = {};
      a.Word = e.extend({ init: function(b, c) {
        this.high = b;
        this.low = c;
      } });
      a.WordArray = e.extend({ init: function(b, c) {
        b = this.words = b || [];
        this.sigBytes = c != g ? c : 8 * b.length;
      }, toX32: function() {
        for (var b = this.words, c = b.length, a2 = [], d = 0; d < c; d++) {
          var e2 = b[d];
          a2.push(e2.high);
          a2.push(e2.low);
        }
        return h.create(a2, this.sigBytes);
      }, clone: function() {
        for (var b = e.clone.call(this), c = b.words = this.words.slice(0), a2 = c.length, d = 0; d < a2; d++)
          c[d] = c[d].clone();
        return b;
      } });
    })();
    CryptoJS.lib.Cipher || function(u) {
      var g = CryptoJS, f = g.lib, k = f.Base, l = f.WordArray, q = f.BufferedBlockAlgorithm, r = g.enc.Base64, v = g.algo.EvpKDF, n = f.Cipher = q.extend({ cfg: k.extend(), createEncryptor: function(a, b) {
        return this.create(this._ENC_XFORM_MODE, a, b);
      }, createDecryptor: function(a, b) {
        return this.create(this._DEC_XFORM_MODE, a, b);
      }, init: function(a, b, c) {
        this.cfg = this.cfg.extend(c);
        this._xformMode = a;
        this._key = b;
        this.reset();
      }, reset: function() {
        q.reset.call(this);
        this._doReset();
      }, process: function(a) {
        this._append(a);
        return this._process();
      }, finalize: function(a) {
        a && this._append(a);
        return this._doFinalize();
      }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function(a) {
        return { encrypt: function(b, c, d) {
          return (typeof c == "string" ? s : j).encrypt(a, b, c, d);
        }, decrypt: function(b, c, d) {
          return (typeof c == "string" ? s : j).decrypt(a, b, c, d);
        } };
      } });
      f.StreamCipher = n.extend({ _doFinalize: function() {
        return this._process(true);
      }, blockSize: 1 });
      var m = g.mode = {}, t2 = function(a, b, c) {
        var d = this._iv;
        d ? this._iv = u : d = this._prevBlock;
        for (var e = 0; e < c; e++)
          a[b + e] ^= d[e];
      }, h = (f.BlockCipherMode = k.extend({ createEncryptor: function(a, b) {
        return this.Encryptor.create(a, b);
      }, createDecryptor: function(a, b) {
        return this.Decryptor.create(a, b);
      }, init: function(a, b) {
        this._cipher = a;
        this._iv = b;
      } })).extend();
      h.Encryptor = h.extend({ processBlock: function(a, b) {
        var c = this._cipher, d = c.blockSize;
        t2.call(this, a, b, d);
        c.encryptBlock(a, b);
        this._prevBlock = a.slice(b, b + d);
      } });
      h.Decryptor = h.extend({ processBlock: function(a, b) {
        var c = this._cipher, d = c.blockSize, e = a.slice(b, b + d);
        c.decryptBlock(a, b);
        t2.call(this, a, b, d);
        this._prevBlock = e;
      } });
      m = m.CBC = h;
      h = (g.pad = {}).Pkcs7 = { pad: function(a, b) {
        for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, e = [], f2 = 0; f2 < c; f2 += 4)
          e.push(d);
        c = l.create(e, c);
        a.concat(c);
      }, unpad: function(a) {
        a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255;
      } };
      f.BlockCipher = n.extend({ cfg: n.cfg.extend({ mode: m, padding: h }), reset: function() {
        n.reset.call(this);
        var a = this.cfg, b = a.iv, a = a.mode;
        if (this._xformMode == this._ENC_XFORM_MODE)
          var c = a.createEncryptor;
        else
          c = a.createDecryptor, this._minBufferSize = 1;
        this._mode = c.call(a, this, b && b.words);
      }, _doProcessBlock: function(a, b) {
        this._mode.processBlock(a, b);
      }, _doFinalize: function() {
        var a = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          a.pad(this._data, this.blockSize);
          var b = this._process(true);
        } else
          b = this._process(true), a.unpad(b);
        return b;
      }, blockSize: 4 });
      var p = f.CipherParams = k.extend({ init: function(a) {
        this.mixIn(a);
      }, toString: function(a) {
        return (a || this.formatter).stringify(this);
      } }), m = (g.format = {}).OpenSSL = { stringify: function(a) {
        var b = a.ciphertext;
        a = a.salt;
        return (a ? l.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
      }, parse: function(a) {
        a = r.parse(a);
        var b = a.words;
        if (b[0] == 1398893684 && b[1] == 1701076831) {
          var c = l.create(b.slice(2, 4));
          b.splice(0, 4);
          a.sigBytes -= 16;
        }
        return p.create({ ciphertext: a, salt: c });
      } }, j = f.SerializableCipher = k.extend({ cfg: k.extend({ format: m }), encrypt: function(a, b, c, d) {
        d = this.cfg.extend(d);
        var e = a.createEncryptor(c, d);
        b = e.finalize(b);
        e = e.cfg;
        return p.create({
          ciphertext: b,
          key: c,
          iv: e.iv,
          algorithm: a,
          mode: e.mode,
          padding: e.padding,
          blockSize: a.blockSize,
          formatter: d.format
        });
      }, decrypt: function(a, b, c, d) {
        d = this.cfg.extend(d);
        b = this._parse(b, d.format);
        return a.createDecryptor(c, d).finalize(b.ciphertext);
      }, _parse: function(a, b) {
        return typeof a == "string" ? b.parse(a, this) : a;
      } }), g = (g.kdf = {}).OpenSSL = { execute: function(a, b, c, d) {
        d || (d = l.random(8));
        a = v.create({ keySize: b + c }).compute(a, d);
        c = l.create(a.words.slice(b), 4 * c);
        a.sigBytes = 4 * b;
        return p.create({ key: a, iv: c, salt: d });
      } }, s = f.PasswordBasedCipher = j.extend({ cfg: j.cfg.extend({ kdf: g }), encrypt: function(a, b, c, d) {
        d = this.cfg.extend(d);
        c = d.kdf.execute(c, a.keySize, a.ivSize);
        d.iv = c.iv;
        a = j.encrypt.call(this, a, b, c.key, d);
        a.mixIn(c);
        return a;
      }, decrypt: function(a, b, c, d) {
        d = this.cfg.extend(d);
        b = this._parse(b, d.format);
        c = d.kdf.execute(c, a.keySize, a.ivSize, b.salt);
        d.iv = c.iv;
        return j.decrypt.call(this, a, b, c.key, d);
      } });
    }();
    (function() {
      for (var q = CryptoJS, x = q.lib.BlockCipher, r = q.algo, j = [], y = [], z2 = [], A = [], B = [], C = [], s = [], u = [], v = [], w = [], g = [], k = 0; 256 > k; k++)
        g[k] = 128 > k ? k << 1 : k << 1 ^ 283;
      for (var n = 0, l = 0, k = 0; 256 > k; k++) {
        var f = l ^ l << 1 ^ l << 2 ^ l << 3 ^ l << 4, f = f >>> 8 ^ f & 255 ^ 99;
        j[n] = f;
        y[f] = n;
        var t2 = g[n], D = g[t2], E = g[D], b = 257 * g[f] ^ 16843008 * f;
        z2[n] = b << 24 | b >>> 8;
        A[n] = b << 16 | b >>> 16;
        B[n] = b << 8 | b >>> 24;
        C[n] = b;
        b = 16843009 * E ^ 65537 * D ^ 257 * t2 ^ 16843008 * n;
        s[f] = b << 24 | b >>> 8;
        u[f] = b << 16 | b >>> 16;
        v[f] = b << 8 | b >>> 24;
        w[f] = b;
        n ? (n = t2 ^ g[g[g[E ^ t2]]], l ^= g[g[l]]) : n = l = 1;
      }
      var F = [
        0,
        1,
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        27,
        54
      ], r = r.AES = x.extend({ _doReset: function() {
        for (var c = this._key, e = c.words, a = c.sigBytes / 4, c = 4 * ((this._nRounds = a + 6) + 1), b2 = this._keySchedule = [], h = 0; h < c; h++)
          if (h < a)
            b2[h] = e[h];
          else {
            var d = b2[h - 1];
            h % a ? 6 < a && h % a == 4 && (d = j[d >>> 24] << 24 | j[d >>> 16 & 255] << 16 | j[d >>> 8 & 255] << 8 | j[d & 255]) : (d = d << 8 | d >>> 24, d = j[d >>> 24] << 24 | j[d >>> 16 & 255] << 16 | j[d >>> 8 & 255] << 8 | j[d & 255], d ^= F[h / a | 0] << 24);
            b2[h] = b2[h - a] ^ d;
          }
        e = this._invKeySchedule = [];
        for (a = 0; a < c; a++)
          h = c - a, d = a % 4 ? b2[h] : b2[h - 4], e[a] = 4 > a || 4 >= h ? d : s[j[d >>> 24]] ^ u[j[d >>> 16 & 255]] ^ v[j[d >>> 8 & 255]] ^ w[j[d & 255]];
      }, encryptBlock: function(c, e) {
        this._doCryptBlock(c, e, this._keySchedule, z2, A, B, C, j);
      }, decryptBlock: function(c, e) {
        var a = c[e + 1];
        c[e + 1] = c[e + 3];
        c[e + 3] = a;
        this._doCryptBlock(c, e, this._invKeySchedule, s, u, v, w, y);
        a = c[e + 1];
        c[e + 1] = c[e + 3];
        c[e + 3] = a;
      }, _doCryptBlock: function(c, e, a, b2, h, d, j2, m) {
        for (var n2 = this._nRounds, f2 = c[e] ^ a[0], g2 = c[e + 1] ^ a[1], k2 = c[e + 2] ^ a[2], p = c[e + 3] ^ a[3], l2 = 4, t3 = 1; t3 < n2; t3++)
          var q2 = b2[f2 >>> 24] ^ h[g2 >>> 16 & 255] ^ d[k2 >>> 8 & 255] ^ j2[p & 255] ^ a[l2++], r2 = b2[g2 >>> 24] ^ h[k2 >>> 16 & 255] ^ d[p >>> 8 & 255] ^ j2[f2 & 255] ^ a[l2++], s2 = b2[k2 >>> 24] ^ h[p >>> 16 & 255] ^ d[f2 >>> 8 & 255] ^ j2[g2 & 255] ^ a[l2++], p = b2[p >>> 24] ^ h[f2 >>> 16 & 255] ^ d[g2 >>> 8 & 255] ^ j2[k2 & 255] ^ a[l2++], f2 = q2, g2 = r2, k2 = s2;
        q2 = (m[f2 >>> 24] << 24 | m[g2 >>> 16 & 255] << 16 | m[k2 >>> 8 & 255] << 8 | m[p & 255]) ^ a[l2++];
        r2 = (m[g2 >>> 24] << 24 | m[k2 >>> 16 & 255] << 16 | m[p >>> 8 & 255] << 8 | m[f2 & 255]) ^ a[l2++];
        s2 = (m[k2 >>> 24] << 24 | m[p >>> 16 & 255] << 16 | m[f2 >>> 8 & 255] << 8 | m[g2 & 255]) ^ a[l2++];
        p = (m[p >>> 24] << 24 | m[f2 >>> 16 & 255] << 16 | m[g2 >>> 8 & 255] << 8 | m[k2 & 255]) ^ a[l2++];
        c[e] = q2;
        c[e + 1] = r2;
        c[e + 2] = s2;
        c[e + 3] = p;
      }, keySize: 8 });
      q.AES = x._createHelper(r);
    })();
    (function() {
      function j(b, c) {
        var a = (this._lBlock >>> b ^ this._rBlock) & c;
        this._rBlock ^= a;
        this._lBlock ^= a << b;
      }
      function l(b, c) {
        var a = (this._rBlock >>> b ^ this._lBlock) & c;
        this._lBlock ^= a;
        this._rBlock ^= a << b;
      }
      var h = CryptoJS, e = h.lib, n = e.WordArray, e = e.BlockCipher, g = h.algo, q = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], p = [
        14,
        17,
        11,
        24,
        1,
        5,
        3,
        28,
        15,
        6,
        21,
        10,
        23,
        19,
        12,
        4,
        26,
        8,
        16,
        7,
        27,
        20,
        13,
        2,
        41,
        52,
        31,
        37,
        47,
        55,
        30,
        40,
        51,
        45,
        33,
        48,
        44,
        49,
        39,
        56,
        34,
        53,
        46,
        42,
        50,
        36,
        29,
        32
      ], r = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], s = [{
        "0": 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
      }, {
        "0": 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
      }, {
        "0": 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
      }, {
        "0": 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
      }, {
        "0": 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
      }, {
        "0": 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
      }, {
        "0": 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
      }, {
        "0": 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
      }], t2 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], m = g.DES = e.extend({ _doReset: function() {
        for (var b = this._key.words, c = [], a = 0; 56 > a; a++) {
          var f = q[a] - 1;
          c[a] = b[f >>> 5] >>> 31 - f % 32 & 1;
        }
        b = this._subKeys = [];
        for (f = 0; 16 > f; f++) {
          for (var d = b[f] = [], e2 = r[f], a = 0; 24 > a; a++)
            d[a / 6 | 0] |= c[(p[a] - 1 + e2) % 28] << 31 - a % 6, d[4 + (a / 6 | 0)] |= c[28 + (p[a + 24] - 1 + e2) % 28] << 31 - a % 6;
          d[0] = d[0] << 1 | d[0] >>> 31;
          for (a = 1; 7 > a; a++)
            d[a] >>>= 4 * (a - 1) + 3;
          d[7] = d[7] << 5 | d[7] >>> 27;
        }
        c = this._invSubKeys = [];
        for (a = 0; 16 > a; a++)
          c[a] = b[15 - a];
      }, encryptBlock: function(b, c) {
        this._doCryptBlock(b, c, this._subKeys);
      }, decryptBlock: function(b, c) {
        this._doCryptBlock(b, c, this._invSubKeys);
      }, _doCryptBlock: function(b, c, a) {
        this._lBlock = b[c];
        this._rBlock = b[c + 1];
        j.call(this, 4, 252645135);
        j.call(this, 16, 65535);
        l.call(this, 2, 858993459);
        l.call(this, 8, 16711935);
        j.call(this, 1, 1431655765);
        for (var f = 0; 16 > f; f++) {
          for (var d = a[f], e2 = this._lBlock, h2 = this._rBlock, g2 = 0, k = 0; 8 > k; k++)
            g2 |= s[k][((h2 ^ d[k]) & t2[k]) >>> 0];
          this._lBlock = h2;
          this._rBlock = e2 ^ g2;
        }
        a = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = a;
        j.call(this, 1, 1431655765);
        l.call(this, 8, 16711935);
        l.call(this, 2, 858993459);
        j.call(this, 16, 65535);
        j.call(this, 4, 252645135);
        b[c] = this._lBlock;
        b[c + 1] = this._rBlock;
      }, keySize: 2, ivSize: 2, blockSize: 2 });
      h.DES = e._createHelper(m);
      g = g.TripleDES = e.extend({ _doReset: function() {
        var b = this._key.words;
        this._des1 = m.createEncryptor(n.create(b.slice(0, 2)));
        this._des2 = m.createEncryptor(n.create(b.slice(2, 4)));
        this._des3 = m.createEncryptor(n.create(b.slice(4, 6)));
      }, encryptBlock: function(b, c) {
        this._des1.encryptBlock(b, c);
        this._des2.decryptBlock(b, c);
        this._des3.encryptBlock(b, c);
      }, decryptBlock: function(b, c) {
        this._des3.decryptBlock(b, c);
        this._des2.encryptBlock(b, c);
        this._des1.decryptBlock(b, c);
      }, keySize: 6, ivSize: 2, blockSize: 2 });
      h.TripleDES = e._createHelper(g);
    })();
    (function() {
      var h = CryptoJS, j = h.lib.WordArray;
      h.enc.Base64 = { stringify: function(b) {
        var e = b.words, f = b.sigBytes, c = this._map;
        b.clamp();
        b = [];
        for (var a = 0; a < f; a += 3)
          for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++)
            b.push(c.charAt(d >>> 6 * (3 - g) & 63));
        if (e = c.charAt(64))
          for (; b.length % 4; )
            b.push(e);
        return b.join("");
      }, parse: function(b) {
        var e = b.length, f = this._map, c = f.charAt(64);
        c && (c = b.indexOf(c), c != -1 && (e = c));
        for (var c = [], a = 0, d = 0; d < e; d++)
          if (d % 4) {
            var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4), h2 = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);
            c[a >>> 2] |= (g | h2) << 24 - 8 * (a % 4);
            a++;
          }
        return j.create(c, a);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    })();
    (function(E) {
      function h(a2, f, g, j, p, h2, k2) {
        a2 = a2 + (f & g | ~f & j) + p + k2;
        return (a2 << h2 | a2 >>> 32 - h2) + f;
      }
      function k(a2, f, g, j, p, h2, k2) {
        a2 = a2 + (f & j | g & ~j) + p + k2;
        return (a2 << h2 | a2 >>> 32 - h2) + f;
      }
      function l(a2, f, g, j, h2, k2, l2) {
        a2 = a2 + (f ^ g ^ j) + h2 + l2;
        return (a2 << k2 | a2 >>> 32 - k2) + f;
      }
      function n(a2, f, g, j, h2, k2, l2) {
        a2 = a2 + (g ^ (f | ~j)) + h2 + l2;
        return (a2 << k2 | a2 >>> 32 - k2) + f;
      }
      for (var r = CryptoJS, q = r.lib, F = q.WordArray, s = q.Hasher, q = r.algo, a = [], t2 = 0; 64 > t2; t2++)
        a[t2] = 4294967296 * E.abs(E.sin(t2 + 1)) | 0;
      q = q.MD5 = s.extend({
        _doReset: function() {
          this._hash = new F.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function(m, f) {
          for (var g = 0; 16 > g; g++) {
            var j = f + g, p = m[j];
            m[j] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360;
          }
          var g = this._hash.words, j = m[f + 0], p = m[f + 1], q2 = m[f + 2], r2 = m[f + 3], s2 = m[f + 4], t3 = m[f + 5], u = m[f + 6], v = m[f + 7], w = m[f + 8], x = m[f + 9], y = m[f + 10], z2 = m[f + 11], A = m[f + 12], B = m[f + 13], C = m[f + 14], D = m[f + 15], b = g[0], c = g[1], d = g[2], e = g[3], b = h(b, c, d, e, j, 7, a[0]), e = h(e, b, c, d, p, 12, a[1]), d = h(d, e, b, c, q2, 17, a[2]), c = h(c, d, e, b, r2, 22, a[3]), b = h(b, c, d, e, s2, 7, a[4]), e = h(e, b, c, d, t3, 12, a[5]), d = h(d, e, b, c, u, 17, a[6]), c = h(c, d, e, b, v, 22, a[7]), b = h(b, c, d, e, w, 7, a[8]), e = h(e, b, c, d, x, 12, a[9]), d = h(d, e, b, c, y, 17, a[10]), c = h(c, d, e, b, z2, 22, a[11]), b = h(b, c, d, e, A, 7, a[12]), e = h(e, b, c, d, B, 12, a[13]), d = h(d, e, b, c, C, 17, a[14]), c = h(c, d, e, b, D, 22, a[15]), b = k(b, c, d, e, p, 5, a[16]), e = k(e, b, c, d, u, 9, a[17]), d = k(d, e, b, c, z2, 14, a[18]), c = k(c, d, e, b, j, 20, a[19]), b = k(b, c, d, e, t3, 5, a[20]), e = k(e, b, c, d, y, 9, a[21]), d = k(d, e, b, c, D, 14, a[22]), c = k(c, d, e, b, s2, 20, a[23]), b = k(b, c, d, e, x, 5, a[24]), e = k(e, b, c, d, C, 9, a[25]), d = k(d, e, b, c, r2, 14, a[26]), c = k(c, d, e, b, w, 20, a[27]), b = k(b, c, d, e, B, 5, a[28]), e = k(e, b, c, d, q2, 9, a[29]), d = k(d, e, b, c, v, 14, a[30]), c = k(c, d, e, b, A, 20, a[31]), b = l(b, c, d, e, t3, 4, a[32]), e = l(e, b, c, d, w, 11, a[33]), d = l(d, e, b, c, z2, 16, a[34]), c = l(c, d, e, b, C, 23, a[35]), b = l(b, c, d, e, p, 4, a[36]), e = l(e, b, c, d, s2, 11, a[37]), d = l(d, e, b, c, v, 16, a[38]), c = l(c, d, e, b, y, 23, a[39]), b = l(b, c, d, e, B, 4, a[40]), e = l(e, b, c, d, j, 11, a[41]), d = l(d, e, b, c, r2, 16, a[42]), c = l(c, d, e, b, u, 23, a[43]), b = l(b, c, d, e, x, 4, a[44]), e = l(e, b, c, d, A, 11, a[45]), d = l(d, e, b, c, D, 16, a[46]), c = l(c, d, e, b, q2, 23, a[47]), b = n(b, c, d, e, j, 6, a[48]), e = n(e, b, c, d, v, 10, a[49]), d = n(d, e, b, c, C, 15, a[50]), c = n(c, d, e, b, t3, 21, a[51]), b = n(b, c, d, e, A, 6, a[52]), e = n(e, b, c, d, r2, 10, a[53]), d = n(d, e, b, c, y, 15, a[54]), c = n(c, d, e, b, p, 21, a[55]), b = n(b, c, d, e, w, 6, a[56]), e = n(e, b, c, d, D, 10, a[57]), d = n(d, e, b, c, u, 15, a[58]), c = n(c, d, e, b, B, 21, a[59]), b = n(b, c, d, e, s2, 6, a[60]), e = n(e, b, c, d, z2, 10, a[61]), d = n(d, e, b, c, q2, 15, a[62]), c = n(c, d, e, b, x, 21, a[63]);
          g[0] = g[0] + b | 0;
          g[1] = g[1] + c | 0;
          g[2] = g[2] + d | 0;
          g[3] = g[3] + e | 0;
        },
        _doFinalize: function() {
          var a2 = this._data, f = a2.words, g = 8 * this._nDataBytes, j = 8 * a2.sigBytes;
          f[j >>> 5] |= 128 << 24 - j % 32;
          var h2 = E.floor(g / 4294967296);
          f[(j + 64 >>> 9 << 4) + 15] = (h2 << 8 | h2 >>> 24) & 16711935 | (h2 << 24 | h2 >>> 8) & 4278255360;
          f[(j + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
          a2.sigBytes = 4 * (f.length + 1);
          this._process();
          a2 = this._hash;
          f = a2.words;
          for (g = 0; 4 > g; g++)
            j = f[g], f[g] = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
          return a2;
        },
        clone: function() {
          var a2 = s.clone.call(this);
          a2._hash = this._hash.clone();
          return a2;
        }
      });
      r.MD5 = s._createHelper(q);
      r.HmacMD5 = s._createHmacHelper(q);
    })(Math);
    (function() {
      var k = CryptoJS, b = k.lib, m = b.WordArray, l = b.Hasher, d = [], b = k.algo.SHA1 = l.extend({ _doReset: function() {
        this._hash = new m.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      }, _doProcessBlock: function(n, p) {
        for (var a = this._hash.words, e = a[0], f = a[1], h = a[2], j = a[3], b2 = a[4], c = 0; 80 > c; c++) {
          if (16 > c)
            d[c] = n[p + c] | 0;
          else {
            var g = d[c - 3] ^ d[c - 8] ^ d[c - 14] ^ d[c - 16];
            d[c] = g << 1 | g >>> 31;
          }
          g = (e << 5 | e >>> 27) + b2 + d[c];
          g = 20 > c ? g + ((f & h | ~f & j) + 1518500249) : 40 > c ? g + ((f ^ h ^ j) + 1859775393) : 60 > c ? g + ((f & h | f & j | h & j) - 1894007588) : g + ((f ^ h ^ j) - 899497514);
          b2 = j;
          j = h;
          h = f << 30 | f >>> 2;
          f = e;
          e = g;
        }
        a[0] = a[0] + e | 0;
        a[1] = a[1] + f | 0;
        a[2] = a[2] + h | 0;
        a[3] = a[3] + j | 0;
        a[4] = a[4] + b2 | 0;
      }, _doFinalize: function() {
        var b2 = this._data, d2 = b2.words, a = 8 * this._nDataBytes, e = 8 * b2.sigBytes;
        d2[e >>> 5] |= 128 << 24 - e % 32;
        d2[(e + 64 >>> 9 << 4) + 14] = Math.floor(a / 4294967296);
        d2[(e + 64 >>> 9 << 4) + 15] = a;
        b2.sigBytes = 4 * d2.length;
        this._process();
        return this._hash;
      }, clone: function() {
        var b2 = l.clone.call(this);
        b2._hash = this._hash.clone();
        return b2;
      } });
      k.SHA1 = l._createHelper(b);
      k.HmacSHA1 = l._createHmacHelper(b);
    })();
    (function(k) {
      for (var g = CryptoJS, h = g.lib, v = h.WordArray, j = h.Hasher, h = g.algo, s = [], t2 = [], u = function(q) {
        return 4294967296 * (q - (q | 0)) | 0;
      }, l = 2, b = 0; 64 > b; ) {
        var d;
        a: {
          d = l;
          for (var w = k.sqrt(d), r = 2; r <= w; r++)
            if (!(d % r)) {
              d = false;
              break a;
            }
          d = true;
        }
        d && (8 > b && (s[b] = u(k.pow(l, 0.5))), t2[b] = u(k.pow(l, 1 / 3)), b++);
        l++;
      }
      var n = [], h = h.SHA256 = j.extend({ _doReset: function() {
        this._hash = new v.init(s.slice(0));
      }, _doProcessBlock: function(q, h2) {
        for (var a = this._hash.words, c = a[0], d2 = a[1], b2 = a[2], k2 = a[3], f = a[4], g2 = a[5], j2 = a[6], l2 = a[7], e = 0; 64 > e; e++) {
          if (16 > e)
            n[e] = q[h2 + e] | 0;
          else {
            var m = n[e - 15], p = n[e - 2];
            n[e] = ((m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3) + n[e - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + n[e - 16];
          }
          m = l2 + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & g2 ^ ~f & j2) + t2[e] + n[e];
          p = ((c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22)) + (c & d2 ^ c & b2 ^ d2 & b2);
          l2 = j2;
          j2 = g2;
          g2 = f;
          f = k2 + m | 0;
          k2 = b2;
          b2 = d2;
          d2 = c;
          c = m + p | 0;
        }
        a[0] = a[0] + c | 0;
        a[1] = a[1] + d2 | 0;
        a[2] = a[2] + b2 | 0;
        a[3] = a[3] + k2 | 0;
        a[4] = a[4] + f | 0;
        a[5] = a[5] + g2 | 0;
        a[6] = a[6] + j2 | 0;
        a[7] = a[7] + l2 | 0;
      }, _doFinalize: function() {
        var d2 = this._data, b2 = d2.words, a = 8 * this._nDataBytes, c = 8 * d2.sigBytes;
        b2[c >>> 5] |= 128 << 24 - c % 32;
        b2[(c + 64 >>> 9 << 4) + 14] = k.floor(a / 4294967296);
        b2[(c + 64 >>> 9 << 4) + 15] = a;
        d2.sigBytes = 4 * b2.length;
        this._process();
        return this._hash;
      }, clone: function() {
        var b2 = j.clone.call(this);
        b2._hash = this._hash.clone();
        return b2;
      } });
      g.SHA256 = j._createHelper(h);
      g.HmacSHA256 = j._createHmacHelper(h);
    })(Math);
    (function() {
      var b = CryptoJS, d = b.lib.WordArray, a = b.algo, c = a.SHA256, a = a.SHA224 = c.extend({ _doReset: function() {
        this._hash = new d.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      }, _doFinalize: function() {
        var a2 = c._doFinalize.call(this);
        a2.sigBytes -= 4;
        return a2;
      } });
      b.SHA224 = c._createHelper(a);
      b.HmacSHA224 = c._createHmacHelper(a);
    })();
    (function() {
      function a() {
        return d.create.apply(d, arguments);
      }
      for (var n = CryptoJS, r = n.lib.Hasher, e = n.x64, d = e.Word, T = e.WordArray, e = n.algo, ea = [
        a(1116352408, 3609767458),
        a(1899447441, 602891725),
        a(3049323471, 3964484399),
        a(3921009573, 2173295548),
        a(961987163, 4081628472),
        a(1508970993, 3053834265),
        a(2453635748, 2937671579),
        a(2870763221, 3664609560),
        a(3624381080, 2734883394),
        a(310598401, 1164996542),
        a(607225278, 1323610764),
        a(1426881987, 3590304994),
        a(1925078388, 4068182383),
        a(2162078206, 991336113),
        a(2614888103, 633803317),
        a(3248222580, 3479774868),
        a(3835390401, 2666613458),
        a(4022224774, 944711139),
        a(264347078, 2341262773),
        a(604807628, 2007800933),
        a(770255983, 1495990901),
        a(1249150122, 1856431235),
        a(1555081692, 3175218132),
        a(1996064986, 2198950837),
        a(2554220882, 3999719339),
        a(2821834349, 766784016),
        a(2952996808, 2566594879),
        a(3210313671, 3203337956),
        a(3336571891, 1034457026),
        a(3584528711, 2466948901),
        a(113926993, 3758326383),
        a(338241895, 168717936),
        a(666307205, 1188179964),
        a(773529912, 1546045734),
        a(1294757372, 1522805485),
        a(1396182291, 2643833823),
        a(1695183700, 2343527390),
        a(1986661051, 1014477480),
        a(2177026350, 1206759142),
        a(2456956037, 344077627),
        a(2730485921, 1290863460),
        a(2820302411, 3158454273),
        a(3259730800, 3505952657),
        a(3345764771, 106217008),
        a(3516065817, 3606008344),
        a(3600352804, 1432725776),
        a(4094571909, 1467031594),
        a(275423344, 851169720),
        a(430227734, 3100823752),
        a(506948616, 1363258195),
        a(659060556, 3750685593),
        a(883997877, 3785050280),
        a(958139571, 3318307427),
        a(1322822218, 3812723403),
        a(1537002063, 2003034995),
        a(1747873779, 3602036899),
        a(1955562222, 1575990012),
        a(2024104815, 1125592928),
        a(2227730452, 2716904306),
        a(2361852424, 442776044),
        a(2428436474, 593698344),
        a(2756734187, 3733110249),
        a(3204031479, 2999351573),
        a(3329325298, 3815920427),
        a(3391569614, 3928383900),
        a(3515267271, 566280711),
        a(3940187606, 3454069534),
        a(4118630271, 4000239992),
        a(116418474, 1914138554),
        a(174292421, 2731055270),
        a(289380356, 3203993006),
        a(460393269, 320620315),
        a(685471733, 587496836),
        a(852142971, 1086792851),
        a(1017036298, 365543100),
        a(1126000580, 2618297676),
        a(1288033470, 3409855158),
        a(1501505948, 4234509866),
        a(1607167915, 987167468),
        a(1816402316, 1246189591)
      ], v = [], w = 0; 80 > w; w++)
        v[w] = a();
      e = e.SHA512 = r.extend({ _doReset: function() {
        this._hash = new T.init([new d.init(1779033703, 4089235720), new d.init(3144134277, 2227873595), new d.init(1013904242, 4271175723), new d.init(2773480762, 1595750129), new d.init(1359893119, 2917565137), new d.init(2600822924, 725511199), new d.init(528734635, 4215389547), new d.init(1541459225, 327033209)]);
      }, _doProcessBlock: function(a2, d2) {
        for (var f = this._hash.words, F = f[0], e2 = f[1], n2 = f[2], r2 = f[3], G = f[4], H = f[5], I = f[6], f = f[7], w2 = F.high, J = F.low, X = e2.high, K = e2.low, Y = n2.high, L = n2.low, Z = r2.high, M = r2.low, $ = G.high, N = G.low, aa = H.high, O = H.low, ba = I.high, P = I.low, ca = f.high, Q = f.low, k = w2, g = J, z2 = X, x = K, A = Y, y = L, U = Z, B = M, l = $, h = N, R = aa, C = O, S = ba, D = P, V = ca, E = Q, m = 0; 80 > m; m++) {
          var s = v[m];
          if (16 > m)
            var j = s.high = a2[d2 + 2 * m] | 0, b = s.low = a2[d2 + 2 * m + 1] | 0;
          else {
            var j = v[m - 15], b = j.high, p = j.low, j = (b >>> 1 | p << 31) ^ (b >>> 8 | p << 24) ^ b >>> 7, p = (p >>> 1 | b << 31) ^ (p >>> 8 | b << 24) ^ (p >>> 7 | b << 25), u = v[m - 2], b = u.high, c = u.low, u = (b >>> 19 | c << 13) ^ (b << 3 | c >>> 29) ^ b >>> 6, c = (c >>> 19 | b << 13) ^ (c << 3 | b >>> 29) ^ (c >>> 6 | b << 26), b = v[m - 7], W = b.high, t2 = v[m - 16], q = t2.high, t2 = t2.low, b = p + b.low, j = j + W + (b >>> 0 < p >>> 0 ? 1 : 0), b = b + c, j = j + u + (b >>> 0 < c >>> 0 ? 1 : 0), b = b + t2, j = j + q + (b >>> 0 < t2 >>> 0 ? 1 : 0);
            s.high = j;
            s.low = b;
          }
          var W = l & R ^ ~l & S, t2 = h & C ^ ~h & D, s = k & z2 ^ k & A ^ z2 & A, T2 = g & x ^ g & y ^ x & y, p = (k >>> 28 | g << 4) ^ (k << 30 | g >>> 2) ^ (k << 25 | g >>> 7), u = (g >>> 28 | k << 4) ^ (g << 30 | k >>> 2) ^ (g << 25 | k >>> 7), c = ea[m], fa = c.high, da = c.low, c = E + ((h >>> 14 | l << 18) ^ (h >>> 18 | l << 14) ^ (h << 23 | l >>> 9)), q = V + ((l >>> 14 | h << 18) ^ (l >>> 18 | h << 14) ^ (l << 23 | h >>> 9)) + (c >>> 0 < E >>> 0 ? 1 : 0), c = c + t2, q = q + W + (c >>> 0 < t2 >>> 0 ? 1 : 0), c = c + da, q = q + fa + (c >>> 0 < da >>> 0 ? 1 : 0), c = c + b, q = q + j + (c >>> 0 < b >>> 0 ? 1 : 0), b = u + T2, s = p + s + (b >>> 0 < u >>> 0 ? 1 : 0), V = S, E = D, S = R, D = C, R = l, C = h, h = B + c | 0, l = U + q + (h >>> 0 < B >>> 0 ? 1 : 0) | 0, U = A, B = y, A = z2, y = x, z2 = k, x = g, g = c + b | 0, k = q + s + (g >>> 0 < c >>> 0 ? 1 : 0) | 0;
        }
        J = F.low = J + g;
        F.high = w2 + k + (J >>> 0 < g >>> 0 ? 1 : 0);
        K = e2.low = K + x;
        e2.high = X + z2 + (K >>> 0 < x >>> 0 ? 1 : 0);
        L = n2.low = L + y;
        n2.high = Y + A + (L >>> 0 < y >>> 0 ? 1 : 0);
        M = r2.low = M + B;
        r2.high = Z + U + (M >>> 0 < B >>> 0 ? 1 : 0);
        N = G.low = N + h;
        G.high = $ + l + (N >>> 0 < h >>> 0 ? 1 : 0);
        O = H.low = O + C;
        H.high = aa + R + (O >>> 0 < C >>> 0 ? 1 : 0);
        P = I.low = P + D;
        I.high = ba + S + (P >>> 0 < D >>> 0 ? 1 : 0);
        Q = f.low = Q + E;
        f.high = ca + V + (Q >>> 0 < E >>> 0 ? 1 : 0);
      }, _doFinalize: function() {
        var a2 = this._data, d2 = a2.words, f = 8 * this._nDataBytes, e2 = 8 * a2.sigBytes;
        d2[e2 >>> 5] |= 128 << 24 - e2 % 32;
        d2[(e2 + 128 >>> 10 << 5) + 30] = Math.floor(f / 4294967296);
        d2[(e2 + 128 >>> 10 << 5) + 31] = f;
        a2.sigBytes = 4 * d2.length;
        this._process();
        return this._hash.toX32();
      }, clone: function() {
        var a2 = r.clone.call(this);
        a2._hash = this._hash.clone();
        return a2;
      }, blockSize: 32 });
      n.SHA512 = r._createHelper(e);
      n.HmacSHA512 = r._createHmacHelper(e);
    })();
    (function() {
      var c = CryptoJS, a = c.x64, b = a.Word, e = a.WordArray, a = c.algo, d = a.SHA512, a = a.SHA384 = d.extend({ _doReset: function() {
        this._hash = new e.init([new b.init(3418070365, 3238371032), new b.init(1654270250, 914150663), new b.init(2438529370, 812702999), new b.init(355462360, 4144912697), new b.init(1731405415, 4290775857), new b.init(2394180231, 1750603025), new b.init(3675008525, 1694076839), new b.init(1203062813, 3204075428)]);
      }, _doFinalize: function() {
        var a2 = d._doFinalize.call(this);
        a2.sigBytes -= 16;
        return a2;
      } });
      c.SHA384 = d._createHelper(a);
      c.HmacSHA384 = d._createHmacHelper(a);
    })();
    (function() {
      var q = CryptoJS, d = q.lib, n = d.WordArray, p = d.Hasher, d = q.algo, x = n.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), y = n.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), z2 = n.create([
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
      ]), A = n.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), B = n.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), C = n.create([
        1352829926,
        1548603684,
        1836072691,
        2053994217,
        0
      ]), d = d.RIPEMD160 = p.extend({ _doReset: function() {
        this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      }, _doProcessBlock: function(e, v) {
        for (var b = 0; 16 > b; b++) {
          var c = v + b, f = e[c];
          e[c] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
        }
        var c = this._hash.words, f = B.words, d2 = C.words, n2 = x.words, q2 = y.words, p2 = z2.words, w = A.words, t2, g, h, j, r, u, k, l, m, s;
        u = t2 = c[0];
        k = g = c[1];
        l = h = c[2];
        m = j = c[3];
        s = r = c[4];
        for (var a, b = 0; 80 > b; b += 1)
          a = t2 + e[v + n2[b]] | 0, a = 16 > b ? a + ((g ^ h ^ j) + f[0]) : 32 > b ? a + ((g & h | ~g & j) + f[1]) : 48 > b ? a + (((g | ~h) ^ j) + f[2]) : 64 > b ? a + ((g & j | h & ~j) + f[3]) : a + ((g ^ (h | ~j)) + f[4]), a |= 0, a = a << p2[b] | a >>> 32 - p2[b], a = a + r | 0, t2 = r, r = j, j = h << 10 | h >>> 22, h = g, g = a, a = u + e[v + q2[b]] | 0, a = 16 > b ? a + ((k ^ (l | ~m)) + d2[0]) : 32 > b ? a + ((k & m | l & ~m) + d2[1]) : 48 > b ? a + (((k | ~l) ^ m) + d2[2]) : 64 > b ? a + ((k & l | ~k & m) + d2[3]) : a + ((k ^ l ^ m) + d2[4]), a |= 0, a = a << w[b] | a >>> 32 - w[b], a = a + s | 0, u = s, s = m, m = l << 10 | l >>> 22, l = k, k = a;
        a = c[1] + h + m | 0;
        c[1] = c[2] + j + s | 0;
        c[2] = c[3] + r + u | 0;
        c[3] = c[4] + t2 + k | 0;
        c[4] = c[0] + g + l | 0;
        c[0] = a;
      }, _doFinalize: function() {
        var e = this._data, d2 = e.words, b = 8 * this._nDataBytes, c = 8 * e.sigBytes;
        d2[c >>> 5] |= 128 << 24 - c % 32;
        d2[(c + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
        e.sigBytes = 4 * (d2.length + 1);
        this._process();
        e = this._hash;
        d2 = e.words;
        for (b = 0; 5 > b; b++)
          c = d2[b], d2[b] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
        return e;
      }, clone: function() {
        var d2 = p.clone.call(this);
        d2._hash = this._hash.clone();
        return d2;
      } });
      q.RIPEMD160 = p._createHelper(d);
      q.HmacRIPEMD160 = p._createHmacHelper(d);
    })(Math);
    (function() {
      var c = CryptoJS, k = c.enc.Utf8;
      c.algo.HMAC = c.lib.Base.extend({ init: function(a, b) {
        a = this._hasher = new a.init();
        typeof b == "string" && (b = k.parse(b));
        var c2 = a.blockSize, e = 4 * c2;
        b.sigBytes > e && (b = a.finalize(b));
        b.clamp();
        for (var f = this._oKey = b.clone(), g = this._iKey = b.clone(), h = f.words, j = g.words, d = 0; d < c2; d++)
          h[d] ^= 1549556828, j[d] ^= 909522486;
        f.sigBytes = g.sigBytes = e;
        this.reset();
      }, reset: function() {
        var a = this._hasher;
        a.reset();
        a.update(this._iKey);
      }, update: function(a) {
        this._hasher.update(a);
        return this;
      }, finalize: function(a) {
        var b = this._hasher;
        a = b.finalize(a);
        b.reset();
        return b.finalize(this._oKey.clone().concat(a));
      } });
    })();
    (function() {
      var b = CryptoJS, a = b.lib, d = a.Base, m = a.WordArray, a = b.algo, q = a.HMAC, l = a.PBKDF2 = d.extend({ cfg: d.extend({ keySize: 4, hasher: a.SHA1, iterations: 1 }), init: function(a2) {
        this.cfg = this.cfg.extend(a2);
      }, compute: function(a2, b2) {
        for (var c = this.cfg, f = q.create(c.hasher, a2), g = m.create(), d2 = m.create([1]), l2 = g.words, r = d2.words, n = c.keySize, c = c.iterations; l2.length < n; ) {
          var h = f.update(b2).finalize(d2);
          f.reset();
          for (var j = h.words, s = j.length, k = h, p = 1; p < c; p++) {
            k = f.finalize(k);
            f.reset();
            for (var t2 = k.words, e = 0; e < s; e++)
              j[e] ^= t2[e];
          }
          g.concat(h);
          r[0]++;
        }
        g.sigBytes = 4 * n;
        return g;
      } });
      b.PBKDF2 = function(a2, b2, c) {
        return l.create(c).compute(a2, b2);
      };
    })();
    var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64pad = "=";
    function hex2b64(d) {
      var b;
      var e;
      var a = "";
      for (b = 0; b + 3 <= d.length; b += 3) {
        e = parseInt(d.substring(b, b + 3), 16);
        a += b64map.charAt(e >> 6) + b64map.charAt(e & 63);
      }
      if (b + 1 == d.length) {
        e = parseInt(d.substring(b, b + 1), 16);
        a += b64map.charAt(e << 2);
      } else {
        if (b + 2 == d.length) {
          e = parseInt(d.substring(b, b + 2), 16);
          a += b64map.charAt(e >> 2) + b64map.charAt((e & 3) << 4);
        }
      }
      if (b64pad) {
        while ((a.length & 3) > 0) {
          a += b64pad;
        }
      }
      return a;
    }
    function b64tohex(f) {
      var d = "";
      var e;
      var b = 0;
      var c;
      var a;
      for (e = 0; e < f.length; ++e) {
        if (f.charAt(e) == b64pad) {
          break;
        }
        a = b64map.indexOf(f.charAt(e));
        if (a < 0) {
          continue;
        }
        if (b == 0) {
          d += int2char(a >> 2);
          c = a & 3;
          b = 1;
        } else {
          if (b == 1) {
            d += int2char(c << 2 | a >> 4);
            c = a & 15;
            b = 2;
          } else {
            if (b == 2) {
              d += int2char(c);
              d += int2char(a >> 2);
              c = a & 3;
              b = 3;
            } else {
              d += int2char(c << 2 | a >> 4);
              d += int2char(a & 15);
              b = 0;
            }
          }
        }
      }
      if (b == 1) {
        d += int2char(c << 2);
      }
      return d;
    }
    function b64toBA(e) {
      var d = b64tohex(e);
      var c;
      var b = new Array();
      for (c = 0; 2 * c < d.length; ++c) {
        b[c] = parseInt(d.substring(2 * c, 2 * c + 2), 16);
      }
      return b;
    }
    var dbits;
    var canary = 244837814094590;
    var j_lm = (canary & 16777215) == 15715070;
    function BigInteger(e, d, f) {
      if (e != null) {
        if (typeof e == "number") {
          this.fromNumber(e, d, f);
        } else {
          if (d == null && typeof e != "string") {
            this.fromString(e, 256);
          } else {
            this.fromString(e, d);
          }
        }
      }
    }
    function nbi() {
      return new BigInteger(null);
    }
    function am1(f, a, b, e, h, g) {
      while (--g >= 0) {
        var d = a * this[f++] + b[e] + h;
        h = Math.floor(d / 67108864);
        b[e++] = d & 67108863;
      }
      return h;
    }
    function am2(f, q, r, e, o, a) {
      var k = q & 32767, p = q >> 15;
      while (--a >= 0) {
        var d = this[f] & 32767;
        var g = this[f++] >> 15;
        var b = p * d + g * k;
        d = k * d + ((b & 32767) << 15) + r[e] + (o & 1073741823);
        o = (d >>> 30) + (b >>> 15) + p * g + (o >>> 30);
        r[e++] = d & 1073741823;
      }
      return o;
    }
    function am3(f, q, r, e, o, a) {
      var k = q & 16383, p = q >> 14;
      while (--a >= 0) {
        var d = this[f] & 16383;
        var g = this[f++] >> 14;
        var b = p * d + g * k;
        d = k * d + ((b & 16383) << 14) + r[e] + o;
        o = (d >> 28) + (b >> 14) + p * g;
        r[e++] = d & 268435455;
      }
      return o;
    }
    if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
      BigInteger.prototype.am = am2;
      dbits = 30;
    } else {
      if (j_lm && navigator.appName != "Netscape") {
        BigInteger.prototype.am = am1;
        dbits = 26;
      } else {
        BigInteger.prototype.am = am3;
        dbits = 28;
      }
    }
    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = (1 << dbits) - 1;
    BigInteger.prototype.DV = 1 << dbits;
    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2, BI_FP);
    BigInteger.prototype.F1 = BI_FP - dbits;
    BigInteger.prototype.F2 = 2 * dbits - BI_FP;
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr;
    var vv;
    rr = "0".charCodeAt(0);
    for (vv = 0; vv <= 9; ++vv) {
      BI_RC[rr++] = vv;
    }
    rr = "a".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) {
      BI_RC[rr++] = vv;
    }
    rr = "A".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) {
      BI_RC[rr++] = vv;
    }
    function int2char(a) {
      return BI_RM.charAt(a);
    }
    function intAt(b, a) {
      var d = BI_RC[b.charCodeAt(a)];
      return d == null ? -1 : d;
    }
    function bnpCopyTo(b) {
      for (var a = this.t - 1; a >= 0; --a) {
        b[a] = this[a];
      }
      b.t = this.t;
      b.s = this.s;
    }
    function bnpFromInt(a) {
      this.t = 1;
      this.s = a < 0 ? -1 : 0;
      if (a > 0) {
        this[0] = a;
      } else {
        if (a < -1) {
          this[0] = a + this.DV;
        } else {
          this.t = 0;
        }
      }
    }
    function nbv(a) {
      var b = nbi();
      b.fromInt(a);
      return b;
    }
    function bnpFromString(h, c) {
      var e;
      if (c == 16) {
        e = 4;
      } else {
        if (c == 8) {
          e = 3;
        } else {
          if (c == 256) {
            e = 8;
          } else {
            if (c == 2) {
              e = 1;
            } else {
              if (c == 32) {
                e = 5;
              } else {
                if (c == 4) {
                  e = 2;
                } else {
                  this.fromRadix(h, c);
                  return;
                }
              }
            }
          }
        }
      }
      this.t = 0;
      this.s = 0;
      var g = h.length, d = false, f = 0;
      while (--g >= 0) {
        var a = e == 8 ? h[g] & 255 : intAt(h, g);
        if (a < 0) {
          if (h.charAt(g) == "-") {
            d = true;
          }
          continue;
        }
        d = false;
        if (f == 0) {
          this[this.t++] = a;
        } else {
          if (f + e > this.DB) {
            this[this.t - 1] |= (a & (1 << this.DB - f) - 1) << f;
            this[this.t++] = a >> this.DB - f;
          } else {
            this[this.t - 1] |= a << f;
          }
        }
        f += e;
        if (f >= this.DB) {
          f -= this.DB;
        }
      }
      if (e == 8 && (h[0] & 128) != 0) {
        this.s = -1;
        if (f > 0) {
          this[this.t - 1] |= (1 << this.DB - f) - 1 << f;
        }
      }
      this.clamp();
      if (d) {
        BigInteger.ZERO.subTo(this, this);
      }
    }
    function bnpClamp() {
      var a = this.s & this.DM;
      while (this.t > 0 && this[this.t - 1] == a) {
        --this.t;
      }
    }
    function bnToString(c) {
      if (this.s < 0) {
        return "-" + this.negate().toString(c);
      }
      var e;
      if (c == 16) {
        e = 4;
      } else {
        if (c == 8) {
          e = 3;
        } else {
          if (c == 2) {
            e = 1;
          } else {
            if (c == 32) {
              e = 5;
            } else {
              if (c == 4) {
                e = 2;
              } else {
                return this.toRadix(c);
              }
            }
          }
        }
      }
      var g = (1 << e) - 1, l, a = false, h = "", f = this.t;
      var j = this.DB - f * this.DB % e;
      if (f-- > 0) {
        if (j < this.DB && (l = this[f] >> j) > 0) {
          a = true;
          h = int2char(l);
        }
        while (f >= 0) {
          if (j < e) {
            l = (this[f] & (1 << j) - 1) << e - j;
            l |= this[--f] >> (j += this.DB - e);
          } else {
            l = this[f] >> (j -= e) & g;
            if (j <= 0) {
              j += this.DB;
              --f;
            }
          }
          if (l > 0) {
            a = true;
          }
          if (a) {
            h += int2char(l);
          }
        }
      }
      return a ? h : "0";
    }
    function bnNegate() {
      var a = nbi();
      BigInteger.ZERO.subTo(this, a);
      return a;
    }
    function bnAbs() {
      return this.s < 0 ? this.negate() : this;
    }
    function bnCompareTo(b) {
      var d = this.s - b.s;
      if (d != 0) {
        return d;
      }
      var c = this.t;
      d = c - b.t;
      if (d != 0) {
        return this.s < 0 ? -d : d;
      }
      while (--c >= 0) {
        if ((d = this[c] - b[c]) != 0) {
          return d;
        }
      }
      return 0;
    }
    function nbits(a) {
      var c = 1, b;
      if ((b = a >>> 16) != 0) {
        a = b;
        c += 16;
      }
      if ((b = a >> 8) != 0) {
        a = b;
        c += 8;
      }
      if ((b = a >> 4) != 0) {
        a = b;
        c += 4;
      }
      if ((b = a >> 2) != 0) {
        a = b;
        c += 2;
      }
      if ((b = a >> 1) != 0) {
        a = b;
        c += 1;
      }
      return c;
    }
    function bnBitLength() {
      if (this.t <= 0) {
        return 0;
      }
      return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
    }
    function bnpDLShiftTo(c, b) {
      var a;
      for (a = this.t - 1; a >= 0; --a) {
        b[a + c] = this[a];
      }
      for (a = c - 1; a >= 0; --a) {
        b[a] = 0;
      }
      b.t = this.t + c;
      b.s = this.s;
    }
    function bnpDRShiftTo(c, b) {
      for (var a = c; a < this.t; ++a) {
        b[a - c] = this[a];
      }
      b.t = Math.max(this.t - c, 0);
      b.s = this.s;
    }
    function bnpLShiftTo(j, e) {
      var b = j % this.DB;
      var a = this.DB - b;
      var g = (1 << a) - 1;
      var f = Math.floor(j / this.DB), h = this.s << b & this.DM, d;
      for (d = this.t - 1; d >= 0; --d) {
        e[d + f + 1] = this[d] >> a | h;
        h = (this[d] & g) << b;
      }
      for (d = f - 1; d >= 0; --d) {
        e[d] = 0;
      }
      e[f] = h;
      e.t = this.t + f + 1;
      e.s = this.s;
      e.clamp();
    }
    function bnpRShiftTo(g, d) {
      d.s = this.s;
      var e = Math.floor(g / this.DB);
      if (e >= this.t) {
        d.t = 0;
        return;
      }
      var b = g % this.DB;
      var a = this.DB - b;
      var f = (1 << b) - 1;
      d[0] = this[e] >> b;
      for (var c = e + 1; c < this.t; ++c) {
        d[c - e - 1] |= (this[c] & f) << a;
        d[c - e] = this[c] >> b;
      }
      if (b > 0) {
        d[this.t - e - 1] |= (this.s & f) << a;
      }
      d.t = this.t - e;
      d.clamp();
    }
    function bnpSubTo(d, f) {
      var e = 0, g = 0, b = Math.min(d.t, this.t);
      while (e < b) {
        g += this[e] - d[e];
        f[e++] = g & this.DM;
        g >>= this.DB;
      }
      if (d.t < this.t) {
        g -= d.s;
        while (e < this.t) {
          g += this[e];
          f[e++] = g & this.DM;
          g >>= this.DB;
        }
        g += this.s;
      } else {
        g += this.s;
        while (e < d.t) {
          g -= d[e];
          f[e++] = g & this.DM;
          g >>= this.DB;
        }
        g -= d.s;
      }
      f.s = g < 0 ? -1 : 0;
      if (g < -1) {
        f[e++] = this.DV + g;
      } else {
        if (g > 0) {
          f[e++] = g;
        }
      }
      f.t = e;
      f.clamp();
    }
    function bnpMultiplyTo(c, e) {
      var b = this.abs(), f = c.abs();
      var d = b.t;
      e.t = d + f.t;
      while (--d >= 0) {
        e[d] = 0;
      }
      for (d = 0; d < f.t; ++d) {
        e[d + b.t] = b.am(0, f[d], e, d, 0, b.t);
      }
      e.s = 0;
      e.clamp();
      if (this.s != c.s) {
        BigInteger.ZERO.subTo(e, e);
      }
    }
    function bnpSquareTo(d) {
      var a = this.abs();
      var b = d.t = 2 * a.t;
      while (--b >= 0) {
        d[b] = 0;
      }
      for (b = 0; b < a.t - 1; ++b) {
        var e = a.am(b, a[b], d, 2 * b, 0, 1);
        if ((d[b + a.t] += a.am(b + 1, 2 * a[b], d, 2 * b + 1, e, a.t - b - 1)) >= a.DV) {
          d[b + a.t] -= a.DV;
          d[b + a.t + 1] = 1;
        }
      }
      if (d.t > 0) {
        d[d.t - 1] += a.am(b, a[b], d, 2 * b, 0, 1);
      }
      d.s = 0;
      d.clamp();
    }
    function bnpDivRemTo(n, h, g) {
      var w = n.abs();
      if (w.t <= 0) {
        return;
      }
      var k = this.abs();
      if (k.t < w.t) {
        if (h != null) {
          h.fromInt(0);
        }
        if (g != null) {
          this.copyTo(g);
        }
        return;
      }
      if (g == null) {
        g = nbi();
      }
      var d = nbi(), a = this.s, l = n.s;
      var v = this.DB - nbits(w[w.t - 1]);
      if (v > 0) {
        w.lShiftTo(v, d);
        k.lShiftTo(v, g);
      } else {
        w.copyTo(d);
        k.copyTo(g);
      }
      var p = d.t;
      var b = d[p - 1];
      if (b == 0) {
        return;
      }
      var o = b * (1 << this.F1) + (p > 1 ? d[p - 2] >> this.F2 : 0);
      var A = this.FV / o, z2 = (1 << this.F1) / o, x = 1 << this.F2;
      var u = g.t, s = u - p, f = h == null ? nbi() : h;
      d.dlShiftTo(s, f);
      if (g.compareTo(f) >= 0) {
        g[g.t++] = 1;
        g.subTo(f, g);
      }
      BigInteger.ONE.dlShiftTo(p, f);
      f.subTo(d, d);
      while (d.t < p) {
        d[d.t++] = 0;
      }
      while (--s >= 0) {
        var c = g[--u] == b ? this.DM : Math.floor(g[u] * A + (g[u - 1] + x) * z2);
        if ((g[u] += d.am(0, c, g, s, 0, p)) < c) {
          d.dlShiftTo(s, f);
          g.subTo(f, g);
          while (g[u] < --c) {
            g.subTo(f, g);
          }
        }
      }
      if (h != null) {
        g.drShiftTo(p, h);
        if (a != l) {
          BigInteger.ZERO.subTo(h, h);
        }
      }
      g.t = p;
      g.clamp();
      if (v > 0) {
        g.rShiftTo(v, g);
      }
      if (a < 0) {
        BigInteger.ZERO.subTo(g, g);
      }
    }
    function bnMod(b) {
      var c = nbi();
      this.abs().divRemTo(b, null, c);
      if (this.s < 0 && c.compareTo(BigInteger.ZERO) > 0) {
        b.subTo(c, c);
      }
      return c;
    }
    function Classic(a) {
      this.m = a;
    }
    function cConvert(a) {
      if (a.s < 0 || a.compareTo(this.m) >= 0) {
        return a.mod(this.m);
      } else {
        return a;
      }
    }
    function cRevert(a) {
      return a;
    }
    function cReduce(a) {
      a.divRemTo(this.m, null, a);
    }
    function cMulTo(a, c, b) {
      a.multiplyTo(c, b);
      this.reduce(b);
    }
    function cSqrTo(a, b) {
      a.squareTo(b);
      this.reduce(b);
    }
    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;
    function bnpInvDigit() {
      if (this.t < 1) {
        return 0;
      }
      var a = this[0];
      if ((a & 1) == 0) {
        return 0;
      }
      var b = a & 3;
      b = b * (2 - (a & 15) * b) & 15;
      b = b * (2 - (a & 255) * b) & 255;
      b = b * (2 - ((a & 65535) * b & 65535)) & 65535;
      b = b * (2 - a * b % this.DV) % this.DV;
      return b > 0 ? this.DV - b : -b;
    }
    function Montgomery(a) {
      this.m = a;
      this.mp = a.invDigit();
      this.mpl = this.mp & 32767;
      this.mph = this.mp >> 15;
      this.um = (1 << a.DB - 15) - 1;
      this.mt2 = 2 * a.t;
    }
    function montConvert(a) {
      var b = nbi();
      a.abs().dlShiftTo(this.m.t, b);
      b.divRemTo(this.m, null, b);
      if (a.s < 0 && b.compareTo(BigInteger.ZERO) > 0) {
        this.m.subTo(b, b);
      }
      return b;
    }
    function montRevert(a) {
      var b = nbi();
      a.copyTo(b);
      this.reduce(b);
      return b;
    }
    function montReduce(a) {
      while (a.t <= this.mt2) {
        a[a.t++] = 0;
      }
      for (var c = 0; c < this.m.t; ++c) {
        var b = a[c] & 32767;
        var d = b * this.mpl + ((b * this.mph + (a[c] >> 15) * this.mpl & this.um) << 15) & a.DM;
        b = c + this.m.t;
        a[b] += this.m.am(0, d, a, c, 0, this.m.t);
        while (a[b] >= a.DV) {
          a[b] -= a.DV;
          a[++b]++;
        }
      }
      a.clamp();
      a.drShiftTo(this.m.t, a);
      if (a.compareTo(this.m) >= 0) {
        a.subTo(this.m, a);
      }
    }
    function montSqrTo(a, b) {
      a.squareTo(b);
      this.reduce(b);
    }
    function montMulTo(a, c, b) {
      a.multiplyTo(c, b);
      this.reduce(b);
    }
    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;
    function bnpIsEven() {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }
    function bnpExp(h, j) {
      if (h > 4294967295 || h < 1) {
        return BigInteger.ONE;
      }
      var f = nbi(), a = nbi(), d = j.convert(this), c = nbits(h) - 1;
      d.copyTo(f);
      while (--c >= 0) {
        j.sqrTo(f, a);
        if ((h & 1 << c) > 0) {
          j.mulTo(a, d, f);
        } else {
          var b = f;
          f = a;
          a = b;
        }
      }
      return j.revert(f);
    }
    function bnModPowInt(b, a) {
      var c;
      if (b < 256 || a.isEven()) {
        c = new Classic(a);
      } else {
        c = new Montgomery(a);
      }
      return this.exp(b, c);
    }
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);
    function bnClone() {
      var a = nbi();
      this.copyTo(a);
      return a;
    }
    function bnIntValue() {
      if (this.s < 0) {
        if (this.t == 1) {
          return this[0] - this.DV;
        } else {
          if (this.t == 0) {
            return -1;
          }
        }
      } else {
        if (this.t == 1) {
          return this[0];
        } else {
          if (this.t == 0) {
            return 0;
          }
        }
      }
      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }
    function bnByteValue() {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }
    function bnShortValue() {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }
    function bnpChunkSize(a) {
      return Math.floor(Math.LN2 * this.DB / Math.log(a));
    }
    function bnSigNum() {
      if (this.s < 0) {
        return -1;
      } else {
        if (this.t <= 0 || this.t == 1 && this[0] <= 0) {
          return 0;
        } else {
          return 1;
        }
      }
    }
    function bnpToRadix(c) {
      if (c == null) {
        c = 10;
      }
      if (this.signum() == 0 || c < 2 || c > 36) {
        return "0";
      }
      var f = this.chunkSize(c);
      var e = Math.pow(c, f);
      var i = nbv(e), j = nbi(), h = nbi(), g = "";
      this.divRemTo(i, j, h);
      while (j.signum() > 0) {
        g = (e + h.intValue()).toString(c).substr(1) + g;
        j.divRemTo(i, j, h);
      }
      return h.intValue().toString(c) + g;
    }
    function bnpFromRadix(m, h) {
      this.fromInt(0);
      if (h == null) {
        h = 10;
      }
      var f = this.chunkSize(h);
      var g = Math.pow(h, f), e = false, a = 0, l = 0;
      for (var c = 0; c < m.length; ++c) {
        var k = intAt(m, c);
        if (k < 0) {
          if (m.charAt(c) == "-" && this.signum() == 0) {
            e = true;
          }
          continue;
        }
        l = h * l + k;
        if (++a >= f) {
          this.dMultiply(g);
          this.dAddOffset(l, 0);
          a = 0;
          l = 0;
        }
      }
      if (a > 0) {
        this.dMultiply(Math.pow(h, a));
        this.dAddOffset(l, 0);
      }
      if (e) {
        BigInteger.ZERO.subTo(this, this);
      }
    }
    function bnpFromNumber(f, e, h) {
      if (typeof e == "number") {
        if (f < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(f, h);
          if (!this.testBit(f - 1)) {
            this.bitwiseTo(BigInteger.ONE.shiftLeft(f - 1), op_or, this);
          }
          if (this.isEven()) {
            this.dAddOffset(1, 0);
          }
          while (!this.isProbablePrime(e)) {
            this.dAddOffset(2, 0);
            if (this.bitLength() > f) {
              this.subTo(BigInteger.ONE.shiftLeft(f - 1), this);
            }
          }
        }
      } else {
        var d = new Array(), g = f & 7;
        d.length = (f >> 3) + 1;
        e.nextBytes(d);
        if (g > 0) {
          d[0] &= (1 << g) - 1;
        } else {
          d[0] = 0;
        }
        this.fromString(d, 256);
      }
    }
    function bnToByteArray() {
      var b = this.t, c = new Array();
      c[0] = this.s;
      var e = this.DB - b * this.DB % 8, f, a = 0;
      if (b-- > 0) {
        if (e < this.DB && (f = this[b] >> e) != (this.s & this.DM) >> e) {
          c[a++] = f | this.s << this.DB - e;
        }
        while (b >= 0) {
          if (e < 8) {
            f = (this[b] & (1 << e) - 1) << 8 - e;
            f |= this[--b] >> (e += this.DB - 8);
          } else {
            f = this[b] >> (e -= 8) & 255;
            if (e <= 0) {
              e += this.DB;
              --b;
            }
          }
          if ((f & 128) != 0) {
            f |= -256;
          }
          if (a == 0 && (this.s & 128) != (f & 128)) {
            ++a;
          }
          if (a > 0 || f != this.s) {
            c[a++] = f;
          }
        }
      }
      return c;
    }
    function bnEquals(b) {
      return this.compareTo(b) == 0;
    }
    function bnMin(b) {
      return this.compareTo(b) < 0 ? this : b;
    }
    function bnMax(b) {
      return this.compareTo(b) > 0 ? this : b;
    }
    function bnpBitwiseTo(c, h, e) {
      var d, g, b = Math.min(c.t, this.t);
      for (d = 0; d < b; ++d) {
        e[d] = h(this[d], c[d]);
      }
      if (c.t < this.t) {
        g = c.s & this.DM;
        for (d = b; d < this.t; ++d) {
          e[d] = h(this[d], g);
        }
        e.t = this.t;
      } else {
        g = this.s & this.DM;
        for (d = b; d < c.t; ++d) {
          e[d] = h(g, c[d]);
        }
        e.t = c.t;
      }
      e.s = h(this.s, c.s);
      e.clamp();
    }
    function op_and(a, b) {
      return a & b;
    }
    function bnAnd(b) {
      var c = nbi();
      this.bitwiseTo(b, op_and, c);
      return c;
    }
    function op_or(a, b) {
      return a | b;
    }
    function bnOr(b) {
      var c = nbi();
      this.bitwiseTo(b, op_or, c);
      return c;
    }
    function op_xor(a, b) {
      return a ^ b;
    }
    function bnXor(b) {
      var c = nbi();
      this.bitwiseTo(b, op_xor, c);
      return c;
    }
    function op_andnot(a, b) {
      return a & ~b;
    }
    function bnAndNot(b) {
      var c = nbi();
      this.bitwiseTo(b, op_andnot, c);
      return c;
    }
    function bnNot() {
      var b = nbi();
      for (var a = 0; a < this.t; ++a) {
        b[a] = this.DM & ~this[a];
      }
      b.t = this.t;
      b.s = ~this.s;
      return b;
    }
    function bnShiftLeft(b) {
      var a = nbi();
      if (b < 0) {
        this.rShiftTo(-b, a);
      } else {
        this.lShiftTo(b, a);
      }
      return a;
    }
    function bnShiftRight(b) {
      var a = nbi();
      if (b < 0) {
        this.lShiftTo(-b, a);
      } else {
        this.rShiftTo(b, a);
      }
      return a;
    }
    function lbit(a) {
      if (a == 0) {
        return -1;
      }
      var b = 0;
      if ((a & 65535) == 0) {
        a >>= 16;
        b += 16;
      }
      if ((a & 255) == 0) {
        a >>= 8;
        b += 8;
      }
      if ((a & 15) == 0) {
        a >>= 4;
        b += 4;
      }
      if ((a & 3) == 0) {
        a >>= 2;
        b += 2;
      }
      if ((a & 1) == 0) {
        ++b;
      }
      return b;
    }
    function bnGetLowestSetBit() {
      for (var a = 0; a < this.t; ++a) {
        if (this[a] != 0) {
          return a * this.DB + lbit(this[a]);
        }
      }
      if (this.s < 0) {
        return this.t * this.DB;
      }
      return -1;
    }
    function cbit(a) {
      var b = 0;
      while (a != 0) {
        a &= a - 1;
        ++b;
      }
      return b;
    }
    function bnBitCount() {
      var c = 0, a = this.s & this.DM;
      for (var b = 0; b < this.t; ++b) {
        c += cbit(this[b] ^ a);
      }
      return c;
    }
    function bnTestBit(b) {
      var a = Math.floor(b / this.DB);
      if (a >= this.t) {
        return this.s != 0;
      }
      return (this[a] & 1 << b % this.DB) != 0;
    }
    function bnpChangeBit(c, b) {
      var a = BigInteger.ONE.shiftLeft(c);
      this.bitwiseTo(a, b, a);
      return a;
    }
    function bnSetBit(a) {
      return this.changeBit(a, op_or);
    }
    function bnClearBit(a) {
      return this.changeBit(a, op_andnot);
    }
    function bnFlipBit(a) {
      return this.changeBit(a, op_xor);
    }
    function bnpAddTo(d, f) {
      var e = 0, g = 0, b = Math.min(d.t, this.t);
      while (e < b) {
        g += this[e] + d[e];
        f[e++] = g & this.DM;
        g >>= this.DB;
      }
      if (d.t < this.t) {
        g += d.s;
        while (e < this.t) {
          g += this[e];
          f[e++] = g & this.DM;
          g >>= this.DB;
        }
        g += this.s;
      } else {
        g += this.s;
        while (e < d.t) {
          g += d[e];
          f[e++] = g & this.DM;
          g >>= this.DB;
        }
        g += d.s;
      }
      f.s = g < 0 ? -1 : 0;
      if (g > 0) {
        f[e++] = g;
      } else {
        if (g < -1) {
          f[e++] = this.DV + g;
        }
      }
      f.t = e;
      f.clamp();
    }
    function bnAdd(b) {
      var c = nbi();
      this.addTo(b, c);
      return c;
    }
    function bnSubtract(b) {
      var c = nbi();
      this.subTo(b, c);
      return c;
    }
    function bnMultiply(b) {
      var c = nbi();
      this.multiplyTo(b, c);
      return c;
    }
    function bnSquare() {
      var a = nbi();
      this.squareTo(a);
      return a;
    }
    function bnDivide(b) {
      var c = nbi();
      this.divRemTo(b, c, null);
      return c;
    }
    function bnRemainder(b) {
      var c = nbi();
      this.divRemTo(b, null, c);
      return c;
    }
    function bnDivideAndRemainder(b) {
      var d = nbi(), c = nbi();
      this.divRemTo(b, d, c);
      return new Array(d, c);
    }
    function bnpDMultiply(a) {
      this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
      ++this.t;
      this.clamp();
    }
    function bnpDAddOffset(b, a) {
      if (b == 0) {
        return;
      }
      while (this.t <= a) {
        this[this.t++] = 0;
      }
      this[a] += b;
      while (this[a] >= this.DV) {
        this[a] -= this.DV;
        if (++a >= this.t) {
          this[this.t++] = 0;
        }
        ++this[a];
      }
    }
    function NullExp() {
    }
    function nNop(a) {
      return a;
    }
    function nMulTo(a, c, b) {
      a.multiplyTo(c, b);
    }
    function nSqrTo(a, b) {
      a.squareTo(b);
    }
    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;
    function bnPow(a) {
      return this.exp(a, new NullExp());
    }
    function bnpMultiplyLowerTo(b, f, e) {
      var d = Math.min(this.t + b.t, f);
      e.s = 0;
      e.t = d;
      while (d > 0) {
        e[--d] = 0;
      }
      var c;
      for (c = e.t - this.t; d < c; ++d) {
        e[d + this.t] = this.am(0, b[d], e, d, 0, this.t);
      }
      for (c = Math.min(b.t, f); d < c; ++d) {
        this.am(0, b[d], e, d, 0, f - d);
      }
      e.clamp();
    }
    function bnpMultiplyUpperTo(b, e, d) {
      --e;
      var c = d.t = this.t + b.t - e;
      d.s = 0;
      while (--c >= 0) {
        d[c] = 0;
      }
      for (c = Math.max(e - this.t, 0); c < b.t; ++c) {
        d[this.t + c - e] = this.am(e - c, b[c], d, 0, 0, this.t + c - e);
      }
      d.clamp();
      d.drShiftTo(1, d);
    }
    function Barrett(a) {
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2 * a.t, this.r2);
      this.mu = this.r2.divide(a);
      this.m = a;
    }
    function barrettConvert(a) {
      if (a.s < 0 || a.t > 2 * this.m.t) {
        return a.mod(this.m);
      } else {
        if (a.compareTo(this.m) < 0) {
          return a;
        } else {
          var b = nbi();
          a.copyTo(b);
          this.reduce(b);
          return b;
        }
      }
    }
    function barrettRevert(a) {
      return a;
    }
    function barrettReduce(a) {
      a.drShiftTo(this.m.t - 1, this.r2);
      if (a.t > this.m.t + 1) {
        a.t = this.m.t + 1;
        a.clamp();
      }
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
      while (a.compareTo(this.r2) < 0) {
        a.dAddOffset(1, this.m.t + 1);
      }
      a.subTo(this.r2, a);
      while (a.compareTo(this.m) >= 0) {
        a.subTo(this.m, a);
      }
    }
    function barrettSqrTo(a, b) {
      a.squareTo(b);
      this.reduce(b);
    }
    function barrettMulTo(a, c, b) {
      a.multiplyTo(c, b);
      this.reduce(b);
    }
    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;
    function bnModPow(q, f) {
      var o = q.bitLength(), h, b = nbv(1), v;
      if (o <= 0) {
        return b;
      } else {
        if (o < 18) {
          h = 1;
        } else {
          if (o < 48) {
            h = 3;
          } else {
            if (o < 144) {
              h = 4;
            } else {
              if (o < 768) {
                h = 5;
              } else {
                h = 6;
              }
            }
          }
        }
      }
      if (o < 8) {
        v = new Classic(f);
      } else {
        if (f.isEven()) {
          v = new Barrett(f);
        } else {
          v = new Montgomery(f);
        }
      }
      var p = new Array(), d = 3, s = h - 1, a = (1 << h) - 1;
      p[1] = v.convert(this);
      if (h > 1) {
        var A = nbi();
        v.sqrTo(p[1], A);
        while (d <= a) {
          p[d] = nbi();
          v.mulTo(A, p[d - 2], p[d]);
          d += 2;
        }
      }
      var l = q.t - 1, x, u = true, c = nbi(), y;
      o = nbits(q[l]) - 1;
      while (l >= 0) {
        if (o >= s) {
          x = q[l] >> o - s & a;
        } else {
          x = (q[l] & (1 << o + 1) - 1) << s - o;
          if (l > 0) {
            x |= q[l - 1] >> this.DB + o - s;
          }
        }
        d = h;
        while ((x & 1) == 0) {
          x >>= 1;
          --d;
        }
        if ((o -= d) < 0) {
          o += this.DB;
          --l;
        }
        if (u) {
          p[x].copyTo(b);
          u = false;
        } else {
          while (d > 1) {
            v.sqrTo(b, c);
            v.sqrTo(c, b);
            d -= 2;
          }
          if (d > 0) {
            v.sqrTo(b, c);
          } else {
            y = b;
            b = c;
            c = y;
          }
          v.mulTo(c, p[x], b);
        }
        while (l >= 0 && (q[l] & 1 << o) == 0) {
          v.sqrTo(b, c);
          y = b;
          b = c;
          c = y;
          if (--o < 0) {
            o = this.DB - 1;
            --l;
          }
        }
      }
      return v.revert(b);
    }
    function bnGCD(c) {
      var b = this.s < 0 ? this.negate() : this.clone();
      var h = c.s < 0 ? c.negate() : c.clone();
      if (b.compareTo(h) < 0) {
        var e = b;
        b = h;
        h = e;
      }
      var d = b.getLowestSetBit(), f = h.getLowestSetBit();
      if (f < 0) {
        return b;
      }
      if (d < f) {
        f = d;
      }
      if (f > 0) {
        b.rShiftTo(f, b);
        h.rShiftTo(f, h);
      }
      while (b.signum() > 0) {
        if ((d = b.getLowestSetBit()) > 0) {
          b.rShiftTo(d, b);
        }
        if ((d = h.getLowestSetBit()) > 0) {
          h.rShiftTo(d, h);
        }
        if (b.compareTo(h) >= 0) {
          b.subTo(h, b);
          b.rShiftTo(1, b);
        } else {
          h.subTo(b, h);
          h.rShiftTo(1, h);
        }
      }
      if (f > 0) {
        h.lShiftTo(f, h);
      }
      return h;
    }
    function bnpModInt(e) {
      if (e <= 0) {
        return 0;
      }
      var c = this.DV % e, b = this.s < 0 ? e - 1 : 0;
      if (this.t > 0) {
        if (c == 0) {
          b = this[0] % e;
        } else {
          for (var a = this.t - 1; a >= 0; --a) {
            b = (c * b + this[a]) % e;
          }
        }
      }
      return b;
    }
    function bnModInverse(f) {
      var j = f.isEven();
      if (this.isEven() && j || f.signum() == 0) {
        return BigInteger.ZERO;
      }
      var i = f.clone(), h = this.clone();
      var g = nbv(1), e = nbv(0), l = nbv(0), k = nbv(1);
      while (i.signum() != 0) {
        while (i.isEven()) {
          i.rShiftTo(1, i);
          if (j) {
            if (!g.isEven() || !e.isEven()) {
              g.addTo(this, g);
              e.subTo(f, e);
            }
            g.rShiftTo(1, g);
          } else {
            if (!e.isEven()) {
              e.subTo(f, e);
            }
          }
          e.rShiftTo(1, e);
        }
        while (h.isEven()) {
          h.rShiftTo(1, h);
          if (j) {
            if (!l.isEven() || !k.isEven()) {
              l.addTo(this, l);
              k.subTo(f, k);
            }
            l.rShiftTo(1, l);
          } else {
            if (!k.isEven()) {
              k.subTo(f, k);
            }
          }
          k.rShiftTo(1, k);
        }
        if (i.compareTo(h) >= 0) {
          i.subTo(h, i);
          if (j) {
            g.subTo(l, g);
          }
          e.subTo(k, e);
        } else {
          h.subTo(i, h);
          if (j) {
            l.subTo(g, l);
          }
          k.subTo(e, k);
        }
      }
      if (h.compareTo(BigInteger.ONE) != 0) {
        return BigInteger.ZERO;
      }
      if (k.compareTo(f) >= 0) {
        return k.subtract(f);
      }
      if (k.signum() < 0) {
        k.addTo(f, k);
      } else {
        return k;
      }
      if (k.signum() < 0) {
        return k.add(f);
      } else {
        return k;
      }
    }
    var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
    function bnIsProbablePrime(e) {
      var d, b = this.abs();
      if (b.t == 1 && b[0] <= lowprimes[lowprimes.length - 1]) {
        for (d = 0; d < lowprimes.length; ++d) {
          if (b[0] == lowprimes[d]) {
            return true;
          }
        }
        return false;
      }
      if (b.isEven()) {
        return false;
      }
      d = 1;
      while (d < lowprimes.length) {
        var a = lowprimes[d], c = d + 1;
        while (c < lowprimes.length && a < lplim) {
          a *= lowprimes[c++];
        }
        a = b.modInt(a);
        while (d < c) {
          if (a % lowprimes[d++] == 0) {
            return false;
          }
        }
      }
      return b.millerRabin(e);
    }
    function bnpMillerRabin(f) {
      var g = this.subtract(BigInteger.ONE);
      var c = g.getLowestSetBit();
      if (c <= 0) {
        return false;
      }
      var h = g.shiftRight(c);
      f = f + 1 >> 1;
      if (f > lowprimes.length) {
        f = lowprimes.length;
      }
      var b = nbi();
      for (var e = 0; e < f; ++e) {
        b.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var l = b.modPow(h, this);
        if (l.compareTo(BigInteger.ONE) != 0 && l.compareTo(g) != 0) {
          var d = 1;
          while (d++ < c && l.compareTo(g) != 0) {
            l = l.modPowInt(2, this);
            if (l.compareTo(BigInteger.ONE) == 0) {
              return false;
            }
          }
          if (l.compareTo(g) != 0) {
            return false;
          }
        }
      }
      return true;
    }
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    BigInteger.prototype.square = bnSquare;
    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }
    function ARC4init(d) {
      var c, a, b;
      for (c = 0; c < 256; ++c) {
        this.S[c] = c;
      }
      a = 0;
      for (c = 0; c < 256; ++c) {
        a = a + this.S[c] + d[c % d.length] & 255;
        b = this.S[c];
        this.S[c] = this.S[a];
        this.S[a] = b;
      }
      this.i = 0;
      this.j = 0;
    }
    function ARC4next() {
      var a;
      this.i = this.i + 1 & 255;
      this.j = this.j + this.S[this.i] & 255;
      a = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = a;
      return this.S[a + this.S[this.i] & 255];
    }
    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;
    function prng_newstate() {
      return new Arcfour();
    }
    var rng_psize = 256;
    var rng_state;
    var rng_pool;
    var rng_pptr;
    function rng_seed_int(a) {
      rng_pool[rng_pptr++] ^= a & 255;
      rng_pool[rng_pptr++] ^= a >> 8 & 255;
      rng_pool[rng_pptr++] ^= a >> 16 & 255;
      rng_pool[rng_pptr++] ^= a >> 24 & 255;
      if (rng_pptr >= rng_psize) {
        rng_pptr -= rng_psize;
      }
    }
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }
    if (rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      if (window !== void 0 && (window.crypto !== void 0 || window.msCrypto !== void 0)) {
        crypto = window.crypto || window.msCrypto;
        if (crypto.getRandomValues) {
          ua = new Uint8Array(32);
          crypto.getRandomValues(ua);
          for (t = 0; t < 32; ++t) {
            rng_pool[rng_pptr++] = ua[t];
          }
        } else {
          if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
            z = window.crypto.random(32);
            for (t = 0; t < z.length; ++t) {
              rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
            }
          }
        }
      }
      while (rng_pptr < rng_psize) {
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
    }
    var t;
    var crypto;
    var ua;
    var z;
    function rng_get_byte() {
      if (rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
          rng_pool[rng_pptr] = 0;
        }
        rng_pptr = 0;
      }
      return rng_state.next();
    }
    function rng_get_bytes(b) {
      var a;
      for (a = 0; a < b.length; ++a) {
        b[a] = rng_get_byte();
      }
    }
    function SecureRandom() {
    }
    SecureRandom.prototype.nextBytes = rng_get_bytes;
    function parseBigInt(b, a) {
      return new BigInteger(b, a);
    }
    function pkcs1pad2(e, h) {
      if (h < e.length + 11) {
        throw "Message too long for RSA";
        return null;
      }
      var g = new Array();
      var d = e.length - 1;
      while (d >= 0 && h > 0) {
        var f = e.charCodeAt(d--);
        if (f < 128) {
          g[--h] = f;
        } else {
          if (f > 127 && f < 2048) {
            g[--h] = f & 63 | 128;
            g[--h] = f >> 6 | 192;
          } else {
            g[--h] = f & 63 | 128;
            g[--h] = f >> 6 & 63 | 128;
            g[--h] = f >> 12 | 224;
          }
        }
      }
      g[--h] = 0;
      var b = new SecureRandom();
      var a = new Array();
      while (h > 2) {
        a[0] = 0;
        while (a[0] == 0) {
          b.nextBytes(a);
        }
        g[--h] = a[0];
      }
      g[--h] = 2;
      g[--h] = 0;
      return new BigInteger(g);
    }
    function oaep_mgf1_arr(c, a, e) {
      var b = "", d = 0;
      while (b.length < a) {
        b += e(String.fromCharCode.apply(String, c.concat([(d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255])));
        d += 1;
      }
      return b;
    }
    function oaep_pad(q, a, f, l) {
      var c = KJUR2.crypto.MessageDigest;
      var o = KJUR2.crypto.Util;
      var b = null;
      if (!f) {
        f = "sha1";
      }
      if (typeof f === "string") {
        b = c.getCanonicalAlgName(f);
        l = c.getHashLength(b);
        f = function(i) {
          return hextorstr(o.hashHex(rstrtohex(i), b));
        };
      }
      if (q.length + 2 * l + 2 > a) {
        throw "Message too long for RSA";
      }
      var k = "", e;
      for (e = 0; e < a - q.length - 2 * l - 2; e += 1) {
        k += "\0";
      }
      var h = f("") + k + "" + q;
      var g = new Array(l);
      new SecureRandom().nextBytes(g);
      var j = oaep_mgf1_arr(g, h.length, f);
      var p = [];
      for (e = 0; e < h.length; e += 1) {
        p[e] = h.charCodeAt(e) ^ j.charCodeAt(e);
      }
      var m = oaep_mgf1_arr(p, g.length, f);
      var d = [0];
      for (e = 0; e < g.length; e += 1) {
        d[e + 1] = g[e] ^ m.charCodeAt(e);
      }
      return new BigInteger(d.concat(p));
    }
    function RSAKey() {
      this.n = null;
      this.e = 0;
      this.d = null;
      this.p = null;
      this.q = null;
      this.dmp1 = null;
      this.dmq1 = null;
      this.coeff = null;
    }
    function RSASetPublic(b, a) {
      this.isPublic = true;
      this.isPrivate = false;
      if (typeof b !== "string") {
        this.n = b;
        this.e = a;
      } else {
        if (b != null && a != null && b.length > 0 && a.length > 0) {
          this.n = parseBigInt(b, 16);
          this.e = parseInt(a, 16);
        } else {
          throw "Invalid RSA public key";
        }
      }
    }
    function RSADoPublic(a) {
      return a.modPowInt(this.e, this.n);
    }
    function RSAEncrypt(d) {
      var a = pkcs1pad2(d, this.n.bitLength() + 7 >> 3);
      if (a == null) {
        return null;
      }
      var e = this.doPublic(a);
      if (e == null) {
        return null;
      }
      var b = e.toString(16);
      if ((b.length & 1) == 0) {
        return b;
      } else {
        return "0" + b;
      }
    }
    function RSAEncryptOAEP(f, e, b) {
      var a = oaep_pad(f, this.n.bitLength() + 7 >> 3, e, b);
      if (a == null) {
        return null;
      }
      var g = this.doPublic(a);
      if (g == null) {
        return null;
      }
      var d = g.toString(16);
      if ((d.length & 1) == 0) {
        return d;
      } else {
        return "0" + d;
      }
    }
    RSAKey.prototype.doPublic = RSADoPublic;
    RSAKey.prototype.setPublic = RSASetPublic;
    RSAKey.prototype.encrypt = RSAEncrypt;
    RSAKey.prototype.encryptOAEP = RSAEncryptOAEP;
    RSAKey.prototype.type = "RSA";
    function pkcs1unpad2(g, j) {
      var a = g.toByteArray();
      var f = 0;
      while (f < a.length && a[f] == 0) {
        ++f;
      }
      if (a.length - f != j - 1 || a[f] != 2) {
        return null;
      }
      ++f;
      while (a[f] != 0) {
        if (++f >= a.length) {
          return null;
        }
      }
      var e = "";
      while (++f < a.length) {
        var h = a[f] & 255;
        if (h < 128) {
          e += String.fromCharCode(h);
        } else {
          if (h > 191 && h < 224) {
            e += String.fromCharCode((h & 31) << 6 | a[f + 1] & 63);
            ++f;
          } else {
            e += String.fromCharCode((h & 15) << 12 | (a[f + 1] & 63) << 6 | a[f + 2] & 63);
            f += 2;
          }
        }
      }
      return e;
    }
    function oaep_mgf1_str(c, a, e) {
      var b = "", d = 0;
      while (b.length < a) {
        b += e(c + String.fromCharCode.apply(String, [(d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255]));
        d += 1;
      }
      return b;
    }
    function oaep_unpad(o, b, g, p) {
      var e = KJUR2.crypto.MessageDigest;
      var r = KJUR2.crypto.Util;
      var c = null;
      if (!g) {
        g = "sha1";
      }
      if (typeof g === "string") {
        c = e.getCanonicalAlgName(g);
        p = e.getHashLength(c);
        g = function(d) {
          return hextorstr(r.hashHex(rstrtohex(d), c));
        };
      }
      o = o.toByteArray();
      var h;
      for (h = 0; h < o.length; h += 1) {
        o[h] &= 255;
      }
      while (o.length < b) {
        o.unshift(0);
      }
      o = String.fromCharCode.apply(String, o);
      if (o.length < 2 * p + 2) {
        throw "Cipher too short";
      }
      var f = o.substr(1, p);
      var s = o.substr(p + 1);
      var q = oaep_mgf1_str(s, p, g);
      var k = [], h;
      for (h = 0; h < f.length; h += 1) {
        k[h] = f.charCodeAt(h) ^ q.charCodeAt(h);
      }
      var l = oaep_mgf1_str(String.fromCharCode.apply(String, k), o.length - p, g);
      var j = [];
      for (h = 0; h < s.length; h += 1) {
        j[h] = s.charCodeAt(h) ^ l.charCodeAt(h);
      }
      j = String.fromCharCode.apply(String, j);
      if (j.substr(0, p) !== g("")) {
        throw "Hash mismatch";
      }
      j = j.substr(p);
      var a = j.indexOf("");
      var m = a != -1 ? j.substr(0, a).lastIndexOf("\0") : -1;
      if (m + 1 != a) {
        throw "Malformed data";
      }
      return j.substr(a + 1);
    }
    function RSASetPrivate(c, a, b) {
      this.isPrivate = true;
      if (typeof c !== "string") {
        this.n = c;
        this.e = a;
        this.d = b;
      } else {
        if (c != null && a != null && c.length > 0 && a.length > 0) {
          this.n = parseBigInt(c, 16);
          this.e = parseInt(a, 16);
          this.d = parseBigInt(b, 16);
        } else {
          throw "Invalid RSA private key";
        }
      }
    }
    function RSASetPrivateEx(g, d, e, c, b, a, h, f) {
      this.isPrivate = true;
      this.isPublic = false;
      if (g == null) {
        throw "RSASetPrivateEx N == null";
      }
      if (d == null) {
        throw "RSASetPrivateEx E == null";
      }
      if (g.length == 0) {
        throw "RSASetPrivateEx N.length == 0";
      }
      if (d.length == 0) {
        throw "RSASetPrivateEx E.length == 0";
      }
      if (g != null && d != null && g.length > 0 && d.length > 0) {
        this.n = parseBigInt(g, 16);
        this.e = parseInt(d, 16);
        this.d = parseBigInt(e, 16);
        this.p = parseBigInt(c, 16);
        this.q = parseBigInt(b, 16);
        this.dmp1 = parseBigInt(a, 16);
        this.dmq1 = parseBigInt(h, 16);
        this.coeff = parseBigInt(f, 16);
      } else {
        throw "Invalid RSA private key in RSASetPrivateEx";
      }
    }
    function RSAGenerate(b, l) {
      var a = new SecureRandom();
      var g = b >> 1;
      this.e = parseInt(l, 16);
      var c = new BigInteger(l, 16);
      var d = b / 2 - 100;
      var k = BigInteger.ONE.shiftLeft(d);
      for (; ; ) {
        for (; ; ) {
          this.p = new BigInteger(b - g, 1, a);
          if (this.p.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
            break;
          }
        }
        for (; ; ) {
          this.q = new BigInteger(g, 1, a);
          if (this.q.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
            break;
          }
        }
        if (this.p.compareTo(this.q) <= 0) {
          var j = this.p;
          this.p = this.q;
          this.q = j;
        }
        var h = this.q.subtract(this.p).abs();
        if (h.bitLength() < d || h.compareTo(k) <= 0) {
          continue;
        }
        var i = this.p.subtract(BigInteger.ONE);
        var e = this.q.subtract(BigInteger.ONE);
        var f = i.multiply(e);
        if (f.gcd(c).compareTo(BigInteger.ONE) == 0) {
          this.n = this.p.multiply(this.q);
          if (this.n.bitLength() == b) {
            this.d = c.modInverse(f);
            this.dmp1 = this.d.mod(i);
            this.dmq1 = this.d.mod(e);
            this.coeff = this.q.modInverse(this.p);
            break;
          }
        }
      }
      this.isPrivate = true;
    }
    function RSADoPrivate(a) {
      if (this.p == null || this.q == null) {
        return a.modPow(this.d, this.n);
      }
      var c = a.mod(this.p).modPow(this.dmp1, this.p);
      var b = a.mod(this.q).modPow(this.dmq1, this.q);
      while (c.compareTo(b) < 0) {
        c = c.add(this.p);
      }
      return c.subtract(b).multiply(this.coeff).mod(this.p).multiply(this.q).add(b);
    }
    function RSADecrypt(b) {
      if (b.length != Math.ceil(this.n.bitLength() / 4)) {
        throw new Error("wrong ctext length");
      }
      var d = parseBigInt(b, 16);
      var a = this.doPrivate(d);
      if (a == null) {
        return null;
      }
      return pkcs1unpad2(a, this.n.bitLength() + 7 >> 3);
    }
    function RSADecryptOAEP(e, d, b) {
      if (e.length != Math.ceil(this.n.bitLength() / 4)) {
        throw new Error("wrong ctext length");
      }
      var f = parseBigInt(e, 16);
      var a = this.doPrivate(f);
      if (a == null) {
        return null;
      }
      return oaep_unpad(a, this.n.bitLength() + 7 >> 3, d, b);
    }
    RSAKey.prototype.doPrivate = RSADoPrivate;
    RSAKey.prototype.setPrivate = RSASetPrivate;
    RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
    RSAKey.prototype.generate = RSAGenerate;
    RSAKey.prototype.decrypt = RSADecrypt;
    RSAKey.prototype.decryptOAEP = RSADecryptOAEP;
    function ECFieldElementFp(b, a) {
      this.x = a;
      this.q = b;
    }
    function feFpEquals(a) {
      if (a == this) {
        return true;
      }
      return this.q.equals(a.q) && this.x.equals(a.x);
    }
    function feFpToBigInteger() {
      return this.x;
    }
    function feFpNegate() {
      return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
    }
    function feFpAdd(a) {
      return new ECFieldElementFp(this.q, this.x.add(a.toBigInteger()).mod(this.q));
    }
    function feFpSubtract(a) {
      return new ECFieldElementFp(this.q, this.x.subtract(a.toBigInteger()).mod(this.q));
    }
    function feFpMultiply(a) {
      return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger()).mod(this.q));
    }
    function feFpSquare() {
      return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
    }
    function feFpDivide(a) {
      return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q));
    }
    ECFieldElementFp.prototype.equals = feFpEquals;
    ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;
    ECFieldElementFp.prototype.negate = feFpNegate;
    ECFieldElementFp.prototype.add = feFpAdd;
    ECFieldElementFp.prototype.subtract = feFpSubtract;
    ECFieldElementFp.prototype.multiply = feFpMultiply;
    ECFieldElementFp.prototype.square = feFpSquare;
    ECFieldElementFp.prototype.divide = feFpDivide;
    ECFieldElementFp.prototype.sqrt = function() {
      return new ECFieldElementFp(this.q, this.x.sqrt().mod(this.q));
    };
    function ECPointFp(c, a, d, b) {
      this.curve = c;
      this.x = a;
      this.y = d;
      if (b == null) {
        this.z = BigInteger.ONE;
      } else {
        this.z = b;
      }
      this.zinv = null;
    }
    function pointFpGetX() {
      if (this.zinv == null) {
        this.zinv = this.z.modInverse(this.curve.q);
      }
      return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
    }
    function pointFpGetY() {
      if (this.zinv == null) {
        this.zinv = this.z.modInverse(this.curve.q);
      }
      return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
    }
    function pointFpEquals(a) {
      if (a == this) {
        return true;
      }
      if (this.isInfinity()) {
        return a.isInfinity();
      }
      if (a.isInfinity()) {
        return this.isInfinity();
      }
      var c, b;
      c = a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q);
      if (!c.equals(BigInteger.ZERO)) {
        return false;
      }
      b = a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q);
      return b.equals(BigInteger.ZERO);
    }
    function pointFpIsInfinity() {
      if (this.x == null && this.y == null) {
        return true;
      }
      return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
    }
    function pointFpNegate() {
      return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
    }
    function pointFpAdd(l) {
      if (this.isInfinity()) {
        return l;
      }
      if (l.isInfinity()) {
        return this;
      }
      var p = l.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(l.z)).mod(this.curve.q);
      var o = l.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(l.z)).mod(this.curve.q);
      if (BigInteger.ZERO.equals(o)) {
        if (BigInteger.ZERO.equals(p)) {
          return this.twice();
        }
        return this.curve.getInfinity();
      }
      var j = new BigInteger("3");
      var e = this.x.toBigInteger();
      var n = this.y.toBigInteger();
      var c = l.x.toBigInteger();
      var k = l.y.toBigInteger();
      var m = o.square();
      var i = m.multiply(o);
      var d = e.multiply(m);
      var g = p.square().multiply(this.z);
      var a = g.subtract(d.shiftLeft(1)).multiply(l.z).subtract(i).multiply(o).mod(this.curve.q);
      var h = d.multiply(j).multiply(p).subtract(n.multiply(i)).subtract(g.multiply(p)).multiply(l.z).add(p.multiply(i)).mod(this.curve.q);
      var f = i.multiply(this.z).multiply(l.z).mod(this.curve.q);
      return new ECPointFp(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(h), f);
    }
    function pointFpTwice() {
      if (this.isInfinity()) {
        return this;
      }
      if (this.y.toBigInteger().signum() == 0) {
        return this.curve.getInfinity();
      }
      var g = new BigInteger("3");
      var c = this.x.toBigInteger();
      var h = this.y.toBigInteger();
      var e = h.multiply(this.z);
      var j = e.multiply(h).mod(this.curve.q);
      var i = this.curve.a.toBigInteger();
      var k = c.square().multiply(g);
      if (!BigInteger.ZERO.equals(i)) {
        k = k.add(this.z.square().multiply(i));
      }
      k = k.mod(this.curve.q);
      var b = k.square().subtract(c.shiftLeft(3).multiply(j)).shiftLeft(1).multiply(e).mod(this.curve.q);
      var f = k.multiply(g).multiply(c).subtract(j.shiftLeft(1)).shiftLeft(2).multiply(j).subtract(k.square().multiply(k)).mod(this.curve.q);
      var d = e.square().multiply(e).shiftLeft(3).mod(this.curve.q);
      return new ECPointFp(this.curve, this.curve.fromBigInteger(b), this.curve.fromBigInteger(f), d);
    }
    function pointFpMultiply(d) {
      if (this.isInfinity()) {
        return this;
      }
      if (d.signum() == 0) {
        return this.curve.getInfinity();
      }
      var m = d;
      var l = m.multiply(new BigInteger("3"));
      var b = this.negate();
      var j = this;
      var q = this.curve.q.subtract(d);
      var o = q.multiply(new BigInteger("3"));
      var c = new ECPointFp(this.curve, this.x, this.y);
      var a = c.negate();
      var g;
      for (g = l.bitLength() - 2; g > 0; --g) {
        j = j.twice();
        var n = l.testBit(g);
        var f = m.testBit(g);
        if (n != f) {
          j = j.add(n ? this : b);
        }
      }
      for (g = o.bitLength() - 2; g > 0; --g) {
        c = c.twice();
        var p = o.testBit(g);
        var r = q.testBit(g);
        if (p != r) {
          c = c.add(p ? c : a);
        }
      }
      return j;
    }
    function pointFpMultiplyTwo(c, a, b) {
      var d;
      if (c.bitLength() > b.bitLength()) {
        d = c.bitLength() - 1;
      } else {
        d = b.bitLength() - 1;
      }
      var f = this.curve.getInfinity();
      var e = this.add(a);
      while (d >= 0) {
        f = f.twice();
        if (c.testBit(d)) {
          if (b.testBit(d)) {
            f = f.add(e);
          } else {
            f = f.add(this);
          }
        } else {
          if (b.testBit(d)) {
            f = f.add(a);
          }
        }
        --d;
      }
      return f;
    }
    ECPointFp.prototype.getX = pointFpGetX;
    ECPointFp.prototype.getY = pointFpGetY;
    ECPointFp.prototype.equals = pointFpEquals;
    ECPointFp.prototype.isInfinity = pointFpIsInfinity;
    ECPointFp.prototype.negate = pointFpNegate;
    ECPointFp.prototype.add = pointFpAdd;
    ECPointFp.prototype.twice = pointFpTwice;
    ECPointFp.prototype.multiply = pointFpMultiply;
    ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;
    function ECCurveFp(e, d, c) {
      this.q = e;
      this.a = this.fromBigInteger(d);
      this.b = this.fromBigInteger(c);
      this.infinity = new ECPointFp(this, null, null);
    }
    function curveFpGetQ() {
      return this.q;
    }
    function curveFpGetA() {
      return this.a;
    }
    function curveFpGetB() {
      return this.b;
    }
    function curveFpEquals(a) {
      if (a == this) {
        return true;
      }
      return this.q.equals(a.q) && this.a.equals(a.a) && this.b.equals(a.b);
    }
    function curveFpGetInfinity() {
      return this.infinity;
    }
    function curveFpFromBigInteger(a) {
      return new ECFieldElementFp(this.q, a);
    }
    function curveFpDecodePointHex(m) {
      switch (parseInt(m.substr(0, 2), 16)) {
        case 0:
          return this.infinity;
        case 2:
        case 3:
          var c = m.substr(0, 2);
          var l = m.substr(2);
          var j = this.fromBigInteger(new BigInteger(k, 16));
          var i = this.getA();
          var h = this.getB();
          var e = j.square().add(i).multiply(j).add(h);
          var g = e.sqrt();
          if (c == "03") {
            g = g.negate();
          }
          return new ECPointFp(this, j, g);
        case 4:
        case 6:
        case 7:
          var d = (m.length - 2) / 2;
          var k = m.substr(2, d);
          var f = m.substr(d + 2, d);
          return new ECPointFp(this, this.fromBigInteger(new BigInteger(k, 16)), this.fromBigInteger(new BigInteger(f, 16)));
        default:
          return null;
      }
    }
    ECCurveFp.prototype.getQ = curveFpGetQ;
    ECCurveFp.prototype.getA = curveFpGetA;
    ECCurveFp.prototype.getB = curveFpGetB;
    ECCurveFp.prototype.equals = curveFpEquals;
    ECCurveFp.prototype.getInfinity = curveFpGetInfinity;
    ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;
    ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;
    ECFieldElementFp.prototype.getByteLength = function() {
      return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
    };
    ECPointFp.prototype.getEncoded = function(c) {
      var d = function(h, f) {
        var g = h.toByteArrayUnsigned();
        if (f < g.length) {
          g = g.slice(g.length - f);
        } else {
          while (f > g.length) {
            g.unshift(0);
          }
        }
        return g;
      };
      var a = this.getX().toBigInteger();
      var e = this.getY().toBigInteger();
      var b = d(a, 32);
      if (c) {
        if (e.isEven()) {
          b.unshift(2);
        } else {
          b.unshift(3);
        }
      } else {
        b.unshift(4);
        b = b.concat(d(e, 32));
      }
      return b;
    };
    ECPointFp.decodeFrom = function(g, c) {
      var f = c[0];
      var e = c.length - 1;
      var d = c.slice(1, 1 + e / 2);
      var b = c.slice(1 + e / 2, 1 + e);
      d.unshift(0);
      b.unshift(0);
      var a = new BigInteger(d);
      var h = new BigInteger(b);
      return new ECPointFp(g, g.fromBigInteger(a), g.fromBigInteger(h));
    };
    ECPointFp.decodeFromHex = function(g, c) {
      var f = c.substr(0, 2);
      var e = c.length - 2;
      var d = c.substr(2, e / 2);
      var b = c.substr(2 + e / 2, e / 2);
      var a = new BigInteger(d, 16);
      var h = new BigInteger(b, 16);
      return new ECPointFp(g, g.fromBigInteger(a), g.fromBigInteger(h));
    };
    ECPointFp.prototype.add2D = function(c) {
      if (this.isInfinity()) {
        return c;
      }
      if (c.isInfinity()) {
        return this;
      }
      if (this.x.equals(c.x)) {
        if (this.y.equals(c.y)) {
          return this.twice();
        }
        return this.curve.getInfinity();
      }
      var g = c.x.subtract(this.x);
      var e = c.y.subtract(this.y);
      var a = e.divide(g);
      var d = a.square().subtract(this.x).subtract(c.x);
      var f = a.multiply(this.x.subtract(d)).subtract(this.y);
      return new ECPointFp(this.curve, d, f);
    };
    ECPointFp.prototype.twice2D = function() {
      if (this.isInfinity()) {
        return this;
      }
      if (this.y.toBigInteger().signum() == 0) {
        return this.curve.getInfinity();
      }
      var b = this.curve.fromBigInteger(BigInteger.valueOf(2));
      var e = this.curve.fromBigInteger(BigInteger.valueOf(3));
      var a = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(b));
      var c = a.square().subtract(this.x.multiply(b));
      var d = a.multiply(this.x.subtract(c)).subtract(this.y);
      return new ECPointFp(this.curve, c, d);
    };
    ECPointFp.prototype.multiply2D = function(b) {
      if (this.isInfinity()) {
        return this;
      }
      if (b.signum() == 0) {
        return this.curve.getInfinity();
      }
      var g = b;
      var f = g.multiply(new BigInteger("3"));
      var l = this.negate();
      var d = this;
      var c;
      for (c = f.bitLength() - 2; c > 0; --c) {
        d = d.twice();
        var a = f.testBit(c);
        var j = g.testBit(c);
        if (a != j) {
          d = d.add2D(a ? this : l);
        }
      }
      return d;
    };
    ECPointFp.prototype.isOnCurve = function() {
      var d = this.getX().toBigInteger();
      var i = this.getY().toBigInteger();
      var f = this.curve.getA().toBigInteger();
      var c = this.curve.getB().toBigInteger();
      var h = this.curve.getQ();
      var e = i.multiply(i).mod(h);
      var g = d.multiply(d).multiply(d).add(f.multiply(d)).add(c).mod(h);
      return e.equals(g);
    };
    ECPointFp.prototype.toString = function() {
      return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
    };
    ECPointFp.prototype.validate = function() {
      var c = this.curve.getQ();
      if (this.isInfinity()) {
        throw new Error("Point is at infinity.");
      }
      var a = this.getX().toBigInteger();
      var b = this.getY().toBigInteger();
      if (a.compareTo(BigInteger.ONE) < 0 || a.compareTo(c.subtract(BigInteger.ONE)) > 0) {
        throw new Error("x coordinate out of bounds");
      }
      if (b.compareTo(BigInteger.ONE) < 0 || b.compareTo(c.subtract(BigInteger.ONE)) > 0) {
        throw new Error("y coordinate out of bounds");
      }
      if (!this.isOnCurve()) {
        throw new Error("Point is not on the curve.");
      }
      if (this.multiply(c).isInfinity()) {
        throw new Error("Point is not a scalar multiple of G.");
      }
      return true;
    };
    var jsonParse = function() {
      var e = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)";
      var j = '(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';
      var i = '(?:"' + j + '*")';
      var d = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + e + "|" + i + ")", "g");
      var k = new RegExp("\\\\(?:([^u])|u(.{4}))", "g");
      var g = { '"': '"', "/": "/", "\\": "\\", b: "\b", f: "\f", n: "\n", r: "\r", t: "	" };
      function h(l, m, n) {
        return m ? g[m] : String.fromCharCode(parseInt(n, 16));
      }
      var c = new String("");
      var a = "\\";
      var f = { "{": Object, "[": Array };
      var b = Object.hasOwnProperty;
      return function(u, q) {
        var p = u.match(d);
        var x;
        var v = p[0];
        var l = false;
        if (v === "{") {
          x = {};
        } else {
          if (v === "[") {
            x = [];
          } else {
            x = [];
            l = true;
          }
        }
        var t2;
        var r = [x];
        for (var o = 1 - l, m = p.length; o < m; ++o) {
          v = p[o];
          var w;
          switch (v.charCodeAt(0)) {
            default:
              w = r[0];
              w[t2 || w.length] = +v;
              t2 = void 0;
              break;
            case 34:
              v = v.substring(1, v.length - 1);
              if (v.indexOf(a) !== -1) {
                v = v.replace(k, h);
              }
              w = r[0];
              if (!t2) {
                if (w instanceof Array) {
                  t2 = w.length;
                } else {
                  t2 = v || c;
                  break;
                }
              }
              w[t2] = v;
              t2 = void 0;
              break;
            case 91:
              w = r[0];
              r.unshift(w[t2 || w.length] = []);
              t2 = void 0;
              break;
            case 93:
              r.shift();
              break;
            case 102:
              w = r[0];
              w[t2 || w.length] = false;
              t2 = void 0;
              break;
            case 110:
              w = r[0];
              w[t2 || w.length] = null;
              t2 = void 0;
              break;
            case 116:
              w = r[0];
              w[t2 || w.length] = true;
              t2 = void 0;
              break;
            case 123:
              w = r[0];
              r.unshift(w[t2 || w.length] = {});
              t2 = void 0;
              break;
            case 125:
              r.shift();
              break;
          }
        }
        if (l) {
          if (r.length !== 1) {
            throw new Error();
          }
          x = x[0];
        } else {
          if (r.length) {
            throw new Error();
          }
        }
        if (q) {
          var s = function(C, B) {
            var D = C[B];
            if (D && typeof D === "object") {
              var n = null;
              for (var z2 in D) {
                if (b.call(D, z2) && D !== C) {
                  var y = s(D, z2);
                  if (y !== void 0) {
                    D[z2] = y;
                  } else {
                    if (!n) {
                      n = [];
                    }
                    n.push(z2);
                  }
                }
              }
              if (n) {
                for (var A = n.length; --A >= 0; ) {
                  delete D[n[A]];
                }
              }
            }
            return q.call(C, B, D);
          };
          x = s({ "": x }, "");
        }
        return x;
      };
    }();
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.asn1 == "undefined" || !KJUR2.asn1) {
      KJUR2.asn1 = {};
    }
    KJUR2.asn1.ASN1Util = new function() {
      this.integerToByteHex = function(a) {
        var b = a.toString(16);
        if (b.length % 2 == 1) {
          b = "0" + b;
        }
        return b;
      };
      this.bigIntToMinTwosComplementsHex = function(j) {
        var f = j.toString(16);
        if (f.substr(0, 1) != "-") {
          if (f.length % 2 == 1) {
            f = "0" + f;
          } else {
            if (!f.match(/^[0-7]/)) {
              f = "00" + f;
            }
          }
        } else {
          var a = f.substr(1);
          var e = a.length;
          if (e % 2 == 1) {
            e += 1;
          } else {
            if (!f.match(/^[0-7]/)) {
              e += 2;
            }
          }
          var g = "";
          for (var d = 0; d < e; d++) {
            g += "f";
          }
          var c = new BigInteger(g, 16);
          var b = c.xor(j).add(BigInteger.ONE);
          f = b.toString(16).replace(/^-/, "");
        }
        return f;
      };
      this.getPEMStringFromHex = function(a, b) {
        return hextopem(a, b);
      };
      this.newObject = function(k) {
        var F = KJUR2, o = F.asn1, v = o.ASN1Object, B = o.DERBoolean, e = o.DERInteger, t2 = o.DERBitString, h = o.DEROctetString, x = o.DERNull, y = o.DERObjectIdentifier, m = o.DEREnumerated, g = o.DERUTF8String, f = o.DERNumericString, A = o.DERPrintableString, w = o.DERTeletexString, q = o.DERIA5String, E = o.DERUTCTime, j = o.DERGeneralizedTime, b = o.DERVisibleString, l = o.DERBMPString, n = o.DERSequence, c = o.DERSet, s = o.DERTaggedObject, p = o.ASN1Util.newObject;
        if (k instanceof o.ASN1Object) {
          return k;
        }
        var u = Object.keys(k);
        if (u.length != 1) {
          throw new Error("key of param shall be only one.");
        }
        var H = u[0];
        if (":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + H + ":") == -1) {
          throw new Error("undefined key: " + H);
        }
        if (H == "bool") {
          return new B(k[H]);
        }
        if (H == "int") {
          return new e(k[H]);
        }
        if (H == "bitstr") {
          return new t2(k[H]);
        }
        if (H == "octstr") {
          return new h(k[H]);
        }
        if (H == "null") {
          return new x(k[H]);
        }
        if (H == "oid") {
          return new y(k[H]);
        }
        if (H == "enum") {
          return new m(k[H]);
        }
        if (H == "utf8str") {
          return new g(k[H]);
        }
        if (H == "numstr") {
          return new f(k[H]);
        }
        if (H == "prnstr") {
          return new A(k[H]);
        }
        if (H == "telstr") {
          return new w(k[H]);
        }
        if (H == "ia5str") {
          return new q(k[H]);
        }
        if (H == "utctime") {
          return new E(k[H]);
        }
        if (H == "gentime") {
          return new j(k[H]);
        }
        if (H == "visstr") {
          return new b(k[H]);
        }
        if (H == "bmpstr") {
          return new l(k[H]);
        }
        if (H == "asn1") {
          return new v(k[H]);
        }
        if (H == "seq") {
          var d = k[H];
          var G = [];
          for (var z2 = 0; z2 < d.length; z2++) {
            var D = p(d[z2]);
            G.push(D);
          }
          return new n({ array: G });
        }
        if (H == "set") {
          var d = k[H];
          var G = [];
          for (var z2 = 0; z2 < d.length; z2++) {
            var D = p(d[z2]);
            G.push(D);
          }
          return new c({ array: G });
        }
        if (H == "tag") {
          var C = k[H];
          if (Object.prototype.toString.call(C) === "[object Array]" && C.length == 3) {
            var r = p(C[2]);
            return new s({ tag: C[0], explicit: C[1], obj: r });
          } else {
            return new s(C);
          }
        }
      };
      this.jsonToASN1HEX = function(b) {
        var a = this.newObject(b);
        return a.tohex();
      };
    }();
    KJUR2.asn1.ASN1Util.oidHexToInt = function(a) {
      var j = "";
      var k = parseInt(a.substr(0, 2), 16);
      var d = Math.floor(k / 40);
      var c = k % 40;
      var j = d + "." + c;
      var e = "";
      for (var f = 2; f < a.length; f += 2) {
        var g = parseInt(a.substr(f, 2), 16);
        var h = ("00000000" + g.toString(2)).slice(-8);
        e = e + h.substr(1, 7);
        if (h.substr(0, 1) == "0") {
          var b = new BigInteger(e, 2);
          j = j + "." + b.toString(10);
          e = "";
        }
      }
      return j;
    };
    KJUR2.asn1.ASN1Util.oidIntToHex = function(f) {
      var e = function(a) {
        var k = a.toString(16);
        if (k.length == 1) {
          k = "0" + k;
        }
        return k;
      };
      var d = function(o) {
        var n = "";
        var k = new BigInteger(o, 10);
        var a = k.toString(2);
        var l = 7 - a.length % 7;
        if (l == 7) {
          l = 0;
        }
        var q = "";
        for (var m = 0; m < l; m++) {
          q += "0";
        }
        a = q + a;
        for (var m = 0; m < a.length - 1; m += 7) {
          var p = a.substr(m, 7);
          if (m != a.length - 7) {
            p = "1" + p;
          }
          n += e(parseInt(p, 2));
        }
        return n;
      };
      if (!f.match(/^[0-9.]+$/)) {
        throw "malformed oid string: " + f;
      }
      var g = "";
      var b = f.split(".");
      var j = parseInt(b[0]) * 40 + parseInt(b[1]);
      g += e(j);
      b.splice(0, 2);
      for (var c = 0; c < b.length; c++) {
        g += d(b[c]);
      }
      return g;
    };
    KJUR2.asn1.ASN1Object = function(e) {
      var c = true;
      var b = null;
      var d = "00";
      var f = "00";
      var a = "";
      this.params = null;
      this.getLengthHexFromValue = function() {
        if (typeof this.hV == "undefined" || this.hV == null) {
          throw new Error("this.hV is null or undefined");
        }
        if (this.hV.length % 2 == 1) {
          throw new Error("value hex must be even length: n=" + a.length + ",v=" + this.hV);
        }
        var j = this.hV.length / 2;
        var i = j.toString(16);
        if (i.length % 2 == 1) {
          i = "0" + i;
        }
        if (j < 128) {
          return i;
        } else {
          var h = i.length / 2;
          if (h > 15) {
            throw new Error("ASN.1 length too long to represent by 8x: n = " + j.toString(16));
          }
          var g = 128 + h;
          return g.toString(16) + i;
        }
      };
      this.tohex = function() {
        if (this.hTLV == null || this.isModified) {
          this.hV = this.getFreshValueHex();
          this.hL = this.getLengthHexFromValue();
          this.hTLV = this.hT + this.hL + this.hV;
          this.isModified = false;
        }
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.getValueHex = function() {
        this.tohex();
        return this.hV;
      };
      this.getFreshValueHex = function() {
        return "";
      };
      this.setByParam = function(g) {
        this.params = g;
      };
      if (e != void 0) {
        if (e.tlv != void 0) {
          this.hTLV = e.tlv;
          this.isModified = false;
        }
      }
    };
    KJUR2.asn1.DERAbstractString = function(c) {
      KJUR2.asn1.DERAbstractString.superclass.constructor.call(this);
      var b = null;
      var a = null;
      this.getString = function() {
        return this.s;
      };
      this.setString = function(d) {
        this.hTLV = null;
        this.isModified = true;
        this.s = d;
        this.hV = utf8tohex(this.s).toLowerCase();
      };
      this.setStringHex = function(d) {
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = d;
      };
      this.getFreshValueHex = function() {
        return this.hV;
      };
      if (typeof c != "undefined") {
        if (typeof c == "string") {
          this.setString(c);
        } else {
          if (typeof c.str != "undefined") {
            this.setString(c.str);
          } else {
            if (typeof c.hex != "undefined") {
              this.setStringHex(c.hex);
            }
          }
        }
      }
    };
    extendClass(KJUR2.asn1.DERAbstractString, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERAbstractTime = function(c) {
      KJUR2.asn1.DERAbstractTime.superclass.constructor.call(this);
      var b = null;
      var a = null;
      this.localDateToUTC = function(g) {
        var e = g.getTime() + g.getTimezoneOffset() * 6e4;
        var f = new Date(e);
        return f;
      };
      this.formatDate = function(m, o, e) {
        var g = this.zeroPadding;
        var n = this.localDateToUTC(m);
        var p = String(n.getFullYear());
        if (o == "utc") {
          p = p.substr(2, 2);
        }
        var l = g(String(n.getMonth() + 1), 2);
        var q = g(String(n.getDate()), 2);
        var h = g(String(n.getHours()), 2);
        var i = g(String(n.getMinutes()), 2);
        var j = g(String(n.getSeconds()), 2);
        var r = p + l + q + h + i + j;
        if (e === true) {
          var f = n.getMilliseconds();
          if (f != 0) {
            var k = g(String(f), 3);
            k = k.replace(/[0]+$/, "");
            r = r + "." + k;
          }
        }
        return r + "Z";
      };
      this.zeroPadding = function(e, d) {
        if (e.length >= d) {
          return e;
        }
        return new Array(d - e.length + 1).join("0") + e;
      };
      this.setByParam = function(d) {
        this.hV = null;
        this.hTLV = null;
        this.params = d;
      };
      this.getString = function() {
        return void 0;
      };
      this.setString = function(d) {
        this.hTLV = null;
        this.isModified = true;
        if (this.params == void 0) {
          this.params = {};
        }
        this.params.str = d;
      };
      this.setByDate = function(d) {
        this.hTLV = null;
        this.isModified = true;
        if (this.params == void 0) {
          this.params = {};
        }
        this.params.date = d;
      };
      this.setByDateValue = function(h, j, e, d, f, g) {
        var i = new Date(Date.UTC(h, j - 1, e, d, f, g, 0));
        this.setByDate(i);
      };
      this.getFreshValueHex = function() {
        return this.hV;
      };
    };
    extendClass(KJUR2.asn1.DERAbstractTime, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERAbstractStructured = function(b) {
      KJUR2.asn1.DERAbstractString.superclass.constructor.call(this);
      var a = null;
      this.setByASN1ObjectArray = function(c) {
        this.hTLV = null;
        this.isModified = true;
        this.asn1Array = c;
      };
      this.appendASN1Object = function(c) {
        this.hTLV = null;
        this.isModified = true;
        this.asn1Array.push(c);
      };
      this.asn1Array = new Array();
      if (typeof b != "undefined") {
        if (typeof b.array != "undefined") {
          this.asn1Array = b.array;
        }
      }
    };
    extendClass(KJUR2.asn1.DERAbstractStructured, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERBoolean = function(a) {
      KJUR2.asn1.DERBoolean.superclass.constructor.call(this);
      this.hT = "01";
      if (a == false) {
        this.hTLV = "010100";
      } else {
        this.hTLV = "0101ff";
      }
    };
    extendClass(KJUR2.asn1.DERBoolean, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERInteger = function(a) {
      KJUR2.asn1.DERInteger.superclass.constructor.call(this);
      this.hT = "02";
      this.setByBigInteger = function(b) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = KJUR2.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b);
      };
      this.setByInteger = function(c) {
        var b = new BigInteger(String(c), 10);
        this.setByBigInteger(b);
      };
      this.setValueHex = function(b) {
        this.hV = b;
      };
      this.getFreshValueHex = function() {
        return this.hV;
      };
      if (typeof a != "undefined") {
        if (typeof a.bigint != "undefined") {
          this.setByBigInteger(a.bigint);
        } else {
          if (typeof a["int"] != "undefined") {
            this.setByInteger(a["int"]);
          } else {
            if (typeof a == "number") {
              this.setByInteger(a);
            } else {
              if (typeof a.hex != "undefined") {
                this.setValueHex(a.hex);
              }
            }
          }
        }
      }
    };
    extendClass(KJUR2.asn1.DERInteger, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERBitString = function(b) {
      if (b !== void 0 && typeof b.obj !== "undefined") {
        var a = KJUR2.asn1.ASN1Util.newObject(b.obj);
        b.hex = "00" + a.tohex();
      }
      KJUR2.asn1.DERBitString.superclass.constructor.call(this);
      this.hT = "03";
      this.setHexValueIncludingUnusedBits = function(c) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = c;
      };
      this.setUnusedBitsAndHexValue = function(c, e) {
        if (c < 0 || 7 < c) {
          throw "unused bits shall be from 0 to 7: u = " + c;
        }
        var d = "0" + c;
        this.hTLV = null;
        this.isModified = true;
        this.hV = d + e;
      };
      this.setByBinaryString = function(e) {
        e = e.replace(/0+$/, "");
        var f = 8 - e.length % 8;
        if (f == 8) {
          f = 0;
        }
        for (var g = 0; g <= f; g++) {
          e += "0";
        }
        var j = "";
        for (var g = 0; g < e.length - 1; g += 8) {
          var d = e.substr(g, 8);
          var c = parseInt(d, 2).toString(16);
          if (c.length == 1) {
            c = "0" + c;
          }
          j += c;
        }
        this.hTLV = null;
        this.isModified = true;
        this.hV = "0" + f + j;
      };
      this.setByBooleanArray = function(e) {
        var d = "";
        for (var c = 0; c < e.length; c++) {
          if (e[c] == true) {
            d += "1";
          } else {
            d += "0";
          }
        }
        this.setByBinaryString(d);
      };
      this.newFalseArray = function(e) {
        var c = new Array(e);
        for (var d = 0; d < e; d++) {
          c[d] = false;
        }
        return c;
      };
      this.getFreshValueHex = function() {
        return this.hV;
      };
      if (typeof b != "undefined") {
        if (typeof b == "string" && b.toLowerCase().match(/^[0-9a-f]+$/)) {
          this.setHexValueIncludingUnusedBits(b);
        } else {
          if (typeof b.hex != "undefined") {
            this.setHexValueIncludingUnusedBits(b.hex);
          } else {
            if (typeof b.bin != "undefined") {
              this.setByBinaryString(b.bin);
            } else {
              if (typeof b.array != "undefined") {
                this.setByBooleanArray(b.array);
              }
            }
          }
        }
      }
    };
    extendClass(KJUR2.asn1.DERBitString, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DEROctetString = function(b) {
      if (b !== void 0 && typeof b.obj !== "undefined") {
        var a = KJUR2.asn1.ASN1Util.newObject(b.obj);
        b.hex = a.tohex();
      }
      KJUR2.asn1.DEROctetString.superclass.constructor.call(this, b);
      this.hT = "04";
    };
    extendClass(KJUR2.asn1.DEROctetString, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERNull = function() {
      KJUR2.asn1.DERNull.superclass.constructor.call(this);
      this.hT = "05";
      this.hTLV = "0500";
    };
    extendClass(KJUR2.asn1.DERNull, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERObjectIdentifier = function(a) {
      KJUR2.asn1.DERObjectIdentifier.superclass.constructor.call(this);
      this.hT = "06";
      this.setValueHex = function(b) {
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = b;
      };
      this.setValueOidString = function(b) {
        var c = oidtohex(b);
        if (c == null) {
          throw new Error("malformed oid string: " + b);
        }
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = c;
      };
      this.setValueName = function(c) {
        var b = KJUR2.asn1.x509.OID.name2oid(c);
        if (b !== "") {
          this.setValueOidString(b);
        } else {
          throw new Error("DERObjectIdentifier oidName undefined: " + c);
        }
      };
      this.setValueNameOrOid = function(b) {
        if (b.match(/^[0-2].[0-9.]+$/)) {
          this.setValueOidString(b);
        } else {
          this.setValueName(b);
        }
      };
      this.getFreshValueHex = function() {
        return this.hV;
      };
      this.setByParam = function(b) {
        if (typeof b === "string") {
          this.setValueNameOrOid(b);
        } else {
          if (b.oid !== void 0) {
            this.setValueNameOrOid(b.oid);
          } else {
            if (b.name !== void 0) {
              this.setValueNameOrOid(b.name);
            } else {
              if (b.hex !== void 0) {
                this.setValueHex(b.hex);
              }
            }
          }
        }
      };
      if (a !== void 0) {
        this.setByParam(a);
      }
    };
    extendClass(KJUR2.asn1.DERObjectIdentifier, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DEREnumerated = function(a) {
      KJUR2.asn1.DEREnumerated.superclass.constructor.call(this);
      this.hT = "0a";
      this.setByBigInteger = function(b) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = KJUR2.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b);
      };
      this.setByInteger = function(c) {
        var b = new BigInteger(String(c), 10);
        this.setByBigInteger(b);
      };
      this.setValueHex = function(b) {
        this.hV = b;
      };
      this.getFreshValueHex = function() {
        return this.hV;
      };
      if (typeof a != "undefined") {
        if (typeof a["int"] != "undefined") {
          this.setByInteger(a["int"]);
        } else {
          if (typeof a == "number") {
            this.setByInteger(a);
          } else {
            if (typeof a.hex != "undefined") {
              this.setValueHex(a.hex);
            }
          }
        }
      }
    };
    extendClass(KJUR2.asn1.DEREnumerated, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.DERUTF8String = function(a) {
      KJUR2.asn1.DERUTF8String.superclass.constructor.call(this, a);
      this.hT = "0c";
    };
    extendClass(KJUR2.asn1.DERUTF8String, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERNumericString = function(a) {
      KJUR2.asn1.DERNumericString.superclass.constructor.call(this, a);
      this.hT = "12";
    };
    extendClass(KJUR2.asn1.DERNumericString, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERPrintableString = function(a) {
      KJUR2.asn1.DERPrintableString.superclass.constructor.call(this, a);
      this.hT = "13";
    };
    extendClass(KJUR2.asn1.DERPrintableString, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERTeletexString = function(a) {
      KJUR2.asn1.DERTeletexString.superclass.constructor.call(this, a);
      this.hT = "14";
    };
    extendClass(KJUR2.asn1.DERTeletexString, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERIA5String = function(a) {
      KJUR2.asn1.DERIA5String.superclass.constructor.call(this, a);
      this.hT = "16";
    };
    extendClass(KJUR2.asn1.DERIA5String, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERVisibleString = function(a) {
      KJUR2.asn1.DERIA5String.superclass.constructor.call(this, a);
      this.hT = "1a";
    };
    extendClass(KJUR2.asn1.DERVisibleString, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERBMPString = function(a) {
      KJUR2.asn1.DERBMPString.superclass.constructor.call(this, a);
      this.hT = "1e";
    };
    extendClass(KJUR2.asn1.DERBMPString, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.DERUTCTime = function(a) {
      KJUR2.asn1.DERUTCTime.superclass.constructor.call(this, a);
      this.hT = "17";
      this.params = void 0;
      this.getFreshValueHex = function() {
        var d = this.params;
        if (this.params == void 0) {
          d = { date: new Date() };
        }
        if (typeof d == "string") {
          if (d.match(/^[0-9]{12}Z$/) || d.match(/^[0-9]{12}\.[0-9]+Z$/)) {
            this.hV = stohex(d);
          } else {
            throw new Error("malformed string for UTCTime: " + d);
          }
        } else {
          if (d.str != void 0) {
            this.hV = stohex(d.str);
          } else {
            if (d.date == void 0 && d.millis == true) {
              var c = new Date();
              this.hV = stohex(this.formatDate(c, "utc", true));
            } else {
              if (d.date != void 0 && d.date instanceof Date) {
                var b = d.millis === true;
                this.hV = stohex(this.formatDate(d.date, "utc", b));
              } else {
                if (d instanceof Date) {
                  this.hV = stohex(this.formatDate(d, "utc"));
                }
              }
            }
          }
        }
        if (this.hV == void 0) {
          throw new Error("parameter not specified properly for UTCTime");
        }
        return this.hV;
      };
      if (a != void 0) {
        this.setByParam(a);
      }
    };
    extendClass(KJUR2.asn1.DERUTCTime, KJUR2.asn1.DERAbstractTime);
    KJUR2.asn1.DERGeneralizedTime = function(a) {
      KJUR2.asn1.DERGeneralizedTime.superclass.constructor.call(this, a);
      this.hT = "18";
      this.params = a;
      this.getFreshValueHex = function() {
        var d = this.params;
        if (this.params == void 0) {
          d = { date: new Date() };
        }
        if (typeof d == "string") {
          if (d.match(/^[0-9]{14}Z$/) || d.match(/^[0-9]{14}\.[0-9]+Z$/)) {
            this.hV = stohex(d);
          } else {
            throw new Error("malformed string for GeneralizedTime: " + d);
          }
        } else {
          if (d.str != void 0) {
            this.hV = stohex(d.str);
          } else {
            if (d.date == void 0 && d.millis == true) {
              var c = new Date();
              this.hV = stohex(this.formatDate(c, "gen", true));
            } else {
              if (d.date != void 0 && d.date instanceof Date) {
                var b = d.millis === true;
                this.hV = stohex(this.formatDate(d.date, "gen", b));
              } else {
                if (d instanceof Date) {
                  this.hV = stohex(this.formatDate(d, "gen"));
                }
              }
            }
          }
        }
        if (this.hV == void 0) {
          throw new Error("parameter not specified properly for GeneralizedTime");
        }
        return this.hV;
      };
      if (a != void 0) {
        this.setByParam(a);
      }
    };
    extendClass(KJUR2.asn1.DERGeneralizedTime, KJUR2.asn1.DERAbstractTime);
    KJUR2.asn1.DERSequence = function(a) {
      KJUR2.asn1.DERSequence.superclass.constructor.call(this, a);
      this.hT = "30";
      this.getFreshValueHex = function() {
        var c = "";
        for (var b = 0; b < this.asn1Array.length; b++) {
          var d = this.asn1Array[b];
          c += d.tohex();
        }
        this.hV = c;
        return this.hV;
      };
    };
    extendClass(KJUR2.asn1.DERSequence, KJUR2.asn1.DERAbstractStructured);
    KJUR2.asn1.DERSet = function(a) {
      KJUR2.asn1.DERSet.superclass.constructor.call(this, a);
      this.hT = "31";
      this.sortFlag = true;
      this.getFreshValueHex = function() {
        var b = new Array();
        for (var c = 0; c < this.asn1Array.length; c++) {
          var d = this.asn1Array[c];
          b.push(d.tohex());
        }
        if (this.sortFlag == true) {
          b.sort();
        }
        this.hV = b.join("");
        return this.hV;
      };
      if (typeof a != "undefined") {
        if (typeof a.sortflag != "undefined" && a.sortflag == false) {
          this.sortFlag = false;
        }
      }
    };
    extendClass(KJUR2.asn1.DERSet, KJUR2.asn1.DERAbstractStructured);
    KJUR2.asn1.DERTaggedObject = function(f) {
      KJUR2.asn1.DERTaggedObject.superclass.constructor.call(this);
      var d = KJUR2.asn1, e = ASN1HEX, a = e.getV, c = e.isASN1HEX, b = d.ASN1Util.newObject;
      this.hT = "a0";
      this.hV = "";
      this.isExplicit = true;
      this.asn1Object = null;
      this.params = { tag: "a0", explicit: true };
      this.setASN1Object = function(g, h, i) {
        this.params = { tag: h, explicit: g, obj: i };
      };
      this.getFreshValueHex = function() {
        var h = this.params;
        if (h.explicit == void 0) {
          h.explicit = true;
        }
        if (h.tage != void 0) {
          h.tag = h.tage;
          h.explicit = true;
        }
        if (h.tagi != void 0) {
          h.tag = h.tagi;
          h.explicit = false;
        }
        if (h.str != void 0) {
          this.hV = utf8tohex(h.str);
        } else {
          if (h.hex != void 0) {
            this.hV = h.hex;
          } else {
            if (h.obj != void 0) {
              var g;
              if (h.obj instanceof d.ASN1Object) {
                g = h.obj.tohex();
              } else {
                if (typeof h.obj == "object") {
                  g = b(h.obj).tohex();
                }
              }
              if (h.explicit) {
                this.hV = g;
              } else {
                this.hV = a(g, 0);
              }
            } else {
              throw new Error("str, hex nor obj not specified");
            }
          }
        }
        if (h.tag == void 0) {
          h.tag = "a0";
        }
        this.hT = h.tag;
        this.hTLV = null;
        this.isModified = true;
        return this.hV;
      };
      this.setByParam = function(g) {
        this.params = g;
      };
      if (f !== void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.DERTaggedObject, KJUR2.asn1.ASN1Object);
    var ASN1HEX = new function() {
    }();
    ASN1HEX.getLblen = function(c, a) {
      if (c.substr(a + 2, 1) != "8") {
        return 1;
      }
      var b = parseInt(c.substr(a + 3, 1));
      if (b == 0) {
        return -1;
      }
      if (0 < b && b < 10) {
        return b + 1;
      }
      return -2;
    };
    ASN1HEX.getL = function(c, b) {
      var a = ASN1HEX.getLblen(c, b);
      if (a < 1) {
        return "";
      }
      return c.substr(b + 2, a * 2);
    };
    ASN1HEX.getVblen = function(d, a) {
      var c, b;
      c = ASN1HEX.getL(d, a);
      if (c == "") {
        return -1;
      }
      if (c.substr(0, 1) === "8") {
        b = new BigInteger(c.substr(2), 16);
      } else {
        b = new BigInteger(c, 16);
      }
      return b.intValue();
    };
    ASN1HEX.getVidx = function(c, b) {
      var a = ASN1HEX.getLblen(c, b);
      if (a < 0) {
        return a;
      }
      return b + (a + 1) * 2;
    };
    ASN1HEX.getV = function(d, a) {
      var c = ASN1HEX.getVidx(d, a);
      var b = ASN1HEX.getVblen(d, a);
      return d.substr(c, b * 2);
    };
    ASN1HEX.getTLV = function(b, a) {
      return b.substr(a, 2) + ASN1HEX.getL(b, a) + ASN1HEX.getV(b, a);
    };
    ASN1HEX.getTLVblen = function(b, a) {
      return 2 + ASN1HEX.getLblen(b, a) * 2 + ASN1HEX.getVblen(b, a) * 2;
    };
    ASN1HEX.getNextSiblingIdx = function(d, a) {
      var c = ASN1HEX.getVidx(d, a);
      var b = ASN1HEX.getVblen(d, a);
      return c + b * 2;
    };
    ASN1HEX.getChildIdx = function(e, k) {
      var l = ASN1HEX;
      var j = [];
      var c, f, g;
      c = l.getVidx(e, k);
      f = l.getVblen(e, k) * 2;
      if (e.substr(k, 2) == "03") {
        c += 2;
        f -= 2;
      }
      g = 0;
      var d = c;
      while (g <= f) {
        var b = l.getTLVblen(e, d);
        g += b;
        if (g <= f) {
          j.push(d);
        }
        d += b;
        if (g >= f) {
          break;
        }
      }
      return j;
    };
    ASN1HEX.getNthChildIdx = function(d, b, e) {
      var c = ASN1HEX.getChildIdx(d, b);
      return c[e];
    };
    ASN1HEX.getIdxbyList = function(e, d, c, i) {
      var g = ASN1HEX;
      var f, b;
      if (c.length == 0) {
        if (i !== void 0) {
          if (e.substr(d, 2) !== i) {
            return -1;
          }
        }
        return d;
      }
      f = c.shift();
      b = g.getChildIdx(e, d);
      if (f >= b.length) {
        return -1;
      }
      return g.getIdxbyList(e, b[f], c, i);
    };
    ASN1HEX.getIdxbyListEx = function(f, k, b, g) {
      var m = ASN1HEX;
      var d, l;
      if (b.length == 0) {
        if (g !== void 0) {
          if (f.substr(k, 2) !== g) {
            return -1;
          }
        }
        return k;
      }
      d = b.shift();
      l = m.getChildIdx(f, k);
      var j = 0;
      for (var e = 0; e < l.length; e++) {
        var c = f.substr(l[e], 2);
        if (typeof d == "number" && !m.isContextTag(c) && j == d || typeof d == "string" && m.isContextTag(c, d)) {
          return m.getIdxbyListEx(f, l[e], b, g);
        }
        if (!m.isContextTag(c)) {
          j++;
        }
      }
      return -1;
    };
    ASN1HEX.getTLVbyList = function(d, c, b, f) {
      var e = ASN1HEX;
      var a = e.getIdxbyList(d, c, b, f);
      if (a == -1) {
        return null;
      }
      if (a >= d.length) {
        return null;
      }
      return e.getTLV(d, a);
    };
    ASN1HEX.getTLVbyListEx = function(d, c, b, f) {
      var e = ASN1HEX;
      var a = e.getIdxbyListEx(d, c, b, f);
      if (a == -1) {
        return null;
      }
      return e.getTLV(d, a);
    };
    ASN1HEX.getVbyList = function(e, c, b, g, i) {
      var f = ASN1HEX;
      var a, d;
      a = f.getIdxbyList(e, c, b, g);
      if (a == -1) {
        return null;
      }
      if (a >= e.length) {
        return null;
      }
      d = f.getV(e, a);
      if (i === true) {
        d = d.substr(2);
      }
      return d;
    };
    ASN1HEX.getVbyListEx = function(b, e, a, d, f) {
      var j = ASN1HEX;
      var g, c, i;
      g = j.getIdxbyListEx(b, e, a, d);
      if (g == -1) {
        return null;
      }
      i = j.getV(b, g);
      if (b.substr(g, 2) == "03" && f !== false) {
        i = i.substr(2);
      }
      return i;
    };
    ASN1HEX.getInt = function(e, b, f) {
      if (f == void 0) {
        f = -1;
      }
      try {
        var c = e.substr(b, 2);
        if (c != "02" && c != "03") {
          return f;
        }
        var a = ASN1HEX.getV(e, b);
        if (c == "02") {
          return parseInt(a, 16);
        } else {
          return bitstrtoint(a);
        }
      } catch (d) {
        return f;
      }
    };
    ASN1HEX.getOID = function(c, a, d) {
      if (d == void 0) {
        d = null;
      }
      try {
        if (c.substr(a, 2) != "06") {
          return d;
        }
        var e = ASN1HEX.getV(c, a);
        return hextooid(e);
      } catch (b) {
        return d;
      }
    };
    ASN1HEX.getOIDName = function(d, a, f) {
      if (f == void 0) {
        f = null;
      }
      try {
        var e = ASN1HEX.getOID(d, a, f);
        if (e == f) {
          return f;
        }
        var b = KJUR2.asn1.x509.OID.oid2name(e);
        if (b == "") {
          return e;
        }
        return b;
      } catch (c) {
        return f;
      }
    };
    ASN1HEX.getString = function(d, b, e) {
      if (e == void 0) {
        e = null;
      }
      try {
        var a = ASN1HEX.getV(d, b);
        return hextorstr(a);
      } catch (c) {
        return e;
      }
    };
    ASN1HEX.hextooidstr = function(e) {
      var h = function(b, a) {
        if (b.length >= a) {
          return b;
        }
        return new Array(a - b.length + 1).join("0") + b;
      };
      var l = [];
      var o = e.substr(0, 2);
      var f = parseInt(o, 16);
      l[0] = new String(Math.floor(f / 40));
      l[1] = new String(f % 40);
      var m = e.substr(2);
      var k = [];
      for (var g = 0; g < m.length / 2; g++) {
        k.push(parseInt(m.substr(g * 2, 2), 16));
      }
      var j = [];
      var d = "";
      for (var g = 0; g < k.length; g++) {
        if (k[g] & 128) {
          d = d + h((k[g] & 127).toString(2), 7);
        } else {
          d = d + h((k[g] & 127).toString(2), 7);
          j.push(new String(parseInt(d, 2)));
          d = "";
        }
      }
      var n = l.join(".");
      if (j.length > 0) {
        n = n + "." + j.join(".");
      }
      return n;
    };
    ASN1HEX.dump = function(t2, c, l, g) {
      var p = ASN1HEX;
      var j = p.getV;
      var y = p.dump;
      var w = p.getChildIdx;
      var e = t2;
      if (t2 instanceof KJUR2.asn1.ASN1Object) {
        e = t2.tohex();
      }
      var q = function(A, i) {
        if (A.length <= i * 2) {
          return A;
        } else {
          var v = A.substr(0, i) + "..(total " + A.length / 2 + "bytes).." + A.substr(A.length - i, i);
          return v;
        }
      };
      if (c === void 0) {
        c = { ommit_long_octet: 32 };
      }
      if (l === void 0) {
        l = 0;
      }
      if (g === void 0) {
        g = "";
      }
      var x = c.ommit_long_octet;
      var z2 = e.substr(l, 2);
      if (z2 == "01") {
        var h = j(e, l);
        if (h == "00") {
          return g + "BOOLEAN FALSE\n";
        } else {
          return g + "BOOLEAN TRUE\n";
        }
      }
      if (z2 == "02") {
        var h = j(e, l);
        return g + "INTEGER " + q(h, x) + "\n";
      }
      if (z2 == "03") {
        var h = j(e, l);
        if (p.isASN1HEX(h.substr(2))) {
          var k = g + "BITSTRING, encapsulates\n";
          k = k + y(h.substr(2), c, 0, g + "  ");
          return k;
        } else {
          return g + "BITSTRING " + q(h, x) + "\n";
        }
      }
      if (z2 == "04") {
        var h = j(e, l);
        if (p.isASN1HEX(h)) {
          var k = g + "OCTETSTRING, encapsulates\n";
          k = k + y(h, c, 0, g + "  ");
          return k;
        } else {
          return g + "OCTETSTRING " + q(h, x) + "\n";
        }
      }
      if (z2 == "05") {
        return g + "NULL\n";
      }
      if (z2 == "06") {
        var m = j(e, l);
        var b = KJUR2.asn1.ASN1Util.oidHexToInt(m);
        var o = KJUR2.asn1.x509.OID.oid2name(b);
        var a = b.replace(/\./g, " ");
        if (o != "") {
          return g + "ObjectIdentifier " + o + " (" + a + ")\n";
        } else {
          return g + "ObjectIdentifier (" + a + ")\n";
        }
      }
      if (z2 == "0a") {
        return g + "ENUMERATED " + parseInt(j(e, l)) + "\n";
      }
      if (z2 == "0c") {
        return g + "UTF8String '" + hextoutf8(j(e, l)) + "'\n";
      }
      if (z2 == "13") {
        return g + "PrintableString '" + hextoutf8(j(e, l)) + "'\n";
      }
      if (z2 == "14") {
        return g + "TeletexString '" + hextoutf8(j(e, l)) + "'\n";
      }
      if (z2 == "16") {
        return g + "IA5String '" + hextoutf8(j(e, l)) + "'\n";
      }
      if (z2 == "17") {
        return g + "UTCTime " + hextoutf8(j(e, l)) + "\n";
      }
      if (z2 == "18") {
        return g + "GeneralizedTime " + hextoutf8(j(e, l)) + "\n";
      }
      if (z2 == "1a") {
        return g + "VisualString '" + hextoutf8(j(e, l)) + "'\n";
      }
      if (z2 == "1e") {
        return g + "BMPString '" + ucs2hextoutf8(j(e, l)) + "'\n";
      }
      if (z2 == "30") {
        if (e.substr(l, 4) == "3000") {
          return g + "SEQUENCE {}\n";
        }
        var k = g + "SEQUENCE\n";
        var d = w(e, l);
        var f = c;
        if ((d.length == 2 || d.length == 3) && e.substr(d[0], 2) == "06" && e.substr(d[d.length - 1], 2) == "04") {
          var o = p.oidname(j(e, d[0]));
          var r = JSON.parse(JSON.stringify(c));
          r.x509ExtName = o;
          f = r;
        }
        for (var u = 0; u < d.length; u++) {
          k = k + y(e, f, d[u], g + "  ");
        }
        return k;
      }
      if (z2 == "31") {
        var k = g + "SET\n";
        var d = w(e, l);
        for (var u = 0; u < d.length; u++) {
          k = k + y(e, c, d[u], g + "  ");
        }
        return k;
      }
      var z2 = parseInt(z2, 16);
      if ((z2 & 128) != 0) {
        var n = z2 & 31;
        if ((z2 & 32) != 0) {
          var k = g + "[" + n + "]\n";
          var d = w(e, l);
          for (var u = 0; u < d.length; u++) {
            k = k + y(e, c, d[u], g + "  ");
          }
          return k;
        } else {
          var h = j(e, l);
          if (ASN1HEX.isASN1HEX(h)) {
            var k = g + "[" + n + "]\n";
            k = k + y(h, c, 0, g + "  ");
            return k;
          } else {
            if (h.substr(0, 8) == "68747470") {
              h = hextoutf8(h);
            } else {
              if (c.x509ExtName === "subjectAltName" && n == 2) {
                h = hextoutf8(h);
              }
            }
          }
          var k = g + "[" + n + "] " + h + "\n";
          return k;
        }
      }
      return g + "UNKNOWN(" + z2 + ") " + j(e, l) + "\n";
    };
    ASN1HEX.parse = function(x) {
      var t2 = ASN1HEX, f = t2.parse, a = t2.isASN1HEX, l = t2.getV, b = t2.getTLV, y = t2.getChildIdx, i = KJUR2.asn1, e = i.ASN1Util.oidHexToInt, B = i.x509.OID.oid2name, k = hextoutf8, n = ucs2hextoutf8, q = iso88591hextoutf8;
      var c = { "0c": "utf8str", "12": "numstr", "13": "prnstr", "14": "telstr", "16": "ia5str", "17": "utctime", "18": "gentime", "1a": "visstr", "1e": "bmpstr", "30": "seq", "31": "set" };
      var u = function(H) {
        var D = [];
        var E = y(H, 0);
        for (var G = 0; G < E.length; G++) {
          var s = E[G];
          var d = b(H, s);
          var F = f(d);
          D.push(F);
        }
        return D;
      };
      var C = x.substr(0, 2);
      var j = {};
      var p = l(x, 0);
      if (C == "01") {
        if (x == "0101ff") {
          return { bool: true };
        }
        return { bool: false };
      } else {
        if (C == "02") {
          return { "int": { hex: p } };
        } else {
          if (C == "03") {
            try {
              if (p.substr(0, 2) != "00") {
                throw "not encap";
              }
              var v = p.substr(2);
              if (!a(v)) {
                throw "not encap";
              }
              return { bitstr: { obj: f(v) } };
            } catch (z2) {
              var m = null;
              if (p.length <= 6) {
                m = bitstrtobinstr(p);
              }
              if (m == null) {
                return { bitstr: { hex: p } };
              } else {
                return { bitstr: { bin: m } };
              }
            }
          } else {
            if (C == "04") {
              try {
                if (!a(p)) {
                  throw "not encap";
                }
                return { octstr: { obj: f(p) } };
              } catch (z2) {
                return { octstr: { hex: p } };
              }
            } else {
              if (C == "05") {
                return { "null": "" };
              } else {
                if (C == "06") {
                  var g = e(p);
                  var r = B(g);
                  if (r == "") {
                    return { oid: g };
                  } else {
                    return { oid: r };
                  }
                } else {
                  if (C == "0a") {
                    if (p.length > 4) {
                      return { "enum": { hex: p } };
                    } else {
                      return { "enum": parseInt(p, 16) };
                    }
                  } else {
                    if (C == "30" || C == "31") {
                      j[c[C]] = u(x);
                      return j;
                    } else {
                      if (C == "14") {
                        var o = q(p);
                        j[c[C]] = { str: o };
                        return j;
                      } else {
                        if (C == "1e") {
                          var o = n(p);
                          j[c[C]] = { str: o };
                          return j;
                        } else {
                          if (":0c:12:13:16:17:18:1a:".indexOf(C) != -1) {
                            var o = k(p);
                            j[c[C]] = { str: o };
                            return j;
                          } else {
                            if (C.match(/^8[0-9]$/)) {
                              var o = k(p);
                              if (o == null | o == "") {
                                return { tag: { tag: C, explicit: false, hex: p } };
                              } else {
                                if (o.match(/[\x00-\x1F\x7F-\x9F]/) != null || o.match(/[\u0000-\u001F\u0080–\u009F]/) != null) {
                                  return { tag: { tag: C, explicit: false, hex: p } };
                                } else {
                                  return { tag: { tag: C, explicit: false, str: o } };
                                }
                              }
                            } else {
                              if (C.match(/^a[0-9]$/)) {
                                try {
                                  if (!a(p)) {
                                    throw new Error("not encap");
                                  }
                                  return { tag: { tag: C, explicit: true, obj: f(p) } };
                                } catch (z2) {
                                  return { tag: { tag: C, explicit: true, hex: p } };
                                }
                              } else {
                                var A = new KJUR2.asn1.ASN1Object();
                                A.hV = p;
                                var w = A.getLengthHexFromValue();
                                return { asn1: { tlv: C + w + p } };
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    ASN1HEX.isContextTag = function(c, b) {
      c = c.toLowerCase();
      var f, e;
      try {
        f = parseInt(c, 16);
      } catch (d) {
        return -1;
      }
      if (b === void 0) {
        if ((f & 192) == 128) {
          return true;
        } else {
          return false;
        }
      }
      try {
        var a = b.match(/^\[[0-9]+\]$/);
        if (a == null) {
          return false;
        }
        e = parseInt(b.substr(1, b.length - 1), 10);
        if (e > 31) {
          return false;
        }
        if ((f & 192) == 128 && (f & 31) == e) {
          return true;
        }
        return false;
      } catch (d) {
        return false;
      }
    };
    ASN1HEX.isASN1HEX = function(e) {
      var d = ASN1HEX;
      if (e.length % 2 == 1) {
        return false;
      }
      var c = d.getVblen(e, 0);
      var b = e.substr(0, 2);
      var f = d.getL(e, 0);
      var a = e.length - b.length - f.length;
      if (a == c * 2) {
        return true;
      }
      return false;
    };
    ASN1HEX.checkStrictDER = function(g, o, d, c, r) {
      var s = ASN1HEX;
      if (d === void 0) {
        if (typeof g != "string") {
          throw new Error("not hex string");
        }
        g = g.toLowerCase();
        if (!KJUR2.lang.String.isHex(g)) {
          throw new Error("not hex string");
        }
        d = g.length;
        c = g.length / 2;
        if (c < 128) {
          r = 1;
        } else {
          r = Math.ceil(c.toString(16)) + 1;
        }
      }
      var k = s.getL(g, o);
      if (k.length > r * 2) {
        throw new Error("L of TLV too long: idx=" + o);
      }
      var n = s.getVblen(g, o);
      if (n > c) {
        throw new Error("value of L too long than hex: idx=" + o);
      }
      var q = s.getTLV(g, o);
      var f = q.length - 2 - s.getL(g, o).length;
      if (f !== n * 2) {
        throw new Error("V string length and L's value not the same:" + f + "/" + n * 2);
      }
      if (o === 0) {
        if (g.length != q.length) {
          throw new Error("total length and TLV length unmatch:" + g.length + "!=" + q.length);
        }
      }
      var b = g.substr(o, 2);
      if (b === "02") {
        var a = s.getVidx(g, o);
        if (g.substr(a, 2) == "00" && g.charCodeAt(a + 2) < 56) {
          throw new Error("not least zeros for DER INTEGER");
        }
      }
      if (parseInt(b, 16) & 32) {
        var p = s.getVblen(g, o);
        var m = 0;
        var l = s.getChildIdx(g, o);
        for (var e = 0; e < l.length; e++) {
          var j = s.getTLV(g, l[e]);
          m += j.length;
          s.checkStrictDER(g, l[e], d, c, r);
        }
        if (p * 2 != m) {
          throw new Error("sum of children's TLV length and L unmatch: " + p * 2 + "!=" + m);
        }
      }
    };
    ASN1HEX.oidname = function(a) {
      var c = KJUR2.asn1;
      if (KJUR2.lang.String.isHex(a)) {
        a = c.ASN1Util.oidHexToInt(a);
      }
      var b = c.x509.OID.oid2name(a);
      if (b === "") {
        b = a;
      }
      return b;
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.asn1 == "undefined" || !KJUR2.asn1) {
      KJUR2.asn1 = {};
    }
    if (typeof KJUR2.asn1.x509 == "undefined" || !KJUR2.asn1.x509) {
      KJUR2.asn1.x509 = {};
    }
    KJUR2.asn1.x509.Certificate = function(h) {
      KJUR2.asn1.x509.Certificate.superclass.constructor.call(this);
      var d = KJUR2, c = d.asn1, f = c.DERBitString, b = c.DERSequence, g = c.x509, a = g.TBSCertificate, e = g.AlgorithmIdentifier;
      this.params = void 0;
      this.setByParam = function(i) {
        this.params = i;
      };
      this.sign = function() {
        var l = this.params;
        var k = l.sigalg;
        if (l.sigalg.name != void 0) {
          k = l.sigalg.name;
        }
        var i = l.tbsobj.tohex();
        var j = new KJUR2.crypto.Signature({ alg: k });
        j.init(l.cakey);
        j.updateHex(i);
        l.sighex = j.sign();
      };
      this.getPEM = function() {
        return hextopem(this.tohex(), "CERTIFICATE");
      };
      this.tohex = function() {
        var k = this.params;
        if (k.tbsobj == void 0 || k.tbsobj == null) {
          k.tbsobj = new a(k);
        }
        if (k.sighex == void 0 && k.cakey != void 0) {
          this.sign();
        }
        if (k.sighex == void 0) {
          throw new Error("sighex or cakey parameter not defined");
        }
        var i = [];
        i.push(k.tbsobj);
        i.push(new e({ name: k.sigalg }));
        i.push(new f({ hex: "00" + k.sighex }));
        var j = new b({ array: i });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (h != void 0) {
        this.params = h;
      }
    };
    extendClass(KJUR2.asn1.x509.Certificate, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.TBSCertificate = function(f) {
      KJUR2.asn1.x509.TBSCertificate.superclass.constructor.call(this);
      var b = KJUR2, i = b.asn1, d = i.x509, c = i.DERTaggedObject, h = i.DERInteger, g = i.DERSequence, l = d.AlgorithmIdentifier, e = d.Time, a = d.X500Name, j = d.Extensions, k = d.SubjectPublicKeyInfo;
      this.params = null;
      this.setByParam = function(m) {
        this.params = m;
      };
      this.tohex = function() {
        var n = [];
        var q = this.params;
        if (q.version != void 0 || q.version != 1) {
          var m = 2;
          if (q.version != void 0) {
            m = q.version - 1;
          }
          var p = new c({ obj: new h({ "int": m }) });
          n.push(p);
        }
        n.push(new h(q.serial));
        n.push(new l({ name: q.sigalg }));
        n.push(new a(q.issuer));
        n.push(new g({ array: [new e(q.notbefore), new e(q.notafter)] }));
        n.push(new a(q.subject));
        n.push(new k(KEYUTIL.getKey(q.sbjpubkey)));
        if (q.ext !== void 0 && q.ext.length > 0) {
          n.push(new c({ tag: "a3", obj: new j(q.ext) }));
        }
        var o = new KJUR2.asn1.DERSequence({ array: n });
        return o.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f !== void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.x509.TBSCertificate, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.Extensions = function(d) {
      KJUR2.asn1.x509.Extensions.superclass.constructor.call(this);
      var c = KJUR2, b = c.asn1, a = b.DERSequence, e = b.x509;
      this.aParam = [];
      this.setByParam = function(f) {
        this.aParam = f;
      };
      this.tohex = function() {
        var f = [];
        for (var h = 0; h < this.aParam.length; h++) {
          var l = this.aParam[h];
          var k = l.extname;
          var j = null;
          if (l.extn != void 0) {
            j = new e.PrivateExtension(l);
          } else {
            if (k == "subjectKeyIdentifier") {
              j = new e.SubjectKeyIdentifier(l);
            } else {
              if (k == "keyUsage") {
                j = new e.KeyUsage(l);
              } else {
                if (k == "subjectAltName") {
                  j = new e.SubjectAltName(l);
                } else {
                  if (k == "issuerAltName") {
                    j = new e.IssuerAltName(l);
                  } else {
                    if (k == "basicConstraints") {
                      j = new e.BasicConstraints(l);
                    } else {
                      if (k == "nameConstraints") {
                        j = new e.NameConstraints(l);
                      } else {
                        if (k == "cRLDistributionPoints") {
                          j = new e.CRLDistributionPoints(l);
                        } else {
                          if (k == "certificatePolicies") {
                            j = new e.CertificatePolicies(l);
                          } else {
                            if (k == "authorityKeyIdentifier") {
                              j = new e.AuthorityKeyIdentifier(l);
                            } else {
                              if (k == "extKeyUsage") {
                                j = new e.ExtKeyUsage(l);
                              } else {
                                if (k == "authorityInfoAccess") {
                                  j = new e.AuthorityInfoAccess(l);
                                } else {
                                  if (k == "cRLNumber") {
                                    j = new e.CRLNumber(l);
                                  } else {
                                    if (k == "cRLReason") {
                                      j = new e.CRLReason(l);
                                    } else {
                                      if (k == "ocspNonce") {
                                        j = new e.OCSPNonce(l);
                                      } else {
                                        if (k == "ocspNoCheck") {
                                          j = new e.OCSPNoCheck(l);
                                        } else {
                                          if (k == "adobeTimeStamp") {
                                            j = new e.AdobeTimeStamp(l);
                                          } else {
                                            if (k == "subjectDirectoryAttributes") {
                                              j = new e.SubjectDirectoryAttributes(l);
                                            } else {
                                              throw new Error("extension not supported:" + JSON.stringify(l));
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (j != null) {
            f.push(j);
          }
        }
        var g = new a({ array: f });
        return g.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (d != void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.x509.Extensions, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.Extension = function(d) {
      KJUR2.asn1.x509.Extension.superclass.constructor.call(this);
      var f = null, a = KJUR2, e = a.asn1, h = e.DERObjectIdentifier, i = e.DEROctetString, b = e.DERBitString, g = e.DERBoolean, c = e.DERSequence;
      this.tohex = function() {
        var m = new h({ oid: this.oid });
        var l = new i({ hex: this.getExtnValueHex() });
        var k = new Array();
        k.push(m);
        if (this.critical) {
          k.push(new g());
        }
        k.push(l);
        var j = new c({ array: k });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.critical = false;
      if (d !== void 0) {
        if (d.critical !== void 0) {
          this.critical = d.critical;
        }
      }
    };
    extendClass(KJUR2.asn1.x509.Extension, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.KeyUsage = function(f) {
      KJUR2.asn1.x509.KeyUsage.superclass.constructor.call(this, f);
      var a = X509.KEYUSAGE_NAME;
      this.getExtnValueHex = function() {
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.15";
      if (f !== void 0) {
        if (f.bin !== void 0) {
          this.asn1ExtnValue = new KJUR2.asn1.DERBitString(f);
        }
        if (f.names !== void 0 && f.names.length !== void 0) {
          var e = f.names;
          var d = "000000000";
          for (var c = 0; c < e.length; c++) {
            for (var b = 0; b < a.length; b++) {
              if (e[c] === a[b]) {
                d = d.substring(0, b) + "1" + d.substring(b + 1, d.length);
              }
            }
          }
          this.asn1ExtnValue = new KJUR2.asn1.DERBitString({ bin: d });
        }
      }
    };
    extendClass(KJUR2.asn1.x509.KeyUsage, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.BasicConstraints = function(g) {
      KJUR2.asn1.x509.BasicConstraints.superclass.constructor.call(this, g);
      var c = KJUR2.asn1, e = c.DERBoolean, f = c.DERInteger, b = c.DERSequence;
      var a = false;
      var d = -1;
      this.getExtnValueHex = function() {
        var i = new Array();
        if (this.cA) {
          i.push(new e());
        }
        if (this.pathLen > -1) {
          i.push(new f({ "int": this.pathLen }));
        }
        var h = new b({ array: i });
        this.asn1ExtnValue = h;
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.19";
      this.cA = false;
      this.pathLen = -1;
      if (g !== void 0) {
        if (g.cA !== void 0) {
          this.cA = g.cA;
        }
        if (g.pathLen !== void 0) {
          this.pathLen = g.pathLen;
        }
      }
    };
    extendClass(KJUR2.asn1.x509.BasicConstraints, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.CRLDistributionPoints = function(d) {
      KJUR2.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, d);
      var b = KJUR2, a = b.asn1, c = a.x509;
      this.getExtnValueHex = function() {
        return this.asn1ExtnValue.tohex();
      };
      this.setByDPArray = function(e) {
        var f = [];
        for (var g = 0; g < e.length; g++) {
          if (e[g] instanceof KJUR2.asn1.ASN1Object) {
            f.push(e[g]);
          } else {
            var h = new c.DistributionPoint(e[g]);
            f.push(h);
          }
        }
        this.asn1ExtnValue = new a.DERSequence({ array: f });
      };
      this.setByOneURI = function(f) {
        var e = new c.DistributionPoint({ fulluri: f });
        this.setByDPArray([e]);
      };
      this.oid = "2.5.29.31";
      if (d !== void 0) {
        if (d.array !== void 0) {
          this.setByDPArray(d.array);
        } else {
          if (d.uri !== void 0) {
            this.setByOneURI(d.uri);
          }
        }
      }
    };
    extendClass(KJUR2.asn1.x509.CRLDistributionPoints, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.DistributionPoint = function(e) {
      KJUR2.asn1.x509.DistributionPoint.superclass.constructor.call(this);
      var a = null, c = KJUR2, b = c.asn1, d = b.x509.DistributionPointName;
      this.tohex = function() {
        var f = new b.DERSequence();
        if (this.asn1DP != null) {
          var g = new b.DERTaggedObject({ explicit: true, tag: "a0", obj: this.asn1DP });
          f.appendASN1Object(g);
        }
        this.hTLV = f.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        if (e.dpobj !== void 0) {
          this.asn1DP = e.dpobj;
        } else {
          if (e.dpname !== void 0) {
            this.asn1DP = new d(e.dpname);
          } else {
            if (e.fulluri !== void 0) {
              this.asn1DP = new d({ full: [{ uri: e.fulluri }] });
            }
          }
        }
      }
    };
    extendClass(KJUR2.asn1.x509.DistributionPoint, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.DistributionPointName = function(h) {
      KJUR2.asn1.x509.DistributionPointName.superclass.constructor.call(this);
      var g = null, d = null, a = null, f = null, c = KJUR2, b = c.asn1, e = b.DERTaggedObject;
      this.tohex = function() {
        if (this.type != "full") {
          throw new Error("currently type shall be 'full': " + this.type);
        }
        this.asn1Obj = new e({ explicit: false, tag: this.tag, obj: this.asn1V });
        this.hTLV = this.asn1Obj.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (h !== void 0) {
        if (b.x509.GeneralNames.prototype.isPrototypeOf(h)) {
          this.type = "full";
          this.tag = "a0";
          this.asn1V = h;
        } else {
          if (h.full !== void 0) {
            this.type = "full";
            this.tag = "a0";
            this.asn1V = new b.x509.GeneralNames(h.full);
          } else {
            throw new Error("This class supports GeneralNames only as argument");
          }
        }
      }
    };
    extendClass(KJUR2.asn1.x509.DistributionPointName, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.CertificatePolicies = function(f) {
      KJUR2.asn1.x509.CertificatePolicies.superclass.constructor.call(this, f);
      var c = KJUR2, b = c.asn1, e = b.x509, a = b.DERSequence, d = e.PolicyInformation;
      this.params = null;
      this.getExtnValueHex = function() {
        var j = [];
        for (var h = 0; h < this.params.array.length; h++) {
          j.push(new d(this.params.array[h]));
        }
        var g = new a({ array: j });
        this.asn1ExtnValue = g;
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.32";
      if (f !== void 0) {
        this.params = f;
      }
    };
    extendClass(KJUR2.asn1.x509.CertificatePolicies, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.PolicyInformation = function(d) {
      KJUR2.asn1.x509.PolicyInformation.superclass.constructor.call(this, d);
      var c = KJUR2.asn1, b = c.DERSequence, e = c.DERObjectIdentifier, a = c.x509.PolicyQualifierInfo;
      this.params = null;
      this.tohex = function() {
        if (this.params.policyoid === void 0 && this.params.array === void 0) {
          throw new Error("parameter oid and array missing");
        }
        var f = [new e(this.params.policyoid)];
        if (this.params.array !== void 0) {
          var j = [];
          for (var h = 0; h < this.params.array.length; h++) {
            j.push(new a(this.params.array[h]));
          }
          if (j.length > 0) {
            f.push(new b({ array: j }));
          }
        }
        var g = new b({ array: f });
        return g.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (d !== void 0) {
        this.params = d;
      }
    };
    extendClass(KJUR2.asn1.x509.PolicyInformation, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.PolicyQualifierInfo = function(e) {
      KJUR2.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, e);
      var c = KJUR2.asn1, b = c.DERSequence, d = c.DERIA5String, f = c.DERObjectIdentifier, a = c.x509.UserNotice;
      this.params = null;
      this.tohex = function() {
        if (this.params.cps !== void 0) {
          var g = new b({ array: [new f({ oid: "1.3.6.1.5.5.7.2.1" }), new d({ str: this.params.cps })] });
          return g.tohex();
        }
        if (this.params.unotice != void 0) {
          var g = new b({ array: [new f({ oid: "1.3.6.1.5.5.7.2.2" }), new a(this.params.unotice)] });
          return g.tohex();
        }
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        this.params = e;
      }
    };
    extendClass(KJUR2.asn1.x509.PolicyQualifierInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.UserNotice = function(e) {
      KJUR2.asn1.x509.UserNotice.superclass.constructor.call(this, e);
      var a = KJUR2.asn1.DERSequence, d = KJUR2.asn1.DERInteger, c = KJUR2.asn1.x509.DisplayText, b = KJUR2.asn1.x509.NoticeReference;
      this.params = null;
      this.tohex = function() {
        var f = [];
        if (this.params.noticeref !== void 0) {
          f.push(new b(this.params.noticeref));
        }
        if (this.params.exptext !== void 0) {
          f.push(new c(this.params.exptext));
        }
        var g = new a({ array: f });
        return g.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        this.params = e;
      }
    };
    extendClass(KJUR2.asn1.x509.UserNotice, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.NoticeReference = function(d) {
      KJUR2.asn1.x509.NoticeReference.superclass.constructor.call(this, d);
      var a = KJUR2.asn1.DERSequence, c = KJUR2.asn1.DERInteger, b = KJUR2.asn1.x509.DisplayText;
      this.params = null;
      this.tohex = function() {
        var f = [];
        if (this.params.org !== void 0) {
          f.push(new b(this.params.org));
        }
        if (this.params.noticenum !== void 0) {
          var h = [];
          var e = this.params.noticenum;
          for (var j = 0; j < e.length; j++) {
            h.push(new c(e[j]));
          }
          f.push(new a({ array: h }));
        }
        if (f.length == 0) {
          throw new Error("parameter is empty");
        }
        var g = new a({ array: f });
        return g.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (d !== void 0) {
        this.params = d;
      }
    };
    extendClass(KJUR2.asn1.x509.NoticeReference, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.DisplayText = function(a) {
      KJUR2.asn1.x509.DisplayText.superclass.constructor.call(this, a);
      this.hT = "0c";
      if (a !== void 0) {
        if (a.type === "ia5") {
          this.hT = "16";
        } else {
          if (a.type === "vis") {
            this.hT = "1a";
          } else {
            if (a.type === "bmp") {
              this.hT = "1e";
            }
          }
        }
      }
    };
    extendClass(KJUR2.asn1.x509.DisplayText, KJUR2.asn1.DERAbstractString);
    KJUR2.asn1.x509.NameConstraints = function(f) {
      KJUR2.asn1.x509.NameConstraints.superclass.constructor.call(this, f);
      var c = KJUR2, b = c.asn1, e = b.x509, a = b.ASN1Util.newObject, d = e.GeneralSubtree;
      this.params = null;
      this.getExtnValueHex = function() {
        var l = this.params;
        var g = [];
        if (l.permit != void 0 && l.permit.length != void 0) {
          var k = [];
          for (var h = 0; h < l.permit.length; h++) {
            k.push(new d(l.permit[h]));
          }
          g.push({ tag: { tagi: "a0", obj: { seq: k } } });
        }
        if (l.exclude != void 0 && l.exclude.length != void 0) {
          var j = [];
          for (var h = 0; h < l.exclude.length; h++) {
            j.push(new d(l.exclude[h]));
          }
          g.push({ tag: { tagi: "a1", obj: { seq: j } } });
        }
        this.asn1ExtnValue = a({ seq: g });
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.30";
      if (f !== void 0) {
        this.params = f;
      }
    };
    extendClass(KJUR2.asn1.x509.NameConstraints, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.GeneralSubtree = function(e) {
      KJUR2.asn1.x509.GeneralSubtree.superclass.constructor.call(this);
      var b = KJUR2.asn1, d = b.x509, c = d.GeneralName, a = b.ASN1Util.newObject;
      this.params = null;
      this.setByParam = function(f) {
        this.params = f;
      };
      this.tohex = function() {
        var h = this.params;
        var f = [new c(h)];
        if (h.min != void 0) {
          f.push({ tag: { tagi: "80", obj: { "int": h.min } } });
        }
        if (h.max != void 0) {
          f.push({ tag: { tagi: "81", obj: { "int": h.max } } });
        }
        var g = a({ seq: f });
        return g.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.x509.GeneralSubtree, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.ExtKeyUsage = function(c) {
      KJUR2.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, c);
      var b = KJUR2, a = b.asn1;
      this.setPurposeArray = function(d) {
        this.asn1ExtnValue = new a.DERSequence();
        for (var e = 0; e < d.length; e++) {
          var f = new a.DERObjectIdentifier(d[e]);
          this.asn1ExtnValue.appendASN1Object(f);
        }
      };
      this.getExtnValueHex = function() {
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.37";
      if (c !== void 0) {
        if (c.array !== void 0) {
          this.setPurposeArray(c.array);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.ExtKeyUsage, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.AuthorityKeyIdentifier = function(f) {
      KJUR2.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, f);
      var b = KJUR2, a = b.asn1, d = a.DERTaggedObject, e = a.x509.GeneralNames, c = b.crypto.Util.isKey;
      this.asn1KID = null;
      this.asn1CertIssuer = null;
      this.asn1CertSN = null;
      this.getExtnValueHex = function() {
        var h = new Array();
        if (this.asn1KID) {
          h.push(new d({ explicit: false, tag: "80", obj: this.asn1KID }));
        }
        if (this.asn1CertIssuer) {
          h.push(new d({ explicit: false, tag: "a1", obj: new e([{ dn: this.asn1CertIssuer }]) }));
        }
        if (this.asn1CertSN) {
          h.push(new d({ explicit: false, tag: "82", obj: this.asn1CertSN }));
        }
        var g = new a.DERSequence({ array: h });
        this.asn1ExtnValue = g;
        return this.asn1ExtnValue.tohex();
      };
      this.setKIDByParam = function(i) {
        if (i.str !== void 0 || i.hex !== void 0) {
          this.asn1KID = new KJUR2.asn1.DEROctetString(i);
        } else {
          if (typeof i === "object" && KJUR2.crypto.Util.isKey(i) || typeof i === "string" && i.indexOf("BEGIN ") != -1) {
            var h = i;
            if (typeof i === "string") {
              h = KEYUTIL.getKey(i);
            }
            var g = KEYUTIL.getKeyID(h);
            this.asn1KID = new KJUR2.asn1.DEROctetString({ hex: g });
          }
        }
      };
      this.setCertIssuerByParam = function(g) {
        if (g.str !== void 0 || g.ldapstr !== void 0 || g.hex !== void 0 || g.certsubject !== void 0 || g.certissuer !== void 0) {
          this.asn1CertIssuer = new KJUR2.asn1.x509.X500Name(g);
        } else {
          if (typeof g === "string" && g.indexOf("BEGIN ") != -1 && g.indexOf("CERTIFICATE") != -1) {
            this.asn1CertIssuer = new KJUR2.asn1.x509.X500Name({ certissuer: g });
          }
        }
      };
      this.setCertSNByParam = function(i) {
        if (i.str !== void 0 || i.bigint !== void 0 || i.hex !== void 0) {
          this.asn1CertSN = new KJUR2.asn1.DERInteger(i);
        } else {
          if (typeof i === "string" && i.indexOf("BEGIN ") != -1 && i.indexOf("CERTIFICATE")) {
            var g = new X509();
            g.readCertPEM(i);
            var h = g.getSerialNumberHex();
            this.asn1CertSN = new KJUR2.asn1.DERInteger({ hex: h });
          }
        }
      };
      this.oid = "2.5.29.35";
      if (f !== void 0) {
        if (f.kid !== void 0) {
          this.setKIDByParam(f.kid);
        }
        if (f.issuer !== void 0) {
          this.setCertIssuerByParam(f.issuer);
        }
        if (f.sn !== void 0) {
          this.setCertSNByParam(f.sn);
        }
        if (f.issuersn !== void 0 && typeof f.issuersn === "string" && f.issuersn.indexOf("BEGIN ") != -1 && f.issuersn.indexOf("CERTIFICATE")) {
          this.setCertSNByParam(f.issuersn);
          this.setCertIssuerByParam(f.issuersn);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.AuthorityKeyIdentifier, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.SubjectKeyIdentifier = function(d) {
      KJUR2.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, d);
      var b = KJUR2, a = b.asn1, c = a.DEROctetString;
      this.asn1KID = null;
      this.getExtnValueHex = function() {
        this.asn1ExtnValue = this.asn1KID;
        return this.asn1ExtnValue.tohex();
      };
      this.setKIDByParam = function(g) {
        if (g.str !== void 0 || g.hex !== void 0) {
          this.asn1KID = new c(g);
        } else {
          if (typeof g === "object" && KJUR2.crypto.Util.isKey(g) || typeof g === "string" && g.indexOf("BEGIN") != -1) {
            var f = g;
            if (typeof g === "string") {
              f = KEYUTIL.getKey(g);
            }
            var e = KEYUTIL.getKeyID(f);
            this.asn1KID = new KJUR2.asn1.DEROctetString({ hex: e });
          }
        }
      };
      this.oid = "2.5.29.14";
      if (d !== void 0) {
        if (d.kid !== void 0) {
          this.setKIDByParam(d.kid);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.SubjectKeyIdentifier, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.AuthorityInfoAccess = function(a) {
      KJUR2.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, a);
      this.setAccessDescriptionArray = function(k) {
        var d = new Array(), b = KJUR2, g = b.asn1, c = g.DERSequence, j = g.DERObjectIdentifier, l = g.x509.GeneralName;
        for (var f = 0; f < k.length; f++) {
          var e;
          var h = k[f];
          if (h.ocsp !== void 0) {
            e = new c({ array: [new j({ oid: "1.3.6.1.5.5.7.48.1" }), new l({ uri: h.ocsp })] });
          } else {
            if (h.caissuer !== void 0) {
              e = new c({ array: [new j({ oid: "1.3.6.1.5.5.7.48.2" }), new l({ uri: h.caissuer })] });
            } else {
              throw new Error("unknown AccessMethod parameter: " + JSON.stringify(h));
            }
          }
          d.push(e);
        }
        this.asn1ExtnValue = new c({ array: d });
      };
      this.getExtnValueHex = function() {
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "1.3.6.1.5.5.7.1.1";
      if (a !== void 0) {
        if (a.array !== void 0) {
          this.setAccessDescriptionArray(a.array);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.AuthorityInfoAccess, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.SubjectAltName = function(a) {
      KJUR2.asn1.x509.SubjectAltName.superclass.constructor.call(this, a);
      this.setNameArray = function(b) {
        this.asn1ExtnValue = new KJUR2.asn1.x509.GeneralNames(b);
      };
      this.getExtnValueHex = function() {
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.17";
      if (a !== void 0) {
        if (a.array !== void 0) {
          this.setNameArray(a.array);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.SubjectAltName, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.IssuerAltName = function(a) {
      KJUR2.asn1.x509.IssuerAltName.superclass.constructor.call(this, a);
      this.setNameArray = function(b) {
        this.asn1ExtnValue = new KJUR2.asn1.x509.GeneralNames(b);
      };
      this.getExtnValueHex = function() {
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.18";
      if (a !== void 0) {
        if (a.array !== void 0) {
          this.setNameArray(a.array);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.IssuerAltName, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.SubjectDirectoryAttributes = function(e) {
      KJUR2.asn1.x509.SubjectDirectoryAttributes.superclass.constructor.call(this, e);
      var c = KJUR2.asn1, a = c.DERSequence, b = c.ASN1Util.newObject, d = c.x509.OID.name2oid;
      this.params = null;
      this.getExtnValueHex = function() {
        var f = [];
        for (var j = 0; j < this.params.array.length; j++) {
          var k = this.params.array[j];
          var h = { seq: [{ oid: "1.2.3.4" }, { set: [{ utf8str: "DE" }] }] };
          if (k.attr == "dateOfBirth") {
            h.seq[0].oid = d(k.attr);
            h.seq[1].set[0] = { gentime: k.str };
          } else {
            if (k.attr == "placeOfBirth") {
              h.seq[0].oid = d(k.attr);
              h.seq[1].set[0] = { utf8str: k.str };
            } else {
              if (k.attr == "gender") {
                h.seq[0].oid = d(k.attr);
                h.seq[1].set[0] = { prnstr: k.str };
              } else {
                if (k.attr == "countryOfCitizenship") {
                  h.seq[0].oid = d(k.attr);
                  h.seq[1].set[0] = { prnstr: k.str };
                } else {
                  if (k.attr == "countryOfResidence") {
                    h.seq[0].oid = d(k.attr);
                    h.seq[1].set[0] = { prnstr: k.str };
                  } else {
                    throw new Error("unsupported attribute: " + k.attr);
                  }
                }
              }
            }
          }
          f.push(new b(h));
        }
        var g = new a({ array: f });
        this.asn1ExtnValue = g;
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.9";
      if (e !== void 0) {
        this.params = e;
      }
    };
    extendClass(KJUR2.asn1.x509.SubjectDirectoryAttributes, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.PrivateExtension = function(f) {
      KJUR2.asn1.x509.PrivateExtension.superclass.constructor.call(this, f);
      var c = KJUR2, e = c.lang.String.isHex, b = c.asn1, d = b.x509.OID.name2oid, a = b.ASN1Util.newObject;
      this.params = null;
      this.setByParam = function(g) {
        this.oid = d(g.extname);
        this.params = g;
      };
      this.getExtnValueHex = function() {
        if (this.params.extname == void 0 || this.params.extn == void 0) {
          throw new Error("extname or extnhex not specified");
        }
        var h = this.params.extn;
        if (typeof h == "string" && e(h)) {
          return h;
        } else {
          if (typeof h == "object") {
            try {
              return a(h).tohex();
            } catch (g) {
            }
          }
        }
        throw new Error("unsupported extn value");
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.x509.PrivateExtension, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.CRL = function(g) {
      KJUR2.asn1.x509.CRL.superclass.constructor.call(this);
      var c = KJUR2, b = c.asn1, a = b.DERSequence, e = b.DERBitString, f = b.x509, d = f.AlgorithmIdentifier, h = f.TBSCertList;
      this.params = void 0;
      this.setByParam = function(i) {
        this.params = i;
      };
      this.sign = function() {
        var j = new h(this.params).tohex();
        var k = new KJUR2.crypto.Signature({ alg: this.params.sigalg });
        k.init(this.params.cakey);
        k.updateHex(j);
        var i = k.sign();
        this.params.sighex = i;
      };
      this.getPEM = function() {
        return hextopem(this.tohex(), "X509 CRL");
      };
      this.tohex = function() {
        var k = this.params;
        if (k.tbsobj == void 0) {
          k.tbsobj = new h(k);
        }
        if (k.sighex == void 0 && k.cakey != void 0) {
          this.sign();
        }
        if (k.sighex == void 0) {
          throw new Error("sighex or cakey parameter not defined");
        }
        var i = [];
        i.push(k.tbsobj);
        i.push(new d({ name: k.sigalg }));
        i.push(new e({ hex: "00" + k.sighex }));
        var j = new a({ array: i });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.params = g;
      }
    };
    extendClass(KJUR2.asn1.x509.CRL, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.TBSCertList = function(f) {
      KJUR2.asn1.x509.TBSCertList.superclass.constructor.call(this);
      var b = KJUR2, i = b.asn1, h = i.DERInteger, g = i.DERSequence, c = i.DERTaggedObject, k = i.DERObjectIdentifier, d = i.x509, l = d.AlgorithmIdentifier, e = d.Time, j = d.Extensions, a = d.X500Name;
      this.params = null;
      this.setByParam = function(m) {
        this.params = m;
      };
      this.getRevCertSequence = function() {
        var m = [];
        var n = this.params.revcert;
        for (var o = 0; o < n.length; o++) {
          var p = [new h(n[o].sn), new e(n[o].date)];
          if (n[o].ext != void 0) {
            p.push(new j(n[o].ext));
          }
          m.push(new g({ array: p }));
        }
        return new g({ array: m });
      };
      this.tohex = function() {
        var n = [];
        var r = this.params;
        if (r.version != void 0) {
          var m = r.version - 1;
          var p = new h({ "int": m });
          n.push(p);
        }
        n.push(new l({ name: r.sigalg }));
        n.push(new a(r.issuer));
        n.push(new e(r.thisupdate));
        if (r.nextupdate != void 0) {
          n.push(new e(r.nextupdate));
        }
        if (r.revcert != void 0) {
          n.push(this.getRevCertSequence());
        }
        if (r.ext != void 0) {
          var q = new j(r.ext);
          n.push(new c({ tag: "a0", explicit: true, obj: q }));
        }
        var o = new g({ array: n });
        return o.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f !== void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.x509.TBSCertList, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.CRLEntry = function(e) {
      KJUR2.asn1.x509.CRLEntry.superclass.constructor.call(this);
      var d = null, c = null, b = KJUR2, a = b.asn1;
      this.setCertSerial = function(f) {
        this.sn = new a.DERInteger(f);
      };
      this.setRevocationDate = function(f) {
        this.time = new a.x509.Time(f);
      };
      this.tohex = function() {
        var f = new a.DERSequence({ array: [this.sn, this.time] });
        this.TLV = f.tohex();
        return this.TLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        if (e.time !== void 0) {
          this.setRevocationDate(e.time);
        }
        if (e.sn !== void 0) {
          this.setCertSerial(e.sn);
        }
      }
    };
    extendClass(KJUR2.asn1.x509.CRLEntry, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.CRLNumber = function(a) {
      KJUR2.asn1.x509.CRLNumber.superclass.constructor.call(this, a);
      this.params = void 0;
      this.getExtnValueHex = function() {
        this.asn1ExtnValue = new KJUR2.asn1.DERInteger(this.params.num);
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.20";
      if (a != void 0) {
        this.params = a;
      }
    };
    extendClass(KJUR2.asn1.x509.CRLNumber, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.CRLReason = function(a) {
      KJUR2.asn1.x509.CRLReason.superclass.constructor.call(this, a);
      this.params = void 0;
      this.getExtnValueHex = function() {
        this.asn1ExtnValue = new KJUR2.asn1.DEREnumerated(this.params.code);
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "2.5.29.21";
      if (a != void 0) {
        this.params = a;
      }
    };
    extendClass(KJUR2.asn1.x509.CRLReason, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.OCSPNonce = function(a) {
      KJUR2.asn1.x509.OCSPNonce.superclass.constructor.call(this, a);
      this.params = void 0;
      this.getExtnValueHex = function() {
        this.asn1ExtnValue = new KJUR2.asn1.DEROctetString(this.params);
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "1.3.6.1.5.5.7.48.1.2";
      if (a != void 0) {
        this.params = a;
      }
    };
    extendClass(KJUR2.asn1.x509.OCSPNonce, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.OCSPNoCheck = function(a) {
      KJUR2.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, a);
      this.params = void 0;
      this.getExtnValueHex = function() {
        this.asn1ExtnValue = new KJUR2.asn1.DERNull();
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "1.3.6.1.5.5.7.48.1.5";
      if (a != void 0) {
        this.params = a;
      }
    };
    extendClass(KJUR2.asn1.x509.OCSPNoCheck, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.AdobeTimeStamp = function(g) {
      KJUR2.asn1.x509.AdobeTimeStamp.superclass.constructor.call(this, g);
      var c = KJUR2, b = c.asn1, f = b.DERInteger, d = b.DERBoolean, a = b.DERSequence, e = b.x509.GeneralName;
      this.params = null;
      this.getExtnValueHex = function() {
        var i = this.params;
        var h = [new f(1)];
        h.push(new e({ uri: i.uri }));
        if (i.reqauth != void 0) {
          h.push(new d(i.reqauth));
        }
        this.asn1ExtnValue = new a({ array: h });
        return this.asn1ExtnValue.tohex();
      };
      this.oid = "1.2.840.113583.1.1.9.1";
      if (g !== void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.x509.AdobeTimeStamp, KJUR2.asn1.x509.Extension);
    KJUR2.asn1.x509.X500Name = function(f) {
      KJUR2.asn1.x509.X500Name.superclass.constructor.call(this);
      this.asn1Array = [];
      this.paramArray = [];
      this.sRule = "utf8";
      var c = KJUR2, b = c.asn1, e = b.x509, d = e.RDN, a = pemtohex;
      this.setByString = function(g, l) {
        if (l !== void 0) {
          this.sRule = l;
        }
        var k = g.split("/");
        k.shift();
        var j = [];
        for (var m = 0; m < k.length; m++) {
          if (k[m].match(/^[^=]+=.+$/)) {
            j.push(k[m]);
          } else {
            var h = j.length - 1;
            j[h] = j[h] + "/" + k[m];
          }
        }
        for (var m = 0; m < j.length; m++) {
          this.asn1Array.push(new d({ str: j[m], rule: this.sRule }));
        }
      };
      this.setByLdapString = function(g, h) {
        if (h !== void 0) {
          this.sRule = h;
        }
        var i = e.X500Name.ldapToCompat(g);
        this.setByString(i, h);
      };
      this.setByObject = function(j, i) {
        if (i !== void 0) {
          this.sRule = i;
        }
        for (var g in j) {
          if (j.hasOwnProperty(g)) {
            var h = new d({ str: g + "=" + j[g], rule: this.sRule });
            this.asn1Array ? this.asn1Array.push(h) : this.asn1Array = [h];
          }
        }
      };
      this.setByParam = function(h) {
        if (h.rule !== void 0) {
          this.sRule = h.rule;
        }
        if (h.array !== void 0) {
          this.paramArray = h.array;
        } else {
          if (h.str !== void 0) {
            this.setByString(h.str);
          } else {
            if (h.ldapstr !== void 0) {
              this.setByLdapString(h.ldapstr);
            } else {
              if (h.hex !== void 0) {
                this.hTLV = h.hex;
              } else {
                if (h.certissuer !== void 0) {
                  var g = new X509();
                  g.readCertPEM(h.certissuer);
                  this.hTLV = g.getIssuerHex();
                } else {
                  if (h.certsubject !== void 0) {
                    var g = new X509();
                    g.readCertPEM(h.certsubject);
                    this.hTLV = g.getSubjectHex();
                  } else {
                    if (typeof h === "object" && h.certsubject === void 0 && h.certissuer === void 0) {
                      this.setByObject(h);
                    }
                  }
                }
              }
            }
          }
        }
      };
      this.tohex = function() {
        if (typeof this.hTLV == "string") {
          return this.hTLV;
        }
        if (this.asn1Array.length == 0 && this.paramArray.length > 0) {
          for (var g = 0; g < this.paramArray.length; g++) {
            var k = { array: this.paramArray[g] };
            if (this.sRule != "utf8") {
              k.rule = this.sRule;
            }
            var h = new d(k);
            this.asn1Array.push(h);
          }
        }
        var j = new b.DERSequence({ array: this.asn1Array });
        this.hTLV = j.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f !== void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.x509.X500Name, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.X500Name.compatToLDAP = function(d) {
      if (d.substr(0, 1) !== "/") {
        throw "malformed input";
      }
      var b = "";
      d = d.substr(1);
      var c = d.split("/");
      c.reverse();
      c = c.map(function(a) {
        return a.replace(/,/, "\\,");
      });
      return c.join(",");
    };
    KJUR2.asn1.x509.X500Name.onelineToLDAP = function(a) {
      return KJUR2.asn1.x509.X500Name.compatToLDAP(a);
    };
    KJUR2.asn1.x509.X500Name.ldapToCompat = function(g) {
      var c = g.split(",");
      var e = false;
      var b = [];
      for (var f = 0; c.length > 0; f++) {
        var h = c.shift();
        if (e === true) {
          var d = b.pop();
          var j = (d + "," + h).replace(/\\,/g, ",");
          b.push(j);
          e = false;
        } else {
          b.push(h);
        }
        if (h.substr(-1, 1) === "\\") {
          e = true;
        }
      }
      b = b.map(function(a) {
        return a.replace("/", "\\/");
      });
      b.reverse();
      return "/" + b.join("/");
    };
    KJUR2.asn1.x509.X500Name.ldapToOneline = function(a) {
      return KJUR2.asn1.x509.X500Name.ldapToCompat(a);
    };
    KJUR2.asn1.x509.RDN = function(b) {
      KJUR2.asn1.x509.RDN.superclass.constructor.call(this);
      this.asn1Array = [];
      this.paramArray = [];
      this.sRule = "utf8";
      var a = KJUR2.asn1.x509.AttributeTypeAndValue;
      this.setByParam = function(c) {
        if (c.rule !== void 0) {
          this.sRule = c.rule;
        }
        if (c.str !== void 0) {
          this.addByMultiValuedString(c.str);
        }
        if (c.array !== void 0) {
          this.paramArray = c.array;
        }
      };
      this.addByString = function(c) {
        this.asn1Array.push(new KJUR2.asn1.x509.AttributeTypeAndValue({ str: c, rule: this.sRule }));
      };
      this.addByMultiValuedString = function(e) {
        var c = KJUR2.asn1.x509.RDN.parseString(e);
        for (var d = 0; d < c.length; d++) {
          this.addByString(c[d]);
        }
      };
      this.tohex = function() {
        if (this.asn1Array.length == 0 && this.paramArray.length > 0) {
          for (var d = 0; d < this.paramArray.length; d++) {
            var f = this.paramArray[d];
            if (f.rule !== void 0 && this.sRule != "utf8") {
              f.rule = this.sRule;
            }
            var c = new a(f);
            this.asn1Array.push(c);
          }
        }
        var e = new KJUR2.asn1.DERSet({ array: this.asn1Array });
        this.TLV = e.tohex();
        return this.TLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (b !== void 0) {
        this.setByParam(b);
      }
    };
    extendClass(KJUR2.asn1.x509.RDN, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.RDN.parseString = function(m) {
      var j = m.split(/\+/);
      var h = false;
      var c = [];
      for (var g = 0; j.length > 0; g++) {
        var k = j.shift();
        if (h === true) {
          var f = c.pop();
          var d = (f + "+" + k).replace(/\\\+/g, "+");
          c.push(d);
          h = false;
        } else {
          c.push(k);
        }
        if (k.substr(-1, 1) === "\\") {
          h = true;
        }
      }
      var l = false;
      var b = [];
      for (var g = 0; c.length > 0; g++) {
        var k = c.shift();
        if (l === true) {
          var e = b.pop();
          if (k.match(/"$/)) {
            var d = (e + "+" + k).replace(/^([^=]+)="(.*)"$/, "$1=$2");
            b.push(d);
            l = false;
          } else {
            b.push(e + "+" + k);
          }
        } else {
          b.push(k);
        }
        if (k.match(/^[^=]+="/)) {
          l = true;
        }
      }
      return b;
    };
    KJUR2.asn1.x509.AttributeTypeAndValue = function(c) {
      KJUR2.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
      this.sRule = "utf8";
      this.sType = null;
      this.sValue = null;
      this.dsType = null;
      var a = KJUR2, g = a.asn1, d = g.DERSequence, l = g.DERUTF8String, i = g.DERPrintableString, h = g.DERTeletexString, b = g.DERIA5String, e = g.DERVisibleString, k = g.DERBMPString, f = a.lang.String.isMail, j = a.lang.String.isPrintable;
      this.setByParam = function(o) {
        if (o.rule !== void 0) {
          this.sRule = o.rule;
        }
        if (o.ds !== void 0) {
          this.dsType = o.ds;
        }
        if (o.value === void 0 && o.str !== void 0) {
          var n = o.str;
          var m = n.match(/^([^=]+)=(.+)$/);
          if (m) {
            this.sType = m[1];
            this.sValue = m[2];
          } else {
            throw new Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
          }
        } else {
          this.sType = o.type;
          this.sValue = o.value;
        }
      };
      this.setByString = function(n, o) {
        if (o !== void 0) {
          this.sRule = o;
        }
        var m = n.match(/^([^=]+)=(.+)$/);
        if (m) {
          this.setByAttrTypeAndValueStr(m[1], m[2]);
        } else {
          throw new Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
        }
      };
      this._getDsType = function() {
        var o = this.sType;
        var n = this.sValue;
        var m = this.sRule;
        if (m === "prn") {
          if (o == "CN" && f(n)) {
            return "ia5";
          }
          if (j(n)) {
            return "prn";
          }
          return "utf8";
        } else {
          if (m === "utf8") {
            if (o == "CN" && f(n)) {
              return "ia5";
            }
            if (o == "C") {
              return "prn";
            }
            return "utf8";
          }
        }
        return "utf8";
      };
      this.setByAttrTypeAndValueStr = function(o, n, m) {
        if (m !== void 0) {
          this.sRule = m;
        }
        this.sType = o;
        this.sValue = n;
      };
      this.getValueObj = function(n, m) {
        if (n == "utf8") {
          return new l({ str: m });
        }
        if (n == "prn") {
          return new i({ str: m });
        }
        if (n == "tel") {
          return new h({ str: m });
        }
        if (n == "ia5") {
          return new b({ str: m });
        }
        if (n == "vis") {
          return new e({ str: m });
        }
        if (n == "bmp") {
          return new k({ str: m });
        }
        throw new Error("unsupported directory string type: type=" + n + " value=" + m);
      };
      this.tohex = function() {
        if (this.dsType == null) {
          this.dsType = this._getDsType();
        }
        var n = KJUR2.asn1.x509.OID.atype2obj(this.sType);
        var m = this.getValueObj(this.dsType, this.sValue);
        var p = new d({ array: [n, m] });
        this.TLV = p.tohex();
        return this.TLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (c !== void 0) {
        this.setByParam(c);
      }
    };
    extendClass(KJUR2.asn1.x509.AttributeTypeAndValue, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.SubjectPublicKeyInfo = function(f) {
      KJUR2.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
      var l = null, k = null, a = KJUR2, j = a.asn1, i = j.DERInteger, b = j.DERBitString, m = j.DERObjectIdentifier, e = j.DERSequence, h = j.ASN1Util.newObject, d = j.x509, o = d.AlgorithmIdentifier, g = a.crypto, n = g.ECDSA, c = g.DSA;
      this.getASN1Object = function() {
        if (this.asn1AlgId == null || this.asn1SubjPKey == null) {
          throw "algId and/or subjPubKey not set";
        }
        var p = new e({ array: [this.asn1AlgId, this.asn1SubjPKey] });
        return p;
      };
      this.tohex = function() {
        var p = this.getASN1Object();
        this.hTLV = p.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setPubKey = function(q) {
        try {
          if (q instanceof RSAKey) {
            var u = h({ seq: [{ "int": { bigint: q.n } }, { "int": { "int": q.e } }] });
            var s = u.tohex();
            this.asn1AlgId = new o({ name: "rsaEncryption" });
            this.asn1SubjPKey = new b({ hex: "00" + s });
          }
        } catch (p) {
        }
        try {
          if (q instanceof KJUR2.crypto.ECDSA) {
            var r = new m({ name: q.curveName });
            this.asn1AlgId = new o({ name: "ecPublicKey", asn1params: r });
            this.asn1SubjPKey = new b({ hex: "00" + q.pubKeyHex });
          }
        } catch (p) {
        }
        try {
          if (q instanceof KJUR2.crypto.DSA) {
            var r = new h({ seq: [{ "int": { bigint: q.p } }, { "int": { bigint: q.q } }, { "int": { bigint: q.g } }] });
            this.asn1AlgId = new o({ name: "dsa", asn1params: r });
            var t2 = new i({ bigint: q.y });
            this.asn1SubjPKey = new b({ hex: "00" + t2.tohex() });
          }
        } catch (p) {
        }
      };
      if (f !== void 0) {
        this.setPubKey(f);
      }
    };
    extendClass(KJUR2.asn1.x509.SubjectPublicKeyInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.Time = function(f) {
      KJUR2.asn1.x509.Time.superclass.constructor.call(this);
      var e = null, a = null, d = KJUR2, c = d.asn1, b = c.DERUTCTime, g = c.DERGeneralizedTime;
      this.params = null;
      this.type = null;
      this.setTimeParams = function(h) {
        this.timeParams = h;
      };
      this.setByParam = function(h) {
        this.params = h;
      };
      this.getType = function(h) {
        if (h.match(/^[0-9]{12}Z$/)) {
          return "utc";
        }
        if (h.match(/^[0-9]{14}Z$/)) {
          return "gen";
        }
        if (h.match(/^[0-9]{12}\.[0-9]+Z$/)) {
          return "utc";
        }
        if (h.match(/^[0-9]{14}\.[0-9]+Z$/)) {
          return "gen";
        }
        return null;
      };
      this.tohex = function() {
        var i = this.params;
        var h = null;
        if (typeof i == "string") {
          i = { str: i };
        }
        if (i != null && i.str && (i.type == null || i.type == void 0)) {
          i.type = this.getType(i.str);
        }
        if (i != null && i.str) {
          if (i.type == "utc") {
            h = new b(i.str);
          }
          if (i.type == "gen") {
            h = new g(i.str);
          }
        } else {
          if (this.type == "gen") {
            h = new g();
          } else {
            h = new b();
          }
        }
        if (h == null) {
          throw new Error("wrong setting for Time");
        }
        this.TLV = h.tohex();
        return this.TLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    KJUR2.asn1.x509.Time_bak = function(f) {
      KJUR2.asn1.x509.Time_bak.superclass.constructor.call(this);
      var e = null, a = null, d = KJUR2, c = d.asn1, b = c.DERUTCTime, g = c.DERGeneralizedTime;
      this.setTimeParams = function(h) {
        this.timeParams = h;
      };
      this.tohex = function() {
        var h = null;
        if (this.timeParams != null) {
          if (this.type == "utc") {
            h = new b(this.timeParams);
          } else {
            h = new g(this.timeParams);
          }
        } else {
          if (this.type == "utc") {
            h = new b();
          } else {
            h = new g();
          }
        }
        this.TLV = h.tohex();
        return this.TLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.type = "utc";
      if (f !== void 0) {
        if (f.type !== void 0) {
          this.type = f.type;
        } else {
          if (f.str !== void 0) {
            if (f.str.match(/^[0-9]{12}Z$/)) {
              this.type = "utc";
            }
            if (f.str.match(/^[0-9]{14}Z$/)) {
              this.type = "gen";
            }
          }
        }
        this.timeParams = f;
      }
    };
    extendClass(KJUR2.asn1.x509.Time, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.AlgorithmIdentifier = function(e) {
      KJUR2.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);
      this.nameAlg = null;
      this.asn1Alg = null;
      this.asn1Params = null;
      this.paramEmpty = false;
      var b = KJUR2, a = b.asn1, c = a.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
      this.tohex = function() {
        if (this.nameAlg === null && this.asn1Alg === null) {
          throw new Error("algorithm not specified");
        }
        if (this.nameAlg !== null) {
          var f = null;
          for (var h in c) {
            if (h === this.nameAlg) {
              f = c[h];
            }
          }
          if (f !== null) {
            this.hTLV = f;
            return this.hTLV;
          }
        }
        if (this.nameAlg !== null && this.asn1Alg === null) {
          this.asn1Alg = a.x509.OID.name2obj(this.nameAlg);
        }
        var g = [this.asn1Alg];
        if (this.asn1Params !== null) {
          g.push(this.asn1Params);
        }
        var i = new a.DERSequence({ array: g });
        this.hTLV = i.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        if (e.name !== void 0) {
          this.nameAlg = e.name;
        }
        if (e.asn1params !== void 0) {
          this.asn1Params = e.asn1params;
        }
        if (e.paramempty !== void 0) {
          this.paramEmpty = e.paramempty;
        }
      }
      if (this.asn1Params === null && this.paramEmpty === false && this.nameAlg !== null) {
        if (this.nameAlg.name !== void 0) {
          this.nameAlg = this.nameAlg.name;
        }
        var d = this.nameAlg.toLowerCase();
        if (d.substr(-7, 7) !== "withdsa" && d.substr(-9, 9) !== "withecdsa") {
          this.asn1Params = new a.DERNull();
        }
      }
    };
    extendClass(KJUR2.asn1.x509.AlgorithmIdentifier, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = { SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000", SHA256withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120", SHA384withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130", SHA512withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140" };
    KJUR2.asn1.x509.GeneralName = function(f) {
      KJUR2.asn1.x509.GeneralName.superclass.constructor.call(this);
      var l = { rfc822: "81", dns: "82", dn: "a4", uri: "86", ip: "87", otherName: "a0" }, b = KJUR2, h = b.asn1, d = h.x509, a = d.X500Name, g = d.OtherName, e = h.DERIA5String, i = h.DERPrintableString, k = h.DEROctetString, c = h.DERTaggedObject, m = h.ASN1Object, j = Error;
      this.params = null;
      this.setByParam = function(n) {
        this.params = n;
      };
      this.tohex = function() {
        var p = this.params;
        var A, y, q;
        var y = false;
        if (p.other !== void 0) {
          A = "a0", q = new g(p.other);
        } else {
          if (p.rfc822 !== void 0) {
            A = "81";
            q = new e({ str: p.rfc822 });
          } else {
            if (p.dns !== void 0) {
              A = "82";
              q = new e({ str: p.dns });
            } else {
              if (p.dn !== void 0) {
                A = "a4";
                y = true;
                if (typeof p.dn === "string") {
                  q = new a({ str: p.dn });
                } else {
                  if (p.dn instanceof KJUR2.asn1.x509.X500Name) {
                    q = p.dn;
                  } else {
                    q = new a(p.dn);
                  }
                }
              } else {
                if (p.ldapdn !== void 0) {
                  A = "a4";
                  y = true;
                  q = new a({ ldapstr: p.ldapdn });
                } else {
                  if (p.certissuer !== void 0 || p.certsubj !== void 0) {
                    A = "a4";
                    y = true;
                    var n, o;
                    var z2 = null;
                    if (p.certsubj !== void 0) {
                      n = false;
                      o = p.certsubj;
                    } else {
                      n = true;
                      o = p.certissuer;
                    }
                    if (o.match(/^[0-9A-Fa-f]+$/)) {
                      z2 == o;
                    }
                    if (o.indexOf("-----BEGIN ") != -1) {
                      z2 = pemtohex(o);
                    }
                    if (z2 == null) {
                      throw new Error("certsubj/certissuer not cert");
                    }
                    var w = new X509();
                    w.hex = z2;
                    var s;
                    if (n) {
                      s = w.getIssuerHex();
                    } else {
                      s = w.getSubjectHex();
                    }
                    q = new m();
                    q.hTLV = s;
                  } else {
                    if (p.uri !== void 0) {
                      A = "86";
                      q = new e({ str: p.uri });
                    } else {
                      if (p.ip !== void 0) {
                        A = "87";
                        var v;
                        var t2 = p.ip;
                        try {
                          if (t2.match(/^[0-9a-f]+$/)) {
                            var r = t2.length;
                            if (r == 8 || r == 16 || r == 32 || r == 64) {
                              v = t2;
                            } else {
                              throw "err";
                            }
                          } else {
                            v = iptohex(t2);
                          }
                        } catch (u) {
                          throw new j("malformed IP address: " + p.ip + ":" + u.message);
                        }
                        q = new k({ hex: v });
                      } else {
                        throw new j("improper params");
                      }
                    }
                  }
                }
              }
            }
          }
        }
        var B = new c({ tag: A, explicit: y, obj: q });
        return B.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f !== void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.x509.GeneralName, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.GeneralNames = function(d) {
      KJUR2.asn1.x509.GeneralNames.superclass.constructor.call(this);
      var a = null, c = KJUR2, b = c.asn1;
      this.setByParamArray = function(g) {
        for (var e = 0; e < g.length; e++) {
          var f = new b.x509.GeneralName(g[e]);
          this.asn1Array.push(f);
        }
      };
      this.tohex = function() {
        var e = new b.DERSequence({ array: this.asn1Array });
        return e.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.asn1Array = new Array();
      if (typeof d != "undefined") {
        this.setByParamArray(d);
      }
    };
    extendClass(KJUR2.asn1.x509.GeneralNames, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.OtherName = function(g) {
      KJUR2.asn1.x509.OtherName.superclass.constructor.call(this);
      var f = null, e = null, d = KJUR2, c = d.asn1, h = c.DERObjectIdentifier, a = c.DERSequence, b = c.ASN1Util.newObject;
      this.params = null;
      this.setByParam = function(i) {
        this.params = i;
      };
      this.tohex = function() {
        var k = this.params;
        if (k.oid == void 0 || k.value == void 0) {
          throw new Error("oid or value not specified");
        }
        var l = new h({ oid: k.oid });
        var i = b({ tag: { tag: "a0", explicit: true, obj: k.value } });
        var j = new a({ array: [l, i] });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g !== void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.x509.OtherName, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.x509.OID = new function() {
      var a = KJUR2.asn1.DERObjectIdentifier;
      this.name2oidList = { sha1: "1.3.14.3.2.26", sha256: "2.16.840.1.101.3.4.2.1", sha384: "2.16.840.1.101.3.4.2.2", sha512: "2.16.840.1.101.3.4.2.3", sha224: "2.16.840.1.101.3.4.2.4", md5: "1.2.840.113549.2.5", md2: "1.3.14.7.2.2.1", ripemd160: "1.3.36.3.2.1", MD2withRSA: "1.2.840.113549.1.1.2", MD4withRSA: "1.2.840.113549.1.1.3", MD5withRSA: "1.2.840.113549.1.1.4", SHA1withRSA: "1.2.840.113549.1.1.5", "pkcs1-MGF": "1.2.840.113549.1.1.8", rsaPSS: "1.2.840.113549.1.1.10", SHA224withRSA: "1.2.840.113549.1.1.14", SHA256withRSA: "1.2.840.113549.1.1.11", SHA384withRSA: "1.2.840.113549.1.1.12", SHA512withRSA: "1.2.840.113549.1.1.13", SHA1withECDSA: "1.2.840.10045.4.1", SHA224withECDSA: "1.2.840.10045.4.3.1", SHA256withECDSA: "1.2.840.10045.4.3.2", SHA384withECDSA: "1.2.840.10045.4.3.3", SHA512withECDSA: "1.2.840.10045.4.3.4", dsa: "1.2.840.10040.4.1", SHA1withDSA: "1.2.840.10040.4.3", SHA224withDSA: "2.16.840.1.101.3.4.3.1", SHA256withDSA: "2.16.840.1.101.3.4.3.2", rsaEncryption: "1.2.840.113549.1.1.1", commonName: "2.5.4.3", countryName: "2.5.4.6", localityName: "2.5.4.7", stateOrProvinceName: "2.5.4.8", streetAddress: "2.5.4.9", organizationName: "2.5.4.10", organizationalUnitName: "2.5.4.11", domainComponent: "0.9.2342.19200300.100.1.25", userId: "0.9.2342.19200300.100.1.1", surname: "2.5.4.4", givenName: "2.5.4.42", title: "2.5.4.12", distinguishedName: "2.5.4.49", emailAddress: "1.2.840.113549.1.9.1", description: "2.5.4.13", businessCategory: "2.5.4.15", postalCode: "2.5.4.17", uniqueIdentifier: "2.5.4.45", organizationIdentifier: "2.5.4.97", jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1", jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2", jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3", subjectDirectoryAttributes: "2.5.29.9", subjectKeyIdentifier: "2.5.29.14", keyUsage: "2.5.29.15", subjectAltName: "2.5.29.17", issuerAltName: "2.5.29.18", basicConstraints: "2.5.29.19", cRLNumber: "2.5.29.20", cRLReason: "2.5.29.21", nameConstraints: "2.5.29.30", cRLDistributionPoints: "2.5.29.31", certificatePolicies: "2.5.29.32", anyPolicy: "2.5.29.32.0", authorityKeyIdentifier: "2.5.29.35", policyConstraints: "2.5.29.36", extKeyUsage: "2.5.29.37", authorityInfoAccess: "1.3.6.1.5.5.7.1.1", ocsp: "1.3.6.1.5.5.7.48.1", ocspBasic: "1.3.6.1.5.5.7.48.1.1", ocspNonce: "1.3.6.1.5.5.7.48.1.2", ocspNoCheck: "1.3.6.1.5.5.7.48.1.5", caIssuers: "1.3.6.1.5.5.7.48.2", anyExtendedKeyUsage: "2.5.29.37.0", serverAuth: "1.3.6.1.5.5.7.3.1", clientAuth: "1.3.6.1.5.5.7.3.2", codeSigning: "1.3.6.1.5.5.7.3.3", emailProtection: "1.3.6.1.5.5.7.3.4", timeStamping: "1.3.6.1.5.5.7.3.8", ocspSigning: "1.3.6.1.5.5.7.3.9", dateOfBirth: "1.3.6.1.5.5.7.9.1", placeOfBirth: "1.3.6.1.5.5.7.9.2", gender: "1.3.6.1.5.5.7.9.3", countryOfCitizenship: "1.3.6.1.5.5.7.9.4", countryOfResidence: "1.3.6.1.5.5.7.9.5", ecPublicKey: "1.2.840.10045.2.1", "P-256": "1.2.840.10045.3.1.7", secp256r1: "1.2.840.10045.3.1.7", secp256k1: "1.3.132.0.10", secp384r1: "1.3.132.0.34", secp521r1: "1.3.132.0.35", pkcs5PBES2: "1.2.840.113549.1.5.13", pkcs5PBKDF2: "1.2.840.113549.1.5.12", "des-EDE3-CBC": "1.2.840.113549.3.7", data: "1.2.840.113549.1.7.1", "signed-data": "1.2.840.113549.1.7.2", "enveloped-data": "1.2.840.113549.1.7.3", "digested-data": "1.2.840.113549.1.7.5", "encrypted-data": "1.2.840.113549.1.7.6", "authenticated-data": "1.2.840.113549.1.9.16.1.2", tstinfo: "1.2.840.113549.1.9.16.1.4", signingCertificate: "1.2.840.113549.1.9.16.2.12", timeStampToken: "1.2.840.113549.1.9.16.2.14", signaturePolicyIdentifier: "1.2.840.113549.1.9.16.2.15", etsArchiveTimeStamp: "1.2.840.113549.1.9.16.2.27", signingCertificateV2: "1.2.840.113549.1.9.16.2.47", etsArchiveTimeStampV2: "1.2.840.113549.1.9.16.2.48", extensionRequest: "1.2.840.113549.1.9.14", contentType: "1.2.840.113549.1.9.3", messageDigest: "1.2.840.113549.1.9.4", signingTime: "1.2.840.113549.1.9.5", counterSignature: "1.2.840.113549.1.9.6", archiveTimeStampV3: "0.4.0.1733.2.4", pdfRevocationInfoArchival: "1.2.840.113583.1.1.8", adobeTimeStamp: "1.2.840.113583.1.1.9.1" };
      this.atype2oidList = { CN: "2.5.4.3", L: "2.5.4.7", ST: "2.5.4.8", O: "2.5.4.10", OU: "2.5.4.11", C: "2.5.4.6", STREET: "2.5.4.9", DC: "0.9.2342.19200300.100.1.25", UID: "0.9.2342.19200300.100.1.1", SN: "2.5.4.4", T: "2.5.4.12", DN: "2.5.4.49", E: "1.2.840.113549.1.9.1", description: "2.5.4.13", businessCategory: "2.5.4.15", postalCode: "2.5.4.17", serialNumber: "2.5.4.5", uniqueIdentifier: "2.5.4.45", organizationIdentifier: "2.5.4.97", jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1", jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2", jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3" };
      this.objCache = {};
      this.name2obj = function(b) {
        if (typeof this.objCache[b] != "undefined") {
          return this.objCache[b];
        }
        if (typeof this.name2oidList[b] == "undefined") {
          throw "Name of ObjectIdentifier not defined: " + b;
        }
        var c = this.name2oidList[b];
        var d = new a({ oid: c });
        this.objCache[b] = d;
        return d;
      };
      this.atype2obj = function(b) {
        if (this.objCache[b] !== void 0) {
          return this.objCache[b];
        }
        var c;
        if (b.match(/^\d+\.\d+\.[0-9.]+$/)) {
          c = b;
        } else {
          if (this.atype2oidList[b] !== void 0) {
            c = this.atype2oidList[b];
          } else {
            if (this.name2oidList[b] !== void 0) {
              c = this.name2oidList[b];
            } else {
              throw new Error("AttributeType name undefined: " + b);
            }
          }
        }
        var d = new a({ oid: c });
        this.objCache[b] = d;
        return d;
      };
      this.registerOIDs = function(b) {
        if (!this.checkOIDs(b)) {
          return;
        }
        for (var c in b) {
          this.name2oidList[c] = b[c];
        }
      };
      this.checkOIDs = function(b) {
        try {
          var d = Object.keys(b);
          if (d.length == 0) {
            return false;
          }
          d.map(function(g, e, h) {
            var f = this[g];
            if (!f.match(/^[0-2]\.[0-9.]+$/)) {
              throw new Error("value is not OID");
            }
          }, b);
          return true;
        } catch (c) {
          return false;
        }
      };
    }();
    KJUR2.asn1.x509.OID.oid2name = function(b) {
      var c = KJUR2.asn1.x509.OID.name2oidList;
      for (var a in c) {
        if (c[a] == b) {
          return a;
        }
      }
      return "";
    };
    KJUR2.asn1.x509.OID.oid2atype = function(b) {
      var c = KJUR2.asn1.x509.OID.atype2oidList;
      for (var a in c) {
        if (c[a] == b) {
          return a;
        }
      }
      return b;
    };
    KJUR2.asn1.x509.OID.name2oid = function(a) {
      if (a.match(/^[0-9.]+$/)) {
        return a;
      }
      var b = KJUR2.asn1.x509.OID.name2oidList;
      if (b[a] === void 0) {
        return "";
      }
      return b[a];
    };
    KJUR2.asn1.x509.X509Util = {};
    KJUR2.asn1.x509.X509Util.newCertPEM = function(e) {
      var d = KJUR2.asn1.x509, b = d.TBSCertificate, a = d.Certificate;
      var c = new a(e);
      return c.getPEM();
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.asn1 == "undefined" || !KJUR2.asn1) {
      KJUR2.asn1 = {};
    }
    if (typeof KJUR2.asn1.cms == "undefined" || !KJUR2.asn1.cms) {
      KJUR2.asn1.cms = {};
    }
    KJUR2.asn1.cms.Attribute = function(f) {
      var e = Error, d = KJUR2, c = d.asn1, b = c.DERSequence, a = c.DERSet, g = c.DERObjectIdentifier;
      this.params = null;
      this.typeOid = null;
      this.setByParam = function(h) {
        this.params = h;
      };
      this.getValueArray = function() {
        throw new e("not yet implemented abstract");
      };
      this.tohex = function() {
        var j = new g({ oid: this.typeOid });
        var h = new a({ array: this.getValueArray() });
        var i = new b({ array: [j, h] });
        return i.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
    };
    extendClass(KJUR2.asn1.cms.Attribute, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.ContentType = function(c) {
      var b = KJUR2, a = b.asn1;
      a.cms.ContentType.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.3";
      this.getValueArray = function() {
        var d = new a.DERObjectIdentifier(this.params.type);
        return [d];
      };
      if (c != void 0) {
        this.setByParam(c);
      }
    };
    extendClass(KJUR2.asn1.cms.ContentType, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cms.MessageDigest = function(e) {
      var b = KJUR2, a = b.asn1, c = a.DEROctetString, d = a.cms;
      d.MessageDigest.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.4";
      this.getValueArray = function() {
        var f = new c(this.params);
        return [f];
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cms.MessageDigest, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cms.SigningTime = function(c) {
      var b = KJUR2, a = b.asn1;
      a.cms.SigningTime.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.5";
      this.getValueArray = function() {
        var d = new a.x509.Time(this.params);
        return [d];
      };
      if (c != void 0) {
        this.setByParam(c);
      }
    };
    extendClass(KJUR2.asn1.cms.SigningTime, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cms.SigningCertificate = function(h) {
      var e = Error, d = KJUR2, c = d.asn1, b = c.DERSequence, g = c.cms, a = g.ESSCertID, f = d.crypto;
      g.SigningCertificate.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.16.2.12";
      this.getValueArray = function() {
        if (this.params == null || this.params == void 0 || this.params.array == void 0) {
          throw new e("parameter 'array' not specified");
        }
        var o = this.params.array;
        var k = [];
        for (var l = 0; l < o.length; l++) {
          var n = o[l];
          if (h.hasis == false && (typeof n == "string" && (n.indexOf("-----BEGIN") != -1 || ASN1HEX.isASN1HEX(n)))) {
            n = { cert: n };
          }
          if (n.hasis != false && h.hasis == false) {
            n.hasis = false;
          }
          k.push(new a(n));
        }
        var j = new b({ array: k });
        var m = new b({ array: [j] });
        return [m];
      };
      if (h != void 0) {
        this.setByParam(h);
      }
    };
    extendClass(KJUR2.asn1.cms.SigningCertificate, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cms.ESSCertID = function(g) {
      KJUR2.asn1.cms.ESSCertID.superclass.constructor.call(this);
      var d = Error, c = KJUR2, b = c.asn1, f = b.DEROctetString, a = b.DERSequence, e = b.cms.IssuerSerial;
      this.params = null;
      this.getCertHash = function(k, h) {
        if (k.hash != void 0) {
          return k.hash;
        }
        if (typeof k == "string" && k.indexOf("-----BEGIN") == -1 && !ASN1HEX.isASN1HEX(k)) {
          return k;
        }
        var i;
        if (typeof k == "string") {
          i = k;
        } else {
          if (k.cert != void 0) {
            i = k.cert;
          } else {
            throw new d("hash nor cert unspecified");
          }
        }
        var j;
        if (i.indexOf("-----BEGIN") != -1) {
          j = pemtohex(i);
        } else {
          j = i;
        }
        if (typeof k == "string") {
          if (k.indexOf("-----BEGIN") != -1) {
            j = pemtohex(k);
          } else {
            if (ASN1HEX.isASN1HEX(k)) {
              j = k;
            }
          }
        }
        var l;
        if (k.alg != void 0) {
          l = k.alg;
        } else {
          if (h != void 0) {
            l = h;
          } else {
            throw new d("hash alg unspecified");
          }
        }
        return c.crypto.Util.hashHex(j, l);
      };
      this.tohex = function() {
        var k = this.params;
        var j = this.getCertHash(k, "sha1");
        var h = [];
        h.push(new f({ hex: j }));
        if (typeof k == "string" && k.indexOf("-----BEGIN") != -1 || k.cert != void 0 && k.hasis != false || k.issuer != void 0 && k.serial != void 0) {
          h.push(new e(k));
        }
        var i = new a({ array: h });
        return i.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.cms.ESSCertID, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.SigningCertificateV2 = function(d) {
      var h = Error, a = KJUR2, g = a.asn1, e = g.DERSequence, b = g.x509, i = g.cms, c = i.ESSCertIDv2, f = a.crypto;
      i.SigningCertificateV2.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.16.2.47";
      this.getValueArray = function() {
        if (this.params == null || this.params == void 0 || this.params.array == void 0) {
          throw new h("parameter 'array' not specified");
        }
        var o = this.params.array;
        var l = [];
        for (var m = 0; m < o.length; m++) {
          var n = o[m];
          if ((d.alg != void 0 || d.hasis == false) && (typeof n == "string" && (n.indexOf("-----BEGIN") != -1 || ASN1HEX.isASN1HEX(n)))) {
            n = { cert: n };
          }
          if (n.alg == void 0 && d.alg != void 0) {
            n.alg = d.alg;
          }
          if (n.hasis != false && d.hasis == false) {
            n.hasis = false;
          }
          l.push(new c(n));
        }
        var k = new e({ array: l });
        var j = new e({ array: [k] });
        return [j];
      };
      if (d != void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.cms.SigningCertificateV2, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cms.ESSCertIDv2 = function(h) {
      KJUR2.asn1.cms.ESSCertIDv2.superclass.constructor.call(this);
      var d = Error, c = KJUR2, b = c.asn1, f = b.DEROctetString, a = b.DERSequence, e = b.cms.IssuerSerial, g = b.x509.AlgorithmIdentifier;
      this.params = null;
      this.tohex = function() {
        var l = this.params;
        var k = this.getCertHash(l, "sha256");
        var i = [];
        if (l.alg != void 0 && l.alg != "sha256") {
          i.push(new g({ name: l.alg }));
        }
        i.push(new f({ hex: k }));
        if (typeof l == "string" && l.indexOf("-----BEGIN") != -1 || l.cert != void 0 && l.hasis != false || l.issuer != void 0 && l.serial != void 0) {
          i.push(new e(l));
        }
        var j = new a({ array: i });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (h != void 0) {
        this.setByParam(h);
      }
    };
    extendClass(KJUR2.asn1.cms.ESSCertIDv2, KJUR2.asn1.cms.ESSCertID);
    KJUR2.asn1.cms.IssuerSerial = function(e) {
      var i = Error, c = KJUR2, h = c.asn1, g = h.DERInteger, f = h.DERSequence, j = h.cms, d = h.x509, a = d.GeneralNames, b = X509;
      j.IssuerSerial.superclass.constructor.call(this);
      this.setByParam = function(k) {
        this.params = k;
      };
      this.tohex = function() {
        var p = this.params;
        var l, r;
        if (typeof p == "string" && p.indexOf("-----BEGIN") != -1 || p.cert != void 0) {
          var n;
          if (p.cert != void 0) {
            n = p.cert;
          } else {
            n = p;
          }
          var k = new b();
          k.readCertPEM(n);
          l = k.getIssuer();
          r = { hex: k.getSerialNumberHex() };
        } else {
          if (p.issuer != void 0 && p.serial) {
            l = p.issuer;
            r = p.serial;
          } else {
            throw new i("cert or issuer and serial parameter not specified");
          }
        }
        var q = new a([{ dn: l }]);
        var o = new g(r);
        var m = new f({ array: [q, o] });
        return m.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cms.IssuerSerial, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.SignerIdentifier = function(f) {
      var c = KJUR2, i = c.asn1, h = i.DERInteger, g = i.DERSequence, l = i.cms, k = l.IssuerAndSerialNumber, d = l.SubjectKeyIdentifier, e = i.x509, a = e.X500Name, b = X509, j = Error;
      l.SignerIdentifier.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var o = this.params;
        if (o.type == "isssn") {
          var m = new k(o);
          return m.tohex();
        } else {
          if (o.type == "skid") {
            var n = new d(o);
            return n.tohex();
          } else {
            throw new Error("wrong property for isssn or skid");
          }
        }
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.cms.SignerIdentifier, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.IssuerAndSerialNumber = function(e) {
      var c = KJUR2, h = c.asn1, g = h.DERInteger, f = h.DERSequence, j = h.cms, d = h.x509, a = d.X500Name, b = X509, i = Error;
      j.IssuerAndSerialNumber.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var p = this.params;
        var l, r;
        if (typeof p == "string" && p.indexOf("-----BEGIN") != -1 || p.cert != void 0) {
          var n;
          if (p.cert != void 0) {
            n = p.cert;
          } else {
            n = p;
          }
          var k = new b();
          k.readCertPEM(n);
          l = k.getIssuer();
          r = { hex: k.getSerialNumberHex() };
        } else {
          if (p.issuer != void 0 && p.serial) {
            l = p.issuer;
            r = p.serial;
          } else {
            throw new i("cert or issuer and serial parameter not specified");
          }
        }
        var q = new a(l);
        var o = new g(r);
        var m = new f({ array: [q, o] });
        return m.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(k) {
        this.params = k;
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cms.IssuerAndSerialNumber, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.SubjectKeyIdentifier = function(g) {
      var d = KJUR2, k = d.asn1, i = k.DERInteger, h = k.DERSequence, j = k.ASN1Util.newObject, m = k.cms, f = m.IssuerAndSerialName, c = m.SubjectKeyIdentifier, e = k.x509, a = e.X500Name, b = X509, l = Error;
      m.SubjectKeyIdentifier.superclass.constructor.call(this);
      this.tohex = function() {
        var r = this.params;
        if (r.cert == void 0 && r.skid == void 0) {
          throw new l("property cert nor skid undefined");
        }
        var q;
        if (r.cert != void 0) {
          var n = new b(r.cert);
          var o = n.getExtSubjectKeyIdentifier();
          q = o.kid.hex;
        } else {
          if (r.skid != void 0) {
            q = r.skid;
          }
        }
        var p = j({ tag: { tage: "a0", obj: { octstr: { hex: q } } } });
        return p.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.cms.SubjectKeyIdentifier, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.AttributeList = function(f) {
      var d = Error, c = KJUR2, b = c.asn1, a = b.DERSet, e = b.cms;
      e.AttributeList.superclass.constructor.call(this);
      this.params = null;
      this.hTLV = null;
      this.setByParam = function(g) {
        this.params = g;
      };
      this.tohex = function() {
        var o = this.params;
        if (this.hTLV != null) {
          return this.hTLV;
        }
        var m = true;
        if (o.sortflag != void 0) {
          m = o.sortflag;
        }
        var j = o.array;
        var g = [];
        for (var l = 0; l < j.length; l++) {
          var n = j[l];
          var k = n.attr;
          if (k == "contentType") {
            g.push(new e.ContentType(n));
          } else {
            if (k == "messageDigest") {
              g.push(new e.MessageDigest(n));
            } else {
              if (k == "signingTime") {
                g.push(new e.SigningTime(n));
              } else {
                if (k == "signingCertificate") {
                  g.push(new e.SigningCertificate(n));
                } else {
                  if (k == "signingCertificateV2") {
                    g.push(new e.SigningCertificateV2(n));
                  } else {
                    if (k == "signaturePolicyIdentifier") {
                      g.push(new KJUR2.asn1.cades.SignaturePolicyIdentifier(n));
                    } else {
                      if (k == "signatureTimeStamp" || k == "timeStampToken") {
                        g.push(new KJUR2.asn1.cades.SignatureTimeStamp(n));
                      } else {
                        throw new d("unknown attr: " + k);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        var h = new a({ array: g, sortflag: m });
        this.hTLV = h.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.cms.AttributeList, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.SignerInfo = function(q) {
      var n = Error, r = KJUR2, i = r.asn1, c = i.DERInteger, f = i.DEROctetString, h = i.DERSequence, m = i.DERTaggedObject, k = i.cms, p = k.SignerIdentifier, l = k.AttributeList, g = k.ContentType, e = k.EncapsulatedContentInfo, d = k.MessageDigest, j = k.SignedData, a = i.x509, s = a.AlgorithmIdentifier, b = r.crypto, o = KEYUTIL;
      k.SignerInfo.superclass.constructor.call(this);
      this.params = null;
      this.sign = function() {
        var y = this.params;
        var x = y.sigalg;
        var u = new l(y.sattrs).tohex();
        var v = o.getKey(y.signkey);
        var w = new b.Signature({ alg: x });
        w.init(v);
        w.updateHex(u);
        var t2 = w.sign();
        y.sighex = t2;
      };
      this.tohex = function() {
        var w = this.params;
        var t2 = [];
        t2.push(new c({ "int": w.version }));
        t2.push(new p(w.id));
        t2.push(new s({ name: w.hashalg }));
        if (w.sattrs != void 0) {
          var x = new l(w.sattrs);
          try {
            t2.push(new m({ tag: "a0", explicit: false, obj: x }));
          } catch (v) {
            throw new n("si sattr error: " + v);
          }
        }
        if (w.sigalgfield != void 0) {
          t2.push(new s({ name: w.sigalgfield }));
        } else {
          t2.push(new s({ name: w.sigalg }));
        }
        if (w.sighex == void 0 && w.signkey != void 0) {
          this.sign();
        }
        t2.push(new f({ hex: w.sighex }));
        if (w.uattrs != void 0) {
          var x = new l(w.uattrs);
          try {
            t2.push(new m({ tag: "a1", explicit: false, obj: x }));
          } catch (v) {
            throw new n("si uattr error: " + v);
          }
        }
        var u = new h({ array: t2 });
        return u.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (q != void 0) {
        this.setByParam(q);
      }
    };
    extendClass(KJUR2.asn1.cms.SignerInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.EncapsulatedContentInfo = function(g) {
      var c = KJUR2, b = c.asn1, e = b.DERTaggedObject, a = b.DERSequence, h = b.DERObjectIdentifier, d = b.DEROctetString, f = b.cms;
      f.EncapsulatedContentInfo.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var m = this.params;
        var i = [];
        i.push(new h(m.type));
        if (m.content != void 0 && (m.content.hex != void 0 || m.content.str != void 0) && m.isDetached != true) {
          var k = new d(m.content);
          var l = new e({ tag: "a0", explicit: true, obj: k });
          i.push(l);
        }
        var j = new a({ array: i });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(i) {
        this.params = i;
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.cms.EncapsulatedContentInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.ContentInfo = function(g) {
      var c = KJUR2, b = c.asn1, d = b.DERTaggedObject, a = b.DERSequence, h = b.DERObjectIdentifier, f = b.x509, e = f.OID.name2obj;
      KJUR2.asn1.cms.ContentInfo.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var l = this.params;
        var i = [];
        i.push(new h(l.type));
        var k = new d({ tag: "a0", explicit: true, obj: l.obj });
        i.push(k);
        var j = new a({ array: i });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(i) {
        this.params = i;
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.cms.ContentInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.SignedData = function(e) {
      var j = Error, a = KJUR2, h = a.asn1, m = h.ASN1Object, g = h.DERInteger, p = h.DERSet, f = h.DERSequence, b = h.DERTaggedObject, o = h.cms, l = o.EncapsulatedContentInfo, d = o.SignerInfo, q = o.ContentInfo, k = o.CertificateSet, i = o.RevocationInfoChoices, c = h.x509, n = c.AlgorithmIdentifier;
      KJUR2.asn1.cms.SignedData.superclass.constructor.call(this);
      this.params = null;
      this.checkAndFixParam = function() {
        var r = this.params;
        this._setDigestAlgs(r);
        this._setContentTypeByEContent(r);
        this._setMessageDigestByEContent(r);
        this._setSignerInfoVersion(r);
        this._setSignedDataVersion(r);
      };
      this._setDigestAlgs = function(v) {
        var u = {};
        var t2 = v.sinfos;
        for (var r = 0; r < t2.length; r++) {
          var s = t2[r];
          u[s.hashalg] = 1;
        }
        v.hashalgs = Object.keys(u).sort();
      };
      this._setContentTypeByEContent = function(w) {
        var u = w.econtent.type;
        var v = w.sinfos;
        for (var r = 0; r < v.length; r++) {
          var t2 = v[r];
          var s = this._getAttrParamByName(t2, "contentType");
          s.type = u;
        }
      };
      this._setMessageDigestByEContent = function(r) {
        var v = r.econtent;
        var y = r.econtent.type;
        var x = v.content.hex;
        if (x == void 0 && v.type == "data" && v.content.str != void 0) {
          x = rstrtohex(v.content.str);
        }
        var A = r.sinfos;
        for (var u = 0; u < A.length; u++) {
          var t2 = A[u];
          var s = t2.hashalg;
          var z2 = this._getAttrParamByName(t2, "messageDigest");
          var w = KJUR2.crypto.Util.hashHex(x, s);
          z2.hex = w;
        }
      };
      this._getAttrParamByName = function(t2, s) {
        var u = t2.sattrs.array;
        for (var r = 0; r < u.length; r++) {
          if (u[r].attr == s) {
            return u[r];
          }
        }
      };
      this._setSignerInfoVersion = function(v) {
        var t2 = v.sinfos;
        for (var r = 0; r < t2.length; r++) {
          var s = t2[r];
          var u = 1;
          if (s.id.type == "skid") {
            u = 3;
          }
          s.version = u;
        }
      };
      this._setSignedDataVersion = function(s) {
        var r = this._getSignedDataVersion(s);
        s.version = r;
      };
      this._getSignedDataVersion = function(w) {
        if (w.revinfos != void 0) {
          var r = w.revinfos;
          for (var t2 = 0; t2 < r.length; t2++) {
            var s = r[t2];
            if (s.ocsp != void 0) {
              return 5;
            }
          }
        }
        var v = w.sinfos;
        for (var t2 = 0; t2 < v.length; t2++) {
          var u = w.sinfos[t2];
          if (u.version == 3) {
            return 3;
          }
        }
        if (w.econtent.type != "data") {
          return 3;
        }
        return 1;
      };
      this.tohex = function() {
        var y = this.params;
        if (this.getEncodedHexPrepare != void 0) {
          this.getEncodedHexPrepare();
        }
        if (y.fixed != true) {
          this.checkAndFixParam();
        }
        var r = [];
        r.push(new g({ "int": y.version }));
        var w = [];
        for (var v = 0; v < y.hashalgs.length; v++) {
          var t2 = y.hashalgs[v];
          w.push(new n({ name: t2 }));
        }
        r.push(new p({ array: w }));
        r.push(new l(y.econtent));
        if (y.certs != void 0) {
          r.push(new k(y.certs));
        }
        if (y.revinfos != void 0) {
          r.push(new i(y.revinfos));
        }
        var u = [];
        for (var v = 0; v < y.sinfos.length; v++) {
          var x = y.sinfos[v];
          u.push(new d(x));
        }
        r.push(new p({ array: u }));
        var s = new f({ array: r });
        return s.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.getContentInfo = function() {
        var r = new q({ type: "signed-data", obj: this });
        return r;
      };
      this.getContentInfoEncodedHex = function() {
        return this.getContentInfo().tohex();
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cms.SignedData, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.CertificateSet = function(f) {
      KJUR2.asn1.cms.CertificateSet.superclass.constructor.call(this);
      var c = Error, b = KJUR2.asn1, e = b.DERTaggedObject, a = b.DERSet, d = b.ASN1Object;
      this.params = null;
      this.tohex = function() {
        var j = this.params;
        var p = [];
        var q;
        if (j instanceof Array) {
          q = j;
        } else {
          if (j.array != void 0) {
            q = j.array;
          } else {
            throw new c("cert array not specified");
          }
        }
        for (var k = 0; k < q.length; k++) {
          var l = q[k];
          var n = pemtohex(l);
          var g = new d();
          g.hTLV = n;
          p.push(g);
        }
        var m = { array: p };
        if (j.sortflag == false) {
          m.sortflag = false;
        }
        var o = new a(m);
        var h = new e({ tag: "a0", explicit: false, obj: o });
        return h.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.cms.CertificateSet, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.RevocationInfoChoices = function(a) {
      KJUR2.asn1.cms.RevocationInfoChoices.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var e = this.params;
        if (!e instanceof Array) {
          throw new Error("params is not array");
        }
        var b = [];
        for (var c = 0; c < e.length; c++) {
          b.push(new KJUR2.asn1.cms.RevocationInfoChoice(e[c]));
        }
        var d = KJUR2.asn1.ASN1Util.newObject({ tag: { tagi: "a1", obj: { set: b } } });
        return d.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (a != void 0) {
        this.setByParam(a);
      }
    };
    extendClass(KJUR2.asn1.cms.RevocationInfoChoices, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.RevocationInfoChoice = function(a) {
      KJUR2.asn1.cms.RevocationInfoChoice.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var d = this.params;
        if (d.crl != void 0 && typeof d.crl == "string") {
          var b = d.crl;
          if (d.crl.indexOf("-----BEGIN") != -1) {
            b = pemtohex(d.crl);
          }
          return b;
        } else {
          if (d.ocsp != void 0) {
            var c = KJUR2.asn1.ASN1Util.newObject({ tag: { tagi: "a1", obj: new KJUR2.asn1.cms.OtherRevocationFormat(d) } });
            return c.tohex();
          } else {
            throw new Error("property crl or ocsp undefined");
          }
        }
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (a != void 0) {
        this.setByParam(a);
      }
    };
    extendClass(KJUR2.asn1.cms.RevocationInfoChoice, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.OtherRevocationFormat = function(f) {
      KJUR2.asn1.cms.OtherRevocationFormat.superclass.constructor.call(this);
      var d = Error, c = KJUR2, b = c.asn1, a = b.ASN1Util.newObject, e = c.lang.String.isHex;
      this.params = null;
      this.tohex = function() {
        var h = this.params;
        if (h.ocsp == void 0) {
          throw new d("property ocsp not specified");
        }
        if (!e(h.ocsp) || !ASN1HEX.isASN1HEX(h.ocsp)) {
          throw new d("ocsp value not ASN.1 hex string");
        }
        var g = a({ seq: [{ oid: "1.3.6.1.5.5.7.16.2" }, { asn1: { tlv: h.ocsp } }] });
        return g.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.cms.OtherRevocationFormat, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cms.CMSUtil = new function() {
    }();
    KJUR2.asn1.cms.CMSUtil.newSignedData = function(a) {
      return new KJUR2.asn1.cms.SignedData(a);
    };
    KJUR2.asn1.cms.CMSUtil.verifySignedData = function(n) {
      var C = KJUR2, p = C.asn1, s = p.cms, D = s.SignerInfo, q = s.SignedData, y = s.SigningTime, b = s.SigningCertificate, d = s.SigningCertificateV2, A = p.cades, u = A.SignaturePolicyIdentifier, i = C.lang.String.isHex, v = ASN1HEX, h = v.getVbyList, a = v.getTLVbyList, t2 = v.getIdxbyList, z2 = v.getChildIdx, c = v.getTLV, B = v.oidname, j = C.crypto.Util.hashHex;
      if (n.cms === void 0 && !i(n.cms)) {
      }
      var E = n.cms;
      var g = function(J, H) {
        var G;
        for (var I = 3; I < 6; I++) {
          G = t2(J, 0, [1, 0, I]);
          if (G !== void 0) {
            var F = J.substr(G, 2);
            if (F === "a0") {
              H.certsIdx = G;
            }
            if (F === "a1") {
              H.revinfosIdx = G;
            }
            if (F === "31") {
              H.signerinfosIdx = G;
            }
          }
        }
      };
      var l = function(I, F) {
        var H = F.signerinfosIdx;
        if (H === void 0) {
          return;
        }
        var L = z2(I, H);
        F.signerInfoIdxList = L;
        for (var G = 0; G < L.length; G++) {
          var K = L[G];
          var J = { idx: K };
          k(I, J);
          F.signerInfos.push(J);
        }
      };
      var k = function(I, J) {
        var F = J.idx;
        J.signerid_issuer1 = a(I, F, [1, 0], "30");
        J.signerid_serial1 = h(I, F, [1, 1], "02");
        J.hashalg = B(h(I, F, [2, 0], "06"));
        var H = t2(I, F, [3], "a0");
        J.idxSignedAttrs = H;
        f(I, J, H);
        var G = z2(I, F);
        var K = G.length;
        if (K < 6) {
          throw "malformed SignerInfo";
        }
        J.sigalg = B(h(I, F, [K - 2, 0], "06"));
        J.sigval = h(I, F, [K - 1], "04");
      };
      var f = function(L, M, F) {
        var J = z2(L, F);
        M.signedAttrIdxList = J;
        for (var K = 0; K < J.length; K++) {
          var I = J[K];
          var G = h(L, I, [0], "06");
          var H;
          if (G === "2a864886f70d010905") {
            H = hextoutf8(h(L, I, [1, 0]));
            M.saSigningTime = H;
          } else {
            if (G === "2a864886f70d010904") {
              H = h(L, I, [1, 0], "04");
              M.saMessageDigest = H;
            }
          }
        }
      };
      var w = function(G, F) {
        if (h(G, 0, [0], "06") !== "2a864886f70d010702") {
          return F;
        }
        F.cmsType = "signedData";
        F.econtent = h(G, 0, [1, 0, 2, 1, 0]);
        g(G, F);
        F.signerInfos = [];
        l(G, F);
      };
      var o = function(J, F) {
        var G = F.parse.signerInfos;
        var L = G.length;
        var K = true;
        for (var I = 0; I < L; I++) {
          var H = G[I];
          e(J, F, H, I);
          if (!H.isValid) {
            K = false;
          }
        }
        F.isValid = K;
      };
      var x = function(F, Q, J, P) {
        var N = Q.parse.certsIdx;
        var H;
        if (Q.certs === void 0) {
          H = [];
          Q.certkeys = [];
          var K = z2(F, N);
          for (var I = 0; I < K.length; I++) {
            var M = c(F, K[I]);
            var O = new X509();
            O.readCertHex(M);
            H[I] = O;
            Q.certkeys[I] = O.getPublicKey();
          }
          Q.certs = H;
        } else {
          H = Q.certs;
        }
        Q.cccc = H.length;
        Q.cccci = K.length;
        for (var I = 0; I < H.length; I++) {
          var L = O.getIssuerHex();
          var G = O.getSerialNumberHex();
          if (J.signerid_issuer1 === L && J.signerid_serial1 === G) {
            J.certkey_idx = I;
          }
        }
      };
      var e = function(F, R, I, N) {
        I.verifyDetail = {};
        var Q = I.verifyDetail;
        var K = R.parse.econtent;
        var G = I.hashalg;
        var L = I.saMessageDigest;
        Q.validMessageDigest = false;
        if (j(K, G) === L) {
          Q.validMessageDigest = true;
        }
        x(F, R, I, N);
        Q.validSignatureValue = false;
        var H = I.sigalg;
        var M = "31" + c(F, I.idxSignedAttrs).substr(2);
        I.signedattrshex = M;
        var J = R.certs[I.certkey_idx].getPublicKey();
        var P = new KJUR2.crypto.Signature({ alg: H });
        P.init(J);
        P.updateHex(M);
        var O = P.verify(I.sigval);
        Q.validSignatureValue_isValid = O;
        if (O === true) {
          Q.validSignatureValue = true;
        }
        I.isValid = false;
        if (Q.validMessageDigest && Q.validSignatureValue) {
          I.isValid = true;
        }
      };
      var m = function() {
      };
      var r = { isValid: false, parse: {} };
      w(E, r.parse);
      o(E, r);
      return r;
    };
    KJUR2.asn1.cms.CMSParser = function() {
      var g = Error, a = X509, h = new a(), l = ASN1HEX, i = l.getV, b = l.getTLV, f = l.getIdxbyList, c = l.getTLVbyList, d = l.getTLVbyListEx, e = l.getVbyList, k = l.getVbyListEx, j = l.getChildIdx;
      this.getCMSSignedData = function(m) {
        var o = c(m, 0, [1, 0]);
        var n = this.getSignedData(o);
        return n;
      };
      this.getSignedData = function(o) {
        var q = j(o, 0);
        var v = {};
        var p = i(o, q[0]);
        var n = parseInt(p, 16);
        v.version = n;
        var r = b(o, q[1]);
        v.hashalgs = this.getHashAlgArray(r);
        var t2 = b(o, q[2]);
        v.econtent = this.getEContent(t2);
        var m = d(o, 0, ["[0]"]);
        if (m != null) {
          v.certs = this.getCertificateSet(m);
        }
        var u = d(o, 0, ["[1]"]);
        if (u != null) {
        }
        var s = d(o, 0, [3]);
        v.sinfos = this.getSignerInfos(s);
        return v;
      };
      this.getHashAlgArray = function(s) {
        var q = j(s, 0);
        var m = new a();
        var n = [];
        for (var r = 0; r < q.length; r++) {
          var p = b(s, q[r]);
          var o = m.getAlgorithmIdentifierName(p);
          n.push(o);
        }
        return n;
      };
      this.getEContent = function(m) {
        var n = {};
        var p = e(m, 0, [0]);
        var o = e(m, 0, [1, 0]);
        n.type = KJUR2.asn1.x509.OID.oid2name(ASN1HEX.hextooidstr(p));
        n.content = { hex: o };
        return n;
      };
      this.getSignerInfos = function(p) {
        var r = [];
        var m = j(p, 0);
        for (var n = 0; n < m.length; n++) {
          var o = b(p, m[n]);
          var q = this.getSignerInfo(o);
          r.push(q);
        }
        return r;
      };
      this.getSignerInfo = function(s) {
        var y = {};
        var u = j(s, 0);
        var q = l.getInt(s, u[0], -1);
        if (q != -1) {
          y.version = q;
        }
        var t2 = b(s, u[1]);
        var p = this.getIssuerAndSerialNumber(t2);
        y.id = p;
        var z2 = b(s, u[2]);
        var n = h.getAlgorithmIdentifierName(z2);
        y.hashalg = n;
        var w = d(s, 0, ["[0]"]);
        if (w != null) {
          var A = this.getAttributeList(w);
          y.sattrs = A;
        }
        var m = d(s, 0, [3]);
        var x = h.getAlgorithmIdentifierName(m);
        y.sigalg = x;
        var o = k(s, 0, [4]);
        y.sighex = o;
        var r = d(s, 0, ["[1]"]);
        if (r != null) {
          var v = this.getAttributeList(r);
          y.uattrs = v;
        }
        return y;
      };
      this.getSignerIdentifier = function(m) {
        if (m.substr(0, 2) == "30") {
          return this.getIssuerAndSerialNumber(m);
        } else {
          throw new Error("SKID of signerIdentifier not supported");
        }
      };
      this.getIssuerAndSerialNumber = function(n) {
        var o = { type: "isssn" };
        var m = j(n, 0);
        var p = b(n, m[0]);
        o.issuer = h.getX500Name(p);
        var q = i(n, m[1]);
        o.serial = { hex: q };
        return o;
      };
      this.getAttributeList = function(q) {
        var m = [];
        var n = j(q, 0);
        for (var o = 0; o < n.length; o++) {
          var p = b(q, n[o]);
          var r = this.getAttribute(p);
          m.push(r);
        }
        return { array: m };
      };
      this.getAttribute = function(p) {
        var t2 = {};
        var q = j(p, 0);
        var o = l.getOID(p, q[0]);
        var m = KJUR2.asn1.x509.OID.oid2name(o);
        t2.attr = m;
        var r = b(p, q[1]);
        var u = j(r, 0);
        if (u.length == 1) {
          t2.valhex = b(r, u[0]);
        } else {
          var s = [];
          for (var n = 0; n < u.length; n++) {
            s.push(b(r, u[n]));
          }
          t2.valhex = s;
        }
        if (m == "contentType") {
          this.setContentType(t2);
        } else {
          if (m == "messageDigest") {
            this.setMessageDigest(t2);
          } else {
            if (m == "signingTime") {
              this.setSigningTime(t2);
            } else {
              if (m == "signingCertificate") {
                this.setSigningCertificate(t2);
              } else {
                if (m == "signingCertificateV2") {
                  this.setSigningCertificateV2(t2);
                } else {
                  if (m == "signaturePolicyIdentifier") {
                    this.setSignaturePolicyIdentifier(t2);
                  }
                }
              }
            }
          }
        }
        return t2;
      };
      this.setContentType = function(m) {
        var n = l.getOIDName(m.valhex, 0, null);
        if (n != null) {
          m.type = n;
          delete m.valhex;
        }
      };
      this.setSigningTime = function(o) {
        var n = i(o.valhex, 0);
        var m = hextoutf8(n);
        o.str = m;
        delete o.valhex;
      };
      this.setMessageDigest = function(m) {
        var n = i(m.valhex, 0);
        m.hex = n;
        delete m.valhex;
      };
      this.setSigningCertificate = function(n) {
        var q = j(n.valhex, 0);
        if (q.length > 0) {
          var m = b(n.valhex, q[0]);
          var p = j(m, 0);
          var t2 = [];
          for (var o = 0; o < p.length; o++) {
            var s = b(m, p[o]);
            var u = this.getESSCertID(s);
            t2.push(u);
          }
          n.array = t2;
        }
        if (q.length > 1) {
          var r = b(n.valhex, q[1]);
          n.polhex = r;
        }
        delete n.valhex;
      };
      this.setSignaturePolicyIdentifier = function(s) {
        var q = j(s.valhex, 0);
        if (q.length > 0) {
          var r = l.getOID(s.valhex, q[0]);
          s.oid = r;
        }
        if (q.length > 1) {
          var m = new a();
          var t2 = j(s.valhex, q[1]);
          var p = b(s.valhex, t2[0]);
          var o = m.getAlgorithmIdentifierName(p);
          s.alg = o;
          var n = i(s.valhex, t2[1]);
          s.hash = n;
        }
        delete s.valhex;
      };
      this.setSigningCertificateV2 = function(o) {
        var s = j(o.valhex, 0);
        if (s.length > 0) {
          var n = b(o.valhex, s[0]);
          var r = j(n, 0);
          var u = [];
          for (var q = 0; q < r.length; q++) {
            var m = b(n, r[q]);
            var p = this.getESSCertIDv2(m);
            u.push(p);
          }
          o.array = u;
        }
        if (s.length > 1) {
          var t2 = b(o.valhex, s[1]);
          o.polhex = t2;
        }
        delete o.valhex;
      };
      this.getESSCertID = function(o) {
        var p = {};
        var n = j(o, 0);
        if (n.length > 0) {
          var q = i(o, n[0]);
          p.hash = q;
        }
        if (n.length > 1) {
          var m = b(o, n[1]);
          var r = this.getIssuerSerial(m);
          if (r.serial != void 0) {
            p.serial = r.serial;
          }
          if (r.issuer != void 0) {
            p.issuer = r.issuer;
          }
        }
        return p;
      };
      this.getESSCertIDv2 = function(q) {
        var s = {};
        var p = j(q, 0);
        if (p.length < 1 || 3 < p.length) {
          throw new g("wrong number of elements");
        }
        var r = 0;
        if (q.substr(p[0], 2) == "30") {
          var o = b(q, p[0]);
          s.alg = h.getAlgorithmIdentifierName(o);
          r++;
        } else {
          s.alg = "sha256";
        }
        var n = i(q, p[r]);
        s.hash = n;
        if (p.length > r + 1) {
          var m = b(q, p[r + 1]);
          var t2 = this.getIssuerSerial(m);
          s.issuer = t2.issuer;
          s.serial = t2.serial;
        }
        return s;
      };
      this.getIssuerSerial = function(q) {
        var r = {};
        var n = j(q, 0);
        var m = b(q, n[0]);
        var p = h.getGeneralNames(m);
        var o = p[0].dn;
        r.issuer = o;
        var s = i(q, n[1]);
        r.serial = { hex: s };
        return r;
      };
      this.getCertificateSet = function(p) {
        var n = j(p, 0);
        var m = [];
        for (var o = 0; o < n.length; o++) {
          var r = b(p, n[o]);
          if (r.substr(0, 2) == "30") {
            var q = hextopem(r, "CERTIFICATE");
            m.push(q);
          }
        }
        return { array: m, sortflag: false };
      };
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.asn1 == "undefined" || !KJUR2.asn1) {
      KJUR2.asn1 = {};
    }
    if (typeof KJUR2.asn1.tsp == "undefined" || !KJUR2.asn1.tsp) {
      KJUR2.asn1.tsp = {};
    }
    KJUR2.asn1.tsp.TimeStampToken = function(d) {
      var c = KJUR2, b = c.asn1, a = b.tsp;
      a.TimeStampToken.superclass.constructor.call(this);
      this.params = null;
      this.getEncodedHexPrepare = function() {
        var e = new a.TSTInfo(this.params.econtent.content);
        this.params.econtent.content.hex = e.tohex();
      };
      if (d != void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.tsp.TimeStampToken, KJUR2.asn1.cms.SignedData);
    KJUR2.asn1.tsp.TSTInfo = function(f) {
      var m = Error, c = KJUR2, j = c.asn1, g = j.DERSequence, i = j.DERInteger, l = j.DERBoolean, h = j.DERGeneralizedTime, n = j.DERObjectIdentifier, e = j.DERTaggedObject, k = j.tsp, d = k.MessageImprint, b = k.Accuracy, a = j.x509.X500Name, o = j.x509.GeneralName;
      k.TSTInfo.superclass.constructor.call(this);
      this.dVersion = new i({ "int": 1 });
      this.dPolicy = null;
      this.dMessageImprint = null;
      this.dSerial = null;
      this.dGenTime = null;
      this.dAccuracy = null;
      this.dOrdering = null;
      this.dNonce = null;
      this.dTsa = null;
      this.tohex = function() {
        var p = [this.dVersion];
        if (this.dPolicy == null) {
          throw new Error("policy shall be specified.");
        }
        p.push(this.dPolicy);
        if (this.dMessageImprint == null) {
          throw new Error("messageImprint shall be specified.");
        }
        p.push(this.dMessageImprint);
        if (this.dSerial == null) {
          throw new Error("serialNumber shall be specified.");
        }
        p.push(this.dSerial);
        if (this.dGenTime == null) {
          throw new Error("genTime shall be specified.");
        }
        p.push(this.dGenTime);
        if (this.dAccuracy != null) {
          p.push(this.dAccuracy);
        }
        if (this.dOrdering != null) {
          p.push(this.dOrdering);
        }
        if (this.dNonce != null) {
          p.push(this.dNonce);
        }
        if (this.dTsa != null) {
          p.push(this.dTsa);
        }
        var q = new g({ array: p });
        this.hTLV = q.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f !== void 0) {
        if (typeof f.policy == "string") {
          if (!f.policy.match(/^[0-9.]+$/)) {
            throw "policy shall be oid like 0.1.4.134";
          }
          this.dPolicy = new n({ oid: f.policy });
        }
        if (f.messageImprint !== void 0) {
          this.dMessageImprint = new d(f.messageImprint);
        }
        if (f.serial !== void 0) {
          this.dSerial = new i(f.serial);
        }
        if (f.genTime !== void 0) {
          this.dGenTime = new h(f.genTime);
        }
        if (f.accuracy !== void 0) {
          this.dAccuracy = new b(f.accuracy);
        }
        if (f.ordering !== void 0 && f.ordering == true) {
          this.dOrdering = new l();
        }
        if (f.nonce !== void 0) {
          this.dNonce = new i(f.nonce);
        }
        if (f.tsa !== void 0) {
          this.dTsa = new e({ tag: "a0", explicit: true, obj: new o({ dn: f.tsa }) });
        }
      }
    };
    extendClass(KJUR2.asn1.tsp.TSTInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.Accuracy = function(d) {
      var c = KJUR2, b = c.asn1, a = b.ASN1Util.newObject;
      b.tsp.Accuracy.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var f = this.params;
        var e = [];
        if (f.seconds != void 0 && typeof f.seconds == "number") {
          e.push({ "int": f.seconds });
        }
        if (f.millis != void 0 && typeof f.millis == "number") {
          e.push({ tag: { tagi: "80", obj: { "int": f.millis } } });
        }
        if (f.micros != void 0 && typeof f.micros == "number") {
          e.push({ tag: { tagi: "81", obj: { "int": f.micros } } });
        }
        return a({ seq: e }).tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (d != void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.tsp.Accuracy, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.MessageImprint = function(g) {
      var c = KJUR2, b = c.asn1, a = b.DERSequence, d = b.DEROctetString, f = b.x509, e = f.AlgorithmIdentifier;
      b.tsp.MessageImprint.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var k = this.params;
        var j = new e({ name: k.alg });
        var h = new d({ hex: k.hash });
        var i = new a({ array: [j, h] });
        return i.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g !== void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.tsp.MessageImprint, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.TimeStampReq = function(c) {
      var a = KJUR2, f = a.asn1, d = f.DERSequence, e = f.DERInteger, h = f.DERBoolean, j = f.ASN1Object, i = f.DERObjectIdentifier, g = f.tsp, b = g.MessageImprint;
      g.TimeStampReq.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var m = this.params;
        var k = [];
        k.push(new e({ "int": 1 }));
        if (m.messageImprint instanceof KJUR2.asn1.ASN1Object) {
          k.push(m.messageImprint);
        } else {
          k.push(new b(m.messageImprint));
        }
        if (m.policy != void 0) {
          k.push(new i(m.policy));
        }
        if (m.nonce != void 0) {
          k.push(new e(m.nonce));
        }
        if (m.certreq == true) {
          k.push(new h());
        }
        var l = new d({ array: k });
        return l.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (c != void 0) {
        this.setByParam(c);
      }
    };
    extendClass(KJUR2.asn1.tsp.TimeStampReq, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.TimeStampResp = function(g) {
      var e = KJUR2, d = e.asn1, c = d.DERSequence, f = d.ASN1Object, a = d.tsp, b = a.PKIStatusInfo;
      a.TimeStampResp.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var j = this.params;
        var h = [];
        if (j.econtent != void 0 || j.tst != void 0) {
          if (j.statusinfo != void 0) {
            h.push(new b(j.statusinfo));
          } else {
            h.push(new b("granted"));
          }
          if (j.econtent != void 0) {
            h.push(new a.TimeStampToken(j).getContentInfo());
          } else {
            if (j.tst instanceof d.ASN1Object) {
              h.push(j.tst);
            } else {
              throw new Error("improper member tst value");
            }
          }
        } else {
          if (j.statusinfo != void 0) {
            h.push(new b(j.statusinfo));
          } else {
            throw new Error("parameter for token nor statusinfo not specified");
          }
        }
        var i = new c({ array: h });
        return i.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.tsp.TimeStampResp, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.PKIStatusInfo = function(d) {
      var h = Error, a = KJUR2, g = a.asn1, e = g.DERSequence, i = g.tsp, f = i.PKIStatus, c = i.PKIFreeText, b = i.PKIFailureInfo;
      i.PKIStatusInfo.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var l = this.params;
        var j = [];
        if (typeof l == "string") {
          j.push(new f(l));
        } else {
          if (l.status == void 0) {
            throw new h("property 'status' unspecified");
          }
          j.push(new f(l.status));
          if (l.statusstr != void 0) {
            j.push(new c(l.statusstr));
          }
          if (l.failinfo != void 0) {
            j.push(new b(l.failinfo));
          }
        }
        var k = new e({ array: j });
        return k.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (d != void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.tsp.PKIStatusInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.PKIStatus = function(g) {
      var e = Error, d = KJUR2, c = d.asn1, f = c.DERInteger, b = c.tsp;
      b.PKIStatus.superclass.constructor.call(this);
      var a = { granted: 0, grantedWithMods: 1, rejection: 2, waiting: 3, revocationWarning: 4, revocationNotification: 5 };
      this.params = null;
      this.tohex = function() {
        var k = this.params;
        var h, j;
        if (typeof k == "string") {
          try {
            j = a[k];
          } catch (i) {
            throw new e("undefined name: " + k);
          }
        } else {
          if (typeof k == "number") {
            j = k;
          } else {
            throw new e("unsupported params");
          }
        }
        return new f({ "int": j }).tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.tsp.PKIStatus, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.PKIFreeText = function(g) {
      var f = Error, e = KJUR2, d = e.asn1, b = d.DERSequence, c = d.DERUTF8String, a = d.tsp;
      a.PKIFreeText.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var l = this.params;
        if (!l instanceof Array) {
          throw new f("wrong params: not array");
        }
        var h = [];
        for (var k = 0; k < l.length; k++) {
          h.push(new c({ str: l[k] }));
        }
        var j = new b({ array: h });
        return j.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.tsp.PKIFreeText, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.PKIFailureInfo = function(h) {
      var f = Error, e = KJUR2, d = e.asn1, g = d.DERBitString, b = d.tsp, c = b.PKIFailureInfo;
      var a = { badAlg: 0, badRequest: 2, badDataFormat: 5, timeNotAvailable: 14, unacceptedPolicy: 15, unacceptedExtension: 16, addInfoNotAvailable: 17, systemFailure: 25 };
      c.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var k = this.params;
        var j;
        if (typeof k == "string") {
          try {
            j = a[k];
          } catch (i) {
            throw new f("undefined name: " + k);
          }
        } else {
          if (typeof k == "number") {
            j = k;
          } else {
            throw new f("wrong params");
          }
        }
        return new g({ bin: j.toString(2) }).tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (h != void 0) {
        this.setByParam(h);
      }
    };
    extendClass(KJUR2.asn1.tsp.PKIFailureInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.tsp.AbstractTSAAdapter = function(a) {
      this.getTSTHex = function(c, b) {
        throw "not implemented yet";
      };
    };
    KJUR2.asn1.tsp.SimpleTSAAdapter = function(e) {
      var d = KJUR2, c = d.asn1, a = c.tsp, b = d.crypto.Util.hashHex;
      a.SimpleTSAAdapter.superclass.constructor.call(this);
      this.params = null;
      this.serial = 0;
      this.getTSTHex = function(g, f) {
        var i = b(g, f);
        this.params.econtent.content.messageImprint = { alg: f, hash: i };
        this.params.econtent.content.serial = { "int": this.serial++ };
        var h = Math.floor(Math.random() * 1e9);
        this.params.econtent.content.nonce = { "int": h };
        var j = new a.TimeStampToken(this.params);
        return j.getContentInfoEncodedHex();
      };
      if (e !== void 0) {
        this.params = e;
      }
    };
    extendClass(KJUR2.asn1.tsp.SimpleTSAAdapter, KJUR2.asn1.tsp.AbstractTSAAdapter);
    KJUR2.asn1.tsp.FixedTSAAdapter = function(e) {
      var d = KJUR2, c = d.asn1, a = c.tsp, b = d.crypto.Util.hashHex;
      a.FixedTSAAdapter.superclass.constructor.call(this);
      this.params = null;
      this.getTSTHex = function(g, f) {
        var h = b(g, f);
        this.params.econtent.content.messageImprint = { alg: f, hash: h };
        var i = new a.TimeStampToken(this.params);
        return i.getContentInfoEncodedHex();
      };
      if (e !== void 0) {
        this.params = e;
      }
    };
    extendClass(KJUR2.asn1.tsp.FixedTSAAdapter, KJUR2.asn1.tsp.AbstractTSAAdapter);
    KJUR2.asn1.tsp.TSPUtil = new function() {
    }();
    KJUR2.asn1.tsp.TSPUtil.newTimeStampToken = function(a) {
      return new KJUR2.asn1.tsp.TimeStampToken(a);
    };
    KJUR2.asn1.tsp.TSPUtil.parseTimeStampReq = function(a) {
      var b = new KJUR2.asn1.tsp.TSPParser();
      return b.getTimeStampReq(a);
    };
    KJUR2.asn1.tsp.TSPUtil.parseMessageImprint = function(a) {
      var b = new KJUR2.asn1.tsp.TSPParser();
      return b.getMessageImprint(a);
    };
    KJUR2.asn1.tsp.TSPParser = function() {
      var e = Error, a = X509, f = new a(), k = ASN1HEX, g = k.getV, b = k.getTLV, d = k.getIdxbyList, c = k.getTLVbyListEx, i = k.getChildIdx;
      var j = ["granted", "grantedWithMods", "rejection", "waiting", "revocationWarning", "revocationNotification"];
      var h = { 0: "badAlg", 2: "badRequest", 5: "badDataFormat", 14: "timeNotAvailable", 15: "unacceptedPolicy", 16: "unacceptedExtension", 17: "addInfoNotAvailable", 25: "systemFailure" };
      this.getResponse = function(n) {
        var l = i(n, 0);
        if (l.length == 1) {
          return this.getPKIStatusInfo(b(n, l[0]));
        } else {
          if (l.length > 1) {
            var o = this.getPKIStatusInfo(b(n, l[0]));
            var m = b(n, l[1]);
            var p = this.getToken(m);
            p.statusinfo = o;
            return p;
          }
        }
      };
      this.getToken = function(m) {
        var l = new KJUR2.asn1.cms.CMSParser();
        var n = l.getCMSSignedData(m);
        this.setTSTInfo(n);
        return n;
      };
      this.setTSTInfo = function(l) {
        var o = l.econtent;
        if (o.type == "tstinfo") {
          var n = o.content.hex;
          var m = this.getTSTInfo(n);
          o.content = m;
        }
      };
      this.getTSTInfo = function(r) {
        var x = {};
        var s = i(r, 0);
        var p = g(r, s[1]);
        x.policy = hextooid(p);
        var o = b(r, s[2]);
        x.messageImprint = this.getMessageImprint(o);
        var u = g(r, s[3]);
        x.serial = { hex: u };
        var y = g(r, s[4]);
        x.genTime = { str: hextoutf8(y) };
        var q = 0;
        if (s.length > 5 && r.substr(s[5], 2) == "30") {
          var v = b(r, s[5]);
          x.accuracy = this.getAccuracy(v);
          q++;
        }
        if (s.length > 5 + q && r.substr(s[5 + q], 2) == "01") {
          var z2 = g(r, s[5 + q]);
          if (z2 == "ff") {
            x.ordering = true;
          }
          q++;
        }
        if (s.length > 5 + q && r.substr(s[5 + q], 2) == "02") {
          var n = g(r, s[5 + q]);
          x.nonce = { hex: n };
          q++;
        }
        if (s.length > 5 + q && r.substr(s[5 + q], 2) == "a0") {
          var m = b(r, s[5 + q]);
          m = "30" + m.substr(2);
          pGeneralNames = f.getGeneralNames(m);
          var t2 = pGeneralNames[0].dn;
          x.tsa = t2;
          q++;
        }
        if (s.length > 5 + q && r.substr(s[5 + q], 2) == "a1") {
          var l = b(r, s[5 + q]);
          l = "30" + l.substr(2);
          var w = f.getExtParamArray(l);
          x.ext = w;
          q++;
        }
        return x;
      };
      this.getAccuracy = function(q) {
        var r = {};
        var o = i(q, 0);
        for (var p = 0; p < o.length; p++) {
          var m = q.substr(o[p], 2);
          var l = g(q, o[p]);
          var n = parseInt(l, 16);
          if (m == "02") {
            r.seconds = n;
          } else {
            if (m == "80") {
              r.millis = n;
            } else {
              if (m == "81") {
                r.micros = n;
              }
            }
          }
        }
        return r;
      };
      this.getMessageImprint = function(n) {
        if (n.substr(0, 2) != "30") {
          throw new Error("head of messageImprint hex shall be x30");
        }
        var s = {};
        var l = i(n, 0);
        var t2 = d(n, 0, [0, 0]);
        var o = g(n, t2);
        var p = k.hextooidstr(o);
        var r = KJUR2.asn1.x509.OID.oid2name(p);
        if (r == "") {
          throw new Error("hashAlg name undefined: " + p);
        }
        var m = r;
        var q = d(n, 0, [1]);
        s.alg = m;
        s.hash = g(n, q);
        return s;
      };
      this.getPKIStatusInfo = function(o) {
        var t2 = {};
        var r = i(o, 0);
        var n = 0;
        try {
          var l = g(o, r[0]);
          var p = parseInt(l, 16);
          t2.status = j[p];
        } catch (s) {
        }
        if (r.length > 1 && o.substr(r[1], 2) == "30") {
          var m = b(o, r[1]);
          t2.statusstr = this.getPKIFreeText(m);
          n++;
        }
        if (r.length > n && o.substr(r[1 + n], 2) == "03") {
          var q = b(o, r[1 + n]);
          t2.failinfo = this.getPKIFailureInfo(q);
        }
        return t2;
      };
      this.getPKIFreeText = function(n) {
        var o = [];
        var l = i(n, 0);
        for (var m = 0; m < l.length; m++) {
          o.push(k.getString(n, l[m]));
        }
        return o;
      };
      this.getPKIFailureInfo = function(l) {
        var m = k.getInt(l, 0);
        if (h[m] != void 0) {
          return h[m];
        } else {
          return m;
        }
      };
      this.getTimeStampReq = function(q) {
        var p = {};
        p.certreq = false;
        var s = i(q, 0);
        if (s.length < 2) {
          throw new Error("TimeStampReq must have at least 2 items");
        }
        var n = b(q, s[1]);
        p.messageImprint = KJUR2.asn1.tsp.TSPUtil.parseMessageImprint(n);
        for (var o = 2; o < s.length; o++) {
          var m = s[o];
          var l = q.substr(m, 2);
          if (l == "06") {
            var r = g(q, m);
            p.policy = k.hextooidstr(r);
          }
          if (l == "02") {
            p.nonce = g(q, m);
          }
          if (l == "01") {
            p.certreq = true;
          }
        }
        return p;
      };
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.asn1 == "undefined" || !KJUR2.asn1) {
      KJUR2.asn1 = {};
    }
    if (typeof KJUR2.asn1.cades == "undefined" || !KJUR2.asn1.cades) {
      KJUR2.asn1.cades = {};
    }
    KJUR2.asn1.cades.SignaturePolicyIdentifier = function(e) {
      var c = KJUR2, b = c.asn1, a = b.cades, d = a.SignaturePolicyId;
      a.SignaturePolicyIdentifier.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.16.2.15";
      this.params = null;
      this.getValueArray = function() {
        return [new d(this.params)];
      };
      this.setByParam = function(f) {
        this.params = f;
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cades.SignaturePolicyIdentifier, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cades.SignaturePolicyId = function(e) {
      var a = KJUR2, g = a.asn1, f = g.DERSequence, i = g.DERObjectIdentifier, d = g.x509, j = d.AlgorithmIdentifier, c = g.cades, h = c.SignaturePolicyId, b = c.OtherHashAlgAndValue;
      h.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var m = this.params;
        var k = [];
        k.push(new i(m.oid));
        k.push(new b(m));
        var l = new f({ array: k });
        return l.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(k) {
        this.params = k;
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cades.SignaturePolicyId, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cades.OtherHashAlgAndValue = function(e) {
      var h = Error, a = KJUR2, g = a.asn1, f = g.DERSequence, i = g.DEROctetString, d = g.x509, j = d.AlgorithmIdentifier, c = g.cades, b = c.OtherHashAlgAndValue;
      b.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var o = this.params;
        if (o.alg == void 0) {
          throw new h("property 'alg' not specified");
        }
        if (o.hash == void 0 && o.cert == void 0) {
          throw new h("property 'hash' nor 'cert' not specified");
        }
        var m = null;
        if (o.hash != void 0) {
          m = o.hash;
        } else {
          if (o.cert != void 0) {
            if (typeof o.cert != "string") {
              throw new h("cert not string");
            }
            var n = o.cert;
            if (o.cert.indexOf("-----BEGIN") != -1) {
              n = pemtohex(o.cert);
            }
            m = KJUR2.crypto.Util.hashHex(n, o.alg);
          }
        }
        var k = [];
        k.push(new j({ name: o.alg }));
        k.push(new i({ hex: m }));
        var l = new f({ array: k });
        return l.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cades.OtherHashAlgAndValue, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cades.OtherHashValue = function(g) {
      KJUR2.asn1.cades.OtherHashValue.superclass.constructor.call(this);
      var d = Error, c = KJUR2, f = c.lang.String.isHex, b = c.asn1, e = b.DEROctetString, a = c.crypto.Util.hashHex;
      this.params = null;
      this.tohex = function() {
        var j = this.params;
        if (j.hash == void 0 && j.cert == void 0) {
          throw new d("hash or cert not specified");
        }
        var h = null;
        if (j.hash != void 0) {
          h = j.hash;
        } else {
          if (j.cert != void 0) {
            if (typeof j.cert != "string") {
              throw new d("cert not string");
            }
            var i = j.cert;
            if (j.cert.indexOf("-----BEGIN") != -1) {
              i = pemtohex(j.cert);
            }
            h = KJUR2.crypto.Util.hashHex(i, "sha1");
          }
        }
        return new e({ hex: h }).tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.cades.OtherHashValue, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cades.SignatureTimeStamp = function(h) {
      var d = Error, c = KJUR2, f = c.lang.String.isHex, b = c.asn1, e = b.ASN1Object, g = b.x509, a = b.cades;
      a.SignatureTimeStamp.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.16.2.14";
      this.params = null;
      this.getValueArray = function() {
        var l = this.params;
        if (l.tst != void 0) {
          if (f(l.tst)) {
            var j = new e();
            j.hTLV = l.tst;
            return [j];
          } else {
            if (l.tst instanceof e) {
              return [l.tst];
            } else {
              throw new d("params.tst has wrong value");
            }
          }
        } else {
          if (l.res != void 0) {
            var k = l.res;
            if (k instanceof e) {
              k = k.tohex();
            }
            if (typeof k != "string" || !f(k)) {
              throw new d("params.res has wrong value");
            }
            var i = ASN1HEX.getTLVbyList(k, 0, [1]);
            var j = new e();
            j.hTLV = l.tst;
            return [j];
          }
        }
      };
      if (h != null) {
        this.setByParam(h);
      }
    };
    extendClass(KJUR2.asn1.cades.SignatureTimeStamp, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cades.CompleteCertificateRefs = function(h) {
      var f = Error, e = KJUR2, d = e.asn1, b = d.DERSequence, c = d.cades, a = c.OtherCertID, g = e.lang.String.isHex;
      c.CompleteCertificateRefs.superclass.constructor.call(this);
      this.typeOid = "1.2.840.113549.1.9.16.2.21";
      this.params = null;
      this.getValueArray = function() {
        var o = this.params;
        var k = [];
        for (var m = 0; m < o.array.length; m++) {
          var n = o.array[m];
          if (typeof n == "string") {
            if (n.indexOf("-----BEGIN") != -1) {
              n = { cert: n };
            } else {
              if (g(n)) {
                n = { hash: n };
              } else {
                throw new f("unsupported value: " + n);
              }
            }
          }
          if (o.alg != void 0 && n.alg == void 0) {
            n.alg = o.alg;
          }
          if (o.hasis != void 0 && n.hasis == void 0) {
            n.hasis = o.hasis;
          }
          var j = new a(n);
          k.push(j);
        }
        var l = new b({ array: k });
        return [l];
      };
      if (h != void 0) {
        this.setByParam(h);
      }
    };
    extendClass(KJUR2.asn1.cades.CompleteCertificateRefs, KJUR2.asn1.cms.Attribute);
    KJUR2.asn1.cades.OtherCertID = function(e) {
      var a = KJUR2, h = a.asn1, f = h.DERSequence, i = h.cms, g = i.IssuerSerial, c = h.cades, d = c.OtherHashValue, b = c.OtherHashAlgAndValue;
      c.OtherCertID.superclass.constructor.call(this);
      this.params = e;
      this.tohex = function() {
        var n = this.params;
        if (typeof n == "string") {
          if (n.indexOf("-----BEGIN") != -1) {
            n = { cert: n };
          } else {
            if (_isHex(n)) {
              n = { hash: n };
            }
          }
        }
        var j = [];
        var m = null;
        if (n.alg != void 0) {
          m = new b(n);
        } else {
          m = new d(n);
        }
        j.push(m);
        if (n.cert != void 0 && n.hasis == true || n.issuer != void 0 && n.serial != void 0) {
          var l = new g(n);
          j.push(l);
        }
        var k = new f({ array: j });
        return k.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e != void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.cades.OtherCertID, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cades.OtherHash = function(g) {
      var i = Error, a = KJUR2, h = a.asn1, j = h.cms, c = h.cades, b = c.OtherHashAlgAndValue, e = c.OtherHashValue, d = a.crypto.Util.hashHex, f = a.lang.String.isHex;
      c.OtherHash.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var l = this.params;
        if (typeof l == "string") {
          if (l.indexOf("-----BEGIN") != -1) {
            l = { cert: l };
          } else {
            if (f(l)) {
              l = { hash: l };
            }
          }
        }
        var k = null;
        if (l.alg != void 0) {
          k = new b(l);
        } else {
          k = new e(l);
        }
        return k.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g != void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.cades.OtherHash, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.cades.CAdESUtil = new function() {
    }();
    KJUR2.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function(a) {
      var c = new KJUR2.asn1.cms.CMSParser();
      var b = c.getCMSSignedData(a);
      return b;
    };
    KJUR2.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function(g, q, c) {
      var p = ASN1HEX, s = p.getChildIdx, a = p.getTLV, l = p.getV, v = KJUR2, h = v.asn1, n = h.ASN1Object, j = h.cms, k = j.AttributeList, w = j.SignerInfo;
      var o = {};
      var t2 = s(g, q);
      if (t2.length != 6) {
        throw "not supported items for SignerInfo (!=6)";
      }
      var d = t2.shift();
      o.version = a(g, d);
      var e = t2.shift();
      o.si = a(g, e);
      var m = t2.shift();
      o.digalg = a(g, m);
      var f = t2.shift();
      o.sattrs = a(g, f);
      var i = t2.shift();
      o.sigalg = a(g, i);
      var b = t2.shift();
      o.sig = a(g, b);
      o.sigval = l(g, b);
      var u = null;
      o.obj = new w();
      u = new n();
      u.hTLV = o.version;
      o.obj.dCMSVersion = u;
      u = new n();
      u.hTLV = o.si;
      o.obj.dSignerIdentifier = u;
      u = new n();
      u.hTLV = o.digalg;
      o.obj.dDigestAlgorithm = u;
      u = new n();
      u.hTLV = o.sattrs;
      o.obj.dSignedAttrs = u;
      u = new n();
      u.hTLV = o.sigalg;
      o.obj.dSigAlg = u;
      u = new n();
      u.hTLV = o.sig;
      o.obj.dSig = u;
      o.obj.dUnsignedAttrs = new k();
      return o;
    };
    if (typeof KJUR2.asn1.csr == "undefined" || !KJUR2.asn1.csr) {
      KJUR2.asn1.csr = {};
    }
    KJUR2.asn1.csr.CertificationRequest = function(g) {
      var d = KJUR2, c = d.asn1, e = c.DERBitString, b = c.DERSequence, a = c.csr, f = c.x509, h = a.CertificationRequestInfo;
      a.CertificationRequest.superclass.constructor.call(this);
      this.setByParam = function(i) {
        this.params = i;
      };
      this.sign = function() {
        var j = new h(this.params).tohex();
        var k = new KJUR2.crypto.Signature({ alg: this.params.sigalg });
        k.init(this.params.sbjprvkey);
        k.updateHex(j);
        var i = k.sign();
        this.params.sighex = i;
      };
      this.getPEM = function() {
        return hextopem(this.tohex(), "CERTIFICATE REQUEST");
      };
      this.tohex = function() {
        var l = this.params;
        var j = new KJUR2.asn1.csr.CertificationRequestInfo(this.params);
        var m = new KJUR2.asn1.x509.AlgorithmIdentifier({ name: l.sigalg });
        if (l.sighex == void 0 && l.sbjprvkey != void 0) {
          this.sign();
        }
        if (l.sighex == void 0) {
          throw new Error("sighex or sbjprvkey parameter not defined");
        }
        var k = new e({ hex: "00" + l.sighex });
        var i = new b({ array: [j, m, k] });
        return i.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (g !== void 0) {
        this.setByParam(g);
      }
    };
    extendClass(KJUR2.asn1.csr.CertificationRequest, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.csr.CertificationRequestInfo = function(f) {
      var b = KJUR2, j = b.asn1, c = j.DERBitString, g = j.DERSequence, i = j.DERInteger, n = j.DERUTF8String, d = j.DERTaggedObject, h = j.ASN1Util.newObject, l = j.csr, e = j.x509, a = e.X500Name, k = e.Extensions, m = e.SubjectPublicKeyInfo;
      l.CertificationRequestInfo.superclass.constructor.call(this);
      this.params = null;
      this.setByParam = function(o) {
        if (o != void 0) {
          this.params = o;
        }
      };
      this.tohex = function() {
        var s = this.params;
        var p = [];
        p.push(new i({ "int": 0 }));
        p.push(new a(s.subject));
        p.push(new m(KEYUTIL.getKey(s.sbjpubkey)));
        if (s.extreq != void 0) {
          var o = new k(s.extreq);
          var r = h({ tag: { tag: "a0", explict: true, obj: { seq: [{ oid: "1.2.840.113549.1.9.14" }, { set: [o] }] } } });
          p.push(r);
        } else {
          p.push(new d({ tag: "a0", explicit: false, obj: new n({ str: "" }) }));
        }
        var q = new g({ array: p });
        return q.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f != void 0) {
        this.setByParam(f);
      }
    };
    extendClass(KJUR2.asn1.csr.CertificationRequestInfo, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.csr.CSRUtil = new function() {
    }();
    KJUR2.asn1.csr.CSRUtil.newCSRPEM = function(e) {
      var b = KEYUTIL, a = KJUR2.asn1.csr;
      var c = new a.CertificationRequest(e);
      var d = c.getPEM();
      return d;
    };
    KJUR2.asn1.csr.CSRUtil.getParam = function(c) {
      var l = ASN1HEX, g = l.getV, i = l.getIdxbyList, a = l.getTLVbyList, n = l.getTLVbyListEx, m = l.getVbyListEx;
      var k = function(t2) {
        var s = i(t2, 0, [0, 3, 0, 0], "06");
        if (g(t2, s) != "2a864886f70d01090e") {
          return null;
        }
        return a(t2, 0, [0, 3, 0, 1, 0], "30");
      };
      var f = {};
      if (c.indexOf("-----BEGIN CERTIFICATE REQUEST") == -1) {
        throw new Error("argument is not PEM file");
      }
      var d = pemtohex(c, "CERTIFICATE REQUEST");
      try {
        var o = n(d, 0, [0, 1]);
        if (o == "3000") {
          f.subject = {};
        } else {
          var e = new X509();
          f.subject = e.getX500Name(o);
        }
      } catch (p) {
      }
      var j = n(d, 0, [0, 2]);
      var q = KEYUTIL.getKey(j, null, "pkcs8pub");
      f.sbjpubkey = KEYUTIL.getPEM(q, "PKCS8PUB");
      var b = k(d);
      var e = new X509();
      if (b != null) {
        f.extreq = e.getExtParamArray(b);
      }
      try {
        var h = n(d, 0, [1], "30");
        var e = new X509();
        f.sigalg = e.getAlgorithmIdentifierName(h);
      } catch (p) {
      }
      try {
        var r = m(d, 0, [2]);
        f.sighex = r;
      } catch (p) {
      }
      return f;
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.asn1 == "undefined" || !KJUR2.asn1) {
      KJUR2.asn1 = {};
    }
    if (typeof KJUR2.asn1.ocsp == "undefined" || !KJUR2.asn1.ocsp) {
      KJUR2.asn1.ocsp = {};
    }
    KJUR2.asn1.ocsp.DEFAULT_HASH = "sha1";
    KJUR2.asn1.ocsp.OCSPResponse = function(e) {
      KJUR2.asn1.ocsp.OCSPResponse.superclass.constructor.call(this);
      var a = KJUR2.asn1.DEREnumerated, b = KJUR2.asn1.ASN1Util.newObject, c = KJUR2.asn1.ocsp.ResponseBytes;
      var d = ["successful", "malformedRequest", "internalError", "tryLater", "_not_used_", "sigRequired", "unauthorized"];
      this.params = null;
      this._getStatusCode = function() {
        var f = this.params.resstatus;
        if (typeof f == "number") {
          return f;
        }
        if (typeof f != "string") {
          return -1;
        }
        return d.indexOf(f);
      };
      this.setByParam = function(f) {
        this.params = f;
      };
      this.tohex = function() {
        var h = this.params;
        var g = this._getStatusCode();
        if (g == -1) {
          throw new Error("responseStatus not supported: " + h.resstatus);
        }
        if (g != 0) {
          return b({ seq: [{ "enum": { "int": g } }] }).tohex();
        }
        var f = new c(h);
        return b({ seq: [{ "enum": { "int": 0 } }, { tag: { tag: "a0", explicit: true, obj: f } }] }).tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.ocsp.OCSPResponse, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.ResponseBytes = function(e) {
      KJUR2.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
      var b = KJUR2.asn1, a = b.DERSequence, f = b.DERObjectIdentifier, c = b.DEROctetString, d = b.ocsp.BasicOCSPResponse;
      this.params = null;
      this.setByParam = function(g) {
        this.params = g;
      };
      this.tohex = function() {
        var j = this.params;
        if (j.restype != "ocspBasic") {
          throw new Error("not supported responseType: " + j.restype);
        }
        var i = new d(j);
        var g = [];
        g.push(new f({ name: "ocspBasic" }));
        g.push(new c({ hex: i.tohex() }));
        var h = new a({ array: g });
        return h.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.ocsp.ResponseBytes, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.BasicOCSPResponse = function(d) {
      KJUR2.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
      var i = Error, g = KJUR2.asn1, j = g.ASN1Object, e = g.DERSequence, f = g.DERGeneralizedTime, c = g.DERTaggedObject, b = g.DERBitString, h = g.x509.Extensions, k = g.x509.AlgorithmIdentifier, l = g.ocsp, a = l.ResponderID;
      _SingleResponseList = l.SingleResponseList, _ResponseData = l.ResponseData;
      this.params = null;
      this.setByParam = function(m) {
        this.params = m;
      };
      this.sign = function() {
        var o = this.params;
        var m = o.tbsresp.tohex();
        var n = new KJUR2.crypto.Signature({ alg: o.sigalg });
        n.init(o.reskey);
        n.updateHex(m);
        o.sighex = n.sign();
      };
      this.tohex = function() {
        var t2 = this.params;
        if (t2.tbsresp == void 0) {
          t2.tbsresp = new _ResponseData(t2);
        }
        if (t2.sighex == void 0 && t2.reskey != void 0) {
          this.sign();
        }
        var n = [];
        n.push(t2.tbsresp);
        n.push(new k({ name: t2.sigalg }));
        n.push(new b({ hex: "00" + t2.sighex }));
        if (t2.certs != void 0 && t2.certs.length != void 0) {
          var m = [];
          for (var q = 0; q < t2.certs.length; q++) {
            var s = t2.certs[q];
            var r = null;
            if (ASN1HEX.isASN1HEX(s)) {
              r = s;
            } else {
              if (s.match(/-----BEGIN/)) {
                r = pemtohex(s);
              } else {
                throw new i("certs[" + q + "] not hex or PEM");
              }
            }
            m.push(new j({ tlv: r }));
          }
          var p = new e({ array: m });
          n.push(new c({ tag: "a0", explicit: true, obj: p }));
        }
        var o = new e({ array: n });
        return o.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (d !== void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.ocsp.BasicOCSPResponse, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.ResponseData = function(c) {
      KJUR2.asn1.ocsp.ResponseData.superclass.constructor.call(this);
      var h = Error, f = KJUR2.asn1, d = f.DERSequence, e = f.DERGeneralizedTime, b = f.DERTaggedObject, g = f.x509.Extensions, i = f.ocsp, a = i.ResponderID;
      _SingleResponseList = i.SingleResponseList;
      this.params = null;
      this.tohex = function() {
        var m = this.params;
        if (m.respid != void 0) {
          new h("respid not specified");
        }
        if (m.prodat != void 0) {
          new h("prodat not specified");
        }
        if (m.array != void 0) {
          new h("array not specified");
        }
        var j = [];
        j.push(new a(m.respid));
        j.push(new e(m.prodat));
        j.push(new _SingleResponseList(m.array));
        if (m.ext != void 0) {
          var l = new g(m.ext);
          j.push(new b({ tag: "a1", explicit: true, obj: l }));
        }
        var k = new d({ array: j });
        return k.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(j) {
        this.params = j;
      };
      if (c !== void 0) {
        this.setByParam(c);
      }
    };
    extendClass(KJUR2.asn1.ocsp.ResponseData, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.ResponderID = function(d) {
      KJUR2.asn1.ocsp.ResponderID.superclass.constructor.call(this);
      var b = KJUR2.asn1, a = b.ASN1Util.newObject, c = b.x509.X500Name;
      this.params = null;
      this.tohex = function() {
        var f = this.params;
        if (f.key != void 0) {
          var e = a({ tag: { tag: "a2", explicit: true, obj: { octstr: { hex: f.key } } } });
          return e.tohex();
        } else {
          if (f.name != void 0) {
            var e = a({ tag: { tag: "a1", explicit: true, obj: new c(f.name) } });
            return e.tohex();
          }
        }
        throw new Error("key or name not specified");
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(e) {
        this.params = e;
      };
      if (d !== void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.ocsp.ResponderID, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.SingleResponseList = function(d) {
      KJUR2.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
      var c = KJUR2.asn1, b = c.DERSequence, a = c.ocsp.SingleResponse;
      this.params = null;
      this.tohex = function() {
        var h = this.params;
        if (typeof h != "object" || h.length == void 0) {
          throw new Error("params not specified properly");
        }
        var e = [];
        for (var g = 0; g < h.length; g++) {
          e.push(new a(h[g]));
        }
        var f = new b({ array: e });
        return f.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(e) {
        this.params = e;
      };
      if (d !== void 0) {
        this.setByParam(d);
      }
    };
    extendClass(KJUR2.asn1.ocsp.SingleResponseList, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.SingleResponse = function(e) {
      var k = Error, a = KJUR2, i = a.asn1, f = i.DERSequence, g = i.DERGeneralizedTime, b = i.DERTaggedObject, l = i.ocsp, h = l.CertID, c = l.CertStatus, d = i.x509, j = d.Extensions;
      l.SingleResponse.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var q = this.params;
        var n = [];
        if (q.certid == void 0) {
          throw new k("certid unspecified");
        }
        if (q.status == void 0) {
          throw new k("status unspecified");
        }
        if (q.thisupdate == void 0) {
          throw new k("thisupdate unspecified");
        }
        n.push(new h(q.certid));
        n.push(new c(q.status));
        n.push(new g(q.thisupdate));
        if (q.nextupdate != void 0) {
          var m = new g(q.nextupdate);
          n.push(new b({ tag: "a0", explicit: true, obj: m }));
        }
        if (q.ext != void 0) {
          var p = new j(q.ext);
          n.push(new b({ tag: "a1", explicit: true, obj: p }));
        }
        var o = new f({ array: n });
        return o.tohex();
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(m) {
        this.params = m;
      };
      if (e !== void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.ocsp.SingleResponse, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.CertID = function(e) {
      var b = KJUR2, i = b.asn1, l = i.DEROctetString, h = i.DERInteger, f = i.DERSequence, d = i.x509, m = d.AlgorithmIdentifier, n = i.ocsp, k = n.DEFAULT_HASH, g = b.crypto, c = g.Util.hashHex, a = X509, o = ASN1HEX, j = o.getVbyList;
      n.CertID.superclass.constructor.call(this);
      this.DEFAULT_HASH = "sha1";
      this.params = null;
      this.setByValue = function(s, r, p, q) {
        if (q == void 0) {
          q = this.DEFAULT_HASH;
        }
        this.params = { alg: q, issname: s, isskey: r, sbjsn: p };
      };
      this.setByCert = function(p, q, r) {
        if (r == void 0) {
          r = this.DEFAULT_HASH;
        }
        this.params = { alg: r, issuerCert: p, subjectCert: q };
      };
      this.getParamByCerts = function(y, x, t2) {
        if (t2 == void 0) {
          t2 = this.DEFAULT_HASH;
        }
        var q = new a(y);
        var v = new a(x);
        var s = c(q.getSubjectHex(), t2);
        var u = q.getPublicKeyHex();
        var p = c(j(u, 0, [1], "03", true), t2);
        var w = v.getSerialNumberHex();
        var r = { alg: t2, issname: s, isskey: p, sbjsn: w };
        return r;
      };
      this.tohex = function() {
        if (typeof this.params != "object") {
          throw new Error("params not set");
        }
        var s = this.params;
        var u, r, y, q;
        if (s.alg == void 0) {
          q = this.DEFAULT_HASH;
        } else {
          q = s.alg;
        }
        if (s.issuerCert != void 0 && s.subjectCert != void 0) {
          var t2 = this.getParamByCerts(s.issuerCert, s.subjectCert, q);
          u = t2.issname;
          r = t2.isskey;
          y = t2.sbjsn;
        } else {
          if (s.issname != void 0 && s.isskey != void 0 && s.sbjsn != void 0) {
            u = s.issname;
            r = s.isskey;
            y = s.sbjsn;
          } else {
            throw new Error("required param members not defined");
          }
        }
        var A = new m({ name: q });
        var v = new l({ hex: u });
        var x = new l({ hex: r });
        var w = new h({ hex: y });
        var z2 = new f({ array: [A, v, x, w] });
        this.hTLV = z2.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        this.setByParam(e);
      }
    };
    extendClass(KJUR2.asn1.ocsp.CertID, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.CertStatus = function(a) {
      KJUR2.asn1.ocsp.CertStatus.superclass.constructor.call(this);
      this.params = null;
      this.tohex = function() {
        var d = this.params;
        if (d.status == "good") {
          return "8000";
        }
        if (d.status == "unknown") {
          return "8200";
        }
        if (d.status == "revoked") {
          var c = [{ gentime: { str: d.time } }];
          if (d.reason != void 0) {
            c.push({ tag: { tag: "a0", explicit: true, obj: { "enum": { "int": d.reason } } } });
          }
          var b = { tag: "a1", explicit: false, obj: { seq: c } };
          return KJUR2.asn1.ASN1Util.newObject({ tag: b }).tohex();
        }
        throw new Error("bad status");
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      this.setByParam = function(b) {
        this.params = b;
      };
      if (a !== void 0) {
        this.setByParam(a);
      }
    };
    extendClass(KJUR2.asn1.ocsp.CertStatus, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.Request = function(f) {
      var c = KJUR2, b = c.asn1, a = b.DERSequence, d = b.ocsp;
      d.Request.superclass.constructor.call(this);
      this.dReqCert = null;
      this.dExt = null;
      this.tohex = function() {
        var g = [];
        if (this.dReqCert === null) {
          throw "reqCert not set";
        }
        g.push(this.dReqCert);
        var h = new a({ array: g });
        this.hTLV = h.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (typeof f !== "undefined") {
        var e = new d.CertID(f);
        this.dReqCert = e;
      }
    };
    extendClass(KJUR2.asn1.ocsp.Request, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.TBSRequest = function(e) {
      var c = KJUR2, b = c.asn1, a = b.DERSequence, d = b.ocsp;
      d.TBSRequest.superclass.constructor.call(this);
      this.version = 0;
      this.dRequestorName = null;
      this.dRequestList = [];
      this.dRequestExt = null;
      this.setRequestListByParam = function(h) {
        var f = [];
        for (var g = 0; g < h.length; g++) {
          var j = new d.Request(h[0]);
          f.push(j);
        }
        this.dRequestList = f;
      };
      this.tohex = function() {
        var f = [];
        if (this.version !== 0) {
          throw "not supported version: " + this.version;
        }
        if (this.dRequestorName !== null) {
          throw "requestorName not supported";
        }
        var h = new a({ array: this.dRequestList });
        f.push(h);
        if (this.dRequestExt !== null) {
          throw "requestExtensions not supported";
        }
        var g = new a({ array: f });
        this.hTLV = g.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (e !== void 0) {
        if (e.reqList !== void 0) {
          this.setRequestListByParam(e.reqList);
        }
      }
    };
    extendClass(KJUR2.asn1.ocsp.TBSRequest, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.OCSPRequest = function(f) {
      var c = KJUR2, b = c.asn1, a = b.DERSequence, d = b.ocsp;
      d.OCSPRequest.superclass.constructor.call(this);
      this.dTbsRequest = null;
      this.dOptionalSignature = null;
      this.tohex = function() {
        var g = [];
        if (this.dTbsRequest !== null) {
          g.push(this.dTbsRequest);
        } else {
          throw "tbsRequest not set";
        }
        if (this.dOptionalSignature !== null) {
          throw "optionalSignature not supported";
        }
        var h = new a({ array: g });
        this.hTLV = h.tohex();
        return this.hTLV;
      };
      this.getEncodedHex = function() {
        return this.tohex();
      };
      if (f !== void 0) {
        if (f.reqList !== void 0) {
          var e = new d.TBSRequest(f);
          this.dTbsRequest = e;
        }
      }
    };
    extendClass(KJUR2.asn1.ocsp.OCSPRequest, KJUR2.asn1.ASN1Object);
    KJUR2.asn1.ocsp.OCSPUtil = {};
    KJUR2.asn1.ocsp.OCSPUtil.getRequestHex = function(a, b, h) {
      var d = KJUR2, c = d.asn1, e = c.ocsp;
      if (h === void 0) {
        h = e.DEFAULT_HASH;
      }
      var g = { alg: h, issuerCert: a, subjectCert: b };
      var f = new e.OCSPRequest({ reqList: [g] });
      return f.tohex();
    };
    KJUR2.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function(b) {
      var m = ASN1HEX, c = m.getVbyList, k = m.getVbyListEx, e = m.getIdxbyList, d = m.getIdxbyListEx, g = m.getV;
      var n = {};
      try {
        var j = k(b, 0, [0], "0a");
        n.responseStatus = parseInt(j, 16);
      } catch (f) {
      }
      if (n.responseStatus !== 0) {
        return n;
      }
      try {
        var i = e(b, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
        if (b.substr(i, 2) === "80") {
          n.certStatus = "good";
        } else {
          if (b.substr(i, 2) === "a1") {
            n.certStatus = "revoked";
            n.revocationTime = hextoutf8(c(b, i, [0]));
          } else {
            if (b.substr(i, 2) === "82") {
              n.certStatus = "unknown";
            }
          }
        }
      } catch (f) {
      }
      try {
        var a = e(b, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
        n.thisUpdate = hextoutf8(g(b, a));
      } catch (f) {
      }
      try {
        var l = e(b, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
        if (b.substr(l, 2) === "a0") {
          n.nextUpdate = hextoutf8(c(b, l, [0]));
        }
      } catch (f) {
      }
      return n;
    };
    KJUR2.asn1.ocsp.OCSPParser = function() {
      var g = Error, a = X509, h = new a(), l = ASN1HEX, i = l.getV, b = l.getTLV, f = l.getIdxbyList, e = l.getVbyList, c = l.getTLVbyList, k = l.getVbyListEx, d = l.getTLVbyListEx, j = l.getChildIdx;
      this.getOCSPRequest = function(o) {
        var n = j(o, 0);
        if (n.length != 1 && n.length != 2) {
          throw new g("wrong number elements: " + n.length);
        }
        var m = this.getTBSRequest(b(o, n[0]));
        return m;
      };
      this.getTBSRequest = function(o) {
        var m = {};
        var n = d(o, 0, [0], "30");
        m.array = this.getRequestList(n);
        var p = d(o, 0, ["[2]", 0], "30");
        if (p != null) {
          m.ext = h.getExtParamArray(p);
        }
        return m;
      };
      this.getRequestList = function(p) {
        var m = [];
        var n = j(p, 0);
        for (var o = 0; o < n.length; o++) {
          var p = b(p, n[o]);
          m.push(this.getRequest(p));
        }
        return m;
      };
      this.getRequest = function(n) {
        var m = j(n, 0);
        if (m.length != 1 && m.length != 2) {
          throw new g("wrong number elements: " + m.length);
        }
        var p = this.getCertID(b(n, m[0]));
        if (m.length == 2) {
          var o = f(n, 0, [1, 0]);
          p.ext = h.getExtParamArray(b(n, o));
        }
        return p;
      };
      this.getCertID = function(p) {
        var o = j(p, 0);
        if (o.length != 4) {
          throw new g("wrong number elements: " + o.length);
        }
        var n = new a();
        var m = {};
        m.alg = n.getAlgorithmIdentifierName(b(p, o[0]));
        m.issname = i(p, o[1]);
        m.isskey = i(p, o[2]);
        m.sbjsn = i(p, o[3]);
        return m;
      };
      this.getOCSPResponse = function(r) {
        var o = j(r, 0);
        var m;
        var q = i(r, o[0]);
        var p = parseInt(q);
        if (o.length == 1) {
          return { resstatus: p };
        }
        var n = c(r, 0, [1, 0]);
        m = this.getResponseBytes(n);
        m.resstatus = p;
        return m;
      };
      this.getResponseBytes = function(p) {
        var o = j(p, 0);
        var n;
        var q = c(p, 0, [1, 0]);
        n = this.getBasicOCSPResponse(q);
        var m = i(p, o[0]);
        n.restype = KJUR2.asn1.x509.OID.oid2name(hextooid(m));
        return n;
      };
      this.getBasicOCSPResponse = function(q) {
        var t2 = j(q, 0);
        var v;
        v = this.getResponseData(b(q, t2[0]));
        var u = new X509();
        v.alg = u.getAlgorithmIdentifierName(b(q, t2[1]));
        var n = i(q, t2[2]);
        v.sighex = n.substr(2);
        var m = k(q, 0, ["[0]"]);
        if (m != null) {
          var r = j(m, 0);
          var o = [];
          for (var p = 0; p < r.length; p++) {
            var s = b(m, r[p]);
            o.push(s);
          }
          v.certs = o;
        }
        return v;
      };
      this.getResponseData = function(q) {
        var p = j(q, 0);
        var r = p.length;
        var o = {};
        var n = 0;
        if (q.substr(p[0], 2) == "a0") {
          n++;
        }
        o.respid = this.getResponderID(b(q, p[n++]));
        var t2 = i(q, p[n++]);
        o.prodat = hextoutf8(t2);
        o.array = this.getSingleResponseList(b(q, p[n++]));
        if (q.substr(p[r - 1], 2) == "a1") {
          var s = c(q, p[r - 1], [0]);
          var m = new X509();
          o.ext = m.getExtParamArray(s);
        }
        return o;
      };
      this.getResponderID = function(o) {
        var n = {};
        if (o.substr(0, 2) == "a2") {
          var p = e(o, 0, [0]);
          n.key = p;
        }
        if (o.substr(0, 2) == "a1") {
          var q = c(o, 0, [0]);
          var m = new X509();
          n.name = m.getX500Name(q);
        }
        return n;
      };
      this.getSingleResponseList = function(q) {
        var n = j(q, 0);
        var m = [];
        for (var o = 0; o < n.length; o++) {
          var r = this.getSingleResponse(b(q, n[o]));
          m.push(r);
        }
        return m;
      };
      this.getSingleResponse = function(p) {
        var t2 = j(p, 0);
        var v = {};
        var r = this.getCertID(b(p, t2[0]));
        v.certid = r;
        var u = this.getCertStatus(b(p, t2[1]));
        v.status = u;
        if (p.substr(t2[2], 2) == "18") {
          var q = i(p, t2[2]);
          v.thisupdate = hextoutf8(q);
        }
        for (var o = 3; o < t2.length; o++) {
          if (p.substr(t2[o], 2) == "a0") {
            var m = e(p, t2[o], [0], "18");
            v.nextupdate = hextoutf8(m);
          }
          if (p.substr(t2[o], 2) == "a1") {
            var s = new X509();
            var n = c(p, 0, [o, 0]);
            v.ext = s.getExtParamArray(n);
          }
        }
        return v;
      };
      this.getCertStatus = function(p) {
        var m = {};
        if (p == "8000") {
          return { status: "good" };
        }
        if (p == "8200") {
          return { status: "unknown" };
        }
        if (p.substr(0, 2) == "a1") {
          m.status = "revoked";
          var o = e(p, 0, [0]);
          var n = hextoutf8(o);
          m.time = n;
        }
        return m;
      };
    };
    var KJUR2;
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.lang == "undefined" || !KJUR2.lang) {
      KJUR2.lang = {};
    }
    KJUR2.lang.String = function() {
    };
    function stoBA(d) {
      var b = new Array();
      for (var c = 0; c < d.length; c++) {
        b[c] = d.charCodeAt(c);
      }
      return b;
    }
    function BAtos(b) {
      var d = "";
      for (var c = 0; c < b.length; c++) {
        d = d + String.fromCharCode(b[c]);
      }
      return d;
    }
    function BAtohex(b) {
      var e = "";
      for (var d = 0; d < b.length; d++) {
        var c = b[d].toString(16);
        if (c.length == 1) {
          c = "0" + c;
        }
        e = e + c;
      }
      return e;
    }
    function stohex(a) {
      return BAtohex(stoBA(a));
    }
    function stob64(a) {
      return hex2b64(stohex(a));
    }
    function stob64u(a) {
      return b64tob64u(hex2b64(stohex(a)));
    }
    function b64utos(a) {
      return BAtos(b64toBA(b64utob64(a)));
    }
    function b64tob64u(a) {
      a = a.replace(/\=/g, "");
      a = a.replace(/\+/g, "-");
      a = a.replace(/\//g, "_");
      return a;
    }
    function b64utob64(a) {
      if (a.length % 4 == 2) {
        a = a + "==";
      } else {
        if (a.length % 4 == 3) {
          a = a + "=";
        }
      }
      a = a.replace(/-/g, "+");
      a = a.replace(/_/g, "/");
      return a;
    }
    function hextob64u(a) {
      if (a.length % 2 == 1) {
        a = "0" + a;
      }
      return b64tob64u(hex2b64(a));
    }
    function b64utohex(a) {
      return b64tohex(b64utob64(a));
    }
    var utf8tob64u;
    var b64utoutf8;
    if (typeof Buffer === "function") {
      utf8tob64u = function(a) {
        return b64tob64u(Buffer.from(a, "utf8").toString("base64"));
      };
      b64utoutf8 = function(a) {
        return Buffer.from(b64utob64(a), "base64").toString("utf8");
      };
    } else {
      utf8tob64u = function(a) {
        return hextob64u(uricmptohex(encodeURIComponentAll(a)));
      };
      b64utoutf8 = function(a) {
        return decodeURIComponent(hextouricmp(b64utohex(a)));
      };
    }
    function utf8tob64(a) {
      return hex2b64(uricmptohex(encodeURIComponentAll(a)));
    }
    function b64toutf8(a) {
      return decodeURIComponent(hextouricmp(b64tohex(a)));
    }
    function utf8tohex(a) {
      return uricmptohex(encodeURIComponentAll(a)).toLowerCase();
    }
    function hextoutf8(b) {
      try {
        return decodeURIComponent(hextouricmp(b));
      } catch (a) {
        return null;
      }
    }
    function iso88591hextoutf8(a) {
      return hextoutf8(iso88591hextoutf8hex(a));
    }
    function iso88591hextoutf8hex(e) {
      var c = e.match(/.{1,2}/g);
      var b = [];
      for (var d = 0; d < c.length; d++) {
        var f = parseInt(c[d], 16);
        if (161 <= f && f <= 191) {
          b.push("c2");
          b.push(c[d]);
        } else {
          if (192 <= f && f <= 255) {
            b.push("c3");
            b.push((f - 64).toString(16));
          } else {
            b.push(c[d]);
          }
        }
      }
      return b.join("");
    }
    function hextorstr(c) {
      var b = "";
      for (var a = 0; a < c.length - 1; a += 2) {
        b += String.fromCharCode(parseInt(c.substr(a, 2), 16));
      }
      return b;
    }
    function rstrtohex(c) {
      var a = "";
      for (var b = 0; b < c.length; b++) {
        a += ("0" + c.charCodeAt(b).toString(16)).slice(-2);
      }
      return a;
    }
    function hextob64(a) {
      return hex2b64(a);
    }
    function hextob64nl(b) {
      var a = hextob64(b);
      var c = a.replace(/(.{64})/g, "$1\r\n");
      c = c.replace(/\r\n$/, "");
      return c;
    }
    function b64nltohex(b) {
      var a = b.replace(/[^0-9A-Za-z\/+=]*/g, "");
      var c = b64tohex(a);
      return c;
    }
    function hextopem(a, b) {
      var c = hextob64nl(a);
      return "-----BEGIN " + b + "-----\r\n" + c + "\r\n-----END " + b + "-----\r\n";
    }
    function pemtohex(a, b) {
      if (a.indexOf("-----BEGIN ") == -1) {
        throw "can't find PEM header: " + b;
      }
      if (b !== void 0) {
        a = a.replace(new RegExp("^[^]*-----BEGIN " + b + "-----"), "");
        a = a.replace(new RegExp("-----END " + b + "-----[^]*$"), "");
      } else {
        a = a.replace(/^[^]*-----BEGIN [^-]+-----/, "");
        a = a.replace(/-----END [^-]+-----[^]*$/, "");
      }
      return b64nltohex(a);
    }
    function hextoArrayBuffer(d) {
      if (d.length % 2 != 0) {
        throw "input is not even length";
      }
      if (d.match(/^[0-9A-Fa-f]+$/) == null) {
        throw "input is not hexadecimal";
      }
      var b = new ArrayBuffer(d.length / 2);
      var a = new DataView(b);
      for (var c = 0; c < d.length / 2; c++) {
        a.setUint8(c, parseInt(d.substr(c * 2, 2), 16));
      }
      return b;
    }
    function ArrayBuffertohex(b) {
      var d = "";
      var a = new DataView(b);
      for (var c = 0; c < b.byteLength; c++) {
        d += ("00" + a.getUint8(c).toString(16)).slice(-2);
      }
      return d;
    }
    function zulutomsec(n) {
      var l, j, m, e, f, i, b, k;
      var a, h, g, c;
      c = n.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/);
      if (c) {
        a = c[1];
        l = parseInt(a);
        if (a.length === 2) {
          if (50 <= l && l < 100) {
            l = 1900 + l;
          } else {
            if (0 <= l && l < 50) {
              l = 2e3 + l;
            }
          }
        }
        j = parseInt(c[2]) - 1;
        m = parseInt(c[3]);
        e = parseInt(c[4]);
        f = parseInt(c[5]);
        i = parseInt(c[6]);
        b = 0;
        h = c[7];
        if (h !== "") {
          g = (h.substr(1) + "00").substr(0, 3);
          b = parseInt(g);
        }
        return Date.UTC(l, j, m, e, f, i, b);
      }
      throw new Error("unsupported zulu format: " + n);
    }
    function zulutosec(a) {
      return Math.round(zulutomsec(a) / 1e3);
    }
    function zulutodate(a) {
      return new Date(zulutomsec(a));
    }
    function datetozulu(g, e, f) {
      var b;
      var a = g.getUTCFullYear();
      if (e) {
        if (a < 1950 || 2049 < a) {
          throw "not proper year for UTCTime: " + a;
        }
        b = ("" + a).slice(-2);
      } else {
        b = ("000" + a).slice(-4);
      }
      b += ("0" + (g.getUTCMonth() + 1)).slice(-2);
      b += ("0" + g.getUTCDate()).slice(-2);
      b += ("0" + g.getUTCHours()).slice(-2);
      b += ("0" + g.getUTCMinutes()).slice(-2);
      b += ("0" + g.getUTCSeconds()).slice(-2);
      if (f) {
        var c = g.getUTCMilliseconds();
        if (c !== 0) {
          c = ("00" + c).slice(-3);
          c = c.replace(/0+$/g, "");
          b += "." + c;
        }
      }
      b += "Z";
      return b;
    }
    function uricmptohex(a) {
      return a.replace(/%/g, "");
    }
    function hextouricmp(a) {
      return a.replace(/(..)/g, "%$1");
    }
    function ipv6tohex(g) {
      var b = "malformed IPv6 address";
      if (!g.match(/^[0-9A-Fa-f:]+$/)) {
        throw b;
      }
      g = g.toLowerCase();
      var d = g.split(":").length - 1;
      if (d < 2) {
        throw b;
      }
      var e = ":".repeat(7 - d + 2);
      g = g.replace("::", e);
      var c = g.split(":");
      if (c.length != 8) {
        throw b;
      }
      for (var f = 0; f < 8; f++) {
        c[f] = ("0000" + c[f]).slice(-4);
      }
      return c.join("");
    }
    function hextoipv6(d) {
      if (!d.match(/^[0-9A-Fa-f]{32}$/)) {
        throw new Error("malformed IPv6 address: " + d);
      }
      d = d.toLowerCase();
      var b = d.match(/.{1,4}/g);
      b = b.map(function(a) {
        return a.replace(/^0+/, "");
      });
      b = b.map(function(a) {
        return a == "" ? "0" : a;
      });
      d = ":" + b.join(":") + ":";
      var c = d.match(/:(0:){2,}/g);
      if (c == null) {
        return d.slice(1, -1);
      }
      var e = c.sort().slice(-1)[0];
      d = d.replace(e.substr(0, e.length - 1), ":");
      if (d.substr(0, 2) != "::") {
        d = d.substr(1);
      }
      if (d.substr(-2, 2) != "::") {
        d = d.substr(0, d.length - 1);
      }
      return d;
    }
    function hextoip(b) {
      var c = new Error("malformed hex value");
      if (!b.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) {
        throw c;
      }
      if (b.length == 8) {
        var d;
        try {
          d = parseInt(b.substr(0, 2), 16) + "." + parseInt(b.substr(2, 2), 16) + "." + parseInt(b.substr(4, 2), 16) + "." + parseInt(b.substr(6, 2), 16);
          return d;
        } catch (a) {
          throw c;
        }
      } else {
        if (b.length == 16) {
          try {
            return hextoip(b.substr(0, 8)) + "/" + ipprefixlen(b.substr(8));
          } catch (a) {
            throw c;
          }
        } else {
          if (b.length == 32) {
            return hextoipv6(b);
          } else {
            if (b.length == 64) {
              try {
                return hextoipv6(b.substr(0, 32)) + "/" + ipprefixlen(b.substr(32));
              } catch (a) {
                throw c;
              }
              return;
            } else {
              return b;
            }
          }
        }
      }
    }
    function ipprefixlen(c) {
      var d = new Error("malformed mask");
      var a;
      try {
        a = new BigInteger(c, 16).toString(2);
      } catch (b) {
        throw d;
      }
      if (!a.match(/^1*0*$/)) {
        throw d;
      }
      return a.replace(/0+$/, "").length;
    }
    function iptohex(g) {
      var j = new Error("malformed IP address");
      g = g.toLowerCase(g);
      if (!g.match(/^[0-9a-f.:/]+$/)) {
        throw j;
      }
      if (g.match(/^[0-9.]+$/)) {
        var b = g.split(".");
        if (b.length !== 4) {
          throw j;
        }
        var h = "";
        try {
          for (var f = 0; f < 4; f++) {
            var k = parseInt(b[f]);
            h += ("0" + k.toString(16)).slice(-2);
          }
          return h;
        } catch (e) {
          throw j;
        }
      } else {
        if (g.match(/^[0-9.]+\/[0-9]+$/)) {
          var c = g.split("/");
          return iptohex(c[0]) + ipnetmask(parseInt(c[1]), 32);
        } else {
          if (g.match(/^[0-9a-f:]+$/) && g.indexOf(":") !== -1) {
            return ipv6tohex(g);
          } else {
            if (g.match(/^[0-9a-f:]+\/[0-9]+$/) && g.indexOf(":") !== -1) {
              var c = g.split("/");
              return ipv6tohex(c[0]) + ipnetmask(parseInt(c[1]), 128);
            } else {
              throw j;
            }
          }
        }
      }
    }
    function ipnetmask(d, c) {
      if (c == 32 && d == 0) {
        return "00000000";
      }
      if (c == 128 && d == 0) {
        return "00000000000000000000000000000000";
      }
      var a = Array(d + 1).join("1") + Array(c - d + 1).join("0");
      return new BigInteger(a, 2).toString(16);
    }
    function ucs2hextoutf8(d) {
      function e(f) {
        var h = parseInt(f.substr(0, 2), 16);
        var a = parseInt(f.substr(2), 16);
        if (h == 0 & a < 128) {
          return String.fromCharCode(a);
        }
        if (h < 8) {
          var j = 192 | (h & 7) << 3 | (a & 192) >> 6;
          var i = 128 | a & 63;
          return hextoutf8(j.toString(16) + i.toString(16));
        }
        var j = 224 | (h & 240) >> 4;
        var i = 128 | (h & 15) << 2 | (a & 192) >> 6;
        var g = 128 | a & 63;
        return hextoutf8(j.toString(16) + i.toString(16) + g.toString(16));
      }
      var c = d.match(/.{4}/g);
      var b = c.map(e);
      return b.join("");
    }
    function encodeURIComponentAll(a) {
      var d = encodeURIComponent(a);
      var b = "";
      for (var c = 0; c < d.length; c++) {
        if (d[c] == "%") {
          b = b + d.substr(c, 3);
          c = c + 2;
        } else {
          b = b + "%" + stohex(d[c]);
        }
      }
      return b;
    }
    function newline_toUnix(a) {
      a = a.replace(/\r\n/mg, "\n");
      return a;
    }
    function newline_toDos(a) {
      a = a.replace(/\r\n/mg, "\n");
      a = a.replace(/\n/mg, "\r\n");
      return a;
    }
    KJUR2.lang.String.isInteger = function(a) {
      if (a.match(/^[0-9]+$/)) {
        return true;
      } else {
        if (a.match(/^-[0-9]+$/)) {
          return true;
        } else {
          return false;
        }
      }
    };
    KJUR2.lang.String.isHex = function(a) {
      return ishex(a);
    };
    function ishex(a) {
      if (a.length % 2 == 0 && (a.match(/^[0-9a-f]+$/) || a.match(/^[0-9A-F]+$/))) {
        return true;
      } else {
        return false;
      }
    }
    KJUR2.lang.String.isBase64 = function(a) {
      a = a.replace(/\s+/g, "");
      if (a.match(/^[0-9A-Za-z+\/]+={0,3}$/) && a.length % 4 == 0) {
        return true;
      } else {
        return false;
      }
    };
    KJUR2.lang.String.isBase64URL = function(a) {
      if (a.match(/[+/=]/)) {
        return false;
      }
      a = b64utob64(a);
      return KJUR2.lang.String.isBase64(a);
    };
    KJUR2.lang.String.isIntegerArray = function(a) {
      a = a.replace(/\s+/g, "");
      if (a.match(/^\[[0-9,]+\]$/)) {
        return true;
      } else {
        return false;
      }
    };
    KJUR2.lang.String.isPrintable = function(a) {
      if (a.match(/^[0-9A-Za-z '()+,-./:=?]*$/) !== null) {
        return true;
      }
      return false;
    };
    KJUR2.lang.String.isIA5 = function(a) {
      if (a.match(/^[\x20-\x21\x23-\x7f]*$/) !== null) {
        return true;
      }
      return false;
    };
    KJUR2.lang.String.isMail = function(a) {
      if (a.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) !== null) {
        return true;
      }
      return false;
    };
    function hextoposhex(a) {
      if (a.length % 2 == 1) {
        return "0" + a;
      }
      if (a.substr(0, 1) > "7") {
        return "00" + a;
      }
      return a;
    }
    function intarystrtohex(b) {
      b = b.replace(/^\s*\[\s*/, "");
      b = b.replace(/\s*\]\s*$/, "");
      b = b.replace(/\s*/g, "");
      try {
        var c = b.split(/,/).map(function(g, e, h) {
          var f = parseInt(g);
          if (f < 0 || 255 < f) {
            throw "integer not in range 0-255";
          }
          var d = ("00" + f.toString(16)).slice(-2);
          return d;
        }).join("");
        return c;
      } catch (a) {
        throw "malformed integer array string: " + a;
      }
    }
    var strdiffidx = function(c, a) {
      var d = c.length;
      if (c.length > a.length) {
        d = a.length;
      }
      for (var b = 0; b < d; b++) {
        if (c.charCodeAt(b) != a.charCodeAt(b)) {
          return b;
        }
      }
      if (c.length != a.length) {
        return d;
      }
      return -1;
    };
    function oidtohex(g) {
      var f = function(a) {
        var l = a.toString(16);
        if (l.length == 1) {
          l = "0" + l;
        }
        return l;
      };
      var e = function(p) {
        var o = "";
        var l = parseInt(p, 10);
        var a = l.toString(2);
        var m = 7 - a.length % 7;
        if (m == 7) {
          m = 0;
        }
        var r = "";
        for (var n = 0; n < m; n++) {
          r += "0";
        }
        a = r + a;
        for (var n = 0; n < a.length - 1; n += 7) {
          var q = a.substr(n, 7);
          if (n != a.length - 7) {
            q = "1" + q;
          }
          o += f(parseInt(q, 2));
        }
        return o;
      };
      try {
        if (!g.match(/^[0-9.]+$/)) {
          return null;
        }
        var j = "";
        var b = g.split(".");
        var k = parseInt(b[0], 10) * 40 + parseInt(b[1], 10);
        j += f(k);
        b.splice(0, 2);
        for (var d = 0; d < b.length; d++) {
          j += e(b[d]);
        }
        return j;
      } catch (c) {
        return null;
      }
    }
    function hextooid(g) {
      if (!ishex(g)) {
        return null;
      }
      try {
        var m = [];
        var p = g.substr(0, 2);
        var e = parseInt(p, 16);
        m[0] = new String(Math.floor(e / 40));
        m[1] = new String(e % 40);
        var n = g.substr(2);
        var l = [];
        for (var f = 0; f < n.length / 2; f++) {
          l.push(parseInt(n.substr(f * 2, 2), 16));
        }
        var k = [];
        var d = "";
        for (var f = 0; f < l.length; f++) {
          if (l[f] & 128) {
            d = d + strpad((l[f] & 127).toString(2), 7);
          } else {
            d = d + strpad((l[f] & 127).toString(2), 7);
            k.push(new String(parseInt(d, 2)));
            d = "";
          }
        }
        var o = m.join(".");
        if (k.length > 0) {
          o = o + "." + k.join(".");
        }
        return o;
      } catch (j) {
        return null;
      }
    }
    var strpad = function(c, b, a) {
      if (a == void 0) {
        a = "0";
      }
      if (c.length >= b) {
        return c;
      }
      return new Array(b - c.length + 1).join(a) + c;
    };
    function bitstrtoint(e) {
      if (e.length % 2 != 0) {
        return -1;
      }
      e = e.toLowerCase();
      if (e.match(/^[0-9a-f]+$/) == null) {
        return -1;
      }
      try {
        var a = e.substr(0, 2);
        if (a == "00") {
          return parseInt(e.substr(2), 16);
        }
        var b = parseInt(a, 16);
        if (b > 7) {
          return -1;
        }
        var g = e.substr(2);
        var d = parseInt(g, 16).toString(2);
        if (d == "0") {
          d = "00000000";
        }
        d = d.slice(0, 0 - b);
        var f = parseInt(d, 2);
        if (f == NaN) {
          return -1;
        }
        return f;
      } catch (c) {
        return -1;
      }
    }
    function inttobitstr(e) {
      if (typeof e != "number") {
        return null;
      }
      if (e < 0) {
        return null;
      }
      var c = Number(e).toString(2);
      var b = 8 - c.length % 8;
      if (b == 8) {
        b = 0;
      }
      c = c + strpad("", b, "0");
      var d = parseInt(c, 2).toString(16);
      if (d.length % 2 == 1) {
        d = "0" + d;
      }
      var a = "0" + b;
      return a + d;
    }
    function bitstrtobinstr(a) {
      var b = bitstrtoint(a);
      if (b == -1) {
        return null;
      }
      return b.toString(2);
    }
    function extendClass(c, a) {
      var b = function() {
      };
      b.prototype = a.prototype;
      c.prototype = new b();
      c.prototype.constructor = c;
      c.superclass = a.prototype;
      if (a.prototype.constructor == Object.prototype.constructor) {
        a.prototype.constructor = a;
      }
    }
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.crypto == "undefined" || !KJUR2.crypto) {
      KJUR2.crypto = {};
    }
    KJUR2.crypto.Util = new function() {
      this.DIGESTINFOHEAD = { sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", ripemd160: "3021300906052b2403020105000414" };
      this.DEFAULTPROVIDER = { md5: "cryptojs", sha1: "cryptojs", sha224: "cryptojs", sha256: "cryptojs", sha384: "cryptojs", sha512: "cryptojs", ripemd160: "cryptojs", hmacmd5: "cryptojs", hmacsha1: "cryptojs", hmacsha224: "cryptojs", hmacsha256: "cryptojs", hmacsha384: "cryptojs", hmacsha512: "cryptojs", hmacripemd160: "cryptojs", MD5withRSA: "cryptojs/jsrsa", SHA1withRSA: "cryptojs/jsrsa", SHA224withRSA: "cryptojs/jsrsa", SHA256withRSA: "cryptojs/jsrsa", SHA384withRSA: "cryptojs/jsrsa", SHA512withRSA: "cryptojs/jsrsa", RIPEMD160withRSA: "cryptojs/jsrsa", MD5withECDSA: "cryptojs/jsrsa", SHA1withECDSA: "cryptojs/jsrsa", SHA224withECDSA: "cryptojs/jsrsa", SHA256withECDSA: "cryptojs/jsrsa", SHA384withECDSA: "cryptojs/jsrsa", SHA512withECDSA: "cryptojs/jsrsa", RIPEMD160withECDSA: "cryptojs/jsrsa", SHA1withDSA: "cryptojs/jsrsa", SHA224withDSA: "cryptojs/jsrsa", SHA256withDSA: "cryptojs/jsrsa", MD5withRSAandMGF1: "cryptojs/jsrsa", SHAwithRSAandMGF1: "cryptojs/jsrsa", SHA1withRSAandMGF1: "cryptojs/jsrsa", SHA224withRSAandMGF1: "cryptojs/jsrsa", SHA256withRSAandMGF1: "cryptojs/jsrsa", SHA384withRSAandMGF1: "cryptojs/jsrsa", SHA512withRSAandMGF1: "cryptojs/jsrsa", RIPEMD160withRSAandMGF1: "cryptojs/jsrsa" };
      this.CRYPTOJSMESSAGEDIGESTNAME = { md5: CryptoJS.algo.MD5, sha1: CryptoJS.algo.SHA1, sha224: CryptoJS.algo.SHA224, sha256: CryptoJS.algo.SHA256, sha384: CryptoJS.algo.SHA384, sha512: CryptoJS.algo.SHA512, ripemd160: CryptoJS.algo.RIPEMD160 };
      this.getDigestInfoHex = function(a, b) {
        if (typeof this.DIGESTINFOHEAD[b] == "undefined") {
          throw "alg not supported in Util.DIGESTINFOHEAD: " + b;
        }
        return this.DIGESTINFOHEAD[b] + a;
      };
      this.getPaddedDigestInfoHex = function(h, a, j) {
        var c = this.getDigestInfoHex(h, a);
        var d = j / 4;
        if (c.length + 22 > d) {
          throw "key is too short for SigAlg: keylen=" + j + "," + a;
        }
        var b = "0001";
        var k = "00" + c;
        var g = "";
        var l = d - b.length - k.length;
        for (var f = 0; f < l; f += 2) {
          g += "ff";
        }
        var e = b + g + k;
        return e;
      };
      this.hashString = function(a, c) {
        var b = new KJUR2.crypto.MessageDigest({ alg: c });
        return b.digestString(a);
      };
      this.hashHex = function(b, c) {
        var a = new KJUR2.crypto.MessageDigest({ alg: c });
        return a.digestHex(b);
      };
      this.sha1 = function(a) {
        return this.hashString(a, "sha1");
      };
      this.sha256 = function(a) {
        return this.hashString(a, "sha256");
      };
      this.sha256Hex = function(a) {
        return this.hashHex(a, "sha256");
      };
      this.sha512 = function(a) {
        return this.hashString(a, "sha512");
      };
      this.sha512Hex = function(a) {
        return this.hashHex(a, "sha512");
      };
      this.isKey = function(a) {
        if (a instanceof RSAKey || a instanceof KJUR2.crypto.DSA || a instanceof KJUR2.crypto.ECDSA) {
          return true;
        } else {
          return false;
        }
      };
    }();
    KJUR2.crypto.Util.md5 = function(a) {
      var b = new KJUR2.crypto.MessageDigest({ alg: "md5", prov: "cryptojs" });
      return b.digestString(a);
    };
    KJUR2.crypto.Util.ripemd160 = function(a) {
      var b = new KJUR2.crypto.MessageDigest({ alg: "ripemd160", prov: "cryptojs" });
      return b.digestString(a);
    };
    KJUR2.crypto.Util.SECURERANDOMGEN = new SecureRandom();
    KJUR2.crypto.Util.getRandomHexOfNbytes = function(b) {
      var a = new Array(b);
      KJUR2.crypto.Util.SECURERANDOMGEN.nextBytes(a);
      return BAtohex(a);
    };
    KJUR2.crypto.Util.getRandomBigIntegerOfNbytes = function(a) {
      return new BigInteger(KJUR2.crypto.Util.getRandomHexOfNbytes(a), 16);
    };
    KJUR2.crypto.Util.getRandomHexOfNbits = function(d) {
      var c = d % 8;
      var a = (d - c) / 8;
      var b = new Array(a + 1);
      KJUR2.crypto.Util.SECURERANDOMGEN.nextBytes(b);
      b[0] = (255 << c & 255 ^ 255) & b[0];
      return BAtohex(b);
    };
    KJUR2.crypto.Util.getRandomBigIntegerOfNbits = function(a) {
      return new BigInteger(KJUR2.crypto.Util.getRandomHexOfNbits(a), 16);
    };
    KJUR2.crypto.Util.getRandomBigIntegerZeroToMax = function(b) {
      var a = b.bitLength();
      while (1) {
        var c = KJUR2.crypto.Util.getRandomBigIntegerOfNbits(a);
        if (b.compareTo(c) != -1) {
          return c;
        }
      }
    };
    KJUR2.crypto.Util.getRandomBigIntegerMinToMax = function(e, b) {
      var c = e.compareTo(b);
      if (c == 1) {
        throw "biMin is greater than biMax";
      }
      if (c == 0) {
        return e;
      }
      var a = b.subtract(e);
      var d = KJUR2.crypto.Util.getRandomBigIntegerZeroToMax(a);
      return d.add(e);
    };
    KJUR2.crypto.MessageDigest = function(c) {
      var b = null;
      var a = null;
      var d = null;
      this.setAlgAndProvider = function(g, f) {
        g = KJUR2.crypto.MessageDigest.getCanonicalAlgName(g);
        if (g !== null && f === void 0) {
          f = KJUR2.crypto.Util.DEFAULTPROVIDER[g];
        }
        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(g) != -1 && f == "cryptojs") {
          try {
            this.md = KJUR2.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[g].create();
          } catch (e) {
            throw "setAlgAndProvider hash alg set fail alg=" + g + "/" + e;
          }
          this.updateString = function(h) {
            this.md.update(h);
          };
          this.updateHex = function(h) {
            var i = CryptoJS.enc.Hex.parse(h);
            this.md.update(i);
          };
          this.digest = function() {
            var h = this.md.finalize();
            return h.toString(CryptoJS.enc.Hex);
          };
          this.digestString = function(h) {
            this.updateString(h);
            return this.digest();
          };
          this.digestHex = function(h) {
            this.updateHex(h);
            return this.digest();
          };
        }
        if (":sha256:".indexOf(g) != -1 && f == "sjcl") {
          try {
            this.md = new sjcl.hash.sha256();
          } catch (e) {
            throw "setAlgAndProvider hash alg set fail alg=" + g + "/" + e;
          }
          this.updateString = function(h) {
            this.md.update(h);
          };
          this.updateHex = function(i) {
            var h = sjcl.codec.hex.toBits(i);
            this.md.update(h);
          };
          this.digest = function() {
            var h = this.md.finalize();
            return sjcl.codec.hex.fromBits(h);
          };
          this.digestString = function(h) {
            this.updateString(h);
            return this.digest();
          };
          this.digestHex = function(h) {
            this.updateHex(h);
            return this.digest();
          };
        }
      };
      this.updateString = function(e) {
        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
      };
      this.updateHex = function(e) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
      };
      this.digest = function() {
        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
      };
      this.digestString = function(e) {
        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
      };
      this.digestHex = function(e) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
      };
      if (c !== void 0) {
        if (c.alg !== void 0) {
          this.algName = c.alg;
          if (c.prov === void 0) {
            this.provName = KJUR2.crypto.Util.DEFAULTPROVIDER[this.algName];
          }
          this.setAlgAndProvider(this.algName, this.provName);
        }
      }
    };
    KJUR2.crypto.MessageDigest.getCanonicalAlgName = function(a) {
      if (typeof a === "string") {
        a = a.toLowerCase();
        a = a.replace(/-/, "");
      }
      return a;
    };
    KJUR2.crypto.MessageDigest.getHashLength = function(c) {
      var b = KJUR2.crypto.MessageDigest;
      var a = b.getCanonicalAlgName(c);
      if (b.HASHLENGTH[a] === void 0) {
        throw "not supported algorithm: " + c;
      }
      return b.HASHLENGTH[a];
    };
    KJUR2.crypto.MessageDigest.HASHLENGTH = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, ripemd160: 20 };
    KJUR2.crypto.Mac = function(d) {
      var f = null;
      var c = null;
      var a = null;
      var e = null;
      var b = null;
      this.setAlgAndProvider = function(k, i) {
        k = k.toLowerCase();
        if (k == null) {
          k = "hmacsha1";
        }
        k = k.toLowerCase();
        if (k.substr(0, 4) != "hmac") {
          throw "setAlgAndProvider unsupported HMAC alg: " + k;
        }
        if (i === void 0) {
          i = KJUR2.crypto.Util.DEFAULTPROVIDER[k];
        }
        this.algProv = k + "/" + i;
        var g = k.substr(4);
        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(g) != -1 && i == "cryptojs") {
          try {
            var j = KJUR2.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[g];
            this.mac = CryptoJS.algo.HMAC.create(j, this.pass);
          } catch (h) {
            throw "setAlgAndProvider hash alg set fail hashAlg=" + g + "/" + h;
          }
          this.updateString = function(l) {
            this.mac.update(l);
          };
          this.updateHex = function(l) {
            var m = CryptoJS.enc.Hex.parse(l);
            this.mac.update(m);
          };
          this.doFinal = function() {
            var l = this.mac.finalize();
            return l.toString(CryptoJS.enc.Hex);
          };
          this.doFinalString = function(l) {
            this.updateString(l);
            return this.doFinal();
          };
          this.doFinalHex = function(l) {
            this.updateHex(l);
            return this.doFinal();
          };
        }
      };
      this.updateString = function(g) {
        throw "updateString(str) not supported for this alg/prov: " + this.algProv;
      };
      this.updateHex = function(g) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
      };
      this.doFinal = function() {
        throw "digest() not supported for this alg/prov: " + this.algProv;
      };
      this.doFinalString = function(g) {
        throw "digestString(str) not supported for this alg/prov: " + this.algProv;
      };
      this.doFinalHex = function(g) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
      };
      this.setPassword = function(h) {
        if (typeof h == "string") {
          var g = h;
          if (h.length % 2 == 1 || !h.match(/^[0-9A-Fa-f]+$/)) {
            g = rstrtohex(h);
          }
          this.pass = CryptoJS.enc.Hex.parse(g);
          return;
        }
        if (typeof h != "object") {
          throw "KJUR.crypto.Mac unsupported password type: " + h;
        }
        var g = null;
        if (h.hex !== void 0) {
          if (h.hex.length % 2 != 0 || !h.hex.match(/^[0-9A-Fa-f]+$/)) {
            throw "Mac: wrong hex password: " + h.hex;
          }
          g = h.hex;
        }
        if (h.utf8 !== void 0) {
          g = utf8tohex(h.utf8);
        }
        if (h.rstr !== void 0) {
          g = rstrtohex(h.rstr);
        }
        if (h.b64 !== void 0) {
          g = b64tohex(h.b64);
        }
        if (h.b64u !== void 0) {
          g = b64utohex(h.b64u);
        }
        if (g == null) {
          throw "KJUR.crypto.Mac unsupported password type: " + h;
        }
        this.pass = CryptoJS.enc.Hex.parse(g);
      };
      if (d !== void 0) {
        if (d.pass !== void 0) {
          this.setPassword(d.pass);
        }
        if (d.alg !== void 0) {
          this.algName = d.alg;
          if (d.prov === void 0) {
            this.provName = KJUR2.crypto.Util.DEFAULTPROVIDER[this.algName];
          }
          this.setAlgAndProvider(this.algName, this.provName);
        }
      }
    };
    KJUR2.crypto.Signature = function(o) {
      var q = null;
      var n = null;
      var r = null;
      var c = null;
      var l = null;
      var d = null;
      var k = null;
      var h = null;
      var p = null;
      var e = null;
      var b = -1;
      var g = null;
      var j = null;
      var a = null;
      var i = null;
      var f = null;
      this._setAlgNames = function() {
        var s = this.algName.match(/^(.+)with(.+)$/);
        if (s) {
          this.mdAlgName = s[1].toLowerCase();
          this.pubkeyAlgName = s[2].toLowerCase();
          if (this.pubkeyAlgName == "rsaandmgf1" && this.mdAlgName == "sha") {
            this.mdAlgName = "sha1";
          }
        }
      };
      this._zeroPaddingOfSignature = function(x, w) {
        var v = "";
        var t2 = w / 4 - x.length;
        for (var u = 0; u < t2; u++) {
          v = v + "0";
        }
        return v + x;
      };
      this.setAlgAndProvider = function(u, t2) {
        this._setAlgNames();
        if (t2 != "cryptojs/jsrsa") {
          throw new Error("provider not supported: " + t2);
        }
        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName) != -1) {
          try {
            this.md = new KJUR2.crypto.MessageDigest({ alg: this.mdAlgName });
          } catch (s) {
            throw new Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + s);
          }
          this.init = function(w, x) {
            var y = null;
            try {
              if (x === void 0) {
                y = KEYUTIL.getKey(w);
              } else {
                y = KEYUTIL.getKey(w, x);
              }
            } catch (v) {
              throw "init failed:" + v;
            }
            if (y.isPrivate === true) {
              this.prvKey = y;
              this.state = "SIGN";
            } else {
              if (y.isPublic === true) {
                this.pubKey = y;
                this.state = "VERIFY";
              } else {
                throw "init failed.:" + y;
              }
            }
          };
          this.updateString = function(v) {
            this.md.updateString(v);
          };
          this.updateHex = function(v) {
            this.md.updateHex(v);
          };
          this.sign = function() {
            this.sHashHex = this.md.digest();
            if (this.prvKey === void 0 && this.ecprvhex !== void 0 && this.eccurvename !== void 0 && KJUR2.crypto.ECDSA !== void 0) {
              this.prvKey = new KJUR2.crypto.ECDSA({ curve: this.eccurvename, prv: this.ecprvhex });
            }
            if (this.prvKey instanceof RSAKey && this.pubkeyAlgName === "rsaandmgf1") {
              this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
            } else {
              if (this.prvKey instanceof RSAKey && this.pubkeyAlgName === "rsa") {
                this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
              } else {
                if (this.prvKey instanceof KJUR2.crypto.ECDSA) {
                  this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                } else {
                  if (this.prvKey instanceof KJUR2.crypto.DSA) {
                    this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                  } else {
                    throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                  }
                }
              }
            }
            return this.hSign;
          };
          this.signString = function(v) {
            this.updateString(v);
            return this.sign();
          };
          this.signHex = function(v) {
            this.updateHex(v);
            return this.sign();
          };
          this.verify = function(v) {
            this.sHashHex = this.md.digest();
            if (this.pubKey === void 0 && this.ecpubhex !== void 0 && this.eccurvename !== void 0 && KJUR2.crypto.ECDSA !== void 0) {
              this.pubKey = new KJUR2.crypto.ECDSA({ curve: this.eccurvename, pub: this.ecpubhex });
            }
            if (this.pubKey instanceof RSAKey && this.pubkeyAlgName === "rsaandmgf1") {
              return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, v, this.mdAlgName, this.pssSaltLen);
            } else {
              if (this.pubKey instanceof RSAKey && this.pubkeyAlgName === "rsa") {
                return this.pubKey.verifyWithMessageHash(this.sHashHex, v);
              } else {
                if (KJUR2.crypto.ECDSA !== void 0 && this.pubKey instanceof KJUR2.crypto.ECDSA) {
                  return this.pubKey.verifyWithMessageHash(this.sHashHex, v);
                } else {
                  if (KJUR2.crypto.DSA !== void 0 && this.pubKey instanceof KJUR2.crypto.DSA) {
                    return this.pubKey.verifyWithMessageHash(this.sHashHex, v);
                  } else {
                    throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                  }
                }
              }
            }
          };
        }
      };
      this.init = function(s, t2) {
        throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
      };
      this.updateString = function(s) {
        throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
      };
      this.updateHex = function(s) {
        throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
      };
      this.sign = function() {
        throw "sign() not supported for this alg:prov=" + this.algProvName;
      };
      this.signString = function(s) {
        throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
      };
      this.signHex = function(s) {
        throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
      };
      this.verify = function(s) {
        throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
      };
      this.initParams = o;
      if (o !== void 0) {
        if (o.alg !== void 0) {
          this.algName = o.alg;
          if (o.prov === void 0) {
            this.provName = KJUR2.crypto.Util.DEFAULTPROVIDER[this.algName];
          } else {
            this.provName = o.prov;
          }
          this.algProvName = this.algName + ":" + this.provName;
          this.setAlgAndProvider(this.algName, this.provName);
          this._setAlgNames();
        }
        if (o.psssaltlen !== void 0) {
          this.pssSaltLen = o.psssaltlen;
        }
        if (o.prvkeypem !== void 0) {
          if (o.prvkeypas !== void 0) {
            throw "both prvkeypem and prvkeypas parameters not supported";
          } else {
            try {
              var q = KEYUTIL.getKey(o.prvkeypem);
              this.init(q);
            } catch (m) {
              throw "fatal error to load pem private key: " + m;
            }
          }
        }
      }
    };
    KJUR2.crypto.Cipher = function(a) {
    };
    KJUR2.crypto.Cipher.encrypt = function(e, f, d) {
      if (f instanceof RSAKey && f.isPublic) {
        var c = KJUR2.crypto.Cipher.getAlgByKeyAndName(f, d);
        if (c === "RSA") {
          return f.encrypt(e);
        }
        if (c === "RSAOAEP") {
          return f.encryptOAEP(e, "sha1");
        }
        var b = c.match(/^RSAOAEP(\d+)$/);
        if (b !== null) {
          return f.encryptOAEP(e, "sha" + b[1]);
        }
        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + d;
      } else {
        throw "Cipher.encrypt: unsupported key or algorithm";
      }
    };
    KJUR2.crypto.Cipher.decrypt = function(e, f, d) {
      if (f instanceof RSAKey && f.isPrivate) {
        var c = KJUR2.crypto.Cipher.getAlgByKeyAndName(f, d);
        if (c === "RSA") {
          return f.decrypt(e);
        }
        if (c === "RSAOAEP") {
          return f.decryptOAEP(e, "sha1");
        }
        var b = c.match(/^RSAOAEP(\d+)$/);
        if (b !== null) {
          return f.decryptOAEP(e, "sha" + b[1]);
        }
        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + d;
      } else {
        throw "Cipher.decrypt: unsupported key or algorithm";
      }
    };
    KJUR2.crypto.Cipher.getAlgByKeyAndName = function(b, a) {
      if (b instanceof RSAKey) {
        if (":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(a) != -1) {
          return a;
        }
        if (a === null || a === void 0) {
          return "RSA";
        }
        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + a;
      }
      throw "getAlgByKeyAndName: not supported algorithm name: " + a;
    };
    KJUR2.crypto.OID = new function() {
      this.oidhex2name = { "2a864886f70d010101": "rsaEncryption", "2a8648ce3d0201": "ecPublicKey", "2a8648ce380401": "dsa", "2a8648ce3d030107": "secp256r1", "2b8104001f": "secp192k1", "2b81040021": "secp224r1", "2b8104000a": "secp256k1", "2b81040022": "secp384r1", "2b81040023": "secp521r1", "2a8648ce380403": "SHA1withDSA", "608648016503040301": "SHA224withDSA", "608648016503040302": "SHA256withDSA" };
    }();
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.crypto == "undefined" || !KJUR2.crypto) {
      KJUR2.crypto = {};
    }
    KJUR2.crypto.ECDSA = function(e) {
      var g = "secp256r1";
      var p = null;
      var b = null;
      var i = null;
      var j = Error, f = BigInteger, h = ECPointFp, m = KJUR2.crypto.ECDSA, c = KJUR2.crypto.ECParameterDB, d = m.getName, q = ASN1HEX, n = q.getVbyListEx, k = q.isASN1HEX;
      var a = new SecureRandom();
      var o = null;
      this.type = "EC";
      this.isPrivate = false;
      this.isPublic = false;
      function l(x, t2, w, s) {
        var r = Math.max(t2.bitLength(), s.bitLength());
        var y = x.add2D(w);
        var v = x.curve.getInfinity();
        for (var u = r - 1; u >= 0; --u) {
          v = v.twice2D();
          v.z = f.ONE;
          if (t2.testBit(u)) {
            if (s.testBit(u)) {
              v = v.add2D(y);
            } else {
              v = v.add2D(x);
            }
          } else {
            if (s.testBit(u)) {
              v = v.add2D(w);
            }
          }
        }
        return v;
      }
      this.getBigRandom = function(r) {
        return new f(r.bitLength(), a).mod(r.subtract(f.ONE)).add(f.ONE);
      };
      this.setNamedCurve = function(r) {
        this.ecparams = c.getByName(r);
        this.prvKeyHex = null;
        this.pubKeyHex = null;
        this.curveName = r;
      };
      this.setPrivateKeyHex = function(r) {
        this.isPrivate = true;
        this.prvKeyHex = r;
      };
      this.setPublicKeyHex = function(r) {
        this.isPublic = true;
        this.pubKeyHex = r;
      };
      this.getPublicKeyXYHex = function() {
        var t2 = this.pubKeyHex;
        if (t2.substr(0, 2) !== "04") {
          throw "this method supports uncompressed format(04) only";
        }
        var s = this.ecparams.keycharlen;
        if (t2.length !== 2 + s * 2) {
          throw "malformed public key hex length";
        }
        var r = {};
        r.x = t2.substr(2, s);
        r.y = t2.substr(2 + s);
        return r;
      };
      this.getShortNISTPCurveName = function() {
        var r = this.curveName;
        if (r === "secp256r1" || r === "NIST P-256" || r === "P-256" || r === "prime256v1") {
          return "P-256";
        }
        if (r === "secp384r1" || r === "NIST P-384" || r === "P-384") {
          return "P-384";
        }
        if (r === "secp521r1" || r === "NIST P-521" || r === "P-521") {
          return "P-521";
        }
        return null;
      };
      this.generateKeyPairHex = function() {
        var s = this.ecparams.n;
        var u = this.getBigRandom(s);
        var r = this.ecparams.keycharlen;
        var t2 = ("0000000000" + u.toString(16)).slice(-r);
        this.setPrivateKeyHex(t2);
        var v = this.generatePublicKeyHex();
        return { ecprvhex: t2, ecpubhex: v };
      };
      this.generatePublicKeyHex = function() {
        var u = new f(this.prvKeyHex, 16);
        var w = this.ecparams.G.multiply(u);
        var t2 = w.getX().toBigInteger();
        var s = w.getY().toBigInteger();
        var r = this.ecparams.keycharlen;
        var y = ("0000000000" + t2.toString(16)).slice(-r);
        var v = ("0000000000" + s.toString(16)).slice(-r);
        var x = "04" + y + v;
        this.setPublicKeyHex(x);
        return x;
      };
      this.signWithMessageHash = function(r) {
        return this.signHex(r, this.prvKeyHex);
      };
      this.signHex = function(x, u) {
        var A = new f(u, 16);
        var v = this.ecparams.n;
        var z2 = new f(x.substring(0, this.ecparams.keycharlen), 16);
        do {
          var w = this.getBigRandom(v);
          var B = this.ecparams.G;
          var y = B.multiply(w);
          var t2 = y.getX().toBigInteger().mod(v);
        } while (t2.compareTo(f.ZERO) <= 0);
        var C = w.modInverse(v).multiply(z2.add(A.multiply(t2))).mod(v);
        return m.biRSSigToASN1Sig(t2, C);
      };
      this.sign = function(w, B) {
        var z2 = B;
        var u = this.ecparams.n;
        var y = f.fromByteArrayUnsigned(w);
        do {
          var v = this.getBigRandom(u);
          var A = this.ecparams.G;
          var x = A.multiply(v);
          var t2 = x.getX().toBigInteger().mod(u);
        } while (t2.compareTo(BigInteger.ZERO) <= 0);
        var C = v.modInverse(u).multiply(y.add(z2.multiply(t2))).mod(u);
        return this.serializeSig(t2, C);
      };
      this.verifyWithMessageHash = function(s, r) {
        return this.verifyHex(s, r, this.pubKeyHex);
      };
      this.verifyHex = function(v, y, u) {
        try {
          var t2, B;
          var w = m.parseSigHex(y);
          t2 = w.r;
          B = w.s;
          var x = h.decodeFromHex(this.ecparams.curve, u);
          var z2 = new f(v.substring(0, this.ecparams.keycharlen), 16);
          return this.verifyRaw(z2, t2, B, x);
        } catch (A) {
          return false;
        }
      };
      this.verify = function(z2, A, u) {
        var w, t2;
        if (Bitcoin.Util.isArray(A)) {
          var y = this.parseSig(A);
          w = y.r;
          t2 = y.s;
        } else {
          if (typeof A === "object" && A.r && A.s) {
            w = A.r;
            t2 = A.s;
          } else {
            throw "Invalid value for signature";
          }
        }
        var v;
        if (u instanceof ECPointFp) {
          v = u;
        } else {
          if (Bitcoin.Util.isArray(u)) {
            v = h.decodeFrom(this.ecparams.curve, u);
          } else {
            throw "Invalid format for pubkey value, must be byte array or ECPointFp";
          }
        }
        var x = f.fromByteArrayUnsigned(z2);
        return this.verifyRaw(x, w, t2, v);
      };
      this.verifyRaw = function(z2, t2, E, y) {
        var x = this.ecparams.n;
        var D = this.ecparams.G;
        if (t2.compareTo(f.ONE) < 0 || t2.compareTo(x) >= 0) {
          return false;
        }
        if (E.compareTo(f.ONE) < 0 || E.compareTo(x) >= 0) {
          return false;
        }
        var A = E.modInverse(x);
        var w = z2.multiply(A).mod(x);
        var u = t2.multiply(A).mod(x);
        var B = D.multiply(w).add(y.multiply(u));
        var C = B.getX().toBigInteger().mod(x);
        return C.equals(t2);
      };
      this.serializeSig = function(v, u) {
        var w = v.toByteArraySigned();
        var t2 = u.toByteArraySigned();
        var x = [];
        x.push(2);
        x.push(w.length);
        x = x.concat(w);
        x.push(2);
        x.push(t2.length);
        x = x.concat(t2);
        x.unshift(x.length);
        x.unshift(48);
        return x;
      };
      this.parseSig = function(y) {
        var x;
        if (y[0] != 48) {
          throw new Error("Signature not a valid DERSequence");
        }
        x = 2;
        if (y[x] != 2) {
          throw new Error("First element in signature must be a DERInteger");
        }
        var w = y.slice(x + 2, x + 2 + y[x + 1]);
        x += 2 + y[x + 1];
        if (y[x] != 2) {
          throw new Error("Second element in signature must be a DERInteger");
        }
        var t2 = y.slice(x + 2, x + 2 + y[x + 1]);
        x += 2 + y[x + 1];
        var v = f.fromByteArrayUnsigned(w);
        var u = f.fromByteArrayUnsigned(t2);
        return { r: v, s: u };
      };
      this.parseSigCompact = function(w) {
        if (w.length !== 65) {
          throw "Signature has the wrong length";
        }
        var t2 = w[0] - 27;
        if (t2 < 0 || t2 > 7) {
          throw "Invalid signature type";
        }
        var x = this.ecparams.n;
        var v = f.fromByteArrayUnsigned(w.slice(1, 33)).mod(x);
        var u = f.fromByteArrayUnsigned(w.slice(33, 65)).mod(x);
        return { r: v, s: u, i: t2 };
      };
      this.readPKCS5PrvKeyHex = function(u) {
        if (k(u) === false) {
          throw new Error("not ASN.1 hex string");
        }
        var r, t2, v;
        try {
          r = n(u, 0, ["[0]", 0], "06");
          t2 = n(u, 0, [1], "04");
          try {
            v = n(u, 0, ["[1]", 0], "03");
          } catch (s) {
          }
        } catch (s) {
          throw new Error("malformed PKCS#1/5 plain ECC private key");
        }
        this.curveName = d(r);
        if (this.curveName === void 0) {
          throw "unsupported curve name";
        }
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(v);
        this.setPrivateKeyHex(t2);
        this.isPublic = false;
      };
      this.readPKCS8PrvKeyHex = function(v) {
        if (k(v) === false) {
          throw new j("not ASN.1 hex string");
        }
        var t2, r, u, w;
        try {
          t2 = n(v, 0, [1, 0], "06");
          r = n(v, 0, [1, 1], "06");
          u = n(v, 0, [2, 0, 1], "04");
          try {
            w = n(v, 0, [2, 0, "[1]", 0], "03");
          } catch (s) {
          }
        } catch (s) {
          throw new j("malformed PKCS#8 plain ECC private key");
        }
        this.curveName = d(r);
        if (this.curveName === void 0) {
          throw new j("unsupported curve name");
        }
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(w);
        this.setPrivateKeyHex(u);
        this.isPublic = false;
      };
      this.readPKCS8PubKeyHex = function(u) {
        if (k(u) === false) {
          throw new j("not ASN.1 hex string");
        }
        var t2, r, v;
        try {
          t2 = n(u, 0, [0, 0], "06");
          r = n(u, 0, [0, 1], "06");
          v = n(u, 0, [1], "03");
        } catch (s) {
          throw new j("malformed PKCS#8 ECC public key");
        }
        this.curveName = d(r);
        if (this.curveName === null) {
          throw new j("unsupported curve name");
        }
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(v);
      };
      this.readCertPubKeyHex = function(t2, v) {
        if (k(t2) === false) {
          throw new j("not ASN.1 hex string");
        }
        var r, u;
        try {
          r = n(t2, 0, [0, 5, 0, 1], "06");
          u = n(t2, 0, [0, 5, 1], "03");
        } catch (s) {
          throw new j("malformed X.509 certificate ECC public key");
        }
        this.curveName = d(r);
        if (this.curveName === null) {
          throw new j("unsupported curve name");
        }
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(u);
      };
      if (e !== void 0) {
        if (e.curve !== void 0) {
          this.curveName = e.curve;
        }
      }
      if (this.curveName === void 0) {
        this.curveName = g;
      }
      this.setNamedCurve(this.curveName);
      if (e !== void 0) {
        if (e.prv !== void 0) {
          this.setPrivateKeyHex(e.prv);
        }
        if (e.pub !== void 0) {
          this.setPublicKeyHex(e.pub);
        }
      }
    };
    KJUR2.crypto.ECDSA.parseSigHex = function(a) {
      var b = KJUR2.crypto.ECDSA.parseSigHexInHexRS(a);
      var d = new BigInteger(b.r, 16);
      var c = new BigInteger(b.s, 16);
      return { r: d, s: c };
    };
    KJUR2.crypto.ECDSA.parseSigHexInHexRS = function(f) {
      var j = ASN1HEX, i = j.getChildIdx, g = j.getV;
      j.checkStrictDER(f, 0);
      if (f.substr(0, 2) != "30") {
        throw new Error("signature is not a ASN.1 sequence");
      }
      var h = i(f, 0);
      if (h.length != 2) {
        throw new Error("signature shall have two elements");
      }
      var e = h[0];
      var d = h[1];
      if (f.substr(e, 2) != "02") {
        throw new Error("1st item not ASN.1 integer");
      }
      if (f.substr(d, 2) != "02") {
        throw new Error("2nd item not ASN.1 integer");
      }
      var c = g(f, e);
      var b = g(f, d);
      return { r: c, s: b };
    };
    KJUR2.crypto.ECDSA.asn1SigToConcatSig = function(d) {
      var e = KJUR2.crypto.ECDSA.parseSigHexInHexRS(d);
      var b = e.r;
      var a = e.s;
      if (b.length >= 130 && b.length <= 134) {
        if (b.length % 2 != 0) {
          throw Error("unknown ECDSA sig r length error");
        }
        if (a.length % 2 != 0) {
          throw Error("unknown ECDSA sig s length error");
        }
        if (b.substr(0, 2) == "00") {
          b = b.substr(2);
        }
        if (a.substr(0, 2) == "00") {
          a = a.substr(2);
        }
        var c = Math.max(b.length, a.length);
        b = ("000000" + b).slice(-c);
        a = ("000000" + a).slice(-c);
        return b + a;
      }
      if (b.substr(0, 2) == "00" && b.length % 32 == 2) {
        b = b.substr(2);
      }
      if (a.substr(0, 2) == "00" && a.length % 32 == 2) {
        a = a.substr(2);
      }
      if (b.length % 32 == 30) {
        b = "00" + b;
      }
      if (a.length % 32 == 30) {
        a = "00" + a;
      }
      if (b.length % 32 != 0) {
        throw Error("unknown ECDSA sig r length error");
      }
      if (a.length % 32 != 0) {
        throw Error("unknown ECDSA sig s length error");
      }
      return b + a;
    };
    KJUR2.crypto.ECDSA.concatSigToASN1Sig = function(a) {
      if (a.length % 4 != 0) {
        throw Error("unknown ECDSA concatinated r-s sig length error");
      }
      var c = a.substr(0, a.length / 2);
      var b = a.substr(a.length / 2);
      return KJUR2.crypto.ECDSA.hexRSSigToASN1Sig(c, b);
    };
    KJUR2.crypto.ECDSA.hexRSSigToASN1Sig = function(b, a) {
      var d = new BigInteger(b, 16);
      var c = new BigInteger(a, 16);
      return KJUR2.crypto.ECDSA.biRSSigToASN1Sig(d, c);
    };
    KJUR2.crypto.ECDSA.biRSSigToASN1Sig = function(f, d) {
      var c = KJUR2.asn1;
      var b = new c.DERInteger({ bigint: f });
      var a = new c.DERInteger({ bigint: d });
      var e = new c.DERSequence({ array: [b, a] });
      return e.tohex();
    };
    KJUR2.crypto.ECDSA.getName = function(a) {
      if (a === "2b8104001f") {
        return "secp192k1";
      }
      if (a === "2a8648ce3d030107") {
        return "secp256r1";
      }
      if (a === "2b8104000a") {
        return "secp256k1";
      }
      if (a === "2b81040021") {
        return "secp224r1";
      }
      if (a === "2b81040022") {
        return "secp384r1";
      }
      if (a === "2b81040023") {
        return "secp521r1";
      }
      if ("|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(a) !== -1) {
        return "secp256r1";
      }
      if ("|secp256k1|".indexOf(a) !== -1) {
        return "secp256k1";
      }
      if ("|secp224r1|NIST P-224|P-224|".indexOf(a) !== -1) {
        return "secp224r1";
      }
      if ("|secp384r1|NIST P-384|P-384|".indexOf(a) !== -1) {
        return "secp384r1";
      }
      if ("|secp521r1|NIST P-521|P-521|".indexOf(a) !== -1) {
        return "secp521r1";
      }
      return null;
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.crypto == "undefined" || !KJUR2.crypto) {
      KJUR2.crypto = {};
    }
    KJUR2.crypto.ECParameterDB = new function() {
      var b = {};
      var c = {};
      function a(d) {
        return new BigInteger(d, 16);
      }
      this.getByName = function(e) {
        var d = e;
        if (typeof c[d] != "undefined") {
          d = c[e];
        }
        if (typeof b[d] != "undefined") {
          return b[d];
        }
        throw "unregistered EC curve name: " + d;
      };
      this.regist = function(A, l, o, g, m, e, j, f, k, u, d, x) {
        b[A] = {};
        var s = a(o);
        var z2 = a(g);
        var y = a(m);
        var t2 = a(e);
        var w = a(j);
        var r = new ECCurveFp(s, z2, y);
        var q = r.decodePointHex("04" + f + k);
        b[A]["name"] = A;
        b[A]["keylen"] = l;
        b[A]["keycharlen"] = Math.ceil(l / 8) * 2;
        b[A]["curve"] = r;
        b[A]["G"] = q;
        b[A]["n"] = t2;
        b[A]["h"] = w;
        b[A]["oid"] = d;
        b[A]["info"] = x;
        for (var v = 0; v < u.length; v++) {
          c[u[v]] = A;
        }
      };
    }();
    KJUR2.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field");
    KJUR2.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field");
    KJUR2.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field");
    KJUR2.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []);
    KJUR2.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []);
    KJUR2.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []);
    KJUR2.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []);
    KJUR2.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]);
    KJUR2.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]);
    KJUR2.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "00C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.crypto == "undefined" || !KJUR2.crypto) {
      KJUR2.crypto = {};
    }
    KJUR2.crypto.DSA = function() {
      var b = ASN1HEX, e = b.getVbyList, d = b.getVbyListEx, a = b.isASN1HEX, c = BigInteger;
      this.p = null;
      this.q = null;
      this.g = null;
      this.y = null;
      this.x = null;
      this.type = "DSA";
      this.isPrivate = false;
      this.isPublic = false;
      this.setPrivate = function(j, i, h, k, f) {
        this.isPrivate = true;
        this.p = j;
        this.q = i;
        this.g = h;
        this.y = k;
        this.x = f;
      };
      this.setPrivateHex = function(i, g, k, n, o) {
        var h, f, j, l, m;
        h = new BigInteger(i, 16);
        f = new BigInteger(g, 16);
        j = new BigInteger(k, 16);
        if (typeof n === "string" && n.length > 1) {
          l = new BigInteger(n, 16);
        } else {
          l = null;
        }
        m = new BigInteger(o, 16);
        this.setPrivate(h, f, j, l, m);
      };
      this.setPublic = function(i, h, f, j) {
        this.isPublic = true;
        this.p = i;
        this.q = h;
        this.g = f;
        this.y = j;
        this.x = null;
      };
      this.setPublicHex = function(k, j, i, l) {
        var g, f, m, h;
        g = new BigInteger(k, 16);
        f = new BigInteger(j, 16);
        m = new BigInteger(i, 16);
        h = new BigInteger(l, 16);
        this.setPublic(g, f, m, h);
      };
      this.signWithMessageHash = function(j) {
        var i = this.p;
        var h = this.q;
        var m = this.g;
        var o = this.y;
        var t2 = this.x;
        var l = KJUR2.crypto.Util.getRandomBigIntegerMinToMax(BigInteger.ONE.add(BigInteger.ONE), h.subtract(BigInteger.ONE));
        var u = j.substr(0, h.bitLength() / 4);
        var n = new BigInteger(u, 16);
        var f = m.modPow(l, i).mod(h);
        var w = l.modInverse(h).multiply(n.add(t2.multiply(f))).mod(h);
        var v = KJUR2.asn1.ASN1Util.jsonToASN1HEX({ seq: [{ "int": { bigint: f } }, { "int": { bigint: w } }] });
        return v;
      };
      this.verifyWithMessageHash = function(m, l) {
        var j = this.p;
        var h = this.q;
        var o = this.g;
        var u = this.y;
        var n = this.parseASN1Signature(l);
        var f = n[0];
        var C = n[1];
        var B = m.substr(0, h.bitLength() / 4);
        var t2 = new BigInteger(B, 16);
        if (BigInteger.ZERO.compareTo(f) > 0 || f.compareTo(h) > 0) {
          throw "invalid DSA signature";
        }
        if (BigInteger.ZERO.compareTo(C) >= 0 || C.compareTo(h) > 0) {
          throw "invalid DSA signature";
        }
        var x = C.modInverse(h);
        var k = t2.multiply(x).mod(h);
        var i = f.multiply(x).mod(h);
        var A = o.modPow(k, j).multiply(u.modPow(i, j)).mod(j).mod(h);
        return A.compareTo(f) == 0;
      };
      this.parseASN1Signature = function(f) {
        try {
          var i = new c(d(f, 0, [0], "02"), 16);
          var h = new c(d(f, 0, [1], "02"), 16);
          return [i, h];
        } catch (g) {
          throw new Error("malformed ASN.1 DSA signature");
        }
      };
      this.readPKCS5PrvKeyHex = function(j) {
        var k, i, g, l, m;
        if (a(j) === false) {
          throw new Error("not ASN.1 hex string");
        }
        try {
          k = d(j, 0, [1], "02");
          i = d(j, 0, [2], "02");
          g = d(j, 0, [3], "02");
          l = d(j, 0, [4], "02");
          m = d(j, 0, [5], "02");
        } catch (f) {
          throw new Error("malformed PKCS#1/5 plain DSA private key");
        }
        this.setPrivateHex(k, i, g, l, m);
      };
      this.readPKCS8PrvKeyHex = function(j) {
        var k, i, g, l;
        if (a(j) === false) {
          throw new Error("not ASN.1 hex string");
        }
        try {
          k = d(j, 0, [1, 1, 0], "02");
          i = d(j, 0, [1, 1, 1], "02");
          g = d(j, 0, [1, 1, 2], "02");
          l = d(j, 0, [2, 0], "02");
        } catch (f) {
          throw new Error("malformed PKCS#8 plain DSA private key");
        }
        this.setPrivateHex(k, i, g, null, l);
      };
      this.readPKCS8PubKeyHex = function(j) {
        var k, i, g, l;
        if (a(j) === false) {
          throw new Error("not ASN.1 hex string");
        }
        try {
          k = d(j, 0, [0, 1, 0], "02");
          i = d(j, 0, [0, 1, 1], "02");
          g = d(j, 0, [0, 1, 2], "02");
          l = d(j, 0, [1, 0], "02");
        } catch (f) {
          throw new Error("malformed PKCS#8 DSA public key");
        }
        this.setPublicHex(k, i, g, l);
      };
      this.readCertPubKeyHex = function(j, m) {
        var k, i, g, l;
        if (a(j) === false) {
          throw new Error("not ASN.1 hex string");
        }
        try {
          k = d(j, 0, [0, 5, 0, 1, 0], "02");
          i = d(j, 0, [0, 5, 0, 1, 1], "02");
          g = d(j, 0, [0, 5, 0, 1, 2], "02");
          l = d(j, 0, [0, 5, 1, 0], "02");
        } catch (f) {
          throw new Error("malformed X.509 certificate DSA public key");
        }
        this.setPublicHex(k, i, g, l);
      };
    };
    var KEYUTIL = function() {
      var d = function(p, r, q) {
        return k(CryptoJS.AES, p, r, q);
      };
      var e = function(p, r, q) {
        return k(CryptoJS.TripleDES, p, r, q);
      };
      var a = function(p, r, q) {
        return k(CryptoJS.DES, p, r, q);
      };
      var k = function(s, x, u, q) {
        var r = CryptoJS.enc.Hex.parse(x);
        var w = CryptoJS.enc.Hex.parse(u);
        var p = CryptoJS.enc.Hex.parse(q);
        var t2 = {};
        t2.key = w;
        t2.iv = p;
        t2.ciphertext = r;
        var v = s.decrypt(t2, w, { iv: p });
        return CryptoJS.enc.Hex.stringify(v);
      };
      var l = function(p, r, q) {
        return g(CryptoJS.AES, p, r, q);
      };
      var o = function(p, r, q) {
        return g(CryptoJS.TripleDES, p, r, q);
      };
      var f = function(p, r, q) {
        return g(CryptoJS.DES, p, r, q);
      };
      var g = function(t2, y, v, q) {
        var s = CryptoJS.enc.Hex.parse(y);
        var x = CryptoJS.enc.Hex.parse(v);
        var p = CryptoJS.enc.Hex.parse(q);
        var w = t2.encrypt(s, x, { iv: p });
        var r = CryptoJS.enc.Hex.parse(w.toString());
        var u = CryptoJS.enc.Base64.stringify(r);
        return u;
      };
      var i = { "AES-256-CBC": { proc: d, eproc: l, keylen: 32, ivlen: 16 }, "AES-192-CBC": { proc: d, eproc: l, keylen: 24, ivlen: 16 }, "AES-128-CBC": { proc: d, eproc: l, keylen: 16, ivlen: 16 }, "DES-EDE3-CBC": { proc: e, eproc: o, keylen: 24, ivlen: 8 }, "DES-CBC": { proc: a, eproc: f, keylen: 8, ivlen: 8 } };
      var c = function(p) {
        return i[p]["proc"];
      };
      var m = function(p) {
        var r = CryptoJS.lib.WordArray.random(p);
        var q = CryptoJS.enc.Hex.stringify(r);
        return q;
      };
      var n = function(v) {
        var w = {};
        var q = v.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
        if (q) {
          w.cipher = q[1];
          w.ivsalt = q[2];
        }
        var p = v.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
        if (p) {
          w.type = p[1];
        }
        var u = -1;
        var x = 0;
        if (v.indexOf("\r\n\r\n") != -1) {
          u = v.indexOf("\r\n\r\n");
          x = 2;
        }
        if (v.indexOf("\n\n") != -1) {
          u = v.indexOf("\n\n");
          x = 1;
        }
        var t2 = v.indexOf("-----END");
        if (u != -1 && t2 != -1) {
          var r = v.substring(u + x * 2, t2 - x);
          r = r.replace(/\s+/g, "");
          w.data = r;
        }
        return w;
      };
      var j = function(q, y, p) {
        var v = p.substring(0, 16);
        var t2 = CryptoJS.enc.Hex.parse(v);
        var r = CryptoJS.enc.Utf8.parse(y);
        var u = i[q]["keylen"] + i[q]["ivlen"];
        var x = "";
        var w = null;
        for (; ; ) {
          var s = CryptoJS.algo.MD5.create();
          if (w != null) {
            s.update(w);
          }
          s.update(r);
          s.update(t2);
          w = s.finalize();
          x = x + CryptoJS.enc.Hex.stringify(w);
          if (x.length >= u * 2) {
            break;
          }
        }
        var z2 = {};
        z2.keyhex = x.substr(0, i[q]["keylen"] * 2);
        z2.ivhex = x.substr(i[q]["keylen"] * 2, i[q]["ivlen"] * 2);
        return z2;
      };
      var b = function(p, v, r, w) {
        var s = CryptoJS.enc.Base64.parse(p);
        var q = CryptoJS.enc.Hex.stringify(s);
        var u = i[v]["proc"];
        var t2 = u(q, r, w);
        return t2;
      };
      var h = function(p, s, q, u) {
        var r = i[s]["eproc"];
        var t2 = r(p, q, u);
        return t2;
      };
      return { version: "1.0.0", parsePKCS5PEM: function(p) {
        return n(p);
      }, getKeyAndUnusedIvByPasscodeAndIvsalt: function(q, p, r) {
        return j(q, p, r);
      }, decryptKeyB64: function(p, r, q, s) {
        return b(p, r, q, s);
      }, getDecryptedKeyHex: function(y, x) {
        var q = n(y);
        var t2 = q.type;
        var r = q.cipher;
        var p = q.ivsalt;
        var s = q.data;
        var w = j(r, x, p);
        var v = w.keyhex;
        var u = b(s, r, v, p);
        return u;
      }, getEncryptedPKCS5PEMFromPrvKeyHex: function(x, s, A, t2, r) {
        var p = "";
        if (typeof t2 == "undefined" || t2 == null) {
          t2 = "AES-256-CBC";
        }
        if (typeof i[t2] == "undefined") {
          throw new Error("KEYUTIL unsupported algorithm: " + t2);
        }
        if (typeof r == "undefined" || r == null) {
          var v = i[t2]["ivlen"];
          var u = m(v);
          r = u.toUpperCase();
        }
        var z2 = j(t2, A, r);
        var y = z2.keyhex;
        var w = h(s, t2, y, r);
        var q = w.replace(/(.{64})/g, "$1\r\n");
        var p = "-----BEGIN " + x + " PRIVATE KEY-----\r\n";
        p += "Proc-Type: 4,ENCRYPTED\r\n";
        p += "DEK-Info: " + t2 + "," + r + "\r\n";
        p += "\r\n";
        p += q;
        p += "\r\n-----END " + x + " PRIVATE KEY-----\r\n";
        return p;
      }, parseHexOfEncryptedPKCS8: function(y) {
        var B = ASN1HEX;
        var z2 = B.getChildIdx;
        var w = B.getV;
        var t2 = {};
        var r = z2(y, 0);
        if (r.length != 2) {
          throw new Error("malformed format: SEQUENCE(0).items != 2: " + r.length);
        }
        t2.ciphertext = w(y, r[1]);
        var A = z2(y, r[0]);
        if (A.length != 2) {
          throw new Error("malformed format: SEQUENCE(0.0).items != 2: " + A.length);
        }
        if (w(y, A[0]) != "2a864886f70d01050d") {
          throw new Error("this only supports pkcs5PBES2");
        }
        var p = z2(y, A[1]);
        if (A.length != 2) {
          throw new Error("malformed format: SEQUENCE(0.0.1).items != 2: " + p.length);
        }
        var q = z2(y, p[1]);
        if (q.length != 2) {
          throw new Error("malformed format: SEQUENCE(0.0.1.1).items != 2: " + q.length);
        }
        if (w(y, q[0]) != "2a864886f70d0307") {
          throw "this only supports TripleDES";
        }
        t2.encryptionSchemeAlg = "TripleDES";
        t2.encryptionSchemeIV = w(y, q[1]);
        var s = z2(y, p[0]);
        if (s.length != 2) {
          throw new Error("malformed format: SEQUENCE(0.0.1.0).items != 2: " + s.length);
        }
        if (w(y, s[0]) != "2a864886f70d01050c") {
          throw new Error("this only supports pkcs5PBKDF2");
        }
        var x = z2(y, s[1]);
        if (x.length < 2) {
          throw new Error("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + x.length);
        }
        t2.pbkdf2Salt = w(y, x[0]);
        var u = w(y, x[1]);
        try {
          t2.pbkdf2Iter = parseInt(u, 16);
        } catch (v) {
          throw new Error("malformed format pbkdf2Iter: " + u);
        }
        return t2;
      }, getPBKDF2KeyHexFromParam: function(u, p) {
        var t2 = CryptoJS.enc.Hex.parse(u.pbkdf2Salt);
        var q = u.pbkdf2Iter;
        var s = CryptoJS.PBKDF2(p, t2, { keySize: 192 / 32, iterations: q });
        var r = CryptoJS.enc.Hex.stringify(s);
        return r;
      }, _getPlainPKCS8HexFromEncryptedPKCS8PEM: function(x, y) {
        var r = pemtohex(x, "ENCRYPTED PRIVATE KEY");
        var p = this.parseHexOfEncryptedPKCS8(r);
        var u = KEYUTIL.getPBKDF2KeyHexFromParam(p, y);
        var v = {};
        v.ciphertext = CryptoJS.enc.Hex.parse(p.ciphertext);
        var t2 = CryptoJS.enc.Hex.parse(u);
        var s = CryptoJS.enc.Hex.parse(p.encryptionSchemeIV);
        var w = CryptoJS.TripleDES.decrypt(v, t2, { iv: s });
        var q = CryptoJS.enc.Hex.stringify(w);
        return q;
      }, getKeyFromEncryptedPKCS8PEM: function(s, q) {
        var p = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(s, q);
        var r = this.getKeyFromPlainPrivatePKCS8Hex(p);
        return r;
      }, parsePlainPrivatePKCS8Hex: function(s) {
        var v = ASN1HEX;
        var u = v.getChildIdx;
        var t2 = v.getV;
        var q = {};
        q.algparam = null;
        if (s.substr(0, 2) != "30") {
          throw new Error("malformed plain PKCS8 private key(code:001)");
        }
        var r = u(s, 0);
        if (r.length < 3) {
          throw new Error("malformed plain PKCS8 private key(code:002)");
        }
        if (s.substr(r[1], 2) != "30") {
          throw new Error("malformed PKCS8 private key(code:003)");
        }
        var p = u(s, r[1]);
        if (p.length != 2) {
          throw new Error("malformed PKCS8 private key(code:004)");
        }
        if (s.substr(p[0], 2) != "06") {
          throw new Error("malformed PKCS8 private key(code:005)");
        }
        q.algoid = t2(s, p[0]);
        if (s.substr(p[1], 2) == "06") {
          q.algparam = t2(s, p[1]);
        }
        if (s.substr(r[2], 2) != "04") {
          throw new Error("malformed PKCS8 private key(code:006)");
        }
        q.keyidx = v.getVidx(s, r[2]);
        return q;
      }, getKeyFromPlainPrivatePKCS8PEM: function(q) {
        var p = pemtohex(q, "PRIVATE KEY");
        var r = this.getKeyFromPlainPrivatePKCS8Hex(p);
        return r;
      }, getKeyFromPlainPrivatePKCS8Hex: function(p) {
        var q = this.parsePlainPrivatePKCS8Hex(p);
        var r;
        if (q.algoid == "2a864886f70d010101") {
          r = new RSAKey();
        } else {
          if (q.algoid == "2a8648ce380401") {
            r = new KJUR2.crypto.DSA();
          } else {
            if (q.algoid == "2a8648ce3d0201") {
              r = new KJUR2.crypto.ECDSA();
            } else {
              throw new Error("unsupported private key algorithm");
            }
          }
        }
        r.readPKCS8PrvKeyHex(p);
        return r;
      }, _getKeyFromPublicPKCS8Hex: function(q) {
        var p;
        var r = ASN1HEX.getVbyList(q, 0, [0, 0], "06");
        if (r === "2a864886f70d010101") {
          p = new RSAKey();
        } else {
          if (r === "2a8648ce380401") {
            p = new KJUR2.crypto.DSA();
          } else {
            if (r === "2a8648ce3d0201") {
              p = new KJUR2.crypto.ECDSA();
            } else {
              throw new Error("unsupported PKCS#8 public key hex");
            }
          }
        }
        p.readPKCS8PubKeyHex(q);
        return p;
      }, parsePublicRawRSAKeyHex: function(r) {
        var u = ASN1HEX;
        var t2 = u.getChildIdx;
        var s = u.getV;
        var p = {};
        if (r.substr(0, 2) != "30") {
          throw new Error("malformed RSA key(code:001)");
        }
        var q = t2(r, 0);
        if (q.length != 2) {
          throw new Error("malformed RSA key(code:002)");
        }
        if (r.substr(q[0], 2) != "02") {
          throw new Error("malformed RSA key(code:003)");
        }
        p.n = s(r, q[0]);
        if (r.substr(q[1], 2) != "02") {
          throw new Error("malformed RSA key(code:004)");
        }
        p.e = s(r, q[1]);
        return p;
      }, parsePublicPKCS8Hex: function(t2) {
        var v = ASN1HEX;
        var u = v.getChildIdx;
        var s = v.getV;
        var q = {};
        q.algparam = null;
        var r = u(t2, 0);
        if (r.length != 2) {
          throw new Error("outer DERSequence shall have 2 elements: " + r.length);
        }
        var w = r[0];
        if (t2.substr(w, 2) != "30") {
          throw new Error("malformed PKCS8 public key(code:001)");
        }
        var p = u(t2, w);
        if (p.length != 2) {
          throw new Error("malformed PKCS8 public key(code:002)");
        }
        if (t2.substr(p[0], 2) != "06") {
          throw new Error("malformed PKCS8 public key(code:003)");
        }
        q.algoid = s(t2, p[0]);
        if (t2.substr(p[1], 2) == "06") {
          q.algparam = s(t2, p[1]);
        } else {
          if (t2.substr(p[1], 2) == "30") {
            q.algparam = {};
            q.algparam.p = v.getVbyList(t2, p[1], [0], "02");
            q.algparam.q = v.getVbyList(t2, p[1], [1], "02");
            q.algparam.g = v.getVbyList(t2, p[1], [2], "02");
          }
        }
        if (t2.substr(r[1], 2) != "03") {
          throw new Error("malformed PKCS8 public key(code:004)");
        }
        q.key = s(t2, r[1]).substr(2);
        return q;
      } };
    }();
    KEYUTIL.getKey = function(l, k, n) {
      var G = ASN1HEX, L = G.getChildIdx, v = G.getV, d = G.getVbyList, c = KJUR2.crypto, i = c.ECDSA, C = c.DSA, w = RSAKey, M = pemtohex, F = KEYUTIL;
      if (typeof w != "undefined" && l instanceof w) {
        return l;
      }
      if (typeof i != "undefined" && l instanceof i) {
        return l;
      }
      if (typeof C != "undefined" && l instanceof C) {
        return l;
      }
      if (l.curve !== void 0 && l.xy !== void 0 && l.d === void 0) {
        return new i({ pub: l.xy, curve: l.curve });
      }
      if (l.curve !== void 0 && l.d !== void 0) {
        return new i({ prv: l.d, curve: l.curve });
      }
      if (l.kty === void 0 && l.n !== void 0 && l.e !== void 0 && l.d === void 0) {
        var P = new w();
        P.setPublic(l.n, l.e);
        return P;
      }
      if (l.kty === void 0 && l.n !== void 0 && l.e !== void 0 && l.d !== void 0 && l.p !== void 0 && l.q !== void 0 && l.dp !== void 0 && l.dq !== void 0 && l.co !== void 0 && l.qi === void 0) {
        var P = new w();
        P.setPrivateEx(l.n, l.e, l.d, l.p, l.q, l.dp, l.dq, l.co);
        return P;
      }
      if (l.kty === void 0 && l.n !== void 0 && l.e !== void 0 && l.d !== void 0 && l.p === void 0) {
        var P = new w();
        P.setPrivate(l.n, l.e, l.d);
        return P;
      }
      if (l.p !== void 0 && l.q !== void 0 && l.g !== void 0 && l.y !== void 0 && l.x === void 0) {
        var P = new C();
        P.setPublic(l.p, l.q, l.g, l.y);
        return P;
      }
      if (l.p !== void 0 && l.q !== void 0 && l.g !== void 0 && l.y !== void 0 && l.x !== void 0) {
        var P = new C();
        P.setPrivate(l.p, l.q, l.g, l.y, l.x);
        return P;
      }
      if (l.kty === "RSA" && l.n !== void 0 && l.e !== void 0 && l.d === void 0) {
        var P = new w();
        P.setPublic(b64utohex(l.n), b64utohex(l.e));
        return P;
      }
      if (l.kty === "RSA" && l.n !== void 0 && l.e !== void 0 && l.d !== void 0 && l.p !== void 0 && l.q !== void 0 && l.dp !== void 0 && l.dq !== void 0 && l.qi !== void 0) {
        var P = new w();
        P.setPrivateEx(b64utohex(l.n), b64utohex(l.e), b64utohex(l.d), b64utohex(l.p), b64utohex(l.q), b64utohex(l.dp), b64utohex(l.dq), b64utohex(l.qi));
        return P;
      }
      if (l.kty === "RSA" && l.n !== void 0 && l.e !== void 0 && l.d !== void 0) {
        var P = new w();
        P.setPrivate(b64utohex(l.n), b64utohex(l.e), b64utohex(l.d));
        return P;
      }
      if (l.kty === "EC" && l.crv !== void 0 && l.x !== void 0 && l.y !== void 0 && l.d === void 0) {
        var j = new i({ curve: l.crv });
        var t2 = j.ecparams.keycharlen;
        var B = ("0000000000" + b64utohex(l.x)).slice(-t2);
        var z2 = ("0000000000" + b64utohex(l.y)).slice(-t2);
        var u = "04" + B + z2;
        j.setPublicKeyHex(u);
        return j;
      }
      if (l.kty === "EC" && l.crv !== void 0 && l.x !== void 0 && l.y !== void 0 && l.d !== void 0) {
        var j = new i({ curve: l.crv });
        var t2 = j.ecparams.keycharlen;
        var B = ("0000000000" + b64utohex(l.x)).slice(-t2);
        var z2 = ("0000000000" + b64utohex(l.y)).slice(-t2);
        var u = "04" + B + z2;
        var b = ("0000000000" + b64utohex(l.d)).slice(-t2);
        j.setPublicKeyHex(u);
        j.setPrivateKeyHex(b);
        return j;
      }
      if (n === "pkcs5prv") {
        var J = l, G = ASN1HEX, N, P;
        N = L(J, 0);
        if (N.length === 9) {
          P = new w();
          P.readPKCS5PrvKeyHex(J);
        } else {
          if (N.length === 6) {
            P = new C();
            P.readPKCS5PrvKeyHex(J);
          } else {
            if (N.length > 2 && J.substr(N[1], 2) === "04") {
              P = new i();
              P.readPKCS5PrvKeyHex(J);
            } else {
              throw new Error("unsupported PKCS#1/5 hexadecimal key");
            }
          }
        }
        return P;
      }
      if (n === "pkcs8prv") {
        var P = F.getKeyFromPlainPrivatePKCS8Hex(l);
        return P;
      }
      if (n === "pkcs8pub") {
        return F._getKeyFromPublicPKCS8Hex(l);
      }
      if (n === "x509pub") {
        return X509.getPublicKeyFromCertHex(l);
      }
      if (l.indexOf("-END CERTIFICATE-", 0) != -1 || l.indexOf("-END X509 CERTIFICATE-", 0) != -1 || l.indexOf("-END TRUSTED CERTIFICATE-", 0) != -1) {
        return X509.getPublicKeyFromCertPEM(l);
      }
      if (l.indexOf("-END PUBLIC KEY-") != -1) {
        var O = pemtohex(l, "PUBLIC KEY");
        return F._getKeyFromPublicPKCS8Hex(O);
      }
      if (l.indexOf("-END RSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") == -1) {
        var m = M(l, "RSA PRIVATE KEY");
        return F.getKey(m, null, "pkcs5prv");
      }
      if (l.indexOf("-END DSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") == -1) {
        var I = M(l, "DSA PRIVATE KEY");
        var E = d(I, 0, [1], "02");
        var D = d(I, 0, [2], "02");
        var K = d(I, 0, [3], "02");
        var r = d(I, 0, [4], "02");
        var s = d(I, 0, [5], "02");
        var P = new C();
        P.setPrivate(new BigInteger(E, 16), new BigInteger(D, 16), new BigInteger(K, 16), new BigInteger(r, 16), new BigInteger(s, 16));
        return P;
      }
      if (l.indexOf("-END EC PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") == -1) {
        var m = M(l, "EC PRIVATE KEY");
        return F.getKey(m, null, "pkcs5prv");
      }
      if (l.indexOf("-END PRIVATE KEY-") != -1) {
        return F.getKeyFromPlainPrivatePKCS8PEM(l);
      }
      if (l.indexOf("-END RSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") != -1) {
        var o = F.getDecryptedKeyHex(l, k);
        var H = new RSAKey();
        H.readPKCS5PrvKeyHex(o);
        return H;
      }
      if (l.indexOf("-END EC PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") != -1) {
        var I = F.getDecryptedKeyHex(l, k);
        var P = d(I, 0, [1], "04");
        var f = d(I, 0, [2, 0], "06");
        var A = d(I, 0, [3, 0], "03").substr(2);
        var e = "";
        if (KJUR2.crypto.OID.oidhex2name[f] !== void 0) {
          e = KJUR2.crypto.OID.oidhex2name[f];
        } else {
          throw new Error("undefined OID(hex) in KJUR.crypto.OID: " + f);
        }
        var j = new i({ curve: e });
        j.setPublicKeyHex(A);
        j.setPrivateKeyHex(P);
        j.isPublic = false;
        return j;
      }
      if (l.indexOf("-END DSA PRIVATE KEY-") != -1 && l.indexOf("4,ENCRYPTED") != -1) {
        var I = F.getDecryptedKeyHex(l, k);
        var E = d(I, 0, [1], "02");
        var D = d(I, 0, [2], "02");
        var K = d(I, 0, [3], "02");
        var r = d(I, 0, [4], "02");
        var s = d(I, 0, [5], "02");
        var P = new C();
        P.setPrivate(new BigInteger(E, 16), new BigInteger(D, 16), new BigInteger(K, 16), new BigInteger(r, 16), new BigInteger(s, 16));
        return P;
      }
      if (l.indexOf("-END ENCRYPTED PRIVATE KEY-") != -1) {
        return F.getKeyFromEncryptedPKCS8PEM(l, k);
      }
      throw new Error("not supported argument");
    };
    KEYUTIL.generateKeypair = function(a, c) {
      if (a == "RSA") {
        var b = c;
        var h = new RSAKey();
        h.generate(b, "10001");
        h.isPrivate = true;
        h.isPublic = true;
        var f = new RSAKey();
        var e = h.n.toString(16);
        var i = h.e.toString(16);
        f.setPublic(e, i);
        f.isPrivate = false;
        f.isPublic = true;
        var k = {};
        k.prvKeyObj = h;
        k.pubKeyObj = f;
        return k;
      } else {
        if (a == "EC") {
          var d = c;
          var g = new KJUR2.crypto.ECDSA({ curve: d });
          var j = g.generateKeyPairHex();
          var h = new KJUR2.crypto.ECDSA({ curve: d });
          h.setPublicKeyHex(j.ecpubhex);
          h.setPrivateKeyHex(j.ecprvhex);
          h.isPrivate = true;
          h.isPublic = false;
          var f = new KJUR2.crypto.ECDSA({ curve: d });
          f.setPublicKeyHex(j.ecpubhex);
          f.isPrivate = false;
          f.isPublic = true;
          var k = {};
          k.prvKeyObj = h;
          k.pubKeyObj = f;
          return k;
        } else {
          throw new Error("unknown algorithm: " + a);
        }
      }
    };
    KEYUTIL.getPEM = function(b, D, y, m, q, j) {
      var F = KJUR2, k = F.asn1, z2 = k.DERObjectIdentifier, f = k.DERInteger, l = k.ASN1Util.newObject, a = k.x509, C = a.SubjectPublicKeyInfo, e = F.crypto, u = e.DSA, r = e.ECDSA, n = RSAKey;
      function A(s) {
        var H = l({ seq: [{ "int": 0 }, { "int": { bigint: s.n } }, { "int": s.e }, { "int": { bigint: s.d } }, { "int": { bigint: s.p } }, { "int": { bigint: s.q } }, { "int": { bigint: s.dmp1 } }, { "int": { bigint: s.dmq1 } }, { "int": { bigint: s.coeff } }] });
        return H;
      }
      function B(H) {
        var s = l({ seq: [{ "int": 1 }, { octstr: { hex: H.prvKeyHex } }, { tag: ["a0", true, { oid: { name: H.curveName } }] }, { tag: ["a1", true, { bitstr: { hex: "00" + H.pubKeyHex } }] }] });
        return s;
      }
      function x(s) {
        var H = l({ seq: [{ "int": 0 }, { "int": { bigint: s.p } }, { "int": { bigint: s.q } }, { "int": { bigint: s.g } }, { "int": { bigint: s.y } }, { "int": { bigint: s.x } }] });
        return H;
      }
      if ((n !== void 0 && b instanceof n || u !== void 0 && b instanceof u || r !== void 0 && b instanceof r) && b.isPublic == true && (D === void 0 || D == "PKCS8PUB")) {
        var E = new C(b);
        var w = E.tohex();
        return hextopem(w, "PUBLIC KEY");
      }
      if (D == "PKCS1PRV" && n !== void 0 && b instanceof n && (y === void 0 || y == null) && b.isPrivate == true) {
        var E = A(b);
        var w = E.tohex();
        return hextopem(w, "RSA PRIVATE KEY");
      }
      if (D == "PKCS1PRV" && r !== void 0 && b instanceof r && (y === void 0 || y == null) && b.isPrivate == true) {
        var i = new z2({ name: b.curveName });
        var v = i.tohex();
        var h = B(b);
        var t2 = h.tohex();
        var p = "";
        p += hextopem(v, "EC PARAMETERS");
        p += hextopem(t2, "EC PRIVATE KEY");
        return p;
      }
      if (D == "PKCS1PRV" && u !== void 0 && b instanceof u && (y === void 0 || y == null) && b.isPrivate == true) {
        var E = x(b);
        var w = E.tohex();
        return hextopem(w, "DSA PRIVATE KEY");
      }
      if (D == "PKCS5PRV" && n !== void 0 && b instanceof n && (y !== void 0 && y != null) && b.isPrivate == true) {
        var E = A(b);
        var w = E.tohex();
        if (m === void 0) {
          m = "DES-EDE3-CBC";
        }
        return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", w, y, m, j);
      }
      if (D == "PKCS5PRV" && r !== void 0 && b instanceof r && (y !== void 0 && y != null) && b.isPrivate == true) {
        var E = B(b);
        var w = E.tohex();
        if (m === void 0) {
          m = "DES-EDE3-CBC";
        }
        return this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", w, y, m, j);
      }
      if (D == "PKCS5PRV" && u !== void 0 && b instanceof u && (y !== void 0 && y != null) && b.isPrivate == true) {
        var E = x(b);
        var w = E.tohex();
        if (m === void 0) {
          m = "DES-EDE3-CBC";
        }
        return this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", w, y, m, j);
      }
      var o = function(H, s) {
        var J = c(H, s);
        var I = new l({ seq: [{ seq: [{ oid: { name: "pkcs5PBES2" } }, { seq: [{ seq: [{ oid: { name: "pkcs5PBKDF2" } }, { seq: [{ octstr: { hex: J.pbkdf2Salt } }, { "int": J.pbkdf2Iter }] }] }, { seq: [{ oid: { name: "des-EDE3-CBC" } }, { octstr: { hex: J.encryptionSchemeIV } }] }] }] }, { octstr: { hex: J.ciphertext } }] });
        return I.tohex();
      };
      var c = function(O, P) {
        var I = 100;
        var N = CryptoJS.lib.WordArray.random(8);
        var M = "DES-EDE3-CBC";
        var s = CryptoJS.lib.WordArray.random(8);
        var J = CryptoJS.PBKDF2(P, N, { keySize: 192 / 32, iterations: I });
        var K = CryptoJS.enc.Hex.parse(O);
        var L = CryptoJS.TripleDES.encrypt(K, J, { iv: s }) + "";
        var H = {};
        H.ciphertext = L;
        H.pbkdf2Salt = CryptoJS.enc.Hex.stringify(N);
        H.pbkdf2Iter = I;
        H.encryptionSchemeAlg = M;
        H.encryptionSchemeIV = CryptoJS.enc.Hex.stringify(s);
        return H;
      };
      if (D == "PKCS8PRV" && n != void 0 && b instanceof n && b.isPrivate == true) {
        var g = A(b);
        var d = g.tohex();
        var E = l({ seq: [{ "int": 0 }, { seq: [{ oid: { name: "rsaEncryption" } }, { "null": true }] }, { octstr: { hex: d } }] });
        var w = E.tohex();
        if (y === void 0 || y == null) {
          return hextopem(w, "PRIVATE KEY");
        } else {
          var t2 = o(w, y);
          return hextopem(t2, "ENCRYPTED PRIVATE KEY");
        }
      }
      if (D == "PKCS8PRV" && r !== void 0 && b instanceof r && b.isPrivate == true) {
        var G = { seq: [{ "int": 1 }, { octstr: { hex: b.prvKeyHex } }] };
        if (typeof b.pubKeyHex == "string") {
          G.seq.push({ tag: ["a1", true, { bitstr: { hex: "00" + b.pubKeyHex } }] });
        }
        var g = new l(G);
        var d = g.tohex();
        var E = l({ seq: [{ "int": 0 }, { seq: [{ oid: { name: "ecPublicKey" } }, { oid: { name: b.curveName } }] }, { octstr: { hex: d } }] });
        var w = E.tohex();
        if (y === void 0 || y == null) {
          return hextopem(w, "PRIVATE KEY");
        } else {
          var t2 = o(w, y);
          return hextopem(t2, "ENCRYPTED PRIVATE KEY");
        }
      }
      if (D == "PKCS8PRV" && u !== void 0 && b instanceof u && b.isPrivate == true) {
        var g = new f({ bigint: b.x });
        var d = g.tohex();
        var E = l({ seq: [{ "int": 0 }, { seq: [{ oid: { name: "dsa" } }, { seq: [{ "int": { bigint: b.p } }, { "int": { bigint: b.q } }, { "int": { bigint: b.g } }] }] }, { octstr: { hex: d } }] });
        var w = E.tohex();
        if (y === void 0 || y == null) {
          return hextopem(w, "PRIVATE KEY");
        } else {
          var t2 = o(w, y);
          return hextopem(t2, "ENCRYPTED PRIVATE KEY");
        }
      }
      throw new Error("unsupported object nor format");
    };
    KEYUTIL.getKeyFromCSRPEM = function(b) {
      var a = pemtohex(b, "CERTIFICATE REQUEST");
      var c = KEYUTIL.getKeyFromCSRHex(a);
      return c;
    };
    KEYUTIL.getKeyFromCSRHex = function(a) {
      var c = KEYUTIL.parseCSRHex(a);
      var b = KEYUTIL.getKey(c.p8pubkeyhex, null, "pkcs8pub");
      return b;
    };
    KEYUTIL.parseCSRHex = function(d) {
      var i = ASN1HEX;
      var f = i.getChildIdx;
      var c = i.getTLV;
      var b = {};
      var g = d;
      if (g.substr(0, 2) != "30") {
        throw new Error("malformed CSR(code:001)");
      }
      var e = f(g, 0);
      if (e.length < 1) {
        throw new Error("malformed CSR(code:002)");
      }
      if (g.substr(e[0], 2) != "30") {
        throw new Error("malformed CSR(code:003)");
      }
      var a = f(g, e[0]);
      if (a.length < 3) {
        throw new Error("malformed CSR(code:004)");
      }
      b.p8pubkeyhex = c(g, a[2]);
      return b;
    };
    KEYUTIL.getKeyID = function(f) {
      var c = KEYUTIL;
      var e = ASN1HEX;
      if (typeof f === "string" && f.indexOf("BEGIN ") != -1) {
        f = c.getKey(f);
      }
      var d = pemtohex(c.getPEM(f));
      var b = e.getIdxbyList(d, 0, [1]);
      var a = e.getV(d, b).substring(2);
      return KJUR2.crypto.Util.hashHex(a, "sha1");
    };
    KEYUTIL.getJWK = function(d, h, g, b, f) {
      var i;
      var k = {};
      var e;
      var c = KJUR2.crypto.Util.hashHex;
      if (typeof d == "string") {
        i = KEYUTIL.getKey(d);
        if (d.indexOf("CERTIFICATE") != -1) {
          e = pemtohex(d);
        }
      } else {
        if (typeof d == "object") {
          if (d instanceof X509) {
            i = d.getPublicKey();
            e = d.hex;
          } else {
            i = d;
          }
        } else {
          throw new Error("unsupported keyinfo type");
        }
      }
      if (i instanceof RSAKey && i.isPrivate) {
        k.kty = "RSA";
        k.n = hextob64u(i.n.toString(16));
        k.e = hextob64u(i.e.toString(16));
        k.d = hextob64u(i.d.toString(16));
        k.p = hextob64u(i.p.toString(16));
        k.q = hextob64u(i.q.toString(16));
        k.dp = hextob64u(i.dmp1.toString(16));
        k.dq = hextob64u(i.dmq1.toString(16));
        k.qi = hextob64u(i.coeff.toString(16));
      } else {
        if (i instanceof RSAKey && i.isPublic) {
          k.kty = "RSA";
          k.n = hextob64u(i.n.toString(16));
          k.e = hextob64u(i.e.toString(16));
        } else {
          if (i instanceof KJUR2.crypto.ECDSA && i.isPrivate) {
            var a = i.getShortNISTPCurveName();
            if (a !== "P-256" && a !== "P-384" && a !== "P-521") {
              throw new Error("unsupported curve name for JWT: " + a);
            }
            var j = i.getPublicKeyXYHex();
            k.kty = "EC";
            k.crv = a;
            k.x = hextob64u(j.x);
            k.y = hextob64u(j.y);
            k.d = hextob64u(i.prvKeyHex);
          } else {
            if (i instanceof KJUR2.crypto.ECDSA && i.isPublic) {
              var a = i.getShortNISTPCurveName();
              if (a !== "P-256" && a !== "P-384" && a !== "P-521") {
                throw new Error("unsupported curve name for JWT: " + a);
              }
              var j = i.getPublicKeyXYHex();
              k.kty = "EC";
              k.crv = a;
              k.x = hextob64u(j.x);
              k.y = hextob64u(j.y);
            }
          }
        }
      }
      if (k.kty == void 0) {
        throw new Error("unsupported keyinfo");
      }
      if (!i.isPrivate && h != true) {
        k.kid = KJUR2.jws.JWS.getJWKthumbprint(k);
      }
      if (e != void 0 && g != true) {
        k.x5c = [hex2b64(e)];
      }
      if (e != void 0 && b != true) {
        k.x5t = b64tob64u(hex2b64(c(e, "sha1")));
      }
      if (e != void 0 && f != true) {
        k["x5t#S256"] = b64tob64u(hex2b64(c(e, "sha256")));
      }
      return k;
    };
    KEYUTIL.getJWKFromKey = function(a) {
      return KEYUTIL.getJWK(a, true, true, true, true);
    };
    RSAKey.getPosArrayOfChildrenFromHex = function(a) {
      return ASN1HEX.getChildIdx(a, 0);
    };
    RSAKey.getHexValueArrayOfChildrenFromHex = function(f) {
      var n = ASN1HEX;
      var i = n.getV;
      var k = RSAKey.getPosArrayOfChildrenFromHex(f);
      var e = i(f, k[0]);
      var j = i(f, k[1]);
      var b = i(f, k[2]);
      var c = i(f, k[3]);
      var h = i(f, k[4]);
      var g = i(f, k[5]);
      var m = i(f, k[6]);
      var l = i(f, k[7]);
      var d = i(f, k[8]);
      var k = new Array();
      k.push(e, j, b, c, h, g, m, l, d);
      return k;
    };
    RSAKey.prototype.readPrivateKeyFromPEMString = function(d) {
      var c = pemtohex(d);
      var b = RSAKey.getHexValueArrayOfChildrenFromHex(c);
      this.setPrivateEx(b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
    };
    RSAKey.prototype.readPKCS5PrvKeyHex = function(c) {
      var b = RSAKey.getHexValueArrayOfChildrenFromHex(c);
      this.setPrivateEx(b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
    };
    RSAKey.prototype.readPKCS8PrvKeyHex = function(e) {
      var c, i, k, b, a, f, d, j;
      var m = ASN1HEX;
      var l = m.getVbyListEx;
      if (m.isASN1HEX(e) === false) {
        throw new Error("not ASN.1 hex string");
      }
      try {
        c = l(e, 0, [2, 0, 1], "02");
        i = l(e, 0, [2, 0, 2], "02");
        k = l(e, 0, [2, 0, 3], "02");
        b = l(e, 0, [2, 0, 4], "02");
        a = l(e, 0, [2, 0, 5], "02");
        f = l(e, 0, [2, 0, 6], "02");
        d = l(e, 0, [2, 0, 7], "02");
        j = l(e, 0, [2, 0, 8], "02");
      } catch (g) {
        throw new Error("malformed PKCS#8 plain RSA private key");
      }
      this.setPrivateEx(c, i, k, b, a, f, d, j);
    };
    RSAKey.prototype.readPKCS5PubKeyHex = function(c) {
      var e = ASN1HEX;
      var b = e.getV;
      if (e.isASN1HEX(c) === false) {
        throw new Error("keyHex is not ASN.1 hex string");
      }
      var a = e.getChildIdx(c, 0);
      if (a.length !== 2 || c.substr(a[0], 2) !== "02" || c.substr(a[1], 2) !== "02") {
        throw new Error("wrong hex for PKCS#5 public key");
      }
      var f = b(c, a[0]);
      var d = b(c, a[1]);
      this.setPublic(f, d);
    };
    RSAKey.prototype.readPKCS8PubKeyHex = function(b) {
      var c = ASN1HEX;
      if (c.isASN1HEX(b) === false) {
        throw new Error("not ASN.1 hex string");
      }
      if (c.getTLVbyListEx(b, 0, [0, 0]) !== "06092a864886f70d010101") {
        throw new Error("not PKCS8 RSA public key");
      }
      var a = c.getTLVbyListEx(b, 0, [1, 0]);
      this.readPKCS5PubKeyHex(a);
    };
    RSAKey.prototype.readCertPubKeyHex = function(b, d) {
      var a, c;
      a = new X509();
      a.readCertHex(b);
      c = a.getPublicKeyHex();
      this.readPKCS8PubKeyHex(c);
    };
    var _RE_HEXDECONLY = new RegExp("[^0-9a-f]", "gi");
    function _zeroPaddingOfSignature(e, d) {
      var c = "";
      var a = d / 4 - e.length;
      for (var b = 0; b < a; b++) {
        c = c + "0";
      }
      return c + e;
    }
    RSAKey.prototype.sign = function(d, a) {
      var b = function(e) {
        return KJUR2.crypto.Util.hashString(e, a);
      };
      var c = b(d);
      return this.signWithMessageHash(c, a);
    };
    RSAKey.prototype.signWithMessageHash = function(e, c) {
      var f = KJUR2.crypto.Util.getPaddedDigestInfoHex(e, c, this.n.bitLength());
      var b = parseBigInt(f, 16);
      var d = this.doPrivate(b);
      var a = d.toString(16);
      return _zeroPaddingOfSignature(a, this.n.bitLength());
    };
    function pss_mgf1_str(c, a, e) {
      var b = "", d = 0;
      while (b.length < a) {
        b += hextorstr(e(rstrtohex(c + String.fromCharCode.apply(String, [(d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255]))));
        d += 1;
      }
      return b;
    }
    RSAKey.prototype.signPSS = function(e, a, d) {
      var c = function(f) {
        return KJUR2.crypto.Util.hashHex(f, a);
      };
      var b = c(rstrtohex(e));
      if (d === void 0) {
        d = -1;
      }
      return this.signWithMessageHashPSS(b, a, d);
    };
    RSAKey.prototype.signWithMessageHashPSS = function(l, a, k) {
      var b = hextorstr(l);
      var g = b.length;
      var m = this.n.bitLength() - 1;
      var c = Math.ceil(m / 8);
      var d;
      var o = function(i) {
        return KJUR2.crypto.Util.hashHex(i, a);
      };
      if (k === -1 || k === void 0) {
        k = g;
      } else {
        if (k === -2) {
          k = c - g - 2;
        } else {
          if (k < -2) {
            throw new Error("invalid salt length");
          }
        }
      }
      if (c < g + k + 2) {
        throw new Error("data too long");
      }
      var f = "";
      if (k > 0) {
        f = new Array(k);
        new SecureRandom().nextBytes(f);
        f = String.fromCharCode.apply(String, f);
      }
      var n = hextorstr(o(rstrtohex("\0\0\0\0\0\0\0\0" + b + f)));
      var j = [];
      for (d = 0; d < c - k - g - 2; d += 1) {
        j[d] = 0;
      }
      var e = String.fromCharCode.apply(String, j) + "" + f;
      var h = pss_mgf1_str(n, e.length, o);
      var q = [];
      for (d = 0; d < e.length; d += 1) {
        q[d] = e.charCodeAt(d) ^ h.charCodeAt(d);
      }
      var p = 65280 >> 8 * c - m & 255;
      q[0] &= ~p;
      for (d = 0; d < g; d++) {
        q.push(n.charCodeAt(d));
      }
      q.push(188);
      return _zeroPaddingOfSignature(this.doPrivate(new BigInteger(q)).toString(16), this.n.bitLength());
    };
    function _rsasign_getAlgNameAndHashFromHexDisgestInfo(f) {
      for (var e in KJUR2.crypto.Util.DIGESTINFOHEAD) {
        var d = KJUR2.crypto.Util.DIGESTINFOHEAD[e];
        var b = d.length;
        if (f.substring(0, b) == d) {
          var c = [e, f.substring(b)];
          return c;
        }
      }
      return [];
    }
    RSAKey.prototype.verify = function(f, l) {
      l = l.toLowerCase();
      if (l.match(/^[0-9a-f]+$/) == null) {
        return false;
      }
      var b = parseBigInt(l, 16);
      var k = this.n.bitLength();
      if (b.bitLength() > k) {
        return false;
      }
      var j = this.doPublic(b);
      var i = j.toString(16);
      if (i.length + 3 != k / 4) {
        return false;
      }
      var e = i.replace(/^1f+00/, "");
      var g = _rsasign_getAlgNameAndHashFromHexDisgestInfo(e);
      if (g.length == 0) {
        return false;
      }
      var d = g[0];
      var h = g[1];
      var a = function(m) {
        return KJUR2.crypto.Util.hashString(m, d);
      };
      var c = a(f);
      return h == c;
    };
    RSAKey.prototype.verifyWithMessageHash = function(e, a) {
      if (a.length != Math.ceil(this.n.bitLength() / 4)) {
        return false;
      }
      var b = parseBigInt(a, 16);
      if (b.bitLength() > this.n.bitLength()) {
        return 0;
      }
      var h = this.doPublic(b);
      var g = h.toString(16).replace(/^1f+00/, "");
      var c = _rsasign_getAlgNameAndHashFromHexDisgestInfo(g);
      if (c.length == 0) {
        return false;
      }
      var d = c[0];
      var f = c[1];
      return f == e;
    };
    RSAKey.prototype.verifyPSS = function(c, b, a, f) {
      var e = function(g) {
        return KJUR2.crypto.Util.hashHex(g, a);
      };
      var d = e(rstrtohex(c));
      if (f === void 0) {
        f = -1;
      }
      return this.verifyWithMessageHashPSS(d, b, a, f);
    };
    RSAKey.prototype.verifyWithMessageHashPSS = function(f, s, l, c) {
      if (s.length != Math.ceil(this.n.bitLength() / 4)) {
        return false;
      }
      var k = new BigInteger(s, 16);
      var r = function(i) {
        return KJUR2.crypto.Util.hashHex(i, l);
      };
      var j = hextorstr(f);
      var h = j.length;
      var g = this.n.bitLength() - 1;
      var m = Math.ceil(g / 8);
      var q;
      if (c === -1 || c === void 0) {
        c = h;
      } else {
        if (c === -2) {
          c = m - h - 2;
        } else {
          if (c < -2) {
            throw new Error("invalid salt length");
          }
        }
      }
      if (m < h + c + 2) {
        throw new Error("data too long");
      }
      var a = this.doPublic(k).toByteArray();
      for (q = 0; q < a.length; q += 1) {
        a[q] &= 255;
      }
      while (a.length < m) {
        a.unshift(0);
      }
      if (a[m - 1] !== 188) {
        throw new Error("encoded message does not end in 0xbc");
      }
      a = String.fromCharCode.apply(String, a);
      var d = a.substr(0, m - h - 1);
      var e = a.substr(d.length, h);
      var p = 65280 >> 8 * m - g & 255;
      if ((d.charCodeAt(0) & p) !== 0) {
        throw new Error("bits beyond keysize not zero");
      }
      var n = pss_mgf1_str(e, d.length, r);
      var o = [];
      for (q = 0; q < d.length; q += 1) {
        o[q] = d.charCodeAt(q) ^ n.charCodeAt(q);
      }
      o[0] &= ~p;
      var b = m - h - c - 2;
      for (q = 0; q < b; q += 1) {
        if (o[q] !== 0) {
          throw new Error("leftmost octets not zero");
        }
      }
      if (o[b] !== 1) {
        throw new Error("0x01 marker not found");
      }
      return e === hextorstr(r(rstrtohex("\0\0\0\0\0\0\0\0" + j + String.fromCharCode.apply(String, o.slice(-c)))));
    };
    RSAKey.SALT_LEN_HLEN = -1;
    RSAKey.SALT_LEN_MAX = -2;
    RSAKey.SALT_LEN_RECOVER = -2;
    function X509(u) {
      var n = ASN1HEX, r = n.getChildIdx, k = n.getV, x = n.dump, j = n.parse, b = n.getTLV, c = n.getVbyList, o = n.getVbyListEx, a = n.getTLVbyList, p = n.getTLVbyListEx, l = n.getIdxbyList, f = n.getIdxbyListEx, m = n.getVidx, w = n.getInt, t2 = n.oidname, q = n.hextooidstr, d = X509, v = pemtohex, g;
      try {
        g = KJUR2.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
      } catch (s) {
      }
      this.HEX2STAG = { "0c": "utf8", "13": "prn", "16": "ia5", "1a": "vis", "1e": "bmp" };
      this.hex = null;
      this.version = 0;
      this.foffset = 0;
      this.aExtInfo = null;
      this.getVersion = function() {
        if (this.hex === null || this.version !== 0) {
          return this.version;
        }
        var z2 = a(this.hex, 0, [0, 0]);
        if (z2.substr(0, 2) == "a0") {
          var A = a(z2, 0, [0]);
          var y = w(A, 0);
          if (y < 0 || 2 < y) {
            throw new Error("malformed version field");
          }
          this.version = y + 1;
          return this.version;
        } else {
          this.version = 1;
          this.foffset = -1;
          return 1;
        }
      };
      this.getSerialNumberHex = function() {
        return o(this.hex, 0, [0, 0], "02");
      };
      this.getSignatureAlgorithmField = function() {
        var y = p(this.hex, 0, [0, 1]);
        return this.getAlgorithmIdentifierName(y);
      };
      this.getAlgorithmIdentifierName = function(y) {
        for (var z2 in g) {
          if (y === g[z2]) {
            return z2;
          }
        }
        return t2(o(y, 0, [0], "06"));
      };
      this.getIssuer = function() {
        return this.getX500Name(this.getIssuerHex());
      };
      this.getIssuerHex = function() {
        return a(this.hex, 0, [0, 3 + this.foffset], "30");
      };
      this.getIssuerString = function() {
        var y = this.getIssuer();
        return y.str;
      };
      this.getSubject = function() {
        return this.getX500Name(this.getSubjectHex());
      };
      this.getSubjectHex = function() {
        return a(this.hex, 0, [0, 5 + this.foffset], "30");
      };
      this.getSubjectString = function() {
        var y = this.getSubject();
        return y.str;
      };
      this.getNotBefore = function() {
        var y = c(this.hex, 0, [0, 4 + this.foffset, 0]);
        y = y.replace(/(..)/g, "%$1");
        y = decodeURIComponent(y);
        return y;
      };
      this.getNotAfter = function() {
        var y = c(this.hex, 0, [0, 4 + this.foffset, 1]);
        y = y.replace(/(..)/g, "%$1");
        y = decodeURIComponent(y);
        return y;
      };
      this.getPublicKeyHex = function() {
        return this.getSPKI();
      };
      this.getSPKI = function() {
        return a(this.hex, 0, [0, 6 + this.foffset], "30");
      };
      this.getSPKIValue = function() {
        var y = this.getSPKI();
        if (y == null) {
          return null;
        }
        return c(y, 0, [1], "03", true);
      };
      this.getPublicKeyIdx = function() {
        return l(this.hex, 0, [0, 6 + this.foffset], "30");
      };
      this.getPublicKeyContentIdx = function() {
        var y = this.getPublicKeyIdx();
        return l(this.hex, y, [1, 0], "30");
      };
      this.getPublicKey = function() {
        return KEYUTIL.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
      };
      this.getSignatureAlgorithmName = function() {
        var y = a(this.hex, 0, [1], "30");
        return this.getAlgorithmIdentifierName(y);
      };
      this.getSignatureValueHex = function() {
        return c(this.hex, 0, [2], "03", true);
      };
      this.verifySignature = function(A) {
        var B = this.getSignatureAlgorithmField();
        var y = this.getSignatureValueHex();
        var z2 = a(this.hex, 0, [0], "30");
        var C = new KJUR2.crypto.Signature({ alg: B });
        C.init(A);
        C.updateHex(z2);
        return C.verify(y);
      };
      this.parseExt = function(H) {
        var A, y, C;
        if (H === void 0) {
          C = this.hex;
          if (this.version !== 3) {
            return -1;
          }
          A = l(C, 0, [0, 7, 0], "30");
          y = r(C, A);
        } else {
          C = pemtohex(H);
          var D = l(C, 0, [0, 3, 0, 0], "06");
          if (k(C, D) != "2a864886f70d01090e") {
            this.aExtInfo = new Array();
            return;
          }
          A = l(C, 0, [0, 3, 0, 1, 0], "30");
          y = r(C, A);
          this.hex = C;
        }
        this.aExtInfo = new Array();
        for (var B = 0; B < y.length; B++) {
          var F = {};
          F.critical = false;
          var E = r(C, y[B]);
          var z2 = 0;
          if (E.length === 3) {
            F.critical = true;
            z2 = 1;
          }
          F.oid = n.hextooidstr(c(C, y[B], [0], "06"));
          var G = l(C, y[B], [1 + z2]);
          F.vidx = m(C, G);
          this.aExtInfo.push(F);
        }
      };
      this.getExtInfo = function(A) {
        var y = this.aExtInfo;
        var B = A;
        if (!A.match(/^[0-9.]+$/)) {
          B = KJUR2.asn1.x509.OID.name2oid(A);
        }
        if (B === "") {
          return void 0;
        }
        for (var z2 = 0; z2 < y.length; z2++) {
          if (y[z2].oid === B) {
            return y[z2];
          }
        }
        return void 0;
      };
      this.getExtBasicConstraints = function(z2, D) {
        if (z2 === void 0 && D === void 0) {
          var B = this.getExtInfo("basicConstraints");
          if (B === void 0) {
            return void 0;
          }
          z2 = b(this.hex, B.vidx);
          D = B.critical;
        }
        var y = { extname: "basicConstraints" };
        if (D) {
          y.critical = true;
        }
        if (z2 === "3000") {
          return y;
        }
        if (z2 === "30030101ff") {
          y.cA = true;
          return y;
        }
        if (z2.substr(0, 12) === "30060101ff02") {
          var C = k(z2, 10);
          var A = parseInt(C, 16);
          y.cA = true;
          y.pathLen = A;
          return y;
        }
        throw new Error("hExtV parse error: " + z2);
      };
      this.getExtNameConstraints = function(H, F) {
        if (H === void 0 && F === void 0) {
          var z2 = this.getExtInfo("nameConstraints");
          if (z2 === void 0) {
            return void 0;
          }
          H = b(this.hex, z2.vidx);
          F = z2.critical;
        }
        var J = { extname: "nameConstraints" };
        if (F) {
          J.critical = true;
        }
        var E = r(H, 0);
        for (var C = 0; C < E.length; C++) {
          var D = [];
          var A = r(H, E[C]);
          for (var B = 0; B < A.length; B++) {
            var G = b(H, A[B]);
            var y = this.getGeneralSubtree(G);
            D.push(y);
          }
          var I = H.substr(E[C], 2);
          if (I == "a0") {
            J.permit = D;
          } else {
            if (I == "a1") {
              J.exclude = D;
            }
          }
        }
        return J;
      };
      this.getGeneralSubtree = function(E) {
        var C = r(E, 0);
        var B = C.length;
        if (B < 1 || 2 < B) {
          throw new Error("wrong num elements");
        }
        var A = this.getGeneralName(b(E, C[0]));
        for (var D = 1; D < B; D++) {
          var z2 = E.substr(C[D], 2);
          var y = k(E, C[D]);
          var F = parseInt(y, 16);
          if (z2 == "80") {
            A.min = F;
          }
          if (z2 == "81") {
            A.max = F;
          }
        }
        return A;
      };
      this.getExtKeyUsage = function(z2, B) {
        if (z2 === void 0 && B === void 0) {
          var A = this.getExtInfo("keyUsage");
          if (A === void 0) {
            return void 0;
          }
          z2 = b(this.hex, A.vidx);
          B = A.critical;
        }
        var y = { extname: "keyUsage" };
        if (B) {
          y.critical = true;
        }
        y.names = this.getExtKeyUsageString(z2).split(",");
        return y;
      };
      this.getExtKeyUsageBin = function(z2) {
        if (z2 === void 0) {
          var A = this.getExtInfo("keyUsage");
          if (A === void 0) {
            return "";
          }
          z2 = b(this.hex, A.vidx);
        }
        if (z2.length != 8 && z2.length != 10) {
          throw new Error("malformed key usage value: " + z2);
        }
        var y = "000000000000000" + parseInt(z2.substr(6), 16).toString(2);
        if (z2.length == 8) {
          y = y.slice(-8);
        }
        if (z2.length == 10) {
          y = y.slice(-16);
        }
        y = y.replace(/0+$/, "");
        if (y == "") {
          y = "0";
        }
        return y;
      };
      this.getExtKeyUsageString = function(A) {
        var B = this.getExtKeyUsageBin(A);
        var y = new Array();
        for (var z2 = 0; z2 < B.length; z2++) {
          if (B.substr(z2, 1) == "1") {
            y.push(X509.KEYUSAGE_NAME[z2]);
          }
        }
        return y.join(",");
      };
      this.getExtSubjectKeyIdentifier = function(A, C) {
        if (A === void 0 && C === void 0) {
          var B = this.getExtInfo("subjectKeyIdentifier");
          if (B === void 0) {
            return void 0;
          }
          A = b(this.hex, B.vidx);
          C = B.critical;
        }
        var y = { extname: "subjectKeyIdentifier" };
        if (C) {
          y.critical = true;
        }
        var z2 = k(A, 0);
        y.kid = { hex: z2 };
        return y;
      };
      this.getExtAuthorityKeyIdentifier = function(E, C) {
        if (E === void 0 && C === void 0) {
          var y = this.getExtInfo("authorityKeyIdentifier");
          if (y === void 0) {
            return void 0;
          }
          E = b(this.hex, y.vidx);
          C = y.critical;
        }
        var F = { extname: "authorityKeyIdentifier" };
        if (C) {
          F.critical = true;
        }
        var D = r(E, 0);
        for (var z2 = 0; z2 < D.length; z2++) {
          var G = E.substr(D[z2], 2);
          if (G === "80") {
            F.kid = { hex: k(E, D[z2]) };
          }
          if (G === "a1") {
            var B = b(E, D[z2]);
            var A = this.getGeneralNames(B);
            F.issuer = A[0]["dn"];
          }
          if (G === "82") {
            F.sn = { hex: k(E, D[z2]) };
          }
        }
        return F;
      };
      this.getExtExtKeyUsage = function(B, D) {
        if (B === void 0 && D === void 0) {
          var C = this.getExtInfo("extKeyUsage");
          if (C === void 0) {
            return void 0;
          }
          B = b(this.hex, C.vidx);
          D = C.critical;
        }
        var y = { extname: "extKeyUsage", array: [] };
        if (D) {
          y.critical = true;
        }
        var z2 = r(B, 0);
        for (var A = 0; A < z2.length; A++) {
          y.array.push(t2(k(B, z2[A])));
        }
        return y;
      };
      this.getExtExtKeyUsageName = function() {
        var C = this.getExtInfo("extKeyUsage");
        if (C === void 0) {
          return C;
        }
        var y = new Array();
        var B = b(this.hex, C.vidx);
        if (B === "") {
          return y;
        }
        var z2 = r(B, 0);
        for (var A = 0; A < z2.length; A++) {
          y.push(t2(k(B, z2[A])));
        }
        return y;
      };
      this.getExtSubjectAltName = function(z2, B) {
        if (z2 === void 0 && B === void 0) {
          var A = this.getExtInfo("subjectAltName");
          if (A === void 0) {
            return void 0;
          }
          z2 = b(this.hex, A.vidx);
          B = A.critical;
        }
        var y = { extname: "subjectAltName", array: [] };
        if (B) {
          y.critical = true;
        }
        y.array = this.getGeneralNames(z2);
        return y;
      };
      this.getExtIssuerAltName = function(z2, B) {
        if (z2 === void 0 && B === void 0) {
          var A = this.getExtInfo("issuerAltName");
          if (A === void 0) {
            return void 0;
          }
          z2 = b(this.hex, A.vidx);
          B = A.critical;
        }
        var y = { extname: "issuerAltName", array: [] };
        if (B) {
          y.critical = true;
        }
        y.array = this.getGeneralNames(z2);
        return y;
      };
      this.getGeneralNames = function(C) {
        var A = r(C, 0);
        var y = [];
        for (var B = 0; B < A.length; B++) {
          var z2 = this.getGeneralName(b(C, A[B]));
          if (z2 !== void 0) {
            y.push(z2);
          }
        }
        return y;
      };
      this.getGeneralName = function(z2) {
        var y = z2.substr(0, 2);
        var B = k(z2, 0);
        var A = hextorstr(B);
        if (y == "81") {
          return { rfc822: A };
        }
        if (y == "82") {
          return { dns: A };
        }
        if (y == "86") {
          return { uri: A };
        }
        if (y == "87") {
          return { ip: hextoip(B) };
        }
        if (y == "a4") {
          return { dn: this.getX500Name(B) };
        }
        if (y == "a0") {
          return { other: this.getOtherName(z2) };
        }
        return void 0;
      };
      this.getExtSubjectAltName2 = function() {
        var C, F, E;
        var D = this.getExtInfo("subjectAltName");
        if (D === void 0) {
          return D;
        }
        var y = new Array();
        var B = b(this.hex, D.vidx);
        var z2 = r(B, 0);
        for (var A = 0; A < z2.length; A++) {
          E = B.substr(z2[A], 2);
          C = k(B, z2[A]);
          if (E === "81") {
            F = hextoutf8(C);
            y.push(["MAIL", F]);
          }
          if (E === "82") {
            F = hextoutf8(C);
            y.push(["DNS", F]);
          }
          if (E === "84") {
            F = X509.hex2dn(C, 0);
            y.push(["DN", F]);
          }
          if (E === "86") {
            F = hextoutf8(C);
            y.push(["URI", F]);
          }
          if (E === "87") {
            F = hextoip(C);
            y.push(["IP", F]);
          }
        }
        return y;
      };
      this.getExtCRLDistributionPoints = function(C, E) {
        if (C === void 0 && E === void 0) {
          var D = this.getExtInfo("cRLDistributionPoints");
          if (D === void 0) {
            return void 0;
          }
          C = b(this.hex, D.vidx);
          E = D.critical;
        }
        var z2 = { extname: "cRLDistributionPoints", array: [] };
        if (E) {
          z2.critical = true;
        }
        var A = r(C, 0);
        for (var B = 0; B < A.length; B++) {
          var y = b(C, A[B]);
          z2.array.push(this.getDistributionPoint(y));
        }
        return z2;
      };
      this.getDistributionPoint = function(D) {
        var A = {};
        var B = r(D, 0);
        for (var C = 0; C < B.length; C++) {
          var z2 = D.substr(B[C], 2);
          var y = b(D, B[C]);
          if (z2 == "a0") {
            A.dpname = this.getDistributionPointName(y);
          }
        }
        return A;
      };
      this.getDistributionPointName = function(D) {
        var A = {};
        var B = r(D, 0);
        for (var C = 0; C < B.length; C++) {
          var z2 = D.substr(B[C], 2);
          var y = b(D, B[C]);
          if (z2 == "a0") {
            A.full = this.getGeneralNames(y);
          }
        }
        return A;
      };
      this.getExtCRLDistributionPointsURI = function() {
        var C = this.getExtCRLDistributionPoints();
        if (C == void 0) {
          return C;
        }
        var z2 = C.array;
        var y = [];
        for (var B = 0; B < z2.length; B++) {
          try {
            if (z2[B].dpname.full[0].uri != void 0) {
              y.push(z2[B].dpname.full[0].uri);
            }
          } catch (A) {
          }
        }
        return y;
      };
      this.getExtAIAInfo = function() {
        var C = this.getExtInfo("authorityInfoAccess");
        if (C === void 0) {
          return C;
        }
        var y = { ocsp: [], caissuer: [] };
        var z2 = r(this.hex, C.vidx);
        for (var A = 0; A < z2.length; A++) {
          var D = c(this.hex, z2[A], [0], "06");
          var B = c(this.hex, z2[A], [1], "86");
          if (D === "2b06010505073001") {
            y.ocsp.push(hextoutf8(B));
          }
          if (D === "2b06010505073002") {
            y.caissuer.push(hextoutf8(B));
          }
        }
        return y;
      };
      this.getExtAuthorityInfoAccess = function(F, D) {
        if (F === void 0 && D === void 0) {
          var y = this.getExtInfo("authorityInfoAccess");
          if (y === void 0) {
            return void 0;
          }
          F = b(this.hex, y.vidx);
          D = y.critical;
        }
        var G = { extname: "authorityInfoAccess", array: [] };
        if (D) {
          G.critical = true;
        }
        var E = r(F, 0);
        for (var z2 = 0; z2 < E.length; z2++) {
          var C = o(F, E[z2], [0], "06");
          var A = c(F, E[z2], [1], "86");
          var B = hextoutf8(A);
          if (C == "2b06010505073001") {
            G.array.push({ ocsp: B });
          } else {
            if (C == "2b06010505073002") {
              G.array.push({ caissuer: B });
            } else {
              throw new Error("unknown method: " + C);
            }
          }
        }
        return G;
      };
      this.getExtCertificatePolicies = function(C, F) {
        if (C === void 0 && F === void 0) {
          var E = this.getExtInfo("certificatePolicies");
          if (E === void 0) {
            return void 0;
          }
          C = b(this.hex, E.vidx);
          F = E.critical;
        }
        var y = { extname: "certificatePolicies", array: [] };
        if (F) {
          y.critical = true;
        }
        var z2 = r(C, 0);
        for (var A = 0; A < z2.length; A++) {
          var D = b(C, z2[A]);
          var B = this.getPolicyInformation(D);
          y.array.push(B);
        }
        return y;
      };
      this.getPolicyInformation = function(C) {
        var y = {};
        var E = c(C, 0, [0], "06");
        y.policyoid = t2(E);
        var F = f(C, 0, [1], "30");
        if (F != -1) {
          y.array = [];
          var z2 = r(C, F);
          for (var A = 0; A < z2.length; A++) {
            var D = b(C, z2[A]);
            var B = this.getPolicyQualifierInfo(D);
            y.array.push(B);
          }
        }
        return y;
      };
      this.getOtherName = function(A) {
        var y = {};
        var z2 = r(A, 0);
        var C = c(A, z2[0], [], "06");
        var B = c(A, z2[1], []);
        y.oid = KJUR2.asn1.ASN1Util.oidHexToInt(C);
        y.obj = j(B);
        return y;
      };
      this.getPolicyQualifierInfo = function(z2) {
        var y = {};
        var A = c(z2, 0, [0], "06");
        if (A === "2b06010505070201") {
          var C = o(z2, 0, [1], "16");
          y.cps = hextorstr(C);
        } else {
          if (A === "2b06010505070202") {
            var B = a(z2, 0, [1], "30");
            y.unotice = this.getUserNotice(B);
          }
        }
        return y;
      };
      this.getUserNotice = function(C) {
        var z2 = {};
        var A = r(C, 0);
        for (var B = 0; B < A.length; B++) {
          var y = b(C, A[B]);
          if (y.substr(0, 2) != "30") {
            z2.exptext = this.getDisplayText(y);
          }
        }
        return z2;
      };
      this.getDisplayText = function(z2) {
        var A = { "0c": "utf8", "16": "ia5", "1a": "vis", "1e": "bmp" };
        var y = {};
        y.type = A[z2.substr(0, 2)];
        y.str = hextorstr(k(z2, 0));
        return y;
      };
      this.getExtCRLNumber = function(z2, A) {
        var y = { extname: "cRLNumber" };
        if (A) {
          y.critical = true;
        }
        if (z2.substr(0, 2) == "02") {
          y.num = { hex: k(z2, 0) };
          return y;
        }
        throw new Error("hExtV parse error: " + z2);
      };
      this.getExtCRLReason = function(z2, A) {
        var y = { extname: "cRLReason" };
        if (A) {
          y.critical = true;
        }
        if (z2.substr(0, 2) == "0a") {
          y.code = parseInt(k(z2, 0), 16);
          return y;
        }
        throw new Error("hExtV parse error: " + z2);
      };
      this.getExtOcspNonce = function(z2, B) {
        var y = { extname: "ocspNonce" };
        if (B) {
          y.critical = true;
        }
        var A = k(z2, 0);
        y.hex = A;
        return y;
      };
      this.getExtOcspNoCheck = function(z2, A) {
        var y = { extname: "ocspNoCheck" };
        if (A) {
          y.critical = true;
        }
        return y;
      };
      this.getExtAdobeTimeStamp = function(B, E) {
        if (B === void 0 && E === void 0) {
          var D = this.getExtInfo("adobeTimeStamp");
          if (D === void 0) {
            return void 0;
          }
          B = b(this.hex, D.vidx);
          E = D.critical;
        }
        var y = { extname: "adobeTimeStamp" };
        if (E) {
          y.critical = true;
        }
        var A = r(B, 0);
        if (A.length > 1) {
          var F = b(B, A[1]);
          var z2 = this.getGeneralName(F);
          if (z2.uri != void 0) {
            y.uri = z2.uri;
          }
        }
        if (A.length > 2) {
          var C = b(B, A[2]);
          if (C == "0101ff") {
            y.reqauth = true;
          }
          if (C == "010100") {
            y.reqauth = false;
          }
        }
        return y;
      };
      var e = function(D) {
        var y = {};
        try {
          var A = D.seq[0].oid;
          var C = KJUR2.asn1.x509.OID.name2oid(A);
          y.type = KJUR2.asn1.x509.OID.oid2atype(C);
          var z2 = D.seq[1];
          if (z2.utf8str != void 0) {
            y.ds = "utf8";
            y.value = z2.utf8str.str;
          } else {
            if (z2.numstr != void 0) {
              y.ds = "num";
              y.value = z2.numstr.str;
            } else {
              if (z2.telstr != void 0) {
                y.ds = "tel";
                y.value = z2.telstr.str;
              } else {
                if (z2.prnstr != void 0) {
                  y.ds = "prn";
                  y.value = z2.prnstr.str;
                } else {
                  if (z2.ia5str != void 0) {
                    y.ds = "ia5";
                    y.value = z2.ia5str.str;
                  } else {
                    if (z2.visstr != void 0) {
                      y.ds = "vis";
                      y.value = z2.visstr.str;
                    } else {
                      if (z2.bmpstr != void 0) {
                        y.ds = "bmp";
                        y.value = z2.bmpstr.str;
                      } else {
                        throw "error";
                      }
                    }
                  }
                }
              }
            }
          }
          return y;
        } catch (B) {
          throw new Erorr("improper ASN.1 parsed AttrTypeAndValue");
        }
      };
      var i = function(z2) {
        try {
          return z2.set.map(function(A) {
            return e(A);
          });
        } catch (y) {
          throw new Error("improper ASN.1 parsed RDN: " + y);
        }
      };
      var h = function(z2) {
        try {
          return z2.seq.map(function(A) {
            return i(A);
          });
        } catch (y) {
          throw new Error("improper ASN.1 parsed X500Name: " + y);
        }
      };
      this.getX500NameRule = function(y) {
        var F = true;
        var J = true;
        var I = false;
        var z2 = "";
        var C = "";
        var L = null;
        var G = [];
        for (var B = 0; B < y.length; B++) {
          var D = y[B];
          for (var A = 0; A < D.length; A++) {
            G.push(D[A]);
          }
        }
        for (var B = 0; B < G.length; B++) {
          var K = G[B];
          var M = K.ds;
          var H = K.value;
          var E = K.type;
          z2 += ":" + M;
          if (M != "prn" && M != "utf8" && M != "ia5") {
            return "mixed";
          }
          if (M == "ia5") {
            if (E != "CN") {
              return "mixed";
            } else {
              if (!KJUR2.lang.String.isMail(H)) {
                return "mixed";
              } else {
                continue;
              }
            }
          }
          if (E == "C") {
            if (M == "prn") {
              continue;
            } else {
              return "mixed";
            }
          }
          C += ":" + M;
          if (L == null) {
            L = M;
          } else {
            if (L !== M) {
              return "mixed";
            }
          }
        }
        if (L == null) {
          return "prn";
        } else {
          return L;
        }
      };
      this.getAttrTypeAndValue = function(y) {
        var z2 = j(y);
        return e(z2);
      };
      this.getRDN = function(y) {
        var z2 = j(y);
        return i(z2);
      };
      this.getX500NameArray = function(y) {
        var z2 = j(y);
        return h(z2);
      };
      this.getX500Name = function(A) {
        var y = this.getX500NameArray(A);
        var z2 = this.dnarraytostr(y);
        return { array: y, str: z2 };
      };
      this.readCertPEM = function(y) {
        this.readCertHex(v(y));
      };
      this.readCertHex = function(y) {
        this.hex = y;
        this.getVersion();
        try {
          l(this.hex, 0, [0, 7], "a3");
          this.parseExt();
        } catch (z2) {
        }
      };
      this.getParam = function(z2) {
        var y = {};
        y.version = this.getVersion();
        y.serial = { hex: this.getSerialNumberHex() };
        y.sigalg = this.getSignatureAlgorithmField();
        y.issuer = this.getIssuer();
        y.notbefore = this.getNotBefore();
        y.notafter = this.getNotAfter();
        y.subject = this.getSubject();
        y.sbjpubkey = hextopem(this.getPublicKeyHex(), "PUBLIC KEY");
        if (this.aExtInfo.length > 0) {
          y.ext = this.getExtParamArray();
        }
        y.sighex = this.getSignatureValueHex();
        if (typeof z2 == "object") {
          if (z2.tbshex == true) {
            y.tbshex = a(this.hex, 0, [0]);
          }
          if (z2.nodnarray == true) {
            delete y.issuer.array;
            delete y.subject.array;
          }
        }
        return y;
      };
      this.getExtParamArray = function(z2) {
        if (z2 == void 0) {
          var B = f(this.hex, 0, [0, "[3]"]);
          if (B != -1) {
            z2 = p(this.hex, 0, [0, "[3]", 0], "30");
          }
        }
        var y = [];
        var A = r(z2, 0);
        for (var C = 0; C < A.length; C++) {
          var E = b(z2, A[C]);
          var D = this.getExtParam(E);
          if (D != null) {
            y.push(D);
          }
        }
        return y;
      };
      this.getExtParam = function(z2) {
        var G = {};
        var B = r(z2, 0);
        var C = B.length;
        if (C != 2 && C != 3) {
          throw new Error("wrong number elements in Extension: " + C + " " + z2);
        }
        var A = q(c(z2, 0, [0], "06"));
        var E = false;
        if (C == 3 && a(z2, 0, [1]) == "0101ff") {
          E = true;
        }
        var F = a(z2, 0, [C - 1, 0]);
        var D = void 0;
        if (A == "2.5.29.14") {
          D = this.getExtSubjectKeyIdentifier(F, E);
        } else {
          if (A == "2.5.29.15") {
            D = this.getExtKeyUsage(F, E);
          } else {
            if (A == "2.5.29.17") {
              D = this.getExtSubjectAltName(F, E);
            } else {
              if (A == "2.5.29.18") {
                D = this.getExtIssuerAltName(F, E);
              } else {
                if (A == "2.5.29.19") {
                  D = this.getExtBasicConstraints(F, E);
                } else {
                  if (A == "2.5.29.30") {
                    D = this.getExtNameConstraints(F, E);
                  } else {
                    if (A == "2.5.29.31") {
                      D = this.getExtCRLDistributionPoints(F, E);
                    } else {
                      if (A == "2.5.29.32") {
                        D = this.getExtCertificatePolicies(F, E);
                      } else {
                        if (A == "2.5.29.35") {
                          D = this.getExtAuthorityKeyIdentifier(F, E);
                        } else {
                          if (A == "2.5.29.37") {
                            D = this.getExtExtKeyUsage(F, E);
                          } else {
                            if (A == "1.3.6.1.5.5.7.1.1") {
                              D = this.getExtAuthorityInfoAccess(F, E);
                            } else {
                              if (A == "2.5.29.20") {
                                D = this.getExtCRLNumber(F, E);
                              } else {
                                if (A == "2.5.29.21") {
                                  D = this.getExtCRLReason(F, E);
                                } else {
                                  if (A == "1.3.6.1.5.5.7.48.1.2") {
                                    D = this.getExtOcspNonce(F, E);
                                  } else {
                                    if (A == "1.3.6.1.5.5.7.48.1.5") {
                                      D = this.getExtOcspNoCheck(F, E);
                                    } else {
                                      if (A == "1.2.840.113583.1.1.9.1") {
                                        D = this.getExtAdobeTimeStamp(F, E);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (D != void 0) {
          return D;
        }
        var y = { extname: A, extn: F };
        if (E) {
          y.critical = true;
        }
        return y;
      };
      this.findExt = function(z2, A) {
        for (var y = 0; y < z2.length; y++) {
          if (z2[y].extname == A) {
            return z2[y];
          }
        }
        return null;
      };
      this.updateExtCDPFullURI = function(C, y) {
        var B = this.findExt(C, "cRLDistributionPoints");
        if (B == null) {
          return;
        }
        if (B.array == void 0) {
          return;
        }
        var E = B.array;
        for (var A = 0; A < E.length; A++) {
          if (E[A].dpname == void 0) {
            continue;
          }
          if (E[A].dpname.full == void 0) {
            continue;
          }
          var F = E[A].dpname.full;
          for (var z2 = 0; z2 < F.length; z2++) {
            var D = F[A];
            if (D.uri == void 0) {
              continue;
            }
            D.uri = y;
          }
        }
      };
      this.updateExtAIAOCSP = function(C, z2) {
        var B = this.findExt(C, "authorityInfoAccess");
        if (B == null) {
          return;
        }
        if (B.array == void 0) {
          return;
        }
        var y = B.array;
        for (var A = 0; A < y.length; A++) {
          if (y[A].ocsp != void 0) {
            y[A].ocsp = z2;
          }
        }
      };
      this.updateExtAIACAIssuer = function(C, z2) {
        var B = this.findExt(C, "authorityInfoAccess");
        if (B == null) {
          return;
        }
        if (B.array == void 0) {
          return;
        }
        var y = B.array;
        for (var A = 0; A < y.length; A++) {
          if (y[A].caissuer != void 0) {
            y[A].caissuer = z2;
          }
        }
      };
      this.dnarraytostr = function(A) {
        function y(B) {
          return B.map(function(C) {
            return z2(C).replace(/\+/, "\\+");
          }).join("+");
        }
        function z2(B) {
          return B.type + "=" + B.value;
        }
        return "/" + A.map(function(B) {
          return y(B).replace(/\//, "\\/");
        }).join("/");
      };
      this.getInfo = function() {
        var z2 = function(R) {
          var Q = JSON.stringify(R.array).replace(/[\[\]\{\}\"]/g, "");
          return Q;
        };
        var F = function(W) {
          var U = "";
          var Q = W.array;
          for (var T = 0; T < Q.length; T++) {
            var V = Q[T];
            U += "    policy oid: " + V.policyoid + "\n";
            if (V.array === void 0) {
              continue;
            }
            for (var S = 0; S < V.array.length; S++) {
              var R = V.array[S];
              if (R.cps !== void 0) {
                U += "    cps: " + R.cps + "\n";
              }
            }
          }
          return U;
        };
        var I = function(U) {
          var T = "";
          var Q = U.array;
          for (var S = 0; S < Q.length; S++) {
            var V = Q[S];
            try {
              if (V.dpname.full[0].uri !== void 0) {
                T += "    " + V.dpname.full[0].uri + "\n";
              }
            } catch (R) {
            }
            try {
              if (V.dname.full[0].dn.hex !== void 0) {
                T += "    " + X509.hex2dn(V.dpname.full[0].dn.hex) + "\n";
              }
            } catch (R) {
            }
          }
          return T;
        };
        var G = function(U) {
          var T = "";
          var Q = U.array;
          for (var R = 0; R < Q.length; R++) {
            var S = Q[R];
            if (S.caissuer !== void 0) {
              T += "    caissuer: " + S.caissuer + "\n";
            }
            if (S.ocsp !== void 0) {
              T += "    ocsp: " + S.ocsp + "\n";
            }
          }
          return T;
        };
        var A = X509;
        var K, J, P;
        K = "Basic Fields\n";
        K += "  serial number: " + this.getSerialNumberHex() + "\n";
        K += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n";
        K += "  issuer: " + this.getIssuerString() + "\n";
        K += "  notBefore: " + this.getNotBefore() + "\n";
        K += "  notAfter: " + this.getNotAfter() + "\n";
        K += "  subject: " + this.getSubjectString() + "\n";
        K += "  subject public key info: \n";
        J = this.getPublicKey();
        K += "    key algorithm: " + J.type + "\n";
        if (J.type === "RSA") {
          K += "    n=" + hextoposhex(J.n.toString(16)).substr(0, 16) + "...\n";
          K += "    e=" + hextoposhex(J.e.toString(16)) + "\n";
        }
        P = this.aExtInfo;
        if (P !== void 0 && P !== null) {
          K += "X509v3 Extensions:\n";
          for (var M = 0; M < P.length; M++) {
            var O = P[M];
            var y = KJUR2.asn1.x509.OID.oid2name(O.oid);
            if (y === "") {
              y = O.oid;
            }
            var L = "";
            if (O.critical === true) {
              L = "CRITICAL";
            }
            K += "  " + y + " " + L + ":\n";
            if (y === "basicConstraints") {
              var B = this.getExtBasicConstraints();
              if (B.cA === void 0) {
                K += "    {}\n";
              } else {
                K += "    cA=true";
                if (B.pathLen !== void 0) {
                  K += ", pathLen=" + B.pathLen;
                }
                K += "\n";
              }
            } else {
              if (y === "keyUsage") {
                K += "    " + this.getExtKeyUsageString() + "\n";
              } else {
                if (y === "subjectKeyIdentifier") {
                  K += "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n";
                } else {
                  if (y === "authorityKeyIdentifier") {
                    var C = this.getExtAuthorityKeyIdentifier();
                    if (C.kid !== void 0) {
                      K += "    kid=" + C.kid.hex + "\n";
                    }
                  } else {
                    if (y === "extKeyUsage") {
                      var N = this.getExtExtKeyUsage().array;
                      K += "    " + N.join(", ") + "\n";
                    } else {
                      if (y === "subjectAltName") {
                        var D = z2(this.getExtSubjectAltName());
                        K += "    " + D + "\n";
                      } else {
                        if (y === "cRLDistributionPoints") {
                          var H = this.getExtCRLDistributionPoints();
                          K += I(H);
                        } else {
                          if (y === "authorityInfoAccess") {
                            var E = this.getExtAuthorityInfoAccess();
                            K += G(E);
                          } else {
                            if (y === "certificatePolicies") {
                              K += F(this.getExtCertificatePolicies());
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        K += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n";
        K += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n";
        return K;
      };
      if (typeof u == "string") {
        if (u.indexOf("-----BEGIN") != -1) {
          this.readCertPEM(u);
        } else {
          if (KJUR2.lang.String.isHex(u)) {
            this.readCertHex(u);
          }
        }
      }
    }
    X509.hex2dn = function(e, b) {
      if (b === void 0) {
        b = 0;
      }
      var a = new X509();
      var c = ASN1HEX.getTLV(e, b);
      var d = a.getX500Name(e);
      return d.str;
    };
    X509.hex2rdn = function(f, b) {
      if (b === void 0) {
        b = 0;
      }
      if (f.substr(b, 2) !== "31") {
        throw new Error("malformed RDN");
      }
      var c = new Array();
      var d = ASN1HEX.getChildIdx(f, b);
      for (var e = 0; e < d.length; e++) {
        c.push(X509.hex2attrTypeValue(f, d[e]));
      }
      c = c.map(function(a) {
        return a.replace("+", "\\+");
      });
      return c.join("+");
    };
    X509.hex2attrTypeValue = function(d, i) {
      var j = ASN1HEX;
      var h = j.getV;
      if (i === void 0) {
        i = 0;
      }
      if (d.substr(i, 2) !== "30") {
        throw new Error("malformed attribute type and value");
      }
      var g = j.getChildIdx(d, i);
      if (g.length !== 2 || d.substr(g[0], 2) !== "06") {
        "malformed attribute type and value";
      }
      var b = h(d, g[0]);
      var f = KJUR2.asn1.ASN1Util.oidHexToInt(b);
      var e = KJUR2.asn1.x509.OID.oid2atype(f);
      var a = h(d, g[1]);
      var c = hextorstr(a);
      return e + "=" + c;
    };
    X509.getPublicKeyFromCertHex = function(b) {
      var a = new X509();
      a.readCertHex(b);
      return a.getPublicKey();
    };
    X509.getPublicKeyFromCertPEM = function(b) {
      var a = new X509();
      a.readCertPEM(b);
      return a.getPublicKey();
    };
    X509.getPublicKeyInfoPropOfCertPEM = function(c) {
      var e = ASN1HEX;
      var g = e.getVbyList;
      var b = {};
      var a, f, d;
      b.algparam = null;
      a = new X509();
      a.readCertPEM(c);
      f = a.getPublicKeyHex();
      b.keyhex = g(f, 0, [1], "03").substr(2);
      b.algoid = g(f, 0, [0, 0], "06");
      if (b.algoid === "2a8648ce3d0201") {
        b.algparam = g(f, 0, [0, 1], "06");
      }
      return b;
    };
    X509.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];
    var X509CRL = function(e) {
      var a = KJUR2, f = a.lang.String.isHex, m = ASN1HEX, k = m.getV, b = m.getTLV, h = m.getVbyList, c = m.getTLVbyList, d = m.getTLVbyListEx, i = m.getIdxbyList, g = m.getIdxbyListEx, l = m.getChildIdx, j = new X509();
      this.hex = null;
      this.posSigAlg = null;
      this.posRevCert = null;
      this.parsed = null;
      this._setPos = function() {
        var o = i(this.hex, 0, [0, 0]);
        var n = this.hex.substr(o, 2);
        if (n == "02") {
          this.posSigAlg = 1;
        } else {
          if (n == "30") {
            this.posSigAlg = 0;
          } else {
            throw new Error("malformed 1st item of TBSCertList: " + n);
          }
        }
        var s = i(this.hex, 0, [0, this.posSigAlg + 3]);
        var r = this.hex.substr(s, 2);
        if (r == "17" || r == "18") {
          var q, p;
          q = i(this.hex, 0, [0, this.posSigAlg + 4]);
          this.posRevCert = null;
          if (q != -1) {
            p = this.hex.substr(q, 2);
            if (p == "30") {
              this.posRevCert = this.posSigAlg + 4;
            }
          }
        } else {
          if (r == "30") {
            this.posRevCert = this.posSigAlg + 3;
          } else {
            if (r == "a0") {
              this.posRevCert = null;
            } else {
              throw new Error("malformed nextUpdate or revCert tag: " + r);
            }
          }
        }
      };
      this.getVersion = function() {
        if (this.posSigAlg == 0) {
          return null;
        }
        return parseInt(h(this.hex, 0, [0, 0], "02"), 16) + 1;
      };
      this.getSignatureAlgorithmField = function() {
        var n = c(this.hex, 0, [0, this.posSigAlg], "30");
        return j.getAlgorithmIdentifierName(n);
      };
      this.getIssuer = function() {
        return j.getX500Name(this.getIssuerHex());
      };
      this.getIssuerHex = function() {
        return c(this.hex, 0, [0, this.posSigAlg + 1], "30");
      };
      this.getThisUpdate = function() {
        var n = h(this.hex, 0, [0, this.posSigAlg + 2]);
        return result = hextorstr(n);
      };
      this.getNextUpdate = function() {
        var o = i(this.hex, 0, [0, this.posSigAlg + 3]);
        var n = this.hex.substr(o, 2);
        if (n != "17" && n != "18") {
          return null;
        }
        return hextorstr(k(this.hex, o));
      };
      this.getRevCertArray = function() {
        if (this.posRevCert == null) {
          return null;
        }
        var o = [];
        var n = i(this.hex, 0, [0, this.posRevCert]);
        var p = l(this.hex, n);
        for (var q = 0; q < p.length; q++) {
          var r = b(this.hex, p[q]);
          o.push(this.getRevCert(r));
        }
        return o;
      };
      this.getRevCert = function(p) {
        var o = {};
        var n = l(p, 0);
        o.sn = { hex: h(p, 0, [0], "02") };
        o.date = hextorstr(h(p, 0, [1]));
        if (n.length == 3) {
          o.ext = j.getExtParamArray(c(p, 0, [2]));
        }
        return o;
      };
      this.findRevCert = function(p) {
        var n = new X509(p);
        var o = n.getSerialNumberHex();
        return this.findRevCertBySN(o);
      };
      this.findRevCertBySN = function(o) {
        if (this.parsed == null) {
          this.getParam();
        }
        if (this.parsed.revcert == null) {
          return null;
        }
        var n = this.parsed.revcert;
        for (var p = 0; p < n.length; p++) {
          if (o == n[p].sn.hex) {
            return n[p];
          }
        }
        return null;
      };
      this.getSignatureValueHex = function() {
        return h(this.hex, 0, [2], "03", true);
      };
      this.verifySignature = function(o) {
        var p = this.getSignatureAlgorithmField();
        var n = this.getSignatureValueHex();
        var q = c(this.hex, 0, [0], "30");
        var r = new KJUR2.crypto.Signature({ alg: p });
        r.init(o);
        r.updateHex(q);
        return r.verify(n);
      };
      this.getParam = function(r) {
        var n = {};
        var p = this.getVersion();
        if (p != null) {
          n.version = p;
        }
        n.sigalg = this.getSignatureAlgorithmField();
        n.issuer = this.getIssuer();
        n.thisupdate = this.getThisUpdate();
        var q = this.getNextUpdate();
        if (q != null) {
          n.nextupdate = q;
        }
        var t2 = this.getRevCertArray();
        if (t2 != null) {
          n.revcert = t2;
        }
        var s = g(this.hex, 0, [0, "[0]"]);
        if (s != -1) {
          var o = d(this.hex, 0, [0, "[0]", 0]);
          n.ext = j.getExtParamArray(o);
        }
        n.sighex = this.getSignatureValueHex();
        this.parsed = n;
        if (typeof r == "object") {
          if (r.tbshex == true) {
            n.tbshex = c(this.hex, 0, [0]);
          }
          if (r.nodnarray == true) {
            delete n.issuer.array;
          }
        }
        return n;
      };
      if (typeof e == "string") {
        if (f(e)) {
          this.hex = e;
        } else {
          if (e.match(/-----BEGIN X509 CRL/)) {
            this.hex = pemtohex(e);
          }
        }
        this._setPos();
      }
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.jws == "undefined" || !KJUR2.jws) {
      KJUR2.jws = {};
    }
    KJUR2.jws.JWS = function() {
      var b = KJUR2, a = b.jws.JWS, c = a.isSafeJSONString;
      this.parseJWS = function(g, j) {
        if (this.parsedJWS !== void 0 && (j || this.parsedJWS.sigvalH !== void 0)) {
          return;
        }
        var i = g.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
        if (i == null) {
          throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
        }
        var k = i[1];
        var e = i[2];
        var l = i[3];
        var n = k + "." + e;
        this.parsedJWS = {};
        this.parsedJWS.headB64U = k;
        this.parsedJWS.payloadB64U = e;
        this.parsedJWS.sigvalB64U = l;
        this.parsedJWS.si = n;
        if (!j) {
          var h = b64utohex(l);
          var f = parseBigInt(h, 16);
          this.parsedJWS.sigvalH = h;
          this.parsedJWS.sigvalBI = f;
        }
        var d = b64utoutf8(k);
        var m = b64utoutf8(e);
        this.parsedJWS.headS = d;
        this.parsedJWS.payloadS = m;
        if (!c(d, this.parsedJWS, "headP")) {
          throw "malformed JSON string for JWS Head: " + d;
        }
      };
    };
    KJUR2.jws.JWS.sign = function(j, w, z2, A, a) {
      var x = KJUR2, n = x.jws, r = n.JWS, h = r.readSafeJSONString, q = r.isSafeJSONString, d = x.crypto, l = d.ECDSA, p = d.Mac, c = d.Signature, u = JSON;
      var t2, k, o;
      if (typeof w != "string" && typeof w != "object") {
        throw "spHeader must be JSON string or object: " + w;
      }
      if (typeof w == "object") {
        k = w;
        t2 = u.stringify(k);
      }
      if (typeof w == "string") {
        t2 = w;
        if (!q(t2)) {
          throw "JWS Head is not safe JSON string: " + t2;
        }
        k = h(t2);
      }
      o = z2;
      if (typeof z2 == "object") {
        o = u.stringify(z2);
      }
      if ((j == "" || j == null) && k.alg !== void 0) {
        j = k.alg;
      }
      if (j != "" && j != null && k.alg === void 0) {
        k.alg = j;
        t2 = u.stringify(k);
      }
      if (j !== k.alg) {
        throw "alg and sHeader.alg doesn't match: " + j + "!=" + k.alg;
      }
      var s = null;
      if (r.jwsalg2sigalg[j] === void 0) {
        throw "unsupported alg name: " + j;
      } else {
        s = r.jwsalg2sigalg[j];
      }
      var e = utf8tob64u(t2);
      var m = utf8tob64u(o);
      var b = e + "." + m;
      var y = "";
      if (s.substr(0, 4) == "Hmac") {
        if (A === void 0) {
          throw "mac key shall be specified for HS* alg";
        }
        var i = new p({ alg: s, prov: "cryptojs", pass: A });
        i.updateString(b);
        y = i.doFinal();
      } else {
        if (s.indexOf("withECDSA") != -1) {
          var f = new c({ alg: s });
          f.init(A, a);
          f.updateString(b);
          var g = f.sign();
          y = KJUR2.crypto.ECDSA.asn1SigToConcatSig(g);
        } else {
          if (s != "none") {
            var f = new c({ alg: s });
            f.init(A, a);
            f.updateString(b);
            y = f.sign();
          }
        }
      }
      var v = hextob64u(y);
      return b + "." + v;
    };
    KJUR2.jws.JWS.verify = function(w, B, n) {
      var x = KJUR2, q = x.jws, t2 = q.JWS, i = t2.readSafeJSONString, e = x.crypto, p = e.ECDSA, s = e.Mac, d = e.Signature, m;
      if (typeof RSAKey !== void 0) {
        m = RSAKey;
      }
      var y = w.split(".");
      if (y.length !== 3) {
        return false;
      }
      var f = y[0];
      var r = y[1];
      var c = f + "." + r;
      var A = b64utohex(y[2]);
      var l = i(b64utoutf8(y[0]));
      var k = null;
      var z2 = null;
      if (l.alg === void 0) {
        throw "algorithm not specified in header";
      } else {
        k = l.alg;
        z2 = k.substr(0, 2);
      }
      if (n != null && Object.prototype.toString.call(n) === "[object Array]" && n.length > 0) {
        var b = ":" + n.join(":") + ":";
        if (b.indexOf(":" + k + ":") == -1) {
          throw "algorithm '" + k + "' not accepted in the list";
        }
      }
      if (k != "none" && B === null) {
        throw "key shall be specified to verify.";
      }
      if (typeof B == "string" && B.indexOf("-----BEGIN ") != -1) {
        B = KEYUTIL.getKey(B);
      }
      if (z2 == "RS" || z2 == "PS") {
        if (!(B instanceof m)) {
          throw "key shall be a RSAKey obj for RS* and PS* algs";
        }
      }
      if (z2 == "ES") {
        if (!(B instanceof p)) {
          throw "key shall be a ECDSA obj for ES* algs";
        }
      }
      if (k == "none") {
      }
      var u = null;
      if (t2.jwsalg2sigalg[l.alg] === void 0) {
        throw "unsupported alg name: " + k;
      } else {
        u = t2.jwsalg2sigalg[k];
      }
      if (u == "none") {
        throw "not supported";
      } else {
        if (u.substr(0, 4) == "Hmac") {
          var o = null;
          if (B === void 0) {
            throw "hexadecimal key shall be specified for HMAC";
          }
          var j = new s({ alg: u, pass: B });
          j.updateString(c);
          o = j.doFinal();
          return A == o;
        } else {
          if (u.indexOf("withECDSA") != -1) {
            var h = null;
            try {
              h = p.concatSigToASN1Sig(A);
            } catch (v) {
              return false;
            }
            var g = new d({ alg: u });
            g.init(B);
            g.updateString(c);
            return g.verify(h);
          } else {
            var g = new d({ alg: u });
            g.init(B);
            g.updateString(c);
            return g.verify(A);
          }
        }
      }
    };
    KJUR2.jws.JWS.parse = function(g) {
      var c = g.split(".");
      var b = {};
      var f, e, d;
      if (c.length != 2 && c.length != 3) {
        throw "malformed sJWS: wrong number of '.' splitted elements";
      }
      f = c[0];
      e = c[1];
      if (c.length == 3) {
        d = c[2];
      }
      b.headerObj = KJUR2.jws.JWS.readSafeJSONString(b64utoutf8(f));
      b.payloadObj = KJUR2.jws.JWS.readSafeJSONString(b64utoutf8(e));
      b.headerPP = JSON.stringify(b.headerObj, null, "  ");
      if (b.payloadObj == null) {
        b.payloadPP = b64utoutf8(e);
      } else {
        b.payloadPP = JSON.stringify(b.payloadObj, null, "  ");
      }
      if (d !== void 0) {
        b.sigHex = b64utohex(d);
      }
      return b;
    };
    KJUR2.jws.JWS.verifyJWT = function(e, l, r) {
      var d = KJUR2, j = d.jws, o = j.JWS, n = o.readSafeJSONString, p = o.inArray, f = o.includedArray;
      var k = e.split(".");
      var c = k[0];
      var i = k[1];
      var q = c + "." + i;
      var m = b64utohex(k[2]);
      var h = n(b64utoutf8(c));
      var g = n(b64utoutf8(i));
      if (h.alg === void 0) {
        return false;
      }
      if (r.alg === void 0) {
        throw "acceptField.alg shall be specified";
      }
      if (!p(h.alg, r.alg)) {
        return false;
      }
      if (g.iss !== void 0 && typeof r.iss === "object") {
        if (!p(g.iss, r.iss)) {
          return false;
        }
      }
      if (g.sub !== void 0 && typeof r.sub === "object") {
        if (!p(g.sub, r.sub)) {
          return false;
        }
      }
      if (g.aud !== void 0 && typeof r.aud === "object") {
        if (typeof g.aud == "string") {
          if (!p(g.aud, r.aud)) {
            return false;
          }
        } else {
          if (typeof g.aud == "object") {
            if (!f(g.aud, r.aud)) {
              return false;
            }
          }
        }
      }
      var b = j.IntDate.getNow();
      if (r.verifyAt !== void 0 && typeof r.verifyAt === "number") {
        b = r.verifyAt;
      }
      if (r.gracePeriod === void 0 || typeof r.gracePeriod !== "number") {
        r.gracePeriod = 0;
      }
      if (g.exp !== void 0 && typeof g.exp == "number") {
        if (g.exp + r.gracePeriod < b) {
          return false;
        }
      }
      if (g.nbf !== void 0 && typeof g.nbf == "number") {
        if (b < g.nbf - r.gracePeriod) {
          return false;
        }
      }
      if (g.iat !== void 0 && typeof g.iat == "number") {
        if (b < g.iat - r.gracePeriod) {
          return false;
        }
      }
      if (g.jti !== void 0 && r.jti !== void 0) {
        if (g.jti !== r.jti) {
          return false;
        }
      }
      if (!o.verify(e, l, r.alg)) {
        return false;
      }
      return true;
    };
    KJUR2.jws.JWS.includedArray = function(b, a) {
      var c = KJUR2.jws.JWS.inArray;
      if (b === null) {
        return false;
      }
      if (typeof b !== "object") {
        return false;
      }
      if (typeof b.length !== "number") {
        return false;
      }
      for (var d = 0; d < b.length; d++) {
        if (!c(b[d], a)) {
          return false;
        }
      }
      return true;
    };
    KJUR2.jws.JWS.inArray = function(d, b) {
      if (b === null) {
        return false;
      }
      if (typeof b !== "object") {
        return false;
      }
      if (typeof b.length !== "number") {
        return false;
      }
      for (var c = 0; c < b.length; c++) {
        if (b[c] == d) {
          return true;
        }
      }
      return false;
    };
    KJUR2.jws.JWS.jwsalg2sigalg = { HS256: "HmacSHA256", HS384: "HmacSHA384", HS512: "HmacSHA512", RS256: "SHA256withRSA", RS384: "SHA384withRSA", RS512: "SHA512withRSA", ES256: "SHA256withECDSA", ES384: "SHA384withECDSA", ES512: "SHA512withECDSA", PS256: "SHA256withRSAandMGF1", PS384: "SHA384withRSAandMGF1", PS512: "SHA512withRSAandMGF1", none: "none" };
    KJUR2.jws.JWS.isSafeJSONString = function(c, b, d) {
      var e = null;
      try {
        e = jsonParse(c);
        if (typeof e != "object") {
          return 0;
        }
        if (e.constructor === Array) {
          return 0;
        }
        if (b) {
          b[d] = e;
        }
        return 1;
      } catch (a) {
        return 0;
      }
    };
    KJUR2.jws.JWS.readSafeJSONString = function(b) {
      var c = null;
      try {
        c = jsonParse(b);
        if (typeof c != "object") {
          return null;
        }
        if (c.constructor === Array) {
          return null;
        }
        return c;
      } catch (a) {
        return null;
      }
    };
    KJUR2.jws.JWS.getEncodedSignatureValueFromJWS = function(b) {
      var a = b.match(/^[^.]+\.[^.]+\.([^.]+)$/);
      if (a == null) {
        throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
      }
      return a[1];
    };
    KJUR2.jws.JWS.getJWKthumbprint = function(d) {
      if (d.kty !== "RSA" && d.kty !== "EC" && d.kty !== "oct") {
        throw "unsupported algorithm for JWK Thumprint";
      }
      var a = "{";
      if (d.kty === "RSA") {
        if (typeof d.n != "string" || typeof d.e != "string") {
          throw "wrong n and e value for RSA key";
        }
        a += '"e":"' + d.e + '",';
        a += '"kty":"' + d.kty + '",';
        a += '"n":"' + d.n + '"}';
      } else {
        if (d.kty === "EC") {
          if (typeof d.crv != "string" || typeof d.x != "string" || typeof d.y != "string") {
            throw "wrong crv, x and y value for EC key";
          }
          a += '"crv":"' + d.crv + '",';
          a += '"kty":"' + d.kty + '",';
          a += '"x":"' + d.x + '",';
          a += '"y":"' + d.y + '"}';
        } else {
          if (d.kty === "oct") {
            if (typeof d.k != "string") {
              throw "wrong k value for oct(symmetric) key";
            }
            a += '"kty":"' + d.kty + '",';
            a += '"k":"' + d.k + '"}';
          }
        }
      }
      var b = rstrtohex(a);
      var c = KJUR2.crypto.Util.hashHex(b, "sha256");
      var e = hextob64u(c);
      return e;
    };
    KJUR2.jws.IntDate = {};
    KJUR2.jws.IntDate.get = function(c) {
      var b = KJUR2.jws.IntDate, d = b.getNow, a = b.getZulu;
      if (c == "now") {
        return d();
      } else {
        if (c == "now + 1hour") {
          return d() + 60 * 60;
        } else {
          if (c == "now + 1day") {
            return d() + 60 * 60 * 24;
          } else {
            if (c == "now + 1month") {
              return d() + 60 * 60 * 24 * 30;
            } else {
              if (c == "now + 1year") {
                return d() + 60 * 60 * 24 * 365;
              } else {
                if (c.match(/Z$/)) {
                  return a(c);
                } else {
                  if (c.match(/^[0-9]+$/)) {
                    return parseInt(c);
                  }
                }
              }
            }
          }
        }
      }
      throw "unsupported format: " + c;
    };
    KJUR2.jws.IntDate.getZulu = function(a) {
      return zulutosec(a);
    };
    KJUR2.jws.IntDate.getNow = function() {
      var a = ~~(new Date() / 1e3);
      return a;
    };
    KJUR2.jws.IntDate.intDate2UTCString = function(a) {
      var b = new Date(a * 1e3);
      return b.toUTCString();
    };
    KJUR2.jws.IntDate.intDate2Zulu = function(e) {
      var i = new Date(e * 1e3), h = ("0000" + i.getUTCFullYear()).slice(-4), g = ("00" + (i.getUTCMonth() + 1)).slice(-2), b = ("00" + i.getUTCDate()).slice(-2), a = ("00" + i.getUTCHours()).slice(-2), c = ("00" + i.getUTCMinutes()).slice(-2), f = ("00" + i.getUTCSeconds()).slice(-2);
      return h + g + b + a + c + f + "Z";
    };
    if (typeof KJUR2 == "undefined" || !KJUR2) {
      KJUR2 = {};
    }
    if (typeof KJUR2.jws == "undefined" || !KJUR2.jws) {
      KJUR2.jws = {};
    }
    KJUR2.jws.JWSJS = function() {
      var c = KJUR2, b = c.jws, a = b.JWS, d = a.readSafeJSONString;
      this.aHeader = [];
      this.sPayload = "";
      this.aSignature = [];
      this.init = function() {
        this.aHeader = [];
        this.sPayload = void 0;
        this.aSignature = [];
      };
      this.initWithJWS = function(f) {
        this.init();
        var e = f.split(".");
        if (e.length != 3) {
          throw "malformed input JWS";
        }
        this.aHeader.push(e[0]);
        this.sPayload = e[1];
        this.aSignature.push(e[2]);
      };
      this.addSignature = function(e, h, m, k) {
        if (this.sPayload === void 0 || this.sPayload === null) {
          throw "there's no JSON-JS signature to add.";
        }
        var l = this.aHeader.length;
        if (this.aHeader.length != this.aSignature.length) {
          throw "aHeader.length != aSignature.length";
        }
        try {
          var f = KJUR2.jws.JWS.sign(e, h, this.sPayload, m, k);
          var j = f.split(".");
          var n = j[0];
          var g = j[2];
          this.aHeader.push(j[0]);
          this.aSignature.push(j[2]);
        } catch (i) {
          if (this.aHeader.length > l) {
            this.aHeader.pop();
          }
          if (this.aSignature.length > l) {
            this.aSignature.pop();
          }
          throw "addSignature failed: " + i;
        }
      };
      this.verifyAll = function(h) {
        if (this.aHeader.length !== h.length || this.aSignature.length !== h.length) {
          return false;
        }
        for (var g = 0; g < h.length; g++) {
          var f = h[g];
          if (f.length !== 2) {
            return false;
          }
          var e = this.verifyNth(g, f[0], f[1]);
          if (e === false) {
            return false;
          }
        }
        return true;
      };
      this.verifyNth = function(f, j, g) {
        if (this.aHeader.length <= f || this.aSignature.length <= f) {
          return false;
        }
        var h = this.aHeader[f];
        var k = this.aSignature[f];
        var l = h + "." + this.sPayload + "." + k;
        var e = false;
        try {
          e = a.verify(l, j, g);
        } catch (i) {
          return false;
        }
        return e;
      };
      this.readJWSJS = function(g) {
        if (typeof g === "string") {
          var f = d(g);
          if (f == null) {
            throw "argument is not safe JSON object string";
          }
          this.aHeader = f.headers;
          this.sPayload = f.payload;
          this.aSignature = f.signatures;
        } else {
          try {
            if (g.headers.length > 0) {
              this.aHeader = g.headers;
            } else {
              throw "malformed header";
            }
            if (typeof g.payload === "string") {
              this.sPayload = g.payload;
            } else {
              throw "malformed signatures";
            }
            if (g.signatures.length > 0) {
              this.aSignature = g.signatures;
            } else {
              throw "malformed signatures";
            }
          } catch (e) {
            throw "malformed JWS-JS JSON object: " + e;
          }
        }
      };
      this.getJSON = function() {
        return { headers: this.aHeader, payload: this.sPayload, signatures: this.aSignature };
      };
      this.isEmpty = function() {
        if (this.aHeader.length == 0) {
          return 1;
        }
        return 0;
      };
    };
    exports.SecureRandom = SecureRandom;
    exports.rng_seed_time = rng_seed_time;
    exports.BigInteger = BigInteger;
    exports.RSAKey = RSAKey;
    exports.ECDSA = KJUR2.crypto.ECDSA;
    exports.DSA = KJUR2.crypto.DSA;
    exports.Signature = KJUR2.crypto.Signature;
    exports.MessageDigest = KJUR2.crypto.MessageDigest;
    exports.Mac = KJUR2.crypto.Mac;
    exports.Cipher = KJUR2.crypto.Cipher;
    exports.KEYUTIL = KEYUTIL;
    exports.ASN1HEX = ASN1HEX;
    exports.X509 = X509;
    exports.X509CRL = X509CRL;
    exports.CryptoJS = CryptoJS;
    exports.b64tohex = b64tohex;
    exports.b64toBA = b64toBA;
    exports.ECFieldElementFp = ECFieldElementFp;
    exports.ECPointFp = ECPointFp;
    exports.ECCurveFp = ECCurveFp;
    exports.stoBA = stoBA;
    exports.BAtos = BAtos;
    exports.BAtohex = BAtohex;
    exports.stohex = stohex;
    exports.stob64 = stob64;
    exports.stob64u = stob64u;
    exports.b64utos = b64utos;
    exports.b64tob64u = b64tob64u;
    exports.b64utob64 = b64utob64;
    exports.hex2b64 = hex2b64;
    exports.hextob64u = hextob64u;
    exports.b64utohex = b64utohex;
    exports.utf8tob64u = utf8tob64u;
    exports.b64utoutf8 = b64utoutf8;
    exports.utf8tob64 = utf8tob64;
    exports.b64toutf8 = b64toutf8;
    exports.utf8tohex = utf8tohex;
    exports.hextoutf8 = hextoutf8;
    exports.hextorstr = hextorstr;
    exports.rstrtohex = rstrtohex;
    exports.hextob64 = hextob64;
    exports.hextob64nl = hextob64nl;
    exports.b64nltohex = b64nltohex;
    exports.hextopem = hextopem;
    exports.pemtohex = pemtohex;
    exports.hextoArrayBuffer = hextoArrayBuffer;
    exports.ArrayBuffertohex = ArrayBuffertohex;
    exports.zulutomsec = zulutomsec;
    exports.zulutosec = zulutosec;
    exports.zulutodate = zulutodate;
    exports.datetozulu = datetozulu;
    exports.uricmptohex = uricmptohex;
    exports.hextouricmp = hextouricmp;
    exports.ipv6tohex = ipv6tohex;
    exports.hextoipv6 = hextoipv6;
    exports.hextoip = hextoip;
    exports.iptohex = iptohex;
    exports.ucs2hextoutf8 = ucs2hextoutf8;
    exports.encodeURIComponentAll = encodeURIComponentAll;
    exports.newline_toUnix = newline_toUnix;
    exports.newline_toDos = newline_toDos;
    exports.hextoposhex = hextoposhex;
    exports.intarystrtohex = intarystrtohex;
    exports.strdiffidx = strdiffidx;
    exports.oidtohex = oidtohex;
    exports.hextooid = hextooid;
    exports.strpad = strpad;
    exports.bitstrtoint = bitstrtoint;
    exports.inttobitstr = inttobitstr;
    exports.KJUR = KJUR2;
    exports.crypto = KJUR2.crypto;
    exports.asn1 = KJUR2.asn1;
    exports.jws = KJUR2.jws;
    exports.lang = KJUR2.lang;
  }
});
var getIdentity;
var generateLoginURL;
var init_api = __esm({
  "api/index.ts"() {
    init_functionsRoutes();
    getIdentity = async ({
      jwt,
      domain
    }) => {
      const identityURL = new URL("/cdn-cgi/access/get-identity", domain);
      const response = await fetch(identityURL.toString(), {
        headers: { Cookie: `CF_Authorization=${jwt}` }
      });
      if (response.ok)
        return await response.json();
    };
    generateLoginURL = ({
      redirectURL: redirectURLInit,
      domain,
      aud
    }) => {
      const redirectURL = typeof redirectURLInit === "string" ? new URL(redirectURLInit) : redirectURLInit;
      const { hostname } = redirectURL;
      const loginPathname = `/cdn-cgi/access/login/${hostname}?`;
      const searchParams = new URLSearchParams({
        kid: aud,
        redirect_url: redirectURL.pathname + redirectURL.search
      });
      return new URL(loginPathname + searchParams.toString(), domain).toString();
    };
  }
});
var import_jsrsasign;
var extractJWTFromRequest;
var generateValidator;
var onRequest;
var init_middleware = __esm({
  "functions/_middleware.ts"() {
    init_functionsRoutes();
    import_jsrsasign = __toESM(require_jsrsasign());
    init_api();
    extractJWTFromRequest = (request) => {
      return request.headers.get("Cf-Access-Jwt-Assertion");
    };
    generateValidator = ({ domain, aud }) => async (request) => {
      const jwt = extractJWTFromRequest(request);
      const { payloadObj, headerObj } = import_jsrsasign.KJUR.jws.JWS.parse(jwt);
      const { kid } = headerObj;
      const certsURL = new URL("/cdn-cgi/access/certs", domain);
      const certsResponse = await fetch(certsURL.toString());
      const { public_certs } = await certsResponse.json();
      const cert = public_certs.find(({ kid: id }) => id === kid).cert;
      const isValid = import_jsrsasign.KJUR.jws.JWS.verifyJWT(jwt, cert, {
        alg: ["RS256"],
        aud: [aud]
      });
      if (!isValid) {
        return false;
      }
      return { jwt, payload: payloadObj };
    };
    onRequest = async ({
      request,
      pluginArgs: { domain, aud },
      data,
      next
    }) => {
      let verifiedJWT = false;
      try {
        const validator = generateValidator({ domain, aud });
        verifiedJWT = await validator(request);
      } catch {
      }
      if (verifiedJWT === false) {
        return new Response(null, {
          status: 302,
          headers: {
            Location: generateLoginURL({ redirectURL: request.url, domain, aud })
          }
        });
      }
      const { jwt, payload } = verifiedJWT;
      data.cloudflareAccess = {
        JWT: {
          payload,
          getIdentity: () => getIdentity({ jwt, domain })
        }
      };
      return next();
    };
  }
});
var routes;
var init_functionsRoutes = __esm({
  "../../../../../../var/folders/ww/hfjqy4gs3p12j4qfrlf026lr0000gp/T/functionsRoutes.mjs"() {
    init_middleware();
    routes = [
      {
        routePath: "/",
        mountPath: "/",
        method: "",
        middlewares: [onRequest],
        modules: []
      }
    ];
  }
});
init_functionsRoutes();
init_functionsRoutes();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at " + i);
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at ' + j);
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern)
        throw new TypeError("Missing pattern at " + i);
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
  var result2 = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };
  var consumeText = function() {
    var result3 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result3 += value2;
    }
    return result3;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result2.push(path);
        path = "";
      }
      result2.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result2.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result2.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result2;
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
          }
        } else {
          route += "(" + token.pattern + ")" + token.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token.modifier;
      }
    }
  }
  if (end) {
    if (!strict)
      route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }
    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
function* executeRequest(request, relativePathname) {
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath, { end: false });
    const mountMatcher = match(route.mountPath, { end: false });
    const matchResult = routeMatcher(relativePathname);
    const mountMatchResult = mountMatcher(relativePathname);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath, { end: true });
    const mountMatcher = match(route.mountPath, { end: false });
    const matchResult = routeMatcher(relativePathname);
    const mountMatchResult = mountMatcher(relativePathname);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
function template_plugin_default(pluginArgs) {
  const onRequest22 = async (workerContext) => {
    let { request } = workerContext;
    const { env, next, data } = workerContext;
    const url = new URL(request.url);
    const relativePathname = `/${url.pathname.split(workerContext.functionPath)[1] || ""}`.replace(/^\/\//, "/");
    const handlerIterator = executeRequest(request, relativePathname);
    const pluginNext = async (input, init) => {
      if (input !== void 0) {
        request = new Request(input, init);
      }
      const result2 = handlerIterator.next();
      if (result2.done === false) {
        const { handler, params, path } = result2.value;
        const context = {
          request,
          functionPath: workerContext.functionPath + path,
          next: pluginNext,
          params,
          data,
          pluginArgs,
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext)
        };
        const response = await handler(context);
        return new Response([101, 204, 205, 304].includes(response.status) ? null : response.body, __spreadProps(__spreadValues({}, response), { headers: new Headers(response.headers) }));
      } else {
        return next();
      }
    };
    return pluginNext();
  };
  return onRequest22;
}

// functions/middlewares.ts
var onRequest2 = template_plugin_default({
  domain: "https://test.cloudflareaccess.com",
  aud: "4714c1358e65fe4b408ad6d432a5f878f08194bdb4752441fd56faefa9b2b6f2"
});
module.exports = __toCommonJS(middlewares_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onRequest
});
/*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
 */
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*! (c) Tom Wu, Kenji Urushima | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*! CryptoJS v3.1.2 core-fix.js
 * code.google.com/p/crypto-js
 * (c) 2009-2013 by Jeff Mott. All rights reserved.
 * code.google.com/p/crypto-js/wiki/License
 * THIS IS FIX of 'core.js' to fix Hmac issue.
 * https://code.google.com/p/crypto-js/issues/detail?id=84
 * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
 */
/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
 */
//# sourceMappingURL=middlewares.js.map
