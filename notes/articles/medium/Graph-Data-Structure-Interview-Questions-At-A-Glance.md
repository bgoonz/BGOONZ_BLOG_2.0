Graph Data Structure Interview Questions At A Glance
====================================================

Because they’re just about the most important data structure there is.

------------------------------------------------------------------------

### Graph Data Structure Interview Questions At A Glance

Because they’re just about the most important data structure there is.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*D_VTiLB2q1sax7Dd.png" class="graf-image" /></figure>### Graphs

**graph**: collections of data represented by nodes and connections between nodes  
**graphs**: way to formally represent network; ordered pairs  
**graphs**: modeling relations between many items; Facebook friends (you = node; friendship = edge; bidirectional); twitter = unidirectional  
**graph theory**: study of graphs  
**big O of graphs**: G = V(E)

trees are a type of graph

Components required to make a graph:

-   <span id="ca43">**nodes or vertices**: represent objects in a dataset (cities, animals, web pages)</span>
-   <span id="a2ee">**edges**: connections between vertices; can be bidirectional</span>
-   <span id="fc4a">**weight**: cost to travel across an edge; optional (aka cost)</span>

Useful for:

-   <span id="769d">maps</span>
-   <span id="19f3">networks of activity</span>
-   <span id="93d9">anything you can represent as a network</span>
-   <span id="45a1">multi-way relational data</span>

Types of Graphs:

-   <span id="f259">**directed**: can only move in one direction along edges; which direction indicated by arrows</span>
-   <span id="1bfb">**undirected**: allows movement in both directions along edges; bidirectional</span>
-   <span id="e813">**cyclic**: weighted; edges allow you to revisit at least 1 vertex; example weather</span>
-   <span id="52d4">**acyclical**: vertices can only be visited once; example recipe</span>

Two common ways to represent graphs in code:

-   <span id="4380">**adjacency lists**: graph stores list of vertices; for each vertex, it stores list of connected vertices</span>
-   <span id="dedc">**adjacency matrices**: two-dimensional array of lists with built-in edge weights; denotes no relationship</span>

Both have strengths and weaknesses.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*PunyRdBT24D0NkD5AdhL9Q.png" class="graf-image" /></figure>### Questions

#### What is a Graph?

A Graph is a data structure that models objects and pairwise relationships between them with nodes and edges. For example: Users and friendships, locations and paths between them, parents and children, etc.

#### Why is it important to learn Graphs?

Graphs represent relationships between data. Anytime you can identify a relationship pattern, you can build a graph and often gain insights through a traversal. These insights can be very powerful, allowing you to find new relationships, like users who have a similar taste in music or purchasing.

#### How many types of graphs are there?

Graphs can be directed or undirected, cyclic or acyclic, weighted or unweighted. They can also be represented with different underlying structures including, but not limited to, adjacency lists, adjacency matrices, object and pointers, or a custom solution.

#### What is the time complexity (big-O) to add/remove/get a vertex/edge for a graph?

It depends on the implementation. (<a href="https://github.com/LambdaSchool/Graphs/tree/master/objectives/graph-representations" class="markup--anchor markup--p-anchor">Graph Representations</a>). Before choosing an implementation, it is wise to consider the tradeoffs and complexities of the most commonly used operations.

### Graph Representations

The two most common ways to represent graphs in code are adjacency lists and adjacency matrices, each with its own strengths and weaknesses. When deciding on a graph implementation, it’s important to understand the type of data and operations you will be using.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*J7ZaHRxtBYCkaiQZ.png" class="graf-image" /></figure>### Adjacency List

In an adjacency list, the graph stores a list of vertices and for each vertex, a list of each vertex to which it’s connected. So, for the following graph…

…an adjacency list in Python could look something like this:

    class Graph:
        def __init__(self):
            self.vertices = {
                              "A": {"B"},
                              "B": {"C", "D"},
                              "C": {"E"},
                              "D": {"F", "G"},
                              "E": {"C"},
                              "F": {"C"},
                              "G": {"A", "F"}
                            }

Note that this adjacency list doesn’t actually use any lists. The `vertices` collection is a `dictionary` which lets us access each collection of edges in O(1) constant time while the edges are contained in a `set` which lets us check for the existence of edges in O(1) constant time.

### Adjacency Matrix

Now, let’s see what this graph might look like as an adjacency matrix:

    class Graph:
        def __init__(self):
            self.edges = [[0,1,0,0,0,0,0],
                          [0,0,1,1,0,0,0],
                          [0,0,0,0,1,0,0],
                          [0,0,0,0,0,1,1],
                          [0,0,1,0,0,0,0],
                          [0,0,1,0,0,0,0],
                          [1,0,0,0,0,1,0]]

