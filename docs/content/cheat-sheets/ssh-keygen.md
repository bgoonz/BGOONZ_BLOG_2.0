To generate an SSH key:
=======================

ssh-keygen -t rsa

To generate a 4096-bit SSH key:
===============================

ssh-keygen -t rsa -b 4096

To generate a FIDO/U2F token-backed key:
========================================

ssh-keygen -t ed25519-sk

To generate a FIDO2 resident key:
=================================

ssh-keygen -t ed25519-sk -O resident

To update a passphrase on a key:
================================

ssh-keygen -p -P -N -f

To remove a passphrase on a key:
================================

ssh-keygen -p -P -N ’’ -f

To generate a 4096 bit RSA key with a passphase and comment containing the user and hostname:
=============================================================================================

ssh-keygen -t rsa -b 4096 -C "<span class="math inline">*USER*@</span>HOSTNAME” -P

To print the fingerprint of a public key:
=========================================

ssh-keygen -lf

To print the Github-style (MD5) fingerprint of a public key:
============================================================

ssh-keygen -E md5 -lf

To download resident keys from a FIDO2 authenticator to the current directory:
==============================================================================

ssh-keygen -K

To view the public key associated with a private key:
=====================================================

ssh-keygen -y -f &gt; ssh-keygen -y -f ~/.ssh/private-key &gt; ~/.ssh/public-key.pub
