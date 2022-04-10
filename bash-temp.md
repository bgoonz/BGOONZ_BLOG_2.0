# My Commands

### Find

#### To find files by case-insensitive extension (ex: .jpg, .jpg, .jpG)

`find . -iname "\*.jpg"`

#### To find directories

`find . -type d`

#### To find files

`find . -type f`

#### To find files by octal permission

`find . -type f -perm 777`

#### To find files with setuid bit set

`find . -xdev \( -perm -4000 \) -type f -print0 | xargs -0 ls -l`

#### To find files with extension '.txt' and remove them

`find ./path/ -name '\*.txt' -exec rm '{}' \;`

#### To find files with extension '.txt' and look for a string into them

`find ./path/ -name '\*.txt' | xargs grep 'string'`

#### To find files with size bigger than 5 Mebibyte and sort them by size

`find . -size +5M -type f -print0 | xargs -0 ls -Ssh | sort -z`

#### To find files bigger than 2 Megabyte and list them

`find . -type f -size +200000000c -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'`

#### To find files modified more than 7 days ago and list file information

find . -type f -mtime +7d -ls

#### To find symlinks owned by a user and list file information

find . -type l -user <username-or-userid> -ls

#### To search for and delete empty directories

find . -type d -empty -exec rmdir {} \;

#### To search for directories named build at a max depth of 2 directories

find . -maxdepth 2 -name build -type d

#### To search all files who are not in .git directory

find . ! -iwholename '_.git_' -type f

#### To find all files that have the same node (hard link) as MY_FILE_HERE

find . -type f -samefile MY_FILE_HERE 2> /dev/null

#### To find all files in the current directory and modify their permissions

find . -type f -exec chmod 644 {} \;

#### 1. Remove spaces from file and folder names and then remove numbers from files and folder names

## Description: need to : `sudo apt install rename`

> Notes: Issue when renaming file without numbers collides with existing file name...

### code

```sh
find . -name "* *" -type d | rename 's/ /_/g'
find . -name "* *" -type f | rename 's/ /_/g'
```

````sh

```sh
find $dir -type f | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

find $dir -type d | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

for i in *.html; do mv "$i" "${i%-*}.html"; done

for i in *.*; do mv "$i" "${i%-*}.${i##*.}"; done

---
## Description: combine the contents of every file in the contaning directory.

> Notes: this includes the contents of the file it's self...

###  code:

```js
//APPEND-DIR.js
const fs = require('fs');
let cat = require('child_process')
  .execSync('cat *')
  .toString('UTF-8');
fs.writeFile('output.md', cat, err =>  {
  if (err) throw err;
});

````


---
---

#### 2. Download Website Using Wget

## Description

> Notes: ==> sudo apt install wget

#### code

```sh

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://bootcamp42.gitbook.io/python/

```


---
---

#### 3. Clean Out Messy Git Repo

## Description: recursively removes git related folders as well as internal use files / attributions in addition to empty folders

> Notes: To clear up clutter in repositories that only get used on your local machine.

#### code

```sh

find . -empty -type d -print -delete

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +

```


---
---

#### 4. clone all of a user's git repositories

## Description: clone all of a user or organization's git repositories

> Notes:

#### code

#### Generalized

```sh

CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone
```

#### Clone all Git User

```sh
CNTX={users}; NAME={bgoonz}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone

```

#### Clone all Git Organization

```sh

CNTX={organizations}; NAME={TheAlgorithms}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
  grep -e 'git_url*' |
  cut -d \" -f 4 |
  xargs -L1 git clone

```


---
---

#### 5. Git Workflow

## Description

#### code

```sh
git pull
git init
git add .
git commit -m"update"
git push -u origin master
```

```sh
git init
git add .
git commit -m"update"
git push -u origin main
```

```sh

git init
git add .
git commit -m"update"
git push -u origin bryan-guner
```

```sh
git init
git add .
git commit -m"update"
git push -u origin gh-pages
```

```sh
git init
git add .
git commit -m"update"
git push -u origin preview
```


---
---

#### 6. Recursive Unzip In Place

