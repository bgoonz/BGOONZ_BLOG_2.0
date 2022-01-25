# yield\*

The `yield*` is used to delegate to another [`generator`](../statements/function*) or iterable object.

## Syntax

     yield* expression;

`expression`  
The expression which returns an iterable object.

## Description

The `yield*` expression iterates over the operand and `yield`s each value returned by it.

The value of `yield*` expression itself is the value returned by that iterator when it's closed (i.e., when `done` is `true`).

## Examples

### Delegating to another generator

In following code, values yielded by `g1()` are returned from `next()` calls just like those which are yielded by `g2()`.

    function* g1() {
      yield 2;
      yield 3;
      yield 4;
    }

    function* g2() {
      yield 1;
      yield* g1();
      yield 5;
    }

    const iterator = g2();

    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: 4, done: false}
    console.log(iterator.next()); // {value: 5, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}

### Other Iterable objects

Besides generator objects, `yield*` can also `yield` other kinds of iterables (e.g., arrays, strings, or [`arguments`](../functions/arguments) objects).

    function* g3() {
      yield* [1, 2];
      yield* '34';
      yield* Array.from(arguments);
    }

    const iterator = g3(5, 6);

    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: "3", done: false}
    console.log(iterator.next()); // {value: "4", done: false}
    console.log(iterator.next()); // {value: 5, done: false}
    console.log(iterator.next()); // {value: 6, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}

### The value of `yield*` expression itself

`yield*` is an expression, not a statement—so it evaluates to a value.

    function* g4() {
      yield* [1, 2, 3];
      return 'foo';
    }

    function* g5() {
      const g4ReturnValue = yield* g4();
      console.log(g4ReturnValue) // 'foo'
      return g4ReturnValue;
    }

    const iterator = g5();

    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
    console.log(iterator.next()); // {value: 'foo', done: true}

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-generator-function-definitions-runtime-semantics-evaluation">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-generator-function-definitions-runtime-semantics-evaluation</span></a></td></tr></tbody></table>

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

`yield*`

39

12

27

Starting with Firefox 33, the parsing of the `yield` expression has been updated to conform with the ES2015 specification.

No

26

10

39

39

27

Starting with Firefox 33, the parsing of the `yield` expression has been updated to conform with the ES2015 specification.

26

10

4.0

## See also

-   [The Iterator protocol](../iteration_protocols)
-   [`function*`](../statements/function*)
-   [`function* expression`](function*)
-   [`yield`](yield)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield\*</a>
