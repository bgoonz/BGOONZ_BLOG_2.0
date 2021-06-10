---
date: '2019-05-27'
image: images/2.jpg
seo:
  title: python
  description: Commodo ante vis placerat interdum massa massa primis
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: python
      keyName: property
    - name: 'og:description'
      value: Commodo ante vis placerat interdum massa massa primis
      keyName: property
    - name: 'og:image'
      value: images/2.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: python
    - name: 'twitter:description'
      value: Commodo ante vis placerat interdum massa massa primis
    - name: 'twitter:image'
      value: images/2.jpg
      relativeUrl: true
template: post
---
# Python Study Guide for a JavaScript Programmer&#xA;

![](https://miro.medium.com/max/1970/1\*3V9VOfPk_hrFdbEAd3j-QQ.png)![](https://miro.medium.com/max/52/0\*eC4EvZcv6hhH88jX.png?q=20)![](https://miro.medium.com/max/647/0\*eC4EvZcv6hhH88jX.png)![](https://miro.medium.com/max/60/0\*Ez\_1PZ93N4FfvkRr.png?q=20)![](https://miro.medium.com/max/608/0\*Ez\_1PZ93N4FfvkRr.png)![](https://miro.medium.com/max/60/0\*eE3E5H0AoqkhqK1z.png?q=20)![](https://miro.medium.com/max/1648/0\*eE3E5H0AoqkhqK1z.png)![](https://miro.medium.com/max/60/0\*Q0CMqFd4PozLDFPB.png?q=20)![](https://miro.medium.com/max/1638/0\*Q0CMqFd4PozLDFPB.png)![](https://miro.medium.com/max/3216/0\*HQpndNhm1Z_xSoHb.png)![](https://miro.medium.com/max/60/0\*qHzGRLTOMTf30miT.png?q=20)![](https://miro.medium.com/max/1614/0\*qHzGRLTOMTf30miT.png)\[

]\(https://github.com/bgoonz)

# Applications of Tutorial & Cheat Sheet Respectivley (At Bottom Of Tutorial):

# Basics

*   **PEP8** : Python Enhancement Proposals, style-guide for Python.

*   print is the equivalent of console.log.

> ‘print() == console.log()’

# # is used to make comments in your code.

> *Python has a built in help function that let’s you see a description of the source code without having to navigate to it… “-SickNasty … Autor Unknown”*

# Numbers

*   Python has three types of numbers:

1.  **Integer**

2.  **Positive and Negative Counting Numbers.**

No Decimal Point

> Created by a literal non-decimal point number … **or** … with the *int()* constructor.

**3. Complex Numbers**

> Consist of a real part and imaginary part.

## Boolean is a subtype of integer in Python.🤷‍♂️

> If you came from a background in JavaScript and learned to accept the premise(s) of the following meme…

> Than I am sure you will find the means to suspend your disbelief.

# KEEP IN MIND:

> **The i is switched to a j in programming.**

T\*his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-\*\*space \**when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler.*

*   **Type Casting** : The process of converting one number to another.

**The arithmetic operators are the same between JS and Python, with two additions:**

*   *“\*\*” : Double asterisk for exponent.*

*   *“//” : Integer Division.*

*   **There are no spaces between math operations in Python.**

*   **Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing Math.floor() in JS.**

*   **There are no ++ and -- in Python, the only shorthand operators are:**

# Strings

*   Python uses both single and double quotes.

*   You can escape strings like so 'Jodi asked, "What\\'s up, Sam?"'

*   Multiline strings use triple quotes.

**Use the len() function to get the length of a string.**

# **Python uses zero-based indexing**

## Python allows negative indexing (thank god!)

*   Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… *(mind you that in JS … strings are wrapped in an object (under the hood)… upon which the string methods are actually called. As a immutable privative type **by textbook definition**, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.)*

*   The end range is exclusive just like slice in JS.

<!---->

*   The index string function is the equiv. of indexOf() in JS

<!---->

*   The count function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.

<!---->

*   **You can use + to concatenate strings, just like in JS.**

*   **You can also use “\*” to repeat strings or multiply strings.**

*   **Use the format() function to use placeholders in a string to input values later on.**

<!---->

*   \*Shorthand way to use format function is:
    \*print(f'Your name is {first_name} {last_name}')

## Some useful string methods.

*   **Note that in JS join is used on an Array, in Python it is used on String.**

<!---->

*   There are also many handy testing methods.

# Variables and Expressions

*   **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.

*   Duck Typing is the fundamental approach of Python.

*   Assignment of a value automatically declares a variable.

<!---->

*   ***You can chain variable assignments to give multiple var names the same value.***

## Use with caution as this is highly unreadable

## The value and type of a variable can be re-assigned at any time.

*   *NaN does not exist in Python, but you can 'create' it like so:
    **print(float("nan"))***

*   *Python replaces null with none.*

*   ***none is an object** and can be directly assigned to a variable.*

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

# Boolean Data Type

*   One of the biggest benefits of Python is that it reads more like English than JS does.

<!---->

*   By default, Python considers an object to be true UNLESS it is one of the following:

*   Constant None or False

*   Zero of any numeric type.

*   Empty Sequence or Collection.

*   True and False must be capitalized

# Comparison Operators

*   Python uses all the same equality operators as JS.

*   In Python, equality operators are processed from left to right.

*   Logical operators are processed in this order:

1.  **NOT**

2.  **AND**

3.  **OR**

> Just like in JS, you can use parentheses to change the inherent order of operations.
>
> **Short Circuit** : Stopping a program when a true or false has been reached.

# Identity vs Equality

*   In the Python community it is better to use is and is not over == or !=

# If Statements

> Remember the order of elif statements matter.

# While Statements

*   Break statement also exists in Python.

<!---->

*   As are continue statements

# Try/Except Statements

*   Python equivalent to try/catch

<!---->

*   You can name an error to give the output more specificity.

<!---->

*   You can also use the pass commmand to by pass a certain error.

<!---->

*   The pass method won't allow you to bypass every single error so you can chain an exception series like so:

<!---->

*   You can use an else statement to end a chain of except statements.

<!---->

*   finally is used at the end to clean up all actions under any circumstance.

<!---->

*   Using duck typing to check to see if some value is able to use a certain method.

# Pass

*   Pass Keyword is required to write the JS equivalent of :

# Functions

*   **Function definition includes:**

*   **The def keyword**

*   **The name of the function**

*   **A list of parameters enclosed in parentheses.**

*   **A colon at the end of the line.**

*   **One tab indentation for the code to run.**

*   **You can use default parameters just like in JS**

## **Keep in mind, default parameters must always come after regular parameters.**

*   *You can specify arguments by name without destructuring in Python.*

<!---->

*   The lambda keyword is used to create anonymous functions and are supposed to be one-liners.

toUpper = lambda s: s.upper()

# Notes

## Formatted Strings

> Remember that in Python join() is called on a string with an array/list passed in as the argument.
> Python has a very powerful formatting engine.
> format() is also applied directly to strings.

# Comma Thousands Separator

# Date and Time

# Percentage

# Data Tables

**Python can be used to display html, css, and JS.**
*It is common to use Python as an API (Application Programming Interface)*

## Structured Data

## Sequence : The most basic data structure in Python where the index determines the order.

> List
> Tuple
> Range
> Collections : Unordered data structures, hashable values.

## Dictionaries&#xA;Sets

## Iterable : Generic name for a sequence or collection; any object that can be iterated through.

## Can be mutable or immutable.&#xA;Built In Data Types

# Lists are the python equivalent of arrays.

# You can instantiate

## Test if a value is in a list.

## Instantiated with parentheses

## Sometimes instantiated without

## Tuple() built in can be used to convert other data into a tuple

## Ranges : A list of numbers which can’t be changed; often used with for loops.

**Declared using one to three parameters**.

> Start : opt. default 0, first # in sequence.
> Stop : required next number past the last number in the sequence.
> Step : opt. default 1, difference between each number in the sequence.

## Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.

## Mutable.

***Declared with curly braces of the built in dict()***

> *Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal.*

**Use the in operator to see if a key exists in a dictionary.**

S**ets : Unordered collection of distinct objects; objects that need to be hashable.**

> *Always be unique, duplicate items are auto dropped from the set.*

## Common Uses:

> Removing Duplicates
> Membership Testing
> Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.

**Standard Set is mutable, Python has a immutable version called frozenset.
Sets created by putting comma seperated values inside braces:**

## Also can use set constructor to automatically put it into a set.

**filter(function, iterable) : creates new iterable of the same type which includes each item for which the function returns true.**

**map(function, iterable) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted(iterable, key=None, reverse=False) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate(iterable, start=0) : starts with a sequence and converts it to a series of tuples**

## (0, ‘First’), (1, ‘Second’), (2, ‘Third’), (3, ‘Fourth’)

## (1, ‘First’), (2, ‘Second’), (3, ‘Third’), (4, ‘Fourth’)

> zip(\*iterables) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.
> Functions that analyze iterable

**len(iterable) : returns the count of the number of items.**

**max(\*args, key=None) : returns the largest of two or more arguments.**

**max(iterable, key=None) : returns the largest item in the iterable.**

*key optional function which converts an item to a value to be compared.
min works the same way as max*

**sum(iterable) : used with a list of numbers to generate the total.**

*There is a faster way to concatenate an array of strings into one string, so do not use sum for that.*

**any(iterable) : returns True if any items in the iterable are true.**

**all(iterable) : returns True is all items in the iterable are true.**

# Working with dictionaries

**dir(dictionary) : returns the list of keys in the dictionary.
Working with sets**

**Union : The pipe | operator or union(\*sets) function can be used to produce a new set which is a combination of all elements in the provided set.**

## Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets.

**Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.**

# **For Statements&#xA;In python, there is only one for loop.**

Always Includes:

> 1\. The for keyword
> 2\. A variable name
> 3\. The ‘in’ keyword
> 4\. An iterable of some kid
> 5\. A colon
> 6\. On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

***Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list.***

**You can loop and destructure at the same time.**

> Prints 1, 2
>
> Prints 3, 4
>
> Prints 5, 6

**You can use values() and keys() to loop over dictionaries.**

*Prints red*

*Prints 42*

*Prints color*

*Prints age*

**For loops can also iterate over both keys and values.**

**Getting tuples**

*Prints (‘color’, ‘red’)*

*Prints (‘age’, 42)*

*Destructuring to values*

*Prints Key: age Value: 42*

*Prints Key: color Value: red*

**Looping over string**

**When you order arguments within a function or function call, the args need to occur in a particular order:**

*formal positional args.*

\*args

*keyword args with default values*

\*\*kwargs

# **Importing in Python**

**Modules are similar to packages in Node.js**
Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**

# **Terms**

> module : Python code in a separate file.
> package : Path to a directory that contains modules.
> [**init.py**](http://init.py/) : Default file for a package.
> submodule : Another file in a module’s folder.
> function : Function in a module.

**A module can be any file but it is usually created by placing a special file init.py into a folder. pic**

*Try to avoid importing with wildcards in Python.*

*Use multiple lines for clarity when importing.*

# Watching Out for Python 2

**Python 3 removed <> and only uses !=**

**format() was introduced with P3**

**All strings in P3 are unicode and encoded.
md5 was removed.**

**ConfigParser was renamed to configparser
sets were killed in favor of set() class.**

## **print was a statement in P2, but is a function in P3.**

# Topics revisited (in python syntax)

# Cheat Sheet:

## If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

Or Checkout my personal Resource Site:

# Python Cheat Sheet:

# If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:
