

  const assertEqual = require('./assertEqual');
  const eqArrays = require('./eqArrays');


// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   const keys1 = Object.keys(object1); // Initialize a variable for keys of first object
//   const keys2 = Object.keys(object2); // Initialize a variable for keys of second object

//   // Compares length of keys1 and keys2
//   if (keys1.length !== keys2.length) {
//     return false;    
//   } 
//   else {
//     // Checking whether values are arrays and compare them. Keys are compared implicitly 
//     for (let key of keys1){    
//       if (Array.isArray(object1[key]) && Array.isArray(object2[key])){ 
//         if (!eqArrays(object1[key], object2[key])) {
//           return false;
//         }
      
//       } else if
//       // Comparing values that are not arrays
//       (object1[key] !== object2[key]) {
//         return false;
//       }
      
//     }

//   }

//   return true;
// };


const eqObjects = function(object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    return false;
  } else {

    for (const keyName of object1KeyArray) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        if(!eqArrays(object1[keyName], object2[keyName])) {
          return false;
        }
      } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') {
        if(!eqObjects(object1[keyName], object2[keyName])) {
          return false;
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = eqObjects;



