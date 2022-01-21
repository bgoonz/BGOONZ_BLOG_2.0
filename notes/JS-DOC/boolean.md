# Boolean

The `Boolean` object is an object wrapper for a boolean value.

## Description

The value passed as the first parameter is converted to a boolean value, if necessary. If the value is omitted or is `0`, `-0`, [`null`](null), `false`, [`NaN`](nan), [`undefined`](undefined), or the empty string (`""`), the object has an initial value of `false`. All other values, including any object, an empty array (`[]`), or the string "`false`", create an object with an initial value of `true`.

Do not confuse the [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) `Boolean` values `true` and `false` with the `true` and `false` values of the `Boolean` object.

**Any** object of which the value is not [`undefined`](undefined) or [`null`](null), including a `Boolean` object whose value is `false`, evaluates to `true` when passed to a conditional statement. For example, the condition in the following [`if`](../statements/if...else) statement evaluates to `true`:

    var x = new Boolean(false);
    if (x) {
      // this code is executed
    }

This behavior does not apply to `Boolean` primitives. For example, the condition in the following [`if`](../statements/if...else) statement evaluates to `false`:

    var x = false;
    if (x) {
      // this code is not executed
    }

Do not use a `Boolean` object to convert a non-boolean value to a boolean value. To perform this task, instead, use `Boolean` as a function, or a [double NOT operator](../operators/logical_not):

    var x = Boolean(expression);     // use this...
    var x = !!(expression);          // ...or this
    var x = new Boolean(expression); // don't use this!

If you specify any object, including a `Boolean` object whose value is `false`, as the initial value of a `Boolean` object, the new `Boolean` object has a value of `true`.

    var myFalse = new Boolean(false);   // initial value of false
    var g = Boolean(myFalse);       // initial value of true
    var myString = new String('Hello'); // string object
    var s = Boolean(myString);      // initial value of true

Do not use a `Boolean` object in place of a `Boolean` primitive.

**Note:** When the non-standard property `document.all` is used as an argument for this constructor, the result is a `Boolean` object with the value `false`. This property is legacy and non-standard and should not be used.

## Constructor

[`Boolean()`](boolean/boolean)  
Creates a new `Boolean` object.

## Instance methods

[`Boolean.prototype.toString()`](boolean/tostring)  
Returns a string of either `true` or `false` depending upon the value of the object. Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`Boolean.prototype.valueOf()`](boolean/valueof)  
Returns the primitive value of the [`Boolean`](boolean) object. Overrides the [`Object.prototype.valueOf()`](object/valueof) method.

## Examples

### Creating `Boolean` objects with an initial value of `false`

    var bNoParam = new Boolean();
    var bZero = new Boolean(0);
    var bNull = new Boolean(null);
    var bEmptyString = new Boolean('');
    var bfalse = new Boolean(false);

### Creating `Boolean` objects with an initial value of `true`

    var btrue = new Boolean(true);
    var btrueString = new Boolean('true');
    var bfalseString = new Boolean('false');
    var bSuLin = new Boolean('Su Lin');
    var bArrayProto = new Boolean([]);
    var bObjProto = new Boolean({});

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-boolean-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-boolean-objects</span></a></td></tr></tbody></table>

`Boolean`

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

`Boolean`

1

12

1

3

4

1

1

18

4

10.1

1

1.0

`toSource`

No

No

1-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

4

No

No

No

`toString`

1

12

1

3

4

1

1

18

4

10.1

1

1.0

`valueOf`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
-   [Boolean primitives](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
-   [Boolean data type (Wikipedia)](https://en.wikipedia.org/wiki/Boolean_data_type)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean</a>
