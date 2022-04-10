subtitle

2022-01-03

To search a file for a pattern:
===============================

grep

To perform a case-insensitive search (with line numbers):
=========================================================

grep -in

\# To recursively grep for string in

:

grep -R

Read search patterns from a file (one per line):
================================================

grep -f

Find lines NOT containing pattern:
==================================

grep -v

To grep with regular expressions:
=================================

grep "^00” \# Match lines starting with 00 grep -E "\[0-9\]{1,3}.\[0-9\]{1,3}.\[0-9\]{1,3}.\[0-9\]{1,3}” \# Find IP add

\# To find all files that match in

grep -rnw

-e

To exclude grep from your grepped output of ps:
===============================================

(Add \[\] to the first letter. Ex: sshd -&gt; \[s\]shd)
=======================================================

ps aux | grep ‘\[h\]ttpd’

Colour in red {bash} and keep all other lines
=============================================

ps aux | grep -E –color ‘bash|$’
