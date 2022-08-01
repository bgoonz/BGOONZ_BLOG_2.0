---
title: Hoisting
---

This behavior becomes more understandable after we introduce **hoisting**.
Before a JavaScript function is even executed, the engine finds all variable and
function declarations and creates a binding for them in the functions scope.

Thus, the example of the previous slide is equivalent to the following:

```javascript
function foo() {
    var bar, i, j;

    bar = 42;
    // loop
    for (i = 0; i < 10; i++) {
        j = i;
    }

    console.log(bar); // 42
    console.log(i); // 10
    console.log(j); // 9
}
```

Note how all variable declarations are put at the top of the function. The
_value_ will still be assigned only when the execution reaches the line of the
assignment expression.

One of the practical implications of the hoisting concept is _mutually recursive
functions_. Consider the following example:

```javascript
function isEven(n) {
    if (n == 0) {
        return true;
    }
    return isOdd(n - 1);
}

// Normally may call `isEven` even though it's mutually
// dependent on the `isOdd` which is defined below.
console.log(isEven(2)); // true

function isOdd(n) {
    if (n == 0) {
        return false;
    }
    return isEven(n - 1);
}
```

To get more details on hoisting see [this article][hoisting].

[hoisting]: http://dmitrysoshnikov.com/notes/note-4-two-words-about-hoisting/
