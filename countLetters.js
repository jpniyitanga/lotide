const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let output = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (output[letter] >= 1) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};
module.exports = countLetters;


