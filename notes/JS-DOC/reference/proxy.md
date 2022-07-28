# Proxy

The `Proxy` object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Description

A `Proxy` is created with two parameters:

-   `target`: the original object which you want to proxy
-   `handler`: an object that defines which operations will be intercepted and how to redefine intercepted operations.

For example, this code defines a simple target with just two properties, and an even simpler handler with no properties:

    const target = {
      message1: "hello",
      message2: "everyone"
    };

    const handler1 = {};

    const proxy1 = new Proxy(target, handler1);

Because the handler is empty, this proxy behaves just like the original target:

    console.log(proxy1.message1); // hello
    console.log(proxy1.message2); // everyone

To customise the proxy, we define functions on the handler object:

    const target = {
      message1: "hello",
      message2: "everyone"
    };

    const handler2 = {
      get: function(target, prop, receiver) {
        return "world";
      }
    };

    const proxy2 = new Proxy(target, handler2);

Here we've provided an implementation of the [`get()`](proxy/proxy/get) handler, which intercepts attempts to access properties in the target.

Handler functions are sometimes called _traps_, presumably because they trap calls to the target object. The very simple trap in `handler2` above redefines all property accessors:

    console.log(proxy2.message1); // world
    console.log(proxy2.message2); // world

With the help of the [`Reflect`](reflect) class we can give some accessors the original behavior and redefine others:

    const target = {
      message1: "hello",
      message2: "everyone"
    };

    const handler3 = {
      get: function (target, prop, receiver) {
        if (prop === "message2") {
          return "world";
        }
        return Reflect.get(...arguments);
      },
    };

    const proxy3 = new Proxy(target, handler3);

    console.log(proxy3.message1); // hello
    console.log(proxy3.message2); // world

## Constructor

[`Proxy()`](proxy/proxy)  
Creates a new `Proxy` object.

## Static methods

[`Proxy.revocable()`](proxy/revocable)  
Creates a revocable `Proxy` object.

## Examples

### Basic example

In this simple example, the number `37` gets returned as the default value when the property name is not in the object. It is using the [`get()`](proxy/proxy/get) handler.

    const handler = {
      get: function(obj, prop) {
        return prop in obj ?
          obj[prop] :
          37;
      }
    };

    const p = new Proxy({}, handler);
    p.a = 1;
    p.b = undefined;

    console.log(p.a, p.b);
    //  1, undefined

    console.log('c' in p, p.c);
    //  false, 37

### No-op forwarding proxy

In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.

    const target = {};
    const p = new Proxy(target, {});

    p.a = 37;
    //  operation forwarded to the target

    console.log(target.a);
    //  37
    //  (The operation has been properly forwarded!)

Note that while this "no-op" works for JavaScript objects, it does not work for native browser objects like DOM Elements.

### Validation

With a `Proxy`, you can easily validate the passed value for an object. This example uses the [`set()`](proxy/proxy/set) handler.

    let validator = {
      set: function(obj, prop, value) {
        if (prop === 'age') {
          if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer');
          }
          if (value > 200) {
            throw new RangeError('The age seems invalid');
          }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
      }
    };

    const person = new Proxy({}, validator);

    person.age = 100;
    console.log(person.age); // 100
    person.age = 'young';    // Throws an exception
    person.age = 300;        // Throws an exception

### Extending constructor

A function proxy could easily extend a constructor with a new constructor. This example uses the [`construct()`](proxy/proxy/construct) and [`apply()`](proxy/proxy/apply) handlers.

    function extend(sup, base) {
      var descriptor = Object.getOwnPropertyDescriptor(
        base.prototype, 'constructor'
      );
      base.prototype = Object.create(sup.prototype);
      var handler = {
        construct: function(target, args) {
          var obj = Object.create(base.prototype);
          this.apply(target, obj, args);
          return obj;
        },
        apply: function(target, that, args) {
          sup.apply(that, args);
          base.apply(that, args);
        }
      };
      var proxy = new Proxy(base, handler);
      descriptor.value = proxy;
      Object.defineProperty(base.prototype, 'constructor', descriptor);
      return proxy;
    }

    var Person = function(name) {
      this.name = name;
    };

    var Boy = extend(Person, function(name, age) {
      this.age = age;
    });

    Boy.prototype.gender = 'M';

    var Peter = new Boy('Peter', 13);

    console.log(Peter.gender);  // "M"
    console.log(Peter.name);    // "Peter"
    console.log(Peter.age);     // 13

### Manipulating DOM nodes

Sometimes you want to toggle the attribute or class name of two different elements. Here's how using the [`set()`](proxy/proxy/set) handler.

    let view = new Proxy({
      selected: null
    },
    {
      set: function(obj, prop, newval) {
        let oldval = obj[prop];

        if (prop === 'selected') {
          if (oldval) {
            oldval.setAttribute('aria-selected', 'false');
          }
          if (newval) {
            newval.setAttribute('aria-selected', 'true');
          }
        }

        // The default behavior to store the value
        obj[prop] = newval;

        // Indicate success
        return true;
      }
    });

    let i1 = view.selected = document.getElementById('item-1');  //giving error here, i1 is null
    console.log(i1.getAttribute('aria-selected'));
    //  'true'

    let i2 = view.selected = document.getElementById('item-2');
    console.log(i1.getAttribute('aria-selected'));
    //  'false'

    console.log(i2.getAttribute('aria-selected'));
    //  'true'
    Note: even if selected: !null, then giving oldval.setAttribute is not a function

