import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/* eslint-disable react/prop-types */
import React from 'react';
import { ExperimentalDynamicWidgets as CoreDynamicWidgets } from 'react-instantsearch-core';
import classNames from 'classnames';
import { createClassNames } from '../core/utils';
var cx = createClassNames('DynamicWidgets');
export default function DynamicWidgets(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("div", {
    className: classNames(cx(''), className)
  }, React.createElement(CoreDynamicWidgets, props, children));
}