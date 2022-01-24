---
title: JS Fat Arrow Functions
weight: 0
excerpt: JS Fat Arrow Functions
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

## JS Fat Arrow Functions

Classical JavaScript function syntax doesn't provide for any flexibility, be that a 1 statement function or an unfortunate multi-page function. Every time you need a function you have to type out the dreaded `function () {}`. More concise function syntax was one of the many reasons why [CoffeeScript](http://coffeescript.org/) gained so much momentum back in the day. This is especially pronounced in the case of tiny callback functions. Lets look at a Promise chain:

```
function getVerifiedToken(selector) {
  return getUsers(selector)
    .then(function (users) { return users[0]; })
    .then(verifyUser)
    .then(function (user, verifiedToken) { return verifiedToken; })
    .catch(function (err) { log(err.stack); });
}

```

Above is more or less plausible piece of code written using classical JavaScript `function` syntax. Here is what the same code could look like rewritten using the arrow syntax:

```js
function getVerifiedToken(selector) {
  return getUsers(selector)
    .then(users => users[0])
    .then(verifyUser)
    .then((user, verifiedToken) => verifiedToken)
    .catch(err => log(err.stack));
}

```

A few important things to notice here:

1.  We've lost `function` and `{}` because all of our callback functions are one liners.
2.  We've lost `()` around the argument list when there's just one argument (rest arguments are an exception, eg `(...args) => ...`)
3.  We've lost the `return` keyword because when omitting `{}`, single line arrow functions perform an implicit return (these functions are often referred to as lambda functions in other languages).

It's important to reinforce the last point. Implicit return only happens for single statement arrow functions. When arrow function is declared with `{}`, even if it's a single statement, implicit return does not happen:

```
const getVerifiedToken = selector => {
  return getUsers()
    .then(users => users[0])
    .then(verifyUser)
    .then((user, verifiedToken) => verifiedToken)
    .catch(err => log(err.stack));
}

```

Here's the really fun bit. Because our function has only one statement, we can still get rid of the `{}` and it will look almost exactly like [CoffeeScript](http://coffeescript.org/) syntax:

```js
const getVerifiedToken = selector =>
  getUsers()
    .then(users => users[0])
    .then(verifyUser)
    .then((user, verifiedToken) => verifiedToken)
    .catch(err => log(err.stack));

```

