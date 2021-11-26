# Object.prototype.toSource()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `toSource()` method returns a string representing the source code of the object.

## Syntax

    toSource()

### Return value

A string representing the source code of the object.

## Description

The `toSource()` method returns the following values:

-   For the built-in [`Object`](../object) object, `toSource()` returns the following string indicating that the source code is not available:

        function Object() {
            [native code]
        }

-   For instances of [`Object`](../object), `toSource()` returns a string representing the source code.

You can call `toSource()` while debugging to examine the contents of an object.

### Overriding the toSource() method

It is safe for objects to override the `toSource()` method. For example:

    function Person(name) {
      this.name = name;
    }

    Person.prototype.toSource = function Person_toSource() {
      return 'new Person(' + uneval(this.name) + ')';
    };

    console.log(new Person('Joe').toSource()); // ---> new Person("Joe")

### Built-in toSource() methods

Each core JavaScript type has its own `toSource()` method. These objects are:

-   [`Array.prototype.toSource()`](../array/tosource) — [`Array`](../array) object.
-   [`Boolean.prototype.toSource()`](../boolean/tosource) — [`Boolean`](../boolean) object.
-   [`Date.prototype.toSource()`](../date/tosource) — [`Date`](../date) object.
-   [`Function.prototype.toSource()`](../function/tosource) — [`Function`](../function) object.
-   [`Number.prototype.toSource()`](../number/tosource) — [`Number`](../number) object.
-   [`RegExp.prototype.toSource()`](../regexp/tosource) — [`RegExp`](../regexp) object.
-   [`String.prototype.toSource()`](../string/tosource) — [`String`](../string) object.
-   [`Symbol.prototype.toSource()`](../symbol/tosource) — [`Symbol`](../symbol) object.
-   `Math.toSource()` — Returns the String "Math".

### Limitations on cyclical objects

In the case of objects that contain references to themselves, e.g. a cyclically linked list or a tree that can be traversed both ways, `toSource()` will not recreate the self-reference, as of Firefox 24. For example:

    var obj1 = {};
    var obj2 = { a: obj1 };
    obj1.b = obj2;

    console.log('Cyclical: ' + (obj1.b.a == obj1));

    var objSource = obj1.toSource(); // returns "({b:{a:{}}})"

    obj1 = eval(objSource);

    console.log('Cyclical: ' + (obj1.b.a == obj1));

If a cyclical structure is employed and `toSource()` is needed, the object must provide an override to `toSource()`, either using a reference to a constructor or providing an anonymous function.

## Examples

### Using toSource()

The following code defines the `Dog` object type and creates `theDog`, an object of type `Dog`:

    function Dog(name, breed, color, sex) {
      this.name = name;
      this.breed = breed;
      this.color = color;
      this.sex = sex;
    }

    theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

Calling the `toSource()` method of `theDog` displays the JavaScript source that defines the object:

    theDog.toSource();
    // returns ({name:"Gabby", breed:"Lab", color:"chocolate", sex:"female"})

## Specifications

Not part of any standard.

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

`toSource`

No

No

1-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

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

-   [`Object.prototype.toString()`](tostring)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource</a>
