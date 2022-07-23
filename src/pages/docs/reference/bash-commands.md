---
title: Bash-Commands
weight: 0
seo:
    title: Bash-Commands
    description: This is the Bash-Commands page
    extra:
        - name: 'og:type'
          value: website
          keyName: property
        - name: 'og:title'
          value: Bash-Commands
          keyName: property
        - name: 'og:description'
          value: This is the Bash-Commands page
          keyName: property
        - name: 'twitter:card'
          value: summary
        - name: 'twitter:title'
          value: Bash-Commands
        - name: 'twitter:description'
          value: This is the Bash-Commands page
template: docs
---

## My Commands:

#### Find:

# To find files by case-insensitive extension (ex: .jpg, .jpg, .jpG):

find . -iname "\*.jpg"

# To find directories:

find . -type d

# To find files:

find . -type f

# To find files by octal permission:

find . -type f -perm 777

# To find files with setuid bit set:

find . -xdev \( -perm -4000 \) -type f -print0 | xargs -0 ls -l

# To find files with extension '.txt' and remove them:

find ./path/ -name '\*.txt' -exec rm '{}' \;

# To find files with extension '.txt' and look for a string into them:

find ./path/ -name '\*.txt' | xargs grep 'string'

# To find files with size bigger than 5 Mebibyte and sort them by size:

find . -size +5M -type f -print0 | xargs -0 ls -Ssh | sort -z

# To find files bigger than 2 Megabyte and list them:

find . -type f -size +200000000c -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'

# To find files modified more than 7 days ago and list file information:

find . -type f -mtime +7d -ls

# To find symlinks owned by a user and list file information:

find . -type l -user <username-or-userid> -ls

# To search for and delete empty directories:

find . -type d -empty -exec rmdir {} \;

# To search for directories named build at a max depth of 2 directories:

find . -maxdepth 2 -name build -type d

# To search all files who are not in .git directory:

find . ! -iwholename '_.git_' -type f

# To find all files that have the same node (hard link) as MY_FILE_HERE:

find . -type f -samefile MY_FILE_HERE 2>/dev/null

# To find all files in the current directory and modify their permissions:

find . -type f -exec chmod 644 {} \;

---

# 1. Remove spaces from file and folder names and then remove numbers from files and folder names....

### Description: need to : `sudo apt install rename`

> Notes: Issue when renaming file without numbers collides with existing file name...

###### code:

```bash
find . -name "* *" -type d | rename 's/ /_/g'
find . -name "* *" -type f | rename 's/ /_/g'
```

```bash

```bash
find $dir -type f | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

find $dir -type d | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

for i in *.html; do mv "$i" "${i%-*}.html"; done

for i in *.*; do mv "$i" "${i%-*}.${i##*.}"; done

---
### Description: combine the contents of every file in the contaning directory.

>Notes: this includes the contents of the file it's self...

###### code:

```js
//
//APPEND-DIR.js
const fs = require('fs');
let cat = require('child_process')
  .execSync('cat *')
  .toString('UTF-8');
fs.writeFile('output.md', cat, err => {
  if (err) throw err;
});

```

---

# 2. Download Website Using Wget:

### Description:

> Notes: ==> sudo apt install wget

###### code:

```bash

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://bootcamp42.gitbook.io/python/

```

---

# 3. Clean Out Messy Git Repo:

### Description: recursively removes git related folders as well as internal use files / attributions in addition to empty folders

> Notes: To clear up clutter in repositories that only get used on your local machine.

###### code:

```bash

find . -empty -type d -print -delete

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +

```

---

# 4. clone all of a user's git repositories

### Description: clone all of a user or organization's git repositories.

> Notes:

###### code:

# Generalized:

```bash

CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone
```

# Clone all Git User

```bash
CNTX={users}; NAME={bgoonz}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone

```

# Clone all Git Organization:

```bash

CNTX={organizations}; NAME={TheAlgorithms}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone

```

---

# 5. Git Workflow

### Description:

###### code:

```bash
git pull
git init
git add .
git commit -m"update"
git push -u origin master
```

```bash
git init
git add .
git commit -m"update"
git push -u origin main
```

```bash

git init
git add .
git commit -m"update"
git push -u origin bryan-guner
```

```bash
git init
git add .
git commit -m"update"
git push -u origin gh-pages
```

```bash
git init
git add .
git commit -m"update"
git push -u origin preview
```

---

# 6. Recursive Unzip In Place

### Description: recursively unzips folders and then deletes the zip file by the same name.

> Notes:

###### code:

```bash

find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

find . -name "*.zip" -type f -print -delete

```

---

# 7. git pull keeping local changes:

### Description:

> Notes:

###### code:

```bash

git stash
git pull
git stash pop

```

