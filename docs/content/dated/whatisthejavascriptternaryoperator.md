---
layout: post

    - en
    - javascript
---

The ternary operator is a shortcut for the `if` statement. It consists of three operands; a question mark, a condition, and an expression to execute if the condition is true, followed by a colon and another expression to execute if it's false.

```js
let age = 26;

// condition ? expression if true : expression if false
let drink = age >= 21 ? 'Beer' : 'Juice';

console.log(drink); // "Beer"

// Equivalent to:
let drink;
if (age >= 21) {
    drink = 'Beer';
} else {
    drink = 'Juice';
}

console.log(drink); // "Beer"
```
