# AsyncFunction

The `AsyncFunction` creates a new [async function](../statements/async_function) object. In JavaScript, every asynchronous function is actually an `AsyncFunction` object.

Note that `AsyncFunction` is _not_ a global object. It can be obtained with the following code:

    Object.getPrototypeOf(async function(){}).constructor

## Syntax

    new AsyncFunction(arg0, functionBody)
    new AsyncFunction(arg0, arg1, functionBody)
    new AsyncFunction(arg0, arg1, ...argN, functionBody)

### Parameters

`arg1, arg2, ... argN`  
Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example "`x`", "`theValue`", or "`a,b`".

`functionBody`  
A string containing the JavaScript statements comprising the function definition.

## Description

[`async function`](../statements/async_function) objects created with the `AsyncFunction` constructor are parsed when the function is created. This is less efficient than declaring an async function with an [`async function expression`](../statements/async_function) and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

**Note:** [async functions](../statements/async_function) created with the `AsyncFunction` constructor do not create closures to their creation contexts; they are always created in the global scope.

When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `AsyncFunction` constructor was called.

This is different from using [`eval`](eval) with code for an async function expression.

Invoking the `AsyncFunction` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## Examples

### Creating an async function from an AsyncFunction() constructor

    function resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    }

    let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

    let a = new AsyncFunction('a',
                              'b',
                              'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');

    a(10, 20).then(v => {
      console.log(v); // prints 30 after 4 seconds
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-async-function-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-async-function-objects</span></a></td></tr></tbody></table>

`AsyncFunction`

55

15

52

No

42

10.1

55

55

52

42

10.3

6.0

## See also

-   [async function function](../statements/async_function)
-   [async function expression](../operators/async_function)
-   [`Function`](function)
-   [function statement](../statements/function)
-   [function expression](../operators/function)
-   [Functions and function scope](../functions)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction</a>