---

# 8. Prettier Code Formatter:

### Description:

> Notes:

###### code:

```bash

sudo npm i prettier -g

prettier --write .

```

---

# 9. Pandoc

### Description:

> Notes:

###### code:

```bash

find ./ -iname "*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

find ./ -iname "*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;

find ./ -iname "*.docx" -type f -exec sh -c 'pandoc "${0}" -o "${0%.docx}.md"' {} \;

```

---

# 10. Gitpod Installs

### Description:

> Notes:

###### code:

```bash
sudo apt install tree
sudo apt install pandoc -y
sudo apt install rename -y
sudo apt install black -y
sudo apt install wget -y
npm i lebab -g
npm i prettier -g
npm i npm-recursive-install -g

```

```bash
black .

prettier --write .
npm-recursive-install
```

---

# 11. Repo Utils Package:

### Description: my standard repo utis package

> Notes:

###### code:

```bash
npm i @bgoonz11/repoutils

```

---

# 12. Unix Tree Package Usage:

### Description:

> Notes:

###### code:

```bash
tree -d -I  'node_modules'

tree  -I  'node_modules'

tree -f  -I  'node_modules' >TREE.md

tree -f -L 2  >README.md

tree -f  -I  'node_modules' >listing-path.md

tree -f  -I  'node_modules' -d >TREE.md

tree -f >README.md

```

---

# 13. Find & Replace string in file & folder names recursively..

### Description:

> Notes:

###### code:

```bash

find . -type f -exec rename 's/string1/string2/g' {} +

find . -type d -exec rename 's/-master//g' {} +

find . -type f -exec rename 's/\.download//g' {} +

find . -type d -exec rename 's/-main//g' {} +

rename 's/\.js\.download$/.js/' *.js\.download

rename 's/\.html\.markdown$/.md/' *.html\.markdown

find . -type d -exec rename 's/es6//g' {} +

```

---

# 14. Remove double extensions :

### Description:

> Notes:

###### code:

```bash
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
```

```bash

#!/bin/bash

for file in *.html.png
do
    mv "${file}" "${file%.png}"
done

for file in *.jpg.jpg
do
    mv "${file}" "${file%.png}"
done

```

---

# 15. Truncate folder names down to 12 characters:

### Description:

> Notes:

###### code:

```bash

for d in ./*; do mv $d ${d:0:12}; done

```

---

# 16.Appendir.js

### Description: combine the contents of every file in the contaning directory.

> Notes: this includes the contents of the file it's self...

###### code:

```js
//
//APPEND-DIR.js
const fs = require('fs');
let cat = require('child_process').execSync('cat *').toString('UTF-8');
fs.writeFile('output.md', cat, (err) => {
    if (err) throw err;
});
```

---

# 17. Replace space in filename with underscore

### Description: followed by replace `'#' with '_'` in directory name

> Notes: Can be re-purposed to find and replace any set of strings in file or folder names.

###### code:

```bash
find . -name "* *" -type f | rename 's/_//g'

find . -name "* *" -type d | rename 's/#/_/g'

```

---

# 18. Filter & delete files by name and extension

### Description:

> Notes:

###### code:

```bash
find . -name '.bin' -type d -prune -exec rm -rf '{}' +

find . -name '*.html' -type d -prune -exec rm -rf '{}' +

find . -name 'nav-index' -type d -prune -exec rm -rf '{}' +

find . -name 'node-gyp' -type d -prune -exec rm -rf '{}' +

find . -name 'deleteme.txt' -type f -prune -exec rm -rf '{}' +

find . -name 'right.html' -type f -prune -exec rm -rf '{}' +

find . -name 'left.html' -type f -prune -exec rm -rf '{}' +

```

---

# 19. Remove lines containing string:

### Description:

> Notes: Remove lines not containing `'.js'`

```bash

sudo sed -i '/\.js/!d' ./*scrap2.md

```

###### code:

```bash
sudo sed -i '/githubusercontent/d' ./*sandbox.md

sudo sed -i '/githubusercontent/d' ./*scrap2.md

sudo sed -i '/github\.com/d' ./*out.md

sudo sed -i '/author/d' ./*

```

---

# 20. Remove duplicate lines from a text file

### Description:

> Notes:
> //...syntax of uniq...//
> $uniq [OPTION] [INPUT[OUTPUT]]
> The syntax of this is quite easy to understand. Here, INPUT refers to the input file in which repeated lines need to be filtered out and if INPUT isn't specified then uniq reads from the standard input. OUTPUT refers to the output file in which you can store the filtered output generated by uniq command and as in case of INPUT if OUTPUT isn't specified then uniq writes to the standard output.

Now, let's understand the use of this with the help of an example. Suppose you have a text file named kt.txt which contains repeated lines that needs to be omitted. This can simply be done with uniq.

