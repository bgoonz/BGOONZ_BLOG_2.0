---
title: JavaScript Cheat Sheet
excerpt: >-
    Work at home parent is an entrepreneur who works from home and integrates
    parenting into his or her business activities. They are sometimes referred to
    as a WAHM (work at home mom) or a WAHD (work at home dad).
date: '2016-08-22'
thumb_img_path: images/ampersand.jpg
thumb_img_alt: A man sitting at the table
content_img_path: images/ampersand.jpg
content_img_alt: A man sitting at the table
seo:
    title: JavaScript Cheat Sheet
    description: Work at home parent is an entrepreneur who works from home
    extra:
        - name: 'og:type'
          value: article
          keyName: property
        - name: 'og:title'
          value: JavaScript Cheat Sheet
          keyName: property
        - name: 'og:description'
          value: Work at home parent is an entrepreneur who works from home
          keyName: property
        - name: 'og:image'
          value: images/ampersand.jpg
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: summary_large_image
        - name: 'twitter:title'
          value: JavaScript Cheat Sheet
        - name: 'twitter:description'
          value: Work at home parent is an entrepreneur who works from home
        - name: 'twitter:image'
          value: images/ampersand.jpg
          relativeUrl: true
template: post
---

## Background:

# The Beginner's Guide To JavaScript

Part 1

---

### The Beginner's Guide To JavaScript

#### Part 1

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*Cg0j-L4ZHN7_5g2In-K-Ew.png" class="graf-image" /></figure>

### How to learn effectively

**Learning**: The acquisition of skills and the ability to apply them in the future.

**What makes an Effective learner?**

-   <span id="8498">They are active listeners.</span>
-   <span id="bc0a">They are engaged with the material.</span>
-   <span id="99d3">They are receptive of feedback.</span>
-   <span id="b615">They are open to difficulty.</span>

**Why do active learning techniques feel difficult?**

-   <span id="9a75">It feels difficult because you are constantly receiving feedback, and so you are constantly adapting and perfecting the material.</span>

**Desirable Difficulty**

-   <span id="3c8a">The skills we wish to obtain is often a difficult one.</span>
-   <span id="a83e">We want challenging but possible lessons based on current level of skill.</span>

**Effective learners space their practice**

-   <span id="a7b3">Consistent effort &gt; cramming =&gt; for **durable knowledge**</span>

---

#### Here's a REPL to practice with:

<a href="https://replit.com/@bgoonz/lambda-prep#README.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://replit.com/@bgoonz/lambda-prep#README.html"><strong>lambda-prep</strong><br />
<em>pre-course-work</em>replit.com</a><a href="https://replit.com/@bgoonz/lambda-prep#README.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

---

<a href="https://lambda-prep.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://lambda-prep.netlify.app/"><strong>INTRO@JSWEB</strong><br />
<em>Resource-sharing-hub</em>lambda-prep.netlify.app</a><a href="https://lambda-prep.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

---

### Hello World

-   <span id="d452">**console.log** : command used to print something onto the screen.</span>
-   <span id="99ad">**syntax** : the exact arrangement of the symbols, characters, and keywords in our code.</span>
-   <span id="a287">**//** : notation for creating a code comment in JS.</span>
-   <span id="e2e6">**code comment** : useful for annotating pieces of code to explain how something works, ignored by computer.</span>

> **_"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra_**

---

### The Number Data Type

