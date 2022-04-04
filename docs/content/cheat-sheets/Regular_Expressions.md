---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

description: |
Regular expressions are patterns used to match character combinations in
strings. In JavaScript, regular expressions are also objects. These
patterns are used with the exec() and test() methods of RegExp, and with
the match(), matchAll(), replace(), replaceAll(), search(), and split()
methods of String. This chapter describes JavaScript regular
expressions.

Regular expressions are patterns used to match character combinations in
strings. In JavaScript, regular expressions are also objects. These
patterns are used with the exec() and test() methods of RegExp, and with
the match(), matchAll(), replace(), replaceAll(), search(), and split()
methods of String. This chapter describes JavaScript regular
expressions.

---

<!-- -->

</div>

Regular expressions are patterns used to match character combinations in
strings. In JavaScript, regular expressions are also objects. These
patterns are used with the
[`exec()`](../Reference/Global_Objects/RegExp/exec.html)
and [`test()`](../Reference/Global_Objects/RegExp/test.html) methods of
[`RegExp`](../Reference/Global_Objects/RegExp.html), and with
the [`match()`](../Reference/Global_Objects/String/match.html), [`matchAll()`](../Reference/Global_Objects/String/matchAll.html),
[`replace()`](../Reference/Global_Objects/String/replace.html), [`replaceAll()`](../Reference/Global_Objects/String/replaceAll.html),
[`search()`](../Reference/Global_Objects/String/search.html),
and [`split()`](../Reference/Global_Objects/String/split.html) methods
of [`String`](../Reference/Global_Objects/String.html). This chapter
describes JavaScript regular expressions.

## Creating a regular expression {#Creating_a_regular_expression}

You construct a regular expression in one of two ways:

-   Using a regular expression literal, which consists of a pattern
    enclosed between slashes, as follows:

    ```{.brush: .js .notranslate}
    let re = /ab+c/;
    ```

    Regular expression literals provide compilation of the regular
    expression when the script is loaded. If the regular
    expression remains constant, using this can improve performance.

-   Or calling the constructor function of the
    [`RegExp`](../Reference/Global_Objects/RegExp.html) object, as
    follows:

    ```{.brush: .js .notranslate}
    let re = new RegExp('ab+c');
    ```

    Using the constructor function provides runtime compilation of the
    regular expression. Use the constructor function when you know the
    regular expression pattern will be changing, or you don\'t know the
    pattern and are getting it from another source, such as user input.

## Writing a regular expression pattern {#Writing_a_regular_expression_pattern}

