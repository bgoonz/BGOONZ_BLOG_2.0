subtitle

2022-01-03

To sum integers from a file or stdin, one integer per line:
===========================================================

printf ‘123’ | awk ‘{ sum += $1} END {print sum}’

To use a specific character as separator to sum integers from a file or stdin:
==============================================================================

printf ‘1:2:3’ | awk -F ":” ‘{print $1+$2+$3}’

To print a multiplication table:
================================

seq 9 | sed ‘H;g’ | awk -v RS=’’ ‘{for(i=1;i&lt;=NF;i++)printf("%dx%d=%d%s”, i, NR, i\*NR, i==NR?"”:")}’

To specify an output separator character:
=========================================

printf ‘1 2 3’ | awk ‘BEGIN {OFS=":”}; {print $1,$2,$3}’
