---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
  type: stackbit_page_meta
template: docs
---
## React In Depth

# Random Things to Remember

![](https://miro.medium.com/max/60/0\*LHVHf7SPZ1t0UVAj?q=20)







![](https://miro.medium.com/max/630/0\*LHVHf7SPZ1t0UVAj)



![](https://miro.medium.com/max/60/0\*wR-lbD4zf45-IHoQ?q=20)![](https://miro.medium.com/max/630/0\*wR-lbD4zf45-IHoQ)![](https://miro.medium.com/max/60/0\*7EZESKf0XPbncXAY?q=20)![](https://miro.medium.com/max/630/0\*7EZESKf0XPbncXAY)



*   Using () implictly returns components.

*   Role of index.js is to *render* your application.

*   The reference to root comes from a div in the body of your public HTML file.

*   State of a component is simply a regular JS Object.

*   Class Components require render() method to return JSX.

*   Functional Components directly return JSX.

*   Class is className in React.

*   When parsing for an integer just chain Number.parseInt("123")

*   Use ternary operator if you want to make a conditional inside a fragment.

<!---->

*   Purpose of React.Fragment is to allow you to create groups of children without adding an extra dom element.

# Front-End History

*   React makes it easier for you to make front-end elements. A front-end timeline

*   Some noteworthy front end libraries that have been used in the past few years:

*   2005: Script.aculo.us

*   2005: Dojo

*   2006: YUI

*   2010: Knockout

*   2011: AngularJS

*   2012: Elm

*   2013: React (Considered the standard front-end library)

*   React manages the creation and updating of DOM nodes in your Web page.

*   All it does is dynamically render stuff into your DOM.

*   What it doesn’t do:

*   Ajax

*   Services

*   Local Storage

*   Provide a CSS framework

*   React is unopinionated

*   Just contains a few rules for developers to follow, and it just works.

*   JSX : Javascript Extension is a language invented to help write React Applications (looks like a mixture of JS and HTML)

*   Here is an overview of the difference between rendering out vanilla JS to create elements, and JSX:

<!---->

*   This may seem like a lot of code but when you end up building many components, it becomes nice to put each of those functions/classes into their own files to organize your code. Using tools with React

*   React DevTools : New tool in your browser to see ow React is working in the browser

*   create-react-app : Extensible command-line tool to help generate standard React applications.

*   Webpack : In between tool for dealing with the extra build step involved.

<!---->

*   HMR : (Hot Module Replacement) When you make changes to your source code the changes are delivered in real-time.

*   React Developers created something called Flux Architecture to moderate how their web page consumes and modifies data received from back-end API's.

<!---->

*   Choosing React

*   Basically, React is super important to learn and master.

# React Concepts and Features

There are many benefits to using React over just Vanilla JavaScript.

*   Modularity

*   To avoid the mess of many event listeners and template strings, React gives you the benefit of a lot of modularity.

*   Easy to start

*   No specials tools are needed to use Basic React.

*   You can start working directly with createElement method in React.

*   Declarative Programming

*   React is declarative in nature, utilizing either it’s built-in createElement method or the higher-level language known as JSX.

*   Reusability

*   Create elements that can be re-used over and over. One-flow of data

*   React apps are built as a combination of parent and child components.

*   Parents can have one or more child components, all children have parents.

*   Data is never passed from child to the parent.

*   Virtual DOM : React provides a Virtual DOM that acts as an agent between the real DOM and the developer to help debug, maintain, and provide general use.

*   Due to this usage, React handles web pages much more intelligently; making it one of the speediest Front End Libraries available.

# ES6 Refresher

Exporting one item per file

*   Use export default statement in ES6 to export an item. ES6

CommonJS (Equivalent)

Exporting multiple items per file

*   Use just thw export keyword (without default) to export multiple items per file. ES6 (Better to export them individually like this, rather than bunching them all into an object)

CommonJS (Equivalent)

Importing with ES6 vs CommonJS

*   Import statements in ES6 modules must always be at the top of the file, because all imports must occur before the rest of the file’s code runs. ES6

CommonJS

Unnamed default imports

*   You can name unnamed items exported with export default any name when you import them.

<!---->

*   Just remember if you use export instead of export default then your import is already named and cannot be renamed.

Aliasing imports

*   Use as asterisk to import an entire module’s contents.

*   Keep in mind you must use an as keyword to refer to it later.

<!---->

*   You can also name identically named functions or items from different files.

Browser support for ES6 Modules

*   ES6 Modules can only be used when a JS file is specified as a module. \<script type="module" src="./wallet.js">\</script>

*   You can get browser support for ES6 modules by adding module into your script tag.

# Notes

# JSX In Depth

*   Remember that JSX is just syntactic sugar for the built in React.createElement(component, props, ...children)

*   React Library must always be in scope from your JSX code.

*   Use Dot Notation for JSX Type

*   User-Defined Components Must Be Capitalized \<Foo /> vs \<div>

*   Cannot use a general expression as the React element type. (Incorrect)

(Corrected)

Props in JSX

*   Several ways to specify props in JSX.

*   Javascript Expressions as Props

<!---->

*   String Literals

<!---->

*   Props Default to “True”

<!---->

*   Spread Attributes

Children in JSX

*   props.children : The content between opening and closing tag. JavaScript Expressions as Children

Functions as Children

*   props.children works like any other prop, meaning it can pass any sort of data.

Booleans, Null, and Undefined Are Ignored

*   false, null, undefined, and true are all valid children.

*   They will not render.

*   You can use these to conditionally render items.

<!---->

*   In this example, the component will only render if showHeader evals to True.

<!---->

*   Note that certain falsy values such as zero will still be rendered by React, you can work around this by ensuring situations like the above eval. into a boolean.

*   In the times you want booleans to be rendered out, simply convert it into a string first.

# Reconciliation

The Diffing Algorithm

*   Diffing : When the state of a component changes React creates a new virtual DOM tree.

*   Elements of Different Types

*   Every time the root elements have different types, React tears down the old tree and builds the new tree from scratch.

*   DOM Elements Of the Same Type

*   When comparing two DOM elements of the same type, React keeps the same underlying DOM node and only updates the changes attributes.

<!---->

*   Component Elements Of The Same Type

*   When components update, instances will remain the same, so that state maintains across renders.

*   React will only update the props, to match the new element.

*   Recursing On Children

*   React will iterate both lists of children and generate a mutation whenever there’s a difference.

*   This is why we use keys.

*   Makes it easier for React to match children in the original tree with children in the subsequent tree.

*   Tradeoffs

*   Important to remember that reconciliation algorithm is an *implementation detail*.

*   Re-rendering only to apply the differences following the rules stated in the previous sections.

# Typechecking With PropTypes![](https://miro.medium.com/max/60/0\*8ls0PmtREELbf5Wm?q=20)![](https://miro.medium.com/max/630/0\*8ls0PmtREELbf5Wm)&#xA;&#xA;&#xA;

*   As your application grows, you can use React’s typechecking to catch bugs.

*   propTypes is a special property to run typechecking.

*   exports range of built in validators to ensure your received data is valid.

*   propTypes is only checked in development mode.

Requiring Single Child

*   Use PropTypes.element to specify only a single child can be passed to a component as children.

Default Prop Values

*   Use defaultProps to assign default values for props.

# Notes

# React Router Introduction

*   React Router is the answer for rendering different components for different pages.

*   A front-end library that allows you to control which components to display using the browser location.

*   Client-side Routing Getting started with routing

*   Install React Router with:

*   npm install — save react-router-dom@⁵.1.2

*   Import Browser Router from package.

*   import { BrowserRouter } from “react-router-dom”;

*   BrowserRouter is the primary component of the router that wraps your route hierarchy.

*   Wrap it around components.

*   Creates a React Context that passes routing information down to all its descendant components.

*   You can also use HashRouter, where it would generate a hash before the endpoint. Creating frontend routes

*   React Router helps your app render specific components based on the URL.

*   The most common component is \<Route>

*   Wrapped around another component, causing the comp. to only render if the a certain URL is matched.

*   Props : path, component, exact, and \[render]

*   Browser Router can only have a single child component.

*   The Browser Router wraps all routes within a parent div element.

<!---->

*   component

*   Indicates component to render.

*   path

*   Indicates path to render a specific component.

*   exact

*   Tells route to not pattern match and only render a certain route exclusively to it’s associated component.

*   render

*   Optional prop that takes in a function to be called.

*   Causes extra work for React.

*   Preferred for inline rendering of simple functional components.

*   Difference between component and render is that component returns new JSX that be re-mounted, but render returns the JSX that will be mounted only once.

*   // This inline rendering will work, but is unnecessarily slow. \<Route path=”/hello” component={() => \<h1>Hello!\</h1>} /> // This is the preferred way for inline rendering. \<Route path=”/hello” render={() => \<h1>Hello!\</h1>} />

*   Also useful if you need to pass in specific props to a component.

*   // \`users\` to be passed as a prop: const users = { 1: { name: “Andrew” }, 2: { name: “Raymond” }, }; \<Route path=”/users” render={() => \<Users users={users} />} />;

Route path params

*   Your component’s props can hold information about URL’s parameters.

*   Will match segments starting at : to the next /, ?, #.

<!---->

*   {...props} spreads out the router's props.

*   props.match.params is used to access the match prop's parameters.

*   Useful keys on the match object:

*   isExact : boolean that tells you whether or not the URL exactly matches the path.

*   url : the currentURL

*   path : Route path it matched against (w/o wildcards)

*   params : Matches for the individual wildcard segments.

# Navigation

React Router Navigation

*   Link, NavLink, Redirect, history props of React Router are used to help your user navigate routes. Adding links for navigation

*   Issues on-click navigation event to a route defined in app.

*   Usage renders an anchor tag with a correctly set href attribute.

<!---->

*   Link takes two properties: to and onClick.

*   to : route location that points to an absolute path.

*   onClick : clickHandler.

*   NavLink works just like Link but has a bit of extra functionality.

*   Adds extra styling, when the path it links to matches the current path.

*   As it’s name suggests, it is used to Nav Bars.

*   Takes three props:

*   activeClassName : allows you to set a CSS class name for styling. (default set to 'active')

*   activeStyle : style object that is applied inline when it's to prop. matches the current URL.

*   exact prop is a boolean that defaults to false; you can set it to true to apply requirement of an exact URL match.

*   exact can also be used as a flag instead of a reg. property value.

*   benefit of adding this is so that you don’t trigger other matches. Switching between routes

*   \<Switch> : Component allows you to only render one route even if several match the current URL.

*   You may nest as many routes as you wish but only the first match of the current URL will be rendered.

*   Very useful if we want a default component to render if none of our routes match.

<!---->

*   DefaultComponent will only render if none of the other URLs match up.

*   \<Redirect> : Helps redirect users.

*   Only takes a single prop: to.

History

*   History allows you to update the URL programmatically.

*   Contains two useful methods:

*   push : Adds a new URL to the end of the history stack.

*   replace : Replaces the current URL on the history stack, so the back button won't take you to it.

# Nested Routes

Why nested routes?

*   Create routes that tunnel into main components vs getting rendered on the main page as it’s own thing. What are nested routes?

Alt. version using props.match

*   As you can see above, our end URL isn’t even defined until we apply those flexible values in.

# React Builds

*   Build : Process of converting code into something that can actually execute or run on the target platform.

*   In regards to React, the minimum a build should do is convert JSX to something that browsers can understand. Reviewing common terminology

*   Linting : Process of using a tool to analyze your code to catch common errors, bugs, inconsistencies etc...

*   Transpilation : Process of converting source code, like JS, from one version to another.

*   Minification : Process of removing all unnecessary characters in your code.

*   Bundling : Process of combining multiple code files into a single file.

*   Tree Shaking : Process of removing unused or dead code from your application before it's bundled. Configuration or code?

*   Configuration allows developers to create build tasks by declaring either JSON, XML, or YAML without explicitly writing every step in the process.

*   Coding or Scripting simply requires code. Babel and webpack (yes, that's intentionally a lowercase 'w')

*   Babel : Code Transpiler that allows you to use all of the latest features and syntax wihtout worrying about what browsers support what.

*   webpack : Allows developers to use JS modules w/o requiring users to use a browser that natively supports ES modules.

*   Create React App uses webpack and Babel under the hood to build applications. The Create React App build process

*   What happens when you run npm start:

1.  .env variables are loaded.

2.  list of browsers to support are checked.

3.  config’d HTTP port checked for availability.

4.  application compiler is configured and created.

5.  webpack-dev-starter is started

6.  webpack-dev-starter compiles app.

7.  index.html is loaded into browser

8.  file watcher is started to watch for changes. Ejecting

*   There is a script in Create React App called eject that allows you to 'eject' your application and expose all the hidden stuff. Preparing to deploy a React application for production

*   Defining Env Variables

Configuring the supported browsers

*   If you specify older browsers it will affect how your code get’s transpiled. Creating a production build

*   Run npm run build to create a production build.

*   Bundles React in production mode and optimizes the build for the best performance.

# Notes

# Introduction to React

*   Simply a nice library that turns data into DOM.

*   Tree Diffing : Fast comparison and patching of data by comparing the current virtual DOM and new virtual DOM - updating only the pieces that change.

*   It's just a tree with some fancy diffing

# Create Element

From JavaScript To DOM

*   The React.createElement function has the following form:

<!---->

*   Type : Type of element to create, i.e. a string for an HTML element or a reference to a function or class that is a React component.

*   Props : Object that contains data to render the element.

*   Children : Children of the elemet, as many as you want. Creating elements

*   Our rendering goal:

<!---->

*   There are five tags to create:

*   One ul

*   Two li

*   Two a

*   There are certain attributes we want to appear in the DOM for these tags as well:

*   Each li has a class (or className in React)

*   Both a ele's have href attributes

*   Also keep in mind the parent child relationships happening between the tags.

*   ul is the parent of both li

*   Each li has an a element as a child

*   Each a has a text content child

Converting to virtual DOM

*   After you set up your React.createElement, you use React.render to take the value returned from cE and a DOM node to insert into the conversion of the real DOM.

<!---->

*   JS Code => Virtual DOM => Real Dom Updates

*   If you call React.render a second or multiple times it just checks the existing Virtual DOM and it knows which smaller areas to change. Thinking in Components

*   Components are pieces of reusable front-end pieces.

*   Components should be Single Responsibility Principle compliant.

# Create Element

React.createElement Demo

*   Can import non-local dependencies with import 'package-link'

<!---->

*   Remember when importing modules from other files you have to denote the file type in the import statement. HTML Original

React Version

*   Because class is a reserved keyword in JS, in React we can use className to assign a class to an element.

*   Remember the data that goes into createElement: element type, data to pass into the element, and then children.

*   props : Properties;

*   To handle certain values that are initially undefined, we can use defaultProps.

<!---->

*   You can change in the devTools Network tab the internet speed to check for values that may be undefined to hangle with defaultProps.

*   If we fetch multiple pieces of data, we can render many things by using map.

*   You need to assign a unique key to each of the clues.

*   We need to keep track of them individually so that React can easily refer to a specific one if there is an issue. clue => { key:clue.id, ...clue }

<!---->

*   Note: JSX is preferred over React.createElement;

# Notes from Hello Programmer Exercise

*   When you import modules from websites they must have CORs activated.

*   These import statements, import global variables.

*   When we want to move our code into production we need to change the imports into the production minified versions.

<!---->

*   While we will never actually be creating full apps with just React.createElement => it is the enginer that is running under the hood!
