#install unzip:
sudo apt install unzip

# recursivley unzip all zip files into a folder by the same name:
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;


# recursivley delete .zip files when done:
find . -name "*.zip" -type f -print -delete