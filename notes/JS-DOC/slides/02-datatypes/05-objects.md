---
title: Objects
---

Everything else besides primitive data type values is an _object_.

Objects are _key-value_ stores, more specifically _stringkey-value_ stores. The
"keys" of an object are called _properties_.

The syntax to create a plain object is `{key: value, ...}`, which is called an
object literal. For example:

```javascript
var obj = {
    foo: 'bar',
    baz: 42
};
```

Note that the above example doesn't use _quotation marks_ around the property
names. In an object literal, quotation marks can be be omitted if the property
name would also be a _valid variable name_. If not, they need to be quoted.
_Number literals_ are valid an object literal as well.

Here are some more examples of valid and invalid property names in object
literals:

```js
var obj = {
  foo: 0,        // valid, could be variable name
  'bar': 0,      // string literals are always valid
  123: 0,        // number literals are always valid
  1.5: 0,        // ^
  foo-bar: 0,    // invalid, would not be a valid variable name
  'foo-bar': 0,  // string literals are alwaus valid
};
```

<div class="callout warning">

**Important:** No matter which value or syntax you use for a property name, the
value will always be converted to a **string**.

</div>

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**

ES2015 adds two extensions to object values and object literals:

-   _Symbols_ are can be used as property names. They are not converted to
    strings.

-   Object literals can contain _[computed property names][computed properties]_:
    ```js
    var foo = 42;
    var obj = {
        [foo]: 0
    };
    // creates {42: 0}
    ```

</div>

## References

Just like in Java and other object-oriented programming languages, objects are
represented as _references_. That means if a variable has an object as a value,
it really has a reference to that object.

```js
var user = {name: 'Tom'}:
```

:::ascii

```
                         ┌──────────────┐
┌─────┬──────────┐       │  Object#123  │
│user │ ref:123 ◆┼──────▶├──────┬───────┤
└─────┴──────────┘       │ name │ "Tom" │
                         └──────┴───────┘
```

:::

Assigning the value to another variable makes both variables point to the same
object:

```js
var owner = user;
```

:::ascii

```
┌─────┬──────────┐       ┌──────────────┐
│user │ ref:123 ◆┼──┐    │  Object#123  │
├─────┼──────────┤  ├───▶├──────┬───────┤
│owner│ ref:123 ◆┼──┘    │ name │ "Tom" │
└─────┴──────────┘       └──────┴───────┘
```

:::

Assigning to `user.name` will therefore also "change" `owner.name`:

```js
user.name = 'Joe';
console.log(user.name, owner.name);
// Joe, Joe
```

:::ascii

```
┌─────┬──────────┐       ┌──────────────┐
│user │ ref:123 ◆┼──┐    │  Object#123  │
├─────┼──────────┤  ├───▶├──────┬───────┤
│owner│ ref:123 ◆┼──┘    │ name │ "Joe" │
└─────┴──────────┘       └──────┴───────┘
```

:::

But assigning a new value to either `user` or `owner` will result in only that
variable referring to the new value. The other variable will still refer to the
same value.

```js
owner = { name: 'Kim' };
```

:::ascii

```
                         ┌──────────────┐
                         │  Object#123  │
                    ┌───▶├──────┬───────┤
┌─────┬──────────┐  │    │ name │ "Joe" │
│user │ ref:123 ◆┼──┘    └──────┴───────┘
├─────┼──────────┤
│owner│ ref:456 ◆┼──┐    ┌──────────────┐
└─────┴──────────┘  │    │  Object#456  │
                    └───▶├──────┬───────┤
                         │ name │ "Kim" │
                         └──────┴───────┘
```

:::

---

The JavaScript standard defines a couple of [built-in objects][] with additional
properties and special internal behavior, must notably _arrays_ and
_functions_, which are explained in the next slides.

[built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
