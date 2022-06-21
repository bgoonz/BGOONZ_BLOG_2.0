---
title: React Components
weight: 0
excerpt: All of the code examples below will be included a second time at the bottom of this article as an embedded gist.
seo:
    title: 'React Intro'
    description: 'Introduction to React for Complete Beginners All of the code examples below will be included a second time at the bottom of this article as an embedded gist, so that it is properly syntax highlighted. React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

# A Basic Component

> The key abstraction that React provides is that of a component. To reiterate, a component is some thing that is being rendered in the browser. It could be a button, a form with a bunch of fields in it, a navigation bar at the top of the page, a single input field, etc. Any of these could be its own component. React doesn't place any restrictions on how large or small a component can be. You could have an entire static site encapsulated in a single React component, but that at that point you may as well not be using React. So the first thing to remember about a component is that a component must render something. If nothing is being rendered from a component, then React will throw an error.

Let's write the most basic of components we can possibly write. Inside of BasicComponent.js, first import React at the top of the file. Our most basic of
components looks like this:
import React from 'react';

`const BasicComponent = () => <div>Hello World!</div>;`

export default BasicComponent;
This is a component that simply returns a div tag with the words Hello World! inside. The last line simply exports our component so that it can be imported
by another file.

Notice that this component looks exactly like an anonymous arrow function that we've named BasicComponent. In fact, that is literally what this is. Nothing
more, nothing less. The arrow function then is simply returning the div tag. When a component is written as a function like this one is, it is called a
functional component.

While a component can of course get a lot more complicated than this, fundamentally, all a component does is render some HTML.

A Basic Class Component
The basic component you wrote in the previous exercise is an example of a functional component, which is appropriate since that component is literally
nothing more than a function that returns some HTML. Functional components are great when all you want a component to do is to render some stuff; they
are really good at doing just that.

Components can also be written as classes. For this exercise, we're going to write a class component that does exactly the same thing as the functional component we just wrote. We'll again need to import React at the top of the file, but we'll also need to add a little something. Our import statement will look like this:
import React, { Component } from 'react';
So, in addition to importing React, we're also importing the base Component class that is included in the React library. The export statement at the bottom of the file also stays, completely unchanged. Our class component will thus look like this:
import React, { Component } from 'react';

```js
class BasicClassComponent extends Component {
    render() {
        return <div>Hello World!</div>;
    }
}
```

export default BasicClassComponent;
Notice that our BasicClassComponent inherits from the base Component class that we imported from the React library, by virtue of the 'extends' keyword. That being said, there's nothing in this minimal component that takes advantage of any of those inherited methods. All we have is a method on our component class called render that returns the same div tag.

In this case, if we really were deciding between whether to use a functional component versus a class component to render a simple div tag, then the functional style is more appropriate to use. This is because class components are much better suited for handling component state and triggering events based on the component's lifecycle. Don't worry if you don't know what all these terms meant, we will get to them shortly.

The important takeaways at this point are that there are two types of components, functional and class components, and that functional components are well-suited if you're just looking to render some HTML. Class components, on the other hand, are much better suited for handling components that require more complex functionality, need to exhibit more varied behavior, and/or need to keep track of some state that may change throughout said component's lifecycle.

A Class Component with Some State
When we talked about class components, it was mentioned that class components can handle state. So what does that mean? Component state is any dynamic data that we want the component to keep track of. For example, let's say we have a form component. This form has some input fields that we'd like users to fill out. When a user types characters into an input field, how is that input persisted from the point of view of our form component?

The answer is by using component state! There are a few important concepts regarding component state, such as how to update it, pass it to another component, render it, etc. We'll talk about all of these in a bit, but for now, let's just focus on how to add state to a class component.

Only class components have the ability to persist state, so if at any time you realize that a component needs to keep track of some state, you know that you'll automatically need a class component instead of a functional component.

Our class component with state will look a lot like the basic class component we just wrote, but with some extra stuff:
import React, { Component } from 'react';

```js
class ClassComponentWithState extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <div>Hello World!</div>;
    }
}
```

export default ClassComponentWithState;
So far, the only new thing going on here is the constructor block. If you recall how classes in JavaScript work, classes need constructors. Additionally, if a class is extending off of another class and wants access to its parent class's methods and properties, then the super function needs to be called inside the class's constructor function. Point being, the constructor function and the call to the super function are not associated with React, they are associated with all JavaScript classes.

Then there is the this.state property inside the constructor function that is set as an empty object. We're adding a property called state to our class and setting it to an empty object. State objects in React are always just plain old objects.

The observant student may be wondering why the basic class component we wrote in the previous exercise had no constructor function within its body. That is because we had no need for them since all our class component was doing was rendering some HTML. The constructor is needed here because that is where we need to initialize our state object. The call to super is needed because we can't reference this inside of our constructor without a call to super first.

Ok, now let's actually use this state object. One very common application of state objects in React components is to render the data being stored inside them within our component's render function. Let's change our current class component to do that.

```js
class ClassComponentWithState extends Component {
    constructor() {
        super();
        this.state = {
            someData: 8
        };
    }

    render() {
        return <div>{`Here's some data to render: ${this.state.someData}`}</div>;
    }
}
```

export default ClassComponentWithState;
So what's changed here? Well, we added a key-value pair to our state object inside our constructor. Then we changed the contents of the render function. Now, it's actually rendering the data that we have inside the state object. Notice that inside the div tags we're using a template string literal so that we can access the value of this.state.someData straight inside of our rendered content. This is a very handy piece of functionality that React provides for us when writing components.

With React's newest version, we can actually now add state to a component without explicitly defining a constructor on the class. We can refactor our class component to look like this:


```js
class ClassComponentWithState extends Component {
state = {
someData: 8
};

    render() {
        return (
            <div>{`Here's some data to render: ${this.state.someData}`}</div>
        );
    }

}

```

export default ClassComponentWithState;
Our code is slightly cleaner, and doesn't require as many keystrokes as the older version. Fewer keystrokes are always a plus in my book! This new syntax is what is often referred to as 'syntactic sugar': under the hood, the React library translates this back into the old constructor code that we first started with, so that the JavaScript remains valid to the JavaScript interpreter. The clue to this is the fact that when we want to access some data from the state object, we still need to call it with this.state.someData; changing it to just state.someData does not work.

While being able to write our code in this way is nice and convenient, going forward, I'm going to stick with the 'older' style of writing my React components by explicitly defining constructors so that you'll all have a better idea of what's going on under the hood. In other words, it's more "pedagogically sound". If you prefer the newer style (and I would in my own code), feel free to write your React components that way.
```js
class Component Updating State
Great, so we can render some state that our component persists for us. However, we said an important use case of component state is to handle dynamic data. A single static number isn't very dynamic at all. So now let's walk through how to update component state.

```js
import React, { Component } from 'react';
class ClassComponentUpdatingState extends Component {
  constructor() {
    super();
    this.state = {
      aNumber: 8
    };
  }


increment = () => {
this.setState({ aNumber: ++this.state.aNumber });
};

decrement = () => {
this.setState({ aNumber: --this.state.aNumber });
};

render() {
return (
<div>
<div>{`Our number: ${this.state.aNumber}`}</div>
<button onClick={this.increment}>+</button>
<button onClick={this.decrement}>-</button>
</div>
);
}
}

```

export default ClassComponentUpdatingState;
Notice that we've added two methods to our class: increment and decrement. increment and decrement are methods that we are adding to our class component. Unlike the render method,increment and decrement were not already a part of our class component. This is why increment and decrement are written as arrow functions, so that they are automatically bound to our class component. This needs to happen so that we can call them later on. Again, there's no crazy React black magic going on here, we simply added two methods to our class.

