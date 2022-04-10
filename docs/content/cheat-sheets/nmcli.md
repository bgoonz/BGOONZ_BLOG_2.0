Connect to a wireless access point - Parameters:
================================================

– the name of your wireless interface
=====================================

– the SSID of the access point
==============================

– the WiFi password
===================

nmcli d wifi connect password iface

Disconnect from WiFi - Parameters:
==================================

– the name of your wireless interface
=====================================

nmcli d wifi disconnect iface

Get WiFi status (enabled / disabled)
====================================

nmcli radio wifi

Enable / Disable WiFi
=====================

nmcli radio wifi &lt;on|off&gt;

Show all available WiFi access points
=====================================

nmcli dev wifi list

Refresh the available WiFi connection list
==========================================

nmcli dev wifi rescan

Show all available connections
==============================

nmcli con

Show only active connections
============================

nmcli con show –active

Review the available devices
============================

nmcli dev status

Add a dynamic ethernet connection - parameters:
===============================================

– the name of the connection
============================

– the name of the interface
===========================

nmcli con add type ethernet con-name ifname

Import OpenVPN connection settings from file:
=============================================

nmcli con import type openvpn file

Bring up the ethernet connection
================================

nmcli con up
