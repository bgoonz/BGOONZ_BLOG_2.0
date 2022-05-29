---
title: Asynchronous-JS
weight: 0
excerpt: Let's start with the async keyword. It can be placed before a function
seo:
    title: 'Asynchronous-JS'
    description: 'The word "async" before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.'
    robots: []
    extra: []
template: docs
---

# Async functions:
## Asynchronous JavaScript

Let's start with the `async` keyword. It can be placed before a function, like this:

```js
async function f() {
    return 1;
}
```

The word "async" before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of `1`; let's test it:

```js
async function f() {
    return 1;
}

f().then(alert); // 1
```

...We could explicitly return a promise, which would be the same:

```js
async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1
```

So, `async` ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There's another keyword, `await`, that works only inside `async` functions, and it's pretty cool.

## [Await](#await)

The syntax:

```js
// works only inside async functions
let value = await promise;
```

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

Here's an example with a promise that resolves in 1 second:

```js
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();
```

The function execution "pauses" at the line `(*)` and resumes when the promise settles, with `result` becoming its result. So the code above shows "done!" in one second.

Let's emphasize: `await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn't cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It's just a more elegant syntax of getting the promise result than `promise.then`. And, it's easier to read and write.

Can't use `await` in regular functions

If we try to use `await` in a non-async function, there would be a syntax error:

---


```js


function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
}
```

We may get this error if we forget to put `async` before a function. As stated earlier, `await` only works inside an `async` function.

Let's take the `showAvatar()` example from the chapter [Promises chaining](promise-chaining) and rewrite it using `async/await`:

1.  We'll need to replace `.then` calls with `await`.
2.  Also we should make the function `async` for them to work.

```js
async function showAvatar() {
    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();
```

Pretty clean and easy to read, right? Much better than before.

```js
await` won't work in the top-level code

People who are just starting to use `await` tend to forget the fact that we can't use `await` in top-level code. For example, this will not work:

```js
// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
```

But we can wrap it into an anonymous async function, like this:

```js
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
```

P.S. New feature: starting from V8 engine version 8.9+, top-level await works in [modules](modules).

```js
await` accepts "thenables"

Like `promise.then`, `await` allows us to use thenable objects (those with a callable `then` method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports `.then`, that's enough to use it with `await`.

Here's a demo `Thenable` class; the `await` below accepts its instances:

```js
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();
```

If `await` gets a non-promise object with `.then`, it calls that method providing the built-in functions `resolve` and `reject` as arguments (just as it does for a regular `Promise` executor). Then `await` waits until one of them is called (in the example above it happens in the line `(*)`) and then proceeds with the result.

Async class methods

To declare an async class method, just prepend it with `async`:

```js
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter().wait().then(alert); // 1 (this is the same as (result => alert(result)))
```

The meaning is the same: it ensures that the returned value is a promise and enables `await`.

## [Error handling]

If a promise resolves normally, then `await promise` returns the result. But in the case of a rejection, it throws the error, just as if there were a `throw` statement at that line.

This code:

```js
async function f() {
    await Promise.reject(new Error('Whoops!'));
}
```

...is the same as this:

```js
async function f() {
    throw new Error('Whoops!');
}
```

In real situations, the promise may take some time before it rejects. In that case there will be a delay before `await` throws an error.

We can catch that error using `try..catch`, the same way as a regular `throw`:

```js
async function f() {
    try {
        let response = await fetch('http://no-such-url');
    } catch (err) {
        alert(err); // TypeError: failed to fetch
    }
}

f();
```

In the case of an error, the control jumps to the `catch` block. We can also wrap multiple lines:

```js
async function f() {
    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch (err) {
        // catches errors both in fetch and response.json
        alert(err);
    }
}

f();
```

If we don't have `try..catch`, then the promise generated by the call of the async function `f()` becomes rejected. We can append `.catch` to handle it:

```js
async function f() {
    let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)
```

If we forget to add `.catch` there, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global `unhandledrejection` event handler as described in the chapter [Error handling with promises](promise-error-handling).

```js
async/await` and `promise.then/catch
```

When we use `async/await`, we rarely need `.then`, because `await` handles the waiting for us. And we can use a regular `try..catch` instead of `.catch`. That's usually (but not always) more convenient.

But at the top level of the code, when we're outside any `async` function, we're syntactically unable to use `await`, so it's a normal practice to add `.then/catch` to handle the final result or falling-through error, like in the line `(*)` of the example above.

```js
async/await` works well with `Promise.all
```

When we need to wait for multiple promises, we can wrap them in `Promise.all` and then `await`:

```js
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
```

In the case of an error, it propagates as usual, from the failed promise to `Promise.all`, and then becomes an exception that we can catch using `try..catch` around the call.

## [Summary](#summary)

The `async` keyword before a function has two effects:

1.  Makes it always return a promise.
2.  Allows `await` to be used in it.

The `await` keyword before a promise makes JavaScript wait until that promise settles, and then:

1.  If it's an error, the exception is generated --- same as if `throw error` were called at that very place.
2.  Otherwise, it returns the result.

Together they provide a great framework to write asynchronous code that is easy to both read and write.

With `async/await` we rarely need to write `promise.then/catch`, but we still shouldn't forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also `Promise.all` is nice when we are waiting for many tasks simultaneously.

## Cleaning up your asynchronous code with `await`

REPLs have traditionally had a difficult time allowing you to interact with asynchronous code since they encourage a coding style where you evaluate expressions and use those results in the next field. But if you are using promises or callbacks, this breaks down because these results exist only in the callback, not the next line:

In RunKit, you can use top-level `await` to get the same behavior of synchronous code.

Now we can treat this code as synchronous, despite the fact that the code is still executing asynchronously.

Let's look how. It helps to have a more complex example, where we need to do a few asynchronous operations in sequence. You can see how `await`, promises and callbacks achieve the same results, but the `await` style works better in a REPL:

- await
- promises
- callbacks

Here, we use `await` on lines 4 and 8, and the results from each request remain in scope.

Remember, `await` expects a `promise` so you can either write your own or use one of the many libraries that natively supports promises, and npm is full of packages that add promise support to existing libraries. Here are a few of our favorites:

- [fs-promise](https://npm.runkit.com/fs-promise) - promise based filesystem api
- [request-promise](https://npm.runkit.com/request-promise) - a wrapper around "request" for http stuff
- [glob-promise](https://npm.runkit.com/glob-promise) - glob style filesystem queries
- [bluebird](https://npm.runkit.com/bluebird) - general promise library with lots of utilities

### Further Reading

- [ES7 Async/Await presented at Brookyln.js](http://rossboucher.com/await)
- [Babel.js](https://babeljs.io/)
- [ECMAScript's Proposal for async/await](https://github.com/lukehoban/ecmascript-asyncawait/)
- [ES Meeting Notes discussing on async/await](https://esdiscuss.org/notes/2014-01-30#async-await)
- [Does async/await Solve a Real Problem?](https://esdiscuss.org/topic/does-async-await-solve-a-real-problem)
- [The Long Road to async/await in JavaScript](https://thomashunter.name/blog/the-long-road-to-asyncawait-in-javascript/)
- [async/await: The Hero JavaScript Deserved](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html)
