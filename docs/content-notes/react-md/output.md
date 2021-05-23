This appendix is a non-exhaustive list of new syntactic features and methods that were added to JavaScript in ES6. These features are the most commonly used and most helpful.

While this appendix doesn't cover ES6 classes, we go over the basics while learning about components in the book. In addition, this appendix doesn't include descriptions of some larger new features like promises and generators. If you'd like more info on those or on any topic below, we encourage you to reference the [Mozilla Developer Network's website](https://developer.mozilla.org/) \(MDN\).

## Prefer `const` and `let` over `var`

If you've worked with ES5 JavaScript before, you're likely used to seeing variables declared with `var` :

```text
ar myVariable = 5;
```

Both the `const` and `let` statements also declare variables. They were introduced in ES6.

Use `const` in cases where a variable is never re-assigned. Using `const` makes this clear to whoever is reading your code. It refers to the "constant" state of the variable in the context it is defined within.

If the variable will be re-assigned, use `let` .

We encourage the use of `const` and `let` instead of `var` . In addition to the restriction introduced by `const` , both `const` and `let` are _block scoped_ as opposed to _function scoped_. This scoping can help avoid unexpected bugs.

## Arrow functions

There are three ways to write arrow function bodies. For the examples below, let's say we have an array of city objects:

```text
onst cities = [
  { name: 'Cairo', pop: 7764700 },
  { name: 'Lagos', pop: 8029200 },
];
```

If we write an arrow function that spans multiple lines, we must use braces to delimit the function body like this:

```text
const formattedPopulations = cities.map((city) => {
  const popMM = (city.pop / 1000000).toFixed(2);
  return popMM + ' million';
});
console.log(formattedPopulations);
```

Note that we must also explicitly specify a `return` for the function.

However, if we write a function body that is only a single line \(or single expression\) we can use parentheses to delimit it:

```text
const formattedPopulations2 = cities.map((city) => (
  (city.pop / 1000000).toFixed(2) + ' million'
));
```

Notably, we don't use `return` as it's implied.

Furthermore, if your function body is terse you can write it like so:

```text
const pops = cities.map(city => city.pop);
console.log(pops);
```

The terseness of arrow functions is one of two reasons that we use them. Compare the one-liner above to this:

```text
const popsNoArrow = cities.map(function(city) { return city.pop });
```

Of greater benefit, though, is how arrow functions bind the `this` object.

The traditional JavaScript function declaration syntax \( `function () {}` \) will bind `this` in anonymous functions to the global object. To illustrate the confusion this causes, consider the following example:

```text
unction printSong() {
  console.log("Oops - The Global Object");
}

const jukebox = {
  songs: [
    {
      title: "Wanna Be Startin' Somethin'",
      artist: "Michael Jackson",
    },
    {
      title: "Superstar",
      artist: "Madonna",
    },
  ],
  printSong: function (song) {
    console.log(song.title + " - " + song.artist);
  },
  printSongs: function () {

    this.songs.forEach(function(song) {

      this.printSong(song);
    });
  },
}

jukebox.printSongs();
```

The method `printSongs()` iterates over `this.songs` with `forEach()` . In this context, `this` is bound to the object \( `jukebox` \) as expected. However, the anonymous function passed to `forEach()` binds its internal `this` to the global object. As such, `this.printSong(song)` calls the function declared at the top of the example, _not_ the method on `jukebox` .

JavaScript developers have traditionally used workarounds for this behavior, but arrow functions solve the problem by **capturing the `this` value of the enclosing context**. Using an arrow function for `printSongs()` has the expected result:

```text
  printSongs: function () {
    this.songs.forEach((song) => {

      this.printSong(song);
    });
  },
}

jukebox.printSongs();
```

For this reason, throughout the book we use arrow functions for all anonymous functions.

## Modules

ES6 formally supports modules using the `import` / `export` syntax.

**Named exports**

Inside any file, you can use `export` to specify a variable the module should expose. Here's an example of a file that exports two functions:

```text
export const sayHi = () => (console.log('Hi!'));
export const sayBye = () => (console.log('Bye!'));

const saySomething = () => (console.log('Something!'));
```

Now, anywhere we wanted to use these functions we could use `import` . We need to specify which functions we want to import. A common way of doing this is using ES6's destructuring assignment syntax to list them out like this:

```text
import { sayHi, sayBye } from './greetings';

sayHi(); 
sayBye();
```

Importantly, the function that was _not_ exported \( `saySomething` \) is unavailable outside of the module.

Also note that we supply a **relative path** to `from` , indicating that the ES6 module is a local file as opposed to an npm package.

Instead of inserting an `export` before each variable you'd like to export, you can use this syntax to list off all the exposed variables in one area:

```text
const sayHi = () => (console.log('Hi!'));
const sayBye = () => (console.log('Bye!'));

const saySomething = () => (console.log('Something!'));

export { sayHi, sayBye };
```

We can also specify that we'd like to import all of a module's functionality underneath a given namespace with the `import * as <Namespace>` syntax:

```text
import * as Greetings from './greetings';

Greetings.sayHi();

Greetings.sayBye();

Greetings.saySomething();
```

**Default export**

The other type of export is a default export. A module can only contain one default export:

```text
const sayHi = () => (console.log('Hi!'));
const sayBye = () => (console.log('Bye!'));

const saySomething = () => (console.log('Something!'));

const Greetings = { sayHi, sayBye };

export default Greetings;
```

This is a common pattern for libraries. It means you can easily import the library wholesale without specifying what individual functions you want:

```text
import Greetings from './greetings';

Greetings.sayHi(); 
Greetings.sayBye();
```

It's not uncommon for a module to use a mix of both named exports and default exports. For instance, with `react-dom` , you can import `ReactDOM` \(a default export\) like this:

```text
import ReactDOM from 'react-dom';

ReactDOM.render(

);
```

Or, if you're only going to use the `render()` function, you can import the named `render()` function like this:

```text
import { render } from 'react-dom';

render(

);
```

To achieve this flexibility, the export implementation for `react-dom` looks something like this:

```text
export const render = (component, target) => {

};

const ReactDOM = {
  render,

};

export default ReactDOM;
```

If you want to play around with the module syntax, check out the folder `code/webpack/es6-modules` .

For more reading on ES6 modules, see this article from Mozilla: "[ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)".

## `Object.assign()`

We use `Object.assign()` often throughout the book. We use it in areas where we want to create a modified version of an existing object.

`Object.assign()` accepts any number of objects as arguments. When the function receives two arguments, it _copies_ the properties of the second object onto the first, like so:

```text
onst coffee = { };
const noCream = { cream: false };
const noMilk = { milk: false };
Object.assign(coffee, noCream);
```

It is idiomatic to pass in three arguments to `Object.assign()` . The first argument is a new JavaScript object, the one that `Object.assign()` will ultimately return. The second is the object whose properties we'd like to build off of. The last is the changes we'd like to apply:

```text
const coffeeWithMilk = Object.assign({}, coffee, { milk: true });
```

`Object.assign()` is a handy method for working with "immutable" JavaScript objects.

## Template literals

In ES5 JavaScript, you'd interpolate variables into strings like this:

```text
var greeting = 'Hello, ' + user + '! It is ' + degF + ' degrees outside.';
```

With ES6 template literals, we can create the same string like this:

```text
const greeting = `Hello, ${user}! It is ${degF} degrees outside.`;
```

## The spread operator \( `...` \)

In arrays, the ellipsis `...` operator will _expand_ the array that follows into the parent array. The spread operator enables us to succinctly construct new arrays as a composite of existing arrays.

Here is an example:

```text
onst a = [ 1, 2, 3 ];
const b = [ 4, 5, 6 ];
const c = [ ...a, ...b, 7, 8, 9 ];

console.log(c);
```

Notice how this is different than if we wrote:

```text
const d = [ a, b, 7, 8, 9 ];
console.log(d);
```

## Enhanced object literals

In ES5, all objects were required to have explicit key and value declarations:

```text
const explicit = {
  getState: getState,
  dispatch: dispatch,
};
```

In ES6, you can use this terser syntax whenever the property name and variable name are the same:

```text
const implicit = {
  getState,
  dispatch,
};
```

Lots of open source libraries use this syntax, so it's good to be familiar with it. But whether you use it in your own code is a matter of stylistic preference.

## Default arguments

With ES6, you can specify a default value for an argument in the case that it is `undefined` when the function is called.

This:

```text
unction divide(a, b) {

  const divisor = typeof b === 'undefined' ? 1 : b;

  return a / divisor;
}
```

Can be written as this:

```text
function divide(a, b = 1) {
  return a / b;
}
```

In both cases, using the function looks like this:

```text
divide(14, 2);

divide(14, undefined);

divide(14);
```

Whenever the argument `b` in the example above is `undefined` , the default argument is used. Note that `null` will not use the default argument:

```text
divide(14, null);
```

## Destructuring assignments

### For arrays

In ES5, extracting and assigning multiple elements from an array looked like this:

```text
ar fruits = [ 'apples', 'bananas', 'oranges' ];
var fruit1 = fruits[0];
var fruit2 = fruits[1];
```

In ES6, we can use the destructuring syntax to accomplish the same task like this:

```text
const [ veg1, veg2 ] = [ 'asparagus', 'broccoli', 'onion' ];
console.log(veg1); 
console.log(veg2);
```

The variables in the array on the left are "matched" and assigned to the corresponding elements in the array on the right. Note that `'onion'` is ignored and has no variable bound to it.

### For objects

We can do something similar for extracting object properties into variables:

```text
const smoothie = {
  fats: [ 'avocado', 'peanut butter', 'greek yogurt' ],
  liquids: [ 'almond milk' ],
  greens: [ 'spinach' ],
  fruits: [ 'blueberry', 'banana' ],
};

const { liquids, fruits } = smoothie;

console.log(liquids); 
console.log(fruits);
```

### Parameter context matching

We can use these same principles to bind arguments inside a function to properties of an object supplied as an argument:

```text
const containsSpinach = ({ greens }) => {
  if (greens.find(g => g === 'spinach')) {
    return true;
  } else {
    return false;
  }
};

containsSpinach(smoothie);
```

We do this often with functional React components:

```text
const IngredientList = ({ ingredients, onClick }) => (
  <ul className='IngredientList'>
    {
      ingredients.map(i => (
        <li
          key={i.id}
          onClick={() => onClick(i.id)}
          className='item'
        >
          {i.name}
        </li>
      ))
    }
  </ul>
)
```

Here, we use destructuring to extract the props into variables \( `ingredients` and `onClick` \) that we then use inside the component's function body.

# Components And Props

## Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a [detailed component API reference here](https://reactjs.org/docs/react-component.html).

Conceptually, components are like JavaScript functions. They accept arbitrary inputs \(called “props”\) and return React elements describing what should appear on the screen.

### Function and Class Components <a id="function-and-class-components"></a>

The simplest way to define a component is to write a JavaScript function:

```text
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This function is a valid React component because it accepts a single “props” \(which stands for properties\) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) to define a component:

```text
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The above two components are equivalent from React’s point of view.

Function and Class components both have some additional features that we will discuss in the [next sections](https://reactjs.org/docs/state-and-lifecycle.html).

### Rendering a Component <a id="rendering-a-component"></a>

Previously, we only encountered React elements that represent DOM tags:

```text
const element = <div />;
```

However, elements can also represent user-defined components:

```text
const element = <Welcome name="Sara" />;
```

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

For example, this code renders “Hello, Sara” on the page:

```text
function Welcome(props) {  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://reactjs.org/redirect-to-codepen/components-and-props/rendering-a-component)

Let’s recap what happens in this example:

1. We call `ReactDOM.render()` with the `<Welcome name="Sara" />` element.
2. React calls the `Welcome` component with `{name: 'Sara'}` as the props.
3. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.

> **Note:** Always start component names with a capital letter.
>
> React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires `Welcome` to be in scope.
>
> To learn more about the reasoning behind this convention, please read [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized).

### Composing Components <a id="composing-components"></a>

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an `App` component that renders `Welcome` many times:

```text
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />      <Welcome name="Cahal" />      <Welcome name="Edite" />    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://reactjs.org/redirect-to-codepen/components-and-props/composing-components)

Typically, new React apps have a single `App` component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.

### Extracting Components <a id="extracting-components"></a>

Don’t be afraid to split components into smaller components.

For example, consider this `Comment` component:

```text
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[**Try it on CodePen**](https://reactjs.org/redirect-to-codepen/components-and-props/extracting-components)

It accepts `author` \(an object\), `text` \(a string\), and `date` \(a date\) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.

First, we will extract `Avatar` :

```text
function Avatar(props) {
  return (
    <img className="Avatar"      src={props.user.avatarUrl}      alt={props.user.name}    />  );
}
```

The `Avatar` doesn’t need to know that it is being rendered inside a `Comment` . This is why we have given its prop a more generic name: `user` rather than `author` .

We recommend naming props from the component’s own point of view rather than the context in which it is being used.

We can now simplify `Comment` a tiny bit:

```text
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Next, we will extract a `UserInfo` component that renders an `Avatar` next to the user’s name:

```text
function UserInfo(props) {
  return (
    <div className="UserInfo">      <Avatar user={props.user} />      <div className="UserInfo-name">        {props.user.name}      </div>    </div>  );
}
```

This lets us simplify `Comment` even further:

```text
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[**Try it on CodePen**](https://reactjs.org/redirect-to-codepen/components-and-props/extracting-components-continued)

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times \( `Button` , `Panel` , `Avatar` \), or is complex enough on its own \( `App` , `FeedStory` , `Comment` \), it is a good candidate to be extracted to a separate component.

### Props are Read-Only <a id="props-are-read-only"></a>

Whether you declare a component [as a function or a class](https://reactjs.org/docs/components-and-props.html#function-and-class-components), it must never modify its own props. Consider this `sum` function:

```text
function sum(a, b) {
  return a + b;
}
```

Such functions are called [“pure”](https://en.wikipedia.org/wiki/Pure_function) because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

```text
function withdraw(account, amount) {
  account.total -= amount;
}
```

React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

Of course, application UIs are dynamic and change over time. In the [next section](https://reactjs.org/docs/state-and-lifecycle.html), we will introduce a new concept of “state”. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

# Composition vs Inheritance

React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.

### Containment

Some components don’t know their children ahead of time. This is especially common for components like `Sidebar` or `Dialog` that represent generic “boxes”.

We recommend that such components use the special `children` prop to pass children elements directly into their output:

```text
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}    </div>
  );
}
```

This lets other components pass arbitrary children to them by nesting the JSX:

```text
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">        Welcome      </h1>      <p className="Dialog-message">        Thank you for visiting our spacecraft!      </p>    </FancyBorder>
  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/ozqNOV?editors=0010)

