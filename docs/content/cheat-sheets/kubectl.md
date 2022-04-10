Display list of all available commands
======================================

kubectl -h

Display an explanation of a specific command
============================================

kubectl command\_name -h

Display complete list of supported resources
============================================

kubectl api-resources

Display an explanation of a specific resource
=============================================

kubectl explain resource\_name

Display an explanation of a specific field of resource
======================================================

kubectl explain resource\_name.field\_name

Display list of global command-line options
===========================================

kubectl options

Setup Kubectl autocomplete in bash(to use press Tab)
====================================================

source &lt;(kubectl completion bash)

Display all resources in all namespaces
=======================================

kubectl get all -A
