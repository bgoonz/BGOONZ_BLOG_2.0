function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import copy from 'fast-copy';
export var asIterator = function asIterator(fn, params) {
  return _defineProperty({}, Symbol.asyncIterator, function () {
    var options = copy(params);

    var get = function get() {
      return fn(copy(options));
    };

    var currentResult = get();
    return {
      current: 0,
      next: function next() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _yield$currentResult, _yield$currentResult$, total, _yield$currentResult$2, items, _yield$currentResult$3, skip, _yield$currentResult$4, limit, value, endOfPage, endOfList;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return currentResult;

                case 2:
                  _yield$currentResult = _context.sent;
                  _yield$currentResult$ = _yield$currentResult.total;
                  total = _yield$currentResult$ === void 0 ? 0 : _yield$currentResult$;
                  _yield$currentResult$2 = _yield$currentResult.items;
                  items = _yield$currentResult$2 === void 0 ? [] : _yield$currentResult$2;
                  _yield$currentResult$3 = _yield$currentResult.skip;
                  skip = _yield$currentResult$3 === void 0 ? 0 : _yield$currentResult$3;
                  _yield$currentResult$4 = _yield$currentResult.limit;
                  limit = _yield$currentResult$4 === void 0 ? 100 : _yield$currentResult$4;

                  if (!(total === _this.current)) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return", {
                    done: true,
                    value: null
                  });

                case 13:
                  value = items[_this.current++ - skip];
                  endOfPage = _this.current % limit === 0;
                  endOfList = _this.current === total;

                  if (endOfPage && !endOfList) {
                    options = _objectSpread(_objectSpread({}, options), {}, {
                      query: _objectSpread(_objectSpread({}, options.query), {}, {
                        skip: skip + limit
                      })
                    });
                    currentResult = get();
                  }

                  return _context.abrupt("return", {
                    done: false,
                    value: value
                  });

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    };
  });
};