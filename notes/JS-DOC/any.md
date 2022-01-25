# Promise.any()

`Promise.any()` takes an iterable of [`Promise`](../promise) objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an [`AggregateError`](../aggregateerror), a new subclass of [`Error`](../error) that groups together individual errors. Essentially, this method is the opposite of [`Promise.all()`](all).

## Syntax

    Promise.any(iterable);

### Parameters

`iterable`  
An [iterable](../../iteration_protocols#the_iterable_protocol) object, such as an [`Array`](../array).

### Return value

-   An **already rejected** [`Promise`](../promise) if the iterable passed is empty.
-   An **asynchronously resolved** [`Promise`](../promise) if the iterable passed contains no promises.
-   A **pending** [`Promise`](../promise) in all other cases. This returned promise is then resolved/rejected **asynchronously** (as soon as the stack is empty) when any of the promises in the given iterable resolve, or if all the promises have rejected.

## Description

This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one. Unlike [`Promise.all()`](all), which returns an _array_ of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: This method rejects upon receiving an _empty iterable_, since, truthfully, the iterable contains no items that fulfill.

Also, unlike [`Promise.race()`](race), which returns the first _settled_ value (either fulfillment or rejection), this method returns the first _fulfilled_ value. This method will ignore all rejected promises up until the first promise that fulfils.

### Fulfillment

The returned promise is fulfilled with **the first** resolved value (or non-promise value) in the iterable passed as the argument, whether or not the other promises have rejected.

-   If a nonempty _iterable_ is passed, and **any** of the promises fulfill, or are not promises, then the promise returned by this method is fulfilled asynchronously.

### Rejection

If all of the passed-in promises reject, `Promise.any` asynchronously rejects with an [`AggregateError`](../aggregateerror) object, which extends [`Error`](../error), and contains an `errors` property with an array of rejection values.

-   If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an `AggregateError` object whose `errors` property is an empty array.

## Examples

### First to fulfil

`Promise.any()` resolves with the first promise to fulfil, even if a promise rejects first. This is in contrast to [`Promise.race()`](race), which resolves or rejects with the first promise to settle.

    const pErr = new Promise((resolve, reject) => {
      reject("Always fails");
    });

    const pSlow = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, "Done eventually");
    });

    const pFast = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, "Done quick");
    });

    Promise.any([pErr, pSlow, pFast]).then((value) => {
      console.log(value);
      // pFast fulfils first
    })
    // expected output: "Done quick"

### Rejections with AggregateError

`Promise.any()` rejects with an [`AggregateError`](../aggregateerror) if no promise fulfils.

    const pErr = new Promise((resolve, reject) => {
      reject('Always fails');
    });

    Promise.any([pErr]).catch((err) => {
      console.log(err);
    })
    // expected output: "AggregateError: No Promise in Promise.any was resolved"

### Displaying the first image loaded

In this example, we have a function that fetches an image and returns a blob. We use `Promise.any()` to fetch a couple of images and display the first one available (i.e. whose promise has resolved).

    function fetchAndDecode(url) {
      return fetch(url).then(response => {
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response.blob();
        }
      })
    }

    let coffee = fetchAndDecode('coffee.jpg');
    let tea = fetchAndDecode('tea.jpg');

    Promise.any([coffee, tea]).then(value => {
      let objectURL = URL.createObjectURL(value);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
    })
    .catch(e => {
      console.log(e.message);
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-promise.any">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-promise.any</span></a></td></tr></tbody></table>

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

## See also

-   [`Promise`](../promise)
-   [`Promise.allSettled()`](allsettled)
-   [`Promise.all()`](all)
-   [`Promise.race()`](race)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any</a>
