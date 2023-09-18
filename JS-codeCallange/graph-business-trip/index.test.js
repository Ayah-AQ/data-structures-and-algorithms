const Graph = require('.'); 

describe('Graph', () => {
  let graphInstance;

  beforeEach(() => {
    graphInstance = new Graph();
    graphInstance.addEdge("City1", "City2", 10);
    graphInstance.addEdge("City2", "City3", 35);
    graphInstance.addEdge("City3", "City4", 30);
  });

  describe('business_trip', () => {
    it('should calculate the cost of a valid trip', () => {
      const cities = ["City1", "City2", "City3", "City4"];
      const cost = graphInstance.business_trip(cities);
      expect(cost).toBe(75); 
    });

    it('should return 0 for an empty trip', () => {
      const cities = [];
      const cost = graphInstance.business_trip(cities);
      expect(cost).toBe(0);
    });

    it('should return null for an invalid trip', () => {
      const cities = ["City1", "City2", "City4"];
      const cost = graphInstance.business_trip(cities);
      expect(cost).toBeNull();
    });
  });
});
