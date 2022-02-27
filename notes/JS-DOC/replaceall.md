# String.prototype.replaceAll()

The `replaceAll()` method returns a new string with all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a [`RegExp`](../regexp), and the `replacement` can be a string or a function to be called for each match.

The original string is left unchanged.

## Syntax

    replaceAll(regexp, newSubstr)
    replaceAll(regexp, replacerFunction)

    replaceAll(substr, newSubstr)
    replaceAll(substr, replacerFunction)

**Note:** When using a \`regexp\` you have to set the global ("g") flag; otherwise, it will throw a `TypeError`: "replaceAll must be called with a global RegExp".

### Parameters

`regexp` (pattern)  
A [`RegExp`](../regexp) object or literal with the global flag. The matches are replaced with `newSubstr` or the value returned by the specified `replacerFunction`. A RegExp without the global ("g") flag will throw a `TypeError`: "replaceAll must be called with a global RegExp".

`substr`  
A [`String`](../string) that is to be replaced by `newSubstr`. It is treated as a literal string and is _not_ interpreted as a regular expression.

`newSubstr` (replacement)  
The [`String`](../string) that replaces the substring specified by the specified `regexp` or `substr` parameter. A number of special replacement patterns are supported; see the "[Specifying a string as a parameter](#specifying_a_string_as_a_parameter)" section below.

`replacerFunction` (replacement)  
A function to be invoked to create the new substring to be used to replace the matches to the given `regexp` or `substr`. The arguments supplied to this function are described in the "[Specifying a function as a parameter](#specifying_a_function_as_a_parameter)" section below.

### Return value

A new string, with all matches of a pattern replaced by a replacement.

## Description

This method does not change the calling [`String`](../string) object. It returns a new string.

### Specifying a string as a parameter

The replacement string can include the following special replacement patterns:

<table><thead><tr class="header"><th>Pattern</th><th>Inserts</th></tr></thead><tbody><tr class="odd"><td><code>$$</code></td><td>Inserts a <code>"$"</code>.</td></tr><tr class="even"><td><code>$&amp;</code></td><td>Inserts the matched substring.</td></tr><tr class="odd"><td><code>$`</code></td><td>Inserts the portion of the string that precedes the matched substring.</td></tr><tr class="even"><td><code>$'</code></td><td>Inserts the portion of the string that follows the matched substring.</td></tr><tr class="odd"><td><code>$n</code></td><td>Where <code>n</code> is a positive integer less than 100, inserts the <code>n</code>th parenthesized submatch string, provided the first argument was a <a href="../regexp"><code>RegExp</code></a> object. Note that this is <code>1</code>-indexed.</td></tr></tbody></table>

### Specifying a function as a parameter

You can specify a function as the second parameter. In this case, the function will be invoked after the match has been performed. The function's result (return value) will be used as the replacement string. (**Note:** The above-mentioned special replacement patterns do _not_ apply in this case.)

Note that if the first argument of an `replaceAll()` invocation is a [`RegExp`](../regexp) object or regular expression literal, the function will be invoked multiple times.

The arguments to the function are as follows:

<table><thead><tr class="header"><th>Possible name</th><th>Supplied value</th></tr></thead><tbody><tr class="odd"><td><code>match</code></td><td>The matched substring. (Corresponds to <code>$&amp;</code> above.)</td></tr><tr class="even"><td><code>p1, p2, ...</code></td><td>The nth string found by a parenthesized capture group, provided the first argument to <code>replaceAll()</code> was a <a href="../regexp"><code>RegExp</code></a> object. (Corresponds to <code>$1</code>, <code>$2</code>, etc. above.) For example, if <code>/(\a+)(\b+)/</code>, was given, <code>p1</code> is the match for <code>\a+</code>, and <code>p2</code> for <code>\b+</code>.</td></tr><tr class="odd"><td><code>offset</code></td><td>The offset of the matched substring within the whole string being examined. (For example, if the whole string was <code>'abcd'</code>, and the matched substring was <code>'bc'</code>, then this argument will be <code>1</code>.)</td></tr><tr class="even"><td><code>string</code></td><td>The whole string being examined.</td></tr></tbody></table>

(The exact number of arguments depends on whether the first argument is a [`RegExp`](../regexp) object—and, if so, how many parenthesized submatches it specifies.)

## Examples

### Using replaceAll

    'aabbcc'.replaceAll('b', '.');
    // 'aa..cc'

### Non-global regex throws

When using a regular expression search value, it must be global. This won't work:

    'aabbcc'.replaceAll(/b/, '.');
    TypeError: replaceAll must be called with a global RegExp

This will work:

    'aabbcc'.replaceAll(/b/g, '.');
    "aa..cc"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.replaceall">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.replaceAll' in that specification.</span></a></td></tr></tbody></table>

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

`replaceAll`

85

85

77

No

71

13.1

85

85

79

60

13.4

No

## See also

-   [`String.prototype.replace()`](replace)
-   [`String.prototype.match()`](match)
-   [`RegExp.prototype.exec()`](../regexp/exec)
-   [`RegExp.prototype.test()`](../regexp/test)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll</a>
