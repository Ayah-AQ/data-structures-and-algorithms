const { Hashmap, LinkedList, leftJoin } = require('./index');

describe('Hashmap', () => {
  let hashmap;

  beforeEach(() => {
    hashmap = new Hashmap();
  });

  it('should insert and retrieve values correctly', () => {
    hashmap.insert('key1', 'value1');
    hashmap.insert('key2', 'value2');
    expect(hashmap.get('key1')).toBe('value1');
    expect(hashmap.get('key2')).toBe('value2');
  });

  it('should return null for non-existent keys', () => {
    expect(hashmap.get('nonexistent')).toBeNull();
  });

  
});


describe('leftJoin', () => {
  it('should perform a left join correctly', () => {
    const synonyms = new Hashmap();
    const antonyms = new Hashmap();

    synonyms.insert('happy', 'joyful');
    synonyms.insert('sad', 'unhappy');
    synonyms.insert('smart', 'intelligent');
    antonyms.insert('happy', 'sad');
    antonyms.insert('smart', 'dumb');

    const result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([
      ['happy', 'joyful', 'sad'],
      ['smart', 'intelligent', 'dumb'],
      ['sad', 'unhappy', null],
    ]);
  });
});
