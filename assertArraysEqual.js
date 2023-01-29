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







//eqArrays([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 3]);

// eqArrays([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [3, 2, 1]);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);