A regular expression pattern is composed of simple characters, such as
`/abc/`, or a combination of simple and special characters, such as
`/ab*c/` or `/Chapter (\d+)\.\d*/`. The last example includes
parentheses, which are used as a memory device. The match made with this
part of the pattern is remembered for later use, as described in [Using
groups](Regular_Expressions/Groups_and_Ranges.html#Using_groups).

::: {.blockIndicator .note}
**Note:** If you are already familiar with the forms of a regular
expression, you may also read [the
cheatsheet](Regular_Expressions/Cheatsheet.html) for a quick lookup for
a specific pattern/construct.
:::

### Using simple patterns {#Using_simple_patterns}

Simple patterns are constructed of characters for which you want to find
a direct match. For example, the pattern `/abc/` matches character
combinations in strings only when the exact sequence `"abc"` occurs (all
characters together and in that order). Such a match would succeed in
the strings `"Hi, do you know your abc's?"` and
`"The latest airplane designs evolved from slabcraft."` In both cases
the match is with the substring `"abc"`. There is no match in the string
`"Grab crab"` because while it contains the substring `"ab c"`, it does
not contain the exact substring `"abc"`.

### Using special characters {#Using_special_characters}

When the search for a match requires something more than a direct match,
such as finding one or more b\'s, or finding white space, you can
include special characters in the pattern. For example, to match _a
single `"a"` followed by zero or more `"b"`s followed by `"c"`_, you\'d
use the pattern `/ab*c/`: the `*` after `"b"` means \"0 or more
occurrences of the preceding item.\" In the string `"cbbabbbbcdebc"`,
this pattern will match the substring `"abbbbc"`.

The following pages provide lists of the different special characters
that fit into each category, along with descriptions and examples.

[Assertions](Regular_Expressions/Assertions.html)
: Assertions include boundaries, which indicate the beginnings and
endings of lines and words, and other patterns indicating in some
way that a match is possible (including look-ahead, look-behind, and
conditional expressions).

[Character classes](Regular_Expressions/Character_Classes.html)
: Distinguish different types of characters. For example,
distinguishing between letters and digits.

[Groups and ranges](Regular_Expressions/Groups_and_Ranges.html)
: Indicate groups and ranges of expression characters.

[Quantifiers](Regular_Expressions/Quantifiers.html)
: Indicate numbers of characters or expressions to match.

[Unicode property escapes](Regular_Expressions/Unicode_Property_Escapes.html)
: Distinguish based on unicode character properties, for example,
upper- and lower-case letters, math symbols, and punctuation.

If you want to look at all the special characters that can be used in
regular expressions in a single table, see the following:

```
+-----------------------------------+-----------------------------------+
| Characters / constructs           | Corresponding article             |
+===================================+===================================+
| `\`, `.`, `\cX`, `\d`, `\D`,      | [Character                        |
| `\f`, `\n`, `\r`, `\s`, `\S`,     | classes](Regular_Expressions/Char |
| `\t`, `\v`, `\w`, `\W`, `\0`,     | acter_Classes.html)               |
| `\xhh`, `\uhhhh`, `\uhhhhh`,      |                                   |
| `[\b]`                            |                                   |
+-----------------------------------+-----------------------------------+
| `^`, `$`, `x(?=y)`, `x(?!y)`,     | [Assertions](Regular_Expressions/ |
| `(?<=y)x`, `(?<!y)x`, `\b`, `\B`  | Assertions.html)                  |
+-----------------------------------+-----------------------------------+
| `(x)`, `(?:x)`,                   | [Groups and                       |
| `(?<Name>x)`, `x|y`, `[xyz]`,     | ranges](Regular_Expressions/Group |
| `[^xyz]`, `\Number`               | s_and_Ranges.html)                |
+-----------------------------------+-----------------------------------+
| `*`, `+`, `?`, `x{n}`, `x{n,}`,   | [Quantifiers](Regular_Expressions |
| `x{n,m}`                          | /Quantifiers.html)                |
+-----------------------------------+-----------------------------------+
| `\p{UnicodeProperty}`,            | [Unicode property                 |
| `\P{UnicodeProperty}`             | escapes](Regular_Expressions/Unic |
|                                   | ode_Property_Escapes.html)        |
+-----------------------------------+-----------------------------------+

```

: Special characters in regular expressions.

::: {.blockIndicator .note}
**Note:** [A larger cheatsheet is also
available](Regular_Expressions/Cheatsheet.html) (only aggregating parts
of those individual articles).
:::

### Escaping {#Escaping}

If you need to use any of the special characters literally (actually
searching for a `"*"`, for instance), you must escape it by putting a
backslash in front of it. For instance, to search for `"a"` followed by
`"*"` followed by `"b"`, you\'d use `/a\*b/` --- the backslash
\"escapes\" the `"*"`, making it literal instead of special.

Similarly, if you\'re writing a regular expression literal and need to
match a slash (\"/\"), you need to escape that (otherwise, it terminates
the pattern). For instance, to search for the string \"/example/\"
followed by one or more alphabetic characters, you\'d use
`/\/example\/[a-z]+/i`---the backslashes before each slash make them
literal.

To match a literal backslash, you need to escape the backslash. For
instance, to match the string \"C:\\\" where \"C\" can be any letter,
you\'d use `/[A-Z]:\\/` --- the first backslash escapes the one after
it, so the expression searches for a single literal backslash.

If using the `RegExp` constructor with a string literal, remember that
the backslash is an escape in string literals, so to use it in the
regular expression, you need to escape it at the string literal
level. `/a\*b/` and `new RegExp("a\\*b")` create the same expression,
which searches for \"a\" followed by a literal \"\*\" followed by \"b\".

If escape strings are not already part of your pattern you can add them
using
[`String.replace`](../Reference/Global_Objects/String/replace.html):

```{.brush: .js .notranslate}
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
```

The \"g\" after the regular expression is an option or flag that
performs a global search, looking in the whole string and returning all
matches. It is explained in detail below in [Advanced Searching With
Flags](Regular_Expressions.html#Advanced_searching_with_flags).

_Why isn\'t this built into JavaScript?_ There is a proposal to add such
a function to RegExp, but it was [rejected by
TC39.](../../../../../../external.html?link=https://github.com/benjamingr/RegExp.escape/issues/37){.external}

### Using parentheses

Parentheses around any part of the regular expression pattern causes
that part of the matched substring to be remembered. Once remembered,
the substring can be recalled for other use. See [Groups and
ranges](Regular_Expressions/Groups_and_Ranges.html#Using_groups) for
more details.

## Using regular expressions in JavaScript {#Using_regular_expressions_in_JavaScript}

Regular expressions are used with the `RegExp` methods `test()` and
`exec()` and with the `String` methods `match()`, `replace()`,
`search()`, and `split()`. These methods are explained in detail in the
[JavaScript
reference](../Reference.html 'en-US/docs/JavaScript/Reference').

Method Description

---

[`exec()`](../Reference/Global_Objects/RegExp/exec.html) Executes a search for a match in a string. It returns an array of information or `null` on a mismatch.
[`test()`](../Reference/Global_Objects/RegExp/test.html) Tests for a match in a string. It returns `true` or `false`.
[`match()`](../Reference/Global_Objects/String/match.html) Returns an array containing all of the matches, including capturing groups, or `null` if no match is found.
[`matchAll()`](../Reference/Global_Objects/String/matchAll.html) Returns an iterator containing all of the matches, including capturing groups.
[`search()`](../Reference/Global_Objects/String/search.html) Tests for a match in a string. It returns the index of the match, or `-1` if the search fails.
[`replace()`](../Reference/Global_Objects/String/replace.html) Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
[`replaceAll()`](../Reference/Global_Objects/String/replaceAll.html) Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
[`split()`](../Reference/Global_Objects/String/split.html) Uses a regular expression or a fixed string to break a string into an array of substrings.

: Methods that use regular expressions

When you want to know whether a pattern is found in a string, use the
`test()` or `search()` methods; for more information (but slower
execution) use the `exec()` or `match()` methods. If you use `exec()` or
`match()` and if the match succeeds, these methods return an array and
update properties of the associated regular expression object and also
of the predefined regular expression object, `RegExp`. If the match
fails, the `exec()` method returns `null` (which coerces to `false`).

In the following example, the script uses the `exec()` method to find a
match in a string.

```{.brush: .js .notranslate}
let myRe = /d(b+)d/g;
let myArray = myRe.exec('cdbbdbsbz');
```

If you do not need to access the properties of the regular expression,
an alternative way of creating `myArray` is with this script:

```{.brush: .js .notranslate}
let myArray = /d(b+)d/g.exec('cdbbdbsbz');
    // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
    // "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while
    // /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].
```

(See [different behaviors](#g-different-behaviors) for further info
about the different behaviors.)

If you want to construct the regular expression from a string, yet
another alternative is this script:

```{.brush: .js .notranslate}
let myRe = new RegExp('d(b+)d', 'g');
let myArray = myRe.exec('cdbbdbsbz');
```

With these scripts, the match succeeds and returns the array and updates
the properties shown in the following table.

Results of regular expression execution.

Object
:::
:::
:::
:::

Property or index

Description

In this example

`myArray`

The matched string and all remembered substrings.

`['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']`

`index`

The 0-based index of the match in the input string.

`1`

`input`

The original string.

`'cdbbdbsbz'`

`[0]`

The last matched characters.

`'dbbd'`

`myRe`

`lastIndex`

The index at which to start the next match. (This property is set only
if the regular expression uses the g option, described in [Advanced
Searching With Flags](#Advanced_searching_with_flags).)

`5`

`source`

The text of the pattern. Updated at the time that the regular expression
is created, not executed.

`'d(b+)d'`

As shown in the second form of this example, you can use a regular
expression created with an object initializer without assigning it to a
letiable. If you do, however, every occurrence is a new regular
expression. For this reason, if you use this form without assigning it
to a letiable, you cannot subsequently access the properties of that
regular expression. For example, assume you have this script:

```{.brush: .js .notranslate}
let myRe = /d(b+)d/g;
let myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);

// "The value of lastIndex is 5"
```

However, if you have this script:

```{.brush: .js .notranslate}
let myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

// "The value of lastIndex is 0"
```

The occurrences of `/d(b+)d/g` in the two statements are different
regular expression objects and hence have different values for their
`lastIndex` property. If you need to access the properties of a regular
expression created with an object initializer, you should first assign
it to a letiable.

### [Advanced searching with flags]

Regular expressions have six optional flags that allow for functionality
like global and case insensitive searching. These flags can be used
separately or together in any order, and are included as part of the
regular expression.

Flag Description Corresponding property

---

`g` Global search. `RegExp.prototype.global`
`i` Case-insensitive search. `RegExp.prototype.ignoreCase`
`m` Multi-line search. `RegExp.prototype.multiline`
`s` Allows `.` to match newline characters. `RegExp.prototype.dotAll`
`u` \"unicode\"; treat a pattern as a sequence of unicode code points. `RegExp.prototype.unicode`
`y` Perform a \"sticky\" search that matches starting at the current position in the target string. See [`sticky`](../Reference/Global_Objects/RegExp/sticky.html). `RegExp.prototype.sticky`

: Regular expression flags

To include a flag with the regular expression, use this syntax:

```{.brush: .js .notranslate}
let re = /pattern/flags;
```

or

```{.brush: .js .notranslate}
let re = new RegExp('pattern', 'flags');
```

Note that the flags are an integral part of a regular expression. They
cannot be added or removed later.

For example, `re = /\w+\s/g` creates a regular expression that looks for
one or more characters followed by a space, and it looks for this
combination throughout the string.

```{.brush: .js .notranslate}
let re = /\w+\s/g;
let str = 'fee fi fo fum';
let myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

You could replace the line:

```{.brush: .js .notranslate}
let re = /\w+\s/g;
```

with:

```{.brush: .js .notranslate}
let re = new RegExp('\\w+\\s', 'g');
```

and get the same result.

The behavior associated with the `g` flag is different when the
`.exec()` method is used. The roles of \"class\" and \"argument\" get
reversed: In the case of `.match()`, the string class (or data type)
owns the method and the regular expression is just an argument, while in
the case of `.exec()`, it is the regular expression that owns the
method, with the string being the argument. Contrast this
_`str.match(re)`_ versus _`re.exec(str)`_. The `g` flag is used with
the **`.exec()`** method to get iterative progression.

```{.brush: .js .notranslate}
let xArray; while(xArray = re.exec(str)) console.log(xArray);
// produces:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

The `m` flag is used to specify that a multiline input string should be
treated as multiple lines. If the `m` flag is used, `^` and `$` match at
the start or end of any line within the input string instead of the
start or end of the entire string.

## Examples

::: {.blockIndicator .note}
**Note:** Several examples are also available in:

-   The reference pages for
    [`exec()`](../Reference/Global_Objects/RegExp/exec.html),
    [`test()`](../Reference/Global_Objects/RegExp/test.html),
    [`match()`](../Reference/Global_Objects/String/match.html),
    [`matchAll()`](../Reference/Global_Objects/String/matchAll.html),
    [`search()`](../Reference/Global_Objects/String/search.html),
    [`replace()`](../Reference/Global_Objects/String/replace.html),
    [`split()`](../Reference/Global_Objects/String/split.html)
-   This guide articles\': [character
    classes](Regular_Expressions/Character_Classes.html),
    [assertions](Regular_Expressions/Assertions.html), [groups and
    ranges](Regular_Expressions/Groups_and_Ranges.html),
    [quantifiers](Regular_Expressions/Quantifiers.html), [Unicode
    property escapes](Regular_Expressions/Unicode_Property_Escapes.html)
    :::

### Using special characters to verify input {#Using_special_characters_to_verify_input}

In the following example, the user is expected to enter a phone number.
When the user presses the \"Check\" button, the script checks the
validity of the number. If the number is valid (matches the character
sequence specified by the regular expression), the script shows a
message thanking the user and confirming the number. If the number is
invalid, the script informs the user that the phone number is not valid.

Within non-capturing parentheses `(?:` , the regular expression looks
for three numeric characters `\d{3}` OR `|` a left parenthesis `\(`
followed by three digits` \d{3}`, followed by a close parenthesis `\)`,
(end non-capturing parenthesis `)`), followed by one dash, forward
slash, or decimal point and when found, remember the character
`([-\/\.])`, followed by three digits `\d{3}`, followed by the
remembered match of a dash, forward slash, or decimal point `\1`,
followed by four digits `\d{4}`.

The `Change` event activated when the user presses Enter sets the value
of `RegExp.input`.

#### HTML {#HTML}

```{.brush: .html .notranslate}
<p>
  Enter your phone number (with area code) and then click "Check".
  <br>
  The expected format is like ###-###-####.
</p>
<form action="#">
  <input id="phone">
    <button onclick="testInfo(document.getElementById('phone'));">Check</button>
</form>
```

#### JavaScript

```js
let re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
    let OK = re.exec(phoneInput.value);
    if (!OK) {
        console.error(phoneInput.value + " isn't a phone number with area code!");
    } else {
        console.log('Thanks, your phone number is ' + OK[0]);
    }
}
```

#### Result {#Result}

<div>

## Tools {#Tools}

[RegExr](../../../../../../external.html?link=https://regexr.com/){.external}
: An online tool to learn, build, & test Regular Expressions.

[Regex tester](../../../../../../external.html?link=https://regex101.com/){.external}
: An online regex builder/debugger

[Regex visualizer](../../../../../../external.html?link=https://extendsclass.com/regex-tester.html){.external}
: An online visual regex tester.

## Specifications {#Specifications}

---
