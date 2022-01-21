# String.prototype.blink()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `blink()` method creates a [`<blink>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink) HTML element that causes a string to blink.

**Warning:** Blinking text is frowned upon by several accessibility standards. The `<blink>` element itself is non-standard and deprecated!

## Syntax

    blink()

### Return value

A string containing a [`<blink>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink) HTML element.

## Description

The `blink()` method embeds a string in a `<blink>` element: "`<blink>str</blink>`".

## Examples

### Using blink()

The following example uses string methods to change the formatting of a string:

    var worldString = 'Hello, world';

    console.log(worldString.blink());   // <blink>Hello, world</blink>
    console.log(worldString.bold());    // <b>Hello, world</b>
    console.log(worldString.italics()); // <i>Hello, world</i>
    console.log(worldString.strike());  // <strike>Hello, world</strike>

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.blink">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.blink</span></a></td></tr></tbody></table>

`blink`

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

-   [`String.prototype.bold()`](bold)
-   [`String.prototype.italics()`](italics)
-   [`String.prototype.strike()`](strike)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink</a>
