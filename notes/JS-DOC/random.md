# Math.random()

The `Math.random()` function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

**Note:** `Math.random()` _does not_ provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the [`window.crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) method.

## Syntax

    Math.random()

### Return value

A floating-point, pseudo-random number between `0` (inclusive) and 1 (exclusive).

## Examples

Note that as numbers in JavaScript are IEEE 754 floating point numbers with round-to-nearest-even behavior, the ranges claimed for the functions below (excluding the one for `Math.random()` itself) aren't exact. If extremely large bounds are chosen (2<sup>53</sup> or higher), it's possible in _extremely_ rare cases to calculate the usually-excluded upper bound.

### Getting a random number between 0 (inclusive) and 1 (exclusive)

    function getRandom() {
      return Math.random();
    }

### Getting a random number between two values

This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) `min`, and is less than (and not equal) `max`.

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

### Getting a random integer between two values

This example returns a random _integer_ between the specified values. The value is no lower than `min` (or the next integer greater than `min` if `min` isn't an integer), and is less than (but not equal to) `max`.

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

**Note:** It might be tempting to use `Math.round()` to accomplish that, but doing so would cause your random numbers to follow a non-uniform distribution, which may not be acceptable for your needs.

### Getting a random integer between two values, inclusive

While the `getRandomInt()` function above is inclusive at the minimum, it's exclusive at the maximum. What if you need the results to be inclusive at both the minimum and the maximum? The `getRandomIntInclusive()` function below accomplishes that.

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.random">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Math.random' in that specification.</span></a></td></tr></tbody></table>

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

`random`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`window.crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random</a>
