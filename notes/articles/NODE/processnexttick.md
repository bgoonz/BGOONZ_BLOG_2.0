---
title: 'Understanding process.nextTick()'
template: docs
excerpt: 'The Node.js process.nextTick function interacts with the event loop in a special way'
---



find . -name "*.md" -type f | rename 's/0//g'

find . -name "*.md" -type f | rename 's/1//g'
find . -name "*.md" -type f | rename 's/2//g'
find . -name "*.md" -type f | rename 's/3//g'
find . -name "*.md" -type f | rename 's/4//g'
find . -name "*.md" -type f | rename 's/5//g'
find . -name "*.md" -type f | rename 's/6//g'
find . -name "*.md" -type f | rename 's/7//g'
find . -name "*.md" -type f | rename 's/8//g'
find . -name "*.md" -type f | rename 's/9//g'




find . -name "*.md" -type f | rename 's/0//‘* {} +
find . -type d -exec rename ’s/1//g’ {} +
find . -type d -exec rename ’s/2//g’ {} +
find . -type d -exec rename ’s/3//g’ {} +
find . -type d -exec rename ’s/4//g’ {} +
find . -type d -exec rename ’s/5//g’ {} +
find . -type d -exec rename ’s/6//g’ {} +
find . -type d -exec rename ’s/7//g’ {} +
find . -type d -exec rename ’s/8//g’ {} +
find . -type d -exec rename ’s/9//g’ {} +

As you try to understand the Node.js event loop, one important part of it is `process.nextTick()`.

Every time the event loop takes a full trip, we call it a tick.

When we pass a function to `process.nextTick()`, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

```js
process.nextTick(() => {
    //do something
});
```

The event loop is busy processing the current function code.

When this operation ends, the JS engine runs all the functions passed to `nextTick` calls during that operation.

It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.

Calling `setTimeout(() => {}, 0)` will execute the function at the end of next tick, much later than when using `nextTick()` which prioritizes the call and executes it just before the beginning of the next tick.

Use `nextTick()` when you want to make sure that in the next event loop iteration that code is already executed.
