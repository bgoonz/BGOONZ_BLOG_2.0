---
title: Web Interview 4
weight: 0
excerpt: Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.
seo:
    title: 'Web Interview 4'
    description: 'Inserting an item into an existing array is a daily common task. You can add elements to the end of an array using push, to the beginning using unshift, or to the middle using splice.'
    robots: []
    extra: []
template: docs
---

### Using conditional breakpoints to log data

If you wanted to log to the console a value each time a function is called, you can use conditional break points to do this. Open up your dev tools, find the function where you'd like to log data to the console and set a breakpoint with the following condition:

```js
console.log(data.value) && false;
```

A conditional breakpoint pauses the page thread only if the condition for the breakpoint evaluates to true. So by using a condition like console.log('foo') && false it's guaranteed to evaluate to false since you're putting the literal false in the AND condition. So this will not pause the page thread when it's hit, but it will log data to the console. This can also be used to count how many times a function or callback is called.

Here's how you can set a conditional breakpoint in [Edge](https://dev.windows.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/debugger/#setting-and-managing-breakpoints), [Chrome](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints), [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_conditional_breakpoint) and [Safari](https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Debugger/Debugger.html).

### Printing a function variable to console

Have you ever logged a function variable to the console and weren't able to just view the function's code? The quickest way to see the function's code is to coerce it to a string using concatenation with an empty string.

```js
console.log(funcVariable + '');
```

---

## DOM-event-listening-made-easy/

---

---

Many of us are still doing these things:

-   `element.addEventListener('type', obj.method.bind(obj))`

-   `element.addEventListener('type', function (event) {})`

-   `element.addEventListener('type', (event) => {})`

The above examples all create new anonymous event handlers that can't be removed when no longer needed. This may cause performance problems or unexpected logic bugs, when handlers that you no longer need still get accidentally triggered through unexpected user interactions or [event bubbling](http://www.javascripter.net/faq/eventbubbling.htm).

Safer event-handling patterns include the following:

Use a reference:

```js
const handler = function () {
    console.log('Tada!');
};

element.addEventListener('click', handler);

// Later on

element.removeEventListener('click', handler);
```

Named function that removes itself:

```js
element.addEventListener('click', function click(e) {
    if (someCondition) {
        return e.currentTarget.removeEventListener('click', click);
    }
});
```

A better approach:

```js
function handleEvent(eventName, { onElement, withCallback, useCapture = false } = {}, thisArg) {
    const element = onElement || document.documentElement;

    function handler(event) {
        if (typeof withCallback === 'function') {
            withCallback.call(thisArg, event);
        }
    }

    handler.destroy = function () {
        return element.removeEventListener(eventName, handler, useCapture);
    };

    element.addEventListener(eventName, handler, useCapture);

    return handler;
}

// Anytime you need

const handleClick = handleEvent('click', {
    onElement: element,

    withCallback: (event) => {
        console.log('Tada!');
    }
});

// And anytime you want to remove it

handleClick.destroy();
```

---

## return-values-with-the-new-operator/

---

---

You're going to run into some instances where you'll be using `new` to allocate new objects in JavaScript. It's going to blow your mind unless you read this tip to understand what's happening behind the scenes.

The `new` operator in JavaScript is an operator that, under reasonable circumstances, returns a new instance of an object. Let's say we have a constructor function:

```js
function Thing() {
    this.one = 1;

    this.two = 2;
}

var myThing = new Thing();

myThing.one; // 1

myThing.two; // 2
```

**Note**: `this` refers to the new object created by `new`. Otherwise if `Thing()` is called without `new`, **no object is created**, and `this` is going to point to the global object, which is `window`. This means that:

1. You'll suddenly have two new global variables named `one` and `two`.

2. `myThing` is now undefined, since nothing is returned in `Thing()`.

Now that you get that example, here's where things get a little bit wonky. Let's say I add something to the constructor function, a little SPICE:

```js
function Thing() {
    this.one = 1;

    this.two = 2;

    return 5;
}

var myThing = new Thing();
```

Now, what does myThing equal? Is it 5? is it an object? Is it my crippled sense of self-worth? The world may never know!

Except the world does know:

```js
myThing.one; // 1

myThing.two; // 2
```

Interestingly enough, we never actually see the five that we supposedly 'returned' from our constructor. That's weird, isn't it? What are you doing function? WHERE'S THE FIVE? Let's try it with something else.

Let's return a non-primitive type instead, something like an object.

```js
function Thing() {
    this.one = 1;

    this.two = 2;

    return {
        three: 3,

        four: 4
    };
}

var myThing = new Thing();
```

Let's check it out. A quick console.log reveals all:

```js
console.log(myThing);

/*

  Object {three: 3, four: 4}

  What happened to this.one and this.two!?

  They've been stomped, my friend.

*/
```

**Here's where we learn:** When you invoke a function with the `new` keyword, you can set properties on it using the keyword `this` (but you probably already knew that). Returning a primitive value from a function you called with the `new` keyword will not return the value you specified, but instead will return the `this` instance of the function (the one you put properties on, like `this.one = 1;`).

However, returning a non-primitive, like an `object`, `array`, or `function` will stomp on the `this` instance, and return that non-primitive instead, effectively ruining all the hard work you did assigning everything to `this`.

---

## get-file-extension/

---

---

#### Question: How to get the file extension?

```javascript
var file1 = '50.xsl';

var file2 = '30.doc';

getFileExtension(file1); //returs xsl

getFileExtension(file2); //returs doc

function getFileExtension(filename) {
    /*TODO*/
}
```

#### Solution 1: Regular Expression

```js
function getFileExtension1(filename) {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
}
```

#### Solution 2: String `split` method

```js
function getFileExtension2(filename) {
    return filename.split('.').pop();
}
```

Those two solutions couldnot handle some edge cases, here is another more robust solution.

#### Solution3: String `slice`, `lastIndexOf` methods

```js
function getFileExtension3(filename) {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}

console.log(getFileExtension3('')); // ''

console.log(getFileExtension3('filename')); // ''

console.log(getFileExtension3('filename.txt')); // 'txt'

console.log(getFileExtension3('.hiddenfile')); // ''

console.log(getFileExtension3('filename.with.many.dots.ext')); // 'ext'
```

