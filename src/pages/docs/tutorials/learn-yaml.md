---
title: Learn YML
weight: 0
excerpt: Walkthroughs of various development activities and skills
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

## Introduction

If you haven't come across YAML yet, hang around a bit and you will, I am seeing it being adopted by a lot of organizations and projects recently and its worth knowing about. YAML is a data-orientated human readable serialization language, and I have come across it in many projects including OpenAPI, Docker, Kubernetes and Ansible playbooks among others.

YAML was originally an acronym for 'Yet Another Markup Language', but is now more commonly referred to as '_YAML_ Ain't Markup Language' (a bit like GNU is not unix!, or Bing! is not google!).

The following snapshot illustrates some of the basics we will go through.

![Image 1](https://www.codeproject.com/KB/codegen/1214409/YamlExample1.png)

This article is designed to give you a very brief overview of YAML - enough to get you started there is a lot more and some intricacies which you can find out about on the [YAML website](http://www.yaml.org/).

## YAML elements

As you can see from the image above, a YAML file is constructed of a number of different elements. Together, they can be used to describe a wide variety of structures. I have seen YAML used to describe everything from cross language classes, api data structures and deployment instructions for virtual machines and containers.

YAML elements are mostly based on Key-Value pairs. We may see them as strict KV:

`Name: Value`

or a a key with a complex/compound value:

Name: **< the key** 
<br/>


AnotherName: someValue **< the value**

YAML is a superset of JSON, so we can utilize JSON style sequences and maps in our constructs:

a_json_style_map: {"K": "V"} 
<br/>


a_json_style_sequence: \["pink", "red", "red", "cat", 123, 234, 345\]

### Spaces/indenting

Here is a BIG BIG gotcha - this will bite you so know it! ..... in YAML, you indent with spaces, not tabs, in addition, there MUST be spaces between element parts.

For example, this is correct:

`Key: Value`

but this will fail:

`Key:Value`  
 ^^ no space after the colon!

### Begin/End document

Defining the start and end of a document is optional. To start a document insert '`---`' at the top of the document, to end it, insert '`...`'

### Comments

Comments are defined by placing a hash in front of an item '`#`'. Comments can be made at the start of a line of anywhere in the line:

\# this is a comment 
<br/>


Key: Value #this another comment

### SCALAR

Simple KV pairs come in this category, here are some examples, which are quite varied and flexible.

key: value  
someNumber: 299  
quotedText: "some text description"  
moreQuotedtext: strings do not have to be quoted, but I prefer to do it=  
boolean: true  
we can also have spaces in keys: and also in values  
nullKeyValue: null

###

Collections & Lists

List and collection members are lines that begin at the same indentation level, starting with a dash followed by a space.

\# a collection of fancy cars 
<br/>


Fancy-Cars 
<br/>



- Porsche 
<br/>


- Aston Martin 
<br/>


- Bentley

### Multi-line collections

Complex keys can be catered for by placing a question mark followed by a pipe symbol to flag the start of a complex key:

? | 
<br/>


starting a complex 
<br/>


key with many 
<br/>


lines 
<br/>


: and here comes the value!

###

Nested collections

You can also have deep nested collections:

\# Car information 
<br/>



- Driver 
<br/>


    name: Francis Black 
<br/>


    age: 21 
<br/>


    Driving license type: 
<br/>

 - full car license 
<br/>

 - racing license formula V : details 
<br/>


    license id: ABC12345 
<br/>


    expiry date: 2017-12-28

### Dictionaries

Dictionaries comprise a key:value format with contents indented.

CarDetails: 
<br/>


make: Porsche 
<br/>


model: 911 
<br/>


fuel: Petrol

You can merge and mix-up collections of lists and dictionaries like this:

\# Car information 
<br/>



- Driver 
<br/>


    name: Francis Black 
<br/>


    age: 21 
<br/>


    Driving license type: 
<br/>

 - full car license 
<br/>

 - racing license formula V
