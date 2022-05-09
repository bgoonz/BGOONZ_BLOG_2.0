# ReferenceError: deprecated caller or arguments usage

The JavaScript [strict mode](../strict_mode)-only exception "deprecated caller or arguments usage" occurs when the deprecated [`Function.caller`](../global_objects/function/caller) or [`Function.arguments`](../global_objects/function/arguments) properties are used.

## Message

    TypeError: 'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context (Edge)
    Warning: ReferenceError: deprecated caller usage (Firefox)
    Warning: ReferenceError: deprecated arguments usage (Firefox)
    TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)

## Error type

A strict-mode-only warning that a [`ReferenceError`](../global_objects/referenceerror) occurred. JavaScript execution won't be halted.

## What went wrong?

In [strict mode](../strict_mode), the [`Function.caller`](../global_objects/function/caller) or [`Function.arguments`](../global_objects/function/arguments) properties are used and shouldn't be. They are deprecated, because they leak the function caller, are non-standard, hard to optimize and potentially a performance-harmful feature.

## Examples

### Deprecated `function.caller` or `arguments.callee.caller`

[`Function.caller`](../global_objects/function/caller) and `arguments.callee.caller` are deprecated (see the reference articles for more information).

    'use strict';

    function myFunc() {
      if (myFunc.caller == null) {
        return 'The function was called from the top!';
      } else {
        return 'This function\'s caller was ' + myFunc.caller;
      }
    }

    myFunc();
    // Warning: ReferenceError: deprecated caller usage
    // "The function was called from the top!"

### `Function.arguments`

[`Function.arguments`](../global_objects/function/arguments) is deprecated (see the reference article for more information).

    'use strict';

    function f(n) { g(n - 1); }

    function g(n) {
      console.log('before: ' + g.arguments[0]);
      if (n > 0) { f(n); }
      console.log('after: ' + g.arguments[0]);
    }

    f(2);

    console.log('returned: ' + g.arguments);
    // Warning: ReferenceError: deprecated arguments usage

## See also

-   [Deprecated and obsolete features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
-   [Strict mode](../strict_mode)
-   [`Function.arguments`](../global_objects/function/arguments)
-   [`Function.caller`](../global_objects/function/caller) and `arguments.callee.caller`

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage</a>
