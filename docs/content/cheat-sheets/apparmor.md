subtitle

2022-01-03

apparmor will protect a system by confining programs to a limited set of resources.
===================================================================================

To activate a profile:
======================

sudo aa-enforce usr.bin.firefox

or
==

export *PROFILE*=‘usr.bin.firefox’ sudo <span class="math inline">(*rm*/*etc*/*apparmor*.*d*/*disable*/</span>*PROFILE* ; cat /etc/apparmor.d/$*PROFILE* | apparmor\_parser -a )

To disable a profile:
=====================

sudo aa-disable usr.bin.firefox

or
==

export *PROFILE*=‘usr.bin.firefox’ sudo <span class="math inline">(*ln* − *s*/*etc*/*apparmor*.*d*/</span>*PROFILE* /etc/apparmor.d/disable/ && apparmor*parser -R /etc/apparmor.d/$\_PROFILE*)

To list profiles loaded:
========================

sudo aa-status

or
==

sudo apparmor\_status

List of available profiles: /etc/apparmor.d/
============================================
