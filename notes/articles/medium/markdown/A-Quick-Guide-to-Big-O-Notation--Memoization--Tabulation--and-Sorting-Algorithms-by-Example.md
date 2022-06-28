# A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting

## Curating Complexity: A Guide to Big-O Notation

<figure><img src="https://cdn-images-1.medium.com/max/800/0*yjlSk3T9c2_14in1.png" class="graf-image" /></figure>***Curating Complexity: A Guide to Big-O Notation***

---

<a href="https://replit.com/@bgoonz/Medium-article-comp-complex" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://replit.com/@bgoonz/Medium-article-comp-complex"><strong>Medium-article-comp-complex</strong>
<br/>

**A Node.js repl by bgoonz**replit.com</a><a href="https://replit.com/@bgoonz/Medium-article-comp-complex" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

-   <span id="b70f">Why is looking at runtime not a reliable method of calculating time complexity?</span>
-   <span id="2b21">Not all computers are made equal( some may be stronger and therefore boost our runtime speed )</span>
-   <span id="1e1a">How many background processes ran concurrently with our program that was being tested?</span>
-   <span id="1cad">We also need to ask if our code remains performant if we increase the size of the input.</span>
-   <span id="3cb7">The real question we need to answering is: `How does our performance scale?`.</span>

### big 'O' notation

-   <span id="9b21">Big O Notation is a tool for describing the efficiency of algorithms with respect to the size of the input arguments.</span>
-   <span id="c0e6">Since we use mathematical functions in Big-O, there are a few big picture ideas that we'll want to keep in mind:</span>
-   <span id="2e86">The function should be defined by the size of the input.</span>
-   <span id="07b0">`Smaller` Big O is better (lower time complexity)</span>
-   <span id="f1b0">Big O is used to describe the worst case scenario.</span>
-   <span id="e11f">Big O is simplified to show only its most dominant mathematical term.</span>

### Simplifying Math Terms

-   <span id="64a4">We can use the following rules to simplify the our Big O functions:</span>
-   <span id="a2c2">`Simplify Products` : If the function is a product of many terms, we drop the terms that don't depend on n.</span>
-   <span id="b058">`Simplify Sums` : If the function is a sum of many terms, we drop the non-dominant terms.</span>
-   <span id="eb32">`n` : size of the input</span>
-   <span id="c042">`T(f)` : unsimplified math function</span>
-   <span id="7b41">`O(f)` : simplified math function.</span>

`Putting it all together`

<figure><img src="https://cdn-images-1.medium.com/max/800/1*TT8uuv1x3nmGUw5rvtoZ8A.png" class="graf-image" /></figure>- <span id="d18b">First we apply the product rule to drop all constants.</span>
- <span id="4335">Then we apply the sum rule to select the single most dominant term.</span>

---

### Complexity Classes

Common Complexity Classes

#### There are 7 major classes in Time Complexity

<figure><img src="https://cdn-images-1.medium.com/max/800/1*6zKhmJoHkvDbrd8jfUDf3A.png" class="graf-image" /></figure>#### `O(1) Constant`

> **The algorithm takes roughly the same number of steps for any input size.**

#### `O(log(n)) Logarithmic`

> **In most cases our hidden base of Logarithmic time is 2, log complexity algorithm's will typically display 'halving' the size of the input (like binary search!)**

#### `O(n) Linear`

> **Linear algorithm's will access each item of the input "once".**

### `O(nlog(n)) Log Linear Time`

> **Combination of linear and logarithmic behavior, we will see features from both classes.**

> Algorithm's that are log-linear will use **both recursion AND iteration.**

### `O(nc) Polynomial`

> **C is a fixed constant.**

### `O(c^n) Exponential`

> **C is now the number of recursive calls made in each stack frame.**

> **Algorithm's with exponential time are VERY SLOW.**

---

### Memoization

