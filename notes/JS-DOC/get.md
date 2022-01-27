# getter

The `get` syntax binds an object property to a function that will be called when that property is looked up.

## Syntax

    {get prop() { ... } }
    {get [expression]() { ... } }

### Parameters

`prop`  
The name of the property to bind to the given function.

`expression`  
Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.

## Description

Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a _getter_.

It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, although it _is_ possible to use a getter and a setter in conjunction to create a type of pseudo-property.

Note the following when working with the `get` syntax:

-   It can have an identifier which is either a number or a string;
-   It must have exactly zero parameters (see [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) for more information);
-   It must not appear in an object literal with another `get` or with a data entry for the same property (`{ get x() { }, get x() { } }` and `{ x: ..., get x() { } }` are forbidden).

## Examples

### Defining a getter on new objects in object initializers

This will create a pseudo-property `latest` for object `obj`, which will return the last array item in `log`.

    const obj = {
      log: ['example','test'],
      get latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
      }
    }
    console.log(obj.latest); // "test"

Note that attempting to assign a value to `latest` will not change it.

### Deleting a getter using the `delete` operator

If you want to remove the getter, you can just [`delete`](../operators/delete) it:

    delete obj.latest;

### Defining a getter on existing objects using `defineProperty`

To append a getter to an existing object later at any time, use [`Object.defineProperty()`](../global_objects/object/defineproperty).

    const o = {a: 0};

    Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

    console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)

### Using a computed property name

    const expr = 'foo';

    const obj = {
      get [expr]() { return 'bar'; }
    };

    console.log(obj.foo); // "bar"

### Smart / self-overwriting / lazy getters

Getters give you a way to _define_ a property of an object, but they do not _calculate_ the property's value until it is accessed. A getter defers the cost of calculating the value until the value is needed. If it is never needed, you never pay the cost.

An additional optimization technique to lazify or delay the calculation of a property value and cache it for later access are **smart (or "[memoized](https://en.wikipedia.org/wiki/Memoization)") getters**. The value is calculated the first time the getter is called, and is then cached so subsequent accesses return the cached value without recalculating it. This is useful in the following situations:

-   If the calculation of a property value is expensive (takes much RAM or CPU time, spawns worker threads, retrieves remote file, etc).
-   If the value isn't needed just now. It will be used later, or in some case it's not used at all.
-   If it's used, it will be accessed several times, and there is no need to re-calculate that value will never be changed or shouldn't be re-calculated.

**Note:** This means that you shouldn't write a lazy getter for a property whose value you expect to change, because if the getter is lazy then it will not recalculate the value.

Note that getters are not "lazy” or "memoized” by nature; you must implement this technique if you desire this behavior.

In the following example, the object has a getter as its own property. On getting the property, the property is removed from the object and re-added, but implicitly as a data property this time. Finally, the value gets returned.

    get notifier() {
      delete this.notifier;
      return this.notifier = document.getElementById('bookmarked-notification-anchor');
    },

For Firefox code, see also the `XPCOMUtils.jsm` code module, which defines the `defineLazyGetter()` function.

### `get` vs. `defineProperty`

While using the `get` keyword and [`Object.defineProperty()`](../global_objects/object/defineproperty) have similar results, there is a subtle difference between the two when used on [`classes`](../classes).

When using `get` the property will be defined on the instance's prototype, while using [`Object.defineProperty()`](../global_objects/object/defineproperty) the property will be defined on the instance it is applied to.

    class Example {
      get hello() {
        return 'world';
      }
    }

    const obj = new Example();
    console.log(obj.hello);
    // "world"

    console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
    // undefined

    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(obj), 'hello'
      )
    );
    // { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-method-definitions">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Method definitions' in that specification.</span></a></td></tr></tbody></table>

`get`

1

12

1.5

9

9.5

3

1

18

4

14

1

1.0

`computed_property_names`

46

12

34

No

47

9.1

46

46

34

33

9.3

5.0

## See also

-   [setter](set)
-   [`delete`](../operators/delete)
-   [`Object.defineProperty()`](../global_objects/object/defineproperty)
-   [`__defineGetter__`](../global_objects/object/__definegetter__)
-   [`__defineSetter__`](../global_objects/object/__definesetter__)
-   [Defining Getters and Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters) in JavaScript Guide

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get</a>
