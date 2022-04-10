---
title: Big O Computational Complexity
subtitle: Explained using gif animations
date: '2021-09-11'
thumb_image_alt: neural network
excerpt: >-
    Bubble sort, sorts an array of integers by bubbling the largest integer to the
    top.
seo:
    title: 'Big O'
    description: 'Big O Computational Complexity'
    robots: []
    extra: []
template: post
thumb_image: images/neural.png
image: images/my-back-0b8b3eaf.png
---

### Sorting Algorithms![](https://cdn-images-1.medium.com/max/800/0*Ck9aeGY-d5tbz7dT)![](https://cdn-images-1.medium.com/max/800/0*AByxtBjFrPVVYmyu)![](https://cdn-images-1.medium.com/max/800/0*GeYNxlRcbt2cf0rY)![](https://cdn-images-1.medium.com/max/800/0*gbNU6wrszGPrfAZG)![](https://cdn-images-1.medium.com/max/800/0*GeU8YwwCoK8GiSTD)![](https://cdn-images-1.medium.com/max/800/0*IxqGb72XDVDeeiMl)![](https://cdn-images-1.medium.com/max/800/0*HMCR--9niDt5zY6M)![](https://cdn-images-1.medium.com/max/800/0*WLl_HpdBGXYx284T)![](https://cdn-images-1.medium.com/max/800/0*-LyHJXGPTYsWLDZf)![](https://cdn-images-1.medium.com/max/800/0*-naVYGTXzE2Yoali)&#xA;&#xA;

### Bubble Sort

Time Complexity: Quadratic O(n^2)

- The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.

Space Complexity: O(1)

- Bubble Sort will always use the same amount of memory regardless of n.

<https://gist.github.com/eengineergz/e67e56bed7c5a20a54851867ba5efef6>

- The first major sorting algorithm one learns in introductory programming courses.
- 
- Gives an intro on how to convert unsorted data into sorted data.

> It's almost never used in production code because:

- _It's not efficient_
- 
- _It's not commonly used_
- 
- _There is stigma attached to it_

- _Bubbling Up : Term that infers that an item is in motion, moving in some direction, and has some final resting destination._

- _Bubble sort, sorts an array of integers by bubbling the largest integer to the top._

<https://gist.github.com/eengineergz/fd4acc0c89033bd219ebf9d3ec40b053><https://gist.github.com/eengineergz/80934783c628c70ac2a5a48119a82d54>

- _Worst Case & Best Case are always the same because it makes nested loops._
- 
- _Double for loops are polynomial time complexity or more specifically in this case Quadratic (Big O) of: O(n²)_

### Selection Sort

Time Complexity: Quadratic O(n^2)

- Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);

Space Complexity: O(1)

- Selection Sort will always use the same amount of memory regardless of n.

<https://gist.github.com/eengineergz/4abc0fe0bf01599b0c4104b0ba633402>

- Selection sort organizes the smallest elements to the start of the array.

> Summary of how Selection Sort should work:

1. _Set MIN to location 0_

2. _Search the minimum element in the list._

3. _Swap with value at location Min_

4. _Increment Min to point to next element._

5. _Repeat until list is sorted._

<https://gist.github.com/eengineergz/61f130c8e0097572ed908fe2629bdee0>

### Insertion Sort

Time Complexity: Quadratic O(n^2)

- Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);

Space Complexity: O(n)

- Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.

<https://gist.github.com/eengineergz/a9f4b8596c7546ac92746db659186d8c>

### Merge Sort

Time Complexity: Log Linear O(nlog(n))

- Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n)); Space Complexity: O(n)
- 
- We are linear O(n) time because we are creating subArrays.

### Example of Merge Sort

<https://gist.github.com/eengineergz/18fbb7edc9f5c4820ccfcecacf3c5e48><https://gist.github.com/eengineergz/cbb533137a7f957d3bc4077395c1ff64>

- **Merge sort is O(nlog(n)) time.**
- 
- _We need a function for merging and a function for sorting._

> Steps:

1. _If there is only one element in the list, it is already sorted; return the array._

2. _Otherwise, divide the list recursively into two halves until it can no longer be divided._

3. _Merge the smallest lists into new list in a sorted order._

### Quick Sort

Time Complexity: Quadratic O(n^2)

- Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.

Space Complexity: O(n)

- Our space complexity is linear O(n) because of the partition arrays we create.
- 
- QS is another Divide and Conquer 
- 
- Some key ideas to keep in mind:

- It is easy to sort elements of an array relative to a particular target value.

- An array of 0 or 1 elements is already trivially sorted.

<https://gist.github.com/eengineergz/24bcbc5248a8c4e1671945e9512da57e>

### Binary Search

Time Complexity: Log Time O(log(n))

Space Complexity: O(1)

> _Recursive Solution_

<https://gist.github.com/eengineergz/c82c00a4bcba4b69b7d326d6cad3ac8c>

> _Min Max Solution_

<https://gist.github.com/eengineergz/eb8d1e1684db15cc2c8af28e13f38751><https://gist.github.com/eengineergz/bc3f576b9795ccef12a108e36f9f820a>

- _Must be conducted on a sorted array._
- 
- _Binary search is logarithmic time, not exponential b/c n is cut down by two, not growing._

- _Binary Search is part of Divide and Conquer._

### Insertion Sort

- **Works by building a larger and larger sorted region at the left-most end of the array.**

> Steps:

1. _If it is the first element, and it is already sorted; return 1._

2. _Pick next element._

3. _Compare with all elements in the sorted sub list_

4. _Shift all the elements in the sorted sub list that is greater than the value to be sorted._

