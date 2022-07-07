---
title: Practice
weight: 0
excerpt: Example Problems
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

## Python Practice:

# Python Problems & Solutions For Beginners

Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of this page for you to…

---

### Python Problems & Solutions For Beginners

#### Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of this page for you to practice and refactor.

### Python Practice Problems

<figure><img src="https://cdn-images-1.medium.com/max/800/0*dMdMGwOJKHJ-5sOP.gif" class="graf-image" /></figure>

---

#### Here are some other articles for reference if you need them:

<a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d"><strong>Beginners Guide To Python</strong><br />
<em>My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library…</em>medium.com</a><a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb"><strong>Python Study Guide for a JavaScript Programmer</strong><br />
<em>A guide to commands in Python from what you know in JavaScript</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

---

### Here are the problems without solutions for you to practice with:

---

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

Create a program that asks the user for a number and then prints out a list of all the divisors of that number. (If you don't know what a divisor is, it is a number that divides evenly into another number.

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

> Here's 5 ways to reverse a string (courtesy of <a href="https://www.geeksforgeeks.org/reverse-string-python-5-different-ways/" class="markup--anchor markup--pullquote-anchor">geeksforgeeks</a>)

---

### Problem 7

Let's say I give you a list saved in a variable: a = `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`.

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
The Fibonacci sequence is a sequence of numbers where the next number in the sequence is the sum of the previous two numbers in the sequence. The sequence looks like this: `1, 1, 2, 3, 5, 8, 13, …`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2xJsVLGikF6dg7qc.png" class="graf-image" /></figure>

---

### Intermediate Problems:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*hTU58jGsgkrszi76.gif" class="graf-image" /></figure>

---

### Problem 11

In linear algebra, _a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical._  
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
<em>You should probably skip this one… seriously it's just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

---

# Python

-   Python is an interpreted, high-level and general-purpose, dynamically typed programming language

-   It is also Object oriented, modular oriented and a scripting language.

-   In Python, everything is considered as an Object.

-   A python file has an extension of .py

-   Python follows Indentation to separate code blocks instead of flower brackets({}).

-   We can run a python file by the following command in cmd(Windows) or shell(mac/linux).

    `python <filename.py>`

#### By default, the python doesn't require any imports to run a python file.

## Create and execute a program

1. Open up a terminal/cmd
1. Create the program: nano/cat > nameProgram.py
1. Write the program and save it
1. python nameProgram.py

<br>

### Basic Datatypes

| Data Type | Description                                |
| --------- | ------------------------------------------ |
| int       | Integer values [0, 1, -2, 3]               |
| float     | Floating point values [0.1, 4.532, -5.092] |
| char      | Characters [a, b, @, !, `]                 |
| str       | Strings [abc, AbC, A@B, sd!, `asa]         |
| bool      | Boolean Values [True, False]               |
| char      | Characters [a, b, @, !, `]                 |
| complex   | Complex numbers [2+3j, 4-1j]               |

<br>

## Keywords

<br>

| Keyword  | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| break    | used to exit loop and used to exit                                                 |
| char     | basic declaration of a type character                                              |
| const    | prefix declaration meaning variable can not be changed                             |
| continue | go to bottom of loop in for, while loops                                           |
| class    | to define a class                                                                  |
| def      | to define a function                                                               |
| elif     | shortcut for (else if) used in else if ladder                                      |
| else     | executable statement, part of "if" structure                                       |
| float    | basic declaration of floating point                                                |
| for      | executable statement, for loop                                                     |
| from     | executable statement, used to import only specific objects from a package          |
| if       | executable statement                                                               |
| import   | to import modules                                                                  |
| pass     | keyword to specify noting is happening in the codeblock, generally used in classes |
| return   | executable statement with or without a value                                       |
| while    | executable statement, while loop                                                   |

<br>

## Operators

<br>

| Operator | Description                                                      |
| -------- | ---------------------------------------------------------------- | --- |
| ( )      | grouping parenthesis, function call, tuple declaration           |
| [ ]      | array indexing, also declaring lists etc.                        |
| !        | relational not, complement, ! a yields true or false             |
| ~        | bitwise not, ones complement, ~a                                 |
| \-       | unary minus, - a                                                 |
| \+       | unary plus, + a                                                  |
| \*       | multiply, a \* b                                                 |
| /        | divide, a / b                                                    |
| %        | modulo, a % b                                                    |
| \+       | add, a + b                                                       |
| \-       | subtract, a - b                                                  |
| <<       | shift left, left operand is shifted left by right operand bits   |
| \>>      | shift right, left operand is shifted right by right operand bits |
| <        | less than, result is true or false, a %lt; b                     |
| <=       | less than or equal, result is true or false, a <= b              |
| \>       | greater than, result is true or false, a > b                     |
| \>=      | greater than or equal, result is true or false, a >= b           |
| ==       | equal, result is true or false, a == b                           |
| !=       | not equal, result is true or false, a != b                       |
| &        | bitwise and, a & b                                               |
| ^        | bitwise exclusive or XOR, a ^ b                                  |
| \|       | bitwise or, a                                                    | b   |
| &&, and  | relational and, result is true or false, a < b && c >= d         |
| \|\|, or | relational or, result is true or false, a < b \|\| c >= d        |
| =        | store or assignment                                              |
| +=       | add and store                                                    |
| -=       | subtract and store                                               |
| \*=      | multiply and store                                               |
| /=       | divide and store                                                 |
| %=       | modulo and store                                                 |
| <<=      | shift left and store                                             |
| \>>=     | shift right and store                                            |
| &=       | bitwise and and store                                            |
| ^=       | bitwise exclusive or and store                                   |
| \|=      | bitwise or and store                                             |
| ,        | separator as in ( y=x,z=++x )                                    |

### Basic Data Structures

### List

-   List is a collection which is ordered and changeable. Allows duplicate members.

-   Lists are created using square brackets:

```py
thislist = ["apple", "banana", "cherry"]
```

-   List items are ordered, changeable, and allow duplicate values.

-   List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.

-   The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.

-   To determine how many items a list has, use the `len()` function.

-   A list can contain different data types:

```py
list1 = ["abc", 34, True, 40, "male"]
```

-   It is also possible to use the list() constructor when creating a new list

```py
thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets
```

### Tuple

-   Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
-   A tuple is a collection which is ordered and unchangeable.
-   Tuples are written with round brackets.

```py
thistuple = ("apple", "banana", "cherry")
```

-   Tuple items are ordered, unchangeable, and allow duplicate values.
-   Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.
-   When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.

-   Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
-   Since tuple are indexed, tuples can have items with the same value:
-   Tuples allow duplicate values:

```py
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
```

-   To determine how many items a tuple has, use the `len()`function:

```py
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))
```

-   To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.

```py
thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))
```

-   It is also possible to use the tuple() constructor to make a tuple.

```py

thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)
```

### Set

-   Set is a collection which is unordered and unindexed. No duplicate members.
-   A set is a collection which is both unordered and unindexed.

```py
thisset = {"apple", "banana", "cherry"}
```

-   Set items are unordered, unchangeable, and do not allow duplicate values.
-   Unordered means that the items in a set do not have a defined order.

-   Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

-   Sets are unchangeable, meaning that we cannot change the items after the set has been created.
-   Duplicate values will be ignored.
-   To determine how many items a set has, use the `len()` method.

```py
thisset = {"apple", "banana", "cherry"}

print(len(thisset))
```

-   Set items can be of any data type:

```py
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}
set4 = {"abc", 34, True, 40, "male"}
```

-   It is also possible to use the `set()` constructor to make a set.

```py
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
```

### Dictionary

-   Dictionary is a collection which is unordered and changeable. No duplicate members.
-   Dictionaries are used to store data values in key:value pairs.
-   Dictionaries are written with curly brackets, and have keys and values:

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
```

-   Dictionary items are presented in key:value pairs, and can be referred to by using the key name.

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
```

-   Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
-   Dictionaries cannot have two items with the same key.
-   Duplicate values will overwrite existing values.
-   To determine how many items a dictionary has, use the `len()` function.

```py
print(len(thisdict))
```

-   The values in dictionary items can be of any data type

```py
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
```

### Conditional branching

```py
    if condition:
        pass
    elif condition2:
        pass
    else:
        pass
```

### Loops

Python has two primitive loop commands:

1. while loops
2. for loops

#### While loop

-   With the `while` loop we can execute a set of statements as long as a condition is true.
-   Example: Print i as long as i is less than 6

```py
i = 1
while i < 6:
  print(i)
  i += 1