-   <span id="b3b0">Memoization : a design pattern used to reduce the overall number of calculations that can occur in algorithms that use recursive strategies to solve.</span>
-   <span id="2583">MZ stores the results of the sub-problems in some other data structure, so that we can avoid duplicate calculations and only 'solve' each problem once.</span>
-   <span id="65c9">Two features that comprise memoization:</span>

1. <span id="b2d2">FUNCTION MUST BE RECURSIVE.</span>
2. <span id="91a3">Our additional Data Structure is usually an object (we refer to it as our memo… or sometimes cache!)</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*4U79jBMjU2wKE_tyYcD_3A.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*Qh42KZgcCxmVt6WrTasCVw.png" class="graf-image" /></figure>### Memoizing Factorial

Our memo object is _mapping_ out our arguments of factorial to it's return value.

-   <span id="854a">Keep in mind we didn't improve the speed of our algorithm.</span>

### Memoizing Fibonacci

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2XaPj7UGKZYFjYhb" class="graf-image" /></figure>- <span id="5be6">Our time complexity for Fibonacci goes from O(2^n) to O(n) after applying memoization.</span>

### The Memoization Formula

> _Rules:_

1. <span id="b3f0">_Write the unoptimized brute force recursion (make sure it works);_</span>
2. <span id="b36e">_Add memo object as an additional argument ._</span>
3. <span id="f81f">_Add a base case condition that returns the stored value if the function's argument is in the memo._</span>
4. <span id="1b0f">_Before returning the result of the recursive case, store it in the memo as a value and make the function's argument it's key._</span>

#### Things to remember

1. <span id="bc4a">_When solving DP problems with Memoization, it is helpful to draw out the visual tree first._</span>
2. <span id="7bb1">_When you notice duplicate sub-tree's that means we can memoize._</span>

---

### Tabulation

#### Tabulation Strategy

> Use When:

-   <span id="f5b0">**The function is iterative and not recursive.**</span>
-   <span id="015c">_The accompanying DS is usually an array._</span>

#### Steps for tabulation

-   <span id="8918">_Create a table array based off the size of the input._</span>
-   <span id="b4e7">_Initialize some values in the table to 'answer' the trivially small subproblem._</span>
-   <span id="072e">_Iterate through the array and fill in the remaining entries._</span>
-   <span id="192e">_Your final answer is usually the last entry in the table._</span>

---

### Memo and Tab Demo with Fibonacci

> _Normal Recursive Fibonacci_

    function fibonacci(n) {
      if (n <= 2) return 1;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }

> _Memoization Fibonacci 1_

> _Memoization Fibonacci 2_

> _Tabulated Fibonacci_

### Example of Linear Search

-   <span id="84b2">_Worst Case Scenario: The term does not even exist in the array._</span>
-   <span id="30dc">_Meaning: If it doesn't exist then our for loop would run until the end therefore making our time complexity O(n)._</span>

---

### Sorting Algorithms

### Bubble Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="ce1e">The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.</span>

`Space Complexity`: O(1)

-   <span id="664f">Bubble Sort will always use the same amount of memory regardless of n.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Ck9aeGY-d5tbz7dT" class="graf-image" /></figure>- <span id="4115">The first major sorting algorithm one learns in introductory programming courses.</span>
- <span id="ecd4">Gives an intro on how to convert unsorted data into sorted data.</span>

> It's almost never used in production code because:

-   <span id="3cb1">_It's not efficient_</span>
-   <span id="4eac">_It's not commonly used_</span>
-   <span id="d730">_There is stigma attached to it_</span>
-   <span id="8da7">`Bubbling Up`_: Term that infers that an item is in motion, moving in some direction, and has some final resting destination._</span>
-   <span id="8447">_Bubble sort, sorts an array of integers by bubbling the largest integer to the top._</span>

<!-- -->

-   <span id="dcd2">_Worst Case & Best Case are always the same because it makes nested loops._</span>
-   <span id="9a6a">_Double for loops are polynomial time complexity or more specifically in this case Quadratic (Big O) of: O(n²)_</span>

### Selection Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="646d">Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);</span>

