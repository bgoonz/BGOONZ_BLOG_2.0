---
title: React Convert Class To Function
weight: 0
excerpt: React Convert Class To Function
seo:
    title: ''
    description: 'React Convert Class To Function'
    robots: []
    extra: []
template: docs
---





### Introduction

The latest alpha release of React introduced a new concept called _Hooks_. Hooks were introduced to React to solve [common problems](https://reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines). However, they primarily serve as an alternative for classes. With Hooks, you can create functional components that use state and lifecycle methods.

Hooks are currently available in React v16.7.0-alpha. There are no plans to remove classes. Hooks provide another way to write React.

Given that Hooks are still new, many developers are looking to apply the concept in their existing React applications or new applications. In this post, you'll explore five ways to convert React class components to functional components using React Hooks.

## Prerequisites

To complete this tutorial, you'll need:

-   Familiarity with JavaScript. You can review the [How To Code in JavaScript](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript) series to learn more and get started.
-   Familiarity with React. You can review our [How To Code in React.js](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-react-js) series for guides to help you get started.

No local development is required, but [CodeSandbox](https://codesandbox.io/) examples are provided for further experimentation.

## Step 1 — Understanding a Class without State or Lifecycle Methods

Let's start with a React class that has neither state nor lifecycle components:

ExampleClassComponent.js

Here you have a typical React class, which lacks state or a lifecycle method. It alerts a name when a button is clicked.

The functional equivalent of this class will look like this:

ExampleFunctionalComponent.js

Like the first example, this functional class behaves in a typical way.

However, this example does not use Hooks or anything new yet. In these examples, you have no need for state or lifecycle.

Let's take a look at class-based components with state and learn how to convert them to functional components using Hooks.

## Step 2 — Adding Hooks to Classes with State

Let's consider a situation where you have a global name variable that you can update within the app from a text input field.

In React, you handle cases like this by defining the name variable in a `state` object and calling `setState()` when we have a new value to update the `name` variable with:

ExampleClassComponentWithState.js

When a user types a name in the input field and clicks the **Alert** button, it pops up an alert with the name defined in state.

You can convert this entire class into a functional React component using Hooks:

ExampleFunctionalComponentWithState.js

Here, you have introduced the `useState` Hook. It allows you to make use of state in React functional components. With the `useState()` Hook, you can use state in this functional component. It uses a similar syntax with a destructuring assignment for arrays.

Consider this line:

Here, `name` is the equivalent of `this.state` in a normal class component, and `setName` is the equivalent of `this.setState`.

The initial value of the state in the `useState()` Hook comes from an argument. In other words, the `useState()` argument is the initial value of the state. In your case, you set it to `'John Doe'`. This means that the initial state of the name in state is `'John Doe'`.

This code is an example of how you can convert a class-based React component with state to a functional component using Hooks.

Let's explore other scenarios, including classes with multiple state properties.

## Step 3 — Adding Hooks to Classes with Multiple State Properties

You have looked at how you might convert one state property with `useState`, but the same approach won't quite work when you have multiple state properties. If, for example, you had two or more input fields for `userName`, `firstName`, and `lastName`, then you would have a class-based component with three state properties:

ExampleClassComponentWithMultipleStateProperties.js

To convert this class to a functional component with Hooks, you will have to take a somewhat unconventional route. Using the `useState()` Hook, the above example can be written as:

ExampleFunctionalComponentWithMultipleStateProperties.js

Here's a [CodeSandbox](https://codesandbox.io/s/ypjynxx16x) for this example.

This demonstrates how you can convert a class-based component with multiple state properties to a functional component using the `useState()` Hook.

## Step 4 — Adding Hooks to a Class with State and `componentDidMount`

Let's consider a class with `state` and `componentDidMount`. To demonstrate, you will look at a scenario where you set an initial state for the three input fields and have them all update to a different set of values after five seconds.

To achieve this, you will declare an initial state value for the input fields and implement a `componentDidMount()` lifecycle method that will run after the initial render to update the state values:

ExampleClassComponentWithStateAndComponentDidMount.js

When the app runs, the input fields will have the initial values you've defined in the state object. These values will then update to the values you've defined inside the `componentDidMount()` method after five seconds.

Next, you will convert this class to a functional component using the React `useState` and `useEffect` Hooks:

ExampleFunctionalComponentWithStateAndComponentDidMount.js

Here's a [CodeSandbox](https://codesandbox.io/s/jzoz2n97my) for this example.

In terms of functionality, this component does exactly the same thing as the previous example. The only difference is that instead of using the conventional `state` object and `componentDidMount()` lifecycle method as you did in the class component, you used the `useState` and `useEffect` Hooks.

## Step 5 — Adding Hooks to a Class with State, `componentDidMount`, and `componentDidUpdate`

Next, let's look at a React class with state and two lifecycle methods: `componentDidMount` and `componentDidUpdate`. Most of the solutions up to this point have used the `useState` Hook. In this example, you will focus on the `useEffect` Hook.

To best demonstrate how this works, let's modify your code to dynamically update the `<h3>` header on the page.

Currently, the header says `This is a Class Component`. Now, you will define a `componentDidMount()` method to update the header to say `Welcome to React Hooks` after three seconds:

ExampleClassComponentWithStateAndTwoLifecycleMethods.js

When the app runs, it will start with the initial header `This is a Class Component` and change it to `Welcome to React Hooks` after three seconds. This is the classic `componentDidMount()` behavior since it runs after the `render` function is executed successfully.

Let's add functionality to dynamically update the header from another input field so that the header gets updated with the new text while you type.

To accomplish this, you will need to implement the `componentDidUpdate()` lifecycle method:

ExampleClassComponent.js

Here, you have `state`, `componentDidMount()`, and `componentDidUpdate()`. When you run the app, the `componentDidMount()` function will update the header to `Welcome to React Hooks` after three seconds. When you start typing in the header text input field, the `<h3>` text will update with the input text as defined in the `componentDidUpdate()` method.

Next, you will convert this class to a functional component with the `useEffect()` Hook:

ExampleFunctionalComponentWithStateAndTwoLifecycleMethods.js

Check out this example on [CodeSandbox](https://codesandbox.io/embed/ork242q3y).

You achieved the same functionality with this component as you did previously by using the `useEffect()` Hook. You optimized the code as well, since you did not have to write separate code for the `componentDidMount()` and `componentDidUpdate()` functions. With the `useEffect()` Hook, you get the functionality of both. This is because `useEffect()` runs both after the initial render and after every subsequent update by default.

## Step 6 — Converting `PureComponent` to `React memo`

[React PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) works in a similar manner to [Component](https://reactjs.org/docs/react-api.html#reactcomponent). The major difference between them is that `React.Component` doesn't implement the `shouldComponentUpdate()` lifecycle method while `React.PureComponent` does.

If you have an application where the `render()` function renders the same result given the same props and state, you can use `React.PureComponent` for a performance boost in some cases.

`React.memo()` works in a similar way. When your function component renders the same result given the same props, you can wrap it in a call to `React.memo()` to enhance performance. Using `PureComponent` and `React.memo()` gives React applications a considerable increase in performance as it reduces the number of render operations in the app.

To understand what they both do, you will first look at code where a component renders every two seconds, whether or not there's a change in value or state:

ExampleClassComponent.js

When you run the app and check the logs, you will notice that it renders the component every two seconds, without any change in state or props. This is a situation that you can improve with both `PureComponent` and `React.memo()`.

![Console log output for multiple render operations](https://assets.digitalocean.com/articles/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks/1.png)

Most of the time, you only want to re-render a component when there's been a change in state or props. Using the example above, you can improve it with `PureComponent` so that the component only re-renders when there's a change in state or props.

You can accomplish this by importing `PureComponent` and extending it:

ExamplePureComponent.js

Now, if you run the app again, you only get the initial render. Nothing else happens after that. This is because you have `class App extends PureComponent {}` instead of `class App extends Component {}`.

![Console log output for a single render operation](https://assets.digitalocean.com/articles/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks/2.png)

This solves the problem of components being re-rendered without respect to the current state. However, if you implement a state change within your `setState` method, you would run into another issue.

For example, consider the following changes to `setState()`:

Currently, `value` set to `1`:

Let's consider a situation where `value` is set to `Math.random()`:

In this scenario, the first example component would re-render each time the value updates to the next random number. However, `PureComponent` makes it possible to re-render components only when there has been a change in state or props.

Now you can explore how to use `React.memo()` to achieve the same fix. To accomplish this, wrap the component with `React.memo()`:

ExampleReactMemo.js

Here's the [CodeSandbox](https://codesandbox.io/s/100zmv7ljj) for this example.

This achieves the same result as using `PureComponent`. The component only renders after the initial render and does not re-render again until there is a change in state or props.

## Conclusion

In this tutorial, you have explored a few approaches to covert an existing class-based component to a functional component using React Hooks.

You have also looked at a special case of converting a React `PureComponent` class to `React.memo()`.

To use Hooks in your applications, be sure to update your version of React to the supported version:
