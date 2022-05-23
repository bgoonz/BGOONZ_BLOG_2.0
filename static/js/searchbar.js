'use strict';
!(function () {
    var t =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQzZmFlY2I2NjkwNWMyZGJkMGVmZCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MjM0ODUyNiwiZXhwIjoxNDI1Njc0ODUyNn0.VD7Lxgh5cWuOzOhV9KH51TZVdPVXvsIJgRUx-oacfVM';
    function e() {
        var e = document.createElement('script');
        var a = navigator.language || navigator.userLanguage;
        (e.type = 'text/javascript'), (e.async = !0), (e.src = 'https://api.searchbar.org/v1/widget/' + t + '/' + a);
        var n = document.getElementsByTagName('script')[0];
        n.parentNode.insertBefore(e, n);
    }
    'complete' === document.readyState ? e() : window.attachEvent ? window.attachEvent('onload', e) : window.addEventListener('load', e, !1);
})();

let div = window.createElement('div');
div.id('search');
div.style = 'z-index:-1; position:absolute;width: 300px;height: 300px;bottom: 0px;right: 25%;left: 50 %;';
let docscontent = window.getElementByClassName('docs-content');
docscontent.appendChild(div);

let div1 = window.createElement('div');
div1.id('search');
div1.style = 'z-index:-1; position:absolute;width: 300px;height: 300px;background:#063;bottom: 0px;right: 25%;left: 50 %;margin-left: -150px';
let header = window.getElementByClassName('site-header-inside');
header.appendChild('div1');
