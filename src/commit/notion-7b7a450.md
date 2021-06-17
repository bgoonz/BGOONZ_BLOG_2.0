# notion@7b7a450

[Permalink](notion-7b7a450.md)

 Showing **412 changed files** with **238,996 additions** and **89,807 deletions**.

|  | @@ -2,19 +2,18 @@ name: Jekyll site CI |  |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  on: |
|  |  |  push: |
|  |  |  branches: \[ master \] |
|  |  |  branches: \[master\] |
|  |  |  pull\_request: |
|  |  |  branches: \[ master \] |
|  |  |  branches: \[master\] |
|  |  |  |
|  |  |  jobs: |
|  |  |  build: |
|  |  |  |
|  |  |  runs-on: ubuntu-latest |
|  |  |  |
|  |  |  steps: |
|  |  |  - uses: actions/checkout@v2 |
|  |  |  - name: Build the site in the jekyll/builder container |
|  |  |  run: \| |
|  |  |  docker run \ |
|  |  |  -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/\_site:/srv/jekyll/\_site \ |
|  |  |  jekyll/builder:latest /bin/bash -c "chmod -R 777 /srv/jekyll && jekyll build --future" |
|  |  |  - uses: actions/checkout@v2 |
|  |  |  - name: Build the site in the jekyll/builder container |
|  |  |  run: \| |
|  |  |  docker run \ |
|  |  |  -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/\_site:/srv/jekyll/\_site \ |
|  |  |  jekyll/builder:latest /bin/bash -c "chmod -R 777 /srv/jekyll && jekyll build --future" |

