Getting Comfortable With Python:
================================

An introduction by example

------------------------------------------------------------------------

### **Getting Comfortable With Python:**

#### An introduction by example

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*QWb2YSJPCjrY2Ds6T-HL3A.png" class="graf-image" /></figure>

### My other Python articles:

<a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb"><strong>Python Study Guide for a JavaScript Programmer</strong><br />
<em>A guide to commands in Python from what you know in JavaScript</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d"><strong>Beginners Guide To Python</strong><br />
<em>My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library…</em>medium.com</a><a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f"><strong>Python Problems &amp; Solutions For Beginners</strong><br />
<em>Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12"><strong>Notes I Wish I Had When I Started Learning Python</strong><br />
<em>Plus resources for learning data structures and algorithms in python at the bottom of this article!</em>medium.com</a><a href="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### **Use a print statement**

**Overview**

Learning to use the print function in Python is the perfect way to start writing Python code. When learning to write in any new programming language, one of the first things you want to do is get some *output* from your program. The print function is how you output the value of an object to the screen. You will learn how to use the print function in Python.

Using print with no arguments:

    >>> print()
     
     >>>

Note: the empty line after calling the print function. The default end value when calling print is the newline character \\\\n.

Using print with a string literal:

    >>> print(“WebDevHub School is awesome!”)
     WebDevHub School is awesome!
     >>>

Note: how calling print with the string literal printed the exact string we passed in onto the screen.

Using print with a variable:

    >>> slogan = “i love lamp”
     >>> print(slogan)
     i love lamp
     >>>

Note: how calling print with the slogan variable prints the value assigned to the slogan variable.

Using print with an expression:

    >>> superlative = “wonderful”
     >>> school = “WebDevHub School”
     >>> print(school + “ is “ + superlative)
     WebDevHub School is wonderful
     >>>

Note: how the argument for the print function can be an expression. Once the expression is resolved to a string object, the print function can output it to the screen.

Using print with other object types:

    print(2021)
     2021
     >>> print(123.456)
     123.456
     >>> print(False)
     False
     >>> print([“WebDevHub”, “School”, 2, 0, 2, 0])
     [‘WebDevHub’, ‘School’, 2, 0, 2, 0]
     >>> print((“WebDevHub”, “School”))
     (‘WebDevHub’, ‘School’)
     >>> print({“school”: “WebDevHub School”, “year”: 2021})
     {‘school’: ‘WebDevHub School’, ‘year’: 2021}
     >>>

Any object passed as an argument into print will get converted into a string type before outputted to the screen.

You can see how the print function is easy to use and how it can handle any object type that you pass into it.

**Passing multiple arguments into print**

Now, let’s look at how we can pass multiple arguments into the print function. Using print with multiple arguments gives you a flexible and easy way to output items to the screen.

We can pass multiple objects, all of the same or different types, into print.

    >>> print(“WebDevHub School”, 2021, True)
     WebDevHub School 2021 True
     >>>

Note: how each object we passed in was converted to a string and then output to the screen. Note: also that print used “ “ as the default separator value.

We can change the separator value by assigning a value to the keyword argument sep.

    >>> print(“WebDevHub School”, 2021, True, sep=”!!!”)
     WebDevHub School!!!2021!!!True
     >>> print(“WebDevHub School”, 2021, True, sep=”\\t”)
     WebDevHub School 2021 True
     >>> print(“WebDevHub School”, 2021, True, sep=”\\n”)
     WebDevHub School
     2021
     True
     >>> print(“WebDevHub School”, 2021, True, sep=””)
     WebDevHub School2021True
     >>>

**Specifying the end value with print**

You can also specify the end value by assigning a value to the end keyword argument when you call the print function. Being able to print a value to the screen but allow the user to stay on the same line is useful and necessary in some cases.

Here is how you can change the default end value (which is \\\\n) when calling the print function.

    >>> print(“Are you a WebDevHub School student?”, end=” (Y or N)”)
     Are you a WebDevHub School student? (Y or N)>>>

Customizing the end value when calling the print function can be useful and necessary in some circumstances.

You have now learned the basics of using the print function in Python. You learned how to call the print function to print objects of different types. You now know how to use print with multiple positional arguments. In certain necessary situations, you also know how to change the default end value when calling the print function.

Now, get some practice using the print function by completing the Try: below.

**Try:**

**Additional Resources**

-   <span id="b977"><a href="https://www.w3schools.com/python/ref_func_print.asp" class="markup--anchor markup--li-anchor">https://www.w3schools.com/python/ref_func_print.asp</a></span>

**Use white space to denote blocks**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*bDX5OqElYa0EWFPp.png" class="graf-image" /></figure>**Overview**

Python is unique because indentation instead of some other character marks blocks of code. A block of code is a collection of statements that are grouped. The syntax for denoting blocks varies from language to language. For example, in C, blocks are delimited by curly braces ({ and }). Understanding how Python uses whitespace and indentation to denote logical lines and code blocks is essential.

**Follow Along**

**Whitespace Characters**

Whitespace is any character represented by something that appears empty (usually \\\\t or “ “). The characters that Python considers to be whitespace can be seen by printing out the value of string.whitespace from the string library.

    >>> import string
     >>> string.whitespace
     ‘ \\t\\n\\r\\x0b\\x0c’
     >>>

Note: the characters are “ “ (space), \\\\t (tab), \\\\n (newline), \\\\r (return), \\\\x0b (unicode line tabulation), and \\\\x0c (unicode form feed).

You’ve seen the different types of whitespace characters that can appear, but you mainly need to concern yourself with “ “, \\\\t, and \\\\n.

**Logical Lines of Code**

Whitespace is used to denote the end of a logical line of code. In Python, a logical line of code’s end (a statement or a definition) is marked by a \\\\n.

    >>> first = “WebDevHub”
     >>> second = “School”
     >>> first + second
     ‘WebDevHubSchool’
     >>> first \\
     … + \\
     … second
     ‘WebDevHubSchool’
     >>>

Note: how the REPL evaluates the expression first + second when I return on line 3. Below that, I can write one logical line of code over multiple lines by ending each line with a \\\\ character. That \\\\ character lets the Python interpreter that even though there is a newline, you don’t want it to treat it as the end of a logical line.

It’s important to understand that Python assumes meaning in newline characters when trying to interpret your code.

**Code Blocks**

Whitespace (indentation) can denote code blocks. Python gives meaning to the amount of whitespace (indentation level) that comes before a logical line of code.

    >>> if True:
     … if True:
     File “<stdin>”, line 2
     if True:
     ^
     IndentationError: expected an indented block
     >>>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 25, 2021](https://medium.com/p/1371581a4971).

<a href="https://medium.com/@bryanguner/getting-comfortable-with-python-1371581a4971" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
