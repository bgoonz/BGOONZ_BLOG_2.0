# Promise

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Note:** This feature is available in [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

To learn about the way promises work and how you can use them, we advise you to read [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) first.

## Description

A `Promise` is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a _promise_ to supply the value at some point in the future.

A `Promise` is in one of these states:

-   _pending_: initial state, neither fulfilled nor rejected.
-   _fulfilled_: meaning that the operation was completed successfully.
-   _rejected_: meaning that the operation failed.

A pending promise can either be _fulfilled_ with a value or _rejected_ with a reason (error). When either of these options happens, the associated handlers queued up by a promise's `then` method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the `Promise.prototype.then()` and `Promise.prototype.catch()` methods return promises, they can be chained.

<img src="data:image/png;base64,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" width="801" height="297" />

**Note:** Several other languages have mechanisms for lazy evaluation and deferring a computation, which they also call "promises", e.g. Scheme. Promises in JavaScript represent processes that are already happening, which can be chained with callback functions. If you are looking to lazily evaluate an expression, consider the [arrow function](../functions/arrow_functions) with no arguments: `f = () => expression` to create the lazily-evaluated expression, and `f()` to evaluate.

**Note:** A promise is said to be _settled_ if it is either fulfilled or rejected, but not pending. You will also hear the term _resolved_ used with promises — this means that the promise is settled or "locked-in” to match the state of another promise. [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) contain more details about promise terminology.

### Chained Promises

The methods `promise.then()`, `promise.catch()`, and `promise.finally()` are used to associate further action with a promise that becomes settled.

The `.then()` method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each `.then()` returns a newly generated promise object, which can optionally be used for chaining; for example:

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('foo');
      }, 300);
    });

    myPromise
      .then(handleResolvedA, handleRejectedA)
      .then(handleResolvedB, handleRejectedB)
      .then(handleResolvedC, handleRejectedC);

Processing continues to the next link of the chain even when a `.then()` lacks a callback function that returns a Promise object. Therefore, a chain can safely omit every _rejection_ callback function until the final `.catch()`.

Handling a rejected promise in each `.then()` has consequences further down the promise chain. Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw an error of some type to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final `.catch()` statement. A `.catch()` is really just a `.then()` without a slot for a callback function for the case when the promise is resolved.

    myPromise
    .then(handleResolvedA)
    .then(handleResolvedB)
    .then(handleResolvedC)
    .catch(handleRejectedAny);

Using `Arrow Function Expressions` for the callback functions, an implementation of a promise chain might look something like this:

    promise1
    .then(value => { return value + ' and bar'; })
    .then(value => { return value + ' and bar again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { return value + ' and again'; })
    .then(value => { console.log(value) })
    .catch(err => { console.log(err) });

The termination condition of a promise determines the "settled" state of the next promise in the chain. A "resolved" state indicates a successful completion of the promise, while a "rejected" state indicates a lack of success. The return value of each resolved promise in the chain is passed along to the next `.then()`, while the reason for rejection is passed along to the next rejection-handler function in the chain.

The promises of a chain are nested like Russian dolls, but get popped like the top of a stack. The first promise in the chain is most deeply nested and is the first to pop.

    (promise D, (promise C, (promise B, (promise A) ) ) )

When a `nextValue` is a promise, the effect is a dynamic replacement. The `return` causes a promise to be popped, but the `nextValue` promise is pushed into its place. For the nesting shown above, suppose the `.then()` associated with "promise B" returns a `nextValue` of "promise X". The resulting nesting would look like this:

    (promise D, (promise C, (promise X) ) )

A promise can participate in more than one nesting. For the following code, the transition of `promiseA` into a "settled" state will cause both instances of `.then()` to be invoked.

    const promiseA = new Promise(myExecutorFunc);
    const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
    const promiseC = promiseA.then(handleFulfilled2, handleRejected2);

An action can be assigned to an already "settled" promise. In that case, the action (if appropriate) will be performed at the first asynchronous opportunity. Note that promises are guaranteed to be asynchronous. Therefore, an action for an already "settled" promise will occur only after the stack has cleared and a clock-tick has passed. The effect is much like that of `setTimeout(action,10)`.

    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
        resolutionFunc(777);
    });
    // At this point, "promiseA" is already settled.
    promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
    console.log("immediate logging");

    // produces output in this order:
    // immediate logging
    // asynchronous logging has val: 777

