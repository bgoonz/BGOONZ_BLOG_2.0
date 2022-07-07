# SyntaxError: invalid regular expression flag "x"

The JavaScript exception "invalid regular expression flag" occurs when the flags, defined after the second slash in regular expression literal, are not one of `g`, `i`, `m`, `s`, `u`, or `y`.

## Message

    SyntaxError: Syntax error in regular expression (Edge)
    SyntaxError: invalid regular expression flag "x" (Firefox)
    SyntaxError: Invalid regular expression flags (Chrome)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

There are invalid regular expression flags in the code. In a regular expression literal, which consists of a pattern enclosed between slashes, the flags are defined after the second slash. They can also be defined in the constructor function of the [`RegExp`](../global_objects/regexp) object (second parameter). Regular expression flags can be used separately or together in any order, but there are only six of them in ECMAScript.

To include a flag with the regular expression, use this syntax:

    var re = /pattern/flags;

or

    var re = new RegExp('pattern', 'flags');

<table><caption>Regular expression flags</caption><thead><tr class="header"><th>Flag</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>g</code></td><td>Global search.</td></tr><tr class="even"><td>i</td><td>Case-insensitive search.</td></tr><tr class="odd"><td>m</td><td>Multi-line search.</td></tr><tr class="even"><td>s</td><td>Allow <code>.</code> to match newlines (added in ECMAScript 2018)</td></tr><tr class="odd"><td>u</td><td>Unicode; treat pattern as a sequence of Unicode code points</td></tr><tr class="even"><td>y</td><td>Perform a "sticky" search that matches starting at the current position in the target string. See <a href="../global_objects/regexp/sticky"><code>sticky</code></a></td></tr></tbody></table>

## Examples

There are only six valid regular expression flags.

    /foo/bar;

    // SyntaxError: invalid regular expression flag "b"

Did you intend to create a regular expression? An expression containing two slashes is interpreted as a regular expression literal.

    let obj = {
      url: /docs/Web
    };

    // SyntaxError: invalid regular expression flag "W"

Or did you mean to create a string instead? Add single or double quotes to create a string literal.

    let obj = {
      url: '/docs/Web'
    };

### Valid regular expression flags

See the table above for the six valid regular expression flags that are allowed in JavaScript.

    /foo/g;
    /foo/gims;
    /foo/uy;

## See also

-   [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
-   [XRegEx flags](https://xregexp.com/flags/) – regular expression library that provides four new flags (`n`, `s`, `x`, `A`)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_regexp_flag" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_regexp_flag</a>
