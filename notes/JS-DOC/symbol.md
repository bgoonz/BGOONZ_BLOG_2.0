# Symbol

`Symbol` is a built-in object whose constructor returns a `symbol` [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) — also called a **Symbol value** or just a **Symbol** — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak [encapsulation](https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation), or a weak form of [information hiding](https://en.wikipedia.org/wiki/Information_hiding).

Every `Symbol()` call is guaranteed to return a unique Symbol. Every `Symbol.for("key")` call will always return the same Symbol for a given value of `"key"`. When `Symbol.for("key")` is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.

## Description

To create a new primitive Symbol, you write `Symbol()` with an optional string as its description:

    let sym1 = Symbol()
    let sym2 = Symbol('foo')
    let sym3 = Symbol('foo')

The above code creates three new Symbols. Note that `Symbol("foo")` does not coerce the string `"foo"` into a Symbol. It creates a new Symbol each time:

    Symbol('foo') === Symbol('foo')  // false

The following syntax with the [`new`](../operators/new) operator will throw a [`TypeError`](typeerror):

    let sym = new Symbol()  // TypeError

This prevents authors from creating an explicit `Symbol` wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, `new Boolean`, `new String` and `new Number`).

If you really want to create a `Symbol` wrapper object, you can use the `Object()` function:

    let sym = Symbol('foo')
    typeof sym      // "symbol"
    let symObj = Object(sym)
    typeof symObj   // "object"

### Shared Symbols in the global Symbol registry

The above syntax using the `Symbol()` function will not create a global Symbol that is available in your whole codebase. To create Symbols available across files and even across realms (each of which has its own global scope), use the methods [`Symbol.for()`](symbol/for) and [`Symbol.keyFor()`](symbol/keyfor) to set and retrieve Symbols from the global Symbol registry.

### Finding Symbol properties on objects

The method [`Object.getOwnPropertySymbols()`](object/getownpropertysymbols) returns an array of Symbols and lets you find Symbol properties on a given object. Note that every object is initialized with no own Symbol properties, so that this array will be empty unless you've set Symbol properties on the object.

## Constructor

[`Symbol()`](symbol/symbol)  
Creates a new `Symbol` object. It is incomplete as a constructor because it does not support the syntax "`new Symbol()`".

## Static properties

[`Symbol.asyncIterator`](symbol/asynciterator)  
A method that returns the default AsyncIterator for an object. Used by [`for await...of`](../statements/for-await...of).

[`Symbol.hasInstance`](symbol/hasinstance)  
A method determining if a constructor object recognizes an object as its instance. Used by [`instanceof`](../operators/instanceof).

[`Symbol.isConcatSpreadable`](symbol/isconcatspreadable)  
A Boolean value indicating if an object should be flattened to its array elements. Used by [`Array.prototype.concat()`](array/concat).

[`Symbol.iterator`](symbol/iterator)  
A method returning the default iterator for an object. Used by [`for...of`](../statements/for...of).

[`Symbol.match`](symbol/match)  
A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by [`String.prototype.match()`](string/match).

[`Symbol.matchAll`](symbol/matchall)  
A method that returns an iterator, that yields matches of the regular expression against a string. Used by [`String.prototype.matchAll()`](string/matchall).

[`Symbol.replace`](symbol/replace)  
A method that replaces matched substrings of a string. Used by [`String.prototype.replace()`](string/replace).

[`Symbol.search`](symbol/search)  
A method that returns the index within a string that matches the regular expression. Used by [`String.prototype.search()`](string/search).

[`Symbol.split`](symbol/split)  
A method that splits a string at the indices that match a regular expression. Used by [`String.prototype.split()`](string/split).

[`Symbol.species`](symbol/species)  
A constructor function that is used to create derived objects.

[`Symbol.toPrimitive`](symbol/toprimitive)  
A method converting an object to a primitive value.

[`Symbol.toStringTag`](symbol/tostringtag)  
A string value used for the default description of an object. Used by [`Object.prototype.toString()`](object/tostring).

[`Symbol.unscopables`](symbol/unscopables)  
An object value of whose own and inherited property names are excluded from the `with` environment bindings of the associated object.

## Static methods

[`Symbol.for(key)`](symbol/for)  
Searches for existing Symbols with the given `key` and returns it if found. Otherwise a new Symbol gets created in the global Symbol registry with `key`.

[`Symbol.keyFor(sym)`](symbol/keyfor)  
Retrieves a shared Symbol key from the global Symbol registry for the given Symbol.

## Instance properties

[`Symbol.prototype.description`](symbol/description)  
A read-only string containing the description of the Symbol.

