-   /en/converting-truthy-falsy-values-to-boolean/

You can convert a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) or [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value to true boolean with the `!!` operator.

```js
!!''; // false
!!0; // false
!!null; // false
!!undefined; // false
!!NaN; // false

!!'hello'; // true
!!1; // true
!!{}; // true
!![]; // true
```
