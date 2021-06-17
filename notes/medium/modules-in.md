# Modules in Javascript

Differences between Node.js and browsers

## Modules in Javascript

### **Differences between Node.js and browsers**

There are many differences between Node.js and browser environments, but many of them are small and inconsequential in practice. For example, in our _Asynchronous_ lesson, we noted how [Node’s setTimeout](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args) has a slightly different return value from [a browser’s setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout). Let’s go over a few notable differences between the two environments.

**Global vs Window**

In the Node.js runtime, the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) is the object where global variables are stored. In browsers, the [window object](https://developer.mozilla.org/en-US/docs/Web/API/Window) is where global variables are stored. The window also includes properties and methods that deal with drawing things on the screen like images, links, and buttons. Node doesn’t need to draw anything, and so it does not come with such properties. This means that you can’t reference window in Node.

_Most browsers allow you to reference global but it is really the same object as window._

**Document**

Browsers have access to a document object that contains the HTML of a page that will be rendered to the browser window. There is no document in Node.

**Location**

Browsers have access to a location that contains information about the web address being visited in the browser. There is no location in Node, since it is not on the web.

**Require and module.exports**

Node has a predefined require function that we can use to import installed modules like readline. We can also import and export across our own files using require and module.exports. For example, say we had two different files, animals.js and cat.js, that existed in the same directory:

If we execute animals.js in Node, the program would print ‘Sennacy is a great pet!’.

Browsers don’t have a notion of a file system so we cannot use require or module.exports in the same way.

## The fs module

Node comes with an [fs module](https://nodejs.org/api/fs.html) that contains methods that allow us to interact with our computer’s **F**ile **S**ystem through JavaScript. No additional installations are required; to access this module we can simply `require` it. We recommend that you code along with this reading. Let's begin with a `change-some-files.js` script that imports the module:

```text
// change-some-files.js

const fs = require("fs");
```

Similar to what we saw in the `readline` lesson, `require` will return to us a object with many properties that will enable us to do file I/O.

_**Did you know?**_ _I/O is short for input/output. It’s usage is widespread and all the hip tech companies are using it, like.io._

The `fs` module contains tons of functionality! Chances are that if there is some operation you need to perform regarding files, the `fs` module supports it. The module also offers both synchronous and asynchronous implementations of these methods. We prefer to not block the thread and so we'll opt for the asynchronous flavors of these methods.

## Creating a new file

To create a file, we can use the `writeFile` method. According to the documentation, there are a few ways to use it. The most straight forward way is:

The code a[create-a-nnew-file.js \(github.com\)](https://gist.github.com/bgoonz/8898ad673bd2ecee9d93f8ec267cf213)bove will create a new file called `foo.txt` in the same directory as our `change-some-file.js` script. It will write the string `'Hello world!'` into that newly created file. The third argument specifies the encoding of the characters. There are different ways to encode characters; [UTF-8](https://en.wikipedia.org/wiki/UTF-8) is the most common and you'll use this in most scenarios. The fourth argument to `writeFile` is a callback that will be invoked when the write operation is complete. The docs indicate that if there is an error during the operation \(such as an invalid encoding argument\), an error object will be passed into the callback. This type of error handling is quite common for asynchronous functions. Like we are used to, since `writeFile` is asynchronous, we need to utilize _callback chaining_ if we want to guarantee that commands occur _after_ the write is complete or fails.

_Beware! If the file name specified to_ `writeFile` _already exists, it will completely overwrite the contents of that file._

We won’t be using the `foo.txt` file in the rest of this reading.

## Reading existing files

To explore how to read a file, we’ll use VSCode to manually create a `poetry.txt` file within the same directory as our `change-some-file.js` script. Be sure to create this if you are following along.

Our `poetry.txt` file will contain the following lines:

```text
My code fails

I do not know why

My code works

I do not know why
```

We can use the `readFile` method to read the contents of this file. The method accepts very similar arguments to `writeFile`, except that the callback may be passed an error object and string containing the file contents. In the snippet below, we have replaced our previous `writeFile` code with `readFile`:

> Running the code above would print the following in the terminal:

```text
THE CONTENTS ARE:

My code fails

I do not know why

My code works

I do not know why
```

Success! From here, you can do anything you please with the data read from the file. For example, since `data` is a string, we could split the string on the newline character `\n` to obtain an array of the file's lines:

```text
THE CONTENTS ARE:

[ 'My code fails',

'I do not know why',

'My code works',

'I do not know why' ]

The third line is My code works
```

## File I/O

_Using the same_ `poetry.txt` _file from before:_

```text
My code fails

I do not know why

My code works

I do not know why
```

Let’s replace occurrences of the phrase ‘do not’ with the word ‘should’.

We can read the contents of the file as a string, manipulate this string, then write this new string back into the file.

We’ll need to utilize callback chaining in order for this to work since our file I/O is asynchronous:

Executing the script above will edit the `poetry.txt` file to contain:

```text
My code fails

I should know why

My code works

I should know why
```

### Refactor:

### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

Or Checkout my personal Resource Site:

**Web-Dev-Resource-Hub**  
_Edit description_[https://web-dev-resource-hub.netlify.app/](https://web-dev-resource-hub.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 8, 2021](https://medium.com/p/a55333e35978).

[Canonical link](https://medium.com/@bryanguner/modules-in-javascript-a55333e35978)

Exported from [Medium](https://medium.com) on May 23, 2021.

