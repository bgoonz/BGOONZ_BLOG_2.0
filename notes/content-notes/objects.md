# Objects

## **Notes**

### **The Object Type**

The **`object`** is a data structure that stores other data, similar to how an array stores elements.

* The object differs in that each **`value`** stores in an obj is associated with a **`key`**.

**The Object of My Affections**

In other programming languages, objects are referred to as, "dictionaries", "maps", or "associative arrays".

* Objects are indexed with **`keys`** instead of numbers.
* Order is not guaranteed within an Object.
* Objects are defined by using curly braces **`{}`**
* You can think of Objects as tables.

> Fun Fact: Objects are affectionately known as POJO's \(Plain Old Javascript Objects\)

**Setting Keys and Values**

```javascript
// here "color" is the key!
>
car["color"] = "Blue";
"Blue"

>
car["seats"] = 2;
2

    // accessing our object at the key of color
    >
    car["color"]
"Blue"

>
car["seats"]
2

    >
    car {
        color: "Blue",
        seats: 2
    }
```

* We assign values to an object by defining the name of the key in brackets and assigning it to a value.

```javascript
> car {
    color: "Blue",
    seats: 2
}

>
"color" in car;
true

    >
    "model" in car;
false
```

* If we try to access a key that has not yet been assigned within an object we will output undefined.
* The **preferred method** for checking to see if an object exists at a key is to use the **`in`** operator.

**Using Variables as Keys**

```javascript
> car {
    color: "Blue",
    seats: 2
}

>
let newVariable = "color";
undefined

    >
    newVariable "color"

    >
    car[newVariable]
"Blue"

-- -

>
car {
    color: "Blue",
    seats: 2
}

>
newVariable
    "weight"

    // assigning a key value pair using a variable!
    >
    car[newVariable] = 1000;
1000

    >
    car {
        color: "Blue",
        seats: 2,
        weight: 1000
    }
```

* It is useful to set a variable as a key, because variables can be re-assigned new values - this way we can quickly access different data and also create new key/value pairs.

### **Using Different Notations**

```javascript
>
let dog = {};
undefined

    >
    dog.bark = "Bowowowo";
"Bowowowowo"

>
dog.bark "Bowowowo"

    >
    dog {
        bark: "Bowowowowo"
    }
```

* We can also use **dot notation** **"."** to access key/value pairs in an object.
  + One thing to note is that when using dot notation, we do not have to use string quotes as the key.

**Bracket Notation vs Dot Notation**

| **Dot** | **Bracket** |
| :--- | :--- |
| Easier To Read | You can use variables as keys! |
| Easier To Write b/c do not need Quotations. | Okay to use variables and Strings that start with numbers. |
| Cannot access with Variables |  |
| Keys cannot contain numbers as their first character |  |

* **When accessing object keys**: Bracket notation needs to refer to that key in quotations, dot notation doesn't.
* **When accessing object keys via a variable**: Bracket notation can refer to that key w/o use of quotations, dot notation can't do this at all.

```javascript
let myDog = {};
myDog.name = "Fido";

let myKey = "name";
console.log(myDog); // prints `{name: "Fido"}`
console.log(myDog[myKey]); // prints `Fido`

console.log(myDog.myKey); // prints: undefined
```

* As illustrated above, the dot notation cannot access a varible key - since it takes a **literal** interpretation of the key.

**Putting it All Together**

You can put an object together in a single statement.

```javascript
let myDog = {
    name: "Fido",
    type: "Doge",
    age: 2,
    favoriteToys: ["bone", "ball"],
};
```

**Operator Precedence Revisited**

* The concept of Operator Precedence also applies to objects.
* There are two types of associativity:
  + **`Right Associativity`** : When code is evaluted right to left.

    

```javascript
    a = b = 1;
```

    - Since **assignment of variables** takes lowest precendence, we end up evaluating b = 1 first before a = b.

  + **`Left Associativity`** : When code is evaluated left to right.

    

```javascript
    let id = "header";
    let element = document.getElementById(id).value;
```

    - We first resolve the document variable, then use dot notation to retrive the getElementById function, we eval it's arguments, access it's value, and then retrieve assignment \(the lowest precedence\).

### **Iterating Through Objects**

Because objects store _**unordered**_ key-value pairs, we do not rely on indices to access values; instead we rely on our keys.