```

-   The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.
-   With the `break` statement we can stop the loop even if the while condition is true
-   With the continue statement we can stop the current iteration, and continue with the next.

-   With the else statement we can run a block of code once when the condition no longer is true.

#### For loop

-   A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

-   This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.

-   With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.

```py
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```

-   The for loop does not require an indexing variable to set beforehand.
-   To loop through a set of code a specified number of times, we can use the range() function.
-   The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.
-   The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3).
-   The else keyword in a for loop specifies a block of code to be executed when the loop is finished.
    A nested loop is a loop inside a loop.

-   The "inner loop" will be executed one time for each iteration of the "outer loop":

```py
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
```

-   for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.

```py
for x in [0, 1, 2]:
  pass
```

### Function definition

```py
def function_name():
    return
```

### Function call

```py
function_name()
```

-   We need not to specify the return type of the function.
-   Functions by default return `None`
-   We can return any datatype.

```py

def say_hi(name):
    """<---- Multi-Line Comments and Docstrings
    This is where you put your content for help() to inform the user
    about what your function does and how to use it
    """
    print(f"Hello {name}!")

print(say_hi("Bryan"))  # Should get the print inside the function, then None
# Boolean Values
# Work the same as in JS, except they are title case: True and False
a = True
b = False
# Logical Operators
# ! = not, || = or, && = and
print(True and True)
print(True and not True)
print(True or True)
# Truthiness - Everything is True except...
# False - None, False, '', [], (), set(), range(0)
# Number Values
# Integers are numbers without a floating decimal point
print(type(3))  # type returns the type of whatever argument you pass in
# Floating Point values are numbers with a floating decimal point
print(type(3.5))
# Type Casting
# You can convert between ints and floats (along with other types...)
print(float(3))  # If you convert a float to an int, it will truncate the decimal
print(int(4.5))
print(type(str(3)))
# Python does not automatically convert types like JS
# print(17.0 + ' heyooo ' + 17)  # TypeError
# Arithmetic Operators
# ** - exponent (comparable to Math.pow(num, pow))
# // - integer division
# There is no ++ or -- in Python
# String Values
# We can use single quotes, double quotes, or f'' for string formats
# We can use triple single quotes for multiline strings
print(
    """This here's a story
All about how
My life got twist
Turned upside down
"""
)
# Three double quotes can also be used, but we typically reserve these for
# multi-line comments and function docstrings (refer to lines 6-9)(Nice :D)
# We use len() to get the length of something
print(len("Bryan G"))  # 7 characters
print(len(["hey", "ho", "hey", "hey", "ho"]))  # 5 list items
print(len({1, 2, 3, 4, 5, 6, 7, 9}))  # 8 set items
# We can index into strings, list, etc..self.
name = "Bryan"
for i in range(len(name)):
    print(name[i])  # B, r, y, a, n
