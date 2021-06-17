{/* start of freefind search box html */}
<table cellPadding={0} cellSpacing={0} border={0}>
  <tbody><tr>
      <td style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt'}}>
        <center>
          <table width="90%" cellPadding={0} cellSpacing={0} border={0} style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt'}}>
            <tbody><tr>
                <td style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt'}} align="left">
                  <a href="https://search.freefind.com/siteindex.html?si=79970144">index</a>
                </td>
                <td style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt'}} align="center">
                  <a href="https://search.freefind.com/find.html?si=79970144&m=0&p=0">sitemap</a>
                </td>
                <td style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt'}} align="right">
                  <a href="https://search.freefind.com/find.html?si=79970144&pid=a">advanced</a>
                </td>
              </tr>
            </tbody></table>
        </center>
        <form style={{margin: 0, marginTop: 4}} action="https://search.freefind.com/find.html" method="get" acceptCharset="utf-8" target="_self">
          <input type="hidden" name="si" defaultValue={79970144} />
          <input type="hidden" name="pid" defaultValue="r" />
          <input type="hidden" name="n" defaultValue={0} />
          <input type="hidden" name="_charset_" defaultValue />
          <input type="hidden" name="bcd" defaultValue="÷" />
          <input type="text" name="query" size={15} />
          <input type="submit" defaultValue="search" />
        </form>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '7.5pt', paddingTop: 4}}>
        <a style={{textDecoration: 'none', color: 'gray'}} href="https://www.freefind.com" rel="nofollow">search engine</a><a style={{textDecoration: 'none', color: 'gray'}} href="https://www.freefind.com" rel="nofollow"> by <span style={{color: '#606060'}}>freefind</span></a>
      </td>
    </tr>
  </tbody></table>
{/* end of freefind search box html */}