**A New Kind of For Loop**

```javascript
for (let variable in object) {
    statement;

    let obj = {
        name: "Rose",
        cats: 2
    };
    for (let currentKey in obj) {
        console.log(currentKey);
        console.log(obj[currentKey]);
    }

    // prints out:
    // name
    // cats
    // Rose
    // 2
}
```

* We use a special syntax to iterate through each key of an object called a **`for-in loop`**.

**Methods vs Functions**

A **`Method`** is a function that _belongs_ to an object. Every method is a function, but _not_ every function is a method.

```javascript
myFunc is a
function
myObject.myFunc is a method of the object myObject
myObject["myFunc"] is a method of the object myObject
```

* **Methods** are just a key-value pair where the **key is the function name and the value is the function definition**.

```javascript
let dog = {
    name: "Fido",
};

dog.bark = function() {
    console.log("bark bark!");
};

// this is the same thing as above just using Bracket Notation
dog["speak"] = function(string) {
    console.log("WOOF " + string + " WOOF!!!");
};

dog.bark(); // prints `bark bark!`
dog.speak("pizza"); // prints `WOOF pizza WOOF!!!`

let dog2 = {
    name: "Rover",

    bark: function() {
        console.log("bork bork!");
    },

    speak: function(string) {
        console.log("BORK " + string + " BORK!!!");
    },
};
// Notice that in the object above, we still separate the key-value pairs with commas.
// `bark` and `speak` are just keys with functions as values.

dog2.bark(); // prints `bork bork!`
dog2.speak("burrito"); // prints `BORK burrito BORK!!!`
```

* To invoke these methods we just need to specify which object is calling that method.

```javascript
myObject.methodName();
```

**Useful Object Methods**

* **`Object.keys()`** : A method that allows us to iterate through keys, it accepts an obj as the argument and returns an array of the keys.
* **`Object.values()`** : Method that accepts an object as the argument and returns an array of the values.

**Iterating through an Object's keys & values**

* **`Object.entries`** : Method that accepts an object as the argument and returns an array of the \[key, value\] pairs within.

```javascript
> Object.entries(cat)[['name', 'Freyja'], ['color', 'orange']]
```

### **References vs Primitives**

**Primitives vs Objects**

So far we have learned about 6 different data types:

* **Primitive** : Boolean, Null, Undefined, Number, String.
* **Reference** : Object \(Arrays are a type of object\)
* Remember that **primitive** types are immutable!

**Immutabiity**

* When we reassign primitives we simply have our variable point elsewhere in memory.
* In a nutshell, **immutability** cannot change values in memory, but only reassign where our variables are pointing to.

**Mutabulity**

* If we change either cat1 or cat2, our computer memory will change because they are both pointing at the same memory location.

### **Rest and Spread**

**Using the Spread Operator and Rest Parameter Syntax** **Accepting Arguments**

* Just keep in mind that function will still run even if it is not passed any arguments.
* Parameters will take just as many arguments they need even if more than enough are offered.
* We will encounter an error if there are not enough parameters \( &gt; 0\).

**Utilizing Rest Parameters**

* **`Rest Parameter Syntax`** : Allows us to capture all of a function's incoming arguments into an array.
* Only the last parameter can be a rest parameter.

**Utilizing Spread Syntax**

* **Spread Operator** : Allows us to break down a data type into the elements that make it up.
  + Takes a data type \(i.e. array, obj\) and spreads the values of that type where elements are expected.
  + Takes iterable data and spreads the elements of that type where arguments are expected.

```javascript
let numArray = [1, 2, 3];

// here we are taking `numArray` and *spreading* it into a new array where
// comma separated elements are expected to be
let moreNums = [...numArray, 4, 5, 6];

>
moreNums
// => [1, 2, 3, 4, 5, 6]
```

**With Objects**

```javascript
let colors = {
    red: "scarlet",
    blue: "aquamarine"
};
let newColors = {
    ...colors
};

>
newColors
// { red: "scarlet", blue: "aquamarine" };
```

```javascript
let colors = {
    red: "scarlet",
    blue: "aquamarine"
};
let colors2 = {
    green: "forest",
    yellow: "sunflower"
};

let moreColors = {
    ...colors,
    ...colors2
};

>
moreColors
// {red: "scarlet", blue: "aquamarine", green: "forest", yellow: "sunflo
```
