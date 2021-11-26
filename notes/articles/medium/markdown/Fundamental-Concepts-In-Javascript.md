Fundamental Concepts In Javascript
==================================

This is the stuff that comes up on interviews…

------------------------------------------------------------------------

### Fundamental Concepts In Javascript

#### This is the stuff that comes up on interviews…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*v_HRUxnqaDN-wJd8.png" class="graf-image" /></figure>Or even deeper:

### Here are most of the below exercises!

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*99CR4DhBOCjuVCkkK-lLwg.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/1200/1*UKRWX0waAKW3M_ZWJgRUmA.jpeg" class="graf-image" /></figure>

-   <span id="1fd7">Label variables as either Primitive vs. Reference</span>
-   <span id="de11">primitives: strings, booleans, numbers, null and undefined</span>
-   <span id="c203">primitives are immutable</span>
-   <span id="254c">refereces: objects (including arrays)</span>
-   <span id="80bc">references are mutable</span>
-   <span id="8b53">Identify when to use `.` vs `[]` when accessing values of an object</span>
-   <span id="cb76">dot syntax `object.key`</span>
-   <span id="91bc">easier to read</span>
-   <span id="7ff8">easier to write</span>
-   <span id="a46a">cannot use variables as keys</span>
-   <span id="74e2">keys cannot begin with a number</span>
-   <span id="c648">bracket notation `object["key]`</span>
-   <span id="5677">allows variables as keys</span>
-   <span id="f562">strings that start with numbers can be use as keys</span>
-   <span id="08df">Write an object literal with a variable key using interpolation</span>

### put it in brackets to access the value of the variable, rather than just making the value that string

-   <span id="d0b0">Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object</span>
-   <span id="9f75">can also use `(key in object)` syntax interchangeably (returns a boolean)</span>
-   <span id="811d">Utilize Object.keys and Object.values in a function</span>
-   <span id="1f44">`Object.keys(obj)` returns an array of all the keys in `obj`</span>
-   <span id="8efe">`Object.values(obj)` returns an array of the values in `obj`</span>

### Iterate through an object using a `for in` loop

### Define a function that utilizes `...rest` syntax to accept an arbitrary number of arguments

-   <span id="eb23">`...rest` syntax will store all additional arguments in an array</span>
-   <span id="e2d4">array will be empty if there are no additional arguments</span>

### Use `...spread` syntax for Object literals and Array literals

-   <span id="438a">Destructure an array to reference specific elements</span>

### Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

### Callbacks Lesson Concepts

-   <span id="133e">Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.</span>
-   <span id="22a1">they can be stored in variables, passed as arguments to other functions, and serve as return value for a function</span>
-   <span id="5b83">supports same basic operations as other types (strings, bools, numbers)</span>
-   <span id="2419">higher-order functions take functions as arguments or return functions as values</span>
-   <span id="2cc7">Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed</span>
-   <span id="7d16">what is this referring to?</span>
-   <span id="e1c6">Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.</span>

#### Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" class="markup--anchor markup--h4-anchor">`Array#map`.</a>

### Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`.

### Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.

------------------------------------------------------------------------

### Scope Lesson Concepts

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2WT03WQBOGKWH_9i.png" class="graf-image" /></figure>-   <span id="cd3f">Identify the difference between `const`, `let`, and `var` declarations</span>

> `const` ***- cannot reassign variable, scoped to block***

> `let` ***- can reassign variable, scoped to block***

> `var` ***- outdated, may or may not be reassigned, scoped to function. can be not just reassigned, but also redeclared!***

-   <span id="dc31">*a variable will always evaluate to the value it contains regardless of how it was declared*</span>

#### Explain the difference between `const`, `let`, and `var` declarations

> `var` *is function scoped—so if you declare it anywhere in a function, the declaration* ***(but not assignment…the fact that it exists is known to the javascript engine but the value assigned to it is a mystery until the code is run line by line!) is "hoisted"*** *so it will* ***exist in memory as “undefined”*** *which is bad and unpredictable*

> `var` *will also allow you to redeclare a variable, while* `let` *or* `const` *will raise a syntax error. you shouldn't be able to do that!*

#### `!!const` *won't let you reassign a variable!!*

> *but if it points to a mutable object, you will still be able to change the value by mutating the object*

-   <span id="2e8a">**block-scoped variables allow new variables with the same name in new scopes**</span>
-   <span id="b7a6">block-scoped still performs hoisting of all variables within the block, but it doesn’t **initialize to the value of** `undefined` **like** `var` **does,** so it throws a specific reference error if you try to access the value before it has been declared</span>
-   <span id="d64f">**if you do not use** `var` **or** `let` **or** `const` **when initializing, it will be declared as global—THIS IS BAD** *(pretend that’s something you didn’t even know you could do)*</span>
-   <span id="a6c4">if you assign a value without a declaration*(la la la la….I’m not listening)*, it exists in the global scope (so then it would be accessible by all outer scopes, so bad). however, there’s no hoisting, so it doesn’t exist in the scope until after the line is run.</span>

### Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining

<figure><img src="https://cdn-images-1.medium.com/max/800/0*P22Rwsk7Uzn5vJNS.png" class="graf-image" /></figure>-   <span id="904e">**scope of a program means the set of variables that are available for use within the program**</span>
-   <span id="2aa4">**global scope is represented by the** `window` **object in the browser and the** `global` **object in Node.js**</span>
-   <span id="e255">*global variables are available everywhere, and so increase the risk of name collisions*</span>

#### local scope is the set of variables available for use within the function

-   <span id="bb8a">when we enter a function, we enter a new scope</span>
-   <span id="6bc8">includes functions arguments, local variables declared inside function, and any variables that were already declared when the function is defined (hmm about that last one)</span>
-   <span id="b80e">for blocks (denoted by curly braces `{}`, as in conditionals or `for` loops), variables can be block scoped</span>
-   <span id="5ae1">inner scope does not have access to variables in the outer scope</span>
-   <span id="068c">scope chaining — if a given variable is not found in immediate scope, javascript will search all accessible outer scopes until variable is found</span>
-   <span id="c44e">so an inner scope can access outer scope variables</span>
-   <span id="37e1">but an outer scope can never access inner scope variables</span>

### Define an arrow function

### Given an arrow function, deduce the value of `this` without executing the code

-   <span id="98d6">arrow functions are automatically bound to the context they were declared in.</span>
-   <span id="c91b">unlike regular function which use the context they are invoked in (unless they have been bound using `Function#bind`).</span>
-   <span id="66a9">if you implement an arrow function as a method in an object the context it will be bound to is NOT the object itself, but the global context.</span>
-   <span id="b6e8">so you can’t use an arrow function to define a method directly</span>

### Implement a closure and explain how the closure effects scope

#### a closure is “the combination of a function and the lexical environment within which that function was declared”

-   <span id="bb50">**alternatively, “when an inner function uses or changes variables in an outer function”**</span>
-   <span id="87c8">closures have access to any variables within their own scope + scope of outer functions + global scope</span>
-   <span id="a9e4">the set of all these available variables is “lexical environemnt”</span>
-   <span id="8562">closure keeps reference to all variables \*\* even if the outer function has returned</span>
-   <span id="0a13">Without a closure to access the variables of an outer function from within a call to an inner function the outer function ‘closed’ over …each function has a private mutable state that cannot be accessed externally</span>
-   <span id="2d6a">The inner function will maintain a reference to the scope in which it was declared.so it has access to variables that were initialized in any outer scope- even if that scope</span>
-   <span id="d0d9">The inner function will maintain a reference to the scope in which it was declared.so it has access to variables that were initialized in any outer scope- even if that scope</span>

### Q:

#### if a variable exists in the scope of what could have been accessed by a function(e.g.global scope, outer function, etc), does that variable wind up in the closure even if it never got accessed ?

### A:

#### if you change the value of a variable(e.g.i++) you will change the value of that variable in the scope that it was declared in

### Define a method that references `this` on an object literal

-   <span id="e43c">when we use `this` in a method it refers to the object that the method is invoked on</span>
-   <span id="568d">it will let you access other pieces of information from within that object, or even other methods</span>
-   <span id="3cc8">method style invocation — `object.method(args)` (e.g. built in examples like `Array#push`, or `String#toUpperCase`)</span>
-   <span id="e9b1">context is set every time we invoke a function</span>
-   <span id="5423">function style invocation sets the context to the global object no matter what</span>
-   <span id="31b8">being inside an object does not make the context that object! you still have to use method-style invocation</span>
-   <span id="fa5a">Utilize the built in `Function#bind` on a callback to maintain the context of this</span>
-   <span id="5e6d">when we call bind on a function, we get an exotic function back — so the context will always be the same for that new function</span>

