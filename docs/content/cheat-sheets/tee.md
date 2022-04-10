To tee stdout to :
==================

ls | tee

To tee stdout and append to :
=============================

ls | tee -a

To tee stdout to the terminal, and also pipe it into another program for further processing:
============================================================================================

ls | tee /dev/tty | xargs printf "\\033\[1;34m%s\\033\[m”
