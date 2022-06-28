# Writing Files Using Python

Basics of Writing Files in Python The common methods to operate with files are open() to open a file,

---

### Writing Files Using Python

Basics of Writing Files in Python  
The common methods to operate with files are open() to open a file,

seek() to set the file's current position at the given offset, and

close() to close th

As pointed out in a previous article that deals with reading data from files, file handling belongs to the essential knowledge of every professional Python programmer. This feature is a core part of the Python language, and no extra module needs to be loaded to do it properly.

### Basics of Writing Files in Python

The common methods to operate with files are `open()` to open a file, `seek()` to set the file's current position at the given offset, and `close()` to close the file afterwards. The `open()` method returns a file handle that represents a <a href="https://docs.python.org/3/glossary.html#term-file-object" class="markup--anchor markup--p-anchor">file object</a> to be used to access the file for reading, writing, or appending.

Writing to a file requires a few decisions — the name of the file in which to store data and the access mode of the file. Available are two modes, writing to a new file (and overwriting any existing data) and appending data at the end of a file that already exists. The according abbreviations are "w", and "a", and have to be specified before opening a file.

In this article we will explain how to write data to a file line by line, as a list of lines, and appending data at the end of a file.

### Writing a Single Line to a File

This first example is pretty similar to writing to files with the popular programming languages C and C++, as you'll see in _Listing 1_. The process is pretty straightforward. First, we open the file using the `open()` method for writing, write a single line of text to the file using the `write()` method, and then close the file using the `close()` method. Keep in mind that due to the way we opened the "helloworld.txt" file it will either be created if it does not exist yet, or it will be completely overwritten.

    filehandle = open('helloworld.txt', 'w')
    filehandle.write('Hello, world!\n')
    filehandle.close()

_Listing 1_

This entire process can be shortened using the `with` statement. _Listing 2_ shows how to write that. As already said before keep in mind that by opening the "helloworld.txt" file this way will either create if it does not exist yet or completely overwritten, otherwise.

    with open('helloworld.txt', 'w') as filehandle:
        filehandle.write('Hello, world!\n')

_Listing 2_

### Writing a List of Lines to a File

In reality a file does not consist only of a single line, but much more data. Therefore, the contents of the file are stored in a list that represents a file buffer. To write the entire file buffer we'll use the `writelines()` method. _Listing 3_ gives you an example of this.

    filehandle = open("helloworld.txt", "w")
    filebuffer = ["a first line of text", "a second line of text", "a third line"]
    filehandle.writelines(filebuffer)
    filehandle.close()

_Listing 3_

Running the Python program shown in _Listing 3_ and then using the `cat` command we can see that the file "helloworld.txt" has the following content:

    $ cat helloworld.txt
    a first line of text a second line of text a third line

_Listing 4_

This happens because **the** `writelines()` **method does not automatically add any line separators when writing the data**. _Listing 5_ shows how to achieve that, writing each line of text on a single line by adding the line separator "\\n". Using a generator expression each line is substituted by the line plus line separator. Again, you can formulate this using the `with` statement.

    with open('helloworld.txt', 'w') as filehandle:
        filebuffer = ["a line of text", "another line of text", "a third line"]
        filehandle.writelines("%s\n" % line for line in filebuffer)

_Listing 5_

Now, the output file "helloworld.txt" has the desired content as shown in _Listing 6_:

    $ cat helloworld.txt
    a first line of text
    a second line of text
    a third line

_Listing 6_

Interestingly, there is a way to use output redirection in Python to write data to files. _Listing 7_ shows how to code that for Python 2.x.

    filename = "helloworld.txt"

    filecontent = ["Hello, world", "a second line", "and a third line"]

    with open(filename, 'w') as filehandle:

        for line in filecontent:
            print >>filehandle, line

_Listing 7_

For the latest Python releases this does not work in the same way anymore. To do something like this we must use the `sys` module. It allows us to access the UNIX standard output channels via `sys.stdout`, `sys.stdin`, and `sys.stderr`.

In our case we preserve the original value of the output channel `sys.stdout`, first (line 8 in the code below), redefine it to the handle of our output file,

next (line 15), print the data as usual (line 18), and finally restore the original value of the output channel `sys.stdout` (line 21). _Listing 8_ contains the example code.

    import sys

    filename = "helloworld.txt"

    original = sys.stdout

    filecontent = ["Hello, world", "a second line", "and a third line"]

    with open(filename, 'w') as filehandle:

        sys.stdout = filehandle

        for line in filecontent:
            print(line)


        sys.stdout = original

_Listing 8_

This is not necessarily best practice, but it does give you other options for writing lines to a file.

### Appending Data to a File

So far, we have stored data in new files or in overwritten data in existing files. But what if we want to append data to the end of an existing file? In this case we would need to open the existing file using a different access mode. We change that to ‘a' instead of ‘w'.

_Listing 9_ shows how to handle that. And _Listing 10_ does the same thing, but it uses the `with` statement rather.

    filehandle = open('helloworld.txt','a')
    filehandle.write('\n' + 'Hello, world!\n')
    filehandle.close()

_Listing 9_

    with open('helloworld.txt', 'a') as filehandle:
        filehandle.write('\n' + 'Hello, world!\n')

_Listing 10_

Using the same helloworld.txt file from before, running this code will produce the following file contents:

    $ cat helloworld.txt
    Hello, world
    a second line
    and a third line

    Hello, world!

### Conclusion

Writing plain text data to files, or appending data to existing files, is as easy as reading from files in Python. As soon as a file is closed after writing or appending data, Python triggers a synchronization call. As a result, the updated file is immediately written to disk.

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz's gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz">
<strong>bgoonz — Overview</strong>
<br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a>
<a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock">
</a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/d46b4851366f).

<a href="https://medium.com/@bryanguner/writing-files-using-python-d46b4851366f" class="p-canonical">Canonical link</a>

on September 23, 2021.
