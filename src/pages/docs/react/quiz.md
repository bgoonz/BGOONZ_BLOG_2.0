---
title: 'React Quiz Questions'
weight: 0
excerpt: cheat sheet
seo:
    title: 'React Quiz Questions'
    description: 'Of course, if you get a DOM node for the component via refs, you can do anything you want with the DOM nodes of other components, but it will likely mess up React.'
    robots: []
    extra: []
template: docs
---


**What we know:**

A top-level `App` component returns `<Button />` from its `render()` method.

**Question:**

> What is the relationship between `<Button />` and `this` in that `Button`'s `render()`?

**Answer:**

`<Button>` is a React "element".  
If you log it, you will see a plain object like `{ type: Button, props: {} }`.

The element does not represent anything on the screen at that point.  
It is a _description_ of what `App` wants to be rendered.

At some point, React will look at that description and think: "Hmm, there was no `Button` here but now there should be. So I'll create a `Button` instance."

This `Button` instance created by React is `this` value in the `render()` and lifecycle methods. It's only useful for calling `setState()` or reading the props and state.

If `App` gets re-rendered and React sees a `<Button />` in its output again, it will think: "Hmm, I already have a `Button` instance exactly at the same spot. Rather than create a new one, I will just update props on the existing one and re-render it."

Let's recap.

`<Button />` is an element, a description of what should be rendered. `this` inside the `Button` is the actual instance React created based on that description.

`App` can return a different `<Button />` element every time but as long as its key doesn't change, and it is still a `<Button />` and not a `<Door />`, React will keep using the same instance.

**Question:**

> Does rendering `<Button>
<Icon />
</Button>` guarantee that an `Icon` mounts?

It doesn't. Ultimately it's always up to the component to decide what to do with its children. For example, the `Button` implementation could completely ignore them and render something else:


```js
//x


function Button(props) {
    return <h1>I render whatever I want</h1>;
}
```

Interestingly, it could also render `children` multiple times:


```js
//x


function Button(props) {
    return (
        <div>
            I like to repeat things.
            {props.children}
            {props.children}
            {props.children}
        </div>
    );
}
```

Ultimately, `children` is not a special prop in any way except for JSX sugar syntax. `<Button>
<Icon />
</Button>` is technically the same as `<Button children={<Icon />} />`, and it's up to the component how to treat its input props.

**Question:**

> Can the `App` change anything in the `Button` output? What and how?

**Answer:**

