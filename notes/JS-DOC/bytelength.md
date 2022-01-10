# SharedArrayBuffer.prototype.byteLength

The `byteLength` accessor property represents the length of an [`SharedArrayBuffer`](../sharedarraybuffer) in bytes.

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the shared array is constructed and cannot be changed.

## Examples

### Using byteLength

    var sab = new SharedArrayBuffer(1024);
    sab.byteLength; // 1024

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-get-sharedarraybuffer.prototype.bytelength">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-sharedarraybuffer.prototype.bytelength</span></a></td></tr></tbody></table>

`byteLength`

68

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

16-17

Support was removed to mitigate [speculative execution side-channel attacks (Windows blog)](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer).

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

No

10.1-11

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

89

`SharedArrayBuffer` is gated behind COOP/COEP. For more detail, read [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/).

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

## See also

-   [`SharedArrayBuffer`](../sharedarraybuffer)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength</a>