5. _Insert the value_

6. _Repeat until list is sorted._

<https://gist.github.com/eengineergz/ffead1de0836c4bcc6445780a604f617>



### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content

[**bgoonz's gists**\
*Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |...*gist.github.com](https://gist.github.com/bgoonz 'https://gist.github.com/bgoonz')[](https://gist.github.com/bgoonz)

[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize...*github.com](https://github.com/bgoonz 'https://github.com/bgoonz')[](https://github.com/bgoonz)

### Or Checkout my personal Resource Site

[**Web-Dev-Hub**\
*Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of...*bgoonz-blog.netlify.app](https://bgoonz-blog.netlify.app/ 'https://bgoonz-blog.netlify.app/')[](https://bgoonz-blog.netlify.app/)

![](https://cdn-images-1.medium.com/max/800/1*VCmj_H9AHs41oC9Yx1hZFQ.png)

```js
/**************************************BIG-O***********************************/
/***********************Common Algorithms for Analysis********************/
//mdn Object;
//-**************-recursive factorial:*********************/
/* 
   Factorial: the product of a given positive integer multiplied by all lesser positive integers: 
   The quantity four factorial (4!) = 4 ⋅ 3 ⋅ 2 ⋅ 1 = 24. 
   Symbol:n!, where n is the given integer. 
   */
function factorial(n) {
    if (n === 1) return 1; //* Base Case ... 1 * 1 = 1
    return n * factorial(n - 1); //* n! = n * (n-1) * (n-2) * (n-3) * ... * 1
}
factorial(5); //*5 * 4 * 3 * 2 * 1 = 120 <----expected
//console.log( "factorial(5): ", factorial( 5 ) ); //- factorial(5): 120
/* 
   Fibonacci numbers are the numbers such that every number in the series after the first two is the sum of the two preceding ones. 
   The series starts with 1, 1. Example -1, 1, 2, 3, 5, 8, 13, 21, 34, .... 
   Mathematical Expression: fib(n) = fib(n-1) + fib(n-2) 
   ! fib-tree-structure-diagram.png 
   https://miro.medium.com/max/700/1*svQ784qk1hvBE3iz7VGGgQ.jpeg 
   */
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5);
//console.log("fib(5): ", fibonacci(5)); //- fib(5): 5
/* 
   the major differences between tabulation and memoization are: 
   1.) tabulation has to look through the entire search space; memoization does not 
   2.) tabulation requires careful ordering of the subproblems is; memoization doesn't care much about the order of recursive calls. 
   */
const memo = {
    0: 0,
    1: 0,
    2: 1
};
const fib = (n) => {
    if (memo[n] !== undefined) return memo[n];
    const n1 = fib(n - 1);
    const n2 = fib(n - 2);
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
};
//console.log("fib(50): ", fib(20)); //- fib(50): 4181
/******************End of Common Algorithms for Analysis*****************/
/***********Comparing two functions that calculate the sum of all numbers from 1 up to n**********************/
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        //! Number of operations will grow with input n.
        total += i;
    }
    return total;
}
addUpTo(4);
//console.log("addUpTo( 4 ): ", addUpTo(4)); //- addUpTo( 4 ): 10
//! Would be O(n) or Linear Time.
//----------------------------------------------------------------
/* 
   The infinite series whose terms are the natural numbers 1 + 2 + 3 + 4 + ⋯ is a divergent series. 
   The nth partial sum of the series is the triangular number( https://en.wikipedia.org/wiki/Triangular_number ) 
   addUpTo(n)=(n * (n + 1)) / 2 
   https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2 
   */
function constantAddUpTo(n) {
    return (n * (n + 1)) / 2;
}
constantAddUpTo(4); //- constantAddUpTo(4): 10
//console.log("constantAddUpTo(4): ", constantAddUpTo(4));
//! Has three simple operations: 1 Multiplication 1 Addition 1 Division.
//!(Regardless of n) Would be O(1) or Constant Time.
/***********End of Comparing two functions that calculate the sum of all numbers from 1 up to n*******************/
/* 
   !Simplifying Math Terms 
   We want our Big-O notation to describe the performance of our algorithm with respect to the input size and nothing else. 
   !Use the following rules to simplify our Big-O functions using the following rules: 
   1.) Simplify Products: if the function is a product of many terms, we drop the terms that don't depend on the size of the input. 
   2.) Simplify Sums: if the function is a sum of many terms, we keep the term with the largest growth rate and drop the other terms. 
   * n is the size of the input 
   * T(f) refers to an un-simplified mathematical function 
   * O(f) refers to the Big-O simplified mathematical function 
   * Simplifying a Product 
   If a function consists of a product of many factors, 
   !we drop the factors that don't depend on the size of the input, n. 
   The factors that we drop are called constant factors because their size remains consistent as we increase the size of the input. 
   examples-of-big-O-simplification.png 
   simplifying-a-sum.png 
   simp-examples.png 
   */
/***********Comparing two functions with nested for loops*********************/
// function countUpAndDown(n) {
// console.log("going up!");
// for (let i = 0; i < n; i++) {
// console.log(i);
// }
// console.log("at the top, going down!");
// for (let j = n - 1; j >= 0; j--) {
// console.log(j);
// }
// console.log("Back down, bye!");
// }
// countUpAndDown(5);
// console.log("countUpAndDown(5): ", countUpAndDown(5));
/* 
   going up! 
   0 1 2 3 4 
   at the top, going down! 
   4 3 2 1 0 
   Back down, bye! 
   countUpAndDown(5): undefined //- because there was no return statment... only console.log 
   */
//------------------------------------------------
//!Both loops are O(n) but since we just want the big picture, O(n);
//-----------------------------------------------
// function printAllPairs(n) {
// for (let i = 0; i < n; i++) {
// for (let j = 0; j < n; j++) {
// console.log(i, j);
// }
// }
// }
// printAllPairs(4);
/* 
   0 0 0 1 0 2 0 3 1 0 1 1 1 2 1 3 2 0 2 1 2 2 2 3 3 0 3 1 3 2 3 3 
   */
//!Nested loops who's number of iterations depend on the size of the input are never a good thing when trying to write fast code.
//!O(n^2) or Quadratic Time.
/***********END of Comparing two functions with nested for loops**********************/
/**************************Big-O-Operations**********************/
//! Arithmetic Operations are Constant
//! Variable assignment is constant
//! Accessing elements in an array (by index) or by object (by key) is constant.
//! In a loop, the complexity is the length of the loop times the complexity of whatever is inside of the loop.
/**************************More Examples**********************/
//---------------------logAtLeast5---------------------------------
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        //console.log(i);
    }
}
//! O(n) Linear Time
//logAtLeast5(2);
/* 
   1 2 3 4 5 
   ---------------------------- 
   */
//logAtLeast5(6);
/* 
   ---------------------------- 
   1 2 3 4 5 6 
   */
//---------------------logAtMost5---------------------------------
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        //console.log(i);
    }
}
logAtMost5(20);
//! O(1) Constant Time.
/* 
   1 2 3 4 5 
   */
//***********************Big-O Complexity Classes*************************** */
/* 
   //! O(1) Constant 
   The algorithm takes roughly the same number of steps for any input size. 
   */
function constant1(n) {
    return n * 2 + 1;
}
constant1(5); //constant1(5): 11
//console.log("constant1(5): ", constant1(5));
//--------
//! O(1)
//--------
function constant2(n) {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
//constant2(5);
////console.log("constant2(5): ", constant2(5));
//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
//------------------------------------------
/* 
   O(log(n)) Logarithmic 
   In most cases our hidden base of Logarithmic time is 2, 
   log complexity algo's will typically display 'halving' the size of the input ?? 
   ? (like binary search!) 
   */
// O(log(n))
function logarithmic1(n) {
    if (n <= 1) {
        return 'base case';
    } else {
        return logarithmic1(n / 2); //*Recursive call on **half** the input
    }
}
//! O(log(n))
function logarithmic2(n) {
    let i = n;
    while (i > 1) {
        i /= 2;
        return i;
    }
}
logarithmic1(5);
////console.log("logarithmic1(5): ", logarithmic1(5)); //logarithmic1(5): base case
logarithmic2(6);
////console.log("logarithmic2(6): ", logarithmic2(6)); //logarithmic2(6): 3
//------------------------------------------
/* 
   * O(n) Linear 
   Linear algo's will access each item of the input "once". 
   */
// O(n)
function linear1(n) {
    for (let i = 1; i <= n; i++) {
        //console.log("linear1", i);
    }
}
linear1(3);
/* 
   linear1 1 
   linear1 2 
   linear1 3 
   */
// O(n), where n is the length of the array
function linear2(array) {
    for (let i = 0; i < array.length; i++) {
        //console.log("linear2", i);
    }
}
linear2([1, 2, 3]);
/* 
   linear2 0 
   linear2 1 
   linear2 2 
   */
//! O(n)
function linear3(n) {
    if (n === 1) {
        return 1;
    } else {
        //console.log(`linear3(${n})--->`, linear3(n - 1));
        /*
         */
    }
}
//!linear3(6);
//linear3(2)---> 1 linear3(3)---> undefined linear3(4)---> undefined
//linear3(5)---> undefined linear3(6)---> undefined
//!linear3(5);
// linear3(2)---> 1 linear3(3)---> undefined linear3(4)---> undefined
//linear3(5)---> undefined
//// in the two function calls above we can see that size of output corresponds to a proportional change in the size of the input
//console.log("linear3(4): ", linear3(4)); //// linear3(4): undefined
//------------------------------------------
/* 
   * O(nlog(n)) Log Linear Time 
   Combination of linear and logarithmic behavior, 
   we will see features from both classes. 
   !Algorithm's that are log-linear will use both recursion AND iteration. 
   */
// O(n * log(n))
// function loglinear(n) {
// if (n <= 1) return; // base case
// for (let i = 1; i <= n; i++) {
// console.log(
// `for an input (n=${n}):`,
// `we are on the ${i}'th itteration where i = ${i}`
// );
// }
// console.log(" first call n('old n'):", n);
// loglinear(n / 2);
// console.log(` new n is = (${n})`);
// }
// loglinear(4);
/* 
   for an input (n=4): we are on the 1'th itteration where i = 1 
   for an input (n=4): we are on the 2'th itteration where i = 2 
   for an input (n=4): we are on the 3'th itteration where i = 3 
   for an input (n=4): we are on the 4'th itteration where i = 4 
   first call n('old n'): 4 
   for an input (n=2): we are on the 1'th itteration where i = 1 
   for an input (n=2): we are on the 2'th itteration where i = 2 
   first call n('old n'): 2 
   new n is = (2) 
   new n is = (4) 
   */
function loglinear(n) {
    if (n <= 1) return; // base case
    for (let i = 1; i <= n; i++) {
        console.log(`for an input (n=${n}):`, `we are on the ${i}'th itteration where i = ${i}`);
    }
    console.log(" first call n('old n'):", n, `new n is = (${n / 2})`);
    loglinear(n / 2);
    console.log(` new n is = (${n})`);
    loglinear(n / 2);
    console.log(` Second Call : new n is = (${n})`);
}
//loglinear(4);
/* 
   for an input (n=4): we are on the 1'th itteration where i = 1 
   for an input (n=4): we are on the 2'th itteration where i = 2 
   for an input (n=4): we are on the 3'th itteration where i = 3 
   for an input (n=4): we are on the 4'th itteration where i = 4 
   first call n('old n'): 4 new n is = (2) 
   for an input (n=2): we are on the 1'th itteration where i = 1 
   for an input (n=2): we are on the 2'th itteration where i = 2 
   first call n('old n'): 2 new n is = (1) 
   new n is = (2) 
   Second Call : new n is = (2) 
   new n is = (4) 
   for an input (n=2): we are on the 1'th itteration where i = 1 
   for an input (n=2): we are on the 2'th itteration where i = 2 
   first call n('old n'): 2 new n is = (1) 
   new n is = (2) 
   Second Call : new n is = (2) 
   Second Call : new n is = (4) 
   */
//------------------------------------------
/* 
   O(nc) Polynomial 
   C is a fixed constant. 
   */
// O(n^3)
function cubic(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        //console.log(`i is ${i}`, "count:", count);
        for (let j = 1; j <= n; j++) {
            //console.log(` for i: ${i} j is:${j}`);
            for (let k = 1; k <= n; k++) {
                count += 1;
                // console.log( ` itteration #${count}: i: is ${i}, j: is ${j}, k:is ${k}`);
            }
        }
    }
}
cubic(3);
/* 
   i is 1 count: 0 
   for i: 1 j is:1 
   itteration #1: i: is 1, j: is 1, k: is 1 
   itteration #2: i: is 1, j: is 1, k: is 2 
   itteration #3: i: is 1, j: is 1, k: is 3 
   for i: 1 j is:2 
   itteration #4: i: is 1, j: is 2, k: is 1 
   itteration #5: i: is 1, j: is 2, k: is 2 
   itteration #6: i: is 1, j: is 2, k: is 3 
   for i: 1 j is:3 
   itteration #7: i: is 1, j: is 3, k: is 1 
   itteration #8: i: is 1, j: is 3, k: is 2 
   itteration #9: i: is 1, j: is 3, k: is 3 
   i is 2 count: 9 
   for i: 2 j is:1 
   itteration #10: i: is 2, j: is 1, k: is 1 
   itteration #11: i: is 2, j: is 1, k: is 2 
   itteration #12: i: is 2, j: is 1, k: is 3 
   for i: 2 j is:2 
   itteration #13: i: is 2, j: is 2, k: is 1 
   itteration #14: i: is 2, j: is 2, k: is 2 
   itteration #15: i: is 2, j: is 2, k: is 3 
   for i: 2 j is:3 
   itteration #16: i: is 2, j: is 3, k: is 1 
   itteration #17: i: is 2, j: is 3, k: is 2 
   itteration #18: i: is 2, j: is 3, k: is 3 
   i is 3 count: 18 
   for i: 3 j is:1 
   itteration #19: i: is 3, j: is 1, k: is 1 
   itteration #20: i: is 3, j: is 1, k: is 2 
   itteration #21: i: is 3, j: is 1, k: is 3 
   for i: 3 j is:2 
   itteration #22: i: is 3, j: is 2, k: is 1 
   itteration #23: i: is 3, j: is 2, k: is 2 
   itteration #24: i: is 3, j: is 2, k: is 3 
   for i: 3 j is:3 
   itteration #25: i: is 3, j: is 3, k: is 1 
   itteration #26: i: is 3, j: is 3, k: is 2 
   itteration #27: i: is 3, j: is 3, k: is 3 
   */
//------------------------------------------
/* 
   Example of Quadratic and Cubic runtime. 
   !O(c^n) Exponential 
   C is now the number of recursive calls made in each stack frame. 
   -Algo's with exponential time are VERY SLOW. 
   */
// O(3^n)
function exponential3n(n) {
    if (n === 0) return;
    //console.log("1.) first call n('old n'):", n, `....new n is = (${n - 1})`);
    exponential3n(n - 1);

    // console.log("---------------------(__1__)---------------------------", "\n");
    // console.log(
    // "2.) after first call ('old n'):",
    // n,
    // `....new n is = (${n - 1})`
    // );

    exponential3n(n - 1);

    //console.log("-------------------------(__2__)---------------------", "\n");
    //console.log(
    // "3.) after second call ('old n'):",
    // n,
    // `....new n is = (${n - 1})`
    // );

    exponential3n(n - 1);

    //console.log("-----------------------(__3__)-------------------------", "\n");
    //console.log(
    // "4.) after third call ('old n'):",
    // n,
    // `....new n is = (${n - 1})`
    //);
}
exponential3n(3);

//***********************__Memoization__*************************** */
/* 
   Memoization : a design pattern used to reduce the overall number of calculations that can occur 
   in algorithms that use recursive strategies to solve. 
   MZ stores the results of the sub-problems in some other data structure, so that we can avoid 
   duplicate calculations and only 'solve' each problem once. 
   Two features that comprise memoization: 
   1\. FUNCTION MUST BE RECURSIVE. 
   2\. Our additional DS is usually an object (we refer to it as our memo!) 
   */

//! _____Memoizing Factorial_____

// function fib(n, memo = {}) {
// if (n in memo) return memo[n]; // If we already calculated this value, return it
// if (n === 1 || n === 2) return 1;

// // Store the result in the memo first before returning
// // Make sure to pass the memo in to your calls to fib!
// memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// return memo[n];
// }
function factorial(n, memo2 = {}) {
    const key = JSON.stringify(n);
    if (key in memo2) return memo2[key];
    if (n === 1) return 1;
    memo2[key] = n * factorial(n - 1, memo2);
    //console.log("this is memo", memo2);
    return memo2[key];
}

//console.log(memo2);
// //factorial(6); // => 720, requires 6 calls
//console.log("factorial(6): ", factorial(6));
// //factorial(6); // => 720, requires 1 call
// //factorial(5); // => 120, requires 1 call
// console.log("factorial(5): ", factorial(5));
//factorial(7); // => 5040, requires 2 calls
//console.log("factorial(7): ", factorial(7));
//console.log("factorial(20): ", factorial(20)); // 2432902008176640000
/* 
   this is memo { '2': 2 } 
   this is memo { '2': 2, '3': 6 } 
   this is memo { '2': 2, '3': 6, '4': 24 } 
   this is memo { '2': 2, '3': 6, '4': 24, '5': 120 } 
   this is memo { '2': 2 } 
   this is memo { '2': 2, '3': 6 } 
   this is memo { '2': 2, '3': 6, '4': 24 } 
   this is memo { '2': 2, '3': 6, '4': 24, '5': 120 } 
   this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 } 
   factorial(6): 720 
   this is memo { '2': 2 } 
   this is memo { '2': 2, '3': 6 } 
   this is memo { '2': 2, '3': 6, '4': 24 } 
   this is memo { '2': 2, '3': 6, '4': 24, '5': 120 } 
   this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 } 
   this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 } 
   factorial(7): 5040 
   */

/* 
   The Memoization Formula 
   Rules 
   1\. Write the unoptimized brute force recursion (make sure it works); 
   2\. Add memo object as an additional arugmnt . 
   3\. Add a base case condition that returns the stored value if the function's argument is in the memo. 
   4\. Before returning the result of the recursive case, store it in the memo as a value and make the 
   function's argument it's key. 
    
   !Things to remember 
   *1. When solving DP problems with Memoization, it is helpful to draw out the visual tree first. 
   *2. When you notice duplicate sub-tree's that means we can memoize. 
    
   */
function fastFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;
    memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
    return memo[n];
}
//fastFib(6); // => 8
//console.log("fastFib(6): ", fastFib(6)); //fastFib(6): 8
//fastFib(50); // => 12586269025
//console.log("fastFib(50): ", fastFib(50)); //fastFib(50): 12586269025

//***********************__Tabulation__*************************** */
/* 
   Tabulation Strategy 
   //Use When: 
   -The function is iterative and not recursive. 
   -The accompanying Data Structure is usually an array. 
   */
function fibTab(n) {
    let table = [0, 1, 1];

    // if(n === 0 || n === 1){
    // return 1;
    // }

    while (table.length - 1 < n) {
        table.push(table[table.length - 1] + table[table.length - 2]);
    }

    return table[n];
}

console.log(fibTab(1)); //1
console.log(fibTab(2)); //1
console.log(fibTab(3)); //2
console.log(fibTab(4)); //3
console.log(fibTab(5)); //5
console.log(fibTab(50)); //12586269025 |
```

[view raw](https://gist.github.com/bgoonz/af844eda5a20b0fdc0b813304401602b/raw/a5bd8a34d26c2b6cff9232c7f6218463122ff7ef/algo-time-complexity-by-example.js)[algo-time-complexity-by-example.js](https://gist.github.com/bgoonz/af844eda5a20b0fdc0b813304401602b#file-algo-time-complexity-by-example-js)hosted with ❤ by [GitHub](https://github.com/)

<details>

<summary> Big O Examples In JavaScript  </summary>

```js
/**************************************BIG-O***********************************/
/***********************Common Algorithms for Analysis********************/
//mdn Object;
//-**************-recursive factorial:*********************/
/*
Factorial: the product of a given positive integer multiplied by all lesser positive integers:
The quantity four factorial (4!) = 4 ⋅ 3 ⋅ 2 ⋅ 1 = 24.
Symbol:n!, where n is the given integer.
 */
function factorial(n) {
    if (n === 1) return 1; //* Base Case ... 1 * 1 = 1
    return n * factorial(n - 1); //*  n! = n * (n-1) *  (n-2) * (n-3) * ... * 1
}
factorial(5); //*5 * 4 * 3 * 2 * 1 = 120 <----expected
//console.log( "factorial(5): ", factorial( 5 ) ); //-  factorial(5):  120
/*
Fibonacci numbers are the numbers such that every number in the series after the first two is the sum of the two preceding ones.
The series starts with 1, 1. Example −1, 1, 2, 3, 5, 8, 13, 21, 34, ….
Mathematical Expression: fib(n) = fib(n−1) + fib(n−2)
! fib-tree-structure-diagram.png
https://miro.medium.com/max/700/1*svQ784qk1hvBE3iz7VGGgQ.jpeg
 */
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5);
//console.log("fib(5): ", fibonacci(5)); //-  fib(5):  5
/*
the major differences between tabulation and memoization are:
1.)     tabulation has to look through the entire search space; memoization does not
2.)     tabulation requires careful ordering of the subproblems is; memoization doesn't care much about the order of recursive calls.
*/
const memo = {
    0: 0,
    1: 0,
    2: 1
};
const fib = (n) => {
    if (memo[n] !== undefined) return memo[n];
    const n1 = fib(n - 1);
    const n2 = fib(n - 2);
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
};
//console.log("fib(50): ", fib(20));      //-  fib(50):  4181
/******************End of Common Algorithms for Analysis*****************/
/***********Comparing two functions that calculate the sum of all numbers from 1 up to n**********************/
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        //! Number of operations will grow with input n.
        total += i;
    }
    return total;
}
addUpTo(4);
//console.log("addUpTo( 4 ): ", addUpTo(4)); //-  addUpTo( 4 ):  10
//! Would be O(n) or Linear Time.
//----------------------------------------------------------------
/*
The infinite series whose terms are the natural numbers 1 + 2 + 3 + 4 + ⋯ is a divergent series.
The nth partial sum of the series is the triangular number( https://en.wikipedia.org/wiki/Triangular_number )
addUpTo(n)=(n * (n + 1)) / 2
https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2
*/
function constantAddUpTo(n) {
    return (n * (n + 1)) / 2;
}
constantAddUpTo(4); //-  constantAddUpTo(4):  10
//console.log("constantAddUpTo(4): ", constantAddUpTo(4));
//! Has three simple operations: 1 Multiplication 1 Addition 1 Division.
//!(Regardless of n) Would be O(1) or Constant Time.
/***********End of Comparing two functions that calculate the sum of all numbers from 1 up to n*******************/
/*
!Simplifying Math Terms
We want our Big-O notation to describe the performance of our algorithm with respect to the input size and nothing else.
 !Use the following rules to simplify our Big-O functions using the following rules:
1.)   Simplify Products: if the function is a product of many terms, we drop the terms that don't depend on the size of the input.
2.)   Simplify Sums: if the function is a sum of many terms, we keep the term with the largest growth rate and drop the other terms.
*   n is the size of the input
*   T(f) refers to an un-simplified mathematical function
*   O(f) refers to the Big-O simplified mathematical function
*   Simplifying a Product
If a function consists of a product of many factors,
!we drop the factors that don't depend on the size of the input, n.
The factors that we drop are called constant factors because their size remains consistent as we increase the size of the input.
examples-of-big-O-simplification.png
simplifying-a-sum.png
simp-examples.png
*/
/***********Comparing two functions with nested for loops*********************/
// function countUpAndDown(n) {
//   console.log("going up!");
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   console.log("at the top, going down!");
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("Back down, bye!");
// }
// countUpAndDown(5);
// console.log("countUpAndDown(5): ", countUpAndDown(5));
/*
going up!
0 1	2	3	4
at the top, going down!
4	3	2	1	0
Back down, bye!
countUpAndDown(5):  undefined //- because there was no return statment... only console.log
*/
//------------------------------------------------
//!Both loops are O(n) but since we just want the big picture, O(n);
//-----------------------------------------------
// function printAllPairs(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }
// printAllPairs(4);
/*
0 0	0 1	0 2	0 3	1 0	1 1	1 2	1 3	2 0	2 1	2 2	2 3	3 0	3 1	3 2	3 3
*/
//!Nested loops who's number of iterations depend on the size of the input are never a good thing when trying to write fast code.
//!O(n^2) or Quadratic Time.
/***********END of Comparing two functions with nested for loops**********************/
/**************************Big-O-Operations**********************/
//! Arithmetic Operations are Constant
//! Variable assignment is constant
//! Accessing elements in an array (by index) or by object (by key) is constant.
//! In a loop, the complexity is the length of the loop times the complexity of whatever is inside of the loop.
/**************************More Examples**********************/
//---------------------logAtLeast5---------------------------------
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        //console.log(i);
    }
}
//!   O(n) Linear Time
//logAtLeast5(2);
/*
1	2	3	4	5
----------------------------
*/
//logAtLeast5(6);
/*
----------------------------
1	2	3	4	5	6
*/
//---------------------logAtMost5---------------------------------
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        //console.log(i);
    }
}
logAtMost5(20);
//! O(1) Constant Time.
/*
1	2	3	4	5
*/
//***********************Big-O Complexity Classes*************************** */
/*
//! O(1) Constant
The algorithm takes roughly the same number of steps for any input size.
*/
function constant1(n) {
    return n * 2 + 1;
}
constant1(5); //constant1(5):  11
//console.log("constant1(5): ", constant1(5));
//--------
//! O(1)
//--------
function constant2(n) {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
//constant2(5);
////console.log("constant2(5): ", constant2(5));
//1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	23	24	25	26	27	28	29	30	31	32	33	34	35	36	37	38	39	40	41	42	43	44	45	46	47	48	49	50	51	52	53	54	55	56	57	58	59	60	61	62	63	64	65	66	67	68	69	70	71	72	73	74	75	76	77	78	79	80	81	82	83	84	85	86	87	88	89	90	91	92	93	94	95	96	97	98	99	100
//------------------------------------------
/*
O(log(n)) Logarithmic
In most cases our hidden base of Logarithmic time is 2,
log complexity algo's will typically display 'halving' the size of the input ??
? (like binary search!)
*/
// O(log(n))
function logarithmic1(n) {
    if (n <= 1) {
        return 'base case';
    } else {
        return logarithmic1(n / 2); //*Recursive call on **half** the input
    }
}
//! O(log(n))
function logarithmic2(n) {
    let i = n;
    while (i > 1) {
        i /= 2;
        return i;
    }
}
logarithmic1(5);
////console.log("logarithmic1(5): ", logarithmic1(5)); //logarithmic1(5):  base case
logarithmic2(6);
////console.log("logarithmic2(6): ", logarithmic2(6)); //logarithmic2(6):  3
//------------------------------------------
/*
*  O(n) Linear
Linear algo's will access each item of the input "once".
 */
// O(n)
function linear1(n) {
    for (let i = 1; i <= n; i++) {
        //console.log("linear1", i);
    }
}
linear1(3);
/*
linear1 1
linear1 2
linear1 3
*/
// O(n), where n is the length of the array
function linear2(array) {
    for (let i = 0; i < array.length; i++) {
        //console.log("linear2", i);
    }
}
linear2([1, 2, 3]);
/*
linear2 0
linear2 1
linear2 2
*/
//!  O(n)
function linear3(n) {
    if (n === 1) {
        return 1;
    } else {
        //console.log(`linear3(${n})--->`, linear3(n - 1));
        /*
         */
    }
}
//!linear3(6);
//linear3(2)---> 1	linear3(3)---> undefined	linear3(4)---> undefined
//linear3(5)---> undefined	linear3(6)---> undefined
//!linear3(5);
// linear3(2)---> 1	linear3(3)---> undefined	linear3(4)---> undefined
//linear3(5)---> undefined
//// in the two function calls above we can see that size of output corresponds to a proportional change in the size of the input
//console.log("linear3(4): ", linear3(4)); //// linear3(4):  undefined
//------------------------------------------
/*
* O(nlog(n)) Log Linear Time
Combination of linear and logarithmic behavior,
we will see features from both classes.
!Algorithm's that are log-linear will use both recursion AND iteration.
 */
// O(n * log(n))
// function loglinear(n) {
//   if (n <= 1) return; // base case
//   for (let i = 1; i <= n; i++) {
//     console.log(
//       `for an input (n=${n}):`,
//       `we are on the ${i}'th itteration where i = ${i}`
//     );
//   }
//   console.log(" first call n('old n'):", n);
//   loglinear(n / 2);
//   console.log(`   new n is = (${n})`);
// }
// loglinear(4);
/*
for an input (n=4): we are on the 1'th itteration where i = 1
for an input (n=4): we are on the 2'th itteration where i = 2
for an input (n=4): we are on the 3'th itteration where i = 3
for an input (n=4): we are on the 4'th itteration where i = 4
 first call n('old n'): 4
for an input (n=2): we are on the 1'th itteration where i = 1
for an input (n=2): we are on the 2'th itteration where i = 2
 first call n('old n'): 2
   new n is = (2)
   new n is = (4)
*/
function loglinear(n) {
    if (n <= 1) return; // base case
    for (let i = 1; i <= n; i++) {
        console.log(`for an input (n=${n}):`, `we are on the ${i}'th itteration where i = ${i}`);
    }
    console.log(" first call n('old n'):", n, `new n is = (${n / 2})`);
    loglinear(n / 2);
    console.log(`   new n is = (${n})`);
    loglinear(n / 2);
    console.log(`   Second Call : new n is = (${n})`);
}
//loglinear(4);
/*
for an input (n=4): we are on the 1'th itteration where i = 1
for an input (n=4): we are on the 2'th itteration where i = 2
for an input (n=4): we are on the 3'th itteration where i = 3
for an input (n=4): we are on the 4'th itteration where i = 4
 first call n('old n'): 4 new n is = (2)
for an input (n=2): we are on the 1'th itteration where i = 1
for an input (n=2): we are on the 2'th itteration where i = 2
 first call n('old n'): 2 new n is = (1)
   new n is = (2)
   Second Call : new n is = (2)
   new n is = (4)
for an input (n=2): we are on the 1'th itteration where i = 1
for an input (n=2): we are on the 2'th itteration where i = 2
 first call n('old n'): 2 new n is = (1)
   new n is = (2)
   Second Call : new n is = (2)
   Second Call : new n is = (4)
*/
//------------------------------------------
/*
O(nc) Polynomial
C is a fixed constant.
 */
// O(n^3)
function cubic(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        //console.log(`i is ${i}`, "count:", count);
        for (let j = 1; j <= n; j++) {
            //console.log(`  for i:    ${i}      j is:${j}`);
            for (let k = 1; k <= n; k++) {
                count += 1;
                // console.log(  `     itteration #${count}:       i: is  ${i},   j: is  ${j},     k:is   ${k}`);
            }
        }
    }
}
cubic(3);
/*
i is 1 count: 0
  for i:    1      j is:1
     itteration #1:       i: is  1,   j: is  1,     k: is   1
     itteration #2:       i: is  1,   j: is  1,     k: is   2
     itteration #3:       i: is  1,   j: is  1,     k: is   3
  for i:    1      j is:2
     itteration #4:       i: is  1,   j: is  2,     k: is   1
     itteration #5:       i: is  1,   j: is  2,     k: is   2
     itteration #6:       i: is  1,   j: is  2,     k: is   3
  for i:    1      j is:3
     itteration #7:       i: is  1,   j: is  3,     k: is   1
     itteration #8:       i: is  1,   j: is  3,     k: is   2
     itteration #9:       i: is  1,   j: is  3,     k: is   3
i is 2 count: 9
  for i:    2      j is:1
     itteration #10:       i: is  2,   j: is  1,     k: is   1
     itteration #11:       i: is  2,   j: is  1,     k: is   2
     itteration #12:       i: is  2,   j: is  1,     k: is   3
  for i:    2      j is:2
     itteration #13:       i: is  2,   j: is  2,     k: is   1
     itteration #14:       i: is  2,   j: is  2,     k: is   2
     itteration #15:       i: is  2,   j: is  2,     k: is   3
  for i:    2      j is:3
     itteration #16:       i: is  2,   j: is  3,     k: is   1
     itteration #17:       i: is  2,   j: is  3,     k: is   2
     itteration #18:       i: is  2,   j: is  3,     k: is   3
i is 3 count: 18
  for i:    3      j is:1
     itteration #19:       i: is  3,   j: is  1,     k: is   1
     itteration #20:       i: is  3,   j: is  1,     k: is   2
     itteration #21:       i: is  3,   j: is  1,     k: is   3
  for i:    3      j is:2
     itteration #22:       i: is  3,   j: is  2,     k: is   1
     itteration #23:       i: is  3,   j: is  2,     k: is   2
     itteration #24:       i: is  3,   j: is  2,     k: is   3
  for i:    3      j is:3
     itteration #25:       i: is  3,   j: is  3,     k: is   1
     itteration #26:       i: is  3,   j: is  3,     k: is   2
     itteration #27:       i: is  3,   j: is  3,     k: is   3
*/
//------------------------------------------
/*
Example of Quadratic and Cubic runtime.
!O(c^n) Exponential
C is now the number of recursive calls made in each stack frame.
-Algo's with exponential time are VERY SLOW.
*/
// O(3^n)
function exponential3n(n) {
    if (n === 0) return;
    //console.log("1.)  first call n('old n'):", n, `....new n is = (${n - 1})`);
    exponential3n(n - 1);

    // console.log("---------------------(__1__)---------------------------", "\n");
    // console.log(
    //   "2.)  after first call ('old n'):",
    //   n,
    //   `....new n is = (${n - 1})`
    // );

    exponential3n(n - 1);

    //console.log("-------------------------(__2__)---------------------", "\n");
    //console.log(
    //   "3.)  after second call ('old n'):",
    //   n,
    //   `....new n is = (${n - 1})`
    // );

    exponential3n(n - 1);

    //console.log("-----------------------(__3__)-------------------------", "\n");
    //console.log(
    //  "4.)   after third call ('old n'):",
    //  n,
    // `....new n is = (${n - 1})`
    //);
}
exponential3n(3);