### Incumbent settings object tracking

A settings object is an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) that provides additional information when JavaScript code is running. This includes the realm and module map, as well as HTML specific information such as the origin. The incumbent settings object is tracked in order to ensure that the browser knows which one to use for a given piece of user code.

To better picture this, we can take a closer look at how the realm might be an issue. A **realm** can be roughly thought of as the global object. What is unique about realms is that they hold all of the necessary information to run JavaScript code. This includes objects like `Array` and `Error`. Each settings object has its own "copy" of these and they are not shared. That can cause some unexpected behavior in relation to promises. In order to get around this, we track something called the **incumbent settings object**. This represents information specific to the context of the user code responsible for a certain function call.

To illustrate this a bit further we can take a look at how an `<iframe>` embedded in a document communicates with its host. Since all web APIs are aware of the incumbent settings object, the following will work in all browsers:

    <!DOCTYPE html>
    <iframe></iframe> <!-- we have a realm here -->
    <script> // we have a realm here as well
      const bound = frames[0].postMessage.bind(
        frames[0], "some data", "*");
        // bound is a built-in function -- there is no user
        // code on the stack, so which realm do we use?
      window.setTimeout(bound);
      // this still works, because we use the youngest
      // realm (the incumbent) on the stack
    </script>

The same concept applies to promises. If we modify the above example a little bit, we get this:

    <!DOCTYPE html>
    <iframe></iframe> <!-- we have a realm here -->
    <script> // we have a realm here as well
      const bound = frames[0].postMessage.bind(
        frames[0], "some data", "*");
        // bound is a built in function -- there is no user
        // code on the stack -- which realm do we use?
      Promise.resolve(undefined).then(bound);
      // this still works, because we use the youngest
      // realm (the incumbent) on the stack
    </script>

If we change this so that the `<iframe>` in the document is listening to post messages, we can observe the effect of the incumbent settings object:

    <!-- y.html -->
    <!DOCTYPE html>
    <iframe src="x.html"></iframe>
    <script>
      const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
      Promise.resolve(undefined).then(bound);
    </script>

    <!-- x.html -->
    <!DOCTYPE html>
    <script>
    window.addEventListener("message", (event) => {
      document.querySelector("#text").textContent = "hello";
      // this code will only run in browsers that track the incumbent settings object
      console.log(event);
    }, false);
    </script>

In the above example, the inner text of the `<iframe>` will be updated only if the incumbent settings object is tracked. This is because without tracking the incumbent, we may end up using the wrong environment to send the message.

**Note:** Currently, incumbent realm tracking is fully implemented in Firefox, and has partial implementations in Chrome and Safari.

## Constructor

[`Promise()`](promise/promise)  
Creates a new `Promise` object. The constructor is primarily used to wrap functions that do not already support promises.

## Static methods

[`Promise.all(iterable)`](promise/all)  
Wait for all promises to be resolved, or for any to be rejected.

If the returned promise resolves, it is resolved with an aggregating array of the values from the resolved promises, in the same order as defined in the iterable of multiple promises.

If it rejects, it is rejected with the reason from the first promise in the iterable that was rejected.

[`Promise.allSettled(iterable)`](promise/allsettled)  
Wait until all promises have settled (each may resolve or reject).

Returns a Promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

[`Promise.any(iterable)`](promise/any)  
Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise.

[`Promise.race(iterable)`](promise/race)  
Wait until any of the promises is resolved or rejected.

If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.

If it rejects, it is rejected with the reason from the first promise that was rejected.

[`Promise.reject(reason)`](promise/reject)  
Returns a new `Promise` object that is rejected with the given reason.

