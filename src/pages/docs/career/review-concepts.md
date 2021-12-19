---
title:  Review Of Concepts
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

### Review of Concepts

### Running JS Locally Concepts

- Match the commands `ls`, `cd`, `pwd` to their descriptions
  - `ls` lists contents of current directory
  - `cd` changes current directory
    - `cd ..` takes you up one level
    - `cd` alone takes you back home
  - `pwd` returns current directory
- Given a folder structure diagram, a list of 'cd \(path\)' commands and target files, match the paths to the target files.
- Use VSCode to create a folder. Within the folder create a .js file containing `console.log('hello new world');` and save it.
- Use node to execute a JavaScript file in the terminal

### Plain Old JS Object Lesson Concepts

- Label variables as either Primitive vs. Reference
  - primitives: strings, booleans, numbers, null and undefined
    - primitives are immutable
  - refereces: objects \(including arrays\)
    - references are mutable
- Identify when to use `.` vs `[]` when accessing values of an object
  - dot syntax `object.key`
    - easier to read
    - easier to write
    - cannot use variables as keys
    - keys cannot begin with a number
  - bracket notation `object["key]`
    - allows variables as keys
    - strings that start with numbers can be use as keys
- Write an object literal with a variable key using interpolation
  - put it in brackets to access the value of the variable, rather than just make the value that string

```js
let a = "b";
let obj = { a: "letter_a", [a]: "letter b" };
```

- Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object
  - can also use `(key in object)` syntax interchangeably \(returns a boolean\)
- Utilize Object.keys and Object.values in a function
  - `Object.keys(obj)` returns an array of all the keys in `obj`
  - `Object.values(obj)` returns an array of the values in `obj`
- Iterate through an object using a `for in` loop

```js
let printValues = function (obj) {
  for (let key in obj) {
    let value = obj[key];
    console.log(value);
  }
};
```

- Define a function that utilizes `...rest` syntax to accept an arbitrary number of arguments
  - `...rest` syntax will store all additional arguments in an array
  - array will be empty if there are no additional arguments

```js
let myFunction = function (str, ...strs) {
  console.log("The first string is " + str);
  console.log("The rest of the strings are:");
  strs.forEach(function (str) {
    console.log(str);
  });
};
```

###

- Use `...spread` syntax for Object literals and Array literals

```js
let arr1 = ["a", "b", "c"];
let longer = [...arr1, "d", "e"]; // ["a", "b", "c", "d", "e"]
// without spread syntax, this would give you a nested array
let withoutRest = [arr1, "d", "e"]; // [["a", "b", "c"], "d", "e"]
```

- Destructure an array to reference specific elements

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

- Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

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
console.log(elementCounts(["e", "f", "g", "f"])); // => Object {e: 1, f: 2, g: 1}
```

### Callbacks Lesson Concepts

- Given multiple plausible reasons, identify why functions are called "First Class Objects" in JavaScript.
  - they can be stored in variables, passed as arguments to other functions, and serve as return value for a function
  - supports same basic operations as other types \(strings, bools, numbers\)
  - higher-order functions take functions as arguments or return functions as values
- Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed
  - what is this referring to?
- Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.

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


- Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#map`.

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

- Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`.

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

- Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.

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

### Scope Lesson Concepts

- Identify the difference between `const`, `let`, and `var` declarations
  - `const` - cannot reassign variable, scoped to block
  - `let` - can reassign variable, scoped to block
  - `var` - outdated, may or may not be reassigned, scoped to function. can be not just reassigned, but also redeclared!
  - a variable will always evaluate to the value it contains regardless of how it was declared
- Explain the difference between `const`, `let`, and `var` declarations
  - `var` is function scoped—so if you declare it anywhere in a function, the declaration \(but not assignment\) is "hoisted"
    - so it will exist in memory as "undefined" which is bad and unpredictable
  - `var` will also allow you to redeclare a variable, while `let` or `const` will raise a syntax error. you shouldn't be able to do that!
  - `const` won't let you reassign a variable, but if it points to a mutable object, you will still be able to change the value by mutating the object
  - block-scoped variables allow new variables with the same name in new scopes
  - block-scoped still performs hoisting of all variables within the block, but it doesn't initialize to the value of `undefined` like `var` does, so it throws a specific reference error if you try to access the value before it has been declared
  - if you do not use `var` or `let` or `const` when initializing, it will be declared as global—THIS IS BAD
    - if you assign a value without a declaration, it exists in the global scope \(so then it would be accessible by all outer scopes, so bad\). however, there's no hoisting, so it doesn't exist in the scope until after the line is run
- Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
  - scope of a program means the set of variables that are available for use within the program
  - global scope is represented by the `window` object in the browser and the `global` object in Node.js
    - global variables are available everywhere, and so increase the risk of name collisions
  - local scope is the set of variables available for use within the function
    - when we enter a function, we enter a new scope
    - includes functions arguments, local variables declared inside function, and any variables that were already declared when the function is defined \(hmm about that last one\)
  - for blocks \(denoted by curly braces `{}`, as in conditionals or `for` loops\), variables can be block scoped
  - inner scope does not have access to variables in the outer scope
    - scope chaining—if a given variable is not found in immediate scope, javascript will search all accessible outer scopes until variable is found
    - so an inner scope can access outer scope variables
    - but an outer scope can never access inner scope variables
- Define an arrow function

```js


    let arrowFunction = \(param1, param2\) =&gt; {
    let sum = param1 + param2;
    return sum;
    }
//  with 1 param you can remove parens around parameters let arrowFunction = param =&gt; { param += 1; return param; }
//  if your return statement is one line, you can use implied return let arrowFunction = param =&gt; param + 1;
> you don't have to assign to variable, can be anonymous // if you never need to use it again param =&gt; param + 1;

```

- Given an arrow function, deduce the value of `this` without executing the code
  - arrow functions are automatically bound to the context they were declared in
  - unlike regular function which use the context they are invoked in \(unless they have been bound using `Function#bind`\)
  - if you implement an arrow function as a method in an object the context it will be bound to is NOT the object itself, but the global context
  - so you can't use an arrow function to define a method directly

