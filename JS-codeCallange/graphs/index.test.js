const Graph = require('./index');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add vertices correctly', () => {
    expect(graph.addVertex('A')).toBe('A');
    expect(graph.addVertex('B')).toBe('B');
    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  it('should add edges correctly', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'C', 2);

    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 2 }]);
    expect(graph.getNeighbors('B')).toEqual([{ vertex: 'A', weight: 1 }]);
    expect(graph.getNeighbors('C')).toEqual([{ vertex: 'A', weight: 2 }]);
  });

  it('should return an empty array for neighbors of non-existent vertex', () => {
    expect(graph.getNeighbors('X')).toEqual([]);
  });

  it('should return an empty array for an empty graph', () => {
    expect(graph.getVertices()).toEqual([]);
  });

  it('should handle duplicate vertices gracefully', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.getVertices()).toEqual(['A', 'B']);
    expect(graph.addVertex('A')).toBe('A'); // Adding a duplicate should not change the graph
    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  it('should correctly determine the graph size', () => {
    expect(graph.size()).toBe(0);
    graph.addVertex('A');
    expect(graph.size()).toBe(1);
    graph.addVertex('B');
    expect(graph.size()).toBe(2);
  });

  it('should add edges with default weight', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 0 }]);
    expect(graph.getNeighbors('B')).toEqual([{ vertex: 'A', weight: 0 }]);
  });
});