# We can index starting from the end as well, with negatives
occupation = "Full Stack Software Engineer"
print(occupation[-3])  # e
# We can also get ranges in the index with the [start:stop:step] syntax
print(occupation[0:4:1])  # step and stop are optional, stop is exclusive
print(occupation[::4])  # beginning to end, every 4th letter
print(occupation[4:14:2])  # Let's get weird with it!
# NOTE: Indexing out of range will give you an IndexError
# We can also get the index og things with the .index() method, similar to indexOf()
print(occupation.index("Stack"))
print(["Mike", "Barry", "Cole", "James", "Mark"].index("Cole"))
# We can count how many times a substring/item appears in something as well
print(occupation.count("S"))
print(
    """Now this here's a story all about how
My life got twist turned upside down
I forget the rest but the the the potato
smells like the potato""".count(
        "the"
    )
)
# We concatenate the same as Javascript, but we can also multiply strings
print("dog " + "show")
print("ha" * 10)
# We can use format for a multitude of things, from spaces to decimal places
first_name = "Bryan"
last_name = "Guner"
print("Your name is {0} {1}".format(first_name, last_name))
# Useful String Methods
print("Hello".upper())  # HELLO
print("Hello".lower())  # hello
print("HELLO".islower())  # False
print("HELLO".isupper())  # True
print("Hello".startswith("he"))  # False
print("Hello".endswith("lo"))  # True
print("Hello There".split())  # [Hello, There]
print("hello1".isalpha())  # False,  must consist only of letters
print("hello1".isalnum())  # True, must consist of only letters and numbers
print("3215235123".isdecimal())  # True, must be all numbers
# True, must consist of only spaces/tabs/newlines
print("       \n     ".isspace())
# False, index 0 must be upper case and the rest lower
print("Bryan Guner".istitle())
print("Michael Lee".istitle())  # True!
# Duck Typing - If it walks like a duck, and talks like a duck, it must be a duck
# Assignment - All like JS, but there are no special keywords like let or const
a = 3
b = a
c = "heyoo"
b = ["reassignment", "is", "fine", "G!"]
# Comparison Operators - Python uses the same equality operators as JS, but no ===
# < - Less than
# > - Greater than
# <= - Less than or Equal
# >= - Greater than or Equal
# == - Equal to
# != - Not equal to
# is - Refers to exact same memory location
# not - !
# Precedence - Negative Signs(not) are applied first(part of each number)
#            - Multiplication and Division(and) happen next
#            - Addition and Subtraction(or) are the last step
#  NOTE: Be careful when using not along with ==
print(not a == b)  # True
# print(a == not b) # Syntax Error
print(a == (not b))  # This fixes it. Answer: False
# Python does short-circuit evaluation
# Assignment Operators - Mostly the same as JS except Python has **= and //= (int division)
# Flow Control Statements - if, while, for
# Note: Python smushes 'else if' into 'elif'!
if 10 < 1:
    print("We don't get here")
elif 10 < 5:
    print("Nor here...")
else:
    print("Hey there!")
# Looping over a string
for c in "abcdefgh":
    print(c)
# Looping over a range
for i in range(5):
    print(i + 1)
# Looping over a list
lst = [1, 2, 3, 4]
for i in lst:
    print(i)
# Looping over a dictionary
spam = {"color": "red", "age": 42, "items": [(1, "hey"), (2, "hooo!")]}
for v in spam.values():
    print(v)
# Loop over a list of tuples and destructuring the values
# Assuming spam.items returns a list of tuples each containing two items (k, v)
for k, v in spam.items():
    print(f"{k}: {v}")
# While loops as long as the condition is True
#  - Exit loop early with break
#  - Exit iteration early with continue
spam = 0
while True:
    print("Sike That's the wrong Numba")
    spam += 1
    if spam < 5:
        continue
    break

# Functions - use def keyword to define a function in Python
def printCopyright():
    print("Copyright 2021, Bgoonz")

# Lambdas are one liners! (Should be at least, you can use parenthesis to disobey)
avg = lambda num1, num2: print(num1 + num2)
avg(1, 2)
# Calling it with keyword arguments, order does not matter
avg(num2=20, num1=1252)
printCopyright()
# We can give parameters default arguments like JS
def greeting(name, saying="Hello"):
    print(saying, name)

greeting("Mike")  # Hello Mike
greeting("Bryan", saying="Hello there...")
# A common gotcha is using a mutable object for a default parameter
# All invocations of the function reference the same mutable object
def append_item(item_name, item_list=[]):  # Will it obey and give us a new list?
    item_list.append(item_name)
    return item_list

# Uses same item list unless otherwise stated which is counterintuitive
print(append_item("notebook"))
print(append_item("notebook"))
print(append_item("notebook", []))
# Errors - Unlike JS, if we pass the incorrect amount of arguments to a function,
#          it will throw an error
# avg(1)  # TypeError
# avg(1, 2, 2) # TypeError
# ----------------------------------- DAY 2 ----------------------------------------
# Functions - * to get rest of position arguments as tuple
#           - ** to get rest of keyword arguments as a dictionary
# Variable Length positional arguments
def add(a, b, *args):
    # args is a tuple of the rest of the arguments
    total = a + b
    for n in args:
        total += n
    return total

print(add(1, 2))  # args is None, returns 3
print(add(1, 2, 3, 4, 5, 6))  # args is (3, 4, 5, 6), returns 21
# Variable Length Keyword Arguments
def print_names_and_countries(greeting, **kwargs):
    # kwargs is a dictionary of the rest of the keyword arguments
    for k, v in kwargs.items():
        print(greeting, k, "from", v)

