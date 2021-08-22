# TypeError: cyclic object value

The JavaScript exception "cyclic object value" occurs when object references were found in [JSON](https://www.json.org/). [`JSON.stringify()`](../global_objects/json/stringify) doesn't try to solve them and fails accordingly.

## Message

    TypeError: cyclic object value (Firefox)
    TypeError: Converting circular structure to JSON (Chrome and Opera)
    TypeError: Circular reference in value argument not supported (Edge)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

The [JSON format](https://www.json.org/) per se doesn't support object references (although an [IETF draft exists](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), hence [`JSON.stringify()`](../global_objects/json/stringify) doesn't try to solve them and fails accordingly.

## Examples

### Circular references

In a circular structure like the following

    var circularReference = {otherData: 123};
    circularReference.myself = circularReference;

[`JSON.stringify()`](../global_objects/json/stringify) will fail

    JSON.stringify(circularReference);
    // TypeError: cyclic object value

To serialize circular references you can use a library that supports them (e.g. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)) or implement a solution by yourself, which will require finding and replacing (or removing) the cyclic references by serializable values.

The snippet below illustrates how to find and filter (thus causing data loss) a cyclic reference by using the `replacer` parameter of [`JSON.stringify()`](../global_objects/json/stringify):

    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };

    JSON.stringify(circularReference, getCircularReplacer());
    // {"otherData":123}

## See also

-   [`JSON.stringify`](../global_objects/json/stringify)
-   [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – Introduces two functions, `JSON.decycle` and `JSON.retrocycle`, which makes it possible to encode and decode cyclical structures and dags into an extended and retrocompatible JSON format.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value</a>
