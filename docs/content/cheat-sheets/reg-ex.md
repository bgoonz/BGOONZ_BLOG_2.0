# Regular Expressions

Reg Ex is a pattern-matching machine. It takes in a pattern and an input and
sees if there is a match.

## Cheatsheet

Practice: https://regexr.com/

### Pattern Matching

For more explanations on all the rules, [see below](#regular-expression-operators):

-   `*` - zero or more
-
-   `+` - one or more
-
-   `?` - zero or one
-
-   `^` - start of input
-
-   `$` - end of input
-
-   `[]` - any character
-
-   `[a-z]` - range o
-
-   `[^]` - not those characters

-   `\s` - whitespace

-   `\d` - digit

-   `\w` - a word character

-   `\S` - not whitespace

-   `\D` - not digit

-   `\W` - not a word character

### JavaScript Regular Expressions

For more detailed explanations, [see below](#regular-expressions-in-javascript)

-   Creating a new regular expression in JavaScript

    ```js
    const regex = /pattern/;
    // const regex = new RegExp('pattern'); // can do this too
    ```

-   `RegExp.prototype.test` - return true if pattern matches input string, false
    otherwise

-   `String.prototype.replace` - returns a new string with all matches of a
    pattern replaced by a replacement (only if pattern is a regular expression and
    has global search, `g`., if the pattern is a string, it will only replace the
    first match)

## Regular Expression Operators

### String with Characters only

-   Matches the string exactly
-
-   ex: if pattern is `"pat"` it looks for exactly `"pat"` in the string

    | Inputs                   | Matched? |
    | ------------------------ | -------- |
    | `"pat"`                  | `true`   |
    | `"what is the pattern?"` | `true`   |
    | `"matter"`               | `false`  |
    | `"Pat"`                  | `false`  |

### Star Operator `*`

-   **Zero or more** of what's right before it
-
-   ex: if the pattern is `"th*e"`, then it looks for a `"t"`, then zero or more
    `"h"`, then `"e"`

    | Inputs           | Matched? |
    | ---------------- | -------- |
    | `"the"`          | `true`   |
    | `"te"`           | `true`   |
    | `"thhhhhhhhhhe"` | `true`   |
    | `"tape"`         | `false`  |
    | `"than"`         | `false`  |
    | `"other"`        | `true`   |

### Optional Operator `?`

-   **Zero or one** of what's right before it
-
-   ex: if pattern is `"at?t"`, then it looks for an `"a"`, zero or one `"t"`, then
    a single `"t"` (an equivalent pattern to `"at?t"` would be `"att?"`)

    | Inputs      | Matched? |
    | ----------- | -------- |
    | `"at"`      | `true`   |
    | `"att"`     | `true`   |
    | `"that"`    | `true`   |
    | `"pat"`     | `true`   |
    | `"atttttt"` | `false`  |
    | `"apart"`   | `false`  |

**NOTE:** To use a question mark in your string, you need to escape it in a regex

-   ex: pattern of `"at\?"` would return `true` for an input of `"where you at?"`
    but `false` for an input of `"patty"`

### Plus Operator `+`

-   **One or more** of what's right before it
-
-   ex: if pattern is `"at+"`, then it looks for an `"a"`, then one or more `"t"`
    (an equivalent pattern to `"at+"` would be `"att*"`)

    | Inputs      | Matched? |
    | ----------- | -------- |
    | `"at"`      | `true`   |
    | `"att"`     | `true`   |
    | `"that"`    | `true`   |
    | `"pat"`     | `true`   |
    | `"atttttt"` | `true`   |
    | `"apart"`   | `false`  |

### Dot Operator `.`

-   Any one character
-
-   ex: if pattern is `"r.."`, then it looks for an `r`, then any one character
    after that, then any one character after that

    | Inputs     | Matched? |
    | ---------- | -------- |
    | `"r"`      | `false`  |
    | `"ra"`     | `false`  |
    | `"rat"`    | `true`   |
    | `"rain"`   | `true`   |
    | `"train"`  | `true`   |
    | `"forest"` | `true`   |
    | `"burn"`   | `false`  |

### Hat Operator - `^`

-   Start of input anchor
-
-   ex: if pattern is `"^is"`, then it looks for `"is"` at the very start of the
    string

    | Inputs                | Matched? |
    | --------------------- | -------- |
    | `"i"`                 | `false`  |
    | `"is"`                | `true`   |
    | `"Isaac"`             | `false`  |
    | `"is your name Pat?"` | `true`   |
    | `"Pat, my name is"`   | `false`  |

### Dollar Sign Operator - `$`

-   End of input anchor
-
-   ex: if pattern is `"is$"`, then it looks for `"is"` at the very end of the
    string

    | Inputs                | Matched? |
    | --------------------- | -------- |
    | `"i"`                 | `false`  |
    | `"is"`                | `true`   |
    | `"Isaac"`             | `false`  |
    | `"is your name Pat?"` | `false`  |
    | `"Pat, my name is"`   | `true`   |

### Square Brackets

-   Any character of your choice in the brackets
-
-   ex: if pattern is `"a[tm]e"`, then it looks for an `a`, then either `t` or `m`,
    then an `e`

    | Inputs   | Matched? |
    | -------- | -------- |
    | `"ae"`   | `false`  |
    | `"ate"`  | `true`   |
    | `"ame"`  | `true`   |
    | `"atme"` | `false`  |
    | `"amte"` | `false`  |
    | `"name"` | `true`   |
    | `"rate"` | `true`   |

-   ex: if pattern is `"a[tm]+e"`, then it looks for an `a`, then one or more of
    either `t` or `m`, then an `e`

    | Inputs       | Matched? |
    | ------------ | -------- |
    | `"ae"`       | `false`  |
    | `"ate"`      | `true`   |
    | `"ame"`      | `true`   |
    | `"atme"`     | `true`   |
    | `"amtmmmte"` | `true`   |
    | `"attttte"`  | `true`   |
    | `"name"`     | `true`   |
    | `"rate"`     | `true`   |
    | `"rage"`     | `false`  |

#### Range of characters

-   You can indicate a range of characters in the square brackets.
-
-   ex: pattern of `[a-zA-Z]` means any lower/upper letter
-
-   ex: pattern of `[j-w]` means any lower letter from `j` to `w`

-   ex: pattern of `[0-9]` means any number from `0` to `9`

#### Hat Operator inside Square Brackets

-   Not any of those characters
-
-   ex: if pattern is `"[^aeiou]"`, then it looks for any non-vowel character

    | Inputs    | Matched? |
    | --------- | -------- |
    | `"a"`     | `false`  |
    | `"u"`     | `false`  |
    | `"why"`   | `true`   |
    | `"what"`  | `true`   |
    | `"where"` | `true`   |
    | `"iou"`   | `false`  |

### Parentheses

-   Group of characters
-
-   Primarily used to capture groups of characters for replacements

-   ex: if pattern is `"^(is)"`, then it looks for `"is"` at the very start of the
    string (an equivalent pattern is `"^is"`)

    | Inputs                | Matched? |
    | --------------------- | -------- |
    | `"i"`                 | `false`  |
    | `"is"`                | `true`   |
    | `"Isaac"`             | `false`  |
    | `"is your name Pat?"` | `true`   |
    | `"Pat, my name is"`   | `false`  |

-   ex: if pattern is `"at( is)?"`, then it looks for `"at"`, then an optional
    `" is"`

    | Inputs           | Matched? |
    | ---------------- | -------- |
    | `"at"`           | `true`   |
    | `" is"`          | `false`  |
    | `"at is"`        | `true`   |
    | `"that is"`      | `true`   |
    | `"that is true"` | `true`   |
    | `"hat"`          | `true`   |

### Special Character Classes

-   Lowercase:

    -   `\s` - whitespace (space, tab, newline)
    -   `\d` - digit
    -   `\w` - word character (letter, digit, \_)

-   Uppercase (not):

    -   `\S` - not whitespace
    -   `\D` - not a digit
    -   `\W` - not a word character

## Regular Expressions in JavaScript

[Docs for RegExp in JavaScript]

-   You can create a regular expression in JS with forward slashes, `/`

    ```js
    const regex = /pattern/;
    // const regex = new RegExp('pattern'); // can do this too
    ```

### `RegExp.prototype.test`

-   returns `true` if there is a match between the regex and a string parameter,
    otherwise `false`

    ```js
    const regex = /banana/;
    console.log(regex.test('this banana is plain')); // true
    console.log(regex.test('THIS BANANA IS mushy')); // false
    console.log(regex.test('hello world')); // false
    ```

-   Ignore cases:

    ```js
    const regex = /banana/i; // 'i' at the end of the pattern ignores cases
    // const regex = new RegExp('banana', i);
    console.log(regex.test('this banana is plain')); // true
    console.log(regex.test('THIS BANANA IS mushy')); // true
    console.log(regex.test('hello world')); // false
    ```

### `String.prototype.replace`

-   First argument is the pattern, second argument is the string to replace the
    pattern or a function that will run for every match and the return will be the
    replacement for that match.

-   Returns a new string with all matches of a pattern replaced by a replacement
    only if pattern is a regular expression and has global search, `g`.

-   If the pattern is a string, it will only replace the first match in the returned
    string.

-   Regex that has a global search and ignores casing:

    ```js
    const str = 'This banana is mushy. I do not like MUSHY bananas';
    const regex = /mushy/gi;
    console.log(str.replace(regex, 'green')); // 'This banana is green. I do not like green bananas'
    ```

-   Regex that has a global search and ignores casing with a function as second
    argument:

    ```js
    const str = 'This banana is mushy. I do not like MUSHY bananas';
    const regex = /mushy/gi;
    let count = 0;
    console.log(
        str.replace(regex, (match) => {
            if (count++ % 2 === 0) return 'green';
            else return match;
        })
    ); // 'This banana is green. I do not like MUSHY bananas'
    ```

-   Regex that has no global search:

    ```js
    const str = 'This banana is mushy. I do not like mushy bananas';
    const regex = /mushy/;
    console.log(str.replace(regex, 'green')); // 'This banana is green. I do not like green bananas'
    ```

-   Pattern as a string:

    ```js
    const str = 'This banana is mushy. I do not like mushy bananas';
    const patternStr = 'mushy';
    console.log(str.replace(patternStr, 'green')); // 'This banana is green. I do not like mushy bananas'
    ```

-   Cool pattern matching with regex:

    ```js
    const data = { name: 'Fido', age: 4, favToy: 'bone' };
    const regex = /%\w+%/g;
    const str = "My dog's name is %name%. He is %age% years old. His favorite toy is %favToy%.";
    const replacedStr = str.replace(regex, (match) => {
        const key = match.replace(/%/g, '');
        return data[key];
    });
    console.log(replacedStr); //"My dog's name is Fido. He is 4 years old. His favorite toy is bone."
    ```

[practice with regular expression]: https://regexr.com/
[docs for regexp in javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
