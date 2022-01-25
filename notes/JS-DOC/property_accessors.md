# Property accessors

**Property accessors** provide access to an object's properties by using the dot notation or the bracket notation.

## Syntax

    object.property
    object['property']

## Description

One can think of an object as an _associative array_ (a.k.a. _map_, _dictionary_, _hash_, _lookup table_). The _keys_ in this array are the names of the object's properties.

It's typical when speaking of an object's properties to make a distinction between properties and methods. However, the property/method distinction is little more than a convention. A method is a property that can be called (for example, if it has a reference to a [`Function`](../global_objects/function) instance as its value).

There are two ways to access properties: _dot notation_ and _bracket notation_.

### Dot notation

In the `object.property` syntax, the `property` must be a valid JavaScript [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier). (In the ECMAScript standard, the names of properties are technically "IdentifierNames", not "Identifiers", so reserved words can be used but are not recommended). For example, `object.$1` is valid, while `object.1` is not.

    const variable = object.property_name;

    object.property_name = value;

    const object = {};

    object.$1 = 'foo';
    console.log(object.$1);  // 'foo'

    object.1 = 'bar';        // SyntaxError
    console.log(object.1);   // SyntaxError

Here, the method named `createElement` is retrieved from `document` and is called.

    document.createElement('pre')

If you use a method for a numeric literal, and the numeric literal has no exponent and no decimal point, you should leave [white-space(s)](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace) before the dot preceding the method call, so that the dot is not interpreted as a decimal point.

    77 .toExponential()
    // or
    77
    .toExponential()
    // or
    ;(77).toExponential()
    // or
    77..toExponential()
    // or
    77.0.toExponential()
    // because 77. === 77.0, no ambiguity

### Bracket notation

In the `object[property_name]` syntax, the `property_name` is just a string or [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol). So, it can be any string, including `'1foo'`, `'!bar!'`, or even `' '` (a space).

    const variable = object[property_name]
    object[property_name] = value;

This does the exact same thing as the previous example.

    document['createElement']('pre')

A space before bracket notation is allowed.

    document ['createElement']('pre')

### Property names

Property names are string or [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol). Any other value, including a number, is coerced to a string. This outputs `'value'`, since `1` is coerced into `'1'`.

    let object = {}
    object['1'] = 'value'
    console.log(object[1])

This also outputs `'value'`, since both `foo` and `bar` are converted to the same string.

    let foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
    object[foo] = 'value'
    console.log(object[bar])

In the [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) JavaScript engine, this string would be "`[object Object]`".

### Method binding

A method is not bound to the object that it is a method of. Specifically, `this` is not fixed in a method. Put another way, `this` does not necessarily refer to the object containing a method. Instead, `this` is "passed" by the function call. See [method binding](this#method_binding).

## Examples

### Bracket notation vs. `eval`

JavaScript novices often make the mistake of using [`eval()`](../global_objects/eval) where the bracket notation can be used instead.

For example, the following syntax is often seen in many scripts.

    x = eval('document.forms.form_name.elements.' + strFormControl + '.value')

`eval()` is slow and should be avoided whenever possible. Also, `strFormControl` would have to hold an identifier, which is not required for names and `id`s of form controls. It is better to use bracket notation instead:

    x = document.forms['form_name'].elements[strFormControl].value

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-property-accessors">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Property Accessors' in that specification.</span></a></td></tr></tbody></table>

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

`Property_Accessors`

1

12

1

3

4

1

1

18

4

10.1

1

1.0

## See also

-   [`Object`](../global_objects/object)
-   [`Object.defineProperty()`](../global_objects/object/defineproperty)
-   [Optional chaining](optional_chaining)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors</a>
