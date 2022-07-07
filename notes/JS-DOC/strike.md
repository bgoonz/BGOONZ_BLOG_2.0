# String.prototype.strike()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `strike()` method creates a [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike) HTML element that causes a string to be displayed as struck-out text.

## Syntax

    strike()

### Return value

A string containing a [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike) HTML element.

## Description

The `strike()` method embeds a string in a `<strike>` element: "`<strike>str</strike>`".

## Examples

### Using strike()

The following example uses string methods to change the formatting of a string:

    var worldString = 'Hello, world';

    console.log(worldString.blink()); // <blink>Hello, world</blink>
    console.log(worldString.bold()); // <b>Hello, world</b>
    console.log(worldString.italics()); // <i>Hello, world</i>
    console.log(worldString.strike()); // <strike>Hello, world</strike>

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.strike">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.strike</span></a></td></tr></tbody></table>

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

`strike`

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

-   [`String.prototype.blink()`](blink)
-   [`String.prototype.bold()`](bold)
-   [`String.prototype.italics()`](italics)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/strike" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/strike</a>
