
// let eqArrays = function(array1, array2) {
// // Comparing length of arrays
//   if (array1.length != array2.length)
//     return false;
//   else {
//     // Comparing each element of array
//     for (let i = 0; i < array1.length; i++)
//       if (array1[i] !== array2[i])
//         return false;
//     return true;
//   }
// };

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
};

module.exports = eqArrays;







