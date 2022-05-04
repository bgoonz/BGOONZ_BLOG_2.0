# SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated

The JavaScript [strict mode](../strict_mode)-only exception "0-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead" occurs when deprecated octal literals and octal escape sequences are used.

## Message

    SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
    SyntaxError:
    "0"-prefixed octal literals and octal escape sequences are deprecated;
    for octal literals use the "0o" prefix instead

## Error type

[`SyntaxError`](../global_objects/syntaxerror) in [strict mode](../strict_mode) only.

## What went wrong?

Octal literals and octal escape sequences are deprecated and will throw a [`SyntaxError`](../global_objects/syntaxerror) in strict mode. With ECMAScript 2015 and later, the standardized syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (`0o` or `0O)`.

## Examples

### "0"-prefixed octal literals

    "use strict";

    03;

    // SyntaxError: "0"-prefixed octal literals and octal escape sequences
    // are deprecated

### Octal escape sequences

    "use strict";

    "\251";

    // SyntaxError: "0"-prefixed octal literals and octal escape sequences
    // are deprecated

### Valid octal numbers

Use a leading zero followed by the letter "o" or "O":

    0o3;

For octal escape sequences, you can use hexadecimal escape sequences instead:

    '\xA9';

## See also

-   [Lexical grammar](../lexical_grammar#octal)
-   [Warning: 08/09 is not a legal ECMA-262 octal constant](bad_octal)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal</a>
