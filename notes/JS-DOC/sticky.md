# RegExp.prototype.sticky

The `sticky` property reflects whether or not the search is sticky (searches in strings only from the index indicated by the [`lastIndex`](lastindex) property of this regular expression). `sticky` is a read-only property of an individual regular expression object.

Property attributes of `RegExp.prototype.sticky`

Writable

no

Enumerable

no

Configurable

yes

## Description

The value of `sticky` is a [`Boolean`](../boolean) and true if the "`y`" flag was used; otherwise, false. The "`y`" flag indicates that it matches only from the index indicated by the [`lastIndex`](lastindex) property of this regular expression in the target string (and does not attempt to match from any later indexes). A regular expression defined as both `sticky` and `global` ignores the `global` flag.

You cannot change this property directly. It is read-only.

## Examples

### Using a regular expression with the sticky flag

    var str = '#foo#';
    var regex = /foo/y;

    regex.lastIndex = 1;
    regex.test(str); // true
    regex.lastIndex = 5;
    regex.test(str); // false (lastIndex is taken into account with sticky flag)
    regex.lastIndex; // 0 (reset after match failure)

### Anchored sticky flag

For several versions, Firefox's SpiderMonkey engine had [a bug](https://bugzilla.mozilla.org/show_bug.cgi?id=773687) with regard to the `^` assertion and the sticky flag which allowed expressions starting with the `^` assertion and using the sticky flag to match when they shouldn't. The bug was introduced some time after Firefox 3.6 (which had the sticky flag but not the bug) and fixed in 2015. Perhaps because of the bug, the ES2015 specification [specifically calls out](https://www.ecma-international.org/ecma-262/7.0/index.html#sec-assertion) the fact that:

> When the `y` flag is used with a pattern, ^ always matches only at the beginning of the input, or (if `multiline` is `true`) at the beginning of a line.

Examples of correct behavior:

    var regex = /^foo/y;
    regex.lastIndex = 2;
    regex.test('..foo');   // false - index 2 is not the beginning of the string

    var regex2 = /^foo/my;
    regex2.lastIndex = 2;
    regex2.test('..foo');  // false - index 2 is not the beginning of the string or line
    regex2.lastIndex = 2;
    regex2.test('.\nfoo'); // true - index 2 is the beginning of a line

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.sticky</span></a></td></tr></tbody></table>

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

`sticky`

49

13

3

No

36

10

49

49

4

36

10

5.0

`anchored_sticky_flag`

49

13

44

No

36

10

49

49

44

36

10

5.0

`prototype_accessor`

49

13

38

No

36

10

49

49

38

36

10

5.0

## See also

-   [`RegExp.lastIndex`](lastindex)
-   [`RegExp.prototype.dotAll`](dotall)
-   [`RegExp.prototype.global`](global)
-   [`RegExp.prototype.hasIndices`](hasindices)
-   [`RegExp.prototype.ignoreCase`](ignorecase)
-   [`RegExp.prototype.multiline`](multiline)
-   [`RegExp.prototype.source`](source)
-   [`RegExp.prototype.unicode`](unicode)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky</a>
