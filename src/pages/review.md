---
title: review
sections: []
seo:
  title: ''
  description: ''
  robots: []
  extra: []
  type: stackbit_page_meta
template: advanced
---


---
description: Review
---

# Review-Of-Previous-Concepts

### Review of Concepts

### Running JS Locally  Concepts

* Match the commands `ls`, `cd`, `pwd` to their descriptions
  * `ls` lists contents of current directory
  * `cd` changes current directory
    * `cd ..` takes you up one level
    * `cd` alone takes you back home
  * `pwd` returns current directory
* Given a folder structure diagram, a list of 'cd \(path\)' commands and target files, match the paths to the target files.
* Use VSCode to create a folder. Within the folder create a .js file containing `console.log('hello new world');` and save it.
* Use node to execute a JavaScript file in the terminal

### Plain Old JS Object Lesson Concepts

* Label variables as either Primitive vs. Reference
  * primitives: strings, booleans, numbers, null and undefined
    * primitives are immutable
  * refereces: objects \(including arrays\)
    * references are mutable
* Identify when to use `.` vs `[]` when accessing values of an object
  * dot syntax `object.key`
    * easier to read
    * easier to write
    * cannot use variables as keys
    * keys cannot begin with a number
  * bracket notation `object["key]`
    * allows variables as keys
    * strings that start with numbers can be use as keys
* Write an object literal with a variable key using interpolation
  * put it in brackets to access the value of the variable, rather than just make the value that string

    ```javascript
    let a = "b";
    let obj = {a: "letter_a", [a]: "letter b"}
    ```
* Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object
  * can also use `(key in object)` syntax interchangeably \(returns a boolean\)
* Utilize Object.keys and Object.values in a function
  * `Object.keys(obj)` returns an array of all the keys in `obj`
  * `Object.values(obj)` returns an array of the values in `obj`
* Iterate through an object using a `for in` loop

  ```javascript
  let printValues = function(obj) {
   for (let key in obj) {
      let value = obj[key];
      console.log(value);
   }
  }
  ```

* Define a function that utilizes `...rest` syntax to accept an arbitrary number of arguments
  * `...rest` syntax will store all additional arguments in an array
  * array will be empty if there are no additional arguments

    ```javascript
    let myFunction = function(str, ...strs) {
    console.log("The first string is " + str);
    console.log("The rest of the strings are:");
    strs.forEach(function(str) {
     console.log(str);
    })
    }
    ```

### 

* Use `...spread` syntax for Object literals and Array literals

  ```javascript
  let arr1 = ["a","b","c"];
  let longer = [...arr1, "d", "e"]; // ["a", "b", "c", "d", "e"]
  // without spread syntax, this would give you a nested array
  let withoutRest = [arr1, "d", "e"] // [["a", "b", "c"], "d", "e"]
  ```

* Destructure an array to reference specific elements

  \`\`\`javascript

  let array = \[35,9\];

  let \[firstEl, secondEl\] = array;

  console.log\(firstEl\); // =&gt; 35

  console.log\(secondEl\); // =&gt; 9

// can also destructure using ... syntax let array = \[35,9,14\]; let \[head, ...tail\] = array; console.log\(head\); // =&gt; 35 console.log\(tail\); // =&gt; \[9, 14\]

```javascript
- Destructure an object to reference specific values
   - if you want to use variable names that don't match the keys, you can use aliasing
      - `let { oldkeyname: newkeyname } = object`
   - rule of thumb—only destructure values from objects that are two levels deep
```javascript
let obj = {
   name: "Wilfred",
   appearance: ["short", "mustache"],
   favorites: {
      color: "mauve",
      food: "spaghetti squash",
      number: 3
   }
}
// with variable names that match keys
let { name, appearance } = obj;
console.log(name); // "Wilfred"
console.log(appearance); // ["short", "mustache"]

// with new variable names (aliasing)
let {name: myName, appearance: myAppearance} = obj;

console.log(myName); // "Wilfred"
console.log(myAppearance); // ["short", "mustache"]

// in a function call
let sayHello = function({name}) {
console.log("Hello, " + name); // "Hello Wilfred"
}

// nested objects + aliasing
let { favorites: {color, food: vegetable} } = obj;
console.log(color, vegetable); //=> mauve spaghetti squash
```

* Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

  ```javascript
  //
  let elementCounts = function(array) {
    let obj = {};
    array.forEach( function(el) {
        if (el in obj) obj[el] += 1;
        else obj[el] = 1;
    })
    return obj;
  }
  console.log(elementCounts(["e", "f", "g", "f"])); // => Object {e: 1, f: 2, g: 1}
  ```

### Callbacks Lesson Concepts

* Given multiple plausible reasons, identify why functions are called "First Class Objects" in JavaScript.
  * they can be stored in variables, passed as arguments to other functions, and serve as return value for a function
  * supports same basic operations as other types \(strings, bools, numbers\)
  * higher-order functions take functions as arguments or return functions as values
* Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed
  * what is this referring to?
* Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.

```javascript
let greaterCB = function(val, callback1, callback2) {
 if (callback1(val) > callback2(val)) {
return callback1(val);
 }
 return callback2(val);
}



let greaterCB = function(val, callback1, callback2) {
 if (callback1(val) > callback2(val)) {
return callback1(val);
 }
 return callback2(val);
}
```



// shorter version let greaterCB = function\(val, callback1, callback2\) { return Math.max\(callback1\(val\), callback2\(val\)\); } // even shorter, cause why not let greaterCB = \(val, cb1, cb2\) =&gt; Math.max\(cb1\(val\), cb2\(val\)\);

```javascript
- Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#map`.
```javascript
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
```

* Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`.

  ```javascript
  let myFilter = function(array, callback) {
   let filtered = [];
   for (let i = 0; i < array.length; i ++) {
      if (callback(array[i])) {
         filtered.push(array[i], i, array);
      }
   }
  }
  ```

* Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.

  ```javascript
  let myEvery = function(array, callback) {
   for (let i = 0; i < array.length; i ++) {
      if (!callback(array[i], i, array)) {
         return false
      }
   }
   return true;
  }
  // with arrow function syntax
  let myEvery = (array, callback) => {
   for (let i =0; i < array.length; i ++) {
      if (!callback(array[i])) {
         return false
      }
   }
   return true;
  }
  ```

### Scope Lesson Concepts

* Identify the difference between `const`, `let`, and `var` declarations
  * `const` - cannot reassign variable, scoped to block
  * `let` - can reassign variable, scoped to block
  * `var` - outdated, may or may not be reassigned, scoped to function. can be not just reassigned, but also redeclared!
  * a variable will always evaluate to the value it contains regardless of how it was declared
* Explain the difference between `const`, `let`, and `var` declarations
  * `var` is function scoped—so if you declare it anywhere in a function, the declaration \(but not assignment\) is "hoisted"
    * so it will exist in memory as "undefined" which is bad and unpredictable
  * `var` will also allow you to redeclare a variable, while `let` or `const` will raise a syntax error. you shouldn't be able to do that!
  * `const` won't let you reassign a variable, but if it points to a mutable object, you will still be able to change the value by mutating the object
  * block-scoped variables allow new variables with the same name in new scopes
  * block-scoped still performs hoisting of all variables within the block, but it doesn't initialize to the value of `undefined` like `var` does, so it throws a specific reference error if you try to access the value before it has been declared
  * if you do not use `var` or `let` or `const` when initializing, it will be declared as global—THIS IS BAD
    * if you assign a value without a declaration, it exists in the global scope \(so then it would be accessible by all outer scopes, so bad\). however, there's no hoisting, so it doesn't exist in the scope until after the line is run
* Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
  * scope of a program means the set of variables that are available for use within the program
  * global scope is represented by the `window` object in the browser and the `global` object in Node.js
    * global variables are available everywhere, and so increase the risk of name collisions
  * local scope is the set of variables available for use within the function
    * when we enter a function, we enter a new scope
    * includes functions arguments, local variables declared inside function, and any variables that were already declared when the function is defined \(hmm about that last one\)
  * for blocks \(denoted by curly braces `{}`, as in conditionals or `for` loops\), variables can be block scoped
  * inner scope does not have access to variables in the outer scope
    * scope chaining—if a given variable is not found in immediate scope, javascript will search all accessible outer scopes until variable is found
    * so an inner scope can access outer scope variables
    * but an outer scope can never access inner scope variables
* Define an arrow function

  \`\`\`javascript

  let arrowFunction = \(param1, param2\) =&gt; {

   let sum = param1 + param2;

   return sum;

  }

// with 1 param you can remove parens around parameters let arrowFunction = param =&gt; { param += 1; return param; }

// if your return statement is one line, you can use implied return let arrowFunction = param =&gt; param + 1;

// you don't have to assign to variable, can be anonymous // if you never need to use it again param =&gt; param + 1;

\`\`\`

* Given an arrow function, deduce the value of `this` without executing the code
  * arrow functions are automatically bound to the context they were declared in
  * unlike regular function which use the context they are invoked in \(unless they have been bound using `Function#bind`\)
  * if you implement an arrow function as a method in an object the context it will be bound to is NOT the object itself, but the global context
  * so you can't use an arrow function to define a method directly

    \`\`\`javascript

    let obj = {

    name: "my object",

    unboundFunc: function \(\) {

       return this.name;

       // this function will be able to be called on different objects

    },

### 

boundToGlobal: \(\) =&gt; { return this.name; // this function, no matter how you call it, will be called // on the global object, and it cannot be rebound // this is because it was defined using arrow syntax },

```javascript
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
// which is invoked during the object definition;
// basically, it's a way to check the context inside of an object, at this moment

