import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translatable } from 'react-instantsearch-core';
import { createClassNames } from '../core/utils';
var cx = createClassNames('Stats');

var Stats = function Stats(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      areHitsSorted = _ref.areHitsSorted,
      nbHits = _ref.nbHits,
      nbSortedHits = _ref.nbSortedHits,
      processingTimeMS = _ref.processingTimeMS,
      translate = _ref.translate;
  return React.createElement("div", {
    className: classNames(cx(''), className)
  }, React.createElement("span", {
    className: cx('text')
  }, translate('stats', nbHits, processingTimeMS, nbSortedHits, areHitsSorted)));
};

Stats.propTypes = {
  className: PropTypes.string,
  areHitsSorted: PropTypes.bool.isRequired,
  nbHits: PropTypes.number.isRequired,
  nbSortedHits: PropTypes.number,
  processingTimeMS: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired
};
export default translatable({
  stats: function stats(n, ms, nSorted, areHitsSorted) {
    return areHitsSorted && n !== nSorted ? "".concat(nSorted.toLocaleString(), " relevant results sorted out of ").concat(n.toLocaleString(), " found in ").concat(ms.toLocaleString(), "ms") : "".concat(n.toLocaleString(), " results found in ").concat(ms.toLocaleString(), "ms");
  }
})(Stats);