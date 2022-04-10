Absolutely Everything You Could Need To Know About How JavaScript Works.
========================================================================

Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

------------------------------------------------------------------------

### Absolutely Everything You Could Need To Know About How JavaScript Works.

#### Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

#### But first a little bit of mildly shameful self promotion:

> (self promotion ends after the line denoted by a bunch of pictures of my dog🐕 )

> (Followed by a brief introduction to JavaScript for beginners)

> (Finally the main content / resources / imbedded YouTube links)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*huxNcspoDvOfqxvn.gif" class="graf-image" /></figure>### My Blog:

### Discover More:

**Web-Dev-Hub**  

*Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…*bgoonz-blog.netlify.app<a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/600/1*_J5NcnQmHmPDBvZodMmyaA.png" class="graf-image" /></figure>***This is a work in progress and may be broken or hosted elsewhere at some time in the future.***

Related posts:

**JS Modules**  

*A module is a reusable piece of code that encapsulates implementation details and exposes a public API so it can be…*dev.to<a href="https://dev.to/bgoonz/js-modules-4c4d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Closures In JavaScript**  

*Answer A closure is a function defined inside another function and has access to its lexical scope even when it is…*dev.to<a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A list of all of my articles to link to future posts**  

**The Complete JavaScript Reference Guide**  

*You will want to bookmark this*javascript.plainenglish.io<a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>### The Beginner’s Guide To JavaScript

> This is a quick intro for complete beginners … skip below for more advanced content and resources! (below the next photo montage of my dog)

### Skip The Following **↓** To Get To Main Content!!

<figure><img src="https://cdn-images-1.medium.com/max/600/1*HCYn5Uz_jZ6uRjgp_NA5Yw.png" class="graf-image" /></figure>**If you wanna skip this section you’ll find the main content about 10% of the way down the page… it will look like this:**

<figure><img src="https://cdn-images-1.medium.com/max/600/0*iHxLNzz1MOZACC5u.png" class="graf-image" /></figure>### The Number Data Type

The **number** data type in JS is used to represent any numerical  
values, including integers and decimal numbers. **Basic Arithmetic Operators** are the symbols that perform particular operations.

