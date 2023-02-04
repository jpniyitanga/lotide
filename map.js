let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }

};



let eqArrays = function(array1, array2) {
  // Comparing length of arrays
  if (array1.length != array2.length)
    return false;
  else {
    // Comparing each element of array
    for (let i = 0; i < array1.length; i++)
      if (array1[i] !== array2[i])
        return false;
    return true;
  }
  
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('----');
  }
  console.log(result);
  return result;

};
let results1 = map(words, word => word[0]);

console.log(results1);



assertArraysEqual([ 'g', 'c', 't', 'm'], results1);