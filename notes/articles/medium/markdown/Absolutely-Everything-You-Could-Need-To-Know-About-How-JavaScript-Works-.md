Absolutely Everything You Could Need To Know About How JavaScript Works.
========================================================================

Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

------------------------------------------------------------------------

### Absolutely Everything You Could Need To Know About How JavaScript Works.

#### Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

#### But first a little bit of mildly shameful self promotion:

> (self promotion ends after the line denoted by a bunch of pictures of my dog🐕 )

> (Followed by a brief introduction to JavaScript for beginners)

> (Finally the main content / resources / imbedded YouTube links)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*huxNcspoDvOfqxvn.gif" class="graf-image" /></figure>### My Blog:

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/600/1*_J5NcnQmHmPDBvZodMmyaA.png" class="graf-image" /></figure>***This is a work in progress and may be broken or hosted elsewhere at some time in the future.***

Related posts:

<a href="https://dev.to/bgoonz/js-modules-4c4d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bgoonz/js-modules-4c4d"><strong>JS Modules</strong><br />
<em>A module is a reusable piece of code that encapsulates implementation details and exposes a public API so it can be…</em>dev.to</a><a href="https://dev.to/bgoonz/js-modules-4c4d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bgoonz/closures-in-javascript-1moc"><strong>Closures In JavaScript</strong><br />
<em>Answer A closure is a function defined inside another function and has access to its lexical scope even when it is…</em>dev.to</a><a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db"><strong>The Complete JavaScript Reference Guide</strong><br />
<em>You will want to bookmark this</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>

### The Beginner’s Guide To JavaScript

> This is a quick intro for complete beginners … skip below for more advanced content and resources! (below the next photo montage of my dog)

### Skip The Following **↓** To Get To Main Content!!

<figure><img src="https://cdn-images-1.medium.com/max/600/1*HCYn5Uz_jZ6uRjgp_NA5Yw.png" class="graf-image" /></figure>**If you wanna skip this section you’ll find the main content about 10% of the way down the page… it will look like this:**

<figure><img src="https://cdn-images-1.medium.com/max/600/0*iHxLNzz1MOZACC5u.png" class="graf-image" /></figure>### The Number Data Type

The **number** data type in JS is used to represent any numerical  
values, including integers and decimal numbers. **Basic Arithmetic Operators** are the symbols that perform particular operations.

