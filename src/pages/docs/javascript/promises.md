---
title: Promises
weight: 0
excerpt: A promise represents the eventual result of an asynchronous operation.
seo:
    title: 'Promises'
    description: 'A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.'
    robots: []
    extra: []
template: docs
---

# Promises

# Disclaimer: this article borrows heavily from 

- [Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)
- [You're Missing The Point Of Promises](https://gist.github.com/domenic/3889970)



# What is a promise

A promise represents the eventual result of an asynchronous operation.

> A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

# What's wrong with callbacks ?

Instead of values, we have function calls, which can be really cumbersome to coordinate.

# Promise give

- More clean code
- Back to thinking about functions and values
- If we failure Promise give use the reason why

# Promise: Asynchronous Value

1. Pending (no value)
2. Fulfilled (value)
3. Rejected (reason)

A Promise is a little immutable object.

# (ES6) Promise Operations

Creating a new promise
```js
new promise((resolve, reject) =>)
```

Async the access to value/reason
```js
promise.then((val) => , (err) =>)
```

Wait for several promises
```js
Promise.all([promise, ...])
```

Wait for the first promise
```js
Promise.race([promise, ...])
```

Example:

```js
var email = getUser(name)
    .then(function(user) {
        return user.email;
    })
    .catch(function(err) {
        log.error({err: err}, '...');
        throw new BadUsername();
    });
```

```js
var g = getUser(name)
    .then(function(user) {
        return getGravatar(user.email);
    });
```

```js
var info = getUser(name)
    .then(function(user) {
        return Promise.all([
            user,
            getGravatar(user.email),
            getTwitter(user.twitterHanlde),
            getGithub(user.gitubName)
        ]);
    })
```


---



Understanding Promises
----------------------

A Promise in short:

"Imagine you are a kid. Your mom promises you that she'll get you a new phone next week."

You *don't know* if you will get that phone until next week. Your mom can *really buy* you a brand new phone, or *she doesn't*.

> That is a promise. A promise has three states. They are:

1.  Pending: You *don't know* if you will get that phone
2.  Fulfilled: Mom is *happy*, she buys you a brand new phone
3.  Rejected: Mom is *unhappy*, she doesn't buy you a phone


####  [Promises for Adults](https://gist.github.com/domenic/3889970)

> _**(link to original source above...the version I have included below is slightly abridged**_)

<details>
    <summary>_Click To Read More: </summary>

**Promises** are a software abstraction that makes working with asynchronous operations much more pleasant. In the most basic definition, your code will move from continuation-passing style:

```
getTweetsFor("domenic", function (err, results) {
  // the rest of your code goes here.
});

```

to one where your functions return a value, called a *promise*, which represents the eventual results of that operation.

```
var promiseForTweets = getTweetsFor("domenic");

```

This is powerful since you can now treat these promises as first-class objects, passing them around, aggregating them, and so on, instead of inserting dummy callbacks that tie together other callbacks in order to do the same.

    
Thenables and CommonJS Promises/A
---------------------------------

When someone says "promise" in a JavaScript context, usually they mean---or at least *think* they mean---[CommonJS Promises/A](http://wiki.commonjs.org/wiki/Promises/A). This is one of the smallest "specs" I've seen. The meat of it is entirely about specifying the behavior of a single function, `then`:

> A promise is defined as an object that has a function as the value for the property `then`:
>
> `then(fulfilledHandler, errorHandler, progressHandler)`
>
> Adds a `fulfilledHandler`, `errorHandler`, and `progressHandler` to be called for completion of a promise. The `fulfilledHandler` is called when the promise is fulfilled. The `errorHandler` is called when a promise fails. The `progressHandler` is called for progress events. All arguments are optional and non-function values are ignored. The `progressHandler` is not only an optional argument, but progress events are purely optional. Promise implementors are not required to ever call a `progressHandler` (the `progressHandler` may be ignored), this parameter exists so that implementors may call it if they have progress events to report.
>
> This function should return a new promise that is fulfilled when the given `fulfilledHandler` or `errorHandler` callback is finished. This allows promise operations to be chained together. The value returned from the callback handler is the fulfillment value for the returned promise. If the callback throws an error, the returned promise will be moved to failed state.

> People mostly understand the first paragraph. It boils down to *callback aggregation*. You use `then` to attach callbacks to a promise, whether for success or for errors (or even progress). When the promise transitions state---which is out of scope of this very small spec!---your callbacks will be called. This is pretty useful, I guess.

> What people don't seem to notice is the second paragraph. Which is a shame, since it's the most important one.

What Is the Point of Promises?
------------------------------

The thing is, promises are not *about* callback aggregation. That's a simple utility. Promises are about something much deeper, namely providing a direct correspondence between synchronous functions and asynchronous functions.

> What does this mean? Well, there are two very important aspects of synchronous functions:

-   They *return values*
-   They *throw exceptions*

Both of these are essentially about composition. That is, you can feed the return value of one function straight into another, and keep doing this indefinitely. *More importantly*, if at any point that process fails, one function in the composition chain can throw an exception, which then bypasses all further compositional layers until it comes into the hands of someone who can handle it with a `catch`.

> Now, in an asynchronous world, you can no longer return values: they simply aren't ready in time. Similarly, you can't throw exceptions, because nobody's there to catch them. So we descend into the so-called "callback hell," where composition of return values involves nested callbacks, and composition of errors involves passing them up the chain manually, and oh by the way you'd better *never* throw an exception or else you'll need to introduce something crazy like [domains](https://nodejs.org/api/domain.html).

> *The point of promises is to give us back functional composition and error bubbling in the async world.* They do this by saying that your functions should return a promise, which can do one of two things:

-   Become *fulfilled by a value*
-   Become *rejected with an exception*

And, *if* you have a correctly implemented `then` function that follows Promises/A, then fulfillment and rejection will compose just like their synchronous counterparts, with fulfillments flowing up a compositional chain, but being interrupted at any time by a rejection that is only handled by someone who declares they are ready to handle it.

> In other words, the following asynchronous code:

```
getTweetsFor("domenic") // promise-returning function
  .then(function (tweets) {
    var shortUrls = parseTweetsForUrls(tweets);
    var mostRecentShortUrl = shortUrls[0];
    return expandUrlUsingTwitterApi(mostRecentShortUrl); // promise-returning function
  })
  .then(httpGet) // promise-returning function
  .then(
    function (responseBody) {
      console.log("Most recent link text:", responseBody);
    },
    function (error) {
      console.error("Error with the twitterverse:", error);
    }
  );

```

parallels^[*](https://github.com/kriskowal/q/wiki/On-Exceptions)^ the synchronous code:

```
try {
  var tweets = getTweetsFor("domenic"); // blocking
  var shortUrls = parseTweetsForUrls(tweets);
  var mostRecentShortUrl = shortUrls[0];
  var responseBody = httpGet(expandUrlUsingTwitterApi(mostRecentShortUrl)); // blocking x 2
  console.log("Most recent link text:", responseBody);
} catch (error) {
  console.error("Error with the twitterverse: ", error);
}

```

Note in particular how errors flowed from any step in the process to our `catch` handler, without explicit by-hand bubbling code. And with the upcoming ECMAScript 6 revision of JavaScript, plus some [party tricks](http://taskjs.org/), the code becomes not only parallel but almost identical.

> That Second Paragraph
---------------------

All of this is essentially enabled by that second paragraph:

> This function should return a new promise that is fulfilled when the given `fulfilledHandler` or `errorHandler` callback is finished. This allows promise operations to be chained together. The value returned from the callback handler is the fulfillment value for the returned promise. If the callback throws an error, the returned promise will be moved to failed state.

> In other words, `then` is *not* a mechanism for attaching callbacks to an aggregate collection. It's a mechanism for *applying a transformation* to a promise, and yielding a *new* promise from that transformation.

> This explains the crucial first phrase: "this function should return a new promise." Libraries like jQuery (before 1.8) don't do this: they simply mutate the state of the existing promise. That means if you give a promise out to multiple consumers, they can interfere with its state. To realize how ridiculous that is, consider the synchronous parallel: if you gave out a function's return value to two people, and one of them could somehow change it into a thrown exception! Indeed, Promises/A points this out explicitly:

> Once a promise is fulfilled or failed, the promise's value MUST not be changed, just as a values in JavaScript, primitives and object identities, can not change (although objects themselves may always be mutable even if their identity isn't).

> Now consider the last two sentences. They inform how this new promise is created. In short:

-   If either handler returns a value, the new promise is fulfilled with that value.
-   If either handler throws an exception, the new promise is rejected with that exception.

> This breaks down into four scenarios, depending on the state of the promise. Here we give their synchronous parallels so you can see why it's crucially important to have semantics for all four:

1.  Fulfilled, fulfillment handler returns a value: simple functional transformation
2.  Fulfilled, fulfillment handler throws an exception: getting data, and throwing an exception in response to it
3.  Rejected, rejection handler returns a value: a `catch` clause got the error and handled it
4.  Rejected, rejection handler throws an exception: a `catch` clause got the error and re-threw it (or a new one)

Without these transformations being applied, you lose all the power of the synchronous/asynchronous parallel, and your so-called "promises" become simple callback aggregators. This is the problem with jQuery's current "promises": they only support scenario 1 above, omitting entirely support for scenarios 2--4. This was also the problem with Node.js 0.1's `EventEmitter`-based "promises" (which weren't even `then`able).

> Furthermore, note that by catching exceptions and transforming them into rejections, we take care of both intentional and unintentional exceptions, just like in sync code. That is, if you write `aFunctionThatDoesNotExist()` in either handler, your promise becomes rejected and that error will bubble up the chain to the nearest rejection handler just as if you had written `throw new Error("bad data")`. Look ma, no domains!

So What?
--------

Maybe you're breathlessly taken by my inexorable logic and explanatory powers. More likely, you're asking yourself why this guy is raging so hard over some poorly-behaved libraries.

> Here's the problem:

> A promise is defined as an object that has a function as the value for the property `then`

As authors of Promises/A-consuming libraries, we would like to assume this statement to be true: that something that is "thenable" actually behaves as a Promises/A promise, with all the power that entails.

> If you can make this assumption, you can write [very extensive libraries](https://github.com/domenic/chai-as-promised/) that are entirely agnostic to the implementation of the promises they accept! Whether they be from [Q](https://github.com/kriskowal/q), [when.js](https://github.com/cujojs/when), or even [WinJS](https://msdn.microsoft.com/en-us/library/windows/apps/br211867.aspx), you can use the simple composition rules of the Promises/A spec to build on promise behavior. For example, here's a generalized [retry function](https://gist.github.com/2936696) that works with any Promises/A implementation.

> Unfortunately, libraries like jQuery break this. This necessitates [ugly hacks](https://github.com/domenic/chai-as-promised/blob/4bc1d6b217acde85c8af56dc3cd09f05bb752549/lib/chai-as-promised.js#L28-30) to detect the presence of objects masquerading as promises, and who call themselves in their API documentation promises, but aren't really Promises/A promises. If the consumers of your API start trying to pass you jQuery promises, you have two choices: fail in mysterious and hard-to-decipher ways when your compositional techniques fail, or fail up-front and block them from using your library entirely. This sucks.    
    
</details>    



Creating a Promise
------------------

Let's convert this to JavaScript.

```
// ES5: Part 1

var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
```



The code is quite expressive in itself.

Below is how a promise syntax looks normally:

```
// promise syntax look like this
new Promise(function (resolve, reject) { ... } );
```



Consuming Promises
------------------

Now that we have the promise, let's consume it:

```
// ES5: Part 2

var willIGetNewPhone = ... // continue from part 1

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom didn't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
};

askMom();
```



Let's run the example and see the result!

Demo: <https://jsbin.com/nifocu/1/edit?js,console>

![Result](https://scotch-res.cloudinary.com/image/upload/q_auto:good,f_auto/media/272/nB0ffh3NQHaHKJRuBNpH_promise-true-false.gif)

Chaining Promises
-----------------

Promises are chainable.

> Let's say you, the kid, promise your friend that you will show them the new phone when your mom buys you one.

> That is another promise. Let's write it!

```
// ES5

// 2nd promise
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};
```



Notes: We can shorten the above code by writing as below:

```
// shorten it

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};
```



Let's chain the promises. You, the kid, can only start the `showOff` promise after the `willIGetNewPhone` promise.

```
// call our promise
var askMom = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};
```



That is how you can chain the promise.

Promises are Asynchronous
-------------------------

Promises are asynchronous. Let's log a message before and after we call the promise.

```
// call our promise
var askMom = function () {
    console.log('before asking Mom'); // log before
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    console.log('after asking mom'); // log after
}
```



What is the sequence of expected output? You might expect:

```
1\. before asking Mom
2. Hey friend, I have a new black Samsung phone.
3. after asking mom

```

However, the actual output sequence is:

```
1\. before asking Mom
2. after asking mom
3. Hey friend, I have a new black Samsung phone.

```

![Output](https://scotch-res.cloudinary.com/image/upload/q_auto:good,f_auto/media/272/X8Q1iZGeSqAEjksPdbQQ_bZ3MNiH8g1.gif)

You wouldn't stop playing while waiting for your mom's promise (the new phone). That's something we call asynchronous: the code will run without blocking or waiting for the result. Anything that needs to wait for a promise to proceed is put in `.then`.

> Here is the full example in ES5:

```
// ES5: Full example

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};

// call our promise
var askMom = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();
```



Promises in ES5, ES6/2015, ES7/Next
-----------------------------------

#### ES5 - Majority browsers

The demo code is workable in ES5 environments (all major browsers + NodeJs) if you include [Bluebird](http://bluebirdjs.com/docs/getting-started.html) promise library. It's because ES5 doesn't support promises out of the box. Another famous promise library is [Q](https://github.com/kriskowal/q) by Kris Kowal.

#### ES6 / ES2015 - Modern browsers, NodeJs v6

The demo code works out of the box because ES6 supports promises natively. In addition, with ES6 functions, we can further simplify the code with an arrow function and use `const` and `let`.

> Here is the full example in ES6 code:

```
//_ ES6: Full example_

const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();
```



Note that all the `var` are replaced with `const`. All of the `function(resolve, reject)` have been simplified to `(resolve, reject) =>`. There are a few benefits that come with these changes.

#### ES7 - Async/Await

ES7 introduced `async` and `await` syntax. It makes the asynchronous syntax easier to understand, without the `.then` and `.catch`.

> Rewrite our example with ES7 syntax:

```
// ES7: Full example
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise in ES7 async await style
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

// async await it here too
(async () => {
    await askMom();
})();
```



Promises and When to Use Them
-----------------------------

Why do we need promises? How did the world look before promises? Before answering these questions, let's go back to the fundamentals.

### Normal Function VS Async Function

Let's take a look at these two examples. Both examples perform the addition of two numbers: one adds using normal functions, and the other adds remotely.

#### Normal Function to Add Two Numbers

```
// add two numbers normally

function add (num1, num2) {
    return num1 + num2;
}

const result = add(1, 2); // you get result = 3 immediately
```



##### Async Function to Add Two numbers

```
// add two numbers remotely

// get the result by calling an API
const result = getAddResultFromServer('http://www.example.com?num1=1&num2=2');
// you get result  = "undefined"
```



If you add the numbers with the normal function, you get the result immediately. However, when you issue a remote call to get the result, you need to wait, and you can't get the result immediately.

> You don't know if you will get the result because the server might be down, slow in response, etc. You don't want your entire process to be blocked while waiting for the result.

> Calling APIs, downloading files, and reading files are among some of the usual async operations that you'll perform.

> You do not need to use promises for an asynchronous call. Prior to promises, we used callbacks. Callbacks are a function you call when you get the return result. Let's modify the previous example to accept a callback.

```
// add two numbers remotely
// get the result by calling an API

function addAsync (num1, num2, callback) {
    // use the famous jQuery getJSON callback API
    return $.getJSON('http://www.example.com', {
        num1: num1,
        num2: num2
    }, callback);
}

addAsync(1, 2, success => {
    // callback
    const result = success; // you get result = 3 here
});
```



### Subsequent Async Action

Instead of adding the numbers one at a time, we want to add three times. In a normal function, we would do this:-

```
// add two numbers normally

let resultA, resultB, resultC;

 function add (num1, num2) {
    return num1 + num2;
}

resultA = add(1, 2); // you get resultA = 3 immediately
resultB = add(resultA, 3); // you get resultB = 6 immediately
resultC = add(resultB, 4); // you get resultC = 10 immediately

console.log('total' + resultC);
console.log(resultA, resultB, resultC);
```



This is how this looks with callbacks:

```
// add two numbers remotely
// get the result by calling an API

let resultA, resultB, resultC;

function addAsync (num1, num2, callback) {
    // use the famous jQuery getJSON callback API
    // https://api.jquery.com/jQuery.getJSON/
    return $.getJSON('http://www.example.com', {
        num1: num1,
        num2: num2
    }, callback);
}

addAsync(1, 2, success => {
    // callback 1
    resultA = success; // you get result = 3 here

    addAsync(resultA, 3, success => {
        // callback 2
        resultB = success; // you get result = 6 here

        addAsync(resultB, 4, success => {
            // callback 3
            resultC = success; // you get result = 10 here

            console.log('total' + resultC);
            console.log(resultA, resultB, resultC);
        });
    });
});
```



Demo: <https://jsbin.com/barimo/edit?html,js,console>

This syntax is less user-friendly due to the deeply nested callbacks.

### Avoiding Deeply Nested Callbacks

Promises can help you avoid deeply nested callbacks. Let's look at the promise version of the same example:

```
// add two numbers remotely using observable

let resultA, resultB, resultC;

function addAsync(num1, num2) {
    // use ES6 fetch API, which return a promise
    // What is .json()? https://developer.mozilla.org/en-US/docs/Web/API/Body/json
    return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
        .then(x => x.json());
}

addAsync(1, 2)
    .then(success => {
        resultA = success;
        return resultA;
    })
    .then(success => addAsync(success, 3))
    .then(success => {
        resultB = success;
        return resultB;
    })
    .then(success => addAsync(success, 4))
    .then(success => {
        resultC = success;
        return resultC;
    })
    .then(success => {
        console.log('total: ' + success)
        console.log(resultA, resultB, resultC)
    });
```



With promises, we flatten the callback with `.then`. In a way, it looks cleaner because there is no callback nesting. With ES7 `async` syntax, you could further enhance this example.

Observables
-----------

Before you settle down with promises, there is something that has come about to help you deal with async data called `Observables`.

Let's look at the same demo written with Observables. In this example, we will use [RxJS](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) for the observables.

```
let Observable = Rx.Observable;
let resultA, resultB, resultC;

function addAsync(num1, num2) {
    // use ES6 fetch API, which return a promise
    const promise = fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
        .then(x => x.json());

    return Observable.fromPromise(promise);
}

addAsync(1,2)
  .do(x => resultA = x)
  .flatMap(x => addAsync(x, 3))
  .do(x => resultB = x)
  .flatMap(x => addAsync(x, 4))
  .do(x => resultC = x)
  .subscribe(x => {
    console.log('total: ' + x)
    console.log(resultA, resultB, resultC)
  });
```



Observables can do more interesting things. For example, `delay` add function by `3 seconds` with just one line of code or retry so you can retry a call a certain number of times.

```
...

addAsync(1,2)
  .delay(3000) // delay 3 seconds
  .do(x => resultA = x)
  ...
```










The Event Loop
--------------

This section will explain how JavaScript handles asynchronous code with the event loop. It will first run through a demonstration of the event loop at work, and will then explain the two elements of the event loop: the stack and the queue.

JavaScript code that does not use any asynchronous Web APIs will execute in a synchronous manner---one at a time, sequentially. This is demonstrated by this example code that calls three functions that each print a number to the [console](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console):

```
// Define three example functions
function first() {
  console.log(1)
}

function second() {
  console.log(2)
}

function third() {
  console.log(3)
}
```


In this code, you define three functions that print numbers with `console.log()`.

Next, write calls to the functions:

```
// Execute the functions
first()
second()
third()
```


The output will be based on the order the functions were called---`first()`, `second()`, then `third()`:

```
Output1
2
3

```

When an asynchronous Web API is used, the rules become more complicated. A built-in API that you can test this with is `setTimeout`, which sets a timer and performs an action after a specified amount of time. `setTimeout` needs to be asynchronous, otherwise the entire browser would remain frozen during the waiting, which would result in a poor user experience.

Add `setTimeout` to the `second` function to simulate an asynchronous request:

```
// Define three example functions, but one of them contains asynchronous code
function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}
```


`setTimeout` takes two arguments: the function it will run asynchronously, and the amount of time it will wait before calling that function. In this code you wrapped `console.log` in an anonymous function and passed it to `setTimeout`, then set the function to run after `0` milliseconds.

Now call the functions, as you did before:

```
// Execute the functions
first()
second()
third()
```


You might expect with a `setTimeout` set to `0` that running these three functions would still result in the numbers being printed in sequential order. But because it is asynchronous, the function with the timeout will be printed last:

```
Output1
3
2

```

Whether you set the timeout to zero seconds or five minutes will make no difference---the `console.log` called by asynchronous code will execute after the synchronous top-level functions. This happens because the JavaScript host environment, in this case the browser, uses a concept called the *event loop* to handle concurrency, or parallel events. Since JavaScript can only execute one statement at a time, it needs the event loop to be informed of when to execute which specific statement. The event loop handles this with the concepts of a *stack* and a *queue*.

### Stack

The *stack*, or call stack, holds the state of what function is currently running. If you're unfamiliar with the concept of a stack, you can imagine it as an [array](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript) with "Last in, first out" (LIFO) properties, meaning you can only add or remove items from the end of the stack. JavaScript will run the current *frame* (or function call in a specific environment) in the stack, then remove it and move on to the next one.

For the example only containing synchronous code, the browser handles the execution in the following order:

-   Add `first()` to the stack, run `first()` which logs `1` to the console, remove `first()` from the stack.
-   Add `second()` to the stack, run `second()` which logs `2` to the console, remove `second()` from the stack.
-   Add `third()` to the stack, run `third()` which logs `3` to the console, remove `third()` from the stack.

The second example with `setTimout` looks like this:

-   Add `first()` to the stack, run `first()` which logs `1` to the console, remove `first()` from the stack.
-   Add `second()` to the stack, run `second()`.
    -   Add `setTimeout()` to the stack, run the `setTimeout()` Web API which starts a timer and adds the anonymous function to the *queue*, remove `setTimeout()` from the stack.
-   Remove `second()` from the stack.
-   Add `third()` to the stack, run `third()` which logs `3` to the console, remove `third()` from the stack.
-   The event loop checks the queue for any pending messages and finds the anonymous function from `setTimeout()`, adds the function to the stack which logs `2` to the console, then removes it from the stack.

Using `setTimeout`, an asynchronous Web API, introduces the concept of the *queue*, which this tutorial will cover next.

### Queue

The *queue*, also referred to as message queue or task queue, is a waiting area for functions. Whenever the call stack is empty, the event loop will check the queue for any waiting messages, starting from the oldest message. Once it finds one, it will add it to the stack, which will execute the function in the message.

In the `setTimeout` example, the anonymous function runs immediately after the rest of the top-level execution, since the timer was set to `0` seconds. It's important to remember that the timer does not mean that the code will execute in exactly `0` seconds or whatever the specified time is, but that it will add the anonymous function to the queue in that amount of time. This queue system exists because if the timer were to add the anonymous function directly to the stack when the timer finishes, it would interrupt whatever function is currently running, which could have unintended and unpredictable effects.

Note: There is also another queue called the *job queue* or *microtask queue* that handles promises. Microtasks like promises are handled at a higher priority than macrotasks like `setTimeout`.

Now you know how the event loop uses the stack and queue to handle the execution order of code. The next task is to figure out how to control the order of execution in your code. To do this, you will first learn about the original way to ensure asynchronous code is handled correctly by the event loop: callback functions.

Callback Functions
------------------

In the `setTimeout` example, the function with the timeout ran after everything in the main top-level execution context. But if you wanted to ensure one of the functions, like the `third` function, ran after the timeout, then you would have to use asynchronous coding methods. The timeout here can represent an asynchronous API call that contains data. You want to work with the data from the API call, but you have to make sure the data is returned first.

The original solution to dealing with this problem is using *callback functions*. Callback functions do not have special syntax; they are just a function that has been passed as an argument to another function. The function that takes another function as an argument is called a *higher-order function*. According to this definition, any function can become a callback function if it is passed as an argument. Callbacks are not asynchronous by nature, but can be used for asynchronous purposes.

Here is a syntactic code example of a higher-order function and a callback:

```
// A function
function fn() {
  console.log('Just a function')
}

// A function that takes another function as an argument
function higherOrderFunction(callback) {
  // When you call a function that is passed as an argument, it is referred to as a callback
  callback()
}

// Passing a function
higherOrderFunction(fn)
```


In this code, you define a function `fn`, define a function `higherOrderFunction` that takes a function `callback` as an argument, and pass `fn` as a callback to `higherOrderFunction`.

Running this code will give the following:

```
OutputJust a function

```

Let's go back to the `first`, `second`, and `third` functions with `setTimeout`. This is what you have so far:

```
function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}
```


The task is to get the `third` function to always delay execution until after the asynchronous action in the `second` function has completed. This is where callbacks come in. Instead of executing `first`, `second`, and `third` at the top-level of execution, you will pass the `third` function as an argument to `second`. The `second` function will execute the callback after the asynchronous action has completed.

Here are the three functions with a callback applied:

```
// Define three functions
function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log(2)

    // Execute the callback function
    callback()
  }, 0)
}

function third() {
  console.log(3)
}
```


Now, execute `first` and `second`, then pass `third` as an argument to `second`:

```
first()
second(third)
```


After running this code block, you will receive the following output:

```
Output1
2
3

```

First `1` will print, and after the timer completes (in this case, zero seconds, but you can change it to any amount) it will print `2` then `3`. By passing a function as a callback, you've successfully delayed execution of the function until the asynchronous Web API (`setTimeout`) completes.

The key takeaway here is that callback functions are not asynchronous---`setTimeout` is the asynchronous Web API responsible for handling asynchronous tasks. The callback just allows you to be informed of when an asynchronous task has completed and handles the success or failure of the task.

Now that you have learned how to use callbacks to handle asynchronous tasks, the next section explains the problems of nesting too many callbacks and creating a "pyramid of doom."

Nested Callbacks and the Pyramid of Doom
----------------------------------------

Callback functions are an effective way to ensure delayed execution of a function until another one completes and returns with data. However, due to the nested nature of callbacks, code can end up getting messy if you have a lot of consecutive asynchronous requests that rely on each other. This was a big frustration for JavaScript developers early on, and as a result code containing nested callbacks is often called the "pyramid of doom" or "callback hell."

Here is a demonstration of nested callbacks:

```
function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
      }, 500)
    }, 2000)
  }, 1000)
}
```


In this code, each new `setTimeout` is nested inside a higher order function, creating a pyramid shape of deeper and deeper callbacks. Running this code would give the following:

```
Output1
2
3

```

In practice, with real world asynchronous code, this can get much more complicated. You will most likely need to do error handling in asynchronous code, and then pass some data from each response onto the next request. Doing this with callbacks will make your code difficult to read and maintain.

Here is a runnable example of a more realistic "pyramid of doom" that you can play around with:

```
// Example asynchronous function
function asynchronousRequest(args, callback) {
  // Throw an error if no arguments are passed
  if (!args) {
    return callback(new Error('Whoa! Something went wrong.'))
  } else {
    return setTimeout(
      // Just adding in a random number so it seems like the contrived asynchronous function
      // returned different data
      () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
      500,
    )
  }
}

// Nested asynchronous requests
function callbackHell() {
  asynchronousRequest('First', function first(error, response) {
    if (error) {
      console.log(error)
      return
    }
    console.log(response.body)
    asynchronousRequest('Second', function second(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest(null, function third(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
      })
    })
  })
}

// Execute
callbackHell()
```


In this code, you must make every function account for a possible `response` and a possible `error`, making the function `callbackHell` visually confusing.

Running this code will give you the following:

```
Output
First 9
Second 3
Error: Whoa! Something went wrong.
    at asynchronousRequest (<anonymous>:4:21)
    at second (<anonymous>:29:7)
    at <anonymous>:9:13

```

This way of handling asynchronous code is difficult to follow. As a result, the concept of *promises* was introduced in ES6. This is the focus of the next section.

Promises
--------

A *promise* represents the completion of an asynchronous function. It is an object that might return a value in the future. It accomplishes the same basic goal as a callback function, but with many additional features and a more readable syntax. As a JavaScript developer, you will likely spend more time consuming promises than creating them, as it is usually asynchronous Web APIs that return a promise for the developer to consume. This tutorial will show you how to do both.

### Creating a Promise

You can initialize a promise with the `new Promise` syntax, and you must initialize it with a function. The function that gets passed to a promise has `resolve` and `reject` parameters. The `resolve` and `reject` functions handle the success and failure of an operation, respectively.

Write the following line to declare a promise:

```
// Initialize a promise
const promise = new Promise((resolve, reject) => {})
```


If you inspect the initialized promise in this state with your web browser's console, you will find it has a `pending` status and `undefined` value:

```
Output__proto__: Promise
[[PromiseStatus]]: "pending"
[[PromiseValue]]: undefined

```

So far, nothing has been set up for the promise, so it's going to sit there in a `pending` state forever. The first thing you can do to test out a promise is fulfill the promise by resolving it with a value:

```
const promise = new Promise((resolve, reject) => {
  resolve('We did it!')
})
```


Now, upon inspecting the promise, you'll find that it has a status of `fulfilled`, and a `value` set to the value you passed to `resolve`:

```
Output__proto__: Promise
[[PromiseStatus]]: "fulfilled"
[[PromiseValue]]: "We did it!"

```

As stated in the beginning of this section, a promise is an object that may return a value. After being successfully fulfilled, the `value` goes from `undefined` to being populated with data.

> A promise can have three possible states: pending, fulfilled, and rejected.

-   Pending - Initial state before being resolved or rejected
-   Fulfilled - Successful operation, promise has resolved
-   Rejected - Failed operation, promise has rejected

After being fulfilled or rejected, a promise is settled.

> Now that you have an idea of how promises are created, let's look at how a developer may consume these promises.

### Consuming a Promise

The promise in the last section has fulfilled with a value, but you also want to be able to access the value. Promises have a method called `then` that will run after a promise reaches `resolve` in the code. `then` will return the promise's value as a parameter.

> This is how you would return and log the `value` of the example promise:

```
promise.then((response) => {
  console.log(response)
})
```


The promise you created had a `[[PromiseValue]]` of `We did it!`. This value is what will be passed into the anonymous function as `response`:

```
OutputWe did it!

```

So far, the example you created did not involve an asynchronous Web API---it only explained how to create, resolve, and consume a native JavaScript promise. Using `setTimeout`, you can test out an asynchronous request.

> The following code simulates data returned from an asynchronous request as a promise:

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
})

// Log the result
promise.then((response) => {
  console.log(response)
})
```


Using the `then` syntax ensures that the `response` will be logged only when the `setTimeout` operation is completed after `2000` milliseconds. All this is done without nesting callbacks.

> Now after two seconds, it will resolve the promise value and it will get logged in `then`:

```
OutputResolving an asynchronous request!

```

Promises can also be chained to pass along data to more than one asynchronous operation. If a value is returned in `then`, another `then` can be added that will fulfill with the return value of the previous `then`:

```
// Chain a promise
promise
  .then((firstResponse) => {
    // Return a new value for the next then
    return firstResponse + ' And chaining!'
  })
  .then((secondResponse) => {
    console.log(secondResponse)
  })
```


The fulfilled response in the second `then` will log the return value:

```
OutputResolving an asynchronous request! And chaining!

```

Since `then` can be chained, it allows the consumption of promises to appear more synchronous than callbacks, as they do not need to be nested. This will allow for more readable code that can be maintained and verified easier.

### Error Handling

So far, you have only handled a promise with a successful `resolve`, which puts the promise in a `fulfilled` state. But frequently with an asynchronous request you also have to handle an error---if the API is down, or a malformed or unauthorized request is sent. A promise should be able to handle both cases. In this section, you will create a function to test out both the success and error case of creating and consuming a promise.

> This `getUsers` function will pass a flag to a promise, and return the promise:

```
function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
    }, 1000)
  })
}
```


Set up the code so that if `onSuccess` is `true`, the timeout will fulfill with some data. If `false`, the function will reject with an error:

```
function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
      if (onSuccess) {
        resolve([
          {id: 1, name: 'Jerry'},
          {id: 2, name: 'Elaine'},
          {id: 3, name: 'George'},
        ])
      } else {
        reject('Failed to fetch data!')
      }
    }, 1000)
  })
}
```


For the successful result, you return [JavaScript objects](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript) that represent sample user data.

> In order to handle the error, you will use the `catch` instance method. This will give you a failure callback with the `error` as a parameter.

> Run the `getUser` command with `onSuccess` set to `false`, using the `then` method for the success case and the `catch` method for the error:

```
// Run the getUsers function with the false flag to trigger an error
getUsers(false)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })
```


Since the error was triggered, the `then` will be skipped and the `catch` will handle the error:

```
OutputFailed to fetch data!

