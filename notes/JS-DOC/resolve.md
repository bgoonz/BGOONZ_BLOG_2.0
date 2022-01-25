# Promise.resolve()

The `Promise.resolve()` method returns a [`Promise`](../promise) object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a [`"then" method`](then)), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

## Syntax

    Promise.resolve(value);

### Parameters

`value`  
Argument to be resolved by this `Promise`. Can also be a `Promise` or a thenable to resolve.

### Return value

A [`Promise`](../promise) that is resolved with the given value, or the promise passed as value, if the value was a promise object.

## Description

The static `Promise.resolve` function returns a `Promise` that is resolved.

## Examples

### Using the static Promise.resolve method

    Promise.resolve('Success').then(function(value) {
      console.log(value); // "Success"
    }, function(value) {
      // not called
    });

### Resolving an array

    var p = Promise.resolve([1,2,3]);
    p.then(function(v) {
      console.log(v[0]); // 1
    });

### Resolving another Promise

    var original = Promise.resolve(33);
    var cast = Promise.resolve(original);
    cast.then(function(value) {
      console.log('value: ' + value);
    });
    console.log('original === cast ? ' + (original === cast));

    // logs, in order:
    // original === cast ? true
    // value: 33

The inverted order of the logs is due to the fact that the `then` handlers are called asynchronously. See how `then` works [here](then#return_value).

### Resolving thenables and throwing Errors

    // Resolving a thenable object
    var p1 = Promise.resolve({
      then: function(onFulfill, onReject) { onFulfill('fulfilled!'); }
    });
    console.log(p1 instanceof Promise) // true, object casted to a Promise

    p1.then(function(v) {
        console.log(v); // "fulfilled!"
      }, function(e) {
        // not called
    });

    // Thenable throws before callback
    // Promise rejects
    var thenable = { then: function(resolve) {
      throw new TypeError('Throwing');
      resolve('Resolving');
    }};

    var p2 = Promise.resolve(thenable);
    p2.then(function(v) {
      // not called
    }, function(e) {
      console.error(e); // TypeError: Throwing
    });

    // Thenable throws after callback
    // Promise resolves
    var thenable = { then: function(resolve) {
      resolve('Resolving');
      throw new TypeError('Throwing');
    }};

    var p3 = Promise.resolve(thenable);
    p3.then(function(v) {
      console.log(v); // "Resolving"
    }, function(e) {
      // not called
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-promise.resolve">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-promise.resolve</span></a></td></tr></tbody></table>

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

## See also

-   [`Promise`](../promise)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve</a>
