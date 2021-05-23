# Mutability

### 

### Mutability && Primitive && Reference Examples

Objects are passed by reference, are mutable, and can be modified by our functions:

```javascript
function rotateLeft(arr, num) {
    for (let i = 0; i < num; i++) {
        let el = arr.pop();
        arr.unshift(el);
    }
}
let myArr = [1, 2, 3, 4, 5, ];
rotateLeft(myArr, 2);
console.log(myArr);
```

Strings are passed by value, are immutable, and a new array is constructedd and returned, because it cannot be changed in place.

```javascript
function rotateString(str, num) {
    return str.slice(num) + str.slice(0, num);
}

let str = "foobar";
let ret = rotateString(str, 3);
console.log(str);
console.log(ret);
```

### Dereferencing

#### Arrays

To dereference an array, use `let [var1, var2]` syntax.

```javascript
let arr = ['one', 'two', 'three'];

let [first] = arr;
console.log(first);
```

#### Objects

To dereference attributes from an object, use `let {}` syntax.

```javascript
let me = {
    name: "Ian",
    instruments: ['bass', 'synth', 'guitar'],
    siblings: {
        brothers: ['Alistair'],
        sisters: ['Meghan']
    }
}

let {
    name,
    instruments: musical_instruments,
    siblings: {
        sisters
    }
} = me;

console.log(sisters);
```

```javascript
function printInstruments({
    instruments
}) {
    console.log(instruments);
}
printInstruments(me);

function printSiblings({
    siblings: {
        sisters,
        brothers
    }
}) {
    console.log("Sisters", sisters);
    console.log("Brothers", brothers);
}

printSiblings(me);

//rest parameters
// combines parameters into array

...parameterName

splice is an example of where we 've seen this before

let arr = 'my dog has fleas'.split(' ');
arr.splice(3, 1, 'trees')

    //spread operator
    // take an arrray and spread them into arguments

    ...argContainer

OR

// take an object or array and spread their elements/attributes into another object or array

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element
    })
}

let arr = multiply(2, 1, 2, 3)
console.log(arr)

let me = {
    name: "Ian",
    instruments: ['bass', 'synth', 'guitar'],
    siblings: {
        brothers: ['Alistair'],
        sisters: ['Meghan']
    }
}

let countryArr = ['USA', 'Canada', 'UK'];
//me[countries] = countryArr;

let myCountries = {
    'countries': countryArr
};

let newMe = {
    ...me,
    ...countries
}
```
