const findFirstRepeated = require('./index')


describe('findFirstRepeated', () => {

    it('should return the first repeated word', () => {
      const input = 'apple banana orange apple banana';
      const result = findFirstRepeated(input);
      expect(result).toBe('apple');
    });
  
    it('should return "NoRepetition" if no words are repeated', () => {
      const input = 'apple banana orange';
      const result = findFirstRepeated(input);
      expect(result).toBe('NoRepetition');
    });

});

