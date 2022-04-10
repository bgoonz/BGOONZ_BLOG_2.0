To concat columns from files:
=============================

paste …

To list the files in the current directory in three columns:
============================================================

ls | paste - - -

To combine pairs of lines from a file into single lines:
========================================================

paste -s -d ‘’

To number the lines in a file, similar to nl(1):
================================================

sed = | paste -s -d ‘’ - -

To create a colon-separated list of directories named bin, suitable for use in the PATH environment variable:
=============================================================================================================

find / -name bin -type d | paste -s -d : -
