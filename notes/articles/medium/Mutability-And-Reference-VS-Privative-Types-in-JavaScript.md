Mutability And Reference VS Privative Types in JavaScript
=========================================================

Mutability && Primitive && Reference Examples

------------------------------------------------------------------------

### Mutability And Reference VS Privative Types in JavaScript

### Mutability && Primitive && Reference Examples

<figure><img src="https://cdn-images-1.medium.com/max/800/0*J3mKJ-lWgfS3qi5E.png" class="graf-image" /></figure><a href="https://doesitmutate.xyz/" class="markup--anchor markup--p-anchor"><strong><em>Mutability</em></strong></a>

In JavaScript, `String` values are immutable, which means that they cannot be altered once created.

For example, the following code:

    var myStr = "Bob";
    myStr[0] = "J";

cannot change the value of `myStr` to `Job`, because the contents of `myStr` cannot be altered. Note that this does *not* mean that `myStr` cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

    var myStr = "Bob";
    myStr = "Job";

### Objects are passed by reference, are mutable, and can be modified by our functions:

    function rotateLeft(arr, num) {
        for (let i = 0; i < num; i++) {
            let el = arr.pop();
            arr.unshift(el);
        }
    }
    let myArr = [1, 2, 3, 4, 5, ];
    rotateLeft(myArr, 2);
    console.log(myArr);

Strings are passed by value, are immutable, and a new array is constructed and returned, because it cannot be changed in place.

    function rotateString(str, num) {
        return str.slice(num) + str.slice(0, num);
    }

    let str = "foobar";
    let ret = rotateString(str, 3);
    console.log(str);
    console.log(ret);

### Dereferencing

#### Arrays

To dereference an array, use `let [var1, var2]` syntax.

    let arr = ['one', 'two', 'three'];

    let [first] = arr;
    console.log(first);

#### Objects

To dereference attributes from an object, use `let {}` syntax.

### Primitive Data Types in Depth

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*mRr-4QeqbjcMUTtQQNOlEw.png" class="graf-image" /></figure>

### Check Out My New Blog:

<a href="https://best-celery-b2d7c.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://best-celery-b2d7c.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Bryan</em> best-celery-b2d7c.netlify.app</a><a href="https://best-celery-b2d7c.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 27, 2021](https://medium.com/p/5294422db4b0).

<a href="https://medium.com/@bryanguner/mutability-and-reference-vs-privative-types-in-javascript-5294422db4b0" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