There have been a few fun answers in the [quiz comments](https://gist.github.com/gaearon/8fa9fdd2c4197ee0b52894877bf587a4) so I will direct you to them. Indeed, since JavaScript doesn't provide any guarantees, technically you can hijack `Button` before React gets a chance to render it.

However, normally there is no way for a parent component to control the child output except by two mechanisms: passing props and providing context. You probably already know about props, and I won't talk about the context because it's an experimental API and has a few pitfalls. Don't use context in apps unless [you know its pitfalls well](https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076).

Of course, if you get a DOM node for the component via refs, you can do anything you want with the DOM nodes of other components, but it will likely mess up React.

# React.js

### Q1. If you want to import just the Component from the React library, what syntax do you use?

-   [ ] `import React.Component from 'react'`
-   [ ] `import [ Component ] from 'react'`
-   [ ] `import Component from 'react'`
-   [ ] \[✅] `import { Component } from 'react'`

### Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?

-   [ ] \[✅] Wrap it in the `React.memo` higher-order component.
-   [ ] Implement the `useReducer` Hook.
-   [ ] Implement the `useMemo` Hook.
-   [ ] Implement the `shouldComponentUpdate` lifecycle method.

### Q3. How do you fix the syntax error that results from running this code?

```js
//
const person =(firstName, lastName) =>
{
  first: firstName,
  last: lastName
}
console.log(person("Jill", "Wilson"))
```

-   [ ] \[✅] Wrap the object in parentheses.
-   [ ] Call the function from another file.
-   [ ] Add a return statement before the first curly brace.
-   [ ] Replace the object with an array.

### Q4. If you see the following import in a file, what is being used for state management in the component?

`import React, {useState} from 'react';`

-   [ ] \[✅] React Hooks
-   [ ] stateful components
-   [ ] math
-   [ ] class components

### Q5. Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?

```js
//
const name = 'Rachel';
const age = 31;
const person = { name, age };
console.log(person);
```

-   [ ] `{{name: "Rachel", age: 31}}`
-   [ ] \[✅] `{name: "Rachel", age: 31}`
-   [ ] `{person: "Rachel", person: 31}}`
-   [ ] `{person: {name: "Rachel", age: 31}}`

### Q6. What is the testing library most often associated with React?

-   [ ] Mocha
-   [ ] Chai
-   [ ] Sinon
-   [ ] \[✅] Jest

### Q7. To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?

```js
//
const topics = ['cooking', 'art', 'history'];
```

-   [ ] `const first = ["cooking", "art", "history"]`
-   [ ] `const [] = ["cooking", "art", "history"]`
-   [ ] `const [, first]["cooking", "art", "history"]`
-   [ ] \[✅] `const [first] = ["cooking", "art", "history"]`

### Q8. How do you handle passing through the component tree without having to pass props down manually at every level?

-   [ ] React Send
-   [ ] React Pinpoint
-   [ ] React Router
-   [ ] \[✅] React Context

### Q9. What should the console read when the following code is run?

```js
//
const [, , animal] = ['Horse', 'Mouse', 'Cat'];
console.log(animal);
```

-   [ ] Horse
-   [ ] \[✅] Cat
-   [ ] Mouse
-   [ ] undefined

### 10. What is the name of the tool used to take JSX and turn it into createElement calls?

-   [ ] JSX Editor
-   [ ] ReactDOM
-   [ ] Browser Buddy
-   [ ] \[✅] Babel

### 11. Why might you use useReducer over useState in a React component?

-   [ ] when you want to replace Redux
-   [ ] \[✅] when you need to manage more complex state in an app
-   [ ] when you want to improve performance
-   [ ] when you want to break your production app

### 12. Which props from the props object is available to the component with the following syntax?

```js
//
<Message {...props} />
```

-   [ ] any that have not changed
-   [ ] \[✅] all of them
-   [ ] child props
-   [ ] any that have changed

### 13. Consider the following code from React Router. What do you call :id in the path prop?

```js
//
<Route path="/:id" />
```

-   [ ] This is a route modal
-   [ ] \[✅] This is a route parameter
-   [ ] This is a route splitter
-   [ ] This is a route link

### 14. If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?

---


```js
//


function Dish() {
    return <h1>Mac and Cheese</h1>;
}

ReactDOM.render(<Dish />, document.getElementById('root'));
```

-   [ ] `div`
-   [ ] section
-   [ ] component
-   [ ] \[✅] `h1`

### 15. What does this React element look like given the following function? (Alternative: Given the following code, what does this React element look like?)

```js
//
React.createElement('h1', null, "What's happening?");
```

-   [ ] `<h1 props={null}>What's happening?</h1>`
-   [ ] \[✅] `<h1>What's happening?</h1>`
-   [ ] `<h1 id="component">What's happening?</h1>`
-   [ ] `<h1 id="element">What's happening?</h1>`

### 16. What property do you need to add to the Suspense component in order to display a spinner or loading state?

---


```js
//


function MyComponent() {
    return (
        <Suspense>
            <div>
                <Message />
            </div>
        </Suspense>
    );
}
```

-   [ ] lazy
-   [ ] loading
-   [ ] \[✅] fallback
-   [ ] spinner

### 17. What do you call the message wrapped in curly braces below?

```js
//
const message = 'Hi there';
const element = <p>{message}</p>;
```

-   [ ] a JS function
-   [ ] a JS element
-   [ ] \[✅] a JS expression
-   [ ] a JSX wrapper

### 18. What can you use to handle code splitting?

-   [ ] `React.memo`
-   [ ] `React.split`
-   [ ] \[✅] `React.lazy`
-   [ ] `React.fallback`

### 19. When do you use `useLayoutEffect`?

-   [ ] to optimize for all devices
-   [ ] to complete the update
-   [ ] to change the layout of the screen
-   [ ] \[✅] when you need the browser to paint before the effect runs

### 20. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?

```js
//
A. <button onClick={this.handleClick}>Click Me</button>
B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

-   [ ] Button A will not have access to the event object on click of the button.
-   [ ] Button B will not fire the handler this.handleClick successfully.
-   [ ] Button A will not fire the handler this.handleClick successfully.
-   [ ] \[✅] There is no difference.

### 21. How do you destructure the properties that are sent to the Dish component?

---


```js
//


function Dish(props) {
    return (
        <h1>
            {props.name} {props.cookingTime}
        </h1>
    );
}
```

-   [ ] `function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }`
-   [ ] \[✅] `function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }`
-   [ ] `function Dish(props) { return <h1>{name} {cookingTime}</h1>; }`
-   [ ] `function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }`

### 22. When might you use `React.PureComponent`?

-   [ ] when you do not want your component to have props
-   [ ] when you have sibling components that need to be compared
-   [ ] \[✅] when you want a default implementation of `shouldComponentUpdate()`
-   [ ] when you do not want your component to have state

### 23. Why is it important to avoid copying the values of props into a component's state where possible?

-   [ ] because you should never mutate state
-   [ ] because `getDerivedStateFromProps()` is an unsafe method to use
-   [ ] \[✅] because you want to allow a component to update in response to changes in the props
-   [ ] because you want to allow data to flow back up to the parent

### 24. What is the children prop?

-   [ ] a property that adds child components to state
-   [ ] \[✅] a property that lets you pass components as data to other components
-   [ ] a property that lets you set an array as a property
-   [ ] a property that lets you pass data to child elements

### 25. Which attribute do you use to replace innerHTML in the browser DOM?

-   [ ] injectHTML
-   [ ] \[✅] dangerouslySetInnerHTML
-   [ ] weirdSetInnerHTML
-   [ ] strangeHTML

### 26. Which of these terms commonly describe React applications?

-   [ ] \[✅] declarative
-   [ ] integrated
-   [ ] closed
-   [ ] imperative

### 27. When using webpack, why would you need to use a loader?

-   [ ] to put together physical file folders
-   [ ] \[✅] to preprocess files
-   [ ] to load external data
-   [ ] to load the website into everyone's phone

### 28. A representation of a user interface that is kept in memory and is synced with the "real" DOM is called what?

-   [ ] \[✅] virtual DOM
-   [ ] DOM
-   [ ] virtual elements
-   [ ] shadow DOM

### 29. You have written the following code but nothing is rendering. How do you fix this problem?

```js
//
const Heading = () => {
    <h1>Hello!</h1>;
};
```

-   [ ] Add a render function.
-   [ ] \[✅] Change the curly braces to parentheses or add a return statement before the `h1` tag.
-   [ ] Move the `h1` to another component.
-   [ ] Surround the `h1` in a `div`.

### Q30. To create a constant in JavaScript, which keyword do you use?

-   [ ] \[✅] const
-   [ ] let
-   [ ] constant
-   [ ] var

### Q31. What do you call a React component that catches JavaScript errors anywhere in the child component tree?

-   [ ] error bosses
-   [ ] error catchers
-   [ ] error helpers
-   [ ] \[✅] error boundaries

### Q32. In which lifecycle method do you make requests for data in a class component?

-   [ ] constructor
-   [ ] \[✅] componentDidMount
-   [ ] componentWillReceiveProps
-   [ ] componentWillMount

### Q33. React components are composed to create a user interface. How are components composed?

-   [ ] by putting them in the same file
-   [ ] \[✅] by nesting components
-   [ ] with webpack
-   [ ] with code splitting

### Q34. All React components must act like **\_** with respect to their props.

-   [ ] monads
-   [ ] \[✅] pure functions
-   [ ] recursive functions
-   [ ] higher-order functions

### Q35. Why might you use a ref?

-   [ ] \[✅] to directly access the DOM node
-   [ ] to refer to another JS file
-   [ ] to call a function
-   [ ] to bind the function

### Q36. What is `[e.target.id]` called in the following code snippet?

```js
//
handleChange(e) {
  this.setState({ [e.target.id]: e.target.value })
}
```

-   [ ] a computed property name
-   [ ] a set value
-   [ ] \[✅] a dynamic key
-   [ ] a JSX code string

### Q37. What is the name of this component?

```js
//
class Clock extends React.Component {
    render() {
        return <h1>Look at the time: {time}</h1>;
    }
}
```

-   [ ] \[✅] Clock
-   [ ] It does not have a name prop.
-   [ ] React.Component
-   [ ] Component

### Q38. What is sent to an `Array.map()` function?

-   [ ] \[✅] a callback function that is called once for each element in the array
-   [ ] the name of another array to iterate over
-   [ ] the number of times you want to call the function
-   [ ] a string describing what the function should do

### Q39. Why is it a good idea to pass a function to `setState` instead of an object?

-   [ ] It provides better encapsulation.
-   [ ] It makes sure that the object is not mutated.
-   [ ] It automatically updates a component.
-   [ ] \[✅] `setState` is asynchronous and might result in out of sync values.

### Q40. What package contains the render() function that renders a React element tree to the DOM?

-   [ ] `React`
-   [ ] \[✅] `ReactDOM`
-   [ ] `Render`
-   [ ] `DOM`

### Q41. How do you set a default value for an uncontrolled form field?

-   [ ] Use the `value` property.
-   [ ] \[✅] Use the `defaultValue` property.
-   [ ] Use the `default` property.
-   [ ] It assigns one automatically.

### Q42. What do you need to change about this code to get it to run?

```js
//
class clock extends React.Component {
    render() {
        return <h1>Look at the time: {this.props.time}</h1>;
    }
}
```

-   [ ] Add quotes around the return value
-   [ ] Remove `this`
-   [ ] Remove the render method
-   [ ] \[✅] Capitalize `clock`

**Explanation:** In JSX, lower-case tag names are considered to be HTML tags. Read [this article](https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components)

### Q43. Which Hook could be used to update the document's title?

-   [ ] \[✅] `useEffect(function updateTitle() { document.title = name + ' ' + lastname; });`
-   [ ] `useEffect(() => { title = name + ' ' + lastname; });`
-   [ ] `useEffect(function updateTitle() { name + ' ' + lastname; });`
-   [ ] `useEffect(function updateTitle() { title = name + ' ' + lastname; });`

### Q44. What can you use to wrap Component imports in order to load them lazily?

-   [ ] `React.fallback`
-   [ ] `React.split`
-   [ ] \[✅] `React.lazy`
-   [ ] `React.memo`

### Q45. How do you invoke setDone only when component mounts, using hooks?

---


```js
//


