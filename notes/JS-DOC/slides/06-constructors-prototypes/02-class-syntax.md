Syntactic sugar: ES6’s `class` declarations
===========================================

Setting up more complex constructor functions with their prototypes can be cumbersome. For that reason ES2015 [introduced a new syntax](http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes). With the syntax, the example from the previous slide would look like

    class Person {
        constructor(name) {
            this.name = name;
        }

        sayName() {
            return name;
        }
    }

    var felix = new Person('Felix');

I want to be very clear that this is mostly just *syntactic sugar*. While there are some differences between `class` declarations and constructor functions + prototype, the underlying paradigm (prototypes) does not change.
