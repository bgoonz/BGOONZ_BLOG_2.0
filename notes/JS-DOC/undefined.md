# undefined

The global `undefined` property represents the primitive value `undefined`. It is one of JavaScript's [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

Property attributes of `undefined`

Writable

no

Enumerable

no

Configurable

no

## Syntax

    undefined

## Description

`undefined` is a property of the _global object_. That is, it is a variable in global scope. The initial value of `undefined` is the primitive value `undefined`.

In modern browsers (JavaScript 1.8.5 / Firefox 4+), `undefined` is a non-configurable, non-writable property, per the ECMAScript 5 specification. (Even when this is not the case, avoid overriding it.)

A variable that has not been assigned a value is of type `undefined`. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. A function returns `undefined` if a value was not [`returned`](../statements/return).

**Note:** While you can use `undefined` as an [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier) (variable name) in any scope other than the global scope (because `undefined` is not a [reserved word](../lexical_grammar#keywords)), doing so is a very bad idea that will make your code difficult to maintain and debug.

    //  DON'T DO THIS

    //  logs "foo string"
    (function() {
      var undefined = 'foo';
      console.log(undefined, typeof undefined);
    })();

    //  logs "foo string"
    (function(undefined) {
      console.log(undefined, typeof undefined);
    })('foo');

## Examples

### Strict equality and undefined

You can use `undefined` and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable `x` is not initialized, and the `if` statement evaluates to true.

    var x;
    if (x === undefined) {
      // these statements execute
    }
    else {
      // these statements do not execute
    }

**Note:** The _strict equality_ operator (as opposed to the _standard equality_ operator) must be used here, because `x == undefined` also checks whether `x` is `null`, while strict equality doesn't. This is because `null` is not equivalent to `undefined`.

See [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) for details.

### typeof operator and undefined

Alternatively, [`typeof`](../operators/typeof) can be used:

    var x;
    if (typeof x === 'undefined') {
       // these statements execute
    }

One reason to use [`typeof`](../operators/typeof) is that it does not throw an error if the variable has not been declared.

    //  x has not been declared before
    if (typeof x === 'undefined') { //  evaluates to true without errors
       //  these statements execute
    }

    if (x === undefined) { //  throws a ReferenceError

    }

However, there is another alternative. JavaScript is a statically scoped language, so knowing if a variable is declared can be read by seeing whether it is declared in an enclosing context.

The global scope is bound to the [global object](globalthis), so checking the existence of a variable in the global context can be done by checking the existence of a property on the _global object_, using the [`in`](../operators/in) operator, for instance:

    if ('x' in window) {
      //  these statements execute only if x is defined globally
    }

### void operator and undefined

The [`void`](../operators/void) operator is a third alternative.

    var x;
    if (x === void 0) {
      //  these statements execute
    }

    //  y has not been declared before
    if (y === void 0) {
      //  throws Uncaught ReferenceError: y is not defined
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-undefined">ECMAScript Language Specification (ECMAScript)<br />
<span class="small">#sec-undefined</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`undefined`

1

12

1

5.5

3

1

1

18

4

10.1

1

1.0

## See also

-   JavaScript's [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
-   [`null`](null)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined</a>
