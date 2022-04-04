To install a package:
=====================

rpm -ivh

To remove a package:
====================

rpm -e

To remove a package, but not its dependencies
=============================================

rpm -e –nodeps

To find what package installs a file:
=====================================

rpm -qf

To find what files are installed by a package:
==============================================

rpm -ql rpm -qpl

To find what packages require a package or file:
================================================

rpm -q –whatrequires rpm -q –whatrequires

To list all installed packages:
===============================

rpm -qa

To find a packages’s dependencies:
==================================

rpm -i –test

To display checksum against a source:
=====================================

rpm -K

To verify a package:
====================

rpm -V