innerObj: {
    name: "inner object",
    innerArrowFunc: () =>  {
        return this.name;
    } // the context inside a nested object is not the parent, it's still
    // the global object. entering an object definition doesn't change the context
},


let otherObj = { name: "my other object" }
// call unboundFunc on obj, we get "my object" console.log("unboundFunc: ", obj.unboundFunc()); // => "my object" // assign unboundFunc to a variable and call it let newFunc = obj.unboundFunc; // this newFunc will default to being called on global object console.log("newFunc: ",newFunc()); // => undefined // but you could bind it directly to a different object if you wanted console.log("newFunc: ", newFunc.bind(otherObj)()); // "my other object"
// meanwhile, obj.boundToGlobal will only ever be called on global object console.log("boundToGlobal: ", obj.boundToGlobal()); //=> undefined let newBoundFunc = obj.boundToGlobal; console.log("newBoundFunc: ", newBoundFunc()); // => undefined // even if you try to directly bind to another object, it won't work! console.log("newBoundFunc: ", newBoundFunc.bind(otherObj)()); // => undefined
// let's make a new function that will always be bound to the context // where we call our function maker let boundFunc = obj.makeFuncBoundToObj();// note that we're invoking, not just assigning console.log("boundFunc: ", boundFunc()); // => "my object" // we can't rebind this function console.log("boundFunc: ", boundFunc.bind(otherObj)()) // =>"my object"
// but if I call makeFuncBoundToObj on another context // the new bound function is stuck with that other context let boundToOther = obj.makeFuncBoundToObj.bind(otherObj)(); console.log("boundToOther: ", boundToOther()); // => "my other object" console.log("boundToOther: ", boundToOther.bind(obj)()) // "my other object"
// the return value of my immediately invoked function // shows that the context inside of the object is the // global object, not the object itself // context only changes inside a function that is called // on an object console.log("immediatelyInvokedFunc: ", obj.immediatelyInvokedFunc); // => undefined
// even though we're inside a nested object, the context is // still the same as it was outside the outer object // in this case, the global object console.log("innerArrowFunc: ", obj.innerObj.innerArrowFunc()); // => undefined
```

}



```javascript
- Implement a closure and explain how the closure effects scope
   - a closure is "the combination of a function and the lexical environment within which that function was declared"
      - alternatively, "when an inner function uses or changes variables in an outer function"
   - closures have access to any variables within their own scope + scope of outer functions + global scope — the set of all these available variables is "lexical environemnt"
   - closure keeps reference to all variables **even if the outer function has returned**
      - each function has a private mutable state that cannot be accessed externally
      - the inner function will maintain a reference to the scope in which it was declared. so it has access to variables that were initialized in any outer scope—even if that scope
      - if a variable exists in the scope of what could have been accessed by a function (e.g. global scope, outer function, etc), does that variable wind up in the closure even if it never got accessed?
      - if you change the value of a variable (e.g. i++) you will change the value of that variable in the scope that it was declared in