_How does it works?_

-   [String.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) method returns the last occurrence of the specified value (`'.'` in this case). Returns `-1` if the value is not found.

-   The return values of `lastIndexOf` for parameter `'filename'` and `'.hiddenfile'` are `-1` and `0` respectively. [Zero-fill right shift operator (>>>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_%28Zero-fill_right_shift%29) will transform `-1` to `4294967295` and `-2` to `4294967294`, here is one trick to insure the filename unchanged in those edge cases.

-   [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) extracts file extension from the index that was calculated above. If the index is more than the length of the filename, the result is `""`.

#### Comparison

| Solution | Paramters | Results |

| ----------------------------------------- | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------: |

| Solution 1: Regular Expression | <p>''<br>'filename'<br>'filename.txt'<br>'.hiddenfile'<br>'filename.with.many.dots.ext'</p> | <p>undefined<br>undefined<br>'txt'<br>'hiddenfile'<br>'ext'<br>

</p> |

| Solution 2: String `split` | <p>''<br>'filename'<br>'filename.txt'<br>'.hiddenfile'<br>'filename.with.many.dots.ext'</p> | <p>''<br>'filename'<br>'txt'<br>'hiddenfile'<br>'ext'<br>

</p>    |

| Solution 3: String `slice`, `lastIndexOf` | <p>''<br>'filename'<br>'filename.txt'<br>'.hiddenfile'<br>'filename.with.many.dots.ext'</p> | <p>''<br>''<br>'txt'<br>''<br>'ext'<br>

</p>             |

#### Live Demo and Performance

[Here](https://jsbin.com/tipofu/edit?js,console) is the live demo of the above codes.

[Here](http://jsperf.com/extract-file-extension) is the performance test of those 3 solutions.

#### Source

[How can I get file extensions with JavaScript](http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript)

---

## use-optional-arguments/

---

---

Example function where arguments 2 and 3 are optional

```javascript
function example(err, optionalA, optionalB, callback) {
    // retrieve arguments as array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
    }

    // first argument is the error object

    // shift() removes the first item from the

    // array and returns it

    err = args.shift();

    // if last argument is a function then its the callback function.

    // pop() removes the last item in the array

    // and returns it

    if (typeof args[args.length - 1] === 'function') {
        callback = args.pop();
    }

    // if args still holds items, these are

    // your optional items which you could

    // retrieve one by one like this:

    if (args.length > 0) optionalA = args.shift();
    else optionalA = null;

    if (args.length > 0) optionalB = args.shift();
    else optionalB = null;

    // continue as usual: check for errors

    if (err) {
        return callback && callback(err);
    }

    // for tutorial purposes, log the optional parameters

    console.log('optionalA:', optionalA);

    console.log('optionalB:', optionalB);

    console.log('callback:', callback);

    /* do your thing */
}

// ES6 with shorter, more terse code

function example(...args) {
    // first argument is the error object

    const err = args.shift();

    // if last argument is a function then its the callback function

    const callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;

    // if args still holds items, these are your optional items which you could retrieve one by one like this:

    const optionalA = args.length > 0 ? args.shift() : null;

    const optionalB = args.length > 0 ? args.shift() : null;

    // ... repeat for more items

    if (err && callback) return callback(err);

    /* do your thing */
}

// invoke example function with and without optional arguments

example(null, 'AA');

example(null, function (err) {
    /* do something */
});

example(null, 'AA', function (err) {});

example(null, 'AAAA', 'BBBB', function (err) {});
```

#### How do you determine if optionalA or optionalB is intended?

Design your function to require optionalA in order to accept optionalB

---

## make-easy-loop-on-array/

---

---

Sometimes, we need to loop endlessly over an array of items, like a carousel of images or an audio playlist. Here's how to take an array and give it "looping powers":

```js
var aList = ['A', 'B', 'C', 'D', 'E'];

function make_looper(arr) {
    arr.loop_idx = 0;

    // return current item

    arr.current = function () {
        if (this.loop_idx < 0) {
            // First verification

            this.loop_idx = this.length - 1; // update loop_idx
        }

        if (this.loop_idx >= this.length) {
            // second verification

            this.loop_idx = 0; // update loop_idx
        }

        return arr[this.loop_idx]; //return item
    };

    // increment loop_idx AND return new current

    arr.next = function () {
        this.loop_idx++;

        return this.current();
    };

    // decrement loop_idx AND return new current

    arr.prev = function () {
        this.loop_idx--;

        return this.current();
    };
}

make_looper(aList);

aList.current(); // -> A

aList.next(); // -> B

aList.next(); // -> C

aList.next(); // -> D

aList.next(); // -> E

aList.next(); // -> A

aList.pop(); // -> E

aList.prev(); // -> D

aList.prev(); // -> C

aList.prev(); // -> B

aList.prev(); // -> A

aList.prev(); // -> D
```

Using the `%` ( Modulus ) operator is prettier.The modulus return division's rest ( `2 % 5 = 1` and `5 % 5 = 0`):

```js
var aList = ['A', 'B', 'C', 'D', 'E'];

function make_looper(arr) {
    arr.loop_idx = 0;

    // return current item

    arr.current = function () {
        this.loop_idx = this.loop_idx % this.length; // no verification !!

        return arr[this.loop_idx];
    };

    // increment loop_idx AND return new current

    arr.next = function () {
        this.loop_idx++;

        return this.current();
    };

    // decrement loop_idx AND return new current

    arr.prev = function () {
        this.loop_idx += this.length - 1;

        return this.current();
    };
}

make_looper(aList);

aList.current(); // -> A

aList.next(); // -> B

aList.next(); // -> C

aList.next(); // -> D

aList.next(); // -> E

aList.next(); // -> A

aList.pop(); // -> E

aList.prev(); // -> D

aList.prev(); // -> C

aList.prev(); // -> B

aList.prev(); // -> A

aList.prev(); // -> D
```

---

## copy-to-clipboard/

---

---

This is a simple tip, this week I had to create a common "Copy to Clipboard" button, I've never created one before and I want to share how I made it. It's easy, the bad thing is that we must add an `<input/>` with the text to be copied to the DOM. Then, we selected the content and execute the copy command with [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand). `execCommand('copy')` will copy the actual selected content.

Also, this command that now is [supported](http://caniuse.com/#search=execCommand) by all the latest version of browsers, allows us to execute another system commands like `copy`, `cut`, `paste`, and make changes like fonts color, size, and much more.

```js
document.querySelector('#input').select();

document.execCommand('copy');
```

**Playground**

[JS Bin on jsbin.com](http://jsbin.com/huhozu/embed?js,output)

---

## comma-operaton-in-js/

---

---

Apart from being just a delimiter, the comma operator allows you to put multiple statements in a place where one statement is expected. Eg:-

```js
for (var i = 0, j = 0; i < 5; i++, j++, j++) {
    console.log('i:' + i + ', j:' + j);
}
```

Output:-

```js

i:0, j:0

i:1, j:2

i:2, j:4

i:3, j:6

i:4, j:8

```

When placed in an expression, it evaluates every expression from left to right and returns the right most expression.

Eg:-

```js
function a() {
    console.log('a');
    return 'a';
}

function b() {
    console.log('b');
    return 'b';
}

function c() {
    console.log('c');
    return 'c';
}

var x = (a(), b(), c());

console.log(x); // Outputs "c"
```

Output:-

```js
'a';

'b';

'c';

'c';
```

-   Note: The comma(`,`) operator has the lowest priority of all javascript operators, so without the parenthesis the expression would become: `(x = a()), b(), c();`.

**Playground**

[JS Bin on jsbin.com](http://jsbin.com/vimogap/embed?js,console)

---

## break-continue-loop-functional/

---

---

A common requirement of iteration is cancelation. Using `for` loops we can `break` to end iteration early.

```javascript
const a = [0, 1, 2, 3, 4];

for (var i = 0; i < a.length; i++) {
    if (a[i] === 2) {
        break; // stop the loop
    }

    console.log(a[i]);
}

//> 0, 1
```

Another common requirement is to close over our variables.

A quick approach is to use `.forEach` but then we lack the ability to `break`. In this situation the closest we get is `continue` functionality through `return`.

```javascript
[0, 1, 2, 3, 4].forEach(function (val, i) {
    if (val === 2) {
        // how do we stop?

        return true;
    }

    console.log(val); // your code
});

//> 0, 1, 3, 4
```

The `.some` is a method on Array prototype. It tests whether some element in the array passes the test implemented by the provided function. If any value is returning true, then it stops executing. Here is a [MDN link](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some) for more details.

An example quoted from that link

```javascript
const isBiggerThan10 = (numb) => numb > 10;

[2, 5, 8, 1, 4].some(isBiggerThan10); // false

[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

Using `.some` we get iteration functionally similar to `.forEach` but with the ability to `break` through `return` instead.

```javascript
[0, 1, 2, 3, 4].some(function (val, i) {
    if (val === 2) {
        return true;
    }

    console.log(val); // your code
});

//> 0, 1
```

You keep returning `false` to make it `continue` to next item. When you return `true`, the loop will `break` and `a.some(..)` will `return` `true`.

```javascript
// Array contains 2

const isTwoPresent = [0, 1, 2, 3, 4].some(function (val, i) {
    if (val === 2) {
        return true; // break
    }
});

console.log(isTwoPresent);

//> true
```

Also there is `.every`, which can be used. We have to return the opposite boolean compared to `.some`.

**Playground**

[JS Bin on jsbin.com](http://jsbin.com/jopeji/embed?js,console)

---

## keyword-var-vs-let/

---

---

#### Overview

-   The scope of a variable defined with `var` is function scope or declared outside any function, global.

-   The scope of a variable defined with `let` is block scope.

```js
function varvslet() {
    console.log(i); // i is undefined due to hoisting

    // console.log(j); // ReferenceError: j is not defined

    for (var i = 0; i < 3; i++) {
        console.log(i); // 0, 1, 2
    }

    console.log(i); // 3

    // console.log(j); // ReferenceError: j is not defined

    for (let j = 0; j < 3; j++) {
        console.log(j);
    }

    console.log(i); // 3

    // console.log(j); // ReferenceError: j is not defined
}
```

#### Difference Details

-   Variable Hoisting

    `let` will not hoist to the entire scope of the block they appear in. By contrast, `var` could hoist as below.

```js
{
    console.log(c); // undefined. Due to hoisting

    var c = 2;
}

{
    console.log(b); // ReferenceError: b is not defined

    let b = 3;
}
```

-   Closure in Loop

    `let` in the loop can re-binds it to each iteration of the loop, making sure to re-assign it the value from the end of the previous loop iteration, so it can be used to avoid issue with closures.

```js
for (var i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log(i); // output '5' 5 times
    }, 100);
}
```

After replacing `var` with `let`

```js
// print 1, 2, 3, 4, 5

for (let i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log(i); // output 0, 1, 2, 3, 4
    }, 100);
}
```

#### Should I replace `var` with `let`?

> NO, `let` is the new block scoping `var`. That statement emphasizes that `let` should replace `var` only when `var` was already signaling block scoping stylistically. Otherwise, leave `var` alone. `let` improves scoping options in JS, not replaces. `var` is still a useful signal for variables that are used throughout the function.

#### `let` compatibility

-   In server side, such as Node.js, you can safely use the `let` statement now.

-   In client side, through a transpiler (like [Traceur](https://github.com/google/traceur-compiler)), you can safely use the `let` statement. Otherwise, please consider the browser support [here](http://caniuse.com/#search=let)

#### Playground

[JS Bin on jsbin.com](http://jsbin.com/yumaye/embed?js,console)

#### More info

-   [Let keyword vs var keyword](http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword)

-   [For and against let](https://davidwalsh.name/for-and-against-let)

-   [Explanation of `let` and block scoping with for loops](http://stackoverflow.com/questions/30899612/explanation-of-let-and-block-scoping-with-for-loops/30900289#30900289).

---

## three-useful-hacks/

---

---

**Getting array items from behind to front**

If you want to get the array items from behind to front, just do this:

```javascript
var newArray = [1, 2, 3, 4];

console.log(newArray.slice(-1)); // [4]

console.log(newArray.slice(-2)); // [3, 4]

console.log(newArray.slice(-3)); // [2, 3, 4]

console.log(newArray.slice(-4)); // [1, 2, 3, 4]
```

**Short-circuits conditionals**

If you have to execute a function just if a condition is `true`, like this:

```javascript
if (condition) {
    dosomething();
}
```

You can use a short-circuit just like this:

```javascript
condition && dosomething();
```

**Set variable default values using "||"**

If you have to set a default value to variables, you can simple do this:

```javascript
var a;

console.log(a); //undefined

a = a || 'default value';

console.log(a); //default value

a = a || 'new value';

console.log(a); //default value
```

---

## binding-objects-to-functions/

---

---

More than often, we need to bind an object to a function's this object. JS uses the bind method when this is specified explicitly and we need to invoke desired method.

#### Bind syntax

```js

fun.bind(thisArg[, arg1[, arg2[, ...]]])

```

### Parameters

**thisArg**

`this` parameter value to be passed to target function while calling the `bound` function.

**arg1, arg2, ...**

Prepended arguments to be passed to the `bound` function while invoking the target function.

**Return value**

A copy of the given function along with the specified `this` value and initial arguments.

#### Bind method in action in JS

```js
const myCar = {
    brand: 'Ford',

    type: 'Sedan',

    color: 'Red'
};

const getBrand = function () {
    console.log(this.brand);
};

const getType = function () {
    console.log(this.type);
};

const getColor = function () {
    console.log(this.color);
};

getBrand(); // object not bind,undefined

getBrand(myCar); // object not bind,undefined

getType.bind(myCar)(); // Sedan

let boundGetColor = getColor.bind(myCar);

boundGetColor(); // Red
```

---

---

---

In case of established websocket connection, server or firewall could timeout and terminate the connection after a period of inactivity. To deal with this situation, we send periodic message to the server. To control the timeout we will add two functions in our code : one to make sure connection keep alive and another one to cancel the keep alive. Also we need a common `timerID` variable. Let's have a look on implementation-

```js
var timerID = 0;

function keepAlive() {
    var timeout = 20000;

    if (webSocket.readyState == webSocket.OPEN) {
        webSocket.send('');
    }

    timerId = setTimeout(keepAlive, timeout);
}

function cancelKeepAlive() {
    if (timerId) {
        clearTimeout(timerId);
    }
}
```

Now as we have both of our desired function for the task, we will place `keepAlive()` function at the end of `onOpen()` method of websocket connection and `cancelKeepAlive()` function at the end of `onClose()` method of websocket connection.

Yes! We have perfectly implemented hack for websocket timeout problem.

---

## ```

-   en

-   javascript

````

---

Arrays are everywhere in JavaScript and with the new [spread operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) introduced in ECMAScript 6, you can do awesome things with them. In this post I will show you 3 useful tricks you can use when programming.

#### 1. Iterating through an empty array

JavaScript arrays are sparse in nature in that there are a lot of holes in them. Try creating an array using the Array's constructor and you will see what I mean.

```javascript

> const arr = new Array(4);

[undefined, undefined, undefined, undefined]

````

You may find that iterating over a sparse array to apply a certain transformation is hard.

```javascript

> const arr = new Array(4);

> arr.map((elem, index) => index);

[undefined, undefined, undefined, undefined]

```

To solve this, you can use `Array.apply` when creating the array.

```javascript

> const arr = Array.apply(null, new Array(4));

> arr.map((elem, index) => index);

[0, 1, 2, 3]

```

#### 2. Passing an empty parameter to a method

If you want to call a method and ignore one of its parameters, then JavaScript will complain if you keep it empty.

```javascript

> method('parameter1', , 'parameter3');

Uncaught SyntaxError: Unexpected token ,

```

A workaround that people usually resort to is to pass either `null` or `undefined`.

```javascript

> method('parameter1', null, 'parameter3') // or

> method('parameter1', undefined, 'parameter3');

```

I personally don't like using `null` since JavaScript treats it as an object and that's just weird. With the introduction of spread operators in ES6, there is a neater way of passing empty parameters to a method. As previously mentioned, arrays are sparse in nature and so passing empty values to it is totally okay. We'll use this to our advantage.

```javascript

> method(...['parameter1', , 'parameter3']); // works!

```

#### 3. Unique array values

I always wonder why the Array constructor does not have a designated method to facilitate the use of unique array values. Spread operators are here for the rescue. Use spread operators with the `Set` constructor to generate unique array values.

```javascript

> const arr = [...new Set([1, 2, 3, 3])];

[1, 2, 3]

```

---

tip-md-link: https://github.com/loverajoel/jstips/blob/master/\_posts/en/javascript/2017-03-16-tapping-for-quick-debugging.md

---

---

This little beastie here is tap. A really useful function for quick-debugging chains of function calls, anonymous functions and, actually, whatever you just want to print.

```javascript
function tap(x) {
    console.log(x);

    return x;
}
```

Why would you use instead of good old `console.log`? Let me show you an example:

```javascript
bank_totals_by_client(bank_info(1, banks), table)
    .filter((c) => c.balance > 25000)

    .sort((c1, c2) => (c1.balance <= c2.balance ? 1 : -1))

    .map((c) => console.log(`${c.id} | ${c.tax_number} (${c.name}) => ${c.balance}`));
```

Now, suppose you're getting nothing from this chain (possibly an error). Where is it failing? Maybe `bank_info` isn't returning anything, so we'll tap it:

```javascript
bank_totals_by_client(tap(bank_info(1, banks)), table);
```

Depending on our particular implementation, it might print something or not. I'll assume the information that we got from our tapping was correct and therefore, bank_info isn't causing anything.

We must then move on to the next chain, filter.

```javascript

            .filter(c => tap(c).balance > 25000)

```

Are we receiving any c's (clients actually)? If so, then bank_totals_by_client works alright. Maybe it's the condition within the filter?

```javascript

            .filter(c => tap(c.balance > 25000))

```

Ah! Sweet, we see nothing but `false` printed, so there's no client with >25000, that's why the function was returning nothing.

### (Bonus) A more advanced tap

```javascript
function tap(x, fn = (x) => x) {
    console.log(fn(x));

    return x;
}
```

Now we're talking about a more advanced beast, what if we wanted to perform a certain operation _prior_ to tapping? i.e, we want to access a certain object property, perform a logical operation, etc. with our tapped object? Then we call old good tap with an extra argument, a function to be applied at the moment of tapping.

```javascript
tap(3, (x) => x + 2) === 3; // prints 5, but expression evaluates to true, why :-)?
```

---

tip-md-link: https://github.com/loverajoel/jstips/blob/master/\_posts/en/javascript/2017-03-29-recursion-iteration-and-tail-calls-in-js.md

---

---

If you've been on the business for some time, you have, most likely, come across the definition of recursion, for which the factorial of a given number `n! = n * (n - 1) * ... * 1` is a standard example.

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

The example shown above is but the most naive implementation of the factorial function.

For the sake of completeness, let's look at how this executes for `n = 6`:

-   factorial(6)

    -   6 \* factorial(5)

        -   5 \* factorial (4)

            -   4 \* factorial(3)

                -   3 \* factorial(2)

                    -   2 \* factorial(1)

                        -   1 \* factorial(0)

                            -   1

                        -   (resuming previous execution) 1 \* 1 = 1

                    -   (resuming...) 2 \* 1 = 2

                -   (...) 3 \* 2 = 6

            -   ... 4 \* 6 = 24

        -   5 \* 24 = 120

    -   6 \* 120 = 720

-   factorial(6) = 720

Now, we must be very cautious as to what's happening so we can understand what is to come next.

When we invoke a function, several things happen at once. The location to which we must return to after calling the function is saved, along with the information of the current frame (i.e, the value of n). Then space is allocated for the new function and a new frame is born.

This goes on and on, we keep stacking these frames and then we unwind that stack, replacing function calls with values returned by them.

Another thing to notice is the shape of the process generated by our function. You might not be surprised if I call this shape _recursive_. We have, thus, a _recursive process_.

Let's take a look at a second implementation of this function.

```javascript
function factorial(n, res) {
    if (n === 0) {
        return res;
    }

    return factorial(n - 1, res * n);
}
```

We can encapsulate functionality a bit further by defining an inner function.

```javascript
function factorial(n) {
    function inner_factorial(n, res) {
        if (n === 0) {
            return res;
        }

        return inner_factorial(n - 1, res * n);
    }

    return inner_factorial(n, 1);
}
```

Let's take a look at how this gets executed:

-   factorial(6)

    -   inner anonymous function (iaf) gets called with (n = 6, res = 1)

        -   iaf(5, 1 \* 6)

            -   iaf(4, 6 \* 5)

                -   iaf(3, 30 \* 4)

                    -   iaf(2, 120 \* 3)

                        -   iaf(1, 360 \* 2)

                            -   iaf(0, 720)

                                -   720

                            -   720

                        -   720

                    -   720

                -   720

            -   720

        -   720

    -   iaf (6, 1) = 720

-   factorial(6) = 720

You might notice that we didn't need to perform any calculation after unwinding the stack. We just returned a value. But, according to our rules, we had to save the state as a stack frame, even if it weren't of any use later in the chain.

Our rules, however, are not applied to every language out there. In fact, in Scheme it's mandatory for such chains to be optimized with tail call optimization. This ensures that our stack is not filled with unnecessary frames. Our previous calculation would look, thus, this way:

-   factorial(6)

-   iaf(6, 1)

-   iaf(5, 6)

-   iaf(4, 30)

-   iaf(3, 120)

-   iaf(2, 360)

-   iaf(1, 720)

-   iaf(0, 720)

-   720

Which in turns, looks an awfully lot like

```javascript
res = 1;

n = 6;

while (n > 1) {
    res = res * n;

    n--;
}
```

This means, we actually have an _iterative process_, even if we're using recursion. How cool is that?

The good news is, this is a feature in ES6. As long as your recursive call is in tail position and your function has strict mode, tail call optimization will kick in and save you from having a `maximum stack size exceeded` error.

UPDATE Dec 1, 2017: The only major browser with tail call optimization is Safari.1 V8 has an implentation2 but has not shipped it yet3 for the reasons listed.

1: https://kangax.github.io/compat-table/es6/#test-proper\_tail\_calls\_(tail\_call\_optimisation)

2: <https://bugs.chromium.org/p/v8/issues/detail?id=4698>

3: <https://v8project.blogspot.com/2016/04/es6-es7-and-beyond.html>

---

---

---

We all know that JavaScript is loosely typed and in some cases it fall behind specially when it comes to quality comparison with '==', comparing with '==' gives unexpected results due to whats called coercion or casting "converting one of the 2 operands to the other's type then compare".

```javascript
0 == ' '; //true

(null == undefined[1]) == //true
    true; //true
```

So they provided us with the triple equal operator '===' which is more strict and does not coerce operands, However comparing with '===' is not the best solution you can get:

```javascript
NaN === NaN; //false
```

The great news that in ES6 there is the new 'Object.is()' which is better and more precise it has the same features as '===' and moreover it behaves well in some special cases:

```javascript
Object.is(0, ' '); //false

Object.is(null, undefined); //false

Object.is([1], true); //false

Object.is(NaN, NaN); //true
```

Mozilla team doesn't think that Object.is is "stricter" than '===', they say that we should think of how this method deal with NaN, -0 and +0 but overall I think it is now a good practice in real applications.

Now this table illustrates..

![differences of operators in equality comparisons javascript](http://i.imgur.com/pCyqkLc.png)

### References

[Equality comparisons and sameness](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

---

---

Sometimes we need to whitelist certain attributes from an object, say we've got an array representation of a database table and we need to `select` just a few fields for some function:

```javascript
function pick(obj, keys) {
    return keys
        .map((k) => (k in obj ? { [k]: obj[k] } : {}))

        .reduce((res, o) => Object.assign(res, o), {});
}

const row = {
    'accounts.id': 1,

    'client.name': 'John Doe',

    'bank.code': 'MDAKW213'
};

const table = [row, { 'accounts.id': 3, 'client.name': 'Steve Doe', 'bank.code': 'STV12JB' }];

pick(row, ['client.name']); // Get client name

table.map((row) => pick(row, ['client.name'])); // Get a list of client names
```

There's a bit of skulduggery going on in pick. First, we `map` a function over the keys that will return, each time, an object with only the attribute pointed by the current key (or an empty object if there's no such attribute in the object). Then, we `reduce` this collection of single-attribute objects by merging the objects.

But what if we want to `reject` the attributes? Well, the function changes a bit

```javascript
function reject(obj, keys) {
    return Object.keys(obj)

        .filter((k) => !keys.includes(k))

        .map((k) => Object.assign({}, { [k]: obj[k] }))

        .reduce((res, o) => Object.assign(res, o), {});
}

// or, reusing pick

function reject(obj, keys) {
    const vkeys = Object.keys(obj).filter((k) => !keys.includes(k));

    return pick(obj, vkeys);
}

reject({ a: 2, b: 3, c: 4 }, ['a', 'b']); // => {c: 4}
```

---

---

---

You might have heard about the old ways gaining hype recently, and we don't mean praying to the gods of the north.

Functional programming is the rediscovered toy which is bringing some sanity to the world of mutable state and global bindings.

Today we're introducing a feature found in Clojure which allows you to define interfaces for your classes. Let's look at one-off implementation:

```javascript
const protocols = (...ps) => ps.reduce((c, p) => p(c), Object);

const Mappable = (klass) => {
    return class extends klass {
        map() {
            throw 'Not implemented';
        }
    };
};

const Foldable = (klass) => {
    return class extends klass {
        fold() {
            throw 'Not implemented';
        }
    };
};

class NaturalNumbers extends protocols(Mappable, Foldable) {
    constructor() {
        super();

        this.elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    map(f) {
        return this.elements.map(f);
    }

    fold(f) {
        return this.elements.reduce(f, this.elements, 0);
    }
}
```

Yes, we're building a chain of class inheritance up there with that reduce boy. It's pretty cool. We're doing it dynamically! You see, each protocol receives a base class (Object) and extends it somehow returning the new class. The idea is similar to that of interfaces.

We supply method signatures for the protocol and make sure we provide implementations for it on our base classes.

What's so cool about it? We get to write things like these:

```javascript
const map = (f) => (o) => o.map(f);

const fold = (f) => (o) => o.fold(f);

const compose = (...fns) => fns.reduce((acc, f) => (x) => acc(f(x)), id);
```

Ok, maybe we could have written those two functions without the above fuzz but, now that we know `NaturalNumbers` are `Mappable`, we can call `map` on them and trust it will return the right result. Furthermore, with our third function, we can _compose_ any number of operations defined in protocols cleanly:

```javascript
const plus1 = (x) => x + 1;

const div5 = (x) => x / 5;

const plus_then_div = compose(map(div5), map(plus1));

console.log(plus_then_div(new NaturalNumbers()));

// => [ 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2 ]
```

More important, if we know that an object of ours is `Mappable`, we know `map` will work on it. Protocols gives us an idea of what we can do with an object and help us abstract common operations between data types, thus reducing the overhead of dealing with a hundred functions.

### What is easier? To have a hundred functions for every different object or ten functions that work on a hundred objects?

---

---

> JS shall have but one Thread (in the browser at least)

>

> \-- Thus spoke the master programmer.

JS runs in a single thread in the browser, this is the truth.

Somewhere in its own universe, there exists a Queue which holds messages and functions associated with them.

Every time an event (i.e, a user clicks a button) is registered, there's a runtime check to see whether there's any listener attached to that event. If there's one, it will enqueue the message. Otherwise, it will be lost forever.

Now, our event loop processes one message at a time, meaning that if you do some CPU intensive operation (i.e, number crunching) this will indeed 'block' the one Thread, rendering our application useless.

This is true even for `async` functions, which will be queued as soon as invoked and executed as soon as possible (immediately given the queue is empty).

I/O such as requests to external resources are non-blocking though, so you can request a file as large as you want without fear. The associated callback, however, will show the same characteristics of an `async` function.

Strategies for processing lots of data vary a lot. You could partition data and set timeouts for processing bits of it a time for example. But to unleash the full power of asynchronous processing, you should use Web Workers.

To do so, you separate the processing part in a different file (possibly 'my_worker.js'), create a worker with `newWorker = new Worker('my_worker.js');` and offload the processing to it.

```javascript

// my_worker.js

const do_a_lot_of_processing = (data) => {

    ....

}



onmessage = (e) => {

    postMessage(do_a_lot_of_processing(e.data));

}



// main.js

const myWorker = new Worker('my_worker.js');



async function get_useful_data() {

    const raw_data = await request(some_url);

    myWorker.postmessage(raw_data);

}



const show_data => (e) {

    const data = e.data;

    ...

}



myWorker.onmessage(show_data);

get_useful_data();

```

### Your mileage may vary of course, and there are many abstractions that can be built upon this model

---

---

If you ever come across the likes of

```javascript
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log('i value is ' + i);
    };
}

for (var k = 0; k < 3; k++) {
    funcs[k]();
}
```

You will notice that the expected output of

```

i value is 0

i value is 1

i value is 2

```

Doesn't match the actual output which will resemble

```

i value is 3

i value is 3

i value is 3

```

This is because of how the capturing mechanism of closures work and how `i` is represented internally.

To solve this situation you can do as follows:

```javascript
for (var i = 0; i < 3; i++) {
    funcs[i] = (function (value) {
        console.log('i value is ' + i);
    })(i);
}
```

Which effectively copies i by value by handing it to our closure or

```javascript
for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log('i value is ' + i);
    };
}
```

Where `let` scopes the variable to our `for` loop and produces a new value each iteration, thus `i` will be bound to different values on our closures as expected.

---

---

---

Object cloning is a tricky, full of edge-cases, endeavor. The reason is simple enough. Objects maintain internal state, and that is much abused. There are countless techniques, or better phrased, countless derivations of the same technique.

Cloning an object is an indicator that your application is growing, and that you've got a complex object which you'd want to treat as an immutable value, i.e operate on it while maintaining a previous state.

If the object is in your control, you're lucky. A bit of refactoring here and there might lead you to a point where you avoid the problem entirely by rethinking your object's structure and behavior.

With the rediscovering of functional programming techniques, a myriad of debates have been held about immutable structures and how they offer exactly what you seek for. Mutable state is the root of all evil, some might argue.

We encourage to reach **ImmutableJS** by Facebook which provides a nice set of immutable structures free for use. By rethinking your object's inner workings and separating state from behavior, making each function consume a state to produce a new one - much like the Haskell's **State** monad - you will reduce many nuisances.

If the object is outside your control, you're partly out of luck. This can be circumvented by creating convoluted computations where you solve for yourself circular references and reach enlightenment. However, as you're using external objects anyways, and they must come, as their name says, from external sources, then you might be more comfortable handling the matter to yet another external library and focus on what matters the most, i.e, your application itself.

One such library is [pvorb/clone](https://github.com/pvorb/clone), which has a very simple API. To clone an object you only have to

```javascript
var clone = require('clone');

