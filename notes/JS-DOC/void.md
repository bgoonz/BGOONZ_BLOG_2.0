# void operator

The `void` evaluates the given `expression` and then returns [`undefined`](../global_objects/undefined).

## Syntax

    void expression

## Description

This operator allows evaluating expressions that produce a value into places where an expression that evaluates to [`undefined`](../global_objects/undefined) is desired.

The `void` operator is often used merely to obtain the `undefined` primitive value, usually using "`void(0)`" (which is equivalent to "`void 0`"). In these cases, the global variable [`undefined`](../global_objects/undefined) can be used.

It should be noted that [the precedence](operator_precedence) of the `void` operator should be taken into account and that parentheses can help clarify the resolution of the expression following the `void` operator:

    void 2 == '2';   // (void 2) == '2', returns false
    void (2 == '2'); // void (2 == '2'), returns undefined

## Examples

### Immediately Invoked Function Expressions

When using an [immediately-invoked function expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), `void` can be used to force the `function` keyword to be treated as an expression instead of a declaration.

    void function iife() {

      console.log("Executed!");

    }();

    // Output: "Executed!"

Executing the above function without the `void` keyword will result in an **Uncaught SyntaxError**.

### JavaScript URIs

When a browser follows a `javascript:` URI, it evaluates the code in the URI and then replaces the contents of the page with the returned value, unless the returned value is [`undefined`](../global_objects/undefined). The `void` operator can be used to return `undefined`. For example:

    <a href="javascript:void(0);">
      Click here to do nothing
    </a>

    <a href="javascript:void(document.body.style.backgroundColor='green');">
      Click here for green background
    </a>

**Note:** `javascript:` pseudo protocol is discouraged over other alternatives, such as unobtrusive event handlers.

### Non-leaking Arrow Functions

Arrow functions introduce a short-hand braceless syntax that returns an expression. This can cause unintended side effects by returning the result of a function call that previously returned nothing. To be safe, when the return value of a function is not intended to be used, it can be passed to the void operator to ensure that (for example) changing APIs do not cause arrow functions' behaviors to change.

    button.onclick = () => void doSomething();

This ensures the return value of `doSomething` changing from `undefined` to `true` will not change the behavior of this code.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-void-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-void-operator</span></a></td></tr></tbody></table>

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

`void`

1

12

1

5

4

3.2

1

18

4

10.1

3

1.0

## See also

-   [`undefined`](../global_objects/undefined)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void</a>
