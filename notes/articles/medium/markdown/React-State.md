React State
===========

Demystified

------------------------------------------------------------------------

### React State

#### Demystified

### Here’s a gist containing most of the below react components:

<a href="https://gist.github.com/bgoonz/216025f38eed1dd451df356e4085fa5a" class="markup--anchor markup--p-anchor">https://gist.github.com/bgoonz/216025f38eed1dd451df356e4085fa5a</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*IzkDVQXDDiVofRlH.gif" class="graf-image" /></figure>### React Class Components

**Class Components**

-   <span id="3d48">You can write React components using ES2015 Classes:  
    **Function Component**</span>

<a href="https://gist.github.com/bgoonz/8223ee9f84bbc0fe7ad504efb3dc860d" class="markup--anchor markup--p-anchor">https://gist.github.com/bgoonz/8223ee9f84bbc0fe7ad504efb3dc860d</a>

**ES2015 Version**

    // ./src/Message.js

    import React from "react";

    class Message extends React.Component {
      render() {
        return <div>{this.props.text}</div>;
      }
    }

    export default Message;

-   <span id="59c4">We can access props within a `class component` by using `this.props`</span>
-   <span id="5e06">Keep in mind Class Components are used just like function components.</span>

<!-- -->

    // ./src/index.js

    import React from "react";
    import ReactDOM from "react-dom";
    import Message from "./Message";

    ReactDOM.render(
      <React.StrictMode>
        <Message text="Hello world!" />
      </React.StrictMode>,
      document.getElementById("root")
    );

**Setting and accessing props**

    class Message extends React.Component {
      constructor(props) {
        super(props);

        // TODO Initialize state, etc.
      }

      render() {
        return <div>{this.props.text}</div>;
      }
    }

-   <span id="7853">If we define a constructor method in our Class Component, we have to define the `super` method with `props` passed through it.</span>
-   <span id="058c">Side Note: Before React used ES2015 Classes, it used `React.createclass` function, if you ever need to use this antiquated method make sure you install a module called `create-react-class`</span>

**Stateful components**

-   <span id="1ecc">One of the major reasons why you would choose to use a **Class Component** over a Function Component is to add and manage local or internal state to your component.</span>
-   <span id="c4cd">Second of the major reasons is to be able to use a Class Component’s lifecycle methods.</span>

**What is state?**

-   <span id="2b2a">Props are data that are provided by the consumer or caller of the component.</span>
-   <span id="d150">Not meant to be changed by a component.</span>
-   <span id="2316">State is data that is `internal` to the component.</span>
-   <span id="cea0">Intended to be updated or mutated.</span>

**When to use state**

-   <span id="0936">*Only Use State when it is absolutely necessary*</span>
-   <span id="2052">If the data never changes, or if it’s needed through an entire application use props instead.</span>
-   <span id="04ff">State is more often used when creating components that retrieve data from APIs or render forms.</span>
-   <span id="5a9f">**The general rule of thumb**: If a component doesn’t need to use state or Lifecyle methods, it should be prioritized as a `function component`.</span>
-   <span id="412f">Functional:Stateless || Class:Stateful</span>

**Initializing state**

-   <span id="5783">Use a class constructor method to initialize `this.state` object.</span>

#### Application Entry Point

    // ./src/index.js
    import React from 'react'
    import ReactDOM from 'react-dom';
    import RandomQuote from './RandomQuote';

    ReactDOM.render(
      <React.StrictMode>
        <RandomQuote />
      </React.StrictMode>
      document.getElementById('root');
    )

#### Class Component: RandomQuote

    import React from "react";

    class RandomQuote extends React.Component {
      constructor() {
        super();

        const quotes = [
          "May the Force be with you.",
          "There's no place like home.",
          "I'm the king of the world!",
          "My mama always said life was like a box of chocolates.",
          "I'll be back.",
        ];

        this.state = {
          quotes,
          currentQuoteIndex: this.getRandomInt(quotes.length);
        }
      }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      render() {
        return (
          <div>
            <h2>Random Quote</h2>
            <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
          </div>
        )
      }
    }

    export default RandomQuote;

**Updating State**

-   <span id="e560">Let’s say we want to update our state with a new quote.</span>
-   <span id="ead5">We can set up event listeners in React similarly to how we did them before.</span>
-   <span id="b7c7">&lt;button type=”button” onClick={this.changeQuote}&gt; Change Quote &lt;/button&gt;</span>
-   <span id="270b">`onClick` is the event listener.</span>
-   <span id="10c4">`{this.changeQuote}` is the event handler method.</span>
-   <span id="99e8">Our Class Component File should now look like this with the new additions:</span>

