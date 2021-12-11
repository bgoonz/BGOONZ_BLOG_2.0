---
title: Underated React Hooks
weight: 0
excerpt: Underated React Hooks
seo:
    title: 'Underated React Hooks'
    description: 'Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity'
    robots: []
    extra: []
template: docs
---

React Hooks provide us with access to core React functionalities within the context of function components. Traditionally, to optimize React, developers have had to switch between function and class components, however, React Hooks allow us to use function components throughout projects to build both small and large applications.

If you're a React developer who likes to write function components over class components, then this article is for you; we'll look at three helpful yet somewhat underrated React Hooks that you might not be so familiar with, `useImperativeHandle`, `useLayoutEffect`, and `useDebugValue`. We'll explore their use cases, syntax, and a few code examples. Let's get started!

React `useImperativeHandle` Hook
--------------------------------

In React, data is passed from parent to child components via props, known as unidirectional data flow. The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.

In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the [`useImperativeHandle` Hook](https://reactjs.org/docs/hooks-reference.html#useimperativehandle), which allows us to expose a value, state, or function inside a child component to the parent component through `ref`. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.

### Syntax

useImperativeHandle(ref, createHandle,  [dependencies])

-   `ref`: the ref passed down from the parent component
-   `createHandle`: the value to be exposed to the parent component
-   `dependencies`: an array of values that causes the Hook to rerun when changed

### Use cases

When you need a bidirectional data and logic flow, but you don't want to overcomplicate things by introducing state management libraries, the `useImperativeHandle` Hook is a great choice.

For example, I once used the `useImperativeHandle` Hook when I needed to open a modal component when a button in the parent component was clicked.

Defining state in the parent component would cause the parent component and its children to re-render each time the modal button was clicked, therefore, I wanted the state in the child component. Instead, I stored the modal state in the `Modal` component using `useImperativeHandle` and `forwardRef`.

Consider the code below:

import  React,  { useRef }  from  'react';  import  Child  from  './Child';  const  ParentComponent  =  ()  =>  {  const childRef = useRef(null);  const handleOpenModal =  (value)  =>  { childRef.current.openModal(value);  }  return  (  <div>  <p>This  is a parent component</p>  <Child  ref={childRef}/>  <button onClick={()  => handleOpenModal(true)}>Open modal</button>  </div>  )  }  export  default  ParentComponent;

Above, we defined a `ref`, which we passed down to the child component. In our code below, the `ref` will be the first parameter passed to `useImperativeHandle` in the child component.

We also defined a `handleOpenModal` function, which returns the `openModal` function passed up from the child component with `childRef.current.openModal(value)`. The function is then called when the button is clicked.

[](https://blog.logrocket.com/underrated-react-hooks-youre-missing-out-on/)

The child component should look like the code below:

import  React,  { forwardRef, useImperativeHandle, useState }  from  'react';  function  ChildComponent  (props,  ref)  {  const  [openModal, setOpenModal]  = useState(false); useImperativeHandle(ref,  ()  =>  ({ openModal:  (value)  => setOpenModal(value),  }));  if(!openModal)  return  null;  return  (  <div>  <p>This  is a modal!</p>  <button onClick={()  => setOpenModal(false)}>  Close  </button>  </div>  )  }  export  default forwardRef(ChildComponent);

We wrapped the child component in a `forwardRef` to expose the `openModal` function defined in `useImperativeHandle`. In the parent component, the state defined in the child component is changed, causing a re-render of only the child component. Problem solved!

React `useLayoutEffect` Hook
----------------------------

Like the `useEffect` Hook, the `useLayoutEffect` Hook lets you perform side effects like API calls, setting up subscriptions, and manually manipulating the DOM in a function component.

Although React fires both `useEffect` and `useLayoutEffect` after performing the DOM updates, `useLayoutEffect` is called before the browser paints those updates for users to see, synchronously, while `useEffect` is called after the browser paints those updates, asynchronously.

Therefore, the browser cannot paint any browser updates until `useLayoutEffect` runs. For this reason, you'll mostly use `useEffect`, which shows your users something like a loader in the browser while the side effects are being run.

However, there are a few situations where we want to run the side effect and update the DOM before showing our users the updates. We can do so using `useLayoutEffect` with the following syntax.

### Syntax

useLayoutEffect(callback,  [dependencies])

-   `callback`: the function that contains the side effect logic
-   `dependencies`: an array of dependencies. The callback function is run again when the value of any of the dependencies changes

Consider the code below:

import  React,  { useState, useLayoutEffect, useEffect }  from  'react';  const  TestHooks  =  ()  =>  {  const  [randomNumber, setRandomNumber]  = useState(0); useEffect(()  =>  {  if  (randomNumber ===  0)  { setRandomNumber(Math.random()  *  1000);  }  },  [randomNumber]);  return  (  <div className='App'>  <p>{randomNumber}</p>  <button onClick={()  => setRandomNumber(0)}>  Change  value  </button>  </div>  );  };  export  default  TestHooks;

Above, we have a side effect that updates state with a random number and includes a button to reset state to `0`. If we run the code above with the `useEffect` Hook, you'll notice a flickering effect as the number changes from `0` to the next random number when the reset button is clicked.

Now, change `useEffect` to `useLayoutEffect` and click the button again. The transition to the next random number is smoother.

Code with `useEffect`:

DOM updates =>  Browser paints the update for users to see => useEffect is run => another DOM update =>  Broswer paints the second update for user to see

Code with `useLayoutEffect`:

DOM updates => useLayoutEffect is run =>another DOM update =>  Broswer paints the overall update for user to see

You can experiment with the [code](https://codesandbox.io/s/youthful-shadow-0ey4y?file=/src/App.js) to learn more.

### Use cases

Once, when I was developing a static website for a client, I used the `useLayoutEffect` Hook and [React Router DOM for routing](https://blog.logrocket.com/react-router-dom-tutorial-examples/). However, I noticed that the window scroll position of the page didn't move to the top when navigating between the different pages, instead, scrolling began from where it was on the previous page, which is not an uncommon occurrence with React Router DOM.

We can solve this problem with `useLayoutEffect` as follows:

import  { useLayoutEffect }  from  "react";  import  { useLocation }  from  "react-router-dom";  export  default  function  ScrollToTop()  {  const  { pathname }  = useLocation(); useLayoutEffect(()  =>  { window.scrollTo(0,  0);  },  [pathname]);  return  null;  }

The `index.js` file looks like the code below:

function  Index()  {  return  (  <Router>  <ScrollToTop  />  <App  />  </Router>  );  }

Basically, we tell the browser to take a user to the top of the page before showing them any content. With `useLayoutEffect`, we can make that process seamless.

There are several other practical applications of the `useLayoutEffect` Hook. After all DOM mutations, `useLayoutEffect` fires synchronously; therefore, it can be used to read and change the layout in the DOM, from getting the scroll position or other styles for an element to adding animations at a particular scroll position. Be careful though, your user won't see anything until this Hook is run and another DOM update is made.

React `useDebugValue` Hook
--------------------------

Unlike the other Hooks we've covered, which are used to improve the user experience, `useDebugValue` improves the developer experience, helping developers log information in React DevTools in an easier format. Note that the `useDebugValue` Hook should only be used in combination with a custom React Hook.

### Syntax

useDebugValue(value)

If you're familiar with React DevTools, then you know that whenever a built-in React Hook like `useState` or `useRef` is used in a custom Hook, it will debug its respective values within React DevTools.

For example, consider the custom Hook below:

import  { useDebugValue, useState }  from  "react"  export  default  function useCustomHook()  {  const  [name, setName]  = useState("")  const  [address, setAddress]  = useState("")  return  [name, setName, address, setAddress]  }

Let's call the custom Hook in `App.js` and inspect DevTools:

import useCustomHook from  './useCustomHook';  function  App()  { useCustomHook();  return  (  <>  <div className="App">  <p>hey</p>  </div>  </>  );  }  export  default  App;

Inspecting React DevTools, we see that the value for `useState` is already being logged for us. We have two states for `name` and `address`:

![Usestate Value Logged](https://blog.logrocket.com/wp-content/uploads/2021/12/use-state-value-logged.png)

At this point, we don't know which of the state values the empty strings belong to. If we were building a simple custom Hook, we could easily run back to the code to see that `name` comes first, so it should be the first state in DevTools.

However, if we were building a complex custom Hook to use in various components, we would need a way to track which values belong to which states while debugging. To do so, we can use `useDebugValue` to display a label for values in our custom Hooks in React DevTools.

See the updated custom Hook below:

import  { useDebugValue, useState }  from  "react"  export  default  function useCustomHook()  {  const  [name, setName]  = useState("")  const  [address, setAddress]  = useState("") useDebugValue(name ?  'Name has been set'  :  'Name has not been set')  return  [name, setName, address, setAddress]  }

The updated DevTools is as follows:

![Updated Devtools](https://blog.logrocket.com/wp-content/uploads/2021/12/updated-devtools.png)

We are able to monitor the value of `name` as its state changes, using `useDebugValue` so we don't have to guess what its value is. `useDebugValue` is helpful when the Hook's state is not immediately obvious from looking at the values in DevTools.

`useDebugValue` takes an optional second parameter, a formatting function. Let's say the value you are receiving needs to be formatted before it is readable, like parsing JSON data or formatting a date. `useDebugValue` takes in the debug value and returns a formatted value, however, it only runs when DevTools are open and the value is being inspected.

useDebugValue(date, date => date.toDateString());

Conclusion
----------

In this tutorial, we covered three React Hooks that we don't need most of the time but can make our lives easier when we face certain edge cases.

The `useImperativeHandle`Hook allows us to expose a value, state, or function inside a child component to the parent component. The`useLayoutEffect` lets us perform side effects like API calls, setting up subscriptions, and manually manipulating the DOM in a function component. Lastly, the `useDebugValue` Hook makes it easier for developers to log information in React DevTools.