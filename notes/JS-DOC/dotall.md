# RegExp.prototype.dotAll

The `dotAll` property indicates whether or not the "`s`" flag is used with the regular expression. `dotAll` is a read-only property of an individual regular expression instance.

Property attributes of `RegExp.prototype.dotAll`

Writable

no

Enumerable

no

Configurable

yes

## Description

The value of `dotAll` is a [`Boolean`](../boolean) and `true` if the "`s`" flag was used; otherwise, `false`. The "`s`" flag indicates that the dot special character ("`.`") should additionally match the following line terminator ("newline") characters in a string, which it would not match otherwise:

-   U+000A LINE FEED (LF) ("`\n`")
-   U+000D CARRIAGE RETURN (CR) ("`\r`")
-   U+2028 LINE SEPARATOR
-   U+2029 PARAGRAPH SEPARATOR

This effectively means the dot will match any character on the Unicode Basic Multilingual Plane (BMP). To allow it to match astral characters, the "`u`" (unicode) flag should be used. Using both flags in conjunction allows the dot to match any Unicode character, without exceptions.

You cannot change this property directly.

## Examples

### Using `dotAll`

    var str1 = 'bar\nexample foo example';

    var regex1 = new RegExp('bar.example','s');

    console.log(regex1.dotAll); // Output: true

    console.log(str1.replace(regex1,'')); // Output: foo example

    var str2 = 'bar\nexample foo example';

    var regex2 = new RegExp('bar.example');

    console.log(regex2.dotAll); // Output: false

    console.log(str2.replace(regex2,'')); // Output: bar
                                          //         example foo example

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.dotAll">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.dotAll</span></a></td></tr></tbody></table>

`dotAll`

62

79

78

No

49

12

62

62

79

46

12

8.0

## See also

-   [`RegExp.lastIndex`](lastindex)
-   [`RegExp.prototype.global`](global)
-   [`RegExp.prototype.hasIndices`](hasindices)
-   [`RegExp.prototype.ignoreCase`](ignorecase)
-   [`RegExp.prototype.multiline`](multiline)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.sticky`](sticky)
-   [`RegExp.prototype.unicode`](unicode)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll</a>
