# Symbol.toPrimitive

The `Symbol.toPrimitive` is a symbol that specifies a function valued property that is called to convert an object to a corresponding primitive value.

## Description

With the help of the `Symbol.toPrimitive` property (used as a function value), an object can be converted to a primitive value. The function is called with a string argument `hint`, which specifies the preferred type of the result primitive value. The `hint` argument can be one of "`number`", "`string`", and "`default`".

Property attributes of `Symbol.toPrimitive`

Writable

no

Enumerable

no

Configurable

no

## Examples

### Modifying primitive values converted from an object

Following example describes how `Symbol.toPrimitive` property can modify the primitive value converted from an object.

    // An object without Symbol.toPrimitive property.
    var obj1 = {};
    console.log(+obj1);     // NaN
    console.log(`${obj1}`); // "[object Object]"
    console.log(obj1 + ''); // "[object Object]"

    // An object with Symbol.toPrimitive property.
    var obj2 = {
      [Symbol.toPrimitive](hint) {
        if (hint == 'number') {
          return 10;
        }
        if (hint == 'string') {
          return 'hello';
        }
        return true;
      }
    };
    console.log(+obj2);     // 10        -- hint is "number"
    console.log(`${obj2}`); // "hello"   -- hint is "string"
    console.log(obj2 + ''); // "true"    -- hint is "default"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.toprimitive">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.toprimitive</span></a></td></tr></tbody></table>

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

`toPrimitive`

47

15

44

No

34

10

47

47

44

34

10

5.0

## See also

-   [`Date.prototype[@@toPrimitive]`](../date/@@toprimitive)
-   [`Symbol.prototype[@@toPrimitive]`](@@toprimitive)
-   [`Object.prototype.toString()`](../object/tostring)
-   [`Object.prototype.valueOf()`](../object/valueof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive</a>
