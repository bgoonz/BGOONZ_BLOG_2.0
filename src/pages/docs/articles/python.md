---
title: Python For JS Devs
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


## Python For JS Developers:


# Python Study Guide for a JavaScript Programmer


A guide to commands in Python from what you know in JavaScript

---

### Python Study Guide for a JavaScript Programmer

<figure><img src="https://cdn-images-1.medium.com/max/800/1*3V9VOfPk_hrFdbEAd3j-QQ.png" class="graf-image" /></figure>### Applications of Tutorial & Cheat Sheet Respectivley (At Bottom Of Tutorial):

### Basics

- <span id="f893">**PEP8** : Python Enhancement Proposals, style-guide for Python.</span>
- <span id="c0bf">`print` is the equivalent of `console.log`.</span>

> ‘print() == console.log()’

### `#` is used to make comments in your code.

    def foo():
        """
        The foo function does many amazing things that you
        should not question. Just accept that it exists and
        use it with caution.
        """
        secretThing()

> _Python has a built in help function that let’s you see a description of the source code without having to navigate to it… “-SickNasty … Autor Unknown”_

---

### Numbers

- <span id="4060">Python has three types of numbers:</span>

1.  <span id="8aef">**Integer**</span>
2.  <span id="723f">**Positive and Negative Counting Numbers.**</span>

No Decimal Point

> Created by a literal non-decimal point number … **or** … with the `int()` constructor.

    print(3) # => 3
    print(int(19)) # => 19
    print(int()) # => 0

**3. Complex Numbers**

> Consist of a real part and imaginary part.

#### Boolean is a subtype of integer in Python.🤷‍♂️

> If you came from a background in JavaScript and learned to accept the premise(s) of the following meme…

<figure><img src="https://cdn-images-1.medium.com/max/800/0*eC4EvZcv6hhH88jX.png" class="graf-image" /></figure>Than I am sure you will find the means to suspend your disbelief.

    print(2.24) # => 2.24
    print(2.) # => 2.0
    print(float()) # => 0.0
    print(27e-5) # => 0.00027

### KEEP IN MIND:

> **The** `i` **is switched to a** `j` **in programming.**

<span class="graf-dropCap">T</span>\*his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-\***_space_** _when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler._

    print(7j) # => 7j
    print(5.1+7.7j)) # => 5.1+7.7j
    print(complex(3, 5)) # => 3+5j
    print(complex(17)) # => 17+0j
    print(complex()) # => 0j

- <span id="2579">**Type Casting** : The process of converting one number to another.</span>

<!-- -->

    # Using Float
    print(17)               # => 17
    print(float(17))        # => 17.0

    # Using Int
    print(17.0)             # => 17.0
    print(int(17.0))        # => 17

    # Using Str
    print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17

**The arithmetic operators are the same between JS and Python, with two additions:**

- <span id="8cf4">_“\*\*” : Double asterisk for exponent._</span>
- <span id="03b4">_“//” : Integer Division._</span>
- <span id="2ce5">**There are no spaces between math operations in Python.**</span>
- <span id="1686">**Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing** `Math.floor()` **in JS.**</span>
- <span id="a6a3">**There are no** `++` **and** `--` **in Python, the only shorthand operators are:**</span>

<figure><img src="https://cdn-images-1.medium.com/max/600/0*Ez_1PZ93N4FfvkRr.png" class="graf-image" /></figure>

---

### Strings

