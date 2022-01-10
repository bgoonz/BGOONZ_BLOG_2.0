# decodeURI()

The `decodeURI()` function decodes a Uniform Resource Identifier (URI) previously created by [`encodeURI()`](encodeuri) or by a similar routine.

## Syntax

    decodeURI(encodedURI)

### Parameters

`encodedURI`  
A complete, encoded Uniform Resource Identifier.

### Return value

A new string representing the unencoded version of the given encoded Uniform Resource Identifier (URI).

### Exceptions

Throws an [`URIError`](urierror) ("malformed URI sequence") exception when `encodedURI` contains invalid character sequences.

## Description

Replaces each escape sequence in the encoded URI with the character that it represents, but does not decode escape sequences that could not have been introduced by [`encodeURI`](encodeuri). The character "`#`” is not decoded from escape sequences.

## Examples

### Decoding a Cyrillic URL

    decodeURI('https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
    // "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"

### Catching errors

    try {
      var a = decodeURI('%E0%A4%A');
    } catch(e) {
      console.error(e);
    }

    // URIError: malformed URI sequence

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-decodeuri-encodeduri">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-decodeuri-encodeduri</span></a></td></tr></tbody></table>

`decodeURI`

1

12

1

5.5

7

1.1

1

18

4

10.1

1

1.0

## See also

-   [`decodeURIComponent()`](decodeuricomponent)
-   [`encodeURI()`](encodeuri)
-   [`encodeURIComponent()`](encodeuricomponent)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI</a>
