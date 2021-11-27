---
title: Function Calls
---

Like other C-like languages, functions are called by putting `()` after the
function reference:

```javascript
myFunction();
```

Unlike other languages, functions can be called with any number of arguments,
no matter how many formal parameters they have:

```javascript
function myFunction(foo, bar) {
    console.log(foo, bar);
}

myFunction(); // undefined undefined
myFunction(1); // 1 undefined
myFunction(1, 2); // 1 2
myFunction(1, 2, 3); // 1 2
```

Each function has access to the special [`arguments`][arguments] variable,
which is an _array-like_ value. This allows you to access all the arguments
passed to a function, even if there are more than formal parameters:

```javascript
function myFunction(foo, bar) {
    console.log(foo, bar, arguments);
}

myFunction(); // undefined undefined []
myFunction(1); // 1 undefined [1]
myFunction(1, 2); // 1 2 [1, 2]
myFunction(1, 2, 3); // 1 2 [1, 2, 3]
```

[arguments]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
