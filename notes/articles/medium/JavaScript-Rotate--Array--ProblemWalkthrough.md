JavaScript Rotate (Array) ProblemWalkthrough
============================================

Explanation for Rotate Right

------------------------------------------------------------------------

#### <a href="http://medium.com/codex" class="markup--anchor markup--h4-anchor">CODEX</a>

### JavaScript Rotate (Array) Problem Walkthrough

### Explanation for Rotate Right

<figure><img src="https://cdn-images-1.medium.com/max/1200/0*3_vbGvHeWOgSTxk7.png" class="graf-image" /></figure>

### Question

<span class="graf-dropCap">W</span>rite a function `rotateRight(array, num)` that takes in an array and a number as arguments.

> The function should return a new array where the elements of the array are rotated to the right number times.  
> The function should not mutate the original array and instead return a new array.

> Define this function using `function expression syntax`<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" class="markup--anchor markup--blockquote-anchor">.</a>

**HINT:** you can use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="markup--anchor markup--p-anchor">Array#slice</a> to create a copy of an array

------------------------------------------------------------------------

> JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

### pop(): Remove an item from the end of an array

    let cats = ['Bob', 'Willy', 'Mini'];

    cats.pop(); // ['Bob', 'Willy']

> pop() returns the removed item.

### push(): Add items to the end of an array

    let cats = ['Bob'];

    cats.push('Willy'); // ['Bob', 'Willy']

    cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

> push() returns the new array length.

### shift(): Remove an item from the beginning of an array

    let cats = ['Bob', 'Willy', 'Mini'];

    cats.shift(); // ['Willy', 'Mini']

> shift() returns the removed item.

### unshift(): Add items to the beginning of an array

    let cats = ['Bob'];

    cats.unshift('Willy'); // ['Willy', 'Bob']

    cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']

> unshift() returns the new array length.

**We are being asked for two things:**

1.  <span id="0000">To return an array with all the elements shifted over ‘num’ times.</span>
2.  <span id="8d90">To `NOT` mutate the original array</span>

**Step 1.**  
We need to start the function and create a variable to hold a COPY of our input array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"><strong>Array.prototype.slice()</strong><br />
<em>The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

-   <span id="313d">We assign array.slice(0) to a variable called result.</span>
-   <span id="6bdb">Slicing our input array simply creates a sliced copy of the data.</span>
-   <span id="1d93">Remember that by excluding a second argument in our slice parameter allows us to slice from the first argument all the way to the end.</span>

**Step 2.**  
We need to create a for loop to tell our function how many times we want to rotate.

-   <span id="8a82">By setting our second delimiter to i &lt; num we will ask our loops to run num times.</span>
-   <span id="820c">Running num times is the same as executing the code block within num times.</span>

**Step 3.**  
We need to put some executable code within our for loop to be run during every cycle.

-   <span id="c573">Since we are rotating to the right, every change to our result array under the hood will look like this (if we ref. our first test case):</span>
-   <span id="ab3a">`['a', 'b', 'c', 'd', 'e'];` (how it looks like at the start)</span>
-   <span id="5fab">`['e', 'a', 'b', 'c', 'd'];` (after one run of the for loop)</span>
-   <span id="e31e">`['d', 'e', 'a', 'b', 'c'];` (after second/last run of the for loop)</span>
-   <span id="aa2f">To accomplish this we first need to ‘`pop`' off or remove our last element.</span>
-   <span id="d19e">Two things happen when we use this built-in function.</span>
-   <span id="687c">Our copied array is mutated to lose it’s last ele.</span>
-   <span id="392e">The removed element is stored in the variable we assigned to the function.</span>
-   <span id="7c06">Our second step is to add it to the start of our array, to do this we can use `unshift`.</span>
-   <span id="4a0f">By inputting the variable we are using to hold our removed element into the parameter of unshift we are adding our element to the front of the array.</span>

**Step 4.**

Now that our for loop has ended and our copied array looks just like how the answer looks, we need to output the answer.

-   <span id="5d8c">We accomplish this by creating a `return` line AFTER the for loop.</span>

### End Result

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

### **==&gt;currently under development & very buggy**

<a href="https://web-dev-resource-hub.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-resource-hub.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>web-dev-resource-hub.netlify.app</a><a href="https://web-dev-resource-hub.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 14, 2021](https://medium.com/p/31deb19ebba1).

<a href="https://medium.com/@bryanguner/javascript-rotate-array-problemwalkthrough-31deb19ebba1" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
