# TypeError: invalid 'instanceof' operand 'x'

The JavaScript exception "invalid 'instanceof' operand" occurs when the right hand side operands of the [`instanceof` operator](../operators/instanceof) isn't used with a constructor object, i.e. an object which has a `prototype` property and is callable.

## Message

    TypeError: invalid 'instanceof' operand "x" (Firefox)
    TypeError: "x" is not a function (Firefox)
    TypeError: Right-hand side of 'instanceof' is not an object (Chrome)
    TypeError: Right-hand side of 'instanceof' is not callable (Chrome)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

The [`instanceof` operator](../operators/instanceof) expects the right hand side operands to be a constructor object, i.e. an object which has a `prototype` property and is callable.

## Examples

### instanceof vs typeof

    "test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
    42 instanceof 0;      // TypeError: invalid 'instanceof' operand 0

    function Foo() {}
    var f = Foo();        // Foo() is called and returns undefined
    var x = new Foo();

    x instanceof f;       // TypeError: invalid 'instanceof' operand f
    x instanceof x;       // TypeError: x is not a function

To fix these errors, you will either need to replace the [`instanceof` operator](../operators/instanceof) with the [`typeof` operator](../operators/typeof), or to make sure you use the function name, instead of the result of its evaluation.

    typeof "test" == "string"; // true
    typeof 42 == "number"      // true

    function Foo() {}
    var f = Foo;               // Do not call Foo.
    var x = new Foo();

    x instanceof f;            // true
    x instanceof Foo;          // true

## See also

-   [`instanceof` operator](../operators/instanceof)
-   [`typeof` operator](../operators/typeof)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand</a>
