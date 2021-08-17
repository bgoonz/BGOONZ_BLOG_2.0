---
title: Python & Data Structures
weight: 0
excerpt: lorem-ipsum
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
| :-: | :-- |

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

- **PEP8** : Python Enhancement Proposals, style-guide for Python.
- `print` is the equivalent of `console.log`.

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

- Python has three types of numbers:

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

- **Type Casting** : The process of converting one number to another.

```text
# Using Float
print(17)               # => 17
print(float(17))        # => 17.0# Using Int
print(17.0)             # => 17.0
print(int(17.0))        # => 17# Using Str
print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

**The arithmetic operators are the same between JS and Python, with two additions:**

- _“\*\*” : Double asterisk for exponent._
- _“//” : Integer Division._
- **There are no spaces between math operations in Python.**
- **Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.**
- **There are no `++` and `-` in Python, the only shorthand operators are:**

## **Strings**

- Python uses both single and double quotes.
- You can escape strings like so `'Jodi asked, "What\\'s up, Sam?"'`
- Multiline strings use triple quotes.

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

- Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _\(mind you that in JS … strings are wrapped in an object \(under the hood\)… upon which the string methods are actually called. As a immutable privative type **by textbook definition**, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.\)_

```text
print(“Spaghetti”[1:4]) # => pag
print(“Spaghetti”[4:-1]) # => hett
print(“Spaghetti”[4:4]) # => (empty string)
```

- The end range is exclusive just like `slice` in JS.

```text
# Shortcut to get from the beginning of a string to a certain index.
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett# Shortcut to get from a certain index to the end of a string.
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti
```

- The `index` string function is the equiv. of `indexOf()` in JS

```text
print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6
```

- The `count` function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.

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

- **You can use `+` to concatenate strings, just like in JS.**
- **You can also use “\*” to repeat strings or multiply strings.**
- **Use the `format()` function to use placeholders in a string to input values later on.**

```text
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

- _Shorthand way to use format function is:_`print(f'Your name is {first_name} {last_name}')`

### **Some useful string methods.**

- **Note that in JS `join` is used on an Array, in Python it is used on String.**

![https://miro.medium.com/max/630/0*eE3E5H0AoqkhqK1z.png](https://miro.medium.com/max/630/0*eE3E5H0AoqkhqK1z.png)

- There are also many handy testing methods.

![https://miro.medium.com/max/630/0*Q0CMqFd4PozLDFPB.png](https://miro.medium.com/max/630/0*Q0CMqFd4PozLDFPB.png)

## **Variables and Expressions**

- **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.
- Duck Typing is the fundamental approach of Python.
- Assignment of a value automatically declares a variable.

```text
a = 7
b = 'Marbles'
print(a)         # => 7
print(b)         # => Marbles
```

- _**You can chain variable assignments to give multiple var names the same value.**_

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

- _`NaN` does not exist in Python, but you can 'create' it like so:**`print(float("nan"))`**_
- _Python replaces `null` with `none`._
- _**`none` is an object** and can be directly assigned to a variable._

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

## **Boolean Data Type**

- One of the biggest benefits of Python is that it reads more like English than JS does.

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

- By default, Python considers an object to be true UNLESS it is one of the following:
- Constant `None` or `False`
- Zero of any numeric type.
- Empty Sequence or Collection.
- `True` and `False` must be capitalized

## **Comparison Operators**

- Python uses all the same equality operators as JS.
- In Python, equality operators are processed from left to right.
- Logical operators are processed in this order:

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

- In the Python community it is better to use `is` and `is not` over `==` or `!=`

**If Statements**

`if name == 'Monica': print('Hi, Monica.')if name == 'Monica': print('Hi, Monica.')else: print('Hello, stranger.')if name == 'Monica': print('Hi, Monica.')elif age < 12: print('You are not Monica, kiddo.')elif age > 2000: print('Unlike you, Monica is not an undead, immortal vampire.')elif age > 100: print('You are not Monica, grannie.')`_Remember the order of `elif` statements matter._

## **While Statements**

```text
spam = 0
while spam < 5:
  print('Hello, world.')
  spam = spam + 1
```

- `Break` statement also exists in Python.

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break
```

- As are `continue` statements

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

- Python equivalent to `try/catch`

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

- You can name an error to give the output more specificity.

```text
a = 100
b = 0
try:
    c = a / b
except ZeroDivisionError:
    c = None
print(c)
```

- You can also use the `pass` commmand to by pass a certain error.

```text
a = 100
b = 0
try:
    print(a / b)
except ZeroDivisionError:
    pass
```

- The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:

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

- You can use an `else` statement to end a chain of `except` statements.

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

- `finally` is used at the end to clean up all actions under any circumstance.

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

- Using duck typing to check to see if some value is able to use a certain method.

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

- Pass Keyword is required to write the JS equivalent of :

```text
if (true) {
}while (true) {}if True:
  passwhile True:
  pass
```

## **Functions**

- **Function definition includes:**
- **The `def` keyword**
- **The name of the function**
- **A list of parameters enclosed in parentheses.**
- **A colon at the end of the line.**
- **One tab indentation for the code to run.**
- **You can use default parameters just like in JS**

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

- _You can specify arguments by name without destructuring in Python._

```text
def greeting(name, saying="Hello"):
    print(saying, name)# name has no default value, so just provide the value
# saying has a default value, so use a keyword argument
greeting("Monica", saying="Hi")
```

- The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

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

- args

_keyword args with default values_

- \*kwargs

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

## Built-in Functions

The Python interpreter has a number of functions and types built into it that are always available. They are listed here in alphabetical order.

