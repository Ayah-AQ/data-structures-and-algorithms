class Graph {
    constructor() {
      this.adjacent = {};
    }
  
    addNode(node) {
      if (!this.adjacent[node]) {
        this.adjacent[node] = [];
      }
    }
  
    addEdge(node1, node2) {
      this.addNode(node1);
      this.addNode(node2);
      this.adjacent[node1].push(node2);
      this.adjacent[node2].push(node1); // If the graph is undirected
    }
  
    bfs(startNode) {
      const queue = [];
      const visitedNodes = [];
  
      queue.push(startNode);
      visitedNodes.push(startNode);
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
  
        for (const neighbor of this.adjacent[currentNode]) {
          if (!visitedNodes.includes(neighbor)) {
            visitedNodes.push(neighbor);
            queue.push(neighbor);
          }
        }
      }
  
      return visitedNodes;
    }
  }
  
  module.exports = Graph;

  