The more interesting thing is what is going on within the bodies of these methods. Each calls this funky setStatefunction. setState in fact is provided to us by React. It is the canonical way to update a component's state. Actually, it's the only way you should ever update a component's state. It may seem more verbose than necessary, but there are good reasons for why you should be doing it this way. I'm not going to get into those reasons now. I'll leave a link to the official documentation on the setState function, although I'm pretty sure at this point it will probably just blow your mind and/or overwhelm you with jargon. So for now, take this as a case of "because I'm telling you so".

So the way to use setState to update a component's state is to pass it an object with each of the state keys you wish to update, along with the updated value. In our increment method we said "I would like to update the aNumber property on my component state by adding one to it and then setting the new value as my new aNumber". The same thing happens in our decrement method, only we're subtracting instead of adding.

Then the other new concept we're running into here is how to actually call these methods we've added to our class. We added two HTML button tags within our render function, then in their respective onClick handlers, we specify the method that should be called whenever this button gets clicked. So whenever we click either of the buttons, our state gets updated appropriately and our component will re-render to show the correct value we're expecting.
```js
class Component Iterating State
Another common state pattern you'll see being used in React components is iterating over an array in our state object and rendering each array element in its own tag. This is often used in order to render lists.

Additionally, we want to be able to easily update lists and have React re-render our updated list. We'll see how both of these are done and how they work together within a single component in order to create the behavior of a dynamic list.

```js
import React, { Component } from 'react';
class ClassComponentIteratingState extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: ['flour', 'eggs', 'milk', 'sugar', 'vanilla extract'],
            newIngredient: ''
        };
    }


    handleIngredientInput = (event) => {
        this.setState({ newIngredient: event.target.value });
    };

    addIngredient = (event) => {
        event.preventDefault();
        const ingredientsList = this.state.ingredients;
        ingredientsList.push(this.state.newIngredient);
        this.setState({
            newIngredient: '',
            ingredients: ingredientsList
        });
    };

    render() {
        return (
            <div>
                {this.state.ingredients.map(ingredient => <div>{ingredient}</div>)}
                <form onSubmit={this.addIngredient}>
                    <input type="text" onChange={this.handleIngredientInput} placeholder="Add a new ingredient" value={this.state.newIngredient} />
                </form>
            </div>
        );
    }

}

