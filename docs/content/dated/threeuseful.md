-   /en/three-useful-hacks/

---

#### Getting array items from behind to front

If you want to get the array items from behind to front, just do this:

```js
var newArray = [1, 2, 3, 4];

console.log(newArray.slice(-1)); // [4]
console.log(newArray.slice(-2)); // [3, 4]
console.log(newArray.slice(-3)); // [2, 3, 4]
console.log(newArray.slice(-4)); // [1, 2, 3, 4]
```

#### Short-circuits conditionals

If you have to execute a function just if a condition is `true`, like this:

```js
if (condition) {
    dosomething();
}
```

You can use a short-circuit just like this:

```js
condition && dosomething();
```

#### Set variable default values using "||"

If you have to set a default value to variables, you can simple do this:

```js
var a;

console.log(a); //undefined

a = a || 'default value';

console.log(a); //default value

a = a || 'new value';

console.log(a); //default value
```