//***********************__Memoization__*************************** */
/*
Memoization : a design pattern used to reduce the overall number of calculations that can occur
in algorithms that use recursive strategies to solve.
MZ stores the results of the sub-problems in some other data structure, so that we can avoid
duplicate calculations and only 'solve' each problem once.
Two features that comprise memoization:
1. FUNCTION MUST BE RECURSIVE.
2. Our additional DS is usually an object (we refer to it as our memo!)
*/

//!    _____Memoizing Factorial_____

// function fib(n, memo = {}) {
//   if (n in memo) return memo[n]; // If we already calculated this value, return it
//   if (n === 1 || n === 2) return 1;

//   // Store the result in the memo first before returning
//   // Make sure to pass the memo in to your calls to fib!
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// }
function factorial(n, memo2 = {}) {
    const key = JSON.stringify(n);
    if (key in memo2) return memo2[key];
    if (n === 1) return 1;
    memo2[key] = n * factorial(n - 1, memo2);
    //console.log("this is memo", memo2);
    return memo2[key];
}

//console.log(memo2);
// //factorial(6); // => 720, requires 6 calls
//console.log("factorial(6): ", factorial(6));
// //factorial(6); // => 720, requires 1 call
// //factorial(5); // => 120, requires 1 call
// console.log("factorial(5): ", factorial(5));
//factorial(7); // => 5040, requires 2 calls
//console.log("factorial(7): ", factorial(7));
//console.log("factorial(20): ", factorial(20)); // 2432902008176640000
/*
this is memo { '2': 2 }
this is memo { '2': 2, '3': 6 }
this is memo { '2': 2, '3': 6, '4': 24 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120 }
this is memo { '2': 2 }
this is memo { '2': 2, '3': 6 }
this is memo { '2': 2, '3': 6, '4': 24 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 }
factorial(6):  720
this is memo { '2': 2 }
this is memo { '2': 2, '3': 6 }
this is memo { '2': 2, '3': 6, '4': 24 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 }
this is memo { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }
factorial(7):  5040
*/

