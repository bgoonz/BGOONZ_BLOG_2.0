for f in \*.txt; do printf '%s\n' 0a 'TEXT YOU WISH TO APPEND TO BEGINNING OF EVERY FILE' . x | ex "$f"; donewget -r -A.pdf https://overapi.com/gitwget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off <url>

## OR--------------------------------------------------------------------------------

sudo apt install httrack
httrack --ext-depth=2 <url>

#!/usr/bin/env bash

# https://github.com/bgoonz

configuredDownloadClient=""
configuredUploadClient=""
configuredClient=""
currentVersion="1.23.0"
down="false"

## This function determines which http get tool the system has installed and returns an error if there isnt one

getConfiguredDownloadClient()
{
if command -v curl &>/dev/null; then
configuredDownloadClient="curl"
elif command -v wget &>/dev/null; then
configuredDownloadClient="wget"
elif command -v fetch &>/dev/null; then
configuredDownloadClient="fetch"
else
echo "Error: Downloading with this tool requires either curl, wget, or fetch to be installed." >&2 # Prints error to stderr
return 1
finvm iv14.5.0

}

## Allows to call the users configured client without if statements everywhere

httpGet()
{
case "$configuredClient" in
    curl)  curl -A curl -s "$@" ;;
wget) wget -qO- "$@" ;;
    httpie) http -b GET "$@" ;;
fetch) fetch -q "$@" ;;
esac
}

## This function determines which http get tool the system has installed and returns an error if there isnt one

getConfiguredClient()
{
if command -v curl &>/dev/null; then
configuredClient="curl"
elif command -v wget &>/dev/null; then
configuredClient="wget"
elif command -v http &>/dev/null; then
configuredClient="httpie"
elif command -v fetch &>/dev/null; then
configuredClient="fetch"
else
echo "Error: This tool requires either curl, wget, httpie or fetch to be installed." >&2
return 1
fi
}

## This function determines which http get tool the system has installed and returns an error if there isnt one

getconfiguredUploadClient()
{
if command -v curl &>/dev/null; then
configuredUploadClient="curl"
elif command -v wget &>/dev/null; then
configuredUploadClient="wget"
else
echo "Error: Uploading with this tool requires either curl or wget to be installed." >&2
return 1
fi
}

## Allows to call the users configured client without if statements everywhere

httpDownload()
{
case "$configuredDownloadClient" in
    curl)  curl -A curl --progress -o "$tempOutputPath/$3" "https://transfer.sh/$2/$3" || { echo "Failure!"; return 1;};;
    wget)  wget --progress=dot -O "$tempOutputPath/$3" "https://transfer.sh/$2/$3" || { echo "Failure!"; return 1;} ;;
    fetch) fetch -q -o "$tempOutputPath/$3" "https://transfer.sh/$2/$3" || { echo "Failure!"; return 1;};;
esac
}

