Super Simple Intro To React
===========================

This is a basic introduction for those who feel overwhelmed by the vast microcosm that is the React ecosystem!

------------------------------------------------------------------------

### Super Simple Intro To React

#### This is a basic introduction for those who feel overwhelmed by the vast microcosm that is the React ecosystem!

<figure><img src="https://cdn-images-1.medium.com/max/800/0*3wl1cp6IklxaFuBi.gif" class="graf-image" /></figure>### Here’s a sandbox for you to practice with:

<a href="https://codesandbox.io/s/intro-to-react-i72er" class="markup--anchor markup--p-anchor">https://codesandbox.io/s/intro-to-react-i72er</a>

<a href="https://codesandbox.io/s/intro-to-react-i72er" class="markup--anchor markup--p-anchor">https://codesandbox.io/s/intro-to-react-i72er</a>

### Introduction to React

-   <span id="714e">Simply a nice library that turns data into DOM.</span>
-   <span id="dffd">`Tree Diffing` : Fast comparison and patching of data by comparing the current virtual DOM and new virtual DOM - updating only the pieces that change.</span>
-   <span id="d53b">`It's just a tree with some fancy diffing`</span>

### Create Element

**From JavaScript To DOM**

-   <span id="9d7c">The `React.createElement` function has the following form:</span>

<!-- -->

    React.createElement(type, [props], [...children]);

-   <span id="44e8">`Type` : Type of element to create, i.e. a string for an HTML element or a reference to a function or class that is a React component.</span>
-   <span id="7359">`Props` : Object that contains data to render the element.</span>
-   <span id="5990">`Children` : Children of the element, as many as you want.</span>

**Creating elements**

-   <span id="03dd">Our rendering goal:</span>

<!-- -->

    <ul>
      <li class="selected">
        <a href="/pets">Pets</a>
      </li>
      <li>
        <a href="/owners">Owners</a>
      </li>
    </ul>

-   <span id="57a5">There are five tags to create:</span>
-   <span id="9d1c">One `ul`</span>
-   <span id="30d1">Two `li`</span>
-   <span id="dd2d">Two `a`</span>

> There are certain attributes we want to appear in the DOM for these tags as well:

-   <span id="1bce">Each `li` has a `class` (or `className` in React)</span>
-   <span id="19af">Both `a` ele's have `href` attributes</span>
-   <span id="5dfe">Also keep in mind the parent child relationships happening between the tags.</span>
-   <span id="cb9e">`ul` is the parent of both `li`</span>
-   <span id="7a63">Each `li` has an `a` element as a child</span>
-   <span id="c0be">Each `a` has a `text content` child</span>

<!-- -->

    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { className: "selected" },
        React.createElement("a", { href: "/pets" }, "Pets")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "/owners" }, "Owners")
      )
    );

**Converting to virtual DOM**

-   <span id="9df1">After you set up your `React.createElement`, you use `React.render` to take the value returned from cE and a DOM node to insert into the conversion of the real DOM.</span>

<!-- -->

    // Put the element tree in a variable
    const navList = React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { className: "selected" },
        React.createElement("a", { href: "/pets" }, "Pets")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "/owners" }, "Owners")
      )
    );

    // Get a DOM node for React to render to
    const mainElement = document.querySelector("main");

    // Give React the element tree and the target
    ReactDOM.render(navList, mainElement);

> JS Code =&gt; Virtual DOM =&gt; Real Dom

**Updates**

-   <span id="8e8f">If you call React.render a second or multiple times it just checks the existing Virtual DOM and it knows which smaller areas to change.</span>

**Thinking in Components**

-   <span id="fb8f">Components are pieces of reusable front-end pieces.</span>
-   <span id="1f67">Components should be Single Responsibility Principle compliant.</span>

### Create Element

`React.createElement Demo`

-   <span id="3f55">Can import non-local dependencies with `import 'package-link'`</span>

<!-- -->

    const App = () => React.createElement("h1", null, "Hello, Programmers!");

    const target = document.querySelector("main");
    const app = React.createElement(App, null);
    // Give React the element tree and the target
    ReactDOM.render(app, target);

-   <span id="74b4">Remember when importing modules from other files you have to denote the file type in the import statement.</span>

