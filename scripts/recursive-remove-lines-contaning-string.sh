find . -type f -exec sed -i '/badText/d' ./*.html {} \; 
# Recursivley remove from all html files any lines contaning the string "badText"