We represent this matrix as a two-dimensional array, or a list of lists. With this implementation, we get the benefit of built-in edge weights but do not have an association between the values of our vertices and their index.

In practice, both of these would probably contain more information by including Vertex or Edge classes.

### Tradeoffs

Both adjacency matrices and adjacency lists have their own strengths and weaknesses. Let’s explore their tradeoffs.

For the following:

    V: Total number of vertices in the graph
    E: Total number of edges in the graph
    e: Average number of edges per vertex

#### Space Complexity

-   <span id="f8f8">**Adjacency Matrix**: O(V ^ 2)</span>
-   <span id="1946">**Adjacency List**: O(V + E)</span>

Consider a sparse graph with 100 vertices and only one edge. An adjacency list would have to store all 100 vertices but only needs to keep track of that single edge. The adjacency matrix would need to store 100x100=10,000 possible connections, even though all but one would be 0.

Now consider a dense graph where each vertex points to each other vertex. In this case, the total number of edges will approach V² so the space complexities of each are comparable. However, dictionaries and sets are less space efficient than lists so for dense graphs, the adjacency matrix is more efficient.

Takeaway: Adjacency lists are more space efficient for **sparse** graphs while adjacency matrices become efficient for **dense** graphs.

#### Add Vertex

-   <span id="6257">**Adjacency Matrix**: O(V)</span>
-   <span id="6a8f">**Adjacency List**: O(1)</span>

Adding a vertex is extremely simple in an adjacency list:

    self.vertices["H"] = set()

Adding a new key to a dictionary is a constant-time operation.

For an adjacency matrix, we would need to add a new value to the end of each existing row, then add a new row at the end.

    for v in self.edges:
      self.edges[v].append(0)
    v.append([0] * len(self.edges + 1))

Remember that with Python lists, appending to the end of a list is usually O(1) due to over-allocation of memory but can be O(n) when the over-allocated memory fills up. When this occurs, adding the vertex can be O(V²).

Takeaway: Adding vertices is very efficient in adjacency lists but very inefficient for adjacency matrices.

#### Remove Vertex

-   <span id="8226">**Adjacency Matrix**: O(V ^ 2)</span>
-   <span id="85fd">**Adjacency List**: O(V)</span>

Removing vertices is pretty inefficient in both representations. In an adjacency matrix, we need to remove the removed vertex’s row, then remove that column from each other row. Removing an element from a list requires moving everything after that element over by one slot which takes an average of V/2 operations. Since we need to do that for every single row in our matrix, that results in a V² time complexity. On top of that, we need to reduce the index of each vertex after our removed index by 1 as well which doesn’t add to our quadratic time complexity, but does add extra operations.

For an adjacency list, we need to visit each vertex and remove all edges pointing to our removed vertex. Removing elements from sets and dictionaries is a O(1) operation, so this results in an overall O(V) time complexity.

Takeaway: Removing vertices is inefficient in both adjacency matrices and lists but more inefficient in matrices.

#### Add Edge

-   <span id="dbbe">**Adjacency Matrix**: O(1)</span>
-   <span id="3968">**Adjacency List**: O(1)</span>

Adding an edge in an adjacency matrix is quite simple:

    self.edges[v1][v2] = 1

Adding an edge in an adjacency list is similarly simple:

    self.vertices[v1].add(v2)

Both are constant-time operations.

Takeaway: Adding edges to both adjacency lists and matrices is very efficient.

#### Remove Edge

-   <span id="b417">**Adjacency Matrix**: O(1)</span>
-   <span id="d794">**Adjacency List**: O(1)</span>

Removing an edge from an adjacency matrix is quite simple:

    self.edges[v1][v2] = 0

Removing an edge from an adjacency list is similarly simple:

    self.vertices[v1].remove(v2)

Both are constant-time operations.

Takeaway: Removing edges from both adjacency lists and matrices is very efficient.

#### Find Edge

-   <span id="dc68">**Adjacency Matrix**: O(1)</span>
-   <span id="2b87">**Adjacency List**: O(1)</span>

Finding an edge in an adjacency matrix is quite simple:

    return self.edges[v1][v2] > 0

Finding an edge in an adjacency list is similarly simple:

    return v2 in self.vertices[v1]

Both are constant-time operations.

Takeaway: Finding edges from both adjacency lists and matrices is very efficient.

#### Get All Edges from Vertex

-   <span id="798e">**Adjacency Matrix**: O(V)</span>
-   <span id="fa79">**Adjacency List**: O(1)</span>

Say you want to know all the edges originating from a particular vertex. With an adjacency list, this is as simple as returning the value from the vertex dictionary:

    return self.vertex[v]

