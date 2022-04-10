{%raw%}

### Components

    var Component = React.createClass({
        render: function () {
            return <div>Hello {this.props.name}</div>;
        }
    });

    ReactDOM.render(<Component name="John" />, document.body);

{:.light}

Use the [React.js jsfiddle](http://jsfiddle.net/reactjs/69z2wepo/) to start hacking. (or the unofficial [jsbin](http://jsbin.com/yafixat/edit?js,output))

### Nesting

    var UserAvatar  = React.createClass({...});
    var UserProfile = React.createClass({...});

{:.light}

    var Info = React.createClass({
        render() {
            return (
                <div>
                    <UserAvatar src={this.props.avatar} />
                    <UserProfile username={this.props.username} />
                </div>
            );
        }
    });

Nest components to separate concerns. See [multiple components](http://facebook.github.io/react/docs/multiple-components.html).

States & Properties
-------------------

{:.center}

### States and props

    <MyComponent fullscreen="{true}" />

{:.light}

    // props
      this.props.fullscreen //=> true

    // state
      this.setState({ username: 'rstacruz' });
      this.replaceState({ ... });
      this.state.username //=> 'rstacruz'

    render: function () {
      return <div className={this.props.fullscreen ? 'full' : ''}>
        Welcome, {this.state.username}
      </div>;
    }

Use [props](https://facebook.github.io/react/docs/tutorial.html#using-props) (`this.props`) to access parameters passed from the parent. Use [states](https://facebook.github.io/react/docs/tutorial.html#reactive-state) (`this.state`) to manage dynamic data.

### Setting defaults

    React.createClass({
      getInitialState: function () {
        return { comments: [] };
      },

      getDefaultProps: function () {
        return { name: "Hello" };
      }
    );

Pre-populates `this.state.comments` and `this.props.name`.

Components
----------

### Component API

    ReactDOM.findDOMNode(c); // 0.14+
    React.findDOMNode(c); // 0.13
    c.getDOMNode(); // 0.12 below

{:.light}

    c.forceUpdate()
    c.isMounted()

    c.state
    c.props

    c.setState({ ... })
    c.replaceState({ ... })

    c.setProps({ ... })       // for deprecation
    c.replaceProps({ ... })   // for deprecation

    c.refs

These are methods available for `Component` instances. See [Component API](http://facebook.github.io/react/docs/component-api.html).

### Component specs

<table><thead><tr class="header"><th>Method</th><th>What</th></tr></thead><tbody><tr class="odd"><td><a href="http://facebook.github.io/react/docs/component-specs.html#render"><code>render()</code></a></td><td></td></tr><tr class="even"><td>—-</td><td>—-</td></tr><tr class="odd"><td><a href="http://facebook.github.io/react/docs/component-specs.html#getinitialstate"><code>getInitialState()</code></a></td><td></td></tr><tr class="even"><td><a href="http://facebook.github.io/react/docs/component-specs.html#getdefaultprops"><code>getDefaultProps()</code></a></td><td></td></tr><tr class="odd"><td>—-</td><td>—-</td></tr><tr class="even"><td><a href="http://facebook.github.io/react/docs/component-specs.html#mixins"><code>mixins: [ ... ]</code></a></td><td>Mixins … <a href="#mixins">more</a></td></tr><tr class="odd"><td><a href="http://facebook.github.io/react/docs/component-specs.html#proptypes"><code>propTypes: { ... }</code></a></td><td>Validation … <a href="#property-validation">more</a></td></tr><tr class="even"><td><a href="http://facebook.github.io/react/docs/component-specs.html#statics"><code>statics: { ... }</code></a></td><td>Static methods</td></tr><tr class="odd"><td><a href="http://facebook.github.io/react/docs/component-specs.html#displayname"><code>displayName: "..."</code></a></td><td>Automatically filled by JSX</td></tr></tbody></table>

{:.greycode.no-head}

Methods and properties you can override. See [component specs](http://facebook.github.io/react/docs/component-specs.html).

Lifecycle
---------

### Mounting

`componentWillMount()` | Before rendering (no DOM yet) |  
`componentDidMount()` | After rendering |

{:.greycode.no-head.lc}

Before initial rendering occurs. Add your DOM stuff on didMount (events, timers, etc). See [reference](http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount).

### Updating

`componentWillReceiveProps`*(newProps={})* | Use `setState()` here |  
`shouldComponentUpdate`*(newProps={}, newState={})* | Skips `render()` if returns false |  
`componentWillUpdate`*(newProps={}, newState={})* | Can’t use `setState()` here |  
`componentDidUpdate`*(prevProps={}, prevState={})* | Operate on the DOM here |

{:.greycode.no-head.lc}

Called when parents change properties and `.setState()`. These are not called for initial renders. See [reference](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops).

### Unmounting

`componentWillUnmount()` | Invoked before DOM removal |

{:.greycode.no-head.lc}

Clear your DOM stuff here (probably done on didMount). See [reference](http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount).

Examples
--------

### Example: loading data

    React.createClass({
        componentDidMount: function () {
            $.get(
                this.props.url,
                function (data) {
                    this.setState(data);
                }.bind(this)
            );
        },

        render: function () {
            return <CommentList data={this.state.data} />;
        }
    });

See [initial AJAX data](http://facebook.github.io/react/tips/initial-ajax.html).

DOM nodes
---------

### References

    <input ref="myInput" />

{:.light}

    this.refs.myInput;
    ReactDOM.findDOMNode(this.refs.myInput).focus();
    ReactDOM.findDOMNode(this.refs.myInput).value;

### DOM Events

Add attributes like `onChange`. See [events](https://facebook.github.io/react/docs/events.html).

    <input type="text" value="{this.state.value}" onChange="{this.handleChange}" />

{:.light}

    handleChange: function(event) {
      this.setState({ value: event.target.value });
    }

Allows access to DOM nodes. See [References](http://facebook.github.io/react/docs/more-about-refs.html).

### Two-way binding

    Email: <input type="text" valueLink={this.linkState('email')} />

{:.light}

    React.createClass({
        mixins: [React.addons.LinkedStateMixin]
    });

    this.state.email;

Use [LinkedStateMixin](http://facebook.github.io/react/docs/two-way-binding-helpers.html) for easier two-way binding.

Property validation
-------------------

### Basic types

    React.createClass({
        propTypes: {
            email: React.PropTypes.string,
            seats: React.PropTypes.number,
            settings: React.PropTypes.object,
            callback: React.PropTypes.func,
            isClosed: React.PropTypes.bool,
            any: React.PropTypes.any
        }
    });

Primitive types: `.string`, `.number`, `.func`, and `.bool`. See [propTypes](http://facebook.github.io/react/docs/reusable-components.html#prop-validation).

### Required types

    propTypes: {
      requiredFunc:  React.PropTypes.func.isRequired,
      requiredAny:   React.PropTypes.any.isRequired,

Add `.isRequired`.

### React elements

    propTypes: {
      element:  React.PropTypes.element,  // react element
      node:     React.PropTypes.node,     // num, string, element
                                          // ...or array of those

Use `.element`, `.node`.

### Enumerables

    propTypes: {
      enum:     React.PropTypes.oneOf(['M','F']),  // enum
      union:    React.PropTypes.oneOfType([        // any
                  React.PropTypes.string,
                  React.PropTypes.number ]),

Use `.oneOf`, `.oneOfType`.

### Arrays and objects

    propTypes: {
      array:    React.PropTypes.array,
      arrayOf:  React.PropTypes.arrayOf(React.PropTypes.number),
      object:   React.PropTypes.object,
      objectOf: React.PropTypes.objectOf(React.PropTypes.number),

      message:  React.PropTypes.instanceOf(Message),

      object2:  React.PropTypes.shape({
        color:  React.PropTypes.string,
        size:   React.PropTypes.number
      }),

Use `.array[Of]`, `.object[Of]`, `.instanceOf`, `.shape`.

### Custom validation

    propTypes: {
      customProp: function(props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
          return new Error('Validation failed!');
        }
      }
    }

Supply your own function.

Other features
--------------

### Class set

    var cx = require('classnames');

    render: function() {
      var classes = cx({
        'message': true,
        'message-important': this.props.isImportant,
        'message-read': this.props.isRead
      });

      return <div className={classes}>Great Scott!</div>;
    }

Manipulate DOM classes with [classnames](https://www.npmjs.org/package/classnames), previously known as `React.addons.classSet`. See [Class set](http://facebook.github.io/react/docs/class-name-manipulation.html).

### Propagating properties

    <VideoPlayer src="video.mp4" />

{:.light}

    var VideoPlayer = React.createClass({
        render: function () {
            /* propagates src="..." down to this sub component */
            return <VideoEmbed {...this.props} controls="false" />;
        }
    });

See [Transferring props](http://facebook.github.io/react/docs/transferring-props.html).

### Mixins

    var SetIntervalMixin = {
      componentWillMount: function() { .. }
    }

{:.light}

    var TickTock = React.createClass({
      mixins: [SetIntervalMixin]
    }

See [addons](https://facebook.github.io/react/docs/addons.html) for some built-in mixins.

[Top level API](https://facebook.github.io/react/docs/top-level-api.html)
-------------------------------------------------------------------------

    React.createClass({ ... })

    React.isValidElement(c)

    ReactDOM.findDOMNode(c) // 0.14+
    ReactDOM.render(<Component />, domnode, [callback]) // 0.14+
    ReactDOM.unmountComponentAtNode(domnode) // 0.14+

    ReactDOMServer.renderToString(<Component />) // 0.14+
    ReactDOMServer.renderToStaticMarkup(<Component />) // 0.14+

JSX patterns
------------

### Style shorthand

    var style = { backgroundImage: 'url(x.jpg)', height: 10 };
    return <div style={style}></div>;

See [inline styles](https://facebook.github.io/react/tips/inline-styles.html).

### InnerHTML

------------------------------------------------------------------------

    function markdownify() {
        return '<p>...</p>';
    }
    <div dangerouslySetInnerHTML={{ __html: markdownify() }} />;

See [dangerously set innerHTML](https://facebook.github.io/react/tips/dangerously-set-inner-html.html).

### Lists

    var TodoList = React.createClass({
        render: function () {
            function item(itemText) {
                return <li>{itemText}</li>;
            }
            return <ul>{this.props.items.map(item)}</ul>;
        }
    });

See also
--------

-   [Animations](http://facebook.github.io/react/docs/animation.html) {%endraw%}