update()
{

# Author: https://github.com/bgoonz

# Update utility version 2.2.0

# To test the tool enter in the defualt values that are in the examples for each variable

repositoryName="Bash-Snippets" #Name of repostiory to be updated ex. Sandman-Lite
githubUserName="alexanderepstein" #username that hosts the repostiory ex. alexanderepstein
nameOfInstallFile="install.sh" # change this if the installer file has a different name be sure to include file extension if there is one
latestVersion=$(httpGet https://api.github.com/repos/$githubUserName/$repositoryName/tags | grep -Eo '"name":.\*?[^\\]",'| head -1 | grep -Eo "[0-9.]+" ) #always grabs the tag without the v option

if [[$currentVersion == "" || $repositoryName == "" || $githubUserName == "" || $nameOfInstallFile == ""]]; then
echo "Error: update utility has not been configured correctly." >&2
exit 1
elif [[$latestVersion == ""]]; then
echo "Error: no active internet connection" >&2
exit 1
else
if [["$latestVersion" != "$currentVersion"]]; then
echo "Version $latestVersion available"
      echo -n "Do you wish to update $repositoryName [Y/n]: "
      read -r answer
      if [[ "$answer" == [Yy] ]]; then
cd ~ || { echo 'Update Failed'; exit 1; }
if [[-d  ~/$repositoryName]]; then rm -r -f $repositoryName || { echo "Permissions Error: try running the update as sudo"; exit 1; } ; fi
        echo -n "Downloading latest version of: $repositoryName."
        git clone -q "https://github.com/$githubUserName/$repositoryName" && touch .BSnippetsHiddenFile || { echo "Failure!"; exit 1; } &
        while [ ! -f .BSnippetsHiddenFile ]; do { echo -n "."; sleep 2; };done
        rm -f .BSnippetsHiddenFile
        echo "Success!"
        cd $repositoryName || { echo 'Update Failed'; exit 1; }
        git checkout "v$latestVersion" 2> /dev/null || git checkout "$latestVersion" 2> /dev/null || echo "Couldn't git checkout to stable release, updating to latest commit."
        chmod a+x install.sh #this might be necessary in your case but wasnt in mine.
        ./$nameOfInstallFile "update" || exit 1
cd ..
rm -r -f $repositoryName || { echo "Permissions Error: update succesfull but cannot delete temp files located at ~/$repositoryName delete this directory with sudo"; exit 1; }
else
exit 1
fi
else
echo "$repositoryName is already the latest version"
fi
fi
}

checkInternet()
{
httpGet github.com > /dev/null 2>&1 || { echo "Error: no active internet connection" >&2; return 1; } # query github with a get request
}

singleDownload()
{
if [[! -d $1]];then { echo "Directory doesn't exist, creating it now..."; mkdir -p "$1";};fi
  tempOutputPath=$1
  if [ -f "$tempOutputPath/$3" ];then
    echo -n "File aleady exists at $tempOutputPath/$3, do you want to delete it? [Y/n] "
    read -r answer
    if [[ "$answer" == [Yy] ]] ;then
rm -f "$tempOutputPath"/"$3"
    else
      echo "Stopping download"
      return 1
    fi
  fi
  echo "Downloading $3"
  httpDownload "$tempOutputPath" "$2" "$3"
echo "Success!"
}

httpSingleUpload()
{
case "$configuredUploadClient" in
    curl) response=$(curl -A curl --progress --upload-file "$1" "https://transfer.sh/$2") || { echo "Failure!"; return 1;};;
    wget) response=$(wget --progress=dot --method PUT --body-file="$1" "https://transfer.sh/$2") || { echo "Failure!"; return 1;} ;;
esac
echo "Success!"
}

printUploadResponse()
{
fileID=$(echo "$response" | cut -d "/" -f 4)
cat <<EOF
Transfer Download Command: transfer -d desiredOutputDirectory $fileID $tempFileName
Transfer File URL: $response
EOF
}

printOntimeUpload()
{
cat <<EOF
Download link: $downlink
EOF
}

singleUpload()
{
filePath=$(echo "$1" | sed s:"~":"$HOME":g)
if [ ! -f "$filePath" ];then { echo "Error: invalid file path"; return 1;}; fi
tempFileName=$(echo "$1" | sed "s/.*\///")
  echo "Uploading $tempFileName"
  httpSingleUpload "$filePath" "$tempFileName"
}

onetimeUpload()
{
response=$(curl -A curl -s -F "file=@$1" http://ki.tc/file/u/)
  downlink=$(echo "$response" | python -c "import sys, json; print json.load(sys.stdin)['file']['download_page']")
}

usage()
{
cat <<EOF
Transfer
Description: Quickly transfer files from the command line.
Usage: transfer [flags] or transfer [flag] [args] or transfer [filePathToUpload]
-d Download a single file
First arg: Output file directory
Second arg: File url id
Third arg: File name
-o Onetime file upload
-u Update Bash-Snippet Tools
-h Show the help
-v Get the tool version
Examples:
transfer ~/fileToTransfer.txt
transfer ~/firstFileToTransfer.txt ~/secondFileToTransfer.txt ~/thirdFileToTransfer.txt
transfer -d ~/outputDirectory fileID fileName
transfer -o ~/fileToTransfer.txt
EOF
}

while getopts "o:d:uvh" opt; do
case "$opt" in
    \?) echo "Invalid option: -$OPTARG" >&2
