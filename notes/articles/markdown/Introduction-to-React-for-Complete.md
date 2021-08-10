# Introduction to React for Complete Beginners

All of the code examples below will be included a second time at the bottom of this article as an embedded gist.

---

### Introduction to React for Complete Beginners

All of the code examples below will be included a second time at the bottom of this article as an embedded gist, so that it is properly syntax highlighted.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript.

<figure><img src="https://cdn-images-1.medium.com/max/1200/0*Olfj44MF6WSzvlSM.png" class="graf-image" /></figure>

### React

> _React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript_

> _because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX_

> _include the code you want to be treated as JavaScript within curly braces: { ‘this is treated as JavaScript code’ }_

> _JSX code must be compiled into JavaScript_

> _under the hood the challenges are calling ReactDOM.render (JSX, document.getElementById(‘root’))_

> _One important thing to know about nested JSX is that it must return a single element._

> _For instance, several JSX elements written as siblings with no parent wrapper element will not transpile._

---

### From the React Docs:

### What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

React has a few different kinds of components, but we’ll start with `React.Component` subclasses:

    class ShoppingList extends React.Component {
      render() {
        return (
          <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }
    }

    // Example usage: <ShoppingList name="Mark" />

We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

Here, ShoppingList is a **React component class**, or **React component type**. A component takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render` method.

The `render` method returns a _description_ of what you want to see on the screen. React takes the description and displays the result. In particular, `render` returns a **React element**, which is a lightweight description of what to render. Most React developers use a special syntax called “JSX” which makes these structures easier to write. The `<div />` syntax is transformed at build time to `React.createElement('div')`. The example above is equivalent to:

    return React.createElement('div', {className: 'shopping-list'},
      React.createElement('h1', /* ... h1 children ... */),
      React.createElement('ul', /* ... ul children ... */)
    );

---

### Valid JSX:

    <div>
      <p>Paragraph One</p>
      <p>Paragraph Two</p>
      <p>Paragraph Three</p>
    </div>

---

### Invalid JSX:

    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>

#### To put comments inside JSX, you use the syntax {/\* \*/} to wrap around the comment text.

To put comments inside JSX, you use the syntax {/\* \*/} to wrap around the comment text.

The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.

    const JSX = (
      <div>
      {/* This is a comment */}
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
      </div>
    );

---

> _With React, we can render this JSX directly to the HTML DOM using React’s rendering API known as ReactDOM._

> _ReactDOM offers a simple method to render React elements to the DOM which looks like this:_

`ReactDOM.render(componentToRender, targetNode)`

- <span id="f724">the first argument is the React element or component that you want to render,</span>
- <span id="7093">and the second argument is the DOM node that you want to render the component to.</span>

> _ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them._

> _key difference in JSX is that you can no longer use the word class to define HTML classes._

- <span id="aafc">— -&gt; This is because class is a reserved word in JavaScript. Instead, JSX uses className</span>

> _the naming convention for all HTML attributes and event references in JSX become camelCase_

> _a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange. While this is a subtle difference, it is an important one to keep in mind moving forward._

### Apply a class of myDiv to the div provided in the JSX code.

- <span id="9500">The constant JSX should return a div element.</span>
- <span id="8d42">The div should have a class of myDiv.</span>

<!-- -->

    const JSX = (
      <div>
        <h1>Add a class to this div</h1>
      </div>
    );

### Ans:

    const JSX = (
      <div className="myDiv">
        <h1>Add a class to this div</h1>
      </div>
    );

### React: Learn About Self-Closing JSX Tags

-Another important way in which JSX differs from HTML is in the idea of the self-closing tag.

> _In HTML, almost all tags have both an opening and closing tag:_ `<div></div>;` _the closing tag always has a forward slash before the tag name that you are closing._

> _there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start._

> _For example the line-break tag can be written as_ `<br>` _or as_ `<br />,` _but should never be written as_ `<br></br>`_, since it doesn't contain any content._

> _In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed.  
> The line-break tag, for example, must always be written as_ `<br />` _in order to be valid JSX that can be transpiled.  
> A_ `<div>`_, on the other hand, can be written as_ `<div />`_or_`<div></div>`_.  
> The difference is that in the first syntax version there is no way to include anything in the_ `<div />`_._

### Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don’t change any of the content — you only need to close tags where they are needed.

    const JSX = (
      <div>
        <h2>Welcome to React!</h2> <br >
        <p>Be sure to close all tags!</p>
        <hr >
      </div>
    );

### Ans:

    const JSX = (
      <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
      </div>
    );

---

### React: Create a Stateless Functional Component

> _There are two ways to create a React component. The first way is to use a JavaScript function._

> _Defining a component in this way creates a stateless functional component._

> _think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data._

#### To create a component with a function, you simply write a JavaScript function that returns either JSX or null

- <span id="b514">React requires your function name to begin with a capital letter.</span>

> _Here’s an example of a stateless functional component that assigns an HTML class in JSX:_

    // After being transpiled, the <div> will have a CSS class of 'customClass'
    const DemoComponent = function() {
      return (
        <div className='customClass' />
      );
    };

> _Because a JSX component represents HTML, you could put several components together to create a more complex HTML page._

### The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.

    const MyComponent = function() {
      // Change code below this line

      // Change code above this line
    }

### ANS:

    const MyComponent = function() {
      // Change code below this line

    return (
       <div> Some Text </div >
      );

      // Change code above this line
    };

---

### React: Create a React Component

> _The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:_

    class Kitten extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <h1>Hi</h1>
        );
      }
    }

> _This creates an ES6 class Kitten which extends the React.Component class._

> _So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks._

> _Also notice the Kitten class has a constructor defined within it that calls super()_

> _It uses super() to call the constructor of the parent class, in this case React.Component_

> _The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component’s constructor with super, and pass props to both._

> _This makes sure the component is initialized properly. For now, know that it is standard for this code to be included._

### MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.

    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        // Change code below this line

        // Change code above this line
      }
    };

### ANS:

    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        // Change code below this line
     return (
       <div>
          <h1>Hello React!</h1>
          </div>
        );

        // Change code above this line
      }
    };

---

### React: Create a Component with Composition

> _Imagine you are building an App and have created three components, a Navbar, Dashboard, and Footer._

> _To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX._

- <span id="000b">For example, in the render method you could write:</span>

<!-- -->

    return (
     <App>
      <Navbar />
      <Dashboard />
      <Footer />
     </App>
    )

> _When React encounters a custom HTML tag that references another component (a component name wrapped in &lt; /&gt; like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the App component and the Navbar, Dashboard, and Footer._

### Challenge:

> _In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash._

- <span id="2ed5">Note:**ChildComponent is defined with an ES6 arrow function because this is a very common practice when using React**.</span>
- <span id="fddd">However, know that this is just a function.</span>

<!-- -->

    const ChildComponent = () => {
      return (
        <div>
          <p>I am the child</p>
        </div>
      );
    };

    class ParentComponent extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h1>I am the parent</h1>
            { /* Change code below this line */ }

            { /* Change code above this line */ }
          </div>
        );
      }
    };

⌛The React component should return a single div element.  
⌛The component should return two nested elements.  
⌛The component should return the ChildComponent as its second child.

### Ans:

    const ChildComponent = () => {
      return (
        <div>
          <p>I am the child</p>
        </div>
      );
    };

    class ParentComponent extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h1>I am the parent</h1>
            { /* Change code below this line */ }

            { /* Change code above this line */ }
          </div>
        );
      }
    };

### More Examples:

For more content follow me on GitHub:

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://portfolio42.netlify.app/…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

_More content at_ <a href="http://plainenglish.io/" class="markup--anchor markup--p-anchor"><em>plainenglish.io</em></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 19, 2021](https://medium.com/p/8021738aa1ad).

<a href="https://medium.com/@bryanguner/introduction-to-react-for-complete-beginners-8021738aa1ad" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 6, 2021.
