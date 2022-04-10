{%raw%}

Expressions
-----------

### Expressions

    <div id="app">
        <p>I have a {{ product }}</p>
        <p>{{ product + 's' }}</p>
        <p>{{ isWorking ? 'YES' : 'NO' }}</p>
        <p>{{ product.getSalePrice() }}</p>
    </div>

See: [Delimiters](https://vuejs.org/v2/api/#delimiters)

### Binding

    <a v-bind:href="url">...</a>

#### Shorthand syntax

    <a :href="url">...</a>

{: data-line="1”}

#### True or false will add or remove attribute

    <button :disabled="isButtonDisabled">...</button>

#### If isActive is truthy, the class ‘active’ will appear

    <div :class="{ active: isActive }">...</div>

#### Style color set to value of activeColor

    <div :style="{ color: activeColor }"></div>

See: [v-bind](https://vuejs.org/v2/api/#v-bind)

### Directives

#### Element inserted/removed based on truthiness

    <p v-if="inStock">{{ product }}</p>

    <p v-else-if="onSale">...</p>
    <p v-else>...</p>

#### Toggles the display: none CSS property

    <p v-show="showProductDetails">...</p>

#### Two-way data binding

    <input v-model="firstName" />

<table><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>v-model.lazy="..."</code></td><td>Syncs input after change event</td></tr><tr class="even"><td><code>v-model.number="..."</code></td><td>Always returns a number</td></tr><tr class="odd"><td><code>v-model.trim="..."</code></td><td>Strips whitespace</td></tr></tbody></table>

See: [Directives](https://vuejs.org/v2/api/#Directives)

### Actions/Events

#### Calls addToCart method on component

    <button v-on:click="addToCart">...</button>

#### Shorthand syntax

    <button @click="addToCart">...</button>

{: data-line="1”}

#### Arguments can be passed

    <button @click="addToCart(product)">...</button>

#### To prevent default behavior (e.g. page reload)

    <form @submit.prevent="addProduct">...</form>

#### Only trigger once

    <img @mouseover.once="showImage" />...

<table><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>.stop</code></td><td>Stop all event propagation</td></tr><tr class="even"><td><code>.self</code></td><td>Only trigger if event.target is element itself</td></tr></tbody></table>

#### Keyboard entry example

    <input @keyup.enter="submit" />

#### Call onCopy when control-c is pressed

    <input @keyup.ctrl.c="onCopy" />

See: [Events](https://vuejs.org/v2/guide/events.html)

### List rendering

#### The `:key` is always recommended

    <li v-for="item in items" :key="item.id">{{ item }}</li>

{: data-line="2”}

#### To access the position in the array

    <li v-for="(item, index) in items">...</li>

#### To iterate through objects

    <li v-for="(value, key) in object">...</li>

#### Using `v-for` with a component

    <cart-product v-for="item in products" :product="item" :key="item.id"></cart-product>

See: [List Rendering](https://vuejs.org/v2/guide/list.html)

Component
---------

### Component anatomy

    Vue.component('my-component', {
      components: {
        // Components that can be used in the template
        ProductComponent,
        ReviewComponent
      },
      props: {
        // The parameters the component accepts
        message: String,
        product: Object,
        email: {
          type: String,
          required: true,
          default: "none"
          validator: function (value) {
            // Should return true if value is valid
          }
        }
      },
      data: function() {
        // `data` must be a function
        return {
          firstName: 'Vue',
          lastName: 'Mastery'
        }
      },
      computed: {
        // Return cached values until dependencies change
        fullName: function () {
          return this.firstName + ' ' + this.lastName
        }
      },
      watch: {
        // Called when firstName changes value
        firstName: function (value, oldValue) { ... }
      },
      methods: { ... },
      template: '<span>{{ message }}</span>',
      // Can also use backticks in `template` for multi-line
    })

{: data-line="3, 8, 16, 21, 28, 34, 39”}

See: [Components Basics](https://vuejs.org/v2/guide/components.html)

### Lifecycle hooks

<table><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>beforeCreate</code></td><td>After the instance has been initialized <a href="https://vuejs.org/v2/api/#beforeCreate">#</a></td></tr><tr class="even"><td><code>created</code></td><td>After the instance is created <a href="https://vuejs.org/v2/api/#created">#</a></td></tr><tr class="odd"><td><code>beforeMount</code></td><td>Before the first render <a href="https://vuejs.org/v2/api/#beforeMount">#</a></td></tr><tr class="even"><td><code>mounted</code></td><td>After the instance has been mounted <a href="https://vuejs.org/v2/api/#mounted">#</a></td></tr><tr class="odd"><td><code>beforeUpdate</code></td><td>When data changes, before the DOM is patched <a href="https://vuejs.org/v2/api/#beforeUpdate">#</a></td></tr><tr class="even"><td><code>updated</code></td><td>After a data change <a href="https://vuejs.org/v2/api/#updated">#</a></td></tr><tr class="odd"><td><code>beforeDestroy</code></td><td>Before the instance is destroyed <a href="https://vuejs.org/v2/api/#beforeDestroy">#</a></td></tr><tr class="even"><td><code>destroyed</code></td><td>After a Vue instance has been destroyed <a href="https://vuejs.org/v2/api/#destroyed">#</a></td></tr></tbody></table>

See: [Lifecycle Hooks](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks)

### Custom events

#### Set listener on component, within its parent

    <button-counter v-on:incrementBy="incWithVal"></button-counter>

#### Inside parent component

    methods: {
      incWithVal: function (toAdd) { ... }
    }

#### Inside button-counter template

    this.$emit(
        'incrementBy', // Custom event name
        5 // Data sent up to parent
    );

Use props to pass data into child components, custom events to pass data to parent elements.

See: [Custom Events](https://vuejs.org/v2/guide/components-custom-events.html)

Single file components
----------------------

### Single file

    <template>
        <p>{{ greeting }} World!</p>
    </template>

    <script>
        module.exports = {
            data: function () {
                return {
                    greeting: 'Hello'
                };
            }
        };
    </script>

    <style scoped>
        p {
            font-size: 2em;
            text-align: center;
        }
    </style>

See: [Single File Components](https://vuejs.org/v2/guide/single-file-components.html)

### Separation

    <template>
        <div>This will be pre-compiled</div>
    </template>
    <script src="./my-component.js"></script>
    <style src="./my-component.css"></style>

See: [What About Separation of Concerns?](https://vuejs.org/v2/guide/single-file-components.html#What-About-Separation-of-Concerns)

Slots
-----

### Using a single slot

#### Component template

    <div>
        <h2>I'm a title</h2>
        <slot> Only displayed if no slot content </slot>
    </div>

{: data-line="3,4,5”}

#### Use of component with data for slot

    <my-component>
        <p>This will go in the slot</p>
    </my-component>

{: data-line="2”}

See: [Slots](https://vuejs.org/v2/guide/components-slots.html)

### Multiple slots

#### Component template

    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot>Default content</slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>

{: data-line="3,6,9”}

#### Use of component with data for slots

    <app-layout>
        <h1 slot="header">Page title</h1>
        <p>the main content.</p>
        <p slot="footer">Contact info</p>
    </app-layout>

{: data-line="2,3,4”}

See: [Slots](https://vuejs.org/v2/guide/components-slots.html)

Also see
--------

-   [Vue CLI](https://cli.vuejs.org/) *(cli.vuejs.org)*
-   [Vue Router](https://router.vuejs.org/) *(router.vuejs.org)*
-   [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) *(chrome.google.com)*
-   [Nuxt.js](https://nuxtjs.org/) *(nuxtjs.org)*
-   [Vue.js v1.0.28 cheatsheet](vue@1.0.28/) *Legacy version*

{%endraw%}
