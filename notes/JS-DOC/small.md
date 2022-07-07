# String.prototype.small()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `small()` method creates a [`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small) HTML element that causes a string to be displayed in a small font.

## Syntax

    small()

### Return value

A string containing a [`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small) HTML element.

## Description

The `small()` method embeds a string in a `<small>` element: "`<small>str</small>`".

## Examples

### Using small()

The following example uses string methods to change the size of a string:

    var worldString = 'Hello, world';

    console.log(worldString.small());     // <small>Hello, world</small>
    console.log(worldString.big());       // <big>Hello, world</big>
    console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>

With the [`element.style`](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style) object you can get the element's `style` attribute and manipulate it more generically, for example:

    document.getElementById('yourElemId').style.fontSize = '0.7em';

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.small">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.small</span></a></td></tr></tbody></table>

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

`small`

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

-   [`String.prototype.fontsize()`](fontsize)
-   [`String.prototype.big()`](big)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/small" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/small</a>
