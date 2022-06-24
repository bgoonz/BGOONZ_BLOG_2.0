---
title: Regular Expressions
template: post
subtitle: Creating a regular expression
excerpt: You construct a regular expression in one of two ways
date: 2022-06-08T05:18:45.419Z
image: https://www.computerhope.com/jargon/r/regular-expression.gif
thumb_image: https://www.computerhope.com/jargon/r/regular-expression.gif
image_position: right
author: src/data/authors/im.yaml
categories:
  - src/data/categories/awesome-lists.yaml
tags:
  - src/data/tags/career.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/awesome-resources.md
cmseditable: true
---


Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the [`exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) and [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)methods of [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), and with the [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`matchAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), and [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) methods of [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). This chapter describes JavaScript regular expressions.

## [Creating a regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#creating_a_regular_expression "Permalink to Creating a regular expression")

You construct a regular expression in one of two ways:

* Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

  ```

  ```

  Copy to Clipboard

  Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.
* Or calling the constructor function of the [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object, as follows:

  ```

  ```

  Copy to Clipboard

  Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

## [Writing a regular expression pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#writing_a_regular_expression_pattern "Permalink to Writing a regular expression pattern")

A regular expression pattern is composed of simple characters, such as `/abc/`, or a combination of simple and special characters, such as `/ab*c/` or `/Chapter (\d+)\.\d*/`. The last example includes parentheses, which are used as a memory device. The match made with this part of the pattern is remembered for later use, as described in [Using groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_groups).

**Note:** If you are already familiar with the forms of a regular expression, you may also read [the cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) for a quick lookup for a specific pattern/construct.

### [Using simple patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_simple_patterns "Permalink to Using simple patterns")

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern `/abc/` matches character combinations in strings only when the exact sequence `"abc"` occurs (all characters together and in that order). Such a match would succeed in the strings `"Hi, do you know your abc's?"` and `"The latest airplane designs evolved from slabcraft."`. In both cases the match is with the substring `"abc"`. There is no match in the string `"Grab crab"` because while it contains the substring `"ab c"`, it does not contain the exact substring `"abc"`.

### [Using special characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_special_characters "Permalink to Using special characters")

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern. For example, to match *a single `"a"` followed by zero or more `"b"`s followed by `"c"`*, you'd use the pattern `/ab*c/`: the `*` after `"b"` means "0 or more occurrences of the preceding item." In the string `"cbbabbbbcdebc"`, this pattern will match the substring `"abbbbc"`.

The following pages provide lists of the different special characters that fit into each category, along with descriptions and examples.

* [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

  Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).
* [Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

  Distinguish different types of characters. For example, distinguishing between letters and digits.
* [Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

  Indicate groups and ranges of expression characters.
* [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

  Indicate numbers of characters or expressions to match.
* [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

  Distinguish based on unicode character properties, for example, upper- and lower-case letters, math symbols, and punctuation.

If you want to look at all the special characters that can be used in regular expressions in a single table, see the following:

|                                                                                                                              |                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `\`, `.`, `\cX`, `\d`, `\D`, `\f`, `\n`, `\r`, `\s`, `\S`, `\t`, `\v`, `\w`, `\W`, `\0`, `\xhh`, `\uhhhh`, `\uhhhhh`, `[\b]` |                                                                                                                                        |
| `^`, `$`, `x(?=y)`, `x(?!y)`, `(?<=y)x`,`(?<!y)x`, `\b`, `\B`                                                                |                                                                                                                                        |
| `(x)`, `(?:x)`, `(?<Name>x)`, `x|y`, `[xyz]`, `[^xyz]`, `\Number`                                                            |                                                                                                                                        |
| `*`, `+`, `?`, `x{n}`, `x{n,}`, `x{n,m}`                                                                                     |                                                                                                                                        |
| `\p{UnicodeProperty}`,`\P{UnicodeProperty}`                                                                                  | [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) |

**Note:** [A larger cheatsheet is also available](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) (only aggregating parts of those individual articles).

### [Escaping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping "Permalink to Escaping")

If you need to use any of the special characters literally (actually searching for a `"*"`, for instance), you must escape it by putting a backslash in front of it. For instance, to search for `"a"` followed by `"*"` followed by `"b"`, you'd use `/a\*b/` — the backslash "escapes" the `"*"`, making it literal instead of special.

Similarly, if you're writing a regular expression literal and need to match a slash ("/"), you need to escape that (otherwise, it terminates the pattern). For instance, to search for the string "/example/" followed by one or more alphabetic characters, you'd use `/\/example\/[a-z]+/i`—the backslashes before each slash make them literal.

To match a literal backslash, you need to escape the backslash. For instance, to match the string "C:\" where "C" can be any letter, you'd use `/[A-Z]:\\/` — the first backslash escapes the one after it, so the expression searches for a single literal backslash.

If using the `RegExp` constructor with a string literal, remember that the backslash is an escape in string literals, so to use it in the regular expression, you need to escape it at the string literal level. `/a\*b/` and `new RegExp("a\\*b")`create the same expression, which searches for "a" followed by a literal "*" followed by "b".

If escape strings are not already part of your pattern you can add them using [`String.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

```

```

Copy to Clipboard

The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches. It is explained in detail below in [Advanced Searching With Flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags).

*Why isn't this built into JavaScript?* There is a [proposal](https://github.com/tc39/proposal-regex-escaping) to add such a function to RegExp.

### [Using parentheses](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_parentheses "Permalink to Using parentheses")

Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered. Once remembered, the substring can be recalled for other use. See [Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_groups) for more details.

## [Using regular expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascript "Permalink to Using regular expressions in JavaScript")

Regular expressions are used with the [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)methods [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) and [`exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) and with the [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)methods [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), and [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

|                                                                                                                      |                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)             | Executes a search for a match in a string. It returns an array of information or `null`on a mismatch.            |
| [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)             | Tests for a match in a string. It returns `true` or `false`.                                                     |
| [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)           | Returns an array containing all of the matches, including capturing groups, or `null` if no match is found.      |
| [`matchAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)     | Returns an iterator containing all of the matches, including capturing groups.                                   |
| [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)         | Tests for a match in a string. It returns the index of the match, or `-1` if the search fails.                   |
| [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)       | Executes a search for a match in a string, and replaces the matched substring with a replacement substring.      |
| [`replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) | Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring. |
| [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)           | Uses a regular expression or a fixed string to break a string into an array of substrings.                       |

When you want to know whether a pattern is found in a string, use the `test()` or `search()`methods; for more information (but slower execution) use the `exec()` or `match()` methods. If you use `exec()` or `match()` and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, `RegExp`. If the match fails, the `exec()` method returns `null` (which coerces to `false`).

In the following example, the script uses the `exec()` method to find a match in a string.

```

```

Copy to Clipboard

If you do not need to access the properties of the regular expression, an alternative way of creating `myArray` is with this script:

```

```

Copy to Clipboard

(See [Using the global search flag with `exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_the_global_search_flag_with_exec) for further info about the different behaviors.)

If you want to construct the regular expression from a string, yet another alternative is this script:

```

```

Copy to Clipboard

With these scripts, the match succeeds and returns the array and updates the properties shown in the following table.

|           |                                                                                                    |                                                                                                                                                                                                                                                                                    |                                                |
| --------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `myArray` |                                                                                                    | The matched string and all remembered substrings.                                                                                                                                                                                                                                  | `['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']` |
| `index`   | The 0-based index of the match in the input string.                                                | `1`                                                                                                                                                                                                                                                                                |                                                |
| `input`   | The original string.                                                                               | `'cdbbdbsbz'`                                                                                                                                                                                                                                                                      |                                                |
| `[0]`     | The last matched characters.                                                                       | `'dbbd'`                                                                                                                                                                                                                                                                           |                                                |
| `myRe`    | `lastIndex`                                                                                        | The index at which to start the next match. (This property is set only if the regular expression uses the g option, described in[Advanced Searching With Flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags).) | `5`                                            |
| `source`  | The text of the pattern. Updated at the time that the regular expression is created, not executed. | `'d(b+)d'`                                                                                                                                                                                                                                                                         |                                                |

As shown in the second form of this example, you can use a regular expression created with an object initializer without assigning it to a variable. If you do, however, every occurrence is a new regular expression. For this reason, if you use this form without assigning it to a variable, you cannot subsequently access the properties of that regular expression. For example, assume you have this script:

```

```

Copy to Clipboard

However, if you have this script:

```

```

Copy to Clipboard

The occurrences of `/d(b+)d/g` in the two statements are different regular expression objects and hence have different values for their `lastIndex` property. If you need to access the properties of a regular expression created with an object initializer, you should first assign it to a variable.

### [Advanced searching with flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags 'Permalink to Advanced searching with flags')

Regular expressions have optional flags that allow for functionality like global searching and case-insensitive searching. These flags can be used separately or together in any order, and are included as part of the regular expression.

|     |                                                                                                                                                                                                               |                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `d` | Generate indices for substring matches.                                                                                                                                                                       | [`RegExp.prototype.hasIndices`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) |
| `g` | Global search.                                                                                                                                                                                                | [`RegExp.prototype.global`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)         |
| `i` | Case-insensitive search.                                                                                                                                                                                      | [`RegExp.prototype.ignoreCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) |
| `m` | Multi-line search.                                                                                                                                                                                            | [`RegExp.prototype.multiline`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)   |
| `s` | Allows `.`to match newline characters.                                                                                                                                                                        | [`RegExp.prototype.dotAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)         |
| `u` | "unicode"; treat a pattern as a sequence of unicode code points.                                                                                                                                              | [`RegExp.prototype.unicode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)       |
| `y` | Perform a "sticky" search that matches starting at the current position in the target string. See [`sticky`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky). | [`RegExp.prototype.sticky`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)         |

To include a flag with the regular expression, use this syntax:

```

```

Copy to Clipboard

or

```

```

Copy to Clipboard

Note that the flags are an integral part of a regular expression. They cannot be added or removed later.

For example, `re = /\w+\s/g` creates a regular expression that looks for one or more characters followed by a space, and it looks for this combination throughout the string.

```

```

Copy to Clipboard

You could replace the line:

```

```

Copy to Clipboard

with:

```

```

Copy to Clipboard

and get the same result.

The `m` flag is used to specify that a multiline input string should be treated as multiple lines. If the `m`flag is used, `^` and `$` match at the start or end of any line within the input string instead of the start or end of the entire string.

#### Using the global search flag with exec()

[`RegExp.prototype.exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method with the `g` flag returns each match and its position iteratively.

```

```

Copy to Clipboard

In contrast, [`String.prototype.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) method returns all matches at once, but without their position.

```

```

Copy to Clipboard

#### Using unicode regular expressions

The "u" flag is used to create "unicode" regular expressions; that is, regular expressions which support matching against unicode text. This is mainly accomplished through the use of [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes), which are supported only within "unicode" regular expressions.

For example, the following regular expression might be used to match against an arbitrary unicode "word":

```

```

Copy to Clipboard

There are a number of other differences between unicode and non-unicode regular expressions that one should be aware of:

-   Unicode regular expressions do not support so-called "identity escapes"; that is, patterns where an escaping backslash is not needed and effectively ignored. For example, `/\a/` is a valid regular expression matching the letter 'a', but `/\a/u` is not.
-   Curly brackets need to be escaped when not used as [quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). For example, `/{/` is a valid regular expression matching the curly bracket '{', but `/{/u` is not -- instead, the bracket should be escaped and `/\{/u` should be used instead.
-   The `-` character is interpreted differently within character classes. In particular, for unicode regular expressions, `-` is interpreted as a literal `-` (and not as part of a range) only if it appears at the start or end of a pattern. For example, `/[\w-:]/` is a valid regular expression matching a word character, a `-`, or `:`, but `/\w-:/u` is an invalid regular expression, as `\w` to `:` is not a well-defined range of characters.

## [Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#examples 'Permalink to Examples')

**Note:** Several examples are also available in:

-   The reference pages for [`exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`matchAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
-   This guide articles': [character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions), [groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges), [quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers), [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

### [Using special characters to verify input](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_special_characters_to_verify_input 'Permalink to Using special characters to verify input')

In the following example, the user is expected to enter a phone number. When the user presses the "Check" button, the script checks the validity of the number. If the number is valid (matches the character sequence specified by the regular expression), the script shows a message thanking the user and confirming the number. If the number is invalid, the script informs the user that the phone number is not valid.

The regular expression looks for:

1. the beginning of the line of data: `^`
2. followed by three numeric characters `\d{3}`OR `|` a left parenthesis `\(`, followed by three digits `\d{3}`, followed by a close parenthesis `\)`, in a non-capturing group `(?:)`
3. followed by one dash, forward slash, or decimal point in a capturing group `()`
4. followed by three digits `\d{3}`
5. followed by the match remembered in the (first) captured group `\1`
6. followed by four digits `\d{4}`
7. followed by the end of the line of data: `$`

#### HTML

```

```

Copy to Clipboard

#### JavaScript

```

```

Copy to Clipboard

#### Result

[Using special characters to verify input sample](https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/_sample_.using_special_characters_to_verify_input.html)

## [Tools](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#tools 'Permalink to Tools')

-   [RegExr](https://regexr.com/)

    An online tool to learn, build, & test Regular Expressions.

-   [Regex tester](https://regex101.com/)

    An online regex builder/debugger

-   [Regex interactive tutorial](https://regexlearn.com/)

    An online interactive tutorials, Cheatsheet, & Playground.

-   [Regex visualizer](https://extendsclass.com/regex-tester.html)

    An online visual regex tester.
