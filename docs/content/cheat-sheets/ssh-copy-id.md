To copy a key to a remote host:
===============================

ssh-copy-id @

To copy a key to a remote host on a non-standard port:
======================================================

ssh-copy-id @ -p 2222

To copy a key to a remote host on a non-standard port with non-standard ssh key:
================================================================================

ssh-copy-id ~/.ssh/otherkey "username@host -p 2222”
