---
title: Python Cheat Sheet
weight: 0
excerpt: lorem-ipsum
seo:
    title: python cheat sheet
    description: cheat sheet for python developers
    robots: []
    extra:
        - name: 'og:image'
          value: images/py-code.png
          keyName: property
          relativeUrl: true
        - name: 'twitter:title'
          value: python cheat sheet
          keyName: name
          relativeUrl: false
template: docs
---

## Lorem ipsum

# Python Cheat Sheet

## Python Basics

### Math Operators

From **Highest** to **Lowest** precedence:

| Operators | Operation        | Example         |
| --------- | ---------------- | --------------- |
| \*\*      | Exponent         | `2 ** 3 = 8`    |
| %         | Modulus/Remaider | `22 % 8 = 6`    |
| //        | Integer division | `22 // 8 = 2`   |
| /         | Division         | `22 / 8 = 2.75` |
| \*        | Multiplication   | `3 * 3 = 9`     |
| -         | Subtraction      | `5 - 2 = 3`     |
| +         | Addition         | `2 + 2 = 4`     |

Examples of expressions in the interactive shell:

```python
2 + 3 * 6
```

```python
(2 + 3) * 6
```

```python
2 ** 8
```

```python
23 // 7
```

```python
23 % 7
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

### Data Types

| Data Type              | Examples                                  |
| ---------------------- | ----------------------------------------- |
| Integers               | `-2, -1, 0, 1, 2, 3, 4, 5`                |
| Floating-point numbers | `-1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25` |
| Strings                | `'a', 'aa', 'aaa', 'Hello!', '11 cats'`   |

### String Concatenation and Replication

String concatenation:

```python
'Alice' 'Bob'
```

Note: Avoid `+` operator for string concatenation. Prefer string formatting.

String Replication:

```python
'Alice' * 5
```

### Variables

You can name a variable anything as long as it obeys the following three rules:

1. It can be only one word.
2. It can use only letters, numbers, and the underscore (`_`) character.
3. It can’t begin with a number.
4. Variable name starting with an underscore (`_`) are considered as "unuseful`.

Example:

```python
spam = 'Hello'
```

```python
_spam = 'Hello'
```

`_spam` should not be used again in the code.

### Comments

Inline comment:

```python
# This is a comment
```

Multiline comment:

```Python
# This is a
# multiline comment
```

Code with a comment:

```python
a = 1  # initialization
```

Please note the two spaces in front of the comment.

Function docstring:

```python
def foo():
    """
    This is a function docstring
    You can also use:
    ''' Function Docstring '''
    """
```

### The print Function

```python
print('Hello world!')
```

```python
a = 1
print('Hello world!', a)
```

### The input Function

Example Code:

```python
print('What is your name?')   # ask for their name
myName = input()
print('It is good to meet you, {}'.format(myName))
```

### The len Function

Evaluates to the integer value of the number of characters in a string:

```python
len('hello')
```

Note: test of emptiness of strings, lists, dictionary, etc, should **not** use len, but prefer direct
boolean evaluation.

```python
a = [1, 2, 3]
if a:
    print("the list is not empty!")
```

### The str, int, and float Functions

Integer to String or Float:

```python
str(29)
```

```python
print('I am {} years old.'.format(str(29)))
```

```python
str(-3.14)
```

Float to Integer:

```python
int(7.7)
```

```python
int(7.7) + 1
```

## Flow Control

### Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `<`      | Less than                |
| `>`      | Greater Than             |
| `<=`     | Less than or Equal to    |
| `>=`     | Greater than or Equal to |

These operators evaluate to True or False depending on the values you give them.

Examples:

```python
42 == 42
```

```python
40 == 42
```

```python
'hello' == 'hello'
```

```python
'hello' == 'Hello'
```

```python
'dog' != 'cat'
```

```python
42 == 42.0
```

```python
42 == '42'
```

### Boolean evaluation

Never use `==` or `!=` operator to evaluate boolean operation. Use the `is` or `is not` operators,
or use implicit boolean evaluation.

NO (even if they are valid Python):

```python
True == True
```

```python
True != False
```

YES (even if they are valid Python):

```python
True is True
```

```python
True is not False
```

These statements are equivalent:

```Python
if a is True:
   pass
if a is not False:
   pass
if a:
   pass
```

And these as well:

```Python
if a is False:
   pass
if a is not True:
   pass
if not a:
   pass
```

### Boolean Operators

There are three Boolean operators: and, or, and not.

The _and_ Operator’s _Truth_ Table:

| Expression      | Evaluates to |
| --------------- | ------------ |
| True and True   | True         |
| True and False  | False        |
| False and True  | False        |
| False and False | False        |

The _or_ Operator’s _Truth_ Table:

| Expression     | Evaluates to |
| -------------- | ------------ |
| True or True   | True         |
| True or False  | True         |
| False or True  | True         |
| False or False | False        |

The _not_ Operator’s _Truth_ Table:

| Expression | Evaluates to |
| ---------- | ------------ |
| not True   | False        |
| not False  | True         |

### Mixing Boolean and Comparison Operators

```python
(4 < 5) and (5 < 6)
```

```python
(4 < 5) and (9 < 6)
```

```python
(1 == 2) or (2 == 2)
```

You can also use multiple Boolean operators in an expression, along with the comparison operators:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

### if Statements

```python
if name == 'Alice':
    print('Hi, Alice.')
```

### else Statements

```python
name = 'Bob'

if name == 'Alice':
    print('Hi, Alice.')
else:
    print('Hello, stranger.')
```

### elif Statements

```python
name = 'Bob'
age = 5

if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
```

```python
name = 'Bob'
age = 30

if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
else:
    print('You are neither Alice nor a little kid.')
```

### while Loop Statements

```python
spam = 0

while spam < 5:
    print('Hello, world.')
    spam = spam + 1
```

### break Statements

If the execution reaches a break statement, it immediately exits the while loop’s clause:

```python
while True:
    print('Please type your name.')
    name = input()
    if name == 'your name':
        break

print('Thank you!')
```

### continue Statements

When the program execution reaches a continue statement, the program execution immediately jumps back to the start of the loop.

```python
while True:
    print('Who are you?')
    name = input()
    if name != 'Joe':
        continue
    print('Hello, Joe. What is the password? (It is a fish.)')
    password = input()
    if password == 'swordfish':
        break

print('Access granted.')
```

### for Loops and the range() Function

```python
print('My name is')
for i in range(5):
    print('Jimmy Five Times ({})'.format(str(i)))
```

The _range()_ function can also be called with three arguments. The first two arguments will be the start and stop values, and the third will be the step argument. The step is the amount that the variable is increased by after each iteration.

```python
for i in range(0, 10, 2):
   print(i)
```

You can even use a negative number for the step argument to make the for loop count down instead of up.

```python
for i in range(5, -1, -1):
    print(i)
```

### For else statement

This allows to specify a statement to execute in case of the full loop has been executed. Only
useful when a `break` condition can occur in the loop:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item of the list is equal to 3")
```

### Importing Modules

```python
import random

for i in range(5):
    print(random.randint(1, 10))
```

```python
import random, sys, os, math
```

```python
from random import *.
```

### Ending a Program with sys.exit

```python
import sys

while True:
    print('Type exit to exit.')
    response = input()
    if response == 'exit':
        sys.exit()
    print('You typed {}.'.format(response))
```

## Functions

```python
def hello(name):
    print('Hello {}'.format(name))
```

### Return Values and return Statements

When creating a function using the def statement, you can specify what the return value should be with a return statement. A return statement consists of the following:

-   The return keyword.

-   The value or expression that the function should return.

```python
import random
def getAnswer(answerNumber):
    if answerNumber == 1:
        return 'It is certain'
    elif answerNumber == 2:
        return 'It is decidedly so'
    elif answerNumber == 3:
        return 'Yes'
    elif answerNumber == 4:
        return 'Reply hazy try again'
    elif answerNumber == 5:
        return 'Ask again later'
    elif answerNumber == 6:
        return 'Concentrate and ask again'
    elif answerNumber == 7:
        return 'My reply is no'
    elif answerNumber == 8:
        return 'Outlook not so good'
    elif answerNumber == 9:
        return 'Very doubtful'

r = random.randint(1, 9)
fortune = getAnswer(r)
print(fortune)
```

### The None Value

```python
spam = print('Hello!')
spam is None
```

Note: never compare to `None` with the `==` operator. Always use `is`.

### print Keyword Arguments

```python
print('Hello', end='')
print('World')
```

```python
print('cats', 'dogs', 'mice')
```

```python
print('cats', 'dogs', 'mice', sep=',')
```

### Local and Global Scope

-   Code in the global scope cannot use any local variables.

-   However, a local scope can access global variables.

-   Code in a function’s local scope cannot use variables in any other local scope.

-   You can use the same name for different variables if they are in different scopes. That is, there can be a local variable named spam and a global variable also named spam.

### The global Statement

If you need to modify a global variable from within a function, use the global statement:

```python
def spam():
    global eggs
    eggs = 'spam'

eggs = 'global'
spam()
print(eggs)
```

There are four rules to tell whether a variable is in a local scope or global scope:

1. If a variable is being used in the global scope (that is, outside of all functions), then it is always a global variable.

1. If there is a global statement for that variable in a function, it is a global variable.

1. Otherwise, if the variable is used in an assignment statement in the function, it is a local variable.

1. But if the variable is not used in an assignment statement, it is a global variable.

## Exception Handling

### Basic exception handling

```python
def spam(divideBy):
    try:
        return 42 / divideBy
    except ZeroDivisionError as e:
        print('Error: Invalid argument: {}'.format(e))

print(spam(2))
print(spam(12))
print(spam(0))
print(spam(1))
```

### Final code in exception handling

Code inside the `finally` section is always executed, no matter if an exception has been raised or
not, and even if an exception is not caught.

```python
def spam(divideBy):
    try:
        return 42 / divideBy
    except ZeroDivisionError as e:
        print('Error: Invalid argument: {}'.format(e))
    finally:
        print("-- division finished --")

print(spam(12))
print(spam(0))
```

## Lists

```python
['cat', 'bat', 'rat', 'elephant']
```

### Getting Individual Values in a List with Indexes

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[0]
```

```python
spam[1]
```

```python
spam[2]
```

```python
spam[3]
```

### Negative Indexes

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[-1]
```

```python
spam[-3]
```

```python
'The {} is afraid of the {}.'.format(spam[-1], spam[-3])
```

### Getting Sublists with Slices

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[0:4]
```

```python
spam[1:3]
```

```python
spam[0:-1]
```

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[:2]
```

```python
spam[1:]
```

```python
spam[:]
```

### Getting a list Length with len

```python
spam = ['cat', 'dog', 'moose']
len(spam)
```

### Changing Values in a List with Indexes

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[1] = 'aardvark'
spam
```

```python
spam[2] = spam[1]
spam
```

```python
spam[-1] = 12345
spam
```

### List Concatenation and List Replication

```python
[1, 2, 3] + ['A', 'B', 'C']
```

```python
['X', 'Y', 'Z'] * 3
```

```python
spam = [1, 2, 3]
spam = spam + ['A', 'B', 'C']
spam
```

### Removing Values from Lists with del Statements

```python
spam = ['cat', 'bat', 'rat', 'elephant']
del spam[2]
spam
```

```python
del spam[2]
spam
```

### Using for Loops with Lists

```python
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']

for i, supply in enumerate(supplies):
    print('Index {} in supplies is: {}'.format(str(i), supply))
```

### Looping Through Multiple Lists with zip