var a = { foo: { bar: 'baz' } };

var b = clone(a);

a.foo.bar = 'foo';

console.log(a); // {foo: {bar: 'foo'}}

console.log(b); // {foo: {bar: 'baz'}}
```

There are, of course, many more libraries that allow you to do the same such as [Ramda](http://ramdajs.com/docs/#clone), [lodash.clonedeep](https://www.npmjs.com/package/lodash.clonedeep) and [lodash.clone](https://www.npmjs.com/package/lodash.clone).

As an end note, if you are serious about dealing with immutable structures, you might want to check **ClojureScript** or (for those that feel that Haskell's worth a shot) **PureScript**.

### We neither encourage, nor condemn, the use of self made cloning mechanisms. Only noting that considerable work has been done on the area and that you'd probably be better of reusing than reinventing the wheel

---

---

## Looping over arrays

There's a few methods for looping over arrays in Javascript. We'll start with the classical ones and move towards additions made to the standard.

### while

```javascript
let index = 0;

const array = [1, 2, 3, 4, 5, 6];

while (index < array.length) {
    console.log(array[index]);

    index++;
}
```

### for (classical)

```javascript
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
```

### forEach

```javascript
const array = [1, 2, 3, 4, 5, 6];

array.forEach(function (current_value, index, array) {
    console.log(`At index ${index} in array ${array} the value is ${current_value}`);
});

