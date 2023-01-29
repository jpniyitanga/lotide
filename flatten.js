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

  let flatten = function(arrayOfArrays) {
    return arrayOfArrays.flat();
  };

  console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]