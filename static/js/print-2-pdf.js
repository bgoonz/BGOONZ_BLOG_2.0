/* eslint-disable no-undef */
function injectPDF (){
    let anchor = window.createElement( 'a' );
    anchor.href = '//pdfcrowd.com/url_to_pdf/?';
    anchor.onclick=`${!this.p?href+='&url='+encodeURIComponent(location.href):this.p=1}`;
    anchor.textContent = 'Save to PDF';
}

