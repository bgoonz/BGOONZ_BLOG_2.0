Basic React Tutorial
====================

Random Things to Remember

------------------------------------------------------------------------

### Basic React Tutorial

#### Random Things to Remember

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

#### Using `()` implicitly returns components.Role of `index.js` is to *render* your application.The reference to `root` comes from a div in the body of your public html file.State of a component is simply a regular JS Object.Class Components require `render()` method to return JSX.Functional Components directly return JSX.`Class` is `className` in React.When parsing for an integer just chain `Number.parseInt("123")`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*16IltJu5wXjzgXyU.gif" class="graf-image" /></figure>-   <span id="3b86">**Use ternary operator if you want to make a conditional inside a fragment.**</span>

<!-- -->

    { x === y ? <div>Naisu</div> : <div>Not Naisu</div>; }

    Purpose of React.Fragment is to allow you to create groups of children without adding an extra dom element.

-   <span id="5cbe">**React** manages the creation and updating of DOM nodes in your Web page.</span>
-   <span id="d253">All it does is dynamically render stuff into your DOM.</span>
-   <span id="093c">What it doesn’t do:</span>
-   <span id="bd7d">Ajax</span>
-   <span id="7f06">Services</span>
-   <span id="b1b9">Local Storage</span>
-   <span id="47a9">Provide a CSS framework</span>
-   <span id="57d1">**React** is unopinionated</span>
-   <span id="b277">Just contains a few rules for developers to follow, and it just works.</span>
-   <span id="dafd">**JSX** : Javascript Extension is a language invented to help write React Applications (looks like a mixture of JS and HTML)</span>
-   <span id="fc46">Here is an overview of the difference between rendering out vanilla JS to create elements, and JSX:</span>

<!-- -->

-   <span id="eec2">This may seem like a lot of code but when you end up building many components, it becomes nice to put each of those functions/classes into their own files to organize your code.  
    **Using tools with React**</span>
-   <span id="6c32">`React DevTools` : New tool in your browser to see ow React is working in the browser</span>
-   <span id="3f86">`create-react-app` : Extensible command-line tool to help generate standard React applications.</span>
-   <span id="da3c">`Webpack` : In between tool for dealing with the extra build step involved.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*4O0NPGEa-1NcDOIA.png" class="graf-image" /></figure>-   <span id="9d53">**HMR** : (Hot Module Replacement) When you make changes to your source code the changes are delivered in real-time.</span>
-   <span id="8d5b">React Developers created something called `Flux Architecture` to moderate how their web page consumes and modifies data received from back-end API's.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*hXODC_ZsM-egMFI4.png" class="graf-image" /></figure>-   <span id="97a3">**Choosing React**</span>
-   <span id="1589">Basically, React is super important to learn and master.</span>

### React Concepts and Features

There are many benefits to using React over just Vanilla JS.

-   <span id="6bac">`Modularity`</span>
-   <span id="3fc9">To avoid the mess of many event listeners and template strings, React gives you the benefit of a lot of modularity.</span>
-   <span id="20d5">`Easy to start`</span>
-   <span id="8e3e">No specials tools are needed to use Basic React.</span>
-   <span id="f1a2">You can start working directly with `createElement` method in React.</span>
-   <span id="2a43">`Declarative Programming`</span>
-   <span id="c587">React is declarative in nature, utilizing either it’s build in createElement method or the higher-level language known as JSX.</span>
-   <span id="866d">`Reusability`</span>
-   <span id="eff3">Create elements that can be re-used over and over.  
    **One-flow of data**</span>
-   <span id="5c6e">React apps are built as a combination of parent and child components.</span>
-   <span id="5a30">Parents can have one or more child components, all children have parents.</span>
-   <span id="d6c8">Data is never passed from child to the parent.</span>
-   <span id="dc54">`Virtual DOM` : React provides a Virtual DOM that acts as an agent between the real DOM and the developer to help debug, maintain, and provide general use.</span>
-   <span id="90bf">Due to this usage, React handles web pages much more intelligently; making it one of the speediest Front End Libraries available.</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 1, 2021](https://medium.com/p/647ba595e607).

<a href="https://medium.com/@bryanguner/react-tutorial-from-basics-647ba595e607" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
