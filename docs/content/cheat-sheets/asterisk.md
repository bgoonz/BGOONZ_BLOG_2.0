subtitle

2022-01-03

To connect to a running Asterisk session:
=========================================

asterisk -rvvv

To issue a command to Asterisk from the shell:
==============================================

asterisk -rx "”

To originate an echo call from a SIP trunk on an Asterisk server, to a specified number:
========================================================================================

asterisk -rx "channel originate SIP// application echo”

To print out the details of SIP accounts:
=========================================

asterisk -rx "sip show peers”

To print out the passwords of SIP accounts:
===========================================

asterisk -rx "sip show users”

To print out the current active channels:
=========================================

asterisk -rx "core show channels”
