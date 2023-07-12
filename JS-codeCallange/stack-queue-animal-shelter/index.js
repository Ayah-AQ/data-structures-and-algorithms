class Animal {
    constructor(species, name) {
      this.species = species;
      this.name = name;
    }
  }
  
  class AnimalShelter {
    constructor() {
      this.animals = [];
    }
  
    enqueue(animal) {
      this.animals.push(animal);
    }
  
    dequeue(pref) {
      if (pref !== "dog" && pref !== "cat") {
        return null;
      }
  
      let foundIndex = -1;
      for (let i = 0; i < this.animals.length; i++) {
        if (this.animals[i].species === pref) {
          foundIndex = i;
          break;
        }
      }
  
      if (foundIndex !== -1) {
        return this.animals.splice(foundIndex, 1)[0];
      }
  
      return null;
    }
  }
  
  module.exports = { AnimalShelter, Animal };
  