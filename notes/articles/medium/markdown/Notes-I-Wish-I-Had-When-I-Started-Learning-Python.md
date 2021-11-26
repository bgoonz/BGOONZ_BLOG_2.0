Notes I Wish I Had When I Started Learning Python
=================================================

Plus resources for learning data structures and algorithms in python at the bottom of this article!

------------------------------------------------------------------------

### Notes I Wish I Had When I Started Learning Python

#### Plus resources for learning data structures and algorithms in python at the bottom of this article!

<figure><img src="https://cdn-images-1.medium.com/max/1200/0*8zBTnh_6r7agz9wz.jpg" class="graf-image" /></figure>

### Basics

-   <span id="e168">**PEP8** : Python Enhancement Proposals, style-guide for Python.</span>
-   <span id="22a7">`print` is the equivalent of `console.log`.</span>
-   <span id="c6a7">`#` is used to make comments in your code.</span>

<!-- -->

    def foo():
        """
        The foo function does many amazing things that you
        should not question. Just accept that it exists and
        use it with caution.
        """
        secretThing()

-   <span id="dcbc">Python has a built in help function that let’s you see a description of the source code without having to navigate to it.</span>

------------------------------------------------------------------------

### Numbers

-   <span id="8769">Python has three types of numbers:</span>
-   <span id="8dbf">**Integer**</span>
-   <span id="04e5">Positive and Negative Counting Numbers.</span>
-   <span id="931e">No Decimal Point</span>
-   <span id="4be3">Created by a literal non-decimal pt number or with the `int()` constructor.</span>

<!-- -->

    print(3) # => 3 print(int(19)) # => 19 print(int()) # => 0

-   <span id="569a">Boolean is a subtype of integer in Python.</span>
-   <span id="43df">**Floating Point Number**</span>
-   <span id="0bf7">Decimal Numbers.</span>

<!-- -->

    print(2.24) # => 2.24 print(2.) # => 2.0 print(float()) # => 0.0 print(27e-5) # => 0.00027

#### **Complex Numbers**

-   <span id="fbe5">Consist of a real part and imaginary part.</span>
-   <span id="2782">The `i` is switched to a `j` in programming.</span>

<!-- -->

    print(7j) # => 7j print(5.1+7.7j)) # => 5.1+7.7j print(complex(3, 5)) # => 3+5j print(complex(17)) # => 17+0j print(complex()) # => 0j

#### **Type Casting** : The process of converting one number to another.

    # Using Float
    print(17)               # => 17
    print(float(17))        # => 17.0

    # Using Int
    print(17.0)             # => 17.0
    print(int(17.0))        # => 17

    # Using Str
    print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17

-   <span id="995c">The arithmetic operators are the same between JS and Python, with two additions:</span>
-   <span id="794f">“\*\*” : Double asterisk for exponent.</span>
-   <span id="dff1">“//” : Integer Division.</span>
-   <span id="658b">There are no spaces between math operations in Python.</span>
-   <span id="d944">Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.</span>
-   <span id="4180">There are no `++` and `--` in Python, the only shorthand operators are:</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*kq_3dH4n7wsmAy7u.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### Strings