/*
The Memoization Formula
Rules
1. Write the unoptimized brute force recursion (make sure it works);
2. Add memo object as an additional arugmnt .
3. Add a base case condition that returns the stored value if the function's argument is in the memo.
4. Before returning the result of the recursive case, store it in the memo as a value and make the
function's argument it's key.
!Things to remember
*1. When solving DP problems with Memoization, it is helpful to draw out the visual tree first.
*2. When you notice duplicate sub-tree's that means we can memoize.
*/
function fastFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;
    memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
    return memo[n];
}
//fastFib(6); // => 8
//console.log("fastFib(6): ", fastFib(6)); //fastFib(6):  8
//fastFib(50); // => 12586269025
//console.log("fastFib(50): ", fastFib(50)); //fastFib(50):  12586269025

//***********************__Tabulation__*************************** */
/*
Tabulation Strategy
//Use When:
-The function is iterative and not recursive.
-The accompanying Data Structure is usually an array.
*/
function fibTab(n) {
    let table = [0, 1, 1];

    // if(n === 0 || n === 1){
    //    return 1;
    // }

    while (table.length - 1 < n) {
        table.push(table[table.length - 1] + table[table.length - 2]);
    }

    return table[n];
}

console.log(fibTab(1)); //1
console.log(fibTab(2)); //1
console.log(fibTab(3)); //2
console.log(fibTab(4)); //3
console.log(fibTab(5)); //5
console.log(fibTab(50)); //12586269025
```

</details>
