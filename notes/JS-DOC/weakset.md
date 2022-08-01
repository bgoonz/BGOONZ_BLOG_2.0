# WeakSet

The `WeakSet` object lets you store weakly held _objects_ in a collection.

## Description

`WeakSet` objects are collections of objects. Just as with [`Set`](set)s, each object in a `WeakSet` may occur only once; all objects in a `WeakSet`'s collection are unique.

The main differences to the [`Set`](set) object are:

-   `WeakSet`s are collections of **objects only**. They cannot contain arbitrary values of any type, as [`Set`](set)s can.
-   The `WeakSet` is _weak_, meaning references to objects in a `WeakSet` are held _weakly_. If no other references to an object stored in the `WeakSet` exist, those objects can be garbage collected.
    **Note:** This also means that there is no list of current objects stored in the collection. `WeakSets` are not enumerable.

### Use case: Detecting circular references

Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed.

`WeakSet`s are ideal for this purpose:

    // Execute a callback on everything stored inside an object
    function execRecursively(fn, subject, _refs = null){
      if(!_refs)
        _refs = new WeakSet();

      // Avoid infinite recursion
      if(_refs.has(subject))
        return;

      fn(subject);
      if("object" === typeof subject){
        _refs.add(subject);
        for(let key in subject)
          execRecursively(fn, subject[key], _refs);
      }
    }

    const foo = {
      foo: "Foo",
      bar: {
        bar: "Bar"
      }
    };

    foo.bar.baz = foo; // Circular reference!
    execRecursively(obj => console.log(obj), foo);

Here, a `WeakSet` is created on the first run, and passed along with every subsequent function call (using the internal `_refs` parameter).

The number of objects or their traversal order is immaterial, so a `WeakSet` is more suitable (and performant) than a [`Set`](set) for tracking object references, especially if a very large number of objects is involved.

## Constructor

[`WeakSet()`](weakset/weakset)  
Creates a new `WeakSet` object.

## Instance methods

[`WeakSet.prototype.add(value)`](weakset/add)  
Appends `value` to the `WeakSet` object.

[`WeakSet.prototype.delete(value)`](weakset/delete)  
Removes `value` from the `WeakSet`. `WeakSet.prototype.has(value)` will return `false` afterwards.

[`WeakSet.prototype.has(value)`](weakset/has)  
Returns a boolean asserting whether `value` is present in the `WeakSet` object or not.

## Examples

### Using the WeakSet object

    const ws = new WeakSet();
    const foo = {};
    const bar = {};

    ws.add(foo);
    ws.add(bar);

    ws.has(foo);    // true
    ws.has(bar);    // true

    ws.delete(foo); // removes foo from the set
    ws.has(foo);    // false, foo has been removed
    ws.has(bar);    // true, bar is retained

Note that `foo !== bar`. While they are similar objects, \*they are not **the same object\***. And so they are both added to the set.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-weakset-objects">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'WeakSet' in that specification.</span></a></td></tr></tbody></table>

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

`WeakSet`

36

12

34

No

23

9

37

36

34

24

9

3.0

`WeakSet`

36

12

34

No

23

9

37

36

34

24

9

3.0

`add`

36

12

34

No

23

9

37

36

34

24

9

3.0

`clear`

36-41

No

34-46

No

23-28

No

37-41

36-41

34-46

24-28

No

3.0-4.0

`delete`

36

12

34

No

23

9

37

36

34

24

9

3.0

`has`

36

12

34

No

23

9

37

36

34

24

9

3.0

## See also

-   [`Map`](map)
-   [`Set`](set)
-   [`WeakMap`](weakmap)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet</a>