-   <span id="205d">**+** (addition)</span>
-   <span id="1df4">**-** (subtraction)</span>
-   <span id="f17b">**asterisk** (multiplication)</span>
-   <span id="ed52">**/** (division)</span>
-   <span id="d3a6">**%** (modulo)</span>

JS evaluates more complex expressions using the general math order of  
operations aka PEMDAS.

-   <span id="4923">**PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.</span>
-   <span id="e245">*To force a specific order of operation, use the group operator ( ) around a part of the expression.*</span>

**Modulo** : Very useful operation to check divisibility of numbers,  
check for even & odd, whether a number is prime, and much more!  
*(Discrete Math concept, circular problems can be solved with modulo)*

-   <span id="9608">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.</span>
-   <span id="3b00">`console.log(7 % 10); // => 7;`</span>

### The String Data Type

The **string** data type is a primitive data type that used to represent  
textual data.

-   <span id="792d">can be wrapped by either **single** or **double** quotation marks, *best to choose one and stick with it for consistency*.</span>
-   <span id="4f91">If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.</span>

<!-- -->

    "That's a great string"; (valid)
    'Shakespeare wrote, "To be or not to be"'; (valid)
    'That's a bad string'; (invalid)

-   <span id="a54b">Alt. way to add other quotes within strings is to use template literals.</span>

### `This is a template literal`

`${function} // use ${} to invoke functions within.`

> **.length** : property that can be appended to data to return the length.

> empty strings have a length of zero.

> **indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].

    console.log("bootcamp"[0]); // => "b"
    console.log("bootcamp"[10]); // => "undefined"
    console.log("boots"[1 * 2]); // => "o"
    console.log("boots"["boot".length - 1]); // => "t"

-   <span id="bcc3">we can pass expressions through the brackets as well since JS always evaluates expressions first.</span>
-   <span id="f60b">The index of the last character of a string is always one less than it’s length.</span>
-   <span id="5329">**indexOf()** : method used to find the first index of a given character within a string.</span>
-   <span id="6813">`console.log("bagel".indexOf("b")); // => 0 console.log("bagel".indexOf("z")); // => -1`</span>
-   <span id="262e">**if the character inside the indexOf() search does not exist in the string, the output will be -1.**</span>
-   <span id="0646">the indexOf() search will return the first instanced index of the the char in the string.</span>
-   <span id="15e0">**concatenate** : word to describe joining strings together into a single string.</span>

### The Boolean Data Type

The **Boolean** data type is the simplest data type since there are only  
two values: **true** and **false**.

-   <span id="62d6">**Logical Operators** (Boolean Operators) are used to establish logic in our code.</span>
-   <span id="bae2">**!** (not) : reverses a Boolean value.</span>

`console.log(!true); // => false console.log(!!false); // => false`

-   <span id="71d9">**&&** (and) **Truth Table**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Y4qzqSB0C-9AmtXf.png" class="graf-image" /></figure>-   <span id="c706">**Logical Order of Operations** : JS will evaluate !, then &&, then ||.</span>
-   <span id="1e21">**De Morgan’s Law** : Common mistake in Boolean logic is incorrectly distributing ! across parentheses.</span>
-   <span id="2e3e">`!(A || B) === !A && !B; !(A && B) === !A || !B;`</span>
-   <span id="350f">In summary, to correctly distribute ! across parentheses we must also flip the operation within.</span>

### Comparison Operators

All comparison operators will result in a Boolean output.

**The relative comparators**

-   <span id="0d1c">**&gt;** (greater than)</span>
-   <span id="77dd">**&lt;** (less than)</span>
-   <span id="2041">**&gt;=** (greater than or equal to)</span>
-   <span id="55fd">**&lt;=** (less than or equal to)</span>
-   <span id="1b7c">**===** (equal to)</span>
-   <span id="09a6">**!==** (not equal to)</span>

> Fun Fact: "a” &lt; "b” is considered valid JS Code because string  
> comparisons are compared lexicographically (meaning dictionary order),  
> so "a” is less than "b” because it appears earlier!

> If there is ever a standstill comparison of two string  
> lexicographically (i.e. app vs apple) the comparison will deem the  
> shorter string lesser.

**Difference between == and ===**

-   <span id="3fec">**===** : Strict Equality, will only return true if the two comparisons are entirely the same.</span>
-   <span id="224d">**==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)</span>

### Variables

Variables are used to store information to be referenced and manipulated  
in a program.

-   <span id="e084">We initialize a variable by using the **let** keyword and a **=** single equals sign (assignment operator).</span>
-   <span id="92ec">`let bootcamp = "Lambda"; console.log(bootcamp); // "Lambda"`</span>
-   <span id="f5af">JS variable names can contain any alphanumeric characters,  
    underscores, or dollar signs (cannot being with a number).</span>
-   <span id="5288">If you do not declare a value for a variable, undefined is  
    automatically set.</span>
-   <span id="5f49">`let bootcamp; console.log(bootcamp); // undefined`</span>
-   <span id="ea4b">We can change the value of a previously declared variable (let, not  
    const) by re-assigning it another value.</span>
-   <span id="ef75">**let** is the updated version of **var**; there are some  
    differences in terms of hoisting and global/block scope — will be  
    covered later in the course (common interview question!)</span>

**Assignment Shorthand**

    let num = 0;num += 10; // same as num = num + 10num -= 2; // same as num = num - 2num /= 4; // same as num = num / 4num *= 7; // same as num = num * 7

-   <span id="7ff5">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>
-   <span id="2798">**declaration** : process of simply introducing a variable name.</span>
-   <span id="ad51">**initialization** : process of both declaring and assigning a variable on the same line.</span>

### Functions

A function is a procedure of code that will run when called. Functions  
are used so that we do not have to rewrite code to do the same thing  
over and over. (Think of them as ‘subprograms’)

-   <span id="01bb">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="963b">Includes three things:</span>
-   <span id="32df">Name of the function.</span>
-   <span id="7930">A list of *parameters* ()</span>
-   <span id="145e">The code to execute {}</span>
-   <span id="37c0">**Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)</span>
-   <span id="f3cc">JS evaluates code top down, left to right.</span>
-   <span id="cf9c">When we execute a declared function later on in our program we refer to this as **invoking** our function.</span>
-   <span id="4374">Every function in JS returns undefined unless otherwise specified.</span>
-   <span id="3bb7">When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.</span>
-   <span id="0ce8">When naming functions in JS always use camelCase and name it something appropriate. &gt; Great code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!</span>

### Parameters and Arguments

-   <span id="38d3">**Parameters** : Comma separated variables specified as part of a function’s declaration.</span>
-   <span id="ecef">**Arguments** : Values passed to the function when it is invoked.</span>
-   <span id="a836">*If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work.*</span>
-   <span id="a53a">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>END OF INTRO FOR BEGINNERS (MAIN ARTICLE BELOW)

### ↓↓**Absolutely Everything You Could Need To Know About JavaScript**↓↓

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fOaTsnCJCYc3wD4x" class="graf-image" /></figure>**leonardomso/33-js-concepts**  

*This repository was created with the intention of helping developers master their concepts in JavaScript. It is not a…*github.com<a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Call stack - MDN Web Docs Glossary: Definitions of Web-related terms | MDN**  

*A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more**  

*Web developers or Front end engineers, as that’s what we like to be called, nowadays do everything right from acting as…*medium.com<a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding the JavaScript call stack**  

*The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript: What Is The Execution Context? What Is The Call Stack?**  

*What is the Execution Context in Javascript? I bet you don’t know the answer. What are the most basic components of a…*web.archive.org<a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*b31hiO4ynbDLRrXWEFF4aQ.png" class="graf-image" /></figure>**Understanding Execution Context and Execution Stack in Javascript**  

*Understanding execution context and stack to become a better Javascript developer.*blog.bitsrc.io<a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How JavaScript works: an overview of the engine, the runtime, and the call stack**  

*As JavaScript is getting more and more popular, teams are leveraging its support on many levels in their stack …*blog.sessionstack.com<a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.**  

*"JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with…*medium.com<a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScript - ui.dev**  

*It may seem surprising, but in my opinion the most important and fundamental concept to understanding the JavaScript…*tylermcginnis.com<a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How JavaScript Works: An Overview of JavaScript Engine, Heap, and Call Stack**  

*Hello everyone 👋, I hope you are doing great. So, today you are going to learn An Overview of JavaScript Engine, Heap…*dev.to<a href="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Fundamental Data Structures In JavaScript**  

*Data structures in JavaScript*medium.com<a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Here’s a live code editor where you can mess with any of the examples…

<span class="graf-dropCap">H</span>ere’s a live code editor where you can mess with any of the examples…

#### Coding practice

-   <span id="824c"><a href="https://leetcode.com/" class="markup--anchor markup--li-anchor">LeetCode</a></span>
-   <span id="a528"><a href="https://www.interviewbit.com/" class="markup--anchor markup--li-anchor">InterviewBit</a></span>
-   <span id="fa41"><a href="https://codility.com/" class="markup--anchor markup--li-anchor">Codility</a></span>
-   <span id="6c61"><a href="https://www.hackerrank.com/" class="markup--anchor markup--li-anchor">HackerRank</a></span>
-   <span id="dff6"><a href="https://projecteuler.net/" class="markup--anchor markup--li-anchor">Project Euler</a></span>
-   <span id="b2dd"><a href="https://spoj.com/" class="markup--anchor markup--li-anchor">Spoj</a></span>
-   <span id="c8e8"><a href="https://code.google.com/codejam/contests.html" class="markup--anchor markup--li-anchor">Google Code Jam practice problems</a></span>
-   <span id="e8bb"><a href="https://www.hackerearth.com/" class="markup--anchor markup--li-anchor">HackerEarth</a></span>
-   <span id="e803"><a href="https://www.topcoder.com/" class="markup--anchor markup--li-anchor">Top Coder</a></span>
-   <span id="294e"><a href="https://www.codechef.com/" class="markup--anchor markup--li-anchor">CodeChef</a></span>
-   <span id="9c05"><a href="https://www.codewars.com/" class="markup--anchor markup--li-anchor">Codewars</a></span>
-   <span id="356e"><a href="https://codesignal.com/" class="markup--anchor markup--li-anchor">CodeSignal</a></span>
-   <span id="2d20"><a href="http://codekata.com/" class="markup--anchor markup--li-anchor">CodeKata</a></span>
-   <span id="d3bf"><a href="https://www.firecode.io/" class="markup--anchor markup--li-anchor">Firecode</a></span>

### Dependent on data

> *Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity.*

-   <span id="bc8d">**The best-case complexity: when the data looks the best**</span>
-   <span id="8b06">**The worst-case complexity: when the data looks the worst**</span>
-   <span id="881c">**The average-case complexity: when the data looks average**</span>

### Big O notation

The complexity is usually expressed with the Big O notation. The wikipedia page about this subject is pretty complex but you can find here a good summary of the different complexity for the most famous data structures and sorting algorithms.

### The Array data structure

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Qk3UYgeqXamRrFLR.gif" class="graf-image" /></figure>### Definition

An Array data structure, or simply an Array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. The simplest type of data structure is a linear array, also called one-dimensional array. From Wikipedia

Arrays are among the oldest and most important data structures and are used by every program. They are also used to implement many other data structures.

**JavaScript data types and data structures - JavaScript | MDN**  

*Programming languages all have built-in data structures, but these often differ from one language to another. This…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How numbers are encoded in JavaScript**  

*Edit description*2ality.com<a href="http://2ality.com/2012/04/number-encoding.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Here is what you need to know about JavaScript’s Number type**  

*Why 0.1+0.2 IS NOT equal to 0.3 and 9007199254740992 IS equal to 9007199254740993*medium.com<a href="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What Every JavaScript Developer Should Know About Floating Point Numbers**  

*After I gave my talk on JavaScript (really, I was there trying to shamelessly plug my book - Underhanded JavaScript and…*blog.chewxy.com<a href="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**The Secret Life of JavaScript Primitives**  

*You may not know it but, in JavaScript, whenever you interact with string, number or boolean primitives you enter a…*javascriptweblog.wordpress.com<a href="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### <a href="https://javascript.info/primitives-methods#a-primitive-as-an-object" class="markup--anchor markup--h3-anchor">A primitive as an object</a>

Here’s the paradox faced by the creator of JavaScript:

-   <span id="95d1">There are many things one would want to do with a primitive like a string or a number. It would be great to access them using methods.</span>
-   <span id="10fe">Primitives must be as fast and lightweight as possible.</span>

The solution looks a little bit awkward, but here it is:

1.  <span id="4506">Primitives are still primitive. A single value, as desired.</span>
2.  <span id="7880">The language allows access to methods and properties of strings, numbers, booleans and symbols.</span>
3.  <span id="be72">In order for that to work, a special "object wrapper” that provides the extra functionality is created, and then is destroyed.</span>

The "object wrappers” are different for each primitive type and are called: `String`, `Number`, `Boolean` and `Symbol`. Thus, they provide different sets of methods.

For instance, there exists a string method <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase" class="markup--anchor markup--p-anchor">str.toUpperCase()</a> that returns a capitalized `str`.

Here’s how it works:

    let str = "Hello";

    alert( str.toUpperCase() ); // HELLO

Simple, right? Here’s what actually happens in `str.toUpperCase()`:

1.  <span id="5a30">The string `str` is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like `toUpperCase()`.</span>
2.  <span id="7659">That method runs and returns a new string (shown by `alert`).</span>
3.  <span id="8c3f">The special object is destroyed, leaving the primitive `str` alone.</span>

So primitives can provide methods, but they still remain lightweight.

The JavaScript engine highly optimizes this process. It may even skip the creation of the extra object at all. But it must still adhere to the specification and behave as if it creates one.

**Primitive Types | Flow**  

*JavaScript has a number of different primitive types ( MDN): The primitive types appear in the language as either…*flow.org<a href="https://flow.org/en/docs/types/primitives/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**(Not) Everything in JavaScript is an Object**  

*This was originally published on The Brewing Press For those who just wants the answers, feel free to jump to the…*dev.to<a href="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Objects In JavaScript**  

*The object is a data structure that stores other data, similar to how an array stores elements.*medium.com<a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Diving Deeper in JavaScripts Objects**  

*A Closer Look at JavaScript Object Descriptors*blog.bitsrc.io<a href="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The differences between Object.freeze() vs Const in JavaScript**  

*ES6 has brought several new features and methods into JavaScript since its release. These features have better improved…*medium.com<a href="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Explaining Value vs. Reference in Javascript**  

*A simple look at computer memory explains what’s happening*codeburst.io<a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### DOES IT MUTATE:

<a href="https://doesitmutate.xyz/" class="markup--anchor markup--p-anchor">LINK….</a>

### <a href="https://doesitmutate.xyz/concat" class="markup--anchor markup--h3-anchor">.concat</a>

no mutation

### Description

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    Array.prototype.concat ( [ item1 [ , item2 [ , … ] ] ] )

**Array.prototype.concat() - JavaScript | MDN**  

*The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = ['a', 'b', 'c'];
    var array2 = ['d', 'e', 'f'];

    console.log(array1.concat(array2));
    // expected output: Array ["a", "b", "c", "d", "e", "f"]

#### <a href="https://doesitmutate.xyz/copywithin" class="markup--anchor markup--h4-anchor">.copyWithin()</a>

**mutates**

### Description

The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

    arr.copyWithin(target)
    arr.copyWithin(target, start)
    arr.copyWithin(target, start, end)

**Array.prototype.copyWithin() - JavaScript | MDN**  

*The copyWithin() method shallow copies part of an array to another location in the same array and returns it without…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### Example

    var array1 = ['a', 'b', 'c', 'd', 'e'];

    // copy to index 0 the element at index 3
    console.log(array1.copyWithin(0, 3, 4));
    // expected output: Array ["d", "b", "c", "d", "e"]

    // copy to index 1 all elements from index 3 to the end
    console.log(array1.copyWithin(1, 3));
    // expected output: Array ["d", "d", "e", "d", "e"]

### <a href="https://doesitmutate.xyz/entries" class="markup--anchor markup--h3-anchor">.entries()</a>

#### no mutation

### Description

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

    a.entries()

**Array.prototype.entries() - JavaScript | MDN**  

*The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = ['a', 'b', 'c'];

    var iterator1 = array1.entries();

    console.log(iterator1.next().value);
    // expected output: Array [0, "a"]

    console.log(iterator1.next().value);
    // expected output: Array [1, "b"]

### <a href="https://doesitmutate.xyz/every" class="markup--anchor markup--h3-anchor">.every</a>

#### no mutation

### Description

The every() method tests whether all elements in the array pass the test implemented by the provided function.

    Array.prototype.every ( callbackfn [ , thisArg ] )

**Array.prototype.every() - JavaScript | MDN**  

*The every() method tests whether all elements in the array pass the test implemented by the provided function. It…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    function isBelowThreshold(currentValue) {
      return currentValue < 40;
    }

    var array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true

### <a href="https://doesitmutate.xyz/fill" class="markup--anchor markup--h3-anchor">.fill()</a>

#### mutates

### Description

The fill() method fills all the elements of an array from a start index to an end index with a static value.

    arr.fill(value)
    arr.fill(value, start)
    arr.fill(value, start, end)

**Array.prototype.fill() - JavaScript | MDN**  

*The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example :

    var array1 = [1, 2, 3, 4];

    // fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));
    // expected output: [1, 2, 0, 0]

    // fill with 5 from position 1
    console.log(array1.fill(5, 1));
    // expected output: [1, 5, 5, 5]

    console.log(array1.fill(6));
    // expected output: [6, 6, 6, 6]

### <a href="https://doesitmutate.xyz/filter" class="markup--anchor markup--h3-anchor">.filter</a>

#### no mutation

### Description

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    Array.prototype.filter ( callbackfn [ , thisArg ] )

**Array.prototype.filter() - JavaScript | MDN**  

*The method creates a new array with all elements that pass the test implemented by the provided function. Function is a…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

### <a href="https://doesitmutate.xyz/find" class="markup--anchor markup--h3-anchor">.find()</a>

no mutation

### Description

The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

    arr.find(callback[, thisArg])

**Array.prototype.find() - JavaScript | MDN**  

*The find() method returns the value of the first element in the provided array that satisfies the provided testing…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = [5, 12, 8, 130, 44];

    var found = array1.find(function(element) {
      return element > 10;
    });

    console.log(found);
    // expected output: 12

**Value types, reference types and scope in JavaScript**  

*There are only two things fundamental to JavaScript: objects and functions.*medium.com<a href="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Back to roots: JavaScript Value vs Reference**  

*Let’s look at the concept of Value vs Reference. Every JavaScript developer should know this topic as it’s often the…*medium.com<a href="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Grasp "By Value” and "By Reference” in JavaScript**  

*And learn why it’s crucial to know the difference*hackernoon.com<a href="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Reference and Copy Variables | Hacker Noon**  

*Each programming language has its own peculiarities (and JavaScript has a lot), and today I’m going to talk about…*hackernoon.com<a href="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Primitive vs. Reference Values**  

*Summary: in this tutorial, you will learn the differences between primitive and reference values. In JavaScript, a…*www.javascripttutorial.net<a href="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript by reference vs. by value**  

*I’m looking for some good comprehensive reading material on when JavaScript passes something by value and when by…*stackoverflow.com<a href="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Interview Prep: Primitive vs. Reference Types**  

*original article In a JavaScript interview, they might ask if you understand the difference between primitive and…*dev.to<a href="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What you need to know about Javascript’s Implicit Coercion**  

*Javascript’s implicit coercion simply refers to Javascript attempting to coerce an unexpected value type to the…*dev.to<a href="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript type coercion explained**  

*Know your engines*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Coercion Explained**  

*Along with some practical examples*hackernoon.com<a href="https://hackernoon.com/javascript-coercion-explained-545c895213d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What exactly is Type Coercion in Javascript?**  

*Let’s start with a short intro to type systems which I think will help you understand the general idea of type…*stackoverflow.com<a href="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**https://thedevs.network/**  

*Weak dynamic typing is arguably one of those things everybody likes to pick at about JavaScript. For an elegant dynamic…*thedevs.network<a href="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**getify/You-Dont-Know-JS**  

*A book series on JavaScript. <span class="citation" data-cites="YDKJS">@YDKJS</span> on twitter. Contribute to getify/You-Dont-Know-JS development by creating an…*github.com<a href="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript — Double Equals vs. Triple Equals**  

*Learn equality in JavaScript in 3 minutes*codeburst.io<a href="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Should I use === or == equality comparison operator in JavaScript?**  

*You know there are two different equality comparison operators in JavaScript: the === and == operators, or the triple…*bytearcher.com<a href="https://bytearcher.com/articles/equality-comparison-operator-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**== vs === JavaScript: Double Equals and Coercion | Codementor**  

*The == (double equals or loose equality) operator is an interesting operator. Many avoid it because they don’t know how…*www.codementor.io<a href="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Why Use the Triple-Equals Operator in JavaScript? - Impressive Webs**  

*"Determining whether two variables are equivalent is one of the most important operations in programming.” That’s…*www.impressivewebs.com<a href="https://www.impressivewebs.com/why-use-triple-equals-javascipt/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What is the difference between == and === in JavaScript?**  

*On the surface == and === appear to be functionally the same, so why bother typing an extra character? In this video…*www.oreilly.com<a href="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Why javascript’s typeof always return "object”?**  

*To add in with the others, typeof returns both objects and primitives. There are 5 primitive types in javascript…*stackoverflow.com<a href="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Checking Types in Javascript**  

*Have you ever wondered: what is the correct way to check if a Javascript variable is an Array? Do a Google search and…*tobyho.com<a href="http://tobyho.com/2011/01/28/checking-types-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**How to better check data types in javascript - Webbjocke**  

*To check what data type something has in javascript is not always the easiest. The language itself provides an operator…*webbjocke.com<a href="https://webbjocke.com/javascript-check-data-types/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Tomer Aberbach | Checking for the Absence of a Value in JavaScript**  

*When I first started learning JavaScript I was confused by the seemingly endless ways developers check for the absence…*tomeraberba.ch<a href="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**getify/You-Dont-Know-JS**  

*A book series on JavaScript. <span class="citation" data-cites="YDKJS">@YDKJS</span> on twitter. Contribute to getify/You-Dont-Know-JS development by creating an…*github.com<a href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Functions — Understanding The Basics**  

*Explore Functions in JavaScript — declaration, expressions, invocation, and more.*codeburst.io<a href="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6: var, let and const - The battle between function scope and block scope**  

*In the pre-ES6 era, there was only one way of declaring variables in JavaScript - being the usage of var. var has…*www.deadcoderising.com<a href="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Emulating Block Scope in JavaScript**  

*While there are many issues that trip up developers coming from other languages, variable scoping may be number one…*adripofjavascript.com<a href="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**The Difference Between Function and Block Scope in JavaScript**  

*Back to the basics with the var, let and const variables*josephcardillo.medium.com<a href="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function scopes and block scopes in JavaScript**  

*Is the following line a valid line of JavaScript code?*edgecoders.com<a href="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Scope and Context in JavaScript**  

*Understanding Scope and Context in JavaScript August 16, 2013 JavaScript JavaScript’s implementation of scope and…*ryanmorr.com<a href="http://ryanmorr.com/understanding-scope-and-context-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**JavaScript Scope and Closures**  

*Scopes and closures are important in JavaScript. But, they were confusing for me when I first started. Here’s an…*css-tricks.com<a href="https://css-tricks.com/javascript-scope-closures/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Scope in JavaScript - Telerik Blogs**  

*Scope is an important, yet ambiguous concept in JavaScript. Used correctly, it allows you to leverage good design…*developer.telerik.com<a href="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Chapter 16. Variables: Scopes, Environments, and Closures**  

*Chapter 16. Variables: Scopes, Environments, and Closures This chapter first explains how to use variables and then…*speakingjs.com<a href="http://speakingjs.com/es5/ch16.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Scope in JavaScript**  

*JavaScript has a feature called Scope. Though the concept of scope is not that easy to understand for many new…*scotch.io<a href="https://scotch.io/tutorials/understanding-scope-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**When to use a function declaration vs. a function expression**  

*The differences between them and when to use one or the other.*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A JavaScript Fundamentals Cheat Sheet: Scope, Context, and "this”**  

*Scope Scope refers to where a variable can be accessed within a program. Some variables can be accessed from anywhere…*dev.to<a href="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Quick Tip: Function Expressions vs Function Declarations - SitePoint**  

*This article was peer reviewed by Jeff Mott. Thanks to all of SitePoint’s peer reviewers for making SitePoint content…*www.sitepoint.com<a href="https://www.sitepoint.com/function-expressions-vs-declarations/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Function — Declaration vs Expression**  

*Functions are considered as First Class citizen in JavaScript and it is really important to be clear with the concept…*medium.com<a href="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function Declarations vs. Function Expressions**  

*What is Function Statement/Declarations in JavaScript?*medium.com<a href="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Function Declarations vs. Function Expressions**  

*Lets start with a short quiz. What is alerted in each case?: Question 1: Question 2: Question 3: Question 4: If you…*javascriptweblog.wordpress.com<a href="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Essential JavaScript: Mastering Immediately-invoked Function Expressions**  

*Understanding functions inside out and then learning how to exploit them to write modern, clean JavaScript code is a…*vvkchandra.medium.com<a href="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Do ES6 Modules make the case of IIFEs obsolete? - Hashnode**  

*IIFE was one of the most used patterns in the ES5 standard, as functions were the only way to declare a scoped block of…*hashnode.com<a href="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers**  

*Modern JavaScript development can be overwhelming. When working on a project, you may wonder why all the modern…*www.jvandemo.com<a href="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**16. Modules**  

*Edit description*exploringjs.com<a href="http://exploringjs.com/es6/ch_modules.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**ES modules: A cartoon deep-dive - Mozilla Hacks - the Web developer blog**  

*ES modules bring an official, standardized module system to JavaScript. With the release of Firefox 60 in May, all…*hacks.mozilla.org<a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding ES6 Modules - SitePoint**  

*Almost every language has a concept of modules - a way to include functionality declared in one file within another…*www.sitepoint.com<a href="https://www.sitepoint.com/understanding-es6-modules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**An overview of ES6 Modules in JavaScript**  

*Introduction Until recently if you wanted to take full advantage of modules in JavaScript you needed to make use of…*blog.cloud66.com<a href="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 Modules in Depth**  

*Welcome back to ES6 - "Oh, good. It’s not another article about Unicode” - in Depth series. If you’ve never been around…*ponyfoo.com<a href="https://ponyfoo.com/articles/es6-modules-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 modules, Node.js and the Michael Jackson Solution**  

*JavaScript’s never had a standard way to import and export functionality from a source file to another. Well, it has…*medium.com<a href="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Modules: A Beginner’s Guide**  

*If you’re a newcomer to JavaScript, jargon like "module bundlers vs. module loaders,” "Webpack vs. Browserify” and "AMD…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript modules**  

*This article explains how to use JavaScript modules, how to deploy them responsibly, and how the Chrome team is working…*developers.google.com<a href="https://developers.google.com/web/fundamentals/primers/modules" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**IIFE: Immediately Invoked Function Expressions**  

*IIFE is a function that is declared and invoked at the same time. You create them by using anonymous functions and…*dev.to<a href="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Event Loop Explained**  

*"How is JavaScript asynchronous and single-threaded ?” The short answer is that JavaScript language is single-threaded…*medium.com<a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The JavaScript Event Loop: Explained**  

*With JavaScript approaching near-ubiquity as the scripting language of the web browser, it benefits you to have a basic…*blog.carbonfive.com<a href="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JS: The Event Loop**  

*Due to the amazing quantity of libraries, tools and all kinds of things that make your development easier, a lot of…*hackernoon.com<a href="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding the JavaScript event loop**  

*If you are someone who has heard about the terms event loop, callback queue, concurrency model and call stack but…*www.zeolearn.com<a href="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Event loop in javascript**  

*If you love javascript you’ve need to learn this. One of the deeper aspects of JavaScript is it’s Event Loop. Its…*code.likeagirl.io<a href="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The JavaScript Event Loop**  

*The Event Loop is one of the most important aspects to understand about JavaScript. I’ve programmed for years with…*flaviocopes.com<a href="https://flaviocopes.com/javascript-event-loop/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with…**  

*Welcome to post \# 4 of the series dedicated to exploring JavaScript and its building components. In the process of…*blog.sessionstack.com<a href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Tasks, microtasks, queues and schedules**  

*Edit description*jakearchibald.com<a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Visualising the JavaScript Event Loop with a Pizza Restaurant analogy**  

*Consider a pizza restaurant. There are two types of orders that we currently have from a single customer - one is an…*dev.to<a href="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**✨♻️ JavaScript Visualized: Event Loop**  

*Oh boi the event loop. It’s one of those things that every JavaScript developer has to deal with in one way or another…*dev.to<a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Scheduling: setTimeout and setInterval**  

*Edit description*javascript.info<a href="https://javascript.info/settimeout-setinterval" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Why not to use setInterval**  

*Recently, I came across a requirement where I had to call a function repeatedly after specific time interval, like…*dev.to<a href="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**setTimeout VS setInterval**  

*Intro*develoger.com<a href="https://develoger.com/settimeout-vs-setinterval-cff85142555b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Using requestAnimationFrame**  

*There used to be just one way to do a timed loop in JavaScript: setInterval(). If you needed to repeat something pretty…*css-tricks.com<a href="https://css-tricks.com/using-requestanimationframe/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript’s requestAnimationFrame() method for smooth animations**  

*Updated: Nov 1st, 2017 The modern web of today is filled with sights to behold on every page, where menus slide in and…*www.javascriptkit.com<a href="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Handling time intervals in JavaScript**  

*While working on an Electron app Pomolectron, I needed to handle different time intervals through setInterval()…*www.amitmerchant.com<a href="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Engines -**  

*By Jen Looper Writing code for the Web sometimes feels a little magical in that developers write a sequence of…*www.softwaremag.com<a href="http://www.softwaremag.com/javascript-engines/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code**  

*Before diving deep into the core of Chrome’s V8, first, let’s get our fundamentals down. All of our systems consist of…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding V8’s Bytecode**  

*V8 is Google’s open source JavaScript engine. Chrome, Node.js, and many other applications use V8. This article…*medium.com<a href="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A Brief History of Google’s V8 JavaScript Engine**  

*Javascript has a reputation in developer circles as a terrible language. It’s classless, loosely typed, and plagued by…*www.mediacurrent.com<a href="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript essentials: why you should know how the engine works**  

*This article is also available in Spanish.*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript engine fundamentals: Shapes and Inline Caches**  

*This article describes some key fundamentals that are common to all JavaScript engines - and not just V8, the engine…*mathiasbynens.be<a href="https://mathiasbynens.be/notes/shapes-ics" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**JavaScript engine fundamentals: optimizing prototypes**  

*This article describes some key fundamentals that are common to all JavaScript engines - and not just V8, the engine…*mathiasbynens.be<a href="https://mathiasbynens.be/notes/prototypes" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Elements kinds in V8**  

*Note: If you prefer watching a presentation over reading articles, then enjoy the video below! JavaScript objects can…*v8.dev<a href="https://v8.dev/blog/elements-kinds" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Programming with JS: Bitwise Operations**  

*In this series of articles we take a look at different Computer Science topics from the prism of JavaScript. We’ve…*hackernoon.com<a href="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Using JavaScript’s Bitwise Operators in Real Life**  

*Let’s pretend we’re machine code programmers!*codeburst.io<a href="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Bitwise Operators - w3resource**  

*Bitwise operators perform an operation on the bitwise (0,1) representation of their arguments, rather than as decimal…*www.w3resource.com<a href="https://www.w3resource.com/javascript/operators/bitwise-operator.php" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Bitwise Operators in Javascript**  

*So far the two programming languages we have worked with are Ruby and Javascript. There are many differences between…*medium.com<a href="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript**  

*Bitwise operators, though they take a few minutes to learn, are a fun way to make your code more space and…*medium.com<a href="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How can I understand Bitwise operation in JavaScript?**  

*Answer: Okay, I was going to just write that bitwise operations in JavaScript are the same as in every other language…*www.quora.com<a href="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Document Object Model :: Eloquent JavaScript**  

*Too bad! Same old story! Once you’ve finished building your house you notice you’ve accidentally learned something that…*eloquentjavascript.net<a href="https://eloquentjavascript.net/14_dom.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**How To Understand and Modify the DOM in JavaScript | DigitalOcean**  

*The Document Object Model, usually referred to as the DOM, is an essential part of making websites interactive. It is…*www.digitalocean.com<a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What’s the Document Object Model, and why you should know how to use it.**  

*So, you’ve studied HTML, you’ve created your first tags, learned about CSS, made beautiful forms, amazing buttons…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript DOM Tutorial with Example**  

*Details JavaScript can access all the elements in a webpage making use of Document Object Model (DOM). In fact, the web…*www.guru99.com<a href="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What is the DOM?**  

*A reader recently wrote in asking me what the DOM was. They said they’ve heard it mentioned and alluded to, but aren’t…*css-tricks.com<a href="https://css-tricks.com/dom/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Traversing the DOM with JavaScript**  

*A good JavaScript developer needs to know how to traverse the DOM-it’s the act of selecting an element from another…*zellwk.com<a href="https://zellwk.com/blog/dom-traversals/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**DOM tree**  

*The backbone of an HTML document is tags. According to the Document Object Model (DOM), every HTML tag is an object…*javascript.info<a href="https://javascript.info/dom-nodes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to traverse the DOM in JavaScript**  

*Learn how to navigate your way through the DOM tree.*javascript.plainenglish.io<a href="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Render-tree Construction, Layout, and Paint | Web Fundamentals**  

*The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible…*developers.google.com<a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What, exactly, is the DOM?**  

*The Document Object Model, or the "DOM”, is an interface to web pages. It is essentially an API to the page, allowing…*bitsofco.de<a href="https://bitsofco.de/what-exactly-is-the-dom/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A Vanilla JS Guide On Mastering the DOM**  

*Note: The contents of this post are intended to be introductory and does not include use of any libraries like jQuery…*dev.to<a href="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How To Use Classes in JavaScript | DigitalOcean**  

*JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called…*www.digitalocean.com<a href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Classes — Under The Hood**  

*Javascript classes are nothing but a syntactic sugar over existing prototype based inheritance and constructor…*medium.com<a href="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 Classes - JavaScript January**  

*Object-Oriented Programming (OOP) can be a great way to organize your projects. Introduced with ES6, the javascript…*www.javascriptjanuary.com<a href="https://www.javascriptjanuary.com/blog/es6-classes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Better JavaScript with ES6, Pt. II: A Deep Dive into Classes**  

*Out with the Old, In with the new Let’s be clear about one thing from the start: Under the hood, ES6 classes are not…*scotch.io<a href="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understand the Factory Design Pattern in plain javascript**  

*The simplest way to understand Factory Design Pattern*medium.com<a href="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Factory Functions in JavaScript | Aten Design Group**  

*As we move from an age of jQuery plugins and script drop-ins to a world of CommonJS and modular architectures it’s…*atendesigngroup.com<a href="https://atendesigngroup.com/blog/factory-functions-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Factory Pattern in JS ES6**  

*I’m trying to get the most out of all the new things in ES6 (ES2015). And I’m writing a new library where I need a…*medium.com<a href="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Class vs Factory function: exploring the way forward**  

*ECMAScript 2015 (aka ES6) comes with the class syntax, so now we have two competing patterns for creating objects. In…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How ES6 classes really work and how to build your own**  

*The 6th edition of ECMAScript (or ES6 for short) revolutionized the language, adding many new features, including…*medium.com<a href="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding `super` in JavaScript**  

*With the adoption of ES6/2015 by nearly all browsers (with one notable exception), developers have access to the new…*jordankasper.com<a href="https://jordankasper.com/understanding-super-in-javascript" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**An Easy Guide To Understanding Classes In JavaScript**  

*1. An Introduction To Classes In JavaScript In the previous article in this series we looked at function constructors…*dev.to<a href="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function.prototype.call() - JavaScript | MDN**  

*The value to use as this when calling . Note: In certain cases, may not be the actual value seen by the method. If the…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function.prototype.bind() - JavaScript | MDN**  

*The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function.prototype.apply() - JavaScript | MDN**  

*The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Grokking call(), apply() and bind() methods in JavaScript**  

*These are very important for every aspiring JavaScript Developer, these are used in almost every JavaScript Library or…*levelup.gitconnected.com<a href="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How-to: call() , apply() and bind() in JavaScript | Codementor**  

*In this post, we will be discussing the difference between call(), apply(), and bind() methods of JavaScript functions…*www.codementor.io<a href="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals**  

*Prerequisite: - Understand JavaScript’s "this” With Ease, and Master It. - JavaScript Objects - Understand JavaScript…*javascriptissexy.com<a href="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding the "this” keyword, call, apply, and bind in JavaScript - ui.dev**  

*Before diving into the specifics of the this keyword in JavaScript, it’s important to take a step back and first look…*tylermcginnis.com<a href="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript: call(), apply() and bind()**  

*"this” refresher*medium.com<a href="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The difference between call / apply / bind**  

*JavaScript is a dynamic language, and is flexible enough to let you do things like multiple inheritance. That’s when an…*medium.com<a href="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What the hack is call, apply, bind in JavaScript**  

*Before start looking into call, apply, bind you should understand - how does "this” keyword works in JavaScript. In…*dev.to<a href="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Mastering ‘this’ in JavaScript: Callbacks and bind(), apply(), call() - The New Stack**  

*In Part One of our tutorial on mastering the ‘this’ keyword in JavaScript, we looked at why the concept of ‘this’ can…*thenewstack.io<a href="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript’s apply, call, and bind explained by hosting a cookout**  

*If you have ever been in charge of operating the grill at a family event or party, then you can understand apply, call…*dev.to<a href="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How AND When to use bind, call, and apply in Javascript - Eigen X**  

*In order for you to fully understand bind, call, and apply you have to understand the Javascript concept of this …*www.eigenx.com<a href="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: bind() vs apply() and call()**  

*var fruit = { name: ‘Apple’ }; and this function: function showDetails(size, price) { console.log(this.name + ’ ’ +…*www.hacksparrow.com<a href="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Let me explain to you what is `this`. (Javascript)**  

*Original post: https://www.ycmjason.com/blog/2018/06/15.html this article assumes ‘use strict’ in all context this…*dev.to<a href="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding the "this” Keyword in JavaScript**  

*How the value of "this” is assigned in different scenarios*betterprogramming.pub<a href="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to understand the keyword this and context in JavaScript**  

*As mentioned in one of my earlier articles, mastering JavaScript fully can be a lengthy journey. You may have come…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What is "this” in Javascript ?**  

*While learning JavaScript there are many roadblocks like closures, asynchronous programming, this keywords, etc. These…*dev.to<a href="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**This and Bind In Javascript**  

*If you’re learning Javascript, you’ll no doubt run into the this keyword early on. At first, it appears quite simple…*dev.to<a href="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**3 Techniques for Maintaining Your Sanity Using "This” in JavaScript**  

*Of JavaScript’s many confusing aspects, the keyword this can be one of the most complicated – Here’s a joke about the…*dev.to<a href="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Mastering the JavaScript "this” Keyword**  

*The this keyword is a very important concept in JavaScript, and also a particularly confusing one to both new…*dev.to<a href="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**This binding in JavaScript - 4. New binding**  

*This post ( This binding in JavaScript - 4. New binding) was originally published on Sargalias. In this series we talk…*dev.to<a href="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A quick intro to ‘this’ in JavaScript**  

*Probably one of the most confusing aspects of JavaScript is finding out what ‘this’ means. In this post, I will try to…*dev.to<a href="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Explaining JavaScript ‘this’ to my cat**  

*My cat is not very good at JavaScript (also at many other things), so today I will try to explain this keyword to him…*dev.to<a href="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A conversation with the ‘this’ keyword in Javascript**  

*‘This’ is one of the most confusing concepts in Javascript. Here’s the sad news. It is just as important to understand…*dev.to<a href="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What are call(), apply() and bind() in JavaScript - JS Curious**  

*In JavaScript this refers to the owner object. If you want to attach some extra properties to a function, then you can…*jscurious.com<a href="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding "this” binding in Javascript**  

*In order to understand "this” keyword clearly, we need to go through of how the execution context works at first. Every…*medium.com<a href="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**JavaScript For Beginners: the ‘new’ operator**  

*Preface*codeburst.io<a href="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Let’s demystify JavaScript’s ‘new’ keyword**  

*Over the weekend, I completed Will Sentance’s JavaScript: The Hard Parts. It might not sound like the most glorious way…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Constructor, operator "new”**  

*The regular {…} syntax allows to create one object. But often we need to create many similar objects, like multiple…*javascript.info<a href="https://javascript.info/constructor-new" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript Constructors**  

*The following is a guest post by Faraz Kelhini. Some of this stuff is out of my comfort zone, so I asked Kyle Simpson…*css-tricks.com<a href="https://css-tricks.com/understanding-javascript-constructors/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Beyond `typeof` and `instanceof`: simplifying dynamic type checks**  

*This blog post describes a technique for making instanceof applicable to more values (on the right-hand side)…*2ality.com<a href="http://2ality.com/2017/08/type-right.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What Is the Instanceof Operator in JavaScript?**  

*Learn more about What Is the Instanceof Operator in JavaScript? from DevelopIntelligence. Your trusted developer…*appendto.com<a href="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function and Object, instances of each other**  

*Explaining why Function is an instance of Object, and why Object is an instance of Function*javascriptrefined.io<a href="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Inheritance and the prototype chain - JavaScript | MDN**  

*JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript : Prototype vs Class**  

*Let’s see how classes in JS are not what you think they are.*medium.com<a href="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-prototype-cb29d82b8809" class="markup--anchor markup--p-anchor">https://codeburst.io/javascript-prototype-cb29d82b8809</a>

**Prototype in Javascript | Codementor**  

*By default every function has a property name as prototype which is EMPTY ( by default). We can add properties and…*www.codementor.io<a href="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Prototypes in JavaScript**  

*In this post, we will discuss what are prototypes in JavaScript, how they help JavaScript in achieving the concepts of…*betterprogramming.pub<a href="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Prototype in JavaScript: it’s quirky, but here’s how it works**  

*The following four lines are enough to confuse most JavaScript developers:*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript: Prototype and Inheritance**  

*Due to the amazing quantity of libraries, tools and all kinds of things that make your development easier, a lot of…*hackernoon.com<a href="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Classes (ES5) and Prototypal Inheritance in JavaScript**  

*In a nutshell the above snippet creates a Person class that can have multiple instances. By convention functional…*dev.to<a href="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**prototype, **proto** and Prototypal inheritance in JavaScript**  

*This post was originally published on my website If you have spent some time with JavaScript, chances are that you have…*dev.to<a href="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Prototypal inheritance**  

*In programming, we often want to take something and extend it. For instance, we have a user object with its properties…*javascript.info<a href="https://javascript.info/prototype-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How To Work with Prototypes and Inheritance in JavaScript | DigitalOcean**  

*JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized…*www.digitalocean.com<a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Master JavaScript Prototypes & *Inheritance***  

Inheritancecodeburst.io<a href="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript’s Prototypal Inheritance Explained Using CSS**  

*Prototypal inheritance is arguably the least understood aspect of JavaScript. Well the good news is that if you…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Demystifying ES6 Classes And Prototypal Inheritance**  

*In the early history of the JavaScript language, a cloud of animosity formed over the lack of a proper syntax for…*scotch.io<a href="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Intro To Prototypal Inheritance - JS**  

*In this article I will try to give an introduction to protypal inheritance. As an "optional” pre-requisite, you can…*dev.to<a href="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Let’s Build Prototypal Inheritance in JS**  

*The idea for this post is pretty simple. I want to some extent build and with that, illustrate how prototypes work in…*dev.to<a href="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Objects, Prototypes and Classes in JavaScript**  

*JavaScript is based on a simple object-oriented programming model with objects being a fundamental part of the…*dev.to<a href="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The magical world of JavaScript prototypes**  

*How many times have we heard "JavaScript is not an Object-Oriented language, it’s Prototype-oriented”? It turns out…*dev.to<a href="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Prototypal Inheritance In JavaScript**  

*What Is Object-oriented Programming (OOP) Classical vs Prototypal Inheritance The Prototype Object And The Prototype…*dev.to<a href="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Object.create() - JavaScript | MDN**  

*The Object.create() method creates a new object, using an existing object as the prototype of the newly created object…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Object.assign() - JavaScript | MDN**  

*The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Object.create in JavaScript**  

*The Object.create method is one of the methods to create a new object in JavaScript.*medium.com<a href="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Objects | A New Way to Create Objects | HTML Goodies**  

*There are a lot of ways to create Objects in JavaScript, perhaps even more to integrate inheritance into them. Just…*www.htmlgoodies.com<a href="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Basic Inheritance with Object.create**  

*A few issues back we looked at how to implement basic inheritance with constructors. In this issue, we’ll look at how…*adripofjavascript.com<a href="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Object.create( ) In JavaScript - GeeksforGeeks**  

*Object and Object Constructors in JavaScript? In the living world of object-oriented programming we already know the…*www.geeksforgeeks.org<a href="https://www.geeksforgeeks.org/object-create-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding the difference between Object.create() and the new operator.**  

*Why is it important to know the difference?*medium.com<a href="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**JavaScript Object Creation: Patterns and Best Practices - SitePoint**  

*Jeff Mott guides you through a step-by-step approach to JavaScript object creation - from object literals to factory…*www.sitepoint.com<a href="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Dealing With Objects in JavaScript With Object.assign, Object.keys and hasOwnProperty |…**  

*This post is a sort of grab bag to help you explore a few very useful methods to help you manage your objects in…*alligator.io<a href="https://alligator.io/js/dealing-with-objects/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Copying Objects in JavaScript | DigitalOcean**  

*Objects are the fundamental blocks of JavaScript. An object is a collection of properties, and a property is an…*scotch.io<a href="https://scotch.io/bar-talk/copying-objects-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Object.assign()**  

*Veja nesse artigo como utilizar o Object.assign() do ECMAScript 6*codeburst.io<a href="https://codeburst.io/javascript-object-assign-bc9696dcbb6e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to deep clone a JavaScript object**  

*Copying objects in JavaScript can be tricky. Some ways perform a shallow copy, which is the default behavior in most of…*flaviocopes.com<a href="https://flaviocopes.com/how-to-clone-javascript-object/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Object.create(): When and Why to Use**  

*Object.create() is a method available on all JavaScript objects. It takes two arguments: the object you want to copy…*dev.to<a href="https://dev.to/vzing/object-create-when-and-why-to-use-20m9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Functional Programming — map, filter and reduce**  

*Even if you don’t know what functional programming is you’ve probably been using map, filter and reduce just because…*medium.com<a href="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Learn map, filter and reduce in Javascript**  

*The perfect toolset for your venture in Functional Programming*medium.com<a href="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript’s Map, Reduce, and Filter \* Dan Martensen**  

*As engineers we build and manipulate arrays holding numbers, strings, booleans and objects almost everyday. We use them…*danmartensen.svbtle.com<a href="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to Use Map, Filter, and Reduce in JavaScript**  

*Functional programming has been making quite a splash in the development world these days. And for good reason…*code.tutsplus.com<a href="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript — Learn to Chain Map, Filter, and Reduce**  

*Learn how to chain map, filter, and reduce in JavaScript*codeburst.io<a href="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding map, filter and reduce in Javascript**  

*When working on Javascript projects you inevitably come across situations where you have to do some data manipulation…*hackernoon.com<a href="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Functional Programming in JS: map, filter, reduce (Pt. 5)**  

*Note: This is part of the "Javascript and Functional Programming” series on learning functional programming techniques…*hackernoon.com<a href="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Map, Filter, Reduce**  

*JavaScript’s built-in map, filter, and reduce array methods are invaluable to a modern JavaScript developer. First…*wsvincent.com<a href="https://wsvincent.com/functional-javascript-map-filter-reduce/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**JavaScript Arrow Functions: Fat and Concise Syntax in ES6**  

*In this article, you’ll learn all about JavaScript’s arrow function syntax - including some of the gotchas you need to…*www.sitepoint.com<a href="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Arrow Functions for Beginners**  

*Last week I published this post on the keyword this for beginners. One of the topics that wasn’t covered in that…*codeburst.io<a href="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**When (and why) you should use ES6 arrow functions — and when you shouldn’t**  

*Arrow functions (also called "fat arrow functions”) are undoubtedly one of the more popular features of ES6. They…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript — Learn & Understand Arrow Functions**  

*A beginners guide to Arrow Functions in JavaScript*codeburst.io<a href="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**(JavaScript )=&gt; Arrow functions**  

*This post is meant to summarise some of the things someone new to JavaScript and arrow functions needs to know. I do…*medium.com<a href="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Javascript.reduce()**  

*The Mutli-Tool of JS*andepaulj.medium.com<a href="https://andepaulj.medium.com/javascript-reduce-79aab078da23" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Why you should replace forEach with map and filter in JavaScript - Gofore**  

*TL;DR Prefer map and filter over forEach when you need to copy an array or part of it to a new one. One of the best…*gofore.com<a href="https://gofore.com/en/why-you-should-replace-foreach/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Simplify your JavaScript - Use .map(), .reduce(), and .filter()**  

*If you haven’t heard of .map(), .reduce(), and .filter() in JavaScript, you might want to learn to use it!*medium.com<a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript’s Reduce Method Explained By Going On a Diet**  

*The reduce method in JavaScript gives you a simple way to take an array of values and combine them into one value, or…*blog.codeanalogies.com<a href="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Difference between map, filter and reduce in JavaScript**  

*I’ve seen a lot of JS beginners struggle when using map, filter or reduce and don’t know the different use cases of…*medium.com<a href="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Map⇄Filter⇄Reduce↻ | Hacker Noon**  

*Share it on LinkedIn! Due to that reason we were introduced with these three higher order functions, namely 🗺️Map…*hackernoon.com<a href="https://hackernoon.com/map-filter-reduce-ebbed4be4201" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Finding Your Way With .Map()**  

*At the end of the article is a CodePen that demonstrates the concepts presented here.*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to write your own map, filter and reduce functions in JavaScript**  

*A sneak peek into functional programming and higher order functions in Javascript.*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to Manipulate Arrays in JavaScript**  

*An important part of any programming language. Most times we need to do several operations on arrays, hence this…*www.freecodecamp.org<a href="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**.map(), .filter(), and .reduce()**  

*Originally posted on my blog For the last several weeks I’ve been applying for jobs. Sadly, the startup I was working…*dev.to<a href="https://dev.to/pickleat/map-filter-and-reduce-2efb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Map, Filter and Reduce - Animated**  

*Map, filter and reduce have been around for a long time. They are often seen as part of Functional Programming style.*jstutorial.medium.com<a href="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Map, Filter, Reduce and others Arrays Iterators You Must Know to Become an Algorithms Wizard**  

*In this article we are going to take a close look at some arrays iterators like , , or others methods that use…*dev.to<a href="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to Use JavaScript’s .map, .filter, and .reduce**  

*How to use these three useful JavaScript functions*betterprogramming.pub<a href="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript performance test - for vs for each vs (map, reduce, filter, find).**  

*We all know that for loop are faster than for each or javascript function since under the hood of javascript functions…*towardsdatascience.com<a href="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Using .map(), .filter() and .reduce() properly 👩🏽‍💻**  

*Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a…*javascript.plainenglish.io<a href="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript and Functional Programming — Pt. 3: Pure Functions**  

*Purity*hackernoon.com<a href="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Master the JavaScript Interview: What is a Pure Function?**  

*Pure functions are essential for a variety of purposes, including functional programming, reliable concurrency, and…*medium.com<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: What Are Pure Functions And Why Use Them?**  

*The first time I heard the term "Pure Function” I was confused. What was wrong with a regular function? Why does it…*medium.com<a href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Pure functions in JavaScript**  

*A pure function doesn’t depend on and doesn’t modify the states of variables out of its scope. Concretely, that means a…*www.nicoespeon.com<a href="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Functional Programming: Pure Functions - SitePoint**  

*This is the second part of a two part series on functional programming in Ruby. Before we explored immutable values…*www.sitepoint.com<a href="https://www.sitepoint.com/functional-programming-pure-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Pure Functions In Javascript**  

*Pure functions in Javascript are kind of Functions where the return value is determined by its parameter passed at call…*appdividend.com<a href="https://appdividend.com/2017/04/10/pure-functions-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Making your JavaScript Pure**  

*Once your website or application goes past a small number of lines, it will inevitably contain bugs of some sort. This…*alistapart.com<a href="https://alistapart.com/article/making-your-javascript-pure" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Arrays, Objects and Mutations**  

*Here are some thoughts on how to avoid mutations when working with arrays and objects in JavaScript by treating them as…*medium.com<a href="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The State of Immutability**  

*Immutability is a hot subject in modern JavaScript. The reason why this topic is so popular now is of course the…*medium.com<a href="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to deal with dirty side effects in your pure functional JavaScript**  

*If you start learning about functional programming, it won’t be long before you come across the idea of pure functions…*jrsinclair.com<a href="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Preventing Side Effects in JavaScript**  

*JavaScript is very dynamic these days but I still see a lot of legacy code, whether it be for optimal backward…*davidwalsh.name<a href="https://davidwalsh.name/preventing-sideeffects-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Wielding Pure Functions in JavaScript and Function Composition**  

*Today, I’d like to share some thoughts on two fundamental concepts in functional programming: Pure functions and…*scotch.io<a href="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Pure Functions**  

*Pure functions are fundamental to functional programming, concurrency, writing testable code, and having deterministic…*wsvincent.com<a href="https://wsvincent.com/javascript-pure-functions/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Functional programming paradigms in modern JavaScript: Pure functions**  

*JavaScript is one of the most popular programming languages out there. It runs in the browser, on desktop, on mobile…*hackernoon.com<a href="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Javascript Mutation and Pure Functions**  

*Boost your app performance by better understanding Mutation and Pure Functions in JS*blog.bitsrc.io<a href="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Functional-ish JavaScript**  

*Functional programming is a great discipline to learn and apply when writing JavaScript. Writing stateless, idempotent…*bluepnume.medium.com<a href="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Introduction to events - Learn web development | MDN**  

*Events are actions or occurrences that happen in the system you are programming, which the system tells you about so…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Bubbling and capturing**  

*Let’s start with an example. This handler is assigned to , but also runs if you click any nested tag like or : Isn’t it…*javascript.info<a href="https://javascript.info/bubbling-and-capturing" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.youtube.com/watch?v=Jh_Uzqzz_wM" class="markup--anchor markup--p-anchor">https://www.youtube.com/watch?v=Jh_Uzqzz_wM</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" class="markup--anchor markup--p-anchor">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures</a>  
<a href="https://javascript.info/closure" class="markup--anchor markup--p-anchor">https://javascript.info/closure</a>

**I never understood JavaScript closures**  

*Until someone explained it to me like this …*medium.com<a href="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understand JavaScript Closures With Ease**  

*Closures allow JavaScript programmers to write better code. Creative, expressive, and concise. We frequently use…*javascriptissexy.com<a href="http://javascriptissexy.com/understand-javascript-closures-with-ease/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript Closures**  

*When you’re first learning JavaScript, terms like "closures” may make the language appear mystical and hard to…*codeburst.io<a href="https://codeburst.io/understanding-javascript-closures-da6aab330302" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understand-closures-in-javascript-d07852fa51e7" class="markup--anchor markup--p-anchor">https://codeburst.io/understand-closures-in-javascript-d07852fa51e7</a>

**A simple guide to help you understand closures in JavaScript**  

*Closures in JavaScript are one of those concepts that many struggle to get their heads around. In the following…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript Closures: A Practical Approach**  

*Learning a new language involves a series of steps, whereas its mastery is a product of patience, practice, mistakes…*scotch.io<a href="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript: Closures**  

*Why learn JavaScript in depth?*hackernoon.com<a href="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to use JavaScript closures with confidence**  

*Using closures will be a piece of (chocolate) cake*hackernoon.com<a href="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Closures by Example**  

*At some point you may have run into a problem when executing functions from within a for loop. The first time it…*howchoo.com<a href="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript — Closures and Scope**  

*Looking at JavaScript today, it can be scary as a beginner. People talk about watching out for all the little quirks or…*codeburst.io<a href="https://codeburst.io/javascript-closures-and-scope-3784c75b9290" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Discover the power of closures in JavaScript**  

*Discover Functional JavaScript was named one of the best new Functional Programming books by BookAuthority! A closure…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Simplified JavaScript: Getting Started with Closures**  

*Eric Elliot, in his Medium article Master the JavaScript Interview: What is a Closure?, explains that when he…*code.likeagirl.io<a href="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Closures 101 - Explaining how closures work**  

*So, "closures”, right? That’s a fun one that tends to cause confusion all around. It’s pretty much a given that at some…*reallifejs.com<a href="http://reallifejs.com/the-meat/getting-closure/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Closure, Currying and IIFE in JavaScript**  

*These are some of the concepts of JavaScript where everyone struggle in beginning. Lets try to simplify them bit by…*dev.to<a href="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Closures in JavaScript**  

*Learn How Closures Really Work in JavaScript: hands-on guide*blog.bitsrc.io<a href="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A basic guide to Closures in JavaScript**  

*The Closure is a collection of all variables in scope at the time of function creation. To use closure create a…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Closures: Using Memoization**  

*One of the core tenets of Functional Programming is that a function should return the same value if given the same…*dev.to<a href="https://dev.to/steelvoltage/closures-using-memoization-3597" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A Brief Introduction to Closures and Lexical Scoping in JavaScript**  

*"Writing in ECMAScript language without understanding closure is like writing Java without understanding classes”*betterprogramming.pub<a href="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Demystify Closures**  

*In the previous post we implemented functions, but not about closures. Let’s fix this. Without closures following code…*dev.to<a href="https://dev.to/stereobooster/demystify-closures-5g42" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Scope - JavaScript Concepts**  

*This is part of a series where I try to explain through each of 33 JS Concepts. Originally written on my blog with…*dev.to<a href="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Closures in JavaScript**  

*When you declare a function inside another function, a closure is the new environment created by combining the inner…*dev.to<a href="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What the fuck is a closure? ・ Dan’s JavaScript Glossary**  

*Closures are confusing because they are an "invisible” concept. When you use an object, a variable, or a function, you…*whatthefuck.is<a href="https://whatthefuck.is/closure" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Closures in JavaScript can…**  

*I gain more understanding of a topic when I get to talk/write about it… much to my wife’s horror as she has zero…*dev.to<a href="https://dev.to/brandonleboeuf/closure-in-javascript-49n7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.youtube.com/watch?v=1JsJx1x35c0" class="markup--anchor markup--p-anchor">https://www.youtube.com/watch?v=1JsJx1x35c0</a>

**Higher-Order Functions :: Eloquent JavaScript**  

*Tzu-li and Tzu-ssu were boasting about the size of their latest programs. ‘Two-hundred thousand lines,’ said Tzu-li…*eloquentjavascript.net<a href="https://eloquentjavascript.net/05_higher_order.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Higher-Order Functions in JavaScript - SitePoint**  

*Continuing his look at functional programming in JavaScript, M. David Green examines higher-order functions and how…*www.sitepoint.com<a href="https://www.sitepoint.com/higher-order-functions-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code**  

*Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**First-class and Higher Order Functions: Effective Functional JavaScript**  

*Functions: the killer JavaScript feature we never talk about.*hackernoon.com<a href="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Higher Order Functions in JavaScript**  

*Higher-order functions can be intimidating at first, but they’re not that hard to learn. A higher-order function is…*www.lullabot.com<a href="https://www.lullabot.com/articles/higher-order-functions-in-javascript" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Higher-order Functions - JavaScript Is Sexy**  

*In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a…*javascriptissexy.com<a href="http://javascriptissexy.com/tag/higher-order-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Fun With Higher Order Functions In JavaScript**  

*JavaScript is often referred to as a language with functional programming capabilities because of it’s "higher order…*derickbailey.com<a href="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**pedroapfilho/array-methods**  

*Just a reminder on how to use array methods. Contribute to pedroapfilho/array-methods development by creating an…*github.com<a href="https://github.com/pedroapfilho/high-order-functions" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Higher-Order Functions in JavaScript**  

*Learn What Higher-Order Functions are and how to use them in JavaScript*blog.bitsrc.io<a href="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Higher Order Functions - A pragmatic approach**  

*Its a common saying that functions are the bread and butter of programming, and the basic unit for building reusable…*dev.to<a href="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Recursion in JavaScript**  

*I’m just gonna get this out of the way right up front, because people get really angry otherwise:*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Recursion in JavaScript**  

*One of the many things that JavaScript has going for it is the ability to recursively call functions. This feature is…*medium.com<a href="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Learn and Understand Recursion in JavaScript**  

*I’ll walk you through two popular JS recursion examples in 10 minutes so you can finally understand how recursion works…*codeburst.io<a href="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Recursion in Functional JavaScript - SitePoint**  

*M. David Green demonstrates the powerful, but dizzying concept of recursion by refactoring normal for and while loops…*www.sitepoint.com<a href="https://www.sitepoint.com/recursion-functional-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Programming with JS: Recursion**  

*Understanding data structures, algorithms and basic programming concepts is essential for one to become a better…*hackernoon.com<a href="https://hackernoon.com/programming-with-js-recursion-31371e2bf808" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Anonymous Recursion in JavaScript**  

*Yes, there is such thing, and I thought it would be an interesting example to share. It features: closures…*dev.to<a href="https://dev.to/simov/anonymous-recursion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Recursion, iteration and tail calls in JS**  

*If you’ve been on the business for some time, you have, most likely, come across the definition of recursion, for which…*www.jstips.co<a href="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Intro to Recursion**  

*Recursion can be a difficult concept to wrap your head around, but its definition is rather simple: recursion is when a…*medium.com<a href="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Accio Recursion!: Your New Favorite JavaScript Spell**  

*The spell "Accio” allows a witch or wizard to summon something to them. Casting Accio is just like accessing a value in…*medium.datadriveninvestor.com<a href="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Recursion Explained (with Examples)**  

*"To understand recursion, one must first understand recursion” - Unknown Recursion is a method of solving problems…*dev.to<a href="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Generator - JavaScript | MDN**  

*This object cannot be instantiated directly. Instead, a Generator instance can be returned from a generator function…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 In Depth: Collections - Mozilla Hacks - the Web developer blog**  

*ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the…*hacks.mozilla.org<a href="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 Collections: Using Map, Set, WeakMap, WeakSet - SitePoint**  

*Most major programming languages have several types of data collections. Python has lists, tuples, and dictionaries…*www.sitepoint.com<a href="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Introduction to Maps in JavaScript | DigitalOcean**  

*While this tutorial has content that we believe is of great benefit to our community, we have not yet tested or edited…*alligator.io<a href="https://alligator.io/js/maps-introduction/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Map and Set**  

*Till now, we’ve learned about the following complex data structures: Objects are used for storing keyed collections…*javascript.info<a href="https://javascript.info/map-set-weakmap-weakset" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Maps in ES6 - A Quick Guide**  

*Maps and Sets often get lumped together in articles. They’re both new ES6 collection types with similar interfaces but…*dev.to<a href="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 — Set vs Array — What and when?**  

*What is Set and what is Array?*medium.com<a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 — Map vs Object — What and when?**  

*You may wonder — why Map vs Object but not Map vs Array, or Object vs Set? Well, you can also compare between any of…*medium.com<a href="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6: Working with Sets in JavaScript**  

*In this post we’re continuing to look at features introduced in ES6. Amongst all the cool things happening in ES6, we…*www.deadcoderising.com<a href="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Array vs Set vs Map vs Object — Real-time use cases in Javascript (ES6/ES7)**  

*The internet is a great place to find information, but there is one teeny-tiny problem. You are on a boat in the middle…*codeburst.io<a href="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to create an array of unique values in JavaScript using Sets**  

*Sorry for the verbose title - sometimes things can be explained better with a code example. Imagine you have a…*dev.to<a href="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What You Should Know About ES6 Maps**  

*JavaScript ES6 introduces a new data structure, called maps. Maps are designed as an alternative to using Object…*hackernoon.com<a href="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 Maps in Depth**  

*A very common abuse case of JavaScript objects is hash-maps, where we map string keys to arbitrary values.*ponyfoo.com<a href="https://ponyfoo.com/articles/es6-maps-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What are JavaScript Generators and how to use them**  

*In this article, we’re going to take a look at the generators that were introduced in ECMAScript 6. We’ll see what it…*codeburst.io<a href="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Generators in ES6 JavaScript with Examples**  

*ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). A…*codeburst.io<a href="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Basics Of ES6 Generators**  

*One of the most exciting new features coming in JavaScript ES6 is a new breed of function, called a generator. The name…*davidwalsh.name<a href="https://davidwalsh.name/es6-generators" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**An Introduction to JavaScript Generators**  

*One of the fundamentals of JavaScript is that it is single-threaded, meaning that two pieces of code cannot run at the…*dev.to<a href="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Promise - JavaScript | MDN**  

*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript Promises | DigitalOcean**  

*Javascript Promises can be challenging to understand. Therefore, I would like to write down the way I understand…*scotch.io<a href="https://scotch.io/tutorials/javascript-promises-for-dummies" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Promises in JavaScript**  

*An in-depth look at creating and handling Promises*hackernoon.com<a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Master the JavaScript Interview: What is a Promise?**  

*"Master the JavaScript Interview” is a series of posts designed to prepare candidates for common questions they are…*medium.com<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**An Overview of JavaScript Promises - SitePoint**  

*This article explores JavaScript’s new Promises API, showing how you can leverage promises in your JavaScript…*www.sitepoint.com<a href="https://www.sitepoint.com/overview-javascript-promises/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to use Promises in JavaScript**  

*Promises in JavaScript are a way to handle async calls. Before Promises were introduced in JavaScript ES6, async calls…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Implementing Promises In JavaScript**  

*The thing I love most about programming is the aha! moment when you start to fully understand a concept. Even though it…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Promises explained with simple real life analogies**  

*Talking about promises in layman terms*codeburst.io<a href="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**25. Promises for asynchronous programming**  

*This chapter is an introduction to asynchronous programming via Promises in general and the ECMAScript 6 Promise API in…*exploringjs.com<a href="http://exploringjs.com/es6/ch_promises.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Promises Explained By Gambling At A Casino**  

*We all love the asynchronous capabilities of JavaScript. In fact, we love them so much that sometimes, we overindulge…*blog.codeanalogies.com<a href="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 Promises: Patterns and Anti-Patterns**  

*When I first got started with NodeJS a few years ago, I was mortified by what is now affectionately known as "callback…*medium.com<a href="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**A Simple Guide to ES6 Promises**  

*The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep. — Robert Frost*codeburst.io<a href="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The ES6 Promises**  

*A very helpful feature in ES6*codeburst.io<a href="https://codeburst.io/the-es6-promises-87a979ab27e4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ES6 Promises in Depth**  

*Promises are a very involved paradigm, so we’ll take it slow. Here’s a table of contents with the topics we’ll cover in…*ponyfoo.com<a href="https://ponyfoo.com/articles/es6-promises-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Promises: An In-Depth Approach**  

*"Write down the syntax for promises on this sheet of paper”, is enough to give nightmares to a lot of junior and even…*codeburst.io<a href="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to Write a JavaScript Promise**  

*What is a promise?*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A Coding Writer’s Guide: An Introduction To ES6 Promises**  

*Welcome back to the ‘A Coding Writer’s Guide’ series! If you have been keeping up with this series, you’d know that I…*medium.com<a href="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Reverse engineering - Understanding Promises in JavaScript**  

*We will reverse engineer Promises in JavaScript together with some 90s nostalgia. Tagged with showdev, tutorial…*dev.to<a href="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Converting callbacks to promises**  

*It’s easier to work with Promises (or Async/await) compared to callbacks. This is especially true when you work in…*dev.to<a href="https://dev.to/zellwk/converting-callbacks-to-promises-nhn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Promises: Zero To Hero Plus Cheat Sheet**  

*It’s time, friend. Native JavaScript promises explained how I wish they were explained to me — plus a handy cheat…*medium.com<a href="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Promises - JavaScript concepts**  

*This is part of a series where I try to explain through each of 33 JS Concepts. This part corresponds to Promises…*dev.to<a href="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Promise 101**  

*Knowing how Promise works in javascript will boost your development skill exponentially. Here I will share: I promise…*dev.to<a href="https://dev.to/iggredible/javascript-promise-101-3idl" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Simplify JavaScript Promises**  

*I love promises. Not from people, but from JavaScript. Tweet Quote I love promises. Not from people, but from…*dev.to<a href="https://dev.to/sunnysingh/simplify-javascript-promises-4djb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Lowdown on Promises**  

*A quick and concise guide on how Promises work in JavaScript*medium.com<a href="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**⭐️🎀 JavaScript Visualized: Promises & Async/Await**  

*Ever had to deal with JS code that just… didn’t run the way you expected it to? Maybe it seemed like functions got…*dev.to<a href="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Promises in JavaScript**  

*Callbacks are functions that run after something happens or something completes. If you have to make an asynchronous…*dev.to<a href="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Best Practices for ES6 Promises**  

*ES6 promises are great! Yet… they are still quite painful to deal with. In this article, I share the best practices I…*dev.to<a href="https://dev.to/somedood/best-practices-for-es6-promises-36da" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Async/await**  

*There’s a special syntax to work with promises in a more comfortable fashion, called "async/await”. It’s surprisingly…*javascript.info<a href="https://javascript.info/async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Asynchronous Programming :: Eloquent JavaScript**  

*Who can wait quietly while the mud settles?Who can remain still until the moment of action? Laozi, Tao Te Ching The…*eloquentjavascript.net<a href="https://eloquentjavascript.net/11_async.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**24. Asynchronous programming (background)**  

*This chapter explains foundations of asynchronous programming in JavaScript. It provides background knowledge for the…*exploringjs.com<a href="http://exploringjs.com/es6/ch_async.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding async-await in JavaScript**  

*Rules of thumb and examples for when and how to use async and await*hackernoon.com<a href="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Exploring Async/Await Functions in JavaScript | DigitalOcean**  

*Promises give us an easier way to deal with asynchrony in our code in a sequential manner. Considering that our brains…*alligator.io<a href="https://alligator.io/js/async-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Asynchronous Javascript using Async - Await**  

*Async/await is a relatively new way to write asynchronous code in Javascript. Before we used callbacks and promises…*scotch.io<a href="https://scotch.io/tutorials/asynchronous-javascript-using-async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Modern Asynchronous JavaScript with Async and Await**  

*JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript…*flaviocopes.com<a href="https://flaviocopes.com/javascript-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Asynchronous JavaScript: From Callback Hell to Async and Await**  

*One of the keys to writing a successful web application is being able to make dozens of AJAX calls per page. This is a…*www.toptal.com<a href="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript — ES8 Introducing `async/await` Functions**  

*To gain some perspective on why folks are so excited about the ES8 async/await functions, you have to be familiar with…*medium.com<a href="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to escape async/await hell**  

*async/await freed us from callback hell, but people have started abusing it — leading to the birth of async/await hell.*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding JavaScript’s async await**  

*Let’s suppose we had code like the following. Here I’m wrapping an HTTP request in a Promise. The promise fulfills with…*ponyfoo.com<a href="https://ponyfoo.com/articles/understanding-javascript-async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Async/Await: Serial, Parallel and Complex Flow - TechBrij**  

*If you have experience on ASP.NET MVC then probably you are familiar with async/await keywords in C\#. The same thing is…*techbrij.com<a href="https://techbrij.com/javascript-async-await-parallel-sequence" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**From JavaScript Promises to Async/Await: why bother?**  

*In this tutorial, we will cover why we need async/await when we could achieve the same fit with JavaScript Promises, to…*blog.pusher.com<a href="https://blog.pusher.com/promises-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Flow Control in Modern JS: Callbacks to Promises to Async/Await - SitePoint**  

*JavaScript is regularly claimed to be asynchronous. What does that mean? How does it affect development? How has the…*www.sitepoint.com<a href="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Promises and Why Async/Await Wins the Battle - DZone Performance**  

*Calling the validatePassword() function: The code snippet below shows a full end to end check for validating a password…*dzone.com<a href="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**How to Improve Your Asynchronous JavaScript Code With Async and Await**  

*If you’ve had the chance to observe modern JavaScript code, there are high chances that you’ve seen the async and await…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Making Fetches Easy With Async Await**  

*Asynchronous requests are the source of many common and frustrating bugs in otherwise clean code. Because most of…*medium.com<a href="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**7 Reasons Why JavaScript Async/Await Is Better Than Plain Promises (Tutorial)**  

*Async/await was introduced in NodeJS 7.6 and is currently supported in all modern browsers. I believe it has been the…*dev.to<a href="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Asynchronous Operations in JavaScript**  

*JavaScript comes from a legacy of peril with asynchronous operations. It began with callbacks to make Ajax calls for…*dev.to<a href="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Async/await: A slight design flaw.**  

*My experience with async/await is that it’s amazing for simple cases and fulfils expectations. If your use cases are…*dev.to<a href="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript: Promises or async-await**  

*A set of rules for when to use which*betterprogramming.pub<a href="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Async / Await: From Zero to Hero**  

*I had absolutely no idea what async / await was and learning it was hard as: There’s 27 minutes worth of text to read…*dev.to<a href="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Data Structures in JavaScript**  

*For Frontend Software Engineers*medium.com<a href="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Algorithms and Data Structures in JavaScript**  

*Algorithms and data structures implemented in JavaScript with explanations and links to further readings and YouTube…*itnext.io<a href="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Data Structures: Objects and Arrays**  

*Ever seen some data in square brackets and curly brackets in JavaScript? These are Arrays and Objects respectively. //…*scotch.io<a href="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Data structures in JavaScript**  

*The \#data-structures series is a collection of posts about reimplemented data structures in JavaScript. If you are not…*blog.benoitvallon.com<a href="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Playing with data structures in Javascript — Stack**  

*Javascript is evolving each day. With the rapid growth of frameworks and platforms like React, Angular, Vue, NodeJS…*blog.cloudboost.io<a href="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Little Guide of Queue in JavaScript**  

*A queue is a simple data structure that allows elements to be inserted from one end, called the rear (also called…*hackernoon.com<a href="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**barretlee/algorithms**  

*Detail & Discusion (讨论和细节) All algorithms writing with JavaScript in book ’ Algorithms Fourth Edition’. Run…*github.com<a href="https://github.com/barretlee/algorithms" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**humanwhocodes/computer-science-in-javascript**  

*Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript. …*github.com<a href="https://github.com/nzakas/computer-science-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**jamiebuilds/itsy-bitsy-data-structures**  

*Welcome to Itsy Bitsy Data Structures! In here are super simplified examples of many of the common data structures…*github.com<a href="https://github.com/jamiebuilds/itsy-bitsy-data-structures" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**About DEV - DEV Community**  

*DEV is a community of software developers getting together to help one another out. The software industry relies on…*dev.to<a href="https://dev.to/miku86/series/3259" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Data Structures: Understanding Graphs**  

*What is a graph? Graphs are used to represents relationships and hierarchies and are composed of nodes and edges.*javascript.plainenglish.io<a href="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Data Structures Two Ways: Linked List (Pt 1)**  

*I work primarily with JavaScript, but the place I work is using Java on the backend. Always being fascinated with…*dev.to<a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Data Structures Two Ways: Linked List (Pt2)**  

*If you are new- well hello! check out part one if you like to start at the beginning or just jump straight in Right on…*dev.to<a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Graph Data Structures Explained in JavaScript**  

*In this post, we are going to explore non-linear data structures like graphs. Also, we’ll cover the central concepts…*dev.to<a href="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Big O Notation in Javascript**  

*Get ready for your tech job interview*medium.com<a href="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Time Complexity/Big O Notation**  

*Scaling Algorithms Instead of Applications*medium.com<a href="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Big O in JavaScript**  

*Like many new developers before me, Big O went straight over my head the first time I heard about it. It was a topic…*medium.com<a href="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html" class="markup--anchor markup--p-anchor">http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html</a>

**Time Complexity Analysis in JavaScript**  

*An algorithm is a self-contained step-by-step set of instructions to solve a problem. It takes time for these steps to…*www.jenniferbland.com<a href="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Algorithms in plain English: time complexity and Big-O notation**  

*Every good developer has time on their mind. They want to give their users more of it, so they can do all those things…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**An Introduction to Big O Notation**  

*Big O notation is a big topic, and its universal importance stems from the fact that it describes the efficiency of…*dev.to<a href="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Crizstian/data-structure-and-algorithms-with-ES6**  

*Num Type Exercises Description 10.- Graph Data Structure 2 A graph consists of a set of vertices and a set of edges. A…*github.com<a href="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**trekhleb/javascript-algorithms**  

*This repository contains JavaScript based examples of many popular algorithms and data structures. Each algorithm and…*github.com<a href="https://github.com/trekhleb/javascript-algorithms" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JS: Algorithm**  

*More Questions CSS Interview Questions , HTML Interview Questions if you are little more comfortable or claim to be…*www.thatjsdude.com<a href="http://www.thatjsdude.com/interview/js1.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Algorithms in JavaScript**  

*40 Problems, Solutions, and Explanations*medium.com<a href="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Objects, Square Brackets and Algorithms**  

*One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects. In this…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**felipernb/algorithms.js**  

*Classic algorithms and data structures implemented in JavaScript, you know… FOR SCIENCE.*github.com<a href="https://github.com/felipernb/algorithms.js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**yangshun/lago**  

*📕 Data Structures and Algorithms library in TypeScript - yangshun/lago*github.com<a href="https://github.com/yangshun/lago" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**idosela/algorithms-in-javascript**  

*Collection of computer science algorithms and data structures written in JavaScript. Run the sort performence test…*github.com<a href="https://github.com/idosela/algorithms-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Algorithms and Data Structures in JavaScript**  

*Hello Readers! I’ve recently launched JavaScript Algorithms and Data Structures repository on GitHub with a collection…*dev.to<a href="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Inheritance in JavaScript - Learn web development | MDN**  

*This article has covered the remainder of the core OOJS theory and syntax that we think you should know now. At this…*developer.mozilla.org<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Class inheritance**  

*Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the…*javascript.info<a href="https://javascript.info/class-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Inheritance in JavaScript**  

*Detailed walk thorough of inheritance in JavaScript*medium.com<a href="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/simple-inheritance-javascript/" class="markup--anchor markup--p-anchor">https://www.sitepoint.com/simple-inheritance-javascript/</a>

**JavaScript — Inheritance, delegation patterns and Object linking**  

*Learn about inheritance in JavaScript (prototypal inheritance), behavior/object delegation pattern and objects linked…*codeburst.io<a href="https://codeburst.io/javascript-inheritance-25fe61ab9f85" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Object Oriented JavaScript: Polymorphism with examples**  

*Again this is not the advance topic of JavaScript but it relies under Object Oriented JavaScript & polymorphism is one…*blog.knoldus.com<a href="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Program Like Proteus — A beginner’s guide to polymorphism in Javascript**  

medium.com<a href="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Object-oriented JavaScript: A Deep Dive into ES6 Classes - SitePoint**  

*Often we need to represent an idea or concept in our programs - maybe a car engine, a computer file, a router, or a…*www.sitepoint.com<a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Learning JavaScript Design Patterns**  

*An open-source book on JavaScript Design Patterns*addyosmani.com<a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Design Patterns | DigitalOcean**  

*There are many times when one part of the application changes, other parts needs to be updated. In AngularJS, if the…*scotch.io<a href="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Design Patterns**  

*The ultimate guide to the most useful design patterns*betterprogramming.pub<a href="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Design Patterns**  

*Constructor Pattern*medium.com<a href="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript Design Patterns: What They Are & How To Use Them**  

*Developers often encounter coding problems in JavaScript that can be solved by using well-established design patterns…*seesparkbox.com<a href="https://seesparkbox.com/foundry/javascript_design_patterns" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Design Patterns in JavaScript**  

*Learn About Various Design Patterns in JavaScript*blog.bitsrc.io<a href="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**fbeline/design-patterns-JS**  

*Here you will find the 23 (GoF) design patterns implemented in JavaScript using both prototype and ES6 classes. You can…*github.com<a href="https://github.com/fbeline/Design-Patterns-JS" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Power of the Module Pattern in JavaScript**  

*Embellish your app with the module pattern*betterprogramming.pub<a href="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Design Patterns for Developers using JavaScript - Part One**  

*Most developers using JavaScript strives to write code that is readable, maintainable, and reusable because writing…*dev.to<a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Design Patterns for Developers using JavaScript - Part Two**  

*In the previous article, we had a look at design patterns, its definition, history, and the incorporation into software…*dev.to<a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Design patterns in modern JavaScript development**  

*Thoughts on effective communication in the design of software projects*levelup.gitconnected.com<a href="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Understanding Design Patterns: Iterator using Dev.to and Medium social networks!**  

*There are 23 classic design patterns, which are described in the original book, Design Patterns: Elements of Reusable…*dev.to<a href="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Design Patterns - Factory Pattern**  

*Welcome to my new development series where I try my best to explain design patterns by using JavaScript! In software…*dev.to<a href="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Design Pattern — Module Pattern**  

*One of the most common patterns in JavaScript*javascript.plainenglish.io<a href="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Design Patterns: Null Object**  

*Avoid conditional complexity using this pattern*betterprogramming.pub<a href="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Strategy Pattern**  

*GitHub Link: https://github.com/FrancescoXX/Design-Patterns-Strategy-Javascript The Strategy pattern, also called…*dev.to<a href="https://dev.to/francescoxx/strategy-pattern-5oh" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Adapter Pattern**  

*Github link: https://github.com/FrancescoXX/Design-Pattern-Adapter-Javascript The Adapter pattern is used to allow a…*dev.to<a href="https://dev.to/francescoxx/adapter-pattern-5bjk" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The Power of Composite Pattern in JavaScript**  

*Find me on medium In this post, we will be going over the Composite Design Pattern in JavaScript. In… Tagged with…*dev.to<a href="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**In Defense of Defensive Programming**  

*NOTE: In this article I reference a validation library that I wrote called allow. It’s now in an NPM package that can…*dev.to<a href="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Design Patterns | Udacity Free Courses**  

*Free Course Organizing Code in a Disorganized World Start Free Course About this Course This course covers methods for…*www.udacity.com<a href="https://www.udacity.com/course/javascript-design-patterns--ud989" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**getify/Functional-Light-JS**  

*Chapter 2 explored the core nature of JS functions, and laid the foundation for what makes a function an FP function…*github.com<a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Use function composition in JavaScript | Codementor**  

*Prerequisite: I use currying in this post, so if you don’t know about that, I encourage you to read my previous post…*www.codementor.io<a href="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Currying in JavaScript ES6**  

*Currying can give you a deeper understanding to JavaScript. Let’s see how it can be done with arrow functions!*blog.benestudio.co<a href="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Writing Middleware —Composition and Currying Elegance in JavaScript**  

*Javascript is an elegant and beautiful language which allows the developers to have the flexibility to move between the…*medium.com<a href="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Functional JavaScript: Function Composition For Every Day Use.**  

*Function composition has got to be my favorite part of functional programming. I hope to provide you with a good real…*medium.com<a href="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**What I Learned Today 💡 July 2, 2017**  

*Functional Composition: compose() and pipe()*medium.com<a href="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Why The Hipsters Compose Everything: Functional Composing In JavaScript**  

*Lodash and Underscore are everywhere and still there is this one supper efficient method that actually only those…*busypeoples.github.io<a href="http://busypeoples.github.io/post/functional-composing-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**A Gentle Introduction to Functional JavaScript: Part 3**  

*This is part three of a four-part series introducing ‘functional’ programming in JavaScript. In the last article we saw…*jrsinclair.com<a href="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Curry And Compose (why you should be using something like ramda in your code)**  

*When it comes to functional programming, the main cornerstone is composability, the ability to create new functions…*jsleao.wordpress.com<a href="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function Composition in JavaScript with Pipe**  

*December 13, 2016 This post uses ES6 syntax. The same things can be accomplished with ES5, but it would require more…*vanslaars.io<a href="https://vanslaars.io/post/create-pipe-function/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Practical Functional Javascript with Ramda - Telerik Blogs**  

*Article co-authored by: Andrew D’Amelio and Yuri Takhteyev At rangle.io we’ve been fans of the functional programming…*developer.telerik.com<a href="https://developer.telerik.com/featured/practical-functional-javascript-ramda/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**The beauty in Partial Application, Currying, and Function Composition.**  

*Story Time*hackernoon.com<a href="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Curry or Partial Application?**  

The Difference Between  

Partial Application and Currymedium.com<a href="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Partial Application in JavaScript**  

*Unless you’ve used another functional programming language such as ML or Haskell, concepts such as partial application…*benalman.com<a href="http://benalman.com/news/2012/09/partial-application-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Partial Application of Functions**  

*Providing function with fewer arguments than it expects is called Partial Application of functions.*hackernoon.com<a href="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Javascript- Currying VS Partial Application**  

*A lot of people get confused in between currying and partial application and many of us do not know what, where and…*towardsdatascience.com<a href="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Partial Application in ECMAScript 2015**  

*Some of this material originally appeared in What’s the difference between Currying and Partial Application? Here it is…*raganwald.com<a href="http://raganwald.com/2015/04/01/partial-application.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Functional Composition in Javascript**  

*Functional composition is when you take two or more functions, and make one a single function out of them. When you…*joecortopassi.com<a href="https://joecortopassi.com/articles/functional-composition-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**So You Want to be a Functional Programmer (Part 1)**  

*Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…*cscalfani.medium.com<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**So You Want to be a Functional Programmer (Part 2)**  

*Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…*cscalfani.medium.com<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**So You Want to be a Functional Programmer (Part 3)**  

*Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…*cscalfani.medium.com<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**So You Want to be a Functional Programmer (Part 4)**  

*Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…*cscalfani.medium.com<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**So You Want to be a Functional Programmer (Part 5)**  

*Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…*cscalfani.medium.com<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**An Introduction to the basic principles of Functional Programming**  

*After a long time learning and working with object-oriented programming, I took a step back to think about system…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Concepts of Functional Programming in Javascript**  

*After a long time learning and working with object-oriented programming, I took a step back to think about system…*medium.com<a href="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**An Introduction to Functional Programming Style in JavaScript**  

*In recent years there has been a tectonic shift happening between traditional programming and Functional Programming…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A practical guide to writing more functional JavaScript**  

*Functional programming is great. With the introduction of React, more and more JavaScript front-end code is being…*medium.freecodecamp.org<a href="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**A simple explanation of functional pipe in JavaScript**  

*Sometimes I’m asked why we don’t have "dot-chaining” in RxJS anymore, or why RxJS made the switch to use pipe. There…*dev.to<a href="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**ryanmcdermott/clean-code-javascript**  

*Software engineering principles, from Robert C. Martin’s book , adapted for JavaScript. This is not a style guide. It’s…*github.com<a href="https://github.com/ryanmcdermott/clean-code-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**JavaScript Clean Coding Best Practices | <span class="citation" data-cites="RisingStack">@RisingStack</span>**  

*Writing clean code is what you must know and do in order to call yourself a professional developer. There is no…*blog.risingstack.com<a href="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Function parameters in JavaScript — Clean Code**  

*In my time as a web developer I have to deal a lot with JavaScript Code. I love JavaScript, no question asked. But…*kevin-peters.medium.com<a href="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Keeping your code clean**  

*I settled down in my sit, cranking the solution with my team members. "We must win this” I said, burying myself deep…*codeburst.io<a href="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Best Practices for Using Modern JavaScript Syntax - SitePoint**  

*This article is featured in our book, Modern JavaScript is evolving quickly to meet the changing needs of new…*www.sitepoint.com<a href="https://www.sitepoint.com/modern-javascript-best-practices/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**cross-js/cross-js**  

*Adopting CrossJS style means your javascript can work in any environment without being dependent on any core…*github.com<a href="https://github.com/cross-js/cross-js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Writing Clean Code**  

*We can all agree that writing clean code is important. It makes it easier to work in a team, and even if we’re a single…*dev.to<a href="https://dev.to/ganderzz/on-writing-clean-code-57cm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Writing Clean Code and The Practice of Programming: Actionable advice for beginners**  

*"The purpose of style is to make the code easy to read for yourself and others, and good style is crucial to good…*dev.to<a href="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Clean code, dirty code, human code**  

*Last week, Dan Abramov posted a very personal and humbling blog post entitled Goodbye, Clean Code. I saw a tweet about…*dev.to<a href="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

**Practical Ways to Write Better JavaScript**  

*Solid methods of improving your JS. Tagged with javascript, webdev, beginners, react.*dev.to<a href="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

≡

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 3, 2021](https://medium.com/p/633549469528).

<a href="https://medium.com/@bryanguner/absolutely-everything-you-could-need-to-know-about-how-javascript-works-633549469528" class="p-canonical">Canonical link</a>

August 31, 2021.
