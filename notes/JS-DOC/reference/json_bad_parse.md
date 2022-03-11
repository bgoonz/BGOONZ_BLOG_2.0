# SyntaxError: JSON.parse: bad parsing

The JavaScript exceptions thrown by [`JSON.parse()`](../global_objects/json/parse) occur when string failed to be parsed as JSON.

## Message

    SyntaxError: JSON.parse: unterminated string literal
    SyntaxError: JSON.parse: bad control character in string literal
    SyntaxError: JSON.parse: bad character in string literal
    SyntaxError: JSON.parse: bad Unicode escape
    SyntaxError: JSON.parse: bad escape character
    SyntaxError: JSON.parse: unterminated string
    SyntaxError: JSON.parse: no number after minus sign
    SyntaxError: JSON.parse: unexpected non-digit
    SyntaxError: JSON.parse: missing digits after decimal point
    SyntaxError: JSON.parse: unterminated fractional number
    SyntaxError: JSON.parse: missing digits after exponent indicator
    SyntaxError: JSON.parse: missing digits after exponent sign
    SyntaxError: JSON.parse: exponent part is missing a number
    SyntaxError: JSON.parse: unexpected end of data
    SyntaxError: JSON.parse: unexpected keyword
    SyntaxError: JSON.parse: unexpected character
    SyntaxError: JSON.parse: end of data while reading object contents
    SyntaxError: JSON.parse: expected property name or '}'
    SyntaxError: JSON.parse: end of data when ',' or ']' was expected
    SyntaxError: JSON.parse: expected ',' or ']' after array element
    SyntaxError: JSON.parse: end of data when property name was expected
    SyntaxError: JSON.parse: expected double-quoted property name
    SyntaxError: JSON.parse: end of data after property name when ':' was expected
    SyntaxError: JSON.parse: expected ':' after property name in object
    SyntaxError: JSON.parse: end of data after property value in object
    SyntaxError: JSON.parse: expected ',' or '}' after property value in object
    SyntaxError: JSON.parse: expected ',' or '}' after property-value pair in object literal
    SyntaxError: JSON.parse: property names must be double-quoted strings
    SyntaxError: JSON.parse: expected property name or '}'
    SyntaxError: JSON.parse: unexpected character
    SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data
    SyntaxError: JSON.parse Error: Invalid character at position {0} (Edge)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

[`JSON.parse()`](../global_objects/json/parse) parses a string as JSON. This string has to be valid JSON and will throw this error if incorrect syntax was encountered.

## Examples

### `JSON.parse()` does not allow trailing commas

Both lines will throw a SyntaxError:

    JSON.parse('[1, 2, 3, 4,]');
    JSON.parse('{"foo": 1,}');
    // SyntaxError JSON.parse: unexpected character
    // at line 1 column 14 of the JSON data

Omit the trailing commas to parse the JSON correctly:

    JSON.parse('[1, 2, 3, 4]');
    JSON.parse('{"foo": 1}');

### Property names must be double-quoted strings

You cannot use single-quotes around properties, like 'foo'.

    JSON.parse("{'foo': 1}");
    // SyntaxError: JSON.parse: expected property name or '}'
    // at line 1 column 2 of the JSON data

Instead write "foo":

    JSON.parse('{"foo": 1}');

### Leading zeros and decimal points

You cannot use leading zeros, like 01, and decimal points must be followed by at least one digit.

    JSON.parse('{"foo": 01}');
    // SyntaxError: JSON.parse: expected ',' or '}' after property value
    // in object at line 1 column 2 of the JSON data

    JSON.parse('{"foo": 1.}');
    // SyntaxError: JSON.parse: unterminated fractional number
    // at line 1 column 2 of the JSON data

Instead write just 1 without a zero and use at least one digit after a decimal point:

    JSON.parse('{"foo": 1}');
    JSON.parse('{"foo": 1.0}');

## See also

-   [`JSON`](../global_objects/json)
-   [`JSON.parse()`](../global_objects/json/parse)
-   [`JSON.stringify()`](../global_objects/json/stringify)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse</a>
