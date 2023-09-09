"use strict";
const Vertex = require("./vertix");
const Edge = require("./edge");

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
module.exports = Graph;