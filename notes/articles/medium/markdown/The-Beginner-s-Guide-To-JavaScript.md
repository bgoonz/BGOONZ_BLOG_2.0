The Beginner’s Guide To JavaScript
==================================

Part 1

------------------------------------------------------------------------

### The Beginner’s Guide To JavaScript

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

------------------------------------------------------------------------

#### Here’s a REPL to practice with:

<a href="https://replit.com/@bgoonz/lambda-prep#README.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://replit.com/@bgoonz/lambda-prep#README.html"><strong>lambda-prep</strong><br />
<em>pre-course-work</em>replit.com</a><a href="https://replit.com/@bgoonz/lambda-prep#README.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

<a href="https://lambda-prep.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://lambda-prep.netlify.app/"><strong>INTRO@JSWEB</strong><br />
<em>Resource-sharing-hub</em>lambda-prep.netlify.app</a><a href="https://lambda-prep.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

------------------------------------------------------------------------

### Hello World

-   <span id="d452">**console.log** : command used to print something onto the screen.</span>
-   <span id="99ad">**syntax** : the exact arrangement of the symbols, characters, and keywords in our code.</span>
-   <span id="a287">**//** : notation for creating a code comment in JS.</span>
-   <span id="e2e6">**code comment** : useful for annotating pieces of code to explain how something works, ignored by computer.</span>

> ***“Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra***

------------------------------------------------------------------------

### The Number Data Type

