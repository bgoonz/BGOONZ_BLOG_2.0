// install: "npm install pdfcrowd"
let currentUrl = window.location.href;
import {
    HtmlToPdfClient
} from "pdfcrowd";
let api = new HtmlToPdfClient("demo", "ce544b6ea52a5621fb9d55f8b542d14d");
api.convertUrlToFile("currentUrl", "document.pdf", function(err, fileName) {
    /* done */
});



function injectPDF (){
      let anchor = window.createElement("a");
      anchor.onclick=`${if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1}`
      anchor.textContent='Save to PDF'
}
<a href="//pdfcrowd.com/url_to_pdf/?" onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">Save to PDF</a>