The **number** data type in JS is used to represent any numerical values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   <span id="b0ed">**+** (addition)</span>
-   <span id="53d9">**-** (subtraction)</span>
-   <span id="93f2">**asterisk** (multiplication)</span>
-   <span id="92d8">**/** (division)</span>
-   <span id="21c1">**%** (modulo)</span>

JS evaluates more complex expressions using the general math order of operations aka PEMDAS.

-   <span id="d1a4">**PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.</span>
-   <span id="81a2">_To force a specific order of operation, use the group operator ( ) around a part of the expression._</span>

**Modulo** : Very useful operation to check divisibility of numbers, check for even & odd, whether a number is prime, and much more! _(Discrete Math concept, circular problems can be solved with modulo)_

-   <span id="20ad">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.</span>
-   <span id="2fbf">`console.log(7 % 10); // => 7;`</span>

---

### The String Data Type

The **string** data type is a primitive data type that used to represent textual data.

-   <span id="310e">can be wrapped by either **single** or **double** quotation marks, _best to choose one and stick with it for consistency_.</span>
-   <span id="664c">If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.</span>
-   <span id="46e7">`"That's a great string"; (valid)`</span>
-   <span id="4667">`'Shakespeare wrote, "To be or not to be"'; (valid)`</span>
-   <span id="9674">`'That's a bad string'; (invalid)`</span>
-   <span id="74cb">Alt. way to add other quotes within strings is to use template literals.</span>
-   <span id="caf5">`` `This is a temp'l'ate literal ${function}` // use ${} to invoke functions within. ``</span>
-   <span id="9144">**.length** : property that can be appended to data to return the length.</span>
-   <span id="afa8">empty strings have a length of zero.</span>
-   <span id="69ac">**indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].</span>

`console.log("bootcamp"[0]); // => "b"`

`console.log("bootcamp"[10]); // => "undefined"`

`console.log("boots"[1 * 2]); // => "o"`

`console.log("boots"["boot".length - 1]); // => "t"`

-   <span id="cb8b">we can pass expressions through the brackets as well since JS always evaluates expressions first.</span>
-   <span id="a30f">The index of the last character of a string is always one less than it's length.</span>
-   <span id="3080">**indexOf()** : method used to find the first index of a given character within a string.</span>
-   <span id="442d">`console.log("bagel".indexOf("b")); // => 0 console.log("bagel".indexOf("z")); // => -1`</span>
-   <span id="7ddd">if the character inside the indexOf() search does not exist in the string, the output will be -1.</span>
-   <span id="7e6a">the indexOf() search will return the first instanced index of the the char in the string.</span>
-   <span id="8729">**concatenate** : word to describe joining strings together into a single string.</span>

---

### The Boolean Data Type

The **boolean** data type is the simplest data type since there are only two values: **true** and **false**.

-   <span id="fcde">**Logical Operators** (B*oolean Operators*) are used to establish logic in our code.</span>
-   <span id="bd34">**!** (not) : reverses a boolean value.</span>
-   <span id="bdba">`console.log(!true); // => false console.log(!!false); // => false`</span>
-   <span id="cc27">**&&** (and) **Truth Table**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Aw4iCm7-FQ7znEcBVH3FTw.png" class="graf-image" /></figure>-   <span id="a087">**Logical Order of Operations** : JS will evaluate !, then &&, then ||.</span>
-   <span id="295f">**De Morgan's Law** : Common mistake in boolean logic is incorrectly distributing ! across parentheses.</span>
-   <span id="7400">`!(A || B) === !A && !B; !(A && B) === !A || !B;`</span>
-   <span id="26c2">In summary, to correctly distribute ! across parentheses we must also flip the operation within.</span>
-   <span id="a8c1">**Short-Circuit Evaluation** : Because JS evalutes from left to right, expressions can "short-circuit". For example if we have true on the left of an || logical comparison, it will stop evaluating and yield true instead of wasting resources on processing the rest of the statement.</span>
-   <span id="58a3">`console.log(true || !false); // => stops after it sees "true ||"`</span>

---

### Comparison Operators

All comparison operators will result in a boolean output.

**The relative comparators**

-   <span id="0e52">**&gt;** (greater than)</span>
-   <span id="f979">**&lt;** (less than)</span>
-   <span id="73da">**&gt;=** (greater than or equal to)</span>
-   <span id="1620">**&lt;=** (less than or equal to)</span>
-   <span id="fb41">**===** (equal to)</span>
-   <span id="0fd1">**!==** (not equal to)</span>

> _Fun Fact: "a" &lt; "b" is considered valid JS Code because string comparisons are compared lexicographically (meaning dictionary order), so "a" is less than "b" because it appears earlier!_

> _If there is ever a standstill comparison of two string lexicographically (i.e. app vs apple) the comparison will deem the shorter string lesser._

**Difference between == and ===**

-   <span id="8cc0">**===** : Strict Equality, will only return true if the two comparisons are entirely the same.</span>
-   <span id="b25c">**==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)</span>

---

### Variables

Variables are used to store information to be referenced and manipulated in a program.

-   <span id="e2b7">We initialize a variable by using the **let** keyword and a **=** single equals sign (assignment operator).</span>
-   <span id="e03b">`let bootcamp = "Lambda"; console.log(bootcamp); // "Lambda"`</span>
-   <span id="2e71">JS variable names can contain any alphanumeric characters, underscores, or dollar signs (cannot being with a number).</span>
-   <span id="6ab7">If you do not declare a value for a variable, undefined is automatically set.</span>
-   <span id="0c6f">`let bootcamp; console.log(bootcamp); // undefined`</span>
-   <span id="1f9a">We can change the value of a previously declared variable (let, not const) by re-assigning it another value.</span>
-   <span id="9e00">**let** is the updated version of **var**; there are some differences in terms of hoisting and global/block scope — will be covered later in the course (common interview question!)</span>

**Assignment Shorthand**

    let num = 0;
    num += 10; // same as num = num + 10
    num -= 2; // same as num = num - 2
    num /= 4; // same as num = num / 4
    num *= 7; // same as num = num * 7

-   <span id="ab22">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>
-   <span id="22c2">**declaration** : process of simply introducing a variable name.</span>
-   <span id="caeb">**initialization** : process of both declaring and assigning a variable on the same line.</span>

---

### Functions

A function is a procedure of code that will run when called. Functions are used so that we do not have to rewrite code to do the same thing over and over. (Think of them as ‘subprograms')

-   <span id="4c89">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="d3fe">Includes three things:</span>
-   <span id="b57c">Name of the function.</span>
-   <span id="dfea">A list of _parameters_ ()</span>
-   <span id="da88">The code to execute {}</span>
-   <span id="8eb3">**Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)</span>
-   <span id="cb1d">JS evaluates code top down, left to right.</span>
-   <span id="9cb4">When we execute a declared function later on in our program we refer to this as **invoking** our function.</span>
-   <span id="fde3">Every function in JS returns undefined unless otherwise specified.</span>
-   <span id="059e">When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.</span>
-   <span id="d906">When naming functions in JS always use camelCase and name it something appropriate. &gt; Greate code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!</span>

---

### Parameters and Arguments

-   <span id="eb19">**Parameters** : Comma seperated variables specified as part of a function's declaration.</span>
-   <span id="6abb">**Arguments** : Values passed to the function when it is invoked.</span>
-   <span id="ab31">_If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work._</span>
-   <span id="12ee">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

---

# Cheat Sheet:

```js

// Single-line comments start with two slashes.
/* Multiline comments start with slash-star,
   and end with star-slash */

