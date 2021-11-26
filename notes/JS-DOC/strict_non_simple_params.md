# SyntaxError: "use strict" not allowed in function with non-simple parameters

The JavaScript exception "`'use strict'` not allowed in function" occurs when a `"use strict"` directive is used at the top of a function with [default parameters](../functions/default_parameters), [rest parameters](../functions/rest_parameters), or [destructuring parameters](../operators/destructuring_assignment).

## Message

    Edge:
    Cannot apply strict mode on functions with non-simple parameter list

    Firefox:
    SyntaxError: "use strict" not allowed in function with default parameter
    SyntaxError: "use strict" not allowed in function with rest parameter
    SyntaxError: "use strict" not allowed in function with destructuring parameter

    Chrome:
    SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list

## Error type

[`SyntaxError`](../global_objects/syntaxerror).

## What went wrong?

A `"use strict"` directive is written at the top of a function that has one of the following parameters:

-   [Default parameters](../functions/default_parameters)
-   [Rest parameters](../functions/rest_parameters)
-   [Destructuring parameters](../operators/destructuring_assignment)

A `"use strict"` directive is not allowed at the top of such functions per the ECMAScript specification.

## Examples

### Function statement

In this case, the function `sum` has default parameters `a=1` and `b=2`:

    function sum(a = 1, b = 2) {
      // SyntaxError: "use strict" not allowed in function with default parameter
      'use strict';
      return a + b;
    }

If the function should be in [strict mode](../strict_mode), and the entire script or enclosing function is also okay to be in strict mode, you can move the `"use strict"` directive outside of the function:

    'use strict';
    function sum(a = 1, b = 2) {
      return a + b;
    }

### Function expression

A function expression can use yet another workaround:

    var sum = function sum([a, b]) {
      // SyntaxError: "use strict" not allowed in function with destructuring parameter
      'use strict';
      return a + b;
    };

This can be converted to the following expression:

    var sum = (function() {
      'use strict';
      return function sum([a, b]) {
        return a + b;
      };
    })();

### Arrow function

If an arrow function needs to access the `this` variable, you can use the arrow function as the enclosing function:

    var callback = (...args) => {
      // SyntaxError: "use strict" not allowed in function with rest parameter
      'use strict';
      return this.run(args);
    };

This can be converted to the following expression:

    var callback = (() => {
      'use strict';
      return (...args) => {
        return this.run(args);
      };
    })();

## See also

-   [Strict mode](../strict_mode)
-   [function statement](../statements/function)
-   [function expression](../operators/function)
-   [Default parameters](../functions/default_parameters)
-   [Rest parameters](../functions/rest_parameters)
-   [Destructuring parameters](../operators/destructuring_assignment)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params</a>
