# Destructuring assignment

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## Syntax

    let a, b, rest;
    [a, b] = [10, 20];
    console.log(a); // 10
    console.log(b); // 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // [30, 40, 50]

    ({ a, b } = { a: 10, b: 20 });
    console.log(a); // 10
    console.log(b); // 20

    // Stage 4(finished) proposal
    ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // {c: 30, d: 40}

## Description

The object and array literal expressions provide an easy way to create _ad hoc_ packages of data.

    const x = [1, 2, 3, 4, 5];

The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.

    const x = [1, 2, 3, 4, 5];
    const [y, z] = x;
    console.log(y); // 1
    console.log(z); // 2

Similarly, you can destructure arrays on the left-hand side of the assignment

    const [firstElement, secondElement] = list;
    // is equivalent to:
    // const firstElement = list[0];
    // const secondElement = list[1];

This capability is similar to features present in languages such as Perl and Python.

## Examples

### Array destructuring

#### Basic variable assignment

    const foo = ['one', 'two', 'three'];

    const [red, yellow, green] = foo;
    console.log(red); // "one"
    console.log(yellow); // "two"
    console.log(green); // "three"

#### Assignment separate from declaration

A variable can be assigned its value via destructuring, separate from the variable's declaration.

    let a, b;

    [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2

#### Default values

A variable can be assigned a default, in the case that the value unpacked from the array is `undefined`.

    let a, b;

    [a=5, b=7] = [1];
    console.log(a); // 1
    console.log(b); // 7

#### Swapping variables

Two variables values can be swapped in one destructuring expression.

Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the [XOR-swap trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

    let a = 1;
    let b = 3;

    [a, b] = [b, a];
    console.log(a); // 3
    console.log(b); // 1

    const arr = [1,2,3];
    [arr[2], arr[1]] = [arr[1], arr[2]];
    console.log(arr); // [1,3,2]

#### Parsing an array returned from a function

It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

In this example, `f()` returns the values `[1, 2]` as its output, which can be parsed in a single line with destructuring.

    function f() {
      return [1, 2];
    }

    let a, b;
    [a, b] = f();
    console.log(a); // 1
    console.log(b); // 2

#### Ignoring some returned values

You can ignore return values that you're not interested in:

    function f() {
      return [1, 2, 3];
    }

    const [a, , b] = f();
    console.log(a); // 1
    console.log(b); // 3

    const [c] = f();
    console.log(c); // 1

You can also ignore all returned values:

    [,,] = f();

#### Assigning the rest of an array to a variable

When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:

    const [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3]

Be aware that a [`SyntaxError`](../global_objects/syntaxerror) will be thrown if a trailing comma is used on the right-hand side of a rest element:

    const [a, ...b,] = [1, 2, 3];

    // SyntaxError: rest element may not have a trailing comma
    // Always consider using rest operator as the last element

#### Unpacking values from a regular expression match

When the regular expression ` exec()` method finds a match, it returns an array containing first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the regular expression. Destructuring assignment allows you to unpack the parts out of this array easily, ignoring the full match if it is not needed.

    function parseProtocol(url) {
      const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
      if (!parsedURL) {
        return false;
      }
      console.log(parsedURL);
      // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

      const [, protocol, fullhost, fullpath] = parsedURL;
      return protocol;
    }

    console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
    // "https"

### Object destructuring

#### Basic assignment

    const user = {
        id: 42,
        is_verified: true
    };

    const {id, is_verified} = user;

    console.log(id); // 42
    console.log(is_verified); // true

#### Assignment without declaration

A variable can be assigned its value with destructuring separate from its declaration.

    let a, b;

    ({a, b} = {a: 1, b: 2});

**Note:** The parentheses `( ... )` around the assignment statement are required when using object literal destructuring assignment without a declaration.

`{a, b} = {a: 1, b: 2}` is not valid stand-alone syntax, as the `{a, b}` on the left-hand side is considered a block and not an object literal.

However, `({a, b} = {a: 1, b: 2})` is valid, as is `const {a, b} = {a: 1, b: 2}`

Your `( ... )` expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line.

#### Assigning to new variable names

A property can be unpacked from an object and assigned to a variable with a different name than the object property.

    const o = {p: 42, q: true};
    const {p: foo, q: bar} = o;

    console.log(foo); // 42
    console.log(bar); // true

Here, for example, `const {p: foo} = o` takes from the object `o` the property named `p` and assigns it to a local variable named `foo`.

#### Default values

A variable can be assigned a default, in the case that the value unpacked from the object is `undefined`.

    const {a = 10, b = 5} = {a: 3};

    console.log(a); // 3
    console.log(b); // 5

#### Assigning to new variables names and providing default values

A property can be both

-   Unpacked from an object and assigned to a variable with a different name.
-   Assigned a default value in case the unpacked value is `undefined`.

<!-- -->

    const {a: aa = 10, b: bb = 5} = {a: 3};

    console.log(aa); // 3
    console.log(bb); // 5

#### Unpacking fields from objects passed as a function parameter

    const user = {
      id: 42,
      displayName: 'jdoe',
      fullName: {
        firstName: 'John',
        lastName: 'Doe'
      }
    };

    function userId({id}) {
      return id;
    }

    function whois({displayName, fullName: {firstName: name}}) {
      return `${displayName} is ${name}`;
    }

    console.log(userId(user)); // 42
    console.log(whois(user));  // "jdoe is John"

This unpacks the `id`, `displayName` and `firstName` from the user object and prints them.

#### Setting a function parameter's default value

    function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
      console.log(size, coords, radius);
      // do some chart drawing
    }

    drawChart({
      coords: {x: 18, y: 30},
      radius: 30
    });

**Note:** In the function signature for `drawChart` above, the destructured left-hand side is assigned to an empty object literal on the right-hand side: `{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}`. You could have also written the function without the right-hand side assignment. However, if you leave out the right-hand side assignment, the function will look for at least one argument to be supplied when invoked, whereas in its current form, you can call `drawChart()` without supplying any parameters. The current design is useful if you want to be able to call the function without supplying any parameters, the other can be useful when you want to ensure an object is passed to the function.

#### Nested object and array destructuring

    const metadata = {
      title: 'Scratchpad',
      translations: [
        {
          locale: 'de',
          localization_tags: [],
          last_edit: '2014-04-14T08:43:37',
          url: '/de/docs/Tools/Scratchpad',
          title: 'JavaScript-Umgebung'
        }
      ],
      url: '/en-US/docs/Tools/Scratchpad'
    };

    let {
      title: englishTitle, // rename
      translations: [
        {
           title: localeTitle, // rename
        },
      ],
    } = metadata;

    console.log(englishTitle); // "Scratchpad"
    console.log(localeTitle);  // "JavaScript-Umgebung"

#### For of iteration and destructuring

    const people = [
      {
        name: 'Mike Smith',
        family: {
          mother: 'Jane Smith',
          father: 'Harry Smith',
          sister: 'Samantha Smith'
        },
        age: 35
      },
      {
        name: 'Tom Jones',
        family: {
          mother: 'Norah Jones',
          father: 'Richard Jones',
          brother: 'Howard Jones'
        },
        age: 25
      }
    ];

    for (const {name: n, family: {father: f}} of people) {
      console.log('Name: ' + n + ', Father: ' + f);
    }

    // "Name: Mike Smith, Father: Harry Smith"
    // "Name: Tom Jones, Father: Richard Jones"

#### Computed object property names and destructuring

Computed property names, like on [object literals](object_initializer#computed_property_names), can be used with destructuring.

    let key = 'z';
    let {[key]: foo} = {z: 'bar'};

    console.log(foo); // "bar"

#### Rest in Object Destructuring

The [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) proposal (stage 4) adds the [rest](../functions/rest_parameters) syntax to destructuring. Rest properties collect the remaining own enumerable property keys that are not already picked off by the destructuring pattern.

    let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
    a; // 10
    b; // 20
    rest; // { c: 30, d: 40 }

#### Invalid JavaScript identifier as a property name

Destructuring can be used with property names that are not valid JavaScript [identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier) by providing an alternative identifier that is valid.

    const foo = { 'fizz-buzz': true };
    const { 'fizz-buzz': fizzBuzz } = foo;

    console.log(fizzBuzz); // "true"

#### Combined Array and Object Destructuring

Array and Object destructuring can be combined. Say you want the third element in the array `props` below, and then you want the `name` property in the object, you can do the following:

    const props = [
      { id: 1, name: 'Fizz'},
      { id: 2, name: 'Buzz'},
      { id: 3, name: 'FizzBuzz'}
    ];

    const [,, { name }] = props;

    console.log(name); // "FizzBuzz"

#### The prototype chain is looked up when the object is deconstructed

When deconstructing an object, if a property is not accessed in itself, it will continue to look up along the prototype chain.

    let obj = {self: '123'};
    obj.__proto__.prot = '456';
    const {self, prot} = obj;
    // self "123"
    // prot "456" (Access to the prototype chain)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-destructuring-assignment">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-destructuring-assignment</span></a></td></tr></tbody></table>

`Destructuring_assignment`

49

14

41

Firefox provided a non-standard destructuring implementation from Firefox 2 to 40.

No

36

8

49

49

41

Firefox provided a non-standard destructuring implementation from Firefox 2 to 40.

36

8

5.0

`computed_property_names`

49

14

41

No

36

10

49

49

41

36

10

5.0

`rest_in_arrays`

49

16

14

41

No

36

9.1

49

49

41

36

9.3

5.0

`rest_in_objects`

60

79

55

No

47

11.1

60

60

55

44

11.3

8.0

## See also

-   [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Assignment_operators)
-   ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment</a>
