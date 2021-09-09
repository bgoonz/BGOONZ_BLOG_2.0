---
title: Scope
chapter: Scope
---

Unlike other programming languages, JavaScript only has **function scope**, not
block scope. In the following example, all variables are visible throughout the
function:

```javascript
function foo() {
    var bar = 42;
    // loop
    for (var i = 0; i < 10; i++) {
        var j = i;
    }

    console.log(bar); // 42
    console.log(i); // 10
    console.log(j); // 9
}
```

In other languages, like Java, the variables `i` or `j` would not be available
where the above code tries to access them.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**

The big difference between `let`, `const`, and `var` is that `let` and `const`
are _[block scoped][block scope]_. If we would use `let` instead of `var` in
the above example, we would get the following result:

```javascript
function foo() {
    let bar = 42; // or var or const, doesn't matter
    // loop
    for (let i = 0; i < 10; i++) {
        // i is scoped to the loop body block
        let j = i; // j is scoped to the loop body block
    }

    console.log(bar); // 42
    console.log(i); // ReferenceError
    console.log(j); // ReferneceError
}
```