-   <span id="205d">**+** (addition)</span>
-   <span id="1df4">**-** (subtraction)</span>
-   <span id="f17b">**asterisk** (multiplication)</span>
-   <span id="ed52">**/** (division)</span>
-   <span id="d3a6">**%** (modulo)</span>

JS evaluates more complex expressions using the general math order of  
operations aka PEMDAS.

-   <span id="4923">**PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.</span>
-   <span id="e245">*To force a specific order of operation, use the group operator ( ) around a part of the expression.*</span>

**Modulo** : Very useful operation to check divisibility of numbers,  
check for even & odd, whether a number is prime, and much more!  
*(Discrete Math concept, circular problems can be solved with modulo)*

-   <span id="9608">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.</span>
-   <span id="3b00">`console.log(7 % 10); // => 7;`</span>

### The String Data Type

The **string** data type is a primitive data type that used to represent  
textual data.

-   <span id="792d">can be wrapped by either **single** or **double** quotation marks, *best to choose one and stick with it for consistency*.</span>
-   <span id="4f91">If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.</span>

<!-- -->

    "That's a great string"; (valid)
    'Shakespeare wrote, "To be or not to be"'; (valid)
    'That's a bad string'; (invalid)

-   <span id="a54b">Alt. way to add other quotes within strings is to use template literals.</span>

### `This is a template literal`

`${function} // use ${} to invoke functions within.`

> **.length** : property that can be appended to data to return the length.

> empty strings have a length of zero.

> **indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].

    console.log("bootcamp"[0]); // => "b"
    console.log("bootcamp"[10]); // => "undefined"
    console.log("boots"[1 * 2]); // => "o"
    console.log("boots"["boot".length - 1]); // => "t"

-   <span id="bcc3">we can pass expressions through the brackets as well since JS always evaluates expressions first.</span>
-   <span id="f60b">The index of the last character of a string is always one less than it’s length.</span>
-   <span id="5329">**indexOf()** : method used to find the first index of a given character within a string.</span>
-   <span id="6813">`console.log("bagel".indexOf("b")); // => 0 console.log("bagel".indexOf("z")); // => -1`</span>
-   <span id="262e">**if the character inside the indexOf() search does not exist in the string, the output will be -1.**</span>
-   <span id="0646">the indexOf() search will return the first instanced index of the the char in the string.</span>
-   <span id="15e0">**concatenate** : word to describe joining strings together into a single string.</span>

### The Boolean Data Type

The **Boolean** data type is the simplest data type since there are only  
two values: **true** and **false**.

-   <span id="62d6">**Logical Operators** (Boolean Operators) are used to establish logic in our code.</span>
-   <span id="bae2">**!** (not) : reverses a Boolean value.</span>

`console.log(!true); // => false console.log(!!false); // => false`

-   <span id="71d9">**&&** (and) **Truth Table**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Y4qzqSB0C-9AmtXf.png" class="graf-image" /></figure>-   <span id="c706">**Logical Order of Operations** : JS will evaluate !, then &&, then ||.</span>
-   <span id="1e21">**De Morgan’s Law** : Common mistake in Boolean logic is incorrectly distributing ! across parentheses.</span>
-   <span id="2e3e">`!(A || B) === !A && !B; !(A && B) === !A || !B;`</span>
-   <span id="350f">In summary, to correctly distribute ! across parentheses we must also flip the operation within.</span>

### Comparison Operators

All comparison operators will result in a Boolean output.

**The relative comparators**

-   <span id="0d1c">**&gt;** (greater than)</span>
-   <span id="77dd">**&lt;** (less than)</span>
-   <span id="2041">**&gt;=** (greater than or equal to)</span>
-   <span id="55fd">**&lt;=** (less than or equal to)</span>
-   <span id="1b7c">**===** (equal to)</span>
-   <span id="09a6">**!==** (not equal to)</span>

> Fun Fact: “a” &lt; “b” is considered valid JS Code because string  
> comparisons are compared lexicographically (meaning dictionary order),  
> so “a” is less than “b” because it appears earlier!

> If there is ever a standstill comparison of two string  
> lexicographically (i.e. app vs apple) the comparison will deem the  
> shorter string lesser.

**Difference between == and ===**

-   <span id="3fec">**===** : Strict Equality, will only return true if the two comparisons are entirely the same.</span>
-   <span id="224d">**==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)</span>

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
    differences in terms of hoisting and global/block scope — will be  
    covered later in the course (common interview question!)</span>

**Assignment Shorthand**

    let num = 0;num += 10; // same as num = num + 10num -= 2; // same as num = num - 2num /= 4; // same as num = num / 4num *= 7; // same as num = num * 7

-   <span id="7ff5">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>
-   <span id="2798">**declaration** : process of simply introducing a variable name.</span>
-   <span id="ad51">**initialization** : process of both declaring and assigning a variable on the same line.</span>

### Functions

A function is a procedure of code that will run when called. Functions  
are used so that we do not have to rewrite code to do the same thing  
over and over. (Think of them as ‘subprograms’)

-   <span id="01bb">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="963b">Includes three things:</span>
-   <span id="32df">Name of the function.</span>
-   <span id="7930">A list of *parameters* ()</span>
-   <span id="145e">The code to execute {}</span>
-   <span id="37c0">**Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)</span>
-   <span id="f3cc">JS evaluates code top down, left to right.</span>
-   <span id="cf9c">When we execute a declared function later on in our program we refer to this as **invoking** our function.</span>
-   <span id="4374">Every function in JS returns undefined unless otherwise specified.</span>
-   <span id="3bb7">When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.</span>
-   <span id="0ce8">When naming functions in JS always use camelCase and name it something appropriate. &gt; Great code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!</span>

### Parameters and Arguments

-   <span id="38d3">**Parameters** : Comma separated variables specified as part of a function’s declaration.</span>
-   <span id="ecef">**Arguments** : Values passed to the function when it is invoked.</span>
-   <span id="a836">*If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work.*</span>
-   <span id="a53a">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>

> END OF INTRO FOR BEGINNERS (MAIN ARTICLE BELOW)

### ↓↓**Absolutely Everything You Could Need To Know About JavaScript**↓↓

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fOaTsnCJCYc3wD4x" class="graf-image" /></figure><a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation"><strong>leonardomso/33-js-concepts</strong><br />
<em>This repository was created with the intention of helping developers master their concepts in JavaScript. It is not a…</em>github.com</a><a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack"><strong>Call stack - MDN Web Docs Glossary: Definitions of Web-related terms | MDN</strong><br />
<em>A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec"><strong>Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks &amp; more</strong><br />
<em>Web developers or Front end engineers, as that’s what we like to be called, nowadays do everything right from acting as…</em>medium.com</a><a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4"><strong>Understanding the JavaScript call stack</strong><br />
<em>The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/"><strong>Javascript: What Is The Execution Context? What Is The Call Stack?</strong><br />
<em>What is the Execution Context in Javascript? I bet you don't know the answer. What are the most basic components of a…</em>web.archive.org</a><a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*b31hiO4ynbDLRrXWEFF4aQ.png" class="graf-image" /></figure><a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0"><strong>Understanding Execution Context and Execution Stack in Javascript</strong><br />
<em>Understanding execution context and stack to become a better Javascript developer.</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"><strong>How JavaScript works: an overview of the engine, the runtime, and the call stack</strong><br />
<em>As JavaScript is getting more and more popular, teams are leveraging its support on many levels in their stack …</em>blog.sessionstack.com</a><a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104"><strong>Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.</strong><br />
<em>“JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with…</em>medium.com</a><a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/"><strong>The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScript - ui.dev</strong><br />
<em>It may seem surprising, but in my opinion the most important and fundamental concept to understanding the JavaScript…</em>tylermcginnis.com</a><a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o"><strong>How JavaScript Works: An Overview of JavaScript Engine, Heap, and Call Stack</strong><br />
<em>Hello everyone 👋, I hope you are doing great. So, today you are going to learn An Overview of JavaScript Engine, Heap…</em>dev.to</a><a href="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4"><strong>Fundamental Data Structures In JavaScript</strong><br />
<em>Data structures in JavaScript</em>medium.com</a><a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

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

### Dependent on data

> *Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity.*

-   <span id="bc8d">**The best-case complexity: when the data looks the best**</span>
-   <span id="8b06">**The worst-case complexity: when the data looks the worst**</span>
-   <span id="881c">**The average-case complexity: when the data looks average**</span>

### Big O notation

The complexity is usually expressed with the Big O notation. The wikipedia page about this subject is pretty complex but you can find here a good summary of the different complexity for the most famous data structures and sorting algorithms.

### The Array data structure

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Qk3UYgeqXamRrFLR.gif" class="graf-image" /></figure>### Definition

An Array data structure, or simply an Array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. The simplest type of data structure is a linear array, also called one-dimensional array. From Wikipedia

Arrays are among the oldest and most important data structures and are used by every program. They are also used to implement many other data structures.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values"><strong>JavaScript data types and data structures - JavaScript | MDN</strong><br />
<em>Programming languages all have built-in data structures, but these often differ from one language to another. This…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://2ality.com/2012/04/number-encoding.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://2ality.com/2012/04/number-encoding.html"><strong>How numbers are encoded in JavaScript</strong><br />
<em>Edit description</em>2ality.com</a><a href="http://2ality.com/2012/04/number-encoding.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6"><strong>Here is what you need to know about JavaScript’s Number type</strong><br />
<em>Why 0.1+0.2 IS NOT equal to 0.3 and 9007199254740992 IS equal to 9007199254740993</em>medium.com</a><a href="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/"><strong>What Every JavaScript Developer Should Know About Floating Point Numbers</strong><br />
<em>After I gave my talk on JavaScript (really, I was there trying to shamelessly plug my book - Underhanded JavaScript and…</em>blog.chewxy.com</a><a href="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/"><strong>The Secret Life of JavaScript Primitives</strong><br />
<em>You may not know it but, in JavaScript, whenever you interact with string, number or boolean primitives you enter a…</em>javascriptweblog.wordpress.com</a><a href="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### <a href="https://javascript.info/primitives-methods#a-primitive-as-an-object" class="markup--anchor markup--h3-anchor">A primitive as an object</a>

Here’s the paradox faced by the creator of JavaScript:

-   <span id="95d1">There are many things one would want to do with a primitive like a string or a number. It would be great to access them using methods.</span>
-   <span id="10fe">Primitives must be as fast and lightweight as possible.</span>

The solution looks a little bit awkward, but here it is:

1.  <span id="4506">Primitives are still primitive. A single value, as desired.</span>
2.  <span id="7880">The language allows access to methods and properties of strings, numbers, booleans and symbols.</span>
3.  <span id="be72">In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.</span>

The “object wrappers” are different for each primitive type and are called: `String`, `Number`, `Boolean` and `Symbol`. Thus, they provide different sets of methods.

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

<a href="https://flow.org/en/docs/types/primitives/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flow.org/en/docs/types/primitives/"><strong>Primitive Types | Flow</strong><br />
<em>JavaScript has a number of different primitive types ( MDN): The primitive types appear in the language as either…</em>flow.org</a><a href="https://flow.org/en/docs/types/primitives/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object"><strong>(Not) Everything in JavaScript is an Object</strong><br />
<em>This was originally published on The Brewing Press For those who just wants the answers, feel free to jump to the…</em>dev.to</a><a href="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/objects-in-javascript-b212486dade6"><strong>Objects In JavaScript</strong><br />
<em>The object is a data structure that stores other data, similar to how an array stores elements.</em>medium.com</a><a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12"><strong>Diving Deeper in JavaScripts Objects</strong><br />
<em>A Closer Look at JavaScript Object Descriptors</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c"><strong>The differences between Object.freeze() vs Const in JavaScript</strong><br />
<em>ES6 has brought several new features and methods into JavaScript since its release. These features have better improved…</em>medium.com</a><a href="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0"><strong>Explaining Value vs. Reference in Javascript</strong><br />
<em>A simple look at computer memory explains what’s happening</em>codeburst.io</a><a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### DOES IT MUTATE:

<a href="https://doesitmutate.xyz/" class="markup--anchor markup--p-anchor">LINK….</a>

### <a href="https://doesitmutate.xyz/concat" class="markup--anchor markup--h3-anchor">.concat</a>

no mutation

### Description

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    Array.prototype.concat ( [ item1 [ , item2 [ , … ] ] ] )

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><strong>Array.prototype.concat() - JavaScript | MDN</strong><br />
<em>The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"><strong>Array.prototype.copyWithin() - JavaScript | MDN</strong><br />
<em>The copyWithin() method shallow copies part of an array to another location in the same array and returns it without…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"><strong>Array.prototype.entries() - JavaScript | MDN</strong><br />
<em>The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><strong>Array.prototype.every() - JavaScript | MDN</strong><br />
<em>The every() method tests whether all elements in the array pass the test implemented by the provided function. It…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><strong>Array.prototype.fill() - JavaScript | MDN</strong><br />
<em>The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example :

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"><strong>Array.prototype.filter() - JavaScript | MDN</strong><br />
<em>The method creates a new array with all elements that pass the test implemented by the provided function. Function is a…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"><strong>Array.prototype.find() - JavaScript | MDN</strong><br />
<em>The find() method returns the value of the first element in the provided array that satisfies the provided testing…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = [5, 12, 8, 130, 44];

    var found = array1.find(function(element) {
      return element > 10;
    });

    console.log(found);
    // expected output: 12

<a href="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851"><strong>Value types, reference types and scope in JavaScript</strong><br />
<em>There are only two things fundamental to JavaScript: objects and functions.</em>medium.com</a><a href="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18"><strong>Back to roots: JavaScript Value vs Reference</strong><br />
<em>Let’s look at the concept of Value vs Reference. Every JavaScript developer should know this topic as it’s often the…</em>medium.com</a><a href="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293"><strong>Grasp “By Value” and “By Reference” in JavaScript</strong><br />
<em>And learn why it’s crucial to know the difference</em>hackernoon.com</a><a href="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0"><strong>JavaScript Reference and Copy Variables | Hacker Noon</strong><br />
<em>Each programming language has its own peculiarities (and JavaScript has a lot), and today I'm going to talk about…</em>hackernoon.com</a><a href="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/"><strong>JavaScript Primitive vs. Reference Values</strong><br />
<em>Summary: in this tutorial, you will learn the differences between primitive and reference values. In JavaScript, a…</em>www.javascripttutorial.net</a><a href="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value"><strong>JavaScript by reference vs. by value</strong><br />
<em>I'm looking for some good comprehensive reading material on when JavaScript passes something by value and when by…</em>stackoverflow.com</a><a href="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f"><strong>JavaScript Interview Prep: Primitive vs. Reference Types</strong><br />
<em>original article In a JavaScript interview, they might ask if you understand the difference between primitive and…</em>dev.to</a><a href="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23"><strong>What you need to know about Javascript's Implicit Coercion</strong><br />
<em>Javascript's implicit coercion simply refers to Javascript attempting to coerce an unexpected value type to the…</em>dev.to</a><a href="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839"><strong>JavaScript type coercion explained</strong><br />
<em>Know your engines</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/javascript-coercion-explained-545c895213d3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/javascript-coercion-explained-545c895213d3"><strong>Javascript Coercion Explained</strong><br />
<em>Along with some practical examples</em>hackernoon.com</a><a href="https://hackernoon.com/javascript-coercion-explained-545c895213d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript"><strong>What exactly is Type Coercion in Javascript?</strong><br />
<em>Let's start with a short intro to type systems which I think will help you understand the general idea of type…</em>stackoverflow.com</a><a href="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong"><strong>https://thedevs.network/</strong><br />
<em>Weak dynamic typing is arguably one of those things everybody likes to pick at about JavaScript. For an elegant dynamic…</em>thedevs.network</a><a href="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed"><strong>getify/You-Dont-Know-JS</strong><br />
<em>A book series on JavaScript. @YDKJS on twitter. Contribute to getify/You-Dont-Know-JS development by creating an…</em>github.com</a><a href="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a"><strong>JavaScript — Double Equals vs. Triple Equals</strong><br />
<em>Learn equality in JavaScript in 3 minutes</em>codeburst.io</a><a href="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bytearcher.com/articles/equality-comparison-operator-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bytearcher.com/articles/equality-comparison-operator-javascript/"><strong>Should I use === or == equality comparison operator in JavaScript?</strong><br />
<em>You know there are two different equality comparison operators in JavaScript: the === and == operators, or the triple…</em>bytearcher.com</a><a href="https://bytearcher.com/articles/equality-comparison-operator-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript"><strong>== vs === JavaScript: Double Equals and Coercion | Codementor</strong><br />
<em>The == (double equals or loose equality) operator is an interesting operator. Many avoid it because they don't know how…</em>www.codementor.io</a><a href="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.impressivewebs.com/why-use-triple-equals-javascipt/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.impressivewebs.com/why-use-triple-equals-javascipt/"><strong>Why Use the Triple-Equals Operator in JavaScript? - Impressive Webs</strong><br />
<em>"Determining whether two variables are equivalent is one of the most important operations in programming." That's…</em>www.impressivewebs.com</a><a href="https://www.impressivewebs.com/why-use-triple-equals-javascipt/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript"><strong>What is the difference between == and === in JavaScript?</strong><br />
<em>On the surface == and === appear to be functionally the same, so why bother typing an extra character? In this video…</em>www.oreilly.com</a><a href="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object"><strong>Why javascript's typeof always return "object"?</strong><br />
<em>To add in with the others, typeof returns both objects and primitives. There are 5 primitive types in javascript…</em>stackoverflow.com</a><a href="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://tobyho.com/2011/01/28/checking-types-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://tobyho.com/2011/01/28/checking-types-in-javascript/"><strong>Checking Types in Javascript</strong><br />
<em>Have you ever wondered: what is the correct way to check if a Javascript variable is an Array? Do a Google search and…</em>tobyho.com</a><a href="http://tobyho.com/2011/01/28/checking-types-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://webbjocke.com/javascript-check-data-types/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://webbjocke.com/javascript-check-data-types/"><strong>How to better check data types in javascript - Webbjocke</strong><br />
<em>To check what data type something has in javascript is not always the easiest. The language itself provides an operator…</em>webbjocke.com</a><a href="https://webbjocke.com/javascript-check-data-types/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html"><strong>Tomer Aberbach | Checking for the Absence of a Value in JavaScript</strong><br />
<em>When I first started learning JavaScript I was confused by the seemingly endless ways developers check for the absence…</em>tomeraberba.ch</a><a href="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures"><strong>getify/You-Dont-Know-JS</strong><br />
<em>A book series on JavaScript. @YDKJS on twitter. Contribute to getify/You-Dont-Know-JS development by creating an…</em>github.com</a><a href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99"><strong>JavaScript Functions — Understanding The Basics</strong><br />
<em>Explore Functions in JavaScript — declaration, expressions, invocation, and more.</em>codeburst.io</a><a href="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/"><strong>ES6: var, let and const - The battle between function scope and block scope</strong><br />
<em>In the pre-ES6 era, there was only one way of declaring variables in JavaScript - being the usage of var. var has…</em>www.deadcoderising.com</a><a href="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html"><strong>Emulating Block Scope in JavaScript</strong><br />
<em>While there are many issues that trip up developers coming from other languages, variable scoping may be number one…</em>adripofjavascript.com</a><a href="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe"><strong>The Difference Between Function and Block Scope in JavaScript</strong><br />
<em>Back to the basics with the var, let and const variables</em>josephcardillo.medium.com</a><a href="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7"><strong>Function scopes and block scopes in JavaScript</strong><br />
<em>Is the following line a valid line of JavaScript code?</em>edgecoders.com</a><a href="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://ryanmorr.com/understanding-scope-and-context-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://ryanmorr.com/understanding-scope-and-context-in-javascript/"><strong>Understanding Scope and Context in JavaScript</strong><br />
<em>Understanding Scope and Context in JavaScript August 16, 2013 JavaScript JavaScript's implementation of scope and…</em>ryanmorr.com</a><a href="http://ryanmorr.com/understanding-scope-and-context-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://css-tricks.com/javascript-scope-closures/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/javascript-scope-closures/"><strong>JavaScript Scope and Closures</strong><br />
<em>Scopes and closures are important in JavaScript. But, they were confusing for me when I first started. Here's an…</em>css-tricks.com</a><a href="https://css-tricks.com/javascript-scope-closures/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/"><strong>Understanding Scope in JavaScript - Telerik Blogs</strong><br />
<em>Scope is an important, yet ambiguous concept in JavaScript. Used correctly, it allows you to leverage good design…</em>developer.telerik.com</a><a href="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://speakingjs.com/es5/ch16.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://speakingjs.com/es5/ch16.html"><strong>Chapter 16. Variables: Scopes, Environments, and Closures</strong><br />
<em>Chapter 16. Variables: Scopes, Environments, and Closures This chapter first explains how to use variables and then…</em>speakingjs.com</a><a href="http://speakingjs.com/es5/ch16.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/understanding-scope-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/understanding-scope-in-javascript"><strong>Understanding Scope in JavaScript</strong><br />
<em>JavaScript has a feature called Scope. Though the concept of scope is not that easy to understand for many new…</em>scotch.io</a><a href="https://scotch.io/tutorials/understanding-scope-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0"><strong>When to use a function declaration vs. a function expression</strong><br />
<em>The differences between them and when to use one or the other.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai"><strong>A JavaScript Fundamentals Cheat Sheet: Scope, Context, and "this"</strong><br />
<em>Scope Scope refers to where a variable can be accessed within a program. Some variables can be accessed from anywhere…</em>dev.to</a><a href="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/function-expressions-vs-declarations/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/function-expressions-vs-declarations/"><strong>Quick Tip: Function Expressions vs Function Declarations - SitePoint</strong><br />
<em>This article was peer reviewed by Jeff Mott. Thanks to all of SitePoint's peer reviewers for making SitePoint content…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/function-expressions-vs-declarations/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38"><strong>JavaScript Function — Declaration vs Expression</strong><br />
<em>Functions are considered as First Class citizen in JavaScript and it is really important to be clear with the concept…</em>medium.com</a><a href="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052"><strong>Function Declarations vs. Function Expressions</strong><br />
<em>What is Function Statement/Declarations in JavaScript?</em>medium.com</a><a href="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/"><strong>Function Declarations vs. Function Expressions</strong><br />
<em>Lets start with a short quiz. What is alerted in each case?: Question 1: Question 2: Question 3: Question 4: If you…</em>javascriptweblog.wordpress.com</a><a href="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6"><strong>Essential JavaScript: Mastering Immediately-invoked Function Expressions</strong><br />
<em>Understanding functions inside out and then learning how to exploit them to write modern, clean JavaScript code is a…</em>vvkchandra.medium.com</a><a href="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0"><strong>Do ES6 Modules make the case of IIFEs obsolete? - Hashnode</strong><br />
<em>IIFE was one of the most used patterns in the ES5 standard, as functions were the only way to declare a scoped block of…</em>hashnode.com</a><a href="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/"><strong>A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers</strong><br />
<em>Modern JavaScript development can be overwhelming. When working on a project, you may wonder why all the modern…</em>www.jvandemo.com</a><a href="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://exploringjs.com/es6/ch_modules.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://exploringjs.com/es6/ch_modules.html"><strong>16. Modules</strong><br />
<em>Edit description</em>exploringjs.com</a><a href="http://exploringjs.com/es6/ch_modules.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"><strong>ES modules: A cartoon deep-dive - Mozilla Hacks - the Web developer blog</strong><br />
<em>ES modules bring an official, standardized module system to JavaScript. With the release of Firefox 60 in May, all…</em>hacks.mozilla.org</a><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/understanding-es6-modules/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/understanding-es6-modules/"><strong>Understanding ES6 Modules - SitePoint</strong><br />
<em>Almost every language has a concept of modules - a way to include functionality declared in one file within another…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/understanding-es6-modules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/"><strong>An overview of ES6 Modules in JavaScript</strong><br />
<em>Introduction Until recently if you wanted to take full advantage of modules in JavaScript you needed to make use of…</em>blog.cloud66.com</a><a href="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/es6-modules-in-depth" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/es6-modules-in-depth"><strong>ES6 Modules in Depth</strong><br />
<em>Welcome back to ES6 - "Oh, good. It's not another article about Unicode" - in Depth series. If you've never been around…</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/es6-modules-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b"><strong>ES6 modules, Node.js and the Michael Jackson Solution</strong><br />
<em>JavaScript’s never had a standard way to import and export functionality from a source file to another. Well, it has…</em>medium.com</a><a href="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc"><strong>JavaScript Modules: A Beginner’s Guide</strong><br />
<em>If you’re a newcomer to JavaScript, jargon like “module bundlers vs. module loaders,” “Webpack vs. Browserify” and “AMD…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developers.google.com/web/fundamentals/primers/modules" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.google.com/web/fundamentals/primers/modules"><strong>JavaScript modules</strong><br />
<em>This article explains how to use JavaScript modules, how to deploy them responsibly, and how the Chrome team is working…</em>developers.google.com</a><a href="https://developers.google.com/web/fundamentals/primers/modules" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5"><strong>IIFE: Immediately Invoked Function Expressions</strong><br />
<em>IIFE is a function that is declared and invoked at the same time. You create them by using anonymous functions and…</em>dev.to</a><a href="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4"><strong>JavaScript Event Loop Explained</strong><br />
<em>“How is JavaScript asynchronous and single-threaded ?” The short answer is that JavaScript language is single-threaded…</em>medium.com</a><a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/"><strong>The JavaScript Event Loop: Explained</strong><br />
<em>With JavaScript approaching near-ubiquity as the scripting language of the web browser, it benefits you to have a basic…</em>blog.carbonfive.com</a><a href="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40"><strong>Understanding JS: The Event Loop</strong><br />
<em>Due to the amazing quantity of libraries, tools and all kinds of things that make your development easier, a lot of…</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop"><strong>Understanding the JavaScript event loop</strong><br />
<em>If you are someone who has heard about the terms event loop, callback queue, concurrency model and call stack but…</em>www.zeolearn.com</a><a href="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49"><strong>Event loop in javascript</strong><br />
<em>If you love javascript you’ve need to learn this. One of the deeper aspects of JavaScript is it’s Event Loop. Its…</em>code.likeagirl.io</a><a href="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://flaviocopes.com/javascript-event-loop/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flaviocopes.com/javascript-event-loop/"><strong>The JavaScript Event Loop</strong><br />
<em>The Event Loop is one of the most important aspects to understand about JavaScript. I've programmed for years with…</em>flaviocopes.com</a><a href="https://flaviocopes.com/javascript-event-loop/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5"><strong>How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with…</strong><br />
<em>Welcome to post # 4 of the series dedicated to exploring JavaScript and its building components. In the process of…</em>blog.sessionstack.com</a><a href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"><strong>Tasks, microtasks, queues and schedules</strong><br />
<em>Edit description</em>jakearchibald.com</a><a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8"><strong>Visualising the JavaScript Event Loop with a Pizza Restaurant analogy</strong><br />
<em>Consider a pizza restaurant. There are two types of orders that we currently have from a single customer - one is an…</em>dev.to</a><a href="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"><strong>✨♻️ JavaScript Visualized: Event Loop</strong><br />
<em>Oh boi the event loop. It's one of those things that every JavaScript developer has to deal with in one way or another…</em>dev.to</a><a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/settimeout-setinterval" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/settimeout-setinterval"><strong>Scheduling: setTimeout and setInterval</strong><br />
<em>Edit description</em>javascript.info</a><a href="https://javascript.info/settimeout-setinterval" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9"><strong>Why not to use setInterval</strong><br />
<em>Recently, I came across a requirement where I had to call a function repeatedly after specific time interval, like…</em>dev.to</a><a href="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://develoger.com/settimeout-vs-setinterval-cff85142555b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://develoger.com/settimeout-vs-setinterval-cff85142555b"><strong>setTimeout VS setInterval</strong><br />
<em>Intro</em>develoger.com</a><a href="https://develoger.com/settimeout-vs-setinterval-cff85142555b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://css-tricks.com/using-requestanimationframe/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/using-requestanimationframe/"><strong>Using requestAnimationFrame</strong><br />
<em>There used to be just one way to do a timed loop in JavaScript: setInterval(). If you needed to repeat something pretty…</em>css-tricks.com</a><a href="https://css-tricks.com/using-requestanimationframe/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml"><strong>Understanding JavaScript's requestAnimationFrame() method for smooth animations</strong><br />
<em>Updated: Nov 1st, 2017 The modern web of today is filled with sights to behold on every page, where menus slide in and…</em>www.javascriptkit.com</a><a href="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/"><strong>Handling time intervals in JavaScript</strong><br />
<em>While working on an Electron app Pomolectron, I needed to handle different time intervals through setInterval()…</em>www.amitmerchant.com</a><a href="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.softwaremag.com/javascript-engines/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.softwaremag.com/javascript-engines/"><strong>JavaScript Engines -</strong><br />
<em>By Jen Looper Writing code for the Web sometimes feels a little magical in that developers write a sequence of…</em>www.softwaremag.com</a><a href="http://www.softwaremag.com/javascript-engines/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964"><strong>Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code</strong><br />
<em>Before diving deep into the core of Chrome’s V8, first, let’s get our fundamentals down. All of our systems consist of…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775"><strong>Understanding V8’s Bytecode</strong><br />
<em>V8 is Google’s open source JavaScript engine. Chrome, Node.js, and many other applications use V8. This article…</em>medium.com</a><a href="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/"><strong>A Brief History of Google's V8 JavaScript Engine</strong><br />
<em>Javascript has a reputation in developer circles as a terrible language. It's classless, loosely typed, and plagued by…</em>www.mediacurrent.com</a><a href="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553"><strong>JavaScript essentials: why you should know how the engine works</strong><br />
<em>This article is also available in Spanish.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://mathiasbynens.be/notes/shapes-ics" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://mathiasbynens.be/notes/shapes-ics"><strong>JavaScript engine fundamentals: Shapes and Inline Caches</strong><br />
<em>This article describes some key fundamentals that are common to all JavaScript engines - and not just V8, the engine…</em>mathiasbynens.be</a><a href="https://mathiasbynens.be/notes/shapes-ics" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://mathiasbynens.be/notes/prototypes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://mathiasbynens.be/notes/prototypes"><strong>JavaScript engine fundamentals: optimizing prototypes</strong><br />
<em>This article describes some key fundamentals that are common to all JavaScript engines - and not just V8, the engine…</em>mathiasbynens.be</a><a href="https://mathiasbynens.be/notes/prototypes" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://v8.dev/blog/elements-kinds" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://v8.dev/blog/elements-kinds"><strong>Elements kinds in V8</strong><br />
<em>Note: If you prefer watching a presentation over reading articles, then enjoy the video below! JavaScript objects can…</em>v8.dev</a><a href="https://v8.dev/blog/elements-kinds" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4"><strong>Programming with JS: Bitwise Operations</strong><br />
<em>In this series of articles we take a look at different Computer Science topics from the prism of JavaScript. We’ve…</em>hackernoon.com</a><a href="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5"><strong>Using JavaScript’s Bitwise Operators in Real Life</strong><br />
<em>Let’s pretend we’re machine code programmers!</em>codeburst.io</a><a href="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.w3resource.com/javascript/operators/bitwise-operator.php" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.w3resource.com/javascript/operators/bitwise-operator.php"><strong>JavaScript Bitwise Operators - w3resource</strong><br />
<em>Bitwise operators perform an operation on the bitwise (0,1) representation of their arguments, rather than as decimal…</em>www.w3resource.com</a><a href="https://www.w3resource.com/javascript/operators/bitwise-operator.php" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3"><strong>Bitwise Operators in Javascript</strong><br />
<em>So far the two programming languages we have worked with are Ruby and Javascript. There are many differences between…</em>medium.com</a><a href="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04"><strong>A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript</strong><br />
<em>Bitwise operators, though they take a few minutes to learn, are a fun way to make your code more space and…</em>medium.com</a><a href="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript"><strong>How can I understand Bitwise operation in JavaScript?</strong><br />
<em>Answer: Okay, I was going to just write that bitwise operations in JavaScript are the same as in every other language…</em>www.quora.com</a><a href="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://eloquentjavascript.net/14_dom.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://eloquentjavascript.net/14_dom.html"><strong>The Document Object Model :: Eloquent JavaScript</strong><br />
<em>Too bad! Same old story! Once you've finished building your house you notice you've accidentally learned something that…</em>eloquentjavascript.net</a><a href="https://eloquentjavascript.net/14_dom.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom"><strong>How To Understand and Modify the DOM in JavaScript | DigitalOcean</strong><br />
<em>The Document Object Model, usually referred to as the DOM, is an essential part of making websites interactive. It is…</em>www.digitalocean.com</a><a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d"><strong>What’s the Document Object Model, and why you should know how to use it.</strong><br />
<em>So, you’ve studied HTML, you’ve created your first tags, learned about CSS, made beautiful forms, amazing buttons…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html"><strong>JavaScript DOM Tutorial with Example</strong><br />
<em>Details JavaScript can access all the elements in a webpage making use of Document Object Model (DOM). In fact, the web…</em>www.guru99.com</a><a href="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://css-tricks.com/dom/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/dom/"><strong>What is the DOM?</strong><br />
<em>A reader recently wrote in asking me what the DOM was. They said they've heard it mentioned and alluded to, but aren't…</em>css-tricks.com</a><a href="https://css-tricks.com/dom/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://zellwk.com/blog/dom-traversals/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://zellwk.com/blog/dom-traversals/"><strong>Traversing the DOM with JavaScript</strong><br />
<em>A good JavaScript developer needs to know how to traverse the DOM-it's the act of selecting an element from another…</em>zellwk.com</a><a href="https://zellwk.com/blog/dom-traversals/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/dom-nodes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/dom-nodes"><strong>DOM tree</strong><br />
<em>The backbone of an HTML document is tags. According to the Document Object Model (DOM), every HTML tag is an object…</em>javascript.info</a><a href="https://javascript.info/dom-nodes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e"><strong>How to traverse the DOM in JavaScript</strong><br />
<em>Learn how to navigate your way through the DOM tree.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction"><strong>Render-tree Construction, Layout, and Paint | Web Fundamentals</strong><br />
<em>The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible…</em>developers.google.com</a><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bitsofco.de/what-exactly-is-the-dom/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bitsofco.de/what-exactly-is-the-dom/"><strong>What, exactly, is the DOM?</strong><br />
<em>The Document Object Model, or the "DOM", is an interface to web pages. It is essentially an API to the page, allowing…</em>bitsofco.de</a><a href="https://bitsofco.de/what-exactly-is-the-dom/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b"><strong>A Vanilla JS Guide On Mastering the DOM</strong><br />
<em>Note: The contents of this post are intended to be introductory and does not include use of any libraries like jQuery…</em>dev.to</a><a href="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript"><strong>How To Use Classes in JavaScript | DigitalOcean</strong><br />
<em>JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called…</em>www.digitalocean.com</a><a href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677"><strong>Javascript Classes — Under The Hood</strong><br />
<em>Javascript classes are nothing but a syntactic sugar over existing prototype based inheritance and constructor…</em>medium.com</a><a href="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.javascriptjanuary.com/blog/es6-classes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.javascriptjanuary.com/blog/es6-classes"><strong>ES6 Classes - JavaScript January</strong><br />
<em>Object-Oriented Programming (OOP) can be a great way to organize your projects. Introduced with ES6, the javascript…</em>www.javascriptjanuary.com</a><a href="https://www.javascriptjanuary.com/blog/es6-classes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes"><strong>Better JavaScript with ES6, Pt. II: A Deep Dive into Classes</strong><br />
<em>Out with the Old, In with the new Let's be clear about one thing from the start: Under the hood, ES6 classes are not…</em>scotch.io</a><a href="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd"><strong>Understand the Factory Design Pattern in plain javascript</strong><br />
<em>The simplest way to understand Factory Design Pattern</em>medium.com</a><a href="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://atendesigngroup.com/blog/factory-functions-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://atendesigngroup.com/blog/factory-functions-javascript"><strong>Factory Functions in JavaScript | Aten Design Group</strong><br />
<em>As we move from an age of jQuery plugins and script drop-ins to a world of CommonJS and modular architectures it's…</em>atendesigngroup.com</a><a href="https://atendesigngroup.com/blog/factory-functions-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9"><strong>The Factory Pattern in JS ES6</strong><br />
<em>I’m trying to get the most out of all the new things in ES6 (ES2015). And I’m writing a new library where I need a…</em>medium.com</a><a href="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15"><strong>Class vs Factory function: exploring the way forward</strong><br />
<em>ECMAScript 2015 (aka ES6) comes with the class syntax, so now we have two competing patterns for creating objects. In…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a"><strong>How ES6 classes really work and how to build your own</strong><br />
<em>The 6th edition of ECMAScript (or ES6 for short) revolutionized the language, adding many new features, including…</em>medium.com</a><a href="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jordankasper.com/understanding-super-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jordankasper.com/understanding-super-in-javascript"><strong>Understanding `super` in JavaScript</strong><br />
<em>With the adoption of ES6/2015 by nearly all browsers (with one notable exception), developers have access to the new…</em>jordankasper.com</a><a href="https://jordankasper.com/understanding-super-in-javascript" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm"><strong>An Easy Guide To Understanding Classes In JavaScript</strong><br />
<em>1. An Introduction To Classes In JavaScript In the previous article in this series we looked at function constructors…</em>dev.to</a><a href="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><strong>Function.prototype.call() - JavaScript | MDN</strong><br />
<em>The value to use as this when calling . Note: In certain cases, may not be the actual value seen by the method. If the…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"><strong>Function.prototype.bind() - JavaScript | MDN</strong><br />
<em>The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><strong>Function.prototype.apply() - JavaScript | MDN</strong><br />
<em>The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b"><strong>Grokking call(), apply() and bind() methods in JavaScript</strong><br />
<em>These are very important for every aspiring JavaScript Developer, these are used in almost every JavaScript Library or…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp"><strong>How-to: call() , apply() and bind() in JavaScript | Codementor</strong><br />
<em>In this post, we will be discussing the difference between call(), apply(), and bind() methods of JavaScript functions…</em>www.codementor.io</a><a href="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/"><strong>JavaScript's Apply, Call, and Bind Methods are Essential for JavaScript Professionals</strong><br />
<em>Prerequisite: - Understand JavaScript's "this" With Ease, and Master It. - JavaScript Objects - Understand JavaScript…</em>javascriptissexy.com</a><a href="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/"><strong>Understanding the "this" keyword, call, apply, and bind in JavaScript - ui.dev</strong><br />
<em>Before diving into the specifics of the this keyword in JavaScript, it's important to take a step back and first look…</em>tylermcginnis.com</a><a href="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb"><strong>Javascript: call(), apply() and bind()</strong><br />
<em>“this” refresher</em>medium.com</a><a href="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b"><strong>The difference between call / apply / bind</strong><br />
<em>JavaScript is a dynamic language, and is flexible enough to let you do things like multiple inheritance. That’s when an…</em>medium.com</a><a href="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce"><strong>What the hack is call, apply, bind in JavaScript</strong><br />
<em>Before start looking into call, apply, bind you should understand - how does "this" keyword works in JavaScript. In…</em>dev.to</a><a href="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/"><strong>Mastering 'this' in JavaScript: Callbacks and bind(), apply(), call() - The New Stack</strong><br />
<em>In Part One of our tutorial on mastering the 'this' keyword in JavaScript, we looked at why the concept of 'this' can…</em>thenewstack.io</a><a href="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo"><strong>JavaScript's apply, call, and bind explained by hosting a cookout</strong><br />
<em>If you have ever been in charge of operating the grill at a family event or party, then you can understand apply, call…</em>dev.to</a><a href="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb"><strong>How AND When to use bind, call, and apply in Javascript - Eigen X</strong><br />
<em>In order for you to fully understand bind, call, and apply you have to understand the Javascript concept of this …</em>www.eigenx.com</a><a href="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html"><strong>JavaScript: bind() vs apply() and call()</strong><br />
<em>var fruit = { name: 'Apple' }; and this function: function showDetails(size, price) { console.log(this.name + ' ' +…</em>www.hacksparrow.com</a><a href="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja"><strong>Let me explain to you what is `this`. (Javascript)</strong><br />
<em>Original post: https://www.ycmjason.com/blog/2018/06/15.html this article assumes 'use strict' in all context this…</em>dev.to</a><a href="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8"><strong>Understanding the “this” Keyword in JavaScript</strong><br />
<em>How the value of “this” is assigned in different scenarios</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8"><strong>How to understand the keyword this and context in JavaScript</strong><br />
<em>As mentioned in one of my earlier articles, mastering JavaScript fully can be a lengthy journey. You may have come…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1"><strong>What is "this" in Javascript ?</strong><br />
<em>While learning JavaScript there are many roadblocks like closures, asynchronous programming, this keywords, etc. These…</em>dev.to</a><a href="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam"><strong>This and Bind In Javascript</strong><br />
<em>If you're learning Javascript, you'll no doubt run into the this keyword early on. At first, it appears quite simple…</em>dev.to</a><a href="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf"><strong>3 Techniques for Maintaining Your Sanity Using "This" in JavaScript</strong><br />
<em>Of JavaScript's many confusing aspects, the keyword this can be one of the most complicated -- Here's a joke about the…</em>dev.to</a><a href="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa"><strong>Mastering the JavaScript "this" Keyword</strong><br />
<em>The this keyword is a very important concept in JavaScript, and also a particularly confusing one to both new…</em>dev.to</a><a href="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n"><strong>This binding in JavaScript - 4. New binding</strong><br />
<em>This post ( This binding in JavaScript - 4. New binding) was originally published on Sargalias. In this series we talk…</em>dev.to</a><a href="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp"><strong>A quick intro to 'this' in JavaScript</strong><br />
<em>Probably one of the most confusing aspects of JavaScript is finding out what 'this' means. In this post, I will try to…</em>dev.to</a><a href="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig"><strong>Explaining JavaScript 'this' to my cat</strong><br />
<em>My cat is not very good at JavaScript (also at many other things), so today I will try to explain this keyword to him…</em>dev.to</a><a href="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g"><strong>A conversation with the 'this' keyword in Javascript</strong><br />
<em>'This' is one of the most confusing concepts in Javascript. Here's the sad news. It is just as important to understand…</em>dev.to</a><a href="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/"><strong>What are call(), apply() and bind() in JavaScript - JS Curious</strong><br />
<em>In JavaScript this refers to the owner object. If you want to attach some extra properties to a function, then you can…</em>jscurious.com</a><a href="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d"><strong>Understanding “this” binding in Javascript</strong><br />
<em>In order to understand “this” keyword clearly, we need to go through of how the execution context works at first. Every…</em>medium.com</a><a href="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e"><strong>JavaScript For Beginners: the ‘new’ operator</strong><br />
<em>Preface</em>codeburst.io</a><a href="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c"><strong>Let’s demystify JavaScript’s ‘new’ keyword</strong><br />
<em>Over the weekend, I completed Will Sentance’s JavaScript: The Hard Parts. It might not sound like the most glorious way…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/constructor-new" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/constructor-new"><strong>Constructor, operator "new"</strong><br />
<em>The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple…</em>javascript.info</a><a href="https://javascript.info/constructor-new" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://css-tricks.com/understanding-javascript-constructors/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/understanding-javascript-constructors/"><strong>Understanding JavaScript Constructors</strong><br />
<em>The following is a guest post by Faraz Kelhini. Some of this stuff is out of my comfort zone, so I asked Kyle Simpson…</em>css-tricks.com</a><a href="https://css-tricks.com/understanding-javascript-constructors/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://2ality.com/2017/08/type-right.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://2ality.com/2017/08/type-right.html"><strong>Beyond `typeof` and `instanceof`: simplifying dynamic type checks</strong><br />
<em>This blog post describes a technique for making instanceof applicable to more values (on the right-hand side)…</em>2ality.com</a><a href="http://2ality.com/2017/08/type-right.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/"><strong>What Is the Instanceof Operator in JavaScript?</strong><br />
<em>Learn more about What Is the Instanceof Operator in JavaScript? from DevelopIntelligence. Your trusted developer…</em>appendto.com</a><a href="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac"><strong>Function and Object, instances of each other</strong><br />
<em>Explaining why Function is an instance of Object, and why Object is an instance of Function</em>javascriptrefined.io</a><a href="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"><strong>Inheritance and the prototype chain - JavaScript | MDN</strong><br />
<em>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b"><strong>Javascript : Prototype vs Class</strong><br />
<em>Let’s see how classes in JS are not what you think they are.</em>medium.com</a><a href="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-prototype-cb29d82b8809" class="markup--anchor markup--p-anchor">https://codeburst.io/javascript-prototype-cb29d82b8809</a>

<a href="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo"><strong>Prototype in Javascript | Codementor</strong><br />
<em>By default every function has a property name as prototype which is EMPTY ( by default). We can add properties and…</em>www.codementor.io</a><a href="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b"><strong>Prototypes in JavaScript</strong><br />
<em>In this post, we will discuss what are prototypes in JavaScript, how they help JavaScript in achieving the concepts of…</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872"><strong>Prototype in JavaScript: it’s quirky, but here’s how it works</strong><br />
<em>The following four lines are enough to confuse most JavaScript developers:</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2"><strong>Understanding JavaScript: Prototype and Inheritance</strong><br />
<em>Due to the amazing quantity of libraries, tools and all kinds of things that make your development easier, a lot of…</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d"><strong>Understanding Classes (ES5) and Prototypal Inheritance in JavaScript</strong><br />
<em>In a nutshell the above snippet creates a Person class that can have multiple instances. By convention functional…</em>dev.to</a><a href="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl"><strong>prototype, __proto__ and Prototypal inheritance in JavaScript</strong><br />
<em>This post was originally published on my website If you have spent some time with JavaScript, chances are that you have…</em>dev.to</a><a href="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/prototype-inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/prototype-inheritance"><strong>Prototypal inheritance</strong><br />
<em>In programming, we often want to take something and extend it. For instance, we have a user object with its properties…</em>javascript.info</a><a href="https://javascript.info/prototype-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript"><strong>How To Work with Prototypes and Inheritance in JavaScript | DigitalOcean</strong><br />
<em>JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized…</em>www.digitalocean.com</a><a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e"><strong>Master JavaScript Prototypes &amp; <em>Inheritance</em></strong><br />
Inheritancecodeburst.io</a><a href="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4"><strong>JavaScript’s Prototypal Inheritance Explained Using CSS</strong><br />
<em>Prototypal inheritance is arguably the least understood aspect of JavaScript. Well the good news is that if you…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance"><strong>Demystifying ES6 Classes And Prototypal Inheritance</strong><br />
<em>In the early history of the JavaScript language, a cloud of animosity formed over the lack of a proper syntax for…</em>scotch.io</a><a href="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di"><strong>Intro To Prototypal Inheritance - JS</strong><br />
<em>In this article I will try to give an introduction to protypal inheritance. As an "optional" pre-requisite, you can…</em>dev.to</a><a href="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm"><strong>Let's Build Prototypal Inheritance in JS</strong><br />
<em>The idea for this post is pretty simple. I want to some extent build and with that, illustrate how prototypes work in…</em>dev.to</a><a href="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b"><strong>Objects, Prototypes and Classes in JavaScript</strong><br />
<em>JavaScript is based on a simple object-oriented programming model with objects being a fundamental part of the…</em>dev.to</a><a href="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg"><strong>The magical world of JavaScript prototypes</strong><br />
<em>How many times have we heard "JavaScript is not an Object-Oriented language, it's Prototype-oriented"? It turns out…</em>dev.to</a><a href="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4"><strong>Understanding Prototypal Inheritance In JavaScript</strong><br />
<em>What Is Object-oriented Programming (OOP) Classical vs Prototypal Inheritance The Prototype Object And The Prototype…</em>dev.to</a><a href="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><strong>Object.create() - JavaScript | MDN</strong><br />
<em>The Object.create() method creates a new object, using an existing object as the prototype of the newly created object…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"><strong>Object.assign() - JavaScript | MDN</strong><br />
<em>The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2"><strong>Object.create in JavaScript</strong><br />
<em>The Object.create method is one of the methods to create a new object in JavaScript.</em>medium.com</a><a href="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html"><strong>Javascript Objects | A New Way to Create Objects | HTML Goodies</strong><br />
<em>There are a lot of ways to create Objects in JavaScript, perhaps even more to integrate inheritance into them. Just…</em>www.htmlgoodies.com</a><a href="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html"><strong>Basic Inheritance with Object.create</strong><br />
<em>A few issues back we looked at how to implement basic inheritance with constructors. In this issue, we'll look at how…</em>adripofjavascript.com</a><a href="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.geeksforgeeks.org/object-create-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.geeksforgeeks.org/object-create-javascript/"><strong>Object.create( ) In JavaScript - GeeksforGeeks</strong><br />
<em>Object and Object Constructors in JavaScript? In the living world of object-oriented programming we already know the…</em>www.geeksforgeeks.org</a><a href="https://www.geeksforgeeks.org/object-create-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358"><strong>Understanding the difference between Object.create() and the new operator.</strong><br />
<em>Why is it important to know the difference?</em>medium.com</a><a href="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/"><strong>JavaScript Object Creation: Patterns and Best Practices - SitePoint</strong><br />
<em>Jeff Mott guides you through a step-by-step approach to JavaScript object creation - from object literals to factory…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alligator.io/js/dealing-with-objects/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/js/dealing-with-objects/"><strong>Dealing With Objects in JavaScript With Object.assign, Object.keys and hasOwnProperty |…</strong><br />
<em>This post is a sort of grab bag to help you explore a few very useful methods to help you manage your objects in…</em>alligator.io</a><a href="https://alligator.io/js/dealing-with-objects/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/bar-talk/copying-objects-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/bar-talk/copying-objects-in-javascript"><strong>Copying Objects in JavaScript | DigitalOcean</strong><br />
<em>Objects are the fundamental blocks of JavaScript. An object is a collection of properties, and a property is an…</em>scotch.io</a><a href="https://scotch.io/bar-talk/copying-objects-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-object-assign-bc9696dcbb6e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-object-assign-bc9696dcbb6e"><strong>JavaScript: Object.assign()</strong><br />
<em>Veja nesse artigo como utilizar o Object.assign() do ECMAScript 6</em>codeburst.io</a><a href="https://codeburst.io/javascript-object-assign-bc9696dcbb6e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://flaviocopes.com/how-to-clone-javascript-object/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flaviocopes.com/how-to-clone-javascript-object/"><strong>How to deep clone a JavaScript object</strong><br />
<em>Copying objects in JavaScript can be tricky. Some ways perform a shallow copy, which is the default behavior in most of…</em>flaviocopes.com</a><a href="https://flaviocopes.com/how-to-clone-javascript-object/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/vzing/object-create-when-and-why-to-use-20m9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/vzing/object-create-when-and-why-to-use-20m9"><strong>Object.create(): When and Why to Use</strong><br />
<em>Object.create() is a method available on all JavaScript objects. It takes two arguments: the object you want to copy…</em>dev.to</a><a href="https://dev.to/vzing/object-create-when-and-why-to-use-20m9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d"><strong>JavaScript Functional Programming — map, filter and reduce</strong><br />
<em>Even if you don’t know what functional programming is you’ve probably been using map, filter and reduce just because…</em>medium.com</a><a href="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4"><strong>Learn map, filter and reduce in Javascript</strong><br />
<em>The perfect toolset for your venture in Functional Programming</em>medium.com</a><a href="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter"><strong>JavaScript's Map, Reduce, and Filter * Dan Martensen</strong><br />
<em>As engineers we build and manipulate arrays holding numbers, strings, booleans and objects almost everyday. We use them…</em>danmartensen.svbtle.com</a><a href="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209"><strong>How to Use Map, Filter, and Reduce in JavaScript</strong><br />
<em>Functional programming has been making quite a splash in the development world these days. And for good reason…</em>code.tutsplus.com</a><a href="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4"><strong>JavaScript — Learn to Chain Map, Filter, and Reduce</strong><br />
<em>Learn how to chain map, filter, and reduce in JavaScript</em>codeburst.io</a><a href="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464"><strong>Understanding map, filter and reduce in Javascript</strong><br />
<em>When working on Javascript projects you inevitably come across situations where you have to do some data manipulation…</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f"><strong>Functional Programming in JS: map, filter, reduce (Pt. 5)</strong><br />
<em>Note: This is part of the “Javascript and Functional Programming” series on learning functional programming techniques…</em>hackernoon.com</a><a href="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://wsvincent.com/functional-javascript-map-filter-reduce/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://wsvincent.com/functional-javascript-map-filter-reduce/"><strong>JavaScript: Map, Filter, Reduce</strong><br />
<em>JavaScript's built-in map, filter, and reduce array methods are invaluable to a modern JavaScript developer. First…</em>wsvincent.com</a><a href="https://wsvincent.com/functional-javascript-map-filter-reduce/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/"><strong>JavaScript Arrow Functions: Fat and Concise Syntax in ES6</strong><br />
<em>In this article, you'll learn all about JavaScript's arrow function syntax - including some of the gotchas you need to…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc"><strong>JavaScript: Arrow Functions for Beginners</strong><br />
<em>Last week I published this post on the keyword this for beginners. One of the topics that wasn’t covered in that…</em>codeburst.io</a><a href="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26"><strong>When (and why) you should use ES6 arrow functions — and when you shouldn’t</strong><br />
<em>Arrow functions (also called “fat arrow functions”) are undoubtedly one of the more popular features of ES6. They…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946"><strong>JavaScript — Learn &amp; Understand Arrow Functions</strong><br />
<em>A beginners guide to Arrow Functions in JavaScript</em>codeburst.io</a><a href="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83"><strong>(JavaScript )=&gt; Arrow functions</strong><br />
<em>This post is meant to summarise some of the things someone new to JavaScript and arrow functions needs to know. I do…</em>medium.com</a><a href="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://andepaulj.medium.com/javascript-reduce-79aab078da23" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://andepaulj.medium.com/javascript-reduce-79aab078da23"><strong>Javascript.reduce()</strong><br />
<em>The Mutli-Tool of JS</em>andepaulj.medium.com</a><a href="https://andepaulj.medium.com/javascript-reduce-79aab078da23" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://gofore.com/en/why-you-should-replace-foreach/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gofore.com/en/why-you-should-replace-foreach/"><strong>Why you should replace forEach with map and filter in JavaScript - Gofore</strong><br />
<em>TL;DR Prefer map and filter over forEach when you need to copy an array or part of it to a new one. One of the best…</em>gofore.com</a><a href="https://gofore.com/en/why-you-should-replace-foreach/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d"><strong>Simplify your JavaScript – Use .map(), .reduce(), and .filter()</strong><br />
<em>If you haven’t heard of .map(), .reduce(), and .filter() in JavaScript, you might want to learn to use it!</em>medium.com</a><a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/"><strong>JavaScript's Reduce Method Explained By Going On a Diet</strong><br />
<em>The reduce method in JavaScript gives you a simple way to take an array of values and combine them into one value, or…</em>blog.codeanalogies.com</a><a href="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160"><strong>Difference between map, filter and reduce in JavaScript</strong><br />
<em>I’ve seen a lot of JS beginners struggle when using map, filter or reduce and don’t know the different use cases of…</em>medium.com</a><a href="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hackernoon.com/map-filter-reduce-ebbed4be4201" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/map-filter-reduce-ebbed4be4201"><strong>Map⇄Filter⇄Reduce↻ | Hacker Noon</strong><br />
<em>Share it on LinkedIn! Due to that reason we were introduced with these three higher order functions, namely 🗺️Map…</em>hackernoon.com</a><a href="https://hackernoon.com/map-filter-reduce-ebbed4be4201" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6"><strong>Finding Your Way With .Map()</strong><br />
<em>At the end of the article is a CodePen that demonstrates the concepts presented here.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26"><strong>How to write your own map, filter and reduce functions in JavaScript</strong><br />
<em>A sneak peek into functional programming and higher order functions in Javascript.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/"><strong>How to Manipulate Arrays in JavaScript</strong><br />
<em>An important part of any programming language. Most times we need to do several operations on arrays, hence this…</em>www.freecodecamp.org</a><a href="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/pickleat/map-filter-and-reduce-2efb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/pickleat/map-filter-and-reduce-2efb"><strong>.map(), .filter(), and .reduce()</strong><br />
<em>Originally posted on my blog For the last several weeks I've been applying for jobs. Sadly, the startup I was working…</em>dev.to</a><a href="https://dev.to/pickleat/map-filter-and-reduce-2efb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47"><strong>Map, Filter and Reduce – Animated</strong><br />
<em>Map, filter and reduce have been around for a long time. They are often seen as part of Functional Programming style.</em>jstutorial.medium.com</a><a href="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209"><strong>Map, Filter, Reduce and others Arrays Iterators You Must Know to Become an Algorithms Wizard</strong><br />
<em>In this article we are going to take a close look at some arrays iterators like , , or others methods that use…</em>dev.to</a><a href="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24"><strong>How to Use JavaScript’s .map, .filter, and .reduce</strong><br />
<em>How to use these three useful JavaScript functions</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7"><strong>Javascript performance test - for vs for each vs (map, reduce, filter, find).</strong><br />
<em>We all know that for loop are faster than for each or javascript function since under the hood of javascript functions…</em>towardsdatascience.com</a><a href="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2"><strong>Using .map(), .filter() and .reduce() properly 👩🏽‍💻</strong><br />
<em>Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a…</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c"><strong>Javascript and Functional Programming — Pt. 3: Pure Functions</strong><br />
<em>Purity</em>hackernoon.com</a><a href="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976"><strong>Master the JavaScript Interview: What is a Pure Function?</strong><br />
<em>Pure functions are essential for a variety of purposes, including functional programming, reliable concurrency, and…</em>medium.com</a><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c"><strong>JavaScript: What Are Pure Functions And Why Use Them?</strong><br />
<em>The first time I heard the term “Pure Function” I was confused. What was wrong with a regular function? Why does it…</em>medium.com</a><a href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/"><strong>Pure functions in JavaScript</strong><br />
<em>A pure function doesn't depend on and doesn't modify the states of variables out of its scope. Concretely, that means a…</em>www.nicoespeon.com</a><a href="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/functional-programming-pure-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/functional-programming-pure-functions/"><strong>Functional Programming: Pure Functions - SitePoint</strong><br />
<em>This is the second part of a two part series on functional programming in Ruby. Before we explored immutable values…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/functional-programming-pure-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://appdividend.com/2017/04/10/pure-functions-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://appdividend.com/2017/04/10/pure-functions-in-javascript/"><strong>Pure Functions In Javascript</strong><br />
<em>Pure functions in Javascript are kind of Functions where the return value is determined by its parameter passed at call…</em>appdividend.com</a><a href="https://appdividend.com/2017/04/10/pure-functions-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alistapart.com/article/making-your-javascript-pure" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alistapart.com/article/making-your-javascript-pure"><strong>Making your JavaScript Pure</strong><br />
<em>Once your website or application goes past a small number of lines, it will inevitably contain bugs of some sort. This…</em>alistapart.com</a><a href="https://alistapart.com/article/making-your-javascript-pure" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa"><strong>Arrays, Objects and Mutations</strong><br />
<em>Here are some thoughts on how to avoid mutations when working with arrays and objects in JavaScript by treating them as…</em>medium.com</a><a href="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310"><strong>The State of Immutability</strong><br />
<em>Immutability is a hot subject in modern JavaScript. The reason why this topic is so popular now is of course the…</em>medium.com</a><a href="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/"><strong>How to deal with dirty side effects in your pure functional JavaScript</strong><br />
<em>If you start learning about functional programming, it won't be long before you come across the idea of pure functions…</em>jrsinclair.com</a><a href="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://davidwalsh.name/preventing-sideeffects-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://davidwalsh.name/preventing-sideeffects-javascript"><strong>Preventing Side Effects in JavaScript</strong><br />
<em>JavaScript is very dynamic these days but I still see a lot of legacy code, whether it be for optimal backward…</em>davidwalsh.name</a><a href="https://davidwalsh.name/preventing-sideeffects-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition"><strong>Wielding Pure Functions in JavaScript and Function Composition</strong><br />
<em>Today, I'd like to share some thoughts on two fundamental concepts in functional programming: Pure functions and…</em>scotch.io</a><a href="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://wsvincent.com/javascript-pure-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://wsvincent.com/javascript-pure-functions/"><strong>JavaScript: Pure Functions</strong><br />
<em>Pure functions are fundamental to functional programming, concurrency, writing testable code, and having deterministic…</em>wsvincent.com</a><a href="https://wsvincent.com/javascript-pure-functions/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1"><strong>Functional programming paradigms in modern JavaScript: Pure functions</strong><br />
<em>JavaScript is one of the most popular programming languages out there. It runs in the browser, on desktop, on mobile…</em>hackernoon.com</a><a href="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3"><strong>Understanding Javascript Mutation and Pure Functions</strong><br />
<em>Boost your app performance by better understanding Mutation and Pure Functions in JS</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08"><strong>Functional-ish JavaScript</strong><br />
<em>Functional programming is a great discipline to learn and apply when writing JavaScript. Writing stateless, idempotent…</em>bluepnume.medium.com</a><a href="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"><strong>Introduction to events - Learn web development | MDN</strong><br />
<em>Events are actions or occurrences that happen in the system you are programming, which the system tells you about so…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/bubbling-and-capturing" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/bubbling-and-capturing"><strong>Bubbling and capturing</strong><br />
<em>Let's start with an example. This handler is assigned to , but also runs if you click any nested tag like or : Isn't it…</em>javascript.info</a><a href="https://javascript.info/bubbling-and-capturing" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.youtube.com/watch?v=Jh_Uzqzz_wM" class="markup--anchor markup--p-anchor">https://www.youtube.com/watch?v=Jh_Uzqzz_wM</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" class="markup--anchor markup--p-anchor">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures</a>  
<a href="https://javascript.info/closure" class="markup--anchor markup--p-anchor">https://javascript.info/closure</a>

<a href="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8"><strong>I never understood JavaScript closures</strong><br />
<em>Until someone explained it to me like this …</em>medium.com</a><a href="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://javascriptissexy.com/understand-javascript-closures-with-ease/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://javascriptissexy.com/understand-javascript-closures-with-ease/"><strong>Understand JavaScript Closures With Ease</strong><br />
<em>Closures allow JavaScript programmers to write better code. Creative, expressive, and concise. We frequently use…</em>javascriptissexy.com</a><a href="http://javascriptissexy.com/understand-javascript-closures-with-ease/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understanding-javascript-closures-da6aab330302" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/understanding-javascript-closures-da6aab330302"><strong>Understanding JavaScript Closures</strong><br />
<em>When you’re first learning JavaScript, terms like “closures” may make the language appear mystical and hard to…</em>codeburst.io</a><a href="https://codeburst.io/understanding-javascript-closures-da6aab330302" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understand-closures-in-javascript-d07852fa51e7" class="markup--anchor markup--p-anchor">https://codeburst.io/understand-closures-in-javascript-d07852fa51e7</a>

<a href="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4"><strong>A simple guide to help you understand closures in JavaScript</strong><br />
<em>Closures in JavaScript are one of those concepts that many struggle to get their heads around. In the following…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach"><strong>Understanding JavaScript Closures: A Practical Approach</strong><br />
<em>Learning a new language involves a series of steps, whereas its mastery is a product of patience, practice, mistakes…</em>scotch.io</a><a href="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b"><strong>Understanding JavaScript: Closures</strong><br />
<em>Why learn JavaScript in depth?</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b"><strong>How to use JavaScript closures with confidence</strong><br />
<em>Using closures will be a piece of (chocolate) cake</em>hackernoon.com</a><a href="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example"><strong>JavaScript Closures by Example</strong><br />
<em>At some point you may have run into a problem when executing functions from within a for loop. The first time it…</em>howchoo.com</a><a href="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-closures-and-scope-3784c75b9290" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-closures-and-scope-3784c75b9290"><strong>JavaScript — Closures and Scope</strong><br />
<em>Looking at JavaScript today, it can be scary as a beginner. People talk about watching out for all the little quirks or…</em>codeburst.io</a><a href="https://codeburst.io/javascript-closures-and-scope-3784c75b9290" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7"><strong>Discover the power of closures in JavaScript</strong><br />
<em>Discover Functional JavaScript was named one of the best new Functional Programming books by BookAuthority! A closure…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00"><strong>Simplified JavaScript: Getting Started with Closures</strong><br />
<em>Eric Elliot, in his Medium article Master the JavaScript Interview: What is a Closure?, explains that when he…</em>code.likeagirl.io</a><a href="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://reallifejs.com/the-meat/getting-closure/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://reallifejs.com/the-meat/getting-closure/"><strong>Javascript Closures 101 - Explaining how closures work</strong><br />
<em>So, "closures", right? That's a fun one that tends to cause confusion all around. It's pretty much a given that at some…</em>reallifejs.com</a><a href="http://reallifejs.com/the-meat/getting-closure/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9"><strong>Closure, Currying and IIFE in JavaScript</strong><br />
<em>These are some of the concepts of JavaScript where everyone struggle in beginning. Lets try to simplify them bit by…</em>dev.to</a><a href="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda"><strong>Understanding Closures in JavaScript</strong><br />
<em>Learn How Closures Really Work in JavaScript: hands-on guide</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e"><strong>A basic guide to Closures in JavaScript</strong><br />
<em>The Closure is a collection of all variables in scope at the time of function creation. To use closure create a…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/steelvoltage/closures-using-memoization-3597" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/steelvoltage/closures-using-memoization-3597"><strong>Closures: Using Memoization</strong><br />
<em>One of the core tenets of Functional Programming is that a function should return the same value if given the same…</em>dev.to</a><a href="https://dev.to/steelvoltage/closures-using-memoization-3597" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232"><strong>A Brief Introduction to Closures and Lexical Scoping in JavaScript</strong><br />
<em>“Writing in ECMAScript language without understanding closure is like writing Java without understanding classes”</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/stereobooster/demystify-closures-5g42" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/stereobooster/demystify-closures-5g42"><strong>Demystify Closures</strong><br />
<em>In the previous post we implemented functions, but not about closures. Let's fix this. Without closures following code…</em>dev.to</a><a href="https://dev.to/stereobooster/demystify-closures-5g42" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj"><strong>Scope - JavaScript Concepts</strong><br />
<em>This is part of a series where I try to explain through each of 33 JS Concepts. Originally written on my blog with…</em>dev.to</a><a href="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d"><strong>Understanding Closures in JavaScript</strong><br />
<em>When you declare a function inside another function, a closure is the new environment created by combining the inner…</em>dev.to</a><a href="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://whatthefuck.is/closure" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://whatthefuck.is/closure"><strong>What the fuck is a closure? ・ Dan's JavaScript Glossary</strong><br />
<em>Closures are confusing because they are an "invisible" concept. When you use an object, a variable, or a function, you…</em>whatthefuck.is</a><a href="https://whatthefuck.is/closure" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://dev.to/brandonleboeuf/closure-in-javascript-49n7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/brandonleboeuf/closure-in-javascript-49n7"><strong>Closures in JavaScript can...</strong><br />
<em>I gain more understanding of a topic when I get to talk/write about it... much to my wife's horror as she has zero…</em>dev.to</a><a href="https://dev.to/brandonleboeuf/closure-in-javascript-49n7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.youtube.com/watch?v=1JsJx1x35c0" class="markup--anchor markup--p-anchor">https://www.youtube.com/watch?v=1JsJx1x35c0</a>

<a href="https://eloquentjavascript.net/05_higher_order.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://eloquentjavascript.net/05_higher_order.html"><strong>Higher-Order Functions :: Eloquent JavaScript</strong><br />
<em>Tzu-li and Tzu-ssu were boasting about the size of their latest programs. 'Two-hundred thousand lines,' said Tzu-li…</em>eloquentjavascript.net</a><a href="https://eloquentjavascript.net/05_higher_order.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/higher-order-functions-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/higher-order-functions-javascript/"><strong>Higher-Order Functions in JavaScript - SitePoint</strong><br />
<em>Continuing his look at functional programming in JavaScript, M. David Green examines higher-order functions and how…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/higher-order-functions-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528"><strong>Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code</strong><br />
<em>Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a"><strong>First-class and Higher Order Functions: Effective Functional JavaScript</strong><br />
<em>Functions: the killer JavaScript feature we never talk about.</em>hackernoon.com</a><a href="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.lullabot.com/articles/higher-order-functions-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.lullabot.com/articles/higher-order-functions-in-javascript"><strong>Higher Order Functions in JavaScript</strong><br />
<em>Higher-order functions can be intimidating at first, but they're not that hard to learn. A higher-order function is…</em>www.lullabot.com</a><a href="https://www.lullabot.com/articles/higher-order-functions-in-javascript" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://javascriptissexy.com/tag/higher-order-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://javascriptissexy.com/tag/higher-order-functions/"><strong>Higher-order Functions - JavaScript Is Sexy</strong><br />
<em>In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a…</em>javascriptissexy.com</a><a href="http://javascriptissexy.com/tag/higher-order-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/"><strong>Fun With Higher Order Functions In JavaScript</strong><br />
<em>JavaScript is often referred to as a language with functional programming capabilities because of it's "higher order…</em>derickbailey.com</a><a href="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/pedroapfilho/high-order-functions" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/pedroapfilho/high-order-functions"><strong>pedroapfilho/array-methods</strong><br />
<em>Just a reminder on how to use array methods. Contribute to pedroapfilho/array-methods development by creating an…</em>github.com</a><a href="https://github.com/pedroapfilho/high-order-functions" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad"><strong>Understanding Higher-Order Functions in JavaScript</strong><br />
<em>Learn What Higher-Order Functions are and how to use them in JavaScript</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb"><strong>Higher Order Functions - A pragmatic approach</strong><br />
<em>Its a common saying that functions are the bread and butter of programming, and the basic unit for building reusable…</em>dev.to</a><a href="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f"><strong>Recursion in JavaScript</strong><br />
<em>I’m just gonna get this out of the way right up front, because people get really angry otherwise:</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03"><strong>Understanding Recursion in JavaScript</strong><br />
<em>One of the many things that JavaScript has going for it is the ability to recursively call functions. This feature is…</em>medium.com</a><a href="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea"><strong>Learn and Understand Recursion in JavaScript</strong><br />
<em>I’ll walk you through two popular JS recursion examples in 10 minutes so you can finally understand how recursion works…</em>codeburst.io</a><a href="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/recursion-functional-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/recursion-functional-javascript/"><strong>Recursion in Functional JavaScript - SitePoint</strong><br />
<em>M. David Green demonstrates the powerful, but dizzying concept of recursion by refactoring normal for and while loops…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/recursion-functional-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/programming-with-js-recursion-31371e2bf808" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/programming-with-js-recursion-31371e2bf808"><strong>Programming with JS: Recursion</strong><br />
<em>Understanding data structures, algorithms and basic programming concepts is essential for one to become a better…</em>hackernoon.com</a><a href="https://hackernoon.com/programming-with-js-recursion-31371e2bf808" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/simov/anonymous-recursion-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/simov/anonymous-recursion-in-javascript"><strong>Anonymous Recursion in JavaScript</strong><br />
<em>Yes, there is such thing, and I thought it would be an interesting example to share. It features: closures…</em>dev.to</a><a href="https://dev.to/simov/anonymous-recursion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/"><strong>Recursion, iteration and tail calls in JS</strong><br />
<em>If you've been on the business for some time, you have, most likely, come across the definition of recursion, for which…</em>www.jstips.co</a><a href="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b"><strong>Intro to Recursion</strong><br />
<em>Recursion can be a difficult concept to wrap your head around, but its definition is rather simple: recursion is when a…</em>medium.com</a><a href="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3"><strong>Accio Recursion!: Your New Favorite JavaScript Spell</strong><br />
<em>The spell “Accio” allows a witch or wizard to summon something to them. Casting Accio is just like accessing a value in…</em>medium.datadriveninvestor.com</a><a href="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m"><strong>Recursion Explained (with Examples)</strong><br />
<em>"To understand recursion, one must first understand recursion" - Unknown Recursion is a method of solving problems…</em>dev.to</a><a href="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"><strong>Generator - JavaScript | MDN</strong><br />
<em>This object cannot be instantiated directly. Instead, a Generator instance can be returned from a generator function…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/"><strong>ES6 In Depth: Collections - Mozilla Hacks - the Web developer blog</strong><br />
<em>ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the…</em>hacks.mozilla.org</a><a href="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/"><strong>ES6 Collections: Using Map, Set, WeakMap, WeakSet - SitePoint</strong><br />
<em>Most major programming languages have several types of data collections. Python has lists, tuples, and dictionaries…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alligator.io/js/maps-introduction/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/js/maps-introduction/"><strong>Introduction to Maps in JavaScript | DigitalOcean</strong><br />
<em>While this tutorial has content that we believe is of great benefit to our community, we have not yet tested or edited…</em>alligator.io</a><a href="https://alligator.io/js/maps-introduction/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/map-set-weakmap-weakset" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/map-set-weakmap-weakset"><strong>Map and Set</strong><br />
<em>Till now, we've learned about the following complex data structures: Objects are used for storing keyed collections…</em>javascript.info</a><a href="https://javascript.info/map-set-weakmap-weakset" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk"><strong>Maps in ES6 - A Quick Guide</strong><br />
<em>Maps and Sets often get lumped together in articles. They're both new ES6 collection types with similar interfaces but…</em>dev.to</a><a href="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a"><strong>ES6 — Set vs Array — What and when?</strong><br />
<em>What is Set and what is Array?</em>medium.com</a><a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373"><strong>ES6 — Map vs Object — What and when?</strong><br />
<em>You may wonder — why Map vs Object but not Map vs Array, or Object vs Set? Well, you can also compare between any of…</em>medium.com</a><a href="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/"><strong>ES6: Working with Sets in JavaScript</strong><br />
<em>In this post we're continuing to look at features introduced in ES6. Amongst all the cool things happening in ES6, we…</em>www.deadcoderising.com</a><a href="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b"><strong>Array vs Set vs Map vs Object — Real-time use cases in Javascript (ES6/ES7)</strong><br />
<em>The internet is a great place to find information, but there is one teeny-tiny problem. You are on a boat in the middle…</em>codeburst.io</a><a href="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6"><strong>How to create an array of unique values in JavaScript using Sets</strong><br />
<em>Sorry for the verbose title - sometimes things can be explained better with a code example. Imagine you have a…</em>dev.to</a><a href="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e"><strong>What You Should Know About ES6 Maps</strong><br />
<em>JavaScript ES6 introduces a new data structure, called maps. Maps are designed as an alternative to using Object…</em>hackernoon.com</a><a href="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/es6-maps-in-depth" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/es6-maps-in-depth"><strong>ES6 Maps in Depth</strong><br />
<em>A very common abuse case of JavaScript objects is hash-maps, where we map string keys to arbitrary values.</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/es6-maps-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e"><strong>What are JavaScript Generators and how to use them</strong><br />
<em>In this article, we’re going to take a look at the generators that were introduced in ECMAScript 6. We’ll see what it…</em>codeburst.io</a><a href="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5"><strong>Understanding Generators in ES6 JavaScript with Examples</strong><br />
<em>ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). A…</em>codeburst.io</a><a href="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://davidwalsh.name/es6-generators" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://davidwalsh.name/es6-generators"><strong>The Basics Of ES6 Generators</strong><br />
<em>One of the most exciting new features coming in JavaScript ES6 is a new breed of function, called a generator. The name…</em>davidwalsh.name</a><a href="https://davidwalsh.name/es6-generators" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224"><strong>An Introduction to JavaScript Generators</strong><br />
<em>One of the fundamentals of JavaScript is that it is single-threaded, meaning that two pieces of code cannot run at the…</em>dev.to</a><a href="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><strong>Promise - JavaScript | MDN</strong><br />
<em>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/javascript-promises-for-dummies" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/javascript-promises-for-dummies"><strong>Understanding JavaScript Promises | DigitalOcean</strong><br />
<em>Javascript Promises can be challenging to understand. Therefore, I would like to write down the way I understand…</em>scotch.io</a><a href="https://scotch.io/tutorials/javascript-promises-for-dummies" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1"><strong>Understanding Promises in JavaScript</strong><br />
<em>An in-depth look at creating and handling Promises</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261"><strong>Master the JavaScript Interview: What is a Promise?</strong><br />
<em>“Master the JavaScript Interview” is a series of posts designed to prepare candidates for common questions they are…</em>medium.com</a><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/overview-javascript-promises/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/overview-javascript-promises/"><strong>An Overview of JavaScript Promises - SitePoint</strong><br />
<em>This article explores JavaScript's new Promises API, showing how you can leverage promises in your JavaScript…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/overview-javascript-promises/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de"><strong>How to use Promises in JavaScript</strong><br />
<em>Promises in JavaScript are a way to handle async calls. Before Promises were introduced in JavaScript ES6, async calls…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51"><strong>Implementing Promises In JavaScript</strong><br />
<em>The thing I love most about programming is the aha! moment when you start to fully understand a concept. Even though it…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138"><strong>JavaScript: Promises explained with simple real life analogies</strong><br />
<em>Talking about promises in layman terms</em>codeburst.io</a><a href="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://exploringjs.com/es6/ch_promises.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://exploringjs.com/es6/ch_promises.html"><strong>25. Promises for asynchronous programming</strong><br />
<em>This chapter is an introduction to asynchronous programming via Promises in general and the ECMAScript 6 Promise API in…</em>exploringjs.com</a><a href="http://exploringjs.com/es6/ch_promises.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/"><strong>JavaScript Promises Explained By Gambling At A Casino</strong><br />
<em>We all love the asynchronous capabilities of JavaScript. In fact, we love them so much that sometimes, we overindulge…</em>blog.codeanalogies.com</a><a href="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918"><strong>ES6 Promises: Patterns and Anti-Patterns</strong><br />
<em>When I first got started with NodeJS a few years ago, I was mortified by what is now affectionately known as “callback…</em>medium.com</a><a href="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a"><strong>A Simple Guide to ES6 Promises</strong><br />
<em>The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep. — Robert Frost</em>codeburst.io</a><a href="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/the-es6-promises-87a979ab27e4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/the-es6-promises-87a979ab27e4"><strong>The ES6 Promises</strong><br />
<em>A very helpful feature in ES6</em>codeburst.io</a><a href="https://codeburst.io/the-es6-promises-87a979ab27e4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/es6-promises-in-depth" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/es6-promises-in-depth"><strong>ES6 Promises in Depth</strong><br />
<em>Promises are a very involved paradigm, so we'll take it slow. Here's a table of contents with the topics we'll cover in…</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/es6-promises-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3"><strong>Javascript Promises: An In-Depth Approach</strong><br />
<em>“Write down the syntax for promises on this sheet of paper”, is enough to give nightmares to a lot of junior and even…</em>codeburst.io</a><a href="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8"><strong>How to Write a JavaScript Promise</strong><br />
<em>What is a promise?</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c"><strong>A Coding Writer’s Guide: An Introduction To ES6 Promises</strong><br />
<em>Welcome back to the ‘A Coding Writer’s Guide’ series! If you have been keeping up with this series, you’d know that I…</em>medium.com</a><a href="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc"><strong>Reverse engineering - Understanding Promises in JavaScript</strong><br />
<em>We will reverse engineer Promises in JavaScript together with some 90s nostalgia. Tagged with showdev, tutorial…</em>dev.to</a><a href="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/zellwk/converting-callbacks-to-promises-nhn" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/zellwk/converting-callbacks-to-promises-nhn"><strong>Converting callbacks to promises</strong><br />
<em>It's easier to work with Promises (or Async/await) compared to callbacks. This is especially true when you work in…</em>dev.to</a><a href="https://dev.to/zellwk/converting-callbacks-to-promises-nhn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa"><strong>JavaScript Promises: Zero To Hero Plus Cheat Sheet</strong><br />
<em>It’s time, friend. Native JavaScript promises explained how I wish they were explained to me — plus a handy cheat…</em>medium.com</a><a href="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c"><strong>Promises - JavaScript concepts</strong><br />
<em>This is part of a series where I try to explain through each of 33 JS Concepts. This part corresponds to Promises…</em>dev.to</a><a href="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/iggredible/javascript-promise-101-3idl" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/iggredible/javascript-promise-101-3idl"><strong>Javascript Promise 101</strong><br />
<em>Knowing how Promise works in javascript will boost your development skill exponentially. Here I will share: I promise…</em>dev.to</a><a href="https://dev.to/iggredible/javascript-promise-101-3idl" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/sunnysingh/simplify-javascript-promises-4djb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/sunnysingh/simplify-javascript-promises-4djb"><strong>Simplify JavaScript Promises</strong><br />
<em>I love promises. Not from people, but from JavaScript. Tweet Quote I love promises. Not from people, but from…</em>dev.to</a><a href="https://dev.to/sunnysingh/simplify-javascript-promises-4djb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f"><strong>The Lowdown on Promises</strong><br />
<em>A quick and concise guide on how Promises work in JavaScript</em>medium.com</a><a href="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke"><strong>⭐️🎀 JavaScript Visualized: Promises &amp; Async/Await</strong><br />
<em>Ever had to deal with JS code that just... didn't run the way you expected it to? Maybe it seemed like functions got…</em>dev.to</a><a href="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k"><strong>Promises in JavaScript</strong><br />
<em>Callbacks are functions that run after something happens or something completes. If you have to make an asynchronous…</em>dev.to</a><a href="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/somedood/best-practices-for-es6-promises-36da" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/somedood/best-practices-for-es6-promises-36da"><strong>Best Practices for ES6 Promises</strong><br />
<em>ES6 promises are great! Yet... they are still quite painful to deal with. In this article, I share the best practices I…</em>dev.to</a><a href="https://dev.to/somedood/best-practices-for-es6-promises-36da" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/async-await" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/async-await"><strong>Async/await</strong><br />
<em>There's a special syntax to work with promises in a more comfortable fashion, called "async/await". It's surprisingly…</em>javascript.info</a><a href="https://javascript.info/async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://eloquentjavascript.net/11_async.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://eloquentjavascript.net/11_async.html"><strong>Asynchronous Programming :: Eloquent JavaScript</strong><br />
<em>Who can wait quietly while the mud settles?Who can remain still until the moment of action? Laozi, Tao Te Ching The…</em>eloquentjavascript.net</a><a href="https://eloquentjavascript.net/11_async.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://exploringjs.com/es6/ch_async.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://exploringjs.com/es6/ch_async.html"><strong>24. Asynchronous programming (background)</strong><br />
<em>This chapter explains foundations of asynchronous programming in JavaScript. It provides background knowledge for the…</em>exploringjs.com</a><a href="http://exploringjs.com/es6/ch_async.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c"><strong>Understanding async-await in JavaScript</strong><br />
<em>Rules of thumb and examples for when and how to use async and await</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alligator.io/js/async-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/js/async-functions/"><strong>Exploring Async/Await Functions in JavaScript | DigitalOcean</strong><br />
<em>Promises give us an easier way to deal with asynchrony in our code in a sequential manner. Considering that our brains…</em>alligator.io</a><a href="https://alligator.io/js/async-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/asynchronous-javascript-using-async-await" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/asynchronous-javascript-using-async-await"><strong>Asynchronous Javascript using Async - Await</strong><br />
<em>Async/await is a relatively new way to write asynchronous code in Javascript. Before we used callbacks and promises…</em>scotch.io</a><a href="https://scotch.io/tutorials/asynchronous-javascript-using-async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://flaviocopes.com/javascript-async-await/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flaviocopes.com/javascript-async-await/"><strong>Modern Asynchronous JavaScript with Async and Await</strong><br />
<em>JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript…</em>flaviocopes.com</a><a href="https://flaviocopes.com/javascript-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial"><strong>Asynchronous JavaScript: From Callback Hell to Async and Await</strong><br />
<em>One of the keys to writing a successful web application is being able to make dozens of AJAX calls per page. This is a…</em>www.toptal.com</a><a href="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a"><strong>Javascript — ES8 Introducing `async/await` Functions</strong><br />
<em>To gain some perspective on why folks are so excited about the ES8 async/await functions, you have to be familiar with…</em>medium.com</a><a href="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c"><strong>How to escape async/await hell</strong><br />
<em>async/await freed us from callback hell, but people have started abusing it — leading to the birth of async/await hell.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/understanding-javascript-async-await" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/understanding-javascript-async-await"><strong>Understanding JavaScript's async await</strong><br />
<em>Let's suppose we had code like the following. Here I'm wrapping an HTTP request in a Promise. The promise fulfills with…</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/understanding-javascript-async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://techbrij.com/javascript-async-await-parallel-sequence" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://techbrij.com/javascript-async-await-parallel-sequence"><strong>JavaScript Async/Await: Serial, Parallel and Complex Flow - TechBrij</strong><br />
<em>If you have experience on ASP.NET MVC then probably you are familiar with async/await keywords in C#. The same thing is…</em>techbrij.com</a><a href="https://techbrij.com/javascript-async-await-parallel-sequence" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://blog.pusher.com/promises-async-await/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.pusher.com/promises-async-await/"><strong>From JavaScript Promises to Async/Await: why bother?</strong><br />
<em>In this tutorial, we will cover why we need async/await when we could achieve the same fit with JavaScript Promises, to…</em>blog.pusher.com</a><a href="https://blog.pusher.com/promises-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/"><strong>Flow Control in Modern JS: Callbacks to Promises to Async/Await - SitePoint</strong><br />
<em>JavaScript is regularly claimed to be asynchronous. What does that mean? How does it affect development? How has the…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba"><strong>JavaScript: Promises and Why Async/Await Wins the Battle - DZone Performance</strong><br />
<em>Calling the validatePassword() function: The code snippet below shows a full end to end check for validating a password…</em>dzone.com</a><a href="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda"><strong>How to Improve Your Asynchronous JavaScript Code With Async and Await</strong><br />
<em>If you’ve had the chance to observe modern JavaScript code, there are high chances that you’ve seen the async and await…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6"><strong>Making Fetches Easy With Async Await</strong><br />
<em>Asynchronous requests are the source of many common and frustrating bugs in otherwise clean code. Because most of…</em>medium.com</a><a href="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9"><strong>7 Reasons Why JavaScript Async/Await Is Better Than Plain Promises (Tutorial)</strong><br />
<em>Async/await was introduced in NodeJS 7.6 and is currently supported in all modern browsers. I believe it has been the…</em>dev.to</a><a href="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b"><strong>Asynchronous Operations in JavaScript</strong><br />
<em>JavaScript comes from a legacy of peril with asynchronous operations. It began with callbacks to make Ajax calls for…</em>dev.to</a><a href="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j"><strong>Async/await: A slight design flaw.</strong><br />
<em>My experience with async/await is that it's amazing for simple cases and fulfils expectations. If your use cases are…</em>dev.to</a><a href="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789"><strong>JavaScript: Promises or async-await</strong><br />
<em>A set of rules for when to use which</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22"><strong>Async / Await: From Zero to Hero</strong><br />
<em>I had absolutely no idea what async / await was and learning it was hard as: There's 27 minutes worth of text to read…</em>dev.to</a><a href="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c"><strong>Data Structures in JavaScript</strong><br />
<em>For Frontend Software Engineers</em>medium.com</a><a href="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb"><strong>Algorithms and Data Structures in JavaScript</strong><br />
<em>Algorithms and data structures implemented in JavaScript with explanations and links to further readings and YouTube…</em>itnext.io</a><a href="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays"><strong>Data Structures: Objects and Arrays</strong><br />
<em>Ever seen some data in square brackets and curly brackets in JavaScript? These are Arrays and Objects respectively. //…</em>scotch.io</a><a href="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/"><strong>Data structures in JavaScript</strong><br />
<em>The #data-structures series is a collection of posts about reimplemented data structures in JavaScript. If you are not…</em>blog.benoitvallon.com</a><a href="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d"><strong>Playing with data structures in Javascript — Stack</strong><br />
<em>Javascript is evolving each day. With the rapid growth of frameworks and platforms like React, Angular, Vue, NodeJS…</em>blog.cloudboost.io</a><a href="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9"><strong>The Little Guide of Queue in JavaScript</strong><br />
<em>A queue is a simple data structure that allows elements to be inserted from one end, called the rear (also called…</em>hackernoon.com</a><a href="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/barretlee/algorithms" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/barretlee/algorithms"><strong>barretlee/algorithms</strong><br />
<em>Detail &amp; Discusion (讨论和细节) All algorithms writing with JavaScript in book ' Algorithms Fourth Edition'. Run…</em>github.com</a><a href="https://github.com/barretlee/algorithms" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/nzakas/computer-science-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/nzakas/computer-science-in-javascript"><strong>humanwhocodes/computer-science-in-javascript</strong><br />
<em>Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript. …</em>github.com</a><a href="https://github.com/nzakas/computer-science-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/jamiebuilds/itsy-bitsy-data-structures" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/jamiebuilds/itsy-bitsy-data-structures"><strong>jamiebuilds/itsy-bitsy-data-structures</strong><br />
<em>Welcome to Itsy Bitsy Data Structures! In here are super simplified examples of many of the common data structures…</em>github.com</a><a href="https://github.com/jamiebuilds/itsy-bitsy-data-structures" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/miku86/series/3259" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/miku86/series/3259"><strong>About DEV - DEV Community</strong><br />
<em>DEV is a community of software developers getting together to help one another out. The software industry relies on…</em>dev.to</a><a href="https://dev.to/miku86/series/3259" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5"><strong>Data Structures: Understanding Graphs</strong><br />
<em>What is a graph? Graphs are used to represents relationships and hierarchies and are composed of nodes and edges.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61"><strong>Data Structures Two Ways: Linked List (Pt 1)</strong><br />
<em>I work primarily with JavaScript, but the place I work is using Java on the backend. Always being fascinated with…</em>dev.to</a><a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60"><strong>Data Structures Two Ways: Linked List (Pt2)</strong><br />
<em>If you are new- well hello! check out part one if you like to start at the beginning or just jump straight in Right on…</em>dev.to</a><a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn"><strong>Graph Data Structures Explained in JavaScript</strong><br />
<em>In this post, we are going to explore non-linear data structures like graphs. Also, we'll cover the central concepts…</em>dev.to</a><a href="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b"><strong>Big O Notation in Javascript</strong><br />
<em>Get ready for your tech job interview</em>medium.com</a><a href="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b"><strong>Time Complexity/Big O Notation</strong><br />
<em>Scaling Algorithms Instead of Applications</em>medium.com</a><a href="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051"><strong>Big O in JavaScript</strong><br />
<em>Like many new developers before me, Big O went straight over my head the first time I heard about it. It was a topic…</em>medium.com</a><a href="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html" class="markup--anchor markup--p-anchor">http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html</a>

<a href="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/"><strong>Time Complexity Analysis in JavaScript</strong><br />
<em>An algorithm is a self-contained step-by-step set of instructions to solve a problem. It takes time for these steps to…</em>www.jenniferbland.com</a><a href="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c"><strong>Algorithms in plain English: time complexity and Big-O notation</strong><br />
<em>Every good developer has time on their mind. They want to give their users more of it, so they can do all those things…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o"><strong>An Introduction to Big O Notation</strong><br />
<em>Big O notation is a big topic, and its universal importance stems from the fact that it describes the efficiency of…</em>dev.to</a><a href="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6"><strong>Crizstian/data-structure-and-algorithms-with-ES6</strong><br />
<em>Num Type Exercises Description 10.- Graph Data Structure 2 A graph consists of a set of vertices and a set of edges. A…</em>github.com</a><a href="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/trekhleb/javascript-algorithms" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/trekhleb/javascript-algorithms"><strong>trekhleb/javascript-algorithms</strong><br />
<em>This repository contains JavaScript based examples of many popular algorithms and data structures. Each algorithm and…</em>github.com</a><a href="https://github.com/trekhleb/javascript-algorithms" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.thatjsdude.com/interview/js1.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.thatjsdude.com/interview/js1.html"><strong>JS: Algorithm</strong><br />
<em>More Questions CSS Interview Questions , HTML Interview Questions if you are little more comfortable or claim to be…</em>www.thatjsdude.com</a><a href="http://www.thatjsdude.com/interview/js1.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038"><strong>Algorithms in JavaScript</strong><br />
<em>40 Problems, Solutions, and Explanations</em>medium.com</a><a href="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158"><strong>JavaScript Objects, Square Brackets and Algorithms</strong><br />
<em>One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects. In this…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/felipernb/algorithms.js" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/felipernb/algorithms.js"><strong>felipernb/algorithms.js</strong><br />
<em>Classic algorithms and data structures implemented in JavaScript, you know... FOR SCIENCE.</em>github.com</a><a href="https://github.com/felipernb/algorithms.js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/yangshun/lago" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/yangshun/lago"><strong>yangshun/lago</strong><br />
<em>📕 Data Structures and Algorithms library in TypeScript - yangshun/lago</em>github.com</a><a href="https://github.com/yangshun/lago" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/idosela/algorithms-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/idosela/algorithms-in-javascript"><strong>idosela/algorithms-in-javascript</strong><br />
<em>Collection of computer science algorithms and data structures written in JavaScript. Run the sort performence test…</em>github.com</a><a href="https://github.com/idosela/algorithms-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3"><strong>Algorithms and Data Structures in JavaScript</strong><br />
<em>Hello Readers! I've recently launched JavaScript Algorithms and Data Structures repository on GitHub with a collection…</em>dev.to</a><a href="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance"><strong>Inheritance in JavaScript - Learn web development | MDN</strong><br />
<em>This article has covered the remainder of the core OOJS theory and syntax that we think you should know now. At this…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/class-inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/class-inheritance"><strong>Class inheritance</strong><br />
<em>Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the…</em>javascript.info</a><a href="https://javascript.info/class-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f"><strong>Inheritance in JavaScript</strong><br />
<em>Detailed walk thorough of inheritance in JavaScript</em>medium.com</a><a href="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/simple-inheritance-javascript/" class="markup--anchor markup--p-anchor">https://www.sitepoint.com/simple-inheritance-javascript/</a>

<a href="https://codeburst.io/javascript-inheritance-25fe61ab9f85" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-inheritance-25fe61ab9f85"><strong>JavaScript — Inheritance, delegation patterns and Object linking</strong><br />
<em>Learn about inheritance in JavaScript (prototypal inheritance), behavior/object delegation pattern and objects linked…</em>codeburst.io</a><a href="https://codeburst.io/javascript-inheritance-25fe61ab9f85" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/"><strong>Object Oriented JavaScript: Polymorphism with examples</strong><br />
<em>Again this is not the advance topic of JavaScript but it relies under Object Oriented JavaScript &amp; polymorphism is one…</em>blog.knoldus.com</a><a href="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2"><strong>Program Like Proteus — A beginner’s guide to polymorphism in Javascript</strong><br />
medium.com</a><a href="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/"><strong>Object-oriented JavaScript: A Deep Dive into ES6 Classes - SitePoint</strong><br />
<em>Often we need to represent an idea or concept in our programs - maybe a car engine, a computer file, a router, or a…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"><strong>Learning JavaScript Design Patterns</strong><br />
<em>An open-source book on JavaScript Design Patterns</em>addyosmani.com</a><a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know"><strong>JavaScript Design Patterns | DigitalOcean</strong><br />
<em>There are many times when one part of the application changes, other parts needs to be updated. In AngularJS, if the…</em>scotch.io</a><a href="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15"><strong>JavaScript Design Patterns</strong><br />
<em>The ultimate guide to the most useful design patterns</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81"><strong>JavaScript Design Patterns</strong><br />
<em>Constructor Pattern</em>medium.com</a><a href="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://seesparkbox.com/foundry/javascript_design_patterns" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://seesparkbox.com/foundry/javascript_design_patterns"><strong>Javascript Design Patterns: What They Are &amp; How To Use Them</strong><br />
<em>Developers often encounter coding problems in JavaScript that can be solved by using well-established design patterns…</em>seesparkbox.com</a><a href="https://seesparkbox.com/foundry/javascript_design_patterns" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd"><strong>Understanding Design Patterns in JavaScript</strong><br />
<em>Learn About Various Design Patterns in JavaScript</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/fbeline/Design-Patterns-JS" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/fbeline/Design-Patterns-JS"><strong>fbeline/design-patterns-JS</strong><br />
<em>Here you will find the 23 (GoF) design patterns implemented in JavaScript using both prototype and ES6 classes. You can…</em>github.com</a><a href="https://github.com/fbeline/Design-Patterns-JS" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8"><strong>The Power of the Module Pattern in JavaScript</strong><br />
<em>Embellish your app with the module pattern</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e"><strong>Design Patterns for Developers using JavaScript - Part One</strong><br />
<em>Most developers using JavaScript strives to write code that is readable, maintainable, and reusable because writing…</em>dev.to</a><a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39"><strong>Design Patterns for Developers using JavaScript - Part Two</strong><br />
<em>In the previous article, we had a look at design patterns, its definition, history, and the incorporation into software…</em>dev.to</a><a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca"><strong>Design patterns in modern JavaScript development</strong><br />
<em>Thoughts on effective communication in the design of software projects</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd"><strong>Understanding Design Patterns: Iterator using Dev.to and Medium social networks!</strong><br />
<em>There are 23 classic design patterns, which are described in the original book, Design Patterns: Elements of Reusable…</em>dev.to</a><a href="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p"><strong>JavaScript Design Patterns - Factory Pattern</strong><br />
<em>Welcome to my new development series where I try my best to explain design patterns by using JavaScript! In software…</em>dev.to</a><a href="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd"><strong>JavaScript Design Pattern — Module Pattern</strong><br />
<em>One of the most common patterns in JavaScript</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892"><strong>Design Patterns: Null Object</strong><br />
<em>Avoid conditional complexity using this pattern</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/francescoxx/strategy-pattern-5oh" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/francescoxx/strategy-pattern-5oh"><strong>Strategy Pattern</strong><br />
<em>GitHub Link: https://github.com/FrancescoXX/Design-Patterns-Strategy-Javascript The Strategy pattern, also called…</em>dev.to</a><a href="https://dev.to/francescoxx/strategy-pattern-5oh" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/francescoxx/adapter-pattern-5bjk" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/francescoxx/adapter-pattern-5bjk"><strong>Adapter Pattern</strong><br />
<em>Github link: https://github.com/FrancescoXX/Design-Pattern-Adapter-Javascript The Adapter pattern is used to allow a…</em>dev.to</a><a href="https://dev.to/francescoxx/adapter-pattern-5bjk" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732"><strong>The Power of Composite Pattern in JavaScript</strong><br />
<em>Find me on medium In this post, we will be going over the Composite Design Pattern in JavaScript. In... Tagged with…</em>dev.to</a><a href="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45"><strong>In Defense of Defensive Programming</strong><br />
<em>NOTE: In this article I reference a validation library that I wrote called allow. It's now in an NPM package that can…</em>dev.to</a><a href="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.udacity.com/course/javascript-design-patterns--ud989" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.udacity.com/course/javascript-design-patterns--ud989"><strong>JavaScript Design Patterns | Udacity Free Courses</strong><br />
<em>Free Course Organizing Code in a Disorganized World Start Free Course About this Course This course covers methods for…</em>www.udacity.com</a><a href="https://www.udacity.com/course/javascript-design-patterns--ud989" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md"><strong>getify/Functional-Light-JS</strong><br />
<em>Chapter 2 explored the core nature of JS functions, and laid the foundation for what makes a function an FP function…</em>github.com</a><a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj"><strong>Use function composition in JavaScript | Codementor</strong><br />
<em>Prerequisite: I use currying in this post, so if you don't know about that, I encourage you to read my previous post…</em>www.codementor.io</a><a href="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400"><strong>Currying in JavaScript ES6</strong><br />
<em>Currying can give you a deeper understanding to JavaScript. Let’s see how it can be done with arrow functions!</em>blog.benestudio.co</a><a href="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b"><strong>Writing Middleware —Composition and Currying Elegance in JavaScript</strong><br />
<em>Javascript is an elegant and beautiful language which allows the developers to have the flexibility to move between the…</em>medium.com</a><a href="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10"><strong>Functional JavaScript: Function Composition For Every Day Use.</strong><br />
<em>Function composition has got to be my favorite part of functional programming. I hope to provide you with a good real…</em>medium.com</a><a href="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f"><strong>What I Learned Today 💡 July 2, 2017</strong><br />
<em>Functional Composition: compose() and pipe()</em>medium.com</a><a href="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://busypeoples.github.io/post/functional-composing-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://busypeoples.github.io/post/functional-composing-javascript/"><strong>Why The Hipsters Compose Everything: Functional Composing In JavaScript</strong><br />
<em>Lodash and Underscore are everywhere and still there is this one supper efficient method that actually only those…</em>busypeoples.github.io</a><a href="http://busypeoples.github.io/post/functional-composing-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/"><strong>A Gentle Introduction to Functional JavaScript: Part 3</strong><br />
<em>This is part three of a four-part series introducing 'functional' programming in JavaScript. In the last article we saw…</em>jrsinclair.com</a><a href="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/"><strong>Curry And Compose (why you should be using something like ramda in your code)</strong><br />
<em>When it comes to functional programming, the main cornerstone is composability, the ability to create new functions…</em>jsleao.wordpress.com</a><a href="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://vanslaars.io/post/create-pipe-function/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://vanslaars.io/post/create-pipe-function/"><strong>Function Composition in JavaScript with Pipe</strong><br />
<em>December 13, 2016 This post uses ES6 syntax. The same things can be accomplished with ES5, but it would require more…</em>vanslaars.io</a><a href="https://vanslaars.io/post/create-pipe-function/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.telerik.com/featured/practical-functional-javascript-ramda/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.telerik.com/featured/practical-functional-javascript-ramda/"><strong>Practical Functional Javascript with Ramda - Telerik Blogs</strong><br />
<em>Article co-authored by: Andrew D'Amelio and Yuri Takhteyev At rangle.io we've been fans of the functional programming…</em>developer.telerik.com</a><a href="https://developer.telerik.com/featured/practical-functional-javascript-ramda/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574"><strong>The beauty in Partial Application, Currying, and Function Composition.</strong><br />
<em>Story Time</em>hackernoon.com</a><a href="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8"><strong>Curry or Partial Application?</strong><br />
<em>The Difference Between<br />
Partial Application and Curry</em>medium.com</a><a href="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://benalman.com/news/2012/09/partial-application-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://benalman.com/news/2012/09/partial-application-in-javascript/"><strong>Partial Application in JavaScript</strong><br />
<em>Unless you've used another functional programming language such as ML or Haskell, concepts such as partial application…</em>benalman.com</a><a href="http://benalman.com/news/2012/09/partial-application-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760"><strong>Partial Application of Functions</strong><br />
<em>Providing function with fewer arguments than it expects is called Partial Application of functions.</em>hackernoon.com</a><a href="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8"><strong>Javascript- Currying VS Partial Application</strong><br />
<em>A lot of people get confused in between currying and partial application and many of us do not know what, where and…</em>towardsdatascience.com</a><a href="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://raganwald.com/2015/04/01/partial-application.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://raganwald.com/2015/04/01/partial-application.html"><strong>Partial Application in ECMAScript 2015</strong><br />
<em>Some of this material originally appeared in What's the difference between Currying and Partial Application? Here it is…</em>raganwald.com</a><a href="http://raganwald.com/2015/04/01/partial-application.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://joecortopassi.com/articles/functional-composition-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://joecortopassi.com/articles/functional-composition-in-javascript/"><strong>Functional Composition in Javascript</strong><br />
<em>Functional composition is when you take two or more functions, and make one a single function out of them. When you…</em>joecortopassi.com</a><a href="https://joecortopassi.com/articles/functional-composition-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536"><strong>So You Want to be a Functional Programmer (Part 1)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a"><strong>So You Want to be a Functional Programmer (Part 2)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7"><strong>So You Want to be a Functional Programmer (Part 3)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49"><strong>So You Want to be a Functional Programmer (Part 4)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a"><strong>So You Want to be a Functional Programmer (Part 5)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84"><strong>An Introduction to the basic principles of Functional Programming</strong><br />
<em>After a long time learning and working with object-oriented programming, I took a step back to think about system…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa"><strong>Concepts of Functional Programming in Javascript</strong><br />
<em>After a long time learning and working with object-oriented programming, I took a step back to think about system…</em>medium.com</a><a href="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064"><strong>An Introduction to Functional Programming Style in JavaScript</strong><br />
<em>In recent years there has been a tectonic shift happening between traditional programming and Functional Programming…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71"><strong>A practical guide to writing more functional JavaScript</strong><br />
<em>Functional programming is great. With the introduction of React, more and more JavaScript front-end code is being…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj"><strong>A simple explanation of functional pipe in JavaScript</strong><br />
<em>Sometimes I'm asked why we don't have "dot-chaining" in RxJS anymore, or why RxJS made the switch to use pipe. There…</em>dev.to</a><a href="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/ryanmcdermott/clean-code-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/ryanmcdermott/clean-code-javascript"><strong>ryanmcdermott/clean-code-javascript</strong><br />
<em>Software engineering principles, from Robert C. Martin's book , adapted for JavaScript. This is not a style guide. It's…</em>github.com</a><a href="https://github.com/ryanmcdermott/clean-code-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/"><strong>JavaScript Clean Coding Best Practices | @RisingStack</strong><br />
<em>Writing clean code is what you must know and do in order to call yourself a professional developer. There is no…</em>blog.risingstack.com</a><a href="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b"><strong>Function parameters in JavaScript — Clean Code</strong><br />
<em>In my time as a web developer I have to deal a lot with JavaScript Code. I love JavaScript, no question asked. But…</em>kevin-peters.medium.com</a><a href="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10"><strong>Keeping your code clean</strong><br />
<em>I settled down in my sit, cranking the solution with my team members. “We must win this” I said, burying myself deep…</em>codeburst.io</a><a href="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/modern-javascript-best-practices/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/modern-javascript-best-practices/"><strong>Best Practices for Using Modern JavaScript Syntax - SitePoint</strong><br />
<em>This article is featured in our book, Modern JavaScript is evolving quickly to meet the changing needs of new…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/modern-javascript-best-practices/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/cross-js/cross-js" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/cross-js/cross-js"><strong>cross-js/cross-js</strong><br />
<em>Adopting CrossJS style means your javascript can work in any environment without being dependent on any core…</em>github.com</a><a href="https://github.com/cross-js/cross-js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ganderzz/on-writing-clean-code-57cm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ganderzz/on-writing-clean-code-57cm"><strong>Writing Clean Code</strong><br />
<em>We can all agree that writing clean code is important. It makes it easier to work in a team, and even if we're a single…</em>dev.to</a><a href="https://dev.to/ganderzz/on-writing-clean-code-57cm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k"><strong>Writing Clean Code and The Practice of Programming: Actionable advice for beginners</strong><br />
<em>"The purpose of style is to make the code easy to read for yourself and others, and good style is crucial to good…</em>dev.to</a><a href="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm"><strong>Clean code, dirty code, human code</strong><br />
<em>Last week, Dan Abramov posted a very personal and humbling blog post entitled Goodbye, Clean Code. I saw a tweet about…</em>dev.to</a><a href="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4"><strong>Practical Ways to Write Better JavaScript</strong><br />
<em>Solid methods of improving your JS. Tagged with javascript, webdev, beginners, react.</em>dev.to</a><a href="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

≡

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 3, 2021](https://medium.com/p/633549469528).

<a href="https://medium.com/@bryanguner/absolutely-everything-you-could-need-to-know-about-how-javascript-works-633549469528" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