In an adjacency matrix, however, it’s a bit more complicated. You would need to iterate through the entire row and populate a list based on the results:

    v_edges = []
    for v2 in self.edges[v]:
        if self.edges[v][v2] > 0:
            v_edges.append(v2)
    return v_edges

Takeaway: Fetching all edges is more efficient in an adjacency list than an adjacency matrix.

### Breadth-First Search

Can use breadth-first search when searching a graph; explores graph outward in rings of increasing distance from starting vertex; never attempts to explore vertex it is or has already explored

#### BFS

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WOvrysI4fX6ePqN-.gif" class="graf-image" /></figure>### Applications of BFS

-   <span id="149a">pathfinding, routing</span>
-   <span id="9ab5">web crawlers</span>
-   <span id="31af">find neighbor nodes in P2P network</span>
-   <span id="13aa">finding people/connections away on social network</span>
-   <span id="4f5f">find neighboring locations on graph</span>
-   <span id="d1b5">broadcasting on a network</span>
-   <span id="4061">cycle detection in a graph</span>
-   <span id="0f7f">finding connected components</span>
-   <span id="a86f">solving several theoretical graph problems</span>

### Coloring BFS

It’s useful to color vertexes as you arrive at them and as you leave them behind as already searched.

**unlisted**: white  
**vertices whose neighbors are being explored**: gray  
**vertices with no unexplored neighbors**: black

### BFS Pseudocode

    def BFS(graph, start_vert):
        for v of graph.vertices:
            v.color = white
        start_vert.color = gray
        queue.enqueue(start_vert)
        while !queue isEmpty():
        # peek at head but don't dequeue
        u = queue[0]
        for v of u.neighbors:
            if v.color == white:
                v.color == gray
                queue.enqueue(v)
        queue.dequeue()
        u.color = black

### BFS Steps

1.  <span id="ccee">Mark graph vertices white.</span>
2.  <span id="26e7">Mark starting vertex gray.</span>
3.  <span id="863c">Enqueue starting vertex.</span>
4.  <span id="b8d8">Check if queue is not empty.</span>
5.  <span id="2dc5">If not empty, peek at first item in queue.</span>
6.  <span id="0e5c">Loop through that vertex’s neighbors.</span>
7.  <span id="1a9e">Check if unvisited.</span>
8.  <span id="7165">If unvisited, mark as gray and enqueue vertex.</span>
9.  <span id="338b">Dequeue current vertex and mark as black.</span>
10. <span id="8460">Repeat until all vertices are explored.</span>

### Depth-First Search

dives down the graph as far as it can before backtracking and exploring another branch; never attempts to explore a vertex it has already explored or is in the process of exploring; exact order will vary depending on which branches get taken first and which is starting vertex

#### DFS:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*DZVdn1kWaiJXQ_zc.gif" class="graf-image" /></figure>### Applications of DFS

-   <span id="044e">preferred method for exploring a graph if we want to ensure we visit every node in graph</span>
-   <span id="b086">finding minimum spanning trees of weighted graphs</span>
-   <span id="c419">pathfinding</span>
-   <span id="281e">detecting cycles in graphs</span>
-   <span id="6739">solving and generating mazes</span>
-   <span id="20b5">topological sorting, useful for scheduling sequences of dependent jobs</span>

### DFS Pseudocode

    # recursion
    def explore(graph):
        visit(this_vert)
        explore(remaining_graph)

    # iterative
    def DFS(graph):
        for v of graph.verts:
            v.color = white
            v.parent = null
        for v of graph.verts:
            if v.color == white:
                DFS_visit(v)

    def DFS_visit(v):
        v.color = gray
        for neighbor of v.adjacent_nodes:
            if neighbor.color == white:
                neighbor.parent = v
                DFS_visit(neighbor)
        v.color = black

### DFS Steps

1.  <span id="b45a">Take graph as parameter.</span>
2.  <span id="a012">Marks all vertices as unvisited.</span>
3.  <span id="1bd5">Sets vertex parent as null.</span>
4.  <span id="0f24">Passes each unvisited vertex into DFS\_visit().</span>
5.  <span id="9011">Mark current vertex as gray.</span>
6.  <span id="8df7">Loops through its unvisited neighbors.</span>
7.  <span id="927d">Sets parent and makes recursive call to DFS\_visit().</span>
8.  <span id="6d4c">Marks vertex as black.</span>
9.  <span id="e753">Repeat until done.</span>

### Connected Components

**connected components**: in a disjoint graph, groups of nodes on a graph that are connected with each other

### Uses

-   <span id="0c54">typically very large graphs, networks</span>
-   <span id="1bdc">social networks</span>
-   <span id="66be">networks (which devices can reach one another)</span>
-   <span id="210c">epidemics (how spread, who started, where next)</span>

**key to finding connected components**: searching algorithms, breadth-first search

