TRIM ALL(USE WITH CAUTION):
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

---

find . -name "\*.xml" -type f -print

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name '.vscode' -type d -prune -exec rm -rf '{}' +

---

youtube-dl <https://www.youtube.com/user/Mihirishere/videos>

---

Remove duplicate lines from a text file
You can use this shell command:

COPY
uniq -u input.txt output.txt

---

httrack --ext-depth=3 <https://www.textfixer.com/html/convert-url-to-html-link.php>

httrack <http://jellydemos.com/html/muziq/muziq-hardrock/index-multipages.html> -O "./temp" %e5

httrack --ext-depth=4 <http://jellydemos.com/html/muziq/muziq-hardrock/index-multipages.html>

## httrack --ext-depth=4 <https://www.vickielasher.com/>

grab all links from website
lynx -dump <https://distrokid.com/hyperfollow/mihirbeg/getting-there> | awk '/http/{print $2}' > links2.txt

lynx -dump <https://geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow> | awk '/http/{print $2}' > links.md

lynx -dump <https://html.com/blog/100-web-development-cheat-sheets> | awk '/http/{print $2}' > links.md

wget -qO- www.instagram.com/mihirbeg/ |
grep -Eoi '<a [^>]+>' |
grep -Eo 'href="[^\"]+"' |
grep -Eo '(http|https)://[^/"]+'>output.md

---

._(?<=<script)(._)(?=<\/script>)._
._\./\.git.*
.*node_modules.\*

find . -name "_.zip" -type f -print
find . -name "_.zip" -type f -print -delete

---

REMOVE DUPLICATE LINES:

## uniq -u input.txt output.txt

2.)find and delete all empty directories()===>

## find . -empty -type d -print -delete

3.)Find and delete all empty files()===>

## find . -empty -type f -print -delete

4.)Recursive-unzip:()===>

find . -name "\*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

## find . -name "\*.zip" -type f -print -delete

add extension to every file in folder

for f in \* ; do
mv "$f" "$f.html"
done

for f in \* ; do
mv "$f" "$f.css"
done

---

delete lines contaning specific string:

sed -i '/\.git/d' ./index.html
2

find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/Copyright/d' '{}' +
sed -i '/Copyright/d' ./\*.html

---

Remove lines of file contaning a string

sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/assets/d' ./index.html

---

To find a pattern and remove the line containing the pattern below command can be used

## find . -name "\*" -type f | xargs sed -i -e '/Mirrored from/d'

DO a command once for every file in folder
rename 's/\.coffee$/.html/' *.coffee
for file in*.
do
     rename 's/\.coffee$/.html/' \*.coffee
done

for file in \*.
do
sed '/Mirrored from/d' "$file" > "$file".new_file.html
done

---

sed -n -e '/<script>/,/<\/script>/p' getting-there.html >out.js
sed -i 's/<script>//g' out.js
sed -i 's/<\/script>//g' out.js

._\./<script_
(?<=<script)(.\*)(?=<\/script>)

---

sudo sed -i '/\.git/d' ./index.html

---

Resursivley delete node modules

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

---

5.) Remember Git Credentials:

                git config --global credential.helper store

---

## find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

---

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_website-components/0-DOJO/widgets-master/output/info/stats.json' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_00-4-all-time/\_0-Random-Repo/zipped.zip' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_Resource-Hub-Mark_II/azagent/vstsagent.tar.gz' HEAD
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_00-4-all-time/\_0-Random-Repo/zipped.zip' HEAD

---

nano
When you're done, hit CTRL+O to save and CTRL+X to exit Nano. You'll just need to restart the SSH server with one of the following commands.

$ systemctl restart sshd
$ service sshd restart

---

Recursivley Create numbered folders:
n=1;
max=50;
while [ "$n" -le "$max" ]; do
mkdir "s$n"
  n=`expr "$n" + 1`;
done

---

Command Line: Rename all files in current directory to a certain file extension:
forfiles /S /M _/C "cmd /c rename @file @fname.js"
forfiles /S /M_ /C "cmd /c rename @file @fname.html"