## Description: recursively unzips folders and then deletes the zip file by the same name

> Notes:

#### code

```sh

find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

find . -name "*.zip" -type f -print -delete

```


---
---

#### 7. git pull keeping local changes

## Description

> Notes:

#### code

```sh

git stash
git pull
git stash pop

```


---
---

#### 8. Prettier Code Formatter

## Description

> Notes:

#### code

```sh

sudo npm i prettier -g

prettier --write .

```


---
---

#### 9. Pandoc

## Description

> Notes:

#### code

```sh

find ./ -iname "*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

find ./ -iname "*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;

find ./ -iname "*.docx" -type f -exec sh -c 'pandoc "${0}" -o "${0%.docx}.md"' {} \;

```


---
---

#### 10. Gitpod Installs

## Description

> Notes:

#### code

```sh
sudo apt install tree
sudo apt install pandoc -y
sudo apt install rename -y
sudo apt install black -y
sudo apt install wget -y
npm i lebab -g
npm i prettier -g
npm i npm-recursive-install -g

```

```sh
black .

prettier --write .
npm-recursive-install
```


---
---

#### 11. Repo Utils Package

## Description: my standard repo utis package

> Notes:

#### code

```sh
npm i @bgoonz11/repoutils

```


---
---

#### 12. Unix Tree Package Usage

## Description

> Notes:

#### code

```sh
tree -d -I  'node_modules'

tree  -I  'node_modules'

tree -f  -I  'node_modules' > TREE.md

tree -f -L 2  > README.md

tree -f  -I  'node_modules' > listing-path.md

tree -f  -I  'node_modules' -d > TREE.md

tree -f > README.md

```


---
---

#### 13. Find & Replace string in file & folder names recursively

## Description

> Notes:

#### code

```sh

find . -type f -exec rename 's/string1/string2/g' {} +

find . -type d -exec rename 's/-master//g' {} +

find . -type f -exec rename 's/\.download//g' {} +

find . -type d -exec rename 's/-main//g' {} +

rename 's/\.js\.download$/.js/' *.js\.download

rename 's/\.html\.markdown$/.md/' *.html\.markdown

find . -type d -exec rename 's/es6//g' {} +

```


---
---

#### 14. Remove double extensions

## Description

> Notes:

#### code

```sh
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

```sh

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
---

#### 15. Truncate folder names down to 12 characters

## Description

> Notes:

#### code

```sh

for d in ./*; do mv $d ${d:0:12}; done

```


---
---

#### 16.Appendir.js

## Description: combine the contents of every file in the contaning directory

> Notes: this includes the contents of the file it's self...

#### code

```js
//APPEND-DIR.js
const fs = require('fs');
let cat = require('child_process').execSync('cat *').toString('UTF-8');
fs.writeFile('output.md', cat, (err) => {
    if (err) throw err;
});
```


---
---

#### 17. Replace space in filename with underscore

## Description: followed by replace `'#' with '_'` in directory name

> Notes: Can be re-purposed to find and replace any set of strings in file or folder names.

#### code

```sh
find . -name "* *" -type f | rename 's/_//g'

find . -name "* *" -type d | rename 's/#/_/g'

```


---
---

#### 18. Filter & delete files by name and extension

## Description

> Notes:

#### code

```sh
find . -name '.bin' -type d -prune -exec rm -rf '{}' +

find . -name '*.html' -type d -prune -exec rm -rf '{}' +

find . -name 'nav-index' -type d -prune -exec rm -rf '{}' +

find . -name 'node-gyp' -type d -prune -exec rm -rf '{}' +

find . -name 'deleteme.txt' -type f -prune -exec rm -rf '{}' +

find . -name 'right.html' -type f -prune -exec rm -rf '{}' +

find . -name 'left.html' -type f -prune -exec rm -rf '{}' +

```


---
---

#### 19. Remove lines containing string

## Description

> Notes: Remove lines not containing `'.js'`

```sh

sudo sed -i '/\.js/!d' ./*scrap2.md

```

#### code

