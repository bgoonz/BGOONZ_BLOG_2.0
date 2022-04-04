To count the number of words (file or STDIN):
=============================================

wc -w cat | wc -w

To count the number of lines (file or STDIN):
=============================================

wc -l cat | wc -l

To count the number of bytes (file or STDIN):
=============================================

wc -c cat | wc -c

To count files and directories at a given location:
===================================================

ls -l | wc -l

To if you ever use `wc` in a shell script and need to compare the output with an int you can
============================================================================================

clean the output (wc returns extra characters around the integer) by using xargs:
=================================================================================

ls -l | wc -l | xargs
