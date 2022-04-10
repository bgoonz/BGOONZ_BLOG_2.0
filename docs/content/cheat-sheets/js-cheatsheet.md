Cheatsheet
==========

Commonly used functions on [Array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
----------------------------------------------------------------------------------------------------------------

### [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### Description

Creates an array by calling a specific function on each element present in the parent array.

#### Syntax

    array.map(function(currentValue)

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>function(currentValue)</td><td>Required function to be run for each array element</td></tr></tbody></table>

#### Return value

An Array containing the results of calling the provided function for each element in the original array.

### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### Description

Creates an array filled with all array elements that pass a test (provided as a function).

#### Syntax

    array.filter(function(currentValue)

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>function(currentValue)</td><td>Required function to be run for each array element</td></tr></tbody></table>

#### Return value

Array containing all elements that pass the test else an empty array.

#### Example

    let filtered = [112, 52, 0, -1, 944].filter(function (value) {
        return value > 0;
    });

*Output:*

    [112,52,944]

### [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

#### Description

reduces the array to a single value and executes provided function for each value of the array (from left-to-right).

#### Syntax

    array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>function(currentValue)</td><td>Required function to be run for each array element</td></tr></tbody></table>

#### Return value

returns accumulated result fron the last call of the callback function.

#### Example

    const array1 = [1, 2, 3, 4];
    const reducer = function (accumulator, currentValue) {
        return accumulator + currentValue;
    };
    console.log(array1.reduce(reducer));
    console.log(array1.reduce(reducer, 5));

*Output:*

    10
    15

### [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

#### Description

Returns the selected elements in an array, as a new array object and selects the elements starting at the given start argument, and ends at the given end argument(excluding end argument).

#### Syntax

    array.slice(start, end);

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>start</td><td>Optional. specifies starting index of the selection</td></tr><tr class="even"><td>end</td><td>Optional. specifies ending index of the selection</td></tr></tbody></table>

#### Return value

New array containing the selected elements.

#### Example

    let arr = [1, 2, 3, 4, 5, 6];
    let new_arr = arr.slice(3);

*Output:*

    [1,2,3,4,5,6]
    [4,5,6]

### [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#### Description

Adds/removes items to/from an array, and returns the removed item(s).

#### Syntax

    array.splice(index, howmany, item1, ....., itemX)

<table style="width:99%;"><colgroup><col style="width: 19%" /><col style="width: 80%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>index</td><td>Required. An integer that specifies at what position to add/remove items</td></tr><tr class="even"><td>howmany</td><td>Optional. The number of items to be removed.</td></tr><tr class="odd"><td>item1, …, itemX</td><td>Optional. The new item(s) to be added to the array</td></tr></tbody></table>

#### Return value

Array without the removed items.

#### Example

    const languages = ['C++', 'Java', 'Html', 'Python', 'C'];
    // Add 'Julia' and 'Php' after removing 'Html'.
    const removed = languages.splice(2, 1, 'Julia', 'Php');

*Output:*

    C++,Java,Html,Python,C
    C++,Java,Julia,Php,Python,C

***Note***

<table style="width:99%;"><colgroup><col style="width: 38%" /><col style="width: 61%" /></colgroup><thead><tr class="header"><th>splice</th><th>slice</th></tr></thead><tbody><tr class="odd"><td>Returns the removed item(s) in an array</td><td>Returns the selected element(s) in an array, as a new array object</td></tr><tr class="even"><td>Changes the original array</td><td>Doesn’t change the original array</td></tr><tr class="odd"><td>Can take n number of arguments(1 required)</td><td>Can take 2 arguments(1 required)</td></tr></tbody></table>

### [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

#### Description

Used to add a single item to an array(or to add two or more arrays).

#### Syntax

    array1.concat(item);

*or*

    array1.concat(array2, array3, ..., arrayX)

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>array2, array3, …, arrayX</td><td>Required. The arrays to be joined.</td></tr></tbody></table>

#### Return value

Joined array

#### Example

    const num1 = [1, 2, 3],
        num2 = [4, 5, 6],
        num3 = 7;
    console.log(num1.concat(num2, num3));

*Output:*

    [1,2,3,4,5,6,7]

*Note*

<table><thead><tr class="header"><th>concat</th><th>.push</th></tr></thead><tbody><tr class="odd"><td>Adds elements to the end of an array</td><td>Adds element or merges arrays</td></tr><tr class="even"><td>Returns the new length of the array</td><td>Returns a new array</td></tr></tbody></table>

### [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

#### Description

Returns the array as a string. The elementsare separated by a specified separator. The default separator is comma (,).

#### Syntax

    array.join(separator);

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>separator</td><td>Optional.</td></tr></tbody></table>

#### Return value

String, representing the array values, separated by the specified separator.

#### Example

    const languages = ['C++', 'Java', 'Html', 'Python', 'C'];
    languages.join();
    languages.join('.');
    languages.join('-');

*Output:*

    C++,Java,Html,Python,C
    C++.Java.Html.Python.C
    C++-Java-Html-Python-C

### [push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

#### Description

Adds new items to the end of an array, and returns the new length.

#### Syntax

    array.push(item1, item2, ..., itemX)

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>item1, item2, …, itemX</td><td>Required. The item(s) to add to the array</td></tr></tbody></table>

#### Return value

New length of the array.

#### Example

    let arr = [1, 2, 3, 4, 5];
    console.log(arr.push(6, 7, 8));

*Output:*

    8
    [1,2,3,4,5,6,7,8]

### [find](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

#### Description

Returns the value of the first element in an array that pass a test (provided as a function).

#### Syntax

    array.find(function(currentValue)

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>function(currentValue)</td><td>Required. A function to be run for each element in the array.</td></tr></tbody></table>

#### Return value

The array element value if any of the elements in the array pass the test, otherwise it returns ‘undefined’.

#### Example

    let array = [1, 3, 5, 7, 9];
    const found = array.find(function (element) {
        return element > 4;
    });
    // Printing desired value.

*Output:*

    5

### [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

#### Description

returns the position of the first occurrence of a specified value in a string.

#### Syntax

    string.indexOf(searchvalue, start);

<table><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>searchvalue</td><td>Required. The string to search for</td></tr></tbody></table>

| start |

Optional.  
Default 0. At which position to start the search.

|

#### Return value

Number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs.

#### Example

    console.log('Departed Train'.indexOf('Train'));

*Output:*

    9

Common String Functions
-----------------------

[Full Mozilla MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### [substring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

#### Description

Extracts the characters in a string between "start” and "end”, not including "end” itself.

#### Syntax

    string.substring(start, end);

<table style="width:99%;"><colgroup><col style="width: 6%" /><col style="width: 93%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>start</td><td>Required. The position where to start the extraction. First character is at index 0</td></tr><tr class="even"><td>end</td><td>Optional. The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string</td></tr></tbody></table>

#### Return value

New string containing the extracted characters.

#### Example

    // Taking a string as variable
    const string = 'JavaScriptCheatsheet';
    a = string.substring(0, 4);
    b = string.substring(1, 6);
    c = string.substring(5);
    d = string.substring(0);
    // Printing new string which are
    // the part of the given string

*Output:*

    Java
    avaSc
    criptCheatsheet
    JavaScriptCheatsheet

*Note*

<table><thead><tr class="header"><th>array.slice()</th><th>string.substring()</th></tr></thead><tbody><tr class="odd"><td>Displays selected array elements</td><td>Displays selected part of string</td></tr><tr class="even"><td>Returns new array</td><td>Returns new string</td></tr></tbody></table>

### [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

#### Description

Used to split a string into an array of substrings, and returns the new array.

#### Syntax

    string.split(separator, limit);

<table><colgroup><col style="width: 5%" /><col style="width: 95%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>separator</td><td>Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)</td></tr><tr class="even"><td>limit</td><td>Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array</td></tr></tbody></table>

#### Return value

Array containing splitted values.

#### Example

    let str = 'It iS a great Day.';
    let array = str.split(' ');

*Output:*

    ["It","iS","a","great","Day."]

### [toLowerCase](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

#### Description

Converts a string to lowercase letters.

#### Syntax

    string.toLowerCase()

#### Return value

A string, representing the value of a string converted to lowercase.

#### Example

    const str = 'It iS a Great Day.';
    const string = str.toLowerCase();

*Output:*

    it is a great day.

### [trim](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

#### Description

Removes whitespace from both sides of a string.

#### Syntax

    string.trim();

#### Return value

String, representing the string with removed whitespace from both ends

#### Example

    const str = '     "JavaScript"      ';
    const st = str.trim();

*Output:*

    "Javascript"

### [charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

#### Description

Returns the character at the specified index in a string.

#### Syntax:

    string.charAt(index);

#### Return value

String, representing the character at the specified index, or an empty string if the index number is not found

#### Example:

    const str = 'JavaScript is object oriented language';
    console.log(str.charAt(9));

*Output:*

    t

For Loop Variants
-----------------

### [for…in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

#### Syntax

    for (var in object)
    {
       //code block to be executed
    }

#### Example

    const array1 = ['a', 'b', 'c'];
    for (const element in array1) {
        console.log(element);
    }

*Output:*

    "a"
    "b"
    "c"

### [for…of](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)

#### Description

Loops through the values of an object.

#### Syntax

    for (variable of object) {
        // code block to be executed
    }

#### Example

    const languages = { first: 'C', second: 'Java', third: 'Python', fourth: 'PHP', fifth: 'JavaScript' };
    // iterate through every property of the
    // object languages and print all of them
    // using for..in loops
    for (itr in languages) {
        console.log(languages[itr]);
    }

*Output:*

    C
    Java
    Python
    PHP
    JavaScript

### [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)

#### Description

Traditional index-based loop as found in many languages.

#### Syntax

    for (statement 1; statement 2; statement 3)
    {
        // code block to be executed
    }

#### Example

    const i;
    for (i = 0; i < 10; i++)
    {
        console.log("Hello World!\n");
    }

This will print *Hello World* on the screen 10 times.

### [.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### Description

Calls a function once for each element in an array, in order.

#### Syntax

    array.forEach(function(currentValue)

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>function(currentValue)</td><td>Required. A function to be run for each element in the array.</td></tr></tbody></table>

#### Example:

    const items = [1, 29, 47];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item * item);
    });

*Output :* It squares each number in the array *items* .

        1,841,2209
