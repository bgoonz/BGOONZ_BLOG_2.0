# Promise.prototype.finally()

The `finally()` method returns a [`Promise`](../promise). When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the `Promise` has been dealt with.

This helps to avoid duplicating code in both the promise's [`then()`](then) and [`catch()`](catch) handlers.

## Syntax

    p.finally(onFinally);

    p.finally(function() {
       // settled (fulfilled or rejected)
    });

### Parameters

`onFinally`  
A [`Function`](../function) called when the `Promise` is settled.

### Return value

Returns a [`Promise`](../promise) whose `finally` handler is set to the specified function, `onFinally`.

## Description

The `finally()` method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.

The `finally()` method is very similar to calling `.then(onFinally, onFinally)` however there are a couple of differences:

-   When creating a function inline, you can pass it once, instead of being forced to either declare it twice, or create a variable for it
-   A `finally` callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected. This use case is for precisely when you _do not care_ about the rejection reason, or the fulfillment value, and so there's no need to provide it. So for example:
    -   Unlike `Promise.resolve(2).then(() => {}, () => {})` (which will be resolved with `undefined`), `Promise.resolve(2).finally(() => {})` will be resolved with `2`.
    -   Similarly, unlike `Promise.reject(3).then(() => {}, () => {})` (which will be fulfilled with `undefined`), `Promise.reject(3).finally(() => {})` will be rejected with `3`.

**Note:** A `throw` (or returning a rejected promise) in the `finally` callback will reject the new promise with the rejection reason specified when calling `throw`.

## Examples

### Using finally

    let isLoading = true;

    fetch(myRequest).then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      })
      .then(function(json) { /* process your JSON further */ })
      .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
      .finally(function() { isLoading = false; });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-promise.prototype.finally">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-promise.prototype.finally</span></a></td></tr></tbody></table>

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

## See also

-   [`Promise`](../promise)
-   [`Promise.prototype.then()`](then)
-   [`Promise.prototype.catch()`](catch)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally</a>