```

If you switch the flag and `resolve` instead, the `catch` will be ignored, and the data will return instead:

```
// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })
```


This will yield the user data:

```
Output(3) [{...}, {...}, {...}]
0: {id: 1, name: "Jerry"}
1: {id: 2, name: "Elaine"}
3: {id: 3, name: "George"}

```

For reference, here is a table with the handler methods on `Promise` objects:

| Method | Description |
| --- | --- |
| `then()` | Handles a `resolve`. Returns a promise, and calls `onFulfilled` function asynchronously |
| `catch()` | Handles a `reject`. Returns a promise, and calls `onRejected` function asynchronously |
| `finally()` | Called when a promise is settled. Returns a promise, and calls `onFinally` function asynchronously |

Promises can be confusing, both for new developers and experienced programmers that have never worked in an asynchronous environment before. However as mentioned, it is much more common to consume promises than create them. Usually, a browser's Web API or third party library will be providing the promise, and you only need to consume it.

> In the final promise section, this tutorial will cite a common use case of a Web API that returns promises: [the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Using the Fetch API with Promises

One of the most useful and frequently used Web APIs that returns a promise is the Fetch API, which allows you to make an asynchronous resource request over a network. `fetch` is a two-part process, and therefore requires chaining `then`. This example demonstrates hitting the GitHub API to fetch a user's data, while also handling any potential error:

```
// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```


