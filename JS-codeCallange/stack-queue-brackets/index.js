
function validateBrackets(string) {
    const stack = [];
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      
      if (isOpenBracket(currentChar)) {
        stack.push(currentChar);
      } else if (isCloseBracket(currentChar)) {
        if (stack.length === 0 || !isMatchingPair(stack.pop(), currentChar)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  function isOpenBracket(char) {
    return char === '(' || char === '[' || char === '{';
  }
  
  function isCloseBracket(char) {
    return char === ')' || char === ']' || char === '}';
  }
  
  function isMatchingPair(openBracket, closeBracket) {
    return (
      (openBracket === '(' && closeBracket === ')') ||
      (openBracket === '[' && closeBracket === ']') ||
      (openBracket === '{' && closeBracket === '}')
    );
  }
  
  module.exports = validateBrackets;
  