Anything inside the `<FancyBorder>` JSX tag gets passed into the `FancyBorder` component as a `children` prop. Since `FancyBorder` renders `{props.children}` inside a `<div>` , the passed elements appear in the final output.

While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using `children` :

```text
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}      </div>
      <div className="SplitPane-right">
        {props.right}      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />      }
      right={
        <Chat />      } />
  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/gwZOJp?editors=0010)

React elements like `<Contacts />` and `<Chat />` are just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.

### Specialization

Sometimes we think about components as being “special cases” of other components. For example, we might say that a `WelcomeDialog` is a special case of `Dialog` .

In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:

```text
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}      </h1>
      <p className="Dialog-message">
        {props.message}      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog      title="Welcome"      message="Thank you for visiting our spacecraft!" />  );
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/kkEaOZ?editors=0010)

Composition works equally well for components defined as classes:

```text
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}               onChange={this.handleChange} />        <button onClick={this.handleSignUp}>          Sign Me Up!        </button>      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/gwZbYa?editors=0010)

### So What About Inheritance?

At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.

# downloads

{% file src="../.gitbook/assets/components-and-props-react.md" caption="componentsandProps" %}

{% file src="../.gitbook/assets/lifting-state-up-react.md" caption="State" %}

{% file src="../.gitbook/assets/jsx-in-depth-react \(1\).md" caption="JSX" %}

# Hello World

## Hello World

The smallest React example looks like this:

```text
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

It displays a heading saying “Hello, world!” on the page.

