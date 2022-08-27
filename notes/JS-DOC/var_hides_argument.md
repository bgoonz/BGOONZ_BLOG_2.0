# TypeError: variable "x" redeclares argument

The JavaScript [strict mode](../strict_mode)-only exception "variable redeclares argument" occurs when the same variable name occurs as a function parameter and is then redeclared using a `var` assignment in a function body again.

## Message

    TypeError: variable "x" redeclares argument (Firefox)

## Error type

[`TypeError`](../global_objects/typeerror) warning in [strict mode](../strict_mode) only.

## What went wrong?

The same variable name occurs as a function parameter and is then redeclared using a `var` assignment in a function body again. This might be a naming conflict and thus JavaScript warns about it.

This error occurs as a warning in [strict mode code](../strict_mode) only. In non-strict code, the redeclaration is silently ignored.

## Examples

### Invalid cases

In this case, the variable "arg" redeclares the argument.

    'use strict';

    function f(arg) {
      var arg = 'foo';
    }

### Valid cases

To fix this warning, the `var` statement can just be omitted, because the variable exists already. In other cases, you might to rename either the function parameter or the variable name.

    'use strict';

    function f(arg) {
      arg = 'foo';
    }

## See also

-   [Strict mode](../strict_mode)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Var_hides_argument" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Var_hides_argument</a>
