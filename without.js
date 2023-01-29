let assertArraysEqual = function(actual, expected) {
  if (without(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }

};



let eqArrays = function(array1, array2) {
  // Comparing length of arrays
  if (array1.length !== array2.length)
    return false;
  else {
    // Comparing each element of array
    for (let i = 0; i < array1.length; i++)
      if (array1[i] !== array2[i])
        return false;
    return true;
  }
  
};


let without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    //console.log(source[i]);
    let index = source[i];
    if (!itemsToRemove.includes(index)) {
      result.push(index);
    }
      
  }
  return result;
};


const words = ["hello", "world", "lighthouse"];
const words2 = ["hello", "ottawa", "lighthouse" , "labs"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words2, ["hello", "ottawa", "lighthouse"]);






console.log(without([1, 2, 3], [1]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]