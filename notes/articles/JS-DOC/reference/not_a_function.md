# TypeError: "x" is not a function

The JavaScript exception "is not a function" occurs when there was an attempt to call a value from a function, but the value is not actually a function.

## Message

    TypeError: Object doesn't support property or method {x} (Edge)
    TypeError: "x" is not a function

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

It attempted to call a value from a function, but the value is not actually a function. Some code expects you to provide a function, but that didn't happen.

Maybe there is a typo in the function name? Maybe the object you are calling the method on does not have this function? For example, JavaScript `Objects` have no `map` function, but the JavaScript `Array` object does.

There are many built-in functions in need of a (callback) function. You will have to provide a function in order to have these methods working properly:

-   When working with [`Array`](../global_objects/array) or [`TypedArray`](../global_objects/typedarray) objects:
    -   [`Array.prototype.every()`](../global_objects/array/every), [`Array.prototype.some()`](../global_objects/array/some), [`Array.prototype.forEach()`](../global_objects/array/foreach), [`Array.prototype.map()`](../global_objects/array/map), [`Array.prototype.filter()`](../global_objects/array/filter), [`Array.prototype.reduce()`](../global_objects/array/reduce), [`Array.prototype.reduceRight()`](../global_objects/array/reduceright), [`Array.prototype.find()`](../global_objects/array/find)
-   When working with [`Map`](../global_objects/map) and [`Set`](../global_objects/set) objects:
    -   [`Map.prototype.forEach()`](../global_objects/map/foreach) and [`Set.prototype.forEach()`](../global_objects/set/foreach)

## Examples

### A typo in the function name

In this case, which happens way too often, there is a typo in the method name:

    let x = document.getElementByID('foo');
    // TypeError: document.getElementByID is not a function

The correct function name is `getElementById`:

    let x = document.getElementById('foo');

### Function called on the wrong object

For certain methods, you have to provide a (callback) function and it will work on specific objects only. In this example, [`Array.prototype.map()`](../global_objects/array/map) is used, which will work with [`Array`](../global_objects/array) objects only.

    let obj = {a: 13, b: 37, c: 42};

    obj.map(function(num) {
      return num * 2;
    });

    // TypeError: obj.map is not a function

Use an array instead:

    let numbers = [1, 4, 9];

    numbers.map(function(num) {
      return num * 2;
    });

    // Array [2, 8, 18]

### Function shares a name with a pre-existing property

Sometimes when making a class, you may have a property and a function with the same name. Upon calling the function, the compiler thinks that the function ceases to exist.

    var Dog = function () {
     this.age = 11;
     this.color = "black";
     this.name = "Ralph";
     return this;
    }

    Dog.prototype.name = function(name) {
     this.name = name;
     return this;
    }

    var myNewDog = new Dog();
    myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function

Use a different property name instead:

    var Dog = function () {
     this.age = 11;
     this.color = "black";
     this.dogName = "Ralph"; //Using this.dogName instead of .name
     return this;
    }

    Dog.prototype.name = function(name) {
     this.dogName = name;
     return this;
    }

    var myNewDog = new Dog();
    myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }

### Using brackets for multiplication

In math, you can write 2 × (3 + 5) as 2\*(3 + 5) or just 2(3 + 5).

Using the latter will throw an error:

    const sixteen = 2(3 + 5);
    alert('2 x (3 + 5) is ' + String(sixteen));
    //Uncaught TypeError: 2 is not a function

You can correct the code by adding a `*` operator:

    const sixteen = 2 * (3 + 5);
    alert('2 x (3 + 5) is ' + String(sixteen));
    //2 x (3 + 5) is 16

### Import the exported module correctly

Ensure you are importing the module correctly.

An example helpers library (`helpers.js`)

    let helpers = function () { };

    helpers.groupBy = function (objectArray, property) {
      return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      },
    {});
    }

    export default helpers;

The correct import usage (`App.js`):

    import helpers from './helpers'

## See also

-   [Functions](../functions)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function</a>
