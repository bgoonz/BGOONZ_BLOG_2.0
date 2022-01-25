# handler.getPrototypeOf()

The `handler.getPrototypeOf()` method is a trap for the `[[GetPrototypeOf]]` internal method.

## Syntax

    const p = new Proxy(obj, {
      getPrototypeOf(target) {
      ...
      }
    });

### Parameters

The following parameter is passed to the `getPrototypeOf()` method. `this` is bound to the handler.

`target`  
The target object.

### Return value

The `getPrototypeOf()` method must return an object or `null`.

## Description

### Interceptions

This trap can intercept these operations:

-   [`Object.getPrototypeOf()`](../../object/getprototypeof)
-   [`Reflect.getPrototypeOf()`](../../reflect/getprototypeof)
-   [`__proto__`](../../object/proto)
-   [`Object.prototype.isPrototypeOf()`](../../object/isprototypeof)
-   [`instanceof`](../../../operators/instanceof)

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](../../typeerror):

-   `getPrototypeOf()` method must return an object or `null`.
-   If `target` is not extensible, `Object.getPrototypeOf(proxy)` method must return the same value as `Object.getPrototypeOf(target)`.

## Examples

### Basic usage

    const obj = {};
    const proto = {};
    const handler = {
        getPrototypeOf(target) {
            console.log(target === obj);   // true
            console.log(this === handler); // true
            return proto;
        }
    };

    const p = new Proxy(obj, handler);
    console.log(Object.getPrototypeOf(p) === proto);    // true

### Five ways to trigger the getPrototypeOf trap

    const obj = {};
    const p = new Proxy(obj, {
        getPrototypeOf(target) {
            return Array.prototype;
        }
    });
    console.log(
        Object.getPrototypeOf(p) === Array.prototype,  // true
        Reflect.getPrototypeOf(p) === Array.prototype, // true
        p.__proto__ === Array.prototype,               // true
        Array.prototype.isPrototypeOf(p),              // true
        p instanceof Array                             // true
    );

### Two kinds of exceptions

    const obj = {};
    const p = new Proxy(obj, {
        getPrototypeOf(target) {
            return 'foo';
        }
    });
    Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

    const obj = Object.preventExtensions({});
    const p = new Proxy(obj, {
        getPrototypeOf(target) {
            return {};
        }
    });
    Object.getPrototypeOf(p); // TypeError: expected same prototype value

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof</span></a></td></tr></tbody></table>

`getPrototypeOf`

49

79

49

No

36

10

49

49

49

36

10

5.0

## See also

-   [`Proxy`](../../proxy)
-   [`handler`](../proxy)
-   [`Object.getPrototypeOf()`](../../object/getprototypeof)
-   [`Reflect.getPrototypeOf()`](../../reflect/getprototypeof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf</a>
