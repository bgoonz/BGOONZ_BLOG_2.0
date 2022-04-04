To initially check-in a file (leaving file active in filesystem):
=================================================================

ci -u

To check out with lock:
=======================

co -l

To check in and unlock (leaving file active in filesystem):
===========================================================

ci -u

To display version x.y of a file:
=================================

co -px.y

To undo to version x.y (overwrites file active in filesystem with the specified revision):
==========================================================================================

co -rx.y

To diff file active in filesystem and last revision:
====================================================

rcsdiff

To diff versions x.y and x.z:
=============================

rcsdiff -rx.y -rx.z

To view log of check-ins:
=========================

rlog

To break an RCS lock held by another person on a file:
======================================================

rcs -u
