var e;
var t;
(e = self),
  (t = () =>
    (() => {
      var e = {
        948: (e, t, r) => {
          "use strict";
          function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function u(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function o(e, t, r) {
            var o = t.initialState;
            return {
              getState() {
                return o;
              },
              dispatch(i, a) {
                var c = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? n(Object(r), !0).forEach((t) => {
                          u(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : n(Object(r)).forEach((t) => {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({}, o);
                (o = e(o, {
                  type: i,
                  props: t,
                  payload: a,
                })),
                  r({
                    state: o,
                    prevState: c,
                  });
              },
            };
          }
          function i(e) {
            return e.reduce((e, t) => e.concat(t), []);
          }
          function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function c(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(r), !0).forEach((t) => {
                    l(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : a(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function l(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function s(e) {
            return 0 === e.collections.length
              ? 0
              : e.collections.reduce((e, t) => e + t.items.length, 0);
          }
          r.r(t),
            r.d(t, {
              autocomplete: () => br,
              getAlgoliaFacets: () => Rr,
              getAlgoliaResults: () => Lr,
            });
          var p = 0;
          function f() {
            return "autocomplete-".concat(p++);
          }
          var d = () => {};
          function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function v(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function h(e, t) {
            var r = [];
            return Promise.resolve(e(t)).then(
              (e) => (
                Array.isArray(e),
                Promise.all(
                  e
                    .filter((e) => Boolean(e))
                    .map((e) => {
                      if ((e.sourceId, r.includes(e.sourceId)))
                        throw new Error(
                          "[Autocomplete] The `sourceId` ".concat(
                            JSON.stringify(e.sourceId),
                            " is not unique."
                          )
                        );
                      r.push(e.sourceId);
                      var t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? m(Object(r), !0).forEach((t) => {
                                v(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : m(Object(r)).forEach((t) => {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })(
                        {
                          getItemInputValue(e) {
                            return e.state.query;
                          },
                          getItemUrl() {},
                          onSelect(e) {
                            (0, e.setIsOpen)(!1);
                          },
                          onActive: d,
                        },
                        e
                      );
                      return Promise.resolve(t);
                    })
                )
              )
            );
          }
          function D(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return y(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return y(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? y(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function g(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function b(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? g(Object(r), !0).forEach((t) => {
                    _(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : g(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function _(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function O(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function A(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? O(Object(r), !0).forEach((t) => {
                    E(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : O(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function E(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function C(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function F(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? C(Object(r), !0).forEach((t) => {
                    P(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : C(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function P(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function j(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return w(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return w(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? w(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function S(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function B(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? S(Object(r), !0).forEach((t) => {
                    I(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : S(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function I(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function k(e) {
            return Boolean(e.execute);
          }
          function x(e, t) {
            return (
              (r = e),
              Boolean(null == r ? void 0 : r.execute)
                ? B(
                    B({}, e),
                    {},
                    {
                      requests: e.queries.map((r) => ({
                        query: r,
                        sourceId: t,
                        transformResponse: e.transformResponse,
                      })),
                    }
                  )
                : {
                    items: e,
                    sourceId: t,
                  }
            );
            var r;
          }
          function N(e) {
            var t = e
              .reduce((e, t) => {
                if (!k(t)) return e.push(t), e;
                var r = t.searchClient,
                  n = t.execute,
                  u = t.requests,
                  o = e.find(
                    (e) =>
                      k(t) && k(e) && e.searchClient === r && e.execute === n
                  );
                if (o) {
                  var i;
                  (i = o.items).push.apply(i, j(u));
                } else {
                  var a = {
                    execute: n,
                    items: u,
                    searchClient: r,
                  };
                  e.push(a);
                }
                return e;
              }, [])
              .map((e) => {
                if (!k(e)) return Promise.resolve(e);
                var t = e,
                  r = t.execute,
                  n = t.items;
                return r({
                  searchClient: t.searchClient,
                  requests: n,
                });
              });
            return Promise.all(t).then((e) => i(e));
          }
          function T(e, t) {
            return t.map((t) => {
              var r = e.filter((e) => e.sourceId === t.sourceId),
                n = r.map((e) => e.items),
                u = r[0].transformResponse,
                o = u
                  ? u(
                      ((e) => {
                        var t = e.map((e) => {
                          var t;
                          return F(
                            F({}, e),
                            {},
                            {
                              hits:
                                null === (t = e.hits) || void 0 === t
                                  ? void 0
                                  : t.map((t) =>
                                      F(
                                        F({}, t),
                                        {},
                                        {
                                          __autocomplete_indexName: e.index,
                                          __autocomplete_queryID: e.queryID,
                                        }
                                      )
                                    ),
                            }
                          );
                        });
                        return {
                          results: t,
                          hits: t.map((e) => e.hits).filter(Boolean),
                          facetHits: t
                            .map((e) => {
                              var t;
                              return null === (t = e.facetHits) || void 0 === t
                                ? void 0
                                : t.map((e) => ({
                                    label: e.value,
                                    count: e.count,
                                    _highlightResult: {
                                      label: {
                                        value: e.highlighted,
                                      },
                                    },
                                  }));
                            })
                            .filter(Boolean),
                        };
                      })(n)
                    )
                  : n;
              return (
                Array.isArray(o),
                o.every(Boolean),
                'The `getItems` function from source "'
                  .concat(
                    t.sourceId,
                    '" must return an array of items but returned '
                  )
                  .concat(
                    JSON.stringify(void 0),
                    ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"
                  ),
                {
                  source: t,
                  items: o,
                }
              );
            });
          }
          function q(e) {
            var t = ((e) => {
              var t = e.collections
                .map((e) => e.items.length)
                .reduce((e, t, r) => {
                  var n = (e[r - 1] || 0) + t;
                  return e.push(n), e;
                }, [])
                .reduce((t, r) => (r <= e.activeItemId ? t + 1 : t), 0);
              return e.collections[t];
            })(e);
            if (!t) return null;
            var r =
                t.items[
                  ((e) => {
                    for (
                      var t = e.state, r = e.collection, n = !1, u = 0, o = 0;
                      !1 === n;

                    ) {
                      var i = t.collections[u];
                      if (i === r) {
                        n = !0;
                        break;
                      }
                      (o += i.items.length), u++;
                    }
                    return t.activeItemId - o;
                  })({
                    state: e,
                    collection: t,
                  })
                ],
              n = t.source;
            return {
              item: r,
              itemInputValue: n.getItemInputValue({
                item: r,
                state: e,
              }),
              itemUrl: n.getItemUrl({
                item: r,
                state: e,
              }),
              source: n,
            };
          }
          var R = ["event", "nextState", "props", "query", "refresh", "store"];
          function L(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function M(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? L(Object(r), !0).forEach((t) => {
                    U(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : L(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function U(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function H(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          var W,
            V,
            J,
            Q = null,
            $ =
              ((W = -1),
              (V = -1),
              (J = void 0),
              (e) => {
                var t = ++W;
                return Promise.resolve(e).then((e) =>
                  J && t < V ? J : ((V = t), (J = e), e)
                );
              });
          function z(e) {
            var t = e.event,
              r = e.nextState,
              n = void 0 === r ? {} : r,
              u = e.props,
              o = e.query,
              a = e.refresh,
              c = e.store,
              l = H(e, R);
            Q && u.environment.clearTimeout(Q);
            var s = l.setCollections,
              p = l.setIsOpen,
              f = l.setQuery,
              d = l.setActiveItemId,
              m = l.setStatus;
            if ((f(o), d(u.defaultActiveItemId), !o && !1 === u.openOnFocus)) {
              var v,
                h = c.getState().collections.map((e) =>
                  M(
                    M({}, e),
                    {},
                    {
                      items: [],
                    }
                  )
                );
              return (
                m("idle"),
                s(h),
                p(
                  null !== (v = n.isOpen) && void 0 !== v
                    ? v
                    : u.shouldPanelOpen({
                        state: c.getState(),
                      })
                ),
                $(h).then(() => Promise.resolve())
              );
            }
            return (
              m("loading"),
              (Q = u.environment.setTimeout(() => {
                m("stalled");
              }, u.stallThreshold)),
              $(
                u
                  .getSources(
                    M(
                      {
                        query: o,
                        refresh: a,
                        state: c.getState(),
                      },
                      l
                    )
                  )
                  .then((e) =>
                    Promise.all(
                      e.map((e) =>
                        Promise.resolve(
                          e.getItems(
                            M(
                              {
                                query: o,
                                refresh: a,
                                state: c.getState(),
                              },
                              l
                            )
                          )
                        ).then((t) => x(t, e.sourceId))
                      )
                    )
                      .then(N)
                      .then((t) => T(t, e))
                      .then((e) =>
                        ((e) => {
                          var t = e.collections,
                            r = e.props,
                            n = e.state,
                            u = t.reduce(
                              (e, t) =>
                                A(
                                  A({}, e),
                                  {},
                                  E(
                                    {},
                                    t.source.sourceId,
                                    A(
                                      A({}, t.source),
                                      {},
                                      {
                                        getItems() {
                                          return i(t.items);
                                        },
                                      }
                                    )
                                  )
                                ),
                              {}
                            );
                          return i(
                            r.reshape({
                              sources: Object.values(u),
                              sourcesBySourceId: u,
                              state: n,
                            })
                          )
                            .filter(Boolean)
                            .map((e) => ({
                              source: e,
                              items: e.getItems(),
                            }));
                        })({
                          collections: e,
                          props: u,
                          state: c.getState(),
                        })
                      )
                  )
              )
                .then((e) => {
                  var r;
                  m("idle"), s(e);
                  var i = u.shouldPanelOpen({
                    state: c.getState(),
                  });
                  p(
                    null !== (r = n.isOpen) && void 0 !== r
                      ? r
                      : (u.openOnFocus && !o && i) || i
                  );
                  var f = q(c.getState());
                  if (null !== c.getState().activeItemId && f) {
                    var d = f.item,
                      v = f.itemInputValue,
                      h = f.itemUrl,
                      D = f.source;
                    D.onActive(
                      M(
                        {
                          event: t,
                          item: d,
                          itemInputValue: v,
                          itemUrl: h,
                          refresh: a,
                          source: D,
                          state: c.getState(),
                        },
                        l
                      )
                    );
                  }
                })
                .finally(() => {
                  Q && u.environment.clearTimeout(Q);
                })
            );
          }
          var K = ["event", "props", "refresh", "store"];
          function G(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function X(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? G(Object(r), !0).forEach((t) => {
                    Y(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : G(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Y(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function Z(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          var ee = ["props", "refresh", "store"],
            te = ["inputElement", "formElement", "panelElement"],
            re = ["inputElement"],
            ne = ["inputElement", "maxLength"],
            ue = ["item", "source"];
          function oe(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function ie(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? oe(Object(r), !0).forEach((t) => {
                    ae(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : oe(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function ae(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function ce(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          function le(e) {
            var t = e.props,
              r = e.refresh,
              n = e.store,
              u = ce(e, ee);
            return {
              getEnvironmentProps(e) {
                var r = e.inputElement,
                  u = e.formElement,
                  o = e.panelElement;
                return ie(
                  {
                    onTouchStart(e) {
                      !1 !== n.getState().isOpen &&
                        e.target !== r &&
                        !1 ===
                          [u, o].some((t) => {
                            return (
                              (r = t), (n = e.target), r === n || r.contains(n)
                            );
                            var r, n;
                          }) &&
                        n.dispatch("blur", null);
                    },
                    onTouchMove(e) {
                      !1 !== n.getState().isOpen &&
                        r === t.environment.document.activeElement &&
                        e.target !== r &&
                        r.blur();
                    },
                  },
                  ce(e, te)
                );
              },
              getRootProps(e) {
                return ie(
                  {
                    role: "combobox",
                    "aria-expanded": n.getState().isOpen,
                    "aria-haspopup": "listbox",
                    "aria-owns": n.getState().isOpen
                      ? "".concat(t.id, "-list")
                      : void 0,
                    "aria-labelledby": "".concat(t.id, "-label"),
                  },
                  e
                );
              },
              getFormProps(e) {
                return (
                  e.inputElement,
                  ie(
                    {
                      action: "",
                      noValidate: !0,
                      role: "search",
                      onSubmit(o) {
                        var i;
                        o.preventDefault(),
                          t.onSubmit(
                            ie(
                              {
                                event: o,
                                refresh: r,
                                state: n.getState(),
                              },
                              u
                            )
                          ),
                          n.dispatch("submit", null),
                          null === (i = e.inputElement) ||
                            void 0 === i ||
                            i.blur();
                      },
                      onReset(o) {
                        var i;
                        o.preventDefault(),
                          t.onReset(
                            ie(
                              {
                                event: o,
                                refresh: r,
                                state: n.getState(),
                              },
                              u
                            )
                          ),
                          n.dispatch("reset", null),
                          null === (i = e.inputElement) ||
                            void 0 === i ||
                            i.focus();
                      },
                    },
                    ce(e, re)
                  )
                );
              },
              getLabelProps(e) {
                return ie(
                  {
                    htmlFor: "".concat(t.id, "-input"),
                    id: "".concat(t.id, "-label"),
                  },
                  e
                );
              },
              getInputProps(e) {
                function o(e) {
                  (t.openOnFocus || Boolean(n.getState().query)) &&
                    z(
                      ie(
                        {
                          event: e,
                          props: t,
                          query: n.getState().completion || n.getState().query,
                          refresh: r,
                          store: n,
                        },
                        u
                      )
                    ),
                    n.dispatch("focus", null);
                }
                var i = "ontouchstart" in t.environment,
                  a = e || {},
                  c = (a.inputElement, a.maxLength),
                  l = void 0 === c ? 512 : c,
                  s = ce(a, ne),
                  p = q(n.getState());
                return ie(
                  {
                    "aria-autocomplete": "both",
                    "aria-activedescendant":
                      n.getState().isOpen && null !== n.getState().activeItemId
                        ? ""
                            .concat(t.id, "-item-")
                            .concat(n.getState().activeItemId)
                        : void 0,
                    "aria-controls": n.getState().isOpen
                      ? "".concat(t.id, "-list")
                      : void 0,
                    "aria-labelledby": "".concat(t.id, "-label"),
                    value: n.getState().completion || n.getState().query,
                    id: "".concat(t.id, "-input"),
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    enterKeyHint: null != p && p.itemUrl ? "go" : "search",
                    spellCheck: "false",
                    autoFocus: t.autoFocus,
                    placeholder: t.placeholder,
                    maxLength: l,
                    type: "search",
                    onChange(e) {
                      z(
                        ie(
                          {
                            event: e,
                            props: t,
                            query: e.currentTarget.value.slice(0, l),
                            refresh: r,
                            store: n,
                          },
                          u
                        )
                      );
                    },
                    onKeyDown(e) {
                      !((e) => {
                        var t = e.event,
                          r = e.props,
                          n = e.refresh,
                          u = e.store,
                          o = Z(e, K);
                        if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                          var i = () => {
                              var e = r.environment.document.getElementById(
                                ""
                                  .concat(r.id, "-item-")
                                  .concat(u.getState().activeItemId)
                              );
                              e &&
                                (e.scrollIntoViewIfNeeded
                                  ? e.scrollIntoViewIfNeeded(!1)
                                  : e.scrollIntoView(!1));
                            },
                            a = () => {
                              var e = q(u.getState());
                              if (null !== u.getState().activeItemId && e) {
                                var r = e.item,
                                  i = e.itemInputValue,
                                  a = e.itemUrl,
                                  c = e.source;
                                c.onActive(
                                  X(
                                    {
                                      event: t,
                                      item: r,
                                      itemInputValue: i,
                                      itemUrl: a,
                                      refresh: n,
                                      source: c,
                                      state: u.getState(),
                                    },
                                    o
                                  )
                                );
                              }
                            };
                          t.preventDefault(),
                            !1 === u.getState().isOpen &&
                            (r.openOnFocus || Boolean(u.getState().query))
                              ? z(
                                  X(
                                    {
                                      event: t,
                                      props: r,
                                      query: u.getState().query,
                                      refresh: n,
                                      store: u,
                                    },
                                    o
                                  )
                                ).then(() => {
                                  u.dispatch(t.key, {
                                    nextActiveItemId: r.defaultActiveItemId,
                                  }),
                                    a(),
                                    setTimeout(i, 0);
                                })
                              : (u.dispatch(t.key, {}), a(), i());
                        } else if ("Escape" === t.key)
                          t.preventDefault(), u.dispatch(t.key, null);
                        else if ("Enter" === t.key) {
                          if (
                            null === u.getState().activeItemId ||
                            u
                              .getState()
                              .collections.every((e) => 0 === e.items.length)
                          )
                            return;
                          t.preventDefault();
                          var c = q(u.getState()),
                            l = c.item,
                            s = c.itemInputValue,
                            p = c.itemUrl,
                            f = c.source;
                          if (t.metaKey || t.ctrlKey)
                            void 0 !== p &&
                              (f.onSelect(
                                X(
                                  {
                                    event: t,
                                    item: l,
                                    itemInputValue: s,
                                    itemUrl: p,
                                    refresh: n,
                                    source: f,
                                    state: u.getState(),
                                  },
                                  o
                                )
                              ),
                              r.navigator.navigateNewTab({
                                itemUrl: p,
                                item: l,
                                state: u.getState(),
                              }));
                          else if (t.shiftKey)
                            void 0 !== p &&
                              (f.onSelect(
                                X(
                                  {
                                    event: t,
                                    item: l,
                                    itemInputValue: s,
                                    itemUrl: p,
                                    refresh: n,
                                    source: f,
                                    state: u.getState(),
                                  },
                                  o
                                )
                              ),
                              r.navigator.navigateNewWindow({
                                itemUrl: p,
                                item: l,
                                state: u.getState(),
                              }));
                          else if (t.altKey);
                          else {
                            if (void 0 !== p)
                              return (
                                f.onSelect(
                                  X(
                                    {
                                      event: t,
                                      item: l,
                                      itemInputValue: s,
                                      itemUrl: p,
                                      refresh: n,
                                      source: f,
                                      state: u.getState(),
                                    },
                                    o
                                  )
                                ),
                                void r.navigator.navigate({
                                  itemUrl: p,
                                  item: l,
                                  state: u.getState(),
                                })
                              );
                            z(
                              X(
                                {
                                  event: t,
                                  nextState: {
                                    isOpen: !1,
                                  },
                                  props: r,
                                  query: s,
                                  refresh: n,
                                  store: u,
                                },
                                o
                              )
                            ).then(() => {
                              f.onSelect(
                                X(
                                  {
                                    event: t,
                                    item: l,
                                    itemInputValue: s,
                                    itemUrl: p,
                                    refresh: n,
                                    source: f,
                                    state: u.getState(),
                                  },
                                  o
                                )
                              );
                            });
                          }
                        }
                      })(
                        ie(
                          {
                            event: e,
                            props: t,
                            refresh: r,
                            store: n,
                          },
                          u
                        )
                      );
                    },
                    onFocus: o,
                    onBlur() {
                      i || n.dispatch("blur", null);
                    },
                    onClick(r) {
                      e.inputElement !== t.environment.document.activeElement ||
                        n.getState().isOpen ||
                        o(r);
                    },
                  },
                  s
                );
              },
              getPanelProps(e) {
                return ie(
                  {
                    onMouseDown(e) {
                      e.preventDefault();
                    },
                    onMouseLeave() {
                      n.dispatch("mouseleave", null);
                    },
                  },
                  e
                );
              },
              getListProps(e) {
                return ie(
                  {
                    role: "listbox",
                    "aria-labelledby": "".concat(t.id, "-label"),
                    id: "".concat(t.id, "-list"),
                  },
                  e
                );
              },
              getItemProps(e) {
                var o = e.item,
                  i = e.source,
                  a = ce(e, ue);
                return ie(
                  {
                    id: "".concat(t.id, "-item-").concat(o.__autocomplete_id),
                    role: "option",
                    "aria-selected":
                      n.getState().activeItemId === o.__autocomplete_id,
                    onMouseMove(e) {
                      if (o.__autocomplete_id !== n.getState().activeItemId) {
                        n.dispatch("mousemove", o.__autocomplete_id);
                        var t = q(n.getState());
                        if (null !== n.getState().activeItemId && t) {
                          var i = t.item,
                            a = t.itemInputValue,
                            c = t.itemUrl,
                            l = t.source;
                          l.onActive(
                            ie(
                              {
                                event: e,
                                item: i,
                                itemInputValue: a,
                                itemUrl: c,
                                refresh: r,
                                source: l,
                                state: n.getState(),
                              },
                              u
                            )
                          );
                        }
                      }
                    },
                    onMouseDown(e) {
                      e.preventDefault();
                    },
                    onClick(e) {
                      var a = i.getItemInputValue({
                          item: o,
                          state: n.getState(),
                        }),
                        c = i.getItemUrl({
                          item: o,
                          state: n.getState(),
                        });
                      (c
                        ? Promise.resolve()
                        : z(
                            ie(
                              {
                                event: e,
                                nextState: {
                                  isOpen: !1,
                                },
                                props: t,
                                query: a,
                                refresh: r,
                                store: n,
                              },
                              u
                            )
                          )
                      ).then(() => {
                        i.onSelect(
                          ie(
                            {
                              event: e,
                              item: o,
                              itemInputValue: a,
                              itemUrl: c,
                              refresh: r,
                              source: i,
                              state: n.getState(),
                            },
                            u
                          )
                        );
                      });
                    },
                  },
                  a
                );
              },
            };
          }
          var se = "1.5.0",
            pe = [
              {
                segment: "autocomplete-core",
                version: se,
              },
            ];
          function fe(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function de(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? fe(Object(r), !0).forEach((t) => {
                    me(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : fe(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function me(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function ve(e) {
            var t,
              r,
              n,
              u,
              o = e.plugins,
              i = e.options,
              a =
                null ===
                  (t = ((null === (r = i.__autocomplete_metadata) ||
                  void 0 === r
                    ? void 0
                    : r.userAgents) || [])[0]) || void 0 === t
                  ? void 0
                  : t.segment,
              c = a
                ? me(
                    {},
                    a,
                    Object.keys(
                      (null === (n = i.__autocomplete_metadata) || void 0 === n
                        ? void 0
                        : n.options) || {}
                    )
                  )
                : {};
            return {
              plugins: o.map((e) => ({
                name: e.name,
                options: Object.keys(e.__autocomplete_pluginOptions || []),
              })),
              options: de(
                {
                  "autocomplete-core": Object.keys(i),
                },
                c
              ),
              ua: pe.concat(
                (null === (u = i.__autocomplete_metadata) || void 0 === u
                  ? void 0
                  : u.userAgents) || []
              ),
            };
          }
          function he(e) {
            var t,
              r = e.state;
            return !1 === r.isOpen || null === r.activeItemId
              ? null
              : (null === (t = q(r)) || void 0 === t
                  ? void 0
                  : t.itemInputValue) || null;
          }
          function De(e, t, r, n) {
            if (!r) return null;
            if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
            var u = (null === t ? -1 : t) + e;
            return u <= -1 || u >= r ? (null === n ? null : 0) : u;
          }
          function ye(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function ge(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ye(Object(r), !0).forEach((t) => {
                    be(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : ye(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function be(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var _e = (e, t) => {
            switch (t.type) {
              case "setActiveItemId":
                return ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: t.payload,
                  }
                );
              case "setQuery":
                return ge(
                  ge({}, e),
                  {},
                  {
                    query: t.payload,
                    completion: null,
                  }
                );
              case "setCollections":
                return ge(
                  ge({}, e),
                  {},
                  {
                    collections: t.payload,
                  }
                );
              case "setIsOpen":
                return ge(
                  ge({}, e),
                  {},
                  {
                    isOpen: t.payload,
                  }
                );
              case "setStatus":
                return ge(
                  ge({}, e),
                  {},
                  {
                    status: t.payload,
                  }
                );
              case "setContext":
                return ge(
                  ge({}, e),
                  {},
                  {
                    context: ge(ge({}, e.context), t.payload),
                  }
                );
              case "ArrowDown":
                var r = ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: t.payload.hasOwnProperty("nextActiveItemId")
                      ? t.payload.nextActiveItemId
                      : De(
                          1,
                          e.activeItemId,
                          s(e),
                          t.props.defaultActiveItemId
                        ),
                  }
                );
                return ge(
                  ge({}, r),
                  {},
                  {
                    completion: he({
                      state: r,
                    }),
                  }
                );
              case "ArrowUp":
                var n = ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: De(
                      -1,
                      e.activeItemId,
                      s(e),
                      t.props.defaultActiveItemId
                    ),
                  }
                );
                return ge(
                  ge({}, n),
                  {},
                  {
                    completion: he({
                      state: n,
                    }),
                  }
                );
              case "Escape":
                return e.isOpen
                  ? ge(
                      ge({}, e),
                      {},
                      {
                        activeItemId: null,
                        isOpen: !1,
                        completion: null,
                      }
                    )
                  : ge(
                      ge({}, e),
                      {},
                      {
                        activeItemId: null,
                        query: "",
                        status: "idle",
                        collections: [],
                      }
                    );
              case "submit":
                return ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: null,
                    isOpen: !1,
                    status: "idle",
                  }
                );
              case "reset":
                return ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId:
                      !0 === t.props.openOnFocus
                        ? t.props.defaultActiveItemId
                        : null,
                    status: "idle",
                    query: "",
                  }
                );
              case "focus":
                return ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: t.props.defaultActiveItemId,
                    isOpen:
                      (t.props.openOnFocus || Boolean(e.query)) &&
                      t.props.shouldPanelOpen({
                        state: e,
                      }),
                  }
                );
              case "blur":
                return t.props.debug
                  ? e
                  : ge(
                      ge({}, e),
                      {},
                      {
                        isOpen: !1,
                        activeItemId: null,
                      }
                    );
              case "mousemove":
                return ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: t.payload,
                  }
                );
              case "mouseleave":
                return ge(
                  ge({}, e),
                  {},
                  {
                    activeItemId: t.props.defaultActiveItemId,
                  }
                );
              default:
                return (
                  "The reducer action ".concat(
                    JSON.stringify(t.type),
                    " is not supported."
                  ),
                  e
                );
            }
          };
          function Oe(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Ae(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Oe(Object(r), !0).forEach((t) => {
                    Ee(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Oe(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Ee(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function Ce(e) {
            var t = [],
              r = ((e, t) => {
                var r,
                  n = "undefined" != typeof window ? window : {},
                  u = e.plugins || [];
                return b(
                  b(
                    {
                      debug: !1,
                      openOnFocus: !1,
                      placeholder: "",
                      autoFocus: !1,
                      defaultActiveItemId: null,
                      stallThreshold: 300,
                      environment: n,
                      shouldPanelOpen(e) {
                        return s(e.state) > 0;
                      },
                      reshape(e) {
                        return e.sources;
                      },
                    },
                    e
                  ),
                  {},
                  {
                    id: null !== (r = e.id) && void 0 !== r ? r : f(),
                    plugins: u,
                    initialState: b(
                      {
                        activeItemId: null,
                        query: "",
                        completion: null,
                        collections: [],
                        isOpen: !1,
                        status: "idle",
                        context: {},
                      },
                      e.initialState
                    ),
                    onStateChange(t) {
                      var r;
                      null === (r = e.onStateChange) ||
                        void 0 === r ||
                        r.call(e, t),
                        u.forEach((e) => {
                          var r;
                          return null === (r = e.onStateChange) || void 0 === r
                            ? void 0
                            : r.call(e, t);
                        });
                    },
                    onSubmit(t) {
                      var r;
                      null === (r = e.onSubmit) || void 0 === r || r.call(e, t),
                        u.forEach((e) => {
                          var r;
                          return null === (r = e.onSubmit) || void 0 === r
                            ? void 0
                            : r.call(e, t);
                        });
                    },
                    onReset(t) {
                      var r;
                      null === (r = e.onReset) || void 0 === r || r.call(e, t),
                        u.forEach((e) => {
                          var r;
                          return null === (r = e.onReset) || void 0 === r
                            ? void 0
                            : r.call(e, t);
                        });
                    },
                    getSources(r) {
                      return Promise.all(
                        []
                          .concat(D(u.map((e) => e.getSources)), [e.getSources])
                          .filter(Boolean)
                          .map((e) => h(e, r))
                      )
                        .then((e) => i(e))
                        .then((e) =>
                          e.map((e) =>
                            b(
                              b({}, e),
                              {},
                              {
                                onSelect(r) {
                                  e.onSelect(r),
                                    t.forEach((e) => {
                                      var t;
                                      return null === (t = e.onSelect) ||
                                        void 0 === t
                                        ? void 0
                                        : t.call(e, r);
                                    });
                                },
                                onActive(r) {
                                  e.onActive(r),
                                    t.forEach((e) => {
                                      var t;
                                      return null === (t = e.onActive) ||
                                        void 0 === t
                                        ? void 0
                                        : t.call(e, r);
                                    });
                                },
                              }
                            )
                          )
                        );
                    },
                    navigator: b(
                      {
                        navigate(e) {
                          var t = e.itemUrl;
                          n.location.assign(t);
                        },
                        navigateNewTab(e) {
                          var t = e.itemUrl,
                            r = n.open(t, "_blank", "noopener");
                          null == r || r.focus();
                        },
                        navigateNewWindow(e) {
                          var t = e.itemUrl;
                          n.open(t, "_blank", "noopener");
                        },
                      },
                      e.navigator
                    ),
                  }
                );
              })(e, t),
              n = o(_e, r, (e) => {
                var t = e.prevState,
                  n = e.state;
                r.onStateChange(
                  Ae(
                    {
                      prevState: t,
                      state: n,
                      refresh: l,
                    },
                    u
                  )
                );
              }),
              u = ((e) => {
                var t = e.store;
                return {
                  setActiveItemId(e) {
                    t.dispatch("setActiveItemId", e);
                  },
                  setQuery(e) {
                    t.dispatch("setQuery", e);
                  },
                  setCollections(e) {
                    var r = 0,
                      n = e.map((e) =>
                        c(
                          c({}, e),
                          {},
                          {
                            items: i(e.items).map((e) =>
                              c(
                                c({}, e),
                                {},
                                {
                                  __autocomplete_id: r++,
                                }
                              )
                            ),
                          }
                        )
                      );
                    t.dispatch("setCollections", n);
                  },
                  setIsOpen(e) {
                    t.dispatch("setIsOpen", e);
                  },
                  setStatus(e) {
                    t.dispatch("setStatus", e);
                  },
                  setContext(e) {
                    t.dispatch("setContext", e);
                  },
                };
              })({
                store: n,
              }),
              a = le(
                Ae(
                  {
                    props: r,
                    refresh: l,
                    store: n,
                  },
                  u
                )
              );
            function l() {
              return z(
                Ae(
                  {
                    event: new Event("input"),
                    nextState: {
                      isOpen: n.getState().isOpen,
                    },
                    props: r,
                    query: n.getState().query,
                    refresh: l,
                    store: n,
                  },
                  u
                )
              );
            }
            return (
              r.plugins.forEach((e) => {
                var r;
                return null === (r = e.subscribe) || void 0 === r
                  ? void 0
                  : r.call(
                      e,
                      Ae(
                        Ae({}, u),
                        {},
                        {
                          refresh: l,
                          onSelect(e) {
                            t.push({
                              onSelect: e,
                            });
                          },
                          onActive(e) {
                            t.push({
                              onActive: e,
                            });
                          },
                        }
                      )
                    );
              }),
              ((e) => {
                var t,
                  r = e.metadata,
                  n = e.environment;
                if (
                  null === (t = n.navigator) || void 0 === t
                    ? void 0
                    : t.userAgent.includes("Algolia Crawler")
                ) {
                  var u = n.document.createElement("meta"),
                    o = n.document.querySelector("head");
                  (u.name = "algolia:metadata"),
                    setTimeout(() => {
                      (u.content = JSON.stringify(r)), o.appendChild(u);
                    }, 0);
                }
              })({
                metadata: ve({
                  plugins: r.plugins,
                  options: e,
                }),
                environment: r.environment,
              }),
              Ae(
                Ae(
                  {
                    refresh: l,
                  },
                  a
                ),
                u
              )
            );
          }
          function Fe(e) {
            return {
              current: e,
            };
          }
          function Pe(e, t) {
            var r = void 0;
            return function (...args) {
              for (var n = args.length, u = new Array(n), o = 0; o < n; o++)
                u[o] = args[o];
              r && clearTimeout(r),
                (r = setTimeout(() => e.apply(void 0, u), t));
            };
          }
          var je = (e) => {
              var t = e.environment,
                r = t.document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
              r.setAttribute("class", "aa-SubmitIcon"),
                r.setAttribute("viewBox", "0 0 24 24"),
                r.setAttribute("width", "20"),
                r.setAttribute("height", "20"),
                r.setAttribute("fill", "currentColor");
              var n = t.document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              return (
                n.setAttribute(
                  "d",
                  "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                ),
                r.appendChild(n),
                r
              );
            },
            we = (e) => {
              var t = e.environment,
                r = t.document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
              r.setAttribute("class", "aa-ClearIcon"),
                r.setAttribute("viewBox", "0 0 24 24"),
                r.setAttribute("width", "18"),
                r.setAttribute("height", "18"),
                r.setAttribute("fill", "currentColor");
              var n = t.document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              return (
                n.setAttribute(
                  "d",
                  "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                ),
                r.appendChild(n),
                r
              );
            },
            Se = (e) => {
              var t = e.environment.document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              return (
                t.setAttribute("class", "aa-LoadingIcon"),
                t.setAttribute("viewBox", "0 0 100 100"),
                t.setAttribute("width", "20"),
                t.setAttribute("height", "20"),
                (t.innerHTML =
                  '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>'),
                t
              );
            };
          function Be(e, t, r) {
            e[t] = null === r ? "" : "number" != typeof r ? r : r + "px";
          }
          function Ie(e) {
            this._listeners[e.type](e);
          }
          function ke(e, t, r) {
            var n,
              u,
              o = e[t];
            if ("style" === t)
              if ("string" == typeof r) e.style = r;
              else if (null === r) e.style = "";
              else for (t in r) (o && r[t] === o[t]) || Be(e.style, t, r[t]);
            else
              "o" === t[0] && "n" === t[1]
                ? ((n = t !== (t = t.replace(/Capture$/, ""))),
                  (u = t.toLowerCase()) in e && (t = u),
                  (t = t.slice(2)),
                  e._listeners || (e._listeners = {}),
                  (e._listeners[t] = r),
                  r
                    ? o || e.addEventListener(t, Ie, n)
                    : e.removeEventListener(t, Ie, n))
                : "list" !== t &&
                  "tagName" !== t &&
                  "form" !== t &&
                  "type" !== t &&
                  "size" !== t &&
                  "download" !== t &&
                  "href" !== t &&
                  t in e
                ? (e[t] = null == r ? "" : r)
                : "function" != typeof r &&
                  "dangerouslySetInnerHTML" !== t &&
                  (null == r || (!1 === r && !/^ar/.test(t))
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, r));
          }
          function xe(e) {
            switch (e) {
              case "onChange":
                return "onInput";
              default:
                return e;
            }
          }
          function Ne(e, t) {
            for (var r in t) ke(e, xe(r), t[r]);
          }
          function Te(e, t) {
            for (var r in t)
              ("o" === r[0] && "n" === r[1]) || ke(e, xe(r), t[r]);
          }
          var qe = ["children"];
          function Re(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return Le(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return Le(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? Le(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function Le(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function Me(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          function Ue(e) {
            return (t, r) => {
              var n = r.children,
                u = void 0 === n ? [] : n,
                o = Me(r, qe),
                i = e.document.createElement(t);
              return Ne(i, o), i.append(...Re(u)), i;
            };
          }
          var He = [
            "autocompleteScopeApi",
            "environment",
            "classNames",
            "getInputProps",
            "getInputPropsCore",
            "onDetachedEscape",
            "state",
          ];
          function We(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Ve(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? We(Object(r), !0).forEach((t) => {
                    Je(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : We(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Je(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function Qe(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          function $e(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function ze(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? $e(Object(r), !0).forEach((t) => {
                    Ke(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : $e(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Ke(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function Ge(e) {
            var t = e.autocomplete,
              r = e.autocompleteScopeApi,
              n = e.classNames,
              u = e.environment,
              o = e.isDetached,
              i = e.placeholder,
              a = void 0 === i ? "Search" : i,
              c = e.propGetters,
              l = e.setIsModalOpen,
              s = e.state,
              p = e.translations,
              f = Ue(u),
              d = c.getRootProps(
                ze(
                  {
                    state: s,
                    props: t.getRootProps({}),
                  },
                  r
                )
              ),
              m = f(
                "div",
                ze(
                  {
                    class: n.root,
                  },
                  d
                )
              ),
              v = f("div", {
                class: n.detachedContainer,
                onMouseDown(e) {
                  e.stopPropagation();
                },
              }),
              h = f("div", {
                class: n.detachedOverlay,
                children: [v],
                onMouseDown() {
                  l(!1), t.setIsOpen(!1);
                },
              }),
              D = c.getLabelProps(
                ze(
                  {
                    state: s,
                    props: t.getLabelProps({}),
                  },
                  r
                )
              ),
              y = f("button", {
                class: n.submitButton,
                type: "submit",
                title: p.submitButtonTitle,
                children: [
                  je({
                    environment: u,
                  }),
                ],
              }),
              g = f(
                "label",
                ze(
                  {
                    class: n.label,
                    children: [y],
                  },
                  D
                )
              ),
              b = f("button", {
                class: n.clearButton,
                type: "reset",
                title: p.clearButtonTitle,
                children: [
                  we({
                    environment: u,
                  }),
                ],
              }),
              _ = f("div", {
                class: n.loadingIndicator,
                children: [
                  Se({
                    environment: u,
                  }),
                ],
              }),
              O = ((e) => {
                var t = e.autocompleteScopeApi,
                  r = e.environment,
                  n = (e.classNames, e.getInputProps),
                  u = e.getInputPropsCore,
                  o = e.onDetachedEscape,
                  i = e.state,
                  a = Qe(e, He),
                  c = Ue(r)("input", a),
                  l = n(
                    Ve(
                      {
                        state: i,
                        props: u({
                          inputElement: c,
                        }),
                        inputElement: c,
                      },
                      t
                    )
                  );
                return (
                  Ne(
                    c,
                    Ve(
                      Ve({}, l),
                      {},
                      {
                        onKeyDown(e) {
                          if (o && "Escape" === e.key)
                            return e.preventDefault(), void o();
                          l.onKeyDown(e);
                        },
                      }
                    )
                  ),
                  c
                );
              })({
                class: n.input,
                environment: u,
                state: s,
                getInputProps: c.getInputProps,
                getInputPropsCore: t.getInputProps,
                autocompleteScopeApi: r,
                onDetachedEscape: o
                  ? () => {
                      t.setIsOpen(!1), l(!1);
                    }
                  : void 0,
              }),
              A = f("div", {
                class: n.inputWrapperPrefix,
                children: [g, _],
              }),
              E = f("div", {
                class: n.inputWrapperSuffix,
                children: [b],
              }),
              C = f("div", {
                class: n.inputWrapper,
                children: [O],
              }),
              F = c.getFormProps(
                ze(
                  {
                    state: s,
                    props: t.getFormProps({
                      inputElement: O,
                    }),
                  },
                  r
                )
              ),
              P = f(
                "form",
                ze(
                  {
                    class: n.form,
                    children: [A, C, E],
                  },
                  F
                )
              ),
              j = c.getPanelProps(
                ze(
                  {
                    state: s,
                    props: t.getPanelProps({}),
                  },
                  r
                )
              ),
              w = f(
                "div",
                ze(
                  {
                    class: n.panel,
                  },
                  j
                )
              );
            if (o) {
              var S = f("div", {
                  class: n.detachedSearchButtonIcon,
                  children: [
                    je({
                      environment: u,
                    }),
                  ],
                }),
                B = f("div", {
                  class: n.detachedSearchButtonPlaceholder,
                  textContent: a,
                }),
                I = f("button", {
                  class: n.detachedSearchButton,
                  onClick(e) {
                    e.preventDefault(), l(!0);
                  },
                  children: [S, B],
                }),
                k = f("button", {
                  class: n.detachedCancelButton,
                  textContent: p.detachedCancelButtonText,
                  onClick() {
                    t.setIsOpen(!1), l(!1);
                  },
                }),
                x = f("div", {
                  class: n.detachedFormContainer,
                  children: [P, k],
                });
              v.appendChild(x), m.appendChild(I);
            } else m.appendChild(P);
            return {
              detachedContainer: v,
              detachedOverlay: h,
              inputWrapper: C,
              input: O,
              root: m,
              form: P,
              label: g,
              submitButton: y,
              clearButton: b,
              loadingIndicator: _,
              panel: w,
            };
          }
          var Xe,
            Ye,
            Ze,
            et,
            tt = {},
            rt = [],
            nt =
              /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
          function ut(e, t) {
            for (var r in t) e[r] = t[r];
            return e;
          }
          function ot(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
          }
          function it(e, t, r) {
            var n,
              u,
              o,
              i = arguments,
              a = {};
            for (o in t)
              "key" == o ? (n = t[o]) : "ref" == o ? (u = t[o]) : (a[o] = t[o]);
            if (arguments.length > 3)
              for (r = [r], o = 3; o < arguments.length; o++) r.push(i[o]);
            if (
              (null != r && (a.children = r),
              "function" == typeof e && null != e.defaultProps)
            )
              for (o in e.defaultProps)
                void 0 === a[o] && (a[o] = e.defaultProps[o]);
            return at(e, a, n, u, null);
          }
          function at(e, t, r, n, u) {
            var o = {
              type: e,
              props: t,
              key: r,
              ref: n,
              __k: null,
              __: null,
              __b: 0,
              __e: null,
              __d: void 0,
              __c: null,
              __h: null,
              constructor: void 0,
              __v: null == u ? ++Xe.__v : u,
            };
            return null != Xe.vnode && Xe.vnode(o), o;
          }
          function ct(e) {
            return e.children;
          }
          function lt(e, t) {
            (this.props = e), (this.context = t);
          }
          function st(e, t) {
            if (null == t)
              return e.__ ? st(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var r; t < e.__k.length; t++)
              if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
            return "function" == typeof e.type ? st(e) : null;
          }
          function pt(e) {
            var t, r;
            if (null != (e = e.__) && null != e.__c) {
              for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) {
                  e.__e = e.__c.base = r.__e;
                  break;
                }
              return pt(e);
            }
          }
          function ft(e) {
            ((!e.__d && (e.__d = !0) && Ye.push(e) && !dt.__r++) ||
              et !== Xe.debounceRendering) &&
              ((et = Xe.debounceRendering) || Ze)(dt);
          }
          function dt() {
            for (var e; (dt.__r = Ye.length); )
              (e = Ye.sort((e, t) => e.__v.__b - t.__v.__b)),
                (Ye = []),
                e.some((e) => {
                  var t, r, n, u, o, i;
                  e.__d &&
                    ((o = (u = (t = e).__v).__e),
                    (i = t.__P) &&
                      ((r = []),
                      ((n = ut({}, u)).__v = u.__v + 1),
                      _t(
                        i,
                        u,
                        n,
                        t.__n,
                        void 0 !== i.ownerSVGElement,
                        null != u.__h ? [o] : null,
                        r,
                        null == o ? st(u) : o,
                        u.__h
                      ),
                      Ot(r, u),
                      u.__e != o && pt(u)));
                });
          }
          function mt(e, t, r, n, u, o, i, a, c, l) {
            var s,
              p,
              f,
              d,
              m,
              v,
              h,
              D = (n && n.__k) || rt,
              y = D.length;
            for (r.__k = [], s = 0; s < t.length; s++)
              if (
                null !=
                (d = r.__k[s] =
                  null == (d = t[s]) || "boolean" == typeof d
                    ? null
                    : "string" == typeof d ||
                      "number" == typeof d ||
                      "bigint" == typeof d
                    ? at(null, d, null, null, d)
                    : Array.isArray(d)
                    ? at(
                        ct,
                        {
                          children: d,
                        },
                        null,
                        null,
                        null
                      )
                    : d.__b > 0
                    ? at(d.type, d.props, d.key, null, d.__v)
                    : d)
              ) {
                if (
                  ((d.__ = r),
                  (d.__b = r.__b + 1),
                  null === (f = D[s]) ||
                    (f && d.key == f.key && d.type === f.type))
                )
                  D[s] = void 0;
                else
                  for (p = 0; p < y; p++) {
                    if ((f = D[p]) && d.key == f.key && d.type === f.type) {
                      D[p] = void 0;
                      break;
                    }
                    f = null;
                  }
                _t(e, d, (f = f || tt), u, o, i, a, c, l),
                  (m = d.__e),
                  (p = d.ref) &&
                    f.ref != p &&
                    (h || (h = []),
                    f.ref && h.push(f.ref, null, d),
                    h.push(p, d.__c || m, d)),
                  null != m
                    ? (null == v && (v = m),
                      "function" == typeof d.type &&
                      null != d.__k &&
                      d.__k === f.__k
                        ? (d.__d = c = vt(d, c, e))
                        : (c = ht(e, d, f, D, m, c)),
                      l || "option" !== r.type
                        ? "function" == typeof r.type && (r.__d = c)
                        : (e.value = ""))
                    : c && f.__e == c && c.parentNode != e && (c = st(f));
              }
            for (r.__e = v, s = y; s--; )
              null != D[s] &&
                ("function" == typeof r.type &&
                  null != D[s].__e &&
                  D[s].__e == r.__d &&
                  (r.__d = st(n, s + 1)),
                Ct(D[s], D[s]));
            if (h) for (s = 0; s < h.length; s++) Et(h[s], h[++s], h[++s]);
          }
          function vt(e, t, r) {
            var n, u;
            for (n = 0; n < e.__k.length; n++)
              (u = e.__k[n]) &&
                ((u.__ = e),
                (t =
                  "function" == typeof u.type
                    ? vt(u, t, r)
                    : ht(r, u, u, e.__k, u.__e, t)));
            return t;
          }
          function ht(e, t, r, n, u, o) {
            var i, a, c;
            if (void 0 !== t.__d) (i = t.__d), (t.__d = void 0);
            else if (null == r || u != o || null == u.parentNode)
              e: if (null == o || o.parentNode !== e)
                e.appendChild(u), (i = null);
              else {
                for (a = o, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
                  if (a == u) break e;
                e.insertBefore(u, o), (i = o);
              }
            return void 0 !== i ? i : u.nextSibling;
          }
          function Dt(e, t, r) {
            "-" === t[0]
              ? e.setProperty(t, r)
              : (e[t] =
                  null == r
                    ? ""
                    : "number" != typeof r || nt.test(t)
                    ? r
                    : r + "px");
          }
          function yt(e, t, r, n, u) {
            var o;
            e: if ("style" === t)
              if ("string" == typeof r) e.style.cssText = r;
              else {
                if (("string" == typeof n && (e.style.cssText = n = ""), n))
                  for (t in n) (r && t in r) || Dt(e.style, t, "");
                if (r)
                  for (t in r) (n && r[t] === n[t]) || Dt(e.style, t, r[t]);
              }
            else if ("o" === t[0] && "n" === t[1])
              (o = t !== (t = t.replace(/Capture$/, ""))),
                (t =
                  t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + o] = r),
                r
                  ? n || e.addEventListener(t, o ? bt : gt, o)
                  : e.removeEventListener(t, o ? bt : gt, o);
            else if ("dangerouslySetInnerHTML" !== t) {
              if (u) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
              else if (
                "href" !== t &&
                "list" !== t &&
                "form" !== t &&
                "tabIndex" !== t &&
                "download" !== t &&
                t in e
              )
                try {
                  e[t] = null == r ? "" : r;
                  break e;
                } catch (e) {}
              "function" == typeof r ||
                (null != r && (!1 !== r || ("a" === t[0] && "r" === t[1]))
                  ? e.setAttribute(t, r)
                  : e.removeAttribute(t));
            }
          }
          function gt(e) {
            this.l[e.type + !1](Xe.event ? Xe.event(e) : e);
          }
          function bt(e) {
            this.l[e.type + !0](Xe.event ? Xe.event(e) : e);
          }
          function _t(e, t, r, n, u, o, i, a, c) {
            var l,
              s,
              p,
              f,
              d,
              m,
              v,
              h,
              D,
              y,
              g,
              b = t.type;
            if (void 0 !== t.constructor) return null;
            null != r.__h &&
              ((c = r.__h), (a = t.__e = r.__e), (t.__h = null), (o = [a])),
              (l = Xe.__b) && l(t);
            try {
              e: if ("function" == typeof b) {
                if (
                  ((h = t.props),
                  (D = (l = b.contextType) && n[l.__c]),
                  (y = l ? (D ? D.props.value : l.__) : n),
                  r.__c
                    ? (v = (s = t.__c = r.__c).__ = s.__E)
                    : ("prototype" in b && b.prototype.render
                        ? (t.__c = s = new b(h, y))
                        : ((t.__c = s = new lt(h, y)),
                          (s.constructor = b),
                          (s.render = Ft)),
                      D && D.sub(s),
                      (s.props = h),
                      s.state || (s.state = {}),
                      (s.context = y),
                      (s.__n = n),
                      (p = s.__d = !0),
                      (s.__h = [])),
                  null == s.__s && (s.__s = s.state),
                  null != b.getDerivedStateFromProps &&
                    (s.__s == s.state && (s.__s = ut({}, s.__s)),
                    ut(s.__s, b.getDerivedStateFromProps(h, s.__s))),
                  (f = s.props),
                  (d = s.state),
                  p)
                )
                  null == b.getDerivedStateFromProps &&
                    null != s.componentWillMount &&
                    s.componentWillMount(),
                    null != s.componentDidMount &&
                      s.__h.push(s.componentDidMount);
                else {
                  if (
                    (null == b.getDerivedStateFromProps &&
                      h !== f &&
                      null != s.componentWillReceiveProps &&
                      s.componentWillReceiveProps(h, y),
                    (!s.__e &&
                      null != s.shouldComponentUpdate &&
                      !1 === s.shouldComponentUpdate(h, s.__s, y)) ||
                      t.__v === r.__v)
                  ) {
                    (s.props = h),
                      (s.state = s.__s),
                      t.__v !== r.__v && (s.__d = !1),
                      (s.__v = t),
                      (t.__e = r.__e),
                      (t.__k = r.__k),
                      t.__k.forEach((e) => {
                        e && (e.__ = t);
                      }),
                      s.__h.length && i.push(s);
                    break e;
                  }
                  null != s.componentWillUpdate &&
                    s.componentWillUpdate(h, s.__s, y),
                    null != s.componentDidUpdate &&
                      s.__h.push(() => {
                        s.componentDidUpdate(f, d, m);
                      });
                }
                (s.context = y),
                  (s.props = h),
                  (s.state = s.__s),
                  (l = Xe.__r) && l(t),
                  (s.__d = !1),
                  (s.__v = t),
                  (s.__P = e),
                  (l = s.render(s.props, s.state, s.context)),
                  (s.state = s.__s),
                  null != s.getChildContext &&
                    (n = ut(ut({}, n), s.getChildContext())),
                  p ||
                    null == s.getSnapshotBeforeUpdate ||
                    (m = s.getSnapshotBeforeUpdate(f, d)),
                  (g =
                    null != l && l.type === ct && null == l.key
                      ? l.props.children
                      : l),
                  mt(e, Array.isArray(g) ? g : [g], t, r, n, u, o, i, a, c),
                  (s.base = t.__e),
                  (t.__h = null),
                  s.__h.length && i.push(s),
                  v && (s.__E = s.__ = null),
                  (s.__e = !1);
              } else
                null == o && t.__v === r.__v
                  ? ((t.__k = r.__k), (t.__e = r.__e))
                  : (t.__e = At(r.__e, t, r, n, u, o, i, c));
              (l = Xe.diffed) && l(t);
            } catch (e) {
              (t.__v = null),
                (c || null != o) &&
                  ((t.__e = a), (t.__h = !!c), (o[o.indexOf(a)] = null)),
                Xe.__e(e, t, r);
            }
          }
          function Ot(e, t) {
            Xe.__c && Xe.__c(t, e),
              e.some((t) => {
                try {
                  (e = t.__h),
                    (t.__h = []),
                    e.some((e) => {
                      e.call(t);
                    });
                } catch (e) {
                  Xe.__e(e, t.__v);
                }
              });
          }
          function At(e, t, r, n, u, o, i, a) {
            var c,
              l,
              s,
              p,
              f = r.props,
              d = t.props,
              m = t.type,
              v = 0;
            if (("svg" === m && (u = !0), null != o))
              for (; v < o.length; v++)
                if (
                  (c = o[v]) &&
                  (c === e || (m ? c.localName == m : 3 == c.nodeType))
                ) {
                  (e = c), (o[v] = null);
                  break;
                }
            if (null == e) {
              if (null === m) return document.createTextNode(d);
              (e = u
                ? document.createElementNS("http://www.w3.org/2000/svg", m)
                : document.createElement(m, d.is && d)),
                (o = null),
                (a = !1);
            }
            if (null === m) f === d || (a && e.data === d) || (e.data = d);
            else {
              if (
                ((o = o && rt.slice.call(e.childNodes)),
                (l = (f = r.props || tt).dangerouslySetInnerHTML),
                (s = d.dangerouslySetInnerHTML),
                !a)
              ) {
                if (null != o)
                  for (f = {}, p = 0; p < e.attributes.length; p++)
                    f[e.attributes[p].name] = e.attributes[p].value;
                (s || l) &&
                  ((s &&
                    ((l && s.__html == l.__html) ||
                      s.__html === e.innerHTML)) ||
                    (e.innerHTML = (s && s.__html) || ""));
              }
              if (
                (((e, t, r, n, u) => {
                  var o;
                  for (o in r)
                    "children" === o ||
                      "key" === o ||
                      o in t ||
                      yt(e, o, null, r[o], n);
                  for (o in t)
                    (u && "function" != typeof t[o]) ||
                      "children" === o ||
                      "key" === o ||
                      "value" === o ||
                      "checked" === o ||
                      r[o] === t[o] ||
                      yt(e, o, t[o], r[o], n);
                })(e, d, f, u, a),
                s)
              )
                t.__k = [];
              else if (
                ((v = t.props.children),
                mt(
                  e,
                  Array.isArray(v) ? v : [v],
                  t,
                  r,
                  n,
                  u && "foreignObject" !== m,
                  o,
                  i,
                  e.firstChild,
                  a
                ),
                null != o)
              )
                for (v = o.length; v--; ) null != o[v] && ot(o[v]);
              a ||
                ("value" in d &&
                  void 0 !== (v = d.value) &&
                  (v !== e.value || ("progress" === m && !v)) &&
                  yt(e, "value", v, f.value, !1),
                "checked" in d &&
                  void 0 !== (v = d.checked) &&
                  v !== e.checked &&
                  yt(e, "checked", v, f.checked, !1));
            }
            return e;
          }
          function Et(e, t, r) {
            try {
              "function" == typeof e ? e(t) : (e.current = t);
            } catch (e) {
              Xe.__e(e, r);
            }
          }
          function Ct(e, t, r) {
            var n, u, o;
            if (
              (Xe.unmount && Xe.unmount(e),
              (n = e.ref) &&
                ((n.current && n.current !== e.__e) || Et(n, null, t)),
              r || "function" == typeof e.type || (r = null != (u = e.__e)),
              (e.__e = e.__d = void 0),
              null != (n = e.__c))
            ) {
              if (n.componentWillUnmount)
                try {
                  n.componentWillUnmount();
                } catch (e) {
                  Xe.__e(e, t);
                }
              n.base = n.__P = null;
            }
            if ((n = e.__k))
              for (o = 0; o < n.length; o++) n[o] && Ct(n[o], t, r);
            null != u && ot(u);
          }
          function Ft(e, t, r) {
            return this.constructor(e, r);
          }
          function Pt(e, t, r) {
            var n, u, o;
            Xe.__ && Xe.__(e, t),
              (u = (n = "function" == typeof r) ? null : (r && r.__k) || t.__k),
              (o = []),
              _t(
                t,
                (e = ((!n && r) || t).__k = it(ct, null, [e])),
                u || tt,
                tt,
                void 0 !== t.ownerSVGElement,
                !n && r
                  ? [r]
                  : u
                  ? null
                  : t.firstChild
                  ? rt.slice.call(t.childNodes)
                  : null,
                o,
                !n && r ? r : u ? u.__e : t.firstChild,
                n
              ),
              Ot(o, e);
          }
          function jt(e, t) {
            return t.reduce((e, t) => e && e[t], e);
          }
          (Xe = {
            __e(e, t) {
              for (var r, n, u; (t = t.__); )
                if ((r = t.__c) && !r.__)
                  try {
                    if (
                      ((n = r.constructor) &&
                        null != n.getDerivedStateFromError &&
                        (r.setState(n.getDerivedStateFromError(e)),
                        (u = r.__d)),
                      null != r.componentDidCatch &&
                        (r.componentDidCatch(e), (u = r.__d)),
                      u)
                    )
                      return (r.__E = r);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
            __v: 0,
          }),
            (lt.prototype.setState = function (e, t) {
              var r;
              (r =
                null != this.__s && this.__s !== this.state
                  ? this.__s
                  : (this.__s = ut({}, this.state))),
                "function" == typeof e && (e = e(ut({}, r), this.props)),
                e && ut(r, e),
                null != e && this.__v && (t && this.__h.push(t), ft(this));
            }),
            (lt.prototype.forceUpdate = function (e) {
              this.__v && ((this.__e = !0), e && this.__h.push(e), ft(this));
            }),
            (lt.prototype.render = ct),
            (Ye = []),
            (Ze =
              "function" == typeof Promise
                ? Promise.prototype.then.bind(Promise.resolve())
                : setTimeout),
            (dt.__r = 0);
          var wt = "__aa-highlight__",
            St = "__/aa-highlight__";
          function Bt(e) {
            var t = e.highlightedValue.split(wt),
              r = t.shift(),
              n = (function (...args) {
                var e = args.length > 0 && void 0 !== args[0] ? args[0] : [];
                return {
                  get() {
                    return e;
                  },
                  add(t) {
                    var r = e[e.length - 1];
                    (null == r ? void 0 : r.isHighlighted) === t.isHighlighted
                      ? (e[e.length - 1] = {
                          value: r.value + t.value,
                          isHighlighted: r.isHighlighted,
                        })
                      : e.push(t);
                  },
                };
              })(
                r
                  ? [
                      {
                        value: r,
                        isHighlighted: !1,
                      },
                    ]
                  : []
              );
            return (
              t.forEach((e) => {
                var t = e.split(St);
                n.add({
                  value: t[0],
                  isHighlighted: !0,
                }),
                  "" !== t[1] &&
                    n.add({
                      value: t[1],
                      isHighlighted: !1,
                    });
              }),
              n.get()
            );
          }
          function It(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return kt(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return kt(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? kt(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function kt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function xt(e) {
            var t = e.hit,
              r = e.attribute,
              n = Array.isArray(r) ? r : [r],
              u = jt(t, ["_highlightResult"].concat(It(n), ["value"]));
            return (
              "string" != typeof u && (u = jt(t, n) || ""),
              Bt({
                highlightedValue: u,
              })
            );
          }
          var Nt = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            },
            Tt = new RegExp(/\w/i),
            qt = /&(amp|quot|lt|gt|#39);/g,
            Rt = RegExp(qt.source);
          function Lt(e, t) {
            var r,
              n,
              u,
              o = e[t],
              i =
                (null === (r = e[t + 1]) || void 0 === r
                  ? void 0
                  : r.isHighlighted) || !0,
              a =
                (null === (n = e[t - 1]) || void 0 === n
                  ? void 0
                  : n.isHighlighted) || !0;
            return Tt.test(
              (u = o.value) && Rt.test(u) ? u.replace(qt, (e) => Nt[e]) : u
            ) || a !== i
              ? o.isHighlighted
              : a;
          }
          function Mt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Mt(Object(r), !0).forEach((t) => {
                    Ht(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Mt(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Ht(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function Wt(e) {
            return e.some((e) => e.isHighlighted)
              ? e.map((t, r) =>
                  Ut(
                    Ut({}, t),
                    {},
                    {
                      isHighlighted: !Lt(e, r),
                    }
                  )
                )
              : e.map((e) =>
                  Ut(
                    Ut({}, e),
                    {},
                    {
                      isHighlighted: !1,
                    }
                  )
                );
          }
          function Vt(e) {
            var t = e.createElement,
              r = e.Fragment;
            return (e) => {
              var n,
                u = e.hit,
                o = e.attribute,
                i = e.tagName,
                a = void 0 === i ? "mark" : i;
              return t(
                r,
                {},
                ((n = {
                  hit: u,
                  attribute: o,
                }),
                Wt(xt(n))).map((e, r) =>
                  e.isHighlighted
                    ? t(
                        a,
                        {
                          key: r,
                        },
                        e.value
                      )
                    : e.value
                )
              );
            };
          }
          function Jt(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return Qt(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return Qt(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? Qt(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function Qt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function $t(e) {
            var t = e.hit,
              r = e.attribute,
              n = Array.isArray(r) ? r : [r],
              u = jt(t, ["_snippetResult"].concat(Jt(n), ["value"]));
            return (
              "string" != typeof u && (u = jt(t, n) || ""),
              Bt({
                highlightedValue: u,
              })
            );
          }
          function zt(e) {
            var t = e.createElement,
              r = e.Fragment;
            return (e) => {
              var n,
                u = e.hit,
                o = e.attribute,
                i = e.tagName,
                a = void 0 === i ? "mark" : i;
              return t(
                r,
                {},
                ((n = {
                  hit: u,
                  attribute: o,
                }),
                Wt($t(n))).map((e, r) =>
                  e.isHighlighted
                    ? t(
                        a,
                        {
                          key: r,
                        },
                        e.value
                      )
                    : e.value
                )
              );
            };
          }
          function Kt(e) {
            var t = e.createElement,
              r = e.Fragment;
            return (e) => {
              var n = e.hit,
                u = e.attribute,
                o = e.tagName,
                i = void 0 === o ? "mark" : o;
              return t(
                r,
                {},
                $t({
                  hit: n,
                  attribute: u,
                }).map((e, r) =>
                  e.isHighlighted
                    ? t(
                        i,
                        {
                          key: r,
                        },
                        e.value
                      )
                    : e.value
                )
              );
            };
          }
          function Gt(e, t) {
            if ("string" == typeof t) {
              var r = e.document.querySelector(t);
              return (
                "The element ".concat(
                  JSON.stringify(t),
                  " is not in the document."
                ),
                r
              );
            }
            return t;
          }
          function Xt(...args) {
            for (var e = args.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = args[r];
            return t.reduce(
              (e, t) => (
                Object.keys(t).forEach((r) => {
                  var n = e[r],
                    u = t[r];
                  n !== u && (e[r] = [n, u].filter(Boolean).join(" "));
                }),
                e
              ),
              {}
            );
          }
          var Yt = [
            "classNames",
            "container",
            "getEnvironmentProps",
            "getFormProps",
            "getInputProps",
            "getItemProps",
            "getLabelProps",
            "getListProps",
            "getPanelProps",
            "getRootProps",
            "panelContainer",
            "panelPlacement",
            "render",
            "renderNoResults",
            "renderer",
            "detachedMediaQuery",
            "components",
            "translations",
          ];
          function Zt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function er(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Zt(Object(r), !0).forEach((t) => {
                    tr(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Zt(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function tr(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function rr(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          var nr = {
              clearButton: "aa-ClearButton",
              detachedCancelButton: "aa-DetachedCancelButton",
              detachedContainer: "aa-DetachedContainer",
              detachedFormContainer: "aa-DetachedFormContainer",
              detachedOverlay: "aa-DetachedOverlay",
              detachedSearchButton: "aa-DetachedSearchButton",
              detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
              detachedSearchButtonPlaceholder:
                "aa-DetachedSearchButtonPlaceholder",
              form: "aa-Form",
              input: "aa-Input",
              inputWrapper: "aa-InputWrapper",
              inputWrapperPrefix: "aa-InputWrapperPrefix",
              inputWrapperSuffix: "aa-InputWrapperSuffix",
              item: "aa-Item",
              label: "aa-Label",
              list: "aa-List",
              loadingIndicator: "aa-LoadingIndicator",
              panel: "aa-Panel",
              panelLayout: "aa-PanelLayout aa-Panel--scrollable",
              root: "aa-Autocomplete",
              source: "aa-Source",
              sourceFooter: "aa-SourceFooter",
              sourceHeader: "aa-SourceHeader",
              sourceNoResults: "aa-SourceNoResults",
              submitButton: "aa-SubmitButton",
            },
            ur = (e, t) => {
              Pt(e.children, t);
            },
            or = {
              createElement: it,
              Fragment: ct,
            };
          function ir(e) {
            var t = e.panelPlacement,
              r = e.container,
              n = e.form,
              u = e.environment,
              o = r.getBoundingClientRect(),
              i =
                (u.pageYOffset ||
                  u.document.documentElement.scrollTop ||
                  u.document.body.scrollTop ||
                  0) +
                o.top +
                o.height;
            switch (t) {
              case "start":
                return {
                  top: i,
                  left: o.left,
                };
              case "end":
                return {
                  top: i,
                  right:
                    u.document.documentElement.clientWidth - (o.left + o.width),
                };
              case "full-width":
                return {
                  top: i,
                  left: 0,
                  right: 0,
                  width: "unset",
                  maxWidth: "unset",
                };
              case "input-wrapper-width":
                var a = n.getBoundingClientRect();
                return {
                  top: i,
                  left: a.left,
                  right:
                    u.document.documentElement.clientWidth - (a.left + a.width),
                  width: "unset",
                  maxWidth: "unset",
                };
              default:
                throw new Error(
                  "[Autocomplete] The `panelPlacement` value ".concat(
                    JSON.stringify(t),
                    " is not valid."
                  )
                );
            }
          }
          function ar(...args) {
            return (ar =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, args);
          }
          function cr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function lr(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? cr(Object(r), !0).forEach((t) => {
                    sr(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : cr(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function sr(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var pr = [
            {
              segment: "autocomplete-js",
              version: se,
            },
          ];
          function fr(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return dr(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return dr(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? dr(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function dr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function mr(e) {
            return (mr =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? (e) => typeof e
                : (e) =>
                    e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                      ? "symbol"
                      : typeof e)(e);
          }
          var vr = (e) =>
            e &&
            "object" === mr(e) &&
            "[object Object]" === Object.prototype.toString.call(e);
          function hr(...args) {
            for (var e = args.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = args[r];
            return t.reduce(
              (e, t) => (
                Object.keys(t).forEach((r) => {
                  var n = e[r],
                    u = t[r];
                  Array.isArray(n) && Array.isArray(u)
                    ? (e[r] = n.concat(...fr(u)))
                    : vr(n) && vr(u)
                    ? (e[r] = hr(n, u))
                    : (e[r] = u);
                }),
                e
              ),
              {}
            );
          }
          function Dr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function yr(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Dr(Object(r), !0).forEach((t) => {
                    gr(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Dr(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function gr(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function br(e) {
            var t,
              r = (() => {
                var e = [],
                  t = [];
                function r(r) {
                  e.push(r);
                  var n = r();
                  t.push(n);
                }
                return {
                  runEffect: r,
                  cleanupEffects() {
                    var e = t;
                    (t = []),
                      e.forEach((e) => {
                        e();
                      });
                  },
                  runEffects() {
                    var t = e;
                    (e = []),
                      t.forEach((e) => {
                        r(e);
                      });
                  },
                };
              })(),
              n = r.runEffect,
              u = r.cleanupEffects,
              o = r.runEffects,
              i =
                ((t = []),
                {
                  reactive(e) {
                    var r = e(),
                      n = {
                        _fn: e,
                        _ref: {
                          current: r,
                        },
                        get value() {
                          return this._ref.current;
                        },
                        set value(e) {
                          this._ref.current = e;
                        },
                      };
                    return t.push(n), n;
                  },
                  runReactives() {
                    t.forEach((e) => {
                      e._ref.current = e._fn();
                    });
                  },
                }),
              a = i.reactive,
              c = i.runReactives,
              l = Fe(!1),
              p = Fe(e),
              d = Fe(void 0),
              m = a(() =>
                ((e) => {
                  var t,
                    r = e.classNames,
                    n = e.container,
                    u = e.getEnvironmentProps,
                    o = e.getFormProps,
                    i = e.getInputProps,
                    a = e.getItemProps,
                    c = e.getLabelProps,
                    l = e.getListProps,
                    s = e.getPanelProps,
                    p = e.getRootProps,
                    d = e.panelContainer,
                    m = e.panelPlacement,
                    v = e.render,
                    h = e.renderNoResults,
                    D = e.renderer,
                    y = e.detachedMediaQuery,
                    g = e.components,
                    b = e.translations,
                    _ = rr(e, Yt),
                    O = "undefined" != typeof window ? window : {},
                    A = Gt(O, n);
                  A.tagName;
                  var E,
                    C,
                    F,
                    P = null != D ? D : or,
                    j = {
                      Highlight:
                        ((E = P),
                        (C = E.createElement),
                        (F = E.Fragment),
                        (e) => {
                          var t = e.hit,
                            r = e.attribute,
                            n = e.tagName,
                            u = void 0 === n ? "mark" : n;
                          return C(
                            F,
                            {},
                            xt({
                              hit: t,
                              attribute: r,
                            }).map((e, t) =>
                              e.isHighlighted
                                ? C(
                                    u,
                                    {
                                      key: t,
                                    },
                                    e.value
                                  )
                                : e.value
                            )
                          );
                        }),
                      ReverseHighlight: Vt(P),
                      ReverseSnippet: zt(P),
                      Snippet: Kt(P),
                    };
                  return {
                    renderer: {
                      classNames: Xt(nr, null != r ? r : {}),
                      container: A,
                      getEnvironmentProps: null != u ? u : (e) => e.props,
                      getFormProps: null != o ? o : (e) => e.props,
                      getInputProps: null != i ? i : (e) => e.props,
                      getItemProps: null != a ? a : (e) => e.props,
                      getLabelProps: null != c ? c : (e) => e.props,
                      getListProps: null != l ? l : (e) => e.props,
                      getPanelProps: null != s ? s : (e) => e.props,
                      getRootProps: null != p ? p : (e) => e.props,
                      panelContainer: d ? Gt(O, d) : O.document.body,
                      panelPlacement: null != m ? m : "input-wrapper-width",
                      render: null != v ? v : ur,
                      renderNoResults: h,
                      renderer: P,
                      detachedMediaQuery:
                        null != y
                          ? y
                          : getComputedStyle(
                              O.document.documentElement
                            ).getPropertyValue("--aa-detached-media-query"),
                      components: er(er({}, j), g),
                      translations: er(
                        er(
                          {},
                          {
                            clearButtonTitle: "Clear",
                            detachedCancelButtonText: "Cancel",
                            submitButtonTitle: "Submit",
                          }
                        ),
                        b
                      ),
                    },
                    core: er(
                      er({}, _),
                      {},
                      {
                        id: null !== (t = _.id) && void 0 !== t ? t : f(),
                        environment: O,
                      }
                    ),
                  };
                })(p.current)
              ),
              v = a(
                () =>
                  m.value.core.environment.matchMedia(
                    m.value.renderer.detachedMediaQuery
                  ).matches
              ),
              h = a(() =>
                Ce(
                  yr(
                    yr({}, m.value.core),
                    {},
                    {
                      onStateChange(e) {
                        var t, r, n;
                        (l.current = e.state.collections.some(
                          (e) => e.source.templates.noResults
                        )),
                          null === (t = d.current) ||
                            void 0 === t ||
                            t.call(d, e),
                          null === (r = (n = m.value.core).onStateChange) ||
                            void 0 === r ||
                            r.call(n, e);
                      },
                      shouldPanelOpen:
                        p.current.shouldPanelOpen ||
                        ((e) => {
                          var t = e.state;
                          if (v.value) return !0;
                          var r = s(t) > 0;
                          if (!m.value.core.openOnFocus && !t.query) return r;
                          var n = Boolean(
                            l.current || m.value.renderer.renderNoResults
                          );
                          return (!r && n) || r;
                        }),
                      __autocomplete_metadata: {
                        userAgents: pr,
                        options: e,
                      },
                    }
                  )
                )
              ),
              D = Fe(
                yr(
                  {
                    collections: [],
                    completion: null,
                    context: {},
                    isOpen: !1,
                    query: "",
                    activeItemId: null,
                    status: "idle",
                  },
                  m.value.core.initialState
                )
              ),
              y = {
                getEnvironmentProps: m.value.renderer.getEnvironmentProps,
                getFormProps: m.value.renderer.getFormProps,
                getInputProps: m.value.renderer.getInputProps,
                getItemProps: m.value.renderer.getItemProps,
                getLabelProps: m.value.renderer.getLabelProps,
                getListProps: m.value.renderer.getListProps,
                getPanelProps: m.value.renderer.getPanelProps,
                getRootProps: m.value.renderer.getRootProps,
              },
              g = {
                setActiveItemId: h.value.setActiveItemId,
                setQuery: h.value.setQuery,
                setCollections: h.value.setCollections,
                setIsOpen: h.value.setIsOpen,
                setStatus: h.value.setStatus,
                setContext: h.value.setContext,
                refresh: h.value.refresh,
              },
              b = a(() =>
                Ge({
                  autocomplete: h.value,
                  autocompleteScopeApi: g,
                  classNames: m.value.renderer.classNames,
                  environment: m.value.core.environment,
                  isDetached: v.value,
                  placeholder: m.value.core.placeholder,
                  propGetters: y,
                  setIsModalOpen: E,
                  state: D.current,
                  translations: m.value.renderer.translations,
                })
              );
            function _() {
              Ne(b.value.panel, {
                style: v.value
                  ? {}
                  : ir({
                      panelPlacement: m.value.renderer.panelPlacement,
                      container: b.value.root,
                      form: b.value.form,
                      environment: m.value.core.environment,
                    }),
              });
            }
            function O(e) {
              D.current = e;
              var t = {
                  autocomplete: h.value,
                  autocompleteScopeApi: g,
                  classNames: m.value.renderer.classNames,
                  components: m.value.renderer.components,
                  container: m.value.renderer.container,
                  createElement: m.value.renderer.renderer.createElement,
                  dom: b.value,
                  Fragment: m.value.renderer.renderer.Fragment,
                  panelContainer: v.value
                    ? b.value.detachedContainer
                    : m.value.renderer.panelContainer,
                  propGetters: y,
                  state: D.current,
                },
                r =
                  (!s(e) && !l.current && m.value.renderer.renderNoResults) ||
                  m.value.renderer.render;
              !((e) => {
                var t = e.autocomplete,
                  r = e.autocompleteScopeApi,
                  n = e.dom,
                  u = e.propGetters,
                  o = e.state;
                Te(
                  n.root,
                  u.getRootProps(
                    lr(
                      {
                        state: o,
                        props: t.getRootProps({}),
                      },
                      r
                    )
                  )
                ),
                  Te(
                    n.input,
                    u.getInputProps(
                      lr(
                        {
                          state: o,
                          props: t.getInputProps({
                            inputElement: n.input,
                          }),
                          inputElement: n.input,
                        },
                        r
                      )
                    )
                  ),
                  Ne(n.label, {
                    hidden: "stalled" === o.status,
                  }),
                  Ne(n.loadingIndicator, {
                    hidden: "stalled" !== o.status,
                  }),
                  Ne(n.clearButton, {
                    hidden: !o.query,
                  });
              })(t),
                ((e, t) => {
                  var r = t.autocomplete,
                    n = t.autocompleteScopeApi,
                    u = t.classNames,
                    o = t.createElement,
                    i = t.dom,
                    a = t.Fragment,
                    c = t.panelContainer,
                    l = t.propGetters,
                    s = t.state,
                    p = t.components;
                  if (s.isOpen) {
                    c.contains(i.panel) ||
                      "loading" === s.status ||
                      c.appendChild(i.panel),
                      i.panel.classList.toggle(
                        "aa-Panel--stalled",
                        "stalled" === s.status
                      );
                    var f = s.collections
                        .filter((e) => {
                          var t = e.source,
                            r = e.items;
                          return t.templates.noResults || r.length > 0;
                        })
                        .map((e, t) => {
                          var i = e.source,
                            c = e.items;
                          return o(
                            "section",
                            {
                              key: t,
                              className: u.source,
                              "data-autocomplete-source-id": i.sourceId,
                            },
                            i.templates.header &&
                              o(
                                "div",
                                {
                                  className: u.sourceHeader,
                                },
                                i.templates.header({
                                  components: p,
                                  createElement: o,
                                  Fragment: a,
                                  items: c,
                                  source: i,
                                  state: s,
                                })
                              ),
                            i.templates.noResults && 0 === c.length
                              ? o(
                                  "div",
                                  {
                                    className: u.sourceNoResults,
                                  },
                                  i.templates.noResults({
                                    components: p,
                                    createElement: o,
                                    Fragment: a,
                                    source: i,
                                    state: s,
                                  })
                                )
                              : o(
                                  "ul",
                                  ar(
                                    {
                                      className: u.list,
                                    },
                                    l.getListProps(
                                      lr(
                                        {
                                          state: s,
                                          props: r.getListProps({}),
                                        },
                                        n
                                      )
                                    )
                                  ),
                                  c.map((e) => {
                                    var t = r.getItemProps({
                                      item: e,
                                      source: i,
                                    });
                                    return o(
                                      "li",
                                      ar(
                                        {
                                          key: t.id,
                                          className: u.item,
                                        },
                                        l.getItemProps(
                                          lr(
                                            {
                                              state: s,
                                              props: t,
                                            },
                                            n
                                          )
                                        )
                                      ),
                                      i.templates.item({
                                        components: p,
                                        createElement: o,
                                        Fragment: a,
                                        item: e,
                                        state: s,
                                      })
                                    );
                                  })
                                ),
                            i.templates.footer &&
                              o(
                                "div",
                                {
                                  className: u.sourceFooter,
                                },
                                i.templates.footer({
                                  components: p,
                                  createElement: o,
                                  Fragment: a,
                                  items: c,
                                  source: i,
                                  state: s,
                                })
                              )
                          );
                        }),
                      d = o(
                        a,
                        null,
                        o(
                          "div",
                          {
                            className: u.panelLayout,
                          },
                          f
                        ),
                        o("div", {
                          className: "aa-GradientBottom",
                        })
                      ),
                      m = f.reduce(
                        (e, t) => (
                          (e[t.props["data-autocomplete-source-id"]] = t), e
                        ),
                        {}
                      );
                    e(
                      lr(
                        {
                          children: d,
                          state: s,
                          sections: f,
                          elements: m,
                          createElement: o,
                          Fragment: a,
                          components: p,
                        },
                        n
                      ),
                      i.panel
                    );
                  } else c.contains(i.panel) && c.removeChild(i.panel);
                })(r, t);
            }
            function A(...args) {
              var e = args.length > 0 && void 0 !== args[0] ? args[0] : {};
              u(),
                (p.current = hr(
                  m.value.renderer,
                  m.value.core,
                  {
                    initialState: D.current,
                  },
                  e
                )),
                c(),
                o(),
                h.value.refresh().then(() => {
                  O(D.current);
                });
            }
            function E(e) {
              requestAnimationFrame(() => {
                var t = m.value.core.environment.document.body.contains(
                  b.value.detachedOverlay
                );
                e !== t &&
                  (e
                    ? (m.value.core.environment.document.body.appendChild(
                        b.value.detachedOverlay
                      ),
                      m.value.core.environment.document.body.classList.add(
                        "aa-Detached"
                      ),
                      b.value.input.focus())
                    : (m.value.core.environment.document.body.removeChild(
                        b.value.detachedOverlay
                      ),
                      m.value.core.environment.document.body.classList.remove(
                        "aa-Detached"
                      ),
                      h.value.setQuery(""),
                      h.value.refresh()));
              });
            }
            return (
              n(() => {
                var e = h.value.getEnvironmentProps({
                  formElement: b.value.form,
                  panelElement: b.value.panel,
                  inputElement: b.value.input,
                });
                return (
                  Ne(m.value.core.environment, e),
                  () => {
                    Ne(
                      m.value.core.environment,
                      Object.keys(e).reduce(
                        (e, t) => yr(yr({}, e), {}, gr({}, t, void 0)),
                        {}
                      )
                    );
                  }
                );
              }),
              n(() => {
                var e = v.value
                    ? m.value.core.environment.document.body
                    : m.value.renderer.panelContainer,
                  t = v.value ? b.value.detachedOverlay : b.value.panel;
                return (
                  v.value && D.current.isOpen && E(!0),
                  O(D.current),
                  () => {
                    e.contains(t) && e.removeChild(t);
                  }
                );
              }),
              n(() => {
                var e = m.value.renderer.container;
                return (
                  e.appendChild(b.value.root),
                  () => {
                    e.removeChild(b.value.root);
                  }
                );
              }),
              n(() => {
                var e = Pe((e) => {
                  O(e.state);
                }, 0);
                return (
                  (d.current = (t) => {
                    var r = t.state,
                      n = t.prevState;
                    v.value && n.isOpen !== r.isOpen && E(r.isOpen),
                      v.value || !r.isOpen || n.isOpen || _(),
                      r.query !== n.query &&
                        m.value.core.environment.document
                          .querySelectorAll(".aa-Panel--scrollable")
                          .forEach((e) => {
                            0 !== e.scrollTop && (e.scrollTop = 0);
                          }),
                      e({
                        state: r,
                      });
                  }),
                  () => {
                    d.current = void 0;
                  }
                );
              }),
              n(() => {
                var e = Pe(() => {
                  var e = v.value;
                  (v.value = m.value.core.environment.matchMedia(
                    m.value.renderer.detachedMediaQuery
                  ).matches),
                    e !== v.value ? A({}) : requestAnimationFrame(_);
                }, 20);
                return (
                  m.value.core.environment.addEventListener("resize", e),
                  () => {
                    m.value.core.environment.removeEventListener("resize", e);
                  }
                );
              }),
              n(() => {
                if (!v.value) return () => {};
                function e(e) {
                  b.value.detachedContainer.classList.toggle(
                    "aa-DetachedContainer--modal",
                    e
                  );
                }
                function t(t) {
                  e(t.matches);
                }
                var r = m.value.core.environment.matchMedia(
                  getComputedStyle(
                    m.value.core.environment.document.documentElement
                  ).getPropertyValue("--aa-detached-modal-media-query")
                );
                e(r.matches);
                var n = Boolean(r.addEventListener);
                return (
                  n ? r.addEventListener("change", t) : r.addListener(t),
                  () => {
                    n
                      ? r.removeEventListener("change", t)
                      : r.removeListener(t);
                  }
                );
              }),
              n(() => (requestAnimationFrame(_), () => {})),
              yr(
                yr({}, g),
                {},
                {
                  update: A,
                  destroy() {
                    u();
                  },
                }
              )
            );
          }
          function _r(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Or(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _r(Object(r), !0).forEach((t) => {
                    Ar(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : _r(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Ar(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var Er = ["params"];
          function Cr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Fr(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Cr(Object(r), !0).forEach((t) => {
                    Pr(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Cr(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function Pr(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function jr(e, t) {
            if (null == e) return {};
            var r,
              n,
              u = ((e, t) => {
                if (null == e) return {};
                var r,
                  n,
                  u = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                return u;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (u[r] = e[r]));
            }
            return u;
          }
          function wr(e) {
            return (
              ((e) => {
                if (Array.isArray(e)) return Sr(e);
              })(e) ||
              ((e) => {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              ((e, t) => {
                if (e) {
                  if ("string" == typeof e) return Sr(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? Sr(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (() => {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function Sr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function Br(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Ir(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Br(Object(r), !0).forEach((t) => {
                    kr(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Br(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function kr(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var xr = ((e) => {
            function t(t) {
              return e({
                searchClient: t.searchClient,
                queries: t.requests.map((e) => e.query),
              }).then((e) =>
                e.map((e, r) => {
                  var n = t.requests[r];
                  return {
                    items: e,
                    sourceId: n.sourceId,
                    transformResponse: n.transformResponse,
                  };
                })
              );
            }
            return (e) => (r) =>
              Or(
                Or(
                  {
                    execute: t,
                  },
                  e
                ),
                r
              );
          })((e) =>
            ((e) => {
              var t = e.searchClient,
                r = e.queries,
                n = e.userAgents,
                u = void 0 === n ? [] : n;
              return (
                "function" == typeof t.addAlgoliaAgent &&
                  [].concat(wr(pe), wr(u)).forEach((e) => {
                    var r = e.segment,
                      n = e.version;
                    t.addAlgoliaAgent(r, n);
                  }),
                t
                  .search(
                    r.map((e) => {
                      var t = e.params;
                      return Fr(
                        Fr({}, jr(e, Er)),
                        {},
                        {
                          params: Fr(
                            {
                              hitsPerPage: 5,
                              highlightPreTag: wt,
                              highlightPostTag: St,
                            },
                            t
                          ),
                        }
                      );
                    })
                  )
                  .then((e) => e.results)
              );
            })(
              Ir(
                Ir({}, e),
                {},
                {
                  userAgents: pr,
                }
              )
            )
          );
          function Nr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(
                  (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                )),
                r.push(...n);
            }
            return r;
          }
          function Tr(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Nr(Object(r), !0).forEach((t) => {
                    qr(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Nr(Object(r)).forEach((t) => {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function qr(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function Rr(e) {
            var t = xr({
                transformResponse(e) {
                  return e.facetHits;
                },
              }),
              r = e.queries.map((e) =>
                Tr(
                  Tr({}, e),
                  {},
                  {
                    type: "facet",
                  }
                )
              );
            return t(
              Tr(
                Tr({}, e),
                {},
                {
                  queries: r,
                }
              )
            );
          }
          var Lr = xr({
            transformResponse(e) {
              return e.hits;
            },
          });
        },
        934: function (e) {
          /*! algoliasearch-lite.umd.js | 4.11.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
          e.exports = (() => {
            "use strict";
            function e(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            function t(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                  (n = n.filter(
                    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
                  )),
                  r.push(...n);
              }
              return r;
            }
            function r(r) {
              for (var n = 1; n < arguments.length; n++) {
                var u = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? t(Object(u), !0).forEach((t) => {
                      e(r, t, u[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      r,
                      Object.getOwnPropertyDescriptors(u)
                    )
                  : t(Object(u)).forEach((e) => {
                      Object.defineProperty(
                        r,
                        e,
                        Object.getOwnPropertyDescriptor(u, e)
                      );
                    });
              }
              return r;
            }
            function n(e, t) {
              if (null == e) return {};
              var r,
                n,
                u = ((e, t) => {
                  if (null == e) return {};
                  var r,
                    n,
                    u = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
                  return u;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]),
                    t.indexOf(r) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, r) &&
                        (u[r] = e[r]));
              }
              return u;
            }
            function u(e, t) {
              return (
                ((e) => {
                  if (Array.isArray(e)) return e;
                })(e) ||
                ((e, t) => {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  ) {
                    var r = [],
                      n = !0,
                      u = !1,
                      o = void 0;
                    try {
                      for (
                        var i, a = e[Symbol.iterator]();
                        !(n = (i = a.next()).done) &&
                        (r.push(i.value), !t || r.length !== t);
                        n = !0
                      );
                    } catch (e) {
                      (u = !0), (o = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (u) throw o;
                      }
                    }
                    return r;
                  }
                })(e, t) ||
                (() => {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                })()
              );
            }
            function o(e) {
              return (
                ((e) => {
                  if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++)
                      r[t] = e[t];
                    return r;
                  }
                })(e) ||
                ((e) => {
                  if (
                    Symbol.iterator in Object(e) ||
                    "[object Arguments]" === Object.prototype.toString.call(e)
                  )
                    return Array.from(e);
                })(e) ||
                (() => {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance"
                  );
                })()
              );
            }
            function i(e) {
              var t,
                r = "algoliasearch-client-js-".concat(e.key),
                n = () => (
                  void 0 === t && (t = e.localStorage || window.localStorage), t
                ),
                o = () => JSON.parse(n().getItem(r) || "{}");
              return {
                get(e, t) {
                  var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {
                          miss() {
                            return Promise.resolve();
                          },
                        };
                  return Promise.resolve()
                    .then(() => {
                      var r = JSON.stringify(e),
                        n = o()[r];
                      return Promise.all([n || t(), void 0 !== n]);
                    })
                    .then((e) => {
                      var t = u(e, 2),
                        n = t[0],
                        o = t[1];
                      return Promise.all([n, o || r.miss(n)]);
                    })
                    .then((e) => u(e, 1)[0]);
                },
                set(e, t) {
                  return Promise.resolve().then(() => {
                    var u = o();
                    return (
                      (u[JSON.stringify(e)] = t),
                      n().setItem(r, JSON.stringify(u)),
                      t
                    );
                  });
                },
                delete(e) {
                  return Promise.resolve().then(() => {
                    var t = o();
                    delete t[JSON.stringify(e)],
                      n().setItem(r, JSON.stringify(t));
                  });
                },
                clear() {
                  return Promise.resolve().then(() => {
                    n().removeItem(r);
                  });
                },
              };
            }
            function a(e) {
              var t = o(e.caches),
                r = t.shift();
              return void 0 === r
                ? {
                    get(e, t) {
                      var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {
                              miss() {
                                return Promise.resolve();
                              },
                            };
                      return t()
                        .then((e) => Promise.all([e, r.miss(e)]))
                        .then((e) => u(e, 1)[0]);
                    },
                    set(e, t) {
                      return Promise.resolve(t);
                    },
                    delete(e) {
                      return Promise.resolve();
                    },
                    clear() {
                      return Promise.resolve();
                    },
                  }
                : {
                    get(e, n) {
                      var u =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {
                              miss() {
                                return Promise.resolve();
                              },
                            };
                      return r.get(e, n, u).catch(() =>
                        a({
                          caches: t,
                        }).get(e, n, u)
                      );
                    },
                    set(e, n) {
                      return r.set(e, n).catch(() =>
                        a({
                          caches: t,
                        }).set(e, n)
                      );
                    },
                    delete(e) {
                      return r.delete(e).catch(() =>
                        a({
                          caches: t,
                        }).delete(e)
                      );
                    },
                    clear() {
                      return r.clear().catch(() =>
                        a({
                          caches: t,
                        }).clear()
                      );
                    },
                  };
            }
            function c(...args) {
              var e =
                  args.length > 0 && void 0 !== args[0]
                    ? args[0]
                    : {
                        serializable: !0,
                      },
                t = {};
              return {
                get(r, n) {
                  var u =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {
                            miss() {
                              return Promise.resolve();
                            },
                          },
                    o = JSON.stringify(r);
                  if (o in t)
                    return Promise.resolve(
                      e.serializable ? JSON.parse(t[o]) : t[o]
                    );
                  var i = n(),
                    a = (u && u.miss) || (() => Promise.resolve());
                  return i.then((e) => a(e)).then(() => i);
                },
                set(r, n) {
                  return (
                    (t[JSON.stringify(r)] = e.serializable
                      ? JSON.stringify(n)
                      : n),
                    Promise.resolve(n)
                  );
                },
                delete(e) {
                  return delete t[JSON.stringify(e)], Promise.resolve();
                },
                clear() {
                  return (t = {}), Promise.resolve();
                },
              };
            }
            function l(e) {
              for (var t = e.length - 1; t > 0; t--) {
                var r = Math.floor(Math.random() * (t + 1)),
                  n = e[t];
                (e[t] = e[r]), (e[r] = n);
              }
              return e;
            }
            function s(e, t) {
              return t
                ? (Object.keys(t).forEach((r) => {
                    e[r] = t[r](e);
                  }),
                  e)
                : e;
            }
            function p(e) {
              for (
                var t = arguments.length,
                  r = new Array(t > 1 ? t - 1 : 0),
                  n = 1;
                n < t;
                n++
              )
                r[n - 1] = arguments[n];
              var u = 0;
              return e.replace(/%s/g, () => encodeURIComponent(r[u++]));
            }
            var f = {
              WithinQueryParameters: 0,
              WithinHeaders: 1,
            };
            function d(e, t) {
              var r = e || {},
                n = r.data || {};
              return (
                Object.keys(r).forEach((e) => {
                  -1 ===
                    [
                      "timeout",
                      "headers",
                      "queryParameters",
                      "data",
                      "cacheable",
                    ].indexOf(e) && (n[e] = r[e]);
                }),
                {
                  data: Object.entries(n).length > 0 ? n : void 0,
                  timeout: r.timeout || t,
                  headers: r.headers || {},
                  queryParameters: r.queryParameters || {},
                  cacheable: r.cacheable,
                }
              );
            }
            var m = {
                Read: 1,
                Write: 2,
                Any: 3,
              },
              v = 1,
              h = 2,
              D = 3;
            function y(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : v;
              return r(
                r({}, e),
                {},
                {
                  status: t,
                  lastUpdate: Date.now(),
                }
              );
            }
            function g(e) {
              return "string" == typeof e
                ? {
                    protocol: "https",
                    url: e,
                    accept: m.Any,
                  }
                : {
                    protocol: e.protocol || "https",
                    url: e.url,
                    accept: e.accept || m.Any,
                  };
            }
            var b = "GET",
              _ = "POST";
            function O(e, t) {
              return Promise.all(
                t.map((t) => e.get(t, () => Promise.resolve(y(t))))
              ).then((e) => {
                var r = e.filter((e) =>
                    ((e) => e.status === v || Date.now() - e.lastUpdate > 12e4)(
                      e
                    )
                  ),
                  n = e.filter((e) =>
                    ((e) =>
                      e.status === D && Date.now() - e.lastUpdate <= 12e4)(e)
                  ),
                  u = [].concat(o(r), o(n));
                return {
                  getTimeout(e, t) {
                    return (
                      (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t
                    );
                  },
                  statelessHosts: u.length > 0 ? u.map((e) => g(e)) : t,
                };
              });
            }
            function A(e, t, n, u) {
              var i = [],
                a = ((e, t) => {
                  if (
                    e.method !== b &&
                    (void 0 !== e.data || void 0 !== t.data)
                  ) {
                    var n = Array.isArray(e.data)
                      ? e.data
                      : r(r({}, e.data), t.data);
                    return JSON.stringify(n);
                  }
                })(n, u),
                c = ((e, t) => {
                  var n = r(r({}, e.headers), t.headers),
                    u = {};
                  return (
                    Object.keys(n).forEach((e) => {
                      var t = n[e];
                      u[e.toLowerCase()] = t;
                    }),
                    u
                  );
                })(e, u),
                l = n.method,
                s = n.method !== b ? {} : r(r({}, n.data), u.data),
                p = r(
                  r(
                    r(
                      {
                        "x-algolia-agent": e.userAgent.value,
                      },
                      e.queryParameters
                    ),
                    s
                  ),
                  u.queryParameters
                ),
                f = 0,
                d = function t(r, o) {
                  var s = r.pop();
                  if (void 0 === s)
                    throw {
                      name: "RetryError",
                      message:
                        "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                      transporterStackTrace: P(i),
                    };
                  var d = {
                      data: a,
                      headers: c,
                      method: l,
                      url: C(s, n.path, p),
                      connectTimeout: o(f, e.timeouts.connect),
                      responseTimeout: o(f, u.timeout),
                    },
                    m = (e) => {
                      var t = {
                        request: d,
                        response: e,
                        host: s,
                        triesLeft: r.length,
                      };
                      return i.push(t), t;
                    },
                    v = {
                      onSuccess(e) {
                        return ((e) => {
                          try {
                            return JSON.parse(e.content);
                          } catch (t) {
                            throw ((e, t) => ({
                              name: "DeserializationError",
                              message: e,
                              response: t,
                            }))(t.message, e);
                          }
                        })(e);
                      },
                      onRetry(n) {
                        var u = m(n);
                        return (
                          n.isTimedOut && f++,
                          Promise.all([
                            e.logger.info("Retryable failure", j(u)),
                            e.hostsCache.set(s, y(s, n.isTimedOut ? D : h)),
                          ]).then(() => t(r, o))
                        );
                      },
                      onFail(e) {
                        throw (
                          (m(e),
                          ((e, t) => {
                            var r = e.content,
                              n = e.status,
                              u = r;
                            try {
                              u = JSON.parse(r).message;
                            } catch (e) {}
                            return ((e, t, r) => ({
                              name: "ApiError",
                              message: e,
                              status: t,
                              transporterStackTrace: r,
                            }))(u, n, t);
                          })(e, P(i)))
                        );
                      },
                    };
                  return e.requester.send(d).then((e) =>
                    ((e, t) =>
                      ((e) => {
                        var t = e.status;
                        return (
                          e.isTimedOut ||
                          ((e) => {
                            var t = e.isTimedOut,
                              r = e.status;
                            return !t && 0 == ~~r;
                          })(e) ||
                          (2 != ~~(t / 100) && 4 != ~~(t / 100))
                        );
                      })(e)
                        ? t.onRetry(e)
                        : 2 == ~~(e.status / 100)
                        ? t.onSuccess(e)
                        : t.onFail(e))(e, v)
                  );
                };
              return O(e.hostsCache, t).then((e) =>
                d(o(e.statelessHosts).reverse(), e.getTimeout)
              );
            }
            function E(e) {
              var t = {
                value: "Algolia for JavaScript (".concat(e, ")"),
                add(e) {
                  var r = "; "
                    .concat(e.segment)
                    .concat(
                      void 0 !== e.version ? " (".concat(e.version, ")") : ""
                    );
                  return (
                    -1 === t.value.indexOf(r) &&
                      (t.value = "".concat(t.value).concat(r)),
                    t
                  );
                },
              };
              return t;
            }
            function C(e, t, r) {
              var n = F(r),
                u = ""
                  .concat(e.protocol, "://")
                  .concat(e.url, "/")
                  .concat("/" === t.charAt(0) ? t.substr(1) : t);
              return n.length && (u += "?".concat(n)), u;
            }
            function F(e) {
              return Object.keys(e)
                .map((t) => {
                  return p(
                    "%s=%s",
                    t,
                    ((r = e[t]),
                    "[object Object]" === Object.prototype.toString.call(r) ||
                    "[object Array]" === Object.prototype.toString.call(r)
                      ? JSON.stringify(e[t])
                      : e[t])
                  );
                  var r;
                })
                .join("&");
            }
            function P(e) {
              return e.map((e) => j(e));
            }
            function j(e) {
              var t = e.request.headers["x-algolia-api-key"]
                ? {
                    "x-algolia-api-key": "*****",
                  }
                : {};
              return r(
                r({}, e),
                {},
                {
                  request: r(
                    r({}, e.request),
                    {},
                    {
                      headers: r(r({}, e.request.headers), t),
                    }
                  ),
                }
              );
            }
            var w = (e) => {
                var t = e.appId,
                  n = ((e, t, r) => {
                    var n = {
                      "x-algolia-api-key": r,
                      "x-algolia-application-id": t,
                    };
                    return {
                      headers() {
                        return e === f.WithinHeaders ? n : {};
                      },
                      queryParameters() {
                        return e === f.WithinQueryParameters ? n : {};
                      },
                    };
                  })(
                    void 0 !== e.authMode ? e.authMode : f.WithinHeaders,
                    t,
                    e.apiKey
                  ),
                  o = ((e) => {
                    var t = e.hostsCache,
                      r = e.logger,
                      n = e.requester,
                      o = e.requestsCache,
                      i = e.responsesCache,
                      a = e.timeouts,
                      c = e.userAgent,
                      l = e.hosts,
                      s = e.queryParameters,
                      p = {
                        hostsCache: t,
                        logger: r,
                        requester: n,
                        requestsCache: o,
                        responsesCache: i,
                        timeouts: a,
                        userAgent: c,
                        headers: e.headers,
                        queryParameters: s,
                        hosts: l.map((e) => g(e)),
                        read(e, t) {
                          var r = d(t, p.timeouts.read),
                            n = () =>
                              A(
                                p,
                                p.hosts.filter((e) => 0 != (e.accept & m.Read)),
                                e,
                                r
                              );
                          if (
                            !0 !==
                            (void 0 !== r.cacheable ? r.cacheable : e.cacheable)
                          )
                            return n();
                          var o = {
                            request: e,
                            mappedRequestOptions: r,
                            transporter: {
                              queryParameters: p.queryParameters,
                              headers: p.headers,
                            },
                          };
                          return p.responsesCache.get(
                            o,
                            () =>
                              p.requestsCache.get(o, () =>
                                p.requestsCache
                                  .set(o, n())
                                  .then(
                                    (e) =>
                                      Promise.all([
                                        p.requestsCache.delete(o),
                                        e,
                                      ]),
                                    (e) =>
                                      Promise.all([
                                        p.requestsCache.delete(o),
                                        Promise.reject(e),
                                      ])
                                  )
                                  .then((e) => {
                                    var t = u(e, 2);
                                    return t[0], t[1];
                                  })
                              ),
                            {
                              miss(e) {
                                return p.responsesCache.set(o, e);
                              },
                            }
                          );
                        },
                        write(e, t) {
                          return A(
                            p,
                            p.hosts.filter((e) => 0 != (e.accept & m.Write)),
                            e,
                            d(t, p.timeouts.write)
                          );
                        },
                      };
                    return p;
                  })(
                    r(
                      r(
                        {
                          hosts: [
                            {
                              url: "".concat(t, "-dsn.algolia.net"),
                              accept: m.Read,
                            },
                            {
                              url: "".concat(t, ".algolia.net"),
                              accept: m.Write,
                            },
                          ].concat(
                            l([
                              {
                                url: "".concat(t, "-1.algolianet.com"),
                              },
                              {
                                url: "".concat(t, "-2.algolianet.com"),
                              },
                              {
                                url: "".concat(t, "-3.algolianet.com"),
                              },
                            ])
                          ),
                        },
                        e
                      ),
                      {},
                      {
                        headers: r(
                          r(r({}, n.headers()), {
                            "content-type": "application/x-www-form-urlencoded",
                          }),
                          e.headers
                        ),
                        queryParameters: r(
                          r({}, n.queryParameters()),
                          e.queryParameters
                        ),
                      }
                    )
                  );
                return s(
                  {
                    transporter: o,
                    appId: t,
                    addAlgoliaAgent(e, t) {
                      o.userAgent.add({
                        segment: e,
                        version: t,
                      });
                    },
                    clearCache() {
                      return Promise.all([
                        o.requestsCache.clear(),
                        o.responsesCache.clear(),
                      ]).then(() => {});
                    },
                  },
                  e.methods
                );
              },
              S = (e) => (t, r) =>
                t.method === b
                  ? e.transporter.read(t, r)
                  : e.transporter.write(t, r),
              B = (e) =>
                function (t) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return s(
                    {
                      transporter: e.transporter,
                      appId: e.appId,
                      indexName: t,
                    },
                    r.methods
                  );
                },
              I = (e) => (t, n) => {
                var u = t.map((e) =>
                  r(
                    r({}, e),
                    {},
                    {
                      params: F(e.params || {}),
                    }
                  )
                );
                return e.transporter.read(
                  {
                    method: _,
                    path: "1/indexes/*/queries",
                    data: {
                      requests: u,
                    },
                    cacheable: !0,
                  },
                  n
                );
              },
              k = (e) => (t, u) =>
                Promise.all(
                  t.map((t) => {
                    var o = t.params,
                      i = o.facetName,
                      a = o.facetQuery,
                      c = n(o, ["facetName", "facetQuery"]);
                    return B(e)(t.indexName, {
                      methods: {
                        searchForFacetValues: T,
                      },
                    }).searchForFacetValues(i, a, r(r({}, u), c));
                  })
                ),
              x = (e) => (t, r, n) =>
                e.transporter.read(
                  {
                    method: _,
                    path: p("1/answers/%s/prediction", e.indexName),
                    data: {
                      query: t,
                      queryLanguages: r,
                    },
                    cacheable: !0,
                  },
                  n
                ),
              N = (e) => (t, r) =>
                e.transporter.read(
                  {
                    method: _,
                    path: p("1/indexes/%s/query", e.indexName),
                    data: {
                      query: t,
                    },
                    cacheable: !0,
                  },
                  r
                ),
              T = (e) => (t, r, n) =>
                e.transporter.read(
                  {
                    method: _,
                    path: p("1/indexes/%s/facets/%s/query", e.indexName, t),
                    data: {
                      facetQuery: r,
                    },
                    cacheable: !0,
                  },
                  n
                ),
              q = 1,
              R = 2,
              L = 3;
            function M(e, t, n) {
              var u,
                o = {
                  appId: e,
                  apiKey: t,
                  timeouts: {
                    connect: 1,
                    read: 2,
                    write: 30,
                  },
                  requester: {
                    send(e) {
                      return new Promise((t) => {
                        var r = new XMLHttpRequest();
                        r.open(e.method, e.url, !0),
                          Object.keys(e.headers).forEach((t) =>
                            r.setRequestHeader(t, e.headers[t])
                          );
                        var n,
                          u = (e, n) =>
                            setTimeout(() => {
                              r.abort(),
                                t({
                                  status: 0,
                                  content: n,
                                  isTimedOut: !0,
                                });
                            }, 1e3 * e),
                          o = u(e.connectTimeout, "Connection timeout");
                        (r.onreadystatechange = () => {
                          r.readyState > r.OPENED &&
                            void 0 === n &&
                            (clearTimeout(o),
                            (n = u(e.responseTimeout, "Socket timeout")));
                        }),
                          (r.onerror = () => {
                            0 === r.status &&
                              (clearTimeout(o),
                              clearTimeout(n),
                              t({
                                content:
                                  r.responseText || "Network request failed",
                                status: r.status,
                                isTimedOut: !1,
                              }));
                          }),
                          (r.onload = () => {
                            clearTimeout(o),
                              clearTimeout(n),
                              t({
                                content: r.responseText,
                                status: r.status,
                                isTimedOut: !1,
                              });
                          }),
                          r.send(e.data);
                      });
                    },
                  },
                  logger:
                    ((u = L),
                    {
                      debug(e, t) {
                        return q >= u && console.debug(e, t), Promise.resolve();
                      },
                      info(e, t) {
                        return R >= u && console.info(e, t), Promise.resolve();
                      },
                      error(e, t) {
                        return console.error(e, t), Promise.resolve();
                      },
                    }),
                  responsesCache: c(),
                  requestsCache: c({
                    serializable: !1,
                  }),
                  hostsCache: a({
                    caches: [
                      i({
                        key: "".concat("4.11.0", "-").concat(e),
                      }),
                      c(),
                    ],
                  }),
                  userAgent: E("4.11.0").add({
                    segment: "Browser",
                    version: "lite",
                  }),
                  authMode: f.WithinQueryParameters,
                };
              return w(
                r(
                  r(r({}, o), n),
                  {},
                  {
                    methods: {
                      search: I,
                      searchForFacetValues: k,
                      multipleQueries: I,
                      multipleSearchForFacetValues: k,
                      customRequest: S,
                      initIndex(e) {
                        return (t) =>
                          B(e)(t, {
                            methods: {
                              search: N,
                              searchForFacetValues: T,
                              findAnswers: x,
                            },
                          });
                      },
                    },
                  }
                )
              );
            }
            return (M.version = "4.11.0"), M;
          })();
        },
        756: (e, t, r) => {
          "use strict";
          function n(e, t) {
            var r =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!r) {
              if (
                Array.isArray(e) ||
                (r = ((e, t) => {
                  if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? u(e, t)
                        : void 0
                    );
                  }
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                r && (e = r);
                var n = 0,
                  o = () => {};
                return {
                  s: o,
                  n() {
                    return n >= e.length
                      ? {
                          done: !0,
                        }
                      : {
                          done: !1,
                          value: e[n++],
                        };
                  },
                  e(e) {
                    throw e;
                  },
                  f: o,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var i,
              a = !0,
              c = !1;
            return {
              s() {
                r = r.call(e);
              },
              n() {
                var e = r.next();
                return (a = e.done), e;
              },
              e(e) {
                (c = !0), (i = e);
              },
              f() {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (c) throw i;
                }
              },
            };
          }
          function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          Object.defineProperty(t, "__esModule", {
            value: !0,
          }),
            (t.algoliasearchNetlify = void 0);
          var o = r(369),
            i = {
              analytics: !0,
              hitsPerPage: 5,
              debug: !1,
              poweredBy: !0,
              placeholder: "Search...",
              openOnFocus: !1,
            },
            a = ["appId", "apiKey", "selector", "siteId", "branch"],
            c = [];
          t.algoliasearchNetlify = (e) => {
            var t,
              r = Object.assign(Object.assign({}, i), e),
              u = n(a);
            try {
              for (u.s(); !(t = u.n()).done; ) {
                var l = t.value;
                if (!r[l])
                  throw new Error(
                    "[algoliasearch-netlify] Missing mandatory key: ".concat(l)
                  );
              }
            } catch (e) {
              u.e(e);
            } finally {
              u.f();
            }
            var s = new o.AutocompleteWrapper(r);
            c.push(s);
            var p = () => {
              s.render();
            };
            ["complete", "interactive"].includes(document.readyState)
              ? p()
              : document.addEventListener("DOMContentLoaded", p);
          };
        },
        369: function (e, t, r) {
          "use strict";
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          var u =
            (this && this.__importDefault) ||
            ((e) =>
              e && e.__esModule
                ? e
                : {
                    default: e,
                  });
          Object.defineProperty(t, "__esModule", {
            value: !0,
          }),
            (t.AutocompleteWrapper = void 0);
          var o = r(948),
            i = u(r(934)),
            a = r(147),
            c = r(920),
            l = (() => {
              function e(t) {
                !((e, t) => {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.$themeNode = null),
                  (this.options = t),
                  (this.client = this.createClient()),
                  (this.indexName = this.computeIndexName());
              }
              var t, r, u;
              return (
                (t = e),
                (r = [
                  {
                    key: "render",
                    value() {
                      var e = this,
                        t = document.querySelector(this.options.selector);
                      if (t) {
                        var r = void 0;
                        void 0 !== this.options.detached &&
                          (r =
                            !0 === this.options.detached
                              ? ""
                              : !1 === this.options.detached
                              ? "none"
                              : this.options.detached.mediaQuery);
                        var n = (0, o.autocomplete)({
                          container: t,
                          autoFocus: !1,
                          placeholder: this.options.placeholder,
                          debug: this.options.debug,
                          openOnFocus: this.options.openOnFocus,
                          panelPlacement: "input-wrapper-width",
                          detachedMediaQuery: r,
                          getSources() {
                            return [e.getSources()];
                          },
                        });
                        this.applyTheme(t.firstElementChild),
                          (this.autocomplete = n);
                      } else
                        console.error(
                          "[algoliasearch-netlify] no element ".concat(
                            this.options.selector,
                            " found"
                          )
                        );
                    },
                  },
                  {
                    key: "computeIndexName",
                    value() {
                      var e = this.options,
                        t = e.siteId,
                        r = e.branch
                          .trim()
                          .replace(
                            /(?:(?![\x2D\.0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])+/g,
                            "-"
                          )
                          .replace(/-{2,}/g, "-")
                          .toLocaleLowerCase();
                      return "netlify_".concat(t, "_").concat(r, "_all");
                    },
                  },
                  {
                    key: "createClient",
                    value() {
                      var e = (0, i.default)(
                        this.options.appId,
                        this.options.apiKey
                      );
                      return (
                        e.addAlgoliaAgent(
                          "Netlify integration ".concat(a.version)
                        ),
                        e
                      );
                    },
                  },
                  {
                    key: "getSources",
                    value() {
                      var e = this,
                        t = this.options.poweredBy;
                      return {
                        sourceId: "algoliaHits",
                        getItems(t) {
                          var r = t.query;
                          return (0, o.getAlgoliaResults)({
                            searchClient: e.client,
                            queries: [
                              {
                                indexName: e.indexName,
                                query: r,
                                params: {
                                  analytics: e.options.analytics,
                                  hitsPerPage: e.options.hitsPerPage,
                                },
                              },
                            ],
                          });
                        },
                        getItemUrl(e) {
                          return e.item.url;
                        },
                        templates: {
                          header() {
                            return "";
                          },
                          item(e) {
                            var t = e.item,
                              r = e.components;
                            return c.templates.item(t, r);
                          },
                          footer() {
                            return t
                              ? c.templates.poweredBy({
                                  hostname: window.location.host,
                                })
                              : "";
                          },
                        },
                      };
                    },
                  },
                  {
                    key: "applyTheme",
                    value(e) {
                      if (e && this.options.theme) {
                        var t = this.options.theme;
                        this.$themeNode = (function (e) {
                          var t,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                            n =
                              null !==
                                (t =
                                  null != r
                                    ? r
                                    : document.querySelector(
                                        'link[rel=stylesheet][href*="algoliasearchNetlify"]'
                                      )) && void 0 !== t
                                ? t
                                : document.getElementsByTagName("head")[0]
                                    .lastChild,
                            u = document.createElement("style");
                          return (
                            u.setAttribute("type", "text/css"),
                            u.appendChild(document.createTextNode(e)),
                            n.parentNode.insertBefore(u, n.nextSibling)
                          );
                        })(
                          ".aa-Autocomplete, .aa-Panel, .aa-DetachedContainer {\n      "
                            .concat(
                              t.mark && "--color-mark: ".concat(t.mark, ";"),
                              "\n      "
                            )
                            .concat(
                              t.mark &&
                                "--color-background: ".concat(
                                  t.background,
                                  ";"
                                ),
                              "\n      "
                            )
                            .concat(
                              t.mark &&
                                "--color-selected: ".concat(t.selected, ";"),
                              "\n      "
                            )
                            .concat(
                              t.mark && "--color-text: ".concat(t.text, ";"),
                              "\n      "
                            )
                            .concat(
                              t.mark &&
                                "--color-source-icon: ".concat(
                                  t.colorSourceIcon,
                                  ";"
                                ),
                              "\n    }"
                            ),
                          this.$themeNode
                        );
                      }
                    },
                  },
                ]) && n(t.prototype, r),
                u && n(t, u),
                e
              );
            })();
          t.AutocompleteWrapper = l;
        },
        744: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
          var n = r(756);
          e.exports = n.algoliasearchNetlify;
        },
        920: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0,
          }),
            (t.templates = void 0);
          var n = r(275);
          function u(e, t) {
            var r = [],
              u = 0;
            if (!e.hierarchy) return r;
            for (var o = 1; o < 7 && u < 3; ++o) {
              var i = "lvl".concat(o);
              e.hierarchy[i] &&
                e.hierarchy[i].length > 0 &&
                (u > 0 && r.push(" > "),
                r.push(
                  (0, n.jsx)(
                    t.Highlight,
                    {
                      hit: e.hierarchy,
                      attribute: i,
                    },
                    void 0
                  )
                ),
                ++u);
            }
            return r;
          }
          function o(e, t) {
            var r,
              u,
              o =
                null === (r = e._snippetResult) || void 0 === r
                  ? void 0
                  : r.description,
              i =
                null === (u = e._snippetResult) || void 0 === u
                  ? void 0
                  : u.content;
            return o && "full" === o.matchLevel
              ? (0, n.jsx)(
                  t.Snippet,
                  {
                    hit: e,
                    attribute: "description",
                  },
                  void 0
                )
              : i && "full" === i.matchLevel
              ? (0, n.jsx)(
                  t.Snippet,
                  {
                    hit: e,
                    attribute: "content",
                  },
                  void 0
                )
              : o && !i
              ? (0, n.jsx)(
                  t.Snippet,
                  {
                    hit: e,
                    attribute: "description",
                  },
                  void 0
                )
              : i
              ? (0, n.jsx)(
                  t.Snippet,
                  {
                    hit: e,
                    attribute: "content",
                  },
                  void 0
                )
              : e.description || e.content || "";
          }
          t.templates = {
            poweredBy(e) {
              var t = e.hostname,
                r = encodeURIComponent(t);
              return (0, n.jsxs)(
                "div",
                Object.assign(
                  {
                    className: "aa-powered-by",
                  },
                  {
                    children: [
                      "Search by",
                      (0, n.jsx)(
                        "a",
                        Object.assign(
                          {
                            href: "https://www.algolia.com/?utm_source=netlify&utm_medium=link&utm_campaign=autocomplete-".concat(
                              r
                            ),
                            className: "aa-powered-by-link",
                          },
                          {
                            children: "Algolia",
                          }
                        ),
                        void 0
                      ),
                    ],
                  }
                ),
                void 0
              );
            },
            item(e, t) {
              var r, i;
              return (0, n.jsx)(
                "a",
                Object.assign(
                  {
                    href: e.url,
                  },
                  {
                    children: (0, n.jsxs)(
                      "div",
                      Object.assign(
                        {
                          className: "aa-ItemContent",
                        },
                        {
                          children: [
                            (0, n.jsx)(
                              "div",
                              Object.assign(
                                {
                                  className: "aa-ItemIcon",
                                },
                                {
                                  children: (0, n.jsx)(
                                    "svg",
                                    Object.assign(
                                      {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                      },
                                      {
                                        children: (0, n.jsx)(
                                          "path",
                                          {
                                            d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
                                            stroke: "currentColor",
                                            fill: "none",
                                            fillRule: "evenodd",
                                            strokeLinejoin: "round",
                                          },
                                          void 0
                                        ),
                                      }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, n.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, n.jsx)(
                                    "div",
                                    Object.assign(
                                      {
                                        className: "aa-ItemTitle",
                                      },
                                      {
                                        children:
                                          null !==
                                            (i =
                                              null === (r = e.hierarchy) ||
                                              void 0 === r
                                                ? void 0
                                                : r.lvl0) && void 0 !== i
                                            ? i
                                            : (0, n.jsx)(
                                                t.Highlight,
                                                {
                                                  hit: e,
                                                  attribute: "title",
                                                },
                                                void 0
                                              ),
                                      }
                                    ),
                                    void 0
                                  ),
                                  e.hierarchy &&
                                    (0, n.jsx)(
                                      "div",
                                      Object.assign(
                                        {
                                          className: "aa-ItemHierarchy",
                                        },
                                        {
                                          children: u(e, t),
                                        }
                                      ),
                                      void 0
                                    ),
                                  (0, n.jsx)(
                                    "div",
                                    Object.assign(
                                      {
                                        className: "aa-ItemDescription",
                                      },
                                      {
                                        children: o(e, t),
                                      }
                                    ),
                                    void 0
                                  ),
                                ],
                              },
                              void 0
                            ),
                          ],
                        }
                      ),
                      void 0
                    ),
                  }
                ),
                void 0
              );
            },
          };
        },
        864: () => {},
        275: (e, t, r) => {
          "use strict";
          r.r(t),
            r.d(t, {
              Fragment: () => v,
              jsx: () => N,
              jsxDEV: () => N,
              jsxs: () => N,
            });
          var n,
            u,
            o,
            i,
            a,
            c,
            l = {},
            s = [],
            p =
              /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
          function f(e, t) {
            for (var r in t) e[r] = t[r];
            return e;
          }
          function d(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
          }
          function m(e, t, r, n, i) {
            var a = {
              type: e,
              props: t,
              key: r,
              ref: n,
              __k: null,
              __: null,
              __b: 0,
              __e: null,
              __d: void 0,
              __c: null,
              __h: null,
              constructor: void 0,
              __v: null == i ? ++o : i,
            };
            return null == i && null != u.vnode && u.vnode(a), a;
          }
          function v(e) {
            return e.children;
          }
          function h(e, t) {
            (this.props = e), (this.context = t);
          }
          function D(e, t) {
            if (null == t)
              return e.__ ? D(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var r; t < e.__k.length; t++)
              if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
            return "function" == typeof e.type ? D(e) : null;
          }
          function y(e) {
            var t, r;
            if (null != (e = e.__) && null != e.__c) {
              for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) {
                  e.__e = e.__c.base = r.__e;
                  break;
                }
              return y(e);
            }
          }
          function g(e) {
            ((!e.__d && (e.__d = !0) && i.push(e) && !b.__r++) ||
              c !== u.debounceRendering) &&
              ((c = u.debounceRendering) || a)(b);
          }
          function b() {
            for (var e; (b.__r = i.length); )
              (e = i.sort((e, t) => e.__v.__b - t.__v.__b)),
                (i = []),
                e.some((e) => {
                  var t, r, n, u, o, i;
                  e.__d &&
                    ((o = (u = (t = e).__v).__e),
                    (i = t.__P) &&
                      ((r = []),
                      ((n = f({}, u)).__v = u.__v + 1),
                      j(
                        i,
                        u,
                        n,
                        t.__n,
                        void 0 !== i.ownerSVGElement,
                        null != u.__h ? [o] : null,
                        r,
                        null == o ? D(u) : o,
                        u.__h
                      ),
                      w(r, u),
                      u.__e != o && y(u)));
                });
          }
          function _(e, t, r, n, u, o, i, a, c, p) {
            var f,
              d,
              h,
              y,
              g,
              b,
              _,
              E = (n && n.__k) || s,
              C = E.length;
            for (r.__k = [], f = 0; f < t.length; f++)
              if (
                null !=
                (y = r.__k[f] =
                  null == (y = t[f]) || "boolean" == typeof y
                    ? null
                    : "string" == typeof y ||
                      "number" == typeof y ||
                      "bigint" == typeof y
                    ? m(null, y, null, null, y)
                    : Array.isArray(y)
                    ? m(
                        v,
                        {
                          children: y,
                        },
                        null,
                        null,
                        null
                      )
                    : y.__b > 0
                    ? m(y.type, y.props, y.key, null, y.__v)
                    : y)
              ) {
                if (
                  ((y.__ = r),
                  (y.__b = r.__b + 1),
                  null === (h = E[f]) ||
                    (h && y.key == h.key && y.type === h.type))
                )
                  E[f] = void 0;
                else
                  for (d = 0; d < C; d++) {
                    if ((h = E[d]) && y.key == h.key && y.type === h.type) {
                      E[d] = void 0;
                      break;
                    }
                    h = null;
                  }
                j(e, y, (h = h || l), u, o, i, a, c, p),
                  (g = y.__e),
                  (d = y.ref) &&
                    h.ref != d &&
                    (_ || (_ = []),
                    h.ref && _.push(h.ref, null, y),
                    _.push(d, y.__c || g, y)),
                  null != g
                    ? (null == b && (b = g),
                      "function" == typeof y.type && y.__k === h.__k
                        ? (y.__d = c = O(y, c, e))
                        : (c = A(e, y, h, E, g, c)),
                      "function" == typeof r.type && (r.__d = c))
                    : c && h.__e == c && c.parentNode != e && (c = D(h));
              }
            for (r.__e = b, f = C; f--; )
              null != E[f] &&
                ("function" == typeof r.type &&
                  null != E[f].__e &&
                  E[f].__e == r.__d &&
                  (r.__d = D(n, f + 1)),
                I(E[f], E[f]));
            if (_) for (f = 0; f < _.length; f++) B(_[f], _[++f], _[++f]);
          }
          function O(e, t, r) {
            for (var n, u = e.__k, o = 0; u && o < u.length; o++)
              (n = u[o]) &&
                ((n.__ = e),
                (t =
                  "function" == typeof n.type
                    ? O(n, t, r)
                    : A(r, n, n, u, n.__e, t)));
            return t;
          }
          function A(e, t, r, n, u, o) {
            var i, a, c;
            if (void 0 !== t.__d) (i = t.__d), (t.__d = void 0);
            else if (null == r || u != o || null == u.parentNode)
              e: if (null == o || o.parentNode !== e)
                e.appendChild(u), (i = null);
              else {
                for (a = o, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
                  if (a == u) break e;
                e.insertBefore(u, o), (i = o);
              }
            return void 0 !== i ? i : u.nextSibling;
          }
          function E(e, t, r) {
            "-" === t[0]
              ? e.setProperty(t, r)
              : (e[t] =
                  null == r
                    ? ""
                    : "number" != typeof r || p.test(t)
                    ? r
                    : r + "px");
          }
          function C(e, t, r, n, u) {
            var o;
            e: if ("style" === t)
              if ("string" == typeof r) e.style.cssText = r;
              else {
                if (("string" == typeof n && (e.style.cssText = n = ""), n))
                  for (t in n) (r && t in r) || E(e.style, t, "");
                if (r) for (t in r) (n && r[t] === n[t]) || E(e.style, t, r[t]);
              }
            else if ("o" === t[0] && "n" === t[1])
              (o = t !== (t = t.replace(/Capture$/, ""))),
                (t =
                  t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + o] = r),
                r
                  ? n || e.addEventListener(t, o ? P : F, o)
                  : e.removeEventListener(t, o ? P : F, o);
            else if ("dangerouslySetInnerHTML" !== t) {
              if (u) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
              else if (
                "href" !== t &&
                "list" !== t &&
                "form" !== t &&
                "tabIndex" !== t &&
                "download" !== t &&
                t in e
              )
                try {
                  e[t] = null == r ? "" : r;
                  break e;
                } catch (e) {}
              "function" == typeof r ||
                (null != r && (!1 !== r || ("a" === t[0] && "r" === t[1]))
                  ? e.setAttribute(t, r)
                  : e.removeAttribute(t));
            }
          }
          function F(e) {
            this.l[e.type + !1](u.event ? u.event(e) : e);
          }
          function P(e) {
            this.l[e.type + !0](u.event ? u.event(e) : e);
          }
          function j(e, t, r, n, o, i, a, c, l) {
            var s,
              p,
              d,
              m,
              D,
              y,
              g,
              b,
              O,
              A,
              E,
              C = t.type;
            if (void 0 !== t.constructor) return null;
            null != r.__h &&
              ((l = r.__h), (c = t.__e = r.__e), (t.__h = null), (i = [c])),
              (s = u.__b) && s(t);
            try {
              e: if ("function" == typeof C) {
                if (
                  ((b = t.props),
                  (O = (s = C.contextType) && n[s.__c]),
                  (A = s ? (O ? O.props.value : s.__) : n),
                  r.__c
                    ? (g = (p = t.__c = r.__c).__ = p.__E)
                    : ("prototype" in C && C.prototype.render
                        ? (t.__c = p = new C(b, A))
                        : ((t.__c = p = new h(b, A)),
                          (p.constructor = C),
                          (p.render = k)),
                      O && O.sub(p),
                      (p.props = b),
                      p.state || (p.state = {}),
                      (p.context = A),
                      (p.__n = n),
                      (d = p.__d = !0),
                      (p.__h = [])),
                  null == p.__s && (p.__s = p.state),
                  null != C.getDerivedStateFromProps &&
                    (p.__s == p.state && (p.__s = f({}, p.__s)),
                    f(p.__s, C.getDerivedStateFromProps(b, p.__s))),
                  (m = p.props),
                  (D = p.state),
                  d)
                )
                  null == C.getDerivedStateFromProps &&
                    null != p.componentWillMount &&
                    p.componentWillMount(),
                    null != p.componentDidMount &&
                      p.__h.push(p.componentDidMount);
                else {
                  if (
                    (null == C.getDerivedStateFromProps &&
                      b !== m &&
                      null != p.componentWillReceiveProps &&
                      p.componentWillReceiveProps(b, A),
                    (!p.__e &&
                      null != p.shouldComponentUpdate &&
                      !1 === p.shouldComponentUpdate(b, p.__s, A)) ||
                      t.__v === r.__v)
                  ) {
                    (p.props = b),
                      (p.state = p.__s),
                      t.__v !== r.__v && (p.__d = !1),
                      (p.__v = t),
                      (t.__e = r.__e),
                      (t.__k = r.__k),
                      t.__k.forEach((e) => {
                        e && (e.__ = t);
                      }),
                      p.__h.length && a.push(p);
                    break e;
                  }
                  null != p.componentWillUpdate &&
                    p.componentWillUpdate(b, p.__s, A),
                    null != p.componentDidUpdate &&
                      p.__h.push(() => {
                        p.componentDidUpdate(m, D, y);
                      });
                }
                (p.context = A),
                  (p.props = b),
                  (p.state = p.__s),
                  (s = u.__r) && s(t),
                  (p.__d = !1),
                  (p.__v = t),
                  (p.__P = e),
                  (s = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s),
                  null != p.getChildContext &&
                    (n = f(f({}, n), p.getChildContext())),
                  d ||
                    null == p.getSnapshotBeforeUpdate ||
                    (y = p.getSnapshotBeforeUpdate(m, D)),
                  (E =
                    null != s && s.type === v && null == s.key
                      ? s.props.children
                      : s),
                  _(e, Array.isArray(E) ? E : [E], t, r, n, o, i, a, c, l),
                  (p.base = t.__e),
                  (t.__h = null),
                  p.__h.length && a.push(p),
                  g && (p.__E = p.__ = null),
                  (p.__e = !1);
              } else
                null == i && t.__v === r.__v
                  ? ((t.__k = r.__k), (t.__e = r.__e))
                  : (t.__e = S(r.__e, t, r, n, o, i, a, l));
              (s = u.diffed) && s(t);
            } catch (e) {
              (t.__v = null),
                (l || null != i) &&
                  ((t.__e = c), (t.__h = !!l), (i[i.indexOf(c)] = null)),
                u.__e(e, t, r);
            }
          }
          function w(e, t) {
            u.__c && u.__c(t, e),
              e.some((t) => {
                try {
                  (e = t.__h),
                    (t.__h = []),
                    e.some((e) => {
                      e.call(t);
                    });
                } catch (e) {
                  u.__e(e, t.__v);
                }
              });
          }
          function S(e, t, r, u, o, i, a, c) {
            var s,
              p,
              f,
              m = r.props,
              v = t.props,
              h = t.type,
              y = 0;
            if (("svg" === h && (o = !0), null != i))
              for (; y < i.length; y++)
                if (
                  (s = i[y]) &&
                  (s === e || (h ? s.localName == h : 3 == s.nodeType))
                ) {
                  (e = s), (i[y] = null);
                  break;
                }
            if (null == e) {
              if (null === h) return document.createTextNode(v);
              (e = o
                ? document.createElementNS("http://www.w3.org/2000/svg", h)
                : document.createElement(h, v.is && v)),
                (i = null),
                (c = !1);
            }
            if (null === h) m === v || (c && e.data === v) || (e.data = v);
            else {
              if (
                ((i = i && n.call(e.childNodes)),
                (p = (m = r.props || l).dangerouslySetInnerHTML),
                (f = v.dangerouslySetInnerHTML),
                !c)
              ) {
                if (null != i)
                  for (m = {}, y = 0; y < e.attributes.length; y++)
                    m[e.attributes[y].name] = e.attributes[y].value;
                (f || p) &&
                  ((f &&
                    ((p && f.__html == p.__html) ||
                      f.__html === e.innerHTML)) ||
                    (e.innerHTML = (f && f.__html) || ""));
              }
              if (
                (((e, t, r, n, u) => {
                  var o;
                  for (o in r)
                    "children" === o ||
                      "key" === o ||
                      o in t ||
                      C(e, o, null, r[o], n);
                  for (o in t)
                    (u && "function" != typeof t[o]) ||
                      "children" === o ||
                      "key" === o ||
                      "value" === o ||
                      "checked" === o ||
                      r[o] === t[o] ||
                      C(e, o, t[o], r[o], n);
                })(e, v, m, o, c),
                f)
              )
                t.__k = [];
              else if (
                ((y = t.props.children),
                _(
                  e,
                  Array.isArray(y) ? y : [y],
                  t,
                  r,
                  u,
                  o && "foreignObject" !== h,
                  i,
                  a,
                  i ? i[0] : r.__k && D(r, 0),
                  c
                ),
                null != i)
              )
                for (y = i.length; y--; ) null != i[y] && d(i[y]);
              c ||
                ("value" in v &&
                  void 0 !== (y = v.value) &&
                  (y !== e.value || ("progress" === h && !y)) &&
                  C(e, "value", y, m.value, !1),
                "checked" in v &&
                  void 0 !== (y = v.checked) &&
                  y !== e.checked &&
                  C(e, "checked", y, m.checked, !1));
            }
            return e;
          }
          function B(e, t, r) {
            try {
              "function" == typeof e ? e(t) : (e.current = t);
            } catch (e) {
              u.__e(e, r);
            }
          }
          function I(e, t, r) {
            var n, o;
            if (
              (u.unmount && u.unmount(e),
              (n = e.ref) &&
                ((n.current && n.current !== e.__e) || B(n, null, t)),
              null != (n = e.__c))
            ) {
              if (n.componentWillUnmount)
                try {
                  n.componentWillUnmount();
                } catch (e) {
                  u.__e(e, t);
                }
              n.base = n.__P = null;
            }
            if ((n = e.__k))
              for (o = 0; o < n.length; o++)
                n[o] && I(n[o], t, "function" != typeof e.type);
            r || null == e.__e || d(e.__e), (e.__e = e.__d = void 0);
          }
          function k(e, t, r) {
            return this.constructor(e, r);
          }
          (n = s.slice),
            (u = {
              __e(e, t) {
                for (var r, n, u; (t = t.__); )
                  if ((r = t.__c) && !r.__)
                    try {
                      if (
                        ((n = r.constructor) &&
                          null != n.getDerivedStateFromError &&
                          (r.setState(n.getDerivedStateFromError(e)),
                          (u = r.__d)),
                        null != r.componentDidCatch &&
                          (r.componentDidCatch(e), (u = r.__d)),
                        u)
                      )
                        return (r.__E = r);
                    } catch (t) {
                      e = t;
                    }
                throw e;
              },
            }),
            (o = 0),
            (h.prototype.setState = function (e, t) {
              var r;
              (r =
                null != this.__s && this.__s !== this.state
                  ? this.__s
                  : (this.__s = f({}, this.state))),
                "function" == typeof e && (e = e(f({}, r), this.props)),
                e && f(r, e),
                null != e && this.__v && (t && this.__h.push(t), g(this));
            }),
            (h.prototype.forceUpdate = function (e) {
              this.__v && ((this.__e = !0), e && this.__h.push(e), g(this));
            }),
            (h.prototype.render = v),
            (i = []),
            (a =
              "function" == typeof Promise
                ? Promise.prototype.then.bind(Promise.resolve())
                : setTimeout),
            (b.__r = 0);
          var x = 0;
          function N(e, t, r, n, o) {
            var i,
              a,
              c = {};
            for (a in t) "ref" == a ? (i = t[a]) : (c[a] = t[a]);
            var l = {
              type: e,
              props: c,
              key: r,
              ref: i,
              __k: null,
              __: null,
              __b: 0,
              __e: null,
              __d: void 0,
              __c: null,
              __h: null,
              constructor: void 0,
              __v: --x,
              __source: n,
              __self: o,
            };
            if ("function" == typeof e && (i = e.defaultProps))
              for (a in i) void 0 === c[a] && (c[a] = i[a]);
            return u.vnode && u.vnode(l), l;
          }
        },
        147: (e) => {
          "use strict";
          e.exports = JSON.parse(
            '{"name":"@algolia/algoliasearch-netlify-frontend","version":"1.0.12","private":false,"author":"Algolia Team <contact@algolia.com>","license":"MIT","repository":"https://github.com/algolia/algoliasearch-netlify.git","bugs":{"url":"https://github.com/algolia/algoliasearch-netlify/issues"},"files":["README.md","dist/"],"scripts":{"build":"npx webpack --mode production","dev":"PORT=9100 npx webpack serve --mode development","postinstall":"[ -d dist/ ] || npm run build"},"devDependencies":{"@algolia/autocomplete-js":"1.5.0","@algolia/autocomplete-preset-algolia":"1.5.0","@algolia/autocomplete-theme-classic":"1.5.0","@algolia/transporter":"4.11.0","@babel/core":"7.15.8","@babel/preset-env":"7.15.8","@types/react":"17.0.33","algoliasearch":"4.11.0","babel-loader":"8.2.3","clean-webpack-plugin":"4.0.0","core-js":"3.19.0","css-loader":"6.5.0","fork-ts-checker-webpack-plugin":"6.4.0","mini-css-extract-plugin":"2.4.3","mustache":"4.2.0","node-sass":"6.0.1","postcss":"8.3.11","postcss-loader":"6.2.0","postcss-preset-env":"6.7.0","preact":"10.5.15","sass-loader":"12.3.0","terser-webpack-plugin":"4.2.3","ts-loader":"9.2.6","webpack":"5.59.1","webpack-cli":"4.9.1","webpack-dev-server":"4.4.0"},"keywords":["algolia","algoliasearch","crawl","crawler","indexing","jamstack","netlify-plugin","netlify-search","netlify","plugin","robots","search","ui"]}'
          );
        },
      };
      var t = {};
      function r(n) {
        var u = t[n];
        if (void 0 !== u) return u.exports;
        var o = (t[n] = {
          exports: {},
        });
        return e[n].call(o.exports, o, o.exports, r), o.exports;
      }
      return (
        (r.d = (e, t) => {
          for (var n in t)
            r.o(t, n) &&
              !r.o(e, n) &&
              Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n],
              });
        }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module",
            }),
            Object.defineProperty(e, "__esModule", {
              value: !0,
            });
        }),
        r(864),
        r(744)
      );
    })()),
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.algoliasearchNetlify = t())
    : (e.algoliasearchNetlify = t());
