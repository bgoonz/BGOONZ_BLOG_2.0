---
title: Python at length Part 2
weight: 0
excerpt: Classes are a vital component of object-oriented programming
seo:
    title: 'Python at length Part 2'
    description: 'Python at length Part 2'
    robots: []
    extra: []
template: docs
---



    
    []: # Language: markdown
    []: # Path: src\pages\docs\python\length-part3.md


**Classes**

Classes are a vital component of object-oriented programming. When creating a class, you must use the `class` keyword. Other elements are then nested in the class. Here is an example of a Python class.

```python
class Farmer: # a class with the name farmer
    name = "John" # A variable
    produce = "1000kgs" # A variable

farmer = Farmer() #instatiating the class as an object.
print(farmer.name) # accessing the properties of the Farmer class.
```

Classes can help as group things with similar characteristics. We can also assign values to class variables using the `init` function.

```python
class Farmer:
  def __init__(self, farmername, produce):
    self.farmername = farmername
    self.produce = produce

farmer = Farmer("Carry Sminson", "10,000kgs")

print(farmer.farmername, farmer.produce)
```

In the above `Farmer` class, the `self` keyword represents an instance of an object. In other words, it allows us to access the different methods and attributes defined in the class.

You can also declare a method in a class and use it later, as shown below.

```python
class Farmer:
  def __init__(self, farmername, produce):
    self.farmername = farmername
    self.produce = produce

  def printDetails(self): # Method
      print(self.farmername, self.produce)

farmer = Farmer("Carry Sminson", "10,000kgs")

farmer.printDetails()
```

### Python syntax was made for readability, and easy editing. For example, the python language uses a `:` and indented code, while javascript and others generally use `{}` and indented code

