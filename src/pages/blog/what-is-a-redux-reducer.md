---
title: What is a Redux Reducer?
template: post
subtitle: A reducer is a function that determines changes to an applications state
excerpt: A reducer is a function that determines changes to an applications state
date: 2022-05-16T06:08:24.979Z
image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/redux.gif?raw=true
thumb_image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/redux.gif?raw=true
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
    - src/data/categories/react.yaml
tags:
    - src/data/tags/links.yaml
show_author_bio: true
related_posts:
    - src/pages/blog/10-essential-react-interview-questions.md
    - src/pages/blog/react-semantics.md
    - src/pages/blog/react-state.md
    - src/pages/blog/using-the-dom.md
cmseditable: true
---

# What is a Redux Reducer?

**This tutorial will teach you "how Redux works"**, as well as _why_ these patterns exist. Fair warning though - learning the concepts is different from putting them into practice in actual apps.

**The initial code will be less concise than the way we suggest writing real app code**, but writing it out long-hand is the best way to learn. Once you understand how everything fits together, we'll look at using Redux Toolkit to simplify things. **Redux Toolkit is the recommended way to build production apps with Redux**, and is built on all of the concepts that we will look at throughout this tutorial. Once you understand the core concepts covered here, you'll understand how to use Redux Toolkit more efficiently.

:::info

If you're looking to learn more about how Redux is used to write real-world applications, please see:

-   [**The "Modern Redux" page in this tutorial**](./part-8-modern-redux.md), which shows how to convert the low-level examples from earlier sections into the modern patterns we do recommend for real-world usage
-   [**The "Redux Essentials" tutorial**](../essentials/part-1-overview-concepts.md), which teaches "how to use Redux, the right way" for real-world apps, using our latest recommended patterns and practices.

:::

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already so that we can focus on explaining Redux itself. **This tutorial assumes that you know**:

:::important Prerequisites

