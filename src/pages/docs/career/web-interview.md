---
title: Web Interview
weight: 0
excerpt: Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.
seo:
    title: 'Web Interview'
    description: 'Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.'
    robots: []
    extra: []
template: docs
---

## Inserting an item into an existing array

Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.

Those are known methods, but it doesn't mean there isn't a more performant way. Here we go:

### Adding an element at the end

Adding an element at the end of the array is easy with push(), but it can be done in different ways.

```javascript
var arr = [1, 2, 3, 4, 5];

var arr2 = [];

arr.push(6);

arr[arr.length] = 6;

arr2 = arr.concat([6]);
```

Both first methods modify the original array. Don't believe me? Check the [jsperf](http://jsperf.com/push-item-inside-an-array)

#### Performance on mobile

**Android (v4.2.2)**

1. _arr.push(6);_ and _arr\[arr.length] = 6;_ have the same performance // 3 319 694 ops/sec

2. _arr2 = arr.concat(\[6]);_ 50.61 % slower than the other two methods

**Chrome Mobile (v33.0.0)**

1. _arr\[arr.length] = 6;_ // 6 125 975 ops/sec

2. _arr.push(6);_ 66.74 % slower

3. _arr2 = arr.concat(\[6]);_ 87.63 % slower

**Safari Mobile (v9)**

1. _arr\[arr.length] = 6;_ // 7 452 898 ops/sec

2. _arr.push(6);_ 40.19 % slower

3. _arr2 = arr.concat(\[6]);_ 49.78 % slower

```javascript

Final victor



1. arr[arr.length] = 6; // with an average of 5 632 856 ops/sec

2. arr.push(6); // 35.64 % slower

3. arr2 = arr.concat([6]); // 62.67 % slower

```

#### Performance on desktop

**Chrome (v48.0.2564)**

1. _arr\[arr.length] = 6;_ // 21 602 722 ops/sec

2. _arr.push(6);_ 61.94 % slower

3. _arr2 = arr.concat(\[6]);_ 87.45 % slower

**Firefox (v44)**

1. _arr.push(6);_ // 56 032 805 ops/sec

2. _arr\[arr.length] = 6;_ 0.52 % slower

3. _arr2 = arr.concat(\[6]);_ 87.36 % slower

**IE (v11)**

1. _arr\[arr.length] = 6;_ // 67 197 046 ops/sec

2. _arr.push(6);_ 39.61 % slower

3. _arr2 = arr.concat(\[6]);_ 93.41 % slower

**Opera (v35.0.2066.68)**

1. _arr\[arr.length] = 6;_ // 30 775 071 ops/sec

2. _arr.push(6);_ 71.60 % slower

3. _arr2 = arr.concat(\[6]);_ 83.70 % slower

**Safari (v9.0.3)**

1. _arr.push(6);_ // 42 670 978 ops/sec

2. _arr\[arr.length] = 6;_ 0.80 % slower

3. _arr2 = arr.concat(\[6]);_ 76.07 % slower

```javascript

Final victor



1. arr[arr.length] = 6; // with an average of 42 345 449 ops/sec

2. arr.push(6); // 34.66 % slower

3. arr2 = arr.concat([6]); // 85.79 % slower

```

### Add an element at the beginning

Now if we are trying to add an item to the beginning of the array:

```javascript
var arr = [1, 2, 3, 4, 5];

arr.unshift(0);

[0].concat(arr);
```

