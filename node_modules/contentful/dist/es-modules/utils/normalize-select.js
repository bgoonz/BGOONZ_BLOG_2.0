"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeSelect;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
* sdk relies heavily on sys metadata
* so we cannot omit the sys property on sdk level entirely
* and we have to ensure that at least `id` and `type` are present
* */
function normalizeSelect(query) {
  if (!query.select) {
    return query;
  } // The selection of fields for the query is limited
  // Get the different parts that are listed for selection


  const allSelects = Array.isArray(query.select) ? query.select : query.select.split(','); // Move the parts into a set for easy access and deduplication

  const selectedSet = new Set(allSelects); // If we already select all of `sys` we can just return
  // since we're anyway fetching everything that is needed

  if (selectedSet.has('sys')) {
    return query;
  } // We don't select `sys` so we need to ensure the minimum set


  selectedSet.add('sys.id');
  selectedSet.add('sys.type'); // Reassign the normalized sys properties

  return _objectSpread(_objectSpread({}, query), {}, {
    select: [...selectedSet].join(',')
  });
}