# extends

The `extends` keyword is used in [class declarations](../statements/class) or [class expressions](../operators/class) to create a class that is a child of another class.

## Syntax

    class ChildClass extends ParentClass { ... }

## Description

The `extends` keyword can be used to subclass custom classes as well as built-in objects.

The `.prototype` of the extension must be an [`Object`](../global_objects/object) or [`null`](../global_objects/null).

## Examples

### Using extends

The first example creates a class called `Square` from a class called `Polygon`. This example is extracted from this [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

    class Square extends Polygon {
      constructor(length) {
        // Here, it calls the parent class' constructor with lengths
        // provided for the Polygon's width and height
        super(length, length);
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
      }

      get area() {
        return this.height * this.width;
      }
    }

### Using extends with built-in objects

This example extends the built-in [`Date`](../global_objects/date) object. This example is extracted from this [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

    class myDate extends Date {

      getFormattedDate() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
      }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-class-definitions">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'extends' in that specification.</span></a></td></tr></tbody></table>

`extends`

49

42-49

Strict mode is required.

42-49

13

45

No

36

29-36

Strict mode is required.

29-36

9

49

42-49

Strict mode is required.

49

42-49

Strict mode is required.

42-49

45

36

29-36

Strict mode is required.

29-36

9

5.0

4.0-5.0

Strict mode is required.

## See also

-   [Classes](../classes)
-   [constructor](constructor)
-   [super](../operators/super)
-   [Anurag Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends</a>
