// bracketValidator.test.js

const validateBrackets = require('./index');

test('Validating balanced brackets', () => {
  expect(validateBrackets('{}')).toBe(true);
  expect(validateBrackets('{}(){}')).toBe(true);
  expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
  expect(validateBrackets('(){}[[]]')).toBe(true);
  expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
});

test('Validating unbalanced brackets', () => {
  expect(validateBrackets('[({}]')).toBe(false);
  expect(validateBrackets('(](')).toBe(false);
  expect(validateBrackets('{(})')).toBe(false);
});
