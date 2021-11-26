LocalStorage VS SessionStorage
==============================

Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

------------------------------------------------------------------------

### LocalStorage VS SessionStorage

Web storage objects `localStorage` and `sessionStorage` allow to save key/value pairs in the browser.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*sJFEUTv2t9DsmpE2" class="graf-image" /></figure>What’s interesting about them is that the data survives a page refresh (for `sessionStorage`) and even a full browser restart (for `localStorage`). We'll see that very soon.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NL5JYJqGcyQ7Q16P.png" class="graf-image" /></figure>We already have cookies. Why additional objects?

-   <span id="ceb3">Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that.</span>
-   <span id="bff4">Also unlike cookies, the server can’t manipulate storage objects via HTTP headers. Everything’s done in JavaScript.</span>
-   <span id="ac8e">The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they can’t access data from each other.</span>

Both storage objects provide same methods and properties:

-   <span id="63b8">`setItem(key, value)` -- store key/value pair.</span>
-   <span id="72e2">`getItem(key)` -- get the value by key.</span>
-   <span id="848a">`removeItem(key)` -- remove the key with its value.</span>
-   <span id="b51e">`clear()` -- delete everything.</span>
-   <span id="7c98">`key(index)` -- get the key on a given position.</span>
-   <span id="ef56">`length` -- the number of stored items.</span>

As you can see, it’s like a `Map` collection (`setItem/getItem/removeItem`), but also allows access by index with `key(index)`.

Let’s see how it works.

### localStorage demo

The main features of `localStorage` are:

-   <span id="73ee">Shared between all tabs and windows from the same origin.</span>
-   <span id="fc86">The data does not expire. It remains after the browser restart and even OS reboot.</span>

For instance, if you run this code…

    localStorage.setItem('test', 1);

…And close/open the browser or just open the same page in a different window, then you can get it like this:

    alert( localStorage.getItem('test') ); // 1

We only have to be on the same origin (domain/port/protocol), the url path can be different.

The `localStorage` is shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one.

### Object-like access

We can also use a plain object way of getting/setting keys, like this:

    // set key
    localStorage.test = 2;

    // get key
    alert( localStorage.test ); // 2

    // remove key
    delete localStorage.test;

That’s allowed for historical reasons, and mostly works, but generally not recommended, because:

1.  <span id="c7fb">If the key is user-generated, it can be anything, like `length` or `toString`, or another built-in method of `localStorage`. In that case `getItem/setItem` work fine, while object-like access fails:</span>

<!-- -->

    let key = ‘length’; localStorage[key] = 5; // Error, can’t assign length

1.  <span id="3020">There’s a `storage` event, it triggers when we modify the data. That event does not happen for object-like access. We'll see that later in this chapter.</span>

### Looping over keys

As we’ve seen, the methods provide “get/set/remove by key” functionality. But how to get all saved values or keys?

Unfortunately, storage objects are not iterable.

One way is to loop over them as over an array:

    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      alert(`${key}: ${localStorage.getItem(key)}`);
    }

Another way is to use `for key in localStorage` loop, just as we do with regular objects.

It iterates over keys, but also outputs few built-in fields that we don’t need:

    // bad try
    for(let key in localStorage) {
      alert(key); // shows getItem, setItem and other built-in stuff
    }

…So we need either to filter fields from the prototype with `hasOwnProperty` check:

    for(let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue; // skip keys like "setItem", "getItem" etc
      }
      alert(`${key}: ${localStorage.getItem(key)}`);
    }

…Or just get the “own” keys with `Object.keys` and then loop over them if needed:

    let keys = Object.keys(localStorage);
    for(let key of keys) {
      alert(`${key}: ${localStorage.getItem(key)}`);
    }

The latter works, because `Object.keys` only returns the keys that belong to the object, ignoring the prototype.

### Strings only

Please note that both key and value must be strings.

If were any other type, like a number, or an object, it gets converted to string automatically:

    sessionStorage.user = {name: "John"};
    alert(sessionStorage.user); // [object Object]

We can use `JSON` to store objects though:

    sessionStorage.user = JSON.stringify({name: "John"});

    // sometime later
    let user = JSON.parse( sessionStorage.user );
    alert( user.name ); // John

Also it is possible to stringify the whole storage object, e.g. for debugging purposes:

    // added formatting options to JSON.stringify to make the object look nicer
    alert( JSON.stringify(localStorage, null, 2) );

### sessionStorage

