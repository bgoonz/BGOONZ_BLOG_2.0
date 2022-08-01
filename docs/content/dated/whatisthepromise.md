---
layout: post

    - en
    - javascript
---

All `Promise` instances accept a method as an argument called the executor. This executor takes two methods as arguments: resolve and reject. Within the executor, if resolve is called, the `Promise` instance becomes fulfilled. If an exception is thrown, reject is called instead, and the `Promise` instance becomes rejected.

```js
const executor = (resolve, reject) => {
    setTimeout(() => resolve("I'm done"), 1000);
};

new Promise(executor).then((result) => {
    console.log(result);
    // Output after 1000ms: I'm done
});
```