can also work with arguments, so you can have a version of a function with particular arguments and a particular context.the first arg will be the context aka the \`this\` you want it to use.the next arguments will be the functions arguments that you are binding — if you just want to bind it to those arguments in particular, you can use \`null\` as the first argument, so the context won ‘t be bound, just the arguments — Given a code snippet, identify what \`this\` refers to

> Important to recognize the difference between scope and context

-   <span id="a071">**scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope(which itself has pointers to new scopes until you reach the global scope.so you can think about a whole given block ‘s scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it)**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ATcQhZwwSH5EPFWk.gif" class="graf-image" /></figure>-   <span id="f933">**context refers to the value of the \`this\` keyword**</span>
-   <span id="03e2">the keyword \`this\` exists in every function and it evaluates to the object that is currently invoking that function</span>
-   <span id="7933">so the context is fairly straightforward when we talk about methods being called on specific objects</span>
-   <span id="f7bb">you could, however, call an object ‘s method on something other than that object, and then this would refer to the context where/how it was called, e.g.</span>

### CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!

-   <span id="1757">could throw an error if it expects this to have some other method or whatever that doesn’t exist</span>
-   <span id="11b1">you could also overwrite values or assign values to exist in a space where they should not exist</span>
-   <span id="e2bc">if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object</span>

we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined

-   <span id="2d21">CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!</span>
-   <span id="e8e4">could throw an error if it expects this to have some other method or whatever that doesn’t exist</span>
-   <span id="b227">you could also overwrite values or assign values to exist in a space where they should not exist</span>
-   <span id="a0a0">if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object</span>

> *we can use strict mode with* `"use strict";` *this will prevent you from accessing the global object with* `this` *in functions, so if you try to call* `this` *in the global context and change a value, you will get a type error, and the things you try to access will be undefined*

### POJOs

### POJOs

#### 1. Label variables as either Primitive vs. Reference

Javascript considers most data types to be ‘primitive’, these data types are immutable, and are passed by value. The more complex data types: Array and Object are mutable, are considered ‘reference’ data types, and are passed by reference.

-   <span id="05bb">Boolean — Primitive</span>
-   <span id="a5ab">Null — Primitive</span>
-   <span id="8aa7">Undefined — Primitive</span>
-   <span id="5c6b">Number — Primitive</span>
-   <span id="2e68">String — Primitive</span>
-   <span id="e2a1">Array — Reference</span>
-   <span id="1fe0">Object — Reference</span>
-   <span id="545b">Function — Reference</span>

#### 2. Identify when to use . vs \[\] when accessing values of an object

#### 3. Write an object literal with a variable key using interpolation

#### 4. Use the obj\[key\] !== undefined pattern to check if a given variable that contains a key exists in an object

#### 5. Utilize Object.keys and Object.values in a function

#### 6. Iterate through an object using a for in loop

#### 7. Define a function that utilizes …rest syntax to accept an arbitrary number of arguments

#### 8. Use …spread syntax for Object literals and Array literals

#### 9. Destructure an array to reference specific elements

#### 10. Destructure an object to reference specific values

#### 11. Write a function that accepts a string as an argument and returns an object representing the count of each character in the array

### Review of Concepts

#### 1. Identify the difference between const, let, and var declarations

#### 2. Explain the difference between const, let, and var declarations

    var a = "a";

-   <span id="cb01">`var` is the historical keyword used for variable declaration.</span>
-   <span id="f2d5">`var` declares variables in function scope, or global scope if not inside a function.</span>
-   <span id="8c4a">We consider `var` to be deprecated and it is never used in this course.</span>

<!-- -->

    let b = "b";

-   <span id="9912">`let` is the keyword we use most often for variable declaration.</span>
-   <span id="f9dd">`let` declares variables in block scope.</span>
-   <span id="75e1">variables declared with `let` are re-assignable.</span>

<!-- -->

    const c = "c";

-   <span id="5f80">`const` is a specialized form of `let` that can only be used to initialize a variable.</span>
-   <span id="7bc0">Except when it is declared, you cannot assign to a `const` variable.</span>
-   <span id="5df7">`const` scopes variables the same way that `let` does.</span>

#### 3. Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining

Consider this `run` function, inside which `foo` and `bar` have `function scope` . `i` and `baz` are scoped to the block expression.

Notice that referencing `baz` from outside it's block results in JavaScript throwing a ReferenceError.

Consider this `run` function, inside of which `foo` has `function scope` .

#### 6. Implement a closure and explain how the closure effects scope

#### 4. Define an arrow function

    const returnValue = (val) => val;

This simple construct will create a function that accepts `val` as a parameter, and returns `val` immediately. We do not need to type `return val` , because this is a single-line function.

Identically, we could write

    const returnValue = (val) => {
        return val;
    };

#### 5. Given an arrow function, deduce the value of `this` without executing the code

If we use a function declaration style function, the `this` variable is set to the `global` object (i.e. `Object [global]` in Node. JS and `Window` in your browser).

    const adder = (arr) => {
        console.log(this);
        arr.reduce((acc, ele) => sum += ele);
    };
    adder([1, 2, 4, 6]);

In this example, we use a fat arrow style function. Note that when we declare a functions like this `this` becomes

#### 7. Define a method that references this on an object literal

#### 8. Utilize the built in Function\#bind on a callback to maintain the context of `this`

#### 9. Given a code snippet, identify what `this` refers to

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Ff29X3kTbA17Qgoz.jpg" class="graf-image" /></figure>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 11, 2021](https://medium.com/p/8e093a665b04).

<a href="https://medium.com/@bryanguner/fundamental-concepts-in-javascript-8e093a665b04" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
