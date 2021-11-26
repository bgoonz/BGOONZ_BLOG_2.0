Regular Expressions
===================

description:

------------------------------------------------------------------------

#### <a href="http://medium.com/codex" class="markup--anchor markup--h4-anchor">CODEX</a>

### Regular Expressions

<figure><img src="https://cdn-images-1.medium.com/max/800/0*VdDVM2Nzv6oGC5I0.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*D83R_a0SSgMR0hI4jP6Asw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*vk5n412Bs-dx6UdgyUywdg.png" class="graf-image" /></figure>### description:

*Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the* `exec()` *and* `test()` *methods of* `RegExp`*, and with the* `match()`*,* `matchAll()`*,* `replace()`*,* `replaceAll()`*,* `search()`*, and* `split()` *methods of* `String`*. This chapter describes JavaScript regular expressions.*

### Creating a regular expression

You construct a regular expression in one of two ways:

1.  <span id="8a7f">**Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:**</span>

`let re = /ab+c/;`

-   <span id="f4e2">Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.</span>

**2. Or calling the constructor function of the** `RegExp` **object, as follows:**

-   <span id="2016">`let re = new RegExp('ab+c');`</span>

> *Using the constructor function provides runtime compilation of the regular expression*. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

### Writing a regular expression pattern

A regular expression pattern is composed of simple characters, such as `/abc/`, or a combination of simple and special characters, such as `/ab*c/` or `/Chapter (\d+)\.\d*/`.

The last example includes **parentheses, which are used as a memory device**. *The match made with this part of the pattern is remembered for later use.*

### Using simple patterns

Simple patterns are constructed of characters for which you want to find a direct match.

For example, the pattern `/abc/` matches character combinations in strings only when the exact sequence `"abc"` occurs (all characters together and in that order).

Such a match would succeed in the strings `"Hi, do you know your abc's?"` and `"The latest airplane designs evolved from slabcraft."`

In both cases the match is with the substring `"abc"`.

There is no match in the string `"Grab crab"` because while it contains the substring `"ab c"`, it does not contain the exact substring `"abc"`.

### Using special characters

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern.

For example, to match *a single* `"a"` *followed by zero or more* `"b"`*s followed by* `"c"`, you'd use the pattern `/ab*c/`:

> the `*` after `"b"` means "0 or more occurrences of the preceding item." In the string `"cbbabbbbcdebc"`, this pattern will match the substring `"abbbbc"`.

<a href="https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Assertions.html" class="markup--anchor markup--p-anchor"><strong>Assertions</strong></a>** : Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).**

<a href="https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Character_Classes.html" class="markup--anchor markup--p-anchor"><strong>Character classes</strong></a>** : Distinguish different types of characters. For example, distinguishing between letters and digits.**

<a href="https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Groups_and_Ranges.html" class="markup--anchor markup--p-anchor"><strong>Groups and ranges</strong></a>** : Indicate groups and ranges of expression characters.**

<a href="https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Quantifiers.html" class="markup--anchor markup--p-anchor"><strong>Quantifiers</strong></a>** : Indicate numbers of characters or expressions to match.**

<a href="https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Unicode_Property_Escapes.html" class="markup--anchor markup--p-anchor"><strong>Unicode property escapes</strong></a>** : Distinguish based on unicode character properties, for example, upper- and lower-case letters, math symbols, and punctuation.**

If you want to look at all the special characters that can be used in regular expressions in a single table, see the following:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Wk5zFr1IHJxacq2a2zi5RQ.png" class="graf-image" /></figure>### Special characters in regular expressions.

### Escaping

If you need to use any of the special characters literally (actually searching for a `"*"`, for instance), you must escape it by putting a **backslash** in front of it.

For instance, to search for `"a"` followed by `"*"` followed by `"b"`,

> you'd use `/a\*b/` --- the backslash "escapes" the `"*"`, making it literal instead of special.

