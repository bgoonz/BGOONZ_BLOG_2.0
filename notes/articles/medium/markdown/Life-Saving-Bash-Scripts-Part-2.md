Life Saving Bash Scripts Part 2
===============================

I am not saying they’re in any way special compared with other bash scripts… but when I consider that you can never recover time spent… the…

------------------------------------------------------------------------

### Life Saving Bash Scripts Part 2

#### I am not saying they’re in any way special compared with other bash scripts… but when I consider that you can never recover time spent… the value of these commands in my life quickly becomes incalculable!

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aWKygEnTVdHuulB4.gif" class="graf-image" /></figure>Below the following 20 commands I will include <a href="https://gist.github.com/bgoonz/2d2314216d337a69b31bcb5a8880ade7" class="markup--anchor markup--pullquote-anchor">the gist files</a> so you can download these commands all at once as well as see them syntax highlighted but I decided to include them as plain code blocks for the ease with which they can be copied and pasted as well as detected by the web crawlers of various search engines (it could be the case that it has no affect on seo… but that’s a chance I don’t have to take).

------------------------------------------------------------------------

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### Part 2 of this series is the infinitely more comprehensive part 1 of the series:

<a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a"><strong>Bash Commands That Save Me Time and Frustration (Part 1)</strong><br />
<em>Here’s a list of bash commands that stand between me and insanity.</em>medium.com</a><a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Update (more practical commands):

Find files that have been modified on your system in the past 60 minutes

    find / -mmin 60 -type f

Find all files larger than 20M

    find / -type f -size +20M

Find duplicate files (based on MD5 hash)

    find -type f -exec md5sum '{}' ';' | sort | uniq --all-repeated=separate -w 33

Change permission only for files

    cd /var/www/site && find . -type f -exec chmod 766 {} \;
    cd /var/www/site && find . -type f -exec chmod 664 {} +

Change permission only for directories

    cd /var/www/site && find . -type d -exec chmod g+x {} \;
    cd /var/www/site && find . -type d -exec chmod g+rwx {} +

Find files and directories for specific user/group

    # User:
    find . -user <username> -print
    find /etc -type f -user <username> -name "*.conf"

    # Group:
    find /opt -group <group>
    find /etc -type f -group <group> -iname "*.conf"

Find files and directories for all without specific user/group

    # User:
    find . \! -user <username> -print

    # Group:
    find . \! -group <group>

Looking for files/directories that only have certain permission

    # User
    find . -user <username> -perm -u+rw # -rw-r--r--
    find /home -user $(whoami) -perm 777 # -rwxrwxrwx

    # Group:
    find /home -type d -group <group> -perm 755 # -rwxr-xr-x

Delete older files than 60 days

    find . -type f -mtime +60 -delete

Recursively remove all empty sub-directories from a directory

    find . -depth  -type d  -empty -exec rmdir {} \;

How to find all hard links to a file

    find </path/to/dir> -xdev -samefile filename

Recursively find the latest modified files

    find . -type f -exec stat --format '%Y :%y %n' "{}" \; | sort -nr | cut -d: -f2- | head

Recursively find/replace of a string with sed

    find . -not -path '*/\.git*' -type f -print0 | xargs -0 sed -i 's/foo/bar/g'

Recursively find/replace of a string in directories and file names

    find . -depth -name '*test*' -execdir bash -c 'mv -v "$1" "${1//foo/bar}"' _ {} \;

Recursively find suid executables

    find / \( -perm -4000 -o -perm -2000 \) -type f -exec ls -la {} \;

------------------------------------------------------------------------

### Update \#2:

    $ find -type f -exec grep -q "foo" {} \; -exec echo rm -- {} \;

This recursively searches for files containing `foo`. The second `-exec` is only run if the first `exec` exits successfully, i.e. if `grep` matches. Dryrun and remove the `echo` if the output seems correct.

Or alternatively

    $ find -type f -exec grep -q "foo" {} \; -print

and

    $ find -type f -exec grep -q "foo" {} \; -delete

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 1.) Sanitize Directory:

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

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 2.)Recursively Delete Node Modules:

    find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 3.)Remove trailing whitespace from filenames:

    rename  's/ *$//' *

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 4.)Remove string from file name:

    for filename in *badString*; do mv "$filename" "${filename//badstring/replaceString}"; done

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 5.)Remove whitespace from filenames:

    for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 6.) Remove &lt;script&gt; tags from html and the content in-between them.

    sed -n -e '/<script>/,/<\/script>/p' example.html >out.js

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 7.) Remove Invalid characters from file:

    for f in */; do nf=$(echo "$f" |sed -e 's/[^A-Za-z0-9.]/./g' -e 's/\.\.\././g' -e 's/\.\././g' -e 's/\.*$//'); test "$f" != "$nf" && mv "$f" "$nf" && echo "$nf"; done

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 8.) Remember Git Credentials For Future Login:

    git config --global credential.helper store

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 9.)Recursive npm install:

    npm i -g recursive-install

    npm-recursive-install

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 10.)Generate Numbered Folders:

    n=1;
    max=50;
    while [ "$n" -le "$max" ]; do
      mkdir "s$n"
      n=`expr "$n" + 1`;
    done

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 11.) Traverse Directories recursivley and delete files who’s name match a specified string:

    find . -type f -exec sed -i '/badFolder/d' ./* {} \;

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 12.) recursivley remove empty files:

    find . -empty -type f -print -delete

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 13.)recursively remove empty folders

    find . -empty -type d -print -delete

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 14.) Remove a string from files of a certain extension or group of extensions:

    find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -a -exec sed -i  '/BADSTRING/d' '{}' +

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 15.) Recursively remove from all html files any lines containing the string “badText”

    find . -type f -exec sed -i '/badText/d' ./*.html {} \;

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 16.) List the path of all html files in directory… (or any other file extension):

    find ./ | grep -i "\.html*$"
    ls -R './' | awk '
    /:$/&&f{s=$0;f=0}
    /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
    NF&&f{ print s"/"$0 }'>listing.md

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 17.) Delete files over 75MB (to avoid tripping github LFS rules).

    find . -size +75M -a -print -a -exec rm -f {} \;

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 18.) Populate each folder with a dummy deleteme.txt file recursively:

    for x in "./"/*/; do
      (cd "$x"
       files=(*)
       printf '%s\n' "${files[@]}" > deleteme.txt
      )
    done

<span class="graf-dropCap">P</span>ANDOC

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 19.) Convert from Markdown==⇒ HTML

    find ./ -iname “*.md” -type f -exec sh -c ‘pandoc — standalone “${0}” -o “${0%.md}.html”’ {} \;

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### 20.) Convert from HTML ==⇒ Markdown

    find ./ -iname “*.html” -type f -exec sh -c ‘pandoc — wrap=none — from html — to markdown_strict “${0}” -o “${0%.html}.md”’ {} \;

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>### Discover More:

<span class="graf-dropCap">P</span>ersonal Blog:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*KEUQKLdATTwxLxt4Jrfmzw.jpeg" class="graf-image" /></figure>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 6, 2021](https://medium.com/p/b40c8ee22682).

<a href="https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
