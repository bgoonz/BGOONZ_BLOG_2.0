# String.prototype.replace()

The `replace()` method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a [`RegExp`](../regexp), and the `replacement` can be a string or a function to be called for each match. If `pattern` is a string, only the first occurrence will be replaced.

The original string is left unchanged.

## Syntax

    replace(regexp, newSubstr)
    replace(regexp, replacerFunction)

    replace(substr, newSubstr)
    replace(substr, replacerFunction)

### Parameters

`regexp` (pattern)  
A [`RegExp`](../regexp) object or literal. The match or matches are replaced with `newSubstr` or the value returned by the specified `replacerFunction`.

`substr`  
A [`String`](../string) that is to be replaced by `newSubstr`. It is treated as a literal string and is _not_ interpreted as a regular expression. Only the first occurrence will be replaced.

`newSubstr` (replacement)  
The [`String`](../string) that replaces the substring specified by the specified `regexp` or `substr` parameter. A number of special replacement patterns are supported; see the "[Specifying a string as a parameter](#specifying_a_string_as_a_parameter)" section below.

`replacerFunction` (replacement)  
A function to be invoked to create the new substring to be used to replace the matches to the given `regexp` or `substr`. The arguments supplied to this function are described in the "[Specifying a function as a parameter](#specifying_a_function_as_a_parameter)" section below.

### Return value

A new string, with some or all matches of a pattern replaced by a replacement.

## Description

This method does not change the calling [`String`](../string) object. It returns a new string.

To perform a global search and replace, include the `g` switch in the regular expression.

### Specifying a string as a parameter

The replacement string can include the following special replacement patterns:

