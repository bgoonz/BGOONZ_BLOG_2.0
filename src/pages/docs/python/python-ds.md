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

| [https://lambda-6.gitbook.io/python/](https://lambda-6.gitbook.io/python/) | This Gitbook As A Website |
| :------------------------------------------------------------------------: | :------------------------ |

{% embed url="https://ds-unit-5-lambda.netlify.app/\#." %}

{% embed url="https://golden-lobe-519.notion.site/PYTHON-cb857bd3fa4b4940928842a94dce856d" caption="My Notion Notes" %}

{% embed url="https://replit.com/@bgoonz/DATASTRUCPYTHONNOTES-2" %}

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

[https://bryan-guner.gitbook.io/notesarchive/](https://bryan-guner.gitbook.io/notesarchive/)

## DOCS:

[https://docs.python.org/3/](https://docs.python.org/3/)

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

Leading whitespace \(spaces and tabs\) at the beginning of a logical line is used to compute the indentation level of the line, which in turn is used to determine the grouping of statements.

First, tabs are replaced \(from left to right\) by one to eight spaces such that the total number of characters up to and including the replacement is a multiple of eight \(this is intended to be the same rule as used by Unix\). The total number of spaces preceding the first non-blank character then determines the line's indentation. Indentation cannot be split over multiple physical lines using backslashes; the whitespace up to the first backslash determines the indentation.

**Cross-platform compatibility note:** because of the nature of text editors on non-UNIX platforms, it is unwise to use a mixture of spaces and tabs for the indentation in a single source file.

A formfeed character may be present at the start of the line; it will be ignored for the indentation calculations above. Formfeed characters occurring elsewhere in the leading whitespace have an undefined effect \(for instance, they may reset the space count to zero\).

The indentation levels of consecutive lines are used to generate INDENT and DEDENT tokens, using a stack, as follows.

Before the first line of the file is read, a single zero is pushed on the stack; this will never be popped off again. The numbers pushed on the stack will always be strictly increasing from bottom to top. At the beginning of each logical line, the line's indentation level is compared to the top of the stack. If it is equal, nothing happens. If it is larger, it is pushed on the stack, and one INDENT token is generated. If it is smaller, it must be one of the numbers occurring on the stack; all numbers on the stack that are larger are popped off, and for each number popped off a DEDENT token is generated. At the end of the file, a DEDENT token is generated for each number remaining on the stack that is larger than zero.

Here is an example of a correctly \(though confusingly\) indented piece of Python code:

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

\(Actually, the first three errors are detected by the parser; only the last error is found by the lexical analyzer -- the indentation of `return r` does not match a level popped off the stack.\)

[https://ds-unit-5-lambda.netlify.app/](https://ds-unit-5-lambda.netlify.app/)

## Python Study Guide for a JavaScript Programmer

[Bryan Guner](https://bryanguner.medium.com/?source=post_page-----5cfdf3d2bdfb--------------------------------)

[Mar 5](https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb?source=post_page-----5cfdf3d2bdfb--------------------------------) · 15 min read

![https://miro.medium.com/max/1400/1*3V9VOfPk_hrFdbEAd3j-QQ.png](https://miro.medium.com/max/1400/1*3V9VOfPk_hrFdbEAd3j-QQ.png)

## **Applications of Tutorial & Cheat Sheet Respectivley \(At Bottom Of Tutorial\):**

## **Basics**

-   **PEP8** : Python Enhancement Proposals, style-guide for Python.
-   `print` is the equivalent of `console.log`.

> ‘print\(\) == console.log\(\)’

## **`#` is used to make comments in your code.**

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

1. **Integer**
2. **Positive and Negative Counting Numbers.**

No Decimal Point

> Created by a literal non-decimal point number … or … with the int\(\) constructor.

```text
print(3) # => 3
print(int(19)) # => 19
print(int()) # => 0
```

**3. Complex Numbers**

> Consist of a real part and imaginary part.

### **Boolean is a subtype of integer in Python.🤷‍♂️**

> If you came from a background in JavaScript and learned to accept the premise\(s\) of the following meme…

> Than I am sure you will find the means to suspend your disbelief.

```text
print(2.24) # => 2.24
print(2.) # => 2.0
print(float()) # => 0.0
print(27e-5) # => 0.00027
```

## **KEEP IN MIND:**

> The i is switched to a j in programming.

**T**_his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-**space** when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler._

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

### **Python allows negative indexing \(thank god!\)**

```text
print(“Spaghetti”[-1]) # => i print(“Spaghetti”[-4]) # => e
```

-   Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _\(mind you that in JS … strings are wrapped in an object \(under the hood\)… upon which the string methods are actually called. As a immutable privative type **by textbook definition**, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.\)_

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

-   _**You can chain variable assignments to give multiple var names the same value.**_

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

-   _`NaN` does not exist in Python, but you can 'create' it like so:**`print(float("nan"))`**_
-   _Python replaces `null` with `none`._
-   _**`none` is an object** and can be directly assigned to a variable._

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

1. **NOT**
2. **AND**
3. **OR**

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

> Remember that in Python join\(\) is called on a string with an array/list passed in as the argument.Python has a very powerful formatting engine.format\(\) is also applied directly to strings.

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

\*\*Python can be used to display html, css, and JS.\*\*_It is common to use Python as an API \(Application Programming Interface\)_

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

### **Tuple\(\) built in can be used to convert other data into a tuple**

```text
tuple(‘abc’) # returns (‘a’, ‘b’, ‘c’)
tuple([1,2,3]) # returns (1, 2, 3)
# Think of tuples as constant variables.
```

### **Ranges : A list of numbers which can’t be changed; often used with for loops.**

**Declared using one to three parameters**.

> Start : opt. default 0, first \# in sequence.Stop : required next number past the last number in the sequence.Step : opt. default 1, difference between each number in the sequence.

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

_**Declared with curly braces of the built in dict\(\)**_

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

**filter\(function, iterable\) : creates new iterable of the same type which includes each item for which the function returns true.**

**map\(function, iterable\) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted\(iterable, key=None, reverse=False\) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate\(iterable, start=0\) : starts with a sequence and converts it to a series of tuples**

```text
quarters = [‘First’, ‘Second’, ‘Third’, ‘Fourth’]
print(enumerate(quarters))
print(enumerate(quarters, start=1))
```

### **\(0, ‘First’\), \(1, ‘Second’\), \(2, ‘Third’\), \(3, ‘Fourth’\)**

### **\(1, ‘First’\), \(2, ‘Second’\), \(3, ‘Third’\), \(4, ‘Fourth’\)**

> zip\(\*iterables\) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.Functions that analyze iterable

**len\(iterable\) : returns the count of the number of items.**

\*_max\(args, key=None\) : returns the largest of two or more arguments._

**max\(iterable, key=None\) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be compared.min works the same way as max_

**sum\(iterable\) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one string, so do not use sum for that._

**any\(iterable\) : returns True if any items in the iterable are true.**

**all\(iterable\) : returns True is all items in the iterable are true.**

## **Working with dictionaries**

**dir\(dictionary\) : returns the list of keys in the dictionary.Working with sets**

\*_Union : The pipe \| operator or union\(sets\) function can be used to produce a new set which is a combination of all elements in the provided set._

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

> 1. The for keyword2. A variable name3. The ‘in’ keyword4. An iterable of some kid5. A colon6. On the next line, an indented block of code called the for clause.

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

_**Common technique is to use the len\(\) on a pre-defined list with a for loop to iterate over the indices of the list.**_

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

**You can use values\(\) and keys\(\) to loop over dictionaries.**

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

_Prints \(‘color’, ‘red’\)_

_Prints \(‘age’, 42\)_

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

**Python 3 removed &lt;&gt; and only uses !=**

**format\(\) was introduced with P3**

**All strings in P3 are unicode and encoded.md5 was removed.**

**ConfigParser was renamed to configparsersets were killed in favor of set\(\) class.**

### **print was a statement in P2, but is a function in P3.**

[https://gist.github.com/bgoonz/82154f50603f73826c27377ebaa498b5\#file-python-study-guide-py](https://gist.github.com/bgoonz/82154f50603f73826c27377ebaa498b5#file-python-study-guide-py)

[https://gist.github.com/bgoonz/282774d28326ff83d8b42ae77ab1fee3\#file-python-cheatsheet-py](https://gist.github.com/bgoonz/282774d28326ff83d8b42ae77ab1fee3#file-python-cheatsheet-py)

[https://gist.github.com/bgoonz/999163a278b987fe47fb247fd4d66904\#file-python-cheat-sheet-md](https://gist.github.com/bgoonz/999163a278b987fe47fb247fd4d66904#file-python-cheat-sheet-md)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be5715e2-c834-458f-8c5b-ea185717fe37/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be5715e2-c834-458f-8c5b-ea185717fe37/Untitled.png)

# Exercises:

````py

# -*- coding: utf-8 -*-
"""CS46HT.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/117m4zL50nNyzMQICY3IjNRiRlpT6GgA9

# Hash Tables

tables in different languages
- dictionary (Python)
- objects (JavaScript)
- HashMaps (Java)

parts of a hash table
- Hashing Function
- Data Structure to hold each Bucket
- Key Value pairs


- Hashing Function
"""

# key : value pair store known as HashTable, HashMap, Dictionary, ObjectLiteral
def my_hash(key):
  sum = 0
  for c in key:
    sum += ord(c)

  return sum

def my_hash2(key):
  sum = 0
  string_bytes = key.encode()
  for b in string_bytes:
    sum += b

  return sum

# print(my_hash("ABC"))
# print(my_hash2("ABC"))

# djb2
# encode key

# set a starting value for our hash to the prime number 5381
# take my hash value number and shift it to left by 5 or multiply it by 32
# now we take the new hash value and add the old hash value to it
# add the single byte from the char of the key
# mask the end number to fit inside 32 bit space
# return the hash

def djb2(key):
  str_key = str(key).encode()

  hash_value = 5381

  for b in str_key:
    # shifted_value = hash_value << 5
    # add_shift = shifted_value + hash_value
    # total_hash = add_shift + b
    # total_hash &= 0xffffffff # 0b11111111111111111111111111111111 32bits
    # final_hash = total_hash & 0xffffffff
    hash_value = ((hash_value << 5) + hash_value) + b
    hash_value &= 0xffffffff

  return hash_value

"""
00101000
10 << 5
10 * 32
10
20
40
80
160
320

10 * 2
mov eax, 10
shl eax, 10
mul eax, 2
mul eax, 2
mul eax, 2
mul eax, 2
mul eax, 2
mul eax, 2
mul eax, 2
mul eax, 2
mul eax, 2

10 << 2
10 * 2 -> 20 * 2

     True, False, False, True, True, True, False
and  False, False, False, True, True, True, True
     False, False, False, True, True, True, False

  111000001010101110000000010101
& 000000000000000000000011111111
  000000000000000000000000010101
"""

my_hash_number = djb2("ABCD")
print(my_hash_number)

storage = [None] * 10

"""# CODE 7506

"""

class HashTable:
# """
# A hash table with `capacity` buckets
# that accepts string keys
# """

def __init__(self, capacity):
    self.capacity = capacity  # Number of buckets in the hash table
    self.storage = [None] * capacity
    self.item_count = 0

def djb2(self, key):
    """
    DJB2 hash, 32-bit
    """
    # Cast the key to a string and get bytes
    str_key = str(key).encode()

    # Start from an arbitrary large prime
    hash_value = 5381

    # Bit-shift and sum value for each character
    for b in str_key:
        hash_value = ((hash_value << 5) + hash_value) + b
        hash_value &= 0xffffffff  # DJB2 is a 32-bit hash, only keep 32 bits

    return hash_value

def hash_index(self, key):
    """
    Take an arbitrary key and return a valid integer index
    between within the storage capacity of the hash table.
    """
    return self.djb2(key) % self.capacity

def put(self, key, value):
    """
    Store the value with the given key.
    """
    index = self.hash_index(key)
    self.storage[index] = value
    return

def delete(self, key):
    """
    Remove the value stored with the given key.
    """
    index = self.hash_index(key)
    self.storage[index] = None

def get(self, key):
"""
    Retrieve the value stored with the given key.
    Returns None if the key is not found.
    """
    index = self.hash_index(key)
    return self.storage[index]

"""# CODE 7506

# Demo
"""

"""
Your task is create your own HashTable without using a built-in library.
Your HashTable needs to have the following functions:
- put(key, value) : Inserts a (key, value) pair into the HashTable. If the
value already exists in the HashTable, update the value.
- get(key): Returns the value to which the specified key is mapped, or -1 if
this map contains no mapping for the key.
- remove(key) : Remove the mapping for the value key if this map contains the
mapping for the key.
Example:
```plaintext
hash_table = MyHashTable();
hash_table.put("a", 1);
hash_table.put("b", 2);
hash_table.get("a");            // returns 1
hash_table.get("c");            // returns -1 (not found)
hash_table.put("b", 1);         // update the existing value
hash_table.get("b");            // returns 1
hash_table.remove("b");         // remove the mapping for 2
hash_table.get("b");            // returns -1 (not found)
````

"""
class ListNode:
def **init**(self, key, value):
self.key = key
self.value = value
self.next = None
"""
4000 12 89
["ABC", 10]-->["CBA", 100]-->["BAC", 2342]-->["AAAB", 400]-->None
^
|  
[4000, 9000, 6000] --> ["ZAB", 600]
| 9000 99 10
["XYZ", 10]-->["ZYX", 134]-->["ZXY", 2342]-->None
"""
class MyHashTable:
def **init**(self): # Your code here
self.capacity = 1000
self.size = 0
self.storage = [None] \* self.capacity

    # Your code here
    def djb2(self, key):
      """
      DJB2 hash, 32-bit
      """
      # Cast the key to a string and get bytes
      str_key = str(key).encode()

      # Start from an arbitrary large prime
      hash_value = 5381

      # Bit-shift and sum value for each character
      for b in str_key:
          hash_value = ((hash_value << 5) + hash_value) + b
          hash_value &= 0xffffffff  # DJB2 is a 32-bit hash, only keep 32 bits

      return hash_value

def hash_index(self, key):
"""
Take an arbitrary key and return a valid integer index
between within the storage capacity of the hash table.
"""
return self.djb2(key) % self.capacity

    def put(self, key, value):
        # Your code here
        index = self.hash_index(key)

        if self.storage[index] == None:
          self.size += 1
          self.storage[index] = ListNode(key, value)
        else:
          current_node = self.storage[index]
          while True:
            if current_node.key == key:
              current_node.value = value
              return
            if current_node.next == None:
              break

            current_node = current_node.next

          self.size += 1
          current_node.next = ListNode(key, value)



    def get(self, key):
        index = self.hash_index(key)

        curr_node = self.storage[index]

        while curr_node:
            if curr_node.key == key:
                return curr_node.value
            else:
                curr_node = curr_node.next

        return -1

    def remove(self, key):
        index = self.hash_index(key)

        curr_node = prev_node = self.hash_table[index]

         # Removing from empty bin just return
        if not curr_node: return

        if curr_node.key == key:
            # We found the node to delete immediately, we can now skip over it
            self.hash_table[index] = curr_node.next
        else:
            # We did not find the node to delete we must now traverse the bin
            curr_node = curr_node.next

            while curr_node:
                if curr_node.key == key:
                    prev_node.next = curr_node.next
                    break
                else:
                    prev_node, curr_node = prev_node.next, curr_node.next

````
---



```py

# -*- coding: utf-8 -*-
"""HT2.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1WXURLnQJopWW5J-OKxOePd4GTeDM542p

# Hash Tables II

## Collisions
- Linked List Chaining

## Resize
- keep track of load factor
- if load factor hits 70% when adding to table resize
- if load factor goest 20% when deleting from table resize
"""

"""
1. Write the delete method with the assumption that linked list chaining was used for collision resolution.
2. Write the get method with the assumption that linked list chaining was used for collision resolution.
"""


class HashTableEntry:
    """
    Linked List hash table key/value pair
    """

    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


# Hash table can't have fewer than this many slots
# MIN_CAPACITY = 8


class HashTable:
    """
    A hash table that with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
        self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0
        self.MIN_CAPACITY = 8

    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash
        table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        return len(self.storage)

    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return self.item_count / self.capacity

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """

        # Cast the key to a string and get bytes
        str_key = str(key).encode()

        # Start from an arbitrary large prime
        hash_value = 5381

        # Bit-shift and sum value for each character
        for b in str_key:
            hash_value = ((hash_value << 5) + hash_value) + b
            hash_value &= 0xFFFFFFFF  # DJB2 is a 32-bit hash, only keep 32 bits

        return hash_value

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        between within the storage capacity of the hash table.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        while current_entry is not None and current_entry.key != key:
            current_entry = current_entry.next

        if current_entry is not None:
            current_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            new_entry.next = self.storage[index]
            self.storage[index] = new_entry

        # increment the item count
        self.item_count += 1

        if self.get_load_factor() > 0.7:
            self.resize(self.capacity * 2)

    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]
        last_entry = None

        while current_entry is not None and current_entry.key != key:
            last_entry = current_entry
            current_entry = last_entry.next

        if current_entry is None:
            print("ERROR: Unable to remove the entry with a key of", key)
        else:
            if last_entry is None:
                self.storage[index] = current_entry.next
            else:
                last_entry.next = current_entry.next

            # decrement the item count
            self.item_count -= 1

        # TODO:  resizing?
        if self.get_load_factor() < 0.2:
            # check if capacity is greater than the minimum
            if self.capacity > self.MIN_CAPACITY:
                new_capacity = self.capacity // 2

                if new_capacity < self.MIN_CAPACITY:
                    new_capacity = self.MIN_CAPACITY

            self.resize(new_capacity)

    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        # while the current entry exists
        while current_entry is not None:
            # check if the current entry key is the same as the passed in key
            if current_entry.key == key:
                # return the current entry value
                return current_entry.value
            # traverse to the next entry
            current_entry = current_entry.next

        return None

    def resize(self, new_capacity):  # O(n * k)
        """
        Changes the capacity of the hash table and rehashes all of the key / value pairs
        """
        # hold a ref to storage
        old_storage = self.storage

        # set the new capacity
        self.capacity = new_capacity

        # create a new storage
        self.storage = [None] * self.capacity

        # create a placeholder for current entry
        current_entry = None

        # keep a copy of old item count
        old_item_count = self.item_count

        # itearate over each bucket in old storage
        for bucket_item in old_storage:
            # keep track of current entry
            current_entry = bucket_item

            # while the current entry exisits
            while current_entry is not None:
                # put the current entry key value pair in to the new storage
                self.put(current_entry.key, current_entry.value)
                # traverse to the next entry
                current_entry = current_entry.next

        # restore the old item count
        self.item_count = old_item_count


if __name__ == "__main__":
    ht = HashTable(8)

    ht.put("line_1", "'Twas brillig, and the slithy toves")
    ht.put("line_2", "Did gyre and gimble in the wabe:")
    ht.put("line_3", "All mimsy were the borogoves,")
    ht.put("line_4", "And the mome raths outgrabe.")
    ht.put("line_5", '"Beware the Jabberwock, my son!')
    ht.put("line_6", "The jaws that bite, the claws that catch!")
    ht.put("line_7", "Beware the Jubjub bird, and shun")
    ht.put("line_8", 'The frumious Bandersnatch!"')
    ht.put("line_9", "He took his vorpal sword in hand;")
    ht.put("line_10", "Long time the manxome foe he sought--")
    ht.put("line_11", "So rested he by the Tumtum tree")
    ht.put("line_12", "And stood awhile in thought.")

    print("")

    # Test storing beyond capacity
    for i in range(1, 13):
        print(ht.get(f"line_{i}"))

    # Test resizing
    old_capacity = ht.get_num_slots()
    ht.resize(ht.capacity * 2)
    new_capacity = ht.get_num_slots()

    print(f"\nResized from {old_capacity} to {new_capacity}.\n")

    # Test if data intact after resizing
    for i in range(1, 13):
        print(ht.get(f"line_{i}"))

    print("")

"""# CODE: 8704

# Demo
"""

"""
You are given a non-empty list of words.
Write a function that returns the *k* most frequent elements.
The list that you return should be sorted by frequency from highest to lowest.
If two words have the same frequency, then the word with the lower alphabetical
order should come first.
Example 1:
```plaintext
Input:
words = ["lambda", "school", "rules", "lambda", "school", "rocks"]
k = 2
Output:
["lambda", "school"]
Explanation:
"lambda" and "school" are the two most frequent words.
````

Example 2:

```plaintext
Input:
words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
k = 4
Output:
["the", "is", "cloudy", "sky"]
Explanation:
"the", "is", "cloudy", and "sky" are the four most frequent words. The words
are sorted from highest frequency to lowest.
```

Notes:

-   `k` is always valid: `1 <= k <= number of unique elements.
-   words in the input list only contain lowercase letters.

```
"""


def top_k_frequent(words, k):
    """
    Input:
    words -> List[str]
    k -> int
    Output:
    List[str]
    """
    # Your code here


```

---

```py

# -*- coding: utf-8 -*-
"""Searching.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Od6PSVwt0pqP6Iko09In0reDVftWMK1F

# Searching

- Linear Search
- Binary Search

## Linear Search


## Binary Search



# Recursion
- iteration
- recursive function
- call stack
"""

"""
Searching (Linear)
"""
# O(n)
data = [12, 23, 1, 34, 56, 100]
target = 10

# starting at the beginning of the data
# take each value and compare that value to a target value
# if they are equal return the index of the target value or return the target value
# if we reach the end of the data, without finding the target then we can return -1
def linear_search(data, target):
    for i in range(len(data)):
        if data[i] == target:
            return (i, data[i])
    return -1


print(linear_search(data, target))

"""
Searching (Binary)
"""
# 0 (log(n))
#        0   1   2   3   4    5
data = [12, 23, 45, 67, 99, 200]
target = 99

# keep track of begin and end

# while the begin and end do not overlap
# create a guess index in the middle of the view of data
# check if the data at the guess index is equal to the target
# return (guess_index, guess)
# otherwise is the data at the guess index less than the target
# set the begin to the guess_index + 1
# otherwise
# set end to the guess_index - 1

# if we get here we can not find the target
# return -1
def binary_search(data, target):
    begin = 0
    end = len(data) - 1

    while not end < begin:
        guess_index = (end + begin) // 2

        if data[guess_index] == target:
            return (guess_index, target)
        elif data[guess_index] < target:
            begin = guess_index + 1
        else:
            end = guess_index - 1

    return -1


print(binary_search(data, target))

"""# CODE: 9356"""

ob

"""# Recursive Functionality
Think of a loop and how that actually works. Now lets think about a function and see how that really works

Let's compare the two...
"""

"""
Looping
"""
import time

n = 10
s = []
start = time.time()
while n > 0:  # O(n)
    print(n)
    n -= 1
end = time.time()
print(f"loop runtime = {end - start}")

"""
Recursive Function
"""
import time

n = 10


def while_rec(n):  # O(n)

    if not n > 0:  # O(1)
        return
    print(n)  # O(1)

    while_rec(n - 1)  # O(1)


start = time.time()
while_rec(n)
end = time.time()
print(f"func runtime = {end - start}")

# memoization
# generic memo_func


def memo_func(f):
    cache = {}

    def memo_helper(n):
        if n not in cache:
            cache[n] = f(n)
        return cache[n]

    return memo_helper


"""
[ 0, 1, 1, 2, 3, 5, 8]
fib(n) => fib(n - 1) + fib(n - 2)
2
fib(3) => 1  + 1
fib(2) => 1 + 0
fib(1) => 1
fib(0) => 0
fib(1) => 1
"""
from functools import lru_cache

# import sys
# reclim = sys.getrecursionlimit()
# sys.setrecursionlimit(reclim * 10)
# reclim = sys.getrecursionlimit()
print(reclim)


@lru_cache(maxsize=10000)
def fib(n):
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)


@lru_cache(maxsize=1000000)
def fib2(n):
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)


# fib(46)
# memfib = memo_func(fib)

# memfib(46)
fib(460)


```

---

# Review:

Two words are *[blanagrams](https://en.wikipedia.org/wiki/Blanagram)* if they are [anagrams](keyword://anagram) but exactly one letter has been substituted for another.

Given two words, check if they are *blanagrams* of each other.

Example

-   For `word1 = "tangram"` and `word2 = "anagram"`, the output should be\
    `checkBlanagrams(word1, word2) = true`;

    After changing the first letter `'t'` to `'a'` in the `word1`, the words become anagrams.

-   For `word1 = "tangram"` and `word2 = "pangram"`, the output should be\
    `checkBlanagrams(word1, word2) = true`.

    Since a word is an *anagram* of itself (a so-called *trivial anagram*), we are not obliged to rearrange letters. Only the substitution of a single letter is required for a word to be a *blanagram*, and here `'t'` is changed to `'p'`.

-   For `word1 = "aba"` and `word2 = "bab"`, the output should be\
    `checkBlanagrams(word1, word2) = true`.

    You can take the first letter `'a'` of `word1` and change it to `'b'`, obtaining the word `"bba"`, which is an anagram of `word2 = "bab"`. It is also possible to change the first letter `'b'` of `word2` to `'a'` and obtain `"aab"`, which is an anagram of `word1 = "aba"`.

-   For `word1 = "silent"` and `word2 = "listen"`, the output should be\
    `checkBlanagrams(word1, word2) = false`.

    These two words are *anagrams* of each other, but no letter substitution was made (the trivial substitution of a letter with itself shouldn't be considered), so they are not *blanagrams*.

Input/Output

-   [execution time limit] 4 seconds (py3)

-   [input] string word1

    A string consisting of lowercase letters.

    _Guaranteed constraints:_\
    `1 ≤ word1.length ≤ 100`.

-   [input] string word2

    A string consisting of lowercase letters.

    _Guaranteed constraints:_\
    `word2.length = word1.length`.

-   [output] boolean

    Return `true` if `word1` and `word2` are *blanagrams* of each other, otherwise return `false`.

# My code for the preceding problem was as follows:

```py

def checkBlanagrams(word1, word2):
    lenWord1 = len(word1)
    lenWord2 = len(word2)
    freq1 = [0] * 26
    freq2 = [0] * 26
    count = 0
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord('a')] += 1
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord('a')] += 1
    for i in range(26):
        count += min(freq1[i], freq2[i])
    return count == lenWord1-1 == lenWord2-1
if __name__ == "__main__":
    print(checkBlanagrams('tangram', 'anagram'))


```

## Conventions:

> the length of the words is represented by lenWord1 & lenWord2 respectively....

> freq1 & freq2 are lists of length 26 (corresponding with the length of the alphabet) ... (which we will use to calculate the frequency of each character that occurs in the words)... both are initially populated with the value 0

> count is a variable that stores the number of valid pairs

**The ord() function returns an integer representing the Unicode character.**

#### The loop:

```py
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord('a')] += 1
```

#### will be used to update the frequencies of the characters of string word1

##### Likewise: the second loop shown below will be used to update the frequencies of the characters of string word2.

```py
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord('a')] += 1

```

#### The third loop:

```py
    for i in range(26):
        count += min(freq1[i], freq2[i])
```

#### Is used to update the count of the number of characters in each string that have the same frequency as each other.

#### Finally:

```py
    return count == lenWord1-1 == lenWord2-1
```

### We return the boolean expression evaluating if the number of common characters between the strings is equal to the length of the strings minus the one overlapping string that should differ as per the definition of a Blanagram.

## The only real difficulty I encountered was knowing where to start... as I initially attempted to use python libraries and other builtin functions like zip() ... before settling on doing a fully native implementation.

# Code:

```py
def checkBlanagrams(word1, word2):
    lenWord1 = len(word1)
    lenWord2 = len(word2)
    freq1 = [0] * 26
    freq2 = [0] * 26
    count = 0
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord('a')] += 1
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord('a')] += 1
    for i in range(26):
        count += min(freq1[i], freq2[i])
    return count == lenWord1-1 == lenWord2-1
if __name__ == "__main__":
    print(checkBlanagrams('tangram', 'anagram'))

```

# Time Complexity: O(n1 + n2)

# Space Complexity: O(1)

> here n1 and n2 are the lengths of word1 and word2 respectively...

---

> Some list methods perform the same number of basic operations, irrespective of list size, so use constant time complexity of O(1). For other list methods, the number of operations they perform is proportional to the number of items in the list, so use linear time complexity of O(n).

| Operation       | Example            | Big-O      |
| --------------- | ------------------ | ---------- |
| Index           | list[0]            | O(1)       |
| Store           | list[0] = 0        | O(1)       |
| Append          | list.append(4)     | O(1)       |
| Pop             | list.pop()         | O(1)       |
| Clear           | list.clear()       | O(1)       |
| Length          | len(list)          | O(1)       |
| Pop Index       | list.pop(0)        | O(n)       |
| Remove          | list.remove('x')   | O(n)       |
| Insert          | list.insert(0,'a') | O(n)       |
| Del operator    | del list           | O(n)       |
| Iteration       | for v in list:     | O(n)       |
| Containment     | 'x' in list1       | O(n)       |
| Equality        | list1 == list2     | O(n)       |
| Copy            | list.copy()        | O(n)       |
| Reverse         | list.reverse()     | O(n)       |
| get slice [x:y] | list[a:b]          | O(k)       |
| del slice       | del list[a:b]      | O(n)       |
| set slice       |                    | O(n+k)     |
| concatenate     |                    | O(k)       |
| Sort            | list.sort()        | O(n log n) |
| Multiply        | 5 \* list          | O(k n)     |

Even though there are three loops in my solution none of them are nested and they each scale with the length of the words provided... thus their time complexity reduces to:

# O(n1 + n2) ≈ O(n)

For iterative algorithms we have to consider the variables and the respective abstract (or native) data structures we assign to them. For example declaring an list of size n would add to the space complexity by a factor of O(n)...

### Since we declare lists of a fixed (or constant) length of 26... our space complexity is O(1)

    ---
    ---

## You are given a sorted array in ascending order that is rotated at some unknown pivot (i.e., \`[0,1,2,4,5,6,7]\` might become \`[4,5,6,7,0,1,2]\`) and a target value.

# Write a function that returns the target value's index. If the target value is not present in the array, return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: `nums = [4,5,6,7,0,1,2], target = 0`\
Output: `4`

Example 2:

Input: `nums = [4,5,6,7,0,1,2], target = 3`\
Output: `-1`

-   [execution time limit] 4 seconds (py3)

-   [input] array.integer nums

-   [input] integer target

-   [output] integer

---

---

    ---
    ---

Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

The binary search algorithm breaks the list down in half on every iteration, rather than sequentially combing through the list. On large lists, this method can be really useful.

The time complexity of the binary search algorithm is O(log n). The best-case time complexity would be O(1) when the central index would directly match the desired value. The worst-case scenario could be the values at either extremity of the list or values not in the list.

---# Objective 01 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a linked list

## Overview

What is a linked list, and how is it different from an array? How efficient or inefficient are its operations? What are its strengths and weaknesses? How can I construct and interact with a linked list? By the end of this objective, you will be able to answer all of these questions confidently.

## Follow Along

### Basic Properties of a Linked List

A linked list is a simple, linear data structure used to store a collection of elements. Unlike an array, each element in a linked list does not have to be stored contiguously in memory.

For example, in an array, each element of the list `[43, 32, 63` is stored in memory like so:

![https://tk-assets.lambdaschool.com/61d549f9-9f66-4d1f-9572-2d43098c2767_arrays-stored-in-memory.001.jpeg](https://tk-assets.lambdaschool.com/61d549f9-9f66-4d1f-9572-2d43098c2767_arrays-stored-in-memory.001.jpeg)

`43` is the first item in the collection and is therefore stored in the first slot. `32` is the second item and is stored immediately next to `43` in memory. This pattern continues on and on.

In a linked list, each element of the list could be stored like so:

![https://tk-assets.lambdaschool.com/72151497-7a5e-4940-835c-d8beb9c88922_linked-list-in-memory.001.jpeg](https://tk-assets.lambdaschool.com/72151497-7a5e-4940-835c-d8beb9c88922_linked-list-in-memory.001.jpeg)

You can see here that the elements can be spaced out in memory. Because the elements are not stored contiguously, each element in memory must contain information about the next element in the list. The first item stores the data `43` and the location in memory (`*3`) for the next item in the list. This example is simplified; the second item in the list `32` could be located anywhere in memory. It could even come before the first item in memory.

You might also be wondering what types of data can be stored in a linked list. Pretty much any type of data can be stored in a linked list. Strings, numbers, booleans, and other data structures can be stored. You should not feel limited using a linked list based on what type of data you are trying to store.

Are the elements in a linked list are sorted or unsorted? The elements in a linked list can be either sorted or unsorted. There is nothing about the data structure that forces the elements to be sorted or unsorted. You cannot determine if a linked list's elements are sorted by determining they are stored in a linked list.

What about duplicates? Can a linked list contain them? Linked lists can contain duplicates. There is nothing about the linked list data structure that would prevent duplicates from being stored. When you encounter a linked list, you should know that it can contain duplicates.

Are there different types of linked lists? If so, what are they? There are three types of linked lists: singly linked list (SLL), doubly linked list (DLL), and circular linked list. All linked lists are made up of nodes where each node stores the data and also information about other nodes in the linked list.

Each singly linked list node stores the data and a pointer where the next node in the list is located. Because of this, you can only navigate in the forward direction in a singly linked list. To traverse an SLL, you need a reference to the first node called the head. From the head of the list, you can visit all the other nodes using the next pointers.

The difference between an SLL and a doubly linked list (DLL) is that each node in a DLL also stores a reference to the previous item. Because of this, you can navigate forward and backward in the list. A DLL also usually stores a pointer to the last item in the list (called the tail).

A Circular Linked List links the last node back to the first node in the list. This linkage causes a circular traversal; when you get to the end of the list, the next item will be back at the beginning of the list. Each type of linked list is similar but has small distinctions. When working with linked lists, it's essential to know what type of linked list.

### Time and Space Complexity

#### Lookup

To look up an item by index in a linked list is linear time (`O(n)`). To traverse through a linked list, you have to start with the head reference to the node and then follow each subsequent pointer to the next item in the chain. Because each item in the linked list is not stored contiguously in memory, you cannot access a specific index of the list using simple math. The distance in memory between one item and the next is varied and unknown.

#### Append

Adding an item to a linked list is constant time (`O(1)`). We always have a reference point to the tail of the linked list, so we can easily insert an item after the tail.

#### Insert

In the worst case, inserting an item in a linked list is linear time (`O(n)`). To insert an item at a specific index, we have to traverse --- starting at the head --- until we reach the desired index.

#### Delete

In the worst case, deleting an item in a linked list is linear time (`O(n)`). Just like insertion, deleting an item at a specific index means traversing the list starting at the head.

#### Space

The space complexity of a linked list is linear (`O(n)`). Each item in the linked list will take up space in memory.

### Strengths of a Linked List

The primary strength of a linked list is that operations on the linked list's ends are fast. This is because the linked list always has a reference to the head (the first node) and the tail (the last node) of the list. Because it has a reference, doing anything on the ends is a constant time operation (`O(1)`) no matter how many items are stored in the linked list. Additionally, just like a dynamic array, you don't have to set a capacity to a linked list when you instantiate it. If you don't know the size of the data you are storing, or if the amount of data is likely to fluctuate, linked lists can work well. One benefit over a dynamic array is that you don't have doubling appends. This is because each item doesn't have to be stored contiguously; whenever you add an item, you need to find an open spot in memory to hold the next node.

### Weaknesses of a Linked List

The main weakness of a linked list is not efficiently accessing an "index" in the middle of the list. The only way that the linked list can get to the seventh item in the linked list is by going to the head node and then traversing one node at a time until you arrive at the seventh node. You can't do simple math and jump from the first item to the seventh.

### What data structures are built on linked lists?

Remember that linked lists have efficient operations on the ends (head and tail). There are two structures that only operate on the ends; queues and stacks. So, most queue or stack implementations use a linked list as their underlying data structure.

### Why is a linked list different than an array? What problem does it solve?

We can see the difference between how a linked list and an array are stored in memory, but why is this important? Once you see the problem with the way arrays are stored in memory, the benefits of a linked list become clearer.

The primary problem with arrays is that they hold data contiguously in memory. Remember that having the data stored contiguously is the feature that gives them quick lookups. If I know where the first item is stored, I can use simple math to figure out where the fifth item is stored. The reason that this is a problem is that it means that when you create an array, you either have to know how much space in memory you need to set aside, or you have to set aside a bunch of extra memory that you might not need, just in case you do need it. In other words, you can be space-efficient by only setting aside the memory you need at the moment. But, in doing that, you are setting yourself up for low time efficiency if you run out of room and need to copy all of your elements to a newer, bigger array.

With a linked list, the elements are not stored side-by-side in memory. Each element can be stored anywhere in memory. In addition to storing the data for that element, each element also stores a pointer to the memory location of the next element in the list. The elements in a linked list do not have an index. To get to a specific element in a linked list, you have to start at the head of the linked list and work your way through the list, one element at a time, to reach the specific element you are searching for. Now you can see how a linked list solves some of the problems that the array data structure has.

### How do you represent a linked list graphically and in Python code?

Let's look at how we can represent a singly linked list graphically and in Python code. Seeing a singly linked list represented graphically and in code can help you understand it better.

How do you represent a singly linked list graphically? Let's say you wanted to store the numbers 1, 2, and 3. You would need to create three nodes. Then, each of these nodes would be linked together using the pointers.

![https://tk-assets.lambdaschool.com/baa6486b-9322-481e-95be-c660640c4966_linked-list-graphical-representation.001.jpeg](https://tk-assets.lambdaschool.com/baa6486b-9322-481e-95be-c660640c4966_linked-list-graphical-representation.001.jpeg)

Notice that the last element or node in the linked list does not have a pointer to any other node. This fact is how you know you are at the end of the linked list.

What does a singly linked list implementation look like in Python? Let's start by writing a `LinkedListNode` class for each element in the linked list.

```PY
class LinkedListNode:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
```

Now, we need to build out the class for the `LinkedList` itself:

```PY
class LinkedList:
    def __init__(self, head=None):
        self.head = head
```

Our class is super simple so far and only includes an initialization method. Let's add an `append` method so that we can add nodes to the end of our list:

```PY
class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def append(self, data):
        new_node = LinkedListNode(data)

        if self.head:
            current = self.head

            while current.next:
                current = current.next

            current.next = new_node
         else:
             self.head = new_node
```

Now, let's use our simple class definitions for `LinkedListNode` and `LinkedList` to create a linked list of elements `1`, `2`, and `3`.

```PY
>>> a = LinkedListNode(1)
>>> my_ll = LinkedList(a)
>>> my_ll.append(2)
>>> my_ll.append(3)
>>> my_ll.head.data
1
>>> my_ll.head.next.data
2
>>> my_ll.head.next.next.data
3
>>>
```

You must be able to understand and interact with linked lists. You now know the basic properties and types of linked lists, what makes a linked list different from an array, what problem it solves, and how to represent them both graphically and in code. You now know enough about linked lists that you should be able to solve algorithmic code challenges that require a basic understanding of linked lists.

## Challenge

1.  Draw out a model of a singly-linked list that stores the following integers in order: `3,2,6,5,7,9`.
2.  Draw out a model of a doubly-linked list that stores the following integers in order: `5,2,6,4,7,8`.

## Additional Resources

-   [https://www.cs.cmu.edu/~fp/courses/15122-f15/lectures/10-linkedlist.pdf (Links to an external site.)](https://www.cs.cmu.edu/~fp/courses/15122-f15/lectures/10-linkedlist.pdf)
-   [https://www.youtube.com/watch?v=njTh_OwMljA (Links to an external site.)](https://www.youtube.com/watch?v=njTh_OwMljA)[![](https://lambdaschool.instructure.com/images/play_overlay.png)](https://www.youtube.com/watch?v=njTh_OwMljA)

```py
# -*- coding: utf-8 -*-
"""Linked Lists.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/17MD2e14fi7n95HTvy1K_ttM0FZSYnLmm

# Linked Lists
- Non Contiguous abstract Data Structure
- Value (can be any value for our use we will just use numbers)
- Next (A pointer or reference to the next node in the list)

```

L1 = Node(34) L1.next = Node(45) L1.next.next = Node(90)

# while the current node is not none

# do something with the data

# traverse to next node

L1 = [34]-> [45]-> [90] -> None

Node(45) Node(90)

```py
"""

class LinkedListNode:
  """
    Simple Singly Linked List Node Class
    value -> int
    next -> LinkedListNode
  """
  def __init__(self, value):
    self.value = value
    self.next = None

  def add_node(self, value):
    # set current as a ref to self
    current = self
    # thile there is still more nodes
    while current.next is not None:
      # traverse to the next node
      current = current.next
    # create a new node and set the ref from current.next to the new node
    current.next = LinkedListNode(value)

  def insert_node(self, value, target):
    # create a new node with the value provided
    new_node = LinkedListNode(value)
    # set a ref to the current node
    current = self
    # while the current nodes value is not the target
    while current.value != target:
      # traverse to the next node
      current = current.next
    # set the new nodes next pointer to point toward the current nodes next pointer
    new_node.next = current.next
    # set the current nodes next to point to the new node
    current.next = new_node

ll_storage = []
L1 = LinkedListNode(34)
L1.next = LinkedListNode(45)
L1.next.next = LinkedListNode(90)

def print_ll(linked_list_node):
  current = linked_list_node
  while current is not None:
    print(current.value)
    current = current.next

def add_to_ll_storage(linked_list_node):
  current = linked_list_node
  while current is not None:
    ll_storage.append(current)
    current = current.next

L1.add_node(12)
print_ll(L1)
L1.add_node(24)
print()
print_ll(L1)
print()
L1.add_node(102)
print_ll(L1)
L1.insert_node(123, 90)
print()
print_ll(L1)
L1.insert_node(678, 34)
print()
print_ll(L1)
L1.insert_node(999, 102)
print()
print_ll(L1)

"""# CODE 9571"""

class LinkedListNode:
  """
    Simple Doubly Linked List Node Class
    value -> int
    next -> LinkedListNode
    prev -> LinkedListNode
  """
  def __init__(self, value):
    self.value = value
    self.next = None
    self.prev = None

"""
Given a reference to the head node of a singly-linked list, write a function
that reverses the linked list in place. The function should return the new head
of the reversed list.
In order to do this in O(1) space (in-place), you cannot make a new list, you
need to use the existing nodes.
In order to do this in O(n) time, you should only have to traverse the list
once.
*Note: If you get stuck, try drawing a picture of a small linked list and
running your function by hand. Does it actually work? Also, don't forget to
consider edge cases (like a list with only 1 or 0 elements).*
          cn         p
        None        [1] -> [2] ->[3] -> None


- setup a current variable pointing to the head of the list
- set up a prev variable pointing to None
- set up a next variable pointing to None

- while the current ref is not none
  - set next to the current.next
  - set the current.next to prev
  - set prev to current
  - set current to next

- return prev

"""
class LinkedListNode():
    def __init__(self, value):
        self.value = value
        self.next  = None

def reverse(head_of_list):
  current = head_of_list
  prev = None
  next = None

  while current:
    next = current.next
    current.next = prev
    prev = current
    current = next

  return prev

class HashTableEntry:
    """
    Linked List hash table key/value pair
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

[
 0["Lou", 41] -> ["Bob", 41] -> None,
 1["Steve", 41] -> None,
 2["Jen", 41] -> None,
 3["Dave", 41] -> None,
 4None,
 5["Hector", 34]-> None,
 6["Lisa", 41] -> None,
 7None,
 8None,
 9None
]
class HashTable:
    """
    A hash table that with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
                self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0


    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash
        table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here


    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return len(self.storage)


    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """
        str_key = str(key).encode()

        hash = FNV_offset_basis_64

        for b in str_key:
            hash *= FNV_prime_64
            hash ^= b
            hash &= 0xffffffffffffffff  # 64-bit hash

        return hash


    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        between within the storage capacity of the hash table.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        while current_entry is not None and current_entry.key != key:
            current_entry = current_entry.next

        if current_entry is not None:
            current_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            new_entry.next = self.storage[index]
            self.storage[index] = new_entry


    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here


    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here


```

# Objective 01 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a queue

## Overview

A queue is a data structure that stores its items in a first-in, first-out (FIFO) order. That is precisely why it is called a queue. It functions just like a queue (or a line) would in everyday life. If you are the first to arrive at the check-in desk at a hotel, you will be the first to be served (and therefore, the first person to exit the queue). So, in other words, the items that are added to the queue first are the first items to be removed from the queue.

## Follow Along

### Time and Space Complexity

#### Enqueue

To enqueue an item (add an item to the back of the queue) takes `O(1)` time.

#### Dequeue

To dequeue an item (remove an item from the front of the queue) takes `O(1)` time.

#### Peek

To peek at an item (inspect the item from the front of the queue without removing it) takes `O(1)` time.

#### Space

The space complexity of a queue is linear (`O(n)`). Each item in the queue will take up space in memory.

### Strengths

The primary strength of a queue is that all of its operations are fast (take `O(1)` time).

### Weaknesses

There are no weaknesses in this data structure. The reason is that it is a very targeted data structure designed to do a few things well.

### When are queues useful?

Queues are useful data structures in any situation where you want to make sure things are processes in a FIFO order. Think of a web server. The server might be trying to service thousands of page requests per minute. It would make the most sense for the server to process and respond to the requests in the same order that they were received. That way, the first client to request a page is the first client to receive a response. Also, you'll learn soon enough about traversing hierarchical data structures. One of the ways you do that is called a breadth-first traversal. To conduct a breadth-first traversal, a queue can be used.

## Challenge

1.  In your own words, explain the strengths of a queue data structure.
2.  If a queue only allows operations at the ends (front and back), what other data structure would be a perfect one to build the queue?

## Additional Resources

-   [https://www.geeksforgeeks.org/queue-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/queue-data-structure/)

---

---

# Objective 02 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a stack

## Overview

A stack data structure handles information in a last-in, first-out order. This means that the last item added to the storage will be the first item removed from the storage. A stack is like having a paper tray inbox on your desk. Anytime a person walks by and drops a piece of paper or a letter in your inbox, it will go on the top of your inbox. So, when you process your inbox, the first item you would remove from the top of the stack of papers would be the last item added to it.

## Follow Along

### Time and Space Complexity

#### Push

To push an item (add an item to the top of the stack) takes `O(1)` time.

#### Pop

To pop an item (remove an item from the top of the stack) takes `O(1)` time.

#### Peek

To peek at an item (inspect the item from the top of the stack without removing it) takes `O(1)` time.

#### Space

The space complexity of a stack is linear (`O(n)`). Each item in the stack will take up space in memory.

### Strengths

The primary strength of a stack is that all of its operations are fast (take `O(1)` time).

### Weaknesses

There are no weaknesses in this data structure. The reason is that it is a very targeted data structure designed to do a few things well.

### When are stacks useful?

Stacks can be useful in any situation where you desire a LIFO order. One common use-case is for parsing strings. Let's say you wanted to parse a string to ensure that all the parentheses in your string are correctly nested. A stack could be useful for this. When you encounter an opening parenthesis, you add it to the stack. When you encounter a closing parenthesis, you remove the top opening parenthesis from the stack. After going through all the characters in the string, the stack should be empty. If it isn't or if you try to remove an item from an empty stack, you'll know that the parentheses were not correctly nested.

Additionally, function calls and execution contexts are managed on a call stack. When you call a function, it's added to the call stack. When it returns, it gets popped off of the stack. Last, an iterative depth-first-search can be done using a stack.

## Challenge

1.  In your own words, explain the strengths of a stack data structure.
2.  What two data structures would work well for implementing a stack?

## Additional Resources

-   [https://www.geeksforgeeks.org/stack-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure/)

---

---

# Objective 03 - Implement a queue using a linked list

## Overview

To implement a queue, we need to maintain two pointers. One pointer will point at the front (the first item) of the queue, and another pointer will point at the rear (the last item) of the queue.

Additionally, we need to have two methods available: `enqueue()` and `dequeue()`. `enqueue()` adds a new item after the rear. `dequeue()` removes the front node and resets the front pointer to the next node.

## Follow Along

We will use a `LinkedListNode` class for each of the items in the queue.

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None
```

For our `Queue` class, we first need to define an `__init__` method. This method should initialize our instance variables `front` and `rear`.

```PY
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
```

Next, we need to define our `enqueue` method:

```PY
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
    def enqueue(self, item):
        new_node = LinkedListNode(item)
        # check if queue is empty
        if self.rear is None:
            self.front = new_node
            self.rear = new_node
        else:
            # add new node to rear
            self.rear.next = new_node
            # reassign rear to new node
            self.rear = new_node
```

Now, we need to define our `dequeue` method:

```PY
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
    def enqueue(self, item):
        new_node = LinkedListNode(item)
        # check if queue is empty
        if self.rear is None:
            self.front = new_node
            self.rear = new_node
        else:
            # add new node to rear
            self.rear.next = new_node
            # reassign rear to new node
            self.rear = new_node
    def dequeue(self):
        # check if queue is empty
        if self.front is not None:
            # keep copy of old front
            old_front = self.front
            # set new front
            self.front = old_front.next

        # check if the queue is now empty
        if self.front is None:
            # make sure rear is also None
            self.rear = None

        return old_front
```

Now we have a `Queue` class that uses a singly-linked list as the underlying data structure.

## Challenge

## Additional Resources

-   <https://www.geeksforgeeks.org/queue-linked-list-implementation/>

---

---

# Objective 04 - Implement a stack using a dynamic array

## Overview

There are two common ways to implement a stack. One is by using a linked list, and the other is by using a dynamic array. Both of these implementations work well.

In the implementation that uses a dynamic array (a list in Python), the `push` method appends to the array, and the `pop` method removes the last element from the array.

## Follow Along

First we need to define our `Stack` class and define the `__init__` method:

```PY
class Stack:
    def __init__(self):
        self.data = []
```

Now we need to define a `push` method to add an item to the top of our stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)
```

Next, we need to define a `pop` method to remove the top item from the stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"
```

## Challenge

## Additional Resources

-   [https://www.geeksforgeeks.org/stack-data-structure-introduction-program/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)

---

---

Immersive Reader

# Objective 04 - Implement a stack using a dynamic array

## Overview

There are two common ways to implement a stack. One is by using a linked list, and the other is by using a dynamic array. Both of these implementations work well.

In the implementation that uses a dynamic array (a list in Python), the `push` method appends to the array, and the `pop` method removes the last element from the array.

## Follow Along

First we need to define our `Stack` class and define the `__init__` method:

```PY
class Stack:
    def __init__(self):
        self.data = []
```

Now we need to define a `push` method to add an item to the top of our stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)
```

Next, we need to define a `pop` method to remove the top item from the stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"
```

## Challenge

## Additional Resources

-   [https://www.geeksforgeeks.org/stack-data-structure-introduction-program/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)

---

---

# Objective 05 - Implement a stack using a linked list

## Overview

There are two common ways to implement a stack. One is by using a linked list, and the other is by using a dynamic array. Both of these implementations work well.

In the implementation that uses a linked list, the `push` method inserts a new node at the linked list's head, and the `pop` method removes the node at the linked list's head.

## Follow Along

First, let's define our `Stack` class and its `__init__` method:

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
```

Now we need to define our `push` method to add items to the top of the stack.

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        # create new node with data
        new_node = LinkedListNode(data)
        # set current top to new node's next
        new_node.next = self.top
        # reset the top pointer to the new node
        self.top = new_node
```

Next, we need to define our `pop` method to get items off the top of our stack.

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        # create new node with data
        new_node = LinkedListNode(data)
        # set current top to new node's next
        new_node.next = self.top
        # reset the top pointer to the new node
        self.top = new_node

    def pop(self):
        # make sure stack is not empty
        if self.top is not None:
            # store popped node
            popped_node = self.top
            # reset top pointer to next node
            self.top = popped_node.next
            # return the value from the popped node
            return popped_node.data
```

## Challenge

## Additional Resources

-   [https://www.geeksforgeeks.org/stack-data-structure-introduction-program/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)

# Objective 01 - Describe the properties of a binary tree and the properties of a "perfect" tree

## Overview

There are lots of different types of tree data structures. A binary tree is a specific type of tree. It is called a binary tree because each node in the tree can only have a maximum of two child nodes. It is common for a node's children to be called either `left` or `right`. Here is an example of a what a class for a binary tree node might look like:

```PY
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

## Follow Along

With this simple class, we can now build up a structure that could be visualized like so: ![https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png](https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png)

### "Perfect" Trees

A "perfect" tree has all of its levels full. This means that there are not any missing nodes in each level. "Perfect" trees have specific properties. First, the quantity of each level's nodes doubles as you go down. ![https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png](https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png) Second, the quantity of the last level's nodes is the same as the quantity of all the other nodes plus one. These properties are useful for understanding how to calculate the *height* of a tree. The height of a tree is the number of levels that it contains. Based on the properties outlined above, we can deduce that we can calculate the tree's height with the following formula: ![log_2(n+1) = h](<https://i.upmath.me/svg/log_2(n%2B1)%20%3D%20h>) In the formula above, `n` is the total number of nodes. If you know the tree's height and want to calculate the total number of nodes, you can do so with the following formula: ![n = 2^h - 1](https://i.upmath.me/svg/n%20%3D%202%5Eh%20-%201) We can represent the relationship between a perfect binary tree's total number of nodes and its height because of the properties outlined above. Challenge

---

1.  Calculate how many levels a perfect binary tree has given that the total number of nodes is 127.
2.  Calculate the total number of nodes on a perfect binary tree, given that the tree's height is 8. Additional Resources

---

-   [https://en.wikipedia.org/wiki/Binary_tree (Links to an external site.)](https://en.wikipedia.org/wiki/Binary_tree)
-   [https://www.geeksforgeeks.org/binary-tree-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-tree-data-structure/)

---

---

# Objective 02 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a binary search tree

## Overview

Just like a binary tree is a specific type of tree, a binary search tree (BST) is a specific type of binary tree. A binary search tree is just like a binary tree, except it follows specific rules about how it orders the nodes contained within it. For each node in the BST, all the nodes to the left are smaller, and all the nodes to the right of it are larger. We can call a binary search tree balanced if the heights of its left and right subtrees differ by at most one, and both of the subtrees are also balanced. ![https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083_binary-tree-example-balanced-unbalanced.001.png](https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083_binary-tree-example-balanced-unbalanced.001.png) Follow Along

---

### Time and Space Complexity

#### Lookup

If a binary search tree is balanced, then a lookup operation's time complexity is logarithmic (`O(log n)`). If the tree is unbalanced, the time complexity can be linear (`O(n)`) in the worst possible case (virtually a linear chain of nodes will have all the nodes on one side of the tree).

#### Insert

If a binary search tree is balanced, then an insertion operation's time complexity is logarithmic (`O(log n)`). If the tree is entirely unbalanced, then the time complexity is linear (`O(n)`) in the worst case.

#### Delete

If a binary search tree is balanced, then a deletion operation's time complexity is logarithmic (`O(log n)`). If the tree is entirely unbalanced, then the time complexity is linear (`O(n)`) in the worst case.

#### Space

The space complexity of a binary search tree is linear (`O(n)`). Each node in the binary search tree will take up space in memory.

### Strengths

One of the main strengths of a BST is that it is sorted by default. You can pull out the data in order by using an in-order traversal. BSTs also have efficient searches (`O(log n)`). They have the same efficiency for their searches as a sorted array; however, BSTs are faster with insertions and deletions. In the average-case, dictionaries have more efficient operations than BSTs, but a BST has more efficient operations in the worst-case.

### Weaknesses

The primary weakness of a BST is that they only have efficient operations if they are balanced. The more unbalanced they are, the worse the efficiency of their operations gets. Another weakness is that they are don't have stellar efficiency in any one operation. They have good efficiency for a lot of different operations. So, they are more of a general-purpose data structure. If you want to learn more about trees that automatically rearrange their nodes to remain balanced, look into [AVL trees (Links to an external site.)](https://en.wikipedia.org/wiki/AVL_tree) or [Red-Black trees (Links to an external site.)](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) Challenge

---

1.  In your own words, explain why an unbalanced binary search tree's performance becomes degraded. Additional Resources

---

-   [https://www.geeksforgeeks.org/binary-search-tree-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-search-tree-data-structure/)
-   [https://en.wikipedia.org/wiki/Binary_search_tree (Links to an external site.)](https://en.wikipedia.org/wiki/Binary_search_tree)

---

---

---

---

# Objective 03 - Construct a binary search tree that can perform basic operations with a logarithmic time complexity

## Overview

To create a binary search tree, we need to define two different classes: one for the nodes that will make up the binary search tree and another for the tree itself. Follow Along

---

Let's start by creating a `BSTNode` class. An instance of `BSTNode` should have a `value`, a `right` node, and a `left` node.

```PY
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

Now that we have our basic `BSTNode` class defined with an initialization method let's define our `BST` class. This class will have an initialization method and an `insert` method.

```PY
class BST:
    def __init__(self, value):
        self.root = BSTNode(value)
    def insert(self, value):
        self.root.insert(value)
```

Notice that our `BST` class expects each `BSTNode` to have an `insert` method available on an instance object. But, we haven't yet added an `insert` method on the `BSTNode` class. Let's do that now.

```PY
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)
```

Now that we can insert nodes into our binary search tree let's define a `search` method that can lookup values in our binary search tree.

```PY
class BST:
    def __init__(self, value):
        self.root = BSTNode(value)
    def insert(self, value):
        self.root.insert(value)
    def search(self, value):
        self.root.search(value)
```

Our `BST` class expects there to be a `search` method available on the `BSTNode` instance stored at the root. Let's go ahead and define that now.

```PY
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)
    def search(self, target):
        if self.value == target:
            return self
        elif target < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(target)
        else:
            if self.right is None:
                return False
            else:
                return self.right.search(target)
```

## Challenge

To implement a `delete` operation on our `BST` and `BSTNode` classes, we must consider three cases:

1.  If the `BSTNode` to be deleted is a leaf (has no children), we can remove that node from the tree.
2.  If the `BSTNode` to be deleted has only one child, we copy the child node to be deleted and delete it.
3.  If the `BSTNode` to be deleted has two children, we have to find the "in-order successor". The "in-order successor" is the next highest value, the node that has the minimum value in the right subtree. Given the above information, can you write pseudocode for a method that can find the *minimum value* of all the nodes within a tree or subtree? Additional Resources

---

-   [https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)
-   [https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)

---

# Objective 01 - Recall the different traversal types for a binary tree and implement a function to complete the traversal for each type

## Overview

There is only one way to traverse linear data structures like arrays, linked lists, queues, and stacks. The linear nature of the structure itself forces a particular type of traversal.

However, with hierarchical structures like trees, there are multiple ways that you can traverse the stored data. There are two primary categories for tree traversals:

1.  Depth-First
2.  Breadth-First

Furthermore, there are three different types of depth-first traversals:

1.  Inorder
2.  Preorder
3.  Postorder

Let's dive deeper into each of the traversal types.

## Follow Along

### Depth-First Inorder Traversal

Let's first look at an inorder depth-first traversal of a binary tree. In this traversal, we start at the tree's root node and complete the following steps recursively:

1.  Go to the left subtree
2.  Visit node
3.  Go to the right subtree

Notice that we don't actually "visit" a node until we've already gone to the left subtree. In the animation below, the "going" is denoted by changing the color to a light grey. The actual visiting is represented when it turns red. The base cases in the recursion are when there is no left or right subtree to visit.

![https://tk-assets.lambdaschool.com/4b1680ed-3b4b-4fcf-ba97-bbfe54f5d066_depth-first-inorder-traversal.gif](https://tk-assets.lambdaschool.com/4b1680ed-3b4b-4fcf-ba97-bbfe54f5d066_depth-first-inorder-traversal.gif)

Here is one possible way to code a depth-first inorder traversal in Python:

```PY
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def helper(root, res):
    if root is None:
        return
    helper(root.left, res)
    res.append(root.val)
    helper(root.right, res)

def inorder_traversal(root):
    result = []
    helper(root, result)
    return result
```

### Depth-First Preorder Traversal

This traversal type is very similar to an inorder traversal except that the three steps' order is slightly different. Notice that in this traversal, we "visit" the node (denoted in the visualization below by the node turning red) before we recurse to the left subtree (we represent the recursive call by turning the node grey in the visualization below). In the inorder traversal above, we recursed to the left subtree before visiting the node.

1.  Visit the node
2.  Go to the left subtree
3.  Go to the right subtree

Below is the visualization for how this would type of traversal would look.

![https://tk-assets.lambdaschool.com/c44685b7-b6f7-4214-ba85-226ca56e8042_depth-first-preorder-traversal.gif](https://tk-assets.lambdaschool.com/c44685b7-b6f7-4214-ba85-226ca56e8042_depth-first-preorder-traversal.gif)

Here is one possible way to code a depth-first preorder traversal in Python:

```PY
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def helper(root, res):
    if root is None:
        return
    res.append(root.val)
    helper(root.left, res)
    helper(root.right, res)

def preorder_traversal(root):
    result = []
    helper(root, result)
    return result
```

Notice that the only difference between the code above for preorder traversal and the example for inorder traversal is that in the preorder traversal code, we append the node's value to the result before we recurse to the left.

### Depth-First Postorder Traversal

This traversal type is very similar to our other traversals except that the three steps' order is slightly different. Notice that in this traversal, we "visit" the node (denoted in the visualization below by the node turning red) after we recurse to the left subtree (we represent the recursive call by turning the node grey in the visualization below) and the right subtree.

1.  Go to the left subtree
2.  Go to the right subtree
3.  Visit node

Below is the visualization for how this would type of traversal would look.

![https://tk-assets.lambdaschool.com/41bc2877-94d4-4103-885b-c396bec4832a_depth-first-postorder-traversal.gif](https://tk-assets.lambdaschool.com/41bc2877-94d4-4103-885b-c396bec4832a_depth-first-postorder-traversal.gif)

Here is one possible way to code a depth-first postorder traversal in Python:

```PY
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def helper(root, res):
    if root is None:
        return
    helper(root.left, res)
    helper(root.right, res)
    res.append(root.val)

def postorder_traversal(root):
    result = []
    helper(root, result)
    return result
```

Notice that the only difference between the code above for postorder traversal and the other examples is that in this version, we append the node's value to the result only after we've already recursed to the left and right subtrees.

### Breadth-First (Level Order) Traversal

In a breadth-first traversal, we visit all the nodes at the same level (same distance from the root node) before going on to the next level.

A breadth-first traversal and a level order traversal are the same things. However, a breadth-first traversal can be done on any hierarchical data structure like trees and graphs. But, a level order traversal refers only to the traversal of a tree. Graphs do not have levels like trees do, so that term would not make sense.

A breadth-first traversal is a little different than the depth-first traversals we've gone over. We cannot merely use the recursive call stack to keep track of where we are in the tree. Instead, we must use a queue to keep track of what nodes we should visit. Remember that a queue data structure follows a first-in-first-out (FIFO) access order.

Below is a visualization for a breadth-first traversal.

![https://tk-assets.lambdaschool.com/671a11b7-acee-4b16-9452-d42f3b69a24e_breadth-first-traversal.gif](https://tk-assets.lambdaschool.com/671a11b7-acee-4b16-9452-d42f3b69a24e_breadth-first-traversal.gif)

Here is one way that you could code a breadth-first (level order) traversal in Python:

```PY
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def breadth_first_traversal(root):
    if root is None:
        return []

    result = []
    queue = []
    queue.append(root)

    while len(queue) != 0:
        node = queue.pop(0)
        result.append(node.val)

        if node.left is not None:
            queue.append(node.left)

        if node.right is not None:
            queue.append(node.right)

    return result
```

## Challenge

1.  What data structure could you use to write an *iterative* depth-first traversal method?
2.  In your own words, explain how a depth-first traversal and a breadth-first traversal are different?

## Additional Resources

-   [https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/ (Links to an external site.)](https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/)
-   [https://www.geeksforgeeks.org/level-order-tree-traversal/ (Links to an external site.)](https://www.geeksforgeeks.org/level-order-tree-traversal/)
