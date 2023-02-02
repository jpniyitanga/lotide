let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }

};

let countLetters = function(sentence) {
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


let result = countLetters("Hello");

console.log(result);

assertEqual(countLetters("Hello").l, 2);