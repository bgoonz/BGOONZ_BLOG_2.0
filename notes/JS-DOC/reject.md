# Promise.reject()

The `Promise.reject()` method returns a `Promise` object that is rejected with a given reason.

## Syntax

    Promise.reject(reason);

### Parameters

`reason`  
Reason why this `Promise` rejected.

### Return value

A [`Promise`](../promise) that is rejected with the given reason.

## Description

The static `Promise.reject` function returns a `Promise` that is rejected. For debugging purposes and selective error catching, it is useful to make `reason` an `instanceof` [`Error`](../error).

## Examples

### Using the static Promise.reject() method

    Promise.reject(new Error('fail')).then(function() {
      // not called
    }, function(error) {
      console.error(error); // Stacktrace
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-promise.reject">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-promise.reject</span></a></td></tr></tbody></table>

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

## See also

-   [`Promise`](../promise)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject</a>
