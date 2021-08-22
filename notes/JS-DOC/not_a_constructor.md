# TypeError: "x" is not a constructor

The JavaScript exception "is not a constructor" occurs when there was an attempt to use an object or a variable as a constructor, but that object or variable is not a constructor.

## Message

    TypeError: Object doesn't support this action (Edge)
    TypeError: "x" is not a constructor

    TypeError: Math is not a constructor
    TypeError: JSON is not a constructor
    TypeError: Symbol is not a constructor
    TypeError: Reflect is not a constructor
    TypeError: Intl is not a constructor
    TypeError: Atomics is not a constructor

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

There was an attempt to use an object or a variable as a constructor, but that object or variable is not a constructor. See [constructor](https://developer.mozilla.org/en-US/docs/Glossary/Constructor) or the [`new` operator](../operators/new) for more information on what a constructor is.

There are many global objects, like [`String`](../global_objects/string) or [`Array`](../global_objects/array), which are constructable using `new`. However, some global objects are not and their properties and methods are static. The following JavaScript standard built-in objects are not a constructor: [`Math`](../global_objects/math), [`JSON`](../global_objects/json), [`Symbol`](../global_objects/symbol), [`Reflect`](../global_objects/reflect), [`Intl`](../global_objects/intl), [`Atomics`](../global_objects/atomics).

[Generator functions](../statements/function*) cannot be used as constructors either.

## Examples

### Invalid cases

    var Car = 1;
    new Car();
    // TypeError: Car is not a constructor

    new Math();
    // TypeError: Math is not a constructor

    new Symbol();
    // TypeError: Symbol is not a constructor

    function* f() {};
    var obj = new f;
    // TypeError: f is not a constructor

### A car constructor

Suppose you want to create an object type for cars. You want this type of object to be called `car`, and you want it to have properties for make, model, and year. To do this, you would write the following function:

    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

Now you can create an object called `mycar` as follows:

    var mycar = new Car('Eagle', 'Talon TSi', 1993);

### In Promises

When returning an immediately-resolved or immediately-rejected Promise, you do not need to create a _new Promise(...)_ and act on it.

This is not legal (the [Promise constructor](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor) is not being called correctly) and will throw a `TypeError: this is not a constructor` exception:

    return new Promise.resolve(true);

Instead, use the [Promise.resolve()](../global_objects/promise/resolve) or [Promise.reject()](../global_objects/promise/reject) [static methods](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>):

    // This is legal, but unnecessarily long:
    return new Promise((resolve, reject) => { resolve(true); })

    // Instead, return the static method:
    return Promise.resolve(true);
    return Promise.reject(false);

## See also

-   [constructor](https://developer.mozilla.org/en-US/docs/Glossary/Constructor)
-   [`new` operator](../operators/new)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor</a>
