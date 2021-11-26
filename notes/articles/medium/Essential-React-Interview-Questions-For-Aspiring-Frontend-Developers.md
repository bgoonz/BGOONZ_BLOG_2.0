10 Essential React Interview Questions For Aspiring Frontend Developers
=======================================================================

Comprehensive React Cheatsheet included at the bottom of this article!

------------------------------------------------------------------------

### 10 Essential React Interview Questions For Aspiring Frontend Developers

#### Comprehensive React Cheatsheet included at the bottom of this article!

### Resources:

<a href="https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad"><strong>Introduction to React for Complete Beginners</strong><br />
<em>All of the code examples below will be included a second time at the bottom of this article as an embedded gist.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/introductory-react-part-2-cda01615a186" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/introductory-react-part-2-cda01615a186"><strong>Beginner’s Guide To React Part 2</strong><br />
<em>As I learn to build web applications in React I will blog about it in this series in an attempt to capture the…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/introductory-react-part-2-cda01615a186" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz/React_Notes_V3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/React_Notes_V3"><strong>bgoonz/React_Notes_V3</strong><br />
<em>A JavaScript library for building user interfaces Declarative React makes it painless to create interactive UIs. Design…</em>github.com</a><a href="https://github.com/bgoonz/React_Notes_V3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://reactjs.org/docs" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://reactjs.org/docs"><strong>Getting Started - React</strong><br />
<em>A JavaScript library for building user interfaces</em>reactjs.org</a><a href="https://reactjs.org/docs" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Also … here is my brand new blog site… built with react and a static site generator called GatsbyJS!

#### It’s a work in progress

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--p-anchor">https://bgoonz-blog.netlify.app/</a>

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*t3UQh848ndt4rgr_fDToaw.png" class="graf-image" /></figure>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/0*39weCjnVdDf0Kuzj" alt="Photo by Ferenc Almasi on Unsplash" class="graf-image" /><figcaption>Photo by <a href="https://unsplash.com/@flowforfrank?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Ferenc Almasi</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Unsplash</a></figcaption></figure>### Beginning of the Article:

**Pros**

1.  <span id="156e">Easy to learn</span>
2.  <span id="859a">HTML-like syntax allows templating and highly detailed documentation</span>
3.  <span id="5b3a">Supports server-side rendering</span>
4.  <span id="cb03">Easy migrating between different versions of React</span>
5.  <span id="7332">Uses JavaScript rather than framework-specific code</span>

**Cons**

1.  <span id="e1f7">Poor documentation</span>
2.  <span id="db68">Limited to only view part of MVC</span>
3.  <span id="814a">New developers might see JSC as a barrier</span>

### Where to Use React

1.  <span id="fa3e">For apps that have multiple events</span>
2.  <span id="f46a">When your app development team excels in CSS, JavaScript and HTML</span>
3.  <span id="2d25">You want to create sharable components on your app</span>
4.  <span id="9729">When you need a personalized app solution</span>

### Misconceptions about React

#### <a href="https://aglowiditsolutions.com/blog/react-vs-angular/" class="markup--anchor markup--h4-anchor">React is a framework</a>:

<a href="https://aglowiditsolutions.com/blog/react-vs-angular/" class="markup--anchor markup--p-anchor">Many developers an</a>d aspiring students misinterpret React to be a fully functional framework. It is because we often compare React with major frameworks such as Angular and Ember. This comparison is not to compare the best frameworks but to focus on the differences and similarities of React and Angular’s approach that makes their offerings worth studying. Angular works on **the MVC model** to support the Model, View, and Controller layers of an app. React focuses only on the ‘V,’ which is the **view layer** of an application and how to make handling it easier to integrate smoothly into a project.

#### React’s Virtual DOM is faster than DOM.

React uses a **Virtual DOM**, which is essentially a tree of JavaScript objects representing the actual browser DOM. The advantage of using this for the developers is that they don’t manipulate the DOM directly as developers do with jQuery when they write React apps. Instead, they would tell React how they want the DOM to make changes to the state object and allow React to make the necessary updates to the browser DOM. This helps create a comprehensive development model for developers as they don’t need to track all DOM changes. They can modify the state object, and React would use its algorithms to understand what part of UI changed compared to the previous DOM. Using this information updates the actual browser DOM. Virtual DOM provides an excellent API for creating UI and minimizes the update count to be made on the browser DOM.

However, it is **not faster** than the actual DOM. You just read that it needs to pull extra strings to figure out what part of UI needs to be updated before actually performing those updates. Hence, Virtual DOM is beneficial for many things, but it ***isn’t faster than DOM.***

------------------------------------------------------------------------

### **1. Explain how React uses a tree data structure called the virtual DOM to model the DOM**

> The virtual DOM is a copy of the actual DOM tree. Updates in React are made to the virtual DOM. React uses a diffing algorithm to reconcile the changes and send the to the DOM to commit and paint.

### **2. Create virtual DOM nodes using JSX** To create a React virtual DOM node using JSX, define HTML syntax in a JavaScript file.

> Here, the JavaScript hello variable is set to a React virtual DOM h1 element with the text “Hello World!”.

> You can also nest virtual DOM nodes in each other just like how you do it in HTML with the real DOM.

### **3. Use debugging tools to determine when a component is rendering**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*jf3yl4GKDHpxmPJk.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/0*hBOo6hfwhKwS5UDM.jpg" class="graf-image" /></figure>#### We use the React DevTools extension as an extension in our Browser DevTools to debug and view when a component is rendering

### **4. Describe how JSX transforms into actual DOM nodes**

