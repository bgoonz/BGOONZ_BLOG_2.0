To replace : with a new line:
=============================

echo $PATH | tr ":” "” echo $PATH | tr -t ":”

To remove all occurance of "ab”:
================================

echo aabbcc | tr -d "ab” \# ouput: cc

To complement "aa”:
===================

("Complement” means to keep "aa”, and replace all others with "x”)
==================================================================

echo aabbccd | tr -c "aa” x \# output: aaxxxxx (no newline)

To complement "ab”:
===================

echo aabbccd | tr -c "ab” x \#output: aabbxxx (with newline)

To preserve all alpha(-c). ":-\[:digit:\] etc” will be translated to "”. sequeeze mode:
=======================================================================================

echo $PATH | tr -cs "\[:alpha:\]” "”

To convert an ordered list to an unordered list:
================================================

echo "1. /usr/bin2. /bin” | tr -cs " /\[:alpha:\]" "+”