// Statements can be terminated by ;
doStuff();

// ... but they don't have to be, as semicolons are automatically inserted
// wherever there's a newline, except in certain cases.
doStuff()

// Because those cases can cause unexpected results, we'll keep on using
// semicolons in this guide.

///////////////////////////////////
// 1. Numbers, Strings and Operators

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.
3; // = 3
1.5; // = 1.5

// Some basic arithmetic works as you'd expect.
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// Including uneven division.
5 / 2; // = 2.5

// And modulo division.
10 % 2; // = 0
30 % 4; // = 2
18.5 % 7; // = 4.5

// Bitwise operations also work; when you perform a bitwise operation your float
// is converted to a signed int *up to* 32 bits.
1 << 2; // = 4

// Precedence is enforced with parentheses.
(1 + 3) * 2; // = 8

// There are three special not-a-real-number values:
Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0
NaN; // result of e.g. 0/0, stands for 'Not a Number'

// There's also a boolean type.
true;
false;

// Strings are created with ' or ".
'abc';
"Hello, world";

// Negation uses the ! symbol
!true; // = false
!false; // = true

// Equality is ===
1 === 1; // = true
2 === 1; // = false

// Inequality is !==
1 !== 1; // = false
2 !== 1; // = true

// More comparisons
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Strings are concatenated with +
"Hello " + "world!"; // = "Hello world!"

// ... which works with more than just strings
"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world,!"

// and are compared with < and >
"a" < "b"; // = true

// Type coercion is performed for comparisons with double equals...
"5" == 5; // = true
null == undefined; // = true

// ...unless you use ===
"5" === 5; // = false
null === undefined; // = false

// ...which can result in some weird behaviour...
13 + !0; // 14
"13" + !0; // '13true'

