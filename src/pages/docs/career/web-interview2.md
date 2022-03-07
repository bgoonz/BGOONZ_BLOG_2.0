---
title: Web Interview 2
weight: 0
excerpt: Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.
seo:
    title: 'Web Interview 2'
    description: 'Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.'
    robots: []
    extra: []
template: docs
---

## converting-to-number-fast-way/

---

---

Converting strings to numbers is extremely common. The easiest and fastest ([jsPerf](https://jsperf.com/number-vs-parseint-vs-plus/29)) way to achieve that would be using the `+` (plus) operator.

```javascript
var one = '1';

var numberOne = +one; // Number 1
```

You can also use the `-` (minus) operator which type-converts the value into number but also negates it.

```javascript
var one = '1';

var negativeNumberOne = -one; // Number -1
```

---

## use\_===_instead_of_==/

---

---

The `==` (or `!=`) operator performs an automatic type conversion if needed. The `===` (or `!==`) operator will not perform any conversion. It compares the value and the type, which could be considered faster ([jsPref](http://jsperf.com/strictcompare)) than `==`.

```js

[10] ==  10      // is true

[10] === 10      // is false



'10' ==  10      // is true

'10' === 10      // is false



 []  ==  0       // is true

 []  === 0       // is false



 ''  ==  false   // is true but true == "a" is false

 ''  === false   // is false

```

---

## Using-immediately-invoked-function-expression/

---

---

Called as "Iffy" ( IIFE - immediately invoked function expression) is an anonymous function expression that is immediately invoked and has some important uses in Javascript.

```javascript
(function () {
    // Do something​
})();
```

It is an anonymous function expression that is immediately invoked, and it has some particularly important uses in JavaScript.

The pair of parenthesis surrounding the anonymous function turns the anonymous function into a function expression or variable expression. So instead of a simple anonymous function in the global scope, or wherever it was defined, we now have an unnamed function expression.

Similarly, we can even create a named, immediately invoked function expression:

```javascript

(someNamedFunction = function(msg) {

 console.log(msg || "Nothing for today !!")

 }) (); // Output --> Nothing for today !!​

​

someNamedFunction("Javascript rocks !!"); // Output --> Javascript rocks !!

someNamedFunction(); // Output --> Nothing for today !!​

```

For more details, check the following URL's -

1. [Link 1](https://blog.mariusschulz.com/2016/01/13/disassembling-javascripts-iife-syntax)

2. [Link 2](http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/)

### Performance: [jsPerf](http://jsperf.com/iife-with-call)

c filtering-and-sorting-a-list-of-strings/

---

---

You may have a big list of names you need to filter in order to remove duplicates and sort them alphabetically.

In our example we are going to use the list of **JavaScript reserved keywords** we can find across the different versions of the language, but as you can notice, there is a lot of duplicated keywords and they are not alphabetically organized. So this is a perfect list ([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)) of strings to test out this JavaScript tip.

```js
var keywords = [
    'do',
    'if',
    'in',
    'for',
    'new',
    'try',
    'var',
    'case',
    'else',
    'enum',
    'null',
    'this',
    'true',
    'void',
    'with',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'super',
    'throw',
    'while',
    'delete',
    'export',
    'import',
    'return',
    'switch',
    'typeof',
    'default',
    'extends',
    'finally',
    'continue',
    'debugger',
    'function',
    'do',
    'if',
    'in',
    'for',
    'int',
    'new',
    'try',
    'var',
    'byte',
    'case',
    'char',
    'else',
    'enum',
    'goto',
    'long',
    'null',
    'this',
    'true',
    'void',
    'with',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'final',
    'float',
    'short',
    'super',
    'throw',
    'while',
    'delete',
    'double',
    'export',
    'import',
    'native',
    'public',
    'return',
    'static',
    'switch',
    'throws',
    'typeof',
    'boolean',
    'default',
    'extends',
    'finally',
    'package',
    'private',
    'abstract',
    'continue',
    'debugger',
    'function',
    'volatile',
    'interface',
    'protected',
    'transient',
    'implements',
    'instanceof',
    'synchronized',
    'do',
    'if',
    'in',
    'for',
    'let',
    'new',
    'try',
    'var',
    'case',
    'else',
    'enum',
    'eval',
    'null',
    'this',
    'true',
    'void',
    'with',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'super',
    'throw',
    'while',
    'yield',
    'delete',
    'export',
    'import',
    'public',
    'return',
    'static',
    'switch',
    'typeof',
    'default',
    'extends',
    'finally',
    'package',
    'private',
    'continue',
    'debugger',
    'function',
    'arguments',
    'interface',
    'protected',
    'implements',
    'instanceof',
    'do',
    'if',
    'in',
    'for',
    'let',
    'new',
    'try',
    'var',
    'case',
    'else',
    'enum',
    'eval',
    'null',
    'this',
    'true',
    'void',
    'with',
    'await',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'super',
    'throw',
    'while',
    'yield',
    'delete',
    'export',
    'import',
    'public',
    'return',
    'static',
    'switch',
    'typeof',
    'default',
    'extends',
    'finally',
    'package',
    'private',
    'continue',
    'debugger',
    'function',
    'arguments',
    'interface',
    'protected',
    'implements',
    'instanceof'
];
```

Since we don't want to change our original list, we are going to use a high order function named [`filter`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), which will return a new filter array based in a predicate (_function_) we pass to it. The predicate will compare the index of the current keyword in the original list with its `index` in the new list and will push it to the new array only if the indexes match.

Finally we are going to sort the filtered list using the [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function which takes a comparison function as the only argument, returning a alphabetically sorted list.

```js
var filteredAndSortedKeywords = keywords

    .filter(function (keyword, index) {
        return keywords.lastIndexOf(keyword) === index;
    })

    .sort(function (a, b) {
        return a < b ? -1 : 1;
    });
```

The **ES6** (ECMAScript 2015) version using [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) looks a little simpler:

```js
const filteredAndSortedKeywords = keywords

    .filter((keyword, index) => keywords.lastIndexOf(keyword) === index)

    .sort((a, b) => (a < b ? -1 : 1));
```

And this is the final filtered and sorted list of JavaScript reserved keywords:

```js
console.log(filteredAndSortedKeywords);

// ['abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield']
```

_Thanks to_[_@nikshulipa_](https://github.com/nikshulipa)_,_[_@kirilloid_](https://twitter.com/kirilloid)_,_[_@lesterzone_](https://twitter.com/lesterzone)_,_[_@tracker1_](https://twitter.com/tracker1)_,_[_@manuel_del_pozo_](https://twitter.com/manuel_del_pozo)_for all the comments and suggestions!_

---

## short-circuit-evaluation-in-js/

---

---

[Short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation) says, the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression: when the first argument of the AND (`&&`) function evaluates to false, the overall value must be false; and when the first argument of the OR (`||`) function evaluates to true, the overall value must be true.

For the following `test` condition and `isTrue` and `isFalse` function.

```js
var test = true;

var isTrue = function () {
    console.log('Test is true.');
};

var isFalse = function () {
    console.log('Test is false.');
};
```

Using logical AND - `&&`.

```js
// A normal if statement.

if (test) {
    isTrue(); // Test is true
}

// Above can be done using '&&' as -

test && isTrue(); // Test is true
```

Using logical OR - `||`.

```js
test = false;

if (!test) {
    isFalse(); // Test is false.
}

test || isFalse(); // Test is false.
```

The logical OR could also be used to set a default value for function argument.

```js
function theSameOldFoo(name) {
    name = name || 'Bar';

    console.log("My best friend's name is " + name);
}

theSameOldFoo(); // My best friend's name is Bar

theSameOldFoo('Bhaskar'); // My best friend's name is Bhaskar
```

The logical AND could be used to avoid exceptions when using properties of undefined. Example:

```js
var dog = {
    bark: function () {
        console.log('Woof Woof');
    }
};

// Calling dog.bark();

dog.bark(); // Woof Woof.

// But if dog is not defined, dog.bark() will raise an error "Cannot read property 'bark' of undefined."

// To prevent this, we can use &&.

dog && dog.bark(); // This will only call dog.bark(), if dog is defined.
```

---

## curry-vs-partial-application/

---

---

**Currying**

Currying takes a function

f: X \* Y -> R

and turns it into a function

f': X -> (Y -> R)

Instead of calling f with two arguments, we invoke f' with the first argument. The result is a function that we then call with the second argument to produce the result.

Thus, if the uncurried f is invoked as

f(3,5)

then the curried f' is invoked as

f(3)(5)

For example: Uncurried add()

```javascript
function add(x, y) {
    return x + y;
}

add(3, 5); // returns 8
```

Curried add()

```javascript
function addC(x) {
    return function (y) {
        return x + y;
    };
}

addC(3)(5); // returns 8
```

**The algorithm for currying.**

Curry takes a binary function and returns a unary function that returns a unary function.

curry: (X × Y → R) → (X → (Y → R))

Javascript Code:

```javascript
function curry(f) {
    return function (x) {
        return function (y) {
            return f(x, y);
        };
    };
}
```

**Partial application**

Partial application takes a function

f: X \* Y -> R

and a fixed value for the first argument to produce a new function

f\`: Y -> R

f' does the same as f, but only has to fill in the second parameter which is why its arity is one less than the arity of f.

For example: Binding the first argument of function add to 5 produces the function plus5.

```javascript
function plus5(y) {
    return 5 + y;
}

plus5(3); // returns 8
```

**The algorithm of partial application.**\*

partApply takes a binary function and a value and produces a unary function.

partApply : ((X × Y → R) × X) → (Y → R)

Javascript Code:

```javascript
function partApply(f, x) {
    return function (y) {
        return f(x, y);
    };
}
```

---

## speed-up-recursive-functions-with-memoization/

---

---

Fibonacci sequence is very familiar to everybody. We can write the following function in 20 seconds.

```js
var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
```

It works, but is not efficient. It did lots of duplicate computing works, we can cache its previously computed results to speed it up.

```js
var fibonacci = (function () {
    var cache = [0, 1]; // cache the value at the n index

    return function (n) {
        if (cache[n] === undefined) {
            for (var i = cache.length; i <= n; ++i) {
                cache[i] = cache[i - 1] + cache[i - 2];
            }
        }

        return cache[n];
    };
})();
```

Also, we can define a higher-order function that accepts a function as its argument and returns a memoized version of the function.

```js
var memoize = function (func) {
    var cache = {};

    return function () {
        var key = JSON.stringify(Array.prototype.slice.call(arguments));

        return key in cache ? cache[key] : (cache[key] = func.apply(this, arguments));
    };
};

fibonacci = memoize(fibonacci);
```

And this is an ES6 version of the memoize function.

```js
var memoize = function (func) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        return key in cache ? cache[key] : (cache[key] = func(...args));
    };
};

fibonacci = memoize(fibonacci);
```

we can use `memoize()` in many other situations

-   GCD(Greatest Common Divisor)

```js
var gcd = memoize(function (a, b) {
    var t;

    if (a < b) (t = b), (b = a), (a = t);

    while (b != 0) (t = b), (b = a % b), (a = t);

    return a;
});

gcd(27, 183); //=> 3
```

-   Factorial calculation

```js
var factorial = memoize(function (n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
});

factorial(5); //=> 120
```

Learn more about memoization:

-   [Memoization - Wikipedia](https://en.wikipedia.org/wiki/Memoization)

-   [Implementing Memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)

---

## converting-truthy-falsy-values-to-boolean/

---

---

You can convert a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) or [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value to true boolean with the `!!` operator.

```js
!!''; // false

!!0; // false

!!null; // false

!!undefined; // false

!!NaN; // false

!!'hello'; // true

!!1; // true

!!{}; // true

!![]; // true
```

---

## avoid-modifying-or-passing-arguments-into-other-functions-it-kills-optimization/

---

---

### Background

Within JavaScript functions, the variable name [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) lets you access all of the arguments passed to the function. `arguments` is an _array-like object_; `arguments` can be accessed using array notation, and it has the _length_ property, but it doesn't have many of the built-in methods that arrays have such as `filter` and `map` and `forEach`. Because of this, it is a fairly common practice to convert `arguments` into an array using the following:

```js
var args = Array.prototype.slice.call(arguments);
```

This calls the `slice` method from the `Array` prototype, passing it `arguments`; the `slice` method returns a shallow copy of `arguments` as a new array object. A common shorthand for this is :

```js
var args = [].slice.call(arguments);
```

In this case, instead of calling `slice` from the `Array` prototype, it is simply being called from an empty array literal.

### Optimization

Unfortunately, passing `arguments` into any function call will cause the V8 JavaScript engine used in Chrome and Node to skip optimization on the function that does this, which can result in considerably slower performance. See this article on [optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers). Passing `arguments` to any other function is known as _leaking `arguments`_.

Instead, if you want an array of the arguments that lets you use you need to resort to this:

```js
var args = new Array(arguments.length);

for (var i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
}
```

### Yes it is more verbose, but in production code, it is worth it for the performance optimization

## map-to-the-rescue-adding-order-to-object-properties/

---

---

### Object properties order

> An object is a member of the type Object. It is an unordered collection of properties each of which contains a primitive value, object, or function. A function stored in a property of an object is called a method. [ECMAScript](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf)

Take a look in action

```js

var myObject = {

 z: 1,

 '@': 2,

 b: 3,

 1: 4,

 5: 5

};

console.log(myObject) // Object {1: 4, 5: 5, z: 1, @: 2, b: 3}



for (item in myObject) {...

// 1

// 5

// z

// @

// b

```

Each browser have his own rules about the order in objects bebause technically, order is unspecified.

### How to solve this?

#### Map

Using a new ES6 feature called Map. A [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object iterates its elements in insertion order — a `for...of` loop returns an array of \[key, value] for each iteration.

```js

var myObject = new Map();

myObject.set('z', 1);

myObject.set('@', 2);

myObject.set('b', 3);

for (var [key, value] of myObject) {

  console.log(key, value);

...

// z 1

// @ 2

// b 3

```

#### Hack for old browsers

Mozilla suggest:

> So, if you want to simulate an ordered associative array in a cross-browser environment, you are forced to either use two separate arrays (one for the keys and the other for the values), or build an array of single-property objects, etc.

```js

// Using two separate arrays

var objectKeys = [z, @, b, 1, 5];

for (item in objectKeys) {

 myObject[item]

...



// Build an array of single-property objects

var myData = [{z: 1}, {'@': 2}, {b: 3}, {1: 4}, {5: 5}];

```

---

## create-range-0...n-easily-using-one-line/

---

---

Here are two compact code sequences to generate the `N`-element array `[0, 1, ..., N-1]`:

#### Solution 1 (requires ES5)

```js
Array.apply(null, { length: N }).map(Function.call, Number);
```

**Brief explanation**

1. `Array.apply(null, {length: N})` returns an `N`-element array filled with `undefined` (i.e. `A = [undefined, undefined, ...]`).

2. `A.map(Function.call, Number)` returns an `N`-element array, whose index `I` gets the result of `Function.call.call(Number, undefined, I, A)`

3. `Function.call.call(Number, undefined, I, A)` collapses into `Number(I)`, which is naturally `I`.

4. Result: `[0, 1, ..., N-1]`.

For a more thorough explanation, go [here](https://github.com/gromgit/jstips-xe/blob/master/tips/33.md).

#### Solution 2 (requires ES6)

It uses `Array.from` [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

```js
Array.from(new Array(N), (val, index) => index);
```

#### Solution 3 (requires ES6)

```js
Array.from(Array(N).keys());
```

**Brief explanation**

1. `A = new Array(N)` returns an array with `N` _holes_ (i.e. `A = [,,,...]`, but `A[x] = undefined` for `x` in `0...N-1`).

2. `F = (val,index)=>index` is simply `function F (val, index) { return index; }`

3. `Array.from(A, F)` returns an `N`-element array, whose index `I` gets the results of `F(A[I], I)`, which is simply `I`.

4. Result: `[0, 1, ..., N-1]`.

#### One More Thing

If you actually want the sequence \[1, 2, ..., N], **Solution 1** becomes:

```js
Array.apply(null, { length: N }).map(function (value, index) {
    return index + 1;
});
```

and **Solution 2**:

```js
Array.from(new Array(N), (val, index) => index + 1);
```

---

## implementing-asynchronous-loops/

---

---

Let's try out writing an asynchronous function which prints the value of the loop index every second.

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * (i + 1));
}
```

The output of the above programs turns out to be

```js

> 5

> 5

> 5

> 5

> 5

```

So this definitely doesn't work.

**Reason**

Each timeout refers to the original `i`, not a copy. So the for loop increments `i` until it gets to 5, then the timeouts run and use the current value of `i` (which is 5).

Well , this problem seems easy. An immediate solution that strikes is to cache the loop index in a temporary variable.

```js
for (var i = 0; i < 5; i++) {
    var temp = i;

    setTimeout(function () {
        console.log(temp);
    }, 1000 * (i + 1));
}
```

But again the output of the above programs turns out to be

```js

> 4

> 4

> 4

> 4

> 4

```

So , that doesn't work either , because blocks don't create a scope and variables initializers are hoisted to the top of the scope. In fact, the previous block is the same as:

```js
var temp;

for (var i = 0; i < 5; i++) {
    temp = i;

    setTimeout(function () {
        console.log(temp);
    }, 1000 * (i + 1));
}
```

**Solution**

There are a few different ways to copy `i`. The most common way is creating a closure by declaring a function and passing `i` as an argument. Here we do this as a self-calling function.

```js
for (var i = 0; i < 5; i++) {
    (function (num) {
        setTimeout(function () {
            console.log(num);
        }, 1000 * (i + 1));
    })(i);
}
```

In JavaScript, arguments are passed by value to a function. So primitive types like numbers, dates, and strings are basically copied. If you change them inside the function, it does not affect the outside scope. Objects are special: if the inside function changes a property, the change is reflected in all scopes.

Another approach for this would be with using `let`. With ES6 the `let` keyword is useful since it's block scoped unlike `var`

```js
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * (i + 1));
}
```

---

## assignment-shorthands/

---

---

Assigning is very common. Sometimes typing becomes time consuming for us 'Lazy programmers'. So, we can use some tricks to help us and make our code cleaner and simpler.

This is the similar use of

```javascript
x += 23; // x = x + 23;

y -= 15; // y = y - 15;

z *= 10; // z = z * 10;

k /= 7; // k = k / 7;

p %= 3; // p = p % 3;

d **= 2; // d = d ** 2;

m >>= 2; // m = m >> 2;

n <<= 2; // n = n << 2;

n++; // n = n + 1;

n--;
n = n - 1;
```

#### `++` and `--` operators

There is a special `++` operator. It's best to explain it with an example:

```javascript
var a = 2;

var b = a++;

// Now a is 3 and b is 2
```

The `a++` statement does this:

1. return the value of `a`

2. increment `a` by 1

But what if we wanted to increment the value first? It's simple:

```javascript
var a = 2;

var b = ++a;

// Now both a and b are 3
```

See? I put the operator _before_ the variable.

The `--` operator is similar, except it decrements the value.

#### If-else (Using ternary operator)

This is what we write on regular basis.

```javascript
var newValue;

if (value > 10) newValue = 5;
else newValue = 2;
```

We can user ternary operator to make it awesome:

```javascript
var newValue = value > 10 ? 5 : 2;
```

#### Null, Undefined, Empty Checks

```javascript
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
    var variable2 = variable1;
}
```

Shorthand here:

```javascript
var variable2 = variable1 || '';
```

P.S.: If variable1 is a number, then first check if it is 0.

#### Object Array Notation

Instead of using:

```javascript
var a = new Array();

a[0] = 'myString1';

a[1] = 'myString2';
```

Use this:

```javascript
var a = ['myString1', 'myString2'];
```

#### Associative array

Instead of using:

```javascript
var skillSet = new Array();

skillSet['Document language'] = 'HTML5';

skillSet['Styling language'] = 'CSS3';
```

Use this:

```javascript
var skillSet = {
    'Document language': 'HTML5',

    'Styling language': 'CSS3'
};
```

---

## observe-dom-changes/

---

---

[MutationObserver](https://developer.mozilla.org/en/docs/Web/API/MutationObserver) is a solution to listen DOM changes and do what you want to do with elements when they changed. In following example there is some emulation of dynamic content loading with help of timers, after first "target" element creation goes "subTarget". In extension code firstly rootObserver works till targetElement appearance then elementObserver starts. This cascading observing helps finally get moment when subTargetElement found. This useful to develop extensions to complex sites with dynamic content loading.

```js
const observeConfig = {
    attributes: true,

    childList: true,

    characterData: true,

    subtree: true
};

function initExtension(rootElement, targetSelector, subTargetSelector) {
    var rootObserver = new MutationObserver(function (mutations) {
        console.log('Inside root observer');

        targetElement = rootElement.querySelector(targetSelector);

        if (targetElement) {
            rootObserver.disconnect();

            var elementObserver = new MutationObserver(function (mutations) {
                console.log('Inside element observer');

                subTargetElement = targetElement.querySelector(subTargetSelector);

                if (subTargetElement) {
                    elementObserver.disconnect();

                    console.log('subTargetElement found!');
                }
            });

            elementObserver.observe(targetElement, observeConfig);
        }
    });

    rootObserver.observe(rootElement, observeConfig);
}

(function () {
    initExtension(document.body, 'div.target', 'div.subtarget');

    setTimeout(function () {
        del = document.createElement('div');

        del.innerHTML = "<div class='target'>target</div>";

        document.body.appendChild(del);
    }, 3000);

    setTimeout(function () {
        var el = document.body.querySelector('div.target');

        if (el) {
            del = document.createElement('div');

            del.innerHTML = "<div class='subtarget'>subtarget</div>";

            el.appendChild(del);
        }
    }, 5000);
})();
```

---

## deduplicate-an-array/

---

---
