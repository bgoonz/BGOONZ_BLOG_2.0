---
title: Comparison operators
---

As already established at the beginning, JavaScript is *dynamically typed*. It
also performs *type conversion*, if a specific data type is expected and not
provided. For example in `a * b`, the values of `a` and `b` will be converted
to numbers first.

Even though there are [well defined rules][conversion rules] for converting one
data type into another, these rules can be quite surprising.

[conversion rules]: http://www.ecma-international.org/ecma-262/5.1/#sec-9

What does this have to do with comparison? JavaScript has two kind of comparison
operators:

- **Loose comparison** (`a == b`, `a != b`)
- **Strict comparison** (`a === b`, `a !== b`)

The difference is that *loose* comparison will *convert both values* to the same
data type if they are of different data types. *Strict* comparison immediately
returns `false` if both values *don't have the same type*.

Examples:
```javascript
"42" == 42  // true
"42" === 42 // false

// Objects are compared by reference
[1,2] == [1,2]  // false
[1,2] === [1,2] // false
```

The following tool visualizes the steps of the *[abstract equality 
comparison](http://www.ecma-international.org/ecma-262/7.0/#sec-abstract-equality-comparison)* 
algorithm, which is used for loose comparison.  

You can select some predefined examples and see which steps are performed 
during the comparison. The results will probably surprise you. You can also 
provide your own values.

~~~react comparison
[
  ["[1,2]", "'1,2'"],
  ["[0]", "false"],
  ["'\\n'", "false"],
  ["'0XA19'", "2585"]
]
~~~

Also have a look at [this table][comparison table] to get a quick overview of 
the differences between `==` and `===`.

The above examples hopefully showed you that loose comparison isn't that 
"simple" and it's not always clear what ends up being compared in the end. For 
that reason you should follow this advice:

<div class="callout warning">

**You should *always* use strict comparison**, unless you
explicitly want to make use of the type conversion (i.e. you know what you are
doing).

If you write an API, make it clear which data type it expects (e.g. through
comments).

</div>

[comparison table]: https://dorey.github.io/JavaScript-Equality-Table/
