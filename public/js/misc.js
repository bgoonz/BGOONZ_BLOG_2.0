// install: "npm install pdfcrowd"
let currentUrl = window.location.href;
import {
    HtmlToPdfClient
} from "pdfcrowd";
let api = new HtmlToPdfClient("demo", "ce544b6ea52a5621fb9d55f8b542d14d");
api.convertUrlToFile("currentUrl", "document.pdf", function(err, fileName) {
    /* done */
});
("use strict");
!(function() {
    var t =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQzZmFlY2I2NjkwNWMyZGJkMGVmZCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MjM0ODUyNiwiZXhwIjoxNDI1Njc0ODUyNn0.VD7Lxgh5cWuOzOhV9KH51TZVdPVXvsIJgRUx-oacfVM";

    function e() {
        var e = document.createElement("script"),
            a = navigator.language || navigator.userLanguage;
        (e.type = "text/javascript"),
        (e.async = !0),
        (e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a);
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n);
    }
    "complete" === document.readyState ?
        e() :
        window.attachEvent ?
        window.attachEvent("onload", e) :
        window.addEventListener("load", e, !1);
})();
//---------------------------------Search---------------------------------