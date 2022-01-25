# class expression

The **class expression** is one way to define a class in ECMAScript 2015. Similar to [function expressions](function), class expressions can be named or unnamed. If named, the name of the class is local to the class body only.

JavaScript classes use prototype-based inheritance.

## Syntax

    const MyClass = class [className] [extends otherClassName] {
        // class body
    };

## Description

A class expression has a similar syntax to a [class declaration (statement)](../statements/class). As with `class` statements, the body of a `class` expression is executed in [strict mode](../strict_mode).

There are several differences between class expressions and [class statements](../statements/class), however:

-   Class expressions may omit the class name ("binding identifier"), which is not possible with [class statements](../statements/class).
-   Class expressions allow you to redefine (re-declare) classes **without throwing** a [`SyntaxError`](../global_objects/syntaxerror). This is not the case with [class statements](../statements/class).

The `constructor` method is optional. Classes generated with class expressions will always respond to [`typeof`](typeof) with the value "`function`".

    'use strict';
    let Foo = class {};  // constructor property is optional
    Foo = class {};      // Re-declaration is allowed

    typeof Foo;             // returns "function"
    typeof class {};        // returns "function"

    Foo instanceof Object;   // true
    Foo instanceof Function; // true
    class Foo {}            // Throws SyntaxError (class declarations do not allow re-declaration)

## Examples

### A simple class expression

This is just a simple anonymous class expression which you can refer to using the variable `Foo`.

    const Foo = class {
      constructor() {}
      bar() {
        return 'Hello World!';
      }
    };

    const instance = new Foo();
    instance.bar();  // "Hello World!"
    Foo.name;        // "Foo"

### Named class expressions

If you want to refer to the current class inside the class body, you can create a _named class expression_. The name is only visible within the scope of the class expression itself.

    const Foo = class NamedFoo {
      constructor() {}
      whoIsThere() {
        return NamedFoo.name;
      }
    }
    const bar = new Foo();
    bar.whoIsThere();  // "NamedFoo"
    NamedFoo.name;     // ReferenceError: NamedFoo is not defined
    Foo.name;          // "NamedFoo"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-class-definitions">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-class-definitions</span></a></td></tr></tbody></table>

`class`

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

-   [function expression](function)
-   [class declaration](../statements/class)
-   [Classes](../classes)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class</a>
