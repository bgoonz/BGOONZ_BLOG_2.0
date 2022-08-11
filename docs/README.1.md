Bgoonzblog

<span class="version">(0.0.1)</span>

-   [Introduction](#introduction)
-   [My Commands](#my-commands)
-   [Wiki Nav](#wiki-nav)
-   [Dependencies](#dependencies)
-   [Docs Structure](#docs-structure)
-   [🚀 Quick start](#🚀-quick-start)
-   [🧐 What's inside](#🧐-whats-inside)
-   [🎓 Learning Gatsby](#🎓-learning-gatsby)
-   [💫 Deploy](#💫-deploy)
-   [\[\](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/\#folders)Folders](#https-www-gatsbyjs-com-docs-reference-gatsby-project-structure-folders-folders)
-   [\[\](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/\#files)Files](#https-www-gatsbyjs-com-docs-reference-gatsby-project-structure-files-files)
-   [\[\](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/\#miscellaneous)Miscellaneous](#https-www-gatsbyjs-com-docs-reference-gatsby-project-structure-miscellaneous-miscellaneous)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#gatsbys-approach-to-layouts)Gatsby's approach to layouts](#https-www-gatsbyjs-com-docs-how-to-routing-layout-components-gatsbys-approach-to-layouts-gatsbys-approach-to-layouts)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#what-are-layout-components)What are layout components](#https-www-gatsbyjs-com-docs-how-to-routing-layout-components-what-are-layout-components-what-are-layout-components)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#how-to-create-layout-components)How to create layout components](#https-www-gatsbyjs-com-docs-how-to-routing-layout-components-how-to-create-layout-components-how-to-create-layout-components)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#how-to-import-and-add-layout-components-to-pages)How to import and add layout components to pages](#https-www-gatsbyjs-com-docs-how-to-routing-layout-components-how-to-import-and-add-layout-components-to-pages-how-to-import-and-add-layout-components-to-pages)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#how-to-prevent-layout-components-from-unmounting)How to prevent layout components from unmounting](#https-www-gatsbyjs-com-docs-how-to-routing-layout-components-how-to-prevent-layout-components-from-unmounting-how-to-prevent-layout-components-from-unmounting)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#read-files-into-gatsby-from-the-filesystem)Read files into Gatsby from the filesystem](#https-www-gatsbyjs-com-docs-how-to-routing-adding-markdown-pages-read-files-into-gatsby-from-the-filesystem-read-files-into-gatsby-from-the-filesystem)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#transform-markdown-to-html-and-frontmatter-to-data-using-gatsby-transformer-remark)Transform Markdown to HTML and frontmatter to data using \`gatsby-transformer-remark](#https-www-gatsbyjs-com-docs-how-to-routing-adding-markdown-pages-transform-markdown-to-html-and-frontmatter-to-data-using-gatsby-transformer-remark-transform-markdown-to-html-and-frontmatter-to-data-using-gatsby-transformer-remark)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#add-a-markdown-file)Add a Markdown file](#https-www-gatsbyjs-com-docs-how-to-routing-adding-markdown-pages-add-a-markdown-file-add-a-markdown-file)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#create-a-collection-route-for-the-markdown-files)Create a Collection Route for the Markdown files](#https-www-gatsbyjs-com-docs-how-to-routing-adding-markdown-pages-create-a-collection-route-for-the-markdown-files-create-a-collection-route-for-the-markdown-files)
-   [\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#other-tutorials)Other tutorials](#https-www-gatsbyjs-com-docs-how-to-routing-adding-markdown-pages-other-tutorials-other-tutorials)

Generated with [Docky](https://github.com/markmur/docky)

Introduction
------------

\# [⇨WEBSITE🗺️⇦](https://bgoonz-blog.netlify.app/) \#\#\#\#\# [⇨Privacy policy⇦](https://codepen.io/bgoonz/pen/LYLJZrW)

------------------------------------------------------------------------

\#\#\#\#\# [Cloudfare-Backup](https://bgoonz-blog-2-0.pages.dev/) ⇨ [search](https://www.algolia.com/realtime-search-demo/web-dev-resource-hub-9e6b8aa8-6106-44c5-9f59-ff3f9531abd4) ⇨ [Backup Repo Deploy](https://bgoonzblog20-backup.netlify.app/#gsc.tab=0) ⇨ [Github pages](https://bgoonz.github.io/BGOONZ_BLOG_2.0/) ⇨ [Go To Site Wiki](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki) ⇨ [Gatsby Cloud Version](https://bgoonzblog20master.gatsbyjs.io/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a1b7ee1a-11a7-4bd2-a341-2260656e216f/deploy-status)](https://app.netlify.com/sites/bgoonz-blog/deploys)[![CodeFactor](https://www.codefactor.io/repository/github/webdevhub42/bgoonz_blog_2.0/badge)](https://www.codefactor.io/repository/github/webdevhub42/bgoonz_blog_2.0)[![CodeScene System Mastery\*\*](https://codescene.io/projects/17026/status-badges/system-mastery)](https://codescene.io/projects/17026)![Profile views\*\*](https://views.whatilearened.today/views/github/bgoonz/views.svg)[![Gitter\*\*](https://badges.gitter.im/bgoonz/community.svg)](https://gitter.im/bgoonz/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)[![CodeScene Code Health](https://codescene.io/projects/17026/status-badges/code-health)](https://codescene.io/projects/17026)[![CodeQL](https://github.com/bgoonz/BGOONZ_BLOG_2.0/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/bgoonz/BGOONZ_BLOG_2.0/actions/workflows/codeql-analysis.yml)

Bash Commands

My Commands
-----------

#### Find

To find files by case-insensitive extension (ex: .jpg, .JPG, .jpG)
==================================================================

find . -iname "\*.jpg"

To find directories
===================

find . -type d

To find files
=============

find . -type f

To find files by octal permission
=================================

find . -type f -perm 777

To find files with setuid bit set
=================================

find . -xdev ( -perm -4000 ) -type f -print0 | xargs -0 ls -l

To find files with extension '.txt' and remove them
===================================================

find ./path/ -name '\*.txt' -exec rm '{}' \\;

To find files with extension '.txt' and look for a string into them
===================================================================

find ./path/ -name '\*.txt' | xargs grep 'string'

To find files with size bigger than 5 Mebibyte and sort them by size
====================================================================

find . -size +5M -type f -print0 | xargs -0 ls -Ssh | sort -z

To find files bigger than 2 Megabyte and list them
==================================================

find . -type f -size +200000000c -exec ls -lh {} \\; | awk '{ print $9 ": " $5 }'

To find files modified more than 7 days ago and list file information
=====================================================================

find . -type f -mtime +7d -ls

To find symlinks owned by a user and list file information
==========================================================

find . -type l -user -ls

To search for and delete empty directories
==========================================

find . -type d -empty -exec rmdir {} \\;

To search for directories named build at a max depth of 2 directories
=====================================================================

find . -maxdepth 2 -name build -type d

To search all files who are not in .git directory
=================================================

find . ! -iwholename '*.git*' -type f

To find all files that have the same node (hard link) as MY\_FILE\_HERE
=======================================================================

find . -type f -samefile MY\_FILE\_HERE 2&gt;/dev/null

To find all files in the current directory and modify their permissions
=======================================================================

find . -type f -exec chmod 644 {} \\;

1. Remove spaces from file and folder names and then remove numbers from files and folder names
===============================================================================================

### Description: need to : `sudo apt install               rename`

> Notes: Issue when renaming file without numbers collides with existing file name...

#### code

    find . -name "* *" -type d | rename 's/ /_/g'
    find . -name "* *" -type f | rename 's/ /_/g'

    ```sh
    find $dir -type f | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

    find $dir -type d | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

    for i in *.html; do mv "$i" "${i%-*}.html"; done

    for i in *.*; do mv "$i" "${i%-*}.${i##*.}"; done

    ---
    ### Description: combine the contents of every file in the contaning directory.


    >Notes: this includes the contents of the file it's self...


    #### code:


    ```js
    //APPEND-DIR.js
    const fs = require('fs');
    let cat = require('child_process')
      .execSync('cat *')
      .toString('UTF-8');
    fs.writeFile('output.md', cat, err => {
      if (err) throw err;
    });

------------------------------------------------------------------------

2. Download Website Using Wget
==============================

### Description

> Notes: ==&gt; sudo apt install wget

###### code

    wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://bootcamp42.gitbook.io/python/

------------------------------------------------------------------------

3. Clean Out Messy Git Repo
===========================

### Description: recursively removes git related folders as well as internal use files / attributions in addition to empty folders

> Notes: To clear up clutter in repositories that only get used on your local machine.

###### code


    find . -empty -type d -print -delete


    find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +


    find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +

------------------------------------------------------------------------

4. clone all of a user's git repositories
=========================================

### Description: clone all of a user or organization's git repositories

> Notes:

###### code

Generalized
===========



    CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
    curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
      grep -e 'git_url*' |
      cut -d \" -f 4 |
      xargs -L1 git clone

Clone all Git User
==================

    CNTX={users}; NAME={bgoonz}; PAGE=1
    curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
      grep -e 'git_url*' |
      cut -d \" -f 4 |
      xargs -L1 git clone

Clone all Git Organization
==========================

    CNTX={organizations}; NAME={TheAlgorithms}; PAGE=1
    curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
      grep -e 'git_url*' |
      cut -d \" -f 4 |
      xargs -L1 git clone

------------------------------------------------------------------------

5. Git Workflow
===============

### Description

###### code

    git pull
    git init
    git add .
    git commit -m"update"
    git push -u origin master

    git init
    git add .
    git commit -m"update"
    git push -u origin main

    git init
    git add .
    git commit -m"update"
    git push -u origin bryan-guner

    git init
    git add .
    git commit -m"update"
    git push -u origin gh-pages

    git init
    git add .
    git commit -m"update"
    git push -u origin preview

------------------------------------------------------------------------

6. Recursive Unzip In Place
===========================

### Description: recursively unzips folders and then deletes the zip file by the same name

> Notes:

###### code

    find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;



    find . -name "*.zip" -type f -print -delete

------------------------------------------------------------------------

7. git pull keeping local changes
=================================

### Description

> Notes:

###### code


    git stash
    git pull
    git stash pop

------------------------------------------------------------------------

8. Prettier Code Formatter
==========================

### Description

> Notes:

###### code

    sudo npm i prettier -g

    prettier --write .


------------------------------------------------------------------------

9. Pandoc
=========

### Description

> Notes:

###### code

    find ./ -iname "*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;



    find ./ -iname "*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;



    find ./ -iname "*.docx" -type f -exec sh -c 'pandoc "${0}" -o "${0%.docx}.md"' {} \;

------------------------------------------------------------------------

10. Gitpod Installs
===================

### Description

> Notes:

###### code

    sudo apt install tree
    sudo apt install pandoc -y
    sudo apt install rename -y
    sudo apt install black -y
    sudo apt install wget -y
    npm i lebab -g
    npm i prettier -g
    npm i npm-recursive-install -g

    black .

    prettier --write .
    npm-recursive-install

------------------------------------------------------------------------

11. Repo Utils Package
======================

### Description: my standard repo utis package

> Notes:

###### code

    npm i @bgoonz11/repoutils

------------------------------------------------------------------------

12. Unix Tree Package Usage
===========================

### Description

> Notes:

###### code

    tree -d -I  'node_modules'

    tree  -I  'node_modules'

    tree -f  -I  'node_modules' >TREE.md

    tree -f -L 2  >README.md

    tree -f  -I  'node_modules' >listing-path.md


    tree -f  -I  'node_modules' -d >TREE.md

    tree -f >README.md

------------------------------------------------------------------------

13. Find & Replace string in file & folder names recursively
============================================================

### Description

> Notes:

###### code

    find . -type f -exec rename 's/string1/string2/g' {} +


    find . -type d -exec rename 's/-master//g' {} +


    find . -type f -exec rename 's/\.download//g' {} +




    find . -type d -exec rename 's/-main//g' {} +



    rename 's/\.js\.download$/.js/' *.js\.download


    rename 's/\.html\.markdown$/.md/' *.html\.markdown


    find . -type d -exec rename 's/es6//g' {} +

------------------------------------------------------------------------

14. Remove double extensions
============================

### Description

> Notes:

###### code

    #!/bin/bash

    for file in *.md.md
    do
        mv "${file}" "${file%.md}"
    done

    #!/bin/bash

    for file in *.html.html
    do
        mv "${file}" "${file%.html}"
    done


    #!/bin/bash

    for file in *.html.png
    do
        mv "${file}" "${file%.png}"
    done

    for file in *.jpg.jpg
    do
        mv "${file}" "${file%.png}"
    done

------------------------------------------------------------------------

15. Truncate folder names down to 12 characters
===============================================

### Description

> Notes:

###### code

    for d in ./*; do mv $d ${d:0:12}; done

------------------------------------------------------------------------

16.Appendir.js
==============

### Description: combine the contents of every file in the contaning directory

> Notes: this includes the contents of the file it's self...

###### code

    //APPEND-DIR.js
    const fs = require('fs');
    let cat = require('child_process').execSync('cat *').toString('UTF-8');
    fs.writeFile('output.md', cat, (err) => {
        if (err) throw err;
    });

------------------------------------------------------------------------

17. Replace space in filename with underscore
=============================================

### Description: followed by replace `'#' with '_'` in directory name

> Notes: Can be re-purposed to find and replace any set of strings in file or folder names.

###### code

    find . -name "* *" -type f | rename 's/_//g'

    find . -name "* *" -type d | rename 's/#/_/g'

------------------------------------------------------------------------

18. Filter & delete files by name and extension
===============================================

### Description

> Notes:

###### code

    find . -name '.bin' -type d -prune -exec rm -rf '{}' +

    find . -name '*.html' -type d -prune -exec rm -rf '{}' +

    find . -name 'nav-index' -type d -prune -exec rm -rf '{}' +

    find . -name 'node-gyp' -type d -prune -exec rm -rf '{}' +

    find . -name 'deleteme.txt' -type f -prune -exec rm -rf '{}' +

    find . -name 'right.html' -type f -prune -exec rm -rf '{}' +

    find . -name 'left.html' -type f -prune -exec rm -rf '{}' +

------------------------------------------------------------------------

19. Remove lines containing string
==================================

### Description

> Notes: Remove lines not containing `'.js'`

    sudo sed -i '/\.js/!d' ./*scrap2.md

###### code

    sudo sed -i '/githubusercontent/d' ./*sandbox.md


    sudo sed -i '/githubusercontent/d' ./*scrap2.md



    sudo sed -i '/github\.com/d' ./*out.md


    sudo sed -i '/author/d' ./*

------------------------------------------------------------------------

20. Remove duplicate lines from a text file
===========================================

### Description

> Notes: //...syntax of uniq...// $uniq \[OPTION\] \[INPUT\[OUTPUT\]\] The syntax of this is quite easy to understand. Here, INPUT refers to the input file in which repeated lines need to be filtered out and if INPUT isn't specified then uniq reads from the standard input. OUTPUT refers to the output file in which you can store the filtered output generated by uniq command and as in case of INPUT if OUTPUT isn't specified then uniq writes to the standard output.

Now, let's understand the use of this with the help of an example. Suppose you have a text file named kt.txt which contains repeated lines that needs to be omitted. This can simply be done with uniq.

###### code

    sudo apt install uniq
    uniq -u input.txt output.txt

------------------------------------------------------------------------

21. Remove lines containing string
==================================

### Description

> Notes:

###### code

    sudo sed -i '/githubusercontent/d' ./*sandbox.md


    sudo sed -i '/githubusercontent/d' ./*scrap2.md


    sudo sed -i '/github\.com/d' ./*out.md

    ---
    title: add_days
    tags: date,intermediate
    firstSeen: 2020-10-28T16:19:04+02:00
    lastUpdated: 2020-10-28T16:19:04+02:00
    ---

    sudo sed -i '/title:/d' ./*output.md
    sudo sed -i '/firstSeen/d' ./*output.md
    sudo sed -i '/lastUpdated/d' ./*output.md
    sudo sed -i '/tags:/d' ./*output.md

    sudo sed -i '/badstring/d' ./*


    sudo sed -i '/stargazers/d' ./repo.txt
    sudo sed -i '/node_modules/d' ./index.html
    sudo sed -i '/right\.html/d' ./index.html
    sudo sed -i '/right\.html/d' ./right.html


------------------------------------------------------------------------

22. Zip directory excluding .git and node\_modules all the way down (Linux)
===========================================================================

### Description

> Notes:

###### code


    #!/bin/bash
    TSTAMP=`date '+%Y%m%d-%H%M%S'`
    zip -r $1.$TSTAMP.zip $1 -x "**.git/*" -x "**node_modules/*" `shift; echo $@;`

    printf "\nCreated: $1.$TSTAMP.zip\n"

    # usage:
    # - zipdir thedir
    # - zip thedir -x "**anotherexcludedsubdir/*"    (important the double quotes to prevent glob expansion)

    # if in windows/git-bash, add 'zip' command this way:
    # https://stackoverflow.com/a/55749636/1482990

------------------------------------------------------------------------

23. Delete files containing a certain string
============================================

### Description

> Notes:

###### code

    find . | xargs grep -l www.redhat.com | awk '{print "rm "$1}' > doit.sh
    vi doit.sh // check for murphy and his law
    source doit.sh

------------------------------------------------------------------------

24
==

### Description

> Notes:

###### code

    #!/bin/sh

    # find ./ | grep -i "\.*$" >files
    find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
    listing="files"

    out=""

    html="sitemap.html"
    out="basename $out.html"
    html="sitemap.html"
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
        echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">'
      echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/markdown-to-html-style.css">'
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

      # continue with the HTML stuff

      echo ""

      echo ""

      echo "<ul>"

      awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing

      # awk '{print "<li>"};

      #  {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

      echo ""

      echo "</ul>"

      echo "</body>"

      echo "</html>"

    }

    cmd $listing --sort=extension >>$html

------------------------------------------------------------------------

25. Index of Iframes
====================

### Description: Creates an index.html file that contains all the files in the working directory or any of it's sub folders as iframes instead of anchor tags

> Notes: Useful Follow up Code:




###### code


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

      # continue with the HTML stuff

      echo ""

      echo ""

      echo "<ul>"

      awk '{print "<iframe src=\""$1"\">","</iframe>"}' $listing

      # awk '{print "<li>"};

      #  {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

      echo ""

      echo "</ul>"

      echo "</body>"

      echo "</html>"

    }

    cmd $listing --sort=extension >>$html

------------------------------------------------------------------------

26. Filter Corrupted Git Repo For Troublesome File
==================================================

### Description

> Notes:

###### code

    git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_index.html' HEAD

------------------------------------------------------------------------

27. OVERWRITE LOCAL CHANGES
===========================

### Description

Important: If you have any local changes, they will be lost. With or without --hard option, any local commits that haven't been pushed will be lost.\[\*\] If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

> Notes: First, run a fetch to update all origin/ refs to latest:

###### code

    git fetch --all
    # Backup your current branch:

    git branch backup-master
    # Then, you have two options:

    git reset --hard origin/master
    # OR If you are on some other branch:

    git reset --hard origin/<branch_name>
    # Explanation:
    # git fetch downloads the latest from remote without trying to merge or rebase anything.

    # Then the git reset resets the master branch to what you just fetched. The --hard option changes all the files in your working tree to match the files in origin/master
    git fetch --all
    git reset --hard origin/master

------------------------------------------------------------------------

28. Remove Submodules
=====================

### Description: To remove a submodule you need to

> Notes:

> Delete the relevant section from the .gitmodules file. Stage the .gitmodules changes git add .gitmodules Delete the relevant section from .git/config. Run git rm --cached path\_to\_submodule (no trailing slash). Run rm -rf .git/modules/path\_to\_submodule (no trailing slash). Commit git commit -m "Removed submodule " Delete the now untracked submodule files rm -rf path\_to\_submodule

###### code

    git submodule deinit

------------------------------------------------------------------------

29. GET GISTS
=============

### Description

> Notes:

###### code

    sudo apt install wget



    wget -q -O - https://api.github.com/users/bgoonz/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget


    wget -q -O - https://api.github.com/users/amitness/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget


    wget -q -O - https://api.github.com/users/drodsou/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

    wget -q -O - https://api.github.com/users/thomasmb/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

------------------------------------------------------------------------

30. Remove Remote OriginL
=========================

### Description

> Notes:

###### code

    git remote remove origin

------------------------------------------------------------------------

31. just clone .git folder
==========================

### Description

> Notes:

###### code


    git clone --bare --branch=master --single-branch https://github.com/bgoonz/My-Web-Dev-Archive.git

------------------------------------------------------------------------

32. Undo recent pull request
============================

### Description

> Notes:

###### code

    git reset --hard master@{"10 minutes ago"}

------------------------------------------------------------------------

33. Lebab
=========

### Description: ES5 --&gt; ES6

> Notes:

###### code

    # Safe:

     lebab --replace ./ --transform arrow
     lebab --replace ./ --transform arrow-return
     lebab --replace ./ --transform for-of
     lebab --replace ./ --transform for-each
     lebab --replace ./ --transform arg-rest
     lebab --replace ./ --transform arg-spread
     lebab --replace ./ --transform obj-method
     lebab --replace ./ --transform obj-shorthand
     lebab --replace ./ --transform multi-var


    # ALL:


    lebab --replace ./ --transform obj-method
    lebab --replace ./ --transform class
    lebab --replace ./ --transform arrow
    lebab --replace ./ --transform let
    lebab --replace ./ --transform arg-spread
    lebab --replace ./ --transform arg-rest
    lebab --replace ./ --transform for-each
    lebab --replace ./ --transform for-of
    lebab --replace ./ --transform commonjs
    lebab --replace ./ --transform exponent
    lebab --replace ./ --transform multi-var
    lebab --replace ./ --transform template
    lebab --replace ./ --transform default-param
    lebab --replace ./ --transform  destruct-param
    lebab --replace ./ --transform includes
    lebab --replace ./ --transform obj-method
    lebab --replace ./ --transform class
    lebab --replace ./ --transform arrow
    lebab --replace ./ --transform arg-spread
    lebab --replace ./ --transform arg-rest
    lebab --replace ./ --transform for-each
    lebab --replace ./ --transform for-of
    lebab --replace ./ --transform commonjs
    lebab --replace ./ --transform exponent
    lebab --replace ./ --transform multi-var
    lebab --replace ./ --transform template
    lebab --replace ./ --transform default-param
    lebab --replace ./ --transform  destruct-param
    lebab --replace ./ --transform includes

------------------------------------------------------------------------

34. Troubleshoot Ubuntu Input/Output Error
==========================================

### Description: Open Powershell as Administrator

> Notes:

###### code

     wsl.exe --shutdown

     Get-Service LxssManager | Restart-Service

------------------------------------------------------------------------

35. Export Medium as Markdown
=============================

### Description

> Notes:

###### code

    npm i mediumexporter -g


    mediumexporter https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4 >ds.md

------------------------------------------------------------------------

36. Delete files in violation of a given size range (100MB for git)
===================================================================

### Description

> Notes:

###### code

    find . -size +75M -a -print -a -exec rm -f {} \;




    find . -size +98M -a -print -a -exec rm -f {} \;

------------------------------------------------------------------------

37. download all links of given file type
=========================================

### Description

> Notes:

###### code


    wget -r -A.pdf https://overapi.com/git

------------------------------------------------------------------------

38. Kill all node processes
===========================

### Description

> Notes:

###### code

    killall -s KILL node

------------------------------------------------------------------------

39. Remove string from file names recursively
=============================================

### Description: In the example below I am using this command to remove the string "-master" from all file names in the working directory and all of it's sub directories

###### code

    find <mydir> -type f -exec sed -i 's/<string1>/<string2>/g' {} +




    find . -type f -exec rename 's/-master//g' {} +

> Notes: The same could be done for folder names by changing the *-type f* flag (for file) to a *-type d* flag (for directory)

    find <mydir> -type d -exec sed -i 's/<string1>/<string2>/g' {} +




    find . -type d -exec rename 's/-master//g' {} +

------------------------------------------------------------------------

40. Remove spaces from file and folder names recursively
========================================================

### Description: replaces spaces in file and folder names with an `_` underscore

> Notes: need to run `sudo apt install rename` to use this command

###### code

    find . -name "* *" -type d | rename 's/ /_/g'
    find . -name "* *" -type f | rename 's/ /_/g'

------------------------------------------------------------------------

41. Zip Each subdirectories in a given directory into their own zip file
========================================================================

### Description

> Notes:

###### code

    for i in */; do zip -r "${i%/}.zip" "$i"; done

------------------------------------------------------------------------

90
==

91. Unzip PowerShell
====================

### Description

> Notes:

###### code

    PARAM (
        [string] $ZipFilesPath = "./",
        [string] $UnzipPath = "./RESULT"
    )

    $Shell = New-Object -com Shell.Application
    $Location = $Shell.NameSpace($UnzipPath)

    $ZipFiles = Get-Childitem $ZipFilesPath -Recurse -Include *.ZIP

    $progress = 1
    foreach ($ZipFile in $ZipFiles) {
        Write-Progress -Activity "Unzipping to $($UnzipPath)" -PercentComplete (($progress / ($ZipFiles.Count + 1)) * 100) -CurrentOperation $ZipFile.FullName -Status "File $($Progress) of $($ZipFiles.Count)"
        $ZipFolder = $Shell.NameSpace($ZipFile.fullname)


        $Location.Copyhere($ZipFolder.items(), 1040) # 1040 - No msgboxes to the user - http://msdn.microsoft.com/en-us/library/bb787866%28VS.85%29.aspx
        $progress++
    }

------------------------------------------------------------------------

92. return to bash from zsh
===========================

### Description

> Notes:

###### code

     sudo apt --purge remove zsh

------------------------------------------------------------------------

93. Symbolic Link
=================

### Description: to working directory

> Notes:

###### code

    ln -s "$(pwd)" ~/NameOfLink

    ln -s "$(pwd)" ~/Downloads

------------------------------------------------------------------------

94. auto generate readme
========================

### Description: rename existing readme to blueprint.md

> Notes:

###### code

    npx @appnest/readme generate

------------------------------------------------------------------------

95. Log into postgres
=====================

### Description

> Notes:

###### code

    sudo -u postgres psql

------------------------------------------------------------------------

### Technologies Used:

<table><thead><tr class="header"><th>URL</th><th><a href="https://bgoonz-blog.netlify.app">https://bgoonz-blog.netlify.app</a></th></tr></thead><tbody><tr class="odd"><td>Miscellaneous</td><td>webpack ; Prism</td></tr><tr class="even"><td>Widgets</td><td>Facebook ; AddThis</td></tr><tr class="odd"><td>Analytics</td><td>Moat ; Google Analytics ; Google Ads Conversion Tracking</td></tr><tr class="even"><td>Comment systems</td><td>Facebook API &amp; REPL.it Database</td></tr><tr class="odd"><td>Security</td><td>Netlify Access</td></tr><tr class="even"><td>Font scripts</td><td>Google Font API</td></tr><tr class="odd"><td>CDN</td><td>Unpkg ; jsDelivr ; jQuery CDN ; Netlify</td></tr><tr class="even"><td>Marketing automation</td><td>MailChimp</td></tr><tr class="odd"><td>Advertising</td><td>Google AdSense</td></tr><tr class="even"><td>Tag managers</td><td>Google Tag Manager</td></tr><tr class="odd"><td>Live chat</td><td>Smartsupp ; LiveChat : Mesibo API</td></tr><tr class="even"><td>JavaScript libraries</td><td>Lodash ; Dojo ; core-js ; jQuery</td></tr></tbody></table>

------------------------------------------------------------------------

96. URL To Subscribe To YouTube Channel
=======================================

### Description

> Notes:

###### code

    https://www.youtube.com/channel/UC1HDa0wWnIKUf-b4yY9JecQ?sub_confirmation=1

------------------------------------------------------------------------

97. Embed Repl.it In Medium Post
================================

###### code

    https://repl.it/@bgoonz/Data-Structures-Algos-Codebase?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com


    https://repl.it/@bgoonz/node-db1-project?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

    https://repl.it/@bgoonz/interview-prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com


    https://repl.it/@bgoonz/Database-Prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

------------------------------------------------------------------------

98
==

### Description

> Notes:

###### code


    find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +


    find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

------------------------------------------------------------------------

![Preview](https://i.imgur.com/nieW1vp.png)

Wiki Nav
--------

-   [Home](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki)
-   [add copy to code blocks.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/add-copy-to-code-blocks.md)
-   [Add site search w algolia.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Add-site-search-w-algolia.md)
-   [adding mailing list.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/adding-mailing-list.md)
-   [Adding search 2 gatsby site.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Adding-search-2-gatsby-site.md)
-   [awesome.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/awesome.md)
-   [broken links.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/broken-links.md)
-   [configure custom domain.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/configure-custom-domain.md)
-   [contentauthoring.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/contentauthoring.md)
-   [full text search w lunar.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/full-text-search-w-lunar.md)
-   [inject 4.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/inject-4.md)
-   [inject3.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/inject3.md)
-   [inject4.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/inject4.md)
-   [injected content part2.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/injected-content-part2.md)
-   [injected js part4.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/injected-js-part4.md)
-   [injected part3.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/injected-part3.md)
-   [links 2 embed.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/links-2-embed.md)
-   [links to remember](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/links-to-remember)
-   [Netlify Injected Content](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Netlify-Injected-Content)
-   [old version of index.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/old-version-of-index.md)
-   [optimize vscode.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/optimize-vscode.md)
-   [possibly useful snippets.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/possibly-useful-snippets.md)
-   [privacy policy.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/privacy-policy.md)
-   [random stuff.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/random-stuff.md)
-   [random.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/random.md)
-   [ref type](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/ref-type)
-   [SEO.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/SEO.md)
-   [stable points.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/stable-points.md)
-   [tech used.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/tech-used.md)
-   [Technologies Used.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/Technologies-Used.md)
-   [THINGS TO EMBED.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/THINGS-TO-EMBED.md)
-   [validation report.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/validation-report.md)
-   [web archive.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/web-archive.md)
-   [wordpress vs headless cms.md](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki/wordpress-vs-headless-cms.md)

------------------------------------------------------------------------

Dependencies
------------

Click to expand! [![@algolia\*\*](https://avatars.githubusercontent.com/u/2034458?s=40&v=4)](https://github.com/algolia)[algolia / algoliasearch-client-javascript](https://github.com/algolia/algoliasearch-client-javascript)@algolia/client-search `^ 4.10.3` [![@algolia\*\*](https://avatars.githubusercontent.com/u/2034458?s=40&v=4)](https://github.com/algolia)[algolia / algoliasearch-client-javascript](https://github.com/algolia/algoliasearch-client-javascript)@algolia/client-common `4.10.5` ![@ghost\*\*](https://avatars.githubusercontent.com/u/10137?s=40&v=4)@algolia/requester-common `4.10.5` [![@algolia\*\*](https://avatars.githubusercontent.com/u/2034458?s=40&v=4)](https://github.com/algolia)[algolia / algoliasearch-client-javascript](https://github.com/algolia/algoliasearch-client-javascript)@algolia/transporter `4.10.5` [![@stackbit\*\*](https://avatars.githubusercontent.com/u/38996451?s=40&v=4)](https://github.com/stackbit)[stackbit / gatsby-plugin-menus](https://github.com/stackbit/gatsby-plugin-menus)@stackbit/gatsby-plugin-menus `0.0.4` [![@facebook\*\*](https://avatars.githubusercontent.com/u/69631?s=40&v=4)](https://github.com/facebook)[facebook / jest](https://github.com/facebook/jest)babel-jest `^ 24.7.1` [![@gatsbyjs\*\*](https://avatars.githubusercontent.com/u/12551863?s=40&v=4)](https://github.com/gatsbyjs)[gatsbyjs / gatsby](https://github.com/gatsbyjs/gatsby)babel-preset-gatsby `^ 0.1.11` [![@gatsbyjs\*\*](https://avatars.githubusercontent.com/u/12551863?s=40&v=4)](https://github.com/gatsbyjs)[gatsbyjs / gatsby](https://github.com/gatsbyjs/gatsby) `^             2.5.0` [![@keyz\*\*](https://avatars.githubusercontent.com/u/2268452?s=40&u=c3f56fe1d943474ffe4577a82ad79c1a79d7eb6e&v=4)](https://github.com/keyz)[keyz / identity-obj-proxy](https://github.com/keyz/identity-obj-proxy) `^ 3.0.0` [![@facebook\*\*](https://avatars.githubusercontent.com/u/69631?s=40&v=4)](https://github.com/facebook)[facebook / jest](https://github.com/facebook/jest) `^ 24.7.1` [![@lodash\*\*](https://avatars.githubusercontent.com/u/2565403?s=40&v=4)](https://github.com/lodash)[lodash / lodash](https://github.com/lodash/lodash) `^ 4.17.11` [![@facebook\*\*](https://avatars.githubusercontent.com/u/69631?s=40&v=4)](https://github.com/facebook)[facebook / react](https://github.com/facebook/react)react-test-renderer `^ 16.8.6` [![@getkirby-v2\*\*](https://avatars.githubusercontent.com/u/6985611?s=40&v=4)](https://github.com/getkirby-v2)[getkirby-v2 / algolia-plugin](https://github.com/getkirby-v2/algolia-plugin)algolia `0.0.0` [![@ecomfe\*\*](https://avatars.githubusercontent.com/u/2268460?s=40&v=4)](https://github.com/ecomfe)[ecomfe / babel-runtime](https://github.com/ecomfe/babel-runtime) `6.26.0` [![@paulmillr\*\*](https://avatars.githubusercontent.com/u/574696?s=40&u=7f4396380d73af134b898c8eaf7bb171f448f40f&v=4)](https://github.com/paulmillr)[paulmillr / chokidar](https://github.com/paulmillr/chokidar) `3.4.0` [![@DefinitelyTyped\*\*](https://avatars.githubusercontent.com/u/3637556?s=40&v=4)](https://github.com/DefinitelyTyped)[DefinitelyTyped / DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)@types/node `^ 13` [![@micromatch\*\*](https://avatars.githubusercontent.com/u/26890389?s=40&v=4)](https://github.com/micromatch)[micromatch / anymatch](https://github.com/micromatch/anymatch) `~ 3.1.1` [![@micromatch\*\*](https://avatars.githubusercontent.com/u/26890389?s=40&v=4)](https://github.com/micromatch)[micromatch / braces](https://github.com/micromatch/braces) `~ 3.0.2` [![@chaijs\*\*](https://avatars.githubusercontent.com/u/1515293?s=40&v=4)](https://github.com/chaijs)[chaijs / chai](https://github.com/chaijs/chai) `^ 4.2` [![@microsoft\*\*](https://avatars.githubusercontent.com/u/6154722?s=40&v=4)](https://github.com/microsoft)[microsoft / dtslint](https://github.com/microsoft/dtslint) `^             3.3.0` [![@eslint\*\*](https://avatars.githubusercontent.com/u/6019716?s=40&v=4)](https://github.com/eslint)[eslint / eslint](https://github.com/eslint/eslint) `^ 6.6.0` [![@fsevents\*\*](https://avatars.githubusercontent.com/u/48760001?s=40&v=4)](https://github.com/fsevents)[fsevents / fsevents](https://github.com/fsevents/fsevents) `~             2.1.2` [![@gulpjs\*\*](https://avatars.githubusercontent.com/u/6200624?s=40&v=4)](https://github.com/gulpjs)[gulpjs / glob-parent](https://github.com/gulpjs/glob-parent) `~             5.1.0` [![@sindresorhus\*\*](https://avatars.githubusercontent.com/u/170270?s=40&u=34acd557a042ac478d273a4621570cadb6b0bd89&v=4)](https://github.com/sindresorhus)[sindresorhus / is-binary-path](https://github.com/sindresorhus/is-binary-path) `~ 2.1.0` [![@micromatch\*\*](https://avatars.githubusercontent.com/u/26890389?s=40&v=4)](https://github.com/micromatch)[micromatch / is-glob](https://github.com/micromatch/is-glob) `~ 4.0.1` [![@mochajs\*\*](https://avatars.githubusercontent.com/u/8770005?s=40&v=4)](https://github.com/mochajs)[mochajs / mocha](https://github.com/mochajs/mocha) `^ 7.0.0` [![@jonschlinkert\*\*](https://avatars.githubusercontent.com/u/383994?s=40&u=335f06277f72722162e89bd5516849f2e82f37cf&v=4)](https://github.com/jonschlinkert)[jonschlinkert / normalize-path](https://github.com/jonschlinkert/normalize-path) `~ 3.0.0` [![@istanbuljs\*\*](https://avatars.githubusercontent.com/u/13523395?s=40&v=4)](https://github.com/istanbuljs)[istanbuljs / nyc](https://github.com/istanbuljs/nyc) `^ 15.0.0` [![@paulmillr\*\*](https://avatars.githubusercontent.com/u/574696?s=40&u=7f4396380d73af134b898c8eaf7bb171f448f40f&v=4)](https://github.com/paulmillr)[paulmillr / readdirp](https://github.com/paulmillr/readdirp) `~             3.4.0` [![@isaacs\*\*](https://avatars.githubusercontent.com/u/9287?s=40&u=60a280618307ae965cadbe52da4baa7e351c848c&v=4)](https://github.com/isaacs)[isaacs / rimraf](https://github.com/isaacs/rimraf) `^ 3.0.0` [![@sinonjs\*\*](https://avatars.githubusercontent.com/u/6570253?s=40&v=4)](https://github.com/sinonjs)[sinonjs / sinon](https://github.com/sinonjs/sinon) `^ 9.0.1` [![@domenic\*\*](https://avatars.githubusercontent.com/u/617481?s=40&v=4)](https://github.com/domenic)[domenic / sinon-chai](https://github.com/domenic/sinon-chai) `^             3.3.0` [![@anodynos\*\*](https://avatars.githubusercontent.com/u/856453?s=40&v=4)](https://github.com/anodynos)[anodynos / upath](https://github.com/anodynos/upath) `^             1.2.0` [![@JedWatson\*\*](https://avatars.githubusercontent.com/u/872310?s=40&u=9548676d01f104232ee42e5ac0d985db77e6a5a4&v=4)](https://github.com/JedWatson)[JedWatson / classnames](https://github.com/JedWatson/classnames) `2.2.6` [![@bestiejs\*\*](https://avatars.githubusercontent.com/u/802850?s=40&v=4)](https://github.com/bestiejs)[bestiejs / benchmark.js](https://github.com/bestiejs/benchmark.js)benchmark `^ 1.0.0` [![@browserify\*\*](https://avatars.githubusercontent.com/u/6320506?s=40&v=4)](https://github.com/browserify)[browserify / browserify](https://github.com/browserify/browserify) `^ 14.1.0` [![@mochajs\*\*](https://avatars.githubusercontent.com/u/8770005?s=40&v=4)](https://github.com/mochajs)[mochajs / mocha](https://github.com/mochajs/mocha) `^ 2.1.0` [![@jeromedecoster\*\*](https://avatars.githubusercontent.com/u/158071?s=40&u=470a733fdc34a9fedab18ae4cf5109d2ea357425&v=4)](https://github.com/jeromedecoster)[jeromedecoster / opn-cli](https://github.com/jeromedecoster/opn-cli) `^ 3.1.0` [![@documentationjs\*\*](https://avatars.githubusercontent.com/u/11415556?s=40&v=4)](https://github.com/documentationjs)[documentationjs / documentation](https://github.com/documentationjs/documentation) `^             13.2.5` [![@babel\*\*](https://avatars.githubusercontent.com/u/9637642?s=40&v=4)](https://github.com/babel)[babel / babel](https://github.com/babel/babel)@babel/core `7.12.3` [Cloudfare-Backup](https://bgoonz-blog-2-0.pages.dev/) ↞↠ Search Website: [search](https://www.algolia.com/realtime-search-demo/web-dev-resource-hub-9e6b8aa8-6106-44c5-9f59-ff3f9531abd4) ↞↠ [Backup Repo Deploy](https://bgoonzblog20-backup.netlify.app/#gsc.tab=0) ↞↠ [Github pages](https://bgoonz.github.io/BGOONZ_BLOG_2.0/) ↞↠ [Go To Site Wiki](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki)

------------------------------------------------------------------------

Docs Structure
--------------

Docs Structure `├── blog             │ ├── 300-react-questions.md             │ ├── awesome-graphql.md             │ ├── big-o-complexity.md             │ ├── blog-archive.md             │ ├── blogwcomments.md             │ ├── data-structures.md             │ ├── flow-control-in-python.md             │ ├── functions-in-python.md             │ ├── git-gateway.md             │ ├── index.md             │ ├── interview-questions-js.md             │ ├── netlify-cms.md             │ ├── platform-docs.md             │ ├── python-for-js-dev.md             │ ├── python-resources.md             │ ├── web-dev-trends.md             │ └── web-scraping.md             ├── docs             │ ├── about             │ │ ├── eng-portfolio.md             │ │ ├── ideas-for-this-website.md             │ │ ├── index.md             │ │ ├── intrests.md             │ │ ├── job-search.md             │ │ └── resume.md             │ ├── articles             │ │ ├── basic-web-dev.md             │ │ ├── buffers.md             │ │ ├── dev-dep.md             │ │ ├── event-loop.md             │ │ ├── fs-module.md             │ │ ├── how-the-web-works.md             │ │ ├── http.md             │ │ ├── index.md             │ │ ├── install.md             │ │ ├── intro.md             │ │ ├── modules.md             │ │ ├── nextjs.md             │ │ ├── node-api-express.md             │ │ ├── node-cli-args.md             │ │ ├── node-common-modules.md             │ │ ├── node-env-variables.md             │ │ ├── node-js-language.md             │ │ ├── node-package-manager.md             │ │ ├── node-repl.md             │ │ ├── node-run-cli.md             │ │ ├── nodejs.md             │ │ ├── nodevsbrowser.md             │ │ ├── npm.md             │ │ ├── npx.md             │ │ ├── os-module.md             │ │ ├── reading-files.md             │ │ ├── semantic-html.md             │ │ ├── semantic.md             │ │ ├── the-uniform-resource-locator-(url).md             │ │ ├── understanding-firebase.md             │ │ ├── v8.md             │ │ ├── web-standards-checklist.md             │ │ ├── webdev-tools.md             │ │ └── writing-files.md             │ ├── audio             │ │ ├── audio-feature-extraction.md             │ │ ├── audio.md             │ │ ├── dfft.md             │ │ ├── discrete-fft.md             │ │ ├── dtw-python-explained.md             │ │ ├── dynamic-time-warping.md             │ │ ├── index.md             │ │ └── web-audio-api.md             │ ├── career             │ │ ├── dev-interview.md             │ │ ├── index.md             │ │ ├── interview-dos-n-donts.md             │ │ └── job-boards.md             │ ├── community             │ │ ├── an-open-letter-2-future-developers.md             │ │ ├── index.md             │ │ └── video-chat.md             │ ├── content             │ │ ├── algo.md             │ │ ├── archive.md             │ │ ├── gatsby-Queries-Mutations.md             │ │ ├── history-api.md             │ │ ├── index.md             │ │ ├── main-projects.md             │ │ └── trouble-shooting.md             │ ├── data-structures             │ │ └── index.md             │ ├── docs             │ │ ├── appendix.md             │ │ ├── art-of-command-line.md             │ │ ├── bash.md             │ │ ├── content.md             │ │ ├── css.md             │ │ ├── data-structures-docs.md             │ │ ├── es-6-features.md             │ │ ├── git-reference.md             │ │ ├── git-repos.md             │ │ ├── html-spec.md             │ │ ├── index.md             │ │ ├── markdown.md             │ │ ├── no-whiteboarding.md             │ │ ├── node-docs-complete.md             │ │ ├── node-docs-full.md             │ │ ├── regex-in-js.md             │ │ └── sitemap.md             │ ├── faq             │ │ ├── contact.md             │ │ ├── index.md             │ │ └── plug-ins.md             │ ├── gists.md             │ ├── index.md             │ ├── interact             │ │ ├── callstack-visual.md             │ │ ├── clock.md             │ │ ├── index.md             │ │ ├── jupyter-notebooks.md             │ │ ├── other-sites.md             │ │ └── video-chat.md             │ ├── interview             │ │ ├── index.md             │ │ ├── job-search-nav.md             │ │ └── review-concepts.md             │ ├── javascript             │ │ ├── arrow-functions.md             │ │ ├── asyncjs.md             │ │ ├── await-keyword.md             │ │ ├── bigo.md             │ │ ├── clean-code.md             │ │ ├── constructor-functions.md             │ │ ├── index.md             │ │ ├── promises.md             │ │ ├── review.md             │ │ └── this-is-about-this.md             │ ├── leetcode             │ │ └── index.md             │ ├── privacy-policy.md             │ ├── projects             │ │ ├── embeded-websites.md             │ │ ├── index.md             │ │ ├── list-of-projects.md             │ │ ├── mini-projects.md             │ │ └── my-websites.md             │ ├── python             │ │ ├── at-length.md             │ │ ├── cheat-sheet.md             │ │ ├── comprehensive-guide.md             │ │ ├── examples.md             │ │ ├── flow-control.md             │ │ ├── functions.md             │ │ ├── google-sheets-api.md             │ │ ├── index.md             │ │ ├── intro-for-js-devs.md             │ │ ├── python-ds.md             │ │ └── snippets.md             │ ├── quick-reference             │ │ ├── Emmet.md             │ │ ├── all-emojis.md             │ │ ├── create-react-app.md             │ │ ├── git-bash.md             │ │ ├── git-tricks.md             │ │ ├── google-firebase.md             │ │ ├── heroku-error-codes.md             │ │ ├── index.md             │ │ ├── installation.md             │ │ ├── markdown-dropdowns.md             │ │ ├── minifiction.md             │ │ ├── new-repo-instructions.md             │ │ ├── psql-setup.md             │ │ ├── pull-request-rubric.md             │ │ ├── quick-links.md             │ │ ├── topRepos.md             │ │ ├── understanding-path.md             │ │ └── vscode-themes.md             │ ├── react             │ │ ├── ajax-n-apis.md             │ │ ├── cheatsheet.md             │ │ ├── createReactApp.md             │ │ ├── demo.md             │ │ ├── dont-use-index-as-keys.md             │ │ ├── index.md             │ │ ├── jsx.md             │ │ ├── react-docs.md             │ │ ├── react-in-depth.md             │ │ ├── react2.md             │ │ └── render-elements.md             │ ├── reference             │ │ ├── awesome-lists.md             │ │ ├── awesome-static.md             │ │ ├── bash-commands.md             │ │ ├── bookmarks.md             │ │ ├── embed-the-web.md             │ │ ├── github-search.md             │ │ ├── google-cloud.md             │ │ ├── how-2-reinstall-npm.md             │ │ ├── how-to-kill-a-process.md             │ │ ├── index.md             │ │ ├── installing-node.md             │ │ ├── intro-to-nodejs.md             │ │ ├── notes-template.md             │ │ ├── psql.md             │ │ ├── resources.md             │ │ ├── vscode.md             │ │ └── web-api's.md             │ ├── search.md             │ ├── sitemap.md             │ ├── tips             │ │ ├── array-methods.md             │ │ ├── index.md             │ │ └── insert-into-array.md             │ ├── tools             │ │ ├── Archive.md             │ │ ├── data-structures.md             │ │ ├── dev-utilities.md             │ │ ├── index.md             │ │ └── markdown-html.md             │ └── tutorials             │ ├── enviorment-setup.md             │ └── index.md             ├── index.md             ├── privacy-policy.md             ├── readme.md             ├── showcase.md             └── tree.md              23 directories, 202 files` \# SITEMAP \# [**🌍⇒https://bgoonz-blog.netlify.app/🗺️**](https://bgoonz-blog.netlify.app/) \#\#\# [**🌍⇒blog🗺️**](https://bgoonz-blog.netlify.app/blog) \#\#\# [**🌍⇒docs🗺️**](https://bgoonz-blog.netlify.app/docs) \#\#\# [**🌍⇒readme🗺️**](https://bgoonz-blog.netlify.app/readme) \#\#\# [**🌍⇒review🗺️**](https://bgoonz-blog.netlify.app/review) \#\#\# [**🌍⇒showcase🗺️**](https://bgoonz-blog.netlify.app/showcase) \#\#\# [**🌍⇒blog/awesome-graphql🗺️**](https://bgoonz-blog.netlify.app/blog/awesome-graphql) \#\#\# [**🌍⇒blog/big-o-complexity🗺️**](https://bgoonz-blog.netlify.app/blog/big-o-complexity) \#\#\# [**🌍⇒blog/blog-archive🗺️**](https://bgoonz-blog.netlify.app/blog/blog-archive) \#\#\# [**🌍⇒blog/blogwcomments🗺️**](https://bgoonz-blog.netlify.app/blog/blogwcomments) \#\#\# [**🌍⇒blog/data-structures🗺️**](https://bgoonz-blog.netlify.app/blog/data-structures) \#\#\# [**🌍⇒blog/flow-control-in-python🗺️**](https://bgoonz-blog.netlify.app/blog/flow-control-in-python) \#\#\# [**🌍⇒blog/functions-in-python🗺️**](https://bgoonz-blog.netlify.app/blog/functions-in-python) \#\#\# [**🌍⇒blog/git-gateway🗺️**](https://bgoonz-blog.netlify.app/blog/git-gateway) \#\#\# [**🌍⇒blog/interview-questions-js🗺️**](https://bgoonz-blog.netlify.app/blog/interview-questions-js) \#\#\# [**🌍⇒blog/media-queries-explained🗺️**](https://bgoonz-blog.netlify.app/blog/media-queries-explained) \#\#\# [**🌍⇒blog/my-medium🗺️**](https://bgoonz-blog.netlify.app/blog/my-medium) \#\#\# [**🌍⇒blog/netlify-cms🗺️**](https://bgoonz-blog.netlify.app/blog/netlify-cms) \#\#\# [**🌍⇒blog/platform-docs🗺️**](https://bgoonz-blog.netlify.app/blog/platform-docs) \#\#\# [**🌍⇒blog/python-for-js-dev🗺️**](https://bgoonz-blog.netlify.app/blog/python-for-js-dev) \#\#\# [**🌍⇒blog/python-resources🗺️**](https://bgoonz-blog.netlify.app/blog/python-resources) \#\#\# [**🌍⇒blog/web-dev-trends🗺️**](https://bgoonz-blog.netlify.app/blog/web-dev-trends) \#\#\# [**🌍⇒blog/web-scraping🗺️**](https://bgoonz-blog.netlify.app/blog/web-scraping) \#\#\# [**🌍⇒docs/about🗺️**](https://bgoonz-blog.netlify.app/docs/about) \#\#\# [**🌍⇒docs/articles🗺️**](https://bgoonz-blog.netlify.app/docs/articles) \#\#\# [**🌍⇒docs/audio🗺️**](https://bgoonz-blog.netlify.app/docs/audio) \#\#\# [**🌍⇒docs/career🗺️**](https://bgoonz-blog.netlify.app/docs/career) \#\#\# [**🌍⇒docs/community🗺️**](https://bgoonz-blog.netlify.app/docs/community) \#\#\# [**🌍⇒docs/content🗺️**](https://bgoonz-blog.netlify.app/docs/content) \#\#\# [**🌍⇒docs/docs🗺️**](https://bgoonz-blog.netlify.app/docs/docs) \#\#\# [**🌍⇒docs/faq🗺️**](https://bgoonz-blog.netlify.app/docs/faq) \#\#\# [**🌍⇒docs/gallery🗺️**](https://bgoonz-blog.netlify.app/docs/gallery) \#\#\# [**🌍⇒docs/interact🗺️**](https://bgoonz-blog.netlify.app/docs/interact) \#\#\# [**🌍⇒docs/javascript🗺️**](https://bgoonz-blog.netlify.app/docs/javascript) \#\#\# [**🌍⇒docs/leetcode🗺️**](https://bgoonz-blog.netlify.app/docs/leetcode) \#\#\# [**🌍⇒docs/other-content🗺️**](https://bgoonz-blog.netlify.app/docs/other-content) \#\#\# [**🌍⇒docs/privacy-policy🗺️**](https://bgoonz-blog.netlify.app/docs/privacy-policy) \#\#\# [**🌍⇒docs/projects🗺️**](https://bgoonz-blog.netlify.app/docs/projects) \#\#\# [**🌍⇒docs/python🗺️**](https://bgoonz-blog.netlify.app/docs/python) \#\#\# [**🌍⇒docs/quick-reference🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference) \#\#\# [**🌍⇒docs/react🗺️**](https://bgoonz-blog.netlify.app/docs/react) \#\#\# [**🌍⇒docs/reference🗺️**](https://bgoonz-blog.netlify.app/docs/reference) \#\#\# [**🌍⇒docs/search🗺️**](https://bgoonz-blog.netlify.app/docs/search) \#\#\# [**🌍⇒docs/sitemap🗺️**](https://bgoonz-blog.netlify.app/docs/sitemap) \#\#\# [**🌍⇒docs/tools🗺️**](https://bgoonz-blog.netlify.app/docs/tools) \#\#\# [**🌍⇒docs/tutorials🗺️**](https://bgoonz-blog.netlify.app/docs/tutorials) \#\#\# [**🌍⇒docs/about/eng-portfolio🗺️**](https://bgoonz-blog.netlify.app/docs/about/eng-portfolio) \#\#\# [**🌍⇒docs/about/ideas-for-this-website🗺️**](https://bgoonz-blog.netlify.app/docs/about/ideas-for-this-website) \#\#\# [**🌍⇒docs/about/intrests🗺️**](https://bgoonz-blog.netlify.app/docs/about/intrests) \#\#\# [**🌍⇒docs/about/interview🗺️**](https://bgoonz-blog.netlify.app/docs/about/interview) \#\#\# [**🌍⇒docs/about/resume🗺️**](https://bgoonz-blog.netlify.app/docs/about/resume) \#\#\# [**🌍⇒docs/articles/basic-web-dev🗺️**](https://bgoonz-blog.netlify.app/docs/articles/basic-web-dev) \#\#\# [**🌍⇒docs/articles/buffers🗺️**](https://bgoonz-blog.netlify.app/docs/articles/buffers) \#\#\# [**🌍⇒docs/articles/dev-dep🗺️**](https://bgoonz-blog.netlify.app/docs/articles/dev-dep) \#\#\# [**🌍⇒docs/articles/event-loop🗺️**](https://bgoonz-blog.netlify.app/docs/articles/event-loop) \#\#\# [**🌍⇒docs/articles/fs-module🗺️**](https://bgoonz-blog.netlify.app/docs/articles/fs-module) \#\#\# [**🌍⇒docs/articles/how-the-web-works🗺️**](https://bgoonz-blog.netlify.app/docs/articles/how-the-web-works) \#\#\# [**🌍⇒docs/articles/http🗺️**](https://bgoonz-blog.netlify.app/docs/articles/http) \#\#\# [**🌍⇒docs/articles/install🗺️**](https://bgoonz-blog.netlify.app/docs/articles/install) \#\#\# [**🌍⇒docs/articles/intro🗺️**](https://bgoonz-blog.netlify.app/docs/articles/intro) \#\#\# [**🌍⇒docs/articles/media-queries-no-more🗺️**](https://bgoonz-blog.netlify.app/docs/articles/media-queries-no-more) \#\#\# [**🌍⇒docs/articles/module-exports🗺️**](https://bgoonz-blog.netlify.app/docs/articles/module-exports) \#\#\# [**🌍⇒docs/articles/nextjs🗺️**](https://bgoonz-blog.netlify.app/docs/articles/nextjs) \#\#\# [**🌍⇒docs/articles/node-api-express🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-api-express) \#\#\# [**🌍⇒docs/articles/node-cli-args🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-cli-args) \#\#\# [**🌍⇒docs/articles/node-common-modules🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-common-modules) \#\#\# [**🌍⇒docs/articles/node-env-variables🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-env-variables) \#\#\# [**🌍⇒docs/articles/node-js-language🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-js-language) \#\#\# [**🌍⇒docs/articles/node-package-manager🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-package-manager) \#\#\# [**🌍⇒docs/articles/node-repl🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-repl) \#\#\# [**🌍⇒docs/articles/node-run-cli🗺️**](https://bgoonz-blog.netlify.app/docs/articles/node-run-cli) \#\#\# [**🌍⇒docs/articles/nodejs🗺️**](https://bgoonz-blog.netlify.app/docs/articles/nodejs) \#\#\# [**🌍⇒docs/articles/nodevsbrowser🗺️**](https://bgoonz-blog.netlify.app/docs/articles/nodevsbrowser) \#\#\# [**🌍⇒docs/articles/npm🗺️**](https://bgoonz-blog.netlify.app/docs/articles/npm) \#\#\# [**🌍⇒docs/articles/npx🗺️**](https://bgoonz-blog.netlify.app/docs/articles/npx) \#\#\# [**🌍⇒docs/articles/os-module🗺️**](https://bgoonz-blog.netlify.app/docs/articles/os-module) \#\#\# [**🌍⇒docs/articles/package-lock🗺️**](https://bgoonz-blog.netlify.app/docs/articles/package-lock) \#\#\# [**🌍⇒docs/articles/reading-files🗺️**](https://bgoonz-blog.netlify.app/docs/articles/reading-files) \#\#\# [**🌍⇒docs/articles/semantic🗺️**](https://bgoonz-blog.netlify.app/docs/articles/semantic) \#\#\# [**🌍⇒docs/articles/semantic-html🗺️**](https://bgoonz-blog.netlify.app/docs/articles/semantic-html) \#\#\# [**🌍⇒docs/articles/the-uniform-resource-locator-(url)🗺️**](https://bgoonz-blog.netlify.app/docs/articles/the-uniform-resource-locator-(url)&gt;) \#\#\# [**🌍⇒docs/articles/understanding-firebase🗺️**](https://bgoonz-blog.netlify.app/docs/articles/understanding-firebase) \#\#\# [**🌍⇒docs/articles/v8🗺️**](https://bgoonz-blog.netlify.app/docs/articles/v8) \#\#\# [**🌍⇒docs/articles/web-standards-checklist🗺️**](https://bgoonz-blog.netlify.app/docs/articles/web-standards-checklist) \#\#\# [**🌍⇒docs/articles/webdev-tools🗺️**](https://bgoonz-blog.netlify.app/docs/articles/webdev-tools) \#\#\# [**🌍⇒docs/articles/write-2-json-with-python🗺️**](https://bgoonz-blog.netlify.app/docs/articles/write-2-json-with-python) \#\#\# [**🌍⇒docs/articles/writing-files🗺️**](https://bgoonz-blog.netlify.app/docs/articles/writing-files) \#\#\# [**🌍⇒docs/audio/audio🗺️**](https://bgoonz-blog.netlify.app/docs/audio/audio) \#\#\# [**🌍⇒docs/audio/audio-feature-extraction🗺️**](https://bgoonz-blog.netlify.app/docs/audio/audio-feature-extraction) \#\#\# [**🌍⇒docs/audio/dfft🗺️**](https://bgoonz-blog.netlify.app/docs/audio/dfft) \#\#\# [**🌍⇒docs/audio/discrete-fft🗺️**](https://bgoonz-blog.netlify.app/docs/audio/discrete-fft) \#\#\# [**🌍⇒docs/audio/dtw-python-explained🗺️**](https://bgoonz-blog.netlify.app/docs/audio/dtw-python-explained) \#\#\# [**🌍⇒docs/audio/dynamic-time-warping🗺️**](https://bgoonz-blog.netlify.app/docs/audio/dynamic-time-warping) \#\#\# [**🌍⇒docs/audio/web-audio-api🗺️**](https://bgoonz-blog.netlify.app/docs/audio/web-audio-api) \#\#\# [**🌍⇒docs/career/confidence🗺️**](https://bgoonz-blog.netlify.app/docs/career/confidence) \#\#\# [**🌍⇒docs/career/dev-interview🗺️**](https://bgoonz-blog.netlify.app/docs/career/dev-interview) \#\#\# [**🌍⇒docs/career/interview-dos-n-donts🗺️**](https://bgoonz-blog.netlify.app/docs/career/interview-dos-n-donts) \#\#\# [**🌍⇒docs/career/job-boards🗺️**](https://bgoonz-blog.netlify.app/docs/career/job-boards) \#\#\# [**🌍⇒docs/community/an-open-letter-2-future-developers🗺️**](https://bgoonz-blog.netlify.app/docs/community/an-open-letter-2-future-developers) \#\#\# [**🌍⇒docs/community/video-chat🗺️**](https://bgoonz-blog.netlify.app/docs/community/video-chat) \#\#\# [**🌍⇒docs/content/algo🗺️**](https://bgoonz-blog.netlify.app/docs/content/algo) \#\#\# [**🌍⇒docs/content/archive🗺️**](https://bgoonz-blog.netlify.app/docs/content/archive) \#\#\# [**🌍⇒docs/content/data-structures-algo🗺️**](https://bgoonz-blog.netlify.app/docs/content/data-structures-algo) \#\#\# [**🌍⇒docs/content/gatsby-Queries-Mutations🗺️**](https://bgoonz-blog.netlify.app/docs/content/gatsby-Queries-Mutations) \#\#\# [**🌍⇒docs/content/history-api🗺️**](https://bgoonz-blog.netlify.app/docs/content/history-api) \#\#\# [**🌍⇒docs/content/projects🗺️**](https://bgoonz-blog.netlify.app/docs/content/projects) \#\#\# [**🌍⇒docs/content/recent-projects🗺️**](https://bgoonz-blog.netlify.app/docs/content/recent-projects) \#\#\# [**🌍⇒docs/content/trouble-shooting🗺️**](https://bgoonz-blog.netlify.app/docs/content/trouble-shooting) \#\#\# [**🌍⇒docs/docs/appendix🗺️**](https://bgoonz-blog.netlify.app/docs/docs/appendix) \#\#\# [**🌍⇒docs/docs/bash🗺️**](https://bgoonz-blog.netlify.app/docs/docs/bash) \#\#\# [**🌍⇒docs/docs/content🗺️**](https://bgoonz-blog.netlify.app/docs/docs/content) \#\#\# [**🌍⇒docs/docs/css🗺️**](https://bgoonz-blog.netlify.app/docs/docs/css) \#\#\# [**🌍⇒docs/docs/data-structures-docs🗺️**](https://bgoonz-blog.netlify.app/docs/docs/data-structures-docs) \#\#\# [**🌍⇒docs/docs/git-reference🗺️**](https://bgoonz-blog.netlify.app/docs/docs/git-reference) \#\#\# [**🌍⇒docs/docs/git-repos🗺️**](https://bgoonz-blog.netlify.app/docs/docs/git-repos) \#\#\# [**🌍⇒docs/docs/html-spec🗺️**](https://bgoonz-blog.netlify.app/docs/docs/html-spec) \#\#\# [**🌍⇒docs/docs/markdown🗺️**](https://bgoonz-blog.netlify.app/docs/docs/markdown) \#\#\# [**🌍⇒docs/docs/no-whiteboarding🗺️**](https://bgoonz-blog.netlify.app/docs/docs/no-whiteboarding) \#\#\# [**🌍⇒docs/docs/node-docs-complete🗺️**](https://bgoonz-blog.netlify.app/docs/docs/node-docs-complete) \#\#\# [**🌍⇒docs/docs/node-docs-full🗺️**](https://bgoonz-blog.netlify.app/docs/docs/node-docs-full) \#\#\# [**🌍⇒docs/docs/regex-in-js🗺️**](https://bgoonz-blog.netlify.app/docs/docs/regex-in-js) \#\#\# [**🌍⇒docs/docs/sitemap🗺️**](https://bgoonz-blog.netlify.app/docs/docs/sitemap) \#\#\# [**🌍⇒docs/faq/contact🗺️**](https://bgoonz-blog.netlify.app/docs/faq/contact) \#\#\# [**🌍⇒docs/faq/plug-ins🗺️**](https://bgoonz-blog.netlify.app/docs/faq/plug-ins) \#\#\# [**🌍⇒docs/interact/callstack-visual🗺️**](https://bgoonz-blog.netlify.app/docs/interact/callstack-visual) \#\#\# [**🌍⇒docs/interact/clock🗺️**](https://bgoonz-blog.netlify.app/docs/interact/clock) \#\#\# [**🌍⇒docs/interact/jupyter-notebooks🗺️**](https://bgoonz-blog.netlify.app/docs/interact/jupyter-notebooks) \#\#\# [**🌍⇒docs/interact/other-sites🗺️**](https://bgoonz-blog.netlify.app/docs/interact/other-sites) \#\#\# [**🌍⇒docs/interact/video-chat🗺️**](https://bgoonz-blog.netlify.app/docs/interact/video-chat) \#\#\# [**🌍⇒docs/javascript/arrow-functions🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/arrow-functions) \#\#\# [**🌍⇒docs/javascript/await-keyword🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/await-keyword) \#\#\# [**🌍⇒docs/javascript/bigo🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/bigo) \#\#\# [**🌍⇒docs/javascript/clean-code🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/clean-code) \#\#\# [**🌍⇒docs/javascript/constructor-functions🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/constructor-functions) \#\#\# [**🌍⇒docs/javascript/promises🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/promises) \#\#\# [**🌍⇒docs/javascript/review🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/review) \#\#\# [**🌍⇒docs/javascript/this-is-about-this🗺️**](https://bgoonz-blog.netlify.app/docs/javascript/this-is-about-this) \#\#\# [**🌍⇒docs/projects/medium-links🗺️**](https://bgoonz-blog.netlify.app/docs/projects/medium-links) \#\#\# [**🌍⇒docs/projects/my-websites🗺️**](https://bgoonz-blog.netlify.app/docs/projects/my-websites) \#\#\# [**🌍⇒docs/python/at-length🗺️**](https://bgoonz-blog.netlify.app/docs/python/at-length) \#\#\# [**🌍⇒docs/python/basics🗺️**](https://bgoonz-blog.netlify.app/docs/python/basics) \#\#\# [**🌍⇒docs/python/cheat-sheet🗺️**](https://bgoonz-blog.netlify.app/docs/python/cheat-sheet) \#\#\# [**🌍⇒docs/python/comprehensive-guide🗺️**](https://bgoonz-blog.netlify.app/docs/python/comprehensive-guide) \#\#\# [**🌍⇒docs/python/examples🗺️**](https://bgoonz-blog.netlify.app/docs/python/examples) \#\#\# [**🌍⇒docs/python/flow-control🗺️**](https://bgoonz-blog.netlify.app/docs/python/flow-control) \#\#\# [**🌍⇒docs/python/functions🗺️**](https://bgoonz-blog.netlify.app/docs/python/functions) \#\#\# [**🌍⇒docs/python/google-sheets-api🗺️**](https://bgoonz-blog.netlify.app/docs/python/google-sheets-api) \#\#\# [**🌍⇒docs/python/intro-for-js-devs🗺️**](https://bgoonz-blog.netlify.app/docs/python/intro-for-js-devs) \#\#\# [**🌍⇒docs/python/python-ds🗺️**](https://bgoonz-blog.netlify.app/docs/python/python-ds) \#\#\# [**🌍⇒docs/python/snippets🗺️**](https://bgoonz-blog.netlify.app/docs/python/snippets) \#\#\# [**🌍⇒docs/quick-reference/Emmet🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/Emmet) \#\#\# [**🌍⇒docs/quick-reference/all-emojis🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/all-emojis) \#\#\# [**🌍⇒docs/quick-reference/create-react-app🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/create-react-app) \#\#\# [**🌍⇒docs/quick-reference/git-bash🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/git-bash) \#\#\# [**🌍⇒docs/quick-reference/git-tricks🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/git-tricks) \#\#\# [**🌍⇒docs/quick-reference/google-firebase🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/google-firebase) \#\#\# [**🌍⇒docs/quick-reference/heroku-error-codes🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/heroku-error-codes) \#\#\# [**🌍⇒docs/quick-reference/installation🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/installation) \#\#\# [**🌍⇒docs/quick-reference/markdown-dropdowns🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/markdown-dropdowns) \#\#\# [**🌍⇒docs/quick-reference/minifiction🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/minifiction) \#\#\# [**🌍⇒docs/quick-reference/new-repo-instructions🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/new-repo-instructions) \#\#\# [**🌍⇒docs/quick-reference/psql-setup🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/psql-setup) \#\#\# [**🌍⇒docs/quick-reference/pull-request-rubric🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/pull-request-rubric) \#\#\# [**🌍⇒docs/quick-reference/quick-links🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/quick-links) \#\#\# [**🌍⇒docs/quick-reference/topRepos🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/topRepos) \#\#\# [**🌍⇒docs/quick-reference/understanding-path🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/understanding-path) \#\#\# [**🌍⇒docs/quick-reference/vscode-themes🗺️**](https://bgoonz-blog.netlify.app/docs/quick-reference/vscode-themes) \#\#\# [**🌍⇒docs/react/cheatsheet🗺️**](https://bgoonz-blog.netlify.app/docs/react/cheatsheet) \#\#\# [**🌍⇒docs/react/createReactApp🗺️**](https://bgoonz-blog.netlify.app/docs/react/createReactApp) \#\#\# [**🌍⇒docs/react/demo🗺️**](https://bgoonz-blog.netlify.app/docs/react/demo) \#\#\# [**🌍⇒docs/react/jsx🗺️**](https://bgoonz-blog.netlify.app/docs/react/jsx) \#\#\# [**🌍⇒docs/react/react-docs🗺️**](https://bgoonz-blog.netlify.app/docs/react/react-docs) \#\#\# [**🌍⇒docs/react/react-in-depth🗺️**](https://bgoonz-blog.netlify.app/docs/react/react-in-depth) \#\#\# [**🌍⇒docs/react/react2🗺️**](https://bgoonz-blog.netlify.app/docs/react/react2) \#\#\# [**🌍⇒docs/react/render-elements🗺️**](https://bgoonz-blog.netlify.app/docs/react/render-elements) \#\#\# [**🌍⇒docs/reference/awesome-lists🗺️**](https://bgoonz-blog.netlify.app/docs/reference/awesome-lists) \#\#\# [**🌍⇒docs/reference/awesome-static🗺️**](https://bgoonz-blog.netlify.app/docs/reference/awesome-static) \#\#\# [**🌍⇒docs/reference/bookmarks🗺️**](https://bgoonz-blog.netlify.app/docs/reference/bookmarks) \#\#\# [**🌍⇒docs/reference/embed-the-web🗺️**](https://bgoonz-blog.netlify.app/docs/reference/embed-the-web) \#\#\# [**🌍⇒docs/reference/github-search🗺️**](https://bgoonz-blog.netlify.app/docs/reference/github-search) \#\#\# [**🌍⇒docs/reference/how-2-reinstall-npm🗺️**](https://bgoonz-blog.netlify.app/docs/reference/how-2-reinstall-npm) \#\#\# [**🌍⇒docs/reference/how-to-kill-a-process🗺️**](https://bgoonz-blog.netlify.app/docs/reference/how-to-kill-a-process) \#\#\# [**🌍⇒docs/reference/installing-node🗺️**](https://bgoonz-blog.netlify.app/docs/reference/installing-node) \#\#\# [**🌍⇒docs/reference/intro-to-nodejs🗺️**](https://bgoonz-blog.netlify.app/docs/reference/intro-to-nodejs) \#\#\# [**🌍⇒docs/reference/notes-template🗺️**](https://bgoonz-blog.netlify.app/docs/reference/notes-template) \#\#\# [**🌍⇒docs/reference/psql🗺️**](https://bgoonz-blog.netlify.app/docs/reference/psql) \#\#\# [**🌍⇒docs/reference/resources🗺️**](https://bgoonz-blog.netlify.app/docs/reference/resources) \#\#\# [**🌍⇒docs/reference/vscode🗺️**](https://bgoonz-blog.netlify.app/docs/reference/vscode) \#\#\# [**🌍⇒docs/reference/web-api's🗺️**](https://bgoonz-blog.netlify.app/docs/reference/web-api's) \#\#\# [**🌍⇒docs/tools/data-structures🗺️**](https://bgoonz-blog.netlify.app/docs/tools/data-structures) \#\#\# [**🌍⇒docs/tools/dev-utilities🗺️**](https://bgoonz-blog.netlify.app/docs/tools/dev-utilities) \#\#\# [**🌍⇒docs/tools/google-cloud🗺️**](https://bgoonz-blog.netlify.app/docs/tools/google-cloud) \#\#\# [**🌍⇒docs/tools/markdown-html🗺️**](https://bgoonz-blog.netlify.app/docs/tools/markdown-html) \#\#\# [**🌍⇒docs/tools/more-tools🗺️**](https://bgoonz-blog.netlify.app/docs/tools/more-tools) \#\#\# [**🌍⇒docs/tutorials/google-lighthouse-cli🗺️**](https://bgoonz-blog.netlify.app/docs/tutorials/google-lighthouse-cli)

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

↞↠ Getting Started With GatsbyJS ↞↠ \#

------------------------------------------------------------------------

🚀 Quick start
-------------

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

         # create a new Gatsby site using the default starter
         gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default

2.  **Start developing.**

    Navigate into your new site's directory and start it up.

         cd my-default-starter/
         gatsby develop

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link:*`http://localhost:8000/___graphql`*. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql).*

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

🧐 What's inside
---------------

?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for "source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you'd like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won't change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project's name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

🎓 Learning Gatsby
-----------------

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

-   **For most developers, we recommend starting with our \[in-depth tutorial for creating a site with Gatsby**\]([https://www.gatsbyjs.com/tutorial/).\\\*\\](https://www.gatsbyjs.com/tutorial/).\*\)\* It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head \[to our documentation**\]([https://www.gatsbyjs.com/docs/).\\\*\\](https://www.gatsbyjs.com/docs/).\*\)\* In particular, check out the *Guides*, *API Reference*, and *Advanced Tutorials* sections in the sidebar.

💫 Deploy
--------

[![Deploy to Netlify\*\*](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BGOONZ_BLOG_2.0.git)

[![Deploy with Vercel\*\*](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/BGOONZ_BLOG_2.0.git)

------------------------------------------------------------------------

Gatsby Project Structure | Gatsby
=================================

> Excerpt
> -------
>
> Inside a Gatsby project, you may see some or all of the following folders and files: Folders /.cache Automatically generated. This folder…

------------------------------------------------------------------------

Inside a Gatsby project, you may see some or all of the following folders and files:

    /|-- /.cache|-- /plugins|-- /public|-- /src    |-- /api    |-- /pages    |-- /templates    |-- html.js|-- /static|-- gatsby-config.js|-- gatsby-node.js|-- gatsby-ssr.js|-- gatsby-browser.js

\[\](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/\#folders)Folders
---------------------------------------------------------------------------------------

-   **`/.cache`** *Automatically generated.* This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification. Should be added to the `.gitignore` file if not added already.
-   **`/plugins`** This folder hosts any project-specific ("local”) plugins that aren't published as an `npm` package. Check out the [plugin docs](https://www.gatsbyjs.com/docs/plugins/) for more detail.
-   **`/public`** *Automatically generated.* The output of the build process will be exposed inside this folder. Should be added to the `.gitignore` file if not added already.
-   **`/src`** This directory will contain all of the code related to what you will see on the frontend of your site (what you see in the browser), like your site header, or a page template. "src” is a convention for "source code”.

    -   **`/api`** JavaScript and TypeScript files under `src/api` become functions automatically with paths based on their file name. Check out the [functions guide](https://www.gatsbyjs.com/docs/reference/functions/) for more detail.
    -   **`/pages`** Components under `src/pages` become pages automatically with paths based on their file name. Check out the [pages recipes](https://www.gatsbyjs.com/docs/recipes/pages-layouts) for more detail.
    -   **`/templates`** Contains templates for programmatically creating pages. Check out the [templates docs](https://www.gatsbyjs.com/docs/conceptual/building-with-components/#page-template-components) for more detail.
    -   **`html.js`** For custom configuration of default `.cache/default_html.js`. Check out the [custom HTML docs](https://www.gatsbyjs.com/docs/custom-html/) for more detail.

-   **`/static`** If you put a file into the static folder, it will not be processed by webpack. Instead it will be copied into the public folder untouched. Check out the [assets docs](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/#adding-assets-outside-of-the-module-system) for more detail.

\[\](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/\#files)Files
-----------------------------------------------------------------------------------

-   **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
-   **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you'd like to include, etc. Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail.
-   **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
-   **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

\[\](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/\#miscellaneous)Miscellaneous
---------------------------------------------------------------------------------------------------

The file/folder structure described above reflects Gatsby-specific files and folders. Since Gatsby sites are also React apps, it's common to use standard React code organization patterns such as folders like `/components` and `/utils` inside `/src`. The [React docs](https://reactjs.org/docs/faq-structure.html) have more information on a typical React app folder structure.

------------------------------------------------------------------------

Layout Components | Gatsby
==========================

> Excerpt
> -------
>
> In this guide, you'll learn Gatsby's approach to layouts, how to create and use layout components, and how to prevent layout components from…

------------------------------------------------------------------------

In this guide, you'll learn Gatsby's approach to layouts, how to create and use layout components, and how to prevent layout components from unmounting.

\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#gatsbys-approach-to-layouts)Gatsby's approach to layouts
------------------------------------------------------------------------------------------------------------------------------

Gatsby does not, by default, automatically apply layouts to pages (there are, however, ways to do so which will be covered in a later section). Instead, Gatsby follows React's compositional model of importing and using components. This makes it possible to create multiple levels of layouts, e.g. a global header and footer, and then on some pages, a sidebar menu. It also makes it possible to pass data between layout and page components.

\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#what-are-layout-components)What are layout components
---------------------------------------------------------------------------------------------------------------------------

?

Layout components are for sections of your site that you want to share across multiple pages. For example, Gatsby sites will commonly have a layout component with a shared header and footer. Other common things to add to layouts are a sidebar and/or navigation menu. On this page for example, the header at the top is part of gatsbyjs.com's layout component.

\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#how-to-create-layout-components)How to create layout components
-------------------------------------------------------------------------------------------------------------------------------------

It is recommended to create your layout components alongside the rest of your components (e.g. into `src/components/`).

Here is an example of a very basic layout component at `src/components/layout.js`:

    import React from "react"export default function Layout({ children }) {  return (    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>      {children}    </div>  )}

\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#how-to-import-and-add-layout-components-to-pages)How to import and add layout components to pages
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

If you want to apply a layout to a page, you will need to include the `Layout` component and wrap your page in it. For example, here is how you would apply your layout to the front page:

    import React from "react"import Layout from "../components/layout"export default function Home() {  return (    <Layout>      <h1>I'm in a layout!</h1>    </Layout>  );}

Repeat for every page and template that needs this layout.

\[\](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/\#how-to-prevent-layout-components-from-unmounting)How to prevent layout components from unmounting
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

As mentioned earlier, Gatsby does not, by default, automatically wrap pages in a layout component. The "top level” component is the page itself. As a result, when the "top level” component changes between pages, React will re-render all children. This means that shared components like navigations will unmount and remount. This will break CSS transitions or React state within those shared components.

If you need to set a wrapper component around page components that won't get unmounted on page changes, use the **`wrapPageElement`** [browser API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement) and the [SSR equivalent](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement).

Alternatively, you can prevent your layout component from unmounting by using [gatsby-plugin-layout](https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/), which implements the `wrapPageElement` APIs for you.

Adding Markdown Pages | Gatsby
==============================

> Excerpt
> -------
>
> Gatsby can use Markdown files to create pages in your site. You add plugins to read and understand folders with Markdown files and from them…

------------------------------------------------------------------------

Gatsby can use Markdown files to create pages in your site. You add plugins to read and understand folders with Markdown files and from them create pages automatically.

Here are the steps Gatsby follows for making this happen.

1.  Read files into Gatsby from the filesystem
2.  Transform Markdown to HTML and [frontmatter](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) to data
3.  Add a Markdown file
4.  Create a Collection Route component for the Markdown files

\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#read-files-into-gatsby-from-the-filesystem)Read files into Gatsby from the filesystem
---------------------------------------------------------------------------------------------------------------------------------------------------------------

Use the plugin [`gatsby-source-filesystem`](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#gatsby-source-filesystem) to read files.

### [](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#install)Install

`npm install gatsby-source-filesystem`

### [](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#add-plugin)Add plugin

Open `gatsby-config.js` to add the `gatsby-source-filesystem` plugin. The `path` option is how you set the directory to search for files.

    module.exports = {  siteMetadata: {    title: "My Gatsby Site",  },  plugins: [    {      resolve: `gatsby-source-filesystem`,      options: {        name: `markdown-pages`,        path: `${__dirname}/src/markdown-pages`,      },    },  ],}

Completing the above step means that you've "sourced” the Markdown files from the filesystem. You can now "transform” the Markdown to HTML and the YAML frontmatter to JSON.

\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#transform-markdown-to-html-and-frontmatter-to-data-using-gatsby-transformer-remark)Transform Markdown to HTML and frontmatter to data using \`gatsby-transformer-remark
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

\`

You'll use the plugin [`gatsby-transformer-remark`](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) to recognize files which are Markdown and read their content. The plugin will convert the frontmatter metadata part of your Markdown files as `frontmatter` and the content part as HTML.

### [](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#install-transformer-plugin)Install transformer plugin

`npm install gatsby-transformer-remark`

### [](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#configure-plugin)Configure plugin

Add this to `gatsby-config.js` after the previously added `gatsby-source-filesystem`.

    module.exports = {  siteMetadata: {    title: "My Gatsby Site",  },  plugins: [    {      resolve: `gatsby-source-filesystem`,      options: {        name: `markdown-pages`,        path: `${__dirname}/src/markdown-pages`,      },    },    `gatsby-transformer-remark`,  ],}

\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#add-a-markdown-file)Add a Markdown file
-----------------------------------------------------------------------------------------------------------------

Create a folder in the `/src` directory of your Gatsby application called `markdown-pages`. Now create a Markdown file inside it with the name `post-1.md`.

### [](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files)Frontmatter for metadata in Markdown files

When you create a Markdown file, you can include a set of key/value pairs that can be used to provide additional data relevant to specific pages in the GraphQL data layer. This data is called "frontmatter” and is denoted by the triple dashes at the start and end of the block. This block will be parsed by `gatsby-transformer-remark` as YAML. You can then query the data through the GraphQL API from your React components.

src/markdown-pages/post-1.md

    ---slug: "/blog/my-first-post"date: "2019-05-04"title: "My first blog post"---

What is important in this step is the key pair `slug`. The value that is assigned to the key `slug` is used in order to navigate to your post.

\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#create-a-collection-route-for-the-markdown-files)Create a Collection Route for the Markdown files
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Create `src/pages/{MarkdownRemark.frontmatter__slug}.js` and add the following code:

src/pages/{MarkdownRemark.frontmatter\_\_slug}.js

    import React from "react"import { graphql } from "gatsby"export default function Template({  data, }) {  const { markdownRemark } = data   const { frontmatter, html } = markdownRemark  return (    <div className="blog-post-container">      <div className="blog-post">        <h1>{frontmatter.title}</h1>        <h2>{frontmatter.date}</h2>        <div          className="blog-post-content"          dangerouslySetInnerHTML={{ __html: html }}        />      </div>    </div>  )}export const pageQuery = graphql`  query($id: String!) {    markdownRemark(id: { eq: $id }) {      html      frontmatter {        date(formatString: "MMMM DD, YYYY")        slug        title      }    }  }`

Two things are important in the file above:

1.  A GraphQL query is made in the second half of the file to get the Markdown data. Gatsby has automagically given you all the Markdown metadata and HTML in this query's result.

    **Note: To learn more about GraphQL, consider this [excellent resource](https://www.howtographql.com/)**

2.  The result of the query is injected by Gatsby into the component as the `data` prop. `props.data.markdownRemark` is the property that has all the details of the Markdown file.

Next you could create a page component at `src/pages/blog/index.js` to serve as a listing page for all your blog posts.

This should get you started on some basic Markdown functionality in your Gatsby site. You can further customize the frontmatter and the component file to get desired effects!

For more information, have a look in the working example `using-markdown-pages`. You can find it in the [Gatsby examples section](https://github.com/gatsbyjs/gatsby/tree/master/examples).

\[\](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/\#other-tutorials)Other tutorials
---------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

SOURCECODE
==========

    bryan@LAPTOP-9LGJ3JGS:/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src$ tree -f
    .
    ├── ./components
    │   ├── ./components/ActionLink.js
    │   ├── ./components/CtaButtons.js
    │   ├── ./components/DocsMenu.js
    │   ├── ./components/DocsSubmenu.js
    │   ├── ./components/Footer.js
    │   ├── ./components/Header.js
    │   ├── ./components/Icon.js
    │   ├── ./components/Layout.js
    │   ├── ./components/SectionContent.js
    │   ├── ./components/SectionCta.js
    │   ├── ./components/SectionDocs.js
    │   ├── ./components/SectionGrid.js
    │   ├── ./components/SectionHero.js
    │   ├── ./components/Submenu.js
    │   ├── ./components/global.css
    │   └── ./components/index.js
    ├── ./data
    │   └── ./data/doc_sections.yml
    ├── ./hooks
    │   └── ./hooks/useScript.js
    ├── ./html.js
    ├── ./pages
    │   ├── ./pages/blog
    │   │   ├── ./pages/blog/blog-archive.md
    │   │   ├── ./pages/blog/blogwcomments.md
    │   │   ├── ./pages/blog/data-structures.md
    │   │   ├── ./pages/blog/index.md
    │   │   ├── ./pages/blog/my-medium.md
    │   │   ├── ./pages/blog/platform-docs.md
    │   │   ├── ./pages/blog/python-for-js-dev.md
    │   │   ├── ./pages/blog/python-resources.md
    │   │   └── ./pages/blog/web-scraping.md
    │   ├── ./pages/docs
    │   │   ├── ./pages/docs/about
    │   │   │   ├── ./pages/docs/about/index.md
    │   │   │   ├── ./pages/docs/about/me.md
    │   │   │   ├── ./pages/docs/about/node
    │   │   │   │   ├── ./pages/docs/about/node/install.md
    │   │   │   │   ├── ./pages/docs/about/node/intro.md
    │   │   │   │   ├── ./pages/docs/about/node/nodejs.md
    │   │   │   │   ├── ./pages/docs/about/node/nodevsbrowser.md
    │   │   │   │   ├── ./pages/docs/about/node/reading-files.md
    │   │   │   │   └── ./pages/docs/about/node/writing-files.md
    │   │   │   ├── ./pages/docs/about/npm.md
    │   │   │   └── ./pages/docs/about/resume.md
    │   │   ├── ./pages/docs/articles
    │   │   │   ├── ./pages/docs/articles/algo.md
    │   │   │   ├── ./pages/docs/articles/article-compilation.md
    │   │   │   ├── ./pages/docs/articles/basic-web-dev.md
    │   │   │   ├── ./pages/docs/articles/gists.md
    │   │   │   ├── ./pages/docs/articles/index.md
    │   │   │   ├── ./pages/docs/articles/install.md
    │   │   │   ├── ./pages/docs/articles/intro.md
    │   │   │   ├── ./pages/docs/articles/python.md
    │   │   │   ├── ./pages/docs/articles/reading-files.md
    │   │   │   ├── ./pages/docs/articles/resources.md
    │   │   │   ├── ./pages/docs/articles/ten-jamstack-apis-to-checkout.md
    │   │   │   └── ./pages/docs/articles/writing-files.md
    │   │   ├── ./pages/docs/docs
    │   │   │   └── ./pages/docs/docs/tools
    │   │   │       └── ./pages/docs/docs/tools/file-types.md
    │   │   ├── ./pages/docs/faq
    │   │   │   ├── ./pages/docs/faq/contact.md
    │   │   │   └── ./pages/docs/faq/index.md
    │   │   ├── ./pages/docs/gists.md
    │   │   ├── ./pages/docs/index.md
    │   │   ├── ./pages/docs/interact
    │   │   │   ├── ./pages/docs/interact/clock.md
    │   │   │   ├── ./pages/docs/interact/index.md
    │   │   │   └── ./pages/docs/interact/jupyter-notebooks.md
    │   │   ├── ./pages/docs/links
    │   │   │   ├── ./pages/docs/links/index.md
    │   │   │   ├── ./pages/docs/links/medium-links.md
    │   │   │   ├── ./pages/docs/links/my-websites.md
    │   │   │   └── ./pages/docs/links/social.md
    │   │   ├── ./pages/docs/quick-reference
    │   │   │   ├── ./pages/docs/quick-reference/Emmet.md
    │   │   │   ├── ./pages/docs/quick-reference/docs.md
    │   │   │   ├── ./pages/docs/quick-reference/index.md
    │   │   │   ├── ./pages/docs/quick-reference/installation.md
    │   │   │   └── ./pages/docs/quick-reference/new-repo-instructions.md
    │   │   ├── ./pages/docs/react
    │   │   │   ├── ./pages/docs/react/createReactApp.md
    │   │   │   ├── ./pages/docs/react/index.md
    │   │   │   └── ./pages/docs/react/react2.md
    │   │   ├── ./pages/docs/react-in-depth.md
    │   │   ├── ./pages/docs/sitemap.md
    │   │   └── ./pages/docs/tools
    │   │       ├── ./pages/docs/tools/index.md
    │   │       ├── ./pages/docs/tools/notes-template.md
    │   │       ├── ./pages/docs/tools/plug-ins.md
    │   │       └── ./pages/docs/tools/vscode.md
    │   ├── ./pages/index.md
    │   ├── ./pages/notes-template.md
    │   ├── ./pages/review.md
    │   └── ./pages/showcase.md
    ├── ./sass
    │   ├── ./sass/imports
    │   │   ├── ./sass/imports/_animations.scss
    │   │   ├── ./sass/imports/_buttons.scss
    │   │   ├── ./sass/imports/_docs.scss
    │   │   ├── ./sass/imports/_footer.scss
    │   │   ├── ./sass/imports/_forms.scss
    │   │   ├── ./sass/imports/_functions.scss
    │   │   ├── ./sass/imports/_general.scss
    │   │   ├── ./sass/imports/_header.scss
    │   │   ├── ./sass/imports/_helpers.scss
    │   │   ├── ./sass/imports/_icons.scss
    │   │   ├── ./sass/imports/_palettes.scss
    │   │   ├── ./sass/imports/_posts.scss
    │   │   ├── ./sass/imports/_prism.scss
    │   │   ├── ./sass/imports/_reset.scss
    │   │   ├── ./sass/imports/_sections.scss
    │   │   ├── ./sass/imports/_structure.scss
    │   │   ├── ./sass/imports/_tables.scss
    │   │   └── ./sass/imports/_variables.scss
    │   └── ./sass/main.scss
    ├── ./templates
    │   ├── ./templates/advanced.js
    │   ├── ./templates/blog.js
    │   ├── ./templates/docs.js
    │   ├── ./templates/page.js
    │   └── ./templates/post.js
    └── ./utils
        ├── ./utils/attribute.js
        ├── ./utils/classNames.js
        ├── ./utils/cycler.js
        ├── ./utils/getData.js
        ├── ./utils/getPage.js
        ├── ./utils/getPageByFilePath.js
        ├── ./utils/getPages.js
        ├── ./utils/htmlToReact.js
        ├── ./utils/index.js
        ├── ./utils/link.js
        ├── ./utils/markdownify.js
        ├── ./utils/pathJoin.js
        ├── ./utils/toStyleObj.js
        ├── ./utils/toUrl.js
        └── ./utils/withPrefix.js

    21 directories, 119 files
    bryan@LAPTOP-9LGJ3JGS:/c/MY-WEB-DEV/BLOG____2.0/BLOG_2.0/src$

------------------------------------------------------------------------

Source Code
===========

Folder Structure (src) `.             ├── Combined_____-_____Doc.md             ├── components             │ ├── ActionLink.js             │ ├── CtaButtons.js             │ ├── DarkToggle             │ │ ├── index.js             │ │ └── styles.js             │ ├── DocsMenu.js             │ ├── DocsSubmenu.js             │ ├── Footer.js             │ ├── Header.js             │ ├── Icon.js             │ ├── Layout.js             │ ├── SectionContent.js             │ ├── SectionCta.js             │ ├── SectionDocs.js             │ ├── SectionGrid.js             │ ├── SectionHero.js             │ ├── Submenu.js             │ ├── global.css             │ └── index.js             ├── data             │ └── doc_sections.yml             ├── hooks             │ ├── addScript.js             │ ├── index.js             │ ├── useDarkMode.js             │ ├── useEventListener.js             │ ├── useMediaQuery.js             │ ├── useOnClickOutside.js             │ ├── useQueryParam.js             │ ├── useSize.js             │ └── useStorage.js             ├── html.js             ├── pages             │ ├── blog             │ │ ├── 300-react-questions.md             │ │ ├── awesome-graphql.md             │ │ ├── big-o-complexity.md             │ │ ├── blog-archive.md             │ │ ├── blogwcomments.md             │ │ ├── data-structures.md             │ │ ├── flow-control-in-python.md             │ │ ├── functions-in-python.md             │ │ ├── git-gateway.md             │ │ ├── index.md             │ │ ├── interview-questions-js.md             │ │ ├── netlify-cms.md             │ │ ├── platform-docs.md             │ │ ├── python-for-js-dev.md             │ │ ├── python-resources.md             │ │ ├── web-dev-trends.md             │ │ └── web-scraping.md             │ ├── docs             │ │ ├── about             │ │ │ ├── eng-portfolio.md             │ │ │ ├── ideas-for-this-website.md             │ │ │ ├── index.md             │ │ │ ├── intrests.md             │ │ │ ├── job-search.md             │ │ │ └── resume.md             │ │ ├── articles             │ │ │ ├── basic-web-dev.md             │ │ │ ├── buffers.md             │ │ │ ├── dev-dep.md             │ │ │ ├── event-loop.md             │ │ │ ├── fs-module.md             │ │ │ ├── how-the-web-works.md             │ │ │ ├── http.md             │ │ │ ├── index.md             │ │ │ ├── install.md             │ │ │ ├── intro.md             │ │ │ ├── modules.md             │ │ │ ├── nextjs.md             │ │ │ ├── node-api-express.md             │ │ │ ├── node-cli-args.md             │ │ │ ├── node-common-modules.md             │ │ │ ├── node-env-variables.md             │ │ │ ├── node-js-language.md             │ │ │ ├── node-package-manager.md             │ │ │ ├── node-repl.md             │ │ │ ├── node-run-cli.md             │ │ │ ├── nodejs.md             │ │ │ ├── nodevsbrowser.md             │ │ │ ├── npm.md             │ │ │ ├── npx.md             │ │ │ ├── os-module.md             │ │ │ ├── reading-files.md             │ │ │ ├── semantic-html.md             │ │ │ ├── semantic.md             │ │ │ ├── the-uniform-resource-locator-(url).md             │ │ │ ├── understanding-firebase.md             │ │ │ ├── v8.md             │ │ │ ├── web-standards-checklist.md             │ │ │ ├── webdev-tools.md             │ │ │ └── writing-files.md             │ │ ├── audio             │ │ │ ├── audio-feature-extraction.md             │ │ │ ├── audio.md             │ │ │ ├── dfft.md             │ │ │ ├── discrete-fft.md             │ │ │ ├── dtw-python-explained.md             │ │ │ ├── dynamic-time-warping.md             │ │ │ ├── index.md             │ │ │ └── web-audio-api.md             │ │ ├── career             │ │ │ ├── dev-interview.md             │ │ │ ├── index.md             │ │ │ ├── interview-dos-n-donts.md             │ │ │ └── job-boards.md             │ │ ├── community             │ │ │ ├── an-open-letter-2-future-developers.md             │ │ │ ├── index.md             │ │ │ └── video-chat.md             │ │ ├── content             │ │ │ ├── algo.md             │ │ │ ├── archive.md             │ │ │ ├── gatsby-Queries-Mutations.md             │ │ │ ├── history-api.md             │ │ │ ├── index.md             │ │ │ ├── main-projects.md             │ │ │ └── trouble-shooting.md             │ │ ├── data-structures             │ │ │ └── index.md             │ │ ├── docs             │ │ │ ├── appendix.md             │ │ │ ├── art-of-command-line.md             │ │ │ ├── bash.md             │ │ │ ├── content.md             │ │ │ ├── css.md             │ │ │ ├── data-structures-docs.md             │ │ │ ├── es-6-features.md             │ │ │ ├── git-reference.md             │ │ │ ├── git-repos.md             │ │ │ ├── html-spec.md             │ │ │ ├── index.md             │ │ │ ├── markdown.md             │ │ │ ├── no-whiteboarding.md             │ │ │ ├── node-docs-complete.md             │ │ │ ├── node-docs-full.md             │ │ │ ├── regex-in-js.md             │ │ │ └── sitemap.md             │ │ ├── faq             │ │ │ ├── contact.md             │ │ │ ├── index.md             │ │ │ └── plug-ins.md             │ │ ├── gists.md             │ │ ├── index.md             │ │ ├── interact             │ │ │ ├── callstack-visual.md             │ │ │ ├── clock.md             │ │ │ ├── index.md             │ │ │ ├── jupyter-notebooks.md             │ │ │ ├── other-sites.md             │ │ │ └── video-chat.md             │ │ ├── interview             │ │ │ ├── index.md             │ │ │ ├── job-search-nav.md             │ │ │ └── review-concepts.md             │ │ ├── javascript             │ │ │ ├── arrow-functions.md             │ │ │ ├── asyncjs.md             │ │ │ ├── await-keyword.md             │ │ │ ├── bigo.md             │ │ │ ├── clean-code.md             │ │ │ ├── constructor-functions.md             │ │ │ ├── index.md             │ │ │ ├── promises.md             │ │ │ ├── review.md             │ │ │ └── this-is-about-this.md             │ │ ├── leetcode             │ │ │ └── index.md             │ │ ├── privacy-policy.md             │ │ ├── projects             │ │ │ ├── embeded-websites.md             │ │ │ ├── index.md             │ │ │ ├── list-of-projects.md             │ │ │ ├── mini-projects.md             │ │ │ └── my-websites.md             │ │ ├── python             │ │ │ ├── at-length.md             │ │ │ ├── cheat-sheet.md             │ │ │ ├── comprehensive-guide.md             │ │ │ ├── examples.md             │ │ │ ├── flow-control.md             │ │ │ ├── functions.md             │ │ │ ├── google-sheets-api.md             │ │ │ ├── index.md             │ │ │ ├── intro-for-js-devs.md             │ │ │ ├── python-ds.md             │ │ │ └── snippets.md             │ │ ├── quick-reference             │ │ │ ├── Emmet.md             │ │ │ ├── all-emojis.md             │ │ │ ├── create-react-app.md             │ │ │ ├── git-bash.md             │ │ │ ├── git-tricks.md             │ │ │ ├── google-firebase.md             │ │ │ ├── heroku-error-codes.md             │ │ │ ├── index.md             │ │ │ ├── installation.md             │ │ │ ├── markdown-dropdowns.md             │ │ │ ├── minifiction.md             │ │ │ ├── new-repo-instructions.md             │ │ │ ├── psql-setup.md             │ │ │ ├── pull-request-rubric.md             │ │ │ ├── quick-links.md             │ │ │ ├── topRepos.md             │ │ │ ├── understanding-path.md             │ │ │ └── vscode-themes.md             │ │ ├── react             │ │ │ ├── ajax-n-apis.md             │ │ │ ├── cheatsheet.md             │ │ │ ├── createReactApp.md             │ │ │ ├── demo.md             │ │ │ ├── dont-use-index-as-keys.md             │ │ │ ├── index.md             │ │ │ ├── jsx.md             │ │ │ ├── react-docs.md             │ │ │ ├── react-in-depth.md             │ │ │ ├── react2.md             │ │ │ └── render-elements.md             │ │ ├── reference             │ │ │ ├── awesome-lists.md             │ │ │ ├── awesome-static.md             │ │ │ ├── bash-commands.md             │ │ │ ├── bookmarks.md             │ │ │ ├── embed-the-web.md             │ │ │ ├── github-search.md             │ │ │ ├── google-cloud.md             │ │ │ ├── how-2-reinstall-npm.md             │ │ │ ├── how-to-kill-a-process.md             │ │ │ ├── index.md             │ │ │ ├── installing-node.md             │ │ │ ├── intro-to-nodejs.md             │ │ │ ├── notes-template.md             │ │ │ ├── psql.md             │ │ │ ├── resources.md             │ │ │ ├── vscode.md             │ │ │ └── web-api's.md             │ │ ├── search.md             │ │ ├── sitemap.md             │ │ ├── tips             │ │ │ ├── array-methods.md             │ │ │ ├── index.md             │ │ │ └── insert-into-array.md             │ │ ├── tools             │ │ │ ├── Archive.md             │ │ │ ├── data-structures.md             │ │ │ ├── dev-utilities.md             │ │ │ ├── index.md             │ │ │ └── markdown-html.md             │ │ └── tutorials             │ │ ├── enviorment-setup.md             │ │ └── index.md             │ ├── index.md             │ ├── privacy-policy.md             │ ├── readme.md             │ └── showcase.md             ├── sass             │ ├── imports             │ │ ├── _animations.scss             │ │ ├── _buttons.scss             │ │ ├── _docs.scss             │ │ ├── _footer.scss             │ │ ├── _forms.scss             │ │ ├── _functions.scss             │ │ ├── _general.scss             │ │ ├── _header.scss             │ │ ├── _helpers.scss             │ │ ├── _icons.scss             │ │ ├── _palettes.scss             │ │ ├── _posts.scss             │ │ ├── _prism.scss             │ │ ├── _reset.scss             │ │ ├── _sections.scss             │ │ ├── _structure.scss             │ │ ├── _tables.scss             │ │ └── _variables.scss             │ └── main.scss             ├── templates             │ ├── advanced.js             │ ├── blog.js             │ ├── docs.js             │ ├── page.js             │ ├── post.js             │ └── templates.md             └── utils             ├── attribute.js             ├── blm-badge.js             ├── classNames.js             ├── cycler.js             ├── getData.js             ├── getPage.js             ├── getPageByFilePath.js             ├── getPages.js             ├── htmlToReact.js             ├── index.js             ├── link.js             ├── markdownify.js             ├── pathJoin.js             ├── toStyleObj.js             ├── toUrl.js             └── withPrefix.js              32 directories, 272 files`

Click To See Component Sourcecode \# Component Structure `.             ├── ActionLink.js             ├── CtaButtons.js             ├── DarkToggle             │ ├── index.js             │ └── styles.js             ├── DocsMenu.js             ├── DocsSubmenu.js             ├── Footer.js             ├── Header.js             ├── Icon.js             ├── Layout.js             ├── SectionContent.js             ├── SectionCta.js             ├── SectionDocs.js             ├── SectionGrid.js             ├── SectionHero.js             ├── Submenu.js             ├── global.css             └── index.js` --- `js             import React from 'react';             import _ from 'lodash';              import { Link, withPrefix, classNames } from '../utils';             import Icon from './Icon';              export default class ActionLink extends React.Component {             render() {             let action = _.get(this.props, 'action', null);             return (             <Link             to={withPrefix(_.get(action, 'url', null))}             {...(_.get(action, 'new_window', null) ? { target: '_blank' } : null)}             {...(_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)             ? {             rel: (_.get(action, 'new_window', null) ? 'noopener ' : '') + (_.get(action,             'no_follow', null) ? 'nofollow' : '')             }             : null)}             className={classNames({             button: _.get(action, 'style', null) !== 'link',             'button-secondary': _.get(action, 'style', null) === 'secondary',             'button-icon': _.get(action, 'style', null) === 'icon'             })}             >             {_.get(action, 'style', null) === 'icon' && _.get(action, 'icon_class',             null) ? (             <React.Fragment>             <Icon {...this.props} icon={_.get(action, 'icon_class', null)} />             <span className="screen-reader-text">{_.get(action, 'label', null)}</span>             </React.Fragment>             ) : (             _.get(action, 'label', null)             )}             </Link>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { Link, withPrefix, classNames } from '../utils';              export default class CtaButtons extends React.Component {             render() {             let actions = _.get(this.props, 'actions', null);             return _.map(actions, (action, action_idx) => (             <Link             key={action_idx}             to={withPrefix(_.get(action, 'url', null))}             {...(_.get(action, 'new_window', null) ? { target: '_blank' } : null)}             {...(_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)             ? {             rel: (_.get(action, 'new_window', null) ? 'noopener ' : '') + (_.get(action,             'no_follow', null) ? 'nofollow' : '')             }             : null)}             className={classNames({             button: _.get(action, 'style', null) === 'primary' || _.get(action, 'style', null)             === 'secondary',             'button-secondary': _.get(action, 'style', null) === 'secondary'             })}             >             {_.get(action, 'label', null)}             </Link>             ));             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { getPage, classNames, Link, withPrefix, pathJoin, getPages } from '../utils';             import DocsSubmenu from './DocsSubmenu';              export default class DocsMenu extends React.Component {             render() {             let site = _.get(this.props, 'site', null);             let page = _.get(this.props, 'page', null);             let root_docs_path = _.get(site, 'data.doc_sections.root_docs_path', null);             let root_page = getPage(this.props.pageContext.pages, root_docs_path);             return (             <nav id="docs-nav" className="docs-nav">             <div id="docs-nav-inside" className="docs-nav-inside sticky">             <button id="docs-nav-toggle" className="docs-nav-toggle">             Navigate Docs             <span className="icon-angle-right" aria-hidden="true" />             </button>             <div className="docs-nav-menu">             <ul id="docs-menu" className="docs-menu">             <li             className={classNames('docs-menu-item', {             current: _.get(page, 'url', null) === _.get(root_page, 'url', null)             })}             >             <Link to={withPrefix(_.get(root_page, 'url', null))}>{_.get(root_page,             'frontmatter.title', null)}</Link>             </li>             {_.map(_.get(site, 'data.doc_sections.sections', null), (section, section_idx) => {             let section_path = pathJoin(root_docs_path, section);             let section_page = getPage(this.props.pageContext.pages, section_path);             let child_pages = _.orderBy(getPages(this.props.pageContext.pages, section_path),             'frontmatter.weight');             let child_count = _.size(child_pages);             let has_children = child_count > 0 ? true : false;             let is_current_page = _.get(page, 'url', null) === _.get(section_page, 'url', null) ? true :             false;             let is_active = _.get(page, 'url', null).startsWith(_.get(section_page, 'url', null));             return (             <React.Fragment key={section_idx + '.1'}>             <li             key={section_idx}             className={classNames('docs-menu-item', {             'has-children': has_children,             current: is_current_page,             active: is_active             })}             >             <Link to={withPrefix(_.get(section_page, 'url', null))}>{_.get(section_page,             'frontmatter.title', null)}</Link>             {has_children && (             <React.Fragment>             <button className="docs-submenu-toggle">             <span className="screen-reader-text">Submenu</span>             <span className="icon-angle-right" aria-hidden="true" />             </button>             <DocsSubmenu {...this.props} child_pages={child_pages} page={page} site={site} />             </React.Fragment>             )}             </li>             </React.Fragment>             );             })}             </ul>             </div>             </div>             </nav>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { classNames, Link, withPrefix } from '../utils';              export default class DocsSubmenu extends React.Component {             render() {             let child_pages = _.get(this.props, 'child_pages', null);             let page = _.get(this.props, 'page', null);             return (             <ul className="docs-submenu">             {_.map(child_pages, (child_page, child_page_idx) => (             <li             key={child_page_idx}             className={classNames('docs-menu-item', {             current: _.get(page, 'url', null) === _.get(child_page, 'url', null)             })}             >             <Link to={withPrefix(_.get(child_page, 'url', null))}>{_.get(child_page,             'frontmatter.title', null)}</Link>             </li>             ))}             </ul>             );             }             }` --- `js             import _ from 'lodash';             import React from 'react';             import { htmlToReact } from '../utils';             import ActionLink from './ActionLink';             import addScript from './../hooks/addScript';             const Script = (props) => {             importScript('./../hooks/addScript.js');             };             export default class Footer extends React.Component {             render() {             return (             <footer id="colophon" className="site-footer outer">             <div id="search"></div>             <div>             <center>             <br />              <link rel="stylesheet"             href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"             />             <div id="search"> {Script} </div>              <br />              <table cellPadding={0} cellSpacing={0} border={0}>             <tbody>             <tr>             <td             style={{                                             fontFamily: 'Arial, Helvetica, sans-serif',                                             fontSize: '7.5pt'                                         }}             >             <center>             <table             width="95%"             cellPadding={0}             cellSpacing={0}             border={0}             style={{                                                     fontFamily: 'Arial, Helvetica, sans-serif',                                                     fontSize: '7.5pt'                                                 }}             >             <tbody>             <tr>             <td             style={{                                                                 fontFamily: 'Arial, Helvetica, sans-serif',                                                                 fontSize: '7.5pt'                                                             }}             align="left"             >             <a target="_blank" href="https://search.freefind.com/siteindex.html?si=14588965">             index             </a>             </td>             <td             style={{                                                                 fontFamily: 'Arial, Helvetica, sans-serif',                                                                 fontSize: '7.5pt'                                                             }}             align="center"             >             <a target="_blank"             href="https://search.freefind.com/find.html?si=14588965&m=0&p=0">             sitemap             </a>             </td>             <td             style={{                                                                 fontFamily: 'Arial, Helvetica, sans-serif',                                                                 fontSize: '7.5pt'                                                             }}             align="right"             >             <a target="_blank"             href="https://search.freefind.com/find.html?si=14588965&pid=a">             advanced             </a>             </td>             </tr>             </tbody>             </table>             </center>              <form             style={{                                                 margin: '0px',                                                 marginTop: '2px'                                             }}             action="https://search.freefind.com/find.html"             method="get"             acceptCharset="utf-8"             target="_self"             >             <input type="hidden" name="si" defaultValue={14588965} />             <input type="hidden" name="pid" defaultValue="r" />             <input type="hidden" name="n" defaultValue={0} />             <input type="hidden" name="_charset_" defaultValue />             <input type="hidden" name="bcd" defaultValue="÷" />             <input type="text" name="query" size={15} />             <input type="submit" defaultValue="search" />             </form>             </td>             </tr>             <tr>             <td             style={{                                             textAlign: 'center',                                             fontFamily: 'Arial, Helvetica, sans-serif',                                             fontSize: '7.5pt',                                             paddingTop: '4px'                                         }}             >             <a             style={{                                                 textDecoration: 'none',                                                 color: 'transparent'                                             }}             href="https://www.freefind.com"             rel="nofollow"             >             search engine             </a>             <a             style={{                                                 textDecoration: 'none',                                                 color: 'transparent'                                             }}             href="https://www.freefind.com"             rel="nofollow"             >             by             <span style={{ color: 'transparent' }}>freefind</span>             </a>             {             <iframe             src="https://bgoonz.github.io/fb-and-twitter-api-embeds/"             frameborder="0"             id="social-embed"             width="100%!important"             ></iframe>             }             </td>             </tr>             </tbody>             </table>             <a href="//pdfcrowd.com/url_to_pdf/?"             onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">             Save to PDF             </a>             </center>             </div>              <div className="inner">             <div id="search" className="inner"></div>             <div className="site-footer-inside">             <p className="site-info">             {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (             <span className="copyright">{htmlToReact(_.get(this.props,             'pageContext.site.siteMetadata.footer.content', null))}</span>             )}             {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx)             => (             <ActionLink key={action_idx} {...this.props} action={action} />             ))}{' '}             </p>             {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (             <div className="social-links">             {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action,             action_idx) => (             <ActionLink key={action_idx} {...this.props} action={action} />             ))}{' '}             </div>             )}{' '}             </div>             </div>             <div id="search"></div>             </footer>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { Link, withPrefix, classNames } from '../utils';             import ActionLink from './ActionLink';             import Submenu from './Submenu';              export default class Header extends React.Component {             render() {             return (             <header id="masthead" className="site-header outer">             {/* <link rel="stylesheet"             href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"             /> */}              <br />              <div className="inner">             <div className="site-header-inside">             <div className="site-branding">             {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null) ? (             <p className="site-logo">             <Link to={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.url', null) ||             '/')}>             <img             src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null))}             alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null)}             />             </Link>             </p>             ) : (             <p className="site-title">             {' '}             WebDevHub             <Link to={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.url', null) ||             '/')}>             {_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}             </Link>             </p>             )}             </div>             <div id="search" className="inner"></div>             {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (             <React.Fragment>             <nav id="main-navigation" className="site-navigation" aria-label="Main             Navigation">             <div className="site-nav-inside">             <button id="menu-close" className="menu-toggle">             <span className="screen-reader-text">Open Menu</span>             <span className="icon-close" aria-hidden="true" />             </button>             <ul className="menu">             {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action,             action_idx) => {             let page_url = _.trim(_.get(this.props, 'pageContext.url', null), '/');             let action_url = _.trim(_.get(action, 'url', null), '/');             return (             <li             key={action_idx}             className={classNames('menu-item', {             'has-children': _.get(action, 'has_subnav', null) && _.get(action,             'subnav_links', null),             current: page_url === action_url,             'menu-button': _.get(action, 'style', null) !== 'link'             })}             >             <ActionLink {...this.props} action={action} />             {_.get(action, 'has_subnav', null) && _.get(action, 'subnav_links', null) &&             (             <React.Fragment>             <button className="submenu-toggle">             <span className="icon-angle-right" aria-hidden="true" />             <span className="screen-reader-text">Sub-menu</span>             </button>             <Submenu             {...this.props}             submenu={_.get(action, 'subnav_links', null)}             menu_class={'submenu'}             page={this.props.pageContext}             />             </React.Fragment>             )}             </li>             );             })}             </ul>             </div>             </nav>             <button id="menu-open" className="menu-toggle">             <span className="screen-reader-text">Close Menu</span>             <span className="icon-menu" aria-hidden="true" />             </button>             </React.Fragment>             )}             </div>             </div>              <div>             <a className="github-corner" href="https://github.com/bgoonz/BGOONZ_BLOG_2.0"             aria-label="View source on Github">             <svg             aria-hidden="true"             width={40}             height={40}             viewBox="0 0 250 250"             style={{                                 zIndex: 100000,                                 fill: 'black',                                 color: '#fff',                                 position: 'fixed',                                 top: '0px',                                 border: 0,                                 left: '0px',                                 transform: 'scale(-1.5, 1.5)'                             }}             >             <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>             <path             className="octo-arm"             d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0             123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"             fill="currentColor"             style={{ transformOrigin: '130px 106px' }}             ></path>             <path             className="octo-body"             d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6             C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1             C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6             C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5             C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7             141.6,141.9 141.8,141.8 Z"             fill="currentColor"             ></path>             </svg>             </a>             </div>             </header>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              export default class Icon extends React.Component {             render() {             let icon = _.get(this.props, 'icon', null);             return (             <svg className="icon" viewBox="0 0 24 24"             xmlns="http://www.w3.org/2000/svg">             {icon === 'dev' ? (             <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0             .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56             15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47             3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53             0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68             5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0             .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67             6.38-1.8 6.68z" />             ) : icon === 'facebook' ? (             <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124             11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234             2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864             10.124-11.853z" />             ) : icon === 'github' ? (             <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577             0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633             17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305             3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38             1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138             3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805             5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24             17.592 24 12.297c0-6.627-5.373-12-12-12" />             ) : icon === 'instagram' ? (             <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126             1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06             1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499             2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0             002.126-1.384 5.86 5.86 0             001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89             5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0             2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896             1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421             2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0             01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211             0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0             01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844             0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689             1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100             12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4             4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />             ) : icon === 'linkedin' ? (             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136             2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267             5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782             13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771             24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />             ) : icon === 'pinterest' ? (             <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618             11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957             1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653             2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487             0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889             2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334             1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0             7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269             1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39             18.592.026 11.985.026L12.017 0z" />             ) : icon === 'reddit' ? (             <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01             4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674             1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1             .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0             1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43             4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1             1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249             0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0             1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0             .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464             0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />             ) : icon === 'twitter' ? (             <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127             1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87             3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085             4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557             2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"             />             ) : icon === 'youtube' ? (             <path d="M23.495 6.205a3.007 3.007 0             00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247             31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502             9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0             00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />             ) : (             icon === 'vimeo' && (             <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409             0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0             7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465             2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589             1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757             6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />             )             )}             </svg>             );             }             }` --- `js             import React from 'react';              import { Helmet } from 'react-helmet';             import _ from 'lodash';              import { withPrefix, attribute } from '../utils';             import '../sass/main.scss';             import Header from './Header';             import Footer from './Footer';             import addScript from './../hooks/addScript';             const Script = (props) => {             importScript('./../hooks/addScript.js');             };             export default class Body extends React.Component {             render() {             return (             <React.Fragment>             <Helmet>             <title>             {_.get(this.props, 'pageContext.frontmatter.seo.title', null)             ? _.get(this.props, 'pageContext.frontmatter.seo.title', null)             : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props,             'pageContext.site.siteMetadata.title', null)}             </title>             <meta charSet="utf-8" />             <meta name="viewport" content="width=device-width, initialScale=1.0" />             <meta name="description" content={_.get(this.props,             'pageContext.frontmatter.seo.description', null) || ''} />             {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (             <meta name="robots" content={_.join(_.get(this.props,             'pageContext.frontmatter.seo.robots', null), ',')} />             )}             {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {             let key_name = _.get(meta, 'keyName', null) || 'name';             return _.get(meta, 'relativeUrl', null) ? (             _.get(this.props, 'pageContext.site.siteMetadata.domain', null) &&             (() => {             let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');             let rel_url = withPrefix(_.get(meta, 'value', null));             let full_url = domain + rel_url;             return <meta key={meta_idx} {...attribute(key_name, _.get(meta, 'name', null))}             content={full_url} />;             })()             ) : (             <meta key={meta_idx + '.1'} {...attribute(key_name, _.get(meta, 'name', null))}             content={_.get(meta, 'value', null)} />             );             })}             <link rel="preconnect" href="https://fonts.gstatic.com" />             <link             href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"             rel="stylesheet" />             {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (             <link rel="icon" href={withPrefix(_.get(this.props,             'pageContext.site.siteMetadata.favicon', null))} />             )}             <body className={'palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette',             null)} />             </Helmet>             <div id="page" className="site">             <Header {...this.props} />             {/* INSERT SEARCH BAR HERE */}             {/* <div className="fb-like"             data-href="https://developers.facebook.com/docs/plugins/" data-width={100}             data-layout="standard" data-action="like" data-size="small"             data-share="true" /> */}             <main id="content" className="site-content">             {this.props.children}             </main>             <Footer {...this.props} />             </div>             </React.Fragment>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { classNames, withPrefix, markdownify } from '../utils';             import CtaButtons from './CtaButtons';              export default class SectionContent extends React.Component {             render() {             let section = _.get(this.props, 'section', null);             return (             <section id={_.get(section, 'section_id', null)} className="block block-text outer">             <div className="outter">             <div             className={classNames('inner', {             'grid-swap': _.get(section, 'image', null) && _.get(section,             'image_position', null) === 'right'             })}             >             {_.get(section, 'image', null) && (             <div className="grid-item block-image">             <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt',             null)} />             </div>             )}             <div>             {_.get(section, 'title', null) && (             <div className="block-header">             <h2 className="block-title">{_.get(section, 'title', null)}</h2>             </div>             )}             {_.get(section, 'content', null) && <div             className="outer">{markdownify(_.get(section, 'content', null))}</div>}             {_.get(section, 'actions', null) && (             <div className="block-buttons">             <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />             </div>             )}             </div>             </div>             </div>             </section>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { htmlToReact } from '../utils';             import CtaButtons from './CtaButtons';              export default class SectionCta extends React.Component {             render() {             let section = _.get(this.props, 'section', null);             return (             <section id={_.get(section, 'section_id', null)} className="block block-cta outer">             <div className="inner">             <div className="has-gradient">             <div className="grid grid-middle grid-center">             {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (             <div className="grid-item block-header">             {_.get(section, 'title', null) && <h2             className="block-title">{_.get(section, 'title', null)}</h2>}             {_.get(section, 'subtitle', null) && <p             className="block-subtitle">{htmlToReact(_.get(section, 'subtitle', null))}</p>}             </div>             )}             {_.get(section, 'actions', null) && (             <div className="grid-item block-buttons">             <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />             </div>             )}             </div>             </div>             </div>             </section>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { classNames, htmlToReact, pathJoin, getPage, Link, withPrefix } from '../utils';              export default class SectionDocs extends React.Component {             render() {             let section = _.get(this.props, 'section', null);             return (             <section             id={_.get(section, 'section_id', null)}             className={classNames('block', 'block-grid', 'outer', {             'has-header': _.get(section, 'title', null) || _.get(section, 'subtitle', null)             })}             >             <div className="inner">             {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (             <div className="block-header inner-sm">             {_.get(section, 'title', null) && <h2             className="block-title">{_.get(section, 'title', null)}</h2>}             {_.get(section, 'subtitle', null) && <p             className="block-subtitle">{htmlToReact(_.get(section, 'subtitle', null))}</p>}             </div>             )}             <div className="block-content">             <div             className={classNames('grid', {             'grid-col-2': _.get(section, 'col_number', null) === 'two',             'grid-col-3': _.get(section, 'col_number', null) === 'three'             })}             >             {_.map(_.get(this.props, 'pageContext.site.data.doc_sections.sections', null), (doc_section,             doc_section_idx) => {             let doc_section_path = pathJoin(_.get(this.props,             'pageContext.site.data.doc_sections.root_docs_path', null), doc_section);             let doc_section_page = getPage(this.props.pageContext.pages, doc_section_path);             return (             <div key={doc_section_idx} className="grid-item">             <div className="grid-item-inside">             <h3 className="grid-item-title line-left">             <Link to={withPrefix(_.get(doc_section_page, 'url', null))}>             {_.get(doc_section_page, 'frontmatter.title', null)}             </Link>             </h3>             {_.get(doc_section_page, 'frontmatter.excerpt', null) && (             <div className="grid-item-content">             <p>{htmlToReact(_.get(doc_section_page, 'frontmatter.excerpt', null))}</p>             </div>             )}             <div className="grid-item-buttons">             <Link to={withPrefix(_.get(doc_section_page, 'url', null))}>Learn More</Link>             </div>             </div>             </div>             );             })}             </div>             </div>             </div>             </section>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { classNames, htmlToReact, withPrefix, Link, markdownify } from '../utils';             import CtaButtons from './CtaButtons';              export default class SectionGrid extends React.Component {             render() {             let section = _.get(this.props, 'section', null);             return (             <section             id={_.get(section, 'section_id', null)}             className={classNames('block', 'block-grid', 'outer', {             'has-header': _.get(section, 'title', null) || _.get(section, 'subtitle', null)             })}             >             <div className="inner">             {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (             <div className="block-header inner-sm">             {_.get(section, 'title', null) && <h2             className="block-title">{_.get(section, 'title', null)}</h2>}             {_.get(section, 'subtitle', null) && <p             className="block-subtitle">{htmlToReact(_.get(section, 'subtitle', null))}</p>}             </div>             )}             {_.get(section, 'grid_items', null) && (             <div className="block-content">             <div             className={classNames('grid', {             'grid-col-2': _.get(section, 'col_number', null) === 'two',             'grid-col-3': _.get(section, 'col_number', null) === 'three'             })}             >             {_.map(_.get(section, 'grid_items', null), (item, item_idx) => (             <div key={item_idx} className="grid-item">             <div className="grid-item-inside">             {_.get(item, 'image', null) && (             <div className="grid-item-image">             <img src={withPrefix(_.get(item, 'image', null))} alt={_.get(item, 'image_alt', null)}             />             </div>             )}             {_.get(item, 'title', null) && (             <h3 className="grid-item-title line-left">             {_.get(item, 'title_url', null) ? (             <Link to={withPrefix(_.get(item, 'title_url', null))}>{_.get(item, 'title',             null)}</Link>             ) : (             _.get(item, 'title', null)             )}             </h3>             )}             {_.get(item, 'content', null) && (             <div className="grid-item-content">{markdownify(_.get(item, 'content',             null))}</div>             )}             {_.get(item, 'actions', null) && (             <div className="grid-item-buttons">             <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />             </div>             )}             </div>             </div>             ))}             </div>             </div>             )}             </div>             </section>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { toStyleObj, withPrefix, markdownify } from '../utils';             import CtaButtons from './CtaButtons';              export default class SectionHero extends React.Component {             render() {             let section = _.get(this.props, 'section', null);             return (             <section id={_.get(section, 'section_id', null)} className="block block-hero has-gradient             outer">             {_.get(section, 'image', null) && (             <div className="bg-img" style={toStyleObj("background-image: url('" +             withPrefix(_.get(section, 'image', null)) + "')")} />             )}             <div className="inner-sm">             {_.get(section, 'title', null) && (             <div className="block-header">             <h1 className="block-title">{_.get(section, 'title', null)}</h1>             </div>             )}             {_.get(section, 'content', null) && <div             className="block-content">{markdownify(_.get(section, 'content', null))}</div>}             {_.get(section, 'actions', null) && (             <div className="block-buttons">             <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />             </div>             )}             </div>             </section>             );             }             }` --- `js             import React from 'react';             import _ from 'lodash';              import { classNames } from '../utils';             import ActionLink from './ActionLink';              export default class Submenu extends React.Component {             render() {             let page = _.get(this.props, 'page', null);             return (             <ul className={_.get(this.props, 'menu_class', null)}>             {_.map(_.get(this.props, 'submenu', null), (action, action_idx) => {             let page_url = _.trim(_.get(page, 'url', null), '/');             let action_url = _.trim(_.get(action, 'url', null), '/');             return (             <li             key={action_idx}             className={classNames('menu-item', {             current: page_url === action_url,             'menu-button': _.get(action, 'style', null) !== 'link'             })}             >             <ActionLink {...this.props} action={action} />             </li>             );             })}             </ul>             );             }             }` `js             import ActionLink from './ActionLink';             import CtaButtons from './CtaButtons';             import DocsMenu from './DocsMenu';             import DocsSubmenu from './DocsSubmenu';             import Footer from './Footer';             import Header from './Header';             import Icon from './Icon';             import SectionContent from './SectionContent';             import SectionCta from './SectionCta';             import SectionDocs from './SectionDocs';             import SectionGrid from './SectionGrid';             import SectionHero from './SectionHero';             import Submenu from './Submenu';             import Layout from './Layout';             import addScript from './../hooks/addScript';             export {             ActionLink,             CtaButtons,             DocsMenu,             DocsSubmenu,             Footer,             Header,             Icon,             SectionContent,             SectionCta,             SectionDocs,             SectionGrid,             SectionHero,             Submenu,             addScript,             Layout             };              export default {             ActionLink,             CtaButtons,             DocsMenu,             DocsSubmenu,             Footer,             Header,             Icon,             SectionContent,             SectionCta,             SectionDocs,             SectionGrid,             SectionHero,             Submenu,             Layout,             addScript             };`

Click To See Template Sourcecode \# Templates `├── advanced.js             ├── blog.js             ├── docs.js             ├── page.js             └── post.js` `` js             import React from 'react';             import _ from 'lodash';             import { graphql } from 'gatsby';              import components, { Layout } from '../components/index';              // this minimal GraphQL query ensures that when 'gatsby develop' is running,             // any changes to content files are reflected in browser             export const query = graphql`             query ($url: String) {             sitePage(path: { eq: $url }) {             id             }             }             `;              export default class Advanced extends React.Component {             render() {             return (             <Layout {...this.props}>             {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {             let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));             let Component = components[component];             return <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site}             />;             })}             </Layout>             );             }             } `` --- `` js             import React from 'react';             import _ from 'lodash';             import moment from 'moment-strftime';             import { graphql } from 'gatsby';              import { Layout } from '../components/index';             import { toStyleObj, withPrefix, getPages, Link } from '../utils';              // this minimal GraphQL query ensures that when 'gatsby develop' is running,             // any changes to content files are reflected in browser             export const query = graphql`             query ($url: String) {             sitePage(path: { eq: $url }) {             id             }             }             `;              export default class Blog extends React.Component {             render() {             let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/blog'),             'frontmatter.date', 'desc');             return (             <Layout {...this.props}>             <header className="page-header has-gradient outer">             {_.get(this.props, 'pageContext.frontmatter.image', null) && (             <div             className="bg-img"             style={toStyleObj("background-image: url('" + withPrefix(_.get(this.props,             'pageContext.frontmatter.image', null)) + "')")}             />             )}             <div className="inner-sm">             <h1 className="page-title">{_.get(this.props, 'pageContext.frontmatter.title',             null)}</h1>             {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (             <p className="page-subtitle">{_.get(this.props, 'pageContext.frontmatter.subtitle',             null)}</p>             )}             </div>             </header>             <div className="inner-md outer">             <div className="post-feed">             {_.map(display_posts, (post, post_idx) => (             <article key={post_idx} className="post">             {_.get(post, 'frontmatter.thumb_image', null) && (             <Link className="post-thumbnail" to={withPrefix(_.get(post, 'url', null))}>             <img             src={withPrefix(_.get(post, 'frontmatter.thumb_image', null))}             alt={_.get(this.props, 'pageContext.frontmatter.thumb_image_alt', null)}             />             </Link>             )}             <header className="post-header">             <div className="post-meta">             <time className="published" dateTime={moment(_.get(post, 'frontmatter.date',             null)).strftime('%Y-%m-%d %H:%M')}>             {moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}             </time>             </div>             <h2 className="post-title line-left">             <Link to={withPrefix(_.get(post, 'url', null))} rel="bookmark">             {_.get(post, 'frontmatter.title', null)}             </Link>             </h2>             </header>             {_.get(post, 'frontmatter.excerpt', null) && (             <React.Fragment>             <p className="post-excerpt">{_.get(post, 'frontmatter.excerpt', null)}</p>             {_.get(this.props, 'pageContext.frontmatter.has_more_link', null) === true &&             _.get(this.props, 'pageContext.frontmatter.more_link_text', null) && (             <p className="read-more">             <Link className="read-more-link" to={withPrefix(_.get(post, 'url', null))}>             {_.get(this.props, 'pageContext.frontmatter.more_link_text', null)}             </Link>             </p>             )}             </React.Fragment>             )}             </article>             ))}             </div>             </div>             </Layout>             );             }             } `` --- `` js             import React from 'react';             import _ from 'lodash';             import { graphql } from 'gatsby';              import { Layout } from '../components/index';             import DocsMenu from '../components/DocsMenu';             import { htmlToReact, getPages, Link, withPrefix } from '../utils';              // this minimal GraphQL query ensures that when 'gatsby develop' is running,             // any changes to content files are reflected in browser             export const query = graphql`             query ($url: String) {             sitePage(path: { eq: $url }) {             id             }             }             `;              export default class Docs extends React.Component {             render() {             let root_docs_path = _.trim(_.get(this.props, 'pageContext.site.data.doc_sections.root_docs_path',             null), '/');             let current_page_url = _.trim(_.get(this.props, 'pageContext.url', null), '/');             return (             <Layout {...this.props}>             <div className="inner outer">             <div className="docs-content">             <DocsMenu {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />             <article className="post type-docs">             <div className="post-inside">             <header className="post-header">             <h1 className="post-title line-left">{_.get(this.props,             'pageContext.frontmatter.title', null)}</h1>             </header>             <div className="post-content">             {htmlToReact(_.get(this.props, 'pageContext.html', null))}             {root_docs_path !== current_page_url &&             (() => {             let child_pages = _.orderBy(getPages(this.props.pageContext.pages, current_page_url),             'frontmatter.weight');             let child_count = _.size(child_pages);             let has_children = child_count > 0 ? true : false;             return (             <React.Fragment>             {has_children && (             <ul id="docs-section-items" className="docs-section-items">             {_.map(child_pages, (child_page, child_page_idx) => (             <li key={child_page_idx} className="docs-section-item">             <Link to={withPrefix(_.get(child_page, 'url', null))} className="docs-item-link">             {_.get(child_page, 'frontmatter.title', null)}             <span className="icon-angle-right" aria-hidden="true" />             </Link>             </li>             ))}             </ul>             )}             </React.Fragment>             );             })()}             </div>             </div>             </article>             <nav id="page-nav" className="page-nav">             <div id="page-nav-inside" className="page-nav-inside sticky">             <h2 className="page-nav-title">Jump to Section</h2>             <div id="page-nav-link-container" />             </div>             </nav>             </div>             </div>             </Layout>             );             }             } `` --- `` js             import React from 'react';             import _ from 'lodash';             import { graphql } from 'gatsby';              import { Layout } from '../components/index';             import { toStyleObj, withPrefix, htmlToReact } from '../utils';              // this minimal GraphQL query ensures that when 'gatsby develop' is running,             // any changes to content files are reflected in browser             export const query = graphql`             query ($url: String) {             sitePage(path: { eq: $url }) {             id             }             }             `;              export default class Page extends React.Component {             render() {             return (             <Layout {...this.props}>             <article className="post post-full">             <header className="post-header has-gradient outer">             {_.get(this.props, 'pageContext.frontmatter.image', null) && (             <div             className="bg-img"             style={toStyleObj("background-image: url('" + withPrefix(_.get(this.props,             'pageContext.frontmatter.image', null)) + "')")}             />             )}             <div className="inner-sm">             <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title',             null)}</h1>             {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (             <div className="post-subtitle">{htmlToReact(_.get(this.props,             'pageContext.frontmatter.subtitle', null))}</div>             )}             </div>             </header>             <div className="inner-md outer">             <div className="post-content">{htmlToReact(_.get(this.props, 'pageContext.html',             null))}</div>             </div>             </article>             </Layout>             );             }             } `` --- `` js             import React from 'react';             import _ from 'lodash';             import moment from 'moment-strftime';             import { graphql } from 'gatsby';              import { Layout } from '../components/index';             import { toStyleObj, withPrefix, htmlToReact } from '../utils';              // this minimal GraphQL query ensures that when 'gatsby develop' is running,             // any changes to content files are reflected in browser             export const query = graphql`             query ($url: String) {             sitePage(path: { eq: $url }) {             id             }             }             `;              export default class Post extends React.Component {             render() {             return (             <Layout {...this.props}>             <article className="post post-full">             <header className="post-header has-gradient outer">             {_.get(this.props, 'pageContext.frontmatter.image', null) && (             <div             className="bg-img"             style={toStyleObj("background-image: url('" + withPrefix(_.get(this.props,             'pageContext.frontmatter.image', null)) + "')")}             />             )}             <div className="inner-sm">             <div className="post-meta">             <time             className="published"             dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%Y-%m-%d             %H:%M')}             >             {moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%B %d, %Y')}             </time>             </div>             <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title',             null)}</h1>             {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (             <div className="post-subtitle">{htmlToReact(_.get(this.props,             'pageContext.frontmatter.subtitle', null))}</div>             )}             </div>             </header>             <div className="inner-md outer">             <div className="post-content">{htmlToReact(_.get(this.props, 'pageContext.html',             null))}</div>             </div>             </article>             </Layout>             );             }             } ``
