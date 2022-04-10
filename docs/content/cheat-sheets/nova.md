To list VMs on current tenant:
==============================

nova list

To list VMs of all tenants (admin user only):
=============================================

nova list –all-tenants

To boot a VM on a specific host:
================================

nova boot –nic net-id=  
–image  
–flavor  
–availability-zone nova:

To stop a server:
=================

nova stop

To start a server:
==================

nova start

To attach a network interface to a specific VM:
===============================================

nova interface-attach –net-id
