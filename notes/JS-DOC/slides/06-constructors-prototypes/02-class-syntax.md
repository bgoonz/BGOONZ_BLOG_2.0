---
toc: "ES6's class declarations"
---

# Syntactic sugar: ES6's `class` declarations

Setting up more complex constructor functions with their prototypes can be
cumbersome. For that reason ES2015 [introduced a new syntax][classes].
With the syntax, the example from the previous slide would look like

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return name;
    }
}

var felix = new Person('Felix');
```

<div class="callout warning">

I want to be very clear that this is mostly just _syntactic
sugar_. While there are some differences between `class` declarations
and constructor functions + prototype, the underlying paradigm (prototypes)
does not change.

</div>

[classes]: http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes
