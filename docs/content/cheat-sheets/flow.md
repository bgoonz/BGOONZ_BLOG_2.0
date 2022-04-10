subtitle

2022-01-03

------------------------------------------------------------------------

title: Flow

category: JavaScript libraries weight: -3 tags: \[Featurable\]

------------------------------------------------------------------------

Getting started
---------------

### Simple example

    /* @flow */
    function square(n: number) {
        return n * n;
    }

    const four = square(2);

{: data-line="1,2”}

Most of what you need to do is to simply add annotations to function arguments!

See: [flow.org docs](https://flow.org/en/docs/)

### Type inference

------------------------------------------------------------------------

    function square(n: number) {
        const result = n * n;
    }

{: data-line="2”}

`result` is inferred to be a number because `number * number` will result in a number. There’s no need to give it annotations.

### Type aliases

    type Person = {
        name: string,
        age: number,
        isAdmin: boolean,
        likes: Array<string>
    };

{: data-line="1,2,3,4,5,6”}

------------------------------------------------------------------------

    function greet(user: Person) {
        console.log('hello', user.name);
    }

{: data-line="1”}

    greet({ name: 'Miles Davis', ··· })

This is the typical way to define the shape of complex objects.

### Variables

    const count: number = 200;

You typically don’t need to do this, function args are often enough.

See: [Variable types](https://flow.org/en/docs/types/variables/)

### Importing and exporting

    import type { Person } from './types';

    export type Person = {
      ···
    }

See: [Module types](https://flow.org/en/docs/types/modules)

### Union types

    type Action = number | string;

    type Direction = 'left' | 'right';

See: [Unions](https://flow.org/en/docs/types/unions/)

Optionals
---------

### Maybe types

    type Album = {
        name: ?string
    };

{: data-line="2”}

    const a: Album = {}; // ✗ Error
    const a: Album = { name: 'Blue' }; // ✓ OK
    const a: Album = { name: null }; // ✓ OK
    const a: Album = { name: undefined }; // ✓ OK

This makes `name` either a string or null.

See: [Maybe types](https://flow.org/en/docs/types/primitives/#toc-maybe-types)

### Optional properties

    type Album = {
        name?: string
    };

{: data-line="2”}

    const a: Album = {}; // ✓ OK
    a.name = 'Blue'; // ✓ OK
    a.name = null; // ✗ Error
    a.name = undefined; // ✓ OK

This makes an `Album` valid even if `name` is not part of the keys. This is different from "maybe” types.

See: [Optional properties](https://flow.org/en/docs/types/primitives/#toc-optional-object-properties)

Objects
-------

### Width subtyping

    type Artist = {
        name: string,
        label: string
    };

    const a: Artist = {
        name: 'Miguel Migs',
        label: 'Naked Music',
        genre: 'House' // ✓ OK
    };

{: data-line="6”}

A type with more properties is "wider” and is a subtype of a "narrower” type.

See: [Width subtyping](https://flow.org/en/docs/lang/width-subtyping/)

### Exact object types

    type Artist = {|
        name: string,
        label: string
    |};

{: data-line="1,4”}

    const a: Artist = {
        name: 'Miguel Migs',
        label: 'Naked Music',
        genre: 'House' // ✗ Error
    };

{: data-line="4”}

Exact object types prevent extra properties from being added to an object.

See: [Exact object types](https://flow.org/en/docs/types/objects/#toc-exact-object-types)

### Dynamic keys

    type Items = {
        [key: string]: Item
    };

{: data-line="2”}

See: [Dynamic object keys](https://flow.org/en/docs/types/objects/#toc-objects-as-maps)

Advanced features
-----------------

### Primitives

<table><thead><tr class="header"><th>Type</th><th>Description</th><th></th></tr></thead><tbody><tr class="odd"><td><code>any</code></td><td></td><td></td></tr><tr class="even"><td><code>boolean</code></td><td></td><td></td></tr><tr class="odd"><td><code>mixed</code></td><td></td><td></td></tr><tr class="even"><td><code>number</code></td><td></td><td></td></tr><tr class="odd"><td><code>string</code></td><td></td><td></td></tr><tr class="even"><td><code>void</code></td><td>undefined</td><td></td></tr><tr class="odd"><td><code>null</code></td><td>null (but not undefined)</td><td></td></tr><tr class="even"><td>———————-</td><td>——————————</td><td></td></tr><tr class="odd"><td><code>{a: Number}</code></td><td>Object with a shape</td><td></td></tr><tr class="even"><td><code>[any, number]</code></td><td>Tuples (fixed-length arrays)</td><td></td></tr><tr class="odd"><td>—</td><td>—</td><td></td></tr><tr class="even"><td><code>Array&lt;T&gt;</code></td><td></td><td></td></tr><tr class="odd"><td><code>Class&lt;T&gt;</code></td><td></td><td></td></tr><tr class="even"><td><code>Function</code></td><td></td><td></td></tr><tr class="odd"><td><code>Object</code></td><td></td><td></td></tr><tr class="even"><td>—</td><td>—</td><td></td></tr><tr class="odd"><td><code>?number</code></td><td>Maybe (number, void, null)</td><td></td></tr><tr class="even"><td><code>a                     | b</code></td><td>Union types</td><td></td></tr></tbody></table>

### Enums

    type Suit = 'Diamonds' | 'Clubs' | 'Hearts' | 'Spades';

    const countries = {
        US: 'United States',
        IT: 'Italy',
        FR: 'France'
    };

    type Country = $Keys<typeof countries>;

See: [Enums](https://flow.org/en/docs/types/utilities/#toc-keys)

### Type aliases

    type Tree = {
        foo: string,
        bar: number,
        qux: (foo: string, bar: number) => boolean
    };

    type Generic<T> = {
        foo: T
    };

See: [Type aliases](https://flow.org/en/docs/types/aliases/)

### Generic classes

    class GenericClass<T> {
      x: T
      constructor (x: T) { ... }
    }

    var n: GenericClass<number> = new GenericClass(0)

See: [Generic classes](https://flow.org/en/docs/types/generics/#toc-classes-with-generics)

### Interfaces

    interface Jsonable {
        toJSON(): string;
    }

    class Foo {
        toJSON() {
            return '{}';
        }
    }

    (new Foo(): Jsonable);

See: [Interfaces](https://flow.org/en/docs/types/interfaces/)

### Functions

    const callback: () => void = function () {};

------------------------------------------------------------------------


    function filter<T> (
      list: Array<T>,
      callback: (item: T) => boolean
    ): Array<T> {
      ···
    }

See: [Functions](https://flow.org/en/docs/types/functions/)

### Imports

    import type { Person } from '../person';
    import typeof Config from '../config';

    export type Person = { id: string };

### Comment syntax

    /*::
      export type Foo = { ... }
    */

    function add(n /*: number */) { ... }

### React

    type Props = {
        bar: number
    };

    type State = {
        open: boolean
    };

    class Foo extends React.Component<Props, State> {
        // Component code
    }

Examples
--------

### Examples

    var myNumbers: Array<number> = [42];
    function foo(): any {
        return 42;
    }
    var b: boolean = false;
    var b: ?boolean = false; /* maybe */
    var b: string | boolean = false;

    var a: Class<MyClass> = MyClass;
    var b: MyClass = new a();

### Function signature

    type Callback = (?Error, string) => any

    function fetch (callback: Callback) {
      ···
    }

References
----------

-   [Flow website](https://www.saltycrane.com/flow-type-cheat-sheet/latest/) *(flow.org)*
-   [Getting started with Flow](https://flow.org/en/docs/getting-started/) *(flow.org)*
-   [Flow type cheatsheet](https://www.saltycrane.com/flow-type-cheat-sheet/latest/) *(saltycrane.com)*
