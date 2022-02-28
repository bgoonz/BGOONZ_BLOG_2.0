# String.prototype.toUpperCase()

The `toUpperCase()` method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

## Syntax

    toUpperCase()

### Return value

A new string representing the calling string converted to upper case.

### Exceptions

[`TypeError`](../typeerror)  
When called on [`null`](../null) or [`undefined`](../undefined), for example, `String.prototype.toUpperCase.call(undefined)`.

## Description

The `toUpperCase()` method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

## Examples

### Basic usage

    console.log('alphabet'.toUpperCase()); // 'ALPHABET'

### Conversion of non-string `this` values to strings

This method will convert any non-string value to a string, when you set its `this` to a value that is not a string:

    const a = String.prototype.toUpperCase.call({
      toString: function toString() {
        return 'abcdef';
      }
    });

    const b = String.prototype.toUpperCase.call(true);

    // prints out 'ABCDEF TRUE'.
    console.log(a, b);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.touppercase">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.touppercase</span></a></td></tr></tbody></table>

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

`toUpperCase`

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

-   [`String.prototype.toLocaleLowerCase()`](tolocalelowercase)
-   [`String.prototype.toLocaleUpperCase()`](tolocaleuppercase)
-   [`String.prototype.toLowerCase()`](tolowercase)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase</a>
