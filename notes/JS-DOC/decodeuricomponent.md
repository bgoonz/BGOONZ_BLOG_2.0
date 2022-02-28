# decodeURIComponent()

The `decodeURIComponent()` function decodes a Uniform Resource Identifier (URI) component previously created by [`encodeURIComponent`](encodeuricomponent) or by a similar routine.

## Syntax

    decodeURIComponent(encodedURI)

### Parameters

`encodedURI`  
An encoded component of a Uniform Resource Identifier.

### Return value

A new string representing the decoded version of the given encoded Uniform Resource Identifier (URI) component.

### Exceptions

Throws an [`URIError`](urierror) ("malformed URI sequence") exception when used wrongly.

## Description

Replaces each escape sequence in the encoded URI component with the character that it represents.

## Examples

### Decoding a Cyrillic URL component

    decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
    // "JavaScript_шеллы"

### Catching errors

    try {
      var a = decodeURIComponent('%E0%A4%A');
    } catch(e) {
      console.error(e);
    }

    // URIError: malformed URI sequence

### Decoding query parameters from a URL

decodeURIComponent cannot be used directly to parse query parameters from a URL. It needs a bit of preparation.

    function decodeQueryParam(p) {
      return decodeURIComponent(p.replace(/\+/g, ' '));
    }

    decodeQueryParam('search+query%20%28correct%29');
    // 'search query (correct)'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-decodeuricomponent-encodeduricomponent">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-decodeuricomponent-encodeduricomponent</span></a></td></tr></tbody></table>

`decodeURIComponent`

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

-   [`decodeURI`](decodeuri)
-   [`encodeURI`](encodeuri)
-   [`encodeURIComponent`](encodeuricomponent)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent</a>
