To view the perl version:
=========================

perl -v

Replace string "” to newline:
=============================

echo -e "foo” | perl -pe ‘s//\\n/g;’

Replace newline with multiple line to space:
============================================

cat test.txt | perl -0pe "s/test12/test1 test2/m”
