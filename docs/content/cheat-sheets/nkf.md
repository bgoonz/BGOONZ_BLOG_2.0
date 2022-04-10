To check the file’s charactor code:
===================================

nkf -g

To convert charactor code to UTF-8:
===================================

nkf -w –overwrite

To convert charactor code to EUC-JP:
====================================

nkf -e –overwrite

To convert charactor code to Shift-JIS:
=======================================

nkf -s –overwrite

To convert charactor code to ISO-2022-JP:
=========================================

nkf -j –overwrite

To convert newline to LF:
=========================

nkf -Lu –overwrite

To convert newline to CRLF:
===========================

nkf -Lw –overwrite

To convert newline to CR:
=========================

nkf -Lm –overwrite

To MIME encode:
===============

echo テスト | nkf -WwMQ

To MIME decode:
===============

echo "=E3=83=86=E3=82=B9=E3=83=88” | nkf -WwmQ
