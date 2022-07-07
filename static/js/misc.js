// install: "npm install pdfcrowd"
let currentUrl = window.location.href;
let pdfcrowd = require("pdfcrowd");
let api = new pdfcrowd.HtmlToPdfClient("demo",
                                       "ce544b6ea52a5621fb9d55f8b542d14d");
api.convertUrlToFile('currentUrl', 'document.pdf', function (err, fileName) {
    /* done */
});
