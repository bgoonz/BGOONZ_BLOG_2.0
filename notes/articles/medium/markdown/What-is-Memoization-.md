What is Memoization?
====================

And why this programming paradigm shouldn’t make you cringe.

------------------------------------------------------------------------

### What is Memoization?

#### And why this programming paradigm shouldn’t make you cringe.

### The following animated gifs were taken from:

#### <a href="https://www.deadcoderising.com/2017-06-13-why-pure-functions-4-benefits-to-embrace-2/" class="markup--anchor markup--h4-anchor">Source</a>

<a href="https://www.deadcoderising.com/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.deadcoderising.com/"><strong>Dead Code Rising</strong><br />
<em>The last couple of weeks I've been using a lot of hours playing around with GatsbyJS, and it's been a blast! Gatsby is…</em>www.deadcoderising.com</a><a href="https://www.deadcoderising.com/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Ey6rNclUY-Rp3iqM9Ytnag.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*w0txnjkmBo2z0COv.png" class="graf-image" /></figure>**Memoization** is a design paradigm used to reduce the overall number of  
calculations that can occur in algorithms that use recursive algorithms.

Recall that recursion solves a large problem by dividing it into smaller  
sub-problems that are more manageable.

Memoization will store the results of the sub-problems in some other data structure, meaning that you avoid duplicate calculations and only “solve” each subproblem once.

This approach is near synonymous with another computer science term you may have heard before — caching. However, caching as a practice is not achieved exclusively by memoizing. Think of a cache as a little bucket where we will keep important information we don’t want to forget in the near future but that isn’t vitally important or part of the long-term makeup of our application. It’s less important than the things we need to store in memory but more important than a variable we can discard as soon as we use it once.

There are two features that comprise memoization:

-   <span id="0b0b">The function is recursive.</span>
-   <span id="65a0">The additional data structure used is typically an object (we refer to this as  
    the memo).</span>

This is a trade-off between the time it takes to run an algorithm (without  
memoization) and the memory used to run the algorithm (with memoization).

Usually, memoization is a good trade-off when dealing with large data or  
calculations.

You cannot always apply this technique to recursive problems. The problem must have an “overlapping subproblem structure” for memoization to be effective.

Generally speaking, computer memory is cheap and human time is incalculably valuable so we may opt for this approach even when the largest gains on paper can be made from converting RAM at the expense of execution speed.

Here’s an example of a problem that has such a structure:

> Using pennies, nickels, dimes, and quarters, how many combinations  
> of coins are there that total 27 cents?

Along the way to calculating the possible coin combination of 27  
cents, you should also calculate the smallest coin combination of 25 cents as well as 21 cents and any smaller total that comprises a fraction of the total combination of 27 (so long as there is a one-cent piece; if there are only nickels and up, the problem deviates from this approach on a technicality but in essence, it is still calculated in the same manner, that is to say as a component of that bigger problem).

Remember, a computer is stupid and must check every possibility exhaustively to ensure that no possible combination is missed (in reality, I may be oversimplifying the truth of the matter but for now, please bear with me).

This is the essence of a redundant subcomponent of the overall problem.

### Memoizing factorial

From this plain `factorial` above, it is clear that every time you call  
`factorial(6)` you should get the same result of `720` each time. The code is  
somewhat inefficient because you must go down the full recursive stack for each top-level call to `factorial(6)`.

If we can store the result of `factorial(6)` the first time you calculate it, then on subsequent calls to `factorial(6)` you simply fetch the stored result in constant time.

The `memo` object above will map an argument of `factorial` to its return  
value. That is, the keys will be arguments and their values will be the  
corresponding results returned. By using the memo, you are able to avoid  
duplicate recursive calls!

By the time your first call to `factorial(6) `returns, you will not have just the argument `6` stored in the memo. Rather, y**ou will have *all* arguments 2 to 6 stored in the memo.**

Perhaps you’re not convinced because:

-   <span id="9fd5">You didn’t improve the speed of the algorithm by an order of Big-O (it is  
    still O(n)).</span>
-   <span id="3867">The code uses some global variable, so it’s kind of ugly.</span>

### Memoizing the Fibonacci generator

Here’s a *naive* implementation of a function that calculates the Fibonacci  
number for a given input.

    function fib(n) {
      if (n === 1 || n === 2) return 1;
      return fib(n - 1) + fib(n - 2);
    }

    fib(6);     // => 8

The time complexity of this function is not super intuitive to describe because  
the code branches twice recursively. Fret not! You’ll find it useful to  
visualize the calls needed to do this with a tree. When reasoning about the time complexity for recursive functions, draw a tree that helps you see the calls. Every node of the tree represents a call of the recursion:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fS_yOCDL-4NyBLyj.png" class="graf-image" /></figure>-   <span id="47ea">*n *, the height of this tree will be `n`. You derive this by following  
    the path going straight down the left side of the tree.</span>
-   <span id="855a">each internal node leads to two more nodes. Overall, this means that the tree will have roughly 2n nodes.</span>
-   <span id="df50">which is the same as saying that the `fib `function has an exponential time complexity of 2n.</span>
-   <span id="42df">That is very slow!</span>

See for yourself, try running `fib(50)` - you'll be waiting for quite a lot longer than you’ve gotten used to waiting for a program to run in the last decade.

The green regions highlighted above are repetitive.

As the `n` grows bigger, the number of duplicate sub-trees grows exponentially.

Luckily you can fix this using memoization by using a similar object strategy.

You can use some JavaScript default arguments \``memo={}`*\`*to clean things up:

You can see the marked nodes (function calls) that access the memo in green.  
It’s easy to see that this version of the Fibonacci generator will do far fewer  
computations as `n` grows larger! In fact, this memoization has brought the time complexity down to linear `O(n)` time because the tree only branches on the left side. This is an enormous gain if you recall the complexity of class hierarchy.

### The memoization formula

Now that you understand memoization, when should you apply it? Memoization is useful when attacking recursive problems that have many overlapping sub-problems.

You’ll find it most useful to draw out the visual tree first. If you notice duplicate sub-trees, time to memoize. Here are the hard and fast  
rules you can use to memoize a slow algorithm:

1.  <span id="002b">Write the unoptimized, brute force recursion and make sure it works.</span>
2.  <span id="d106">Add the memo object as an additional argument to the function. The keys will  
    represent unique arguments to the function, and their values will represent the results for those arguments.</span>
3.  <span id="ab4e">Add a base case condition to the function that returns the stored value if  
    the function’s argument is in the memo.</span>
4.  <span id="3e67">Before you return the result of the recursive case, store it in the memo as a  
    value and make the function’s argument its key.</span>

Here’s the solution to the aforementioned coin problem:

*More content at* <a href="http://plainenglish.io/" class="markup--anchor markup--p-anchor"><em>plainenglish.io</em></a>

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 4, 2021](https://medium.com/p/86685d811182).

<a href="https://medium.com/@bryanguner/memoization-86685d811182" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
