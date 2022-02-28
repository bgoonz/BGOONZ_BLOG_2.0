# Proxy.revocable()

The `Proxy.revocable()` method is used to create a revocable [`Proxy`](../proxy) object.

## Syntax

    Proxy.revocable(target, handler);

### Parameters

`target`  
A target object to wrap with `Proxy`. It can be any sort of object, including a native array, a function, or even another proxy.

`handler`  
An object whose properties are functions define the behavior of proxy `p` when an operation is performed on it.

### Return value

A newly created revocable `Proxy` object is returned.

## Description

A revocable `Proxy` is an object with following two properties `{proxy: proxy, revoke: revoke}`.

`proxy`  
A Proxy object created with `new Proxy(target, handler)` call.

`revoke`  
A function with no argument to invalidate (switch off) the `proxy`.

If the `revoke()` function gets called, the proxy becomes unusable: Any trap to a handler will throw a [`TypeError`](../typeerror). Once a proxy is revoked, it will remain revoked and can be garbage collected. Calling `revoke()` again has no effect.

## Examples

### Using Proxy.revocable

    var revocable = Proxy.revocable({}, {
      get: function(target, name) {
        return "[[" + name + "]]";
      }
    });
    var proxy = revocable.proxy;
    console.log(proxy.foo); // "[[foo]]"

    revocable.revoke();

    console.log(proxy.foo); // TypeError is thrown
    proxy.foo = 1           // TypeError again
    delete proxy.foo;       // still TypeError
    typeof proxy            // "object", typeof doesn't trigger any trap

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-proxy.revocable">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-proxy.revocable</span></a></td></tr></tbody></table>

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

`revocable`

63

12

34

No

50

10

63

63

34

46

10

8.0

## See also

-   [`Proxy`](../proxy)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable</a>
