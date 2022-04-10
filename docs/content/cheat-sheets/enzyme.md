subtitle

2022-01-03

------------------------------------------------------------------------

title: Enzyme category: React

tags: \[Featured\] weight: -1 keywords:

-   shallow()
-   mount()
-   wrap.setProps()
-   "wrap.find().simulate(‘click’)”
-   "wrap.contains(

    )"

------------------------------------------------------------------------

Getting started
---------------

### Introduction

{: .-intro}

[Enzyme](http://airbnb.io/enzyme) lets you write unit tests for React components. This guide covers Enzyme 3.x.

-   [Enzyme website](https://enzymejs.github.io/enzyme/) *(enzymejs.github.io)*

### Mounting

    import { shallow, mount } from 'enzyme';

{: .-setup}

    wrap = shallow(<MyComponent />);

    wrap = mount(<MyComponent />);

Shallow wrapping doesn’t descend down to sub-components. A full mount also mounts sub-components.

See: [Shallow rendering](http://airbnb.io/enzyme/docs/api/shallow.html), [Full rendering](http://airbnb.io/enzyme/docs/api/mount.html)

### Debugging

    console.log(wrap.debug());

Shows HTML for debugging purposes.

See: [debug()](http://airbnb.io/enzyme/docs/api/ReactWrapper/debug.html)

Examples
--------

### Basic example

    import { shallow } from 'enzyme';
    import MyComponent from '../MyComponent';

{: .-setup}

    it('works', () => {
        const wrap = shallow(<MyComponent name="Groot" />);

        expect(wrap.text()).toEqual('I am Groot');
    });

### Props and state

#### Setting

    wrap.setProps({ name: 'Moe' });
    wrap.setState({ show: true });

#### Asserting

    expect(wrap.prop('name')).toEqual('Moe');
    expect(wrap.state('show')).toEqual(true);

    expect('name' in wrap.props()).toEqual('Moe');
    expect('show' in wrap.state()).toEqual(true);

### Matching elements

    expect(wrap.containsMatchingElement(<span>I am groot</span>)).toBeTruthy();

`containsMatchingElement()` is probably the most useful assertion in Jest.

### Snapshots

    expect(wrap).toMatchSnapshot();

Be sure you’ve set up enzyme-to-json for snapshots (see [Installing](#installing) below).

### Traversions

    expect(wrap.find('button').text()).toEqual('Submit');

Use `.find()` to traverse down to nodes. It will return wrapper objects, too.

### Simulating events

    wrap.find('input').simulate('click');

#### With event object props

    wrap.find('input').simulate('change', {
        target: { value: 'hello' }
    });

Installing
----------

### Initial setup

    npm install --save-dev enzyme \
      enzyme-adapter-react-16 \
      react-test-renderer

{: .-setup}

#### test/setup.js

    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    Enzyme.configure({ adapter: new Adapter() });

#### package.json

    "jest": {
      "setupFiles": [
        "test/setup.js"
      ]
    }

This configures Enzyme for React v16, and Jest to automatically configure Enzyme for you. There are other adapters in Enzyme’s installation instructions.

See: [Installation](http://airbnb.io/enzyme/#installation)

### Jest snapshots

    npm install --save-dev enzyme-to-json

{: .-setup}

#### package.json

    "jest": {
      "snapshotSerializers": [
        "enzyme-to-json/serializer"
      ]
    }

#### Test

    it('works', () => {
        wrap = mount(<MyComponent />);
        expect(wrap).toMatchSnapshot();
    });

Optional, but recommended: This allows you to use Enzyme wrappers with Jest snapshots.

See: [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json)

ReactWrapper
------------

### Traversing

    wrap.find('button'); // → ReactWrapper
    wrap.filter('button'); // → ReactWrapper
    wrap.not('span'); // → ReactWrapper (inverse of filter())
    wrap.children(); // → ReactWrapper
    wrap.parent(); // → ReactWrapper
    wrap.closest('div'); // → ReactWrapper
    wrap.childAt(0); // → ReactWrapper
    wrap.at(0); // → ReactWrapper
    wrap.first(); // → ReactWrapper
    wrap.last(); // → ReactWrapper

    wrap.get(0); // → ReactElement
    wrap.getElement(); // → ReactElement
    wrap.getElements(); // → Array<ReactElement>
    wrap.getDOMNode(); // → DOMComponent

See: [Full rendering API](http://airbnb.io/enzyme/docs/api/mount.html)

### Actions

    wrap.simulate('click');

### React components

    wrap.setState({ ··· })
    wrap.setProps({ ··· })
    wrap.setContext({ ··· })

    wrap.state(); // get full state
    wrap.props(); // get full props
    wrap.context(); // get full context

    wrap.state('key'); // → any
    wrap.prop('key'); // → any
    wrap.context('key'); // → any

    wrap.instance(); // → ReactComponent

### Mount

    wrap.mount();
    wrap.unmount();
    wrap.update(); // calls forceUpdate()

### Tests

    wrap.debug(); // → string
    wrap.html(); // → string
    wrap.text(); // → string
    wrap.type(); // → string | function
    wrap.name(); // → string
    wrap.is('.classname'); // → boolean
    wrap.hasClass('class'); // → boolean
    wrap.exists(); // → boolean
    wrap.contains(<div />); // → boolean
    wrap.contains([<div />]); // → boolean
    wrap.some('.child'); // → boolean

    wrap.someWhere((n) => n.hasClass('foo'));

    wrap.containsMatchingElement(<div />); // → boolean
    wrap.containsAllMatchingElements([<div />]); // → boolean
    wrap.containsAnyMatchingElements([<div />]); // → boolean

References
----------

-   [Enzyme website](https://airbnb.io/enzyme) *(airbnb.io)*
-   [Enzyme v2 cheatsheet](./enzyme@2) *(devhints.io)* (old version)
