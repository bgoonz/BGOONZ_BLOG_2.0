# String.prototype.split()

The `split()` method divides a [`String`](../string) into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

## Syntax

    split()
    split(separator)
    split(separator, limit)

### Parameters

`separator` <span class="badge inline optional">Optional</span>  
The pattern describing where each split should occur. The `separator` can be a simple string or it can be a [regular expression](../regexp).

-   The simplest case is when `separator` is just a single character; this is used to split a delimited string. For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: `myString.split("\t")`.
-   If `separator` contains multiple characters, that entire character sequence must be found in order to split.
-   If `separator` is omitted or does not occur in `str`, the returned array contains one element consisting of the entire string.
-   If `separator` appears at the beginning (or end) of the string, it still has the effect of splitting. The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
-   If `separator` is an empty string (`""`), `str` is converted to an array of each of its UTF-16 "characters".

**Warning:** When the empty string (`""`) is used as a separator, the string is **not** split by _user-perceived characters_ ([grapheme clusters](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) or unicode characters (codepoints), but by UTF-16 codeunits. This destroys [surrogate pairs](https://unicode.org/faq/utf_bom.html#utf16-2). See ["How do you get a string to a character array in JavaScript?” on StackOverflow](https://stackoverflow.com/a/34717402).

`limit` <span class="badge inline optional">Optional</span>  
A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified `separator`, but stops when `limit` entries have been placed in the array. Any leftover text is not included in the array at all.

-   The array may contain fewer entries than `limit` if the end of the string is reached before the limit is reached.
-   If `limit` is `0`, `[]` is returned.

### Return value

An [`Array`](../array) of strings, split at each point where the `separator` occurs in the given string.

## Description

When found, `separator` is removed from the string, and the substrings are returned in an array.

If `separator` is a regular expression with capturing parentheses, then each time `separator` matches, the results (including any `undefined` results) of the capturing parentheses are spliced into the output array.

If the separator is an array, then that Array is coerced to a String and used as a separator.

## Examples

### Using `split()`

When the string is empty, `split()` returns an array containing one empty string, rather than an empty array. If the string and separator are both empty strings, an empty array is returned.

    const myString = ''
    const splits = myString.split()

    console.log(splits)

    // ↪ [""]

The following example defines a function that splits a string into an array of strings using `separator`. After splitting the string, the function logs messages indicating the original string (before the split), the separator used, the number of elements in the array, and the individual array elements.

    function splitString(stringToSplit, separator) {
      const arrayOfStrings = stringToSplit.split(separator)

      console.log('The original string is: ', stringToSplit)
      console.log('The separator is: ', separator)
      console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
    }

    const tempestString = 'Oh brave new world that has such people in it.'
    const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

    const space = ' '
    const comma = ','

    splitString(tempestString, space)
    splitString(tempestString)
    splitString(monthString, comma)

This example produces the following output:

    The original string is: "Oh brave new world that has such people in it."
    The separator is: " "
    The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

    The original string is: "Oh brave new world that has such people in it."
    The separator is: "undefined"
    The array has 1 elements: Oh brave new world that has such people in it.

    The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
    The separator is: ","
    The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec

### Removing spaces from a string

In the following example, `split()` looks for zero or more spaces, followed by a semicolon, followed by zero or more spaces—and, when found, removes the spaces and the semicolon from the string. `nameList` is the array returned as a result of `split()`.

    const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

    console.log(names)

    const re = /\s*(?:;|$)\s*/
    const nameList = names.split(re)

    console.log(nameList)

This logs two lines; the first line logs the original string, and the second line logs the resulting array.

    Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
    [ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]

### Returning a limited number of splits

In the following example, `split()` looks for spaces in a string and returns the first 3 splits that it finds.

    const myString = 'Hello World. How are you doing?'
    const splits = myString.split(' ', 3)

    console.log(splits)

This script displays the following:

    ["Hello", "World.", "How"]

### Splitting with a `RegExp` to include parts of the separator in the result

If `separator` is a regular expression that contains capturing parentheses ` (``) `, matched results are included in the array.

    const myString = 'Hello 1 word. Sentence number 2.'
    const splits = myString.split(/(\d)/)

    console.log(splits)

This script displays the following:

    [ "Hello ", "1", " word. Sentence number ", "2", "." ]

**Note:** `\d` matches the [character class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) for digits between 0 and 9.

### Reversing a String using `split()`

**Warning:** This is not a robust way to reverse a string:

    const str = 'asdfghjkl'
    const strReverse = str.split('').reverse().join('')
    // 'lkjhgfdsa'

    // split() returns an array on which reverse() and join() can be applied

It doesn't work if the string contains grapheme clusters, even when using a unicode-aware split. (Use, for example, [esrever](https://github.com/mathiasbynens/esrever) instead.)

    const str = 'résumé'
    const strReverse = str.split(/(?:)/u).reverse().join('')
    // => "́emuśer"

**Bonus:** use [`===`](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#identity_strict_equality_(===)>) operator to test if the original string was a palindrome.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.split">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.split</span></a></td></tr></tbody></table>

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

`split`

1

12

1

4

3

1

1

18

4

10.1

1

1.0

## See also

-   [`String.prototype.charAt()`](charat)
-   [`String.prototype.indexOf()`](indexof)
-   [`String.prototype.lastIndexOf()`](lastindexof)
-   [`Array.prototype.join()`](../array/join)
-   [Using regular expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split</a>
