# String.prototype.trim()

The `trim()` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

## Syntax

    trim()

### Return value

A new string representing `str` stripped of whitespace from both its beginning and end.

If neither the beginning or end of `str` has any whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

To return a new string with whitespace trimmed from just one end, use [`trimStart()`](trimstart) or [`trimEnd()`](trimend).

## Polyfill

Running the following code before any other code will create `trim()` if it's not natively available.

    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }

## Examples

### Using `trim()`

The following example displays the lowercase string `'foo'`:

    var orig = '   foo  ';
    console.log(orig.trim()); // 'foo'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.trim">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.trim' in that specification.</span></a></td></tr></tbody></table>

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

`Trim`

4

12

3.5

10

10.5

5

≤37

18

4

11

5

1.0

## See also

-   [`String.prototype.trimStart()`](trimstart)
-   [`String.prototype.trimEnd()`](trimend)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim</a>
