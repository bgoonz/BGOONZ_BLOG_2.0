---
title: Python General Notes
weight: 0
excerpt: Python General Notes & Resources
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

## Python Notes

| <https://lambda-6.gitbook.io/python/> | This Gitbook As A Website |
| :-----------------------------------: | :------------------------ |

> ---
>
> [**_https://ds-unit-5-lambda.netlify.app_**](https://ds-unit-5-lambda.netlify.app/)
>
> **_/_**

> ---
>
> [**_https://bryan-guner.gitbook.io/datastructures-in-pytho/_**](https://bryan-guner.gitbook.io/datastructures-in-pytho/)
>
> ---

> ---
>
> ---
>
> [**_https://replit.com/@bgoonz/DATASTRUCPYTHONNOTES-2_**](https://replit.com/@bgoonz/DATASTRUCPYTHONNOTES-2)

**Keywords**:

```python
***and       del       for       is        raise
assert    elif      from      lambda    return
break     else      global    not       try
class     except    if        or        while
continue  exec      import    pass
def       finally   in        print***

```

[py-notes.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c25bca5-0198-42ad-aa8b-7668cb904571/py-notes.pdf)

<https://bryan-guner.gitbook.io/notesarchive/>

## DOCS:

<https://docs.python.org/3/>

```python
import math

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
print("       \\n     ".isspace())
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
def avg(num1, num2):
    return print(num1 + num2)

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

def isOdd(num):
    return num % 2 == 1

filtered = filter(isOdd, [1, 2, 3, 4])
print(list(filtered))
for num in filtered:
    print(f"first way: {num}")
print("--" * 20)
[print(f"list comprehension: {i}")
 for i in [1, 2, 3, 4, 5, 6, 7, 8] if i % 2 == 1]
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
sorted_items = sorted(["john", "tom", "sonny", "Mike"],
                      key=str.lower, reverse=True)
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
# doing this to save myself some typing

def print_len(item):
    return print(len(item))

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

# def add(num1, num2):
#     return num1 + num2

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
        # Instance Variables
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

## **2.1.7 Indentation**

Leading whitespace (spaces and tabs) at the beginning of a logical line is used to compute the indentation level of the line, which in turn is used to determine the grouping of statements.

First, tabs are replaced (from left to right) by one to eight spaces such that the total number of characters up to and including the replacement is a multiple of eight (this is intended to be the same rule as used by Unix). The total number of spaces preceding the first non-blank character then determines the line's indentation. Indentation cannot be split over multiple physical lines using backslashes; the whitespace up to the first backslash determines the indentation.

**Cross-platform compatibility note:** because of the nature of text editors on non-UNIX platforms, it is unwise to use a mixture of spaces and tabs for the indentation in a single source file.

A formfeed character may be present at the start of the line; it will be ignored for the indentation calculations above. Formfeed characters occurring elsewhere in the leading whitespace have an undefined effect (for instance, they may reset the space count to zero).

The indentation levels of consecutive lines are used to generate INDENT and DEDENT tokens, using a stack, as follows.

Before the first line of the file is read, a single zero is pushed on the stack; this will never be popped off again. The numbers pushed on the stack will always be strictly increasing from bottom to top. At the beginning of each logical line, the line's indentation level is compared to the top of the stack. If it is equal, nothing happens. If it is larger, it is pushed on the stack, and one INDENT token is generated. If it is smaller, it must be one of the numbers occurring on the stack; all numbers on the stack that are larger are popped off, and for each number popped off a DEDENT token is generated. At the end of the file, a DEDENT token is generated for each number remaining on the stack that is larger than zero.

Here is an example of a correctly (though confusingly) indented piece of Python code:

`def perm(l): # Compute the list of all permutations of l if len(l) <= 1: return [l] r = [] for i in range(len(l)): s = l[:i] + l[i+1:] p = perm(s) for x in p: r.append(l[i:i+1] + x) return r`

The following example shows various indentation errors:

```text
 `def perm(l):                       # error: first line indented
for i in range(len(l)):             # error: not indented
    s = l[:i] + l[i+1:]
        p = perm(l[:i] + l[i+1:])   # error: unexpected indent
        for x in p:
                r.append(l[i:i+1] + x)
            return r                # error: inconsistent dedent`
```

(Actually, the first three errors are detected by the parser; only the last error is found by the lexical analyzer -- the indentation of `return r` does not match a level popped off the stack.)

<https://ds-unit-5-lambda.netlify.app/>

## Python Study Guide for a JavaScript Programmer

[Bryan Guner](https://bryanguner.medium.com/?source=post_page-----5cfdf3d2bdfb--------------------------------)

[Mar 5](https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb?source=post_page-----5cfdf3d2bdfb--------------------------------) · 15 min read

![https://miro.medium.com/max/1400/1*3V9VOfPk_hrFdbEAd3j-QQ.png](https://miro.medium.com/max/1400/1*3V9VOfPk_hrFdbEAd3j-QQ.png)

## **Applications of Tutorial & Cheat Sheet Respectivley (At Bottom Of Tutorial):**

## **Basics**

-   **PEP8** : Python Enhancement Proposals, style-guide for Python.
-   `print` is the equivalent of `console.log`.

> ‘print() == console.log()’

## ``** is used to make comments in your code.**

```text
def foo():
    """
    The foo function does many amazing things that you
    should not question. Just accept that it exists and
    use it with caution.
    """
    secretThing()
```

> Python has a built in help function that let’s you see a description of the source code without having to navigate to it… “-SickNasty … Autor Unknown”

## **Numbers**

-   Python has three types of numbers:

1.  **Integer**
2.  **Positive and Negative Counting Numbers.**

No Decimal Point

> Created by a literal non-decimal point number … or … with the int() constructor.

```text
print(3) # => 3
print(int(19)) # => 19
print(int()) # => 0
```

**3. Complex Numbers**

> Consist of a real part and imaginary part.

### **Boolean is a subtype of integer in Python.🤷‍♂️**

> If you came from a background in JavaScript and learned to accept the premise(s) of the following meme…

> Than I am sure you will find the means to suspend your disbelief.

```text
print(2.24) # => 2.24
print(2.) # => 2.0
print(float()) # => 0.0
print(27e-5) # => 0.00027
```

## **KEEP IN MIND:**

> The i is switched to a j in programming.

**T\***his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-**space** when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler.\*

```text
print(7j) # => 7j
print(5.1+7.7j)) # => 5.1+7.7j
print(complex(3, 5)) # => 3+5j
print(complex(17)) # => 17+0j
print(complex()) # => 0j
```

-   **Type Casting** : The process of converting one number to another.

```text
# Using Float
print(17)               # => 17
print(float(17))        # => 17.0# Using Int
print(17.0)             # => 17.0
print(int(17.0))        # => 17# Using Str
print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

**The arithmetic operators are the same between JS and Python, with two additions:**

-   _“\*\*” : Double asterisk for exponent._
-   _“//” : Integer Division._
-   **There are no spaces between math operations in Python.**
-   **Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.**
-   **There are no `++` and `-` in Python, the only shorthand operators are:**

## **Strings**

-   Python uses both single and double quotes.
-   You can escape strings like so `'Jodi asked, "What\\'s up, Sam?"'`
-   Multiline strings use triple quotes.

```text
print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')
```

**Use the `len()` function to get the length of a string.**

```text
print(len(“Spaghetti”)) # => 9
```

## **Python uses `zero-based indexing`**

### **Python allows negative indexing (thank god!)**

```text
print(“Spaghetti”[-1]) # => i print(“Spaghetti”[-4]) # => e
```

-   Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _(mind you that in JS … strings are wrapped in an object (under the hood)… upon which the string methods are actually called. As a immutable privative type **by textbook definition**, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.)_

```text
print(“Spaghetti”[1:4]) # => pag
print(“Spaghetti”[4:-1]) # => hett
print(“Spaghetti”[4:4]) # => (empty string)
```

-   The end range is exclusive just like `slice` in JS.

```text
# Shortcut to get from the beginning of a string to a certain index.
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett# Shortcut to get from a certain index to the end of a string.
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti
```

-   The `index` string function is the equiv. of `indexOf()` in JS

```text
print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6
```

-   The `count` function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.

```text
print("Spaghetti".count("h"))    # => 1
print("Spaghetti".count("t"))    # => 2
print("Spaghetti".count("s"))    # => 0
print('''We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard, because that goal will
serve to organize and measure the best of our energies and skills, because that
challenge is one that we are willing to accept, one we are unwilling to
postpone, and one which we intend to win, and the others, too.
'''.count('the '))                # => 4
```

-   **You can use `+` to concatenate strings, just like in JS.**
-   **You can also use “\*” to repeat strings or multiply strings.**
-   **Use the `format()` function to use placeholders in a string to input values later on.**

```text
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

-   _Shorthand way to use format function is:_`print(f'Your name is {first_name} {last_name}')`

### **Some useful string methods.**

-   **Note that in JS `join` is used on an Array, in Python it is used on String.**

![https://miro.medium.com/max/630/0*eE3E5H0AoqkhqK1z.png](https://miro.medium.com/max/630/0*eE3E5H0AoqkhqK1z.png)

-   There are also many handy testing methods.

![https://miro.medium.com/max/630/0*Q0CMqFd4PozLDFPB.png](https://miro.medium.com/max/630/0*Q0CMqFd4PozLDFPB.png)

## **Variables and Expressions**

-   **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.
-   Duck Typing is the fundamental approach of Python.
-   Assignment of a value automatically declares a variable.

```text
a = 7
b = 'Marbles'
print(a)         # => 7
print(b)         # => Marbles
```

-   **_You can chain variable assignments to give multiple var names the same value._**

### **Use with caution as this is highly unreadable**

```text
count = max = min = 0
print(count)           # => 0
print(max)             # => 0
print(min)             # => 0
```

### **The value and type of a variable can be re-assigned at any time.**

```text
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

-   `* does not exist in Python, but you can 'create' it like so:`\*
-   _Python replaces `null` with `none`._
-   ``**\* is an object** and can be directly assigned to a variable.\*

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

## **Boolean Data Type**

-   One of the biggest benefits of Python is that it reads more like English than JS does.

![https://miro.medium.com/max/1400/0*HQpndNhm1Z_xSoHb.png](https://miro.medium.com/max/1400/0*HQpndNhm1Z_xSoHb.png)

```text
# Logical AND
print(True and True)    # => True
print(True and False)   # => False
print(False and False)  # => False# Logical OR
print(True or True)     # => True
print(True or False)    # => True
print(False or False)   # => False# Logical NOT
print(not True)             # => False
print(not False and True)   # => True
print(not True or False)    # => False
```

-   By default, Python considers an object to be true UNLESS it is one of the following:
-   Constant `None` or `False`
-   Zero of any numeric type.
-   Empty Sequence or Collection.
-   `True` and `False` must be capitalized

## **Comparison Operators**

-   Python uses all the same equality operators as JS.
-   In Python, equality operators are processed from left to right.
-   Logical operators are processed in this order:

1.  **NOT**
2.  **AND**
3.  **OR**

> Just like in JS, you can use parentheses to change the inherent order of operations.Short Circuit : Stopping a program when a true or false has been reached.

![https://miro.medium.com/max/630/0*qHzGRLTOMTf30miT.png](https://miro.medium.com/max/630/0*qHzGRLTOMTf30miT.png)

## **Identity vs Equality**

\*\*\*\*

|     |     |
| :-: | :-- |

```text
print (2 == '2')    # => False
print (2 is '2')    # => Falseprint ("2" == '2')    # => True
print ("2" is '2')    # => True# There is a distinction between the number types.
print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

-   In the Python community it is better to use `is` and `is not` over `==` or `!=`

**If Statements**

`if name == 'Monica': print('Hi, Monica.')if name == 'Monica': print('Hi, Monica.')else: print('Hello, stranger.')if name == 'Monica': print('Hi, Monica.')elif age < 12: print('You are not Monica, kiddo.')elif age > 2000: print('Unlike you, Monica is not an undead, immortal vampire.')elif age > 100: print('You are not Monica, grannie.')`_Remember the order of `elif` statements matter._

## **While Statements**

```text
spam = 0
while spam < 5:
  print('Hello, world.')
  spam = spam + 1
```

-   `Break` statement also exists in Python.

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break
```

-   As are `continue` statements

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam < 5:
    continue
  break
```

## **Try/Except Statements**

-   Python equivalent to `try/catch`

```text
a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')    # Optionally include a correction to the issue
    a = str(a)
    print(len(a)a = '321'
try:
    print(len(a))
except:
    print('Silently handle error here')    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))
```

-   You can name an error to give the output more specificity.

```text
a = 100
b = 0
try:
    c = a / b
except ZeroDivisionError:
    c = None
print(c)
```

-   You can also use the `pass` commmand to by pass a certain error.

```text
a = 100
b = 0
try:
    print(a / b)
except ZeroDivisionError:
    pass
```

-   The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:

```text
a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError):
    print("ERROR!")
```

-   You can use an `else` statement to end a chain of `except` statements.

```text
# tuple of file names
files = ('one.txt', 'two.txt', 'three.txt')# simple loop
for filename in files:
    try:
        # open the file in read mode
        f = open(filename, 'r')
    except OSError:
        # handle the case where file does not exist or permission is denied
        print('cannot open file', filename)
    else:
        # do stuff with the file object (f)
        print(filename, 'opened successfully')
        print('found', len(f.readlines()), 'lines')
        f.close()
```

-   `finally` is used at the end to clean up all actions under any circumstance.

```text
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Cannot divide by zero")
    else:
        print("Result is", result)
    finally:
        print("Finally...")
```

-   Using duck typing to check to see if some value is able to use a certain method.

```text
# Try a number - nothing will print out
a = 321
if hasattr(a, '__len__'):
    print(len(a))# Try a string - the length will print out (4 in this case)
b = "5555"
if hasattr(b, '__len__'):
    print(len(b))
```

## **Pass**

-   Pass Keyword is required to write the JS equivalent of :

```text
if (true) {
}while (true) {}if True:
  passwhile True:
  pass
```

## **Functions**

-   **Function definition includes:**
-   **The `def` keyword**
-   **The name of the function**
-   **A list of parameters enclosed in parentheses.**
-   **A colon at the end of the line.**
-   **One tab indentation for the code to run.**
-   **You can use default parameters just like in JS**

```text
def greeting(name, saying="Hello"):
    print(saying, name)greeting("Monica")
# Hello Monicagreeting("Barry", "Hey")
# Hey Barry
```

### **Keep in mind, default parameters must always come after regular parameters.**

```text
# THIS IS BAD CODE AND WILL NOT RUN
def increment(delta=1, value):
    return delta + value
```

-   _You can specify arguments by name without destructuring in Python._

```text
def greeting(name, saying="Hello"):
    print(saying, name)# name has no default value, so just provide the value
# saying has a default value, so use a keyword argument
greeting("Monica", saying="Hi")
```

-   The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

## **Notes**

### **Formatted Strings**

> Remember that in Python join() is called on a string with an array/list passed in as the argument.Python has a very powerful formatting engine.format() is also applied directly to strings.

```text
shopping_list = [‘bread’,’milk’,’eggs’]
print(‘,’.join(shopping_list))
```

## **Comma Thousands Separator**

```text
print(‘{:,}’.format(1234567890))
‘1,234,567,890’
```

## **Date and Time**

```text
d = datetime.datetime(2020, 7, 4, 12, 15, 58)
print(‘{:%Y-%m-%d %H:%M:%S}’.format(d))
‘2020–07–04 12:15:58’
```

## **Percentage**

```text
points = 190
total = 220
print(‘Correct answers: {:.2%}’.format(points/total))
Correct answers: 86.36%
```

## **Data Tables**

```text
width=8
print(‘ decimal hex binary’)
print(‘-’*27)
for num in range(1,16):
for base in ‘dXb’:
print(‘{0:{width}{base}}’.format(num, base=base, width=width), end=’ ‘)
print()
Getting Input from the Command Line
Python runs synchronously, all programs and processes will stop when listening for a user input.
The input function shows a prompt to a user and waits for them to type ‘ENTER’.
Scripts vs Programs
Programming Script : A set of code that runs in a linear fashion.
The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.
```

\*\*Python can be used to display html, css, and JS.\*\*_It is common to use Python as an API (Application Programming Interface)_

### **Structured Data**

### **Sequence : The most basic data structure in Python where the index determines the order.**

> List-Tuple-Range-Collections : Unordered data structures, hashable values.

### **Dictionaries-Sets-Iterable : Generic name for a sequence or collection; any object that can be iterated through.Can be mutable or immutable.Built In Data Types**

## **Lists are the python equivalent of arrays.**

```text
empty_list = []
departments = [‘HR’,’Development’,’Sales’,’Finance’,’IT’,’Customer Support’]
```

## **You can instantiate**

```text
specials = list()
```

### **Test if a value is in a list.**

```text
print(1 in [1, 2, 3]) #> True
print(4 in [1, 2, 3]) #> False
# Tuples : Very similar to lists, but they are immutable
```

### **Instantiated with parentheses**

```text
time_blocks = (‘AM’,’PM’)
```

### **Sometimes instantiated without**

```text
colors = ‘red’,’blue’,’green’
numbers = 1, 2, 3
```

### **Tuple() built in can be used to convert other data into a tuple**

```text
tuple(‘abc’) # returns (‘a’, ‘b’, ‘c’)
tuple([1,2,3]) # returns (1, 2, 3)
# Think of tuples as constant variables.
```

### **Ranges : A list of numbers which can’t be changed; often used with for loops.**

**Declared using one to three parameters**.

> Start : opt. default 0, first # in sequence.Stop : required next number past the last number in the sequence.Step : opt. default 1, difference between each number in the sequence.

```python
range(5) # [0, 1, 2, 3, 4]
range(1,5) # [1, 2, 3, 4]
range(0, 25, 5) # [0, 5, 10, 15, 20]
range(0) # [ ]
for let (i = 0; i < 5; i++)
for let (i = 1; i < 5; i++)
for let (i = 0; i < 25; i+=5)
for let(i = 0; i = 0; i++)
# Keep in mind that stop is not included in the range.
```

### **Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.**

### **Mutable.**

```text
a = {‘one’:1, ‘two’:2, ‘three’:3}
b = dict(one=1, two=2, three=3)
c = dict([(‘two’, 2), (‘one’, 1), (‘three’, 3)])
# a, b, and c are all equal
```

**_Declared with curly braces of the built in dict()_**

> Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal.

**Use the in operator to see if a key exists in a dictionary.**

**Sets : Unordered collection of distinct objects; objects that need to be hashable.**

> Always be unique, duplicate items are auto dropped from the set.

### **Common Uses:**

> Removing DuplicatesMembership TestingMathematical Operators: Intersection, Union, Difference, Symmetric Difference.

**Standard Set is mutable, Python has a immutable version called frozenset.Sets created by putting comma seperated values inside braces:**

```text
school_bag = {‘book’,’paper’,’pencil’,’pencil’,’book’,’book’,’book’,’eraser’}
print(school_bag)
```

### **Also can use set constructor to automatically put it into a set.**

```text
letters = set(‘abracadabra’)
print(letters)
#Built-In Functions
#Functions using iterables
```

**filter(function, iterable) : creates new iterable of the same type which includes each item for which the function returns true.**

**map(function, iterable) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted(iterable, key=None, reverse=False) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate(iterable, start=0) : starts with a sequence and converts it to a series of tuples**

```text
quarters = [‘First’, ‘Second’, ‘Third’, ‘Fourth’]
print(enumerate(quarters))
print(enumerate(quarters, start=1))
```

### **(0, ‘First’), (1, ‘Second’), (2, ‘Third’), (3, ‘Fourth’)**

### **(1, ‘First’), (2, ‘Second’), (3, ‘Third’), (4, ‘Fourth’)**

> zip(\*iterables) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.Functions that analyze iterable

**len(iterable) : returns the count of the number of items.**

\*_max(args, key=None) : returns the largest of two or more arguments._

**max(iterable, key=None) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be compared.min works the same way as max_

**sum(iterable) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one string, so do not use sum for that._

**any(iterable) : returns True if any items in the iterable are true.**

**all(iterable) : returns True is all items in the iterable are true.**

## **Working with dictionaries**

**dir(dictionary) : returns the list of keys in the dictionary.Working with sets**

\*_Union : The pipe | operator or union(sets) function can be used to produce a new set which is a combination of all elements in the provided set._

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a | b) # => {1, 2, 3, 4, 6}
```

### **Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets.**

```text

a = {1, 2, 3}
b = {2, 4, 6}
print(a & b) # => {2}
Difference : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.
```

**Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.**

```python
a = {1, 2, 3}
b = {2, 4, 6}
print(a — b) # => {1, 3}
print(b — a) # => {4, 6}
print(a ^ b) # => {1, 3, 4, 6}
```

## **For StatementsIn python, there is only one for loop.**

Always Includes:

> 1.  The for keyword2. A variable name3. The ‘in’ keyword4. An iterable of some kid5. A colon6. On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

```python
print(‘My name is’)
for i in range(5):
print(‘Carlita Cinco (‘ + str(i) + ‘)’)total = 0
for num in range(101):
total += num
print(total)
Looping over a list in Python
for c in [‘a’, ‘b’, ‘c’]:
print(c)lst = [0, 1, 2, 3]
for i in lst:
print(i)
```

**_Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list._**

```python
supplies = [‘pens’, ‘staplers’, ‘flame-throwers’, ‘binders’]
for i in range(len(supplies)):
print(‘Index ‘ + str(i) + ‘ in supplies is: ‘ + supplies[i])

```

\*\*\*\*

**You can loop and destructure at the same time.**

```text
l = 1, 2], [3, 4], [5, 6
for a, b in l:
print(a, ‘, ‘, b)
```

> Prints 1, 2Prints 3, 4Prints 5, 6

**You can use values() and keys() to loop over dictionaries.**

```text
spam = {‘color’: ‘red’, ‘age’: 42}
for v in spam.values():
print(v)
```

_Prints red_

_Prints 42_

```text
for k in spam.keys():
print(k)
```

_Prints color_

_Prints age_

**For loops can also iterate over both keys and values.**

**Getting tuples**

```text
for i in spam.items():
print(i)
```

_Prints (‘color’, ‘red’)_

_Prints (‘age’, 42)_

_Destructuring to values_

```text
for k, v in spam.items():
print(‘Key: ‘ + k + ‘ Value: ‘ + str(v))
```

_Prints Key: age Value: 42_

_Prints Key: color Value: red_

**Looping over string**

```text
for c in “abcdefg”:
print(c)
```

**When you order arguments within a function or function call, the args need to occur in a particular order:**

_formal positional args._

-   args

_keyword args with default values_

-   \*kwargs

```text
def example(arg_1, arg_2, *args, **kwargs):
passdef example2(arg_1, arg_2, *args, kw_1=”shark”, kw_2=”blowfish”, **kwargs):
pass

```

## **Importing in Python**

**Modules are similar to packages in Node.js**Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**

## **Terms**

> module : Python code in a separate file.package : Path to a directory that contains [modules.init.py](http://modules.init.py) : Default file for a package.submodule : Another file in a module’s folder.function : Function in a module.

**A module can be any file but it is usually created by placing a special file** [**init.py**](http://init.py) **into a folder. pic**

_Try to avoid importing with wildcards in Python._

_Use multiple lines for clarity when importing._

```text
from urllib.request import (
HTTPDefaultErrorHandler as ErrorHandler,
HTTPRedirectHandler as RedirectHandler,
Request,
pathname2url,
url2pathname,
urlopen,
)
```

## **Watching Out for Python 2**

**Python 3 removed <> and only uses !=**

**format() was introduced with P3**

**All strings in P3 are unicode and encoded.md5 was removed.**

**ConfigParser was renamed to configparsersets were killed in favor of set() class.**

### **print was a statement in P2, but is a function in P3.**

<https://gist.github.com/bgoonz/82154f50603f73826c27377ebaa498b5#file-python-study-guide-py>

<https://gist.github.com/bgoonz/282774d28326ff83d8b42ae77ab1fee3#file-python-cheatsheet-py>

<https://gist.github.com/bgoonz/999163a278b987fe47fb247fd4d66904#file-python-cheat-sheet-md>

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be5715e2-c834-458f-8c5b-ea185717fe37/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be5715e2-c834-458f-8c5b-ea185717fe37/Untitled.png)

## Built-in Functions
