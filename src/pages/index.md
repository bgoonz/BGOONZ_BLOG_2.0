---
title: Bryan Guner Web Dev Resource Gub
sections:
  - section_id: hero
    type: section_hero
    title: I am a musician/electrical engineer turned web developer
    image: images/3.jpg
    content: >-
      This section can contain a subtitle or tagline. The recommended length is
      one to three sentences, but can be changed as you prefer.
    actions:
      - label: Get Started
        url: /docs
        style: primary
  - section_id: features
    type: section_grid
    col_number: three
    grid_items:
      - title: Documentation
        content: "# A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example[Bryan Guner](https://bryanguner.medium.com/?source=post_page-----803ff193c522--------------------------------)[Feb 27](https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522?source=post_page-----803ff193c522--------------------------------)\_·\_8\_min read![](https://miro.medium.com/max/2000/0\\*yjlSk3T9c2\\_14in1.png)***Curating Complexity: A Guide to Big-O Notation***![](https://miro.medium.com/max/34/1\\*TT8uuv1x3nmGUw5rvtoZ8A.png?q=20)![](https://miro.medium.com/max/618/1\\*TT8uuv1x3nmGUw5rvtoZ8A.png)![](https://miro.medium.com/max/60/1\\*6zKhmJoHkvDbrd8jfUDf3A.png?q=20)![](https://miro.medium.com/max/737/1\\*6zKhmJoHkvDbrd8jfUDf3A.png)![](https://miro.medium.com/max/60/1\\*4U79jBMjU2wKE_tyYcD\\_3A.png?q=20)![](https://miro.medium.com/max/1359/1\\*4U79jBMjU2wKE_tyYcD\\_3A.png)![](https://miro.medium.com/max/60/1\\*Qh42KZgcCxmVt6WrTasCVw.png?q=20)![](https://miro.medium.com/max/1351/1\\*Qh42KZgcCxmVt6WrTasCVw.png)![](https://miro.medium.com/max/60/0\\*2XaPj7UGKZYFjYhb?q=20)![](https://miro.medium.com/max/1129/0\\*2XaPj7UGKZYFjYhb)![](https://miro.medium.com/max/60/0\\*Ck9aeGY-d5tbz7dT?q=20)![](https://miro.medium.com/max/1338/0\\*Ck9aeGY-d5tbz7dT)![](https://miro.medium.com/max/50/0\\*AByxtBjFrPVVYmyu?q=20)![](https://miro.medium.com/max/897/0\\*AByxtBjFrPVVYmyu)![](https://miro.medium.com/max/60/0\\*GeYNxlRcbt2cf0rY?q=20)![](https://miro.medium.com/max/950/0\\*GeYNxlRcbt2cf0rY)![](https://miro.medium.com/max/60/0\\*gbNU6wrszGPrfAZG?q=20)![](https://miro.medium.com/max/835/0\\*gbNU6wrszGPrfAZG)![](https://miro.medium.com/max/60/0\\*GeU8YwwCoK8GiSTD?q=20)![](https://miro.medium.com/max/757/0\\*GeU8YwwCoK8GiSTD)![](https://miro.medium.com/max/60/0\\*IxqGb72XDVDeeiMl?q=20)![](https://miro.medium.com/max/918/0\\*IxqGb72XDVDeeiMl)![](https://miro.medium.com/max/60/0\\*HMCR--9niDt5zY6M?q=20)![](https://miro.medium.com/max/757/0\\*HMCR--9niDt5zY6M)![](https://miro.medium.com/max/60/0\\*WLl_HpdBGXYx284T?q=20)![](https://miro.medium.com/max/903/0\\*WLl_HpdBGXYx284T)![](https://miro.medium.com/max/58/0\\*-LyHJXGPTYsWLDZf?q=20)![](https://miro.medium.com/max/1124/0\\*-LyHJXGPTYsWLDZf)![](https://miro.medium.com/max/60/0\\*-naVYGTXzE2Yoali?q=20)![](https://miro.medium.com/max/2376/0\\*-naVYGTXzE2Yoali)![](https://miro.medium.com/max/60/1\\*VCmj_H9AHs41oC9Yx1hZFQ.png?q=20)![](https://miro.medium.com/max/1824/1\\*VCmj_H9AHs41oC9Yx1hZFQ.png)&#xA;&#xA;&#xA;\n\n\n\n\n\n*   Why is looking at runtime not a reliable method of calculating time complexity?\n\n*   Not all computers are made equal( some may be stronger and therefore boost our runtime speed )\n\n*   How many background processes ran concurrently with our program that was being tested?\n\n*   We also need to ask if our code remains performant if we increase the size of the input.\n\n*   The real question we need to answering is:\_How does our performance scale?.\n\n# big ‘O’ notation\n\n*   Big O Notation is a tool for describing the efficiency of algorithms with respect to the size of the input arguments.\n\n*   Since we use mathematical functions in Big-O, there are a few big picture ideas that we’ll want to keep in mind:\n\n*   The function should be defined by the size of the input.\n\n*   Smaller\_Big O is better (lower time complexity)\n\n*   Big O is used to describe the worst case scenario.\n\n*   Big O is simplified to show only its most dominant mathematical term.\n\n# Simplifying Math Terms\n\n*   We can use the following rules to simplify the our Big O functions:\n\n*   Simplify Products\_: If the function is a product of many terms, we drop the terms that don't depend on n.\n\n*   Simplify Sums\_: If the function is a sum of many terms, we drop the non-dominant terms.\n\n*   n\_: size of the input\n\n*   T(f)\_: unsimplified math function\n\n*   O(f)\_: simplified math function.\n\nPutting it all together\n\n*   First we apply the product rule to drop all constants.\n\n*   Then we apply the sum rule to select the single most dominant term.\n\n# Complexity Classes\n\nCommon Complexity Classes\n\n## There are 7 major classes in Time Complexity\n\n## O(1) Constant\n\n> **The algorithm takes roughly the same number of steps for any input size.**\n\n## O(log(n)) Logarithmic\n\n> **In most cases our hidden base of Logarithmic time is 2, log complexity algorithm’s will typically display ‘halving’ the size of the input (like binary search!)**\n\n## O(n) Linear\n\n> **Linear algorithm’s will access each item of the input “once”.**\n\n# O(nlog(n)) Log Linear Time\n\n> **Combination of linear and logarithmic behavior, we will see features from both classes.**\n>\n> Algorithm’s that are log-linear will use**\_both recursion AND iteration.**\n\n# O(nc) Polynomial\n\n> **C is a fixed constant.**\n\n# O(c^n) Exponential\n\n> **C is now the number of recursive calls made in each stack frame.**\n>\n> **Algorithm’s with exponential time are VERY SLOW.**\n\n# Memoization\n\n*   Memoization : a design pattern used to reduce the overall number of calculations that can occur in algorithms that use recursive strategies to solve.\n\n*   MZ stores the results of the sub-problems in some other data structure, so that we can avoid duplicate calculations and only ‘solve’ each problem once.\n\n*   Two features that comprise memoization:\n\n1.  FUNCTION MUST BE RECURSIVE.\n\n2.  Our additional Data Structure is usually an object (we refer to it as our memo… or sometimes cache!)\n\n# Memoizing Factorial\n\nOur memo object is\_*mapping*\_out our arguments of factorial to it’s return value.\n\n*   Keep in mind we didn’t improve the speed of our algorithm.\n\n# Memoizing Fibonacci\n\n*   Our time complexity for Fibonacci goes from O(2^n) to O(n) after applying memoization.\n\n# The Memoization Formula\n\n> *Rules:*\n\n1.  *Write the unoptimized brute force recursion (make sure it works);*\n\n2.  *Add memo object as an additional argument .*\n\n3.  *Add a base case condition that returns the stored value if the function’s argument is in the memo.*\n\n4.  *Before returning the result of the recursive case, store it in the memo as a value and make the function’s argument it’s key.*\n\n## Things to remember\n\n1.  *When solving DP problems with Memoization, it is helpful to draw out the visual tree first.*\n\n2.  *When you notice duplicate sub-tree’s that means we can memoize.*\n\n# Tabulation\n\n## Tabulation Strategy\n\n> Use When:\n\n*   **The function is iterative and not recursive.**\n\n*   *The accompanying DS is usually an array.*\n\n## Steps for tabulation\n\n*   *Create a table array based off the size of the input.*\n\n*   *Initialize some values in the table to ‘answer’ the trivially small subproblem.*\n\n*   *Iterate through the array and fill in the remaining entries.*\n\n*   *Your final answer is usually the last entry in the table.*\n\n# Memo and Tab Demo with Fibonacci\n\n> *Normal Recursive Fibonacci*\n\n> *Memoization Fibonacci 1*\n\n> *Memoization Fibonacci 2*\n\n> *Tabulated Fibonacci*\n\n# Example of Linear Search\n\n*   *Worst Case Scenario: The term does not even exist in the array.*\n\n*   *Meaning: If it doesn’t exist then our for loop would run until the end therefore making our time complexity O(n).*\n\n# Sorting Algorithms\n\n# Bubble Sort\n\nTime Complexity: Quadratic O(n^2)\n\n*   The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.\n\nSpace Complexity: O(1)\n\n*   Bubble Sort will always use the same amount of memory regardless of n.\n\n<!---->\n\n*   The first major sorting algorithm one learns in introductory programming courses.\n\n*   Gives an intro on how to convert unsorted data into sorted data.\n\n> It’s almost never used in production code because:\n\n*   *It’s not efficient*\n\n*   *It’s not commonly used*\n\n*   *There is stigma attached to it*\n\n*   *Bubbling Up\_: Term that infers that an item is in motion, moving in some direction, and has some final resting destination.*\n\n*   *Bubble sort, sorts an array of integers by bubbling the largest integer to the top.*\n\n<!---->\n\n*   *Worst Case & Best Case are always the same because it makes nested loops.*\n\n*   *Double for loops are polynomial time complexity or more specifically in this case Quadratic (Big O) of: O(n²)*\n\n# Selection Sort\n\nTime Complexity: Quadratic O(n^2)\n\n*   Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);\n\nSpace Complexity: O(1)\n\n*   Selection Sort will always use the same amount of memory regardless of n.\n\n<!---->\n\n*   Selection sort organizes the smallest elements to the start of the array.\n\n> Summary of how Selection Sort should work:\n\n1.  *Set MIN to location 0*\n\n2.  *Search the minimum element in the list.*\n\n3.  *Swap with value at location Min*\n\n4.  *Increment Min to point to next element.*\n\n5.  *Repeat until list is sorted.*\n\n# Insertion Sort\n\nTime Complexity: Quadratic O(n^2)\n\n*   Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);\n\nSpace Complexity: O(n)\n\n*   Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.\n\n# Merge Sort\n\nTime Complexity: Log Linear O(nlog(n))\n\n*   Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n));\_Space Complexity: O(n)\n\n*   We are linear O(n) time because we are creating subArrays.\n\n# Example of Merge Sort\n\n*   **Merge sort is O(nlog(n)) time.**\n\n*   *We need a function for merging and a function for sorting.*\n\n> Steps:\n\n1.  *If there is only one element in the list, it is already sorted; return the array.*\n\n2.  *Otherwise, divide the list recursively into two halves until it can no longer be divided.*\n\n3.  *Merge the smallest lists into new list in a sorted order.*\n\n# Quick Sort\n\nTime Complexity: Quadratic O(n^2)\n\n*   Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.\n\nSpace Complexity: O(n)\n\n*   Our space complexity is linear O(n) because of the partition arrays we create.\n\n*   QS is another Divide and Conquer strategy.\n\n*   Some key ideas to keep in mind:\n\n*   It is easy to sort elements of an array relative to a particular target value.\n\n*   An array of 0 or 1 elements is already trivially sorted.\n\n# Binary Search\n\nTime Complexity: Log Time O(log(n))\n\nSpace Complexity: O(1)\n\n> *Recursive Solution*\n\n> *Min Max Solution*\n\n*   *Must be conducted on a sorted array.*\n\n*   *Binary search is logarithmic time, not exponential b/c n is cut down by two, not growing.*\n\n*   *Binary Search is part of Divide and Conquer.*\n\n# Insertion Sort\n\n*   **Works by building a larger and larger sorted region at the left-most end of the array.**\n\n> Steps:\n\n1.  *If it is the first element, and it is already sorted; return 1.*\n\n2.  *Pick next element.*\n\n3.  *Compare with all elements in the sorted sub list*\n\n4.  *Shift all the elements in the sorted sub list that is greater than the value to be sorted.*\n\n5.  *Insert the value*\n\n6.  *Repeat until list is sorted.*\n\n# If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:\n\n# Or Checkout my personal Resource Site:\n"
        actions:
          - label: Get Started
            url: /docs
            style: link
      - title: Blog
        content: >-
          Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis
          nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu.
        actions:
          - label: View Posts
            url: /blog
            style: link
      - title: Style Guide
        content: >-
          Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam
          a maximus mi. Quisque justo nunc, sollicitudin euismod euismod at,
          tincidunt ut tellus. Vivamus rhoncus mattis varius.
        actions:
          - label: Learn More
            url: /style-guide
            style: link
  - section_id: text-img
    type: section_content
    image: images/2.jpg
    image_position: left
    title: Musician
    content: >-
      Nam pulvinar ante eu ultricies volutpat. Sed nulla nibh, dapibus sit amet
      cursus quis, fringilla nec sapien. Vestibulum imperdiet nunc bibendum
      consectetur lobortis.
    actions:
      - label: 'Watch '
        url: 'https://www.youtube.com/watch?v=xGZSWvFess8&ab_channel=BryanGuner'
        style: primary
      - label: Get Started
        url: /docs/getting-started
        style: secondary
  - section_id: text-no-img
    type: section_content
    title: A Section Without Image
    content: >-
      Nam pulvinar ante eu ultricies volutpat. Sed nulla nibh, dapibus sit amet
      cursus quis, fringilla nec sapien. Vestibulum imperdiet nunc bibendum
      consectetur lobortis.
    actions:
      - label: Get Started
        url: /docs/getting-started/installation
        style: primary
  - section_id: features-two-col
    type: section_grid
    title: Sample Layouts
    subtitle: An optional subtitle of the section
    col_number: two
    grid_items:
      - title: Overview
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla tortor at, pulvinar orci.
        actions:
          - label: Learn More
            url: /overview
            style: link
      - title: Showcase
        content: >-
          Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam
          a maximus mi. Quisque justo nunc, sollicitudin euismod euismod at,
          tincidunt ut tellus. Vivamus rhoncus mattis varius.
        actions:
          - label: Learn More
            url: /showcase
            style: link
  - section_id: cta
    type: section_cta
    title: The Title of The Call to Action Block
    subtitle: This is an optional description for the call to action block.
    actions:
      - label: Get Started
        url: /docs/getting-started/installation
        style: primary
seo:
  title: Stackbit Libris Theme
  description: The preview of the Libris theme
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Stackbit Libris Theme
      keyName: property
    - name: 'og:description'
      value: The preview of the Libris theme
      keyName: property
    - name: 'og:image'
      value: images/4.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Stackbit Libris Theme
    - name: 'twitter:description'
      value: The preview of the Libris theme
    - name: 'twitter:image'
      value: images/4.jpg
      relativeUrl: true
template: advanced
---
