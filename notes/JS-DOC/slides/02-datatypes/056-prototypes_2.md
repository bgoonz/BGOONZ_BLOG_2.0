Now we know what prototypes are, but not what they *do* or which problem they solve.

What does a prototype do?
-------------------------

Prototypes come in play when we are accessing the property of an object.

Whenver an object property is accessed, the object and its prototype chain are traversed until the property is found. If the end of the prototype chain is reached without finding the property, `undefined` is returned.

Consider the following structure:

    ┌───────────────────────┐
    │           a           │
    ├───────────────┬───────┤
    │ name          │ "Tom" │
    ├───────────────┼───────┤
    │ [[Prototype]] │   ◆───┼───┐
    └───────────────┴───────┘   │
                                ▼
                    ┌───────────────────────┐
                    │           b           │
                    ├───────────────┬───────┤
                    │ name          │ "Joe" │
                    ├───────────────┼───────┤
                    │ age           │   42  │
                    ├───────────────┼───────┤
                    │ [[Prototype]] │   ◆───┼───┐
                    └───────────────┴───────┘   │
                                                ▼
                                    ┌───────────────────────┐
                                    │           c           │
                                    ├───────────────┬───────┤
                                    │ height        │  180  │
                                    ├───────────────┼───────┤
                                    │ [[Prototype]] │  null │
                                    └───────────────┴───────┘

These are the results for accessing different properties on A:

    a.name; // Tom        `a` itself has this property, it shadows `b.name`
    a.age; // 42         `a`'s prototype has this property
    a.height; // 180        `a`'s prototype's prototype has this property
    a.eyeColor; // undefined  this property doesn't exist

------------------------------------------------------------------------

This is also the reason why we can access `.toString()` on almost every object: It is defined in `Object.prototype`, which sits at the end of every prototype chain.

    var user = { name: 'Tom' };
    user.toString();
    // "[object Object]"

**Note**: *Assignments* to properties will (almost) always create or update a property on object itself, even if a property with the same name already exists in the prototype chain. The property in the prototype chain is then *shadowed*, similar to variable shadowing in scopes.