print_names_and_countries(
    "Hey there", Monica="Sweden", Mike="The United States", Mark="China"
)
# We can combine all of these together
def example2(arg1, arg2, *args, kw_1="cheese", kw_2="horse", **kwargs):
    pass

# Lists are mutable arrays
empty_list = []
roomates = ["Beau", "Delynn"]
# List built-in function makes a list too
specials = list()
# We can use 'in' to test if something is in the list, like 'includes' in JS
print(1 in [1, 2, 4])  # True
print(2 in [1, 3, 5])  # False
# Dictionaries - Similar to JS POJO's or Map, containing key value pairs
a = {"one": 1, "two": 2, "three": 3}
b = dict(one=1, two=2, three=3)
# Can use 'in' on dictionaries too (for keys)
print("one" in a)  # True
print(3 in b)  # False
# Sets - Just like JS, unordered collection of distinct objects
bedroom = {"bed", "tv", "computer", "clothes", "playstation 4"}
# bedroom = set("bed", "tv", "computer", "clothes", "playstation 5")
school_bag = set(
    ["book", "paper", "pencil", "pencil", "book", "book", "book", "eraser"]
)
print(school_bag)
print(bedroom)
# We can use 'in' on sets as wel
print(1 in {1, 2, 3})  # True
print(4 in {1, 3, 5})  # False
# Tuples are immutable lists of items
time_blocks = ("AM", "PM")
colors = "red", "green", "blue"  # Parenthesis not needed but encouraged
# The tuple built-in function can be used to convert things to tuples
print(tuple("abc"))
print(tuple([1, 2, 3]))
# 'in' may be used on tuples as well
print(1 in (1, 2, 3))  # True
print(5 in (1, 4, 3))  # False
# Ranges are immutable lists of numbers, often used with for loops
#   - start - default: 0, first number in sequence
#   - stop - required, next number past last number in sequence
#   - step - default: 1, difference between each number in sequence
range1 = range(5)  # [0,1,2,3,4]
range2 = range(1, 5)  # [1,2,3,4]
range3 = range(0, 25, 5)  # [0,5,10,15,20]
range4 = range(0)  # []
for i in range1:
    print(i)
# Built-in functions:
# Filter
isOdd = lambda num: num % 2 == 1
filtered = filter(isOdd, [1, 2, 3, 4])
print(list(filtered))
for num in filtered:
    print(f"first way: {num}")
print("--" * 20)
[print(f"list comprehension: {i}") for i in [1, 2, 3, 4, 5, 6, 7, 8] if i % 2 == 1]
# Map
def toUpper(str):
    return str.upper()

upperCased = map(toUpper, ["a", "b", "c", "d"])
print(list(upperCased))
# Sorted
sorted_items = sorted(["john", "tom", "sonny", "Mike"])
print(list(sorted_items))  # Notice uppercase comes before lowercase
# Using a key function to control the sorting and make it case insensitive
sorted_items = sorted(["john", "tom", "sonny", "Mike"], key=str.lower)
print(sorted_items)
# You can also reverse the sort
sorted_items = sorted(["john", "tom", "sonny", "Mike"], key=str.lower, reverse=True)
print(sorted_items)
# Enumerate creates a tuple with an index for what you're enumerating
quarters = ["First", "Second", "Third", "Fourth"]
print(list(enumerate(quarters)))
print(list(enumerate(quarters, start=1)))
# Zip takes list and combines them as key value pairs, or really however you need
keys = ("Name", "Email")
values = ("Buster", "cheetoh@johhnydepp.com")
zipped = zip(keys, values)
print(list(zipped))
# You can zip more than 2
x_coords = [0, 1, 2, 3, 4]
y_coords = [4, 6, 10, 9, 10]
z_coords = [20, 10, 5, 9, 1]
coords = zip(x_coords, y_coords, z_coords)
print(list(coords))
# Len reports the length of strings along with list and any other object data type
print_len = lambda item: print(len(item))  # doing this to save myself some typing
print_len("Mike")
print_len([1, 5, 2, 10, 3, 10])
print_len({1, 5, 10, 9, 10})  # 4 because there is a duplicate here (10)
print_len((1, 4, 10, 9, 20))
# Max will return the max number in a given scenario
print(max(1, 2, 35, 1012, 1))
# Min
print(min(1, 5, 2, 10))
print(min([1, 4, 7, 10]))
# Sum
print(sum([1, 2, 4]))
# Any
print(any([True, False, False]))
print(any([False, False, False]))
# All
print(all([True, True, False]))
print(all([True, True, True]))
# Dir returns all the attributes of an object including it's methods and dunder methods
user = {"Name": "Bob", "Email": "bob@bob.com"}
print(dir(user))
# Importing packages and modules
#  - Module - A Python code in a file or directory
#  - Package - A module which is a directory containing an __init__.py file
#  - Submodule - A module which is contained within a package
#  - Name - An exported function, class, or variable in a module
# Unlike JS, modules export ALL names contained within them without any special export key
# Assuming we have the following package with four submodules
#  math
#  |  __init__.py
#  | addition.py
#  | subtraction.py
#  | multiplication.py
#  | division.py
# If we peek into the addition.py file we see there's an add function
# addition.py
# We can import 'add' from other places because it's a 'name' and is automatically exported
def add(num1, num2):
    return num1 + num2

