# App Academy Open

> Learn to code online with access to App Academy's entire full-stack course for free

-   ⏱ 10 minutes

-   Catalog
-   Js Py Sep 2020 Online
-   Week 6 Sep 2020 Online
-   Wt Part Three Testing Classes With Chai

In this reading we'll be covering:

-   how to test classes using `Mocha` and `Chai`

## Part Three: Testing classes using Mocha and Chai

Let's expand our knowledge of testing syntax by testing some classes! In order to fully test a class, we'll be looking to test that class's instance and static methods. Create a new file in the `problems` folder - `dog.js`. We'll use the following code for the rest of our tests so make sure to copy it over:

    // testing-demo/problems/dog.js

    class Dog {
      constructor(name) {
        this.name = name;
      }

      bark() {
        return `${this.name} is barking`;
      }

      chainChaseTail(num) {
        if (typeof num !== "number") {
          throw new TypeError("please only use numbers for this function");
        }
        for (let i = 0; i < num; i++) {
          this.chaseTail();
        }
      }

      chaseTail() {
        console.log(`${this.name} is chasing their tail`);
      }

      static cleanDogs(dogs) {
        let cleanDogs = [];
        dogs.forEach(dog => {
          let dogStr = `I cleaned ${dog.name}'s paws.`;
          cleanDogs.push(dogStr);
        });
        return cleanDogs;
      }
    }

    // ensure to export our class!
    module.exports = Dog;

To test this class we'll create a new file in our `test` directory - `dog-spec.js` so your file structure should now look like this:

    testing-demo
      └──
      problems
        └── reverse-string.js
        └── dog.js
      test
        └── reverse-string-spec.js
        └── dog-spec.js

Let's now set up our `dog-spec.js` file. For this example we'll get experience using another assertion library named [`Chai`](https://www.chaijs.com/). As you'll soon see, the Chai library comes with a lot more built-in more functionality than Node's `Assert` module.

Now since `Chai` is another external library we'll need to import it in order to use it. We need to run a few commands to first create a `package.json` and then we can import the `chai` library. Start off by running `npm init --y` in the top level directory (`testing-demo`) to create a `package.json` file. After that is finished you can import the `Chai` library by running `npm install chai`.

Here is what that will look like in your terminal:

    ~ testing-demo $ npm init --y
    Wrote to /testing-demo/problems/package.json:

    {
      "name": "testing-demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "directories": {
        "test": "test"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }

    ~ testing-demo $ npm install chai

Now that we've installed `Chai` we can set up our test file. Create a new file in the `test` folder named `dog-spec.js` We'll require the `expect` module from Chai for our assertions, import our `Dog` class, and set up our outer `describe` function for testing the `Dog` class:

    // testing-demo/test/dog-spec.js

    // set up chai
    const chai = require("chai");
    const expect = chai.expect;

    // don't forget to import the class you are testing!
    const Dog = require("../problems/dog.js");

    // our outer describe for the whole Dog class
    describe("Dog", function() {});

So the first thing we'll generally want to test on classes is their `constructor` functions - we need to make sure new instances have the correct properties and that those properties are being set properly before we can test anything else. For the `Dog` class it looks like a name is accepted on instantiation, so let's test that!

We'll start with a nested describe function within our outer `Dog` describe function:

    describe("Dog", function() {
      describe("Dog Constructor Function", function() {
        it('should have a "name" property', function() {});
      });
    });

Now we are using a different assertion library so we'll be working with some different syntax. Open up the [`Chai Expect`](https://www.chaijs.com/api/bdd/) documentation for reference, we won't be going into tons of detail into every function we use with Chai because Chai allows for a lot of smaller chainable functions and we know you have lives outide this reading.

The nice thing about Chai is that the chainable functions available will often read like English. Check out the right column of this handy [Chai cheatsheet](https://devhints.io/chai) for a quick and easy reference on chainable functions.

We'll start our first spec off by using the [`property`](https://www.chaijs.com/api/bdd/#method_property) matcher to ensure that a newly instantiated object has a specified property:

    describe("Dog", function() {
      describe("Dog Constructor Function", function() {
        it('should have a "name" property', function() {
          const layla = new Dog("Layla");
          // all our of chai tests will begin with the expect function
          // .to and .have are Chai chainable functions
          // .property is the matcher we are using
          expect(layla).to.have.property("name");
        });
      });
    });

Now to test our new spec we can run just the Dog class specs by running `mocha test/dog-spec.js` from our top level directory. Running that command we'll see:

    Dog
      Dog Constructor Function
        ✓ should have a "name" property

    1 passing (8ms)

Nice! We tested that the name property exists on a new dog instance. Next, we can make sure our name is set properly with another test:

    describe("Dog Constructor Function", function() {
      it('should have a "name" property', function() {
        const layla = new Dog("Layla");
        expect(layla).to.have.property("name");
      });

      it('should set the "name" property when a new dog is created', function() {
        const layla = new Dog("Layla");
        // we are using the eql function to compare the value of layla.name
        // with the provided string
        expect(layla.name).to.eql("Layla");
      });
    });

Running the above using `mocha` we'll see both of our specs passing! Now take extra note of the fact that we are defining the same variable twice using `const` within the above `it` callbacks. This is important to note because it underlines the fact that each of the unit tests you write will have their own scope - meaning that they are each independent of the specs that came before or after them.

Head to the next reading to refactor some of the code we just wrote using `Mocha` hooks!

Did you find this lesson helpful?

[Source](https://open.appacademy.io/learn/js-py---sep-2020-online/week-6-sep-2020-online/wt-part-three--testing-classes-with-chai)