### Value correction and an extra property

The `products` proxy object evaluates the passed value and converts it to an array if needed. The object also supports an extra property called `latestBrowser` both as a getter and a setter.

    let products = new Proxy({
      browsers: ['Internet Explorer', 'Netscape']
    },
    {
      get: function(obj, prop) {
        // An extra property
        if (prop === 'latestBrowser') {
          return obj.browsers[obj.browsers.length - 1];
        }

        // The default behavior to return the value
        return obj[prop];
      },
      set: function(obj, prop, value) {
        // An extra property
        if (prop === 'latestBrowser') {
          obj.browsers.push(value);
          return true;
        }

        // Convert the value if it is not an array
        if (typeof value === 'string') {
          value = [value];
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
      }
    });

    console.log(products.browsers);
    //  ['Internet Explorer', 'Netscape']

    products.browsers = 'Firefox';
    //  pass a string (by mistake)

    console.log(products.browsers);
    //  ['Firefox'] <- no problem, the value is an array

    products.latestBrowser = 'Chrome';

    console.log(products.browsers);
    //  ['Firefox', 'Chrome']

    console.log(products.latestBrowser);
    //  'Chrome'

### Finding an array item object by its property

This proxy extends an array with some utility features. As you see, you can flexibly "define" properties without using [`Object.defineProperties()`](object/defineproperties). This example can be adapted to find a table row by its cell. In that case, the target will be [`table.rows`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/rows).

    let products = new Proxy([
      { name: 'Firefox', type: 'browser' },
      { name: 'SeaMonkey', type: 'browser' },
      { name: 'Thunderbird', type: 'mailer' }
    ],
    {
      get: function(obj, prop) {
        // The default behavior to return the value; prop is usually an integer
        if (prop in obj) {
          return obj[prop];
        }

        // Get the number of products; an alias of products.length
        if (prop === 'number') {
          return obj.length;
        }

        let result, types = {};

        for (let product of obj) {
          if (product.name === prop) {
            result = product;
          }
          if (types[product.type]) {
            types[product.type].push(product);
          } else {
            types[product.type] = [product];
          }
        }

        // Get a product by name
        if (result) {
          return result;
        }

        // Get products by type
        if (prop in types) {
          return types[prop];
        }

        // Get product types
        if (prop === 'types') {
          return Object.keys(types);
        }

        return undefined;
      }
    });

    console.log(products[0]);          // { name: 'Firefox', type: 'browser' }
    console.log(products['Firefox']);  // { name: 'Firefox', type: 'browser' }
    console.log(products['Chrome']);   // undefined
    console.log(products.browser);     // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
    console.log(products.types);       // ['browser', 'mailer']
    console.log(products.number);      // 3

### A complete `traps` list example

Now in order to create a complete sample `traps` list, for didactic purposes, we will try to proxify a _non-native_ object that is particularly suited to this type of operation: the `docCookies` global object created by [the "little framework" published on the `document.cookie` page](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework).

    /*
      var docCookies = ... get the "docCookies" object here:
      https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
    */

    var docCookies = new Proxy(docCookies, {
      get: function (oTarget, sKey) {
        return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
      },
      set: function (oTarget, sKey, vValue) {
        if (sKey in oTarget) { return false; }
        return oTarget.setItem(sKey, vValue);
      },
      deleteProperty: function (oTarget, sKey) {
        if (!sKey in oTarget) { return false; }
        return oTarget.removeItem(sKey);
      },
      enumerate: function (oTarget, sKey) {
        return oTarget.keys();
      },
      ownKeys: function (oTarget, sKey) {
        return oTarget.keys();
      },
      has: function (oTarget, sKey) {
        return sKey in oTarget || oTarget.hasItem(sKey);
      },
      defineProperty: function (oTarget, sKey, oDesc) {
        if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
        return oTarget;
      },
      getOwnPropertyDescriptor: function (oTarget, sKey) {
        var vValue = oTarget.getItem(sKey);
        return vValue ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false
        } : undefined;
      },
    });

    /* Cookies test */

    console.log(docCookies.my_cookie1 = 'First value');
    console.log(docCookies.getItem('my_cookie1'));

    docCookies.setItem('my_cookie1', 'Changed value');
    console.log(docCookies.my_cookie1);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-proxy-objects">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Proxy' in that specification.</span></a></td></tr></tbody></table>

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

`Proxy`

49

12

18

No

36

10

49

49

18

36

10

5.0

`Proxy`

49

12

18

No

36

10

49

49

18

36

10

5.0

`revocable`

63

12

34

No

50

10

63

63

34

46

10

8.0

## See also

-   ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](https://www.slideshare.net/BrendanEich/metaprog-5303821))
-   [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) and [ECMAScript Harmony proxy semantics page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
-   [Tutorial on proxies](https://web.archive.org/web/20171007221059/http://soft.vub.ac.be/~tvcutsem/proxies/)
-   [SpiderMonkey specific Old Proxy API](https://developer.mozilla.org/en-US/docs/JavaScript/Old_Proxy_API)
-   <span class="page-not-created">`Object.watch()`</span> is a non-standard feature, but has been supported in Gecko for a long time.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy</a>
