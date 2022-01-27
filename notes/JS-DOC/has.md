# handler.has()

The `handler.has()` method is a trap for the [`in`](../../../operators/in) operator.

## Syntax

    const p = new Proxy(target, {
      has: function(target, prop) {
      }
    });

### Parameters

The following parameters are passed to `has()` method. `this` is bound to the handler.

`target`  
The target object.

`prop`  
The name or [`Symbol`](../../symbol) of the property to check for existence.

### Return value

The `has()` method must return a boolean value.

## Description

The `handler.has()` method is a trap for the [`in`](../../../operators/in) operator.

### Interceptions

This trap can intercept these operations:

-   Property query: `foo in proxy`
-   Inherited property query: `foo in Object.create(proxy)`
-   `with` check: `with(proxy) { (foo); }`
-   [`Reflect.has()`](../../reflect/has)

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](../../typeerror):

-   A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object.
-   A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible.

## Examples

### Trapping the in operator

The following code traps the [`in`](../../../operators/in) operator.

    const p = new Proxy({}, {
      has: function(target, prop) {
        console.log('called: ' + prop);
        return true;
      }
    });

    console.log('a' in p); // "called: a"
                           // true

The following code violates an invariant.

    const obj = { a: 10 };
    Object.preventExtensions(obj);

    const p = new Proxy(obj, {
      has: function(target, prop) {
        return false;
      }
    });

    'a' in p; // TypeError is thrown

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p</span></a></td></tr></tbody></table>

`has`

49

12

18

No

36

10

49

49

18

36

10

5.0

## See also

-   [`Proxy`](../../proxy)
-   [`handler`](../proxy)
-   [`in`](../../../operators/in) operator
-   [`Reflect.has()`](../../reflect/has)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has</a>