```javascript
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
// so the closure here comes into play because
// an inner function is accessing and changing
// a variable from an outer function

// the closure is the combination of the counter
// function and the all the variables that existed
// in the scope that it was declared in. because
// inner blocks/functions have access to outer
// scopes, that includes the scope of the outer
// function.

// so counter variable is a closure, in that
// it contains the inner count value that was
// initialized by the outer createCounter() function
// count has been captured or closed over

// this state is private, so if i run createCounter again
// i get a totally separate count that doesn't interact
// with the previous one and each of the new functions
// will have their own internal state based on the
// initial declaration in the now-closed outer function

let counter2 = createCounter();
console.log(counter2()); // => 1

// if i set a new function equal to my existing counter
// the internal state is shared with the new function
let counter3 = counter2;
console.log(counter3());
```

* Define a method that references `this` on an object literal
  * when we use `this` in a method it refers to the object that the method is invoked on
    * it will let you access other pieces of information from within that object, or even other methods
    * method style invocation -  `object.method(args)` \(e.g. built in examples like `Array#push`, or `String#toUpperCase`\)
  * context is set every time we invoke a function
  * function style invocation sets the context to the global object no matter what
  * being inside an object does not make the context that object! you still have to use method-style invocation
* Utilize the built in `Function#bind` on a callback to maintain the context of this

  * when we call bind on a function, we get an exotic function back—so the context will always be the same for that new function



  ```text
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

```javascript
   - `bind` can also work with arguments, so you can have a version of a function with particular arguments and a particular context. the first arg will be the context aka the `this` you want it to use. the next arguments will be the functions arguments that you are binding
      - if you just want to bind it to those arguments in particular, you can use `null` as the first argument, so the context won't be bound, just the arguments
