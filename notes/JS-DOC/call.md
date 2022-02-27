# Function.prototype.call()

The `call()` method calls a function with a given `this` value and arguments provided individually.

## Syntax

    call()
    call(thisArg)
    call(thisArg, arg1)
    call(thisArg, arg1, arg2)
    call(thisArg, arg1, ... , argN)

### Parameters

`thisArg` <span class="badge inline optional">Optional</span>  
The value to use as `this` when calling `func`.

**Note:** In certain cases, `thisArg` may not be the actual value seen by the method.

If the method is a function in [non-strict mode](../../strict_mode), [`null`](../null) and [`undefined`](../undefined) will be replaced with the global object, and primitive values will be converted to objects.

`arg1, arg2, ...argN` <span class="badge inline optional">Optional</span>  
Arguments for the function.

### Return value

The result of calling the function with the specified `this` value and arguments.

## Description

The `call()` allows for a function/method belonging to one object to be assigned and called for a different object.

`call()` provides a new value of `this` to the function/method. With `call()`, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

**Note:** While the syntax of this function is almost identical to that of [`apply()`](apply), the fundamental difference is that `call()` accepts an **argument list**, while `apply()` accepts a **single array of arguments**.

## Examples

### Using `call` to chain constructors for an object

You can use `call` to chain constructors for an object (similar to Java).

In the following example, the constructor for the `Product` object is defined with two parameters: `name` and `price`.

Two other functions, `Food` and `Toy`, invoke `Product`, passing `this`, `name`, and `price`. `Product` initializes the properties `name` and `price`, both specialized functions define the `category`.

    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }

    function Toy(name, price) {
      Product.call(this, name, price);
      this.category = 'toy';
    }

    const cheese = new Food('feta', 5);
    const fun = new Toy('robot', 40);

### Using `call` to invoke an anonymous function

In this example, we create an anonymous function and use `call` to invoke it on every object in an array.

The main purpose of the anonymous function here is to add a `print` function to every object, which is able to print the correct index of the object in the array.

**Note:** Passing the object as `this` value is not strictly necessary, but is done for explanatory purpose.

    const animals = [
      { species: 'Lion', name: 'King' },
      { species: 'Whale', name: 'Fail' }
    ];

    for (let i = 0; i < animals.length; i++) {
      (function(i) {
        this.print = function() {
          console.log('#' + i + ' ' + this.species
                      + ': ' + this.name);
        }
        this.print();
      }).call(animals[i], i);
    }

### Using `call` to invoke a function and specifying the context for '`this`'

In the example below, when we call `greet`, the value of `this` will be bound to object `obj`.

    function greet() {
      const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
      console.log(reply);
    }

    const obj = {
      animal: 'cats', sleepDuration: '12 and 16 hours'
    };

    greet.call(obj);  // cats typically sleep between 12 and 16 hours

### Using `call` to invoke a function and without specifying the first argument

In the example below, we invoke the `display` function without passing the first argument. If the first argument is not passed, the value of `this` is bound to the global object.

    var sData = 'Wisen';

    function display() {
      console.log('sData value is %s ', this.sData);
    }

    display.call();  // sData value is Wisen

**Note:** In strict mode, the value of `this` will be `undefined`. See below.

    'use strict';

    var sData = 'Wisen';

    function display() {
      console.log('sData value is %s ', this.sData);
    }

    display.call(); // Cannot read the property of 'sData' of undefined

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-function.prototype.call">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Function.prototype.call' in that specification.</span></a></td></tr></tbody></table>

`call`

1

12

1

5.5

4

1

1

18

4

10.1

1

1.0

## See also

-   [`Function.prototype.bind()`](bind)
-   [`Function.prototype.apply()`](apply)
-   [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call</a>