Lets create a [python 3](https://repl.it/languages/python3) repl, and call it _Hello World_. Now you have a blank file called _main.py_. Now let us write our first line of code:

_helloworld.py_

```python
print('Hello world!')
```

> Brian Kernighan actually wrote the first "Hello, World!" program as part of the documentation for the BCPL programming language developed by Martin Richards.

Now, press the run button, which obviously runs the code. If you are not using replit, this will not work. You should research how to run a file with your text editor.

If you look to your left at the console where hello world was just printed, you can see a `>`, `>>>`, or `$` depending on what you are using. After the prompt, try typing a line of code.

```python
Python 3.6.1 (default, Jun 21 2017, 18:48:35)
[GCC 4.9.2] on linux
Type "help", "copyright", "credits" or "license" for more information.
> print('Testing command line')
Testing command line
> print('Are you sure this works?')
Are you sure this works?
>
```

The command line allows you to execute single lines of code at a time. It is often used when trying out a new function or method in the language.

Another cool thing that you can generally do with all languages, are comments. In python, a comment starts with a `#`. The computer ignores all text starting after the `#`.

_shortcom.py_

```python
# Write some comments!
```

If you have a huge comment, do **not** comment all the 350 lines, just put `'''` before it, and `'''` at the end. Technically, this is not a comment but a string, but the computer still ignores it, so we will use it.

_longcom.py_

```python
'''
Dear PYer,
I am confused about how you said you could use triple quotes to make
SUPER
LONG
COMMENTS
!

I am wondering if this is true,
and if so,
I am wondering if this is correct.

Could you help me with this?

Thanks,
Random guy who used your tutorial.
'''
print('Testing')
```

Unlike many other languages, there is no `var`, `let`, or `const` to declare a variable in python. You simply go `name = 'value'`.

_vars1.py_

```python
x = 5
y = 7
z = x*y # 35
print(z) # => 35
```

Remember, there is a difference between integers and strings. _Remember: String = `""`._ To convert between these two, you can put an int in a `str()` function, and a string in a `int()` function. There is also a less used one, called a float. Mainly, these are integers with decimals. Change them using the `float()` command.

_vars2.py_

```python
x = 5
x = str(x)
b = '5'
b = int(b)
print('x = ', x, '; b = ', str(b), ';') # => x = 5; b = 5;
```

Instead of using the `,` in the print function, you can put a `+` to combine the variables and string.

There are many operators in python:

-   `+`
-   `-`
-   `/`
-   `*` These operators are the same in most languages, and allow for addition, subtraction, division, and multiplicaiton. Now, we can look at a few more complicated ones:
-   `%`
-   `//`
-   `**`
-   `+=`
-   `-=`
-   `/=`
-   `*=` Research these if you want to find out more…

_simpleops.py_

```python
x = 4
a = x + 1
a = x - 1
a = x * 2
a = x / 2
```

You should already know everything shown above, as it is similar to other languages. If you continue down, you will see more complicated ones.

_complexop.py_

```python
a += 1
a -= 1
a *= 2
a /= 2
```

The ones above are to edit the current value of the variable.  
Sorry to JS users, as there is no `i++;` or anything.

> Fun Fact:  
> The python language was named after Monty Python.

If you really want to know about the others, view [Py Operators](https://www.tutorialspoint.com/python/python_basic_operators.htm)

Like the title?  
Anyways, a `'` and a `"` both indicate a string, but **do not combine them!**

_quotes.py_

```python
x = 'hello' # Good
x = "hello" # Good
x = "hello' # ERRORRR!!!
```

_slicing.py_

**String Slicing**

You can look at only certain parts of the string by slicing it, using `[num:num]`.  
The first number stands for how far in you go from the front, and the second stands for how far in you go from the back.

```python
x = 'Hello everybody!'
x[1] # 'e'
x[-1] # '!'
x[5] # ' '
x[1:] # 'ello everybody!'
x[:-1] # 'Hello everybod'
x[2:-3] # 'llo everyb'
```

**Methods and Functions**

Here is a list of functions/methods we will go over:

-   `.strip()`
-   `len()`
-   `.lower()`
-   `.upper()`
-   `.replace()`
-   `.split()`

I will make you try these out yourself. See if you can figure out how they work.

_strings.py_

```python
x = " Testing, testing, testing, testing       "
print(x.strip())
print(len(x))
print(x.lower())
print(x.upper())
print(x.replace('test', 'runn'))
print(x.split(','))
```

Good luck, see you when you come back!

Input is a function that gathers input entered from the user in the command line. It takes one optional parameter, which is the users prompt.

_inp.py_

```python
print('Type something: ')
x = input()
print('Here is what you said: ', x)
```

If you wanted to make it smaller, and look neater to the user, you could do…

_inp2.py_

```python
print('Here is what you said: ', input('Type something: '))
```

Running:  
_inp.py_

```python
Type something:
Hello World
Here is what you said: Hello World
```

_inp2.py_

```python
Type something: Hello World
Here is what you said: Hello World
```

Python has created a lot of functions that are located in other .py files. You need to import these **modules** to gain access to the,, You may wonder why python did this. The purpose of separate modules is to make python faster. Instead of storing millions and millions of functions, , it only needs a few basic ones. To import a module, you must write `input <modulename>`. Do not add the .py extension to the file name. In this example , we will be using a python created module named random.

_module.py_

```python
import random
```

Now, I have access to all functions in the random.py file. To access a specific function in the module, you would do `<module>.<function>`. For example:

_module2.py_

```python
import random
print(random.randint(3,5)) # Prints a random number between 3 and 5
```

> Pro Tip:  
> Do `from random import randint` to not have to do `random.randint()`, just `randint()`  
> To import all functions from a module, you could do `from random import *`

Loops allow you to repeat code over and over again. This is useful if you want to print Hi with a delay of one second 100 times.

**for Loop**

The for loop goes through a list of variables, making a seperate variable equal one of the list every time.  
Let's say we wanted to create the example above.

_loop.py_

```python
from time import sleep
for i in range(100):
     print('Hello')
     sleep(.3)
```

This will print Hello with a .3 second delay 100 times. This is just one way to use it, but it is usually used like this:

_loop2.py_

```python
import time
for number in range(100):
     print(number)
     time.sleep(.1)
```

**while Loop**

The while loop runs the code while something stays true. You would put `while <expression>`. Every time the loop runs, it evaluates if the expression is True. It it is, it runs the code, if not it continues outside of the loop. For example:

_while.py_

```python
while True: # Runs forever
     print('Hello World!')
```

Or you could do:

_while2.py_

```python
import random
position = '<placeholder>'
while position != 1: # will run at least once
    position = random.randint(1, 10)
    print(position)
```

The if statement allows you to check if something is True. If so, it runs the code, if not, it continues on. It is kind of like a while loop, but it executes **only once**. An if statement is written:

_if.py_

```python
import random
num = random.randint(1, 10)
if num == 3:
     print('num is 3. Hooray!!!')
if num > 5:
     print('Num is greater than 5')
if num == 12:
     print('Num is 12, which means that there is a problem with the python language, see if you can figure it out. Extra credit if you can figure it out!')
```

Now, you may think that it would be better if you could make it print only one message. Not as many that are True. You can do that with an `elif` statement:

_elif.py_

```python
import random
num = random.randint(1, 10)
if num == 3:
    print('Num is three, this is the only msg you will see.')
elif num > 2:
    print('Num is not three, but is greater than 1')
```

Now, you may wonder how to run code if none work. Well, there is a simple statement called `else:`

_else.py_

```python
import random
num = random.randint(1, 10)
if num == 3:
    print('Num is three, this is the only msg you will see.')
elif num > 2:
    print('Num is not three, but is greater than 1')
else:
    print('No category')
```

So far, you have only seen how to use functions other people have made. Let use the example that you want to print the a random number between 1 and 9, and print different text every time.  
It is quite tiring to type:

Characters: 389

_nofunc.py_

```python
import random
print(random.randint(1, 9))
print('Wow that was interesting.')
print(random.randint(1, 9))
print('Look at the number above ^')
print(random.randint(1, 9))
print('All of these have been interesting numbers.')
print(random.randint(1, 9))
print("these random.randint's are getting annoying to type")
print(random.randint(1, 9))
print('Hi')
print(random.randint(1, 9))
print('j')
```

Now with functions, you can seriously lower the amount of characters:

Characters: 254

_functions.py_

```python
import random
def r(t):
     print(random.randint(1, 9))
     print(t)
r('Wow that was interesting.')
r('Look at the number above ^')
r('All of these have been interesting numbers.')
r("these random.randint's are getting annoying to type")
r('Hi')
r('j')
```

#### Chapter 01 - Getting Ready with Python

**Installing Python 3, And Launching Python Shell**

This video should help you get up and running with Python 3

-   [Installing Python 3 and Launch Python Shell](https://www.youtube.com/watch?v=Ji1WW4Suaww)

Installing Python is really a cakewalk. Search for "Python download" on [www.google.com](http://www.google.com/). Download the installable and install it.

A quick word of caution on Windows

-   Make sure that you have the check-box "Add Python 3.6 to PATH", checked.

Once you have installed Python, you can launch the Python Shell.

-   Windows - Launch cmd prompt by typing in 'cmd' command.
-   Mac or Linux - Launch up terminal.

Command to launch Python 3 is different in Mac.

-   In Mac, type in `python3`
-   In other operating systems, including windows, type `python`

You can type code in python shell and code as well!

You can use `print(5*4)`, and it shows `20`.

You can execute the code, and the shell would immediately give you output.

Using the the Python Shell is an awesome way to learn Python.

#### Chapter 02 - Introduction To Python Programming

Most programmers find programming a lot of fun, and besides, it also gets their work done.

Programming mainly involves _problem solving_, where one makes use of a computer to solve a real world problem.

During our journey here, we will approach programming in a very different way. We will not only introduce you to the Python language, but also help you pick up essential problem solving skills.

As a programmer, you need to be able to look at a problem, and identify the important programming concepts relevant to solving it. Finally, you need to be able to use the language features and syntax, to express your solution on the computer. While all this looks complex, we want to make it easy for you. Together, we will tackle a variety of programming challenges, using these same steps. We will start with simple challenges \(such as a Multiplication Table\), and gradually increase the difficulty level over the duration of this book.

Learning to program is a lot like learning to ride a bicycle. The first few steps are the most challenging ones.

Once you get over these initial steps, your experience will become more and more enjoyable.

Are you ready for your first programming challenge? Let's get going now! We wish you all the best.

**Summary**

In this step, we:

-   Were introduced to the concept of problem solving
-   Understood how good programmers approach problem solving

**Step 01: Our First Programming Challenge**

Our first _programming challenge_ aims to do, what every kid does in math class: read out a multiplication table. We now want to give this task to the computer. Here is the statement of our problem:

**The Print Multiplication Table Challenge \(PMT-Challenge\)**

1. Compute the multiplication table for `5`, with entries from `1` to `10`.
2. Display this table.

The display needs to be:

_**5 \* 1 = 5**_

_**5 \* 2 = 10**_

_**5 \* 3 = 15**_

_**5 \* 4 = 20**_

_**5 \* 5 = 25**_

_**5 \* 6 = 30**_

_**5 \* 7 = 35**_

_**5 \* 8 = 40**_

_**5 \* 9 = 45**_

_**5 \* 10 = 50**_

This is the challenge. For convenience, let's give it a label, say _PMT-Challenge_. What would be the important concepts we need to learn, to solve this challenge? The following list of concepts would be a good starting point:

-   **Statements**
-   **Expressions**
-   **Variables**
-   **Literals**
-   **Conditionals**
-   **Loops**
-   **Methods**

In the rest of this chapter, we will introduce these concepts to you, one-by-one. We will also show you how learning each concept, takes us closer to a solution to _PMT-Challenge_.

**Summary**

In this step, we:

-   Stated our first programming challenge
-   Identified what programming concepts we need to learn, to solve this challenge

**Step 02: Breaking Down PMT-Challenge**

Typically when we do programming, we have problems. Solving the problem typically need a step-by -step approach. Common sense tells us that to solve a complex problem, we break it into smaller parts, and solve each part one by one. Here is how any good programmer worth her salt, would solve a problem:

-   Simplify the problem, by breaking it into sub-problems
-   Solve the sub-problems in stages \(in some order\), using the language
-   Combine these solutions to get a final solution

The _PMT-Challenge_ is no different! Now how do we break it down, and where do we really start? Once again, your common sense will reveal a solution. As a first step, we could get the computer to calculate say, `5 * 3`. The second thing we can do, is to try and print the calculated value, in a manner similar to `5 * 3 = 15`. Then, we could repeat what we just did, to print out all the entries of the `5` multiplication table. Let's put it down a little more formally:

Here is how our draft steps look like

-   Calculate `5 * 3` and print result as `15`
-   Print `5 * 3 = 15` \(`15` is result of previous calculation\)
-   Do this ten times, once for each table entry \(going from `1` to `10`\)

Let's start with that kind of a game plan, and see where it takes us.

**Summary**

In this step, we:

-   Learned that breaking down a problem into sub-problems is a great help
-   Found a way to break down the _PMT-Challenge_ problem

**Step 03: Introducing Operators And Expressions**

Let's focus on solving the first sub-problem of _PMT-Challenge_, the numeric computation. We want the computer to calculate `5 * 5` for example, and print `25` for us. How do we get it to do that? That's what we would be looking at in this step.

**Snippet-01: Introducing Operators**

Launch up Python shell. We want to calculate `5 * 5`. How do we do that?

Using our knowledge of school math, let's try `5 X 5`.

```python
    >>> 5 X 5
    File "< stdin >", line 1
    5 X 5
      ^
    SyntaxError: invalid syntax
```

The Python Shell hits back at us, saying "_invalid syntax_". This is how Python complains, when it doesn't fully understand the code you type in. Here, it says our code has a "**SyntaxError**".

The reason why it complains, is because '`X`' is not a valid **operator** in Python.

The way you can do multiplication is by using the '`*`' _operator_ .

"_5 into 5_" is achieved by the code `5 * 5`, and you can see the result `25` being printed. Similarly, `5 * 6` gives us `30`.

```python
    >>> 5 * 6
    30
```

There are a wide range of other operators in Python:

-   `5 + 6` gives a result of `11`.
-   `5 - 6` leads to `-1`.

 ```python
    >>> 5 + 6
    11
    >>> 5 - 6
    -1
 ```

`10 / 2`, gives an output of `5.0` . There is one interesting operator, `**`. Let's try `10 ** 3`. We ran this code, and the result we get is `1000`. Yes you guessed right, the operator performs "to the power of". "`10` to the power of `3`" is `10 * 10 * 10`, or `1000`.

```python
    >>> 10 / 2
    5.0
    >>> 10 ** 3
    1000
```

Another interesting operator is `%`, called "_modulo_", which computes the remainder on integer division. If we do `10 % 3`, what is the remainder when `10` is divided by `3`? `3 * 3` is `9`, and `10 - 9` is `1`, which is what `%` returns in this case.

Let's look at some terminology:

-   Whatever pieces of code we gave Python shell to run, are called **expressions**. So, `5 * 5`, `5 * 6` and `5 - 6` are all _expressions_. An expression is composed of _operators_ and **operands**.
-   In the expression `5 * 6`, the two values `5` and `6` are called operands, and the `*` operator _operates_ on them.
-   The values `5` and `6` are **literals**, because those are constants which cannot be changed.

The cool thing about Python, is that you can even have expressions with multiple operators. Therefore, you can form an expression with `5 + 5 + 5`, which evaluates to `15`. This is an expression which has three operands, and two `+` operators. You can even have expressions with different types of operators, such as in `5 + 5 * 5`.

```python
    >>> 5 + 5 + 5
    15
    >>> 5 + 5 * 5
    30
```

Try and play around with the expressions, and understand the output which results.

**Summary**

In this step, we:

-   Learned how to give code input to the Python Shell
-   Understood that Python has a predefined set of operators
-   Used a few types of basic operators and their operands, to form expressions

**Step 04: Programming Exercise IN-PE-01**

At this stage, your smile tells us that you enjoy evaluating Python expressions. What if we tickle your mind a bit, to make sure it hasn't fallen asleep? Here is your first programming exercise.

**Exercises**

1. Write an expression to calculate the number of minutes in a day.
2. Write an expression to calculate the number of seconds in a day.

**Note**

You need to solve these problems by yourself. If you are able to work them out, that's fantastic! But if not, that's part of the learning process.

**Solutions**

**Solution 1**

```python
    >>> 24 * 60

    1440
```

We wanted to calculate the number of minutes in a day. How do we do that? Think about this…

-   How many number of hours are there in a day? `24`.
-   And how many minutes does each hour have? It's `60`.
-   So if you want to find out the number of minutes in a day, it's `24 * 60`, which is `1440`.

**Solution 2**

```python
    >>> 24 * 60 * 60

    86400
```

How many seconds are there in a day?

-   Let's start with the number of hours, `24`.
-   The number of minutes in an hour is `60`, and
-   The number of seconds in a minute is `60` as well.
-   So it's `24 * 60 * 60`, or `86400`.

**Summary**

In this step, we:

-   Solved a Programming Exercise involving common scenarios, using Python code involving:
    -   Expressions
    -   Operators
    -   Literals

**Step 05: Puzzles On Expressions**

Let's look at a few puzzles related to expressions, in this step. Before that, let's revise some of the terminology we had learned earlier.

`5 + 6 + 10` is an example of an expression. In this expression, `5`, `6` and `10` are operands. The `+` here is the operator. You can have multiple operators in an expression. We also did mention that the operands, namely `10`, `6` and `5`, are literals. Their values will not change.

Here are a few puzzles coming up, to explore aspects of expressions.

**Snippet-01: Puzzles On Expressions**

Think about what would happen when you do something of this kind: `5 $ 2`. You're right, it would throw a `SyntaxError`. When Python does not understand the code you type in, it reports an error. Here, the expression we're typing is `5 $ 2`, which does not make sense to Python, hence the `SyntaxError`.

```python
    >>> 5 $ 2
    File "< stdin >", line 1
    5 $ 2
    ^
    SyntaxError: invalid syntax
    >>> 5$2
    File "< stdin >", line 1
    5 $ 2
    ^
    SyntaxError: invalid syntax
```

Let's say we type in `5+6+10`, without any spaces between the operands, and the operators. What do you think will happen? Surprisingly, the Python Shell does calculate the value!

```python
    >>> 5+6+10
    21
```

In an expression, using spaces makes it easier for you to read it, but it's not mandatory. `5 + 6 + 10` is easier to read than `5+6+10`, but does not make any difference to the Python compiler.

The next puzzle tries to evaluate `5 / 2`, which is "`5` divided by `2`". What would be the output? `2.5`.

```python
    >>> 5/2
    2.5
```

If you're coming from other programming languages like Java or C, this might be a surprising result. If you try this in Java for instance, you would get `2` as the output. Note that even though both operands are integers, the result of the `/` operation is a floating point value, `2.5` . Python does what is expected by a programmer!

The puzzle after that tries to play with `5 + 5 * 6`. What would be the result of this expression? Will it be `5 + 5` or `10`, then `10 * 6`, which is `60`? Or, will it be `5` plus `5 * 6`, which is `5` + `30`, that's `35`?

```python
    >>> 5 + 5 * 6
    35
```

The correct result is `35`.

Python decides this is based on the **precedence** of operators.

Operators in Python are divided into two sets as follows:

-   `**`, `*`, `/` and `%` have higher precedence, or priority.
-   `+` and `-` have a lower precedence.

Sub-expressions involving operators from {`*`, `/`, `%`, `**`} are evaluated before those involving operators from {`+`, `-`}

Let's try another small puzzle on precedence, with `5 - 2 * 2`. What would be the result of this? Will it be `6`, or `1`? It's `1`, because `*` has a higher precedence than `-`. Thus `2 * 2` is `4`, and `5 - 4` gives us `1`.

```python
    >>> 5 - 2 * 2
    1
```

Let's say we want to execute `5 - 2`, to give an output of `2`. How do we change the operator precedence?

You cannot really change the precedence, but you can add parentheses to group sub-expressions differently.

```python
    >>> (5 - 2) * 2
    6
    >>> 5 - ( 2 * 2 )
    1
```

Parentheses have the highest precedence in Python, and can be used to override operator precedence. `(5 - 2)` gets calculated first, and the final result of the expression is `6`.

A positive thing about using parentheses is, that it makes expressions more readable. So even in situations such as `5 - 2 * 2`, where we know the result according to precedence, adding parentheses is good.

**Summary**

In this step, we went about solving a few puzzles about expressions, touching concepts such as:

-   `SyntaxError` for incorrect operators
-   White-space in expressions
-   Floating Point division by default
-   Operator Precedence
-   Using parentheses

**Step 06: Printing Text**

In the previous step, we learned how to use expressions to compute values. In this step, let's see how we can actually print multiplication table entries, that are readable by the user.

**Snippet-01: Printing Text**

How do we go about printing a complete multiplication table entry? We want to print text such as `5 * 6 = 30` . But trying to do so, as we know it, gives us a `SyntaxError`. Clearly, there is a different way to print text, as compared to an expression.

```python
    >>> 5 * 6 = 30
      File "<stdin>", line 1
    SyntaxError: can't assign to operator
```

Let's first try to print a simple piece of text, `Hello`. Typing in this piece of code directly on Python Shell also gives us an error.

```python
    >>> Hello
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Hello' is not defined
```

Only expressions work that way, and `Hello` is not really an expression.

`"Hello"` is typically called a **string**, and represents the text of letters `'H'`, `'e'`, `'l'`, `'l'`, `'o'`. `"Hello"` is hence different from the number `5`.

There are a number of in-built functions in Python to help print strings. One of these is the `print()` function. Can you just say `print Hello`?

```python
    >>> print Hello
      File "<stdin>", line 1
        print Hello
                  ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(Hello)?
```

The Python compiler gives you an error, that says "missing parentheses".

Will `print(Hello)` work?

```python
    >>> print (Hello)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Hello' is not defined
```

Nope! Again, this one failed because you need to indicate that `"Hello"` is a string.

How do I indicate that `"Hello"` is a string? By putting it within double quotes.

Let's try `print ("Hello")`

```python
    >>> print ("Hello")
    Hello
    >>> print("Hello")
    Hello
```

`print("Hello")` finally results in `"Hello"` being printed out. To be able to print `"Hello"`, the things we need to do are:

-   Typing the method name print ,
-   open parentheses \( ,
-   Followed by a double quote " ,
-   The text Hello,
-   and another double quote " ,
-   finished off with a closed parentheses \).

What we have written here is called a **statement**, a simple piece of code to execute. As part of this statement, we are **calling** a **function**, named `print()`.

What exactly are we trying to print?

The text `"Hello"`, which is called a **parameter** or **argument**, to `print()`.

Now let's get back to what we wanted to do, which is to print `5 * 6 = 30`. The most basic version would be something of this kind, `print("5 * 6 = 30")`. Here, we are passing the entire value in the form of a string.

```python
    >>> print("5 * 6 = 30")
    5 * 6 = 30
```

This prints the text on the console, as-is. The thing you need to understand here is, we aren't really calculating `30` using the formula `5 * 6`, but directly putting text `30` in here. That's called **hard-coding**.

In a later step, we will look at how to actually calculate the value and pass it in.

**Summary**

In this step, we:

-   Understood that displaying text on the console is not the same as printing an expression value
-   Learned about the `print()` function, that is used to print text in Python.
-   Found a way to print the text `"5 * 6 = 30"` on the console, by hard-coding values in a string

**Step 07: Puzzles On Utility Methods, And Strings**

In the previous step, we learned how to print `5 * 6 = 30`. It was not a perfect solution, because we hard-coded everything. we used an in-built function named `print()`, passed a string to it, and invoked the method.

In this step, let's look at a number of puzzles related to in-built methods, their parameters, and strings in general.

For example, let's do `print("5 * 6")`, as in the previous step. What does this code result in?

```python
    >>> print("5*6")
    5*6
    >>> print('5*6')
    5*6
```

It just prints the string `"5 * 6"`.

Let's say we try the code `print(5 * 6)`,

```python
    >>> print(5*6)
    30
```

Without the double quotes, `5 * 6` is an expression. What will be the output? `30`.

If you call `print()` with an expression argument, it prints the value of the expression. However, when we pass something within double quotes, it becomes a piece of text, printed as-is.

An interesting thing to note is, that in Python you can use either double-quotes \(`"` and `"`\), or single-quotes \(`'` and `'`\) with text values.

Let's look at a few other in-built methods within Python.

Consider `abs()` \(which stands for absolute value\), a method that accepts a numeric value. You can use `abs(10.5)`, passing `10.5` as a value to it, and it prints the absolute value of `10`.

```python
    >>> abs 10.5
      File "<stdin>", line 1
        abs 10.5
               ^
    SyntaxError: invalid syntax
    >>> abs(10.5)
    10.5
```

If you pass in a string value, will it work? It complains, "`abs()` function will not work with a string, it only works with numeric values".

```python
    >>> abs("10.5")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: bad operand type for abs(): 'str'
```

Let's say you want to use a function that computes "to the power of", for instance "`2` to the power of `5`". In Python, there's an in-built function named `pow()`, which does just what we need. To `pow()`, you can pass two parameters and calculate the result. How do you do that?

Will this work: `pow 2 5`? No, not at all. This code does not work as well: `pow(2 5)`. `pow(2, 5)` is the correct syntax.

```python
    >>> pow 2 5
      File "<stdin>", line 1
        pow 2 5
            ^
    SyntaxError: invalid syntax
    >>> pow(2 5)
      File "<stdin>", line 1
        pow(2 5)
              ^
    SyntaxError: invalid syntax
    >>> pow(2, 5)
    32
```

You'll see that `32` is printed.

Let's see another example, "`10` to the power of `3`". `pow(10,3)` is the alternative to saying `10 ** 3`. This gives us `1000`, similar to how `pow()` would.

```python
    >>> pow(10, 3)
    1000
    >>> 10 ** 3
    1000
```

`max()` returns maximum in a set of numbers.`min()` function returns the minimum value.

```python
    >>> max(34, 45, 67)
    67
    >>> min(34, 45, 67)
    34
```

These are some of the in-built functions in Python, and we saw how to call the in-built functions by passing in a varied number of parameters.

Python is case sensitive. So let's say I want of calculate `pow(2,5)`. So this would give me `32`. Now, what if I say capital `'P'` instead of small `'p'` here? `Pow(2,5)` would lead to an error.

```python
    >>> pow(2,5)
    32
    >>> Pow(2,5)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Pow' is not defined
```

The only things not case-sensitive in Python, are string values. Earlier we saw that the code `print("Hello")` displays the text `"Hello"`. Inside a string, the text can be in any case. Hence, `print("hello")` displays `"hello"` ,with a small `'h'`.

```python
    >>> print("Hello")
    Hello
    >>> print("hello")
    hello
    >>> print("hellO")
    hellO
    >>> print ( "hellO" )
    hellO
```

However inside your code, you need to be very particular about the case of function names, class names, variable names, and the like.

In your code, whitespace does not really matter. You can add space here and here, and you would still get the same output. However, in case of strings, whitespace does matter.

If we say `print("hellO World")`, it would print `"hellO World"`, with a space in between. And if you do `print("hellO World")` with three spaces, it would print the same. In expressions, white-space does not affect the output.

```python
    >>> print ( "hellO World" )
    hellO World
    >>> print ( "hellO     World" )
    hellO     World
```

The last thing we want to look at, is an **escape sequence**. Let's say you want to print a double quote, `"`, in the code. If we were to do this: `print("Hello"")`, what would happen? The compiler says error!

```python
    >>> print("Hello"")
      File "<stdin>", line 1
        print("Hello"")
                      ^
    SyntaxError: EOL while scanning string literal
```

If you want to print a `"` inside a string, use an escape sequence. In Python, the symbol `'\'` is used as an **escape character**. On using `'\'` adjacent to the `"`, it prints `Hello"` \(notice the trailing `"`\). We have used the `'\'` to **escape** the `"`, by forming an _escape sequence_ `\"`.

```python
>>> print("Hello\"")
Hello"
>>>
```

The other reason why you would want to use a `'\'` is to print a `<NEWLINE>`. If you want to print `"Hello World"`, but with `"Hello"` on one line and `"World"` on the next, `'\n'` is the escape sequence to use.

```python
    >>> print("Hello\nWorld")
    Hello
    World
```

The other important escape sequence is `'\t'`, which prints a `<TAB>` in the output. When you do `print("Hello\tWorld")`, you can see the tab-space between `"Hello"` and `"World"`.

```python
    >>> print("Hello\tWorld")
    Hello   World
```

Another useful escape sequence is `\\` . If you want to print a `\` , then use the sequence `\\` . You would see that it prints `Hello\World` . Think about what would happen if we put six `\` . Yes you're right! It would print this string: `"\\\"` .

```python
    >>> print("Hello\\World")
    Hello\World
    >>> print("Hello\\\\\\World")
    Hello\\\World
```

One of the things with Python is, it does not matter whether you use double quotes or single quotes to enclose strings. There are some interesting, and useful ways of using a combination of both, within the same string. Have a look at this call: `print("Hello'World")`, and notice the output we get. In a similar way, the following code will be accepted and run by the Python system: `print('Hello"World')`.

```python
    >>> print('Hello"')
    Hello"
    >>> print("Hello'World")
    Hello'World
    >>> print("Hello\"World")
    Hello"World
    >>> print("Hello\"World")
    Hello"World
```

The above two examples can be used as a tip by newbie programmers when they form string literals, and want to use them in their code:

-   If the string literal contains one or more single quotes, then you can use double quotes to enclose it.
-   However if the string contains one or more double quotes, then prefer to use single quotes to enclose it.

**Summary**

In this step, we:

-   Explored a number of puzzles related to code involving:
    -   Built-in functions for numeric calculations
    -   The `print()` function to display expressions and strings
-   Covered the following aspects of the above utilities:
    -   Case-sensitive aspects of names and strings
    -   The role played by whitespace
    -   The escape character, and common escape sequences

**Step 08: Formatted Output With print\(\)**

In the previous step, we learned how to print a hard-coded string, such as `"5 * 6 = 30"`.

In this step, let's try to replace the hard-coded `30` with a computed value.

Let's start with a simple scenario. Let's say we want to place that calculated value within a string, and display it. How do we do that?

**Snippet-01: print\(\) Formatted Output**

`format()` method can be used to print formatted text.

Let's see an example:

```python
    >>> print("VALUE".format(5*2))
    VALUE
```

We were expecting `10` to be printed, but it's actually printing `VALUE`.

How do we get `10` to be printed then?

```python
    >>> print("VALUE {0}".format(5*2))
    VALUE 10
```

By having an open brace `{`, closed brace `}`, and and by putting the index of the value between them. Here, the value is the first parameter, and it's index will be `0`.

`"VALUE {0}"` is what we need.

Let's take another example. Suppose to the `format()` function, we pass three values: `10`, `20` and `30`.

Typically when we count positions or indexes, we start from `0`.

To print the first value, you need to pass in an index of `0`. To print the second value, pass an index of `1`.

```python
    >>> print("VALUE {0}".format(10,20,30))
    VALUE 10
    >>> print("VALUE {1}".format(10,20,30))
    VALUE 20
    >>> print("VALUE {2}".format(10,20,30))
    VALUE 30
```

Now going back to our problem, we wanted to display `"5 * 6 = 30"`, but without hard-coding. Instead of `30`, we want the calculated value of `5 * 6`.

```python
    >>> print("5 * 6 = 30".format(5,6,5*6))
    5 * 6 = 30
```

Let replace `"5 * 6 = 30"` with `"5 * 6 = {2}"`. `2` is the index of parameter value `5*6`.

```python
    >>> print("5 * 6 = {2}".format(5,6,5*6))
    5 * 6 = 30
```

Cool! Progress made.

Let's replace `5 * 6` with the right indices - `{0} * {1}`.

```python
    >>> print("{0} * {1} = {2}".format(5,6,5*6))
    5 * 6 = 30
```

The great thing about this, is now we can replace the values we passed to `print()` in the first place, without changing the indexes! So, we can display results for `5 * 7 = 35` and `5 * 8 = 40`. We are now able to print `5 * 6 = 30`, `5 * 7 = 35`, `5 * 8 = 40`, and can do similar things for other table entries as well.

```python
    >>> print("{0} * {1} = {2}".format(5,7,5*7))
    5 * 7 = 35
    >>> print("{0} * {1} = {2}".format(5,8,5*8))
    5 * 8 = 40
    >>> print("{0} * {1} = {2}".format(5,8,5*8))
    5 * 8 = 40
```

**Summary**

In this step, we:

-   Discovered that Python provides a way to do formatted printing of string values
-   Looked at the `format()` function, and saw how to call it within `print()`
-   Observed how we could work only with the indexes of parameters to `format()`, and change the parameters we pass without changing the code

**Step 09: Puzzles On format\(\) and print\(\)**

In this step, let's look at a few puzzles related to the format, and the print methods.

**Snippet-01: format\(\) And print\(\) Puzzles**

Let's say we pass in additional values, such as: `5 * 8`, `5 * 9` and `5 * 10`. However, within the call to `format()`, we are only referring to the values at index `0`, index `1` and index `2`. The values at indexes `3` and `4` are not used at all. What would happen when we run the code?

```python
    >>> print("{0} * {1} = {2}".format(5,8,5*8,5*9,5*10))
    5 * 8 = 40
```

Would this throw an error? No, it does not. You can see that the additional values which are passed in, are conveniently ignored.

Let's say instead of passing in a value of `2`, we pass `4`. What would happen?

```python
    >>> print("{0} * {1} = {4}".format(5,8,5*8,5*9,5*10))
    5 * 8 = 50
```

`5 * 10` is the value at index `4`

Now let's take a different scenario. We remove all the parameters passed to `format()`. However, inside the call to `print()`, we continue to say `{0} * {1} = {4}`. So we are trying to print the value at index `4`, but are only passing two values to the function `format()`. What do you think will happen?

```python
    >>> print("{0} * {1} = {4}".format(5,8))
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: tuple index out of range
```

It says `IndexError`, which means :"you are asking me to fetch the value at index `4`, but only passing in two values. How can I do what you want?"

Let's look at a few more things related to other data types. We try to format the following inside `print()`: `{0} * {1} = {2}`, and would pass in `2.5`, `2`, and `2.5 * 2` . Here, `2` is an integer value, but `2.5` is a floating point value. You can see that it prints `2.5 * 2 = 5.0`. So this approach of formatting values with `print()`, works also with floating point data as well.

```python
    >>> print("{0} * {1} = {2}".format(2.5,2,2.5*2))
    2.5 * 2 = 5.0
```

Now, are there are other types of data that `format()` works with? Yes, strings can join the party.

Let's say over here, we do: `print("My name is {0}".format("Ranga"))`. What would happen?

```python
    >>> print("My name is {0}".format("Ranga"))
    My name is Ranga
```

Index `0` will be replaced with the first parameter to `format()`.

**Summary**

In this step, we:

-   Understood the behavior when the parameters passed to `format()`:
    -   Exceed the indexes accessed by `print()`
    -   Are less than the indexes accessed by `print()`
    -   Are of type integer, floating-point or string

**Step 10: Introducing Variables**

We are slowly making progress toward our main goal, which is to print the `5` multiplication table.

In the first statement, we are printing `5 * 1 = 5`, and then changing the literals. To make it print `5 * 2 = 10`, we are changing `1` to `2`. Next, we are changing `2` to `3`. How do we make it a little simpler, so that our effort is reduced?

```python
    >>> print("{0} * {1} = {2}".format(5,1,5*1))
    5 * 1 = 5
    >>> print("{0} * {1} = {2}".format(5,2,5*2))
    5 * 2 = 10
    >>> print("{0} * {1} = {2}".format(5,3,5*3))
    5 * 3 = 15
```

Let's try a different approach.

What would happen if you replace `1` with `index`, and `5 * 1` with `5 * index`, and try to run it?

It gives an error! It says: "index is not defined".

Let's try and fix this, and execute `index = 2`. What would happen?

```python
    >>> index = 2
```

Aha! This compiles.

```python
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 2 = 10
```

And this statement is printing `5 * 2 = 10`.

Let's try something else. Let's make `index = 3`. What would happen?

```python
    >>> index = 3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15
```

The same statement on being run, prints `5 * 3 = 15`.

How can you check the value that `index` has? Just type in `index`.

```python
    >>> index
    3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15
```

The `index` symbol we have used here, is what is called a **variable**.

In Python, it's also called a **name**.

You can see that the value `index` referring to, can change over the duration of a program.

Initially, `index` was referring to a value of `1`. later, `index` was referring to a value of `3`.

Now, think about how you would print the entire table. All that you need to do, is start from `1`, execute the same statement with `print()` and `format()`, to get output `5 * 1 = 5`. Next, Change the value of index to `2`, and then print the same statement. Next, `index = 3`, and print the same statement again.

```python
    >>> index = 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 1 = 5
    >>> index = 2
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 2 = 10
    >>> index = 3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15
```

With the same statement `print("{0} * {1} = {2}".format(5,index,5*index))`, we are able to print different values. The value of `index` varies, but the code remains the same!

Variables make the program much more easier to read, as well as more generic.

**Snippet-02: Classroom Exercise On Variables**

Let's do a simple exercise with variables.

We want to create three variables `a`, `b` and `c`. Let's initially give them some values, say a value of `5` to `a`, `6` to `b` and `7` to `c`.

We want to get output of this kind: `5 + 6 + 7 = 18`, without using the literal values.

You would want to use the values stored in the variables in `a`, `b` and `c`.

If you're hard-coding, the way to do it is with `print("5 + 6 + 7 = 18")`.

```python
    >>> a = 5
    >>> b = 6
    >>> c = 7
    >>> print("5 + 6 + 7 = 18")
    5 + 6 + 7 = 18
    >>> print("5 + 6 + 7 = 18".format(a,b,c,a+b+c))
    5 + 6 + 7 = 18
```

The way you can do that is with code like this: `print("{0} + {1} + {2} = {3}".format(a,b,c,a+b+c))`.

```python
    >>> print("{0} + {1} + {2} = {3}".format(a,b,c,a+b+c))
    5 + 6 + 7 = 18
```

How do you confirm we are accessing values stored in the variables?

Let's change the values of `a`, `b` and `c`. Let's make `a = 6` , `b = 7` , and `c = 8` . Execute same statement.

```python
    >>> a = 6
    >>> b = 7
    >>> c = 8
    >>> print("{0} + {1} + {2} = {3}".format(a,b,c,a+b+c))
    6 + 7 + 8 = 21
```

You can see the magic of variables at play here! Based on what values these variables are referring to, you can see that the output of the print statement changes.

**Summary**

In this step, we:

-   Were introduced to variables, or names, in Python
-   Observed how we could pass in values of variables to the `format()` function

**Step 11: Puzzles On Variables**

In the previous step, we were introduced to the concept of variables in Python.

We will start with looking at a few puzzles.

**Snippet-01: Puzzles On Variables**

What if I try to refer to a variable which is not yet created?

```python
    >>> count
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'count' is not defined
    >>> print(count)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'count' is not defined
```

Before using a variable, you need to have it assigned a value. If you have not defined a variable before, then you cannot use it. Consider `print(count)`, it does not know what count is. So it would throw an error, saying: "`count` is not defined, I have no idea what count is."

Once you assign a value to a variable, you can use it.

```python
    >>> count = 4
    >>> print(count)
    4
```

The statement `count = 4` where we are creating a variable named `count` for the first time, is called a **variable definition**.

This is the first time you're referring to a variable, and assigning a value to it.

Python will create a variable in its memory.

Variable names are case sensitive. `count` and `Count` are not the same thing.

```python
    >>> Count
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Count' is not defined
    >>> count
    4
```

There are rules to follow while naming variables.

All variable names should either start with an alphabet , or an underscore `_` . `count`, `_count` are valid. `1count` is invalid.

```python
    >>> 1count = 5
      File "<stdin>", line 1
        1count = 5
             ^
    SyntaxError: invalid syntax
    >>> count = 5
    >>> _count = 5
    >>> 1count
      File "<stdin>", line 1
        1count
             ^
    SyntaxError: invalid syntax
    >>> 2count
      File "<stdin>", line 1
        2count
             ^
    SyntaxError: invalid syntax
```

After the first symbol, you can also use a numeral in variable names.

```python
    >>> c12345 = 5
```

To summarize the rules for naming variables.

-   This should start with an alphabet \(a capital or a small alphabet\) or underscore.
-   Starting the second character, it can be alphabet, or underscore, or a numeric value.

**Summary**

In this step, we:

-   Understood that a variable needs to be defined before it is used
-   Learned that there are certain rules to be followed while giving names to variables

**Step 12: Introducing Assignment**

In this step, we will look at an important concept in Python, called **assignment**. In previous steps, we created variables, like `i = 5`.

**Snippet-01: Introducing Assignment**

You can create other variables using whatever value `i` is referring to. If we say `j = i`, what would happen?

```python
    >>> i = 5
    >>> j = i
    >>> j
    5
```

`j` would start referring to the same value that `i` is referring to. This statement is called an **assignment**.

Let's try `j = 2 * i`.

```python
    >>> j = 2 * i
    >>> j
    10
```

`j` refers to a value of `10`

`=` has a different meaning in programming compared to mathematics.

In mathematics, When we execute `j = i`, it means `j` and `i` are equal.

In prgramming, the value of the expression on right hand side is assigned to the variable on the right hand side. Can you use a constant on the left hand side of an assignment? The answer is "No"!

```python
    >>> 5 = j
      File "<stdin>", line 1
    SyntaxError: can't assign to literal
```

The Python Shell throws an error, saying "Can't assign to literal", as `5` is a literal.

Let's create a couple of variables. `num1 = 5` and `num2 = 3`. We would want to add these and create a fresh variable. Let's say the name of the variable is `sum`.

```python
    >>> num1 = 5
    >>> num2 = 3
    >>> sum = num1 + num2
    >>> sum
    8
```

Create 3 variables `a`, `b` and `c` with different values and calculate their sum.

```python
    >>> a = 5
    >>> b = 6
    >>> c = 7
    >>> sum = a + b + c
    >>> sum
    18
```

We have just seen the mechanics of how assignment works in Python.

**Summary**

In this step, we:

-   Learned what happens when you assign a value to a variable, which may or may not exist
-   Discovered that literal constants cannot be placed on the left hand side of the assignment\(`=`\) operator

**Step 13: Introducing Formatted Printing**

Until now, we have been using the `format()` method to format and print values. Let's see a better approach to printing values.

This is the approach we used until now.

```python
    >>> a = 1
    >>> b = 2
    >>> c = 3
    >>> sum = a + b + c
    >>> print("{0} + {1} + {2} = {3}".format(a, b, c ,sum))
    1 + 2 + 3 = 6
```

Python has the concept of formatted strings. The syntax to use a formatted string is very simple - `f""`.

If we want to print the value of a variable `a`, we can use `{a}` in the text.

```python
    >>> print(f"")
    >>> print(f"value of a is {a}")
    value of a is 1
    >>> print(f"value of b is {b}")
    value of b is 2
```

The variable within braces is replaced by its value.

You can use expressions in a formatted string. Example below uses `{a+b}`.

```python
    >>> print(f"sum of a and b is {a + b}")
    sum of a and b is 3
```

This feature was introduced in a Python 3 release.

Let's get back to the original problem we wanted to solve: printing `5 + 6 + 7 = 18`, using formatted strings.

```python
    >>> print(f"{a} + {b} + {c} = {sum}")
    1 + 2 + 3 = 6
```

You can see how easy it turns out to be!

**Step 14: The PMT-Challenge Revisited**

We want to print the `5`-table from `5 * 1 = 5` onward, until we reach to `5 * 10 = 50`. The best solution we have right now, is shown below:

**Snippet-01:**

```python
    >>> index = 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 1 = 5
    >>> index = 2
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 2 = 10
    >>> index = 3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15
    >>> index = 4
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 4 = 20
```

Can we do something, to make sure that the code remains the same all the time, but the `index` value gets updated?

```python
    >>> index = index + 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 5 = 25
    >>> index = index + 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 6 = 30
    >>> index = index + 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 7 = 35
```

We used `index = index + 1` to increment `index` value.

If we execute these same two statements again and again, we can print the entire table! This is exactly what loops help us do: execute the same statements repeatedly.

The simplest loop available in Python is the **for loop**.

When we run a `for` loop, we need to specify the range of values - `1` to `10` or `1` to `20`, and so on. `range()` function helps us to specify a range of values.

```python
    >>> range(1,10)
    range(1, 10)
```

The syntax of the `for` loop is: `for i in range(1, 10): ...`. Here, `i` is the name of the **control variable**. In Python, you need to put a colon, '`:`', and in the next line give indentation.

```python
    >>> for i in range(1,10):
    ...   print(i)
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9
```

You would see that it prints from `1` to `9`.

When we run a loop in `range(1, 10)`, `1` is _inclusive_ and `10` is **exclusive**.The loop runs from `1` to the value before `10`, which is `9`.

The leading whitespace before `print(i)` is called **indentation**. We'll talk about indentation later, when we talk about puzzles related to the `for` loop.

How can you extend this concept to solving our _PMT-Challenge_ problem?

```python
    >>> print(f"{5} * {index} = {5*index}")
    5 * 7 = 35
```

What we were doing earlier, was calling `print()` with a formatted string. Now we want to print this statement for different values of `i`.

How can you do that?

Let's start with a simple example.

```python
    >>> for i in range(1,11):
    ...   print(f"{i}")
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
```

`print(f"{i}")` prints the value of i.

Now, how do we get it to print `5 * 1 = 5` to `5 * 10 = 50`?

```python
    >>> for i in range(1,11):
    ...   print(f"5 * {i} = {5 * i}")
    ...
    5 * 1 = 5
    5 * 2 = 10
    5 * 3 = 15
    5 * 4 = 20
    5 * 5 = 25
    5 * 6 = 30
    5 * 7 = 35
    5 * 8 = 40
    5 * 9 = 45
    5 * 10 = 50
    >>> 5 * 4 * 50
    1000
```

`print(f"5 * {i} = {5 * i}")` prints a specific multiple of 5.

**Step 15: Loops**

In a previous step, we took a major step in programming. We wrote our first for loop with Python. In this step, let's try a few puzzles to understand the for loop even further.

The syntax of the for loop we looked at earlier was:

```python
  for i in range(1, 10):
    print(i)
```

**Snippet-01:**

Let's say we write a `for` loop, but don't give a `:` after the `range()` method, to close the first line. What would happen?

```python
    >>> for i in range(1,10)
      File "<stdin>", line 1
        for i in range(1,10)
                           ^
        SyntaxError: invalid syntax
```

Invalid syntax. A `:` is mandatory within the `for` loop syntax.

Let's provide a `:` and in the next line, use `print(i)` without space before it \(without indentation\).

```python
    >>> for i in range(1,10):
    ... print(i)
      File "<stdin>", line 2
        print(i)
            ^
    IndentationError: expected an indented block
```

Most other programming languages use open brace `{` and closed brace `}` as delimiters in a `for` loop. However, Python uses indentation to identify which code is part of a `for` loop, and which is not. So if we are writing the body of a `for` loop, we must use indentation, and leave atleast a single `<SPACE>`.

```python
    >>> for i in range(1,10):
    ...   print(i)
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9
```

How do we execute two lines of code as part of the `for` loop?

```python
    >>> for i in range(1,10):
    ...  print(i)
    ...  print(2*i)
    ...
    1
    2
    2
    4
    3
    6
    4
    8
    5
    10
    6
    12
    7
    14
    8
    16
    9
    18
```

We are indenting both statements with a space - `print(i)` and `print(2*i)`.

When for loop has only one line of code, you can specify it right after the `:`

```python
    >>> for i in range(2,5): print(i)
    ...
    2
    3
    4
```

However, this is not considered to be a good programming practice. Even though you may want to execute just one statement in a `for` loop, indentation on a new line is recommended.

Another best practice is to use four `<SPACE>`s for indentation, instead of just two. This would give clear indentation of the code.

```python
    >>> for i in range(2,5):
    ...     print(i)
    ...
    2
    3
    4
```

Anybody who looks at the code immediately understands that this `print()` is part of the `for` loop.

Let's say you only want to print the odd numbers till `10`, which are `1`, `3`, `5`, `7` and `9`. The `range()` function offers an interesting option.

```python
    >>> for i in range (1,11,2):
    ...   print(i)
    ...
    1
    3
    5
    7
    9
```

In `for i in range(1, 11, 2)`, we pass in a third argument, called a _step_. After each iteration, the value of `i` is increment by `step`.

**Summary**

In this step, we:

-   Looked at a few puzzles about the `for` loop, which lay emphasis on the following aspects of for:
    -   The importance of syntax elements such as the colon
    -   Indentation
    -   Variations of the `range()` function

**Step 16: Programming Exercise PE-BA-02**

In the previous step, after initially exploring the Python `for` loop, we looked at a number of puzzles.

In this step, let's look at a few exercises.

**Exercises**

1. Print the even numbers up to 10. We would want to print 2 4 6 8 10, using a for loop.
2. Print the first 10 numbers in reverse
3. Print the first 10 even numbers in reverse
4. Print the squares of the first 10 numbers
5. Print the squares of the first 10 numbers, in reverse
6. Print the squares of the even numbers

**Solution 1**

Instead of starting with `1`, we need to start with `2`. Each time, `i` it would be incremented by `2`, and `2 4 6 8 and 10` would be printed.

```python
    >>> for i in range (2,11,2):
    ...   print(i)
    ...
    2
    4
    6
    8
    10
```

**Solution 2**

We would want to print the numbers in reverse. Think about how you would do that using the `range()` function. We'd want go from `10`, `9`, `8`, and so on up to `1`.

```python
    >>> for i in range (10,0,-1):
    ...   print(i)
    ...
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
```

The value to start with is `10`. As we discussed earlier, the end value is exclusive. So to print from `10` to `1`, we want to end one value which is `0`. `range(10, 0)` seems to be what we need.

Usually these step value is positive, but we need to go backwards from `10`. Hence, we would give a step value of `-1`.

**Solution 3**

Now, let's print the first `10` even numbers in reverse.

```python
    >>> for i in range (20,0,-2):
    ...   print(i)
    ...
    20
    18
    16
    14
    12
    10
    8
    6
    4
    2
```

**Solution 4**

Next, we would want to print the squares of the first 10 numbers.

```python
    >>> for i in range (1,11):
    ...     print(i * i)
    ...
    1
    4
    9
    16
    25
    36
    49
    64
    81
    100
```

**Solution 5**

Let's print the squares in the reverse order.

```python
    >>> for i in range (10,0,-1):
    ...     print(i*i)
    ...
    100
    81
    64
    49
    36
    25
    16
    9
    4
    1
```

**Solution 6**

Print the squares of the even numbers. How to do that?

```python
    >>> for i in range (10,0,-2):
    ...     print(i*i)
    ...
    100
    64
    36
    16
    4
```

The key part is using a step of `-2`

We leave it as an exercise for you, to print squares of odd numbers.

**Summary**

In this video, we: \* Tried out a few exercises involving the for loop, by playing around with printing sequences of numbers.

-   Used the for loop to simplify the solution to the _PMT-Challenge_ problem.

**Step 17: Review: The Basics Of Python**

It must have been a roller-coaster ride to solve the multiplication table challenge so far. If you're new to programming, there are a wide range of topics and concepts, that you would have learned during this small journey.

Let's quickly revise the important concepts we have learned during this small journey.

-   `1`, `11`, `5`, … are all called literals because these are constant values. Their values don't really change. \_Consider `` 5 _4_ 50`. This is an expression. `_`is an operator, and`5`, `4`and`50 `` are operands.
-   The name `i` in `i = 1`, is called a variable. It can refer to different values, at different points in time.
-   `range()` and `print()` are in-built Python functions.
-   Every complete line of code is called statement. The specific statement `print()`, is invoking a method. The other statement which we looked at earlier, was an assignment statement. `index = index + 1` would evaluate `index + 1`, and have the `index` variable refer to that value.
-   The syntax of the `for` loop was very simple. `for var in range(1, 10) : ...`, followed by statements you would want to execute in a loop, with indentation. For the sake of indentation we left four `<SPACE>`s in front of each statement inside the `for` loop.

So that, in a nutshell, is what we have learned over the course of our first section.

#### Chapter 03 - Introducing Methods

In the last section, we introduced you to the basics of python. We learned those concepts by applying them to solve the _PMT-Challenge_ problem. The code below is what we ended up with as we solved that chellenge.

**Snippet-01: Current Solution To PMT-Challenge**

```python
    >>> for i in range (1,11):
    ...   print(f"8 * {i} = {8 * i}")
```

If we wanted to change the code to print the `7` table, we need to change the value `7` used in the for loop, to `8`. It's simple, but still not as friendly as you would like.

```python
    >>> for i in range (1,11):
    ...   print(f"7 * {i} = {7 * i}")
```

To print a `7` table, it would be awesome if could say `print_multiplication_table`, and give a value of 7 beside it, and it would do the rest:

```python
    >>> print_multiplication_table(7)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'print_multiplication_table' is not defined
    >>> print_multiplication_table(8)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'print_multiplication_table' is not defined
```

Similarly, `print_multiplication_table(8)`, could print the multiplication table for `8`!

To be able to do this, we need to create a **method**, or a **function**. Creating a method makes the code _reusable_, and we can invoke that method very easily by passing _arguments_.

In this section, we take an in-depth look at methods.

**Step 01: Defining Your First Method**

Methods are very important building blocks in Python programming. In this step, we will create a simple method that prints `"Hello World"`, twice.

**Snippet-01:**

When we talk about a method, we need to give it a name. We are already using an in-built Python method here, which is `print()`.

```python
    >>> print("Hello World")
    Hello World
    >>> print("Hello World")
    Hello World
```

Similar to that, we need to give a name to our body of code. Let's say the name is `print_hello_world_twice`.

The syntax to create a method in Python is straightforward:

-   At the start, use the keyword `def` followed by a space.
-   Followed by name of the method - `print_hello_world_twice`.
-   Add a pair of parenthesis: `()`.
-   This is followed by a colon `:` \(similar to what we used in a `for` loop\).

 ```python
    >>> def print_hello_world_twice():
    ...     print("Hello World")
    ...     print("Hello World")
    ...
 ```

All statements in a method should be indented. The two `print("Hello World")` are indented. So, they are part of the method body.

`print_hello_world_twice()` defines a method, and it has certain code inside its body.

How do we call this method? Is it sufficient to say `print_hello_world_twice`?

```python
    >>> print_hello_world_twice
    <function print_hello_world_twice at 0x10a71ef28>
```

Python Shell says, there's a function defined with that specific name.

How do we execute a method? Very simple! Add a pair of parentheses to the name, `()`!

```python
    >>> print_hello_world_twice()
    Hello World
    Hello World
    >>> print_hello_world_twice()
    Hello World
    Hello World
```

Now, we are able to run the method.

**Summary**

In this step, we:

-   Learned we can define our own methods in the code we write
-   Understood how to define a method, and all its syntax elements
-   Saw how we can invoke a method we write

**Step 02: Programming Exercise PE-MD-01**

We will now leave you with two exercises, based on what we have learned about methods so far.

**Exercises**

1. Write a method called `print_hello_world_thrice()`. It should print `"Hello World"` thrice to the output. Define this method, and also invoke it.
2. Write and execute a method, that prints four statements:
    1. "I have created my first variable."
    2. "I've created in my first loop."
    3. "I've created my first method."
    4. "I am excited to learn Python." You need to print these four statements on four consecutive lines.

**Solutions**

**Solution 1**

```python
    >>> def print_hello_world_thrice():
    ...     print("Hello World")
    ...     print("Hello World")
    ...     print("Hello World")
    ...
    >>> print_hello_world_thrice()
    Hello World
    Hello World
    Hello World
```

**Solution 2**

```python
    >>> def print_your_progress():
    ...     print("Statement 1")
    ...     print("Statement 2")
    ...     print("Statement 3")
    ...     print("Statement 4")
    ...
    >>> print_your_progress()
    Statement 1
    Statement 2
    Statement 3
    Statement 4

    def print_your_progress():
        print("Statement 1")
        print("Statement 2")
        print("Statement 3")
        print("Statement 4")
```

For convenience, we have changed the exact text we need to print. Call this method with the syntax `print_your_progress()`, and you're able to execute its code.

Now try another exercise. We want to print `"Statement 1"`, `"Statement 2"`, `"Statement 3"` and `"Statement 4"` on different lines, using just one print statement. How can you do that?

```python
    >>> def print_your_progress():
    ...     print("Statement 1\nStatement 2\nStatement 3\nStatement 4")
    ...
    >>> print_your_progress()
    Statement 1
    Statement 2
    Statement 3
    Statement 4
```

We are using the newline character `\n`.

Let's look at the difference between defining and executing a method.

When we are writing a method definition, we are writing the code as part of its body. It has a specific syntax, and starts with the `def` keyword.

A definition by itself cannot cause the code in its body to be executed.

`print_your_progress()` represents a method call. The code inside the method is executed.

**Summary**

In this step, we:

-   Implemented solutions to a few exercises that test our understanding of Python methods. We touched concepts such as:
    -   Defining a method body
    -   The way to invoke a method, to run its code
    -   The difference between the two

**Step 03: Passing Parameters To Methods**

In the previous step,we created methods. We defined `print_hello_world_twice()`, and this printed `"Hello World"` twice. In this step, let's talk about _method arguments_, or _parameters_.

**Snippet-01:**

```python
    >>> print_hello_world_twice()
    Hello World
    Hello World
    >>> print_hello_world_thrice()
    Hello World
    Hello World
    Hello World
```

Earlier, we wrote code for `print_hello_world_thrice()`, which prints the message three times.

Let's say you want to print it five times. You would need to write another method that does what you need. Doesn't that seem monotonous?

Instead of that, Won't it be great if I can call the method by the same name, say `print_hello_world(5)`, and it would print "Hello World" five times?

The `5` which we are passing here is called an **argument**.

How do we define our method to accept this argument?

Let's call our argument `no_of_times`. If you have any experience with other programming languages, they generally need you to specify the parameter type. Something like `This parameter is an integer/float/string, or other types`. But Python does not require parameter type.

```python
    >>> def print_hello_world(no_of_times):
    ...    print("Hello World")
    ...    print(no_of_times)
    ...
```

Although we are not doing exactly what we set out to, let's see what would happen. What would happen if we say `print_hello_world()` ?

```python
    >>> print_hello_world()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: print_hello_world() missing 1 required positional argument: 'no_of_times'
```

Error! Something like "Hey, you have created `print_hello_world` with a parameter, but not passing anything in here! Go ahead and pass a value". Let's pass in a value, such as `5`.

```python
    >>> print_hello_world(5)
    Hello World
    5
    >>> print_hello_world(10)
    Hello World
    10
    >>> print_hello_world(100)
    Hello World
    100
```

With `print_hello_world(5)`, you can see `"Hello World"` and `5` being printed. We are now able to define this method to accept a value, and print that value by invoking it. You can pass in any value, such as`10`, `100`, or others.

Now think of a different solution for this method, where you don't repeat the same piece of code to print `"Hello World"`. Consider `print_hello_world(5)`, it should still print `"Hello World"` `5` times. How do you do that?

Think about using something along the lines of a loop.

**Snippet-02:**

For now, what we are doing is we are printing `"Hello World"` `10` times.

```python
    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,10):
    ...       print("Hello World")
    ...

    >>> print_hello_world(5)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
```

Our method call `print_hello_world(5)` now prints `"Hello World"` `10` times.

However just print the message `5` times. We need to make use of the parameter `no_of_times` inside the `for` loop as well.

```python
    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,no_of_times):
    ...       print("Hello World")
    ...

    >>> print_hello_world(5)
    Hello World
    Hello World
    Hello World
    Hello World
```

Now let's execute the method again. You can see that it's printing `4` times only.

Why is it not printing `5` times?

That's because `no_of_times` as a second parameter to `range()` is exclusive.

```python
    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,no_of_times+1):
    ...       print("Hello World")
    ...
    >>> print_hello_world(5)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
```

Great, it's now printing the message `5` times!

```python
    >>> print_hello_world(7)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
```

If you pass a different argument like `7`, the message is displayed `7` times.

Something you need to always be cautious about in Python, is the indentation. Over here, the `for` loop is part of the method body. So we have extra indentation for it. The print is part of the `for` loop body. So guess what, even more indentation for that code.

**Summary**

In this step, we:

-   Learned how to pass arguments to a method
-   Understood that the method definition needs to have parameters coded in
-   Observed that arguments passed during a method call can be accessed inside a methods body

**Step 04: Classroom Exercise CE-MD-01**

In this step, Let's look at a few exercises related to the method parameter.

**Exercises**

1. Write a method called `print_numbers()`, that would print all successive integers from `1` to `n`.
2. The second one is to write a method called `print_squares_of_numbers()`, that prints squares of all successive integers from `1` to `n`.

**Solutions**

**Solution 1**

```python
    >>> def print_numbers(n):
    ...    for i in range(1, n+1):
    ...       print(i)
    ...
    >>> print_numbers(5)
    1
    2
    3
    4
    5
    >>>
```

If you are programming in other languages such as Java, you are used to naming methods in this way: `printNumbers()`. This convention is popularly known as "Camel Case".

That's NOT how Python programmers name their methods. Pythonic way is to use underscore `_` to separate words in the method name, as in `print_numbers()`.

**Solution 2**

Let's define `print_squares_of_numbers()`. This would be very similar to `print_numbers()`, working with the same range. Only, we need to say `print(i*i)` .

```python
    >>> def print_squares_of_numbers(n):
    ...    for i in range(1, n+1):
    ...       print(i*i)
    ...
    >>> print_squares_of_numbers(5)
    1
    4
    9
    16
    25
```

How is a parameter different from an argument?

-   Inside the definition of the method, the name within parentheses is referred to as a **parameter**. In our recent exercise, `n` is a parameter, because it's used in the definition of `print_squares_of_numbers`.
-   When you are passing a value to a method during a method call, say `5`, that value is called an **argument**.
-   Don't worry too much about it. Just follow this convention for now:
    -   In the method call, call it an _argument_.
    -   In a method definition, call it a _parameter_.

**Summary**

In this step, we looked at a few simple exercises related to passing method arguments

**Step 05: Methods With Multiple Parameters**

In this step, let's look at creating a method with multiple parameters.

**Snippet-01:**

`print_hello_world` accepts one parameter and prints "Hello World" the specified number of times.

```python
    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,no_of_times+1):
    ...       print("Hello World")
    ...
```

Let's say we want to print another piece of text `Welcome To Python`, a specified number of times. How do you do that?

You can always create another method similar to the first one, such as `print_welcome_to_python(no_of_times)` and print the necessary text inside.

However, is that what a good programmer does?

A good programmer tries to create a more generic solution.

```python
    >>> def print_string(str, no_of_times):
    ...    for i in range(1,no_of_times+1):
    ...       print(str)
    ...
    >>> print_string("Hello World", 3)
    Hello World
    Hello World
    Hello World
```

The good programmer that you are, you created a new method called `print_string(str, no_of_times)` accepting a text parameter, in addition to `no_of_times`.

Syntax rules for method parameters are quite strict. If we say `print_string("Welcome to Python")` and run it, we get an error! Python Shell says: "I need `no_of_times` to be present in here".

```python
    >>> print_string("Welcome to Python")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: print_string() missing 1 required positional argument: 'no_of_times'
```

Let's say you want to assign default values for `str` and `no_of_times` in `print_string()`. By default, we want to always print `"Hello World"`, and that too `5` times.

The Python language makes this very easy. `def print_string(str = "Hello World", no_of_times=5)`. The rest of the method remains the same.

```python
    >>> def print_string(str="Hello World", no_of_times=5):
    ...    for i in range(1,no_of_times+1):
    ...       print(str)
    ...
```

Now you can call `print_string()`, and `"Hello World"` is displayed `5` times.

```python
    >>> print_string()
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
```

If it's `print_string("Welcome To Python")`, what does it do? It prints `"Welcome To Python"`, `5` times.

```python
    >>> print_string("Welcome to Python")
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
```

Consider `print_string("Welcome to Python", 8)`, it would print that string `8` times.

```python
    >>> print_string("Welcome to Python", 8)
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
    Welcome to Python
```

Isn't that cool!

**Summary**

In this step, we:

-   Looked at how to pass multiple parameters to a method, starting with two arguments
-   Learned how you can define default values for those parameters
-   Observed we could pass default arguments for none, some or all of those parameters

**Step 06: Back To Multiplication Table - Using Methods**

Let's get back to our original goal, of why we needed methods. We wanted to create a multiplication table for a number, and observed that each time we needed to we needed change that number, we were forced to make a change in the code. This is not something we liked, and that's why we started investigating how methods can be used.

In this step, Let's try our hand at creating a multiplication table method.

**Snippet-01:**

```python
    >>> for i in range (1,11):
    ...    print(f"7 * {i} = {7 * i}")
```

Let's define a method called `print_multiplication_table()`, and pass in a parameter to it.

```python
    >>> def print_multiplication_table(table):
    ...    for i in range(1,11):
    ...       print(f"{table} * {i} = {table * i}")
    ...
    >>> print_multiplication_table(7)
    7 * 1 = 7
    7 * 2 = 14
    7 * 3 = 21
    7 * 4 = 28
    7 * 5 = 35
    7 * 6 = 42
    7 * 7 = 49
    7 * 8 = 56
    7 * 9 = 63
    7 * 10 = 70
```

Now you have the entire multiplication table for `7`.

You can then call `print_multiplication_table()` with arguments `8`, `9`,and so on, by simply changing the `table` arguemnt value.

We now want to create even better `print_multiplication_table()` method.

We want to control the start point, as well as the end point, in the call to `range()`. We want to say `print_multiplication_table(7, 1, 6)`, to print the `7` table with entries from `1` to `6`. How can you do that?

```python
    >>> def print_multiplication_table(table, start, end):
    ...    for i in range(start, end+1):
    ...       print(f"{table} * {i} = {table * i}")
    ...
    >>> print_multiplication_table(7, 1 , 6)
    7 * 1 = 7
    7 * 2 = 14
    7 * 3 = 21
    7 * 4 = 28
    7 * 5 = 35
    7 * 6 = 42
```

Simple! Define those range limits as additional parameters!

The other thing we can obviously do, is have default values for the `start`, and the `end`.

```python
    >>> def print_multiplication_table(table, start=1, end=10):
    ...    for i in range(start, end+1):
    ...       print(f"{table} * {i} = {table * i}")
    ...

    >>> print_multiplication_table(7)
    7 * 1 = 7
    7 * 2 = 14
    7 * 3 = 21
    7 * 4 = 28
    7 * 5 = 35
    7 * 6 = 42
    7 * 7 = 49
    7 * 8 = 56
    7 * 9 = 63
    7 * 10 = 70
```

Calling `print_multiplication_table(7)` would give us entries from `7 * 1 = 7` to `7 * 10 = 70`.

Now you can actually send out this method, to your friends, who would find it easy to use, and cool!

**Summary**

In this step, we:

-   Learned how to define a method to print the multiplication table for a number
-   Looked at how to enhance this method to make table printing more flexible
-   Further enhanced that method to accept default arguments while printing a table

**Step 07: Indentation Is King**

In Python, indentation denote blocks of code. So if you want to put something in a `for` loop, or outside it, proper indentation would be sufficient. In this step, let's explore indentation in depth. Let's start by creating a simple method.

**Snippet-01:**

```python
    >>> def method_to_understand_indentation():
    ...     for i in range(1,11) :
    ...        print(i)
    ...
    >>> method_to_understand_indentation()
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
```

Consider the code below: `print(5)` is indented at the same level as `for loop`.

```python
    >>> def method_to_understand_indentation():
    ...     for i in range(1,11) :
    ...        print(i)
    ...     print(5)
    ...
```

You can see that `print(5)` is called only once. It is not part of the `for loop`.

```python
    >>> method_to_understand_indentation()
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    5
```

Let's change the code in this method a bit. `print(5)` is indented the same way as `print(i)`

```python
    >>> def method_to_understand_indentation():
    ...     for i in range(1,11) :
    ...        print(i)
    ...        print(5)
    ...
```

`print(5)` is part of the for loop. It is executed 10 times.

```python
    >>> method_to_understand_indentation()
    1
    5
    2
    5
    3
    5
    4
    5
    5
    5
    6
    5
    7
    5
    8
    5
    9
    5
    10
    5
```

Whether we're talking about loops, methods or conditionals, proper indentation is very important in Python.

We indicate a block of code, by having all lines of that block at the same indentation level. There are no specific delimiters like for instance a pair of braces `{...}`, as in other programming languages.

**Summary**

In this step, we:

-   Ran through a few examples to see how indentation works in Python

**Step 08: Puzzles on Methods - Named Parameters**

In this step, let's look at a variety of puzzles related to methods.

**Snippet-01:**

Consider the following method: I would want to print the default string 6 times. How do we do it?

```python
    >>> def print_string(str="Hello World", no_of_times=5):
    ...     for i in range(1,no_of_times+1):
    ...        print(str)
    ...
    >>> print_string()
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
```

Will it work if we call the method as in: `print_string(6)`?

```python
    >>> print_string(6)
    6
    6
    6
    6
    6
```

`6` is passed as the first parameter. `6` is matched to `str`, and the method prints `6` the default number of times, which is `5`.

to default to `"Hello World"`, and print it `6` times.

You can do this in Python by using **named parameters**. During the method call, you can specify `no_of_times = 6`. **`no_of_times`** is a named parameter.

> There is no provision of doing something like this, in other languages like Java.

Call it as `print_string(no_of_times=6)`:

```python
    >>> print_string(no_of_times=6)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
```

`str` gets a default value, and `"Hello World"` is printed `6` times.

Named parameters are very useful, when a method has a number of parameters, and you would want to make it very clear which parameter you're passing a value for.

Let's call `print_string(7, 8)`. what happens?

```python
    >>> print_string(7, 8)
    7
    7
    7
    7
    7
    7
    7
    7
```

You would see that `7` is printed `8` times.

Since `print()` method is quite flexible, you can pass a number as the first argument. You can even pass a `float`.

```python
    >>> print_string(7.5, 8)
    7.5
    7.5
    7.5
    7.5
    7.5
    7.5
    7.5
    7.5
```

What would be the result of this - `print_string(7.5, "eight")`?

```python
    >>> print_string(7.5, "eight")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
      File "<stdin>", line 2, in print_string
    TypeError: must be str, not int
```

Note how `no_of_times` is used inside the method… as an argument to `range()`. `range()` only accepts integers, nothing else. When you run the code with `print_string(7.5, "eight")`, we get an error.

It says: ` TypeError: ```no_of_times``` must be ```int```, not string `.

A simple rule of thumb is, if you have a parameter, you can pass any type of data to it. That could be an integer, a floating point value a string, or a boolean value. The Python language does not check for the type of a parameter. However, Python will throw an error if the function which is using that parameter, expects it to be of a specific type. The `range()` function expects that the `no_of_times` is an integer value.

**Snippet-02:**

The last thing which we would be looking at, is method naming conventions. We named our methods in a consistent way: `print_string`, `print_multiplication_table`, and the like.

This is exactly the format which most Python developers use, to name their methods.

Convention is to use underscore to separate words in a name.

However, there are a few rules for naming a method: One of the important rules is also related to variable names. We observed that a variable name cannot start with a number.

```python
    >>> def 1_print():
      File "<stdin>", line 1
        def 1_print():
             ^
    SyntaxError: invalid token
```

Similarly, `1_print` will not be accepted as a method name.

-   You can start a name with an alphabet, or with an underscore.
-   From the second character onward, you are allowed to use numeric symbols.

Methods and variables cannot be named using Python keywords.

Now, what is a keyword? For example, when we talked about `for` loop, as in:

```python
```for i in range(1, 11): print(i)```...
```

-   **`for`** is a keyword
-   **`in`** is a keyword
-   **`def`** is a keyword.

Later we will look at a few other keywords, such as **`while`**, **`return`**, **`if`**, **`else`**, **`elif`**, and many more.

```python
    >>> def def():
      File "<stdin>", line 1
        def def():
              ^
    SyntaxError: invalid syntax
    >>> def in():
      File "<stdin>", line 1
        def in():
             ^
    SyntaxError: invalid syntax
    >>> def for():
      File "<stdin>", line 1
        def for():
              ^
    SyntaxError: invalid syntax
```

**Summary**

In this step, we:

-   Were introduced to the concept of named parameters
-   Explored the typical naming rules and conventions for methods in Python
-   Observed that reserved keywords cannot be used to name variables or methods

**Step 09: Methods - Return Values**

Let's try and understand the importance of return values from a method. We will learn how to return a value from a method.

**Snippet-01:**

Let's name our method as `product_of_two_numbers()`, and let's have parameters `a` and `b` that it accepts:

```python
    >>> def product_of_two_numbers(a,b):
    ...     print(a * b)
    ...
    >>> product_of_two_numbers(1,2)
    2
```

Can we take the product of these two numbers into a variable, and use it in other code, in the same program?

Suppose we say a `product = product_of_two_numbers(1,2)`, is this allowed?

Let's run this code, and see what's stored in `product`.

```python
    >>> product = product_of_two_numbers(1,2)
    2
    >>> product
```

It's empty.

The `product_of_two_numbers()` method is not really returning anything back, to be used elsewhere.

Have a look at some of the built-in Python functions, such as `max()` for example.

```python
    >>> max(1,2,3)
    3
    >>> max(1,2,3,4)
    4
    >>> maximum = max(1,2,3,4)
    >>> maximum
    4
    >>> maximum * 5
    20
```

If I call `max()` with four parameters, as in `maximum = max(1,2,3,4)`, the value `4` gets stored in maximum.

Later on in the code that follows, we can say `maximum * 5`, or we can print the value of `maximum`, or a similar calculation. This gives our programs a lot more flexibility.

So instead of just printing `a*b`, if this function could return a value, that would be quite useful.

```python
    >>> def product_of_two_numbers(a,b):
    ...      product = a * b;
    ...      return product
    ...
    >>> product_of_two_numbers(2,3)
    6
```

We are creating a variable `product` and doing a `return product`.

Lets run `product_result = product_of_two_numbers(2, 3)`

```python
    >>> product_result = product_of_two_numbers(2,3)
    >>> product_result
    6
    >>> product_result * 10
    60
```

You can see how simple it is to return values from a method!

**Summary**

In this step, we:

-   Learned how to return values from inside a method
-   Observed how we can store the values returned by a method call

**Step 10: Programming Exercise PE-MD-02**

In this step let's look at a couple of exercises about returning values from methods.

**Exercises**

1. Write a method to return the sum of three integers.
2. Write a method which takes as input two integers, representing two angles of a triangle, and computes the third angle.

Hint: The sum of the angles in a triangle is `180` degrees. So if I am passing `50` and `50`, `50` plus `50` is `100`. So some of three angles should be `180`, so the third angle will be `180 - 100`, which is `80`.

**Solution 1**

```python
    >>>def sum_of_three_numbers(a, b, c):
    ...     sum = a + b + c
    ...     return sum
    ...

    >>> sum_of_three_numbers(1,2,3)
    6
    >>> something = sum_of_three_numbers(1,2,3)
    >>> something * 5
    30
```

The shorter way of doing that would have been to have a temporary variable called instead of `sum`. We could directly `return a + b + c`.

```python
    >>> def sum_of_three_numbers(a, b, c):
    ...     return a + b + c
    ...
    >>> something = sum_of_three_numbers(1,2,3)
    >>> something * 5
    30
```

In methods, you can use `return expression` as well. That `expression` gets evaluated, and the value gets returned back. You'd see that the result remains the same.

**Solution 2**

The second is to write a method to take two integers, representing two angles of a triangle, and compute the third one.

```python
    >>> def calculate_third_angle(first, second) :
    ...     return 180 - ( first + second )
    ...
    >>> calculate_third_angle(50, 20)
    110
```

In your programming career, you would be writing a number of methods. It's very important that you are comfortable doing so. Most of the methods that you write would return values back.

That's the reason why we're creating a lot of examples involving method calls.

**Summary**

In this step, we:

-   Looked at a couple of exercises related to returning values from methods
-   Observed that returning expressions avoids creating unnecessary variables, and shortens method definitions

#### Chapter 04 - Introduction To Python Platform

Until now we had been using Python Shell to execute all our code.

In the real world, we'll be write Python code in a variety of scripts. Before we would go into an IDE and use the IDE to write the script, we thought it would be useful for us to understand how you can write Python code without the benefit of an IDE.

This would also help us understand the Python environment, in-depth.

In the next few steps, we'll be looking at how to create simple Python scripts, using any text editor of your choice. Use Notepad, Notepad++. Editpad, or whichever text editing software you are comfortable with. We'll see what involved in executing the program, and what's happening in the background.

Here are a few videos you might want to look at.

-   [Writing and Executing your First Python Script](https://www.youtube.com/watch?v=ORmDD1R7lNc)
-   [Understanding Python Virtual Machine and bytecode](https://www.youtube.com/watch?v=HE-FC0csG68)

**Step 01 - Writing and Executing Python Shell Programs**

Here's a recommended video to watch - [Writing and Executing your First Python Script](https://www.youtube.com/watch?v=ORmDD1R7lNc)

Let's get started with creating a simple script file.

We want to type in a simple Python script, or a piece of Python code, such as `print("Hello world")`. Does it get any simpler than this?

We'll save this into any folder on our hard disk, with a name 'first.py' .

_**first.py**_

```python
print("Hello world")
```

The '.py' is not really mandatory, but typically all python files end with a '.py' extension.

Here's how you can run it:

-   Launch your terminal, or command prompt
-   'cd' to the folder where this python script file is saved
-   execute the command `python first.py`

You will see that `Hello World` will be printed.

If you are familiar with other programming languages, you would need a class, need to put the code in that class, and similar stuff.

While Python supports Object Oriented Programming, is not mandatory to create a class.

It's almost as if you're typing commands, starting from the line one! That's why we call it a python script.

**Summary**

In this small step, we tried to create a simple python script, and we ran it from the command line. All we needed to do, was use the same command we use to launch up the python shell, and followed it up with a name of the file. We created a file called first.py, executed that, and were able to see the output on the console.

As an exercise, try and add a few more methods and try to run those methods as well, as part of this script.

**Step 02 - Python virtual machine and bytecode**

In this step, let's try and understand what's happening in the background.

We wrote a simple piece of code using a text editor. We created a file named first.py, and all we did was: `python3 first.py`. If you look at other languages like Java for example, there is a separate compilation phase and then an execution phase. But with Python, just this command does both compilation and execution.

We saw that, as soon as we make a change and we run `python3 first.py` , the change is compiled and executed as well!

In Python, there is an intermediate format called **Python byte code**. Code is first compiled to bytecode, and then executed on the **Python virtual machine**.

When we installed Python, we installed both the python compiler and interpreter, as well as the virtual machine.

In Python, `bytecode` is not standardized. Different implementations of Python have different byte code. There are about 80 Python implementations, like CPython and Jython.

-   CPython is a Python implementation in C language.
-   Jython is a Python implementation in Java language. The bytecode which Jython uses is actually Java bytecode, and you can run it on the Java virtual machine.

Python leaves a lot of flexibility to the implementations of Python. They have the flexibility to choose the bytecode, and to choose the virtual machine that is compatible. The bytecode is tied to the specific virtual machine you are using. Therefore, if you're using CPython to compile the bytecode, you'll not be able to use Jython to run it.

You should make sure, that whatever implementation you are using to compile, is the same one you're using to run the code as well.

**Summary**

A lot of this sounds like boring theory. Don't worry about it. As a beginner, this might not be very important for you right now.

It's very important for you to understand the process. What's happening is you were writing Python code, and when you ran the command `python3 first.py`, it is both compiled and executed. An intermediate format called bytecode is created, which is not really standardized in Python. The bytecode is executed in a Python virtual machine.

The idea behind this quick section, is to give you a little bit of background on what's happening behind the scenes. I'll see you in the next section. Until then, bye-bye!

#### Chapter 05 - Introduction To VSCode

Let's start using the IDE VSCode to write our Python Code

Here are recommended videos to watch

-   [Installing VSCode](https://www.youtube.com/watch?v=pI_cnCXpCTU)
-   [Write and Execute a Python File with VSCode](https://www.youtube.com/watch?v=Na05tSP21Jg)
-   [Write Your First Python Program with VSCode](https://www.youtube.com/watch?v=PvYSlWbXuCw)

**Step 01 - Installing and Introduction to VSCode**

In this quick step, we'll help you install VSCode.

Here's the video guide for this step

-   [Installing VSCode](https://www.youtube.com/watch?v=pI_cnCXpCTU)

Go to Google and type in "VSCode Community Edition Download". Click the link which comes up first: [https://www.jetbrains.com/VSCode/download](https://www.jetbrains.com/VSCode/download).

You'll go to a page where you can choose the operating system: whether you are on Windows, Mac, or Linux.

Once you choose that, you can download the appropriate community version.

On the right hand side, you'll see a community version, and you can click the download link, to start the download.

If you are having a problem, you can also use the direct link to download.

Once you download VSCode, all you need to do is double-click the package which is downloaded. Follow the instructions, and you can continue with the defaults, until you completely install VSCode.

When you launch VSCode for the first time, it should ask you for a theme, where you can choose the default.

You're all set to go ahead with the next step in the course.

VSCode is an awesome IDE, and I'm sure you learn a lot about it.

**Step 02 - Write and Execute a Python File with VSCode**

In this step, let's launch up the VSCode IDE, and create our first Python project with a Python script. We want to be able to launch a Python script by the end of this step.

Here's the video guide for this step

-   [Write and Execute a Python File with VSCode](https://www.youtube.com/watch?v=Na05tSP21Jg)

Launch the VSCode IDE. You'll see that it takes a little while to launch the first time, and then brings up a welcome screen.

We would want to create a number of Python files. All these files will be in a project. You can think of our project as a collection of Python scripts, or modules.

To get started, let's create a new project by clicking 'create new project'. Let's name it - '01-first-python-project'.

Right now there are no files in the project.

Let's create our first Python file, using the IDE.

The way you can do that is by saying 'right-click' -&gt; 'new' -&gt; 'Python file', and then we'll give this a name of 'hello_world', and click OK.

Now you can go ahead and write your first Python program. Let's write some simple code, like `print("Hello World")`, and save it.

You can do a right-click here, and say 'Run hello_world'.

A small window comes up below, which shows the output. It says `'Hello World'`.

**Step 03 - Execise - Write Multiplication Table Method with VSCode**

Let's start with a simple exercise. We created the multiplication table method in the Python Shell. What we do now, is we'll create the same thing but in a Python file of its own.

Here's the video guide for this step:

-   [Write Your First Python Program with VSCode](https://www.youtube.com/watch?v=PvYSlWbXuCw)

#### Chapter 06 - Introducing Data Types and Conditionals

Welcome to this section, where we will talk about numeric data types, and conditional program execution. After looking at the numeric and boolean data types, we will turn our attention to executing code, based on logical conditions.

**Step 01: Numeric Data Types**

In previous sections, we created variables of this kind: `number = 5` , `value = 2.5`, etc. The `5` here is an integer, and integers represent numbers, such as `1`, `2`, `6`, `-1` and `-2`. In Python, the `class` for this particular data type is `int`.

If you write code like `type(5)`, you'd get `'int'` as the output.

In Python, there are no primitive types. What does that mean? Every value that you see in a Python program, is an object, an instance of some `class`.

In later sections, We'll understand what is a `class`, and what is an object or an instance. For now, the most important thing for you to remember, is that behind every value, there is a `class`.

**Snippet-01:**

Let's look at `2.5`, which is a floating point value.

If you go ahead and do `type(2.5)`, what would you see? You would see it's of type \``float`.

```python
    >>> type(2.5)
    <class 'float'>
    >>> type(2.55)
    <class 'float'>
```

When you perform a division operation between two integers, there is a chance that the result of the operation is a `float`. If you do `5/2`, the result is `2.5`. If we were to do `4/2`, even then it's of type `float`.

```python
    >>> type(5/2)
    <class 'float'>
    >>> type(4/2)
    <class 'float'>
    >>> 4/2
    2.0
    >>> 1 + 2
    3
```

All the operations we looked at until now, can also be performed on floating point values.

```python
    >>> value1 = 4.5
    >>> value2 = 3.2
    >>> value1 + value2
    7.7
    >>> value1 - value2
    1.2999999999999998
    >>> value1 / value2
    1.40625
    >>> value1 % value2
    1.2999999999999998
```

`value1 - value2` returns `1.299999999999998`. Why?

Floating point numbers don't really represent accurate values. That's one of the things you need to always keep in mind.

Typically, if you're doing any highly sensitive financial calculations, don't use `float`s to represent your values. Instead, use `Decimal`. More about it later.

Operations can also be performed between `int` and `float`.

```python
    >>> i + value1
    14.5
    >>> i - value1
    5.5
    >>> i / value1
    2.2222222222222223
    >>>
```

Result of an operation between a `int` and a `float`, is always a `float`.

**Summary**

In this step, we:

-   Looked at the two basic numeric types: `int` and `float`.
-   Saw the basic operations you can do among `int`s, among `float`s, and also between `int`s and `float`s.

**Step 02: Programming Exercise PE-DT-01**

In this step, let's do a simple exercise with numeric values.

**Exercises**

1. You need to create a method called `simple_interest`, and pass three parameters: `principal`, `interest` and `duration` \(in years\). You also want to calculate the amount after the specific duration, and return it back. Call this method with a few example values.

For example, if you want to call `simple_interest` with `10000`, with an interest of `5` percent, for a duration of `5` years, the correct answer would be as follows: `10000` is the principal. In addition to `10000`, you get the interest. The interest for one year is `10000 * 0.05`, as the interest figure is in percentage.So that's `500` a year, into `5` which is `2500`. The result would be `12500`, and this value should be printed.

**Solution 1**

```python
    def calculate_simple_interest(principal, interest, duration) :
            return principal * (1 + interest * 0.01 * duration)

    print(calculate_simple_interest(10000,5,5))
```

**Summary**

In this step, we:

-   Wrote a very simple method to do a simple interest calculation

**Step 03: Puzzles On Numeric Types**

In this section, we are looking at numeric types. In this specific step, we would be looking at a few puzzles related to values of these types.

**Snippet-01:**

Let's create a simple variable `i = 1`. `i = i + 1`. What would be the value of `i` after that?

```python
    >>> i = 1
    >>> i = i + 1
    >>> i
    2
```

It would be `2`. There is a shortcut way of doing the same thing, by using the `+=` operator.

```python
    >>> i += 1
    >>> i
    3
```

Typically in other programming languages, you can do something of this kind: `i++`. There is no provision in Python to use increment operators like `++`, in either prefix or suffix mode, like `++i`, or `i++`.

```python
    >>> i++
      File "<stdin>", line 1
        i++
          ^
    SyntaxError: invalid syntax
    >>> ++i
    3
```

Let's look at compound assignments.

```python
    >>> i += 1
    >>> i
    4
    >>> i -= 1
    >>> i
    3
    >>> i /= 1
    >>> i *= 2
    >>> i
    6.0
```

What you see here, is Dynamic Typing in Python. The type of a variable can change during the lifetime of the program.

```python
>>> i = 2
>>> type(i)
<type 'int'>
>>> i = i/2.0
>>> type(i)
<type 'float'>
```

Let's create a couple more numbers. `number1 = 5` and `number2 = 2`. What could be the result of `number1 / number2`? You know it, it's `2.5` .

`number1 // nummber2` truncates the value of `2.5`, to `2`.

```python
    >>> number1//number2
    2
```

If you can do `number1 // number2`, can you also do this: `number1 //= number2`?

```python
    >>> number1 //= 2
    >>> number1
    2
```

`5 ** 3` is `5` 'to the power of' `3`, which is `5 * 5 * 5`, or `125`.

```python
    >>> 5 ** 3
    125
    >>> pow(5,3)
    125
```

This can also be achieved by invoking `pow(5, 3)`. We have an operator, as well as a method at our disposal.

The last thing we will look at, are type conversion functions.

If you need to convert an `int` value to a `float`, or a `float` to an `int`.

```python
    >>> int(5.6)
    5
```

What if you want to round a value? `5.6` is nearer to `6` than `5`. You can use a function called `round()`, and here,`round(5.6)` gives the correct result `6`.

```python
    >>> round(5.6)
    6
    >>> round(5.4)
    5
    >>> round(5.5)
    6
```

`round()` can also allows you to specify number of decimals in the result.

```python
    >>> round(5.67, 1)
    5.7
    >>> round(5.678, 2)
    5.68
```

You can also convert `int` to `float`, by using the function `float()`.

```python
    >>> float(5)
    5.0
```

**Summary**

In this step, we:

-   Looked at a few corner cases related to your numeric types.
-   Examined the different operators available for use with values of numeric types
-   Learned about the usage of type conversion functions

**Step 04: Introducing Boolean Type**

We will now shift our attention to the `bool` data type.

A boolean value is something which can be either "true" or "false".

**Snippet-01:**

In Python, "true" is represented by `True`, and "false" by `False`. It's important to remember that it's `True` with a capital `'T'`, and `False` with a capital `'F'`.

```python
    >>> True
    True
    >>> False
    False
    >>> true
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'true' is not defined
    >>> false
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'false' is not defined
```

The boolean variable `is_even` indicates whether a number is even or not.

```python
    >>> is_even = True
    >>> is_odd = False
```

Let's create a variable `i = 10`. We want to find out if `i > 15`. What do you think is the result? `False`.

```python
    >>> i = 10
    >>> i > 15
    False
    >>> i < 15
    True
```

In general, boolean values can represent the result of logical conditions.

Let's look at other operations that can result in `bool` values. We looked at `>` and `<`. Another operation which you can perform, is `>=`.

```python
    >>> i >= 15
    False
    >>> i >= 10
    True
    >>> i > 10
    False
    >>> i <= 10
    True
    >>> i < 10
    False
```

`==` is the comparison operator. We are only comparing the value of `i` against `10`, not changing its value.

```python
    >>> i == 10
    True
    >>> i == 11
    False
```

**Summary**

In this step, we:

-   Were introduced to the `bool` data type
-   Learned that `bool` variables are useful handy while testing logical conditions

**Step 05: Introducing Conditionals**

In this step, let's look at `if` statement.

Sometimes you need to execute code only when certain conditions are true. You can use a `if` condition, which is the simplest conditional in Python. Let's look at an example.

**Snippet-01:**

Let's say `i` has a value of `5`. You want to print something, only if `i` has a value greater than `3`. How do you do that?

```python
    >>> i = 5
    >>> if i>3:
    ...     print(f"{i} is greater than 3")
    ...
    5 is greater than 3
```

The syntax of the `if` is very simple: `if` followed by a condition; with the condition you want to check. It looks like: `if i>3: ...` You need to indent the body of the `if` with `<SPACE>`s as usual.

Let's say `i` has a value of `2`. What would happen if we execute the same code again?

```python
    >>> i = 2
    >>> if i>3:
    ...     print(f"{i} is greater than 3")
    ...
```

You would see that nothing is printed to the console. Based on the value of `i` , either the statement is executed, or it's not. That's what an `if` helps us to do.

The way you can think about an `if`, is the body of code under the `if` is executed only when this condition is `True`. If this condition is not `True`, that code is not executed at all.

```python
    >>> if(False):
    ...   print("False")
    ...
    >>> if(True):
    ...   print("True")
    ...
    True
```

Let's take two different numbers, say `a = 5`, and `b = 7`. We want to compare them, and predict if `a` is greater that `b` .

```python
    >>> a = 5
    >>> b = 7
    >>> if(a>b):
    ...   print("a is greater than b")
    ...

    >>> a = 9
    >>> if(a>b):
    ...   print("a is greater than b")
    ...
    a is greater than b
```

**Summary**

In this step, we:

-   Were introduced to the `if` statement, the simplest Python conditional
-   Understood how an `if` helps in implementing conditional program logic

**Step 06: Classroom Exercise CE-DT-01**

In this step, let's look at a couple of exercises with the if statement.

**Snippet-01:**

Let's say we define four variables: `a = 1`, `b = 2` , `c = 3` and `d = 5`. we want to find out, if `a + b` is greater than `c + d`.

```python
    >>> a = 1
    >>> b = 2
    >>> c = 3
    >>> d = 5
    >>> if a+b > c+d :
    ...    print("a+b > c +d")
    ...
    >>> a = 9
    >>> if a+b > c+d :
    ...    print("a+b > c +d")
    ...
    a+b > c +d
```

Let's say we are given three values meant to be the angles of a triangle. Their values are `angle1 = 30`, `angle2 = 20` and `angle3 = 60`. You want to find out if these three angles actually form a valid triangle. You know that the sum of the angles of a triangle is always `180` degrees.

```python
    >>> angle1 = 30
    >>> angle2 = 20
    >>> angle3 = 60
    >>> if(angle1 + angle2 + angle3 == 180):
    ...      print("Valid Triangle")
    ...
    >>> angle2 = 90
    >>> if(angle1 + angle2 + angle3 == 180):
    ...      print("Valid Triangle")
    ...
    Valid Triangle
```

The last exercise is to check if a number is even or not.

Hint L you need to use one of the operators we talked about earlier. That's right, use the modulo operator `%`.

```python
    >>> i = 2
    >>> if(i%2==0):
    ...   print("i is even")
    ...
    i is even

    >>> i = 3
    >>> if(i%2==0):
    ...   print("i is even")
    ...
```

**Summary**

In this step, we:

-   Looked at a few exercises related to the if statement, for writing and testing conditions.

**Step 07 - Logical Operators - and or not**

In this step, let's look at the different operators that can be used on `bool` values. These operators are called logical operators - `and`, `or` , `not` and `^` \(xor\).

Let's say we have a value `True`, and the other `False`, and we want to play around with them.

Logical operator `and` returns true only when both operands are `True`.

```python
    >>> True and False
    False
    >>> True and True
    True
    >>> True and False
    False
    >>> False and True
    False
    >>> False and False
```

Logical operator `or` returns true when atleast one of the operands is `True`.

```python
    False
    >>> True or False
    True
    >>> False or True
    True
    >>> True or True
    True
    >>> False or False
```

Logical operator `not` returns negation.

```python
    False
    >>> not True
    False
    >>> not(True)
    False
    >>> not False
    True
    >>> not(False)
    True
```

The XOR operation, denoted by the `^` operator, is `True` when operands have different boolean values.

```python
    >>> True ^ True
    False
    >>> True ^ False
    True
    >>> False ^ True
    True
    >>> False ^ False
    False
```

**Summary**

In this step, we:

-   Looked at the logical operators that act on boolean values, such as `and`, `or`, `not` and `^`
-   Explored each of these operators, finding out when they return `True`, and when `False`.

**Step 08: Puzzles On Logical Operators**

In this step, Let's look at a few simple puzzles to look at the logical operators.

**Snippet-01:**

Let's say `i` has a value of `10`, and `j` has a value of `15`. You want to find out if both `i` and `j` are even. How do you do that?

```python
    >>> i = 10
    >>> j = 15
    >>> if i%2==0 and j%2==0:
    ...   print("i and j are even")
    ...
    >>> j = 14
    >>> if i%2==0 and j%2==0:
    ...   print("i and j are even")
    ...
    i and j are even

    >>> if i%2==0 or j%2==0:
    ...
      File "<stdin>", line 2
        ^
    IndentationError: expected an indented block
    >>> if i%2==0 or j%2==0:
    ...   print("atleast one of i and j are even")
    ...
    atleast one of i and j are even
```

If we want to find out if at least one of `i` and `j` is even, we can use the `or` operator.

```python
    >>> i = 15
    >>> j
    14
    >>> if i%2==0 or j%2==0:
    ...   print("atleast one of i and j are even")
    ...
    atleast one of i and j are even
    >>> j = 23
    >>> if i%2==0 or j%2==0:
    ...   print("atleast one of i and j are even")
    ...
    >>> i
    15
```

Now try and guess the value of this. `if(True ^ False): print("Message")`

```python
    >>> if(True ^ False):
    ...     print("This will Print")
    ...
    This will Print
    >>> if(False ^ True):
    ...     print("This will Print")
    ...
    This will Print
    >>> if(True ^ True):
    ...     print("This will Print")
    ...
```

Xor operation using `^` - message will get printed if the operands are different.

What would happen if both of them are `True`? No message is printed.

So you would use `^` in situations, where you'd want one of the operands to be `True`, and the other to be `False`.

Let's say, `x = 5`, and you want to check `if not x == 6: print("This")`. What will be the result of running this code?

```python
    >>> x = 5
    >>> if not x == 6:
    ...   print("This")
    ...
    This
    >>> x = 6
    >>> if not x == 6:
    ...   print("This")
    ...
```

Actually, there is a shortcut for such a condition: `if x != 6 : print("This")`.

```python
    >>> if x!=6:
    ...   print("This")
    ...
    >>> x=5
    >>> if x!=6:
    ...   print("This")
    ...
    This
```

`int()` is a conversion function, which when given say a `float` value, returns an `int` value. Consider `int(True)`, what would happen?

```python
    >>> int(True)
    1
    >>> int(False)
    0
```

`int(True)` returns 1. `int(False)` returns 0.

```python
    >>> x = -6
    >>> if x:
    ...   print("something")
    ...
    something
```

One of the most interesting facts about boolean stuff, is anything which is non-zero, is considered to be `True`.

`0` is the only integer value which is considered to be `False`.

```python
    >>> bool(6)
    True
    >>> bool(-6)
    True
    >>> bool(0)
    False
    >>>
```

So, if I have a value of `x = -6`, and execute `if x: print("something")` what do you think will happen?

`"something"` will be printed.

You can use the function `bool()`, to convert `int` to a `bool` value.

-   `bool(6)` returns `True`
-   `bool(-6)` returns `True`
-   `bool(0)` returns `False`.

Except for `bool(0)`, all the other results would be `True`.

**Summary**

In this step, we:

-   Looked at a few puzzles related to the logical operators
-   Looked at conversion functions such as `bool()` and `int()` to convert between boolean and integer data

**Step 09:**

In this step, let's look at two other important components of an `if` statement: `else` and `elif`. Let's start with `else`.

**Snippet-01:**

Consider a scenario where `i` has a value of `2`. Let's try to print a message `"i is even"` if `i` is an even number. Otherwise, print `"i is odd"`.

Earlier we wrote code along these lines: `if i % 2 == 0 : print("i is even")`. However if this condition is not `True`, we would want to `print("i is odd")`. How do we accomplish that?

```python
    >>> i = 2
    >>> if i%2 == 0:
    ...   print("i is even");
    ... else:
    ...   print("i is odd");
    ...
    i is even
```

An `else` clause provides an alternative code body to execute, if the `if` condition is `False`.

```python
    >>> i = 3
    >>> if i%2 == 0:
    ...   print("i is even");
    ... else:
    ...   print("i is odd");
    ...
    i is odd
```

Let's look at `elif`.

We want to do something if `i` has value of `3`, and something totally different if `i` has a value of `4`.

In short, we want to specify 2 alternatives to the `if` condition. How can that be done?

```python
    >>> if i==1:
    ...   print("i is 1")
    ... elif i==2:
    ...   print("i is 2")
    ... else:
    ...   print("i is not 1 or 2")
    ...
    i is not 1 or 2
    >>>
```

That's where the **`elif`** clause comes into the picture. The code in `elif` is executed if the previous conditions are false and the current `elif` condition is true.

**Summary**

In this step, we:

-   Looked at two important components of the `if` statement: `else` and `elif`.
-   Understood that the `elif` clauses and the final `else` clause provide alternative conditions to check, when earlier if conditions are true.

**Step 10: Classroom Exercise CE-DT-02**

In this step, let's do a simple exercise with `if`, `else` and `elif`.

Before getting to the exercise, let's try and learn how to get console input from the user.

Until now, we had been hard-coding all the data we were to use. Let's make that part more dynamic now.

**Snippet-01:**

How do we get input from the user? We want to get input from the console, and assign it to a variable. The way we can do that, is by statement `value = input()`

```python
    value = input("Enter a Value: ")
    print("you entered ", value)
```

We can call the `input()` method with a text 'prompt', such as `"Enter A Value: "`. What we can initially do here, is print the value which was entered, back to the console, by `print("you entered ", integer_value)`.

An interesting point to explore here, is the type of data input at the console.

Let's do a `print(type(value))`.

```python
    value = input("Enter a Value: ")
    print("you entered ", value)
    print(type(value))
```

Input a value of `Test`. It has a class of `str`.

Let's run it again to see other possibilities. This time, let's enter a numeric value, say `12`. what would happen?

We again get `str`.

We want to get an integer value from the input. How can we do it?

`int()` function converts string to int. Let's use it.

```python
value = input("Enter a Value: ")
integer_value = int(value)
print("you entered ", integer_value)
print(type(integer_value))
```

Let's run our code once again.

`"Enter A Value: "` is prompted, and we enter `15`. And now, of it says `"You entered 15"`, and the type it indicates to us, is `int`.

**Design a menu**

-   Ask the User for input:
    -   Enter two numbers
    -   Choose the Option:
        -   1 - Add
        -   2 - Subtract
        -   3 - Multiply
        -   4 - Divide
-   Perform the Operation
-   Publish the Result

Let's design a menu, and then ask the user for input.

We have codes for each of the operations : add is `1`, subtract is `2`, divide is `3`, and multiply is `4`.

In the first version of the program let's get all the inputs and print them out.

**Solution**

The first version of the program is simple to write

```python
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))
print(f"You entered {number1}")
print(f"You entered {number2}")
print(number1 + number2)
print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")
print("5 - Exit")
choice = int(input("Choose Operation: "))
print(choice)
```

We will continue this exercise to complete it, in the next step.

**Summary**

In this step, we:

-   Looked at the in-built `input()` function that can read console input
-   Learned that `input()` always returns what the user enters, as a string
-   We can convert the string from `input()`, to the data type we expect by invoking conversion functions

**Step 11: Continued - Classroom Exercise CE-DT-02**

**Exercises**

In the previous step, we got the input from the user. Let's continue the exercise in this step. We want to write an if condition.

**Solution \(Continued\)**

Extending the solution is easy. Write appropriate `if`, `elif` and `else` conditions.

```python
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))

print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")

choice = int(input("Choose Operation: "))

# print(number1 + number2)
# print(choice)
if choice==1:
    result = number1 + number2
elif choice==2:
    result = number1 - number2
elif choice==3:
    result = number1 / number2
elif choice==4:
    result = number1 * number2
else:
    result = "Invalid Choice"

print(result)
```

We added the following code to account for invalid input.

```python
else:
    result = "Invalid Choice"
```

**Summary**

In this step, we:

-   Augmented the Menu Exercise to get all the input from the console, and compute a value from them
-   Corrected the logic to handle incorrect input

**Step 12: Puzzles On Conditionals**

In this step, let's look at a few puzzles related to these `if`, `elif` and `else` clauses.

**Puzzle-01**

Let's start with the first puzzle. Guess the output.

```python
k = 15
if (k > 20):
  print(1)
elif (k > 10):
  print(2)
elif (k < 20):
  print(3)
else:
  print(4)
```

When we run it, you can see that the output is `2`.

`k` has a value of `15`, is it greater than `20`? No! Execution goes to the `elif`, is `k` greater then `10`? Yes. It prints `2` and goes out of the complete `if`-`else` block.

Inside the `if` conditional, the `if`, `elif` and `else` clauses are all independent ones. Only one matching block is ever executed.

**Puzzle-02**

What do you think would be the output of this particular piece of code?

```python
l = 15
    if (l < 20):
        print("l<20")
if (l > 20):
    print("l>20")
else:
    print("Who am I?")
```

Note that there are two totally different `if` conditions in here : `if l < 20: ...` immediately followed by`if l > 20: ... else: ...`.

The first `if` is true. `l<20` is printed.

The second `if` is a separate statement. The condition is false. So. `else` gets executed. Therefore, `"who am I"` gets printed.

**Puzzle-03**

Let's run this code.

```python
m = 15
if m>20:
    if m<20:
        print("m>20")
    else:
        print("Who am I?")
```

You can see that nothing is printed.

The most important thing to focus on here, is indentation.

The second `if` block is executed only if the first `if` is true.

**Puzzle-04**

What would be the output?

```python
number = 5
if number < 0:
  number = number + 10
number = number + 5
print(number)
```

`10` is printed.

The most important thing to focus on here, is indentation.

Only `number = number + 10` is part of `if` block. It is not executed because the condition is false.

`number = number + 5` is not part of `if`. So, it gets executed.

Let's add a couple of spaces before `number = number + 5`.

What would be the output?

```python
number = 5
if number < 0:
  number = number + 10
  number = number + 5
print(number)
```

`5` is printed.

Both the statements `number = number + 10` and `number = number + 5` are part of `if` block. They are not executed because the condition is false.

**Summary**

In this step, we:

-   Looked at a few puzzles related to `if`, `elif` and `else`
-   Explored the importance of indentation and the different condition clauses inside an `if` statement

**Step 01: The Python Type To Denote Text**

Let's start looking at another important data type in Python, that's used to represent strings. Not surprisingly, it is in fact named `str`!

Let's look at valid string representations.

```python
    >>> message = "Hello World"
    >>> message = 'Hello World'
    >>> message = 'Hello World"
      File "<stdin>", line 1
        message = 'Hello World"                          ^
     SyntaxError: EOL while scanning string literal
```

In Python, you can use either \`\`\``or`""\` to delimit string values.

`type()` method can be used to find type of a variable.

```python
    >>> message = "Hello World"
    >>> type(message)
    <class 'str'>
```

The `str` `class` provides a lot of utility methods.

```python
    >>> message.upper()
    'HELLO WORLD'
    >>> message.lower()
    'hello world'
    >>> message = "hello"
```

`message.capitalize()` does init caps. Only first character is changed to uppercase.

```python
    >>> "hello".capitalize()
    'Hello'
    >>> 'hello'.capitalize()
    'Hello'
```

You can also run this directly - `'hello'.capitalize()`. Isn't that cool!

That's because each piece of text in python is an object of the `str` `class`, and we can directly call methods of that `class` on `str` objects.

Now let's shift our attention to methods, which gives us more information about the specific contents of a string.

-   We want to find out if this string contains numeric values?
-   Does it contain alphabets only?
-   Does it contain alpha-numeric values?
-   Is it lowercase?
-   Is it uppercase?

To find if a piece of text contains only lower case alphabets.

```python
    >>> 'hello'.islower()
    True
    >>> 'Hello'.islower()
    False
```

If the first letter is in uppercase, then `istitle()` will return a `True` value.

```python
    >>> 'Hello'.istitle()
    True
    >>> 'hello'.istitle()
    False
```

To find if a piece of text contains only upper case alphabets.

```python
    >>> 'hello'.isupper()
    False
    >>> 'Hello'.isupper()
    False
    >>> 'HELLO'.isupper()
    True
```

`isdigit()` checks if a string is a numeric value.

```python
    >>> '123'.isdigit()
    True
    >>> 'A23'.isdigit()
    False
    >>> '2 3'.isdigit()
    False
    >>> '23'.isdigit()
    True
```

`isalpha()` checks if a string only contains alphabets.

```python
    >>> '23'.isalpha()
    False
    >>> '2A'.isalpha()
    False
    >>> 'ABC'.isalpha()
    True
```

`isalnum()` checks if a string only contains alphabets and/or numerals.

```python
    >>> 'ABC123'.isalnum()
    True
    >>> 'ABC 123'.isalnum()
    False
```

Lastly, we look at things which you can use, to check characters of a string.

`endswith` is self explanatory.

```python
    >>> 'Hello World'.endswith('World')
    True
    >>> 'Hello World'.endswith('ld')
    True
    >>> 'Hello World'.endswith('old')
    False
    >>> 'Hello World'.endswith('Wo')
    False
```

`startswith` is self explanatory as well.

```python
    >>> 'Hello World'.startswith('Wo')
    False
    >>> 'Hello World'.startswith('He')
    True
    >>> 'Hello World'.startswith('Hell0')
    False
    >>> 'Hello World'.startswith('Hello')
    True
```

`find` method returns if a piece of text is present in another string. Returns the first match index.

```python
    >>> 'Hello World'.find('Hello')
    0
    >>> 'Hello World'.find('ello')
    1
```

A value of `-1` is returned, if you're searching for something which is not present in the string.

If you are searching for `'Ello'` with a capital `'E'` ,you'll not be able to find it. Search is case sensitive.

```python
    >>> 'Hello World'.find('Ello')
    -1
    >>> 'Hello World'.find('bello')
    -1
    >>> 'Hello World'.find('Ello')
    -1
```

**Step 02: Type Conversion Puzzles**

We'll now try and convert values from one type to another, and try and play around with them.

`str` converts boolean value to a text value.

```python
    >>> str(True)
    'True'
```

All text value except for empty string represent True. So, `bool` returns True for everything except empty string.

```python
    >>> bool('True')
    True
    >>> bool('true')
    True
    >>> bool('tru')
    True
    >>> bool('false')
    True
    >>> bool('False')
    True
    >>> bool('')
    False
```

Let's try and convert a few integer values to strings.

```python
    >>>str(123)
    '123'
    >>> str(12345)
    '12345'
    >>> str(12345.45678)
    '12345.45678'
```

Let's do the reverse.

```python
    >>> int('45')
    45
    >>> int('45.56')
    ValueError: invalid literal for int()
```

if we do `int('45.56')`, you can see that it throws an error. It says "I cannot convert this to an `int`, as `45.56` is an invalid integer".

You can also pass an additional parameter to `int` indicating the numeric system - 16 for Hexa decimal, 8 for Octal etc. Default is 10 - Decimal.

```python
    >>> int('45abc',16)
    285372
    >>> int('a',16)
    10
    >>> int('b',16)
    11
    >>> int('c',16)
    12
    >>> int('f',16)
    15
    >>> int('g',16)
    ValueError: invalid literal for int() with base 16: 'g'
```

You can also convert string to float.

```python
    >>> float("34.43")
    34.43
    >>> float("34.43rer")
    ValueError: could not convert string to float: '34.43rer'
```

**Summary**

In this quick step, we looked at converting different types to strings, and converting strings to different types. So we looked at `int`, `bool` and `float` values, and we looked at how to convert them to string, and how to convert strings back to these specific types.

**Step 02: Strings Are Immutable**

In this step, let's learn an important fact about strings in Python.

String values are immutable.

What does immutability mean, and why do we say strings are immutable?

Let's create a very simple string: `message = 'Hello'`, and we're saying `message.upper()`. But what does it do? It prints `'HELLO'`, with all characters in uppercase. Well, what would happen if you do `print(message)`? It says `'Hello'`.

```python
    >>> message = "Hello"
    >>> message.upper()
    'HELLO'
    >>> message
    'Hello'
```

You would see we tried change the content of message, but it has not changed.

When we execute `message.upper()`, a new string is created, and it is returned back. Original string remained unchanged. This is called immutability.

Once you define a string in Python, you'll not be able to change the value of it.

You can use - "OK. I can do something of this kind: `message = message.upper()`".

What would happen now?

Will the value of `message` get changed? It prints `'HELLO'`, with all caps.

Did the value of `message` change? Does this prove that strings are mutable?

The important thing you need to understand about all this stuff, is how objects are stored inside Python.

There are things called variables, and there are things called objects.

When we run `message = 'Hello'`

-   We are creating one object of `str` class with a values `'Hello'`.
-   We are creating one variable called `message`
-   The location of `'Hello'` is stored into `message`

In Python, your variables are nothing but a name.

If location of `'Hello'` in memory is `A`, then the value stored in `message` is `A`. `message` is called a reference.

What happens with `message = message.upper()`?

A new object is created with value `'HELLO'` at a different location `B`.

A reference ot location `B` is stored into `message` variable.

Summary : The original value at location `A` has not changed and cannot be changed for `str` variables. Hence 'str' objects are immutable.

Variables are just names referring to a location. They don't really contain the value. Variables contain a reference to the location that contains the object.

**Step 03: Python Has No Separate Character Type**

One of the things that surprises people new to Python, is that there is no character data type in Python.

Typically we have text data types in all the languages, don't we? `'Hello World'` for example, is text data, and we stored it in `message`. This is called a string.

In other languages, you would have something to represent a single character symbol. For example in Java, you can have a `char` data type, to store a single character `ch`, in which `'h'` is one character. But in Python, there is no separate data type to store single characters.

For example, let's see how Python treats the first character of the following string `message`. The way you can access the first character of a string is by saying `message[0]`.

```python
    >>> message = "Hello World"
    >>> message[0]
    'H'
    >>> type(message[0])
    <class 'str'>
    >>> type(message)
    <class 'str'>
```

`type(message[0])` and `type(message)` print the same type `str`. No difference.

In Python, whether you're talking about a string, or you're talking about a single character symbol, they are all represented by the same `class`, `str`.

`message[100]` throws an `IndexError`.

```python
    >>> message[0]
    'H'
    >>> message[1]
    'e'
    >>> message[2]
    'l'
    >>> message[3]
    'l'
    >>> message[100]
    IndexError: string index out of range
```

It says: "The given index is out of the range of the value of that specific string".

Let's say we would want to print all the characters in this string.

The way you could do that, is by saying: `for ch in message: print(ch)`.

**Summary**

In this short step, we looked at the fact that there is no separate character class, or data type in Python. We also looked at how do we loop over a given string, and print all the characters present inside this string.

**Step 04: The string module**

In this step, we will introduce you to the `string` `module`.

If we would want to use anything from a module in Python, you need to import that specific `module` into your program.

```python
    >>> import string
```

If you do a `string.` and press , it would show the different things which are part of the `string` `module`.

```python
    >>> string.
    string.Formatter(       string.ascii_uppercase  string.octdigits
    string.Template(        string.capwords(        string.printable
    string.ascii_letters    string.digits           string.punctuation
    string.ascii_lowercase  string.hexdigits        string.whitespace
```

Let's explore some of these.

```python
    >>> string.ascii_letters
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    >>> string.ascii_lowercase
    'abcdefghijklmnopqrstuvwxyz'
    >>> string.ascii_uppercase
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    >>> string.digits
    '0123456789'
    >>> string.hexdigits
    '0123456789abcdefABCDEF'
    >>> string.punctuation
    '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    >>> string.ascii_letters
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
```

You have a set of printable characters, punctuation characters and a lot more.

You can check a text value against any of these

```python
    >>> 'a' in string.ascii_letters
    True
    >>> 'ab' in string.ascii_letters
    True
    >>> 'abc' in string.ascii_letters
    True
```

`in` operation on a string, checks if a given string.

```python
    >>> '1' in '13579'
    True
    >>> '2' in '13579'
    False
    >>> '4' in '13579'
    False
```

**Summary**

In this step, we explored more exercises involving the `str` module of Python.

**Step 05: More Exercises With The str Module**

Let's start with an Exercise - find if a specific character is a vowel or not.

```python
    >>> char = 'a'
    >>> vowel_string = 'aeiouAEIOU'
    >>> char in vowel_string
    True
    >>> char = 'b'
    >>> char in vowel_string
    False
```

he other thing you can do, is just have the capital vowels, or just the lowercase versions.

```python
    >>> vowel_string = 'AEIOU'
    >>> char.upper() in vowel_string
    False
    >>> char = 'a'
    >>> char.upper() in vowel_string
    True
```

Now let's move on to the next one.

We want to find out and print all the capital alphabets, from `A` to `Z`.

There was a small clue at the start of the previous step, regarding importing the `string` `module`. We did the `string` `module`, and we saw that `string` `module` contained a number of things.

```python
    >>> string.ascii_uppercase
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    >>> for char in string.ascii_uppercase:
    ...   print(char)
    ...
    A
    B
    C
    D
    E
    F
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    Q
    R
    S
    T
    U
    V
    W
    X
    Y
    Z
```

Try another easy exercise: print all the lower characters. Instead of `string.ascii_uppercase`, you have `string.ascii_lowercase`.

```python
    >>> for char in string.ascii_lowercase:
    ...   print(char)
    ...
    a
    b
    c
    d
    e
    f
    g
    h
    i
    j
    k
    l
    m
    n
    o
    p
    q
    r
    s
    t
    u
    v
    w
    x
    y
    z
```

An even easier exercise, would be to print all the digits.

```python
    >>> for char in string.
    string.Formatter(       string.ascii_uppercase  string.octdigits
    string.Template(        string.capwords(        string.printable
    string.ascii_letters    string.digits           string.punctuation
    string.ascii_lowercase  string.hexdigits        string.whitespace
    >>> for char in string.digits:
    ...   print(char)
    ...
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    >>>
```

The last exercise which we want to leave you with, is to check if something is a consonant.

A consonant is an alphabet which is not a vowel, so any alphabet which is not in `'aeiou'` is a consonant. The simplest way of doing this is to say `consonant_string = 'bcdfghj...'` and so on. Looks like a very long solution? There is an easier way out.

```python
    >>> vowel_string = 'aeiou'
    >>> char = 'b'
    >>> char.isalpha() and char.lower() not in vowel_string
    True
```

**Step 06: More Exercises On Strings**

In the step, let's look at a few more puzzles and exercises related to strings. Let's say we have a simple string, `string_example`, and this is contains an English sentence. `'This is a great thing.'`

Let's try to to print each of the words present in this string, on a separate line.

So we would want to print `'This'`, `'is'`, `'a'`, `'great'` and `'thing'` on individual lines.

One of the clues we'll give you is, try and do `string_example. <TAB>`. There are a huge list of methods, which would come up if you do that.

```python
    >>> string_example = "This is a great thing"
    >>> string_example.
    string_example.capitalize(    string_example.join(
    string_example.casefold(      string_example.ljust(
    string_example.center(        string_example.lower(
    string_example.count(         string_example.lstrip(
    string_example.encode(        string_example.maketrans(
    string_example.endswith(      string_example.partition(
    string_example.expandtabs(    string_example.replace(
    string_example.find(          string_example.rfind(
    string_example.format(        string_example.rindex(
    string_example.format_map(    string_example.rjust(
    string_example.index(         string_example.rpartition(
    string_example.isalnum(       string_example.rsplit(
    string_example.isalpha(       string_example.rstrip(
    string_example.isdecimal(     string_example.split(
    string_example.isdigit(       string_example.splitlines(
    string_example.isidentifier(  string_example.startswith(
    string_example.islower(       string_example.strip(
    string_example.isnumeric(     string_example.swapcase(
    string_example.isprintable(   string_example.title(
    string_example.isspace(       string_example.translate(
    string_example.istitle(       string_example.upper(
    string_example.isupper(       string_example.zfill(
```

One of the methods in the list is the `split()` method.

```python
    >>> string_example.split()
    ['This', 'is', 'a', 'great', 'thing']
    >>> for word in string_example.split():
    ...    print(word)
    ...
    This
    is
    a
    great
    thing
```

`split_lines()` method looks for a `'\n'`, and it divides the string based on it. If you have a string which contains newlines, and you would want to divide it into a number of strings with each line as a new element, the method you can use is `split_lines()`.

```python
    >>> string_example = "This\nis\n\ngreat\nthing"
    >>> print(string_example)
    This
    is

    great
    thing
    >>> string_example = "This\nis\na\ngreat\nthing"
    >>> print(string_example)
    This
    is
    a
    great
    thing
    >>> string_example.splitlines()
    ['This', 'is', 'a', 'great', 'thing']
    >>>
```

The last thing which we look at, is **concatenation operator**.

```python
    >>> 1 + 2
    3
    >>> "1" + "2"
    '12'
    >>> "1" + 1
    TypeError: must be str, not int
    >>> "ABC" + "DEF"
    'ABCDEF'
```

In Python, you cannot do `+` operator between two different types. `+` with two strings is concatenation. `+` with two numbers is addition.

One other interesting operator on strings is multiplication. If you do a `'1' * 20`, What do you think will be the output?

```python
    >>> 1 * 20
    20
    >>> '1' * 20
    '11111111111111111111'
    >>> 'A' * 10
    'AAAAAAAAAA'
```

If you multiply a string with `number`, the string value is concatenated `number` times.

The last thing which we look at in this step, is comparing strings.

Let's say we have a string with a value `str = 'test'`, and you have another string to with a value `str1 = 'test1'`.

We want to check whether both these strings are the same.

```python
    >>> str = "test"
    >>> str2 = "test1"
    >>> str == str2
    False
    >>> str2 = "test"
    >>> str == str2
    True
```

You can compare strings using the `==` operator.

**Summary**

In this step, we explored a few exercises on strings, covering areas such as:

-   Splitting a given sentence into individual words
-   The concatenation operator, `+`
-   The string multiplication pattern, `*`
-   The use of the `==` operator to compare strings

#### Chapter 07 - Introducing Loops

Welcome to the section on Loops. In this section, we will look at a variety of loops that are available in Python. We will look mainly at the **`for`** loop, and the **`while`** loop.

**Step 01: Revisited: The for Loop**

Let's start with revising the basics of the for loop, we have learned in the previous steps.

We saw that a `for` loop helps us to loop around the same set of code statements, many times over.

Let's look at a few simple examples, once again.

**Snippet-01**

The syntax of a `for` loop is very simple.

For example, this code snippet will tell you all about it: `for i in range(1, 11): print(i)`.

What does this do? Very simple, it prints from `1` to `10`.

In the call to the `range()` function, the second parameter is exclusive. We are actually looping from `1` to `10`, and this piece of code, `print(i)`, is being executed for different values of `i`.

```python
    >>> for i in range(1,11):
    ...   print(i)
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
```

`for` loop can also be used to loop round the characters in a string.

```python
    >>> for ch in "Hello World":
    ...   print(ch)
    ...
    H
    e
    l
    l
    o
    W
    o
    r
    l
    d
```

`for` loop can be used to loop around all the words in a given sentence.

```python
    >>> for word in "Hello World".split():
    ...   print(word)
    ...
    Hello
    World
```

`for` loop can be used to loop around a specific list of values.

```python
    >>> for item in (3, 6, 9):
    ...   print(item)
    ...
    3
    6
    9
```

**Summary**

In this step, we started with discussing and revising basic concepts about the `for` loop

**Step 02: Programming Exercise PE-LO-01**

Welcome back to this step, where we would do a lot of exercises with the `for` loop.

**Exercises**

1. The first exercise is to find out if a number is prime. We want to write a method, `is_prime()`, which accepts an integer value as parameter, and returns whether it's a prime. \(**Hint**: A prime number is something which is only divisible by `1` and itself\).
    1. `5` is only divisible by `1` and `5`. It is not divisible by any other number. Same is the case with `7` and `11`.
    2. However, `6` is divisible by `1`, `2`, `3` and `6`. So it's not a prime number.
2. The second exercise is to write a method to calculate the sum up to a given integer, starting from `1`. **Hint**: If I would want to find that the sum up to `6`. what's needed is `1 + 2 + 3 + 4 + 5 + 6`.
3. The third exercise is to find that the sum of divisors of a given integer. **Hint**: Let's say we want to find out the sum of the divisors of `15`. The divisors of `15` are `1`, `3`, `5` and `15`. So I would want to calculate `1 + 3 + 5 + 15`, and return that value.
4. Fourth exercise is to print a numbered triangle, when given a specific integer.

Hint: Given an input `5`, we would want to print the number triangle of these kind:

```python
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5.
```

These are the exercises for the `for` loop. We also test our skills, with creating method and executing them, in our IDE.

**Solution 1**

Let's start with creating the `is_prime()` method, in a file named `for_exercises`.

We would want to accept an `int` parameter, and find out if it is prime, or not.

We need to check whether it's divisible by any other number, other than `1` and itself. If we are passed in a value of `5`, you want to see if it's divisible by any of `2`, `3` or `4`.

```python
def is_prime(number):
```

We can use a `for` loop. We can structure it like this: `for divisor in range(1, number): ...`. We would not want to divide it with `1`, but start with `2` instead, and go up to `number-1`, which is `4`.

```python
for divisor in range(2,number):
```

How can we check if the `number` is divisible by `divisor`?

By using the `%` operator. If `number` is divisible by `divisor` we return `False`.

```python
for divisor in range(2,number):
    if number % divisor == 0:
        return False
```

What happens if the code comes up to the end? It would mean we tried with `2`, `3` and `4`, but `number` was not divisible by all of them. In that case, `number` would be prime, and we can safely return `True`.

```python
for divisor in range(2,number):
    if number % divisor == 0:
        return False

return True
```

For `1`, the rules are a little different, as it is neither a prime or composite. We will add an `if` condition to check if the number is `1`. `if(number < 2):`

This `if` condition is called a guard check or a boundary check, to make sure that you are processing only the right input. If `number` has a value less than `2`, do nothing. OK, it's not a prime.

Here is the entire code at one place, for your reference:

```python
def is_prime(number):
    if(number < 2):
        return False
    for divisor in range(2,number):
        if number % divisor == 0:
            return False
    return True
print(is_prime(5));
```

**Step 03: Continued - Programming Exercise PE-LO-01**

In the previous step, we looked at solving the `is_prime()` exercise. In this step, let's look at an implementation of `sum_up_to_n()`. Here is the entire code for this exercise:

```python
def sum_upto_n(number):
    sum = 0
    for i in range(1, number+1):
        sum = sum + i
    return sum
print(sum_upto_n(6))
print(sum_upto_n(10))
```

**Summary**

In this step, we:

-   Wrote a Python function to compute the sum of all integers, from `1`, up to the input integer `n`.

**Step 04: Continued - Programming Exercise PE-LO-01**

Let's focus on the third exercise, `sum_of_divisors`.

One of the clues we can give you, is that `sum_of_divisors()` is very similar to `is_prime()`.

You want to find out if a number is dividing `15`, and if it's dividing `15`, with the remainder of `0`, then you need to add that up.

```python
def calculate_sum_of_divisors(number):
    sum = 0
    if(number < 2):
        return sum
    for divisor in range(1,number+1):
        if number % divisor == 0:
            sum = sum + divisor
    return sum
print(calculate_sum_of_divisors(6))
print(calculate_sum_of_divisors(15))
```

**Step 05: Continued - Programming Exercise PE-LO-01**

In this step, Let's look at the last exercise - `print_a_number_triangle`.

For example, if we call such a function with input `5`, the output needs to be:

```python
1

1 2

1 2 3

1 2 3 4

1 2 3 4 5
```

Let start with a simple thing. Let's try and print `1 2 3 4 5` first, and then we would look at how to print the rest of the output. Lets proceed with defining this method.

We can say `def print_a_number_triangle(number): ...` that takes a number as an input. You want to print a sequence of integers starting from `1`, up to that specific `number`. How can you do that? Let's try this: `for i in range(1,number+1): print(i)` What would happen? Let's call `print_a_number_triangle(5)` now. It prints:

```python
    1
    2
    3
    4
    5
```

on individual lines.

To print this sequence on a single line, let's delimit them with `<SPACE>` instead. Call `print()` like this instead: `for i in range(1,number+1): print(i, end=" ")`.

Let's see what would happen now. `1 2 3 4 5`

To solve our exercise, we want to repeat this again and again.

Yes, we need another for loop around it!

```python
for j in range(1, number+1):
    for i in range(1, number + 1):
        print(i, end=" ")
```

Make sure that you have the indentation right. This is called `loop within a loop`.

The output of above program is

`1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5`

Let's add `print("\n")`, so we have a new line at the end of each outer loop iteration.

```python
for j in range(1, number+1):
    for i in range(1, number + 1):
        print(i, end=" ")
    print("\n")
```

Output

```python
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
```

We are printing a square, not a triangle.

What we want to do is to print up to `1` in first line, upto `2` in second line and so on.

How can we do that? Think about it.

When you are inside this loop, you can see the variable `j`.

Instead of `number+1`, let's say `j + 1`.

When `j` has a value of `1`, `for` will print from `1` to `1`. When `j` has a value of `2`, print from `1` to `2`, literally printing `1 2`. When j has a value of `3`, I'll print from `1` to `3`. Let's try this and see what would happen.

```python
for j in range(1, number+1):
    for i in range(1, j + 1):
        print(i, end=" ")
    print("\n")
```

You can see that our number triangle is ready!

```python
1

1 2

1 2 3

1 2 3 4

1 2 3 4 5
```

Here is the entire code for you:

```python
def print_a_number_triangle(number):
    for j in range(1, number + 1):
        for i in range(1, j + 1):
            print(i, end=' ')
        print()
print_a_number_triangle(6)
```

An important point to note is, a couple of these things can be done in a much simpler way. We will look at these options when we talk about functional programming.

**Summary**

In this step, we:

-   Presented a solution to the exercise for printing a number triangle.

**Step 06: Introducing The while Loop**

Let's look at one of the other loops which is present in Python, called the **`while`** loop.

In the `for` loop, we can specify the range of our iteration, by using the `range()` function.

In a `while` loop, we specify a logical condition. While the condition is true, loop continues running.

Do you remember one place where we use the condition until now? It was in an `if` statement.

Let's see how to use a simple `while` loop.

**Snippet-01:**

```python
    >>> i = 5
    >>> if i == 5:
    ...   print("i is 5")
    ...
    i is 5
```

Let's say `i` has a value of `0`, and we then do: `while i < 5: print(i)`.

```python
    >>> i = 0
    >>> while i < 5:
    ...   print(i)
    ...
    0
    0
    0
    0
    0
    0
    0
    0
    ^CTraceback (most recent call last):
      File "<stdin>", line 2, in <module>
    KeyboardInterrupt
    >>>
    KeyboardInterrupt
```

If we leave it to run, you'd see that it continuously prints `0` again, and again. Let's do a `<CTRL-C>` or `<COMMAND-C>` to interrupt this.

What is happening here?

Initially `i` is `0`, and the condition `i < 5` is `True`, and `print(i)` is executed. Next iteration, it checks the condition, it is `True`, and `0` is printed. This continues to happen. What's happening is an **infinite loop**.

One of the important things to make sure in a `while` loop, is to increment the value of `i`. We need to say something like `i = i + 1`.

```python
    >>> while i < 5:
    ...   print(i)
    ...   i = i + 1
    ...
    0
    1
    2
    3
    4
```

So how does it work? \*`i` initially had a value of `0`. First the condition is checked. It's `True`, so `0` is printed and then the value of `i` is incremented to `1`.

-   `i` is still less than `5`, so the loop continues to execute, and this happens until `4` is printed. `i` again gets incremented to `4 + 1`, or `5`.
-   Then we check the condition `i < 5`. This is now `False`. Control goes out of the `while` loop, and terminates it.

When executing a `while`, control flow is just based on a condition. As long as the condition is `True`, we keep executing the code. An important thing to remember, is to make sure the control variable is updated.

```python
    >>> for i in range(0,5): print(i)
    ...
    0
    1
    2
    3
    4
```

A `for` loop is much simpler to code than a `while`. With `while`, we have to write an expression statement, to increment the value.

The question you might have is - What are the situations when you should use a while?

We will look at that very soon.

**Summary**

In this video, we:

-   Were introduced to the concept of a `while` loop in Python
-   Understood the importance of a control variable being incremented inside the loop
-   Observed differences between the working of a `while`, and a `for` loop

**Step 07: Programming Exercise PE-LO-02**

In the previous step, we were introduced to `while` loop. In this step, let's look at a couple of exercises using the `while` loop.

**Exercises**

1. `print_squares_upto_limit(30)`: We need to print all the squares of numbers, up to a limit of `30`. The output needs to be `1 4 9 16 25`.
2. `print_cubes_upto_limit(30)`: We need to print all the cubes of numbers, up to a limit of `30`.The output needs to be 1 8 27.

**Exercise 1: Solution**

Here is the entire code for your reference:

```python
def print_squares_upto_limit(limit):
    i = 1
    while i * i < limit:
        print(i*i, end = " ")
        i = i + 1
```

Now the next exercise, was to print cubes up to a limit.

The expression in the `while` condition should now be `i*i*i < 30`.

```python
def print_cubes_upto_limit(limit):
    i = 1
    while i * i * i < limit:
        print(i*i*i, end = " ")
        i = i + 1
print_cubes_upto_limit(80)
```

Could we have implemented above two examples with `for` loop? It would've been a little more difficult.

Typically, we use a `for` loop when we know how many times the loop will be executed is clear at the start.

If we do not know, how many times a loop will run, `while` is a better option.

**Step 08: While Example**

Earlier we used `if` statement to implement a solution for this:

-   Ask the User for input:
    -   Enter two numbers
    -   Choose the Option:
        -   1 - Add
        -   2 - Subtract
        -   3 - Multiply
        -   4 - Divide
-   Perform the Operation
-   Publish the Result

We would want to enhance it to execute in a loop multiple times, until the user chooses to exit. We will add an option 5 - Exit.

-   Ask the User for input:
    -   Enter two numbers
    -   Choose the Option:
        -   1 - Add
        -   2 - Subtract
        -   3 - Multiply
        -   4 - Divide
        -   5 - Exit
-   Perform the Operation
-   Publish the Result
-   Repeat until Option 5 is chosen.

**Snippet-01 Explained**

Here's the earlier code we wrote with if:

```python
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))

print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")

choice = int(input("Choose Operation: "))

# print(number1 + number2)
# print(choice)
if choice==1:
    result = number1 + number2
elif choice==2:
    result = number1 - number2
elif choice==3:
    result = number1 / number2
elif choice==4:
    result = number1 * number2
else:
    result = "Invalid Choice"

print(result)
```
