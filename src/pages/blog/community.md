---
title: Python For Javascript Developers
date: '2019-05-27'
image: images/sinewave.gif
seo:
  title: Community Round-up
  description: Commodo ante vis placerat interdum massa massa primis
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Community Round-up
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
      value: Community Round-up
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

# TBC
