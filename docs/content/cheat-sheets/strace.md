To strace a command:
====================

strace

To save the trace to a file:
============================

strace -o

To follow only the open() system call:
======================================

strace -e trace=open

To follow all the system calls which open a file:
=================================================

strace -e trace=file

To follow all the system calls associated with process management:
==================================================================

strace -e trace=process

To follow child processes as they are created:
==============================================

strace -f

To count time, calls and errors for each system call:
=====================================================

strace -c

To trace a running process (multiple PIDs can be specified):
============================================================

strace -p