// => undefined
```

### map

The last construct was useful, however, it doesn't return a new array which might be undesirable for your specific case. `map` solves this by applying a function over every element and then returning the new array.

```javascript
const array = [1, 2, 3, 4, 5, 6];

const square = (x) => Math.pow(x, 2);

const squares = array.map(square);

console.log(`Original array: ${array}`);

console.log(`Squared array: ${squares}`);
```

The full signature for `map` is `.map(current_value, index, array)`.

### reduce

From MDN:

> The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const array = [1, 2, 3, 4, 5, 6];

const sum = (x, y) => x + y;

const array_sum = array.reduce(sum, 0);

console.log(`The sum of array: ${array} is ${array_sum}`);
```

### filter

Filters elements on an array based on a boolean function.

```javascript
const array = [1, 2, 3, 4, 5, 6];

const even = (x) => x % 2 === 0;

const even_array = array.filter(even);

console.log(`Even numbers in array ${array}: ${even_array}`);
```

### every

Got an array and want to test if a given condition is met in every element?

```javascript
const array = [1, 2, 3, 4, 5, 6];

const under_seven = (x) => x < 7;

if (array.every(under_seven)) {
    console.log('Every element in the array is less than 7');
} else {
    console.log('At least one element in the array was bigger than 7');
}
```

