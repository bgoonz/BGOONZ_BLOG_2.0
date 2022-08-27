sudo apt install pandoc 



find ./ -iname "*.html" -type f -exec sh -c 'pandoc "${0}" -o "${0%.html}.md"' {} \;