// You can access characters in a string with `charAt`
"This is a string".charAt(0);  // = 'T'

// ...or use `substring` to get larger pieces.
"Hello world".substring(0, 5); // = "Hello"

// `length` is a property, so don't use ().
"Hello".length; // = 5

// There's also `null` and `undefined`.
null;      // used to indicate a deliberate non-value
undefined; // used to indicate a value is not currently present (although
           // `undefined` is actually a value itself)

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0".

///////////////////////////////////
// 2. Variables, Arrays and Objects

// Variables are declared with the `var` keyword. JavaScript is dynamically
// typed, so you don't need to specify type. Assignment uses a single `=`
// character.
var someVar = 5;

// If you leave the var keyword off, you won't get an error...
someOtherVar = 10;

// ...but your variable will be created in the global scope, not in the scope
// you defined it in.

// Variables declared without being assigned to are set to undefined.
var someThirdVar; // = undefined

// If you want to declare a couple of variables, then you could use a comma
// separator
var someFourthVar = 2, someFifthVar = 4;

// There's shorthand for performing math operations on variables:
someVar += 5; // equivalent to someVar = someVar + 5; someVar is 10 now
someVar *= 10; // now someVar is 100

// and an even-shorter-hand for adding or subtracting 1
someVar++; // now someVar is 101
someVar--; // back to 100

// Arrays are ordered lists of values, of any type.
var myArray = ["Hello", 45, true];

// Their members can be accessed using the square-brackets subscript syntax.
// Array indices start at zero.
myArray[1]; // = 45

// Arrays are mutable and of variable length.
myArray.push("World");
myArray.length; // = 4

// Add/Modify at specific index
myArray[3] = "Hello";

// Add and remove element from front or back end of an array
myArray.unshift(3); // Add as the first element
someVar = myArray.shift(); // Remove first element and return it
myArray.push(3); // Add as the last element
someVar = myArray.pop(); // Remove last element and return it

// Join all elements of an array with semicolon
var myArray0 = [32,false,"js",12,56,90];
myArray0.join(";") // = "32;false;js;12;56;90"

// Get subarray of elements from index 1 (include) to 4 (exclude)
myArray0.slice(1,4); // = [false,"js",12]

// Remove 4 elements starting from index 2, and insert there strings
// "hi","wr" and "ld"; return removed subarray
myArray0.splice(2,4,"hi","wr","ld"); // = ["js",12,56,90]
// myArray0 === [32,false,"hi","wr","ld"]

// JavaScript's objects are equivalent to "dictionaries" or "maps" in other
// languages: an unordered collection of key-value pairs.
var myObj = {key1: "Hello", key2: "World"};

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
var myObj = {myKey: "myValue", "my other key": 4};

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey; // = undefined

///////////////////////////////////
// 3. Logic and Control Structures

// The `if` structure works as you'd expect.
var count = 1;
if (count == 3){
    // evaluated if count is 3
} else if (count == 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}

// As does `while`.
while (true){
    // An infinite loop!
}

// Do-while loops are like while loops, except they always run at least once.
var input;
do {
    input = getInput();
} while (!isValid(input));

// The `for` loop is the same as C and Java:
// initialization; continue condition; iteration.
for (var i = 0; i < 5; i++){
    // will run 5 times
}

// Breaking out of labeled loops is similar to Java
outer:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            break outer;
            // breaks out of outer loop instead of only the inner one
        }
    }
}

// The for/in statement allows iteration over properties of an object.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
} // description = 'Paul Ken 18 '

// The for/of statement allows iteration over iterable objects (including the built-in String,
// Array, e.g. the Array-like arguments or NodeList objects, TypedArray, Map and Set,
// and user-defined iterables).
var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} // myPets = 'cat dog hamster hedgehog '

// && is logical and, || is logical or
if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
    // colour is either red or blue
}

// && and || "short circuit", which is useful for setting default values.
var name = otherName || "default";

// The `switch` statement checks for equality with `===`.
// Use 'break' after each case
// or the cases after the correct one will be executed too.
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}

///////////////////////////////////
// 4. Functions, Scope and Closures