[`Promise.resolve(value)`](promise/resolve)  
Returns a new `Promise` object that is resolved with the given value. If the value is a thenable (i.e. has a `then` method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.

Generally, if you don't know if a value is a promise or not, [`Promise.resolve(value)`](promise/resolve) it instead and work with the return value as a promise.

## Instance methods

See the [Microtask guide](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) to learn more about how these methods use the Microtask queue and services.

[`Promise.prototype.catch()`](promise/catch)  
Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.

[`Promise.prototype.then()`](promise/then)  
Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler `onFulfilled` or `onRejected` is not a function).

[`Promise.prototype.finally()`](promise/finally)  
Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.

## Examples

### Basic Example

    let myFirstPromise = new Promise((resolve, reject) => {
      // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
      // In this example, we use setTimeout(...) to simulate async code.
      // In reality, you will probably be using something like XHR or an HTML5 API.
      setTimeout( function() {
        resolve("Success!")  // Yay! Everything went well!
      }, 250)
    })

    myFirstPromise.then((successMessage) => {
      // successMessage is whatever we passed in the resolve(...) function above.
      // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
      console.log("Yay! " + successMessage)
    });

### Example with diverse situations

This example shows diverse techniques for using Promise capabilities and diverse situations that can occur. To understand this, start by scrolling to the bottom of the code block, and examine the promise chain. Upon provision of an initial promise, a chain of promises can follow. The chain is composed of `.then()` calls, and typically (but not necessarily) has a single `.catch()` at the end, optionally followed by `.finally()`. In this example, the promise chain is initiated by a custom-written `new Promise()` construct; but in actual practice, promise chains more typically start with an API function (written by someone else) that returns a promise.

The example function `tetheredGetNumber()` shows that a promise generator will utilize `reject()` while setting up an asynchronous call, or within the call-back, or both. The function `promiseGetWord()` illustrates how an API function might generate and return a promise in a self-contained manner.

Note that the function `troubleWithGetNumber()` ends with a `throw()`. That is forced because an ES6 promise chain goes through all the `.then()` promises, even after an error, and without the "throw()", the error would seem "fixed". This is a hassle, and for this reason, it is common to omit `rejectionFunc` throughout the chain of `.then()` promises, and just have a single `rejectionFunc` in the final `catch()`. The alternative is to throw a special value (in this case "-999", but a custom Error type would be more appropriate).

This code can be run under NodeJS. Comprehension is enhanced by seeing the errors actually occur. To force more errors, change the `threshold` values.

    "use strict";

    // To experiment with error handling, "threshold" values cause errors randomly
    const THRESHOLD_A = 8; // can use zero 0 to guarantee error

    function tetheredGetNumber(resolve, reject) {
      try {
        setTimeout(
          function() {
            const randomInt = Date.now();
            const value = randomInt % 10;
            try {
              if(value >= THRESHOLD_A) {
                throw new Error(`Too large: ${value}`);
              }
            } catch(msg) {
                reject(`Error in callback ${msg}`);
            }
          resolve(value);
          return;
        }, 500);
        // To experiment with error at set-up, uncomment the following 'throw'.
        // throw new Error("Bad setup");
      } catch(err) {
        reject(`Error during setup: ${err}`);
      }
      return;
    }

    function determineParity(value) {
      const isOdd = value % 2 ? true : false ;
      const parityInfo = { theNumber: value, isOdd: isOdd };
      return parityInfo;
    }

    function troubleWithGetNumber(reason) {
      console.error(`Trouble getting number: ${reason}`);
      throw -999; // must "throw" something, to maintain error state down the chain
    }

    function promiseGetWord(parityInfo) {
      // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
      const tetheredGetWord = function(resolve,reject) {
        const theNumber = parityInfo.theNumber;
        const threshold_B = THRESHOLD_A - 1;
        if(theNumber >= threshold_B) {
          reject(`Still too large: ${theNumber}`);
        } else {
          parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
          resolve(parityInfo);
        }
        return;
      }
      return new Promise(tetheredGetWord);
    }

    (new Promise(tetheredGetNumber))
      .then(determineParity,troubleWithGetNumber)
      .then(promiseGetWord)
      .then((info) => {
        console.log("Got: ",info.theNumber," , ", info.wordEvenOdd);
        return info;
      })
      .catch((reason) => {
        if(reason === -999) {
          console.error("Had previously handled error");
        }
        else {
          console.error(`Trouble with promiseGetWord(): ${reason}`);
        }
       })
      .finally((info) => console.log("All done"));

