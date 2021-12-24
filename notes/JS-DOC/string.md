# String

The `String` object is used to represent and manipulate a sequence of characters.

## Description

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their [`length`](string/length), to build and concatenate them using the [+ and += string operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators), checking for the existence or location of substrings with the [`indexOf()`](string/indexof) method, or extracting substrings with the [`substring()`](string/substring) method.

### Creating strings

Strings can be created as primitives, from string literals, or as objects, using the [`String()`](string/string) constructor:

    const string1 = "A string primitive";
    const string2 = 'Also a string primitive';
    const string3 = `Yet another string primitive`;

    const string4 = new String("A String object");

String primitives and string objects can be used interchangeably in most situations. See "[String primitives and String objects](#string_primitives_and_string_objects)" below.

String literals can be specified using single or double quotes, which are treated identically, or using the backtick character \`. This last form specifies a [template literal](../template_literals): with this form you can interpolate expressions.

### Character access

There are two ways to access an individual character in a string. The first is the [`charAt()`](string/charat) method:

    return 'cat'.charAt(1) // returns "a"

The other way (introduced in ECMAScript 5) is to treat the string as an array-like object, where individual characters correspond to a numerical index:

    return 'cat'[1] // returns "a"

When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable. (See [`Object.defineProperty()`](object/defineproperty) for more information.)

### Comparing strings

In C, the `strcmp()` function is used for comparing strings. In JavaScript, you just use the [less-than and greater-than operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators):

    let a = 'a'
    let b = 'b'
    if (a < b) { // true
      console.log(a + ' is less than ' + b)
    } else if (a > b) {
      console.log(a + ' is greater than ' + b)
    } else {
      console.log(a + ' and ' + b + ' are equal.')
    }

A similar result can be achieved using the [`localeCompare()`](string/localecompare) method inherited by `String` instances.

Note that `a == b` compares the strings in `a` and `b` for being equal in the usual case-sensitive way. If you wish to compare without regard to upper or lower case characters, use a function similar to this:

    function isEqual(str1, str2)
    {
        return str1.toUpperCase() === str2.toUpperCase()
    } // isEqual

Upper case is used instead of lower case in this function, due to problems with certain UTF-8 character conversions.

### String primitives and String objects

Note that JavaScript distinguishes between `String` objects and [primitive string](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) values. (The same is true of [`Boolean`](boolean) and [`Numbers`](number).)

String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (that is, called without using the [`new`](../operators/new) keyword) are primitive strings. JavaScript automatically converts primitives to `String` objects, so that it's possible to use `String` object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.

    let s_prim = 'foo'
    let s_obj = new String(s_prim)

    console.log(typeof s_prim) // Logs "string"
    console.log(typeof s_obj)  // Logs "object"

String primitives and `String` objects also give different results when using [`eval()`](eval). Primitives passed to `eval` are treated as source code; `String` objects are treated as all other objects are, by returning the object. For example:

    let s1 = '2 + 2'              // creates a string primitive
    let s2 = new String('2 + 2')  // creates a String object
    console.log(eval(s1))         // returns the number 4
    console.log(eval(s2))         // returns the string "2 + 2"

For these reasons, the code may break when it encounters `String` objects when it expects a primitive string instead, although generally, authors need not worry about the distinction.

A `String` object can always be converted to its primitive counterpart with the [`valueOf()`](string/valueof) method.

    console.log(eval(s2.valueOf()))  // returns the number 4

### <span id="escape_sequences">Escape sequences</span>

Special characters can be encoded using escape sequences:

<table><thead><tr class="header"><th>Escape sequence</th><th>Unicode code point</th></tr></thead><tbody><tr class="odd"><td><code>\0</code></td><td>null character (U+0000 NULL)</td></tr><tr class="even"><td><code>\'</code></td><td>single quote (U+0027 APOSTROPHE)</td></tr><tr class="odd"><td><code>\"</code></td><td>double quote (U+0022 QUOTATION MARK)</td></tr><tr class="even"><td><code>\\</code></td><td>backslash (U+005C REVERSE SOLIDUS)</td></tr><tr class="odd"><td><code>\n</code></td><td>newline (U+000A LINE FEED; LF)</td></tr><tr class="even"><td><code>\r</code></td><td>carriage return (U+000D CARRIAGE RETURN; CR)</td></tr><tr class="odd"><td><code>\v</code></td><td>vertical tab (U+000B LINE TABULATION)</td></tr><tr class="even"><td><code>\t</code></td><td>tab (U+0009 CHARACTER TABULATION)</td></tr><tr class="odd"><td><code>\b</code></td><td>backspace (U+0008 BACKSPACE)</td></tr><tr class="even"><td><code>\f</code></td><td>form feed (U+000C FORM FEED)</td></tr><tr class="odd"><td><code>\uXXXX</code> 
<br/>

…where <code>XXXX</code> is exactly 4 hex digits in the range <code>0000</code>–<code>FFFF</code>; e.g., <code>\u000A</code> is the same as <code>\n</code> (LINE FEED); <code>\u0021</code> is "<code>!</code>"</td><td>Unicode code point between <code>U+0000</code> and <code>U+FFFF</code> (the Unicode Basic Multilingual Plane)</td></tr><tr class="even"><td><code>\u{X}</code>…<code>\u{XXXXXX}</code>
<br/>

…where <code>X</code>…<code>XXXXXX</code> is 1–6 hex digits in the range <code>0</code>–<code>10FFFF</code>; e.g., <code>\u{A}</code> is the same as <code>\n</code> (LINE FEED); <code>\u{21}</code> is "<code>!</code>"</td><td>Unicode code point between <code>U+0000</code> and <code>U+10FFFF</code> (the entirety of Unicode)</td></tr><tr class="odd"><td><code>\xXX</code>
<br/>

…where <code>XX</code> is exactly 2 hex digits in the range <code>00</code>–<code>FF</code>; e.g., <code>\x0A</code> is the same as <code>\n</code> (LINE FEED); <code>\x21</code> is "<code>!</code>"</td><td>Unicode code point between <code>U+0000</code> and <code>U+00FF</code> (the Basic Latin and Latin-1 Supplement blocks; equivalent to ISO-8859-1)</td></tr></tbody></table>

### Long literal strings

Sometimes, your code will include strings which are very long. Rather than having lines that go on endlessly, or wrap at the whim of your editor, you may wish to specifically break the string into multiple lines in the source code without affecting the actual string contents. There are two ways you can do this.

#### Method 1

You can use the [+](../operators/addition) operator to append multiple strings together, like this:

    let longString = "This is a very long string which needs " +
                     "to wrap across multiple lines because " +
                     "otherwise my code is unreadable."

#### Method 2

You can use the backslash character (`\`) at the end of each line to indicate that the string will continue on the next line. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work.

That form looks like this:

    let longString = "This is a very long string which needs \
    to wrap across multiple lines because \
    otherwise my code is unreadable."

Both of the above methods result in identical strings.

## Constructor

[`String()`](string/string)  
Creates a new `String` object. It performs type conversion when called as a function, rather than as a constructor, which is usually more useful.

## Static methods

[`String.fromCharCode(num1 [, ...[, numN]])`](string/fromcharcode)  
Returns a string created by using the specified sequence of Unicode values.

[`String.fromCodePoint(num1 [, ...[, numN)`](string/fromcodepoint)  
Returns a string created by using the specified sequence of code points.

[`String.raw()`](string/raw)  
Returns a string created from a raw template string.

## Instance properties

[`String.prototype.length`](string/length)  
Reflects the `length` of the string. Read-only.

## Instance methods

[`String.prototype.at(index)`](string/at)<span class="icon experimental" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img"> This is an experimental API that should not be used in production code. </span>  
Returns the character (exactly one UTF-16 code unit) at the specified `index`. Accepts negative integers, which count back from the last string character.

[`String.prototype.charAt(index)`](string/charat)  
Returns the character (exactly one UTF-16 code unit) at the specified `index`.

[`String.prototype.charCodeAt(index)`](string/charcodeat)  
Returns a number that is the UTF-16 code unit value at the given `index`.

[`String.prototype.codePointAt(pos)`](string/codepointat)  
Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified `pos`.

[`String.prototype.concat(str [, ...strN ])`](string/concat)  
Combines the text of two (or more) strings and returns a new string.

[`String.prototype.includes(searchString [, position])`](string/includes)  
Determines whether the calling string contains `searchString`.

[`String.prototype.endsWith(searchString [, length])`](string/endswith)  
Determines whether a string ends with the characters of the string `searchString`.

[`String.prototype.indexOf(searchValue [, fromIndex])`](string/indexof)  
Returns the index within the calling [`String`](string) object of the first occurrence of `searchValue`, or `-1` if not found.

[`String.prototype.lastIndexOf(searchValue [, fromIndex])`](string/lastindexof)  
Returns the index within the calling [`String`](string) object of the last occurrence of `searchValue`, or `-1` if not found.

[`String.prototype.localeCompare(compareString [, locales [, options]])`](string/localecompare)  
Returns a number indicating whether the reference string `compareString` comes before, after, or is equivalent to the given string in sort order.

[`String.prototype.match(regexp)`](string/match)  
Used to match regular expression `regexp` against a string.

[`String.prototype.matchAll(regexp)`](string/matchall)  
Returns an iterator of all `regexp`'s matches.

[`String.prototype.normalize([form])`](string/normalize)  
Returns the Unicode Normalization Form of the calling string value.

[`String.prototype.padEnd(targetLength [, padString])`](string/padend)  
Pads the current string from the end with a given string and returns a new string of the length `targetLength`.

[`String.prototype.padStart(targetLength [, padString])`](string/padstart)  
Pads the current string from the start with a given string and returns a new string of the length `targetLength`.

[`String.prototype.repeat(count)`](string/repeat)  
Returns a string consisting of the elements of the object repeated `count` times.

[`String.prototype.replace(searchFor, replaceWith)`](string/replace)  
Used to replace occurrences of `searchFor` using `replaceWith`. `searchFor` may be a string or Regular Expression, and `replaceWith` may be a string or function.

[`String.prototype.replaceAll(searchFor, replaceWith)`](string/replaceall)  
Used to replace all occurrences of `searchFor` using `replaceWith`. `searchFor` may be a string or Regular Expression, and `replaceWith` may be a string or function.

[`String.prototype.search(regexp)`](string/search)  
Search for a match between a regular expression `regexp` and the calling string.

[`String.prototype.slice(beginIndex[, endIndex])`](string/slice)  
Extracts a section of a string and returns a new string.

[`String.prototype.split([sep [, limit] ])`](string/split)  
Returns an array of strings populated by splitting the calling string at occurrences of the substring `sep`.

[`String.prototype.startsWith(searchString [, length])`](string/startswith)  
Determines whether the calling string begins with the characters of string `searchString`.

[`String.prototype.substring(indexStart [, indexEnd])`](string/substring)  
Returns a new string containing characters of the calling string from (or between) the specified index (or indeces).

[`String.prototype.toLocaleLowerCase( [locale, ...locales])`](string/tolocalelowercase)  
The characters within a string are converted to lowercase while respecting the current locale.

For most languages, this will return the same as [`toLowerCase()`](string/tolowercase).

[`String.prototype.toLocaleUpperCase( [locale, ...locales])`](string/tolocaleuppercase)  
The characters within a string are converted to uppercase while respecting the current locale.

For most languages, this will return the same as [`toUpperCase()`](string/touppercase).

[`String.prototype.toLowerCase()`](string/tolowercase)  
Returns the calling string value converted to lowercase.

[`String.prototype.toString()`](string/tostring)  
Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`String.prototype.toUpperCase()`](string/touppercase)  
Returns the calling string value converted to uppercase.

[`String.prototype.trim()`](string/trim)  
Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.

[`String.prototype.trimStart()`](string/trimstart)  
Trims whitespace from the beginning of the string.

[`String.prototype.trimEnd()`](string/trimend)  
Trims whitespace from the end of the string.

[`String.prototype.valueOf()`](string/valueof)  
Returns the primitive value of the specified object. Overrides the [`Object.prototype.valueOf()`](object/valueof) method.

[`String.prototype.@@iterator()`](string/@@iterator)  
Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.

## HTML wrapper methods

**Warning:** Deprecated. Avoid these methods.

They are of limited use, as they provide only a subset of the available HTML tags and attributes.

[`String.prototype.anchor()`](string/anchor)  
[`<a name="name">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-name) (hypertext target)

[`String.prototype.big()`](string/big)  
[`<big>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big)

[`String.prototype.blink()`](string/blink)  
[`<blink>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink)

[`String.prototype.bold()`](string/bold)  
[`<b>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)

[`String.prototype.fixed()`](string/fixed)  
[`<tt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt)

[`String.prototype.fontcolor()`](string/fontcolor)  
[`<font color="color">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font#attr-color)

[`String.prototype.fontsize()`](string/fontsize)  
[`<font size="size">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font#attr-size)

[`String.prototype.italics()`](string/italics)  
[`<i>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)

[`String.prototype.link()`](string/link)  
[`<a href="url">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) (link to URL)

[`String.prototype.small()`](string/small)  
[`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)

[`String.prototype.strike()`](string/strike)  
[`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike)

[`String.prototype.sub()`](string/sub)  
[`<sub>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)

[`String.prototype.sup()`](string/sup)  
[`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)

## Examples

### String conversion

It's possible to use `String` as a more reliable [`toString()`](string/tostring) alternative, as it works when used on [`null`](null), [`undefined`](undefined), and on [`symbols`](symbol). For example:

    let outputStrings = []
    for (let i = 0, n = inputValues.length; i < n; ++i) {
      outputStrings.push(String(inputValues[i]));
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string-objects</span></a></td></tr></tbody></table>

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

`String`

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

`String`

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

`anchor`

1

12

1

Starting with version 17, the quotation mark (") is replaced by its HTML reference character (`"`) in strings supplied for the `name` parameter.

No

3

1

1

18

4

10.1

1

1.0

`at`

No

No

No

No

No

No

No

No

No

No

No

No

`big`

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

`blink`

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

`bold`

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

`charAt`

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

`charCodeAt`

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

`codePointAt`

41

12

29

No

28

10

41

41

29

28

10

4.0

`concat`

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

`endsWith`

41

12

17

No

28

9

≤37

36

17

24

9

3.0

`fixed`

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

`fontcolor`

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

`fontsize`

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

`fromCharCode`

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

`fromCodePoint`

41

12

29

No

28

10

41

41

29

28

10

4.0

`includes`

41

12

40

18-48

No

28

9

41

41

40

18-48

28

9

4.0

`indexOf`

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

`italics`

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

`lastIndexOf`

1

12

1

6

3

1

1

18

4

10.1

1

1.0

`length`

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

`link`

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

`localeCompare`

1

12

1

5.5

7

3

1

18

4

10.1

1

1.0

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

`matchAll`

73

79

67

No

60

13

73

73

67

52

13

11.0

`normalize`

34

12

31

No

21

10

No

34

31

21

10

2.0

`padEnd`

57

15

48

No

44

10

57

57

48

43

10

7.0

`padStart`

57

15

48

No

44

10

57

57

48

43

10

7.0

`raw`

41

12

34

No

No

10

No

41

34

No

10

4.0

`repeat`

41

12

24

No

28

9

41

36

24

28

9

3.0

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

`replaceAll`

85

85

77

No

71

13.1

85

85

79

60

13.4

No

`search`

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

`slice`

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

`small`

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

`startsWith`

41

12

17

No

28

9

≤37

36

17

24

9

3.0

`strike`

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

`sub`

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

`substr`

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

`sup`

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

`toLocaleLowerCase`

1

12

1

5.5

4

1.3

1

18

4

10.1

1

1.0

`toLocaleUpperCase`

1

12

1

5.5

4

1.3

1

18

4

10.1

1

1.0

`toLowerCase`

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

`toSource`

No

No

1-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

4

No

No

No

`toString`

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

`toUpperCase`

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

`trim`

4

12

3.5

10

10.5

5

≤37

18

4

11

5

1.0

`trimEnd`

66

4

12

61

3.5

No

53

15

12

66

≤37

66

18

61

4

47

14

12

9.0

1.0

`trimStart`

66

4

12

61

3.5

No

53

15

12

66

≤37

66

18

61

4

47

14

12

9.0

1.0

`unicode_code_point_escapes`

1

12

40

4

4

1

1

18

40

10.1

1

1.0

`valueOf`

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

`@@iterator`

38

12

36

27-36

A placeholder property named `@@iterator` is used.

17-27

A placeholder property named `iterator` is used.

No

25

9

38

38

36

27-36

A placeholder property named `@@iterator` is used.

17-27

A placeholder property named `iterator` is used.

25

9

3.0

## See also

-   [Text formatting in the JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
-   [`RegExp`](regexp)
-   [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString)
-   [Binary strings](https://developer.mozilla.org/en-US/docs/Web/API/DOMString/Binary)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String</a>