The **number** data type in JS is used to represent any numerical values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   <span id="b0ed">**+** (addition)</span>
-   <span id="53d9">**-** (subtraction)</span>
-   <span id="93f2">**asterisk** (multiplication)</span>
-   <span id="92d8">**/** (division)</span>
-   <span id="21c1">**%** (modulo)</span>

JS evaluates more complex expressions using the general math order of operations aka PEMDAS.

-   <span id="d1a4">**PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.</span>
-   <span id="81a2">*To force a specific order of operation, use the group operator ( ) around a part of the expression.*</span>

**Modulo** : Very useful operation to check divisibility of numbers, check for even & odd, whether a number is prime, and much more! *(Discrete Math concept, circular problems can be solved with modulo)*

-   <span id="20ad">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.</span>
-   <span id="2fbf">`console.log(7 % 10); // => 7;`</span>

------------------------------------------------------------------------

### The String Data Type

The **string** data type is a primitive data type that used to represent textual data.

-   <span id="310e">can be wrapped by either **single** or **double** quotation marks, *best to choose one and stick with it for consistency*.</span>
-   <span id="664c">If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.</span>
-   <span id="46e7">`"That's a great string"; (valid)`</span>
-   <span id="4667">`'Shakespeare wrote, "To be or not to be"'; (valid)`</span>
-   <span id="9674">`'That's a bad string'; (invalid)`</span>
-   <span id="74cb">Alt. way to add other quotes within strings is to use template literals.</span>
-   <span id="caf5">`` `This is a temp'l'ate literal ${function}` // use ${} to invoke functions within. ``</span>
-   <span id="9144">**.length** : property that can be appended to data to return the length.</span>
-   <span id="afa8">empty strings have a length of zero.</span>
-   <span id="69ac">**indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].</span>

`console.log("bootcamp"[0]); // => "b"`

`console.log("bootcamp"[10]); // => "undefined"`

`console.log("boots"[1 * 2]); // => "o"`

`console.log("boots"["boot".length - 1]); // => "t"`

-   <span id="cb8b">we can pass expressions through the brackets as well since JS always evaluates expressions first.</span>
-   <span id="a30f">The index of the last character of a string is always one less than it’s length.</span>
-   <span id="3080">**indexOf()** : method used to find the first index of a given character within a string.</span>
-   <span id="442d">`console.log("bagel".indexOf("b")); // => 0 console.log("bagel".indexOf("z")); // => -1`</span>
-   <span id="7ddd">if the character inside the indexOf() search does not exist in the string, the output will be -1.</span>
-   <span id="7e6a">the indexOf() search will return the first instanced index of the the char in the string.</span>
-   <span id="8729">**concatenate** : word to describe joining strings together into a single string.</span>

------------------------------------------------------------------------

### The Boolean Data Type

The **boolean** data type is the simplest data type since there are only two values: **true** and **false**.

-   <span id="fcde">**Logical Operators** (B*oolean Operators*) are used to establish logic in our code.</span>
-   <span id="bd34">**!** (not) : reverses a boolean value.</span>
-   <span id="bdba">`console.log(!true); // => false console.log(!!false); // => false`</span>
-   <span id="cc27">**&&** (and) **Truth Table**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Aw4iCm7-FQ7znEcBVH3FTw.png" class="graf-image" /></figure>-   <span id="a087">**Logical Order of Operations** : JS will evaluate !, then &&, then ||.</span>
-   <span id="295f">**De Morgan’s Law** : Common mistake in boolean logic is incorrectly distributing ! across parentheses.</span>
-   <span id="7400">`!(A || B) === !A && !B; !(A && B) === !A || !B;`</span>
-   <span id="26c2">In summary, to correctly distribute ! across parentheses we must also flip the operation within.</span>
-   <span id="a8c1">**Short-Circuit Evaluation** : Because JS evalutes from left to right, expressions can “short-circuit”. For example if we have true on the left of an || logical comparison, it will stop evaluating and yield true instead of wasting resources on processing the rest of the statement.</span>
-   <span id="58a3">`console.log(true || !false); // => stops after it sees "true ||"`</span>

------------------------------------------------------------------------

### Comparison Operators

All comparison operators will result in a boolean output.

**The relative comparators**

-   <span id="0e52">**&gt;** (greater than)</span>
-   <span id="f979">**&lt;** (less than)</span>
-   <span id="73da">**&gt;=** (greater than or equal to)</span>
-   <span id="1620">**&lt;=** (less than or equal to)</span>
-   <span id="fb41">**===** (equal to)</span>
-   <span id="0fd1">**!==** (not equal to)</span>

> *Fun Fact: “a” &lt; “b” is considered valid JS Code because string comparisons are compared lexicographically (meaning dictionary order), so “a” is less than “b” because it appears earlier!*

> *If there is ever a standstill comparison of two string lexicographically (i.e. app vs apple) the comparison will deem the shorter string lesser.*

**Difference between == and ===**

-   <span id="8cc0">**===** : Strict Equality, will only return true if the two comparisons are entirely the same.</span>
-   <span id="b25c">**==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)</span>

------------------------------------------------------------------------

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

-   <span id="ab22">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>
-   <span id="22c2">**declaration** : process of simply introducing a variable name.</span>
-   <span id="caeb">**initialization** : process of both declaring and assigning a variable on the same line.</span>

------------------------------------------------------------------------

### Functions

A function is a procedure of code that will run when called. Functions are used so that we do not have to rewrite code to do the same thing over and over. (Think of them as ‘subprograms’)

-   <span id="4c89">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="d3fe">Includes three things:</span>
-   <span id="b57c">Name of the function.</span>
-   <span id="dfea">A list of *parameters* ()</span>
-   <span id="da88">The code to execute {}</span>
-   <span id="8eb3">**Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)</span>
-   <span id="cb1d">JS evaluates code top down, left to right.</span>
-   <span id="9cb4">When we execute a declared function later on in our program we refer to this as **invoking** our function.</span>
-   <span id="fde3">Every function in JS returns undefined unless otherwise specified.</span>
-   <span id="059e">When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.</span>
-   <span id="d906">When naming functions in JS always use camelCase and name it something appropriate. &gt; Greate code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!</span>

------------------------------------------------------------------------

### Parameters and Arguments

-   <span id="eb19">**Parameters** : Comma seperated variables specified as part of a function’s declaration.</span>
-   <span id="6abb">**Arguments** : Values passed to the function when it is invoked.</span>
-   <span id="ab31">*If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work.*</span>
-   <span id="12ee">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

#### Further resources:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://web-dev-resource-hub.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-resource-hub.netlify.app/"><strong>Web-Dev-Resource-Hub</strong><br />
<em>Edit description</em>web-dev-resource-hub.netlify.app</a><a href="https://web-dev-resource-hub.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

*More content at* <a href="https://plainenglish.io/" class="markup--anchor markup--p-anchor"><strong><em>plainenglish.io</em></strong></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [April 4, 2021](https://medium.com/p/e222d166b6e1).

<a href="https://medium.com/@bryanguner/absolute-beginners-guide-to-javascript-part-1-e222d166b6e1" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
