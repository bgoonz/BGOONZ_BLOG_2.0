# String.prototype.trimStart()

The `trimStart()` method removes whitespace from the beginning of a string. `trimLeft()` is an alias of this method.

## Syntax

    trimStart()

    trimLeft()

### Return value

A new string representing `str` stripped of whitespace from its beginning (left side).

If the beginning of `str` has no whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

### Aliasing

For consistency with functions like [`String.prototype.padStart`](padstart) the standard method name is `trimStart`. However, for web compatibility reasons, `trimLeft` remains as an alias to `trimStart`. In some engines this means:

    String.prototype.trimLeft.name === "trimStart";

## Examples

### Using trimStart()

The following example displays the lowercase string `'foo '`:

    var str = '   foo  ';

    console.log(str.length); // 8

    str = str.trimStart();
    console.log(str.length); // 5
    console.log(str);        // 'foo  '

## Polyfill

    //https://github.com/FabioVergani/js-Polyfill_String-trimStart

    (function(w){
        var String=w.String, Proto=String.prototype;

        (function(o,p){
            if(p in o?o[p]?false:true:true){
                var r=/^\s+/;
                o[p]=o.trimLeft||function(){
                    return this.replace(r,'')
                }
            }
        })(Proto,'trimStart');

    })(window);

    /*
    ES6:
    (w=>{
        const String=w.String, Proto=String.prototype;

        ((o,p)=>{
            if(p in o?o[p]?false:true:true){
                const r=/^\s+/;
                o[p]=o.trimLeft||function(){
                    return this.replace(r,'')
                }
            }
        })(Proto,'trimStart');

    })(window);
    */

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.trimstart">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.trimstart</span></a></td></tr></tbody></table>

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

`trimStart`

66

4

12

61

3.5

No

53

15

12

66

≤37

66

18

61

4

47

14

12

9.0

1.0

## See also

-   [`String.prototype.trim()`](trim)
-   [`String.prototype.trimEnd()`](trimend)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart</a>
