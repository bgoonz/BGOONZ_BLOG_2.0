# SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //\# instead

The JavaScript warning "Using `//@` to indicate sourceURL pragmas is deprecated. Use `//#` instead" occurs when there is a deprecated source map syntax in a JavaScript source.

## Message

    Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

    Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead

## Error type

A warning that a [`SyntaxError`](../global_objects/syntaxerror) occurred. JavaScript execution won't be halted.

## What went wrong?

There is a deprecated source map syntax in a JavaScript source.

JavaScript sources are often combined and minified to make delivering them from the server more efficient. With [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), the debugger can map the code being executed to the original source files.

The source map specification changed the syntax due to a conflict with IE whenever it was found in the page after `//@cc_on` was interpreted to turn on conditional compilation in the IE JScript engine. The [conditional compilation comment](https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx) in IE is a little known feature, but it broke source maps with [jQuery](https://bugs.jquery.com/ticket/13274) and other libraries.

## Examples

### Deprecated syntax

Syntax with the "@" sign is deprecated.

    //@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map

### Standard syntax

Use the "\#" sign instead.

    //# sourceMappingURL=http://example.com/path/to/your/sourcemap.map

Or, alternatively, you can set a [`SourceMap`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap) header to your JavaScript file to avoid having a comment at all:

    SourceMap: /path/to/file.js.map

## See also

-   [How to use a source map – Firefox Tools documentation](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)
-   [Introduction to source maps – HTML5 rocks](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
-   [`SourceMap`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma</a>
