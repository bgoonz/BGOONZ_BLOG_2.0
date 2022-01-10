# Object.prototype.propertyIsEnumerable()

The `propertyIsEnumerable()` method returns a Boolean indicating whether the specified property is enumerable and is the object's own property.

## Syntax

    propertyIsEnumerable(prop)

### Parameters

`prop`  
The name of the property to test.

### Return value

A [`Boolean`](../boolean) indicating whether the specified property is enumerable and is the object's own property.

## Description

Every object has a `propertyIsEnumerable` method. This method can determine whether the specified property in an object can be enumerated by a [`for...in`](../../statements/for...in) loop, with the exception of properties inherited through the prototype chain. If the object does not have the specified property, this method returns `false`.

**Note:** Bear in mind that enumerable properties are looped over by [`for...in`](../../statements/for...in) loops, with the exception of [`Symbol`](../symbol)s.

## Examples

### A basic use of `propertyIsEnumerable`

The following example shows the use of `propertyIsEnumerable` on objects and arrays:

    var o = {};
    var a = [];
    o.prop = 'is enumerable';
    a[0] = 'is enumerable';

    o.propertyIsEnumerable('prop');   // returns true
    a.propertyIsEnumerable(0);        // returns true

### User-defined vs. built-in objects

The following example demonstrates the enumerability of user-defined vs. built-in properties:

    var a = ['is enumerable'];

    a.propertyIsEnumerable(0);          // returns true
    a.propertyIsEnumerable('length');   // returns false

    Math.propertyIsEnumerable('random');   // returns false
    this.propertyIsEnumerable('Math');     // returns false

### Direct vs. inherited properties

    var a = [];
    a.propertyIsEnumerable('constructor');         // returns false

    function firstConstructor() {
      this.property = 'is not enumerable';
    }

    firstConstructor.prototype.firstMethod = function() {};

    function secondConstructor() {
      this.method = function() { return 'is enumerable'; };
    }

    secondConstructor.prototype = new firstConstructor;
    secondConstructor.prototype.constructor = secondConstructor;

    var o = new secondConstructor();
    o.arbitraryProperty = 'is enumerable';

    o.propertyIsEnumerable('arbitraryProperty');   // returns true
    o.propertyIsEnumerable('method');              // returns true
    o.propertyIsEnumerable('property');            // returns false

    o.property = 'is enumerable';

    o.propertyIsEnumerable('property');            // returns true

    // These return false as they are on the prototype which
    // propertyIsEnumerable does not consider (even though the last two
    // are iteratable with for-in)
    o.propertyIsEnumerable('prototype');   // returns false (as of JS 1.8.1/FF3.6)
    o.propertyIsEnumerable('constructor'); // returns false
    o.propertyIsEnumerable('firstMethod'); // returns false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.prototype.propertyisenumerable</span></a></td></tr></tbody></table>

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

`propertyIsEnumerable`

1

12

1

5.5

4

3

1

18

4

10.1

1

1.0

## See also

-   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
-   [`for...in`](../../statements/for...in)
-   [`Object.keys()`](keys)
-   [`Object.defineProperty()`](defineproperty)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable</a>
