# Warning: expression closures are deprecated

The JavaScript warning "expression closures are deprecated" occurs when the non-standard [expression closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures) syntax (shorthand function syntax) is used.

## Message

    Warning: expression closures are deprecated

## Error type

Warning. JavaScript execution won't be halted.

## What went wrong?

The non-standard [expression closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures) syntax (shorthand function syntax) is deprecated and shouldn't be used anymore. This syntax will be removed entirely in [bug 1083458](https://bugzilla.mozilla.org/show_bug.cgi?id=1083458) and scripts using it will throw a [`SyntaxError`](../global_objects/syntaxerror) then.

## Examples

### Deprecated syntax

Expression closures omit curly braces or return statements from function declarations or from method definitions in objects.

    var x = function() 1;

    var obj = {
      count: function() 1
    };

### Standard syntax

To convert the non-standard expression closures syntax to standard ECMAScript syntax, you can add curly braces and return statements.

    var x = function() { return 1; }

    var obj = {
      count: function() { return 1; }
    };

### Standard syntax using arrow functions

Alternatively, you can use [arrow functions](../functions/arrow_functions):

    var x = () => 1;

### Standard syntax using shorthand method syntax

Expression closures can also be found with getter and setter, like this:

    var obj = {
      get x() 1,
      set x(v) this.v = v
    };

With ES2015 [method definitions](../functions/method_definitions), this can be converted to:

    var obj = {
      get x() { return 1 },
      set x(v) { this.v = v }
    };

## See also

-   [Expression closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures)
-   [Arrow functions](../functions/arrow_functions)
-   [Method definitions](../functions/method_definitions)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_expression_closures" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_expression_closures</a>
