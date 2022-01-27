# RegExp.prototype.exec()

The `exec()` method executes a search for a match in a specified string. Returns a result array, or [`null`](../null).

JavaScript [`RegExp`](../regexp) objects are **stateful** when they have the [`global`](global) or [`sticky`](sticky) flags set (e.g. `/foo/g` or `/foo/y`). They store a [`lastIndex`](lastindex) from the previous match. Using this internally, `exec()` can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with [`String.prototype.match()`](../string/match).

A newer function has been proposed to simplify matching multiple parts of a string (with capture groups): [`String.prototype.matchAll()`](../string/matchall).

If you are executing a match to find `true` or `false`, use [`RegExp.prototype.test()`](test) method instead.

If you are executing a match to find its index position in the string, use [`String.prototype.search()`](../string/search) method instead.

## Syntax

    exec(str)

### Parameters

`str`  
The string against which to match the regular expression.

### Return value

If the match succeeds, the `exec()` method returns an array (with extra properties `index`, `input`, and if the `d` flag is set, `indices`; see below) and updates the [`lastIndex`](lastindex) property of the regular expression object. The returned array has the matched text as the first item, and then one item for each parenthetical capture group of the matched text.

If the match fails, the `exec()` method returns [`null`](../null), and sets [`lastIndex`](lastindex) to `0`.

## Description

Consider the following example:

    // Match "quick brown" followed by "jumps", ignoring characters in between
    // Remember "brown" and "jumps"
    // Ignore case
    let re = /quick\s(brown).+?(jumps)/igd;
    let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

The following table shows the state of `result` after running this script:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property/Index</th><th>Description</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>[0]</code></td><td>The full string of characters matched</td><td><code>"Quick Brown Fox Jumps"</code></td></tr><tr class="even"><td><code>[1], ...[n]</code></td><td><p>The parenthesized substring matches, if any.</p><p>The number of possible parenthesized substrings is unlimited.</p></td><td><p><code>result[1] === "Brown"</code></p><p><code>result[2] === "Jumps"</code></p></td></tr><tr class="odd"><td><code>index</code></td><td>The 0-based index of the match in the string.</td><td><code>4</code></td></tr><tr class="even"><td><code>indices</code></td><td>An array where each entry represents a substring match. Each substring match itself is an array where the first entry represents its start index and the second entry its end index. 
<br/>

The <code>indices</code> array additionally has a <code>groups</code> property which holds an object of all named capturing groups. The keys are the names of the capturing groups and each value is an array with the first item being the start entry and the second entry being the end index of the capturing group. If the regular expression doesn't contain any capturing groups, <code>groups</code> is <code>undefined</code>.</td><td><p><code>indices[0] === Array [ 4, 25 ]</code></p><p><code>indices[1] === Array [ 10, 15 ]</code></p><p><code>indices[2] === Array [ 20, 25 ]</code></p><p><code>indices.groups === undefined</code></p><p><code>indices.length === 3</code></p></td></tr><tr class="odd"><td><code>input</code></td><td>The original string that was matched against.</td><td><code>The Quick Brown Fox Jumps Over The Lazy Dog</code></td></tr></tbody></table>

The following table shows the state of `re` after running this script:

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><thead><tr class="header"><th>Property/Index</th><th>Description</th><th>Example</th></tr></thead><tbody><tr class="odd"><td><code>lastIndex</code></td><td><p>The index at which to start the next match.</p><p>If <code>g</code> is absent, this will always be <code>0</code>.</p></td><td><code>25</code></td></tr><tr class="even"><td><code>dotAll</code></td><td>Indicates if the <code>s</code> flag was used to let <code>.</code> match newlines.</td><td><code>false</code></td></tr><tr class="odd"><td><code>hasIndices</code></td><td>Indicates if the <code>d</code> flag was used to generate an <code>indices</code> property in the returned value containing start and end indices of the substring matches.</td><td><code>true</code></td></tr><tr class="even"><td><code>ignoreCase</code></td><td>Indicates if the <code>i</code> flag was used to ignore case.</td><td><code>true</code></td></tr><tr class="odd"><td><code>global</code></td><td>Indicates if the <code>g</code> flag was used for a global match.</td><td><code>true</code></td></tr><tr class="even"><td><code>multiline</code></td><td>Indicates if the <code>m</code> flag was used to search across multiple lines.</td><td><code>false</code></td></tr><tr class="odd"><td><code>source</code></td><td>The text of the pattern.</td><td><code>quick\s(brown).+?(jumps)</code></td></tr><tr class="even"><td><code>sticky</code></td><td>Indicates if the <code>y</code> flag was used to match only from the index indicated by the <code>lastIndex</code> property.</td><td><code>false</code></td></tr><tr class="odd"><td><code>unicode</code></td><td>Indicates if the <code>u</code> flag was used to treat the pattern as a sequence of Unicode code points.</td><td><code>false</code></td></tr></tbody></table>

## Examples

### Finding successive matches

If your regular expression uses the "`g`" flag, you can use the `exec()` method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of `str` specified by the regular expression's [`lastIndex`](lastindex) property ([`test()`](test) will also advance the [`lastIndex`](lastindex) property). Note that the [`lastIndex`](lastindex) property will not be reset when searching a different string, it will start its search at its existing [`lastIndex`](lastindex) .

For example, assume you have this script:

    let myRe = /ab*/g;
    let str = 'abbcdefabh';
    let myArray;
    while ((myArray = myRe.exec(str)) !== null) {
      let msg = 'Found ' + myArray[0] + '. ';
      msg += 'Next match starts at ' + myRe.lastIndex;
      console.log(msg);
    }

This script displays the following text:

    Found abb. Next match starts at 3
    Found ab. Next match starts at 9

**Warning:** **Do _not_ place the regular expression literal (or [`RegExp`](../regexp) constructor) within the `while` condition!**

It will create an infinite loop if there is a match, due to the [`lastIndex`](lastindex) property being reset upon each iteration.

Also, be sure that the global flag ("`g`") is set, or it will also cause an infinite loop.

### Using exec() with RegExp literals

You can also use `exec()` without creating a [`RegExp`](../regexp) object explicitly:

    let matches = /(hello \S+)/.exec('This is a hello world!');
    console.log(matches[1]);

This will log a message containing `'hello world!'`.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-regexp.prototype.exec">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-regexp.prototype.exec</span></a></td></tr></tbody></table>

`exec`

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

## See also

-   [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
-   [`RegExp`](../regexp)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec</a>
