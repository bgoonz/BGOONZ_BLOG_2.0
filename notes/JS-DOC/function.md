# function\*

The `function*` declaration (`function` keyword followed by an asterisk) defines a _generator function_, which returns a [`Generator`](../global_objects/generator) object.

You can also define generator functions using the [`GeneratorFunction`](../global_objects/generatorfunction) constructor, or the function expression syntax.

## Syntax

    function* name([param[, param[, ... param]]]) {
       statements
    }

`name`  
The function name.

`param` <span class="badge inline optional">Optional</span>  
The name of a formal parameter for the function.

`statements`  
The statements comprising the body of the function.

## Description

Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

Generators in JavaScript -- especially when combined with Promises -- are a very powerful tool for asynchronous programming as they mitigate -- if not entirely eliminate -- the problems with callbacks, such as [Callback Hell](http://callbackhell.com/) and [Inversion of Control](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/). However, an even simpler solution to these problems can be achieved with [async functions](async_function).

Calling a generator function does not execute its body immediately; an [iterator](../iteration_protocols#iterator) object for the function is returned instead. When the iterator's `next()` method is called, the generator function's body is executed until the first [`yield`](../operators/yield) expression, which specifies the value to be returned from the iterator or, with [`yield*`](../operators/yield*), delegates to another generator function. The `next()` method returns an object with a `value` property containing the yielded value and a `done` property which indicates whether the generator has yielded its last value, as a boolean. Calling the `next()` method with an argument will resume the generator function execution, replacing the `yield` expression where an execution was paused with the argument from `next()`.

A `return` statement in a generator, when executed, will make the generator finish (i.e. the `done` property of the object returned by it will be set to `true`). If a value is returned, it will be set as the `value` property of the object returned by the generator.  
Much like a `return` statement, an error thrown inside the generator will make the generator finished -- unless caught within the generator's body.  
When a generator is finished, subsequent `next()` calls will not execute any of that generator's code, they will just return an object of this form: `{value: undefined, done: true}`.

## Examples

### Simple example

    function* idMaker() {
      var index = 0;
      while (true)
        yield index++;
    }

    var gen = idMaker();

    console.log(gen.next().value); // 0
    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    console.log(gen.next().value); // 3
    // ...

### Example with yield\*

    function* anotherGenerator(i) {
      yield i + 1;
      yield i + 2;
      yield i + 3;
    }

    function* generator(i) {
      yield i;
      yield* anotherGenerator(i);
      yield i + 10;
    }

    var gen = generator(10);

    console.log(gen.next().value); // 10
    console.log(gen.next().value); // 11
    console.log(gen.next().value); // 12
    console.log(gen.next().value); // 13
    console.log(gen.next().value); // 20

### Passing arguments into Generators

    function* logGenerator() {
      console.log(0);
      console.log(1, yield);
      console.log(2, yield);
      console.log(3, yield);
    }

    var gen = logGenerator();

    // the first call of next executes from the start of the function
    // until the first yield statement
    gen.next();             // 0
    gen.next('pretzel');    // 1 pretzel
    gen.next('california'); // 2 california
    gen.next('mayonnaise'); // 3 mayonnaise

### Return statement in a generator

    function* yieldAndReturn() {
      yield "Y";
      return "R";
      yield "unreachable";
    }

    var gen = yieldAndReturn()
    console.log(gen.next()); // { value: "Y", done: false }
    console.log(gen.next()); // { value: "R", done: true }
    console.log(gen.next()); // { value: undefined, done: true }

### Generator as an object property

    const someObj = {
      *generator () {
        yield 'a';
        yield 'b';
      }
    }

    const gen = someObj.generator()

    console.log(gen.next()); // { value: 'a', done: false }
    console.log(gen.next()); // { value: 'b', done: false }
    console.log(gen.next()); // { value: undefined, done: true }

### Generator as an object method

    class Foo {
      *generator () {
        yield 1;
        yield 2;
        yield 3;
      }
    }

    const f = new Foo ();
    const gen = f.generator();

    console.log(gen.next()); // { value: 1, done: false }
    console.log(gen.next()); // { value: 2, done: false }
    console.log(gen.next()); // { value: 3, done: false }
    console.log(gen.next()); // { value: undefined, done: true }

### Generator as a computed property

    class Foo {
      *[Symbol.iterator] () {
        yield 1;
        yield 2;
      }
    }

    const SomeObj = {
      *[Symbol.iterator] () {
        yield 'a';
        yield 'b';
      }
    }

    console.log(Array.from(new Foo)); // [ 1, 2 ]
    console.log(Array.from(SomeObj)); // [ 'a', 'b' ]

### Generators are not constructable

    function* f() {}
    var obj = new f; // throws "TypeError: f is not a constructor

### Generator defined in an expression

    const foo = function* () {
      yield 10;
      yield 20;
    };

    const bar = foo();
    console.log(bar.next()); // {value: 10, done: false}

### Generator example

    function* powers(n){
         //endless loop to generate
         for(let current =n;; current *= n){
             yield current;
         }
    }

    for(let power of powers(2)){
         //controlling generator
         if(power > 32) break;
         console.log(power)
               //2
              //4
             //8
            //16
           //32
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-generator-function-definitions">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-generator-function-definitions</span></a></td></tr></tbody></table>

`function*`

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

`IteratorResult_object`

49

13

29

No

36

10

49

49

29

36

10

5.0

`not_constructable_with_new`

50

13

43

No

37

10

50

50

43

37

10

5.0

`trailing_comma_in_parameters`

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

-   [`function*`](../operators/function*) expression
-   [`GeneratorFunction`](../global_objects/generatorfunction) object
-   [Iteration protocols](../iteration_protocols)
-   [`yield`](../operators/yield)
-   [`yield*`](../operators/yield*)
-   [`Function`](../global_objects/function) object
-   [`function`](function) declaration
-   [`function`](../operators/function) expression
-   [Functions and function scope](../functions)
-   Other web resources:
    -   [Regenerator](https://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
    -   [Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013](https://www.youtube.com/watch?v=qbKWsbJ76-s)
    -   [Task.js](https://github.com/mozilla/task.js)
    -   [Iterating generators asynchronously](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iterating-generators-asynchronously)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\*</a>
