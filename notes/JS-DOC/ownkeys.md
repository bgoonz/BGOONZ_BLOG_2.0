# handler.ownKeys()

The `handler.ownKeys()` method is a trap for [`Reflect.ownKeys()`](../../reflect/ownkeys).

## Syntax

    const p = new Proxy(target, {
      ownKeys: function(target) {
      }
    });

### Parameters

The following parameter is passed to the `ownKeys()` method. `this` is bound to the handler.

`target`  
The target object.

### Return value

The `ownKeys()` method must return an enumerable object.

## Description

The `handler.ownKeys()` method is a trap for [`Reflect.ownKeys()`](../../reflect/ownkeys).

### Interceptions

This trap can intercept these operations:

-   [`Object.getOwnPropertyNames()`](../../object/getownpropertynames)
-   [`Object.getOwnPropertySymbols()`](../../object/getownpropertysymbols)
-   [`Object.keys()`](../../object/keys)
-   [`Reflect.ownKeys()`](../../reflect/ownkeys)

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](../../typeerror):

-   The result of `ownKeys()` must be an array.
-   The type of each array element is either a [`String`](../../string) or a [`Symbol`](../../symbol).
-   The result List must contain the keys of all non-configurable own properties of the target object.
-   If the target object is not extensible, then the result List must contain all the keys of the own properties of the target object and no other values.

## Examples

### Trapping of getOwnPropertyNames

The following code traps [`Object.getOwnPropertyNames()`](../../object/getownpropertynames).

    const p = new Proxy({}, {
      ownKeys: function(target) {
        console.log('called');
        return ['a', 'b', 'c'];
      }
    });

    console.log(Object.getOwnPropertyNames(p)); // "called"
                                                // [ 'a', 'b', 'c' ]

The following code violates an invariant.

    const obj = {};
    Object.defineProperty(obj, 'a', {
      configurable: false,
      enumerable: true,
      value: 10 }
    );

    const p = new Proxy(obj, {
      ownKeys: function(target) {
        return [123, 12.5, true, false, undefined, null, {}, []];
      }
    });

    console.log(Object.getOwnPropertyNames(p));

    // TypeError: proxy [[OwnPropertyKeys]] must return an array
    // with only string and symbol elements

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys</span></a></td></tr></tbody></table>

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

`ownKeys`

49

12

18

In Firefox 42, the implementation got updated to reflect the final ES2015 specification: The result is now checked if it is an array and if the array elements are either of type string or of type symbol. Enumerating duplicate own property names is not a failure anymore.

No

36

10

49

49

18

In Firefox 42, the implementation got updated to reflect the final ES2015 specification: The result is now checked if it is an array and if the array elements are either of type string or of type symbol. Enumerating duplicate own property names is not a failure anymore.

36

10

5.0

## See also

-   [`Proxy`](../../proxy)
-   [`handler`](../proxy)
-   [`Object.getOwnPropertyNames()`](../../object/getownpropertynames)
-   [`Reflect.ownKeys()`](../../reflect/ownkeys)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys</a>