Here is a little more detail: unshift edits the original array; concat returns a new array. [jsperf](http://jsperf.com/unshift-item-inside-an-array)

#### Performance on mobile

**Android (v4.2.2)**

1. _\[0].concat(arr);_ // 1 808 717 ops/sec

2. _arr.unshift(0);_ 97.85 % slower

**Chrome Mobile (v33.0.0)**

1. _\[0].concat(arr);_ // 1 269 498 ops/sec

2. _arr.unshift(0);_ 99.86 % slower

**Safari Mobile (v9)**

1. _arr.unshift(0);_ // 3 250 184 ops/sec

2. _\[0].concat(arr);_ 33.67 % slower

```javascript

Final victor



1. [0].concat(arr); // with an average of 4 972 622 ops/sec

2. arr.unshift(0); // 64.70 % slower

```

#### Performance on desktop

**Chrome (v48.0.2564)**

1. _\[0].concat(arr);_ // 2 656 685 ops/sec

2. _arr.unshift(0);_ 96.77 % slower

**Firefox (v44)**

1. _\[0].concat(arr);_ // 8 039 759 ops/sec

2. _arr.unshift(0);_ 99.72 % slower

**IE (v11)**

1. _\[0].concat(arr);_ // 3 604 226 ops/sec

2. _arr.unshift(0);_ 98.31 % slower

**Opera (v35.0.2066.68)**

1. _\[0].concat(arr);_ // 4 102 128 ops/sec

2. _arr.unshift(0);_ 97.44 % slower

**Safari (v9.0.3)**

1. _arr.unshift(0);_ // 12 356 477 ops/sec

2. _\[0].concat(arr);_ 15.17 % slower

```javascript

Final victor



1. [0].concat(arr); // with an average of 6 032 573 ops/sec

2. arr.unshift(0); // 78.65 % slower

```

### Add an element in the middle

Adding items in the middle of an array is easy with splice, and it's the most performant way to do it.

```javascript
var items = ['one', 'two', 'three', 'four'];

items.splice(items.length / 2, 0, 'hello');
```

I tried to run these tests in various Browsers and OS and the results were similar. I hope these tips will be useful for you and encourage to perform your own tests!

---

## improve-nested-conditionals/

---

---

How can we improve and make a more efficient nested `if` statement in javascript?

```javascript
if (color) {
    if (color === 'black') {
        printBlackBackground();
    } else if (color === 'red') {
        printRedBackground();
    } else if (color === 'blue') {
        printBlueBackground();
    } else if (color === 'green') {
        printGreenBackground();
    } else {
        printYellowBackground();
    }
}
```

One way to improve the nested `if` statement would be using the `switch` statement. Although it is less verbose and is more ordered, it's not recommended to use it because it's so difficult to debug errors. Here's [why](https://toddmotto.com/deprecating-the-switch-statement-for-object-literals).

```javascript
switch (color) {
    case 'black':
        printBlackBackground();

        break;

    case 'red':
        printRedBackground();

        break;

    case 'blue':
        printBlueBackground();

        break;

    case 'green':
        printGreenBackground();

        break;

    default:
        printYellowBackground();
}
```

But what if we have a conditional with several checks in each statement? In this case, if we want it less verbose and more ordered, we can use the conditional `switch`. If we pass `true` as a parameter to the `switch` statement, it allows us to put a conditional in each case.

```javascript
switch (true) {
    case typeof color === 'string' && color === 'black':
        printBlackBackground();

        break;

    case typeof color === 'string' && color === 'red':
        printRedBackground();

        break;

    case typeof color === 'string' && color === 'blue':
        printBlueBackground();

        break;

    case typeof color === 'string' && color === 'green':
        printGreenBackground();

        break;

    case typeof color === 'string' && color === 'yellow':
        printYellowBackground();

        break;
}
```

If refactoring is an option, we can try to simplify the functions themselves. For example instead of having a function for each background color we could have an function that takes the color as an argument.

```javascript
function printBackground(color) {
    if (!color || typeof color !== 'string') {
        return; // Invalid color, return immediately
    }
}
```

But if refactoring is not an option, we must always avoid having several checks in every condition and avoid using `switch` as much as possible. We also must take into account that the most efficient way to do this is through an `object`.

```javascript
var colorObj = {
    black: printBlackBackground,

    red: printRedBackground,

    blue: printBlueBackground,

    green: printGreenBackground,

    yellow: printYellowBackground
};

if (color in colorObj) {
    colorObj[color]();
}
```

Here you can find more information about [this](http://www.nicoespeon.com/en/2015/01/oop-revisited-switch-in-js/).

---

## sorting-strings-with-accented-characters/

---

---

Javascript has a native method [**sort**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) that allows sorting arrays. Doing a simple `array.sort()` will treat each array entry as a string and sort it alphabetically. Also you can provide your [own custom sorting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters) function.

```javascript
['Shanghai', 'New York', 'Mumbai', 'Buenos Aires'].sort();

// ["Buenos Aires", "Mumbai", "New York", "Shanghai"]
```

But when you try order an array of non ASCII characters like this `['é', 'a', 'ú', 'c']`, you will obtain a strange result `['c', 'e', 'á', 'ú']`. That happens because sort works only with the English language.

See the next example:

```javascript
// Spanish

['único', 'árbol', 'cosas', 'fútbol'].sort();

// ["cosas", "fútbol", "árbol", "único"] // bad order

// German

['Woche', 'wöchentlich', 'wäre', 'Wann'].sort();

// ["Wann", "Woche", "wäre", "wöchentlich"] // bad order
```

Fortunately, there are two ways to overcome this behavior [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) and [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator) provided by ECMAScript Internationalization API.

> Both methods have their own custom parameters in order to configure it to work adequately.

#### Using `localeCompare()`

```javascript
['único', 'árbol', 'cosas', 'fútbol'].sort(function (a, b) {
    return a.localeCompare(b);
});

// ["árbol", "cosas", "fútbol", "único"]

['Woche', 'wöchentlich', 'wäre', 'Wann'].sort(function (a, b) {
    return a.localeCompare(b);
});

// ["Wann", "wäre", "Woche", "wöchentlich"]
```

#### Using `Intl.Collator()`

```javascript
['único', 'árbol', 'cosas', 'fútbol'].sort(Intl.Collator().compare);

// ["árbol", "cosas", "fútbol", "único"]

['Woche', 'wöchentlich', 'wäre', 'Wann'].sort(Intl.Collator().compare);

// ["Wann", "wäre", "Woche", "wöchentlich"]
```

-   For each method you can customize the location.

-   According to [Firefox](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#Performance) Intl.Collator is faster when comparing large numbers of strings.

### So when you are working with arrays of strings in a language other than English, remember to use this method to avoid unexpected sorting

## differences-between-undefined-and-null/

---

---

-   `undefined` means a variable has not been declared, or has been declared but has not yet been assigned a value

-   `null` is an assignment value that means "no value"

-   Javascript sets unassigned variables with a default value of `undefined`

-   Javascript never sets a value to `null`. It is used by programmers to indicate that a `var` has no value.

-   `undefined` is not valid in JSON while `null` is

-   `undefined` typeof is `undefined`

-   `null` typeof is an `object`. [Why?](http://www.2ality.com/2013/10/typeof-null.html)

-   Both are primitives

-   Both are [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (`Boolean(undefined) // false`, `Boolean(null) // false`)

-   You can know if a variable is [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

    ```javascript
    typeof variable === 'undefined';
    ```

````

- You can check if a variable is [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)



  ```javascript

  variable === null

````

-   The **equality** operator considers them equal, but the **identity** doesn't

    ```javascript
    null == undefined; // true

    null === undefined; // false
    ```

````

---









# writing-a-single-method-for-arrays-and-a-single-element/





    - en

    - javascript

---



Rather than writing separate methods to handle an array and a single element parameter, write your functions so they can handle both. This is similar to how some of jQuery's functions work (`css` will modify everything matched by the selector).



You just have to concat everything into an array first. `Array.concat` will accept an array or a single element.



```javascript

function printUpperCase(words) {

  var elements = [].concat(words || []);

  for (var i = 0; i < elements.length; i++) {

    console.log(elements[i].toUpperCase());

  }

}

````

`printUpperCase` is now ready to accept a single node or an array of nodes as its parameter. It also avoids the potential `TypeError` that would be thrown if no parameter was passed.

```javascript
printUpperCase('cactus');

// => CACTUS

printUpperCase(['cactus', 'bear', 'potato']);

// => CACTUS

//  BEAR

//  POTATO
```

---

## use-strict-and-get-lazy/

---

---

Strict-mode JavaScript makes it easier for the developer to write "secure" JavaScript.

By default, JavaScript allows the programmer to be pretty careless, for example, by not requiring us to declare our variables with "var" when we first introduce them. While this may seem like a convenience to the unseasoned developer, it's also the source of many errors when a variable name is misspelled or accidentally referred to out of its scope.

Programmers like to make the computer do the boring stuff for us, and automatically check our work for mistakes. That's what the JavaScript "use strict" directive allows us to do, by turning our mistakes into JavaScript errors.

We add this directive either by adding it at the top of a js file:

```javascript
// Whole-script strict mode syntax

'use strict';

var v = "Hi!  I'm a strict mode script!";
```

or inside a function:

```javascript
function f() {
    // Function-level strict mode syntax

    'use strict';

    function nested() {
        return 'And so am I!';
    }

    return "Hi!  I'm a strict mode function!  " + nested();
}

function f2() {
    return "I'm not strict.";
}
```

By including this directive in a JavaScript file or function, we will direct the JavaScript engine to execute in strict mode which disables a bunch of behaviors that are usually undesirable in larger JavaScript projects. Among other things, strict mode changes the following behaviors:

-   Variables can only be introduced when they are preceded with "var"

-   Attempting to write to read-only properties generates a noisy error

-   You have to call constructors with the "new" keyword

-   "this" is not implicitly bound to the global object

-   Very limited use of eval() allowed

-   Protects you from using reserved words or future reserved words as variable names

Strict mode is great for new projects, but can be challenging to introduce into older projects that don't already use it in most places. It also can be problematic if your build chain concatenates all your js files into one big file, as this may cause all files to execute in strict mode.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. Strict mode is supported in:

-   Internet Explorer from version 10.

-   Firefox from version 4.

-   Chrome from version 13.

-   Safari from version 5.1.

-   Opera from version 12.

### [See MDN for a fuller description of strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

## converting-a-node-list-to-an-array/

---

---

The `querySelectorAll` method returns an array-like object called a node list. These data structures are referred to as "Array-like", because they appear as an array, but can not be used with array methods like `map` and `forEach`. Here's a quick, safe, and reusable way to convert a node list into an array of DOM elements:

```javascript

const nodelist = document.querySelectorAll('div');

const nodelistToArray = Array.apply(null, nodelist);



//later on ..



nodelistToArray.forEach(...);

nodelistToArray.map(...);

nodelistToArray.slice(...);



//etc...

```

The `apply` method is used to pass an array of arguments to a function with a given `this` value. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) states that `apply` will take an array-like object, which is exactly what `querySelectorAll` returns. Since we don't need to specify a value for `this` in the context of the function, we pass in `null` or `0`. The result is an actual array of DOM elements which contains all of the available array methods.

Alternatively you can use `Array.prototype.slice` combined with `Function.prototype.call` or `Function.prototype.apply` passing the array-like object as the value of `this`:

```javascript

const nodelist = document.querySelectorAll('div');

const nodelistToArray = Array.prototype.slice.call(nodelist); // or equivalently Array.prototype.slice.apply(nodelist);



//later on ..



nodelistToArray.forEach(...);

nodelistToArray.map(...);

nodelistToArray.slice(...);



//etc...

```

Or if you are using ES2015 you can use the [spread operator `...`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

```js

const nodelist = [...document.querySelectorAll('div')]; // returns a real array



//later on ..



nodelist.forEach(...);

nodelist.map(...);

nodelist.slice(...);



//etc...

```

---

## template-strings/

---

---

As of ES6, JS now has template strings as an alternative to the classic end quotes strings.

Ex: Normal string

```javascript
var firstName = 'Jake';

var lastName = 'Rawr';

console.log('My name is ' + firstName + ' ' + lastName);

// My name is Jake Rawr
```

Template String

```javascript
var firstName = 'Jake';

var lastName = 'Rawr';

console.log(`My name is ${firstName} ${lastName}`);

// My name is Jake Rawr
```

You can do multi-line strings without , perform simple logic (ie 2+3) or even use the [ternary operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) inside `${}` in template strings.

```javascript
var val1 = 1,
    val2 = 2;

console.log(`${val1} is ${val1 < val2 ? 'less than' : 'greater than'} ${val2}`);

// 1 is less than 2
```

You are also able to modify the output of template strings using a function; they are called [tagged template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings) for example usages of tagged template strings.

You may also want to [read](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2) to understand template strings more.

---

## check-if-a-property-is-in-a-object/

---

---

When you have to check if a property is present in an [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects), you probably are doing something like this:

```javascript

var myObject = {

  name: '@tips_js'

};



if (myObject.name) { ... }

```

That's ok, but you have to know that there are two native ways for this kind of thing, the [`in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) and [`Object.hasOwnProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty). Every object descended from `Object`, has both ways available.

#### See the big Difference

```javascript
var myObject = {
    name: '@tips_js'
};

myObject.hasOwnProperty('name'); // true

'name' in myObject; // true

myObject.hasOwnProperty('valueOf'); // false, valueOf is inherited from the prototype chain

'valueOf' in myObject; // true
```

Both differ in the depth at which they check the properties. In other words, `hasOwnProperty` will only return true if key is available on that object directly. However, the `in` operator doesn't discriminate between properties created on an object and properties inherited from the prototype chain.

Here's another example:

```javascript
var myFunc = function () {
    this.name = '@tips_js';
};

myFunc.prototype.age = '10 days';

var user = new myFunc();

user.hasOwnProperty('name'); // true

user.hasOwnProperty('age'); // false, because age is from the prototype chain
```

Check the [live examples here](https://jsbin.com/tecoqa/edit?js,console)!

### I also recommend reading [this discussion](https://github.com/loverajoel/jstips/issues/62) about common mistakes made when checking a property's existence in objects

## hoisting/

---

---

Understanding [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) will help you organize your function scope. Just remember, variable declarations and function definitions are hoisted to the top. Variable definitions are not, even if you declare and define a variable on the same line. Also, a variable **declaration** lets the system know that the variable exists while **definition** assigns it a value.

```javascript
function doTheThing() {
    // ReferenceError: notDeclared is not defined

    console.log(notDeclared);

    // Outputs: undefined

    console.log(definedLater);

    var definedLater;

    definedLater = 'I am defined!';

    // Outputs: 'I am defined!'

    console.log(definedLater);

    // Outputs: undefined

    console.log(definedSimulateneously);

    var definedSimulateneously = 'I am defined!';

    // Outputs: 'I am defined!'

    console.log(definedSimulateneously);

    // Outputs: 'I did it!'

    doSomethingElse();

    function doSomethingElse() {
        console.log('I did it!');
    }

    // TypeError: undefined is not a function

    functionVar();

    var functionVar = function () {
        console.log('I did it!');
    };
}
```

To make things easier to read, declare all of your variables at the top of your function scope so it is clear which scope the variables are coming from. Define your variables before you need to use them. Define your functions at the bottom of your scope to keep them out of your way.

---

## pseudomandatory-parameters-in-es6-functions/

---

---

In many programming languages the parameters of a function are by default mandatory and the developer has to explicitly define that a parameter is optional. In Javascript, every parameter is optional, but we can enforce this behavior without messing with the actual body of a function, taking advantage of \[**es6's default values for parameters**] (http://exploringjs.com/es6/ch\_parameter-handling.html#sec\_parameter-default-values) feature.

```javascript
const _err = function (message) {
    throw new Error(message);
};

const getSum = (a = _err('a is not defined'), b = _err('b is not defined')) => a + b;

getSum(10); // throws Error, b is not defined

getSum(undefined, 10); // throws Error, a is not defined
```

### `_err` is a function that immediately throws an Error. If no value is passed for one of the parameters, the default value is going to be used, `_err` will be called and an Error will be thrown. You can see more examples for the **default parameters feature** on [Mozilla's Developer Network](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters)

## tip-to-measure-performance-of-a-javascript-block/

---

---

For quickly measuring performance of a javascript block, we can use the console functions like [`console.time(label)`](https://developer.chrome.com/devtools/docs/console-api#consoletimelabel) and [`console.timeEnd(label)`](https://developer.chrome.com/devtools/docs/console-api#consoletimeendlabel)

```javascript
console.time('Array initialize');

var arr = new Array(100),
    len = arr.length,
    i;

for (i = 0; i < len; i++) {
    arr[i] = new Object();
}

console.timeEnd('Array initialize'); // Outputs: Array initialize: 0.711ms
```

More info: [Console object](https://github.com/DeveloperToolsWG/console-object), [Javascript benchmarking](https://mathiasbynens.be/notes/javascript-benchmarking)

Demo: [jsfiddle](https://jsfiddle.net/meottb62/) - [codepen](http://codepen.io/anon/pen/JGJPoa) (outputs in browser console)

> Note: As [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) suggested don't use this for production sites, use it for development purposes only.

---

## fat-arrow-functions/

---

---

Introduced as a new feature in ES6, fat arrow functions may come as a handy tool to write more code in fewer lines. The name comes from its syntax, `=>`, which is a 'fat arrow', as compared to a thin arrow `->`. Some programmers might already know this type of function from different languages such as Haskell, as 'lambda expressions', or as 'anonymous functions'. It is called anonymous, as these arrow functions do not have a descriptive function name.

#### What are the benefits?

-   Syntax: fewer LOC; no more typing `function` keyword over and over again

-   Semantics: capturing the keyword `this` from the surrounding context

#### Simple syntax example

Have a look at these two code snippets, which do the exact same job, and you will quickly understand what fat arrow functions do:

```javascript

// general syntax for fat arrow functions

param => expression



// may also be written with parentheses

// parentheses are required on multiple params

(param1 [, param2]) => expression





// using functions

var arr = [5,3,2,9,1];

var arrFunc = arr.map(function(x) {

  return x * x;

});

console.log(arr)



// using fat arrow

var arr = [5,3,2,9,1];

var arrFunc = arr.map((x) => x*x);

console.log(arr)

```

As you can see, the fat arrow function in this case can save you time typing out the parentheses as well as the function and return keywords. I would advise you to always write parentheses around the parameter inputs, as the parentheses will be needed for multiple input parameters, such as in `(x,y) => x+y`. It is just a way to cope with forgetting them in different use cases. But the code above would also work like this: `x => x*x`. So far, these are only syntactical improvements, which lead to fewer LOC and better readability.

#### Lexically binding `this`

There is another good reason to use fat arrow functions. There is the issue with the context of `this`. With arrow functions, you don't need to worry about `.bind(this)` or setting `that = this` anymore, as fat arrow functions pick the context of `this` from the lexical surrounding. Have a look at the next \[example] (https://jsfiddle.net/pklinger/rw94oc11/):

```javascript
// globally defined this.i

this.i = 100;

var counterA = new CounterA();

var counterB = new CounterB();

var counterC = new CounterC();

var counterD = new CounterD();

// bad example

function CounterA() {
    // CounterA's `this` instance (!! gets ignored here)

    this.i = 0;

    setInterval(function () {
        // `this` refers to global object, not to CounterA's `this`

        // therefore starts counting with 100, not with 0 (local this.i)

        this.i++;

        document.getElementById('counterA').innerHTML = this.i;
    }, 500);
}

// manually binding that = this

function CounterB() {
    this.i = 0;

    var that = this;

    setInterval(function () {
        that.i++;

        document.getElementById('counterB').innerHTML = that.i;
    }, 500);
}

// using .bind(this)

function CounterC() {
    this.i = 0;

    setInterval(
        function () {
            this.i++;

            document.getElementById('counterC').innerHTML = this.i;
        }.bind(this),
        500
    );
}

// fat arrow function

function CounterD() {
    this.i = 0;

    setInterval(() => {
        this.i++;

        document.getElementById('counterD').innerHTML = this.i;
    }, 500);
}
```

### Further information about fat arrow functions may be found at \[MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow\_functions). To see different syntax options visit \[this site] (http://jsrocks.org/2014/10/arrow-functions-and-their-scope/)

## even-simpler-way-of-using-indexof-as-a-contains-clause/

---

---

JavaScript by default does not have a contains method. And for checking existence of a substring in a string or an item in an array you may do this:

```javascript
var someText = 'javascript rules';

if (someText.indexOf('javascript') !== -1) {
}

// or

if (someText.indexOf('javascript') >= 0) {
}
```

But let's look at these [Expressjs](https://github.com/strongloop/express) code snippets.

[examples/mvc/lib/boot.js](https://github.com/strongloop/express/blob/2f8ac6726fa20ab5b4a05c112c886752868ac8ce/examples/mvc/lib/boot.js#L26)

```javascript

for (var key in obj) {

  // "reserved" exports

  if (~['name', 'prefix', 'engine', 'before'].indexOf(key)) continue;

```

[lib/utils.js](https://github.com/strongloop/express/blob/2f8ac6726fa20ab5b4a05c112c886752868ac8ce/lib/utils.js#L93)

```javascript
exports.normalizeType = function (type) {
    return ~type.indexOf('/') ? acceptParams(type) : { value: mime.lookup(type), params: {} };
};
```

[examples/web-service/index.js](https://github.com/strongloop/express/blob/2f8ac6726fa20ab5b4a05c112c886752868ac8ce/examples/web-service/index.js#L35)

```javascript
// key is invalid

if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));
```

The gotcha is the [bitwise operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) **\~**, "Bitwise operators perform their operations on binary representations, but they return standard JavaScript numerical values."

It transforms `-1` into `0`, and `0` evaluates to `false` in JavaScript:

```javascript
var someText = 'text';

!!~someText.indexOf('tex'); // someText contains "tex" - true

!~someText.indexOf('tex'); // someText NOT contains "tex" - false

~someText.indexOf('asd'); // someText doesn't contain "asd" - false

~someText.indexOf('ext'); // someText contains "ext" - true
```

#### String.prototype.includes()

ES6 introduced the [includes() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) and you can use it to determine whether or not a string includes another string:

```javascript
'something'.includes('thing'); // true
```

With ECMAScript 2016 (ES7) it is even possible to use these techniques with Arrays:

```javascript
!!~[1, 2, 3].indexOf(1); // true

[1, 2, 3].includes(1); // true
```

### **Unfortunately, it is only supported in Chrome, Firefox, Safari 9 or above and Edge; not IE11 or lower.** **It's better used in controlled environments.**

## passing-arguments-to-callback-functions/

---

---

By default you cannot pass arguments to a callback function. For example:

```js
function callback() {
    console.log('Hi human');
}

document.getElementById('someelem').addEventListener('click', callback);
```

You can take advantage of the closure scope in Javascript to pass arguments to callback functions. Check this example:

```js
function callback(a, b) {
    return function () {
        console.log('sum = ', a + b);
    };
}

var x = 1,
    y = 2;

document.getElementById('someelem').addEventListener('click', callback(x, y));
```

#### What are closures?

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created. [Check MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) to learn more.

So this way the arguments `x` and `y` are in scope of the callback function when it is called.

Another method to do this is using the `bind` method. For example:

```js
var alertText = function (text) {
    alert(text);
};

document.getElementById('someelem').addEventListener('click', alertText.bind(this, 'hello'));
```

There is a very slight difference in performance of both methods, checkout [jsperf](http://jsperf.com/bind-vs-closure-23).

---

## nodejs-run-a-module-if-it-is-not-required/

---

---

In node, you can tell your program to do two different things depending on whether the code is run from `require('./something.js')` or `node something.js`. This is useful if you want to interact with one of your modules independently.

```js
if (!module.parent) {
    // ran with `node something.js`

    app.listen(8088, function () {
        console.log('app listening on port 8088');
    });
} else {
    // used with `require('/.something.js')`

    module.exports = app;
}
```

### See [the documentation for modules](https://nodejs.org/api/modules.html#modules_module_parent) for more info

## rounding-the-fast-way/

---

---

This tip is about performance...with a hidden price tag.

Have you ever come across the [double tilde `~~` operator](http://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript)? It's also often called the "double bitwise NOT" operator. You can often use it as a faster substitute for `Math.trunc()`. Why is that?

One bitwise shift `~` first truncates `input` to 32 bits, then transforms it into `-(input+1)`. The double bitwise shift therefore transforms the input into `-(-(input + 1)+1)` making it a great tool to round towards zero. For numeric input, it therefore mimics `Math.trunc()`. On failure, `0` is returned, which might come in handy sometimes instead of `Math.trunc()`, which returns `NaN` on failure.

```js
// single ~

console.log(~1337); // -1338

// numeric input

console.log(~~47.11); // -> 47

console.log(~~1.9999); // -> 1

console.log(~~3); // -> 3
```

However, while `~~` is probably a better performer, experienced programmers often stick with `Math.trunc()` instead. To understand why, here's a clinical view on this operator.

#### INDICATIONS

**When every CPU cycle counts**

`~~` is probably faster than `Math.trunc()` across the board, though you should [test that assumption](https://jsperf.com/jsfvsbitnot/10) on whichever platforms matter to you. Also, you'd generally have to perform millions of such operations to have any visible impact at run time.

**When code clarity is not a concern**

If you're trying to confuse others, or get maximum utility from your minifier/uglifier, this is a relatively cheap way to do it.

#### CONTRAINDICATIONS

**When your code needs to be maintained**

Code clarity is of great importance in the long term, whether you work in a team, contribute to public code repos, or fly solo. As [the oft-quoted saying](http://c2.com/cgi/wiki?CodeForTheMaintainer) goes:

> Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.

For a solo programmer, that psychopath is inevitably "you in six months".

**When you forget that `~~` always rounds to zero**

Newbie programmers may fixate on the cleverness of `~~`, forgetting the significance of "just drop the fractional portion of this number". This can easily lead to **fencepost errors** (a.k.a. "off-by-one") when transforming floats to array indices or related ordinal values, where a different kind of fractional rounding may actually be called for. (Lack of code clarity usually contributes to this problem.)

For instance, if you're counting numbers on a "nearest integer" basis, you should use `Math.round()` instead of `~~`, but programmer laziness and the impact of _**10 whole characters saved per use**_ on human fingers often triumph over cold logic, leading to incorrect results.

In contrast, the very names of the `Math.xyz()` functions clearly communicate their effect, reducing the probability of accidental errors.

**When dealing with large-magnitude numbers**

Because `~` first does a 32-bit conversion, `~~` results in bogus values around ±2.15 billion. If you don't properly range-check your input, a user could trigger unexpected behavior when the transformed value ends up being a great distance from the original:

```js
a = 2147483647.123; // maximum positive 32-bit integer, plus a bit more

console.log(~~a); // ->  2147483647     (ok)

a += 10000; // ->  2147493647.123 (ok)

console.log(~~a); // -> -2147483648     (huh?)
```

One particularly vulnerable area involves dealing with Unix epoch timestamps (measured in seconds from 1 Jan 1970 00:00:00 UTC). A quick way to get such values is:

```js
epoch_int = ~~(+new Date() / 1000); // Date() epochs in milliseconds, so we scale accordingly
```

However, when dealing with timestamps after 19 Jan 2038 03:14:07 UTC (sometimes called the **Y2038 limit**), this breaks horribly:

```js
// epoch timestamp for 1 Jan 2040 00:00:00.123 UTC

epoch = +new Date('2040-01-01') / 1000 + 0.123; // ->  2208988800.123

// back to the future!

epoch_int = ~~epoch; // -> -2085978496

console.log(new Date(epoch_int * 1000)); // ->  Wed Nov 25 1903 17:31:44 UTC

// that was fun, now let's get real

epoch_flr = Math.floor(epoch); // ->  2208988800

console.log(new Date(epoch_flr * 1000)); // ->  Sun Jan 01 2040 00:00:00 UTC
```

**When the original input wasn't sanitized**

Because `~~` transforms every non-number into `0`:

```js
console.log(~~[]); // -> 0

console.log(~~NaN); // -> 0

console.log(~~null); // -> 0
```

some programmers treat it as alternative to proper input validation. However, this can lead to strange logic bugs down the line, since you're no longer distinguishing between invalid inputs and actual `0` values. This is therefore _not_ a recommended practice.

**When so many people think `~~X == Math.floor(X)`**

Most people who write about "double bitwise NOT" incorrectly equate it with `Math.floor()` for some reason. If you can't write about it accurately, odds are good you'll eventually misuse it.

Others are more careful to mention `Math.floor()` for positive inputs and `Math.ceil()` for negative ones, but that forces you to stop and think about the values you're dealing with. This defeats the purpose of `~~` as a handy no-gotchas shortcut.

#### DOSAGE

Avoid where possible. Use sparingly otherwise.

#### ADMINISTRATION

1. Apply cautiously.

2. Sanitize values before applying.

3. Carefully document relevant assumptions about the values being transformed.

4. Review code to deal with, at minimum:

    - logic bugs where invalid inputs are instead passed to other code modules as valid `0` values

    - range errors on transformed inputs

    - fencepost errors due to incorrect rounding direction

---

## safe-string-concatenation/

---

---

Suppose you have a couple of variables with unknown types and you want to concatenate them in a string. To be sure that the arithmetical operation is not be applied during concatenation, use `concat`:

```javascript
var one = 1;

var two = 2;

var three = '3';

var result = ''.concat(one, two, three); //"123"
```

This way of concatenting does exactly what you'd expect. In contrast, concatenation with pluses might lead to unexpected results:

```javascript
var one = 1;

var two = 2;

var three = '3';

var result = one + two + three; //"33" instead of "123"
```

Speaking about performance, compared to the `join` [type](http://www.sitepoint.com/javascript-fast-string-concatenation/) of concatenation, the speed of `concat` is pretty much the same.

### You can read more about the `concat` function on MDN [page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

## return-objects-to-enable-chaining-of-functions/

---

---

When creating functions on an object in Object Oriented Javascript, returning the object in the function will enable you to chain functions together.

```js
function Person(name) {
    this.name = name;

    this.sayName = function () {
        console.log('Hello my name is: ', this.name);

        return this;
    };

    this.changeName = function (name) {
        this.name = name;

        return this;
    };
}

var person = new Person('John');

person.sayName().changeName('Timmy').sayName();
```

---

## shuffle-an-array/

---

---

This snippet here uses [Fisher-Yates Shuffling](https://www.wikiwand.com/en/Fisher%E2%80%93Yates_shuffle) Algorithm to shuffle a given array.

```javascript
function shuffle(arr) {
    var i, j, temp;

    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));

        temp = arr[i];

        arr[i] = arr[j];

        arr[j] = temp;
    }

    return arr;
}
```

An example:

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8];

var b = shuffle(a);

console.log(b);

// [2, 7, 8, 6, 5, 3, 1, 4]
```

---

## two-ways-to-empty-an-array/

---

---

You define an array and want to empty its contents. Usually, you would do it like this:

```javascript
// define Array

var list = [1, 2, 3, 4];

function empty() {
    //empty your array

    list = [];
}

empty();
```

But there is another way to empty an array that is more performant.

You should use code like this:

```javascript
var list = [1, 2, 3, 4];

function empty() {
    //empty your array

    list.length = 0;
}

empty();
```

-   `list = []` assigns a reference to a new array to a variable, while any other references are unaffected. which means that references to the contents of the previous array are still kept in memory, leading to memory leaks.

-   `list.length = 0` deletes everything in the array, which does hit other references.

In other words, if you have two references to the same array (`a = [1,2,3]; a2 = a;`), and you delete the array's contents using `list.length = 0`, both references (a and a2) will now point to the same empty array. (So don't use this technique if you don't want a2 to hold an empty array!)

Think about what this will output:

```js
var foo = [1, 2, 3];

var bar = [1, 2, 3];

var foo2 = foo;

var bar2 = bar;

foo = [];

bar.length = 0;

console.log(foo, bar, foo2, bar2);

// [] [] [1, 2, 3] []
```

Stackoverflow more detail: [difference-between-array-length-0-and-array](http://stackoverflow.com/questions/4804235/difference-between-array-length-0-and-array)

---
