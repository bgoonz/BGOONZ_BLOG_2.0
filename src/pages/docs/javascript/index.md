---
title: Javascript
weight: 0
excerpt: Javascript articles  and docs
seo:
    title: 'JavaScript Programming Language'
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## Javascript

### Chwat sheet:

<details>

<summary>  **Cheatsheet** </summary>

```js
//

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

</details>

---

# Fundamental Javascript Concepts You Should Understand

Plain Old JS Object Lesson Concepts

---

### Fundamental Javascript Concepts You Should Understand

### Plain Old JS Object Lesson Concepts

<figure>
<img src="https://cdn-images-1.medium.com/max/800/0*bEuahctJRS_qCQgV.jpg" class="graf-image" />
</figure>- <span id="d911">Label variables as either Primitive vs. Reference</span>
- <span id="42a0">primitives: strings, booleans, numbers, null and undefined</span>
- <span id="4423">primitives are immutable</span>
- <span id="fd1a">refereces: objects (including arrays)</span>
- <span id="d581">references are mutable</span>
- <span id="65e2">Identify when to use `.` vs `[]` when accessing values of an object</span>
- <span id="eb9d">dot syntax `object.key`</span>
- <span id="8e03">easier to read</span>
- <span id="1662">easier to write</span>
- <span id="5796">cannot use variables as keys</span>
- <span id="588a">keys cannot begin with a number</span>
- <span id="5501">bracket notation `object["key]`</span>
- <span id="5734">allows variables as keys</span>
- <span id="76ca">strings that start with numbers can be use as keys</span>
- <span id="822a">Write an object literal with a variable key using interpolation</span>

#### put it in brackets to access the value of the variable, rather than just make the value that string

    let a = "b";
        let obj = {
            a: "letter_a",
            [a]: "letter b"
        }

- <span id="e4fc">Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object</span>
- <span id="0baa">can also use `(key in object)` syntax interchangeably (returns a boolean)</span>
- <span id="ad4c">Utilize Object.keys and Object.values in a function</span>
- <span id="b548">`Object.keys(obj)` returns an array of all the keys in `obj`</span>
- <span id="f39b">`Object.values(obj)` returns an array of the values in `obj`</span>

#### Iterate through an object using a `for in` loop

    let printValues = function(obj) {
          for (let key in obj) {
              let value = obj[key];
              console.log(value);
          }
      }

#### Define a function that utilizes `...rest` syntax to accept an arbitrary number of arguments

- <span id="58a5">`...rest` syntax will store all additional arguments in an array</span>
- <span id="5f8b">array will be empty if there are no additional arguments</span>

<!-- -->

    let myFunction = function(str, ...strs) {
            console.log("The first string is " + str);
            console.log("The rest of the strings are:");
            strs.forEach(function(str) {
                console.log(str);
            })
        }

#### Use `...spread` syntax for Object literals and Array literals

    let arr1 = ["a", "b", "c"];
      let longer = [...arr1, "d", "e"]; // ["a", "b", "c", "d", "e"]
      // without spread syntax, this would give you a nested array
      let withoutRest = [arr1, "d", "e"] // [["a", "b", "c"], "d", "e"]

- <span id="118b">Destructure an array to reference specific elements</span>

<!-- -->

    let array = [35, 9];

    let [firstEl, secondEl] = array;

    console.log(firstEl); // => 35

    console.log(secondEl); // => 9

    // can also destructure using … syntax let array = [35, 9, 14]; let [head, …tail] = array; console.log(head); // => 35 console.log(tail); // => [9, 14]

    -Destructure an object to reference specific values
        -
        if you want to use variable names that don 't match the keys, you can use aliasing -
        `let { oldkeyname: newkeyname } = object` -
        rule of thumb— only destructure values from objects that are two levels deep ``
    `javascript
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

#### Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

    //
      let elementCounts = function(array) {
          let obj = {};
          array.forEach(function(el) {
              if (el in obj) obj[el] += 1;
              else obj[el] = 1;
          })
          return obj;
      }
      console.log(elementCounts(["e", "f", "g", "f"])); // => Object {e: 1, f: 2, g: 1}

### Callbacks Lesson Concepts

- <span id="a16e">Given multiple plausible reasons, identify why functions are called "First Class Objects" in JavaScript.</span>
- <span id="0d89">they can be stored in variables, passed as arguments to other functions, and serve as return value for a function</span>
- <span id="e458">supports same basic operations as other types (strings, bools, numbers)</span>
- <span id="6af2">higher-order functions take functions as arguments or return functions as values</span>
- <span id="adbe">Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed</span>
- <span id="e93b">what is this referring to?</span>
- <span id="c73f">Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.</span>

<!-- -->

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

// shorter version let greaterCB = function(val, callback1, callback2) { return Math.max(callback1(val), callback2(val)); } // even shorter, cause why not let greaterCB = (val, cb1, cb2) =&gt; Math.max(cb1(val), cb2(val));

    -Write a
    function, myMap, that takes in an array and a callback as arguments.The
    function should mimic the behavior of `Array#map`.
    ``
    `javascript
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

#### Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`

    let myFilter = function(array, callback) {
          let filtered = [];
          for (let i = 0; i < array.length; i++) {
              if (callback(array[i])) {
                  filtered.push(array[i], i, array);
              }
          }
      }

#### Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`

    let myEvery = function(array, callback) {
          for (let i = 0; i < array.length; i++) {
              if (!callback(array[i], i, array)) {
                  return false
              }
          }
          return true;
      }
      // with arrow function syntax
      let myEvery = (array, callback) => {
          for (let i = 0; i < array.length; i++) {
              if (!callback(array[i])) {
                  return false
              }
          }
          return true;
      }

### Scope Lesson Concepts

- <span id="685f">Identify the difference between `const`, `let`, and `var` declarations</span>
- <span id="7308">`const` - cannot reassign variable, scoped to block</span>
- <span id="e07f">`let` - can reassign variable, scoped to block</span>
- <span id="670d">`var` - outdated, may or may not be reassigned, scoped to function. can be not just reassigned, but also redeclared!</span>
- <span id="b254">a variable will always evaluate to the value it contains regardless of how it was declared</span>
- <span id="aace">Explain the difference between `const`, `let`, and `var` declarations</span>
- <span id="5d79">`var` is function scoped—so if you declare it anywhere in a function, the declaration (but not assignment) is "hoisted"</span>
- <span id="a54b">so it will exist in memory as "undefined" which is bad and unpredictable</span>
- <span id="2dc2">`var` will also allow you to redeclare a variable, while `let` or `const` will raise a syntax error. you shouldn't be able to do that!</span>
- <span id="1f74">`const` won't let you reassign a variable, but if it points to a mutable object, you will still be able to change the value by mutating the object</span>
- <span id="2c20">block-scoped variables allow new variables with the same name in new scopes</span>
- <span id="c3d4">block-scoped still performs hoisting of all variables within the block, but it doesn't initialize to the value of `undefined` like `var` does, so it throws a specific reference error if you try to access the value before it has been declared</span>
- <span id="f797">if you do not use `var` or `let` or `const` when initializing, it will be declared as global—THIS IS BAD</span>
- <span id="2212">if you assign a value without a declaration, it exists in the global scope (so then it would be accessible by all outer scopes, so bad). however, there's no hoisting, so it doesn't exist in the scope until after the line is run</span>
- <span id="86d1">Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining</span>
- <span id="25dc">scope of a program means the set of variables that are available for use within the program</span>
- <span id="bcaf">global scope is represented by the `window` object in the browser and the `global` object in Node.js</span>
- <span id="7bc3">global variables are available everywhere, and so increase the risk of name collisions</span>
- <span id="5172">local scope is the set of variables available for use within the function</span>
- <span id="ed33">when we enter a function, we enter a new scope</span>
- <span id="c21b">includes functions arguments, local variables declared inside function, and any variables that were already declared when the function is defined (hmm about that last one)</span>
- <span id="51ad">for blocks (denoted by curly braces `{}`, as in conditionals or `for` loops), variables can be block scoped</span>
- <span id="09f1">inner scope does not have access to variables in the outer scope</span>
- <span id="587e">scope chaining — if a given variable is not found in immediate scope, javascript will search all accessible outer scopes until variable is found</span>
- <span id="6ea5">so an inner scope can access outer scope variables</span>
- <span id="5188">but an outer scope can never access inner scope variables</span>

#### Define an arrow function

    let arrowFunction = (param1, param2) => {

    let sum = param1 + param2;

    return sum;

    }

    // with 1 param you can remove parens around parameters let arrowFunction = param =>

    // if your return statement is one line, you can use implied return let arrowFunction = param => param + 1;

    // you don't have to assign to variable, can be anonymous // if you never need to use it again param => param + 1;

#### Given an arrow function, deduce the value of `this` without executing the code

- <span id="0ee6">arrow functions are automatically bound to the context they were declared in.</span>
- <span id="9fb2">unlike regular function which use the context they are invoked in (unless they have been bound using `Function#bind`).</span>
- <span id="683a">if you implement an arrow function as a method in an object the context it will be bound to is NOT the object itself, but the global context.</span>
- <span id="e9e1">so you can't use an arrow function to define a method directly</span>

<!-- -->

    let obj = {
    name: "my object",
    unboundFunc: function () {

    return this.name;

    // this function will be able to be called on different objects

    },
    boundToGlobal: () => { return this.name; // this function, no matter how you call it, will be called // on the global object, and it cannot be rebound // this is because it was defined using arrow syntax },

    makeFuncBoundToObj: function() {
            return () => {
                return this.name;
            }
            // this function will return a function that will be bound
            // to the object where we call the outer method
            // because the arrow syntax is nested inside one of this
            // function's methods, it cannot be rebound
        },

        makeUnboundFunc: function() {
            return function() {
                return this.name;
            }
            //this function will return a function that will still be unbound
        },

        immediatelyInvokedFunc: function() {
            return this.name;
        }(), // this property will be set to the return value of this anonymous function,
        // which is invoked during the object definition;
        // basically, it's a way to check the context inside of an object, at this moment

        innerObj: {
            name: "inner object",
            innerArrowFunc: () => {
                return this.name;
            } // the context inside a nested object is not the parent, it's still
            // the global object. entering an object definition doesn't change the context
        },

        let otherObj = {
            name: "my other object"
        }
    // call unboundFunc on obj, we get "my object" console.log("unboundFunc: ", obj.unboundFunc()); // => "my object" // assign unboundFunc to a variable and call it let newFunc = obj.unboundFunc; // this newFunc will default to being called on global object console.log("newFunc: ",newFunc()); // => undefined // but you could bind it directly to a different object if you wanted console.log("newFunc: ", newFunc.bind(otherObj)()); // "my other object"
    // meanwhile, obj.boundToGlobal will only ever be called on global object console.log("boundToGlobal: ", obj.boundToGlobal()); //=> undefined let newBoundFunc = obj.boundToGlobal; console.log("newBoundFunc: ", newBoundFunc()); // => undefined // even if you try to directly bind to another object, it won't work! console.log("newBoundFunc: ", newBoundFunc.bind(otherObj)()); // => undefined
    // let's make a new function that will always be bound to the context // where we call our function maker let boundFunc = obj.makeFuncBoundToObj();// note that we're invoking, not just assigning console.log("boundFunc: ", boundFunc()); // => "my object" // we can't rebind this function console.log("boundFunc: ", boundFunc.bind(otherObj)()) // =>"my object"
    // but if I call makeFuncBoundToObj on another context // the new bound function is stuck with that other context let boundToOther = obj.makeFuncBoundToObj.bind(otherObj)(); console.log("boundToOther: ", boundToOther()); // => "my other object" console.log("boundToOther: ", boundToOther.bind(obj)()) // "my other object"
    // the return value of my immediately invoked function // shows that the context inside of the object is the // global object, not the object itself // context only changes inside a function that is called // on an object console.log("immediatelyInvokedFunc: ", obj.immediatelyInvokedFunc); // => undefined
    // even though we're inside a nested object, the context is // still the same as it was outside the outer object // in this case, the global object console.log("innerArrowFunc: ", obj.innerObj.innerArrowFunc()); // => undefined

    }

    -Implement a closure and explain how the closure effects scope
        -
        a closure is "the combination of a function and the lexical environment within which that function was declared" -
        alternatively, "when an inner function uses or changes variables in an outer function" -
        closures have access to any variables within their own scope + scope of outer functions + global scope— the set of all these available variables is "lexical environemnt" -
        closure keeps reference to all variables ** even
    if the outer
    function has returned **
        -each
    function has a private mutable state that cannot be accessed externally
        -
        the inner
    function will maintain a reference to the scope in which it was declared.so it has access to variables that were initialized in any outer scope— even
    if that scope
        -
        if a variable exists in the scope of what could have been accessed by a
    function(e.g.global scope, outer
        function, etc), does that variable wind up in the closure even
    if it never got accessed ?
        -
        if you change the value of a variable(e.g.i++) you will change the value of that variable in the scope that it was declared in

        ``
    `javascript
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

#### Define a method that references `this` on an object literal

- <span id="ae61">when we use `this` in a method it refers to the object that the method is invoked on</span>
- <span id="29a2">it will let you access other pieces of information from within that object, or even other methods</span>
- <span id="c41d">method style invocation — `object.method(args)` (e.g. built in examples like `Array#push`, or `String#toUpperCase`)</span>
- <span id="c99d">context is set every time we invoke a function</span>
- <span id="fa43">function style invocation sets the context to the global object no matter what</span>
- <span id="8cc1">being inside an object does not make the context that object! you still have to use method-style invocation</span>
- <span id="f578">Utilize the built in `Function#bind` on a callback to maintain the context of this</span>
- <span id="26ba">when we call bind on a function, we get an exotic function back — so the context will always be the same for that new function</span>

<!-- -->

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

    -`bind`
       can also work with arguments, so you can have a version of a
       function with particular arguments and a particular context.the first arg will be the context aka the `this`
       you want it to use.the next arguments will be the functions arguments that you are binding -
           if you just want to bind it to those arguments in particular, you can use `null`
       as the first argument, so the context won 't be bound, just the arguments -
           Given a code snippet, identify what `this`
       refers to
           -
           important to recognize the difference between scope and context -
           scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope(which itself has pointers to new scopes until you reach the global scope.so you can think about a whole given block 's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it) -
               context refers to the value of the `this`
               keyword -
               the keyword `this`
               exists in every
               function and it evaluates to the object that is currently invoking that
               function -so the context is fairly straightforward when we talk about methods being called on specific objects -
               you could, however, call an object 's method on something other than that object, and then this would refer to the context where/how it was called, e.g.
               ``
               `javascript
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

### CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP

- <span id="b960">could throw an error if it expects this to have some other method or whatever that doesn't exist</span>
- <span id="1880">you could also overwrite values or assign values to exist in a space where they should not exist</span>
- <span id="c9f0">if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object</span>

<!-- -->

    let cat = {
      purr: function () {
      console.log("meow");
      },
      purrMore: function () {
      this.purr();
      },
      };
      global.setTimeout(cat.purrMore, 5000); // 5 seconds later: TypeError: this.purr is not a function

we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined

    let sayMeow = cat.purrMore; console.log(sayMeow()); // TypeError: this.purr is not a function

    // we can use the built in Function.bind to ensure our context, our this , // is the cat object let boundCat = sayMeow.bind(cat);

    boundCat(); // prints "meow"

    -`bind`
       can also work with arguments, so you can have a version of a
       function with particular arguments and a particular context.the first arg will be the context aka the `this`
       you want it to use.the next arguments will be the functions arguments that you are binding -
           if you just want to bind it to those arguments in particular, you can use `null`
       as the first argument, so the context won 't be bound, just the arguments -
           Given a code snippet, identify what `this`
       refers to
           -
           important to recognize the difference between scope and context -
           scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope(which itself has pointers to new scopes until you reach the global scope.so you can think about a whole given block 's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it) -
               context refers to the value of the `this`
               keyword -
               the keyword `this`
               exists in every
               function and it evaluates to the object that is currently invoking that
               function -so the context is fairly straightforward when we talk about methods being called on specific objects -
               you could, however, call an object 's method on something other than that object, and then this would refer to the context where/how it was called, e.g.
               ``
               `javascript
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

- <span id="48ab">CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!</span>
- <span id="857d">could throw an error if it expects this to have some other method or whatever that doesn't exist</span>
- <span id="e09e">you could also overwrite values or assign values to exist in a space where they should not exist</span>
- <span id="b6e0">if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object</span>

> we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined
