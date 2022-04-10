For the sake of briefness, we use Bash "group compound” stanza:
===============================================================

/dev/sd{a,b,…}1 =&gt; /dev/sda1 /dev/sdb1 …
===========================================

Along the following variables:
==============================

<span class="math inline">*Marrayidentifier*(/*dev*/*md*</span>{M})
===================================================================

<span class="math inline">*Ddeviceidentifier*(/*dev*/*sd*</span>{D})
====================================================================

<span class="math inline">*Ppartitionidentifier*(/*dev*/*sd*</span>{D}${P})
===========================================================================

To create (initialize) a new array:
===================================

mdadm –create /dev/md<span class="math inline">*M* −  − *level* = *raid*5 −  − *raid* − *devices* = 4/*dev*/*sda*, *b*, *c*, *d*, *e*</span>{P} –spare-devices=/dev/sdf1

To manually assemble (activate) an existing array:
==================================================

mdadm –assemble /dev/md<span class="math inline">*M*/*dev*/*sda*, *b*, *c*, *d*, *e*</span>{P}

To automatically assemble (activate) all existing arrays:
=========================================================

mdadm –assemble –scan

To stop an assembled (active) array:
====================================

mdadm –stop /dev/md${M}

To see array configuration:
===========================

mdadm –query /dev/md${M}

To see array component configuration (dump superblock content):
===============================================================

mdadm –query –examine /dev/sd<span class="math inline">*D*</span>{P}

To see detailed array confiration/status:
=========================================

mdadm –detail /dev/md${M}

To save existing arrays configuration:
======================================

(MAY be required by initrd for successfull boot)
================================================

mdadm –detail –scan &gt; /etc/mdadm/mdadm.conf

To erase array component superblock:
====================================

(MUST do before reusing a partition for other purposes)
=======================================================

mdadm –zero-superblock /dev/sd<span class="math inline">*D*</span>{P}

To manually mark a component as failed:
=======================================

(SHOULD when a device shows wear-and-tear signs, e.g. through SMART)
====================================================================

mdadm –manage /dev/md<span class="math inline">*M* −  − *fail*/*dev*/*sd*</span>{D}${P}

To remove a failed component:
=============================

(SHOULD before preemptively replacing a device, after failing it)
=================================================================

mdadm –manage /dev/md<span class="math inline">*M* −  − *remove*/*dev*/*sd*</span>{D}${P}

To prepare (format) a new device to replace a failed one:
=========================================================

sfdisk -d /dev/sd<span class="math inline">*D*, *sane*|*sfdisk*/*dev*/*sd*</span>{D,new}

To add new component to an existing array:
==========================================

(this will trigger the rebuild)
===============================

mdadm –manage /dev/md<span class="math inline">*M* −  − *add*/*dev*/*sd*</span>{D,new}${P}

To see assembled (active) arrays status:
========================================

cat /proc/mdstat

To rename a device:
===================

(SHOULD after hostname change; eg. name="$(hostname -s)”)
=========================================================

mdadm –assemble /dev/md<span class="math inline">*M*/*dev*/*sda*, *b*, *c*, *d*, *e*</span>{P} –name="<span class="math inline">*name*:</span>{M}” –update=name