-   <span id="358b">To transfer JSX into DOM nodes, we use the ReactDOM.render method. It takes a React virtual DOM node’s changes allows Babel to transpile it and sends the JS changes to commit to the DOM.</span>

### **5. Use the** `ReactDOM.render` **method to have React render your virtual DOM nodes under an actual DOM node**

------------------------------------------------------------------------

### **6. Attach an event listener to an actual DOM node using a virtual node**

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called <a href="https://reactjs.org/docs/reconciliation.html" class="markup--anchor markup--p-anchor">reconciliation</a>.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with <a href="https://reactjs.org/docs/rendering-elements.html" class="markup--anchor markup--p-anchor">React elements</a> since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

### Is the Shadow DOM the same as the Virtual DOM?

No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

-   <span id="8534">To add an event listener to an element, define a method to handle the event and associate that method with the element event you want to listen for:</span>

### **7. Use** `create-react-app` **to initialize a new React app and import required dependencies**

-   <span id="6d60">Create the default create-react-application by typing in our terminal</span>

#### <a href="https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/" class="markup--anchor markup--h4-anchor">Explanation of npm vs npx from Free Code Camp:</a>

**npm** (node package manager) is the dependency/package manager you get out of the box when you install Node.js. It provides a way for developers to install packages both globally and locally.

Sometimes you might want to take a look at a specific package and try out some commands. But you cannot do that without installing the dependencies in your local `node_modules` folder.

### npm the package manager

npm is a couple of things. First and foremost, it is an online repository for the publishing of open-source Node.js projects.

Second, it is a CLI tool that aids you to install those packages and manage their versions and dependencies. There are hundreds of thousands of Node.js libraries and applications on npm and many more are added every day.

npm by itself doesn’t run any packages. If you want to run a package using npm, you must specify that package in your `package.json` file.

When executables are installed via npm packages, npm creates links to them:

-   <span id="7798">**local** installs have links created at the `./node_modules/.bin/` directory</span>
-   <span id="a534">**global** installs have links created from the global `bin/` directory (for example: `/usr/local/bin` on Linux or at `%AppData%/npm` on Windows)</span>

To execute a package with npm you either have to type the local path, like this:

    $ ./node_modules/.bin/your-package

or you can run a locally installed package by adding it into your `package.json` file in the scripts section, like this:

    {
      "name": "your-application",
      "version": "1.0.0",
      "scripts": {
        "your-package": "your-package"
      }
    }

Then you can run the script using `npm run`:

    npm run your-package

You can see that running a package with plain npm requires quite a bit of ceremony.

Fortunately, this is where **npx** comes in handy.

### npx the package runner

Since npm version <a href="https://github.com/npm/npm/releases/tag/v5.2.0" class="markup--anchor markup--p-anchor">5.2.0</a> npx is pre-bundled with npm. So it’s pretty much a standard nowadays.

**npx** is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

It’s now very easy to run any sort of Node.js-based executable that you would normally install via npm.

You can run the following command to see if it is already installed for your current npm version:

    $ which npx

If it’s not, you can install it like this:

    $ npm install -g npx

Once you make sure you have it installed, let’s see a few of the use cases that make **npx** extremely helpful.

### Run a locally installed package easily

If you wish to execute a locally installed package, all you need to do is type:

    $ npx your-package

npx will check whether `<command>` or `<package>` exists in `$PATH`, or in the local project binaries, and if so it will execute it.

### Execute packages that are not previously installed

Another major advantage is the ability to execute a package that wasn’t previously installed.

Sometimes you just want to use some CLI tools but you don’t want to install them globally just to test them out. This means you can save some disk space and simply run them only when you need them. This also means your global variables will be less polluted.

> Now, where were we?

`npx create-react-app <name of app> --use-npm`

-   <span id="e1cb">npx gives us the latest version. `--use-npm` just means to use npm instead of yarn or some other package manager</span>

### **8. Pass props into a React component**

-   <span id="9111">`props` is an object that gets passed down from the parent component to the child component. The values can be of any data structure including a function (which is an object)</span>

<!-- -->

-   <span id="7a12">You can also <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" class="markup--anchor markup--li-anchor">interpolate values</a> into JSX.</span>
-   <span id="f405">Set a variable to the string, “world”, and replace the string of “world” in the NavLinks JSX element with the variable wrapped in curly braces:</span>

> **Accessing props:**

To access our props object in another component we pass it the props argument and React will invoke the functional component with the props object.

### Reminder:

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

### Function and Class Components

The simplest way to define a component is to write a JavaScript function:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes" class="markup--anchor markup--p-anchor">ES6 class</a> to define a component:

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

The above two components are equivalent from React’s point of view.

-   <span id="99d5">You can pass down **as many props keys as you want**.</span>

### **9. Destructure props**

> You can destructure the props object in the function component’s parameter.

### **10. Create routes using components from the react-router-dom package**

a. Import the react-router-dom package:

    npm i react-router-dom

> In your index.js:

1.  <span id="46f3">Above you import your BrowserRouter with which you can wrap your entire route hierarchy. This makes routing information from React Router available to all its descendent components.</span>
2.  <span id="f675">Then in the component of your choosing, usually top tier such as App.js, you can create your routes using the Route and Switch Components</span>

------------------------------------------------------------------------

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### REACT CHEAT SHEET:

*More content at* <a href="http://plainenglish.io/" class="markup--anchor markup--p-anchor"><em>plainenglish.io</em></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 11, 2021](https://medium.com/p/cbaafb31765d).

<a href="https://medium.com/@bryanguner/react-md-cbaafb31765d" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
