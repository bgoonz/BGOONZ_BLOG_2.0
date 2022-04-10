To add private key:
===================

ssh-add

To load resident keys from FIDO2 authenticator:
===============================================

ssh-add -K

To store a GitHub SSH passphrase in your keychain:
==================================================

ssh-add -K ~/.ssh/github\_rsa

To list all public keys:
========================

ssh-add -L

To list fingerprints of all keys:
=================================

ssh-add -l

To delete key:
==============

ssh-add -d

To delete all keys:
===================

ssh-add -D
