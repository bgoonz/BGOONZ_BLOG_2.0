tip-writer-support: https://www.coinbase.com/loverajoel

-   /en/differences-between-undefined-and-null/
-
-   `undefined` means a variable has not been declared,
-   `null` is an assignment value that means "no value"
-   Javascript sets unassigned variables with a default value of `undefined`
-   Javascript never sets a value to `null`. It is u
-   `undefined` is not valid in JSON
-   `undefined` typeof is `undefined`
-   `null` typeof is an
-   Both are primitives
-   Both are [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    (`Boolean(undefined) // false`, `Boolean(null) // false`)
-   You can know if a variable is [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

    ```js
    typeof variable === 'undefined';
    ```

````
- You can check if a variable is [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

  ```js
  variable === null
````

-   The **equality** operator considers them equal, but the **identity** doesn't

    ```js
    null == undefined; // true

    null === undefined; // false
    ```

```

```
