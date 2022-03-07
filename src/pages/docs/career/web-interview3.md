---
title: Web Interview 3
weight: 0
excerpt: Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.
seo:
    title: 'Web Interview 3'
    description: 'Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.'
    robots: []
    extra: []
template: docs
---

## Primitives

If an Array only contains primitive values, we can deduplicate it by only using the [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) methods.

```javascript
var deduped = [1, 1, 'a', 'a'].filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
});

console.log(deduped); // [ 1, 'a' ]
```

### ES2015

We can write this in a more compact way using an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```javascript
var deduped = [1, 1, 'a', 'a'].filter((el, i, arr) => arr.indexOf(el) === i);

console.log(deduped); // [ 1, 'a' ]
```

But with the introduction of [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and the [`from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method, we can achieve the same result in a more concise way.

```javascript
var deduped = Array.from(new Set([1, 1, 'a', 'a']));

console.log(deduped); // [ 1, 'a' ]
```

## Objects

We can't use the same approach when the elements are Objects, because Objects are stored by reference and primitives are stored by value.

```javascript

1 === 1 // true



'a' === 'a' // true



{ a: 1 } === { a: 1 } // false

```

Therefore we need to change our approach and use a hash table.

```javascript
function dedup(arr) {
    var hashTable = {};

    return arr.filter(function (el) {
        var key = JSON.stringify(el);

        var match = Boolean(hashTable[key]);

        return match ? false : (hashTable[key] = true);
    });
}

var deduped = dedup([{ a: 1 }, { a: 1 }, [1, 2], [1, 2]]);

console.log(deduped); // [ {a: 1}, [1, 2] ]
```

Because a hash table in javascript is simply an `Object`, the keys will always be of the type `String`. This means that normally we can't distinguish between strings and numbers of the same value, i.e. `1` and `'1'`.

```javascript
var hashTable = {};

hashTable[1] = true;

hashTable['1'] = true;

console.log(hashTable); // { '1': true }
```

However, because we're using [`JSON.stringify`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), keys that are of the type `String`, will be stored as an escaped string value, giving us unique keys in our `hashTable`.

```javascript
var hashTable = {};

hashTable[JSON.stringify(1)] = true;

hashTable[JSON.stringify('1')] = true;

console.log(hashTable); // { '1': true, '\'1\'': true }
```

This means duplicate elements of the same value, but of a different type, will still be deduplicated using the same implementation.

```javascript
var deduped = dedup([{ a: 1 }, { a: 1 }, [1, 2], [1, 2], 1, 1, '1', '1']);

console.log(deduped); // [ {a: 1}, [1, 2], 1, '1' ]
```

## Resources

### Methods

-   [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

-   [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

-   [`from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

-   [`JSON.stringify`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### ES2015

-   [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

-   [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### Stack overflow

-   [remove duplicates from array](http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array/9229821#9229821)

---

## flattening-multidimensional-arrays-in-javascript/

---

---

These are the three known ways to merge multidimensional array into a single array.

Given this array:

```js
var myArray = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9]
];
```

We wanna have this result:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9];
```

#### Solution 1: Using [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) and [`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

```js
var myNewArray = [].concat.apply([], myArray);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Solution 2: Using [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Flatten_an_array_of_arrays)

```js
var myNewArray = myArray.reduce(function (prev, curr) {
    return prev.concat(curr);
});

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Solution 3

```js
var myNewArray3 = [];

for (var i = 0; i < myArray.length; ++i) {
    for (var j = 0; j < myArray[i].length; ++j) myNewArray3.push(myArray[i][j]);
}

console.log(myNewArray3);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Solution 4: Using [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) in ES6

```js
var myNewArray4 = [].concat(...myArray);

console.log(myNewArray4);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### Solution 5: Using [`flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) in ES10

```js
var myNewArray5 = myArray.flat();

console.log(myNewArray5);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Take a look [here](https://jsbin.com/janana/edit?js,console) these 4 algorithms in action.

For infinitely nested array try Lodash [flattenDeep()](https://lodash.com/docs#flattenDeep).

If you are curious about performance, [here](http://jsperf.com/flatten-an-array-loop-vs-reduce/6) a test for check how it works.

---

## advanced-properties/

---

---

It is possible to configure object properties in Javascript for example to set properties to be pseudo-private or readonly. This feature is available since ECMAScript 5.1, therefore supported by all recent browsers.

To do so, you need to use the method `defineProperty` of the `Object` prototype like so:

```js
var a = {};

Object.defineProperty(a, 'readonly', {
    value: 15,

    writable: false
});

a.readonly = 20;

console.log(a.readonly); // 15
```

The syntax is as follows:

```js
Object.defineProperty(dest, propName, options);
```

or for multiple definitions:

```js
Object.defineProperties(dest, {
    propA: optionsA,

    propB: optionsB //...
});
```

where options include the following attributes:

-   _value_: if the property is not a getter (see below), value is a mandatory attribute. `{a: 12}` === `Object.defineProperty(obj, 'a', {value: 12})`

-   _writable_: set the property as readonly. Note that if the property is a nested objects, its properties are still editable.

-   _enumerable_: set the property as hidden. That means that `for ... of` loops and `stringify` will not include the property in their result, but the property is still there. Note: That doesn't mean that the property is private! It can still be accessible from the outside, it just means that it won't be printed.

-   _configurable_: set the property as non modifiable, e.g. protected from deletion or redefinition. Again, if the property is a nested object, its properties are still configurable.

So in order to create a private constant property, you can define it like so:

```js
Object.defineProperty(obj, 'myPrivateProp', { value: val, enumerable: false, writable: false, configurable: false });
```

Besides configuring properties, `defineProperty` allows us to define _dynamic properties_, thanks to the second parameter being a string. For instance, let's say that I want to create properties according to some external configuration:

```js



var obj = {

  getTypeFromExternal(): true // illegal in ES5.1

}



Object.defineProperty(obj, getTypeFromExternal(), {value: true}); // ok



// For the example sake, ES6 introduced a new syntax:

var obj = {

  [getTypeFromExternal()]: true

}

```

But that's not all! Advanced properties allows us to create **getters** and **setters**, just like other OOP languages! In that case, one cannot use the `writable`, `enumerable` and `configurable` properties, but instead:

```js

function Foobar () {

  var _foo; //  true private property



  Object.defineProperty(obj, 'foo', {

    get: function () { return _foo; }

    set: function (value) { _foo = value }

  });



}



var foobar = new Foobar();

foobar.foo; // 15

foobar.foo = 20; // _foo = 20

```

Aside for the obvious advantage of encapsulation and advanced accessors, you will notice that we didn't "call" the getter, instead we just "get" the property without parentheses! This is awesome! For instance, let's imagine that we have an object with long nested properties, like so:

```js
var obj = { a: { b: { c: [{ d: 10 }, { d: 20 }] } } };
```

Now instead of doing `a.b.c[0].d` (where one of the properties can resolve to `undefined` and throw an error), we can instead create an alias:

```js
Object.defineProperty(obj, 'firstD', {
    get: function () {
        return a && a.b && a.b.c && a.b.c[0] && a.b.c[0].d;
    }
});

console.log(obj.firstD); // 10
```

#### Note

If you define a getter without a setter and still try to set a value, you will get an error! This is particularly important when using helper functions such as `$.extend` or `_.merge`. Be careful!

#### Links

-   [defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

-   [Defining properties in JavaScript](http://bdadam.com/blog/defining-properties-in-javascript.html)

---

## using-json-stringify/

---

---

Let's say there is an object with properties "prop1", "prop2", "prop3". We can pass **additional params** to **JSON.stringify** to selectively write properties of the object to string like:

```javascript
var obj = {
    prop1: 'value1',

    prop2: 'value2',

    prop3: 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

var str = JSON.stringify(obj, selectedProperties);

// str

// {"prop1":"value1","prop2":"value2"}
```

The **"str"** will contain only info on selected properties only.

Instead of array we can pass a function also.

```javascript
function selectedProperties(key, val) {
    // the first val will be the entire object, key is empty string

    if (!key) {
        return val;
    }

    if (key === 'prop1' || key === 'prop2') {
        return val;
    }

    return;
}
```

The last optional param it takes is to modify the way it writes the object to string.

```javascript
var str = JSON.stringify(obj, selectedProperties, '\t\t');

/* str output with double tabs in every line.

{

        "prop1": "value1",

        "prop2": "value2"

}

*/
```

---

## array-average-and-median/

---

---

The following examples will be based on the following array:

```javascript
let values = [2, 56, 3, 41, 0, 4, 100, 23];
```

To get the average, we have to sum up numbers and then divide by the number of values. Steps are:

-   get the array length

-   sum up values

-   get the average (`sum/length`)

```javascript
let values = [2, 56, 3, 41, 0, 4, 100, 23];

let sum = values.reduce((previous, current) => (current += previous));

let avg = sum / values.length;

// avg = 28
```

Or:

```javascript
let values = [2, 56, 3, 41, 0, 4, 100, 23];

let count = values.length;

values = values.reduce((previous, current) => (current += previous));

values /= count;

// avg = 28
```

Now, to get the median steps are:

-   sort the array

-   get the arethmic mean of the middle values

```javascript
let values = [2, 56, 3, 41, 0, 4, 100, 23];

values.sort((a, b) => a - b);

let lowMiddle = Math.floor((values.length - 1) / 2);

let highMiddle = Math.ceil((values.length - 1) / 2);

let median = (values[lowMiddle] + values[highMiddle]) / 2;

// median = 13,5
```

With a bitwise operator:

```javascript
let values = [2, 56, 3, 41, 0, 4, 100, 23];

values.sort((a, b) => a - b);

let median = (values[(values.length - 1) >> 1] + values[values.length >> 1]) / 2;

// median = 13,5
```

---

## preventing-unapply-attacks/

---

---

By overriding the builtin prototypes, external code can cause code to break by rewriting code to expose and change bound arguments. This can be an issue that seriously breaks applications that works by using polyfill es5 methods.

```js
// example bind polyfill

function bind(fn) {
    var prev = Array.prototype.slice.call(arguments, 1);

    return function bound() {
        var curr = Array.prototype.slice.call(arguments, 0);

        var args = Array.prototype.concat.apply(prev, curr);

        return fn.apply(null, args);
    };
}

// unapply-attack

function unapplyAttack() {
    var concat = Array.prototype.concat;

    Array.prototype.concat = function replaceAll() {
        Array.prototype.concat = concat; // restore the correct version

        var curr = Array.prototype.slice.call(arguments, 0);

        var result = concat.apply([], curr);

        return result;
    };
}
```

The above function discards the `prev` array from the bind meaning that any `.concat` the first concat call following using the unapply attack will throw an error.

By using [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), making an object immutable, you prevent any overriding of the builtin object prototypes.

```js
(function freezePrototypes() {
    if (typeof Object.freeze !== 'function') {
        throw new Error('Missing Object.freeze');
    }

    Object.freeze(Object.prototype);

    Object.freeze(Array.prototype);

    Object.freeze(Function.prototype);
})();
```

You can read more about unapply attacks [here](https://glebbahmutov.com/blog/unapply-attack/). Although this concept is called an 'unapply attack' due to some code being able to access closures that normally wouldn't be in scope, it is mostly wrong to consider this a security feature due to it not preventing an attacker with code execution from extending prototypes before the freezing happens and also still having the potential to read all scopes using various language features. ECMA modules would give realm based isolation which is much stronger than this solution however still doesn't fix the issues of third party scripts.

---

## use-destructuring-in-function-parameters/

---

---

I am sure many of you are already familiar with the [ES6 Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Did you know that you can also use it in function parameters?

```js
var sayHello = function ({ name, surname }) {
    console.log(`Hello ${name} ${surname}! How are you?`);
};

sayHello({ name: 'John', surname: 'Smith' });

// -> Hello John Smith! How are you?
```

This is great for functions which accept an options object. For this use case, you can also add [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to fill in whatever values the caller leaves out, or if the caller forgets to pass one at all:

```js
var sayHello2 = function ({ name = 'Anony', surname = 'Moose' } = {}) {
    console.log(`Hello ${name} ${surname}! How are you?`);
};
```

The `= {}` says that the default object to be destructured for this parameter is `{}`, in case the caller forgets to pass the parameter, or passes one of the wrong type (more on this below).

```js
sayHello2();

// -> Hello Anony Moose! How are you?

sayHello2({ name: 'Bull' });

// -> Hello Bull Moose! How are you?
```

**Argument Handling**

With plain destructuring assignment, if the the input parameter can't be matched with the function's specified object arguments, all the unmatched arguments are `undefined`, so you need to add code that handles this properly:

```js
var sayHelloTimes = function ({ name, surname }, times) {
    console.log(`Hello ${name} ${surname}! I've seen you ${times} times before.`);
};

sayHelloTimes({ name: 'Pam' }, 5678);

// -> Hello Pam undefined! I've seen you 5678 times before.

sayHelloTimes(5678);

// -> Hello undefined undefined! I've seen you undefined times before.
```

Worse, if the parameter to be destructured is missing, an exception is thrown, probably bringing your app to a screeching halt:

```js
sayHelloTimes();

// -> Uncaught TypeError: Cannot match against 'undefined' or 'null'...
```

It's conceptually similar to accessing a property of an undefined object, just with a different exception type.

Destructuring assignment with default parameters hides all the above to a certain extent:

```js
var sayHelloTimes2 = function ({ name = 'Anony', surname = 'Moose' } = {}, times) {
    console.log(`Hello ${name} ${surname}! I've seen you ${times} times before.`);
};

sayHelloTimes2({ name: 'Pam' }, 5678);

// -> Hello Pam Moose! I've seen you 5678 times before.

sayHelloTimes2(5678);

// -> Hello Anony Moose! I've seen you undefined times before.

sayHelloTimes2();

// -> Hello Anony Moose! I've seen you undefined times before.
```

As for `= {}`, it covers the case of a missing _object_, for which individual property defaults won't help at all:

```js
var sayHelloTimes2a = function ({ name = 'Anony', surname = 'Moose' }, times) {
    console.log(`Hello ${name} ${surname}! I've seen you ${times} times before.`);
};

sayHelloTimes2a({ name: 'Pam' }, 5678);

// -> Hello Pam Moose! I've seen you 5678 times before.

sayHelloTimes2a(5678);

// -> Hello Anony Moose! I've seen you undefined times before.

sayHelloTimes2a();

// -> Uncaught TypeError: Cannot match against 'undefined' or 'null'.
```

**Availability**

Note that destructuring assignment may not yet be available by default, in the version of Node.js or browser that you're using. For Node.js, you can try using the `--harmony-destructuring` flag on startup to activate this feature.

---

## know-the-passing-mechanism/

---

---

JavaScript is pass-by-value, technically. It is neither pass-by-value nor pass-by-reference, going by the truest sense of these terms. To understand this passing mechanism, take a look at the following two example code snippets and the explanations.

#### Example 1

```js
var me = {
    // 1

    partOf: 'A Team'
};

function myTeam(me) {
    // 2

    me = {
        // 3

        belongsTo: 'A Group'
    };
}

myTeam(me);

console.log(me); // 4  : {'partOf' : 'A Team'}
```

In above example, when the `myTeam` gets invoked, JavaScript is _passing the reference to_ `me` _object as value, as it is an object_ and invocation itself creates two independent references to the same object, (though the name being same here i.e. `me`, is misleading and gives us an impression that it is the single reference) and hence, the reference variable themselves are independent.

When we assigned a new object at #`3`, we are changing this reference value entirely within the `myTeam` function, and it will not have any impact on the original object outside this function scope, from where it was passed and the reference in the outside scope is going to retain the original object and hence the output from #`4`.

#### Example 2

```js
var me = {
    // 1

    partOf: 'A Team'
};

function myGroup(me) {
    // 2

    me.partOf = 'A Group'; // 3
}

myGroup(me);

console.log(me); // 4  : {'partOf' : 'A Group'}
```

In the case of `myGroup` invocation, we are passing the object `me`. But unlike the example 1 scenario, we are not assigning this `me` variable to any new object, effectively meaning the object reference value within the `myGroup` function scope still is the original object's reference value and when we are modifying the property within this scope, it is effectively modifying the original object's property. Hence, you get the output from #`4`.

So does this later case not prove that javascript is pass-by-reference? No, it does not. Remember, _JavaScript passes the reference as value, in case of objects_. The confusion arises as we tend not to understand fully what pass by reference is. This is the exact reason, some prefer to call this as _call-by-sharing_.

_Initially posted by the author on_[_js-by-examples_](https://github.com/bmkmanoj/js-by-examples/blob/master/examples/js_pass_by_value_or_reference.md)

---

## calculate-the-max-min-value-from-an-array/

---

---

The built-in functions [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) and [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) find the maximum and minimum value of the arguments, respectively.

```js
Math.max(1, 2, 3, 4); // 4

Math.min(1, 2, 3, 4); // 1
```

These functions will not work as-is with arrays of numbers. However, there are some ways around this.

[`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) allows you to call a function with a given `this` value and an _array_ of arguments.

```js
var numbers = [1, 2, 3, 4];

Math.max.apply(null, numbers); // 4

Math.min.apply(null, numbers); // 1
```

Passing the `numbers` array as the second argument of `apply()` results in the function being called with all values in the array as parameters.

A simpler, ES2015 way of accomplishing this is with the new [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).

```js
var numbers = [1, 2, 3, 4];

Math.max(...numbers); // 4

Math.min(...numbers); // 1
```

This operator causes the values in the array to be expanded, or "spread", into the function's arguments.

---

## detect-document-ready-in-pure-js/

---

---

The cross-browser way to check if the document has loaded in pure JavaScript is using [`readyState`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState).

```js
if (document.readyState === 'complete') {
    // The page is fully loaded
}
```

You can detect when the document is ready...

```js
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);

        // document ready
    }
}, 100);
```

or with [onreadystatechange](https://developer.mozilla.org/en-US/docs/Web/Events/readystatechange)...

```js
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
    }
};
```

Use `document.readyState === 'interactive'` to detect when the DOM is ready.

---

## basics-declarations/

---

---

Below, different ways to declare variables in JavaScript. Comments and console.log should be enough to explain what's happening here:

```js
var y,
    x = (y = 1); //== var x; var y; x = y = 1

console.log('--> 1:', `x = ${x}, y = ${y}`);

// Will print

//--> 1: x = 1, y = 1
```

First, we just set two variables. Nothing much here.

```js
(() => {
    var x = (y = 2); // == var x; x = y = 2;

    console.log('2.0:', `x = ${x}, y = ${y}`);
})();

console.log('--> 2.1:', `x = ${x}, y = ${y}`);

// Will print

//2.0: x = 2, y = 2

//--> 2.1: x = 1, y = 2
```

As you can see, the code has only changed the global y, as we haven't declared the variable in the closure.

```js
(() => {
    var x,
        y = 3; // == var x; var y = 3;

    console.log('3.0:', `x = ${x}, y = ${y}`);
})();

console.log('--> 3.1:', `x = ${x}, y = ${y}`);

// Will print

//3.0: x = undefined, y = 3

//--> 3.1: x = 1, y = 2
```

Now we declare both variables through var. Meaning they only live in the context of the closure.

```js
(() => {
    var y,
        x = (y = 4); // == var x; var y; x = y = 4

    console.log('4.0:', `x = ${x}, y = ${y}`);
})();

console.log('--> 4.1:', `x = ${x}, y = ${y}`);

// Will print

//4.0: x = 4, y = 4

//--> 4.1: x = 1, y = 2
```

Both variables have been declared using var and only after that we've set their values. As local > global, x and y are local in the closure, meaning the global x and y are untouched.

```js
x = 5; // == x = 5

console.log('--> 5:', `x = ${x}, y = ${y}`);

// Will print

//--> 5: x = 5, y = 2
```

This last line is explicit by itself.

You can test this and see the result [thanks to babel](<https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=var%20y%2C%20x%20%3D%20y%20%3D%201%20%2F%2F%3D%3D%20var%20x%3B%20var%20y%3B%20x%20%3D%20y%20%3D%201%0Aconsole.log('--%3E%201%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%0A%2F%2F%20Will%20print%0A%2F%2F--%3E%201%3A%20x%20%3D%201%2C%20y%20%3D%201%0A%0A%3B(()%20%3D%3E%20%7B%20%0A%20%20var%20x%20%3D%20y%20%3D%202%20%2F%2F%20%3D%3D%20var%20x%3B%20y%20%3D%202%3B%0A%20%20console.log('2.0%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%7D)()%0Aconsole.log('--%3E%202.1%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%0A%2F%2F%20Will%20print%0A%2F%2F2.0%3A%20x%20%3D%202%2C%20y%20%3D%202%0A%2F%2F--%3E%202.1%3A%20x%20%3D%201%2C%20y%20%3D%202%0A%0A%3B(()%20%3D%3E%20%7B%20%0A%20%20var%20x%2C%20y%20%3D%203%20%2F%2F%20%3D%3D%20var%20x%3B%20var%20y%20%3D%203%3B%0A%20%20console.log('3.0%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%7D)()%0Aconsole.log('--%3E%203.1%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%0A%2F%2F%20Will%20print%0A%2F%2F3.0%3A%20x%20%3D%20undefined%2C%20y%20%3D%203%0A%2F%2F--%3E%203.1%3A%20x%20%3D%201%2C%20y%20%3D%202%0A%0A%3B(()%20%3D%3E%20%7B%20%0A%20%20var%20y%2C%20x%20%3D%20y%20%3D%204%20%2F%2F%20%3D%3D%20var%20x%3B%20var%20y%3B%20x%20%3D%20y%20%3D%203%0A%20%20console.log('4.0%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%7D)()%0Aconsole.log('--%3E%204.1%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%0A%2F%2F%20Will%20print%0A%2F%2F4.0%3A%20x%20%3D%204%2C%20y%20%3D%204%0A%2F%2F--%3E%204.1%3A%20x%20%3D%201%2C%20y%20%3D%202%0A%0Ax%20%3D%205%20%2F%2F%20%3D%3D%20x%20%3D%205%0Aconsole.log('--%3E%205%3A'%2C%20%60x%20%3D%20%24%7Bx%7D%2C%20y%20%3D%20%24%7By%7D%60)%0A%0A%2F%2F%20Will%20print%0A%2F%2F--%3E%205%3A%20x%20%3D%205%2C%20y%20%3D%202>).

More informations available on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).

Special thanks to @kurtextrem for his collaboration :)!

---

## reminders-about-reduce-function-usage/

---

---

As written in documentation the `reduce()` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

#### Signature

[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function accepts 2 parameters (M: mandatory, O: optional):

-   (M) a callback **reducer function** to be applied that deals with a pair of previous (result of previous computation) and next element until end of the list.

-   (O) an **initial value** to be used as the first argument to the first call of the callback.

So let's see a common usage and later a more sophisticated one.

#### Common usage (accumulation, concatenation)

We are on Amazon website (prices in $) and our caddy is quite full, let's compute total.

```javascript
// my current amazon caddy purchases

var items = [{ price: 10 }, { price: 120 }, { price: 1000 }];

// our reducer function

var reducer = function add(sumSoFar, item) {
    return sumSoFar + item.price;
};

// do the job

var total = items.reduce(reducer, 0);

console.log(total); // 1130
```

Optional reduce function parameter was primitive integer type 0 in that first case, but it could have been an Object, an Array...instead of a primitive type, but we will see that later.

Now, cool I received a discount coupon of 20$.

```javascript
var total = items.reduce(reducer, -20);

console.log(total); // 1110
```

#### Advanced usage (combination)

This second usage example is inspired by Redux [combineReducers](http://redux.js.org/docs/api/combineReducers.html) function [source](https://github.com/reactjs/redux/blob/master/src/combineReducers.js#L93).

Idea behind is to separate reducer function into separate individual functions and at the end compute a new _single big reducer function_.

To illustrate this, let's create a single object literal with some reducers function able to compute total prices in different currency $, €...

```javascript
var reducers = {
    totalInDollar: function (state, item) {
        // specific statements...

        return (state.dollars += item.price);
    },

    totalInEuros: function (state, item) {
        return (state.euros += item.price * 0.897424392);
    },

    totalInPounds: function (state, item) {
        return (state.pounds += item.price * 0.692688671);
    },

    totalInYen: function (state, item) {
        return (state.yens += item.price * 113.852);
    }

    // more...
};
```

Then, we create a new swiss knife function

-   responsible for applying each partial reduce functions.

-   that will return a new callback reducer function

```javascript
var combineTotalPriceReducers = function (reducers) {
    return function (state, item) {
        return Object.keys(reducers).reduce(
            function (nextState, key) {
                reducers[key](state, item);

                return state;
            },

            {}
        );
    };
};
```

Now let's see how using it.

```javascript
var bigTotalPriceReducer = combineTotalPriceReducers(reducers);

var initialState = { dollars: 0, euros: 0, yens: 0, pounds: 0 };

var totals = items.reduce(bigTotalPriceReducer, initialState);

console.log(totals);

/*

Object {dollars: 1130, euros: 1015.11531904, yens: 127524.24, pounds: 785.81131152}

*/
```

I hope this approach can give you another idea of using reduce() function for your own needs.

Your reduce function could handle an history of each computation by instance as it is done in Ramdajs with [scan](http://ramdajs.com/docs/#scan) function

[JSFiddle to play with](https://jsfiddle.net/darul75/81tgt0cd/)

---

## extract-unix-timestamp-easily/

---

---

We frequently need to calculate with unix timestamp. There are several ways to grab the timestamp. For current unix timestamp easiest and fastest way is

```js
const dateTime = Date.now();

const timestamp = Math.floor(dateTime / 1000);
```

or

```js
const dateTime = new Date().getTime();

const timestamp = Math.floor(dateTime / 1000);
```

To get unix timestamp of a specific date pass `YYYY-MM-DD` or `YYYY-MM-DDT00:00:00Z` as parameter of `Date` constructor. For example

```js
const dateTime = new Date('2012-06-08').getTime();

const timestamp = Math.floor(dateTime / 1000);
```

You can just add a `+` sign also when declaring a `Date` object like below

```js
const dateTime = +new Date();

const timestamp = Math.floor(dateTime / 1000);
```

or for specific date

```js
const dateTime = +new Date('2012-06-08');

const timestamp = Math.floor(dateTime / 1000);
```

Under the hood the runtime calls `valueOf` method of the `Date` object. Then the unary `+` operator calls `toNumber()` with that returned value. For detailed explanation please check the following links

-   [Date.prototype.valueOf](http://es5.github.io/#x15.9.5.8)

-   [Unary + operator](http://es5.github.io/#x11.4.6)

-   [toNumber()](http://es5.github.io/#x9.3)

-   [Date Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

-   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)

---

---