`Space Complexity`: O(1)

-   <span id="45ae">Selection Sort will always use the same amount of memory regardless of n.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*AByxtBjFrPVVYmyu" class="graf-image" /></figure>- <span id="c618">Selection sort organizes the smallest elements to the start of the array.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GeYNxlRcbt2cf0rY" class="graf-image" /></figure>Summary of how Selection Sort should work:

1. <span id="2277">_Set MIN to location 0_</span>
2. <span id="c76c">_Search the minimum element in the list._</span>
3. <span id="79d3">_Swap with value at location Min_</span>
4. <span id="4ede">_Increment Min to point to next element._</span>
5. <span id="a649">_Repeat until list is sorted._</span>

### Insertion Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="95ea">Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);</span>

`Space Complexity`: O(n)

-   <span id="f6fa">Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*gbNU6wrszGPrfAZG" class="graf-image" /></figure>### Merge Sort

`Time Complexity`: Log Linear O(nlog(n))

-   <span id="44b2">Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n)); `Space Complexity`: O(n)</span>
-   <span id="9a83">We are linear O(n) time because we are creating subArrays.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GeU8YwwCoK8GiSTD" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*IxqGb72XDVDeeiMl" class="graf-image" /></figure>### Example of Merge Sort

<figure><img src="https://cdn-images-1.medium.com/max/800/0*HMCR--9niDt5zY6M" class="graf-image" /></figure>- <span id="48b4">**Merge sort is O(nlog(n)) time.**</span>
- <span id="c598">*We need a function for merging and a function for sorting.*</span>

> Steps:

1. <span id="213f">_If there is only one element in the list, it is already sorted; return the array._</span>
2. <span id="6214">_Otherwise, divide the list recursively into two halves until it can no longer be divided._</span>
3. <span id="3cc8">_Merge the smallest lists into new list in a sorted order._</span>

### Quick Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="8e34">Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.</span>

`Space Complexity`: O(n)

-   <span id="626b">Our space complexity is linear O(n) because of the partition arrays we create.</span>
-   <span id="7e3a">QS is another Divide and Conquer strategy.</span>
-   <span id="233d">Some key ideas to keep in mind:</span>
-   <span id="1173">It is easy to sort elements of an array relative to a particular target value.</span>
-   <span id="8634">An array of 0 or 1 elements is already trivially sorted.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WLl_HpdBGXYx284T" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*-LyHJXGPTYsWLDZf" class="graf-image" /></figure>### Binary Search

`Time Complexity`: Log Time O(log(n))

`Space Complexity`: O(1)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*-naVYGTXzE2Yoali" class="graf-image" /></figure>*Recursive Solution*

> _Min Max Solution_

-   <span id="6fb1">_Must be conducted on a sorted array._</span>
-   <span id="383b">_Binary search is logarithmic time, not exponential b/c n is cut down by two, not growing._</span>
-   <span id="c940">_Binary Search is part of Divide and Conquer._</span>

### Insertion Sort

-   <span id="26b7">**Works by building a larger and larger sorted region at the left-most end of the array.**</span>

> Steps:

1. <span id="8c1f">_If it is the first element, and it is already sorted; return 1._</span>
2. <span id="1451">_Pick next element._</span>
3. <span id="0f8b">_Compare with all elements in the sorted sub list_</span>
4. <span id="4d78">_Shift all the elements in the sorted sub list that is greater than the value to be sorted._</span>
5. <span id="9131">_Insert the value_</span>
6. <span id="6c8a">_Repeat until list is sorted._</span>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz's gists</strong>
<br/>

**Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…**gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong>
<br/>

**Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…**github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong>
<br/>

**Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…**bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*VCmj_H9AHs41oC9Yx1hZFQ.png" class="graf-image" /></figure>### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong>
<br/>

**Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…**bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [February 27, 2021](https://medium.com/p/803ff193c522).

<a href="https://medium.com/@bryanguner/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="p-canonical">Canonical link</a>

August 31, 2021.
