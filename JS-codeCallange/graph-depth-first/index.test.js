const { Vertex, Edge, Graph } = require('.'); 

describe('Graph', () => {
  let myGraph;

  beforeEach(() => {
    myGraph = new Graph();
  });

  describe('addVertex', () => {
    it('should add a vertex to the graph', () => {
      const vertex = new Vertex(0);
      myGraph.addVertex(vertex);
      expect(Array.from(myGraph.getVertices()).length).toBe(1);
    });

    it('should not add duplicate vertices', () => {
      const vertex = new Vertex(0);
      myGraph.addVertex(vertex);
      myGraph.addVertex(vertex); // Adding the same vertex again
      expect(Array.from(myGraph.getVertices()).length).toBe(1);
    });
  });

  describe('addDirectedEdge', () => {
    
    it('should not add an edge if either vertex does not exist', () => {
      const vertex1 = new Vertex(0);
      const vertex2 = new Vertex(1);
      myGraph.addDirectedEdge(vertex1, vertex2, 5);
      expect(Array.from(myGraph.getVertices()).length).toBe(0);
    });
  });

  describe('addUndirectedEdge', () => {
    

    it('should not add an undirected edge if either vertex does not exist', () => {
      const vertex1 = new Vertex(0);
      const vertex2 = new Vertex(1);
      myGraph.addUndirectedEdge(vertex1, vertex2, 5);
      expect(Array.from(myGraph.getVertices()).length).toBe(0);
    });
  });

  describe('getVertices', () => {
    it('should return an array of vertices', () => {
      const vertex1 = new Vertex(0);
      const vertex2 = new Vertex(1);
      myGraph.addVertex(vertex1);
      myGraph.addVertex(vertex2);
      const vertices = Array.from(myGraph.getVertices());
      expect(vertices.length).toBe(2);
      expect(vertices).toContain(vertex1);
      expect(vertices).toContain(vertex2);
    });
  });

  describe('getNeighbors', () => {
    
    it('should return an empty array for a non-existent vertex', () => {
      const vertex = new Vertex(0);
      const neighbors = myGraph.getNeighbors(vertex);
      expect(neighbors.length).toBe(0);
    });
  });

  describe('getSize', () => {
    it('should return the number of vertices in the graph', () => {
      const vertex1 = new Vertex(0);
      const vertex2 = new Vertex(1);
      myGraph.addVertex(vertex1);
      myGraph.addVertex(vertex2);
      const size = myGraph.getSize();
      expect(size).toBe(2);
    });
  });

  describe('depthFirst', () => {
    it('should perform depth-first traversal starting from a vertex', () => {
      const vertex1 = new Vertex(0);
      const vertex2 = new Vertex(1);
      const vertex3 = new Vertex(2);
      myGraph.addVertex(vertex1);
      myGraph.addVertex(vertex2);
      myGraph.addVertex(vertex3);
      myGraph.addDirectedEdge(vertex1, vertex2);
      myGraph.addDirectedEdge(vertex1, vertex3);
      myGraph.addDirectedEdge(vertex2, vertex3);

      const traversalResult = myGraph.depthFirst(vertex1);
      expect(traversalResult).toEqual([vertex1, vertex2, vertex3]);
    });

     });
});