### How to find connected componnents

-   <span id="4bd0">for each node in graph:</span>
-   <span id="6e20">has it been explored</span>
-   <span id="40be">if no, do BFS</span>
-   <span id="96f4">all nodes reached are connected</span>
-   <span id="e152">if yes, already in connected component</span>
-   <span id="3f15">go to next node</span>

**strongly connected components**: any node in this group can get to any other node

### Bonus Python Question:

    '''

    This Bellman-Ford Code is for determination whether we can get

    shortest path from given graph or not for single-source shortest-paths problem.

    In other words, if given graph has any negative-weight cycle that is reachable

    from the source, then it will give answer False for "no solution exits".

    For argument graph, it should be a dictionary type

    such as

    graph = {

    'a': {'b': 6, 'e': 7},

    'b': {'c': 5, 'd': -4, 'e': 8},

    'c': {'b': -2},

    'd': {'a': 2, 'c': 7},

    'e': {'b': -3}

    }

### Review of Concepts:

<figure><img src="https://cdn-images-1.medium.com/max/1200/0*oOYEgDBV2yhim9SC" class="graf-image" /></figure>

-   <span id="9d7a">A graph is any collection of nodes and edges.</span>
-   <span id="7a3a">A graph is a less restrictive class of collections of nodes than structures like a tree.</span>
-   <span id="8d05">It doesn’t need to have a root node (not every node needs to be accessible from a single node)</span>
-   <span id="6fac">It can have cycles (a group of nodes whose paths begin and end at the same node)</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*nN2X6TCy0JSh4mfL.gif" alt="Cycles in a graph" class="graf-image" /><figcaption>Cycles in a graph</figcaption></figure>-   <span id="783b">Cycles are not always “isolated”, they can be one part of a larger graph. You can detect them by starting your search on a specific node and finding a path that takes you back to that same node.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*0EdGqDUlj_HEnyEc.png" class="graf-image" /></figure>-   <span id="fe92">Any number of edges may leave a given node</span>
-   <span id="915b">A Path is a sequence of nodes on a graph</span>

### Undirected Graph

**Undirected Graph:** An undirected graph is one where the edges do not specify a particular direction. The edges are bi-directional.

### Types:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*u8Nu829gPtxU6J0siwljJA.png" class="graf-image" /></figure>### Dense Graph

-   <span id="7b24">Dense Graph — A graph with lots of edges.</span>
-   <span id="5682">“Dense graphs have many edges. But, wait! ⚠️ I know what you must be thinking, how can you determine what qualifies as “many edges”? This is a little bit too subjective, right? ? I agree with you, so let’s quantify it a little bit:</span>
-   <span id="0e05">Let’s find the maximum number of edges in a directed graph. If there are |V| nodes in a directed graph (in the example below, six nodes), that means that each node can have up to |v| connections (in the example below, six connections).</span>
-   <span id="59d8">Why? Because each node could potentially connect with all other nodes and with itself (see “loop” below). Therefore, the maximum number of edges that the graph can have is |V|\\\*|V| , which is the total number of nodes multiplied by the maximum number of connections that each node can have.”</span>
-   <span id="146f">When the number of edges in the graph is close to the maximum number of edges, the graph is dense.</span>

### Sparse Graph

-   <span id="5e53">Sparse Graph — Few edges</span>
-   <span id="37f5">When the number of edges in the graph is significantly fewer than the maximum number of edges, the graph is sparse.</span>

### Weighted Graph

-   <span id="755c">Weighted Graph — Edges have a cost or a weight to traversal</span>

### Directed Graph

-   <span id="416f">Directed Graph — Edges only go one direction</span>

### *Undirected* Graph

-   <span id="6030">Undirected Graph — Edges don’t have a direction. All graphs are assumed to be undirected unless otherwise stated</span>

### Node Class

Uses a class to define the neighbors as properties of each node.

### Adjacency Matrix

The row index will correspond to the source of an edge and the column index will correspond to the edges destination.

-   <span id="ab18">When the edges have a direction, `matrix[i][j]` may not be the same as `matrix[j][i]`</span>
-   <span id="3499">It is common to say that a node is adjacent to itself so `matrix[x][x]` is true for any node</span>
-   <span id="9883">Will be O(n²) space complexity</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*2bAUSiq_ej3XTSUMryjJUA.png" class="graf-image" /></figure>### Adjacency List

Seeks to solve the shortcomings of the matrix implementation. It uses an object where keys represent node labels and values associated with that key are the adjacent node keys held in an array.

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 3, 2021](https://medium.com/p/fc6b1afbd8be).

<a href="https://medium.com/@bryanguner/verbal-technical-interview-questions-about-graph-data-structures-fc6b1afbd8be" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
