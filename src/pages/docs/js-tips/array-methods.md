---
title: Rotate (Array) Problem Walkthrough
weight: 0
excerpt: lorem-ipsum
seo:
    title: 'Rotate (Array) Problem Walkthrough'
    description: ' The function should return a new array where the elements of the array are rotated to the right number times. The function should not mutate the original array and instead return a new array.'
    robots: []
    extra: []
template: docs
---


### Rotate (Array) Problem Walkthrough

### Explanation for Rotate Right

![alt-text](https://cdn-images-1.medium.com/max/1200/0*3_vbGvHeWOgSTxk7.png)

### Question

Write a function `rotateRight(array, num)` that takes in an array and a number as arguments.

> The function should return a new array where the elements of the array are rotated to the right number times. The function should not mutate the original array and instead return a new array.

> Define this function using `[*function expression syntax*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)`[.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

**HINT:** you can use [Array#slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to create a copy of an array

---

> JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

### pop(): Remove an item from the end of an array

```
let cats = ['Bob', 'Willy', 'Mini'];
```

```
cats.pop(); // ['Bob', 'Willy']
```

> pop() returns the removed item.

### push(): Add items to the end of an array

```
let cats = ['Bob'];
```

```
cats.push('Willy'); // ['Bob', 'Willy']
```

```
cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']
```

> push() returns the new array length.

### shift(): Remove an item from the beginning of an array

```
let cats = ['Bob', 'Willy', 'Mini'];
```

```
cats.shift(); // ['Willy', 'Mini']
```

> shift() returns the removed item.

### unshift(): Add items to the beginning of an array

```
let cats = ['Bob'];
```

```
cats.unshift('Willy'); // ['Willy', 'Bob']
```

```
cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']
```

> unshift() returns the new array length.

**We are being asked for two things:**

1.  To return an array with all the elements shifted over 'num ' times.
2.  To `NOT` mutate the original array

**Step 1.**\
We need to start the function and create a variable to hold a COPY of our input array.

let rotateRight = function (array, num) {
let result = array.slice(0);
};

[view raw](https://gist.github.com/bgoonz/ca7a48c316345f6f7acd9383e13fb23e/raw/ec4c2296e563c005a0091d35cf4299c17944b826/copy-arr.js)[copy-arr.js ](https://gist.github.com/bgoonz/ca7a48c316345f6f7acd9383e13fb23e#file-copy-arr-js)hosted with ❤ by [GitHub](https://github.com/)

[**Array.prototype.slice()**\
*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end...*developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice')[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

- We assign array.slice(0) to a variable called result.
- Slicing our input array simply creates a sliced copy of the data.
- Remember that by excluding a second argument in our slice parameter allows us to slice from the first argument all the way to the end.

**Step 2.**\
We need to create a for loop to tell our function how many times we want to rotate.

let rotateRight = function (array, num) {
let result = array.slice(0);
for (var i = 0; i < num; i++) {
// some code here
}
};

[view raw](https://gist.github.com/bgoonz/b2a934289a677f337a72bcd7751a55df/raw/7e76928d94617e115e3f894d1557caf1f8549590/for-loop-rotate.js)[for-loop-rotate.js ](https://gist.github.com/bgoonz/b2a934289a677f337a72bcd7751a55df#file-for-loop-rotate-js)hosted with ❤ by [GitHub](https://github.com/)

- By setting our second delimiter to i < num we will ask our loops to run num times.
- Running num times is the same as executing the code block within num times.

**Step 3.**\
We need to put some executable code within our for loop to be run during every cycle.
```js
//
let rotateRight = function (array, num) {
let result = array.slice(0);
for (var i = 0; i < num; i++) {
let ele = result.pop();
result.unshift(ele);
}
};
```
[view raw](https://gist.github.com/bgoonz/44e66960ba5cc0ffe04ea0499f7c3134/raw/8427e5139b96194f78552f10af07e6309ea2135a/rot.js)[rot.js ](https://gist.github.com/bgoonz/44e66960ba5cc0ffe04ea0499f7c3134#file-rot-js)hosted with ❤ by [GitHub](https://github.com/)

- Since we are rotating to the right, every change to our result array under the hood will look like this (if we ref. our first test case):
- `['a', 'b', 'c', 'd', 'e'];` (how it looks like at the start)
- `['e', 'a', 'b', 'c', 'd'];` (after one run of the for loop)
- `['d', 'e', 'a', 'b', 'c'];` (after second/last run of the for loop)
- To accomplish this we first need to '`pop`' off or remove our last element.
- Two things happen when we use this built-in function.
- Our copied array is mutated to lose it''s last ele.
- The removed element is stored in the variable we assigned to the function.
- Our second step is to add it to the start of our array, to do this we can use `unshift`.
- By inputting the variable we are using to hold our removed element into the parameter of unshift we are adding our element to the front of the array.

**Step 4.**

Now that our for loop has ended and our copied array looks just like how the answer looks, we need to output the answer.

let rotateRight = function (array, num) {
let result = array.slice(0);
for (var i = 0; i < num; i++) {
let ele = result.pop();
result.unshift(ele);
}
return result;
};

[view raw](https://gist.github.com/bgoonz/b033f820c35869af0869ce712af68bda/raw/41176af3dce167556337e74744c3156756f470b1/rot2.js)[rot2.js ](https://gist.github.com/bgoonz/b033f820c35869af0869ce712af68bda#file-rot2-js)hosted with ❤ by [GitHub](https://github.com/)

- We accomplish this by creating a `return` line AFTER the for loop.

### End Result
```js
//
let rotateRight = function (array, num) {
let result = array.slice(0);
for (let i = 0; i < num; i++) {
let ele = result.pop();
result.unshift(ele);
}
return result;
};
//let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2));
//["d", "e", "a", "b", "c"];
console.log(arr);
["a", "b", "c", "d", "e"];
let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals, 3));
//["koala", "opossum", "kangaroo", "wombat"];
console.log(animals);
//["wombat", "koala", "opossum", "kangaroo"];
```
[view raw](https://gist.github.com/bgoonz/4e2a040cd94006bb887a77a68f4287b9/raw/83bafeb8c66bf5a3653b88a2215fdf67efd9c24a/rotate.js)[rotate.js ](https://gist.github.com/bgoonz/4e2a040cd94006bb887a77a68f4287b9#file-rotate-js)hosted with ❤ by [GitHub](https://github.com/)
