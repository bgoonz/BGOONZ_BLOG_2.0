# SyntaxError: unterminated string literal

The JavaScript error "unterminated string literal" occurs when there is an unterminated [`String`](../global_objects/string) somewhere. String literals must be enclosed by single (`'`) or double (`"`) quotes.

## Message

    SyntaxError: Unterminated string constant (Edge)
    SyntaxError: unterminated string literal (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

There is an unterminated [`String`](../global_objects/string) somewhere. String literals must be enclosed by single (`'`) or double (`"`) quotes. JavaScript makes no distinction between single-quoted strings and double-quoted strings. [Escape sequences](../global_objects/string#escape_notation) work in strings created with either single or double quotes. To fix this error, check if:

-   you have opening and closing quotes (single or double) for your string literal,
-   you have escaped your string literal correctly,
-   your string literal isn't split across multiple lines.

## Examples

### Multiple lines

You can't split a string across multiple lines like this in JavaScript:

    var longString = 'This is a very long string which needs
                      to wrap across multiple lines because
                      otherwise my code is unreadable.';
    // SyntaxError: unterminated string literal

Instead, use the [+ operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#addition), a backslash, or [template literals](../template_literals). The `+` operator variant looks like this:

    var longString = 'This is a very long string which needs ' +
                     'to wrap across multiple lines because ' +
                     'otherwise my code is unreadable.';

Or you can use the backslash character ("\\") at the end of each line to indicate that the string will continue on the next line. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work. That form looks like this:

    var longString = 'This is a very long string which needs \
    to wrap across multiple lines because \
    otherwise my code is unreadable.';

Another possibility is to use [template literals](../template_literals), which are supported in ECMAScript 2015 environments:

    var longString = `This is a very long string which needs
                      to wrap across multiple lines because
                      otherwise my code is unreadable.`;

## See also

-   [`String`](../global_objects/string)
-   [Template literals](../template_literals)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal</a>
