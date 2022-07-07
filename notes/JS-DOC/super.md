# super

The **super** keyword is used to access and call functions on an object's parent.

The `super.prop` and `super[expr]` expressions are valid in any [method definition](../functions/method_definitions) in both [classes](../classes) and [object literals](object_initializer).

## Syntax

    super([arguments]); // calls the parent constructor.
    super.functionOnParent([arguments]);

## Description

When used in a constructor, the `super` keyword appears alone and must be used before the `this` keyword is used. The `super` keyword can also be used to call functions on a parent object.

## Examples

### Using `super` in classes

This code snippet is taken from the [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Here `super()` is called to avoid duplicating the constructor parts' that are common between `Rectangle` and `Square`.

    class Rectangle {
      constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
      }
      sayName() {
        console.log('Hi, I am a ', this.name + '.');
      }
      get area() {
        return this.height * this.width;
      }
      set area(value) {
        this._area = value;
      }
    }

    class Square extends Rectangle {
      constructor(length) {
        this.height; // ReferenceError, super needs to be called first!

        // Here, it calls the parent class's constructor with lengths
        // provided for the Rectangle's width and height
        super(length, length);

        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
      }
    }

### Super-calling static methods

You are also able to call super on [static](../classes/static) methods.

    class Rectangle {
      static logNbSides() {
        return 'I have 4 sides';
      }
    }

    class Square extends Rectangle {
      static logDescription() {
        return super.logNbSides() + ' which are all equal';
      }
    }
    Square.logDescription(); // 'I have 4 sides which are all equal'

### Deleting super properties will throw an error

You cannot use the [delete operator](delete) and `super.prop` or `super[expr]` to delete a parent class' property, it will throw a [`ReferenceError`](../global_objects/referenceerror).

    class Base {
      foo() {}
    }
    class Derived extends Base {
      delete() {
        delete super.foo; // this is bad
      }
    }

    new Derived().delete(); // ReferenceError: invalid delete involving 'super'.

### `super.prop` cannot overwrite non-writable properties

When defining non-writable properties with e.g. [`Object.defineProperty`](../global_objects/object/defineproperty), `super` cannot overwrite the value of the property.

    class X {
      constructor() {
        Object.defineProperty(this, 'prop', {
          configurable: true,
          writable: false,
          value: 1
        });
      }
    }

    class Y extends X {
      constructor() {
        super();
      }
      foo() {
        super.prop = 2;   // Cannot overwrite the value.
      }
    }

    var y = new Y();
    y.foo(); // TypeError: "prop" is read-only
    console.log(y.prop); // 1

### Using `super.prop` in object literals

Super can also be used in the [object initializer / literal](object_initializer) notation. In this example, two objects define a method. In the second object, `super` calls the first object's method. This works with the help of [`Object.setPrototypeOf()`](../global_objects/object/setprototypeof) with which we are able to set the prototype of `obj2` to `obj1`, so that `super` is able to find `method1` on `obj1`.

    var obj1 = {
      method1() {
        console.log('method 1');
      }
    }

    var obj2 = {
      method2() {
        super.method1();
      }
    }

    Object.setPrototypeOf(obj2, obj1);
    obj2.method2(); // logs "method 1"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-super-keyword">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'super' in that specification.</span></a></td></tr></tbody></table>

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

`super`

42

13

45

No

29

7

42

42

45

29

7

4.0

## See also

-   [Classes](../classes)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super</a>
