---
title: WhatisTHIS
weight: 0
excerpt: "Arrow functions are great because the inner value of\_this\_cant be changed, its\_*always*\_the same as the outer\_this."
seo:
    title: This in JavaScript
    description: "Arrow functions are great because the inner value of\_this\_cant be changed, its\_*always*\_the same as the outer\_this."
    robots: []
    extra: []
template: docs
---

# What is THIS

## If the function is defined as an arrow function: [#](https://web.dev/javascript-this/#arrow-functions)

```
const arrowFunction = () => {  console.log(this);};
```

In this case, the value of `this` is *always* the same as `this` in the parent scope:

```
const outerThis = this;const arrowFunction = () => {  // Always logs `true`:  console.log(this === outerThis);};
```

Arrow functions are great because the inner value of `this` can't be changed, it's *always* the same as the outer `this`.

### Other examples [#](https://web.dev/javascript-this/#other-examples)

With arrow functions, the value of `this` *can't* be changed with [`bind`](https://web.dev/javascript-this/#bound):

```
// Logs `true` - bound `this` value is ignored:arrowFunction.bind({foo: 'bar'})();
```

With arrow functions, the value of `this` *can't* be changed with [`call` or `apply`](https://web.dev/javascript-this/#call-apply):

```
// Logs `true` - called `this` value is ignored:arrowFunction.call({foo: 'bar'});// Logs `true` - applied `this` value is ignored:arrowFunction.apply({foo: 'bar'});
```

With arrow functions, the value of `this` *can't* be changed by calling the function as a member of another object:

```
const obj = {arrowFunction};// Logs `true` - parent object is ignored:obj.arrowFunction();
```

With arrow functions, the value of `this` *can't* be changed by calling the function as a constructor:

```
// TypeError: arrowFunction is not a constructornew arrowFunction();
```

### 'Bound' instance methods [#](https://web.dev/javascript-this/#'bound'-instance-methods)

With instance methods, if you want to ensure `this` always refers to the class instance, the best way is to use arrow functions and [class fields](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/Public_class_fields):

```
class Whatever {  someMethod = () => {    // Always the instance of Whatever:    console.log(this);  };}
```

This pattern is really useful when using instance methods as event listeners in components (such as React components, or web components).

The above might feel like it's breaking the "`this` will be the same as `this` in the parent scope" rule, but it starts to make sense if you think of class fields as syntactic sugar for setting things in the constructor:

```
class Whatever {  someMethod = (() => {    const outerThis = this;    return () => {      // Always logs `true`:      console.log(this === outerThis);    };  })();}// ...is roughly equivalent to:class Whatever {  constructor() {    const outerThis = this;    this.someMethod = () => {      // Always logs `true`:      console.log(this === outerThis);    };  }}
```

Alternative pattens involve binding an existing function in the constructor, or assigning the function in the constructor. If you can't use class fields for some reason, assigning functions in the constructor is a reasonable alternative:

```
class Whatever {  constructor() {    this.someMethod = () => {      // ...    };  }}
```

## Otherwise, if the function/class is called with `new`: [#](https://web.dev/javascript-this/#new)

```
new Whatever();
```

