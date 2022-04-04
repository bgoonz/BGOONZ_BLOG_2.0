Power Set
=========

Power set of a set `S` is the set of all of the subsets of `S`, including the empty set and `S` itself. Power set of set `S` is denoted as `P(S)`.

For example for `{x, y, z}`, the subsets are:

    {
      {}, // (also denoted empty set ∅ or the null set)
      {x},
      {y},
      {z},
      {x, y},
      {x, z},
      {y, z},
      {x, y, z}
    }

![Power Set](https://www.mathsisfun.com/sets/images/power-set.svg)

Here is how we may illustrate the elements of the power set of the set `{x, y, z}` ordered with respect to inclusion:

![](https://upload.wikimedia.org/wikipedia/commons/e/ea/Hasse_diagram_of_powerset_of_3.svg)

**Number of Subsets**

If `S` is a finite set with `|S| = n` elements, then the number of subsets of `S` is `|P(S)| = 2^n`. This fact, which is the motivation for the notation `2^S`, may be demonstrated simply as follows:

> First, order the elements of `S` in any manner. We write any subset of `S` in the format `{γ1, γ2, ..., γn}` where `γi , 1 ≤ i ≤ n`, can take the value of `0` or `1`. If `γi = 1`, the `i`-th element of `S` is in the subset; otherwise, the `i`-th element is not in the subset. Clearly the number of distinct subsets that can be constructed this way is `2^n` as `γi ∈ {0, 1}`.

Algorithms
----------

### Bitwise Solution

Each number in binary representation in a range from `0` to `2^n` does exactly what we need: it shows by its bits (`0` or `1`) whether to include related element from the set or not. For example, for the set `{1, 2, 3}` the binary number of `0b010` would mean that we need to include only `2` to the current set.

<table><thead><tr class="header"><th style="text-align: center;"></th><th style="text-align: center;"><code>abc</code></th><th style="text-align: center;">Subset</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><code>0</code></td><td style="text-align: center;"><code>000</code></td><td style="text-align: center;"><code>{}</code></td></tr><tr class="even"><td style="text-align: center;"><code>1</code></td><td style="text-align: center;"><code>001</code></td><td style="text-align: center;"><code>{c}</code></td></tr><tr class="odd"><td style="text-align: center;"><code>2</code></td><td style="text-align: center;"><code>010</code></td><td style="text-align: center;"><code>{b}</code></td></tr><tr class="even"><td style="text-align: center;"><code>3</code></td><td style="text-align: center;"><code>011</code></td><td style="text-align: center;"><code>{c, b}</code></td></tr><tr class="odd"><td style="text-align: center;"><code>4</code></td><td style="text-align: center;"><code>100</code></td><td style="text-align: center;"><code>{a}</code></td></tr><tr class="even"><td style="text-align: center;"><code>5</code></td><td style="text-align: center;"><code>101</code></td><td style="text-align: center;"><code>{a, c}</code></td></tr><tr class="odd"><td style="text-align: center;"><code>6</code></td><td style="text-align: center;"><code>110</code></td><td style="text-align: center;"><code>{a, b}</code></td></tr><tr class="even"><td style="text-align: center;"><code>7</code></td><td style="text-align: center;"><code>111</code></td><td style="text-align: center;"><code>{a, b, c}</code></td></tr></tbody></table>

> See [bwPowerSet.js](./bwPowerSet.js) file for bitwise solution.

### Backtracking Solution

In backtracking approach we’re constantly trying to add next element of the set to the subset, memorizing it and then removing it and try the same with the next element.

> See [btPowerSet.js](./btPowerSet.js) file for backtracking solution.

References
----------

-   [Wikipedia](https://en.wikipedia.org/wiki/Power_set)
-   [Math is Fun](https://www.mathsisfun.com/sets/power-set.html)
