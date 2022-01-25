# String.prototype.substring()

The `substring()` method returns the part of the `string` between the start and end indexes, or to the end of the string.

## Syntax

    substring(indexStart)
    substring(indexStart, indexEnd)

### Parameters

`indexStart`  
The index of the first character to include in the returned substring.

`indexEnd` <span class="badge inline optional">Optional</span>  
The index of the first character to exclude from the returned substring.

### Return value

A new string containing the specified part of the given string.

## Description

`substring()` extracts characters from `indexStart` up to _but not including_ `indexEnd`. In particular:

-   If `indexEnd` is omitted, `substring()` extracts characters to the end of the string.
-   If `indexStart` is equal to `indexEnd`, `substring()` returns an empty string.
-   If `indexStart` is greater than `indexEnd`, then the effect of `substring()` is as if the two arguments were swapped; See example below.

Any argument value that is less than `0` or greater than `stringName.length` is treated as if it were `0` and `stringName.length`, respectively.

Any argument value that is [`NaN`](../nan) is treated as if it were `0`.

## Examples

### Using substring()

The following example uses `substring()` to display characters from the string `'Mozilla'`:

    let anyString = 'Mozilla'

    // Displays 'M'
    console.log(anyString.substring(0, 1))
    console.log(anyString.substring(1, 0))

    // Displays 'Mozill'
    console.log(anyString.substring(0, 6))

    // Displays 'lla'
    console.log(anyString.substring(4))
    console.log(anyString.substring(4, 7))
    console.log(anyString.substring(7, 4))

    // Displays 'Mozilla'
    console.log(anyString.substring(0, 7))
    console.log(anyString.substring(0, 10))

### Using substring() with length property

The following example uses the `substring()` method and [`length`](length) property to extract the last characters of a particular string. This method may be easier to remember, given that you don't need to know the starting and ending indices as you would in the above examples.

    // Displays 'illa' the last 4 characters
    let anyString = 'Mozilla'
    let anyString4 = anyString.substring(anyString.length - 4)
    console.log(anyString4)

    // Displays 'zilla' the last 5 characters
    let anyString = 'Mozilla'
    let anyString5 = anyString.substring(anyString.length - 5)
    console.log(anyString5)

### The difference between substring() and substr()

There's a subtle difference between the `substring()` and [`substr()`](substr) methods, so you should be careful not to get them confused.

The arguments of `substring()` represent the starting and ending indexes, while the arguments of `substr()` represent the starting index and the number of characters to include in the returned string.

Furthermore, `substr()` is considered a **legacy feature in ECMAScript** and could be removed from future versions, so it is best to avoid using it if possible.

    let text = 'Mozilla'
    console.log(text.substring(2,5))  // => "zil"
    console.log(text.substr(2,3))     // => "zil"

### Differences between substring() and slice()

The `substring()` and [`slice()`](slice) methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The `substring()` method swaps its two arguments if `indexStart` is greater than `indexEnd`, meaning that a string is still returned. The [`slice()`](slice) method returns an empty string if this is the case.

    let text = 'Mozilla'
    console.log(text.substring(5, 2))  // => "zil"
    console.log(text.slice(5, 2))      // => ""

If either or both of the arguments are negative or `NaN`, the `substring()` method treats them as if they were `0`.

    console.log(text.substring(-5, 2))  // => "Mo"
    console.log(text.substring(-5, -2)) // => ""

`slice()` also treats `NaN` arguments as `0`, but when it is given negative values it counts backwards from the end of the string to find the indexes.

    console.log(text.slice(-5, 2))   // => ""
    console.log(text.slice(-5, -2))  // => "zil"

See the [`slice()`](slice) page for more examples with negative numbers.

### Replacing a substring within a string

The following example replaces a substring within a string. It will replace both individual characters and substrings. The function call at the end of the example changes the string `Brave New World` to `Brave New Web`.

    // Replaces oldS with newS in the string fullS
    function replaceString(oldS, newS, fullS) {
      for (let i = 0; i < fullS.length; ++i) {
        if (fullS.substring(i, i + oldS.length) == oldS) {
          fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
        }
      }
      return fullS
    }

    replaceString('World', 'Web', 'Brave New World')

Note that this can result in an infinite loop if `oldS` is itself a substring of `newS` — for example, if you attempted to replace '`World`' with '`OtherWorld`' here.

A better method for replacing strings is as follows:

    function replaceString(oldS, newS, fullS) {
      return fullS.split(oldS).join(newS)
    }

The code above serves as an example for substring operations. If you need to replace substrings, most of the time you will want to use [`String.prototype.replace()`](replace).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.substring">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.substring' in that specification.</span></a></td></tr></tbody></table>

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

`substring`

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

-   [`String.prototype.substr()`](substr)
-   [`String.prototype.slice()`](slice)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring</a>
