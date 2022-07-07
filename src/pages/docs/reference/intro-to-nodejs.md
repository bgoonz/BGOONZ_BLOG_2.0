---
title: Intro To NodeJS
weight: 0
excerpt: A Node.js app runs in a single process, without creating a new thread for every request.
seo:
    title: ''
    description: 'Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!'
    robots: []
    extra: []
template: docs
---

## Enter the NodeJS

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.

## [](https://nodejs.dev/learn#a-vast-number-of-libraries)A Vast Number of Libraries

npm with its simple structure helped the ecosystem of Node.js proliferate, and now the npm registry hosts over 1,000,000 open source packages you can freely use.

## [](https://nodejs.dev/learn#an-example-nodejs-application)An Example Node.js Application

The most common example Hello World of Node.js is a web server:

This code first includes the Node.js [`http` module](https://nodejs.org/api/http.html).

Node.js has a fantastic [standard library](https://nodejs.org/api/), including first-class support for networking.

The `createServer()` method of `http` creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the [`request` event](https://nodejs.org/api/http.html#http_event_request) is called, providing two objects: a request (an [`http.IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) object) and a response (an [`http.ServerResponse`](https://nodejs.org/api/http.html#http_class_http_serverresponse) object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

In this case with:

JScopy

res.statusCode = 200

we set the statusCode property to 200, to indicate a successful response.

We set the Content-Type header:

JScopy

res.setHeader('Content-Type', 'text/plain')

and we close the response, adding the content as an argument to `end()`:

JScopy

res.end('Hello World\n')

## [](https://nodejs.dev/learn#nodejs-frameworks-and-tools)Node.js Frameworks and Tools

Node.js is a low-level platform. In order to make things easy and exciting for developers, thousands of libraries were built upon Node.js by the community.

Many of those established over time as popular options. Here is a non-comprehensive list of the ones worth learning:

-   [**AdonisJS**](https://adonisjs.com/): A TypeScript-based fully featured framework highly focused on developer ergonomics, stability, and confidence. Adonis is one of the fastest Node.js web frameworks.
-   [**Egg.js**](https://eggjs.org/en/): A framework to build better enterprise frameworks and apps with Node.js & Koa.
-   [**Express**](https://expressjs.com/): It provides one of the most simple yet powerful ways to create a web server. Its minimalist approach, unopinionated, focused on the core features of a server, is key to its success.
-   [**Fastify**](https://fastify.io/): A web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. Fastify is one of the fastest Node.js web frameworks.
-   [**FeatherJS**](https://feathersjs.com/): Feathers is a lightweight web-framework for creating real-time applications and REST APIs using JavaScript or TypeScript. Build prototypes in minutes and production-ready apps in days.
-   [**Gatsby**](https://www.gatsbyjs.com/): A [React](https://reactjs.org/)-based, [GraphQL](https://graphql.org/) powered, static site generator with a very rich ecosystem of plugins and starters.
-   [**hapi**](https://hapijs.com/): A rich framework for building applications and services that enables developers to focus on writing reusable application logic instead of spending time building infrastructure.
-   [**koa**](http://koajs.com/): It is built by the same team behind Express, aims to be even simpler and smaller, building on top of years of knowledge. The new project born out of the need to create incompatible changes without disrupting the existing community.
-   [**Loopback.io**](https://loopback.io/): Makes it easy to build modern applications that require complex integrations.
-   [**Meteor**](https://meteor.com/): An incredibly powerful full-stack framework, powering you with an isomorphic approach to building apps with JavaScript, sharing code on the client and the server. Once an off-the-shelf tool that provided everything, now integrates with frontend libs [React](https://reactjs.org/), [Vue](https://vuejs.org/), and [Angular](https://angular.io/). Can be used to create mobile apps as well.
-   [**Micro**](https://github.com/zeit/micro): It provides a very lightweight server to create asynchronous HTTP microservices.
-   [**NestJS**](https://nestjs.com/): A TypeScript based progressive Node.js framework for building enterprise-grade efficient, reliable and scalable server-side applications.
-   [**Next.js**](https://nextjs.org/): [React](https://reactjs.org/) framework that gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
-   [**Nx**](https://nx.dev/): A toolkit for full-stack monorepo development using NestJS, Express, [React](https://reactjs.org/), [Angular](https://angular.io/), and more! Nx helps scale your development from one team building one application to many teams collaborating on multiple applications!
-   [**Sapper**](https://sapper.svelte.dev/): Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. Offers SSR and more!
-   [**Socket.io**](https://socket.io/): A real-time communication engine to build network applications.
-   [**Strapi**](https://strapi.io/): Strapi is a flexible, open-source Headless CMS that gives developers the freedom to choose their favorite tools and frameworks while also allowing editors to easily manage and distribute their content. By making the admin panel and API extensible through a plugin system, Strapi enables the world's largest companies to accelerate content delivery while building beautiful digital experiences.

# Extended Version:

<iframe src="https://codesandbox.io/embed/nodejs-examples-4ohjz?autoresize=1&expanddevtools=1&fontsize=13&hidenavigation=1&theme=light&view=editor"
     style="width:100%; height:400px; border:2; border-radius: 15px; overflow:auto;resize:both;"
     title="nodejs-examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

# Introduction to JavaScript

JavaScript is dynamically typed single-threaded interpreted languages for the Web. That means if you are doing web development, you can use this language to perform some operating on the web page, like running some JavaScript code when a button is clicked by the user.

JavaScript is a dynamically typed language which means a variable can hold any data type like String or Number in its lifetime and JavaScript interpreter won't complain about it. It's single-threaded which means your JavaScript code runs synchronously or sequentially line by line. It's interpreted which means you don't need to compile your JavaScript code.

JavaScript is interactive, which means you can directly feed JavaScript code to the interpreter and it will be executed immediately. You can try this by opening [DevTools](https://developers.google.com/web/tools/chrome-devtools/) in the browser (_in Chrome, press _`*command** + **option** + **i*`) or right-click anywhere on the page and click inspect. Then go to the console tab, here you can type any valid JavaScript code and press enter to run it. Use `shift + enter` to add a new-line in your code.

![](https://miro.medium.com/max/675/1*iSdHW-r4lmJ41vrpm_0lxQ.png)

(interacting with JavaScript interpreter)

Every browser ships a JavaScript Interpreter also called a JavaScript Engine. [V8](https://v8.dev/) is the JavaScript engine designed by Google and used in the Google Chrome browser while [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) is a JavaScript engine developed by Mozilla for their Firefox browser.

Since JavaScript engine designed by every browser is different, [ECMA](https://en.wikipedia.org/wiki/Ecma_International) standardizes features of JavaScript. This standard is known as [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) (_pronounced as ek-ma-script_). Whenever ECMA adds a feature to this JavaScript standard, the browser has to add it in their JavaScript engine to stay in the competition (_though this process is very slow_).

JavaScript is a very easy language to learn and fun to write. Every year, new features are added to ECMAScript which brings JavaScript one more step closer to dominate the planet. The latest major revision of JavaScript is [ES6](http://es6-features.org/) or ECMAScript 6 or ECMAScript 2015 which has dumped a ton of features to make it more fun to code in. At the moment, JavaScript supports the OOP paradigm very well and can be used in functional programming as well.

[Mozilla](https://en.wikipedia.org/wiki/Mozilla) is an open-source foundation that documents JavaScript very well on their developer documentation AKA [Mozilla Developer Network](https://developer.mozilla.org/en-US/) or [MDN](https://developer.mozilla.org/en-US/). It is one of the top online destinations to learn JavaScript, though there are other online resources as well. If you want to take a look at the JavaScript specifications and learn simple tutorials, visit [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

JavaScript is sometimes abbreviated as JS or .js/.JS (_dot J S_) to state that an entity is related to JavaScript, like Node.js or ReactJS or AngularJS. But in no ways, JavaScript is related to Java, or so you think 👻. If you need a history lesson about JavaScript and its evolution, watch this amazing video.

<https://www.youtube.com/watch?v=Sh6lK57Cuk4>

Assuming that you are familiar with JavaScript and gained a good amount of knowledge, we can move forward. But if you don't know JavaScript at all, learn basic JavaScript from the MDN documentation I explained earlier. Because learning about Node.js without knowledge of JavaScript is like understanding web development without HTML.

# What is server-side JavaScript?

JavaScript is a single-threaded language, it knows how to get things done one at a time. It can't do asynchronous tasks or run JavaScript code in multiple threads for efficiency. It just knows about JavaScript as defined in ECMAScript specification and nothing more.

Since JavaScript is used on the web, it needs to be secure. Hence, using JavaScript, you can't access the computer it is running on, like File System, IO, Networking, etc. and neither ECMAScript has specifications for that.

So it is up to the browser vendors to extend JavaScript engine with APIs that can do other things. For example, DOM API is responsible to print an HTML code into actual pixels on the screen, I have explained this process in [my Medium article](https://itnext.io/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969?source=your_stories_page---------------------------). Also, the [XMLHttpRequest](https://javascript.info/xmlhttprequest) API gives us the ability to send network requests to fetch data from a remote server in the background.

These sorts of APIs are responsible to perform other operations that JavaScript is not designed to perform. These APIs are provided by the browser and they are called [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API). These APIs are written in some Low-Level languages like C or C++ but their interface is made available through JavaScript.

These Web APIs sometimes do their job in separate thread allowing other JavaScript code to run normally while the job is running in the background. Once the job is done, it then informs the main JavaScript thread.

> So through JavaScript, you are executing C++ code and returning result back to the JavaScript, that doesn't sound so difficult.

For example, `[setTimeout(callback, delay)](https://www.w3schools.com/jsref/met_win_settimeout.asp)` function is not part of ECMAScript specification, it is provided by the browser to perform an asynchronous operation. The `callback` function is executed in the main JavaScript thread once `delay` milliseconds has elapsed.

![](https://miro.medium.com/max/20/1*Lyq6NipNFEgLwjXs0-BDgA.png?q=20)

![](https://miro.medium.com/max/473/1*Lyq6NipNFEgLwjXs0-BDgA.png)

(an oversimplification of how JavaScript runs in a browser)

So far we know that JavaScript is essential in a browser. But if you think about JavaScript engine alone, it can exist anywhere. You can take the V8 JavaScript engine and install it on your computer (_let's call it as a server_). With some fiddling, you can feed JavaScript code to it and it will run that code for you and may return the result. In theory, it looks pretty simple.

The concept of server-side JavaScript comes from this simple idea. You can take any JavaScript engine, wrap inside an application that gives a clean interface to take the user's JavaScript code and execute it in the JavaScript engine. You can also provide APIs to perform operations like File System IO, Networking, etc. which do not run on JavaScript engine.

![](https://miro.medium.com/max/20/1*i1b-kgRTc9KPvHjvBifoyA.png?q=20)

![](https://miro.medium.com/max/473/1*i1b-kgRTc9KPvHjvBifoyA.png)

(an oversimplification of how JavaScript runs on a server)

[Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) took this idea and made Node.js.

> To understand more about how a JavaScript engine works in a browser, you should read my article on [How JavaScript engine works in browser and Node](https://itnext.io/how-javascript-works-in-browser-and-node-ab7d0d09ac2f). This article also explain concept of Web APIs in depth.

# How Node.js works?

Sometimes, Node.js is also called simply Node or node.

Node.js is a framework that contains the V8 JavaScript engine, the standard library of packages, and some binaries. In reality, it is more complex than that as explained in the below diagram (_follow the link for more details_).

![](https://miro.medium.com/max/405/1*iTdvBPVxYZdJZQKsP3yILw.jpeg)

(Source: [Stackoverflow](https://stackoverflow.com/questions/36766696/which-is-correct-node-js-architecture))

Like Web APIs in the browser, Node.js has a standard library that contains JavaScript packages (_we will learn about packages later_) which may also provide an interface to low-level APIs. For example, Node.js comes with `fs` package which contains `readFile` function among many. This function reads the file on the disk of the machine and returns file content back.

Most of these packages contain code written in a low-level programming language to communicate with the device, like for file system access. These packages export JavaScript functions and other types to run this code. Since JavaScript can not talk to C++ or some other language, Node.js has to create a binding to facilitate this communication. The process to create such packages is very tricky, but it is explained [here](https://medium.com/the-node-js-collection/native-extensions-for-node-js-767e221b3d26) in-depth.

Node.js uses different threads to perform low-level non-JavaScript time-taking operations. This way, our JavaScript is not blocked while a time taking operation like reading a file is in progress. Since these operations are running in the background once initiated, we need a confirmation or a callback when the operation is finished. This callback is a JavaScript function that will execute as soon as the operation is finished.

const fs = require('fs'); // fs is built-in packagefs.readFile('/path/to/file.txt', function(error, data){\
 // if error is not empty, show error log\
 // read data and do something with it\
});

The Node.js architecture is very complex and made of different parts as seen in the earlier diagram. It also contains an event loop that facilitates the execution of these callback functions. You should watch the below video on the event loop, though it is in the context of the browser but things are pretty similar in Node.js as well. This will clear your remaining doubts.

# Installing Node.js

You should install Node.js from their official website at [nodejs.org](https://nodejs.org/en/). If you are using Windows, Mac OS, or Linux, you can get precompiled binaries and installers. The best way to go is by using an installer.

When you install Node.js, you get `node` and `npm` binaries added to your path. That means, now you can use `node` and `npm` command. We will talk about `npm` later, but for now, let's focus on the `node`.

![](https://miro.medium.com/max/459/1*jjZ-5MLgkPDNd-6j6x52rQ.png)

Using `-v` or `--version` flag, we can check the version of the Node installed. The latest node will have the latest V8 engine, hence latest JavaScript features. If you need the flexibility to change Node version at any given time, in that case, you should not install Node.js using above method. Instead, you should use Node Version Manager or [NVM](https://github.com/nvm-sh/nvm).

> [Here](https://nodejs.org/en/download/releases/) is the list of Node.js releases with V8 engine versions.

Like we saw in DevTools of the browser, using the simple command `node` will open a JavaScript interpreter in the terminal. This way we can run some simple JavaScript code to amuse yourself.

![](https://miro.medium.com/max/20/1*yfvMB7k2KBIylz_ISFUL-Q.png?q=20)

![](https://miro.medium.com/max/459/1*yfvMB7k2KBIylz_ISFUL-Q.png)

(node interpreter)

# Running JavaScript code with Node.js

Now that we have a good understanding of what Node.js is and how JavaScript engine works, we can start messing with it.

Using an interpreter we can perform some basic arithmetics and other basic stuff. But most of the time, your actual JavaScript code will be in a `.js` file. Instead of giving one line at a time to the interpreter, we need to give whole file content at once. We can do that by using `node /path/to/file.js` command.

![](https://miro.medium.com/max/675/1*UdmQcaaaqcGtbzgWUFtE2A.png)

([hello-world.js](https://github.com/course-one/node-js-introduction/blob/master/hello-world.js))

In the above example, we have created `hello-world.js` file and it contains `hello` function. This function is executed after it was defined in the same file. Using the terminal, we executed `node ./hello-world.js` command. `node` will pick up `hello-world.js` file from the directory where the terminal is opened and run it using the V8 JavaScript engine.

Since `node` can only execute `.js` files, adding `.js` extension to the file path is optional. If we provide a directory path instead of file path to `node`, Node.js will try to resolve `index.js` file inside that directory.

![](https://miro.medium.com/max/675/1*J1cd4WNICvBUcuDpUfvecA.png)

(executing index.js in the current directory with Node)

# Importing scripts in the program

Normally our application is broken down to different parts. For example, if a set of functions are used over and over, we would like them to be contained in a separate file and import that file wherever those functions are to be used.

Node.js supports this functionality natively. When you import a file inside another file, that file is called a module. Node.js uses the CommonJS module system syntax to import modules and packages.

> Though [ES6+](https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da) supports new module system, it is yet to be implemented in Node.

Let's create a `lib` directory and place `math.js` file inside it. This file contains some common math functions like `add` and `multiply`. We will import this file inside `calculate.js` file situated in the main directory. Hence `math.js` is a module, since we are importing it and not executing it directly with Node.

To import a module, we need to use `require` function provided by the Node.js and available globally everywhere in the program. This function takes a relative or an absolute path of the module file and returns what module is exporting. Hence, we need to save it inside a variable.

// calculate.js\
var math = require( './lib/math.js' ); // `.js` is optional

> `require()` statement sometimes also called as import statement.

Now let's take a look at `math.js` file. We need to provide AKA export some values to the `require()` function call. This is done using `exports` variable. This variable is also globally available everywhere.

This variable is actually an object which is empty `{}` at the beginning. When we import this module using `require` function, this is the object `require()` call will return.

// calculate.js\
var math = require( './lib/math' );console.log(math); // {}

Since we know that `exports` is an object that will be exported from the module, we can stuff it with whatever we want. As objects go, an object is a collection of key-value pairs. So let's add some math functions to it.

// lib/math.js// add `add` function to `exports`\
exports.add = function( num1, num2 ) {\
 return num1 + num2\
};

From `math` module, we are exporting `add` function which returns the sum of the two numbers (_arguments_). Let's see what `math` variable looks like.

// calculate.js\
var math = require( './lib/math' );console.log(math);\
{ add: [Function] }

It shows that `math` variable is an object that contains `add` key which has a `Function` value. Let's execute that function and see the result.

// calculate.js\
var math = require( './lib/math' );// add 1 + 2\
var result = math.add(1, 2);\
console.log( result ); // 3

## What the heck is module.exports then?

I kind of skipped over this part so that you can understand module import with ease. I have a simple question, what if my `math` module exports only one function like `add` but I don't want to export it inside an object. This is the only function my module is exporting, so I want `require()` call to return this function only so that I can start using it like below.

// calculate.js\
var math = require( './lib/math' );// add 1 + 2\
var result = math(1, 2); // math is a function\
console.log( result ); // 3

This is where `module` global variable comes into the picture. Like `exports`, `module` is also globally available everywhere. `module` is an object and it contains information about module (_auto injected by Node.js in key-value pairs_). The important key in this object we should know about is `exports`.

`exports` variable inside a module points to `exports` property on the `module` object, as you can prove in the below test.

// lib/math.js\
console.log(exports === module.exports); // true

That means when we were setting `exports.add`, we were actually setting `module.exports.add`. So if we want our module to export only one function, we can just assign `module.exports` to that function.

> We could say that since `exports` and `module.exports` is the same, why not just set `exports` to the function. The reason is how objects are handled in JavaScript. Read [this answer](https://stackoverflow.com/a/16383925) to explore this topic in details.

// lib/math.js// export function only\
module.exports = function( num1, num2 ) {\
 return num1 + num2\
};

If your module import path is a directory, then `require` function will resolve `index.js` file inside it. Using this feature, you can have multiple .`js` files in a directory that contains different exports and you can import them inside `index.js` to exports them again from a single point.

└── lib/\
 ├── index.js (import `math` and `graph` and export them)\
 ├── math.js\
 └── graph.js

This way, the importer does not need to target individual module files in a directory. The importer can just point to `index.js` file.

// lib/math.js\
exports.add = function( num1, num2 ) {\
 return num1 + num2\
};// lib/index.js\
var math = require('./math');\
exports.add = math.add\
// calculate.js\
const lib = require('./lib'); // points to './lib/index.js'\
lib.add(1, 2) // 3

In Node.js, a module or a package is loaded only once (_per thread or session_) even when you `require()` them multiple times in the program. Once loaded, it will be cached by the Node for performance enhancement.

There are other tricks with CommonJS module system and sometimes we also need to be careful. Read [this article](https://www.sitepoint.com/understanding-module-exports-exports-node-js/) to understand more about imports.

# Packages in Node.js

A package is nothing but a directory that contains a bunch of modules. Like for example `lib` in our previous example can be called a package but not quite yet. The most important feature about a node package is that, from anywhere in the program, we should be able to import it, without providing a relative or an absolute path.

Well, that sounds absurd. If our `.js` files are nested, the import path will also change. Let's say that, we have a `src` directory and it contains `compute.js`. If we need to import `lib` package, the import path will be `../lib`.

├── lib/\
| ├── index.js\
| └── math.js\
└── src/\
 ├── compute.js // require( '../lib')\
 └── deep/\
 └── nested.js // require( '../../lib')

As we nest our files deeper, the import path is very difficult to track. What would be easy is instead of the relative path, we would just use `lib` and Node.js just finds the path to that package for us.

// src/compute.js\
const lib = require('lib'); // points to '../lib/index.js'\
lib.add(1, 2) // 3

This might sound like a fantasy but it is actually very real. Node.js can do this for us, just that we need to create `node_modules` directory and clone `lib` directory inside it. This way, when we call `require('lib')`, it will point to the `lib` directory inside `node_modules`. Now, `lib` is a package.

> You might wonder, why they are called `node_modules` and not `node_packages`? In a conventional sense, a module is a file and package is a collection of modules. But when it comes to `require` function, they are ambiguous. Hence, let's stick to a common name, module. But normally, when people say node module, it is a package inside `node_modules` directory.

But the real question is, how does Node knows where the `node_modules` directory is. The answer is, it doesn't. When we import a package, it searches that package inside `node_modules` directory of the current file path (_where import statement is written_). If it doesn't find `node_modules` directory or the package directory, it performs a similar search in the parent directory.

This continues until the last directory in the file system is reached. If it doesn't find the package, it throws `Error: Cannot find module 'lib'` error.

Let's create `node_modules` directory in our project and clone `lib` directory there. From `src/compute.js`, we will call the `add` function as before.

![](https://miro.medium.com/max/675/1*o2PkxJ468fIvuQaZojV-sw.png)

([package introduction](https://github.com/course-one/node-js-introduction/tree/master/lib))

In the above example, we are importing `math.js` file from `lib` package. If we just use `require('lib')`, Node.js will point to `index.js` file inside `lib` package directory. If `math.js` is missing, `require` will try to resolve `math/index.js` file treating `math` as a directory.

Even though packages seems easy, their management if done manually is very difficult. Like what if we needed a 3rd-party package? I mean, should we clone the remote source code and put it inside `node_module` directory manually? Do you know how hard that would be for multiple people in the team? And whenever package version changes, it would be a mess to update.

This is where NPM comes into the picture.

> This whole modules and packages theory might sound familiar to you if you are a python developer. But you don't need **init**.py like file in Node.js 😉

# What is NPM?

When we installed Node.js, we also got `npm` command. [NPM](https://www.npmjs.com/) or [Node Package Manager](https://www.npmjs.com/) is the default package manager for Node.js. A role of a package manager is to download and install remote package, with ease.

> BTW, we can also install packages from a local directory.

Node.js has a wide community that develop good packages for everybody to use. For example, `lodash` is the package that is used widely. This package contains useful utility functions like `add` in our earlier example. These utility functions are very well documented on their [official website](https://lodash.com/docs/4.17.15).

When we have a remote package in our project, it is called as a dependency since our project depends on it. We need to keep track of our dependencies or at least list them down somewhere. We list all our dependencies inside a `package.json` file which is a JSON file that contains some information about our project and dependencies it needs.

This file is essential for NPM. To create this file using `npm`, use `npm init` command. This command will ask you some question to fill project-specific data in `package.json` and eventually create `package.json` file. You can bypass the questions using `-y` flag.

![](https://miro.medium.com/max/675/1*QIqW9G-YXcvQAs0xl0zh2A.png)

(Initializing [package.json](https://github.com/course-one/node-js-introduction/blob/master/package.json))

Note `dependencies` section in the `package.json` file, it is empty at the moment. This means, our project at the moment does not depend on any of the remote packages.

To install a package, we use `npm install <packagename>` command. For example, to install `lodash` package, we use `npm install --save lodash` command. Using `--save` flag, we can make entry of this package inside `dependencies` section of the `package.json` file.

This command will do the following things.

1.  At first, it searches for this package on `[registry.npm.com](http://registry.npmjs.org/)` which contains the database of all packages. You can see the documentation of a package by visiting `[https://www.npmjs.com/package/<packagename>](https://www.npmjs.com/package/lodash)` URL.
2.  Then it downloads the compressed zip (_or tar_) file that contains all the source code of the package. If a version of the package was not specified in the command, it will download the latest version.
3.  Then it adds the package entry to the `dependencies` section of `package.json` with the version of the package. If the entry of the package already exists, it will just override the version of the package downloaded.
4.  Then it creates `node_modules` folder in the same directory if it doesn't already exist.
5.  Then it will copy all the files from the downloaded compressed file in the directory with the name of the package inside `node_modules`.

Let's actually install `lodash` package and see how `node_modules` and `package.json` file looks like after the install.

![](https://miro.medium.com/max/675/1*xPtGu4bjhl4YJlH9PvwH9A.png)

(npm install -- save lodash)

From the above example, `npm` installed the version `4.17.15` of the `lodash`. This type of version number system is called as [Semantic Versioning](https://devhints.io/semver). We can also specify a specific version of a package to install using the command like `npm install --save lodash@4.17.10`.

Now that we have installed `lodash`, let's use its `_.toUpper` function to change the case of a string. But first, we need to import the package.

// src/transform.js\
var lodash = require( 'lodash' );var result = lodash.toUpper( 'hello world!' );\
console.log( result ); // HELLO WORLD!

When we run this file using the command `node src/transform.js`, we get `HELLO WORLD!` printed in the terminal.

When you install a package, NPM also creates `package-lock.json` file if not already present. This file contains a list of dependency packages with their versions that your project has installed as well as dependencies of those packages (_because a package might use other packages and so on_). This file including `package.json` should be tracked by your [VCS](https://en.wikipedia.org/wiki/Version_control) while `node_module` directory should be ignored (_reasons explained later_).

> NPM and package management is far more sophisticated (and for good) than this but we will discuss it later in details.

# Built-in Packages AKA Built-in Modules

Node.js ships with a collection of built-in packages called as a Node Standard Library. These packages are essential to perform low-level operations like File System I/O and Networking. We do not have to install them using NPM.

Since these packages contain code in a low-level programming language tailored to a specific version of Node.js, they have to be shipped as a part of the installation process. [Here](https://nodejs.org/api/index.html) is a list of built-in modules in Node.js.

These packages do not exist on disk like `lodash`. They are compiled into low-level or intermediate stuff ([explained here](https://stackoverflow.com/a/42892065)) but their sources are listed [here](https://github.com/nodejs/node/tree/master/lib).

`[fs](https://nodejs.org/api/fs.html)` package is used to perform File System operations like file read and write while `[path](https://nodejs.org/api/path.html)` package is used to resolve a file or directory path on the system. Let's use these packages to demonstrate a cool example.

├── res\
| └── hello-world.txt\
└── fs-example.js

According to the above project structure, we have `hello-world.txt` file which contains `Hello World!` text. Using `fs-example.js`, we want to read the text in the file and log in to the console.

![](https://miro.medium.com/max/675/1*78ejxNXflo4CGZ18gRXPhQ.png)

(Sample `fs` and `path` module introduction)

In the above program, we imported the `fs` and `path` built-in modules.

> When we `require(name)` a package, Node.js first searches for the package `name` in the built-in packages. If it doesn't find it in the standard library, then it searches for it in `node_modules` as explained earlier.

`__dirname` is a globally available variable that resolves to the absolute path of the current file on the disk. `[path.resolve](https://nodejs.org/api/path.html#path_path_resolve_paths)` function takes multiple path segments and joins them. This is a safe way to create an absolute path of a file on the disk, as Windows and Unix systems use different path delimiter.

> You can also use a relative path like `var filePath = './res/hello-world.txt';` in the above example but `path.resolve` is safer. `process` is a globally available object that contains information about environment variables and current process context in general. Unlike `__dirname`, `[process.cwd()](https://nodejs.org/api/process.html#process_process_cwd)` function returns the path of the directory from where the `node` command was executed in the terminal (or the current directory in the terminal).

Let's talk about the example in detail. Inside `fs-example.js` file, we imported built-in modules `fs` and `path`. Then we constructed a `filePath` which points to `hello-world.txt` on the disk.

`[fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)` function takes below arguments in series

1.  filePath: A absolute or relative path to the file we are trying to read.
2.  options: An object that contains a configuration about reading. In the above example, we set `encoding` to `utf-8` which converts binary data to Text format. This will convert file content to Text.
3.  callback: Sync file read operation using `readFile` function is asynchronous, we need a callback function to execute when the file is read completely. This function will receive read error (_if any_) as the first argument and file data as the second argument.

Notice the console log. The first `-end-of-the-program-` statement got printed as `fs.readFile` was reading the file in the background. Once file reading was completed, the callback function was called.

Node.js can also perform synchronous (blocking) operations. For example, using `[fs.readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)`, we can block the JavaScript thread until the file is read. This way, we can make sure, JavaScript code run sequentially.

![](https://miro.medium.com/max/675/1*FmUCo0e0Cs_QKxEGZ509nQ.png)

([Reading a file synchronously](https://github.com/course-one/node-js-introduction/blob/master/fs-example.js))

# Creating an HTTP server in Node.js

Node.js can do anything, literally anything. Node.js has built-in `[http](https://nodejs.org/api/http.html)` module as well as `[https](https://nodejs.org/api/https.html)` module to create an HTTP/HTTPS server. But their implementation is kind of hard.

ExpressJS is a 3rd-party package that wraps the built-in `http` module and provide a cleaner interface to create an HTTP server. This package is listed on NPM registry under `[express](https://www.npmjs.com/package/express)` name. Let's create a basic HTTP server.

First, we need to install `express` package using NPM.

npm install --save express

Then we will import this package and create a basic HTTP server inside `server.js` file. We will follow their [startup documentation](https://github.com/expressjs/express).

![](https://miro.medium.com/max/675/1*6yP5kysrs9UIKk8RYnR0AQ.png)

([Sample express HTTP server](https://github.com/course-one/node-js-introduction/blob/master/server.js))

When we executed `server.js` file with `node`, ExpressJS will lock the Node process as we want the server to be running forever. Now that server is running on the port `9000`, we can open the browser and access URL `<http://localhost:9000/>` which will execute the `.get` callback.

![](https://miro.medium.com/max/473/1*evvJp-ynknMqnUTbW4dssw.png)

`(<http://localhost:9000/>)`

This was just a basic example of how we can create an HTTP server in Node.js. But with express.js, we can create more complex servers which can send HTML file content using `response.sendFile(filePath)` function or send JSON using `response.json(object)` function. We can also create an endpoint that [serves static files](https://expressjs.com/en/starter/static-files.html) like images from the disk using [middlewares](https://expressjs.com/en/guide/writing-middleware.html).

To stop the server, we need to stop the locked Node.js process. We can do that by pressing `ctrl+c` in the terminal. But what if we need to actually run the server on the production literally forever. In that case, we can't have terminal open for years. This is where the process managers comes in.

[PM2](http://pm2.keymetrics.io/) is one of the best process managers that can run a Node process in the background. When you install it, it will give you a clean command-line interface to start a Node.js process and PM2 will monitor it.

# Execute a Bash command from Node.js

If you make Node.js your life and want to do everything from Node, then this topic is very important. Let's say that from a JavaScript program, you want to execute a BASH command. A Bash command would be `echo Hello World!`. You can try this command in the terminal and it will print `Hello World!`.

Node.js provides a built-in `[child_process](https://nodejs.org/api/child_process.html)` command to run Bash command in a separate process. `[child_process.exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)` function takes a Bash command and executes it. It takes an optional callback function to execute (_with some process information_) when the process is terminated.

Let's create a `echo.js` file that executes `echo Hello World!` Bash command.

![](https://miro.medium.com/max/675/1*NGwvmLnmj436x2EXbWAJvg.png)

([child_process example](https://github.com/course-one/node-js-introduction/blob/master/echo.js))

In the above program, the callback function to `child_process.exec` receives the [standard output](https://www.computerhope.com/jargon/s/stdout.htm) of the program.

`child_process` module can do many things, like execute a Bash file using `[child_process.execFile](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)` function. It also supports synchronous variants to run a bash command synchronously, like `[child_process.execSync](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)` function.

# How to ship your code to Production?

Now that we have a good understanding of Node.js and NPM, we can move forward to this most important topic.

`package.json` and `package-lock.json` files are very important as they contain information about dependencies our project has. Those dependencies are stored inside `node_modules` directory by the NPM.

So if our project is managed using a VCS like Git then should we commit all our code? The answer is, 😱 NOOOOOOOOOOO. `node_modules` directory can be very large as it contains deeply nested dependencies. Hence it should be ignored by the VCS. Use `.gitignore` file to do that.

# .gitignore\

node_modules

But then when your buddy takes the clone or a pull of the project, he/she won't get `node_modules`. Nothing to worry about here because NPM can take care of that.

When we used `npm install <packagename>` command for the first time, NPM created `node_modules` directory and install `packagename` package. Using `npm install` command (_without a package name_), NPM will look at `pakage.json` to install all the dependencies listed inside it.

> Actually, since NPM v.5, `npm install` command looks at `package-lock.json` command to install the dependencies since it contains the exact versions of the packages and their dependencies (which were installed by the developer of the project). This minimizes the conflict of versions between the development machine and production machine.

By ignoring `node_modules`, we are actually saving a lot of time and bandwidth of transferring the project from a development machine to production.

[![Edit nodejs-examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nodejs-examples-4ohjz?autoresize=1&expanddevtools=1&fontsize=13&hidenavigation=1&theme=light&view=editor)
