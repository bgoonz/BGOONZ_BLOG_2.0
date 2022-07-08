---
title: Bash Commands Tutorial
weight: 0
excerpt: Here's a list of bash commands that stand between me and insanity.
seo:
    title: 'Bash Commands Tutorial'
    description: 'Bash Commands That Save Me Time and Frustration'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

# Bash Commands That Save Me Time and Frustration

Here's a list of bash commands that stand between me and insanity.

---

### Bash Commands That Save Me Time and Frustration

#### Here's a list of bash commands that stand between me and insanity

[![alt-text](https://camo.githubusercontent.com/22b34f635d2c806b42121947a66b17cb69fe0b64d935cbdeabe81c3bccc74e8e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a77304a3875366a5754696b59565a7a572e6a7067)](https://camo.githubusercontent.com/22b34f635d2c806b42121947a66b17cb69fe0b64d935cbdeabe81c3bccc74e8e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a77304a3875366a5754696b59565a7a572e6a7067)

**This article will be accompanied by the following** [**github repository**](https://github.com/bgoonz/bash-commands-walkthrough) **which will contain all the commands listed as well as folders that demonstrate before and after usage!**

[**bgoonz/bash-commands-walkthrough**\
*to accompany the medium article I am writing. Contribute to bgoonz/bash-commands-walkthrough development by creating an...*github.com](https://github.com/bgoonz/bash-commands-walkthrough 'https://github.com/bgoonz/bash-commands-walkthrough')[](https://github.com/bgoonz/bash-commands-walkthrough)

> The [readme](https://github.com/bgoonz/bash-commands-walkthrough#readme) for this git repo will provide a much more condensed list... whereas this article will break up the commands with explanations... images & links!

**I will include the code examples as both github gists (for proper syntax highlighting) and as code snippets adjacent to said gists so that they can easily be copied and pasted... or ... if you're like me for instance; and like to use an extension to grab the markdown content of a page... the code will be included rather than just a link to the gist!**

[![alt-text](https://camo.githubusercontent.com/a3dd21a18d0fcf7ac3c80b09877c193ba4f84657dcebde6487aea381d9aba9bf/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a336d5f5563514f41794b7449704851366a394a7a5a772e676966)](https://camo.githubusercontent.com/a3dd21a18d0fcf7ac3c80b09877c193ba4f84657dcebde6487aea381d9aba9bf/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a336d5f5563514f41794b7449704851366a394a7a5a772e676966)

### Here's a Cheatsheet

### Getting Started (Advanced Users Skip Section)

---

#### ✔ Check the Current Directory ➡ `pwd`

On the command line, it's important to know the directory we are currently working on. For that, we can use `pwd` command.

[![alt-text](https://camo.githubusercontent.com/ede56713024434b9c0c8008f54475a7f4fcdcd15427580cbc504793e43a15b6d/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a64696d7a4c55726d44493455666576362e676966)](https://camo.githubusercontent.com/ede56713024434b9c0c8008f54475a7f4fcdcd15427580cbc504793e43a15b6d/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a64696d7a4c55726d44493455666576362e676966)

It shows that I'm working on my Desktop directory.

#### ✔ Display List of Files ➡ `ls`

To see the list of files and directories in the current directory use `ls` command in your CLI.

[![alt-text](https://camo.githubusercontent.com/e9cfe3bfa6f8d2ff3cc9f7959a7896facb58708e7e707d012ad989edb589b6ec/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a48487a56724b324374545077546459542e676966)](https://camo.githubusercontent.com/e9cfe3bfa6f8d2ff3cc9f7959a7896facb58708e7e707d012ad989edb589b6ec/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a48487a56724b324374545077546459542e676966)

Shows all of my files and directories of my Desktop directory.

-   To show the contents of a directory pass the directory name to the `ls` command i.e. `ls directory_name`.
-   Some useful `ls` command options:-

OptionDescriptionls -alist all files including hidden file starting with '.'ls -llist with the long formatls -lalist long format including hidden files

#### ✔ Create a Directory ➡ `mkdir`

We can create a new folder using the `mkdir` command. To use it type `mkdir folder_name`.

[![alt-text](https://camo.githubusercontent.com/8c10a898b8f52be59dc0723ab2dd0784c22c12a325ffe5cc64a38f07341ef90e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a6d33644479433976524a42555a5378522e676966)](https://camo.githubusercontent.com/8c10a898b8f52be59dc0723ab2dd0784c22c12a325ffe5cc64a38f07341ef90e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a6d33644479433976524a42555a5378522e676966)

Use `ls` command to see the directory is created or not.

I created a cli-practice directory in my working directory i.e. Desktop directory.

#### ✔ Move Between Directories ➡ `cd`

It's used to change directory or to move other directories. To use it type `cd directory_name`.

[![alt-text](https://camo.githubusercontent.com/d78e325dda59d59be4bd151dd85d3b1966324cb205da2eb540f1372e8195b280/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a33344b4778543247386f4e4d446e49632e676966)](https://camo.githubusercontent.com/d78e325dda59d59be4bd151dd85d3b1966324cb205da2eb540f1372e8195b280/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a33344b4778543247386f4e4d446e49632e676966)

Can use `pwd` command to confirm your directory name.

Changed my directory to the cli-practice directory. And the rest of the tutorial I'm gonna work within this directory.

#### ✔ Parent Directory ➡ `..`

We have seen `cd` command to change directory but if we want to move back or want to move to the parent directory we can use a special symbol `..` after `cd` command, like `cd ..`

#### ✔ Create Files ➡ `touch`

We can create an empty file by typing `touch file_name`. It's going to create a new file in the current directory (the directory you are currently in) with your provided name.

[![alt-text](https://camo.githubusercontent.com/97e82f91cb8cfcf342cf97e8b572b49d1bc264cbe9929c7e23d0f72589d6708d/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a78753177747637674a324e4d765036302e676966)](https://camo.githubusercontent.com/97e82f91cb8cfcf342cf97e8b572b49d1bc264cbe9929c7e23d0f72589d6708d/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a78753177747637674a324e4d765036302e676966)

I created a hello.txt file in my current working directory. Again you can use `ls` command to see the file is created or not.

Now open your hello.txt file in your text editor and write _Hello Everyone!_ into your hello.txt file and save it.

#### ✔ Display the Content of a File ➡ `cat`

We can display the content of a file using the `cat` command. To use it type `cat file_name`.

[![alt-text](https://camo.githubusercontent.com/ffe71e48a1a9bd9b118265c18a81e0b49a515cf40453416134dfca52567bb82c/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a694b6635773951464e43654c527638612e676966)](https://camo.githubusercontent.com/ffe71e48a1a9bd9b118265c18a81e0b49a515cf40453416134dfca52567bb82c/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a694b6635773951464e43654c527638612e676966)

Shows the content of my hello.txt file.

#### ✔ Move Files & Directories ➡ `mv`

To move a file and directory, we use `mv` command.

By typing `mv file_to_move destination_directory`, you can move a file to the specified directory.

By entering `mv directory_to_move destination_directory`, you can move all the files and directories under that directory.

Before using this command, we are going to create two more directories and another txt file in our cli-practice directory.

`mkdir html css touch bye.txt`

[![alt-text](https://camo.githubusercontent.com/7197994733b63ae597fb12ba8c29509ed3c714f274d4e51542c64a942c069336/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a70696141517a5f4d51707a6f374450482e676966)](https://camo.githubusercontent.com/7197994733b63ae597fb12ba8c29509ed3c714f274d4e51542c64a942c069336/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a70696141517a5f4d51707a6f374450482e676966)

Yes, we can use multiple directories & files names one after another to create multiple directories & files in one command.

[![alt-text](https://camo.githubusercontent.com/5db5a79472f5bffa91c5bfd8c892437523b68072d930c7b4334c8b622ecb55de/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a356a6d6a5f5a794e7a34364775514b7a2e676966)](https://camo.githubusercontent.com/5db5a79472f5bffa91c5bfd8c892437523b68072d930c7b4334c8b622ecb55de/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a356a6d6a5f5a794e7a34364775514b7a2e676966)

Moved my bye.txt file into my css directory and then moved my css directory into my html directory.

#### ✔ Rename Files & Directories ➡ `mv`

`mv` command can also be used to rename a file and a directory.

You can rename a file by typing `mv old_file_name new_file_name` & also rename a directory by typing `mv old_directory_name new_directory_name`.

[![alt-text](https://camo.githubusercontent.com/3feb1289a79b907796c1d736e119730dc3d2dbcd60c6ba072ee226cc8cb69b75/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a575456753164643667722d6e6d5768442e676966)](https://camo.githubusercontent.com/3feb1289a79b907796c1d736e119730dc3d2dbcd60c6ba072ee226cc8cb69b75/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a575456753164643667722d6e6d5768442e676966)

Renamed my hello.txt file to the hi.txt file and html directory to the folder directory.

#### ✔ Copy Files & Directories ➡ `cp`

To do this, we use the `cp` command.

-   You can copy a file by entering `cp file_to_copy new_file_name`.

[![alt-text](https://camo.githubusercontent.com/9b67b2ef374ba0f1457b24007824ea5b65ca861a100397322d1a13f30a70818f/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a6b434c56744b4e396f4b5062486652462e676966)](https://camo.githubusercontent.com/9b67b2ef374ba0f1457b24007824ea5b65ca861a100397322d1a13f30a70818f/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a6b434c56744b4e396f4b5062486652462e676966)

Copied my hi.txt file content into hello.txt file. For confirmation open your hello.txt file in your text editor.

-   You can also copy a directory by adding the `-r` option, like `cp -r directory_to_copy new_directory_name`.

_The_ `-r` _option for "recursive" means that it will copy all of the files including the files inside of subfolders._

[![alt-text](https://camo.githubusercontent.com/b914824b683c77cb019300487919155d05a805fb82b0a743ecdce67fd22bab55/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a4d6e6d7a4d69696f495943754b3932422e676966)](https://camo.githubusercontent.com/b914824b683c77cb019300487919155d05a805fb82b0a743ecdce67fd22bab55/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a4d6e6d7a4d69696f495943754b3932422e676966)

Here I copied all of the files from the folder to folder-copy.

#### ✔ Remove Files & Directories ➡ `rm`

To do this, we use the `rm` command.

-   To remove a file, you can use the command like `rm file_to_remove`.

[![alt-text](https://camo.githubusercontent.com/e35ef5a179966ed8271639d381b997455862bb77794f0b8c219f7ffada7168da/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a6f68436d6474686439325f4841365a652e676966)](https://camo.githubusercontent.com/e35ef5a179966ed8271639d381b997455862bb77794f0b8c219f7ffada7168da/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a6f68436d6474686439325f4841365a652e676966)

Here I removed my hi.txt file.

-   To remove a directory, use the command like `rm -r directory_to_remove`.

[![alt-text](https://camo.githubusercontent.com/5622af09767bfd626db8e52f5e040afeaf16be692b75a3069f7b01d74c1c4ee6/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a766f44627a7753707732344132526a512e676966)](https://camo.githubusercontent.com/5622af09767bfd626db8e52f5e040afeaf16be692b75a3069f7b01d74c1c4ee6/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a766f44627a7753707732344132526a512e676966)

I removed my folder-copy directory from my cli-practice directory i.e. current working directory.

#### ✔ Clear Screen ➡ `clear`

Clear command is used to clear the terminal screen.

#### ✔ Home Directory ➡ `~`

The Home directory is represented by `~`. The Home directory refers to the base directory for the user. If we want to move to the Home directory we can use `cd ~` command. Or we can only use `cd` command.

---

### MY COMMANDS

### 1.) Recursively unzip zip files and then delete the archives when finished

**here is a** [**folde**](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/1-recursive-unzip)**r containing the before and after... I had to change folder names slightly due to a limit on the length of file-paths in a github repo.**

```
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

find . -name "*.zip" -type f -print -delete

```

---

### 2.) Install node modules recursively

```
npm i -g recursive-install

npm-recursive-install

```

---

### 3.) Clean up unnecessary files/folders in git repo

```
find . -empty -type f -print -delete #Remove empty files

# -------------------------------------------------------
find . -empty -type d -print -delete #Remove empty folders

# -------------------------------------------------------

# This will remove .git folders...    .gitmodule files as well as .gitattributes and .gitignore files.

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

# -------------------------------------------------------

# This will remove the filenames you see listed below that just take up space if a repo has been downloaded for use exclusively in your personal file system (in which case the following files just take up space)# Disclaimer... you should not use this command in a repo that you intend to use with your work as it removes files that attribute the work to their original creators!

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

```

#### In Action

The following output from my bash shell corresponds to the directory:

[**bgoonz/bash-commands-walkthrough**\
*Deployment github-pages Navigation Big O notation is the language we use for talking about how long an algorithm takes...*github.com](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master 'https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master')[](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master)

#### which was created by running the aforementioned commands in in a perfect copy of this directory

[**bgoonz/DS-ALGO-OFFICIAL**\
*Deployment github-pages Navigation Big O notation is the language we use for talking about how long an algorithm takes...*github.com](https://github.com/bgoonz/DS-ALGO-OFFICIAL 'https://github.com/bgoonz/DS-ALGO-OFFICIAL')[](https://github.com/bgoonz/DS-ALGO-OFFICIAL)

> **.....below is the terminal output for the following commands:**

```
pwd
/mnt/c/Users/bryan/Downloads/bash-commands/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master

```

> **After printing the working directory for good measure:**

```
find . -empty -type f -print -delete

```

> **The above command deletes empty files recursively starting from the directory in which it was run:**

```
./CONTENT/DS-n-Algos/File-System/file-utilities/node_modules/line-reader/test/data/empty_file.txt
./CONTENT/DS-n-Algos/_Extra-Practice/free-code-camp/nodejs/http-collect.js
./CONTENT/Resources/Comments/node_modules/mime/.npmignore
./markdown/tree2.md
./node_modules/loadashes6/lodash/README.md
./node_modules/loadashes6/lodash/release.md
./node_modules/web-dev-utils/Markdown-Templates/Markdown-Templates-master/filled-out-readme.md
|01:33:16|bryan@LAPTOP-9LGJ3JGS:[DS-ALGO-OFFICIAL-master] DS-ALGO-OFFICIAL-master_exitstatus:0[╗___________o>

```

> **The command seen below deletes empty folders recursively starting from the directory in which it was run:**

```
find . -empty -type d -print -delete

```

> The resulting directories....

```
|01:33:16|bryan@LAPTOP-9LGJ3JGS:[DS-ALGO-OFFICIAL-master] DS-ALGO-OFFICIAL-master_exitstatus:0[╗___________o>

find . -empty -type d -print -delete
./.git/branches
./.git/objects/info
./.git/refs/tags
|01:33:31|bryan@LAPTOP-9LGJ3JGS:[DS-ALGO-OFFICIAL-master] DS-ALGO-OFFICIAL-master_exitstatus:0[╗___________o>

```

> **The command seen below deletes .git folders as well as .gitignore, .gitattributes, .gitmodule files**

```
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

```

**The command seen below deletes most SECURITY, RELEASE, CHANGELOG, LICENSE, CONTRIBUTING, & HISTORY files that take up pointless space in repo's you wish to keep exclusively for your own reference.**

### !!!Use with caution as this command removes the attribution of the work from it's original authors

[![!!!Use with caution as this command removes the attribution of the work from it's original authors!!!!!](https://camo.githubusercontent.com/ea68eea425581d8683031170810ceb578f8bafb975c1d5323100965dd912a3fa/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a72356447687462655a3456644f353455)](https://camo.githubusercontent.com/ea68eea425581d8683031170810ceb578f8bafb975c1d5323100965dd912a3fa/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a72356447687462655a3456644f353455)

!!!Use with caution as this command removes the attribution of the work from it's original authors!!!!!find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

---

### 4.) Generate index.html file that links to all other files in working directory

```
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
  awk '{print "<li>
<a href=\""$1"\">",$1,"&nbsp;</a>
</li>"}' $listing
  # awk '{print "<li>"};
  #  {print " <a href=\""$1"\">",$1,"</a>
</li>&nbsp;"}' \ $listing
  echo ""
  echo "</ul>"
  echo "</body>"
  echo "</html>"
}
cmd $listing --sort=extension >>$html

```

#### In Action

**I will use this copy of my Data Structures Practice Site to demonstrate the result:**

[**side-projects-42/DS-Bash-Examples-Deploy**\
*Deployment github-pages Navigation Big O notation is the language we use for talking about how long an algorithm takes...*github.com](https://github.com/side-projects-42/DS-Bash-Examples-Deploy 'https://github.com/side-projects-42/DS-Bash-Examples-Deploy')[](https://github.com/side-projects-42/DS-Bash-Examples-Deploy)

[![alt-text](https://camo.githubusercontent.com/0f97bdb9d1167b14f340044bcdca3eb0472acc4c80dcc9c1db4f13ad6900bf20/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a5075754454557669583547366d6a612d35654b5549772e706e67)](https://camo.githubusercontent.com/0f97bdb9d1167b14f340044bcdca3eb0472acc4c80dcc9c1db4f13ad6900bf20/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a5075754454557669583547366d6a612d35654b5549772e706e67)

#### The result is a index.html file that contains a list of links to each file in the directory

> here is a link to and photo of the resulting html file:

[**index.html**\
*CONTENT/DS-n-Algos/*quirky-meninsky-4181b5.netlify.app](https://quirky-meninsky-4181b5.netlify.app/ 'https://quirky-meninsky-4181b5.netlify.app/')[](https://quirky-meninsky-4181b5.netlify.app/)

[![alt-text](https://camo.githubusercontent.com/ce04a06e4fc2c23c62fd6a9dbea96125b5920b8c53a1c62434325989768cd1a7/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a414f5962577655474e39794a3463654e7a41474773772e706e67)](https://camo.githubusercontent.com/ce04a06e4fc2c23c62fd6a9dbea96125b5920b8c53a1c62434325989768cd1a7/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a414f5962577655474e39794a3463654e7a41474773772e706e67)

---

### 5.) Download all links to a files of a specified extension on a user provided (url) webpage

```
wget -r -A.pdf https://overapi.com/gitwget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off

```

> The result is stored in [this directory:](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/5-download-all-pdf)

[![alt-text](https://camo.githubusercontent.com/02861c1b49280db7ab6c017bc4dc93f0d22b7385e2b33e2154fc3e734b1da3c7/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a38657656504f5f7a2d5f5441547a6b634454703135512e706e67)](https://camo.githubusercontent.com/02861c1b49280db7ab6c017bc4dc93f0d22b7385e2b33e2154fc3e734b1da3c7/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a38657656504f5f7a2d5f5441547a6b634454703135512e706e67)

---

### 6.)Recursively remove lines of text containing the string badFolder from files in the working directory

```
find . -type f -exec sed -i '/badFolder/d' ./* {} \;

# OR

find . -name 'result.md'  -type f -exec sed -i '/badFolder/d' ./* {} \;

```

**As an example I will run this command on a file containing the text:**

```
Hacks Blog

Read more at hacks.mozilla.org

badFolder

badFolder Implementing Private Fields for JavaScript

When implementing a language feature for JavaScript, an implementer must make decisions about how the language in the specification maps to the implementation. Private fields is an example of where the specification language and implementation reality diverge, at least in SpiderMonkey-- the JavaScript engine which powers Firefox. To understand more, I'll explain what private fields are, a couple of models for thinking about them, and explain why our implementation diverges from the specification language.The post Implementing Private Fields for JavaScript appeared first on Mozilla Hacks - the Web developer blog.

Posted Tuesday, June 8, 2021 by Matthew Gaudet

Looking fine with Firefox 89

Firefox 89 has smartened up and brings with it a slimmed-down, slightly more minimalist interface.badFolder Along with this new look, we get some great styling features including a force-colours feature for media queries and better control over how fonts are displayed. The long-awaited top-level await keyword for JavaScript modules is now enabled, as well as the PerformanceEventTiming interface, which is another addition to the performance suite of APIs: 89 really has been working out!The post Looking fine with Firefox 89 appeared first on Mozilla Hacks - the Web developer blog.

badFolder

Posted Tuesday, June 1, 2021 by Chris Mills

badFolder

Improving Firefox stability on Linux

Roughly a year ago at Mozilla we started an effort to improve Firefox stability on Linux. This effort quickly became an example of good synergies between FOSS projects.The post Improving Firefox stability on Linux appeared first on Mozilla Hacks - the Web developer blog.

Posted Wednesday, May 19, 2021 by Gabriele Svelto badFolder

Introducing Firefox's new Site Isolation Security Architecture

Like any web browser, Firefox loads code from untrusted and potentially hostile websites and runs it on your computer. To protect you against new types of attacks from malicious sites and to meet the security principles of Mozilla, we set out to redesign Firefox on desktop.The post Introducing Firefox's new Site Isolation Security Architecture appeared first on Mozilla Hacks - the Web developer blog.

Posted Tuesday, May 18, 2021 by Anny Gakhokidze

Pyodide Spin Out and 0.17 Release

We are happy to announce that Pyodide has become an independent and community-driven project. We are also pleased to announce the 0.17 release for Pyodide with many new features and improvements. Pyodide consists of the CPython 3.8 interpreter compiled to WebAssembly which allows Python to run in the browser.The post Pyodide Spin Out and 0.17 Release appeared first on Mozilla Hacks - the Web developer blog. badFolder

Posted Thursday, April 22, 2021 by Teon Brooks

```

**_I modified the command slightly to apply only to files called 'result.md':_**

> The result is :

```
Hacks Blog

Read more at hacks.mozilla.org

When implementing a language feature for JavaScript, an implementer must make decisions about how the language in the specification maps to the implementation. Private fields is an example of where the specification language and implementation reality diverge, at least in SpiderMonkey-- the JavaScript engine which powers Firefox. To understand more, I'll explain what private fields are, a couple of models for thinking about them, and explain why our implementation diverges from the specification language.The post Implementing Private Fields for JavaScript appeared first on Mozilla Hacks - the Web developer blog.

Posted Tuesday, June 8, 2021 by Matthew Gaudet

Looking fine with Firefox 89

Posted Tuesday, June 1, 2021 by Chris Mills

Improving Firefox stability on Linux

Roughly a year ago at Mozilla we started an effort to improve Firefox stability on Linux. This effort quickly became an example of good synergies between FOSS projects.The post Improving Firefox stability on Linux appeared first on Mozilla Hacks - the Web developer blog.

Introducing Firefox's new Site Isolation Security Architecture

Like any web browser, Firefox loads code from untrusted and potentially hostile websites and runs it on your computer. To protect you against new types of attacks from malicious sites and to meet the security principles of Mozilla, we set out to redesign Firefox on desktop.The post Introducing Firefox's new Site Isolation Security Architecture appeared first on Mozilla Hacks - the Web developer blog.

Posted Tuesday, May 18, 2021 by Anny Gakhokidze

Pyodide Spin Out and 0.17 Release

Posted Thursday, April 22, 2021 by Teon Brooks

```

[![alt-text](https://camo.githubusercontent.com/4308e370c8f20afdfd06a497dcd7eb257b61b498a18c23a3c9584675b38b1a10/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a55703561732d4d6b4863486276495f715831417150772e706e67)](https://camo.githubusercontent.com/4308e370c8f20afdfd06a497dcd7eb257b61b498a18c23a3c9584675b38b1a10/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a55703561732d4d6b4863486276495f715831417150772e706e67)

**the test.txt and result.md files can be found here:**

[**bgoonz/bash-commands-walkthrough**\
*to accompany the medium article I am writing. Contribute to bgoonz/bash-commands-walkthrough development by creating an...*github.com](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/6-remove-lines-contaning-bad-text 'https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/6-remove-lines-contaning-bad-text')[](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/6-remove-lines-contaning-bad-text)

---

### 7.) Execute command recursively

**Here I have modified the command I wish to run recursively to account for the fact that the 'find' command already works recursively, by appending the -maxdepth 1 flag...**

> **I am essentially removing the recursive action of the find command...**

**That way, if the command affects the more deeply nested folders we know the outer RecurseDirs function we are using to run the _find/pandoc_ line once in every subfolder of the working directory... is working properly!**

[![alt-text](https://camo.githubusercontent.com/b514da1e3cfcfeda7a09f9d691618ee89526a7ebe8ded7dd7140a5c88f5f9d3e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3630302f312a35435f757a4c6e7543536c5469696f693245746e55412e706e67)](https://camo.githubusercontent.com/b514da1e3cfcfeda7a09f9d691618ee89526a7ebe8ded7dd7140a5c88f5f9d3e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3630302f312a35435f757a4c6e7543536c5469696f693245746e55412e706e67)

**Run in the folder shown to the left... we would expect every .md file to be accompanied by a newly generated html file by the same name.**

**The results of said operation can be found in the** [**following directory**](https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/7-recursive-run)

#### In Action

🢃 Below 🢃

[![alt-text](https://camo.githubusercontent.com/5f6bdf3692deea17ec807a6bb770b7474de94190813abae568dde34f9f8b5422/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a6b39633151524b593037544c4a6e7039536538396c512e676966)](https://camo.githubusercontent.com/5f6bdf3692deea17ec807a6bb770b7474de94190813abae568dde34f9f8b5422/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a6b39633151524b593037544c4a6e7039536538396c512e676966)

#### The final result is

[![alt-text](https://camo.githubusercontent.com/1d5d06c2c92fbb7a3f42080beacb2ae8e3e0e9887220cfe81ba851eff627c753/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a6a71726a4e654275526d5472447433766d5135304c512e706e67)](https://camo.githubusercontent.com/1d5d06c2c92fbb7a3f42080beacb2ae8e3e0e9887220cfe81ba851eff627c753/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313230302f312a6a71726a4e654275526d5472447433766d5135304c512e706e67)

_If you want to run any bash script recursively all you have to do is substitue out line #9 with the command you want to run once in every sub-folder._

```
function RecurseDirs ()
{
    oldIFS=$IFS
    IFS=$'\n'
    for f in "$@"
    do

#Replace the line below with your own command!

#find ./ -iname "*.md" -maxdepth 1 -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

#####################################################
# YOUR CODE BELOW!

#####################################################

if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS
}
RecurseDirs "./"

```

---

### TBC

**Here are some of the other commands I will cover in greater detail... at a later time:**

### 9\. Copy any text between <script> tags in a file called example.html to be inserted into a new file: out.js

```
sed -n -e '/<script>/,/<\/script>/p' example.html >out.js

```

---

### 10\. Recursively Delete node_modules folders

```
find . -name 'node_modules' -type d -print -prune -exec rm -rf '{}' +

```

---

### 11\. Sanatize file and folder names to remove illegal characters and reserved words

```
sanitize() {
  shopt -s extglob;

  filename=$(basename "$1")
  directory=$(dirname "$1")

  filename_clean=$(echo "$filename" | sed -e 's/[\\/:\*\?"<>\|\x01-\x1F\x7F]//g' -e 's/^\(nul\|prn\|con\|lpt[0-9]\|com[0-9]\|aux\)\(\.\|$\)//i' -e 's/^\.*$//' -e 's/^$/NONAME/')

  if (test "$filename" != "$filename_clean")
  then
    mv -v "$1" "$directory/$filename_clean"
  fi
}

export -f sanitize

sanitize_dir() {
  find "$1" -depth -exec bash -c 'sanitize "$0"' {} \;

}

sanitize_dir '/path/to/somewhere'

```

---

### 12\. Start postgresql in terminal

```
sudo -u postgres psql

```

---

### 13\. Add closing body and script tags to each html file in working directory

```
for f in * ; do
  mv "$f" "$f.html"
doneecho "<form>
 <input type="button" value="Go back!" onclick="history.back()">
</form>
  </body>
</html>" | tee -a *.html

```

---

### 14\. Batch Download Videos

```
#!/bin/bash

link="#insert url here#"
#links were a set of strings with just the index of the video as the variable

num=3
#first video was numbered 3 - weird.

ext=".mp4"

while [ $num -le 66 ]
do
      wget $link$num$ext -P ~/Downloads/
      num=$(($num+1))
done

```

---

### 15\. Change File Extension from '.txt' to .doc for all files in working directory

```
sudo apt install rename

rename 's/\.txt$/.doc/' *.txt

```

### 16\. Recursivley change any file with extension .js.download to .js

```
find . -name "*.\.js\.download" -exec rename 's/\.js\.download$/.js/' '{}' +

```

---

### 17\. Copy folder structure including only files of a specific extension into an ouput Folder

```
find . -name '*.md' | cpio -pdm './../outputFolder'

```

---

### Discover More

[**Web-Dev-Hub**\
*Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of...*bgoonz-blog.netlify.app](https://bgoonz-blog.netlify.app/ 'https://bgoonz-blog.netlify.app/')[](https://bgoonz-blog.netlify.app/)

### Part 2 of this series

[**Medium**\
_Continued!!!medium.com_](https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682 'https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682')[](https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682)

---

By [Bryan Guner](https://medium.com/@bryanguner) on [June 29, 2021](https://medium.com/p/920fb6ab9d0a).

[Canonical link](https://medium.com/@bryanguner/bash-commands-that-save-time-920fb6ab9d0a)

Exported from [Medium](https://medium.com/) on July 13, 2021.

[view raw](https://gist.github.com/bgoonz/674c3f169d75d5ab9453d4c7ffbdd821/raw/6df51b57737eabd32d1c68c57e110600f471619a/Bash-Comma.md)[Bash-Comma.md](https://gist.github.com/bgoonz/674c3f169d75d5ab9453d4c7ffbdd821#file-bash-comma-md) hosted with ❤ by [GitHub](https://github.com/)

# Basic Web Development Environment Setup

Windows Subsystem for Linux (WSL) and Ubuntu

---

### Basic Web Development Environment Setup

#### Windows Subsystem for Linux (WSL) and Ubuntu

[![alt-text](https://camo.githubusercontent.com/305c753492ee50b499a95b10c6a817c07821f73ff6c734b45b073b8a7aeafebd/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a61714b503164724e486d4e6d33347a7a2e6a7067)](https://camo.githubusercontent.com/305c753492ee50b499a95b10c6a817c07821f73ff6c734b45b073b8a7aeafebd/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a61714b503164724e486d4e6d33347a7a2e6a7067)

Test if you have Ubuntu installed by typing "Ubuntu" in the search box in the bottom app bar that reads "Type here to search". If you see a search result that reads **"Ubuntu 20.04 LTS"** with "App" under it, then you have it installed.

1. In the application search box in the bottom bar, type "PowerShell" to find the application named "Windows PowerShell"
2. Right-click on "Windows PowerShell" and choose "Run as administrator" from the popup menu
3. In the blue PowerShell window, type the following: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
4. Restart your computer
5. In the application search box in the bottom bar, type "Store" to find the application named "Microsoft Store"
6. Click "Microsoft Store"
7. Click the "Search" button in the upper-right corner of the window
8. Type in "Ubuntu"
9. Click "Run Linux on Windows (Get the apps)"
10. Click the orange tile labeled **"Ubuntu"** Note that there are 3 versions in the Microsoft Store... you want the one just entitled 'Ubuntu'
11. Click "Install"
12. After it downloads, click "Launch"
13. If you get the option, pin the application to the task bar. Otherwise, right-click on the orange Ubuntu icon in the task bar and choose "Pin to taskbar"
14. When prompted to "Enter new UNIX username", type your first name with no spaces
15. When prompted, enter and retype a password for this UNIX user (it can be the same as your Windows password)
16. Confirm your installation by typing the command `whoami 'as in who-am-i'`followed by Enter at the prompt (it should print your first name)
17. You need to update your packages, so type `sudo apt update` (if prompted for your password, enter it)
18. You need to upgrade your packages, so type `sudo apt upgrade` (if prompted for your password, enter it)

### Git

Git comes with Ubuntu, so there's nothing to install. However, you should configure it using the following instructions.

‌Open an Ubuntu terminal if you don't have one open already.

1. You need to configure Git, so type `git config --global user.name "Your Name"` with replacing "Your Name" with your real name.
2. You need to configure Git, so type `git config --global user.email your@email.com` with replacing "[](mailto:your@email.com)<your@email.com>" with your real email.

**Note: if you want git to remember your login credentials type:**

```
git config --global credential.helper store

```

### Google Chrome

Test if you have Chrome installed by typing "Chrome" in the search box in the bottom app bar that reads "Type here to search". If you see a search result that reads "Chrome" with "App" under it, then you have it installed. Otherwise, follow these instructions to install Google Chrome.

1. Open Microsoft Edge, the blue "e" in the task bar, and type in [](http://chrome.google.com/)[http://chrome.google.com](http://chrome.google.com/). Click the "Download Chrome" button. Click the "Accept and Install" button after reading the terms of service. Click "Save" in the "What do you want to do with ChromeSetup.exe" dialog at the bottom of the window. When you have the option to "Run" it, do so. Answer the questions as you'd like. Set it as the default browser.
2. Right-click on the Chrome icon in the task bar and choose "Pin to taskbar".

### Node.js

Test if you have Node.js installed by opening an Ubuntu terminal and typing `node --version`. If it reports "Command 'node' not found", then you need to follow these directions.

1. In the Ubuntu terminal, type `sudo apt update` and press Enter
2. In the Ubuntu terminal, type `sudo apt install build-essential` and press Enter
3. In the Ubuntu terminal, type `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash` and press Enter
4. In the Ubuntu terminal, type `. ./.bashrc` and press Enter
5. In the Ubuntu terminal, type `nvm install --lts` and press Enter
6. Confirm that **node** is installed by typing `node --version` and seeing it print something that is not "Command not found"!

### Unzip

You will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

‌In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

‌Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing `which mocha`. If it prints a path, then you're good. Otherwise, if it prints nothing, install Mocha.js by typing `npm install -g mocha`.

### Python 3

Ubuntu does not come with Python 3. Install it using the command `sudo apt install python3`. Test it by typing `python3 --version` and seeing it print a number.

### Note about WSL

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open. So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

‌