###### code:

```bash
sudo apt install uniq
uniq -u input.txt output.txt

```

---

# 21. Remove lines containing string:

### Description:

> Notes:

###### code:

```bash
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

```

---

# 22. Zip directory excluding .git and node_modules all the way down (Linux)

### Description:

> Notes:

###### code:

```bash

#!/bin/bash
TSTAMP=`date '+%Y%m%d-%H%M%S'`
zip -r $1.$TSTAMP.zip $1 -x "**.git/*" -x "**node_modules/*" `shift; echo $@;`

printf "\nCreated: $1.$TSTAMP.zip\n"

# usage:
# - zipdir thedir
# - zip thedir -x "**anotherexcludedsubdir/*"    (important the double quotes to prevent glob expansion)

# if in windows/git-bash, add 'zip' command this way:
# https://stackoverflow.com/a/55749636/1482990

```

---

# 23. Delete files containing a certain string:

### Description:

> Notes:

###### code:

```bash
find . | xargs grep -l www.redhat.com | awk '{print "rm "$1}' > doit.sh
vi doit.sh // check for murphy and his law
source doit.sh

```

---

# 24.

### Description:

> Notes:

###### code:

```bash

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
  echo ' <script async defer src="./assets/prism.js">
</script>'

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

  awk '{print "<li>
<a href=\""$1"\">",$1,"&nbsp;</a>
</li>"}' $listing

  # awk '{print "<li>"};

  # 	{print " <a href=\""$1"\">",$1,"</a>
</li>&nbsp;"}' \ $listing

  echo ""

  echo "</ul>"

  echo "</body>"

  echo "</html>"

}

cmd $listing --sort=extension >>$html

```

---

# 25. Index of Iframes

### Description: Creates an index.html file that contains all the files in the working directory or any of it's sub folders as iframes instead of anchor tags.

> Notes: Useful Follow up Code:

```bash

```

###### code:

```bash

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
  echo ' <script async defer src="./assets/prism.js">
</script>'

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

  awk '{print "<iframe style="resize:both; overflow:scroll;"  sandbox="allow-scripts" style="resize:both; overflow:scroll;"    src=\""$1"\">","</iframe>
<br>"}' $listing

  # awk '{print "<li>"};

  # 	{print " <a href=\""$1"\">",$1,"</a>
</li>&nbsp;"}' \ $listing

  echo ""

  echo "</ul>"

  echo "</body>"

  echo "</html>"

}

cmd $listing --sort=extension >>$html

```

---

# 26. Filter Corrupted Git Repo For Troublesome File:

### Description:

> Notes:

###### code:

```bash

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_index.html' HEAD

```

---

# 27. OVERWRITE LOCAL CHANGES:

### Description:

Important: If you have any local changes, they will be lost. With or without --hard option, any local commits that haven't been pushed will be lost.[*]
If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

> Notes:
> First, run a fetch to update all origin/<branch> refs to latest:

###### code:

```bash

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

```

---

# 28. Remove Submodules:

### Description: To remove a submodule you need to:

> Notes:

> Delete the relevant section from the .gitmodules file.
> Stage the .gitmodules changes git add .gitmodules
> Delete the relevant section from .git/config.
> Run git rm --cached path_to_submodule (no trailing slash).
> Run rm -rf .git/modules/path_to_submodule (no trailing slash).
> Commit git commit -m "Removed submodule "
> Delete the now untracked submodule files rm -rf path_to_submodule

###### code:

```bash
git submodule deinit
```

---

# 29. GET GISTS

### Description:

> Notes:

###### code:

```bash
sudo apt install wget

wget -q -O - https://api.github.com/users/bgoonz/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget

wget -q -O - https://api.github.com/users/amitness/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget

wget -q -O - https://api.github.com/users/drodsou/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

wget -q -O - https://api.github.com/users/thomasmb/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

```

---

# 30. Remove Remote OriginL

### Description:

> Notes:

###### code:

```bash

git remote remove origin

```

---

# 31. just clone .git folder:

### Description:

> Notes:

###### code:

```bash

git clone --bare --branch=master --single-branch https://github.com/bgoonz/My-Web-Dev-Archive.git

```

---

# 32. Undo recent pull request:

### Description:

> Notes:

###### code:

```bash

git reset --hard master@{"10 minutes ago"}

```

---

# 33. Lebab

### Description: ES5 --> ES6

> Notes:

###### code:

```bash
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

```

---

# 34. Troubleshoot Ubuntu Input/Output Error

### Description: Open Powershell as Administrator...

> Notes:

###### code:

```

 wsl.exe --shutdown

 Get-Service LxssManager | Restart-Service

```

---