**HTML Original**

    <section class="clue">
      <h1 class="clue__title">Clue$ 268530</h1>
      <div class="clue__question">
          2009: I dreamed a Dream
      </div>
      <div class="clue__category">
          <<unparsed>>
      </div>
      <div class="clue__amount">
          $800
      </div>
    </section>

**React Version**

    const Clue = () =>
      React.createElement(
        "section",
        { className: "clue" },
        React.createElement("h1", { className: "clue__title" }, "Title"),
        React.createElement("div", { className: "clue__question" }, "?"),
        React.createElement("div", { className: "clue__category" }, "Category"),
        React.createElement("div", { className: "clue__amount" }, "$800")
      );

-   <span id="9fe5">Because `class` is a reserved keyword in JS, in React we can use `className` to assign a class to an element.</span>
-   <span id="9cb2">Remember the data that goes into createElement: element type, data to pass into the element, and then children.</span>
-   <span id="0021">`props` : Properties;</span>
-   <span id="bf4e">To handle certain values that are initially undefined, we can use `defaultProps`.</span>

<!-- -->

    Clue.defaultProps = {
      category: {},
    };

-   <span id="6dcb">You can change in the devTools Network tab the internet speed to check for values that may be undefined to hangle with defaultProps.</span>
-   <span id="5608">If we fetch multiple pieces of data, we can render many things by using `map`.</span>
-   <span id="3ad4">You need to assign a unique key to each of the clues.</span>
-   <span id="8b0d">We need to keep track of them individually so that React can easily refer to a specific one if there is an issue.  
    `clue => { key:clue.id, ...clue }`</span>

<!-- -->

    const App = (props) =>
      React.createElement(
        "h1",
        null,
        props.clues.map((clue) =>
          React.createElement(Clue, { key: clue.id, ...clue })
        )
      );

    export default App;

-   <span id="0eb5">Note: JSX is preferred over React.createElement;</span>

### Notes from Hello Programmer Exercise

-   <span id="6f06">When you import modules from websites they must have CORs activated.</span>
-   <span id="5934">These import statements, import `global variables`.</span>
-   <span id="905d">When we want to move our code into production we need to change the imports into the production minified versions.</span>

<!-- -->

    import "https://unpkg.com/react@16/umd/react.production.min.js";
    import "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js";

-   <span id="33ca">While we will never actually be creating full apps with just React.createElement =&gt; it is the enginer that is running under the hood!</span>

<!-- -->

    import "https://unpkg.com/react@16/umd/react.development.js";
    import "https://unpkg.com/react-dom@16/umd/react-dom.development.js";

    const Links = () =>
      React.createElement(
        "ul",
        { id: "nav-links" },
        React.createElement(
          "li",
          { className: "is-selected" },
          React.createElement("a", { href: "https://bgoonz-blog.netlify.app/" }, "BgoonzBlog2.0")
        ),
        React.createElement(
          "li",
          null,
          React.createElement("a", { href: "https://github.com/bgoonz/" }, "Github")
        )
      );

    // Set up React Element: Type, Imported Data, Child (Child is Text in this Scenario)
    // HelloWorld is a function based component
    const HelloWorld = () => React.createElement("h1", null, "Hello, Programmers");

    const AllTogether = () =>
      React.createElement(
        "div",
        null,
        React.createElement(HelloWorld, null),
        React.createElement(Links, null)
      );

    // Target the Element to append new Ele
    const target = document.querySelector("main");

    // Assign your 'App' to your created Elements
    // We are creating an element from the HelloWorld function.
    const app = React.createElement(AllTogether, null);

    // Render from the Virtual Dom to the Actual Dom
    ReactDOM.render(app, target);

### Introduction to JSX

-   <span id="f398">`JSX` : Javascript Extension, a new language created by React developers to have an easier way of interacting with the React API.</span>

**How to use JSX**

-   <span id="1e31">We will use `babel` to convert version of modern JS into an older version of JS.  
    **React Create Element**</span>

<!-- -->

    const ExampleComponent = (props) =>
      React.createElement(
        React.Fragment,
        null,
        React.createElement("h1", null, "Hello!"),
        React.createElement("img", { src: "https://via.placeholder.com/150" }),
        React.createElement("a", { href: props.searchUrl }, props.searchText)
      );

**JSX Version**

    const ExampleComponent = (props) => (
      <React.Fragment>
        <h1>Hello!</h1>
        <img src="https://via.placeholder.com/150" />
        <a href={props.searchUrl}>{props.searchText}</a>
      </React.Fragment>
    );