## Instance methods

[`Symbol.prototype.toSource()`](symbol/tosource)  
Returns a string containing the source of the Symbol. Overrides the [`Object.prototype.toSource()`](object/tosource) method.

[`Symbol.prototype.toString()`](symbol/tostring)  
Returns a string containing the description of the Symbol. Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`Symbol.prototype.valueOf()`](symbol/valueof)  
Returns the Symbol. Overrides the [`Object.prototype.valueOf()`](object/valueof) method.

[`Symbol.prototype[@@toPrimitive]`](symbol/@@toprimitive)  
Returns the Symbol.

## Examples

### Using the typeof operator with Symbols

The [`typeof`](../operators/typeof) operator can help you to identify Symbols.

    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'

### Symbol type conversions

Some things to note when working with type conversion of Symbols.

-   When trying to convert a Symbol to a number, a [`TypeError`](typeerror) will be thrown  
    (e.g. `+sym` or `sym | 0`).
-   When using loose equality, `Object(sym) == sym` returns `true`.
-   `Symbol("foo") + "bar" `throws a [`TypeError`](typeerror) (can't convert Symbol to string). This prevents you from silently creating a new string property name from a Symbol, for example.
-   The ["safer" `String(sym)` conversion](string#string_conversion) works like a call to [`Symbol.prototype.toString()`](symbol/tostring) with Symbols, but note that `new String(sym)` will throw.

### Symbols and for...in iteration

Symbols are not enumerable in [`for...in`](../statements/for...in) iterations. In addition, [`Object.getOwnPropertyNames()`](object/getownpropertynames) will not return Symbol object properties, however, you can use [`Object.getOwnPropertySymbols()`](object/getownpropertysymbols) to get these.

    let obj = {}

    obj[Symbol('a')] = 'a'
    obj[Symbol.for('b')] = 'b'
    obj['c'] = 'c'
    obj.d = 'd'

    for (let i in obj) {
       console.log(i)  // logs "c" and "d"
    }

### Symbols and JSON.stringify()

Symbol-keyed properties will be completely ignored when using `JSON.stringify()`:

    JSON.stringify({[Symbol('foo')]: 'foo'})
    // '{}'

For more details, see [`JSON.stringify()`](json/stringify).

### Symbol wrapper objects as property keys

When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped Symbol:

    let sym = Symbol('foo')
    let obj = {[sym]: 1}
    obj[sym]             // 1
    obj[Object(sym)]     // still 1

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol-objects</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`Symbol`

38

12

Edge 12 included Symbol properties in `JSON.stringify()` output.

36

No

25

9

38

38

36

25

9

3.0

`Symbol`

38

12

36

No

25

9

38

38

36

25

9

3.0

`asyncIterator`

63

79

57

No

50

11.1

63

63

57

46

No

8.0

`description`

70

79

63

No

57

12.1

12

No support for an undefined description.

70

70

63

49

12.2

12

No support for an undefined description.

10.0

`for`

40

12

36

No

27

9

40

40

36

27

9

4.0

`hasInstance`

50

15

50

No

37

10

50

50

50

37

10

5.0

`isConcatSpreadable`

48

15

48

No

35

10

48

48

48

35

10

5.0

`iterator`

43

12

36

No

30

10

43

43

36

30

10

4.0

`keyFor`

40

12

36

No

27

9

40

40

36

27

9

4.0

`match`

50

79

40

No

37

10

50

50

40

37

10

5.0

`matchAll`

73

79

67

No

60

13

73

73

67

52

13

No

`replace`

50

79

49

No

37

10

50

50

49

37

10

5.0

`search`

50

79

49

No

37

10

50

50

49

37

10

5.0

`species`

51

13

41

No

38

10

51

51

41

41

10

5.0

`split`

50

79

49

No

37

10

50

50

49

37

10

5.0

`toPrimitive`

47

15

44

No

34

10

47

47

44

34

10

5.0

`toSource`

No

No

36-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

36

No

No

No

`toString`

38

12

36

No

25

9

38

38

36

25

9

3.0

`toStringTag`

49

15

51

No

36

10

49

49

51

36

10

5.0

`unscopables`

45

12

48

No

32

9

45

45

48

32

9

5.0

`valueOf`

38

12

36

No

25

9

38

38

36

25

9

3.0

`@@toPrimitive`

47

15

44

No

34

10

47

47

44

34

10

5.0

## See also

-   [Glossary: Symbol data type](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)
-   [`typeof`](../operators/typeof)
-   [Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
-   ["ES6 In Depth: Symbols" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol</a>