```sh
sudo sed -i '/githubusercontent/d' ./*sandbox.md

sudo sed -i '/githubusercontent/d' ./*scrap2.md

sudo sed -i '/github\.com/d' ./*out.md

sudo sed -i '/author/d' ./*

```


---
---

#### 20. Remove duplicate lines from a text file

## Description

> Notes:
> //...syntax of uniq...//
> $uniq [OPTION] [INPUT[OUTPUT]]
> The syntax of this is quite easy to understand. Here, INPUT refers to the input file in which repeated lines need to be filtered out and if INPUT isn't specified then uniq reads from the standard input. OUTPUT refers to the output file in which you can store the filtered output generated by uniq command and as in case of INPUT if OUTPUT isn't specified then uniq writes to the standard output.

Now, let's understand the use of this with the help of an example. Suppose you have a text file named kt.txt which contains repeated lines that needs to be omitted. This can simply be done with uniq.

#### code

```sh
sudo apt install uniq
uniq -u input.txt output.txt

```


---
---

#### 21. Remove lines containing string

## Description

> Notes:

#### code

```sh
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
---

#### 22. Zip directory excluding .git and node_modules all the way down (Linux)

## Description

> Notes:

#### code

```sh

#!/bin/bash
TSTAMP=`date '+%Y%m%d-%H%M%S'`
zip -r $1.$TSTAMP.zip $1 -x "**.git/*" -x "**node_modules/*" `shift; echo $@;`

printf "\nCreated: $1.$TSTAMP.zip\n"

####  usage:
####  - zipdir thedir
####  - zip thedir -x "**anotherexcludedsubdir/*"    (important the double quotes to prevent glob expansion)

####  if in windows/git-bash, add 'zip' command this way:
####  https://stackoverflow.com/a/55749636/1482990

```


---
---

#### 23. Delete files containing a certain string

## Description

> Notes:

#### code

```sh
find . | xargs grep -l www.redhat.com | awk '{print "rm "$1}' >  doit.sh
vi doit.sh // check for murphy and his law
source doit.sh

```


---
---

#### 24

## Description

> Notes:

#### code

```sh

#!/bin/sh

####  find ./ | grep -i "\.*$" > files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$"> files
listing="files"

out=""

html="sitemap.html"
out="basename $out.html"
html="sitemap.html"
cmd() {

  echo '  <!DOCTYPE html> '
  echo '<html> '
  echo '<head> '

  echo '  <meta http-equiv="Content-Type" content="text/html"> '

  echo '  <meta name="Author" content="Bryan Guner"> '
  echo '<link rel="stylesheet" href="./assets/prism.css"> '
  echo ' <link rel="stylesheet" href="./assets/style.css"> '
  echo ' <script async defer src="./assets/prism.js"> </script> '

  echo "  <title>  directory </title> "
    echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css"> '
  echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/markdown-to-html-style.css"> '
  echo ""
  echo '<style> '

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
echo '  </style> '
  echo '</head> '

  echo '<body> '

  echo ""

  # continue with the HTML stuff

  echo ""

  echo ""

  echo "<ul> "

  awk '{print "<li> <a href=\""$1"\"> ",$1,"&nbsp;</a> </li> "}' $listing

  # awk '{print "<li> "};

  #  {print " <a href=\""$1"\"> ",$1,"</a> </li> &nbsp;"}' \ $listing

  echo ""

  echo "</ul> "

  echo "</body> "

  echo "</html> "

}

cmd $listing --sort=extension > > $html

```


---
---

#### 25. Index of Iframes

## Description: Creates an index.html file that contains all the files in the working directory or any of it's sub folders as iframes instead of anchor tags

> Notes: Useful Follow up Code:

```sh

```

#### code

```sh

#!/bin/sh

####  find ./ | grep -i "\.*$" > files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$"> files
listing="files"

out=""

