
# Node.js - Quick Guide

> ## Excerpt
> Node.js - Quick Guide,  Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v

---
___

  

## What is Node.js?

Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its [official documentation](https://nodejs.org/) is as follows −

> Node.js is a platform built on [Chrome's JavaScript runtime](https://code.google.com/p/v8/) for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

Node.js = Runtime Environment + JavaScript Library

## Features of Node.js

Following are some of the important features that make Node.js the first choice of software architects.

-   **Asynchronous and Event Driven** − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.
    
-   **Very Fast** − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
    
-   **Single Threaded but Highly Scalable** − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.
    
-   **No Buffering** − Node.js applications never buffer any data. These applications simply output the data in chunks.
    
-   **License** − Node.js is released under the [MIT license](https://raw.githubusercontent.com/joyent/node/v0.12.0/LICENSE).
    

## Who Uses Node.js?

Following is the link on github wiki containing an exhaustive list of projects, application and companies which are using Node.js. This list includes eBay, General Electric, GoDaddy, Microsoft, PayPal, Uber, Wikipins, Yahoo!, and Yammer to name a few.

-   [Projects, Applications, and Companies Using Node](https://github.com/joyent/node/wiki/projects,-applications,-and-companies-using-node)
    

## Concepts

The following diagram depicts some important parts of Node.js which we will discuss in detail in the subsequent chapters.

![Node.js Concepts](https://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg)

## Where to Use Node.js?

Following are the areas where Node.js is proving itself as a perfect technology partner.

-   I/O bound Applications
-   Data Streaming Applications
-   Data Intensive Real-time Applications (DIRT)
-   JSON APIs based Applications
-   Single Page Applications

## Where Not to Use Node.js?

It is not advisable to use Node.js for CPU intensive applications.

## Try it Option Online

> You really do not need to set up your own environment to start learning Node.js. Reason is very simple, we already have set up Node.js environment online, so that you can execute all the available examples online and learn through practice. Feel free to modify any example and check the results with different options.
> 
> Try the following example using the **Live Demo** option available at the top right corner of the below sample code box (on our website) −
> 
> /\* Hello World! program in Node.js \*/ console.log("Hello World!");
> 
> For most of the examples given in this tutorial, you will find a Try it option, so just make use of it and enjoy your learning.

## Local Environment Setup

If you are still willing to set up your environment for Node.js, you need the following two softwares available on your computer, (a) Text Editor and (b) The Node.js binary installables.

## Text Editor

This will be used to type your program. Examples of few editors include Windows Notepad, OS Edit command, Brief, Epsilon, EMACS, and vim or vi.

Name and version of text editor can vary on different operating systems. For example, Notepad will be used on Windows, and vim or vi can be used on windows as well as Linux or UNIX.

The files you create with your editor are called source files and contain program source code. The source files for Node.js programs are typically named with the extension "**.js**".

Before starting your programming, make sure you have one text editor in place and you have enough experience to write a computer program, save it in a file, and finally execute it.

## The Node.js Runtime

The source code written in source file is simply javascript. The Node.js interpreter will be used to interpret and execute your javascript code.

Node.js distribution comes as a binary installable for SunOS , Linux, Mac OS X, and Windows operating systems with the 32-bit (386) and 64-bit (amd64) x86 processor architectures.

Following section guides you on how to install Node.js binary distribution on various OS.

## Download Node.js archive

Download latest version of Node.js installable archive file from [Node.js Downloads](http://nodejs.org/download/). At the time of writing this tutorial, following are the versions available on different OS.

OS

Archive name

Windows

node-v6.3.1-x64.msi

Linux

node-v6.3.1-linux-x86.tar.gz

Mac

node-v6.3.1-darwin-x86.tar.gz

SunOS

node-v6.3.1-sunos-x86.tar.gz

## Installation on UNIX/Linux/Mac OS X, and SunOS

Based on your OS architecture, download and extract the archive node-v6.3.1-**osname**.tar.gz into /tmp, and then finally move extracted files into /usr/local/nodejs directory. For example:

$ cd /tmp
$ wget http://nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.gz
$ tar xvfz node-v6.3.1-linux-x64.tar.gz
$ mkdir -p /usr/local/nodejs
$ mv node-v6.3.1-linux-x64/\* /usr/local/nodejs

Add /usr/local/nodejs/bin to the PATH environment variable.

OS

Output

Linux

export PATH=$PATH:/usr/local/nodejs/bin

Mac

export PATH=$PATH:/usr/local/nodejs/bin

FreeBSD

export PATH=$PATH:/usr/local/nodejs/bin

## Installation on Windows

Use the MSI file and follow the prompts to install the Node.js. By default, the installer uses the Node.js distribution in C:\\Program Files\\nodejs. The installer should set the C:\\Program Files\\nodejs\\bin directory in window's PATH environment variable. Restart any open command prompts for the change to take effect.

## Verify installation: Executing a File

Create a js file named **main.js** on your machine (Windows or Linux) having the following code.

/\* Hello, World! program in node.js \*/ console.log("Hello, World!")

Now execute main.js file using Node.js interpreter to see the result −

$ node main.js

If everything is fine with your installation, this should produce the following result −

Hello, World!

Before creating an actual "Hello, World!" application using Node.js, let us see the components of a Node.js application. A Node.js application consists of the following three important components −

-   **Import required modules** − We use the **require** directive to load Node.js modules.
    
-   **Create server** − A server which will listen to client's requests similar to Apache HTTP Server.
    
-   **Read request and return response** − The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.
    

## Creating Node.js Application

### Step 1 - Import Required Module

We use the **require** directive to load the http module and store the returned HTTP instance into an http variable as follows −

var http = require("http");

### Step 2 - Create Server

We use the created http instance and call **http.createServer()** method to create a server instance and then we bind it at port 8081 using the **listen** method associated with the server instance. Pass it a function with parameters request and response. Write the sample implementation to always return "Hello World".

http.createServer(function (request, response) { // Send the HTTP header // HTTP Status: 200 : OK // Content Type: text/plain response.writeHead(200, {'Content-Type': 'text/plain'}); // Send the response body as "Hello World" response.end('Hello World\\n'); }).listen(8081); // Console will print the message console.log('Server running at http://127.0.0.1:8081/');

The above code is enough to create an HTTP server which listens, i.e., waits for a request over 8081 port on the local machine.

### Step 3 - Testing Request & Response

Let's put step 1 and 2 together in a file called **main.js** and start our HTTP server as shown below −

var http \= require("http"); http.createServer(function (request, response) { // Send the HTTP header // HTTP Status: 200 : OK // Content Type: text/plain response.writeHead(200, {'Content-Type': 'text/plain'}); // Send the response body as "Hello World" response.end('Hello World\\n'); }).listen(8081); // Console will print the message console.log('Server running at http://127.0.0.1:8081/');

Now execute the main.js to start the server as follows −

$ node main.js

Verify the Output. Server has started.

Server running at http://127.0.0.1:8081/

## Make a Request to the Node.js Server

Open http://127.0.0.1:8081/ in any browser and observe the following result.

![Node.js Sample](https://www.tutorialspoint.com/nodejs/images/nodejs_sample.jpg)

Congratulations, you have your first HTTP server up and running which is responding to all the HTTP requests at port 8081.

REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode. Node.js or **Node** comes bundled with a REPL environment. It performs the following tasks −

-   **Read** − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
    
-   **Eval** − Takes and evaluates the data structure.
    
-   **Print** − Prints the result.
    
-   **Loop** − Loops the above command until the user presses **ctrl-c** twice.
    

The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.

## Online REPL Terminal

To simplify your learning, we have set up an easy to use Node.js REPL environment online, where you can practice Node.js syntax − [Launch Node.js REPL Terminal](https://www.tutorialspoint.com/nodejs_terminal_online.php "Node.js Terminal Online")

### Starting REPL

REPL can be started by simply running **node** on shell/console without any arguments as follows.

$ node

You will see the REPL Command prompt > where you can type any Node.js command −

$ node
>

### Simple Expression

Let's try a simple mathematics at the Node.js REPL command prompt −

$ node
> 1 + 3
4
> 1 + ( 2 \* 3 ) - 4
3
>

### Use Variables

You can make use variables to store values and print later like any conventional script. If **var** keyword is not used, then the value is stored in the variable and printed. Whereas if **var** keyword is used, then the value is stored but not printed. You can print variables using **console.log()**.

$ node
> x = 10
10
> var y = 10
undefined
> x + y
20
> console.log("Hello World")
Hello World
undefined

### Multiline Expression

Node REPL supports multiline expression similar to JavaScript. Let's check the following do-while loop in action −

$ node
> var x = 0
undefined
> do {
   ... x++;
   ... console.log("x: " + x);
   ... } 
while ( x < 5 );
x: 1
x: 2
x: 3
x: 4
x: 5
undefined
>

**...** comes automatically when you press Enter after the opening bracket. Node automatically checks the continuity of expressions.

### Underscore Variable

You can use underscore **(\_)** to get the last result −

$ node
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = \_
undefined
> console.log(sum)
30
undefined
>

## REPL Commands

-   **ctrl + c** − terminate the current command.
    
-   **ctrl + c twice** − terminate the Node REPL.
    
-   **ctrl + d** − terminate the Node REPL.
    
-   **Up/Down Keys** − see command history and modify previous commands.
    
-   **tab Keys** − list of current commands.
    
-   **.help** − list of all commands.
    
-   **.break** − exit from multiline expression.
    
-   **.clear** − exit from multiline expression.
    
-   **.save _filename_** − save the current Node REPL session to a file.
    
-   **.load _filename_** − load file content in current Node REPL session.
    

## Stopping REPL

As mentioned above, you will need to use **ctrl-c twice** to come out of Node.js REPL.

$ node
>
(^C again to quit)
>

Node Package Manager (NPM) provides two main functionalities −

-   Online repositories for node.js packages/modules which are searchable on [search.nodejs.org](https://search.nodejs.org/)
    
-   Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.
    

NPM comes bundled with Node.js installables after v0.6.3 version. To verify the same, open console and type the following command and see the result −

$ npm --version
2.7.1

If you are running an old version of NPM then it is quite easy to update it to the latest version. Just use the following command from root −

$ sudo npm install npm -g
/usr/bin/npm -> /usr/lib/node\_modules/npm/bin/npm-cli.js
npm@2.7.1 /usr/lib/node\_modules/npm

## Installing Modules using NPM

There is a simple syntax to install any Node.js module −

$ npm install <Module Name>

For example, following is the command to install a famous Node.js web framework module called express −

$ npm install express

Now you can use this module in your js file as following −

var express = require('express');

## Global vs Local Installation

By default, NPM installs any dependency in the local mode. Here local mode refers to the package installation in node\_modules directory lying in the folder where Node application is present. Locally deployed packages are accessible via require() method. For example, when we installed express module, it created node\_modules directory in the current directory where it installed the express module.

$ ls -l
total 0
drwxr-xr-x 3 root root 20 Mar 17 02:23 node\_modules

Alternatively, you can use **npm ls** command to list down all the locally installed modules.

Globally installed packages/dependencies are stored in system directory. Such dependencies can be used in CLI (Command Line Interface) function of any node.js but cannot be imported using require() in Node application directly. Now let's try installing the express module using global installation.

$ npm install express -g

This will produce a similar result but the module will be installed globally. Here, the first line shows the module version and the location where it is getting installed.

**express@4.12.2 /usr/lib/node\_modules/express**
├── merge-descriptors@1.0.0
├── utils-merge@1.0.0
├── cookie-signature@1.0.6
├── methods@1.1.1
├── fresh@0.2.4
├── cookie@0.1.2
├── escape-html@1.0.1
├── range-parser@1.0.2
├── content-type@1.0.1
├── finalhandler@0.3.3
├── vary@1.0.0
├── parseurl@1.3.0
├── content-disposition@0.5.0
├── path-to-regexp@0.1.3
├── depd@1.0.0
├── qs@2.3.3
├── on-finished@2.2.0 (ee-first@1.1.0)
├── etag@1.5.1 (crc@3.2.1)
├── debug@2.1.3 (ms@0.7.0)
├── proxy-addr@1.0.7 (forwarded@0.1.0, ipaddr.js@0.1.9)
├── send@0.12.1 (destroy@1.0.3, ms@0.7.0, mime@1.3.4)
├── serve-static@1.9.2 (send@0.12.2)
├── accepts@1.2.5 (negotiator@0.5.1, mime-types@2.0.10)
└── type-is@1.6.1 (media-typer@0.3.0, mime-types@2.0.10)

You can use the following command to check all the modules installed globally −

$ npm ls -g

## Using package.json

package.json is present in the root directory of any Node application/module and is used to define the properties of a package. Let's open package.json of express package present in **node\_modules/express/**

{ "name": "express", "description": "Fast, unopinionated, minimalist web framework", "version": "4.11.2", "author": { "name": "TJ Holowaychuk", "email": "tj@vision-media.ca" }, "contributors": \[{ "name": "Aaron Heckmann", "email": "aaron.heckmann+github@gmail.com" }, { "name": "Ciaran Jessup", "email": "ciaranj@gmail.com" }, { "name": "Douglas Christopher Wilson", "email": "doug@somethingdoug.com" }, { "name": "Guillermo Rauch", "email": "rauchg@gmail.com" }, { "name": "Jonathan Ong", "email": "me@jongleberry.com" }, { "name": "Roman Shtylman", "email": "shtylman+expressjs@gmail.com" }, { "name": "Young Jae Sim", "email": "hanul@hanul.me" } \], "license": "MIT", "repository": { "type": "git", "url": "https://github.com/strongloop/express" }, "homepage": "https://expressjs.com/", "keywords": \[ "express", "framework", "sinatra", "web", "rest", "restful", "router", "app", "api" \], "dependencies": { "accepts": "~1.2.3", "content-disposition": "0.5.0", "cookie-signature": "1.0.5", "debug": "~2.1.1", "depd": "~1.0.0", "escape-html": "1.0.1", "etag": "~1.5.1", "finalhandler": "0.3.3", "fresh": "0.2.4", "media-typer": "0.3.0", "methods": "~1.1.1", "on-finished": "~2.2.0", "parseurl": "~1.3.0", "path-to-regexp": "0.1.3", "proxy-addr": "~1.0.6", "qs": "2.3.3", "range-parser": "~1.0.2", "send": "0.11.1", "serve-static": "~1.8.1", "type-is": "~1.5.6", "vary": "~1.0.0", "cookie": "0.1.2", "merge-descriptors": "0.0.2", "utils-merge": "1.0.0" }, "devDependencies": { "after": "0.8.1", "ejs": "2.1.4", "istanbul": "0.3.5", "marked": "0.3.3", "mocha": "~2.1.0", "should": "~4.6.2", "supertest": "~0.15.0", "hjs": "~0.0.6", "body-parser": "~1.11.0", "connect-redis": "~2.2.0", "cookie-parser": "~1.3.3", "express-session": "~1.10.2", "jade": "~1.9.1", "method-override": "~2.3.1", "morgan": "~1.5.1", "multiparty": "~4.1.1", "vhost": "~3.0.0" }, "engines": { "node": ">= 0.10.0" }, "files": \[ "LICENSE", "History.md", "Readme.md", "index.js", "lib/" \], "scripts": { "test": "mocha --require test/support/env 
         --reporter spec --bail --check-leaks test/ test/acceptance/", "test-cov": "istanbul cover node\_modules/mocha/bin/\_mocha 
         -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/", "test-tap": "mocha --require test/support/env 
         --reporter tap --check-leaks test/ test/acceptance/", "test-travis": "istanbul cover node\_modules/mocha/bin/\_mocha 
         --report lcovonly -- --require test/support/env 
         --reporter spec --check-leaks test/ test/acceptance/" }, "gitHead": "63ab25579bda70b4927a179b580a9c580b6c7ada", "bugs": { "url": "https://github.com/strongloop/express/issues" }, "\_id": "express@4.11.2", "\_shasum": "8df3d5a9ac848585f00a0777601823faecd3b148", "\_from": "express@\*", "\_npmVersion": "1.4.28", "\_npmUser": { "name": "dougwilson", "email": "doug@somethingdoug.com" }, "maintainers": \[{ "name": "tjholowaychuk", "email": "tj@vision-media.ca" }, { "name": "jongleberry", "email": "jonathanrichardong@gmail.com" }, { "name": "shtylman", "email": "shtylman@gmail.com" }, { "name": "dougwilson", "email": "doug@somethingdoug.com" }, { "name": "aredridel", "email": "aredridel@nbtsc.org" }, { "name": "strongloop", "email": "callback@strongloop.com" }, { "name": "rfeng", "email": "enjoyjava@gmail.com" }\], "dist": { "shasum": "8df3d5a9ac848585f00a0777601823faecd3b148", "tarball": "https://registry.npmjs.org/express/-/express-4.11.2.tgz" }, "directories": {}, "\_resolved": "https://registry.npmjs.org/express/-/express-4.11.2.tgz", "readme": "ERROR: No README data found!" }

## Attributes of Package.json

-   **name** − name of the package
    
-   **version** − version of the package
    
-   **description** − description of the package
    
-   **homepage** − homepage of the package
    
-   **author** − author of the package
    
-   **contributors** − name of the contributors to the package
    
-   **dependencies** − list of dependencies. NPM automatically installs all the dependencies mentioned here in the node\_module folder of the package.
    
-   **repository** − repository type and URL of the package
    
-   **main** − entry point of the package
    
-   **keywords** − keywords
    

## Uninstalling a Module

Use the following command to uninstall a Node.js module.

$ npm uninstall express

Once NPM uninstalls the package, you can verify it by looking at the content of /node\_modules/ directory or type the following command −

$ npm ls

## Updating a Module

Update package.json and change the version of the dependency to be updated and run the following command.

$ npm update express

## Search a Module

Search a package name using NPM.

$ npm search express

## Create a Module

Creating a module requires package.json to be generated. Let's generate package.json using NPM, which will generate the basic skeleton of the package.json.

$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See 'npm help json' for definitive documentation on these fields
and exactly what they do.

Use 'npm install <pkg> --save' afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (webmaster)

You will need to provide all the required information about your module. You can take help from the above-mentioned package.json file to understand the meanings of various information demanded. Once package.json is generated, use the following command to register yourself with NPM repository site using a valid email address.

$ npm adduser
Username: mcmohd
Password:
Email: (this IS public) mcmohd@gmail.com

It is time now to publish your module −

$ npm publish

If everything is fine with your module, then it will be published in the repository and will be accessible to install using NPM like any other Node.js module.

## What is Callback?

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

For example, a function to read a file may start reading file and return the control to the execution environment immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

## Blocking Code Example

Create a text file named **input.txt** with the following content −

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Create a js file named **main.js** with the following code −

var fs \= require("fs"); var data \= fs.readFileSync('input.txt'); console.log(data.toString()); console.log("Program Ended");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended

## Non-Blocking Code Example

Create a text file named input.txt with the following content.

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Update main.js to have the following code −

var fs \= require("fs"); fs.readFile('input.txt', function (err, data) { if (err) return console.error(err); console.log(data.toString()); }); console.log("Program Ended");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

These two examples explain the concept of blocking and non-blocking calls.

-   The first example shows that the program blocks until it reads the file and then only it proceeds to end the program.
    
-   The second example shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.
    

Thus, a blocking program executes very much in sequence. From the programming point of view, it is easier to implement the logic but non-blocking programs do not execute in sequence. In case a program needs to use any data to be processed, it should be kept within the same block to make it sequential execution.

Node.js is a single-threaded application, but it can support concurrency via the concept of **event** and **callbacks**. Every API of Node.js is asynchronous and being single-threaded, they use **async function calls** to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

## Event-Driven Programming

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

![Event Loop](https://www.tutorialspoint.com/nodejs/images/event_loop.jpg)

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as **Observers**. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners as follows −

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

Following is the syntax to bind an event handler with an event −

// Bind event and event  handler as follows
eventEmitter.on('eventName', eventHandler);

We can fire an event programmatically as follows −

// Fire an event 
eventEmitter.emit('eventName');

## Example

Create a js file named main.js with the following code −

// Import events module var events \= require('events'); // Create an eventEmitter object var eventEmitter \= new events.EventEmitter(); // Create an event handler as follows var connectHandler \= function connected() { console.log('connection succesful.'); // Fire the data\_received event 
   eventEmitter.emit('data\_received'); } // Bind the connection event with the handler eventEmitter.on('connection', connectHandler); // Bind the data\_received event with the anonymous function eventEmitter.on('data\_received', function() { console.log('data received succesfully.'); }); // Fire the connection event 
eventEmitter.emit('connection'); console.log("Program Ended.");

Now let's try to run the above program and check its output −

$ node main.js

IT should produce the following result −

connection successful.
data received successfully.
Program Ended.

## How Node Applications Work?

In Node Application, any async function accepts a callback as the last parameter and a callback function accepts an error as the first parameter. Let's revisit the previous example again. Create a text file named input.txt with the following content.

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Create a js file named main.js having the following code −

var fs \= require("fs"); fs.readFile('input.txt', function (err, data) { if (err) { console.log(err.stack); return; } console.log(data.toString()); }); console.log("Program Ended");

Here fs.readFile() is a async function whose purpose is to read a file. If an error occurs during the read operation, then the **err object** will contain the corresponding error, else data will contain the contents of the file. **readFile** passes err and data to the callback function after the read operation is complete, which finally prints the content.

Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it, an fs.readStream emits an event when the file is opened. All objects which emit events are the instances of events.EventEmitter.

## EventEmitter Class

As we have seen in the previous section, EventEmitter class lies in the events module. It is accessible via the following code −

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

When an EventEmitter instance faces any error, it emits an 'error' event. When a new listener is added, 'newListener' event is fired and when a listener is removed, 'removeListener' event is fired.

EventEmitter provides multiple properties like **on** and **emit**. **on** property is used to bind a function with the event and **emit** is used to fire an event.

## Methods

Sr.No.

Method & Description

1

**addListener(event, listener)**

Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.

2

**on(event, listener)**

Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.

3

**once(event, listener)**

Adds a one time listener to the event. This listener is invoked only the next time the event is fired, after which it is removed. Returns emitter, so calls can be chained.

4

**removeListener(event, listener)**

Removes a listener from the listener array for the specified event. **Caution −** It changes the array indices in the listener array behind the listener. removeListener will remove, at most, one instance of a listener from the listener array. If any single listener has been added multiple times to the listener array for the specified event, then removeListener must be called multiple times to remove each instance. Returns emitter, so calls can be chained.

5

**removeAllListeners(\[event\])**

Removes all listeners, or those of the specified event. It's not a good idea to remove listeners that were added elsewhere in the code, especially when it's on an emitter that you didn't create (e.g. sockets or file streams). Returns emitter, so calls can be chained.

6

**setMaxListeners(n)**

By default, EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.

7

**listeners(event)**

Returns an array of listeners for the specified event.

8

**emit(event, \[arg1\], \[arg2\], \[...\])**

Execute each of the listeners in order with the supplied arguments. Returns true if the event had listeners, false otherwise.

## Class Methods

Sr.No.

Method & Description

1

**listenerCount(emitter, event)**

Returns the number of listeners for a given event.

## Events

Sr.No.

Events & Description

1

**newListener**

-   **event** − String: the event name
    
-   **listener** − Function: the event handler function
    

This event is emitted any time a listener is added. When this event is triggered, the listener may not yet have been added to the array of listeners for the event.

2

**removeListener**

-   **event** − String The event name
    
-   **listener** − Function The event handler function
    

This event is emitted any time someone removes a listener. When this event is triggered, the listener may not yet have been removed from the array of listeners for the event.

## Example

Create a js file named main.js with the following Node.js code −

var events \= require('events'); var eventEmitter \= new events.EventEmitter(); // listener #1 var listner1 \= function listner1() { console.log('listner1 executed.'); } // listener #2 var listner2 \= function listner2() { console.log('listner2 executed.'); } // Bind the connection event with the listner1 function eventEmitter.addListener('connection', listner1); // Bind the connection event with the listner2 function eventEmitter.on('connection', listner2); var eventListeners \= require('events').EventEmitter.listenerCount (eventEmitter,'connection'); console.log(eventListeners + " Listner(s) listening to connection event"); // Fire the connection event 
eventEmitter.emit('connection'); // Remove the binding of listner1 function eventEmitter.removeListener('connection', listner1); console.log("Listner1 will not listen now."); // Fire the connection event 
eventEmitter.emit('connection'); eventListeners \= require('events').EventEmitter.listenerCount(eventEmitter,'connection'); console.log(eventListeners + " Listner(s) listening to connection event"); console.log("Program Ended.");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

2 Listner(s) listening to connection event
listner1 executed.
listner2 executed.
Listner1 will not listen now.
listner2 executed.
1 Listner(s) listening to connection event
Program Ended.

Pure JavaScript is Unicode friendly, but it is not so for binary data. While dealing with TCP streams or the file system, it's necessary to handle octet streams. Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.

Buffer class is a global class that can be accessed in an application without importing the buffer module.

## Creating Buffers

Node Buffer can be constructed in a variety of ways.

### Method 1

Following is the syntax to create an uninitiated Buffer of **10** octets −

var buf = new Buffer(10);

### Method 2

Following is the syntax to create a Buffer from a given array −

var buf = new Buffer(\[10, 20, 30, 40, 50\]);

### Method 3

Following is the syntax to create a Buffer from a given string and optionally encoding type −

var buf = new Buffer("Simply Easy Learning", "utf-8");

Though "utf8" is the default encoding, you can use any of the following encodings "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".

## Writing to Buffers

### Syntax

Following is the syntax of the method to write into a Node Buffer −

buf.write(string\[, offset\]\[, length\]\[, encoding\])

### Parameters

Here is the description of the parameters used −

-   **string** − This is the string data to be written to buffer.
    
-   **offset** − This is the index of the buffer to start writing at. Default value is 0.
    
-   **length** − This is the number of bytes to write. Defaults to buffer.length.
    
-   **encoding** − Encoding to use. 'utf8' is the default encoding.
    

### Return Value

This method returns the number of octets written. If there is not enough space in the buffer to fit the entire string, it will write a part of the string.

### Example

buf \= new Buffer(256); len \= buf.write("Simply Easy Learning"); console.log("Octets written : "+ len);

When the above program is executed, it produces the following result −

Octets written : 20

## Reading from Buffers

### Syntax

Following is the syntax of the method to read data from a Node Buffer −

buf.toString(\[encoding\]\[, start\]\[, end\])

### Parameters

Here is the description of the parameters used −

-   **encoding** − Encoding to use. 'utf8' is the default encoding.
    
-   **start** − Beginning index to start reading, defaults to 0.
    
-   **end** − End index to end reading, defaults is complete buffer.
    

### Return Value

This method decodes and returns a string from buffer data encoded using the specified character set encoding.

### Example

buf \= new Buffer(26); for (var i \= 0 ; i < 26 ; i++) { buf\[i\] \= i + 97; } console.log( buf.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz console.log( buf.toString('ascii',0,5)); // outputs: abcde console.log( buf.toString('utf8',0,5)); // outputs: abcde console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

When the above program is executed, it produces the following result −

abcdefghijklmnopqrstuvwxyz
abcde
abcde
abcde

## Convert Buffer to JSON

### Syntax

Following is the syntax of the method to convert a Node Buffer into JSON object −

buf.toJSON()

### Return Value

This method returns a JSON-representation of the Buffer instance.

### Example

var buf \= new Buffer('Simply Easy Learning'); var json \= buf.toJSON(buf); console.log(json);

When the above program is executed, it produces the following result −

{ type: 'Buffer',
   data: 
   \[ 
      83,
      105,
      109,
      112,
      108,
      121,
      32,
      69,
      97,
      115,
      121,
      32,
      76,
      101,
      97,
      114,
      110,
      105,
      110,
      103 
   \]
}

## Concatenate Buffers

### Syntax

Following is the syntax of the method to concatenate Node buffers to a single Node Buffer −

Buffer.concat(list\[, totalLength\])

### Parameters

Here is the description of the parameters used −

-   **list** − Array List of Buffer objects to be concatenated.
    
-   **totalLength** − This is the total length of the buffers when concatenated.
    

### Return Value

This method returns a Buffer instance.

### Example

var buffer1 \= new Buffer('TutorialsPoint '); var buffer2 \= new Buffer('Simply Easy Learning'); var buffer3 \= Buffer.concat(\[buffer1,buffer2\]); console.log("buffer3 content: " + buffer3.toString());

When the above program is executed, it produces the following result −

buffer3 content: TutorialsPoint Simply Easy Learning

## Compare Buffers

### Syntax

Following is the syntax of the method to compare two Node buffers −

buf.compare(otherBuffer);

### Parameters

Here is the description of the parameters used −

-   **otherBuffer** − This is the other buffer which will be compared with **buf**
    

### Return Value

Returns a number indicating whether it comes before or after or is the same as the otherBuffer in sort order.

### Example

var buffer1 \= new Buffer('ABC'); var buffer2 \= new Buffer('ABCD'); var result \= buffer1.compare(buffer2); if(result < 0) { console.log(buffer1 +" comes before " + buffer2); } else if(result \=== 0) { console.log(buffer1 +" is same as " + buffer2); } else { console.log(buffer1 +" comes after " + buffer2); }

When the above program is executed, it produces the following result −

ABC comes before ABCD

## Copy Buffer

### Syntax

Following is the syntax of the method to copy a node buffer −

buf.copy(targetBuffer\[, targetStart\]\[, sourceStart\]\[, sourceEnd\])

### Parameters

Here is the description of the parameters used −

-   **targetBuffer** − Buffer object where buffer will be copied.
    
-   **targetStart** − Number, Optional, Default: 0
    
-   **sourceStart** − Number, Optional, Default: 0
    
-   **sourceEnd** − Number, Optional, Default: buffer.length
    

### Return Value

No return value. Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined, the targetStart and sourceStart parameters default to 0, while sourceEnd defaults to buffer.length.

### Example

var buffer1 \= new Buffer('ABC'); //copy a buffer var buffer2 \= new Buffer(3); buffer1.copy(buffer2); console.log("buffer2 content: " + buffer2.toString());

When the above program is executed, it produces the following result −

buffer2 content: ABC

## Slice Buffer

### Syntax

Following is the syntax of the method to get a sub-buffer of a node buffer −

buf.slice(\[start\]\[, end\])

### Parameters

Here is the description of the parameters used −

-   **start** − Number, Optional, Default: 0
    
-   **end** − Number, Optional, Default: buffer.length
    

### Return Value

Returns a new buffer which references the same memory as the old one, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. Negative indexes start from the end of the buffer.

### Example

var buffer1 \= new Buffer('TutorialsPoint'); //slicing a buffer var buffer2 \= buffer1.slice(0,9); console.log("buffer2 content: " + buffer2.toString());

When the above program is executed, it produces the following result −

buffer2 content: Tutorials

## Buffer Length

### Syntax

Following is the syntax of the method to get a size of a node buffer in bytes −

buf.length;

### Return Value

Returns the size of a buffer in bytes.

### Example

var buffer \= new Buffer('TutorialsPoint'); //length of the buffer console.log("buffer length: " + buffer.length);

When the above program is executed, it produces following result −

buffer length: 14

## Methods Reference

Following is a reference of Buffers module available in Node.js. For more detail, you can refer to the official documentation.

## Class Methods

Sr.No.

Method & Description

1

**Buffer.isEncoding(encoding)**

Returns true if the encoding is a valid encoding argument, false otherwise.

2

**Buffer.isBuffer(obj)**

Tests if obj is a Buffer.

3

**Buffer.byteLength(string\[, encoding\])**

Gives the actual byte length of a string. encoding defaults to 'utf8'. It is not the same as String.prototype.length, since String.prototype.length returns the number of characters in a string.

4

**Buffer.concat(list\[, totalLength\])**

Returns a buffer which is the result of concatenating all the buffers in the list together.

5

**Buffer.compare(buf1, buf2)**

The same as buf1.compare(buf2). Useful for sorting an array of buffers.

## What are Streams?

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −

-   **Readable** − Stream which is used for read operation.
    
-   **Writable** − Stream which is used for write operation.
    
-   **Duplex** − Stream which can be used for both read and write operation.
    
-   **Transform** − A type of duplex stream where the output is computed based on input.
    

Each type of Stream is an **EventEmitter** instance and throws several events at different instance of times. For example, some of the commonly used events are −

-   **data** − This event is fired when there is data is available to read.
    
-   **end** − This event is fired when there is no more data to read.
    
-   **error** − This event is fired when there is any error receiving or writing data.
    
-   **finish** − This event is fired when all the data has been flushed to underlying system.
    

This tutorial provides a basic understanding of the commonly used operations on Streams.

## Reading from a Stream

Create a text file named input.txt having the following content −

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Create a js file named main.js with the following code −

var fs \= require("fs"); var data \= ''; // Create a readable stream var readerStream \= fs.createReadStream('input.txt'); // Set the encoding to be utf8. 
readerStream.setEncoding('UTF8'); // Handle stream events --> data, end, and error readerStream.on('data', function(chunk) { data += chunk; }); readerStream.on('end',function() { console.log(data); }); readerStream.on('error', function(err) { console.log(err.stack); }); console.log("Program Ended");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

## Writing to a Stream

Create a js file named main.js with the following code −

var fs \= require("fs"); var data \= 'Simply Easy Learning'; // Create a writable stream var writerStream \= fs.createWriteStream('output.txt'); // Write the data to stream with encoding to be utf8 writerStream.write(data,'UTF8'); // Mark the end of file writerStream.end(); // Handle stream events --> finish, and error writerStream.on('finish', function() { console.log("Write completed."); }); writerStream.on('error', function(err) { console.log(err.stack); }); console.log("Program Ended");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Program Ended
Write completed.

Now open output.txt created in your current directory; it should contain the following −

Simply Easy Learning

## Piping the Streams

Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations. Now we'll show a piping example for reading from one file and writing it to another file.

Create a js file named main.js with the following code −

var fs \= require("fs"); // Create a readable stream var readerStream \= fs.createReadStream('input.txt'); // Create a writable stream var writerStream \= fs.createWriteStream('output.txt'); // Pipe the read and write operations // read input.txt and write data to output.txt readerStream.pipe(writerStream); console.log("Program Ended");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Program Ended

Open output.txt created in your current directory; it should contain the following −

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

## Chaining the Streams

Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations. Now we'll use piping and chaining to first compress a file and then decompress the same.

Create a js file named main.js with the following code −

var fs \= require("fs"); var zlib \= require('zlib'); // Compress the file input.txt to input.txt.gz fs.createReadStream('input.txt') .pipe(zlib.createGzip()) .pipe(fs.createWriteStream('input.txt.gz')); console.log("File Compressed.");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

File Compressed.

You will find that input.txt has been compressed and it created a file input.txt.gz in the current directory. Now let's try to decompress the same file using the following code −

var fs \= require("fs"); var zlib \= require('zlib'); // Decompress the file input.txt.gz to input.txt fs.createReadStream('input.txt.gz') .pipe(zlib.createGunzip()) .pipe(fs.createWriteStream('input.txt')); console.log("File Decompressed.");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

File Decompressed.

Node implements File I/O using simple wrappers around standard POSIX functions. The Node File System (fs) module can be imported using the following syntax −

var fs = require("fs")

## Synchronous vs Asynchronous

Every method in the fs module has synchronous as well as asynchronous forms. Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error. It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.

### Example

Create a text file named **input.txt** with the following content −

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Let us create a js file named **main.js** with the following code −

var fs \= require("fs"); // Asynchronous read fs.readFile('input.txt', function (err, data) { if (err) { return console.error(err); } console.log("Asynchronous read: " + data.toString()); }); // Synchronous read var data \= fs.readFileSync('input.txt'); console.log("Synchronous read: " + data.toString()); console.log("Program Ended");

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Synchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Program Ended
Asynchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

The following sections in this chapter provide a set of good examples on major File I/O methods.

## Open a File

### Syntax

Following is the syntax of the method to open a file in asynchronous mode −

fs.open(path, flags\[, mode\], callback)

### Parameters

Here is the description of the parameters used −

-   **path** − This is the string having file name including path.
    
-   **flags** − Flags indicate the behavior of the file to be opened. All possible values have been mentioned below.
    
-   **mode** − It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.
    
-   **callback** − This is the callback function which gets two arguments (err, fd).
    

## Flags

Flags for read/write operations are −

Sr.No.

Flag & Description

1

**r**

Open file for reading. An exception occurs if the file does not exist.

2

**r+**

Open file for reading and writing. An exception occurs if the file does not exist.

3

**rs**

Open file for reading in synchronous mode.

4

**rs+**

Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.

5

**w**

Open file for writing. The file is created (if it does not exist) or truncated (if it exists).

6

**wx**

Like 'w' but fails if the path exists.

7

**w+**

Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

8

**wx+**

Like 'w+' but fails if path exists.

9

**a**

Open file for appending. The file is created if it does not exist.

10

**ax**

Like 'a' but fails if the path exists.

11

**a+**

Open file for reading and appending. The file is created if it does not exist.

12

**ax+**

Like 'a+' but fails if the the path exists.

### Example

Let us create a js file named **main.js** having the following code to open a file input.txt for reading and writing.

var fs \= require("fs"); // Asynchronous - Opening File console.log("Going to open file!"); fs.open('input.txt', 'r+', function(err, fd) { if (err) { return console.error(err); } console.log("File opened successfully!"); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to open file!
File opened successfully!

## Get File Information

### Syntax

Following is the syntax of the method to get the information about a file −

fs.stat(path, callback)

### Parameters

Here is the description of the parameters used −

-   **path** − This is the string having file name including path.
    
-   **callback** − This is the callback function which gets two arguments (err, stats) where **stats** is an object of fs.Stats type which is printed below in the example.
    

Apart from the important attributes which are printed below in the example, there are several useful methods available in **fs.Stats** class which can be used to check file type. These methods are given in the following table.

Sr.No.

Method & Description

1

**stats.isFile()**

Returns true if file type of a simple file.

2

**stats.isDirectory()**

Returns true if file type of a directory.

3

**stats.isBlockDevice()**

Returns true if file type of a block device.

4

**stats.isCharacterDevice()**

Returns true if file type of a character device.

5

**stats.isSymbolicLink()**

Returns true if file type of a symbolic link.

6

**stats.isFIFO()**

Returns true if file type of a FIFO.

7

**stats.isSocket()**

Returns true if file type of asocket.

### Example

Let us create a js file named **main.js** with the following code −

var fs \= require("fs"); console.log("Going to get file info!"); fs.stat('input.txt', function (err, stats) { if (err) { return console.error(err); } console.log(stats); console.log("Got file info successfully!"); // Check file type console.log("isFile ? " + stats.isFile()); console.log("isDirectory ? " + stats.isDirectory()); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to get file info!
{ 
   dev: 1792,
   mode: 33188,
   nlink: 1,
   uid: 48,
   gid: 48,
   rdev: 0,
   blksize: 4096,
   ino: 4318127,
   size: 97,
   blocks: 8,
   atime: Sun Mar 22 2015 13:40:00 GMT-0500 (CDT),
   mtime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT),
   ctime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT) 
}
Got file info successfully!
isFile ? true
isDirectory ? false

## Writing a File

### Syntax

Following is the syntax of one of the methods to write into a file −

fs.writeFile(filename, data\[, options\], callback)

This method will over-write the file if the file already exists. If you want to write into an existing file then you should use another method available.

### Parameters

Here is the description of the parameters used −

-   **path** − This is the string having the file name including path.
    
-   **data** − This is the String or Buffer to be written into the file.
    
-   **options** − The third parameter is an object which will hold {encoding, mode, flag}. By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
    
-   **callback** − This is the callback function which gets a single parameter err that returns an error in case of any writing error.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); console.log("Going to write into existing file"); fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) { if (err) { return console.error(err); } console.log("Data written successfully!"); console.log("Let's read newly written data"); fs.readFile('input.txt', function (err, data) { if (err) { return console.error(err); } console.log("Asynchronous read: " + data.toString()); }); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to write into existing file
Data written successfully!
Let's read newly written data
Asynchronous read: Simply Easy Learning!

## Reading a File

### Syntax

Following is the syntax of one of the methods to read from a file −

fs.read(fd, buffer, offset, length, position, callback)

This method will use file descriptor to read the file. If you want to read the file directly using the file name, then you should use another method available.

### Parameters

Here is the description of the parameters used −

-   **fd** − This is the file descriptor returned by fs.open().
    
-   **buffer** − This is the buffer that the data will be written to.
    
-   **offset** − This is the offset in the buffer to start writing at.
    
-   **length** − This is an integer specifying the number of bytes to read.
    
-   **position** − This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
    
-   **callback** − This is the callback function which gets the three arguments, (err, bytesRead, buffer).
    

### Example

Let us create a js file named **main.js** with the following code −

var fs \= require("fs"); var buf \= new Buffer(1024); console.log("Going to open an existing file"); fs.open('input.txt', 'r+', function(err, fd) { if (err) { return console.error(err); } console.log("File opened successfully!"); console.log("Going to read the file"); fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){ if (err){ console.log(err); } console.log(bytes + " bytes read"); // Print only read bytes to avoid junk. if(bytes \> 0){ console.log(buf.slice(0, bytes).toString()); } }); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to open an existing file
File opened successfully!
Going to read the file
97 bytes read
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

## Closing a File

### Syntax

Following is the syntax to close an opened file −

fs.close(fd, callback)

### Parameters

Here is the description of the parameters used −

-   **fd** − This is the file descriptor returned by file fs.open() method.
    
-   **callback** − This is the callback function No arguments other than a possible exception are given to the completion callback.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); var buf \= new Buffer(1024); console.log("Going to open an existing file"); fs.open('input.txt', 'r+', function(err, fd) { if (err) { return console.error(err); } console.log("File opened successfully!"); console.log("Going to read the file"); fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) { if (err) { console.log(err); } // Print only read bytes to avoid junk. if(bytes \> 0) { console.log(buf.slice(0, bytes).toString()); } // Close the opened file. fs.close(fd, function(err) { if (err) { console.log(err); } console.log("File closed successfully."); }); }); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to open an existing file
File opened successfully!
Going to read the file
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

File closed successfully.

## Truncate a File

### Syntax

Following is the syntax of the method to truncate an opened file −

fs.ftruncate(fd, len, callback)

### Parameters

Here is the description of the parameters used −

-   **fd** − This is the file descriptor returned by fs.open().
    
-   **len** − This is the length of the file after which the file will be truncated.
    
-   **callback** − This is the callback function No arguments other than a possible exception are given to the completion callback.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); var buf \= new Buffer(1024); console.log("Going to open an existing file"); fs.open('input.txt', 'r+', function(err, fd) { if (err) { return console.error(err); } console.log("File opened successfully!"); console.log("Going to truncate the file after 10 bytes"); // Truncate the opened file. fs.ftruncate(fd, 10, function(err) { if (err) { console.log(err); } console.log("File truncated successfully."); console.log("Going to read the same file"); fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){ if (err) { console.log(err); } // Print only read bytes to avoid junk. if(bytes \> 0) { console.log(buf.slice(0, bytes).toString()); } // Close the opened file. fs.close(fd, function(err) { if (err) { console.log(err); } console.log("File closed successfully."); }); }); }); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to open an existing file
File opened successfully!
Going to truncate the file after 10 bytes
File truncated successfully.
Going to read the same file
Tutorials 
File closed successfully.

## Delete a File

### Syntax

Following is the syntax of the method to delete a file −

fs.unlink(path, callback)

### Parameters

Here is the description of the parameters used −

-   **path** − This is the file name including path.
    
-   **callback** − This is the callback function No arguments other than a possible exception are given to the completion callback.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); console.log("Going to delete an existing file"); fs.unlink('input.txt', function(err) { if (err) { return console.error(err); } console.log("File deleted successfully!"); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to delete an existing file
File deleted successfully!

## Create a Directory

### Syntax

Following is the syntax of the method to create a directory −

fs.mkdir(path\[, mode\], callback)

### Parameters

Here is the description of the parameters used −

-   **path** − This is the directory name including path.
    
-   **mode** − This is the directory permission to be set. Defaults to 0777.
    
-   **callback** − This is the callback function No arguments other than a possible exception are given to the completion callback.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); console.log("Going to create directory /tmp/test"); fs.mkdir('/tmp/test',function(err) { if (err) { return console.error(err); } console.log("Directory created successfully!"); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to create directory /tmp/test
Directory created successfully!

## Read a Directory

### Syntax

Following is the syntax of the method to read a directory −

fs.readdir(path, callback)

### Parameters

Here is the description of the parameters used −

-   **path** − This is the directory name including path.
    
-   **callback** − This is the callback function which gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); console.log("Going to read directory /tmp"); fs.readdir("/tmp/",function(err, files) { if (err) { return console.error(err); } files.forEach( function (file) { console.log( file ); }); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to read directory /tmp
ccmzx99o.out
ccyCSbkF.out
employee.ser
hsperfdata\_apache
test
test.txt

## Remove a Directory

### Syntax

Following is the syntax of the method to remove a directory −

fs.rmdir(path, callback)

### Parameters

Here is the description of the parameters used −

-   **path** − This is the directory name including path.
    
-   **callback** − This is the callback function No arguments other than a possible exception are given to the completion callback.
    

### Example

Let us create a js file named **main.js** having the following code −

var fs \= require("fs"); console.log("Going to delete directory /tmp/test"); fs.rmdir("/tmp/test",function(err) { if (err) { return console.error(err); } console.log("Going to read directory /tmp"); fs.readdir("/tmp/",function(err, files) { if (err) { return console.error(err); } files.forEach( function (file) { console.log( file ); }); }); });

Now run the main.js to see the result −

$ node main.js

Verify the Output.

Going to read directory /tmp
ccmzx99o.out
ccyCSbkF.out
employee.ser
hsperfdata\_apache
test.txt

## Methods Reference

Following is a reference of File System module available in Node.js. For more detail you can refer to the official documentation.

Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.

## \_\_filename

The **\_\_filename** represents the filename of the code being executed. This is the resolved absolute path of this code file. For a main program, this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.

### Example

Create a js file named main.js with the following code −

// Let's try to print the value of \_\_filename console.log( \_\_filename );

Now run the main.js to see the result −

$ node main.js

Based on the location of your program, it will print the main file name as follows −

/web/com/1427091028\_21099/main.js

## \_\_dirname

The **\_\_dirname** represents the name of the directory that the currently executing script resides in.

### Example

Create a js file named main.js with the following code −

// Let's try to print the value of \_\_dirname console.log( \_\_dirname );

Now run the main.js to see the result −

$ node main.js

Based on the location of your program, it will print current directory name as follows −

/web/com/1427091028\_21099

## setTimeout(cb, ms)

The **setTimeout(cb, ms)** global function is used to run callback cb after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer.

### Example

Create a js file named main.js with the following code −

function printHello() { console.log( "Hello, World!"); } // Now call above function after 2 seconds setTimeout(printHello, 2000);

Now run the main.js to see the result −

$ node main.js

Verify the output is printed after a little delay.

Hello, World!

## clearTimeout(t)

The **clearTimeout(t)** global function is used to stop a timer that was previously created with setTimeout(). Here **t** is the timer returned by the setTimeout() function.

### Example

Create a js file named main.js with the following code −

function printHello() { console.log( "Hello, World!"); } // Now call above function after 2 seconds var t \= setTimeout(printHello, 2000); // Now clear the timer clearTimeout(t);

Now run the main.js to see the result −

$ node main.js

Verify the output where you will not find anything printed.

## setInterval(cb, ms)

The **setInterval(cb, ms)** global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer using the function **clearInterval(t)**.

### Example

Create a js file named main.js with the following code −

function printHello() { console.log( "Hello, World!"); } // Now call above function after 2 seconds setInterval(printHello, 2000);

Now run the main.js to see the result −

$ node main.js

The above program will execute printHello() after every 2 second. Due to system limitation.

## Global Objects

The following table provides a list of other objects which we use frequently in our applications. For a more detail, you can refer to the official documentation.

Sr.No.

Module Name & Description

1

[**Console**](https://www.tutorialspoint.com/nodejs/nodejs_console.htm)

Used to print information on stdout and stderr.

2

[**Process**](https://www.tutorialspoint.com/nodejs/nodejs_process.htm)

Used to get information on current process. Provides multiple events related to process activities.

There are several utility modules available in Node.js module library. These modules are very common and are frequently used while developing any Node based application.

Sr.No.

Module Name & Description

1

[OS Module](https://www.tutorialspoint.com/nodejs/nodejs_os_module.htm)

Provides basic operating-system related utility functions.

2

[Path Module](https://www.tutorialspoint.com/nodejs/nodejs_path_module.htm)

Provides utilities for handling and transforming file paths.

3

[Net Module](https://www.tutorialspoint.com/nodejs/nodejs_net_module.htm)

Provides both servers and clients as streams. Acts as a network wrapper.

4

[DNS Module](https://www.tutorialspoint.com/nodejs/nodejs_dns_module.htm)

Provides functions to do actual DNS lookup as well as to use underlying operating system name resolution functionalities.

5

[Domain Module](https://www.tutorialspoint.com/nodejs/nodejs_domain_module.htm)

Provides ways to handle multiple different I/O operations as a single group.

## What is a Web Server?

A Web Server is a software application which handles HTTP requests sent by the HTTP client, like web browsers, and returns web pages in response to the clients. Web servers usually deliver html documents along with images, style sheets, and scripts.

Most of the web servers support server-side scripts, using scripting languages or redirecting the task to an application server which retrieves data from a database and performs complex logic and then sends a result to the HTTP client through the Web server.

Apache web server is one of the most commonly used web servers. It is an open source project.

## Web Application Architecture

A Web application is usually divided into four layers −

![Web Architecture](https://www.tutorialspoint.com/nodejs/images/web_architecture.jpg)

-   **Client** − This layer consists of web browsers, mobile browsers or applications which can make HTTP requests to the web server.
    
-   **Server** − This layer has the Web server which can intercept the requests made by the clients and pass them the response.
    
-   **Business** − This layer contains the application server which is utilized by the web server to do the required processing. This layer interacts with the data layer via the database or some external programs.
    
-   **Data** − This layer contains the databases or any other source of data.
    

## Creating a Web Server using Node

Node.js provides an **http** module which can be used to create an HTTP client of a server. Following is the bare minimum structure of the HTTP server which listens at 8081 port.

Create a js file named server.js −

**File: server.js**

var http \= require('http'); var fs \= require('fs'); var url \= require('url'); // Create a server http.createServer( function (request, response) { // Parse the request containing file name var pathname \= url.parse(request.url).pathname; // Print the name of the file for which request is made. console.log("Request for " + pathname + " received."); // Read the requested file content from file system fs.readFile(pathname.substr(1), function (err, data) { if (err) { console.log(err); // HTTP Status: 404 : NOT FOUND // Content Type: text/plain response.writeHead(404, {'Content-Type': 'text/html'}); } else { //Page found // HTTP Status: 200 : OK // Content Type: text/plain response.writeHead(200, {'Content-Type': 'text/html'}); // Write the content of the file to response body response.write(data.toString()); } // Send the response body 
      response.end(); }); }).listen(8081); // Console will print the message console.log('Server running at http://127.0.0.1:8081/');

Next let's create the following html file named index.htm in the same directory where you created server.js.

**File: index.htm**

<html> <head> <title>Sample Page</title> </head> <body> Hello World! </body> </html>

Now let us run the server.js to see the result −

$ node server.js

Verify the Output.

Server running at http://127.0.0.1:8081/

## Make a request to Node.js server

Open http://127.0.0.1:8081/index.htm in any browser to see the following result.

![First Server Application](https://www.tutorialspoint.com/nodejs/images/nodejs_sample1.jpg)

Verify the Output at server end.

Server running at http://127.0.0.1:8081/
Request for /index.htm received.

## Creating Web client using Node

A web client can be created using **http** module. Let's check the following example.

Create a js file named client.js −

**File: client.js**

var http \= require('http'); // Options to be used by request var options \= { host: 'localhost', port: '8081', path: '/index.htm' }; // Callback function is used to deal with response var callback \= function(response) { // Continuously update stream with data var body \= ''; response.on('data', function(data) { body += data; }); response.on('end', function() { // Data received completely. console.log(body); }); } // Make a request to the server var req \= http.request(options, callback); req.end();

Now run the client.js from a different command terminal other than server.js to see the result −

$ node client.js

Verify the Output.

<html>
   <head>
      <title>Sample Page</title>
   </head>
   
   <body>
      Hello World!
   </body>
</html>

Verify the Output at server end.

Server running at http://127.0.0.1:8081/
Request for /index.htm received.

## Express Overview

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −

-   Allows to set up middlewares to respond to HTTP Requests.
    
-   Defines a routing table which is used to perform different actions based on HTTP Method and URL.
    
-   Allows to dynamically render HTML Pages based on passing arguments to templates.
    

## Installing Express

Firstly, install the Express framework globally using NPM so that it can be used to create a web application using node terminal.

$ npm install express --save

The above command saves the installation locally in the **node\_modules** directory and creates a directory express inside node\_modules. You should install the following important modules along with express −

-   **body-parser** − This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
    
-   **cookie-parser** − Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    
-   **multer** − This is a node.js middleware for handling multipart/form-data.
    

$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save

## Hello world Example

Following is a very basic Express app which starts a server and listens on port 8081 for connection. This app responds with **Hello World!** for requests to the homepage. For every other path, it will respond with a **404 Not Found.**

var express \= require('express'); var app \= express(); app.get('/', function (req, res) { res.send('Hello World'); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port) })

Save the above code in a file named server.js and run it with the following command.

$ node server.js

You will see the following output −

Example app listening at http://0.0.0.0:8081

Open http://127.0.0.1:8081/ in any browser to see the following result.

![First Application](https://www.tutorialspoint.com/nodejs/images/nodejs_sample.jpg)

## Request & Response

Express application uses a callback function whose parameters are **request** and **response** objects.

app.get('/', function (req, res) {
   // --
})

-   [Request Object](https://www.tutorialspoint.com/nodejs/nodejs_request_object.htm) − The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
    
-   [Response Object](https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm) − The response object represents the HTTP response that an Express app sends when it gets an HTTP request.
    

You can print **req** and **res** objects which provide a lot of information related to HTTP request and response including cookies, sessions, URL, etc.

## Basic Routing

We have seen a basic application which serves HTTP request for the homepage. Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

We will extend our Hello World program to handle more types of HTTP requests.

var express \= require('express'); var app \= express(); // This responds with "Hello World" on the homepage app.get('/', function (req, res) { console.log("Got a GET request for the homepage"); res.send('Hello GET'); }) // This responds a POST request for the homepage app.post('/', function (req, res) { console.log("Got a POST request for the homepage"); res.send('Hello POST'); }) // This responds a DELETE request for the /del\_user page. app.delete('/del\_user', function (req, res) { console.log("Got a DELETE request for /del\_user"); res.send('Hello DELETE'); }) // This responds a GET request for the /list\_user page. app.get('/list\_user', function (req, res) { console.log("Got a GET request for /list\_user"); res.send('Page Listing'); }) // This responds a GET request for abcd, abxcd, ab123cd, and so on app.get('/ab\*cd', function(req, res) { console.log("Got a GET request for /ab\*cd"); res.send('Page Pattern Match'); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port) })

Save the above code in a file named server.js and run it with the following command.

$ node server.js

You will see the following output −

Example app listening at http://0.0.0.0:8081

Now you can try different requests at http://127.0.0.1:8081 to see the output generated by server.js. Following are a few screens shots showing different responses for different URLs.

Screen showing again http://127.0.0.1:8081/list\_user

![Second Application](https://www.tutorialspoint.com/nodejs/images/nodejs_sample2.jpg)

Screen showing again http://127.0.0.1:8081/abcd

![Third Application](https://www.tutorialspoint.com/nodejs/images/nodejs_sample3.jpg)

Screen showing again http://127.0.0.1:8081/abcdefg

![Fourth Application](https://www.tutorialspoint.com/nodejs/images/nodejs_sample4.jpg)

## Serving Static Files

Express provides a built-in middleware **express.static** to serve static files, such as images, CSS, JavaScript, etc.

You simply need to pass the name of the directory where you keep your static assets, to the **express.static** middleware to start serving the files directly. For example, if you keep your images, CSS, and JavaScript files in a directory named public, you can do this −

app.use(express.static('public'));

We will keep a few images in **public/images** sub-directory as follows −

node\_modules
server.js
public/
public/images
public/images/logo.png

Let's modify "Hello Word" app to add the functionality to handle static files.

var express \= require('express'); var app \= express(); app.use(express.static('public')); app.get('/', function (req, res) { res.send('Hello World'); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port

   console.log("Example app listening at http://%s:%s", host, port) })

Save the above code in a file named server.js and run it with the following command.

$ node server.js

Now open http://127.0.0.1:8081/images/logo.png in any browser and see observe following result.

![Fifth Application](https://www.tutorialspoint.com/nodejs/images/nodejs_sample5.jpg)

## GET Method

Here is a simple example which passes two values using HTML FORM GET method. We are going to use **process\_get** router inside server.js to handle this input.

<html> <body> <form action \= "http://127.0.0.1:8081/process\_get" method \= "GET"\> First Name: <input type \= "text" name \= "first\_name"\> <br> Last Name: <input type \= "text" name \= "last\_name"\> <input type \= "submit" value \= "Submit"\> </form> </body> </html>

Let's save above code in index.htm and modify server.js to handle home page requests as well as the input sent by the HTML form.

var express \= require('express'); var app \= express(); app.use(express.static('public')); app.get('/index.htm', function (req, res) { res.sendFile( \_\_dirname + "/" + "index.htm" ); }) app.get('/process\_get', function (req, res) { // Prepare output in JSON format response \= { first\_name:req.query.first\_name, last\_name:req.query.last\_name }; console.log(response); res.end(JSON.stringify(response)); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port) })

Accessing the HTML document using _http://127.0.0.1:8081/index.htm_ will generate the following form −

Now you can enter the First and Last Name and then click submit button to see the result and it should return the following result −

{"first\_name":"John","last\_name":"Paul"}

## POST Method

Here is a simple example which passes two values using HTML FORM POST method. We are going to use **process\_get** router inside server.js to handle this input.

<html> <body> <form action \= "http://127.0.0.1:8081/process\_post" method \= "POST"\> First Name: <input type \= "text" name \= "first\_name"\> <br> Last Name: <input type \= "text" name \= "last\_name"\> <input type \= "submit" value \= "Submit"\> </form> </body> </html>

Let's save the above code in index.htm and modify server.js to handle home page requests as well as the input sent by the HTML form.

var express \= require('express'); var app \= express(); var bodyParser \= require('body-parser'); // Create application/x-www-form-urlencoded parser var urlencodedParser \= bodyParser.urlencoded({ extended: false }) app.use(express.static('public')); app.get('/index.htm', function (req, res) { res.sendFile( \_\_dirname + "/" + "index.htm" ); }) app.post('/process\_post', urlencodedParser, function (req, res) { // Prepare output in JSON format response \= { first\_name:req.body.first\_name, last\_name:req.body.last\_name }; console.log(response); res.end(JSON.stringify(response)); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port) })

Accessing the HTML document using _http://127.0.0.1:8081/index.htm_ will generate the following form −

Now you can enter the First and Last Name and then click the submit button to see the following result −

{"first\_name":"John","last\_name":"Paul"}

## File Upload

The following HTML code creates a file uploader form. This form has method attribute set to **POST** and enctype attribute is set to **multipart/form-data**

<html> <head> <title>File Uploading Form</title> </head> <body> <h3>File Upload:</h3> Select a file to upload: <br /> <form action \= "http://127.0.0.1:8081/file\_upload" method \= "POST" enctype \= "multipart/form-data"\> <input type\="file" name\="file" size\="50" /> <br /> <input type \= "submit" value \= "Upload File" /> </form> </body> </html>

Let's save above code in index.htm and modify server.js to handle home page requests as well as file upload.

var express \= require('express'); var app \= express(); var fs \= require("fs"); var bodyParser \= require('body-parser'); var multer \= require('multer'); app.use(express.static('public')); app.use(bodyParser.urlencoded({ extended: false })); app.use(multer({ dest: '/tmp/'})); app.get('/index.htm', function (req, res) { res.sendFile( \_\_dirname + "/" + "index.htm" ); }) app.post('/file\_upload', function (req, res) { console.log(req.files.file.name); console.log(req.files.file.path); console.log(req.files.file.type); var file \= \_\_dirname + "/" + req.files.file.name; fs.readFile( req.files.file.path, function (err, data) { fs.writeFile(file, data, function (err) { if( err ) { console.log( err ); } else { response \= { message:'File uploaded successfully', filename:req.files.file.name }; } console.log( response ); res.end( JSON.stringify( response ) ); }); }); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port) })

Accessing the HTML document using _http://127.0.0.1:8081/index.htm_ will generate the following form −

**File Upload:**
Select a file to upload:   

  

NOTE: This is just dummy form and would not work, but it must work at your server.

## Cookies Management

You can send cookies to a Node.js server which can handle the same using the following middleware option. Following is a simple example to print all the cookies sent by the client.

var express \= require('express') var cookieParser \= require('cookie-parser') var app \= express() app.use(cookieParser()) app.get('/', function(req, res) { console.log("Cookies: ", req.cookies) }) app.listen(8081)

## What is REST architecture?

REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods. REST was first introduced by Roy Fielding in 2000.

A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular one.

## HTTP methods

Following four HTTP methods are commonly used in REST based architecture.

-   **GET** − This is used to provide a read only access to a resource.
    
-   **PUT** − This is used to create a new resource.
    
-   **DELETE** − This is used to remove a resource.
    
-   **POST** − This is used to update a existing resource or create a new resource.
    

## RESTful Web Services

A web service is a collection of open protocols and standards used for exchanging data between applications or systems. Software applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the Internet in a manner similar to inter-process communication on a single computer. This interoperability (e.g., communication between Java and Python, or Windows and Linux applications) is due to the use of open standards.

Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods.

## Creating RESTful for A Library

Consider we have a JSON based database of users having the following users in a file **users.json**:

{ "user1" : { "name" : "mahesh", "password" : "password1", "profession" : "teacher", "id": 1 }, "user2" : { "name" : "suresh", "password" : "password2", "profession" : "librarian", "id": 2 }, "user3" : { "name" : "ramesh", "password" : "password3", "profession" : "clerk", "id": 3 } }

Based on this information we are going to provide following RESTful APIs.

Sr.No.

URI

HTTP Method

POST body

Result

1

listUsers

GET

empty

Show list of all the users.

2

addUser

POST

JSON String

Add details of new user.

3

deleteUser

DELETE

JSON String

Delete an existing user.

4

:id

GET

empty

Show details of a user.

I'm keeping most of the part of all the examples in the form of hard coding assuming you already know how to pass values from front end using Ajax or simple form data and how to process them using express **Request** object.

## List Users

Let's implement our first RESTful API **listUsers** using the following code in a server.js file −

_server.js_

var express \= require('express'); var app \= express(); var fs \= require("fs"); app.get('/listUsers', function (req, res) { fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data) { console.log( data ); res.end( data ); }); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   console.log("Example app listening at http://%s:%s", host, port) })

Now try to access defined API using _URL: http://127.0.0.1:8081/listUsers_ and _HTTP Method : GET_ on local machine using any REST client. This should produce following result −

You can change given IP address when you will put the solution in production environment.

{ "user1" : { "name" : "mahesh", "password" : "password1", "profession" : "teacher", "id": 1 }, "user2" : { "name" : "suresh", "password" : "password2", "profession" : "librarian", "id": 2 }, "user3" : { "name" : "ramesh", "password" : "password3", "profession" : "clerk", "id": 3 } }

## Add User

Following API will show you how to add new user in the list. Following is the detail of the new user −

user \= { "user4" : { "name" : "mohit", "password" : "password4", "profession" : "teacher", "id": 4 } }

You can accept the same input in the form of JSON using Ajax call but for teaching point of view, we are making it hard coded here. Following is the **addUser** API to a new user in the database −

_server.js_

var express \= require('express'); var app \= express(); var fs \= require("fs"); var user \= { "user4" : { "name" : "mohit", "password" : "password4", "profession" : "teacher", "id": 4 } } app.post('/addUser', function (req, res) { // First read existing users. fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data) { data \= JSON.parse( data ); data\["user4"\] \= user\["user4"\]; console.log( data ); res.end( JSON.stringify(data)); }); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   console.log("Example app listening at http://%s:%s", host, port) })

Now try to access defined API using _URL: http://127.0.0.1:8081/addUser_ and _HTTP Method : POST_ on local machine using any REST client. This should produce following result −

{ "user1":{"name":"mahesh","password":"password1","profession":"teacher","id":1}, "user2":{"name":"suresh","password":"password2","profession":"librarian","id":2}, "user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3}, "user4":{"name":"mohit","password":"password4","profession":"teacher","id":4} }

## Show Detail

Now we will implement an API which will be called using user ID and it will display the detail of the corresponding user.

_server.js_

var express \= require('express'); var app \= express(); var fs \= require("fs"); app.get('/:id', function (req, res) { // First read existing users. fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data) { var users \= JSON.parse( data ); var user \= users\["user" + req.params.id\] console.log( user ); res.end( JSON.stringify(user)); }); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   console.log("Example app listening at http://%s:%s", host, port) })

Now try to access defined API using _URL: http://127.0.0.1:8081/2_ and _HTTP Method : GET_ on local machine using any REST client. This should produce following result −

{"name":"suresh","password":"password2","profession":"librarian","id":2}

## Delete User

This API is very similar to addUser API where we receive input data through req.body and then based on user ID we delete that user from the database. To keep our program simple we assume we are going to delete user with ID 2.

**server.js**

var express \= require('express'); var app \= express(); var fs \= require("fs"); var id \= 2; app.delete('/deleteUser', function (req, res) { // First read existing users. fs.readFile( \_\_dirname + "/" + "users.json", 'utf8', function (err, data) { data \= JSON.parse( data ); delete data\["user" + 2\]; console.log( data ); res.end( JSON.stringify(data)); }); }) var server \= app.listen(8081, function () { var host \= server.address().address var port \= server.address().port
   console.log("Example app listening at http://%s:%s", host, port) })

Now try to access defined API using _URL: http://127.0.0.1:8081/deleteUser_ and _HTTP Method : DELETE_ on local machine using any REST client. This should produce following result −

{"user1":{"name":"mahesh","password":"password1","profession":"teacher","id":1},
"user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3}}

Node.js runs in a single-thread mode, but it uses an event-driven paradigm to handle concurrency. It also facilitates creation of child processes to leverage parallel processing on multi-core CPU based systems.

Child processes always have three streams **child.stdin**, **child.stdout**, and **child.stderr** which may be shared with the stdio streams of the parent process.

Node provides **child\_process** module which has the following three major ways to create a child process.

-   **exec** − child\_process.exec method runs a command in a shell/console and buffers the output.
    
-   **spawn** − child\_process.spawn launches a new process with a given command.
    
-   **fork** − The child\_process.fork method is a special case of the spawn() to create child processes.
    

## The exec() method

child\_process.exec method runs a command in a shell and buffers the output. It has the following signature −

child\_process.exec(command\[, options\], callback)

### Parameters

Here is the description of the parameters used −

-   **command** (String) The command to run, with space-separated arguments
    
-   **options** (Object) may comprise one or more of the following options −
    
    -   **cwd** (String) Current working directory of the child process
        
    -   **env** (Object) Environment key-value pairs
        
    -   **encoding** (String) (Default: 'utf8')
        
    -   **shell** (String) Shell to execute the command with (Default: '/bin/sh' on UNIX, 'cmd.exe' on Windows, The shell should understand the -c switch on UNIX or /s /c on Windows. On Windows, command line parsing should be compatible with cmd.exe.)
        
    -   **timeout** (Number) (Default: 0)
        
    -   **maxBuffer** (Number) (Default: 200\*1024)
        
    -   **killSignal** (String) (Default: 'SIGTERM')
        
    -   **uid** (Number) Sets the user identity of the process.
        
    -   **gid** (Number) Sets the group identity of the process.
        
-   **callback** The function gets three arguments **error**, **stdout,** and **stderr** which are called with the output when the process terminates.
    

The exec() method returns a buffer with a max size and waits for the process to end and tries to return all the buffered data at once.

## Example

Let us create two js files named support.js and master.js −

**File: support.js**

console.log("Child Process " + process.argv\[2\] + " executed." );

**File: master.js**

const fs \= require('fs'); const child\_process \= require('child\_process'); for(var i\=0; i<3; i++) { var workerProcess \= child\_process.exec('node support.js '+i,function (error, stdout, stderr) { if (error) { console.log(error.stack); console.log('Error code: '+error.code); console.log('Signal received: '+error.signal); } console.log('stdout: ' + stdout); console.log('stderr: ' + stderr); }); workerProcess.on('exit', function (code) { console.log('Child process exited with exit code '+code); }); }

Now run the master.js to see the result −

$ node master.js

Verify the Output. Server has started.

Child process exited with exit code 0
stdout: Child Process 1 executed.

stderr:
Child process exited with exit code 0
stdout: Child Process 0 executed.

stderr:
Child process exited with exit code 0
stdout: Child Process 2 executed.

## The spawn() Method

child\_process.spawn method launches a new process with a given command. It has the following signature −

child\_process.spawn(command\[, args\]\[, options\])

### Parameters

Here is the description of the parameters used −

-   **command** (String) The command to run
    
-   **args** (Array) List of string arguments
    
-   **options** (Object) may comprise one or more of the following options −
    
    -   **cwd** (String) Current working directory of the child process.
        
    -   **env** (Object) Environment key-value pairs.
        
    -   **stdio** (Array) String Child's stdio configuration.
        
    -   **customFds** (Array) Deprecated File descriptors for the child to use for stdio.
        
    -   **detached** (Boolean) The child will be a process group leader.
        
    -   **uid** (Number) Sets the user identity of the process.
        
    -   **gid** (Number) Sets the group identity of the process.
        

The spawn() method returns streams (stdout &stderr) and it should be used when the process returns a volume amount of data. spawn() starts receiving the response as soon as the process starts executing.

## Example

Create two js files named support.js and master.js −

**File: support.js**

console.log("Child Process " + process.argv\[2\] + " executed." );

**File: master.js**

const fs \= require('fs'); const child\_process \= require('child\_process'); for(var i \= 0; i<3; i++) { var workerProcess \= child\_process.spawn('node', \['support.js', i\]); workerProcess.stdout.on('data', function (data) { console.log('stdout: ' + data); }); workerProcess.stderr.on('data', function (data) { console.log('stderr: ' + data); }); workerProcess.on('close', function (code) { console.log('child process exited with code ' + code); }); }

Now run the master.js to see the result −

$ node master.js

Verify the Output. Server has started

stdout: Child Process 0 executed.

child process exited with code 0
stdout: Child Process 1 executed.

stdout: Child Process 2 executed.

child process exited with code 0
child process exited with code 0

## The fork() Method

child\_process.fork method is a special case of spawn() to create Node processes. It has the following signature −

child\_process.fork(modulePath\[, args\]\[, options\])

### Parameters

Here is the description of the parameters used −

-   **modulePath** (String) The module to run in the child.
    
-   **args** (Array) List of string arguments
    
-   **options** (Object) may comprise one or more of the following options −
    
    -   **cwd** (String) Current working directory of the child process.
        
    -   **env** (Object) Environment key-value pairs.
        
    -   **execPath** (String) Executable used to create the child process.
        
    -   **execArgv** (Array) List of string arguments passed to the executable (Default: process.execArgv).
        
    -   **silent** (Boolean) If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit" options for spawn()'s stdio for more details (default is false).
        
    -   **uid** (Number) Sets the user identity of the process.
        
    -   **gid** (Number) Sets the group identity of the process.
        

The fork method returns an object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.

## Example

Create two js files named support.js and master.js −

**File: support.js**

console.log("Child Process " + process.argv\[2\] + " executed." );

**File: master.js**

const fs \= require('fs'); const child\_process \= require('child\_process'); for(var i\=0; i<3; i++) { var worker\_process \= child\_process.fork("support.js", \[i\]); worker\_process.on('close', function (code) { console.log('child process exited with code ' + code); }); }

Now run the master.js to see the result −

$ node master.js

Verify the Output. Server has started.

Child Process 0 executed.
Child Process 1 executed.
Child Process 2 executed.
child process exited with code 0
child process exited with code 0
child process exited with code 0

**JXcore,** which is an open source project, introduces a unique feature for packaging and encryption of source files and other assets into JX packages.

Consider you have a large project consisting of many files. JXcore can pack them all into a single file to simplify the distribution. This chapter provides a quick overview of the whole process starting from installing JXcore.

## JXcore Installation

Installing JXcore is quite simple. Here we have provided step-by-step instructions on how to install JXcore on your system. Follow the steps given below −

### Step 1

Download the JXcore package from [https://github.com/jxcore/jxcore](https://github.com/jxcore/jxcore), as per your operating system and machine architecture. We downloaded a package for Cenots running on 64-bit machine.

$ wget https://s3.amazonaws.com/nodejx/jx\_rh64.zip

### Step 2

Unpack the downloaded file **jx\_rh64.zip**and copy the jx binary into /usr/bin or may be in any other directory based on your system setup.

$ unzip jx\_rh64.zip
$ cp jx\_rh64/jx /usr/bin

### Step 3

Set your PATH variable appropriately to run jx from anywhere you like.

$ export PATH=$PATH:/usr/bin

### Step 4

You can verify your installation by issuing a simple command as shown below. You should find it working and printing its version number as follows −

$ jx --version
v0.10.32

## Packaging the Code

Consider you have a project with the following directories where you kept all your files including Node.js, main file, index.js, and all the modules installed locally.

drwxr-xr-x  2 root root  4096 Nov 13 12:42 images
-rwxr-xr-x  1 root root 30457 Mar  6 12:19 index.htm
-rwxr-xr-x  1 root root 30452 Mar  1 12:54 index.js
drwxr-xr-x 23 root root  4096 Jan 15 03:48 node\_modules
drwxr-xr-x  2 root root  4096 Mar 21 06:10 scripts
drwxr-xr-x  2 root root  4096 Feb 15 11:56 style

To package the above project, you simply need to go inside this directory and issue the following jx command. Assuming index.js is the entry file for your Node.js project −

$ jx package index.js index

Here you could have used any other package name instead of **index.** We have used **index** because we wanted to keep our main file name as index.jx. However, the above command will pack everything and will create the following two files −

-   **index.jxp** This is an intermediate file which contains the complete project detail needed to compile the project.
    
-   **index.jx** This is the binary file having the complete package that is ready to be shipped to your client or to your production environment.
    

## Launching JX File

Consider your original Node.js project was running as follows −

$ node index.js command\_line\_arguments

After compiling your package using JXcore, it can be started as follows −

$ jx index.jx command\_line\_arguments

To know more on JXcore, you can check its official website.
