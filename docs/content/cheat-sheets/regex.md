# Regular expressions

> Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions.

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the [`exec()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) and [`test()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) methods of [`RegExp`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), and with the [`match()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`matchAll()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), [`replace()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`replaceAll()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), [`search()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), and [`split()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) methods of [`String`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). This chapter describes JavaScript regular expressions.

## Creating a regular expression

You construct a regular expression in one of two ways:

-   Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

          let re = /ab+c/;

    Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.

-   Or calling the constructor function of the [`RegExp`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) object, as follows:

          let re = new RegExp('ab+c');

    Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

## Writing a regular expression pattern

A regular expression pattern is composed of simple characters, such as `/abc/`, or a combination of simple and special characters, such as `/ab*c/` or `/Chapter (\d+)\.\d*/`. The last example includes parentheses, which are used as a memory device. The match made with this part of the pattern is remembered for later use, as described in [Using groups](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#Using_groups).

**Note:** If you are already familiar with the forms of a regular expression, you may also read [the cheatsheet](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) for a quick lookup for a specific pattern/construct.

### Using simple patterns

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern `/abc/` matches character combinations in strings only when the exact sequence `"abc"` occurs (all characters together and in that order). Such a match would succeed in the strings `"Hi, do you know your abc's?"` and `"The latest airplane designs evolved from slabcraft."` In both cases the match is with the substring `"abc"`. There is no match in the string `"Grab crab"` because while it contains the substring `"ab c"`, it does not contain the exact substring `"abc"`.

### Using special characters

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern. For example, to match _a single `"a"` followed by zero or more `"b"`s followed by `"c"`_, you'd use the pattern `/ab*c/`: the `*` after `"b"` means "0 or more occurrences of the preceding item." In the string `"cbbabbbbcdebc"`, this pattern will match the substring `"abbbbc"`.

The following pages provide lists of the different special characters that fit into each category, along with descriptions and examples.

[Assertions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).

[Character classes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

Distinguish different types of characters. For example, distinguishing between letters and digits.

[Groups and ranges](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

Indicate groups and ranges of expression characters.

[Quantifiers](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

Indicate numbers of characters or expressions to match.

[Unicode property escapes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

Distinguish based on unicode character properties, for example, upper- and lower-case letters, math symbols, and punctuation.

If you want to look at all the special characters that can be used in regular expressions in a single table, see the following:

Special characters in regular expressions.
| Characters / constructs | Corresponding article |
| --- | --- |
| `\`, `.`, `\cX`, `\d`, `\D`, `\f`, `\n`, `\r`, `\s`, `\S`, `\t`, `\v`, `\w`, `\W`, `\0`, `\xhh`, `\uhhhh`, `\uhhhhh`, `[\b]` |
[Character classes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

|
| `^`, `$`, `x(?=y)`, `x(?!y)`, `(?<=y)x`, `(?<!y)x`, `\b`, `\B` |

[Assertions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

|
| `(x)`, `(?:x)`, `(?<Name>x)`, `x|y`, `[xyz]`, `[^xyz]`, `\_Number_` |

[Groups and ranges](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

|
| `*`, `+`, `?`, `x{_n_}`, `x{_n_,}`, `x{_n_,_m_}` |

[Quantifiers](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

|
| `\p{_UnicodeProperty_}`, `\P{_UnicodeProperty_}` | [Unicode property escapes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) |

### Escaping

If you need to use any of the special characters literally (actually searching for a `"*"`, for instance), you must escape it by putting a backslash in front of it. For instance, to search for `"a"` followed by `"*"` followed by `"b"`, you'd use `/a\*b/` — the backslash "escapes" the `"*"`, making it literal instead of special.

Similarly, if you're writing a regular expression literal and need to match a slash ("/"), you need to escape that (otherwise, it terminates the pattern). For instance, to search for the string "/example/" followed by one or more alphabetic characters, you'd use `/\/example\/[a-z]+/i`—the backslashes before each slash make them literal.

To match a literal backslash, you need to escape the backslash. For instance, to match the string "C:\\" where "C" can be any letter, you'd use `/[A-Z]:\\/` — the first backslash escapes the one after it, so the expression searches for a single literal backslash.

If using the `RegExp` constructor with a string literal, remember that the backslash is an escape in string literals, so to use it in the regular expression, you need to escape it at the string literal level. `/a\*b/` and `new RegExp("a\\*b")` create the same expression, which searches for "a" followed by a literal "\*" followed by "b".

If escape strings are not already part of your pattern you can add them using [`String.replace`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

    function escapeRegExp(string) {
      return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    }

The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches. It is explained in detail below in [Advanced Searching With Flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags).

_Why isn't this built into JavaScript?_ There is a proposal to add such a function to RegExp, but it was [rejected by TC39.](https://github.com/benjamingr/RegExp.escape/issues/37)

### Using parentheses

Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered. Once remembered, the substring can be recalled for other use. See [Groups and ranges](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#Using_groups) for more details.

## Using regular expressions in JavaScript

Regular expressions are used with the `RegExp` methods `test()` and `exec()` and with the `String` methods `match()`, `replace()`, `search()`, and `split()`. These methods are explained in detail in the [JavaScript reference](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference 'en-US/docs/JavaScript/Reference').

Methods that use regular expressions
| Method | Description |
| --- | --- |
| [`exec()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | Executes a search for a match in a string. It returns an array of information or `null` on a mismatch. |
| [`test()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | Tests for a match in a string. It returns `true` or `false`. |
| [`match()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) | Returns an array containing all of the matches, including capturing groups, or `null` if no match is found. |
| [`matchAll()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) | Returns an iterator containing all of the matches, including capturing groups. |
| [`search()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) | Tests for a match in a string. It returns the index of the match, or `-1` if the search fails. |
| [`replace()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) | Executes a search for a match in a string, and replaces the matched substring with a replacement substring. |
| [`replaceAll()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) | Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring. |
| [`split()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) | Uses a regular expression or a fixed string to break a string into an array of substrings. |

When you want to know whether a pattern is found in a string, use the `test()` or `search()` methods; for more information (but slower execution) use the `exec()` or `match()` methods. If you use `exec()` or `match()` and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, `RegExp`. If the match fails, the `exec()` method returns `null` (which coerces to `false`).

In the following example, the script uses the `exec()` method to find a match in a string.

    var myRe = /d(b+)d/g;
    var myArray = myRe.exec('cdbbdbsbz');

If you do not need to access the properties of the regular expression, an alternative way of creating `myArray` is with this script:

    var myArray = /d(b+)d/g.exec('cdbbdbsbz');

(See [different behaviors](#g-different-behaviors) for further info about the different behaviors.)

If you want to construct the regular expression from a string, yet another alternative is this script:

    var myRe = new RegExp('d(b+)d', 'g');
    var myArray = myRe.exec('cdbbdbsbz');

With these scripts, the match succeeds and returns the array and updates the properties shown in the following table.

Results of regular expression execution.
| Object | Property or index | Description | In this example |
| --- | --- | --- | --- |
| `myArray` | | The matched string and all remembered substrings. | `['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']` |
| `index` | The 0-based index of the match in the input string. | `1` |
| `input` | The original string. | `'cdbbdbsbz'` |
| `[0]` | The last matched characters. | `'dbbd'` |
| `myRe` | `lastIndex` | The index at which to start the next match. (This property is set only if the regular expression uses the g option, described in [Advanced Searching With Flags](#Advanced_searching_with_flags).) | `5` |
| `source` | The text of the pattern. Updated at the time that the regular expression is created, not executed. | `'d(b+)d'` |

As shown in the second form of this example, you can use a regular expression created with an object initializer without assigning it to a variable. If you do, however, every occurrence is a new regular expression. For this reason, if you use this form without assigning it to a variable, you cannot subsequently access the properties of that regular expression. For example, assume you have this script:

    var myRe = /d(b+)d/g;
    var myArray = myRe.exec('cdbbdbsbz');
    console.log('The value of lastIndex is ' + myRe.lastIndex);

However, if you have this script:

    var myArray = /d(b+)d/g.exec('cdbbdbsbz');
    console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

The occurrences of `/d(b+)d/g` in the two statements are different regular expression objects and hence have different values for their `lastIndex` property. If you need to access the properties of a regular expression created with an object initializer, you should first assign it to a variable.

### Advanced searching with flags

Regular expressions have six optional flags that allow for functionality like global and case insensitive searching. These flags can be used separately or together in any order, and are included as part of the regular expression.

Regular expression flags
| Flag | Description | Corresponding property |
| --- | --- | --- |
| `g` | Global search. | `[RegExp.prototype.global](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)` |
| `i` | Case-insensitive search. | `[RegExp.prototype.ignoreCase](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)` |
| `m` | Multi-line search. | `[RegExp.prototype.multiline](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)` |
| `s` | Allows `.` to match newline characters. | `[RegExp.prototype.dotAll](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)` |
| `u` | "unicode"; treat a pattern as a sequence of unicode code points. | `[RegExp.prototype.unicode](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)` |
| `y` | Perform a "sticky" search that matches starting at the current position in the target string. See [`sticky`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky). | `[RegExp.prototype.sticky](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)` |

To include a flag with the regular expression, use this syntax:

    var re = /pattern/flags;

or

    var re = new RegExp('pattern', 'flags');

Note that the flags are an integral part of a regular expression. They cannot be added or removed later.

For example, `re = /\w+\s/g` creates a regular expression that looks for one or more characters followed by a space, and it looks for this combination throughout the string.

    var re = /\w+\s/g;
    var str = 'fee fi fo fum';
    var myArray = str.match(re);
    console.log(myArray);

You could replace the line:

    var re = /\w+\s/g;

with:

    var re = new RegExp('\\w+\\s', 'g');

and get the same result.

The behavior associated with the `g` flag is different when the `.exec()` method is used. The roles of "class" and "argument" get reversed: In the case of `.match()`, the string class (or data type) owns the method and the regular expression is just an argument, while in the case of `.exec()`, it is the regular expression that owns the method, with the string being the argument. Contrast this _`str.match(re)`_ versus _`re.exec(str)`_. The `g` flag is used with the **`.exec()`** method to get iterative progression.

    var xArray; while(xArray = re.exec(str)) console.log(xArray);

The `m` flag is used to specify that a multiline input string should be treated as multiple lines. If the `m` flag is used, `^` and `$` match at the start or end of any line within the input string instead of the start or end of the entire string.

## Examples

**Note:** Several examples are also available in:

-   The reference pages for [`exec()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`test()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), [`match()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`matchAll()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), [`search()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), [`replace()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`split()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
-   This guide articles': [character classes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [assertions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions), [groups and ranges](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges), [quantifiers](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers), [Unicode property escapes](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

### Using special characters to verify input

In the following example, the user is expected to enter a phone number. When the user presses the "Check" button, the script checks the validity of the number. If the number is valid (matches the character sequence specified by the regular expression), the script shows a message thanking the user and confirming the number. If the number is invalid, the script informs the user that the phone number is not valid.

Within non-capturing parentheses `(?:` , the regular expression looks for three numeric characters `\d{3}` OR `|` a left parenthesis `\(` followed by three digits `\d{3}`, followed by a close parenthesis `\)`, (end non-capturing parenthesis `)`), followed by one dash, forward slash, or decimal point and when found, remember the character `([-\/\.])`, followed by three digits `\d{3}`, followed by the remembered match of a dash, forward slash, or decimal point `\1`, followed by four digits `\d{4}`.

The `Change` event activated when the user presses Enter sets the value of `RegExp.input`.

#### HTML

    <p>
      Enter your phone number (with area code) and then click "Check".
      <br>
      The expected format is like ###-###-####.
    </p>
    <form action="#">
      <input id="phone">
        <button onclick="testInfo(document.getElementById('phone'));">Check</button>
    </form>

#### JavaScript

    var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    function testInfo(phoneInput) {
      var OK = re.exec(phoneInput.value);
      if (!OK) {
        console.error(phoneInput.value + ' isn\'t a phone number with area code!');
      } else {
        console.log('Thanks, your phone number is ' + OK[0]);}
    }

#### Result

[RegExr](https://regexr.com/)

An online tool to learn, build, & test Regular Expressions.

[Regex tester](https://regex101.com/)

An online regex builder/debugger

[Regex visualizer](https://extendsclass.com/regex-tester.html)

An online visual regex tester.

## Specifications

| Specification |
| ------------- |

| [ECMAScript (ECMA-262)  
The definition of 'RegExp' in that specification.](https://tc39.es/ecma262/#sec-regexp-regular-expression-objects) |

## Browser compatibility

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)

|                                                                                                                                                | Desktop               | Mobile               | Server                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------- | ---------------------- | ----------------- | -------------------- | --------------------- | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------- | ------------------------- | ----------------------------------------- | ----------------------- |
|                                                                                                                                                | Chrome                | Edge                 | Firefox                | Internet Explorer | Opera                | Safari                | Android webview                | Chrome for Android             | Firefox for Android            | Opera for Android               | Safari on iOS             | Samsung Internet                          | Node.js                 |
| ---                                                                                                                                            | ---                   | ---                  | ---                    | ---               | ---                  | ---                   | ---                            | ---                            | ---                            | ---                             | ---                       | ---                                       | ---                     |
| [`RegExp`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)                      | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`RegExp()` constructor](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |

| [`compile`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile)
Deprecated

| Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 6 | Safari Full support 3.1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 2 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`dotAll`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) | Chrome Full support 62 | Edge Full support 79 | Firefox Full support 78 | IE No support No | Opera Full support 49 | Safari Full support 12 | WebView Android Full support 62 | Chrome Android Full support 62 | Firefox Android No support No | Opera Android Full support 46 | Safari iOS Full support 12 | Samsung Internet Android Full support 8.0 | nodejs Full support 8.10.0

Full support 8.10.0

Full support 8.3.0

Disabled

Disabled From version 8.3.0: this feature is behind the `--harmony` runtime flag.

|
| [`exec`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`flags`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) | Chrome Full support 49 | Edge Full support 79 | Firefox Full support 37 | IE No support No | Opera Full support 39 | Safari Full support 9 | WebView Android Full support 49 | Chrome Android Full support 49 | Firefox Android Full support 37 | Opera Android Full support 41 | Safari iOS Full support 9 | Samsung Internet Android Full support 5.0 | nodejs Full support 6.0.0 |
| [`global`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`ignoreCase`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`RegExp.input` (`$_`)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)

Non-standard

| Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 15 | Safari Full support 3 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 14 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`lastIndex`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`RegExp.lastMatch` (`$&`)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)

Non-standard

| Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 10.5 | Safari Full support 3 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 11 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`RegExp.lastParen` (`$+`)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)

Non-standard

| Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 10.5 | Safari Full support 3 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 11 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`RegExp.leftContext` (`` $`  ``)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)

Non-standard

| Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 8 | Safari Full support 3 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| lookbehind assertions (`(?<= )` and `(?<! )`) | Chrome Full support 62 | Edge Full support 79 | Firefox Full support 78 | IE No support No | Opera Full support 49 | Safari No support No | WebView Android Full support 62 | Chrome Android Full support 62 | Firefox Android No support No

Notes

No support No

Notes

Notes See [bug 1225665](https://bugzil.la/1225665).

| Opera Android Full support 46 | Safari iOS No support No | Samsung Internet Android Full support 8.0 | nodejs Full support 8.10.0 |
| [`multiline`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`RegExp.$1-$9`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| Named capture groups | Chrome Full support 64 | Edge Full support 79 | Firefox Full support 78 | IE No support No | Opera Full support 51 | Safari Full support 11.1 | WebView Android Full support 64 | Chrome Android Full support 64 | Firefox Android No support No | Opera Android Full support 47 | Safari iOS Full support 11.3 | Samsung Internet Android Full support 9.0 | nodejs Full support 10.0.0

Full support 10.0.0

Full support 8.3.0

Disabled

Disabled From version 8.3.0: this feature is behind the `--harmony` runtime flag.

|
| Unicode property escapes (`\p{...}`) | Chrome Full support 64 | Edge Full support 79 | Firefox Full support 78 | IE No support No | Opera Full support 51 | Safari Full support 11.1 | WebView Android Full support 64 | Chrome Android Full support 64 | Firefox Android No support No | Opera Android Full support 47 | Safari iOS Full support 11.3 | Samsung Internet Android Full support 9.0 | nodejs Full support 10.0.0

Full support 10.0.0

Full support 8.3.0

Disabled

Disabled From version 8.3.0: this feature is behind the `--harmony` runtime flag.

|
| [`RegExp.rightContext` (`$'`)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)

Non-standard

| Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 5.5 | Opera Full support 8 | Safari Full support 3 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`source`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`sticky`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) | Chrome Full support 49 | Edge Full support 13 | Firefox Full support 3 | IE No support No | Opera Full support 36 | Safari Full support 10 | WebView Android Full support 49 | Chrome Android Full support 49 | Firefox Android Full support 4 | Opera Android Full support 36 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support Yes |
| [`test`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`toSource`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toSource)

Non-standard

| Chrome No support No | Edge No support No | Firefox No support 1 — 74

Notes

No support 1 — 74

Notes

Notes Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

| IE No support No | Opera No support No | Safari No support No | WebView Android No support No | Chrome Android No support No | Firefox Android Full support 4 | Opera Android No support No | Safari iOS No support No | Samsung Internet Android No support No | nodejs No support No |
| [`toString`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString) | Chrome Full support 1 | Edge Full support 12 | Firefox Full support 1 | IE Full support 4 | Opera Full support 5 | Safari Full support 1 | WebView Android Full support 1 | Chrome Android Full support 18 | Firefox Android Full support 4 | Opera Android Full support 10.1 | Safari iOS Full support 1 | Samsung Internet Android Full support 1.0 | nodejs Full support Yes |
| [`unicode`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) | Chrome Full support 50 | Edge Full support 12

Notes

Full support 12

Notes

Notes Case folding is implemented in version 13

| Firefox Full support 46 | IE No support No | Opera Full support 37 | Safari Full support 10 | WebView Android Full support 50 | Chrome Android Full support 50 | Firefox Android Full support 46 | Opera Android Full support 37 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support Yes |
| [`@@match`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match) | Chrome Full support 50 | Edge Full support 13 | Firefox Full support 49 | IE No support No | Opera Full support 37 | Safari Full support 10 | WebView Android Full support 50 | Chrome Android Full support 50 | Firefox Android Full support 49 | Opera Android Full support 37 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support 6.0.0 |
| [`@@matchAll`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll) | Chrome Full support 73 | Edge Full support 79 | Firefox Full support 67 | IE No support No | Opera Full support 60 | Safari Full support 13 | WebView Android Full support 73 | Chrome Android Full support 73 | Firefox Android Full support 67 | Opera Android Full support 52 | Safari iOS Full support 13 | Samsung Internet Android Full support 5.0 | nodejs Full support 12.0.0 |
| [`@@replace`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) | Chrome Full support 50 | Edge Full support 79 | Firefox Full support 49 | IE No support No | Opera Full support 37 | Safari Full support 10 | WebView Android Full support 50 | Chrome Android Full support 50 | Firefox Android Full support 49 | Opera Android Full support 37 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support 6.0.0 |
| [`@@search`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search) | Chrome Full support 50 | Edge Full support 13 | Firefox Full support 49 | IE No support No | Opera Full support 37 | Safari Full support 10 | WebView Android Full support 50 | Chrome Android Full support 50 | Firefox Android Full support 49 | Opera Android Full support 37 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support 6.0.0 |
| [`@@species`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@species) | Chrome Full support 50 | Edge Full support 13 | Firefox Full support 49 | IE No support No | Opera Full support 37 | Safari Full support 10 | WebView Android Full support 50 | Chrome Android Full support 50 | Firefox Android Full support 49 | Opera Android Full support 37 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support 6.5.0

Full support 6.5.0

Full support 6.0.0

Disabled

Disabled From version 6.0.0: this feature is behind the `--harmony` runtime flag.

|
| [`@@split`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split) | Chrome Full support 50 | Edge Full support 79 | Firefox Full support 49 | IE No support No | Opera Full support 37 | Safari Full support 10 | WebView Android Full support 50 | Chrome Android Full support 50 | Firefox Android Full support 49 | Opera Android Full support 37 | Safari iOS Full support 10 | Samsung Internet Android Full support 5.0 | nodejs Full support 6.0.0 |

#### What happens next?

Our team will review your report. Once we verify the information you have supplied we will update this browser compatability table accordingly.

#### Can I keep track of my report?

You can join the GitHub repository to see updates and commits for this table data:

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

Our goal is to provide accurate, real values for all our compatibility data tables. Notifying MDN of inaccurate data or supplying new data pushes us further towards our goal of providing 100% real values to the developer community.  
Thank you for helping.

Please select the browser or browsers which are affected.

Briefly outline the issue you are highlighting. Minimum 10 and maximum 1,000 characters.

Browser documentation and release notes are good supporting items to accompany your message. A demo hosted on services like Codepen or JSBin are perfect for providing real examples of your findings.

Connection error:Sorry, we can't seem to reach the server. We are working to fix the problem. Please try again later.

### Legend

Full support

Full support

No support

No support

Non-standard. Expect poor cross-browser support.

Non-standard. Expect poor cross-browser support.

Deprecated. Not for use in new websites.

Deprecated. Not for use in new websites.

See implementation notes.

See implementation notes.

User must explicitly enable this feature.

User must explicitly enable this feature.

[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
