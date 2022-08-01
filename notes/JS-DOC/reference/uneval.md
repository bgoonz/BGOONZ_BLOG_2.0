# uneval()

**Non-standard**

This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `uneval()` function creates a string representation of the source code of an Object.

## Syntax

    uneval(object)

### Parameters

`object`  
A JavaScript expression or statement.

### Return value

A string representing the source code of `object`.

**Note:** This will _not_ return a JSON representation of `object`.

## Description

`uneval()` is a top-level function and is not associated with any object.

## Examples

### Using uneval

    var a = 1;
    uneval(a); // returns a String containing 1

    var b = '1';
    uneval(b); // returns a String containing "1"

    uneval(function foo() {}); // returns "(function foo(){})"

    var a = uneval(function foo() { return 'hi'; });
    var foo = eval(a);
    foo(); // returns "hi"

## Specifications

<span class="pl-s">Not part of any standard.</span>

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

`uneval`

No

No

1-74

Starting in Firefox 74, `uneval()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

4

No

No

No

## See also

-   [`eval()`](eval)
-   [`JSON.stringify()`](json/stringify)
-   [`JSON.parse()`](json/parse)
-   [`Object.toSource()`](object/tosource)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval</a>