<!-- -->

    import React from "react";

    class RandomQuote extends React.Component {
      constructor() {
        super();

        const quotes = [
          "May the Force be with you.",
          "There's no place like home.",
          "I'm the king of the world!",
          "My mama always said life was like a box of chocolates.",
          "I'll be back.",
        ];

        this.state = {
          quotes,
          currentQuoteIndex: this.getRandomInt(quotes.length);
        }
      }

      changeQuote = () => {
        const newIndex = this.getRandomInt(this.state.quotes.length);

        // Setting the 'new state' of currentQuoteIndex state property
        // to newly generated random index #.
        this.setState({
          currentQuoteIndex: newIndex;
        })
      }

      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      render() {
        return (
          <div>
            <h2>Random Quote</h2>
            <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
            <button type="button" onClick={this.changeQuote}>
              Change Quote
            </button>
          </div>
        )
      }
    }

    export default RandomQuote;

**Don’t modify state directly**

-   <span id="11e2">It is important to `never` modify your state directly!</span>
-   <span id="d085">ALWAYS use `this.setState` method to update state.</span>
-   <span id="38f9">This is because when you only use this.state to re-assign, no re-rendering will occur =&gt; leaving our component out of sync.</span>

**Properly updating state from the previous state**

-   <span id="839d">In our current example, the way we have `changeQuote` set up leaves us with occasionally producing the same index twice in a row.</span>
-   <span id="6f45">One solution is to design a loop but keep in mind that state updates are handled asynchronously in React (your current value is not guaranteed to be the latest)</span>
-   <span id="f71d">A safe method is to pass an anonymous method to `this.setState` (instead of an object literal)</span>

**Previous**

    changeQuote = () => {
        const newIndex = this.getRandomInt(this.state.quotes.length);

        this.setState({
          currentQuoteIndex: newIndex;
        })
      }

**Passing w/ Anon Method**

    changeQuote = () => {
      this.setState((state, props) => {
        const { quotes, currentQuoteIndex } = state;

        let newIndex = -1;

        do {
          newIndex = this.getRandomInt(quote.length);
        } while (newIndex === currentQuoteIndex);

        return {
          currentQuoteIndex: newIndex,
        };
      });
    };

**Providing default values for props**

-   <span id="05dd">In our current example, we pass in a static array of predefined quotes in our constructor.</span>
-   <span id="29a1">The way it is set up right now leaves our list of quotes unchanged after initialization.</span>
-   <span id="733b">We can make quotes more dynamic by replacing our static array with a `props` argument passed into `super`.</span>
-   <span id="8d26">constructor(props) { super(props); }</span>
-   <span id="e22e">We can now move our quotes array to our application entry point and pass it in as a prop.</span>

#### Application Entry Point

    // ./src/index.js
    import React from 'react'
    import ReactDOM from 'react-dom';
    import RandomQuote from './RandomQuote';

    // Re-assign our array here and pass it in as a prop in Render.
    const quotes = [
          "May the Force be with you.",
          "There's no place like home.",
          "I'm the king of the world!",
          "My mama always said life was like a box of chocolates.",
          "I'll be back.",
          "This way I can define more quotes",
        ];

    ReactDOM.render(
      <React.StrictMode>
        <RandomQuote quotes={quotes}/>
      </React.StrictMode>
      document.getElementById('root');
    )

-   <span id="c3f2">One thing to note about this workaround is that the caller of the component *must* set the quotes prop or the component will throw an error =&gt; so use `defaultProps`!</span>

<!-- -->

    // At the bottom of RandomQuote.js...
    RandomQuote.defaultProps = {
      quotes: [
        "May the Force be with you.",
        "There's no place like home.",
        "I'm the king of the world!",
        "My mama always said life was like a box of chocolates.",
        "I'll be back.",
        "This way I can define more quotes",
      ],
    };

-   <span id="8909">A good safety net in case the consumer/caller doesn’t provide a value for the quotes array.</span>
-   <span id="a254">We can even remove it from our index.js now and an error will not be thrown.</span>

### Handling Events

-   <span id="46a0">To add an event listener to an element, just define a method to handle the event and associate that method with the element event you are listening for.  
    **Example**</span>

<!-- -->

    import React from "react";

    class AlertButton extends React.Component {
      showAlert = () => {
        window.alert("Button Clicked!");
      };

      render() {
        return (
          <button type="button" onClick={this.showAlert}>
            Submit
          </button>
        );
      }
    }

-   <span id="c8ad">Note that when referring the handler method in onClick we’re not invoking showAlert simply just passing a reference.</span>