- <span id="e98c">Python uses both single and double quotes.</span>
- <span id="225e">You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`</span>
- <span id="9f74">Multiline strings use triple quotes.</span>

<!-- -->

    print('''My instructions are very long so to make them
    more readable in the code I am putting them on
    more than one line. I can even include "quotes"
    of any kind because they won't get confused with
    the end of the string!''')

**Use the** `len()` **function to get the length of a string.**

    print(len(“Spaghetti”)) # => 9

### **Python uses** `zero-based indexing`

#### Python allows negative indexing (thank god!)

    print(“Spaghetti”[-1]) # => i

    print(“Spaghetti”[-4]) # => e

- <span id="7567">Python let’s you use ranges</span>

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _(mind you that in JS … strings are wrapped in an object (under the hood)… upon which the string methods are actually called. As a immutable privative type_ **\*by textbook definition\*\***, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.)\*

    print(“Spaghetti”[1:4]) # => pag
    print(“Spaghetti”[4:-1]) # => hett
    print(“Spaghetti”[4:4]) # => (empty string)

- <span id="1366">The end range is exclusive just like `slice` in JS.</span>

<!-- -->

    # Shortcut to get from the beginning of a string to a certain index.
    print("Spaghetti"[:4])  # => Spag
    print("Spaghetti"[:-1])    # => Spaghett

    # Shortcut to get from a certain index to the end of a string.
    print("Spaghetti"[1:])  # => paghetti
    print("Spaghetti"[-4:])    # => etti

- <span id="c786">The `index` string function is the equiv. of `indexOf()` in JS</span>

<!-- -->

    print("Spaghetti".index("h"))    # => 4
    print("Spaghetti".index("t"))    # => 6

- <span id="fbb6">The `count` function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.</span>

<!-- -->

    print("Spaghetti".count("h"))    # => 1
    print("Spaghetti".count("t"))    # => 2
    print("Spaghetti".count("s"))    # => 0
    print('''We choose to go to the moon in this decade and do the other things,
    not because they are easy, but because they are hard, because that goal will
    serve to organize and measure the best of our energies and skills, because that
    challenge is one that we are willing to accept, one we are unwilling to
    postpone, and one which we intend to win, and the others, too.
    '''.count('the '))                # => 4

- <span id="7816">**You can use** `+` **to concatenate strings, just like in JS.**</span>
- <span id="ed0a">**You can also use “\*” to repeat strings or multiply strings.**</span>
- <span id="f95c">**Use the** `format()` **function to use placeholders in a string to input values later on.**</span>

<!-- -->

    first_name = "Billy"
    last_name = "Bob"
    print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob

- <span id="445b">_Shorthand way to use format function is:  
  _`print(f'Your name is {first_name} {last_name}')`</span>

#### Some useful string methods.

- <span id="118c">**Note that in JS** `join` **is used on an Array, in Python it is used on String.**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*eE3E5H0AoqkhqK1z.png" class="graf-image" /></figure>-   <span id="e95e">There are also many handy testing methods.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Q0CMqFd4PozLDFPB.png" class="graf-image" /></figure>

---

### Variables and Expressions

- <span id="a255">**Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.</span>
- <span id="6e70">Duck Typing is the fundamental approach of Python.</span>
- <span id="5666">Assignment of a value automatically declares a variable.</span>

<!-- -->

    a = 7
    b = 'Marbles'
    print(a)         # => 7
    print(b)         # => Marbles

- <span id="f6cf">**_You can chain variable assignments to give multiple var names the same value._**</span>

#### Use with caution as this is highly unreadable

    count = max = min = 0
    print(count)           # => 0
    print(max)             # => 0
    print(min)             # => 0

#### The value and type of a variable can be re-assigned at any time.

    a = 17
    print(a)         # => 17
    a = 'seventeen'
    print(a)         # => seventeen

- <span id="4605">`NaN` _does not exist in Python, but you can 'create' it like so:  
  _`print(float("nan"))`</span>
- <span id="d150">_Python replaces_ `null` _with_ `none`_._</span>
- <span id="6fa7">`none` **_is an object_** _and can be directly assigned to a variable._</span>

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

---

### Boolean Data Type

- <span id="b843">One of the biggest benefits of Python is that it reads more like English than JS does.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*HQpndNhm1Z_xSoHb.png" class="graf-image" /></figure># Logical AND
    print(True and True)    # => True
    print(True and False)   # => False
    print(False and False)  # => False

    # Logical OR
    print(True or True)     # => True
    print(True or False)    # => True
    print(False or False)   # => False

    # Logical NOT
    print(not True)             # => False
    print(not False and True)   # => True
    print(not True or False)    # => False

- <span id="18cc">By default, Python considers an object to be true UNLESS it is one of the following:</span>
- <span id="6e0a">Constant `None` or `False`</span>
- <span id="9552">Zero of any numeric type.</span>
- <span id="e7ce">Empty Sequence or Collection.</span>
- <span id="11d6">`True` and `False` must be capitalized</span>

---

### Comparison Operators

- <span id="a4fa">Python uses all the same equality operators as JS.</span>
- <span id="7f98">In Python, equality operators are processed from left to right.</span>
- <span id="fb68">Logical operators are processed in this order:</span>

1.  <span id="bf08">**NOT**</span>
2.  <span id="4888">**AND**</span>
3.  <span id="2c55">**OR**</span>

> Just like in JS, you can use `parentheses` to change the inherent order of operations.

> **Short Circuit** : Stopping a program when a `true` or `false` has been reached.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*qHzGRLTOMTf30miT.png" class="graf-image" /></figure>

---

### Identity vs Equality

    print (2 == '2')    # => False
    print (2 is '2')    # => False

    print ("2" == '2')    # => True
    print ("2" is '2')    # => True

    # There is a distinction between the number types.
    print (2 == 2.0)    # => True
    print (2 is 2.0)    # => False

- <span id="c5a5">In the Python community it is better to use `is` and `is not` over `==` or `!=`</span>

---

### If Statements

    if name == 'Monica':
        print('Hi, Monica.')

    if name == 'Monica':
        print('Hi, Monica.')
    else:
        print('Hello, stranger.')

    if name == 'Monica':
        print('Hi, Monica.')
    elif age < 12:
        print('You are not Monica, kiddo.')
    elif age > 2000:
       print('Unlike you, Monica is not an undead, immortal vampire.')
    elif age > 100:
       print('You are not Monica, grannie.')

> Remember the order of `elif` statements matter.

---

### While Statements

    spam = 0
    while spam < 5:
      print('Hello, world.')
      spam = spam + 1

- <span id="c7f3">`Break` statement also exists in Python.</span>

<!-- -->

    spam = 0
    while True:
      print('Hello, world.')
      spam = spam + 1
      if spam >= 5:
        break

- <span id="7a99">As are `continue` statements</span>

<!-- -->

    spam = 0
    while True:
      print('Hello, world.')
      spam = spam + 1
      if spam < 5:
        continue
      break

---

### Try/Except Statements

- <span id="72ec">Python equivalent to `try/catch`</span>

<!-- -->

    a = 321
    try:
        print(len(a))
    except:
        print('Silently handle error here')

        # Optionally include a correction to the issue
        a = str(a)
        print(len(a)

    a = '321'
    try:
        print(len(a))
    except:
        print('Silently handle error here')

        # Optionally include a correction to the issue
        a = str(a)
        print(len(a))

- <span id="dcd1">You can name an error to give the output more specificity.</span>

<!-- -->

    a = 100
    b = 0
    try:
        c = a / b
    except ZeroDivisionError:
        c = None
    print(c)

- <span id="4027">You can also use the `pass` commmand to by pass a certain error.</span>

<!-- -->

    a = 100
    b = 0
    try:
        print(a / b)
    except ZeroDivisionError:
        pass

- <span id="030b">The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:</span>

<!-- -->

    a = 100
    # b = "5"
    try:
        print(a / b)
    except ZeroDivisionError:
        pass
    except (TypeError, NameError):
        print("ERROR!")

- <span id="bf45">You can use an `else` statement to end a chain of `except` statements.</span>

<!-- -->

    # tuple of file names
    files = ('one.txt', 'two.txt', 'three.txt')

    # simple loop
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

- <span id="0e91">`finally` is used at the end to clean up all actions under any circumstance.</span>

<!-- -->

    def divide(x, y):
        try:
            result = x / y
        except ZeroDivisionError:
            print("Cannot divide by zero")
        else:
            print("Result is", result)
        finally:
            print("Finally...")

- <span id="84ee">Using duck typing to check to see if some value is able to use a certain method.</span>

<!-- -->

    # Try a number - nothing will print out
    a = 321
    if hasattr(a, '__len__'):
        print(len(a))

    # Try a string - the length will print out (4 in this case)
    b = "5555"
    if hasattr(b, '__len__'):
        print(len(b))

---

### Pass

- <span id="2b80">Pass Keyword is required to write the JS equivalent of :</span>

<!-- -->

    if (true) {
    }

    while (true) {}

    if True:
      pass

    while True:
      pass

---

### Functions

- <span id="7091">**Function definition includes:**</span>
- <span id="1f11">**The** `def` **keyword**</span>
- <span id="ec14">**The name of the function**</span>
- <span id="7733">**A list of parameters enclosed in parentheses.**</span>
- <span id="1516">**A colon at the end of the line.**</span>
- <span id="b2dd">**One tab indentation for the code to run.**</span>
- <span id="bcef">**You can use default parameters just like in JS**</span>

<!-- -->

    def greeting(name, saying="Hello"):
        print(saying, name)

    greeting("Monica")
    # Hello Monica

    greeting("Barry", "Hey")
    # Hey Barry

#### **Keep in mind, default parameters must always come after regular parameters.**

    # THIS IS BAD CODE AND WILL NOT RUN
    def increment(delta=1, value):
        return delta + value

- <span id="c1aa">_You can specify arguments by name without destructuring in Python._</span>

<!-- -->

    def greeting(name, saying="Hello"):
        print(saying, name)

    # name has no default value, so just provide the value
    # saying has a default value, so use a keyword argument
    greeting("Monica", saying="Hi")

- <span id="54ac">The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.</span>

`toUpper = lambda s: s.upper()`

---

### Notes

#### Formatted Strings

> Remember that in Python join() is called on a string with an array/list passed in as the argument.  
> Python has a very powerful formatting engine.  
> format() is also applied directly to strings.

    shopping_list = [‘bread’,’milk’,’eggs’]
    print(‘,’.join(shopping_list))

### Comma Thousands Separator

    print(‘{:,}’.format(1234567890))
    ‘1,234,567,890’

### Date and Time

    d = datetime.datetime(2020, 7, 4, 12, 15, 58)
    print(‘{:%Y-%m-%d %H:%M:%S}’.format(d))
    ‘2020–07–04 12:15:58’

### Percentage

    points = 190
    total = 220
    print(‘Correct answers: {:.2%}’.format(points/total))
    Correct answers: 86.36%

### Data Tables

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

**Python can be used to display html, css, and JS.**  
_It is common to use Python as an API (Application Programming Interface)_

#### Structured Data

#### Sequence : The most basic data structure in Python where the index determines the order.

> List  
> Tuple  
> Range  
> Collections : Unordered data structures, hashable values.

---

#### Dictionaries Sets

#### Iterable : Generic name for a sequence or collection; any object that can be iterated through.

#### Can be mutable or immutable. Built In Data Types

---

### Lists are the python equivalent of arrays.

    empty_list = []
    departments = [‘HR’,’Development’,’Sales’,’Finance’,’IT’,’Customer Support’]

### You can instantiate

    specials = list()

#### Test if a value is in a list.

    print(1 in [1, 2, 3]) #> True
    print(4 in [1, 2, 3]) #> False
    # Tuples : Very similar to lists, but they are immutable

#### Instantiated with parentheses

    time_blocks = (‘AM’,’PM’)

#### Sometimes instantiated without

    colors = ‘red’,’blue’,’green’
    numbers = 1, 2, 3

#### Tuple() built in can be used to convert other data into a tuple

    tuple(‘abc’) # returns (‘a’, ‘b’, ‘c’)
    tuple([1,2,3]) # returns (1, 2, 3)
    # Think of tuples as constant variables.

#### Ranges : A list of numbers which can’t be changed; often used with for loops.

**Declared using one to three parameters**.

> Start : opt. default 0, first \# in sequence.  
> Stop : required next number past the last number in the sequence.  
> Step : opt. default 1, difference between each number in the sequence.

    range(5) # [0, 1, 2, 3, 4]
    range(1,5) # [1, 2, 3, 4]
    range(0, 25, 5) # [0, 5, 10, 15, 20]
    range(0) # [ ]
    for let (i = 0; i < 5; i++)
    for let (i = 1; i < 5; i++)
    for let (i = 0; i < 25; i+=5)
    for let(i = 0; i = 0; i++)
    # Keep in mind that stop is not included in the range.

#### Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.

#### Mutable.

    a = {‘one’:1, ‘two’:2, ‘three’:3}
    b = dict(one=1, two=2, three=3)
    c = dict([(‘two’, 2), (‘one’, 1), (‘three’, 3)])
    # a, b, and c are all equal

**_Declared with curly braces of the built in dict()_**

> _Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal._

**Use the in operator to see if a key exists in a dictionary.**

<span class="graf-dropCap">S</span>**ets : Unordered collection of distinct objects; objects that need to be hashable.**

> _Always be unique, duplicate items are auto dropped from the set._

#### Common Uses:

> Removing Duplicates  
> Membership Testing  
> Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.

**Standard Set is mutable, Python has a immutable version called frozenset.  
Sets created by putting comma seperated values inside braces:**

    school_bag = {‘book’,’paper’,’pencil’,’pencil’,’book’,’book’,’book’,’eraser’}
    print(school_bag)

#### Also can use set constructor to automatically put it into a set.

    letters = set(‘abracadabra’)
    print(letters)
    #Built-In Functions
    #Functions using iterables

**filter(function, iterable) : creates new iterable of the same type which includes each item for which the function returns true.**

**map(function, iterable) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted(iterable, key=None, reverse=False) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate(iterable, start=0) : starts with a sequence and converts it to a series of tuples**

    quarters = [‘First’, ‘Second’, ‘Third’, ‘Fourth’]
    print(enumerate(quarters))
    print(enumerate(quarters, start=1))

#### (0, ‘First’), (1, ‘Second’), (2, ‘Third’), (3, ‘Fourth’)

#### (1, ‘First’), (2, ‘Second’), (3, ‘Third’), (4, ‘Fourth’)

> zip(\*iterables) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.  
> Functions that analyze iterable

**len(iterable) : returns the count of the number of items.**

**max(\*args, key=None) : returns the largest of two or more arguments.**

**max(iterable, key=None) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be compared.  
min works the same way as max_

**sum(iterable) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one string, so do not use sum for that._

**any(iterable) : returns True if any items in the iterable are true.**

**all(iterable) : returns True is all items in the iterable are true.**

### Working with dictionaries

**dir(dictionary) : returns the list of keys in the dictionary.  
Working with sets**

**Union : The pipe | operator or union(\*sets) function can be used to produce a new set which is a combination of all elements in the provided set.**

    a = {1, 2, 3}
    b = {2, 4, 6}
    print(a | b) # => {1, 2, 3, 4, 6}

#### Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets.

    a = {1, 2, 3}
    b = {2, 4, 6}
    print(a & b) # => {2}
    Difference : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.

**Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.**

    a = {1, 2, 3}
    b = {2, 4, 6}
    print(a — b) # => {1, 3}
    print(b — a) # => {4, 6}
    print(a ^ b) # => {1, 3, 4, 6}

---

### **For Statements In python, there is only one for loop.**

Always Includes:

> 1. The for keyword
> 2. A variable name
> 3. The ‘in’ keyword
> 4. An iterable of some kid
> 5. A colon
> 6. On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

    print(‘My name is’)
    for i in range(5):
    print(‘Carlita Cinco (‘ + str(i) + ‘)’)

    total = 0
    for num in range(101):
    total += num
    print(total)
    Looping over a list in Python
    for c in [‘a’, ‘b’, ‘c’]:
    print(c)

    lst = [0, 1, 2, 3]
    for i in lst:
    print(i)

**_Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list._**

    supplies = [‘pens’, ‘staplers’, ‘flame-throwers’, ‘binders’]
    for i in range(len(supplies)):
    print(‘Index ‘ + str(i) + ‘ in supplies is: ‘ + supplies[i])

**You can loop and destructure at the same time.**

    l = 1, 2], [3, 4], [5, 6
    for a, b in l:
    print(a, ‘, ‘, b)

> Prints 1, 2

> Prints 3, 4

> Prints 5, 6

**You can use values() and keys() to loop over dictionaries.**

    spam = {‘color’: ‘red’, ‘age’: 42}
    for v in spam.values():
    print(v)

_Prints red_

_Prints 42_

    for k in spam.keys():
    print(k)

_Prints color_

_Prints age_

**For loops can also iterate over both keys and values.**

**Getting tuples**

    for i in spam.items():
    print(i)

_Prints (‘color’, ‘red’)_

_Prints (‘age’, 42)_

_Destructuring to values_

    for k, v in spam.items():
    print(‘Key: ‘ + k + ‘ Value: ‘ + str(v))

_Prints Key: age Value: 42_

_Prints Key: color Value: red_

**Looping over string**

    for c in “abcdefg”:
    print(c)

**When you order arguments within a function or function call, the args need to occur in a particular order:**

_formal positional args._

\*args

_keyword args with default values_

\*\*kwargs

    def example(arg_1, arg_2, *args, **kwargs):
    pass

    def example2(arg_1, arg_2, *args, kw_1=”shark”, kw_2=”blowfish”, **kwargs):
    pass

---

### **Importing in Python**

**Modules are similar to packages in Node.js**  
Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**

---

### **Terms**

> module : Python code in a separate file.  
> package : Path to a directory that contains modules.  
> <a href="http://init.py" class="markup--anchor markup--blockquote-anchor"><strong>init.py</strong></a> : Default file for a package.  
> submodule : Another file in a module’s folder.  
> function : Function in a module.

**A module can be any file but it is usually created by placing a special file init.py into a folder. pic**

_Try to avoid importing with wildcards in Python._

_Use multiple lines for clarity when importing._

    from urllib.request import (
    HTTPDefaultErrorHandler as ErrorHandler,
    HTTPRedirectHandler as RedirectHandler,
    Request,
    pathname2url,
    url2pathname,
    urlopen,
    )

---

### Watching Out for Python 2

**Python 3 removed &lt;&gt; and only uses !=**

**format() was introduced with P3**

**All strings in P3 are unicode and encoded.  
md5 was removed.**

**ConfigParser was renamed to configparser  
sets were killed in favor of set() class.**

#### **print was a statement in P2, but is a function in P3.**

### Topics revisited (in python syntax)

### Cheat Sheet:

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Python Cheat Sheet:

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/5cfdf3d2bdfb).

<a href="https://medium.com/@bryanguner/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on July 13, 2021.