# Notice the . syntax because this package can import it's own submodules.
# Our __init__.py has the following files
# This imports the 'add' function
# And now it's also re-exported in here as well
# from .addition import add
# These import and re-export the rest of the functions from the submodule
# from .subtraction import subtract
# from .division import divide
# from .multiplication import multiply
# So if we have a script.py and want to import add, we could do it many ways
# This will load and execute the 'math/__init__.py' file and give
# us an object with the exported names in 'math/__init__.py'
import math
# print(math.add(1,2))
# This imports JUST the add from 'math/__init__.py'
# from math import add
# print(add(1, 2))
# This skips importing from 'math/__init__.py' (although it still runs)
# and imports directly from the addition.py file
# from math.addition import add
# This imports all the functions individually from 'math/__init__.py'
# from math import add, subtract, multiply, divide
# print(add(1, 2))
# print(subtract(2, 1))
# This imports 'add' renames it to 'add_some_numbers'
# from math import add as add_some_numbers
# --------------------------------------- DAY 3 ---------------------------------------
# Classes, Methods, and Properties
class AngryBird:
    # Slots optimize property access and memory usage and prevent you
    # from arbitrarily assigning new properties the instance
    __slots__ = ["_x", "_y"]
    # Constructor
    def __init__(self, x=0, y=0):
        # Doc String
        """
        Construct a new AngryBird by setting it's position to (0, 0)
        """
        ## Instance Variables
        self._x = x
        self._y = y
    # Instance Method
    def move_up_by(self, delta):
        self._y += delta
    # Getter
    @property
    def x(self):
        return self._x
    # Setter
    @x.setter
    def x(self, value):
        if value < 0:
            value = 0
        self._x = value
    @property
    def y(self):
        return self._y
    @y.setter
    def y(self, value):
        self._y = value
    # Dunder Repr... called by 'print'
    def __repr__(self):
        return f"<AngryBird ({self._x}, {self._y})>"

# JS to Python Classes cheat table
#        JS                    Python
#   constructor()         def __init__(self):
#      super()            super().__init__()
#   this.property           self.property
#    this.method            self.method()
# method(arg1, arg2){}    def method(self, arg1, ...)
# get someProperty(){}    @property
# set someProperty(){}    @someProperty.setter
# List Comprehensions are a way to transform a list from one format to another
#  - Pythonic Alternative to using map or filter
#  - Syntax of a list comprehension
#     - new_list = [value loop condition]
# Using a for loop
squares = []
for i in range(10):
    squares.append(i ** 2)
print(squares)
# value = i ** 2
# loop = for i in range(10)
squares = [i ** 2 for i in range(10)]
print(list(squares))
sentence = "the rocket came back from mars"
vowels = [character for character in sentence if character in "aeiou"]
print(vowels)
# You can also use them on dictionaries. We can use the items() method
# for the dictionary to loop through it getting the keys and values out at once
person = {"name": "Corina", "age": 32, "height": 1.4}
# This loops through and capitalizes the first letter of all keys
newPerson = {key.title(): value for key, value in person.items()}
print(list(newPerson.items()))


```