Yep, the example above is completely valid ES2015 syntax (I was also surprised that it [compiles fine](http://babeljs.io/repl/#?)). When we talk about single statement arrow functions, it doesn't mean the statement can't be spread out to multiple lines for better comprehension.

There's one caveat, however, with omitting `{}` from arrow functions -- how do you return an empty object, eg `{}`?

```js
const emptyObject = () => {};
emptyObject(); // ?

```

Unfortunately there's no way to distinguish between empty block `{}` and an object `{}`. Because of that `emptyObject()` evaluates to `undefined` and `{}` interpreted as empty block. To return an empty object from fat arrow functions you have to surround it with brackets like so `({})`:

```
const emptyObject = () => ({});
emptyObject(); // {}

```

Here's all of the above together:

```
function () { return 1; }
() => { return 1; }
() => 1

function (a) { return a * 2; }
(a) => { return a * 2; }
(a) => a * 2
a => a * 2

function (a, b) { return a * b; }
(a, b) => { return a * b; }
(a, b) => a * b

function () { return arguments[0]; }
(...args) => args[0]

() => {} // undefined
() => ({}) // {}

```

## Lexical `this`

The story of clobbering `this` in JavaScript is a really old one. Each `function` in JavaScript defines its own `this` context, which is as easy to get around as it is annoying. The example below tries to display a clock that updates every second using jQuery:

```
$('.current-time').each(function () {
  setInterval(function () {
    $(this).text(Date.now());
  }, 1000);
});

```

When attempting to reference the DOM element `this` set by `each` in the `setInterval` callback, we unfortunately get a brand new `this` that belongs to the callback itself. A common way around this is to declare `that` or `self` variable:

```
$('.current-time').each(function () {
  var self = this;

  setInterval(function () {
    $(self).text(Date.now());
  }, 1000);
});

```

The fat arrow functions allow you to solve this problem because they don't introduce their own `this`:

```
$('.current-time').each(function () {
  setInterval(() => $(this).text(Date.now()), 1000);
});

```

## What about arguments?

One of the caveats with arrow functions is that they also don't have their own `arguments` variable like regular functions:

```
function log(msg) {
  const print = () => console.log(arguments[0]);
  print(`LOG: ${msg}`);
}

log('hello'); // hello

```

To reiterate, fat arrow functions don't have their own `this` and `arguments`. Having said that, you can still get all arguments passed into the arrow functions using rest parameters (also known as spread operator):

```
function log(msg) {
  const print = (...args) => console.log(args[0]);
  print(`LOG: ${msg}`);
}

log('hello'); // LOG: hello

```

## What about yield?

Fat arrow functions can't be used as generators. That's it -- no exceptions, no caveats and no workarounds.

## Bottom Line

Fat arrow functions are one of my favorite additions to JavaScript. It might be very tempting to just start using `=>` instead of `function` everywhere. I've seen whole libraries written just using `=>` and I don't think it's the right thing to do because of the special features that `=>` introduces. I recommend using arrow functions only in places where you explicitly want to use the new features:

-   Single statement functions that immediately return (lambdas)
-   Functions that need to work with parent scope `this`



# Arrow function expressions

An **arrow function expression** is a compact alternative to a traditional [function expression](../operators/function), but is limited and can't be used in all situations.

**Differences & Limitations:**

-   Does not have its own bindings to `this` or `super`, and should not be used as `methods`.
-   Does not have `arguments`, or `new.target` keywords.
-   Not suitable for `call`, `apply` and [`bind`](../global_objects/function/bind) methods, which generally rely on establishing a [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope).
-   Can not be used as [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor).
-   Can not use `yield`, within its body.

### Comparing traditional functions to arrow functions

Let's decompose a "traditional function" down to the simplest "arrow function" step-by-step:  
NOTE: Each step along the way is a valid "arrow function"

    // Traditional Function
    function (a){
      return a + 100;
    }

    // Arrow Function Break Down

    // 1. Remove the word "function" and place arrow between the argument and opening body bracket
    (a) => {
      return a + 100;
    }

    // 2. Remove the body brackets and word "return" -- the return is implied.
    (a) => a + 100;

    // 3. Remove the argument parentheses
    a => a + 100;

**Note:** As shown above, the { brackets } and ( parentheses ) and "return" are optional, but may be required.

For example, if you have **multiple arguments** or **no arguments**, you'll need to re-introduce parentheses around the arguments:

    // Traditional Function
    function (a, b){
      return a + b + 100;
    }

    // Arrow Function
    (a, b) => a + b + 100;

    // Traditional Function (no arguments)
    let a = 4;
    let b = 2;
    function (){
      return a + b + 100;
    }

    // Arrow Function (no arguments)
    let a = 4;
    let b = 2;
    () => a + b + 100;

Likewise, if the body requires **additional lines** of processing, you'll need to re-introduce brackets **PLUS the "return"** (arrow functions do not magically guess what or when you want to "return"):

    // Traditional Function
    function (a, b){
      let chuck = 42;
      return a + b + chuck;
    }

    // Arrow Function
    (a, b) => {
      let chuck = 42;
      return a + b + chuck;
    }

And finally, for **named functions** we treat arrow expressions like variables

    // Traditional Function
    function bob (a){
      return a + 100;
    }

    // Arrow Function
    let bob = a => a + 100;

## Syntax

### Basic syntax

One param. With simple expression return is not needed:

    param => expression

Multiple params require parentheses. With simple expression return is not needed:

    (param1, paramN) => expression

Multiline statements require body brackets and return:

    param => {
      let a = 1;
      return a + param;
    }

Multiple params require parentheses. Multiline statements require body brackets and return:

    (param1, paramN) => {
       let a = 1;
       return a + param1 + paramN;
    }

### Advanced syntax

To return an object literal expression requires parentheses around expression:

    params => ({foo: "a"}) // returning the object {foo: "a"}

[Rest parameters](rest_parameters) are supported:

    (a, b, ...r) => expression

[Default parameters](default_parameters) are supported:

    (a=400, b=20, c) => expression

[Destructuring](../operators/destructuring_assignment) within params supported:

    ([a, b] = [10, 20]) => a + b;  // result is 30
    ({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

## Description

### Arrow functions used as methods

As stated previously, arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods:

    'use strict';

    let obj = { // does not create a new scope
      i: 10,
      b: () => console.log(this.i, this),
      c: function() {
        console.log(this.i, this);
      }
    }

    obj.b(); // prints undefined, Window {...} (or the global object)
    obj.c(); // prints 10, Object {...}

Arrow functions do not have their own `this`. Another example involving [`Object.defineProperty()`](../global_objects/object/defineproperty):

    'use strict';

    let obj = {
      a: 10
    };

    Object.defineProperty(obj, 'b', {
      get: () => {
        console.log(this.a, typeof this.a, this); // undefined 'undefined' Window {...} (or the global object)
        return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
      }
    });

### call, apply and bind

The `call`, `apply` and [`bind`](../global_objects/function/bind) methods are **NOT suitable** for Arrow functions -- as they were designed to allow methods to execute within different scopes -- because **Arrow functions establish "this" based on the scope the Arrow function is defined within.**

For example `call`, `apply` and [`bind`](../global_objects/function/bind) work as expected with Traditional functions, because we establish the scope for each of the methods:

    // ----------------------
    // Traditional Example
    // ----------------------
    // A simplistic object with its very own "this".
    let obj = {
        num: 100
    }

    // Setting "num" on window to show how it is NOT used.
    window.num = 2020; // yikes!

    // A simple traditional function to operate on "this"
    let add = function (a, b, c) {
      return this.num + a + b + c;
    }

    // call
    let result = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
    console.log(result) // result 106

    // apply
    const arr = [1, 2, 3]
    let result = add.apply(obj, arr) // establishing the scope as "obj"
    console.log(result) // result 106

    // bind
    let result = add.bind(obj) // establishing the scope as "obj"
    console.log(result(1, 2, 3)) // result 106

With Arrow functions, since our `add` function is essentially created on the `window` (global) scope, it will assume `this` is the window.

    // ----------------------
    // Arrow Example
    // ----------------------

    // A simplistic object with its very own "this".
    let obj = {
        num: 100
    }

    // Setting "num" on window to show how it gets picked up.
    window.num = 2020; // yikes!

    // Arrow Function
    let add = (a, b, c) => this.num + a + b + c;

    // call
    console.log(add.call(obj, 1, 2, 3)) // result 2026

    // apply
    const arr = [1, 2, 3]
    console.log(add.apply(obj, arr)) // result 2026

    // bind
    const bound = add.bind(obj)
    console.log(bound(1, 2, 3)) // result 2026

Perhaps the greatest benefit of using Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener) that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.

**Traditional Example:**

    let obj = {
        count : 10,
        doSomethingLater : function (){
            setTimeout(function(){ // the function executes on the window scope
                this.count++;
                console.log(this.count);
            }, 300);
        }
    }

    obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.

**Arrow Example:**

    let obj = {
        count : 10,
        doSomethingLater : function(){ // of course, arrow functions are not suited for methods
            setTimeout( () => { // since the arrow function was created within the "obj", it assumes the object's "this"
                this.count++;
                console.log(this.count);
            }, 300);
        }
    }

    obj.doSomethingLater();

### No binding of `arguments`

Arrow functions do not have their own [`arguments` object](arguments). Thus, in this example, `arguments` is a reference to the arguments of the enclosing scope:

    let arguments = [1, 2, 3];
    let arr = () => arguments[0];

    arr(); // 1

    function foo(n) {
      let f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
      return f();
    }

    foo(3); // 3 + 3 = 6

In most cases, using [rest parameters](rest_parameters) is a good alternative to using an `arguments` object.

    function foo(n) {
      let f = (...args) => args[0] + n;
      return f(10);
    }

    foo(1); // 11

### Use of the `new` operator

Arrow functions cannot be used as constructors and will throw an error when used with `new`.

    let Foo = () => {};
    let foo = new Foo(); // TypeError: Foo is not a constructor

### Use of `prototype` property

Arrow functions do not have a `prototype` property.

    let Foo = () => {};
    console.log(Foo.prototype); // undefined

### Use of the `yield` keyword

The `yield` keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.

### Function body

Arrow functions can have either a "concise body" or the usual "block body".

In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit `return` statement.

    let func = x => x * x;
    // concise body syntax, implied "return"

    let func = (x, y) => { return x + y; };
    // with block body, explicit "return" needed

### Returning object literals

Keep in mind that returning object literals using the concise body syntax `params => {object:literal}` will not work as expected.

    let func = () => { foo: 1 };
    // Calling func() returns undefined!

    let func = () => { foo: function() {} };
    // SyntaxError: function statement requires a name

This is because the code inside braces ({}) is parsed as a sequence of statements (i.e. `foo` is treated like a label, not a key in an object literal).

You must wrap the object literal in parentheses:

    let func = () => ({ foo: 1 });

### Line breaks

An arrow function cannot contain a line break between its parameters and its arrow.

    let func = (a, b, c)
      => 1;
    // SyntaxError: expected expression, got '=>'

However, this can be amended by putting the line break after the arrow or using parentheses/braces as seen below to ensure that the code stays pretty and fluffy. You can also put line breaks between arguments.

    let func = (a, b, c) =>
      1;

    let func = (a, b, c) => (
      1
    );

    let func = (a, b, c) => {
      return 1
    };

    let func = (
      a,
      b,
      c
    ) => 1;

    // no SyntaxError thrown

### Parsing order

Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact differently with [operator precedence](../operators/operator_precedence) compared to regular functions.

    let callback;

    callback = callback || function() {}; // ok

    callback = callback || () => {};
    // SyntaxError: invalid arrow-function arguments

    callback = callback || (() => {});    // ok

## Examples

### Basic usage

    // An empty arrow function returns undefined
    let empty = () => {};

    (() => 'foobar')();
    // Returns "foobar"
    // (this is an Immediately Invoked Function Expression)

    let simple = a => a > 15 ? 15 : a;
    simple(16); // 15
    simple(10); // 10

    let max = (a, b) => a > b ? a : b;

    // Easy array filtering, mapping, ...

    let arr = [5, 6, 13, 0, 1, 18, 23];

    let sum = arr.reduce((a, b) => a + b);
    // 66

    let even = arr.filter(v => v % 2 == 0);
    // [6, 0, 18]

    let double = arr.map(v => v * 2);
    // [10, 12, 26, 0, 2, 36, 46]

    // More concise promise chains
    promise.then(a => {
      // ...
    }).then(b => {
      // ...
    });

    // Parameterless arrow functions that are visually easier to parse
    setTimeout( () => {
      console.log('I happen sooner');
      setTimeout( () => {
        // deeper code
        console.log('I happen later');
      }, 1);
    }, 1);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-arrow-function-definitions">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-arrow-function-definitions</span></a></td></tr></tbody></table>

`Arrow_functions`

45

12

22

\["The initial implementation of arrow functions in Firefox made them automatically strict. This has been changed as of Firefox 24. The use of `'use strict';` is now required.", "Prior to Firefox 39, a line terminator (`\\n`) was incorrectly allowed after arrow function arguments. This has been fixed to conform to the ES2015 specification and code like `() \\n => {}` will now throw a `SyntaxError` in this and later versions."\]

No

32

10

45

45

22

\["The initial implementation of arrow functions in Firefox made them automatically strict. This has been changed as of Firefox 24. The use of `'use strict';` is now required.", "Prior to Firefox 39, a line terminator (`\\n`) was incorrectly allowed after arrow function arguments. This has been fixed to conform to the ES2015 specification and code like `() \\n => {}` will now throw a `SyntaxError` in this and later versions."\]

32

10

5.0

`trailing_comma`

58

12

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

-   ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions</a>
