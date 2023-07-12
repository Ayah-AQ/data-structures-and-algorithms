const { AnimalShelter, Animal } = require('./index');

describe('AnimalShelter', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  test('should dequeue dogs and cats based on preference', () => {
    const dog1 = new Animal("dog", "Max");
    const dog2 = new Animal("dog", "Buddy");
    const cat1 = new Animal("cat", "Luna");
    const cat2 = new Animal("cat", "Charlie");

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);

    expect(animalShelter.dequeue("dog").name).toBe("Max");
    expect(animalShelter.dequeue("cat").name).toBe("Luna");
    expect(animalShelter.dequeue("dog").name).toBe("Buddy");
    expect(animalShelter.dequeue("bird")).toBeNull();
  });

  test('should return null when preference is neither dog nor cat', () => {
    const dog = new Animal("dog", "Max");
    animalShelter.enqueue(dog);

    expect(animalShelter.dequeue("rabbit")).toBeNull();
    expect(animalShelter.dequeue("")).toBeNull();
    expect(animalShelter.dequeue(null)).toBeNull();
  });
});
