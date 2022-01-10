# parseFloat()

The `parseFloat()` function parses an argument (converting it to a string first if needed) and returns a floating point number.

## Syntax

    parseFloat(string)

### Parameters

`string`  
The value to parse. If this argument is not a string, then it is converted to one using the `ToString` abstract operation. Leading [whitespace](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace) in this argument is ignored.

### Return value

A floating point number parsed from the given `string`.

Or [`NaN`](nan) when the first non-whitespace character cannot be converted to a number.

## Description

`parseFloat` is a function property of the global object.

-   If `parseFloat` encounters a character other than a plus sign (`+`), minus sign (`-` U+002D HYPHEN-MINUS), numeral (`0`–`9`), decimal point (`.`), or exponent (`e` or `E`), it returns the value up to that character, ignoring the invalid character and characters following it.
-   A _second_ decimal point also stops parsing (characters up to that point will still be parsed).
-   Leading and trailing spaces in the argument are ignored.
-   If the argument's first character can't be converted to a number (it's not any of the above characters), `parseFloat` returns [`NaN`](nan).
-   `parseFloat` can also parse and return [`Infinity`](infinity).
-   `parseFloat` converts [`BigInt`](bigint) syntax to [`Numbers`](number), losing precision. This happens because the trailing `n` character is discarded.

Consider [`Number(value)`](number) for stricter parsing, which converts to [`NaN`](nan) for arguments with invalid characters anywhere.

`parseFloat` will parse non-string objects if they have a [`toString`](object/tostring) or [`valueOf`](object/valueof) method. The returned value is the same as if `parseFloat` had been called on the result of those methods.

## Examples

### `parseFloat` returning a number

The following examples all return `3.14`:

    parseFloat(3.14);
    parseFloat('3.14');
    parseFloat('  3.14  ');
    parseFloat('314e-2');
    parseFloat('0.0314E+2');
    parseFloat('3.14some non-digit characters');
    parseFloat({ toString: function() { return "3.14" } });

### `parseFloat` returning `NaN`

The following example returns `NaN`:

    parseFloat('FF2');

### `parseFloat` and `BigInt`

The following examples both return `900719925474099300`, losing precision as the integer is too large to be represented as a float:

    parseFloat(900719925474099267n);
    parseFloat('900719925474099267n');

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-parsefloat-string">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'parseFloat' in that specification.</span></a></td></tr></tbody></table>

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

`parseFloat`

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

## See also

-   [`parseInt()`](parseint)
-   [`Number.parseFloat()`](number/parsefloat)
-   [`Number.parseInt()`](number/parseint)
-   [`Number.toFixed()`](number/tofixed)
-   [`isNaN()`](isnan)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat</a>
