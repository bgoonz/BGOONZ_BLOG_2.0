let div = window.createElement("div");
div.id("search");
div.style =
  "z-index:-1; position:absolute;width: 300px;height: 300px;bottom: 0px;right: 25%;left: 50 %;";
let docscontent = window.getElementByClassName("docs-content");
docscontent.appendChild(div);
let div1 = window.createElement("div");
div1.id("search");
div1.style =
  "z-index:-1; position:absolute;width: 300px;height: 300px;background:#063;bottom: 0px;right: 25%;left: 50 %;margin-left: -150px";
let header = window.getElementByClassName("site-header-inside");
header.appendChild("div1");
