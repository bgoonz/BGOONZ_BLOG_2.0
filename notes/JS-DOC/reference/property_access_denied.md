# Error: Permission denied to access property "x"

The JavaScript exception "Permission denied to access property" occurs when there was an attempt to access an object for which you have no permission.

## Message

    Error: Permission denied to access property "x"

## Error type

[`Error`](../global_objects/error).

## What went wrong?

There was attempt to access an object for which you have no permission. This is likely an [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) element loaded from a different domain for which you violated the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

## Examples

### No permission to access document

    <!DOCTYPE html>
    <html>
      <head>
        <iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
        <script>
          onload = function() {
            console.log(frames[0].document);
            // Error: Permission denied to access property "document"
          }
        </script>
      </head>
      <body></body>
    </html>

## See also

-   [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
-   [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Property_access_denied" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Property_access_denied</a>
