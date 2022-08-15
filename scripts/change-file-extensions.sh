sudo apt install rename


rename 's/\.txt$/.doc/' *.txt



# Recursive:

find . -name "*.\.js\.download" -exec rename 's/\.js\.download$/.js/' '{}' +