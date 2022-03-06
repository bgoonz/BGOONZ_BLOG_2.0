---
title: Review Of Concepts
weight: 0
excerpt: Basic Concepts review
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

# Review-Of-Previous-Concepts

### Running JS Locally Concepts

-   Match the commands `ls`, `cd`, `pwd` to their descriptions
    -   `ls` lists contents of current directory
    -   `cd` changes current directory
        -   `cd ..` takes you up one level
        -   `cd` alone takes you back home
    -   `pwd` returns current directory
-   Given a folder structure diagram, a list of 'cd \(path\)' commands and target files, match the paths to the target files.
-   Use VSCode to create a folder. Within the folder create a .js file containing `console.log('hello new world');` and save it.
-   Use node to execute a JavaScript file in the terminal

### Plain Old JS Object Lesson Concepts

-   Label variables as either Primitive vs. Reference
    -   primitives: strings, booleans, numbers, null and undefined
        -   primitives are immutable
    -   refereces: objects \(including arrays\)
        -   references are mutable
-   Identify when to use `.` vs `[]` when accessing values of an object
    -   dot syntax `object.key`
        -   easier to read
        -   easier to write
        -   cannot use variables as keys
        -   keys cannot begin with a number
    -   bracket notation `object["key]`
        -   allows variables as keys
        -   strings that start with numbers can be use as keys
-   Write an object literal with a variable key using interpolation
    -   put it in brackets to access the value of the variable, rather than just make the value that string

```js
let a = 'b';
let obj = { a: 'letter_a', [a]: 'letter b' };
```

-   Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object
    -   can also use `(key in object)` syntax interchangeably \(returns a boolean\)
-   Utilize Object.keys and Object.values in a function
    -   `Object.keys(obj)` returns an array of all the keys in `obj`
    -   `Object.values(obj)` returns an array of the values in `obj`
-   Iterate through an object using a `for in` loop

```js
let printValues = function (obj) {
    for (let key in obj) {
        let value = obj[key];
        console.log(value);
    }
};
```

-   Define a function that utilizes `...rest` syntax to accept an arbitrary number of arguments
    -   `...rest` syntax will store all additional arguments in an array
    -   array will be empty if there are no additional arguments

```js
let myFunction = function (str, ...strs) {
    console.log('The first string is ' + str);
    console.log('The rest of the strings are:');
    strs.forEach(function (str) {
        console.log(str);
    });
};
```

###

-   Use `...spread` syntax for Object literals and Array literals

```js
let arr1 = ['a', 'b', 'c'];
let longer = [...arr1, 'd', 'e']; // ["a", "b", "c", "d", "e"]
// without spread syntax, this would give you a nested array
let withoutRest = [arr1, 'd', 'e']; // [["a", "b", "c"], "d", "e"]
```

-   Destructure an array to reference specific elements

````js


    let array = \[35,9\];
    let \[firstEl, secondEl\] = array;
    console.log\(firstEl\); // =&gt; 35
    console.log\(secondEl\); // =&gt; 9
> can also destructure using ... syntax let array = \[35,9,14\]; let \[head, ...tail\] = array; console.log\(head\); // =&gt; 35 console.log\(tail\); // =&gt; \[9, 14\]



```js


- Destructure an object to reference specific values
   - if you want to use variable names that don't match the keys, you can use aliasing
      - `let { oldkeyname: newkeyname } = object`
   - rule of thumb—only destructure values from objects that are two levels deep

```js

let obj = {
   name: "Wilfred",
   appearance: ["short", "mustache"],
   favorites: {
      color: "mauve",
      food: "spaghetti squash",
      number: 3
   }
}
//  with variable names that match keys
let { name, appearance } = obj;
console.log(name); // "Wilfred"
console.log(appearance); // ["short", "mustache"]
> with new variable names (aliasing)
let {name: myName, appearance: myAppearance} = obj;
console.log(myName); // "Wilfred"
console.log(myAppearance); // ["short", "mustache"]
> in a function call
let sayHello = function({name}) {
console.log("Hello, " + name); // "Hello Wilfred"
}
//  nested objects + aliasing
let { favorites: {color, food: vegetable} } = obj;
console.log(color, vegetable); //=> mauve spaghetti squash

````

-   Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

```js
//
let elementCounts = function (array) {
    let obj = {};
    array.forEach(function (el) {
        if (el in obj) obj[el] += 1;
        else obj[el] = 1;
    });
    return obj;
};
console.log(elementCounts(['e', 'f', 'g', 'f'])); // => Object {e: 1, f: 2, g: 1}
```

### Callbacks Lesson Concepts

-   Given multiple plausible reasons, identify why functions are called "First Class Objects" in JavaScript.
    -   they can be stored in variables, passed as arguments to other functions, and serve as return value for a function
    -   supports same basic operations as other types \(strings, bools, numbers\)
    -   higher-order functions take functions as arguments or return functions as values
-   Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed
    -   what is this referring to?
-   Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.

```js
let greaterCB = function (val, callback1, callback2) {
    if (callback1(val) > callback2(val)) {
        return callback1(val);
    }
    return callback2(val);
};
let greaterCB = function (val, callback1, callback2) {
    if (callback1(val) > callback2(val)) {
        return callback1(val);
    }
    return callback2(val);
};
```

> shorter version let greaterCB = function\(val, callback1, callback2\) { return Math.max\(callback1\(val\), callback2\(val\)\); } // even shorter, cause why not let greaterCB = \(val, cb1, cb2\) =&gt; Math.max\(cb1\(val\), cb2\(val\)\);

````js


#  Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#map`.

```js

let myMap = function(array, callback) {
   let newArr = [];
   for (let i = 0; i < array.length; i ++) {
      mapped = callback(array[i], i, array);
      newArr.push(mapped);
   }
   return newArr;
}
console.log( myMap([16,25,36], Math.sqrt)); // => [4, 5, 6];
let myMapArrow = (array, callback) => {
   let newArr = [];
   array.forEach( (ele, ind, array) => {
      newArr.push(callback(ele, ind, array));
   })
   return newArr;
}
console.log(myMapArrow([16,25,36], Math.sqrt)); // => [4, 5, 6];

````

-   Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`.

```js
let myFilter = function (array, callback) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filtered.push(array[i], i, array);
        }
    }
};
```

-   Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.

```js
let myEvery = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
};
// with arrow function syntax
let myEvery = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
};
```
