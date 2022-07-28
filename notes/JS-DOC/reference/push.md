# Array.prototype.push()

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

## Syntax

    push(element0)
    push(element0, element1)
    push(element0, element1, ... , elementN)

### Parameters

`elementN`  
The element(s) to add to the end of the array.

### Return value

The new [`length`](length) property of the object upon which the method was called.

## Description

The `push` method appends values to an array.

`push` is intentionally generic. This method can be used with [`call()`](../function/call) or [`apply()`](../function/apply) on objects resembling arrays. The `push` method relies on a `length` property to determine where to start inserting the given values. If the `length` property cannot be converted into a number, the index used is 0. This includes the possibility of `length` being nonexistent, in which case `length` will also be created.

Although [strings](../string) are native, Array-like objects, they are not suitable in applications of this method, as strings are immutable. Similarly for the native, Array-like object [arguments](../../functions/arguments).

## Examples

### Adding elements to an array

The following code creates the `sports` array containing two elements, then appends two elements to it. The `total` variable contains the new length of the array.

    let sports = ['soccer', 'baseball']
    let total = sports.push('football', 'swimming')

    console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
    console.log(total)   // 4

### Merging two arrays

This example uses [`apply()`](../function/apply) to push all elements from a second array.

Do _not_ use this method if the second array (`moreVegs` in the example) is very large because the maximum number of parameters that one function can take is limited in practice. See [`apply()`](../function/apply) for more details.

    let vegetables = ['parsnip', 'potato']
    let moreVegs = ['celery', 'beetroot']

    // Merge the second array into the first one
    // Equivalent to vegetables.push('celery', 'beetroot')
    Array.prototype.push.apply(vegetables, moreVegs)

    console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']

### Using an object in an array-like fashion

As mentioned above, `push` is intentionally generic, and we can use that to our advantage. `Array.prototype.push` can work on an object just fine, as this example shows.

Note that we don't create an array to store a collection of objects. Instead, we store the collection on the object itself and use `call` on `Array.prototype.push` to trick the method into thinking we are dealing with an array—and it just works, thanks to the way JavaScript allows us to establish the execution context in any way we want.

    let obj = {
        length: 0,

        addElem: function addElem(elem) {
            // obj.length is automatically incremented
            // every time an element is added.
            [].push.call(this, elem)
        }
    }

    // Let's add some empty objects just to illustrate.
    obj.addElem({})
    obj.addElem({})
    console.log(obj.length)
    // → 2

Note that although `obj` is not an array, the method `push` successfully incremented `obj`'s `length` property just like if we were dealing with an actual array.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.push">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.push</span></a></td></tr></tbody></table>

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

`push`

1

12

1

5.5

4

1

1

18

4

10.1

1

1.0

## See also

-   [`Array.prototype.pop()`](pop)
-   [`Array.prototype.shift()`](shift)
-   [`Array.prototype.unshift()`](unshift)
-   [`Array.prototype.concat()`](concat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push</a>
