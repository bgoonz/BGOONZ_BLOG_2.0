# RegExp.prototype.flags

The `flags` property returns a string consisting of the [flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2) of the current regular expression object.

Property attributes of `RegExp.prototype.flags`

Writable

no

Enumerable

no

Configurable

yes

## Description

Flags in the `flags` property are sorted alphabetically (from left to right, e.g. `"gimsuy"`).

## Examples

### Using flags

    /foo/ig.flags;   // "gi"
    /bar/myu.flags;  // "muy"

## Polyfill

    if (RegExp.prototype.flags === undefined) {
      Object.defineProperty(RegExp.prototype, 'flags', {
        configurable: true,
        get: function() {
          return this.toString().match(/[gimsuy]*$/)[0];
        }
      });
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-regexp.prototype.flags">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-regexp.prototype.flags</span></a></td></tr></tbody></table>

`flags`

49

79

37

No

39

9

49

49

37

41

9

5.0

## See also

-   [`RegExp.prototype.source`](source)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags</a>
