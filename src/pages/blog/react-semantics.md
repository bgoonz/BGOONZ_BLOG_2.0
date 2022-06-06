---
title: React Semantics
template: post
subtitle: Learn React
excerpt: Below I list the most common terms, and their definitions, used when
  talking about React.
date: 2022-04-18T20:21:35.309Z
image: https://deploy-preview-2286--bgoonz-blog.netlify.app/images/react.gif
thumb_image: https://deploy-preview-2286--bgoonz-blog.netlify.app/images/react.gif
image_position: top
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/react.yaml
  - src/data/categories/js.yaml
tags:
  - src/data/tags/react.yaml
  - src/data/tags/javascript.yaml
  - src/data/tags/links.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/using-the-dom.md
  - src/pages/blog/react-semantics.md
cmseditable: true
---

# 2. React Semantics/Terminology



---
## React Semantics





#### Babel

[Babel](https://babeljs.io/) transforms JavaScript ES\* (i.e., JS 2016, 2016, 2017) to ES5. Babel is the tool of choice from the React team for writing future ES\* code and transforming JSX to ES5 code.

___

#### Babel CLI

Babel comes with a CLI tool, called [Babel CLI](https://babeljs.io/docs/usage/cli/), that can be used to compile files from the command line.

___

#### Component Configuration Options (a.k.a, "Component Specifications")

The configuration arguments passed (as an object) to the `React.createClass()` function resulting in an instance of a React component.

___

#### Component Life Cycle Methods

A sub group of component events, semantically separated from the other component configuration options (i.e., `componentWillUnmount`, `componentDidUpdate`, `componentWillUpdate`, `shouldComponentUpdate`, `componentWillReceiveProps`, `componentDidMount`, `componentWillMount`). These methods are executed at specific points in a component's existence.

___

#### Document Object Model (a.k.a., DOM)

"The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document as a tree. The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects, possessing various properties and methods. Nodes can also have event handlers attached to them, and once an event is triggered, the event handlers get executed. Essentially, it connects web pages to scripts or programming languages." - [MSD](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

___

#### ES5

The 5th edition of the ECMAScript standard. The [ECMAScript 5.1 edition](https://www.ecma-international.org/ecma-262/5.1/) was finalized in June 2011.

___

#### ES6/ES 2015

The 6th edition of the ECMAScript standard. A.k.a, JavaScript 2015 or ECMAScript 2015. The [ECMAScript 6th edition](http://www.ecma-international.org/ecma-262/6.0/index.html) was finalized in June 2015.

___

#### ECMAScript 2016 (a.k.a, ES7)

The 7th edition of the ECMAScript standard. The [ECMAScript 7th edition](http://www.ecma-international.org/ecma-262/7.0/index.html) was finalized in June 2016.

___

#### ES\*

Used to represent the current version of JavaScript as well as potential future versions that can written today using tools like Babel. When you see "ES\*" it more than likely means you'll find uses of ES5, ES6, and ES7 together.

___

#### JSX

[JSX](https://jsx.github.io/) is an optional XML-like syntax extension to ECMAScript that can be used to define an HTML-like tree structure in a JavaScript file. The JSX expressions in a JavaScript file must be transformed to JavaScript syntax before a JavaScript engine can parse the file. Babel is typically used and recommended for transforming JSX expressions.

___

#### Node.js

[Node.js](https://nodejs.org/) is an open-source, cross-platform runtime environment for writing JavaScript. The runtime environment interprets JavaScript using [Google's V8 JavaScript engine](https://developers.google.com/v8/).

___

#### npm

[npm](https://www.npmjs.com/) is the package manager for JavaScript born from the Node.js community.

___

#### React Attributes/Props

In one sense you can think of props as the configuration options for React nodes and in another sense you can think of them as HTML attributes.

Props take on several roles:

1.  Props can become HTML attributes. If a prop matches a known HTML attribute then it will be added to the final HTML element in the DOM.
2.  Props passed to `createElement()` become values stored in a `prop` object as an instance property of `React.createElement()` instances (i.e., `[INSTANCE].props.[NAME OF PROP]`). Props by and large are used to input values into components.
3.  A few special props have side effects (e.g., [`key`](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children), [`ref`](https://facebook.github.io/react/docs/more-about-refs.html), and [`dangerouslySetInnerHTML`](https://facebook.github.io/react/tips/dangerously-set-inner-html.html))

___

#### React

[React](https://facebook.github.io/react/) is an open source JavaScript library for writing declarative, efficient, and flexible user interfaces.

___

#### React Component

A React component is created by calling `React.createClass()` (or, `React.Component` if using ES6 classes). This function takes an object of options that is used to configure and create a React component. The most common configuration option is the `render` function which returns React nodes. Thus, you can think of a React component as an abstraction containing one or more React nodes/components.

___

#### React Element Nodes (a.k.a., `ReactElement`)

An HTML or custom HTML element node representation in the Virtual DOM created using `React.createElement();`.

___

#### React Nodes

React nodes (i.e., element and text nodes) are the primary object type in React and can be created using `React.createElement('div');`. In other words React nodes are objects that represent DOM nodes and children DOM nodes. They are a light, stateless, immutable, virtual representation of a DOM node.

___

#### React Node Factories

A function that generates a React element node with a particular type property.

___

#### React Stateless Function Component

When a component is purely a result of props alone, no state, the component can be written as a pure function avoiding the need to create a React component instance.

```
var MyComponent = function(props){
    return <div>Hello {props.name}</div>;
};

ReactDOM.render(<MyComponent name="doug" />, app);
```

___

#### React Text Nodes (a.k.a., `ReactText`)

A text node representation in the Virtual DOM created using `React.createElement('div',null,'a text node');`.

___

#### Virtual DOM

An in-memory JavaScript tree of React elements/components that is used for efficient re-rendering (i.e., diffing via JavaScript) of the browser DOM.

___

#### Webpack

[Webpack](https://webpack.github.io/) is a module loader and bundler that takes modules (.js, .css, .txt, etc.) with dependencies and generates static assets representing these modules.

Need to take a few steps back and figure out [what is react](https://www.reactenlightenment.com/what-is-react.html) javascript and how you can use it?
