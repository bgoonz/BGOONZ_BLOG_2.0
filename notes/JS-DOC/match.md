# String.prototype.match()

The `match()` method retrieves the result of matching a _string_ against a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

## Syntax

    match(regexp)

### Parameters

`regexp`  
A regular expression object.

If `regexp` is a non-`RegExp` object, it is implicitly converted to a [`RegExp`](../regexp) by using `new RegExp(regexp)`.

If you don't give any parameter and use the `match()` method directly, you will get an [`Array`](../array) with an empty string: `[""]`.

### Return value

An [`Array`](../array) whose contents depend on the presence or absence of the global (`g`) flag, or [`null`](../null) if no matches are found.

-   If the `g` flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
-   if the `g` flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.

#### Additional properties

As explained above, some results contain additional properties as described below.

`groups`  
An object of named capturing groups whose keys are the names and values are the capturing groups or [`undefined`](../undefined) if no named capturing groups were defined. See [Groups and Ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) for more information.

`index`  
The index of the search at which the result was found.

`input`  
A copy of the search string.

## Description

If the regular expression does not include the `g` flag, `str.match()` will return the same result as [`RegExp.exec()`](../regexp/exec).

### Other methods

-   If you need to know if a string matches a regular expression [`RegExp`](../regexp), use [`RegExp.test()`](../regexp/test).
-   If you only want the first match found, you might want to use [`RegExp.exec()`](../regexp/exec) instead.
-   If you want to obtain capture groups and the global flag is set, you need to use [`RegExp.exec()`](../regexp/exec) or [`String.prototype.matchAll()`](matchall) instead.

## Examples

### Using match()

In the following example, `match()` is used to find '`Chapter`' followed by 1 or more numeric characters followed by a decimal point and numeric character 0 or more times.

The regular expression includes the `i` flag so that upper/lower case differences will be ignored.

    const str = 'For more information, see Chapter 3.4.5.1';
    const re = /see (chapter \d+(\.\d)*)/i;
    const found = str.match(re);

    console.log(found);

    // logs [ 'see Chapter 3.4.5.1',
    //        'Chapter 3.4.5.1',
    //        '.1',
    //        index: 22,
    //        input: 'For more information, see Chapter 3.4.5.1' ]

    // 'see Chapter 3.4.5.1' is the whole match.
    // 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
    // '.1' was the last value captured by '(\.\d)'.
    // The 'index' property (22) is the zero-based index of the whole match.
    // The 'input' property is the original string that was parsed.

### Using global and ignore case flags with match()

The following example demonstrates the use of the global and ignore case flags with `match()`. All letters `A` through `E` and `a` through `e` are returned, each its own element in the array.

    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const regexp = /[A-E]/gi;
    const matches_array = str.match(regexp);

    console.log(matches_array);
    // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

**Note:** See also [`String.prototype.matchAll()`](matchall) and [Advanced searching with flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags).

### Using named capturing groups

In browsers which support named capturing groups, the following code captures "`fox`" or "`cat`" into a group named "`animal`":

    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

    const capturingRegex = /(?<animal>fox|cat) jumps over/;
    const found = paragraph.match(capturingRegex);
    console.log(found.groups); // {animal: "fox"}

### Using match() with no parameter

    const str = "Nothing will come of nothing.";

    str.match();   // returns [""]

### A non-RegExp object as the parameter

When the `regexp` parameter is a string or a number, it is implicitly converted to a [`RegExp`](../regexp) by using `new RegExp(regexp)`.

If it is a positive number with a positive sign, `RegExp()` will ignore the positive sign.

    const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
        str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
        str3 = "The contract was declared null and void.";
    str1.match("number");   // "number" is a string. returns ["number"]
    str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
    str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
    str1.match(+Infinity);  // returns ["Infinity"]
    str1.match(-Infinity);  // returns ["-Infinity"]
    str2.match(65);         // returns ["65"]
    str2.match(+65);        // A number with a positive sign. returns ["65"]
    str3.match(null);       // returns ["null"]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.match">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.match' in that specification.</span></a></td></tr></tbody></table>

`match`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [`String.prototype.matchAll()`](matchall)
-   [`RegExp`](../regexp)
-   [`RegExp.prototype.exec()`](../regexp/exec)
-   [`RegExp.prototype.test()`](../regexp/test)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match</a>
