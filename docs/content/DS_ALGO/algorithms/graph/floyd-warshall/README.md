Floyd-Warshall Algorithm
========================

In computer science, the **Floyd-Warshall algorithm** is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices. Although it does not return details of the paths themselves, it is possible to reconstruct the paths with simple modifications to the algorithm.

Algorithm
---------

The Floyd-Warshall algorithm compares all possible paths through the graph between each pair of vertices. It is able to do this with `O(|V|^3)` comparisons in a graph. This is remarkable considering that there may be up to `|V|^2` edges in the graph, and every combination of edges is tested. It does so by incrementally improving an estimate on the shortest path between two vertices, until the estimate is optimal.

Consider a graph `G` with vertices `V` numbered `1` through `N`. Further consider a function `shortestPath(i, j, k)` that returns the shortest possible path from `i` to `j` using vertices only from the set `{1, 2, ..., k}` as intermediate points along the way. Now, given this function, our goal is to find the shortest path from each `i` to each `j` using only vertices in `{1, 2, ..., N}`.

![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/f9b75e25063384ccca499c56f9a279abf661ad3b)

![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/34ac7c89bbb18df3fd660225fd38997079e5e513) ![Recursive Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/0326d6c14def89269c029da59eba012d0f2edc9d)

This formula is the heart of the Floyd-Warshall algorithm.

Example
-------

The algorithm above is executed on the graph on the left below:

![Example](https://upload.wikimedia.org/wikipedia/commons/2/2e/Floyd-Warshall_example.svg)

In the tables below `i` is row numbers and `j` is column numbers.

**k = 0**

<table><thead><tr class="header"><th style="text-align: center;"></th><th style="text-align: center;">1</th><th style="text-align: center;">2</th><th style="text-align: center;">3</th><th style="text-align: center;">4</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>1</strong></td><td style="text-align: center;">0</td><td style="text-align: center;">∞</td><td style="text-align: center;">−2</td><td style="text-align: center;">∞</td></tr><tr class="even"><td style="text-align: center;"><strong>2</strong></td><td style="text-align: center;">4</td><td style="text-align: center;">0</td><td style="text-align: center;">3</td><td style="text-align: center;">∞</td></tr><tr class="odd"><td style="text-align: center;"><strong>3</strong></td><td style="text-align: center;">∞</td><td style="text-align: center;">∞</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td></tr><tr class="even"><td style="text-align: center;"><strong>4</strong></td><td style="text-align: center;">∞</td><td style="text-align: center;">−1</td><td style="text-align: center;">∞</td><td style="text-align: center;">0</td></tr></tbody></table>

**k = 1**

<table><thead><tr class="header"><th style="text-align: center;"></th><th style="text-align: center;">1</th><th style="text-align: center;">2</th><th style="text-align: center;">3</th><th style="text-align: center;">4</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>1</strong></td><td style="text-align: center;">0</td><td style="text-align: center;">∞</td><td style="text-align: center;">−2</td><td style="text-align: center;">∞</td></tr><tr class="even"><td style="text-align: center;"><strong>2</strong></td><td style="text-align: center;">4</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td><td style="text-align: center;">∞</td></tr><tr class="odd"><td style="text-align: center;"><strong>3</strong></td><td style="text-align: center;">∞</td><td style="text-align: center;">∞</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td></tr><tr class="even"><td style="text-align: center;"><strong>4</strong></td><td style="text-align: center;">∞</td><td style="text-align: center;">−</td><td style="text-align: center;">∞</td><td style="text-align: center;">0</td></tr></tbody></table>

**k = 2**

<table><thead><tr class="header"><th style="text-align: center;"></th><th style="text-align: center;">1</th><th style="text-align: center;">2</th><th style="text-align: center;">3</th><th style="text-align: center;">4</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>1</strong></td><td style="text-align: center;">0</td><td style="text-align: center;">∞</td><td style="text-align: center;">−2</td><td style="text-align: center;">∞</td></tr><tr class="even"><td style="text-align: center;"><strong>2</strong></td><td style="text-align: center;">4</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td><td style="text-align: center;">∞</td></tr><tr class="odd"><td style="text-align: center;"><strong>3</strong></td><td style="text-align: center;">∞</td><td style="text-align: center;">∞</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td></tr><tr class="even"><td style="text-align: center;"><strong>4</strong></td><td style="text-align: center;">3</td><td style="text-align: center;">−1</td><td style="text-align: center;">1</td><td style="text-align: center;">0</td></tr></tbody></table>

**k = 3**

<table><thead><tr class="header"><th style="text-align: center;"></th><th style="text-align: center;">1</th><th style="text-align: center;">2</th><th style="text-align: center;">3</th><th style="text-align: center;">4</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>1</strong></td><td style="text-align: center;">0</td><td style="text-align: center;">∞</td><td style="text-align: center;">−2</td><td style="text-align: center;">0</td></tr><tr class="even"><td style="text-align: center;"><strong>2</strong></td><td style="text-align: center;">4</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td><td style="text-align: center;">4</td></tr><tr class="odd"><td style="text-align: center;"><strong>3</strong></td><td style="text-align: center;">∞</td><td style="text-align: center;">∞</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td></tr><tr class="even"><td style="text-align: center;"><strong>4</strong></td><td style="text-align: center;">3</td><td style="text-align: center;">−1</td><td style="text-align: center;">1</td><td style="text-align: center;">0</td></tr></tbody></table>

**k = 4**

<table><thead><tr class="header"><th style="text-align: center;"></th><th style="text-align: center;">1</th><th style="text-align: center;">2</th><th style="text-align: center;">3</th><th style="text-align: center;">4</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;"><strong>1</strong></td><td style="text-align: center;">0</td><td style="text-align: center;">−1</td><td style="text-align: center;">−2</td><td style="text-align: center;">0</td></tr><tr class="even"><td style="text-align: center;"><strong>2</strong></td><td style="text-align: center;">4</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td><td style="text-align: center;">4</td></tr><tr class="odd"><td style="text-align: center;"><strong>3</strong></td><td style="text-align: center;">5</td><td style="text-align: center;">1</td><td style="text-align: center;">0</td><td style="text-align: center;">2</td></tr><tr class="even"><td style="text-align: center;"><strong>4</strong></td><td style="text-align: center;">3</td><td style="text-align: center;">−1</td><td style="text-align: center;">1</td><td style="text-align: center;">0</td></tr></tbody></table>

References
----------

-   [Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
-   [YouTube (by Abdul Bari)](https://www.youtube.com/watch?v=oNI0rf2P9gE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=74)
-   [YouTube (by Tushar Roy)](https://www.youtube.com/watch?v=LwJdNfdLF9s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=75)