The above will call `Whatever` (or its constructor function if it's a class) with `this` set to the result of `Object.create(Whatever.prototype)`.

```
class MyClass {  constructor() {    console.log(      this.constructor === Object.create(MyClass.prototype).constructor,    );  }}// Logs `true`:new MyClass();
```

The same is true for older-style constructors:

```
function MyClass() {  console.log(    this.constructor === Object.create(MyClass.prototype).constructor,  );}// Logs `true`:new MyClass();
```

### Other examples [#](https://web.dev/javascript-this/#other-examples-2)

When called with `new`, the value of `this` *can't* be changed with [`bind`](https://web.dev/javascript-this/#bound):

```
const BoundMyClass = MyClass.bind({foo: 'bar'});// Logs `true` - bound `this` value is ignored:new BoundMyClass();
```

When called with `new`, the value of `this` *can't* be changed by calling the function as a member of another object:

```
const obj = {MyClass};// Logs `true` - parent object is ignored:new obj.MyClass();
```

## Otherwise, if the function has a 'bound' `this` value: [#](https://web.dev/javascript-this/#bound)

```
function someFunction() {  return this;}const boundObject = {hello: 'world'};const boundFunction = someFunction.bind(boundObject);
```

Whenever `boundFunction` is called, its `this` value will be the object passed to `bind` (`boundObject`).

```
// Logs `false`:console.log(someFunction() === boundObject);// Logs `true`:console.log(boundFunction() === boundObject);
```

Warning: Avoid using `bind` to bind a function to its outer `this`. Instead, use [arrow functions](https://web.dev/javascript-this/#arrow-functions), as they make `this` clear from the function declaration, rather than something that happens later in the code.

Don't use `bind` to set `this` to some value unrelated to the parent object; it's usually unexpected and it's why `this` gets such a bad reputation. Consider passing the value as an argument instead; it's more explicit, and works with arrow functions.

### Other examples [#](https://web.dev/javascript-this/#other-examples-3)

When calling a bound function, the value of `this` *can't* be changed with [`call` or `apply`](https://web.dev/javascript-this/#call-apply):

```
// Logs `true` - called `this` value is ignored:console.log(boundFunction.call({foo: 'bar'}) === boundObject);// Logs `true` - applied `this` value is ignored:console.log(boundFunction.apply({foo: 'bar'}) === boundObject);
```

When calling a bound function, the value of `this` *can't* be changed by calling the function as a member of another object:

```
const obj = {boundFunction};// Logs `true` - parent object is ignored:console.log(obj.boundFunction() === boundObject);
```

## Otherwise, if `this` is set at call-time: [#](https://web.dev/javascript-this/#call-apply)

```
function someFunction() {  return this;}const someObject = {hello: 'world'};// Logs `true`:console.log(someFunction.call(someObject) === someObject);// Logs `true`:console.log(someFunction.apply(someObject) === someObject);
```

The value of `this` is the object passed to `call`/`apply`.

Warning: Don't use `call`/`apply` to set `this` to some value unrelated to the parent object; it's usually unexpected and it's why `this` gets such a bad reputation. Consider passing the value as an argument instead; it's more explicit, and works with arrow functions.

Unfortunately `this` is set to some other value by things like DOM event listeners, and using it can result in difficult-to-understand code:

Don't

```
element.addEventListener('click', function (event) {  // Logs `element`, since the DOM spec sets `this` to  // the element the handler is attached to.  console.log(this);});
```

I avoid using `this` in cases like above, and instead:

Do

```
element.addEventListener('click', (event) => {  // Ideally, grab it from a parent scope:  console.log(element);  // But if you can't do that, get it from the event object:  console.log(event.currentTarget);});
```

## Otherwise, if the function is called via a parent object (`parent.func()`): [#](https://web.dev/javascript-this/#object-member)

```
const obj = {  someMethod() {    return this;  },};// Logs `true`:console.log(obj.someMethod() === obj);
```

In this case the function is called as a member of `obj`, so `this` will be `obj`. This happens at call-time, so the link is broken if the function is called without its parent object, or with a different parent object:

```
const {someMethod} = obj;// Logs `false`:console.log(someMethod() === obj);const anotherObj = {someMethod};// Logs `false`:console.log(anotherObj.someMethod() === obj);// Logs `true`:console.log(anotherObj.someMethod() === anotherObj);
```

`someMethod() === obj` is false because `someMethod` *isn't* called as a member of `obj`. You might have encountered this gotcha when trying something like this:

```
const $ = document.querySelector;// TypeError: Illegal invocationconst el = $('.some-element');
```

This breaks because the implementation of `querySelector` looks at its own `this` value and expects it to be a DOM node of sorts, and the above breaks that connection. To achieve the above correctly:

```
const $ = document.querySelector.bind(document);// Or:const $ = (...args) => document.querySelector(...args);
```

Fun fact: Not all APIs use `this` internally. Console methods like `console.log` were changed to avoid `this` references, so `log` doesn't need to be bound to `console`.

Warning: Don't transplant a function onto an object just to set `this` to some value unrelated to the parent object; it's usually unexpected and it's why `this` gets such a bad reputation. Consider passing the value as an argument instead; it's more explicit, and works with arrow functions.

## Otherwise, if the function or parent scope is in strict mode: [#](https://web.dev/javascript-this/#strict)

```
function someFunction() {  'use strict';  return this;}// Logs `true`:console.log(someFunction() === undefined);
```

In this case, the value of `this` is undefined. `'use strict'` isn't needed in the function if the parent scope is in [strict mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode) (and all modules are in strict mode).

Warning: Don't rely on this. I mean, there are easier ways to get an `undefined` value 😀.

## Otherwise: [#](https://web.dev/javascript-this/#otherwise)

```
function someFunction() {  return this;}// Logs `true`:console.log(someFunction() === globalThis);
```

In this case, the value of `this` is the same as `globalThis`.