// JavaScript functions are declared with the `function` keyword.
function myFunction(thing){
    return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
function myFunction(){
    return // <- semicolon automatically inserted here
    {thisIsAn: 'object literal'};
}
myFunction(); // = undefined

// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments - for
// example, when supplying an event handler:
function myFunction(){
    // this code will be called in 5 seconds' time
}
setTimeout(myFunction, 5000);
// Note: setTimeout isn't part of the JS language, but is provided by browsers
// and Node.js.

// Another function provided by browsers is setInterval
function myFunction(){
    // this code will be called every 5 seconds
}
setInterval(myFunction, 5000);

// Function objects don't even have to be declared with a name - you can write
// an anonymous function definition directly into the arguments of another.
setTimeout(function(){
    // this code will be called in 5 seconds' time
}, 5000);

// JavaScript has function scope; functions get their own scope but other blocks
// do not.
if (true){
    var i = 5;
}
i; // = 5 - not undefined as you'd expect in a block-scoped language

// This has led to a common pattern of "immediately-executing anonymous
// functions", which prevent temporary variables from leaking into the global
// scope.
(function(){
    var temporary = 5;
    // We can access the global scope by assigning to the "global object", which
    // in a web browser is always `window`. The global object may have a
    // different name in non-browser environments such as Node.js.
    window.permanent = 10;
})();
temporary; // raises ReferenceError
permanent; // = 10

// One of JavaScript's most powerful features is closures. If a function is
// defined inside another function, the inner function has access to all the
// outer function's variables, even after the outer function exits.
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}
sayHelloInFiveSeconds("Adam"); // will open a popup with "Hello, Adam!" in 5s

///////////////////////////////////
// 5. More about Objects; Constructors and Prototypes

// Objects can contain functions.
var myObj = {
    myFunc: function(){
        return "Hello world!";
    }
};
myObj.myFunc(); // = "Hello world!"

// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return this.myString;
    }
};
myObj.myFunc(); // = "Hello world!"

// What this is set to has to do with how the function is called, not where
// it's defined. So, our function doesn't work if it isn't called in the
// context of the object.
var myFunc = myObj.myFunc;
myFunc(); // = undefined

// Inversely, a function can be assigned to the object and gain access to it
// through `this`, even if it wasn't attached when it was defined.
var myOtherFunc = function(){
    return this.myString.toUpperCase();
};
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc(); // = "HELLO WORLD!"

// We can also specify a context for a function to execute in when we invoke it
// using `call` or `apply`.

var anotherFunc = function(s){
    return this.myString + s;
};
anotherFunc.call(myObj, " And Hello Moon!"); // = "Hello World! And Hello Moon!"

// The `apply` function is nearly identical, but takes an array for an argument
// list.

anotherFunc.apply(myObj, [" And Hello Sun!"]); // = "Hello World! And Hello Sun!"

// This is useful when working with a function that accepts a sequence of
// arguments and you want to pass an array.

Math.min(42, 6, 27); // = 6
Math.min([42, 6, 27]); // = NaN (uh-oh!)
Math.min.apply(Math, [42, 6, 27]); // = 6

// But, `call` and `apply` are only temporary. When we want it to stick, we can
// use `bind`.

var boundFunc = anotherFunc.bind(myObj);
boundFunc(" And Hello Saturn!"); // = "Hello World! And Hello Saturn!"

// `bind` can also be used to partially apply (curry) a function.

var product = function(a, b){ return a * b; };
var doubler = product.bind(this, 2);
doubler(8); // = 16

// When you call a function with the `new` keyword, a new object is created, and
// made available to the function via the `this` keyword. Functions designed to be
// called like that are called constructors.

var MyConstructor = function(){
    this.myNumber = 5;
};
myNewObj = new MyConstructor(); // = {myNumber: 5}
myNewObj.myNumber; // = 5

// Unlike most other popular object-oriented languages, JavaScript has no
// concept of 'instances' created from 'class' blueprints; instead, JavaScript
// combines instantiation and inheritance into a single concept: a 'prototype'.

// Every JavaScript object has a 'prototype'. When you go to access a property
// on an object that doesn't exist on the actual object, the interpreter will
// look at its prototype.

// Some JS implementations let you access an object's prototype on the magic
// property `__proto__`. While this is useful for explaining prototypes it's not
// part of the standard; we'll get to standard ways of using prototypes later.
var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase();
    }
};

