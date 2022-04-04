subtitle

2022-01-03

------------------------------------------------------------------------

syntax: bash tags: \[networking\]

------------------------------------------------------------------------

To show statistics for the selected interface:
==============================================

ethtool -S

To show interface permanent address:
====================================

ethotool -P

To set interface speed:
=======================

ethtool -s \[ speed %d \]

To set interface autonegotiation:
=================================

ethtool -s \[ autoneg on|off \]

To get interface errors:
========================

ethtool -S | grep error
