---
date: '2019-05-27'
image: images/space.gif
seo:
  title: Community Round-up
  description: Commodo ante vis placerat interdum massa massa primis
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Community Round-up
      keyName: property
    - name: 'og:description'
      value: Commodo ante vis placerat interdum massa massa primis
      keyName: property
    - name: 'og:image'
      value: images/2.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Community Round-up
    - name: 'twitter:description'
      value: Commodo ante vis placerat interdum massa massa primis
    - name: 'twitter:image'
      value: images/2.jpg
      relativeUrl: true
template: post
title: Python Resources
thumb_image: images/violet-pluto.png
thumb_image_alt: python logo
---
# Beginners Guide To Python[**Basic Web Development Environment Setup**&#xA;*Windows Subsystem for Linux (WSL) and Ubuntu*levelup.gitconnected.com](https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe)![](https://cdn-images-1.medium.com/max/600/1\*59V2ZNbyJfsdGR2N20PM7w.png)![](https://cdn-images-1.medium.com/max/800/0\*oVIDxWdgJXoIt7CI.jpg)[**Put Python Anywhere on the Web**&#xA;*Python in the browser. No installation required.*trinket.io](https://trinket.io/python3/2b693977e7)&#xA;&#xA;

My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library support, and optional named parameters.

*   Bram Cohen

Article on basic web development setup… it is geared towards web but VSCode is an incredibly versitile editor and this stack really could suit just about anyone working in the field of computer science. 

### The Repository & Live Site Behind This Article:













### About Python(Taken From Tutorial Page Of Docs):

