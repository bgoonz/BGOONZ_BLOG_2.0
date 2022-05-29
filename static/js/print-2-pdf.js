function injectPDF (){
      let anchor = document.createElement("a");
      anchor.onclick=`${if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1}`
      anchor.textContent='Save to PDF'
}
<a href="//pdfcrowd.com/url_to_pdf/?" onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">Save to PDF</a>
