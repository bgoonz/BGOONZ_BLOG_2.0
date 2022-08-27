---
title: Decrement
template: docs
excerpt: The decrement operator (--) decrements (subtracts one from) its operand
  and returns a value.
---
# Decrement (--)

The decrement operator (`--`) decrements (subtracts one from) its operand and returns a value.

## Syntax

    Operator: x-- or --x

## Description

If used postfix, with operator after operand (for example, `x--`), the decrement operator decrements and returns the value before decrementing.

If used prefix, with operator before operand (for example, `--x`), the decrement operator decrements and returns the value after decrementing.

## Examples

### Postfix decrement

    let x = 3;
    y = x--;

    // y = 3
    // x = 2

### Prefix decrement

    let a = 2;
    b = --a;

    // a = 1
    // b = 1

## Specifications

<table>
<thead>
<tr class="header">
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>
<a href="https://tc39.es/ecma262/#sec-postfix-decrement-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-postfix-decrement-operator</span>
</a>
</td>
</tr>
</tbody>
</table>

`Decrement`
