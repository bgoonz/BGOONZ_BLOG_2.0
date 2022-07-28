---
title: This
weight: 0
excerpt: In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).
seo:
    title: 'Javascript Quick Tips Directory'
    description: 'A this behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


# this

A `this` behaves a little differently in JavaScript compared to other languages. It also has some differences between [strict mode](../strict_mode) and non-strict mode.

In most cases, the value of `this` is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the [`bind()`](../global_objects/function/bind) method to [set the value of a function's `this` regardless of how it's called](#The_bind_method), and ES2015 introduced [arrow functions](../functions/arrow_functions) which don't provide their own `this` binding (it retains the `this` value of the enclosing lexical context).

## Syntax

    this

### Value

A property of an execution context (global, function or eval) that, in non-strict mode, is always a reference to an object and in strict mode can be any value.

## Description

### Global context

In the global execution context (outside of any function), `this` refers to the global object whether in strict mode or not.

    // In web browsers, the window object is also the global object:
    console.log(this === window); // true

    a = 37;
    console.log(window.a); // 37

    this.b = "MDN";
    console.log(window.b)  // "MDN"
    console.log(b)         // "MDN"

**Note:** You can always easily get the global object using the global [`globalThis`](../global_objects/globalthis) property, regardless of the current context in which your code is running.

### Function context

Inside a function, the value of `this` depends on how the function is called.

Since the following code is not in [strict mode](../strict_mode), and because the value of `this` is not set by the call, `this` will default to the global object, which is [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) in a browser.

    function f1() {
      return this;
    }

    // In a browser:
    f1() === window; // true

    // In Node:
    f1() === globalThis; // true

In strict mode, however, if the value of `this` is not set when entering an execution context, it remains as `undefined`, as shown in the following example:

    function f2() {
      'use strict'; // see strict mode
      return this;
    }

    f2() === undefined; // true

**Note:** In the second example, `this` should be [`undefined`](../global_objects/undefined), because `f2` was called directly and not as a method or property of an object (e.g. `window.f2()`). This feature wasn't implemented in some browsers when they first started to support [strict mode](../strict_mode). As a result, they incorrectly returned the `window` object.

To set the value of `this` to a particular value when calling a function, use [`call()`](../global_objects/function/call), or [`apply()`](../global_objects/function/apply) as in the examples below.

### Class context

The behavior of `this` in [classes](../classes) and functions is similar, since classes are functions under the hood. But there are some differences and caveats.

Within a class constructor, `this` is a regular object. All non-static methods within the class are added to the prototype of `this`:

    class Example {
      constructor() {
        const proto = Object.getPrototypeOf(this);
        console.log(Object.getOwnPropertyNames(proto));
      }
      first(){}
      second(){}
      static third(){}
    }

    new Example(); // ['constructor', 'first', 'second']

**Note:** Static methods are not properties of `this`. They are properties of the class itself.

### Derived classes

Unlike base class constructors, derived constructors have no initial `this` binding. Calling [`super()`](super) creates a `this` binding within the constructor and essentially has the effect of evaluating the following line of code, where Base is the inherited class:

    this = new Base();

**Warning:** Referring to `this` before calling `super()` will throw an error.

Derived classes must not return before calling `super()`, unless they return an `Object` or have no constructor at all.

    class Base {}
    class Good extends Base {}
    class AlsoGood extends Base {
      constructor() {
        return {a: 5};
      }
    }
    class Bad extends Base {
      constructor() {}
    }

    new Good();
    new AlsoGood();
    new Bad(); // ReferenceError

## Examples

### this in function contexts

    // An object can be passed as the first argument to call or apply and this will be bound to it.
    var obj = {a: 'Custom'};

    // We declare a variable and the variable is assigned to the global window as its property.
    var a = 'Global';

    function whatsThis() {
      return this.a;  // The value of this is dependent on how the function is called
    }

    whatsThis();          // 'Global' as this in the function isn't set, so it defaults to the global/window object
    whatsThis.call(obj);  // 'Custom' as this in the function is set to obj
    whatsThis.apply(obj); // 'Custom' as this in the function is set to obj

### this and object conversion

    function add(c, d) {
      return this.a + this.b + c + d;
    }

    var o = {a: 1, b: 3};

    // The first parameter is the object to use as
    // 'this', subsequent parameters are passed as
    // arguments in the function call
    add.call(o, 5, 7); // 16

    // The first parameter is the object to use as
    // 'this', the second is an array whose
    // members are used as the arguments in the function call
    add.apply(o, [10, 20]); // 34

Note that in non-strict mode, with `call` and `apply`, if the value passed as `this` is not an object, an attempt will be made to convert it to an object. Values `null` and `undefined` become the global object. Primitives like `7` or `'foo'` will be converted to an Object using the related constructor, so the primitive number `7` is converted to an object as if by `new Number(7)` and the string `'foo'` to an object as if by `new String('foo')`, e.g.

    function bar() {
      console.log(Object.prototype.toString.call(this));
    }

    bar.call(7);     // [object Number]
    bar.call('foo'); // [object String]
    bar.call(undefined); // [object global]

### The `bind` method

ECMAScript 5 introduced [`Function.prototype.bind()`](../global_objects/function/bind). Calling `f.bind(someObject)` creates a new function with the same body and scope as `f`, but where `this` occurs in the original function, in the new function it is permanently bound to the first argument of `bind`, regardless of how the function is being used.

    function f() {
      return this.a;
    }

    var g = f.bind({a: 'azerty'});
    console.log(g()); // azerty

    var h = g.bind({a: 'yoo'}); // bind only works once!
    console.log(h()); // azerty

    var o = {a: 37, f: f, g: g, h: h};
    console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

### Arrow functions

In [arrow functions](../functions/arrow_functions), `this` retains the value of the enclosing lexical context's `this`. In global code, it will be set to the global object:

    var globalObject = this;
    var foo = (() => this);
    console.log(foo() === globalObject); // true

**Note:** If `this` arg is passed to `call`, `bind`, or `apply` on invocation of an arrow function it will be ignored. You can still prepend arguments to the call, but the first argument (`thisArg`) should be set to `null`.

    // Call as a method of an object
    var obj = {func: foo};
    console.log(obj.func() === globalObject); // true

    // Attempt to set this using call
    console.log(foo.call(obj) === globalObject); // true

    // Attempt to set this using bind
    foo = foo.bind(obj);
    console.log(foo() === globalObject); // true

No matter what, `foo`'s `this` is set to what it was when it was created (in the example above, the global object). The same applies to arrow functions created inside other functions: their `this` remains that of the enclosing lexical context.

    // Create obj with a method bar that returns a function that
    // returns its this. The returned function is created as
    // an arrow function, so its this is permanently bound to the
    // this of its enclosing function. The value of bar can be set
    // in the call, which in turn sets the value of the
    // returned function.
    var obj = {
      bar: function() {
        var x = (() => this);
        return x;
      }
    };

    // Call bar as a method of obj, setting its this to obj
    // Assign a reference to the returned function to fn
    var fn = obj.bar();

    // Call fn without setting this, would normally default
    // to the global object or undefined in strict mode
    console.log(fn() === obj); // true

    // But caution if you reference the method of obj without calling it
    var fn2 = obj.bar;
    // Calling the arrow function's this from inside the bar method()
    // will now return window, because it follows the this from fn2.
    console.log(fn2()() == window); // true

In the above, the function (call it anonymous function A) assigned to `obj.bar` returns another function (call it anonymous function B) that is created as an arrow function. As a result, function B's `this` is permanently set to the `this` of `obj.bar` (function A) when called. When the returned function (function B) is called, its `this` will always be what it was set to initially. In the above code example, function B's `this` is set to function A's `this` which is `obj`, so it remains set to `obj` even when called in a manner that would normally set its `this` to `undefined` or the global object (or any other method as in the previous example in the global execution context).

### As an object method

When a function is called as a method of an object, its `this` is set to the object the method is called on.

In the following example, when `o.f()` is invoked, inside the function `this` is bound to the `o` object.

    var o = {
      prop: 37,
      f: function() {
        return this.prop;
      }
    };

    console.log(o.f()); // 37

Note that this behavior is not at all affected by how or where the function was defined. In the previous example, we defined the function inline as the `f` member during the definition of `o`. However, we could have just as easily defined the function first and later attached it to `o.f`. Doing so results in the same behavior:

    var o = {prop: 37};

    function independent() {
      return this.prop;
    }

    o.f = independent;

    console.log(o.f()); // 37

This demonstrates that it matters only that the function was invoked from the `f` member of `o`.

Similarly, the `this` binding is only affected by the most immediate member reference. In the following example, when we invoke the function, we call it as a method `g` of the object `o.b`. This time during execution, `this` inside the function will refer to `o.b`. The fact that the object is itself a member of `o` has no consequence; the most immediate reference is all that matters.

    o.b = {g: independent, prop: 42};
    console.log(o.b.g()); // 42

#### `this` on the object's prototype chain

The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, `this` refers to the object the method was called on, as if the method were on the object.

    var o = {f: function() { return this.a + this.b; }};
    var p = Object.create(o);
    p.a = 1;
    p.b = 4;

    console.log(p.f()); // 5

In this example, the object assigned to the variable `p` doesn't have its own `f` property, it inherits it from its prototype. But it doesn't matter that the lookup for `f` eventually finds a member with that name on `o`; the lookup began as a reference to `p.f`, so `this` inside the function takes the value of the object referred to as `p`. That is, since `f` is called as a method of `p`, its `this` refers to `p`. This is an interesting feature of JavaScript's prototype inheritance.

#### `this` with a getter or setter

Again, the same notion holds true when a function is invoked from a getter or a setter. A function used as getter or setter has its `this` bound to the object from which the property is being set or gotten.

    function sum() {
      return this.a + this.b + this.c;
    }

    var o = {
      a: 1,
      b: 2,
      c: 3,
      get average() {
        return (this.a + this.b + this.c) / 3;
      }
    };

    Object.defineProperty(o, 'sum', {
        get: sum, enumerable: true, configurable: true});

    console.log(o.average, o.sum); // 2, 6

### As a constructor

When a function is used as a constructor (with the [`new`](new) keyword), its `this` is bound to the new object being constructed.

**Note:** While the default for a constructor is to return the object referenced by `this`, it can instead return some other object (if the return value isn't an object, then the `this` object is returned).

    /*
     * Constructors work like this:
     *
     * function MyConstructor(){
     *   // Actual function body code goes here.
     *   // Create properties on |this| as
     *   // desired by assigning to them.  E.g.,
     *   this.fum = "nom";
     *   // et cetera...
     *
     *   // If the function has a return statement that
     *   // returns an object, that object will be the
     *   // result of the |new| expression.  Otherwise,
     *   // the result of the expression is the object
     *   // currently bound to |this|
     *   // (i.e., the common case most usually seen).
     * }
     */

    function C() {
      this.a = 37;
    }

    var o = new C();
    console.log(o.a); // 37

    function C2() {
      this.a = 37;
      return {a: 38};
    }

    o = new C2();
    console.log(o.a); // 38

In the last example (`C2`), because an object was returned during construction, the new object that `this` was bound to gets discarded. (This essentially makes the statement "`this.a = 37;`" dead code. It's not exactly dead because it gets executed, but it can be eliminated with no outside effects.)

### As a DOM event handler

When a function is used as an event handler, its `this` is set to the element on which the listener is placed (some browsers do not follow this convention for listeners added dynamically with methods other than [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)).

    // When called as a listener, turns the related element blue
    function bluify(e) {
      // Always true
      console.log(this === e.currentTarget);
      // true when currentTarget and target are the same object
      console.log(this === e.target);
      this.style.backgroundColor = '#A5D9F3';
    }

    // Get a list of every element in the document
    var elements = document.getElementsByTagName('*');

    // Add bluify as a click listener so when the
    // element is clicked on, it turns blue
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', bluify, false);
    }

### In an inline event handler

When the code is called from an inline [on-event handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers), its `this` is set to the DOM element on which the listener is placed:

    <button onclick="alert(this.tagName.toLowerCase());">
      Show this
    </button>

The above alert shows `button`. Note however that only the outer code has its `this` set this way:

    <button onclick="alert((function() { return this; })());">
      Show inner this
    </button>

In this case, the inner function's `this` isn't set so it returns the global/window object (i.e. the default object in non-strict mode where `this` isn't set by the call).

### this in classes

Just like with regular functions, the value of `this` within methods depends on how they are called. Sometimes it is useful to override this behavior so that `this` within classes always refers to the class instance. To achieve this, bind the class methods in the constructor:

    class Car {
      constructor() {
        // Bind sayBye but not sayHi to show the difference
        this.sayBye = this.sayBye.bind(this);
      }
      sayHi() {
        console.log(`Hello from ${this.name}`);
      }
      sayBye() {
        console.log(`Bye from ${this.name}`);
      }
      get name() {
        return 'Ferrari';
      }
    }

    class Bird {
      get name() {
        return 'Tweety';
      }
    }

    const car = new Car();
    const bird = new Bird();

    // The value of 'this' in methods depends on their caller
    car.sayHi(); // Hello from Ferrari
    bird.sayHi = car.sayHi;
    bird.sayHi(); // Hello from Tweety

    // For bound methods, 'this' doesn't depend on the caller
    bird.sayBye = car.sayBye;
    bird.sayBye();  // Bye from Ferrari

**Note:** Classes are always strict mode code. Calling methods with an undefined `this` will throw an error.