-   Familiarity with [HTML & CSS](https://internetingishard.com/).
-   Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
-   Understanding of [the array and object spread operators](https://javascript.info/rest-parameters-spread#spread-syntax)
-   Knowledge of React terminology: [JSX](https://reactjs.org/docs/introducing-jsx.html), [State](https://reactjs.org/docs/state-and-lifecycle.html), [Function Components, Props](https://reactjs.org/docs/components-and-props.html), and [Hooks](https://reactjs.org/docs/hooks-intro.html)
-   Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and [making AJAX requests](https://javascript.info/fetch)

:::

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

Finally, you should make sure that you have the React and Redux DevTools extensions installed in your browser:

-   React DevTools Extension:
    -   [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
    -   [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
-   Redux DevTools Extension:
    -   [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
    -   [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

## What is Redux?

It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

-   You have large amounts of application state that are needed in many places in the app
-   The app state is updated frequently over time
-   The logic to update that state may be complex
-   The app has a medium or large-sized codebase, and might be worked on by many people

**Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.**

:::info Want to Know More?

If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:

-   **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
-   **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
-   **[Redux FAQ: When should I use Redux?](../../faq/General.md#when-should-i-use-redux)**
-   **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

:::

### Redux Libraries and Tools

Redux is a small standalone JS library. However, it is commonly used with several other packages:

#### React-Redux

Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org) is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

#### Redux DevTools Extension

The [**Redux DevTools Extension**](https://github.com/reduxjs/redux-devtools/tree/main/extension) shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Basics

Now that you know what Redux is, let's briefly look at the pieces that make up a Redux app and how it works.

:::info

The rest of the description on this page focuses solely on the Redux core library (the `redux` package). We'll talk about the other Redux-related packages as we go through the rest of the tutorial.

:::

### The Redux Store

The center of every Redux application is the **store**. A "store" is a container that holds your application's global **state**.

A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:

-   You must never directly modify or change the state that is kept inside the Redux store
-   Instead, the only way to cause an update to the state is to create a plain **action** object that describes "something that happened in the application", and then **dispatch** the action to the store to tell it what happened.
-   When an action is dispatched, the store runs the root **reducer** function, and lets it calculate the new state based on the old state and the action
-   Finally, the store notifies **subscribers** that the state has been updated so the UI can be updated with the new data.

### Redux Core Example App

Let's look at a minimal working example of a Redux app - a small counter application:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/dank-architecture-lr7k1?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-core-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
>
</iframe>
<br>

Because Redux is a standalone JS library with no dependencies, this example is written by only loading a single script tag for the Redux library, and uses basic JS and HTML for the UI. In practice, Redux is normally used by [installing the Redux packages from NPM](../../introduction/Installation.md), and the UI is created using a library like [React](https://reactjs.org).

:::info

[Part 5: UI and React](./part-5-ui-and-react.md) shows how to use Redux and React together.

:::

Let's break this example down into its separate parts to see what's happening.

#### State, Actions, and Reducers

We start by defining an initial **state** value to describe the application:

```js
//
// Define an initial state value for the app
const initialState = {
    value: 0
};
```

For this app, we're going to track a single number with the current value of our counter.

Redux apps normally have a JS object as the root piece of the state, with other values inside that object.

Then, we define a **reducer** function. The reducer receives two arguments, the current `state` and an
`action` object describing what happened. When the Redux app starts up, we don't have any state yet,
so we provide the `initialState` as the default value for this reducer:

```js
//
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function counterReducer(state = initialState, action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
        case 'counter/incremented':
            return { ...state, value: state.value + 1 };
        case 'counter/decremented':
            return { ...state, value: state.value - 1 };
        default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state;
    }
}
```

Action objects always have a `type` field, which is a string you provide that
acts as a unique name for the action. The `type` should be a readable name so that
anyone who looks at this code understands what it means. In this case, we use the
word 'counter' as the first half of our action type, and the second half is a
description of "what happened". In this case, our 'counter' was 'incremented', so
we write the action type as `'counter/incremented'`.

Based on the type of the action, we either need to return a brand-new object to
be the new `state` result, or return the existing `state` object if nothing should change.
Note that we update the state _immutably_ by copying the existing state and updating the
copy, instead of modifying the original object directly.

#### Store

Now that we have a reducer function, we can create a **store** instance by
calling the Redux library `createStore` API.

```js
//
// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = Redux.createStore(counterReducer);
```

We pass the reducer function to `createStore`, which uses the reducer function
to generate the initial state, and to calculate any future updates.

#### UI

In any application, the user interface will show existing state on screen. When a user
does something, the app will update its data and then redraw the UI with those values.

```js
//
// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById('value');

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
    const state = store.getState();
    valueEl.innerHTML = state.value.toString();
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);
```

In this small example, we're only using some basic HTML elements as our UI,
with a single `<div>` showing the current value.

So, we write a function that knows how to get the latest state from the Redux
store using the `store.getState()` method, then takes that value and updates the UI to show it.

The Redux store lets us call `store.subscribe()` and pass a subscriber callback function that will be called
every time the store is updated. So, we can pass our `render` function as the subscriber, and know that
each time the store updates, we can update the UI with the latest value.

Redux itself is a standalone library that can be used anywhere. This also means that it can be used with any UI layer.

#### Dispatching Actions

Finally, we need to respond to user input by creating **action** objects that
describe what happened, and **dispatching** them to the store. When we call `store.dispatch(action)`,
the store runs the reducer, calculates the updated state, and runs the subscribers
to update the UI.

```js
//
// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById('increment').addEventListener('click', function () {
    store.dispatch({ type: 'counter/incremented' });
});

document.getElementById('decrement').addEventListener('click', function () {
    store.dispatch({ type: 'counter/decremented' });
});

document.getElementById('incrementIfOdd').addEventListener('click', function () {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
        store.dispatch({ type: 'counter/incremented' });
    }
});

document.getElementById('incrementAsync').addEventListener('click', function () {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
        store.dispatch({ type: 'counter/incremented' });
    }, 1000);
});
```

Here, we'll dispatch the actions that will make the reducer add 1 or
subtract 1 from the current counter value.

We can also write code that only dispatches an action if a certain
condition is true, or write some async code that dispatches an action
after a delay.

### Data Flow

We can summarize the flow of data through a Redux app with this diagram. It represents how:

-   actions are dispatched in response to a user interaction like a click
-   the store runs the reducer function to calculate a new state
-   the UI reads the new state to display the new values

(Don't worry if these pieces aren't quite clear yet! Keep this picture in your mind as you go through the rest of this tutorial, and you'll see how the pieces fit together.)

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

That counter example was small, but it does show all the working pieces of a real Redux app.
**Everything we'll talk about in the following sections expands on those basic pieces.**

With that in mind, let's review what we've learned so far:

:::tip Summary

-   **Redux is a library for managing global application state**
    -   Redux is typically used with the React-Redux library for integrating Redux and React together
    -   Redux Toolkit is the recommended way to write Redux logic
-   **Redux uses several types of code**
    -   _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
    -   _Reducers_ are functions that calculate a new state value based on previous state + an action
    -   A Redux _store_ runs the root reducer whenever an action is _dispatched_

### State Management

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

```js
//x
function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0);

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    // View: the UI definition
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    );
}
```

It is a self-contained app with the following parts:

-   The **state**, the source of truth that drives our app;
-   The **view**, a declarative description of the UI based on the current state
-   The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

-   State describes the condition of the app at a specific point in time
-   The UI is rendered based on that state
-   When something happens (such as a user clicking a button), the state is updated based on what occurred
-   The UI re-renders based on the new state

![One-way data flow](/img/tutorials/essentials/one-way-data-flow.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

### Immutability

"Mutable" means "changeable". If something is "immutable", it can never be changed.

JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:

```js
//
const obj = { a: 1, b: 2 };
// still the same object outside, but the contents have changed
obj.b = 3;

const arr = ['a', 'b'];
// In the same way, we can change the contents of this array
arr.push('c');
arr[1] = 'd';
```

This is called _mutating_ the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed.

**In order to update values immutably, your code must make _copies_ of existing objects/arrays, and then modify the copies**.

We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:

```js
//
const obj = {
    a: {
        // To safely update obj.a.c, we have to copy each piece
        c: 3
    },
    b: 2
};

const obj2 = {
    // copy obj
    ...obj,
    // overwrite a
    a: {
        // copy obj.a
        ...obj.a,
        // overwrite c
        c: 42
    }
};

const arr = ['a', 'b'];
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c');

// or, we can make a copy of the original array:
const arr3 = arr.slice();
// and mutate the copy:
arr3.push('c');
```

**Redux expects that all state updates are done immutably**. We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic.

:::info Want to Know More?

For more info on how immutability works in JavaScript, see:

-   [A Visual Guide to References in JavaScript](https://daveceddia.com/javascript-references/)
-   [Immutability in React and Redux: The Complete Guide](https://daveceddia.com/react-redux-immutability-guide/)

:::

## Redux Terminology

There's some important Redux terms that you'll need to be familiar with before we continue:

### Actions

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**.

The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

A typical action object might look like this:

```js
//
const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
};
```

### Reducers

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

:::info

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.

:::

Reducers must _always_ follow some specific rules:

-   They should only calculate the new state value based on the `state` and `action` arguments
-   They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
-   They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

-   Check to see if the reducer cares about this action
    -   If so, make a copy of the state, update the copy with new values, and return it
-   Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

```js
//
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/incremented') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1
        };
    }
    // otherwise return the existing state unchanged
    return state;
}
```

Reducers can use any kind of logic inside to decide what the new state should be: `if/else`, `switch`, loops, and so on.

<DetailedExplanation title="Detailed Explanation: Why Are They Called 'Reducers?'" >

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

-   `previousResult`, the value that your callback returned last time
-   `currentItem`, the current item in the array

The first time that the callback runs, there isn't a `previousResult` available, so we need to also pass in an initial value that will be used as the first `previousResult`.

If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:

```js
//
const numbers = [2, 5, 8];

const addNumbers = (previousResult, currentItem) => {
    console.log({ previousResult, currentItem });
    return previousResult + currentItem;
};

const initialValue = 0;

const total = numbers.reduce(addNumbers, initialValue);
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total);
// 15
```

Notice that this `addNumbers` "reduce callback" function doesn't need to keep track of anything itself. It takes the `previousResult` and `currentItem` arguments, does something with them, and returns a new result value.

**A Redux reducer function is exactly the same idea as this "reduce callback" function!** It takes a "previous result" (the `state`), and the "current item" (the `action` object), decides a new state value based on those arguments, and returns that new state.

If we were to create an array of Redux actions, call `reduce()`, and pass in a reducer function, we'd get a final result the same way:

```js
//
const actions = [{ type: 'counter/incremented' }, { type: 'counter/incremented' }, { type: 'counter/incremented' }];

const initialState = { value: 0 };

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);
// {value: 3}
```

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

</DetailedExplanation>

### Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```js
//
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: counterReducer });

console.log(store.getState());
// {value: 0}
```

### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```js
//
store.dispatch({ type: 'counter/incremented' });

console.log(store.getState());
// {value: 1}
```

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

### Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

```js
//
const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);
// 2
```

## Core Concepts and Principles

Overall, we can summarize the intent behind Redux's design in three core concepts:

### Single Source of Truth

The **global state** of your application is stored as an object inside a single **store**. Any given piece of data should only exist in one location, rather than being duplicated in many places.

This makes it easier to debug and inspect your app's state as things change, as well as centralizing logic that needs to interact with the entire application.

:::tip

This does _not_ mean that _every_ piece of state in your app must go into the Redux store! You should decide whether a piece of state belongs in Redux or your UI components, based on where it's needed.

:::

### State is Read-Only

The only way to change the state is to dispatch an **action**, an object that describes what happened.

This way, the UI won't accidentally overwrite data, and it's easier to trace why a state update happened. Since actions are plain JS objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

### Changes are Made with Pure Reducer Functions

To specify how the state tree is updated based on actions, you write **reducer** functions. Reducers are pure functions that take the previous state and an action, and return the next state. Like any other functions, you can split reducers into smaller functions to help do the work, or write reusable reducers for common tasks.

## Redux Application Data Flow

Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:

-   State describes the condition of the app at a specific point in time
-   The UI is rendered based on that state
-   When something happens (such as a user clicking a button), the state is updated based on what occurred
-   The UI re-renders based on the new state

For Redux specifically, we can break these steps into more detail:

-   Initial setup:
    -   A Redux store is created using a root reducer function
    -   The store calls the root reducer once, and saves the return value as its initial `state`
    -   When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
-   Updates:
    -   Something happens in the app, such as a user clicking a button
    -   The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/incremented'})`
    -   The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
    -   The store notifies all parts of the UI that are subscribed that the store has been updated
    -   Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
    -   Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

:::tip Summary

-   **Redux's intent can be summarized in three principles**
    -   Global app state is kept in a single store
    -   The store state is read-only to the rest of the app
    -   Reducer functions are used to update the state in response to actions
-   **Redux uses a "one-way data flow" app structure**
    -   State describes the condition of the app at a point in time, and UI renders based on that state
    -   When something happens in the app:
        -   The UI dispatches an action
        -   The store runs the reducers, and the state is updated based on what occurred
        -   The store notifies the UI that the state has changed
    -   The UI re-renders based on the new state

### Project Setup

For this tutorial, we've created a pre-configured starter project that already has React set up, includes some default styling, and has a fake REST API that will allow us to write actual API requests in our app. You'll use this as the basis for writing the actual application code.

To get started, you can open and fork this CodeSandbox:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/master/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
>
</iframe>
<br>

You can also [clone the same project from this Github repo](https://github.com/reduxjs/redux-fundamentals-example-app). After cloning the repo, you can install the tools for the project with `npm install`, and start it with `npm start`.

If you'd like to see the final version of what we're going to build, you can check out [the **`tutorial-steps` branch**](https://github.com/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps), or [look at the final version in this CodeSandbox](https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps).

#### Creating a New Redux + React Project

Once you've finished this tutorial, you'll probably want to try working on your own projects. **We recommend using the [Redux templates for Create-React-App](https://github.com/reduxjs/cra-template-redux) as the fastest way to create a new Redux + React project**. It comes with Redux Toolkit and React-Redux already configured, using [a modernized version of the "counter" app example you saw in Part 1](./part-1-overview.md). This lets you jump right into writing your actual application code without having to add the Redux packages and set up the store.

If you want to know specific details on how to add Redux to a project, see this explanation:

<DetailedExplanation title="Detailed Explanation: Adding Redux to a React Project">

The Redux template for CRA comes with Redux Toolkit and React-Redux already configured. If you're setting up a new project from scratch without that template, follow these steps:

-   Add the `@reduxjs/toolkit` and `react-redux` packages
-   Create a Redux store using RTK's `configureStore` API, and pass in at least one reducer function
-   Import the Redux store into your application's entry point file (such as `src/index.js`)
-   Wrap your root React component with the `<Provider>` component from React-Redux, like:

```js
//x
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

</DetailedExplanation>

#### Exploring the Initial Project

This initial project is based on [the standard Create-React-App](https://create-react-app.dev/docs/getting-started) project template, with some modifications.

Let's take a quick look at what the initial project contains:

-   `/src`
    -   `index.js`: the entry point file for the application. It renders the main `<App>` component.
    -   `App.js`: the main application component.
    -   `index.css`: styles for the complete application
    -   `/api`
        -   `client.js`: a small AJAX request client that allows us to make GET and POST requests
        -   `server.js`: provides a fake REST API for our data. Our app will fetch data from these fake endpoints later.
    -   `/exampleAddons`: contains some additional Redux addons that we'll use later in the tutorial to show how things work

If you load the app now, you should see a welcome message, but the rest of the app is otherwise empty.

With that, let's get started!

## Starting the Todo Example App

Our example application will be a small "todo" application. You've probably seen todo app examples before - they make
good examples because they let us show how to do things like tracking a list of items, handling user input, and updating
the UI when that data changes, which are all things that happen in a normal application.

### Defining Requirements

Let's start by figuring out the initial business requirements for this application:

-   The UI should consist of three main sections:
    -   An input box to let the user type in the text of a new todo item
    -   A list of all the existing todo items
    -   A footer section that shows the number of non-completed todos, and shows filtering options
-   Todo list items should have a checkbox that toggles their "completed" status. We should also be able to add a color-coded
    category tag for a predefined list of colors, and delete todo items.
-   The counter should pluralize the number of active todos: "0 items", "1 item", "3 items", etc
-   There should be buttons to mark all todos as completed, and to clear all completed todos by removing them
-   There should be two ways to filter the displayed todos in the list:
    -   Filtering based on showing "All", "Active", and "Completed" todos
    -   Filtering based on selecting one or more colors, and showing any todos whose tag that match those colors

We'll add some more requirements later on, but this is enough to get us started.

The end goal is an app that should look like this:

![Example todo app screenshot](/img/tutorials/fundamentals/todos-app-screenshot.png)

### Designing the State Values

One of the core principles of React and Redux is that **your UI should be based on your state**. So, one approach to designing an application is to first think of all the state needed to describe how the application works. It's also a good idea
to try to describe your UI with as few values in the state as possible, so there's less data you need to keep track of
and update.

Conceptually, there are two main aspects of this application:

-   The actual list of current todo items
-   The current filtering options

We'll also need to keep track of the data the user is typing into the "Add Todo" input box, but that's less important
and we'll handle that later.

For each todo item, we need to store a few pieces of information:

-   The text the user entered
-   The boolean flag saying if it's completed or not
-   A unique ID value
-   A color category, if selected

Our filtering behavior can probably be described with some enumerated values:

-   Completed status: "All", "Active", and "Completed"
-   Colors: "Red", "Yellow", "Green", "Blue", "Orange", "Purple"

Looking at these values, we can also say that the todos are "app state" (the core data that the application works with),
while the filtering values are "UI state" (state that describes what the app is doing right now). It can be helpful to
think about these different kinds of categories to help understand how the different pieces of state are being used.

### Designing the State Structure

With Redux, **our application state is always kept in plain JavaScript objects and arrays**. That means you may not put
other things into the Redux state - no class instances, built-in JS types like `Map` / `Set` `Promise` / `Date`, functions, or anything else that is not plain JS data.

**The root Redux state value is almost always a plain JS object**, with other data nested inside of it.

Based on this information, we should now be able to describe the kinds of values we need to have inside our Redux state:

-   First, we need an array of todo item objects. Each item should have these fields:
    -   `id`: a unique number
    -   `text`: the text the user typed in
    -   `completed`: a boolean flag
    -   `color`: An optional color category
-   Then, we need to describe our filtering options. We need to have:
    -   The current "completed" filter value
    -   An array of the currently selected color categories

So, here's what an example of our app's state might look like:

```js
//
const todoAppState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
        status: 'Active',
        colors: ['red', 'blue']
    }
};
```

It's important to note that **it's okay to have other state values outside of Redux!**. This example is small enough so far that we actually do have all our state in the Redux store, but as we'll see later, some data really doesn't need to be kept in Redux (like "is this dropdown open?" or "current value of a form input").

### Designing Actions

**Actions** are plain JavaScript objects that have a `type` field. As mentioned earlier, **you can think of an action as an event that describes something that happened in the application**.

In the same way that we designed the state structure based on the app's requirements, we should also be able to
come up with a list of some of the actions that describe what's happening:

-   Add a new todo entry based on the text the user entered
-   Toggle the completed status of a todo
-   Select a color category for a todo
-   Delete a todo
-   Mark all todos as completed
-   Clear all completed todos
-   Choose a different "completed" filter value
-   Add a new color filter
-   Remove a color filter

We normally put any extra data needed to describe what's happening into the `action.payload` field. This could be a
number, a string, or an object with multiple fields inside.

The Redux store doesn't care what the actual text of the `action.type` field is. However, your own code will look
at `action.type` to see if an update is needed. Also, you will frequently look at action type strings in the Redux
DevTools Extension while debugging to see what's going on in your app. So, try to choose action types that are
readable and clearly describe what's happening - it'll be much easier to understand things when you look at them later!

Based on that list of things that can happen, we can create a list of actions that our application will use:

-   `{type: 'todos/todoAdded', payload: todoText}`
-   `{type: 'todos/todoToggled', payload: todoId}`
-   `{type: 'todos/colorSelected, payload: {todoId, color}}`
-   `{type: 'todos/todoDeleted', payload: todoId}`
-   `{type: 'todos/allCompleted'}`
-   `{type: 'todos/completedCleared'}`
-   `{type: 'filters/statusFilterChanged', payload: filterValue}`
-   `{type: 'filters/colorFilterChanged', payload: {color, changeType}}`

In this case, the actions primarily have a single extra piece of data, so we can put that directly in the `action.payload` field. We could have split the color filter behavior into two actions, one for "added" and one for "removed", but in this case
we'll do it as one action with an extra field inside specifically to show that we can have objects as an action payload.

Like the state data, **actions should contain the smallest amount of information needed to describe what happened**.

## Writing Reducers

Now that we know what our state structure and our actions look like, it's time to write our first reducer.

**Reducers** are functions that take the current `state` and an `action` as arguments, and return a new `state` result. In other words, **`(state, action) => newState`**.

### Creating the Root Reducer

**A Redux app really only has one reducer function: the "root reducer" function** that you will pass to `createStore` later on. That one root reducer function is responsible for handling _all_ of the actions that are dispatched, and calculating what the _entire_ new state result should be every time.

Let's start by creating a `reducer.js` file in the `src` folder, alongside `index.js` and `App.js`.

Every reducer needs some initial state, so we'll add some fake todo entries to get us started. Then, we can write an outline for the logic inside the reducer function:

```js
// title="src/reducer.js"
const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
        status: 'All',
        colors: []
    }
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}
```

A reducer may be called with `undefined` as the state value when the application is being initialized. If that happens, we need to provide an initial state value so the rest of the reducer code has something to work with. **Reducers normally use ES6 default argument syntax to provide initial state: `(state = initialState, action)`**.

Next, let's add the logic to handle the `'todos/todoAdded'` action.

We first need to check if the current action's type matches that specific string.
Then, we need to return a new object containing _all_ of the state, even for the fields
that didn't change.

```js
// title="src/reducer.js"
function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        // highlight-start
        case 'todos/todoAdded': {
            // We need to return a new state object
            return {
                // that has all the existing state data
                ...state,
                // but has a new array for the `todos` field
                todos: [
                    // with all of the old todos
                    ...state.todos,
                    // and the new todo object
                    {
                        // Use an auto-incrementing numeric ID for this example
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            };
        }
        // highlight-end
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}
```

That's... an awful lot of work to add one todo item to the state. Why is all this extra work necessary?

### Rules of Reducers

We said earlier that **reducers must _always_ follow some special rules**:

-   They should only calculate the new state value based on the `state` and `action` arguments
-   They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
-   They must not do any asynchronous logic or other "side effects"

:::tip

**A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function**. Some common kinds of side effects are things like:

-   Logging a value to the console
-   Saving a file
-   Setting an async timer
-   Making an AJAX HTTP request
-   Modifying some state that exists outside of a function, or mutating arguments to a function
-   Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

:::

Any function that follows these rules is also known as a **"pure" function**, even if it's not specifically written as a reducer function.

But why are these rules important? There's a few different reasons:

-   One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
-   On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
-   If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
-   Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

The rule about "immutable updates" is particularly important, and worth talking about further.

### Reducers and Immutable Updates

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

:::warning

In Redux, **our reducers are _never_ allowed to mutate the original / current state values!**

```js
//
// ❌ Illegal - by default, this will mutate the state!
state.value = 123;
```

:::

There are several reasons why you must not mutate state in Redux:

-   It causes bugs, such as the UI not updating properly to show the latest values
-   It makes it harder to understand why and how the state has been updated
-   It makes it harder to write tests
-   It breaks the ability to use "time-travel debugging" correctly
-   It goes against the intended spirit and usage patterns for Redux

So if we can't change the originals, how do we return an updated state?

:::tip

**Reducers can only make _copies_ of the original values, and then they can mutate the copies.**

```js
//
// ✅ This is safe, because we made a copy
return {
    ...state,
    value: 123
};
```

:::

We already saw that we can [write immutable updates by hand](./part-2-concepts-data-flow.md#immutability), by using JavaScript's array / object spread operators and other functions that return copies of the original values.

This becomes harder when the data is nested. **A critical rule of immutable updates is that you must make a copy of _every_ level of nesting that needs to be updated.**

However, if you're thinking that "writing immutable updates by hand this way looks hard to remember and do correctly"... yeah, you're right! :)

Writing immutable update logic by hand _is_ hard, and **accidentally mutating state in reducers is the single most common mistake Redux users make**.

:::tip

**In real-world applications, you won't have to write these complex nested immutable updates by hand**. In [Part 8: Modern Redux with Redux Toolkit](./part-8-modern-redux.md), you'll
learn how to use Redux Toolkit to simplify writing immutable update logic in reducers.

:::

### Handling Additional Actions

With that in mind, let's add the reducer logic for a couple more cases. First, toggling a todo's `completed` field based on its ID:

```js
// title="src/reducer.js"
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            };
        }
        // highlight-start
        case 'todos/todoToggled': {
            return {
                // Again copy the entire state object
                ...state,
                // This time, we need to make a copy of the old todos array
                todos: state.todos.map((todo) => {
                    // If this isn't the todo item we're looking for, leave it alone
                    if (todo.id !== action.payload) {
                        return todo;
                    }

                    // We've found the todo that has to change. Return a copy:
                    return {
                        ...todo,
                        // Flip the completed flag
                        completed: !todo.completed
                    };
                })
            };
        }
        // highlight-end
        default:
            return state;
    }
}
```

And since we've been focusing on the todos state, let's add a case to handle the "visibility selection changed" action as well:

```js
// title="src/reducer.js"
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            };
        }
        case 'todos/todoToggled': {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.payload) {
                        return todo;
                    }

                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                })
            };
        }
        // highlight-start
        case 'filters/statusFilterChanged': {
            return {
                // Copy the whole state
                ...state,
                // Overwrite the filters value
                filters: {
                    // copy the other filter fields
                    ...state.filters,
                    // And replace the status field with the new value
                    status: action.payload
                }
            };
        }
        // highlight-end
        default:
            return state;
    }
}
```

We've only handled 3 actions, but this is already getting a bit long. If we try to handle every action in this one reducer
function, it's going to be hard to read it all.

That's why **reducers are typically split into multiple smaller reducer functions** - to make it easier to understand and
maintain the reducer logic.

## Splitting Reducers

As part of this, **Redux reducers are typically split apart based on the section of the Redux state that they update**. Our todo app state currently has two top-level sections: `state.todos` and `state.filters`. So, we can split the large root reducer function into two smaller reducers - a `todosReducer` and a `filtersReducer`.

So, where should these split-up reducer functions live?

**We recommend organizing your Redux app folders and files based on "features"** - code that relates to a specific concept
or area of your application. **The Redux code for a particular feature is usually written as a single file, known as a
"slice" file**, which contains all the reducer logic and all of the action-related code for that part of your app state.

Because of that, **the reducer for a specific section of the Redux app state is called a "slice reducer"**. Typically, some of the action objects will be closely related to a specific slice reducer, and so the action type strings should start with the name of that feature (like `'todos'`) and describe the event that happened (like `'todoAdded'`), joined together into one string (`'todos/todoAdded'`).

In our project, create a new `features` folder, and then a `todos` folder inside that. Create a new file named `todosSlice.js`, and let's cut and paste the todo-related initial state over into this file:

```js
// title="src/features/todos/todosSlice.js"
const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
];

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
```

Now we can copy over the logic for updating the todos. However, there's an important difference here. **This file only has to update the todos-related state - it's not nested any more!** This is another reason why we split up reducers. Since the todos state is an array by itself, we don't have to copy the outer root state object in here. That makes this reducer easier to read.

This is called **reducer composition**, and it's the fundamental pattern of building Redux apps.

Here's what the updated reducer looks like after we handle those actions:

```js
// title="src/features/todos/todosSlice.js"
export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        // highlight-start
        case 'todos/todoAdded': {
            // Can return just the new todos array - no extra object around it
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ];
        }
        case 'todos/todoToggled': {
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        }
        //highlight-end
        default:
            return state;
    }
}
```

That's a bit shorter and easier to read.

Now we can do the same thing for the visibility logic. Create `src/features/filters/filtersSlice.js`, and let's move all the filter-related code over there:

```js
// title="src/features/filters/filtersSlice.js"
const initialState = {
    status: 'All',
    colors: []
};

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        // highlight-start
        case 'filters/statusFilterChanged': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                status: action.payload
            };
        }
        // highlight-end
        default:
            return state;
    }
}
```

We still have to copy the object containing the filters state, but since there's less nesting, it's easier to read what's happening.

:::info

To keep this page shorter, we'll skip showing how to write the reducer update logic for the other actions.

**Try writing the updates for those yourself**, based on [the requirements described above](#defining-requirements).

If you get stuck, see [the CodeSandbox at the end of this page](#what-youve-learned) for the complete implementation of these reducers.

:::

## Combining Reducers

We now have two separate slice files, each with its own slice reducer function. But, we said earlier that the Redux store needs _one_ root reducer function when we create it. So, how can we go back to having a root reducer without putting all the code in one big function?

Since reducers are normal JS functions, we can import the slice reducers back into `reducer.js`, and write a new root reducer whose only job is to call the other two functions.

```js
// title="src/reducer.js"
import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';

export default function rootReducer(state = {}, action) {
    // always return a new object for the root state
    return {
        // the value of `state.todos` is whatever the todos reducer returns
        todos: todosReducer(state.todos, action),
        // For both reducers, we only pass in their slice of the state
        filters: filtersReducer(state.filters, action)
    };
}
```

**Note that each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.**

This allows us to split up our logic based on features and slices of state, to keep things maintainable.

### `combineReducers`

We can see that the new root reducer is doing the same thing for each slice: calling the slice reducer, passing in the slice of the state owned by that reducer, and assigning the result back to the root state object. If we were to add more slices, the pattern
would repeat.

The Redux core library includes a utility called [`combineReducers`](../../api/combineReducers.md), which does this same boilerplate step for us. We can replace our hand-written `rootReducer` with a shorter one generated by `combineReducers`.

**Now that we need `combineReducers`, it's time to actually install the Redux core library**:

```js
//
npm install redux
```

Once that's done, we can import `combineReducers` and use it:

```js
// title="src/reducer.js"
// highlight-next-line
import { combineReducers } from 'redux';

import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
});

export default rootReducer;
```

`combineReducers` accepts an object where the key names will become the keys in your root state object, and the
values are the slice reducer functions that know how to update those slices of the Redux state.

**Remember, the key names you give to `combineReducers` decides what the key names of your state object will be!**

## What You've Learned

**State, Actions, and Reducers are the building blocks of Redux**. Every Redux app has state values, creates actions to describe what happened, and uses reducer functions to calculate new state values based on the previous state and an action.

Here's the contents of our app so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-1-combinedReducers/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Freducer.js&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
>
</iframe>
<br>

:::tip Summary

-   **Redux apps use plain JS objects, arrays, and primitives as the state values**
    -   The root state value should be a plain JS object
    -   The state should contain the smallest amount of data needed to make the app work
    -   Classes, Promises, functions, and other non-plain values should _not_ go in the Redux state
    -   Reducers must not create random values like `Math.random()` or `Date.now()`
    -   It's okay to have other state values that are not in the Redux store (like local component state) side-by side with Redux
-   **Actions are plain objects with a `type` field that describe what happened**
    -   The `type` field should be a readable string, and is usually written as `'feature/eventName'`
    -   Actions may contain other values, which are typically stored in the `action.payload` field
    -   Actions should have the smallest amount of data needed to describe what happened
-   **Reducers are functions that look like `(state, action) => newState`**
    -   Reducers must always follow special rules:
        -   Only calculate the new state based on the `state` and `action` arguments
        -   Never mutate the existing `state` - always return a copy
        -   No "side effects" like AJAX calls or async logic
-   **Reducers should be split up to make them easier to read**
    -   Reducers are usually split based on top-level state keys or "slices" of state
    -   Reducers are usually written in "slice" files, organized into "feature" folders
    -   Reducers can be combined together with the Redux `combineReducers` function
    -   The key names given to `combineReducers` define the top-level state object keys