function MyComponent(props) {
    const [done, setDone] = useState(false);

    return <h1>Done: {done}</h1>;
}
```

-   [ ] `useEffect(() => { setDone(true); });`
-   [ ] \[✅] `useEffect(() => { setDone(true); }, []);`
-   [ ] `useEffect(() => { setDone(true); }, [setDone]);`
-   [ ] `useEffect(() => { setDone(true); }, [done, setDone]);`

### Q46. Which of the following click event handlers will allow you to pass the name of the person to be hugged?

```js
//
class Huggable extends React.Component {
  hug(id) {
    console.log("hugging " + id);
  }

  render() {
    let name = "kitteh";
    let button = // Missing Code
    return button;
  }
}
```

-   [ ] `<button onClick={(name) => this.hug(name)}>Hug Button</button>`
-   [ ] `<button onClick={this.hug(e, name)}>Hug Button</button>`
-   [ ] `<button onClick={(e) => hug(e, name)}>Hug Button</button>`
-   [ ] \[✅] `<button onClick={(e) => this.hug(name,e)}>Hug Button</button>`

### Q47. Currently, `handleClick` is being called instead of passed as a reference. How do you fix this?

```js
//
<button onClick={this.handleClick()}>Click this</button>
```

-   [ ] `<button onClick={this.handleClick.bind(handleClick)}>Click this</button>`
-   [ ] `<button onClick={handleClick()}>Click this</button>`
-   [ ] \[✅] `<button onClick={this.handleClick}>Click this</button>`
-   [ ] `<button onclick={this.handleClick}>Click this</button>`

### Q48. Which answer best describes a function component?

-   [ ] A function component is the same as a class component.
-   [ ] \[✅] A function component accepts a single props object and returns a React element.
-   [ ] A function component is the only way to create a component.
-   [ ] A function component is required to create a React component.

### Q49. Which library does the `fetch()` function come from?

-   [ ] FetchJS
-   [ ] ReactDOM
-   [ ] \[✅] No library. `fetch()` is supported by most browsers.
-   [ ] React

### Q50. What will happen when this useEffect Hook is executed, assuming name is not already equal to John?

```js
//
useEffect(() => {
    setName('John');
}, [name]);
```

-   [ ] It will cause an error immediately.
-   [ ] It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.
-   [ ] \[✅] It will update the value of name once and not run again until name is changed from the outside.
-   [ ] It will cause an infinite loop.

### Q51. Which choice will not cause a React component to rerender?

-   [ ] if the component calls `this.setState(...)`
-   [ ] the value of one of the component's props changes
-   [ ] if the component calls `this.forceUpdate()`
-   [ ] \[✅] one of the component's siblings rerenders

### Q52. You have created a new method in a class component called handleClick, but it is not working. Which code is missing?

```js
//
class Button extends React.Component{