**Preventing default behavior**

-   <span id="0497">HTML Elements in the browser often have a lot of default behavior.</span>
-   <span id="c546">I.E. Clicking on an `<a>` element navigates so a resource denoted by `<href>` property.</span>
-   <span id="7f13">Here is an example of where using `e.preventDefault()` could come in handy.</span>

<!-- -->

    import React from "react";

    class NoDefaultSubmitForm extends React.Component {
      submitForm = (e) => {
        e.preventDefault();
        window.alert("Handling form submission...");
      };

      render() {
        return (
        <form onSubmit={this.submitForm}>
          <button>Submit</button>
        </form>;
        )}
    }

-   <span id="6df2">The button contained within the form will end up refreshing the page before `this.submitForm` method can be completed.</span>
-   <span id="e214">We can stick an `e.preventDefault()` into the actual method to get around this problem.</span>
-   <span id="bafc">`e` : Parameter that references a `Synthetic Event` object type.</span>

**Using** `this` **in event handlers**

    // ./src/AlertButton.js

    import React from "react";

    class AlertButton extends React.Component {
      showAlert = () => {
        window.alert("Button clicked!");
        console.log(this);
      };

      render() {
        return (
          <button type="button" onClick={this.showAlert}>
            Click Me
          </button>
        );
      }
    }

    export default AlertButton;

-   <span id="159a">When we console log `this` we see the AlertButton object.</span>
-   <span id="9158">If we were to write the showAlert method with a regular class method like:</span>

<!-- -->

    showAlert() {
      console.log(this);
    }

-   <span id="13af">We would get `undefined` =&gt; remember that fat arrow binds to the current context!</span>

**Reviewing class methods and the** `this` **keyword**

> Binding:

    class Girlfriend {
      constructor() {
        this.name = "JavaScript";
      }

      displayName() {
        console.log(this.name);
      }
    }

    const Ming = new Girlfriend();
    Ming.displayName(); // => Javascript

    const displayAgain = Ming.displayName;
    displayAgain(); // => Result in a Type Error: Cannot read property 'name' of undefined.

-   <span id="f44c">The first time we use our `displayMethod` call, it is called directly on the instance of the boyfriend class, which is why `Javascript` was printed out.</span>
-   <span id="5ab3">The second time it was called, the ref of the method is stored as a variable and method is called on that variable instead of the instance; resulting in a type error (it has lost it’s context)</span>
-   <span id="f151">Remember we can use the `bind` method to rebind context!</span>
-   <span id="a90b">We can refactor to get the second call working like this:</span>

<!-- -->

    const displayAgain = Ming.displayName.bind(Ming); displayAgain(); => //Now Javascript will be printed out.

-   <span id="9b5c">To continue using function declarations vs fat arrow we can assign context in a constructor within a class component.</span>

<!-- -->

    import React from "react";

    class AlertButton extends React.Component {
      constructor() {
        super();
        this.showAlert = this.showAlert.bind(this); // binding context
      }

      showAlert() {
        console.log(this);
      }

      render() {
        return (
          <button type="button" onClick={this.showAlert}>
            Submit
          </button>
        );
      }
    }

    export default AlertButton;

-   <span id="e397">`Experimental Syntax` : Syntax that has been proposed to add to ECMAScript but hasn't officially been added to the language specification yet.</span>
-   <span id="eb35">It’s good to pick one approach and use it consistently, either:</span>

1.  <span id="e7c9">Class Properties & Arrow Functions</span>
2.  <span id="f447">Bind Method & This Keyword</span>

**The** `SyntheticEvent` **object**

-   <span id="d26e">**Synthetic Event Objects**: Cross Browser wrappers around the browser’s native event.</span>
-   <span id="7319">Includes the use of stopPropagation() and preventDefault();</span>
-   <span id="1d15">Attributes of the Synthetic Event Object:</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*OVA083oP8HKuRPyA-Ebpig.png" alt="Attributesboolean bubblesboolean cancelableDOMEventTarget currentTargetboolean defaultPreventednumber eventPhaseboolean isTrustedDOMEvent nativeEventvoid preventDefault()boolean isDefaultPrevented()void stopPropagation()boolean isPropagationStopped()void persist()DOMEventTarget targetnumber timeStampstring type" class="graf-image" /><figcaption>Attributesboolean bubblesboolean cancelableDOMEventTarget currentTargetboolean defaultPreventednumber eventPhaseboolean isTrustedDOMEvent nativeEventvoid preventDefault()boolean isDefaultPrevented()void stopPropagation()boolean isPropagationStopped()void persist()DOMEventTarget targetnumber timeStampstring type</figcaption></figure>-   <span id="42b5">`nativeEvent` : property defined in a synthetic event object that gives you access to the underlying native browser event (rarely used!)</span>