Similarly, if you're writing a regular expression literal and need to match a slash ("/"), you need to escape that (otherwise, it terminates the pattern)

For instance, to search for the string "/example/" followed by one or more alphabetic characters, you'd use `/\/example\/[a-z]+/i`

**--the backslashes before each slash make them literal.**

To match a literal backslash, you need to escape the backslash.

For instance, to match the string "C:\\" where "C" can be any letter,

you'd use `/[A-Z]:\\/`

--- the first backslash escapes the one after it, so the expression searches for a single literal backslash.

If using the `RegExp` constructor with a string literal, **remember that the backslash is an escape in string literals, so to use it in the regular expression, you need to escape it at the string literal level**.

`/a\*b/` and `new RegExp("a\\*b")` create the same expression,

which searches for "a" followed by a literal "\*" followed by "b".

If escape strings are not already part of your pattern you can add them using `String.replace`:

    function escapeRegExp(string) {
      return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

**The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.**

### Using parentheses

Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered.

Once remembered, the substring can be recalled for other use.

### Using regular expressions in JavaScript

Regular expressions are used with the `RegExp` **methods**

`test()` **and** `exec()`

and with the `String` **methods** `match()`**,** `replace()`**,** `search()`**, and** `split()`**.**

------------------------------------------------------------------------

### Method Descriptions

#### `exec()`

Executes a search for a match in a string.

It returns an array of information or `null` on a mismatch.

#### `test()`

Tests for a match in a string.

It returns `true` or `false`.

#### `match()`

Returns an array containing all of the matches, including capturing groups, or `null` if no match is found.

#### `matchAll()`

Returns an iterator containing all of the matches, including capturing groups.

#### `search()`

Tests for a match in a string.

It returns the index of the match, or `-1` if the search fails.

#### `replace()`

Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

#### `replaceAll()`

Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.

#### `split()`

Uses a regular expression or a fixed string to break a string into an array of substrings.

### Methods that use regular expressions

When you want to know whether a pattern is found in a string, use the `test()` or `search()` methods;

for more information (but slower execution) use the `exec()` or `match()` methods.

If you use `exec()` or `match()` and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, `RegExp`.

If the **match fails, the** `exec()` **method returns** `null` (which coerces to `false`).

In the following example, the script uses the `exec()` method to find a match in a string.

    let myRe = /d(b+)d/g;
    let myArray = myRe.exec('cdbbdbsbz');

If you do not need to access the properties of the regular expression, an alternative way of creating `myArray` is with this script:

    let myArray = /d(b+)d/g.exec('cdbbdbsbz'); 
        // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
        // "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while 
        // /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].

(See <a href="https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions.md#g-different-behaviors" class="markup--anchor markup--p-anchor">different behaviors</a> for further info about the different behaviors.)

If you want to construct the regular expression from a string, yet another alternative is this script:

    let myRe = new RegExp('d(b+)d', 'g');
    let myArray = myRe.exec('cdbbdbsbz');

With these scripts, the match succeeds and returns the array and updates the properties shown in the following table.

Results of regular expression execution.

You can use a regular expression created with an object initializer without assigning it to a letiable.

If you do, however, every occurrence is a new regular expression.

For this reason, if you use this form without assigning it to a letiable, you cannot subsequently access the properties of that regular expression.

For example, assume you have this script:

    let myRe = /d(b+)d/g;
    let myArray = myRe.exec('cdbbdbsbz');
    console.log('The value of lastIndex is ' + myRe.lastIndex);

    // "The value of lastIndex is 5"

However, if you have this script:

    let myArray = /d(b+)d/g.exec('cdbbdbsbz');
    console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

    // "The value of lastIndex is 0"

The occurrences of `/d(b+)d/g` in the two statements are different regular expression objects and hence have different values for their `lastIndex` property.

If you need to access the properties of a regular expression created with an object initializer, you should first assign it to a variable.

### \[Advanced searching with flags\]

Regular expressions have **six optional flags** that allow for functionality like global and case insensitive searching.

These flags can be used separately or together in any order, and are included as part of the regular expression.

Flag Description Corresponding property

------------------------------------------------------------------------

`g` Global search. `RegExp.prototype.global`

`i` Case-insensitive search. `RegExp.prototype.ignoreCase`

`m` Multi-line search. `RegExp.prototype.multiline`

`s` Allows `.` to match newline characters. `RegExp.prototype.dotAll`

`u` "unicode"; treat a pattern as a sequence of unicode code points. `RegExp.prototype.unicode`

`y` Perform a "sticky" search that matches starting at the current position in the target string. `RegExp.prototype.sticky`

#### Regular expression flags

*To include a flag with the regular expression, use this syntax:*

    let re = /pattern/flags;

or

    let re = new RegExp('pattern', 'flags');

Note that the flags are an integral part of a regular expression. They cannot be added or removed later.

For example, `re = /\w+\s/g` creates a regular expression that looks for one or more characters followed by a space, and it looks for this combination throughout the string.

    let re = /\w+\s/g;
    let str = 'fee fi fo fum';
    let myArray = str.match(re);
    console.log(myArray);

    // ["fee ", "fi ", "fo "]

You could replace the line:

    let re = /\w+\s/g;

with:

    let re = new RegExp('\\w+\\s', 'g');

and get the same result.

The behavior associated with the `g` flag is different when the `.exec()` method is used.

The roles of "class" and "argument" get reversed:

In the case of `.match()`, the string class (or data type) owns the method and the regular expression is just an argument,

while in the case of `.exec()`, it is the regular expression that owns the method, with the string being the argument.

Contrast this `str.match(re)` versus `re.exec(str)`.

The `g` flag is used with the `.exec()` method to get iterative progression.

    let xArray; while(xArray = re.exec(str)) console.log(xArray);
    // produces: 
    // ["fee ", index: 0, input: "fee fi fo fum"]
    // ["fi ", index: 4, input: "fee fi fo fum"]
    // ["fo ", index: 7, input: "fee fi fo fum"]

The `m` flag is used to specify that a multiline input string should be treated as multiple lines.

If the `m` flag is used, `^` and `$` match at the start or end of any line within the input string instead of the start or end of the entire string.

### Using special characters to verify input

In the following example, the user is expected to enter a phone number. When the user presses the "Check" button, the script checks the validity of the number. If the number is valid (matches the character sequence specified by the regular expression), the script shows a message thanking the user and confirming the number. If the number is invalid, the script informs the user that the phone number is not valid.

Within non-capturing parentheses `(?:` , the regular expression looks for three numeric characters `\d{3}` OR `|` a left parenthesis `\(` followed by three digits` \d{3}`, followed by a close parenthesis `\)`, (end non-capturing parenthesis `)`), followed by one dash, forward slash, or decimal point and when found, remember the character `([-\/\.])`, followed by three digits `\d{3}`, followed by the remembered match of a dash, forward slash, or decimal point `\1`, followed by four digits `\d{4}`.

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

    let re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    function testInfo(phoneInput) {
      let OK = re.exec(phoneInput.value);
      if (!OK) {
        console.error(phoneInput.value + ' isn\'t a phone number with area code!'); 
      } else {
        console.log('Thanks, your phone number is ' + OK[0]);}
    }

### Cheat Sheet

<figure><img src="https://cdn-images-1.medium.com/max/800/1*VmpGy_BYCekOncdyrgSrxw.png" class="graf-image" /></figure>#### If you found this guide helpful feel free to checkout my GitHub/gist's where I host similar content:

> <a href="https://gist.github.com/bgoonz" class="markup--anchor markup--blockquote-anchor"><strong>bgoonz’s</strong> gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/4d8fb3eb146b).

<a href="https://medium.com/@bryanguner/regular-expressions-4d8fb3eb146b" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
