function findFirstRepeated(word) {
    var words = word.split(" ");
    var setOfWords = new Map();
  
    for (let i = 0; i < words.length; i++) {
      if (setOfWords.has(words[i])) {
        setOfWords.set(words[i], setOfWords.get(words[i]) + 1);
      } else {
        setOfWords.set(words[i], 1);
      }
    }
  
    for (let i = 0; i < words.length; i++) {
      var count = setOfWords.get(words[i]);
      if (count > 1) {
        return words[i];
      }
    }
    
    return "NoRepetition";
  }
  

  module.exports = findFirstRepeated;
