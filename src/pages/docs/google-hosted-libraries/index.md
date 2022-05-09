---
title: Google Hosted Libraries
template: docs
excerpt: The Google Hosted Libraries is a stable, reliable, high-speed, globally
  available content distribution network for the most popular, open-source
  JavaScript libraries
---
> #### ***The Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries***
>
> > Google works directly with the key stakeholders for each library effort and accepts the latest versions as they are released.

## Libraries

**To load a hosted library, copy and paste the HTML snippet for that library (shown below) in your web page. For instance, to load jQuery, embed the** 

![jquery](/docs/jquery.jpg "Jquery Logo")

snippet in your web page.

**We recommend that you load libraries from the CDN via HTTPS, even if your own website only uses HTTP. Nowadays, performance is fast, and caching works just the same. The CDN's files are served with [CORS](http://www.w3.org/TR/cors/#access-control-allow-origin-response-header) and [Timing-Allow](http://www.w3.org/TR/resource-timing/#cross-origin-resources) headers and allowed to be cached for 1 year.**

1. ### CesiumJS

snippet:

```html
<script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>`
```

site:

[github.com/CesiumGS/cesium](https://github.com/CesiumGS/cesium)

versions:

1.78

### D3.js

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/d3js/7.4.2/d3.min.js"></script>`

site:

[d3js.org](https://d3js.org/)

versions:

### Dojo

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"></script>`

site:

[dojotoolkit.org](http://dojotoolkit.org/)

### Ext Core

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js"></script>`

site:

[sencha.com/products/extcore](http://www.sencha.com/products/extcore)

versions:

3.1.0, 3.0.0

### Hammer.JS

snippet:



```html
<script src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"></script>
```

site:

[hammerjs.github.io](http://hammerjs.github.io/)

versions:

2.0.8

### Indefinite Observable

snippet:

```html
<script type="module">\
  import { IndefiniteObservable } from "https://ajax.googleapis.com/ajax/libs/indefinite-observable/2.0.1/indefinite-observable.bundle.js";\
</script>
```

site:

<https://github.com/material-motion/indefinite-observable-js>

versions:

2.0.1, 1.0.1

### jQuery

3.x snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`

2.x snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>`

1.x snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>`

site:

[jquery.com](http://jquery.com/)

note:

3.3.0, 2.1.2, 1.2.5 and 1.2.4 are not hosted due to their short and unstable lives in the wild.

### jQuery Mobile

snippet:

`<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">\

<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>`

site:

[jquerymobile.com](http://jquerymobile.com/)

note:

This library depends on jQuery. You must also load jQuery before loading this module.

### jQuery UI

snippet:

`<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">\

<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>`

site:

[jqueryui.com](http://jqueryui.com/)

note:

This library depends on jQuery. You must also load jQuery before loading this module. Version 1.8.3 is not hosted due to its short life, and the alias `1.8.3` actually loads 1.8.4.

### Material Motion

snippet:

`<script type="module">\
  import {\
    Draggable,\
    Point2DSpring,\
    Tossable,\
    combineStyleStreams,\
    getPointerEventStreamsFromElement,\
  } from "https://ajax.googleapis.com/ajax/libs/material-motion/0.1.0/material-motion.bundle.js";\
</script>`

site:

<https://github.com/material-motion/material-motion-js>

versions:

0.1.0

### Model-Viewer

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/model-viewer/1.9.0/model-viewer.min.js"></script>`

site:

[modelviewer.dev](https://modelviewer.dev/)

### MooTools

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"></script>`

site:

[mootools.net](http://mootools.net/)

note:

For versions 1.5.1 and earlier, the filename of the minified version is called mootools-yui-compressed.js instead of mintools.min.js.

### Myanmar Tools

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.2.1/zawgyi_detector.min.js"></script>` `<script src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.2.1/zawgyi_converter.min.js"></script>`

site:

<https://github.com/google/myanmar-tools/>

### Prototype

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js"></script>`

site:

[prototypejs.org](http://prototypejs.org/)

### script.aculo.us

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js"></script>`

site:

[script.aculo.us](http://script.aculo.us/)

versions:

1.9.0, 1.8.3, 1.8.2, 1.8.1

note:

This library depends on `Prototype`. Before loading this module, you must load Prototype.

### Shaka Player

snippet:

`<!-- for non-UI builds: -->\

<script src="https://ajax.googleapis.com/ajax/libs/shaka-player/3.3.2/shaka-player.compiled.js"></script>\

<!-- or, for UI builds: -->\

<script src="https://ajax.googleapis.com/ajax/libs/shaka-player/3.3.2/shaka-player.ui.js"></script>\

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/shaka-player/3.3.2/controls.css">\
`

site:

<https://github.com/google/shaka-player/>

### SPF

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js"></script>`

site:

[youtube.github.io/spfjs](http://youtube.github.io/spfjs/)

### SWFObject

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>`

site:

[github.com/swfobject/swfobject](https://github.com/swfobject/swfobject)

### three.js

snippet:

`<script src="https://ajax.googleapis.com/ajax/libs/threejs/r84/three.min.js"></script>`

site:

[threejs.org](http://threejs.org/)

### Web Font Loader

snippet>

`<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>`

site:

[github.com/typekit/webfontloader](https://github.com/typekit/webfontloader)