myObj.__proto__ = myPrototype;
myObj.meaningOfLife; // = 42

// This works for functions, too.
myObj.myFunc(); // = "hello world!"

// Of course, if your property isn't on your prototype, the prototype's
// prototype is searched, and so on.
myPrototype.__proto__ = {
    myBoolean: true
};
myObj.myBoolean; // = true

// There's no copying involved here; each object stores a reference to its
// prototype. This means we can alter the prototype and our changes will be
// reflected everywhere.
myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; // = 43

// The for/in statement allows iteration over properties of an object,
// walking up the prototype chain until it sees a null prototype.
for (var x in myObj){
    console.log(myObj[x]);
}
///prints:
// Hello world!
// 43
// [Function: myFunc]
// true

// To only consider properties attached to the object itself
// and not its prototypes, use the `hasOwnProperty()` check.
for (var x in myObj){
    if (myObj.hasOwnProperty(x)){
        console.log(myObj[x]);
    }
}
///prints:
// Hello world!

// We mentioned that `__proto__` was non-standard, and there's no standard way to
// change the prototype of an existing object. However, there are two ways to
// create a new object with a given prototype.

// The first is Object.create, which is a recent addition to JS, and therefore
// not available in all implementations yet.
var myObj = Object.create(myPrototype);
myObj.meaningOfLife; // = 43

// The second way, which works anywhere, has to do with constructors.
// Constructors have a property called prototype. This is *not* the prototype of
// the constructor function itself; instead, it's the prototype that new objects
// are given when they're created with that constructor and the new keyword.
MyConstructor.prototype = {
    myNumber: 5,
    getMyNumber: function(){
        return this.myNumber;
    }
};
var myNewObj2 = new MyConstructor();
myNewObj2.getMyNumber(); // = 5
myNewObj2.myNumber = 6;
myNewObj2.getMyNumber(); // = 6

// Built-in types like strings and numbers also have constructors that create
// equivalent wrapper objects.
var myNumber = 12;
var myNumberObj = new Number(12);
myNumber == myNumberObj; // = true

// Except, they aren't exactly equivalent.
typeof myNumber; // = 'number'
typeof myNumberObj; // = 'object'
myNumber === myNumberObj; // = false
if (0){
    // This code won't execute, because 0 is falsy.
}
if (new Number(0)){
   // This code will execute, because wrapped numbers are objects, and objects
   // are always truthy.
}

// However, the wrapper objects and the regular builtins share a prototype, so
// you can actually add functionality to a string, for instance.
String.prototype.firstCharacter = function(){
    return this.charAt(0);
};
"abc".firstCharacter(); // = "a"

// This fact is often used in "polyfilling", which is implementing newer
// features of JavaScript in an older subset of JavaScript, so that they can be
// used in older environments such as outdated browsers.

// For instance, we mentioned that Object.create isn't yet available in all
// implementations, but we can still use it with this polyfill:
if (Object.create === undefined){ // don't overwrite it if it exists
    Object.create = function(proto){
        // make a temporary constructor with the right prototype
        var Constructor = function(){};
        Constructor.prototype = proto;
        // then use it to create a new, appropriately-prototyped object
        return new Constructor();
    };
}

/* *******************************************************************************************
 * GLOBAL OBJECTS > OBJECT
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * ******************************************************************************************* */

// Global object: properties
Object.length                                        // length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number does not include the rest parameter. Has a value of 1.
Object.prototype                                     // Represents the Object prototype object and allows to add new properties and methods to all objects of type Object.

// Methods of the Object constructor
Object.assign(target, ...sources)                    // Copies the values of all enumerable own properties from one or more source objects to a target object. method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object
Object.create(MyObject)                              // Creates a new object with the specified prototype object and properties. The object which should be the prototype of the newly-created object.
Object.defineProperty(obj, prop, descriptor)         // Adds the named property described by a given descriptor to an object.
Object.defineProperties(obj, props)                  // Adds the named properties described by the given descriptors to an object.
Object.entries(obj)                                  // Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze(obj)                                   // Freezes an object: other code can't delete or change any properties.
Object.getOwnPropertyDescriptor(obj, prop)           // Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors(obj)                // Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames(obj)                      // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols(obj)                    // Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf(obj)                           // Returns the prototype of the specified object.
Object.is(value1, value2);                           // Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible(obj)                             // Determines if extending of an object is allowed.
Object.isFrozen(obj)                                 // Determines if an object was frozen.
Object.isSealed(obj)                                 // Determines if an object is sealed.
Object.keys(obj)                                     // Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions(obj)                        // Prevents any extensions of an object.
Object.seal(obj)                                     // Prevents other code from deleting properties of an object.
Object.setPrototypeOf(obj, prototype)                // Sets the prototype (i.e., the internal [[Prototype]] property).
Object.values(obj)                                   // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

