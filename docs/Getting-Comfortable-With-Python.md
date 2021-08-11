# Getting Comfortable With Python:

Objective 04 - Use a print statement

---

### Getting Comfortable With Python:

### Objective 04 - Use a print statement

### Overview

Learning to use the `print` function in Python is the perfect way to start writing Python code. When learning to write in any new programming language, one of the first things you want to do is get some _output_ from your program. The `print` function is how you output the value of an object to the screen. You will learn how to use the `print` function in Python.

### Follow Along

### Using `print` with different objects

Let's start by executing the print function to print different types of objects in Python. There are numerous types of objects that you can print using the `print` function.

Using `print` with no arguments:

    >>> print()

    >>>

Notice the empty line after calling the `print` function. The default `end` value when calling print is the newline character `\\n`.

Using `print` with a string literal:

    >>> print("Lambda School is awesome!")
    Lambda School is awesome!
    >>>

Notice how calling `print` with the string literal printed the exact string we passed in onto the screen.

Using `print` with a variable:

    >>> slogan = "i love lamp"
    >>> print(slogan)
    i love lamp
    >>>

Notice how calling `print` with the `slogan` variable prints the value assigned to the `slogan` variable.

Using `print` with an expression:

    >>> superlative = "wonderful"
    >>> school = "Lambda School"
    >>> print(school + " is " + superlative)
    Lambda School is wonderful
    >>>

Notice how the argument for the `print` function can be an expression. Once the expression is resolved to a string object, the `print` function can output it to the screen.

Using `print` with other object types:

    print(2020)
    2020
    >>> print(123.456)
    123.456
    >>> print(False)
    False
    >>> print(["Lambda", "School", 2, 0, 2, 0])
    ['Lambda', 'School', 2, 0, 2, 0]
    >>> print(("Lambda", "School"))
    ('Lambda', 'School')
    >>> print({"school": "Lambda School", "year": 2020})
    {'school': 'Lambda School', 'year': 2020}
    >>>

Any object passed as an argument into `print` will get converted into a string type before outputted to the screen.

You can see how the `print` function is easy to use and how it can handle any object type that you pass into it.

### Passing multiple arguments into `print`

Now, let's look at how we can pass multiple arguments into the `print` function. Using `print` with multiple arguments gives you a flexible and easy way to output items to the screen.

We can pass multiple objects, all of the same or different types, into `print`.

    >>> print("Lambda School", 2020, True)
    Lambda School 2020 True
    >>>

Notice how each object we passed in was converted to a string and then output to the screen. Notice also that `print` used `" "` as the default separator value.

We can change the separator value by assigning a value to the keyword argument `sep`.

    >>> print("Lambda School", 2020, True, sep="!!!")
    Lambda School!!!2020!!!True
    >>> print("Lambda School", 2020, True, sep="\\t")
    Lambda School   2020    True
    >>> print("Lambda School", 2020, True, sep="\\n")
    Lambda School
    2020
    True
    >>> print("Lambda School", 2020, True, sep="")
    Lambda School2020True
    >>>

### Specifying the `end` value with `print`

You can also specify the `end` value by assigning a value to the `end` keyword argument when you call the `print` function. Being able to print a value to the screen but allow the user to stay on the same line is useful and necessary in some cases.

Here is how you can change the default `end` value (which is `\\n`) when calling the `print` function.

    >>> print("Are you a Lambda School student?", end=" (Y or N)")
    Are you a Lambda School student? (Y or N)>>>

Customizing the `end` value when calling the `print` function can be useful and necessary in some circumstances.

---

You have now learned the basics of using the `print` function in Python. You learned how to call the `print` function to print objects of different types. You now know how to use `print` with multiple positional arguments. In certain necessary situations, you also know how to change the default `end` value when calling the `print` function.

Now, get some practice using the `print` function by completing the challenge below.

<a href="https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-print#main.py" class="markup--anchor markup--p-anchor">https://replit.com/@bgoonz/cs-unit-1-sprint-1-module-1-print#main.py</a>

### Challenge

### Additional Resources

-   <span id="1660"><a href="https://www.w3schools.com/python/ref_func_print.asp" class="markup--anchor markup--li-anchor">https://www.w3schools.com/python/ref_func_print.asp</a></span>

### Objective 05 - Use white space to denote blocks

### Overview

Python is unique because indentation instead of some other character marks blocks of code. A block of code is a collection of statements that are grouped. The syntax for denoting blocks varies from language to language. For example, in C, blocks are delimited by curly braces (`{` and `}`). Understanding how Python uses whitespace and indentation to denote logical lines and code blocks is essential.

### Follow Along

### Whitespace Characters

Whitespace is any character represented by something that appears empty (usually `\\t` or `" "`). The characters that Python considers to be whitespace can be seen by printing out the value of `string.whitespace` from the `string` library.

    >>> import string
    >>> string.whitespace
    ' \\t\\n\\r\\x0b\\x0c'
    >>>

Notice the characters are `" "` (space), `\\t` (tab), `\\n` (newline), `\\r` (return), `\\x0b` (unicode line tabulation), and `\\x0c` (unicode form feed).

You've seen the different types of whitespace characters that can appear, but you mainly need to concern yourself with `" "`, `\\t`, and `\\n`.

### Logical Lines of Code

Whitespace is used to denote the end of a logical line of code. In Python, a logical line of code's end (a statement or a definition) is marked by a `\\n`.

    >>> first = "Lambda"
    >>> second = "School"
    >>> first + second
    'LambdaSchool'
    >>> first \\
    ... + \\
    ... second
    'LambdaSchool'
    >>>

Notice how the REPL evaluates the expression `first + second` when I return on line 3. Below that, I can write one logical line of code over multiple lines by ending each line with a `\\` character. That `\\` character lets the Python interpreter that even though there is a newline, you don't want it to treat it as the end of a logical line.

It's important to understand that Python assumes meaning in newline characters when trying to interpret your code.

### Code Blocks

Whitespace (indentation) can denote code blocks. Python gives meaning to the amount of whitespace (indentation level) that comes before a logical line of code.

    >>> if True:
    ... if True:
      File "<stdin>", line 2
        if True:
        ^
    IndentationError: expected an indented block
    >>>

[View original.](https://medium.com/p/1371581a4971)

Exported from [Medium](https://medium.com) on August 10, 2021.
