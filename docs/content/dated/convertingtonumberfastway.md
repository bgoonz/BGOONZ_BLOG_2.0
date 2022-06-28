-   /en/converting-to-number-fast-way/

Converting strings to numbers is extremely common. The easiest and fastest ([jsPerf](https://jsperf.com/number-vs-parseint-vs-plus/29)) way to achieve that would be using the `+` (plus) operator.

```js
var one = '1';

var numberOne = +one; // Number 1
```

You can also use the `-` (minus) operator which type-converts the value into number but also negates it.

```js
var one = '1';

var negativeNumberOne = -one; // Number -1
```
