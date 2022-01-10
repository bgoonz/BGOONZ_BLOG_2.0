# GeneratorFunction

The `GeneratorFunction` creates a new [generator function](../statements/function*) object. In JavaScript, every generator function is actually a `GeneratorFunction` object.

Note that `GeneratorFunction` is not a global object. It could be obtained by evaluating the following code.

    Object.getPrototypeOf(function*(){}).constructor

## Syntax

    new Function(arg1, functionBody)
    new Function(arg1, arg2, functionBody)
    new Function(arg1, ... , argN, functionBody)

### Parameters

`arg1, arg2, ... argN`  
Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example "`x`", "`theValue`", or "`a,b`".

`functionBody`  
A string containing the JavaScript statements comprising the function definition.

## Description

[`generator function`](../statements/function*) objects created with the `GeneratorFunction` constructor are parsed when the function is created. This is less efficient than declaring a generator function with a [`function* expression`](../statements/function*) and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

**Note:** [`generator function`](../statements/function*) created with the `GeneratorFunction` constructor do not create closures to their creation contexts; they are always created in the global scope.

When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `GeneratorFunction` constructor was called.

This is different from using [`eval`](eval) with code for a generator function expression.

Invoking the `GeneratorFunction` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## Examples

### Creating a generator function from a GeneratorFunction() constructor

    var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
    var g = new GeneratorFunction('a', 'yield a * 2');
    var iterator = g(10);
    console.log(iterator.next().value); // 20

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-generatorfunction-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-generatorfunction-objects</span></a></td></tr></tbody></table>

`GeneratorFunction`

39

13

26

No

26

10

39

39

26

26

10

4.0

## See also

-   [function\* function](../statements/function*)
-   [function\* expression](../operators/function*)
-   [`Function`](function)
-   [function statement](../statements/function)
-   [function expression](../operators/function)
-   [Functions and function scope](../functions)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction</a>