- Given a code snippet, identify what `this` refers to
   - important to recognize the difference between scope and context
      - scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope (which itself has pointers to new scopes until you reach the global scope. so you can think about a whole given block's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it)
      - context refers to the value of the `this` keyword
   - the keyword `this` exists in every function and it evaluates to the object that is currently invoking that function
   - so the context is fairly straightforward when we talk about methods being called on specific objects
   - you could, however, call an object's method on something other than that object, and then this would refer to the context where/how it was called, e.g.
```javascript
let dog = {
   name: "Bowser",
   changeName: function () {
      this.name = "Layla";
  },
};

// note this is **not invoked** - we are assigning the function itself
let change = dog.changeName;
console.log(change()); // undefined

// our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

// instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```

* CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!
  * could throw an error if it expects this to have some other method or whatever that doesn't exist
  * you could also overwrite values or assign values to exist in a space where they should not exist
* if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object

  ```text
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

// we can use the built in Function.bind to ensure our context, our `this`, // is the cat object let boundCat = sayMeow.bind\(cat\);

boundCat\(\); // prints "meow"

```text
   - `bind` can also work with arguments, so you can have a version of a function with particular arguments and a particular context. the first arg will be the context aka the `this` you want it to use. the next arguments will be the functions arguments that you are binding
      - if you just want to bind it to those arguments in particular, you can use `null` as the first argument, so the context won't be bound, just the arguments
- Given a code snippet, identify what `this` refers to
   - important to recognize the difference between scope and context
      - scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope (which itself has pointers to new scopes until you reach the global scope. so you can think about a whole given block's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it)
      - context refers to the value of the `this` keyword
   - the keyword `this` exists in every function and it evaluates to the object that is currently invoking that function
   - so the context is fairly straightforward when we talk about methods being called on specific objects
   - you could, however, call an object's method on something other than that object, and then this would refer to the context where/how it was called, e.g.
```javascript
let dog = {
   name: "Bowser",
   changeName: function () {
      this.name = "Layla";
  },
};

// note this is **not invoked** - we are assigning the function itself
let change = dog.changeName;
console.log(change()); // undefined

// our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

// instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```

* CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!
  * could throw an error if it expects this to have some other method or whatever that doesn't exist
  * you could also overwrite values or assign values to exist in a space where they should not exist
* if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object

  \`\`\`javascript

  let cat = {

  purr: function \(\) {

  console.log\("meow"\);

  },

  purrMore: function \(\) {

  this.purr\(\);

  },

  };

global.setTimeout\(cat.purrMore, 5000\); // 5 seconds later: TypeError: this.purr is not a function

\`\`\`

* we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined

### POJOs

#### 1. Label variables as either Primitive vs. Reference

Javascript considers most data types to be 'primitive', these data types are immutable, and are passed by value. The more complex data types: Array and Object are mutable, are considered 'reference' data types, and are passed by reference.

* Boolean - Primitive
* Null - Primitive
* Undefined - Primitive
* Number - Primitive
* String - Primitive
* Array - Reference
* Object - Reference
* Function - Reference

#### 2. Identify when to use . vs \[\] when accessing values of an object

```javascript
let obj = { "one": 1, "two": 2 };

// Choose the square brackets property accessor when the property name is determined at
// runtime, or if the property name is not a valid identifier
let myKey = "one";
console.log(obj[myKey]);

// Choose the dot property accessor when the property name is known ahead of time.
console.log(obj.two);
```

#### 3. Write an object literal with a variable key using interpolation

```javascript
let keyName = "two";

// If the key is not known, you can use an alternative `[]` syntax for
// object initialization only
let obj2 = { [keyName]: 2 }
console.log(obj2);
```

#### 4. Use the obj\[key\] !== undefined pattern to check if a given variable that contains a key exists in an object

```javascript
function doesKeyExist(obj, key) {
  // obj[key] !== undefined
  // or:
  return key in obj;
}

let course = { bootcamp: 'Lambda', course: 'Bootcamp Prep' }
console.log(doesKeyExist(course, 'course')); // => true
console.log(doesKeyExist(course, 'name')); // => false
```

#### 5. Utilize Object.keys and Object.values in a function

```javascript
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

```javascript
let player = { name: "Sergey", skill: "hockey" };

for (let key in player) {
   console.log(key, player[key]);
}

console.log(Object.entries(player));
```

#### 7. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

```javascript
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

```javascript
let numArray = [1, 2, 3];
let moreNums = [...numArray, 4, 5, 6]

console.log(moreNums);

let shoe = { color: "red", size: 10 };
let newShoe = { ...shoe, brand: "Nike", size: 12 };
console.log(newShoe);
newShoe.color = "black";
console.log(newShoe);

console.log(shoe);
```

#### 9. Destructure an array to reference specific elements

```javascript
let arr = ['one', 'two', 'three'];

let [first] = arr;
console.log(first);
```

#### 10. Destructure an object to reference specific values

```javascript
let me = {
    name: "Ian",
    instruments: ['bass', 'synth', 'guitar'],
    siblings: {
        brothers: ['Alistair'],
        sisters: ['Meghan']
    }
}

let { name, instruments: musical_instruments, siblings: {sisters}} = me;

console.log(name);
console.log(musical_instruments);
console.log(sisters);
```

#### 11. Write a function that accepts a string as an argument and returns an object representing the count of each character in the array

```javascript
function charCount(inputString) {

    let res = inputString.split("").reduce(function(accum, el) {
        if (el in accum) {
            accum[el] = accum[el] + 1;
        } else {
            accum[el] = 1;
        }
        return accum;
    }, {})
    return res;

}

console.log(charCount('aaabbbeebbcdkjfalksdfjlkasdfasdfiiidkkdingds'));
```

### 

### Review of Concepts

#### 1. Identify the difference between const, let, and var declarations

#### 2. Explain the difference between const, let, and var declarations

```javascript
var a = "a";
```

* `var` is the historical keyword used for variable declaration.
* `var` declares variables in function scope, or global scope if not inside a function.
* We consider `var` to be _deprecated_ and it is never used in this course.

```javascript
let b = "b";
```

* `let` is the keyword we use most often for variable declaration.
* `let` declares variables in block scope.
* variables declared with `let` are re-assignable.

```javascript
const c = "c";
```

* `const` is a specialized form of `let` that can only be used to **initialize** a variable.
* Except when it is declared, you cannot assign to a `const` variable.
* `const` scopes variables the same way that `let` does.

#### 3. Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining

Consider this `run` function, inside which `foo` and `bar` have `function scope`. `i` and `baz` are scoped to the block expression.

```javascript
// function and block scope in this example
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar);

  {
    console.log(foo);
    let baz = "Bazz";
    console.log(baz);
  }

  console.log(baz); // ReferenceError
}