<table><thead><tr class="header"><th>Pattern</th><th>Inserts</th></tr></thead><tbody><tr class="odd"><td><code>$$</code></td><td>Inserts a <code>"$"</code>.</td></tr><tr class="even"><td><code>$&amp;</code></td><td>Inserts the matched substring.</td></tr><tr class="odd"><td><code>$`</code></td><td>Inserts the portion of the string that precedes the matched substring.</td></tr><tr class="even"><td><code>$'</code></td><td>Inserts the portion of the string that follows the matched substring.</td></tr><tr class="odd"><td><code>$n</code></td><td>Where <code>n</code> is a positive integer less than 100, inserts the <code>n</code>th parenthesized submatch string, provided the first argument was a <a href="../regexp"><code>RegExp</code></a> object. Note that this is <code>1</code>-indexed. If a group <code>n</code> is not present (e.g., if group is 3), it will be replaced as a literal (e.g., <code>$3</code>).</td></tr><tr class="even"><td><code>$&lt;Name&gt;</code></td><td>Where <code>Name</code> is a capturing group name. If the group is not in the match, or not in the regular expression, or if a string was passed as the first argument to <code>replace</code> instead of a regular expression, this resolves to a literal (e.g., <code>$&lt;Name&gt;</code>). Only available in browser versions supporting named capturing groups.</td></tr></tbody></table>

### Specifying a function as a parameter

You can specify a function as the second parameter. In this case, the function will be invoked after the match has been performed. The function's result (return value) will be used as the replacement string. (**Note:** The above-mentioned special replacement patterns do _not_ apply in this case.)

Note that the function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

The arguments to the function are as follows:

<table><thead><tr class="header"><th>Possible name</th><th>Supplied value</th></tr></thead><tbody><tr class="odd"><td><code>match</code></td><td>The matched substring. (Corresponds to <code>$&amp;</code> above.)</td></tr><tr class="even"><td><code>p1, p2, ...</code></td><td>The nth string found by a parenthesized capture group (including named capturing groups), provided the first argument to <code>replace()</code> was a <a href="../regexp"><code>RegExp</code></a> object. (Corresponds to <code>$1</code>, <code>$2</code>, etc. above.) For example, if <code>/(\a+)(\b+)/</code>, was given, <code>p1</code> is the match for <code>\a+</code>, and <code>p2</code> for <code>\b+</code>.</td></tr><tr class="odd"><td><code>offset</code></td><td>The offset of the matched substring within the whole string being examined. (For example, if the whole string was <code>'abcd'</code>, and the matched substring was <code>'bc'</code>, then this argument will be <code>1</code>.)</td></tr><tr class="even"><td><code>string</code></td><td>The whole string being examined.</td></tr><tr class="odd"><td><code>groups</code></td><td>In browser versions supporting named capturing groups, will be an object whose keys are the used group names, and whose values are the matched portions (<code>undefined</code> if not matched).</td></tr></tbody></table>

(The exact number of arguments depends on whether the first argument is a [`RegExp`](../regexp) object—and, if so, how many parenthesized submatches it specifies.)

The following example will set `newString` to `'abc - 12345 - #$*%'`:

    function replacer(match, p1, p2, p3, offset, string) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return [p1, p2, p3].join(' - ');
    }
    let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    console.log(newString);  // abc - 12345 - #$*%

## Examples

### Defining the regular expression in replace()

In the following example, the regular expression is defined in `replace()` and includes the ignore case flag.

    let str = 'Twas the night before Xmas...';
    let newstr = str.replace(/xmas/i, 'Christmas');
    console.log(newstr);  // Twas the night before Christmas...

This logs `'Twas the night before Christmas...'`.

**Note:** See [this guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) for more explanations about regular expressions.

### Using global and ignore with replace()

Global replace can only be done with a regular expression. In the following example, the regular expression includes the [global and ignore case flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2) which permits `replace()` to replace each occurrence of `'apples'` in the string with `'oranges'`.

    let re = /apples/gi;
    let str = 'Apples are round, and apples are juicy.';
    let newstr = str.replace(re, 'oranges');
    console.log(newstr);  // oranges are round, and oranges are juicy.

This logs `'oranges are round, and oranges are juicy'`.

### Switching words in a string

The following script switches the words in the string. For the replacement text, the script uses [capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) and the `$1` and `$2` replacement patterns.

    let re = /(\w+)\s(\w+)/;
    let str = 'John Smith';
    let newstr = str.replace(re, '$2, $1');
    console.log(newstr);  // Smith, John

This logs `'Smith, John'`.

### Using an inline function that modifies the matched characters

In this example, all occurrences of capital letters in the string are converted to lower case, and a hyphen is inserted just before the match location. The important thing here is that additional operations are needed on the matched item before it is given back as a replacement.

The replacement function accepts the matched snippet as its parameter, and uses it to transform the case and concatenate the hyphen before returning.

    function styleHyphenFormat(propertyName) {
      function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
      }
      return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
    }

Given `styleHyphenFormat('borderTop')`, this returns `'border-top'`.

Because we want to further transform the _result_ of the match before the final substitution is made, we must use a function. This forces the evaluation of the match prior to the [`toLowerCase()`](tolowercase) method. If we had tried to do this using the match without a function, the [`toLowerCase()`](tolowercase) would have no effect.

    let newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work

This is because `'$&'.toLowerCase()` would first be evaluated as a string literal (resulting in the same `'$&'`) before using the characters as a pattern.

### Replacing a Fahrenheit degree with its Celsius equivalent

The following example replaces a Fahrenheit degree with its equivalent Celsius degree. The Fahrenheit degree should be a number ending with `"F"`. The function returns the Celsius number ending with `"C"`. For example, if the input number is `"212F"`, the function returns `"100C"`. If the number is `"0F"`, the function returns `"-17.77777777777778C"`.

The regular expression `test` checks for any number that ends with `F`. The number of Fahrenheit degree is accessible to the function through its second parameter, `p1`. The function sets the Celsius number based on the Fahrenheit degree passed in a string to the `f2c()` function. `f2c()` then returns the Celsius number. This function approximates Perl's `s///e` flag.

    function f2c(x) {
      function convert(str, p1, offset, s) {
        return ((p1 - 32) * 5/9) + 'C';
      }
      let s = String(x);
      let test = /(-?\d+(?:\.\d*)?)F\b/g;
      return s.replace(test, convert);
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.replace">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.replace' in that specification.</span></a></td></tr></tbody></table>

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

`replace`

1

12

1

5.5

4-5.5

A replacement function as second argument is not supported.

4

1

1

18

4

10.1

1

1.0

## See also

-   [`String.prototype.replaceAll()`](replaceall)
-   [`String.prototype.match()`](match)
-   [`RegExp.prototype.exec()`](../regexp/exec)
-   [`RegExp.prototype.test()`](../regexp/test)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace</a>
