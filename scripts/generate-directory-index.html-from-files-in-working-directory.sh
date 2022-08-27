#!/bin/sh

# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"

out=""

html="index.html"
out="basename $out.html"
html="index.html"
cmd() {

  echo '  <!DOCTYPE html>'
  echo '<html>'
  echo '<head>'

  echo '  <meta http-equiv="Content-Type" content="text/html">'

  echo '  <meta name="Author" content="Bryan Guner">'
  echo '<link rel="stylesheet" href="./assets/prism.css">'
  echo ' <link rel="stylesheet" href="./assets/style.css">'
  echo ' <script async defer src="./assets/prism.js"></script>'

  echo "  <title> directory </title>"

  echo ""
  echo '<style>'


echo '    a {'
echo '      color: black;'
echo '    }'
echo ''
echo '    li {'
echo '      border: 1px solid black !important;'
echo '      font-size: 20px;'
echo '      letter-spacing: 0px;'
echo '      font-weight: 700;'
echo '      line-height: 16px;'
echo '      text-decoration: none !important;'
echo '      text-transform: uppercase;'
echo '      background: #194ccdaf !important;'
echo '      color: black !important;'
echo '      border: none;'
echo '      cursor: pointer;'
echo '      justify-content: center;'
echo '      padding: 30px 60px;'
echo '      height: 48px;'
echo '      text-align: center;'
echo '      white-space: normal;'
echo '      border-radius: 10px;'
echo '      min-width: 45em;'
echo '      padding: 1.2em 1em 0;'
echo '      box-shadow: 0 0 5px;'
echo '      margin: 1em;'
echo '      display: grid;'
echo '      -webkit-border-radius: 10px;'
echo '      -moz-border-radius: 10px;'
echo '      -ms-border-radius: 10px;'
echo '      -o-border-radius: 10px;'
echo '    }'
echo '  </style>'
  echo '</head>'

  echo '<body>'

  echo ""

  #################### continue with the HTML stuff:

  echo ""

  echo ""

  echo "<ul>"

  awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing

  # awk '{print "<li>"};

  # 	{print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

  echo ""

  echo "</ul>"

  echo "</body>"

  echo "</html>"

}

cmd $listing --sort=extension >>$html