run();
```

Notice that referencing `baz` from outside it's block results in JavaScript throwing a ReferenceError.

Consider this `run` function, inside of which `foo` has `function scope`.

```javascript
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();
```

Consider this `func1` function and it's nested scopes.

```javascript
// global scope
function func1(arg1) {
  // func1 scope

  return function func2(arg2) {
    // func2 scope

    return function func3(arg3) {
      // func3 scope

      console.log(arg1, arg2, arg3);
    }
  }
}
```

#### 6. Implement a closure and explain how the closure effects scope

```javascript
const adder = (arg1) => {
  return (arg2) => {
    return arg1 + arg2;
  }
};

const func2 = adder(2);
const result = func2(2);
console.log(result); // => 4;
```



#### 4. Define an arrow function

```javascript
const returnValue = (val) => val;
```

This simple construct will create a function that accepts `val` as a parameter, and returns `val` immediately. We do not need to type `return val`, because this is a single-line function.

Identically, we could write

```javascript
const returnValue = (val) => {
  return val;
};
```

#### 5. Given an arrow function, deduce the value of `this` without executing the code

```javascript
function fDAdder(arr) {
  console.log(this);

  return arr.reduce((acc, ele) => { return acc + ele; });
};

fDAdder([1, 2, 4, 6]);
```

If we use a _function declaration_ style function, the `this` variable is set to the `global` object \(i.e. `Object [global]` in Node.JS and `Window` in your browser\).

```javascript
const adder = (arr) => {
  console.log(this);
  arr.reduce( (acc, ele) => sum += ele );
};
adder([1, 2, 4, 6]);
```

In this example, we use a _fat arrow_ style function. Note that when we declare a funciton like this `this` becomes

#### 7. Define a method that references this on an object literal

```javascript
const pokemon = {
  firstname: 'Pika',
  lastname: 'Chu',
  getPokeName: function () {
    const fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  }
};

console.log(pokemon.getPokeName());
```

#### 8. Utilize the built in Function\#bind on a callback to maintain the context of `this`

```javascript
const pokemon = {
  firstname: 'Pika',
  lastname: 'Chu',
  getPokeName: function () {
    const fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  }
};

const logPokemon = pokemon.getPokename.bind(pokemon);

logPokemon('sushi', 'algorithms'); // Pika Chu loves sushi and algorithms
```

#### 9. Given a code snippet, identify what `this` refers to

```javascript
function Person(name) {
  // this.name = name; 
  // let that = this;

  setTimeout(function() {
    // console.log(this); // => Window
    // console.log(that); // => [Function] => Person
    // this.sayName(); // => no method error
    that.sayName();
  }, 1000);
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

const jane = new Person("Jane");
```

