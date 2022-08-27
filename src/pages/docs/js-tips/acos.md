---
title: Math.acos()
weight: 0
excerpt:
seo:
    title: ' Math.acos()'
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


# Math.acos()

The `Math.acos()` function returns the arccosine (in radians) of a number, that is

∀*x* ∈ \[ − 1; 1\], `Math.acos` ` (``x``) ` = arccos (_x_) = the unique *y* ∈ \[0; *π*\] such that cos (_y_) = *x*

## Syntax

    Math.acos(x)

### Parameters

`x`  
A number representing a cosine, where `x` is between `-1` and `1`.

### Return value

The arccosine (angle in radians) of the given number if it's between `-1` and `1`; otherwise, [`NaN`](../nan).

## Description

The `Math.acos()` method returns a numeric value between 0 and π radians for `x` between -1 and 1. If the value of `x` is outside this range, it returns [`NaN`](../nan).

Because `acos()` is a static method of `Math`, you always use it as `Math.acos()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.acos()

    Math.acos(-2);  // NaN
    Math.acos(-1);  // 3.141592653589793
    Math.acos(0);   // 1.5707963267948966
    Math.acos(0.5); // 1.0471975511965979
    Math.acos(1);   // 0
    Math.acos(2);   // NaN

For values less than -1 or greater than 1, `Math.acos()` returns [`NaN`](../nan).