---

The following command would rename all _.txt files to_.doc.

$ rename 's/\.txt$/.doc/' \*.txt

$ rename 's/\.example$/.sql/' *.example
rename 's/\.js\.download$/.js/'\*.js\.download

## rename 's/\.html\.tmp$/.html/' \*.html\.tmp

find ./ -iname "\*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;

---

---

Recursivley list every single file in the working directory... 1 per line:

ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'

write-to-txt-file

ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'

--------for only html-files------------------------------------------------------------------------------

## find ./ | grep -i "\.html\*$"

---

---

forfiles /S /M \*.File /C "cmd /c rename @file @fname.js"

---

Recreate folder structure with only specific file types

find . -name '\*.html' | cpio -pdm './original-mihir-html'

---

7.) ()===>

---

8.) Command Prompt: code --list-extensions
for /F "tokens=\*" %A in (extensions.list) do code --install-extension %A

---

9.)Create a soft link in the home dir
ln -s /mnt/c/0-a-A-October

---

10.)
sudo apt update
sudo apt upgrade
git config --global user.name bryan
git config --global user.email bryan.guner@gmail.com
sudo apt update
sudo apt install build-essential
curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh> | bash
. ./.bashrc
nvm install --lts
sudo apt install unzip
npm install -g mocha
npm audit fix -F
npm audit fix -f
npm install -g mocha
sudo apt update
sudo apt upgrade
sudo apt install python3

---

Command Line vscode
code --list-extensions
code --disable-extension <ext-name>

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

dockerd

---

killall node

---

sudo service postgresql stop
sudo service postgresql start
sudo service postgresql restart

---

sed -e '/.git/ {
$!N
d
}'index.html

wget \
 --recursive \ # Download the whole site.
--page-requisites \ # Get all assets/elements (CSS/JS/images).
--adjust-extension \ # Save files with .html on the end.
--span-hosts \ # Include necessary assets from offsite as well.
--convert-links \ # Update links to still work in the static version.
--restrict-file-names=windows \ # Modify filenames to work in Windows as well.
--domains yoursite.com \ # Do not follow links outside this domain.
--no-parent \ # Don't follow links outside the directory you pass in.
<https://www.instagram.com/mihirbeg/?hl=en>

---

Copy file structure without the files:

rsync -a -f"+ _/" -f"-_" './'/ './../'/

rsync -a -f"+ _/" -f"-_" source/ destination/

---

---

# !/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"

out=""

html="index.html"
out="basename $out.html"
html="index.html"
cmd() {

echo ' <!DOCTYPE html>'
echo '<html>'
echo '<head>'

echo ' <meta http-equiv="Content-Type" content="text/html">'

echo ' <meta name="Author" content="Bryan Guner">'
echo '<link rel="stylesheet" href="./assets/prism.css">'
echo ' <link rel="stylesheet" href="./assets/style.css">'
echo ' <script async defer src="./assets/prism.js">
</script>'

echo " <TITLE> directory </TITLE> </head>"

echo ""

echo '</head>'

echo '<body>'

echo ""

#################### continue with the HTML stuff:

echo ""

echo ""

echo "<ul>"

awk '{print "<li>
<a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing

# awk '{print "<li>"}

# {print " <a href=\""$1"\">",$1,"</a>
</li>&nbsp;"}' \ $listing

echo ""

echo "</ul>"

echo "</body>"

echo "</html>"

}

## cmd $listing --sort=extension >>$html

  <pre>
<code>
  #!/bin/bash
# Author: Raman Nv

link="#insert url here#"
# links were a set of strings with just the index of the video as the variable

num=3  
# first video was numbered 3 - weird.  

ext=".mp4"

while [ $num -le 66 ]
do
      wget $link$num$ext -P ~/Downloads/
      num=$(($num+1))
done
  
</code>
</pre>

---

print a dummy text file in each folder

for x in "./"/_/; do
(cd "$x"
files=(_)
printf '%s\n' "${files[@]}" > filesNames.txt
)
done
