# JavaScript Rotate \(Array\) ProblemWalkthrough

Explanation for Rotate Right

### [CODEX](http://medium.com/codex)

## JavaScript Rotate \(Array\) Problem Walkthrough

## Explanation for Rotate Right

## Question

Write a function `rotateRight(array, num)` that takes in an array and a number as arguments.

> The function should return a new array where the elements of the array are rotated to the right number times.  
> The function should not mutate the original array and instead return a new array.
>
> Define this function using `function expression syntax`[.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

**HINT:** you can use [Array\#slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to create a copy of an array

> JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

## pop\(\): Remove an item from the end of an array

```text
let cats = ['Bob', 'Willy', 'Mini'];

cats.pop(); // ['Bob', 'Willy']
```

> pop\(\) returns the removed item.

## push\(\): Add items to the end of an array

```text
let cats = ['Bob'];

cats.push('Willy'); // ['Bob', 'Willy']

cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']
```

> push\(\) returns the new array length.

## shift\(\): Remove an item from the beginning of an array

```text
let cats = ['Bob', 'Willy', 'Mini'];

cats.shift(); // ['Willy', 'Mini']
```

> shift\(\) returns the removed item.

## unshift\(\): Add items to the beginning of an array

```text
let cats = ['Bob'];

cats.unshift('Willy'); // ['Willy', 'Bob']

cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']
```

> unshift\(\) returns the new array length.

**We are being asked for two things:**

1. To return an array with all the elements shifted over ‘num’ times.
2. To `NOT` mutate the original array

**Step 1.**  
We need to start the function and create a variable to hold a COPY of our input array.

[**Array.prototype.slice\(\)**  
 _The slice\(\) method returns a shallow copy of a portion of an array into a new array object selected from start to end…_developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

* We assign array.slice\(0\) to a variable called result.
* Slicing our input array simply creates a sliced copy of the data.
* Remember that by excluding a second argument in our slice parameter allows us to slice from the first argument all the way to the end.

**Step 2.**  
We need to create a for loop to tell our function how many times we want to rotate.

* By setting our second delimiter to i &lt; num we will ask our loops to run num times.
* Running num times is the same as executing the code block within num times.

**Step 3.**  
We need to put some executable code within our for loop to be run during every cycle.

* Since we are rotating to the right, every change to our result array under the hood will look like this \(if we ref. our first test case\):
* `['a', 'b', 'c', 'd', 'e'];` \(how it looks like at the start\)
* `['e', 'a', 'b', 'c', 'd'];` \(after one run of the for loop\)
* `['d', 'e', 'a', 'b', 'c'];` \(after second/last run of the for loop\)
* To accomplish this we first need to ‘`pop`' off or remove our last element.
* Two things happen when we use this built-in function.
* Our copied array is mutated to lose it’s last ele.
* The removed element is stored in the variable we assigned to the function.
* Our second step is to add it to the start of our array, to do this we can use `unshift`.
* By inputting the variable we are using to hold our removed element into the parameter of unshift we are adding our element to the front of the array.

**Step 4.**

Now that our for loop has ended and our copied array looks just like how the answer looks, we need to output the answer.

* We accomplish this by creating a `return` line AFTER the for loop.

## End Result

## If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

[**bgoonz’s gists**  
 _Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \|…_gist.github.com](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

## Or Checkout my personal Resource Site:

## **==&gt;currently under development & very buggy**

[**a/A-Student-Resources**  
 _Edit description_web-dev-resource-hub.netlify.app](https://web-dev-resource-hub.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 14, 2021](https://medium.com/p/31deb19ebba1).

[Canonical link](https://medium.com/@bryanguner/javascript-rotate-array-problemwalkthrough-31deb19ebba1)

Exported from [Medium](https://medium.com) on May 23, 2021.

