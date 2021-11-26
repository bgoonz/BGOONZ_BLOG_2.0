# Absolutely Everything You Could Need To Know About How JavaScript Works.

Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

---

### Absolutely Everything You Could Need To Know About How JavaScript Works.

#### Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

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
-   <span id="e245">_To force a specific order of operation, use the group operator ( ) around a part of the expression._</span>

**Modulo** : Very useful operation to check divisibility of numbers,  
check for even & odd, whether a number is prime, and much more!  
_(Discrete Math concept, circular problems can be solved with modulo)_

-   <span id="9608">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.</span>
-   <span id="3b00">`console.log(7 % 10); // => 7;`</span>

### The String Data Type

The **string** data type is a primitive data type that used to represent  
textual data.

-   <span id="792d">can be wrapped by either **single** or **double** quotation marks, _best to choose one and stick with it for consistency_.</span>
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

> Fun Fact: “a” &lt; “b” is considered valid JS Code because string  
> comparisons are compared lexicographically (meaning dictionary order),  
> so “a” is less than “b” because it appears earlier!

> If there is ever a standstill comparison of two string  
> lexicographically (i.e. app vs apple) the comparison will deem the  
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
    differences in terms of hoisting and global/block scope — will be  
    covered later in the course (common interview question!)</span>

**Assignment Shorthand**

    let num = 0;num += 10; // same as num = num + 10num -= 2; // same as num = num - 2num /= 4; // same as num = num / 4num *= 7; // same as num = num * 7

-   <span id="7ff5">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>
-   <span id="2798">**declaration** : process of simply introducing a variable name.</span>
-   <span id="ad51">**initialization** : process of both declaring and assigning a variable on the same line.</span>

### Functions

A function is a procedure of code that will run when called. Functions  
are used so that we do not have to rewrite code to do the same thing  
over and over. (Think of them as 'subprograms’)

-   <span id="01bb">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="963b">Includes three things:</span>
-   <span id="32df">Name of the function.</span>
-   <span id="7930">A list of _parameters_ ()</span>
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
-   <span id="a836">_If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work._</span>
-   <span id="a53a">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

---

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>

> END OF INTRO FOR BEGINNERS (MAIN ARTICLE BELOW)

### ↓↓**Absolutely Everything You Could Need To Know About JavaScript**↓↓

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fOaTsnCJCYc3wD4x" class="graf-image" /></figure><a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation"><strong>leonardomso/33-js-concepts</strong><br />
<em>This repository was created with the intention of helping developers master their concepts in JavaScript. It is not a…</em>github.com</a><a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack"><strong>Call stack - MDN Web Docs Glossary: Definitions of Web-related terms | MDN</strong><br />
<em>A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec"><strong>Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks &amp; more</strong><br />
<em>Web developers or Front end engineers, as that’s what we like to be called, nowadays do everything right from acting as…</em>medium.com</a><a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4"><strong>Understanding the JavaScript call stack</strong><br />
<em>The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/"><strong>Javascript: What Is The Execution Context? What Is The Call Stack?</strong><br />
<em>What is the Execution Context in Javascript? I bet you don't know the answer. What are the most basic components of a…</em>web.archive.org</a><a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*b31hiO4ynbDLRrXWEFF4aQ.png" class="graf-image" /></figure><a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0"><strong>Understanding Execution Context and Execution Stack in Javascript</strong><br />
<em>Understanding execution context and stack to become a better Javascript developer.</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"><strong>How JavaScript works: an overview of the engine, the runtime, and the call stack</strong><br />
<em>As JavaScript is getting more and more popular, teams are leveraging its support on many levels in their stack …</em>blog.sessionstack.com</a><a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

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

### Dependent on data

> _Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity._

-   <span id="bc8d">**The best-case complexity: when the data looks the best**</span>
-   <span id="8b06">**The worst-case complexity: when the data looks the worst**</span>
-   <span id="881c">**The average-case complexity: when the data looks average**</span>

### Big O notation

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

### <a href="https://javascript.info/primitives-methods#a-primitive-as-an-object" class="markup--anchor markup--h3-anchor">A primitive as an object</a>

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

### DOES IT MUTATE:

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
<em>“How is JavaScript asynchronous and single-threaded