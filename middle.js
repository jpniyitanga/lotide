let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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


let middle = function(array) {
  let middleElements = [];
  if (array.length === 0 || array.length === 2) {
    return middleElements;
  }    
  else if (array.length % 2 !== 0) {
    middleElements.push(array[(array.length - 1) / 2]);
    return middleElements;
  } else {
    middleElements.push(array[(array.length / 2) - 1 ]);
    middleElements.push(array[(array.length / 2) ]);
    return middleElements;
  }

    

};

console.log(middle([0,1, 3, 4]));