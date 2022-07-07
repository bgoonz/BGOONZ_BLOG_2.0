# RegExp.prototype.source

The `source` property returns a [`String`](../string) containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.

Property attributes of `RegExp.prototype.source`

Writable

no

Enumerable

no

Configurable

yes

## Examples

### Using source

    var regex = /fooBar/ig;

    console.log(regex.source); // "fooBar", doesn't contain /.../ and "ig".

### Empty regular expressions and escaping

Starting with ECMAScript 5, the `source` property no longer returns an empty string for empty regular expressions. Instead, the string `(?:)` is returned. In addition, line terminators (such as "\\n") are escaped now.

    new RegExp().source; // "(?:)"

    new RegExp('\n').source === '\n';  // true, prior to ES5
    new RegExp('\n').source === '\\n'; // true, starting with ES5

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.source">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.source</span></a></td></tr></tbody></table>

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

`source`

1

12

1

4

5

1

1

18

4

10.1

1

1.0

`empty_regex_string`

6

12

38

No

15

5

≤37

18

38

14

4.2

1.0

`escaping`

73

12

38

10

60

6

73

73

38

52

6

No

`prototype_accessor`

48

12

41

4

35

1.3

48

48

41

35

1

5.0

## See also

-   [`RegExp.prototype.flags`](flags)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source</a>
