sed -i '/target-string/d' ./js-in-one-page.html



# examples:
sed -i '/\.git/d' ./index.html

# Recursive


find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -a -exec sed -i  '/BADSTRING/d' '{}' +

find . -name "*" -type f | xargs sed -i -e '/Mirrored from/d'