  constructor(props) {
    super(props);
    // Missing line
  }

  handleClick() {...}
}
```

-   [ ] `this.handleClick.bind(this);`
-   [ ] `props.bind(handleClick);`
-   [ ] `this.handleClick.bind();`
-   [ ] \[✅] `this.handleClick = this.handleClick.bind(this);`

### Q53. React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?

```js
//
<React.Fragment>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
</React.Fragment>
```

-   [ ] A

```js
//
<...>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</...>
```

-   [ ] B

```js
//
<//>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
<///>
```

-   \[✅] C

```js
//
<>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
</>
```

-   [ ] D

```js
//
<Frag>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
</Frag>
```

### Q54. If you wanted to display the count state value in the component, what do you need to add to the curly braces in the `h1`?

```js
//
class Ticker extends React.component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return <h1>{}</h1>;
    }
}
```

-   [ ] \[✅] this.state.count
-   [ ] count
-   [ ] state
-   [ ] state.count

### Q55. Per the following code, when is the Hello component displayed?

```js
//
const greeting = isLoggedIn ? <Hello /> : null;
```

-   [ ] never
-   [ ] \[✅] when `isLoggedIn` is true
-   [ ] when a user logs in
-   [ ] when the Hello function is called

### Q56. In the following code block, what type is orderNumber?

```js
//
ReactDOM.render(<Message orderNumber="16" />, document.getElementById('root'));
```

-   [ ] \[✅] string
-   [ ] boolean
-   [ ] object
-   [ ] number

### Q57. You have added a style property to the `h1` but there is an unexpected token error when it runs. How do you fix this?

```js
//
const element = <h1 style={ backgroundColor: "blue" }>Hi</h1>;
```

-   [ ] `const element = <h1 style="backgroundColor: "blue""}>Hi</h1>;`
-   [ ] \[✅] `const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;`
-   [ ] `const element = <h1 style={blue}>Hi</h1>;`
-   [ ] `const element = <h1 style="blue">Hi</h1>;`

### Q58. Which function is used to update state variables in a React class component?

-   [ ] `replaceState`
-   [ ] `refreshState`
-   [ ] `updateState`
-   [ ] \[✅] `setState`

### Q59. Consider the following component. What is the default color for the star?

```js
//
const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />;
```

-   [ ] black
-   [ ] red
-   [ ] \[✅] grey
-   [ ] white

### Q60. Which answer best describes a function component?(Not sure answer)

-   [ ] `A function component is the same as a class component.`
-   [ ] \[✅] `A function component accepts a single props object and returns a React element.`
-   [ ] `A function component is the only way to create a component.`
-   [ ] `A function component is required to create a React component.`

### Q61.Which library does the fetch() function come from?

-   [ ] `FetchJS`
-   [ ] `ReactDOM`
-   [ ] \[✅] `No library. fetch() is supported by most browsers.`
-   [ ] `React`

### Q62.What is the difference between the click behaviors of these two buttons(assuming that this.handleClick is bound correctly)

```js
//
  A. <button onClick=this.handleClick>Click Me</button>
  B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

