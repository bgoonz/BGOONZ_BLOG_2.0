Python Problems & Solutions For Beginners
=========================================

Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of this page for you to…

------------------------------------------------------------------------

### Python Problems & Solutions For Beginners

#### Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of this page for you to practice and refactor.

### Python Practice Problems

<figure><img src="https://cdn-images-1.medium.com/max/800/0*dMdMGwOJKHJ-5sOP.gif" class="graf-image" /></figure>

------------------------------------------------------------------------

#### Here are some other articles for reference if you need them:

<a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d"><strong>Beginners Guide To Python</strong><br />
<em>My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library…</em>medium.com</a><a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb"><strong>Python Study Guide for a JavaScript Programmer</strong><br />
<em>A guide to commands in Python from what you know in JavaScript</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### Here are the problems without solutions for you to practice with:

------------------------------------------------------------------------

### Problem 1

Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn `100` years old.

The `datetime` module supplies classes for manipulating dates and times.

While date and time arithmetic is supported, the focus of the implementation is on efficient attribute extraction for output formatting and manipulation.

<a href="https://docs.python.org/3/library/datetime.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://docs.python.org/3/library/datetime.html"><strong>datetime - Basic date and time types - Python 3.9.6 documentation</strong><br />
<em>Only one concrete class, the class, is supplied by the module. The class can represent simple timezones with fixed…</em>docs.python.org</a><a href="https://docs.python.org/3/library/datetime.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### Problem 2

Ask the user for a number. Depending on whether the number is `even` or `odd`, print out an appropriate message to the user.

#### Bonus:

1.  <span id="eebc">If the number is a multiple of `4`, print out a different message.</span>
2.  <span id="306e">Ask the user for two numbers: one number to check (call it num) and one number to divide by (check). If check divides evenly into num, tell that to the user. If not, print a different appropriate message.</span>

### Problem 3

Take a list and write a program that prints out all the elements of the list that are `less` than `5`.

Extras:

1.  <span id="fe03">Instead of printing the elements one by one, make a new list that has all the elements less than `5` from this list in it and print out this new list.</span>
2.  <span id="186b">Write this in one line of Python.</span>
3.  <span id="9cd1">Ask the user for a number and return a list that contains only elements from the original list a that are smaller than that number given by the user.</span>

### Problem 4

Create a program that asks the user for a number and then prints out a list of all the divisors of that number. (If you don’t know what a divisor is, it is a number that divides evenly into another number.

For example, `13` is a divisor of `26` because `26 / 13` has no remainder.)

### Problem 5

Take two lists, and write a program that returns a list that contains only the elements that are `common between the lists (without duplicates)`. Make sure your program works on two lists of different sizes.

<a href="https://docs.python.org/3/library/random.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://docs.python.org/3/library/random.html"><strong>random - Generate pseudo-random numbers - Python 3.9.6 documentation</strong><br />
<em>Source code: Lib/random.py This module implements pseudo-random number generators for various distributions. For…</em>docs.python.org</a><a href="https://docs.python.org/3/library/random.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

Bonus:

1.  <span id="e18a">Randomly generate two lists to test this.</span>
2.  <span id="148a">Write this in one line of Python.</span>

### Problem 6

Ask the user for a string and print out whether this string is a `palindrome` or not. (A palindrome is a string that reads the same forwards and backwards.)

> Here’s 5 ways to reverse a string (courtesy of <a href="https://www.geeksforgeeks.org/reverse-string-python-5-different-ways/" class="markup--anchor markup--pullquote-anchor">geeksforgeeks</a>)

------------------------------------------------------------------------

### Problem 7

Let’s say I give you a list saved in a variable: a = `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`.

Write one line of Python that takes this list a and makes a new list that has only the `even` elements of this list in it.

### Problem 8

Make a two-player `Rock-Paper-Scissors` game.

**Hint:**  
Ask for player plays (using input), compare them. Print out a message of congratulations to the winner, and ask if the players want to start a new game.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*1_4w6u4D7EDi2r4h.png" class="graf-image" /></figure>### Problem 9

Generate a random number between `1 and 100 (including 1 and 100)`. Ask the user to guess the number, then tell them whether they guessed `too low`, `too high`, or `exactly right`.

> **Hint:**  
> Remember to use the user input from the very first exercise.

**Extras:**  
Keep the game going until the user types `“exit”`.  
Keep track of how many guesses the user has taken, and when the game ends, print this out.

### Problem 10

Write a program that asks the user how many Fibonacci numbers to generate and then generates them. Take this opportunity to think about how you can use functions. Make sure to ask the user to enter the number of numbers in the sequence to generate.

**Hint:**  
The Fibonacci sequence is a sequence of numbers where the next number in the sequence is the sum of the previous two numbers in the sequence. The sequence looks like this: `1, 1, 2, 3, 5, 8, 13, …`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2xJsVLGikF6dg7qc.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### Intermediate Problems:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*hTU58jGsgkrszi76.gif" class="graf-image" /></figure>

------------------------------------------------------------------------

### Problem 11

In linear algebra, *a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.*  
Here is an example:

    1 2 3 4 8
    5 1 2 3 4
    4 5 1 2 3
    7 4 5 1 2

Write a program to determine whether a given input is a `Toeplitz` matrix.

### Problem 12

Given a positive integer `N`, find the smallest number of steps it will take to reach `1`.

There are two kinds of permitted steps:  
 — -&gt; You may decrement N to N — 1.  
 — -&gt; If `a * b = N`, you may decrement `N to the larger of a and b`.

For example, given 100, you can reach 1 in 5 steps with the following route:  
`100 -> 10 -> 9 -> 3 -> 2 -> 1.`

### Problem 13

Consider the following scenario: there are `N` mice and `N` holes placed at integer points along a line. Given this, find a method that maps mice to holes such that the largest number of steps any mouse takes is minimized.

Each move consists of moving one mouse `one` unit to the `left` or `right`, and only `one` mouse can fit inside each hole.

For example, suppose the mice are positioned at `[1, 4, 9, 15]`, and the holes are located at `[10, -5, 0, 16]`. In this case, the best pairing would require us to send the mouse at `1` to the hole at `-5`, so our function should return `6`.

### My Blog:

<a href="https://master--bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://master--bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>master--bgoonz-blog.netlify.app</a><a href="https://master--bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### Level Up Coding

Thanks for being a part of our community! <a href="https://www.youtube.com/channel/UC3v9kBR_ab4UHXXdknz8Fbg?sub_confirmation=1" class="markup--anchor markup--p-anchor">Subscribe to our YouTube channel</a> or join the <a href="https://skilled.dev/" class="markup--anchor markup--p-anchor"><strong>Skilled.dev coding interview course</strong></a>.

<a href="https://skilled.dev" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://skilled.dev"><strong>Coding Interview Questions + Land Your Dev Job | Skilled.dev</strong><br />
<em>Coding interview course taught in Python</em>skilled.dev</a><a href="https://skilled.dev" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 21, 2021](https://medium.com/p/dd631e9c3a9f).

<a href="https://medium.com/@bryanguner/beginner-python-problems-solutions-dd631e9c3a9f" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