### some

Test if at least one element matches our boolean function.

```javascript
const array = [1, 2, 3, 9, 5, 6, 4];

const over_seven = (x) => x > 7;

if (array.some(over_seven)) {
    console.log('At least one element bigger than 7 was found');
} else {
    console.log('No element bigger than 7 was found');
}
```

---

---

---

## Hash maps without side effects

When you want to use javascript object as a hash map(purely for storing data), you might want to create it as follows.

```javascript
const map = Object.create(null);
```

When creating a map using object literal(`const map = {}`), the map inherits properties from Object by default. It is equivalent to `Object.create(Object.prototype)`.

But by doing `Object.create(null)`, we explicitly specify `null` as its prototype. So it have absolutely no properties, not even constructor, toString, hasOwnProperty, etc. so you're free to use those keys in your data structure if you need to.

### Rationale

```javascript

const dirtyMap = {};

const cleanMap = Object.create(null);



dirtyMap.constructor    // function Object() { [native code] }



cleanMap.constructor    // undefined



// Iterating maps



const key;

for(key in dirtyMap){

  if (dirtyMap.hasOwnProperty(key)) {   // Check to avoid iterating over inherited properties.

    console.log(key + " -> " + dirtyMap[key]);

  }

}



for(key in cleanMap){

  console.log(key + " -> " + cleanMap[key]);    // No need to add extra checks, as the object will always be clean

}

```