# 35. Export Medium as Markdown

### Description:

> Notes:

###### code:

```bash
npm i mediumexporter -g

mediumexporter https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4 >ds.md

```

---

# 36. Delete files in violation of a given size range (100MB for git)

### Description:

> Notes:

###### code:

```bash

find . -size +75M -a -print -a -exec rm -f {} \;

find . -size +98M -a -print -a -exec rm -f {} \;

```

---

# 37. download all links of given file type

### Description:

> Notes:

###### code:

```bash

wget -r -A.pdf https://overapi.com/git

```

---

# 38. Kill all node processes

### Description:

> Notes:

###### code:

```bash
killall -s KILL node

```

---

# 39. Remove string from file names recursively

### Description: In the example below I am using this command to remove the string "-master" from all file names in the working directory and all of it's sub directories.

###### code:

```bash
find <mydir> -type f -exec sed -i 's/<string1>/<string2>/g' {} +

find . -type f -exec rename 's/-master//g' {} +

```

> Notes: The same could be done for folder names by changing the _-type f_ flag (for file) to a _-type d_ flag (for directory)

```bash
find <mydir> -type d -exec sed -i 's/<string1>/<string2>/g' {} +

find . -type d -exec rename 's/-master//g' {} +

```

---

# 40. Remove spaces from file and folder names recursively

### Description: replaces spaces in file and folder names with an `_` underscore

> Notes: need to run `sudo apt install rename` to use this command

###### code:

```bash

find . -name "* *" -type d | rename 's/ /_/g'
find . -name "* *" -type f | rename 's/ /_/g'
```

---

# 41. Zip Each subdirectories in a given directory into their own zip file

### Description:

> Notes:

###### code:

```bash
for i in */; do zip -r "${i%/}.zip" "$i"; done

```

---

# 42.

# 43.

# 44.

# 45.

# 46.

# 47.

# 48.

# 49.

# 50.

# 51.

# 52.

# 53.

# 54.

# 55.

# 56.

# 57.

# 58.

# 59.

# 60.

# 61.

# 62.

# 63.

# 64.

# 65.

# 66.

# 67.

# 68.

# 69.

# 70.

# 71.

# 72.

# 73.

# 74.

# 75.

# 76.

# 77.

# 78.

# 79.

# 80.

# 81.

# 82.

# 83.

# 84.

# 85.

# 86.

# 87.

# 88.

# 89.

# 90.

# 91. Unzip PowerShell

### Description:

> Notes:

###### code:

```

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

    $Location.Copyhere($ZipFolder.items(), 1040) # 1040 - No msgboxes to the user - https://msdn.microsoft.com/library/bb787866%28VS.85%29.aspx
    $progress++
}

```

---

# 92. return to bash from zsh

### Description:

> Notes:

###### code:

```bash
 sudo apt --purge remove zsh

```

---

# 93. Symbolic Link

### Description: to working directory

> Notes:

###### code:

```bash

ln -s "$(pwd)" ~/NameOfLink

ln -s "$(pwd)" ~/Downloads

```

---

# 94. auto generate readme

### Description: rename existing readme to blueprint.md

> Notes:

###### code:

```bash

npx @appnest/readme generate

```

---

# 95. Log into postgres:

### Description:

> Notes:

###### code:

```bash
sudo -u postgres psql
```

---

# 96. URL To Subscribe To YouTube Channel

### Description:

> Notes:

###### code:

```txt

https://www.youtube.com/channel/UC1HDa0wWnIKUf-b4yY9JecQ?sub_confirmation=1

```

---

# 97. Embed Repl.it In Medium Post:

###### code:

```txt

https://repl.it/@bgoonz/Data-Structures-Algos-Codebase?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/node-db1-project?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/interview-prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/Database-Prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

```

---

# 98.

### Description:

> Notes:

###### code:

```bash

find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

```

---

# 99. Cheat Sheet

### Description:

> Notes:

###### code:

```bash
#!/bin/bash

# SHORTCUTS and HISTORY


CTRL+A  # move to beginning of line
CTRL+B  # moves backward one character
CTRL+C  # halts the current command
CTRL+D  # deletes one character backward or logs out of current session, similar to exit
CTRL+E  # moves to end of line
CTRL+F  # moves forward one character
CTRL+G  # aborts the current editing command and ring the terminal bell
CTRL+H  # deletes one character under cursor (same as DELETE)
CTRL+J  # same as RETURN
CTRL+K  # deletes (kill) forward to end of line
CTRL+L  # clears screen and redisplay the line
CTRL+M  # same as RETURN
CTRL+N  # next line in command history
CTRL+O  # same as RETURN, then displays next line in history file
CTRL+P  # previous line in command history
CTRL+Q  # resumes suspended shell output
CTRL+R  # searches backward
CTRL+S  # searches forward or suspends shell output
CTRL+T  # transposes two characters
CTRL+U  # kills backward from point to the beginning of line
CTRL+V  # makes the next character typed verbatim
CTRL+W  # kills the word behind the cursor
CTRL+X  # lists the possible filename completions of the current word
CTRL+Y  # retrieves (yank) last item killed
CTRL+Z  # stops the current command, resume with fg in the foreground or bg in the background

ALT+B   # moves backward one word
ALT+D   # deletes next word
ALT+F   # moves forward one word
ALT+H   # deletes one character backward
ALT+T   # transposes two words
ALT+.   # pastes last word from the last command. Pressing it repeatedly traverses through command history.
ALT+U   # capitalizes every character from the current cursor position to the end of the word
ALT+L   # uncapitalizes every character from the current cursor position to the end of the word
ALT+C   # capitalizes the letter under the cursor. The cursor then moves to the end of the word.
ALT+R   # reverts any changes to a command you've pulled from your history if you've edited it.
ALT+?   # list possible completions to what is typed
ALT+^   # expand line to most recent match from history

CTRL+X then (   # start recording a keyboard macro
CTRL+X then )   # finish recording keyboard macro
CTRL+X then E   # recall last recorded keyboard macro
CTRL+X then CTRL+E   # invoke text editor (specified by $EDITOR) on current command line then execute resultes as shell commands

BACKSPACE  # deletes one character backward
DELETE     # deletes one character under cursor

history   # shows command line history
!!        # repeats the last command
!<n>      # refers to command line 'n'
!<string> # refers to command starting with 'string'

exit      # logs out of current session


# BASH BASICS


env                 # displays all environment variables

echo $SHELL         # displays the shell you're using
echo $BASH_VERSION  # displays bash version

bash                # if you want to use bash (type exit to go back to your previously opened shell)
whereis bash        # locates the binary, source and manual-page for a command
which bash          # finds out which program is executed as 'bash' (default: /bin/bash, can change across environments)

clear               # clears content on window (hide displayed lines)


# FILE COMMANDS


ls                            # lists your files in current directory, ls <dir> to print files in a specific directory
ls -l                         # lists your files in 'long format', which contains the exact size of the file, who owns the file and who has the right to look at it, and when it was last modified
ls -a                         # lists all files in 'long format', including hidden files (name beginning with '.')
ln -s <filename> <link>       # creates symbolic link to file
readlink <filename>           # shows where a symbolic links points to
tree                          # show directories and subdirectories in easilly readable file tree
mc                            # terminal file explorer (alternative to ncdu)
touch <filename>              # creates or updates (edit) your file
mktemp -t <filename>            # make a temp file in /tmp/ which is deleted at next boot (-d to make directory)
cat <filename>                # prints file raw content (will not be interpreted)
any_command > <filename>      # '>' is used to perform redirections, it will set any_command's stdout to file instead of "real stdout" (generally /dev/stdout)
more <filename>               # shows the first part of a file (move with space and type q to quit)
head <filename>               # outputs the first lines of file (default: 10 lines)
tail <filename>               # outputs the last lines of file (useful with -f option) (default: 10 lines)
vim <filename>                # opens a file in VIM (VI iMproved) text editor, will create it if it doesn't exist
mv <filename1> <dest>         # moves a file to destination, behavior will change based on 'dest' type (dir: file is placed into dir; file: file will replace dest (tip: useful for renaming))
cp <filename1> <dest>         # copies a file
rm <filename>                 # removes a file
find . -name <name> <type>    # searches for a file or a directory in the current directory and all its sub-directories by its name
diff <filename1> <filename2>  # compares files, and shows where they differ
wc <filename>                 # tells you how many lines, words and characters there are in a file. Use -lwc (lines, word, character) to ouput only 1 of those informations
sort <filename>               # sorts the contents of a text file line by line in alphabetical order, use -n for numeric sort and -r for reversing order.
sort -t -k <filename>         # sorts the contents on specific sort key field starting from 1, using the field separator t.
rev                           # reverse string characters (hello becomes olleh)
chmod -options <filename>     # lets you change the read, write, and execute permissions on your files (more infos: SUID, GUID)
gzip <filename>               # compresses files using gzip algorithm
gunzip <filename>             # uncompresses files compressed by gzip
gzcat <filename>              # lets you look at gzipped file without actually having to gunzip it
lpr <filename>                # prints the file
lpq                           # checks out the printer queue
lprm <jobnumber>              # removes something from the printer queue
genscript                     # converts plain text files into postscript for printing and gives you some options for formatting
dvips <filename>              # prints .dvi files (i.e. files produced by LaTeX)
grep <pattern> <filenames>    # looks for the string in the files
grep -r <pattern> <dir>       # search recursively for pattern in directory
head -n file_name | tail +n   # Print nth line from file.
head -y lines.txt | tail +x   # want to display all the lines from x to y. This includes the xth and yth lines.


# DIRECTORY COMMANDS


mkdir <dirname>               # makes a new directory
rmdir <dirname>               # remove an empty directory
rmdir -rf <dirname>           # remove a non-empty directory
mv <dir1> <dir2>              # rename a directory from <dir1> to <dir2>
cd                            # changes to home
cd ..                         # changes to the parent directory
cd <dirname>                  # changes directory
cp -r <dir1> <dir2>           # copy <dir1> into <dir2> including sub-directories
pwd                           # tells you where you currently are
cd ~                          # changes to home.
cd -                        # changes to previous working directory


# SSH, SYSTEM INFO & NETWORK COMMANDS


ssh user@host            # connects to host as user
ssh -p <port> user@host  # connects to host on specified port as user
ssh-copy-id user@host    # adds your ssh key to host for user to enable a keyed or passwordless login

whoami                   # returns your username
passwd                   # lets you change your password
quota -v                 # shows what your disk quota is
date                     # shows the current date and time
cal                      # shows the month's calendar
uptime                   # shows current uptime
w                        # displays whois online
finger <user>            # displays information about user
uname -a                 # shows kernel information
man <command>            # shows the manual for specified command
df                       # shows disk usage
du <filename>            # shows the disk usage of the files and directories in filename (du -s give only a total)
last <yourUsername>      # lists your last logins
ps -u yourusername       # lists your processes
kill <PID>               # kills the processes with the ID you gave
killall <processname>    # kill all processes with the name
top                      # displays your currently active processes
lsof                     # lists open files
bg                       # lists stopped or background jobs ; resume a stopped job in the background
fg                       # brings the most recent job in the foreground
fg <job>                 # brings job to the foreground

ping <host>              # pings host and outputs results
whois <domain>           # gets whois information for domain
dig <domain>             # gets DNS information for domain
dig -x <host>            # reverses lookup host
wget <file>              # downloads file

time <command>             # report time consumed by command execution


# VARIABLES


varname=value                # defines a variable
varname=value command        # defines a variable to be in the environment of a particular subprocess
echo $varname                # checks a variable's value
echo $$                      # prints process ID of the current shell
echo $!                      # prints process ID of the most recently invoked background job
echo $?                      # displays the exit status of the last command
read <varname>               # reads a string from the input and assigns it to a variable
read -p "prompt" <varname>   # same as above but outputs a prompt to ask user for value
column -t <filename>         # display info in pretty columns (often used with pipe)
let <varname> = <equation>   # performs mathematical calculation using operators like +, -, *, /, %
export VARNAME=value         # defines an environment variable (will be available in subprocesses)

array[0]=valA                # how to define an array
array[1]=valB
array[2]=valC
array=([2]=valC [0]=valA [1]=valB)  # another way
array=(valA valB valC)              # and another

${array[i]}                  # displays array's value for this index. If no index is supplied, array element 0 is assumed
${#array[i]}                 # to find out the length of any element in the array
${#array[@]}                 # to find out how many values there are in the array

declare -a                   # the variables are treated as arrays
declare -f                   # uses function names only
declare -F                   # displays function names without definitions
declare -i                   # the variables are treated as integers
declare -r                   # makes the variables read-only
declare -x                   # marks the variables for export via the environment

${varname:-word}             # if varname exists and isn't null, return its value; otherwise return word
${varname:word}              # if varname exists and isn't null, return its value; otherwise return word
${varname:=word}             # if varname exists and isn't null, return its value; otherwise set it word and then return its value
${varname:?message}          # if varname exists and isn't null, return its value; otherwise print varname, followed by message and abort the current command or script
${varname:+word}             # if varname exists and isn't null, return word; otherwise return null
${varname:offset:length}     # performs substring expansion. It returns the substring of $varname starting at offset and up to length characters

${variable#pattern}          # if the pattern matches the beginning of the variable's value, delete the shortest part that matches and return the rest
${variable##pattern}         # if the pattern matches the beginning of the variable's value, delete the longest part that matches and return the rest
${variable%pattern}          # if the pattern matches the end of the variable's value, delete the shortest part that matches and return the rest
${variable%%pattern}         # if the pattern matches the end of the variable's value, delete the longest part that matches and return the rest
${variable/pattern/string}   # the longest match to pattern in variable is replaced by string. Only the first match is replaced
${variable//pattern/string}  # the longest match to pattern in variable is replaced by string. All matches are replaced

${#varname}                  # returns the length of the value of the variable as a character string

*(patternlist)               # matches zero or more occurrences of the given patterns
+(patternlist)               # matches one or more occurrences of the given patterns
?(patternlist)               # matches zero or one occurrence of the given patterns
@(patternlist)               # matches exactly one of the given patterns
!(patternlist)               # matches anything except one of the given patterns

$(UNIX command)              # command substitution: runs the command and returns standard output


# FUNCTIONS


# The function refers to passed arguments by position (as if they were positional parameters), that is, $1, $2, and so forth.
# $@ is equal to "$1" "$2"... "$N", where N is the number of positional parameters. $# holds the number of positional parameters.

function functname() {
  shell commands
}

unset -f functname  # deletes a function definition
declare -f          # displays all defined functions in your login session


# FLOW CONTROLS


statement1 && statement2  # and operator
statement1 || statement2  # or operator

-a                        # and operator inside a test conditional expression
-o                        # or operator inside a test conditional expression

# STRINGS

str1 == str2               # str1 matches str2
str1 != str2               # str1 does not match str2
str1 < str2                # str1 is less than str2 (alphabetically)
str1 > str2                # str1 is greater than str2 (alphabetically)
str1 \> str2               # str1 is sorted after str2
str1 \< str2               # str1 is sorted before str2
-n str1                    # str1 is not null (has length greater than 0)
-z str1                    # str1 is null (has length 0)

# FILES

-a file                   # file exists or its compilation is successful
-d file                   # file exists and is a directory
-e file                   # file exists; same -a
-f file                   # file exists and is a regular file (i.e., not a directory or other special type of file)
-r file                   # you have read permission
-s file                   # file exists and is not empty
-w file                   # your have write permission
-x file                   # you have execute permission on file, or directory search permission if it is a directory
-N file                   # file was modified since it was last read
-O file                   # you own file
-G file                   # file's group ID matches yours (or one of yours, if you are in multiple groups)
file1 -nt file2           # file1 is newer than file2
file1 -ot file2           # file1 is older than file2

# NUMBERS

-lt                       # less than
-le                       # less than or equal
-eq                       # equal
-ge                       # greater than or equal
-gt                       # greater than
-ne                       # not equal

if condition
then
  statements
[elif condition
  then statements...]
[else
  statements]
fi

for x in {1..10}
do
  statements
done

for name [in list]
do
  statements that can use $name
done

for (( initialisation ; ending condition ; update ))
do
  statements...
done

case expression in
  pattern1 )
    statements ;;
  pattern2 )
    statements ;;
esac

select name [in list]
do
  statements that can use $name
done

while condition; do
  statements
done

until condition; do
  statements
done


# COMMAND-LINE PROCESSING CYCLE


# The default order for command lookup is functions, followed by built-ins, with scripts and executables last.
# There are three built-ins that you can use to override this order: `command`, `builtin` and `enable`.

command  # removes alias and function lookup. Only built-ins and commands found in the search path are executed
builtin  # looks up only built-in commands, ignoring functions and commands found in PATH
enable   # enables and disables shell built-ins

eval     # takes arguments and run them through the command-line processing steps all over again


# INPUT/OUTPUT REDIRECTORS


cmd1|cmd2  # pipe; takes standard output of cmd1 as standard input to cmd2
< file     # takes standard input from file
> file     # directs standard output to file
>> file    # directs standard output to file; append to file if it already exists
>|file     # forces standard output to file even if noclobber is set
n>|file    # forces output to file from file descriptor n even if noclobber is set
<> file    # uses file as both standard input and standard output
n<>file    # uses file as both input and output for file descriptor n
n>file     # directs file descriptor n to file
n<file     # takes file descriptor n from file
n>>file    # directs file description n to file; append to file if it already exists
n>&        # duplicates standard output to file descriptor n
n<&        # duplicates standard input from file descriptor n
n>&m       # file descriptor n is made to be a copy of the output file descriptor
n<&m       # file descriptor n is made to be a copy of the input file descriptor
&>file     # directs standard output and standard error to file
<&-      # closes the standard input
>&-      # closes the standard output
n>&-     # closes the ouput from file descriptor n
n<&-     # closes the input from file descripor n

|tee <file># output command to both terminal and a file (-a to append to file)


# PROCESS HANDLING


# To suspend a job, type CTRL+Z while it is running. You can also suspend a job with CTRL+Y.
# This is slightly different from CTRL+Z in that the process is only stopped when it attempts to read input from terminal.
# Of course, to interrupt a job, type CTRL+C.

myCommand &  # runs job in the background and prompts back the shell

jobs         # lists all jobs (use with -l to see associated PID)

fg           # brings a background job into the foreground
fg %+        # brings most recently invoked background job
fg %-      # brings second most recently invoked background job
fg %N        # brings job number N
fg %string   # brings job whose command begins with string
fg %?string  # brings job whose command contains string

kill -l               # returns a list of all signals on the system, by name and number
kill PID              # terminates process with specified PID
kill -s SIGKILL 4500  # sends a signal to force or terminate the process
kill -15 913          # Ending PID 913 process with signal 15 (TERM)
kill %1               # Where %1 is the number of job as read from 'jobs' command.

ps           # prints a line of information about the current running login shell and any processes running under it
ps -a        # selects all processes with a tty except session leaders

trap cmd sig1 sig2  # executes a command when a signal is received by the script
trap "" sig1 sig2   # ignores that signals
trap - sig1 sig2    # resets the action taken when the signal is received to the default

disown <PID|JID>    # removes the process from the list of jobs

wait                # waits until all background jobs have finished
sleep <number>      # wait # of seconds before continuing

pv                  # display progress bar for data handling commands. often used with pipe like |pv
yes                 # give yes response everytime an input is requested from script/process


# TIPS & TRICKS


# set an alias
cd; nano .bash_profile
> alias gentlenode='ssh admin@gentlenode.com -p 3404'  # add your alias in .bash_profile

# to quickly go to a specific directory
cd; nano .bashrc
> shopt -s cdable_vars
> export websites="/Users/mac/Documents/websites"

source .bashrc
cd $websites


# DEBUGGING SHELL PROGRAMS


bash -n scriptname  # don't run commands; check for syntax errors only
set -o noexec       # alternative (set option in script)

bash -v scriptname  # echo commands before running them
set -o verbose      # alternative (set option in script)

bash -x scriptname  # echo commands after command-line processing
set -o xtrace       # alternative (set option in script)

trap 'echo $varname' EXIT  # useful when you want to print out the values of variables at the point that your script exits

function errtrap {
  es=$?
  echo "ERROR line $1: Command exited with status $es."
}

trap 'errtrap $LINENO' ERR  # is run whenever a command in the surrounding script or function exits with non-zero status

function dbgtrap {
  echo "badvar is $badvar"
}

trap dbgtrap DEBUG  # causes the trap code to be executed before every statement in a function or script
# ...section of code in which the problem occurs...
trap - DEBUG  # turn off the DEBUG trap

function returntrap {
  echo "A return occurred"
}

trap returntrap RETURN  # is executed each time a shell function or a script executed with the . or source commands finishes executing


# COLORS AND BACKGROUNDS

# note: \e or \x1B also work instead of \033
# Reset
Color_Off='\033[0m' # Text Reset

# Regular Colors
Black='\033[0;30m'  # Black
Red='\033[0;31m'    # Red
Green='\033[0;32m'  # Green
Yellow='\033[0;33m' # Yellow
Blue='\033[0;34m'   # Blue
Purple='\033[0;35m' # Purple
Cyan='\033[0;36m'   # Cyan
White='\033[0;97m'  # White

# Additional colors
LGrey='\033[0;37m'  # Ligth Gray
DGrey='\033[0;90m'  # Dark Gray
LRed='\033[0;91m'   # Ligth Red
LGreen='\033[0;92m' # Ligth Green
LYellow='\033[0;93m'# Ligth Yellow
LBlue='\033[0;94m'  # Ligth Blue
LPurple='\033[0;95m'# Light Purple
LCyan='\033[0;96m'  # Ligth Cyan

# Bold
BBlack='\033[1;30m' # Black
BRed='\033[1;31m'   # Red
BGreen='\033[1;32m' # Green
BYellow='\033[1;33m'# Yellow
BBlue='\033[1;34m'  # Blue
BPurple='\033[1;35m'# Purple
BCyan='\033[1;36m'  # Cyan
BWhite='\033[1;37m' # White

# Underline
UBlack='\033[4;30m' # Black
URed='\033[4;31m'   # Red
UGreen='\033[4;32m' # Green
UYellow='\033[4;33m'# Yellow
UBlue='\033[4;34m'  # Blue
UPurple='\033[4;35m'# Purple
UCyan='\033[4;36m'  # Cyan
UWhite='\033[4;37m' # White

# Background
On_Black='\033[40m' # Black
On_Red='\033[41m'   # Red
On_Green='\033[42m' # Green
On_Yellow='\033[43m'# Yellow
On_Blue='\033[44m'  # Blue
On_Purple='\033[45m'# Purple
On_Cyan='\033[46m'  # Cyan
On_White='\033[47m' # White

# Example of usage
echo -e "${Green}This is GREEN text${Color_Off} and normal text"
echo -e "${Red}${On_White}This is Red test on White background${Color_Off}"
# option -e is mandatory, it enable interpretation of backslash escapes
printf "${Red} This is red \n"

```
