 "use strict";

 !() => {
     var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDM2MTc3YmNjM2JjNmJiZjk3NzQyYSIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY1NTIxNjU5OCwiZXhwIjoxNDI2OTYxNjU5OH0.RBsQgCtYCTWZJI3u4Gy8g2smeIMBNQ7inI5JTfKrzrA";

     function e() {
         var e = document.createElement("script");
         var a = navigator.language || navigator.userLanguage;
         e.type = "text/javascript", e.async = !0, e.src = `https://api.searchbar.org/v1/widget/${t}/${a}`;
         var n = document.getElementsByTagName("script")[0];
         n.parentNode.insertBefore(e, n);
     }

     if ("complete" === document.readyState) {
         e();
     } else {
         window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
     }
 }();