html="index.html"
out="basename $out.html"
html="index.html"
cmd() {

  echo '  <!DOCTYPE html> '
  echo '<html> '
  echo '<head> '

  echo '  <meta http-equiv="Content-Type" content="text/html"> '

  echo '  <meta name="Author" content="Bryan Guner"> '
  echo '<link rel="stylesheet" href="./assets/prism.css"> '
  echo ' <link rel="stylesheet" href="./assets/style.css"> '
  echo ' <script async defer src="./assets/prism.js"> </script> '

  echo "  <title>  directory </title> "

  echo ""
  echo '<style> '

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
echo '  </style> '
  echo '</head> '

  echo '<body> '

  echo ""

  # continue with the HTML stuff

  echo ""

  echo ""

  echo "<ul> "

  awk '{print "<iframe  style="-webkit-transform:scale(0.7);-moz-transform-scale(0.7); src=\""$1"\">","</iframe>"}' $listing

  # awk '{print "<li> "};

  #  {print " <a href=\""$1"\"> ",$1,"</a> </li> &nbsp;"}' \ $listing

  echo ""

  echo "</ul> "

  echo "</body> "

  echo "</html> "

}

cmd $listing --sort=extension > > $html

```


---
---

#### 26. Filter Corrupted Git Repo For Troublesome File

## Description

> Notes:

#### code

```sh

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_index.html' HEAD

```


---
---

#### 27. OVERWRITE LOCAL CHANGES

## Description

Important: If you have any local changes, they will be lost. With or without --hard option, any local commits that haven't been pushed will be lost.[*]
If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.

> Notes:
> First, run a fetch to update all origin/<branch> refs to latest:

#### code

```sh

git fetch --all
####  Backup your current branch:

git branch backup-master
####  Then, you have two options:

git reset --hard origin/master
####  OR If you are on some other branch:

git reset --hard origin/<branch_name>
####  Explanation:
####  git fetch downloads the latest from remote without trying to merge or rebase anything.

####  Then the git reset resets the master branch to what you just fetched. The --hard option changes all the files in your working tree to match the files in origin/master
git fetch --all
git reset --hard origin/master

```


---
---

#### 28. Remove Submodules

## Description: To remove a submodule you need to

> Notes:

> Delete the relevant section from the .gitmodules file.
> Stage the .gitmodules changes git add .gitmodules
> Delete the relevant section from .git/config.
> Run git rm --cached path_to_submodule (no trailing slash).
> Run rm -rf .git/modules/path_to_submodule (no trailing slash).
> Commit git commit -m "Removed submodule "
> Delete the now untracked submodule files rm -rf path_to_submodule

#### code

```sh
git submodule deinit
```


---
---

#### 29. GET GISTS

## Description

> Notes:

#### code

```sh
sudo apt install wget

wget -q -O - https://api.github.com/users/bgoonz/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget

wget -q -O - https://api.github.com/users/amitness/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget

wget -q -O - https://api.github.com/users/drodsou/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

wget -q -O - https://api.github.com/users/thomasmb/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

```


---
---

#### 30. Remove Remote OriginL

## Description

> Notes:

#### code

```sh

git remote remove origin

```


---
---

#### 31. just clone .git folder

## Description

> Notes:

#### code

```sh

git clone --bare --branch=master --single-branch https://github.com/bgoonz/My-Web-Dev-Archive.git

```


---
---

#### 32. Undo recent pull request

## Description

> Notes:

#### code

```sh

git reset --hard master@{"10 minutes ago"}

```


---
---

#### 33. Lebab

## Description: ES5 --> ES6

> Notes:

#### code

```sh
####  Safe:

 lebab --replace ./ --transform arrow
 lebab --replace ./ --transform arrow-return
 lebab --replace ./ --transform for-of
 lebab --replace ./ --transform for-each
 lebab --replace ./ --transform arg-rest
 lebab --replace ./ --transform arg-spread
 lebab --replace ./ --transform obj-method
 lebab --replace ./ --transform obj-shorthand
 lebab --replace ./ --transform multi-var

####  ALL:

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
---

#### 34. Troubleshoot Ubuntu Input/Output Error

## Description: Open Powershell as Administrator

> Notes:

#### code

```ps1

 wsl.exe --shutdown

 Get-Service LxssManager | Restart-Service

```


---
---

