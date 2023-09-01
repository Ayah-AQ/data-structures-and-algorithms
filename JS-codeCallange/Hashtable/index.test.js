const Hashtable = require('./index');

describe('Hashtable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new Hashtable(10);
  });

  test('Setting and getting values', () => {
    hashTable.set('name', 'Alice');
    hashTable.set('age', 30);
    hashTable.set('city', 'Wonderland');

    expect(hashTable.get('name')).toBe('Alice');
    expect(hashTable.get('age')).toBe(30);
    expect(hashTable.get('city')).toBe('Wonderland');
  });

  test('Checking if keys exist', () => {
    hashTable.set('name', 'Alice');

    expect(hashTable.has('name')).toBe(true);
    expect(hashTable.has('age')).toBe(false);
  });

  test('Getting all keys', () => {
    hashTable.set('name', 'Alice');
    hashTable.set('age', 30);
    hashTable.set('city', 'Wonderland');

    expect(hashTable.keys()).toEqual(['name', 'age', 'city']);
  });

});
