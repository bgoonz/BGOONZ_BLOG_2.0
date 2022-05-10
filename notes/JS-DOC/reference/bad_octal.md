# Warning: 08/09 is not a legal ECMA-262 octal constant

The JavaScript warning "08 (or 09) is not a legal ECMA-262 octal constant" occurs when `08` or `09` number literals are used. They can't be interpreted as an octal number.

## Message

    Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
    Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.

## Error type

Warning. JavaScript execution won't be halted.

## What went wrong?

Decimal literals can start with a zero (`0`) followed by another decimal digit, but If all digits after the leading `0` are smaller than 8, the number is interpreted as an octal number. Because this is not the case with `08` and `09`, JavaScript warns about it.

Note that octal literals and octal escape sequences are deprecated and will present an additional deprecation warning. With ECMAScript 6 and later, the syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (`0o` or `0O)`. See the page about [lexical grammar](../lexical_grammar#octal) for more information.

## Examples

### Invalid octal numbers

    08;
    09;
    // SyntaxError: 08 is not a legal ECMA-262 octal constant
    // SyntaxError: "0"-prefixed octal literals and octal escape sequences
    // are deprecated

### Valid octal numbers

Use a leading zero followed by the letter "o";

    0O755;
    0o644;

## See also

-   [Lexical grammar](../lexical_grammar#octal)
-   [SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated](deprecated_octal)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_octal" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_octal</a>