exit 1
;;
h) usage
exit 0
;;
v) echo "Version $currentVersion"
      exit 0
    ;;
    u)
      getConfiguredClient || exit 1
      checkInternet || exit 1
      update || exit 1
      exit 0
    ;;
    o)
      onetime="true"
    ;;
    d)
      down="true"
      if [ $# -lt 4 ];then { echo "Error: not enough arguments for downloading a file, see the usage"; return 1;};fi
      if [ $# -gt 4 ];then { echo "Error: to many enough arguments for downloading a file, see the usage"; return 1;};fi
      inputFilePath=$(echo "$*" | sed s/-d//g | sed s/-o//g | cut -d " " -f 2)
      inputID=$(echo "$*" | sed s/-d//g | sed s/-o//g | cut -d " " -f 3)
      inputFileName=$(echo "$*" | sed s/-d//g | sed s/-o//g | cut -d " " -f 4)
    ;;
    :)  echo "Option -$OPTARG requires an argument." >&2
exit 1
;;
esac
done

if [[$# == "0"]]; then
usage
exit 0
elif [[$# == "1"]];then
if [[$1 == "help"]]; then
usage
exit 0
elif [[$1 == "update"]]; then
getConfiguredClient || exit 1
checkInternet || exit 1
update || exit 1
exit 0
elif [ -f "$1" ];then
getConfiguredClient || exit 1
checkInternet || exit 1
getconfiguredUploadClient || exit 1
singleUpload "$1" || exit 1
    printUploadResponse
    exit 0
  else
    echo "Error: invalid filepath"
    exit 1
  fi
else
  if $down && ! $onetime ;then
    getConfiguredClient || exit 1
    checkInternet || exit 1
    getConfiguredDownloadClient || exit 1
    singleDownload "$inputFilePath" "$inputID" "$inputFileName" || exit 1
exit 0
elif ! $down && ! $onetime; then
    getConfiguredClient || exit 1
    checkInternet || exit 1
    getconfiguredUploadClient || exit 1
    for path in "$@";do
singleUpload "$path" || exit 1
      printUploadResponse
      echo
    done
    exit 0
  elif ! $down && $onetime; then
    getConfiguredClient || exit 1
    if [[ $configuredClient -ne "curl" ]];then
      echo "Error: curl must be installed to use one time file upload"
      exit 1
    fi
    inputFileName=$(echo "$*" | sed s/-o//g | cut -d " " -f 2 )
    onetimeUpload "$inputFileName"
printOntimeUpload
fi
fi
const fs = require('fs')
// Initialize the time at which the program started
const startTime = new Date()

fs.readFile('words.txt', (err, data) => {

    if (err) {
    	console.error(err)
    	return
    }

    // Split the words based on spaces and newlines and print the length
    const nWords = data.toString().split(/[\s\n]+/).length
    console.log('total words:', nWords)

    // print the total time taken and total program memory used
    console.log('total time:', (new Date()) - startTime)

    const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
    console.log('the program used', memoryUsedMb, 'MB')

})find . -name cookies.txt -type f -exec rm -rf {} \;find . -type f -exec sed -i '/badFolder/d' ./\* {} \;npm i -g recursive-install

npm-recursive-installsed -n -e '/<script>/,/<\/script>/p' example.html >out.jsfind . -name 'node_modules' -type d -prune -exec rm -rf '{}' +sanitize() {
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

sanitize_dir '/path/to/somewhere'sudo -u postgres psql

# 13:05:50|bryan@LAPTOP-9LGJ3JGS:[~] ~\_exitstatus:2[****************************\_\_****************************o>

# sudo -u postgres psql

# psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))

# Type "help" for help.

# postgres=#

for f in _ ; do
mv "$f" "$f.html"
doneecho "</body></html>" | tee -a _.html/_ Combining all the files in the directory into one file. _/
const fs = require("fs");
let cat = require("child_process")
let combine = cat.execSync("cat \*").toString("UTF-8");
console.log(combine)
fs.writeFile(`output.md`, combine, (err) => {
if (err) throw err;
}); #!/bin/bash

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
sudo apt install rename

rename 's/\.txt$/.doc/' \*.txt

# Recursive:

find . -name "_.\.js\.download" -exec rename 's/\.js\.download$/.js/' '{}' +find . -name '_.md' | cpio -pdm './../Markdown'sudo apt install rsync

rsync -a -f"+ _/" -f"- _" source/ destination/cat \*.html > example.htmlsudo apt install pandoc

pandoc \*.md> -o \_example.htmllet arr1 = [
'http://www.w3schools.com/jsref/met_form_submit.asp',
'http://www.w3schools.com/jsref/event_form_onreset.asp',
'http://www.w3schools.com/jsref/event_form_onsubmit.asp',
'http://www.w3schools.com/jsref/prop_img_align.asp',
'http://www.w3schools.com/jsref/prop_img_alt.asp',
];
const fs = require ('fs');

function tagify (arr) {
let tagsArr = [];
for (let i = 0; i < arr.length; i++) {
let curPath = arr[i];
let tag =
'<div class="btn"><a class="btn" href="' +
`${curPath}` +
`"` +
`>${curPath.slice (0, 1) + curPath.slice (6)}</a></div>`;
console.log (tag);
tagsArr.push (tag);
tagsArr.push ('\n');
var tagStr = tagsArr.join ('');
console.log ('tagStr: ', tagStr);
}
return tagStr;
}
let data = tagify (arr1);
fs.writeFile ('output.txt', data, err => {
// In case of a error throw err.
if (err) throw err;
});
sudo apt install pandoc

find ./ -iname "\*.html" -type f -exec sh -c 'pandoc "${0}" -o "${0%.html}.md"' {} \;sudo apt install pandoc

find ./ -iname "\*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;

for f in \*.html; do printf '%s\n' 0a '<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.htmlconst fs = require('fs')

fs.mkdir('./newdir', err => {
if (err) {
console.error(err)
return
}

    console.log('directory created')

})for x in "./"/_/; do
(cd "$x"
files=(_)
printf '%s\n' "${files[@]}" > deleteme.txt
)
donefind . -size +75M -a -print -a -exec rm -f {} \;find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

# check what you are about to delete before deleting:

find . -name "\*.zip" -type f -print

#Delete:

find . -name "\*.zip" -type f -print -deleteconst fs = require('fs')

// The async `opendir` method creates a stream from the directory
// passed as its first argument. The stream is present in the callback
fs.opendir('./', (err, dir) => {

    if (err) {
    	// log and return if theres any error
    	console.error(err)
    	return
    }

    // A scoped function is defined that reads the next
    // file in the directory and calls itself recursively
    const readNext = (dir) => {
    	// The `read` method gives us information on the
    	// next file in the directory. If there are no
    	// more files left, the value of `file` is null
    	dir.read((err, file) => {
    		if (err) {
    			// log and return error
    			console.error(err)
    			return
    		}

    		// If file is null, we are done.
    		if (file === null) {
    			return
    		}

    		// If the file exists, log the name, along with
    		// the icon for its type
    		const type = file.isDirectory() ? '📂' : '📄'
    		console.log(type, file.name)
    		// Recursively call `readNext` for the next directory entry
    		readNext(dir)
    	})
    }

    // Call the `readNext` function with the first directory entry
    readNext(dir)

})#!/bin/sh

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
echo ' <script async defer src="./assets/prism.js"></script>'

echo " <title> directory </title>"

echo ""
echo '<style>'

echo ' a {'
echo ' color: black;'
echo ' }'
echo ''
echo ' li {'
echo ' border: 1px solid black !important;'
echo ' font-size: 20px;'
echo ' letter-spacing: 0px;'
echo ' font-weight: 700;'
echo ' line-height: 16px;'
echo ' text-decoration: none !important;'
echo ' text-transform: uppercase;'
echo ' background: #194ccdaf !important;'
echo ' color: black !important;'
echo ' border: none;'
echo ' cursor: pointer;'
echo ' justify-content: center;'
echo ' padding: 30px 60px;'
echo ' height: 48px;'
echo ' text-align: center;'
echo ' white-space: normal;'
echo ' border-radius: 10px;'
echo ' min-width: 45em;'
echo ' padding: 1.2em 1em 0;'
echo ' box-shadow: 0 0 5px;'
echo ' margin: 1em;'
echo ' display: grid;'
echo ' -webkit-border-radius: 10px;'
echo ' -moz-border-radius: 10px;'
echo ' -ms-border-radius: 10px;'
echo ' -o-border-radius: 10px;'
echo ' }'
echo ' </style>'
echo '</head>'

echo '<body>'

echo ""

#################### continue with the HTML stuff:

echo ""

echo ""

echo "<ul>"

awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing

# awk '{print "<li>"};

# {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

echo ""

echo "</ul>"

echo "</body>"

echo "</html>"

}

cmd $listing --sort=extension >>$html

lynx -dump https://distrokid.com/hyperfollow/mihirbeg/getting-there | awk '/http/{print $2}' > links2.txt

## OR--------------------------------------------------------------------------------

wget -qO- www.instagram.com/mihirbeg/ |
grep -Eoi '<a [^>]+>' |
grep -Eo 'href="[^\"]+"' |
grep -Eo '(http|https)://[^/"]+'>output.mdsudo apt install uniq

uniq -u input.txt output.txt
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_website-components/0-DOJO/widgets-master/output/info/stats.json' HEAD
const fs = require('fs')

fs.readdir('./', { withFileTypes: true }, (err, files) => {
if (err) {
console.error(err)
return
}

    console.log('files: ')
    files.forEach(file => {
    	// the `isDirectory` method returns true if the entry is a directory
    	const type = file.isDirectory() ? '📂' : '📄'
    	console.log(type, file.name)
    })

})find ./ | grep -i "\.html\*$"
ls -R './' | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.mdconst fs = require('fs')
// Initialize the time at which the program started
const startTime = new Date()

// create a read stream from the `words.txt` file
const rStream = fs.createReadStream('words.txt')

// initialize total word count
let total = 0

// the `on data` method registers a handler for everytime we
// receive new data from the file stream
rStream.on('data', b => {
// `b` here is the chunk of data received from the
// file stream
const bStr = b.toString()
// We split the string by spaces and new lines and add it to the
// total -- we subtract one because of the extra space/newline/broken word
// at the end of the chunk
// we shouldn't do this for the last chunk of data, which we handle later
total += bStr.split(/[\s\n]+/).length - 1
})

rStream.on('end', () => {
// Finally, the `on end` handler is called once the data stream completes

    // we add one to the total, because we shouldn't subtract 1 from the last
    // chunk of data in the `data` handler, for which we're compensating here
    console.log('total words:', total + 1)


    // Print the total time taken, as well as the total used program memory
    console.log('total time:', (new Date()) - startTime)

    const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
    console.log('the program used', memoryUsedMb, 'MB')

})const fs = require('fs')

fs.readdir('./', (err, files) => {
if (err) {
console.error(err)
return
}

    console.log('files: ', files)

})function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

find . -type f -exec sed -n -e '/`javascript/,/`/p' _.html >out.js ./_ {} \;

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"find . -type f -exec sed -i '/badText/d' ./\*.html {} \;

# Recursivley remove from all html files any lines contaning the string "badText"#install unzip:

sudo apt install unzip

# recursivley unzip all zip files into a folder by the same name:

find . -name "\*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

# recursivley delete .zip files when done:

find . -name "\*.zip" -type f -print -deleten=1;
max=50;
while [ "$n" -le "$max" ]; do
mkdir "s$n"
  n=`expr "$n" + 1`;
done git config --global credential.helper storeconst fs = require('fs')

fs.rmdir('./newdir', err => {
if (err) {
console.error(err)
return
}

    console.log('directory deleted')

})for f in _/; do nf=$(echo "$f" |sed -e 's/[^A-Za-z0-9.]/./g' -e 's/\.\.\././g' -e 's/\.\././g' -e 's/\._$//'); test "$f" != "$nf" && mv "$f" "$nf" && echo "$nf"; donesed -i '/target-string/d' ./js-in-one-page.html

# examples:

sed -i '/\.git/d' ./index.html

# Recursive

find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/BADSTRING/d' '{}' +

find . -name "_" -type f | xargs sed -i -e '/Mirrored from/d' for file in _; do mv "$file" `echo $file | tr ' ' '_'` ; donefor filename in *badString*; do mv "$filename" "${filename//badstring/replaceString}"; donerename  's/ *$//' \*# recursivley remove empty files
find . -empty -type f -print -delete

# recursivley remove empty folders

find . -empty -type d -print -delete

# recursively remove .git folder, .gitignore file and .gitmodules file and .gitattributes file

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

# Recursivley remove security, release, changelog, License & contributing files

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +
const fs = require('fs')

class Fibonacci {
// The Fibonacci class has the previous number and current
// number as its instance attributes
constructor() {
this.prev = 0
this.current = 1
}

    // the next method returns the current value, and
    // increments the current value by adding the past value to it
    next() {
    	const current = this.current
    	this.prev = current
    	this.current = current + this.prev
    	return current
    }

}

// Iniitalize a writeStream to a a new file "fibonacci.txt"
const writeStream = fs.createWriteStream('fibonacci.txt')

// the on ready callback gets called once the file is available to write
writeStream.on('ready', () => {
// initialize a new object of the Fibonacci class
const f = new Fibonacci()

    // For each iteration, obtain the next number in the sequence
    // and write to the file, adding a newline each time
    for (let i = 0; i < 1000; i++) {
    	const n = f.next()
    	writeStream.write(String(n) + '\n', err => {
    		// if there is any error in writing, log it
    		if (err) {
    			console.error('error writing:', err)
    		}
    	})
    }

    // The `end` method closes the write stream, once we're done
    writeStream.end()

})
