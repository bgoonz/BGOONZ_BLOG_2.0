# String.prototype.sup()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `sup()` method creates a [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) HTML element that causes a string to be displayed as superscript.

## Syntax

    sup()

### Return value

A string containing a [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) HTML element.

## Description

The `sup()` method embeds a string in a `<sup>` element: "`<sup>str</sup>`".

## Examples

### Using sub() and sup() methods

The following example uses the [`sub()`](sub) and `sup()` methods to format a string:

    var superText = 'superscript';
    var subText = 'subscript';

    console.log('This is what a ' + superText.sup() + ' looks like.');
    // "This is what a <sup>superscript</sup> looks like."

    console.log('This is what a ' + subText.sub() + ' looks like.');
    // "This is what a <sub>subscript</sub> looks like."

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.sup">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.sup</span></a></td></tr></tbody></table>

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

`sup`

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

-   [`String.prototype.sub()`](sub)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sup" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sup</a>