// Object instances and Object prototype object (Object.prototype.property or Object.prototype.method())
// Properties
obj.constructor                                      // Specifies the function that creates an object's prototype.
obj.__proto__                                        // Points to the object which was used as prototype when the object was instantiated.

// Methods
obj.hasOwnProperty(prop)                             // Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
prototypeObj.isPrototypeOf(object)                   // Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
obj.propertyIsEnumerable(prop)                       // Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
obj.toLocaleString()                                 // Calls toString().
obj.toString()                                       // Returns a string representation of the object.
object.valueOf()                                     // Returns the primitive value of the specified object.

/* *******************************************************************************************
 * GLOBAL OBJECTS > ARRAY
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * ******************************************************************************************* */

// Global object: properties
Array.length                                         // Reflects the number of elements in an array.
Array.prototype                                      // Represents the prototype for the Array constructor and allows to add new properties and methods to all Array objects.

// Global object: methods
Array.from(arrayLike[, mapFn[, thisArg]])            // Creates a new Array instance from an array-like or iterable object.
Array.isArray(obj)                                   // Returns true if a variable is an array, if not false.
Array.of(element0[, element1[, ...[, elementN]]])    // Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// Instance: properties
arr.length                                           // Reflects the number of elements in an array.

// Instance: mutator methods
arr.copyWithin(target, start, end)                   // Copies a sequence of array elements within the array.
arr.fill(value, start, end)                          // Fills all the elements of an array from a start index to an end index with a static value.
arr.pop()                                            // Removes the last element from an array and returns that element.
arr.push([element1[, ...[, elementN]]])              // Adds one or more elements to the end of an array and returns the new length of the array.
arr.reverse()                                        // Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
arr.shift()                                          // Removes the first element from an array and returns that element.
arr.sort()                                           // Sorts the elements of an array in place and returns the array.
array.splice(start, deleteCount, item1, item2, ...)  // Adds and/or removes elements from an array.
arr.unshift([element1[, ...[, elementN]]])           // Adds one or more elements to the front of an array and returns the new length of the array.

// Instance: accessor methods
arr.concat(value1[, value2[, ...[, valueN]]])        // Returns a new array comprised of this array joined with other array(s) and/or value(s).
arr.includes(searchElement, fromIndex)               // Determines whether an array contains a certain element, returning true or false as appropriate.
arr.indexOf(searchElement[, fromIndex])              // Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
arr.join(separator)                                  // Joins all elements of an array into a string.
arr.lastIndexOf(searchElement, fromIndex)            // Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
arr.slice(begin, end)                                // Extracts a section of an array and returns a new array.
arr.toString()                                       // Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
arr.toLocaleString(locales, options)                 // Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

// Instance: iteration methods
arr.entries()                                        // Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
arr.every(callback[, thisArg])                       // Returns true if every element in this array satisfies the provided testing function.
arr.filter(callback[, thisArg])                      // Creates a new array with all of the elements of this array for which the provided filtering function returns true.
arr.find(callback[, thisArg])                        // Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
arr.findIndex(callback[, thisArg])                   // Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
arr.forEach(callback[, thisArg])                     // Calls a function for each element in the array.
arr.keys()                                           // Returns a new Array Iterator that contains the keys for each index in the array.
arr.map(callback[, initialValue])                    // Creates a new array with the results of calling a provided function on every element in this array.
arr.reduce(callback[, initialValue])                 // Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
arr.reduceRight(callback[, initialValue])            // Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
arr.some(callback[, initialValue])                   // Returns true if at least one element in this array satisfies the provided testing function.
arr.values()                                         // Returns a new Array Iterator object that contains the values for each index in the array.

```
