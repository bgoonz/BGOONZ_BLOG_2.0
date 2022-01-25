# String.prototype.link()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `link()` method creates a string representing the code for an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) HTML element to be used as a hypertext link to another URL.

## Syntax

    link(url)

### Parameters

`url`  
Any string that specifies the `href` attribute of the `<a>` element; it should be a valid URL (relative or absolute), with any `&` characters escaped as `&amp;`, and any `"` characters escaped as `&quot;`.

### Return value

A string containing an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) HTML element.

## Description

Use the `link()` method to create an HTML snippet for a hypertext link. The returned string can then be added to the document via [`document.write()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [`element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

Links created with the `link()` method become elements in the `links` array of the `document` object. See [`document.links`](https://developer.mozilla.org/en-US/docs/Web/API/Document/links).

## Examples

### Using link()

The following example displays the word "MDN" as a hypertext link that returns the user to the Mozilla Developer Network.

    var hotText = 'MDN';
    var url = 'https://developer.mozilla.org/';

    console.log('Click to return to ' + hotText.link(url));
    // Click to return to <a href="https://developer.mozilla.org/">MDN</a>

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.link">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'String.prototype.link' in that specification.</span></a></td></tr></tbody></table>

`link`

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

-   [`String.prototype.anchor()`](anchor)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link</a>
