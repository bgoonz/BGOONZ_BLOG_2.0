Writing Files Using Python
==========================

Basics of Writing Files in Python The common methods to operate with files are open() to open a file,

------------------------------------------------------------------------

### Writing Files Using Python

Basics of Writing Files in Python  
The common methods to operate with files are open() to open a file,

seek() to set the file’s current position at the given offset, and

close() to close th

As pointed out in a previous article that deals with reading data from files, file handling belongs to the essential knowledge of every professional Python programmer. This feature is a core part of the Python language, and no extra module needs to be loaded to do it properly.

### Basics of Writing Files in Python

The common methods to operate with files are `open()` to open a file, `seek()` to set the file's current position at the given offset, and `close()` to close the file afterwards. The `open()` method returns a file handle that represents a <a href="https://docs.python.org/3/glossary.html#term-file-object" class="markup--anchor markup--p-anchor">file object</a> to be used to access the file for reading, writing, or appending.

Writing to a file requires a few decisions — the name of the file in which to store data and the access mode of the file. Available are two modes, writing to a new file (and overwriting any existing data) and appending data at the end of a file that already exists. The according abbreviations are “w”, and “a”, and have to be specified before opening a file.

In this article we will explain how to write data to a file line by line, as a list of lines, and appending data at the end of a file.

### Writing a Single Line to a File

This first example is pretty similar to writing to files with the popular programming languages C and C++, as you’ll see in *Listing 1*. The process is pretty straightforward. First, we open the file using the `open()` method for writing, write a single line of text to the file using the `write()` method, and then close the file using the `close()` method. Keep in mind that due to the way we opened the "helloworld.txt" file it will either be created if it does not exist yet, or it will be completely overwritten.

    filehandle = open('helloworld.txt', 'w')
    filehandle.write('Hello, world!\n')
    filehandle.close()

*Listing 1*

This entire process can be shortened using the `with` statement. *Listing 2* shows how to write that. As already said before keep in mind that by opening the "helloworld.txt" file this way will either create if it does not exist yet or completely overwritten, otherwise.

    with open('helloworld.txt', 'w') as filehandle:
        filehandle.write('Hello, world!\n')

*Listing 2*

### Writing a List of Lines to a File

In reality a file does not consist only of a single line, but much more data. Therefore, the contents of the file are stored in a list that represents a file buffer. To write the entire file buffer we’ll use the `writelines()` method. *Listing 3* gives you an example of this.

    filehandle = open("helloworld.txt", "w")
    filebuffer = ["a first line of text", "a second line of text", "a third line"]
    filehandle.writelines(filebuffer)
    filehandle.close()

*Listing 3*

Running the Python program shown in *Listing 3* and then using the `cat` command we can see that the file "helloworld.txt" has the following content:

    $ cat helloworld.txt
    a first line of text a second line of text a third line

*Listing 4*

This happens because **the** `writelines()` **method does not automatically add any line separators when writing the data**. *Listing 5* shows how to achieve that, writing each line of text on a single line by adding the line separator "\\n". Using a generator expression each line is substituted by the line plus line separator. Again, you can formulate this using the `with` statement.

    with open('helloworld.txt', 'w') as filehandle:
        filebuffer = ["a line of text", "another line of text", "a third line"]
        filehandle.writelines("%s\n" % line for line in filebuffer)

*Listing 5*

Now, the output file “helloworld.txt” has the desired content as shown in *Listing 6*:

    $ cat helloworld.txt
    a first line of text
    a second line of text
    a third line

*Listing 6*

Interestingly, there is a way to use output redirection in Python to write data to files. *Listing 7* shows how to code that for Python 2.x.

    filename = "helloworld.txt"

    filecontent = ["Hello, world", "a second line", "and a third line"]

    with open(filename, 'w') as filehandle:
        
        for line in filecontent:
            print >>filehandle, line

*Listing 7*

For the latest Python releases this does not work in the same way anymore. To do something like this we must use the `sys` module. It allows us to access the UNIX standard output channels via `sys.stdout`, `sys.stdin`, and `sys.stderr`.

In our case we preserve the original value of the output channel `sys.stdout`, first (line 8 in the code below), redefine it to the handle of our output file,

next (line 15), print the data as usual (line 18), and finally restore the original value of the output channel `sys.stdout` (line 21). *Listing 8* contains the example code.

    import sys

    filename = "helloworld.txt"

    original = sys.stdout

    filecontent = ["Hello, world", "a second line", "and a third line"]

    with open(filename, 'w') as filehandle:
        
        sys.stdout = filehandle
         
        for line in filecontent:
            print(line)
         
        
        sys.stdout = original

*Listing 8*

This is not necessarily best practice, but it does give you other options for writing lines to a file.

### Appending Data to a File

So far, we have stored data in new files or in overwritten data in existing files. But what if we want to append data to the end of an existing file? In this case we would need to open the existing file using a different access mode. We change that to ‘a’ instead of ‘w’.

*Listing 9* shows how to handle that. And *Listing 10* does the same thing, but it uses the `with` statement rather.

    filehandle = open('helloworld.txt','a')
    filehandle.write('\n' + 'Hello, world!\n')
    filehandle.close()

*Listing 9*

    with open('helloworld.txt', 'a') as filehandle:
        filehandle.write('\n' + 'Hello, world!\n')

*Listing 10*

Using the same helloworld.txt file from before, running this code will produce the following file contents:

    $ cat helloworld.txt
    Hello, world
    a second line
    and a third line

    Hello, world!

### Conclusion

Writing plain text data to files, or appending data to existing files, is as easy as reading from files in Python. As soon as a file is closed after writing or appending data, Python triggers a synchronization call. As a result, the updated file is immediately written to disk.

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/d46b4851366f).

<a href="https://medium.com/@bryanguner/writing-files-using-python-d46b4851366f" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
