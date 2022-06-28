---
title: RegExp
weight: 0
excerpt: Javascript articles  and docs
seo:
    title: ' RegExp '
    description: 'Javascript Quick Tips Directory'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


# RegExp

The `RegExp` object is used for matching text with a pattern.

For an introduction to regular expressions, read the [Regular Expressions chapter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) in the [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

## Description

### Literal notation and constructor

There are two ways to create a `RegExp` object: a _literal notation_ and a _constructor_.

- **The literal notation's** parameters are enclosed between slashes and do not use quotation marks.
- **The constructor function's** parameters are not enclosed between slashes but do use quotation marks.

The following three expressions create the same regular expression object:

    let re = /ab+c/i; // literal notation
    let re = new RegExp('ab+c', 'i') // constructor with string pattern as first argument
    let re = new RegExp(/ab+c/, 'i') // constructor with regular expression literal as first argument (Starting with ECMAScript 6)

The literal notation results in compilation of the regular expression when the expression is evaluated. Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression won't be recompiled on each iteration.

The constructor of the regular expression object—for example, `new RegExp('ab+c')`—results in runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and obtain it from another source, such as user input.

### Flags in constructor

Starting with ECMAScript 6, `new RegExp(/ab+c/, 'i')` no longer throws a [`TypeError`](typeerror) (`"can't supply flags when constructing one RegExp from another"`) when the first argument is a `RegExp` and the second `flags` argument is present. A new `RegExp` from the arguments is created instead.

When using the constructor function, the normal string escape rules (preceding special characters with `\` when included in a string) are necessary.

For example, the following are equivalent:

    let re = /\w+/
    let re = new RegExp('\\w+')

### Perl-like RegExp properties

Note that several of the [`RegExp`](regexp) properties have both long and short (Perl-like) names. Both names always refer to the same value. (Perl is the programming language from which JavaScript modeled its regular expressions.). See also [deprecated `RegExp` properties.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_properties)

## Constructor

[`RegExp()`](regexp/regexp)
Creates a new `RegExp` object.

## Static properties

[`get RegExp[@@species]`](regexp/@@species)
The constructor function that is used to create derived objects.

## Instance properties

[`RegExp.prototype.flags`](regexp/flags)
A string that contains the flags of the `RegExp` object.

[`RegExp.prototype.dotAll`](regexp/dotall)
Whether `.` matches newlines or not.

[`RegExp.prototype.global`](regexp/global)
Whether to test the regular expression against all possible matches in a string, or only against the first.

[`RegExp.prototype.hasIndices`](regexp/hasindices)
Whether the regular expression result exposes the start and end indices of captured substrings.

[`RegExp.prototype.ignoreCase`](regexp/ignorecase)
Whether to ignore case while attempting a match in a string.

[`RegExp.prototype.multiline`](regexp/multiline)
Whether or not to search in strings across multiple lines.

[`RegExp.prototype.source`](regexp/source)
The text of the pattern.

[`RegExp.prototype.sticky`](regexp/sticky)
Whether or not the search is sticky.

[`RegExp.prototype.unicode`](regexp/unicode)
Whether or not Unicode features are enabled.

[`RegExp: lastIndex`](regexp/lastindex)
The index at which to start the next match.

## Instance methods

[`RegExp.prototype.compile()`](regexp/compile) <span class="icon deprecated" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img"> This deprecated API should no longer be used, but will probably still work. </span>
(Re-)compiles a regular expression during execution of a script.

[`RegExp.prototype.exec()`](regexp/exec)
Executes a search for a match in its string parameter.

[`RegExp.prototype.test()`](regexp/test)
Tests for a match in its string parameter.

[`RegExp.prototype.toString()`](regexp/tostring)
Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`RegExp.prototype[@@match]()`](regexp/@@match)
Performs match to given string and returns match result.

[`RegExp.prototype[@@matchAll]()`](regexp/@@matchall)
Returns all matches of the regular expression against a string.

[`RegExp.prototype[@@replace]()`](regexp/@@replace)
Replaces matches in given string with new substring.

[`RegExp.prototype[@@search]()`](regexp/@@search)
Searches the match in given string and returns the index the pattern found in the string.

[`RegExp.prototype[@@split]()`](regexp/@@split)
Splits given string into an array by separating the string into substrings.

## Examples

### Using a regular expression to change data format

The following script uses the [`replace()`](string/replace) method of the [`String`](string) instance to match a name in the format _first last_ and output it in the format _last, first_.

In the replacement text, the script uses `$1` and `$2` to indicate the results of the corresponding matching parentheses in the regular expression pattern.

    let re = /(\w+)\s(\w+)/
    let str = 'John Smith'
    let newstr = str.replace(re, '$2, $1')
    console.log(newstr)

This displays `"Smith, John"`.

### Using regular expression to split lines with different line endings/ends of line/line breaks

The default line ending varies depending on the platform (Unix, Windows, etc.). The line splitting provided in this example works on all platforms.

    let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
    let lines = text.split(/\r\n|\r|\n/)
    console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

Note that the order of the patterns in the regular expression matters.

### Using regular expression on multiple lines

    let s = 'Please yes\nmake my day!'

    s.match(/yes.*day/);
    // Returns null

    s.match(/yes[^]*day/);
    // Returns ["yes\nmake my day"]

### Using a regular expression with the sticky flag

The [`sticky`](regexp/sticky) flag indicates that the regular expression performs sticky matching in the target string by attempting to match starting at [`RegExp.prototype.lastIndex`](regexp/lastindex).

    let str = '#foo#'
    let regex = /foo/y

    regex.lastIndex = 1
    regex.test(str)      // true
    regex.lastIndex = 5
    regex.test(str)      // false (lastIndex is taken into account with sticky flag)
    regex.lastIndex      // 0 (reset after match failure)

### The difference between the sticky flag and the global flag

With the sticky flag `y`, the next match has to happen at the `lastIndex` position, while with the global flag `g`, the match can happen at the `lastIndex` position or later:

    re = /\d/y;
    while (r = re.exec("123 456")) console.log(r, "AND re.lastIndex", re.lastIndex);

    // [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
    // [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
    // [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
    //   ... and no more match.

With the global flag `g`, all 6 digits would be matched, not just 3.

### Regular expression and Unicode characters

`\w` and `\W` only matches ASCII based characters; for example, `a` to `z`, `A` to `Z`, `0` to `9`, and `_`.

To match characters from other languages such as Cyrillic or Hebrew, use `\uhhhh`, where `hhhh` is the character's Unicode value in hexadecimal.

This example demonstrates how one can separate out Unicode characters from a word.

    let text = 'Образец text на русском языке'
    let regex = /[\u0400-\u04FF]+/g

    let match = regex.exec(text)
    console.log(match[0])        // logs 'Образец'
    console.log(regex.lastIndex) // logs '7'

    let match2 = regex.exec(text)
    console.log(match2[0])       // logs 'на' [did not log 'text']
    console.log(regex.lastIndex) // logs '15'

    // and so on

The [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) feature introduces a solution, by allowing for a statement as simple as `\p{scx=Cyrl}`.

### Extracting sub-domain name from URL

    let url = 'http://xxx.domain.com'
    console.log(/[^.]+/.exec(url)[0].substr(7)) // logs 'xxx'

**Note:** Instead of using regular expressions for parsing URLs, it is usually better to use the browsers built-in URL parser by using the [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL_API).