### Notes

-   Object.create() was introduced in ES5: [Compatibility](http://kangax.github.io/compat-table/es5/)

-   ES6 introduced some new structures: [Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map), [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap), [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [Weak Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

---

---

---

## Creating immutable objects in native JavaScript

Javascript it's a flexible language, you can redefine anything. But when projects get complex we find problems with mutable data structures. With the latest versions of JavaScript this situation changed. Now it's possible to create immutable objects. I'll walk you through how to do it in three different ways.

#### Wait, what means immutable?

> Immutability in object means we don't want our objects to change in any ways once we create them i.e make them read-only type.

Let's suppose we need to define a car [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) and use its properties to perform operations throughout our entire project. We can't allow modifying by mistake any data.

```

const myTesla = {

 maxSpeed: 250,

 batteryLife: 300,

 weight: 023

};

```

### [Object.preventExtensions()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

This method prevents the addition of new properties to our existing object. `preventExtensions()` is a irreversible operation. We can never add extra properties to the object again.

```

Object.isExtensible(myTesla); // true

Object.preventExtensions(myTesla);

Object.isExtensible(myTesla); // false

myTesla.color = 'blue';

console.log(myTesla.color) // undefined

```

### [Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

It prevents additions or deletion of properties. `seal()` also prevents the modification of property descriptors.

```

Object.isSealed(myTesla); // false

Object.seal(myTesla);

Object.isSealed(myTesla); // true



myTesla.color = 'blue';

console.log(myTesla.color); // undefined



delete myTesla.batteryLife; // false

console.log(myTesla.batteryLife); // 300



Object.defineProperty(myTesla, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife

```

### [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

It does the same that `Object.seal()` plus it makes the properties non-writable.

```

Object.isFrozen(myTesla); // false

Object.freeze(myTesla);

Object.isFrozen(myTesla); // true



myTesla.color = 'blue';

console.log(myTesla.color); // undefined



delete myTesla.batteryLife;

console.log(myTesla.batteryLife); // 300



Object.defineProperty(myTesla, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife



myTesla.batteryLife = 400;

console.log(myTesla.batteryLife); // 300

```

### Extra

Use `strict mode` if you want to throw an error when trying to modify an immutable object.

---

---

---

Functional inheritance is the process of inheriting features by applying an augmenting function to an object instance. The function supplies a closure scope which you can use to keep some data private. The augmenting function uses dynamic object extension to extend the object instance with new properties and methods.

Functional mixins are composable factory functions that add properties and behaviors to objects like stations in an assembly line.

```javascript
// Base object constructor function

function Animal(data) {
    var that = {}; // Create an empty object

    that.name = data.name; // Add it a "name" property

    return that; // Return the object
}

// Create achild object, inheriting from the base Animal

function Cat(data) {
    // Create the Animal object

    var that = Animal(data);

    // Extend base object

    that.sayHello = function () {
        return "Hello, I'm " + that.name;
    };

    return that;
}

// Usage

var myCat = Cat({ name: 'Rufi' });

console.log(myCat.sayHello());

// Output: "Hello, I'm Rufi"
```

---

---

---

A currying function is a function that takes multiple arguments and turns it into a sequence of functions having only one argument at a time.

In this way, an n-ary function becomes a unary function, and the last function returns the result of all the arguments together in a function.

```javascript
// Normal definition

function multiply(a, b, c) {
    return a * b * c;
}

console.log(multiply(1, 2, 3));

// Output: 6

// Simple curry function definition

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
}

console.log(multiply(1)(2)(3));

// Output: 6
```

#### Further readings

-   [Currying in JavaScript](https://dev.to/suprabhasupi/currying-in-javascript-1k3l)

-   [Lodash curry](https://lodash.com/docs/#curry)

-   [JavaScript currying](http://zetcode.com/javascript/currying/)

---

---

---

Temporal Dead Zone is a JavaScript behavior while using variables declared using `let` and `const` keywords. Since the keywords are block-scoped, the variables declared these keywords could not be accessed before the declaration, and then you will have to witness where variables will be said to be `undefined`.

```javascript
function myFunc() {
    console.log(greeting);

    var greeting = 'Hello World!';
}

myFunc(); // Output: undefined

function myFunc() {
    console.log(greeting);

    let greeting = 'Hello World!';
}

myFunc(); // Output: ReferenceError: greeting is not defined

function myFunc() {
    console.log(greeting);

    const greeting = 'Hello World!';
}

myFunc(); // Output: ReferenceError: greeting is not defined
```

---

---

---

`target` refers to the DOM element that triggers an event. Otherwise, `currentTarget` refers to the DOM element that the event listener is listening on.

```html
<ul class="todo-list">
    <li class="item">Walk your dog</li>
</ul>
```

```js

const list = document.querySelector(".todo-list");



list.addEventListener("click", e => {

  console.log(e.target);

  // Output: <li class="item">Walk your dog</li>

  console.log(e.currentTarget);

  // Output: <ul class="todo-list">
</ul>

});

```

---

---

---

The spread operator in JavaScript is a useful syntax for adding elements to an array, combining arrays into one larger one, spreading an array inside the arguments of a function, and more.

```js
// Concatenating arrays and objects

let arr1 = [1, 2, 3];

let arr2 = [4, 5];

let newArray = [...arr1, ...arr2];

console.log(newArray);

// Output: [ 1, 2, 3, 4, 5 ]

// Copying array elements

let arr = ['a', 'b', 'c'];

let newArray = [...arr];

console.log(newArray);

// Output: ["a", "b", "c"]

// Expanding arrays

let arr = ['a', 'b'];

let newArray = [...arr, 'c', 'd'];

console.log(newArray);

// Output: ["a", "b", "c", "d"]

// Merging objects

const userBasic = {
    name: 'Jen',

    age: 22
};

const userMoreInfo = {
    country: 'Argentina',

    city: 'Córdoba'
};

const user = { ...userBasic, ...userMoreInfo };

// Output: {  name: "Jen",  age: 22, country: "Argentina", city: "Córdoba" }
```

---

---

---

The `void` operator returns an `undefined` value from an evaluated expression, or in other words; the `void` operator specifies an expression to be evaluated without returning a value. It is commonly used in client-side JavaScript, where the browser should not display the value.

```js
function getYear() {
    return 2020;
}

console.log(getYear());

// Output: 2020

console.log(void getYear());

// Output: undefined

// Useful use case

button.onclick = () => void getYear();
```

---

---

---

All `Promise` instances accept a method as an argument called the executor. This executor takes two methods as arguments: resolve and reject. Within the executor, if resolve is called, the `Promise` instance becomes fulfilled. If an exception is thrown, reject is called instead, and the `Promise` instance becomes rejected.

```js
const executor = (resolve, reject) => {
    setTimeout(() => resolve("I'm done"), 1000);
};

new Promise(executor).then((result) => {
    console.log(result);

    // Output after 1000ms: I'm done
});
```

---

---

---

The ternary operator is a shortcut for the `if` statement. It consists of three operands; a question mark, a condition, and an expression to execute if the condition is true, followed by a colon and another expression to execute if it's false.

```js
let age = 26;

// condition ? expression if true : expression if false

let drink = age >= 21 ? 'Beer' : 'Juice';

console.log(drink); // "Beer"

// Equivalent to:

let drink;

if (age >= 21) {
    drink = 'Beer';
} else {
    drink = 'Juice';
}

console.log(drink); // "Beer"
```
