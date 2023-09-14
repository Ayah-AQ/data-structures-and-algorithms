const Graph = require('./index'); 

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add nodes to the graph', () => {
    graph.addNode('A');
    expect(Object.keys(graph.adjacent)).toContain('A');
  });

  it('should add edges to the graph', () => {
    graph.addEdge('A', 'B');
    expect(graph.adjacent['A']).toContain('B');
    expect(graph.adjacent['B']).toContain('A'); 
  });

  it('should perform BFS traversal', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');

    const bfsResult = graph.bfs('A');
    expect(bfsResult).toEqual(['A', 'B', 'C', 'D', 'E']);
  });
});