```python
name = ['Pete', 'John', 'Elizabeth']
age = [6, 23, 44]

for n, a in zip(name, age):
    print('{} is {} years old'.format(n, a))
```

### The in and not in Operators

```python
'howdy' in ['hello', 'hi', 'howdy', 'heyas']
```

```python
spam = ['hello', 'hi', 'howdy', 'heyas']
False
```

```python
'howdy' not in spam
```

```python
'cat' not in spam
```

### The Multiple Assignment Trick

The multiple assignment trick is a shortcut that lets you assign multiple variables with the values in a list in one line of code. So instead of doing this:

```python
cat = ['fat', 'orange', 'loud']
size = cat[0]
color = cat[1]
disposition = cat[2]
```

You could type this line of code:

```python
cat = ['fat', 'orange', 'loud']
size, color, disposition = cat
```

The multiple assignment trick can also be used to swap the values in two variables:

```python
a, b = 'Alice', 'Bob'
a, b = b, a
print(a)
```

```python
print(b)
```

### Augmented Assignment Operators

| Operator    | Equivalent        |
| ----------- | ----------------- |
| `spam += 1` | `spam = spam + 1` |
| `spam -= 1` | `spam = spam - 1` |
| `spam *= 1` | `spam = spam * 1` |
| `spam /= 1` | `spam = spam / 1` |
| `spam %= 1` | `spam = spam % 1` |

Examples:

```python
spam = 'Hello'
spam += ' world!'
spam
```

```python
bacon = ['Zophie']
bacon *= 3
bacon
```

### Finding a Value in a List with the index Method

```python
spam = ['Zophie', 'Pooka', 'Fat-tail', 'Pooka']
spam.index('Pooka')
```

### Adding Values to Lists with append and insert

**append()**:

```python
spam = ['cat', 'dog', 'bat']
spam.append('moose')
spam
```

**insert()**:

```python
spam = ['cat', 'dog', 'bat']
spam.insert(1, 'chicken')
spam
```

### Removing Values from Lists with remove

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('bat')
spam
```

If the value appears multiple times in the list, only the first instance of the value will be removed.

### Sorting the Values in a List with sort

```python
spam = [2, 5, 3.14, 1, -7]
spam.sort()
spam
```

```python
spam = ['ants', 'cats', 'dogs', 'badgers', 'elephants']
spam.sort()
spam
```

You can also pass True for the reverse keyword argument to have sort() sort the values in reverse order:

```python
spam.sort(reverse=True)
spam
```

If you need to sort the values in regular alphabetical order, pass str. lower for the key keyword argument in the sort() method call:

```python
spam = ['a', 'z', 'A', 'Z']
spam.sort(key=str.lower)
spam
```

You can use the built-in function `sorted` to return a new list:

```python
spam = ['ants', 'cats', 'dogs', 'badgers', 'elephants']
sorted(spam)
```

## Tuple Data Type

```python
eggs = ('hello', 42, 0.5)
eggs[0]
```

```python
eggs[1:3]
```

```python
len(eggs)
```

The main way that tuples are different from lists is that tuples, like strings, are immutable.

## Converting Types with the list and tuple Functions

```python
tuple(['cat', 'dog', 5])
```

```python
list(('cat', 'dog', 5))
```

```python
list('hello')
```

## Dictionaries and Structuring Data

Example Dictionary:

```python
myCat = {'size': 'fat', 'color': 'gray', 'disposition': 'loud'}
```

### The keys, values, and items Methods

values():

```python
spam = {'color': 'red', 'age': 42}

for v in spam.values():
    print(v)
```

keys():

```python
for k in spam.keys():
    print(k)
```

items():

```python
for i in spam.items():
    print(i)
```

Using the keys(), values(), and items() methods, a for loop can iterate over the keys, values, or key-value pairs in a dictionary, respectively.

```python
spam = {'color': 'red', 'age': 42}

for k, v in spam.items():
    print('Key: {} Value: {}'.format(k, str(v)))
```

### Checking if a Key or Value Exists in a Dictionary

```python
spam = {'name': 'Zophie', 'age': 7}
'name' in spam.keys()
```

```python
'Zophie' in spam.values()
```

```python
# You can omit the call to keys() when checking for a key
'color' in spam
```

```python
'color' not in spam
```

```python
'color' in spam
```

### The get Method

```python
picnic_items = {'apples': 5, 'cups': 2}
'I am bringing {} cups.'.format(str(picnic_items.get('cups', 0)))
```

```python
'I am bringing {} eggs.'.format(str(picnic_items.get('eggs', 0)))
```

### The setdefault Method

Let's consider this code:

```python
spam = {'name': 'Pooka', 'age': 5}
if 'color' not in spam:
    spam['color'] = 'black'
```

Using `setdefault` we could make the same code more shortly:

```python
spam = {'name': 'Pooka', 'age': 5}
spam.setdefault('color', 'black')
```

```python
spam
```

```python
spam.setdefault('color', 'white')
```

```python
spam
```

### Pretty Printing

```python
import pprint

message = 'It was a bright cold day in April, and the clocks were striking thirteen.'
count = {}

for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)
```

### Merge two dictionaries

```python
# in Python 3.5+:
x = {'a': 1, 'b': 2}
y = {'b': 3, 'c': 4}
z = {**x, **y}
z
```

## sets

From the Python 3 [documentation](https://docs.python.org/3/tutorial/datastructures.html)

> A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries. Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.

### Initializing a set

There are two ways to create sets: using curly braces `{}` and the bult-in function `set()`

```python
s = {1, 2, 3}
s = set([1, 2, 3])
```

When creating an empty set, be sure to not use the curly braces `{}` or you will get an empty dictionary instead.

```python
s = {}
type(s)
```

### sets: unordered collections of unique elements

A set automatically remove all the duplicate values.

```python
s = {1, 2, 3, 2, 3, 4}
s
```

And as an unordered data type, they can't be indexed.

```python
s = {1, 2, 3}
s(0)
```

### set add and update

Using the `add()` method we can add a single element to the set.

```python
s = {1, 2, 3}
s.add(4)
s
```

And with `update()`, multiple ones .

```python
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])
s  # remember, sets automatically remove duplicates
```

### set remove and discard

Both methods will remove an element from the set, but `remove()` will raise a `key error` if the value doesn't exist.

```python
s = {1, 2, 3}
s.remove(3)
s
```

```python
s.remove(3)
```

`discard()` won't raise any errors.

```python
s = {1, 2, 3}
s.discard(3)
s
```

```python
s.discard(3)
```

### set union

`union()` or `|` will create a new set that contains all the elements from the sets provided.

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2'
```

### set intersection

`intersection` or `&` will return a set containing only the elements that are common to all of them.

```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3'
```

### set difference

`difference` or `-` will return only the elements that are in one of the sets.

```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.difference(s2)  # or 's1 - s2'
```

### set symetric_difference

`symetric_difference` or `^` will return all the elements that are not common between them.

```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2'
```

## itertools Module

