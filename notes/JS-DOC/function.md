# Function expression

The `function` keyword can be used to define a function inside an expression.

You can also define functions using the [`Function`](../global_objects/function/function) constructor and a [function declaration](../statements/function).

## Syntax

The expression is not allowed at the start of a statement.

    function [name]([param1[, param2[, ..., paramN]]]) {
       statements
    }

As of ES2015, you can also use [arrow functions](../functions/arrow_functions).

### Parameters

`name` <span class="badge inline optional">Optional</span>  
The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.

`paramN` <span class="badge inline optional">Optional</span>  
The name of an argument to be passed to the function.

`statements` <span class="badge inline optional">Optional</span>  
The statements which comprise the body of the function.

## Description

A function expression is very similar to and has almost the same syntax as a function declaration (see [`function`](../statements/function) statement for details). The main difference between a function expression and a function declaration is the _function name_, which can be omitted in function expressions to create _anonymous_ functions. A function expression can be used as an [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) which runs as soon as it is defined. See also the chapter about [functions](../functions) for more information.

### Function expression hoisting

Function expressions in JavaScript are not hoisted, unlike [function declarations](../statements/function#function_declaration_hoisting). You can't use function expressions before you create them:

    console.log(notHoisted) // undefined
    //  even though the variable name is hoisted, the definition isn't. so it's undefined.
    notHoisted(); // TypeError: notHoisted is not a function

    var notHoisted = function() {
       console.log('bar');
    };

### Named function expression

If you want to refer to the current function inside the function body, you need to create a named function expression. <span class="underline">**This name is then local only to the function body (scope)**</span>. This also avoids using the non-standard [`arguments.callee`](../functions/arguments/callee) property.

    let math = {
      'factit': function factorial(n) {
        console.log(n)
        if (n <= 1) {
          return 1;
        }
        return n * factorial(n - 1);
      }
    };

    math.factit(3) //3;2;1;

The variable the function expression is assigned to will have a `name` property. The name doesn't change if it's assigned to a different variable. If function name is omitted, it will be the variable name (implicit name). If function name is present, it will be the function name (explicit name). This also applies to [`arrow functions`](../functions/arrow_functions) (arrows don't have a name so you can only give the variable an implicit name).

    var foo = function() {}
    foo.name // "foo"

    var foo2 = foo
    foo2.name // "foo"

    var bar = function baz() {}
    bar.name // "baz"

    console.log(foo === foo2); // true
    console.log(typeof baz); // undefined
    console.log(bar === baz); // false (errors because baz == undefined)

## Examples

### Creating an unnamed function

The following example defines an unnamed function and assigns it to `x`. The function returns the square of its argument:

    var x = function(y) {
       return y * y;
    };

### Using a function as a callback

More commonly it is used as a [callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function):

    button.addEventListener('click', function(event) {
        console.log('button is clicked!')
    })

### Using an immediately executed function expression

An anonymous function is created and called:

    (function() {
        console.log('Code runs!')
    })();

    // or

    !function() {
      console.log('Code runs!')
    }();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-function-definitions">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-function-definitions</span></a></td></tr></tbody></table>

`function`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

`trailing_comma`

58

14

52

No

45

10

58

58

52

43

10

7.0

## See also

-   [Arrow functions](../functions/arrow_functions)
-   [Functions and function scope](../functions)
-   [`Function`](../global_objects/function)
-   [`function`](../statements/function) statement
-   [`function*`](../statements/function*) statement
-   [`function*`](function*) expression
-   [`GeneratorFunction`](../global_objects/generatorfunction)
-   [async function](../statements/async_function)
-   [async function expression](async_function)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function</a>