### Forms in React

*Exercise being done in a separate file*

**Random Notes**

-   <span id="f551">`onChange` : detects when a value of an input element changes.</span>
-   <span id="a180">Assigning `onChange` to our input fields makes our component's state update in real time during user input.</span>
-   <span id="6814">Don’t forget to add `preventDefault` onto form submissions to deal with the default behavior of the browser refreshing the page!</span>
-   <span id="830f">`submittedOn: new Date(),` Can be added to a form, most likely will persist into a DB.</span>

#### **Controlled Components**

-   <span id="2228">We use the `onChange` event handlers on form fields to keep our component's state as the `"one source of truth"`</span>
-   <span id="44e7">Adding an `onChange` event handler to every single input can massively bloat your code.</span>
-   <span id="056c">Try assigning it to it’s own method to apply everywhere.</span>
-   <span id="9137">`textarea` is handled differently in react: it takes in a value property to handle what the inner text will be.</span>

<!-- -->

-   <span id="39ee">We can use validation libraries like `validate` to make our validation functions more complex.</span>

<!-- -->

    import isEmail from "validator/es/lib/isEmail";

      validate(name, email) {
        const validationErrors = [];

        if (!name) {
          validationErrors.push("Please provide a Name");
        }

        if (!email) {
          validationErrors.push("Please provide an Email");
        } else if (!isEmail(email)) {
          validationErrors.push("Please provide a valid Email");
        }

        return validationErrors;
      }

**Note About Client-side vs server-side validation**

-   <span id="588f">Server-side validation is not optional.</span>
-   <span id="e35c">Tech-savvy users can manipulate client-side validations.</span>
-   <span id="03da">Sometimes the ‘best approach’ is to skip implementing validations on the client-side and rely completely on the server-side validation.</span>

### Component Lifecycle

<figure><img src="https://cdn-images-1.medium.com/max/800/0*6kzLSSpEJ8ypPSCM.png" class="graf-image" /></figure>-   <span id="6e9c">Component Lifecycle is simply a way of describing the key moments in the lifetime of a component.</span>

1.  <span id="5e9c">Loading (Mounting)</span>
2.  <span id="6930">Updating</span>
3.  <span id="1ec1">Unloading (Unmounting)</span>

**The lifecycle of a React component**

-   <span id="b8ed">Each `Class Component` has several `lifecycle methods` that you can add to run code at specific times.</span>
-   <span id="f58a">`componentDidMount` : Method called after your component has been added to the component tree.</span>
-   <span id="adb3">`componentDidUpdate` : Method called after your component has been updated.</span>
-   <span id="d198">`componentWillUnmount` : Method called just before your component is removed from the component tree.</span>

#### `Mounting`

1.  <span id="4ebf">`constructor` method is called</span>
2.  <span id="59d0">`render` method is called</span>
3.  <span id="7557">React updates the `DOM`</span>
4.  <span id="6049">`componentDidMount` is called</span>

#### `Updating`

-   <span id="5493">When component receives new `props`</span>

1.  <span id="3eb5">`render` method is called</span>
2.  <span id="3c59">React updates the `DOM`</span>
3.  <span id="e4de">`componentDidUpdate` is called</span>

<span class="graf-dropCap">W</span>hen `setState` is called:

1.  <span id="6782">`render` method is called</span>
2.  <span id="7d8c">React updates the `DOM`</span>
3.  <span id="74b7">`componentDidUpdate` is called</span>

#### `Unmounting`

-   <span id="3885">The moment before a class component is removed from the component tree:</span>
-   <span id="b1e8">`componentDidMount` will be called.</span>

**Avoiding the legacy lifecycle methods**

-   <span id="732f">Occasionally you will encounter some deprecated lifecycle methods:</span>
-   <span id="fb04">UNSAFE\_componentWillMount</span>
-   <span id="5f6e">UNSAFE\_componentWillReceiveProps</span>
-   <span id="b7aa">UNSAFE\_componentWillUpdate</span>
-   <span id="6277">Just know they will be removed soon from React’s API…☮️</span>

------------------------------------------------------------------------

### React Docs:

<a href="https://gist.github.com/bgoonz/690d80b4f8ac5d359274d98cae87366a" class="markup--anchor markup--p-anchor">https://gist.github.com/bgoonz/216025f38eed1dd451df356e4085fa5a</a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/d8e0fc340714).

<a href="https://medium.com/@bryanguner/react-state-d8e0fc340714" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