-   [ ] `Button A will not have access to the event object on click of the button`
-   [ ] \[✅] `Button A will not fire the handler this.handleClick successfully`
-   [ ] `There is no difference`
-   [ ] `Button B will not fire the handler this.handleClick successfully`

### Q63.What will happen when this useEffect Hook is executed, assuming name is not already equal to John?

```js
//
useEffect(() => {
    setName('John');
}, [name]);
```

-   [ ] `It will cause an error immediately.`
-   [ ] `It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.`
-   [ ] \[✅] `It will update the value of name once and not run again until name is changed from the outside.`
-   [ ] `It will cause an infinite loop.`

### Q64. How would you add to this code, from React Router, to display a component called About?

```js
//
<Route path="/:id" />
```

-   \[✅] A

```js
//
<Route path="/:id">
    {' '}
    <About />
</Route>
```

-   [ ] B

```js
//
<Route path="/tid" about={Component} />
```

-   [ ] C

```js
//
<Route path="/:id" route={About} />
```

-   [ ] D

```js
//
<Route>
    <About path="/:id" />
</Route>
```

### Q65. Which class-based component is equivalent to this function component?

```js
//
const Greeting ({ name }) > <h1>Hello {name}!</h1>;
```

-   [ ] A

```js
//
class Greeting extends React.Component {
    constructor() {
        return <h1>Hello {this.props.name}!</h1>;
    }
}
```