[Python enables programs to be written compactly and readably. Programs written in Python are typically much shorter than equivalent C, C++, or Java programs, for several reasons:](https://docs.python.org/3/tutorial/appetite.html)

*   the high-level data types allow you to express complex operations in a single statement;

*   statement grouping is done by indentation instead of beginning and ending brackets;

*   no variable or argument declarations are necessary.

### Installing Python:

### Windows

To determine if your Windows computer already has Python 3:

1.  Open a command prompt by entering command prompt in the Windows 10 search box and selecting the Command Prompt App in the Best match section of the results.

2.  Enter the following command and then select the Enter key:

3.  ConsoleCopy

python --version

1.  Running python --version may not return a value, or may return an error message stating *'python' is not recognized as an internal or external command, operable program or batch file.* This indicates Python is not installed on your Windows system.

2.  If you see the word Python with a set of numbers separated by . characters, some version of Python is installed. 

#### i.e.

> Python 3.8.0

**As long as the first number is 3**, you have Python 3 installed.

> Download Page: 
>
> <https://www.python.org/downloads/release/python-395/>

> Download Link: 
>
> <https://www.python.org/ftp/python/3.9.5/python-3.9.5-amd64.exe>




### Install Jupyter Notebooks:

### pip

If you use pip, you can install it with:

If installing using pip install --user, you must add the user-level bin directory to your PATH environment variable in order to launch jupyter lab. If you are using a Unix derivative (FreeBSD, GNU / Linux, OS X), you can achieve this by using export PATH="$HOME/.local/bin:$PATH" command.

### pipenv

If you use pipenv, you can install it as:

or from a git checkout:

When using pipenv, in order to launch jupyter lab, you must activate the project’s virtualenv. For example, in the directory where pipenv’s Pipfile and Pipfile.lock live (i.e., where you ran the above commands):

Alternatively, you can run jupyter lab inside the virtualenv with

[Jupyter Notebook Viewer](https://nbviewer.jupyter.org/github/bgoonz/Jupyter-Notebooks/tree/master/)

### Python Syntax

Python syntax was made for readability, and easy editing. For example, the python language uses a : and indented code, while javascript and others generally use {} and indented code.

### First Program

Lets create a [python 3](https://repl.it/languages/python3) repl, and call it *Hello World*. Now you have a blank file called *main.py*. Now let us write our first line of code:

> *Brian Kernighan actually wrote the first “Hello, World!” program as part of the documentation for the BCPL programming language developed by Martin Richards.*

Now, press the run button, which obviously runs the code. If you are not using replit, this will not work. You should research how to run a file with your text editor.

### Command Line

If you look to your left at the console where hello world was just printed, you can see a >, >>>, or $ depending on what you are using. After the prompt, try typing a line of code.

The command line allows you to execute single lines of code at a time. It is often used when trying out a new function or method in the language.

### New: Comments!

Another cool thing that you can generally do with all languages, are comments. In python, a comment starts with a #. The computer ignores all text starting after the #.

\# Write some comments!

If you have a huge comment, do **not** comment all the 350 lines, just put ''' before it, and ''' at the end. Technically, this is not a comment but a string, but the computer still ignores it, so we will use it.




### New: Variables!

Unlike many other languages, there is no var, let, or const to declare a variable in python. You simply go name = 'value'.

Remember, there is a difference between integers and strings. *Remember: String = "".* To convert between these two, you can put an int in a str() function, and a string in a int() function. There is also a less used one, called a float. Mainly, these are integers with decimals. Change them using the float() command.




<https://repl.it/@bgoonz/second-scr?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com>




Instead of using the , in the print function, you can put a + to combine the variables and string.

### Operators

There are many operators in python:

*   \+

*   \-

*   /

*   \*
    These operators are the same in most languages, and allow for addition, subtraction, division, and multiplicaiton.
    Now, we can look at a few more complicated ones:

*simpleops.py*

You should already know everything shown above, as it is similar to other languages. If you continue down, you will see more complicated ones.

*complexop.py*

The ones above are to edit the current value of the variable.
Sorry to JS users, as there is no i++; or anything.

### *Fun Fact:&#xA;The python language was named after Monty Python.*

If you really want to know about the others, view [Py Operators](https://www.tutorialspoint.com/python/python_basic_operators.htm)

### More Things With Strings

Like the title?
Anyways, a ' and a " both indicate a string, but **do not combine them!**

*quotes.py*

*slicing.py*

### String Slicing

You can look at only certain parts of the string by slicing it, using \[num:num].
The first number stands for how far in you go from the front, and the second stands for how far in you go from the back.

### Methods and Functions

Here is a list of functions/methods we will go over:

*   .strip()

*   len()

*   .lower()

*   .upper()

*   .replace()

*   .split()







### New: Input()

Input is a function that gathers input entered from the user in the command line. It takes one optional parameter, which is the users prompt.

*inp.py*

If you wanted to make it smaller, and look neater to the user, you could do…

*inp2.py*

Running:
*inp.py*

*inp2.py*

### New: Importing Modules

Python has created a lot of functions that are located in other .py files. You need to import these **modules** to gain access to the,, You may wonder why python did this. The purpose of separate modules is to make python faster. Instead of storing millions and millions of functions, , it only needs a few basic ones. To import a module, you must write input \<modulename>. Do not add the .py extension to the file name. In this example , we will be using a python created module named random.

*module.py*

Now, I have access to all functions in the random.py file. To access a specific function in the module, you would do \<module>.\<function>. For example:

*module2.py*

> *Pro Tip:
> Do from random import randint to not have to do random.randint(), just randint()
> To import all functions from a module, you could do from random import **

>
>

### New: Loops!

Loops allow you to repeat code over and over again. This is useful if you want to print Hi with a delay of one second 100 times.

#### for Loop

The for loop goes through a list of variables, making a seperate variable equal one of the list every time.
Let’s say we wanted to create the example above.

*loop.py*

This will print Hello with a .3 second delay 100 times. This is just one way to use it, but it is usually used like this:

*loop2.py*

<https://storage.googleapis.com/replit/images/1539649280875_37d22e6d49e8e8fbc453631def345387.pn>

#### while Loop

The while loop runs the code while something stays true. You would put while \<expression>. Every time the loop runs, it evaluates if the expression is True. It it is, it runs the code, if not it continues outside of the loop. For example:

*while.py*

Or you could do:

*while2.py*

### New: if Statement

The if statement allows you to check if something is True. If so, it runs the code, if not, it continues on. It is kind of like a while loop, but it executes **only once**. An if statement is written:

*if.py*

Now, you may think that it would be better if you could make it print only one message. Not as many that are True. You can do that with an elif statement:

*elif.py*

Now, you may wonder how to run code if none work. Well, there is a simple statement called else:

*else.py*

### New: Functions (def)

So far, you have only seen how to use functions other people have made. Let use the example that you want to print the a random number between 1 and 9, and print different text every time.
It is quite tiring to type:

Characters: 389

*nofunc.py*

Now with functions, you can seriously lower the amount of characters:

Characters: 254

*functions.py*

### Project Based Learning:

The following is a modified version of a tutorial posted By: [InvisibleOne ](https://replit.com/@InvisibleOne)

I would cite the original tutorial it’s self but at the time of this writing I can no longer find it on his repl.it profile and so the only reference I have are my own notes from following the tutorial when I first found it. 







### 1. Adventure Story

The first thing you need with an adventure story is a great storyline, something that is exciting and fun. The idea is, that at each pivotal point in the story, you give the player the opportunity to make a choice.
First things first, let’s import the stuff that we need, like this:

Now, we need some variables to hold some of the player data.

Ok, now we have the player’s name and nickname, let’s welcome them to the game

Now for the story. The most important part of all stories is the introduction, so let’s print our introduction

Now, we’ll give the player their first choice

There you have it, a pretty simple choose your own ending story. You can make it as complex or uncomplex as you like.

### 2. TEXT ENCODER

Ever make secret messages as a kid? I used to. Anyways, here’s the way you can make a program to encode messages! It’s pretty simple. First things first, let’s get the message the user wants to encode, we’ll use input() for that:

Now we need to split that string into a list of characters, this part is a bit more complicated.

Now we need to convert the characters into code, well do this with a for loop:

Once we’ve encoded the text, we’ll print it back for the user

And if you want to decode something, it is this same process but in reverse!

### 3. Guess my Number

Number guessing games are fun and pretty simple, all you need are a few loops. To start, we need to import random.

That is pretty simple. Now we’ll make a list with the numbers were want available for the game

Next, we get a random number from the list

Now, we need to ask the user for input, we’ll to this with a while loop

Have fun with this!

### 4. Notes

Here is a more advanced project, but still pretty easy. This will be using a txt file to save some notes. The first thing we need to do is to create a txt file in your repl, name it ‘notes.txt’
Now, to open a file in python we use open(‘filename’, type) The type can be ‘r’ for read, or ‘w’ for write. There is another option, but we won’t be using that here. Now, the first thing we are going to do is get what the user would like to save:

Now we’ll open our file and save that text

There we go, now the information is in the file. Next, we’ll retrieve it

There we go, that’s how you can open files and close files with python

### 5. Random Dare Generator

Who doesn’t love a good dare? Here is a program that can generate random dares. The first thing we’ll need to do is as always, import random. Then we’ll make some lists of dares
