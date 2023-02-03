let assertObjectsEqual = function(actual, expected) {
  let inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
  

};




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // Initialize a variable for keys of first object
  const keys2 = Object.keys(object2); // Initialize a variable for keys of second object

  // Compares length of keys1 and keys2
  if (keys1.length !== keys2.length) {
    return false;    
  } else {
    // cheking whether values are arrays and comparing them
    for (let key of keys1){
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      
      } else if
      // Comparing values that are not arrays
      (object1[key] !== object2[key]) {
        return false;
      }
      
    }

  }

  return true;
};

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});






