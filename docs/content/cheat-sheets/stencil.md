Quick-start guide
-----------------

### Getting started

#### JavaScript

    import { Component, Prop, State } from '@stencil/core'

    @Component({
      tag: 'my-component',
      styleUrl: 'my-component.scss'
    })
    export class MyComponent {
      @Prop() name: string
      @State() isVisible: boolean = true

      render () {
        return <p>I am {this.name}!</p>
        )
      }
    }

#### HTML

    <my-component name="Groot" />

That’s the same example in the [Readme](https://github.com/ionic-team/stencil), that’s as simple as you can get! Just use `<my-component>` like you would use any other HTML tag.

### DOM events

    export class MyComponent {
        render() {
            return <input onChange={(event: UIEvent) => this.inputChanged(event)} />;
        }

        inputChanged(event) {
            console.log('input changed:', event.target.value);
        }
    }

{: data-line="5,10,11”}

Stencil uses DOM events.

See: [Handling user input](https://stenciljs.com/docs/templating/#handling-user-input)

### Multiple children

    render () {
      return [
        <h1>Hello there</h1>,
        <p>This component returns multiple nodes</p>
      ]
    }

{: data-line="3,4”}

`render()` can return an array of elements.

See: [Complex template content](https://stenciljs.com/docs/templating#complex-template-content)

State
-----

### Managing state

    export class MyComponent {
        @State() isVisible: boolean;

        show() {
            this.isVisible = true;
        }
    }

{: data-line="4,5”}

Just do assignments. You can’t do mutations though, see next section.

See: [Managing component state](https://stenciljs.com/docs/decorators#managing-component-state)

### Updating arrays and objects

#### ✗ Bad

    this.names.push('Larry'); // ⚠️
    this.options.show = true; // ⚠️

#### ✓ OK

    this.names = [...this.names, 'Larry'];
    this.options = { ...this.options, show: true };

Mutable operations such as `push()` won’t work. You’ll need to assign a new copy.

See: [Updating arrays](https://stenciljs.com/docs/reactive-data/#updating-arrays)

Slots
-----

### Using slot

    <my-component>
        <span>Hello, friends</span>
    </my-component>

{: data-line="2”}

#### Component

    render() {
      return <h1><slot /></h1>
    }

{: data-line="2”}

You can pass JSX/HTML as child elements. Use the `slot` tag to use them inside your component.

See: [Slots](https://stenciljs.com/docs/templating#slots)

### Multiple slots

    <my-component>
        <p slot="my-header">Hello</p>
        <p slot="my-footer">Thanks</p>
    </my-component>

{: data-line="2,3”}

#### Component

    render () {
      return <div>
        <header><slot name='my-header' /></header>
        <footer><slot name='my-footer' /></footer>
      </div>
    }

{: data-line="3,4”}

See: [Slots](https://stenciljs.com/docs/templating#slots)

Lifecycle
---------

### Lifecycle hooks

<table><thead><tr class="header"><th>Event</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>componentWillLoad()</code></td><td>Before rendering</td></tr><tr class="even"><td><code>componentDidLoad()</code></td><td>After rendering</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>componentWillUpdate()</code></td><td>Before updating</td></tr><tr class="odd"><td><code>componentDidUpdate()</code></td><td>After updating</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>componentDidUnload()</code></td><td>After unmounting</td></tr></tbody></table>

See: [Component lifecycle](https://stenciljs.com/docs/component-lifecycle)

### Example

    export class MyComponent {
        componentWillUpdate() {
            console.log('updating');
        }
    }

References
----------

-   [Stencil docs](https://stenciljs.com/docs/) *(stenciljs.com)*
