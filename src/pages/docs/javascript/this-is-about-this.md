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

# What is `this`?

[**`this`**][mdn] is a special "variable" which implicitly exists in every
function. It can be thought of being similar to Java's `this` and Python's
`self`, but it's much more flexible than that.

<div class="callout warning">

**Important**: The value of `this` is determined when the
function is **called**, not when the function is
_defined_.

</div>

Given the following function:

---


```js


function foo() {
    console.log(this);
}
```

these would be the values of `this` if called in those specific ways:

```js
// "normal call": global object / window in browsers
//                undefined in strict mode
foo();

// as object "method": to the object
var obj = { method: foo };
obj.method();

// via .call / .apply: To the value passed as first argument
foo.call(bar);
```

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

## What is the this keyword

In general, the `this` references the object of which the function is a property. In other words, the `this` references the object that is currently calling the function.

Suppose you have an object called `counter` that has a method `next()`. When you call the `next()` method, you can access the `this` object.

```js
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();Code language: JavaScript (javascript)
```

Inside the `next()` function, the `this` references the `counter` object. See the following method call:

```js
counter.next();Code language: CSS (css)
```

The `next()` is a function that is the property of the `counter` object. Therefore, inside the `next()` function, the `this` references the `counter` object.

## Global context

In the global context, the `this` references the [global object](https://www.javascripttutorial.net/es-next/javascript-globalthis/), which is the `window` object on the web browser or `global` object on Node.js.

This behavior is consistent in both strict and non-strict modes. Here's the output on the web browser:

```js
console.log(this === window); // trueCode language: JavaScript (javascript)
```

If you assign a property to `this` object in the global context, JavaScript will add the property to the global object as shown in the following example:

```js
this.color= 'Red';
console.log(window.color); // 'Red'Code language: JavaScript (javascript)
```

## Function context

In JavaScript, you can call a [function](https://www.javascripttutorial.net/javascript-function/) in the following ways:

- Function invocation
- Method invocation
- Constructor invocation
- Indirect invocation

Each function invocation defines its own context. Therefore, the `this` behaves differently.

### 1) Simple function invocation

In the non-strict mode, the `this` references the global object when the function is called as follows:

---


```js


function show() {
   console.log(this === window); // true
}

show();Code language: JavaScript (javascript)
```

When you call the `show()` function, the `this` references the [global object](https://www.javascripttutorial.net/es-next/javascript-globalthis/), which is the `window` on the web browser and `global` on Node.js.

Calling the `show()` function is the same as:

```js
window.show();Code language: JavaScript (javascript)
```

In the strict mode, JavaScript sets the `this` inside a function to `undefined`. For example:

```js
"use strict";

function show() {
    console.log(this === undefined);
}

show();Code language: JavaScript (javascript)
```

To enable the strict mode, you use the directive `"use strict"` at the beginning of the JavaScript file. If you want to apply the strict mode to a specific function only, you place it at the top of the function body.

Note that the strict mode has been available since ECMAScript 5.1. The `strict` mode applies to both function and nested functions. For example:

---


```js


function show() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();Code language: JavaScript (javascript)
```

Output:

```js
true
trueCode language: JavaScript (javascript)
```

In the `display()` inner function, the `this` also set to `undefined` as shown in the console.

### 2) Method invocation

When you call a method of an object, JavaScript sets `this` to the object that owns the method. See the following `car` object:

```js
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // HondaCode language: JavaScript (javascript)
```

In this example, the `this` object in the `getBrand()` method references the `car` object.

Since a method is a property of an object which is a value, you can store it in a variable.

```js
let brand = car.getBrand;Code language: JavaScript (javascript)
```

And then call the method via the variable

```js
console.log(brand()); // undefinedCode language: JavaScript (javascript)
```

You get `undefined` instead of `"Honda"` because when you call a method without specifying its object, JavaScript sets `this` to the global object in non-strict mode and `undefined` in the strict mode.

To fix this issue, you use the `[bind()](https://www.javascripttutorial.net/javascript-bind/)` method of the `Function.prototype` object. The `bind()` method creates a new function whose the `this` keyword is set to a specified value.

```js
let brand = car.getBrand.bind(car);
console.log(brand()); // Honda
Code language: JavaScript (javascript)
```

In this example, when you call the `brand()` method, the `this` keyword is bound to the `car` object. For example:

```js
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

let brand = car.getBrand.bind(bike);
console.log(brand());Code language: JavaScript (javascript)
```

Output:

```js
Harley Davidson
```

In this example, the `bind()` method sets the `this` to the `bike` object, therefore, you see the value of the `brand` property of the `bike` object on the console.

### 3) Constructor invocation

When you use the `new` keyword to create an instance of a function object, you use the function as a constructor.

The following example declares a `Car` function, then invokes it as a constructor:

---


```js


function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let car = new Car('Honda');
console.log(car.getBrand());Code language: JavaScript (javascript)
```

The expression `new Car('Honda')` is a constructor invocation of the `Car` function.

JavaScript creates a new object and sets `this` to the newly created object. This pattern works great with only one potential problem.

Now, you can invoke the `Car()` as a function or as a constructor. If you omit the `new` keyword as follows:

```js
var bmw = Car('BMW');
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefinedCode language: JavaScript (javascript)
```

Since the `this` value in the `Car()` sets to the global object, the `bmw.brand` returns `undefined`.

To make sure that the `Car()` function is always invoked using constructor invocation, you add a check at the beginning of the `Car()` function as follows:

---


```js


function Car(brand) {
    if (!(this instanceof Car)) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}Code language: JavaScript (javascript)
```

ES6 introduced a meta-property named [`new.target`](https://www.javascripttutorial.net/es6/javascript-new-target/) that allows you to detect whether a function is invoked as a simple invocation or as a constructor.

You can modify the `Car()` function that uses the `new.target` metaproperty as follows:

---


```js


function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}Code language: JavaScript (javascript)
```

### 4) Indirect Invocation

In JavaScript, [functions are first-class citizens](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/). In other words, functions are objects, which are instances of the [Function type](https://www.javascripttutorial.net/javascript-function-type/).

The `Function` type has two methods: `[call()](https://www.javascripttutorial.net/javascript-call/)` and `[apply()](https://www.javascripttutorial.net/javascript-apply-method/)` . These methods allow you to set the `this` value when calling a function. For example:

---


```js


function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");Code language: JavaScript (javascript)
```

Output:

```js
It's a Honda
It's an AudiCode language: PHP (php)
```

In this example, we called the `getBrand()` function indirectly using the `call()` method of the `getBrand` function. We passed `honda` and  `audi` object as the first argument of the `call()` method, therefore, we got the corresponding brand in each call.

The `apply()` method is similar to the `call()` method except that its second argument is an array of arguments.

```js
getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"Code language: JavaScript (javascript)
```

## Arrow functions

[ES6](https://www.javascripttutorial.net/es6/) introduced a new concept named [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/). In arrow functions, JavaScript sets the `this` lexically.

It means the arrow function does not create its own [execution context](https://www.javascripttutorial.net/javascript-execution-context/) but inherits the `this` from the outer function where the arrow function is defined. See the following example:

```js
let getThis = () => this;
console.log(getThis() === window); // trueCode language: JavaScript (javascript)
```

In this example, the `this` value is set to the global object i.e., `window` in the web browser.

Since an arrow function does not create its own execution context, defining a method using an arrow function will cause an issue. For example:

---


```js


function Car() {
    this.speed = 120;
}

Car.prototype.getSpeed = () => {
    return this.speed;
}

var car = new Car();
car.getSpeed(); // TypeErrorCode language: JavaScript (javascript)
```

Inside the `getSpeed()` method, the `this` value reference the global object, not the `Car` object. Therefore the `car.getSpeed()` invocation causes an error because the global object does not have the `speed` property.
