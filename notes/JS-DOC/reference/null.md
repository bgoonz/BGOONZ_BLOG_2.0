# null

The value `null` represents the intentional absence of any object value. It is one of JavaScript's [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) and is treated as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) for boolean operations.

## Syntax

    null

## Description

The value `null` is written with a literal: `null`. `null` is not an identifier for a property of the global object, like [`undefined`](undefined) can be. Instead, `null` expresses a lack of identification, indicating that a variable points to no object. In APIs, `null` is often retrieved in a place where an object can be expected but no object is relevant.

    // foo does not exist. It is not defined and has never been initialized:
    foo; //ReferenceError: foo is not defined

    // foo is known to exist now but it has no type or value:
    var foo = null;
    foo; //null

## Examples

### Difference between `null` and `undefined`

When checking for `null` or `undefined`, beware of the [differences between equality (==) and identity (===) operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators), as the former performs type-conversion.

    typeof null          // "object" (not "null" for legacy reasons)
    typeof undefined     // "undefined"
    null === undefined   // false
    null  == undefined   // true
    null === null        // true
    null == null         // true
    !null                // true
    isNaN(1 + null)      // false
    isNaN(1 + undefined) // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-null-value">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-null-value</span></a></td></tr></tbody></table>

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

`null`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`undefined`](undefined)
-   [`NaN`](nan)
-   [`void operator`](../operators/void)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null</a>