|  | @@ -9,12 +9,15 @@ Common |  |
| :--- | :--- | :--- |
|  |  |  \`\`\` |
|  |  |  |
|  |  |  To match IPs without anchors use this pattern instead |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  \(25\[0-5\]\|2\[0-4\]\[0-9\]\|\[01\]?\[0-9\]\[0-9\]?\)\(\.\(25\[0-5\]\|2\[0-4\]\[0-9\]\|\[01\]?\[0-9\]\[0-9\]?\)\){3} |
|  |  |  \`\`\` |
|  |  |  |
|  |  |  since many regex engine match the first possibility in the \| sequence. |
|  |  |  |
|  |  |  Test sample: |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  Proxy IP Proxy Port Last Check Proxy Speed Proxy Country Anonymity 118.99.81.204118.99.81.204 8080 34 sec Indonesia - Tangerang Transparent 2.184.31.2 8080 58 sec Iran Transparent 93.126.11.189 8080 1 min Iran - Esfahan Transparent 202.118.236.130 7777 1 min China - Harbin Transparent 62.201.207.9 8080 1 min Iraq Transparent 219.143.244.170 8899 1 min China - Beijing Transparent 66.63.235.97 8080 1 min United States - Somerville Transparent 27.191.194.106 8080 1 min China Transparent 200.195.141.178 8080 2 min Brazil Transparent 210.101.131.232 8080 2 min South Korea - Seoul Transparent 218.75.205.44 9999 2 min China - Changsha Transparent212.119.97.198 3128 2 min Russia - Moscow Transparent |
|  |  |  10.48.0.200 |
|  | @@ -28,10 +31,10 @@ Proxy IP Proxy Port Last Check Proxy Speed Proxy Country Anonymity 118.99.81.204 |  |
|  |  |  Your public IP address is 46.130.14.41 - Learn more |
|  |  |  \`\`\` |
|  |  |  |
|  |  |  \#\#\# Valid Hostname |
|  |  |  \#\#\# Valid Hostname |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  ^\(\(\[a-zA-Z0-9\]\|\[a-zA-Z0-9\]\[a-zA-Z0-9\-\]\*\[a-zA-Z0-9\]\)\.\)\*\(\[A-Za-z0-9\]\|\[A-Za-z0-9\]\[A-Za-z0-9\-\]\*\[A-Za-z0-9\]\)$ |
|  |  |  \`\`\` |
|  |  |  Valid as per \[RFC 1123\]\(http://tools.ietf.org/html/rfc1123\) |
|  |  |  |
|  |  |  Valid as per \[RFC 1123\]\(http://tools.ietf.org/html/rfc1123\) |

 Large diffs are not rendered by default.

 Large diffs are not rendered by default.

|  | @@ -3,6 +3,7 @@ |  |
| :--- | :--- | :--- |
|  |  |  \#\# Projection/Mapping |
|  |  |  |
|  |  |  Project match result directly to formated result string |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  RegEx.Matches\(myText,searchPatten\).Cast\(\).Select\(x =&gt; $"{x.Groups\[1\].Value} {x.Groups\[2\].Value}"\).ToArray\(\); |
|  |  |  \`\`\` |
|  | @@ -11,10 +12,11 @@ RegEx.Matches\(myText,searchPatten\).Cast\(\).Select\(x =&gt; $"{x.Groups\[1\].Valu |  |
|  |  |  |
|  |  |  Here : Match a pattern and apply Replace on the resulting Match Collection, something like. \`RegEx.MatchAndReplace\(myText,searchPattern,replacePattern\);\` |
|  |  |  |
|  |  |  This allows us to get the Index and the Length of each match along what it would be replaced with. |
|  |  |  This allows us to get the Index and the Length of each match along what it would be replaced with. |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  \`\`\`\` |
|  |  |  use Regex.Matches\(\) and then on every Match do a Regex.Replace\(\) |
|  |  |  var regex = new Regex\(searchPattern\); |
|  |  |  |
|  | @@ -27,3 +29,4 @@ var matches = regex.Matches\(myText\) |  |
|  |  |  }\) |
|  |  |  .ToArray\(\); |
|  |  |  \`\`\` |
|  |  |  \`\`\`\` |

|  |  | @@ -1,8 +1,7 @@ |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  |
|  |  |  \#\# HTML Tags |
|  |  |  |
|  |  |  \#\#\# [tags](notion-7b7a450.md) |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  &lt;\s\*a\[^&gt;\]\*&gt;\(.\*?\)&lt;\s\*/\s\*a&gt; |
|  |  |  \`\`\` |

|  |  | @@ -1,5 +1,3 @@ |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  |
|  |  |  Last occource of X |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  |

|  | @@ -17,6 +17,7 @@ No more than two identical consecutive characters, etc |  |
| :--- | :--- | :--- |
|  |  |  \`^\(\(\[\w\]\)\2?\(?!\2\)\)+$\` |
|  |  |  |
|  |  |  \#\#\# At least two unique characters: https://stackoverflow.com/questions/5341369/regex-for-at-least-two-unique-characters/ |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  ^ |
|  |  |  \(?&gt; \# Possessive group - do not backtrack! |
|  | @@ -33,15 +34,18 @@ $ |  |
|  |  |  \(?&lt;-Unique&gt;\){2} \# After we're done, check there were at least |
|  |  |  \# two unique characters |
|  |  |  \`\`\` |
|  |  |  |
|  |  |  The idea here is to match duplicated characters and count the rest using balancing groups: This is achieved with a possessive group - it makes sure the duplicated characters never backtrack, thus the next dot will only capture a non-duplicated character. |
|  |  |  In .Net, every capture of a group is added to a stack. \(?&lt;-Unique&gt;\) pops a capture from the stack, and fails if it's empty. It gives a nice way of counting how many captures we've had. |
|  |  |  |
|  |  |  Or a simpler solution: |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  \(.\)\(? |
|  |  |  \`\`\` |
|  |  |  |
|  |  |  To explain it: |
|  |  |  |
|  |  |  \`\`\` |
|  |  |  \(.\) \# match any character... |
|  |  |  \(? |
|  | @@ -50,6 +54,6 @@ To explain it: |  |
|  |  |  |
|  |  |  .\* \# allow for any number of random characters in the middle |
|  |  |  |
|  |  |  \(.\)\(? |
|  |  |  \(.\)\(? |
|  |  |  \# using the same technique. |
|  |  |  \`\`\` |

|  |  | @@ -1,4 +1,3 @@ |
| :--- | :--- | :--- |
|  |  |  |
|  |  |  Length checking: |
|  |  |  |
|  |  |  \`^\(?=.{8,20}$\).+$\` |
|  |  |  |

