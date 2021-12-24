# encodeURI()

The `encodeURI()` function encodes a [URI](https://developer.mozilla.org/en-US/docs/Glossary/URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the [UTF-8](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8) encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

## Syntax

    encodeURI(URI)

### Parameters

`URI`  
A complete URI.

### Return value

A new string representing the provided string encoded as a URI.

## Description

The `encodeURI()` function does not encode characters that have special meaning (reserved characters) for a URI. The following example shows all the parts that a URI "scheme" can possibly contain. Note how certain characters are used to signify special meaning:

    http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor

Hence `encodeURI()` **does not** encode characters that are necessary to formulate a complete URI. Also, `encodeURI()` **does not** encode a few additional characters, known as "unreserved marks", which do not have a reserved purpose but are allowed in a URI "as is". (See [RFC2396)](https://www.ietf.org/rfc/rfc2396.txt)

`encodeURI()` escapes all characters **except**:

    Not Escaped:

        A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #

## Examples

### encodeURI vs encodeURIComponent

`encodeURI()` differs from [`encodeURIComponent()`](encodeuricomponent) as follows:

    var set1 = ";,/?:@&=+$#"; // Reserved Characters
    var set2 = "-_.!~*'()";   // Unreserved Marks
    var set3 = "ABC abc 123"; // Alphanumeric Characters + Space

    console.log(encodeURI(set1)); // ;,/?:@&=+$#
    console.log(encodeURI(set2)); // -_.!~*'()
    console.log(encodeURI(set3)); // ABC%20abc%20123 (the space gets encoded as %20)

    console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
    console.log(encodeURIComponent(set2)); // -_.!~*'()
    console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (the space gets encoded as %20)

Note that `encodeURI()` by itself _cannot_ form proper HTTP [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) and [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) requests, such as for [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), because "`&`", "`+`", and "`=`" are not encoded, which are treated as special characters in `GET` and `POST` requests. `encodeURIComponent()`, however, does encode these characters.

### Encoding a lone high surrogate throws

An [`URIError`](urierror) will be thrown if one attempts to encode a surrogate which is not part of a high-low pair, e.g.,

    // high-low pair ok
    console.log(encodeURI('\uD800\uDFFF'));

    // lone high surrogate throws "URIError: malformed URI sequence"
    console.log(encodeURI('\uD800'));

    // lone low surrogate throws "URIError: malformed URI sequence"
    console.log(encodeURI('\uDFFF'));

### Encoding for IPv6

If one wishes to follow the more recent [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) for URLs, which makes square brackets reserved (for [IPv6](https://developer.mozilla.org/en-US/docs/Glossary/IPv6)) and thus not encoded when forming something which could be part of a URL (such as a host), the following code snippet may help:

    function fixedEncodeURI(str) {
        return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-encodeuri-uri">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-encodeuri-uri</span></a></td></tr></tbody></table>

`encodeURI`

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

-   [`decodeURI()`](decodeuri)
-   [`encodeURIComponent()`](encodeuricomponent)
-   [`decodeURIComponent()`](decodeuricomponent)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI</a>
