---
title: Property access
---

Properties of objects can be accessed in two ways:

-   **Dot notation** (`obj.prop`)
-   **Bracket notation** (`obj["prop"]`)

You should always prefer dot notation, unless you _have_ to use bracket notation.
This could be if the property name is not a valid identifier or if it comes from
a variable. You can use any _expression_ inside the brackets.

Examples:

```javascript
obj['test-field']; // test-field is not a valid identifier
var field = 'test';
obj[field];
obj['example' + i];
```

Because you can only use dot notation if the property name is a valid identifier
name, array objects can only be accessed via bracket notation, `arr[0]`, not dot
notation, `a.0`.

---

You can **assign to properties** by putting the member expression on the left
hand side of an assignment expression:

```javascript
obj.prop = value;
```

---

If you have nested objects/arrays, you simply use a valid property accessor
repeatedly:

```javascript
var obj = { foo: { bar: [42, 21] } };
console.log(obj.foo.bar[0]); // which is evaluated as ((obj.foo).bar)[0]
```

---

Accessing a non existing property does not throw an error, it returns
`undefined`:

```javascript
var obj = {};
console.log(obj.foo);
```