The `fetch` request is sent to the `https://api.github.com/users/octocat` URL, which asynchronously waits for a response. The first `then` passes the response to an anonymous function that formats the response as [JSON data](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript), then passes the JSON to a second `then` that logs the data to the console. The `catch` statement logs any error to the console.

> Running this code will yield the following:

```
Outputlogin: "octocat",
id: 583231,
avatar_url: "https://avatars3.githubusercontent.com/u/583231?v=4"
blog: "https://github.blog"
company: "@github"
followers: 3203
...

```

This is the data requested from `https://api.github.com/users/octocat`, rendered in JSON format.

This section of the tutorial showed that promises incorporate a lot of improvements for dealing with asynchronous code. But, while using `then` to handle asynchronous actions is easier to follow than the pyramid of callbacks, some developers still prefer a synchronous format of writing asynchronous code. To address this need, [ECMAScript 2016 (ES7)](https://www.ecma-international.org/ecma-262/7.0/index.html) introduced `async` functions and the `await` keyword to make working with promises easier.

Async Functions with `async/await`
----------------------------------

An *`async` function* allows you to handle asynchronous code in a manner that appears synchronous. `async` functions still use promises under the hood, but have a more traditional JavaScript syntax. In this section, you will try out examples of this syntax.

You can create an `async` function by adding the `async` keyword before a function:

```
// Create an async function
async function getUser() {
  return {}
}
```


Although this function is not handling anything asynchronous yet, it behaves differently than a traditional function. If you execute the function, you'll find that it returns a promise with a `[[PromiseStatus]]` and `[[PromiseValue]]` instead of a return value.

Try this out by logging a call to the `getUser` function:

```
console.log(getUser())
```


This will give the following:

```
Output__proto__: Promise
[[PromiseStatus]]: "fulfilled"
[[PromiseValue]]: Object

```

This means you can handle an `async` function with `then` in the same way you could handle a promise. Try this out with the following code:

```
getUser().then((response) => console.log(response))
```


This call to `getUser` passes the return value to an anonymous function that logs the value to the console.

You will receive the following when you run this program:

```
Output{}

```

An `async` function can handle a promise called within it using the `await` operator. `await` can be used within an `async` function and will wait until a promise settles before executing the designated code.

With this knowledge, you can rewrite the Fetch request from the last section using `async`/`await` as follows:

```
// Handle fetch with async/await
async function getUser() {
  const response = await fetch('https://api.github.com/users/octocat')
  const data = await response.json()

  console.log(data)
}

// Execute async function
getUser()
```


The `await` operators here ensure that the `data` is not logged before the request has populated it with data.

Now the final `data` can be handled inside the `getUser` function, without any need for using `then`. This is the output of logging `data`:

```
Outputlogin: "octocat",
id: 583231,
avatar_url: "https://avatars3.githubusercontent.com/u/583231?v=4"
blog: "https://github.blog"
company: "@github"
followers: 3203
...

```

Note: In many environments, `async` is necessary to use `await`---however, some new versions of browsers and Node allow using top-level `await`, which allows you to bypass creating an async function to wrap the `await` in.

Finally, since you are handling the fulfilled promise within the asynchronous function, you can also handle the error within the function. Instead of using the `catch` method with `then`, you will use the [`try`/`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) pattern to handle the exception.

Add the following highlighted code:

```
// Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    // Handle error in catch
    console.error(error)
  }
}
```


The program will now skip to the `catch` block if it receives an error and log that error to the console.

Modern asynchronous JavaScript code is most often handled with `async`/`await` syntax, but it is important to have a working knowledge of how promises work, especially as promises are capable of additional features that cannot be handled with `async`/`await`, like combining promises with [`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

Note: `async`/`await` can be reproduced by using [generators combined with promises](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript#asyncawait-with-generators) to add more flexibility to your code. To learn more, check out our [Understanding Generators in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript) tutorial.