The _itertools_ module is a collection of tools intented to be fast and use memory efficiently when handling iterators (like [lists](#lists) or [dictionaries](#dictionaries-and-structuring-data)).

From the official [Python 3.x documentation](https://docs.python.org/3/library/itertools.html):

> The module standardizes a core set of fast, memory efficient tools that are useful by themselves or in combination. Together, they form an “iterator algebra” making it possible to construct specialized tools succinctly and efficiently in pure Python.

The _itertools_ module comes in the standard library and must be imported.

The [operator](https://docs.python.org/3/library/operator.html) module will also be used. This module is not necessary when using itertools, but needed for some of the examples below.

```python
import itertools
import operator
```

### accumulate

Makes an iterator that returns the results of a function.

```python
itertools.accumulate(iterable[, func])
```

Example:

```python
data = [1, 2, 3, 4, 5]
result = itertools.accumulate(data, operator.mul)
for each in result:
   print(each)
```

The operator.mul takes two numbers and multiplies them:

```python
operator.mul(1, 2)
```

```python
operator.mul(2, 3)
```

```python
operator.mul(6, 4)
```

```python
operator.mul(24, 5)
```

Passing a function is optional:

```python
data = [5, 2, 6, 4, 5, 9, 1]
result = itertools.accumulate(data)

for each in result:
   print(each)
```

If no function is designated the items will be summed:

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

### combinations

Takes an iterable and a integer. This will create all the unique combination that have r members.

```python
itertools.combinations(iterable, r)
```

Example:

```python
shapes = ['circle', 'triangle', 'square',]
result = itertools.combinations(shapes, 2)

for each in result:
   print(each)
```

### combinations_with_replacement

Just like combinations(), but allows individual elements to be repeated more than once.

```python
itertools.combinations_with_replacement(iterable, r)
```

Example:

```python
shapes = ['circle', 'triangle', 'square']
result = itertools.combinations_with_replacement(shapes, 2)

for each in result:
   print(each)
```

### count

Makes an iterator that returns evenly spaced values starting with number start.

```python
itertools.count(start=0, step=1)
```

Example:

```python
for i in itertools.count(10,3):
   print(i)
   if i > 20:
       break
```

### cycle

This function cycles through an iterator endlessly.

```python
itertools.cycle(iterable)
```

Example:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
for color in itertools.cycle(colors):
   print(color)
```

When reached the end of the iterable it start over again from the beginning.

### chain

Take a series of iterables and return them as one long iterable.

```python
itertools.chain(*iterables)
```

Example:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
result = itertools.chain(colors, shapes)

for each in result:
   print(each)
```

### compress

Filters one iterable with another.

```python
itertools.compress(data, selectors)
```

Example:

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
result = itertools.compress(shapes, selections)

for each in result:
   print(each)
```

### dropwhile

Make an iterator that drops elements from the iterable as long as the predicate is true; afterwards, returns every element.

```python
itertools.dropwhile(predicate, iterable)
```

Example:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
result = itertools.dropwhile(lambda x: x<5, data)

for each in result:
   print(each)
```

### filterfalse

Makes an iterator that filters elements from iterable returning only those for which the predicate is False.

```python
itertools.filterfalse(predicate, iterable)
```

Example:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = itertools.filterfalse(lambda x: x<5, data)

for each in result:
   print(each)
```

### groupby

Simply put, this function groups things together.

```python
itertools.groupby(iterable, key=None)
```

Example:

```python
robots = [{
    'name': 'blaster',
    'faction': 'autobot'
}, {
    'name': 'galvatron',
    'faction': 'decepticon'
}, {
    'name': 'jazz',
    'faction': 'autobot'
}, {
    'name': 'metroplex',
    'faction': 'autobot'
}, {
    'name': 'megatron',
    'faction': 'decepticon'
}, {
    'name': 'starcream',
    'faction': 'decepticon'
}]

for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
   print(key)
   print(list(group))
```

### islice

This function is very much like slices. This allows you to cut out a piece of an iterable.

```python
itertools.islice(iterable, start, stop[, step])
```

Example:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
few_colors = itertools.islice(colors, 2)

for each in few_colors:
   print(each)
```

### permutations

```python
itertools.permutations(iterable, r=None)
```

Example:

```python
alpha_data = ['a', 'b', 'c']
result = itertools.permutations(alpha_data)

for each in result:
   print(each)
```

### product

Creates the cartesian products from a series of iterables.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
result = itertools.product(num_data, alpha_data)

for each in result:
    print(each)
```

### repeat

This function will repeat an object over and over again. Unless, there is a times argument.

```python
itertools.repeat(object[, times])
```

Example:

```python
for i in itertools.repeat("spam", 3):
    print(i)
```

### starmap

Makes an iterator that computes the function using arguments obtained from the iterable.

```python
itertools.starmap(function, iterable)
```

Example:

```python
data = [(2, 6), (8, 4), (7, 3)]
result = itertools.starmap(operator.mul, data)

for each in result:
   print(each)
```

### takewhile

The opposite of dropwhile(). Makes an iterator and returns elements from the iterable as long as the predicate is true.

```python
itertools.takewhile(predicate, iterable)
```

Example:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
result = itertools.takewhile(lambda x: x<5, data)

for each in result:
   print(each)
```

### tee

Return n independent iterators from a single iterable.

```python
itertools.tee(iterable, n=2)
```

Example:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)

for each in alpha_colors:
   print(each)
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)

for each in beta_colors:
   print(each)
```

### zip_longest

Makes an iterator that aggregates elements from each of the iterables. If the iterables are of uneven length, missing values are filled-in with fillvalue. Iteration continues until the longest iterable is exhausted.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

Example:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

for each in itertools.zip_longest(colors, data, fillvalue=None):
   print(each)
```

## Comprehensions

### List comprehension

```python
a = [1, 3, 5, 7, 9, 11]
[i - 1 for i in a]
```

### Set comprehension

```python
b = {"abc", "def"}
{s.upper() for s in b}
```

### Dict comprehension

```python
c = {'name': 'Pooka', 'age': 5}
{v, k for k, v in c.items()}
```

A List comprehension can be generated from a dictionary:

```python
c = {'name': 'Pooka', 'first_name': 'Oooka'}
["{}:{}".format(k.upper(), v.upper()) for k, v in c.items()]
```

## Manipulating Strings

### Escape Characters

| Escape character | Prints as            |
| ---------------- | -------------------- |
| `\'`             | Single quote         |
| `\"`             | Double quote         |
| `\t`             | Tab                  |
| `\n`             | Newline (line break) |
| `\\`             | Backslash            |

Example:

```python
print("Hello there!\nHow are you?\nI\'m doing fine.")
Hello there!
How are you?
```

### Raw Strings

A raw string completely ignores all escape characters and prints any backslash that appears in the string.

```python
print(r'That is Carol\'s cat.')
```

Note: mostly used for regular expression definition (see `re` package)

### Multiline Strings with Triple Quotes

```python
print('''Dear Alice,

Eve's cat has been arrested for catnapping, cat burglary, and extortion.

Sincerely,
Bob''')
```

To keep a nicer flow in your code, you can use the `dedent` function from the `textwrap` standard package.

```python
from textwrap import dedent

def my_function():
    print('''
        Dear Alice,

        Eve's cat has been arrested for catnapping, cat burglary, and extortion.

        Sincerely,
        Bob
        ''').strip()
```

This generates the same string than before.

### Indexing and Slicing Strings

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

```python
spam = 'Hello world!'
spam[0]
```

```python
spam[4]
```

```python
spam[-1]
```

Slicing:

```python

spam[0:5]
```

```python
spam[:5]
```

```python
spam[6:]
```

```python
spam[6:-1]
```

```python
spam[:-1]
```

```python
spam[::-1]
```

```python
spam = 'Hello world!'
fizz = spam[0:5]
fizz
```

### The in and not in Operators with Strings

```python
'Hello' in 'Hello World'
```

```python
'Hello' in 'Hello'
```

```python
'HELLO' in 'Hello World'
```

```python
'' in 'spam'
```

```python
'cats' not in 'cats and dogs'
```

### The in and not in Operators with list

```python
a = [1, 2, 3, 4]
5 in a
```

```python
2 in a
```

### The upper, lower, isupper, and islower String Methods

`upper()` and `lower()`:

```python
spam = 'Hello world!'
spam = spam.upper()
spam
```

```python
spam = spam.lower()
spam
```

isupper() and islower():

```python
spam = 'Hello world!'
spam.islower()
```

```python
spam.isupper()
```

```python
'HELLO'.isupper()
```

```python
'abc12345'.islower()
```

```python
'12345'.islower()
```

```python
'12345'.isupper()
```

### The isX String Methods

-   **isalpha()** returns True if the string consists only of letters and is not blank.
-   **isalnum()** returns True if the string consists only of lettersand numbers and is not blank.
-   **isdecimal()** returns True if the string consists only ofnumeric characters and is not blank.
-   **isspace()** returns True if the string consists only of spaces,tabs, and new-lines and is not blank.
-   **istitle()** returns True if the string consists only of wordsthat begin with an uppercase letter followed by onlylowercase letters.

### The startswith and endswith String Methods

```python
'Hello world!'.startswith('Hello')
```

```python
'Hello world!'.endswith('world!')
```

```python
'abc123'.startswith('abcdef')
```

```python
'abc123'.endswith('12')
```

```python
'Hello world!'.startswith('Hello world!')
```

```python
'Hello world!'.endswith('Hello world!')
```

### The join and split String Methods

join():

```python
', '.join(['cats', 'rats', 'bats'])
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

split():

```python
'My name is Simon'.split()
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

```python
'My name is Simon'.split('m')
```

### Justifying Text with rjust, ljust, and center

rjust() and ljust():

```python
'Hello'.rjust(10)
```

```python
'Hello'.rjust(20)
```

```python
'Hello World'.rjust(20)
```

```python
'Hello'.ljust(10)
```

An optional second argument to rjust() and ljust() will specify a fill character other than a space character. Enter the following into the interactive shell:

```python
'Hello'.rjust(20, '*')
```

```python
'Hello'.ljust(20, '-')
```

center():

```python
'Hello'.center(20)
```

```python
'Hello'.center(20, '=')
```

### Removing Whitespace with strip, rstrip, and lstrip

```python
spam = '    Hello World     '
spam.strip()
```

```python
spam.lstrip()
```

```python
spam.rstrip()
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

### Copying and Pasting Strings with the pyperclip Module

First, install `pypeerclip` with pip:

```shell
pip install pyperclip
```

```python
import pyperclip

pyperclip.copy('Hello world!')
pyperclip.paste()
```

## String Formatting

### % operator

```python
name = 'Pete'
'Hello %s' % name
```

We can use the `%x` format specifier to convert an int value to a string:

```python
num = 5
'I have %x apples' % num
```

Note: For new code, using str.format or f-strings is strongly recommended over the `%` operator.

### str.format

Python 3 introduced a new way to do string formatting that was later back-ported to Python 2.7. This makes the syntax for string formatting more regular.

```python
name = 'John'
age = 20'

"Hello I'm {}, my age is {}".format(name, age)
```

```python
"Hello I'm {0}, my age is {1}".format(name, age)
```

The official [Python 3.x documentation](https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting) recommend `str.format` over the `%` operator:

> The formatting operations described here exhibit a variety of quirks that lead to a number of common errors (such as failing to display tuples and dictionaries correctly). Using the newer formatted string literals or the str.format() interface helps avoid these errors. These alternatives also provide more powerful, flexible and extensible approaches to formatting text.

### Lazy string formatting

You would only use `%s` string formatting on functions that can do lazy parameters evaluation,
the most common being logging:

Prefer:

```python
name = "alice"
logging.debug("User name: %s", name)
```

Over:

```python
logging.debug("User name: {}".format(name))
```

Or:

```python
logging.debug("User name: " + name)
```

### Formatted String Literals or f-strings

Python 3.6+

```python
name = 'Elizabeth'
f'Hello {name}!'
```

It is even possible to do inline arithmetic with it:

```python
a = 5
b = 10
f'Five plus ten is {a + b} and not {2 * (a + b)}.'
```

### Template Strings

A simpler and less powerful mechanism, but it is recommended when handling format strings generated by users. Due to their reduced complexity template strings are a safer choice.

```python
from string import Template

name = 'Elizabeth'
t = Template('Hey $name!')
t.substitute(name=name)
```

## Regular Expressions

1. Import the regex module with `import re`.
2. Create a Regex object with the `re.compile()` function. (Remember to use a raw string.)
3. Pass the string you want to search into the Regex object’s `search()` method. This returns a `Match` object.
4. Call the Match object’s `group()` method to return a string of the actual matched text.

All the regex functions in Python are in the re module:

```python
import re
```

### Matching Regex Objects

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
mo = phone_num_regex.search('My number is 415-555-4242.')
print('Phone number found: {}'.format(mo.group()))
```

### Grouping with Parentheses

```python
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
mo = phone_num_regex.search('My number is 415-555-4242.')
mo.group(1)
```

```python
mo.group(2)
```

```python
mo.group(0)
```

```python
mo.group()
```

To retrieve all the groups at once: use the groups() method—note the plural form for the name.

```python
mo.groups()
area_code, main_number = mo.groups()
```

```python
print(area_code)
```

```python
print(main_number)
```

### Matching Multiple Groups with the Pipe

The | character is called a pipe. You can use it anywhere you want to match one of many expressions. For example, the regular expression r'Batman|Tina Fey' will match either 'Batman' or 'Tina Fey'.

```python
hero_regex = re.compile (r'Batman|Tina Fey')
mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

You can also use the pipe to match one of several patterns as part of your regex:

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')
mo.group()
```

```python
mo.group(1)
```

### Optional Matching with the Question Mark

The ? character flags the group that precedes it as an optional part of the pattern.

```python
bat_regex = re.compile(r'Bat(wo)?man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

### Matching Zero or More with the Star

The \* (called the star or asterisk) means “match zero or more”—the group that precedes the star can occur any number of times in the text.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

### Matching One or More with the Plus

While \* means “match zero or more,” the + (or plus) means “match one or more”. The group preceding a plus must appear at least once. It is not optional:

```python
bat_regex = re.compile(r'Bat(wo)+man')
mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

### Matching Specific Repetitions with Curly Brackets

If you have a group that you want to repeat a specific number of times, follow the group in your regex with a number in curly brackets. For example, the regex (Ha){3} will match the string 'HaHaHa', but it will not match 'HaHa', since the latter has only two repeats of the (Ha) group.

Instead of one number, you can specify a range by writing a minimum, a comma, and a maximum in between the curly brackets. For example, the regex (Ha){3,5} will match 'HaHaHa', 'HaHaHaHa', and 'HaHaHaHaHa'.

```python
ha_regex = re.compile(r'(Ha){3}')
mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

### Greedy and Nongreedy Matching

Python’s regular expressions are greedy by default, which means that in ambiguous situations they will match the longest string possible. The non-greedy version of the curly brackets, which matches the shortest string possible, has the closing curly bracket followed by a question mark.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')
mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

```python
nongreedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = nongreedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

### The findall Method

In addition to the search() method, Regex objects also have a findall() method. While search() will return a Match object of the first matched text in the searched string, the findall() method will return the strings of every match in the searched string.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # has no groups
phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

To summarize what the findall() method returns, remember the following:

-   When called on a regex with no groups, such as \d-\d\d\d-\d\d\d\d, the method findall() returns a list of ng matches, such as ['415-555-9999', '212-555-0000'].

-   When called on a regex that has groups, such as (\d\d\d)-d\d)-(\d\ d\d\d), the method findall() returns a list of es of strings (one string for each group), such as [('415', ', '9999'), ('212', '555', '0000')].

### Making Your Own Character Classes

There are times when you want to match a set of characters but the shorthand character classes (\d, \w, \s, and so on) are too broad. You can define your own character class using square brackets. For example, the character class [aeiouAEIOU] will match any vowel, both lowercase and uppercase.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

You can also include ranges of letters or numbers by using a hyphen. For example, the character class [a-zA-Z0-9] will match all lowercase letters, uppercase letters, and numbers.

By placing a caret character (^) just after the character class’s opening bracket, you can make a negative character class. A negative character class will match all the characters that are not in the character class. For example, enter the following into the interactive shell:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

### The Caret and Dollar Sign Characters

-   You can also use the caret symbol (^) at the start of a regex to indicate that a match must occur at the beginning of the searched text.

-   Likewise, you can put a dollar sign ($) at the end of the regex to indicate the string must end with this regex pattern.

-   And you can use the ^ and $ together to indicate that the entire string must match the regex—that is, it’s not enough for a match to be made on some subset of the string.

The r'^Hello' regular expression string matches strings that begin with 'Hello':

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

```python
begins_with_hello.search('He said hello.') is None
```

The r'\d$' regular expression string matches strings that end with a numeric character from 0 to 9:

```python
whole_string_is_num = re.compile(r'^\d+$')
whole_string_is_num.search('1234567890')
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

```python
whole_string_is_num.search('12 34567890') is None
```

### The Wildcard Character

The . (or dot) character in a regular expression is called a wildcard and will match any character except for a newline:

```python
at_regex = re.compile(r'.at')
at_regex.findall('The cat in the hat sat on the flat mat.')
```

### Matching Everything with Dot-Star

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')
mo = name_regex.search('First Name: Some Last Name: One')
mo.group(1)
```

```python
mo.group(2)
```

The dot-star uses greedy mode: It will always try to match as much text as possible. To match any and all text in a nongreedy fashion, use the dot, star, and question mark (.\*?). The question mark tells Python to match in a nongreedy way:

```python
nongreedy_regex = re.compile(r'<.*?>')
mo = nongreedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

### Matching Newlines with the Dot Character

The dot-star will match everything except a newline. By passing re.DOTALL as the second argument to re.compile(), you can make the dot character match all characters, including the newline character:

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

### Review of Regex Symbols

| Symbol                   | Matches                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `?`                      | zero or one of the preceding group.                          |
| `*`                      | zero or more of the preceding group.                         |
| `+`                      | one or more of the preceding group.                          |
| `{n}`                    | exactly n of the preceding group.                            |
| `{n,}`                   | n or more of the preceding group.                            |
| `{,m}`                   | 0 to m of the preceding group.                               |
| `{n,m}`                  | at least n and at most m of the preceding p.                 |
| `{n,m}?` or `*?` or `+?` | performs a nongreedy match of the preceding p.               |
| `^spam`                  | means the string must begin with spam.                       |
| `spam$`                  | means the string must end with spam.                         |
| `.`                      | any character, except newline characters.                    |
| `\d`, `\w`, and `\s`     | a digit, word, or space character, resectively.              |
| `\D`, `\W`, and `\S`     | anything except a digit, word, or space acter, respectively. |
| `[abc]`                  | any character between the brackets (such as a, b, ).         |
| `[^abc]`                 | any character that isn’t between the brackets.               |

### Case-Insensitive Matching

To make your regex case-insensitive, you can pass re.IGNORECASE or re.I as a second argument to re.compile():

```python
robocop = re.compile(r'robocop', re.I)
robocop.search('Robocop is part man, part machine, all cop.').group()
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

### Substituting Strings with the sub() Method

The sub() method for Regex objects is passed two arguments:

1. The first argument is a string to replace any matches.
1. The second is the string for the regular expression.

The sub() method returns a string with the substitutions applied:

```python
names_regex = re.compile(r'Agent \w+')
names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

Another example:

```python
agent_names_regex = re.compile(r'Agent (\w)\w*')
agent_names_regex.sub(r'\1****', 'Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double agent.')
```

### Managing Complex Regexes

To tell the re.compile() function to ignore whitespace and comments inside the regular expression string, “verbose mode” can be enabled by passing the variable re.VERBOSE as the second argument to re.compile().

Now instead of a hard-to-read regular expression like this:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

you can spread the regular expression over multiple lines with comments like this:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # area code
    (\s|-|\.)?                    # separator
    \d{3}                         # first 3 digits
    (\s|-|\.)                     # separator
    \d{4}                         # last 4 digits
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)
```

## Handling File and Directory Paths

There are two main modules in Python that deals with path manipulation.
One is the `os.path` module and the other is the `pathlib` module.
The `pathlib` module was added in Python 3.4, offering an object-oriented way
to handle file system paths.

### Backslash on Windows and Forward Slash on OS X and Linux

On Windows, paths are written using backslashes (\) as the separator between
folder names. On Unix based operating system such as macOS, Linux, and BSDs,
the forward slash (/) is used as the path separator. Joining paths can be
a headache if your code needs to work on different platforms.

Fortunately, Python provides easy ways to handle this. We will showcase
how to deal with this with both `os.path.join` and `pathlib.Path.joinpath`

Using `os.path.join` on Windows:

```python
import os

os.path.join('usr', 'bin', 'spam')
```

And using `pathlib` on \*nix:

```python
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))
```

`pathlib` also provides a shortcut to joinpath using the `/` operator:

```python
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')
```

Notice the path separator is different between Windows and Unix based operating
system, that's why you want to use one of the above methods instead of
adding strings together to join paths together.

Joining paths is helpful if you need to create different file paths under
the same directory.

Using `os.path.join` on Windows:

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

for filename in my_files:
    print(os.path.join('C:\\Users\\asweigart', filename))
```

Using `pathlib` on \*nix:

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()
for filename in my_files:
    print(home / filename)
```

### The Current Working Directory

Using `os` on Windows:

```python
import os

os.getcwd()
```

```python
os.chdir('C:\\Windows\\System32')
os.getcwd()
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
from os import chdir

print(Path.cwd())
```

```python
chdir('/usr/lib/python3.6')
print(Path.cwd())
```

### Creating New Folders

Using `os` on Windows:

```python
import os

os.makedirs('C:\\delicious\\walnut\\waffles')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Oh no, we got a nasty error! The reason is that the 'delicious' directory does
not exist, so we cannot make the 'walnut' and the 'waffles' directories under
it. To fix this, do:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

And all is good :)

### Absolute vs. Relative Paths

There are two ways to specify a file path.

-   An absolute path, which always begins with the root folder
-   A relative path, which is relative to the program’s current working directory

There are also the dot (.) and dot-dot (..) folders. These are not real folders but special names that can be used in a path. A single period (“dot”) for a folder name is shorthand for “this directory.” Two periods (“dot-dot”) means “the parent folder.”

### Handling Absolute and Relative Paths

To see if a path is an absolute path:

Using `os.path` on \*nix:

```python
import os

os.path.isabs('/')
```

```python
os.path.isabs('..')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
Path('/').is_absolute()
```

```python
Path('..').is_absolute()
```

You can extract an absolute path with both `os.path` and `pathlib`

Using `os.path` on \*nix:

```python
import os

os.getcwd()
```

```python
os.path.abspath('..')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

print(Path.cwd())
```

```python
print(Path('..').resolve())
```

You can get a relative path from a starting path to another path.

Using `os.path` on \*nix:

```python
import os

os.path.relpath('/etc/passwd', '/')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

print(Path('/etc/passwd').relative_to('/'))
```

### Checking Path Validity

Checking if a file/directory exists:

Using `os.path` on \*nix:

```python
import os
os.path.exists('.')
```

```python
os.path.exists('setup.py')
```

```python
os.path.exists('/etc')
```

```python
os.path.exists('nonexistentfile')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
Path('.').exists()
```

```python
Path('setup.py').exists()
```

```python
Path('/etc').exists()
```

```python
Path('nonexistentfile').exists()
```

Checking if a path is a file:

Using `os.path` on \*nix:

```python
import os
os.path.isfile('setup.py')
```

```python
os.path.isfile('/home')
```

```python
os.path.isfile('nonexistentfile')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

Path('setup.py').is_file()
```

```python
Path('/home').is_file()
```

```python
Path('nonexistentfile').is_file()
```

Checking if a path is a directory:

Using `os.path` on \*nix:

```python
import os
os.path.isdir('/')
```

```python
os.path.isdir('setup.py')
```

```python
os.path.isdir('/spam')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

Path('/').is_dir()
```

```python
Path('setup.py').is_dir()
```

```python
Path('/spam').is_dir()
```

### Finding File Sizes and Folder Contents

Getting a file's size in bytes:

Using `os.path` on Windows:

```python
import os
os.path.getsize('C:\\Windows\\System32\\calc.exe')
```

Using `pathlib` on \*nix:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat contains some other information about the file as well
```

```python
print(stat.st_size) # size in bytes
```

Listing directory contents using `os.listdir` on Windows:

```python
import os
os.listdir('C:\\Windows\\System32')
```

Listing directory contents using `pathlib` on \*nix:

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

To find the total size of all the files in this directory:

**WARNING**: Directories themselves also have a size! So you might want to
check for whether a path is a file or directory using the methods in the methods discussed in the above section!

Using `os.path.getsize()` and `os.listdir()` together on Windows:

```python
import os

total_size = 0

for filename in os.listdir('C:\\Windows\\System32'):
      total_size = total_size + os.path.getsize(os.path.join('C:\\Windows\\System32', filename))

print(total_size)
```

Using `pathlib` on \*nix:

```python
from pathlib import Path
total_size = 0

for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

### Copying Files and Folders

The shutil module provides functions for copying files, as well as entire folders.

```python
import shutil, os

os.chdir('C:\\')

shutil.copy('C:\\spam.txt', 'C:\\delicious')
```

```python
shutil.copy('eggs.txt', 'C:\\delicious\\eggs2.txt')
   'C:\\delicious\\eggs2.txt'
```

While shutil.copy() will copy a single file, shutil.copytree() will copy an entire folder and every folder and file contained in it:

```python
import shutil, os

os.chdir('C:\\')
shutil.copytree('C:\\bacon', 'C:\\bacon_backup')
```

### Moving and Renaming Files and Folders

```python
import shutil

shutil.move('C:\\bacon.txt', 'C:\\eggs')
```

The destination path can also specify a filename. In the following example, the source file is moved and renamed:

```python
shutil.move('C:\\bacon.txt', 'C:\\eggs\\new_bacon.txt')
```

If there is no eggs folder, then move() will rename bacon.txt to a file named eggs.

```python
shutil.move('C:\\bacon.txt', 'C:\\eggs')
```

### Permanently Deleting Files and Folders

-   Calling os.unlink(path) or Path.unlink() will delete the file at path.

-   Calling os.rmdir(path) or Path.rmdir() will delete the folder at path. This folder must be empty of any files or folders.

-   Calling shutil.rmtree(path) will remove the folder at path, and all files and folders it contains will also be deleted.

### Safe Deletes with the send2trash Module

You can install this module by running pip install send2trash from a Terminal window.

```python
import send2trash

with open('bacon.txt', 'a') as bacon_file: # creates the file
    bacon_file.write('Bacon is not a vegetable.')

send2trash.send2trash('bacon.txt')
```

### Walking a Directory Tree

```python
import os

for folder_name, subfolders, filenames in os.walk('C:\\delicious'):
    print('The current folder is {}'.format(folder_name))

    for subfolder in subfolders:
        print('SUBFOLDER OF {}: {}'.format(folder_name, subfolder))
    for filename in filenames:
        print('FILE INSIDE {}: {}'.format(folder_name, filename))

    print('')
```

`pathlib` provides a lot more functionality than the ones listed above,
like getting file name, getting file extension, reading/writing a file without
manually opening it, etc. Check out the
[official documentation](https://docs.python.org/3/library/pathlib.html)
if you want to know more!

## Reading and Writing Files

### The File Reading/Writing Process

To read/write to a file in Python, you will want to use the `with`
statement, which will close the file for you after you are done.

### Opening and reading files with the open function

```python
with open('C:\\Users\\your_home_folder\\hello.txt') as hello_file:
    hello_content = hello_file.read()

hello_content
```

Alternatively, you can use the _readlines()_ method to get a list of string values from the file, one string for each line of text:

```python
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()
```

You can also iterate through the file line by line:

```python
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file: # note the new line character will be included in the line
        print(line, end='')
```

### Writing to Files

```python
with open('bacon.txt', 'w') as bacon_file:
    bacon_file.write('Hello world!\n')
```

```python
with open('bacon.txt', 'a') as bacon_file:
    bacon_file.write('Bacon is not a vegetable.')
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

### Saving Variables with the shelve Module

To save variables:

```python
import shelve

cats = ['Zophie', 'Pooka', 'Simon']
with shelve.open('mydata') as shelf_file:
    shelf_file['cats'] = cats
```

To open and read variables:

```python
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    print(shelf_file['cats'])
```

Just like dictionaries, shelf values have keys() and values() methods that will return list-like values of the keys and values in the shelf. Since these methods return list-like values instead of true lists, you should pass them to the list() function to get them in list form.

```python
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

### Saving Variables with pprint.pformat

```python
import pprint

cats = [{'name': 'Zophie', 'desc': 'chubby'}, {'name': 'Pooka', 'desc': 'fluffy'}]
pprint.pformat(cats)
```

```python
with open('myCats.py', 'w') as file_obj:
    file_obj.write('cats = {}\n'.format(pprint.pformat(cats)))
```

### Reading ZIP Files

```python
import zipfile, os

os.chdir('C:\\')    # move to the folder with example.zip
with zipfile.ZipFile('example.zip') as example_zip:
    print(example_zip.namelist())
    spam_info = example_zip.getinfo('spam.txt')
    print(spam_info.file_size)
    print(spam_info.compress_size)
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

### Extracting from ZIP Files

The extractall() method for ZipFile objects extracts all the files and folders from a ZIP file into the current working directory.

```python
import zipfile, os

os.chdir('C:\\')    # move to the folder with example.zip

with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

The extract() method for ZipFile objects will extract a single file from the ZIP file. Continue the interactive shell example:

```python
with zipfile.ZipFile('example.zip') as example_zip:
    print(example_zip.extract('spam.txt'))
    print(example_zip.extract('spam.txt', 'C:\\some\\new\\folders'))
```

### Creating and Adding to ZIP Files

```python
import zipfile

with zipfile.ZipFile('new.zip', 'w') as new_zip:
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

This code will create a new ZIP file named new.zip that has the compressed contents of spam.txt.

## JSON, YAML and configuration files

### JSON

Open a JSON file with:

```python
import json
with open("filename.json", "r") as f:
    content = json.loads(f.read())
```

Write a JSON file with:

```python
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:
    f.write(json.dumps(content, indent=2))
```

### YAML

Compared to JSON, YAML allows a much better humain maintainance and gives ability to add comments.
It is a convinient choice for configuration files where human will have to edit.

There are two main librairies allowing to access to YAML files:

-   [PyYaml](https://pypi.python.org/pypi/PyYAML)
-   [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Install them using `pip install` in your virtual environment.

The first one it easier to use but the second one, Ruamel, implements much better the YAML
specification, and allow for example to modify a YAML content without altering comments.

Open a YAML file with:

```python
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()
    yaml.load(f)
```

### Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) is a very handy package allowing to abstract completly the underlying configuration file format. It allows to load a Python dictionary from JSON, YAML, TOML, and so on.

Install it with:

```bash
pip install anyconfig
```

Usage:

```python
import anyconfig

conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")
```

## Debugging

### Raising Exceptions

Exceptions are raised with a raise statement. In code, a raise statement consists of the following:

-   The raise keyword
-   A call to the Exception() function
-   A string with a helpful error message passed to the Exception() function

```python
raise Exception('This is the error message.')
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

Often it’s the code that calls the function, not the function itself, that knows how to handle an expection. So you will commonly see a raise statement inside a function and the try and except statements in the code calling the function.

```python
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('Symbol must be a single character string.')
    if width <= 2:
      raise Exception('Width must be greater than 2.')
    if height <= 2:
      raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:
        print('An exception happened: ' + str(err))
```

### Getting the Traceback as a String

The traceback is displayed by Python whenever a raised exception goes unhandled. But can also obtain it as a string by calling traceback.format_exc(). This function is useful if you want the information from an exception’s traceback but also want an except statement to gracefully handle the exception. You will need to import Python’s traceback module before calling this function.

```python
import traceback

try:
     raise Exception('This is the error message.')
except:
     with open('errorInfo.txt', 'w') as error_file:
         error_file.write(traceback.format_exc())
     print('The traceback info was written to errorInfo.txt.')
```

The 116 is the return value from the write() method, since 116 characters were written to the file. The traceback text was written to errorInfo.txt.

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

### Assertions

An assertion is a sanity check to make sure your code isn’t doing something obviously wrong. These sanity checks are performed by assert statements. If the sanity check fails, then an AssertionError exception is raised. In code, an assert statement consists of the following:

-   The assert keyword
-   A condition (that is, an expression that evaluates to True or False)
-   A comma
-   A string to display when the condition is False

```python
pod_bay_door_status = 'open'

assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'

pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'

assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
```

In plain English, an assert statement says, “I assert that this condition holds true, and if not, there is a bug somewhere in the program.” Unlike exceptions, your code should not handle assert statements with try and except; if an assert fails, your program should crash. By failing fast like this, you shorten the time between the original cause of the bug and when you first notice the bug. This will reduce the amount of code you will have to check before finding the code that’s causing the bug.

Disabling Assertions

Assertions can be disabled by passing the -O option when running Python.

### Logging

To enable the logging module to display log messages on your screen as your program runs, copy the following to the top of your program (but under the #! python shebang line):

```python
import logging

logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

Say you wrote a function to calculate the factorial of a number. In mathematics, factorial 4 is 1 × 2 × 3 × 4, or 24. Factorial 7 is 1 × 2 × 3 × 4 × 5 × 6 × 7, or 5,040. Open a new file editor window and enter the following code. It has a bug in it, but you will also enter several log messages to help yourself figure out what is going wrong. Save the program as factorialLog.py.

```python
import logging

logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')

logging.debug('Start of program')

def factorial(n):

    logging.debug('Start of factorial(%s)' % (n))
    total = 1

    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))

    logging.debug('End of factorial(%s)' % (n))

    return total

print(factorial(5))
logging.debug('End of program')
```

### Logging Levels

Logging levels provide a way to categorize your log messages by importance. There are five logging levels, described in Table 10-1 from least to most important. Messages can be logged at each level using a different logging function.

| Level      | Logging Function     | Description                                                                                                                    |
| ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `DEBUG`    | `logging.debug()`    | The lowest level. Used for small details. Usually you care about these messages only when diagnosing problems.                 |
| `INFO`     | `logging.info()`     | Used to record information on general events in your program or confirm that things are working at their point in the program. |
| `WARNING`  | `logging.warning()`  | Used to indicate a potential problem that doesn’t prevent the program from working but might do so in the future.              |
| `ERROR`    | `logging.error()`    | Used to record an error that caused the program to fail to do something.                                                       |
| `CRITICAL` | `logging.critical()` | The highest level. Used to indicate a fatal error that has caused or is about to cause the program to stop running entirely.   |

### Disabling Logging

After you’ve debugged your program, you probably don’t want all these log messages cluttering the screen. The logging.disable() function disables these so that you don’t have to go into your program and remove all the logging calls by hand.

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('Critical error! Critical error!')
logging.disable(logging.CRITICAL)
logging.critical('Critical error! Critical error!')
logging.error('Error! Error!')
```

### Logging to a File

Instead of displaying the log messages to the screen, you can write them to a text file. The logging.basicConfig() function takes a filename keyword argument, like so:

```python
import logging

logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## Lambda Functions

This function:

```python
def add(x, y):
        return x + y

add(5, 3)
```

Is equivalent to the _lambda_ function:

```python
add = lambda x, y: x + y
add(5, 3)
```

It's not even need to bind it to a name like add before:

```python
(lambda x, y: x + y)(5, 3)
```

Like regular nested functions, lambdas also work as lexical closures:

```python
def make_adder(n):
        return lambda x: x + n

plus_3 = make_adder(3)
plus_5(4)
```

Note: lambda can only evaluate an expression, like a single line of code.

## Ternary Conditional Operator

Many programming languages have a ternary operator, which define a conditional expression. The most common usage is to make a terse simple conditional assignment statement. In other words, it offers one-line code to evaluate the first expression if the condition is true, otherwise it evaluates the second expression.

    <expression1> if <condition> else <expression2>

Example:

```python
age = 15

print('kid' if age < 18 else 'adult')
```

Ternary operators can be changed:

```python
age = 15
print('kid' if age < 13 else 'teenager' if age < 18 else 'adult')
```

The code above is equivalent to:

```python
if age < 18:
    if age < 12:
        print('kid')
    else:
        print('teenager')
else:
    print('adult')
```

## args and kwargs

The names `args and kwargs` are arbitrary - the important thing are the `*` and `**` operators. They can mean:

1. In a function declaration, `*` means “pack all remaining positional arguments into a tuple named `<name>`”, while `**` is the same for keyword arguments (except it uses a dictionary, not a tuple).

2. In a function call, `*` means “unpack tuple or list named `<name>` to positional arguments at this position”, while `**` is the same for keyword arguments.

For example you can make a function that you can use to call any other function, no matter what parameters it has:

```python
def forward(f, *args, **kwargs):
    return f(*args, **kwargs)
```

Inside forward, args is a tuple (of all positional arguments except the first one, because we specified it - the f), kwargs is a dict. Then we call f and unpack them so they become normal arguments to f.

You use `*args` when you have an indefinite amount of positional arguments.

```python
def fruits(*args):
   for fruit in args:
      print(fruit)

fruits("apples", "bananas", "grapes")
```

Similarly, you use `**kwargs` when you have an indefinite number of keyword arguments.

```python
def fruit(**kwargs):
   for key, value in kwargs.items():
       print("{0}: {1}".format(key, value))

fruit(name = "apple", color = "red")
```

```python
def show(arg1, arg2, *args, kwarg1=None, kwarg2=None, **kwargs):
  print(arg1)
  print(arg2)
  print(args)
  print(kwarg1)
  print(kwarg2)
  print(kwargs)

data1 = [1,2,3]
data2 = [4,5,6]
data3 = {'a':7,'b':8,'c':9}

show(*data1,*data2, kwarg1="python",kwarg2="cheatsheet",**data3)
```

```python
show(*data1, *data2, **data3)
```

If you do not specify \*\* for kwargs

```python
show(*data1, *data2, *data3)
```

### Thinks to Remember(args)

1. Functions can accept a variable number of positional arguments by using `*args` in the def statement.
2. You can use the items from a sequence as the positional arguments for a function with the `*` operator.
3. Using the `*` operator with a generator may cause your program to run out of memory and crash.
4. Adding new positional parameters to functions that accept `*args` can introduce hard-to-find bugs.

### Thinks to remember(kwargs)

1. Function arguments can be specified by position or by keyword.
2. Keywords make it clear what the purpose of each argument is when it would be confusing with only positional arguments.
3. Keyword arguments with default values make it easy to add new behaviors to a function, especially when the function has existing callers.
4. Optional keyword arguments should always be passed by keyword instead of by position.

## Context Manager

While Python's context managers are widely used, few understand the purpose behind their use. These statements, commonly used with reading and writing files, assist the application in conserving system memory and improve resource management by ensuring specific resources are only in use for certain processes.

### with statement

A context manager is an object that is notified when a context (a block of code) starts and ends. You commonly use one with the with statement. It takes care of the notifying.

For example, file objects are context managers. When a context ends, the file object is closed automatically:

```python
with open(filename) as f:
    file_contents = f.read()

# the open_file object has automatically been closed.
```

Anything that ends execution of the block causes the context manager's exit method to be called. This includes exceptions, and can be useful when an error causes you to prematurely exit from an open file or connection. Exiting a script without properly closing files/connections is a bad idea, that may cause data loss or other problems. By using a context manager you can ensure that precautions are always taken to prevent damage or loss in this way.

### Writing your own contextmanager using generator syntax

It is also possible to write a context manager using generator syntax thanks to the `contextlib.contextmanager` decorator:

```python
import contextlib

@contextlib.contextmanager
def context_manager(num):
    print('Enter')
    yield num + 1
    print('Exit')
with context_manager(2) as cm:
    # the following instructions are run when the 'yield' point of the context
    # manager is reached.
    # 'cm' will have the value that was yielded
    print('Right in the middle with cm = {}'.format(cm))
```

## `__main__` Top-level script environment

`__main__` is the name of the scope in which top-level code executes.
A module’s **name** is set equal to `__main__` when read from standard input, a script, or from an interactive prompt.

A module can discover whether or not it is running in the main scope by checking its own `__name__`, which allows a common idiom for conditionally executing code in a module when it is run as a script or with `python -m` but not when it is imported:

```python
if __name__ == "__main__":
    # execute only if run as a script
    main()
```

For a package, the same effect can be achieved by including a **main**.py module, the contents of which will be executed when the module is run with -m.

For example we are developing script which is designed to be used as module, we should do:

```python
# Python program to execute function directly
def add(a, b):
    return a+b

add(10, 20) # we can test it by calling the function save it as calculate.py
```

```python
# Now if we want to use that module by importing we have to comment out our call,
# Instead we can write like this in calculate.py
if __name__ == "__main__":
    add(3, 5)
```

```python
import calculate

calculate.add(3, 5)
```

### Advantages

1. Every Python module has it’s `__name__` defined and if this is `__main__`, it implies that the module is being run standalone by the user and we can do corresponding appropriate actions.
2. If you import this script as a module in another script, the **name** is set to the name of the script/module.
3. Python files can act as either reusable modules, or as standalone programs.
4. if `__name__ == “main”:` is used to execute some code only if the file was run directly, and not imported.

## setup.py

The setup script is the centre of all activity in building, distributing, and installing modules using the Distutils. The main purpose of the setup script is to describe your module distribution to the Distutils, so that the various commands that operate on your modules do the right thing.

The `setup.py` file is at the heart of a Python project. It describes all of the metadata about your project. There a quite a few fields you can add to a project to give it a rich set of metadata describing the project. However, there are only three required fields: name, version, and packages. The name field must be unique if you wish to publish your package on the Python Package Index (PyPI). The version field keeps track of different releases of the project. The packages field describes where you’ve put the Python source code within your project.

This allows you to easily install Python packages. Often it's enough to write:

```bash
python setup.py install
```

and module will install itself.

Our initial setup.py will also include information about the license and will re-use the README.txt file for the long_description field. This will look like:

```python
from distutils.core import setup
setup(
   name='pythonCheatsheet',
   version='0.1',
   packages=['pipenv',],
   license='MIT',
   long_description=open('README.txt').read(),
)
```

Find more information visit [http://docs.python.org/install/index.html](http://docs.python.org/install/index.html).

## Dataclasses

`Dataclasses` are python classes but are suited for storing data objects.
This module provides a decorator and functions for automatically adding generated special methods such as `__init__()` and `__repr__()` to user-defined classes.

### Features

1. They store data and represent a certain data type. Ex: A number. For people familiar with ORMs, a model instance is a data object. It represents a specific kind of entity. It holds attributes that define or represent the entity.

2. They can be compared to other objects of the same type. Ex: A number can be greater than, less than, or equal to another number.

Python 3.7 provides a decorator dataclass that is used to convert a class into a dataclass.

python 2.7

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

with dataclass

```python
from dataclasses import dataclass

@dataclass
class Number:
    val: int

obj = Number(2)
obj.val
```

### Default values

It is easy to add default values to the fields of your data class.

```python
from dataclasses import dataclass

@dataclass
class Product:
    name: str
    count: int = 0
    price: float = 0.0

obj = Product("Python")
obj.name
```

```python
obj.count
```

```python
obj.price
```

### Type hints

It is mandatory to define the data type in dataclass. However, If you don't want specify the datatype then, use `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

---

---

---

---

# PART 2:

# Single line comments start with a number symbol.

""" Multiline strings can be written
using three "s, and are often used
as documentation.
"""

####################################################

## 1. Primitive Datatypes and Operators

####################################################

# You have numbers

3 # => 3

# Math is what you would expect

1 + 1 # => 2
8 - 1 # => 7
10 \* 2 # => 20
35 / 5 # => 7.0

# Integer division rounds down for both positive and negative numbers.

5 // 3 # => 1
-5 // 3 # => -2
5.0 // 3.0 # => 1.0 # works on floats too
-5.0 // 3.0 # => -2.0

# The result of division is always a float

10.0 / 3 # => 3.3333333333333335

# Modulo operation

7 % 3 # => 1

# Exponentiation (x\*\*y, x to the yth power)

2\*\*3 # => 8

# Enforce precedence with parentheses

(1 + 3) \* 2 # => 8

# Boolean values are primitives (Note: the capitalization)

True
False

# negate with not

not True # => False
not False # => True

# Boolean Operators

# Note "and" and "or" are case-sensitive

True and False # => False
False or True # => True

# True and False are actually 1 and 0 but with different keywords

True + True # => 2
True \* 8 # => 8
False - 5 # => -5

# Comparison operators look at the numerical value of True and False

0 == False # => True
1 == True # => True
2 == True # => False
-5 != False # => True

# Using boolean logical operators on ints casts them to booleans for evaluation, but their non-cast value is returned

# Don't mix up with bool(ints) and bitwise and/or (&,|)

bool(0) # => False
bool(4) # => True
bool(-6) # => True
0 and 2 # => 0
-5 or 0 # => -5

# Equality is ==

1 == 1 # => True
2 == 1 # => False

# Inequality is !=

1 != 1 # => False
2 != 1 # => True

# More comparisons

1 < 10 # => True
1 > 10 # => False
2 <= 2 # => True
2 >= 2 # => True

# Seeing whether a value is in a range

1 < 2 and 2 < 3 # => True
2 < 3 and 3 < 2 # => False

# Chaining makes this look nicer

1 < 2 < 3 # => True
2 < 3 < 2 # => False

# (is vs. ==) is checks if two variables refer to the same object, but == checks

# if the objects pointed to have the same values.

a = [1, 2, 3, 4] # Point a at a new list, [1, 2, 3, 4]
b = a # Point b at what a is pointing to
b is a # => True, a and b refer to the same object
b == a # => True, a's and b's objects are equal
b = [1, 2, 3, 4] # Point b at a new list, [1, 2, 3, 4]
b is a # => False, a and b do not refer to the same object
b == a # => True, a's and b's objects are equal

# Strings are created with " or '

"This is a string."
'This is also a string.'

# Strings can be added too! But try not to do this.

"Hello " + "world!" # => "Hello world!"

# String literals (but not variables) can be concatenated without using '+'

"Hello " "world!" # => "Hello world!"

# A string can be treated like a list of characters

"This is a string"[0] # => 'T'

# You can find the length of a string

len("This is a string") # => 16

# .format can be used to format strings, like this:

"{} can be {}".format("Strings", "interpolated") # => "Strings can be interpolated"

# You can repeat the formatting arguments to save some typing.

"{0} be nimble, {0} be quick, {0} jump over the {1}".format("Jack", "candle stick")

# => "Jack be nimble, Jack be quick, Jack jump over the candle stick"

# You can use keywords if you don't want to count.

"{name} wants to eat {food}".format(name="Bob", food="lasagna") # => "Bob wants to eat lasagna"

# If your Python 3 code also needs to run on Python 2.5 and below, you can also

# still use the old style of formatting:

"%s can be %s the %s way" % ("Strings", "interpolated", "old") # => "Strings can be interpolated the old way"

# You can also format using f-strings or formatted string literals (in Python 3.6+)

name = "Reiko"
f"She said her name is {name}." # => "She said her name is Reiko"

# You can basically put any Python statement inside the braces and it will be output in the string.

f"{name} is {len(name)} characters long." # => "Reiko is 5 characters long."

# None is an object

None # => None

# Don't use the equality "==" symbol to compare objects to None

# Use "is" instead. This checks for equality of object identity.

"etc" is None # => False
None is None # => True

# None, 0, and empty strings/lists/dicts/tuples all evaluate to False.

# All other values are True

bool(0) # => False
bool("") # => False
bool([]) # => False
bool({}) # => False
bool(()) # => False

####################################################

## 2. Variables and Collections

####################################################

# Python has a print function

print("I'm Python. Nice to meet you!") # => I'm Python. Nice to meet you!

# By default the print function also prints out a newline at the end.

# Use the optional argument end to change the end string.

print("Hello, World", end="!") # => Hello, World!

# Simple way to get input data from console

input_string_var = input("Enter some data: ") # Returns the data as a string

# Note: In earlier versions of Python, input() method was named as raw_input()

# There are no declarations, only assignments.

# Convention is to use lower_case_with_underscores

some_var = 5
some_var # => 5

# Accessing a previously unassigned variable is an exception.

# See Control Flow to learn more about exception handling.

some_unknown_var # Raises a NameError

# if can be used as an expression

# Equivalent of C's '?:' ternary operator

"yahoo!" if 3 > 2 else 2 # => "yahoo!"

# Lists store sequences

li = []

# You can start with a prefilled list

other_li = [4, 5, 6]

# Add stuff to the end of a list with append

li.append(1) # li is now [1]
li.append(2) # li is now [1, 2]
li.append(4) # li is now [1, 2, 4]
li.append(3) # li is now [1, 2, 4, 3]

# Remove from the end with pop

li.pop() # => 3 and li is now [1, 2, 4]

# Let's put it back

li.append(3) # li is now [1, 2, 4, 3] again.

# Access a list like you would any array

li[0] # => 1

# Look at the last element

li[-1] # => 3

# Looking out of bounds is an IndexError

li[4] # Raises an IndexError

# You can look at ranges with slice syntax.

# The start index is included, the end index is not

# (It's a closed/open range for you mathy types.)

li[1:3] # Return list from index 1 to 3 => [2, 4]
li[2:] # Return list starting from index 2 => [4, 3]
li[:3] # Return list from beginning until index 3 => [1, 2, 4]
li[::2] # Return list selecting every second entry => [1, 4]
li[::-1] # Return list in reverse order => [3, 4, 2, 1]

# Use any combination of these to make advanced slices

# li[start:end:step]

# Make a one layer deep copy using slices

li2 = li[:] # => li2 = [1, 2, 4, 3] but (li2 is li) will result in false.

# Remove arbitrary elements from a list with "del"

del li[2] # li is now [1, 2, 3]

# Remove first occurrence of a value

li.remove(2) # li is now [1, 3]
li.remove(2) # Raises a ValueError as 2 is not in the list

# Insert an element at a specific index

li.insert(1, 2) # li is now [1, 2, 3] again

# Get the index of the first item found matching the argument

li.index(2) # => 1
li.index(4) # Raises a ValueError as 4 is not in the list

# You can add lists

# Note: values for li and for other_li are not modified.

li + other_li # => [1, 2, 3, 4, 5, 6]

# Concatenate lists with "extend()"

li.extend(other_li) # Now li is [1, 2, 3, 4, 5, 6]

# Check for existence in a list with "in"

1 in li # => True

# Examine the length with "len()"

len(li) # => 6

# Tuples are like lists but are immutable.

tup = (1, 2, 3)
tup[0] # => 1
tup[0] = 3 # Raises a TypeError

# Note that a tuple of length one has to have a comma after the last element but

# tuples of other lengths, even zero, do not.

type((1)) # => <class 'int'>
type((1,)) # => <class 'tuple'>
type(()) # => <class 'tuple'>

# You can do most of the list operations on tuples too

len(tup) # => 3
tup + (4, 5, 6) # => (1, 2, 3, 4, 5, 6)
tup[:2] # => (1, 2)
2 in tup # => True

# You can unpack tuples (or lists) into variables

a, b, c = (1, 2, 3) # a is now 1, b is now 2 and c is now 3

# You can also do extended unpacking

a, \*b, c = (1, 2, 3, 4) # a is now 1, b is now [2, 3] and c is now 4

# Tuples are created by default if you leave out the parentheses

d, e, f = 4, 5, 6 # tuple 4, 5, 6 is unpacked into variables d, e and f

# respectively such that d = 4, e = 5 and f = 6

# Now look how easy it is to swap two values

e, d = d, e # d is now 5 and e is now 4

# Dictionaries store mappings from keys to values

empty_dict = {}

# Here is a prefilled dictionary

filled_dict = {"one": 1, "two": 2, "three": 3}

# Note keys for dictionaries have to be immutable types. This is to ensure that

# the key can be converted to a constant hash value for quick look-ups.

# Immutable types include ints, floats, strings, tuples.

invalid_dict = {[1,2,3]: "123"} # => Raises a TypeError: unhashable type: 'list'
valid_dict = {(1,2,3):[1,2,3]} # Values can be of any type, however.

# Look up values with []

filled_dict["one"] # => 1

# Get all keys as an iterable with "keys()". We need to wrap the call in list()

# to turn it into a list. We'll talk about those later. Note - for Python

# versions <3.7, dictionary key ordering is not guaranteed. Your results might

# not match the example below exactly. However, as of Python 3.7, dictionary

# items maintain the order at which they are inserted into the dictionary.

list(filled_dict.keys()) # => ["three", "two", "one"] in Python <3.7
list(filled_dict.keys()) # => ["one", "two", "three"] in Python 3.7+

# Get all values as an iterable with "values()". Once again we need to wrap it

# in list() to get it out of the iterable. Note - Same as above regarding key

# ordering.

list(filled_dict.values()) # => [3, 2, 1] in Python <3.7
list(filled_dict.values()) # => [1, 2, 3] in Python 3.7+

# Check for existence of keys in a dictionary with "in"

"one" in filled_dict # => True
1 in filled_dict # => False

# Looking up a non-existing key is a KeyError

filled_dict["four"] # KeyError

# Use "get()" method to avoid the KeyError

filled_dict.get("one") # => 1
filled_dict.get("four") # => None

# The get method supports a default argument when the value is missing

filled_dict.get("one", 4) # => 1
filled_dict.get("four", 4) # => 4

# "setdefault()" inserts into a dictionary only if the given key isn't present

filled_dict.setdefault("five", 5) # filled_dict["five"] is set to 5
filled_dict.setdefault("five", 6) # filled_dict["five"] is still 5

# Adding to a dictionary

filled_dict.update({"four":4}) # => {"one": 1, "two": 2, "three": 3, "four": 4}
filled_dict["four"] = 4 # another way to add to dict

# Remove keys from a dictionary with del

del filled_dict["one"] # Removes the key "one" from filled dict

# From Python 3.5 you can also use the additional unpacking options

{'a': 1, **{'b': 2}} # => {'a': 1, 'b': 2}
{'a': 1, **{'a': 2}} # => {'a': 2}

# Sets store ... well sets

empty_set = set()

# Initialize a set with a bunch of values. Yeah, it looks a bit like a dict. Sorry.

some_set = {1, 1, 2, 2, 3, 4} # some_set is now {1, 2, 3, 4}

# Similar to keys of a dictionary, elements of a set have to be immutable.

invalid_set = {[1], 1} # => Raises a TypeError: unhashable type: 'list'
valid_set = {(1,), 1}

# Add one more item to the set

filled_set = some_set
filled_set.add(5) # filled_set is now {1, 2, 3, 4, 5}

# Sets do not have duplicate elements

filled_set.add(5) # it remains as before {1, 2, 3, 4, 5}

# Do set intersection with &

other_set = {3, 4, 5, 6}
filled_set & other_set # => {3, 4, 5}

# Do set union with |

filled_set | other_set # => {1, 2, 3, 4, 5, 6}

# Do set difference with -

{1, 2, 3, 4} - {2, 3, 5} # => {1, 4}

# Do set symmetric difference with ^

{1, 2, 3, 4} ^ {2, 3, 5} # => {1, 4, 5}

# Check if set on the left is a superset of set on the right

{1, 2} >= {1, 2, 3} # => False

# Check if set on the left is a subset of set on the right

{1, 2} <= {1, 2, 3} # => True

# Check for existence in a set with in

2 in filled_set # => True
10 in filled_set # => False

####################################################

## 3. Control Flow and Iterables

####################################################

# Let's just make a variable

some_var = 5

# Here is an if statement. Indentation is significant in Python!

# Convention is to use four spaces, not tabs.

# This prints "some_var is smaller than 10"

if some_var > 10:
print("some_var is totally bigger than 10.")
elif some_var < 10: # This elif clause is optional.
print("some_var is smaller than 10.")
else: # This is optional too.
print("some_var is indeed 10.")

"""
For loops iterate over lists
prints:
dog is a mammal
cat is a mammal
mouse is a mammal
"""
for animal in ["dog", "cat", "mouse"]: # You can use format() to interpolate formatted strings
print("{} is a mammal".format(animal))

"""
"range(number)" returns an iterable of numbers
from zero to the given number
prints:
0
1
2
3
"""
for i in range(4):
print(i)

"""
"range(lower, upper)" returns an iterable of numbers
from the lower number to the upper number
prints:
4
5
6
7
"""
for i in range(4, 8):
print(i)

"""
"range(lower, upper, step)" returns an iterable of numbers
from the lower number to the upper number, while incrementing
by step. If step is not indicated, the default value is 1.
prints:
4
6
"""
for i in range(4, 8, 2):
print(i)

"""
To loop over a list, and retrieve both the index and the value of each item in the list
prints:
0 dog
1 cat
2 mouse
"""
list = ["dog", "cat", "mouse"]
for i, value in enumerate(list):
print(i, value)

"""
While loops go until a condition is no longer met.
prints:
0
1
2
3
"""
x = 0
while x < 4:
print(x)
x += 1 # Shorthand for x = x + 1

# Handle exceptions with a try/except block

try: # Use "raise" to raise an error
raise IndexError("This is an index error")
except IndexError as e:
pass # Pass is just a no-op. Usually you would do recovery here.
except (TypeError, NameError):
pass # Multiple exceptions can be handled together, if required.
else: # Optional clause to the try/except block. Must follow all except blocks
print("All good!") # Runs only if the code in try raises no exceptions
finally: # Execute under all circumstances
print("We can clean up resources here")

# Instead of try/finally to cleanup resources you can use a with statement

with open("myfile.txt") as f:
for line in f:
print(line)

# Writing to a file

contents = {"aa": 12, "bb": 21}
with open("myfile1.txt", "w+") as file:
file.write(str(contents)) # writes a string to a file

with open("myfile2.txt", "w+") as file:
file.write(json.dumps(contents)) # writes an object to a file

# Reading from a file

with open('myfile1.txt', "r+") as file:
contents = file.read() # reads a string from a file
print(contents)

# print: {"aa": 12, "bb": 21}

with open('myfile2.txt', "r+") as file:
contents = json.load(file) # reads a json object from a file
print(contents)

# print: {"aa": 12, "bb": 21}

# Python offers a fundamental abstraction called the Iterable.

# An iterable is an object that can be treated as a sequence.

# The object returned by the range function, is an iterable.

filled_dict = {"one": 1, "two": 2, "three": 3}
our_iterable = filled_dict.keys()
print(our_iterable) # => dict_keys(['one', 'two', 'three']). This is an object that implements our Iterable interface.

# We can loop over it.

for i in our_iterable:
print(i) # Prints one, two, three

# However we cannot address elements by index.

our_iterable[1] # Raises a TypeError

# An iterable is an object that knows how to create an iterator.

our_iterator = iter(our_iterable)

# Our iterator is an object that can remember the state as we traverse through it.

# We get the next object with "next()".

next(our_iterator) # => "one"

# It maintains state as we iterate.

next(our_iterator) # => "two"
next(our_iterator) # => "three"

# After the iterator has returned all of its data, it raises a StopIteration exception

next(our_iterator) # Raises StopIteration

# We can also loop over it, in fact, "for" does this implicitly!

our_iterator = iter(our_iterable)
for i in our_iterator:
print(i) # Prints one, two, three

# You can grab all the elements of an iterable or iterator by calling list() on it.

list(our_iterable) # => Returns ["one", "two", "three"]
list(our_iterator) # => Returns [] because state is saved

####################################################

## 4. Functions

####################################################

# Use "def" to create new functions

def add(x, y):
print("x is {} and y is {}".format(x, y))
return x + y # Return values with a return statement

# Calling functions with parameters

add(5, 6) # => prints out "x is 5 and y is 6" and returns 11

# Another way to call functions is with keyword arguments

add(y=6, x=5) # Keyword arguments can arrive in any order.

# You can define functions that take a variable number of

# positional arguments

def varargs(\*args):
return args

varargs(1, 2, 3) # => (1, 2, 3)

# You can define functions that take a variable number of

# keyword arguments, as well

def keyword_args(\*\*kwargs):
return kwargs

# Let's call it to see what happens

keyword_args(big="foot", loch="ness") # => {"big": "foot", "loch": "ness"}

# You can do both at once, if you like

def all_the_args(\*args, \*\*kwargs):
print(args)
print(kwargs)
"""
all_the_args(1, 2, a=3, b=4) prints:
(1, 2)
{"a": 3, "b": 4}
"""

# When calling functions, you can do the opposite of args/kwargs!

# Use \* to expand tuples and use \*\* to expand kwargs.

args = (1, 2, 3, 4)
kwargs = {"a": 3, "b": 4}
all_the_args(*args) # equivalent to all_the_args(1, 2, 3, 4)
all_the_args(\*\*kwargs) # equivalent to all_the_args(a=3, b=4)
all_the_args(*args, \*\*kwargs) # equivalent to all_the_args(1, 2, 3, 4, a=3, b=4)

# Returning multiple values (with tuple assignments)

def swap(x, y):
return y, x # Return multiple values as a tuple without the parenthesis. # (Note: parenthesis have been excluded but can be included)

x = 1
y = 2
x, y = swap(x, y) # => x = 2, y = 1

# (x, y) = swap(x,y) # Again parenthesis have been excluded but can be included.

# Function Scope

x = 5

def set_x(num): # Local var x not the same as global variable x
x = num # => 43
print(x) # => 43

def set_global_x(num):
global x
print(x) # => 5
x = num # global var x is now set to 6
print(x) # => 6

set_x(43)
set_global_x(6)

# Python has first class functions

def create_adder(x):
def adder(y):
return x + y
return adder

add_10 = create_adder(10)
add_10(3) # => 13

# There are also anonymous functions

(lambda x: x > 2)(3) # => True
(lambda x, y: x ** 2 + y ** 2)(2, 1) # => 5

# There are built-in higher order functions

list(map(add_10, [1, 2, 3])) # => [11, 12, 13]
list(map(max, [1, 2, 3], [4, 2, 1])) # => [4, 2, 3]

list(filter(lambda x: x > 5, [3, 4, 5, 6, 7])) # => [6, 7]

# We can use list comprehensions for nice maps and filters

# List comprehension stores the output as a list which can itself be a nested list

[add_10(i) for i in [1, 2, 3]] # => [11, 12, 13]
[x for x in [3, 4, 5, 6, 7] if x > 5] # => [6, 7]

# You can construct set and dict comprehensions as well.

{x for x in 'abcddeef' if x not in 'abc'} # => {'d', 'e', 'f'}
{x: x\*\*2 for x in range(5)} # => {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

####################################################

## 5. Modules

####################################################

# You can import modules

import math
print(math.sqrt(16)) # => 4.0

# You can get specific functions from a module

from math import ceil, floor
print(ceil(3.7)) # => 4.0
print(floor(3.7)) # => 3.0

# You can import all functions from a module.

# Warning: this is not recommended

from math import \*

# You can shorten module names

import math as m
math.sqrt(16) == m.sqrt(16) # => True

# Python modules are just ordinary Python files. You

# can write your own, and import them. The name of the

# module is the same as the name of the file.

# You can find out which functions and attributes

# are defined in a module.

import math
dir(math)

# If you have a Python script named math.py in the same

# folder as your current script, the file math.py will

# be loaded instead of the built-in Python module.

# This happens because the local folder has priority

# over Python's built-in libraries.

####################################################

## 6. Classes

####################################################

# We use the "class" statement to create a class

class Human:

    # A class attribute. It is shared by all instances of this class
    species = "H. sapiens"

    # Basic initializer, this is called when this class is instantiated.
    # Note that the double leading and trailing underscores denote objects
    # or attributes that are used by Python but that live in user-controlled
    # namespaces. Methods(or objects or attributes) like: __init__, __str__,
    # __repr__ etc. are called special methods (or sometimes called dunder methods)
    # You should not invent such names on your own.
    def __init__(self, name):
        # Assign the argument to the instance's name attribute
        self.name = name

        # Initialize property
        self._age = 0

    # An instance method. All methods take "self" as the first argument
    def say(self, msg):
        print("{name}: {message}".format(name=self.name, message=msg))

    # Another instance method
    def sing(self):
        return 'yo... yo... microphone check... one two... one two...'

    # A class method is shared among all instances
    # They are called with the calling class as the first argument
    @classmethod
    def get_species(cls):
        return cls.species

    # A static method is called without a class or instance reference
    @staticmethod
    def grunt():
        return "*grunt*"

    # A property is just like a getter.
    # It turns the method age() into an read-only attribute of the same name.
    # There's no need to write trivial getters and setters in Python, though.
    @property
    def age(self):
        return self._age

    # This allows the property to be set
    @age.setter
    def age(self, age):
        self._age = age

    # This allows the property to be deleted
    @age.deleter
    def age(self):
        del self._age

# When a Python interpreter reads a source file it executes all its code.

# This **name** check makes sure this code block is only executed when this

# module is the main program.

if **name** == '**main**': # Instantiate a class
i = Human(name="Ian")
i.say("hi") # "Ian: hi"
j = Human("Joel")
j.say("hello") # "Joel: hello" # i and j are instances of type Human, or in other words: they are Human objects

    # Call our class method
    i.say(i.get_species())          # "Ian: H. sapiens"
    # Change the shared attribute
    Human.species = "H. neanderthalensis"
    i.say(i.get_species())          # => "Ian: H. neanderthalensis"
    j.say(j.get_species())          # => "Joel: H. neanderthalensis"

    # Call the static method
    print(Human.grunt())            # => "*grunt*"

    # Cannot call static method with instance of object
    # because i.grunt() will automatically put "self" (the object i) as an argument
    print(i.grunt())                # => TypeError: grunt() takes 0 positional arguments but 1 was given

    # Update the property for this instance
    i.age = 42
    # Get the property
    i.say(i.age)                    # => "Ian: 42"
    j.say(j.age)                    # => "Joel: 0"
    # Delete the property
    del i.age
    # i.age                         # => this would raise an AttributeError

####################################################

## 6.1 Inheritance

####################################################

# Inheritance allows new child classes to be defined that inherit methods and

# variables from their parent class.

# Using the Human class defined above as the base or parent class, we can

# define a child class, Superhero, which inherits the class variables like

# "species", "name", and "age", as well as methods, like "sing" and "grunt"

# from the Human class, but can also have its own unique properties.

# To take advantage of modularization by file you could place the classes above in their own files,

# say, human.py

# To import functions from other files use the following format

# from "filename-without-extension" import "function-or-class"

from human import Human

# Specify the parent class(es) as parameters to the class definition

class Superhero(Human):

    # If the child class should inherit all of the parent's definitions without
    # any modifications, you can just use the "pass" keyword (and nothing else)
    # but in this case it is commented out to allow for a unique child class:
    # pass

    # Child classes can override their parents' attributes
    species = 'Superhuman'

    # Children automatically inherit their parent class's constructor including
    # its arguments, but can also define additional arguments or definitions
    # and override its methods such as the class constructor.
    # This constructor inherits the "name" argument from the "Human" class and
    # adds the "superpower" and "movie" arguments:
    def __init__(self, name, movie=False,
                 superpowers=["super strength", "bulletproofing"]):

        # add additional class attributes:
        self.fictional = True
        self.movie = movie
        # be aware of mutable default values, since defaults are shared
        self.superpowers = superpowers

        # The "super" function lets you access the parent class's methods
        # that are overridden by the child, in this case, the __init__ method.
        # This calls the parent class constructor:
        super().__init__(name)

    # override the sing method
    def sing(self):
        return 'Dun, dun, DUN!'

    # add an additional instance method
    def boast(self):
        for power in self.superpowers:
            print("I wield the power of {pow}!".format(pow=power))

if **name** == '**main**':
sup = Superhero(name="Tick")

    # Instance type checks
    if isinstance(sup, Human):
        print('I am human')
    if type(sup) is Superhero:
        print('I am a superhero')

    # Get the Method Resolution search Order used by both getattr() and super()
    # This attribute is dynamic and can be updated
    print(Superhero.__mro__)    # => (<class '__main__.Superhero'>,
                                # => <class 'human.Human'>, <class 'object'>)

    # Calls parent method but uses its own class attribute
    print(sup.get_species())    # => Superhuman

    # Calls overridden method
    print(sup.sing())           # => Dun, dun, DUN!

    # Calls method from Human
    sup.say('Spoon')            # => Tick: Spoon

    # Call method that exists only in Superhero
    sup.boast()                 # => I wield the power of super strength!
                                # => I wield the power of bulletproofing!

    # Inherited class attribute
    sup.age = 31
    print(sup.age)              # => 31

    # Attribute that only exists within Superhero
    print('Am I Oscar eligible? ' + str(sup.movie))

####################################################

## 6.2 Multiple Inheritance

####################################################

# Another class definition

# bat.py

class Bat:

    species = 'Baty'

    def __init__(self, can_fly=True):
        self.fly = can_fly

    # This class also has a say method
    def say(self, msg):
        msg = '... ... ...'
        return msg

    # And its own method as well
    def sonar(self):
        return '))) ... ((('

if **name** == '**main**':
b = Bat()
print(b.say('hello'))
print(b.fly)

# And yet another class definition that inherits from Superhero and Bat

# superhero.py

from superhero import Superhero
from bat import Bat

# Define Batman as a child that inherits from both Superhero and Bat

class Batman(Superhero, Bat):

    def __init__(self, *args, **kwargs):
        # Typically to inherit attributes you have to call super:
        # super(Batman, self).__init__(*args, **kwargs)
        # However we are dealing with multiple inheritance here, and super()
        # only works with the next base class in the MRO list.
        # So instead we explicitly call __init__ for all ancestors.
        # The use of *args and **kwargs allows for a clean way to pass arguments,
        # with each parent "peeling a layer of the onion".
        Superhero.__init__(self, 'anonymous', movie=True,
                           superpowers=['Wealthy'], *args, **kwargs)
        Bat.__init__(self, *args, can_fly=False, **kwargs)
        # override the value for the name attribute
        self.name = 'Sad Affleck'

    def sing(self):
        return 'nan nan nan nan nan batman!'

if **name** == '**main**':
sup = Batman()

    # Get the Method Resolution search Order used by both getattr() and super().
    # This attribute is dynamic and can be updated
    print(Batman.__mro__)       # => (<class '__main__.Batman'>,
                                # => <class 'superhero.Superhero'>,
                                # => <class 'human.Human'>,
                                # => <class 'bat.Bat'>, <class 'object'>)

    # Calls parent method but uses its own class attribute
    print(sup.get_species())    # => Superhuman

    # Calls overridden method
    print(sup.sing())           # => nan nan nan nan nan batman!

    # Calls method from Human, because inheritance order matters
    sup.say('I agree')          # => Sad Affleck: I agree

    # Call method that exists only in 2nd ancestor
    print(sup.sonar())          # => ))) ... (((

    # Inherited class attribute
    sup.age = 100
    print(sup.age)              # => 100

    # Inherited attribute from 2nd ancestor whose default value was overridden.
    print('Can I fly? ' + str(sup.fly)) # => Can I fly? False

####################################################

## 7. Advanced

####################################################

# Generators help you make lazy code.

def double_numbers(iterable):
for i in iterable:
yield i + i

# Generators are memory-efficient because they only load the data needed to

# process the next value in the iterable. This allows them to perform

# operations on otherwise prohibitively large value ranges.

# NOTE: `range` replaces `xrange` in Python 3.

for i in double_numbers(range(1, 900000000)): # `range` is a generator.
print(i)
if i >= 30:
break

# Just as you can create a list comprehension, you can create generator

# comprehensions as well.

values = (-x for x in [1,2,3,4,5])
for x in values:
print(x) # prints -1 -2 -3 -4 -5 to console/terminal

# You can also cast a generator comprehension directly to a list.

values = (-x for x in [1,2,3,4,5])
gen_to_list = list(values)
print(gen_to_list) # => [-1, -2, -3, -4, -5]

# Decorators

# In this example `beg` wraps `say`. If say_please is True then it

# will change the returned message.

from functools import wraps

def beg(target_function):
@wraps(target_function)
def wrapper(*args, \*\*kwargs):
msg, say_please = target_function(*args, \*\*kwargs)
if say_please:
return "{} {}".format(msg, "Please! I am poor :(")
return msg

    return wrapper

@beg
def say(say_please=False):
msg = "Can you buy me a beer?"
return msg, say_please

print(say()) # Can you buy me a beer?
print(say(say_please=True)) # Can you buy me a beer? Please! I am poor :(
