# yield

The `yield` keyword is used to pause and resume a generator function ([`function*`](../statements/function*) or [legacy generator function](https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/Legacy_generator_function_statement)).

## Syntax

    [rv] = yield [expression]

`expression` <span class="badge inline optional">Optional</span>  
Defines the value to return from the generator function via [the iterator protocol](../iteration_protocols#the_iterator_protocol). If omitted, `undefined` is returned instead.

`rv` <span class="badge inline optional">Optional</span>  
Retrieves the optional value passed to the generator's `next()` method to resume its execution.

## Description

The `yield` keyword pauses generator function execution and the value of the expression following the `yield` keyword is returned to the generator's caller. It can be thought of as a generator-based version of the `return` keyword.

`yield` can only be called directly from the generator function that contains it. It cannot be called from nested functions or from callbacks.

The `yield` keyword causes the call to the generator's `next()` method to return an `IteratorResult` object with two properties: `value` and `done`. The `value` property is the result of evaluating the `yield` expression, and `done` is `false`, indicating that the generator function has not fully completed.

Once paused on a `yield` expression, the generator's code execution remains paused until the generator's `next()` method is called. Each time the generator's `next()` method is called, the generator resumes execution, and runs until it reaches one of the following:

-   A `yield`, which causes the generator to once again pause and return the generator's new value. The next time `next()` is called, execution resumes with the statement immediately after the `yield`.
-   [`throw`](../statements/throw) is used to throw an exception from the generator. This halts execution of the generator entirely, and execution resumes in the caller (as is normally the case when an exception is thrown).
-   The end of the generator function is reached. In this case, execution of the generator ends and an `IteratorResult` is returned to the caller in which the `value` is [`undefined`](../global_objects/undefined) and `done` is `true`.
-   A [`return`](../statements/return) statement is reached. In this case, execution of the generator ends and an `IteratorResult` is returned to the caller in which the `value` is the value specified by the `return` statement and `done` is `true`.

If an optional value is passed to the generator's `next()` method, that value becomes the value returned by the generator's current `yield` operation.

Between the generator's code path, its `yield` operators, and the ability to specify a new starting value by passing it to [`Generator.prototype.next()`](../global_objects/generator/next), generators offer enormous power and control.

**Warning:** Unfortunately, `next()` is asymmetric, but that can't be helped: It always sends a value to the currently suspended `yield`, but returns the operand of the following `yield`.

## Examples

### Using yield

The following code is the declaration of an example generator function.

    function* countAppleSales () {
      let saleList = [3, 7, 5]
      for (let i = 0; i < saleList.length; i++) {
        yield saleList[i]
      }
    }

Once a generator function is defined, it can be used by constructing an iterator as shown.

    let appleStore = countAppleSales()  // Generator { }
    console.log(appleStore.next())      // { value: 3, done: false }
    console.log(appleStore.next())      // { value: 7, done: false }
    console.log(appleStore.next())      // { value: 5, done: false }
    console.log(appleStore.next())      // { value: undefined, done: true }

You can also send a value with next(value) into the generator. 'step' evaluates as a return value in this syntax \[rv\] = **yield** \[expression\]

    function* counter(value) {
     let step;

     while (true) {
       step = yield ++value;

       if (step) {
         value += step;
       }
     }
    }

    const generatorFunc = counter(0);
    console.log(generatorFunc.next().value);   // 1
    console.log(generatorFunc.next().value);   // 2
    console.log(generatorFunc.next().value);   // 3
    console.log(generatorFunc.next(10).value); // 14
    console.log(generatorFunc.next().value);   // 15
    console.log(generatorFunc.next(10).value); // 26

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#prod-YieldExpression">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#prod-YieldExpression</span></a></td></tr></tbody></table>

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

`yield`

39

12

26

\["Starting with Firefox 33, the parsing of the `yield` expression has been updated to conform with the ES2015 specification.", "Starting with Firefox 29, an `IteratorResult` object returned for completed generator function."\]

No

26

10

39

39

26

\["Starting with Firefox 33, the parsing of the `yield` expression has been updated to conform with the ES2015 specification.", "Starting with Firefox 29, an `IteratorResult` object returned for completed generator function."\]

26

10

4.0

## See also

-   [The Iterator protocol](../iteration_protocols)
-   [`function*`](../statements/function*)
-   [`function* expression`](function*)
-   [`yield*`](yield*)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield</a>
