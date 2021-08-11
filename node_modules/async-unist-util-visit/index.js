/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unist:util:visit
 * @fileoverview Recursively walk over unist nodes.
 */

'use strict';

const runAsync = require('run-async')

/* eslint-env commonjs */

/**
 * Visit.
 *
 * @param {Node} tree - Root node
 * @param {string} [type] - Node type.
 * @param {function(node): boolean?} visitor - Invoked
 *   with each found node.  Can return `false` to stop.
 * @param {boolean} [reverse] - By default, `visit` will
 *   walk forwards, when `reverse` is `true`, `visit`
 *   walks backwards.
 */
function visit(tree, type, visitor, reverse) {
    if (typeof type === 'function') {
        reverse = visitor;
        visitor = type;
        type = null;
    }

    visitor = runAsync(visitor)

    /**
     * Visit children in `parent`.
     *
     * @param {Array.<Node>} children - Children of `node`.
     * @param {Node?} parent - Parent of `node`.
     * @return {boolean?} - `false` if the visiting stopped.
     */
    function all(children, parent) {
        var step = reverse ? -1 : 1;
        var max = children.length;
        var min = -1;
        var index = (reverse ? max : min) + step;
        var child;

        return walkAll()

        function walkAll () {
          if (!(index > min && index < max)) return Promise.resolve(true)

          child = children[index];

          if (!child) {
            index += step;
            return walkAll()
          }

          return one(child, index, parent)
            .then(result => {
              if (result === false) {
                return Promise.resolve(false)
              }
              index += step;
              return walkAll()
            })
        }
    }

    /**
     * Visit a single node.
     *
     * @param {Node} node - Node to visit.
     * @param {number?} [index] - Position of `node` in `parent`.
     * @param {Node?} [parent] - Parent of `node`.
     * @return {boolean?} - A result of invoking `visitor`.
     */
    function one(node, index, parent) {
        var result;

        index = index || (parent ? 0 : null);

        return ((!type || node.type === type) ? visitor(node, index, parent || null) : Promise.resolve(result))
          .then(result => {
              if (node.children && result !== false) {
                  return all(node.children, node);
              }
              return Promise.resolve(result)
          })
    }

    return one(tree);
}

/*
 * Expose.
 */

module.exports = visit;