The `sessionStorage` object is used much less often than `localStorage`.

Properties and methods are the same, but it’s much more limited:

-   <span id="94a1">The `sessionStorage` exists only within the current browser tab.</span>
-   <span id="c149">Another tab with the same page will have a different storage.</span>
-   <span id="9a82">But it is shared between iframes in the same tab (assuming they come from the same origin).</span>
-   <span id="c0d7">The data survives page refresh, but not closing/opening the tab.</span>

Let’s see that in action.

Run this code…

    sessionStorage.setItem('test', 1);

…Then refresh the page. Now you can still get the data:

    alert( sessionStorage.getItem('test') ); // after refresh: 1

…But if you open the same page in another tab, and try again there, the code above returns `null`, meaning "nothing found".

That’s exactly because `sessionStorage` is bound not only to the origin, but also to the browser tab. For that reason, `sessionStorage` is used sparingly.

### Storage event

When the data gets updated in `localStorage` or `sessionStorage`, <a href="https://www.w3.org/TR/webstorage/#the-storage-event" class="markup--anchor markup--p-anchor">storage</a> event triggers, with properties:

-   <span id="9c38">`key` – the key that was changed (`null` if `.clear()` is called).</span>
-   <span id="1cd8">`oldValue` – the old value (`null` if the key is newly added).</span>
-   <span id="df18">`newValue` – the new value (`null` if the key is removed).</span>
-   <span id="bda8">`url` – the url of the document where the update happened.</span>
-   <span id="cb21">`storageArea` – either `localStorage` or `sessionStorage` object where the update happened.</span>

The important thing is: the event triggers on all `window` objects where the storage is accessible, except the one that caused it.

Let’s elaborate.

Imagine, you have two windows with the same site in each. So `localStorage` is shared between them.

    You might want to open this page in two browser windows to test the code below.

If both windows are listening for `window.onstorage`, then each one will react on updates that happened in the other one.

    // triggers on updates made to the same storage from other documents
    window.onstorage = event => { // same as window.addEventListener('storage', event => {
      if (event.key != 'now') return;
      alert(event.key + ':' + event.newValue + " at " + event.url);
    };

    localStorage.setItem('now', Date.now());

Please note that the event also contains: `event.url` -- the url of the document where the data was updated.

Also, `event.storageArea` contains the storage object -- the event is the same for both `sessionStorage` and `localStorage`, so `event.storageArea` references the one that was modified. We may even want to set something back in it, to "respond" to a change.

**That allows different windows from the same origin to exchange messages.**

Modern browsers also support Broadcast channel API, the special API for same-origin inter-window communication, it’s more full featured, but less supported. There are libraries that polyfill that API, based on `localStorage`, that make it available everywhere.

### Summary

Web storage objects `localStorage` and `sessionStorage` allow to store key/value in the browser.

-   <span id="33af">Both `key` and `value` must be strings.</span>
-   <span id="148d">The limit is 5mb+, depends on the browser.</span>
-   <span id="acca">They do not expire.</span>
-   <span id="78c6">The data is bound to the origin (domain/port/protocol).</span>

`localStoragesessionStorage`

> Shared between all tabs and windows with the same originVisible within a browser tab, including iframes from the same origin

> Survives browser restartSurvives page refresh (but not tab close)

API:

-   <span id="14d9">`setItem(key, value)` -- store key/value pair.</span>
-   <span id="519b">`getItem(key)` -- get the value by key.</span>
-   <span id="09a8">`removeItem(key)` -- remove the key with its value.</span>
-   <span id="4d2e">`clear()` -- delete everything.</span>
-   <span id="68ca">`key(index)` -- get the key number `index`.</span>
-   <span id="e125">`length` -- the number of stored items.</span>
-   <span id="a33a">Use `Object.keys` to get all keys.</span>
-   <span id="29fb">We access keys as object properties, in that case `storage` event isn't triggered.</span>

Storage event:

-   <span id="fdbd">Triggers on `setItem`, `removeItem`, `clear` calls.</span>
-   <span id="c3ea">Contains all the data about the operation (`key/oldValue/newValue`), the document `url` and the storage object `storageArea`.</span>
-   <span id="a8dd">Triggers on all `window` objects that have access to the storage except the one that generated it (within a tab for `sessionStorage`, globally for `localStorage`).</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 18, 2021](https://medium.com/p/d196a20099a5).

<a href="https://medium.com/@bryanguner/css-animations-d196a20099a5" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