[Builtin Methods](https://www.notion.so/f133bdfd160d419b80d2028341628263)

**`abs`**\(_x_\)Return the absolute value of a number. The argument may be an integer, a floating point number, or an object implementing `[__abs__()](<https://docs.python.org/3/reference/datamodel.html#object.__abs__>)`. If the argument is a complex number, its magnitude is returned.

**`all`**\(_iterable_\)Return `True` if all elements of the _iterable_ are true \(or if the iterable is empty\). Equivalent to:

\*\*`def** all(iterable): **for** element **in** iterable: **if** **not** element: **return** **Falsereturn** **True**`

**`any`**\(_iterable_\)Return `True` if any element of the _iterable_ is true. If the iterable is empty, return `False`. Equivalent to:

\*\*`def** any(iterable): **for** element **in** iterable: **if** element: **return** **Truereturn** **False**`

**`ascii`**\(_object_\)As `[repr()](<https://docs.python.org/3/library/functions.html#repr>)`, return a string containing a printable representation of an object, but escape the non-ASCII characters in the string returned by `[repr()](<https://docs.python.org/3/library/functions.html#repr>)` using `\\x`, `\\u` or `\\U` escapes. This generates a string similar to that returned by `[repr()](<https://docs.python.org/3/library/functions.html#repr>)` in Python 2.

**`bin`**\(_x_\)Convert an integer number to a binary string prefixed with “0b”. The result is a valid Python expression. If _x_ is not a Python `[int](<https://docs.python.org/3/library/functions.html#int>)` object, it has to define an `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` method that returns an integer. Some examples:&gt;&gt;&gt;

\*\*`>>>** bin(3) '0b11' **>>>** bin(-10) '-0b1010'`

If prefix “0b” is desired or not, you can use either of the following ways.&gt;&gt;&gt;

\*\*`>>>** format(14, '#b'), format(14, 'b') ('0b1110', '1110') **>>>** f'*{*14*:*#b*}*', f'*{*14*:*b*}*' ('0b1110', '1110')`

See also `[format()](<https://docs.python.org/3/library/functions.html#format>)` for more information.

_class_ **`bool`**\(\[_x_\]\)Return a Boolean value, i.e. one of `True` or `False`. _x_ is converted using the standard [truth testing procedure](https://docs.python.org/3/library/stdtypes.html#truth). If _x_ is false or omitted, this returns `False`; otherwise it returns `True`. The `[bool](<https://docs.python.org/3/library/functions.html#bool>)` class is a subclass of `[int](<https://docs.python.org/3/library/functions.html#int>)` \(see [Numeric Types — int, float, complex](https://docs.python.org/3/library/stdtypes.html#typesnumeric)\). It cannot be subclassed further. Its only instances are `False` and `True` \(see [Boolean Values](https://docs.python.org/3/library/stdtypes.html#bltin-boolean-values)\). _Changed in version 3.7: x_ is now a positional-only parameter.

**`breakpoint`**\(\*_args_, \*\*_kws_\)This function drops you into the debugger at the call site. Specifically, it calls `[sys.breakpointhook()](<https://docs.python.org/3/library/sys.html#sys.breakpointhook>)`, passing `args` and `kws` straight through. By default, `sys.breakpointhook()` calls `[pdb.set_trace()](<https://docs.python.org/3/library/pdb.html#pdb.set_trace>)` expecting no arguments. In this case, it is purely a convenience function so you don’t have to explicitly import `[pdb](<https://docs.python.org/3/library/pdb.html#module-pdb>)` or type as much code to enter the debugger. However, `[sys.breakpointhook()](<https://docs.python.org/3/library/sys.html#sys.breakpointhook>)` can be set to some other function and `[breakpoint()](<https://docs.python.org/3/library/functions.html#breakpoint>)` will automatically call that, allowing you to drop into the debugger of choice. Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `builtins.breakpoint` with argument `breakpointhook`. _New in version 3.7._

_class_ **`bytearray`**\(\[_source_\[, _encoding_\[, _errors_\]\]\]\)Return a new array of bytes. The `[bytearray](<https://docs.python.org/3/library/stdtypes.html#bytearray>)` class is a mutable sequence of integers in the range 0 &lt;= x &lt; 256. It has most of the usual methods of mutable sequences, described in [Mutable Sequence Types](https://docs.python.org/3/library/stdtypes.html#typesseq-mutable), as well as most methods that the `[bytes](<https://docs.python.org/3/library/stdtypes.html#bytes>)` type has, see [Bytes and Bytearray Operations](https://docs.python.org/3/library/stdtypes.html#bytes-methods). The optional _source_ parameter can be used to initialize the array in a few different ways: • If it is a _string_, you must also give the _encoding_ \(and optionally, _errors_\) parameters; `[bytearray()](<https://docs.python.org/3/library/stdtypes.html#bytearray>)` then converts the string to bytes using `[str.encode()](<https://docs.python.org/3/library/stdtypes.html#str.encode>)`. • If it is an _integer_, the array will have that size and will be initialized with null bytes. • If it is an object conforming to the [buffer interface](https://docs.python.org/3/c-api/buffer.html#bufferobjects), a read-only buffer of the object will be used to initialize the bytes array. • If it is an _iterable_, it must be an iterable of integers in the range `0 <= x < 256`, which are used as the initial contents of the array. Without an argument, an array of size 0 is created. See also [Binary Sequence Types — bytes, bytearray, memoryview](https://docs.python.org/3/library/stdtypes.html#binaryseq) and [Bytearray Objects](https://docs.python.org/3/library/stdtypes.html#typebytearray).

_class_ **`bytes`**\(\[_source_\[, _encoding_\[, _errors_\]\]\]\)Return a new “bytes” object, which is an immutable sequence of integers in the range `0 <= x < 256`. `[bytes](<https://docs.python.org/3/library/stdtypes.html#bytes>)` is an immutable version of `[bytearray](<https://docs.python.org/3/library/stdtypes.html#bytearray>)` – it has the same non-mutating methods and the same indexing and slicing behavior. Accordingly, constructor arguments are interpreted as for `[bytearray()](<https://docs.python.org/3/library/stdtypes.html#bytearray>)`. Bytes objects can also be created with literals, see [String and Bytes literals](https://docs.python.org/3/reference/lexical_analysis.html#strings). See also [Binary Sequence Types — bytes, bytearray, memoryview](https://docs.python.org/3/library/stdtypes.html#binaryseq), [Bytes Objects](https://docs.python.org/3/library/stdtypes.html#typebytes), and [Bytes and Bytearray Operations](https://docs.python.org/3/library/stdtypes.html#bytes-methods).

**`callable`**\(_object_\)Return `[True](<https://docs.python.org/3/library/constants.html#True>)` if the _object_ argument appears callable, `[False](<https://docs.python.org/3/library/constants.html#False>)` if not. If this returns `True`, it is still possible that a call fails, but if it is `False`, calling _object_ will never succeed. Note that classes are callable \(calling a class returns a new instance\); instances are callable if their class has a `[__call__()](<https://docs.python.org/3/reference/datamodel.html#object.__call__>)` method. _New in version 3.2:_ This function was first removed in Python 3.0 and then brought back in Python 3.2.

**`chr`**\(_i_\)Return the string representing a character whose Unicode code point is the integer _i_. For example, `chr(97)` returns the string `'a'`, while `chr(8364)` returns the string `'€'`. This is the inverse of `[ord()](<https://docs.python.org/3/library/functions.html#ord>)`. The valid range for the argument is from 0 through 1,114,111 \(0x10FFFF in base 16\). `[ValueError](<https://docs.python.org/3/library/exceptions.html#ValueError>)` will be raised if _i_ is outside that range.

`@**classmethod**`Transform a method into a class method. A class method receives the class as implicit first argument, just like an instance method receives the instance. To declare a class method, use this idiom:

\*\*`class** **C**: **@classmethoddef** f(cls, arg1, arg2, ...): ...`

The `@classmethod` form is a function [decorator](https://docs.python.org/3/glossary.html#term-decorator) – see [Function definitions](https://docs.python.org/3/reference/compound_stmts.html#function) for details. A class method can be called either on the class \(such as `C.f()`\) or on an instance \(such as `C().f()`\). The instance is ignored except for its class. If a class method is called for a derived class, the derived class object is passed as the implied first argument. Class methods are different than C++ or Java static methods. If you want those, see `[staticmethod()](<https://docs.python.org/3/library/functions.html#staticmethod>)` in this section. For more information on class methods, see [The standard type hierarchy](https://docs.python.org/3/reference/datamodel.html#types). _Changed in version 3.9:_ Class methods can now wrap other [descriptors](https://docs.python.org/3/glossary.html#term-descriptor) such as `[property()](<https://docs.python.org/3/library/functions.html#property>)`.

**`compile`**\(_source_, _filename_, _mode_, _flags=0_, _dont_inherit=False_, _optimize=-1_\)Compile the _source_ into a code or AST object. Code objects can be executed by `[exec()](<https://docs.python.org/3/library/functions.html#exec>)` or `[eval()](<https://docs.python.org/3/library/functions.html#eval>)`. _source_ can either be a normal string, a byte string, or an AST object. Refer to the `[ast](<https://docs.python.org/3/library/ast.html#module-ast>)` module documentation for information on how to work with AST objects. The _filename_ argument should give the file from which the code was read; pass some recognizable value if it wasn’t read from a file \(`'<string>'` is commonly used\). The _mode_ argument specifies what kind of code must be compiled; it can be `'exec'` if _source_ consists of a sequence of statements, `'eval'` if it consists of a single expression, or `'single'` if it consists of a single interactive statement \(in the latter case, expression statements that evaluate to something other than `None` will be printed\). The optional arguments _flags_ and _dont_inherit_ control which [compiler options](https://docs.python.org/3/library/ast.html#ast-compiler-flags) should be activated and which [future features](https://docs.python.org/3/reference/simple_stmts.html#future) should be allowed. If neither is present \(or both are zero\) the code is compiled with the same flags that affect the code that is calling `[compile()](<https://docs.python.org/3/library/functions.html#compile>)`. If the _flags_ argument is given and _dont_inherit_ is not \(or is zero\) then the compiler options and the future statements specified by the _flags_ argument are used in addition to those that would be used anyway. If _dont_inherit_ is a non-zero integer then the _flags_ argument is it – the flags \(future features and compiler options\) in the surrounding code are ignored. Compiler options and future statements are specified by bits which can be bitwise ORed together to specify multiple options. The bitfield required to specify a given future feature can be found as the `compiler_flag` attribute on the `_Feature` instance in the `[__future__](<https://docs.python.org/3/library/__future__.html#module-__future__>)` module. [Compiler flags](https://docs.python.org/3/library/ast.html#ast-compiler-flags) can be found in `[ast](<https://docs.python.org/3/library/ast.html#module-ast>)` module, with `PyCF_` prefix. The argument _optimize_ specifies the optimization level of the compiler; the default value of `-1` selects the optimization level of the interpreter as given by `[-O](<https://docs.python.org/3/using/cmdline.html#cmdoption-o>)` options. Explicit levels are `0` \(no optimization; `__debug__` is true\), `1` \(asserts are removed, `__debug__` is false\) or `2` \(docstrings are removed too\). This function raises `[SyntaxError](<https://docs.python.org/3/library/exceptions.html#SyntaxError>)` if the compiled source is invalid, and `[ValueError](<https://docs.python.org/3/library/exceptions.html#ValueError>)` if the source contains null bytes. If you want to parse Python code into its AST representation, see `[ast.parse()](<https://docs.python.org/3/library/ast.html#ast.parse>)`.

Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `compile` with arguments `source` and `filename`. This event may also be raised by implicit compilation.

**Note** When compiling a string with multi-line code in `'single'` or `'eval'` mode, input must be terminated by at least one newline character. This is to facilitate detection of incomplete and complete statements in the `[code](<https://docs.python.org/3/library/code.html#module-code>)` module. **Warning** It is possible to crash the Python interpreter with a sufficiently large/complex string when compiling to an AST object due to stack depth limitations in Python’s AST compiler. _Changed in version 3.2:_ Allowed use of Windows and Mac newlines. Also input in `'exec'` mode does not have to end in a newline anymore. Added the _optimize_ parameter. _Changed in version 3.5:_ Previously, `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` was raised when null bytes were encountered in _source_. _New in version 3.8:_ `ast.PyCF_ALLOW_TOP_LEVEL_AWAIT` can now be passed in flags to enable support for top-level `await`, `async for`, and `async with`.

_class_ **`complex`**\(\[_real_\[, _imag_\]\]\)Return a complex number with the value _real_ + \*imag\*\*1j or convert a string or number to a complex number. If the first parameter is a string, it will be interpreted as a complex number and the function must be called without a second parameter. The second parameter can never be a string. Each argument may be any numeric type \(including complex\). If _imag_ is omitted, it defaults to zero and the constructor serves as a numeric conversion like `[int](<https://docs.python.org/3/library/functions.html#int>)` and `[float](<https://docs.python.org/3/library/functions.html#float>)`. If both arguments are omitted, returns `0j`. For a general Python object `x`, `complex(x)` delegates to `x.__complex__()`. If `__complex__()` is not defined then it falls back to `[__float__()](<https://docs.python.org/3/reference/datamodel.html#object.__float__>)`. If `__float__()` is not defined then it falls back to `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)`. **Note** When converting from a string, the string must not contain whitespace around the central `+` or `-` operator. For example, `complex('1+2j')` is fine, but `complex('1 + 2j')` raises `[ValueError](<https://docs.python.org/3/library/exceptions.html#ValueError>)`. The complex type is described in [Numeric Types — int, float, complex](https://docs.python.org/3/library/stdtypes.html#typesnumeric). _Changed in version 3.6:_ Grouping digits with underscores as in code literals is allowed. _Changed in version 3.8:_ Falls back to `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` if `[__complex__()](<https://docs.python.org/3/reference/datamodel.html#object.__complex__>)` and `[__float__()](<https://docs.python.org/3/reference/datamodel.html#object.__float__>)` are not defined.

**`delattr`**\(_object_, _name_\)This is a relative of `[setattr()](<https://docs.python.org/3/library/functions.html#setattr>)`. The arguments are an object and a string. The string must be the name of one of the object’s attributes. The function deletes the named attribute, provided the object allows it. For example, `delattr(x, 'foobar')` is equivalent to `del x.foobar`.

_class_ **`dict`**\(\*\*_kwarg_\)_class_ **`dict`**\(_mapping_, \*\*_kwarg_\)_class_ **`dict`**\(_iterable_, \*\*_kwarg_\)Create a new dictionary. The `[dict](<https://docs.python.org/3/library/stdtypes.html#dict>)` object is the dictionary class. See `[dict](<https://docs.python.org/3/library/stdtypes.html#dict>)` and [Mapping Types — dict](https://docs.python.org/3/library/stdtypes.html#typesmapping) for documentation about this class. For other containers see the built-in `[list](<https://docs.python.org/3/library/stdtypes.html#list>)`, `[set](<https://docs.python.org/3/library/stdtypes.html#set>)`, and `[tuple](<https://docs.python.org/3/library/stdtypes.html#tuple>)` classes, as well as the `[collections](<https://docs.python.org/3/library/collections.html#module-collections>)` module.

**`dir`**\(\[_object_\]\)Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object. If the object has a method named `[__dir__()](<https://docs.python.org/3/reference/datamodel.html#object.__dir__>)`, this method will be called and must return the list of attributes. This allows objects that implement a custom `[__getattr__()](<https://docs.python.org/3/reference/datamodel.html#object.__getattr__>)` or `[__getattribute__()](<https://docs.python.org/3/reference/datamodel.html#object.__getattribute__>)` function to customize the way `[dir()](<https://docs.python.org/3/library/functions.html#dir>)` reports their attributes. If the object does not provide `[__dir__()](<https://docs.python.org/3/reference/datamodel.html#object.__dir__>)`, the function tries its best to gather information from the object’s `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attribute, if defined, and from its type object. The resulting list is not necessarily complete, and may be inaccurate when the object has a custom `[__getattr__()](<https://docs.python.org/3/reference/datamodel.html#object.__getattr__>)`. The default `[dir()](<https://docs.python.org/3/library/functions.html#dir>)` mechanism behaves differently with different types of objects, as it attempts to produce the most relevant, rather than complete, information: • If the object is a module object, the list contains the names of the module’s attributes. • If the object is a type or class object, the list contains the names of its attributes, and recursively of the attributes of its bases. • Otherwise, the list contains the object’s attributes’ names, the names of its class’s attributes, and recursively of the attributes of its class’s base classes. The resulting list is sorted alphabetically. For example:&gt;&gt;&gt;

\*\*`>>> import** **struct>>>** dir() *# show the names in the module namespace* ['__builtins__', '__name__', 'struct'] **>>>** dir(struct) *# show the names in the struct module* ['Struct', '__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__initializing__', '__loader__', '__name__', '__package__', '_clearcache', 'calcsize', 'error', 'pack', 'pack_into', 'unpack', 'unpack_from'] **>>> class** **Shape**: **...** **def** __dir__(self): **...** **return** ['area', 'perimeter', 'location'] **>>>** s = Shape() **>>>** dir(s) ['area', 'location', 'perimeter']`

**Note** Because `[dir()](<https://docs.python.org/3/library/functions.html#dir>)` is supplied primarily as a convenience for use at an interactive prompt, it tries to supply an interesting set of names more than it tries to supply a rigorously or consistently defined set of names, and its detailed behavior may change across releases. For example, metaclass attributes are not in the result list when the argument is a class.

**`divmod`**\(_a_, _b_\)Take two \(non complex\) numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division. With mixed operand types, the rules for binary arithmetic operators apply. For integers, the result is the same as `(a // b, a % b)`. For floating point numbers the result is `(q, a % b)`, where _q_ is usually `math.floor(a / b)` but may be 1 less than that. In any case `q * b + a % b` is very close to _a_, if `a % b` is non-zero it has the same sign as _b_, and `0 <= abs(a % b) < abs(b)`.

**`enumerate`**\(_iterable_, _start=0_\)Return an enumerate object. _iterable_ must be a sequence, an [iterator](https://docs.python.org/3/glossary.html#term-iterator), or some other object which supports iteration. The `[__next__()](<https://docs.python.org/3/library/stdtypes.html#iterator.__next__>)` method of the iterator returned by `[enumerate()](<https://docs.python.org/3/library/functions.html#enumerate>)` returns a tuple containing a count \(from _start_ which defaults to 0\) and the values obtained from iterating over _iterable_.&gt;&gt;&gt;

\*\*`>>>** seasons = ['Spring', 'Summer', 'Fall', 'Winter'] **>>>** list(enumerate(seasons)) [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')] **>>>** list(enumerate(seasons, start=1)) [(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]`

Equivalent to:

\*\*`def** enumerate(sequence, start=0): n = start **for** elem **in** sequence: **yield** n, elem n += 1`

**`eval`**\(_expression_\[, _globals_\[, _locals_\]\]\)The arguments are a string and optional globals and locals. If provided, _globals_ must be a dictionary. If provided, _locals_ can be any mapping object. The _expression_ argument is parsed and evaluated as a Python expression \(technically speaking, a condition list\) using the _globals_ and _locals_ dictionaries as global and local namespace. If the _globals_ dictionary is present and does not contain a value for the key `__builtins__`, a reference to the dictionary of the built-in module `[builtins](<https://docs.python.org/3/library/builtins.html#module-builtins>)` is inserted under that key before _expression_ is parsed. This means that _expression_ normally has full access to the standard `[builtins](<https://docs.python.org/3/library/builtins.html#module-builtins>)` module and restricted environments are propagated. If the _locals_ dictionary is omitted it defaults to the _globals_ dictionary. If both dictionaries are omitted, the expression is executed with the _globals_ and _locals_ in the environment where `[eval()](<https://docs.python.org/3/library/functions.html#eval>)` is called. Note, _eval\(\)_ does not have access to the [nested scopes](https://docs.python.org/3/glossary.html#term-nested-scope) \(non-locals\) in the enclosing environment. The return value is the result of the evaluated expression. Syntax errors are reported as exceptions. Example:&gt;&gt;&gt;

\*\*`>>>** x = 1 **>>>** eval('x+1') 2`

This function can also be used to execute arbitrary code objects \(such as those created by `[compile()](<https://docs.python.org/3/library/functions.html#compile>)`\). In this case pass a code object instead of a string. If the code object has been compiled with `'exec'` as the _mode_ argument, `[eval()](<https://docs.python.org/3/library/functions.html#eval>)`’s return value will be `None`. Hints: dynamic execution of statements is supported by the `[exec()](<https://docs.python.org/3/library/functions.html#exec>)` function. The `[globals()](<https://docs.python.org/3/library/functions.html#globals>)` and `[locals()](<https://docs.python.org/3/library/functions.html#locals>)` functions returns the current global and local dictionary, respectively, which may be useful to pass around for use by `[eval()](<https://docs.python.org/3/library/functions.html#eval>)` or `[exec()](<https://docs.python.org/3/library/functions.html#exec>)`. See `[ast.literal_eval()](<https://docs.python.org/3/library/ast.html#ast.literal_eval>)` for a function that can safely evaluate strings with expressions containing only literals.

Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `exec` with the code object as the argument. Code compilation events may also be raised.

**`exec`**\(_object_\[, _globals_\[, _locals_\]\]\)This function supports dynamic execution of Python code. _object_ must be either a string or a code object. If it is a string, the string is parsed as a suite of Python statements which is then executed \(unless a syntax error occurs\). [1](https://docs.python.org/3/library/functions.html#id2) If it is a code object, it is simply executed. In all cases, the code that’s executed is expected to be valid as file input \(see the section “File input” in the Reference Manual\). Be aware that the `[nonlocal](<https://docs.python.org/3/reference/simple_stmts.html#nonlocal>)`, `[yield](<https://docs.python.org/3/reference/simple_stmts.html#yield>)`, and `[return](<https://docs.python.org/3/reference/simple_stmts.html#return>)` statements may not be used outside of function definitions even within the context of code passed to the `[exec()](<https://docs.python.org/3/library/functions.html#exec>)` function. The return value is `None`. In all cases, if the optional parts are omitted, the code is executed in the current scope. If only _globals_ is provided, it must be a dictionary \(and not a subclass of dictionary\), which will be used for both the global and the local variables. If _globals_ and _locals_ are given, they are used for the global and local variables, respectively. If provided, _locals_ can be any mapping object. Remember that at module level, globals and locals are the same dictionary. If exec gets two separate objects as _globals_ and _locals_, the code will be executed as if it were embedded in a class definition. If the _globals_ dictionary does not contain a value for the key `__builtins__`, a reference to the dictionary of the built-in module `[builtins](<https://docs.python.org/3/library/builtins.html#module-builtins>)` is inserted under that key. That way you can control what builtins are available to the executed code by inserting your own `__builtins__` dictionary into _globals_ before passing it to `[exec()](<https://docs.python.org/3/library/functions.html#exec>)`.

Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `exec` with the code object as the argument. Code compilation events may also be raised.

**Note** The built-in functions `[globals()](<https://docs.python.org/3/library/functions.html#globals>)` and `[locals()](<https://docs.python.org/3/library/functions.html#locals>)` return the current global and local dictionary, respectively, which may be useful to pass around for use as the second and third argument to `[exec()](<https://docs.python.org/3/library/functions.html#exec>)`. **Note** The default _locals_ act as described for function `[locals()](<https://docs.python.org/3/library/functions.html#locals>)` below: modifications to the default _locals_ dictionary should not be attempted. Pass an explicit _locals_ dictionary if you need to see effects of the code on _locals_ after function `[exec()](<https://docs.python.org/3/library/functions.html#exec>)` returns.

**`filter`**\(_function_, _iterable_\)Construct an iterator from those elements of _iterable_ for which _function_ returns true. _iterable_ may be either a sequence, a container which supports iteration, or an iterator. If _function_ is `None`, the identity function is assumed, that is, all elements of _iterable_ that are false are removed. Note that `filter(function, iterable)` is equivalent to the generator expression `(item for item in iterable if function(item))` if function is not `None` and `(item for item in iterable if item)` if function is `None`. See `[itertools.filterfalse()](<https://docs.python.org/3/library/itertools.html#itertools.filterfalse>)` for the complementary function that returns elements of _iterable_ for which _function_ returns false.

_class_ **`float`**\(\[_x_\]\)Return a floating point number constructed from a number or string _x_. If the argument is a string, it should contain a decimal number, optionally preceded by a sign, and optionally embedded in whitespace. The optional sign may be `'+'` or `'-'`; a `'+'` sign has no effect on the value produced. The argument may also be a string representing a NaN \(not-a-number\), or a positive or negative infinity. More precisely, the input must conform to the following grammar after leading and trailing whitespace characters are removed:

\*\*`sign** ::= "+" | "-" **infinity** ::= "Infinity" | "inf" **nan** ::= "nan" **numeric_value** ::= [floatnumber](<https://docs.python.org/3/reference/lexical_analysis.html#grammar-token-floatnumber>) | [infinity](<https://docs.python.org/3/library/functions.html#grammar-token-infinity>) | [nan](<https://docs.python.org/3/library/functions.html#grammar-token-nan>)**numeric_string** ::= [[sign](<https://docs.python.org/3/library/string.html#grammar-token-sign>)] [numeric_value](<https://docs.python.org/3/library/functions.html#grammar-token-numeric-value>)` Here `floatnumber` is the form of a Python floating-point literal, described in [Floating point literals](https://docs.python.org/3/reference/lexical_analysis.html#floating). Case is not significant, so, for example, “inf”, “Inf”, “INFINITY” and “iNfINity” are all acceptable spellings for positive infinity. Otherwise, if the argument is an integer or a floating point number, a floating point number with the same value \(within Python’s floating point precision\) is returned. If the argument is outside the range of a Python float, an `[OverflowError](<https://docs.python.org/3/library/exceptions.html#OverflowError>)` will be raised. For a general Python object `x`, `float(x)` delegates to `x.__float__()`. If `__float__()` is not defined then it falls back to `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)`. If no argument is given, `0.0` is returned. Examples:&gt;&gt;&gt;

\*\*`>>>** float('+1.23') 1.23 **>>>** float(' -12345**\\n**') -12345.0 **>>>** float('1e-003') 0.001 **>>>** float('+1E6') 1000000.0 **>>>** float('-Infinity') -inf`

The float type is described in [Numeric Types — int, float, complex](https://docs.python.org/3/library/stdtypes.html#typesnumeric). _Changed in version 3.6:_ Grouping digits with underscores as in code literals is allowed. _Changed in version 3.7: x_ is now a positional-only parameter. _Changed in version 3.8:_ Falls back to `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` if `[__float__()](<https://docs.python.org/3/reference/datamodel.html#object.__float__>)` is not defined.

**`format`**\(_value_\[, _format_spec_\]\)Convert a _value_ to a “formatted” representation, as controlled by _format_spec_. The interpretation of _format_spec_ will depend on the type of the _value_ argument, however there is a standard formatting syntax that is used by most built-in types: [Format Specification Mini-Language](https://docs.python.org/3/library/string.html#formatspec). The default _format_spec_ is an empty string which usually gives the same effect as calling `[str(value)](<https://docs.python.org/3/library/stdtypes.html#str>)`. A call to `format(value, format_spec)` is translated to `type(value).__format__(value, format_spec)` which bypasses the instance dictionary when searching for the value’s `[__format__()](<https://docs.python.org/3/reference/datamodel.html#object.__format__>)` method. A `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` exception is raised if the method search reaches `[object](<https://docs.python.org/3/library/functions.html#object>)` and the _format_spec_ is non-empty, or if either the _format_spec_ or the return value are not strings. _Changed in version 3.4:_ `object().__format__(format_spec)` raises `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` if _format_spec_ is not an empty string.

_class_ **`frozenset`**\(\[_iterable_\]\)Return a new `[frozenset](<https://docs.python.org/3/library/stdtypes.html#frozenset>)` object, optionally with elements taken from _iterable_. `frozenset` is a built-in class. See `[frozenset](<https://docs.python.org/3/library/stdtypes.html#frozenset>)` and [Set Types — set, frozenset](https://docs.python.org/3/library/stdtypes.html#types-set) for documentation about this class. For other containers see the built-in `[set](<https://docs.python.org/3/library/stdtypes.html#set>)`, `[list](<https://docs.python.org/3/library/stdtypes.html#list>)`, `[tuple](<https://docs.python.org/3/library/stdtypes.html#tuple>)`, and `[dict](<https://docs.python.org/3/library/stdtypes.html#dict>)` classes, as well as the `[collections](<https://docs.python.org/3/library/collections.html#module-collections>)` module.

**`getattr`**\(_object_, _name_\[, _default_\]\)Return the value of the named attribute of _object_. _name_ must be a string. If the string is the name of one of the object’s attributes, the result is the value of that attribute. For example, `getattr(x, 'foobar')` is equivalent to `x.foobar`. If the named attribute does not exist, _default_ is returned if provided, otherwise `[AttributeError](<https://docs.python.org/3/library/exceptions.html#AttributeError>)` is raised. **Note** Since [private name mangling](https://docs.python.org/3/reference/expressions.html#private-name-mangling) happens at compilation time, one must manually mangle a private attribute’s \(attributes with two leading underscores\) name in order to retrieve it with `[getattr()](<https://docs.python.org/3/library/functions.html#getattr>)`.

**`globals`**\(\)Return a dictionary representing the current global symbol table. This is always the dictionary of the current module \(inside a function or method, this is the module where it is defined, not the module from which it is called\).

**`hasattr`**\(_object_, _name_\)The arguments are an object and a string. The result is `True` if the string is the name of one of the object’s attributes, `False` if not. \(This is implemented by calling `getattr(object, name)` and seeing whether it raises an `[AttributeError](<https://docs.python.org/3/library/exceptions.html#AttributeError>)` or not.\)

**`hash`**\(_object_\)Return the hash value of the object \(if it has one\). Hash values are integers. They are used to quickly compare dictionary keys during a dictionary lookup. Numeric values that compare equal have the same hash value \(even if they are of different types, as is the case for 1 and 1.0\). **Note** For objects with custom `[__hash__()](<https://docs.python.org/3/reference/datamodel.html#object.__hash__>)` methods, note that `[hash()](<https://docs.python.org/3/library/functions.html#hash>)` truncates the return value based on the bit width of the host machine. See `[__hash__()](<https://docs.python.org/3/reference/datamodel.html#object.__hash__>)` for details.

**`help`**\(\[_object_\]\)Invoke the built-in help system. \(This function is intended for interactive use.\) If no argument is given, the interactive help system starts on the interpreter console. If the argument is a string, then the string is looked up as the name of a module, function, class, method, keyword, or documentation topic, and a help page is printed on the console. If the argument is any other kind of object, a help page on the object is generated. Note that if a slash\(/\) appears in the parameter list of a function, when invoking `[help()](<https://docs.python.org/3/library/functions.html#help>)`, it means that the parameters prior to the slash are positional-only. For more info, see [the FAQ entry on positional-only parameters](https://docs.python.org/3/faq/programming.html#faq-positional-only-arguments). This function is added to the built-in namespace by the `[site](<https://docs.python.org/3/library/site.html#module-site>)` module. _Changed in version 3.4:_ Changes to `[pydoc](<https://docs.python.org/3/library/pydoc.html#module-pydoc>)` and `[inspect](<https://docs.python.org/3/library/inspect.html#module-inspect>)` mean that the reported signatures for callables are now more comprehensive and consistent.

**`hex`**\(_x_\)Convert an integer number to a lowercase hexadecimal string prefixed with “0x”. If _x_ is not a Python `[int](<https://docs.python.org/3/library/functions.html#int>)` object, it has to define an `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` method that returns an integer. Some examples:&gt;&gt;&gt;

\*\*`>>>** hex(255) '0xff' **>>>** hex(-42) '-0x2a'`

If you want to convert an integer number to an uppercase or lower hexadecimal string with prefix or not, you can use either of the following ways:&gt;&gt;&gt;

\*\*`>>>** '*%#x*' % 255, '*%x*' % 255, '*%X*' % 255 ('0xff', 'ff', 'FF') **>>>** format(255, '#x'), format(255, 'x'), format(255, 'X') ('0xff', 'ff', 'FF') **>>>** f'*{*255*:*#x*}*', f'*{*255*:*x*}*', f'*{*255*:*X*}*' ('0xff', 'ff', 'FF')`

See also `[format()](<https://docs.python.org/3/library/functions.html#format>)` for more information. See also `[int()](<https://docs.python.org/3/library/functions.html#int>)` for converting a hexadecimal string to an integer using a base of 16. **Note** To obtain a hexadecimal string representation for a float, use the `[float.hex()](<https://docs.python.org/3/library/stdtypes.html#float.hex>)` method.

**`id`**\(_object_\)Return the “identity” of an object. This is an integer which is guaranteed to be unique and constant for this object during its lifetime. Two objects with non-overlapping lifetimes may have the same `[id()](<https://docs.python.org/3/library/functions.html#id>)` value. **CPython implementation detail:** This is the address of the object in memory. Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `builtins.id` with argument `id`.

**`input`**\(\[_prompt_\]\)If the _prompt_ argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string \(stripping a trailing newline\), and returns that. When EOF is read, `[EOFError](<https://docs.python.org/3/library/exceptions.html#EOFError>)` is raised. Example:&gt;&gt;&gt;

\*\*`>>>** s = input('--> ') --> Monty Python's Flying Circus **>>>** s "Monty Python's Flying Circus"`

If the `[readline](<https://docs.python.org/3/library/readline.html#module-readline>)` module was loaded, then `[input()](<https://docs.python.org/3/library/functions.html#input>)` will use it to provide elaborate line editing and history features.

Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `builtins.input` with argument `prompt` before reading input

Raises an auditing event `builtins.input/result` with the result after successfully reading input.

_class_ **`int`**\(\[_x_\]\)_class_ **`int`**\(_x_, _base=10_\)Return an integer object constructed from a number or string _x_, or return `0` if no arguments are given. If _x_ defines `[__int__()](<https://docs.python.org/3/reference/datamodel.html#object.__int__>)`, `int(x)` returns `x.__int__()`. If _x_ defines `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)`, it returns `x.__index__()`. If _x_ defines `[__trunc__()](<https://docs.python.org/3/reference/datamodel.html#object.__trunc__>)`, it returns `x.__trunc__()`. For floating point numbers, this truncates towards zero. If _x_ is not a number or if _base_ is given, then _x_ must be a string, `[bytes](<https://docs.python.org/3/library/stdtypes.html#bytes>)`, or `[bytearray](<https://docs.python.org/3/library/stdtypes.html#bytearray>)` instance representing an [integer literal](https://docs.python.org/3/reference/lexical_analysis.html#integers) in radix _base_. Optionally, the literal can be preceded by `+` or `-` \(with no space in between\) and surrounded by whitespace. A base-n literal consists of the digits 0 to n-1, with `a` to `z` \(or `A` to `Z`\) having values 10 to 35. The default _base_ is 10. The allowed values are 0 and 2–36. Base-2, -8, and -16 literals can be optionally prefixed with `0b`/`0B`, `0o`/`0O`, or `0x`/`0X`, as with integer literals in code. Base 0 means to interpret exactly as a code literal, so that the actual base is 2, 8, 10, or 16, and so that `int('010', 0)` is not legal, while `int('010')` is, as well as `int('010', 8)`. The integer type is described in [Numeric Types — int, float, complex](https://docs.python.org/3/library/stdtypes.html#typesnumeric). _Changed in version 3.4:_ If _base_ is not an instance of `[int](<https://docs.python.org/3/library/functions.html#int>)` and the _base_ object has a `[base.__index__](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` method, that method is called to obtain an integer for the base. Previous versions used `[base.__int__](<https://docs.python.org/3/reference/datamodel.html#object.__int__>)` instead of `[base.__index__](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)`. _Changed in version 3.6:_ Grouping digits with underscores as in code literals is allowed. _Changed in version 3.7: x_ is now a positional-only parameter. _Changed in version 3.8:_ Falls back to `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` if `[__int__()](<https://docs.python.org/3/reference/datamodel.html#object.__int__>)` is not defined.

**`isinstance`**\(_object_, _classinfo_\)Return `True` if the _object_ argument is an instance of the _classinfo_ argument, or of a \(direct, indirect or [virtual](https://docs.python.org/3/glossary.html#term-abstract-base-class)\) subclass thereof. If _object_ is not an object of the given type, the function always returns `False`. If _classinfo_ is a tuple of type objects \(or recursively, other such tuples\), return `True` if _object_ is an instance of any of the types. If _classinfo_ is not a type or tuple of types and such tuples, a `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` exception is raised.

**`issubclass`**\(_class_, _classinfo_\)Return `True` if _class_ is a subclass \(direct, indirect or [virtual](https://docs.python.org/3/glossary.html#term-abstract-base-class)\) of _classinfo_. A class is considered a subclass of itself. _classinfo_ may be a tuple of class objects, in which case every entry in _classinfo_ will be checked. In any other case, a `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` exception is raised.

**`iter`**\(_object_\[, _sentinel_\]\)Return an [iterator](https://docs.python.org/3/glossary.html#term-iterator) object. The first argument is interpreted very differently depending on the presence of the second argument. Without a second argument, _object_ must be a collection object which supports the iteration protocol \(the `[__iter__()](<https://docs.python.org/3/reference/datamodel.html#object.__iter__>)` method\), or it must support the sequence protocol \(the `[__getitem__()](<https://docs.python.org/3/reference/datamodel.html#object.__getitem__>)` method with integer arguments starting at `0`\). If it does not support either of those protocols, `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` is raised. If the second argument, _sentinel_, is given, then _object_ must be a callable object. The iterator created in this case will call _object_ with no arguments for each call to its `[__next__()](<https://docs.python.org/3/library/stdtypes.html#iterator.__next__>)` method; if the value returned is equal to _sentinel_, `[StopIteration](<https://docs.python.org/3/library/exceptions.html#StopIteration>)` will be raised, otherwise the value will be returned. See also [Iterator Types](https://docs.python.org/3/library/stdtypes.html#typeiter). One useful application of the second form of `[iter()](<https://docs.python.org/3/library/functions.html#iter>)` is to build a block-reader. For example, reading fixed-width blocks from a binary database file until the end of file is reached:

\*\*`from** **functools** **import** partial **with** open('mydata.db', 'rb') **as** f: **for** block **in** iter(partial(f.read, 64), b''): process_block(block)`

**`len`**\(_s_\)Return the length \(the number of items\) of an object. The argument may be a sequence \(such as a string, bytes, tuple, list, or range\) or a collection \(such as a dictionary, set, or frozen set\). **CPython implementation detail:** `len` raises `[OverflowError](<https://docs.python.org/3/library/exceptions.html#OverflowError>)` on lengths larger than `[sys.maxsize](<https://docs.python.org/3/library/sys.html#sys.maxsize>)`, such as `[range(2 ** 100)](<https://docs.python.org/3/library/stdtypes.html#range>)`.

_class_ **`list`**\(\[_iterable_\]\)Rather than being a function, `[list](<https://docs.python.org/3/library/stdtypes.html#list>)` is actually a mutable sequence type, as documented in [Lists](https://docs.python.org/3/library/stdtypes.html#typesseq-list) and [Sequence Types — list, tuple, range](https://docs.python.org/3/library/stdtypes.html#typesseq).

**`locals`**\(\)Update and return a dictionary representing the current local symbol table. Free variables are returned by `[locals()](<https://docs.python.org/3/library/functions.html#locals>)` when it is called in function blocks, but not in class blocks. Note that at the module level, `[locals()](<https://docs.python.org/3/library/functions.html#locals>)` and `[globals()](<https://docs.python.org/3/library/functions.html#globals>)` are the same dictionary. **Note** The contents of this dictionary should not be modified; changes may not affect the values of local and free variables used by the interpreter.

**`map`**\(_function_, _iterable_, _..._\)Return an iterator that applies _function_ to every item of _iterable_, yielding the results. If additional _iterable_ arguments are passed, _function_ must take that many arguments and is applied to the items from all iterables in parallel. With multiple iterables, the iterator stops when the shortest iterable is exhausted. For cases where the function inputs are already arranged into argument tuples, see `[itertools.starmap()](<https://docs.python.org/3/library/itertools.html#itertools.starmap>)`.

**`max`**\(_iterable_, _**\[, key**_**,** _**default**_**\]\)**`max`\*\(_arg1_, _arg2_, \*_args_\[, _key_\]\)Return the largest item in an iterable or the largest of two or more arguments. If one positional argument is provided, it should be an [iterable](https://docs.python.org/3/glossary.html#term-iterable). The largest item in the iterable is returned. If two or more positional arguments are provided, the largest of the positional arguments is returned. There are two optional keyword-only arguments. The _key_ argument specifies a one-argument ordering function like that used for `[list.sort()](<https://docs.python.org/3/library/stdtypes.html#list.sort>)`. The _default_ argument specifies an object to return if the provided iterable is empty. If the iterable is empty and _default_ is not provided, a `[ValueError](<https://docs.python.org/3/library/exceptions.html#ValueError>)` is raised. If multiple items are maximal, the function returns the first one encountered. This is consistent with other sort-stability preserving tools such as `sorted(iterable, key=keyfunc, reverse=True)[0]` and `heapq.nlargest(1, iterable, key=keyfunc)`. _New in version 3.4:_ The _default_ keyword-only argument. _Changed in version 3.8:_ The _key_ can be `None`.

_class_ **`memoryview`**\(_object_\)Return a “memory view” object created from the given argument. See [Memory Views](https://docs.python.org/3/library/stdtypes.html#typememoryview) for more information.

**`min`**\(_iterable_, _**\[, key**_**,** _**default**_**\]\)**`min`\*\(_arg1_, _arg2_, \*_args_\[, _key_\]\)Return the smallest item in an iterable or the smallest of two or more arguments. If one positional argument is provided, it should be an [iterable](https://docs.python.org/3/glossary.html#term-iterable). The smallest item in the iterable is returned. If two or more positional arguments are provided, the smallest of the positional arguments is returned. There are two optional keyword-only arguments. The _key_ argument specifies a one-argument ordering function like that used for `[list.sort()](<https://docs.python.org/3/library/stdtypes.html#list.sort>)`. The _default_ argument specifies an object to return if the provided iterable is empty. If the iterable is empty and _default_ is not provided, a `[ValueError](<https://docs.python.org/3/library/exceptions.html#ValueError>)` is raised. If multiple items are minimal, the function returns the first one encountered. This is consistent with other sort-stability preserving tools such as `sorted(iterable, key=keyfunc)[0]` and `heapq.nsmallest(1, iterable, key=keyfunc)`. _New in version 3.4:_ The _default_ keyword-only argument. _Changed in version 3.8:_ The _key_ can be `None`.

**`next`**\(_iterator_\[, _default_\]\)Retrieve the next item from the _iterator_ by calling its `[__next__()](<https://docs.python.org/3/library/stdtypes.html#iterator.__next__>)` method. If _default_ is given, it is returned if the iterator is exhausted, otherwise `[StopIteration](<https://docs.python.org/3/library/exceptions.html#StopIteration>)` is raised.

_class_ \*\*`object`\*\*Return a new featureless object. `[object](<https://docs.python.org/3/library/functions.html#object>)` is a base for all classes. It has the methods that are common to all instances of Python classes. This function does not accept any arguments. **Note** `[object](<https://docs.python.org/3/library/functions.html#object>)` does _not_ have a `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)`, so you can’t assign arbitrary attributes to an instance of the `[object](<https://docs.python.org/3/library/functions.html#object>)` class.

**`oct`**\(_x_\)Convert an integer number to an octal string prefixed with “0o”. The result is a valid Python expression. If _x_ is not a Python `[int](<https://docs.python.org/3/library/functions.html#int>)` object, it has to define an `[__index__()](<https://docs.python.org/3/reference/datamodel.html#object.__index__>)` method that returns an integer. For example:&gt;&gt;&gt;

\*\*`>>>** oct(8) '0o10' **>>>** oct(-56) '-0o70'`

If you want to convert an integer number to octal string either with prefix “0o” or not, you can use either of the following ways.&gt;&gt;&gt;

\*\*`>>>** '*%#o*' % 10, '*%o*' % 10 ('0o12', '12') **>>>** format(10, '#o'), format(10, 'o') ('0o12', '12') **>>>** f'*{*10*:*#o*}*', f'*{*10*:*o*}*' ('0o12', '12')`

See also `[format()](<https://docs.python.org/3/library/functions.html#format>)` for more information.

**`open`**\(_file_, _mode='r'_, _buffering=-1_, _encoding=None_, _errors=None_, _newline=None_, _closefd=True_, _opener=None_\)Open _file_ and return a corresponding [file object](https://docs.python.org/3/glossary.html#term-file-object). If the file cannot be opened, an `[OSError](<https://docs.python.org/3/library/exceptions.html#OSError>)` is raised. See [Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html#tut-files) for more examples of how to use this function. _file_ is a [path-like object](https://docs.python.org/3/glossary.html#term-path-like-object) giving the pathname \(absolute or relative to the current working directory\) of the file to be opened or an integer file descriptor of the file to be wrapped. \(If a file descriptor is given, it is closed when the returned I/O object is closed, unless _closefd_ is set to `False`.\) _mode_ is an optional string that specifies the mode in which the file is opened. It defaults to `'r'` which means open for reading in text mode. Other common values are `'w'` for writing \(truncating the file if it already exists\), `'x'` for exclusive creation and `'a'` for appending \(which on _some_ Unix systems, means that _all_ writes append to the end of the file regardless of the current seek position\). In text mode, if _encoding_ is not specified the encoding used is platform dependent: `locale.getpreferredencoding(False)` is called to get the current locale encoding. \(For reading and writing raw bytes use binary mode and leave _encoding_ unspecified.\) The available modes are:CharacterMeaning`'r'`open for reading \(default\)`'w'`open for writing, truncating the file first`'x'`open for exclusive creation, failing if the file already exists`'a'`open for writing, appending to the end of the file if it exists`'b'`binary mode`'t'`text mode \(default\)`'+'`open for updating \(reading and writing\) The default mode is `'r'` \(open for reading text, synonym of `'rt'`\). Modes `'w+'` and `'w+b'` open and truncate the file. Modes `'r+'` and `'r+b'` open the file with no truncation. As mentioned in the [Overview](https://docs.python.org/3/library/io.html#io-overview), Python distinguishes between binary and text I/O. Files opened in binary mode \(including `'b'` in the _mode_ argument\) return contents as `[bytes](<https://docs.python.org/3/library/stdtypes.html#bytes>)` objects without any decoding. In text mode \(the default, or when `'t'` is included in the _mode_ argument\), the contents of the file are returned as `[str](<https://docs.python.org/3/library/stdtypes.html#str>)`, the bytes having been first decoded using a platform-dependent encoding or using the specified _encoding_ if given. There is an additional mode character permitted, `'U'`, which no longer has any effect, and is considered deprecated. It previously enabled [universal newlines](https://docs.python.org/3/glossary.html#term-universal-newlines) in text mode, which became the default behaviour in Python 3.0. Refer to the documentation of the [newline](https://docs.python.org/3/library/functions.html#open-newline-parameter) parameter for further details. **Note** Python doesn’t depend on the underlying operating system’s notion of text files; all the processing is done by Python itself, and is therefore platform-independent. _buffering_ is an optional integer used to set the buffering policy. Pass 0 to switch buffering off \(only allowed in binary mode\), 1 to select line buffering \(only usable in text mode\), and an integer &gt; 1 to indicate the size in bytes of a fixed-size chunk buffer. When no _buffering_ argument is given, the default buffering policy works as follows: • Binary files are buffered in fixed-size chunks; the size of the buffer is chosen using a heuristic trying to determine the underlying device’s “block size” and falling back on `[io.DEFAULT_BUFFER_SIZE](<https://docs.python.org/3/library/io.html#io.DEFAULT_BUFFER_SIZE>)`. On many systems, the buffer will typically be 4096 or 8192 bytes long. • “Interactive” text files \(files for which `[isatty()](<https://docs.python.org/3/library/io.html#io.IOBase.isatty>)` returns `True`\) use line buffering. Other text files use the policy described above for binary files. _encoding_ is the name of the encoding used to decode or encode the file. This should only be used in text mode. The default encoding is platform dependent \(whatever `[locale.getpreferredencoding()](<https://docs.python.org/3/library/locale.html#locale.getpreferredencoding>)` returns\), but any [text encoding](https://docs.python.org/3/glossary.html#term-text-encoding) supported by Python can be used. See the `[codecs](<https://docs.python.org/3/library/codecs.html#module-codecs>)` module for the list of supported encodings. _errors_ is an optional string that specifies how encoding and decoding errors are to be handled—this cannot be used in binary mode. A variety of standard error handlers are available \(listed under [Error Handlers](https://docs.python.org/3/library/codecs.html#error-handlers)\), though any error handling name that has been registered with `[codecs.register_error()](<https://docs.python.org/3/library/codecs.html#codecs.register_error>)` is also valid. The standard names include: • `'strict'` to raise a `[ValueError](<https://docs.python.org/3/library/exceptions.html#ValueError>)` exception if there is an encoding error. The default value of `None` has the same effect. • `'ignore'` ignores errors. Note that ignoring encoding errors can lead to data loss. • `'replace'` causes a replacement marker \(such as `'?'`\) to be inserted where there is malformed data. • `'surrogateescape'` will represent any incorrect bytes as code points in the Unicode Private Use Area ranging from U+DC80 to U+DCFF. These private code points will then be turned back into the same bytes when the `surrogateescape` error handler is used when writing data. This is useful for processing files in an unknown encoding. • `'xmlcharrefreplace'` is only supported when writing to a file. Characters not supported by the encoding are replaced with the appropriate XML character reference `&#nnn;`. • `'backslashreplace'` replaces malformed data by Python’s backslashed escape sequences. • `'namereplace'` \(also only supported when writing\) replaces unsupported characters with `\\N{...}` escape sequences. _newline_ controls how [universal newlines](https://docs.python.org/3/glossary.html#term-universal-newlines) mode works \(it only applies to text mode\). It can be `None`, `''`, `'\\n'`, `'\\r'`, and `'\\r\\n'`. It works as follows: • When reading input from the stream, if _newline_ is `None`, universal newlines mode is enabled. Lines in the input can end in `'\\n'`, `'\\r'`, or `'\\r\\n'`, and these are translated into `'\\n'` before being returned to the caller. If it is `''`, universal newlines mode is enabled, but line endings are returned to the caller untranslated. If it has any of the other legal values, input lines are only terminated by the given string, and the line ending is returned to the caller untranslated. • When writing output to the stream, if _newline_ is `None`, any `'\\n'` characters written are translated to the system default line separator, `[os.linesep](<https://docs.python.org/3/library/os.html#os.linesep>)`. If _newline_ is `''` or `'\\n'`, no translation takes place. If _newline_ is any of the other legal values, any `'\\n'` characters written are translated to the given string. If _closefd_ is `False` and a file descriptor rather than a filename was given, the underlying file descriptor will be kept open when the file is closed. If a filename is given _closefd_ must be `True` \(the default\) otherwise an error will be raised. A custom opener can be used by passing a callable as _opener_. The underlying file descriptor for the file object is then obtained by calling _opener_ with \(_file_, _flags_\). _opener_ must return an open file descriptor \(passing `[os.open](<https://docs.python.org/3/library/os.html#os.open>)` as _opener_ results in functionality similar to passing `None`\). The newly created file is [non-inheritable](https://docs.python.org/3/library/os.html#fd-inheritance). The following example uses the [dir_fd](https://docs.python.org/3/library/os.html#dir-fd) parameter of the `[os.open()](<https://docs.python.org/3/library/os.html#os.open>)` function to open a file relative to a given directory:&gt;&gt;&gt;

\*\*`>>> import** **os>>>** dir_fd = os.open('somedir', os.O_RDONLY) **>>> def** opener(path, flags): **...** **return** os.open(path, flags, dir_fd=dir_fd) **...>>> with** open('spamspam.txt', 'w', opener=opener) **as** f: **...** print('This will be written to somedir/spamspam.txt', file=f) **...>>>** os.close(dir_fd) *# don't leak a file descriptor*` The type of [file object](https://docs.python.org/3/glossary.html#term-file-object) returned by the `[open()](<https://docs.python.org/3/library/functions.html#open>)` function depends on the mode. When `[open()](<https://docs.python.org/3/library/functions.html#open>)` is used to open a file in a text mode \(`'w'`, `'r'`, `'wt'`, `'rt'`, etc.\), it returns a subclass of `[io.TextIOBase](<https://docs.python.org/3/library/io.html#io.TextIOBase>)` \(specifically `[io.TextIOWrapper](<https://docs.python.org/3/library/io.html#io.TextIOWrapper>)`\). When used to open a file in a binary mode with buffering, the returned class is a subclass of `[io.BufferedIOBase](<https://docs.python.org/3/library/io.html#io.BufferedIOBase>)`. The exact class varies: in read binary mode, it returns an `[io.BufferedReader](<https://docs.python.org/3/library/io.html#io.BufferedReader>)`; in write binary and append binary modes, it returns an `[io.BufferedWriter](<https://docs.python.org/3/library/io.html#io.BufferedWriter>)`, and in read/write mode, it returns an `[io.BufferedRandom](<https://docs.python.org/3/library/io.html#io.BufferedRandom>)`. When buffering is disabled, the raw stream, a subclass of `[io.RawIOBase](<https://docs.python.org/3/library/io.html#io.RawIOBase>)`, `[io.FileIO](<https://docs.python.org/3/library/io.html#io.FileIO>)`, is returned. See also the file handling modules, such as, `[fileinput](<https://docs.python.org/3/library/fileinput.html#module-fileinput>)`, `[io](<https://docs.python.org/3/library/io.html#module-io>)` \(where `[open()](<https://docs.python.org/3/library/functions.html#open>)` is declared\), `[os](<https://docs.python.org/3/library/os.html#module-os>)`, `[os.path](<https://docs.python.org/3/library/os.path.html#module-os.path>)`, `[tempfile](<https://docs.python.org/3/library/tempfile.html#module-tempfile>)`, and `[shutil](<https://docs.python.org/3/library/shutil.html#module-shutil>)`. Raises an [auditing event](https://docs.python.org/3/library/sys.html#auditing) `open` with arguments `file`, `mode`, `flags`. The `mode` and `flags` arguments may have been modified or inferred from the original call._Changed in version 3.3:_ • The _opener_ parameter was added. • The `'x'` mode was added. • `[IOError](<https://docs.python.org/3/library/exceptions.html#IOError>)` used to be raised, it is now an alias of `[OSError](<https://docs.python.org/3/library/exceptions.html#OSError>)`. • `[FileExistsError](<https://docs.python.org/3/library/exceptions.html#FileExistsError>)` is now raised if the file opened in exclusive creation mode \(`'x'`\) already exists._Changed in version 3.4:_ • The file is now non-inheritable. _Deprecated since version 3.4, will be removed in version 3.10:_ The `'U'` mode._Changed in version 3.5:_ • If the system call is interrupted and the signal handler does not raise an exception, the function now retries the system call instead of raising an `[InterruptedError](<https://docs.python.org/3/library/exceptions.html#InterruptedError>)` exception \(see [**PEP 475**](https://www.python.org/dev/peps/pep-0475) for the rationale\). • The `'namereplace'` error handler was added._Changed in version 3.6:_ • Support added to accept objects implementing `[os.PathLike](<https://docs.python.org/3/library/os.html#os.PathLike>)`. • On Windows, opening a console buffer may return a subclass of `[io.RawIOBase](<https://docs.python.org/3/library/io.html#io.RawIOBase>)` other than `[io.FileIO](<https://docs.python.org/3/library/io.html#io.FileIO>)`.

**`ord`**\(_c_\)Given a string representing one Unicode character, return an integer representing the Unicode code point of that character. For example, `ord('a')` returns the integer `97` and `ord('€')` \(Euro sign\) returns `8364`. This is the inverse of `[chr()](<https://docs.python.org/3/library/functions.html#chr>)`.

**`pow`**\(_base_, _exp_\[, _mod_\]\)Return _base_ to the power _exp_; if _mod_ is present, return _base_ to the power _exp_, modulo _mod_ \(computed more efficiently than `pow(base, exp) % mod`\). The two-argument form `pow(base, exp)` is equivalent to using the power operator: `base**exp`. The arguments must have numeric types. With mixed operand types, the coercion rules for binary arithmetic operators apply. For `[int](<https://docs.python.org/3/library/functions.html#int>)` operands, the result has the same type as the operands \(after coercion\) unless the second argument is negative; in that case, all arguments are converted to float and a float result is delivered. For example, `10**2` returns `100`, but `10**-2` returns `0.01`. For `[int](<https://docs.python.org/3/library/functions.html#int>)` operands _base_ and _exp_, if _mod_ is present, _mod_ must also be of integer type and _mod_ must be nonzero. If _mod_ is present and _exp_ is negative, _base_ must be relatively prime to _mod_. In that case, `pow(inv_base, -exp, mod)` is returned, where _inv_base_ is an inverse to _base_ modulo _mod_. Here’s an example of computing an inverse for `38` modulo `97`:&gt;&gt;&gt;

\*\*`>>>** pow(38, -1, mod=97) 23 **>>>** 23 * 38 % 97 == 1 True`

_Changed in version 3.8:_ For `[int](<https://docs.python.org/3/library/functions.html#int>)` operands, the three-argument form of `pow` now allows the second argument to be negative, permitting computation of modular inverses. _Changed in version 3.8:_ Allow keyword arguments. Formerly, only positional arguments were supported.

**`print`**\(\*_objects_, _sep=' '_, _end='\n'_, _file=sys.stdout_, _flush=False_\)Print _objects_ to the text stream _file_, separated by _sep_ and followed by _end_. _sep_, _end_, _file_ and _flush_, if present, must be given as keyword arguments. All non-keyword arguments are converted to strings like `[str()](<https://docs.python.org/3/library/stdtypes.html#str>)` does and written to the stream, separated by _sep_ and followed by _end_. Both _sep_ and _end_ must be strings; they can also be `None`, which means to use the default values. If no _objects_ are given, `[print()](<https://docs.python.org/3/library/functions.html#print>)` will just write _end_. The _file_ argument must be an object with a `write(string)` method; if it is not present or `None`, `[sys.stdout](<https://docs.python.org/3/library/sys.html#sys.stdout>)` will be used. Since printed arguments are converted to text strings, `[print()](<https://docs.python.org/3/library/functions.html#print>)` cannot be used with binary mode file objects. For these, use `file.write(...)` instead. Whether output is buffered is usually determined by _file_, but if the _flush_ keyword argument is true, the stream is forcibly flushed. _Changed in version 3.3:_ Added the _flush_ keyword argument.

_class_ **`property`**\(_fget=None_, _fset=None_, _fdel=None_, _doc=None_\)Return a property attribute. _fget_ is a function for getting an attribute value. _fset_ is a function for setting an attribute value. _fdel_ is a function for deleting an attribute value. And _doc_ creates a docstring for the attribute. A typical use is to define a managed attribute `x`:

**\`class** **C**: **def** **init**\(self\): self.\_x = **Nonedef** getx\(self\): **return** self.\_x

```text
**def** setx(self, value):
    self._x = value

**def** delx(self):
    **del** self._x

x = property(getx, setx, delx, "I'm the 'x' property.")`
```

If _c_ is an instance of _C_, `c.x` will invoke the getter, `c.x = value` will invoke the setter and `del c.x` the deleter. If given, _doc_ will be the docstring of the property attribute. Otherwise, the property will copy _fget_’s docstring \(if it exists\). This makes it possible to create read-only properties easily using `[property()](<https://docs.python.org/3/library/functions.html#property>)` as a [decorator](https://docs.python.org/3/glossary.html#term-decorator):

**\`class** **Parrot**: **def** **init**\(self\): self.\_voltage = 100000

```text
**@propertydef** voltage(self):
    *"""Get the current voltage."""***return** self._voltage`
```

The `@property` decorator turns the `voltage()` method into a “getter” for a read-only attribute with the same name, and it sets the docstring for _voltage_ to “Get the current voltage.” A property object has `getter`, `setter`, and `deleter` methods usable as decorators that create a copy of the property with the corresponding accessor function set to the decorated function. This is best explained with an example:

**\`class** **C**: **def** **init**\(self\): self.\_x = **None@propertydef** x\(self\): \*"""I'm the 'x' property."""\***return** self.\_x

```text
**@x**.setter
**def** x(self, value):
    self._x = value

**@x**.deleter
**def** x(self):
    **del** self._x`
```

This code is exactly equivalent to the first example. Be sure to give the additional functions the same name as the original property \(`x` in this case.\) The returned property object also has the attributes `fget`, `fset`, and `fdel` corresponding to the constructor arguments. _Changed in version 3.5:_ The docstrings of property objects are now writeable.

_class_ **`range`**\(_stop_\)_class_ **`range`**\(_start_, _stop_\[, _step_\]\)Rather than being a function, `[range](<https://docs.python.org/3/library/stdtypes.html#range>)` is actually an immutable sequence type, as documented in [Ranges](https://docs.python.org/3/library/stdtypes.html#typesseq-range) and [Sequence Types — list, tuple, range](https://docs.python.org/3/library/stdtypes.html#typesseq).

**`repr`**\(_object_\)Return a string containing a printable representation of an object. For many types, this function makes an attempt to return a string that would yield an object with the same value when passed to `[eval()](<https://docs.python.org/3/library/functions.html#eval>)`, otherwise the representation is a string enclosed in angle brackets that contains the name of the type of the object together with additional information often including the name and address of the object. A class can control what this function returns for its instances by defining a `[__repr__()](<https://docs.python.org/3/reference/datamodel.html#object.__repr__>)` method.

**`reversed`**\(_seq_\)Return a reverse [iterator](https://docs.python.org/3/glossary.html#term-iterator). _seq_ must be an object which has a `[__reversed__()](<https://docs.python.org/3/reference/datamodel.html#object.__reversed__>)` method or supports the sequence protocol \(the `[__len__()](<https://docs.python.org/3/reference/datamodel.html#object.__len__>)` method and the `[__getitem__()](<https://docs.python.org/3/reference/datamodel.html#object.__getitem__>)` method with integer arguments starting at `0`\).

**`round`**\(_number_\[, _ndigits_\]\)Return _number_ rounded to _ndigits_ precision after the decimal point. If _ndigits_ is omitted or is `None`, it returns the nearest integer to its input. For the built-in types supporting `[round()](<https://docs.python.org/3/library/functions.html#round>)`, values are rounded to the closest multiple of 10 to the power minus _ndigits_; if two multiples are equally close, rounding is done toward the even choice \(so, for example, both `round(0.5)` and `round(-0.5)` are `0`, and `round(1.5)` is `2`\). Any integer value is valid for _ndigits_ \(positive, zero, or negative\). The return value is an integer if _ndigits_ is omitted or `None`. Otherwise the return value has the same type as _number_. For a general Python object `number`, `round` delegates to `number.__round__`. **Note** The behavior of `[round()](<https://docs.python.org/3/library/functions.html#round>)` for floats can be surprising: for example, `round(2.675, 2)` gives `2.67` instead of the expected `2.68`. This is not a bug: it’s a result of the fact that most decimal fractions can’t be represented exactly as a float. See [Floating Point Arithmetic: Issues and Limitations](https://docs.python.org/3/tutorial/floatingpoint.html#tut-fp-issues) for more information.

_class_ **`set`**\(\[_iterable_\]\)Return a new `[set](<https://docs.python.org/3/library/stdtypes.html#set>)` object, optionally with elements taken from _iterable_. `set` is a built-in class. See `[set](<https://docs.python.org/3/library/stdtypes.html#set>)` and [Set Types — set, frozenset](https://docs.python.org/3/library/stdtypes.html#types-set) for documentation about this class. For other containers see the built-in `[frozenset](<https://docs.python.org/3/library/stdtypes.html#frozenset>)`, `[list](<https://docs.python.org/3/library/stdtypes.html#list>)`, `[tuple](<https://docs.python.org/3/library/stdtypes.html#tuple>)`, and `[dict](<https://docs.python.org/3/library/stdtypes.html#dict>)` classes, as well as the `[collections](<https://docs.python.org/3/library/collections.html#module-collections>)` module.

**`setattr`**\(_object_, _name_, _value_\)This is the counterpart of `[getattr()](<https://docs.python.org/3/library/functions.html#getattr>)`. The arguments are an object, a string and an arbitrary value. The string may name an existing attribute or a new attribute. The function assigns the value to the attribute, provided the object allows it. For example, `setattr(x, 'foobar', 123)` is equivalent to `x.foobar = 123`. **Note** Since [private name mangling](https://docs.python.org/3/reference/expressions.html#private-name-mangling) happens at compilation time, one must manually mangle a private attribute’s \(attributes with two leading underscores\) name in order to set it with `[setattr()](<https://docs.python.org/3/library/functions.html#setattr>)`.

_class_ **`slice`**\(_stop_\)_class_ **`slice`**\(_start_, _stop_\[, _step_\]\)Return a [slice](https://docs.python.org/3/glossary.html#term-slice) object representing the set of indices specified by `range(start, stop, step)`. The _start_ and _step_ arguments default to `None`. Slice objects have read-only data attributes `start`, `stop` and `step` which merely return the argument values \(or their default\). They have no other explicit functionality; however they are used by Numerical Python and other third party extensions. Slice objects are also generated when extended indexing syntax is used. For example: `a[start:stop:step]` or `a[start:stop, i]`. See `[itertools.islice()](<https://docs.python.org/3/library/itertools.html#itertools.islice>)` for an alternate version that returns an iterator.

**`sorted`**\(_iterable_, \*\*\*, _key=None_, _reverse=False_\)Return a new sorted list from the items in _iterable_. Has two optional arguments which must be specified as keyword arguments. _key_ specifies a function of one argument that is used to extract a comparison key from each element in _iterable_ \(for example, `key=str.lower`\). The default value is `None` \(compare the elements directly\). _reverse_ is a boolean value. If set to `True`, then the list elements are sorted as if each comparison were reversed. Use `[functools.cmp_to_key()](<https://docs.python.org/3/library/functools.html#functools.cmp_to_key>)` to convert an old-style _cmp_ function to a _key_ function. The built-in `[sorted()](<https://docs.python.org/3/library/functions.html#sorted>)` function is guaranteed to be stable. A sort is stable if it guarantees not to change the relative order of elements that compare equal — this is helpful for sorting in multiple passes \(for example, sort by department, then by salary grade\). For sorting examples and a brief sorting tutorial, see [Sorting HOW TO](https://docs.python.org/3/howto/sorting.html#sortinghowto).

`@**staticmethod**`Transform a method into a static method. A static method does not receive an implicit first argument. To declare a static method, use this idiom:

\*\*`class** **C**: **@staticmethoddef** f(arg1, arg2, ...): ...`

The `@staticmethod` form is a function [decorator](https://docs.python.org/3/glossary.html#term-decorator) – see [Function definitions](https://docs.python.org/3/reference/compound_stmts.html#function) for details. A static method can be called either on the class \(such as `C.f()`\) or on an instance \(such as `C().f()`\). Static methods in Python are similar to those found in Java or C++. Also see `[classmethod()](<https://docs.python.org/3/library/functions.html#classmethod>)` for a variant that is useful for creating alternate class constructors. Like all decorators, it is also possible to call `staticmethod` as a regular function and do something with its result. This is needed in some cases where you need a reference to a function from a class body and you want to avoid the automatic transformation to instance method. For these cases, use this idiom:

\*\*`class** **C**: builtin_open = staticmethod(open)`

For more information on static methods, see [The standard type hierarchy](https://docs.python.org/3/reference/datamodel.html#types).

_class_ **`str`**\(_object=''_\)_class_ **`str`**\(_object=b''_, _encoding='utf-8'_, _errors='strict'_\)Return a `[str](<https://docs.python.org/3/library/stdtypes.html#str>)` version of _object_. See `[str()](<https://docs.python.org/3/library/stdtypes.html#str>)` for details. `str` is the built-in string [class](https://docs.python.org/3/glossary.html#term-class). For general information about strings, see [Text Sequence Type — str](https://docs.python.org/3/library/stdtypes.html#textseq).

**`sum`**\(_iterable_, _/_, _start=0_\)Sums _start_ and the items of an _iterable_ from left to right and returns the total. The _iterable_’s items are normally numbers, and the start value is not allowed to be a string. For some use cases, there are good alternatives to `[sum()](<https://docs.python.org/3/library/functions.html#sum>)`. The preferred, fast way to concatenate a sequence of strings is by calling `''.join(sequence)`. To add floating point values with extended precision, see `[math.fsum()](<https://docs.python.org/3/library/math.html#math.fsum>)`. To concatenate a series of iterables, consider using `[itertools.chain()](<https://docs.python.org/3/library/itertools.html#itertools.chain>)`. _Changed in version 3.8:_ The _start_ parameter can be specified as a keyword argument.

**`super`**\(\[_type_\[, _object-or-type_\]\]\)Return a proxy object that delegates method calls to a parent or sibling class of _type_. This is useful for accessing inherited methods that have been overridden in a class. The _object-or-type_ determines the [method resolution order](https://docs.python.org/3/glossary.html#term-method-resolution-order) to be searched. The search starts from the class right after the _type_. For example, if `[__mro__](<https://docs.python.org/3/library/stdtypes.html#class.__mro__>)` of _object-or-type_ is `D -> B -> C -> A -> object` and the value of _type_ is `B`, then `[super()](<https://docs.python.org/3/library/functions.html#super>)` searches `C -> A -> object`. The `[__mro__](<https://docs.python.org/3/library/stdtypes.html#class.__mro__>)` attribute of the _object-or-type_ lists the method resolution search order used by both `[getattr()](<https://docs.python.org/3/library/functions.html#getattr>)` and `[super()](<https://docs.python.org/3/library/functions.html#super>)`. The attribute is dynamic and can change whenever the inheritance hierarchy is updated. If the second argument is omitted, the super object returned is unbound. If the second argument is an object, `isinstance(obj, type)` must be true. If the second argument is a type, `issubclass(type2, type)` must be true \(this is useful for classmethods\). There are two typical use cases for _super_. In a class hierarchy with single inheritance, _super_ can be used to refer to parent classes without naming them explicitly, thus making the code more maintainable. This use closely parallels the use of _super_ in other programming languages. The second use case is to support cooperative multiple inheritance in a dynamic execution environment. This use case is unique to Python and is not found in statically compiled languages or languages that only support single inheritance. This makes it possible to implement “diamond diagrams” where multiple base classes implement the same method. Good design dictates that such implementations have the same calling signature in every case \(because the order of calls is determined at runtime, because that order adapts to changes in the class hierarchy, and because that order can include sibling classes that are unknown prior to runtime\). For both use cases, a typical superclass call looks like this:

\*\*`class** **C**(B): **def** method(self, arg): super().method(arg) *# This does the same thing as:# super(C, self).method(arg)*` In addition to method lookups, `[super()](<https://docs.python.org/3/library/functions.html#super>)` also works for attribute lookups. One possible use case for this is calling [descriptors](https://docs.python.org/3/glossary.html#term-descriptor) in a parent or sibling class. Note that `[super()](<https://docs.python.org/3/library/functions.html#super>)` is implemented as part of the binding process for explicit dotted attribute lookups such as `super().__getitem__(name)`. It does so by implementing its own `[__getattribute__()](<https://docs.python.org/3/reference/datamodel.html#object.__getattribute__>)` method for searching classes in a predictable order that supports cooperative multiple inheritance. Accordingly, `[super()](<https://docs.python.org/3/library/functions.html#super>)` is undefined for implicit lookups using statements or operators such as `super()[name]`. Also note that, aside from the zero argument form, `[super()](<https://docs.python.org/3/library/functions.html#super>)` is not limited to use inside methods. The two argument form specifies the arguments exactly and makes the appropriate references. The zero argument form only works inside a class definition, as the compiler fills in the necessary details to correctly retrieve the class being defined, as well as accessing the current instance for ordinary methods. For practical suggestions on how to design cooperative classes using `[super()](<https://docs.python.org/3/library/functions.html#super>)`, see [guide to using super\(\)](https://rhettinger.wordpress.com/2011/05/26/super-considered-super/).

_class_ **`tuple`**\(\[_iterable_\]\)Rather than being a function, `[tuple](<https://docs.python.org/3/library/stdtypes.html#tuple>)` is actually an immutable sequence type, as documented in [Tuples](https://docs.python.org/3/library/stdtypes.html#typesseq-tuple) and [Sequence Types — list, tuple, range](https://docs.python.org/3/library/stdtypes.html#typesseq).

_class_ **`type`**\(_object_\)_class_ **`type`**\(_name_, _bases_, _dict_, \*\*_kwds_\)With one argument, return the type of an _object_. The return value is a type object and generally the same object as returned by `[object.__class__](<https://docs.python.org/3/library/stdtypes.html#instance.__class__>)`. The `[isinstance()](<https://docs.python.org/3/library/functions.html#isinstance>)` built-in function is recommended for testing the type of an object, because it takes subclasses into account. With three arguments, return a new type object. This is essentially a dynamic form of the `[class](<https://docs.python.org/3/reference/compound_stmts.html#class>)` statement. The _name_ string is the class name and becomes the `[__name__](<https://docs.python.org/3/library/stdtypes.html#definition.__name__>)` attribute. The _bases_ tuple contains the base classes and becomes the `[__bases__](<https://docs.python.org/3/library/stdtypes.html#class.__bases__>)` attribute; if empty, `[object](<https://docs.python.org/3/library/functions.html#object>)`, the ultimate base of all classes, is added. The _dict_ dictionary contains attribute and method definitions for the class body; it may be copied or wrapped before becoming the `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attribute. The following two statements create identical `[type](<https://docs.python.org/3/library/functions.html#type>)` objects:&gt;&gt;&gt;

\*\*`>>> class** **X**: **...** a = 1 **...>>>** X = type('X', (), dict(a=1))`

See also [Type Objects](https://docs.python.org/3/library/stdtypes.html#bltin-type-objects). Keyword arguments provided to the three argument form are passed to the appropriate metaclass machinery \(usually `[__init_subclass__()](<https://docs.python.org/3/reference/datamodel.html#object.__init_subclass__>)`\) in the same way that keywords in a class definition \(besides _metaclass_\) would. See also [Customizing class creation](https://docs.python.org/3/reference/datamodel.html#class-customization). _Changed in version 3.6:_ Subclasses of `[type](<https://docs.python.org/3/library/functions.html#type>)` which don’t override `type.__new__` may no longer use the one-argument form to get the type of an object.

**`vars`**\(\[_object_\]\)Return the `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attribute for a module, class, instance, or any other object with a `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attribute. Objects such as modules and instances have an updateable `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attribute; however, other objects may have write restrictions on their `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attributes \(for example, classes use a `[types.MappingProxyType](<https://docs.python.org/3/library/types.html#types.MappingProxyType>)` to prevent direct dictionary updates\). Without an argument, `[vars()](<https://docs.python.org/3/library/functions.html#vars>)` acts like `[locals()](<https://docs.python.org/3/library/functions.html#locals>)`. Note, the locals dictionary is only useful for reads since updates to the locals dictionary are ignored. A `[TypeError](<https://docs.python.org/3/library/exceptions.html#TypeError>)` exception is raised if an object is specified but it doesn’t have a `[__dict__](<https://docs.python.org/3/library/stdtypes.html#object.__dict__>)` attribute \(for example, if its class defines the `[__slots__](<https://docs.python.org/3/reference/datamodel.html#object.__slots__>)` attribute\).

**`zip`**\(\*_iterables_\)Make an iterator that aggregates elements from each of the iterables. Returns an iterator of tuples, where the _i_-th tuple contains the _i_-th element from each of the argument sequences or iterables. The iterator stops when the shortest input iterable is exhausted. With a single iterable argument, it returns an iterator of 1-tuples. With no arguments, it returns an empty iterator. Equivalent to:

\*\*`def** zip(*iterables): *# zip('ABCD', 'xy') --> Ax By*sentinel = object() iterators = [iter(it) **for** it **in** iterables] **while** iterators: result = [] **for** it **in** iterators: elem = next(it, sentinel) **if** elem **is** sentinel: **return**result.append(elem) **yield** tuple(result)`

The left-to-right evaluation order of the iterables is guaranteed. This makes possible an idiom for clustering a data series into n-length groups using `zip(*[iter(s)]*n)`. This repeats the _same_ iterator `n` times so that each output tuple has the result of `n` calls to the iterator. This has the effect of dividing the input into n-length chunks. `[zip()](<https://docs.python.org/3/library/functions.html#zip>)` should only be used with unequal length inputs when you don’t care about trailing, unmatched values from the longer iterables. If those values are important, use `[itertools.zip_longest()](<https://docs.python.org/3/library/itertools.html#itertools.zip_longest>)` instead. `[zip()](<https://docs.python.org/3/library/functions.html#zip>)` in conjunction with the `*` operator can be used to unzip a list:&gt;&gt;&gt;

\*\*`>>>** x = [1, 2, 3] **>>>** y = [4, 5, 6] **>>>** zipped = zip(x, y) **>>>** list(zipped) [(1, 4), (2, 5), (3, 6)] **>>>** x2, y2 = zip(*zip(x, y)) **>>>** x == list(x2) **and** y == list(y2) True`

**`__import__`**\(_name_, _globals=None_, _locals=None_, _fromlist=\(\)_, _level=0_\)**Note** This is an advanced function that is not needed in everyday Python programming, unlike `[importlib.import_module()](<https://docs.python.org/3/library/importlib.html#importlib.import_module>)`. This function is invoked by the `[import](<https://docs.python.org/3/reference/simple_stmts.html#import>)` statement. It can be replaced \(by importing the `[builtins](<https://docs.python.org/3/library/builtins.html#module-builtins>)` module and assigning to `builtins.__import__`\) in order to change semantics of the `import` statement, but doing so is **strongly** discouraged as it is usually simpler to use import hooks \(see [**PEP 302**](https://www.python.org/dev/peps/pep-0302)\) to attain the same goals and does not cause issues with code which assumes the default import implementation is in use. Direct use of `[__import__()](<https://docs.python.org/3/library/functions.html#__import__>)` is also discouraged in favor of `[importlib.import_module()](<https://docs.python.org/3/library/importlib.html#importlib.import_module>)`. The function imports the module _name_, potentially using the given _globals_ and _locals_ to determine how to interpret the name in a package context. The _fromlist_ gives the names of objects or submodules that should be imported from the module given by _name_. The standard implementation does not use its _locals_ argument at all, and uses its _globals_ only to determine the package context of the `[import](<https://docs.python.org/3/reference/simple_stmts.html#import>)` statement. _level_ specifies whether to use absolute or relative imports. `0` \(the default\) means only perform absolute imports. Positive values for _level_ indicate the number of parent directories to search relative to the directory of the module calling `[__import__()](<https://docs.python.org/3/library/functions.html#__import__>)` \(see [**PEP 328**](https://www.python.org/dev/peps/pep-0328) for the details\). When the _name_ variable is of the form `package.module`, normally, the top-level package \(the name up till the first dot\) is returned, _not_ the module named by _name_. However, when a non-empty _fromlist_ argument is given, the module named by _name_ is returned. For example, the statement `import spam` results in bytecode resembling the following code:

`spam = __import__('spam', globals(), locals(), [], 0)`

The statement `import spam.ham` results in this call:

`spam = __import__('spam.ham', globals(), locals(), [], 0)`

Note how `[__import__()](<https://docs.python.org/3/library/functions.html#__import__>)` returns the toplevel module here because this is the object that is bound to a name by the `[import](<https://docs.python.org/3/reference/simple_stmts.html#import>)` statement. On the other hand, the statement `from spam.ham import eggs, sausage as saus` results in

`_temp = __import__('spam.ham', globals(), locals(), ['eggs', 'sausage'], 0) eggs = _temp.eggs saus = _temp.sausage`

Here, the `spam.ham` module is returned from `[__import__()](<https://docs.python.org/3/library/functions.html#__import__>)`. From this object, the names to import are retrieved and assigned to their respective names. If you simply want to import a module \(potentially within a package\) by name, use `[importlib.import_module()](<https://docs.python.org/3/library/importlib.html#importlib.import_module>)`.

[2021-03-06_Python-Study-Guide-for-a-JavaScript-Programmer-](https://www.notion.so/2021-03-06_Python-Study-Guide-for-a-JavaScript-Programmer-ebc5827f851743d2bd7fd5b73a84559d)

[Built-in Types](https://www.notion.so/Built-in-Types-96a0c35183e34972b518e460cb13006c)