-   <span id="e8e0">Keep in mind that self closing tags in React must have a `forward slash` to close it.</span>

### **Properties and Data**

    <img src="https://via.placeholder.com/150" />;
    // becomes..
    React.createElement("img", { src: "https://via.placeholder.com/150" });
    // if we want to pass in data vs just a string literal
    <a href={props.searchUrl}>{props.searchText}</a>;
    // so it becomes..
    React.createElement("a", { href: props.searchUrl }, props.searchText);
    // if you want the text search uppercase..
    <a href={props.searchUrl}>{props.searchText.toUpperCase()}</a>;

-   <span id="8780">Comments in JSX have the following syntax:</span>

<!-- -->

    <div>
      <h2>This is JSX</h2>
      {/* This is a comment in JSX */}
    </div>

#### `Property Names`:

-   <span id="fcde">`checked` : Attribute of input components such as checkbox or radio, use it to set whether the component is checked or not.</span>
-   <span id="ae4c">`className` : Used to specify a CSS class.</span>
-   <span id="2d7b">`dangerouslySetInnerHTML` : React's equivalent of innerHTML because it is risky to cross-site scripting attacks.</span>
-   <span id="5f13">`htmlFor` : Because `for` is protected keyword, React elements use this instead.</span>
-   <span id="5880">`onChange` : Event fired whenever a form field is changed.</span>
-   <span id="fb2b">`style` : Accepts a JS object with camelCase properties rather than a CSS string.</span>
-   <span id="8f1c">`value` : Supported by Input, Select, and TextArea components; use it to set the value of the component.</span>

> ***Note: React uses camel-case!!!***

#### **The JSX semicolon gotcha**

-   <span id="3d60">We wrap what want to return in parenthesis so JS doesn’t auto add semi-colons after every line and run the code incorrectly.</span>

<!-- -->

    function App() {
      return (
        <div>
          <h1>Hello!</h1>
          <div>Welcome to JSX.</div>
        </div>
      );
    }

#### **create Element equivalent**

    is equivalent to

    function App() {
      return (
        React.createElement(
          'div',
          null,
          React.createElement('h1', null, 'Hello!'),
          React.createElement('div', null, 'Welcome to JSX.'),
        )
      );
    }

-   <span id="6898">Just remember if you decided to use the return keyword in a function to ‘return some JSX’, then make sure you wrap the JSX in parenthesis.</span>

------------------------------------------------------------------------

`npx create-react-app my-app`

-   <span id="a3ca">Single line used to initiate a React application.</span>
-   <span id="61c5">React has a great toolchain where you can see changes live as you’re editing your application.</span>
-   <span id="4889">React errors will be rendered directly onto the browser window.</span>
-   <span id="f917">A downside is that it installs a lot of bloat files.</span>
-   <span id="bdd9">Examples of React create Element and JSX equivalent</span>

<!-- -->

    React.createElement(
      "a",
      {
        className: "active",
        href: "https://github.com/bgoonz/",
      },
      "Github"
    );
    // JSX Version
    <a className="active" href="https://github.com/bgoonz/">
      Github
    </a>;

    React.createElement(
      OwnerDetails,
      {
        owner: props.data.owner,
        number: props.index + 1,
      },
      props.name
    );
    // JSX Version
    <OwnerDetails owner={props.data.owner} number={props.index + 1}>
      {props.name}
    </OwnerDetails>;

**More Complex JSX Example**

    const BookPanel = (props) => {
      <section className="book" id={`book-${props.id}`}>
        <h1 className="book__title">{props.title}</h1>
        <img src={props.coverUrl} />
        <div className="book__desc">{props.description}</div>
      </section>;
    };

### My Blog:

<a href="https://master--bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://master--bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>master--bgoonz-blog.netlify.app</a><a href="https://master--bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Here are the React Docs In One Markdown File:

<a href="https://gist.github.com/bgoonz/690d80b4f8ac5d359274d98cae87366a" class="markup--anchor markup--p-anchor">https://gist.github.com/bgoonz/690d80b4f8ac5d359274d98cae87366a</a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/5c78e4207b7f).

<a href="https://medium.com/@bryanguner/super-simple-intro-to-react-5c78e4207b7f" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
