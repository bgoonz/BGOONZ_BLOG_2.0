Fundamental Concepts In React That Will Probably Come Up On An Interview
========================================================================

Incomplete Article

------------------------------------------------------------------------

### Fundamental Concepts In React That Will Probably Come Up On An Interview

#### Incomplete Article

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

**Explain how React uses a tree data structure called the “virtual DOM” to model the DOM**

> ↠The Virtual DOM is an in-memory tree representation of the browser’s Document Object Model. React’s philosophy is to interact with the Virtual DOM instead of the regular DOM for developer ease and performance.

> ↠By abstracting the key concepts from the DOM, React is able to expose additional tooling and functionality increasing developer ease.

> ↠By trading off the additional memory requirements of the Virtual DOM, React is able to optimize for efficient subtree comparisons, resulting in fewer, simpler updates to the less efficient DOM. The result of these tradeoffs is improved performance.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*iVSdRNTWikevU4dG.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### **Describe how JSX transforms into React.createElement calls:**

#### ↠JSX is a special format to let you construct virtual DOM nodes using familiar HTML-like syntax. You can put the JSX directly into your .js files, however you must run the JSX through a pre-compiler like <a href="https://babeljs.io/" class="markup--anchor markup--h4-anchor">Babel</a> in order for the browser to understand it.

#### ↠ReactDOM.render is a simple function which accepts 2 arguments: what to render and where to render it:

------------------------------------------------------------------------

### Describe how JSX transforms into React.createElement calls:

> ↠JSX is a special format to let you construct virtual DOM nodes using familiar HTML-like syntax.

> ↠You can put the JSX directly into your .js files, however you must run the JSX through a pre-compiler like <a href="https://babeljs.io/" class="markup--anchor markup--blockquote-anchor">Babel</a> in order for the browser to understand it.

------------------------------------------------------------------------

> ***Here we initialize a Clock component using JSX instead of React.createElement .***

> Using <a href="https://babeljs.io/" class="markup--anchor markup--pullquote-anchor">Babel</a> this code is compiled to a series of recursively nested createElement calls:

### TBC…

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 29, 2021](https://medium.com/p/5495b6421287).

<a href="https://medium.com/@bryanguner/fundamental-concepts-in-react-that-will-probably-come-up-on-an-interview-5495b6421287" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
