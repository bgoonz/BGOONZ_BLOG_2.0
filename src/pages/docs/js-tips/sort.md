---
title: Array.sort()
weight: 0
excerpt: Javascript articles  and docs
seo:
    title: 'Array.prototype.sort()'
    description: 'Javascript Quick Tips Directory'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


# Array.prototype.sort()

The `sort()` method sorts the elements of an array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

## Syntax

    // Functionless
    sort()

    // Arrow function
    sort((firstEl, secondEl) => { ... } )

    // Compare function
    sort(compareFn)

    // Inline compare function
    sort(function compareFn(firstEl, secondEl) { ... })

### Parameters

`compareFunction` <span class="badge inline optional">Optional</span>
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

`firstEl`
The first element for comparison.

`secondEl`
The second element for comparison.

### Return value

The sorted array. Note that the array is sorted _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_, and no copy is made.

## Description

If `compareFunction` is not supplied, all non-`undefined` array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All `undefined` elements are sorted to the end of the array.

**Note:** In UTF-16, Unicode characters above `\uFFFF` are encoded as two surrogate code units, of the range `\uD800`-`\uDFFF`. The value of each code unit is taken separately into account for the comparison. Thus the character formed by the surrogate pair `\uD655\uDE55` will be sorted before the character `\uFF3A`.

If `compareFunction` is supplied, all non-`undefined` array elements are sorted according to the return value of the compare function (all `undefined` elements are sorted to the end of the array, with no call to `compareFunction`). If `a` and `b` are two elements being compared, then:

- If `compareFunction(a, b)` returns less than 0, leave `a` and `b` unchanged.
- If `compareFunction(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAScript standard only started guaranteeing this behavior [in 2019](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-intro), thus, older browsers may not respect this.
- If `compareFunction(a, b)` returns greater than 0, sort `b` before `a`.
- `compareFunction(a, b)` must always return the same value when given a specific pair of elements `a` and `b` as its two arguments. If inconsistent results are returned, then the sort order is undefined.

So, the compare function has the following form:

    function compare(a, b) {
      if (a is less than b by some ordering criterion) {
        return -1;
      }
      if (a is greater than b by the ordering criterion) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }

To compare numbers instead of strings, the compare function can subtract `b` from `a`. The following function will sort the array in ascending order (if it doesn't contain `Infinity` and `NaN`):

    function compareNumbers(a, b) {
      return a - b;
    }

The `sort` method can be conveniently used with [function expressions](../../operators/function):

    var numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers);

    // [1, 2, 3, 4, 5]

ES2015 provides [arrow function expressions](../../functions/arrow_functions) with even shorter syntax.

    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    console.log(numbers);

    // [1, 2, 3, 4, 5]

Arrays of objects can be sorted by comparing the value of one of their properties.

    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 }
    ];

    // sort by value
    items.sort(function (a, b) {
      return a.value - b.value;
    });

    // sort by name
    items.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

## Examples

### Creating, displaying, and sorting an array

The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.

    let stringArray = ['Blue', 'Humpback', 'Beluga'];
    let numericStringArray = ['80', '9', '700'];
    let numberArray = [40, 1, 5, 200];
    let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

    function compareNumbers(a, b) {
      return a - b;
    }

    stringArray.join(); // 'Blue,Humpback,Beluga'
    stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

    numberArray.join(); // '40,1,5,200'
    numberArray.sort(); // [1, 200, 40, 5]
    numberArray.sort(compareNumbers); // [1, 5, 40, 200]

    numericStringArray.join(); // '80,9,700'
    numericStringArray.sort(); // [700, 80, 9]
    numericStringArray.sort(compareNumbers); // [9, 80, 700]

    mixedNumericArray.join(); // '80,9,700,40,1,5,200'
    mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
    mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]

### Sorting non-ASCII characters

For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use [`String.localeCompare`](../string/localecompare). This function can compare those characters so they appear in the right order.

    var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
    items.sort(function (a, b) {
      return a.localeCompare(b);
    });

    // items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

### Sorting with map

The `compareFunction` can be invoked multiple times per element within the array. Depending on the `compareFunction`'s nature, this may yield a high overhead. The more work a `compareFunction` does and the more elements there are to sort, it may be more efficient to use [map](map) for sorting. The idea is to traverse the array once to extract the actual values used for sorting into a temporary array, sort the temporary array, and then traverse the temporary array to achieve the right order.

    // the array to be sorted
    const in = ['delta', 'alpha', 'charlie', 'bravo'];

    // temporary array holds objects with position and sort-value
    const mapped = in.map((v, i) => {
      return { i, value: someSlowOperation(v) };
    })

    // sorting the mapped array containing the reduced values
    mapped.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    const result = mapped.map(v => in[v.i]);

There is an open source library available called [mapsort](https://null.house/open-source/mapsort) which applies this approach.

### Sort stability

Since version 10 (or EcmaScript 2019), the [specification](https://tc39.es/ecma262/#sec-array.prototype.sort) dictates that `Array.prototype.sort` is stable.

For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:

    const students = [
      { name: "Alex",   grade: 15 },
      { name: "Devlin", grade: 15 },
      { name: "Eagle",  grade: 13 },
      { name: "Sam",    grade: 14 },
    ];

After sorting this array by `grade` in ascending order:

    students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

The `students` variable will then have the following value:

    [
      { name: "Eagle",  grade: 13 },
      { name: "Sam",    grade: 14 },
      { name: "Alex",   grade: 15 }, // original maintained for similar grade (stable sorting)
      { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
    ];

It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

Before version 10 (or EcmaScript 2019), sort stabiliy was not guaranteed, meaning that you could end up with the following:

    [
      { name: "Eagle",  grade: 13 },
      { name: "Sam",    grade: 14 },
      { name: "Devlin", grade: 15 }, // original order not maintained
      { name: "Alex",   grade: 15 }, // original order not maintained
    ];
