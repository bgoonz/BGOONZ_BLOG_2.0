A Very Quick Guide To Calculating Big O Computational Complexity
================================================================

Big O: big picture, broad strokes, not details

------------------------------------------------------------------------

### A Very Quick Guide To Calculating Big O Computational Complexity

**Big O**: big picture, broad strokes, not details

For a more complete guide… checkout :

<a href="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522"><strong>A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example</strong><br />
<em>Curating Complexity: A Guide to Big-O Notation</em>medium.com</a><a href="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*lte81mEvgEPYXodB.png" class="graf-image" /></figure>-   <span id="28b6">way we analyze how efficient algorithms are without getting too mired in details</span>
-   <span id="4141">can model how much time any function will take given `n` inputs</span>
-   <span id="9479">interested in order of magnitude of number of the exact figure</span>
-   <span id="8fe1">O absorbs all fluff and n = biggest term</span>
-   <span id="a9c8">Big O of `3x^2 +x + 1` = `O(n^2)`</span>

### Time Complexity

no loops or exit & return = O(1)

0 nested loops = `O(n)`  
1 nested loops = `O(n^2)`  
2 nested loops = `O(n^3)`  
3 nested loops = `O(n^4)`

**recursive**: as you add more terms, increase in time as you add input diminishes  
**recursion**: when you define something in terms of itself, a function that calls itself

-   <span id="f455">used because of ability to maintain state at diffferent levels of recursion</span>
-   <span id="f168">inherently carries large footprint</span>
-   <span id="5510">every time function called, you add call to stack</span>

**iterative**: use loops instead of recursion (preferred)  
- favor readability over performance

`O(n log(n))` & `O(log(n))`: dividing/halving

-   <span id="4f7e">if code employs recursion/divide-and-conquer strategy</span>
-   <span id="d1cc">what power do i need to power my base to get n</span>

### Time Definitions

-   <span id="9aad">**constant**: does not scale with input, will take same amount of time</span>
-   <span id="3a19">for any input size n, constant time performs same number of operations every time</span>
-   <span id="bf51">**logarithmic**: increases number of operations it performs as logarithmic function of input size n</span>
-   <span id="93d5">function log n grows very slowly, so as n gets longer, number of operations the algorithm needs to perform doesn’t increase very much</span>
-   <span id="a2cf">halving</span>
-   <span id="46c0">**linear**: increases number of operations it performs as linear function of input size n</span>
-   <span id="5f16">number of additional operations needed to perform grows in direct proportion to increase in input size n</span>
-   <span id="ab93">**log-linear**: increases number of operations it performs as log-linear function of input size n</span>
-   <span id="0459">looking over every element and doing work on each one</span>
-   <span id="bd8a">**quadratic**: increases number of operations it performs as quadratic function of input size n</span>
-   <span id="dc41">**exponential**: increases number of operations it performs as exponential function of input size n</span>
-   <span id="71fc">number of nested loops increases as function of n</span>
-   <span id="8253">**polynomial**: as size of input increases, runtime/space used will grow at a faster rate</span>
-   <span id="8827">**factorial**: as size of input increases, runtime/space used will grow astronomically even with relatively small inputs</span>
-   <span id="040c">**rate of growth**: how fast a function grows with input size</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*5t2u8n1uKhioIzZIXX2zbg.png" class="graf-image" /></figure>### Space Complexity

-   <span id="403b">How does the space usage scale/change as input gets very large?</span>
-   <span id="5f20">What auxiliary space does your algorithm use or is it in place (constant)?</span>
-   <span id="b207">Runtime stack space counts as part of space complexity unless told otherwise.</span>

### Sorting Algorithms

<figure><img src="https://cdn-images-1.medium.com/max/800/1*HhXmG2cNdg8y4ZCCQGTyuQ.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*ULeXxVCDkF73GwhsxyM_2g.png" class="graf-image" /></figure>### Data Structures

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*hkZWlUgFyOSaLD5Uskv0tQ.png" class="graf-image" /></figure>

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*COjzunj0-FsMJ0d7v7Z-6g.png" class="graf-image" /></figure>

For similar content check out my GitHub:

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://portfolio42.netlify.app/…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 19, 2021](https://medium.com/p/eb1557e85fa3).

<a href="https://medium.com/@bryanguner/a-very-quick-guide-to-calculating-big-o-computational-complexity-eb1557e85fa3" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