### Advanced Example

This small example shows the mechanism of a `Promise`. The `testPromise()` method is called each time the [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) is clicked. It creates a promise that will be fulfilled, using [`WindowOrWorkerGlobalScope.setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), to the promise count (number starting from 1) every 1-3 seconds, at random. The `Promise()` constructor is used to create the promise.

The fulfillment of the promise is logged, via a fulfill callback set using [`p1.then()`](promise/then). A few logs show how the synchronous part of the method is decoupled from the asynchronous completion of the promise.

By clicking the button several times in a short amount of time, you'll even see the different promises being fulfilled one after another.

#### HTML

    <button id="make-promise">Make a promise!</button>
    <div id="log"></div>

#### JavaScript

    "use strict";
    let promiseCount = 0;

    function testPromise() {
      let thisPromiseCount = ++promiseCount;
      let log = document.getElementById('log');
      // begin
      log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started<br>');
      // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
      let p1 = new Promise((resolve, reject) => {
        // The executor function is called with the ability to resolve or reject the promise
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise constructor<br>');
        // This is only an example to create asynchronism
        window.setTimeout(function() {
            // We fulfill the promise !
            resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
      });

      // We define what to do when the promise is resolved with the then() call,
      // and what to do when the promise is rejected with the catch() call
      p1.then(function(val) {
        // Log the fulfillment value
        log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled<br>');
      }).catch((reason) => {
        // Log the rejection reason
        console.log(`Handle rejected promise (${reason}) here.`);
      });
      // end
      log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made<br>');
    }

    if ("Promise" in window) {
      let btn = document.getElementById("make-promise");
      btn.addEventListener("click",testPromise);
    } else {
      log = document.getElementById('log');
      log.textContent = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
    }

#### Result

### Loading an image with XHR

Another simple example using `Promise` and [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to load an image is available at the MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test) repository. You can also [see it in action](https://mdn.github.io/js-examples/promises-test/). Each step is commented on and allows you to follow the Promise and XHR architecture closely.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-promise-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-promise-objects</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`Promise`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

`Promise`

32

12

29

Constructor requires a new operator since version 37.

No

19

8

Constructor requires a new operator since version 10.

4.4.3

32

29

Constructor requires a new operator since version 37.

19

8

Constructor requires a new operator since version 10.

2.0

`all`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

`allSettled`

76

79

71

No

63

13

76

76

79

54

13

12.0

`any`

85

85

79

No

No

14

85

85

79

No

14

No

`catch`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

`finally`

63

18

58

No

50

11.1

63

63

58

46

11.3

8.0

`incumbent_settings_object_tracking`

No

No

50

No

No

No

No

No

50

No

No

No

`race`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

`reject`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

`resolve`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

`then`

32

12

29

No

19

8

4.4.3

32

29

19

8

2.0

## See also

-   [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
-   [Promises/A+ specification](https://promisesaplus.com/)
-   [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
-   [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
-   [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
-   [Jake Archibald: JavaScript Promises: There and Back Again](https://www.html5rocks.com/en/tutorials/es6/promises/)
-   [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript](https://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
-   [Matt Greer: JavaScript Promises ... In Wicked Detail](https://www.mattgreer.org/articles/promises-in-wicked-detail/)
-   [Forbes Lindesay: promisejs.org](https://www.promisejs.org/)
-   [Speed-polyfill to polyfill both promise availability and promise performance.](https://github.com/anonyco/SPromiseMeSpeedJS/blob/master/README.md)
-   [Promise polyfill](https://github.com/jakearchibald/es6-promise/)
-   [Udacity: JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise</a>
