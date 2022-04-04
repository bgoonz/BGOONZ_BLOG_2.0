---
cover: ../.gitbook/assets/react.jpg
coverY: -0.9904458598726115
---

# React Cheat Sheet

<details>
  
<summary>Table Of Contents</summary>
  
- [React Cheat Sheet](#react-cheat-sheet )
- [General React Resources](#general-react-resources )
  - [React Resources:](#react-resources ) - [> JavaScript Library for building User Interfaces](#-javascript-library-for-building-user-interfaces )
    - [**React General Resources**](#react-general-resources )
    - [**React Community**](#react-community )
    - [**React Online Playgrounds**](#react-online-playgrounds )
    - [**React Tutorials**](#react-tutorials )
    - [**React General Tutorials**](#react-general-tutorials )
    - [**React Hooks**](#react-hooks )
    - [**React and TypeScript**](#react-and-typescript )
    - [**React Performance**](#react-performance )
    - [**React Internals**](#react-internals )
    - [**React Interview Questions**](#react-interview-questions )
    - [**React Tools**](#react-tools )
    - [**React Development Tools**](#react-development-tools )
    - [**React Starter Kits and Toolchains**](#react-starter-kits-and-toolchains )
    - [**React Frameworks**](#react-frameworks )
    - [**React Styling**](#react-styling )
    - [**React Routing**](#react-routing )
    - [**React Component Libraries**](#react-component-libraries )
    - [**React Awesome Components**](#react-awesome-components )
    - [**React Testing**](#react-testing )
    - [**React Libraries**](#react-libraries )
    - [**React Integration**](#react-integration )
    - [**React State Management**](#react-state-management )
    - [**React AR and VR**](#react-ar-and-vr )
    - [**React Renderers**](#react-renderers )
    - [**React Forms**](#react-forms )
    - [**React Autocomplete**](#react-autocomplete )
    - [**React Graphics**](#react-graphics )
    - [**React Data Managing**](#react-data-managing )
    - [**React Maps**](#react-maps )
    - [**React Charts**](#react-charts )
    - [React Native](#react-native )
      - [**React Native General Resources**](#react-native-general-resources )
      - [**React Native Tutorials**](#react-native-tutorials )
      - [**React Native Development Tools**](#react-native-development-tools )
      - [**React Native Sample Apps**](#react-native-sample-apps )
      - [**React Native Boilerplates**](#react-native-boilerplates )
      - [**React Native Awesome Components**](#react-native-awesome-components )
      - [**React Native Libraries**](#react-native-libraries )
    - [Redux](#redux )
      - [**Redux Tools**](#redux-tools )
      - [**Redux Tutorials**](#redux-tutorials )
  - [Data-Driven React Applications](#data-driven-react-applications )
    - [Videos](#videos )
      - [**Reactjsvideos.com**](#reactjsvideoscom )
    - [Demo React Apps](#demo-react-apps )
    - [Real React Apps](#real-react-apps )
  - [**Hello World**](#hello-world )
  - [The smallest React example looks like this:](#the-smallest-react-example-looks-like-this )
  - [<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/bgoonz/pen/wveBJBM"></iframe>](#iframe-frameborder0-width100-height800px-srchttpscodepeniobgoonzpenwvebjbmiframe )
    - [**Introducing JSX**](#introducing-jsx )
    - [Consider this variable declaration:](#consider-this-variable-declaration )
    - [Why JSX?](#why-jsx )
    - [Embedding Expressions in JSX](#embedding-expressions-in-jsx )
      - [We split JSX over multiple lines for readability. While it isn't required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.](#we-split-jsx-over-multiple-lines-for-readability-while-it-isnt-required-when-doing-this-we-also-recommend-wrapping-it-in-parentheses-to-avoid-the-pitfalls-of-automatic-semicolon-insertion )
    - [JSX is an Expression Too](#jsx-is-an-expression-too )
    - [Specifying Attributes with JSX](#specifying-attributes-with-jsx )
    - [Specifying Children with JSX](#specifying-children-with-jsx )
    - [JSX Prevents Injection Attacks](#jsx-prevents-injection-attacks )
    - [JSX Represents Objects](#jsx-represents-objects )
      - [We will explore rendering React elements to the DOM in the next section.](#we-will-explore-rendering-react-elements-to-the-dom-in-the-next-section )
    - [**Rendering Elements**](#rendering-elements )
    - [Elements are the smallest building blocks of React apps.](#elements-are-the-smallest-building-blocks-of-react-apps )
    - [Rendering an Element into the DOM](#rendering-an-element-into-the-dom )
      - [We call this a "root" DOM node because everything inside it will be managed by React DOM.](#we-call-this-a-root-dom-node-because-everything-inside-it-will-be-managed-by-react-dom )
    - [Updating the Rendered Element](#updating-the-rendered-element )
    - [React Only Updates What's Necessary](#react-only-updates-whats-necessary )
    - [**Components and Props**](#components-and-props )
    - [Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.](#components-let-you-split-the-ui-into-independent-reusable-pieces-and-think-about-each-piece-in-isolation-this-page-provides-an-introduction-to-the-idea-of-components-you-can-find-a-detailed-component-api-reference-here )
    - [Function and Class Components](#function-and-class-components )
    - [Rendering a Component](#rendering-a-component )
      - [For example, this code renders "Hello, Sara" on the page:](#for-example-this-code-renders-hello-sara-on-the-page )
    - [Composing Components](#composing-components )
      - [For example, we can create an `App` component that renders `Welcome` many times:](#for-example-we-can-create-an-app-component-that-renders-welcome-many-times )
    - [Extracting Components](#extracting-components )
      - [For example, consider this `Comment` component:](#for-example-consider-this-comment-component )
      - [We recommend naming props from the component's own point of view rather than the context in which it is being used.](#we-recommend-naming-props-from-the-components-own-point-of-view-rather-than-the-context-in-which-it-is-being-used )
      - [We can now simplify `Comment` a tiny bit:](#we-can-now-simplify-comment-a-tiny-bit )
    - [Props are Read-Only](#props-are-read-only )
    - [**State and Lifecycle**](#state-and-lifecycle )
    - [This page introduces the concept of state and lifecycle in a React component. You can find a detailed component API reference here.](#this-page-introduces-the-concept-of-state-and-lifecycle-in-a-react-component-you-can-find-a-detailed-component-api-reference-here )
      - [We can start by encapsulating how the clock looks:](#we-can-start-by-encapsulating-how-the-clock-looks )
    - [Converting a Function to a Class](#converting-a-function-to-a-class )
    - [Adding Local State to a Class](#adding-local-state-to-a-class )
      - [We will move the `date` from props to state in three steps:](#we-will-move-the-date-from-props-to-state-in-three-steps )
    - [Adding Lifecycle Methods to a Class](#adding-lifecycle-methods-to-a-class )
      - [We want to set up a timer whenever the `Clock` is rendered to the DOM for the first time. This is called "mounting" in React.](#we-want-to-set-up-a-timer-whenever-the-clock-is-rendered-to-the-dom-for-the-first-time-this-is-called-mounting-in-react )
      - [We also want to clear that timer whenever the DOM produced by the `Clock` is removed. This is called "unmounting" in React.](#we-also-want-to-clear-that-timer-whenever-the-dom-produced-by-the-clock-is-removed-this-is-called-unmounting-in-react )
      - [We can declare special methods on the component class to run some code when a component mounts and unmounts:](#we-can-declare-special-methods-on-the-component-class-to-run-some-code-when-a-component-mounts-and-unmounts )
      - [We will tear down the timer in the `componentWillUnmount()` lifecycle method:](#we-will-tear-down-the-timer-in-the-componentwillunmount-lifecycle-method )
    - [Using State Correctly](#using-state-correctly )
    - [Do Not Modify State Directly](#do-not-modify-state-directly )
      - [For example, this will not re-render a component:](#for-example-this-will-not-re-render-a-component )
      - [Instead, use `setState()`:](#instead-use-setstate )
    - [State Updates May Be Asynchronous](#state-updates-may-be-asynchronous )
      - [For example, this code may fail to update the counter:](#for-example-this-code-may-fail-to-update-the-counter )
    - [State Updates are Merged](#state-updates-are-merged )
      - [For example, your state may contain several independent variables:](#for-example-your-state-may-contain-several-independent-variables )
    - [The Data Flows Down](#the-data-flows-down )
    - [**Handling Events**](#handling-events )
    - [Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:](#handling-events-with-react-elements-is-very-similar-to-handling-events-on-dom-elements-there-are-some-syntax-differences )
      - [For example, the HTML:](#for-example-the-html )
      - [In React, this could instead be:](#in-react-this-could-instead-be )
    - [Passing Arguments to Event Handlers](#passing-arguments-to-event-handlers )
    - [**Conditional Rendering**](#conditional-rendering )
    - [In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.](#in-react-you-can-create-distinct-components-that-encapsulate-behavior-you-need-then-you-can-render-only-some-of-them-depending-on-the-state-of-your-application )
      - [We'll create a `Greeting` component that displays either of these components depending on whether a user is logged in:](#well-create-a-greeting-component-that-displays-either-of-these-components-depending-on-whether-a-user-is-logged-in )
    - [Element Variables](#element-variables )
      - [In the example below, we will create a stateful component called `LoginControl`.](#in-the-example-below-we-will-create-a-stateful-component-called-logincontrol )
    - [Inline If with Logical && Operator](#inline-if-with-logical--operator )
    - [Inline If-Else with Conditional Operator](#inline-if-else-with-conditional-operator )
    - [Preventing Component from Rendering](#preventing-component-from-rendering )
    - [**Lists and Keys**](#lists-and-keys )
    - [First, let's review how you transform lists in JavaScript.](#first-lets-review-how-you-transform-lists-in-javascript )
    - [Rendering Multiple Components](#rendering-multiple-components )
    - [Basic List Component](#basic-list-component )
      - [We can refactor the previous example into a component that accepts an array of `numbers` and outputs a list of elements.](#we-can-refactor-the-previous-example-into-a-component-that-accepts-an-array-of-numbers-and-outputs-a-list-of-elements )
    - [Keys](#keys )
    - [Extracting Components with Keys](#extracting-components-with-keys )
      - [For example, if you extract a `ListItem` component, you should keep the key on the `<ListItem />` elements in the array rather than on the `<li>` element in the `ListItem` itself.](#for-example-if-you-extract-a-listitem-component-you-should-keep-the-key-on-the-listitem--elements-in-the-array-rather-than-on-the-li-element-in-the-listitem-itself )
    - [Keys Must Only Be Unique Among Siblings](#keys-must-only-be-unique-among-siblings )
    - [Embedding map() in JSX](#embedding-map-in-jsx )
    - [**Forms**](#forms )
    - [HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. ##### For example, this form in plain HTML accepts a single name:](#html-form-elements-work-a-bit-differently-from-other-dom-elements-in-react-because-form-elements-naturally-keep-some-internal-state--for-example-this-form-in-plain-html-accepts-a-single-name )
    - [Controlled Components](#controlled-components )
      - [We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".](#we-can-combine-the-two-by-making-the-react-state-be-the-single-source-of-truth-then-the-react-component-that-renders-a-form-also-controls-what-happens-in-that-form-on-subsequent-user-input-an-input-form-element-whose-value-is-controlled-by-react-in-this-way-is-called-a-controlled-component )
      - [For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:](#for-example-if-we-want-to-make-the-previous-example-log-the-name-when-it-is-submitted-we-can-write-the-form-as-a-controlled-component )
    - [The textarea Tag](#the-textarea-tag )
      - [In React, a `<textarea>` uses a `value` attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input:](#in-react-a-textarea-uses-a-value-attribute-instead-this-way-a-form-using-a-textarea-can-be-written-very-similarly-to-a-form-that-uses-a-single-line-input )
    - [The select Tag](#the-select-tag )
    - [The file input Tag](#the-file-input-tag )
    - [Handling Multiple Inputs](#handling-multiple-inputs )
      - [For example:](#for-example )
    - [Controlled Input Null Value](#controlled-input-null-value )
    - [Alternatives to Controlled Components](#alternatives-to-controlled-components )
    - [Fully-Fledged Solutions](#fully-fledged-solutions )
    - [**Lifting State Up**](#lifting-state-up )
    - [Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let's see how this works in action.](#often-several-components-need-to-reflect-the-same-changing-data-we-recommend-lifting-the-shared-state-up-to-their-closest-common-ancestor-lets-see-how-this-works-in-action )
      - [We will start with a component called `BoilingVerdict`. It accepts the `celsius` temperature as a prop, and prints whether it is enough to boil the water:](#we-will-start-with-a-component-called-boilingverdict-it-accepts-the-celsius-temperature-as-a-prop-and-prints-whether-it-is-enough-to-boil-the-water )
    - [Adding a Second Input](#adding-a-second-input )
      - [We can start by extracting a `TemperatureInput` component from `Calculator`. We will add a new `scale` prop to it that can either be `"c"` or `"f"`:](#we-can-start-by-extracting-a-temperatureinput-component-from-calculator-we-will-add-a-new-scale-prop-to-it-that-can-either-be-c-or-f )
      - [We can now change the `Calculator` to render two separate temperature inputs:](#we-can-now-change-the-calculator-to-render-two-separate-temperature-inputs )
      - [We have two inputs now, but when you enter the temperature in one of them, the other doesn't update. This contradicts our requirement: we want to keep them in sync.](#we-have-two-inputs-now-but-when-you-enter-the-temperature-in-one-of-them-the-other-doesnt-update-this-contradicts-our-requirement-we-want-to-keep-them-in-sync )
      - [We also can't display the `BoilingVerdict` from `Calculator`. The `Calculator` doesn't know the current temperature because it is hidden inside the `TemperatureInput`.](#we-also-cant-display-the-boilingverdict-from-calculator-the-calculator-doesnt-know-the-current-temperature-because-it-is-hidden-inside-the-temperatureinput )
    - [Writing Conversion Functions](#writing-conversion-functions )
      - [For example, `tryConvert('abc', toCelsius)` returns an empty string, and `tryConvert('10.22', toFahrenheit)` returns `'50.396'`.](#for-example-tryconvertabc-tocelsius-returns-an-empty-string-and-tryconvert1022-tofahrenheit-returns-50396 )
    - [Lifting State Up](#lifting-state-up-1 )
      - [We know that props are read-only. When the `temperature` was in the local state, the `TemperatureInput` could just call `this.setState()` to change it. However, now that the `temperature` is coming from the parent as a prop, the `TemperatureInput` has no control over it.](#we-know-that-props-are-read-only-when-the-temperature-was-in-the-local-state-the-temperatureinput-could-just-call-thissetstate-to-change-it-however-now-that-the-temperature-is-coming-from-the-parent-as-a-prop-the-temperatureinput-has-no-control-over-it )
      - [We will store the current input's `temperature` and `scale` in its local state. This is the state we "lifted up" from the inputs, and it will serve as the "source of truth" for both of them. It is the minimal representation of all the data we need to know in order to render both inputs.](#we-will-store-the-current-inputs-temperature-and-scale-in-its-local-state-this-is-the-state-we-lifted-up-from-the-inputs-and-it-will-serve-as-the-source-of-truth-for-both-of-them-it-is-the-minimal-representation-of-all-the-data-we-need-to-know-in-order-to-render-both-inputs )
      - [For example, if we enter 37 into the Celsius input, the state of the `Calculator` component will be:](#for-example-if-we-enter-37-into-the-celsius-input-the-state-of-the-calculator-component-will-be )
      - [We could have stored the value of both inputs but it turns out to be unnecessary. It is enough to store the value of the most recently changed input, and the scale that it represents. We can then infer the value of the other input based on the current `temperature` and `scale` alone.](#we-could-have-stored-the-value-of-both-inputs-but-it-turns-out-to-be-unnecessary-it-is-enough-to-store-the-value-of-the-most-recently-changed-input-and-the-scale-that-it-represents-we-can-then-infer-the-value-of-the-other-input-based-on-the-current-temperature-and-scale-alone )
    - [Lessons Learned](#lessons-learned )
    - [**Composition vs Inheritance**](#composition-vs-inheritance )
    - [React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.](#react-has-a-powerful-composition-model-and-we-recommend-using-composition-instead-of-inheritance-to-reuse-code-between-components )
    - [Containment](#containment )
      - [We recommend that such components use the special `children` prop to pass children elements directly into their output:](#we-recommend-that-such-components-use-the-special-children-prop-to-pass-children-elements-directly-into-their-output )
    - [Specialization](#specialization )
    - [So What About Inheritance?](#so-what-about-inheritance )
    - [**Thinking in React**](#thinking-in-react )
    - [React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.](#react-is-in-our-opinion-the-premier-way-to-build-big-fast-web-apps-with-javascript-it-has-scaled-very-well-for-us-at-facebook-and-instagram )
    - [Start With A Mock](#start-with-a-mock )
    - [Step 1: Break The UI Into A Component Hierarchy](#step-1-break-the-ui-into-a-component-hierarchy )
    - [Step 2: Build A Static Version in React](#step-2-build-a-static-version-in-react )
    - [A Brief Interlude: Props vs State](#a-brief-interlude-props-vs-state )
    - [Step 3: Identify The Minimal (but complete) Representation Of UI State](#step-3-identify-the-minimal-but-complete-representation-of-ui-state )
    - [Step 4: Identify Where Your State Should Live](#step-4-identify-where-your-state-should-live )
    - [Step 5: Add Inverse Data Flow](#step-5-add-inverse-data-flow )
    - [And That's It](#and-thats-it )
  
</details>
  
---
  
#  General React Resources
  
  
##  React Resources:
  
  
<details>
  
#<summary>**React Resources**</summary>
  
##### > JavaScript Library for building User Interfaces
  
#### **React General Resources**
  
- [React Official Website](https://reactjs.org )
- [React Documentation](https://reactjs.org/docs )
- [React GitHub](https://github.com/facebook/react )
  
#### **React Community**
  
- [Reactiflux Discord Channel](http://www.reactiflux.com )
- [React StackOverflow](http://stackoverflow.com/questions/tagged/reactjs )
- [React Twitter](https://twitter.com/reactjs )
  
#### **React Online Playgrounds**
  
- [CodePen](https://reactjs.org/redirect-to-codepen/hello-world )
- [CodeSandbox)\*\*](https://codesandbox.io/s/new )
- [JSFiddle](https://jsfiddle.net/boilerplate/react-jsx )
  **Another Awesome Lists**
- [React/Redux Links](https://github.com/markerikson/react-redux-links )
  
#### **React Tutorials**
  
#### **React General Tutorials**
  
- [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html )
- [Using React in Visual Studio Code)\*\*](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial )
- [Scrimba - Learn React for free interactively](https://scrimba.com/g/glearnreact )
- [FreeCodeCamp React Challenges](https://learn.freecodecamp.org/front-end-libraries/react )
- [React Cheatsheet](https://devhints.io/react )
- [React Patterns](https://reactpatterns.com )
- [Setup Flow with React](https://flow.org/en/docs/react/ )
  
#### **React Hooks**
  
- [React Hooks](https://reactjs.org/docs/hooks-intro.html )
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks )
- [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks )
- [Replacing Redux with React Hooks and Context](https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533 )
- [React Hooks cheat sheet: Unlock solutions to common problems](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/ )
- [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data/ )
- [Easy to understand React Hook recipes](https://usehooks.com )
- [React Hooks Video Tutorial](https://www.youtube.com/playlist?list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM )
  
#### **React and TypeScript**
  
- [TypeScript, React and Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html )
- [JSX in TypeScript](https://www.typescriptlang.org/docs/handbook/jsx.html )
- [Cheatsheets for experienced React developers getting started with TypeScript](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet )
- [React by Example](https://reactbyexample.github.io )
  
#### **React Performance**
  
- [React Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html )
- [Introducing the React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html )
- [Optimizing React: Virtual DOM explained](https://evilmartians.com/chronicles/optimizing-react-virtual-dom-explained )
- [A Definitive Guide to Optimize Major Performance issues in React](https://www.simform.com/react-performance/ )
- [Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3 )
- [Using the React DevTools Profiler to Diagnose React App Performance Issues](https://www.netlify.com/blog/2018/08/29/using-the-react-devtools-profiler-to-diagnose-react-app-performance-issues/ )
- [Top 5 Practices to Boost React Performance](https://www.codementor.io/blizzerand/top-5-practices-to-boost-react-performance-jv6zr89ep )
- [React is Slow, React is Fast: Optimizing react Apps in Practice](https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba )
- [Rendering large lists with react-window](https://addyosmani.com/blog/react-window/ )
  
#### **React Internals**
  
- [Reconciliation](https://reactjs.org/docs/reconciliation.html )
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture )
- [Build your own React](https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5 )
- [Inside Fiber: In-depth overview of the new reconciliation algorithm in React](https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e )
- [Entire React code base explanation by visual block schemes](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS )
  
#### **React Interview Questions**
  
- [13 Essential React Interview Questions](https://www.toptal.com/react/interview-questions )
- [List of React interview Questions and Answers](https://github.com/sudheerj/reactjs-interview-questions )
- [React Coding Challenges](https://github.com/alexgurr/react-coding-challenges/ )
  
#### **React Tools**
  
#### **React Development Tools**
  
- [react-devtools](https://github.com/facebook/react-devtools ) - Inspection of React component hierarchy in the Chrome and Firefox Developer Tools
- [react-hot-loader](https://github.com/gaearon/react-hot-loader ) - Tweak React components in real time
- [react-loadable](https://github.com/jamiebuilds/react-loadable ) - A higher order component for loading components with promises
- [loadable-components](https://github.com/smooth-code/loadable-components ) - React code splitting made easy
- [reactotron](https://github.com/skellock/reactotron ) - A desktop app for inspecting your React and React Native projects
- [storybook](https://github.com/storybookjs/storybook ) - UI component dev & test
- [docz](https://github.com/doczjs/docz ) - Zero Config, live-reloading documentation with Markdown + JSX
- [react-styleguidist](https://github.com/styleguidist/react-styleguidist ) - Isolated React component development environment with a living style guide
- [react-cosmos](https://github.com/react-cosmos/react-cosmos ) - Dev tool for creating reusable React components
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react ) - React specific linting rules for ESLint
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y ) - Static AST checker for a11y rules on JSX elements
- [@axe-core/react](https://github.com/dequelabs/axe-core-npm ) - Accessibility auditing for React applications
- [DataFormsJS JSX Loader](https://github.com/dataformsjs/dataformsjs/blob/master/docs/jsx-loader.md ) - Small JavaScript Compiler for quickly converting JSX to JS directly on a web page
- [Why Did You Render](https://github.com/welldone-software/why-did-you-render ) - Monkey patches React to notify you about avoidable re-renders.
- [Divjoy](https://divjoy.com ) - React codebase and UI generator to speed up development (paid)
- [Plasmic](https://www.plasmic.app ) - Powerful design tool for building your React components visually.
  
#### **React Starter Kits and Toolchains**
  
- [create-react-app](https://github.com/facebook/create-react-app ) - Set up a modern Web app by running one command
- [Razzle](https://razzlejs.org ) - Build production ready React applications. Razzle is toolchain for modern static and dynamic websites and web applications
- [Neutrino React Preset](https://neutrinojs.org/packages/react/ ) - `@neutrinojs/react` is a Neutrino preset that supports building React web applications
- [react-starter-kit](https://github.com/kriasoft/react-starter-kit ) - Isomorphic Web app boilerplate
- [create-react-library](https://github.com/transitive-bullshit/create-react-library ) - CLI for creating reusable, modern React libraries using Rollup and create-react-app.
- [tsdx](https://tsdx.io ) - Zero-config CLI for TypeScript package development
  
#### **React Frameworks**
  
- [next.js](https://github.com/vercel/next.js ) - The React Framework
- [gatsby.js](https://github.com/gatsbyjs/gatsby ) - Free and open source framework based on React
- [react-admin](https://github.com/marmelab/react-admin ) - Frontend Framework for building B2B applications on top of REST/GraphQL APIs
- [remix](https://remix.run ) - Finally, a killer React framework from the creators of React Router
- [Blitz](https://blitzjs.com ) - The Fullstack React Framework
- [aleph.js](https://github.com/alephjs/aleph.js ) - The React Framework in Deno
  
#### **React Styling**
  
- [styled-components](https://github.com/styled-components/styled-components ) - Visual primitives for the component age
- [emotion](https://github.com/emotion-js/emotion ) - Library designed for writing CSS styles with JavaScript
- [radium](https://github.com/FormidableLabs/radium ) - A toolchain for React component styling
- [jss](https://github.com/cssinjs/jss ) - Authoring tool for CSS
- [aphrodite](https://github.com/Khan/aphrodite ) - Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation
  
#### **React Routing**
  
- [react-router](https://github.com/ReactTraining/react-router ) - Declarative routing for React
- [navi](https://github.com/frontarm/navi ) - Declarative, asynchronous routing for React
- [curi](https://github.com/pshrmn/curi ) - JavaScript router for single-page applications
- [reach](https://github.com/reach/router ) - Next Generation Routing for React
- [universal-router](https://github.com/kriasoft/universal-router ) - A simple middleware-style router for isomorphic JavaScript web apps
- [wouter](https://github.com/molefrog/wouter ) - A minimalist-friendly \~1.3KB routing library
  
#### **React Component Libraries**
  
- [material-ui](https://github.com/mui-org/material-ui ) - React components for faster and easier web development
- [blueprint](https://github.com/palantir/blueprint ) - A React-based UI toolkit for the webs
- [Fluent UI](https://github.com/microsoft/fluentui ) - A set of React components for building Microsoft web experiences
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap ) - Bootstrap components built with React
- [reactstrap](https://github.com/reactstrap/reactstrap ) - Simple React Bootstrap 4 components
- [ant-design](https://github.com/ant-design/ant-design ) - A design system with values of Nature and Determinacy
- [chakra-ui](https://github.com/chakra-ui/chakra-ui/ ) - Simple, Modular & Accessible UI Components for your React Applications
- [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React ) - The official Semantic-UI-React integration
- [evergreen](https://github.com/segmentio/evergreen ) - Evergreen React UI Framework by Segment
- [grommet](https://github.com/grommet/grommet ) - A react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package
- [rebass](https://github.com/rebassjs/rebass ) - React primitive UI components built with styled-system
- [reakit](https://github.com/reakit/reakit ) - Accessible, Composable and Customizable components for React
- [rsuite](https://github.com/rsuite/rsuite ) - A suite of React components
- [atlaskit](https://bitbucket.org/atlassian/atlaskit-mk-2 ) - Atlassian's official UI library, built according to the Atlassian Design Guidelines.
- [baseweb](https://github.com/uber/baseweb ) - Base Web is a foundation for initiating, evolving, and unifying web products.
- [primereact](https://github.com/primefaces/primereact ) - A complete UI Framework for React with 50+ components featuring material, bootstrap and custom themes.
- [eui](https://github.com/elastic/eui ) - Elastic UI Framework
- [react-spectrum](https://github.com/adobe/react-spectrum ) - Adobe's collection of libraries and tools that help you build adaptive, accessible, and robust user experiences
- [ring-ui](https://github.com/JetBrains/ring-ui ) - JetBrains Web UI components
- [react-bulma-components](https://github.com/couds/react-bulma-components ) - React components for Bulma framework
- [react-bulma](https://github.com/kulakowka/react-bulma ) - React.js components for Modern CSS framework based on Flexbox
- [trunx](https://github.com/fibo/trunx ) - Super Saiyan React components, son of awesome Bulma, implemented in TypeScript
- [bumbag-ui](https://github.com/bumbag/bumbag-ui ) - Build accessible & themeable React applications with your Bumbag
  
#### **React Awesome Components**
  
- [Awesome React Components list](https://github.com/brillout/awesome-react-components )
- [react-select](https://github.com/JedWatson/react-select ) - The Select Component for React
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd ) - Beautiful and accessible drag and drop for lists with React
- [react-dnd](https://github.com/react-dnd/react-dnd ) - Drag and Drop for React
- [react-grid-layout](https://github.com/strml/react-grid-layout ) - A draggable and resizable grid layout with responsive breakpoints
- [react-table](https://github.com/tannerlinsley/react-table/ ) - A lightweight, fast and extendable datagrid for React
- [react-data-grid](https://github.com/adazzle/react-data-grid ) - Excel-like grid component built with React
- [react-draggable](https://github.com/mzabriskie/react-draggable ) - React draggable component
- [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable ) - A resizable and draggable component for React
- [react-resizable](https://github.com/strml/react-resizable ) - A simple React component that is resizable with a handle
- [react-resizable-box](https://github.com/bokuweb/react-resizable-box ) - A resizable component for React
- [react-searchbox-awesome](https://github.com/axmz/react-searchbox-awesome ) - Minimalistic searchbox
- [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane ) - A sortable and resizable pane component for React
- [react-spaces](https://github.com/aeagle/react-spaces ) - Nestable resizable, anchored, scrollable components
- [react-dates](https://github.com/airbnb/react-dates ) - An easily internationalizable, mobile-friendly datepicker library for the web
- [react-big-calendar](https://github.com/intljusticemission/react-big-calendar ) - Calendar component
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker/ ) - ReactJS Datepicker
- [react-list](https://github.com/orgsync/react-list ) - A versatile infinite scroll React component
- [react-intl](https://github.com/yahoo/react-intl ) - Internationalize React apps
- [react-i18next](https://github.com/i18next/react-i18next ) - Internationalization for React done right
- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal ) - A fully accessible React modal
- [react-hotkeys](https://github.com/greena13/react-hotkeys ) - Declarative hotkey and focus area management for React
- [react-keydown](https://github.com/glortho/react-keydown ) - Lightweight keydown wrapper for React components
- [react-joyride](https://github.com/gilbarbara/react-joyride ) - Create guided tours for your apps
- [react-virtualized](https://github.com/bvaughn/react-virtualized ) - React components for efficiently rendering large lists and tabular data
- [react-window](https://github.com/bvaughn/react-window ) - React components for efficiently rendering large lists and tabular data
- [react-text-mask](https://github.com/text-mask/text-mask ) - Input mask for React
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton ) - Create skeleton screens that automatically adapt to your app
- [react-spinkit](https://github.com/KyleAMathews/react-spinkit ) - A collection of loading indicators animated with CSS for React
- [rheostat](https://github.com/airbnb/rheostat ) - Accessible slider component built with React
- [qrcode.react](https://github.com/zpao/qrcode.react ) - QR component for use with React
- [react-archer](https://github.com/pierpo/react-archer ) - Draw arrows between React elements
- [react-pdf-viewer](https://github.com/phuoc-ng/react-pdf-viewer ) - A PDF viewer made for React
- [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt ) - Easily apply tilt hover effect on React components
- [react-popper](https://github.com/popperjs/react-popper ) - Position tooltips and popovers in an elegant, performant manner
- [react-tsparticles](https://github.com/matteobruni/tsparticles ) - Easily create highly customizable particles animations
- [react-spring](https://github.com/pmndrs/react-spring ) - Spring-physics based animation library for React applications
- [framer-motion](https://github.com/framer/motion ) - A React library to power production-ready animations
- [react-accessible-accordion](https://github.com/springload/react-accessible-accordion ) - React Component for creating an 'Accordion' that adheres to the WAI ARIA spec for accessibility.
- [react-truncate-markup](https://github.com/parsable/react-truncate-markup ) - React component for truncating JSX markup.
- [react-cookie](https://github.com/reactivestack/cookies ) - Universal cookies for React
- [react-slick](https://github.com/akiran/react-slick ) - Carousel component built with React
- [react-gtm-module](https://github.com/alinemorelli/react-gtm ) - Google Tag Manager Module for React
- [react-device-detect](https://github.com/duskload/react-device-detect ) - Detect device for React
- [react-colorful](https://github.com/omgovich/react-colorful ) - A tiny (2,5 KB), dependency-free, fast and accessible color picker component
- [react-modal](https://github.com/reactjs/react-modal ) - Accessible modal dialog component for React
- [cleave.js](https://github.com/nosir/cleave.js ) - Format input text content when you are typing
- [react-fontawesome](https://github.com/FortAwesome/react-fontawesome ) - Font Awesome 5 React component
  
#### **React Testing**
  
- [jest](https://github.com/facebook/jest ) - Delightful JavaScript Testing Framework
- [enzyme](https://github.com/airbnb/enzyme ) - JavaScript Testing utilities for React
- [react-testing-library](https://github.com/testing-library/react-testing-library ) - Simple and complete React DOM testing utilities
- [react-hooks-testing-library](https://github.com/mpeyper/react-hooks-testing-library ) - React hooks testing utilities that encourage good testing practices
- [majestic](https://github.com/Raathigesh/majestic ) - Zero config GUI for Jest
  
#### **React Libraries**
  
- [react-border-wrapper](https://github.com/Metroxe/react-border-wrapper ) - A wrapper for placing elements along div borders in React.
- [react-magic](https://github.com/reactjs/react-magic ) - Automatically AJAXify plain HTML with the power of React
- [react-toolbox](https://github.com/react-toolbox/react-toolbox ) - A set of React components implementing Google's Material Design specification
- [tcomb-react](https://github.com/gcanti/tcomb-react ) - Library allowing you to check all the props of your React components
- [react-responsive](https://github.com/wearefractal/react-responsive ) - Media queries in react for responsive design
- [preact](https://git.io/preact ) - Fast 3kb React alternative with the same ES6 API.
- [riotjs](https://github.com/muut/riotjs ) - A React-like, 3.5KB user interface library
- [Maple.js](https://github.com/Wildhoney/Maple.js ) - Bringing the concept of web-components to React
- [react-i13n](https://github.com/yahoo/react-i13n ) - A performant, scalable and pluggable approach to instrumenting your React application
- [react-icons](https://github.com/gorangajic/react-icons ) - svg react icons of popular icon packs
- [react-open-doodles](https://github.com/lunahq/react-open-doodles ) - Awesome free illustrations as react components.
- [Keo](https://github.com/Wildhoney/Keo ) - Plain functions for a more functional Deku approach to creating React components, with functional goodies such as pipe, memoize, etc...
- [Bit](https://github.com/teambit/bit ) - A virtual repository for managing and using react and other web components across applications
- [AtlasKit](https://atlaskit.atlassian.com ) - Atlassian's React UI library
- [ReactiveSearch](https://github.com/appbaseio/reactivesearch ) - UI components library for Elasticsearch
- [Slate](https://github.com/ianstormtaylor/slate ) - A completely customizable framework for building rich text editors.
- [react-json-schema](https://github.com/TechniqueSoftware/react-json-schema ) - Construct React elements from JSON by mapping JSON definitions to React components that you expose.
- [react-lodash](https://github.com/typicode/react-lodash ) - Lodash as React components
- [react-helmet](https://github.com/nfl/react-helmet ) - A document head manager for React
- [react-snap](https://github.com/stereobooster/react-snap ) - Zero-configuration framework-agnostic static prerendering for SPAs
- [Draft.js](https://github.com/facebook/draft-js ) - A React framework for building text editors
- [refract](https://github.com/fanduel-oss/refract ) - Harness the power of reactive programming to supercharge your components
- [react-desktop](https://github.com/gabrielbull/react-desktop ) - OS X and Windows UI components built with React
- [reapop](https://github.com/LouisBarranqueiro/reapop ) - A simple and customizable React notifications system
- [react-extras](https://github.com/sindresorhus/react-extras ) - Useful components and utilities for working with React
- [react-instantsearch](https://github.com/algolia/react-instantsearch ) - Lightning-fast search for React and React Native applications, by Algolia
- [uppy](https://github.com/transloadit/uppy ) - The next open source file uploader for web browsers
- [react-motion](https://github.com/chenglou/react-motion ) - A spring that solves your animation problems
- [react-esi](https://github.com/dunglas/react-esi ) - React Edge Side Includes
- [react-aria](https://react-spectrum.adobe.com/react-aria/index.html ) - Adobe's library of React Hooks that provides accessible UI primitives for your design system
- [react-uploady](https://github.com/rpldy/react-uploady ) - Modern file-upload components & hooks for React.
  
#### **React Integration**
  
- [ReasonReact](https://reasonml.github.io/reason-react/ )
- [React Rails](https://github.com/reactjs/react-rails )
- [ReactJS.NET](https://github.com/reactjs/React.NET )
- [om](https://github.com/swannodette/om ) - ClojureScript interface
- [Reagent](https://github.com/reagent-project/reagent ) - A minimalistic ClojureScript interface to React.js
- [Express React views](https://github.com/reactjs/express-react-views )
- [React Page Middleware](https://github.com/reactjs/react-page-middleware )
- [ngReact](https://github.com/davidchang/ngReact ) - React Components in Angular
- [coffee-react-transform](https://github.com/jsdf/coffee-react-transform ) - Provides React JSX support for Coffeescript
- [sprockets-coffee-react](https://github.com/jsdf/sprockets-coffee-react ) - Sprockets preprocessor for CJSX
- [react-kup](https://github.com/snd/react-kup ) - A simple, non-intrusive alternative to jsx for coffeescript
- [turbo-react](https://github.com/ssorallen/turbo-react ) - Combine Turbolinks and React to apply DOM diffs
- [react-bacon](https://github.com/jamesmacaulay/react-bacon ) - A little module for using React with Bacon.js
- [msx](https://github.com/insin/msx ) - React's JSX Transformer, tweaked to output calls to Mithril
- [react-backbone](https://github.com/jhudson8/react-backbone ) - Backbone-aware mixins for react
- [NestedReact](https://github.com/Volicon/NestedReact/ ) - transparent integration with Backbone Views and NestedTypes models
- [backbone-reaction](https://github.com/jhudson8/backbone-reaction ) - React, Backbone and then some
- [react.backbone](https://github.com/usepropeller/react.backbone ) - Plugin for React to make Backbone migration easier
- [reactbone](https://github.com/andrejewski/reactbone ) - React extensions for Backbone
- [backbone-react-ui](https://github.com/securingsincity/backbone-react-ui ) - React components for use with backbone and backbone paginator
- [react-events](https://github.com/jhudson8/react-events ) - Declarative managed event bindings for react components
- [react-mixin-manager](https://github.com/jhudson8/react-mixin-manager ) - React mixin registration manager
- [react-topcoat by @plaxdan](https://github.com/plaxdan/react-topcoat ) - Topcoat CSS components built with the React library
- [react-topcoat by @arnemart](https://github.com/arnemart/react-topcoat ) - A collection of React components for Topcoat
- [reactdown](https://github.com/andreypopp/reactdown ) - Write React components using markdown syntax
- [react-jade](https://github.com/ForbesLindesay/react-jade ) - Compile Jade to React JavaScript
- [jade-react](https://github.com/duncanbeevers/jade-react ) - Compile Jade templates to React.DOM expressions
- [gulp-jade-react](https://github.com/duncanbeevers/gulp-jade-react ) - Compile Jade templates into React de-sugared JSX with Gulp
- [sbt-reactjs](https://github.com/ddispaltro/sbt-reactjs ) - React SBT Plugin using npm
- [scalajs-react](https://github.com/japgolly/scalajs-react ) - A guilty affair between Scala.js and Facebook's React
- [react-xtags](https://github.com/vjeux/react-xtags/ ) - Using React to implement xtags
- [jreact](https://github.com/KnisterPeter/jreact ) - React on server-side Java (with Rhino or Nashorn)
- [React.hiccup](https://github.com/lantiga/react.hiccup ) - A complete replacement for JSX written in sweet.js
- [react-play](https://github.com/ssorallen/react-play ) - Rendering React components in the Play Framework with JDK8's Nashorn
- [rx-react](https://github.com/fdecampredon/rx-react ) - Utilities to works with React in a RxJS
- [react-with-di](https://github.com/vojtajina/react-with-di ) - A hacked prototype of React.js with DI
- [reactfire](https://github.com/firebase/reactfire ) - ReactJS mixin for easy Firebase integration
- [react-clickdrag-mixin](https://github.com/tleunen/react-clickdrag-mixin ) - ClickDrag mixin for React component
- [react-masonry-mixin](https://github.com/eiriklv/react-masonry-mixin ) - Standalone mixin for Masonry (@desandro)
- [react-packery-mixin](https://github.com/eiriklv/react-packery-mixin ) - Standalone mixin for Packery (Metafizzy)
- [react-dropzone](https://github.com/paramaggarwal/react-dropzone ) - Simple HTML5 drag-drop zone with React.js.
- [aframe-react](https://github.com/ngokevin/aframe ) - A-Frame VR + React
- [react-three-fiber](https://github.com/react-spring/react-three-fiber ) - A react reconciler for threejs (web and react-native)
- [react-three](https://github.com/Izzimach/react-three ) - React bindings to create and control a 3D scene using three.js
- [react-three-renderer](https://github.com/toxicFork/react-three-renderer ) - Render into a three.js canvas using React
- [react-threejs](https://github.com/fritx/react-threejs ) - Simplest bindings between React & Three.js
- [react-masonry-css](https://github.com/paulcollett/react-masonry-css ) - Fast Masonry layout powered by CSS, dependency free
- [react-captcha](https://github.com/appleboy/react-recaptcha ) - A react.js reCAPTCHA for Google
- [reaptcha](https://github.com/sarneeh/reaptcha ) - Clean, modern and simple React wrapper for Google reCAPTCHA
- [react-recaptcha-that-works](https://github.com/douglasjunior/react-recaptcha-that-works ) - A reCAPTCHA bridge for React that works
  
#### **React State Management**
  
- redux - Predictable State Container for JavaScript Apps
  
* [mobx](https://github.com/mobxjs/mobx ) - Simple, scalable state management
* [react-query](https://github.com/tannerlinsley/react-query )
* [flux](http://facebook.github.io/flux/ ) - Application architecture for building user interfaces
* [recoil](https://github.com/facebookexperimental/Recoil ) - Experimental state management library for React apps
* [xstate-react](https://github.com/davidkpiano/xstate/tree/master/packages/xstate-react ) - State machines and statecharts for the modern web
* [zustand](https://github.com/pmndrs/zustand ) - Bear necessities for state management in React
* [easy-peasy](https://github.com/ctrlplusb/easy-peasy ) - Vegetarian friendly state for React
* [hookstate](https://github.com/avkonst/hookstate ) - The simple but very powerful and incredibly fast state management for React that is based on hooks
* [effector](https://github.com/zerobias/effector ) - Fast and powerful reactive state manager
* [reactn](https://github.com/CharlesStover/reactn ) - React, but with built-in global state management
  
#### **React AR and VR**
  
- [Viro React](https://viromedia.com/viroreact/ ) - Platform for rapidly building AR/VR applications using React Native
  
#### **React Renderers**
  
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber ) - A React renderer for Three.js
- [react-pdf](https://github.com/diegomura/react-pdf ) - Create PDF files using React
- [ink](https://github.com/vadimdemedes/ink ) - React for interactive command-line apps
- [react-blessed](https://github.com/Yomguithereal/react-blessed ) - A React renderer for blessed terminal interface library
- [react-sketchapp](https://github.com/airbnb/react-sketchapp ) - Render React components to Sketch
- [react-figma](https://github.com/react-figma/react-figma ) - A React renderer for Figma
- [react-nil](https://github.com/pmndrs/react-nil ) - A react null renderer
- [remotion](https://github.com/JonnyBurger/remotion ) - Create videos programmatically in React
  
#### **React Forms**
  
- [formik](https://github.com/jaredpalmer/formik ) - Build forms in React, without the tears
- [react-hook-form](https://github.com/react-hook-form/react-hook-form ) - React Hooks for forms validation
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form ) - A React component for building Web forms from JSON Schema
- [react-final-form](https://github.com/final-form/react-final-form ) - High performance subscription-based form state management for React
- [unform](https://github.com/Rocketseat/unform ) - Performance-focused API for React forms
- [formily](https://github.com/alibaba/formily ) - Alibaba Group Unified Form Solution
- [uniforms](https://github.com/vazco/uniforms ) - A React library for building forms from any schema
- [formsy-react](https://github.com/formsy/formsy-react/ ) - A form input builder and validator for React
- [react-formal](https://github.com/jquense/react-formal ) - Sophisticated HTML form management for React
  
#### **React Autocomplete**
  
- [react-autocomplete by @rackt](https://github.com/rackt/react-autocomplete ) - WAI-ARIA compliant React autocomplete (Archived, read-only)
- [react-autosuggest by @moroshko](https://github.com/moroshko/react-autosuggest ) - WAI-ARIA compliant React autosuggest component
- [react-autocomplete by @eliseumds](https://github.com/eliseumds/react-autocomplete ) - Just tasting some ReactJS + RxJS
- [react-autocomplete by @prometheusresearch](https://github.com/prometheusresearch/react-autocomplete ) - Autocomplete widget based on React
- [instatype by @gragland](https://github.com/gragland/instatype ) - Simple react autocomplete component
- [downshift](https://github.com/paypal/downshift ) - 🏎 Primitives to build simple, flexible, WAI-ARIA compliant enhanced input React components
- [React Bootstrap Typeahead](https://github.com/ericgio/react-bootstrap-typeahead ) - A React-based typeahead that relies on Bootstrap for styling and was originally inspired by Twitter's typeahead.js.
  
#### **React Graphics**
  
- [react-art](https://github.com/facebook/react-art ) - React Bridge to the ART Drawing Library
- [react-canvas](https://github.com/Flipboard/react-canvas ) - High performance `<canvas>` rendering for React components
- [react-famous](https://github.com/pilwon/react-famous ) - Complex 3D animations UI at 60 FPS with Famo.us
- [react-kinetic](https://github.com/freiksenet/react-kinetic ) - HTML5 Canvas via KineticJS using React
- [react-svg-morph](https://github.com/gorangajic/react-svg-morph ) - morph your svg components one into another
- [react-hooks-svgdrawing](https://github.com/kmkzt/react-hooks-svgdrawing ) - SVG Drawing with React hooks
- [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom ) - A React component that adds pan and zoom features to SVG.
  
#### **React Data Managing**
  
- [immer](https://github.com/immerjs/immer ) - Create the next immutable state by mutating the current one
- [ReSub](https://github.com/Microsoft/ReSub ) - A library for writing better React components and data stores
- [immutable-js](https://github.com/immutable-js/immutable-js ) - Immutable Data Collections for Javascript
- [baobab](https://github.com/Yomguithereal/baobab ) - JavaScript & TypeScript persistent and optionally immutable data tree with cursors
- [WatermelonDB](https://github.com/Nozbe/WatermelonDB ) - 🍉 Reactive & asynchronous database for powerful React and React Native apps ⚡️
- [RxDB](https://github.com/pubkey/rxdb ) - A realtime Database for JavaScript Applications
  
#### **React Maps**
  
- [react-googlemaps](https://github.com/pieterv/react-googlemaps ) - React interface to Google maps
- [react-maps](https://github.com/matnel/react-maps ) - A map component for React
- [react-google-maps](https://github.com/tomchentw/react-google-maps ) - React.js Google Maps integration component
- [react-gmaps](https://github.com/MicheleBertoli/react-gmaps ) - A Google Maps component for React.js
- [react-map-gl](https://github.com/uber/react-map-gl ) - A React wrapper for MapboxGL-js plus overlay API
- [google-map-react](https://github.com/istarkov/google-map-react ) - Isomorphic google map React component
- [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl ) - A mapbox-gl-js wrapper to make the API react friendly
- [google-maps-react](https://github.com/fullstackreact/google-maps-react ) - A declarative Google Map React component using React, lazy-loading dependencies, current-location finder and a test-driven approach by the Fullstack React team.
- [react-leaflet](https://react-leaflet.js.org ) - React components for Leaflet maps
- [react-geo](https://github.com/terrestris/react-geo ) - A set of geo-related components using react, antd, and ol
- [pigeon-maps](https://github.com/mariusandra/pigeon-maps ) - ReactJS maps without external dependencies
  
#### **React Charts**
  
- [vx](https://github.com/airbnb/visx ) - Visualization components
- [victory](https://github.com/FormidableLabs/victory ) - A collection of composable React components for building interactive data visualizations
- [react-vis](https://github.com/uber/react-vis ) - Data Visualization Components
- [recharts](https://github.com/recharts/recharts ) - Redefined chart library built with React and D3
- [nivo](https://github.com/plouc/nivo ) - Provides a rich set of data visualization components, built on top of the D3 and React libraries
- [echarts-for-react](https://github.com/hustcc/echarts-for-react ) - Apache ECharts components for React wrapper
- [react-apexcharts](https://github.com/apexcharts/react-apexcharts ) - React Component for ApexCharts
- [chartify](https://github.com/kis/chartify ) - React plugin for building charts using CSS
  
### React Native
  
Framework for building native apps using React
  
#### **React Native General Resources**
  
- [React Native Official Site](https://facebook.github.io/react-native/ )
- [React Native GitHub](https://github.com/facebook/react-native )
- [React Native Newsletter](http://brentvatne.ca/react-native-newsletter/ )
- [React Native Playground](https://rnplay.org )
- [React Native Awesome List](https://github.com/jondot/awesome-react-native )
- [React Native StackOverflow](http://stackoverflow.com/questions/tagged/react-native )
- [React Native Radio](https://devchat.tv/react-native-radio/ )
  
#### **React Native Tutorials**
  
- [React Native Tutorial](https://facebook.github.io/react-native/docs/tutorial.html )
- [Introducing React Native: Building Apps with JavaScript](http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript )
- [Introduction to React Native: Building iOS Apps with JavaScript](http://www.appcoda.com/react-native-introduction/ )
- [React Native Meets Async Functions](https://medium.com/the-exponent-log/react-native-meets-async-functions-3e6f81111173 )
- [Digital Smart Mirror lab with React Native](http://atticuswhite.com/blog/react-native-smart-mirror-lab/ )
- [The Beauty Of React Native: Building Your First iOS App With JavaScript (Part 1)](https://www.smashingmagazine.com/2016/04/the-beauty-of-react-native-building-your-first-ios-app-with-javascript-part-1/ )
- [The Beauty Of React Native: Building Your First iOS App With JavaScript (Part 2)](https://www.smashingmagazine.com/2016/04/how-to-build-your-first-ios-app-with-javascript/ )
- [A Mini-Course on React Native Flexbox](https://medium.com/@yoniweisbrod/a-mini-course-on-react-native-flexbox-2832a1ccc6 )
- [A Complete Guide to Flexbox)\*\*](https://css-tricks.com/snippets/css/a-guide-to-flexbox/ )
- [Test driving react native applications](http://www.multunus.com/blog/2016/07/test-driving-react-native-applications/ )
- [Using React Native With TypeScript](https://medium.com/@jan.hesters/using-typescript-with-react-native-946aa4b4ae6f )
  
#### **React Native Development Tools**
  
- [react-native-code-push](https://github.com/microsoft/react-native-code-push ) - React Native module for CodePush
  
#### **React Native Sample Apps**
  
- [HackerNews](https://github.com/iSimar/HackerNews-React-Native )
- [Ziliun](https://github.com/sonnylazuardi/ziliun-react-native )
- [FinanceReactNative](https://github.com/7kfpun/FinanceReactNative )
- [SplashWalls](https://github.com/nashvail/SplashWalls )
- [NBAreact](https://github.com/jbkuczma/NBAreact )
- [Bus Timetable](https://github.com/EarlGeorge/timetable )
  
#### **React Native Boilerplates**
  
- [Create React Native App](https://github.com/react-community/create-react-native-app ) - Create React Native apps that run on iOS, Android, and web
- [Ignite](https://github.com/infinitered/ignite ) - The hottest CLI for React Native, boilerplates, plugins, generators, and more!
  
#### **React Native Awesome Components**
  
- [Expo](https://expo.io ) - The Expo platform for making cross-platform mobile apps
- [react-navigation](https://reactnavigation.org ) - Routing and navigation for your React Native apps
- [react-native-social-share](https://github.com/doefler/react-native-social-share ) - Use the iOS and Android native Twitter and Facebook share popup with React Native
- [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk ) - A wrapper around the iOS Facebook SDK
- [react-native-side-menu](https://github.com/Kureev/react-native-side-menu ) - Simple customizable component to create side menu
- [react-native-mapbox-gl](https://github.com/mapbox/react-native-mapbox-gl ) - A Mapbox GL react native module
- [react-native-icons](https://github.com/corymsmith/react-native-icons ) - Quick and easy icons in React Native
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons ) - 3000 Customizable Icons for React Native with support for NavBar/TabBar
- [react-native-google-signin](https://github.com/apptailor/react-native-google-signin ) - Google Signin for React Native
- [react-native-picker-modal-view](https://github.com/pankod/react-native-picker-modal-view )
- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat ) - The most complete chat UI for React Native
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image ) - FastImage, performant React Native image component
- [recyclerlistview](https://github.com/Flipkart/recyclerlistview ) - High performance listview for React Native and web!
- [react-native-largelist](https://github.com/bolan9999/react-native-largelist ) - The best large list component for React Native
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler ) - Declarative API exposing platform native touch and gesture system to React Native
- [rn-placeholder](https://github.com/mfrachet/rn-placeholder ) - Display some placeholder stuff before rendering your text or media content in React Native
  
#### **React Native Libraries**
  
- [sentry-react-native](https://github.com/getsentry/sentry-react-native ) - Real-time crash reporting for your web apps, mobile apps, and games.
- [realm-js](https://github.com/realm/realm-js ) - Realm is a mobile database: an alternative to SQLite & key-value stores
- [react-native-device-info](https://github.com/react-native-community/react-native-device-info ) - Device Information for React Native iOS and Android
- [react-native-react-bridge](https://github.com/inokawa/react-native-react-bridge ) - A toolset to run React web app in React Native and handle communication between them.
- [uncompress-react-native](https://github.com/didisouzacosta/uncompress-react-native ) - Simple library to decompress files .zip, .rar, .cbz, .cbr in React Native.
  
### Redux
  
Predictable State Container for JavaScript Apps
**Redux General Resources**
  
- [Redux GitHub](https://github.com/reduxjs/redux )
- [Redux Official Site](http://redux.js.org )
- [Awesome Redux List](https://github.com/xgrommx/awesome-redux )
  
#### **Redux Tools**
  
- [react-redux](https://github.com/reduxjs/react-redux ) - Official React bindings for Redux
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit ) - The official, opinionated, batteries-included toolset for efficient Redux development
- [redux-devtools](https://github.com/reduxjs/redux-devtools ) - DevTools for Redux with hot reloading, action replay, and customizable UI
- [reselect](https://github.com/reduxjs/reselect ) - Selector library for Redux
- [redux-thunk](https://github.com/reduxjs/redux-thunk ) - Thunk middleware for redux
- [redux-saga](https://github.com/redux-saga/redux-saga ) - An alternative side effect model for Redux apps
- [connected-react-router](https://github.com/supasate/connected-react-router ) - A Redux binding for React Router
- [redux-form](https://github.com/erikras/redux-form ) - A Higher Order Component using react-redux to keep form state
- [normalizr](https://github.com/paularmstrong/normalizr ) - Normalizes nested JSON according to a schema
- [redux-observable](https://github.com/redux-observable/redux-observable ) - RxJS middleware for Redux
- [redux-undo](https://github.com/omnidan/redux-undo ) - Higher order reducer to add undo/redo functionality to redux state containers
- [redux-persist](https://github.com/rt2zz/redux-persist ) - Persist and rehydrate a redux store
  
#### **Redux Tutorials**
  
- [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts )
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview )
- [Fundamentals of Redux Course from Dan Abramov](https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867 )
- [Building React Applications with Idiomatic Redux](https://app.egghead.io/courses/building-react-applications-with-idiomatic-redux )
  
## Data-Driven React Applications
  
**Relay General Resources**
  
- [Relay Offical Site](https://relay.dev )
- [Relay GitHub](https://github.com/facebook/relay )
  **Relay Tutorials**
- [Official Relay Getting Started](https://facebook.github.io/relay/docs/en/introduction-to-relay.html )
- [Relay for Visual Learners](http://sgwilym.github.io/relay-visual-learners/ )
- [Getting Started with Relay](https://auth0.com/blog/2015/10/06/getting-started-with-relay/ )
- [Relay and Routing](https://medium.com/@cpojer/relay-and-routing-36b5439bad9 )
  **Relay Tools**
- [graphql-relay-js](https://github.com/graphql/graphql-relay-js ) - A library to help construct a graphql-js server supporting react-relay
- [react-router-relay](https://github.com/relay-tools/react-router-relay ) - Relay integration for React Router
- [relay-local-schema](https://github.com/relay-tools/relay-local-schema ) - Use Relay without a GraphQL server
- [relay-codemod](https://github.com/facebook/jscodeshift ) - Codemod scripts based for on jsodeshift to update Relay APIs
  
### Videos
  
#### **Reactjsvideos.com**
  
**Important Talks**
  
- [Pete Hunt: React: Rethinking best practices - JSConf EU 2013](https://www.youtube.com/watch?v=x7cQ3mrcKaY )
- [Pete Hunt: React: Rethinking Best Practices (updated) - JSConf.Asia 2013](https://www.youtube.com/watch?v=DgVS-zXgMTk )
- [Tom Occhino and Jordan Walke: JS Apps at Facebook - JSConfUS 2013](https://www.youtube.com/watch?v=GW0rj4sNH2w )
- [React: CSS in JS](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html )
- [Pete Hunt: Be Predictable, Not Correct - Mountain West JavaScript 2014](https://www.youtube.com/watch?v=h3KksH8gfcQ )
- [Hacker Way: Rethinking Web App Development at Facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw )
- [Christopher Chedeau: Why does React Scale? - JSConf2014](https://www.youtube.com/watch?v=D-ioDiacTm8 )
- [Christopher Chedeau: React's Architecture - OSCON 2014](https://www.youtube.com/watch?v=eCf5CquV_Bw )
- [Pete Hunt: React RESTful UI Rendering - Strange Loop 2014](https://www.youtube.com/watch?v=IVvHPPcl2TM )
- [Pete Hunt: How Instagram.com Works - OSCON 2014](https://www.youtube.com/watch?v=VkTCL6Nqm6Y )
- [Bill Fisher and Jing Chen: React and Flux - NewCircle Training 2014](https://www.youtube.com/watch?v=i__969noyAM )
- [Sebastian Markbage: Minimal API Surface Area - JSConf EU 2014](https://www.youtube.com/watch?v=4anAwXYqLG8 )
- [Avik Chaudhuri: JavaScript Testing and Static Type Systems at Scale - Scale 2014](https://www.youtube.com/watch?v=M8x0bc81smU )
- [React Native & Relay: Bringing Modern Web Techniques to Mobile - f8 2015)](https://www.youtube.com/watch?v=X6YbAKiLCLU )
- [Citrusbyte Presents GraphQL: A Horizontal Platform with Nick Schrock](https://www.youtube.com/watch?v=LQFQl8EsV3k )
- [Laney Kuenzel: Mutations and Subscriptions in Relay - JSConf 2015](https://www.youtube.com/watch?v=mmke4w4gc6c )
- [React Today and Tomorrow and 90% Cleaner React With Hooks - React Conf 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM )
- [React Conferences](https://reactjs.org/community/conferences.html )
- [React Videos](https://reactjs.org/community/videos.html )
- [Awesome React Talks](https://github.com/tiaanduplessis/awesome-react-talks )
  
- [Trying React Hooks for the first time with Dan Abramov](https://www.youtube.com/watch?v=G-aO5hzo1aw )
  
### Demo React Apps
  
- [hackernews-react-graphql](https://github.com/clintonwoo/hackernews-react-graphql ) - Hacker News clone rewritten with universal JavaScript, using React and GraphQL
- [react-reduction](https://github.com/reduction-admin/react-reduction ) - Free Admin Template Built with React and Bootstrap4
- [reactjs-tmdb-app](https://github.com/SKempin/reactjs-tmdb-app ) - Responsive React The Movie Database App
- [react-shopping-cart](https://github.com/jeffersonRibeiro/react-shopping-cart ) - Simple ecommerce cart application built with React Redux
  
---
  
### Real React Apps
  
- [kibana](https://github.com/elastic/kibana ) - Your window into the Elastic Stack
- [firefox debugger](https://github.com/firefox-devtools/debugger ) - The Firefox debugger that works anywhere
- [spectrum](https://github.com/withspectrum/spectrum ) Simple, powerful online communities
- [mattermost](https://github.com/mattermost/mattermost-webapp ) - Open source Slack alternative
- [overreacted](https://github.com/gaearon/overreacted.io ) - Personal blog by Dan Abramov
- [winamp2-js](https://github.com/captbaritone/winamp2-js ) - Winamp 2 reimplemented for the browser
- [dnote](https://github.com/dnote/dnote ) - A command line notebook with multi-device sync and web interface
  
</details>
  
---
  
##  **Hello World**
  
  
##  The smallest React example looks like this:
  
  
```js
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
```
  
It displays a heading saying "Hello, world!" on the page.
  
<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/hello-world"></iframe>
  
{% embed url="https://codepen.io/bgoonz/pen/wveBJBM" %}
  
##  <iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/bgoonz/pen/wveBJBM"></iframe>
  
  
---
  
###  **Introducing JSX**
  
  
---
  
###  Consider this variable declaration:
  
  
```js
const element = <h1>Hello, world!</h1>;
```
  
- This funny tag syntax is neither a string nor HTML.
  
It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
  
JSX produces React "elements". We will explore rendering them to the DOM in the [next section](https://reactjs.org/docs/rendering-elements.html ). Below, you can find the basics of JSX necessary to get you started.
  
---
  
---
  
###  Why JSX?
  
  
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
  
Instead of artificially separating _technologies_ by putting markup and logic in separate files, React [separates _concerns_](https://en.wikipedia.org/wiki/Separation_of_concerns ) with loosely coupled units called "components" that contain both. We will come back to components in a [further section](https://reactjs.org/docs/components-and-props.html ), but if you're not yet comfortable putting markup in JS, [this talk](https://www.youtube.com/watch?v=x7cQ3mrcKaY ) might convince you otherwise.
  
React [doesn't require](https://reactjs.org/docs/react-without-jsx.html ) using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
  
With that out of the way, let's get started!
  
---
  
---
  
###  Embedding Expressions in JSX
  
  
> - In the example below, we declare a variable called `name` and then use it inside JSX by wrapping it in curly braces:
  
```js
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById("root"));
```
  
You can put any valid [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions ) inside the curly braces in JSX. ##### For example, `2 + 2`, `user.firstName`, or `formatName(user)` are all valid JavaScript expressions.
  
> - In the example below, we embed the result of calling a JavaScript function, `formatName(user)`, into an `<h1>` element.
  
---

```js
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = <h1> Hello, {formatName(user)}! </h1>;

ReactDOM.render(element, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/introducing-jsx"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_oNwgZgm)**](https://codepen.io/bgoonz/pen/oNwgZgm )
  
#####  We split JSX over multiple lines for readability. While it isn't required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of [automatic semicolon insertion](https://stackoverflow.com/q/2846283 ).
  
  
---
  
---
  
###  JSX is an Expression Too
  
  
After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
  
This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions:
  
---

```js
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

---

---

### Specifying Attributes with JSX

You may use quotes to specify string literals as attributes:

```js
const element = <div tabIndex="0"></div>;
```

You may also use curly braces to embed a JavaScript expression in an attribute:

```js
const element = <img src={user.avatarUrl}></img>;
```

Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

> Warning:Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.##### For example, class becomes className in JSX, and tabindex becomes tabIndex.

---

---

### Specifying Children with JSX

If a tag is empty, you may close it immediately with `/>`, like XML:

```js
const element = <img src={user.avatarUrl} />;
```

JSX tags may contain children:

```js
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
```

---

---

### JSX Prevents Injection Attacks

It is safe to embed user input in JSX:

```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

---

---

### JSX Represents Objects

Babel compiles JSX down to `React.createElement()` calls.

These two examples are identical:

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```js
// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
```

-   These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

##### We will explore rendering React elements to the DOM in the [next section](https://reactjs.org/docs/rendering-elements.html).

> Tip:We recommend using the "Babel" language definition for your editor of choice so that both ES6 and JSX code is properly highlighted.

---

---

### **Rendering Elements**

---

### Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

`const element = <h1>Hello, world</h1>;`

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

> Note:One might confuse elements with a more widely known concept of "components". We will introduce components in the next section. Elements are what components are "made of", and we encourage you to read this section before jumping ahead.

---

---

### Rendering an Element into the DOM

Let's say there is a `<div>` somewhere in your HTML file:

```js
<div id="root"></div>
```

##### We call this a "root" DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element into a root DOM node, pass both to `[ReactDOM.render()](<https://reactjs.org/docs/react-dom.html#render> )`:

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/rendering-elements/render-an-element"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_mdwyWeb?editors=0010)**](https://codepen.io/bgoonz/pen/mdwyWeb?editors=0010 )
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/bgoonz/pen/mdwyWeb?editors=0010"></iframe>
  
It displays "Hello, world" on the page.
  
---
  
---
  
###  Updating the Rendered Element
  
  
React elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object ). Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
  
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `[ReactDOM.render()](<https://reactjs.org/docs/react-dom.html#render> )`.
  
Consider this ticking clock example:
  
---

```js
function tick() {
    const element = (
        <div>
            {' '}
            <h1>Hello, world!</h1> <h2>It is {new Date().toLocaleTimeString()}.</h2>{' '}
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_eYRmvNy?editors=0010)**](https://codepen.io/bgoonz/pen/eYRmvNy?editors=0010 )
  
It calls `[ReactDOM.render()](<https://reactjs.org/docs/react-dom.html#render> )` every second from a `[setInterval()](<https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval> )` callback.
  
> Note:In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets encapsulated into stateful components.We recommend that you don't skip topics because they build on each other.
  
---
  
---
  
###  React Only Updates What's Necessary
  
  
React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
  
You can verify by inspecting the [last example](https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element ) with the browser tools:
  
![https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif](https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif )
  
Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.
  
> - In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.
  
---
  
---
  
###  **Components and Props**
  
  
---
  
###  Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a [detailed component API reference here](https://reactjs.org/docs/react-component.html ).
  
  
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
  
---
  
---
  
###  Function and Class Components
  
  
The simplest way to define a component is to write a JavaScript function:
  
---

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

-   This function is a valid React component because it accepts a single "props" (which stands for properties) object argument with data and returns a React element. We call such components "function components" because they are literally JavaScript functions.

You can also use an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) to define a component:

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

-   The above two components are equivalent from React's point of view.

Function and Class components both have some additional features that we will discuss in the [next sections](https://reactjs.org/docs/state-and-lifecycle.html).

---

---

### Rendering a Component

Previously, we only encountered React elements that represent DOM tags:

```js
const element = <div />;
```

However, elements can also represent user-defined components:

```js
const element = <Welcome name="Sara" />;
```

> When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object "props".

##### For example, this code renders "Hello, Sara" on the page:

---

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/components-and-props/rendering-a-component"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_QWgwpjd?editors=0010)**](https://codepen.io/bgoonz/pen/QWgwpjd?editors=0010 )
  
Let's recap what happens in this example:
  
1. We call `ReactDOM.render()` with the `<Welcome name="Sara" />` element.
2. React calls the `Welcome` component with `{name: 'Sara'}` as the props.
3. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.
  
> Note: Always start component names with a capital letter.React treats components starting with lowercase letters as DOM tags. ##### For example,
>
> represents an HTML div tag, but represents a component and requires Welcome to be in [scope.To](http://scope.to ) learn more about the reasoning behind this convention, please read JSX In Depth.
  
---
  
---
  
###  Composing Components
  
  
Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
  
#####  For example, we can create an `App` component that renders `Welcome` many times:
  
  
---

```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            {' '}
            <Welcome name="Sara" /> <Welcome name="Cahal" /> <Welcome name="Edite" />{' '}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/components-and-props/composing-components"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_LYLEWNq?editors=0010)**](https://codepen.io/bgoonz/pen/LYLEWNq?editors=0010 )
  
Typically, new React apps have a single `App` component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.
  
---
  
---
  
###  Extracting Components
  
  
Don't be afraid to split components into smaller components.
  
#####  For example, consider this `Comment` component:
  
  
---

```js
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/bgoonz/pen/PojwpzP?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_PojwpzP?editors=0010)**](https://codepen.io/bgoonz/pen/PojwpzP?editors=0010 )
  
It accepts `author` (an object), `text` (a string), and `date` (a date) as props, and describes a comment on a social media website.
  
This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.
  
First, we will extract `Avatar`:
  
---

```js
function Avatar(props) {
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}
```

-   The `Avatar` doesn't need to know that it is being rendered inside a `Comment`. This is why we have given its prop a more generic name: `user` rather than `author`.

##### We recommend naming props from the component's own point of view rather than the context in which it is being used.

##### We can now simplify `Comment` a tiny bit:

---

```js
function Comment(props) {
    return (
        <div className="Comment">
            {' '}
            <div className="UserInfo">
                {' '}
                <Avatar user={props.author} /> <div className="UserInfo-name"> {props.author.name}</div>{' '}
            </div> <div className="Comment-text"> {props.text}</div> <div className="Comment-date"> {formatDate(props.date)}</div>{' '}
        </div>
    );
}
```

Next, we will extract a `UserInfo` component that renders an `Avatar` next to the user's name:

`function UserInfo(props) { return ( <div className="UserInfo"> <Avatar user={props.user} /> <div className="UserInfo-name"> {props.user.name} </div> </div> ); }`

This lets us simplify `Comment` even further:

---

```js
function Comment(props) {
    return (
        <div className="Comment">
            {' '}
            <UserInfo user={props.author} /> <div className="Comment-text"> {props.text}</div> <div className="Comment-date">
                {' '}
                {formatDate(props.date)}
            </div>{' '}
        </div>
    );
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://reactjs.org/redirect-to-codepen/components-and-props/extracting-components-continued"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_eYRmvzV?editors=0010)**](https://codepen.io/bgoonz/pen/eYRmvzV?editors=0010 )
  
Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be extracted to a separate component.
  
---
  
---
  
###  Props are Read-Only
  
  
Whether you declare a component [as a function or a class](https://reactjs.org/docs/components-and-props.html#function-and-class-components ), it must never modify its own props. Consider this `sum` function:
  
---

```js
function sum(a, b) {
    return a + b;
}
```

Such functions are called ["pure"](https://en.wikipedia.org/wiki/Pure_function) because they do not attempt to change their inputs, and always return the same result for the same inputs.

> -   In contrast, this function is impure because it changes its own input:

---

```js
function withdraw(account, amount) {
    account.total -= amount;
}
```

React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

Of course, application UIs are dynamic and change over time. In the [next section](https://reactjs.org/docs/state-and-lifecycle.html), we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

---

---

### **State and Lifecycle**

---

### This page introduces the concept of state and lifecycle in a React component. You can find a [detailed component API reference here](https://reactjs.org/docs/react-component.html).

Consider the ticking clock example from [one of the previous sections](https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element). In [Rendering Elements](https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom), we have only learned one way to update the UI. We call `ReactDOM.render()` to change the rendered output:

---

```js
function tick() {
    const element = (
        <div>
            {' '}
            <h1>Hello, world!</h1> <h2>It is {new Date().toLocaleTimeString()}.</h2>{' '}
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/gwoJZk?editors=0010)
  
> - In this section, we will learn how to make the `Clock` component truly reusable and encapsulated. It will set up its own timer and update itself every second.
  
#####  We can start by encapsulating how the clock looks:
  
  
---

```js
function Clock(props) {
    return (
        <div>
            {' '}
            <h1>Hello, world!</h1> <h2>It is {props.date.toLocaleTimeString()}.</h2>{' '}
        </div>
    );
}

function tick() {
    ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/dpdoYR?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_powvegw?editors=0010)**](https://codepen.io/bgoonz/pen/powvegw?editors=0010 )
  
However, it misses a crucial requirement: the fact that the `Clock` sets up a timer and updates the UI every second should be an implementation detail of the `Clock`.
  
Ideally we want to write this once and have the `Clock` update itself:
  
```js
ReactDOM.render(<Clock />, document.getElementById("root"));
```
  
- To implement this, we need to add "state" to the `Clock` component.
  
State is similar to props, but it is private and fully controlled by the component.
  
---
  
---
  
###  Converting a Function to a Class
  
  
You can convert a function component like `Clock` to a class in five steps:
  
1. Create an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes ), with the same name, that extends `React.Component`.
2. Add a single empty method to it called `render()`.
3. Move the body of the function into the `render()` method.
4. Replace `props` with `this.props` in the `render()` body.
5. Delete the remaining empty function declaration.
  
```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>);
  }
}
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/zKRGpo?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(~~pen=~~**\_eYRmvJV?editors=0010)**](https://codepen.io/bgoonz/pen/eYRmvJV?editors=0010 )
  
`Clock` is now defined as a class rather than a function.
  
The `render` method will be called each time an update happens, but as long as we render `<Clock />` into the same DOM node, only a single instance of the `Clock` class will be used. This lets us use additional features such as local state and lifecycle methods.
  
---
  
---
  
###  Adding Local State to a Class
  
  
#####  We will move the `date` from props to state in three steps:
  
  
1. Replace `this.props.date` with `this.state.date` in the `render()` method:
  
```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h1>Hello, world!</h1> <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>{" "}
      </div>
    );
  }
}
```
  
1. Add a [class constructor](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor ) that assigns the initial `this.state`:
  
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  render() {
    return (
      <div>
        {" "}
        <h1>Hello, world!</h1> <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>{" "}
      </div>
    );
  }
}
```
  
Note how we pass `props` to the base constructor:
  
```js
 constructor(props) {
    super(props);    this.state = {date: new Date()};
  }
```
  
Class components should always call the base constructor with `props`.
  
1. Remove the `date` prop from the `<Clock />` element:
  
```js
ReactDOM.render(<Clock />, document.getElementById("root"));
```
  
> We will later add the timer code back to the component itself.
  
The result looks like this:
  
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {" "}
        <h1>Hello, world!</h1> <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>{" "}
      </div>
    );
  }
}
  
ReactDOM.render(<Clock />, document.getElementById("root"));
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/KgQpJd?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_oNwgZbV?editors=0010)**](https://codepen.io/bgoonz/pen/oNwgZbV?editors=0010 )
  
Next, we'll make the `Clock` set up its own timer and update itself every second.
  
---
  
---
  
###  Adding Lifecycle Methods to a Class
  
  
> - In applications with many components, it's very important to free up resources taken by the components when they are destroyed.
  
#####  We want to [set up a timer](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval ) whenever the `Clock` is rendered to the DOM for the first time. This is called "mounting" in React.
  
  
#####  We also want to [clear that timer](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval ) whenever the DOM produced by the `Clock` is removed. This is called "unmounting" in React.
  
  
#####  We can declare special methods on the component class to run some code when a component mounts and unmounts:
  
  
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        {" "}
        <h1>Hello, world!</h1> <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>{" "}
      </div>
    );
  }
}
```
  
- These methods are called "lifecycle methods".
  
The `componentDidMount()` method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
  
```js
  componentDidMount() {
    this.timerID = setInterval(      () => this.tick(),      1000    );  }
```
  
Note how we save the timer ID right on `this` (`this.timerID`).
  
While `this.props` is set up by React itself and `this.state` has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn't participate in the data flow (like a timer ID).
  
#####  We will tear down the timer in the `componentWillUnmount()` lifecycle method:
  
  
```js
  componentWillUnmount() {
    clearInterval(this.timerID);  }
```
  
Finally, we will implement a method called `tick()` that the `Clock` component will run every second.
  
It will use `this.setState()` to schedule updates to the component local state:
  
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        {" "}
        <h1>Hello, world!</h1> <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>{" "}
      </div>
    );
  }
}
  
ReactDOM.render(<Clock />, document.getElementById("root"));
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/amqdNA?editors=0010)
  
Now the clock ticks every second.
  
Let's quickly recap what's going on and the order in which the methods are called:
  
1. When `<Clock />` is passed to `ReactDOM.render()`, React calls the constructor of the `Clock` component. Since `Clock` needs to display the current time, it initializes `this.state` with an object including the current time. We will later update this state.
2. React then calls the `Clock` component's `render()` method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the `Clock`'s render output.
3. When the `Clock` output is inserted in the DOM, React calls the `componentDidMount()` lifecycle method. Inside it, the `Clock` component asks the browser to set up a timer to call the component's `tick()` method once a second.
4. Every second the browser calls the `tick()` method. Inside it, the `Clock` component schedules a UI update by calling `setState()` with an object containing the current time. Thanks to the `setState()` call, React knows the state has changed, and calls the `render()` method again to learn what should be on the screen. This time, `this.state.date` in the `render()` method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
5. If the `Clock` component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle method so the timer is stopped.
  
---
  
---
  
###  Using State Correctly
  
  
There are three things you should know about `setState()`.
  
---
  
---
  
###  Do Not Modify State Directly
  
  
#####  For example, this will not re-render a component:
  
  
```js
// Wrong
this.state.comment = "Hello";
```
  
####  Instead, use `setState()`:
  
  
```js
// Correct
this.setState({ comment: "Hello" });
```
  
- The only place where you can assign `this.state` is the constructor.
  
---
  
---
  
###  State Updates May Be Asynchronous
  
  
React may batch multiple `setState()` calls into a single update for performance.
  
Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.
  
#####  For example, this code may fail to update the counter:
  
  
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
  
- To fix it, use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
  
```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```
  
> We used an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions ) above, but it also works with regular functions:
  
```js
// Correct
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment,
  };
});
```
  
---
  
---
  
###  State Updates are Merged
  
  
When you call `setState()`, React merges the object you provide into the current state.
  
#####  For example, your state may contain several independent variables:
  
  
```js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],      comments: []    };
  }
```
  
- Then you can update them independently with separate `setState()` calls:
  
```js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts      });
    });
  
    fetchComments().then(response => {
      this.setState({
        comments: response.comments      });
    });
  }
```
  
- The merging is shallow, so `this.setState({comments})` leaves `this.state.posts` intact, but completely replaces `this.state.comments`.
  
---
  
---
  
###  The Data Flows Down
  
  
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.
  
This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
  
A component may choose to pass its state down as props to its child components:
  
```js
<FormattedDate date={this.state.date} />
```
  
- The `FormattedDate` component would receive the `date` in its props and wouldn't know whether it came from the `Clock`'s state, from the `Clock`'s props, or was typed by hand:
  
---

```js
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/zKRqNB?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_GREgWEp?editors=0010)**](https://codepen.io/bgoonz/pen/GREgWEp?editors=0010 )
  
This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.
  
If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down.
  
To show that all components are truly isolated, we can create an `App` component that renders three `<Clock>`s:
  
---

```js
function App() {
    return (
        <div>
            {' '}
            <Clock /> <Clock /> <Clock />{' '}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/vXdGmd?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_YzQPZQK?editors=0010)**](https://codepen.io/bgoonz/pen/YzQPZQK?editors=0010 )
  
Each `Clock` sets up its own timer and updates independently.
  
> - In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.
  
---
  
---
  
###  **Handling Events**
  
  
---
  
###  Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
  
  
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
  
#####  For example, the HTML:
  
  
```js
<button onclick="activateLasers()">Activate Lasers</button>
```
  
is slightly different in React:
  
```js
<button onClick={activateLasers}> Activate Lasers</button>
```
  
Another difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly. ##### For example, with plain HTML, to prevent the default form behavior of submitting, you can write:
  
```js
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```
  
####  In React, this could instead be:
  
  
---

```js
function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            {' '}
            <button type="submit">Submit</button>{' '}
        </form>
    );
}
```

Here, `e` is a synthetic event. React defines these synthetic events according to the [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/), so you don't need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the `[SyntheticEvent](<https://reactjs.org/docs/events.html> )` reference guide to learn more.

When using React, you generally don't need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

When you define a component using an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes), a common pattern is for an event handler to be a method on the class. ##### For example, this `Toggle` component renders a button that lets the user toggle between "ON" and "OFF" states:

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback    this.handleClick = this.handleClick.bind(this);  }

  handleClick() {    this.setState(prevState => ({      isToggleOn: !prevState.isToggleOn    }));  }render() {
    return (
      <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>);
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/xEmzGg?editors=0010)
  
You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not [bound](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind ) by default. If you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be `undefined` when the function is actually called.
  
This is not React-specific behavior; it is a part of [how functions work in JavaScript](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/ ). Generally, if you refer to a method without `()` after it, such as `onClick={this.handleClick}`, you should bind that method.
  
If calling `bind` annoys you, there are two ways you can get around this. If you are using the experimental [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/ ), you can use class fields to correctly bind callbacks:
  
```js
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.  // Warning: this is *experimental* syntax.  handleClick = () => {    console.log('this is:', this);  }render() {
    return (
      <button onClick={this.handleClick}>        Click me
      </button>);
  }
}
```
  
- This syntax is enabled by default in [Create React App](https://github.com/facebookincubator/create-react-app ).
  
If you aren't using class fields syntax, you can use an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions ) in the callback:
  
```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
  
  render() {
    // This syntax ensures `this` is bound within handleClick    return (      <button onClick={() => this.handleClick()}>        Click me
      </button>);
  }
}
```
  
- The problem with this syntax is that a different callback is created each time the `LoggingButton` renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.
  
---
  
---
  
###  Passing Arguments to Event Handlers
  
  
Inside a loop, it is common to want to pass an extra parameter to an event handler. ##### For example, if `id` is the row ID, either of the following would work:
  
`<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button><button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`
  
The above two lines are equivalent, and use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions ) and `[Function.prototype.bind](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind> )` respectively.
  
> - In both cases, the `e` argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with `bind` any further arguments are automatically forwarded.
  
---
  
---
  
###  **Conditional Rendering**
  
  
---
  
###  In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
  
  
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `[if](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else> )` or the [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator ) to create elements representing the current state, and let React update the UI to match them.
  
Consider these two components:
  
---

```js
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
```

##### We'll create a `Greeting` component that displays either of these components depending on whether a user is logged in:

---

```js
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/ZpVxNq?editors=0011"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_mdwyWmJ?editors=0011)**](https://codepen.io/bgoonz/pen/mdwyWmJ?editors=0011 )
  
This example renders a different greeting depending on the value of `isLoggedIn` prop.
  
---
  
---
  
###  Element Variables
  
  
You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn't change.
  
Consider these two new components representing Logout and Login buttons:
  
---

```js
function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}
```

#### In the example below, we will create a [stateful component](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) called `LoginControl`.

It will render either `<LoginButton />` or `<LogoutButton />` depending on its current state. It will also render a `<Greeting />` from the previous example:

```js
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                {' '}
                <Greeting isLoggedIn={isLoggedIn} /> {button}{' '}
            </div>
        );
    }
}

ReactDOM.render(<LoginControl />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/QKzAgB?editors=0010)
  
While declaring a variable and using an `if` statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.
  
---
  
---
  
###  Inline If with Logical && Operator
  
  
You may [embed expressions in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx ) by wrapping them in curly braces. This includes the JavaScript logical `&&` operator. It can be handy for conditionally including an element:
  
---

```js
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            {' '}
            <h1>Hello!</h1> {unreadMessages.length > 0 && <h2> You have {unreadMessages.length} unread messages. </h2>}{' '}
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/ozJddz?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_VwWYppo?editors=0010)**](https://codepen.io/bgoonz/pen/VwWYppo?editors=0010 )
  
It works because in JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.
  
Therefore, if the condition is `true`, the element right after `&&` will appear in the output. If it is `false`, React will ignore and skip it.
  
Note that returning a falsy expression will still cause the element after `&&` to be skipped but will return the falsy expression. In the example below, `<div>0</div>` will be returned by the render method.
  
```
render() {
  const count = 0;  return (
    <div>      { count && <h1>Messages: {count}</h1>}    </div>);
}
```
  
---
  
---
  
###  Inline If-Else with Conditional Operator
  
  
Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `[condition ? true : false](<https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator> )`.
  
> - In the example below, we use it to conditionally render a small block of text.
  
```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    </div>);
}
```
  
It can also be used for larger expressions although it is less obvious what's going on:
  
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>      {isLoggedIn        ? <LogoutButton onClick={this.handleLogoutClick} />        : <LoginButton onClick={this.handleLoginClick} />      }
    </div>  );
}
```
  
Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to [extract a component](https://reactjs.org/docs/components-and-props.html#extracting-components ).
  
---
  
---
  
###  Preventing Component from Rendering
  
  
> - In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return `null` instead of its render output.
  
> - In the example below, the `<WarningBanner />` is rendered depending on the value of the prop called `warn`. If the value of the prop is `false`, then the component does not render:
  
---

```js
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return <div className="warning"> Warning!</div>;
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState((state) => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                {' '}
                <WarningBanner warn={this.state.showWarning} /> <button onClick={this.handleToggleClick}>
                    {' '}
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>{' '}
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)
  
Returning `null` from a component's `render` method does not affect the firing of the component's lifecycle methods. For instance `componentDidUpdate` will still be called.
  
---
  
---
  
###  **Lists and Keys**
  
  
---
  
###  First, let's review how you transform lists in JavaScript.
  
  
Given the code below, we use the `[map()](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map> )` function to take an array of `numbers` and double their values. We assign the new array returned by `map()` to the variable `doubled` and log it:
  
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```
  
- This code logs `[2, 4, 6, 8, 10]` to the console.
  
> - In React, transforming arrays into lists of [elements](https://reactjs.org/docs/rendering-elements.html ) is nearly identical.
  
---
  
---
  
###  Rendering Multiple Components
  
  
You can build collections of elements and [include them in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx ) using curly braces `{}`.
  
Below, we loop through the `numbers` array using the JavaScript `[map()](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map> )` function. We return a `<li>` element for each item. Finally, we assign the resulting array of elements to `listItems`:
  
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
```
  
> We include the entire `listItems` array inside a `<ul>` element, and [render it to the DOM](https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom ):
  
```js
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/GjPyQr?editors=0011"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_eYRmvvr?editors=0011)**](https://codepen.io/bgoonz/pen/eYRmvvr?editors=0011 )
  
This code displays a bullet list of numbers between 1 and 5.
  
---
  
---
  
###  Basic List Component
  
  
Usually you would render lists inside a [component](https://reactjs.org/docs/components-and-props.html ).
  
#####  We can refactor the previous example into a component that accepts an array of `numbers` and outputs a list of elements.
  
  
---

```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li>{number}</li>);
    return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));
```

> When you run this code, you'll be given a warning that a key should be provided for list items. A "key" is a special string attribute you need to include when creating lists of elements. We'll discuss why it's important in the next section.

Let's assign a `key` to our list items inside `numbers.map()` and fix the missing key issue.

---

```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li key={number.toString()}> {number}</li>);
    return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/jrXYRR?editors=0011"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_yLXyMMP?editors=0011)**](https://codepen.io/bgoonz/pen/yLXyMMP?editors=0011 )
  
---
  
---
  
###  Keys
  
  
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
  
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}> {number}</li>
));
```
  
- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:
  
```js
const todoItems = todos.map((todo) => <li key={todo.id}> {todo.text}</li>);
```
  
> When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:
  
```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs  <li key={index}>    {todo.text}
  </li>);
```
  
> We don't recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. Check out Robin Pokorny's article for an [in-depth explanation on the negative impacts of using an index as a key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318 ). If you choose not to assign an explicit key to list items then React will default to using indexes as keys.
  
Here is an [in-depth explanation about why keys are necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children ) if you're interested in learning more.
  
---
  
---
  
###  Extracting Components with Keys
  
  
Keys only make sense in the context of the surrounding array.
  
#####  For example, if you [extract](https://reactjs.org/docs/components-and-props.html#extracting-components ) a `ListItem` component, you should keep the key on the `<ListItem />` elements in the array rather than on the `<li>` element in the `ListItem` itself.
  
  
**Example: Incorrect Key Usage**
  
```
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:    <li key={value.toString()}>      {value}
    </li>);
}
  
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:    <ListItem value={number} />  );
  return (
    <ul>      {listItems}
    </ul>);
}
  
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
  
**Example: Correct Key Usage**
  
```
function ListItem(props) {
  // Correct! There is no need to specify the key here:  return <li>{props.value}</li>;}
  
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.    <ListItem key={number.toString()} value={number} />  );
  return (
    <ul>      {listItems}
    </ul>);
}
  
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)
  
A good rule of thumb is that elements inside the `map()` call need keys.
  
---
  
---
  
###  Keys Must Only Be Unique Among Siblings
  
  
Keys used within arrays should be unique among their siblings. However, they don't need to be globally unique. We can use the same keys when we produce two different arrays:
  
---

```js
function Blog(props) {
    const sidebar = (
        <ul>
            {' '}
            {props.posts.map((post) => (
                <li key={post.id}> {post.title}</li>
            ))}
        </ul>
    );
    const content = props.posts.map((post) => (
        <div key={post.id}>
            {' '}
            <h3>{post.title}</h3> <p>{post.content}</p>{' '}
        </div>
    ));
    return (
        <div>
            {' '}
            {sidebar} <hr /> {content}{' '}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'));
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/NRZYGN?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_mdwyWWy?editors=0010)**](https://codepen.io/bgoonz/pen/mdwyWWy?editors=0010 )
  
Keys serve as a hint to React but they don't get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
  
```js
const content = posts.map((post) => (
  <Post key={post.id} id={post.id} title={post.title} />
));
```
  
> With the example above, the `Post` component can read `props.id`, but not `props.key`.
  
---
  
---
  
###  Embedding map() in JSX
  
  
> - In the examples above we declared a separate `listItems` variable and included it in JSX:
  
---

```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
    return <ul> {listItems}</ul>;
}
```

JSX allows [embedding any expression](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) in curly braces so we could inline the `map()` result:

---

```js
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {' '}
            {numbers.map((number) => (
                <ListItem key={number.toString()} value={number} />
            ))}{' '}
        </ul>
    );
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/BLvYrB?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_JjJoWEw?editors=0010)**](https://codepen.io/bgoonz/pen/JjJoWEw?editors=0010 )
  
Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the `map()` body is too nested, it might be a good time to [extract a component](https://reactjs.org/docs/components-and-props.html#extracting-components ).
  
---
  
---
  
###  **Forms**
  
  
---
  
###  HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. ##### For example, this form in plain HTML accepts a single name:
  
  
```js
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
  
- This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called "controlled components".
  
---
  
---
  
###  Controlled Components
  
  
> - In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `[setState()](<https://reactjs.org/docs/react-component.html#setstate> )`.
  
#####  We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".
  
  
#####  For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
  
  
```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        <label>
          {" "}
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label> <input type="submit" value="Submit" />{" "}
      </form>
    );
  }
}
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/VmmPgp?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_rNwayjv?editors=0010)**](https://codepen.io/bgoonz/pen/rNwayjv?editors=0010 )
  
Since the `value` attribute is set on our form element, the displayed value will always be `this.state.value`, making the React state the source of truth. Since `handleChange` runs on every keystroke to update the React state, the displayed value will update as the user types.
  
With a controlled component, the input's value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.
  
---
  
---
  
###  The textarea Tag
  
  
> - In HTML, a `<textarea>` element defines its text by its children:
  
```js
<textarea>Hello there, this is some text in a text area</textarea>
```
  
####  In React, a `<textarea>` uses a `value` attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input:
  
  
```js
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element.",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        <label>
          {" "}
          Essay:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label> <input type="submit" value="Submit" />{" "}
      </form>
    );
  }
}
```
  
Notice that `this.state.value` is initialized in the constructor, so that the text area starts off with some text in it.
  
---
  
---
  
###  The select Tag
  
  
> - In HTML, `<select>` creates a drop-down list. ##### For example, this HTML creates a drop-down list of flavors:
  
`<select><option value="grapefruit">Grapefruit</option><option value="lime">Lime</option><option selected value="coconut">Coconut</option><option value="mango">Mango</option></select>`
  
Note that the Coconut option is initially selected, because of the `selected` attribute. React, instead of using this `selected` attribute, uses a `value` attribute on the root `select` tag. This is more convenient in a controlled component because you only need to update it in one place. ##### For example:
  
```js
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        <label>
          {" "}
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            {" "}
            <option value="grapefruit">Grapefruit</option> <option value="lime">
              Lime
            </option> <option value="coconut">Coconut</option> <option value="mango">
              Mango
            </option>{" "}
          </select>{" "}
        </label> <input type="submit" value="Submit" />{" "}
      </form>
    );
  }
}
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/JbbEzX?editors=0010)
  
Overall, this makes it so that `<input type="text">`, `<textarea>`, and `<select>` all work very similarly - they all accept a `value` attribute that you can use to implement a controlled component.
  
> NoteYou can pass an array into the value attribute, allowing you to select multiple options in a select tag:\<select multiple={true} value={\['B', 'C']}>
  
---
  
---
  
###  The file input Tag
  
  
> - In HTML, an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications ).
  
`<input type="file" />`
  
Because its value is read-only, it is an **uncontrolled** component in React. It is discussed together with other uncontrolled components [later in the documentation](https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag ).
  
---
  
---
  
###  Handling Multiple Inputs
  
  
When you need to handle multiple controlled `input` elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.
  
#####  For example:
  
  
```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
      <form>
        {" "}
        <label>
          {" "}
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />{" "}
        </label> <br /> <label>
          {" "}
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />{" "}
        </label>{" "}
      </form>
    );
  }
}
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/wgedvV?editors=0010)
  
Note how we used the ES6 [computed property name](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names ) syntax to update the state key corresponding to the given input name:
  
```js
this.setState({
  [name]: value,
});
```
  
It is equivalent to this ES5 code:
  
```js
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```
  
Also, since `setState()` automatically [merges a partial state into the current state](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged ), we only needed to call it with the changed parts.
  
---
  
---
  
###  Controlled Input Null Value
  
  
Specifying the value prop on a [controlled component](https://reactjs.org/docs/forms.html#controlled-components ) prevents the user from changing the input unless you desire so. If you've specified a `value` but the input is still editable, you may have accidentally set `value` to `undefined` or `null`.
  
The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)
  
```
ReactDOM.render(<input value="hi" />, mountNode);
  
setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```
  
---
  
---
  
###  Alternatives to Controlled Components
  
  
It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html ), an alternative technique for implementing input forms.
  
---
  
---
  
###  Fully-Fledged Solutions
  
  
If you're looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, [Formik](https://jaredpalmer.com/formik ) is one of the popular choices. However, it is built on the same principles of controlled components and managing state --- so don't neglect to learn them.
  
---
  
---
  
###  **Lifting State Up**
  
  
---
  
###  Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let's see how this works in action.
  
  
> - In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.
  
#####  We will start with a component called `BoilingVerdict`. It accepts the `celsius` temperature as a prop, and prints whether it is enough to boil the water:
  
  
---

```js
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
```

Next, we will create a component called `Calculator`. It renders an `<input>` that lets you enter the temperature, and keeps its value in `this.state.temperature`.

Additionally, it renders the `BoilingVerdict` for the current input value.

```
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};  }

  handleChange(e) {
    this.setState({temperature: e.target.value});  }

  render() {
    const temperature = this.state.temperature;    return (
      <fieldset>        <legend>Enter temperature in Celsius:</legend>        <input          value={temperature}          onChange={this.handleChange} />        <BoilingVerdict          celsius={parseFloat(temperature)} />      </fieldset>);
  }
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/ZXeOBm?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_zYzxZoL?editors=0010)**](https://codepen.io/bgoonz/pen/zYzxZoL?editors=0010 )
  
---
  
---
  
###  Adding a Second Input
  
  
Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.
  
#####  We can start by extracting a `TemperatureInput` component from `Calculator`. We will add a new `scale` prop to it that can either be `"c"` or `"f"`:
  
  
```js
const scaleNames = { c: "Celsius", f: "Fahrenheit" };
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }
  
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  
  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        {" "}
        <legend>Enter temperature in {scaleNames[scale]}:</legend> <input
          value={temperature}
          onChange={this.handleChange}
        />{" "}
      </fieldset>
    );
  }
}
```
  
#####  We can now change the `Calculator` to render two separate temperature inputs:
  
  
```js
class Calculator extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <TemperatureInput scale="c" /> <TemperatureInput scale="f" />{" "}
      </div>
    );
  }
}
```
  
<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/jGBryx?editors=0010"></iframe>
  
[**TRY IT ON CODEPEN \_**(pen=**\_QWgwpGv?editors=0010)**](https://codepen.io/bgoonz/pen/QWgwpGv?editors=0010 )
  
#####  We have two inputs now, but when you enter the temperature in one of them, the other doesn't update. This contradicts our requirement: we want to keep them in sync.
  
  
#####  We also can't display the `BoilingVerdict` from `Calculator`. The `Calculator` doesn't know the current temperature because it is hidden inside the `TemperatureInput`.
  
  
---
  
---
  
###  Writing Conversion Functions
  
  
First, we will write two functions to convert from Celsius to Fahrenheit and back:
  
---

```js
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
```

-   These two functions convert numbers. We will write another function that takes a string `temperature` and a converter function as arguments and returns a string. We will use it to calculate the value of one input based on the other input.

It returns an empty string on an invalid `temperature`, and it keeps the output rounded to the third decimal place:

---

```js
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
```

##### For example, `tryConvert('abc', toCelsius)` returns an empty string, and `tryConvert('10.22', toFahrenheit)` returns `'50.396'`.

---

---

### Lifting State Up

Currently, both `TemperatureInput` components independently keep their values in the local state:

```js
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};  }

  handleChange(e) {
    this.setState({temperature: e.target.value});  }

  render() {
    const temperature = this.state.temperature;    // ...
```

However, we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.

> -   In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up". We will remove the local state from the `TemperatureInput` and move it into the `Calculator` instead.

If the `Calculator` owns the shared state, it becomes the "source of truth" for the current temperature in both inputs. It can instruct them both to have values that are consistent with each other. Since the props of both `TemperatureInput` components are coming from the same parent `Calculator` component, the two inputs will always be in sync.

Let's see how this works step by step.

First, we will replace `this.state.temperature` with `this.props.temperature` in the `TemperatureInput` component. For now, let's pretend `this.props.temperature` already exists, although we will need to pass it from the `Calculator` in the future:

```js
  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;    // ...
```

##### We know that [props are read-only](https://reactjs.org/docs/components-and-props.html#props-are-read-only). When the `temperature` was in the local state, the `TemperatureInput` could just call `this.setState()` to change it. However, now that the `temperature` is coming from the parent as a prop, the `TemperatureInput` has no control over it.

> -   In React, this is usually solved by making a component "controlled". Just like the DOM `<input>` accepts both a `value` and an `onChange` prop, so can the custom `TemperatureInput` accept both `temperature` and `onTemperatureChange` props from its parent `Calculator`.

Now, when the `TemperatureInput` wants to update its temperature, it calls `this.props.onTemperatureChange`:

```js
  handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);    // ...
```

> Note:There is no special meaning to either temperature or onTemperatureChange prop names in custom components. We could have called them anything else, like name them value and onChange which is a common convention.

The `onTemperatureChange` prop will be provided together with the `temperature` prop by the parent `Calculator` component. It will handle the change by modifying its own local state, thus re-rendering both inputs with the new values. We will look at the new `Calculator` implementation very soon.

Before diving into the changes in the `Calculator`, let's recap our changes to the `TemperatureInput` component. We have removed the local state from it, and instead of reading `this.state.temperature`, we now read `this.props.temperature`. Instead of calling `this.setState()` when we want to make a change, we now call `this.props.onTemperatureChange()`, which will be provided by the `Calculator`:

```js
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                {' '}
                <legend>Enter temperature in {scaleNames[scale]}:</legend> <input value={temperature} onChange={this.handleChange} />{' '}
            </fieldset>
        );
    }
}
```

Now let's turn to the `Calculator` component.

##### We will store the current input's `temperature` and `scale` in its local state. This is the state we "lifted up" from the inputs, and it will serve as the "source of truth" for both of them. It is the minimal representation of all the data we need to know in order to render both inputs.

##### For example, if we enter 37 into the Celsius input, the state of the `Calculator` component will be:

```js
{
  temperature: '37',
  scale: 'c'
}
```

If we later edit the Fahrenheit field to be 212, the state of the `Calculator` will be:

```js
{
  temperature: '212',
  scale: 'f'
}
```

##### We could have stored the value of both inputs but it turns out to be unnecessary. It is enough to store the value of the most recently changed input, and the scale that it represents. We can then infer the value of the other input based on the current `temperature` and `scale` alone.

The inputs stay in sync because their values are computed from the same state:

```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});  }

  render() {
    const scale = this.state.scale;    const temperature = this.state.temperature;    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;return (
      <div>        <TemperatureInputscale="c"          temperature={celsius}          onTemperatureChange={this.handleCelsiusChange} />        <TemperatureInputscale="f"          temperature={fahrenheit}          onTemperatureChange={this.handleFahrenheitChange} />        <BoilingVerdict          celsius={parseFloat(celsius)} />      </div>);
  }
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/WZpxpz?editors=0010)
  
Now, no matter which input you edit, `this.state.temperature` and `this.state.scale` in the `Calculator` get updated. One of the inputs gets the value as is, so any user input is preserved, and the other input value is always recalculated based on it.
  
Let's recap what happens when you edit an input:
  
- React calls the function specified as `onChange` on the DOM `<input>`. In our case, this is the `handleChange` method in the `TemperatureInput` component.
- The `handleChange` method in the `TemperatureInput` component calls `this.props.onTemperatureChange()` with the new desired value. Its props, including `onTemperatureChange`, were provided by its parent component, the `Calculator`.
- When it previously rendered, the `Calculator` had specified that `onTemperatureChange` of the Celsius `TemperatureInput` is the `Calculator`'s `handleCelsiusChange` method, and `onTemperatureChange` of the Fahrenheit `TemperatureInput` is the `Calculator`'s `handleFahrenheitChange` method. So either of these two `Calculator` methods gets called depending on which input we edited.
- Inside these methods, the `Calculator` component asks React to re-render itself by calling `this.setState()` with the new input value and the current scale of the input we just edited.
- React calls the `Calculator` component's `render` method to learn what the UI should look like. The values of both inputs are recomputed based on the current temperature and the active scale. The temperature conversion is performed here.
- React calls the `render` methods of the individual `TemperatureInput` components with their new props specified by the `Calculator`. It learns what their UI should look like.
- React calls the `render` method of the `BoilingVerdict` component, passing the temperature in Celsius as its props.
- React DOM updates the DOM with the boiling verdict and to match the desired input values. The input we just edited receives its current value, and the other input is updated to the temperature after conversion.
  
Every update goes through the same steps so the inputs stay in sync.
  
---
  
---
  
###  Lessons Learned
  
  
There should be a single "source of truth" for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the [top-down data flow](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down ).
  
Lifting state involves writing more "boilerplate" code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state "lives" in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.
  
If something can be derived from either props or state, it probably shouldn't be in the state. ##### For example, instead of storing both `celsiusValue` and `fahrenheitValue`, we store just the last edited `temperature` and its `scale`. The value of the other input can always be calculated from them in the `render()` method. This lets us clear or apply rounding to the other field without losing any precision in the user input.
  
When you see something wrong in the UI, you can use [React Developer Tools](https://github.com/facebook/react/tree/main/packages/react-devtools ) to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:
  
![https://reactjs.org/ef94afc3447d75cdc245c77efb0d63be/react-devtools-state.gif](https://reactjs.org/ef94afc3447d75cdc245c77efb0d63be/react-devtools-state.gif )
  
---
  
---
  
###  **Composition vs Inheritance**
  
  
---
  
###  React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.
  
  
> - In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.
  
---
  
---
  
###  Containment
  
  
Some components don't know their children ahead of time. This is especially common for components like `Sidebar` or `Dialog` that represent generic "boxes".
  
#####  We recommend that such components use the special `children` prop to pass children elements directly into their output:
  
  
---

```js
function FancyBorder(props) {
    return <div className={'FancyBorder FancyBorder-' + props.color}> {props.children} </div>;
}
```

-   This lets other components pass arbitrary children to them by nesting the JSX:

---

```js
function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            {' '}
            <h1 className="Dialog-title"> Welcome </h1> <p className="Dialog-message"> Thank you for visiting our spacecraft! </p>{' '}
        </FancyBorder>
    );
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/ozqNOV?editors=0010)
  
Anything inside the `<FancyBorder>` JSX tag gets passed into the `FancyBorder` component as a `children` prop. Since `FancyBorder` renders `{props.children}` inside a `<div>`, the passed elements appear in the final output.
  
While this is less common, sometimes you might need multiple "holes" in a component. In such cases you may come up with your own convention instead of using `children`:
  
---

```js


function SplitPane(props) {
  return (
    <div className="SplitPane">      <div className="SplitPane-left">        {props.left}      </div>      <div className="SplitPane-right">        {props.right}      </div>    </div>);
}

function App() {
  return (
    <SplitPaneleft={
        <Contacts />      }right={
        <Chat />      } />);
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/gwZOJp?editors=0010)
  
React elements like `<Contacts />` and `<Chat />` are just objects, so you can pass them as props like any other data. This approach may remind you of "slots" in other libraries but there are no limitations on what you can pass as props in React.
  
---
  
---
  
###  Specialization
  
  
Sometimes we think about components as being "special cases" of other components. ##### For example, we might say that a `WelcomeDialog` is a special case of `Dialog`.
  
> - In React, this is also achieved by composition, where a more "specific" component renders a more "generic" one and configures it with props:
  
---

```js
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            {' '}
            <h1 className="Dialog-title"> {props.title} </h1> <p className="Dialog-message"> {props.message} </p>{' '}
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />;
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/kkEaOZ?editors=0010)
  
Composition works equally well for components defined as classes:
  
---

```js
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            {' '}
            <h1 className="Dialog-title"> {props.title}</h1> <p className="Dialog-message"> {props.message}</p> {props.children}{' '}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                {' '}
                <input value={this.state.login} onChange={this.handleChange} /> <button onClick={this.handleSignUp}> Sign Me Up! </button>{' '}
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}
```

<iframe frameborder="0" width="100%" height="800px" src="https://codepen.io/gaearon/pen/gwZbYa?editors=0010)
  
---
  
---
  
###  So What About Inheritance?
  
  
At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.
  
Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
  
If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.
  
---
  
---
  
###  **Thinking in React**
  
  
---
  
###  React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.
  
  
One of the many great parts of React is how it makes you think about apps as you build them. In this document, we'll walk you through the thought process of building a searchable product data table using React.
  
---
  
---
  
###  Start With A Mock
  
  
Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:
  
![https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png](https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png )
  
Our JSON API returns some data that looks like this:
  
```js
[
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
```
  
---
  
---
  
###  Step 1: Break The UI Into A Component Hierarchy
  
  
The first thing you'll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you're working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!
  
But how do you know what should be its own component? Use the same techniques for deciding if you should create a new function or object. One such technique is the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle ), that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.
  
Since you're often displaying a JSON data model to a user, you'll find that if your model was built correctly, your UI (and therefore your component structure) will map nicely. That's because UI and data models tend to adhere to the same _information architecture_. Separate your UI into components, where each component matches one piece of your data model.
  
![https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png](https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png )
  
You'll see here that we have five components in our app. We've italicized the data each component represents.
  
1. **`FilterableProductTable` (orange):** contains the entirety of the example
2. **`SearchBar` (blue):** receives all _user input_
3. **`ProductTable` (green):** displays and filters the _data collection_ based on _user input_
4. **`ProductCategoryRow` (turquoise):** displays a heading for each _category_
5. **`ProductRow` (red):** displays a row for each _product_
  
If you look at `ProductTable`, you'll see that the table header (containing the "Name" and "Price" labels) isn't its own component. This is a matter of preference, and there's an argument to be made either way. For this example, we left it as part of `ProductTable` because it is part of rendering the _data collection_ which is `ProductTable`'s responsibility. However, if this header grows to be complex (e.g., if we were to add affordances for sorting), it would certainly make sense to make this its own `ProductTableHeader` component.
  
Now that we've identified the components in our mock, let's arrange them into a hierarchy. Components that appear within another component in the mock should appear as a child in the hierarchy:
  
- `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    - `ProductCategoryRow`
    - `ProductRow`
  
---
  
---
  
###  Step 2: Build A Static Version in React
  
  
See the Pen [Thinking In React: Step 2)\*\*](https://codepen.io/gaearon/pen/BwWzwm ) on [CodePen)\*\*](https://codepen.io ).
  
Now that you have your component hierarchy, it's time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It's best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We'll see why.
  
To build a static version of your app that renders your data model, you'll want to build components that reuse other components and pass data using _props_. _props_ are a way of passing data from parent to child. If you're familiar with the concept of _state_, **don't use state at all** to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don't need it.
  
You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with `FilterableProductTable`) or with the ones lower in it (`ProductRow`). In simpler examples, it's usually easier to go top-down, and on larger projects, it's easier to go bottom-up and write tests as you build.
  
At the end of this step, you'll have a library of reusable components that render your data model. The components will only have `render()` methods since this is a static version of your app. The component at the top of the hierarchy (`FilterableProductTable`) will take your data model as a prop. If you make a change to your underlying data model and call `ReactDOM.render()` again, the UI will be updated. You can see how your UI is updated and where to make changes. React's **one-way data flow** (also called _one-way binding_) keeps everything modular and fast.
  
Refer to the [React docs](https://reactjs.org/docs/ ) if you need help executing this step.
  
---
  
---
  
###  A Brief Interlude: Props vs State
  
  
There are two types of "model" data in React: props and state. It's important to understand the distinction between the two; skim [the official React docs](https://reactjs.org/docs/state-and-lifecycle.html ) if you aren't sure what the difference is. See also [FAQ: What is the difference between state and props?](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props )
  
---
  
---
  
###  Step 3: Identify The Minimal (but complete) Representation Of UI State
  
  
To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with **state**.
  
To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is [DRY: _Don't Repeat Yourself_](https://en.wikipedia.org/wiki/Don 't_repeat_yourself). Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. ##### For example, if you're building a TODO list, keep an array of the TODO items around; don't keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.
  
Think of all the pieces of data in our example application. We have:
  
- The original list of products
- The search text the user has entered
- The value of the checkbox
- The filtered list of products
  
Let's go through each one and figure out which one is state. Ask three questions about each piece of data:
  
1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it remain unchanged over time? If so, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it isn't state.
  
The original list of products is passed in as props, so that's not state. The search text and the checkbox seem to be state since they change over time and can't be computed from anything. And finally, the filtered list of products isn't state because it can be computed by combining the original list of products with the search text and value of the checkbox.
  
So finally, our state is:
  
- The search text the user has entered
- The value of the checkbox
  
---
  
---
  
###  Step 4: Identify Where Your State Should Live
  
  
See the Pen [Thinking In React: Step 4)\*\*](https://codepen.io/gaearon/pen/qPrNQZ ) on [CodePen)\*\*](https://codepen.io ).
  
OK, so we've identified what the minimal set of app state is. Next, we need to identify which component mutates, or _owns_, this state.
  
Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. **This is often the most challenging part for newcomers to understand,** so follow these steps to figure it out:
  
For each piece of state in your application:
  
- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
  
Let's run through this strategy for our application:
  
- `ProductTable` needs to filter the product list based on state and `SearchBar` needs to display the search text and checked state.
- The common owner component is `FilterableProductTable`.
- It conceptually makes sense for the filter text and checked value to live in `FilterableProductTable`
  
Cool, so we've decided that our state lives in `FilterableProductTable`. First, add an instance property `this.state = {filterText: '', inStockOnly: false}` to `FilterableProductTable`'s `constructor` to reflect the initial state of your application. Then, pass `filterText` and `inStockOnly` to `ProductTable` and `SearchBar` as a prop. Finally, use these props to filter the rows in `ProductTable` and set the values of the form fields in `SearchBar`.
  
You can start seeing how your application will behave: set `filterText` to `"ball"` and refresh your app. You'll see that the data table is updated correctly.
  
---
  
---
  
###  Step 5: Add Inverse Data Flow
  
  
See the Pen [Thinking In React: Step 5)\*\*](https://codepen.io/gaearon/pen/LzWZvb ) on [CodePen)\*\*](https://codepen.io ).
  
So far, we've built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it's time to support data flowing the other way: the form components deep in the hierarchy need to update the state in `FilterableProductTable`.
  
React makes this data flow explicit to help you understand how your program works, but it does require a little more typing than traditional two-way data binding.
  
If you try to type or check the box in the current version of the example, you'll see that React ignores your input. This is intentional, as we've set the `value` prop of the `input` to always be equal to the `state` passed in from `FilterableProductTable`.
  
Let's think about what we want to happen. We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, `FilterableProductTable` will pass callbacks to `SearchBar` that will fire whenever the state should be updated. We can use the `onChange` event on the inputs to be notified of it. The callbacks passed by `FilterableProductTable` will call `setState()`, and the app will be updated.
  
---
  
---
  
###  And That's It
  
  
Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you're used to, remember that code is read far more than it's written, and it's less difficult to read this modular, explicit code. As you start to build large libraries of components, you'll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)
  
[Advanced Content](https://www.notion.so/Advanced-Content-fbe1ec3ca3544951b5763b051b843949 )
  
[React Component](https://www.notion.so/React-Component-3dc17bc49a8e4d7e89efcc1281e747d9 )
  
<details>
  
---
  
---
