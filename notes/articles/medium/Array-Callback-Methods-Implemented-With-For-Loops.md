Array Callback Methods Implemented With For Loops
=================================================

How to implement array callback methods in JavaScript

------------------------------------------------------------------------

### Array Callback Methods Implemented With For Loops

#### How to implement array callback methods in JavaScript

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WpKqOdTsTPhvapuW" class="graf-image" /></figure>#### Functions are called “First Class Objects” in JavaScript because:

-   <span id="1df8">A function is an instance of the Object type</span>
-   <span id="6e67">A function can have properties and has a link back to its constructor method</span>
-   <span id="c7cf">You can store the function in a variable</span>
-   <span id="b709">You can pass the function as a parameter to another function</span>
-   <span id="2c3c">You can return the function from a function</span>

What do you think will be printed in the following:

#### Anonymous callback, a named callback

    function foo(callback) {
        console.log('grape');
        callback();
    }

    function bar() {
        console.log('banana');
    }

    const fruitBasket = function() {
        console.log('apple');
        bar();
        foo(bar);
        foo(function() {
            console.log('orange');
        });
        console.log('pear');
    };

    fruitBasket();

#### Function that takes in a value and two callbacks. The function should return the result of the callback who’s invocation results in a larger value.

    function greaterValue(value, cb1, cb2) {
        // compare cb1 invoked with value to cb2 invoked with value
        // return the greater result

        let res1 = cb1(value);
        let res2 = cb2(value);
        if (res1 > res2) {
            // if this is false, we move out of if statement
            return res1;
        }
        return res2;
    }

    let negate = function(num) {
        return num * -1;
    };

    let addOne = function(num) {
        return num + 1;
    };

    console.log(greaterValue(3, negate, addOne));
    console.log(greaterValue(-2, negate, addOne));

*Note: we do not invoke* `negate` *or* `addOne` *(by using* `()` *to call them), we are passing the function itself.*

#### Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.prototype.map.

    function myMap(arr, callback) {
        // iterate through the array, perform the cb on each element
        // return a new array with those new values
        let mapped = [];

        for (let i = 0; i < arr.length; i++) {
            // remember that map passes three args with each element.
            let val = callback(arr[i], i, arr);
            mapped.push(val);
        }

        return mapped;
    }

    let double = function(num) {
        return num * 2;
    };
    console.log(myMap([1, 2, 3], double));

#### Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.prototype.filter.

    function myFilter(arr, callback) {
        let filtered = [];

        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];

            if (callback(element, i, arr)) {
                filtered.push(element);
            }
        }

        return filtered;
    }

#### Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.prototype.every.

    function myEvery(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];

            if (callback(element, i, arr) === false) {
                return false;
            }
        }
        return true;
    }

### Further Examples of the above concepts

    const createMeowValue = () => {
      console.log(this.name);
      let meow = function () {
        console.log(this);
        console.log(this.name + ' meows');
      }
      meow = meow.bind(this);
      return meow;
    };

    const name = 'Fluffy';

    const cat = {
      name: name,
      age: 12,
      createMeow: function () {
        console.log(this.name);
        let meow = () => {
          const hello = 'hello';
          console.log(this.name + ' meows');
        };
        let world = '';
        if (true) {
          world = 'world';
        }
        console.log(world);
        // meow = meow.bind(this);
        return meow;
      }
    };

    cat.newKey = function () {
      const outermostContext = this;
      const innerFunc = () => {
        secondContext = this;
        console.log(secondContext === outermostContext)
        return function () {
          innermostContext = this;
        }
      };
      return innerFunc.bind(outermostContext);
    };

    const meow = cat.createMeow(); // method-style invocation
    meow(); // function-style invocation

    console.log('-------')

    const createMeow = cat.createMeow;
    const globalMeow = createMeow(); // function-style
    globalMeow(); // function-style

    function createSmoothie(ingredient) {
      const ingredients = [ingredient];
      return ingredients;
    }

    // console.log(createSmoothie('banana'));
    // console.log(createSmoothie('apple'));

    // one parameter only
    // first argument is a string
    // return an array
    // DO NOT USE forEach

References:

<a href="https://open.appacademy.io/learn" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://open.appacademy.io/learn"><strong>App Academy Open</strong><br />
<em>App Academy Open is the first free, online web development course that's meant to get you hired as a developer. Get…</em>open.appacademy.io</a><a href="https://open.appacademy.io/learn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/"><strong>MDN Web Docs</strong><br />
<em>Read more at hacks.mozilla.org Roughly a year ago at Mozilla we started an effort to improve Firefox stability on…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/callbacks" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/callbacks"><strong>Introduction: callbacks</strong><br />
<em>To demonstrate the use of callbacks, promises and other abstract concepts, we'll be using some browser methods…</em>javascript.info</a><a href="https://javascript.info/callbacks" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

*More content at* <a href="http://plainenglish.io" class="markup--anchor markup--p-anchor"><strong><em>plainenglish.io</em></strong></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 27, 2021](https://medium.com/p/d08875df6777).

<a href="https://medium.com/@bryanguner/array-callback-methods-implemented-with-for-loops-d08875df6777" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
