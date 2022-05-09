---
title: node-cli-args
weight: 0
excerpt: How to accept arguments in a Node.js program passed from the command line
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


You can pass any number of arguments when invoking a Node.js application using

Arguments can be standalone or have a key and a value.

For example:

or

This changes how you will retrieve this value in the Node.js code.

The way you retrieve it is using the process object built into Node.js.

It exposes an argv property, which is an array that contains all the command line invocation arguments.

The first element is the full path of the node command.

The second element is the full path of the file being executed.

All the additional arguments are present from the third position going forward.

You can iterate over all the arguments (including the node path and the file path) using a loop:

You can get only the additional arguments by creating a new array that excludes the first 2 params:

If you have one argument without an index name, like this:

you can access it using

In this case:

args\[0] is name=joe, and you need to parse it. The best way to do so is by using the [minimist](https://www.npmjs.com/package/minimist) library, which helps dealing with arguments:

This time you need to use double dashes before each argument name:
