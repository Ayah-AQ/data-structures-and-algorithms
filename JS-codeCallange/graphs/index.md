<div style="float: left; width: 45%;">
<h1> Problem Domain </h1>
<p> 
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
<ol>
<li><strong>add vertex</strong></li>
<ul>
<li>Arguments: value</li>
<li>Returns: The added vertex</li>
<li>Add a vertex to the graph</li>
</ul>
<li><strong>add edge</strong></li>
<ul>
<li>Arguments: 2 vertices to be connected by the edge, weight (optional)</li>
<li>Returns: nothing</li>
<li>Adds a new edge between two vertices in the graph</li>
<li>If specified, assign a weight to the edge</li>
<li>Both vertices should already be in the Graph</li>
</ul>
<li><strong>get vertices</strong></li>
<ul>
<li>Arguments: none</li>
<li>Returns all of the vertices in the graph as a collection (set, list, or similar)</li>
<li>Empty collection returned if there are no vertices</li>
</ul>
<li><strong>get neighbors</strong></li>
<ul>
<li>Arguments: vertex</li>
<li>Returns a collection of edges connected to the given vertex</li>
<li>Include the weight of the connection in the returned collection</li>
<li>Empty collection returned if there are no vertices</li>
</ul>
<li><strong>size</strong></li>
<ul>
<li>Arguments: none</li>
<li>Returns the total number of vertices in the graph</li>
<li>0 if there are none</li>
</ul>
</ol>
</p>
<ul> <li>Input: 

1. `addVertex(value)`
   - Input: `value` (any type)


2. `addEdge(vertex1, vertex2, weight = 0)`
   - Input: `vertex1` (any type), `vertex2` (any type), `weight` (number, optional, default is 0)


3. `getVertices()`
   - Input: None


4. `getNeighbors(vertex)`
   - Input: `vertex` (any type)


5. `size()`
   - Input: None

</li>
<li> Output: 

1. `addVertex(value)`
   - Output: `value` (same as input)


2. `addEdge(vertex1, vertex2, weight = 0)`
   - Output: None


3. `getVertices()`
   - Output: An array of vertex values


4. `getNeighbors(vertex)`
   - Output: An array of edges (instances of the `Edge` class) connected to the specified vertex


5. `size()`
   - Output: The number of vertices in the graph (a non-negative integer)
</li>

 </ul> </div>

<div style="float: right; width: 45%;">
<h1> Algorithm </h1>

1. **Graph Initialization:**
   - The `Graph` class is initialized with an empty map to store vertices.

2. **Adding a Vertex:**
   - `addVertex(value)` method adds a vertex to the graph if it doesn't already exist.

3. **Adding an Edge:**
   - `addEdge(vertex1, vertex2, weight)` method adds an edge between two vertices with an optional weight.

4. **Getting Vertices:**
   - `getVertices()` method returns an array of all vertex values in the graph.

5. **Getting Neighbors:**
   - `getNeighbors(vertex)` method returns an array of edges (neighbors) connected to a specified vertex.

6. **Getting Graph Size:**
   - `size()` method returns the number of vertices in the graph.


</div>
<div style="float: right; width: 45%;">
<h1> Test Cases </h1>
graph.addVertex("A");</br>
graph.addVertex("B");</br>
graph.addVertex("C");</br>
</br>
graph.addEdge("A", "B", 1);</br>
graph.addEdge("A", "C", 2);</br>
graph.addEdge("B", "C", 3);</br>

</div>

<div style="float: right; width: 45%;">
<h1> Code </h1>
 <pre><code>
class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(value) {
    if (!this.vertices.has(value)) {
      this.vertices.set(value, []);
    }
    return value;
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const edge1 = new Edge(vertex2, weight);
      const edge2 = new Edge(vertex1, weight);
      this.vertices.get(vertex1).push(edge1);
      this.vertices.get(vertex2).push(edge2);
    }
  }

  getVertices() {
    return Array.from(this.vertices.keys());
  }

  getNeighbors(vertex) {
    if (this.vertices.has(vertex)) {
      return this.vertices.get(vertex);
    }
    return [];
  }

  size() {
    return this.vertices.size;
  }
}
 </pre></code>
</div>

<div style="float: left; width: 45%;">
<h1> Visiulization </h1>
A -> [B(1), C(2)]</br>
B -> [A(1), C(3)]</br>
C -> [A(2), B(3)]
</div>


<div style="float: left; width: 45%;">
<h1> BigO </h1>
 time complexity of this algorithm is O(1) </br>
 space complexity of this algorithm is O(1)
</div>