#### 35. Export Medium as Markdown

## Description

> Notes:

#### code

```sh
npm i mediumexporter -g

mediumexporter https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4 > ds.md

```


---
---

#### 36. Delete files in violation of a given size range (100MB for git)

## Description

> Notes:

#### code

```sh

find . -size +75M -a -print -a -exec rm -f {} \;

find . -size +98M -a -print -a -exec rm -f {} \;

```


---
---

#### 37. download all links of given file type

## Description

> Notes:

#### code

```sh

wget -r -A.pdf https://overapi.com/git

```


---
---

#### 38. Kill all node processes

## Description

> Notes:

#### code

```sh
killall -s KILL node

```


---
---

#### 39. Remove string from file names recursively

## Description: In the example below I am using this command to remove the string "-master" from all file names in the working directory and all of it's sub directories

#### code

```sh
find <mydir>  -type f -exec sed -i 's/<string1> /<string2> /g' {} +

find . -type f -exec rename 's/-master//g' {} +

```

> Notes: The same could be done for folder names by changing the _-type f_ flag (for file) to a _-type d_ flag (for directory)

```sh
find <mydir>  -type d -exec sed -i 's/<string1> /<string2> /g' {} +

find . -type d -exec rename 's/-master//g' {} +

```


---
---

#### 40. Remove spaces from file and folder names recursively

## Description: replaces spaces in file and folder names with an `_` underscore

> Notes: need to run `sudo apt install rename` to use this command

#### code

```sh

find . -name "* *" -type d | rename 's/ /_/g'
find . -name "* *" -type f | rename 's/ /_/g'
```


---
---

#### 41. Zip Each subdirectories in a given directory into their own zip file

## Description

> Notes:

#### code

```sh
for i in */; do zip -r "${i%/}.zip" "$i"; done

```


---
---

#### 90

#### 91. Unzip PowerShell

## Description

> Notes:

#### code

```ps1

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

```


---
---

#### 92. return to bash from zsh

## Description

> Notes:

#### code

```sh
 sudo apt --purge remove zsh

```


---
---

#### 93. Symbolic Link

## Description: to working directory

> Notes:

#### code

```sh

ln -s "$(pwd)" ~/NameOfLink

ln -s "$(pwd)" ~/Downloads

```


---
---

#### 94. auto generate readme

## Description: rename existing readme to blueprint.md

> Notes:

#### code

```sh

npx @appnest/readme generate

```


---
---

#### 95. Log into postgres

## Description

> Notes:

#### code

```sh
sudo -u postgres psql
```

---

## Technologies Used

| URL                  | <https://bgoonz-blog.netlify.app>                        |
| -------------------- | -------------------------------------------------------- |
| Miscellaneous        | webpack ; Prism                                          |
| Widgets              | Facebook ; AddThis                                       |
| Analytics            | Moat ; Google Analytics ; Google Ads Conversion Tracking |
| Comment systems      | Facebook API & REPL.it Database                          |
| Security             | Netlify Access                                           |
| Font scripts         | Google Font API                                          |
| CDN                  | Unpkg ; jsDelivr ; jQuery CDN ; Netlify                  |
| Marketing automation | MailChimp                                                |
| Advertising          | Google AdSense                                           |
| Tag managers         | Google Tag Manager                                       |
| Live chat            | Smartsupp ; LiveChat : Mesibo API                        |
| JavaScript libraries | Lodash ; Dojo ; core-js ; jQuery                         |


---
---

#### 96. URL To Subscribe To YouTube Channel

## Description

> Notes:

#### code

```txt

https://www.youtube.com/channel/UC1HDa0wWnIKUf-b4yY9JecQ?sub_confirmation=1

```


---
---

#### 97. Embed Repl.it In Medium Post

#### code

```txt

https://repl.it/@bgoonz/Data-Structures-Algos-Codebase?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/node-db1-project?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/interview-prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/Database-Prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

```


---
---

#### 98

## Description

> Notes:

#### code

```sh

find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

find . -name *right.html  -type f -exec sed -i 's/target="_parent"//g' {} +

```
