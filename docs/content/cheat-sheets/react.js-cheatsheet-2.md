React.js cheatsheet 2
=====================

### Components

#### Components

    import React from 'react';
    import ReactDOM from 'react-dom';

{: .-setup}

    class Hello extends React.Component {
        render() {
            return <div className="message-box">Hello {this.props.name}</div>;
        }
    }

    const el = document.body;
    ReactDOM.render(<Hello name="John" />, el);

Use the [React.js jsfiddle](http://jsfiddle.net/reactjs/69z2wepo/) to start hacking. (or the unofficial [jsbin](http://jsbin.com/yafixat/edit?js,output))

#### Import multiple exports

    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

{: .-setup}


    class Hello extends Component {
      ...
    }

#### Properties

    <video fullscreen="{true}" autoplay="{false}" />

{: .-setup}


    render () {
      this.props.fullscreen
      const { fullscreen, autoplay } = this.props
      ···
    }

{: data-line="2,3”}

Use `this.props` to access properties passed to the component.

See: [Properties](https://reactjs.org/docs/tutorial.html#using-props)

#### States


    constructor(props) {
      super(props)
      this.state = { username: undefined }
    }

    this.setState({ username: 'rstacruz' });


    render () {
      this.state.username
      const { username } = this.state
      ···
    }

{: data-line="2,3”}

Use states (`this.state`) to manage dynamic data.

With [Babel](https://babeljs.io) you can use [proposal-class-fields](https://github.com/tc39/proposal-class-fields) and get rid of constructor


    class Hello extends Component {
      state = { username: undefined };
      ...
    }

See: [States](https://reactjs.org/docs/tutorial.html#reactive-state)

#### Nesting

    class Info extends Component {
        render() {
            const { avatar, username } = this.props;

            return (
                <div>
                    <UserAvatar src={avatar} />
                    <UserProfile username={username} />
                </div>
            );
        }
    }

As of React v16.2.0, fragments can be used to return multiple children without adding extra wrapping nodes to the DOM.

    import React, { Component, Fragment } from 'react';

    class Info extends Component {
        render() {
            const { avatar, username } = this.props;

            return (
                <Fragment>
                    <UserAvatar src={avatar} />
                    <UserProfile username={username} />
                </Fragment>
            );
        }
    }

{: data-line="5,6,7,8,9,10”}

Nest components to separate concerns.

See: [Composing Components](https://reactjs.org/docs/components-and-props.html#composing-components)

#### Children

    <AlertBox>
        <h1>You have pending notifications</h1>
    </AlertBox>

{: data-line="2”}

    class AlertBox extends Component {
        render() {
            return <div className="alert-box">{this.props.children}</div>;
        }
    }

{: data-line="4”}

Children are passed as the `children` property.

### Defaults

#### Setting default props

    Hello.defaultProps = {
        color: 'blue'
    };

{: data-line="1”}

See: [defaultProps](https://reactjs.org/docs/react-component.html#defaultprops)

#### Setting default state

    class Hello extends Component {
        constructor(props) {
            super(props);
            this.state = { visible: true };
        }
    }

{: data-line="4”}

Set the default state in the `constructor()`.

And without constructor using [Babel](https://babeljs.io) with [proposal-class-fields](https://github.com/tc39/proposal-class-fields).


    class Hello extends Component {
        state = { visible: true }
      }
    }

{: data-line="2”}

See: [Setting the default state](https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state)

### Other components

#### Functional components

    function MyComponent({ name }) {
        return <div className="message-box">Hello {name}</div>;
    }

{: data-line="1”}

Functional components have no state. Also, their `props` are passed as the first parameter to a function.

See: [Function and Class Components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

#### Pure components


    import React, {PureComponent} from 'react'

    class MessageBox extends PureComponent {
      ···
    }

Performance-optimized version of `React.Component`. Doesn’t rerender if props/state hasn’t changed.

See: [Pure components](https://reactjs.org/docs/react-api.html#react.purecomponent)

#### Component API

    this.forceUpdate();


    this.setState({ ... })
    this.setState(state => { ... })

    this.state;
    this.props;

These methods and properties are available for `Component` instances.

See: [Component API](http://facebook.github.io/react/docs/component-api.html)

### Lifecycle

{: .-two-column}

#### Mounting

<table><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>constructor</code> <em>(props)</em></td><td>Before rendering <a href="https://reactjs.org/docs/react-component.html#constructor">#</a></td></tr><tr class="even"><td><code>componentWillMount()</code></td><td><em>Don’t use this</em> <a href="https://reactjs.org/docs/react-component.html#componentwillmount">#</a></td></tr><tr class="odd"><td><code>render()</code></td><td>Render <a href="https://reactjs.org/docs/react-component.html#render">#</a></td></tr><tr class="even"><td><code>componentDidMount()</code></td><td>After rendering (DOM available) <a href="https://reactjs.org/docs/react-component.html#componentdidmount">#</a></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>componentWillUnmount()</code></td><td>Before DOM removal <a href="https://reactjs.org/docs/react-component.html#componentwillunmount">#</a></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>componentDidCatch()</code></td><td>Catch errors (16+) <a href="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html">#</a></td></tr></tbody></table>

Set initial the state on `constructor()`. Add DOM event handlers, timers (etc) on `componentDidMount()`, then remove them on `componentWillUnmount()`.

#### Updating

<table style="width:99%;"><colgroup><col style="width: 51%" /><col style="width: 48%" /></colgroup><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>componentDidUpdate</code> <em>(prevProps, prevState, snapshot)</em></td><td>Use <code>setState()</code> here, but remember to compare props</td></tr><tr class="even"><td><code>shouldComponentUpdate</code> <em>(newProps, newState)</em></td><td>Skips <code>render()</code> if returns false</td></tr><tr class="odd"><td><code>render()</code></td><td>Render</td></tr><tr class="even"><td><code>componentDidUpdate</code> <em>(prevProps, prevState)</em></td><td>Operate on the DOM here</td></tr></tbody></table>

Called when parents change properties and `.setState()`. These are not called for initial renders.

See: [Component specs](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops)

### Hooks (New)

{: .-two-column}

#### State Hook

    import React, { useState } from 'react';

    function Example() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    }

{: data-line="5,10”}

Hooks are a new addition in React 16.8.

See: [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

#### Declaring multiple state variables

    function ExampleWithManyStates() {
        // Declare multiple state variables!
        const [age, setAge] = useState(42);
        const [fruit, setFruit] = useState('banana');
        const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
        // ...
    }

#### Effect hook

    import React, { useState, useEffect } from 'react';

    function Example() {
        const [count, setCount] = useState(0);

        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
            // Update the document title using the browser API
            document.title = `You clicked ${count} times`;
        }, [count]);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    }

{: data-line="6,7,8,9,10”}

If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

By default, React runs the effects after every render — including the first render.

#### Building your own hooks

**Define FriendStatus**

    import React, { useState, useEffect } from 'react';

    function FriendStatus(props) {
        const [isOnline, setIsOnline] = useState(null);

        useEffect(() => {
            function handleStatusChange(status) {
                setIsOnline(status.isOnline);
            }

            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
            return () => {
                ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            };
        }, [props.friend.id]);

        if (isOnline === null) {
            return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
    }

{: data-line="11,12,13,14”}

Effects may also optionally specify how to "clean up” after them by returning a function.

**Use FriendStatus**

    function FriendStatus(props) {
        const isOnline = useFriendStatus(props.friend.id);

        if (isOnline === null) {
            return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
    }

{: data-line="2”}

See: [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

#### Hooks API Reference

Also see: [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

**Basic Hooks**

<table><thead><tr class="header"><th>Hook</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>useState</code><em>(initialState)</em></td><td></td></tr><tr class="even"><td><code>useEffect</code><em>(() =&gt; { … })</em></td><td></td></tr><tr class="odd"><td><code>useContext</code><em>(MyContext)</em></td><td>value returned from <code>React.createContext</code></td></tr></tbody></table>

Full details: [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)

**Additional Hooks**

<table style="width:99%;"><colgroup><col style="width: 36%" /><col style="width: 63%" /></colgroup><thead><tr class="header"><th>Hook</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>useReducer</code><em>(reducer, initialArg, init)</em></td><td></td></tr><tr class="even"><td><code>useCallback</code><em>(() =&gt; { … })</em></td><td></td></tr><tr class="odd"><td><code>useMemo</code><em>(() =&gt; { … })</em></td><td></td></tr><tr class="even"><td><code>useRef</code><em>(initialValue)</em></td><td></td></tr><tr class="odd"><td><code>useImperativeHandle</code><em>(ref, () =&gt; { … })</em></td><td></td></tr><tr class="even"><td><code>useLayoutEffect</code></td><td>identical to <code>useEffect</code>, but it fires synchronously after all DOM mutations</td></tr><tr class="odd"><td><code>useDebugValue</code><em>(value)</em></td><td>display a label for custom hooks in React DevTools</td></tr></tbody></table>

Full details: [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)

### DOM nodes

{: .-two-column}

#### References

    class MyComponent extends Component {
        render() {
            return (
                <div>
                    <input ref={(el) => (this.input = el)} />
                </div>
            );
        }

        componentDidMount() {
            this.input.focus();
        }
    }

{: data-line="4,9”}

Allows access to DOM nodes.

See: [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

#### DOM Events

    class MyComponent extends Component {
        render() {
            <input type="text" value={this.state.value} onChange={(event) => this.onChange(event)} />;
        }

        onChange(event) {
            this.setState({ value: event.target.value });
        }
    }

{: data-line="5,9”}

Pass functions to attributes like `onChange`.

See: [Events](https://reactjs.org/docs/events.html)

### Other features

#### Transferring props

    <VideoPlayer src="video.mp4" />

{: .-setup}

    class VideoPlayer extends Component {
        render() {
            return <VideoEmbed {...this.props} />;
        }
    }

Propagates `src="..."` down to the sub-component.

See [Transferring props](http://facebook.github.io/react/docs/transferring-props.html)

#### Top-level API


    React.createClass({ ... })
    React.isValidElement(c)

    ReactDOM.render(<Component />, domnode, [callback]);
    ReactDOM.unmountComponentAtNode(domnode);

    ReactDOMServer.renderToString(<Component />);
    ReactDOMServer.renderToStaticMarkup(<Component />);

There are more, but these are most common.

See: [React top-level API](https://reactjs.org/docs/react-api.html)

### JSX patterns

{: .-two-column}

#### Style shorthand

    const style = { height: 10 };
    return <div style={style}></div>;

    return <div style={{ margin: 0, padding: 0 }}></div>;

See: [Inline styles](https://reactjs.org/tips/inline-styles.html)

#### Inner HTML

    function markdownify() {
        return '<p>...</p>';
    }
    <div dangerouslySetInnerHTML={{ __html: markdownify() }} />;

See: [Dangerously set innerHTML](https://reactjs.org/tips/dangerously-set-inner-html.html)

#### Lists

    class TodoList extends Component {
        render() {
            const { items } = this.props;

            return (
                <ul>
                    {items.map((item) => (
                        <TodoItem item={item} key={item.key} />
                    ))}
                </ul>
            );
        }
    }

{: data-line="6,7”}

Always supply a `key` property.

#### Conditionals

    <Fragment>{showMyComponent ? <MyComponent /> : <OtherComponent />}</Fragment>

#### Short-circuit evaluation

    <Fragment>
        {showPopup && <Popup />}
        ...
    </Fragment>

### New features

#### Returning multiple elements

You can return multiple elements as arrays or fragments.

**Arrays**

    render () {
      // Don't forget the keys!
      return [
        <li key="A">First item</li>,
        <li key="B">Second item</li>
      ]
    }

{: data-line="3,4,5,6”}

**Fragments**

    render () {
      // Fragments don't require keys!
      return (
        <Fragment>
          <li>First item</li>
          <li>Second item</li>
        </Fragment>
      )
    }

{: data-line="3,4,5,6,7,8”}

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

#### Returning strings

    render() {
      return 'Look ma, no spans!';
    }

{: data-line="2”}

You can return just a string.

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

#### Errors

    class MyComponent extends Component {
      ···
      componentDidCatch (error, info) {
        this.setState({ error })
      }
    }

{: data-line="3,4,5”}

Catch errors via `componentDidCatch`. (React 16+)

See: [Error handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

#### Portals

    render () {
      return React.createPortal(
        this.props.children,
        document.getElementById('menu')
      )
    }

{: data-line="2,3,4,5”}

This renders `this.props.children` into any location in the DOM.

See: [Portals](https://reactjs.org/docs/portals.html)

#### Hydration

    const el = document.getElementById('app');
    ReactDOM.hydrate(<App />, el);

{: data-line="2”}

Use `ReactDOM.hydrate` instead of using `ReactDOM.render` if you’re rendering over the output of [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html).

See: [Hydrate](https://reactjs.org/docs/react-dom.html#hydrate)

### Property validation

#### PropTypes

    import PropTypes from 'prop-types';

{: .-setup}

See: [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

| `any` | Anything |

**Basic**

| `string` | | | `number` | | | `func` | Function | | `bool` | True or false |

**Enum**

| `oneOf`*(any)* | Enum types | | `oneOfType`*(type array)* | Union |

**Array**

| `array` | | | `arrayOf`*(…)* | |

**Object**

| `object` | | | `objectOf`*(…)* | Object with values of a certain type | | `instanceOf`*(…)* | Instance of a class | | `shape`*(…)* | |

**Elements**

| `element` | React element | | `node` | DOM node |

**Required**

| `(···).isRequired` | Required |

#### Basic types

    MyComponent.propTypes = {
        email: PropTypes.string,
        seats: PropTypes.number,
        callback: PropTypes.func,
        isClosed: PropTypes.bool,
        any: PropTypes.any
    };

#### Required types

    MyCo.propTypes = {
        name: PropTypes.string.isRequired
    };

#### Elements

    MyCo.propTypes = {
        // React element
        element: PropTypes.element,

        // num, string, element, or an array of those
        node: PropTypes.node
    };

#### Enumerables (oneOf)

    MyCo.propTypes = {
        direction: PropTypes.oneOf(['left', 'right'])
    };

#### Arrays and objects

    MyCo.propTypes = {
        list: PropTypes.array,
        ages: PropTypes.arrayOf(PropTypes.number),
        user: PropTypes.object,
        user: PropTypes.objectOf(PropTypes.number),
        message: PropTypes.instanceOf(Message)
    };

    MyCo.propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        })
    };

Use `.array[Of]`, `.object[Of]`, `.instanceOf`, `.shape`.

#### Custom validation

    MyCo.propTypes = {
        customProp: (props, key, componentName) => {
            if (!/matchme/.test(props[key])) {
                return new Error('Validation failed!');
            }
        }
    };

### Also see

-   [React website](https://reactjs.org) *(reactjs.org)*
-   [React cheatsheet](https://reactcheatsheet.com) *(reactcheatsheet.com)*
-   [Awesome React](https://github.com/enaqx/awesome-react) *(github.com)*
-   React v0.14 cheatsheet *Legacy version*
