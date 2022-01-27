# Object.prototype.toString()

The `toString()` method returns a string representing the object.

## Syntax

    toString()

### Return value

A string representing the object.

## Description

Every object has a `toString()` method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. By default, the `toString()` method is inherited by every object descended from `Object`. If this method is not overridden in a custom object, `toString()` returns "`[object type]`", where `type` is the object type. The following code illustrates this:

    const o = new Object();
    o.toString(); // returns [object Object]

**Note:** Starting in JavaScript 1.8.5, `toString()` called on [`null`](../null) returns `[object Null]`, and [`undefined`](../undefined) returns `[object Undefined]`, as defined in the 5<sup>th</sup> Edition of ECMAScript and subsequent Errata.

See [Using `toString()` to detect object class](#using_tostring_to_detect_object_class).

## Parameters

For Numbers and BigInts `toString()` takes an optional parameter `radix` the value of radix must be minimum 2 and maximum 36.

By using `radix` you can also convert base 10 numbers (like 1,2,3,4,5,.........) to another base numbers, in example below we are converting base 10 number to a base 2 (binary) number.

    let baseTenInt = 10;
    console.log(baseTenInt.toString(2));
    // Expected output is "1010"

and same for big integers

    let bigNum = BigInt(20);
    console.log(bigNum.toString(2));
    // Expected output is "10100"

Some common radix are

-   2 for [binary numbers](https://en.wikipedia.org/wiki/Binary_number),
-   8 for [octal numbers](https://en.wikipedia.org/wiki/Octal),
-   10 for [decimal numbers](https://en.wikipedia.org/wiki/Decimal),
-   16 for [hexadecimal numbers](https://en.wikipedia.org/wiki/Hexadecimal).

## Examples

### Overriding the default toString method

You can create a function to be called in place of the default `toString()` method. The `toString()` method takes no arguments and should return a string. The `toString()` method you create can be any value you want, but it will be most useful if it carries information about the object.

The following code defines the `Dog` object type and creates `theDog`, an object of type `Dog`:

    function Dog(name, breed, color, sex) {
      this.name = name;
      this.breed = breed;
      this.color = color;
      this.sex = sex;
    }

    theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

If you call the `toString()` method on this custom object, it returns the default value inherited from [`Object`](../object):

    theDog.toString(); // returns [object Object]

The following code creates and assigns `dogToString()` to override the default `toString()` method. This function generates a string containing the `name`, `breed`, `color`, and `sex` of the object, in the form "`property = value;`".

    Dog.prototype.toString = function dogToString() {
      const ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
      return ret;
    }

Or, using ES6 [template strings](../../template_literals):

    Dog.prototype.toString = function dogToString() {
      return `Dog ${this.name} is a ${this.sex}${this.color}${this.breed}`;
    }

With the preceding code in place, any time `theDog` is used in a string context, JavaScript automatically calls the `dogToString()` function, which returns the following string:

    "Dog Gabby is a female chocolate Lab"

### Using toString() to detect object class

`toString()` can be used with every object and (by default) allows you to get its class.

To use the `Object.prototype.toString()` with every object, you need to call [`Function.prototype.call()`](../function/call) or [`Function.prototype.apply()`](../function/apply) on it, passing the object you want to inspect as the first parameter (called `thisArg`).

    const toString = Object.prototype.toString;

    toString.call(new Date);    // [object Date]
    toString.call(new String);  // [object String]
    toString.call(Math);        // [object Math]

    // Since JavaScript 1.8.5
    toString.call(undefined);   // [object Undefined]
    toString.call(null);        // [object Null]

Using `toString()` in this way is unreliable; objects can change the behavior of `Object.prototype.toString()` by defining a [`Symbol.toStringTag`](../symbol/tostringtag) property, leading to unexpected results. For example:

    const myDate = new Date();
    Object.prototype.toString.call(myDate);     // [object Date]

    myDate[Symbol.toStringTag] = 'myDate';
    Object.prototype.toString.call(myDate);     // [object myDate]

    Date.prototype[Symbol.toStringTag] = 'prototype polluted';
    Object.prototype.toString.call(new Date()); // [object prototype polluted]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.prototype.tostring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.prototype.tostring</span></a></td></tr></tbody></table>

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

`toString`

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

-   [`Object.prototype.toSource()`](tosource)
-   [`Object.prototype.valueOf()`](valueof)
-   [`Number.prototype.toString()`](../number/tostring)
-   [`Symbol.toPrimitive`](../symbol/toprimitive)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString</a>