[**Try it on CodePen**](https://reactjs.org/redirect-to-codepen/hello-world)

Click the link above to open an online editor. Feel free to make some changes, and see how they affect the output. Most pages in this guide will have editable examples like this one.

### How to Read This Guide <a id="how-to-read-this-guide"></a>

In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.

> Tip
>
> This guide is designed for people who prefer **learning concepts step by step**. If you prefer to learn by doing, check out our [practical tutorial](https://reactjs.org/tutorial/tutorial.html). You might find this guide and the tutorial complementary to each other.

This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.

Every chapter in this guide builds on the knowledge introduced in earlier chapters. **You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar.** For example, [“Introducing JSX”](https://reactjs.org/docs/introducing-jsx.html) is the next chapter after this one.

### Knowledge Level Assumptions <a id="knowledge-level-assumptions"></a>

React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. **If you don’t feel very confident, we recommend** [**going through a JavaScript tutorial**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) **to check your knowledge level** and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.

> Note
>
> This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years, [these three points](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c) should get you most of the way.

# JSX

## Introducing JSX

Consider this variable declaration:

```text
const element = <h1>Hello, world!</h1>;
```

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the [next section](https://reactjs.org/docs/rendering-elements.html). Below, you can find the basics of JSX necessary to get you started.

#### Why JSX? <a id="why-jsx"></a>

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating _technologies_ by putting markup and logic in separate files, React [separates _concerns_](https://en.wikipedia.org/wiki/Separation_of_concerns) with loosely coupled units called “components” that contain both. We will come back to components in a [further section](https://reactjs.org/docs/components-and-props.html), but if you’re not yet comfortable putting markup in JS, [this talk](https://www.youtube.com/watch?v=x7cQ3mrcKaY) might convince you otherwise.

React [doesn’t require](https://reactjs.org/docs/react-without-jsx.html) using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

With that out of the way, let’s get started!

#### Embedding Expressions in JSX <a id="embedding-expressions-in-jsx"></a>

In the example below, we declare a variable called `name` and then use it inside JSX by wrapping it in curly braces:

```text
const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

You can put any valid [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) inside the curly braces in JSX. For example, `2 + 2` , `user.firstName` , or `formatName(user)` are all valid JavaScript expressions.

In the example below, we embed the result of calling a JavaScript function, `formatName(user)` , into an `<h1>` element.

```text
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://reactjs.org/redirect-to-codepen/introducing-jsx)

We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of [automatic semicolon insertion](https://stackoverflow.com/q/2846283).

#### JSX is an Expression Too <a id="jsx-is-an-expression-too"></a>

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions:

```text
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}
```

#### Specifying Attributes with JSX <a id="specifying-attributes-with-jsx"></a>

You may use quotes to specify string literals as attributes:

```text
const element = <div tabIndex="0"></div>;
```

You may also use curly braces to embed a JavaScript expression in an attribute:

```text
const element = <img src={user.avatarUrl}></img>;
```

Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes \(for string values\) or curly braces \(for expressions\), but not both in the same attribute.

> **Warning:**
>
> Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.
>
> For example, `class` becomes [ `className` ](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) in JSX, and `tabindex` becomes [ `tabIndex` ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

#### Specifying Children with JSX <a id="specifying-children-with-jsx"></a>

If a tag is empty, you may close it immediately with `/>` , like XML:

```text
const element = <img src={user.avatarUrl} />;
```

JSX tags may contain children:

```text
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

#### JSX Prevents Injection Attacks <a id="jsx-prevents-injection-attacks"></a>

It is safe to embed user input in JSX:

```text
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS \(cross-site-scripting\)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

#### JSX Represents Objects <a id="jsx-represents-objects"></a>

Babel compiles JSX down to `React.createElement()` calls.

These two examples are identical:

```text
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```text
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```text
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

We will explore rendering React elements to the DOM in the [next section](https://reactjs.org/docs/rendering-elements.html).

> **Tip:**
>
> We recommend using the [“Babel” language definition](https://babeljs.io/docs/en/next/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted.

# REACT ENVIORMENT

First thing we need to do is setup our development environment and hook up React. Our end goal will be to get a basic message up on screen. Let's create a new directory and download the packages we need.

```text
mkdir starwars_api
cd starwars_api
npm init -y
npm install --save react react-dom redux react-redux redux-thunk
npm install --save-dev babel-core babel-preset-es2015 babel-preset-react webpack@2.1.0-beta.27 file-loader babel-loader webpack-dev-server@2.1.0-beta.11 react-hot-loader@3.0.0-beta.6
```

Now let's create our entrance file. Create a file at `src/app.js` and put the following in it.

```text
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
      , container
    );
  });
}
```

We are displaying a central `App` component. So let's create it! Create a file at `src/components/App.js` and put the following in it.

```text
import React from 'react';

const App = () =>
  <div className='container'>
    <div className='row'>
      Hello, World!
    </div>
  </div>;

export default App;
```

We also need to create our `index.html` file that we are including in our `app.js` file. Create a file at `src/index.html` and put the following in it.

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Star Wars</title>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  <style>
    h1 {
      font-size: 30px;
      font-weight: 200;
    }

    h2 {
      font-size: 22px;
      margin-top: 5px;
    }

    ul {
      padding-left: 15px;
    }
  </style>
</head>
<body>
  <div id="app-container"></div>
  <script src="app.bundle.js"></script>
</body>
</html>
```

This is a basic HTML page. We are including Bootstrap and its basic theme for some simple styles. We also are adding some styles in a `style` tag to help with the sizing of some elements. In the `body` , we are adding our container element and our main app bundle.

Now that we have all that setup, let's create a webpack config that we can use to build our project. Create a file in the root of your project called `webpack.config.js` and put the following in it.

```text
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};
```

Here we are exporting our config object like normal. We point webpack to start at our `app.js` file and tell everything to output to a `build` directory. We run all HTML files though the file loader. This essentially just moves the file to our `build` directory. Also, we run our JS files through the babel loader to make sure they are transpiled to code that most browsers these days understand. Lastly, we are including a plugin that will give us pretty output in the console.

Let's create a `.babelrc` file to configure babel.

```text
{
  "presets": [
    ["es2015", { "modules": false }],
    "react"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```

Last thing. Let's create some npm scripts so that we don't need to remember the commands we need to run our application. Add the following scripts to your `package.json` file in the `scripts` section.

# React-Resources

#### **Awesome React** [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collection of awesome things regarding the React ecosystem.

* React
  + React General Resources
  + React Community
  + React Online Playgrounds
  + React Tutorials
    - React General Tutorials
    - React Hooks
    - React and TypeScript
    - React Performance
    - React Internals
    - React Interview Questions
  + React Tools
    - React Development Tools
    - React Frameworks
    - React Styling
    - React Routing
    - React Component Libraries
    - React Awesome Components
    - React Testing
    - React Libraries
    - React Integration
    - React State Management
    - React AR and VR
    - React Renderers
    - Forms
    - Autocomplete
    - Graphics
    - Data Managing
    - Maps
    - Charts
* React Native
  + React Native General Resources
  + React Native Tutorials
  + React Native Development Tools
  + React Native Sample Apps
  + React Native Boilerplates
  + React Native Awesome Components
  + React Native Libraries
* Redux
  + Redux General Resources
  + Redux Tools
  + Redux Tutorials
* GraphQL
  + GraphQL General Resources
  + GraphQL Tools
  + GraphQL Tutorials
  + GraphQL Implementations
  + Database Integration
* Relay
  + Relay General Resources
  + Relay Tutorials
  + Relay Tools
* Videos
  + Important Talks
  + React.js Conf 2015 Playlist
  + ReactEurope Conf 2015 Day 1 Playlist
  + ReactEurope Conf 2015 Day 2 Playlist
  + ReactRally Conf 2015 Playlist
  + React.js Conf 2016 Playlist
  + ReactRally Conf 2016 Playlist
  + React.js Amsterdam 2018 Playlist
  + Video Tutorials
* Demo React Apps
* Real React Apps
* Contribution

#### React

> JavaScript Library for building User Interfaces

**React General Resources**

* [React Official Website](https://reactjs.org/)
* [React Documentation](https://reactjs.org/docs)
* [React GitHub](https://github.com/facebook/react)

**React Community**

* [Reactiflux Discord Channel](http://www.reactiflux.com/)
* [React StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
* [React Twitter](https://twitter.com/reactjs)

**React Online Playgrounds**

* [CodePen](https://reactjs.org/redirect-to-codepen/hello-world)
* [CodeSandbox](https://codesandbox.io/s/new)
* [JSFiddle](https://jsfiddle.net/boilerplate/react-jsx)

**Another Awesome Lists**

* [React/Redux Links](https://github.com/markerikson/react-redux-links)

**React Tutorials**

**React General Tutorials**

* [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Using React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
* [Scrimba - Learn React for free interactively](https://scrimba.com/g/glearnreact)
* [FreeCodeCamp React Challenges](https://learn.freecodecamp.org/front-end-libraries/react)
* [React Cheatsheet](https://devhints.io/react)
* [React Patterns](https://reactpatterns.com/)
* [Setup Flow with React](https://flow.org/en/docs/react/)

**React Hooks**

* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
* [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks)
* [Replacing Redux with React Hooks and Context](https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533)
* [React Hooks cheat sheet: Unlock solutions to common problems](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
* [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data/)
* [Easy to understand React Hook recipes](https://usehooks.com/)
* [React Hooks Video Tutorial](https://www.youtube.com/playlist?list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM)

**React and TypeScript**

* [TypeScript, React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
* [JSX in TypeScript](https://www.typescriptlang.org/docs/handbook/jsx.html)
* [Cheatsheets for experienced React developers getting started with TypeScript](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
* [React by Example](https://reactbyexample.github.io/)

**React Performance**

* [React Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)
* [Introducing the React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
* [Optimizing React: Virtual DOM explained](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained)
* [A Definitive Guide to Optimize Major Performance issues in React](https://www.simform.com/react-performance/)
* [Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)
* [Using the React DevTools Profiler to Diagnose React App Performance Issues](https://www.netlify.com/blog/2018/08/29/using-the-react-devtools-profiler-to-diagnose-react-app-performance-issues/)
* [Top 5 Practices to Boost React Performance](https://www.codementor.io/blizzerand/top-5-practices-to-boost-react-performance-jv6zr89ep)
* [React is Slow, React is Fast: Optimizing react Apps in Practice](https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba)
* [Rendering large lists with react-window](https://addyosmani.com/blog/react-window/)

**React Internals**

* [Reconciliation](https://reactjs.org/docs/reconciliation.html)
* [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
* [Build your own React](https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5)
* [Inside Fiber: In-depth overview of the new reconciliation algorithm in React](https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e)
* [Entire React code base explanation by visual block schemes](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS)

**React Interview Questions**

* [13 Essential React Interview Questions](https://www.toptal.com/react/interview-questions)
* [List of React interview Questions and Answers](https://github.com/sudheerj/reactjs-interview-questions)
* [React Coding Challenges](https://github.com/alexgurr/react-coding-challenges/)

**React Tools**

**React Development Tools**

* [react-devtools](https://github.com/facebook/react-devtools) - Inspection of React component hierarchy in the Chrome and Firefox Developer Tools
* [react-hot-loader](https://github.com/gaearon/react-hot-loader) - Tweak React components in real time
* [react-loadable](https://github.com/jamiebuilds/react-loadable) - A higher order component for loading components with promises
* [loadable-components](https://github.com/smooth-code/loadable-components) - React code splitting made easy
* [reactotron](https://github.com/skellock/reactotron) - A desktop app for inspecting your React and React Native projects
* [storybook](https://github.com/storybookjs/storybook) - UI component dev & test
* [docz](https://github.com/doczjs/docz) - Zero Config, live-reloading documentation with Markdown + JSX
* [react-styleguidist](https://github.com/styleguidist/react-styleguidist) - Isolated React component development environment with a living style guide
* [react-cosmos](https://github.com/react-cosmos/react-cosmos) - Dev tool for creating reusable React components
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Static AST checker for a11y rules on JSX elements
* [@axe-core/react](https://github.com/dequelabs/axe-core-npm) - Accessibility auditing for React applications
* [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md) - Small JavaScript Compiler for quickly converting JSX to JS directly on a web page
* [Why Did You Render](https://github.com/welldone-software/why-did-you-render) - Monkey patches React to notify you about avoidable re-renders.
* [Divjoy](https://divjoy.com) - React codebase and UI generator to speed up development \(paid\)
* [Plasmic](https://www.plasmic.app/) - Powerful design tool for building your React components visually.

**React Starter Kits and Toolchains**

* [create-react-app](https://github.com/facebook/create-react-app) - Set up a modern Web app by running one command
* [Razzle](https://razzlejs.org/) - Build production ready React applications. Razzle is toolchain for modern static and dynamic websites and web applications
* [Neutrino React Preset](https://neutrinojs.org/packages/react/) - `@neutrinojs/react` is a Neutrino preset that supports building React web applications
* [react-starter-kit](https://github.com/kriasoft/react-starter-kit) - Isomorphic Web app boilerplate
* [create-react-library](https://github.com/transitive-bullshit/create-react-library) - CLI for creating reusable, modern React libraries using Rollup and create-react-app.
* [tsdx](https://tsdx.io/) - Zero-config CLI for TypeScript package development

**React Frameworks**

* [next.js](https://github.com/vercel/next.js) - The React Framework
* [gatsby.js](https://github.com/gatsbyjs/gatsby) - Free and open source framework based on React
* [react-admin](https://github.com/marmelab/react-admin) - Frontend Framework for building B2B applications on top of REST/GraphQL APIs
* [remix](https://remix.run/) - Finally, a killer React framework from the creators of React Router
* [Blitz](https://blitzjs.com) - The Fullstack React Framework
* [aleph.js](https://github.com/alephjs/aleph.js) - The React Framework in Deno

**React Styling**

* [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age
* [emotion](https://github.com/emotion-js/emotion) - Library designed for writing CSS styles with JavaScript
* [radium](https://github.com/FormidableLabs/radium) - A toolchain for React component styling
* [jss](https://github.com/cssinjs/jss) - Authoring tool for CSS
* [aphrodite](https://github.com/Khan/aphrodite) - Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation

**React Routing**

* [react-router](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [navi](https://github.com/frontarm/navi) - Declarative, asynchronous routing for React
* [curi](https://github.com/pshrmn/curi) - JavaScript router for single-page applications
* [reach](https://github.com/reach/router) - Next Generation Routing for React
* [universal-router](https://github.com/kriasoft/universal-router) - A simple middleware-style router for isomorphic JavaScript web apps
* [wouter](https://github.com/molefrog/wouter) - A minimalist-friendly ~1.3KB routing library

**React Component Libraries**

* [material-ui](https://github.com/mui-org/material-ui) - React components for faster and easier web development
* [blueprint](https://github.com/palantir/blueprint) - A React-based UI toolkit for the webs
* [Fluent UI](https://github.com/microsoft/fluentui) - A set of React components for building Microsoft web experiences
* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap components built with React
* [reactstrap](https://github.com/reactstrap/reactstrap) - Simple React Bootstrap 4 components
* [ant-design](https://github.com/ant-design/ant-design) - A design system with values of Nature and Determinacy
* [chakra-ui](https://github.com/chakra-ui/chakra-ui/) - Simple, Modular & Accessible UI Components for your React Applications
* [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) - The official Semantic-UI-React integration
* [evergreen](https://github.com/segmentio/evergreen) - Evergreen React UI Framework by Segment
* [grommet](https://github.com/grommet/grommet) - A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package
* [rebass](https://github.com/rebassjs/rebass) - React primitive UI components built with styled-system
* [reakit](https://github.com/reakit/reakit) - Accessible, Composable and Customizable components for React
* [rsuite](https://github.com/rsuite/rsuite) - A suite of React components
* [atlaskit](https://bitbucket.org/atlassian/atlaskit-mk-2) - Atlassian's official UI library, built according to the Atlassian Design Guidelines.
* [baseweb](https://github.com/uber/baseweb) - Base Web is a foundation for initiating, evolving, and unifying web products.
* [primereact](https://github.com/primefaces/primereact) - A complete UI Framework for React with 50+ components featuring material, bootstrap and custom themes.
* [eui](https://github.com/elastic/eui) - Elastic UI Framework
* [react-spectrum](https://github.com/adobe/react-spectrum) - Adobe's collection of libraries and tools that help you build adaptive, accessible, and robust user experiences
* [ring-ui](https://github.com/JetBrains/ring-ui) - JetBrains Web UI components
* [react-bulma-components](https://github.com/couds/react-bulma-components) - React components for Bulma framework
* [react-bulma](https://github.com/kulakowka/react-bulma) - React.js components for Modern CSS framework based on Flexbox
* [trunx](https://github.com/fibo/trunx) - Super Saiyan React components, son of awesome Bulma, implemented in TypeScript
* [bumbag-ui](https://github.com/bumbag/bumbag-ui) - Build accessible & themeable React applications with your Bumbag

**React Awesome Components**

* [Awesome React Components list](https://github.com/brillout/awesome-react-components)
* [react-select](https://github.com/JedWatson/react-select) - The Select Component for React
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Beautiful and accessible drag and drop for lists with React
* [react-dnd](https://github.com/react-dnd/react-dnd) - Drag and Drop for React
* [react-grid-layout](https://github.com/strml/react-grid-layout) - A draggable and resizable grid layout with responsive breakpoints
* [react-table](https://github.com/tannerlinsley/react-table/) - A lightweight, fast and extendable datagrid for React
* [react-data-grid](https://github.com/adazzle/react-data-grid) - Excel-like grid component built with React
* [react-draggable](https://github.com/mzabriskie/react-draggable) - React draggable component
* [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable) - A resizable and draggable component for React
* [react-resizable](https://github.com/strml/react-resizable) - A simple React component that is resizable with a handle
* [react-resizable-box](https://github.com/bokuweb/react-resizable-box) - A resizable component for React
* [react-searchbox-awesome](https://github.com/axmz/react-searchbox-awesome) - Minimalistic searchbox
* [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane) - A sortable and resizable pane component for React
* [react-spaces](https://github.com/aeagle/react-spaces) - Nestable resizable, anchored, scrollable components
* [react-dates](https://github.com/airbnb/react-dates) - An easily internationalizable, mobile-friendly datepicker library for the web
* [react-big-calendar](https://github.com/intljusticemission/react-big-calendar) - Calendar component
* [react-datepicker](https://github.com/Hacker0x01/react-datepicker/) - ReactJS Datepicker
* [react-list](https://github.com/orgsync/react-list) - A versatile infinite scroll React component
* [react-intl](https://github.com/yahoo/react-intl) - Internationalize React apps
* [react-i18next](https://github.com/i18next/react-i18next) - Internationalization for React done right
* [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) - A fully accessible React modal
* [react-hotkeys](https://github.com/greena13/react-hotkeys) - Declarative hotkey and focus area management for React
* [react-keydown](https://github.com/glortho/react-keydown) - Lightweight keydown wrapper for React components
* [react-joyride](https://github.com/gilbarbara/react-joyride) - Create guided tours for your apps
* [react-virtualized](https://github.com/bvaughn/react-virtualized) - React components for efficiently rendering large lists and tabular data
* [react-window](https://github.com/bvaughn/react-window) - React components for efficiently rendering large lists and tabular data
* [react-text-mask](https://github.com/text-mask/text-mask) - Input mask for React
* [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton) - Create skeleton screens that automatically adapt to your app
* [react-spinkit](https://github.com/KyleAMathews/react-spinkit) - A collection of loading indicators animated with CSS for React
* [rheostat](https://github.com/airbnb/rheostat) - Accessible slider component built with React
* [qrcode.react](https://github.com/zpao/qrcode.react) - QR component for use with React
* [react-archer](https://github.com/pierpo/react-archer) - Draw arrows between React elements
* [react-pdf-viewer](https://github.com/phuoc-ng/react-pdf-viewer) - A PDF viewer made for React
* [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) - Easily apply tilt hover effect on React components
* [react-popper](https://github.com/popperjs/react-popper) - Position tooltips and popovers in an elegant, performant manner
* [react-tsparticles](https://github.com/matteobruni/tsparticles) - Easily create highly customizable particles animations
* [react-spring](https://github.com/pmndrs/react-spring) - Spring-physics based animation library for React applications
* [framer-motion](https://github.com/framer/motion) - A React library to power production-ready animations
* [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) - React Component for creating an 'Accordion' that adheres to the WAI ARIA spec for accessibility.
* [react-truncate-markup](https://github.com/parsable/react-truncate-markup) - React component for truncating JSX markup.
* [react-cookie](https://github.com/reactivestack/cookies) - Universal cookies for React
* [react-slick](https://github.com/akiran/react-slick) - Carousel component built with React
* [react-gtm-module](https://github.com/alinemorelli/react-gtm) - Google Tag Manager Module for React
* [react-device-detect](https://github.com/duskload/react-device-detect) - Detect device for React
* [react-colorful](https://github.com/omgovich/react-colorful) - A tiny \(2, 5 KB\), dependency-free, fast and accessible color picker component
* [react-modal](https://github.com/reactjs/react-modal) - Accessible modal dialog component for React
* [cleave.js](https://github.com/nosir/cleave.js) - Format input text content when you are typing
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - Font Awesome 5 React component

**React Testing**

* [jest](https://github.com/facebook/jest) - Delightful JavaScript Testing Framework
* [enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utilities for React
* [react-testing-library](https://github.com/testing-library/react-testing-library) - Simple and complete React DOM testing utilities
* [react-hooks-testing-library](https://github.com/mpeyper/react-hooks-testing-library) - React hooks testing utilities that encourage good testing practices
* [majestic](https://github.com/Raathigesh/majestic) - Zero config GUI for Jest

**React Libraries**

* [react-border-wrapper](https://github.com/Metroxe/react-border-wrapper) - A wrapper for placing elements along div borders in React.
* [react-magic](https://github.com/reactjs/react-magic) - Automatically AJAXify plain HTML with the power of React
* [react-toolbox](https://github.com/react-toolbox/react-toolbox) - A set of React components implementing Google's Material Design specification
* [tcomb-react](https://github.com/gcanti/tcomb-react) - Library allowing you to check all the props of your React components
* [react-responsive](https://github.com/wearefractal/react-responsive) - Media queries in react for responsive design
* [preact](https://git.io/preact) - Fast 3kb React alternative with the same ES6 API.
* [riotjs](https://github.com/muut/riotjs) - A React-like, 3.5KB user interface library
* [Maple.js](https://github.com/Wildhoney/Maple.js) - Bringing the concept of web-components to React
* [react-i13n](https://github.com/yahoo/react-i13n) - A performant, scalable and pluggable approach to instrumenting your React application
* [react-icons](https://github.com/gorangajic/react-icons) - svg react icons of popular icon packs
* [react-open-doodles](https://github.com/lunahq/react-open-doodles) - Awesome free illustrations as react components.
* [Keo](https://github.com/Wildhoney/Keo) - Plain functions for a more functional Deku approach to creating React components, with functional goodies such as pipe, memoize, etc...
* [Bit](https://github.com/teambit/bit) - A virtual repository for managing and using react and other web components across applications
* [AtlasKit](https://atlaskit.atlassian.com/) - Atlassian's React UI library
* [ReactiveSearch](https://github.com/appbaseio/reactivesearch) - UI components library for Elasticsearch
* [Slate](https://github.com/ianstormtaylor/slate) - A completely customizable framework for building rich text editors.
* [react-json-schema](https://github.com/TechniqueSoftware/react-json-schema) - Construct React elements from JSON by mapping JSON definitions to React components that you expose.
* [react-lodash](https://github.com/typicode/react-lodash) - Lodash as React components
* [react-helmet](https://github.com/nfl/react-helmet) - A document head manager for React
* [react-snap](https://github.com/stereobooster/react-snap) - Zero-configuration framework-agnostic static prerendering for SPAs
* [Draft.js](https://github.com/facebook/draft-js) - A React framework for building text editors
* [refract](https://github.com/fanduel-oss/refract) - Harness the power of reactive programming to supercharge your components
* [react-desktop](https://github.com/gabrielbull/react-desktop) - OS X and Windows UI components built with React
* [reapop](https://github.com/LouisBarranqueiro/reapop) - A simple and customizable React notifications system
* [react-extras](https://github.com/sindresorhus/react-extras) - Useful components and utilities for working with React
* [react-instantsearch](https://github.com/algolia/react-instantsearch) - Lightning-fast search for React and React Native applications, by Algolia
* [uppy](https://github.com/transloadit/uppy) - The next open source file uploader for web browsers
* [react-motion](https://github.com/chenglou/react-motion) - A spring that solves your animation problems
* [react-esi](https://github.com/dunglas/react-esi) - React Edge Side Includes
* [react-aria](https://react-spectrum.adobe.com/react-aria/index.html) - Adobe's library of React Hooks that provides accessible UI primitives for your design system
* [react-uploady](https://github.com/rpldy/react-uploady) - Modern file-upload components & hooks for React.

**React Integration**

* [ReasonReact](https://reasonml.github.io/reason-react/)
* [React Rails](https://github.com/reactjs/react-rails)
* [ReactJS. NET](https://github.com/reactjs/React.NET)
* [om](https://github.com/swannodette/om) - ClojureScript interface
* [Reagent](https://github.com/reagent-project/reagent) - A minimalistic ClojureScript interface to React.js
* [Express React views](https://github.com/reactjs/express-react-views)
* [React Page Middleware](https://github.com/reactjs/react-page-middleware)
* [ngReact](https://github.com/davidchang/ngReact) - React Components in Angular
* [coffee-react-transform](https://github.com/jsdf/coffee-react-transform) - Provides React JSX support for Coffeescript
* [sprockets-coffee-react](https://github.com/jsdf/sprockets-coffee-react) - Sprockets preprocessor for CJSX
* [react-kup](https://github.com/snd/react-kup) - A simple, non-intrusive alternative to jsx for coffeescript
* [turbo-react](https://github.com/ssorallen/turbo-react) - Combine Turbolinks and React to apply DOM diffs
* [react-bacon](https://github.com/jamesmacaulay/react-bacon) - A little module for using React with Bacon.js
* [msx](https://github.com/insin/msx) - React's JSX Transformer, tweaked to output calls to Mithril
* [react-backbone](https://github.com/jhudson8/react-backbone) - Backbone-aware mixins for react
* [NestedReact](https://github.com/Volicon/NestedReact/) - transparent integration with Backbone Views and NestedTypes models
* [backbone-reaction](https://github.com/jhudson8/backbone-reaction) - React, Backbone and then some
* [react.backbone](https://github.com/usepropeller/react.backbone) - Plugin for React to make Backbone migration easier
* [reactbone](https://github.com/andrejewski/reactbone) - React extensions for Backbone
* [backbone-react-ui](https://github.com/securingsincity/backbone-react-ui) - React components for use with backbone and backbone paginator
* [react-events](https://github.com/jhudson8/react-events) - Declarative managed event bindings for react components
* [react-mixin-manager](https://github.com/jhudson8/react-mixin-manager) - React mixin registration manager
* [react-topcoat by @plaxdan](https://github.com/plaxdan/react-topcoat) - Topcoat CSS components built with the React library
* [react-topcoat by @arnemart](https://github.com/arnemart/react-topcoat) - A collection of React components for Topcoat
* [reactdown](https://github.com/andreypopp/reactdown) - Write React components using markdown syntax
* [react-jade](https://github.com/ForbesLindesay/react-jade) - Compile Jade to React JavaScript
* [jade-react](https://github.com/duncanbeevers/jade-react) - Compile Jade templates to React. DOM expressions
* [gulp-jade-react](https://github.com/duncanbeevers/gulp-jade-react) - Compile Jade templates into React de-sugared JSX with Gulp
* [sbt-reactjs](https://github.com/ddispaltro/sbt-reactjs) - React SBT Plugin using npm
* [scalajs-react](https://github.com/japgolly/scalajs-react) - A guilty affair between Scala.js and Facebook's React
* [react-xtags](https://github.com/vjeux/react-xtags/) - Using React to implement xtags
* [jreact](https://github.com/KnisterPeter/jreact) - React on server-side Java \(with Rhino or Nashorn\)
* [React.hiccup](https://github.com/lantiga/react.hiccup) - A complete replacement for JSX written in sweet.js
* [react-play](https://github.com/ssorallen/react-play) - Rendering React components in the Play Framework with JDK8's Nashorn
* [rx-react](https://github.com/fdecampredon/rx-react) - Utilities to works with React in a RxJS
* [react-with-di](https://github.com/vojtajina/react-with-di) - A hacked prototype of React.js with DI
* [reactfire](https://github.com/firebase/reactfire) - ReactJS mixin for easy Firebase integration
* [react-clickdrag-mixin](https://github.com/tleunen/react-clickdrag-mixin) - ClickDrag mixin for React component
* [react-masonry-mixin](https://github.com/eiriklv/react-masonry-mixin) - Standalone mixin for Masonry \(@desandro\)
* [react-packery-mixin](https://github.com/eiriklv/react-packery-mixin) - Standalone mixin for Packery \(Metafizzy\)
* [react-dropzone](https://github.com/paramaggarwal/react-dropzone) - Simple HTML5 drag-drop zone with React.js.
* [aframe-react](https://github.com/ngokevin/aframe) - A-Frame VR + React
* [react-three-fiber](https://github.com/react-spring/react-three-fiber) - A react reconciler for threejs \(web and react-native\)
* [react-three](https://github.com/Izzimach/react-three) - React bindings to create and control a 3D scene using three.js
* [react-three-renderer](https://github.com/toxicFork/react-three-renderer) - Render into a three.js canvas using React
* [react-threejs](https://github.com/fritx/react-threejs) - Simplest bindings between React & Three.js
* [react-masonry-css](https://github.com/paulcollett/react-masonry-css) - Fast Masonry layout powered by CSS, dependency free
* [react-captcha](https://github.com/appleboy/react-recaptcha) - A react.js reCAPTCHA for Google
* [reaptcha](https://github.com/sarneeh/reaptcha) - Clean, modern and simple React wrapper for Google reCAPTCHA
* [react-recaptcha-that-works](https://github.com/douglasjunior/react-recaptcha-that-works) - A reCAPTCHA bridge for React that works

**React State Management**

* redux - Predictable State Container for JavaScript Apps
* [mobx](https://github.com/mobxjs/mobx) - Simple, scalable state management
* [react-query](https://github.com/tannerlinsley/react-query)
* [flux](http://facebook.github.io/flux/) - Application architecture for building user interfaces
* [recoil](https://github.com/facebookexperimental/Recoil) - Experimental state management library for React apps
* [xstate-react](https://github.com/davidkpiano/xstate/tree/master/packages/xstate-react) - State machines and statecharts for the modern web
* [zustand](https://github.com/pmndrs/zustand) - Bear necessities for state management in React
* [easy-peasy](https://github.com/ctrlplusb/easy-peasy) - Vegetarian friendly state for React
* [hookstate](https://github.com/avkonst/hookstate) - The simple but very powerful and incredibly fast state management for React that is based on hooks
* [effector](https://github.com/zerobias/effector) - Fast and powerful reactive state manager
* [reactn](https://github.com/CharlesStover/reactn) - React, but with built-in global state management

**React AR and VR**

* [Viro React](https://viromedia.com/viroreact/) - Platform for rapidly building AR/VR applications using React Native

**React Renderers**

* [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js
* [react-pdf](https://github.com/diegomura/react-pdf) - Create PDF files using React
* [ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps
* [react-blessed](https://github.com/Yomguithereal/react-blessed) - A React renderer for blessed terminal interface library
* [react-sketchapp](https://github.com/airbnb/react-sketchapp) - Render React components to Sketch
* [react-figma](https://github.com/react-figma/react-figma) - A React renderer for Figma
* [react-nil](https://github.com/pmndrs/react-nil) - A react null renderer
* [remotion](https://github.com/JonnyBurger/remotion) - Create videos programmatically in React

**Forms**

* [formik](https://github.com/jaredpalmer/formik) - Build forms in React, without the tears
* [react-hook-form](https://github.com/react-hook-form/react-hook-form) - React Hooks for forms validation
* [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) - A React component for building Web forms from JSON Schema
* [react-final-form](https://github.com/final-form/react-final-form) - High performance subscription-based form state management for React
* [unform](https://github.com/Rocketseat/unform) - Performance-focused API for React forms
* [formily](https://github.com/alibaba/formily) - Alibaba Group Unified Form Solution
* [uniforms](https://github.com/vazco/uniforms) - A React library for building forms from any schema
* [formsy-react](https://github.com/formsy/formsy-react/) - A form input builder and validator for React
* [react-formal](https://github.com/jquense/react-formal) - Sophisticated HTML form management for React

**Autocomplete**

* [react-autocomplete by @rackt](https://github.com/rackt/react-autocomplete) - WAI-ARIA compliant React autocomplete \(Archived, read-only\)
* [react-autosuggest by @moroshko](https://github.com/moroshko/react-autosuggest) - WAI-ARIA compliant React autosuggest component
* [react-autocomplete by @eliseumds](https://github.com/eliseumds/react-autocomplete) - Just tasting some ReactJS + RxJS
* [react-autocomplete by @prometheusresearch](https://github.com/prometheusresearch/react-autocomplete) - Autocomplete widget based on React
* [instatype by @gragland](https://github.com/gragland/instatype) - Simple react autocomplete component
* [downshift](https://github.com/paypal/downshift) - 🏎 Primitives to build simple, flexible, WAI-ARIA compliant enhanced input React components
* [React Bootstrap Typeahead](https://github.com/ericgio/react-bootstrap-typeahead) - A React-based typeahead that relies on Bootstrap for styling and was originally inspired by Twitter's typeahead.js.

**Graphics**

* [react-art](https://github.com/facebook/react-art) - React Bridge to the ART Drawing Library
* [react-canvas](https://github.com/Flipboard/react-canvas) - High performance `<canvas>` rendering for React components
* [react-famous](https://github.com/pilwon/react-famous) - Complex 3D animations UI at 60 FPS with Famo.us
* [react-kinetic](https://github.com/freiksenet/react-kinetic) - HTML5 Canvas via KineticJS using React
* [react-svg-morph](https://github.com/gorangajic/react-svg-morph) - morph your svg components one into another
* [react-hooks-svgdrawing](https://github.com/kmkzt/react-hooks-svgdrawing) - SVG Drawing with React hooks
* [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) - A React component that adds pan and zoom features to SVG.

**Data Managing**

* [immer](https://github.com/immerjs/immer) - Create the next immutable state by mutating the current one
* [ReSub](https://github.com/Microsoft/ReSub) - A library for writing better React components and data stores
* [immutable-js](https://github.com/immutable-js/immutable-js) - Immutable Data Collections for Javascript
* [baobab](https://github.com/Yomguithereal/baobab) - JavaScript & TypeScript persistent and optionally immutable data tree with cursors
* [WatermelonDB](https://github.com/Nozbe/WatermelonDB) - 🍉 Reactive & asynchronous database for powerful React and React Native apps ⚡️
* [RxDB](https://github.com/pubkey/rxdb) - A realtime Database for JavaScript Applications

**Maps**

* [react-googlemaps](https://github.com/pieterv/react-googlemaps) - React interface to Google maps
* [react-maps](https://github.com/matnel/react-maps) - A map component for React
* [react-google-maps](https://github.com/tomchentw/react-google-maps) - React.js Google Maps integration component
* [react-gmaps](https://github.com/MicheleBertoli/react-gmaps) - A Google Maps component for React.js
* [react-map-gl](https://github.com/uber/react-map-gl) - A React wrapper for MapboxGL-js plus overlay API
* [google-map-react](https://github.com/istarkov/google-map-react) - Isomorphic google map React component
* [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) - A mapbox-gl-js wrapper to make the API react friendly
* [google-maps-react](https://github.com/fullstackreact/google-maps-react) - A declarative Google Map React component using React, lazy-loading dependencies, current-location finder and a test-driven approach by the Fullstack React team.
* [react-leaflet](https://react-leaflet.js.org/) - React components for Leaflet maps
* [react-geo](https://github.com/terrestris/react-geo) - A set of geo-related components using react, antd, and ol
* [pigeon-maps](https://github.com/mariusandra/pigeon-maps) - ReactJS maps without external dependencies

**Charts**

* [vx](https://github.com/airbnb/visx) - Visualization components
* [victory](https://github.com/FormidableLabs/victory) - A collection of composable React components for building interactive data visualizations
* [react-vis](https://github.com/uber/react-vis) - Data Visualization Components
* [recharts](https://github.com/recharts/recharts) - Redefined chart library built with React and D3
* [nivo](https://github.com/plouc/nivo) - Provides a rich set of data visualization components, built on top of the D3 and React libraries
* [echarts-for-react](https://github.com/hustcc/echarts-for-react) - Apache ECharts components for React wrapper
* [react-apexcharts](https://github.com/apexcharts/react-apexcharts) - React Component for ApexCharts
* [chartify](https://github.com/kis/chartify) - React plugin for building charts using CSS

#### React Native

> Framework for building native apps using React

**React Native General Resources**

* [React Native Official Site](https://facebook.github.io/react-native/)
* [React Native GitHub](https://github.com/facebook/react-native)
* [React Native Newsletter](http://brentvatne.ca/react-native-newsletter/)
* [React Native Playground](https://rnplay.org/)
* [React Native Awesome List](https://github.com/jondot/awesome-react-native)
* [React Native StackOverflow](http://stackoverflow.com/questions/tagged/react-native)
* [React Native Radio](https://devchat.tv/react-native-radio/)

**React Native Tutorials**

* [React Native Tutorial](https://facebook.github.io/react-native/docs/tutorial.html)
* [Introducing React Native: Building Apps with JavaScript](http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript)
* [Introduction to React Native: Building iOS Apps with JavaScript](http://www.appcoda.com/react-native-introduction/)
* [React Native Meets Async Functions](https://medium.com/the-exponent-log/react-native-meets-async-functions-3e6f81111173)
* [Digital Smart Mirror lab with React Native](http://atticuswhite.com/blog/react-native-smart-mirror-lab/)
* [The Beauty Of React Native: Building Your First iOS App With JavaScript \(Part 1\)](https://www.smashingmagazine.com/2016/04/the-beauty-of-react-native-building-your-first-ios-app-with-javascript-part-1/)
* [The Beauty Of React Native: Building Your First iOS App With JavaScript \(Part 2\)](https://www.smashingmagazine.com/2016/04/how-to-build-your-first-ios-app-with-javascript/)
* [A Mini-Course on React Native Flexbox](https://medium.com/@yoniweisbrod/a-mini-course-on-react-native-flexbox-2832a1ccc6)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Test driving react native applications](http://www.multunus.com/blog/2016/07/test-driving-react-native-applications/)
* [Using React Native With TypeScript](https://medium.com/@jan.hesters/using-typescript-with-react-native-946aa4b4ae6f)

**React Native Development Tools**

* [react-native-code-push](https://github.com/microsoft/react-native-code-push) - React Native module for CodePush

**React Native Sample Apps**

* [HackerNews](https://github.com/iSimar/HackerNews-React-Native)
* [Ziliun](https://github.com/sonnylazuardi/ziliun-react-native)
* [FinanceReactNative](https://github.com/7kfpun/FinanceReactNative)
* [SplashWalls](https://github.com/nashvail/SplashWalls)
* [NBAreact](https://github.com/jbkuczma/NBAreact)
* [Bus Timetable](https://github.com/EarlGeorge/timetable)

**React Native Boilerplates**

* [Create React Native App](https://github.com/react-community/create-react-native-app) - Create React Native apps that run on iOS, Android, and web
* [Ignite](https://github.com/infinitered/ignite) - The hottest CLI for React Native, boilerplates, plugins, generators, and more!

**React Native Awesome Components**

* [Expo](https://expo.io/) - The Expo platform for making cross-platform mobile apps
* [react-navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps
* [react-native-social-share](https://github.com/doefler/react-native-social-share) - Use the iOS and Android native Twitter and Facebook share popup with React Native
* [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk) - A wrapper around the iOS Facebook SDK
* [react-native-side-menu](https://github.com/Kureev/react-native-side-menu) - Simple customizable component to create side menu
* [react-native-mapbox-gl](https://github.com/mapbox/react-native-mapbox-gl) - A Mapbox GL react native module
* [react-native-icons](https://github.com/corymsmith/react-native-icons) - Quick and easy icons in React Native
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - 3000 Customizable Icons for React Native with support for NavBar/TabBar
* [react-native-google-signin](https://github.com/apptailor/react-native-google-signin) - Google Signin for React Native
* [react-native-picker-modal-view](https://github.com/pankod/react-native-picker-modal-view)
* [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) - The most complete chat UI for React Native
* [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) - FastImage, performant React Native image component
* [recyclerlistview](https://github.com/Flipkart/recyclerlistview) - High performance listview for React Native and web!
* [react-native-largelist](https://github.com/bolan9999/react-native-largelist) - The best large list component for React Native
* [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) - Declarative API exposing platform native touch and gesture system to React Native
* [rn-placeholder](https://github.com/mfrachet/rn-placeholder) - Display some placeholder stuff before rendering your text or media content in React Native

**React Native Libraries**

* [sentry-react-native](https://github.com/getsentry/sentry-react-native) - Real-time crash reporting for your web apps, mobile apps, and games.
* [realm-js](https://github.com/realm/realm-js) - Realm is a mobile database: an alternative to SQLite & key-value stores
* [react-native-device-info](https://github.com/react-native-community/react-native-device-info) - Device Information for React Native iOS and Android
* [react-native-react-bridge](https://github.com/inokawa/react-native-react-bridge) - A toolset to run React web app in React Native and handle communication between them.
* [uncompress-react-native](https://github.com/didisouzacosta/uncompress-react-native) - Simple library to decompress files .zip, .rar, .cbz, .cbr in React Native.

#### Redux

> Predictable State Container for JavaScript Apps

**Redux General Resources**

* [Redux GitHub](https://github.com/reduxjs/redux)
* [Redux Official Site](http://redux.js.org/)
* [Awesome Redux List](https://github.com/xgrommx/awesome-redux)

**Redux Tools**

* [react-redux](https://github.com/reduxjs/react-redux) - Official React bindings for Redux
* [redux-toolkit](https://github.com/reduxjs/redux-toolkit) - The official, opinionated, batteries-included toolset for efficient Redux development
* [redux-devtools](https://github.com/reduxjs/redux-devtools) - DevTools for Redux with hot reloading, action replay, and customizable UI
* [reselect](https://github.com/reduxjs/reselect) - Selector library for Redux
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for redux
* [redux-saga](https://github.com/redux-saga/redux-saga) - An alternative side effect model for Redux apps
* [connected-react-router](https://github.com/supasate/connected-react-router) - A Redux binding for React Router
* [redux-form](https://github.com/erikras/redux-form) - A Higher Order Component using react-redux to keep form state
* [normalizr](https://github.com/paularmstrong/normalizr) - Normalizes nested JSON according to a schema
* [redux-observable](https://github.com/redux-observable/redux-observable) - RxJS middleware for Redux
* [redux-undo](https://github.com/omnidan/redux-undo) - Higher order reducer to add undo/redo functionality to redux state containers
* [redux-persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a redux store

**Redux Tutorials**

* [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
* [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)
* [Fundamentals of Redux Course from Dan Abramov](https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)
* [Building React Applications with Idiomatic Redux](https://app.egghead.io/courses/building-react-applications-with-idiomatic-redux)

#### GraphQL

> A query language for your API

**GraphQL General Resources**

* [GraphQL Official Site](http://graphql.org/)
* [GraphQL Specification](https://github.com/graphql/graphql-spec)
* [GraphQL Specification Repository](https://github.com/facebook/graphql)

**GraphQL Tools**

* [graphql-js](https://github.com/graphql/graphql-js) - A reference implementation of GraphQL for **JavaScript**
* [express-graphql](https://github.com/graphql/express-graphql) - Create a GraphQL HTTP server with **Express**
* [Apollo](https://www.apollographql.com/) - Industry-standard GraphQL implementation
* [GraphQL Playground - GraphQL IDE for better development workflows](https://github.com/graphql/graphql-playground)

**GraphQL Tutorials**

* [GraphQL Introduction](http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html)
* [How to Graphql - The Fullstack Tutorial for GraphQL](https://howtographql.com/)

**GraphQL Implementations**

* [graphql-ruby](https://github.com/rmosolgo/graphql-ruby) - **Ruby** implementation of GraphQL
* [graphql-java](https://github.com/graphql-java/graphql-java) - GraphQL **Java** implementation
* [sangria](https://github.com/sangria-graphql/sangria) - **Scala** GraphQL client and server library
* [graphql-php](https://github.com/webonyx/graphql-php) - A **PHP** port of GraphQL reference implementation
* [graphene](https://github.com/graphql-python/graphene) - GraphQL framework for **Python**
* [graphql-dotnet](https://github.com/graphql-dotnet/graphql-dotnet) - GraphQL for **. NET**
* [graphql-go](https://github.com/graphql-go/graphql) - GraphQL for **Go**
* [juniper](https://github.com/graphql-rust/juniper) - GraphQL server library for **Rust**

**Database Integration**

* [Hasura](https://hasura.io/) - Instant GraphQL for all your data
* [Prisma](https://www.prisma.io/) - Next-generation ORM

  for Node.js and TypeScript

* [graphql-sequelize](https://github.com/mickhansen/graphql-sequelize) - GraphQL & Relay for MySQL & Postgres via Sequelize

#### Relay

> Data-Driven React Applications

**Relay General Resources**

* [Relay Offical Site](https://relay.dev/)
* [Relay GitHub](https://github.com/facebook/relay)

**Relay Tutorials**

* [Official Relay Getting Started](https://facebook.github.io/relay/docs/en/introduction-to-relay.html)
* [Relay for Visual Learners](http://sgwilym.github.io/relay-visual-learners/)
* [Getting Started with Relay](https://auth0.com/blog/2015/10/06/getting-started-with-relay/)
* [Relay and Routing](https://medium.com/@cpojer/relay-and-routing-36b5439bad9)

**Relay Tools**

* [graphql-relay-js](https://github.com/graphql/graphql-relay-js) - A library to help construct a graphql-js server supporting react-relay
* [react-router-relay](https://github.com/relay-tools/react-router-relay) - Relay integration for React Router
* [relay-local-schema](https://github.com/relay-tools/relay-local-schema) - Use Relay without a GraphQL server
* [relay-codemod](https://github.com/facebook/jscodeshift) - Codemod scripts based for on jsodeshift to update Relay APIs

#### Videos

**reactjsvideos.com**

**Important Talks**

* [Pete Hunt: React: Rethinking best practices - JSConf EU 2013](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
* [Pete Hunt: React: Rethinking Best Practices \(updated\) - JSConf. Asia 2013](https://www.youtube.com/watch?v=DgVS-zXgMTk)
* [Tom Occhino and Jordan Walke: JS Apps at Facebook - JSConfUS 2013](https://www.youtube.com/watch?v=GW0rj4sNH2w)
* [React: CSS in JS](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)
* [Pete Hunt: Be Predictable, Not Correct - Mountain West JavaScript 2014](https://www.youtube.com/watch?v=h3KksH8gfcQ)
* [Hacker Way: Rethinking Web App Development at Facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw)
* [Christopher Chedeau: Why does React Scale? - JSConf2014](https://www.youtube.com/watch?v=D-ioDiacTm8)
* [Christopher Chedeau: React's Architecture - OSCON 2014](https://www.youtube.com/watch?v=eCf5CquV_Bw)
* [Pete Hunt: React RESTful UI Rendering - Strange Loop 2014](https://www.youtube.com/watch?v=IVvHPPcl2TM)
* [Pete Hunt: How Instagram.com Works - OSCON 2014](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* [Bill Fisher and Jing Chen: React and Flux - NewCircle Training 2014](https://www.youtube.com/watch?v=i__969noyAM)
* [Sebastian Markbage: Minimal API Surface Area - JSConf EU 2014](https://www.youtube.com/watch?v=4anAwXYqLG8)
* [Avik Chaudhuri: JavaScript Testing and Static Type Systems at Scale - Scale 2014](https://www.youtube.com/watch?v=M8x0bc81smU)
* [React Native & Relay: Bringing Modern Web Techniques to Mobile - f8 2015\)](https://www.youtube.com/watch?v=X6YbAKiLCLU)
* [Citrusbyte Presents GraphQL: A Horizontal Platform with Nick Schrock](https://www.youtube.com/watch?v=LQFQl8EsV3k)
* [Laney Kuenzel: Mutations and Subscriptions in Relay - JSConf 2015](https://www.youtube.com/watch?v=mmke4w4gc6c)
* [React Today and Tomorrow and 90% Cleaner React With Hooks - React Conf 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM)
* [React Conferences](https://reactjs.org/community/conferences.html)
* [React Videos](https://reactjs.org/community/videos.html)
* [Awesome React Talks](https://github.com/tiaanduplessis/awesome-react-talks)

**React.js Conf 2015 Playlist**

**ReactEurope Conf 2015 Day 1 Playlist**

**ReactEurope Conf 2015 Day 2 Playlist**

**ReactRally Conf 2015 Playlist**

**React.js Conf 2016 Playlist**

**React Amsterdam 2016 Playlist**

**ReactEurope Conf 2016 Day 1 Playlist**

**ReactEurope Conf 2016 Day 2 Playlist**

**ReactRally Conf 2016 Playlist**

**React Conf 2017 Playlist**

**React.js Amsterdam 2018 Playlist**

**React Amsterdam 2019 Playlist**

**Video Tutorials**

* [Trying React Hooks for the first time with Dan Abramov](https://www.youtube.com/watch?v=G-aO5hzo1aw)

#### Demo React Apps

* [hackernews-react-graphql](https://github.com/clintonwoo/hackernews-react-graphql) - Hacker News clone rewritten with universal JavaScript, using React and GraphQL
* [react-reduction](https://github.com/reduction-admin/react-reduction) - Free Admin Template Built with React and Bootstrap4
* [reactjs-tmdb-app](https://github.com/SKempin/reactjs-tmdb-app) - Responsive React The Movie Database App
* [react-shopping-cart](https://github.com/jeffersonRibeiro/react-shopping-cart) - Simple ecommerce cart application built with React Redux

#### Real React Apps

* [kibana](https://github.com/elastic/kibana) - Your window into the Elastic Stack
* [firefox debugger](https://github.com/firefox-devtools/debugger) - The Firefox debugger that works anywhere
* [spectrum](https://github.com/withspectrum/spectrum) – Simple, powerful online communities
* [mattermost](https://github.com/mattermost/mattermost-webapp) - Open source Slack alternative
* [overreacted](https://github.com/gaearon/overreacted.io) - Personal blog by Dan Abramov
* [winamp2-js](https://github.com/captbaritone/winamp2-js) - Winamp 2 reimplemented for the browser
* [dnote](https://github.com/dnote/dnote) - A command line notebook with multi-device sync and web interface

# Thinking in React

## Start With A Mock

Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:

![Mockup](https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png)

Our JSON API returns some data that looks like this:

```text
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

## Step 1: Break The UI Into A Component Hierarchy

The first thing you’ll want to do is to draw boxes around every component \(and subcomponent\) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!

But how do you know what should be its own component? Use the same techniques for deciding if you should create a new function or object. One such technique is the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

Since you’re often displaying a JSON data model to a user, you’ll find that if your model was built correctly, your UI \(and therefore your component structure\) will map nicely. That’s because UI and data models tend to adhere to the same _information architecture_. Separate your UI into components, where each component matches one piece of your data model.

![Component diagram](https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png)

You’ll see here that we have five components in our app. We’ve italicized the data each component represents.

1. **`FilterableProductTable` \(orange\):** contains the entirety of the example
2. **`SearchBar` \(blue\):** receives all _user input_
3. **`ProductTable` \(green\):** displays and filters the _data collection_ based on _user input_
4. **`ProductCategoryRow` \(turquoise\):** displays a heading for each _category_
5. **`ProductRow` \(red\):** displays a row for each _product_

If you look at `ProductTable` , you’ll see that the table header \(containing the “Name” and “Price” labels\) isn’t its own component. This is a matter of preference, and there’s an argument to be made either way. For this example, we left it as part of `ProductTable` because it is part of rendering the _data collection_ which is `ProductTable` ’s responsibility. However, if this header grows to be complex \(e.g., if we were to add affordances for sorting\), it would certainly make sense to make this its own `ProductTableHeader` component.

Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. Components that appear within another component in the mock should appear as a child in the hierarchy:

* `FilterableProductTable`
  + `SearchBar`
  + `ProductTable`
    - `ProductCategoryRow`
    - `ProductRow`

## Step 2: Build A Static Version in React

Now that you have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We’ll see why.

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using _props_. _props_ are a way of passing data from parent to child. If you’re familiar with the concept of _state_, **don’t use state at all** to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy \(i.e. starting with `FilterableProductTable` \) or with the ones lower in it \( `ProductRow` \). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.

At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have `render()` methods since this is a static version of your app. The component at the top of the hierarchy \( `FilterableProductTable` \) will take your data model as a prop. If you make a change to your underlying data model and call `ReactDOM.render()` again, the UI will be updated. You can see how your UI is updated and where to make changes. React’s **one-way data flow** \(also called _one-way binding_\) keeps everything modular and fast.

Refer to the [React docs](https://reactjs.org/docs/) if you need help executing this step.

### A Brief Interlude: Props vs State

There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two; skim [the official React docs](https://reactjs.org/docs/state-and-lifecycle.html) if you aren’t sure what the difference is. See also [FAQ: What is the difference between state and props?](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)

## Step 3: Identify The Minimal \(but complete\) Representation Of UI State

To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with **state**.

To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is [DRY: _Don’t Repeat Yourself_](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.

Think of all of the pieces of data in our example application. We have:

* The original list of products
* The search text the user has entered
* The value of the checkbox
* The filtered list of products

Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:

1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.

So finally, our state is:

* The search text the user has entered
* The value of the checkbox

## Step 4: Identify Where Your State Should Live

OK, so we’ve identified what the minimal set of app state is. Next, we need to identify which component mutates, or _owns_, this state.

Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. **This is often the most challenging part for newcomers to understand, ** so follow these steps to figure it out:

For each piece of state in your application:

* Identify every component that renders something based on that state.
* Find a common owner component \(a single component above all the components that need the state in the hierarchy\).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

Let’s run through this strategy for our application:

* `ProductTable` needs to filter the product list based on state and `SearchBar` needs to display the search text and checked state.
* The common owner component is `FilterableProductTable`.
* It conceptually makes sense for the filter text and checked value to live in `FilterableProductTable`

Cool, so we’ve decided that our state lives in `FilterableProductTable` . First, add an instance property `this.state = {filterText: '', inStockOnly: false}` to `FilterableProductTable` ’s `constructor` to reflect the initial state of your application. Then, pass `filterText` and `inStockOnly` to `ProductTable` and `SearchBar` as a prop. Finally, use these props to filter the rows in `ProductTable` and set the values of the form fields in `SearchBar` .

You can start seeing how your application will behave: set `filterText` to `"ball"` and refresh your app. You’ll see that the data table is updated correctly.

## Step 5: Add Inverse Data Flow

So far, we’ve built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it’s time to support data flowing the other way: the form components deep in the hierarchy need to update the state in `FilterableProductTable` .

React makes this data flow explicit to help you understand how your program works, but it does require a little more typing than traditional two-way data binding.

If you try to type or check the box in the current version of the example, you’ll see that React ignores your input. This is intentional, as we’ve set the `value` prop of the `input` to always be equal to the `state` passed in from `FilterableProductTable` .

Let’s think about what we want to happen. We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, `FilterableProductTable` will pass callbacks to `SearchBar` that will fire whenever the state should be updated. We can use the `onChange` event on the inputs to be notified of it. The callbacks passed by `FilterableProductTable` will call `setState()` , and the app will be updated.

## And That’s It

Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you’re used to, remember that code is read far more than it’s written, and it’s less difficult to read this modular, explicit code. As you start to build large libraries of components, you’ll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :\)

# Glossary

## Single-page Application

A single-page application is an application that loads a single HTML page and all the necessary assets \(such as JavaScript and CSS\) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

Though you may build a single-page application in React, it is not a requirement. React can also be used for enhancing small parts of existing websites with additional interactivity. Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.

## ES6, ES2015, ES2016, etc

These acronyms all refer to the most recent versions of the ECMAScript Language Specification standard, which the JavaScript language is an implementation of. The ES6 version \(also known as ES2015\) includes many additions to the previous versions such as: arrow functions, classes, template literals, `let` and `const` statements. You can learn more about specific versions [here](https://en.wikipedia.org/wiki/ECMAScript#Versions).

## Compilers

A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. [Babel](https://babeljs.io/) is the compiler most commonly used with React.

## Bundlers

Bundlers take JavaScript and CSS code written as separate modules \(often hundreds of them\), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/).

## Package Managers

Package managers are tools that allow you to manage dependencies in your project. [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) are two package managers commonly used in React applications. Both of them are clients for the same npm package registry.

## CDN

CDN stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

## JSX

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to `React.createElement()` calls which return plain JavaScript objects called “React elements”. To get a basic introduction to JSX [see the docs here](https://reactjs.org/docs/introducing-jsx.html) and find a more in-depth tutorial on JSX [here](https://reactjs.org/docs/jsx-in-depth.html).

React DOM uses camelCase property naming convention instead of HTML attribute names. For example, `tabindex` becomes `tabIndex` in JSX. The attribute `class` is also written as `className` since `class` is a reserved word in JavaScript:

```text
const name = 'Clementine';
ReactDOM.render(
  <h1 className="hello">My name is {name}!</h1>,
  document.getElementById('root')
);
```

## [Elements](https://reactjs.org/docs/rendering-elements.html)

React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.

```text
const element = <h1>Hello, world</h1>;
```

Typically, elements are not used directly, but get returned from components.

## [Components](https://reactjs.org/docs/components-and-props.html)

React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element:

```text
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Components can also be ES6 classes:

```text
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Components can be broken down into distinct pieces of functionality and used within other components. Components can return other components, arrays, strings and numbers. A good rule of thumb is that if a part of your UI is used several times \(Button, Panel, Avatar\), or is complex enough on its own \(App, FeedStory, Comment\), it is a good candidate to be a reusable component. Component names should also always start with a capital letter \( `<Wrapper/>` **not** `<wrapper/>` \). See [this documentation](https://reactjs.org/docs/components-and-props.html#rendering-a-component) for more information on rendering components.

### [ `props` ](https://reactjs.org/docs/components-and-props.html)

`props` are inputs to a React component. They are data passed down from a parent component to a child component.

Remember that `props` are readonly. They should not be modified in any way:

If you need to modify some value in response to user input or a network response, use `state` instead.

### `props.children`

`props.children` is available on every component. It contains the content between the opening and closing tags of a component. For example:

```text
<Welcome>Hello world!</Welcome>
```

The string `Hello world!` is available in `props.children` in the `Welcome` component:

```text
function Welcome(props) {
  return <p>{props.children}</p>;
}
```

For components defined as classes, use `this.props.children` :

```text
class Welcome extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}
```

### [ `state` ](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)

A component needs `state` when some data associated with it changes over time. For example, a `Checkbox` component might need `isChecked` in its state, and a `NewsFeed` component might want to keep track of `fetchedPosts` in its state.

The most important difference between `state` and `props` is that `props` are passed from a parent component, but `state` is managed by the component itself. A component cannot change its `props` , but it can change its `state` .

For each particular piece of changing data, there should be just one component that “owns” it in its state. Don’t try to synchronize states of two different components. Instead, [lift it up](https://reactjs.org/docs/lifting-state-up.html) to their closest shared ancestor, and pass it down as props to both of them.

## [Lifecycle Methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)

Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM \([mounting](https://reactjs.org/docs/react-component.html#mounting)\), when the component updates, and when the component gets unmounted or removed from the DOM.

## [Controlled](https://reactjs.org/docs/forms.html#controlled-components) vs. [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)

React has two different approaches to dealing with form inputs.

An input form element whose value is controlled by React is called a _controlled component_. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid \(by re-rendering with the updated value\). If you do not re-render then the form element will remain unchanged.

An _uncontrolled component_ works like form elements do outside of React. When a user inputs data into a form field \(an input box, dropdown, etc\) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.

In most cases you should use controlled components.

## [Keys](https://reactjs.org/docs/lists-and-keys.html)

A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.

Keys only need to be unique among sibling elements in the same array. They don’t need to be unique across the whole application or even a single component.

Don’t pass something like `Math.random()` to keys. It is important that keys have a “stable identity” across re-renders so that React can determine when items are added, removed, or re-ordered. Ideally, keys should correspond to unique and stable identifiers coming from your data, such as `post.id` .

## [Refs](https://reactjs.org/docs/refs-and-the-dom.html)

React supports a special attribute that you can attach to any component. The `ref` attribute can be an object created by [ `React.createRef()` function](https://reactjs.org/docs/react-api.html#reactcreateref) or a callback function, or a string \(in legacy API\). When the `ref` attribute is a callback function, the function receives the underlying DOM element or class instance \(depending on the type of element\) as its argument. This allows you to have direct access to the DOM element or component instance.

Use refs sparingly. If you find yourself often using refs to “make things happen” in your app, consider getting more familiar with [top-down data flow](https://reactjs.org/docs/lifting-state-up.html).

## [Events](https://reactjs.org/docs/handling-events.html)

Handling events with React elements has some syntactic differences:

* React event handlers are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

## [Reconciliation](https://reactjs.org/docs/reconciliation.html)

When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called “reconciliation”.

# Using Web Components in React

React and [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.

Most people who use React don’t use Web Components, but you may want to, especially if you are using third-party UI components that are written using Web Components.

## Using Web Components in React

```text
class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
  }
}
```

> Note:
>
> Web Components often expose an imperative API. For instance, a `video` Web Component might expose `play()` and `pause()` functions. To access the imperative APIs of a Web Component, you will need to use a ref to interact with the DOM node directly. If you are using third-party Web Components, the best solution is to write a React component that behaves as a wrapper for your Web Component.
>
> Events emitted by a Web Component may not properly propagate through a React render tree. You will need to manually attach event handlers to handle these events within your React components.

One common confusion is that Web Components use “class” instead of “className”.

```text
function BrickFlipbox() {
  return (
    <brick-flipbox class="demo">
      <div>front</div>
      <div>back</div>
    </brick-flipbox>
  );
}
```

## Using React in your Web Components

```text
class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('x-search', XSearch);
```

>
