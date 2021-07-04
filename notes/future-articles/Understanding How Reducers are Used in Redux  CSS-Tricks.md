# Understanding How Reducers are Used in Redux | CSS-Tricks

> A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. We have tools, like

A reducer is a **function** that determines **changes** to an **application’s state.** It uses the **action** it receives to determine this change. We have tools, like [Redux](https://redux.js.org/), that help manage an application’s state changes in a single store so that they behave consistently.

Why do we mention Redux when talking about reducers? Redux relies heavily on reducer functions that take the previous state and an action in order to execute the next state.

We’re going to focus squarely on reducers is in this post. Our goal is to get comfortable working with the reducer function so that we can see how it is used to update the state of an application — and ultimately understand the role they play in a state manager, like Redux.

### What we mean by “state”

State changes are based on a user’s interaction, or even something like a network request. If the application’s state is managed by Redux, the changes happen inside a reducer function — this is the only place where state changes happen. The reducer function makes use of the **initial state** of the application and something called **action**, to determine what the **new state** will look like.

If we were in math class, we could say:

    initial state + action = new state

In terms of an actual reducer function, that looks like this:

    const contactReducer = (state = initialState, action) => {
      
    }

Where do we get that initial state and action? Those are things we define.

### The state parameter

The `state` parameter that gets passed to the reducer function has to be the current state of the application. In this case, we’re calling that our `initialState` because it will be the first (and current) state and nothing will precede it.

    contactReducer(initialState, action)

Let’s say the initial state of our app is an empty list of contacts and our action is adding a new contact to the list.

    const initialState = {
      contacts: []
    }

That creates our `initialState`, which is equal to the `state` parameter we need for the reducer function.

### The action parameter

An `action` is an object that contains two keys and their values. The state update that happens in the reducer is always dependent on the value of `action.type`. In this scenario, we are demonstrating what happens when the user tries to create a new contact. So, let’s define the `action.type` as `NEW_CONTACT`.

    const action = {
      type: 'NEW_CONTACT',
      name: 'John Doe',
      location: 'Lagos Nigeria',
      email: 'johndoe@example.com'
    }

There is typically a `payload` value that contains what the user is sending and would be used to update the state of the application. It is important to note that `action.type` is required, but `action.payload` is optional. Making use of `payload` brings a level of structure to how the action object looks like.

### Updating state

The state is meant to be `immutable`, meaning it shouldn’t be changed directly. To create an updated state, we can make use of `[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)` or opt for the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

#### Object.assign

    const contactReducer = (state, action) => {
      switch (action.type) {
        case 'NEW_CONTACT':
        return Object.assign({}, state, {
          contacts: [
            ...state.contacts,
            action.payload
          ]
        })
        default:
          return state
      }
    }

In the above example, we made use of the `Object.assign()` to make sure that we do not change the state value directly. Instead, it allows us to return a new object which is filled with the state that is passed to it and the payload sent by the user.

To make use of `Object.assign()`, it is important that the first argument is an empty object. Passing the state as the first argument will cause it to be mutated, which is what we’re trying to avoid in order to keep things consistent.

#### The spread operator

The alternative to `object.assign()` is to make use of the spread operator, like so:

    const contactReducer = (state, action) => {
      switch (action.type) {
        case 'NEW_CONTACT':
        return {
            ...state, contacts:
            [...state.contacts, action.payload]
        }
        default:
          return state
      }
    }

This ensures that the incoming state stays intact as we append the new item to the bottom.

### Working with a switch statement

Earlier, we noted that the update that happens depends on the value of `action.type`. The switch statement conditionally determines the kind of update we’re dealing with, based on the value of the `action.type`.

That means that a typical reducer will look like this:

    const addContact = (state, action) => {
      switch (action.type) {
        case 'NEW_CONTACT':
        return {
            ...state, contacts:
            [...state.contacts, action.payload]
        }
        case 'UPDATE_CONTACT':
          return {
            
          }
        case 'DELETE_CONTACT':
          return {
            
          }
        case 'EMPTY_CONTACT_LIST':
          return {
            
          }
        default:
          return state
      }
    }

It’s important that we return state our `default` for when the value of `action.type` specified in the action object does not match what we have in the reducer — say, if for some unknown reason, the action looks like this:

    const action = {
      type: 'UPDATE_USER_AGE',
      payload: {
        age: 19
      }
    }

Since we don’t have this kind of action type, we’ll want to return what we have in the state (the current state of the application) instead. All that means is we’re unsure of what the user is trying to achieve at the moment.

### Putting everything together

Here’s a simple example of how I implemented the reducer function in React.

You can see that I didn’t make use of Redux, but this is very much the same way Redux uses reducers to store and update state changes. The primary state update happens in the reducer function, and the value it returns sets the updated state of the application.

Want to give it a try? You can extend the reducer function to allow the user to update the age of a contact. I’d like to see what you come up with in the comment section!

Understanding the role that reducers play in Redux should give you a better understanding of what happens underneath the hood. If you are interested in reading more about using reducers in Redux, it’s worth checking out the [official documentation](https://redux.js.org/basics/reducers).


[Source](https://css-tricks.com/understanding-how-reducers-are-used-in-redux/)