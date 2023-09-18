class Graph {
    constructor() {
        this.adjacent = {};
    }

    addNode(node) {
        if (!this.adjacent[node]) {
            this.adjacent[node] = [];
        }
    }

    addEdge(node1, node2, cost) {
        this.addNode(node1);
        this.addNode(node2);
        this.adjacent[node1][node2] = cost;
        this.adjacent[node2][node1] = cost; 
    }

    business_trip(cities) {
        if (cities.length === 0) {
            return 0; 
        }

        let totalCost = 0;

        for (let i = 0; i < cities.length - 1; i++) {
            const city1 = cities[i];
            const city2 = cities[i + 1];

            if (!this.adjacent[city1] || !this.adjacent[city2]) {
                return null; 
            }

            const cost = this.adjacent[city1][city2];
            if (cost === undefined) {
                return null; 
            }

            totalCost += cost;
        }

        return totalCost;
    }
}

module.exports = Graph;
