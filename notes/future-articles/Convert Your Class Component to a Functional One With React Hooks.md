# Convert Your Class Component to a Functional One With React Hooks

> Build lean, mean components

Build lean, mean components
---------------------------

[

![Matthew Croak](https://miro.medium.com/fit/c/96/96/1*HLHRHqE91C1dj5jm1GYO3A@2x.jpeg)



](https://matt-croak.medium.com/?source=post_page-----ab5f4d11f9bc--------------------------------)

![](https://miro.medium.com/max/3158/1*htAZPYyhEjkTJ1pmag13IQ.png)

Image from [Free Code Camp](https://cdn-media-1.freecodecamp.org/images/1*0MgGEfZfLO91g1Oa2h3ebQ@2x.png)

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are an efficient addition in React 16.8 that allows you to use state in functional components. This can help keep your components lean and perform better while still allowing the flexibility of local state implementation.

In this post, I’ll walk you through the painless process of converting one of my class components to a functional one without compromising my state requirements.

We will be converting my `View` component, which is part of my larger React Editor app. If you’ve read my last post, [_How To Implement Dark Mode in Your React App_](https://medium.com/better-programming/how-to-implement-dark-mode-in-your-react-app-63c1a0c5e337), you know what I am referring to.

If you haven’t (you should), my React Editor is an online text editor that allows user input for HTML, CSS, and JavaScript and it then compiles all of that code and produces the rendered result in `View`.

The rendered outcome is below.

![](https://miro.medium.com/max/60/1*tI0C2-1nq9sh40dxal_83A.png?q=20)

![](https://miro.medium.com/max/5628/1*tI0C2-1nq9sh40dxal_83A.png)

The View component is the bottom section with the red and blue text.

Notice how my app styles do not interfere with the styles in `View`.

This is because I am using React’s `[Iframe](https://www.npmjs.com/package/react-iframe)` component to isolate all code provided by the user from the code I use for the rest of my app. Below is my class component, before switching over to Hooks.

As you can see, I have a state value, `compiled`, which is the compiled HTML, CSS, and JavaScript that will be inserted into an `Iframe` component.

I need to use `componentDidUpdate` because whenever `this.props.compiled` is updated I need to call this:

x.contentDocument.open()           
x.contentDocument.close()  
x.contentDocument.write(this.state.compiled)

In order for the `Iframe` to reflect the most current compiled data. I don’t necessarily need to add `compiled` to state but for demonstrative purposes, I decided to include it.

Now, let’s clean up our code and convert our component to use Hooks.

First, let’s focus on the state.

state = {          
   compiled: ''  
}

The above code can be rewritten to use our first Hook, called `[useState](https://reactjs.org/docs/hooks-state.html)`.

useState
--------

We can use `useState` to rewrite the above code. See below.

const \[compiled, setCompiled\] = useState('');

Let’s break this down.

You see that we have our state value, `compiled`. Then, you can see the additional `setCompiled` in the array. This will be the function used to update `compiled`.

If you wanted to set `compiled` to `'<h1>hello</h1>'`, you could write `setCompiled('<h1>hello</h1>')` rather than calling `this.setState({compiled:'<h1>hello</h1>'})`.

The argument we passed to `useState` represents the initial value we want our value to have. `compiled` should be an empty string.

Next, we will focus on replacing the life cycle methods, `componentDidMount` and `componentDidUpdate`. These are useful methods for class components but have been unavailable to functional ones…until now (sort of).

useEffect
---------

The `[useEffect](https://reactjs.org/docs/hooks-effect.html)` Hook allows you to perform side-effects in a functional component.

These side-effects are the effects caused by a component re-rendering in response to some kind of change, such as state change, API requests, etc.

For example, if you had a state value called `time`, a side-effect of a clock component’s hands moving to reflect the value, `this.state.time` could be the execution of a function that logs/sends the time data somewhere.

How does this relate to our class component?

If you look at our previous component lifecycle methods, you may have noticed that the code is a bit redundant. We are trying to perform the `contentDocument` methods in order to set the `Iframe` content equal to `this.props.compiled` or `this.state.compiled` in both `componentDidMount` and `componentDidUpdate`.

We could abstract the `contentDocument` functionality and then call that helper function when needed in both `componentDidMount` and `componentDidUpdate`.

This can cut down on the code smell, but the point is that we still have to use the same functionality in both life cycle methods. While it makes sense that we would want to do this, `useEffect` can help us accomplish both tasks with one hook.

> “If you’re familiar with React class lifecycle methods, you can think of the `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.” — [React Docs](https://reactjs.org/docs/hooks-effect.html)

The way in which `useEffect` works is by executing functionality when a component first mounts and when it re-renders.

Traditionally, setting state from render is ill-advised and can result in error.

With `useEffect`, when the component mounts/re-renders, we can execute the functionality needed to update our state values without creating any problems. See below.

We run `setCompiled` and pass it `props.compiled` because we want to set our state value for `compiled` equal to the passed `compiled` prop. Then, we run our `contentDocument` methods to rewrite the `Iframe` content to reflect the new `compiled` value.

If you were wondering how to control when `useEffect` should execute, look no further than the arguments at the end, `[props.compiled, compiled]`. By passing these arguments, `useEffect` will compare the current value for `props.compiled` to the state value for `compiled` before the most recent re-render.

If they are the same, no need to re-render. Otherwise, re-render and then compare the values again. You can think of it similarly to `prevProps` and `this.props` which are available in `componentDidUpdate`.

Below is the final result of our class to functional component conversion.

By implementing React Hooks, we were able to convert our class component to a functional one, which has resulted in more readable code, less redundancy, and potentially more [optimal performance](https://medium.com/better-programming/rundown-of-the-most-important-react-hooks-5c9ec4cac5a2) from our component.


[Source](https://betterprogramming.pub/convert-your-class-component-to-a-functional-one-with-react-hooks-ab5f4d11f9bc)