-   [ ] B

```js
//
class Greeting extends React.Component {
  <h1>Hello {this.props.name}!</h1>;
}
```

-   \[✅] C

```js
//
class Greeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
}
```

-   [ ] D

```js
//
class Greeting extends React.Component {
    render({ name }) {
        return <h1>Hello {name}!</h1>;
    }
}
```

### Q66. Give the code below, what does the second argument that is sent to the render function describe?

```js
//
ReactDOM.render(
  <h1>Hi<h1>,
    document.getElementById('root')
)
```

-   [ ] \[✅] where the React element should be added to the DOM
-   [ ] where to call the function
-   [ ] where the root component is
-   [ ] where to create a new JavaScript file

### Q67. Why should you use React Router's Link component instead of a basic `<a>` tag in React?

-   [ ] The link component allows the user to use the browser's `Back` button.
-   [ ] There is no difference--the `Link` component is just another name for the `<a>` tag.
-   [ ] The `<a>` tag will cause an error when used in React.
-   [ ] \[✅] The `<a>` tag triggers a full page reload, while the `Link` component does not.

### Q68. What is the first argument, `x`, that is sent to the `createElement` function?

```js
//
React.createElement(x, y, z);
```

-   [ ] \[✅] the element that should be created
-   [ ] the order in which this element should be placed on the page
-   [ ] the properties of the element
-   [ ] data that should be displayed in the element

