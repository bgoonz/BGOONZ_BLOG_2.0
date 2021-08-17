## React Hooks and other methods

Despite the wide availability of npm packages, at times, we might need to rely on a few external libraries that require us to import some JS files.

For features used across the application, we can simply add JS files to `head` using the `<script>` tag in our global `index.html` file.

However, for the features that are used in specific components, this makes no sense. Since React doesn’t support the `<script>` tag in `Component`_,_ here are a few ways of appending JS files to specific components.

This is the easiest way of loading JS files for a beginner.

[React-script-tag](https://www.npmjs.com/package/react-script-tag) is an npm package that provides a React `<script>` tag that supports universal rendering. All standard `<script>` [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) like `async`, `src`, `type`, and `defer` are supported, including `onLoad` and `onError` callbacks.

**import** ScriptTag **from** 'react-script-tag';const Demo = props => (  
**<**ScriptTag type**\=**"text/javascript" src**\=**"/path/to/resource.js" **/>  
)**

We also have an `isHydrating` flag, which is a `boolean` value. It defaults to `false` and must be `true` if the client is `hydrate()`ing the server render.

You can read more about `hydrate()` [in the React docs](https://reactjs.org/docs/react-dom.html#hydrate).

[Helmet](https://www.npmjs.com/package/react-helmet) is a React component that manages all your changes to the document head. It is another simple, beginner-friendly package that supports both server-side and client-side rendering.

[Helmet](https://github.com/nfl/react-helmet) takes plain HTML tags and outputs plain HTML tags.

Note: React Helmet is heavier than react-script-tag, so I wouldn’t recommend using it if your only purpose is to use `script` tags.

Though the above solutions are simple to achieve, it requires us to add additional packages that might bulk up our application. If you have some experience coding, then you can do:

If you are appending JS files in more than one component, it is best to have a custom file that returns a function to do this.

In your component:

If you don’t want to retain the appended JS file on page redirection/reload, you should remove the script in the `componentDidUnmount` lifecycle method. To achieve this:

And in your component:

If you are a fan of Hooks in React, then `useEffect` is a great way to append external JS files. You can read my article on [using the Effect Hook](https://medium.com/better-programming/tips-for-using-reacts-useeffect-effectively-dfe6ae951421?source=friends_link&sk=87e8a3137afd3b78b22651508f340c57).

To give a gist `useEffect` is similar to `componentDidMount` and `componentDidUpdate` life cycle methods in React class components.

If your effect returns a function, React will run it when it is time to clean up, basically the `componentDidUnmount` lifecycle method. This is where we will remove the appended script.

React allows us to build [custom Hooks](https://reactjs.org/docs/hooks-custom.html), which let us extract component logic into reusable functions. The logic to append an external JS file to a component could be stored as a custom Hook as below:

Which could be used in components as below:

import importScript from 'customHooks/importScript';const Demo = props => {  
 importScript("/path/to/resource.js");  
}
