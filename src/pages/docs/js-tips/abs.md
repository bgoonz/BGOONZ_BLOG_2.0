---
title: Math.abs()
weight: 0
excerpt:
seo:
    title: 'Math.abs()'
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


# Math.abs()

The `Math.abs()` function returns the absolute value of a number. That is, it returns `x` if `x` is positive or zero, and the negation of `x` if `x` is negative.

## Syntax

    Math.abs(x)

### Parameters

`x`  
A number.

### Return value

The absolute value of the given number.

## Description

Because `abs()` is a static method of `Math`, you always use it as `Math.abs()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Behavior of Math.abs()

Passing an empty object, an array with more than one member, a non-numeric string or [`undefined`](../undefined)/empty variable returns [`NaN`](../nan). Passing [`null`](../null), an empty string or an empty array returns 0.

    Math.abs('-1');     // 1
    Math.abs(-2);       // 2
    Math.abs(null);     // 0
    Math.abs('');       // 0
    Math.abs([]);       // 0
    Math.abs([2]);      // 2
    Math.abs([1,2]);    // NaN
    Math.abs({});       // NaN
    Math.abs('string'); // NaN
    Math.abs();         // NaN