### Q69. Which class-based lifecycle method would be called at the same time as this effect Hook?

```js
//
useEffect(() => {
    // do things
}, []);
```

-   [ ] componentWillUnmount
-   [ ] \[✅] componentDidMount
-   [ ] render
-   [ ] componentDidUpdate

### Q70. Given the code below, what does the second argument that is sent to the render function describe?

```js
//
ReactDOM.render(<h1>Hi</h1>, document.getElementById('root'));
```

-   [ ] \[✅] where the React element should be added to the DOM
-   [ ] where to call the function
-   [ ] where the root component is
-   [ ] where to create a new JavaScript file

### Q71. What is the first argument, x, that is sent to the `createElement` function?

`React.createElement(x,y,z);`

-   [ ] \[✅] the element that should be created
-   [ ] the order in which this element should be placed on the page
-   [ ] the properties of the element
-   [ ] data that should be displayed in the element.

### Q72. What is the name of this component?

```js
//
class Comp extends React.Component {
    render() {
        return <h1>Look at the time: {time}</h1>;
    }
}
```

-   [ ] \[✅] Comp
-   [ ] h1
-   [ ] React.Component
-   [ ] Component

This question might be an updated version of Q37.

### Q73. When using a portal, what is the first argument?

```js
//
ReactDOM.createPortal(x, y);
```

-   [ ] the current state
-   [ ] \[✅] the element to render
-   [ ] the App component
-   [ ] the page

**Explanation:** From official docs: [Portals](https://reactjs.org/docs/portals.html)

### Q74. What is `setCount`?

```js
//
const [count, setCount] = useState(0);
```

-   [ ] the initial state value
-   [ ] a variable
-   [ ] a state object
-   [ ] \[✅] a function to update the state

**Reference:** From official docs: [Hooks-State](https://reactjs.org/docs/hooks-state.html#:~:text=If%20we%20want%20to%20update%20the%20current)

### Q75. What is the use of map function below?

```js
//
const database = [user1:{},user2:{},user3:{}];
database.map((user)=>
<h1>user.data</h1>);
```

-   [ ] gives a map of all the entries in database
-   [ ] \[✅] returns a heading tag for every entry in the database containing it's data
-   [ ] returns one heading tag for all the entries in database
-   [ ] checks which entry in the database is suitable for heading tag

### Q76. Describe what is happening in this code?

```js
//
const { name: firstName } = person;
```

-   [ ] It is creating a new object that contains the same name property as the person object.
-   [ ] It is assigning the value of the person object's firstName property to a constant called name.
-   [ ] It is retrieving the value of person.name.firstName.
-   [ ] \[✅] It is assigning the value of the person object's name property to a constant called firstName.

### Q77. What is wrong with this code?

```js
//
const MyComponent = ({ names }) => (
  <h1>Hello</h1>
  <p>Hello again</p>
);
```

-   [ ] React components cannot be defined using functions.
-   [ ] \[✅] React does not allow components to return more than one element.
-   [ ] The component needs to use the return keyword.
-   [ ] String literals must be surrounded by quotes.

### Q78. When using a portal, what is the second argument?

```js
//
ReactDOM.createPortal(x, y);
```

-   [ ] the App component
-   [ ] the page
-   [ ] the current state
-   [ ] \[✅] the DOM element that exists outside of the parent component

### Q79. Given this code, what will be printed in the

**tag?**

```js
//
const MyComponent = ({ children }) => (
  <h1>{children.length}</h1>
);
...
<MyComponent>
<p>Hello</p>
<p>Goodbye</p>
</MyComponent>
```

-   [ ] It will produce an error saying "cannot read property "length" of undefined."
-   [ ] 1
-   [ ] undefined
-   [ ] \[✅] 2

## Q80. What is this pattern called?

```js
//
const [count, setCount] = useState(0);
```

-   [ ] object destructuring
-   [ ] \[✅] array destructuring
-   [ ] spread operating
-   [ ] code pushing