````js


        let obj = {
        name: "my object",
        unboundFunc: function \(\) {
        return this.name;
        // this function will be able to be called on different objects
        },
###
boundToGlobal: \(\) =&gt; { return this.name; // this function, no matter how you call it, will be called // on the global object, and it cannot be rebound // this is because it was defined using arrow syntax },

```js

makeFuncBoundToObj: function () {
    return () => {
        return this.name;
    }
    // this function will return a function that will be bound
    // to the object where we call the outer method
    // because the arrow syntax is nested inside one of this
    // function's methods, it cannot be rebound
},
makeUnboundFunc: function () {
    return function () {
        return this.name;
    }
    //this function will return a function that will still be unbound
},
immediatelyInvokedFunc: function () {
    return this.name;
}(), // this property will be set to the return value of this anonymous function,
> which is invoked during the object definition;
> basically, it's a way to check the context inside of an object, at this moment
innerObj: {
    name: "inner object",
    innerArrowFunc: () =>  {
        return this.name;
    } // the context inside a nested object is not the parent, it's still
    // the global object. entering an object definition doesn't change the context
},
let otherObj = { name: "my other object" }
//  call unboundFunc on obj, we get "my object" console.log("unboundFunc: ", obj.unboundFunc()); // => "my object" // assign unboundFunc to a variable and call it let newFunc = obj.unboundFunc; // this newFunc will default to being called on global object console.log("newFunc: ",newFunc()); // => undefined // but you could bind it directly to a different object if you wanted console.log("newFunc: ", newFunc.bind(otherObj)()); // "my other object"
> meanwhile, obj.boundToGlobal will only ever be called on global object console.log("boundToGlobal: ", obj.boundToGlobal()); //=> undefined let newBoundFunc = obj.boundToGlobal; console.log("newBoundFunc: ", newBoundFunc()); // => undefined // even if you try to directly bind to another object, it won't work! console.log("newBoundFunc: ", newBoundFunc.bind(otherObj)()); // => undefined
> let's make a new function that will always be bound to the context // where we call our function maker let boundFunc = obj.makeFuncBoundToObj();// note that we're invoking, not just assigning console.log("boundFunc: ", boundFunc()); // => "my object" // we can't rebind this function console.log("boundFunc: ", boundFunc.bind(otherObj)()) // =>"my object"
> but if I call makeFuncBoundToObj on another context // the new bound function is stuck with that other context let boundToOther = obj.makeFuncBoundToObj.bind(otherObj)(); console.log("boundToOther: ", boundToOther()); // => "my other object" console.log("boundToOther: ", boundToOther.bind(obj)()) // "my other object"
> the return value of my immediately invoked function // shows that the context inside of the object is the // global object, not the object itself // context only changes inside a function that is called // on an object console.log("immediatelyInvokedFunc: ", obj.immediatelyInvokedFunc); // => undefined
> even though we're inside a nested object, the context is // still the same as it was outside the outer object // in this case, the global object console.log("innerArrowFunc: ", obj.innerObj.innerArrowFunc()); // => undefined

````

}

````js


- Implement a closure and explain how the closure effects scope
   - a closure is "the combination of a function and the lexical environment within which that function was declared"
      - alternatively, "when an inner function uses or changes variables in an outer function"
   - closures have access to any variables within their own scope + scope of outer functions + global scope — the set of all these available variables is "lexical environemnt"
   - closure keeps reference to all variables **even if the outer function has returned**
      - each function has a private mutable state that cannot be accessed externally
      - the inner function will maintain a reference to the scope in which it was declared. so it has access to variables that were initialized in any outer scope—even if that scope
      - if a variable exists in the scope of what could have been accessed by a function (e.g. global scope, outer function, etc), does that variable wind up in the closure even if it never got accessed?
      - if you change the value of a variable (e.g. i++) you will change the value of that variable in the scope that it was declared in

```js

function createCounter() {
   // this function starts a counter at 0, then returns a
   // new function that can access and change that counter
   //
   // each new counter you create will have a single internal
   // state, that can be changed only by calling the function.
   // you can't access that state from outside of the function,
   // even though the count variable in question is initialized
   // by the outer function, and it remains accessible to the
   // inner function after the outer function returns.
   let count = 0;
   return function() {
      count ++;
      return count;
   }
}
let counter = createCounter();
console.log(counter()); //=> 1
console.log(counter()); //=> 2
> so the closure here comes into play because
> an inner function is accessing and changing
> a variable from an outer function
> the closure is the combination of the counter
> function and the all the variables that existed
> in the scope that it was declared in. because
> inner blocks/functions have access to outer
> scopes, that includes the scope of the outer
> function.
> so counter variable is a closure, in that
> it contains the inner count value that was
> initialized by the outer createCounter() function
> count has been captured or closed over
> this state is private, so if i run createCounter again
> i get a totally separate count that doesn't interact
> with the previous one and each of the new functions
> will have their own internal state based on the
> initial declaration in the now-closed outer function
let counter2 = createCounter();
console.log(counter2()); // => 1
> if i set a new function equal to my existing counter
> the internal state is shared with the new function
let counter3 = counter2;
console.log(counter3());

````

- Define a method that references `this` on an object literal
  - when we use `this` in a method it refers to the object that the method is invoked on
    - it will let you access other pieces of information from within that object, or even other methods
    - method style invocation - `object.method(args)` \(e.g. built in examples like `Array#push`, or `String#toUpperCase`\)
  - context is set every time we invoke a function
  - function style invocation sets the context to the global object no matter what
  - being inside an object does not make the context that object! you still have to use method-style invocation
- Utilize the built in `Function#bind` on a callback to maintain the context of this
  - when we call bind on a function, we get an exotic function back—so the context will always be the same for that new function

```

text
    let cat = {
    purr: function () {
    console.log("meow");
    },
    purrMore: function () {
    this.purr();
    },
    };
    let sayMeow = cat.purrMore; console.log(sayMeow()); // TypeError: this.purr is not a function
    // we can use the built in Function.bind to ensure our context, our this, // is the cat object let boundCat = sayMeow.bind(cat);
    boundCat(); // prints "meow"


```

    \`\`

###

###

````js


   - `bind` can also work with arguments, so you can have a version of a function with particular arguments and a particular context. the first arg will be the context aka the `this` you want it to use. the next arguments will be the functions arguments that you are binding
      - if you just want to bind it to those arguments in particular, you can use `null` as the first argument, so the context won't be bound, just the arguments
- Given a code snippet, identify what `this` refers to
   - important to recognize the difference between scope and context
      - scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope (which itself has pointers to new scopes until you reach the global scope. so you can think about a whole given block's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it)
      - context refers to the value of the `this` keyword
   - the keyword `this` exists in every function and it evaluates to the object that is currently invoking that function
   - so the context is fairly straightforward when we talk about methods being called on specific objects
   - you could, however, call an object's method on something other than that object, and then this would refer to the context where/how it was called, e.g.

```js

let dog = {
   name: "Bowser",
   changeName: function () {
      this.name = "Layla";
  },
};
> note this is **not invoked** - we are assigning the function itself
let change = dog.changeName;
console.log(change()); // undefined
> our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }
//  instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}

````

- CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!
  - could throw an error if it expects this to have some other method or whatever that doesn't exist
  - you could also overwrite values or assign values to exist in a space where they should not exist
- if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object

```

text
    let cat = {
    purr: function () {
    console.log("meow");
    },
    purrMore: function () {
    this.purr();
    },
    };
    global.setTimeout(cat.purrMore, 5000); // 5 seconds later: TypeError: this.purr is not a function


```

we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined

###

let sayMeow = cat.purrMore; console.log\(sayMeow\(\)\); // TypeError: this.purr is not a function

> we can use the built in Function.bind to ensure our context, our `this`, // is the cat object let boundCat = sayMeow.bind\(cat\);
> boundCat\(\); // prints "meow"

````
text
   - `bind` can also work with arguments, so you can have a version of a function with particular arguments and a particular context. the first arg will be the context aka the `this` you want it to use. the next arguments will be the functions arguments that you are binding
      - if you just want to bind it to those arguments in particular, you can use `null` as the first argument, so the context won't be bound, just the arguments
- Given a code snippet, identify what `this` refers to
   - important to recognize the difference between scope and context
      - scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope (which itself has pointers to new scopes until you reach the global scope. so you can think about a whole given block's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it)
      - context refers to the value of the `this` keyword
   - the keyword `this` exists in every function and it evaluates to the object that is currently invoking that function
   - so the context is fairly straightforward when we talk about methods being called on specific objects
   - you could, however, call an object's method on something other than that object, and then this would refer to the context where/how it was called, e.g.

```js

let dog = {
   name: "Bowser",
   changeName: function () {
      this.name = "Layla";
  },
};
> note this is **not invoked** - we are assigning the function itself
let change = dog.changeName;
console.log(change()); // undefined
> our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }
//  instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}

````

- CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!
  - could throw an error if it expects this to have some other method or whatever that doesn't exist
  - you could also overwrite values or assign values to exist in a space where they should not exist
- if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object

```js


    let cat = {
    purr: function \(\) {
    console.log\("meow"\);
    },
    purrMore: function \(\) {
    this.purr\(\);
    },
    };
global.setTimeout\(cat.purrMore, 5000\); // 5 seconds later: TypeError: this.purr is not a function

```

- we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined

### POJOs

#### 1. Label variables as either Primitive vs. Reference

Javascript considers most data types to be 'primitive', these data types are immutable, and are passed by value. The more complex data types: Array and Object are mutable, are considered 'reference' data types, and are passed by reference.

- Boolean - Primitive
- Null - Primitive
- Undefined - Primitive
- Number - Primitive
- String - Primitive
- Array - Reference
- Object - Reference
- Function - Reference

#### 2. Identify when to use . vs \[\] when accessing values of an object

```js

let obj = { one: 1, two: 2 };
> Choose the square brackets property accessor when the property name is determined at
> runtime, or if the property name is not a valid identifier
let myKey = 'one';
console.log(obj[myKey]);
> Choose the dot property accessor when the property name is known ahead of time.
console.log(obj.two);

```

#### 3. Write an object literal with a variable key using interpolation

```js

let keyName = 'two';
> If the key is not known, you can use an alternative `[]` syntax for
> object initialization only
let obj2 = { [keyName]: 2 };
console.log(obj2);

```

#### 4. Use the obj\[key\] !== undefined pattern to check if a given variable that contains a key exists in an object

```js
function doesKeyExist(obj, key) {
  // obj[key] !== undefined
  // or:
  return key in obj;
}
let course = { bootcamp: "Lambda", course: "Bootcamp Prep" };
console.log(doesKeyExist(course, "course")); // => true
console.log(doesKeyExist(course, "name")); // => false
```

#### 5. Utilize Object.keys and Object.values in a function

```js
function printKeys(object) {
  return Object.keys(object);
}
function printValues(object) {
  return Object.values(object);
}
console.log(printKeys({ dog: "Strelka", dog2: "Belka" }));
console.log(printValues({ dog: "Strelka", dog2: "Belka" }));
```

#### 6. Iterate through an object using a for in loop

```js
let player = { name: "Sergey", skill: "hockey" };
for (let key in player) {
  console.log(key, player[key]);
}
console.log(Object.entries(player));
```

#### 7. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

```js
function restSum(...otherNums) {
  let sum = 0;
  console.log(otherNums);
  otherNums.forEach(function (num) {
    sum += num;
  });
  return sum;
}
console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0
```

#### 8. Use ...spread syntax for Object literals and Array literals

```js
let numArray = [1, 2, 3];
let moreNums = [...numArray, 4, 5, 6];
console.log(moreNums);
let shoe = { color: "red", size: 10 };
let newShoe = { ...shoe, brand: "Nike", size: 12 };
console.log(newShoe);
newShoe.color = "black";
console.log(newShoe);
console.log(shoe);
```

#### 9. Destructure an array to reference specific elements

```js
let arr = ["one", "two", "three"];
let [first] = arr;
console.log(first);
```

#### 10. Destructure an object to reference specific values

```js
let me = {
  name: "Ian",
  instruments: ["bass", "synth", "guitar"],
  siblings: {
    brothers: ["Alistair"],
    sisters: ["Meghan"],
  },
};
let {
  name,
  instruments: musical_instruments,
  siblings: { sisters },
} = me;
console.log(name);
console.log(musical_instruments);
console.log(sisters);
```

#### 11. Write a function that accepts a string as an argument and returns an object representing the count of each character in the array

```js
function charCount(inputString) {
  let res = inputString.split("").reduce(function (accum, el) {
    if (el in accum) {
      accum[el] = accum[el] + 1;
    } else {
      accum[el] = 1;
    }
    return accum;
  }, {});
  return res;
}
console.log(charCount("aaabbbeebbcdkjfalksdfjlkasdfasdfiiidkkdingds"));
```

###

### Review of Concepts

#### 1. Identify the difference between const, let, and var declarations

#### 2. Explain the difference between const, let, and var declarations

```js
var a = "a";
```

- `var` is the historical keyword used for variable declaration.
- `var` declares variables in function scope, or global scope if not inside a function.
- We consider `var` to be _deprecated_ and it is never used in this course.

```js
let b = "b";
```

- `let` is the keyword we use most often for variable declaration.
- `let` declares variables in block scope.
- variables declared with `let` are re-assignable.

```js
const c = "c";
```

- `const` is a specialized form of `let` that can only be used to **initialize** a variable.
- Except when it is declared, you cannot assign to a `const` variable.
- `const` scopes variables the same way that `let` does.

#### 3. Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining

Consider this `run` function, inside which `foo` and `bar` have `function scope`. `i` and `baz` are scoped to the block expression.

```js

> function and block scope in this example
function run() {
    var foo = 'Foo';
    let bar = 'Bar';
    console.log(foo, bar);
    {
        console.log(foo);
        let baz = 'Bazz';
        console.log(baz);
    }
    console.log(baz); // ReferenceError
}
run();

```

Notice that referencing `baz` from outside it's block results in JavaScript throwing a ReferenceError.
Consider this `run` function, inside of which `foo` has `function scope`.

```js
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}
run();
```

Consider this `func1` function and it's nested scopes.

```js

> global scope
function func1(arg1) {
    // func1 scope
    return function func2(arg2) {
        // func2 scope
        return function func3(arg3) {
            // func3 scope
            console.log(arg1, arg2, arg3);
        };
    };
}

```

#### 6. Implement a closure and explain how the closure effects scope

```js
const adder = (arg1) => {
  return (arg2) => {
    return arg1 + arg2;
  };
};
const func2 = adder(2);
const result = func2(2);
console.log(result); // => 4;
```

#### 4. Define an arrow function

```js
const returnValue = (val) => val;
```

This simple construct will create a function that accepts `val` as a parameter, and returns `val` immediately. We do not need to type `return val`, because this is a single-line function.
Identically, we could write

```js
const returnValue = (val) => {
  return val;
};
```

#### 5. Given an arrow function, deduce the value of `this` without executing the code

```js
function fDAdder(arr) {
  console.log(this);
  return arr.reduce((acc, ele) => {
    return acc + ele;
  });
}
fDAdder([1, 2, 4, 6]);
```

If we use a _function declaration_ style function, the `this` variable is set to the `global` object \(i.e. `Object [global]` in Node.JS and `Window` in your browser\).

```js
const adder = (arr) => {
  console.log(this);
  arr.reduce((acc, ele) => (sum += ele));
};
adder([1, 2, 4, 6]);
```

In this example, we use a _fat arrow_ style function. Note that when we declare a funciton like this `this` becomes

#### 7. Define a method that references this on an object literal

```js
const pokemon = {
  firstname: "Pika",
  lastname: "Chu",
  getPokeName: function () {
    const fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  },
};
console.log(pokemon.getPokeName());
```

#### 8. Utilize the built in Function\#bind on a callback to maintain the context of `this`

```js
const pokemon = {
  firstname: "Pika",
  lastname: "Chu",
  getPokeName: function () {
    const fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  },
};
const logPokemon = pokemon.getPokename.bind(pokemon);
logPokemon("sushi", "algorithms"); // Pika Chu loves sushi and algorithms
```

#### 9. Given a code snippet, identify what `this` refers to

```js
function Person(name) {
  // this.name = name;
  // let that = this;
  setTimeout(function () {
    // console.log(this); // => Window
    // console.log(that); // => [Function] => Person
    // this.sayName(); // => no method error
    that.sayName();
  }, 1000);
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
const jane = new Person("Jane");
```





---
---



# Data Structures Review:




## Data Structure Basics

### **Array**
#### Definition:
- Stores data elements based on an sequential, most commonly 0 based, index.
- Based on [tuples](http://en.wikipedia.org/wiki/Tuple) from set theory.
- They are one of the oldest, most commonly used data structures.

#### What you need to know:
- Optimal for indexing; bad at searching, inserting, and deleting (except at the end).
- **Linear arrays**, or one dimensional arrays, are the most basic.
  - Are static in size, meaning that they are declared with a fixed size.
- **Dynamic arrays** are like one dimensional arrays, but have reserved space for additional elements.
  - If a dynamic array is full, it copies its contents to a larger array.
- **Multi dimensional arrays** nested arrays that allow for multiple dimensions such as an array of arrays providing a 2 dimensional spacial representation via x, y coordinates.

#### Time Complexity:
- Indexing:         Linear array: O(1),      Dynamic array: O(1)
- Search:           Linear array: O(n),      Dynamic array: O(n)
- Optimized Search: Linear array: O(log n), Dynamic array: O(log n)
- Insertion:        Linear array: n/a        Dynamic array: O(n)


### **Linked List**
#### Definition:
- Stores data with **nodes** that point to other nodes.
  - Nodes, at its most basic it has one datum and one reference (another node).
  - A linked list _chains_ nodes together by pointing one node's reference towards another node.

#### What you need to know:
- Designed to optimize insertion and deletion, slow at indexing and searching.
- **Doubly linked list** has nodes that also reference the previous node.
- **Circularly linked list** is simple linked list whose **tail**, the last node, references the **head**, the first node.
- **Stack**, commonly implemented with linked lists but can be made from arrays too.
  - Stacks are **last in, first out** (LIFO) data structures.
  - Made with a linked list by having the head be the only place for insertion and removal.
- **Queues**, too can be implemented with a linked list or an array.
  - Queues are a **first in, first out** (FIFO) data structure.
  - Made with a doubly linked list that only removes from head and adds to tail.

#### Time Complexity:
- Indexing:         Linked Lists: O(n)
- Search:           Linked Lists: O(n)
- Optimized Search: Linked Lists: O(n)
- Insertion:        Linked Lists: O(1)


### **Hash Table or Hash Map**
#### Definition:
- Stores data with key value pairs.
- **Hash functions** accept a key and return an output unique only to that specific key.
  - This is known as **hashing**, which is the concept that an input and an output have a one-to-one correspondence to map information.
  - Hash functions return a unique address in memory for that data.

#### What you need to know:
- Designed to optimize searching, insertion, and deletion.
- **Hash collisions** are when a hash function returns the same output for two distinct inputs.
  - All hash functions have this problem.
  - This is often accommodated for by having the hash tables be very large.
- Hashes are important for associative arrays and database indexing.

#### Time Complexity:
- Indexing:         Hash Tables: O(1)
- Search:           Hash Tables: O(1)
- Insertion:        Hash Tables: O(1)


### **Binary Tree**
#### Definition:
- Is a tree like data structure where every node has at most two children.
  - There is one left and right child node.

#### What you need to know:
- Designed to optimize searching and sorting.
- A **degenerate tree** is an unbalanced tree, which if entirely one-sided is a essentially a linked list.
- They are comparably simple to implement than other data structures.
- Used to make **binary search trees**.
  - A binary tree that uses comparable keys to assign which direction a child is.
  - Left child has a key smaller than it's parent node.
  - Right child has a key greater than it's parent node.
  - There can be no duplicate node.
  - Because of the above it is more likely to be used as a data structure than a binary tree.

#### Time Complexity:
- Indexing:  Binary Search Tree: O(log n)
- Search:    Binary Search Tree: O(log n)
- Insertion: Binary Search Tree: O(log n)


## Search Basics
### **Breadth First Search**
#### Definition:
- An algorithm that searches a tree (or graph) by searching levels of the tree first, starting at the root.
  - It finds every node on the same level, most often moving left to right.
  - While doing this it tracks the children nodes of the nodes on the current level.
  - When finished examining a level it moves to the left most node on the next level.
  - The bottom-right most node is evaluated last (the node that is deepest and is farthest right of it's level).

#### What you need to know:
- Optimal for searching a tree that is wider than it is deep.
- Uses a queue to store information about the tree while it traverses a tree.
  - Because it uses a queue it is more memory intensive than **depth first search**.
  - The queue uses more memory because it needs to stores pointers

#### Time Complexity:
- Search: Breadth First Search: O(V + E)
- E is number of edges
- V is number of vertices

### **Depth First Search**
#### Definition:
- An algorithm that searches a tree (or graph) by searching depth of the tree first, starting at the root.
  - It traverses left down a tree until it cannot go further.
  - Once it reaches the end of a branch it traverses back up trying the right child of nodes on that branch, and if possible left from the right children.
  - When finished examining a branch it moves to the node right of the root then tries to go left on all it's children until it reaches the bottom.
  - The right most node is evaluated last (the node that is right of all it's ancestors).

#### What you need to know:
- Optimal for searching a tree that is deeper than it is wide.
- Uses a stack to push nodes onto.
  - Because a stack is LIFO it does not need to keep track of the nodes pointers and is therefore less memory intensive than breadth first search.
  - Once it cannot go further left it begins evaluating the stack.

#### Time Complexity:
- Search: Depth First Search: O(|E| + |V|)
- E is number of edges
- V is number of vertices


#### Breadth First Search Vs. Depth First Search
- The simple answer to this question is that it depends on the size and shape of the tree.
  - For wide, shallow trees use Breadth First Search
  - For deep, narrow trees use Depth First Search

#### Nuances:
  - Because BFS uses queues to store information about the nodes and its children, it could use more memory than is available on your computer. (But you probably won't have to worry about this.)
  - If using a DFS on a tree that is very deep you might go unnecessarily deep in the search. See [xkcd](http://xkcd.com/761/) for more information.
  - Breadth First Search tends to be a looping algorithm.
  - Depth First Search tends to be a recursive algorithm.


## Efficient Sorting Basics
### **Merge Sort**
#### Definition:
- A comparison based sorting algorithm
  - Divides entire dataset into groups of at most two.
  - Compares each number one at a time, moving the smallest number to left of the pair.
  - Once all pairs sorted it then compares left most elements of the two leftmost pairs creating a sorted group of four with the smallest numbers on the left and the largest ones on the right.
  - This process is repeated until there is only one set.

#### What you need to know:
- This is one of the most basic sorting algorithms.
- Know that it divides all the data into as small possible sets then compares them.

#### Time Complexity:
- Best Case Sort: Merge Sort: O(n)
- Average Case Sort: Merge Sort: O(n log n)
- Worst Case Sort: Merge Sort: O(n log n)

### **Quicksort**
#### Definition:
- A comparison based sorting algorithm
  - Divides entire dataset in half by selecting the middle element and putting all smaller elements to the left of the element and larger ones to the right.
  - It repeats this process on the left side until it is comparing only two elements at which point the left side is sorted.
  - When the left side is finished sorting it performs the same operation on the right side.
- Computer architecture favors the quicksort process.

#### What you need to know:
- While it has the same Big O as (or worse in some cases) many other sorting algorithms it is often faster in practice than many other sorting algorithms, such as merge sort.
- Know that it halves the data set by the average continuously until all the information is sorted.

#### Time Complexity:
- Best Case Sort: Merge Sort: O(n)
- Average Case Sort: Merge Sort: O(n log n)
- Worst Case Sort: Merge Sort: O(n^2)

### **Bubble Sort**
#### Definition:
- A comparison based sorting algorithm
  - It iterates left to right comparing every couplet, moving the smaller element to the left.
  - It repeats this process until it no longer moves an element to the left.

#### What you need to know:
- While it is very simple to implement, it is the least efficient of these three sorting methods.
- Know that it moves one space to the right comparing two elements at a time and moving the smaller on to left.

#### Time Complexity:
- Best Case Sort: Merge Sort: O(n)
- Average Case Sort: Merge Sort: O(n^2)
- Worst Case Sort: Merge Sort: O(n^2)

#### Merge Sort Vs. Quicksort
- Quicksort is likely faster in practice.
- Merge Sort divides the set into the smallest possible groups immediately then reconstructs the incrementally as it sorts the groupings.
- Quicksort continually divides the set by the average, until the set is recursively sorted.

## Basic Types of Algorithms
### **Recursive Algorithms**
#### Definition:
- An algorithm that calls itself in its definition.
  - **Recursive case** a conditional statement that is used to trigger the recursion.
  - **Base case** a conditional statement that is used to break the recursion.

#### What you need to know:
- **Stack level too deep** and **stack overflow**.
  - If you've seen either of these from a recursive algorithm, you messed up.
  - It means that your base case was never triggered because it was faulty or the problem was so massive you ran out of alloted memory.
  - Knowing whether or not you will reach a base case is integral to correctly using recursion.
  - Often used in Depth First Search


### **Iterative Algorithms**
#### Definition:
- An algorithm that is called repeatedly but for a finite number of times, each time being a single iteration.
  - Often used to move incrementally through a data set.

#### What you need to know:
- Generally you will see iteration as loops, for, while, and until statements.
- Think of iteration as moving one at a time through a set.
- Often used to move through an array.

#### Recursion Vs. Iteration
- The differences between recursion and iteration can be confusing to distinguish since both can be used to implement the other. But know that,
  - Recursion is, usually, more expressive and easier to implement.
  - Iteration uses less memory.
- **Functional languages** tend to use recursion. (i.e. Haskell)
- **Imperative languages** tend to use iteration. (i.e. Ruby)
- Check out this [Stack Overflow post](http://stackoverflow.com/questions/19794739/what-is-the-difference-between-iteration-and-recursion) for more info.

#### Pseudo Code of Moving Through an Array (this is why iteration is used for this)
```
Recursion                         | Iteration
----------------------------------|----------------------------------
recursive method (array, n)       | iterative method (array)
  if array[n] is not nil          |   for n from 0 to size of array
    print array[n]                |     print(array[n])
    recursive method(array, n+1)  |
  else                            |
    exit loop                     |
```
### **Greedy Algorithm**
#### Definition:
- An algorithm that, while executing, selects only the information that meets a certain criteria.
- The general five components, taken from [Wikipedia](http://en.wikipedia.org/wiki/Greedy_algorithm#Specifics):
  - A candidate set, from which a solution is created.
  - A selection function, which chooses the best candidate to be added to the solution.
  - A feasibility function, that is used to determine if a candidate can be used to contribute to a solution.
  - An objective function, which assigns a value to a solution, or a partial solution.
  - A solution function, which will indicate when we have discovered a complete solution.

#### What you need to know:
- Used to find the expedient, though non-optimal, solution for a given problem.
- Generally used on sets of data where only a small proportion of the information evaluated meets the desired result.
- Often a greedy algorithm can help reduce the Big O of an algorithm.

#### Pseudo Code of a Greedy Algorithm to Find Largest Difference of any Two Numbers in an Array.
```
greedy algorithm (array)
  var largest difference = 0
  var new difference = find next difference (array[n], array[n+1])
  largest difference = new difference if new difference is > largest difference
  repeat above two steps until all differences have been found
  return largest difference
```

This algorithm never needed to compare all the differences to one another, saving it an entire iteration.