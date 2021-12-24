# Array.prototype.flat()

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

## Syntax

    flat()
    flat(depth)

### Parameters

`depth` <span class="badge inline optional">Optional</span>  
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

### Return value

A new array with the sub-array elements concatenated into it.

## Alternatives

### reduce and concat

    const arr = [1, 2, [3, 4]];

    // To flat single level array
    arr.flat();
    // is equivalent to
    arr.reduce((acc, val) => acc.concat(val), []);
    // [1, 2, 3, 4]

    // or with decomposition syntax
    const flattened = arr => [].concat(...arr);

### reduce + concat + isArray + recursivity

    const arr = [1, 2, [3, 4, [5, 6]]];

    // to enable deep level flatten use recursion with reduce and concat
    function flatDeep(arr, d = 1) {
       return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                    : arr.slice();
    };

    flatDeep(arr, Infinity);
    // [1, 2, 3, 4, 5, 6]

### Use a stack

    // non recursive flatten deep using a stack
    // note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
    // also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
    function flatten(input) {
      const stack = [...input];
      const res = [];
      while(stack.length) {
        // pop value from stack
        const next = stack.pop();
        if(Array.isArray(next)) {
          // push back array items, won't modify the original input
          stack.push(...next);
        } else {
          res.push(next);
        }
      }
      // reverse to restore input order
      return res.reverse();
    }

    const arr = [1, 2, [3, 4, [5, 6]]];
    flatten(arr);
    // [1, 2, 3, 4, 5, 6]

### Use Generator function

    function* flatten(array, depth) {
        if(depth === undefined) {
          depth = 1;
        }
        for(const item of array) {
            if(Array.isArray(item) && depth > 0) {
              yield* flatten(item, depth - 1);
            } else {
              yield item;
            }
        }
    }

    const arr = [1, 2, [3, 4, [5, 6]]];
    const flattened = [...flatten(arr, Infinity)];
    // [1, 2, 3, 4, 5, 6]

## Examples

### Flattening nested arrays

    const arr1 = [1, 2, [3, 4]];
    arr1.flat();
    // [1, 2, 3, 4]

    const arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flat();
    // [1, 2, 3, 4, [5, 6]]

    const arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flat(2);
    // [1, 2, 3, 4, 5, 6]

    const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    arr4.flat(Infinity);
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

### Flattening and array holes

The flat method removes empty slots in arrays:

    const arr5 = [1, 2, , 4, 5];
    arr5.flat();
    // [1, 2, 4, 5]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.flat">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Array.prototype.flat' in that specification.</span></a></td></tr></tbody></table>

`flat`

69

79

62

No

56

12

69

69

62

48

12

10.0

## See also

-   [`Array.prototype.flatMap()`](flatmap)
-   [`Array.prototype.map()`](map)
-   [`Array.prototype.reduce()`](reduce)
-   [`Array.prototype.concat()`](concat)
-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat</a>