-   <span id="d9cf">Python uses both single and double quotes.</span>
-   <span id="d530">You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`</span>
-   <span id="0f19">Multiline strings use triple quotes.</span>

<!-- -->

    print('''My instructions are very long so to make them
    more readable in the code I am putting them on
    more than one line. I can even include "quotes"
    of any kind because they won't get confused with
    the end of the string!''')

-   <span id="3ef0">Use the `len()` function to get the length of a string.</span>

<!-- -->

    print(len("Spaghetti")) # => 9

-   <span id="83b9">Python uses `zero-based indexing`</span>
-   <span id="69f7">Python allows negative indexing (thank god!)</span>

<!-- -->

    print("Spaghetti"[-1]) # => i print("Spaghetti"[-4]) # => e

-   <span id="7a34">Python let’s you use ranges</span>

<!-- -->

    print("Spaghetti"[1:4]) # => pag print("Spaghetti"[4:-1]) # => hett print("Spaghetti"[4:4]) # => (empty string)

-   <span id="0796">The end range is exclusive just like `slice` in JS.</span>

<!-- -->

    # Shortcut to get from the beginning of a string to a certain index.
    print("Spaghetti"[:4])  # => Spag
    print("Spaghetti"[:-1])    # => Spaghett

    # Shortcut to get from a certain index to the end of a string.
    print("Spaghetti"[1:])  # => paghetti
    print("Spaghetti"[-4:])    # => etti

-   <span id="09d8">The `index` string function is the equiv. of `indexOf()` in JS</span>

<!-- -->

    print("Spaghetti".index("h"))    # => 4
    print("Spaghetti".index("t"))    # => 6

-   <span id="864b">The `count` function finds out how many times a substring appears in a string.</span>

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

-   <span id="1bbc">You can use `+` to concatenate strings, just like in JS.</span>
-   <span id="c0f6">You can also use “\*” to repeat strings or multiply strings.</span>
-   <span id="4d7f">Use the `format()` function to use placeholders in a string to input values later on.</span>

<!-- -->

    first_name = "Billy"
    last_name = "Bob"
    print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob

-   <span id="68ab">Shorthand way to use format function is:  
    `print(f'Your name is {first_name} {last_name}')`</span>
-   <span id="e860">Some useful string methods.</span>
-   <span id="205c">Note that in JS `join` is used on an Array, in Python it is used on String.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*36mwuAIxCl-f3m4H.png" class="graf-image" /></figure>-   <span id="fb66">There are also many handy testing methods.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*BIsBBI09FpFa1ntJ.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### Variables and Expressions

-   <span id="42be">**Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.</span>
-   <span id="6b14">Duck Typing is the fundamental approach of Python.</span>
-   <span id="929a">Assignment of a value automatically declares.</span>

<!-- -->

    a = 7
    b = 'Marbles'
    print(a)         # => 7
    print(b)         # => Marbles

-   <span id="5e1f">You can chain variable assignments to give multiple var names the same value.</span>
-   <span id="6d4d">Use with caution as this is highly unreadable</span>

<!-- -->

    count = max = min = 0
    print(count)           # => 0
    print(max)             # => 0
    print(min)             # => 0

-   <span id="9bfa">The value and type of a variable can be re-assigned at any time.</span>

<!-- -->

    a = 17
    print(a)         # => 17
    a = 'seventeen'
    print(a)         # => seventeen

-   <span id="a5fe">`NaN` does not exist in Python, but you can 'create' it like so:  
    `print(float("nan"))`</span>
-   <span id="8e6f">Python replaces `null` with `none`.</span>
-   <span id="2ce7">`none` is an object and can be directly assigned to a variable.</span>
-   <span id="d6aa">Using none is a convenient way to check to see why an action may not be operating correctly in your program.</span>

------------------------------------------------------------------------

### Boolean Data Type

-   <span id="cd4b">One of the biggest benefits of Python is that it reads more like English than JS does.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*eNmuDtlv7vr6a3Wc.png" class="graf-image" /></figure># Logical AND
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

-   <span id="b779">By default, Python considers an object to be true UNLESS it is one of the following:</span>
-   <span id="a9c1">Constant `None` or `False`</span>
-   <span id="76fc">Zero of any numeric type.</span>
-   <span id="30b9">Empty Sequence or Collection.</span>
-   <span id="29da">`True` and `False` must be capitalized</span>

------------------------------------------------------------------------

### Comparison Operators

-   <span id="a977">Python uses all the same equality operators as JS.</span>
-   <span id="8cf1">In Python, equality operators are processed from left to right.</span>
-   <span id="636c">Logical operators are processed in this order:</span>

1.  <span id="83ea">**NOT**</span>
2.  <span id="1da5">**AND**</span>
3.  <span id="5f17">**OR**</span>

-   <span id="7bc8">Just like in JS, you can use `parentheses` to change the inherent order of operations.</span>
-   <span id="ad5a">**Short Circuit** : Stopping a program when a `true` or `false` has been reached.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*nlYkqe_JubdBB2mv.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### Identity vs Equality

    print (2 == '2')    # => False
    print (2 is '2')    # => False

    print ("2" == '2')    # => True
    print ("2" is '2')    # => True

    # There is a distinction between the number types.
    print (2 == 2.0)    # => True
    print (2 is 2.0)    # => False

-   <span id="9344">In the Python community it is better to use `is` and `is not` over `==` or `!=`</span>

------------------------------------------------------------------------

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

-   <span id="bbd3">Remember the order of `elif` statements matter.</span>

------------------------------------------------------------------------

### While Statements

    spam = 0
    while spam < 5:
      print('Hello, world.')
      spam = spam + 1

-   <span id="0695">`Break` statement also exists in Python.</span>

<!-- -->

    spam = 0
    while True:
      print('Hello, world.')
      spam = spam + 1
      if spam >= 5:
        break

-   <span id="080e">As are `continue` statements</span>

<!-- -->

    spam = 0
    while True:
      print('Hello, world.')
      spam = spam + 1
      if spam < 5:
        continue
      break

------------------------------------------------------------------------

### Try/Except Statements

-   <span id="6166">Python equivalent to `try/catch`</span>

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

-   <span id="2704">You can name an error to give the output more specificity.</span>

<!-- -->

    a = 100
    b = 0
    try:
        c = a / b
    except ZeroDivisionError:
        c = None
    print(c)

-   <span id="fd53">You can also use the `pass` commmand to by pass a certain error.</span>

<!-- -->

    a = 100
    b = 0
    try:
        print(a / b)
    except ZeroDivisionError:
        pass

-   <span id="dd14">The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:</span>

<!-- -->

    a = 100
    # b = "5"
    try:
        print(a / b)
    except ZeroDivisionError:
        pass
    except (TypeError, NameError):
        print("ERROR!")

-   <span id="a530">You can use an `else` statement to end a chain of `except` statements.</span>

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

-   <span id="f1fc">`finally` is used at the end to clean up all actions under any circumstance.</span>

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

-   <span id="e45c">Using duck typing to check to see if some value is able to use a certain method.</span>

<!-- -->

    # Try a number - nothing will print out
    a = 321
    if hasattr(a, '__len__'):
        print(len(a))

    # Try a string - the length will print out (4 in this case)
    b = "5555"
    if hasattr(b, '__len__'):
        print(len(b))

------------------------------------------------------------------------

### Pass

-   <span id="1449">Pass Keyword is required to write the JS equivalent of :</span>

<!-- -->

    if (true) {
    }

    while (true) {}

    if True:
      pass

    while True:
      pass

------------------------------------------------------------------------

### Functions

-   <span id="23ab">**Function** definition includes:</span>
-   <span id="1c82">The `def` keyword</span>
-   <span id="fc98">The name of the function</span>
-   <span id="7444">A list of parameters enclosed in parentheses.</span>
-   <span id="e403">A colon at the end of the line.</span>
-   <span id="8a63">One tab indentation for the code to run.</span>

<!-- -->

    def printCopyright():
        print("Copyright 2020. Me, myself and I. All rights reserved.")

-   <span id="8bc6">You can use default parameters just like in JS</span>

<!-- -->

    def greeting(name, saying="Hello"):
        print(saying, name)

    greeting("Monica")
    # Hello Monica

    greeting("Barry", "Hey")
    # Hey Barry

-   <span id="a984">Keep in mind, default parameters must always come after regular parameters.</span>

<!-- -->

    # THIS IS BAD CODE AND WILL NOT RUN
    def increment(delta=1, value):
        return delta + value

-   <span id="724a">You can specify arguments by name without destructuring in Python.</span>

<!-- -->

    def greeting(name, saying="Hello"):
        print(saying, name)

    # name has no default value, so just provide the value
    # saying has a default value, so use a keyword argument
    greeting("Monica", saying="Hi")

-   <span id="6381">The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.</span>

`toUpper = lambda s: s.upper()`

------------------------------------------------------------------------

### Notes

### Formatted Strings

-   <span id="46b0">Remember that in Python `join()` is called on a string with an array/list passed in as the argument.</span>

<!-- -->

    shopping_list = ['bread','milk','eggs']
    print(','.join(shopping_list))

-   <span id="f86e">Python has a very powerful formatting engine.</span>
-   <span id="e0b5">`format()` is also applied directly to strings.</span>

<!-- -->

    # Comma Thousands Separator
     print('{:,}'.format(1234567890))
      '1,234,567,890'

    # Date and Time
    d = datetime.datetime(2020, 7, 4, 12, 15, 58)
    print('{:%Y-%m-%d %H:%M:%S}'.format(d))
    '2020-07-04 12:15:58'

    # Percentage
    points = 190
    total = 220
    print('Correct answers: {:.2%}'.format(points/total))
    Correct answers: 86.36%

    # Data Tables
    width=8
    print(' decimal      hex   binary')
    print('-'*27)
    for num in range(1,16):
        for base in 'dXb':
            print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
        print()

------------------------------------------------------------------------

### Getting Input from the Command Line

-   <span id="67f1">Python runs synchronously, all programs and processes will stop when listening for a user input.</span>
-   <span id="21d9">The `input` function shows a prompt to a user and waits for them to type 'ENTER'.</span>

------------------------------------------------------------------------

### Scripts vs Programs

-   <span id="3d45">**Programming Script** : A set of code that runs in a linear fashion.</span>
-   <span id="126d">The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.</span>
-   <span id="a0e0">Python can be used to display html, css, and JS.</span>
-   <span id="1ffd">We will be using Python as an API (Application Programming Interface)</span>

------------------------------------------------------------------------

### Structured Data

-   <span id="6dc6">**Sequence** : The most basic data structure in Python where the index determines the order.</span>
-   <span id="a9bc">List</span>
-   <span id="92b4">Tuple</span>
-   <span id="860c">Range</span>

**Collections** : Unordered data structures, hashable values.

-   <span id="dd66">Dictionaries</span>
-   <span id="a28e">Sets</span>
-   <span id="a86f">**Iterable** : Generic name for a sequence or collection; any object that can be iterated through.</span>
-   <span id="bcb9">Can be mutable or immutable.</span>

------------------------------------------------------------------------

### Built In Data Types

-   <span id="681b">**Lists** are the python equivalent of arrays.</span>

<!-- -->

    empty_list = []
    departments = ['HR','Development','Sales','Finance','IT','Customer Support']

    # You can instantiate
    specials = list()

    # Test if a value is in a list.
    print(1 in [1, 2, 3]) #> True
    print(4 in [1, 2, 3]) #> False

-   <span id="1c0a">**Tuples** : Very similar to lists, but they are `immutable`</span>

<!-- -->

    # Instantiated with parentheses
    time_blocks = ('AM','PM')

    # Sometimes instantiated without
    colors = 'red','blue','green'
    numbers = 1, 2, 3

    # Tuple() built in can be used to convert other data into a tuple
    tuple('abc')        # returns ('a', 'b', 'c')
    tuple([1,2,3])      # returns (1, 2, 3)

-   <span id="2e5f">Think of tuples as constant variables.</span>
-   <span id="86a4">**Ranges** : A list of numbers which can’t be changed; often used with `for` loops.</span>
-   <span id="04d3">Declared using one to three parameters.</span>

1.  <span id="ac7e">**Start** : opt. default 0, first \# in sequence.</span>
2.  <span id="7f6d">**Stop** : `required` next number past the last number in the sequence.</span>
3.  <span id="410f">**Step** : opt. default 1, difference between each number in the sequence.</span>

<!-- -->

    range(5)            # [0, 1, 2, 3, 4]
    range(1,5)          # [1, 2, 3, 4]
    range(0, 25, 5)     # [0, 5, 10, 15, 20]
    range(0)            # [ ]

    for let (i = 0; i < 5; i++)
    for let (i = 1; i < 5; i++)
    for let (i = 0; i < 25; i+=5)
    for let(i = 0; i = 0; i++)

-   <span id="56e9">Keep in mind that `stop` is not included in the range.</span>
-   <span id="8b99">`Dictionaries` : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.</span>
-   <span id="c9a9">Mutable.</span>

<!-- -->

    a = {'one':1, 'two':2, 'three':3}
    b = dict(one=1, two=2, three=3)
    c = dict([('two', 2), ('one', 1), ('three', 3)])

> *a, b, and c are all equal*

-   <span id="b63b">Declared with curly braces of the built in `dict()`</span>
-   <span id="40be">Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal.</span>
-   <span id="c7e7">Use the `in` operator to see if a key exists in a dictionary.</span>

#### **Sets** : Unordered collection of distinct objects; objects that **need** to be hashable.

-   <span id="341e">Always be unique, duplicate items are auto dropped from the set.</span>
-   <span id="a275">**Common Uses**:</span>
-   <span id="2b5a">Removing Duplicates</span>
-   <span id="2ec0">Membership Testing</span>
-   <span id="ab7b">Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.</span>
-   <span id="9892">Standard Set is mutable, Python has a immutable version called `frozenset`.</span>
-   <span id="c044">Sets created by putting comma seperated values inside braces:</span>

<!-- -->

    school_bag = {'book','paper','pencil','pencil','book','book','book','eraser'}
    print(school_bag)

    # Also can use set constructor to automatically put it into a set.
    letters = set('abracadabra')
    print(letters)

------------------------------------------------------------------------

### Built-In Functions

**Functions using iterables**

-   <span id="7a7e">**filter(function, iterable)** : creates new iterable of the same type which includes each item for which the function returns true.</span>
-   <span id="39d0">**map(function, iterable)** : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.</span>
-   <span id="cd33">**sorted(iterable, key=None, reverse=False)** : creates a new sorted list from the items in the iterable.</span>
-   <span id="d949">Output is always a `list`</span>
-   <span id="c4a5">`key`: opt function which coverts and item to a value to be compared.</span>
-   <span id="2ba7">`reverse`: optional boolean.</span>
-   <span id="390c">**enumerate(iterable, start=0)** : starts with a sequence and converts it to a series of tuples</span>

<!-- -->

    quarters = ['First', 'Second', 'Third', 'Fourth']
    print(enumerate(quarters))
    print(enumerate(quarters, start=1))

    # (0, 'First'), (1, 'Second'), (2, 'Third'), (3, 'Fourth')
    # (1, 'First'), (2, 'Second'), (3, 'Third'), (4, 'Fourth')

-   <span id="4919">**zip(\*iterables)** : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.</span>

**Functions that analyze iterables**

-   <span id="48f1">**len(iterable)** : returns the count of the number of items.</span>
-   <span id="938b">**max(\*args, key=None)** : returns the largest of two or more arguments.</span>
-   <span id="b7f1">**max(iterable, key=None)** : returns the largest item in the iterable.</span>
-   <span id="bb8b">`key` optional function which converts an item to a value to be compared.</span>
-   <span id="6cbc">**min** works the same way as `max`</span>
-   <span id="3098">**sum(iterable)** : used with a list of numbers to generate the total.</span>
-   <span id="2531">There is a faster way to concatenate an array of strings into one string, so do not use sum for that.</span>
-   <span id="97d7">**any(iterable)** : returns True if any items in the iterable are true.</span>
-   <span id="37db">**all(iterable)** : returns True is all items in the iterable are true.</span>

**Working with dictionaries**

-   <span id="ddcc">**dir(dictionary)** : returns the list of keys in the dictionary.</span>

**Working with sets**

-   <span id="b4fe">**Union** : The pipe | operator or `union(*sets)` function can be used to produce a new set which is a combination of all elements in the provided set.</span>

<!-- -->

    a = {1, 2, 3}
    b = {2, 4, 6}
    print(a | b)        # => {1, 2, 3, 4, 6}

-   <span id="fcbf">**Intersection** : The & operator ca be used to produce a new set of only the elements that appear in all sets.</span>

<!-- -->

    a = {1, 2, 3}
    b = {2, 4, 6}
    print(a & b)        # => {2}

-   <span id="b777">**Difference** : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.</span>
-   <span id="8aec">**Symmetric Difference** : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.</span>

<!-- -->

    a = {1, 2, 3}
    b = {2, 4, 6}
    print(a - b)        # => {1, 3}
    print(b - a)        # => {4, 6}
    print(a ^ b)        # => {1, 3, 4, 6}

------------------------------------------------------------------------

### For Statements

-   <span id="810e">In python, there is only one for loop.</span>
-   <span id="e633">Always Includes:</span>
-   <span id="8904">The `for` keyword</span>
-   <span id="2ac7">A variable name</span>
-   <span id="74ea">The `in` keyword</span>
-   <span id="4b73">An iterable of some kid</span>
-   <span id="7cff">A colon</span>
-   <span id="e9e8">On the next line, an indented block of code called the `for` clause.</span>
-   <span id="7ca8">You can use `break` and `continue` statements inside for loops as well.</span>
-   <span id="93a6">You can use the range function as the iterable for the `for` loop.</span>

<!-- -->

    print('My name is')
    for i in range(5):
       print('Carlita Cinco (' + str(i) + ')')

    total = 0
    for num in range(101):
        total += num
    print(total)

-   <span id="14a1">Looping over a list in Python</span>

<!-- -->

    for c in ['a', 'b', 'c']:
        print(c)

    lst = [0, 1, 2, 3]
    for i in lst:
        print(i)

-   <span id="b506">Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list.</span>

<!-- -->

    supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
    for i in range(len(supplies)):
        print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

-   <span id="a5bd">You can loop and destructure at the same time.</span>

<!-- -->

    l = [[1, 2], [3, 4], [5, 6]]
    for a, b in l:
        print(a, ', ', b)

    # Prints 1, 2
    # Prints 3, 4
    # Prints 5, 6

-   <span id="125a">You can use `values()` and `keys()` to loop over dictionaries.</span>

<!-- -->

    spam = {'color': 'red', 'age': 42}
    for v in spam.values():
        print(v)

    # Prints red
    # Prints 42

    for k in spam.keys():
        print(k)

    # Prints color
    # Prints age

-   <span id="3392">For loops can also iterate over both keys and values.</span>

<!-- -->

    # Getting tuples
    for i in spam.items():
        print(i)

    # Prints ('color', 'red')
    # Prints ('age', 42)

    # Destructuring to values
    for k, v in spam.items():
        print('Key: ' + k + ' Value: ' + str(v))

    # Prints Key: age Value: 42
    # Prints Key: color Value: red

-   <span id="cd7e">Looping over string</span>

<!-- -->

    for c in "abcdefg":
        print(c)

------------------------------------------------------------------------

### More On Functions

-   <span id="5d5a">**Variable-length positional arguments** : (\*args)</span>

<!-- -->

    def add(a, b, *args):
        total = a + b;
        for n in args:
            total += n
        return total

    add(1, 2)  # Returns 3

    add(2, 3, 4, 5) # Returns 14

-   <span id="824a">**keyword arguments** : (\*kwargs)</span>

<!-- -->

    def print_names_and_countries(greeting, **kwargs):
        for k, v in kwargs.items():
            print(greeting, k, "from", v)

    print_names_and_countries("Hi",
                              Monica="Sweden",
                              Charles="British Virgin Islands",
                              Carlo="Portugal")
    # Prints
    # Hi Monica from Sweden
    # Hi Charles from British Virgin Islands
    # Hi Carlo from Portugal

-   <span id="6518">When you order arguments within a function or function call, the args need to occur in a particular order:</span>

1.  <span id="7a5f">formal positional args.</span>
2.  <span id="20d4">\*args</span>
3.  <span id="c514">keyword args with default values</span>
4.  <span id="b8d9">\*\*kwargs</span>

<!-- -->

    def example(arg_1, arg_2, *args, **kwargs):
      pass

    def example2(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):
      pass

------------------------------------------------------------------------

### Importing in Python

-   <span id="ea2a">Modules are similar to packages in Node.js</span>
-   <span id="94fa">Come in different types: Built-In, Third-Party, Custom.</span>
-   <span id="4023">All loaded using `import` statements.</span>

**Terms**

-   <span id="e81a">**module** : Python code in a separate file.</span>
-   <span id="cf63">**package** : Path to a directory that contains modules.</span>
-   <span id="30ba">\***\*init**.py\*\* : Default file for a package.</span>
-   <span id="64a7">**submodule** : Another file in a module’s folder.</span>
-   <span id="6cd7">**function** : Function in a module.</span>
-   <span id="95fe">A module can be any file but it is usually created by placing a special file `__init__.py` into a folder.</span>
-   <span id="06e5">Try to avoid importing with wildcards in Python.</span>
-   <span id="04c3">Use multiple lines for clarity when importing.</span>

<!-- -->

    from urllib.request import (
      HTTPDefaultErrorHandler as ErrorHandler,
      HTTPRedirectHandler as RedirectHandler,
      Request,
      pathname2url,
      url2pathname,
      urlopen,
    )

------------------------------------------------------------------------

### Watching Out for Python 2

-   <span id="8bca">Python 3 removed `<>` and only uses `!=`</span>
-   <span id="b81a">`format()` was introduced with P3</span>
-   <span id="4a2e">All strings in P3 are unicode and encoded.</span>
-   <span id="fec8">`md5` was removed.</span>
-   <span id="57ab">`ConfigParser` was renamed to `configparser`</span>
-   <span id="9716">`sets` were killed in favor of `set()` class.</span>
-   <span id="e034">`print` was a statement in P2, but is a function in P3.</span>

------------------------------------------------------------------------

### Classes In Python

-   <span id="b84b">Classes are a way of combining information and behavior.</span>
-   <span id="2a24">Classes are blueprints to make objects.</span>

<!-- -->

    class AngryBird {
      constructor() {
        this.x = 0;
        this.y = 0;
      }
    }

    class AngryBird:
        def __init__(self):
            """
            Construct a new AngryBird by setting its position to (0, 0).
            """
            self.x = 0
            self.y = 0

-   <span id="8a53">Both JS and PY use the `class` keyword to declare classes.</span>
-   <span id="4c00">`constructor` == `__init__`</span>
-   <span id="4156">`this` == `self`</span>

<!-- -->

    bird = AngryBird()
    print(bird.x, bird.y)  #> 0 0

    class AngryBird:
        def __init__(self):
            """
            Construct a new AngryBird by setting its position to (0, 0).
            """
            self.x = 0
            self.y = 0

        def move_up_by(self, delta):
            self.y += delta

-   <span id="5231">Note how you do not need to define `self` it is already bound to the class.</span>
-   <span id="ff87">It is good practice to write a comment at the beginning of your class, describing the class.</span>

**Dunder Methods**

-   <span id="ec40">Double Underscore Methods, special built in functions that PY uses in certain ways.</span>
-   <span id="1e02">i.e. `__init__()` lets you make sure all relevant attributes are set to their proper values when an object is created from the class.</span>
-   <span id="2936">The `self` keyword refers to the current object that you are working with.</span>
-   <span id="da3f">Method is a function that is part of a class.</span>

<!-- -->

    class AngryBird:
        def __init__(self):
            self.x = 0
            self.y = 0

        def move_up_by(self, delta):
            self.y += delta

    bird = AngryBird()
    print(bird)
    print(bird.y)
    bird.move_up_by(5)
    print(bird.y)

-   <span id="e971">*Use one leading underscore only for non-public methods and instance variables*</span>

<!-- -->

    class AngryBird:
        def __init__(self, x=0, y=0):
            """
            Construct a new AngryBird by setting its position to (0, 0).
            """
            self._x = x
            self._y = y

        def move_up_by(self, delta):
            self._y += delta

        def get_x(self):
            return self._x

        def get_y(self):
            return self._y

-   <span id="9c5d">*All instance variables should be considered non-public*</span>
-   <span id="9262">\***\*slots\*\*** : Dunder class variable used to reserve memory for the instance variables that you know will you will use.</span>

<!-- -->

    class AngryBird:
        __slots__ = ['_x', '_y']

        def __init__(self, x=0, y=0):
            """
            Construct a new AngryBird by setting its position to (0, 0).
            """
            self._x = x
            self._y = y

        def move_up_by(self, delta):
            self._y += delta

        def get_x(self):
            return self._x

        def get_y(self):
            return self._y

-   <span id="e02b">You can use `__repr__()` to override the behavior of printing out a class in a verbose manner.</span>

<!-- -->

    class AngryBird:
        __slots__ = ['_x', '_y']

        def __init__(self, x=0, y=0):
            """
            Construct a new AngryBird by setting its position to (0, 0).
            """
            self._x = x
            self._y = y

        def move_up_by(self, delta):
            self._y += delta

        def get_x(self):
            return self._x

        def get_y(self):
            return self._y

        def __repr__(self):
            return f"<AngryBird ({self._x}, {self._y})>"

------------------------------------------------------------------------

### Properties for Classes

-   <span id="721b">Getters and Setters are used in object-oriented programming to add validation logic around getting and setting a value.</span>

**Getters**

    bird = AngryBird()

    print(bird.get_x(), bird.get_y())

-   <span id="8100">Getting the x and y values of our class can get very cumbersome.</span>
-   <span id="7cc1">**Decorators** : Allow us to change the way methods get invoked.</span>
-   <span id="20bc">Always start with the @ symbol.</span>
-   <span id="940f">Can be applied to methods, classes, and parameters.</span>
-   <span id="98d2">Built in decorator named `property` that you can apply to a method to make it readable.</span>

<!-- -->

    @property
        def x(self):
            return self._x

     @property
        def y(self):
            return self._y

     bird = AngryBird()

     print(bird.x, bird.y)

**Setters**

    class AngryBird:
        def __init__(self, x=0, y=0):
            """
            Construct a new AngryBird by setting its position to (0, 0).
            """
            self._x = x
            self._y = y

        def move_up_by(self, delta):
            self._y += delta

        @property
        def x(self):
            return self._x

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
            if value < 0:
                value = 0
            self._y = value

------------------------------------------------------------------------

### List Comprehensions

-   <span id="9b2c">List comprehensions are the equivalent of wrapped up filter namp array methods while also allowing nested loops.</span>
-   <span id="f25d">`new_list = [expression for member in iterable]`</span>
-   <span id="e7c4">**expression** : member itself, a call to a methd, or any other valid expression that returns a value.</span>
-   <span id="2aec">**member** : object or value in the list or iterable.</span>
-   <span id="f6de">**iterable** : iterable.</span>

`new_list = [expression for member in iterable (if conditional)]`

-   <span id="5643">Adding a conditional into a list comprehension.</span>

<!-- -->

    sentence = 'Mary, Mary, quite contrary, how does your garden grow?'
    def is_consonant(letter):
        vowels = "aeiou"
        return letter.isalpha() and letter.lower() not in vowels

    consonants = [i for i in sentence if is_consonant(i)]

    print(consonants)
    # Prints ['M', 'r', 'y', 'M', 'r', 'y', 'q', 't', 'c',
    # 'n', 't', 'r', 'r', 'y', 'h', 'w', 'd', 's', 'y',
    # 'r', 'g', 'r', 'd', 'n', 'g', 'r', 'w']

**When to not use list comprehensions**

-   <span id="6e41">List comprehensions may make your code run more slowly or use more memory.</span>
-   <span id="d062">You can use nest lists to create matrices.</span>

<!-- -->

    matrix = [[i for i in range(5)] for _ in range(6)]

    print(matrix)
    # Prints
    # [
    #     [0, 1, 2, 3, 4],
    #     [0, 1, 2, 3, 4],
    #     [0, 1, 2, 3, 4],
    #     [0, 1, 2, 3, 4],
    #     [0, 1, 2, 3, 4],
    #     [0, 1, 2, 3, 4]
    # ]

------------------------------------------------------------------------

### My Blog:

<a href="https://master--bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://master--bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>master--bgoonz-blog.netlify.app</a><a href="https://master--bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Python Data Structures & Algorithms Resources:

-   <span id="b2ea"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md" class="markup--anchor markup--li-anchor">The Framework for Learning Algorithms and intense problem solving exercises</a></span>
-   <span id="4075"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/why_i_recommend_algs4.md" class="markup--anchor markup--li-anchor">Algs4: Recommended book for Learning Algorithms and Data Structures</a></span>
-   <span id="277c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/AnalysisOfDynamicProgramming.md" class="markup--anchor markup--li-anchor">An analysis of Dynamic Programming</a></span>
-   <span id="5401"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/OptimalSubstructure.md" class="markup--anchor markup--li-anchor">Dynamic Programming Q&amp;A — What is Optimal Substructure</a></span>
-   <span id="9c28"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailsaboutBacktracking.md" class="markup--anchor markup--li-anchor">The Framework for Backtracking Algorithm</a></span>
-   <span id="d786"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailedBinarySearch.md" class="markup--anchor markup--li-anchor">Binary Search in Detail: I wrote a Poem</a></span>
-   <span id="1239"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/SlidingWindowTechnique.md" class="markup--anchor markup--li-anchor">The Sliding Window Technique</a></span>
-   <span id="bfaf"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxProcess.md" class="markup--anchor markup--li-anchor">Difference Between Process and Thread in Linux</a></span>
-   <span id="6d97"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/OnlinePraticePlatform.md" class="markup--anchor markup--li-anchor">Some Good Online Practice Platforms</a></span>
-   <span id="9583"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/AnalysisOfDynamicProgramming.md" class="markup--anchor markup--li-anchor">Dynamic Programming in Details</a></span>
-   <span id="4d54"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/OptimalSubstructure.md" class="markup--anchor markup--li-anchor">Dynamic Programming Q&amp;A — What is Optimal Substructure</a></span>
-   <span id="183e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/LongestCommonSubsequence.md" class="markup--anchor markup--li-anchor">Classic DP: Longest Common Subsequence</a></span>
-   <span id="3dca"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/EditDistance.md" class="markup--anchor markup--li-anchor">Classic DP: Edit Distance</a></span>
-   <span id="9429"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/ThrowingEggsinHighBuildings.md" class="markup--anchor markup--li-anchor">Classic DP: Super Egg</a></span>
-   <span id="cf8d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/SuperEggDropAdvanced.md" class="markup--anchor markup--li-anchor">Classic DP: Super Egg (Advanced Solution)</a></span>
-   <span id="9f94"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/StrategiesForSubsequenceProblem.md" class="markup--anchor markup--li-anchor">The Strategies of Subsequence Problem</a></span>
-   <span id="306b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/GameProblemsInDynamicProgramming.md" class="markup--anchor markup--li-anchor">Classic DP: Game Problems</a></span>
-   <span id="cf55"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/IntervalScheduling.md" class="markup--anchor markup--li-anchor">Greedy: Interval Scheduling</a></span>
-   <span id="0a6a"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/KMPCharacterMatchingAlgorithmInDynamicProgramming.md" class="markup--anchor markup--li-anchor">KMP Algorithm In Detail</a></span>
-   <span id="ccb6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/BestTimeToBuyAndSellStock.md" class="markup--anchor markup--li-anchor">A solution to all Buy Time to Buy and Sell Stock Problems</a></span>
-   <span id="a130"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/HouseRobber.md" class="markup--anchor markup--li-anchor">A solution to all House Robber Problems</a></span>
-   <span id="1470"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/FourKeysKeyboard.md" class="markup--anchor markup--li-anchor">4 Keys Keyboard</a></span>
-   <span id="d7e6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/RegularExpression.md" class="markup--anchor markup--li-anchor">Regular Expression</a></span>
-   <span id="b35e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/LongestIncreasingSubsequence.md" class="markup--anchor markup--li-anchor">Longest Increasing Subsequence</a></span>
-   <span id="99f6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md" class="markup--anchor markup--li-anchor">The Framework for Learning Algorithms and intense problem solving exercises</a></span>
-   <span id="ed60"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/why_i_recommend_algs4.md" class="markup--anchor markup--li-anchor">Algs4: Recommended book for Learning Algorithms and Data Structures</a></span>
-   <span id="659f"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/binary_heap_implements_priority_queues.md" class="markup--anchor markup--li-anchor">Binary Heap and Priority Queue</a></span>
-   <span id="210a"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/LRU_algorithm.md" class="markup--anchor markup--li-anchor">LRU Cache Strategy in Detail</a></span>
-   <span id="26a4"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/The_Manipulation_Collection_of_Binary_Search_Tree.md" class="markup--anchor markup--li-anchor">Collections of Binary Search Operations</a></span>
-   <span id="d918"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/MonotonicStack.md" class="markup--anchor markup--li-anchor">Special Data Structure: Monotonic Stack</a></span>
-   <span id="a7c1"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/Monotonic_queue.md" class="markup--anchor markup--li-anchor">Special Data Structure: Monotonic Stack</a></span>
-   <span id="b904"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/design_Twitter.md" class="markup--anchor markup--li-anchor">Design Twitter</a></span>
-   <span id="46a9"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/reverse_part_of_a_linked_list_via_recursion.md" class="markup--anchor markup--li-anchor">Reverse Part of Linked List via Recursion</a></span>
-   <span id="b014"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/ImplementQueueUsingStacksImplementStackUsingQueues.md" class="markup--anchor markup--li-anchor">Queue Implement Stack/Stack implement Queue</a></span>
-   <span id="d366"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/ThewaytoAlgorithmlearning.md" class="markup--anchor markup--li-anchor">My Way to Learn Algorithm</a></span>
-   <span id="b0b9"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailsaboutBacktracking.md" class="markup--anchor markup--li-anchor">The Framework of Backtracking Algorithm</a></span>
-   <span id="1716"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailedBinarySearch.md" class="markup--anchor markup--li-anchor">Binary Search in Detail</a></span>
-   <span id="2571"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Subset_Permutation_Combination.md" class="markup--anchor markup--li-anchor">Backtracking Solve Subset/Permutation/Combination</a></span>
-   <span id="0038"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/double_pointer.md" class="markup--anchor markup--li-anchor">Diving into the technical parts of Double Pointers</a></span>
-   <span id="fa85"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/SlidingWindowTechnique.md" class="markup--anchor markup--li-anchor">Sliding Window Technique</a></span>
-   <span id="ce8c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/The_key_to_resolving_TwoSum_problems.md" class="markup--anchor markup--li-anchor">The Core Concept of TwoSum Problems</a></span>
-   <span id="d2e4"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/CommonBitManipulation.md" class="markup--anchor markup--li-anchor">Common Bit Manipulations</a></span>
-   <span id="f554"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/Implementing_the_functions_of_a_calculator.md" class="markup--anchor markup--li-anchor">Breaking down a Complicated Problem: Implement a Calculator</a></span>
-   <span id="96c2"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/PancakesSorting.md" class="markup--anchor markup--li-anchor">Pancake Sorting Algorithm</a></span>
-   <span id="71b5"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/prefix_sum.md" class="markup--anchor markup--li-anchor">Prefix Sum: Intro and Concept</a></span>
-   <span id="ccf5"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/string_multiplication.md" class="markup--anchor markup--li-anchor">String Multiplication</a></span>
-   <span id="dd56"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/flood_fill.md" class="markup--anchor markup--li-anchor">FloodFill Algorithm in Detail</a></span>
-   <span id="0bc1"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/IntervalMerging.md" class="markup--anchor markup--li-anchor">Interval Scheduling: Interval Merging</a></span>
-   <span id="07eb"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/IntervalIntersection.md" class="markup--anchor markup--li-anchor">Interval Scheduling: Intersections of Intervals</a></span>
-   <span id="c308"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/RussianDollEnvelopes.md" class="markup--anchor markup--li-anchor">Russian Doll Envelopes Problem</a></span>
-   <span id="cc1c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/several_counter_intuitive_probability_problems.md" class="markup--anchor markup--li-anchor">A collection of counter-intuitive Probability Problems</a></span>
-   <span id="983c"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Shuffle_Algorithm.md" class="markup--anchor markup--li-anchor">Shuffle Algorithm</a></span>
-   <span id="915e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/RecursionInDetail.md" class="markup--anchor markup--li-anchor">Recursion In Detail</a></span>
-   <span id="e511"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/LRU_algorithm.md" class="markup--anchor markup--li-anchor">How to Implement LRU Cache</a></span>
-   <span id="43f6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Print_PrimeNumbers.md" class="markup--anchor markup--li-anchor">How to Find Prime Number Efficiently</a></span>
-   <span id="a714"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/EditDistance.md" class="markup--anchor markup--li-anchor">How to Calculate Minimium Edit Distance</a></span>
-   <span id="6efb"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/UsingBinarySearchAlgorithm.md" class="markup--anchor markup--li-anchor">How to use Binary Search</a></span>
-   <span id="2310"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Trapping_Rain_Water.md" class="markup--anchor markup--li-anchor">How to efficiently solve Trapping Rain Water Problem</a></span>
-   <span id="98e2"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/RemoveDuplicatesfromSortedArray.md" class="markup--anchor markup--li-anchor">How to Remove Duplicates From Sorted Array</a></span>
-   <span id="b2e1"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/TheLongestPalindromicSubstring.md" class="markup--anchor markup--li-anchor">How to Find Longest Palindromic Substring</a></span>
-   <span id="52d6"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/reverse-nodes-in-k-group.md" class="markup--anchor markup--li-anchor">How to Reverse Linked List in K Group</a></span>
-   <span id="adbe"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/valid-parentheses.md" class="markup--anchor markup--li-anchor">How to Check the Validation of Parenthesis</a></span>
-   <span id="440d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/missing_elements.md" class="markup--anchor markup--li-anchor">How to Find Missing Element</a></span>
-   <span id="80cb"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Find-Duplicate-and-Missing-Element.md" class="markup--anchor markup--li-anchor">How to Find Duplicates and Missing Elements</a></span>
-   <span id="6a2a"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/check_palindromic_linkedlist.md" class="markup--anchor markup--li-anchor">How to Check Palindromic LinkedList</a></span>
-   <span id="0e94"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/ReservoirSampling.md" class="markup--anchor markup--li-anchor">How to Pick Elements From an Infinite Arbitrary Sequence</a></span>
-   <span id="f96d"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Seatscheduling.md" class="markup--anchor markup--li-anchor">How to Schedule Seats for Students</a></span>
-   <span id="6d49"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Union-find-Explanation.md" class="markup--anchor markup--li-anchor">Union-Find Algorithm in Detail</a></span>
-   <span id="7221"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Union-Find-Application.md" class="markup--anchor markup--li-anchor">Union-Find Application</a></span>
-   <span id="19f3"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/one-line-code-puzzles.md" class="markup--anchor markup--li-anchor">Problems that can be solved in one line</a></span>
-   <span id="1b55"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/findSebesquenceWithBinarySearch.md" class="markup--anchor markup--li-anchor">Find Subsequence With Binary Search</a></span>
-   <span id="ff15"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxProcess.md" class="markup--anchor markup--li-anchor">Difference Between Process and Thread in Linux</a></span>
-   <span id="a49f"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxshell.md" class="markup--anchor markup--li-anchor">You Must Know About Linux Shell</a></span>
-   <span id="901b"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/SessionAndCookie.md" class="markup--anchor markup--li-anchor">You Must Know About Cookie and Session</a></span>
-   <span id="02f7"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/Cryptology.md" class="markup--anchor markup--li-anchor">Cryptology Algorithm</a></span>
-   <span id="d08e"><a href="https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/OnlinePraticePlatform.md" class="markup--anchor markup--li-anchor">Some Good Online Practice Platforms</a></span>

### Algorithms:

-   <span id="fa97"><a href="https://github.com/coells/100days" class="markup--anchor markup--li-anchor">100 days of algorithms</a></span>
-   <span id="7dcc"><a href="https://github.com/marcosfede/algorithms" class="markup--anchor markup--li-anchor">Algorithms</a> — Solved algorithms and data structures problems in many languages.</span>
-   <span id="15d0"><a href="http://jeffe.cs.illinois.edu/teaching/algorithms/" class="markup--anchor markup--li-anchor">Algorithms by Jeff Erickson</a> (<a href="https://github.com/jeffgerickson/algorithms" class="markup--anchor markup--li-anchor">Code</a>) (<a href="https://news.ycombinator.com/item?id=26074289" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="d4cd"><a href="https://www.reddit.com/r/compsci/comments/5uz9lb/top_algorithmsdata_structuresconcepts_every/ddy8azz/" class="markup--anchor markup--li-anchor">Top algos/DS to learn</a></span>
-   <span id="1a0a"><a href="https://www.nayuki.io/category/programming" class="markup--anchor markup--li-anchor">Some neat algorithms</a></span>
-   <span id="14b4"><a href="https://stackabuse.com/mathematical-proof-of-algorithm-correctness-and-efficiency/" class="markup--anchor markup--li-anchor">Mathematical Proof of Algorithm Correctness and Efficiency (2019)</a></span>
-   <span id="06f9"><a href="https://github.com/algorithm-visualizer/algorithm-visualizer" class="markup--anchor markup--li-anchor">Algorithm Visualizer</a> — Interactive online platform that visualizes algorithms from code.</span>
-   <span id="90af"><a href="https://mitpress.mit.edu/books/algorithms-optimization" class="markup--anchor markup--li-anchor">Algorithms for Optimization book</a></span>
-   <span id="2a4b"><a href="https://www.algorithm-archive.org/" class="markup--anchor markup--li-anchor">Collaborative book on algorithms</a> (<a href="https://github.com/algorithm-archivists/algorithm-archive" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="be29"><a href="http://index-of.co.uk/Algorithms/Algorithms%20in%20C.pdf" class="markup--anchor markup--li-anchor">Algorithms in C by Robert Sedgewick</a></span>
-   <span id="93f7"><a href="http://mimoza.marmara.edu.tr/~msakalli/cse706_12/SkienaTheAlgorithmDesignManual.pdf" class="markup--anchor markup--li-anchor">Algorithm Design Manual</a></span>
-   <span id="f494"><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/" class="markup--anchor markup--li-anchor">MIT Introduction to Algorithms course (2011)</a></span>
-   <span id="1c5b"><a href="http://codecapsule.com/2012/01/18/how-to-implement-a-paper/" class="markup--anchor markup--li-anchor">How to implement an algorithm from a scientific paper (2012)</a></span>
-   <span id="cc64"><a href="https://github.com/scandum/quadsort" class="markup--anchor markup--li-anchor">Quadsort</a> — Stable non-recursive merge sort named quadsort.</span>
-   <span id="e3de"><a href="https://github.com/resumejob/system-design-algorithms" class="markup--anchor markup--li-anchor">System design algorithms</a> — Algorithms you should know before system design.</span>
-   <span id="d219"><a href="http://www.cs.sjtu.edu.cn/~jiangli/teaching/CS222/files/materials/Algorithm%20Design.pdf" class="markup--anchor markup--li-anchor">Algorithms Design book</a></span>
-   <span id="1c8d"><a href="http://greenteapress.com/complexity/html/index.html" class="markup--anchor markup--li-anchor">Think Complexity</a></span>
-   <span id="f062"><a href="https://github.com/TheAlgorithms/Rust" class="markup--anchor markup--li-anchor">All Algorithms implemented in Rust</a></span>
-   <span id="ad4b"><a href="https://walkccc.github.io/CLRS/" class="markup--anchor markup--li-anchor">Solutions to Introduction to Algorithms book</a> (<a href="https://github.com/walkccc/CLRS" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="c24d"><a href="https://www.jamisbuck.org/mazes/" class="markup--anchor markup--li-anchor">Maze Algorithms (2011)</a> (<a href="https://news.ycombinator.com/item?id=23429368" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="b88e"><a href="https://page.skerritt.blog/algorithms/" class="markup--anchor markup--li-anchor">Algorithmic Design Paradigms book</a> (<a href="https://github.com/brandonskerritt/AlgorithmsBook" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="e4f3"><a href="https://wordsandbuttons.online/" class="markup--anchor markup--li-anchor">Words and buttons Online Blog</a> (<a href="https://github.com/akalenuk/wordsandbuttons" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="66f7"><a href="https://www.chrislaux.com/" class="markup--anchor markup--li-anchor">Algorithms animated</a></span>
-   <span id="247d"><a href="https://jiahai-feng.github.io/posts/cache-oblivious-algorithms/" class="markup--anchor markup--li-anchor">Cache Oblivious Algorithms (2020)</a> (<a href="https://news.ycombinator.com/item?id=23662434" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="f306"><a href="http://blog.ezyang.com/2012/03/you-could-have-invented-fractional-cascading/" class="markup--anchor markup--li-anchor">You could have invented fractional cascading (2012)</a></span>
-   <span id="73c4"><a href="https://labuladong.gitbook.io/algo-en/" class="markup--anchor markup--li-anchor">Guide to learning algorithms through LeetCode</a> (<a href="https://github.com/labuladong/fucking-algorithm/tree/english" class="markup--anchor markup--li-anchor">Code</a>) (<a href="https://news.ycombinator.com/item?id=24167297" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="f612"><a href="https://cstheory.stackexchange.com/questions/34/how-hard-is-unshuffling-a-string" class="markup--anchor markup--li-anchor">How hard is unshuffling a string?</a></span>
-   <span id="f646"><a href="https://sites.uclouvain.be/absil/amsbook/" class="markup--anchor markup--li-anchor">Optimization Algorithms on Matrix Manifolds</a></span>
-   <span id="0db2"><a href="https://runestone.academy/runestone/books/published/pythonds/index.html" class="markup--anchor markup--li-anchor">Problem Solving with Algorithms and Data Structures</a> (<a href="https://news.ycombinator.com/item?id=24287622" class="markup--anchor markup--li-anchor">HN</a>) (<a href="https://www.cs.auckland.ac.nz/compsci105s1c/resources/ProblemSolvingwithAlgorithmsandDataStructures.pdf" class="markup--anchor markup--li-anchor">PDF</a>)</span>
-   <span id="b105"><a href="https://github.com/TheAlgorithms/Python" class="markup--anchor markup--li-anchor">Algorithms implemented in Python</a></span>
-   <span id="b477"><a href="https://github.com/TheAlgorithms/Javascript" class="markup--anchor markup--li-anchor">Algorithms implemented in JavaScript</a></span>
-   <span id="b80e"><a href="https://github.com/williamfiset/Algorithms" class="markup--anchor markup--li-anchor">Algorithms &amp; Data Structures in Java</a></span>
-   <span id="9c9e"><a href="https://github.com/scandum/wolfsort" class="markup--anchor markup--li-anchor">Wolfsort</a> — Stable adaptive hybrid radix / merge sort.</span>
-   <span id="5270"><a href="https://github.com/fcampelo/EC-Bestiary" class="markup--anchor markup--li-anchor">Evolutionary Computation Bestiary</a> — Bestiary of evolutionary, swarm and other metaphor-based algorithms.</span>
-   <span id="355a"><a href="http://elementsofprogramming.com/" class="markup--anchor markup--li-anchor">Elements of Programming book</a> — Decomposing programs into a system of algorithmic components. (<a href="http://www.pathsensitive.com/2020/09/book-review-elements-of-programmnig.html" class="markup--anchor markup--li-anchor">Review</a>) (<a href="https://news.ycombinator.com/item?id=24635947" class="markup--anchor markup--li-anchor">HN</a>) (<a href="https://lobste.rs/s/bqnhbo/book_review_elements_programmnig" class="markup--anchor markup--li-anchor">Lobsters</a>)</span>
-   <span id="5ca1"><a href="https://cp-algorithms.com/" class="markup--anchor markup--li-anchor">Competitive Programming Algorithms</a></span>
-   <span id="d363"><a href="https://github.com/akshitagit/CPP" class="markup--anchor markup--li-anchor">CPP/C</a> — C/C++ algorithms/DS problems.</span>
-   <span id="cfb3"><a href="https://www.adamconrad.dev/blog/how-to-design-an-algorithm/" class="markup--anchor markup--li-anchor">How to design an algorithm (2018)</a></span>
-   <span id="3b26"><a href="https://www.youtube.com/playlist?list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx" class="markup--anchor markup--li-anchor">CSE 373 — Introduction to Algorithms, by Steven Skiena (2020)</a></span>
-   <span id="8f11"><a href="http://homepages.math.uic.edu/~lreyzin/f20_mcs501/" class="markup--anchor markup--li-anchor">Computer Algorithms II course (2020)</a></span>
-   <span id="13f4"><a href="https://notebook.drmaciver.com/posts/2019-04-30-13:03.html" class="markup--anchor markup--li-anchor">Improving Binary Search by Guessing (2019)</a></span>
-   <span id="fdf8"><a href="https://blog.acolyer.org/2020/10/19/the-case-for-a-learned-sorting-algorithm/" class="markup--anchor markup--li-anchor">The case for a learned sorting algorithm (2020)</a> (<a href="https://news.ycombinator.com/item?id=24823611" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="cfaf"><a href="https://github.com/liuxinyu95/AlgoXY" class="markup--anchor markup--li-anchor">Elementary Algorithms</a> — Introduces elementary algorithms and data structures. Includes side-by-side comparisons of purely functional realization and their imperative counterpart.</span>
-   <span id="e36d"><a href="https://sahandsaba.com/combinatorial-generation-for-coding-interviews-in-python.html" class="markup--anchor markup--li-anchor">Combinatorics Algorithms for Coding Interviews (2018)</a></span>
-   <span id="ac6d"><a href="https://github.com/ZoranPandovski/al-go-rithms" class="markup--anchor markup--li-anchor">Algorithms written in different programming languages</a> (<a href="https://zoranpandovski.github.io/al-go-rithms/" class="markup--anchor markup--li-anchor">Web</a>)</span>
-   <span id="ca55"><a href="https://johnlekberg.com/blog/2020-10-25-seq-align.html" class="markup--anchor markup--li-anchor">Solving the Sequence Alignment problem in Python (2020)</a></span>
-   <span id="e21b"><a href="https://github.com/bingmann/sound-of-sorting" class="markup--anchor markup--li-anchor">The Sound of Sorting</a> — Visualization and “Audibilization” of Sorting Algorithms. (<a href="https://panthema.net/2013/sound-of-sorting/" class="markup--anchor markup--li-anchor">Web</a>)</span>
-   <span id="d619"><a href="https://danlark.org/2020/11/11/miniselect-practical-and-generic-selection-algorithms/" class="markup--anchor markup--li-anchor">Miniselect: Practical and Generic Selection Algorithms (2020)</a></span>
-   <span id="0e30"><a href="https://chasewilson.dev/blog/slowest-quicksort/" class="markup--anchor markup--li-anchor">The Slowest Quicksort (2019)</a></span>
-   <span id="9e0b"><a href="https://blog.sigplan.org/2020/11/17/functional-algorithm-design-part-0/" class="markup--anchor markup--li-anchor">Functional Algorithm Design (2020)</a></span>
-   <span id="3868"><a href="https://milofultz.com/2020/12/27/atlb-notes" class="markup--anchor markup--li-anchor">Algorithms To Live By — Book Notes</a></span>
-   <span id="8db5"><a href="http://people.csail.mit.edu/jsolomon/share/book/numerical_book.pdf" class="markup--anchor markup--li-anchor">Numerical Algorithms (2015)</a></span>
-   <span id="347f"><a href="https://blog.vespa.ai/using-approximate-nearest-neighbor-search-in-real-world-applications/" class="markup--anchor markup--li-anchor">Using approximate nearest neighbor search in real world applications (2020)</a></span>
-   <span id="8dfb"><a href="https://arxiv.org/pdf/1911.06347.pdf" class="markup--anchor markup--li-anchor">In search of the fastest concurrent Union-Find algorithm (2019)</a></span>
-   <span id="c05f"><a href="https://www.cs.princeton.edu/courses/archive/fall13/cos521/" class="markup--anchor markup--li-anchor">Computer Science 521 Advanced Algorithm Design</a></span>

### Data Structures:

-   <span id="b39d"><a href="https://github.com/floyernick/Data-Structures-and-Algorithms" class="markup--anchor markup--li-anchor">Data Structures and Algorithms implementation in Go</a></span>
-   <span id="1c2b"><a href="https://softwareengineering.stackexchange.com/questions/155639/which-algorithms-data-structures-should-i-recognize-and-know-by-name" class="markup--anchor markup--li-anchor">Which algorithms/data structures should I “recognize” and know by name?</a></span>
-   <span id="8e46"><a href="https://xlinux.nist.gov/dads/" class="markup--anchor markup--li-anchor">Dictionary of Algorithms and Data Structures</a></span>
-   <span id="987b"><a href="https://g1thubhub.github.io/data-structure-zoo.html" class="markup--anchor markup--li-anchor">Phil’s Data Structure Zoo</a></span>
-   <span id="617d"><a href="https://stratos.seas.harvard.edu/files/stratos/files/periodictabledatastructures.pdf" class="markup--anchor markup--li-anchor">The Periodic Table of Data Structures</a> (<a href="https://news.ycombinator.com/item?id=18314555" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="9160"><a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" class="markup--anchor markup--li-anchor">Data Structure Visualizations</a> (<a href="https://news.ycombinator.com/item?id=19082943" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="233a"><a href="http://blog.amynguyen.net/?p=853" class="markup--anchor markup--li-anchor">Data structures to name-drop when you want to sound smart in an interview</a></span>
-   <span id="fe28"><a href="https://pdziepak.github.io/2019/05/02/on-lists-cache-algorithms-and-microarchitecture/" class="markup--anchor markup--li-anchor">On lists, cache, algorithms, and microarchitecture (2019)</a></span>
-   <span id="1cfe"><a href="http://web.stanford.edu/class/cs166/handouts/100%20Suggested%20Final%20Project%20Topics.pdf" class="markup--anchor markup--li-anchor">Topics in Advanced Data Structures (2019)</a> (<a href="https://news.ycombinator.com/item?id=19780387" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="d508"><a href="http://web.stanford.edu/class/cs166/" class="markup--anchor markup--li-anchor">CS166 Advanced DS Course (2019)</a></span>
-   <span id="b314"><a href="https://courses.csail.mit.edu/6.851/fall17/" class="markup--anchor markup--li-anchor">Advanced Data Structures (2017)</a> (<a href="https://news.ycombinator.com/item?id=20044876" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="c505"><a href="https://github.com/jamesroutley/write-a-hash-table" class="markup--anchor markup--li-anchor">Write a hash table in C</a></span>
-   <span id="b552"><a href="https://github.com/prabhupant/python-ds" class="markup--anchor markup--li-anchor">Python Data Structures and Algorithms</a></span>
-   <span id="7784"><a href="https://vaibhavsagar.com/blog/2018/07/29/hamts-from-scratch/" class="markup--anchor markup--li-anchor">HAMTs from Scratch (2018)</a></span>
-   <span id="aeff"><a href="https://github.com/JoeKarlsson/data-structures" class="markup--anchor markup--li-anchor">JavaScript Data Structures and Algorithms</a></span>
-   <span id="63be"><a href="http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/" class="markup--anchor markup--li-anchor">Implementing a Key-Value Store series</a></span>
-   <span id="7c7e"><a href="https://opendatastructures.org/" class="markup--anchor markup--li-anchor">Open Data Structures</a> — Provide a high-quality open content data structures textbook that is both mathematically rigorous and provides complete implementations. (<a href="https://github.com/patmorin/ods" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="8f01"><a href="https://www.csee.usf.edu/~kchriste/energy/ipl10.pdf" class="markup--anchor markup--li-anchor">A new analysis of the false positive rate of a Bloom filter (2009)</a></span>
-   <span id="3ae6"><a href="https://lampwww.epfl.ch/papers/idealhashtrees.pdf" class="markup--anchor markup--li-anchor">Ideal Hash Trees</a></span>
-   <span id="4896"><a href="http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=0265C1992F573129BCC7D4AF7734DBF7?doi=10.1.1.592.5377&amp;rep=rep1&amp;type=pdf" class="markup--anchor markup--li-anchor">RRB-Trees: Efficient Immutable Vectors</a></span>
-   <span id="0458"><a href="https://github.com/jdan/ocaml-data-structures" class="markup--anchor markup--li-anchor">Some data structures and algorithms written in OCaml</a></span>
-   <span id="499a"><a href="https://shachaf.net/w/b-trees" class="markup--anchor markup--li-anchor">Let’s Invent B(+)-Trees</a> (<a href="https://news.ycombinator.com/item?id=23001831" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="1b1e"><a href="https://github.com/hydro-project/anna" class="markup--anchor markup--li-anchor">Anna</a> — Low-latency, cloud-native KVS.</span>
-   <span id="1700"><a href="https://www.aleksandra.codes/persistent-data-structures" class="markup--anchor markup--li-anchor">Persistent data structures thanks to recursive type aliases (2019)</a></span>
-   <span id="1807"><a href="https://yetanotherdevblog.com/lsm/" class="markup--anchor markup--li-anchor">Log-Structured Merge-Trees (2020)</a></span>
-   <span id="211e"><a href="https://sagi.io/bloom-filters-for-the-perplexed/" class="markup--anchor markup--li-anchor">Bloom Filters for the Perplexed (2017)</a></span>
-   <span id="8456"><a href="https://yetanotherdevblog.com/bloom-filters/" class="markup--anchor markup--li-anchor">Understanding Bloom Filters (2020)</a></span>
-   <span id="efa8"><a href="https://yetanotherdevblog.com/dense-vs-sparse-indexes/" class="markup--anchor markup--li-anchor">Dense vs. Sparse Indexes (2020)</a></span>
-   <span id="cc53"><a href="https://www.techiedelight.com/list-of-problems/" class="markup--anchor markup--li-anchor">Data Structures and Algorithms Problems</a></span>
-   <span id="4222"><a href="https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/" class="markup--anchor markup--li-anchor">Data Structures &amp; Algorithms I Actually Used Working at Tech Companies (2020)</a> (<a href="https://lobste.rs/s/n8tyip/data_structures_algorithms_i_actually" class="markup--anchor markup--li-anchor">Lobsters</a>) (<a href="https://news.ycombinator.com/item?id=23841491" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="df7b"><a href="https://onatm.dev/2020/08/10/let-s-implement-a-bloom-filter/" class="markup--anchor markup--li-anchor">Let’s implement a Bloom Filter (2020)</a> (<a href="https://news.ycombinator.com/item?id=24102617" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="009b"><a href="https://ourmachinery.com/post/data-structures-part-1-bulk-data/" class="markup--anchor markup--li-anchor">Data Structures Part 1: Bulk Data (2019)</a> (<a href="https://lobste.rs/s/t8mrxn/data_structures_part_1_bulk_data" class="markup--anchor markup--li-anchor">Lobsters</a>)</span>
-   <span id="870d"><a href="https://www.freecodecamp.org/news/learn-all-about-data-structures-used-in-computer-science/" class="markup--anchor markup--li-anchor">Data Structures Explained</a></span>
-   <span id="7553"><a href="https://rcoh.me/posts/cache-oblivious-datastructures/" class="markup--anchor markup--li-anchor">Introduction to Cache-Oblivious Data Structures (2018)</a></span>
-   <span id="367e"><a href="https://thedailycoding.com/" class="markup--anchor markup--li-anchor">The Daily Coding newsletter</a> — Master JavaScript and Data Structures.</span>
-   <span id="c5c8"><a href="https://www.cs.bham.ac.uk/~jxb/DSA/dsa.pdf" class="markup--anchor markup--li-anchor">Lectures Note for Data Structures and Algorithms (2019)</a></span>
-   <span id="afb3"><a href="https://abhinavsarkar.net/posts/continuation-defunctionalization/" class="markup--anchor markup--li-anchor">Mechanically Deriving Binary Tree Iterators with Continuation Defunctionalization (2020)</a></span>
-   <span id="0f9a"><a href="https://cp-algorithms.com/data_structures/segment_tree.html" class="markup--anchor markup--li-anchor">Segment Tree data structure</a></span>
-   <span id="5ce2"><a href="https://medium.com/@gballet/structure-of-a-binary-state-tree-part-1-48c587836d2f" class="markup--anchor markup--li-anchor">Structure of a binary state tree (2020)</a></span>
-   <span id="b46c"><a href="https://github.com/sushinoya/fundamentals" class="markup--anchor markup--li-anchor">Introductory data structures and algorithms</a></span>
-   <span id="f981"><a href="https://heap.io/blog/engineering/applying-textbook-data-structures-for-real-life-wins" class="markup--anchor markup--li-anchor">Applying Textbook Data Structures for Real Life Wins (2020)</a> (<a href="https://news.ycombinator.com/item?id=24761105" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="e9df"><a href="https://www.youtube.com/watch?v=9XAx279s7gs" class="markup--anchor markup--li-anchor">Michael Scott — Nonblocking data structures lectures (2020)</a> — Nonblocking concurrent data structures are an increasingly valuable tool for shared-memory parallel programming.</span>
-   <span id="39a7"><a href="https://github.com/cksystemsgroup/scal" class="markup--anchor markup--li-anchor">Scal</a> — High-performance multicore-scalable data structures and benchmarks. (<a href="http://scal.cs.uni-salzburg.at/" class="markup--anchor markup--li-anchor">Web</a>)</span>
-   <span id="13c1"><a href="https://github.com/HazyResearch/hyperbolics" class="markup--anchor markup--li-anchor">Hyperbolic embedding implementations</a></span>
-   <span id="dae7"><a href="https://github.com/prathyvsh/morphisms-of-computational-structures" class="markup--anchor markup--li-anchor">Morphisms of Computational Constructs</a> — Visual catalogue + story of morphisms displayed across computational structures.</span>
-   <span id="c5b7"><a href="http://djkooks.github.io/build-your-own-kv-store" class="markup--anchor markup--li-anchor">What is key-value store? (build-your-own-x) (2020)</a></span>
-   <span id="f78c"><a href="https://stackoverflow.com/questions/500607/what-are-the-lesser-known-but-useful-data-structures" class="markup--anchor markup--li-anchor">Lesser Known but Useful Data Structures</a></span>
-   <span id="4a81"><a href="https://martin.kleppmann.com/2020/12/02/bloom-filter-hash-graph-sync.html" class="markup--anchor markup--li-anchor">Using Bloom filters to efficiently synchronize hash graphs (2020)</a></span>
-   <span id="f4d6"><a href="https://llimllib.github.io/bloomfilter-tutorial/" class="markup--anchor markup--li-anchor">Bloom Filters by Example</a> (<a href="https://github.com/llimllib/bloomfilter-tutorial" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="4faa"><a href="https://crypto.stanford.edu/pbc/notes/zdd/" class="markup--anchor markup--li-anchor">Binary Decision Diagrams</a> (<a href="https://news.ycombinator.com/item?id=25342922" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="949c"><a href="https://mochromatic.com/3-steps-to-designing-better-data-structures-in-elixir/" class="markup--anchor markup--li-anchor">3 Steps to Designing Better Data Structures (2020)</a></span>
-   <span id="50a9"><a href="https://matteding.github.io/2019/04/25/sparse-matrices/" class="markup--anchor markup--li-anchor">Sparse Matrices (2019)</a> (<a href="https://news.ycombinator.com/item?id=25601288" class="markup--anchor markup--li-anchor">HN</a>)</span>
-   <span id="eb25"><a href="https://github.com/xtaci/algorithms" class="markup--anchor markup--li-anchor">Algorithms &amp; Data Structures in C++</a></span>
-   <span id="24f9"><a href="https://drs.is/post/fancy-tree-traversals/" class="markup--anchor markup--li-anchor">Fancy Tree Traversals (2019)</a></span>
-   <span id="9259"><a href="https://drs.is/post/robson-traversal/" class="markup--anchor markup--li-anchor">The Robson Tree Traversal (2019)</a></span>
-   <span id="6fdb"><a href="http://cr.yp.to/data.html" class="markup--anchor markup--li-anchor">Data structures and program structures</a></span>
-   <span id="11af"><a href="http://cr.yp.to/cdb.html" class="markup--anchor markup--li-anchor">cdb</a> — Fast, reliable, simple package for creating and reading constant databases.</span>
-   <span id="6fb7"><a href="https://pgm.di.unipi.it/" class="markup--anchor markup--li-anchor">PGM-index</a> — Learned indexes that match B-tree performance with 83x less space. (<a href="https://news.ycombinator.com/item?id=25899286" class="markup--anchor markup--li-anchor">HN</a>) (<a href="https://github.com/gvinciguerra/PGM-index" class="markup--anchor markup--li-anchor">Code</a>)</span>
-   <span id="4e08"><a href="https://minimalmodeling.substack.com/p/structural-and-pure-attributes" class="markup--anchor markup--li-anchor">Structural and pure attributes</a></span>
-   <span id="e0ae"><a href="http://aleksandar-prokopec.com/resources/docs/p137-prokopec.pdf" class="markup--anchor markup--li-anchor">Cache-Tries: O(1) Concurrent Lock-Free Hash Tries (2018)</a></span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 24, 2021](https://medium.com/p/16ce4244be12).

<a href="https://medium.com/@bryanguner/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
