# String.prototype.trimEnd()

The `trimEnd()` method removes whitespace from the end of a string. `trimRight()` is an alias of this method.

## Syntax

    trimEnd()

    trimRight()

### Return value

A new string representing `str` stripped of whitespace from its end (right side).

If the end of `str` has no whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

### Aliasing

For consistency with functions like [`String.prototype.padEnd`](padend) the standard method name is `trimEnd`. However, for web compatibility reasons, `trimRight` remains as an alias to `trimEnd`. In some engines this means:

    String.prototype.trimRight.name === "trimEnd";

## Examples

### Using trimEnd()

The following example displays the lowercase string `' foo'`:

    var str = '   foo  ';

    console.log(str.length); // 8

    str = str.trimEnd();
    console.log(str.length); // 6
    console.log(str);        // '   foo'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.trimend">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.trimend</span></a></td></tr></tbody></table>

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

`trimEnd`

66

4

12

61

3.5

No

53

15

12

66

≤37

66

18

61

4

47

14

12

9.0

1.0

## See also

-   [`String.prototype.trim()`](trim)
-   [`String.prototype.trimStart()`](trimstart)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd</a>
