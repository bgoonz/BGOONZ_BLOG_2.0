---
title: Constructor functions
chapter: Constructors/Classes
---

JavaScript doesn't have classes like class-based OOP languages have, but it has
something similar: _constructor functions_.

Constructor functions are functions which _construct objects_. Technically
_every_ function can be used as a constructor function, it just has to be
called with the [`new` operator][new]:

```javascript
function Person(name) {
    this.name = name;
}

var felix = new Person('Felix');
console.log(felix.name);
```

Inside the constructor function, `this` refers to a new, empty object. The
result of the whole `new` expression (`new Person(...)`) is that object. You can
think about it as if the function would implicitly `return this;`.

Calling a function with `new` has another effect: The prototype of the new object
is the object referred to by the function's `prototype` property.

Example:

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    return this.name;
};

var felix = new Person('Felix');
console.log(felix.sayName());
```

Given the example above, use `console.dir(felix);` to get a better understanding
of the structure of the object (including it's prototype chain).

[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
