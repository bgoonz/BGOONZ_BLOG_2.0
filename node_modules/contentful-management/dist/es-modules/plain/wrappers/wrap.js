function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @private
 */

/**
 * @private
 */

/**
 * @private
 */

/**
 * @private
 */
export var wrap = function wrap(_ref, entityType, action) {
  var makeRequest = _ref.makeRequest,
      defaults = _ref.defaults;
  // It's not really possible to make this type safe as we are overloading `makeRequest`.
  // This missing typesafety is only within `wrap`. `wrap` has proper public types.
  // @ts-expect-error
  return function (params, payload, headers) {
    return (// @ts-expect-error
      makeRequest({
        // @ts-expect-error
        entityType: entityType,
        // @ts-expect-error
        action: action,
        // @ts-expect-error
        params: _objectSpread(_objectSpread({}, defaults), params),
        payload: payload,
        // Required after adding optional headers to a delete method for the first time
        // @ts-expect-error
        headers: headers
      })
    );
  };
};