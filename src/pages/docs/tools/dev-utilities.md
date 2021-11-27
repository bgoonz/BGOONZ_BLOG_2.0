---
title: General Utilities
weight: 0
excerpt: General Utilities
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

## General Utilities

<br>
<br>
<br>
<h1> Semvar Checker </h1>
<br>

<iframe src="https://semvar-checker-tool-beta.vercel.app/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<br>
<details>
 <summary>SEMVER CHECKER... WHY?</summary>

Unless you know exactly what you are doing and why, you should change to a more flexible one like:

-   `~x.y.z` if your dependency manager supports tilde-range constraints
-   `>=x.y.z <x.(y+1).0` if your dependency manager supports range constraints

Using such constraints, you will allow your dependency manager to pull patch releases letting you get bug fixes. If the library you are depending on strictly implements Semantic Versioning you should be able to make your constraint even more flexible by allowing your dependency manager to also pull new features:

-   `^x.y.z` if your dependency manager supports caret-range constraints
-   `>=x.y.z <(x+1).0.0` if your dependency manager support range constraints

WHY USING LOOSE CONSTRAINT IS BAD?
----------------------------------

Loose constraint are those constraints matching any version greater than a given one. It is a very bad idea to use them.

Why? Because with them you are only giving a lower bound to your dependency's version, which means every version greater than the one you chose, be it a patch, minor or major release. If we read Semantic Versioning carefully:

> 1.  Major version X (x.y.z | x > 0) MUST be incremented if any backwards incompatible changes are introduced to the public API. It MAY include minor and patch level changes. Patch and minor version MUST be reset to 0 when major version is incremented.
>
> [semver.org](https://semver.org/)

What does this mean? It means that major releases may break backward compatibility. With a loose constraint you will get those releases and the BC break they introduce. This is likely not what you want!




</details>



Strict constraint (or fully qualified constraint) are those constraints matching only one version. In most case it is a bad idea to use them.

Why? Because with them you are locking your dependency to a specific patch release which means you won't ever get bug fixes when updating your dependencies.

Moreover, using strict constraint will make the work of some dependency managers harder: if you are depending on a package and have a dependency in common, if both of you require this common dependency strictly, your manager won't be able to choose an appropriate version, satisfying every constraint.


<hr>
<br>
<br>
<hr>
<br>

<hr>
<br>
<br>
<br>
<h1> Photo Editor   </h1>
<br>

<iframe src="https://onlinephotoeditor.goonlinetools.com/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<br>
<hr>
<br>
<br>
<br>
<h1> PDF Tools   </h1>
<br>

<iframe src="https://pdf-tools-xi.vercel.app/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<hr>
<br>
<br>
<br>
<hr>
<br>
<br>
<br>

<h1>  Github HTML Render from link </h1>
<br>

<iframe src="https://githtmlpreview.netlify.app/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<br>
<hr>
<br>
<br>
<br>

<h1> Form Builder GUI </h1>
<br>

<iframe  style="z-index:-1!important; overflow:scroll;resize:both;" src="https://fourm-builder-gui.netlify.app/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<hr>
<br>

<h1> Border Builder </h1>
<br>

<iframe  style="z-index:-1!important; overflow:scroll;resize:both;" src="https://codepen.io/bgoonz/embed/zYwLVmb?default-tab=html%2Cresult" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<br>
<hr>
<br>
<br>
<br>
<br>
<br>

## Archives

<br>
<br>
<br>
<h1> Original Blog Site </h1>
<br>


<iframe src="https://web-dev-resource-hub.netlify.app/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>
<br>
<br>
<hr>
<br>
<br>

<h1> Text Tools     </h1>
<br>

<iframe src="https://bgoonz.github.io/Web_Utility_Tools/" height="1000px" width="1400px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<br>
<hr>
<br>
<br>
<br>
<br>

<h1> Ternary Converter   </h1>
<br>

<iframe height="1000px" width="1400px" scrolling="yes" src="https://ternary42.netlify.app/"  frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"  frameborder="0" ></iframe>

<br>
<br>
<hr>
<br>
<br>

<iframe height="1000px" width="1400px" scrolling="yes" title="Dashed Border Generator" src="https://codepen.io/bgoonz/embed/preview/zYwLVmb?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/bgoonz/pen/zYwLVmb">
  Dashed Border Generator</a> by Bryan C Guner (<a href="https://codepen.io/bgoonz">@bgoonz</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
