Connect mode (ncat is client) | default port is 31337
=====================================================

ncat \[\]

Listen mode (ncat is server) | default port is 31337
====================================================

ncat -l \[\] \[\]

Transfer file (closes after one transfer)
=========================================

ncat -l \[\] \[\] &lt; file

Transfer file (stays open for multiple transfers)
=================================================

ncat -l –keep-open \[\] \[\] &lt; file

Receive file
============

ncat \[\] \[\] &gt; file

Brokering | allows for multiple clients to connect
==================================================

ncat -l –broker \[\] \[\]

Listen with SSL | many options, use ncat –help for full list
============================================================

ncat -l –ssl \[\] \[\]

Access control
==============

ncat -l –allow ncat -l –deny

Proxying
========

ncat –proxy \[:\] –proxy-type {http | socks4} \[\]

Chat server | can use brokering for multi-user chat
===================================================

ncat -l –chat \[\] \[\]