```

export default ClassComponentIteratingState;
The first change to note is that our state object now has an 'ingredients' array, and a 'newIngredient' field that has been initialized to an empty string. The ingredients array contains the elements that we'll want to render in our list. We'll see shortly why the newIngredient field is needed.

The addIngredient and handleIngredientInput methods we've added to our class receives a parameter called 'event'. This event object is part of the browser's API. When we interact with some DOM element, such as clicking on an HTML button, the function that is invoked upon that button being clicked actually receives the event object. So when we type some input into an input tag, we're able grab each character that was typed into the input field through the event object paramter.

The handleIngredientInput method is what gets invoked every time the user presses a key to enter text in the input box for adding a new ingredient. Every character the user types gets persisted in the newIngredient field on the state object. We're able to grab the text in the input box using event.target.value, which holds the value of the string text that is currently in the input box. We use that to update our newIngredient string field.

Breaking down the addIngredient method, we see this event.preventDefault() invocation. This is because this method will be used upon submitting a form, and it turns out that submitting a form triggers some default form behavior that we don't want to trigger when we submit the form (namely refreshing the entire page). event.preventDefault() will prevent this default form behavior, meaning our form will only do what we want it to do when it is submitted.

Next, we store a reference to this.state.ingredients in a variable called ingredientsList. So we now have a copy of the array that is stored in our state object. We want to update the copy of the ingredients array first instead of directly updating the actual array itself in state. This is a React best practice.

Now we push whatever value is being stored at our newIngredient field onto the ingredientsList array so that our ingredientsList array is now more up-to-date than our this.state.ingredients array. So all we have to do now is call setState appropriately in order to update the value in our state object. Additionally, we also set the newIngredient field back to an empty string in order to clear out the input field once we submit a new ingredient. Now it's ready to accept more user input!

Looking at our render function, first note the this.state.ingredients.map call. This is looping through each ingredient in our ingredients array and returning each one within its own div tag. This is a very common syntax for rendering everything inside an array.

Then we have an HTML form which contains an input field. The purpose of this form is to allow a user to add new ingredients to the list. Note that we're passing our addIngredient method to the form's onSubmit handler. This means that our addIngredient method gets invoked whenever our form is submitted.

Lastly, the input field has an onChange handler that invokes our handleIngredientInput method whenever there is some sort of change in the input field, namely when a user types into it. Notice that the value field in our input tag reads off of this.state.newIngredient in order to know what value to display. So when a user enters text into the input field, the onChange handler is invoked every time, which updates our this.state.newIngredient field, which the input field
then renders.

Parent and Child Components
Now let's get into talking about how to have components interact with each other. A single isolated component isn't going to do us much good. That being said, it's possible to simply throw all of the HTML for a page into a single React component, though at that point that one component would be so bloated and monolithic that you might as well not have used React at all.

The beauty of React lies in the fact that it allows us to compose modular components together. Let's start off with the component we just saw, but let's change its name to ParentComponent.

```js
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: ['flour', 'eggs', 'milk', 'sugar', 'vanilla'],
            newIngredient: ''
        };
    }



    handleIngredientInput = (event) => {
        this.setState({ newIngredient: event.target.value });
    };

    addIngredient = (event) => {
        event.preventDefault();
        const ingredientsList = this.state.ingredients;
        ingredientsList.push(this.state.newIngredient);
        this.setState({
            newIngredient: '',
            ingredients: ingredientsList
        });
    };

    render() {
        return (
            <div>
                {this.state.ingredients.map(ingredient => <ChildComponent thing={ingredient} />)}
                <form onSubmit={this.addIngredient}>
                    <input type="text" onChange={this.handleIngredientInput} placeholder="Add a new ingredient" value={this.state.newIngredient} />
                </form>
            </div>
        );
    }

}
export default ParentComponent;
```


The only two other differences in this component are that we're importing a ChildComponent and then using it inside our this.state.ingredients.map call. ChildComponent is another React component. Notice that we're using it just as if it were any other HTML tag. This is how we lay out our component hierarchy: the ChildComponent is rendered within the ParentComponent. We can see this to be the case if we open up the developer console and inspect these elements.

Note also that we're passing each ingredient as a 'thing' to the ChildComponent component. This is how a parent component passes data to a child component. It doesn't need to be called 'thing'; you can call it whatever you want. Conceptually though, every piece of data that a parent component passes down to a child component is called a 'prop' in React lingo.

Let's take a look now at the Child Component. It serves two purposes: 1) to render the props data that it gets from a parent component, and 2) to add the ability for a user to click on it and have it toggle a strikethrough, indicating that the item is 'complete'.
import React, { Component } from 'react';
```js
class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }



handleClick = () => {
this.setState({ clicked: !this.state.clicked });
};

render() {
const styles = this.state.clicked ? { textDecoration: 'line-through'} : { textDecoration: 'none' };
return (
<div style={styles} onClick={this.handleClick}>{this.props.thing}</div>
);
}
}

```

export default ChildComponent;
The overall structure of the child component is nothing we haven't seen. It's just another class component with its own state object and a method called handleClick.

A component accesses its props via the this.props object. Any prop a parent component passes down to a child component is accessible inside the child component's this.prop object.

So our child component keeps its own state that tracks whether the component has been clicked or not. Then at the top of the render function, it uses a ternary condition to determine whether the div tag that is being rendered should have a strikethrough or not. The handleClick method is then invoked via an onClick handler on the div tag; it does the work of toggling the this.state.clicked boolean.

The overall structure of React applications can be represented as a hierarchical tree structure, just like how the DOM itself is structure. There is an overarching root component at the top of the hierarchy that every other component sits underneath. Specifying that a component should be a child of some parent component is as simple as throwing it in the parent component's render function, just like how we did it in this example.
```
