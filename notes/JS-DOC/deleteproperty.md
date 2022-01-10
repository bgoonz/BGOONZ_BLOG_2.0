# handler.deleteProperty()

The `handler.deleteProperty()` method is a trap for the [`delete`](../../../operators/delete) operator.

## Syntax

    const p = new Proxy(target, {
      deleteProperty: function(target, property) {
      }
    });

### Parameters

The following parameters are passed to the `deleteProperty()` method. `this` is bound to the handler.

`target`  
The target object.

`property`  
The name or [`Symbol`](../../symbol) of the property to delete.

### Return value

The `deleteProperty()` method must return a [`Boolean`](../../boolean) indicating whether or not the property has been successfully deleted.

## Description

The `handler.deleteProperty()` method is a trap for the [`delete`](../../../operators/delete) operator.

### Interceptions

This trap can intercept these operations:

-   Property deletion: `delete proxy[foo]` and `delete proxy.foo`
-   [`Reflect.deleteProperty()`](../../reflect/deleteproperty)

### Invariants

If the following invariants are violated, the proxy will throw a [`TypeError`](../../typeerror):

-   A property cannot be deleted, if it exists as a non-configurable own property of the target object.

## Examples

### Trapping the delete operator

The following code traps the [`delete`](../../../operators/delete) operator.

    const p = new Proxy({}, {
      deleteProperty: function(target, prop) {
        if (prop in target){
          delete target[prop]
          console.log('property removed: ' + prop)
          return true
        }
        else {
          console.log('property not found: ' + prop)
          return false
        }
      }
    })

    let result

    p.a = 10
    console.log('a' in p)  // true

    result = delete p.a    // "property removed: a"
    console.log(result)    // true
    console.log('a' in p)  // false

    result = delete p.a    // "property not found: a"
    console.log(result)    // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-delete-p">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-proxy-object-internal-methods-and-internal-slots-delete-p</span></a></td></tr></tbody></table>

`deleteProperty`

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
-   [`delete`](../../../operators/delete) operator
-   [`Reflect.deleteProperty()`](../../reflect/deleteproperty)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty</a>
